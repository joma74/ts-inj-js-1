/**
 * @typedef {import("./clazz1a")} Clazz1a
 */

 var clazz1a = require("./clazz1a")
 var clazz1b = require("./clazz1b")
 var clazz1c = require("./clazz1c")
 var C = require("./C")

 var clazz1aInstance = new clazz1a();
 var clazz1bInstance = new clazz1b(clazz1aInstance);
 var clazz1cInstance = new clazz1c();
 var CInstance = new C(clazz1aInstance);

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

aglobalstringFromTsInJs1="123"

module.exports=clazz1bInstance