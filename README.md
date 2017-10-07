This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start mySideMenu sidemenu
```

Then, to run it, cd into `mySideMenu` and run:

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```

Substitute ios for android if not on a Mac.

# やったことメモ

[cordova-plubin-browsertab](https://github.com/google/cordova-plugin-browsertab) をインストールする

```bash
$ ionic cordova plugin add cordova-plugin-browsertab
$ npm install --save @ionic-native/browser-tab
```

依存関係で以下3つもバージョンを上げる

```bash
$ npm install --save @ionic-native/core@^4.2.0
$ npm install --save @ionic-native/splash-screen@^4.2.0
$ npm install --save @ionic-native/status-bar@^4.2.0
```


[Browser Tab](https://ionicframework.com/docs/native/browser-tab/) の実装をする

[In App Browser](https://ionicframework.com/docs/native/in-app-browser/) をインストールして実装を追加

```bash
$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install --save @ionic-native/in-app-browser
```



