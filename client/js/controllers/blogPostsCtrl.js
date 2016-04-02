angular.module("app")

.controller("blogPostsCtrl", blogPostsController);

blogPostsController.$inject = ["$scope", "$location", "getFactory"];

function blogPostsController($scope, $location, getFactory){
    $scope.goToCompose = function() {
        // Use $location.path to go to the newpost page
        console.log("yo");
        $location.path('/newpost');
    }
    
    getFactory.query().$promise.then(function(blogs){
        $scope.blogPosts = blogs;
    })
    
    // $scope.singlePostBlogs = function(){
    //     $location.path('#/singlePost');
    // }
    
};