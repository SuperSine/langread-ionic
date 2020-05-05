import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMenuPageRoutingModule } from './app-menu-routing.module';

import { AppMenuPage } from './app-menu.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMenuPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [AppMenuPage]
})
export class AppMenuPageModule {}
