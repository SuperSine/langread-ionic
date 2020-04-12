import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { TimelineValueByMonthType } from '../graphql-components';

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

    timeline{
      wordByMonth(word:$word){
        data{
          total,
          yearMonth{
            year
            month
          }
        }
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

const WordByMonthGql = gql`
  query($word:String!){
    timeline{
      wordByMonth(word:$word){
        data{
          total,
          yearMonth{
            year
            month
          }
        }
      }
    }
  }
`;

const TagByMonthGql = gql`
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

    profile.data.timeline.wordByMonth.data = profile.data.timeline.wordByMonth.data.sort((a,b)=>{
      var dateA = new Date(a.yearMonth.year, a.yearMonth.month, 1);
      var dateB = new Date(b.yearMonth.year, b.yearMonth.month, 1);

      if(dateA > dateB)return 1;
      else if(dateA < dateB)return -1;
      else return 0;
    });

    return profile.data;
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

  async wordByMonth(word:string):Promise<any>{
    var wordByMonth = await this.Apollo.query({
      query: WordByMonthGql,
      variables:{
        word
      }
    }).toPromise<any>();

    var result = wordByMonth.data.timeline.wordByMonth.data.sort((a,b)=>{
      var dateA = new Date(a.yearMonth.year, a.yearMonth.month, 1);
      var dateB = new Date(b.yearMonth.year, b.yearMonth.month, 1);

      if(dateA > dateB)return 1;
      else if(dateA < dateB)return -1;
      else return 0;
    });

    return result;
  }

  async tagByMonth(word:string):Promise<any>{
    var tagByMonth = await this.Apollo.query({
      query: TagByMonthGql,
      variables:{
        word
      }
    }).toPromise<any>();

    return tagByMonth.data.tagByMonth;
  }
}
