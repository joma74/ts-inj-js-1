class C {
	/**
	 * 
	 * @param {import ("./clazz1a")} clazz1aInstance 
	 */
	constructor(clazz1aInstance) {
		this.member1bString=aglobalstringFromTsInJs1 // Usage of global
		this.member1bClazz1a=clazz1aInstance
	}
}

/**
 * Return file extension associated with a mime type
 * e.g. text/html returns html
 * 
 * @param {string} mime
 */
C.prototype.getExtensionFor = function(mime){
	return this.member1bClazz1a.getExtensionFor(mime)
}

/**
 * 
 * @param {Error} err 
 */
C.prototype.getErrorAsString = function(err){
	return global.getErrorAsString(err); // Does come, as expected, from types/global.d.ts
}

module.exports=C