(function() {
  'use strict';

angular.module('app')
. component('home', {
    controller: homeController,
    templateUrl: 'home/home.html'




  });

  function homeController() {
    const vm = this;


      vm.$onInit = function (){
      console.log('its working');
    };



  }
}());
