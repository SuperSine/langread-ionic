import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import {T_USER_TOKEN} from './services/auth.service';
import { ApolloLink } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';
import { createHttpLink } from "apollo-link-http";
import {InMemoryCache} from 'apollo-cache-inmemory';
import { Apollo } from 'apollo-angular';
import {Storage} from '@ionic/storage';
import { HttpLink } from 'apollo-angular-link-http';
import { FontService } from './services/font.service';
import { GlobalService } from './services/global.service';
import { TranslateService } from '@ngx-translate/core';



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
    private translate: TranslateService
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
      console.log('the current uuid is:',uuid);


    });
  }


  // Add or remove the "dark" class based on if the media query matches
  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
