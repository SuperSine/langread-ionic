import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupEditorPage } from './group-editor.page';

const routes: Routes = [
  {
    path: '',
    component: GroupEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupEditorPageRoutingModule {}
