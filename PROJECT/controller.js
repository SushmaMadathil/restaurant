var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider))
{
    $routeProvider
    .when('/',{
                templateUrl:'login.html'
    })
    .when('/dashboard',{
            resolve:{
                    "check":function($location, $rootScope)
                      {
                            if(!$rootScope.loggedIn){
                                $location path('/');
                               }
                            else{
                                templateUrl:'dashboard.html'
                                }
    })
    .otherwise({
                redirectTo:'/'
    });
});

app.controller('loginCtrl',function($scope, $location, $rootScope)
 {
   $scope.submit=function()
    {
        $rootScope.uname= $scope.username;
        $rootScope.pwd= $scope.password;
        if($scope.username == 'admin' && $scope.password=='admin)
        {
            $location.path('\dashboard');
        }
        else
        {
            alert('SIGN IN');
        }
    }
});

