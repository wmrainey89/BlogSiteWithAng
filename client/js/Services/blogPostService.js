(function () {
   'use strict';

   // register service as a factory
   angular.module('app').factory('blogPostService', blogPostService);

   //inject dependencies
   blogPostService.$inject = ['$resource'];

   //service definition
   function blogPostService($resource) {
       return {
           getAll: getAll,
           get: get,
           update: put,
           create: post
       };

       function get(id) {
           //return $resource('/meassges')
       }

       function getAll() {
           var posts = $resource('/api/posts');
           return posts.get(function(data){
              return data; 
           });
       }
       
       function put(data){
           
       }
       
       function post(data){
           
       }
   }
})();