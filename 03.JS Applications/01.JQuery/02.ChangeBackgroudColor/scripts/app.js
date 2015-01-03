var onButtonProcessClicked = function () {
    var text = $("#inputForm").val();

    $('#outputArea').append(text);
}

var onButtonPaintClicked = function () {
    var classSelector = $('#inputClass').val();
    var color = $('#inputColor').val();

    $("." + classSelector).css('background-color', color);
}
