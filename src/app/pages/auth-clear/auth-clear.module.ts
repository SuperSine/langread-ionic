import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthClearPageRoutingModule } from './auth-clear-routing.module';

import { AuthClearPage } from './auth-clear.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthClearPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AuthClearPage]
})
export class AuthClearPageModule {}
