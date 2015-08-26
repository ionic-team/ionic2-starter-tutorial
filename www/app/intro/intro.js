import {bootstrap, Component, View, NgFor, ViewQuery, QueryList} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController, Slides} from 'ionic/ionic';

@IonicView({
  templateUrl: 'app/intro/intro.html'
})
export class IntroPage {
  constructor(app: IonicApp, nav: NavController, @ViewQuery(Slides) public slides: QueryList<Slides>) {
    slides.onChange((c) => {
    });
  }
}
