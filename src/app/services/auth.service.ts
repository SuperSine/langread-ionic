import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'apollo-link';
import {Storage} from '@ionic/storage';
import { Apollo, ApolloBase } from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

const UerLoginGql = gql`
  query($email:String!, $password:String!){
    auth{
      auth(email:$email, password:$password){
        appId,
        appSecret,
        firstName,
        lastName,
        token{
          token
        }
      }
    }
  }
`;

const UserRegisterGql = gql`
  mutation($email:String!,$password:String!,$username:String!,$firstname:String!,$lastname:String!){
    user{
      register(email:$email,password:$password,username:$username,firstname:$firstname,lastname:$lastname){
        email,
        userName
      }
    }
  }
`;

export const T_USER_ID = 'global_user_id';
export const T_USER_SECRET = 'global_user_secret';
export const T_USER_TOKEN = 'global_user_token';

export interface UserInfo{
  email: string,
  password: string,
  username: string,
  firstname: string,
  lastname: string
}

export interface CurrentUser{
  userid: string,
  email: string,
  username: string,
  firstname: string,
  lastname: string,
  token: string
}

export interface AuthResult{
  auth:{
    auth:{
      appId:string,
      appSecret:string,
      token:{
        token:string
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: string = null;
  private apolloBase: ApolloBase<any>;

  private _isAuthenticated = new BehaviorSubject(true);
  // private _isApolloCreated = new BehaviorSubject(false);

   constructor(private storage: Storage, private apollo: Apollo) {

    
    // this.getUserData();
  }

  get getApollo(){
    return this.apollo.use("auth");
  }

  setUserId(id:string){
    this.userId = id;

    this._isAuthenticated.next(true);
  }

  // setApolloSet(value:boolean){
  //   this._isApolloCreated.next(true);
  // }

  get getUserId(){
    return this.userId;
  }

  async CurrentUser() {
    let userInfo:CurrentUser;

    userInfo.userid = await this.storage.get(T_USER_ID);
    userInfo.token =  await this.storage.get(T_USER_TOKEN);

    return userInfo;
  }

  // get isApolloCreated(){
  //   return this._isApolloCreated.asObservable();
  // }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  async getUserData(){
    let value = await this.storage.get(T_USER_ID);
    if(value)
      this.setUserId(value);
    else
      this._isAuthenticated.next(false);
  }

  saveUserData(id: string, secret: string, token: string){
    this.storage.set(T_USER_ID, id);
    this.storage.set(T_USER_TOKEN, token);
    this.storage.set(T_USER_SECRET, secret);

    window['tempLangreadUserToken'] = token;

    this.setUserId(id);
  }

  signUp(credentials: UserInfo){
    let promise = this.getApollo.mutate({
      mutation: UserRegisterGql,
      variables:{
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
        firstname: credentials.firstname,
        lastname: credentials.lastname
      }
    }).toPromise();

    return promise;
  }

  login(credentials: UserInfo){
    let promise = this.getApollo.query({
      query:UerLoginGql,
      variables:{
        email:credentials.email,
        password:credentials.password
      }
    }).toPromise();

    promise.then((result) => {
      var data = result.data as any;
      var appId = data.auth.auth.appId;
      var appSecret = data.auth.auth.appSecret;
      var token = data.auth.auth.token.token;

      this.saveUserData(appId, appSecret,  token);

    })
    
    return promise;
  }

  logout(){
    this.storage.set(T_USER_ID, null);
    this.storage.set(T_USER_TOKEN, null);
    this.storage.set(T_USER_SECRET, null);

    this.apollo.use('core').getClient().clearStore();
  }
}
