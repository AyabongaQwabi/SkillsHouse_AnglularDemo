var studios = angular.module('StudiosApp',['ngRoute'])
studios.apiError=''
studios.config([ '$routeProvider' , function($routeProvider) {
    $routeProvider.when( '/', {
        templateUrl : 'views/home.html',
        controller: 'home'
    })
    .when( '/register', {
        templateUrl: 'views/register.html',
        controller: 'register'
    })
    .when( '/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'welcome'
    })
    .when( '/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signup'
    })
    .when( '/login', {
        templateUrl: 'views/login.html',
        controller: 'login'
    })
    .when( '/find', {
        templateUrl: 'views/find.html',
        controller: 'find'
    })
     .when( '/error', {
        templateUrl: 'views/Error.html',
        controller: 'error'
    })
    .otherwise({
        redirectTo:'/'
    })
}])
