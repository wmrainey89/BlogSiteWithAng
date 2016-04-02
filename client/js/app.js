//Use to instantiate app, connect factory & controllers and configure app.

angular.module('app', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider){
        
        $routeProvider
        .when('/', {
            templateUrl: 'views/blogposts.html',
            controller: 'blogPostsCtrl',
            
        })
        
        .when('/newpost', {
            templateUrl: 'views/newpost.html',
            controller: 'newPostCtrl',
            
        })
        
        .when('/singlePost/:id', {
            templateUrl: 'views/singlePost.html',
            controller: 'singlePostCtrl',
            
        })
        
        .otherwise({
            redirectTo: '/'
        })
    
    }]);

