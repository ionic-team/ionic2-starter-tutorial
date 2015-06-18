import {bootstrap, NgFor, ComponentAnnotation as Component, DirectiveAnnotation as Directive, ViewAnnotation as View} from 'angular2/angular2';
import {Aside, Nav, NavController, Navbar, NavbarTemplate, List, Item, Content, Button} from 'ionic/ionic';

console.log(Navbar, NavbarTemplate, Nav);

@Component({ selector: 'ion-view' })
@View({
  directives: [NgFor, Content, Button, List, Item, Navbar, NavbarTemplate],
  templateUrl: 'templates/pages/songs.html'
})
class SongsPage {
  constructor(nav: NavController) {
    this.nav = nav;

    this.name = 'Max';

    let words = ['Big', 'Cat', 'Dog', 'Guitars', 'Space', 'Eat', 'Truck', 'Worms',
    'Pizza', 'Lazers', 'Ice', 'Sound', 'Blast'];

    let randomTitle = () => {
      var title = [];
      for(let i = 0; i < 3; i++) {
        title.push(words[Math.floor(Math.random() * words.length)]);
      }
      let t = title.join(' ');
      return t;
    };

    this.songs = [];
    for(let i = 0; i < 20; i++) {
      this.songs.push({
        title: randomTitle()
      })
    }
    console.log(this.songs.length);
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
