(function() {
  'use strict';
  angular.module('app')
    .component('searchSources', {
      controller: sourcesController,
      templateUrl:'sources/sources.html',
      bindings: {
        selectedSubscriptions: "="
      }
  })

  function sourcesController (sourceService) {
    const vm = this
    vm.$onInit = function (){
      sourceService.getWebSources()
        .then(response =>{
          console.log(response);
          vm.sources = response.results
        })
    }



  }



}());
