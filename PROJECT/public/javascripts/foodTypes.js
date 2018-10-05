var app = angular.module("food", []);
app.controller("FoodTypes", function ($scope, $resource) {
    $scope.FoodTypeId = 1;
    $scope.submit = function () {
        console.log($scope);
    }

    var r = $resource("/foods/types");
    r.get(function (o) {
        var types = [];
        for (var key in o.types) 
        {
            types.push(o.types[key]);
        }
        $scope.types = types;
    });
});
