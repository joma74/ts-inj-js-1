/**
 * @typedef {import("./clazz1a")} Clazz1a
 */

 var clazz1a = require("./clazz1a")
 var clazz1b = require("./clazz1b")

 var clazz1aInstance = new clazz1a();
 var clazz1bInstance = new clazz1b(clazz1aInstance);

 /**
  * This is implicitly defined? Does not come from types/global.d.ts
  */
global.clazz1bGlobalVar= clazz1bInstance

if(global.getErrorAsString) {
	global.getErrorAsString(new Error("abc"));
}

module.exports={clazz1bInstance}