import {bootstrap, Component, View, NgFor, ViewQuery, QueryList} from 'angular2/angular2';
import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
import {IonicApp, IonicView, NavController, Slides} from 'ionic/ionic';

import {Page} from '../page';

@IonicView({
  templateUrl: 'app/intro/intro.html'
})
export class IntroPage extends Page {
  constructor(app: IonicApp, nav: NavController, @ViewQuery(Slides) public slides: QueryList<Slides>) {
    super(app);
    slides.onChange((c) => {
    });
  }
  viewDidEnter() {
    //this.slides.first && this.slides.first.resize();
  }
}
