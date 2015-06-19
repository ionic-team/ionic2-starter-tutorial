import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {Aside, NavParams, Nav, NavController, Navbar, NavbarTemplate, List, Item, Content, Button} from 'ionic/ionic';

import {SongsPage} from './pages/songs';

@Component({ selector: 'ion-app' })
@View({
  directives: [NgFor, Aside, Nav, Content, List, Item],
  templateUrl: 'templates/main.html'
})
class IonicApp {
  constructor() {
    console.log('IonicApp Start', SongsPage);

    this.components = [
      { title: 'Songs', component: SongsPage },
    ];

    this.firstPage = SongsPage;

  }

  openPage(aside, page) {
    console.log('Opening page', page);

    aside.close();
    // TODO(adamdbradley): fix the window.nav dep
    window.nav.clear().then(() => {
      window.nav.push(page, {}, {
        animate: false
      });
    })
  }
}

bootstrap(IonicApp);
