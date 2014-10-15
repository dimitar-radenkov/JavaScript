"use strict";

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits("hello"));
console.log(findLargestBySumOfDigits([5, 3.3]));

function findLargestBySumOfDigits(nums) {
    var maxSum = Number.MIN_VALUE;

    for (var numsIndex in nums) {
        if (isNaN(nums[numsIndex])) {
            return "undefined";
        }

        var numberAsString = nums[numsIndex].toString();

        var sum = 0;
        for (var i in numberAsString) {
            if (numberAsString[i] === "-" ||
                numberAsString[i] === "+") {
                continue;
            }

            if (isNaN(numberAsString[i])) {
                return "undefined";
            }

            sum += parseInt(numberAsString[i]);          
        }

        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}