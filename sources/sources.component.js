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
    vm.selectedSubscriptions = [];
    vm.$onInit = function (){
      sourceService.getWebSources()
        .then(response =>{
          vm.sources = response.results
        })


}



  }



}());
