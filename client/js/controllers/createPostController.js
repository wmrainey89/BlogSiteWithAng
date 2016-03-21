//Logic for page actions here. 

(function () {
   'use strict';

   //register controller
   angular.module('app').controller('createPostCtrl', createPostController);

   //inject controller dependencies
   createPostController.$inject = ['$http', '$scope'];

   //controller definition
   function createPostController($http, $scope) {
       var vm = this;
       vm.init = init;
      // vm.blogs = createBlogs();
       //declare variables
      // vm.blogs = [];
       
       //function definitions
       function init() {
           //get model initialize local variables
        // createBlogs();
       }
    //    function createBlogs(){
    //        $http.get('http://localhost:3000/api/posts').then(function(response){
    //            vm.blogs = response.data;
    //            console.log("its here");
    //        }, function(err){
    //             console.log(error.statusText);
    //           })
    //    }
   }
})();