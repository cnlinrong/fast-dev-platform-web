var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
	$httpProvider.defaults.transformRequest = function(data) {
		if (data === undefined) {
			return data;
		}
		return $.param(data);
	}
//	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state("login", {
		url: "/",
		templateUrl: 'pages/login.html',
		controller: ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location) {
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
//						$state.go('home');
						$location.path('/home');
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
	}).state('home', {
		url: '/home',
		templateUrl: 'pages/home.html'
	}).state('register', {
		url: '/register',
		templateUrl: 'pages/register.html',
		controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
			$scope.user = {sex: '1'};
			
			$scope.reset = function() {
				$scope.user = {sex: '1'};
			}

			$scope.register = function() {
				console.log(JSON.stringify($scope.user));
				$http({
					method: "POST",
					url: 'register.do',
					headers: {
						'Content-type': 'application/json;charset=UTF-8'
					},
					data: $scope.user
				}).success(function(data, status) {
					if (data.status == 'ok') {
//						$state.go('home');
						$location.path('/home');
					}
					console.log(data);
					console.log(status);
				}).error(function(data, status) {
					console.log(data);
					console.log(status);
				});
		}
		}]
	}).state('forget-password', {
		url: '/forget-password',
		templateUrl: 'pages/forget-password.html',
		controller: ['$scope', '$http', '$state', function($scope, $http, $state) {
			
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
//			window.location = 'index.html';
			if (data.status == 'ok') {
				$location.path('/');
//				$state.go('home');
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