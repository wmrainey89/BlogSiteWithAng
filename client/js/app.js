//Use to instantiate app, connect factory & controllers and configure app.
(function(){
    angular.module('app', ['ngRoute', 'ngResource'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/listPosts.html',
            controller: 'listPostCtrl',
            controllerAs: 'vm'
        })
        
        .when('/createPost', {
            templateUrl: 'views/createPost.html',
            controller: 'createPostCtrl',
            controllerAs: 'vm'
        })
        
        .when('/singlePost', {
            templateUrl: 'views/singlePost.html',
            controller: 'singlePostCtrl',
            controllerAs: 'vm'
        })
        
        .otherwise({
            redirectTo: '/'
        })
    
    }]);

})();