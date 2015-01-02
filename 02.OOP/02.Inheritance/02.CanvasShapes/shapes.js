var Shape = (function () {
    function Shape(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;

        if (!validateInput.call(this)) {
            throw new Error("X and Y must be largger than 0");
        }
    }

    function validateInput() {
        if (this._x < 0) {
            return false;
        }

        if (this._y < 0) {
            return false;
        }

        return true;
    }

    Shape.prototype.setColor = function (color) {
        this._color = color;
    }

    Shape.prototype.getX = function () {
        return this._x;
    }

    Shape.prototype.getY = function () {
        return this._y;
    }


    Shape.prototype.toString = function () {
        return "X: " + this._x +
            " Y: " + this._y +
            " Color: " + this._color;
    };

    Shape.prototype.draw = function () {
        var canvas = document.getElementById("drawboard");
        this._context = canvas.getContext("2d");
        this._context.fillStyle = this._color;
        this._context.strokeStyle = this._color;
    }

    return Shape;
}());

var Point = (function () {
    function Point(x, y, color) {
        Shape.call(this, x, y, color);
    }

    Point.prototype = Shape();

    Point.prototype.toString = function () {
        return "Point - " + Shape.prototype.toString.call(this);
    };

    Point.prototype.draw = function () {
        Shape.prototype.draw.call(this);
        this._context.fillRect(this._x, this._y, 2, 2);
    }

    return Point;
}());

var Rectangle = (function () {
    function Rectangle(x, y, color, width, height) {
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;
    }

    Rectangle.prototype = Shape();

    Rectangle.prototype.toString = function () {
        return "Rectangle - " + Shape.prototype.toString.call(this) +
            " Width: " + this._width +
            " Height: " + this._height;
    };

    Rectangle.prototype.draw = function () {
        Shape.prototype.draw.call(this);
        this._context.fillRect(this._x, this._y, this._width, this._height);
    }

    return Rectangle;
}());

var Triangle = (function () {
    function Triangle(x, y, color, point2, point3) {
        Shape.call(this, x, y, color);
        this._point2 = point2;
        this._point3 = point3;
    }

    Triangle.prototype = Shape();

    Triangle.prototype.toString = function () {
        return "Triangle - " + Shape.prototype.toString.call(this) +
           " " + this._point2.toString() +
           " " + this._point3.toString();
    };

    Triangle.prototype.draw = function () {
        Shape.prototype.draw.call(this);

        this._context.beginPath();
        this._context.moveTo(this._x, this._y);
        this._context.lineTo(this._point2.getX(), this._point2.getY());
        this._context.lineTo(this._point3.getX(), this._point3.getY());
        this._context.fill();
    }

    return Triangle;
}());

var Circle = (function () {
    function Circle(x, y, color, radius) {
        Shape.call(this, x, y, color);
        this._radius = radius;
    }

    Circle.prototype = new Shape();

    Circle.prototype.toString = function () {
        return "Circle - " + Shape.prototype.toString.call(this) +
            " Radius: " + this._radius;
    }

    Circle.prototype.draw = function () {
        Shape.prototype.draw.call(this);

        this._context.beginPath();
        this._context.arc(this._x, this._y, this._radius, 0, 2 * Math.PI);
        this._context.fill();
    }

    return Circle;
}());

var Segment = (function () {
    function Segment(x, y, color, point) {
        Shape.call(this, x, y, color);
        this._point = point;
    }

    Segment.prototype = new Shape();

    Segment.prototype.toString = function () {
        return "Segment - " + Shape.prototype.toString.call(this) +
            " " + this._point.toString();
    }

    Segment.prototype.draw = function () {
        Shape.prototype.draw.call(this);

        this._context.beginPath();
        this._context.moveTo(this._x, this._y);
        this._context.lineTo(this._point.getX(), this._point.getY());
        this._context.stroke();
    }

    return Segment;
}());

Array.prototype.swapItems = function (a, b) {
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
}

//list for shapes
var shapesContainer = new Array();

function onButtonAddClick() {
    var selectShapeEl = document.getElementById("selectShape");
    var str = selectShapeEl.options[selectShapeEl.selectedIndex].text;

    var x = document.getElementById("inputX").value;
    var y = document.getElementById("inputY").value;
    var color = document.getElementById("inputColor").value;

    var shape = null;

    switch (str) {
        case "Rectangle": {
            var width = document.getElementById("textWidht").value;
            var height = document.getElementById("textHeight").value;

            shape = new Rectangle(x, y, color, width, height);
        }
            break;
        case "Triangle": {
            var x2 = document.getElementById("textX2").value;
            var y2 = document.getElementById("textY2").value;

            var x3 = document.getElementById("textX3").value;
            var y3 = document.getElementById("textY3").value;

            shape = new Triangle(x, y, color,
                new Point(x2, y2, color),
                new Point(x3, y3, color));
        }
            break;
        case "Circle": {
            var radius = document.getElementById("textRadius").value;
            shape = new Circle(x, y, color, radius);
        }
            break;
        case "Point": {
            shape = new Point(x, y, color);
        }
            break;
        case "Segment": {
            var x2 = document.getElementById("textSegmentX2").value;
            var y2 = document.getElementById("textSegmentY2").value;
            shape = new Segment(x, y, color,
                new Point(x2, y2, color));
        }
            break;
        default:
    }
    shapesContainer.push(shape);

    drawAllShapes();
}

function onButtonRemoveClick() {
    var listbox = document.getElementById("listboxInfo");

    //remove from array
    shapesContainer.splice(listbox.selectedIndex, 1);

    drawAllShapes();
}

function onButtonUpClick() {
    var listbox = document.getElementById("listboxInfo");

    if (listbox.selectedIndex > 0) {
        var index = listbox.selectedIndex;

        shapesContainer.swapItems(index, index - 1);
    }

    drawAllShapes();
}

function onButtonDownClick() {
    var listbox = document.getElementById("listboxInfo");

    if (listbox.selectedIndex < shapesContainer.length) {
        var index = listbox.selectedIndex;
        shapesContainer.swapItems(index, index + 1);
    }

    drawAllShapes();
}

function OnShapeChanged() {
    var selectShapeEl = document.getElementById("selectShape");
    var str = selectShapeEl.options[selectShapeEl.selectedIndex].text;

    var triangleExtraData = document.getElementById("divTriangleExtraData");
    var rectangleExtraData = document.getElementById("divRectangeExtraData");
    var circleExtraData = document.getElementById("divCircleExtraData");
    var segmentExtraData = document.getElementById("divSegmentExtraData");

    switch (str) {
        case "Rectangle": {
            triangleExtraData.style.display = "none";
            circleExtraData.style.display = "none";
            segmentExtraData.style.display = "none";
            rectangleExtraData.style.display = "block";
        }
            break;
        case "Triangle": {
            circleExtraData.style.display = "none";
            rectangleExtraData.style.display = "none";
            segmentExtraData.style.display = "none";
            triangleExtraData.style.display = "block";
        }
            break;
        case "Circle": {
            triangleExtraData.style.display = "none";
            rectangleExtraData.style.display = "none";
            segmentExtraData.style.display = "none";
            circleExtraData.style.display = "block";
        }
            break;
        case "Point": {
            triangleExtraData.style.display = "none";
            rectangleExtraData.style.display = "none";
            circleExtraData.style.display = "none";
            segmentExtraData.style.display = "none";
        }
            break;
        case "Segment": {
            triangleExtraData.style.display = "none";
            rectangleExtraData.style.display = "none";
            circleExtraData.style.display = "none";
            segmentExtraData.style.display = "block";
        }
            break;
        default:
    }
}

function drawAllShapes() {

    //clear canvas
    var canvas = document.getElementById("drawboard");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    //clear listbox
    var listboxInfo = document.getElementById("listboxInfo");
    while (listboxInfo.options.length > 0) {
        listboxInfo.remove(0);
    }
    
    //readraw
    for (var s in shapesContainer) {
        shapesContainer[s].draw();

        var option = document.createElement("option");
        option.text = shapesContainer[s].toString();
        listboxInfo.add(option);
    }
}