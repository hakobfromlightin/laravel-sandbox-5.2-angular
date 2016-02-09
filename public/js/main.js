var app = angular.module('app', []);

/**  1, 2  **/
app.controller('FirstController', function($scope, FirstFactory){
    $scope.FirstFactory = FirstFactory;
    $scope.hello = 'Hi there from First Controller!';
});

app.controller('SecondController', function($scope, FirstFactory){
    $scope.FirstFactory = FirstFactory;
    $scope.hello = 'Hi there from Second Controller!';
});

/**  3  **/

app.factory('FirstFactory', function(){
    return {
        hello: 'Hello World from First Factory'
    }
});

/**  4  **/

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

/** 5 **/

app.controller('BookController', function($scope){
    $scope.book = 'Empty';
    $scope.showBook = function(){
        $scope.book = 'This is Some Book';
    };
});

app.controller('AngularBookController', function($scope){
    $scope.book = 'Empty';
    $scope.showBook = function(){
        $scope.book = 'This is Angular Book';
    };
});

app.controller('EmberBookController', function($scope){});


/** 6 **/
