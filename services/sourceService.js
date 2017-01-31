(function() {
  'use strict';
    angular.module('app')
      .service('sourceService', function ($http){
        const apiUrl = 'https://serene-gorge-20513.herokuapp.com/sources';
        var sources = null
        return {
          getWebSources: function (){
            if(!sources){
              return $http.get(apiUrl)
                .then(response => {
                  sources = response.data
                  return sources
                })
            } else {
              return Promise.resolve(sources)
            }

          }


        }
      })
}());
