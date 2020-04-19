import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEditorPage } from './profile-editor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEditorPageRoutingModule {}
