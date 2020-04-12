import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthConfirmPage } from './auth-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: AuthConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthConfirmPageRoutingModule {}
