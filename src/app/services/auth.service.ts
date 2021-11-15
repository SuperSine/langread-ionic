import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'apollo-link';
// import {Storage} from '@ionic/storage';
import { Apollo, ApolloBase } from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import { UserType, RegisterGQL, CheckEmailDocument, CheckEmailGQL,SendVerifyDocument,UpdateEmailDocument,SendRestDocument,ChangePasswordDocument,LoginDocument, SendTotpDocument, VerifyCodeDocument, TokenPurpose, UpdateUserDocument, UpdateUserViewModelType,GetProfileDocument } from '../graphql-components';
import { GlobalService } from './global.service';
import { Plugins } from '@capacitor/core';
import {TokenDocument} from '../graphql-components';
import {environment} from 'src/environments/environment';


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
export const T_USER_KEY = 'global_user_key';

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
  public userObj:UserType;

  private userObj$ = new BehaviorSubject<UserType | null>(null);
  private userId: string = null;
  private appSecret: string = null;
  private apolloBase: ApolloBase<any>;

  private _isAuthenticated = new BehaviorSubject(true);
  private _isEmailConfirmed = new BehaviorSubject(true);
  private _hasLanguagePair = new BehaviorSubject(true);
  // private _isApolloCreated = new BehaviorSubject(false);

   constructor(private apollo: Apollo, private register:RegisterGQL) {

    this.register.client = "auth";
    // this.getUserData();

    new Promise(async (resolve)=>{
      this.userObj = await this.getUserObj();
    })
  }

  get getApollo(){
    return this.apollo.use("auth");
  }

  checkAvailability(){
    if(!this.userObj.emailConfirmed)
      this._isEmailConfirmed.next(false);
    else if(!this.userObj.sourceLanguage || !this.userObj.targetLanguage){
      this._hasLanguagePair.next(false);
    }
  }

  checkEmailStatus(){
    this._isEmailConfirmed.next(this.userObj.emailConfirmed);
  }

  checkLanguagePair(has:boolean){
    

    this._hasLanguagePair.next(has);
  }

  setUserId(id:string, secret:string){
    this.userId = id;
    this.appSecret = secret;

    this._isAuthenticated.next(true);
  }

  // setApolloSet(value:boolean){
  //   this._isApolloCreated.next(true);
  // }

  get UserId(){
    return this.userObj.appId;
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

  get hasLanguagePair(){
    return this._hasLanguagePair.asObservable();
  }

  get isEmailConfirmed(){
    return this._isEmailConfirmed.asObservable();
  }

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  watchProfile(){
    return this.userObj$.asObservable();
  }

  async getUserObj(refresh:boolean=false){
    let userData = (await Storage.get({key:T_USER_KEY})).value;
    let userObj:UserType = JSON.parse(userData);

    if(userObj != null){
      if(refresh){
        this.getApollo.query({
          query: GetProfileDocument,
          variables:{
            appId:userObj.appId,
            appSecret:userObj.appSecret
          }
        }).subscribe(({data})=>{
          
          const {auth:{profile}}:any = data;
          
          userObj.displayLanguage = profile.displayLanguage;
          userObj.targetLanguage = profile.targetLanguage;
          userObj.sourceLanguage = profile.sourceLanguage;
          userObj.email = profile.email;
          userObj.emailConfirmed = profile.emailConfirmed;
          userObj.firstName = profile.firstName;
          userObj.lastName = profile.lastName;
          userObj.phoneNumber = profile.phoneNumber;
          userObj.userName = profile.userName;

          this.saveUserObj(userObj);
        })
      }else{
        this.setUserId(userObj.appId, userObj.appSecret);
      }
      
      this.userObj$.next(userObj);
    }else
      this._isAuthenticated.next(false);

    return userObj;
  }

  saveUserObj(user:UserType){
    Storage.set({key:T_USER_KEY, value: JSON.stringify(user)});

    window['tempLangreadUserToken'] = user.token;
    this.userObj = user;
    this.setUserId(user.appId, user.appSecret);
    this.userObj$.next(user);
  }

  async getUserData(){
    let appId = (await Storage.get({key:T_USER_ID})).value
    let appSecret = (await Storage.get({key:T_USER_SECRET})).value
    if(appId && appId != "null" && appSecret && appSecret != "null")
      this.setUserId(appId, appSecret);
    else
      this._isAuthenticated.next(false);
  }

  saveUserData(appId: string, appSecret: string, token: string){
    Storage.set({key:T_USER_ID, value:appId});
    Storage.set({key:T_USER_TOKEN, value:token});
    Storage.set({key:T_USER_SECRET, value:appSecret});

    window['tempLangreadUserToken'] = token;

    this.setUserId(appId, appSecret);
  }

  updateUser(user:UpdateUserViewModelType){
    return this.getApollo.mutate({
      mutation:UpdateUserDocument,
      variables:{
        appId:this.userObj.appId,
        appSecret:this.userObj.appSecret,
        user:{
          userName:user.userName,
          firstName:user.firstName,
          lastName:user.lastName,
          displayLanguage:user.displayLanguage,
          sourceLanguage:user.sourceLanguage,
          targetLanguage:user.targetLanguage,
        }
      }
    })
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

  signUpEx(email:string, lang:string){
    let ref = this.register.mutate({
      email,
      displayLanguage:lang
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
      mutation:VerifyCodeDocument,
      variables:{
        email: this.userObj.email,
        code: code,
        purpose: TokenPurpose.Email
      }
    });
  }

  updateEmail(email:string){
    return this.getApollo.mutate({
      mutation:UpdateEmailDocument,
      variables:{
        appId: this.userId,
        appSecret: this.appSecret,
        email: email
      }
    });
  }

  sendRest(){
    var result = this.getApollo.query({
      query:SendRestDocument,
      variables:{
        appId: this.userId,
        appSecret: this.appSecret
      }
    }).toPromise();
  }

  changePassword(token:string,password:string){
    return this.getApollo.mutate({
      mutation:ChangePasswordDocument,
      variables:{
        appId: this.userId,
        appSecret: this.appSecret,
        token,
        password
      }
    })
  }

  sendVerify(){

    var result = this.getApollo.query({
      query:SendVerifyDocument,
      variables:{
        appId: this.userId,
        appSecret: this.appSecret
      }
    }).toPromise();

    console.log(result);
  }

  sendTotp(email:string){
    var result = this.getApollo.query({
      query:SendTotpDocument,
      variables:{
        email
      }
    }).toPromise();

    console.log(result);
  }

  verifyCode(email:string, code:string){
    return this.getApollo.mutate({
      mutation:VerifyCodeDocument,
      variables:{
        email:email,
        code:code,
        purpose:TokenPurpose.UserLogin
      }
    });
  }

  login(credentials: UserInfo){
    let promise = this.getApollo.query({
      query:LoginDocument,
      variables:{
        email:credentials.email,
        password:credentials.password
      }
    }).toPromise();

    promise.then((result) => {
      var data = result.data as any;
      this.saveUserObj(data.auth.auth);

    })
    
    return promise;
  }

  async requestToken(){
    if(!this.userObj)this.logout();

    this.getApollo.query({
      query: TokenDocument,
      variables:{
        appId:this.userObj.appId,
        appSecret:this.userObj.appSecret,
      }
    }).toPromise<any>().then(async (result)=>{

      this.userObj.token = result.data.token.get;
      this.saveUserObj(this.userObj);
      
    },(error)=>{
      this.logout();
    })
      


  }

  logout(){
    Storage.set({key:T_USER_ID,value:null});
    Storage.set({key:T_USER_TOKEN,value:null});
    Storage.set({key:T_USER_SECRET,value:null});

    Storage.set({key:T_USER_KEY, value:null});

    this.apollo.use('core').getClient().clearStore();

    this._isAuthenticated.next(false);
  }

  get avatarUrl(){
    return `${environment.avatarUrl}?text=${this.userObj.appId}&dimension=120`;
  }
}
