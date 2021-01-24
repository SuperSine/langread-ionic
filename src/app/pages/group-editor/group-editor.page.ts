import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera,CameraOptions  } from '@ionic-native/camera/ngx';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalController, NavParams } from '@ionic/angular';
import { ImageCropperComponent } from 'src/app/components/image-cropper/image-cropper.component';
import { environment  } from 'src/environments/environment';
import { AvatarService } from 'src/app/services/avatar.service';
import { Globals } from 'src/app/globals';
import { GroupService } from 'src/app/services/group.service';
import {GroupInputType, GroupType} from 'src/app/graphql-components';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-group-editor',
  templateUrl: './group-editor.page.html',
  styleUrls: ['./group-editor.page.scss'],
})
export class GroupEditorPage implements OnInit {

  constructor(public formBuilder:FormBuilder,
              private file:File,
              private modalCtrl:ModalController,
              private avatarServer:AvatarService,
              private globals:Globals,
              public groupService:GroupService,
              private router:Router,
              private navParms:NavParams) {

    this.editorForm = formBuilder.group({
      id: [''],
      name: ['', Validators.compose([Validators.required, this.groupId ? null : this.groupService.checkGroupName.bind(this.groupService)])],
      description: ['', Validators.compose([Validators.required])],
      groupTypeId: ['1', Validators.compose([Validators.required])],
      languages: ['', Validators.compose([Validators.required])],
    });

    this.langList = environment.targetLanguages;
  }

  get groupId(){

    var groupId = this.navParms.get('id');

    if(groupId)
      return groupId;
    else{
      const reg = /group-editor\/(.+)/g;
      const values = reg.exec(this.router.url);
  
      return values != null ? values[1] : "";
    }
  }

  ngOnInit() {
    this.editorForm.updateValueAndValidity();

    if(this.groupId)
      this.currentGroup = this.groupService.getGroup(this.groupId)
                                           .pipe(tap(group => {
                                              this.editorForm.patchValue(group);
                                          }));
    else
      this.currentGroup = of({} as GroupType);
  }

  save(){
    const data = this.editorForm.getRawValue();
    this.groupService.saveGroup(data).subscribe(async ({data:{group}}:any) => {
      const data = group.create ? group.create : group.update;
      if(this.croppedImage){
        await this.saveFile(data.id);
      }

      this.close(data);
    })
  }

  close(data:any=null){
    this.modalCtrl.dismiss(data);
  }

  async saveFile(filename:string) {
    const b64 = this.croppedImage.split(';')[1].split(',')[1];
    const blob = this.globals.b64ToBlob(b64, 'image/jpeg');
    const file = this.globals.blobToFile(blob, `${filename}.jpeg`);
    await this.avatarServer.upload(filename, file);
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

  get isNameAvailable(){
    return this.editorForm.get('name').value && 
            !this.editorForm.get('name').hasError('groupNameNotAvailable');
  }

  public editorForm: FormGroup;
  public picForm: FormGroup;

  public isLoading:boolean;
  public croppedImage:string;
  public langList:any[];

  public currentGroup:Observable<GroupType>;

}
