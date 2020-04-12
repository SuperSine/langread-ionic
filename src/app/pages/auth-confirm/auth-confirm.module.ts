import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthConfirmPageRoutingModule } from './auth-confirm-routing.module';

import { AuthConfirmPage } from './auth-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthConfirmPageRoutingModule
  ],
  declarations: [AuthConfirmPage]
})
export class AuthConfirmPageModule {}
