"use strict";

var html = [""
,"<ul>"
    ,"<li>"
        ,"<a href=http://softuni.bg>SoftUni</a>"
    ,"</li>"
,"</ul>"].join("");

var result = replaceATag(html);
console.log(result);

function replaceATag(value) {
    value = value.replace("<a", "[URL");
    value = value.replace("</a>", "[/URL]");

    return value;
}