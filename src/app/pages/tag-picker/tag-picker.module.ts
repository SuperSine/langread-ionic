import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagPickerPageRoutingModule } from './tag-picker-routing.module';

import { TagPickerPage } from './tag-picker.page';
import { TagsFilterPipe } from 'src/app/pipes/tags-filter.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagPickerPageRoutingModule,
    TranslateModule.forChild(),
    LangreadComponentsModule
  ],
  declarations: [TagPickerPage,TagsFilterPipe]
})
export class TagPickerPageModule {}
