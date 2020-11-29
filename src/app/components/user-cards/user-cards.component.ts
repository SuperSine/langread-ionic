import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { env } from 'process';
import { Observable,of } from 'rxjs';
import { UserViewType } from 'src/app/graphql-components';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent implements OnInit {

  @Input()
  load:(index:number, size:number) => Observable<UserViewType[]>;

  @ViewChild(IonInfiniteScroll, {static:false})
  private infiniteScroll:IonInfiniteScroll;

  constructor() { }

  async ngOnInit() {
    await this.loadData();
  }

  async loadData(){
    if(this.users != null){
      var oldValues = await this.users.toPromise();
      var newValues = await this.load(++this.index, this.size).toPromise();

      if(newValues.length > 0)
        this.users = of(oldValues.concat(newValues));
    }else
      this.users = this.load(this.index, this.size);

    console.log(await this.users.toPromise());

    this.infiniteScroll.complete();
  }

  public users:Observable<UserViewType[]>;

  private index:number = 0;
  private size:number = environment.pageSize;
}
