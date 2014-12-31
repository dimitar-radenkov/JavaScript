"use strict";

var arr1 = new Array(1,2,1,15,20,5,7,31);
var res1 = findMinAndMax(arr1);
printResult(res1);

var arr2 = new Array(2, 2, 2, 2);
var res2 = findMinAndMax(arr2);
printResult(res2);

var arr3 = new Array(500, 1, -23, 0, -300, 28, 35, 12);
var res3 = findMinAndMax(arr3);
printResult(res3);

function findMinAndMax(value) {
    
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    
    for (var i = 0; i < value.length; i++) {
        
        if (min > value[i]) {
            min = value[i];
        }

        if (max < value[i]) {
            max = value[i];
        }
    }

    var obj = {};
    obj.min = min;
    obj.max = max;
    
    return obj;
}

function printResult(value){
    console.log("Min -> " + value.min);
    console.log("Max -> " + value.max);
}