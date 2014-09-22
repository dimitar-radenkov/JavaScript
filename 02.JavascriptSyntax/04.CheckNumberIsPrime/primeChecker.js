"use strict";

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));

function isPrime (value)
{
    if (value < 2) {
        return false;
    }

    var q = parseInt(Math.sqrt(value));

    for (var i = 2; i <= q; i++){
        if (value % i == 0) {
            return false;
        }
    }

    return true;
}