"use strict";

var arr1 = [3, 2, 3, 4, 2, 2, 4];
console.log(findMaxSequence(arr1));

var arr2 = [3, 5, 4, 6, 1, 2, 3, 6, 10, 32];
console.log(findMaxSequence(arr2));

var arr3 = [3, 2, 1];
console.log(findMaxSequence(arr3));

function findMaxSequence(value) {
    
    var maxSeq = [];
    var currentSeq = [];

    for (var i = 0; i < value.length ; i++) {
        currentSeq.push(value[i]);        

        if (value[i] < value[i + 1]) {
            continue;
        }
        
        if (currentSeq.length > 1) {
            if (currentSeq.length >= maxSeq.length) {
                maxSeq = currentSeq; 
            }  
        }

        currentSeq = new Array();
    }

    if (maxSeq.length == 0) {
        return "no";
    }
    else {
        return maxSeq.join(", ");
    }
}