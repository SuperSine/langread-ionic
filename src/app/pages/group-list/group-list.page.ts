import { Component, OnInit } from '@angular/core';
import { HideHeaderConfig } from 'src/app/directives/hide-header.directive';
import { ModalController } from '@ionic/angular';
import { GroupEditorPage } from '../group-editor/group-editor.page';
import { GroupService } from 'src/app/services/group.service';
import { GroupType } from 'src/app/graphql-components';
import { environment } from 'src/environments/environment';
import { ApolloQueryResult } from 'apollo-client';
import { merge, Observable, Subscription,of, concat, forkJoin} from 'rxjs';
import { first, map, scan, switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.page.html',
  styleUrls: ['./group-list.page.scss'],
})
export class GroupListPage implements OnInit {

  constructor(private modalCtrl:ModalController, private groupService:GroupService) { }

  ngOnInit() {
    this.onRefresh(null);
  }

  ngOnDestroy(){

  }

  loadData(index:number, keywords:string='*'){
    if(this.currentSegment == 'discover'){
      return this.groupService.getAllGroups(index, this.size, keywords);
    }else if(this.currentSegment == 'followed'){
      return this.groupService.getUserGroups(index, this.size, keywords,"", false);
    }
  }

  async segmentChanged(event){
    this.index = 0;
    this.groupItems = null;

    this.currentSegment = event.detail.value;

    this.groupItems = this.loadData(this.index);
  }

  async onSearch(event){
    this.keywords = event.target.value;

    this.groupItems = this.loadData(0, this.keywords);
  }

  async loadMore(event){
    
    this.index++;
    var oldValues = await this.groupItems.toPromise();
    var newGroupItems = await this.loadData(this.index, this.keywords).toPromise();

    if(newGroupItems.length == 0){
      event.target.complete();
      return;
    }
    
    this.groupItems = of(oldValues.concat(newGroupItems));

    event.target.complete();

  }

  onRefresh(event){

    // this.groupItems = this.groupService.reFetch(0,this.size);

    this.groupItems = this.loadData(0);

    if(event != null)
      this.groupItems.subscribe(()=>event.target.complete());
  }

  async showAddGroup(){
    const modal = await this.modalCtrl.create({
      component:GroupEditorPage
    });

    modal.onDidDismiss().then(()=>{
      this.onRefresh(null);
    });

    modal.present();

  }

  getLanguage(code){
    const item = environment.targetLanguages.find((value) => {
      return value.code == code;
    });

    return item.name;
  }

  

  public headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 40};
  public currentSegment:string = 'discover';
  public index:number=0;
  public size:number=10;
  public groupItems:Observable<GroupType[]>;
  public keywords:string="*";

}
