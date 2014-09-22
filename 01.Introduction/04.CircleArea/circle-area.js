"use strict"

document.writeln("r = 7; area = " + calcCircleArea(7));
document.writeln("r = 1.5; area = " + calcCircleArea(1.5));
document.writeln("r = 20; area = " + calcCircleArea(20));

function calcCircleArea(radius) {
    var result = Math.PI * (radius * radius);

    return result;
};