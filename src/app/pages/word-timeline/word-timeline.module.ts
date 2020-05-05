import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordTimelinePageRoutingModule } from './word-timeline-routing.module';

import { WordTimelinePage } from './word-timeline.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordTimelinePageRoutingModule,
    LangreadComponentsModule,
    TranslateModule
  ],
  declarations: [WordTimelinePage]
})
export class WordTimelinePageModule {}
