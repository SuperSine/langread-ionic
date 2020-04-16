import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthTotpPage } from './auth-totp.page';

const routes: Routes = [
  {
    path: '',
    component: AuthTotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthTotpPageRoutingModule {}
