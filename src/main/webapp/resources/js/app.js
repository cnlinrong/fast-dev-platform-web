var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider'], function($httpProvider, $stateProvider, $urlRouterProvider) {
	$httpProvider.defaults.transformRequest = function(data) {
		if (data === undefined) {
			return data;
		}
		return $.param(data);
	}
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state("home", {
		url: "/",
		templateUrl: 'index.html'
	});
});
myApp.controller('myCtrl', function($scope, $http, $location, $state) {
	
	$scope.username = '哒哒';
	$scope.password = '123456';
	
	$scope.reset = function() {
		$scope.username = '哒哒';
		$scope.password = '123456';
	}
	
	$scope.login = function() {
		$http.post('login.do', {
			username: $scope.username,
			password: $scope.password
		}).success(function(data, status, headers, config) {
//			$location.path('index.html');
//			window.location = 'index.html';
			$state.go('home');
			console.log(data);
			console.log(status);
			console.log(headers);
			console.log(config);
		}).error(function(data, status, headers, config) {
			console.log(data);
			console.log(status);
			console.log(headers);
			console.log(config);
		});
	}
	
});