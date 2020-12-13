import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PostCardsComponent } from 'src/app/components/post-cards/post-cards.component';
import { GroupType, MomentGroupType, MomentType } from 'src/app/graphql-components';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.page.html',
  styleUrls: ['./group-profile.page.scss'],
})
export class GroupProfilePage implements OnInit {



  constructor(private router:Router, private groupService:GroupService) { }

  async ngOnInit() {
    this.groupInfo = this.groupService.getGroup(this.groupId);
  }

  ngAfterViewInit(){
    this.postCards.loadData();
  }

  async segmentChanged(event){
    this.currentSegment = event.detail.value;
  }

  get groupId(){
    const reg = /group-profile\/(.+)/g;
    const values = reg.exec(this.router.url);

    console.log(this.router);

    return values != null ? values[1] : "";
  }
  async follow(event){
    this.groupService.followGroup(this.groupId).subscribe(async ({data:{group:{follow}}}:any)=>{

      var group = await this.groupInfo.toPromise();
      group.isFollowed = follow;
      
      this.groupInfo = of(group);
    })
  }
  //cann't use this otherwise pointer would come from component itself.
  // async loadUsers(index:number, size:number){
  //   return this.groupService.getFollowers(this.groupId, index, size)
  // }

  loadUsers = (index:number, size:number) => {
    return this.groupService.getFollowers(this.groupId, index, size);
  }


  @ViewChild(PostCardsComponent, {static:false})
  public postCards: PostCardsComponent;

  public currentSegment:string = "posts";
  public groupInfo:Observable<GroupType>;
  public momentGroupType:MomentGroupType = MomentGroupType.Group;

}
