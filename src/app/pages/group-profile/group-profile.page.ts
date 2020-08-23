import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.page.html',
  styleUrls: ['./group-profile.page.scss'],
})
export class GroupProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async segmentChanged(event){
    this.currentSegment = event.detail.value;
  }

  public currentSegment:string = "posts";

}
