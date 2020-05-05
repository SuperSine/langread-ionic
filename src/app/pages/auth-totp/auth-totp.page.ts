import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { interval, of, throwError,timer } from 'rxjs';
import {takeUntil, map, mergeMap, retry, switchMap, startWith, tap, mapTo } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-totp',
  templateUrl: './auth-totp.page.html',
  styleUrls: ['./auth-totp.page.scss'],
})
export class AuthTotpPage implements OnInit {

  constructor(private translate:TranslateService, private router:Router, private globalService:GlobalService, private authService:AuthService, private formBuilder:FormBuilder) { 
    this.loginForm = formBuilder.group({
      email:[
        '', 
        Validators.compose([Validators.required, Validators.email])
      ],
      code:[
        '',
        Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6),])
      ]
    });
  }

  async ngOnInit() {
    this.counter = 0;
    this.lang = await this.translate.get('auth-totp').toPromise();
  }

  login(event){
    this.authService.verifyCode(this.loginForm.get('email').value, this.loginForm.get('code').value).pipe(
      switchMap((result:any)=>{
        if(!result.data.user.verify)
          return of(true);

        return of(result);
      }),
      startWith(false)
    ).subscribe((result) => {
      if(!(typeof result == 'boolean')){
        let data = result.data.user.verify;
        this.authService.saveUserObj(data);

        this.router.navigateByUrl('/');
      }else{
        this.youCanClick = result;
        if(result)
          this.globalService.throwError([{message:this.lang.totpIncorrect}]);
      }
    });
  }

  sendTotp(event){
    this.authService.sendTotp(this.loginForm.get('email').value);
    this.startCountDown(null);
  }

  startCountDown(event){
    const source = interval(1000);
    const countDown = source.pipe(
      map(val => {
        return 30-val;
      }),
      takeUntil(timer(32000))
      );
      
    const subscribe = countDown.subscribe({
      next: val => {
        this.counter = val;
        console.log(val)
      },
      error: val => console.log(`something went wrong: ${val}`)
    });
  }

  public loginForm:FormGroup;
  public youCanClick:boolean = true;
  public counter:number;
  public lang:any;
}
