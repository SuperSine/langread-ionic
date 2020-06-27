import { Component, OnInit } from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-app-about',
  templateUrl: './app-about.page.html',
  styleUrls: ['./app-about.page.scss'],
})
export class AppAboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.appVersion = environment.appVersion;
  }

  public appVersion:string;
}
