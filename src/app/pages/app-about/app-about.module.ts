import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppAboutPageRoutingModule } from './app-about-routing.module';

import { AppAboutPage } from './app-about.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppAboutPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AppAboutPage]
})
export class AppAboutPageModule {}
