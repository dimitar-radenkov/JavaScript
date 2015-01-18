$(function () {
    var seconds = sessionStorage.getItem('timer');
    if (!seconds) {
        seconds = 10;
    }
    function secondPassed() {
        var minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
        $('#countdownTimer').text(minutes + ":" + remainingSeconds);
        if (seconds == 0) {
            showAnswers();
            clearInterval(countdownTimer);
            $('#countdownTimer').text('Exam is over..');
            sessionStorage.removeItem('timer');
        } else {
            seconds--;
            sessionStorage.setItem('timer', seconds);
        }
    };

    var countdownTimer = setInterval(secondPassed, 1000);

    function initItem(item) {
        var selectedMonth = sessionStorage.getItem(item);
        if (selectedMonth) {
            var radio = $("input[name='"+ item +"'][value='" + selectedMonth + "']")
                .prop('checked', true);

        }
    }

    initItem('month');
    initItem('color');
});

function onAnswerClicked(item) {
    var selectedValue = $("input[name='"+item+"']:checked").val();
    sessionStorage.setItem(item, selectedValue);
};

function showAnswers() {
    var q1 = null;
    var q2 = null;

    var color = sessionStorage.getItem('color');
    if (color) {
        q1 = $('<p/>').text('1 - true');
    }
    else {
        q1 = $('<p/>').text('1 - no answer');
    }

    var month = sessionStorage.getItem('month');
    if (month) {
        q2 = $('<p/>').text('2 - true');
    }
    else {
        q2 = $('<p/>').text('2 - no answer');
    }

    var results = $('#results');
    results.append(q1);
    results.append(q2);
}

function onButtonSubmitClicked() {
    showAnswers();
}