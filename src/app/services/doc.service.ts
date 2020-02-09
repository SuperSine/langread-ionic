import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const UserGetDocGql = gql`
  query($docId:String!){
    document{
      get(docId:$docId){
        document{
          docId,
          id,
          content,
          createDate,
          updateDate,
          title
        }
        smallWordTagInfo{
          wti{
            wordInfos{
              tag{
                id
                tagName
              }
              count
            }
            word
          }
          tags{
            id
            tagName
            tagColor
          }
        }
        bigWordTagInfo{
          tags{
            id
            tagName
            tagColor
          }
        }
        createTime
        updateTime
        status
      }
    }
  }
`;

const UserTagListGql = gql`
  query($pageSize:String!, $lastId:String!){
    document{
      list(limit:$pageSize,lastId:$lastId){
        id,
        docId,
        title,
        content,
        createDate
      }
    }
  }
`;

const GiveItToMeGql = gql`
query($content:String!){
  document{
    giveItToMe(content:$content){
			document{
      docId,
      id,
      content,
      createDate,
      updateDate,
      title        
      }
      smallWordTagInfo{
        wti{
          wordInfos{
            tag{
              tagName
            }
            count
          }
          word
        }
        tags{
          tagName
          tagColor
        }
      }
      bigWordTagInfo{
        tags{
          tagName
          tagColor
        }
      }
      createTime
      updateTime
      status
    }
  }
}
`;

export interface Doc {
  id?:string,
  docId?:string,
  title?:string,
  content?:string,
  createDate?:string,
  updateDate?:string,
  url?:string,
  words?:number,
  tags?:any[],
  wordTagInfo?:any
}

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private apollo:Apollo) {

  }

  get getApollo(){
    return this.apollo.use("core");
  }

  list(limit:string, lastId:string=""){
    return this.getApollo.watchQuery({
      query:UserTagListGql,
      variables:{
        pageSize:limit,
        lastId
      }
    });
  }

  get(content:string, wordTagLiteStr:any=null){
    return this.getApollo.query({
      query: GiveItToMeGql,
      variables:{
        content,
        wordTagLiteStr:JSON.stringify(wordTagLiteStr)
      }
    });
  }

  save(){

  }

  delete(){

  }
}
