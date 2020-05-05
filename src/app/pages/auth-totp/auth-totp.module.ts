import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthTotpPageRoutingModule } from './auth-totp-routing.module';

import { AuthTotpPage } from './auth-totp.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthTotpPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [AuthTotpPage]
})
export class AuthTotpPageModule {}
