
var Shape = require('./Shape.js');

var Pentagon = function(s1,s2,s3,s4,s5){
	this.side1 = s1;
	this.side2 = s2;
	this.side3 = s3;
	this.side4 = s4;
	this.side5 = s5;
}

Pentagon.prototype = new Shape();


Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;