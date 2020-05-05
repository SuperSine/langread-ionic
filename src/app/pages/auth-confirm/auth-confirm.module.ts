import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthConfirmPageRoutingModule } from './auth-confirm-routing.module';

import { AuthConfirmPage } from './auth-confirm.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthConfirmPageRoutingModule,
    TranslateModule
  ],
  declarations: [AuthConfirmPage]
})
export class AuthConfirmPageModule {}
