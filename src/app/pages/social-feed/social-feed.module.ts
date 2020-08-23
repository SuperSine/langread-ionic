import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialFeedPageRoutingModule } from './social-feed-routing.module';

import { SocialFeedPage } from './social-feed.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialFeedPageRoutingModule,
    LangreadComponentsModule
  ],
  declarations: [SocialFeedPage]
})
export class SocialFeedPageModule {}
