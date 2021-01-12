import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { ActionSheetController, IonInfiniteScroll } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable,of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { CommentType } from 'src/app/graphql-components';
import { GlobalService } from 'src/app/services/global.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-msg-reply',
  templateUrl: './msg-reply.page.html',
  styleUrls: ['./msg-reply.page.scss'],
})
export class MsgReplyPage implements OnInit {

  constructor(private router:Router, 
              private momentService:MomentService, 
              private globalService:GlobalService,
              private translateService:TranslateService,
              private actionSheetCtrl:ActionSheetController,
              private location:Location,
              private commentService:CommentService) { 

  }

  async ngOnInit() {
    this.lang = await this.translateService.get("doc-list").toPromise();
  }

  async ngAfterViewInit(){
    this.comments = this.commentService.fetch(this.id);
  }

  async presentActionSheet(item:CommentType){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons:[{
        text:this.lang.delete,
        role:'destructive',
        icon:'trash',
        handler:()=>{
          this.deleteComment(item.id);
        }
      },
      {
        text:this.lang.cancel,
        icon:'close',
        role:'cancel',
        handler:()=>{
        }
      }]
    });

    await actionSheet.present();
  }

  get id(){
    if(!this._momentId){
      const reg = /msg-reply\/(.+)/g;
      const values = reg.exec(this.router.url);

      this._momentId = values != null ? values[1] : "";
    }

    return this._momentId;
  }

  timeSince(time:string){
    return this.globalService.timeSince(new Date(time));
  }

  async loadMore(){   
    await this.commentService.fetchMore(this.id);

    this.infiniteScroll.complete();
  }

  async deleteComment(id:string){
    const result = await this.commentService.delete(id, this.id).toPromise();
    this.globalService.tip([this.lang.deleted]);
  }

  postComment(){
    this.momentService.comment({
      content:this.content,
      readId:this.id
    }).pipe(
      startWith(true)
    ).subscribe(async youCanClick => {
      if(typeof youCanClick == 'boolean')
        this.youCanClick = youCanClick as boolean;
      else{
        this.youCanClick = false;
      }
    })
  }

  async like(comment:CommentType){
    let value:number;

    comment.hasVoted = !comment.hasVoted;
    value = comment.hasVoted ? 1 : -1;
    
    comment.upvoteCount +=  value;
    
    if(comment.upvoteCount < 0)comment.upvoteCount = 0;

    await this.commentService.like(comment.id).toPromise();
  }

  goBack(){
    this.location.back();
  }

  @ViewChild(IonInfiniteScroll, {static:false})
  private infiniteScroll:IonInfiniteScroll;

  private _momentId:string;
  private pageIndex:number = 0;
  public comments: Observable<CommentType[]>;
  public content:string;
  public youCanClick:boolean;

  public lang:any;

}
