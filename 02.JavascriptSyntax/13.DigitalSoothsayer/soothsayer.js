"use strict";

var arraysWithElements = new Array(
    [3, 5, 2, 7, 9], 
    ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);

var result = soothsayer(arraysWithElements);
printResult(result);

function soothsayer(value) {
    var S_INDEX = 0;
    var E_INDEX = 4; 

    var duration = value[0][getRandomInt(S_INDEX, E_INDEX)];
    var language = value[1][getRandomInt(S_INDEX, E_INDEX)];
    var city = value[2][getRandomInt(S_INDEX, E_INDEX)];
    var car = value[3][getRandomInt(S_INDEX, E_INDEX)];

    var result = new Array(duration, language, city, car);

    return result;
}

function printResult(array) {
    console.log("You will work " + array[0] + " years on " +
        array[1] + ". You will live in " + array[2] + " and drive " +
        array[3] + ".");
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}