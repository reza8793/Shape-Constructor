
var Shape = require('./Shape.js');

var Triangle = function(s1,s2,s3){
	this.side1 = s1;
	this.side2 = s2;
	this.side3 = s3;

}


Triangle.prototype = new Shape();

Triangle.prototype.constructor = Triangle;

module.exports = Triangle;