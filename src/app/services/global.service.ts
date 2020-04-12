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

const {Device} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private toastSubject = new Subject<ToastOptions>();

  constructor( private http: HttpClient, private toastCtrl:ToastController) { }

  subscribeToast(){
    this.toastSubject.subscribe(async (options)=>{
      var toast = await this.toastCtrl.create(options);

      toast.present();
    })
  }

  publishToast(options:ToastOptions){
    this.toastSubject.next(options);
  }

  getFingerprint = () => new Promise<any[]>((resolve) => {
    Fingerprint2.get((result, components) => resolve(result) )
  });

  async getUuid(){
    var info = await Device.getInfo();
    let components = await this.getFingerprint();

    var values = components.map(e => e.value); 

    var murmur = Fingerprint2.x64hash128(values.join('')+info.uuid, 31);
    console.log("Fingerprint", murmur);

    return info.uuid;
  }

  async getArticle(url:string): Promise<any> {
    return this.http.get("http://localhost:5004/article/get",{
      params:{
        url
      }
    }).toPromise();
  }
}