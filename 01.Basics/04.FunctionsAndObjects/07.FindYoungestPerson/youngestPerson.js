"use strict";

var persons = [
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 }]

console.log(findYoungestPerson(persons));

function findYoungestPerson(persons) {
    var youngestPerson = persons[0];

    for (var i in persons) {
        var person = persons[i];

        if (youngestPerson.age > person.age) {
            youngestPerson = person;
        }
    }

    return "Youngest person is " + 
                youngestPerson.firstname + " " + youngestPerson.lastname;
}