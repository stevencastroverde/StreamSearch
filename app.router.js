(function() {
  'use strict';
  angular.module('app').config(config)
  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home',
      {
        url: '/',
        component:'home',
      })
      .state ({
        name: 'tvsearch',
        url:'/shows',
        component:'tvSearch'
      })
      .state ({
        name: 'moviesearch',
        url:'/movies',
        component:'movieSearch'
      })
      .state ({
        name: 'about',
        url:'/about',
        component:'about'
      });
  }
})();
