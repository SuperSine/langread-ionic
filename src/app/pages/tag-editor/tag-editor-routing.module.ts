import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagEditorPage } from './tag-editor.page';

const routes: Routes = [
  {
    path: '',
    component: TagEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagEditorPageRoutingModule {}
