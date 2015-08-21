import {bootstrap, Component, View, NgFor} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController} from 'ionic/ionic';

import {Page} from '../page';

@Component({
  selector: 'ion-view',
  bindings: [ FormBuilder ]
})
@View({
  templateUrl: 'app/signup/signup.html',
  directives: [formDirectives]
})
export class SignupPage extends Page {
  constructor(app: IonicApp, nav: NavController, fb: FormBuilder) {
    super(app);

    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
}
