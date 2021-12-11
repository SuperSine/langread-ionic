import {Apollo} from 'apollo-angular';
import { Injectable } from '@angular/core';

import {UpdateUserDocument, UserType, UpdateUserViewModelType} from '../graphql-components';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private authService:AuthService, private apollo:Apollo) {

  }

  get getApollo(){
    return this.apollo.use("auth");
  }

  //need to move the getUserObj from AuthService to ProfileService
  async getProfile(){
    return await this.authService.getUserObj();
  }

  updateUser(user:UpdateUserViewModelType){
    return this.getApollo.mutate({
      mutation:UpdateUserDocument,
      variables:{
        appId:this.authService.userObj.appId,
        appSecret:this.authService.userObj.appSecret,
        user
      }
    })
  }

}
