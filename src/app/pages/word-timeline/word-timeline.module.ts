import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordTimelinePageRoutingModule } from './word-timeline-routing.module';

import { WordTimelinePage } from './word-timeline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordTimelinePageRoutingModule
  ],
  declarations: [WordTimelinePage]
})
export class WordTimelinePageModule {}
