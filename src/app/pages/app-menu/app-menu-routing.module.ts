import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMenuPage } from './app-menu.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'menu',
    component: AppMenuPage,
    children:[
      {
        path:'doc-list',
        loadChildren: () => import('../doc-list/doc-list.module').then( m => m.DocListPageModule)
      },
      {
        path:'tag-list',
        loadChildren: () => import('../tag-list/tag-list.module').then( m => m.TagListPageModule)
      },
      {
        path:'word-timeline',
        loadChildren: () => import('../word-timeline/word-timeline.module').then( m => m.WordTimelinePageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'word-info',
        loadChildren: () => import('../word-info/word-info.module').then( m => m.WordInfoPageModule),
        canActivate:[AuthGuard]
      }      
    ]
  },
  {
    path:'',
    redirectTo:'/menu/doc-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMenuPageRoutingModule {}
