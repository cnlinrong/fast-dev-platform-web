var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope, $http) {
	$scope.username = '哒哒';
	$scope.password = '123456';
	
	$scope.reset = function() {
		$scope.username = '哒哒';
		$scope.password = '123456';
	}
	
	$scope.login = function() {
		$scope.username = '哒哒';
		$scope.password = '123456';
	}
});