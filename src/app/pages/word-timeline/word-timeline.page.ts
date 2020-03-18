import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TimelineService, TimelineItems } from 'src/app/services/timeline.service';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { WordService } from 'src/app/services/word.service';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators'
import { Router } from '@angular/router';
// import * as WordCloud from 'wordcloud';
const WordCloud = require('wordcloud');

@Component({
  selector: 'app-word-timeline',
  templateUrl: './word-timeline.page.html',
  styleUrls: ['./word-timeline.page.scss'],
})
export class WordTimelinePage implements OnInit {

  @ViewChild(IonInfiniteScroll,{static:false}) 
  infiniteScroll: IonInfiniteScroll;

  @ViewChild("htmlCanvas",{static:false})
  private htmlCanvas: ElementRef;

  private lastId:string='';
  private index:number=1;
  private size:number=20;
  private timelineItems:TimelineItems;
  private keywords:string='';
  private currentSegment:string='Timeline';
  private topList:any[];
  private rangeChanged:Subject<number> = new Subject<number>();
  

  constructor(private router:Router, private renderer: Renderer2, private timelineService:TimelineService, private toastCtrl:ToastController, private wordProfileService:WordService) { 
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
    this.topList = null;

    this.wordProfileService.topMost(top).then((data)=>{
      this.topList = data;

      const childElements = this.htmlCanvas.nativeElement.children;

      for (let child of childElements) {
        this.renderer.removeChild(this.htmlCanvas.nativeElement, child);
      }
      setTimeout(()=>{
        WordCloud(this.htmlCanvas.nativeElement, { list: this.topList.map((value)=>{
          return [value.word, 20*value.score];
        }) } );
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
    console.log(event);
    this.currentSegment = event.detail.value;

    if(this.currentSegment == "Topmost"){
      this.loadTopmost(100);
    }
  }

  onRangeChange(event){
    console.log(event);
    this.rangeChanged.next(event.detail.value);
  }
}
