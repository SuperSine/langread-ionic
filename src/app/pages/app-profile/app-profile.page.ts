import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/graphql-components';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.page.html',
  styleUrls: ['./app-profile.page.scss'],
})
export class AppProfilePage implements OnInit {

  constructor(private authService:AuthService) { }

  async ngOnInit() {
    this.user = await this.authService.getUserObj();
  }

  ionViewWillEnter(){
    console.log(123123123);
  }

  private user:UserType

}
