(function() {
  'use strict';
  angular.module('app')
    .component('singleMovie', {
      controller: singleMovieController,
      templateUrl:'movies/singleMovie.html'
    });
  function singleMovieController (movieService, $stateParams){
    const vm = this;

		vm.$onInit = function (){
			console.log($stateParams);
			movieService.getMovieById($stateParams.movieId)
        .then((movie) => {
					vm.movieInfo = movie.data;
					console.log(movie);

    });
  }
}
}());
