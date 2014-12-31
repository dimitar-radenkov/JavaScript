"use strict";

var text = 'There is a man, his name was Bob.';
var palindromes = findPalindromes(text);

console.log(palindromes.join(', '));

function findPalindromes(value) {
    var value = value.replace(",", "").replace(".", "");
    var words = value.match(/\S+\s*/g);

    var palindromes = [];

    for (var i in words) {
        var word = words[i];
        if (isPalindrome(word)) {
            palindromes.push(word);
        }
    }

    return palindromes;
}

function isPalindrome(value) {

    value = value.toLowerCase().trim();
    var reversed = value.split("").reverse().join("");

    if (value === reversed) {
        return true;
    }
    else {
        return false;
    }
}