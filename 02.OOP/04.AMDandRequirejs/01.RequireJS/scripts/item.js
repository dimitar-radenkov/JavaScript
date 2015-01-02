define(function () {
    var Item = (function () {
        var _content;
        var _status;

        var Item = function (content, status) {
            _content = content;
            _status = status;
        };

        Item.prototype.getContent = function () {
            return _content;
        };

        Item.prototype.getStatus = function () {
            return _status;
        };

        Item.prototype.addToDOM = function (parent) {
            parent.appendChild()
        };

        return Item;
    }());

    return Item;
});

