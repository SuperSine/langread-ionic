import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPasswordPageRoutingModule } from './auth-password-routing.module';

import { AuthPasswordPage } from './auth-password.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPasswordPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [AuthPasswordPage]
})
export class AuthPasswordPageModule {}
