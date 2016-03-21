(function () {
   'use strict';

   //register controller
   angular.module('app').controller('listPostCtrl', listPostController);

   //inject controller dependencies
   listPostController.$inject = ['$scope', '$http', 'blogPostService'];

   //controller definition
   function listPostController($scope, $http, blogPostService) {
       var vm = this;
       vm.init = init;
       vm.getBlogPosts = getPosts;
       
       vm.blogPosts = [];
       //vm.listPost = listPost;
       //vm.blogs = getBlogs;
       
       //declare variables
       //vm.blogs = [];
       
       //function definitions
       function init() {
           //get model initialize local variables
         getPosts();
       }
       
       function getPosts(){
           vm.blogPosts = blogPostService.getAll();
       }
    //    var posts = listPostF.query(function(){
    //        console.log(posts);
    //    })
    //    function getBlogs(){
    //        $http.get('http://localhost:3000/api/posts').then(function(response){
    //            vm.blogs = response.data;
    //            console.log("its here");
    //        }, function(err){
    //             console.log(error.statusText);
    //           })
    //    }
   }
})();