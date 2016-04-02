angular.module("app")

.controller("singlePostCtrl", singlePostController);

singlePostController.$inject = ["$scope", "getFactory", "$routeParams", "$location"];

function singlePostController($scope, getFactory, $routeParams, $location){
    var blogId = $routeParams.id;
    $scope.title = "Now Your Reading Son!!!!";
    getFactory.get({id: blogId}).$promise.then(function(blogs){
        console.log(blogs);
        $scope.blog = blogs;
    })
    
    $scope.lonelyOne = function(){
        $location.path("/");
    }
    
}