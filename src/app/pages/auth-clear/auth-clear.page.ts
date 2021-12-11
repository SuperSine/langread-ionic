import {FetchResult} from '@apollo/client/core';
import {resultKeyNameFromField} from '@apollo/client/utilities';
import { Component, OnInit } from '@angular/core';


import { BehaviorSubject, of } from 'rxjs';
import { catchError, filter, startWith, switchMap, tap } from 'rxjs/operators';
import { DocService } from 'src/app/services/doc.service';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SocialService } from 'src/app/services/social.service';

enum DeleteType{
  Doc,
  Social
};

@Component({
  selector: 'auth-clear',
  templateUrl: './auth-clear.page.html',
  styleUrls: ['./auth-clear.page.scss'],
})
export class AuthClearPage implements OnInit {

  constructor(private docService:DocService, private socialService:SocialService, private gloablService:GlobalService) { }

  ngOnInit() {
    this.clickSubject.asObservable().pipe(
      switchMap((event) => {
        console.log(event);
        let method:any

        if(event == DeleteType.Doc)
          method = this.docService.deleteAllData();
        else if(event == DeleteType.Social)
          method = this.socialService.removeAllData();

        if(!method)return of(true);

        return method.pipe(
          catchError(err => {this.gloablService.throwError(err.graphQLErrors); return of(true);}),
          // tap((result:any) => {
          //   if(!(typeof result == 'boolean')){
          //     console.log(result);
          //   }

          //   return result;
          // }),
          startWith(false)

        );
      }),
      startWith(true)
    ).subscribe(click => {
      console.log(click);
    });
  }

  deleteDoc(event){
    this.clickSubject.next(DeleteType.Doc);
  }

  deleteSocial(event){
    this.clickSubject.next(DeleteType.Social);
  }


  public youCanClick:boolean = true;
  public clickSubject = new BehaviorSubject<DeleteType>(null);


}