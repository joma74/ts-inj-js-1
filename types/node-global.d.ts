/// <reference types="node" />

import clazz1b = require("../clazz1b") 

declare global {
	namespace NodeJS {
		interface Global {
			clazz1bGlobalVar: clazz1b // ISSUE just any; ISSUE not visible from outside
			getErrorAsString(err: Error): string // ISSUE not visible from outside
		}
	}
}

export {global}