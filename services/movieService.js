(function() {
  'use strict';
  angular.module('app')
    .service('movieService', function ($http){
      const apiUrl = 'https://serene-gorge-20513.herokuapp.com/movies';
      return {
        getFreeMovies: function(){
          return $http.get(apiUrl);
        },
        getMovieById: function(movieId){
          return $http.get(`${apiUrl}/${movieId}`);
        },
				searchMovies: function(titleSearch){
					return $http.get(`${apiUrl}/search/${titleSearch}`)

				}
      };
    });
}());
