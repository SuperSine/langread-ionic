import { Component, OnInit } from '@angular/core';
import { HideHeaderConfig } from 'src/app/directives/hide-header.directive';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.page.html',
  styleUrls: ['./group-list.page.scss'],
})
export class GroupListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public headerScrollConfig: HideHeaderConfig = { cssProperty: 'margin-top', maxValue: 40};

}
