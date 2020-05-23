import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { interval, of, throwError,timer } from 'rxjs';
import {takeUntil, map, mergeMap, retry, switchMap, startWith, tap, mapTo } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-password',
  templateUrl: './auth-password.page.html',
  styleUrls: ['./auth-password.page.scss'],
})
export class AuthPasswordPage implements OnInit {

  constructor(private router:Router, private globalService:GlobalService, 
            private authService:AuthService, private formBuilder:FormBuilder,
            private translate:TranslateService) { 
    this.passwordForm = formBuilder.group({
      password:[
        '', 
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      verifycode:[
        '',
        Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6),])
      ]
    });
  }

  async ngOnInit() {
    this.counter = 0;
    this.lang = await this.translate.get("auth-password").toPromise();
  }

  changePassword(event){
    this.authService.changePassword(this.passwordForm.get('verifycode').value, this.passwordForm.get('password').value).pipe(
      switchMap((result:any)=>{
        if(!result.data.user.password)
          return of(true);

        return of(result);
      }),
      startWith(false)
    ).subscribe((result) => {
      if(!(typeof result == 'boolean')){
        this.router.navigateByUrl('/');
      }else{
        this.youCanClick = result;
        if(result)
          this.globalService.throwError([{message:'Verify code incorrect!'}]);
      }
    });
  }

  sendReset($event){
    this.authService.sendRest();
    this.startCountDown(null);
  }

  startCountDown(event){
    const source = interval(1000);
    const example = source.pipe(
      map(val => {
        return 30-val;
      }),
      takeUntil(timer(32000))
      );
      
    const subscribe = example.subscribe({
      next: val => {
        this.counter = val;
        console.log(val)
      },
      error: val => console.log(`something went wrong: ${val}`)
    });
  }

  public passwordForm:FormGroup;
  public youCanClick:boolean = true;
  public counter:number;
  public lang:any;
}
