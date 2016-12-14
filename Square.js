var Shape = require('./Shape.js');

var Square = function(s){
	this.side1 = s;
	this.side2 = s;
	this.side3 = s;
	this.side4 = s;
}

Square.prototype = new Shape();


Square.prototype.constructor = Square;

module.exports = Square;