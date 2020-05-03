import {NgModule} from '@angular/core';
import { NoContentComponent } from './no-content/no-content.component';
import { WordTagInfoComponent } from './word-tag-info/word-tag-info.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[NoContentComponent,WordTagInfoComponent],
  exports:[NoContentComponent, WordTagInfoComponent],
  imports:[
    CommonModule,
    IonicModule
  ]
})
export class LangreadComponentsModule{}