export {}

import clazz1a = require("../clazz1a")
type clazz1a = typeof clazz1a

declare global {
	var aglobalstringFromTsInJs1: string = "aglobalstringFromTsInJs1"
	var aglobalClazz1aFromTsInJs1: clazz1a
}