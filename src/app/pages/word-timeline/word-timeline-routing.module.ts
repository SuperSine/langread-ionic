import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordTimelinePage } from './word-timeline.page';

const routes: Routes = [
  {
    path: '',
    component: WordTimelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordTimelinePageRoutingModule {}
