define(function () {
    var Section = (function () {
        var _sectionList;

        Container = function () {
            _sectionList = new Array();
        };

        Container.prototype.addSection = function (section) {
            _sectionList.push(section);
        };

        Container.prototype.addToDOM = function (parent) {

        };

        return Container;
    }());

    return Container;
});

