
printNumbers(20);
printNumbers(-5);
printNumbers(13);

function printNumbers(n) {
    var arr = new Array();
    for (var i = 1; i <= n; i++) {
        if (i % 4 != 0 &&
            i % 5 != 0) {

            arr.push(i);
        }
    }

    if (arr.length != 0) {
        console.log(arr.join(", "));
    }
    else {
        console.log("no");
    }
}