import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { firebrick } from 'color-name';
import { Observable, of } from 'rxjs';
import { first, map, startWith } from 'rxjs/operators';
import { PostCardsComponent } from 'src/app/components/post-cards/post-cards.component';
import { TopMostComponent } from 'src/app/components/top-most/top-most.component';
import { GroupType, MomentGroupType, UserViewType, WordTagStaticsType } from 'src/app/graphql-components';
import { AuthService } from 'src/app/services/auth.service';
import { DocService } from 'src/app/services/doc.service';
import { GroupService } from 'src/app/services/group.service';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.page.html',
  styleUrls: ['./social-profile.page.scss'],
})
export class SocialProfilePage implements OnInit {

  constructor(private router:Router,private socialService:SocialService,private docService:DocService,private groupService:GroupService,private authService:AuthService) { }

  ngOnInit() {

  }

  async segmentChanged(event){
    this.currentSegment = event.detail.value;

    if(this.currentSegment == 'topmost'){
      this.ionContent.scrollToBottom(50);
      this.topMost.loadData();
    }
  }

  ngAfterViewInit(){
    this.postCards.loadData();

    this.userSocial = this.socialService.profile(this.userId);

    this.groupTypes$ = this.groupService.getUserGroups(0,100,"*",this.userId, false);

    this.stats = this.docService.stats().valueChanges.pipe(
      map(({data:{document:{stats}}}:any)=> stats as WordTagStaticsType),
      first()
    );


  }

  async follow(event){
    this.socialService.follow(this.userId).subscribe(async ({data:{profile:{follow}}}:any)=>{

      var userSocialResult = await this.userSocial.toPromise();
      userSocialResult.isFollowing = follow;
      
      this.userSocial = of(userSocialResult);
    })
  }

  get userId(){
    const reg = /social-profile\/(.+)/g;
    const values = reg.exec(this.router.url);

    console.log(this.router);

    return values != null ? values[1] : "";
  }

  loadFollowers = (index:number, size:number) => {
    return this.socialService.fetchFollowers(this.userId, this.followerPageIndex, size);
  }

  loadFollowings = (index:number, size:number) => {
    return this.socialService.fetchFollowings(this.userId, this.followingPageIndex, size);
  }

  loadMoreFollowers = (index:number, size:number) => {
    this.followerPageIndex++;

    this.socialService.fetchMoreFollowers(this.userId, this.followerPageIndex, size);
  }

  loadMoreFollowings = (index:number, size:number) => {
    this.followingPageIndex++;

    this.socialService.fetchMoreFollowings(this.userId, this.followingPageIndex, size);
  }

  onFollowerRemove(user:UserViewType){
    this.socialService.unfollow(user.id).toPromise().then((result)=>{
      user.id = "";
    })
  }

  onFollowingRemove(user:UserViewType){
    this.socialService.follow(user.id).toPromise().then((result) => {
      user.id = "";
    });
  }

  @ViewChild(PostCardsComponent)
  public postCards: PostCardsComponent;

  @ViewChild(TopMostComponent)
  public topMost: TopMostComponent;

  @ViewChild(IonContent)
  public ionContent: IonContent;

  public currentSegment:string = "posts";
  public userSocial:Observable<UserViewType>;
  public groupTypes$:Observable<GroupType[]>;
  public stats:Observable<WordTagStaticsType>;
  public momentGroupType:MomentGroupType = MomentGroupType.Group;

  private followerPageIndex:number = 0;
  private followingPageIndex:number = 0;

}
