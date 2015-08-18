// Angular dependencies
import 'reflect-metadata';
import 'traceur-runtime';
import 'rtts_assert/rtts_assert';
import 'zone.js';

import {bootstrap, NgFor, Component, Directive, View} from 'angular2/angular2';
import {App, IonicApp} from 'ionic/ionic';

import {SongsPage} from './songs/songs';
import {PlaylistsPage} from './playlists/playlists';


@App({
  templateUrl: 'app/app.html'
})
class MyApp {
  constructor(app: IonicApp) {
    console.log('IonicApp Start', SongsPage);

    this.app = app;

    this.pages = [
      { title: 'Songs', component: SongsPage },
      { title: 'Playlists', component: PlaylistsPage },
    ];

    this.firstPage = SongsPage;
  }

  openPage(aside, page) {
    console.log('Opening page', page);

    // Close the side menu
    aside.close();

    // Reset the content nav to have just this page
    let nav = this.app.getComponent('nav');
    nav.setItems([page.component]);
  }
}
