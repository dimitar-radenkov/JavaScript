define(function () {
    var Section = (function () {
        var _title;
        var _itemsList;

        var Section = function (title) {
            _title = title;
            _itemsList = new Array();
        };

        Section.prototype.addItem = function (item) {
            _itemsList.push(item);
        };

        Section.prototype.getItems = function () {
            return _itemsList;
        };

        Section.prototype.getTitle = function () {
            return _title;
        };

        Section.prototype.addToDOM = function (parent) {

        };

        return Section;
    }());

    return Section;
});
