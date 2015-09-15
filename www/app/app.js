import {App, IonicApp, IonicPlatform} from 'ionic/ionic';

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
  constructor(app: IonicApp, platform: IonicPlatform) {
    this.app = app;
    this.platform = platform;

    this.initializeApp();

    // used for an example of ng-for and navigation
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

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)

    });
  }

  openPage(menu, page) {
    // close the menu when clicking a link from the menu
    menu.close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
