import { Injectable } from '@angular/core';
import { Apollo, ApolloBase } from 'apollo-angular';
import { AuthService } from './auth.service';
import gql from 'graphql-tag';
import { Observable } from 'apollo-link';
import { ApolloQueryResult } from 'apollo-client';

export interface Tag{
  id?:string,
  tagFont:string,
  tagName:string,
  tagColor:string,
  hide?:boolean
}

const UserTagListGql = gql`
  query{
    tag{
      all{
        id,
        tagFont,
        tagName,
        tagColor,
        createDate
      }
    }
  }
`;

const UserTagAddGql = gql`
  mutation($tagName:String!, $tagColor:String!, $tagFont:String!){
    tag{
      add(tag:{
        tagName:$tagName,tagColor:$tagColor,tagFont:$tagFont
      }){
        id,
        createDate,
        tagName
        
      }
    }
  }
`;

const UserTagUpdateGql = gql`
  mutation($oldTagName:String!, $tagName:String!, $tagFont:String!, $tagColor:String!){
    tag{
      update(tagName:$oldTagName, tag:{
        tagName: $tagName,
        tagFont: $tagFont,
        tagColor: $tagColor
      })
    }
  }
`;

const UserTagDeleteGql = gql`
  mutation($tagName:String!){
    tag{
      delete(tagName:$tagName)
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private apolloBase: Observable<ApolloBase<any>>;
  constructor(private apollo: Apollo, private authService: AuthService) { 

    
  }

  get getApollo(){
    return this.apollo.use("core");
  }

  get() {
    return this.getApollo.watchQuery({
      query: UserTagListGql
    });
  }

  add(tag:Tag) {
    return this.getApollo.mutate({mutation:UserTagAddGql, variables:{
      tagName:tag.tagName,
      tagColor:tag.tagColor,
      tagFont:tag.tagFont
    }})
  }

  update(tagName:string, tagInfo:Tag) {
    return this.getApollo.mutate({mutation:UserTagUpdateGql, variables:{
      oldTagName:tagName,
      tagName:tagInfo.tagName,
      tagFont:tagInfo.tagFont,
      tagColor:tagInfo.tagColor,
    },refetchQueries:[
      {query:UserTagListGql}
    ]});
  }

  delete(tagName:string) {
    return this.getApollo.mutate({mutation:UserTagDeleteGql, variables:{
      tagName:tagName,
    }})
  }
}
