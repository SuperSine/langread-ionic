import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialProfilePage } from './social-profile.page';

const routes: Routes = [
  {
    path: '',
    component: SocialProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialProfilePageRoutingModule {}
