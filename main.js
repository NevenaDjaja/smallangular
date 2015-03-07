var myApp = angular.module('testApp',[]);

myApp.controller('TestController', ['$scope', function($scope) {
  $scope.message = 'Hola!';
}]);
