(function() {
  'use strict';
  angular.module('app')
    .component('tvSearch', {
      controller: tvController,
      templateUrl: 'tv/tvSearch.html',
      bindings: {
        selectedSubscriptions: "="
      }


    })
    function tvController (tvService){
      const vm = this;

    vm.selectedSubscriptions = [];

      vm.$onInit = function (){
        tvService.getFreeTv()
          .then((response) => {
            vm.results = response.data.results
          })
      };

      vm.searchTv = function(){
          console.log(vm.selectedSubscriptions);
        if(!vm.search.title.length){
            alert('please enter show title')
          } else {

            tvService.searchShows(vm.search.title)
              .then((response) => {
                vm.results = response.data.results})
          }
      };

    };
}());
