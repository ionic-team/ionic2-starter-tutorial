import {bootstrap, NgFor, ComponentAnnotation as Component, DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {Aside, NavParams, Nav, NavController, Navbar, NavbarTemplate, List, Item, Content, Button} from 'ionic/ionic';

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, Button, List, Item, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/songs.html'
})
class SongsPage {
  constructor(nav: NavController) {
    this.nav = nav;

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
}

@Component({ selector: 'ion-view' })
@View({
  directives: [Content, Button, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/song_detail.html'
})
class SongDetailPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;

    this.song = navParams.song;

    console.log('Showing song', this.song);
  }
}


@Component({ selector: 'ion-app' })
@View({
  directives: [NgFor, Aside, Nav, Content, List, Item],
  templateUrl: 'templates/main.html'
})
class IonicApp {
  constructor() {
    console.log('IonicApp Start');

    this.components = [
      { title: 'Songs', component: SongsPage },
    ];

    this.firstPage = SongsPage;

  }
}

bootstrap(IonicApp);
