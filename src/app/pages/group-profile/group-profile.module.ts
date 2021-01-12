import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupProfilePageRoutingModule } from './group-profile-routing.module';

import { GroupProfilePage } from './group-profile.page';
import {LangreadComponentsModule} from 'src/app/components/LangreadComponents.module';
import { GroupEditorPageModule } from '../group-editor/group-editor.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupProfilePageRoutingModule,
    GroupEditorPageModule,
    LangreadComponentsModule
  ],
  declarations: [GroupProfilePage]
})
export class GroupProfilePageModule {}