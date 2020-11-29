import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { first, map } from 'rxjs/operators';
import { FollowProfileDocument, GetFollowersDocument, GetFollowingsDocument, GetProfileDocument, GetUserProfileDocument, UserViewType } from '../graphql-components';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private apollo:Apollo) { }

  get client(){
    return this.apollo.use("social");
  }

  follow(userId:string){
    return this.client.mutate({
      mutation:FollowProfileDocument,
      variables:{
        userId
      }
    })
  }

  profile(userId:string){
    return this.client.query<UserViewType>({
      query:GetUserProfileDocument,
      variables:{
        userId
      }
    }).pipe(
      map(({data:{profile:{profile}}}:any)=> profile as UserViewType),
      first()
    );
  }

  followers(userId:string, index:number, size:number){
    return this.client.watchQuery<UserViewType[]>({
      query: GetFollowersDocument,
      variables:{
        userId,
        index,
        size
      }
    }).valueChanges.pipe(
      map(({data:{profile:{followers}}}:any)=> followers as UserViewType[]),
      first()
    );
  }

  followings(userId:string, index:number, size:number){
    return this.client.watchQuery<UserViewType>({
      query:GetFollowingsDocument,
      variables:{ 
        userId,
        index,
        size
      }
    }).valueChanges.pipe(
      map(({data:{profile:{followings}}}:any)=> followings as UserViewType[]),
      first()
    );;
  }


}
