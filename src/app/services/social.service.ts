import {Apollo, QueryRef} from 'apollo-angular';
import { Injectable } from '@angular/core';

import { first, map } from 'rxjs/operators';
import { DeleteAllSocialDataDocument, FollowProfileDocument, GetFollowersDocument, GetFollowingsDocument, GetProfileDocument, GetUserProfileDocument, UnFollowProfileDocument, UserViewType } from '../graphql-components';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private apollo:Apollo) { 
    this.queryFollowerRef = this.client.watchQuery<any>({
      query: GetFollowersDocument
    });

    this.queryFollowingRef = this.client.watchQuery<any>({
      query: GetFollowingsDocument
    });

  }

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

  unfollow(userId:string){
    return this.client.mutate({
      mutation: UnFollowProfileDocument,
      variables:{
        userId
      }
    });
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

  fetchFollowers(userId:string, index:number, size:number){
    this.queryFollowerRef.setVariables({
      userId,
      index,
      size
    });

    return this.queryFollowerRef.valueChanges.pipe(
      map(({data:{profile:{followers}}}:any)=> followers as UserViewType[])
    );
  }

  fetchMoreFollowers(userId:string, index:number, size:number){
    this.queryFollowerRef.fetchMore({
      variables:{
        userId,
        index,
        size
      },
      updateQuery:(prev, {fetchMoreResult}) => {
        if(!fetchMoreResult) { return prev; }

        prev.profile.followers = [ ...prev.profile.followers,
          ...fetchMoreResult.profile.followers];

        return prev;
      }
    });
  }

  fetchFollowings(userId:string, index:number, size:number){
    this.queryFollowingRef.setVariables({
      userId,
      index,
      size
    });

    return this.queryFollowingRef.valueChanges.pipe(
      map(({data:{profile:{followings}}}:any)=> followings as UserViewType[]),
    );
  }

  fetchMoreFollowings(userId:string, index:number, size:number){
    this.queryFollowingRef.fetchMore({
      variables:{
        userId,
        index,
        size
      },
      updateQuery:(prev, {fetchMoreResult}) => {
        if(!fetchMoreResult) { return prev; }

        prev.profile.followings = [ ...prev.profile.followings,
                                   ...fetchMoreResult.profile.followings];

        return prev;
      }
    });
  }

  removeAllData(){
    return this.client.mutate({
      mutation: DeleteAllSocialDataDocument
    });
  }

  private queryFollowerRef: QueryRef<any>;
  private queryFollowingRef: QueryRef<any>;

}
