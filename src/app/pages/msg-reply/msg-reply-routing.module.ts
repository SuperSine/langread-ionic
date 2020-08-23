import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsgReplyPage } from './msg-reply.page';

const routes: Routes = [
  {
    path: '',
    component: MsgReplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsgReplyPageRoutingModule {}
