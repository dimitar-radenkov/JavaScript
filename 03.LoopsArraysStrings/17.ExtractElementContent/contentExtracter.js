"use strict";

var htmlContent = "<p>Hello</p><a href='http://w3c.org'>W3C</a>";
extractContent(htmlContent);

function extractContent(value) {
    
    var currentPos = 0;
    var totalContent = "";

    while (currentPos != -1) {
        var openPos = value.indexOf(">", currentPos);
        var closePos = value.indexOf("</", openPos + 1);
        var content = value.substring(openPos + 1, closePos);
        totalContent += context;

        //find new open tag
        currentPos = value.indexOf(">", closePos + 1) + 1;
    }

    console.log(totalContent);
}