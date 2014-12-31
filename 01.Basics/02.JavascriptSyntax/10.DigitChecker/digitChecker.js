"use strict";

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));

function checkDigit(value) {
    var DIGIT_POSITION = 3;

    var strValue = value.toString();
    var indexToCheck = strValue.length - DIGIT_POSITION;

    if (strValue[indexToCheck] == '3') {
        return true;
    }
    else {
        return false;
    }
}