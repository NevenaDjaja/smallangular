// empty brackets for no dependencies
var myApp = angular.module('testApp',[]);

// create a service
myApp.factory("Data", function() {
	return {text: "I am data from a service"};
});

myApp.controller('TestController', ['$scope', function($scope) {
  $scope.message = 'Hola!';
}]);

myApp.controller('FirstController', ['$scope', 'Data', function($scope, Data) {
	$scope.data = Data;
}]);

myApp.controller('SecondController', function() {
});
