import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthTotpPageRoutingModule } from './auth-totp-routing.module';

import { AuthTotpPage } from './auth-totp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthTotpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthTotpPage]
})
export class AuthTotpPageModule {}
