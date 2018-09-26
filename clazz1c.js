/**
 * @class
 */
function clazz1c(){
	this.constructorOnly = 0
	this.constructorUnknown = undefined
}

clazz1c.prototype.method = function() {
	this.constructorOnly = 3
	this.constructorUnknown = "plunkbat"
}

module.exports=clazz1c