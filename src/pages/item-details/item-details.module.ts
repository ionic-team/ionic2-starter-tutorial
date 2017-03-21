import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemDetailsPage } from './item-details';

@NgModule({
  declarations: [
    ItemDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPage),
  ],
  entryComponents: [
    ItemDetailsPage,
  ]
})
export class ItemDetailsPageModule {}