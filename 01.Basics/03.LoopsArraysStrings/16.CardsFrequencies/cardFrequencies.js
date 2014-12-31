"use strict";

var string1 = "8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦";
var string2 = "J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠";
var string3 = "10♣ 10♥";

findCardFrequency(string1);
findCardFrequency(string2);
findCardFrequency(string3);

function findCardFrequency(value) {
    
    var cards = value.split(" ");

    var totalPercent = 100;
    var stepPercent = totalPercent / cards.length;

    var cardsFrequencies = {};

    for (var i in cards) {
        var card = cards[i];
        
        //extract face and suite
        if (card.length > 2) {
            var face = card.substring(0, 2);
            var suit = card[2];
        }
        else {
            var face = card[0]
            var suit = card[1];
        }

        //set frequency
        if (cardsFrequencies.hasOwnProperty(face)) {
            cardsFrequencies[face] += stepPercent;
        }
        else {
            cardsFrequencies[face] = Number(stepPercent);
        }
    }

    printFreq(cardsFrequencies);
}

function printFreq(value) {
    for (var i in value) {
        console.log(i + " -> " + value[i].toFixed(2) + "%");
    }
    console.log();
}
