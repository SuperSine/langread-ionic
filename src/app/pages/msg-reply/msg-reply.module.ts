import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsgReplyPageRoutingModule } from './msg-reply-routing.module';

import { MsgReplyPage } from './msg-reply.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsgReplyPageRoutingModule
  ],
  declarations: [MsgReplyPage]
})
export class MsgReplyPageModule {}
