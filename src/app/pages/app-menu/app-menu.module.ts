import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMenuPageRoutingModule } from './app-menu-routing.module';

import { AppMenuPage } from './app-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMenuPageRoutingModule
  ],
  declarations: [AppMenuPage]
})
export class AppMenuPageModule {}
