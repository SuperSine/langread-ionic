import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Tag } from './tags.service';
import { Apollo } from 'apollo-angular';

const GetTimelineGql = gql`
  query($index:String, $size:String, $lastId:String, $keywords:String){
    timeline{
      get(index:$index,size:$size,lastId:$lastId,keywords:$keywords){
        words,
        wordTagInfo{
          wti{
            word,
            wordInfos{
              tag{
                id
                tagName,
                tagColor,
                tagFont
              }
            }
          }
        }
        lastId,
      }
    }
  }
`;

export interface Info{
  tag?:Tag,
  count?:number
}

export interface WordInfo{
  word?:string,
  wordInfos?:Info
}

export interface TimelineItems{
  words?:string[],
  wordTagInfo?:WordInfo[],
  lastId?:string

}

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private apollo:Apollo) {
    
  }

  get Apollo(){
    return this.apollo.use("core");
  }

  list(lastId:string='',index:number=1, size:number=100, keywords:string=''){
    return this.Apollo.query({
      query:GetTimelineGql,
      variables:{
        lastId,
        index,
        size,
        keywords
      }
    })
  }
}
