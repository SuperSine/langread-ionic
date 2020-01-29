import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Storage} from '@ionic/storage';
import {T_USER_TOKEN} from './app/services/auth.service';

if (environment.production) {
  enableProdMode();
}

var storage = new Storage({
  name: '__mydb',
  driverOrder: ['sqlite', 'indexeddb', 'localstorage']
});

storage.get(T_USER_TOKEN).then((token)=>{
  window['tempLangreadUserToken'] = token;

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
})