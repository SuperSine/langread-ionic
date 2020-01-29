import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocEditorPageRoutingModule } from './doc-editor-routing.module';

import { DocEditorPage } from './doc-editor.page';
import { QuillModule } from 'ngx-quill';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocEditorPageRoutingModule,
    QuillModule.forRoot({
      modules: {
        syntax: true
      }
    })
  ],
  declarations: [DocEditorPage]
})
export class DocEditorPageModule {}
