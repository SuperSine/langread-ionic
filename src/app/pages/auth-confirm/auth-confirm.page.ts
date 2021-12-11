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
import { start } from 'repl';

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
    this._sourceLanguages = environment.sourceLanguages;
    this._targetLanguages = environment.targetLanguages;
  }
  
  @ViewChild("slides")
  slides: IonSlides;
  
  async ngOnInit() {
    // this.startCountDown(null);
    this.data = {displayLanguage:this.authService.userObj.displayLanguage};


    this.langs = await this.translate.get("auth-confirm").toPromise();


    setTimeout(() => {
      
      if(this.authService.userObj.emailConfirmed){
        this.slides.slideNext(0);
      }
      this.slides.lockSwipes(true);
    }, 0);
  }

  ngAfterViewInit(){
    // this.slides.lockSwipeToNext(false);
  }

  get sourceLanguages(){
    return this._sourceLanguages.filter((e)=>e.code != this.data.targetLanguage);
  }

  get targetLanguages(){
    return this._targetLanguages.filter((e)=> e.code != this.data.sourceLanguage);
  }

  get youCanConfirm(){
    return  (this.verifycode != null && this.verifycode != '') && this.youCanClick;
  }

  get youCanSaveLang(){
    return (this.data.displayLanguage != null && this.data.sourceLanguage != null
           && this.data.targetLanguage != null) && this.youCanClick;
  }

  updateLang(event){
    this.updateSUb = this.authService.updateUser(this.data).pipe(
      switchMap((result:any) => {
        if(!result.data.user.update)
          return of(true);
        
        return of(result);
      }),
      startWith(false)
    ).subscribe((result) => {
      console.log(result);

      if(!(typeof result == 'boolean')){
        let data = result.data.user.update;
        this.authService.saveUserObj(data);

        this.router.navigateByUrl("/");

        this.youCanClick = true;
      }else{
        this.youCanClick = result;
      }
    });
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

      this.youCanClick = result;

      if(!(typeof result == 'boolean')){
        let data = result.data.user.verify;
        this.authService.saveUserObj(data);

        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }else{

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

  public counter:number = 0;
  public verifycode:string="";
  public youCanClick:boolean = true;
  public displayLanguages:any[];
  public _sourceLanguages:any[];
  public _targetLanguages:any[];

  public data:{
    displayLanguage?:string,
    sourceLanguage?:string,
    targetLanguage?:string
  };
  
  public langs:any;

  private verifySub:Subscription;
  private updateSUb:Subscription;

  public slideOptions:{

  }


}
