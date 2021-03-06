import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private httpClient:HttpClient,
             private globalService:GlobalService) { 

  }

  async upload(id:string, file:File){
    const formdata: FormData = new FormData();

    formdata.append('id', id);
    formdata.append('file', file, file.name);

    return await this.httpClient.post(environment.uploadAvatarUrl, formdata)
                                .toPromise();
  }
}
