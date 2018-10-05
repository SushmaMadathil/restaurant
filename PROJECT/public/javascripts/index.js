// <reference path="angular/angular.js" />
var app = angular.module("restaurant", ["ui.router", "ngResource"])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
       // $urlRouterProvider.otherwise("/Home");
        $stateProvider.state("Home", {
            url: "/Home",
            views: {
                main: {
                    templateUrl: "Home.html"
                }
            }
        })
            .state(
            "Food", {
                url: "/Food",
               
                views: {
                    main: {
                        templateUrl: "food.html",
                        controller:"FoodTypes"
                    }
                }
            })
            .state(
            "Drinks", {
                url: "/Drinks",

                views: {
                    main: {
                        templateUrl: "drinks.html",
                        controller: "DrinkTypes"
                    }
                }
            })
            .state(
            "Appetizers", {
                url: "/Appetizers",

                views: {
                    main: {
                        templateUrl: "appetizers.html",
                        controller: "AppetizerTypes"
                    }
                }
            })
            .state(
            "Entrees", {
                url: "/Entrees",

                views: {
                    main: {
                        templateUrl: "entrees.html",
                        controller: "EntreeTypes"
                    }
                }
            })
            .state(
            "Desserts", {
                url: "/Desserts",

                views: {
                    main: {
                        templateUrl: "desserts.html",
                        controller: "DessertTypes"
                    }
                }
            })
            .state(
            "User", {
                url: "/User",
                views: {
                    main: {
                        templateUrl: "users.html"
                    }
                }
            }
        )
        .state(
        "Login", {
            url: "/",
            views: {
                main: {
                    templateUrl: "login.html",
                   controller:"checkUser"
                }
            }
        }
        )
        .state(
         "SignUp", {
            url: "/SignUp",
            views: {
                main: {
                    templateUrl: "signUp.html",
                     controller: "addUser"
                    
                }
            }
        }
        );
        $locationProvider.html5Mode(true);

    });

app.controller("navigation", function ($scope) {
    $scope.cartOn = false;
    console.log('test');
    $scope.checkout = function () {
        var data = []; //$scope.items;
        for (var i = 0; i < $scope.items.length; i++) {
            var item = {
                id: item.id,
                price: price,
                quantity: quantity,

            };
        }
        $http.post(
            "/cart", function (response) {
            }
        );
    };
    $scope.items = [];
    $scope.addToCart = addToCart;
});
app.controller("FoodTypes", ['$scope','$resource', function ($scope, $resource) {
    $scope.FoodTypeId = 1;
    $scope.submit = function () {
        console.log($scope);
    }

    var r = $resource("/foods/types");
    r.get(function (o) {
        var types = [];
        for (var key in o.types) {
            types.push(o.types[key]);
        }
        $scope.types = types;
    });
}]);
app.controller("DrinkTypes", ['$scope', '$resource', function ($scope, $resource) {
   

    var r = $resource("/foods/drinks");
    r.get(function (o) {
        var types = [];
        for (var key in o.types) {
            types.push(o.types[key]);
        }
        $scope.types = types;
        console.log(types)
    });
    $scope.addToCart = addToCart;
}]);
app.controller("AppetizerTypes", ['$scope', '$resource', function ($scope, $resource) {


    var r = $resource("/foods/appetizer");
    r.get(function (o) {
        var types = [];
        for (var key in o.types) {
            types.push(o.types[key]);
        }
        $scope.types = types;
        console.log(types)
    });
    $scope.addToCart = addToCart;

}]);
app.controller("EntreeTypes", ['$scope', '$resource', function ($scope, $resource) {


    var r = $resource("/foods/entree");
    r.get(function (o) {
        var types = [];
        for (var key in o.types) {
            types.push(o.types[key]);
        }
        $scope.types = types;
        console.log(types)

    });
    $scope.addToCart = addToCart;

}]);
app.controller("DessertTypes", ['$scope', '$resource', function ($scope, $resource) {


    var r = $resource("/foods/dessert");
    r.get(function (o) {
        var types = [];
        for (var key in o.types) {
            types.push(o.types[key]);
        }
        $scope.types = types;
        console.log(types)

    });
    $scope.addToCart = addToCart;

}]);
app.controller("checkUser", function ($scope, $resource) {
    $scope.save = function () {
        var request = $resource("/users/check");
        request.save(
            {
                name: $scope.name,
                email: $scope.email,
                password: $scope.password
            }, function (response) {
                alert(JSON.stringify(response));
                if (response.message == "LOG IN FAILED") {
                    
                    $scope.message = "Login Failed!!";
                }
                else {

                    $scope.message = "Logged in!";
                }
            });
    }
});
app.controller("addUser", function ($scope, $resource) {
    $scope.save = function () {
        var request = $resource("/users/add");
        request.save(
            {
                name: $scope.name,
                email: $scope.email,
                password: $scope.password
            },
            function (response) {
                if (response.error) {
                    $scope.message = response.error;
                }
                else {
                    $scope.message = "User has been successfully added.";
                }
            });
    }
});


function addToCart(item, price, quantity)
{
    var $scope = angular.element(document.getElementById("cart")).scope();
    console.log(item);
    var scopeItem = {
        name: item.Name,
        price: item.Price,
        //description: item.description,
        //id: item.id,
        quantity: quantity,
       // notes: notes
    };
    $scope.items.push(scopeItem);
//    $scope.$apply
}

//app.controller("cart", ['$scope', '$resource', function ($scope, $resource) {


  //  var r = $resource("/users/cart");
  //  r.get(function (o) {
   //     var types = [];
   //     for (var key in o.types) {
  //          types.push(o.types[key]);
  //      }
  //      $scope.types = types;
  //      console.log(types)
 //   });
//}]);
