"use strict"

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));

function convertKWtoHP(kwValue) {
    var KILOWATT = 0.745699872 ;
    var hp = kwValue / KILOWATT;

    hp = Math.round(hp * 100) / 100

    return hp;
}