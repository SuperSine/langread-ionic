import {Observable} from '@apollo/client/core';
import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {BehaviorSubject, iif, of} from 'rxjs';
import { runInThisContext } from 'vm';
import { switchMap, startWith, mapTo, take, tap, takeUntil, takeWhile, filter, catchError } from 'rxjs/operators';

import { subscribe } from 'graphql';
import { GlobalService } from 'src/app/services/global.service';
import { CheckEmailValidator } from './check-email-validator';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.page.html',
  styleUrls: ['./auth-register.page.scss'],
})
export class AuthRegisterPage implements OnInit {
  public registerForm : FormGroup;
  public clickSubject = new  BehaviorSubject<boolean>(null);
  public youCanClick:boolean;
  
  constructor(private checkEmailValidtor:CheckEmailValidator, 
            public formBuilder: FormBuilder, 
            private authService: AuthService, 
            private toastCtrl: ToastController, 
            private route: Router,
            private globalService:GlobalService) {
    this.registerForm = formBuilder.group({
      firstname: ['', Validators.compose([Validators.minLength(3)])],
      lastname: ['', Validators.compose([Validators.minLength(3)])],
      // phone: ['', Validators.compose([Validators.minLength(2), Validators.required])],
      email:  ['', Validators.compose([Validators.required, Validators.pattern(checkEmailValidtor.EMAIL_REGEXP)]),[this.checkEmailValidtor.checkEmail.bind(this.checkEmailValidtor)]],
      password:  ['', Validators.compose([Validators.minLength(3)])],
      username: ['', Validators.compose([Validators.minLength(4)])],

    });
  }

  ngOnInit() {
    const defaultLang = this.globalService.appLang;
    this.clickSubject.asObservable().pipe(
      // takeWhile((value) => {
      //   console.log('taking', value);
      //   return  value != null
      // }),
      filter((value) => {return value == true;}),
      switchMap((event) => {
        return this.authService.signUpEx(this.registerForm.get("email").value, defaultLang).pipe(
          catchError(err => { this.globalService.throwError(err.graphQLErrors); return of(true);}),
          tap((result:any)=>{
            console.log('tap result',result);
            if(!(typeof result == 'boolean')){
              let data = result.data.user.register;
              this.authService.saveUserObj(data);
            };

            return result;
          }),
          startWith(false)
        );
      }),
      startWith(true)  
    ).subscribe(youCanClick =>{ 
    
      if(typeof youCanClick == 'boolean')
        this.youCanClick = youCanClick as boolean;
      else
      this.route.navigateByUrl('/');

      console.log('can you click?',youCanClick); 
    
    });

  }

  register(event){
    this.clickSubject.next(this.youCanClick);
  }

  isEmailTaken(): boolean {
    return this.registerForm.get('email').hasError('emailInUser');
  }

}
