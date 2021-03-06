import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordInfoPageRoutingModule } from './word-info-routing.module';

import { WordInfoPage } from './word-info.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';
import { TagEditorPageModule } from '../tag-editor/tag-editor.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordInfoPageRoutingModule,
    LangreadComponentsModule,
    TagEditorPageModule,
    TranslateModule.forChild()
  ],
  declarations: [WordInfoPage]
})
export class WordInfoPageModule {}
