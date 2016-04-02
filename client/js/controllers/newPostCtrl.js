angular.module("app")

.controller("newPostCtrl", newPostController);

newPostController.$inject = ["$scope", "$location", 'getFactory'];

function newPostController($scope, $location, getFactory){
    
    $scope.backToFirst = function(){
        $location.path('/');
    }
    
    $scope.sendOff = function(){
        getFactory.save($scope.blog, function(){
            $location.path('/');    
        })            
    }
        
};