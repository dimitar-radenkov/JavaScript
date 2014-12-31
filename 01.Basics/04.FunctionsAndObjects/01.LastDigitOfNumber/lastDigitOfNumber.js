"use strict";

console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));

function lastDigitAsText(number) {
    var numberAsString = number.toString();
    if (numberAsString.length > 0) {
        var lastDigit = numberAsString[numberAsString.length - 1];
        return digitAsText(lastDigit);
    }
}

function digitAsText(digit) {
    digit = parseInt(digit);
    switch (digit) {
        case 0:
            return "Zero";
            break;
        case 1:
            return "One";
            break;
        case 2:
            return "Two";
            break;
        case 3:
            return "Three";
            break;
        case 4:
            return "Four";
            break;
        case 5:
            return "Five";
            break;
        case 6:
            return "Six";
            break;
        case 7:
            return "Seven";
            break;
        case 8:
            return "Eight";
            break;
        case 9:
            return "Nine";
            break;
        default:
            return "unknown";
    }
}