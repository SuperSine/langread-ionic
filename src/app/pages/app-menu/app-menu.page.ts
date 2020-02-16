import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { runInThisContext } from 'vm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.page.html',
  styleUrls: ['./app-menu.page.scss'],
})
export class AppMenuPage implements OnInit {
  private selectedPath:string = '';

  private pages = [
    {
      title:'Document',
      url:'/menu/doc-list'
    },
    {
      title:'Tags',
      url:'/menu/tag-list'
    }
  ];


  constructor(private router:Router,private authService:AuthService) {
    this.router.events.subscribe((event:RouterEvent) => {
      if(event.url == '/login'){
        this.authService.logout();
      }

      this.selectedPath = event.url;
    })
   }

  ngOnInit() {
  }

}
