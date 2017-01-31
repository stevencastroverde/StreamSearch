(function() {
  'use strict';
  angular.module('app')
    .component('card', {
      controller: cardController,
      templateUrl: 'cards/cards.html',
      bindings: {
        content: '<'
      }
      })

    function cardController (tvService, movieService) {
      const vm = this

      vm.$onInit = function () {

      }
    }
}());
