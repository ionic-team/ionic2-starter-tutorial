import {Validators, Control, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController} from 'ionic/ionic';


@IonicView({
  templateUrl: 'app/login/login.html'
})
export class LoginPage {
  constructor(app: IonicApp, nav: NavController) {
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
