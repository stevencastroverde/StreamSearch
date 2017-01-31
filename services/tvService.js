(function() {
  'use strict';

  angular.module('app')
    .service('tvService', function ($http) {
      const apiUrl = 'https://serene-gorge-20513.herokuapp.com/tv';
      return {
        getFreeTv: function (){
          return  $http.get(apiUrl);
        },
        getShowById: function (showId){
          return $http.get(`${apiUrl}/${showId}`);
        },
        getEpisodesById: function(showId){
          return $http.get(`${apiUrl}/${showId}/episodes`);
        },
        searchShows: function(searchTerm, sources){
          return $http.get(`${apiUrl}/search/${searchTerm}`);
        },
        getSources: function(){
          return $http.get(`https://serene-gorge-20513.herokuapp.com/sources`);
        }
      };
    });

}());
