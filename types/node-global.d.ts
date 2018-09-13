/// <reference types="node" />

export {}

import clazz1bType  = require("../clazz1b")
type clazz1bType = typeof clazz1bType

declare function getErrorAsString(err: Error): string
type getErrorAsString = typeof getErrorAsString


declare global {
	namespace NodeJS {
		interface Global {
			clazz1aGlobalVar: clazz1bType // ISSUE just any; ISSUE not visible from outside
			getErrorAsString: getErrorAsString // ISSUE not visible from outside
		}
	}
}