import { Component, Input, OnInit } from '@angular/core';
import { UserViewType } from 'src/app/graphql-components'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  get avatarUrl(){
    return `${environment.avatarUrl}/${this.user.id}`;
  }

  get profileUrl(){
    return `/social-profile/${this.user.id}`;
  }

  @Input()
  public user:UserViewType

}
