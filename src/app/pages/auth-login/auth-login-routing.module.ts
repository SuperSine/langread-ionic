import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLoginPage } from './auth-login.page';

const routes: Routes = [
  {
    path: '',
    component: AuthLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginPageRoutingModule {}
