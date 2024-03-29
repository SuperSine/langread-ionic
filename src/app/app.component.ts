import {ApolloLink, InMemoryCache} from '@apollo/client/core';
import {createHttpLink} from '@apollo/client/link/http';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import {T_USER_TOKEN} from './services/auth.service';

import { HttpHeaders } from '@angular/common/http';



import {Storage} from '@ionic/storage';

import { FontService } from './services/font.service';
import { GlobalService } from './services/global.service';
import { TranslateService } from '@ngx-translate/core';
import {distinctUntilChanged} from 'rxjs/operators'
import { Router } from '@angular/router';
import { CheckUpdateService } from './services/check-update.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private apollo:Apollo,
    private authService: AuthService,
    private fontService:FontService,
    private globalService:GlobalService,
    private translate: TranslateService,
    private router: Router,
    private checkUpdate: CheckUpdateService
  ) {
    //app needs to check user has logged in or not
    this.authService.getUserObj(true).then(async (user)=>{
      const defaultLang = this.globalService.appLang;

      this.translate.setDefaultLang(defaultLang);
      if(user)
        this.translate.use(user.displayLanguage);
      else
        this.translate.use(defaultLang);

      this.initializeApp();
      this.fontService.injectAll();
    });

    this.authService.isAuthenticated.pipe(distinctUntilChanged()).subscribe((isAuthenticated) => {
      if(!isAuthenticated){
        this.router.navigateByUrl('/login');
      }
    });


    this.authService.isEmailConfirmed.pipe(distinctUntilChanged()).subscribe((confirmed) => {
      if(!confirmed){
        console.log('you should activate your email!!!');

        if(this.router.url != '/auth-confirm')
          this.router.navigateByUrl('/auth-confirm');
      }

    });

    this.authService.hasLanguagePair.pipe(distinctUntilChanged()).subscribe((confirmed) => {
      if(!confirmed){
        console.log('you should update language preference!!!');

        if(this.router.url != '/auth-confirm')
          this.router.navigateByUrl('/auth-confirm');
      }

    });

    
  }

  initializeApp() {
    
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.globalService.subscribeToast();

      const setting = await this.globalService.getSetting();
      let isDarkMode = false;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      if(setting.darkMode == undefined){
        isDarkMode = prefersDark.matches;

      }else{
        isDarkMode = setting.darkMode;
      }

      this.toggleDarkTheme(isDarkMode);
        
      prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(isDarkMode));

      var uuid = await this.globalService.getUuid();
      console.log('the current platform is:',this.platform.platforms());
      // console.log('the current uuid is:',uuid);


    });
  }


  // Add or remove the "dark" class based on if the media query matches
  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
