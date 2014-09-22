"use strict";

showCurrentTime();

function showCurrentTime() {  
    var date = new Date();

    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    if (currentMinutes.toString().length == 1) {
        currentMinutes = "0" + currentMinutes;
    }

    var currentTime = currentHours + " : " + currentMinutes;

    console.log(currentTime);   
};
