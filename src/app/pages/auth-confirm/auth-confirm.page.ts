import { Component, OnInit } from '@angular/core';
import { interval, of, throwError,timer } from 'rxjs';
import {takeUntil, map, mergeMap, retry, switchMap, startWith, tap, mapTo } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-auth-confirm',
  templateUrl: './auth-confirm.page.html',
  styleUrls: ['./auth-confirm.page.scss'],
})
export class AuthConfirmPage implements OnInit {

  constructor(private globalService:GlobalService, private authService:AuthService, private router:Router) { }
  
  private verifycode:string="";
  private youCanClick:boolean = true;

  ngOnInit() {
    this.startCountDown(null);
  }

  get youCanConfirm(){
    return  (this.verifycode != null && this.verifycode != '') && this.youCanClick;
  }

  verify(event){
    this.authService.verifyUser(this.verifycode).pipe(
      switchMap((result:any)=>{
        if(!result.data.user.verify)
          return of(true);
        
        return of(result);
      }),
      startWith(false)
    ).subscribe((result) => {
      console.log(result);

      if(!(typeof result == 'boolean')){
        let data = result.data.user.verify;
        this.authService.saveUserObj(data);

        this.router.navigateByUrl('/');
      }else{
        this.youCanClick = result;
        if(result)
          this.globalService.throwError([{message:'Verify code incorrect!'}]);
      }
    });
  }

  sendVerify(){
    this.authService.sendVerify();
    this.startCountDown(null);
  }

  startCountDown(event){
    console.log(this.verifycode);
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

  private counter:number;
}
