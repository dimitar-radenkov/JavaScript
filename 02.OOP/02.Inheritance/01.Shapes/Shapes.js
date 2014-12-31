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

    Point.prototype.getX = function () {
        return this._x;
    }

    Point.prototype.getY = function () {
        return this._y;
    }

    Point.prototype.setColor = function (color) {
        Shape.prototype.setColor.call(this, color);
    }

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

    Rectangle.prototype.setColor = function (color) {
        Shape.prototype.setColor.call(this, color);
    }

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

    Triangle.prototype.setColor = function (color) {
        Shape.prototype.setColor.call(this, color);
    }

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