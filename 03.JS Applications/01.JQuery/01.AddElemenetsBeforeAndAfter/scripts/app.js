
var OnButtonAddFirstClicked = function () {
    var text = $("#inputText").val();

    if (text.length) {
        $("#root").before("<li>" + text + "</li>");
    }
};

var OnButtonAddLastClicked = function () {
    var text = $("#inputText").val();

    if (text.length) {
        $("#root").after("<li>" + text + "</li>");
    }
};
