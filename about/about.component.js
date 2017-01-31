(function() {
  'use strict';
  angular.module('app')
    .component('about', {
      controller: aboutController,
      templateUrl: 'about/about.html'
    })

    function aboutController (){
      const vm = this;
      vm.$onInit = function (){
        console.log('omg this works');

      }


    };
}());
