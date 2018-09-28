/**
 * @typedef {import("./clazz1a")} Clazz1a
 */

 var clazz1a = require("./clazz1a")
 var clazz1b = require("./clazz1b")

 var clazz1aInstance = new clazz1a();
 var clazz1bInstance = new clazz1b(clazz1aInstance);

 /**
 * ISSUE getErrorAsString is NOT infered from types/global.d.ts
 */
if(global.getErrorAsString) {
	global.getErrorAsString(new Error("abc"));
}

 /**
  * ISSUE clazz1bGlobalVar is implicitly defined? Is NOT infered from types/global.d.ts
  */
global.clazz1bGlobalVar=clazz1bInstance
// ISSUE Type 'clazz1a' is not assignable to type 'typeof clazz1a'.
// Type 'clazz1a' provides no match for the signature '(): void'.
aglobalClazz1aFromTsInJs1=clazz1aInstance

if(aglobalClazz1aFromTsInJs1){
	// ISSUE [ts] Property 'getExtensionFor' does not exist on type 'typeof clazz1a'. 
	aglobalClazz1aFromTsInJs1.getExtensionFor("text/html") 
}

module.exports=clazz1bInstance