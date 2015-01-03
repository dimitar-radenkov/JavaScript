String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var json = [
    '{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"}',
'{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"}',
'{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}'];

$(document).ready(function () {
    //append table
    var table = "<table class='tableCars'></table>";
    $("body").append(table);

    //append row
    for (var i in json) {
        //parse json
        var jsonObj = JSON.parse(json[i]);

        //get keys
        var tableRow = "<tr>";
        for (var key in jsonObj) {
            tableRow += "<td>"
            tableRow += jsonObj[key];
            tableRow += "</td>";
        }
        tableRow += "</tr>";

        $('table').append(tableRow);
    }

    //set column names
    var upperRow = "<tr class='tableHeader'>"
    for (var key in jsonObj) {
        upperRow += "<th>";
        upperRow += key.capitalize() ;
        upperRow += "</th>";
    };
    upperRow += "</tr>";
    $('table').prepend(upperRow);
});
