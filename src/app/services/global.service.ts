import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import {ToastOptions} from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private toastSubject = new Subject<ToastOptions>();

  constructor(private http: HttpClient, private toastCtrl:ToastController) { }

  subscribeToast(){
    this.toastSubject.subscribe(async (options)=>{
      var toast = await this.toastCtrl.create(options);

      toast.present();
    })
  }

  publishToast(options:ToastOptions){
    this.toastSubject.next(options);
  }

  async getArticle(url:string): Promise<any> {
    return this.http.get("http://localhost:5004/article/get",{
      params:{
        url
      }
    }).toPromise();
  }
}