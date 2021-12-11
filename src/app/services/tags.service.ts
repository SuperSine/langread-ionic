import {Apollo, ApolloBase, gql} from 'apollo-angular';
import {Observable, ApolloQueryResult} from '@apollo/client/core';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';




export interface Tag{
  id?:string,
  tagFont:string,
  tagName:string,
  tagColor:string,
  hide?:boolean
}

const UserTagTrendsGql = gql`
  query($tagName:String!){
    timeline{
      tagByMonth(tagName:$tagName){
        data{
          total
          yearMonth{
            year
            month
          }
        }
      }
    }

  }
`;

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
    }, refetchQueries:[{
      query:UserTagListGql
    }]})
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

  async trends(tagName:string):Promise<any[]>{
    var tagTrends = await this.getApollo.query({
      query:UserTagTrendsGql,
      variables:{
        tagName
      }
    }).toPromise<any>();

    var result = tagTrends.data.timeline.tagByMonth.data.sort((a,b)=>{
      var dateA = new Date(a.yearMonth.year, a.yearMonth.month, 1);
      var dateB = new Date(b.yearMonth.year, b.yearMonth.month, 1);

      if(dateA > dateB)return 1;
      else if(dateA < dateB)return -1;
      else return 0;
    });

    return result;
  }
}
