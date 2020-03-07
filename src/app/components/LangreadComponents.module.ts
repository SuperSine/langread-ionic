import {NgModule} from '@angular/core';
import { NoContentComponent } from './no-content/no-content.component';
import { WordTagInfoComponent } from './word-tag-info/word-tag-info.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations:[NoContentComponent,WordTagInfoComponent],
  exports:[NoContentComponent, WordTagInfoComponent],
  imports:[
    IonicModule
  ]
})
export class LangreadComponentsModule{}