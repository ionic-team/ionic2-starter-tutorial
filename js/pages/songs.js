import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {NavController, Navbar, NavbarTemplate, List, Item, Content, Button} from 'ionic/ionic';

import {SongDetailPage} from './song-detail';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, Button, List, Item, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/songs.html'
})
export class SongsPage {
  constructor(nav: NavController) {
    this.nav = nav;

    // TODO(adamdbradley): fix the window.nav dep
    window.nav = nav;

    this.name = 'Max';

    let songTitles = [
      'Two Charges',
      'Feeling so Electric',
      'The only Ion I\'ve ever loved',
      'The last Ionite',
      'Double Bond',
      'Redox Redux',
      'Na Na Na Na'
    ];

    this.songs = songTitles.map((item) => {
      return {
        title: item
      }
    });
  }

  openSong(song) {
    this.nav.push(SongDetailPage, {
      song: song
    });
  }

  openMenu() {
  }
}
