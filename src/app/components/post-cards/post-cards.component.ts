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

  fetch(index:number, size:number):Observable<MomentType[]>{
    var moments = null;
    if(this.type == MomentGroupType.Group || this.type == MomentGroupType.Profile){
      moments = this.momentService.getMomentsByGroup(this.id, this.type, index, size);
    }else{
      moments = this.momentService.getMomentsByLang(index, 
                                                         size, 
                                                         this.authService.UserId, 
                                                         this.authService.userObj.targetLanguage);
    }

    return moments;

  }

  async loadData(){
    if(this.moments != null){
      var oldValues = await this.moments.toPromise();
      var newValues = await this.fetch(++this.index, environment.pageSize).toPromise();
  
      if(newValues.length > 0)
        this.moments = of(oldValues.concat(newValues));
    }else
      this.moments = this.fetch(this.index, environment.pageSize);


    this.infiniteScroll.complete();

  }

  @ViewChild(IonInfiniteScroll, {static:false})
  private infiniteScroll:IonInfiniteScroll;

  public moments:Observable<MomentType[]>;
  private index:number = 0;

  @Input()
  public type:MomentGroupType;

  @Input()
  public id:string;

}
