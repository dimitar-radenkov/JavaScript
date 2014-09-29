"use strict";

var arrayToSort1 = [5, 4, 3, 2, 1];
SortArray(arrayToSort1);
console.log(arrayToSort1.join(", "));

var arrayToSort2 = [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3];
SortArray(arrayToSort2);
console.log(arrayToSort2.join(", "));

var arrayToSort3 = [1];
SortArray(arrayToSort3);
console.log(arrayToSort3.join(", "));

var arrayToSort4 = [];
SortArray(arrayToSort4);
console.log(arrayToSort4.join(", "));

function SortArray(value) {
    for (var i = 0; i < value.length; i++) {

        var min = Number.MAX_VALUE;
        var index = 0;
        for (var j = i; j < value.length; j++) {

            if (value[j] < min) {
                min = value[j];
                index = j;
            }
        }
        
        //remove from prev index
        value.splice(index, 1);

        //add at position i
        value.splice(i, 0, min);
    }
}
