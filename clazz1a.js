var mimeLib = require("mime")

/**
 * @class
 */
function clazz1a(){

	this.member1a="member1a"
}

/**
 * Return file extension associated with a mime type
 * e.g. text/html returns html
 * 
 * @param {string} mime
 */
clazz1a.prototype.getExtensionFor = function(mime){
	return mimeLib.getExtension(mime)
}

module.exports=clazz1a 