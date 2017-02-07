(function() {
  'use strict';
  angular.module('app')
    .component('movieSearch', {
      controller: movieSearchController,
      templateUrl:'movies/moviesearch.html',
      bindings: {
        selectedSubscriptions: '='
      }
    });
  function movieSearchController (movieService, sourceService){
    const vm = this;
    vm.selectedSubscriptions = {
      sources: []
    };
    vm.$onInit = function (){
      movieService.getFreeMovies()
        .then((movies) => {
					console.log(movies);
					vm.results = movies.data.results});
    };
		vm.searchMovies = function(){
				console.log(vm.selectedSubscriptions.sources);
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
