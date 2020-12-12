import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { first, map, tap } from 'rxjs/operators';
import {DeleteDocumentDocument, DeleteMomentDocument, LikeMomentDocument, ListMomentByFollowingDocument, ListMomentByGroupDocument, ListMomentByLangDocument, MomentGroupType, MomentType, GetMomentByDocIdDocument, CommentInputType, CommentType, PostCommentDocument, ListByCommentDocument} from '../graphql-components';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  constructor(private apollo:Apollo) {

  }

  get getApollo(){
    return this.apollo.use("social");
  }



  getMomentsByFollowing(pageIndex:number, pageSize:number, userId:string=""){
    return this.getApollo.watchQuery<MomentType[]>({
      query:ListMomentByFollowingDocument,
      variables:{
        pageIndex,
        pageSize,
        userId
      }
    }).valueChanges.pipe(
      map(({data:{moment:{listByFollowing}}}:any)=> listByFollowing as MomentType[]),
      first()
    );
  }

  getMomentsByLang(pageIndex:number, pageSize:number, userId:string="", langCode:string=""){
    return this.getApollo.query<MomentType[]>({
      query:ListMomentByLangDocument,
      variables:{
        pageSize,
        pageIndex,
        userId,
        langCode
      }
    }).pipe(
      map(({data:{moment:{listByLang}}}:any) => listByLang as MomentType[]),
      first()
    );
  }

  getMomentsByGroup(groupId:string, typeId:MomentGroupType, pageIndex:number, pageSize:number){
    return this.getApollo.watchQuery<MomentType[]>({
      query:ListMomentByGroupDocument,
      variables:{
        groupId:groupId,
        typeId,
        pageSize,
        pageIndex
      }
    }).valueChanges.pipe(
      map(({data:{moment:{listByGroup}}}:any) => listByGroup as MomentType[]),
      first()
    );
  }

  like(id:string){
    return this.getApollo.mutate<number>({
      mutation:LikeMomentDocument,
      variables:{
        id,
        value:1
      }
    });
  }

  delete(id:string){
    return this.getApollo.mutate<MomentType>({
      mutation:DeleteMomentDocument,
      variables:{
        id
      }
    });
  }

  getByDocId(id:string){
    return this.getApollo.query<MomentType>({
      query:GetMomentByDocIdDocument,
      variables:{
        id
      }
    }).pipe(
      map(({data:{moment:{getByDocId}}}:any) => getByDocId as MomentType)
    );
  }

  comment(comment:CommentInputType){
    return this.getApollo.mutate<CommentType>({
      mutation: PostCommentDocument,
      variables:{
        comment
      },
      refetchQueries:[{
        query:ListByCommentDocument,
        variables:{pageSize:environment.pageSize,pageIndex:0,id:comment.readId}
      }]
    });
  }

  getComments(id:string, pageIndex:number, pageSize:number){
    return this.getApollo.watchQuery<CommentType[]>({
      query: ListByCommentDocument,
      variables:{
        id,
        pageIndex,
        pageSize
      }
    }).valueChanges.pipe(
      map(({data:{moment:{listByComment}}}:any) => listByComment as CommentType[]),
      first()
    )
  }

}
