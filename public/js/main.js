var app = angular.module('app', []);

app.controller('FirstController', function($scope, MyFactory){
    $scope.MyFactory = MyFactory;
    $scope.hello = 'Hi there!';
});

app.controller('SecondController', function($scope, MyFactory){
    $scope.MyFactory = MyFactory;
    $scope.hello = 'Hi there!';
});

app.factory('MyFactory', function(){
    return {
        hello: 'kbkb'
    }
});