﻿var app = angular.module('01.App', []);

app.controller('studentController', function ($scope) {
    var obj =
        {
            "name": "Pesho",
            "photo": "http://www.nakov.com/wp-content/uploads/2014/05/SoftUni-Logo.png",
            "grade": 5,
            "school": "High School of Mathematics",
            "teacher": "Gichka Pesheva",
        };

    $scope.student = obj;
});


