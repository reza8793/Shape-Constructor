

var Shape = function(a1){
	this.type = "Shape";
	this.charlie = a1;

	// this.get_type = function(){
	// 	return this.constructor;

}

Shape.prototype.get_type = function () {
	//console.log(this.type);
	//console.log(this.constructor.name);
    return this.constructor.name;

}

//console.log(Shape.prototype.get_type());

module.exports = Shape;