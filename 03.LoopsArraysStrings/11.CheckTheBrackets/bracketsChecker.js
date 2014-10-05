"use strict";

var arr1 = ['(', '(', 'a', '+', 'b', ')', '/', '5', '–', 'd', ')'];
var arr2 = [')', '(', 'a', '+', 'b' ,')', ')'];
var arr3 = ['(', 'b', '*', '(', 'c', '+', 'd', '*', '2',
            '/', '(', '2', '+', '(', '12', '–', 'c', '/', '(',
            'a', '+', '3', ')', ')', ')', ')'];

console.log(checkBrackets(arr1));
console.log(checkBrackets(arr2));
console.log(checkBrackets(arr3));

function checkBrackets(charArray) {
    var positiveAnswer = "correct";
    var negativeAnswer = "inccorect";

    var open = '(';
    var close = ')';

    var counter = 0;

    for (var i in charArray) {
        var char = charArray[i];

        if (char == open) {
            counter++;
        }
        else if (char == close) {
            counter--;
        }
    }

    if (counter == 0) {
        return positiveAnswer;
    }
    else {
        return negativeAnswer;
    }
}