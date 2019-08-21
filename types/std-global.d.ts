export {}

import Clazz1cType = require("../clazz1c")
type Clazz1cType = typeof Clazz1cType // why this extra
import ClazzCType = require("../C")

declare global {
	var clazz1CGlobalVar: Clazz1cType
	var clazzCGlobalVar: ClazzCType
	var aglobalstringFromTsInJs1: string = "aglobalstringFromTsInJs1"
}