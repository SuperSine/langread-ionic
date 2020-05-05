import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthEmailPageRoutingModule } from './auth-email-routing.module';

import { AuthEmailPage } from './auth-email.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthEmailPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [AuthEmailPage]
})
export class AuthEmailPageModule {}
