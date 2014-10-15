"use strict";

console.log(sumTwoHugeNumbers(['155','65']));
console.log(sumTwoHugeNumbers(['123456789', '123456789']));
console.log(sumTwoHugeNumbers(['887987345974539','4582796427862587']));
console.log(sumTwoHugeNumbers(['347135713985789531798031509832579382573195807',
                               '817651358763158761358796358971685973163314321']));


function sumTwoHugeNumbers(value) {
    var number1 = value[0];
    var number2 = value[1];
    
    //make numbers same size
    while (number1.length != number2.length) {
        if (number1.length > number2.length) {
            number2 = "0" + number2;
        }
        else {
            number1 = "0" + number1;
        }
    }
    
    //make additions with all numbers one by one
    //start from right to left
    var result = [];
    var hasReminder = false;

    for (var i = number1.length - 1; i >= 0 ; --i) {
        var digit1 = number1[i];
        var digit2 = number2[i];
        
        var sum = 0;
        if (hasReminder) {
            sum = parseInt(digit1) + parseInt(digit2) + 1;
        }
        else {
            sum = parseInt(digit1) + parseInt(digit2);
        }
        
        var resultIndex = i + 1;
        if (sum >= 10) {        
            //get last digit
            var lastDigit = sum % 10;
            result[resultIndex] = lastDigit;

            hasReminder = true;
        }
        else {
            result[resultIndex] = sum;

            hasReminder = false;
        }
    }
    
    //add last reminder, if there are any
    if (hasReminder) {
        result[0] = 1;
    }

    return result.join("");
}