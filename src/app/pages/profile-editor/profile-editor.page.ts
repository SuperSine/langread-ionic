import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { GlobalService, LocalSetting } from 'src/app/services/global.service';
import { catchError, tap, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserType } from 'src/app/graphql-components';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {environment} from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { AvatarService } from 'src/app/services/avatar.service';
import { ModalController } from '@ionic/angular';
import { Globals } from 'src/app/globals';
import { File } from '@ionic-native/file/ngx';
import { ImageCropperComponent } from 'src/app/components/image-cropper/image-cropper.component';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.page.html',
  styleUrls: ['./profile-editor.page.scss'],
})
export class ProfileEditorPage implements OnInit {

  constructor(
              private translate:TranslateService,
              private router:Router,
              private authService:AuthService, 
              private globalService:GlobalService, 
              private formBuilder:FormBuilder,
              private avatarService:AvatarService,
              private modalCtrl:ModalController,
              private globals:Globals,
              private file:File
              ) {
    this.profileForm = formBuilder.group({
      id:[''],
      firstName: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.minLength(3)])],
      userName: ['', Validators.compose([Validators.minLength(3)])],
      displayLanguage:['', Validators.compose([Validators.required])],
      sourceLanguage:['', Validators.compose([Validators.required])],
      targetLanguage:['', Validators.compose([Validators.required])],
      darkMode:[false]
    });

    this.localSetting = {
      darkMode:false
    };
  }

  async ngOnInit() {
    this.user = this.authService.watchProfile();

    this.user.subscribe((result) => {
      this.profileForm.patchValue({
        id:result.appId,
        firstName: result.firstName,
        lastName: result.lastName,
        userName: result.userName,
        displayLanguage: result.displayLanguage.toLowerCase(),
        sourceLanguage: result.sourceLanguage.toLowerCase(),
        targetLanguage: result.targetLanguage.toLowerCase()
      });
    });

    this.localSetting = await this.globalService.getSetting();

    this.profileForm.patchValue({
      darkMode: this.localSetting.darkMode
    });

    this.appVersion = environment.appVersion;

  }

  get sourceLanguages(){
    return this._sourceLanguages.filter((e)=>e.code != this.profileForm.value.targetLanguage);
  }

  get targetLanguages(){
    return this._targetLanguages.filter((e)=> e.code != this.profileForm.value.sourceLanguage);
  }

  async save(event){
    this.localSetting.darkMode = this.profileForm.value.darkMode;

    this.globalService.saveSetting(this.localSetting);

    await this.saveFile(this.profileForm.get("id").value);

    this.authService.updateUser(this.profileForm.value).pipe(
      catchError(err => { this.globalService.throwError(err.graphQLErrors); return of(true);}),
      tap((result:any)=>{

        if(!(typeof result == 'boolean')){
          let data = result.data.user.update;
          this.authService.saveUserObj(data);
          this.translate.use(data.displayLanguage);
        };

        return result;
      }),
      startWith(false)
    ).subscribe((youCanClick) =>{
      if(typeof youCanClick == 'boolean')
        this.youCanClick = youCanClick as boolean;
      else
        this.router.navigateByUrl('/menu/app-profile',{ skipLocationChange:true });

    });

  }

  async saveFile(filename:string) {
    const b64 = this.croppedImage.split(';')[1].split(',')[1];
    const blob = this.globals.b64ToBlob(b64, 'image/jpeg');
    const file = this.globals.blobToFile(blob, `${filename}.jpeg`);
    await this.avatarService.upload(filename, file);
  }

  async readFile($event) {
    this.file = $event.target.files[0];

    var reader = new FileReader();
    
    reader.onload = async (_event) => { 
      var imageData = reader.result;

      const modal = await this.modalCtrl.create({
        component: ImageCropperComponent,
        componentProps:{
          imageData
        }
      });

      modal.onDidDismiss().then(({data}) => {
        this.croppedImage = data;
      });
  
      await modal.present();
    }

    reader.readAsDataURL($event.target.files[0]);

  }

  public profileForm:FormGroup;
  public youCanClick:boolean = true;
  public user:Observable<UserType>;

  public displayLanguages:any[] = environment.displayLanguages;
  public _sourceLanguages:any[] = environment.sourceLanguages;
  public _targetLanguages:any[] = environment.targetLanguages;
  public localSetting:LocalSetting;
  public appVersion:string;

  public croppedImage:string;

}
