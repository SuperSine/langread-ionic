import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagEditorPageRoutingModule } from './tag-editor-routing.module';

import { TagEditorPage } from './tag-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagEditorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TagEditorPage]
})
export class TagEditorPageModule {}
