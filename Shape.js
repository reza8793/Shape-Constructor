

var Shape = function(){
	this.type = "Shape";

	// this.get_type = function(){
	// 	return this.constructor;

}

Shape.prototype.get_type = function () {
	//console.log(this.type);
	//console.log(this.constructor.name);
    return this.constructor;

}

//console.log(Shape.prototype.get_type());

module.exports = Shape;