(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishesString = '';
  $scope.result = '';
  $scope.state = 'white';

  $scope.checkTooMuch = function () {
    if ($scope.dishesString.length === 0 || $scope.dishesString === '""' ||
        $scope.dishesString === "''") {
      $scope.result = "Please enter data first";

      $scope.state = 'NOK';
      return;
    }

    var nbrDishes = $scope.dishesString.split(",").length;
    nbrDishes <= 3 ? $scope.result = "Enjoy!" : $scope.result = "Too Much";
    $scope.state = 'OK';
  };

}

})();
