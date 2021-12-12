import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
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
      title:'feeds-title',
      url:'/menu/feeds',
      icon:'earth-outline'
    },
    {
      title:'groups-title',
      url:'/menu/groups',
      icon:'dice-outline'
    },
    {
      title:'profile-title',
      url:'/menu/setting',
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
      
      if(event.url)
        this.selectedPath = event.url;
      else
        this.selectedPath = '/menu/doc-list';
    })

    this.transSub = this.translateService.get('appMenu').subscribe(res => {
      this.pages.forEach((item)=>{
        item.title = res[item.title];
      })
    })
   }

  async ngOnInit() {
    this.docService.stats().valueChanges.subscribe((result:any) => {
      this.stats = result.data.document.stats;
    });

    this.user = this.authService.watchProfile();

  }

  ngOnDestroy(){
    this.transSub.unsubscribe();
  }

  public stats: WordTagStaticsType
  public user: Observable<UserType>;

  public transSub:Subscription;
  public selectedPath:string;
  public appVersion:string;
}
