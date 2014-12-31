"use strict";

var str1 = "in the middle of the night";
var str2 = "Welcome to SoftUni. Welcome to Java. Welcome everyone.";
var str3 = "Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.";

findMostFreqWord(str1);
findMostFreqWord(str2);
findMostFreqWord(str3);

function findMostFreqWord(value) {
    
    value = value.replace(/[^a-zA-Z ]/g, "").toLowerCase();
    var words = value.match(/\S+\s*/g);

    var obj = {};
    for (var i in words) {
        var key = words[i];
        if (obj.hasOwnProperty(key)) {
            obj[key]++;
        }
        else {
            obj[key] = Number(1);
        }
    }

    var max = Number.MIN_VALUE;
    for (var i in obj) {
        var item = obj[i];
        if (item > max) {
            max = item;
        }
    }

    for (var word in obj) {
        var item = obj[word];
        if (item == max) {
            console.log(word + " -> " + max + " times");
        }
    }
}