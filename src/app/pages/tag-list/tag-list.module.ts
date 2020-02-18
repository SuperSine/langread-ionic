import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagListPageRoutingModule } from './tag-list-routing.module';

import { TagListPage } from './tag-list.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagListPageRoutingModule,
    LangreadComponentsModule
  ],
  declarations: [TagListPage]
})
export class TagListPageModule {}