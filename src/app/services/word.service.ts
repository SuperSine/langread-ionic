import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { WordProfileType } from '../types';
import { ApolloQueryResult } from 'apollo-client';

const WordProfileGql = gql`
  query($word:String!){
    wti{
      profile(word:$word){
        word,
        score,
        wordInfo{
          wti{
            word,
            wordInfos{
              tag{
                tagFont,
                tagName,
                tagColor
              }
              count
            }
          }
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
}
