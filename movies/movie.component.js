(function() {
  'use strict';
  angular.module('app')
    .component('movieSearch', {
      controller: movieSearchController,
      templateUrl:'movies/moviesearch.html'
    });
  function movieSearchController (movieService){
    const vm = this;
    vm.$onInit = function (){
      movieService.getFreeMovies()
        .then((movies) => console.log(movies));
    };
  }
}());
