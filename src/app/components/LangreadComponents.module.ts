import { NgModule } from '@angular/core';
import { NoContentComponent } from './no-content/no-content.component';
import { WordTagInfoComponent } from './word-tag-info/word-tag-info.component';
import { WordDictionaryComponent } from './word-dictionary/word-dictionary.component';
import { WordTrendComponent } from './word-trend/word-trend.component';
import { WordTempComponent } from './word-temp/word-temp.component';
import { WordSoundComponent } from './word-sound/word-sound.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NoContentComponent, 
    WordTagInfoComponent, 
    WordDictionaryComponent,
    WordTrendComponent,
    WordTempComponent,
    WordSoundComponent
  ],
  exports: [
    NoContentComponent, 
    WordTagInfoComponent, 
    WordDictionaryComponent,
    WordTrendComponent,
    WordTempComponent,
    WordSoundComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ]
})
export class LangreadComponentsModule { }