import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagPickerPageRoutingModule } from './tag-picker-routing.module';

import { TagPickerPage } from './tag-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagPickerPageRoutingModule
  ],
  declarations: [TagPickerPage]
})
export class TagPickerPageModule {}
