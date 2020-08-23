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
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { PostCardComponent } from './post-card/post-card.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    NoContentComponent, 
    WordTagInfoComponent, 
    WordDictionaryComponent,
    WordTrendComponent,
    WordTempComponent,
    WordSoundComponent,
    ImageCropperComponent,
    PostCardComponent,
    UserCardComponent
  ],
  exports: [
    NoContentComponent, 
    WordTagInfoComponent, 
    WordDictionaryComponent,
    WordTrendComponent,
    WordTempComponent,
    WordSoundComponent,
    ImageCropperComponent,
    PostCardComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    ImageCropperModule
  ],
  entryComponents:[ImageCropperComponent]
})
export class LangreadComponentsModule { }