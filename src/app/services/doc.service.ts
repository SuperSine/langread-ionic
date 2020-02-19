import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const DeleteDocGql = gql`
  mutation($docId:String!){
    doc{
      delete(docId:$docId)
    }
  }
`;

const SaveDocGql = gql`
  mutation($title:String!, $content:String!, $wordTagLiteStr:String!, $id:String, $docId:String){
    doc{
      save(document:{
        title:$title,
        content:$content,
        id:$id,
        docId:$docId
      }, wordTagLiteStr:$wordTagLiteStr){
        document{
        docId,
        id,
        content,
        createDate,
        updateDate,
        title,
        wordsCount
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
  query($pageSize:String!, $lastId:String!, $keywords:String){
    document{
      list(limit:$pageSize,lastId:$lastId, keywords:$keywords){
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
        title,
        wordsCount
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
      query:UserTagListGql,
      variables:{
        pageSize:limit,
        lastId,
        keywords
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

  save(title:string, content:string, wordTagLiteStr:any=null, id:string, docId:string){
    return this.getApollo.mutate({
      mutation:SaveDocGql,
      variables:{
        title,
        content,
        id,
        docId,
        wordTagLiteStr:JSON.stringify(wordTagLiteStr)
      },
      update: (cache, {data:{doc:save}}:any) => {
        let result:any  = cache.readQuery({
          query:GiveItToMeGql,
          variables:{
            content:docId,
            wordTagLiteStr:JSON.stringify(wordTagLiteStr)
          }
        });

        console.log('cached data is:', result);
        console.log('returned data is:', save);

        result.document.giveItToMe = save.save

        cache.writeQuery({
          query:GiveItToMeGql,
          variables:{
            content:docId,
            wordTagLiteStr:JSON.stringify(wordTagLiteStr)
          },
          data:result
        })


      }
    });
  }

  delete(docId:string){
    return this.getApollo.mutate({
      mutation:DeleteDocGql,
      variables:{
        docId
      }
    })
  }
}
