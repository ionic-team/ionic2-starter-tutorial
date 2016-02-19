import {Page, NavController, NavParams} from 'ionic/ionic';
import {Inject} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  constructor(@Inject(NavController) nav, @Inject(NavParams) navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
