import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordInfoPageRoutingModule } from './word-info-routing.module';

import { WordInfoPage } from './word-info.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordInfoPageRoutingModule,
    LangreadComponentsModule
  ],
  declarations: [WordInfoPage]
})
export class WordInfoPageModule {}
