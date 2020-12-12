import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { first, map } from 'rxjs/operators';
import {DeleteDocumentDocument, DeleteMomentDocument, LikeMomentDocument, ListMomentByFollowingDocument, ListMomentByGroupDocument, ListMomentByLangDocument, MomentGroupType, MomentType, GetMomentByDocIdDocument, CommentInputType, CommentType, PostCommentDocument, ListByCommentDocument} from '../graphql-components';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements OnInit {

  constructor(private apollo:Apollo) { 
    this.pageIndex = 0;

    this.queryRef = this.client.watchQuery<any>({
      query: ListByCommentDocument
    });

  }

  get client(){
    return this.apollo.use("social");
  }


  ngOnInit(){

  }

  fetch(id:string){
    this.queryRef.setVariables({
      id,
      pageIndex:this.pageIndex,
      pageSize:environment.pageSize
    });

    return this.queryRef.valueChanges.pipe(
      map(({data:{moment:{listByComment}}}:any) => listByComment as CommentType[])
    );
  }

  fetchMore(id:string){
    this.queryRef.fetchMore({
      variables: {
        id,
        pageIndex:++this.pageIndex,
        pageSize:environment.pageSize
      },
      updateQuery:(prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return prev; }

        prev.moment.listByComment = [...prev.moment.listByComment, ...fetchMoreResult.moment.listByComment];

        return prev;
      }
    });
  }

  comment(comment:CommentInputType){
    return this.client.mutate<CommentType>({
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

  like(id:string, value:number=1){
    return this.client.mutate<number>({
      mutation:LikeMomentDocument,
      variables:{
        id,
        value
      }
    });
  }

  delete(id:string, readId:string){
    return this.client.mutate<MomentType>({
      mutation:DeleteMomentDocument,
      variables:{
        id
      },
      update:(cache) => {
        const cacheResult: any = cache.readQuery({ 
          query: ListByCommentDocument,
          variables:{pageSize:environment.pageSize,pageIndex:0,id:readId}
        });

        cacheResult.moment.listByComment = cacheResult.moment.listByComment.filter(x => x.id != id);

        cache.writeQuery({
          query:ListByCommentDocument,
          variables:{pageSize:environment.pageSize,pageIndex:0,id:readId},
          data:cacheResult
        });
      }
    });
  }



  private pageIndex:number;
  private queryRef:QueryRef<any>;
}
