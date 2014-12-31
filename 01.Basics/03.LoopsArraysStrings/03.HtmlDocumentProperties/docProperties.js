"use strict";

displayProperties();

function displayProperties() {

    var array = new Array();
    for (var i in document) {
        array.push(document[i]);
    }

    array.sort();

    console.log(array);
}