import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { PostCardsComponent } from 'src/app/components/post-cards/post-cards.component';
import { GroupType, MomentGroupType, MomentType } from 'src/app/graphql-components';
import { AuthService } from 'src/app/services/auth.service';
import { GroupService } from 'src/app/services/group.service';
import { environment } from 'src/environments/environment';
import { GroupEditorPage } from '../group-editor/group-editor.page';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.page.html',
  styleUrls: ['./group-profile.page.scss'],
})
export class GroupProfilePage implements OnInit {



  constructor(private router:Router, 
              private groupService:GroupService,
              private modalCtrl:ModalController,
              private authService:AuthService) { }

  async ngOnInit() {
    this.loadData();
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

  onRemove(follower){
    this.groupService.unFollowGroup(this.groupId,follower.id).toPromise().then(({data:{group:{unfollow}}}:any)=>{
      follower.id = "";
    });
  }

  loadData = () =>{
    this.groupInfo = this.groupService.getGroup(this.groupId);
  }

  loadUsers = (index:number, size:number) => {
    return this.groupService.fetchFollowers(this.groupId, this.pageIndex, environment.pageSize);
  }

  loadMoreUsers = (index:number, size:number) => {
    this.pageIndex++;

    this.groupService.fetchMoreFollowers(this.groupId, this.pageIndex, environment.pageSize);
  }

  async showGroupEditor(id:string){
    const modal = await this.modalCtrl.create({
      component:GroupEditorPage,
      componentProps:{
        id
      }
    });

    modal.onDidDismiss().then(({data}) => {
      console.log(data);
      this.groupInfo = of(data);
    });

    modal.present();

  }

  @ViewChild(PostCardsComponent)
  public postCards: PostCardsComponent;

  public currentSegment:string = "posts";
  public groupInfo:Observable<GroupType>;
  public momentGroupType:MomentGroupType = MomentGroupType.Group;

  private pageIndex:number = 0;
  

}
