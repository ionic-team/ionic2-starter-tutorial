import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {NavController, Navbar, NavbarTemplate, Content, Button} from 'ionic/ionic';

@Component({ selector: 'ion-view' })
@View({
  directives: [Content, Button, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/song_detail.html'
})
export class SongDetailPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;

    this.song = navParams.song;

    console.log('Showing song', this.song);
  }
}

