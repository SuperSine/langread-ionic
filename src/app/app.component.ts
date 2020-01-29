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
    private authService: AuthService
  ) {

    this.authService.getUserData().then(()=>{
      this.initializeApp();
    });



  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }
}
