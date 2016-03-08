var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
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
		templateUrl: 'home.html'
	}).state('login', {
		url: '/login',
		templateUrl: 'login.html',
		controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
			$scope.username = '';
			$scope.password = '';
			
			$scope.reset = function() {
				$scope.username = '';
				$scope.password = '';
			}
			
			$scope.login = function() {
				$http.post('login.do', {
					username: $scope.username,
					password: $scope.password
				}).success(function(data, status, headers, config) {
					if (data.status == 'ok') {
						$state.go('home');
					}
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
		}]
	});
}]);
myApp.controller('myCtrl', function($scope, $http, $location, $state) {
	
	$scope.username = '';
	$scope.password = '';
	
	$scope.reset = function() {
		$scope.username = '';
		$scope.password = '';
	}
	
	$scope.login = function() {
		$http.post('login.do', {
			username: $scope.username,
			password: $scope.password
		}).success(function(data, status, headers, config) {
//			$location.path('index.html');
//			window.location = 'index.html';
			if (data.status == 'ok') {
				$state.go('home');
			}
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