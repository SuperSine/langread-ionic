import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/graphql-components';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.page.html',
  styleUrls: ['./app-profile.page.scss'],
})
export class AppProfilePage implements OnInit {

  constructor(public authService:AuthService) { }

  async ngOnInit() {
    this.user = this.authService.watchProfile();
    
  }

  async ionViewWillEnter(){
    console.log(123123123);
  }

  logout(){
    this.authService.logout();
  }

  public user: Observable<UserType | null>

}
