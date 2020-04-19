import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { runInThisContext } from 'vm';
import { AuthService } from 'src/app/services/auth.service';
import { DocService } from 'src/app/services/doc.service';
import { WordTagStaticsType, UserType } from 'src/app/graphql-components';

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
      url:'/menu/doc-list',
      icon:'newspaper-outline'
    },
    {
      title:'Tags',
      url:'/menu/tag-list',
      icon:'pricetags-outline'
    },
    {
      title:'Timeline',
      url:'/menu/word-timeline',
      icon:'pulse-outline'
    },
    {
      title:'Profile',
      url:'/menu/app-profile',
      icon:'person-outline'
    },    
  ];


  constructor(private docService:DocService, private router:Router,private authService:AuthService) {
    this.router.events.subscribe((event:RouterEvent) => {
      if(event.url == '/login'){
        this.authService.logout();
      }

      this.selectedPath = event.url;
    })
   }

  async ngOnInit() {
    this.docService.stats().toPromise().then((result:any) => {
      this.stats = result.data.document.stats;
    });

    this.user = await this.authService.getUserObj();
  }

  private stats: WordTagStaticsType
  private user: UserType
}
