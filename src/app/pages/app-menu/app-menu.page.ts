import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { runInThisContext } from 'vm';
import { AuthService } from 'src/app/services/auth.service';
import { DocService } from 'src/app/services/doc.service';
import { WordTagStaticsType, UserType } from 'src/app/graphql-components';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.page.html',
  styleUrls: ['./app-menu.page.scss'],
})
export class AppMenuPage implements OnInit {

  public pages = [
    {
      title:'document-title',
      url:'/menu/doc-list',
      icon:'newspaper-outline'
    },
    {
      title:'tags-title',
      url:'/menu/tag-list',
      icon:'pricetags-outline'
    },
    {
      title:'timeline-title',
      url:'/menu/word-timeline',
      icon:'pulse-outline'
    },
    {
      title:'profile-title',
      url:'/menu/app-profile',
      icon:'person-outline'
    },    
  ];

  constructor(private translateService:TranslateService, 
              private docService:DocService, 
              private router:Router,
              public authService:AuthService) {
    this.router.events.subscribe((event:RouterEvent) => {
      if(event.url == '/login'){
        this.authService.logout();
      }

      this.selectedPath = event.url;
    })

    this.transSub = this.translateService.get('appMenu').subscribe(res => {
      this.pages.forEach((item)=>{
        item.title = res[item.title];
      })
    })
   }

  async ngOnInit() {
    this.docService.stats().toPromise().then((result:any) => {
      this.stats = result.data.document.stats;
    });

    this.user = await this.authService.getUserObj();
  }

  ngOnDestroy(){
    this.transSub.unsubscribe();
  }

  public stats: WordTagStaticsType
  public user: UserType

  public transSub:Subscription;
  public selectedPath:string;
}
