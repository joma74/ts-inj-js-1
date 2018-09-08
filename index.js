/**
 * @typedef {import("./clazz1a")} Clazz1a
 */

 var clazz1a = require("./clazz1a")
 var clazz1b = require("./clazz1b")

 var clazz1aInstance = new clazz1a();
 var clazz1bInstance = new clazz1b(clazz1aInstance);

global.clazz1bGlobalVar= clazz1bInstance