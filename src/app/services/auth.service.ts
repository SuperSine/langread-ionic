import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'apollo-link';
// import {Storage} from '@ionic/storage';
import { Apollo, ApolloBase } from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import { UserType, RegisterGQL, CheckEmailDocument, CheckEmailGQL, VerifyUserDocument,SendVerifyDocument } from '../graphql-components';
import { GlobalService } from './global.service';
import { Plugins } from '@capacitor/core';
import {TokenDocument} from '../graphql-components';


const { Storage } = Plugins;

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
  private appSecret: string = null;
  private apolloBase: ApolloBase<any>;

  private _isAuthenticated = new BehaviorSubject(true);
  private _isEmailConfirmed = new BehaviorSubject(true);
  // private _isApolloCreated = new BehaviorSubject(false);

   constructor(private apollo: Apollo, private register:RegisterGQL) {

    this.register.client = "auth";
    // this.getUserData();
  }

  get getApollo(){
    return this.apollo.use("auth");
  }

  setEmailConfirmed(confirmed:boolean){
    this._isEmailConfirmed.next(confirmed);
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

    userInfo.userid = (await Storage.get({key:T_USER_ID})).value;
    userInfo.token = (await Storage.get({key:T_USER_TOKEN})).value;

    return userInfo;
  }

  // get isApolloCreated(){
  //   return this._isApolloCreated.asObservable();
  // }

  get isEmailConfirmed(){
    return this._isEmailConfirmed.asObservable();
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  async getUserData(){
    let value = (await Storage.get({key:T_USER_ID})).value
    if(value && value != "null")
      this.setUserId(value);
    else
      this._isAuthenticated.next(false);
  }

  saveUserData(appId: string, appSecret: string, token: string){
    Storage.set({key:T_USER_ID, value:appId});
    Storage.set({key:T_USER_TOKEN, value:token});
    Storage.set({key:T_USER_SECRET, value:appSecret});

    window['tempLangreadUserToken'] = token;

    this.setUserId(appId);
    console.log('setting app secret:', appSecret);
    this.appSecret = appSecret;
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

  signUpEx(email:string){
    let ref = this.register.mutate({
      email
    });

    return ref;
  }

  checkEmail(email:string){
    return this.getApollo.query({
      query:CheckEmailDocument,
      variables:{
        email
      }
    });
  }

  verifyUser(code:string){
    return this.getApollo.mutate({
      mutation:VerifyUserDocument,
      variables:{
        id:this.userId,
        code:code
      }
    })
  }

  sendVerify(){
    return Storage.get({key:T_USER_SECRET}).then(async item=>{
      var result = await this.getApollo.query({
        query:SendVerifyDocument,
        variables:{
          appId:this.userId,
          appSecret: item.value
        }
      }).toPromise();

      console.log(result);
    })

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

  async requestToken(){
    let appId = (await Storage.get({key:T_USER_ID})).value;
    let appSecret = (await Storage.get({key:T_USER_SECRET})).value;

    if(!appId || !appSecret)this.logout();


    this.getApollo.query({
      query: TokenDocument,
      variables:{
        appId,
        appSecret
      }
    }).toPromise<any>().then((result)=>{
      this.saveUserData(appId, appSecret, result.data.token.get);
    },(error)=>{
      this.logout();
    })
      


  }

  logout(){
    Storage.set({key:T_USER_ID,value:null});
    Storage.set({key:T_USER_TOKEN,value:null});
    Storage.set({key:T_USER_SECRET,value:null});


    this.apollo.use('core').getClient().clearStore();
  }
}
