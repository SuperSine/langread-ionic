import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthEmailPage } from './auth-email.page';

const routes: Routes = [
  {
    path: '',
    component: AuthEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthEmailPageRoutingModule {}
