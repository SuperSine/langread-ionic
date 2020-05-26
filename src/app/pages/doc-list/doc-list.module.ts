import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocListPageRoutingModule } from './doc-list-routing.module';

import { DocListPage,PopOverMenuComponent } from './doc-list.page';
import { LangreadComponentsModule } from 'src/app/components/LangreadComponents.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocListPageRoutingModule,
    LangreadComponentsModule,
    TranslateModule.forChild()
  ],
  declarations: [DocListPage,PopOverMenuComponent],
  entryComponents:[PopOverMenuComponent]
})
export class DocListPageModule {}
