"use strict";

var text = "But you were living in another world tryin' to get your message through";

console.log(replaceSpaces(text));

function replaceSpaces(value) {
    var result = value.replace(/ /g, "");
    return result;
}