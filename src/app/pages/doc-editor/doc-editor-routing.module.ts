import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocEditorPage } from './doc-editor.page';

const routes: Routes = [
  {
    path: '',
    component: DocEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocEditorPageRoutingModule {}
