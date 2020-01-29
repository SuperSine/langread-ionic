import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.page.html',
  styleUrls: ['./auth-register.page.scss'],
})
export class AuthRegisterPage implements OnInit {
  public registerForm : FormGroup;
  
  constructor(public formBuilder: FormBuilder, private authService: AuthService, private toastCtrl: ToastController, private route: Router) {
    let EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    this.registerForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      // phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      email:  ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password:  ['', Validators.compose([Validators.minLength(3), Validators.required])],
      username: ['', Validators.compose([Validators.minLength(4), Validators.required])],

    });
  }

  ngOnInit() {
  }

  register(){
    console.log(this.registerForm.value);
    this.authService.signUp(this.registerForm.value).then((result) => {
      this.route.navigateByUrl('/login');
    },async (err) => {
      let alert = await this.toastCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();
    })
  }

}
