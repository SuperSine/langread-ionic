import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocEditorPageRoutingModule } from './doc-editor-routing.module';

import { DocEditorPage } from './doc-editor.page';
import { DocEditorSaveComponent } from './doc-editor-save/doc-editor-save.component';
import { QuillModule } from 'ngx-quill';
import { PickDirective } from 'src/app/directives/pick.directive';
import { TagPickerPageModule } from '../tag-picker/tag-picker.module';
import { DocInfoPageModule } from '../doc-info/doc-info.module';
import { UniqueTagsPipe } from 'src/app/pipes/unique-tags.pipe';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocEditorPageRoutingModule,
    DocInfoPageModule,
    TagPickerPageModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar:[[{ 'font': ['Georgia'] }]]
      }
    }),
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  declarations: [UniqueTagsPipe, DocEditorPage, PickDirective,DocEditorSaveComponent ],
  entryComponents:[DocEditorSaveComponent]
})
export class DocEditorPageModule {}
