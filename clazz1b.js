var mimeLib = require("mime")

/**
 * @class
 * @param {import ("./clazz1a")} clazz1aInstance
 */
function clazz1b(clazz1aInstance){

	this.member1bString=aglobalstringFromTsInJs1 // Usage of global
	this.member1bGlobalClazz1a=aglobalClazz1aFromTsInJs1 // Usage of global
	this.member1bClazz1a=clazz1aInstance
} 

/**
 * Return file extension associated with a mime type
 * e.g. text/html returns html
 * 
 * @param {string} mime
 */
clazz1b.prototype.getExtensionFor = function(mime){
	return this.member1bClazz1a.getExtensionFor(mime)
}

/**
 * 
 * @param {Error} err 
 */
clazz1b.prototype.getErrorAsString = function(err){
	return global.getErrorAsString(err); // Does come, as expected, from types/global.d.ts
}

module.exports=clazz1b