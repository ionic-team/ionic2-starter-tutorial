import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController} from 'ionic/ionic';

import {Page} from '../page';

@Component({
  selector: 'ion-view',
  bindings: [ FormBuilder ]
})
@View({
  templateUrl: 'app/login/login.html',
  directives: [formDirectives]
})
export class LoginPage extends Page {
  constructor(app: IonicApp, nav: NavController, fb: FormBuilder) {
    super(app);

    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
}
