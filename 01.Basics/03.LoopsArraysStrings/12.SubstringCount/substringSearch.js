"use strict";

var keywordText1 = ["in",
    "We are living in a yellow submarine. We don't have anything else." +
    "Inside the submarine is very tight. So we are drinking all the day." +
    " We will move out of it in 5 days."];

var keywordText2 = ["your",
    "No one heard a single word you said. " +
    "They should have seen it in your eyes. What was going around your head."];

var keywordText3 = ["but",
    "But you were living in another world tryin' to get your message through."];

console.log(countSubstringOccur(keywordText1));
console.log(countSubstringOccur(keywordText2));
console.log(countSubstringOccur(keywordText3));

function countSubstringOccur(value) {
    var keyWord = value[0].toLowerCase();
    var text = value[1].toLowerCase();

    var counter = 0;

    var pos = text.indexOf(keyWord, 0);     
    while (pos != -1) {
        counter++;

        pos = text.indexOf(keyWord, pos + 1);
    }
    
    return counter;
}