import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import "./item-details.scss";

@Page({
  templateUrl: 'app/item-details/item-details.html'
})
export class ItemDetailsPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
