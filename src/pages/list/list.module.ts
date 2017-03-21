import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ListPage } from './list';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  entryComponents: [
    ListPage,
  ]
})
export class ListPageModule {}