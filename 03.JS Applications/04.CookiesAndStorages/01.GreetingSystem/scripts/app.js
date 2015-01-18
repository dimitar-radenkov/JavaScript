$(function () {
    
    function configureTotalVisits() {
        var totalVisits = localStorage.getItem('totalVisits');
        if (totalVisits) {
            totalVisits++;
        }
        else {
            totalVisits = 1;
        }
        localStorage.setItem('totalVisits', totalVisits);

        //show
        var total = $('<p/>').text('total ' + totalVisits);
        $('#wrapper').append(total);
    }

    function configureSessionVisits() {
        var sessionVisits = sessionStorage.getItem('sessionVisits');
        if (sessionVisits) {
            sessionVisits++;
        }
        else {
            sessionVisits = 1;
        }
        sessionStorage.setItem('sessionVisits', sessionVisits);

        //show
        //show
        var sess = $('<p/>').text('session ' + sessionVisits);
        $('#wrapper').append(sess);
    }

    function configureUser(){
        var username = localStorage.getItem('user');
        if (username) {
            $('#wrapper')
                .append('<h2>Hello, ' + username + " ! </h2>");
        }
        else {
            //create input text
            var message = $('<p/>').text('Please enter your name');

            var input = $('<input/>')
                .attr
                ({
                    type: 'text',
                    name: 'username'
                });

            var button = $('<button />',
                {
                    text: 'Add',
                    click: function addUser() {
                        var username = $("[name='username']").val();
                        localStorage.setItem('user', username);
                        location.reload();
                    }
                });

            //append to wrapper
            $('#wrapper')
                .append(message)
                .append(input)
                .append(button);
        }
    }

    configureUser();
    configureSessionVisits();
    configureTotalVisits();
});