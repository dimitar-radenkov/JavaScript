"use strict"

var decNumber = prompt("Enter number", 255);
var hexDecimalString = d2h(decNumber).toUpperCase();
alert(hexDecimalString);

function d2h(dec) {

    var hex = (+dec).toString(16);
    return 
}