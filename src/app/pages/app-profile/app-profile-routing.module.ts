import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppProfilePage } from './app-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AppProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppProfilePageRoutingModule {}
