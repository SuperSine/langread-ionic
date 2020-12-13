import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupListPageRoutingModule } from './group-list-routing.module';

import { GroupListPage } from './group-list.page';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';
import { TagEditorPageModule } from '../tag-editor/tag-editor.module';
import { GroupEditorPage } from '../group-editor/group-editor.page';
import { GroupEditorPageModule } from '../group-editor/group-editor.module';
import { SelectPipe } from 'src/app/pipes/select.pipe';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupListPageRoutingModule,
    GroupEditorPageModule,
    LangreadComponentsModule
  ],
  declarations: [SelectPipe, GroupListPage, HideHeaderDirective]
})
export class GroupListPageModule {}
