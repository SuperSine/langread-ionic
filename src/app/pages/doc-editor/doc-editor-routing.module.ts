import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocEditorPage } from './doc-editor.page';
import { QuitDocEditorGuard } from 'src/app/guards/quit-doc-editor.guard';

const routes: Routes = [
  {
    path: '',
    component: DocEditorPage,
    canDeactivate:[QuitDocEditorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[QuitDocEditorGuard]
})
export class DocEditorPageRoutingModule {}
