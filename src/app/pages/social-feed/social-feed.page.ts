import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostCardsComponent } from 'src/app/components/post-cards/post-cards.component';
import { MomentGroupType, MomentType } from 'src/app/graphql-components';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-social-feed',
  templateUrl: './social-feed.page.html',
  styleUrls: ['./social-feed.page.scss'],
})
export class SocialFeedPage implements OnInit {

  constructor(private router:Router) {
    
  }

  async ngOnInit() {
    console.log(this.router.url, this.router);
    // this.momentItems =  this.momentService.getMomentsByLang(0,this.size);
    // const result = await this.momentItems.toPromise();
    // console.log(result);


  }

  ngAfterViewInit(){
    console.log(this.postCards);

    this.postCards.type = MomentGroupType.All;
    this.postCards.loadData();
  }

  @ViewChild(PostCardsComponent)
  public postCards: PostCardsComponent;

  public momentItems:Observable<MomentType[]>;
  public size:number=10;
  public index:number=0;
  public defaultWord:string;
}
