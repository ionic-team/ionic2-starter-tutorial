import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {Validators, Control, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController} from 'ionic/ionic';

@IonicView({
  templateUrl: 'app/signup/signup.html'
})
export class SignupPage {
  constructor(app: IonicApp, nav: NavController) {
    this.form = new ControlGroup({
      name: new Control("", Validators.required),
      email: new Control("", Validators.required),
      password: new Control("", Validators.required),
    });

  }

  doSignup(event) {
    // Handle the signup here:


    // Don't allow the form to submit normally, since we
    // will handle it ourselves
    event.preventDefault();
  }
}
