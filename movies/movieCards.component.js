(function() {
  'use strict';
  angular.module('app')
    .component('movieCard', {
      controller: moviecardController,
      templateUrl: 'movies/movieCards.html',
      bindings: {
        content: '<'
      }
      })

    function moviecardController (movieService) {
      const vm = this

      vm.$onInit = function () {

      }
    }
}());
