import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthClearPage } from './auth-clear.page';

const routes: Routes = [
  {
    path: '',
    component: AuthClearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthClearPageRoutingModule {}
