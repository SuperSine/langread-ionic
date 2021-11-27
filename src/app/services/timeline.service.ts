import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Tag } from './tags.service';
import { Apollo } from 'apollo-angular';
import {GetTimelineDocument} from '../graphql-components'

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
      query:GetTimelineDocument,
      variables:{
        lastId,
        index,
        size,
        keywords
      }
    })
  }
}
