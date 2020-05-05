import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthLoginPageRoutingModule } from './auth-login-routing.module';

import { AuthLoginPage } from './auth-login.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthLoginPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [AuthLoginPage]
})
export class AuthLoginPageModule {}
