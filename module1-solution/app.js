(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishesString = '';
  $scope.result = '';

  $scope.checkTooMuch = function () {
    console.log($scope.dishesString.length);
    if ($scope.dishesString.length === 0) {
      $scope.result = "Please enter data first";
      return;
    }

    var nbrDishes = $scope.dishesString.split(",").length;
    nbrDishes <= 3 ? $scope.result = "Enjoy!" : $scope.result = "Too Much";
  };

}

})();
