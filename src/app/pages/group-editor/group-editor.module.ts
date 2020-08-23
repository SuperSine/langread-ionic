import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupEditorPageRoutingModule } from './group-editor-routing.module';

import { GroupEditorPage } from './group-editor.page';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImageCropperModule } from 'ngx-image-cropper';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';
import { ImageCropperComponent } from 'src/app/components/image-cropper/image-cropper.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupEditorPageRoutingModule,
    ReactiveFormsModule,
    ImageCropperModule,
    LangreadComponentsModule
  ],
  providers:[
    Crop,
    File,
    Camera
  ],
  declarations: [GroupEditorPage]
})
export class GroupEditorPageModule {}
