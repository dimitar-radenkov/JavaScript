"use strict";

var arr = ['1','2','3','4','5'];
var modifiedArr = arr.removeItem('2');

Array.prototype.removeItem = function removeItem(value) {
    for (var i in this) {
        var item = this[i];

        if (value === item) {
            this.splice(i, 1);
            return this;
        }
    }
}