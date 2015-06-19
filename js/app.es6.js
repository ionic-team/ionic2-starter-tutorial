import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {Aside, NavParams, Nav, NavController, Navbar, NavbarTemplate, List, Item, Content, Button} from 'ionic/ionic';

import {SongsPage} from './pages/songs.es6';

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
}

bootstrap(IonicApp);
