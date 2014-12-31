"use strict";

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));

function bitChecker(value){
    return bitTest(value, 3);
}

function bitTest(num, bit) {
    return ((num >> bit) % 2 != 0)
}