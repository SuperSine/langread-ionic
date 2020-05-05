import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocInfoPageRoutingModule } from './doc-info-routing.module';

import { DocInfoPage } from './doc-info.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocInfoPageRoutingModule,
    LangreadComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [DocInfoPage]
})
export class DocInfoPageModule {}
