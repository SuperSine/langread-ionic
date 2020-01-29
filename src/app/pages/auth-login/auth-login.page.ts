import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Apollo } from 'apollo-angular';
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

  constructor(private route: Router, private alertCtrl: ToastController, public formBuilder: FormBuilder, public apollo: Apollo, private authService:AuthService) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })

  }

  login(){
    this.authService.login(this.loginForm.value).then((result)=>{
      this.route.navigateByUrl('/tag-list');
    },async (err) => {
      let alert = await this.alertCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();
    })
  }

  ngOnInit() {
  }
  

}
