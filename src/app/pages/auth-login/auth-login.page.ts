import {Apollo} from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
})
export class AuthLoginPage implements OnInit {

  public loginForm: FormGroup;
  public loginWaiting:boolean = false;

  constructor(private route: Router, private alertCtrl: ToastController, public formBuilder: FormBuilder, public apollo: Apollo, private authService:AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })

  }

  login(){
    this.loginWaiting = true;

    this.authService.login(this.loginForm.value).then((result)=>{
      this.loginForm.get('email').setValue('');
      this.loginForm.get('password').setValue('');
      this.loginWaiting = false;

      this.route.navigateByUrl('/');
    },async (err) => {
      let alert = await this.alertCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();
      this.loginWaiting = false;
    })
  }

  ngOnChanges(){

  }

  ngOnInit() {

  }
  

}
