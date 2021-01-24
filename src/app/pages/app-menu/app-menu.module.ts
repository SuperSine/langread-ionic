import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMenuPageRoutingModule } from './app-menu-routing.module';

import { AppMenuPage } from './app-menu.page';
import { TranslateModule } from '@ngx-translate/core';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMenuPageRoutingModule,
    TranslateModule.forChild(),
    LangreadComponentsModule
  ],
  declarations: [AppMenuPage]
})
export class AppMenuPageModule {}
