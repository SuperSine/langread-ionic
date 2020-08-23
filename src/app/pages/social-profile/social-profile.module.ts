import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialProfilePageRoutingModule } from './social-profile-routing.module';

import { SocialProfilePage } from './social-profile.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialProfilePageRoutingModule,
    LangreadComponentsModule
  ],
  declarations: [SocialProfilePage]
})
export class SocialProfilePageModule {}
