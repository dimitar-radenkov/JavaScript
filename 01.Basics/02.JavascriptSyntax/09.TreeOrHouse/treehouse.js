"use strict";

var treeHouse1 = { a: 3, b: 2 };
treeHouseCompare(treeHouse1);

var treeHouse2 = { a: 3, b: 3 };
treeHouseCompare(treeHouse2);

var treeHouse3 = { a: 4, b: 5 };
treeHouseCompare(treeHouse3);

function treeHouseCompare(value) {
    var houseArea = calculteHouse(value.a);
    var treeArea = calculateTree(value.b);

    if (houseArea > treeArea) {
        console.log("house/" + houseArea.toFixed(2));
    }
    else {
        console.log("tree/" + treeArea.toFixed(2));
    }
}

function calculateTree(height) {
    var r = height * (2 / height);
    var circleArea = Math.PI * (r * r);

    var rectangleSide = height * (1 / height);
    var rectangleArea = height * rectangleSide;

    var treeArea = circleArea + rectangleArea;

    return treeArea;
}

function calculteHouse(width) {
    var h = width * (2 / width);

    var roofArea = (width * h) / 2;
    var squareArea = width * width;

    var houseArea = roofArea + squareArea;

    return houseArea;
}