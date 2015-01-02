(function () {
    'use strict';
    require(['scripts/factory'], function (Factory) {
        
        var objectCreator = new Factory();
        var item = objectCreator.createItem();
        var section = objectCreator.createSection();
        var container = objectCreator.createContainer();

        console.log(item);
        console.log(section);
        console.log(container);
    });
}());