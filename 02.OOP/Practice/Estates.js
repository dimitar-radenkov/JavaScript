function processEstatesAgencyCommands(commands) {
    'use strict';

    var Estate = (function() {
        var Estate = function (name, area, location, isFurnitured) {        
            this._name = name;
            this._area = area;
            this._location = location;
            this._isFurnitured = isFurnitured;
        }
        
        Estate.prototype.validate = function () {
            if (!this._name) {
                throw new Error("name must be non-empty string")
            }
            
            if (!this._location) {
                throw new Error("location must be non-empty string")
            }
            
            if (this._area < 1 ||
                this._area > 10000) {
                throw new Error("area must be between 1 and 10000");
            }
            
            if (typeof this._isFurnitured === "Boolean") {
                throw new Error("must be true or false");
            }
        };

        Estate.prototype.getName = function () {
            return this._name;
        };

        Estate.prototype.getArea = function () {
            return this._area;
        };

        Estate.prototype.getLocation = function () {
            return this._location;
        };

        Estate.prototype.IsFurnitured = function () {
            return this._isFurnitured;
        };       
        
        Estate.prototype.toString = function () {
            var isFurnitured = this._isFurnitured ? "Yes" : "No";

            return "Name = " + this._name +
                ", Area = " + this._area + 
                ", Location = " + this._location + 
                ", Furnitured = " + isFurnitured;
        };

        return Estate;
    }());


    var BuildingEstate = (function () {
        
        var BuildingEstate = function (name, area, location, isFurnitured, rooms, hasElevator) {          
            Estate.call(this, name, area, location, isFurnitured);     
            this._rooms = rooms;
            this._hasElevator = hasElevator;
        };
        
        BuildingEstate.prototype.validate = function () {
            Estate.prototype.validate.call(this);
               
            if (typeof this._hasElevator === "Boolean") {
                throw new Error("must be true or false");
            }
            
            if (this._rooms < 0 || 
                this._rooms > 100) {
                var minRooms = 0;
                var maxRooms = 100;
                throw new Error("rooms must be between " + minRooms + " and " + maxRooms);
            }
        };

        BuildingEstate.prototype = new Estate();
       
        BuildingEstate.prototype.toString = function () {
            var hasElevator = this._hasElevator ? "Yes" : "No";

            return Estate.prototype.toString.call(this) + 
                ", Rooms = " + this._rooms +
                ", Elevator = " + hasElevator;
        }

        BuildingEstate.prototype.getRooms = function () {
            return this._rooms;
        };

        BuildingEstate.prototype.hasElevator = function () {
            return this._hasElevator;
        };

        return BuildingEstate;
    }());


    var Apartment = (function() {
        var Apartment = function (name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnitured, rooms, hasElevator);
            BuildingEstate.prototype.validate.call(this);          
        };
        
        Apartment.prototype = new BuildingEstate();

        return Apartment;
    }());


    var Office = (function() {
        var Office = function (name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.call(this, name, area, location, isFurnitured, rooms, hasElevator);
            BuildingEstate.prototype.validate.call(this);           
        };
        
        Office.prototype = new BuildingEstate();

        return Office;
    }());

     
    var House = (function () {
        var House = function (name, area, location, isFurnitured, floors) {
            Estate.call(this, name, area, location, isFurnitured);
            Estate.prototype.validate.call(this);
            
            var minFloors = 1;
            var maxFloors = 10;
            if (floors < minFloors ||
                floors > maxFloors) {
                throw new Error("floors must be between " + minFloors + " and " + maxFloors);
            }

            this._floors = floors;
        };
        
        House.prototype = new Estate();
            
        House.prototype.toString = function () {
            return Estate.prototype.toString.call(this) + 
                ", Floors = " + this._floors;
        };

        House.prototype.getFloors = function () {
            return this._floors;  
        };
        
        return House;
    }());


    var Garage = (function () {       
        var Garage = function (name, area, location, isFurnitured, width, height) {
            Estate.call(this, name, area, location, isFurnitured);
            Estate.prototype.validate.call(this);
            
            var minDim = 1;
            var maxDim = 500;
            if (this._width < minDim ||
                this._width > maxDim) {
                throw new Error("widht must be between " + minDim + " and " + maxDim);
            }
            
            var minDim = 1;
            var maxDim = 500;
            if (height < minDim ||
                height > maxDim) {
                throw new Error("widht must be between " + minDim + " and " + maxDim);
            }

            this._width = width;
            this._height = height;
        };       
        
        Garage.prototype = new Estate();      
        
        Garage.prototype.toString = function () {
            return Estate.prototype.toString.call(this) +
                ", Width = " + this._width +
                ", Height = " + this._height;  
        };
        
        Garage.prototype.getWidth = function () {
            return this._width;
        };
        
        Garage.prototype.getHeight = function () {
            return this._height;  
        };
        
        return Garage;
    }());


    var Offer = (function () {
        var Offer = function (estate, price) {           
            this._estate = estate;
            this._price = price;
        };
        
        Offer.prototype.validate = function () {
            if (this._price < 0 || 
                isNaN(this._price) === true) {
                throw new Error("price must be positive");
            }
        };
        
        Offer.prototype.toString = function () {
            return "Estate = " + this._estate.getName() +
                ", Location = " + this._estate.getLocation() + 
                ", Price = " + this._price;  
        };        

        Offer.prototype.getEstate = function () {
            return this._estate;
        };

        Offer.prototype.getPrice = function () {
            return this._price;
        };

        return Offer;
    }());
    

    var RentOffer = (function() {
        var RentOffer = function (estate, price) {
            Offer.call(this, estate, price);
            Offer.prototype.validate.call(this);
        };
        
        RentOffer.prototype = new Offer();
        
        RentOffer.prototype.toString = function () {
            return "Rent: " + 
                Offer.prototype.toString.call(this);
        };

        return RentOffer;
    }());


    var SaleOffer = (function() {
        var SaleOffer = function (estate, price) {
            Offer.call(this, estate, price);
            Offer.prototype.validate.call(this);
        };
        
        SaleOffer.prototype = new Offer();
        
        SaleOffer.prototype.toString = function () {
            return "Sale: " + 
                Offer.prototype.toString.call(this);
        };
        
        return SaleOffer;
    }());


    var EstatesEngine = (function() {
        var _estates;
        var _uniqueEstateNames;
        var _offers;

        function initialize() {
            _estates = [];
            _uniqueEstateNames = {};
            _offers = [];
        }

        function executeCommand(command) {
            var cmdParts = command.split(' ');
            var cmdName = cmdParts[0];
            var cmdArgs = cmdParts.splice(1);
            switch (cmdName) {
            case 'create':
                return executeCreateCommand(cmdArgs);
            case 'status':
                return executeStatusCommand();
            case 'find-sales-by-location':
                    return executeFindSalesByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-location':
                    return executeFindRentsByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-price':
                return executeFindRentsByPriceCommand(cmdArgs[0], cmdArgs[1]);
            default:
                throw new Error('Unknown command: ' + cmdName);
            }
        }

        function executeCreateCommand(cmdArgs) {
            var objType = cmdArgs[0];
            switch (objType) {
            case 'Apartment':
                var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(apartment);
                break;
            case 'Office':
                var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(office);
                break;
            case 'House':
                var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                addEstate(house);
                break;
            case 'Garage':
                var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                addEstate(garage);
                break;
            case 'RentOffer':
                var estate = findEstateByName(cmdArgs[1]);
                var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                addOffer(rentOffer);
                break;
            case 'SaleOffer':
                estate = findEstateByName(cmdArgs[1]);
                var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                addOffer(saleOffer);
                break;
            default:
                throw new Error('Unknown object to create: ' + objType);
            }
            return objType + ' created.';
        }

        function parseBoolean(value) {
            switch (value) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                throw new Error("Invalid boolean value: " + value);
            }
        }

        function findEstateByName(estateName) {
            for (var i = 0; i < _estates.length; i++) {
                if (_estates[i].getName() == estateName) {
                    return _estates[i];
                }
            }
            return undefined;
        }

        function addEstate(estate) {
            if (_uniqueEstateNames[estate.getName()]) {
                throw new Error('Duplicated estate name: ' + estate.getName());
            }
            _uniqueEstateNames[estate.getName()] = true;
            _estates.push(estate);
        }

        function addOffer(offer) {
            _offers.push(offer);
        }

        function executeStatusCommand() {
            var result = '', i;
            if (_estates.length > 0) {
                result += 'Estates:\n';
                for (i = 0; i < _estates.length; i++) {
                    result += "  " + _estates[i].toString() + '\n';
                }
            } else {
                result += 'No estates\n';
            }

            if (_offers.length > 0) {
                result += 'Offers:\n';
                for (i = 0; i < _offers.length; i++) {
                    result += "  " + _offers[i].toString() + '\n';
                }
            } else {
                result += 'No offers\n';
            }

            return result.trim();
        }

        function executeFindSalesByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function(offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof SaleOffer;
            });
            selectedOffers.sort(function(a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }
        
        function executeFindRentsByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            
            var selectedOffers = _offers.filter(function (offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof RentOffer;
            });

            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        };
        
        function executeFindRentsByPriceCommand(minPrice, maxPrice) { 
            if (minPrice < 0 || 
                isNaN(minPrice) === true) {
                throw new Error("price must be positive");
            }

            if (maxPrice < 0 || 
                isNaN(maxPrice) === true) {
                throw new Error("price must be positive");
            }

            var selectedOffers = _offers.filter(function (offer) {
                return offer.getPrice() >= minPrice &&
                    offer.getPrice() <= maxPrice &&
                    offer instanceof RentOffer;
            });

            selectedOffers.sort(function (a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });

            return formatQueryResults(selectedOffers);
        };

        function formatQueryResults(offers) {
            var result = '';
            if (offers.length == 0) {
                result += 'No Results\n';
            } else {
                result += 'Query Results:\n';
                for (var i = 0; i < offers.length; i++) {
                    var offer = offers[i];
                    result += '  [Estate: ' + offer.getEstate().getName() +
                        ', Location: ' + offer.getEstate().getLocation() +
                        ', Price: ' + offer.getPrice() + ']\n';
                }
            }
            return result.trim();
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
    }());


    // Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function(cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                console.log(err);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();

}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function() {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function(line) {
            arr.push(line);
        }).on('close', function() {
            console.log(processEstatesAgencyCommands(arr));
        });
    }
})();
