// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaContacts) {
  $ionicPlatform.ready(function() {
    alert(1);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    // if (window.cordova && window.Keyboard) {
    //   alert('2A');
    //   window.Keyboard.hideKeyboardAccessoryBar(true);
    //   alert('2B');
    // }
    alert(2);
    document.addEventListener("deviceready", onDeviceReady, false);
    alert(3);
    function onDeviceReady() {
      alert(3);
      try {
        $cordovaContacts.pickContact().then(function (contactPicked) {
          alert(4);
          alert('The following contact has been selected:' + JSON.stringify(contactPicked));  
        });
    //   function contactSuccess(contact) {
    //     alert(4);
    //     alert('The following contact has been selected:' + JSON.stringify(contact));
    // }
    // function contactError(err) {
    //   alert('ErrorMessage'+err);
    // }
  } catch(e) {
    alert('Error'+ e);
  };
    }
    if (window.StatusBar) {
      alert(6)
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
