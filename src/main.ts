import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Plugins } from '@capacitor/core';
import {T_USER_TOKEN, T_USER_KEY} from './app/services/auth.service';

const {Storage} = Plugins;

if (environment.production) {
  enableProdMode();
}



Storage.get({key:T_USER_KEY}).then((userData)=>{
  var userObj = JSON.parse(userData.value);

  if(userObj != null)
    window['tempLangreadUserToken'] = userObj.token;

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
})