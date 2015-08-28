import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController, Slides} from 'ionic/ionic';

@IonicView({
  templateUrl: '/app/grid/grid.html'
})
export class GridPage {
  constructor(app: IonicApp, nav: NavController) {
  }
}
