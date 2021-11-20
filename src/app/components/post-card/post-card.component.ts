import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { map, take } from 'rxjs/operators';
import { MomentType, UserType } from 'src/app/graphql-components';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {

  constructor(private momentService:MomentService, 
              private authService:AuthService,
              public globalService:GlobalService,
              private actionSheetCtrl:ActionSheetController) {
    this.userId = authService.userObj.appId
  }

  ngOnInit() {}

  like(event){
    this.momentService.like(this.moment.id).toPromise().then(({data:{moment:{vote}}}:any) => {
      console.log(vote);
      let value = 0;
      if(vote.upvoteCount == 1){
        value = 1;
      }else if(this.moment.upvoteCount > 0){
        value = -1;
      }else
        value = 0;

      this.moment.upvoteCount += value;
    })
  }

  getLanguage(code:string){
    const item = environment.targetLanguages.find((value) => {
      return value.code == code.toLowerCase();
    });

    return item.name;
  }

  async openActSheet(id:string){
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Delete',
        icon: 'trash',
        handler: () => {
          this.momentService.delete(id).toPromise().then(() => {
            this.moment.status = 3;
          })
        }
      },
      ]
    });

    await actionSheet.present();
  }

  @Input()
  public moment:MomentType;
  public baseAvatarUrl = environment.avatarUrl;
  public userId:string;

}
