var slides;
var currentIndex = 0;
var timer = setTimeout(onButtonNextClicked, 5000);

var startTimer = function () {
    timer = setTimeout(onButtonNextClicked, 5000);
}

var stopTimer = function () {
    clearTimeout(timer);
};

$(document).ready(function () {
    slides = $('.slide');
    
});

var onButtonPrevClicked = function () {
    stopTimer();

    $('button').prop('disabled', true);
    $(slides[currentIndex]).fadeOut(0);

    if (currentIndex === 0) {
        currentIndex = slides.length - 1
    }
    else {
        currentIndex--;
    }

    $(slides[currentIndex]).fadeIn(500, function () {
        //callback function
        $('button').prop('disabled', false);
    });

    startTimer();
}

var onButtonNextClicked = function () {
    stopTimer();

    $('button').prop('disabled', true);
    $(slides[currentIndex]).fadeOut(0);

    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    }
    else {
        currentIndex++;
    }

    $(slides[currentIndex]).fadeIn(500, function (){
        //callback function
        $('button').prop('disabled', false);
    });
    
    startTimer();
}