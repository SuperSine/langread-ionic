import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  async getArticle(url:string): Promise<any> {
    return this.http.get("http://localhost:5004/article/get",{
      params:{
        url
      }
    }).toPromise();
  }
}
