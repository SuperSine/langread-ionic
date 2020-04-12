import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Plugins } from '@capacitor/core';
import {T_USER_TOKEN} from './app/services/auth.service';

const {Storage} = Plugins;

if (environment.production) {
  enableProdMode();
}



Storage.get({key:T_USER_TOKEN}).then((token)=>{
  window['tempLangreadUserToken'] = token.value;

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
})