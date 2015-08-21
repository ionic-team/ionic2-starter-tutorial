import {IonicApp} from 'ionic/ionic';

export class Page {
  constructor(app: IonicApp) {
    this.app = app;
  }

  toggleMenu() {
    let aside = this.app.getComponent('mainMenu');
    aside.toggle();
  }
}
