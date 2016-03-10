var myApp = angular.module('myApp', ['ui.router']);
myApp.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
	// Use x-www-form-urlencoded Content-Type
//	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	/**
	 * The workhorse; converts an object to x-www-form-urlencoded serialization.
	 * 
	 * @param {Object} obj
	 * 
	 * @return {String}
	 */
	var param = function(obj) {
		var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

		for (name in obj) {
			value = obj[name];

			if (value instanceof Array) {
				for (i = 0; i < value.length; ++i) {
					subValue = value[i];
					fullSubName = name + '[' + i + ']';
					innerObj = {};
					innerObj[fullSubName] = subValue;
					query += param(innerObj) + '&';
				}
			} else if (value instanceof Object) {
				for (subName in value) {
					subValue = value[subName];
					fullSubName = name + '[' + subName + ']';
					innerObj = {};
					innerObj[fullSubName] = subValue;
					query += param(innerObj) + '&';
				}
			} else if (value !== undefined && value !== null) {
				query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
			}
		}

		return query.length ? query.substr(0, query.length - 1) : query;
	};

	// Override $http service's default transformRequest
//	$httpProvider.defaults.transformRequest = [ function(data) {
//		return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
//	} ];
	
	var transformRequest = function(data) {
//		return $.param(data);
		return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	}
	
	$urlRouterProvider.otherwise('/');

	$stateProvider.state("login", {
		url: "/",
		templateUrl: 'pages/login.html',
		controller: ['$scope', '$http', '$state', '$location', function($scope, $http, $state, $location) {
			$scope.success = true;
			$scope.errorMsg = '';
			
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
				}, {
				    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
				    transformRequest: transformRequest
				}).success(function(data, status, headers, config) {
					if (data.status == 'ok') {
						// $state.go('home');
						$location.path('/home');
					} else {
						$scope.success = false;
						$scope.errorMsg = data.msg;
					}
					console.log(data);
					console.log(status);
					console.log(headers);
					console.log(config);
				}).error(function(data, status, headers, config) {
					$scope.success = false;
					$scope.errorMsg = data.msg;
					
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
			$scope.success = true;
			$scope.errorMsg = '';
			
			$scope.user = {sex: 1};
			
			$scope.reset = function() {
				$scope.user = {sex: 1};
			}

			$scope.register = function() {
				console.log(JSON.stringify($scope.user));
				$http({
					method: "POST",
					url: 'register.do',
					data: $scope.user
				}).success(function(data, status) {
					if (data.status == 'ok') {
						$state.go('home');
//						$location.path('/home');
					} else {
						$scope.success = false;
						$scope.errorMsg = data.msg;
					}
					console.log(data);
					console.log(status);
				}).error(function(data, status) {
					$scope.success = false;
					$scope.errorMsg = data.msg;
					
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