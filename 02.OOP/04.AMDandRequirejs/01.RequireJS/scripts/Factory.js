define(['scripts/item', "scripts/section", "scripts/container"],
    function (Item, Section, Container) {
    var Factory = (function () {

        var Factory = function () {

        }

        Factory.prototype.createItem = function () {
            return new Item("my content", "done");
        };

        Factory.prototype.createSection = function () {
            return new Section("Bussines");
        }

        Factory.prototype.createContainer = function () {
            return new Container();
        }

        return Factory;
    }());

    return Factory;
});