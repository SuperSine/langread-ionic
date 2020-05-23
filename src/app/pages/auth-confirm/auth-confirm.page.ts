import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, of, throwError,timer, Subscription } from 'rxjs';
import {takeUntil, map, mergeMap, retry, switchMap, startWith, tap, mapTo, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { IonSlides } from '@ionic/angular';
import {environment} from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-confirm',
  templateUrl: './auth-confirm.page.html',
  styleUrls: ['./auth-confirm.page.scss'],
})
export class AuthConfirmPage implements OnInit {

  ngOnDestroy(){
    this.verifySub.unsubscribe();
  }

  constructor(private translate:TranslateService, private globalService:GlobalService, private authService:AuthService, private router:Router) {
    this.displayLanguages = environment.displayLanguages;
    this.targetLanguages = environment.targetLanguages;

    console.log('you current lang is',this.translate.currentLang);

    
  }
  
  @ViewChild("slides", {static:false})
  slides: IonSlides;
  
  async ngOnInit() {
    this.startCountDown(null);
    this.data = {};

    this.langs = await this.translate.get("auth-confirm").toPromise();
  }

  ngAfterViewInit(){
    this.slides.lockSwipeToNext(false);
  }

  get youCanConfirm(){
    return  (this.verifycode != null && this.verifycode != '') && this.youCanClick;
  }

  verify(event){
    this.verifySub = this.authService.verifyUser(this.verifycode).pipe(
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
          this.globalService.throwError([{message:this.langs.incorrectCode}]);
      }
    });
  }

  sendVerify($event){
    this.authService.sendVerify();
    this.startCountDown(null);
  }

  startCountDown(event){
    console.log(this.verifycode);
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

  public counter:number;
  public verifycode:string="";
  public youCanClick:boolean = true;
  public displayLanguages:any[];
  public targetLanguages:any[];
  public data:{
    displayLanguage?:string,
    targetLanguage?:string
  };
  public langs:any;

  private verifySub:Subscription;

  public slideOptions:{

  }


}
