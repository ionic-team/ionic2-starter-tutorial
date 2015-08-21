import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {Validators, Control, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController} from 'ionic/ionic';

import {Page} from '../page';

@IonicView({
  templateUrl: 'app/login/login.html'
})
export class LoginPage extends Page {
  constructor(app: IonicApp, nav: NavController) {
    super(app);

    this.form = new ControlGroup({
      email: new Control(),
      password: new Control(),
    });
  }

  doLogin(event) {
    // Handle the login here:


    // Don't allow the form to submit normally, since we
    // will handle it ourselves
    event.preventDefault();
  }
}
