"use strict";

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));

function biggerThanNeighbors(index, arr) {
    //check boundries
    if (arr.length - 1 < index ||
        index < 0) {
        return "invalid index";
    }

    if (index == 0 ||
        arr.length - 1 == index) {

        return "only one neighbor";
    }

    
    if (arr[index] > arr[index - 1] &&
        arr[index] > arr[index + 1]) {
        return "bigger";
    }
    else {
        return "not bigger";
    }
}