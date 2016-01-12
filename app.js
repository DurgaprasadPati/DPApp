
var dpApp = angular.module('dpApp', ['ngRoute','ui.bootstrap']);
//route config
dpApp.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
            when('/home', {templateUrl: 'home.html',   controller: 'HomeCtrl' }).
            when('/login', {templateUrl: 'login.html',   controller: 'LoginCtrl'}).
            otherwise({redirectTo: '/login'});
}]);

//controllers
dpApp.controller("LoginCtrl",function($scope,$location){
	$scope.submitForm - function(){
		console.log("going to Home");
		$location.url("/home");
	};
});

dpApp.controller("HomeCtrl",function($scope){
	
	$scope.toggleImage = function(){
		console.log("toggle Image ");
		
	};
	$scope.loadFrom = function(){
		console.log("Load from");
		
	};
	
});


