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
              }
              count
            }
            word
          }
          tags{
            id
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

export interface Doc {
  id?:string,
  docId?:string,
  title?:string,
  content?:string,
  createDate?:string,
  updateDate?:string
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

  get(docId:string){
    return this.getApollo.query({
      query: UserGetDocGql,
      variables:{
        docId:docId
      }
    });
  }

  add(){

  }

  update(){

  }

  delete(){

  }
}
