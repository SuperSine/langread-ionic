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
  private timelineItems:TimelineItems

  constructor(private timelineService:TimelineService, private toastCtrl:ToastController) { 
    this.timelineItems = {words:[]};
  }

  ngOnInit() {
    this.timelineService.list(this.lastId, this.index).subscribe(({data:{timeline:{get}}}:any)=>{
      this.timelineItems.words = get.words;
      this.timelineItems.wordTagInfo = get.wordTagInfo.wti;

      console.log(this.timelineItems);
    })
  }



  onRefresh(event){

    this.timelineService.list('',1).subscribe(({data:{timeline:{get}}}:any) => {
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
    this.timelineService.list(this.lastId,++this.index).subscribe(({data:{timeline:{get}}}:any) => {
      var timelineItems:any = get;

      if(timelineItems.lastId != this.lastId)this.index=1;

      this.lastId = timelineItems.lastId;

      this.timelineItems.words = this.timelineItems.words.concat(timelineItems.words);
      this.timelineItems.wordTagInfo = this.timelineItems.wordTagInfo.concat(timelineItems.wordTagInfo.wti);

      this.infiniteScroll.complete();

    });
  }
}
