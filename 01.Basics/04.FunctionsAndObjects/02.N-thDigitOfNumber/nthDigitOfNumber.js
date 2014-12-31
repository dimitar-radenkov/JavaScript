"use strict";

console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));

function findNthDigit(arr){
    var position = arr[0];
    var digit = arr[1];

    var digitAsStringReversed = 
        digit.toString().split("").reverse().join("").replace(".", "");

    if (digitAsStringReversed.length > position - 1) {
        return digitAsStringReversed[position - 1];
    }
    else {
        return "The number doesn’ t have " + position + " digits";
    }  
}