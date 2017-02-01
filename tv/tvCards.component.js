(function() {
  'use strict';
  angular.module('app')
    .component('tvCard', {
      controller: tvCardController,
      templateUrl: 'tv/tvCards.html',
      bindings: {
        content: '<'
      }
      })

    function tvCardController (tvService, movieService) {
      const vm = this

      vm.$onInit = function () {

      }
    }
}());
