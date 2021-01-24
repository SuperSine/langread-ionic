import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditorPageRoutingModule } from './profile-editor-routing.module';

import { ProfileEditorPage } from './profile-editor.page';
import { TranslateModule } from '@ngx-translate/core';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';
import { File } from '@ionic-native/file/ngx';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditorPageRoutingModule,
    ReactiveFormsModule,
    ImageCropperModule,
    LangreadComponentsModule,
    TranslateModule.forChild(),
  ],
  providers:[
    File
  ],
  declarations: [ProfileEditorPage]
})
export class ProfileEditorPageModule {}
