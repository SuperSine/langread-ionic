import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { GlobalService } from 'src/app/services/global.service';
import { WordProfileType, TimelineValueByMonthType, ValueByMonthType, TranslationType, UserType } from 'src/app/graphql-components';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
import {TagEditorPage} from '../tag-editor/tag-editor.page'
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.page.html',
  styleUrls: ['./word-info.page.scss'],
})
export class WordInfoPage implements OnInit {


  constructor(private modalCtrl:ModalController, 
              private navCtrl:NavController, 
              private wordProfileService:WordService, 
              private globalService:GlobalService,
              private activatedRoute:ActivatedRoute,
              private translate:TranslateService,
              private authService:AuthService) { 
    this.word = this.activatedRoute.snapshot.paramMap.get('word');

  }

  tagRemove(tag){
    this.wordProfileService.remove(this.word, tag.tagName).subscribe((result)=>{
      if(result.errors && result.errors.length > 0){
        this.globalService.throwError(result.errors.map(item=>item));
        return;
      }else{
        var index = this.wordProfile.wordInfo.findIndex((item)=>item.tag.tagName == tag.tagName);
        this.wordProfile.wordInfo.splice(index,1);

        this.globalService.tip([this.lang.tagDeleteMsg]);
      }
    })


  }

  openTagEditor(data){
    this.modalCtrl.create({
      component: TagEditorPage,
      componentProps: data,
      // cssClass: 'from-middle-modal'
    }).then(modal => {
      modal.present();
    });
  }

  goBack(event){
    this.navCtrl.back();
  }

  get formattedScore(){
    return (this.wordProfile.score * 100).toFixed(1);
  }

  get pronunciation(){
    return this.wordProfile.entryResults[0].phonetic;
  }


  async ngOnInit() {
    


    const result = await this.translate.get(this.langKeys,{word:this.word}).toPromise();

    this.userObj = await this.authService.getUserObj();

    Object.keys(result).forEach((key,i)=>{
      var newKey = key.split('.')[1];

      this.lang[newKey] = result[key];
    })


    try{

      this.wordProfileService.profile(this.word, this.userObj.targetLanguage, this.userObj.sourceLanguage).then(({data:{wti,timeline}})=>{
        this.wordProfile  = wti.profile;
        this.wordTrends = timeline.wordByMonth.data;

      });
      


      console.log(this.wordProfile);

    }catch(ex){
      console.log(ex);
      this.globalService.publishToast({
        duration:2000,
        color:"danger",
        message:ex.message
      })
    }
  }


  ngAfterViewInit(){

  }


  public userObj:UserType;
  public wordTrends:ValueByMonthType[];
  public wordProfile: WordProfileType;

  public word:string;


  private langKeys:string[] = [
    'word-info.tagHeader',
    'word-info.trendHeader',
    'word-info.translateHeader',
    'word-info.searchWord',
    'word-info.tagDeleteMsg',
    'word-info.chartTrends',
    'word-info.chartMonth',
    'word-info.chartCount',
    'word-info.tagDeleteMsg'
  ]

  public lang:any={};

}
