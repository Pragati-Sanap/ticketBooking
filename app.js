
var app = angular.module('myApp', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
 
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "app/bookings/home/home.html",
        controller:"homeCtrl"
      })
      .state('seats', {
        url: "/seats",
        templateUrl: "app/bookings/seats/seats.html",
        controller:"seatsCtrl"
      })
      .state('payment', {
        url: "/payment/:userId",
        templateUrl: "app/bookings/payment/payment.html",
        controller:"paymentCtrl"
      })
      .state('success', {
        url: "/success/:userId",
        templateUrl: "app/bookings/success/success.html",
        controller:"successCtrl"
      })
      .state('failed', {
        url: "/failed",
        templateUrl: "app/bookings/failed/failed.html",
        controller:"failedCtrl"
      })
  });


