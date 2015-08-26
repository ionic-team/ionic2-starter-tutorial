import {bootstrap, NgFor, Component, Directive, View} from 'angular2/angular2';
import {App, IonicApp} from 'ionic/ionic';

import {GettingStartedPage} from './getting-started/getting-started';
import {IntroPage} from './intro/intro';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';
import {TabsPage} from './tabs/tabs';
import {ListPage} from './list/list';
import {GridPage} from './grid/grid';

@App({
  templateUrl: '/app/app.html',
  /*
  routes: [
    {
      path: '/intro',
      component: IntroPage,
      root: true
    },
    {
      path: '/intro',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignupPage
    },
    {
      path: '/tabs',
      component: TabsPage
    },
    {
      path: '/list',
      component: ListPage
    },
    {
      path: '/grid',
      component: GridPage
    }
  ]
  */
})

class MyApp {
  constructor(app: IonicApp) {
    this.app = app;

    this.pages = [
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'Intro', component: IntroPage },
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'List', component: ListPage },
      { title: 'Grid Icons', component: GridPage },
    ];

    this.firstPage = GettingStartedPage;
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
