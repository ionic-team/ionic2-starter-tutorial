import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/playlists.html'
})
export class PlaylistsPage {
  constructor(nav: NavController) {
  }
}
