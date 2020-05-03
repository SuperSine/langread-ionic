import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { GetStatsDocument,GiveItToMeDocument, GetDocumentDocument, GetDocumentsDocument, SaveDocumentDocument, DeleteDocumentDocument } from '../graphql-components';

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
  wordTagInfo?:any,
  wordsCount?:number;
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

  list(limit:string, lastId:string="", keywords:string=""){
    return this.getApollo.watchQuery({
      query:GetDocumentsDocument,
      variables:{
        pageSize:limit,
        lastId,
        keywords
      }
    });
  }

  get(content:string){
    return this.getApollo.query({
      query: GiveItToMeDocument,
      variables:{
        content
      }
    });
  }

  save(doc:Doc,wordTagLiteStr:any=null){
    return this.getApollo.mutate({
      mutation:SaveDocumentDocument,
      variables:{
        title:doc.title,
        content:doc.content,
        id:doc.id,
        docId:doc.docId,
        wordTagLiteStr:JSON.stringify(wordTagLiteStr),
        url:doc.url
      },
      update: (cache, {data:{doc:save}}:any) => {
        console.log('returned data is:', save);

        let result:any  = cache.readQuery({
          query:GiveItToMeDocument,
          variables:{
            content:doc.docId
          }
        });

        console.log('cached data is:', result);

        result.document.giveItToMe = save.save

        cache.writeQuery({
          query:GiveItToMeDocument,
          variables:{
            content:doc.docId
          },
          data:result
        })


      }
    });
  }

  delete(docId:string){
    return this.getApollo.mutate({
      mutation:DeleteDocumentDocument,
      variables:{
        docId
      }
    })
  }

  stats(){
    return this.getApollo.query({
      query:GetStatsDocument
    });
  }
}
