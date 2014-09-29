"use strict";

console.log(reverseString("simple"));
console.log(reverseStringSimple("simple"));

console.log(reverseString("softUni"));
console.log(reverseStringSimple("softUni"));

console.log(reverseString("java script"));
console.log(reverseStringSimple("java script"));

var a = 5;

function reverseString(value) {
    var reversed = String();
    for (var i = value.length - 1; i >= 0; i--) {
        var char = value[i];
        reversed += char;
    }

    return reversed;
}

function reverseStringSimple(value) {  
    var reversed = value.split("").reverse().join("");

    return reversed;
}