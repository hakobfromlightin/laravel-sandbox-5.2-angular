var app = angular.module('app', []);

app.controller('FirstController', function($scope, FirstFactory){
    $scope.FirstFactory = FirstFactory;
    $scope.hello = 'Hi there from First Controller!';
});

app.controller('SecondController', function($scope, FirstFactory){
    $scope.FirstFactory = FirstFactory;
    $scope.hello = 'Hi there from Second Controller!';
});

app.factory('FirstFactory', function(){
    return {
        hello: 'Hello World from First Factory'
    }
});

app.controller('ThirdController', function($scope, SecondFactory){
    $scope.hello = 'Hi there!';
    $scope.SecondFactory = SecondFactory;

    $scope.getBookmark = function(){
        return 'My Bookmark';
    };

    $scope.setHello = function(text){
        $scope.hello = text;
    }
});

app.factory('SecondFactory', function(){
    return {
        hello: function(){
           return 'Hello World from Second Factory';
        }
    }
});