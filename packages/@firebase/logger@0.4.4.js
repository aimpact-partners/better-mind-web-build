System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/logger","0.4.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@firebase/logger.0.4.4.js
var logger_0_4_4_exports = {};
__export(logger_0_4_4_exports, {
  LogLevel: () => LogLevel,
  Logger: () => Logger,
  setLogLevel: () => setLogLevel,
  setUserLogHandler: () => setUserLogHandler
});
module.exports = __toCommonJS(logger_0_4_4_exports);

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
var instances = [];
var LogLevel;
(function (LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = (/* @__PURE__ */new Date()).toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(name) {
    this.name = name;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};
function setLogLevel(level) {
  instances.forEach(inst => {
    inst.setLogLevel(level);
  });
}
function setUserLogHandler(logCallback, options) {
  for (const instance of instances) {
    let customLogLevel = null;
    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }
    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = (instance2, level, ...args) => {
        const message = args.map(arg => {
          if (arg == null) {
            return null;
          } else if (typeof arg === "string") {
            return arg;
          } else if (typeof arg === "number" || typeof arg === "boolean") {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(arg => arg).join(" ");
        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance2.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message,
            args,
            type: instance2.name
          });
        }
      };
    }
  }
}
/*! Bundled license information:

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvbG9nZ2VyLjAuNC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6WyJsb2dnZXJfMF80XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTG9nTGV2ZWwiLCJMb2dnZXIiLCJzZXRMb2dMZXZlbCIsInNldFVzZXJMb2dIYW5kbGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImluc3RhbmNlcyIsIkxvZ0xldmVsMiIsImxldmVsU3RyaW5nVG9FbnVtIiwiREVCVUciLCJWRVJCT1NFIiwiSU5GTyIsIldBUk4iLCJFUlJPUiIsIlNJTEVOVCIsImRlZmF1bHRMb2dMZXZlbCIsIkNvbnNvbGVNZXRob2QiLCJkZWZhdWx0TG9nSGFuZGxlciIsImluc3RhbmNlIiwibG9nVHlwZSIsImFyZ3MiLCJsb2dMZXZlbCIsIm5vdyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm1ldGhvZCIsImNvbnNvbGUiLCJuYW1lIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIl9sb2dMZXZlbCIsIl9sb2dIYW5kbGVyIiwiX3VzZXJMb2dIYW5kbGVyIiwicHVzaCIsInZhbCIsIlR5cGVFcnJvciIsImxvZ0hhbmRsZXIiLCJ1c2VyTG9nSGFuZGxlciIsImRlYnVnIiwibG9nIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImxldmVsIiwiZm9yRWFjaCIsImluc3QiLCJsb2dDYWxsYmFjayIsIm9wdGlvbnMiLCJjdXN0b21Mb2dMZXZlbCIsImluc3RhbmNlMiIsIm1lc3NhZ2UiLCJtYXAiLCJhcmciLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZ25vcmVkIiwiZmlsdGVyIiwiam9pbiIsInRvTG93ZXJDYXNlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFB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QSxlQUFBLENBQWdCLE1BQU1qQyxRQUFBLENBQVNjLEtBQUEsRUFBTyxHQUFHTyxJQUFJO0lBQzFFLEtBQUtXLFdBQUEsQ0FBWSxNQUFNaEMsUUFBQSxDQUFTYyxLQUFBLEVBQU8sR0FBR08sSUFBSTs7QUFFakQ7QUFFSyxTQUFVbkIsWUFBWTBDLEtBQUEsRUFBZ0M7RUFDMURyQyxTQUFBLENBQVVzQyxPQUFBLENBQVFDLElBQUEsSUFBTztJQUN2QkEsSUFBQSxDQUFLNUMsV0FBQSxDQUFZMEMsS0FBSztFQUN4QixDQUFDO0FBQ0g7QUFFZ0IsU0FBQXpDLGtCQUNkNEMsV0FBQSxFQUNBQyxPQUFBLEVBQW9CO0VBRXBCLFdBQVc3QixRQUFBLElBQVlaLFNBQUEsRUFBVztJQUNoQyxJQUFJMEMsY0FBQSxHQUFrQztJQUN0QyxJQUFJRCxPQUFBLElBQVdBLE9BQUEsQ0FBUUosS0FBQSxFQUFPO01BQzVCSyxjQUFBLEdBQWlCeEMsaUJBQUEsQ0FBa0J1QyxPQUFBLENBQVFKLEtBQUs7O0lBRWxELElBQUlHLFdBQUEsS0FBZ0IsTUFBTTtNQUN4QjVCLFFBQUEsQ0FBU21CLGNBQUEsR0FBaUI7V0FDckI7TUFDTG5CLFFBQUEsQ0FBU21CLGNBQUEsR0FBaUIsQ0FDeEJZLFNBQUEsRUFDQU4sS0FBQSxLQUNHdkIsSUFBQSxLQUNEO1FBQ0YsTUFBTThCLE9BQUEsR0FBVTlCLElBQUEsQ0FDYitCLEdBQUEsQ0FBSUMsR0FBQSxJQUFNO1VBQ1QsSUFBSUEsR0FBQSxJQUFPLE1BQU07WUFDZixPQUFPO3FCQUNFLE9BQU9BLEdBQUEsS0FBUSxVQUFVO1lBQ2xDLE9BQU9BLEdBQUE7cUJBQ0UsT0FBT0EsR0FBQSxLQUFRLFlBQVksT0FBT0EsR0FBQSxLQUFRLFdBQVc7WUFDOUQsT0FBT0EsR0FBQSxDQUFJQyxRQUFBLENBQVE7cUJBQ1ZELEdBQUEsWUFBZXhCLEtBQUEsRUFBTztZQUMvQixPQUFPd0IsR0FBQSxDQUFJRixPQUFBO2lCQUNOO1lBQ0wsSUFBSTtjQUNGLE9BQU9JLElBQUEsQ0FBS0MsU0FBQSxDQUFVSCxHQUFHO3FCQUNsQkksT0FBQSxFQUFTO2NBQ2hCLE9BQU87OztRQUdiLENBQUMsRUFDQUMsTUFBQSxDQUFPTCxHQUFBLElBQU9BLEdBQUcsRUFDakJNLElBQUEsQ0FBSyxHQUFHO1FBQ1gsSUFBSWYsS0FBQSxLQUFVSyxjQUFBLEtBQWMsUUFBZEEsY0FBQSxLQUFjLFNBQWRBLGNBQUEsR0FBa0JDLFNBQUEsQ0FBUzVCLFFBQUEsR0FBVztVQUNsRHlCLFdBQUEsQ0FBWTtZQUNWSCxLQUFBLEVBQU81QyxRQUFBLENBQVM0QyxLQUFLLEVBQUVnQixXQUFBLENBQVc7WUFDbENULE9BQUE7WUFDQTlCLElBQUE7WUFDQXdDLElBQUEsRUFBTVgsU0FBQSxDQUFTdEI7VUFDaEI7O01BRUw7OztBQUdOIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==