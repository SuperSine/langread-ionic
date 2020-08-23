import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupProfilePage } from './group-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GroupProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupProfilePageRoutingModule {}
