"use strict";

var input1 = {};
input1.first = new Array('1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q');
input1.second = new Array('1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q');
console.log(compareChars(input1));

var input2 = {};
input2.first = new Array('3', '5', 'g', 'd');
input2.second = new Array('5', '3', 'g', 'd');
console.log(compareChars(input2));

var input3 = {};
input3.first = 
    new Array('q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';');
input3.second = new Array('6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r');
console.log(compareChars(input3));


function compareChars(value) {
    var negative = "Not Equal";
    var positive = "Equal";

    var charArr1 = value.first;
    var charArr2 = value.second;
    
    if (charArr1.length != charArr2.length)
        return negative;

    for (var i = 0; i < charArr1.length; ++i) {
        if (charArr1[i] != charArr2[i]) {
            return negative;
        }
    }

    return positive;
}