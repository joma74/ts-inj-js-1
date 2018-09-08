/// <reference types="node" />

export = global;

import clazz1b = require("../clazz1b") 

declare global {
	namespace NodeJS {
		interface Global {
			clazz1bGlobalVar: clazz1b // does not work, just any
		}
	}
}