var mimeLib = require("mime")

/**
 * @class
 * @param {import ("./clazz1a")} clazz1aInstance
 */
function clazz1b(clazz1aInstance){

	this.member1bString="member1b"
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

module.exports=clazz1b