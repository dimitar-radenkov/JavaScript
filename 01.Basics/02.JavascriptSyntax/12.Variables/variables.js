"use strict";

var types = {
    name: 'Pesho',
    age: 22,
    isMale: true,
    favoriteFoods: ['fries', 'banana', 'cake']
};

variablesTypes(types);

function variablesTypes(value) {
    console.log("My name: " + value.name + " //type is " + typeof (value.name));
    console.log("My age: " + value.age + " //type is " + typeof (value.age));
    console.log("I am male: " + value.isMale + " //type is " + typeof (value.isMale));
    console.log("My favorite foods are: " + value.favoriteFoods.toString() + " //type is " + typeof (value.favoriteFoods));
}