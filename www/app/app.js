import {App, IonicApp} from 'ionic/ionic';

import {GettingStartedPage} from './getting-started/getting-started';
import {IntroPage} from './intro/intro';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';
import {TabsPage} from './tabs/tabs';
import {ListPage} from './list/list';
import {GridPage} from './grid/grid';


@App({
  templateUrl: 'app/app.html'
})

class MyApp {
  constructor(app: IonicApp) {
    this.app = app;

    // used for an example of ng-repeat and navigation
    this.pages = [
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'Intro', component: IntroPage },
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'List', component: ListPage },
      { title: 'Grid Icons', component: GridPage },
    ];

    this.rootPage = GettingStartedPage;
  }

  openPage(aside, page) {
    // close the menu when clicking a link from the aside
    aside.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
