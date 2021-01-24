import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupEditorPageRoutingModule } from './group-editor-routing.module';

import { GroupEditorPage } from './group-editor.page';
import { File } from '@ionic-native/file/ngx';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupEditorPageRoutingModule,
    ReactiveFormsModule,
    LangreadComponentsModule
  ],
  providers:[
    File
  ],
  declarations: [GroupEditorPage]
})
export class GroupEditorPageModule {}