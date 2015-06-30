import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

import {SongDetailPage} from './song-detail';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/songs.html'
})
export class SongsPage {
  constructor(nav: NavController) {
    this.name = 'Max';

    let songTitles = [
      'Linoleum',
      'Rise Above',
      'Ruby Soho',
      'Blitzkrieg Bop',
      'God Save the Queen',
      'Give Me The Cure'
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
