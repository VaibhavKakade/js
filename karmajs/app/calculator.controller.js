angular.module('calculatorApp', []).controller('calculatorController', function CalculatorController($scope) {
  $scope.sum = function () {
    $scope.total = $scope.num1 + $scope.num2;
  };
});