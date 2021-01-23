import { Injectable, ɵɵstylePropInterpolateV } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import {GetGroupDetailDocument,GetGroupFollowersDocument,GroupInputType, CreateGroupDocument, UpdateGroupDocument, CheckAvailableDocument,UserGroupListDocument, AllGroupListDocument, DeleteGroupDocument, FollowGroupDocument, GroupType, GetFollowersDocument, UserViewType, UnFollowProfileDocument, UnFollowGroupDocument} from '../graphql-components';
import { FormControl } from '@angular/forms';
import { Subject, Observable} from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private apollo:Apollo) {
    this.groupSub  = new Subject<FormControl>();

    this.groupSub.pipe(
      debounceTime(700)
    ).subscribe(async (groupName) => {
      if(!groupName)return;

      var {data:{group:{checkAvailable}}}:any = await this.getApollo.query({
        query:CheckAvailableDocument,
        variables:{
          name:groupName.value
        }
      }).toPromise();

      if(!checkAvailable){
        groupName.setErrors({
          'groupNameNotAvailable':true
        });
      }

      this.checkPending = false;

    });

    this.queryFollowersRef = this.getApollo.watchQuery<any>({
      query: GetGroupFollowersDocument
    });
  }

  get getApollo(){
    return this.apollo.use("social");
  }

  getGroup(groupId:string){
    return this.getApollo.query({
      query:GetGroupDetailDocument,
      variables:{
        groupId
      }
    }).pipe(
      map(({data:{group:{detail}}}:any) => detail as GroupType),
      first()
    );
  }

  saveGroup(group:GroupInputType){
    const SaveDocument = group.id != '' ? UpdateGroupDocument : CreateGroupDocument;

    return this.getApollo.mutate({
      mutation:SaveDocument,
      variables:{
        group:group
      }
    });
  }

  checkGroupName(groupName:FormControl){
    this.checkPending = true;
    this.groupSub.next(groupName);
  }

  reFetch(pageIndex:number, pageSize:number):Observable<GroupType[]>{
    const obserable = new Observable<GroupType[]>(sub => {
      this.getApollo.watchQuery<GroupType[]>({
        query: UserGroupListDocument,
        variables:{
          pageIndex,
          pageSize
        }
      }).refetch().then(({data:{group:{userGroupList}}}:any)=>{
        sub.next(userGroupList);
        sub.complete();
      });
    })

    return obserable;

      // .pipe(
      //   map(({data:{group:{userGroupList}}}:any)=>{return userGroupList as GroupType[]})
      // );
  }

  getUserGroups(pageIndex:number,pageSize:number,keywords:string='*',userId:string='',includeDefault:boolean=true){
    const obserable = new Observable<GroupType[]>(sub => {
      this.getApollo.query<GroupType[]>({
        query: UserGroupListDocument,
        variables:{
          pageIndex,
          pageSize,
          userId,
          keywords,
          includeDefault
        }
      }).toPromise().then(({data:{group:{userGroupList}}}:any)=>{
        sub.next(userGroupList);
        sub.complete();
      });
    })

    return obserable;

    // return this.getApollo.query<GroupType[]>({
    //   query: UserGroupListDocument,
    //   variables:{
    //     pageIndex,
    //     pageSize,
    //     userId,
    //     keywords
    //   }
    // })
    //   .pipe(
    //     map(({data:{group:{userGroupList}}}:any)=>{return userGroupList as GroupType[]})
    //   );
  }

  getAllGroups(pageIndex:number,pageSize:number,keywords:string='*'){
    const obserable = new Observable<GroupType[]>(sub => {
      this.getApollo.watchQuery<GroupType[]>({
        query: AllGroupListDocument,
        variables:{
          pageIndex,
          pageSize,
          keywords
        }
      }).refetch().then(({data:{group:{allGroupList}}}:any)=>{
        sub.next(allGroupList);
        sub.complete();
      });
    })

    return obserable;

    // return this.getApollo.query<GroupType[]>({
    //   query: AllGroupListDocument,
    //   variables:{
    //     pageIndex,
    //     pageSize,
    //     keywords
    //   }
    // })
    //   .pipe(
    //     map(({data:{group:{allGroupList}}}:any)=>{return allGroupList as GroupType[];})
    //   );
  }

  deleteGroup(id:string){
    return this.getApollo.mutate({
      mutation:DeleteGroupDocument,
      variables:{
        id
      }
    })
  }

  followGroup(id:string){
    return this.getApollo.mutate({
      mutation:FollowGroupDocument,
      variables:{
        id
      }
    });
  }

  unFollowGroup(groupId:string, followerId:string){
    return this.getApollo.mutate({
      mutation:UnFollowGroupDocument,
      variables:{
        groupId,
        followerId
      }
    })
  }

  getFollowers = (groupId:string, index:number, size:number) => {
    return this.getApollo.watchQuery<UserViewType[]>({
      query: GetGroupFollowersDocument,
      variables:{
        groupId,
        index,
        size
      }
    }).valueChanges.pipe(
      map(({data:{group:{followers}}}:any)=> followers as UserViewType[]),
      first()
    )
  }

  fetchFollowers = (groupId:string, index:number, size:number) => {
    this.queryFollowersRef.setVariables({
      groupId,
      index,
      size
    });

    return this.queryFollowersRef.valueChanges.pipe(
      map(({data:{group:{followers}}}:any)=> followers as UserViewType[])
    );
  }

  fetchMoreFollowers = (groupId:string, index:number, size:number) =>{
    this.queryFollowersRef.fetchMore({
      variables:{
        groupId,
        index,
        size
      },
      updateQuery:(prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) { return prev; }

        prev.group.followers = [...prev.group.followers,
                                ...fetchMoreResult.group.followers];
        return prev;
      }
    });
  }

  private groupSub:Subject<FormControl>;

  private queryFollowersRef: QueryRef<any>;

  public checkPending:boolean;
}