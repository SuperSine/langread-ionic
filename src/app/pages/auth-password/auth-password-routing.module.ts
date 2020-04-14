import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPasswordPage } from './auth-password.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPasswordPageRoutingModule {}
