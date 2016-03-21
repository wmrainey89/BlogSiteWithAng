(function () {
   'use strict';

   //register controller
   angular.module('app').controller('singlePostCtrl', singlePostController);

   //inject controller dependencies
   singlePostController.$inject = ['$http', '$scope'];

   //controller definition
   function singlePostController($http, $scope) {
       var vm = this;
       vm.init = init;
       //function definitions
       function init() {
           //get model initialize local variables
       }
       
   }
})();