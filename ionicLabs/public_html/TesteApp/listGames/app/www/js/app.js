angular.module('listGame', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  console.log("RUN");
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "login.html",
      controller:"loginCtrl"
    })
    .state('home', {
      url: "/home",
      templateUrl: "home.html",
      controller:"mainCtrl"
    })
  
  $urlRouterProvider.otherwise("/login");
});

