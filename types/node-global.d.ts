/// <reference types="node" />

export {}

import C = require("../C")
import Clazz1bType = require("../clazz1b")
type Clazz1bType = typeof Clazz1bType
import Clazz1cType = require("../clazz1c")
type Clazz1cType = typeof Clazz1cType

const clazz1bGlobalVar: Clazz1bType

declare global {
	namespace NodeJS {
		interface Global {
			clazz1bGlobalVar: Clazz1bType // ISSUE just any; ISSUE not visible from outside
			getErrorAsString(err: Error): string // ISSUE not visible from outside
		}
	}
}
