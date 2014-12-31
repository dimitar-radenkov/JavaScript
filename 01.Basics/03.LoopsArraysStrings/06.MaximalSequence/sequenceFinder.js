"use strict";

var inputArr1 = new Array(2, 1, 1, 2, 3, 3, 2, 2, 2, 1);
var result1 = findMaxSequence(inputArr1);
console.log(result1.join(", "));

var inputArr2 = new Array("happy");
var result2 = findMaxSequence(inputArr2);
console.log(result2.join(", "));

var inputArr3 = new Array(2, 'qwe', 'qwe', 3, 3, '3');
var result3 = findMaxSequence(inputArr3);
console.log(result3.join(", "));

function findMaxSequence(value) {
    
    var maxSequence = [];
    var currentSequence = new Array();

    for (var i = 0; i < value.length ; i++) {
        currentSequence.push(value[i]);
        
        //make point on comparison operator '==='
        if (value[i] === value[i + 1]) {
            continue;
        }
        
        if (currentSequence.length >= maxSequence.length) {
            maxSequence = currentSequence;

            currentSequence = new Array();
        }
    }
    
    return maxSequence;
}