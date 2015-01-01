var Container = (function () {

    var Item = (function () {
        var _content;
        var _status;

        var Item = function (content, status) {
            _content = content;
            _status = status;
        };

        Item.prototype.getContent = function () {
            return _content;
        }

        Item.prototype.getStatus = function () {
            return _status;
        }

        Item.prototype.addToDOM = function (parent) {
            parent.appendChild()
        }

        return Item;

    }());

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
        }

        Section.prototype.getTitle = function () {
            return _title;
        }

        Section.prototype.addToDOM = function (parent) {

        }

        return Section;
    }());

    var _sectionList;

    Container = function () {
        _sectionList = new Array();
    };

    Container.prototype.addSection = function (section) {
        _sectionList.push(section);
    };

    Container.prototype.addToDOM = function (parent) {

    }

    return Container;
}())