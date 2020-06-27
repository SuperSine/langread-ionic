import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAboutPage } from './app-about.page';

const routes: Routes = [
  {
    path: '',
    component: AppAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAboutPageRoutingModule {}
