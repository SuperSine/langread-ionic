import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthRegisterPageRoutingModule } from './auth-register-routing.module';

import { AuthRegisterPage } from './auth-register.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRegisterPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [AuthRegisterPage]
})
export class AuthRegisterPageModule {}
