import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckEmailValidator } from '../auth-register/check-email-validator';
import { AuthService } from 'src/app/services/auth.service';
import { startWith, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-email',
  templateUrl: './auth-email.page.html',
  styleUrls: ['./auth-email.page.scss'],
})
export class AuthEmailPage implements OnInit {

  constructor(private router:Router, private globalService:GlobalService, private authService:AuthService, private formBuilder:FormBuilder, private checkEmailValidator:CheckEmailValidator) {
    this.emailForm = formBuilder.group({
      email:[
              '', 
              Validators.compose([Validators.required, Validators.pattern(checkEmailValidator.EMAIL_REGEXP)]),
              [this.checkEmailValidator.checkEmail.bind(this.checkEmailValidator)]
            ]
    });
  }

  ngOnInit() {
  }
  
  updateEmail(event){
    this.authService.updateEmail(this.emailForm.get('email').value).pipe(
      catchError(err => { this.globalService.throwError(err.graphQLErrors); return of(true);}),
      switchMap((result:any)=>{
        return of(result.data.user.email);
      }),
      startWith(false)
    ).subscribe((result) => {
      if(typeof result == 'boolean')
        this.youCanClick = result;
      else{
        this.authService.saveUserObj(result);
        this.router.navigateByUrl('/auth-confirm');
      }
    });
  }

  isEmailTaken(): boolean {
    return this.emailForm.get('email').hasError('emailInUser');
  }

  public emailForm:FormGroup;
  public youCanClick:boolean = true;
}
