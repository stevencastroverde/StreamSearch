(function() {
  'use strict';

angular.module('app')
.config(function($mdThemingProvider) {
   $mdThemingProvider
   .theme('default')
   .primaryPalette('cyan')
   .accentPalette('lime')
   .warnPalette('orange');
}); }());
