"use strict";

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
findMostFreqNum(arr);

var arr2 = [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1];
findMostFreqNum(arr2);

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
findMostFreqNum(arr3);

var s = 5;

function findMostFreqNum(value) {
    if (value.length == 0) {
        console.log("empty");
    }

    var obj = {};
    for (var i in value) {
        var key = value[i];
        if (obj.hasOwnProperty(key)) {
            obj[key]++;
        }
        else {
            obj[key] = Number(1);
        }
    }

    var max = Number.MIN_VALUE;
    var number = 0;

    for (var i in obj) {
        var item = obj[i];
        if (item > max) {
            max = item;
            number = i;
        }
    }

    console.log(number + " (" + max + " times)");
}