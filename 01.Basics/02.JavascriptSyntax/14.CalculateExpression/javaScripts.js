"use strict";

function getResult() {
    var element = document.getElementById("expression");
 
    var validChars = "1234567890+-/*.,";
    var value = element.value.toString();

    var newValue = "";
    for (var i = 0; i < value.length; i++) {
        var index = validChars.indexOf(value[i]);

        if (index != -1) {
            newValue += value[i];
        }
    }

    var result = eval(newValue);
    element.value = newValue;
    document.getElementById("result").innerText = result;
}