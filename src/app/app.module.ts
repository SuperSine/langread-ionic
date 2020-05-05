import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {TagEditorPageModule} from '../app/pages/tag-editor/tag-editor.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from './services/auth.service';
import { PickDirective } from './directives/pick.directive';
import { GlobalService } from './services/global.service';
import { ColorService } from './services/color.service';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import { CheckEmailValidator } from './pages/auth-register/check-email-validator';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['sqlite', 'indexeddb', 'localstorage']
    }),
    GraphQLModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    TagEditorPageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    GlobalService,
    ColorService,
    CheckEmailValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}