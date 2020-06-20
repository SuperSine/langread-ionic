import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { GlobalService, LocalSetting } from 'src/app/services/global.service';
import { catchError, tap, startWith } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserType } from 'src/app/graphql-components';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {environment} from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

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
              private formBuilder:FormBuilder) {
    this.profileForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.minLength(3)])],
      userName: ['', Validators.compose([Validators.minLength(3)])],
      displayLanguage:['', Validators.compose([Validators.required])],
      targetLanguage:['', Validators.compose([Validators.required])],
      darkMode:[false]
    });

    this.localSetting = {
      darkMode:false
    };
  }

  async ngOnInit() {
    this.user = await this.authService.getUserObj(true);
    this.localSetting = await this.globalService.getSetting();

    this.profileForm.patchValue({
      firstName:this.user.firstName,
      lastName:this.user.lastName,
      userName:this.user.userName,
      displayLanguage:this.user.displayLanguage.toLowerCase(),
      targetLanguage:this.user.targetLanguage.toLowerCase(),
      darkMode: this.localSetting.darkMode
    });

  }

  save(event){
    this.localSetting.darkMode = this.profileForm.value.darkMode;

    this.globalService.saveSetting(this.localSetting);

    this.authService.updateUser(this.profileForm.value).pipe(
      catchError(err => { this.globalService.throwError(err.graphQLErrors); return of(true);}),
      tap((result:any)=>{
        console.log('tap result',result);
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
        this.router.navigateByUrl('/menu/app-profile',{skipLocationChange:true});

    });

  }

  public profileForm:FormGroup;
  public youCanClick:boolean = true;
  public user:UserType;

  public displayLanguages:any[] = environment.displayLanguages;
  public targetLanguages:any[] = environment.targetLanguages;
  public localSetting:LocalSetting;

}
