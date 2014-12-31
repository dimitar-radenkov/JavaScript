"use strict";

var cylinder1 = { radius: 2, height: 4 };
console.log(calcCylinderVol(cylinder1));

var cylinder2 = { radius: 5, height: 8 };
console.log(calcCylinderVol(cylinder2));

var cylinder3 = { radius: 12, height: 3 };
console.log(calcCylinderVol(cylinder3));

function calcCylinderVol(value) {
    var result = Math.PI * Math.pow(value.radius, 2) * value.height;

    return result.toFixed(3);
}