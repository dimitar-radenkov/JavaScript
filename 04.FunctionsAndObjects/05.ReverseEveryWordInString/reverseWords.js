"use strict";

console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good, isn’t it?"));

function reverseWordsInString(str) {
    var words = str.split(" ");

    var reversedStr = "";
    for (var i in words) {
        var reversed = words[i].split("").reverse().join("");
        reversedStr = reversedStr.concat(reversed).concat(" ");
    }

    return reversedStr;
}