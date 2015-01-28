var app = angular.module('tigerApp', []);

app.controller('tigerController', function ($scope) {

    var obj =
    {
        'Name': 'Pesho',
        'Born': 'Asia',
        'BirthDate': 2006,
        'Live': 'Sofia Zoo',
    };

    $scope.tiger = obj;
});