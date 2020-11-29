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
import { PostCardsComponent } from './post-cards/post-cards.component';
import { RouterModule } from '@angular/router';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { AvatarUrlDirective } from '../directives/avatar-url.directive';
import { TopMostComponent } from './top-most/top-most.component';

@NgModule({
  declarations: [
    AvatarUrlDirective,
    NoContentComponent, 
    WordTagInfoComponent, 
    WordDictionaryComponent,
    WordTrendComponent,
    WordTempComponent,
    WordSoundComponent,
    ImageCropperComponent,
    PostCardComponent,
    UserCardComponent,
    PostCardsComponent,
    UserCardsComponent,
    TopMostComponent
  ],
  exports: [
    AvatarUrlDirective,
    NoContentComponent, 
    WordTagInfoComponent, 
    WordDictionaryComponent,
    WordTrendComponent,
    WordTempComponent,
    WordSoundComponent,
    ImageCropperComponent,
    PostCardComponent,
    UserCardComponent,
    RouterModule,
    PostCardsComponent,
    UserCardsComponent,
    TopMostComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    ImageCropperModule,
    RouterModule
  ],
  entryComponents:[ImageCropperComponent]
})
export class LangreadComponentsModule { }