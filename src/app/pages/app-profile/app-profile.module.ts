import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppProfilePageRoutingModule } from './app-profile-routing.module';

import { AppProfilePage } from './app-profile.page';
import { TranslateModule } from '@ngx-translate/core';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppProfilePageRoutingModule,
    TranslateModule.forChild(),
    LangreadComponentsModule
  ],
  declarations: [AppProfilePage]
})
export class AppProfilePageModule {}
