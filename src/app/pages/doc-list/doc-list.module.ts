import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocListPageRoutingModule } from './doc-list-routing.module';

import { DocListPage } from './doc-list.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocListPageRoutingModule,
    LangreadComponentsModule
  ],
  declarations: [DocListPage]
})
export class DocListPageModule {}
