import {bootstrap, NgFor, ComponentAnnotation as Component,
  DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {IonicApp, NavController, Navbar, NavbarTemplate, List, Item, Content} from 'ionic/ionic';

import {SongDetailPage} from './song-detail';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, List, Item, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/songs.html'
})
export class SongsPage {
  constructor(app: IonicApp, nav: NavController) {
    this.name = 'Max';

    this.app = app;

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

  toggleMenu() {
    let aside = this.app.getComponent('mainMenu');
    aside.toggle();
  }
}
