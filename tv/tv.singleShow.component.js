(function() {
  'use strict';
  angular.module('app')
    .component('singleShow', {
      controller: singleShowController,
      templateUrl:'tv/singleShow.html'
    });
  function singleShowController (tvService, $stateParams){
    const vm = this;

		vm.$onInit = function (){
			console.log($stateParams);
			tvService.getShowById($stateParams.showId)
        .then((show) => {
					vm.showInfo = show.data;
					console.log(show);

    });
  }
}
}());
