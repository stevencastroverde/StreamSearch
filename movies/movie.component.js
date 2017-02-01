(function() {
  'use strict';
  angular.module('app')
    .component('movieSearch', {
      controller: movieSearchController,
      templateUrl:'movies/moviesearch.html'
    });
  function movieSearchController (movieService, sourceService){
    const vm = this;
    vm.$onInit = function (){
      movieService.getFreeMovies()
        .then((movies) => {
					console.log(movies);
					vm.results = movies.data.results});
    };
		vm.searchMovies = function(){
				console.log(vm.selectedSubscriptions);
			if(!vm.search.title.length){
					alert('please enter show title')
				} else {

					movieService.searchMovies(vm.search.title)
						.then((response) => {
							vm.results = response.data.results})
				}
		};
  }
}());
