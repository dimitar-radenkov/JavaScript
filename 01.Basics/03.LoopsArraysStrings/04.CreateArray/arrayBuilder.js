"use strict";

createArray();

function createArray() {

    var arraySize = 20;
    var arr = new Array(arraySize);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
    }

    console.log(arr.join(", "));
}