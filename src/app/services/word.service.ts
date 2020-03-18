import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const WordProfileGql = gql`
  query($word:String!){
    wti{
      profile(word:$word){
        word,
        score,
        wordInfo{
          tag{
            tagName,
            tagFont,
            tagColor
          }
          count
        }
        dictResult{
          results{
            lexicalEntries{
              language
              lexicalCategory
              entries{
                senses{
                  domains
                  definitions
                  examples
                }
              }
              pronunciations{
                phoneticNotation,
                phoneticSpelling,
                audioFile,
                dialects
              }
            }
            type
          }
        }
        score
      }
    }
  }
`;

const TopmostGql = gql`
  query($top:String){
    wti{
      topMost(top:$top){
        word
        score,
        wordInfo{
          tag{
            tagFont
            tagName
            tagColor
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private apollo:Apollo) { 


  }

  get Apollo(){
    return this.apollo.use("core");
  }



  async profile(word:string):Promise<any>{
    var profile = await this.Apollo.query({
      query:WordProfileGql,
      variables:{
        word
      }
    }).toPromise<any>()

    return profile.data.wti.profile;
  }

  async topMost(top:number=500):Promise<any>{
    var topMost = await this.Apollo.query({
      query:TopmostGql,
      variables:{
        top
      }
    }).toPromise<any>();

    return topMost.data.wti.topMost;
  }
}
