"use strict";

var supply1 = {};
supply1.age = 38;
supply1.maxAge = 118;
supply1.name = 'chocolate';
supply1.amountPerDay = 0.5;

calcSupply(supply1);

var supply2 = {};
supply2.age = 20;
supply2.maxAge = 87;
supply2.name = 'fruits';
supply2.amountPerDay = 2;

calcSupply(supply2);

var supply3 = {};
supply3.age = 16;
supply3.maxAge = 102;
supply3.name = 'nuts';
supply3.amountPerDay = 1.1;

calcSupply(supply3);

function calcSupply(value){
    var DAYS_IN_YEAR = 365;

    var restYears = value.maxAge - value.age;
    var days = restYears * DAYS_IN_YEAR;
    var kgFood = days * value.amountPerDay;

    var message = kgFood + "kg " + "of " + value.name;
    message += " would be enough until I am " + value.maxAge + " years old.";

    console.log(message);
}