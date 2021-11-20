import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import {ToastOptions} from '@ionic/core';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';
import { Plugins } from '@capacitor/core';
import Fingerprint2 from 'fingerprintjs2';
import {pipe} from 'rxjs';
import { Observable, from } from 'rxjs';
import {map} from 'rxjs/operators'
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import {DateTime} from 'luxon';

const {Device, Storage} = Plugins;

export const T_USER_SETTING = "global_user_setting";

export interface LocalSetting  {
  darkMode: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private toastSubject = new Subject<ToastOptions>();

  constructor( private translate:TranslateService,
               private http: HttpClient, 
               private toastCtrl:ToastController) {
    setTimeout(()=>{
      this.translate.get("general").toPromise().then((value) => {
        this.lang = value;
      });
    },0);

                
  }

  subscribeToast(){
    this.toastSubject.subscribe(async (options)=>{
      var toast = await this.toastCtrl.create(options);

      toast.present();
    })
  }

  throwError(errs:any[]){
    errs.forEach(err => this.publishToast({
      duration:2000,
      message:err.message,
      color:"danger"
    }));
  }

  tip(messages:string[]){
    messages.forEach(msg => this.publishToast({
      duration:2000,
      message:msg,
      color:"green"
    }));
  }

  publishToast(options:ToastOptions){
    this.toastSubject.next(options);
  }

  getFingerprint = () => new Promise<any[]>((resolve) => {
    Fingerprint2.get((result, components) => resolve(result) )
  });

  async getSetting():Promise<LocalSetting>{
    var {value} = await Storage.get({key:T_USER_SETTING});
    var setting = JSON.parse(value);

    if(setting == undefined)setting = {};

    return setting as LocalSetting;
  }

  saveSetting(value:LocalSetting){

    Storage.set({key:T_USER_SETTING, value:JSON.stringify(value)});
  }

  toLocalDate(date:string, format:string='ff'){
    return DateTime.fromISO(date).setLocale(this.translate.currentLang).toLocal().toFormat(format);
  }

  timeSince(date:any){
    let millis:number;

    if(typeof date == 'string')
      millis = DateTime.fromISO(date,{zone:'utc'}).setLocale(this.translate.currentLang).toLocal().toMillis();
    else if(typeof date == 'number')
      millis = DateTime.fromMillis(date, {zone:'utc'}).setLocale(this.translate.currentLang).toLocal().toMillis();
    else
      millis = DateTime.fromJSDate(date, {zone:'utc'}).setLocale(this.translate.currentLang).toLocal().toMillis();

    var seconds = Math.floor((new Date().getTime() - millis) / 1000);
  
    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return `${interval} ${this.lang.years}`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} ${this.lang.months}`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} ${this.lang.days}`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} ${this.lang.hours}`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} ${this.lang.minutes}`;
    }
    return `${Math.floor(seconds)} ${this.lang.seconds}`;
  }




  get appLang(){
    const buildInLang = environment.buildInLanguages;

    const lang = this.translate.getBrowserCultureLang().toLowerCase();

    const defaultLang = buildInLang.indexOf(lang) != -1 ? lang : 'en-us';

    return defaultLang;

  }

  async getUuid(){
    var info = await Device.getInfo();
    let components = await this.getFingerprint();

    var values = components.map(e => e.value); 

    var murmur = Fingerprint2.x64hash128(values.join('')+info.uuid, 31);
    console.log("Fingerprint", murmur);

    return info.uuid;
  }

  private lang:any;

}