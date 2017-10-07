import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserTab } from '@ionic-native/browser-tab';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  openUrl: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
      public browserTab: BrowserTab, public iab: InAppBrowser) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'CustomTabs', component: HomePage},
      { title: 'InAppBrowser', component: HomePage}
    ];

    this.openUrl = 'http://radiocat.hatenablog.com/';

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if(page.title === 'CustomTabs') {
      this.openCustomTabs();
      return;
    } else if(page.title === 'InAppBrowser') {
      this.openInAppBrowser();
      return;
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openCustomTabs() {
    this.browserTab.isAvailable()
      .then((isAvailable: boolean) => {

        if (isAvailable) {

          this.browserTab.openUrl(this.openUrl);

        } else {

          // open URL with InAppBrowser instead or SafariViewController
          this.openInAppBrowser();

        }

      });
  }

  openInAppBrowser() {
    const browser = this.iab.create(this.openUrl);
    browser.show();
  }

}
