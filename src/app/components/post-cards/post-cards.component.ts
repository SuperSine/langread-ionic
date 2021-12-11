import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable,of } from 'rxjs';
import { MomentGroupType, MomentType } from 'src/app/graphql-components';
import { AuthService } from 'src/app/services/auth.service';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss'],
})
export class PostCardsComponent implements OnInit {

  constructor(private momentService:MomentService, private authService:AuthService) { }

  ngOnInit() {
  }

  // ngAfterViewInit(){
  //   this.loadData();
  // }

  // fetch(index:number, size:number):Observable<MomentType[]>{
  //   var moments = null;
  //   if(this.type == MomentGroupType.Group || this.type == MomentGroupType.Profile){
  //     moments = this.momentService.getMomentsByGroup(this.id, this.type, index, size);
  //   }else{
  //     moments = this.momentService.getMomentsByLang(index, 
  //                                                        size, 
  //                                                        this.authService.UserId, 
  //                                                        this.authService.userObj.targetLanguage);
  //   }

  //   return moments;

  // }

  fetch(index:number, size:number):Observable<MomentType[]>{
    var moments = null;
    if(this.type == MomentGroupType.Group || this.type == MomentGroupType.Profile){
      moments = this.momentService.fetchByGroup(this.id, this.type, index, size);
    }else{
      moments = this.momentService.fetchByLang(index, 
                                              size, 
                                              this.authService.UserId, 
                                              this.authService.userObj.targetLanguage);
    }

    return moments;

  }

  fetchMore(index:number, size:number){
    if(this.type == MomentGroupType.Group || this.type == MomentGroupType.Profile){
      this.momentService.fetchMoreByGroup(this.id, this.type, index, size);
    }else{
      this.momentService.fetchMoreByLang(index, 
                                         size, 
                                         this.authService.UserId, 
                                         this.authService.userObj.targetLanguage);
    }
  }

  async loadData(){
    if(this.moments != null){
      await this.fetchMore(this.index, environment.pageSize);
    }else
      this.moments = this.fetch(this.index, environment.pageSize);

    this.index++;

    this.infiniteScroll.complete();

  }

  @ViewChild(IonInfiniteScroll)
  private infiniteScroll:IonInfiniteScroll;

  public moments:Observable<MomentType[]>;
  private index:number = 0;

  @Input()
  public type:MomentGroupType;

  @Input()
  public id:string;

}
