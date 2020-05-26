import {NgModule} from '@angular/core';
import { NoContentComponent } from './no-content/no-content.component';
import { WordTagInfoComponent } from './word-tag-info/word-tag-info.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations:[NoContentComponent,WordTagInfoComponent],
  exports:[NoContentComponent, WordTagInfoComponent],
  imports:[
    CommonModule,
    IonicModule,
    TranslateModule
  ]
})
export class LangreadComponentsModule{}