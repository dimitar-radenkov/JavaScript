"use strict";

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);

function divisionBy3(value) {
    var positiveAnswer = 'the number is divided by 3 without remainder';
    var negativeAnswer = 'the number is not divided by 3 without remainder';
    
    var valueAsString = value.toString();
    var sum = 0;
    for (var i = 0; i < valueAsString.length ; ++i) {
        sum += Number(valueAsString[i]);
    }

    if (sum % 3 == 0) {
        console.log(positiveAnswer);
    }
    else {
        console.log(negativeAnswer);
    }
}