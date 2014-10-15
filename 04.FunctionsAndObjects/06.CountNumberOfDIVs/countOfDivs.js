"use strict";

var html = 
 ['<!DOCTYPE html>',
    '<html>',
    '<head lang="en">',
    '<meta charset="UTF-8">',
    '<title>index</title>',
    '<script src="/yourScript.js" defer></script>',
    '</head>',
    '<body>',
    '<div id="outerDiv">',
    '<div>',
    'class="first">',
    '<div><div>hello</div></div>',
    '</div>',
    '<div>hi<div></div></div>',
    '<div>I am a div</div>',
    '</div>',
    '</body>',
    '</html>'
   ].join('\n');

console.log(countDivs(html));

function countDivs(html){
    var elementName = "<div>";

    var index = 0;
    var counter = 0;
    while (index != -1) {
        index = html.indexOf(elementName, index + 1);
        counter++;
    }

    return counter;
}