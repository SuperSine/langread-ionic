import { Component, OnInit, ViewChild } from '@angular/core';
import { TimelineService, TimelineItems } from 'src/app/services/timeline.service';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-word-timeline',
  templateUrl: './word-timeline.page.html',
  styleUrls: ['./word-timeline.page.scss'],
})
export class WordTimelinePage implements OnInit {

  @ViewChild(IonInfiniteScroll,{static:false}) 
  infiniteScroll: IonInfiniteScroll;

  private lastId:string='';
  private index:number=1;
  private size:number=20;
  private timelineItems:TimelineItems;
  private keywords:string='';

  constructor(private timelineService:TimelineService, private toastCtrl:ToastController) { 
    this.timelineItems = {words:[]};
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
}
