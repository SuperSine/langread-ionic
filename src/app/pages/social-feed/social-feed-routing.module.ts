import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialFeedPage } from './social-feed.page';

const routes: Routes = [
  {
    path: '',
    component: SocialFeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialFeedPageRoutingModule {}
