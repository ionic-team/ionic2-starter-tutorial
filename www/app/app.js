import {bootstrap, NgFor, Component, Directive, View} from 'angular2/angular2';
import {App, IonicApp} from 'ionic/ionic';

import {IntroPage} from './intro/intro';
//import {LoginPage} from './login/login';

@App({
  templateUrl: '/app/app.html'
})
class MyApp {
  constructor(app: IonicApp) {
    this.app = app;

    this.pages = [
      { title: 'Intro', component: IntroPage },
      //{ title: 'Login', component: LoginPage },
    ];

    this.firstPage = IntroPage;
  }

  openPage(aside, page) {
    console.log('Opening page', page);

    // Close the side menu
    aside.close();

    // Reset the content nav to have just this page
    let nav = this.app.getComponent('nav');
    nav.setItems([page.component]);
  }
}
