import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TimelineService, TimelineItems } from 'src/app/services/timeline.service';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { WordService } from 'src/app/services/word.service';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators'
import { Router } from '@angular/router';
import { WordProfileType } from 'src/app/graphql-components';
import { FontService } from 'src/app/services/font.service';
// import * as WordCloud from 'wordcloud';
const WordCloud = require('wordcloud');

@Component({
  selector: 'app-word-timeline',
  templateUrl: './word-timeline.page.html',
  styleUrls: ['./word-timeline.page.scss'],
})
export class WordTimelinePage implements OnInit {


  

  constructor(private router:Router, private renderer: Renderer2, private timelineService:TimelineService, private toastCtrl:ToastController, private wordProfileService:WordService,
              private fontService:FontService) { 
    this.timelineItems = {words:[]};

    this.rangeChanged.pipe(
                          debounceTime(300),
                          distinctUntilChanged()
                      ).subscribe((value) => {
                        this.loadTopmost(value);
                      });

  }

  ngOnInit() {
    this.list();
  }

  getTags(word:string){
    var tags = this.timelineItems.wordTagInfo.find((wordInfo)=>{return wordInfo.word == word});
    return tags.wordInfos;
  }

  list(){
    this.timelineService.list(this.lastId, this.index, this.size, this.keywords).subscribe(({data:{timeline:{get}}}:any)=>{
      this.timelineItems.words = get.words;
      this.timelineItems.wordTagInfo = get.wordTagInfo.wti;

      console.log(this.timelineItems);
    })
  }

  onSearch(event){
    this.keywords = event.target.value;

    this.index = 0;
    this.lastId = "";

    this.timelineItems = {words:[],wordTagInfo:[]};;
    
    this.list();
  }

  onRefresh(event){

    this.timelineService.list('',1,this.size, this.keywords).subscribe(({data:{timeline:{get}}}:any) => {
      this.timelineItems.words = get.words;
      this.timelineItems.wordTagInfo = get.wordTagInfo.wti;
      event.target.complete();
    }, async (err)=>{
      let alert = await this.toastCtrl.create({
        message: err.message,
        duration:2000,
        color:"danger"
      });
      alert.present();

      event.target.complete();

    });
  }

  loadData(event){
    this.timelineService.list(this.lastId,++this.index,this.size,this.keywords).subscribe(({data:{timeline:{get}}}:any) => {
      var timelineItems:any = get;

      if(timelineItems.lastId != this.lastId)this.index=1;

      this.lastId = timelineItems.lastId;

      this.timelineItems.words = this.timelineItems.words.concat(timelineItems.words);
      this.timelineItems.wordTagInfo = this.timelineItems.wordTagInfo.concat(timelineItems.wordTagInfo.wti);

      this.infiniteScroll.complete();

    });
  }

  async loadTopmost(top:number){
    const factor = top / 1000;

    this.topList = null;

    this.wordProfileService.topMost(top).then((data)=>{
      this.topList = data;

      const childElements = this.htmlCanvas.nativeElement.children;

      for (let child of childElements) {
        this.renderer.removeChild(this.htmlCanvas.nativeElement, child);
      }
      var style = getComputedStyle(document.body);

      setTimeout(()=>{
        WordCloud(this.htmlCanvas.nativeElement, { 
          list: this.topList.map((value)=>[value.word,(70 - 30*factor)*value.score]),
          classes:(word, weight, fontSize, distance, theta)=>{
            var wordProfile = this.topList.find((item) => item.word == word);
            var tagFont = wordProfile.wordInfo[0].tag.tagFont;

            return this.fontService.prefix.replace(".","") + tagFont;

          },
          color:(word, weight, fontSize, distance, theta)=>{
            var wordProfile = this.topList.find((item) => item.word == word);
            var tagColor = wordProfile.wordInfo[0].tag.tagColor;

            return tagColor;

          },
          backgroundColor:style.getPropertyValue('--ion-background-color')
        } 
        );
      }, 10); 

    })


  }

  onCanvasClick(event){


    let element = event.path[0].nodeName == "SPAN" ? event.path[0] : null;

    if(!element)return null;

    let word = element.textContent && element.textContent.toLowerCase();

    console.log(word);

    this.router.navigateByUrl(`/word-info;word=${word}`)
  }

  async segmentChanged(event){
    this.currentSegment = event.detail.value;

    if(this.currentSegment == "Topmost"){
      this.loadTopmost(100);
    }
  }

  onRangeChange(event){
    console.log(event);
    this.rangeChanged.next(event.detail.value);
  }

  @ViewChild(IonInfiniteScroll, {static:false}) 
  public infiniteScroll: IonInfiniteScroll;

  @ViewChild("htmlCanvas", {static:false})
  public htmlCanvas: ElementRef;

  public lastId:string='';
  public index:number=1;
  public size:number=20;
  public timelineItems:TimelineItems;
  public keywords:string='';
  public currentSegment:string='Timeline';
  public topList:WordProfileType[];
  public rangeChanged:Subject<number> = new Subject<number>();
}
