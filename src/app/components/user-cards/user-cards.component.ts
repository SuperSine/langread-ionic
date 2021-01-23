import { Component, OnInit, Output, EventEmitter, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { QueryRef } from 'apollo-angular';
import { env } from 'process';
import { Observable,of } from 'rxjs';
import { UserViewType } from 'src/app/graphql-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent implements AfterViewInit{

  @Output()
  remove: EventEmitter<UserViewType> = new EventEmitter<UserViewType>();

  @Input()
  load:(index:number, size:number) => Observable<UserViewType[]>;

  @Input()
  loadMore:() => any;

  @ViewChild(IonInfiniteScroll, {static:false})
  private infiniteScroll:IonInfiniteScroll;

  constructor() { }

  async ngAfterViewInit() {
    await this.loadData();
    this.showRemove = this.remove.observers.length > 0;
  }

  async loadData(){
    if(this.users == null){
      this.users = this.load(this.index, this.size);
    }else
      await this.loadMore();

    this.infiniteScroll.complete();
  }

  onRemove(user:UserViewType){
    this.remove.emit(user);
  }

  public users:Observable<UserViewType[]>;
  public showRemove:boolean;

  private index:number = 0;
  private size:number = environment.pageSize;
  
}
