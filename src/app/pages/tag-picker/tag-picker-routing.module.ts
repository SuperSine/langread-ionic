import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagPickerPage } from './tag-picker.page';

const routes: Routes = [
  {
    path: '',
    component: TagPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagPickerPageRoutingModule {}
