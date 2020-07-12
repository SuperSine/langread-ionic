import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';
import { CheckUpdateService } from 'src/app/services/check-update.service';

@Component({
  selector: 'app-app-about',
  templateUrl: './app-about.page.html',
  styleUrls: ['./app-about.page.scss'],
})
export class AppAboutPage implements OnInit {

  constructor(private swUpdate: CheckUpdateService) { }

  ngOnInit() {
    this.appVersion = environment.appVersion;
  }

  checkForUpdate(event){
    this.checkWaiting = true;
    console.log("checking for update...");
    this.swUpdate.checkForUpdate();
  }

  public checkWaiting:boolean;

  public appVersion:string;
}
