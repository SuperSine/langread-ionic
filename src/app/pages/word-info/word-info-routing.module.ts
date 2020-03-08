import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordInfoPage } from './word-info.page';

const routes: Routes = [
  {
    path: '',
    component: WordInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordInfoPageRoutingModule {}
