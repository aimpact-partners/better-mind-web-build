System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["dexie","3.2.7"]]);
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

// .beyond/uimport/temp/dexie.3.2.7.js
var dexie_3_2_7_exports = {};
__export(dexie_3_2_7_exports, {
  Dexie: () => Dexie$1,
  RangeSet: () => RangeSet,
  default: () => dexie_3_2_7_default,
  liveQuery: () => liveQuery,
  mergeRanges: () => mergeRanges,
  rangesOverlap: () => rangesOverlap
});
module.exports = __toCommonJS(dexie_3_2_7_exports);

// node_modules/dexie/dist/modern/dexie.mjs
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object") return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function") extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(key => {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}
function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  const pd = getOwnPropertyDescriptor(obj, prop);
  let proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce((result, item, i) => {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string" && hasOwn(obj, keyPath)) return obj[keyPath];
  if (!keyPath) return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj == null ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0) return;
  if ("isFrozen" in Object && Object.isFrozen(obj)) return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
        } else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
      } else obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string") setByKeyPath(obj, keyPath, void 0);else if ("length" in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, void 0);
  });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(num => ["Int", "Uint", "Float"].map(t => t + num + "Array")))).filter(t => _global[t]);
var intrinsicTypes = intrinsicTypeNames.map(t => _global[t]);
arrayToObject(intrinsicTypeNames, x => [x, true]);
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */new WeakMap();
  const rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object") return any;
  let rv = circularRefs && circularRefs.get(any);
  if (rv) return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    const proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var {
  toString
} = {};
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string") return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done) a.push(x.value);
      return a;
    }
    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--) a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--) a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? fn => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = () => true;
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK) try {
    getErrorWithStack.arguments;
    throw new Error();
  } catch (e) {
    return e;
  }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(frame => "\n" + frame).join("");
}
var dexieErrorNames = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"];
var idbDomErrorNames = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(key => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(pos => failures[pos]);
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
var BaseException = DexieError;
var exceptions = errorList.reduce((obj, name) => {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = `${msgOrInner.name} ${msgOrInner.message}`;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce((obj, name) => {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== void 0) arguments[0] = res;
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this,
        i = arguments.length,
        args = new Array(i);
      while (i--) args[i] = arguments[i];
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100,
  MAX_LONG_STACKS = 20,
  ZONE_ECHO_LIMIT = 100,
  [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
    let globalP = Promise.resolve();
    if (typeof crypto === "undefined" || !crypto.subtle) return [globalP, getProto(globalP), globalP];
    const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [nativeP, getProto(nativeP), globalP];
  })(),
  nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? () => {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(() => {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute("i", "1");
} : () => {
  setTimeout(physicalTick, 0);
};
var asap = function (callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true,
  needsNewPhysicalTick = true,
  unhandledErrors = [],
  rejectingErrors = [],
  currentFulfiller = null,
  rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(uh => {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function () {
    var psd = PSD,
      microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      const cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise((resolve, reject) => {
        propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function (value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function () {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected);
    var type2 = arguments[0],
      handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, err => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, err => err && err.name === type2 ? handler(err) : PromiseReject(err));
  },
  finally: function (onFinally) {
    return this.then(value => {
      onFinally();
      return value;
    }, err => {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    return ms < Infinity ? new DexiePromise((resolve, reject) => {
      var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
      this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach((a, i) => DexiePromise.resolve(a).then(x => {
        values[i] = x;
        if (! --remaining) resolve(values);
      }, reject));
    });
  },
  resolve: value => {
    if (value instanceof DexiePromise) return value;
    if (value && typeof value.then === "function") return new DexiePromise((resolve, reject) => {
      value.then(resolve, reject);
    });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      values.map(value => DexiePromise.resolve(value).then(resolve, reject));
    });
  },
  PSD: {
    get: () => PSD,
    set: value => PSD = value
  },
  totalEchoes: {
    get: () => totalEchoes
  },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: () => asap,
    set: value => {
      asap = value;
    }
  },
  rejectionMapper: {
    get: () => rejectionMapper,
    set: value => {
      rejectionMapper = value;
    }
  },
  follow: (fn, zoneProps) => {
    return new DexiePromise((resolve, reject) => {
      return newScope((resolve2, reject2) => {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function () {
          run_at_end_of_this_or_next_physical_tick(() => {
            this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(resolve => {
      if (possiblePromises.length === 0) resolve([]);
      let remaining = possiblePromises.length;
      const results = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => results[i] = {
        status: "fulfilled",
        value
      }, reason => results[i] = {
        status: "rejected",
        reason
      }).then(() => --remaining || resolve(results)));
    });
  });
  if (NativePromise.any && typeof AggregateError !== "undefined") setProp(DexiePromise, "any", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      if (possiblePromises.length === 0) reject(new AggregateError([]));
      let remaining = possiblePromises.length;
      const failures = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => resolve(value), failure => {
        failures[i] = failure;
        if (! --remaining) reject(new AggregateError(failures));
      }));
    });
  });
}
function executePromiseTask(promise, fn) {
  try {
    fn(value => {
      if (promise._state !== null) return;
      if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, (resolve, reject) => {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(() => {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret,
      value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value,
      errorName,
      message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(p => {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i) finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(() => {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(p => p._value === promise._value)) unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i) if (unhandledErrors[--i]._value === promise._value) {
    unhandledErrors.splice(i, 1);
    return;
  }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
      outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
}
var task = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD,
    psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {
      value: DexiePromise,
      configurable: true,
      writable: true
    },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2) extend(psd, props2);
  ++parent.ref;
  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits) return false;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(x => {
      decrementExpectedAwaits();
      return x;
    }, e => {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD) return;
  PSD = targetZone;
  if (currentZone === globalPSD) globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
      if (targetEnv.allSettled) GlobalPromise.allSettled = targetEnv.allSettled;
      if (targetEnv.any) GlobalPromise.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {}
  if (rv !== false) try {
    var event,
      eventData = {
        promise,
        reason: err
      };
    if (_global.document && document.createEvent) {
      event = document.createEvent("Event");
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }
    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
        _global.onunhandledrejection(event);
      } catch (_) {}
    }
    if (debug && event && !event.defaultPrevented) {
      console.warn(`Unhandled rejection: ${err.stack || err}`);
    }
  } catch (e) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn) {
  if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
    if (db._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
    }
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }
    return db._state.dbReadyPromise.then(() => tempTransaction(db, mode, storeNames, fn));
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);
    try {
      trans.create();
      db._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db._close();
        return db.open().then(() => tempTransaction(db, mode, storeNames, fn));
      }
      return rejection(ex);
    }
    return trans._promise(mode, (resolve, reject) => {
      return newScope(() => {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(result => {
      return trans._completion.then(() => result);
    });
  }
}
var DEXIE_VERSION = "3.2.7";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = frame => !/(dexie\.js|dexie\.min\.js)/.test(frame);
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? obj => {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : obj => obj;
}
var Table = class {
  _trans(mode, fn, writeLocked) {
    const trans = this._tx || PSD.trans;
    const tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    const wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), {
        trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec) endMicroTickScope();
    }
  }
  get(keyOrCrit, cb) {
    if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", trans => {
      return this.core.get({
        trans,
        key: keyOrCrit
      }).then(res => this.hook.reading.fire(res));
    }).then(cb);
  }
  where(indexOrCrit) {
    if (typeof indexOrCrit === "string") return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit)) return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
    const keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(ix => {
      if (ix.compound && keyPaths.every(keyPath => ix.keyPath.indexOf(keyPath) >= 0)) {
        for (let i = 0; i < keyPaths.length; ++i) {
          if (keyPaths.indexOf(ix.keyPath[i]) === -1) return false;
        }
        return true;
      }
      return false;
    }).sort((a, b) => a.keyPath.length - b.keyPath.length)[0];
    if (compoundIndex && this.db._maxKey !== maxString) {
      const keyPathsInValidOrder = compoundIndex.keyPath.slice(0, keyPaths.length);
      return this.where(keyPathsInValidOrder).equals(keyPathsInValidOrder.map(kp => indexOrCrit[kp]));
    }
    if (!compoundIndex && debug) console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
    const {
      idxByName
    } = this.schema;
    const idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
      const index = idxByName[keyPath];
      const value = indexOrCrit[keyPath];
      return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? x => {
        const prop = getByKeyPath(x, keyPath);
        return isArray(prop) && prop.some(item => equals(value, item));
      } : x => equals(value, getByKeyPath(x, keyPath))) : prevFilterFn];
    }, [null, null]);
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  }
  filter(filterFunction) {
    return this.toCollection().and(filterFunction);
  }
  count(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  }
  offset(offset) {
    return this.toCollection().offset(offset);
  }
  limit(numRows) {
    return this.toCollection().limit(numRows);
  }
  each(callback) {
    return this.toCollection().each(callback);
  }
  toArray(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? `[${index.join("+")}]` : index));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(constructor) {
    this.schema.mappedClass = constructor;
    const readHook = obj => {
      if (!obj) return obj;
      const res = Object.create(constructor.prototype);
      for (var m in obj) if (hasOwn(obj, m)) try {
        res[m] = obj[m];
      } catch (_) {}
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  }
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  }
  add(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "add",
        keys: key != null ? [key] : null,
        values: [objToAdd]
      });
    }).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  update(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(keyPath => {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, {
            value: keyOrObject,
            primKey: key
          });
        }
      } catch (_a) {}
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  }
  put(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "put",
      values: [objToAdd],
      keys: key != null ? [key] : null
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  delete(key) {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "delete",
      keys: [key]
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  clear() {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "deleteRange",
      range: AnyRange
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  bulkGet(keys2) {
    return this._trans("readonly", trans => {
      return this.core.getMany({
        keys: keys2,
        trans
      }).then(result => result.map(res => this.hook.reading.fire(res)));
    });
  }
  bulkAdd(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "add",
        keys: keys2,
        values: objectsToAdd,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkPut(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "put",
        keys: keys2,
        values: objectsToPut,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkDelete(keys2) {
    const numKeys = keys2.length;
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "delete",
        keys: keys2
      });
    }).then(({
      numFailures,
      lastResult,
      failures
    }) => {
      if (numFailures === 0) return lastResult;
      throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
    });
  }
};
function Events(ctx) {
  var evs = {};
  var rv = function (eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length,
        args = new Array(i2 - 1);
      while (--i2) args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object") return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length,
            args2 = new Array(i2);
          while (i2--) args2[i2] = arguments[i2];
          context.subscribers.forEach(function (fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({
    prototype
  });
  return constructor;
}
function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey) return coreSchema.primaryKey;
  const index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  const index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    const set = {};
    const union = (item, cursor, advance) => {
      if (!filter || filter(cursor, advance, result => cursor.stop(result), err => cursor.fail(err))) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]") key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set, key)) {
          set[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(cursor => {
    if (cursor) {
      return cursor.start(() => {
        var c = () => cursor.continue();
        if (!filter || filter(cursor, advancer => c = advancer, val => {
          cursor.stop(val);
          c = nop;
        }, e => {
          cursor.fail(e);
          c = nop;
        })) wrappedFn(cursor.value, cursor, advancer => c = advancer);
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    const ta = type(a);
    const tb = type(b);
    if (ta !== tb) {
      if (ta === "Array") return 1;
      if (tb === "Array") return -1;
      if (ta === "binary") return 1;
      if (tb === "binary") return -1;
      if (ta === "string") return 1;
      if (tb === "string") return -1;
      if (ta === "Date") return 1;
      if (tb !== "Date") return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary":
        {
          return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
        }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a) {}
  return NaN;
}
function compareArrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    const res = cmp(a[i], b[i]);
    if (res !== 0) return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  const t = typeof x;
  if (t !== "object") return t;
  if (ArrayBuffer.isView(x)) return "binary";
  const tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array) return a;
  if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = class {
  _read(fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  }
  _write(fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  }
  _addAlgorithm(fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  }
  _iterate(fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  }
  clone(props2) {
    var rv = Object.create(this.constructor.prototype),
      ctx = Object.create(this._ctx);
    if (props2) extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(fn) {
    var ctx = this._ctx;
    return this._read(trans => iter(ctx, fn, trans, ctx.table.core));
  }
  count(cb) {
    return this._read(trans => {
      const ctx = this._ctx;
      const coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(count2 => Math.min(count2, ctx.limit));
      } else {
        var count = 0;
        return iter(ctx, () => {
          ++count;
          return false;
        }, trans, coreTable).then(() => count);
      }
    }).then(cb);
  }
  sortBy(keyPath, cb) {
    const parts = keyPath.split(".").reverse(),
      lastPart = parts[0],
      lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i) return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex),
        bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  }
  toArray(cb) {
    return this._read(trans => {
      var ctx = this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        const {
          valueMapper
        } = ctx;
        const index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(({
          result
        }) => valueMapper ? result.map(valueMapper) : result);
      } else {
        const a = [];
        return iter(ctx, item => a.push(item), trans, ctx.table.core).then(() => a);
      }
    }, cb);
  }
  offset(offset) {
    var ctx = this._ctx;
    if (offset <= 0) return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return (cursor, advance) => {
          if (offsetLeft === 0) return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(() => {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return () => --offsetLeft < 0;
      });
    }
    return this;
  }
  limit(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, () => {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0) advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  }
  until(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  }
  first(cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  }
  last(cb) {
    return this.reverse().first(cb);
  }
  filter(filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  }
  and(filter) {
    return this.filter(filter);
  }
  or(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  }
  eachUniqueKey(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  }
  eachPrimaryKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  }
  keys(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  }
  primaryKeys(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(trans => {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(({
        result
      }) => result).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  }
  uniqueKeys(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  }
  firstKey(cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  }
  lastKey(cb) {
    return this.reverse().firstKey(cb);
  }
  distinct() {
    var ctx = this._ctx,
      idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi) return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  }
  modify(changes) {
    var ctx = this._ctx;
    return this._write(trans => {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function (item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i],
              val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      const coreTable = ctx.table.core;
      const {
        outbound,
        extractKey
      } = coreTable.schema.primaryKey;
      const limit = this.db._options.modifyChunkSize || 200;
      const totalFailures = [];
      let successCount = 0;
      const failedKeys = [];
      const applyMutateResult = (expectedCount, res) => {
        const {
          failures,
          numFailures
        } = res;
        successCount += expectedCount - numFailures;
        for (let pos of keys(failures)) {
          totalFailures.push(failures[pos]);
        }
      };
      return this.clone().primaryKeys().then(keys2 => {
        const nextChunk = offset => {
          const count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(values => {
            const addValues = [];
            const putValues = [];
            const putKeys = outbound ? [] : null;
            const deleteKeys = [];
            for (let i = 0; i < count; ++i) {
              const origValue = values[i];
              const ctx2 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
                if (ctx2.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx2.value);
                } else {
                  putValues.push(ctx2.value);
                  if (outbound) putKeys.push(keys2[offset + i]);
                }
              }
            }
            const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({
              trans,
              type: "add",
              values: addValues
            }).then(res => {
              for (let pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
              trans,
              type: "put",
              keys: putKeys,
              values: putValues,
              criteria,
              changeSpec: typeof changes !== "function" && changes
            }).then(res => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
              trans,
              type: "delete",
              keys: deleteKeys,
              criteria
            }).then(res => applyMutateResult(deleteKeys.length, res))).then(() => {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(() => {
          if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  }
  delete() {
    var ctx = this._ctx,
      range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(trans => {
        const {
          primaryKey
        } = ctx.table.core.schema;
        const coreRange = range;
        return ctx.table.core.count({
          trans,
          query: {
            index: primaryKey,
            range: coreRange
          }
        }).then(count => {
          return ctx.table.core.mutate({
            trans,
            type: "deleteRange",
            range: coreRange
          }).then(({
            failures,
            lastResult,
            results,
            numFailures
          }) => {
            if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(pos => failures[pos]), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  }
};
var deleteCallback = (value, ctx) => ctx.value = null;
function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db;
    let keyRange = AnyRange,
      error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    const whereCtx = whereClause._ctx;
    const table = whereCtx.table;
    const readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? s => s.toUpperCase() : s => s.toLowerCase();
}
function lowerFactory(dir) {
  return dir === "next" ? s => s.toLowerCase() : s => s.toUpperCase();
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0) llp = i;
  }
  if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper,
    lower,
    compare,
    upperNeedles,
    lowerNeedles,
    direction,
    nextKeySuffix,
    needlesLen = needles.length;
  if (!needles.every(s => typeof s === "string")) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return {
        lower: lower(needle),
        upper: upper(needle)
      };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
  c._ondirectionchange = function (direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string") return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = class {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
      return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }
  equals(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => rangeEqual(value));
  }
  above(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, true));
  }
  aboveOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, false));
  }
  below(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value, false, true));
  }
  belowOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value));
  }
  startsWith(str) {
    if (typeof str !== "string") return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  }
  startsWithIgnoreCase(str) {
    if (str === "") return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
  }
  equalsIgnoreCase(str) {
    return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
  }
  anyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
  }
  startsWithAnyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.some(n => x.indexOf(n) === 0), set, maxString);
  }
  anyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    let compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0) return emptyCollection(this);
    const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
    c._ondirectionchange = direction => {
      compare = direction === "next" ? this._ascending : this._descending;
      set.sort(compare);
    };
    let i = 0;
    c._addAlgorithm((cursor, advance, resolve) => {
      const key = cursor.key;
      while (compare(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(() => {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  }
  notEqual(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  noneOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {
      includeLowers: false,
      includeUppers: false
    });
  }
  inAnyRange(ranges, options) {
    const cmp2 = this._cmp,
      ascending = this._ascending,
      descending = this._descending,
      min = this._min,
      max = this._max;
    if (ranges.length === 0) return emptyCollection(this);
    if (!ranges.every(range => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    const includeLowers = !options || options.includeLowers !== false;
    const includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      let i = 0,
        l = ranges2.length;
      for (; i < l; ++i) {
        const range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l) ranges2.push(newRange);
      return ranges2;
    }
    let sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    let set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    let rangePos = 0;
    const keyIsBeyondCurrentEntry = includeUppers ? key => ascending(key, set[rangePos][1]) > 0 : key => ascending(key, set[rangePos][1]) >= 0;
    const keyIsBeforeCurrentEntry = includeLowers ? key => descending(key, set[rangePos][0]) > 0 : key => descending(key, set[rangePos][0]) >= 0;
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    let checkKey = keyIsBeyondCurrentEntry;
    const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
    c._ondirectionchange = direction => {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm((cursor, advance, resolve) => {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(() => {
          if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  }
  startsWithAnyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(s => typeof s === "string")) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0) return emptyCollection(this);
    return this.inAnyRange(set.map(str => [str, str + maxString]));
  }
};
function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    const indexedDB2 = db._deps.indexedDB;
    if (!indexedDB2) throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = (a, b) => indexedDB2.cmp(b, a);
    this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
    this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = class {
  _lock() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
    return this;
  }
  _unlock() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global) PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {}
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && PSD.lockOwnerFor !== this;
  }
  create(idbtrans) {
    if (!this.mode) return this;
    const idbdb = this.db.idbdb;
    const dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active) throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : idbdb.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }));
    idbtrans.onerror = wrap(ev => {
      preventDefault(ev);
      this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(ev => {
      preventDefault(ev);
      this.active && this._reject(new exceptions.Abort(idbtrans.error));
      this.active = false;
      this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  }
  _promise(mode, fn, bWriteLock) {
    if (mode === "readwrite" && this.mode !== "readwrite") return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active) return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise((resolve, reject) => {
        this._blockedFuncs.push([() => {
          this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(() => {
        var p2 = new DexiePromise((resolve, reject) => {
          this._lock();
          const rv = fn(resolve, reject, this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p2.finally(() => this._unlock());
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise((resolve, reject) => {
        var rv = fn(resolve, reject, this);
        if (rv && rv.then) rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(promiseLike) {
    var root = this._root();
    const promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(() => promise);
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length) root._waitingQueue.shift()();
        if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise((resolve, reject) => {
      promise.then(res => root._waitingQueue.push(wrap(resolve.bind(null, res))), err => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans) this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  }
  table(tableName) {
    const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
    const tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  }
};
function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._completion.then(() => {
      this.active = false;
      this.on.complete.fire();
    }, e => {
      var wasActive = this.active;
      this.active = false;
      this.on.error.fire(e);
      this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, index => [index.name, index])
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = IdbKeyRange => {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = () => [[]];
    return [[]];
  } catch (e) {
    getMaxKey = () => maxString;
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return () => void 0;
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function getSinglePathKeyExtractor(keyPath) {
  const split = keyPath.split(".");
  if (split.length === 1) {
    return obj => obj[keyPath];
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
  function extractSchema(db2, trans) {
    const tables2 = arrayify(db2.objectStoreNames);
    return {
      schema: {
        name: db2.name,
        tables: tables2.map(table => trans.objectStore(table)).map(store => {
          const {
            keyPath,
            autoIncrement
          } = store;
          const compound = isArray(keyPath);
          const outbound = keyPath == null;
          const indexByKeyPath = {};
          const result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(indexName => store.index(indexName)).map(index => {
              const {
                name,
                unique,
                multiEntry,
                keyPath: keyPath2
              } = index;
              const compound2 = isArray(keyPath2);
              const result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: keyPath2 => indexByKeyPath[getKeyPathAlias(keyPath2)]
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3) return null;
    if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
    const {
      lower,
      upper,
      lowerOpen,
      upperOpen
    } = range;
    const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    const tableName = tableSchema.name;
    function mutate({
      trans,
      type: type2,
      keys: keys2,
      values,
      range
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const store = trans.objectStore(tableName);
        const outbound = store.keyPath == null;
        const isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange") throw new Error("Invalid operation type: " + type2);
        const {
          length
        } = keys2 || values || {
          length: 1
        };
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0) return resolve({
          numFailures: 0,
          failures: {},
          results: [],
          lastResult: void 0
        });
        let req;
        const reqs = [];
        const failures = [];
        let numFailures = 0;
        const errorHandler = event => {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4) return resolve({
            numFailures,
            failures,
            results: [],
            lastResult: void 0
          });
          if (range.type === 3) reqs.push(req = store.clear());else reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
          if (isAddOrPut) {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        const done = event => {
          const lastResult = event.target.result;
          reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(req2 => req2.result),
            lastResult
          });
        };
        req.onerror = event => {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2({
      trans,
      values,
      query: query2,
      reverse,
      unique
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const {
          index,
          range
        } = query2;
        const store = trans.objectStore(tableName);
        const source = index.isPrimaryKey ? store : store.index(index.name);
        const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(ev => {
          const cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          const _cursorContinue = cursor.continue.bind(cursor);
          let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          const _cursorAdvance = cursor.advance.bind(cursor);
          const doThrowCursorIsNotStarted = () => {
            throw new Error("Cursor not started");
          };
          const doThrowCursorIsStopped = () => {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function () {
            let gotOne = 1;
            return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
          };
          cursor.start = callback => {
            const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = value => {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            const guardedCallback = () => {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = () => {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(ev2 => {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return request => {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const {
            trans,
            values,
            limit,
            query: query2
          } = request;
          const nonInfinitLimit = limit === Infinity ? void 0 : limit;
          const {
            index,
            range
          } = query2;
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0) return resolve({
            result: []
          });
          if (hasGetAll2) {
            const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = event => resolve({
              result: event.target.result
            });
            req.onerror = eventRejectHandler(reject);
          } else {
            let count = 0;
            const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            const result = [];
            req.onsuccess = event => {
              const cursor = req.result;
              if (!cursor) return resolve({
                result
              });
              result.push(values ? cursor.value : cursor.primaryKey);
              if (++count === limit) return resolve({
                result
              });
              cursor.continue();
            };
            req.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany({
        trans,
        keys: keys2
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const length = keys2.length;
          const result = new Array(length);
          let keyCount = 0;
          let callbackCount = 0;
          let req;
          const successHandler = event => {
            const req2 = event.target;
            if ((result[req2._pos] = req2.result) != null) ;
            if (++callbackCount === keyCount) resolve(result);
          };
          const errorHandler = eventRejectHandler(reject);
          for (let i = 0; i < length; ++i) {
            const key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0) resolve(result);
        });
      },
      get({
        trans,
        key
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const req = store.get(key);
          req.onsuccess = event => resolve(event.target.result);
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count({
        query: query2,
        trans
      }) {
        const {
          index,
          range
        } = query2;
        return new Promise((resolve, reject) => {
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(ev => resolve(ev.target.result));
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  const {
    schema,
    hasGetAll
  } = extractSchema(db, tmpTrans);
  const tables = schema.tables.map(tableSchema => createDbCoreTable(tableSchema));
  const tableMap = {};
  tables.forEach(table => tableMap[table.name] = table);
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table(name) {
      const result = tableMap[name];
      if (!result) throw new Error(`Table '${name}' not found`);
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce((down, {
    create
  }) => ({
    ...down,
    ...create(down)
  }), stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, {
  IDBKeyRange,
  indexedDB: indexedDB2
}, tmpTrans) {
  const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks({
  _novip: db
}, tmpTrans) {
  const idbdb = tmpTrans.db;
  const stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(table => {
    const tableName = table.name;
    if (db.core.schema.tables.some(tbl => tbl.name === tableName)) {
      table.core = db.core.table(tableName);
      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace({
  _novip: db
}, objs, tableNames, dbschema) {
  tableNames.forEach(tableName => {
    const schema = dbschema[tableName];
    objs.forEach(obj => {
      const propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get() {
              return this.table(tableName);
            },
            set(value) {
              defineProperty(this, tableName, {
                value,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi({
  _novip: db
}, objs) {
  objs.forEach(obj => {
    for (let key in obj) {
      if (obj[key] instanceof db.Table) delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  const globalSchema = db._dbSchema;
  const trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  const rejectTransaction = trans._reject.bind(trans);
  const transless = PSD.transless || PSD;
  newScope(() => {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(tableName => {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(() => db.on.populate.fire(trans)).catch(rejectTransaction);
    } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes({
  _novip: db
}, oldVersion, trans, idbUpgradeTrans) {
  const queue = [];
  const versions = db._versions;
  let globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  let anyContentUpgraderHasRun = false;
  const versToRun = versions.filter(v => v._cfg.version >= oldVersion);
  versToRun.forEach(version => {
    queue.push(() => {
      const oldSchema = globalSchema;
      const newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      const diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(tuple => {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(change => {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          const store = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(idx => addIndex(store, idx));
          change.change.forEach(idx => {
            store.deleteIndex(idx.name);
            addIndex(store, idx);
          });
          change.del.forEach(idxName => store.deleteIndex(idxName));
        }
      });
      const contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        let upgradeSchema = shallowClone(newSchema);
        diff.del.forEach(table => {
          upgradeSchema[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
        trans.schema = upgradeSchema;
        const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync) {
          incrementExpectedAwaits();
        }
        let returnValue;
        const promiseFollowed = DexiePromise.follow(() => {
          returnValue = contentUpgrade(trans);
          if (returnValue) {
            if (contentUpgradeIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            }
          }
        });
        return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
      }
    });
    queue.push(idbtrans => {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        const newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(() => {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  const diff = {
    del: [],
    add: [],
    change: []
  };
  let table;
  for (table in oldSchema) {
    if (!newSchema[table]) diff.del.push(table);
  }
  for (table in newSchema) {
    const oldDef = oldSchema[table],
      newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      const change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        const oldIndexes = oldDef.idxByName;
        const newIndexes = newDef.idxByName;
        let idxName;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName]) change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          const oldIdx = oldIndexes[idxName],
            newIdx = newIndexes[idxName];
          if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
    keyPath: primKey.keyPath,
    autoIncrement: primKey.auto
  } : {
    autoIncrement: primKey.auto
  });
  indexes.forEach(idx => addIndex(store, idx));
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(tableName => {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(storeName => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {
    unique: idx.unique,
    multiEntry: idx.multi
  });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
  const globalSchema = {};
  const dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(storeName => {
    const store = tmpTrans.objectStore(storeName);
    let keyPath = store.keyPath;
    const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    const indexes = [];
    for (let j = 0; j < store.indexNames.length; ++j) {
      const idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema({
  _novip: db
}, idbdb, tmpTrans) {
  db.verno = idbdb.version / 10;
  const globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
  const installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  const diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(ch => ch.add.length || ch.change.length));
}
function adjustToExistingIndexNames({
  _novip: db
}, schema, idbtrans) {
  const storeNames = idbtrans.db.objectStoreNames;
  for (let i = 0; i < storeNames.length; ++i) {
    const storeName = storeNames[i];
    const store = idbtrans.objectStore(storeName);
    db._hasGetAll = "getAll" in store;
    for (let j = 0; j < store.indexNames.length; ++j) {
      const indexName = store.indexNames[j];
      const keyPath = store.index(indexName).keyPath;
      const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        const indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map((index, indexNum) => {
    index = index.trim();
    const name = index.replace(/([&*]|\+\+)/g, "");
    const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = class {
  _parseStoresSpec(stores, outSchema) {
    keys(stores).forEach(tableName => {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(idx => {
          if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  }
  stores(stores) {
    const db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    const versions = db._versions;
    const storesSpec = {};
    let dbschema = {};
    versions.forEach(version => {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  }
  upgrade(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  }
};
function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  let dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({
      dbnames: "name"
    });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames({
  indexedDB: indexedDB2,
  IDBKeyRange
}) {
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(infos => infos.map(info => info.name).filter(name => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({
    name
  }).catch(nop);
}
function _onDatabaseDeleted({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases) return Promise.resolve();
  var intervalId;
  return new Promise(function (resolve) {
    var tryIdb = function () {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function () {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db) {
  const state = db._state;
  const {
    indexedDB: indexedDB2
  } = db._deps;
  if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(() => state.dbOpenError ? rejection(state.dbOpenError) : db);
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  const openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  let resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null,
    wasCreated = false;
  const tryOpenDB = () => new DexiePromise((resolve, reject) => {
    throwIfCancelled();
    if (!indexedDB2) throw new exceptions.MissingAPI();
    const dbName = db.name;
    const req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db.verno * 10));
    if (!req) throw new exceptions.MissingAPI();
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db._fireOnBlocked);
    req.onupgradeneeded = wrap(e => {
      upgradeTransaction = req.transaction;
      if (state.autoSchema && !db._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        const delreq = indexedDB2.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(() => {
          reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        wasCreated = oldVer < 1;
        db._novip.idbdb = req.result;
        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(() => {
      upgradeTransaction = null;
      const idbdb = db._novip.idbdb = req.result;
      const objectStoreNames = slice(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0) try {
        const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
          adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
          if (!verifyInstalledSchema(db, tmpTrans)) {
            console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
          }
        }
        generateMiddlewareStacks(db, tmpTrans);
      } catch (e) {}
      connections.push(db);
      idbdb.onversionchange = wrap(ev => {
        state.vcFired = true;
        db.on("versionchange").fire(ev);
      });
      idbdb.onclose = wrap(ev => {
        db.on("close").fire(ev);
      });
      if (wasCreated) _onDatabaseCreated(db._deps, dbName);
      resolve();
    }, reject);
  }).catch(err => {
    if (err && err.name === "UnknownError" && state.PR1398_maxLoop > 0) {
      state.PR1398_maxLoop--;
      console.warn("Dexie: Workaround for Chrome UnknownError on open()");
      return tryOpenDB();
    } else {
      return DexiePromise.reject(err);
    }
  });
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(tryOpenDB)]).then(() => {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(() => db.on.ready.fire(db.vip))).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        let remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(() => remainders(db.vip))).then(fireRemainders);
      }
    });
  }).finally(() => {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(() => {
    return db;
  }).catch(err => {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a) {}
    if (openCanceller === state.openCanceller) {
      db._close();
    }
    return rejection(err);
  }).finally(() => {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = result => iterator.next(result),
    doThrow = error => iterator.throw(error),
    onSuccess = step(callNext),
    onError = step(doThrow);
  function step(getNext) {
    return val => {
      var next = getNext(val),
        value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i) args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(() => {
    const transless = PSD.transless || PSD;
    const trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
    const zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db._close();
          return db.open().then(() => enterTransactionScope(db, mode, storeNames, null, scopeFunc));
        }
        return rejection(ex);
      }
    }
    const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    let returnValue;
    const promiseFollowed = DexiePromise.follow(() => {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(x => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then(x => {
      if (parentTransaction) trans._resolve();
      return trans._completion.then(() => x);
    }).catch(e => {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  const result = isArray(a) ? a.slice() : [a];
  for (let i = 0; i < count; ++i) result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return {
    ...down,
    table(tableName) {
      const table = down.table(tableName);
      const {
        schema
      } = table;
      const indexLookup = {};
      const allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        const keyPathAlias = getKeyPathAlias(keyPath);
        const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        const isVirtual = keyTail > 0;
        const virtualIndex = {
          ...lowLevelIndex,
          isVirtual,
          keyTail,
          keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        };
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort((a, b) => a.keyTail - b.keyTail);
        return virtualIndex;
      }
      const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (const index of schema.indexes) {
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        const result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        const index = req.query.index;
        return index.isVirtual ? {
          ...req,
          query: {
            index,
            range: translateRange(req.query.range, index.keyTail)
          }
        } : req;
      }
      const result = {
        ...table,
        schema: {
          ...schema,
          primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        },
        count(req) {
          return table.count(translateRequest(req));
        },
        query(req) {
          return table.query(translateRequest(req));
        },
        openCursor(req) {
          const {
            keyTail,
            isVirtual,
            keyLength
          } = req.query.index;
          if (!isVirtual) return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            const virtualCursor = Object.create(cursor, {
              continue: {
                value: _continue
              },
              continuePrimaryKey: {
                value(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get() {
                  const key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(cursor => cursor && createVirtualCursor(cursor));
        }
      };
      return result;
    }
  };
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(prop => {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop],
        bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        const apTypeName = toStringTag(ap);
        const bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp) rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(prop => {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete") return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: downCore => ({
    ...downCore,
    table(tableName) {
      const downTable = downCore.table(tableName);
      const {
        primaryKey
      } = downTable.schema;
      const tableMiddleware = {
        ...downTable,
        mutate(req) {
          const dxTrans = PSD.trans;
          const {
            deleting,
            creating,
            updating
          } = dxTrans.table(tableName).hook;
          switch (req.type) {
            case "add":
              if (creating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "put":
              if (creating.fire === nop && updating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "delete":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "deleteRange":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => deleteRange(req), true);
          }
          return downTable.mutate(req);
          function addPutOrDelete(req2) {
            const dxTrans2 = PSD.trans;
            const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
            if (!keys2) throw new Error("Keys missing");
            req2 = req2.type === "add" || req2.type === "put" ? {
              ...req2,
              keys: keys2
            } : {
              ...req2
            };
            if (req2.type !== "delete") req2.values = [...req2.values];
            if (req2.keys) req2.keys = [...req2.keys];
            return getExistingValues(downTable, req2, keys2).then(existingValues => {
              const contexts = keys2.map((key, i) => {
                const existingValue = existingValues[i];
                const ctx = {
                  onerror: null,
                  onsuccess: null
                };
                if (req2.type === "delete") {
                  deleting.fire.call(ctx, key, existingValue, dxTrans2);
                } else if (req2.type === "add" || existingValue === void 0) {
                  const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                  if (key == null && generatedPrimaryKey != null) {
                    key = generatedPrimaryKey;
                    req2.keys[i] = key;
                    if (!primaryKey.outbound) {
                      setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                    }
                  }
                } else {
                  const objectDiff = getObjectDiff(existingValue, req2.values[i]);
                  const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                  if (additionalChanges) {
                    const requestedValue = req2.values[i];
                    Object.keys(additionalChanges).forEach(keyPath => {
                      if (hasOwn(requestedValue, keyPath)) {
                        requestedValue[keyPath] = additionalChanges[keyPath];
                      } else {
                        setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
                      }
                    });
                  }
                }
                return ctx;
              });
              return downTable.mutate(req2).then(({
                failures,
                results,
                numFailures,
                lastResult
              }) => {
                for (let i = 0; i < keys2.length; ++i) {
                  const primKey = results ? results[i] : keys2[i];
                  const ctx = contexts[i];
                  if (primKey == null) {
                    ctx.onerror && ctx.onerror(failures[i]);
                  } else {
                    ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i] ? req2.values[i] : primKey);
                  }
                }
                return {
                  failures,
                  results,
                  numFailures,
                  lastResult
                };
              }).catch(error => {
                contexts.forEach(ctx => ctx.onerror && ctx.onerror(error));
                return Promise.reject(error);
              });
            });
          }
          function deleteRange(req2) {
            return deleteNextChunk(req2.trans, req2.range, 1e4);
          }
          function deleteNextChunk(trans, range, limit) {
            return downTable.query({
              trans,
              values: false,
              query: {
                index: primaryKey,
                range
              },
              limit
            }).then(({
              result
            }) => {
              return addPutOrDelete({
                type: "delete",
                keys: result,
                trans
              }).then(res => {
                if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                if (result.length < limit) {
                  return {
                    failures: [],
                    numFailures: 0,
                    lastResult: void 0
                  };
                } else {
                  return deleteNextChunk(trans, {
                    ...range,
                    lower: result[result.length - 1],
                    lowerOpen: true
                  }, limit);
                }
              });
            });
          }
        }
      };
      return tableMiddleware;
    }
  })
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({
    trans: req.trans,
    keys: effectiveKeys,
    cache: "immutable"
  });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache) return null;
    if (cache.keys.length < keys2.length) return null;
    const result = [];
    for (let i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
      if (cmp(cache.keys[i], keys2[j]) !== 0) continue;
      result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: core => {
    return {
      table: tableName => {
        const table = core.table(tableName);
        return {
          ...table,
          getMany: req => {
            if (!req.cache) {
              return table.getMany(req);
            }
            const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then(res => {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          },
          mutate: req => {
            if (req.type !== "add") req.trans["_cache"] = null;
            return table.mutate(req);
          }
        };
      }
    };
  }
};
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function (fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? {
      d: 1,
      from: fromOrTree,
      to: arguments.length > 1 ? to : fromOrTree
    } : {
      d: 0
    });
  } else {
    const rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, {
  add(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys(keys2) {
    keys2.forEach(key => addRange(this, key, key));
    return this;
  },
  [iteratorSymbol]() {
    return getRangeSetIterator(this);
  }
});
function addRange(target, from, to) {
  const diff = cmp(from, to);
  if (isNaN(diff)) return;
  if (diff > 0) throw RangeError();
  if (isEmptyRange(target)) return extend(target, {
    from,
    to,
    d: 1
  });
  const left = target.l;
  const right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from, to) : target.l = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to) : target.r = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  const rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, {
    from,
    to,
    l,
    r
  }) {
    addRange(target2, from, to);
    if (l) _addRangeSet(target2, l);
    if (r) _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  const i1 = getRangeSetIterator(rangeSet2);
  let nextResult1 = i1.next();
  if (nextResult1.done) return false;
  let a = nextResult1.value;
  const i2 = getRangeSetIterator(rangeSet1);
  let nextResult2 = i2.next(a.from);
  let b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  let state = isEmptyRange(node) ? null : {
    s: 0,
    n: node
  };
  return {
    next(key) {
      const keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            } else {
              while (state.n.l) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0) return {
              value: state.n,
              done: false
            };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = {
                up: state,
                n: state.n.r,
                s: 0
              };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return {
        done: true
      };
    }
  };
}
function rebalance(target) {
  var _a, _b;
  const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    const l = r === "r" ? "l" : "r";
    const rootClone = {
      ...target
    };
    const oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth({
  r,
  l
}) {
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: core => {
    const dbName = core.schema.name;
    const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return {
      ...core,
      table: tableName => {
        const table = core.table(tableName);
        const {
          schema
        } = table;
        const {
          primaryKey
        } = schema;
        const {
          extractKey,
          outbound
        } = primaryKey;
        const tableClone = {
          ...table,
          mutate: req => {
            const trans = req.trans;
            const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            const getRangeSet = indexName => {
              const part = `idb://${dbName}/${tableName}/${indexName}`;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            const pkRangeSet = getRangeSet("");
            const delsRangeSet = getRangeSet(":dels");
            const {
              type: type2
            } = req;
            let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
            const oldCache = req.trans["_cache"];
            return table.mutate(req).then(res => {
              if (isArray(keys2)) {
                if (type2 !== "delete") keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                const oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                const range = {
                  from: keys2.lower,
                  to: keys2.upper
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(idx => getRangeSet(idx.name).add(FULL_RANGE));
              }
              return res;
            });
          }
        };
        const getRange = ({
          query: {
            index,
            range
          }
        }) => {
          var _a, _b;
          return [index, new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)];
        };
        const readSubscribers = {
          get: req => [primaryKey, new RangeSet(req.key)],
          getMany: req => [primaryKey, new RangeSet().addKeys(req.keys)],
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach(method => {
          tableClone[method] = function (req) {
            const {
              subscr
            } = PSD;
            if (subscr) {
              const getRangeSet = indexName => {
                const part = `idb://${dbName}/${tableName}/${indexName}`;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              const pkRangeSet = getRangeSet("");
              const delsRangeSet = getRangeSet(":dels");
              const [queriedIndex, queriedRanges] = readSubscribers[method](req);
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet.add(FULL_RANGE);
                } else {
                  const keysPromise = method === "query" && outbound && req.values && table.query({
                    ...req,
                    values: false
                  });
                  return table[method].apply(this, arguments).then(res => {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise.then(({
                          result: resultingKeys
                        }) => {
                          pkRangeSet.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      const pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet.addKeys(pKeys);
                      } else {
                        delsRangeSet.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      const cursor = res;
                      const wantValues = req.values;
                      return cursor && Object.create(cursor, {
                        key: {
                          get() {
                            delsRangeSet.addKey(cursor.primaryKey);
                            return cursor.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const pkey = cursor.primaryKey;
                            delsRangeSet.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get() {
                            wantValues && pkRangeSet.addKey(cursor.primaryKey);
                            return cursor.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    };
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    const rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    const addKeyOrKeys = key => ix.multiEntry && isArray(key) ? key.forEach(key2 => rangeSet.addKey(key2)) : rangeSet.addKey(key);
    (oldObjs || newObjs).forEach((_, i) => {
      const oldKey = oldObjs && extractKey(oldObjs[i]);
      const newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null) addKeyOrKeys(oldKey);
        if (newKey != null) addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = class {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = Dexie$1.dependencies;
    this._options = options = {
      addons: Dexie$1.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange,
      ...options
    };
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    const {
      addons
    } = options;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", {
      ready: [promisableChain, nop]
    });
    this.on.ready.subscribe = override(this.on.ready.subscribe, subscribe => {
      return (subscriber, bSticky) => {
        Dexie$1.vip(() => {
          const state2 = this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError) DexiePromise.resolve().then(subscriber);
            if (bSticky) subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky) subscribe(subscriber);
          } else {
            subscribe(subscriber);
            const db = this;
            if (!bSticky) subscribe(function unsubscribe() {
              db.on.ready.unsubscribe(subscriber);
              db.on.ready.unsubscribe(unsubscribe);
            });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", ev => {
      if (ev.newVersion > 0) console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);else console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      this.close();
    });
    this.on("blocked", ev => {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn(`Dexie.delete('${this.name}') was blocked`);else console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
    this._fireOnBlocked = ev => {
      this.on("blocked").fire(ev);
      connections.filter(c => c.name === this.name && c !== this && !c._state.vcFired).map(c => c.on("versionchange").fire(ev));
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    addons.forEach(addon => addon(this));
  }
  version(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type(`Given version is not a positive number`);
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    const versions = this._versions;
    var versionInstance = versions.filter(v => v._cfg.version === versionNumber)[0];
    if (versionInstance) return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  }
  _whenReady(fn) {
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
      if (this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
      }
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        this.open().catch(nop);
      }
      this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }
  use({
    stack,
    create,
    level,
    name
  }) {
    if (name) this.unuse({
      stack,
      name
    });
    const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({
      stack,
      create,
      level: level == null ? 10 : level,
      name
    });
    middlewares.sort((a, b) => a.level - b.level);
    return this;
  }
  unuse({
    stack,
    name,
    create
  }) {
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(mw => create ? mw.create !== create : name ? mw.name !== name : false);
    }
    return this;
  }
  open() {
    return dexieOpen(this);
  }
  _close() {
    const state = this._state;
    const idx = connections.indexOf(this);
    if (idx >= 0) connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {}
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
  }
  close() {
    this._close();
    const state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
  }
  delete() {
    const hasArguments = arguments.length > 0;
    const state = this._state;
    return new DexiePromise((resolve, reject) => {
      const doDelete = () => {
        this.close();
        var req = this._deps.indexedDB.deleteDatabase(this.name);
        req.onsuccess = wrap(() => {
          _onDatabaseDeleted(this._deps, this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = this._fireOnBlocked;
      };
      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return keys(this._allTables).map(name => this._allTables[name]);
  }
  transaction() {
    const args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  }
  _transaction(mode, tables, scopeFunc) {
    let parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) parentTransaction = null;
    const onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    let idbMode, storeNames;
    try {
      storeNames = tables.map(table => {
        var storeName = table instanceof this.Table ? table.name : table;
        if (typeof storeName !== "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(storeName => {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, (_, reject) => {
        reject(e);
      }) : rejection(e);
    }
    const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
  }
  table(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
    }
    return this._allTables[tableName];
  }
};
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = class {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  subscribe(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? {
      next: x,
      error,
      complete
    } : x);
  }
  [symbolObservable]() {
    return this;
  }
};
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(part => {
    const rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  let hasValue = false;
  let currentValue = void 0;
  const observable = new Observable(observer => {
    const scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      const exec = () => newScope(querier, {
        subscr,
        trans: null
      });
      const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    let closed = false;
    let accumMuts = {};
    let currentObs = {};
    const subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: () => {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    let querying = false,
      startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(key => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
    }
    const mutationListener = parts => {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    const doQuery = () => {
      if (querying || closed) return;
      accumMuts = {};
      const subscr = {};
      const ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(result => {
        hasValue = true;
        currentValue = result;
        querying = false;
        if (closed) return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, err => {
        querying = false;
        hasValue = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
  observable.hasValue = () => hasValue;
  observable.getValue = () => currentValue;
  return observable;
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
var Dexie = Dexie$1;
props(Dexie, {
  ...fullNameExceptions,
  delete(databaseName) {
    const db = new Dexie(databaseName, {
      addons: []
    });
    return db.delete();
  },
  exists(name) {
    return new Dexie(name, {
      addons: []
    }).open().then(db => {
      db.close();
      return true;
    }).catch("NoSuchDatabaseError", () => false);
  },
  getDatabaseNames(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: () => PSD.trans || null
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: () => debug,
    set: value => {
      setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(n => parseInt(n)).reduce((p, c, i) => p + c / Math.pow(10, i * 2))
});
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, updatedParts => {
    if (!propagatingLocally) {
      let event;
      if (isIEOrEdge) {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({
    detail
  }) => {
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  let wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  if (typeof bc.unref === "function") {
    bc.unref();
  }
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    if (!propagatingLocally) {
      bc.postMessage(changedParts);
    }
  });
  bc.onmessage = ev => {
    if (ev.data) propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          [...self["clients"].matchAll({
            includeUncontrolled: true
          })].forEach(client => client.postMessage({
            type: STORAGE_MUTATED_DOM_EVENT_NAME,
            changedParts
          }));
        }
      }
    } catch (_a) {}
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", ev => {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        const data = JSON.parse(ev.newValue);
        if (data) propagateLocally(data.changedParts);
      }
    });
  }
  const swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally({
  data
}) {
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

// .beyond/uimport/temp/dexie.3.2.7.js
var dexie_3_2_7_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2RleGllLjMuMi43LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL3V0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2RlYnVnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9lcnJvcnMvZXJyb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvY2hhaW5pbmctZnVuY3Rpb25zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy90ZW1wLXRyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbWJpbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9rZXlyYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL3dvcmthcm91bmQtdW5kZWZpbmVkLXByaW1rZXkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvRXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvbWFrZS1jbGFzcy1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy90YWJsZS90YWJsZS1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NtcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvY29tcGFyZS1mdW5jdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvd2hlcmUtY2xhdXNlL3doZXJlLWNsYXVzZS1oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvd2hlcmUtY2xhdXNlL3doZXJlLWNsYXVzZS1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2V2ZW50LXdyYXBwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2dsb2JhbC1ldmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24tY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvaW5kZXgtc3BlYy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy90YWJsZS1zY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9xdWlya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9nZXQta2V5LWV4dHJhY3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2RiY29yZS1pbmRleGVkZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZ2VuZXJhdGUtbWlkZGxld2FyZS1zdGFja3MudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi9zY2hlbWEtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy92ZXJzaW9uL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2RhdGFiYXNlLWVudW1lcmF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdmlwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL25vZGVfbW9kdWxlcy9zYWZhcmktMTQtaWRiLWZpeC9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLW9wZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMveWllbGQtc3VwcG9ydC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS90cmFuc2FjdGlvbi1oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvdmlydHVhbC1pbmRleC1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvZ2V0LW9iamVjdC1kaWZmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWVmZmVjdGl2ZS1rZXlzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9ob29rcy9ob29rcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvY2FjaGUtZXhpc3RpbmctdmFsdWVzLW1pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvcmFuZ2VzZXQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvb2JzZXJ2YWJpbGl0eS1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL29ic2VydmFibGUvb2JzZXJ2YWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9leHRlbmQtb2JzZXJ2YWJpbGl0eS1zZXQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvbGl2ZS1xdWVyeS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1kb20tZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLXN0YXRpYy1wcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9wcm9wYWdhdGUtbG9jYWxseS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9lbmFibGUtYnJvYWRjYXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkZXhpZV8zXzJfN19leHBvcnRzIiwiX19leHBvcnQiLCJEZXhpZSIsIkRleGllJDEiLCJSYW5nZVNldCIsImRlZmF1bHQiLCJkZXhpZV8zXzJfN19kZWZhdWx0IiwibGl2ZVF1ZXJ5IiwibWVyZ2VSYW5nZXMiLCJyYW5nZXNPdmVybGFwIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9nbG9iYWwiLCJnbG9iYWxUaGlzIiwic2VsZiIsIndpbmRvdyIsImdsb2JhbCIsImtleXMiLCJPYmplY3QiLCJpc0FycmF5IiwiQXJyYXkiLCJQcm9taXNlIiwiZXh0ZW5kIiwib2JqIiwiZXh0ZW5zaW9uIiwiZm9yRWFjaCIsImtleSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJwcm9wIiwiY2FsbCIsInByb3BzIiwicHJvdG8iLCJSZWZsZWN0Iiwib3duS2V5cyIsInNldFByb3AiLCJkZWZpbmVQcm9wZXJ0eSIsImZ1bmN0aW9uT3JHZXRTZXQiLCJvcHRpb25zIiwiZ2V0Iiwic2V0IiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJ3cml0YWJsZSIsImRlcml2ZSIsIkNoaWxkIiwiZnJvbSIsIlBhcmVudCIsInByb3RvdHlwZSIsImNyZWF0ZSIsImJpbmQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eURlc2NyaXB0b3IiLCJwZCIsIl9zbGljZSIsInNsaWNlIiwiYXJncyIsInN0YXJ0IiwiZW5kIiwib3ZlcnJpZGUiLCJvcmlnRnVuYyIsIm92ZXJyaWRlZEZhY3RvcnkiLCJhc3NlcnQiLCJiIiwiRXJyb3IiLCJhc2FwJDEiLCJmbiIsInNldEltbWVkaWF0ZSIsInNldFRpbWVvdXQiLCJhcnJheVRvT2JqZWN0IiwiYXJyYXkiLCJleHRyYWN0b3IiLCJyZWR1Y2UiLCJyZXN1bHQiLCJpdGVtIiwiaSIsIm5hbWVBbmRWYWx1ZSIsInRyeUNhdGNoIiwib25lcnJvciIsImFwcGx5IiwiZXgiLCJnZXRCeUtleVBhdGgiLCJrZXlQYXRoIiwicnYiLCJsIiwibGVuZ3RoIiwidmFsIiwicHVzaCIsInBlcmlvZCIsImluZGV4T2YiLCJpbm5lck9iaiIsInN1YnN0ciIsInNldEJ5S2V5UGF0aCIsImlzRnJvemVuIiwiY3VycmVudEtleVBhdGgiLCJyZW1haW5pbmdLZXlQYXRoIiwiaXNOYU4iLCJwYXJzZUludCIsInNwbGljZSIsImRlbEJ5S2V5UGF0aCIsIm1hcCIsImtwIiwic2hhbGxvd0Nsb25lIiwibSIsImNvbmNhdCIsImZsYXR0ZW4iLCJhIiwiaW50cmluc2ljVHlwZU5hbWVzIiwic3BsaXQiLCJudW0iLCJ0IiwiZmlsdGVyIiwiaW50cmluc2ljVHlwZXMiLCJ4IiwiY2lyY3VsYXJSZWZzIiwiZGVlcENsb25lIiwiYW55IiwiV2Vha01hcCIsImlubmVyRGVlcENsb25lIiwiY29uc3RydWN0b3IiLCJ0b1N0cmluZyIsInRvU3RyaW5nVGFnIiwibyIsIml0ZXJhdG9yU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJnZXRJdGVyYXRvck9mIiwiTk9fQ0hBUl9BUlJBWSIsImdldEFycmF5T2YiLCJhcnJheUxpa2UiLCJpdCIsImFyZ3VtZW50cyIsIm5leHQiLCJkb25lIiwiaXNBc3luY0Z1bmN0aW9uIiwiZGVidWciLCJsb2NhdGlvbiIsInRlc3QiLCJocmVmIiwic2V0RGVidWciLCJsaWJyYXJ5RmlsdGVyIiwiTkVFRFNfVEhST1dfRk9SX1NUQUNLIiwic3RhY2siLCJnZXRFcnJvcldpdGhTdGFjayIsImUiLCJwcmV0dHlTdGFjayIsImV4Y2VwdGlvbiIsIm51bUlnbm9yZWRGcmFtZXMiLCJuYW1lIiwibWVzc2FnZSIsImZyYW1lIiwiam9pbiIsImRleGllRXJyb3JOYW1lcyIsImlkYkRvbUVycm9yTmFtZXMiLCJlcnJvckxpc3QiLCJkZWZhdWx0VGV4dHMiLCJWZXJzaW9uQ2hhbmdlZCIsIkRhdGFiYXNlQ2xvc2VkIiwiQWJvcnQiLCJUcmFuc2FjdGlvbkluYWN0aXZlIiwiTWlzc2luZ0FQSSIsIkRleGllRXJyb3IiLCJtc2ciLCJfZSIsIl9zdGFjayIsImdldE11bHRpRXJyb3JNZXNzYWdlIiwiZmFpbHVyZXMiLCJ2IiwicyIsIk1vZGlmeUVycm9yIiwic3VjY2Vzc0NvdW50IiwiZmFpbGVkS2V5cyIsIkJ1bGtFcnJvciIsInBvcyIsImZhaWx1cmVzQnlQb3MiLCJlcnJuYW1lcyIsIkJhc2VFeGNlcHRpb24iLCJleGNlcHRpb25zIiwiZnVsbE5hbWUiLCJEZXhpZUVycm9yMiIsIm1zZ09ySW5uZXIiLCJpbm5lciIsIlN5bnRheCIsIlN5bnRheEVycm9yIiwiVHlwZSIsIlR5cGVFcnJvciIsIlJhbmdlIiwiUmFuZ2VFcnJvciIsImV4Y2VwdGlvbk1hcCIsIm1hcEVycm9yIiwiZG9tRXJyb3IiLCJmdWxsTmFtZUV4Y2VwdGlvbnMiLCJub3AiLCJtaXJyb3IiLCJwdXJlRnVuY3Rpb25DaGFpbiIsImYxIiwiZjIiLCJjYWxsQm90aCIsIm9uMSIsIm9uMiIsImhvb2tDcmVhdGluZ0NoYWluIiwicmVzIiwib25zdWNjZXNzIiwicmVzMiIsImhvb2tEZWxldGluZ0NoYWluIiwiaG9va1VwZGF0aW5nQ2hhaW4iLCJtb2RpZmljYXRpb25zIiwicmV2ZXJzZVN0b3BwYWJsZUV2ZW50Q2hhaW4iLCJwcm9taXNhYmxlQ2hhaW4iLCJ0aGVuIiwidGhpeiIsIklOVEVSTkFMIiwiTE9OR19TVEFDS1NfQ0xJUF9MSU1JVCIsIk1BWF9MT05HX1NUQUNLUyIsIlpPTkVfRUNIT19MSU1JVCIsInJlc29sdmVkTmF0aXZlUHJvbWlzZSIsIm5hdGl2ZVByb21pc2VQcm90byIsInJlc29sdmVkR2xvYmFsUHJvbWlzZSIsImdsb2JhbFAiLCJyZXNvbHZlIiwiY3J5cHRvIiwic3VidGxlIiwibmF0aXZlUCIsImRpZ2VzdCIsIlVpbnQ4QXJyYXkiLCJuYXRpdmVQcm9taXNlVGhlbiIsIk5hdGl2ZVByb21pc2UiLCJwYXRjaEdsb2JhbFByb21pc2UiLCJzdGFja19iZWluZ19nZW5lcmF0ZWQiLCJzY2hlZHVsZVBoeXNpY2FsVGljayIsInBoeXNpY2FsVGljayIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJoaWRkZW5EaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsImFzYXAiLCJjYWxsYmFjayIsIm1pY3JvdGlja1F1ZXVlIiwibmVlZHNOZXdQaHlzaWNhbFRpY2siLCJpc091dHNpZGVNaWNyb1RpY2siLCJ1bmhhbmRsZWRFcnJvcnMiLCJyZWplY3RpbmdFcnJvcnMiLCJjdXJyZW50RnVsZmlsbGVyIiwicmVqZWN0aW9uTWFwcGVyIiwiZ2xvYmFsUFNEIiwiaWQiLCJyZWYiLCJ1bmhhbmRsZWRzIiwib251bmhhbmRsZWQiLCJnbG9iYWxFcnJvciIsInBncCIsImVudiIsImZpbmFsaXplIiwidWgiLCJQU0QiLCJudW1TY2hlZHVsZWRDYWxscyIsInRpY2tGaW5hbGl6ZXJzIiwiRGV4aWVQcm9taXNlIiwiX2xpc3RlbmVycyIsIm9udW5jYXRjaGVkIiwiX2xpYiIsInBzZCIsIl9QU0QiLCJfc3RhY2tIb2xkZXIiLCJfcHJldiIsIl9udW1QcmV2IiwiX3N0YXRlIiwiX3ZhbHVlIiwiaGFuZGxlUmVqZWN0aW9uIiwiZXhlY3V0ZVByb21pc2VUYXNrIiwidGhlblByb3AiLCJtaWNyb1Rhc2tJZCIsInRvdGFsRWNob2VzIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicG9zc2libGVBd2FpdCIsImNsZWFudXAiLCJkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cyIsInJlamVjdCIsInByb3BhZ2F0ZVRvTGlzdGVuZXIiLCJMaXN0ZW5lciIsIm5hdGl2ZUF3YWl0Q29tcGF0aWJsZVdyYXAiLCJsaW5rVG9QcmV2aW91c1Byb21pc2UiLCJfdGhlbiIsImNhdGNoIiwidHlwZTIiLCJoYW5kbGVyIiwiZXJyIiwiUHJvbWlzZVJlamVjdCIsImZpbmFsbHkiLCJvbkZpbmFsbHkiLCJzdGFja3MiLCJnZXRTdGFjayIsInRpbWVvdXQiLCJtcyIsIkluZmluaXR5IiwiaGFuZGxlIiwiVGltZW91dCIsImNsZWFyVGltZW91dCIsInNuYXBTaG90Iiwiem9uZSIsImFsbCIsInZhbHVlcyIsIm9uUG9zc2libGVQYXJhbGxlbGxBc3luYyIsInJlbWFpbmluZyIsInJhY2UiLCJuZXdQU0QiLCJuZXdTY29wZSIsInVzZVBTRCIsInNjaGVkdWxlciIsImZvbGxvdyIsInpvbmVQcm9wcyIsInJlc29sdmUyIiwicmVqZWN0MiIsInJ1bl9hdF9lbmRfb2ZfdGhpc19vcl9uZXh0X3BoeXNpY2FsX3RpY2siLCJhbGxTZXR0bGVkIiwicG9zc2libGVQcm9taXNlcyIsInJlc3VsdHMiLCJwIiwic3RhdHVzIiwicmVhc29uIiwiQWdncmVnYXRlRXJyb3IiLCJmYWlsdXJlIiwicHJvbWlzZSIsInNob3VsZEV4ZWN1dGVUaWNrIiwiYmVnaW5NaWNyb1RpY2tTY29wZSIsInByb3BhZ2F0ZUFsbExpc3RlbmVycyIsImVuZE1pY3JvVGlja1Njb3BlIiwiX3Byb21pc2UiLCJvcmlnUHJvcCIsImFkZFBvc3NpYmx5VW5oYW5kbGVkRXJyb3IiLCJsaXN0ZW5lcnMiLCJsZW4iLCJmaW5hbGl6ZVBoeXNpY2FsVGljayIsImxpc3RlbmVyIiwiY2IiLCJjYWxsTGlzdGVuZXIiLCJyZXQiLCJtYXJrRXJyb3JBc0hhbmRsZWQiLCJsaW1pdCIsImVycm9yTmFtZSIsInByZXYiLCJudW1QcmV2Iiwid2FzUm9vdEV4ZWMiLCJjYWxsYmFja3MiLCJ1bmhhbmRsZWRFcnJzIiwiZmluYWxpemVycyIsImZpbmFsaXplciIsInNvbWUiLCJ3cmFwIiwiZXJyb3JDYXRjaGVyIiwib3V0ZXJTY29wZSIsInN3aXRjaFRvWm9uZSIsInRhc2siLCJhd2FpdHMiLCJlY2hvZXMiLCJ0YXNrQ291bnRlciIsInpvbmVTdGFjayIsInpvbmVFY2hvZXMiLCJ6b25lX2lkX2NvdW50ZXIiLCJwcm9wczIiLCJhMSIsImEyIiwicGFyZW50IiwiZ2xvYmFsRW52IiwiUHJvbWlzZVByb3AiLCJudGhlbiIsImdldFBhdGNoZWRQcm9taXNlVGhlbiIsImd0aGVuIiwiaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJwb3NzaWJsZVByb21pc2UiLCJyZWplY3Rpb24iLCJ6b25lRW50ZXJFY2hvIiwidGFyZ2V0Wm9uZSIsInpvbmVMZWF2ZUVjaG8iLCJwb3AiLCJiRW50ZXJpbmdab25lIiwiY3VycmVudFpvbmUiLCJlbnF1ZXVlTmF0aXZlTWljcm9UYXNrIiwiR2xvYmFsUHJvbWlzZSIsInRhcmdldEVudiIsImEzIiwiam9iIiwib3V0ZXJab25lIiwib3JpZ1RoZW4iLCJvblJlc29sdmVkIiwiVU5IQU5ETEVEUkVKRUNUSU9OIiwiZXZlbnQiLCJldmVudERhdGEiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwiXyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb25zb2xlIiwid2FybiIsInRlbXBUcmFuc2FjdGlvbiIsImRiIiwibW9kZSIsInN0b3JlTmFtZXMiLCJpZGJkYiIsIm9wZW5Db21wbGV0ZSIsImxldFRocm91Z2giLCJfdmlwIiwiZGJPcGVuRXJyb3IiLCJpc0JlaW5nT3BlbmVkIiwiX29wdGlvbnMiLCJhdXRvT3BlbiIsIm9wZW4iLCJkYlJlYWR5UHJvbWlzZSIsInRyYW5zIiwiX2NyZWF0ZVRyYW5zYWN0aW9uIiwiX2RiU2NoZW1hIiwiUFIxMzk4X21heExvb3AiLCJJbnZhbGlkU3RhdGUiLCJpc09wZW4iLCJfY2xvc2UiLCJfY29tcGxldGlvbiIsIkRFWElFX1ZFUlNJT04iLCJtYXhTdHJpbmciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5LZXkiLCJJTlZBTElEX0tFWV9BUkdVTUVOVCIsIlNUUklOR19FWFBFQ1RFRCIsImNvbm5lY3Rpb25zIiwiaXNJRU9yRWRnZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhhc0lFRGVsZXRlT2JqZWN0U3RvcmVCdWciLCJoYW5nc09uRGVsZXRlTGFyZ2VLZXlSYW5nZSIsImRleGllU3RhY2tGcmFtZUZpbHRlciIsIkRCTkFNRVNfREIiLCJSRUFET05MWSIsIlJFQURXUklURSIsImNvbWJpbmUiLCJmaWx0ZXIxIiwiZmlsdGVyMiIsIkFueVJhbmdlIiwidHlwZSIsImxvd2VyIiwibG93ZXJPcGVuIiwidXBwZXIiLCJ1cHBlck9wZW4iLCJ3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleSIsIlRhYmxlIiwiX3RyYW5zIiwid3JpdGVMb2NrZWQiLCJfdHgiLCJ0YWJsZU5hbWUiLCJjaGVja1RhYmxlSW5UcmFuc2FjdGlvbiIsInRyYW5zMiIsInNjaGVtYSIsIk5vdEZvdW5kIiwiaWRidHJhbnMiLCJ0cmFuc2xlc3MiLCJrZXlPckNyaXQiLCJ3aGVyZSIsImZpcnN0IiwiY29yZSIsImhvb2siLCJyZWFkaW5nIiwiZmlyZSIsImluZGV4T3JDcml0IiwiV2hlcmVDbGF1c2UiLCJrZXlQYXRocyIsImVxdWFscyIsImNvbXBvdW5kSW5kZXgiLCJpbmRleGVzIiwicHJpbUtleSIsIml4IiwiY29tcG91bmQiLCJldmVyeSIsInNvcnQiLCJfbWF4S2V5Iiwia2V5UGF0aHNJblZhbGlkT3JkZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiaWR4QnlOYW1lIiwiaWRiIiwiX2RlcHMiLCJpbmRleGVkREIiLCJjbXAiLCJpZHgiLCJmaWx0ZXJGdW5jdGlvbiIsInByZXZJbmRleCIsInByZXZGaWx0ZXJGbiIsImluZGV4IiwibXVsdGkiLCJ0b0NvbGxlY3Rpb24iLCJhbmQiLCJjb3VudCIsInRoZW5TaG9ydGN1dCIsIm9mZnNldCIsIm51bVJvd3MiLCJlYWNoIiwidG9BcnJheSIsIkNvbGxlY3Rpb24iLCJvcmRlckJ5IiwicmV2ZXJzZSIsIm1hcFRvQ2xhc3MiLCJtYXBwZWRDbGFzcyIsInJlYWRIb29rIiwidW5zdWJzY3JpYmUiLCJkZWZpbmVDbGFzcyIsIkNsYXNzIiwiY29udGVudCIsImFkZCIsImF1dG8iLCJvYmpUb0FkZCIsIm11dGF0ZSIsIm51bUZhaWx1cmVzIiwibGFzdFJlc3VsdCIsInVwZGF0ZSIsImtleU9yT2JqZWN0IiwiSW52YWxpZEFyZ3VtZW50IiwiX2EiLCJtb2RpZnkiLCJwdXQiLCJkZWxldGUiLCJjbGVhciIsInJhbmdlIiwiYnVsa0dldCIsImtleXMyIiwiZ2V0TWFueSIsImJ1bGtBZGQiLCJvYmplY3RzIiwia2V5c09yT3B0aW9ucyIsIndhbnRSZXN1bHRzIiwiYWxsS2V5cyIsIm51bU9iamVjdHMiLCJvYmplY3RzVG9BZGQiLCJidWxrUHV0Iiwib2JqZWN0c1RvUHV0IiwiYnVsa0RlbGV0ZSIsIm51bUtleXMiLCJFdmVudHMiLCJjdHgiLCJldnMiLCJldmVudE5hbWUiLCJzdWJzY3JpYmVyIiwiaTIiLCJzdWJzY3JpYmUiLCJhZGRFdmVudFR5cGUiLCJjaGFpbkZ1bmN0aW9uIiwiZGVmYXVsdEZ1bmN0aW9uIiwiYWRkQ29uZmlndXJlZEV2ZW50cyIsImNvbnRleHQiLCJzdWJzY3JpYmVycyIsImNmZyIsImFyZ3MyIiwiZmlyZUV2ZW50IiwibWFrZUNsYXNzQ29uc3RydWN0b3IiLCJjcmVhdGVUYWJsZUNvbnN0cnVjdG9yIiwiVGFibGUyIiwidGFibGVTY2hlbWEiLCJfYWxsVGFibGVzIiwiaXNQbGFpbktleVJhbmdlIiwiaWdub3JlTGltaXRGaWx0ZXIiLCJhbGdvcml0aG0iLCJvciIsImp1c3RMaW1pdCIsInJlcGxheUZpbHRlciIsImFkZEZpbHRlciIsImFkZFJlcGxheUZpbHRlciIsImZhY3RvcnkiLCJpc0xpbWl0RmlsdGVyIiwiY3VyciIsImFkZE1hdGNoRmlsdGVyIiwiaXNNYXRjaCIsImdldEluZGV4T3JTdG9yZSIsImNvcmVTY2hlbWEiLCJpc1ByaW1LZXkiLCJwcmltYXJ5S2V5IiwiZ2V0SW5kZXhCeUtleVBhdGgiLCJTY2hlbWEiLCJvcGVuQ3Vyc29yIiwiY29yZVRhYmxlIiwia2V5c09ubHkiLCJkaXIiLCJ1bmlxdWUiLCJxdWVyeSIsIml0ZXIiLCJjb3JlVHJhbnMiLCJpdGVyYXRlIiwidmFsdWVNYXBwZXIiLCJ1bmlvbiIsImN1cnNvciIsImFkdmFuY2UiLCJzdG9wIiwiZmFpbCIsIl9pdGVyYXRlIiwiY3Vyc29yUHJvbWlzZSIsIm1hcHBlZEZuIiwiYyIsIndyYXBwZWRGbiIsImNvbnRpbnVlIiwiYWR2YW5jZXIiLCJ0YSIsInRiIiwiTmFOIiwiY29tcGFyZVVpbnQ4QXJyYXlzIiwiZ2V0VWludDhBcnJheSIsImNvbXBhcmVBcnJheXMiLCJhbCIsImJsIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJ0c1RhZyIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiX3JlYWQiLCJfY3R4IiwiZXJyb3IiLCJ0YWJsZSIsIl93cml0ZSIsIl9hZGRBbGdvcml0aG0iLCJjbG9uZSIsInJhdyIsImNvdW50MiIsIk1hdGgiLCJtaW4iLCJzb3J0QnkiLCJwYXJ0cyIsImxhc3RQYXJ0IiwibGFzdEluZGV4IiwiZ2V0dmFsIiwib3JkZXIiLCJzb3J0ZXIiLCJhVmFsIiwiYlZhbCIsIm9mZnNldExlZnQiLCJyb3dzTGVmdCIsInVudGlsIiwiYkluY2x1ZGVTdG9wRW50cnkiLCJsYXN0IiwiaW5kZXhOYW1lIiwiX29uZGlyZWN0aW9uY2hhbmdlIiwiZGVzYyIsImVhY2hLZXkiLCJlYWNoVW5pcXVlS2V5IiwiZWFjaFByaW1hcnlLZXkiLCJwcmltYXJ5S2V5cyIsInVuaXF1ZUtleXMiLCJmaXJzdEtleSIsImxhc3RLZXkiLCJkaXN0aW5jdCIsInN0cktleSIsImZvdW5kIiwiY2hhbmdlcyIsIm1vZGlmeWVyIiwiYW55dGhpbmdNb2RpZmllZCIsIm91dGJvdW5kIiwiZXh0cmFjdEtleSIsIm1vZGlmeUNodW5rU2l6ZSIsInRvdGFsRmFpbHVyZXMiLCJhcHBseU11dGF0ZVJlc3VsdCIsImV4cGVjdGVkQ291bnQiLCJuZXh0Q2h1bmsiLCJjYWNoZSIsImFkZFZhbHVlcyIsInB1dFZhbHVlcyIsInB1dEtleXMiLCJkZWxldGVLZXlzIiwib3JpZ1ZhbHVlIiwiY3R4MiIsImNyaXRlcmlhIiwiZGVsZXRlQ2FsbGJhY2siLCJjaGFuZ2VTcGVjIiwiY29yZVJhbmdlIiwiY3JlYXRlQ29sbGVjdGlvbkNvbnN0cnVjdG9yIiwiQ29sbGVjdGlvbjIiLCJ3aGVyZUNsYXVzZSIsImtleVJhbmdlR2VuZXJhdG9yIiwia2V5UmFuZ2UiLCJ3aGVyZUN0eCIsInJlYWRpbmdIb29rIiwic2ltcGxlQ29tcGFyZSIsInNpbXBsZUNvbXBhcmVSZXZlcnNlIiwiY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UiLCJUIiwiY29sbGVjdGlvbiIsImVtcHR5Q29sbGVjdGlvbiIsInJhbmdlRXF1YWwiLCJ1cHBlckZhY3RvcnkiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibG93ZXJGYWN0b3J5IiwibmV4dENhc2luZyIsImxvd2VyS2V5IiwidXBwZXJOZWVkbGUiLCJsb3dlck5lZWRsZSIsImNtcDIiLCJsbHAiLCJsd3JLZXlDaGFyIiwiYWRkSWdub3JlQ2FzZUFsZ29yaXRobSIsIm1hdGNoIiwibmVlZGxlcyIsInN1ZmZpeCIsImNvbXBhcmUiLCJ1cHBlck5lZWRsZXMiLCJsb3dlck5lZWRsZXMiLCJkaXJlY3Rpb24iLCJuZXh0S2V5U3VmZml4IiwibmVlZGxlc0xlbiIsImluaXREaXJlY3Rpb24iLCJuZWVkbGVCb3VuZHMiLCJuZWVkbGUiLCJuYiIsImNyZWF0ZVJhbmdlIiwiZGlyZWN0aW9uMiIsImZpcnN0UG9zc2libGVOZWVkbGUiLCJsb3dlc3RQb3NzaWJsZUNhc2luZyIsImNhc2luZyIsImJldHdlZW4iLCJpbmNsdWRlTG93ZXIiLCJpbmNsdWRlVXBwZXIiLCJfY21wIiwiYWJvdmUiLCJhYm92ZU9yRXF1YWwiLCJiZWxvdyIsImJlbG93T3JFcXVhbCIsInN0YXJ0c1dpdGgiLCJzdHIiLCJzdGFydHNXaXRoSWdub3JlQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2UiLCJhbnlPZklnbm9yZUNhc2UiLCJzdGFydHNXaXRoQW55T2ZJZ25vcmVDYXNlIiwibiIsImFueU9mIiwiX2FzY2VuZGluZyIsIl9kZXNjZW5kaW5nIiwibm90RXF1YWwiLCJpbkFueVJhbmdlIiwiaW5jbHVkZUxvd2VycyIsImluY2x1ZGVVcHBlcnMiLCJub25lT2YiLCJyYW5nZXMiLCJhc2NlbmRpbmciLCJkZXNjZW5kaW5nIiwiX21pbiIsIm1heCIsIl9tYXgiLCJhZGRSYW5nZTIiLCJyYW5nZXMyIiwibmV3UmFuZ2UiLCJzb3J0RGlyZWN0aW9uIiwicmFuZ2VTb3J0ZXIiLCJyYW5nZVBvcyIsImtleUlzQmV5b25kQ3VycmVudEVudHJ5Iiwia2V5SXNCZWZvcmVDdXJyZW50RW50cnkiLCJrZXlXaXRoaW5DdXJyZW50UmFuZ2UiLCJjaGVja0tleSIsInN0YXJ0c1dpdGhBbnlPZiIsImNyZWF0ZVdoZXJlQ2xhdXNlQ29uc3RydWN0b3IiLCJXaGVyZUNsYXVzZTIiLCJvckNvbGxlY3Rpb24iLCJpbmRleGVkREIyIiwiX0lEQktleVJhbmdlIiwiSURCS2V5UmFuZ2UiLCJldmVudFJlamVjdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInN0b3BQcm9wYWdhdGlvbiIsIkRFWElFX1NUT1JBR0VfTVVUQVRFRF9FVkVOVF9OQU1FIiwiU1RPUkFHRV9NVVRBVEVEX0RPTV9FVkVOVF9OQU1FIiwiZ2xvYmFsRXZlbnRzIiwiVHJhbnNhY3Rpb24iLCJfbG9jayIsIl9yZWN1bG9jayIsImxvY2tPd25lckZvciIsIl91bmxvY2siLCJfYmxvY2tlZEZ1bmNzIiwiX2xvY2tlZCIsImZuQW5kUFNEIiwic2hpZnQiLCJPcGVuRmFpbGVkIiwiYWN0aXZlIiwidHJhbnNhY3Rpb24iLCJkdXJhYmlsaXR5IiwiY2hyb21lVHJhbnNhY3Rpb25EdXJhYmlsaXR5IiwiZXYiLCJfcmVqZWN0Iiwib25hYm9ydCIsIm9uIiwib25jb21wbGV0ZSIsIl9yZXNvbHZlIiwic3RvcmFnZW11dGF0ZWQiLCJiV3JpdGVMb2NrIiwiUmVhZE9ubHkiLCJwMiIsIl9yb290Iiwid2FpdEZvciIsInByb21pc2VMaWtlIiwicm9vdCIsIl93YWl0aW5nRm9yIiwiX3dhaXRpbmdRdWV1ZSIsInN0b3JlIiwib2JqZWN0U3RvcmUiLCJzcGluIiwiX3NwaW5Db3VudCIsImN1cnJlbnRXYWl0UHJvbWlzZSIsImFib3J0IiwibWVtb2l6ZWRUYWJsZXMiLCJfbWVtb2l6ZWRUYWJsZXMiLCJ0cmFuc2FjdGlvbkJvdW5kVGFibGUiLCJjcmVhdGVUcmFuc2FjdGlvbkNvbnN0cnVjdG9yIiwiVHJhbnNhY3Rpb24yIiwiZGJzY2hlbWEiLCJjb21wbGV0ZSIsIndhc0FjdGl2ZSIsImNyZWF0ZUluZGV4U3BlYyIsInNyYyIsIm5hbWVGcm9tS2V5UGF0aCIsImNyZWF0ZVRhYmxlU2NoZW1hIiwic2FmYXJpTXVsdGlTdG9yZUZpeCIsImdldE1heEtleSIsIklkYktleVJhbmdlIiwib25seSIsImdldEtleUV4dHJhY3RvciIsImdldFNpbmdsZVBhdGhLZXlFeHRyYWN0b3IiLCJhcnJheWlmeSIsIl9pZF9jb3VudGVyIiwiZ2V0S2V5UGF0aEFsaWFzIiwiY3JlYXRlREJDb3JlIiwidG1wVHJhbnMiLCJleHRyYWN0U2NoZW1hIiwiZGIyIiwidGFibGVzMiIsIm9iamVjdFN0b3JlTmFtZXMiLCJ0YWJsZXMiLCJhdXRvSW5jcmVtZW50IiwiaW5kZXhCeUtleVBhdGgiLCJpc1ByaW1hcnlLZXkiLCJpbmRleE5hbWVzIiwibXVsdGlFbnRyeSIsImtleVBhdGgyIiwiY29tcG91bmQyIiwicmVzdWx0MiIsImhhc0dldEFsbCIsIm1ha2VJREJLZXlSYW5nZSIsImlkYlJhbmdlIiwidXBwZXJCb3VuZCIsImxvd2VyQm91bmQiLCJib3VuZCIsImNyZWF0ZURiQ29yZVRhYmxlIiwiaXNBZGRPclB1dCIsInJlcSIsInJlcXMiLCJlcnJvckhhbmRsZXIiLCJhcmdzMSIsInJlcTIiLCJvcGVuQ3Vyc29yMiIsInF1ZXJ5MiIsInNvdXJjZSIsIm9wZW5LZXlDdXJzb3IiLCJfX19pZCIsIl9jdXJzb3JDb250aW51ZSIsIl9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkiLCJjb250aW51ZVByaW1hcnlLZXkiLCJfY3Vyc29yQWR2YW5jZSIsImRvVGhyb3dDdXJzb3JJc05vdFN0YXJ0ZWQiLCJkb1Rocm93Q3Vyc29ySXNTdG9wcGVkIiwiZ290T25lIiwiaXRlcmF0aW9uUHJvbWlzZSIsInJlc29sdmVJdGVyYXRpb24iLCJyZWplY3RJdGVyYXRpb24iLCJndWFyZGVkQ2FsbGJhY2siLCJldjIiLCJoYXNHZXRBbGwyIiwicmVxdWVzdCIsIm5vbkluZmluaXRMaW1pdCIsImlkYktleVJhbmdlIiwiZ2V0QWxsIiwiZ2V0QWxsS2V5cyIsImtleUNvdW50IiwiY2FsbGJhY2tDb3VudCIsInN1Y2Nlc3NIYW5kbGVyIiwiX3BvcyIsInRhYmxlTWFwIiwiTUlOX0tFWSIsIk1BWF9LRVkiLCJjcmVhdGVNaWRkbGV3YXJlU3RhY2siLCJzdGFja0ltcGwiLCJtaWRkbGV3YXJlcyIsImRvd24iLCJjcmVhdGVNaWRkbGV3YXJlU3RhY2tzIiwiZGJjb3JlIiwiZ2VuZXJhdGVNaWRkbGV3YXJlU3RhY2tzIiwiX25vdmlwIiwiX21pZGRsZXdhcmVzIiwidGJsIiwic2V0QXBpT25QbGFjZSIsIm9ianMiLCJ0YWJsZU5hbWVzIiwicHJvcERlc2MiLCJlbnVtZXJhYmxlIiwicmVtb3ZlVGFibGVzQXBpIiwibG93ZXJWZXJzaW9uRmlyc3QiLCJfY2ZnIiwidmVyc2lvbiIsInJ1blVwZ3JhZGVycyIsIm9sZFZlcnNpb24iLCJpZGJVcGdyYWRlVHJhbnMiLCJnbG9iYWxTY2hlbWEiLCJfc3RvcmVOYW1lcyIsInJlamVjdFRyYW5zYWN0aW9uIiwiY3JlYXRlVGFibGUiLCJwb3B1bGF0ZSIsInVwZGF0ZVRhYmxlc0FuZEluZGV4ZXMiLCJxdWV1ZSIsInZlcnNpb25zIiwiX3ZlcnNpb25zIiwiYnVpbGRHbG9iYWxTY2hlbWEiLCJhbnlDb250ZW50VXBncmFkZXJIYXNSdW4iLCJ2ZXJzVG9SdW4iLCJvbGRTY2hlbWEiLCJuZXdTY2hlbWEiLCJhZGp1c3RUb0V4aXN0aW5nSW5kZXhOYW1lcyIsImRpZmYiLCJnZXRTY2hlbWFEaWZmIiwidHVwbGUiLCJjaGFuZ2UiLCJyZWNyZWF0ZSIsIlVwZ3JhZGUiLCJhZGRJbmRleCIsImRlbGV0ZUluZGV4IiwiZGVsIiwiaWR4TmFtZSIsImNvbnRlbnRVcGdyYWRlIiwidXBncmFkZVNjaGVtYSIsImNvbnRlbnRVcGdyYWRlSXNBc3luYyIsInJldHVyblZhbHVlIiwicHJvbWlzZUZvbGxvd2VkIiwiZGVjcmVtZW50b3IiLCJkZWxldGVSZW1vdmVkVGFibGVzIiwicnVuUXVldWUiLCJjcmVhdGVNaXNzaW5nVGFibGVzIiwib2xkRGVmIiwibmV3RGVmIiwiZGVmIiwib2xkSW5kZXhlcyIsIm5ld0luZGV4ZXMiLCJvbGRJZHgiLCJuZXdJZHgiLCJjcmVhdGVPYmplY3RTdG9yZSIsImNvbnRhaW5zIiwic3RvcmVOYW1lIiwiZGVsZXRlT2JqZWN0U3RvcmUiLCJjcmVhdGVJbmRleCIsImRiU3RvcmVOYW1lcyIsImoiLCJpZGJpbmRleCIsInJlYWRHbG9iYWxTY2hlbWEiLCJ2ZXJubyIsInZlcmlmeUluc3RhbGxlZFNjaGVtYSIsImluc3RhbGxlZFNjaGVtYSIsImNoIiwiX2hhc0dldEFsbCIsImRleGllTmFtZSIsImluZGV4U3BlYyIsIldvcmtlckdsb2JhbFNjb3BlIiwicGFyc2VJbmRleFN5bnRheCIsInByaW1LZXlBbmRJbmRleGVzIiwiaW5kZXhOdW0iLCJ0cmltIiwicmVwbGFjZSIsIlZlcnNpb24iLCJfcGFyc2VTdG9yZXNTcGVjIiwic3RvcmVzIiwib3V0U2NoZW1hIiwic3RvcmVzU291cmNlIiwic3RvcmVzU3BlYyIsInVwZ3JhZGUiLCJ1cGdyYWRlRnVuY3Rpb24iLCJjcmVhdGVWZXJzaW9uQ29uc3RydWN0b3IiLCJWZXJzaW9uMiIsInZlcnNpb25OdW1iZXIiLCJnZXREYk5hbWVzVGFibGUiLCJkYk5hbWVzREIiLCJhZGRvbnMiLCJkYm5hbWVzIiwiaGFzRGF0YWJhc2VzTmF0aXZlIiwiZGF0YWJhc2VzIiwiZ2V0RGF0YWJhc2VOYW1lcyIsImluZm9zIiwiaW5mbyIsIl9vbkRhdGFiYXNlQ3JlYXRlZCIsIl9vbkRhdGFiYXNlRGVsZXRlZCIsInZpcCIsImlkYlJlYWR5IiwiaXNTYWZhcmkiLCJ1c2VyQWdlbnREYXRhIiwiaW50ZXJ2YWxJZCIsInRyeUlkYiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRleGllT3BlbiIsInN0YXRlIiwib3BlbkNhbmNlbGxlciIsInRocm93SWZDYW5jZWxsZWQiLCJyZXNvbHZlRGJSZWFkeSIsImRiUmVhZHlSZXNvbHZlIiwidXBncmFkZVRyYW5zYWN0aW9uIiwid2FzQ3JlYXRlZCIsInRyeU9wZW5EQiIsImRiTmFtZSIsImF1dG9TY2hlbWEiLCJyb3VuZCIsIm9uYmxvY2tlZCIsIl9maXJlT25CbG9ja2VkIiwib251cGdyYWRlbmVlZGVkIiwiYWxsb3dFbXB0eURCIiwiY2xvc2UiLCJkZWxyZXEiLCJkZWxldGVEYXRhYmFzZSIsIk5vU3VjaERhdGFiYXNlIiwib2xkVmVyIiwicG93Iiwib252ZXJzaW9uY2hhbmdlIiwidmNGaXJlZCIsIm9uY2xvc2UiLCJvblJlYWR5QmVpbmdGaXJlZCIsInJlYWR5IiwiZmlyZVJlbWFpbmRlcnMiLCJyZW1haW5kZXJzIiwiYXdhaXRJdGVyYXRvciIsImNhbGxOZXh0IiwiZG9UaHJvdyIsInRocm93Iiwib25TdWNjZXNzIiwic3RlcCIsIm9uRXJyb3IiLCJnZXROZXh0IiwiZXh0cmFjdFRyYW5zYWN0aW9uQXJncyIsIl90YWJsZUFyZ3NfIiwic2NvcGVGdW5jIiwiZW50ZXJUcmFuc2FjdGlvblNjb3BlIiwicGFyZW50VHJhbnNhY3Rpb24iLCJzY29wZUZ1bmNJc0FzeW5jIiwiUHJlbWF0dXJlQ29tbWl0IiwicGFkIiwiY3JlYXRlVmlydHVhbEluZGV4TWlkZGxld2FyZSIsImluZGV4TG9va3VwIiwiYWxsVmlydHVhbEluZGV4ZXMiLCJhZGRWaXJ0dWFsSW5kZXhlcyIsImtleVRhaWwiLCJsb3dMZXZlbEluZGV4Iiwia2V5UGF0aEFsaWFzIiwiaW5kZXhMaXN0Iiwia2V5TGVuZ3RoIiwiaXNWaXJ0dWFsIiwidmlydHVhbEluZGV4IiwidmlydHVhbEtleVBhdGgiLCJmaW5kQmVzdEluZGV4IiwidHJhbnNsYXRlUmFuZ2UiLCJ0cmFuc2xhdGVSZXF1ZXN0IiwiY3JlYXRlVmlydHVhbEN1cnNvciIsIl9jb250aW51ZSIsInZpcnR1YWxDdXJzb3IiLCJwcmltYXJ5S2V5MiIsInZpcnR1YWxJbmRleE1pZGRsZXdhcmUiLCJsZXZlbCIsImdldE9iamVjdERpZmYiLCJwcmZ4IiwiYXAiLCJicCIsImFwVHlwZU5hbWUiLCJicFR5cGVOYW1lIiwiZ2V0RWZmZWN0aXZlS2V5cyIsImhvb2tzTWlkZGxld2FyZSIsImRvd25Db3JlIiwiZG93blRhYmxlIiwidGFibGVNaWRkbGV3YXJlIiwiZHhUcmFucyIsImRlbGV0aW5nIiwiY3JlYXRpbmciLCJ1cGRhdGluZyIsImFkZFB1dE9yRGVsZXRlIiwiZGVsZXRlUmFuZ2UiLCJkeFRyYW5zMiIsImdldEV4aXN0aW5nVmFsdWVzIiwiZXhpc3RpbmdWYWx1ZXMiLCJjb250ZXh0cyIsImV4aXN0aW5nVmFsdWUiLCJnZW5lcmF0ZWRQcmltYXJ5S2V5Iiwib2JqZWN0RGlmZiIsImFkZGl0aW9uYWxDaGFuZ2VzIiwicmVxdWVzdGVkVmFsdWUiLCJkZWxldGVOZXh0Q2h1bmsiLCJlZmZlY3RpdmVLZXlzIiwiZ2V0RnJvbVRyYW5zYWN0aW9uQ2FjaGUiLCJjYWNoZUV4aXN0aW5nVmFsdWVzTWlkZGxld2FyZSIsImNhY2hlZFJlc3VsdCIsImlzRW1wdHlSYW5nZSIsIm5vZGUiLCJmcm9tT3JUcmVlIiwidG8iLCJkIiwicmFuZ2VTZXQiLCJhZGRLZXkiLCJhZGRSYW5nZSIsImFkZEtleXMiLCJnZXRSYW5nZVNldEl0ZXJhdG9yIiwibGVmdCIsInJpZ2h0IiwiciIsInJlYmFsYW5jZSIsInJpZ2h0V2FzQ3V0T2ZmIiwibmV3U2V0IiwiX2FkZFJhbmdlU2V0IiwidGFyZ2V0MiIsInJhbmdlU2V0MSIsInJhbmdlU2V0MiIsImkxIiwibmV4dFJlc3VsdDEiLCJuZXh0UmVzdWx0MiIsImtleVByb3ZpZGVkIiwidXAiLCJfYiIsInJvb3RDbG9uZSIsIm9sZFJvb3RSaWdodCIsImNvbXB1dGVEZXB0aCIsIm9ic2VydmFiaWxpdHlNaWRkbGV3YXJlIiwiRlVMTF9SQU5HRSIsInRhYmxlQ2xvbmUiLCJtdXRhdGVkUGFydHMiLCJnZXRSYW5nZVNldCIsInBhcnQiLCJwa1JhbmdlU2V0IiwiZGVsc1JhbmdlU2V0IiwibmV3T2JqcyIsIm9sZENhY2hlIiwib2xkT2JqcyIsInRyYWNrQWZmZWN0ZWRJbmRleGVzIiwiZ2V0UmFuZ2UiLCJyZWFkU3Vic2NyaWJlcnMiLCJtZXRob2QiLCJzdWJzY3IiLCJxdWVyaWVkSW5kZXgiLCJxdWVyaWVkUmFuZ2VzIiwia2V5c1Byb21pc2UiLCJyZXN1bHRpbmdLZXlzIiwicEtleXMiLCJ3YW50VmFsdWVzIiwicGtleSIsImFkZEFmZmVjdGVkSW5kZXgiLCJhZGRLZXlPcktleXMiLCJrZXkyIiwib2xkS2V5IiwibmV3S2V5IiwiZGVwcyIsImRlcGVuZGVuY2llcyIsImNhbmNlbE9wZW4iLCJiU3RpY2t5Iiwic3RhdGUyIiwibmV3VmVyc2lvbiIsInVzZSIsImFkZG9uIiwidmVyc2lvbkluc3RhbmNlIiwiX3doZW5SZWFkeSIsInVudXNlIiwibXciLCJoYXNBcmd1bWVudHMiLCJkb0RlbGV0ZSIsImJhY2tlbmREQiIsImhhc0JlZW5DbG9zZWQiLCJoYXNGYWlsZWQiLCJkeW5hbWljYWxseU9wZW5lZCIsIl90cmFuc2FjdGlvbiIsIm9ubHlJZkNvbXBhdGlibGUiLCJpZGJNb2RlIiwiU3ViVHJhbnNhY3Rpb24iLCJlbnRlclRyYW5zYWN0aW9uIiwiSW52YWxpZFRhYmxlIiwic3ltYm9sT2JzZXJ2YWJsZSIsIm9ic2VydmFibGUiLCJPYnNlcnZhYmxlIiwiX3N1YnNjcmliZSIsImV4dGVuZE9ic2VydmFiaWxpdHlTZXQiLCJxdWVyaWVyIiwiaGFzVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJvYnNlcnZlciIsImV4ZWN1dGUiLCJleGVjIiwiY2xvc2VkIiwiYWNjdW1NdXRzIiwiY3VycmVudE9icyIsInN1YnNjcmlwdGlvbiIsIm11dGF0aW9uTGlzdGVuZXIiLCJxdWVyeWluZyIsInN0YXJ0ZWRMaXN0ZW5pbmciLCJzaG91bGROb3RpZnkiLCJkb1F1ZXJ5IiwiZ2V0VmFsdWUiLCJkb21EZXBzIiwibW96SW5kZXhlZERCIiwid2Via2l0SW5kZXhlZERCIiwibXNJbmRleGVkREIiLCJ3ZWJraXRJREJLZXlSYW5nZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImlnbm9yZVRyYW5zYWN0aW9uIiwiYXN5bmMiLCJnZW5lcmF0b3JGbiIsInNwYXduIiwiY3VycmVudFRyYW5zYWN0aW9uIiwicHJvbWlzZU9yRnVuY3Rpb24iLCJvcHRpb25hbFRpbWVvdXQiLCJzZW1WZXIiLCJtYXhLZXkiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlZFBhcnRzIiwicHJvcGFnYXRpbmdMb2NhbGx5IiwiaW5pdEN1c3RvbUV2ZW50IiwicHJvcGFnYXRlTG9jYWxseSIsInVwZGF0ZVBhcnRzIiwid2FzTWUiLCJCcm9hZGNhc3RDaGFubmVsIiwiYmMiLCJ1bnJlZiIsImNoYW5nZWRQYXJ0cyIsInBvc3RNZXNzYWdlIiwib25tZXNzYWdlIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0cmlnIiwicmFuZG9tIiwibWF0Y2hBbGwiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwiY2xpZW50IiwicGFyc2UiLCJuZXdWYWx1ZSIsInN3Q29udGFpbmVyIiwic2VydmljZVdvcmtlciIsInByb3BhZ2F0ZU1lc3NhZ2VMb2NhbGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxtQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWixtQkFBQTs7O0FDQ08sSUFBTWEsT0FBQSxHQUNULE9BQU9DLFVBQUEsS0FBZSxjQUFjQSxVQUFBLEdBQ3BDLE9BQU9DLElBQUEsS0FBUyxjQUFjQSxJQUFBLEdBQzlCLE9BQU9DLE1BQUEsS0FBVyxjQUFjQSxNQUFBLEdBQ2hDQyxNQUFBO0FDSkcsSUFBTUMsSUFBQSxHQUFPQyxNQUFBLENBQU9ELElBQUE7QUFDcEIsSUFBTUUsT0FBQSxHQUFVQyxLQUFBLENBQU1ELE9BQUE7QUFDN0IsSUFBSSxPQUFPRSxPQUFBLEtBQVksZUFBZSxDQUFDVCxPQUFBLENBQVFTLE9BQUEsRUFBUTtFQUluRFQsT0FBQSxDQUFRUyxPQUFBLEdBQVVBLE9BQUE7O1NBSU5DLE9BQTBDQyxHQUFBLEVBQVFDLFNBQUEsRUFBWTtFQUMxRSxJQUFJLE9BQU9BLFNBQUEsS0FBYyxVQUFVLE9BQU9ELEdBQUE7RUFDMUNOLElBQUEsQ0FBS08sU0FBUyxFQUFFQyxPQUFBLENBQVEsVUFBVUMsR0FBQSxFQUFHO0lBQ2pDSCxHQUFBLENBQUlHLEdBQUEsSUFBT0YsU0FBQSxDQUFVRSxHQUFBO0dBQ3hCO0VBQ0QsT0FBT0gsR0FBQTtBQUNYO0FBRU8sSUFBTUksUUFBQSxHQUFXVCxNQUFBLENBQU9VLGNBQUE7QUFDeEIsSUFBTUMsT0FBQSxHQUFVLEdBQUdDLGNBQUE7U0FDVkMsT0FBT1IsR0FBQSxFQUFLUyxJQUFBLEVBQUk7RUFDNUIsT0FBT0gsT0FBQSxDQUFRSSxJQUFBLENBQUtWLEdBQUEsRUFBS1MsSUFBSTtBQUNqQztTQUVnQkUsTUFBT0MsS0FBQSxFQUFPWCxTQUFBLEVBQVM7RUFDbkMsSUFBSSxPQUFPQSxTQUFBLEtBQWMsWUFBWUEsU0FBQSxHQUFZQSxTQUFBLENBQVVHLFFBQUEsQ0FBU1EsS0FBSyxDQUFDO0VBQzFFLENBQUMsT0FBT0MsT0FBQSxLQUFZLGNBQWNuQixJQUFBLEdBQU9tQixPQUFBLENBQVFDLE9BQUEsRUFBU2IsU0FBUyxFQUFFQyxPQUFBLENBQVFDLEdBQUEsSUFBRztJQUM1RVksT0FBQSxDQUFRSCxLQUFBLEVBQU9ULEdBQUEsRUFBS0YsU0FBQSxDQUFVRSxHQUFBLENBQUk7R0FDckM7QUFDTDtBQUVPLElBQU1hLGNBQUEsR0FBaUJyQixNQUFBLENBQU9xQixjQUFBO1NBRXJCRCxRQUFRZixHQUFBLEVBQUtTLElBQUEsRUFBTVEsZ0JBQUEsRUFBa0JDLE9BQUEsRUFBUTtFQUN6REYsY0FBQSxDQUFlaEIsR0FBQSxFQUFLUyxJQUFBLEVBQU1WLE1BQUEsQ0FBT2tCLGdCQUFBLElBQW9CVCxNQUFBLENBQU9TLGdCQUFBLEVBQWtCLEtBQUssS0FBSyxPQUFPQSxnQkFBQSxDQUFpQkUsR0FBQSxLQUFRLGFBQ3BIO0lBQUNBLEdBQUEsRUFBS0YsZ0JBQUEsQ0FBaUJFLEdBQUE7SUFBS0MsR0FBQSxFQUFLSCxnQkFBQSxDQUFpQkcsR0FBQTtJQUFLQyxZQUFBLEVBQWM7RUFBSSxJQUN6RTtJQUFDQyxLQUFBLEVBQU9MLGdCQUFBO0lBQWtCSSxZQUFBLEVBQWM7SUFBTUUsUUFBQSxFQUFVO0VBQUksR0FBR0wsT0FBTyxDQUFDO0FBQy9FO1NBRWdCTSxPQUFPQyxLQUFBLEVBQUs7RUFDeEIsT0FBTztJQUNIQyxJQUFBLEVBQU0sU0FBQUEsQ0FBVUMsTUFBQSxFQUFNO01BQ2xCRixLQUFBLENBQU1HLFNBQUEsR0FBWWpDLE1BQUEsQ0FBT2tDLE1BQUEsQ0FBT0YsTUFBQSxDQUFPQyxTQUFTO01BQ2hEYixPQUFBLENBQVFVLEtBQUEsQ0FBTUcsU0FBQSxFQUFXLGVBQWVILEtBQUs7TUFDN0MsT0FBTztRQUNIMUIsTUFBQSxFQUFRWSxLQUFBLENBQU1tQixJQUFBLENBQUssTUFBTUwsS0FBQSxDQUFNRyxTQUFTOzs7O0FBSXhEO0FBRU8sSUFBTUcsd0JBQUEsR0FBMkJwQyxNQUFBLENBQU9vQyx3QkFBQTtTQUUvQkMsc0JBQXNCaEMsR0FBQSxFQUFLUyxJQUFBLEVBQUk7RUFDM0MsTUFBTXdCLEVBQUEsR0FBS0Ysd0JBQUEsQ0FBeUIvQixHQUFBLEVBQUtTLElBQUk7RUFDN0MsSUFBSUcsS0FBQTtFQUNKLE9BQU9xQixFQUFBLEtBQU9yQixLQUFBLEdBQVFSLFFBQUEsQ0FBU0osR0FBRyxNQUFNZ0MscUJBQUEsQ0FBdUJwQixLQUFBLEVBQU9ILElBQUk7QUFDOUU7QUFFQSxJQUFNeUIsTUFBQSxHQUFTLEdBQUdDLEtBQUE7U0FDRkEsTUFBTUMsSUFBQSxFQUFNQyxLQUFBLEVBQVFDLEdBQUEsRUFBSTtFQUNwQyxPQUFPSixNQUFBLENBQU94QixJQUFBLENBQUswQixJQUFBLEVBQU1DLEtBQUEsRUFBT0MsR0FBRztBQUN2QztTQUVnQkMsU0FBU0MsUUFBQSxFQUFVQyxnQkFBQSxFQUFnQjtFQUMvQyxPQUFPQSxnQkFBQSxDQUFpQkQsUUFBUTtBQUNwQztTQUVnQkUsT0FBUUMsQ0FBQSxFQUFDO0VBQ3JCLElBQUksQ0FBQ0EsQ0FBQSxFQUFHLE1BQU0sSUFBSUMsS0FBQSxDQUFNLGtCQUFrQjtBQUM5QztTQUVnQkMsT0FBS0MsRUFBQSxFQUFFO0VBRW5CLElBQUl6RCxPQUFBLENBQVEwRCxZQUFBLEVBQWNBLFlBQUEsQ0FBYUQsRUFBRSxPQUFRRSxVQUFBLENBQVdGLEVBQUEsRUFBSSxDQUFDO0FBQ3JFO1NBV2dCRyxjQUFvQkMsS0FBQSxFQUFZQyxTQUFBLEVBQTBDO0VBQ3RGLE9BQU9ELEtBQUEsQ0FBTUUsTUFBQSxDQUFPLENBQUNDLE1BQUEsRUFBUUMsSUFBQSxFQUFNQyxDQUFBLEtBQUM7SUFDaEMsSUFBSUMsWUFBQSxHQUFlTCxTQUFBLENBQVVHLElBQUEsRUFBTUMsQ0FBQztJQUNwQyxJQUFJQyxZQUFBLEVBQWNILE1BQUEsQ0FBT0csWUFBQSxDQUFhLE1BQU1BLFlBQUEsQ0FBYTtJQUN6RCxPQUFPSCxNQUFBO0tBQ1IsRUFBRTtBQUNUO1NBWWdCSSxTQUFTWCxFQUFBLEVBQTRCWSxPQUFBLEVBQVN0QixJQUFBLEVBQUs7RUFDL0QsSUFBSTtJQUNBVSxFQUFBLENBQUdhLEtBQUEsQ0FBTSxNQUFNdkIsSUFBSTtXQUNkd0IsRUFBQSxFQUFQO0lBQ0VGLE9BQUEsSUFBV0EsT0FBQSxDQUFRRSxFQUFFOztBQUU3QjtTQUVnQkMsYUFBYTdELEdBQUEsRUFBSzhELE9BQUEsRUFBTztFQUVyQyxJQUFJLE9BQU9BLE9BQUEsS0FBWSxZQUFZdEQsTUFBQSxDQUFPUixHQUFBLEVBQUs4RCxPQUFPLEdBQUcsT0FBTzlELEdBQUEsQ0FBSThELE9BQUE7RUFDcEUsSUFBSSxDQUFDQSxPQUFBLEVBQVMsT0FBTzlELEdBQUE7RUFDckIsSUFBSSxPQUFPOEQsT0FBQSxLQUFZLFVBQVU7SUFDN0IsSUFBSUMsRUFBQSxHQUFLO0lBQ1QsU0FBU1IsQ0FBQSxHQUFJLEdBQUdTLENBQUEsR0FBSUYsT0FBQSxDQUFRRyxNQUFBLEVBQVFWLENBQUEsR0FBSVMsQ0FBQSxFQUFHLEVBQUVULENBQUEsRUFBRztNQUM1QyxJQUFJVyxHQUFBLEdBQU1MLFlBQUEsQ0FBYTdELEdBQUEsRUFBSzhELE9BQUEsQ0FBUVAsQ0FBQSxDQUFFO01BQ3RDUSxFQUFBLENBQUdJLElBQUEsQ0FBS0QsR0FBRzs7SUFFZixPQUFPSCxFQUFBOztFQUVYLElBQUlLLE1BQUEsR0FBU04sT0FBQSxDQUFRTyxPQUFBLENBQVEsR0FBRztFQUNoQyxJQUFJRCxNQUFBLEtBQVcsSUFBSTtJQUNmLElBQUlFLFFBQUEsR0FBV3RFLEdBQUEsQ0FBSThELE9BQUEsQ0FBUVMsTUFBQSxDQUFPLEdBQUdILE1BQU07SUFDM0MsT0FBT0UsUUFBQSxJQUFZLE9BQU8sU0FBWVQsWUFBQSxDQUFhUyxRQUFBLEVBQVVSLE9BQUEsQ0FBUVMsTUFBQSxDQUFPSCxNQUFBLEdBQVMsQ0FBQyxDQUFDOztFQUUzRixPQUFPO0FBQ1g7U0FFZ0JJLGFBQWF4RSxHQUFBLEVBQUs4RCxPQUFBLEVBQVN4QyxLQUFBLEVBQUs7RUFDNUMsSUFBSSxDQUFDdEIsR0FBQSxJQUFPOEQsT0FBQSxLQUFZLFFBQVc7RUFDbkMsSUFBSSxjQUFjbkUsTUFBQSxJQUFVQSxNQUFBLENBQU84RSxRQUFBLENBQVN6RSxHQUFHLEdBQUc7RUFDbEQsSUFBSSxPQUFPOEQsT0FBQSxLQUFZLFlBQVksWUFBWUEsT0FBQSxFQUFTO0lBQ3BEcEIsTUFBQSxDQUFPLE9BQU9wQixLQUFBLEtBQVUsWUFBWSxZQUFZQSxLQUFLO0lBQ3JELFNBQVNpQyxDQUFBLEdBQUksR0FBR1MsQ0FBQSxHQUFJRixPQUFBLENBQVFHLE1BQUEsRUFBUVYsQ0FBQSxHQUFJUyxDQUFBLEVBQUcsRUFBRVQsQ0FBQSxFQUFHO01BQzVDaUIsWUFBQSxDQUFheEUsR0FBQSxFQUFLOEQsT0FBQSxDQUFRUCxDQUFBLEdBQUlqQyxLQUFBLENBQU1pQyxDQUFBLENBQUU7O1NBRXZDO0lBQ0gsSUFBSWEsTUFBQSxHQUFTTixPQUFBLENBQVFPLE9BQUEsQ0FBUSxHQUFHO0lBQ2hDLElBQUlELE1BQUEsS0FBVyxJQUFJO01BQ2YsSUFBSU0sY0FBQSxHQUFpQlosT0FBQSxDQUFRUyxNQUFBLENBQU8sR0FBR0gsTUFBTTtNQUM3QyxJQUFJTyxnQkFBQSxHQUFtQmIsT0FBQSxDQUFRUyxNQUFBLENBQU9ILE1BQUEsR0FBUyxDQUFDO01BQ2hELElBQUlPLGdCQUFBLEtBQXFCO1FBQ3JCLElBQUlyRCxLQUFBLEtBQVUsUUFBVztVQUNyQixJQUFJMUIsT0FBQSxDQUFRSSxHQUFHLEtBQUssQ0FBQzRFLEtBQUEsQ0FBTUMsUUFBQSxDQUFTSCxjQUFjLENBQUMsR0FBRzFFLEdBQUEsQ0FBSThFLE1BQUEsQ0FBT0osY0FBQSxFQUFnQixDQUFDLE9BQzdFLE9BQU8xRSxHQUFBLENBQUkwRSxjQUFBO2VBQ2IxRSxHQUFBLENBQUkwRSxjQUFBLElBQWtCcEQsS0FBQTtNQUFBLE9BQzVCO1FBQ0QsSUFBSWdELFFBQUEsR0FBV3RFLEdBQUEsQ0FBSTBFLGNBQUE7UUFDbkIsSUFBSSxDQUFDSixRQUFBLElBQVksQ0FBQzlELE1BQUEsQ0FBT1IsR0FBQSxFQUFLMEUsY0FBYyxHQUFHSixRQUFBLEdBQVl0RSxHQUFBLENBQUkwRSxjQUFBLElBQWtCO1FBQ2pGRixZQUFBLENBQWFGLFFBQUEsRUFBVUssZ0JBQUEsRUFBa0JyRCxLQUFLOztXQUUvQztNQUNILElBQUlBLEtBQUEsS0FBVSxRQUFXO1FBQ3JCLElBQUkxQixPQUFBLENBQVFJLEdBQUcsS0FBSyxDQUFDNEUsS0FBQSxDQUFNQyxRQUFBLENBQVNmLE9BQU8sQ0FBQyxHQUFHOUQsR0FBQSxDQUFJOEUsTUFBQSxDQUFPaEIsT0FBQSxFQUFTLENBQUMsT0FDL0QsT0FBTzlELEdBQUEsQ0FBSThELE9BQUE7YUFDYjlELEdBQUEsQ0FBSThELE9BQUEsSUFBV3hDLEtBQUE7OztBQUdsQztTQUVnQnlELGFBQWEvRSxHQUFBLEVBQUs4RCxPQUFBLEVBQU87RUFDckMsSUFBSSxPQUFPQSxPQUFBLEtBQVksVUFDbkJVLFlBQUEsQ0FBYXhFLEdBQUEsRUFBSzhELE9BQUEsRUFBUyxNQUFTLE8sSUFDL0IsWUFBWUEsT0FBQSxFQUNqQixHQUFHa0IsR0FBQSxDQUFJdEUsSUFBQSxDQUFLb0QsT0FBQSxFQUFTLFVBQVNtQixFQUFBLEVBQUU7SUFDNUJULFlBQUEsQ0FBYXhFLEdBQUEsRUFBS2lGLEVBQUEsRUFBSSxNQUFTO0dBQ2xDO0FBQ1Q7U0FFZ0JDLGFBQWFsRixHQUFBLEVBQUc7RUFDNUIsSUFBSStELEVBQUEsR0FBSztFQUNULFNBQVNvQixDQUFBLElBQUtuRixHQUFBLEVBQUs7SUFDZixJQUFJUSxNQUFBLENBQU9SLEdBQUEsRUFBS21GLENBQUMsR0FBR3BCLEVBQUEsQ0FBR29CLENBQUEsSUFBS25GLEdBQUEsQ0FBSW1GLENBQUE7O0VBRXBDLE9BQU9wQixFQUFBO0FBQ1g7QUFFQSxJQUFNcUIsTUFBQSxHQUFTLEdBQUdBLE1BQUE7U0FDRkMsUUFBWUMsQ0FBQSxFQUFjO0VBQ3RDLE9BQU9GLE1BQUEsQ0FBT3pCLEtBQUEsQ0FBTSxJQUFJMkIsQ0FBQztBQUM3QjtBQUdBLElBQU1DLGtCQUFBLEdBQ0YsaU5BQ0NDLEtBQUEsQ0FBTSxHQUFHLEVBQUVKLE1BQUEsQ0FDUkMsT0FBQSxDQUFRLENBQUMsR0FBRSxJQUFHLElBQUcsRUFBRSxFQUFFTCxHQUFBLENBQUlTLEdBQUEsSUFBSyxDQUFDLE9BQU0sUUFBTyxPQUFPLEVBQUVULEdBQUEsQ0FBSVUsQ0FBQSxJQUFHQSxDQUFBLEdBQUVELEdBQUEsR0FBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQzlFRSxNQUFBLENBQU9ELENBQUEsSUFBR3JHLE9BQUEsQ0FBUXFHLENBQUEsQ0FBRTtBQUMxQixJQUFNRSxjQUFBLEdBQWlCTCxrQkFBQSxDQUFtQlAsR0FBQSxDQUFJVSxDQUFBLElBQUdyRyxPQUFBLENBQVFxRyxDQUFBLENBQUU7QUFDdkJ6QyxhQUFBLENBQWNzQyxrQkFBQSxFQUFvQk0sQ0FBQSxJQUFHLENBQUNBLENBQUEsRUFBRSxJQUFJLENBQUM7QUFFakYsSUFBSUMsWUFBQSxHQUF3QztTQUM1QkMsVUFBYUMsR0FBQSxFQUFNO0VBQy9CRixZQUFBLEdBQWUsT0FBT0csT0FBQSxLQUFZLGVBQWUsbUJBQUlBLE9BQUEsQ0FBTztFQUM1RCxNQUFNbEMsRUFBQSxHQUFLbUMsY0FBQSxDQUFlRixHQUFHO0VBQzdCRixZQUFBLEdBQWU7RUFDZixPQUFPL0IsRUFBQTtBQUNYO0FBRUEsU0FBU21DLGVBQWtCRixHQUFBLEVBQU07RUFDN0IsSUFBSSxDQUFDQSxHQUFBLElBQU8sT0FBT0EsR0FBQSxLQUFRLFVBQVUsT0FBT0EsR0FBQTtFQUM1QyxJQUFJakMsRUFBQSxHQUFLK0IsWUFBQSxJQUFnQkEsWUFBQSxDQUFhM0UsR0FBQSxDQUFJNkUsR0FBRztFQUM3QyxJQUFJakMsRUFBQSxFQUFJLE9BQU9BLEVBQUE7RUFDZixJQUFJbkUsT0FBQSxDQUFRb0csR0FBRyxHQUFHO0lBQ2RqQyxFQUFBLEdBQUs7SUFDTCtCLFlBQUEsSUFBZ0JBLFlBQUEsQ0FBYTFFLEdBQUEsQ0FBSTRFLEdBQUEsRUFBS2pDLEVBQUU7SUFDeEMsU0FBU1IsQ0FBQSxHQUFJLEdBQUdTLENBQUEsR0FBSWdDLEdBQUEsQ0FBSS9CLE1BQUEsRUFBUVYsQ0FBQSxHQUFJUyxDQUFBLEVBQUcsRUFBRVQsQ0FBQSxFQUFHO01BQ3hDUSxFQUFBLENBQUdJLElBQUEsQ0FBSytCLGNBQUEsQ0FBZUYsR0FBQSxDQUFJekMsQ0FBQSxDQUFFLENBQUM7O2FBRTNCcUMsY0FBQSxDQUFldkIsT0FBQSxDQUFRMkIsR0FBQSxDQUFJRyxXQUFXLEtBQUssR0FBRztJQUNyRHBDLEVBQUEsR0FBS2lDLEdBQUE7U0FDRjtJQUNILE1BQU1wRixLQUFBLEdBQVFSLFFBQUEsQ0FBUzRGLEdBQUc7SUFDMUJqQyxFQUFBLEdBQUtuRCxLQUFBLEtBQVVqQixNQUFBLENBQU9pQyxTQUFBLEdBQVksS0FBS2pDLE1BQUEsQ0FBT2tDLE1BQUEsQ0FBT2pCLEtBQUs7SUFDMURrRixZQUFBLElBQWdCQSxZQUFBLENBQWExRSxHQUFBLENBQUk0RSxHQUFBLEVBQUtqQyxFQUFFO0lBQ3hDLFNBQVN0RCxJQUFBLElBQVF1RixHQUFBLEVBQUs7TUFDbEIsSUFBSXhGLE1BQUEsQ0FBT3dGLEdBQUEsRUFBS3ZGLElBQUksR0FBRztRQUNuQnNELEVBQUEsQ0FBR3RELElBQUEsSUFBUXlGLGNBQUEsQ0FBZUYsR0FBQSxDQUFJdkYsSUFBQSxDQUFLOzs7O0VBSS9DLE9BQU9zRCxFQUFBO0FBQ1g7QUFFQSxJQUFNO0VBQUNxQztBQUFRLElBQUk7U0FDSEMsWUFBWUMsQ0FBQSxFQUFTO0VBQ2pDLE9BQU9GLFFBQUEsQ0FBUzFGLElBQUEsQ0FBSzRGLENBQUMsRUFBRW5FLEtBQUEsQ0FBTSxHQUFHLEVBQUU7QUFDdkM7QUFHTyxJQUFNb0UsY0FBQSxHQUFpQixPQUFPQyxNQUFBLEtBQVcsY0FDNUNBLE1BQUEsQ0FBT0MsUUFBQSxHQUNQO0FBQ0csSUFBTUMsYUFBQSxHQUFnQixPQUFPSCxjQUFBLEtBQW1CLFdBQVcsVUFBU1YsQ0FBQSxFQUFDO0VBQ3hFLElBQUl0QyxDQUFBO0VBQ0osT0FBT3NDLENBQUEsSUFBSyxTQUFTdEMsQ0FBQSxHQUFJc0MsQ0FBQSxDQUFFVSxjQUFBLE1BQW9CaEQsQ0FBQSxDQUFFSSxLQUFBLENBQU1rQyxDQUFDO0FBQzVELElBQUk7RUFBYyxPQUFPO0FBQUs7QUFLdkIsSUFBTWMsYUFBQSxHQUFnQjtTQVNiQyxXQUFZQyxTQUFBLEVBQVM7RUFDakMsSUFBSXRELENBQUEsRUFBRytCLENBQUEsRUFBR08sQ0FBQSxFQUFHaUIsRUFBQTtFQUNiLElBQUlDLFNBQUEsQ0FBVTlDLE1BQUEsS0FBVyxHQUFHO0lBQ3hCLElBQUlyRSxPQUFBLENBQVFpSCxTQUFTLEdBQUcsT0FBT0EsU0FBQSxDQUFVMUUsS0FBQSxDQUFLO0lBQzlDLElBQUksU0FBU3dFLGFBQUEsSUFBaUIsT0FBT0UsU0FBQSxLQUFjLFVBQVUsT0FBTyxDQUFDQSxTQUFTO0lBQzlFLElBQUtDLEVBQUEsR0FBS0osYUFBQSxDQUFjRyxTQUFTLEdBQUk7TUFDakN2QixDQUFBLEdBQUk7TUFDSixPQUFRTyxDQUFBLEdBQUlpQixFQUFBLENBQUdFLElBQUEsQ0FBSSxHQUFLLENBQUNuQixDQUFBLENBQUVvQixJQUFBLEVBQU0zQixDQUFBLENBQUVuQixJQUFBLENBQUswQixDQUFBLENBQUV2RSxLQUFLO01BQy9DLE9BQU9nRSxDQUFBOztJQUVYLElBQUl1QixTQUFBLElBQWEsTUFBTSxPQUFPLENBQUNBLFNBQVM7SUFDeEN0RCxDQUFBLEdBQUlzRCxTQUFBLENBQVU1QyxNQUFBO0lBQ2QsSUFBSSxPQUFPVixDQUFBLEtBQU0sVUFBVTtNQUN2QitCLENBQUEsR0FBSSxJQUFJekYsS0FBQSxDQUFNMEQsQ0FBQztNQUNmLE9BQU9BLENBQUEsSUFBSytCLENBQUEsQ0FBRS9CLENBQUEsSUFBS3NELFNBQUEsQ0FBVXRELENBQUE7TUFDN0IsT0FBTytCLENBQUE7O0lBRVgsT0FBTyxDQUFDdUIsU0FBUzs7RUFFckJ0RCxDQUFBLEdBQUl3RCxTQUFBLENBQVU5QyxNQUFBO0VBQ2RxQixDQUFBLEdBQUksSUFBSXpGLEtBQUEsQ0FBTTBELENBQUM7RUFDZixPQUFPQSxDQUFBLElBQUsrQixDQUFBLENBQUUvQixDQUFBLElBQUt3RCxTQUFBLENBQVV4RCxDQUFBO0VBQzdCLE9BQU8rQixDQUFBO0FBQ1g7QUFDTyxJQUFNNEIsZUFBQSxHQUFrQixPQUFPVixNQUFBLEtBQVcsY0FDMUMxRCxFQUFBLElBQWlCQSxFQUFBLENBQUcwRCxNQUFBLENBQU9ILFdBQUEsTUFBaUIsa0JBQzdDLE1BQUk7QUN2UkgsSUFBSWMsS0FBQSxHQUFRLE9BQU9DLFFBQUEsS0FBYSxlQUUvQiw2Q0FBNkNDLElBQUEsQ0FBS0QsUUFBQSxDQUFTRSxJQUFJO1NBRXZEQyxTQUFTakcsS0FBQSxFQUFPcUUsTUFBQSxFQUFNO0VBQ2xDd0IsS0FBQSxHQUFRN0YsS0FBQTtFQUNSa0csYUFBQSxHQUFnQjdCLE1BQUE7QUFDcEI7QUFFTyxJQUFJNkIsYUFBQSxHQUFnQkEsQ0FBQSxLQUFNO0FBRTFCLElBQU1DLHFCQUFBLEdBQXdCLENBQUMsSUFBSTdFLEtBQUEsQ0FBTSxFQUFFLEVBQUU4RSxLQUFBO1NBRXBDQyxrQkFBQSxFQUFpQjtFQUU3QixJQUFJRixxQkFBQSxFQUF1QixJQUFJO0lBTTNCRSxpQkFBQSxDQUFrQlosU0FBQTtJQUNsQixNQUFNLElBQUluRSxLQUFBLENBQUs7V0FDWGdGLENBQUEsRUFBTjtJQUNFLE9BQU9BLENBQUE7O0VBRVgsT0FBTyxJQUFJaEYsS0FBQSxDQUFLO0FBQ3BCO1NBRWdCaUYsWUFBWUMsU0FBQSxFQUFXQyxnQkFBQSxFQUFnQjtFQUNuRCxJQUFJTCxLQUFBLEdBQVFJLFNBQUEsQ0FBVUosS0FBQTtFQUN0QixJQUFJLENBQUNBLEtBQUEsRUFBTyxPQUFPO0VBQ25CSyxnQkFBQSxHQUFvQkEsZ0JBQUEsSUFBb0I7RUFDeEMsSUFBSUwsS0FBQSxDQUFNckQsT0FBQSxDQUFReUQsU0FBQSxDQUFVRSxJQUFJLE1BQU0sR0FDbENELGdCQUFBLEtBQXFCRCxTQUFBLENBQVVFLElBQUEsR0FBT0YsU0FBQSxDQUFVRyxPQUFBLEVBQVN6QyxLQUFBLENBQU0sSUFBSSxFQUFFdkIsTUFBQTtFQUN6RSxPQUFPeUQsS0FBQSxDQUFNbEMsS0FBQSxDQUFNLElBQUksRUFDbEJyRCxLQUFBLENBQU00RixnQkFBZ0IsRUFDdEJwQyxNQUFBLENBQU82QixhQUFhLEVBQ3BCeEMsR0FBQSxDQUFJa0QsS0FBQSxJQUFTLE9BQU9BLEtBQUssRUFDekJDLElBQUEsQ0FBSyxFQUFFO0FBQ2hCO0FDdkNBLElBQUlDLGVBQUEsR0FBa0IsQ0FDbEIsVUFDQSxRQUNBLGNBQ0EsaUJBQ0EsVUFDQSxXQUNBLGdCQUNBLGNBQ0Esa0JBQ0EsbUJBQ0Esa0JBQ0EsZUFDQSxZQUNBLGtCQUNBLG1CQUNBLGU7QUFHSixJQUFJQyxnQkFBQSxHQUFtQixDQUNuQixXQUNBLGNBQ0EsUUFDQSx1QkFDQSxZQUNBLFdBQ0EsWUFDQSxnQkFDQSxpQkFDQSxTQUNBLFdBQ0EsaUJBQ0EsVUFDQSxZO0FBR0osSUFBSUMsU0FBQSxHQUFZRixlQUFBLENBQWdCaEQsTUFBQSxDQUFPaUQsZ0JBQWdCO0FBRXZELElBQUlFLFlBQUEsR0FBZTtFQUNmQyxjQUFBLEVBQWdCO0VBQ2hCQyxjQUFBLEVBQWdCO0VBQ2hCQyxLQUFBLEVBQU87RUFDUEMsbUJBQUEsRUFBcUI7RUFDckJDLFVBQUEsRUFBWTs7U0FNQUMsV0FBWWIsSUFBQSxFQUFNYyxHQUFBLEVBQUc7RUFNakMsS0FBS0MsRUFBQSxHQUFLcEIsaUJBQUEsQ0FBaUI7RUFDM0IsS0FBS0ssSUFBQSxHQUFPQSxJQUFBO0VBQ1osS0FBS0MsT0FBQSxHQUFVYSxHQUFBO0FBQ25CO0FBRUF0SCxNQUFBLENBQU9xSCxVQUFVLEVBQUVuSCxJQUFBLENBQUtrQixLQUFLLEVBQUU3QyxNQUFBLENBQU87RUFDbEMySCxLQUFBLEVBQU87SUFDSHZHLEdBQUEsRUFBSyxTQUFBQSxDQUFBO01BQ0QsT0FBTyxLQUFLNkgsTUFBQSxLQUNQLEtBQUtBLE1BQUEsR0FBUyxLQUFLaEIsSUFBQSxHQUFPLE9BQU8sS0FBS0MsT0FBQSxHQUFVSixXQUFBLENBQVksS0FBS2tCLEVBQUEsRUFBSSxDQUFDOzs7RUFHbkYzQyxRQUFBLEVBQVUsU0FBQUEsQ0FBQTtJQUFZLE9BQU8sS0FBSzRCLElBQUEsR0FBTyxPQUFPLEtBQUtDLE9BQUE7RUFBUTtDQUNoRTtBQUVELFNBQVNnQixxQkFBc0JILEdBQUEsRUFBS0ksUUFBQSxFQUFRO0VBQ3hDLE9BQU9KLEdBQUEsR0FBTSxlQUFlbkosTUFBQSxDQUFPRCxJQUFBLENBQUt3SixRQUFRLEVBQzNDbEUsR0FBQSxDQUFJN0UsR0FBQSxJQUFLK0ksUUFBQSxDQUFTL0ksR0FBQSxFQUFLaUcsUUFBQSxDQUFRLENBQUUsRUFDakNULE1BQUEsQ0FBTyxDQUFDd0QsQ0FBQSxFQUFFNUYsQ0FBQSxFQUFFNkYsQ0FBQSxLQUFJQSxDQUFBLENBQUUvRSxPQUFBLENBQVE4RSxDQUFDLE1BQU01RixDQUFDLEVBQ2xDNEUsSUFBQSxDQUFLLElBQUk7QUFDbEI7U0FNZ0JrQixZQUFhUCxHQUFBLEVBQUtJLFFBQUEsRUFBVUksWUFBQSxFQUFjQyxVQUFBLEVBQVU7RUFDaEUsS0FBS1IsRUFBQSxHQUFLcEIsaUJBQUEsQ0FBaUI7RUFDM0IsS0FBS3VCLFFBQUEsR0FBV0EsUUFBQTtFQUNoQixLQUFLSyxVQUFBLEdBQWFBLFVBQUE7RUFDbEIsS0FBS0QsWUFBQSxHQUFlQSxZQUFBO0VBQ3BCLEtBQUtyQixPQUFBLEdBQVVnQixvQkFBQSxDQUFxQkgsR0FBQSxFQUFLSSxRQUFRO0FBQ3JEO0FBQ0ExSCxNQUFBLENBQU82SCxXQUFXLEVBQUUzSCxJQUFBLENBQUttSCxVQUFVO1NBRW5CVyxVQUFXVixHQUFBLEVBQUtJLFFBQUEsRUFBUTtFQUNwQyxLQUFLSCxFQUFBLEdBQUtwQixpQkFBQSxDQUFpQjtFQUMzQixLQUFLSyxJQUFBLEdBQU87RUFDWixLQUFLa0IsUUFBQSxHQUFXdkosTUFBQSxDQUFPRCxJQUFBLENBQUt3SixRQUFRLEVBQUVsRSxHQUFBLENBQUl5RSxHQUFBLElBQU9QLFFBQUEsQ0FBU08sR0FBQSxDQUFJO0VBQzlELEtBQUtDLGFBQUEsR0FBZ0JSLFFBQUE7RUFDckIsS0FBS2pCLE9BQUEsR0FBVWdCLG9CQUFBLENBQXFCSCxHQUFBLEVBQUtJLFFBQVE7QUFDckQ7QUFDQTFILE1BQUEsQ0FBT2dJLFNBQVMsRUFBRTlILElBQUEsQ0FBS21ILFVBQVU7QUFVMUIsSUFBSWMsUUFBQSxHQUFXckIsU0FBQSxDQUFVbEYsTUFBQSxDQUFPLENBQUNwRCxHQUFBLEVBQUlnSSxJQUFBLE1BQVFoSSxHQUFBLENBQUlnSSxJQUFBLElBQU1BLElBQUEsR0FBSyxTQUFRaEksR0FBQSxHQUFLLEVBQUU7QUFHbEYsSUFBTTRKLGFBQUEsR0FBZ0JmLFVBQUE7QUFFZixJQUFJZ0IsVUFBQSxHQUFhdkIsU0FBQSxDQUFVbEYsTUFBQSxDQUFPLENBQUNwRCxHQUFBLEVBQUlnSSxJQUFBLEtBQUk7RUFPOUMsSUFBSThCLFFBQUEsR0FBVzlCLElBQUEsR0FBTztFQUN0QixTQUFTK0IsWUFBWUMsVUFBQSxFQUFZQyxLQUFBLEVBQUs7SUFDbEMsS0FBS2xCLEVBQUEsR0FBS3BCLGlCQUFBLENBQWlCO0lBQzNCLEtBQUtLLElBQUEsR0FBTzhCLFFBQUE7SUFDWixJQUFJLENBQUNFLFVBQUEsRUFBWTtNQUNiLEtBQUsvQixPQUFBLEdBQVVNLFlBQUEsQ0FBYVAsSUFBQSxLQUFTOEIsUUFBQTtNQUNyQyxLQUFLRyxLQUFBLEdBQVE7ZUFDTixPQUFPRCxVQUFBLEtBQWUsVUFBVTtNQUN2QyxLQUFLL0IsT0FBQSxHQUFVLEdBQUcrQixVQUFBLEdBQWEsQ0FBQ0MsS0FBQSxHQUFRLEtBQUssUUFBUUEsS0FBQTtNQUNyRCxLQUFLQSxLQUFBLEdBQVFBLEtBQUEsSUFBUztlQUNmLE9BQU9ELFVBQUEsS0FBZSxVQUFVO01BQ3ZDLEtBQUsvQixPQUFBLEdBQVUsR0FBRytCLFVBQUEsQ0FBV2hDLElBQUEsSUFBUWdDLFVBQUEsQ0FBVy9CLE9BQUE7TUFDaEQsS0FBS2dDLEtBQUEsR0FBUUQsVUFBQTs7O0VBR3JCeEksTUFBQSxDQUFPdUksV0FBVSxFQUFFckksSUFBQSxDQUFLa0ksYUFBYTtFQUNyQzVKLEdBQUEsQ0FBSWdJLElBQUEsSUFBTStCLFdBQUE7RUFDVixPQUFPL0osR0FBQTtBQUNYLEdBQUUsRUFBRTtBQUdKNkosVUFBQSxDQUFXSyxNQUFBLEdBQVNDLFdBQUE7QUFDcEJOLFVBQUEsQ0FBV08sSUFBQSxHQUFPQyxTQUFBO0FBQ2xCUixVQUFBLENBQVdTLEtBQUEsR0FBUUMsVUFBQTtBQUVaLElBQUlDLFlBQUEsR0FBZW5DLGdCQUFBLENBQWlCakYsTUFBQSxDQUFPLENBQUNwRCxHQUFBLEVBQUtnSSxJQUFBLEtBQUk7RUFDeERoSSxHQUFBLENBQUlnSSxJQUFBLEdBQU8sV0FBVzZCLFVBQUEsQ0FBVzdCLElBQUE7RUFDakMsT0FBT2hJLEdBQUE7QUFDWCxHQUFHLEVBQUU7U0FFV3lLLFNBQVVDLFFBQUEsRUFBVXpDLE9BQUEsRUFBTztFQUN2QyxJQUFJLENBQUN5QyxRQUFBLElBQVlBLFFBQUEsWUFBb0I3QixVQUFBLElBQWM2QixRQUFBLFlBQW9CTCxTQUFBLElBQWFLLFFBQUEsWUFBb0JQLFdBQUEsSUFBZSxDQUFDTyxRQUFBLENBQVMxQyxJQUFBLElBQVEsQ0FBQ3dDLFlBQUEsQ0FBYUUsUUFBQSxDQUFTMUMsSUFBQSxHQUM1SixPQUFPMEMsUUFBQTtFQUNYLElBQUkzRyxFQUFBLEdBQUssSUFBSXlHLFlBQUEsQ0FBYUUsUUFBQSxDQUFTMUMsSUFBQSxFQUFNQyxPQUFBLElBQVd5QyxRQUFBLENBQVN6QyxPQUFBLEVBQVN5QyxRQUFRO0VBQzlFLElBQUksV0FBV0EsUUFBQSxFQUFVO0lBRXJCM0osT0FBQSxDQUFRZ0QsRUFBQSxFQUFJLFNBQVM7TUFBQzVDLEdBQUEsRUFBSyxTQUFBQSxDQUFBO1FBQ3ZCLE9BQU8sS0FBSzhJLEtBQUEsQ0FBTXZDLEtBQUE7O0lBQ3JCLENBQUM7O0VBRU4sT0FBTzNELEVBQUE7QUFDWDtBQUVPLElBQUk0RyxrQkFBQSxHQUFxQnJDLFNBQUEsQ0FBVWxGLE1BQUEsQ0FBTyxDQUFDcEQsR0FBQSxFQUFLZ0ksSUFBQSxLQUFJO0VBQ3ZELElBQUksQ0FBQyxVQUFTLFFBQU8sT0FBTyxFQUFFM0QsT0FBQSxDQUFRMkQsSUFBSSxNQUFNLElBQzVDaEksR0FBQSxDQUFJZ0ksSUFBQSxHQUFPLFdBQVc2QixVQUFBLENBQVc3QixJQUFBO0VBQ3JDLE9BQU9oSSxHQUFBO0FBQ1gsR0FBRyxFQUFFO0FBRUwySyxrQkFBQSxDQUFtQnRCLFdBQUEsR0FBY0EsV0FBQTtBQUNqQ3NCLGtCQUFBLENBQW1COUIsVUFBQSxHQUFhQSxVQUFBO0FBQ2hDOEIsa0JBQUEsQ0FBbUJuQixTQUFBLEdBQVlBLFNBQUE7U0MzS2ZvQixJQUFBLEVBQUc7U0FDSEMsT0FBTzNHLEdBQUEsRUFBRztFQUFJLE9BQU9BLEdBQUE7QUFBSTtTQUN6QjRHLGtCQUFrQkMsRUFBQSxFQUFJQyxFQUFBLEVBQUU7RUFHcEMsSUFBSUQsRUFBQSxJQUFNLFFBQVFBLEVBQUEsS0FBT0YsTUFBQSxFQUFRLE9BQU9HLEVBQUE7RUFDeEMsT0FBTyxVQUFVOUcsR0FBQSxFQUFHO0lBQ2hCLE9BQU84RyxFQUFBLENBQUdELEVBQUEsQ0FBRzdHLEdBQUcsQ0FBQzs7QUFFekI7U0FFZ0IrRyxTQUFTQyxHQUFBLEVBQUtDLEdBQUEsRUFBRztFQUM3QixPQUFPO0lBQ0hELEdBQUEsQ0FBSXZILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUN6Qm9FLEdBQUEsQ0FBSXhILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUzs7QUFFakM7U0FFZ0JxRSxrQkFBa0JMLEVBQUEsRUFBSUMsRUFBQSxFQUFFO0VBR3BDLElBQUlELEVBQUEsS0FBT0gsR0FBQSxFQUFLLE9BQU9JLEVBQUE7RUFDdkIsT0FBTztJQUNILElBQUlLLEdBQUEsR0FBTU4sRUFBQSxDQUFHcEgsS0FBQSxDQUFNLE1BQU1vRCxTQUFTO0lBQ2xDLElBQUlzRSxHQUFBLEtBQVEsUUFBV3RFLFNBQUEsQ0FBVSxLQUFLc0UsR0FBQTtJQUN0QyxJQUFJQyxTQUFBLEdBQVksS0FBS0EsU0FBQTtNQUNqQjVILE9BQUEsR0FBVSxLQUFLQSxPQUFBO0lBQ25CLEtBQUs0SCxTQUFBLEdBQVk7SUFDakIsS0FBSzVILE9BQUEsR0FBVTtJQUNmLElBQUk2SCxJQUFBLEdBQU9QLEVBQUEsQ0FBR3JILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUNuQyxJQUFJdUUsU0FBQSxFQUFXLEtBQUtBLFNBQUEsR0FBWSxLQUFLQSxTQUFBLEdBQVlMLFFBQUEsQ0FBU0ssU0FBQSxFQUFXLEtBQUtBLFNBQVMsSUFBSUEsU0FBQTtJQUN2RixJQUFJNUgsT0FBQSxFQUFTLEtBQUtBLE9BQUEsR0FBVSxLQUFLQSxPQUFBLEdBQVV1SCxRQUFBLENBQVN2SCxPQUFBLEVBQVMsS0FBS0EsT0FBTyxJQUFJQSxPQUFBO0lBQzdFLE9BQU82SCxJQUFBLEtBQVMsU0FBWUEsSUFBQSxHQUFPRixHQUFBOztBQUUzQztTQUVnQkcsa0JBQWtCVCxFQUFBLEVBQUlDLEVBQUEsRUFBRTtFQUNwQyxJQUFJRCxFQUFBLEtBQU9ILEdBQUEsRUFBSyxPQUFPSSxFQUFBO0VBQ3ZCLE9BQU87SUFDSEQsRUFBQSxDQUFHcEgsS0FBQSxDQUFNLE1BQU1vRCxTQUFTO0lBQ3hCLElBQUl1RSxTQUFBLEdBQVksS0FBS0EsU0FBQTtNQUNqQjVILE9BQUEsR0FBVSxLQUFLQSxPQUFBO0lBQ25CLEtBQUs0SCxTQUFBLEdBQVksS0FBSzVILE9BQUEsR0FBVTtJQUNoQ3NILEVBQUEsQ0FBR3JILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUN4QixJQUFJdUUsU0FBQSxFQUFXLEtBQUtBLFNBQUEsR0FBWSxLQUFLQSxTQUFBLEdBQVlMLFFBQUEsQ0FBU0ssU0FBQSxFQUFXLEtBQUtBLFNBQVMsSUFBSUEsU0FBQTtJQUN2RixJQUFJNUgsT0FBQSxFQUFTLEtBQUtBLE9BQUEsR0FBVSxLQUFLQSxPQUFBLEdBQVV1SCxRQUFBLENBQVN2SCxPQUFBLEVBQVMsS0FBS0EsT0FBTyxJQUFJQSxPQUFBOztBQUVyRjtTQUVnQitILGtCQUFrQlYsRUFBQSxFQUFJQyxFQUFBLEVBQUU7RUFDcEMsSUFBSUQsRUFBQSxLQUFPSCxHQUFBLEVBQUssT0FBT0ksRUFBQTtFQUN2QixPQUFPLFVBQVVVLGFBQUEsRUFBYTtJQUMxQixJQUFJTCxHQUFBLEdBQU1OLEVBQUEsQ0FBR3BILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUNsQ2hILE1BQUEsQ0FBTzJMLGFBQUEsRUFBZUwsR0FBRztJQUN6QixJQUFJQyxTQUFBLEdBQVksS0FBS0EsU0FBQTtNQUNqQjVILE9BQUEsR0FBVSxLQUFLQSxPQUFBO0lBQ25CLEtBQUs0SCxTQUFBLEdBQVk7SUFDakIsS0FBSzVILE9BQUEsR0FBVTtJQUNmLElBQUk2SCxJQUFBLEdBQU9QLEVBQUEsQ0FBR3JILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUNuQyxJQUFJdUUsU0FBQSxFQUFXLEtBQUtBLFNBQUEsR0FBWSxLQUFLQSxTQUFBLEdBQVlMLFFBQUEsQ0FBU0ssU0FBQSxFQUFXLEtBQUtBLFNBQVMsSUFBSUEsU0FBQTtJQUN2RixJQUFJNUgsT0FBQSxFQUFTLEtBQUtBLE9BQUEsR0FBVSxLQUFLQSxPQUFBLEdBQVV1SCxRQUFBLENBQVN2SCxPQUFBLEVBQVMsS0FBS0EsT0FBTyxJQUFJQSxPQUFBO0lBQzdFLE9BQU8ySCxHQUFBLEtBQVEsU0FDVkUsSUFBQSxLQUFTLFNBQVksU0FBWUEsSUFBQSxHQUNqQ3hMLE1BQUEsQ0FBT3NMLEdBQUEsRUFBS0UsSUFBSTs7QUFFN0I7U0FFZ0JJLDJCQUEyQlosRUFBQSxFQUFJQyxFQUFBLEVBQUU7RUFDN0MsSUFBSUQsRUFBQSxLQUFPSCxHQUFBLEVBQUssT0FBT0ksRUFBQTtFQUN2QixPQUFPO0lBQ0gsSUFBSUEsRUFBQSxDQUFHckgsS0FBQSxDQUFNLE1BQU1vRCxTQUFTLE1BQU0sT0FBTyxPQUFPO0lBQ2hELE9BQU9nRSxFQUFBLENBQUdwSCxLQUFBLENBQU0sTUFBTW9ELFNBQVM7O0FBRXZDO1NBVWdCNkUsZ0JBQWdCYixFQUFBLEVBQUlDLEVBQUEsRUFBRTtFQUNsQyxJQUFJRCxFQUFBLEtBQU9ILEdBQUEsRUFBSyxPQUFPSSxFQUFBO0VBQ3ZCLE9BQU87SUFDSCxJQUFJSyxHQUFBLEdBQU1OLEVBQUEsQ0FBR3BILEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUNsQyxJQUFJc0UsR0FBQSxJQUFPLE9BQU9BLEdBQUEsQ0FBSVEsSUFBQSxLQUFTLFlBQVk7TUFDdkMsSUFBSUMsSUFBQSxHQUFPO1FBQ1B2SSxDQUFBLEdBQUl3RCxTQUFBLENBQVU5QyxNQUFBO1FBQ2Q3QixJQUFBLEdBQU8sSUFBSXZDLEtBQUEsQ0FBTTBELENBQUM7TUFDdEIsT0FBT0EsQ0FBQSxJQUFLbkIsSUFBQSxDQUFLbUIsQ0FBQSxJQUFLd0QsU0FBQSxDQUFVeEQsQ0FBQTtNQUNoQyxPQUFPOEgsR0FBQSxDQUFJUSxJQUFBLENBQUs7UUFDWixPQUFPYixFQUFBLENBQUdySCxLQUFBLENBQU1tSSxJQUFBLEVBQU0xSixJQUFJO09BQzdCOztJQUVMLE9BQU80SSxFQUFBLENBQUdySCxLQUFBLENBQU0sTUFBTW9ELFNBQVM7O0FBRXZDO0FDaEVBLElBQUlnRixRQUFBLEdBQVc7QUFHZixJQUNJQyxzQkFBQSxHQUF5QjtFQUV6QkMsZUFBQSxHQUFrQjtFQUNsQkMsZUFBQSxHQUFrQjtFQUNsQixDQUFDQyxxQkFBQSxFQUF1QkMsa0JBQUEsRUFBb0JDLHFCQUFxQixJQUFJLE9BQU92TSxPQUFBLEtBQVksY0FDcEYsTUFDQztJQUNHLElBQUl3TSxPQUFBLEdBQVV4TSxPQUFBLENBQVF5TSxPQUFBLENBQU87SUFDN0IsSUFBSSxPQUFPQyxNQUFBLEtBQVcsZUFBZSxDQUFDQSxNQUFBLENBQU9DLE1BQUEsRUFDekMsT0FBTyxDQUFDSCxPQUFBLEVBQVNsTSxRQUFBLENBQVNrTSxPQUFPLEdBQUdBLE9BQU87SUFFL0MsTUFBTUksT0FBQSxHQUFVRixNQUFBLENBQU9DLE1BQUEsQ0FBT0UsTUFBQSxDQUFPLFdBQVcsSUFBSUMsVUFBQSxDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsT0FBTyxDQUNIRixPQUFBLEVBQ0F0TSxRQUFBLENBQVNzTSxPQUFPLEdBQ2hCSixPQUFBLEM7S0FFUDtFQUNMTyxpQkFBQSxHQUFvQlQsa0JBQUEsSUFBc0JBLGtCQUFBLENBQW1CUCxJQUFBO0FBRTFELElBQU1pQixhQUFBLEdBQWdCWCxxQkFBQSxJQUF5QkEscUJBQUEsQ0FBc0JoRyxXQUFBO0FBQzVFLElBQU00RyxrQkFBQSxHQUFxQixDQUFDLENBQUNWLHFCQUFBO0FBRTdCLElBQUlXLHFCQUFBLEdBQXdCO0FBUzVCLElBQUlDLG9CQUFBLEdBQXVCWixxQkFBQSxHQUN2QjtFQUFPQSxxQkFBQSxDQUFzQlIsSUFBQSxDQUFLcUIsWUFBWTtBQUFFLElBRWhEN04sT0FBQSxDQUFRMEQsWUFBQSxHQUVKQSxZQUFBLENBQWFqQixJQUFBLENBQUssTUFBTW9MLFlBQVksSUFDcEM3TixPQUFBLENBQVE4TixnQkFBQSxHQUVKO0VBQ0ksSUFBSUMsU0FBQSxHQUFZQyxRQUFBLENBQVNDLGFBQUEsQ0FBYyxLQUFLO0VBQzNDLElBQUlILGdCQUFBLENBQWlCO0lBQ2xCRCxZQUFBLENBQVk7SUFDWkUsU0FBQSxHQUFZO0dBQ2YsRUFBR0csT0FBQSxDQUFRSCxTQUFBLEVBQVc7SUFBRUksVUFBQSxFQUFZO0VBQUksQ0FBRTtFQUMzQ0osU0FBQSxDQUFVSyxZQUFBLENBQWEsS0FBSyxHQUFHO0lBS25DO0VBQUt6SyxVQUFBLENBQVdrSyxZQUFBLEVBQWEsQ0FBQztBQUFFO0FBTzVDLElBQUlRLElBQUEsR0FBTyxTQUFBQSxDQUFVQyxRQUFBLEVBQVV2TCxJQUFBLEVBQUk7RUFDL0J3TCxjQUFBLENBQWV6SixJQUFBLENBQUssQ0FBQ3dKLFFBQUEsRUFBVXZMLElBQUksQ0FBQztFQUNwQyxJQUFJeUwsb0JBQUEsRUFBc0I7SUFDdEJaLG9CQUFBLENBQW9CO0lBQ3BCWSxvQkFBQSxHQUF1Qjs7QUFFL0I7QUFFQSxJQUFJQyxrQkFBQSxHQUFxQjtFQUNyQkQsb0JBQUEsR0FBdUI7RUFDdkJFLGVBQUEsR0FBa0I7RUFDbEJDLGVBQUEsR0FBa0I7RUFDbEJDLGdCQUFBLEdBQW1CO0VBQ25CQyxlQUFBLEdBQWtCckQsTUFBQTtBQUVmLElBQUlzRCxTQUFBLEdBQVk7RUFDbkJDLEVBQUEsRUFBSTtFQUNKM08sTUFBQSxFQUFRO0VBQ1I0TyxHQUFBLEVBQUs7RUFDTEMsVUFBQSxFQUFZO0VBQ1pDLFdBQUEsRUFBYUMsV0FBQTtFQUNiQyxHQUFBLEVBQUs7RUFDTEMsR0FBQSxFQUFLO0VBQ0xDLFFBQUEsRUFBVSxTQUFBQSxDQUFBO0lBQ04sS0FBS0wsVUFBQSxDQUFXcE8sT0FBQSxDQUFRME8sRUFBQSxJQUFFO01BQ3RCLElBQUk7UUFDQUosV0FBQSxDQUFZSSxFQUFBLENBQUcsSUFBSUEsRUFBQSxDQUFHLEVBQUU7ZUFDbkJoSCxDQUFBLEVBQVAsQ0FBVTtLQUNmOzs7QUFJRixJQUFJaUgsR0FBQSxHQUFNVixTQUFBO0FBRVYsSUFBSVAsY0FBQSxHQUFpQjtBQUNyQixJQUFJa0IsaUJBQUEsR0FBb0I7QUFDeEIsSUFBSUMsY0FBQSxHQUFpQjtTQUVKQyxhQUFhbE0sRUFBQSxFQUFFO0VBQ25DLElBQUksT0FBTyxTQUFTLFVBQVUsTUFBTSxJQUFJdUgsU0FBQSxDQUFVLHNDQUFzQztFQUN4RixLQUFLNEUsVUFBQSxHQUFhO0VBQ2xCLEtBQUtDLFdBQUEsR0FBY3RFLEdBQUE7RUFRbkIsS0FBS3VFLElBQUEsR0FBTztFQUVaLElBQUlDLEdBQUEsR0FBTyxLQUFLQyxJQUFBLEdBQU9SLEdBQUE7RUFFdkIsSUFBSTFILEtBQUEsRUFBTztJQUNQLEtBQUttSSxZQUFBLEdBQWUzSCxpQkFBQSxDQUFpQjtJQUNyQyxLQUFLNEgsS0FBQSxHQUFRO0lBQ2IsS0FBS0MsUUFBQSxHQUFXOztFQUdwQixJQUFJLE9BQU8xTSxFQUFBLEtBQU8sWUFBWTtJQUMxQixJQUFJQSxFQUFBLEtBQU9pSixRQUFBLEVBQVUsTUFBTSxJQUFJMUIsU0FBQSxDQUFVLGdCQUFnQjtJQUd6RCxLQUFLb0YsTUFBQSxHQUFTMUksU0FBQSxDQUFVO0lBQ3hCLEtBQUsySSxNQUFBLEdBQVMzSSxTQUFBLENBQVU7SUFDeEIsSUFBSSxLQUFLMEksTUFBQSxLQUFXLE9BQ2hCRSxlQUFBLENBQWdCLE1BQU0sS0FBS0QsTUFBTTtJQUNyQzs7RUFHSixLQUFLRCxNQUFBLEdBQVM7RUFDZCxLQUFLQyxNQUFBLEdBQVM7RUFDZCxFQUFFTixHQUFBLENBQUlmLEdBQUE7RUFDTnVCLGtCQUFBLENBQW1CLE1BQU05TSxFQUFFO0FBQy9CO0FBR0EsSUFBTStNLFFBQUEsR0FBVztFQUNiMU8sR0FBQSxFQUFLLFNBQUFBLENBQUE7SUFDRCxJQUFJaU8sR0FBQSxHQUFNUCxHQUFBO01BQUtpQixXQUFBLEdBQWNDLFdBQUE7SUFFN0IsU0FBU2xFLEtBQU1tRSxXQUFBLEVBQWFDLFVBQUEsRUFBVTtNQUNsQyxJQUFJQyxhQUFBLEdBQWdCLENBQUNkLEdBQUEsQ0FBSTNQLE1BQUEsS0FBVzJQLEdBQUEsS0FBUVAsR0FBQSxJQUFPaUIsV0FBQSxLQUFnQkMsV0FBQTtNQUNuRSxNQUFNSSxPQUFBLEdBQVVELGFBQUEsSUFBaUIsQ0FBQ0UsdUJBQUEsQ0FBdUI7TUFDekQsSUFBSXJNLEVBQUEsR0FBSyxJQUFJaUwsWUFBQSxDQUFhLENBQUN6QyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07UUFDdENDLG1CQUFBLENBQW9CLE1BQU0sSUFBSUMsUUFBQSxDQUMxQkMseUJBQUEsQ0FBMEJSLFdBQUEsRUFBYVosR0FBQSxFQUFLYyxhQUFBLEVBQWVDLE9BQU8sR0FDbEVLLHlCQUFBLENBQTBCUCxVQUFBLEVBQVliLEdBQUEsRUFBS2MsYUFBQSxFQUFlQyxPQUFPLEdBQ2pFNUQsT0FBQSxFQUNBOEQsTUFBQSxFQUNBakIsR0FBRyxDQUFDO09BQ1g7TUFDRGpJLEtBQUEsSUFBU3NKLHFCQUFBLENBQXNCMU0sRUFBQSxFQUFJLElBQUk7TUFDdkMsT0FBT0EsRUFBQTs7SUFHWDhILElBQUEsQ0FBS2pLLFNBQUEsR0FBWW1LLFFBQUE7SUFFakIsT0FBT0YsSUFBQTs7RUFJWHpLLEdBQUEsRUFBSyxTQUFBQSxDQUFVRSxLQUFBLEVBQUs7SUFDaEJQLE9BQUEsQ0FBUyxNQUFNLFFBQVFPLEtBQUEsSUFBU0EsS0FBQSxDQUFNTSxTQUFBLEtBQWNtSyxRQUFBLEdBQ2hEOEQsUUFBQSxHQUNBO01BQ0kxTyxHQUFBLEVBQUssU0FBQUEsQ0FBQTtRQUNELE9BQU9HLEtBQUE7O01BRVhGLEdBQUEsRUFBS3lPLFFBQUEsQ0FBU3pPO0tBQ2pCOzs7QUFLYlQsS0FBQSxDQUFNcU8sWUFBQSxDQUFhcE4sU0FBQSxFQUFXO0VBQzFCaUssSUFBQSxFQUFNZ0UsUUFBQTtFQUNOYSxLQUFBLEVBQU8sU0FBQUEsQ0FBVVYsV0FBQSxFQUFhQyxVQUFBLEVBQVU7SUFFcENLLG1CQUFBLENBQW9CLE1BQU0sSUFBSUMsUUFBQSxDQUFTLE1BQU0sTUFBTVAsV0FBQSxFQUFhQyxVQUFBLEVBQVlwQixHQUFHLENBQUM7O0VBR3BGOEIsS0FBQSxFQUFPLFNBQUFBLENBQVVWLFVBQUEsRUFBVTtJQUN2QixJQUFJbEosU0FBQSxDQUFVOUMsTUFBQSxLQUFXLEdBQUcsT0FBTyxLQUFLNEgsSUFBQSxDQUFLLE1BQU1vRSxVQUFVO0lBRTdELElBQUlXLEtBQUEsR0FBTzdKLFNBQUEsQ0FBVTtNQUNqQjhKLE9BQUEsR0FBVTlKLFNBQUEsQ0FBVTtJQUN4QixPQUFPLE9BQU82SixLQUFBLEtBQVMsYUFBYSxLQUFLL0UsSUFBQSxDQUFLLE1BQU1pRixHQUFBLElBR2hEQSxHQUFBLFlBQWVGLEtBQUEsR0FBT0MsT0FBQSxDQUFRQyxHQUFHLElBQUlDLGFBQUEsQ0FBY0QsR0FBRyxDQUFDLElBQ3pELEtBQUtqRixJQUFBLENBQUssTUFBTWlGLEdBQUEsSUFJZEEsR0FBQSxJQUFPQSxHQUFBLENBQUk5SSxJQUFBLEtBQVM0SSxLQUFBLEdBQU9DLE9BQUEsQ0FBUUMsR0FBRyxJQUFJQyxhQUFBLENBQWNELEdBQUcsQ0FBQzs7RUFHcEVFLE9BQUEsRUFBUyxTQUFBQSxDQUFVQyxTQUFBLEVBQVM7SUFDeEIsT0FBTyxLQUFLcEYsSUFBQSxDQUFLdkssS0FBQSxJQUFLO01BQ2xCMlAsU0FBQSxDQUFTO01BQ1QsT0FBTzNQLEtBQUE7T0FDUndQLEdBQUEsSUFBRztNQUNGRyxTQUFBLENBQVM7TUFDVCxPQUFPRixhQUFBLENBQWNELEdBQUc7S0FDM0I7O0VBR0xwSixLQUFBLEVBQU87SUFDSHZHLEdBQUEsRUFBSyxTQUFBQSxDQUFBO01BQ0QsSUFBSSxLQUFLNkgsTUFBQSxFQUFRLE9BQU8sS0FBS0EsTUFBQTtNQUM3QixJQUFJO1FBQ0FnRSxxQkFBQSxHQUF3QjtRQUN4QixJQUFJa0UsTUFBQSxHQUFTQyxRQUFBLENBQVUsTUFBTSxJQUFJbEYsZUFBZTtRQUNoRCxJQUFJdkUsS0FBQSxHQUFRd0osTUFBQSxDQUFPL0ksSUFBQSxDQUFLLG1CQUFtQjtRQUMzQyxJQUFJLEtBQUtzSCxNQUFBLEtBQVcsTUFBTSxLQUFLekcsTUFBQSxHQUFTdEIsS0FBQTtRQUN4QyxPQUFPQSxLQUFBOztRQUVQc0YscUJBQUEsR0FBd0I7Ozs7RUFLcENvRSxPQUFBLEVBQVMsU0FBQUEsQ0FBVUMsRUFBQSxFQUFJdkksR0FBQSxFQUFHO0lBQ3RCLE9BQU91SSxFQUFBLEdBQUtDLFFBQUEsR0FDUixJQUFJdEMsWUFBQSxDQUFhLENBQUN6QyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07TUFDN0IsSUFBSWtCLE1BQUEsR0FBU3ZPLFVBQUEsQ0FBVyxNQUFNcU4sTUFBQSxDQUFPLElBQUl4RyxVQUFBLENBQVcySCxPQUFBLENBQVExSSxHQUFHLENBQUMsR0FBR3VJLEVBQUU7TUFDckUsS0FBS3hGLElBQUEsQ0FBS1UsT0FBQSxFQUFTOEQsTUFBTSxFQUFFVyxPQUFBLENBQVFTLFlBQUEsQ0FBYTNQLElBQUEsQ0FBSyxNQUFNeVAsTUFBTSxDQUFDO0tBQ3JFLElBQUk7O0NBRWhCO0FBRUQsSUFBSSxPQUFPL0ssTUFBQSxLQUFXLGVBQWVBLE1BQUEsQ0FBT0gsV0FBQSxFQUN4Q3RGLE9BQUEsQ0FBUWlPLFlBQUEsQ0FBYXBOLFNBQUEsRUFBVzRFLE1BQUEsQ0FBT0gsV0FBQSxFQUFhLGVBQWU7QUFJdkU4SCxTQUFBLENBQVVPLEdBQUEsR0FBTWdELFFBQUEsQ0FBUTtBQUV4QixTQUFTbkIsU0FBU1AsV0FBQSxFQUFhQyxVQUFBLEVBQVkxRCxPQUFBLEVBQVM4RCxNQUFBLEVBQVFzQixJQUFBLEVBQUk7RUFDNUQsS0FBSzNCLFdBQUEsR0FBYyxPQUFPQSxXQUFBLEtBQWdCLGFBQWFBLFdBQUEsR0FBYztFQUNyRSxLQUFLQyxVQUFBLEdBQWEsT0FBT0EsVUFBQSxLQUFlLGFBQWFBLFVBQUEsR0FBYTtFQUNsRSxLQUFLMUQsT0FBQSxHQUFVQSxPQUFBO0VBQ2YsS0FBSzhELE1BQUEsR0FBU0EsTUFBQTtFQUNkLEtBQUtqQixHQUFBLEdBQU11QyxJQUFBO0FBQ2Y7QUFHQWhSLEtBQUEsQ0FBT3FPLFlBQUEsRUFBYztFQUNqQjRDLEdBQUEsRUFBSyxTQUFBQSxDQUFBO0lBQ0QsSUFBSUMsTUFBQSxHQUFTakwsVUFBQSxDQUFXakQsS0FBQSxDQUFNLE1BQU1vRCxTQUFTLEVBQ3hDL0IsR0FBQSxDQUFJOE0sd0JBQXdCO0lBQ2pDLE9BQU8sSUFBSTlDLFlBQUEsQ0FBYSxVQUFVekMsT0FBQSxFQUFTOEQsTUFBQSxFQUFNO01BQzdDLElBQUl3QixNQUFBLENBQU81TixNQUFBLEtBQVcsR0FBR3NJLE9BQUEsQ0FBUSxFQUFFO01BQ25DLElBQUl3RixTQUFBLEdBQVlGLE1BQUEsQ0FBTzVOLE1BQUE7TUFDdkI0TixNQUFBLENBQU8zUixPQUFBLENBQVEsQ0FBQ29GLENBQUEsRUFBRS9CLENBQUEsS0FBTXlMLFlBQUEsQ0FBYXpDLE9BQUEsQ0FBUWpILENBQUMsRUFBRXVHLElBQUEsQ0FBS2hHLENBQUEsSUFBQztRQUNsRGdNLE1BQUEsQ0FBT3RPLENBQUEsSUFBS3NDLENBQUE7UUFDWixJQUFJLENBQUMsR0FBRWtNLFNBQUEsRUFBV3hGLE9BQUEsQ0FBUXNGLE1BQU07U0FDakN4QixNQUFNLENBQUM7S0FDYjs7RUFHTDlELE9BQUEsRUFBU2pMLEtBQUEsSUFBSztJQUNWLElBQUlBLEtBQUEsWUFBaUIwTixZQUFBLEVBQWMsT0FBTzFOLEtBQUE7SUFDMUMsSUFBSUEsS0FBQSxJQUFTLE9BQU9BLEtBQUEsQ0FBTXVLLElBQUEsS0FBUyxZQUFZLE9BQU8sSUFBSW1ELFlBQUEsQ0FBYSxDQUFDekMsT0FBQSxFQUFTOEQsTUFBQSxLQUFNO01BQ25GL08sS0FBQSxDQUFNdUssSUFBQSxDQUFLVSxPQUFBLEVBQVM4RCxNQUFNO0tBQzdCO0lBQ0QsSUFBSXRNLEVBQUEsR0FBSyxJQUFJaUwsWUFBQSxDQUFhakQsUUFBQSxFQUFVLE1BQU16SyxLQUFLO0lBQy9DbVAscUJBQUEsQ0FBc0IxTSxFQUFBLEVBQUlrSyxnQkFBZ0I7SUFDMUMsT0FBT2xLLEVBQUE7O0VBR1hzTSxNQUFBLEVBQVFVLGFBQUE7RUFFUmlCLElBQUEsRUFBTSxTQUFBQSxDQUFBO0lBQ0YsSUFBSUgsTUFBQSxHQUFTakwsVUFBQSxDQUFXakQsS0FBQSxDQUFNLE1BQU1vRCxTQUFTLEVBQUUvQixHQUFBLENBQUk4TSx3QkFBd0I7SUFDM0UsT0FBTyxJQUFJOUMsWUFBQSxDQUFhLENBQUN6QyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07TUFDcEN3QixNQUFBLENBQU83TSxHQUFBLENBQUkxRCxLQUFBLElBQVMwTixZQUFBLENBQWF6QyxPQUFBLENBQVFqTCxLQUFLLEVBQUV1SyxJQUFBLENBQUtVLE9BQUEsRUFBUzhELE1BQU0sQ0FBQztLQUN4RTs7RUFHTHhCLEdBQUEsRUFBSztJQUNEMU4sR0FBQSxFQUFLQSxDQUFBLEtBQUkwTixHQUFBO0lBQ1R6TixHQUFBLEVBQUtFLEtBQUEsSUFBU3VOLEdBQUEsR0FBTXZOOztFQUd4QnlPLFdBQUEsRUFBYTtJQUFDNU8sR0FBQSxFQUFLQSxDQUFBLEtBQUk0TztFQUFXO0VBSWxDa0MsTUFBQSxFQUFRQyxRQUFBO0VBRVJDLE1BQUE7RUFFQUMsU0FBQSxFQUFXO0lBQ1BqUixHQUFBLEVBQUtBLENBQUEsS0FBTXVNLElBQUE7SUFDWHRNLEdBQUEsRUFBS0UsS0FBQSxJQUFLO01BQUtvTSxJQUFBLEdBQU9wTSxLQUFBO0lBQUs7O0VBRy9CNE0sZUFBQSxFQUFpQjtJQUNiL00sR0FBQSxFQUFLQSxDQUFBLEtBQU0rTSxlQUFBO0lBQ1g5TSxHQUFBLEVBQUtFLEtBQUEsSUFBSztNQUFLNE0sZUFBQSxHQUFrQjVNLEtBQUE7SUFBTTs7RUFHM0MrUSxNQUFBLEVBQVFBLENBQUN2UCxFQUFBLEVBQUl3UCxTQUFBLEtBQVM7SUFDbEIsT0FBTyxJQUFJdEQsWUFBQSxDQUFhLENBQUN6QyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07TUFDcEMsT0FBTzZCLFFBQUEsQ0FBUyxDQUFDSyxRQUFBLEVBQVNDLE9BQUEsS0FBTTtRQUM1QixJQUFJcEQsR0FBQSxHQUFNUCxHQUFBO1FBQ1ZPLEdBQUEsQ0FBSWQsVUFBQSxHQUFhO1FBQ2pCYyxHQUFBLENBQUliLFdBQUEsR0FBY2lFLE9BQUE7UUFDbEJwRCxHQUFBLENBQUlULFFBQUEsR0FBVzFELFFBQUEsQ0FBUztVQUlwQndILHdDQUFBLENBQXlDO1lBQ3JDLEtBQUtuRSxVQUFBLENBQVdySyxNQUFBLEtBQVcsSUFBSXNPLFFBQUEsQ0FBTyxJQUFLQyxPQUFBLENBQU8sS0FBS2xFLFVBQUEsQ0FBVyxFQUFFO1dBQ3ZFO1dBQ0ZjLEdBQUEsQ0FBSVQsUUFBUTtRQUNmN0wsRUFBQSxDQUFFO1NBQ0h3UCxTQUFBLEVBQVcvRixPQUFBLEVBQVM4RCxNQUFNO0tBQ2hDOztDQUVSO0FBRUQsSUFBSXZELGFBQUEsRUFBZTtFQUNmLElBQUlBLGFBQUEsQ0FBYzRGLFVBQUEsRUFBWTNSLE9BQUEsQ0FBU2lPLFlBQUEsRUFBYyxjQUFjO0lBQy9ELE1BQU0yRCxnQkFBQSxHQUFtQi9MLFVBQUEsQ0FBV2pELEtBQUEsQ0FBTSxNQUFNb0QsU0FBUyxFQUFFL0IsR0FBQSxDQUFJOE0sd0JBQXdCO0lBQ3ZGLE9BQU8sSUFBSTlDLFlBQUEsQ0FBYXpDLE9BQUEsSUFBTztNQUMzQixJQUFJb0csZ0JBQUEsQ0FBaUIxTyxNQUFBLEtBQVcsR0FBR3NJLE9BQUEsQ0FBUSxFQUFFO01BQzdDLElBQUl3RixTQUFBLEdBQVlZLGdCQUFBLENBQWlCMU8sTUFBQTtNQUNqQyxNQUFNMk8sT0FBQSxHQUFVLElBQUkvUyxLQUFBLENBQU1rUyxTQUFTO01BQ25DWSxnQkFBQSxDQUFpQnpTLE9BQUEsQ0FBUSxDQUFDMlMsQ0FBQSxFQUFHdFAsQ0FBQSxLQUFNeUwsWUFBQSxDQUFhekMsT0FBQSxDQUFRc0csQ0FBQyxFQUFFaEgsSUFBQSxDQUN2RHZLLEtBQUEsSUFBU3NSLE9BQUEsQ0FBUXJQLENBQUEsSUFBSztRQUFDdVAsTUFBQSxFQUFRO1FBQWF4UjtNQUFLLEdBQ2pEeVIsTUFBQSxJQUFVSCxPQUFBLENBQVFyUCxDQUFBLElBQUs7UUFBQ3VQLE1BQUEsRUFBUTtRQUFZQztNQUFNLENBQUMsRUFDbERsSCxJQUFBLENBQUssTUFBSSxFQUFFa0csU0FBQSxJQUFheEYsT0FBQSxDQUFRcUcsT0FBTyxDQUFDLENBQUM7S0FDakQ7R0FDSjtFQUNELElBQUk5RixhQUFBLENBQWM5RyxHQUFBLElBQU8sT0FBT2dOLGNBQUEsS0FBbUIsYUFBYWpTLE9BQUEsQ0FBUWlPLFlBQUEsRUFBYyxPQUFPO0lBQ3pGLE1BQU0yRCxnQkFBQSxHQUFtQi9MLFVBQUEsQ0FBV2pELEtBQUEsQ0FBTSxNQUFNb0QsU0FBUyxFQUFFL0IsR0FBQSxDQUFJOE0sd0JBQXdCO0lBQ3ZGLE9BQU8sSUFBSTlDLFlBQUEsQ0FBYSxDQUFDekMsT0FBQSxFQUFTOEQsTUFBQSxLQUFNO01BQ3BDLElBQUlzQyxnQkFBQSxDQUFpQjFPLE1BQUEsS0FBVyxHQUFHb00sTUFBQSxDQUFPLElBQUkyQyxjQUFBLENBQWUsRUFBRSxDQUFDO01BQ2hFLElBQUlqQixTQUFBLEdBQVlZLGdCQUFBLENBQWlCMU8sTUFBQTtNQUNqQyxNQUFNaUYsUUFBQSxHQUFXLElBQUlySixLQUFBLENBQU1rUyxTQUFTO01BQ3BDWSxnQkFBQSxDQUFpQnpTLE9BQUEsQ0FBUSxDQUFDMlMsQ0FBQSxFQUFHdFAsQ0FBQSxLQUFNeUwsWUFBQSxDQUFhekMsT0FBQSxDQUFRc0csQ0FBQyxFQUFFaEgsSUFBQSxDQUN2RHZLLEtBQUEsSUFBU2lMLE9BQUEsQ0FBUWpMLEtBQUssR0FDdEIyUixPQUFBLElBQU87UUFDSC9KLFFBQUEsQ0FBUzNGLENBQUEsSUFBSzBQLE9BQUE7UUFDZCxJQUFJLENBQUMsR0FBRWxCLFNBQUEsRUFBVzFCLE1BQUEsQ0FBTyxJQUFJMkMsY0FBQSxDQUFlOUosUUFBUSxDQUFDO09BQ3hELENBQUM7S0FDVDtHQUNKOztBQVNMLFNBQVMwRyxtQkFBb0JzRCxPQUFBLEVBQVNwUSxFQUFBLEVBQUU7RUFHcEMsSUFBSTtJQUNBQSxFQUFBLENBQUd4QixLQUFBLElBQUs7TUFDSixJQUFJNFIsT0FBQSxDQUFRekQsTUFBQSxLQUFXLE1BQU07TUFDN0IsSUFBSW5PLEtBQUEsS0FBVTRSLE9BQUEsRUFBUyxNQUFNLElBQUk3SSxTQUFBLENBQVUsMkNBQTJDO01BQ3RGLElBQUk4SSxpQkFBQSxHQUFvQkQsT0FBQSxDQUFRL0QsSUFBQSxJQUFRaUUsbUJBQUEsQ0FBbUI7TUFDM0QsSUFBSTlSLEtBQUEsSUFBUyxPQUFPQSxLQUFBLENBQU11SyxJQUFBLEtBQVMsWUFBWTtRQUMzQytELGtCQUFBLENBQW1Cc0QsT0FBQSxFQUFTLENBQUMzRyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07VUFDeEMvTyxLQUFBLFlBQWlCME4sWUFBQSxHQUNiMU4sS0FBQSxDQUFNb1AsS0FBQSxDQUFNbkUsT0FBQSxFQUFTOEQsTUFBTSxJQUMzQi9PLEtBQUEsQ0FBTXVLLElBQUEsQ0FBS1UsT0FBQSxFQUFTOEQsTUFBTTtTQUNqQzthQUNFO1FBQ0g2QyxPQUFBLENBQVF6RCxNQUFBLEdBQVM7UUFDakJ5RCxPQUFBLENBQVF4RCxNQUFBLEdBQVNwTyxLQUFBO1FBQ2pCK1IscUJBQUEsQ0FBc0JILE9BQU87O01BRWpDLElBQUlDLGlCQUFBLEVBQW1CRyxpQkFBQSxDQUFpQjtPQUN6QzNELGVBQUEsQ0FBZ0I3TixJQUFBLENBQUssTUFBTW9SLE9BQU8sQ0FBQztXQUNqQ3RQLEVBQUEsRUFBUDtJQUNFK0wsZUFBQSxDQUFnQnVELE9BQUEsRUFBU3RQLEVBQUU7O0FBRW5DO0FBRUEsU0FBUytMLGdCQUFpQnVELE9BQUEsRUFBU0gsTUFBQSxFQUFNO0VBQ3JDL0UsZUFBQSxDQUFnQjdKLElBQUEsQ0FBSzRPLE1BQU07RUFDM0IsSUFBSUcsT0FBQSxDQUFRekQsTUFBQSxLQUFXLE1BQU07RUFDN0IsSUFBSTBELGlCQUFBLEdBQW9CRCxPQUFBLENBQVEvRCxJQUFBLElBQVFpRSxtQkFBQSxDQUFtQjtFQUMzREwsTUFBQSxHQUFTN0UsZUFBQSxDQUFnQjZFLE1BQU07RUFDL0JHLE9BQUEsQ0FBUXpELE1BQUEsR0FBUztFQUNqQnlELE9BQUEsQ0FBUXhELE1BQUEsR0FBU3FELE1BQUE7RUFDakI1TCxLQUFBLElBQVM0TCxNQUFBLEtBQVcsUUFBUSxPQUFPQSxNQUFBLEtBQVcsWUFBWSxDQUFDQSxNQUFBLENBQU9RLFFBQUEsSUFBWTlQLFFBQUEsQ0FBUztJQUNuRixJQUFJK1AsUUFBQSxHQUFXeFIscUJBQUEsQ0FBc0IrUSxNQUFBLEVBQVEsT0FBTztJQUNwREEsTUFBQSxDQUFPUSxRQUFBLEdBQVdMLE9BQUE7SUFDbEJuUyxPQUFBLENBQVFnUyxNQUFBLEVBQVEsU0FBUztNQUNyQjVSLEdBQUEsRUFBS0EsQ0FBQSxLQUNENkwscUJBQUEsR0FDSXdHLFFBQUEsS0FBYUEsUUFBQSxDQUFTclMsR0FBQSxHQUNWcVMsUUFBQSxDQUFTclMsR0FBQSxDQUFJd0MsS0FBQSxDQUFNb1AsTUFBTSxJQUN6QlMsUUFBQSxDQUFTbFMsS0FBQSxJQUNyQjRSLE9BQUEsQ0FBUXhMO0tBQ25CO0dBQ0o7RUFFRCtMLHlCQUFBLENBQTBCUCxPQUFPO0VBQ2pDRyxxQkFBQSxDQUFzQkgsT0FBTztFQUM3QixJQUFJQyxpQkFBQSxFQUFtQkcsaUJBQUEsQ0FBaUI7QUFDNUM7QUFFQSxTQUFTRCxzQkFBdUJILE9BQUEsRUFBTztFQUVuQyxJQUFJUSxTQUFBLEdBQVlSLE9BQUEsQ0FBUWpFLFVBQUE7RUFDeEJpRSxPQUFBLENBQVFqRSxVQUFBLEdBQWE7RUFDckIsU0FBUzFMLENBQUEsR0FBSSxHQUFHb1EsR0FBQSxHQUFNRCxTQUFBLENBQVV6UCxNQUFBLEVBQVFWLENBQUEsR0FBSW9RLEdBQUEsRUFBSyxFQUFFcFEsQ0FBQSxFQUFHO0lBQ2xEK00sbUJBQUEsQ0FBb0I0QyxPQUFBLEVBQVNRLFNBQUEsQ0FBVW5RLENBQUEsQ0FBRTs7RUFFN0MsSUFBSTZMLEdBQUEsR0FBTThELE9BQUEsQ0FBUTdELElBQUE7RUFDbEIsRUFBRUQsR0FBQSxDQUFJZixHQUFBLElBQU9lLEdBQUEsQ0FBSVQsUUFBQSxDQUFRO0VBQ3pCLElBQUlHLGlCQUFBLEtBQXNCLEdBQUc7SUFNekIsRUFBRUEsaUJBQUE7SUFDRnBCLElBQUEsQ0FBSztNQUNELElBQUksRUFBRW9CLGlCQUFBLEtBQXNCLEdBQUc4RSxvQkFBQSxDQUFvQjtPQUNwRCxFQUFFOztBQUViO0FBRUEsU0FBU3RELG9CQUFvQjRDLE9BQUEsRUFBU1csUUFBQSxFQUFRO0VBQzFDLElBQUlYLE9BQUEsQ0FBUXpELE1BQUEsS0FBVyxNQUFNO0lBQ3pCeUQsT0FBQSxDQUFRakUsVUFBQSxDQUFXOUssSUFBQSxDQUFLMFAsUUFBUTtJQUNoQzs7RUFHSixJQUFJQyxFQUFBLEdBQUtaLE9BQUEsQ0FBUXpELE1BQUEsR0FBU29FLFFBQUEsQ0FBUzdELFdBQUEsR0FBYzZELFFBQUEsQ0FBUzVELFVBQUE7RUFDMUQsSUFBSTZELEVBQUEsS0FBTyxNQUFNO0lBRWIsUUFBUVosT0FBQSxDQUFRekQsTUFBQSxHQUFTb0UsUUFBQSxDQUFTdEgsT0FBQSxHQUFVc0gsUUFBQSxDQUFTeEQsTUFBQSxFQUFTNkMsT0FBQSxDQUFReEQsTUFBTTs7RUFFaEYsRUFBRW1FLFFBQUEsQ0FBU3pFLEdBQUEsQ0FBSWYsR0FBQTtFQUNmLEVBQUVTLGlCQUFBO0VBQ0ZwQixJQUFBLENBQU1xRyxZQUFBLEVBQWMsQ0FBQ0QsRUFBQSxFQUFJWixPQUFBLEVBQVNXLFFBQVEsQ0FBQztBQUMvQztBQUVBLFNBQVNFLGFBQWNELEVBQUEsRUFBSVosT0FBQSxFQUFTVyxRQUFBLEVBQVE7RUFDeEMsSUFBSTtJQUdBNUYsZ0JBQUEsR0FBbUJpRixPQUFBO0lBR25CLElBQUljLEdBQUE7TUFBSzFTLEtBQUEsR0FBUTRSLE9BQUEsQ0FBUXhELE1BQUE7SUFFekIsSUFBSXdELE9BQUEsQ0FBUXpELE1BQUEsRUFBUTtNQUVoQnVFLEdBQUEsR0FBTUYsRUFBQSxDQUFJeFMsS0FBSztXQUNaO01BRUgsSUFBSTBNLGVBQUEsQ0FBZ0IvSixNQUFBLEVBQVErSixlQUFBLEdBQWtCO01BQzlDZ0csR0FBQSxHQUFNRixFQUFBLENBQUd4UyxLQUFLO01BQ2QsSUFBSTBNLGVBQUEsQ0FBZ0IzSixPQUFBLENBQVEvQyxLQUFLLE1BQU0sSUFDbkMyUyxrQkFBQSxDQUFtQmYsT0FBTzs7SUFFbENXLFFBQUEsQ0FBU3RILE9BQUEsQ0FBUXlILEdBQUc7V0FDZnBNLENBQUEsRUFBUDtJQUVFaU0sUUFBQSxDQUFTeEQsTUFBQSxDQUFPekksQ0FBQzs7SUFHakJxRyxnQkFBQSxHQUFtQjtJQUNuQixJQUFJLEVBQUVhLGlCQUFBLEtBQXNCLEdBQUc4RSxvQkFBQSxDQUFvQjtJQUNuRCxFQUFFQyxRQUFBLENBQVN6RSxHQUFBLENBQUlmLEdBQUEsSUFBT3dGLFFBQUEsQ0FBU3pFLEdBQUEsQ0FBSVQsUUFBQSxDQUFROztBQUVuRDtBQUVBLFNBQVN3QyxTQUFVK0IsT0FBQSxFQUFTaEMsTUFBQSxFQUFRZ0QsS0FBQSxFQUFLO0VBQ3JDLElBQUloRCxNQUFBLENBQU9qTixNQUFBLEtBQVdpUSxLQUFBLEVBQU8sT0FBT2hELE1BQUE7RUFDcEMsSUFBSXhKLEtBQUEsR0FBUTtFQUNaLElBQUl3TCxPQUFBLENBQVF6RCxNQUFBLEtBQVcsT0FBTztJQUMxQixJQUFJd0QsT0FBQSxHQUFVQyxPQUFBLENBQVF4RCxNQUFBO01BQ2xCeUUsU0FBQTtNQUNBbE0sT0FBQTtJQUVKLElBQUlnTCxPQUFBLElBQVcsTUFBTTtNQUNqQmtCLFNBQUEsR0FBWWxCLE9BQUEsQ0FBUWpMLElBQUEsSUFBUTtNQUM1QkMsT0FBQSxHQUFVZ0wsT0FBQSxDQUFRaEwsT0FBQSxJQUFXZ0wsT0FBQTtNQUM3QnZMLEtBQUEsR0FBUUcsV0FBQSxDQUFZb0wsT0FBQSxFQUFTLENBQUM7V0FDM0I7TUFDSGtCLFNBQUEsR0FBWWxCLE9BQUE7TUFDWmhMLE9BQUEsR0FBVTs7SUFFZGlKLE1BQUEsQ0FBTy9NLElBQUEsQ0FBS2dRLFNBQUEsSUFBYWxNLE9BQUEsR0FBVSxPQUFPQSxPQUFBLEdBQVUsTUFBTVAsS0FBSzs7RUFFbkUsSUFBSVAsS0FBQSxFQUFPO0lBQ1BPLEtBQUEsR0FBUUcsV0FBQSxDQUFZcUwsT0FBQSxDQUFRNUQsWUFBQSxFQUFjLENBQUM7SUFDM0MsSUFBSTVILEtBQUEsSUFBU3dKLE1BQUEsQ0FBTzdNLE9BQUEsQ0FBUXFELEtBQUssTUFBTSxJQUFJd0osTUFBQSxDQUFPL00sSUFBQSxDQUFLdUQsS0FBSztJQUM1RCxJQUFJd0wsT0FBQSxDQUFRM0QsS0FBQSxFQUFPNEIsUUFBQSxDQUFTK0IsT0FBQSxDQUFRM0QsS0FBQSxFQUFPMkIsTUFBQSxFQUFRZ0QsS0FBSzs7RUFFNUQsT0FBT2hELE1BQUE7QUFDWDtBQUVBLFNBQVNULHNCQUFzQnlDLE9BQUEsRUFBU2tCLElBQUEsRUFBSTtFQUV4QyxJQUFJQyxPQUFBLEdBQVVELElBQUEsR0FBT0EsSUFBQSxDQUFLNUUsUUFBQSxHQUFXLElBQUk7RUFDekMsSUFBSTZFLE9BQUEsR0FBVXJJLHNCQUFBLEVBQXdCO0lBQ2xDa0gsT0FBQSxDQUFRM0QsS0FBQSxHQUFRNkUsSUFBQTtJQUNoQmxCLE9BQUEsQ0FBUTFELFFBQUEsR0FBVzZFLE9BQUE7O0FBRTNCO0FBS0EsU0FBU25ILGFBQUEsRUFBWTtFQUNqQmtHLG1CQUFBLENBQW1CLEtBQU1FLGlCQUFBLENBQWlCO0FBQzlDO1NBRWdCRixvQkFBQSxFQUFtQjtFQUMvQixJQUFJa0IsV0FBQSxHQUFjeEcsa0JBQUE7RUFDbEJBLGtCQUFBLEdBQXFCO0VBQ3JCRCxvQkFBQSxHQUF1QjtFQUN2QixPQUFPeUcsV0FBQTtBQUNYO1NBVWdCaEIsa0JBQUEsRUFBaUI7RUFDN0IsSUFBSWlCLFNBQUEsRUFBV2hSLENBQUEsRUFBR1MsQ0FBQTtFQUNsQixHQUFHO0lBQ0MsT0FBTzRKLGNBQUEsQ0FBZTNKLE1BQUEsR0FBUyxHQUFHO01BQzlCc1EsU0FBQSxHQUFZM0csY0FBQTtNQUNaQSxjQUFBLEdBQWlCO01BQ2pCNUosQ0FBQSxHQUFJdVEsU0FBQSxDQUFVdFEsTUFBQTtNQUNkLEtBQUtWLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBRyxFQUFFVCxDQUFBLEVBQUc7UUFDcEIsSUFBSUQsSUFBQSxHQUFPaVIsU0FBQSxDQUFVaFIsQ0FBQTtRQUNyQkQsSUFBQSxDQUFLLEdBQUdLLEtBQUEsQ0FBTSxNQUFNTCxJQUFBLENBQUssRUFBRTs7O1dBRzlCc0ssY0FBQSxDQUFlM0osTUFBQSxHQUFTO0VBQ2pDNkosa0JBQUEsR0FBcUI7RUFDckJELG9CQUFBLEdBQXVCO0FBQzNCO0FBRUEsU0FBUytGLHFCQUFBLEVBQW9CO0VBQ3pCLElBQUlZLGFBQUEsR0FBZ0J6RyxlQUFBO0VBQ3BCQSxlQUFBLEdBQWtCO0VBQ2xCeUcsYUFBQSxDQUFjdFUsT0FBQSxDQUFRMlMsQ0FBQSxJQUFDO0lBQ25CQSxDQUFBLENBQUV4RCxJQUFBLENBQUtkLFdBQUEsQ0FBWTdOLElBQUEsQ0FBSyxNQUFNbVMsQ0FBQSxDQUFFbkQsTUFBQSxFQUFRbUQsQ0FBQztHQUM1QztFQUNELElBQUk0QixVQUFBLEdBQWExRixjQUFBLENBQWU1TSxLQUFBLENBQU0sQ0FBQztFQUN2QyxJQUFJb0IsQ0FBQSxHQUFJa1IsVUFBQSxDQUFXeFEsTUFBQTtFQUNuQixPQUFPVixDQUFBLEVBQUdrUixVQUFBLENBQVcsRUFBRWxSLENBQUEsRUFBRTtBQUM3QjtBQUVBLFNBQVNrUCx5Q0FBMEMzUCxFQUFBLEVBQUU7RUFDakQsU0FBUzRSLFVBQUEsRUFBUztJQUNkNVIsRUFBQSxDQUFFO0lBQ0ZpTSxjQUFBLENBQWVqSyxNQUFBLENBQU9pSyxjQUFBLENBQWUxSyxPQUFBLENBQVFxUSxTQUFTLEdBQUcsQ0FBQzs7RUFFOUQzRixjQUFBLENBQWU1SyxJQUFBLENBQUt1USxTQUFTO0VBQzdCLEVBQUU1RixpQkFBQTtFQUNGcEIsSUFBQSxDQUFLO0lBQ0QsSUFBSSxFQUFFb0IsaUJBQUEsS0FBc0IsR0FBRzhFLG9CQUFBLENBQW9CO0tBQ3BELEVBQUU7QUFDVDtBQUVBLFNBQVNILDBCQUEwQlAsT0FBQSxFQUFPO0VBSXRDLElBQUksQ0FBQ25GLGVBQUEsQ0FBZ0I0RyxJQUFBLENBQUs5QixDQUFBLElBQUtBLENBQUEsQ0FBRW5ELE1BQUEsS0FBV3dELE9BQUEsQ0FBUXhELE1BQU0sR0FDdEQzQixlQUFBLENBQWdCNUosSUFBQSxDQUFLK08sT0FBTztBQUNwQztBQUVBLFNBQVNlLG1CQUFtQmYsT0FBQSxFQUFPO0VBSS9CLElBQUkzUCxDQUFBLEdBQUl3SyxlQUFBLENBQWdCOUosTUFBQTtFQUN4QixPQUFPVixDQUFBLEVBQUcsSUFBSXdLLGVBQUEsQ0FBZ0IsRUFBRXhLLENBQUEsRUFBR21NLE1BQUEsS0FBV3dELE9BQUEsQ0FBUXhELE1BQUEsRUFBUTtJQUcxRDNCLGVBQUEsQ0FBZ0JqSixNQUFBLENBQU92QixDQUFBLEVBQUcsQ0FBQztJQUMzQjs7QUFFUjtBQUVBLFNBQVN3TixjQUFlZ0MsTUFBQSxFQUFNO0VBQzFCLE9BQU8sSUFBSS9ELFlBQUEsQ0FBYWpELFFBQUEsRUFBVSxPQUFPZ0gsTUFBTTtBQUNuRDtTQUVnQjZCLEtBQU05UixFQUFBLEVBQUkrUixZQUFBLEVBQVk7RUFDbEMsSUFBSXpGLEdBQUEsR0FBTVAsR0FBQTtFQUNWLE9BQU87SUFDSCxJQUFJeUYsV0FBQSxHQUFjbEIsbUJBQUEsQ0FBbUI7TUFDakMwQixVQUFBLEdBQWFqRyxHQUFBO0lBRWpCLElBQUk7TUFDQWtHLFlBQUEsQ0FBYTNGLEdBQUEsRUFBSyxJQUFJO01BQ3RCLE9BQU90TSxFQUFBLENBQUdhLEtBQUEsQ0FBTSxNQUFNb0QsU0FBUzthQUMxQmEsQ0FBQSxFQUFQO01BQ0VpTixZQUFBLElBQWdCQSxZQUFBLENBQWFqTixDQUFDOztNQUU5Qm1OLFlBQUEsQ0FBYUQsVUFBQSxFQUFZLEtBQUs7TUFDOUIsSUFBSVIsV0FBQSxFQUFhaEIsaUJBQUEsQ0FBaUI7OztBQUc5QztBQU1BLElBQU0wQixJQUFBLEdBQU87RUFBRUMsTUFBQSxFQUFRO0VBQUdDLE1BQUEsRUFBUTtFQUFHOUcsRUFBQSxFQUFJO0FBQUM7QUFDMUMsSUFBSStHLFdBQUEsR0FBYztBQUNsQixJQUFJQyxTQUFBLEdBQVk7QUFDaEIsSUFBSUMsVUFBQSxHQUFhO0FBQ2pCLElBQUl0RixXQUFBLEdBQWM7QUFHbEIsSUFBSXVGLGVBQUEsR0FBa0I7U0FDTnBELFNBQVVwUCxFQUFBLEVBQUl5UyxNQUFBLEVBQU9DLEVBQUEsRUFBSUMsRUFBQSxFQUFFO0VBQ3ZDLElBQUlDLE1BQUEsR0FBUzdHLEdBQUE7SUFDVE8sR0FBQSxHQUFNelAsTUFBQSxDQUFPa0MsTUFBQSxDQUFPNlQsTUFBTTtFQUM5QnRHLEdBQUEsQ0FBSXNHLE1BQUEsR0FBU0EsTUFBQTtFQUNidEcsR0FBQSxDQUFJZixHQUFBLEdBQU07RUFDVmUsR0FBQSxDQUFJM1AsTUFBQSxHQUFTO0VBQ2IyUCxHQUFBLENBQUloQixFQUFBLEdBQUssRUFBRWtILGVBQUE7RUFFWCxJQUFJSyxTQUFBLEdBQVl4SCxTQUFBLENBQVVPLEdBQUE7RUFDMUJVLEdBQUEsQ0FBSVYsR0FBQSxHQUFNM0Isa0JBQUEsR0FBcUI7SUFDM0JqTixPQUFBLEVBQVNrUCxZQUFBO0lBQ1Q0RyxXQUFBLEVBQWE7TUFBQ3RVLEtBQUEsRUFBTzBOLFlBQUE7TUFBYzNOLFlBQUEsRUFBYztNQUFNRSxRQUFBLEVBQVU7SUFBSTtJQUNyRXFRLEdBQUEsRUFBSzVDLFlBQUEsQ0FBYTRDLEdBQUE7SUFDbEJJLElBQUEsRUFBTWhELFlBQUEsQ0FBYWdELElBQUE7SUFDbkJVLFVBQUEsRUFBWTFELFlBQUEsQ0FBYTBELFVBQUE7SUFDekIxTSxHQUFBLEVBQUtnSixZQUFBLENBQWFoSixHQUFBO0lBQ2xCdUcsT0FBQSxFQUFTeUMsWUFBQSxDQUFhekMsT0FBQTtJQUN0QjhELE1BQUEsRUFBUXJCLFlBQUEsQ0FBYXFCLE1BQUE7SUFDckJ3RixLQUFBLEVBQU9DLHFCQUFBLENBQXVCSCxTQUFBLENBQVVFLEtBQUEsRUFBT3pHLEdBQUc7SUFDbEQyRyxLQUFBLEVBQU9ELHFCQUFBLENBQXVCSCxTQUFBLENBQVVJLEtBQUEsRUFBTzNHLEdBQUc7TUFDbEQ7RUFDSixJQUFJbUcsTUFBQSxFQUFPeFYsTUFBQSxDQUFPcVAsR0FBQSxFQUFLbUcsTUFBSztFQU01QixFQUFFRyxNQUFBLENBQU9ySCxHQUFBO0VBQ1RlLEdBQUEsQ0FBSVQsUUFBQSxHQUFXO0lBQ1gsRUFBRSxLQUFLK0csTUFBQSxDQUFPckgsR0FBQSxJQUFPLEtBQUtxSCxNQUFBLENBQU8vRyxRQUFBLENBQVE7O0VBRTdDLElBQUk1SyxFQUFBLEdBQUtvTyxNQUFBLENBQVEvQyxHQUFBLEVBQUt0TSxFQUFBLEVBQUkwUyxFQUFBLEVBQUlDLEVBQUU7RUFDaEMsSUFBSXJHLEdBQUEsQ0FBSWYsR0FBQSxLQUFRLEdBQUdlLEdBQUEsQ0FBSVQsUUFBQSxDQUFRO0VBQy9CLE9BQU81SyxFQUFBO0FBQ1g7U0FJZ0JpUyx3QkFBQSxFQUF1QjtFQUNuQyxJQUFJLENBQUNoQixJQUFBLENBQUs1RyxFQUFBLEVBQUk0RyxJQUFBLENBQUs1RyxFQUFBLEdBQUssRUFBRStHLFdBQUE7RUFDMUIsRUFBRUgsSUFBQSxDQUFLQyxNQUFBO0VBQ1BELElBQUEsQ0FBS0UsTUFBQSxJQUFVaEosZUFBQTtFQUNmLE9BQU84SSxJQUFBLENBQUs1RyxFQUFBO0FBQ2hCO1NBS2dCZ0Msd0JBQUEsRUFBdUI7RUFDbkMsSUFBSSxDQUFDNEUsSUFBQSxDQUFLQyxNQUFBLEVBQVEsT0FBTztFQUN6QixJQUFJLEVBQUVELElBQUEsQ0FBS0MsTUFBQSxLQUFXLEdBQUdELElBQUEsQ0FBSzVHLEVBQUEsR0FBSztFQUNuQzRHLElBQUEsQ0FBS0UsTUFBQSxHQUFTRixJQUFBLENBQUtDLE1BQUEsR0FBUy9JLGVBQUE7RUFDNUIsT0FBTztBQUNYO0FBRUEsS0FBSyxLQUFHVyxpQkFBQSxFQUFtQnhJLE9BQUEsQ0FBUSxlQUFlLE1BQU0sSUFBSTtFQUd4RDJSLHVCQUFBLEdBQTBCNUYsdUJBQUEsR0FBMEJ4RixHQUFBOztTQUl4Q2tILHlCQUEwQm1FLGVBQUEsRUFBZTtFQUNyRCxJQUFJakIsSUFBQSxDQUFLRSxNQUFBLElBQVVlLGVBQUEsSUFBbUJBLGVBQUEsQ0FBZ0I5UCxXQUFBLEtBQWdCMkcsYUFBQSxFQUFlO0lBQ2pGa0osdUJBQUEsQ0FBdUI7SUFDdkIsT0FBT0MsZUFBQSxDQUFnQnBLLElBQUEsQ0FBS2hHLENBQUEsSUFBQztNQUN6QnVLLHVCQUFBLENBQXVCO01BQ3ZCLE9BQU92SyxDQUFBO09BQ1IrQixDQUFBLElBQUM7TUFDQXdJLHVCQUFBLENBQXVCO01BQ3ZCLE9BQU84RixTQUFBLENBQVV0TyxDQUFDO0tBQ3JCOztFQUVMLE9BQU9xTyxlQUFBO0FBQ1g7QUFFQSxTQUFTRSxjQUFjQyxVQUFBLEVBQVU7RUFDN0IsRUFBRXJHLFdBQUE7RUFFRixJQUFJLENBQUNpRixJQUFBLENBQUtFLE1BQUEsSUFBVSxFQUFFRixJQUFBLENBQUtFLE1BQUEsS0FBVyxHQUFHO0lBQ3JDRixJQUFBLENBQUtFLE1BQUEsR0FBU0YsSUFBQSxDQUFLNUcsRUFBQSxHQUFLOztFQUc1QmdILFNBQUEsQ0FBVWpSLElBQUEsQ0FBSzBLLEdBQUc7RUFDbEJrRyxZQUFBLENBQWFxQixVQUFBLEVBQVksSUFBSTtBQUNqQztBQUVBLFNBQVNDLGNBQUEsRUFBYTtFQUNsQixJQUFJMUUsSUFBQSxHQUFPeUQsU0FBQSxDQUFVQSxTQUFBLENBQVVuUixNQUFBLEdBQU87RUFDdENtUixTQUFBLENBQVVrQixHQUFBLENBQUc7RUFDYnZCLFlBQUEsQ0FBYXBELElBQUEsRUFBTSxLQUFLO0FBQzVCO0FBRUEsU0FBU29ELGFBQWNxQixVQUFBLEVBQVlHLGFBQUEsRUFBYTtFQUM1QyxJQUFJQyxXQUFBLEdBQWMzSCxHQUFBO0VBQ2xCLElBQUkwSCxhQUFBLEdBQWdCdkIsSUFBQSxDQUFLRSxNQUFBLEtBQVcsQ0FBQ0csVUFBQSxNQUFnQmUsVUFBQSxLQUFldkgsR0FBQSxJQUFPd0csVUFBQSxLQUFlLENBQUMsR0FBRUEsVUFBQSxJQUFjZSxVQUFBLEtBQWV2SCxHQUFBLEdBQU07SUFHNUg0SCxzQkFBQSxDQUF1QkYsYUFBQSxHQUFnQkosYUFBQSxDQUFjclUsSUFBQSxDQUFLLE1BQU1zVSxVQUFVLElBQUlDLGFBQWE7O0VBRS9GLElBQUlELFVBQUEsS0FBZXZILEdBQUEsRUFBSztFQUV4QkEsR0FBQSxHQUFNdUgsVUFBQTtFQUdOLElBQUlJLFdBQUEsS0FBZ0JySSxTQUFBLEVBQVdBLFNBQUEsQ0FBVU8sR0FBQSxHQUFNZ0QsUUFBQSxDQUFRO0VBRXZELElBQUkzRSxrQkFBQSxFQUFvQjtJQUVwQixJQUFJMkosYUFBQSxHQUFnQnZJLFNBQUEsQ0FBVU8sR0FBQSxDQUFJNU8sT0FBQTtJQUVsQyxJQUFJNlcsU0FBQSxHQUFZUCxVQUFBLENBQVcxSCxHQUFBO0lBSTNCdEMsa0JBQUEsQ0FBbUJQLElBQUEsR0FBTzhLLFNBQUEsQ0FBVWQsS0FBQTtJQUNwQ2EsYUFBQSxDQUFjOVUsU0FBQSxDQUFVaUssSUFBQSxHQUFPOEssU0FBQSxDQUFVWixLQUFBO0lBRXpDLElBQUlTLFdBQUEsQ0FBWS9XLE1BQUEsSUFBVTJXLFVBQUEsQ0FBVzNXLE1BQUEsRUFBUTtNQUl6Q0UsTUFBQSxDQUFPcUIsY0FBQSxDQUFlM0IsT0FBQSxFQUFTLFdBQVdzWCxTQUFBLENBQVVmLFdBQVc7TUFJL0RjLGFBQUEsQ0FBYzlFLEdBQUEsR0FBTStFLFNBQUEsQ0FBVS9FLEdBQUE7TUFDOUI4RSxhQUFBLENBQWMxRSxJQUFBLEdBQU8yRSxTQUFBLENBQVUzRSxJQUFBO01BQy9CMEUsYUFBQSxDQUFjbkssT0FBQSxHQUFVb0ssU0FBQSxDQUFVcEssT0FBQTtNQUNsQ21LLGFBQUEsQ0FBY3JHLE1BQUEsR0FBU3NHLFNBQUEsQ0FBVXRHLE1BQUE7TUFDakMsSUFBSXNHLFNBQUEsQ0FBVWpFLFVBQUEsRUFBWWdFLGFBQUEsQ0FBY2hFLFVBQUEsR0FBYWlFLFNBQUEsQ0FBVWpFLFVBQUE7TUFDL0QsSUFBSWlFLFNBQUEsQ0FBVTNRLEdBQUEsRUFBSzBRLGFBQUEsQ0FBYzFRLEdBQUEsR0FBTTJRLFNBQUEsQ0FBVTNRLEdBQUE7OztBQUc3RDtBQUVBLFNBQVMwTCxTQUFBLEVBQVE7RUFDYixJQUFJZ0YsYUFBQSxHQUFnQnJYLE9BQUEsQ0FBUVMsT0FBQTtFQUM1QixPQUFPaU4sa0JBQUEsR0FBcUI7SUFDeEJqTixPQUFBLEVBQVM0VyxhQUFBO0lBQ1RkLFdBQUEsRUFBYWpXLE1BQUEsQ0FBT29DLHdCQUFBLENBQXlCMUMsT0FBQSxFQUFTLFNBQVM7SUFDL0R1UyxHQUFBLEVBQUs4RSxhQUFBLENBQWM5RSxHQUFBO0lBQ25CSSxJQUFBLEVBQU0wRSxhQUFBLENBQWMxRSxJQUFBO0lBQ3BCVSxVQUFBLEVBQVlnRSxhQUFBLENBQWNoRSxVQUFBO0lBQzFCMU0sR0FBQSxFQUFLMFEsYUFBQSxDQUFjMVEsR0FBQTtJQUNuQnVHLE9BQUEsRUFBU21LLGFBQUEsQ0FBY25LLE9BQUE7SUFDdkI4RCxNQUFBLEVBQVFxRyxhQUFBLENBQWNyRyxNQUFBO0lBQ3RCd0YsS0FBQSxFQUFPekosa0JBQUEsQ0FBbUJQLElBQUE7SUFDMUJrSyxLQUFBLEVBQU9XLGFBQUEsQ0FBYzlVLFNBQUEsQ0FBVWlLO01BQy9CO0FBQ1I7U0FFZ0JzRyxPQUFRL0MsR0FBQSxFQUFLdE0sRUFBQSxFQUFJMFMsRUFBQSxFQUFJQyxFQUFBLEVBQUltQixFQUFBLEVBQUU7RUFDdkMsSUFBSTlCLFVBQUEsR0FBYWpHLEdBQUE7RUFDakIsSUFBSTtJQUNBa0csWUFBQSxDQUFhM0YsR0FBQSxFQUFLLElBQUk7SUFDdEIsT0FBT3RNLEVBQUEsQ0FBRzBTLEVBQUEsRUFBSUMsRUFBQSxFQUFJbUIsRUFBRTs7SUFFcEI3QixZQUFBLENBQWFELFVBQUEsRUFBWSxLQUFLOztBQUV0QztBQUVBLFNBQVMyQix1QkFBd0JJLEdBQUEsRUFBRztFQUloQ2hLLGlCQUFBLENBQWtCbk0sSUFBQSxDQUFLeUwscUJBQUEsRUFBdUIwSyxHQUFHO0FBQ3JEO0FBRUEsU0FBU3JHLDBCQUEwQjFOLEVBQUEsRUFBSTZPLElBQUEsRUFBTXpCLGFBQUEsRUFBZUMsT0FBQSxFQUFPO0VBQy9ELE9BQU8sT0FBT3JOLEVBQUEsS0FBTyxhQUFhQSxFQUFBLEdBQUs7SUFDbkMsSUFBSWdVLFNBQUEsR0FBWWpJLEdBQUE7SUFDaEIsSUFBSXFCLGFBQUEsRUFBZThGLHVCQUFBLENBQXVCO0lBQzFDakIsWUFBQSxDQUFhcEQsSUFBQSxFQUFNLElBQUk7SUFDdkIsSUFBSTtNQUNBLE9BQU83TyxFQUFBLENBQUdhLEtBQUEsQ0FBTSxNQUFNb0QsU0FBUzs7TUFFL0JnTyxZQUFBLENBQWErQixTQUFBLEVBQVcsS0FBSztNQUM3QixJQUFJM0csT0FBQSxFQUFTc0csc0JBQUEsQ0FBdUJyRyx1QkFBdUI7OztBQUd2RTtBQUVBLFNBQVMwRixzQkFBdUJpQixRQUFBLEVBQVVwRixJQUFBLEVBQUk7RUFDMUMsT0FBTyxVQUFVcUYsVUFBQSxFQUFZL0csVUFBQSxFQUFVO0lBQ25DLE9BQU84RyxRQUFBLENBQVNyVyxJQUFBLENBQUssTUFDakI4UCx5QkFBQSxDQUEwQndHLFVBQUEsRUFBWXJGLElBQUksR0FDMUNuQix5QkFBQSxDQUEwQlAsVUFBQSxFQUFZMEIsSUFBSSxDQUFDOztBQUV2RDtBQUVBLElBQU1zRixrQkFBQSxHQUFxQjtBQUUzQixTQUFTekksWUFBWXNDLEdBQUEsRUFBS29DLE9BQUEsRUFBTztFQUM3QixJQUFJblAsRUFBQTtFQUNKLElBQUk7SUFDQUEsRUFBQSxHQUFLbVAsT0FBQSxDQUFRaEUsV0FBQSxDQUFZNEIsR0FBRztXQUN2QmxKLENBQUEsRUFBUCxDQUFVO0VBQ1osSUFBSTdELEVBQUEsS0FBTyxPQUFPLElBQUk7SUFDbEIsSUFBSW1ULEtBQUE7TUFBT0MsU0FBQSxHQUFZO1FBQUNqRSxPQUFBO1FBQWtCSCxNQUFBLEVBQVFqQztNQUFHO0lBQ3JELElBQUl6UixPQUFBLENBQVFnTyxRQUFBLElBQVlBLFFBQUEsQ0FBUytKLFdBQUEsRUFBYTtNQUMxQ0YsS0FBQSxHQUFRN0osUUFBQSxDQUFTK0osV0FBQSxDQUFZLE9BQU87TUFDcENGLEtBQUEsQ0FBTUcsU0FBQSxDQUFVSixrQkFBQSxFQUFvQixNQUFNLElBQUk7TUFDOUNsWCxNQUFBLENBQU9tWCxLQUFBLEVBQU9DLFNBQVM7ZUFDaEI5WCxPQUFBLENBQVFpWSxXQUFBLEVBQWE7TUFDNUJKLEtBQUEsR0FBUSxJQUFJSSxXQUFBLENBQVlMLGtCQUFBLEVBQW9CO1FBQUNNLE1BQUEsRUFBUUo7TUFBUyxDQUFDO01BQy9EcFgsTUFBQSxDQUFPbVgsS0FBQSxFQUFPQyxTQUFTOztJQUUzQixJQUFJRCxLQUFBLElBQVM3WCxPQUFBLENBQVFtWSxhQUFBLEVBQWU7TUFDaENBLGFBQUEsQ0FBY04sS0FBSztNQUNuQixJQUFJLENBQUM3WCxPQUFBLENBQVFvWSxxQkFBQSxJQUF5QnBZLE9BQUEsQ0FBUXFZLG9CQUFBLEVBRTFDLElBQUk7UUFBQ3JZLE9BQUEsQ0FBUXFZLG9CQUFBLENBQXFCUixLQUFLO2VBQVdTLENBQUEsRUFBUCxDQUFVOztJQUU3RCxJQUFJeFEsS0FBQSxJQUFTK1AsS0FBQSxJQUFTLENBQUNBLEtBQUEsQ0FBTVUsZ0JBQUEsRUFBa0I7TUFDM0NDLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLHdCQUF3QmhILEdBQUEsQ0FBSXBKLEtBQUEsSUFBU29KLEdBQUEsRUFBSzs7V0FFdERsSixDQUFBLEVBQVAsQ0FBVTtBQUNoQjtBQUVPLElBQUlzTyxTQUFBLEdBQVlsSCxZQUFBLENBQWFxQixNQUFBO1NDaDNCcEIwSCxnQkFDZEMsRUFBQSxFQUNBQyxJQUFBLEVBQ0FDLFVBQUEsRUFDQXBWLEVBQUEsRUFBZ0Q7RUFHaEQsSUFBSSxDQUFDa1YsRUFBQSxDQUFHRyxLQUFBLElBQVUsQ0FBQ0gsRUFBQSxDQUFHdkksTUFBQSxDQUFPMkksWUFBQSxJQUFpQixDQUFDdkosR0FBQSxDQUFJd0osVUFBQSxJQUFjLENBQUNMLEVBQUEsQ0FBR00sSUFBQSxFQUFRO0lBQzNFLElBQUlOLEVBQUEsQ0FBR3ZJLE1BQUEsQ0FBTzJJLFlBQUEsRUFBYztNQUcxQixPQUFPbEMsU0FBQSxDQUFVLElBQUlyTSxVQUFBLENBQVdwQixjQUFBLENBQWV1UCxFQUFBLENBQUd2SSxNQUFBLENBQU84SSxXQUFXLENBQUM7O0lBRXZFLElBQUksQ0FBQ1AsRUFBQSxDQUFHdkksTUFBQSxDQUFPK0ksYUFBQSxFQUFlO01BQzVCLElBQUksQ0FBQ1IsRUFBQSxDQUFHUyxRQUFBLENBQVNDLFFBQUEsRUFDZixPQUFPeEMsU0FBQSxDQUFVLElBQUlyTSxVQUFBLENBQVdwQixjQUFBLENBQWMsQ0FBRTtNQUNsRHVQLEVBQUEsQ0FBR1csSUFBQSxDQUFJLEVBQUdoSSxLQUFBLENBQU0vRixHQUFHOztJQUVyQixPQUFPb04sRUFBQSxDQUFHdkksTUFBQSxDQUFPbUosY0FBQSxDQUFlL00sSUFBQSxDQUFLLE1BQU1rTSxlQUFBLENBQWdCQyxFQUFBLEVBQUlDLElBQUEsRUFBTUMsVUFBQSxFQUFZcFYsRUFBRSxDQUFDO1NBQy9FO0lBQ0wsSUFBSStWLEtBQUEsR0FBUWIsRUFBQSxDQUFHYyxrQkFBQSxDQUFtQmIsSUFBQSxFQUFNQyxVQUFBLEVBQVlGLEVBQUEsQ0FBR2UsU0FBUztJQUNoRSxJQUFJO01BQ0ZGLEtBQUEsQ0FBTWhYLE1BQUEsQ0FBTTtNQUNabVcsRUFBQSxDQUFHdkksTUFBQSxDQUFPdUosY0FBQSxHQUFpQjthQUNwQnBWLEVBQUEsRUFBUDtNQUNBLElBQUlBLEVBQUEsQ0FBR29FLElBQUEsS0FBUzJCLFFBQUEsQ0FBU3NQLFlBQUEsSUFBZ0JqQixFQUFBLENBQUdrQixNQUFBLENBQU0sS0FBTSxFQUFFbEIsRUFBQSxDQUFHdkksTUFBQSxDQUFPdUosY0FBQSxHQUFpQixHQUFHO1FBQ3RGbkIsT0FBQSxDQUFRQyxJQUFBLENBQUssMEJBQTBCO1FBQ3ZDRSxFQUFBLENBQUdtQixNQUFBLENBQU07UUFDVCxPQUFPbkIsRUFBQSxDQUFHVyxJQUFBLENBQUksRUFBRzlNLElBQUEsQ0FBSyxNQUFJa00sZUFBQSxDQUFnQkMsRUFBQSxFQUFJQyxJQUFBLEVBQU1DLFVBQUEsRUFBWXBWLEVBQUUsQ0FBQzs7TUFFckUsT0FBT29ULFNBQUEsQ0FBVXRTLEVBQUU7O0lBRXJCLE9BQU9pVixLQUFBLENBQU10RixRQUFBLENBQVMwRSxJQUFBLEVBQU0sQ0FBQzFMLE9BQUEsRUFBUzhELE1BQUEsS0FBTTtNQUMxQyxPQUFPNkIsUUFBQSxDQUFTO1FBQ2RyRCxHQUFBLENBQUlnSyxLQUFBLEdBQVFBLEtBQUE7UUFDWixPQUFPL1YsRUFBQSxDQUFHeUosT0FBQSxFQUFTOEQsTUFBQSxFQUFRd0ksS0FBSztPQUNqQztLQUNGLEVBQUVoTixJQUFBLENBQUt4SSxNQUFBLElBQU07TUFXWixPQUFPd1YsS0FBQSxDQUFNTyxXQUFBLENBQVl2TixJQUFBLENBQUssTUFBTXhJLE1BQU07S0FDM0M7O0FBS0w7QUM3RE8sSUFBTWdXLGFBQUEsR0FBZ0I7QUFDdEIsSUFBTUMsU0FBQSxHQUFZQyxNQUFBLENBQU9DLFlBQUEsQ0FBYSxLQUFLO0FBQzNDLElBQU1DLE1BQUEsR0FBUyxDQUFBbkksUUFBQTtBQUNmLElBQU1vSSxvQkFBQSxHQUNYO0FBQ0ssSUFBTUMsZUFBQSxHQUFrQjtBQUN4QixJQUFNQyxXQUFBLEdBQXVCO0FBQzdCLElBQU1DLFVBQUEsR0FDWCxPQUFPQyxTQUFBLEtBQWMsZUFBZSxzQkFBc0J6UyxJQUFBLENBQUt5UyxTQUFBLENBQVVDLFNBQVM7QUFDN0UsSUFBTUMseUJBQUEsR0FBNEJILFVBQUE7QUFDbEMsSUFBTUksMEJBQUEsR0FBNkJKLFVBQUE7QUFDbkMsSUFBTUsscUJBQUEsR0FBd0JoUyxLQUFBLElBQVMsQ0FBQyw2QkFBNkJiLElBQUEsQ0FBS2EsS0FBSztBQUMvRSxJQUFNaVMsVUFBQSxHQUFhO0FBQ25CLElBQU1DLFFBQUEsR0FBVztBQUNqQixJQUFNQyxTQUFBLEdBQVk7U0NoQlRDLFFBQVFDLE9BQUEsRUFBU0MsT0FBQSxFQUFPO0VBQ3RDLE9BQU9ELE9BQUEsR0FDSEMsT0FBQSxHQUNJO0lBQWMsT0FBT0QsT0FBQSxDQUFRNVcsS0FBQSxDQUFNLE1BQU1vRCxTQUFTLEtBQUt5VCxPQUFBLENBQVE3VyxLQUFBLENBQU0sTUFBTW9ELFNBQVM7RUFBRSxJQUN0RndULE9BQUEsR0FDSkMsT0FBQTtBQUNOO0FDSk8sSUFBTUMsUUFBQSxHQUEyQjtFQUN0Q0MsSUFBQSxFQUFJO0VBQ0pDLEtBQUEsRUFBTyxDQUFBckosUUFBQTtFQUNQc0osU0FBQSxFQUFXO0VBQ1hDLEtBQUEsRUFBTyxDQUFDLEVBQUU7RUFDVkMsU0FBQSxFQUFXOztTQ0ZHQyw4QkFBOEJqWCxPQUFBLEVBQW1DO0VBRS9FLE9BQU8sT0FBT0EsT0FBQSxLQUFZLFlBQVksQ0FBQyxLQUFLdUQsSUFBQSxDQUFLdkQsT0FBTyxJQUNyRDlELEdBQUEsSUFBVztJQUNaLElBQUlBLEdBQUEsQ0FBSThELE9BQUEsTUFBYSxVQUFjQSxPQUFBLElBQVc5RCxHQUFBLEVBQU07TUFJbERBLEdBQUEsR0FBTStGLFNBQUEsQ0FBVS9GLEdBQUc7TUFDbkIsT0FBT0EsR0FBQSxDQUFJOEQsT0FBQTs7SUFFYixPQUFPOUQsR0FBQTtNQUVOQSxHQUFBLElBQWdCQSxHQUFBO0FBQ3JCO0lDSWFnYixLQUFBLFNBQUs7RUFRaEJDLE9BQ0VoRCxJQUFBLEVBQ0FuVixFQUFBLEVBQ0FvWSxXQUFBLEVBQThCO0lBRTlCLE1BQU1yQyxLQUFBLEdBQXFCLEtBQUtzQyxHQUFBLElBQU90TSxHQUFBLENBQUlnSyxLQUFBO0lBQzNDLE1BQU11QyxTQUFBLEdBQVksS0FBS3BULElBQUE7SUFFdkIsU0FBU3FULHdCQUF3QjlPLE9BQUEsRUFBUzhELE1BQUEsRUFBUWlMLE1BQUEsRUFBa0I7TUFDbEUsSUFBSSxDQUFDQSxNQUFBLENBQU1DLE1BQUEsQ0FBT0gsU0FBQSxHQUNoQixNQUFNLElBQUl2UixVQUFBLENBQVcyUixRQUFBLENBQVMsV0FBV0osU0FBQSxHQUFZLDBCQUEwQjtNQUNqRixPQUFPdFksRUFBQSxDQUFHd1ksTUFBQSxDQUFNRyxRQUFBLEVBQVVILE1BQUs7O0lBZWpDLE1BQU1oSCxXQUFBLEdBQWNsQixtQkFBQSxDQUFtQjtJQUN2QyxJQUFJO01BQ0YsT0FBT3lGLEtBQUEsSUFBU0EsS0FBQSxDQUFNYixFQUFBLEtBQU8sS0FBS0EsRUFBQSxHQUNoQ2EsS0FBQSxLQUFVaEssR0FBQSxDQUFJZ0ssS0FBQSxHQUNaQSxLQUFBLENBQU10RixRQUFBLENBQVMwRSxJQUFBLEVBQU1vRCx1QkFBQSxFQUF5QkgsV0FBVyxJQUN6RGhKLFFBQUEsQ0FBUyxNQUFNMkcsS0FBQSxDQUFNdEYsUUFBQSxDQUFTMEUsSUFBQSxFQUFNb0QsdUJBQUEsRUFBeUJILFdBQVcsR0FBRztRQUFFckMsS0FBQTtRQUFjNkMsU0FBQSxFQUFXN00sR0FBQSxDQUFJNk0sU0FBQSxJQUFhN007TUFBRyxDQUFFLElBQzlIa0osZUFBQSxDQUFnQixLQUFLQyxFQUFBLEVBQUlDLElBQUEsRUFBTSxDQUFDLEtBQUtqUSxJQUFJLEdBQUdxVCx1QkFBdUI7O01BRXJFLElBQUkvRyxXQUFBLEVBQWFoQixpQkFBQSxDQUFpQjs7O0VBU3RDblMsSUFBSXdhLFNBQUEsRUFBVzdILEVBQUEsRUFBRztJQUNoQixJQUFJNkgsU0FBQSxJQUFhQSxTQUFBLENBQVV4VixXQUFBLEtBQWdCeEcsTUFBQSxFQUN6QyxPQUFPLEtBQUtpYyxLQUFBLENBQU1ELFNBQTZDLEVBQUVFLEtBQUEsQ0FBTS9ILEVBQUU7SUFFM0UsT0FBTyxLQUFLbUgsTUFBQSxDQUFPLFlBQWFwQyxLQUFBLElBQUs7TUFDbkMsT0FBTyxLQUFLaUQsSUFBQSxDQUFLM2EsR0FBQSxDQUFJO1FBQUMwWCxLQUFBO1FBQU8xWSxHQUFBLEVBQUt3YjtNQUFTLENBQUMsRUFDekM5UCxJQUFBLENBQUtSLEdBQUEsSUFBTyxLQUFLMFEsSUFBQSxDQUFLQyxPQUFBLENBQVFDLElBQUEsQ0FBSzVRLEdBQUcsQ0FBQztLQUMzQyxFQUFFUSxJQUFBLENBQUtpSSxFQUFFOztFQVFaOEgsTUFBTU0sV0FBQSxFQUFpRTtJQUNyRSxJQUFJLE9BQU9BLFdBQUEsS0FBZ0IsVUFDekIsT0FBTyxJQUFJLEtBQUtsRSxFQUFBLENBQUdtRSxXQUFBLENBQVksTUFBTUQsV0FBVztJQUNsRCxJQUFJdGMsT0FBQSxDQUFRc2MsV0FBVyxHQUNyQixPQUFPLElBQUksS0FBS2xFLEVBQUEsQ0FBR21FLFdBQUEsQ0FBWSxNQUFNLElBQUlELFdBQUEsQ0FBWS9ULElBQUEsQ0FBSyxHQUFHLElBQUk7SUFFbkUsTUFBTWlVLFFBQUEsR0FBVzFjLElBQUEsQ0FBS3djLFdBQVc7SUFDakMsSUFBSUUsUUFBQSxDQUFTblksTUFBQSxLQUFXLEdBRXRCLE9BQU8sS0FDSjJYLEtBQUEsQ0FBTVEsUUFBQSxDQUFTLEVBQUUsRUFDakJDLE1BQUEsQ0FBT0gsV0FBQSxDQUFZRSxRQUFBLENBQVMsR0FBRztJQUtwQyxNQUFNRSxhQUFBLEdBQWdCLEtBQUtmLE1BQUEsQ0FBT2dCLE9BQUEsQ0FBUW5YLE1BQUEsQ0FBTyxLQUFLbVcsTUFBQSxDQUFPaUIsT0FBTyxFQUFFN1csTUFBQSxDQUFPOFcsRUFBQSxJQUFFO01BQzdFLElBQ0VBLEVBQUEsQ0FBR0MsUUFBQSxJQUNITixRQUFBLENBQVNPLEtBQUEsQ0FBTTdZLE9BQUEsSUFBVzJZLEVBQUEsQ0FBRzNZLE9BQUEsQ0FBUU8sT0FBQSxDQUFRUCxPQUFPLEtBQUssQ0FBQyxHQUFHO1FBQzNELFNBQVNQLENBQUEsR0FBRSxHQUFHQSxDQUFBLEdBQUU2WSxRQUFBLENBQVNuWSxNQUFBLEVBQVEsRUFBRVYsQ0FBQSxFQUFHO1VBQ3BDLElBQUk2WSxRQUFBLENBQVMvWCxPQUFBLENBQVFvWSxFQUFBLENBQUczWSxPQUFBLENBQVFQLENBQUEsQ0FBRSxNQUFNLElBQUksT0FBTzs7UUFFckQsT0FBTzs7TUFFVCxPQUFPO0tBQ1IsRUFBRXFaLElBQUEsQ0FBSyxDQUFDdFgsQ0FBQSxFQUFFM0MsQ0FBQSxLQUFNMkMsQ0FBQSxDQUFFeEIsT0FBQSxDQUFRRyxNQUFBLEdBQVN0QixDQUFBLENBQUVtQixPQUFBLENBQVFHLE1BQU0sRUFBRTtJQUV4RCxJQUFJcVksYUFBQSxJQUFpQixLQUFLdEUsRUFBQSxDQUFHNkUsT0FBQSxLQUFZdkQsU0FBQSxFQUFXO01BR2xELE1BQU13RCxvQkFBQSxHQUF3QlIsYUFBQSxDQUFjeFksT0FBQSxDQUFxQjNCLEtBQUEsQ0FBTSxHQUFHaWEsUUFBQSxDQUFTblksTUFBTTtNQUN6RixPQUFPLEtBQ0oyWCxLQUFBLENBQU1rQixvQkFBb0IsRUFDMUJULE1BQUEsQ0FBT1Msb0JBQUEsQ0FBcUI5WCxHQUFBLENBQUlDLEVBQUEsSUFBTWlYLFdBQUEsQ0FBWWpYLEVBQUEsQ0FBRyxDQUFDOztJQUczRCxJQUFJLENBQUNxWCxhQUFBLElBQWlCblYsS0FBQSxFQUFPMFEsT0FBQSxDQUFRQyxJQUFBLENBQ25DLGFBQWFpRixJQUFBLENBQUtDLFNBQUEsQ0FBVWQsV0FBVyxRQUFRLEtBQUtsVSxJQUFBLHVDQUNqQ29VLFFBQUEsQ0FBU2pVLElBQUEsQ0FBSyxHQUFHLElBQUk7SUFJMUMsTUFBTTtNQUFFOFU7SUFBUyxJQUFLLEtBQUsxQixNQUFBO0lBQzNCLE1BQU0yQixHQUFBLEdBQU0sS0FBS2xGLEVBQUEsQ0FBR21GLEtBQUEsQ0FBTUMsU0FBQTtJQUUxQixTQUFTZixPQUFRL1csQ0FBQSxFQUFHM0MsQ0FBQSxFQUFDO01BQ25CLElBQUk7UUFDRixPQUFPdWEsR0FBQSxDQUFJRyxHQUFBLENBQUkvWCxDQUFBLEVBQUUzQyxDQUFDLE1BQU07ZUFDakJpRixDQUFBLEVBQVA7UUFDQSxPQUFPOzs7SUFJWCxNQUFNLENBQUMwVixHQUFBLEVBQUtDLGNBQWMsSUFBSW5CLFFBQUEsQ0FBU2haLE1BQUEsQ0FBTyxDQUFDLENBQUNvYSxTQUFBLEVBQVdDLFlBQVksR0FBRzNaLE9BQUEsS0FBTztNQUMvRSxNQUFNNFosS0FBQSxHQUFRVCxTQUFBLENBQVVuWixPQUFBO01BQ3hCLE1BQU14QyxLQUFBLEdBQVE0YSxXQUFBLENBQVlwWSxPQUFBO01BQzFCLE9BQU8sQ0FDTDBaLFNBQUEsSUFBYUUsS0FBQSxFQUNiRixTQUFBLElBQWEsQ0FBQ0UsS0FBQSxHQUNacEQsT0FBQSxDQUNFbUQsWUFBQSxFQUNBQyxLQUFBLElBQVNBLEtBQUEsQ0FBTUMsS0FBQSxHQUNiOVgsQ0FBQSxJQUFDO1FBQ0MsTUFBTXBGLElBQUEsR0FBT29ELFlBQUEsQ0FBYWdDLENBQUEsRUFBRy9CLE9BQU87UUFDcEMsT0FBT2xFLE9BQUEsQ0FBUWEsSUFBSSxLQUFLQSxJQUFBLENBQUtrVSxJQUFBLENBQUtyUixJQUFBLElBQVErWSxNQUFBLENBQU8vYSxLQUFBLEVBQU9nQyxJQUFJLENBQUM7VUFDM0R1QyxDQUFBLElBQUt3VyxNQUFBLENBQU8vYSxLQUFBLEVBQU91QyxZQUFBLENBQWFnQyxDQUFBLEVBQUcvQixPQUFPLENBQUMsQ0FBQyxJQUNsRDJaLFlBQUEsQztPQUVMLENBQUMsTUFBTSxJQUFJLENBQUM7SUFFZixPQUFPSCxHQUFBLEdBQ0wsS0FBSzFCLEtBQUEsQ0FBTTBCLEdBQUEsQ0FBSXRWLElBQUksRUFBRXFVLE1BQUEsQ0FBT0gsV0FBQSxDQUFZb0IsR0FBQSxDQUFJeFosT0FBQSxDQUFRLEVBQ2pENkIsTUFBQSxDQUFPNFgsY0FBYyxJQUN4QmpCLGFBQUEsR0FDRSxLQUFLM1csTUFBQSxDQUFPNFgsY0FBYyxJQUMxQixLQUFLM0IsS0FBQSxDQUFNUSxRQUFRLEVBQUVDLE1BQUEsQ0FBTyxFQUFFOztFQVFwQzFXLE9BQU80WCxjQUFBLEVBQXFDO0lBQzFDLE9BQU8sS0FBS0ssWUFBQSxDQUFZLEVBQUdDLEdBQUEsQ0FBSU4sY0FBYzs7RUFRL0NPLE1BQU1DLFlBQUEsRUFBa0I7SUFDdEIsT0FBTyxLQUFLSCxZQUFBLENBQVksRUFBR0UsS0FBQSxDQUFNQyxZQUFZOztFQVEvQ0MsT0FBT0EsTUFBQSxFQUFjO0lBQ25CLE9BQU8sS0FBS0osWUFBQSxDQUFZLEVBQUdJLE1BQUEsQ0FBT0EsTUFBTTs7RUFRMUM5SixNQUFNK0osT0FBQSxFQUFlO0lBQ25CLE9BQU8sS0FBS0wsWUFBQSxDQUFZLEVBQUcxSixLQUFBLENBQU0rSixPQUFPOztFQVExQ0MsS0FBS3ZRLFFBQUEsRUFBc0Y7SUFDekYsT0FBTyxLQUFLaVEsWUFBQSxDQUFZLEVBQUdNLElBQUEsQ0FBS3ZRLFFBQVE7O0VBUTFDd1EsUUFBUUosWUFBQSxFQUFrQjtJQUN4QixPQUFPLEtBQUtILFlBQUEsQ0FBWSxFQUFHTyxPQUFBLENBQVFKLFlBQVk7O0VBUWpESCxhQUFBLEVBQVk7SUFDVixPQUFPLElBQUksS0FBSzVGLEVBQUEsQ0FBR29HLFVBQUEsQ0FBVyxJQUFJLEtBQUtwRyxFQUFBLENBQUdtRSxXQUFBLENBQVksSUFBSSxDQUFDOztFQVE3RGtDLFFBQVFYLEtBQUEsRUFBd0I7SUFDOUIsT0FBTyxJQUFJLEtBQUsxRixFQUFBLENBQUdvRyxVQUFBLENBQ2pCLElBQUksS0FBS3BHLEVBQUEsQ0FBR21FLFdBQUEsQ0FBWSxNQUFNdmMsT0FBQSxDQUFROGQsS0FBSyxJQUN6QyxJQUFJQSxLQUFBLENBQU12VixJQUFBLENBQUssR0FBRyxPQUNsQnVWLEtBQUssQ0FBQzs7RUFRWlksUUFBQSxFQUFPO0lBQ0wsT0FBTyxLQUFLVixZQUFBLENBQVksRUFBR1UsT0FBQSxDQUFPOztFQVFwQ0MsV0FBV3BZLFdBQUEsRUFBcUI7SUFDOUIsS0FBS29WLE1BQUEsQ0FBT2lELFdBQUEsR0FBY3JZLFdBQUE7SUFHMUIsTUFBTXNZLFFBQUEsR0FBV3plLEdBQUEsSUFBRztNQUNsQixJQUFJLENBQUNBLEdBQUEsRUFBSyxPQUFPQSxHQUFBO01BRWpCLE1BQU1xTCxHQUFBLEdBQU0xTCxNQUFBLENBQU9rQyxNQUFBLENBQU9zRSxXQUFBLENBQVl2RSxTQUFTO01BRS9DLFNBQVN1RCxDQUFBLElBQUtuRixHQUFBLEVBQUssSUFBSVEsTUFBQSxDQUFPUixHQUFBLEVBQUttRixDQUFDLEdBQUcsSUFBSTtRQUFFa0csR0FBQSxDQUFJbEcsQ0FBQSxJQUFLbkYsR0FBQSxDQUFJbUYsQ0FBQTtlQUFhd1MsQ0FBQSxFQUFQLENBQVU7TUFDMUUsT0FBT3RNLEdBQUE7O0lBR1QsSUFBSSxLQUFLa1EsTUFBQSxDQUFPa0QsUUFBQSxFQUFVO01BQ3hCLEtBQUsxQyxJQUFBLENBQUtDLE9BQUEsQ0FBUTBDLFdBQUEsQ0FBWSxLQUFLbkQsTUFBQSxDQUFPa0QsUUFBUTs7SUFFcEQsS0FBS2xELE1BQUEsQ0FBT2tELFFBQUEsR0FBV0EsUUFBQTtJQUN2QixLQUFLMUMsSUFBQSxDQUFLLFdBQVcwQyxRQUFRO0lBQzdCLE9BQU90WSxXQUFBOztFQUlUd1ksWUFBQSxFQUFXO0lBQ1QsU0FBU0MsTUFBT0MsT0FBQSxFQUFPO01BQ3JCOWUsTUFBQSxDQUFPLE1BQU04ZSxPQUFPOztJQUV0QixPQUFPLEtBQUtOLFVBQUEsQ0FBV0ssS0FBSzs7RUFROUJFLElBQUk5ZSxHQUFBLEVBQUtHLEdBQUEsRUFBbUI7SUFDMUIsTUFBTTtNQUFDNGUsSUFBQTtNQUFNamI7SUFBTyxJQUFJLEtBQUt5WCxNQUFBLENBQU9pQixPQUFBO0lBQ3BDLElBQUl3QyxRQUFBLEdBQVdoZixHQUFBO0lBQ2YsSUFBSThELE9BQUEsSUFBV2liLElBQUEsRUFBTTtNQUNuQkMsUUFBQSxHQUFXakUsNkJBQUEsQ0FBOEJqWCxPQUFPLEVBQUU5RCxHQUFHOztJQUV2RCxPQUFPLEtBQUtpYixNQUFBLENBQU8sYUFBYXBDLEtBQUEsSUFBSztNQUNuQyxPQUFPLEtBQUtpRCxJQUFBLENBQUttRCxNQUFBLENBQU87UUFBQ3BHLEtBQUE7UUFBTzZCLElBQUEsRUFBTTtRQUFPaGIsSUFBQSxFQUFNUyxHQUFBLElBQU8sT0FBTyxDQUFDQSxHQUFHLElBQUk7UUFBTTBSLE1BQUEsRUFBUSxDQUFDbU4sUUFBUTtNQUFDLENBQUM7S0FDbkcsRUFBRW5ULElBQUEsQ0FBS1IsR0FBQSxJQUFPQSxHQUFBLENBQUk2VCxXQUFBLEdBQWNsUSxZQUFBLENBQVFxQixNQUFBLENBQU9oRixHQUFBLENBQUluQyxRQUFBLENBQVMsRUFBRSxJQUFJbUMsR0FBQSxDQUFJOFQsVUFBVSxFQUNoRnRULElBQUEsQ0FBS3NULFVBQUEsSUFBVTtNQUNkLElBQUlyYixPQUFBLEVBQVM7UUFJWCxJQUFHO1VBQUNVLFlBQUEsQ0FBYXhFLEdBQUEsRUFBSzhELE9BQUEsRUFBU3FiLFVBQVU7aUJBQVN4SCxDQUFBLEVBQU4sQ0FBUTs7TUFFdEQsT0FBT3dILFVBQUE7S0FDUjs7RUFRSEMsT0FBT0MsV0FBQSxFQUFhM1QsYUFBQSxFQUFxSDtJQUN2SSxJQUFJLE9BQU8yVCxXQUFBLEtBQWdCLFlBQVksQ0FBQ3pmLE9BQUEsQ0FBUXlmLFdBQVcsR0FBRztNQUM1RCxNQUFNbGYsR0FBQSxHQUFNMEQsWUFBQSxDQUFhd2IsV0FBQSxFQUFhLEtBQUs5RCxNQUFBLENBQU9pQixPQUFBLENBQVExWSxPQUFPO01BQ2pFLElBQUkzRCxHQUFBLEtBQVEsUUFBVyxPQUFPK1YsU0FBQSxDQUFVLElBQUlyTSxVQUFBLENBQVd5VixlQUFBLENBQ3JELCtDQUErQyxDQUFDO01BS2xELElBQUk7UUFDRixJQUFJLE9BQU81VCxhQUFBLEtBQWtCLFlBQVk7VUFDdkNoTSxJQUFBLENBQUtnTSxhQUFhLEVBQUV4TCxPQUFBLENBQVE0RCxPQUFBLElBQU87WUFDakNVLFlBQUEsQ0FBYTZhLFdBQUEsRUFBYXZiLE9BQUEsRUFBUzRILGFBQUEsQ0FBYzVILE9BQUEsQ0FBUTtXQUMxRDtlQUNJO1VBR0w0SCxhQUFBLENBQWMyVCxXQUFBLEVBQWE7WUFBQy9kLEtBQUEsRUFBTytkLFdBQUE7WUFBYTdDLE9BQUEsRUFBU3JjO1VBQUcsQ0FBQzs7ZUFFL0RvZixFQUFBLEc7TUFJRixPQUFPLEtBQUszRCxLQUFBLENBQU0sS0FBSyxFQUFFUyxNQUFBLENBQU9sYyxHQUFHLEVBQUVxZixNQUFBLENBQU85VCxhQUFhO1dBQ3BEO01BRUwsT0FBTyxLQUFLa1EsS0FBQSxDQUFNLEtBQUssRUFBRVMsTUFBQSxDQUFPZ0QsV0FBVyxFQUFFRyxNQUFBLENBQU85VCxhQUFhOzs7RUFTckUrVCxJQUFJemYsR0FBQSxFQUFLRyxHQUFBLEVBQW1CO0lBQzFCLE1BQU07TUFBQzRlLElBQUE7TUFBTWpiO0lBQU8sSUFBSSxLQUFLeVgsTUFBQSxDQUFPaUIsT0FBQTtJQUNwQyxJQUFJd0MsUUFBQSxHQUFXaGYsR0FBQTtJQUNmLElBQUk4RCxPQUFBLElBQVdpYixJQUFBLEVBQU07TUFDbkJDLFFBQUEsR0FBV2pFLDZCQUFBLENBQThCalgsT0FBTyxFQUFFOUQsR0FBRzs7SUFFdkQsT0FBTyxLQUFLaWIsTUFBQSxDQUNWLGFBQ0FwQyxLQUFBLElBQVMsS0FBS2lELElBQUEsQ0FBS21ELE1BQUEsQ0FBTztNQUFDcEcsS0FBQTtNQUFPNkIsSUFBQSxFQUFNO01BQU83SSxNQUFBLEVBQVEsQ0FBQ21OLFFBQVE7TUFBR3RmLElBQUEsRUFBTVMsR0FBQSxJQUFPLE9BQU8sQ0FBQ0EsR0FBRyxJQUFJO0lBQUksQ0FBQyxDQUFDLEVBQ3RHMEwsSUFBQSxDQUFLUixHQUFBLElBQU9BLEdBQUEsQ0FBSTZULFdBQUEsR0FBY2xRLFlBQUEsQ0FBUXFCLE1BQUEsQ0FBT2hGLEdBQUEsQ0FBSW5DLFFBQUEsQ0FBUyxFQUFFLElBQUltQyxHQUFBLENBQUk4VCxVQUFVLEVBQzlFdFQsSUFBQSxDQUFLc1QsVUFBQSxJQUFVO01BQ2QsSUFBSXJiLE9BQUEsRUFBUztRQUlYLElBQUc7VUFBQ1UsWUFBQSxDQUFheEUsR0FBQSxFQUFLOEQsT0FBQSxFQUFTcWIsVUFBVTtpQkFBU3hILENBQUEsRUFBTixDQUFROztNQUV0RCxPQUFPd0gsVUFBQTtLQUNSOztFQVFITyxPQUFPdmYsR0FBQSxFQUFrQjtJQUN2QixPQUFPLEtBQUs4YSxNQUFBLENBQU8sYUFDakJwQyxLQUFBLElBQVMsS0FBS2lELElBQUEsQ0FBS21ELE1BQUEsQ0FBTztNQUFDcEcsS0FBQTtNQUFPNkIsSUFBQSxFQUFNO01BQVVoYixJQUFBLEVBQU0sQ0FBQ1MsR0FBRztJQUFDLENBQUMsQ0FBQyxFQUNoRTBMLElBQUEsQ0FBS1IsR0FBQSxJQUFPQSxHQUFBLENBQUk2VCxXQUFBLEdBQWNsUSxZQUFBLENBQVFxQixNQUFBLENBQU9oRixHQUFBLENBQUluQyxRQUFBLENBQVMsRUFBRSxJQUFJLE1BQVM7O0VBUTVFeVcsTUFBQSxFQUFLO0lBQ0gsT0FBTyxLQUFLMUUsTUFBQSxDQUFPLGFBQ2pCcEMsS0FBQSxJQUFTLEtBQUtpRCxJQUFBLENBQUttRCxNQUFBLENBQU87TUFBQ3BHLEtBQUE7TUFBTzZCLElBQUEsRUFBTTtNQUFla0YsS0FBQSxFQUFPbkY7SUFBUSxDQUFDLENBQUMsRUFDckU1TyxJQUFBLENBQUtSLEdBQUEsSUFBT0EsR0FBQSxDQUFJNlQsV0FBQSxHQUFjbFEsWUFBQSxDQUFRcUIsTUFBQSxDQUFPaEYsR0FBQSxDQUFJbkMsUUFBQSxDQUFTLEVBQUUsSUFBSSxNQUFTOztFQVNoRjJXLFFBQVFDLEtBQUEsRUFBcUI7SUFDM0IsT0FBTyxLQUFLN0UsTUFBQSxDQUFPLFlBQVlwQyxLQUFBLElBQUs7TUFDbEMsT0FBTyxLQUFLaUQsSUFBQSxDQUFLaUUsT0FBQSxDQUFRO1FBQ3ZCcmdCLElBQUEsRUFBQW9nQixLQUFBO1FBQ0FqSDtPQUNELEVBQUVoTixJQUFBLENBQUt4SSxNQUFBLElBQVVBLE1BQUEsQ0FBTzJCLEdBQUEsQ0FBSXFHLEdBQUEsSUFBTyxLQUFLMFEsSUFBQSxDQUFLQyxPQUFBLENBQVFDLElBQUEsQ0FBSzVRLEdBQUcsQ0FBQyxDQUFDO0tBQ2pFOztFQVFIMlUsUUFDRUMsT0FBQSxFQUNBQyxhQUFBLEVBQ0FoZixPQUFBLEVBQStCO0lBRS9CLE1BQU00ZSxLQUFBLEdBQU9qZ0IsS0FBQSxDQUFNRCxPQUFBLENBQVFzZ0IsYUFBYSxJQUFJQSxhQUFBLEdBQWdCO0lBQzVEaGYsT0FBQSxHQUFVQSxPQUFBLEtBQVk0ZSxLQUFBLEdBQU8sU0FBWUksYUFBQTtJQUN6QyxNQUFNQyxXQUFBLEdBQWNqZixPQUFBLEdBQVVBLE9BQUEsQ0FBUWtmLE9BQUEsR0FBVTtJQUVoRCxPQUFPLEtBQUtuRixNQUFBLENBQU8sYUFBYXBDLEtBQUEsSUFBSztNQUNuQyxNQUFNO1FBQUNrRyxJQUFBO1FBQU1qYjtNQUFPLElBQUksS0FBS3lYLE1BQUEsQ0FBT2lCLE9BQUE7TUFDcEMsSUFBSTFZLE9BQUEsSUFBV2djLEtBQUEsRUFDYixNQUFNLElBQUlqVyxVQUFBLENBQVd5VixlQUFBLENBQWdCLDhEQUE4RDtNQUNyRyxJQUFJUSxLQUFBLElBQVFBLEtBQUEsQ0FBSzdiLE1BQUEsS0FBV2djLE9BQUEsQ0FBUWhjLE1BQUEsRUFDbEMsTUFBTSxJQUFJNEYsVUFBQSxDQUFXeVYsZUFBQSxDQUFnQixzREFBc0Q7TUFFN0YsTUFBTWUsVUFBQSxHQUFhSixPQUFBLENBQVFoYyxNQUFBO01BQzNCLElBQUlxYyxZQUFBLEdBQWV4YyxPQUFBLElBQVdpYixJQUFBLEdBQzVCa0IsT0FBQSxDQUFRamIsR0FBQSxDQUFJK1YsNkJBQUEsQ0FBOEJqWCxPQUFPLENBQUMsSUFDbERtYyxPQUFBO01BQ0YsT0FBTyxLQUFLbkUsSUFBQSxDQUFLbUQsTUFBQSxDQUNmO1FBQUNwRyxLQUFBO1FBQU82QixJQUFBLEVBQU07UUFBT2hiLElBQUEsRUFBTW9nQixLQUFBO1FBQXlCak8sTUFBQSxFQUFReU8sWUFBQTtRQUFjSDtNQUFXLENBQUMsRUFFckZ0VSxJQUFBLENBQUssQ0FBQztRQUFDcVQsV0FBQTtRQUFhdE0sT0FBQTtRQUFRdU0sVUFBQTtRQUFZalc7TUFBUSxNQUFDO1FBQ2hELE1BQU03RixNQUFBLEdBQVM4YyxXQUFBLEdBQWN2TixPQUFBLEdBQVV1TSxVQUFBO1FBQ3ZDLElBQUlELFdBQUEsS0FBZ0IsR0FBRyxPQUFPN2IsTUFBQTtRQUM5QixNQUFNLElBQUltRyxTQUFBLENBQ1IsR0FBRyxLQUFLeEIsSUFBQSxlQUFtQmtYLFdBQUEsT0FBa0JtQixVQUFBLHNCQUFnQ25YLFFBQVE7T0FDeEY7S0FDSjs7RUFRSHFYLFFBQ0VOLE9BQUEsRUFDQUMsYUFBQSxFQUNBaGYsT0FBQSxFQUErQjtJQUUvQixNQUFNNGUsS0FBQSxHQUFPamdCLEtBQUEsQ0FBTUQsT0FBQSxDQUFRc2dCLGFBQWEsSUFBSUEsYUFBQSxHQUFnQjtJQUM1RGhmLE9BQUEsR0FBVUEsT0FBQSxLQUFZNGUsS0FBQSxHQUFPLFNBQVlJLGFBQUE7SUFDekMsTUFBTUMsV0FBQSxHQUFjamYsT0FBQSxHQUFVQSxPQUFBLENBQVFrZixPQUFBLEdBQVU7SUFFaEQsT0FBTyxLQUFLbkYsTUFBQSxDQUFPLGFBQWFwQyxLQUFBLElBQUs7TUFDbkMsTUFBTTtRQUFDa0csSUFBQTtRQUFNamI7TUFBTyxJQUFJLEtBQUt5WCxNQUFBLENBQU9pQixPQUFBO01BQ3BDLElBQUkxWSxPQUFBLElBQVdnYyxLQUFBLEVBQ2IsTUFBTSxJQUFJalcsVUFBQSxDQUFXeVYsZUFBQSxDQUFnQiw4REFBOEQ7TUFDckcsSUFBSVEsS0FBQSxJQUFRQSxLQUFBLENBQUs3YixNQUFBLEtBQVdnYyxPQUFBLENBQVFoYyxNQUFBLEVBQ2xDLE1BQU0sSUFBSTRGLFVBQUEsQ0FBV3lWLGVBQUEsQ0FBZ0Isc0RBQXNEO01BRTdGLE1BQU1lLFVBQUEsR0FBYUosT0FBQSxDQUFRaGMsTUFBQTtNQUMzQixJQUFJdWMsWUFBQSxHQUFlMWMsT0FBQSxJQUFXaWIsSUFBQSxHQUM1QmtCLE9BQUEsQ0FBUWpiLEdBQUEsQ0FBSStWLDZCQUFBLENBQThCalgsT0FBTyxDQUFDLElBQ2xEbWMsT0FBQTtNQUVGLE9BQU8sS0FBS25FLElBQUEsQ0FBS21ELE1BQUEsQ0FDZjtRQUFDcEcsS0FBQTtRQUFPNkIsSUFBQSxFQUFNO1FBQU9oYixJQUFBLEVBQU1vZ0IsS0FBQTtRQUF5QmpPLE1BQUEsRUFBUTJPLFlBQUE7UUFBY0w7TUFBVyxDQUFDLEVBRXJGdFUsSUFBQSxDQUFLLENBQUM7UUFBQ3FULFdBQUE7UUFBYXRNLE9BQUE7UUFBU3VNLFVBQUE7UUFBWWpXO01BQVEsTUFBQztRQUNqRCxNQUFNN0YsTUFBQSxHQUFTOGMsV0FBQSxHQUFjdk4sT0FBQSxHQUFVdU0sVUFBQTtRQUN2QyxJQUFJRCxXQUFBLEtBQWdCLEdBQUcsT0FBTzdiLE1BQUE7UUFDOUIsTUFBTSxJQUFJbUcsU0FBQSxDQUNSLEdBQUcsS0FBS3hCLElBQUEsZUFBbUJrWCxXQUFBLE9BQWtCbUIsVUFBQSxzQkFBZ0NuWCxRQUFRO09BQ3hGO0tBQ0o7O0VBUUh1WCxXQUFXWCxLQUFBLEVBQWtDO0lBQzNDLE1BQU1ZLE9BQUEsR0FBVVosS0FBQSxDQUFLN2IsTUFBQTtJQUNyQixPQUFPLEtBQUtnWCxNQUFBLENBQU8sYUFBYXBDLEtBQUEsSUFBSztNQUNuQyxPQUFPLEtBQUtpRCxJQUFBLENBQUttRCxNQUFBLENBQU87UUFBQ3BHLEtBQUE7UUFBTzZCLElBQUEsRUFBTTtRQUFVaGIsSUFBQSxFQUFNb2dCO01BQXVCLENBQUM7S0FDL0UsRUFBRWpVLElBQUEsQ0FBSyxDQUFDO01BQUNxVCxXQUFBO01BQWFDLFVBQUE7TUFBWWpXO0lBQVEsTUFBQztNQUMxQyxJQUFJZ1csV0FBQSxLQUFnQixHQUFHLE9BQU9DLFVBQUE7TUFDOUIsTUFBTSxJQUFJM1YsU0FBQSxDQUNSLEdBQUcsS0FBS3hCLElBQUEsa0JBQXNCa1gsV0FBQSxPQUFrQndCLE9BQUEsc0JBQTZCeFgsUUFBUTtLQUN4Rjs7O1NDN2VtQnlYLE9BQU9DLEdBQUEsRUFBRztFQUM5QixJQUFJQyxHQUFBLEdBQU07RUFDVixJQUFJOWMsRUFBQSxHQUFLLFNBQUFBLENBQVUrYyxTQUFBLEVBQVdDLFVBQUEsRUFBVTtJQUNwQyxJQUFJQSxVQUFBLEVBQVk7TUFFWixJQUFJQyxFQUFBLEdBQUlqYSxTQUFBLENBQVU5QyxNQUFBO1FBQVE3QixJQUFBLEdBQU8sSUFBSXZDLEtBQUEsQ0FBTW1oQixFQUFBLEdBQUksQ0FBQztNQUNoRCxPQUFPLEVBQUVBLEVBQUEsRUFBRzVlLElBQUEsQ0FBSzRlLEVBQUEsR0FBSSxLQUFLamEsU0FBQSxDQUFVaWEsRUFBQTtNQUNwQ0gsR0FBQSxDQUFJQyxTQUFBLEVBQVdHLFNBQUEsQ0FBVXRkLEtBQUEsQ0FBTSxNQUFNdkIsSUFBSTtNQUN6QyxPQUFPd2UsR0FBQTtlQUNBLE9BQVFFLFNBQUEsS0FBZSxVQUFVO01BRXhDLE9BQU9ELEdBQUEsQ0FBSUMsU0FBQTs7O0VBR25CL2MsRUFBQSxDQUFHbWQsWUFBQSxHQUFlcEMsR0FBQTtFQUVsQixTQUFTdmIsQ0FBQSxHQUFJLEdBQUdTLENBQUEsR0FBSStDLFNBQUEsQ0FBVTlDLE1BQUEsRUFBUVYsQ0FBQSxHQUFJUyxDQUFBLEVBQUcsRUFBRVQsQ0FBQSxFQUFHO0lBQzlDdWIsR0FBQSxDQUFJL1gsU0FBQSxDQUFVeEQsQ0FBQSxDQUFFOztFQUdwQixPQUFPUSxFQUFBO0VBRVAsU0FBUythLElBQUlnQyxTQUFBLEVBQVdLLGFBQUEsRUFBZUMsZUFBQSxFQUFlO0lBQ2xELElBQUksT0FBT04sU0FBQSxLQUFjLFVBQVUsT0FBT08sbUJBQUEsQ0FBb0JQLFNBQVM7SUFDdkUsSUFBSSxDQUFDSyxhQUFBLEVBQWVBLGFBQUEsR0FBZ0J4ViwwQkFBQTtJQUNwQyxJQUFJLENBQUN5VixlQUFBLEVBQWlCQSxlQUFBLEdBQWtCeFcsR0FBQTtJQUV4QyxJQUFJMFcsT0FBQSxHQUFVO01BQ1ZDLFdBQUEsRUFBYTtNQUNidEYsSUFBQSxFQUFNbUYsZUFBQTtNQUNOSCxTQUFBLEVBQVcsU0FBQUEsQ0FBVW5OLEVBQUEsRUFBRTtRQUNuQixJQUFJd04sT0FBQSxDQUFRQyxXQUFBLENBQVlsZCxPQUFBLENBQVF5UCxFQUFFLE1BQU0sSUFBSTtVQUN4Q3dOLE9BQUEsQ0FBUUMsV0FBQSxDQUFZcGQsSUFBQSxDQUFLMlAsRUFBRTtVQUMzQndOLE9BQUEsQ0FBUXJGLElBQUEsR0FBT2tGLGFBQUEsQ0FBY0csT0FBQSxDQUFRckYsSUFBQSxFQUFNbkksRUFBRTs7O01BR3JENEssV0FBQSxFQUFhLFNBQUFBLENBQVU1SyxFQUFBLEVBQUU7UUFDckJ3TixPQUFBLENBQVFDLFdBQUEsR0FBY0QsT0FBQSxDQUFRQyxXQUFBLENBQVk1YixNQUFBLENBQU8sVUFBVTdDLEVBQUEsRUFBRTtVQUFJLE9BQU9BLEVBQUEsS0FBT2dSLEVBQUE7UUFBRyxDQUFFO1FBQ3BGd04sT0FBQSxDQUFRckYsSUFBQSxHQUFPcUYsT0FBQSxDQUFRQyxXQUFBLENBQVluZSxNQUFBLENBQU8rZCxhQUFBLEVBQWVDLGVBQWU7OztJQUdoRlAsR0FBQSxDQUFJQyxTQUFBLElBQWEvYyxFQUFBLENBQUcrYyxTQUFBLElBQWFRLE9BQUE7SUFDakMsT0FBT0EsT0FBQTs7RUFHWCxTQUFTRCxvQkFBb0JHLEdBQUEsRUFBRztJQUU1QjloQixJQUFBLENBQUs4aEIsR0FBRyxFQUFFdGhCLE9BQUEsQ0FBUSxVQUFVNGdCLFNBQUEsRUFBUztNQUNqQyxJQUFJMWUsSUFBQSxHQUFPb2YsR0FBQSxDQUFJVixTQUFBO01BQ2YsSUFBSWxoQixPQUFBLENBQVF3QyxJQUFJLEdBQUc7UUFDZjBjLEdBQUEsQ0FBSWdDLFNBQUEsRUFBV1UsR0FBQSxDQUFJVixTQUFBLEVBQVcsSUFBSVUsR0FBQSxDQUFJVixTQUFBLEVBQVcsRUFBRTtpQkFDNUMxZSxJQUFBLEtBQVMsUUFBUTtRQUd4QixJQUFJa2YsT0FBQSxHQUFVeEMsR0FBQSxDQUFJZ0MsU0FBQSxFQUFXalcsTUFBQSxFQUFRLFNBQVNvUixLQUFBLEVBQUk7VUFFOUMsSUFBSStFLEVBQUEsR0FBSWphLFNBQUEsQ0FBVTlDLE1BQUE7WUFBUXdkLEtBQUEsR0FBTyxJQUFJNWhCLEtBQUEsQ0FBTW1oQixFQUFDO1VBQzVDLE9BQU9BLEVBQUEsSUFBS1MsS0FBQSxDQUFLVCxFQUFBLElBQUtqYSxTQUFBLENBQVVpYSxFQUFBO1VBRWhDTSxPQUFBLENBQVFDLFdBQUEsQ0FBWXJoQixPQUFBLENBQVEsVUFBVTRDLEVBQUEsRUFBRTtZQUNwQ0QsTUFBQSxDQUFLLFNBQVM2ZSxVQUFBLEVBQVM7Y0FDbkI1ZSxFQUFBLENBQUdhLEtBQUEsQ0FBTSxNQUFNOGQsS0FBSTthQUN0QjtXQUNKO1NBQ0o7YUFDRSxNQUFNLElBQUk1WCxVQUFBLENBQVd5VixlQUFBLENBQWdCLHNCQUFzQjtLQUNyRTs7QUFFVDtTQ3JFZ0JxQyxxQkFBb0MvZixTQUFBLEVBQW1CdUUsV0FBQSxFQUFxQjtFQWlCMUYzRSxNQUFBLENBQU8yRSxXQUFXLEVBQUV6RSxJQUFBLENBQUs7SUFBQ0U7RUFBUyxDQUFDO0VBQ3BDLE9BQU91RSxXQUFBO0FBQ1Q7U0NGZ0J5Yix1QkFBd0I1SixFQUFBLEVBQVM7RUFDL0MsT0FBTzJKLG9CQUFBLENBQ0wzRyxLQUFBLENBQU1wWixTQUFBLEVBRU4sU0FBU2lnQixPQUFvQjdaLElBQUEsRUFBYzhaLFdBQUEsRUFBMEJqSixLQUFBLEVBQW1CO0lBQ3RGLEtBQUtiLEVBQUEsR0FBS0EsRUFBQTtJQUNWLEtBQUttRCxHQUFBLEdBQU10QyxLQUFBO0lBQ1gsS0FBSzdRLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUt1VCxNQUFBLEdBQVN1RyxXQUFBO0lBQ2QsS0FBSy9GLElBQUEsR0FBTy9ELEVBQUEsQ0FBRytKLFVBQUEsQ0FBVy9aLElBQUEsSUFBUWdRLEVBQUEsQ0FBRytKLFVBQUEsQ0FBVy9aLElBQUEsRUFBTStULElBQUEsR0FBTzRFLE1BQUEsQ0FBTyxNQUFNO01BQ3hFLFlBQVksQ0FBQ3ZWLGlCQUFBLEVBQW1CUixHQUFHO01BQ25DLFdBQVcsQ0FBQ0UsaUJBQUEsRUFBbUJELE1BQU07TUFDckMsWUFBWSxDQUFDWSxpQkFBQSxFQUFtQmIsR0FBRztNQUNuQyxZQUFZLENBQUNZLGlCQUFBLEVBQW1CWixHQUFHO0tBQ3BDO0dBQ0Y7QUFHTDtTQzVCZ0JvWCxnQkFBaUJwQixHQUFBLEVBQXdCcUIsaUJBQUEsRUFBMkI7RUFDbEYsT0FBTyxFQUFFckIsR0FBQSxDQUFJamIsTUFBQSxJQUFVaWIsR0FBQSxDQUFJc0IsU0FBQSxJQUFhdEIsR0FBQSxDQUFJdUIsRUFBQSxNQUN2Q0YsaUJBQUEsR0FBb0JyQixHQUFBLENBQUl3QixTQUFBLEdBQVksQ0FBQ3hCLEdBQUEsQ0FBSXlCLFlBQUE7QUFDaEQ7U0FFZ0JDLFVBQVUxQixHQUFBLEVBQXdCOWQsRUFBQSxFQUFZO0VBQzVEOGQsR0FBQSxDQUFJamIsTUFBQSxHQUFTMlUsT0FBQSxDQUFRc0csR0FBQSxDQUFJamIsTUFBQSxFQUFRN0MsRUFBRTtBQUNyQztTQUVnQnlmLGdCQUFpQjNCLEdBQUEsRUFBd0I0QixPQUFBLEVBQVNDLGFBQUEsRUFBYztFQUM5RSxJQUFJQyxJQUFBLEdBQU85QixHQUFBLENBQUl5QixZQUFBO0VBQ2Z6QixHQUFBLENBQUl5QixZQUFBLEdBQWVLLElBQUEsR0FBTyxNQUFJcEksT0FBQSxDQUFRb0ksSUFBQSxDQUFJLEdBQUlGLE9BQUEsQ0FBTyxDQUFFLElBQUlBLE9BQUE7RUFDM0Q1QixHQUFBLENBQUl3QixTQUFBLEdBQVlLLGFBQUEsSUFBaUIsQ0FBQ0MsSUFBQTtBQUNwQztTQUVnQkMsZUFBZS9CLEdBQUEsRUFBd0I5ZCxFQUFBLEVBQUU7RUFDdkQ4ZCxHQUFBLENBQUlnQyxPQUFBLEdBQVV0SSxPQUFBLENBQVFzRyxHQUFBLENBQUlnQyxPQUFBLEVBQVM5ZixFQUFFO0FBQ3ZDO1NBRWdCK2YsZ0JBQWdCakMsR0FBQSxFQUF3QmtDLFVBQUEsRUFBNkI7RUFHbkYsSUFBSWxDLEdBQUEsQ0FBSW1DLFNBQUEsRUFBVyxPQUFPRCxVQUFBLENBQVdFLFVBQUE7RUFDckMsTUFBTXRGLEtBQUEsR0FBUW9GLFVBQUEsQ0FBV0csaUJBQUEsQ0FBa0JyQyxHQUFBLENBQUlsRCxLQUFLO0VBQ3BELElBQUksQ0FBQ0EsS0FBQSxFQUFPLE1BQU0sSUFBSTdULFVBQUEsQ0FBV3FaLE1BQUEsQ0FBTyxhQUFhdEMsR0FBQSxDQUFJbEQsS0FBQSxHQUFRLHNCQUFzQm9GLFVBQUEsQ0FBVzlhLElBQUEsR0FBTyxpQkFBaUI7RUFDMUgsT0FBTzBWLEtBQUE7QUFDVDtTQUVnQnlGLFdBQVd2QyxHQUFBLEVBQXdCd0MsU0FBQSxFQUF3QnZLLEtBQUEsRUFBd0I7RUFDakcsTUFBTTZFLEtBQUEsR0FBUW1GLGVBQUEsQ0FBZ0JqQyxHQUFBLEVBQUt3QyxTQUFBLENBQVU3SCxNQUFNO0VBQ25ELE9BQU82SCxTQUFBLENBQVVELFVBQUEsQ0FBVztJQUMxQnRLLEtBQUE7SUFDQWhILE1BQUEsRUFBUSxDQUFDK08sR0FBQSxDQUFJeUMsUUFBQTtJQUNiL0UsT0FBQSxFQUFTc0MsR0FBQSxDQUFJMEMsR0FBQSxLQUFRO0lBQ3JCQyxNQUFBLEVBQVEsQ0FBQyxDQUFDM0MsR0FBQSxDQUFJMkMsTUFBQTtJQUNkQyxLQUFBLEVBQU87TUFDTDlGLEtBQUE7TUFDQWtDLEtBQUEsRUFBT2dCLEdBQUEsQ0FBSWhCOztHQUVkO0FBQ0g7U0FFZ0I2RCxLQUNkN0MsR0FBQSxFQUNBOWQsRUFBQSxFQUNBNGdCLFNBQUEsRUFDQU4sU0FBQSxFQUFzQjtFQUV0QixNQUFNemQsTUFBQSxHQUFTaWIsR0FBQSxDQUFJeUIsWUFBQSxHQUFlL0gsT0FBQSxDQUFRc0csR0FBQSxDQUFJamIsTUFBQSxFQUFRaWIsR0FBQSxDQUFJeUIsWUFBQSxDQUFZLENBQUUsSUFBSXpCLEdBQUEsQ0FBSWpiLE1BQUE7RUFDaEYsSUFBSSxDQUFDaWIsR0FBQSxDQUFJdUIsRUFBQSxFQUFJO0lBQ1QsT0FBT3dCLE9BQUEsQ0FDTFIsVUFBQSxDQUFXdkMsR0FBQSxFQUFLd0MsU0FBQSxFQUFXTSxTQUFTLEdBQ3BDcEosT0FBQSxDQUFRc0csR0FBQSxDQUFJc0IsU0FBQSxFQUFXdmMsTUFBTSxHQUFHN0MsRUFBQSxFQUFJLENBQUM4ZCxHQUFBLENBQUl5QyxRQUFBLElBQVl6QyxHQUFBLENBQUlnRCxXQUFXO1NBQ25FO0lBQ0gsTUFBTXhpQixHQUFBLEdBQU07SUFFWixNQUFNeWlCLEtBQUEsR0FBUUEsQ0FBQ3ZnQixJQUFBLEVBQVd3Z0IsTUFBQSxFQUFzQkMsT0FBQSxLQUFPO01BQ25ELElBQUksQ0FBQ3BlLE1BQUEsSUFBVUEsTUFBQSxDQUFPbWUsTUFBQSxFQUFRQyxPQUFBLEVBQVMxZ0IsTUFBQSxJQUFReWdCLE1BQUEsQ0FBT0UsSUFBQSxDQUFLM2dCLE1BQU0sR0FBR3lOLEdBQUEsSUFBT2dULE1BQUEsQ0FBT0csSUFBQSxDQUFLblQsR0FBRyxDQUFDLEdBQUc7UUFDMUYsSUFBSWtTLFVBQUEsR0FBYWMsTUFBQSxDQUFPZCxVQUFBO1FBQ3hCLElBQUk3aUIsR0FBQSxHQUFNLEtBQUs2aUIsVUFBQTtRQUNmLElBQUk3aUIsR0FBQSxLQUFRLHdCQUF3QkEsR0FBQSxHQUFNLEtBQUssSUFBSXlNLFVBQUEsQ0FBV29XLFVBQVU7UUFDeEUsSUFBSSxDQUFDeGlCLE1BQUEsQ0FBT1ksR0FBQSxFQUFLakIsR0FBRyxHQUFHO1VBQ25CaUIsR0FBQSxDQUFJakIsR0FBQSxJQUFPO1VBQ1gyQyxFQUFBLENBQUdRLElBQUEsRUFBTXdnQixNQUFBLEVBQVFDLE9BQU87Ozs7SUFLcEMsT0FBT2prQixPQUFBLENBQVE4UixHQUFBLENBQUksQ0FDakJnUCxHQUFBLENBQUl1QixFQUFBLENBQUcrQixRQUFBLENBQVNMLEtBQUEsRUFBT0gsU0FBUyxHQUNoQ0MsT0FBQSxDQUFRUixVQUFBLENBQVd2QyxHQUFBLEVBQUt3QyxTQUFBLEVBQVdNLFNBQVMsR0FBRzlDLEdBQUEsQ0FBSXNCLFNBQUEsRUFBVzJCLEtBQUEsRUFBTyxDQUFDakQsR0FBQSxDQUFJeUMsUUFBQSxJQUFZekMsR0FBQSxDQUFJZ0QsV0FBVyxFQUN0Rzs7QUFFUDtBQUVBLFNBQVNELFFBQVFRLGFBQUEsRUFBc0N4ZSxNQUFBLEVBQVE3QyxFQUFBLEVBQUk4Z0IsV0FBQSxFQUFXO0VBRzVFLElBQUlRLFFBQUEsR0FBV1IsV0FBQSxHQUFjLENBQUMvZCxDQUFBLEVBQUV3ZSxDQUFBLEVBQUUvZSxDQUFBLEtBQU14QyxFQUFBLENBQUc4Z0IsV0FBQSxDQUFZL2QsQ0FBQyxHQUFFd2UsQ0FBQSxFQUFFL2UsQ0FBQyxJQUFJeEMsRUFBQTtFQUVqRSxJQUFJd2hCLFNBQUEsR0FBWTFQLElBQUEsQ0FBS3dQLFFBQVE7RUFFN0IsT0FBT0QsYUFBQSxDQUFjdFksSUFBQSxDQUFLaVksTUFBQSxJQUFNO0lBQzlCLElBQUlBLE1BQUEsRUFBUTtNQUNWLE9BQU9BLE1BQUEsQ0FBT3poQixLQUFBLENBQU07UUFDbEIsSUFBSWdpQixDQUFBLEdBQUlBLENBQUEsS0FBSVAsTUFBQSxDQUFPUyxRQUFBLENBQVE7UUFDM0IsSUFBSSxDQUFDNWUsTUFBQSxJQUFVQSxNQUFBLENBQU9tZSxNQUFBLEVBQVFVLFFBQUEsSUFBWUgsQ0FBQSxHQUFJRyxRQUFBLEVBQVV0Z0IsR0FBQSxJQUFHO1VBQUc0ZixNQUFBLENBQU9FLElBQUEsQ0FBSzlmLEdBQUc7VUFBRW1nQixDQUFBLEdBQUV6WixHQUFBO1FBQUcsR0FBR2hELENBQUEsSUFBQztVQUFLa2MsTUFBQSxDQUFPRyxJQUFBLENBQUtyYyxDQUFDO1VBQUV5YyxDQUFBLEdBQUl6WixHQUFBO1FBQUksQ0FBQyxHQUNuSDBaLFNBQUEsQ0FBVVIsTUFBQSxDQUFPeGlCLEtBQUEsRUFBT3dpQixNQUFBLEVBQVFVLFFBQUEsSUFBWUgsQ0FBQSxHQUFJRyxRQUFRO1FBQzFESCxDQUFBLENBQUM7T0FDRjs7R0FFSjtBQUNIO1NDakdnQmhILElBQUkvWCxDQUFBLEVBQVEzQyxDQUFBLEVBQU07RUFDaEMsSUFBSTtJQUNGLE1BQU04aEIsRUFBQSxHQUFLL0osSUFBQSxDQUFLcFYsQ0FBQztJQUNqQixNQUFNb2YsRUFBQSxHQUFLaEssSUFBQSxDQUFLL1gsQ0FBQztJQUNqQixJQUFJOGhCLEVBQUEsS0FBT0MsRUFBQSxFQUFJO01BQ2IsSUFBSUQsRUFBQSxLQUFPLFNBQVMsT0FBTztNQUMzQixJQUFJQyxFQUFBLEtBQU8sU0FBUyxPQUFPO01BQzNCLElBQUlELEVBQUEsS0FBTyxVQUFVLE9BQU87TUFDNUIsSUFBSUMsRUFBQSxLQUFPLFVBQVUsT0FBTztNQUM1QixJQUFJRCxFQUFBLEtBQU8sVUFBVSxPQUFPO01BQzVCLElBQUlDLEVBQUEsS0FBTyxVQUFVLE9BQU87TUFDNUIsSUFBSUQsRUFBQSxLQUFPLFFBQVEsT0FBTztNQUMxQixJQUFJQyxFQUFBLEtBQU8sUUFBUSxPQUFPQyxHQUFBO01BQzFCLE9BQU87O0lBRVQsUUFBUUYsRUFBQTtXQUNEO1dBQ0E7V0FDQTtRQUNILE9BQU9uZixDQUFBLEdBQUkzQyxDQUFBLEdBQUksSUFBSTJDLENBQUEsR0FBSTNDLENBQUEsR0FBSSxLQUFLO1dBQzdCO1FBQVU7VUFDYixPQUFPaWlCLGtCQUFBLENBQW1CQyxhQUFBLENBQWN2ZixDQUFDLEdBQUd1ZixhQUFBLENBQWNsaUIsQ0FBQyxDQUFDOztXQUV6RDtRQUNILE9BQU9taUIsYUFBQSxDQUFjeGYsQ0FBQSxFQUFHM0MsQ0FBQzs7V0FFN0I0YyxFQUFBLEdBQU07RUFDUixPQUFPb0YsR0FBQTtBQUNUO1NBRWdCRyxjQUFjeGYsQ0FBQSxFQUFVM0MsQ0FBQSxFQUFRO0VBQzlDLE1BQU1vaUIsRUFBQSxHQUFLemYsQ0FBQSxDQUFFckIsTUFBQTtFQUNiLE1BQU0rZ0IsRUFBQSxHQUFLcmlCLENBQUEsQ0FBRXNCLE1BQUE7RUFDYixNQUFNRCxDQUFBLEdBQUkrZ0IsRUFBQSxHQUFLQyxFQUFBLEdBQUtELEVBQUEsR0FBS0MsRUFBQTtFQUN6QixTQUFTemhCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBRyxFQUFFVCxDQUFBLEVBQUc7SUFDMUIsTUFBTThILEdBQUEsR0FBTWdTLEdBQUEsQ0FBSS9YLENBQUEsQ0FBRS9CLENBQUEsR0FBSVosQ0FBQSxDQUFFWSxDQUFBLENBQUU7SUFDMUIsSUFBSThILEdBQUEsS0FBUSxHQUFHLE9BQU9BLEdBQUE7O0VBRXhCLE9BQU8wWixFQUFBLEtBQU9DLEVBQUEsR0FBSyxJQUFJRCxFQUFBLEdBQUtDLEVBQUEsR0FBSyxLQUFLO0FBQ3hDO1NBRWdCSixtQkFDZHRmLENBQUEsRUFDQTNDLENBQUEsRUFBYTtFQUViLE1BQU1vaUIsRUFBQSxHQUFLemYsQ0FBQSxDQUFFckIsTUFBQTtFQUNiLE1BQU0rZ0IsRUFBQSxHQUFLcmlCLENBQUEsQ0FBRXNCLE1BQUE7RUFDYixNQUFNRCxDQUFBLEdBQUkrZ0IsRUFBQSxHQUFLQyxFQUFBLEdBQUtELEVBQUEsR0FBS0MsRUFBQTtFQUN6QixTQUFTemhCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBRyxFQUFFVCxDQUFBLEVBQUc7SUFDMUIsSUFBSStCLENBQUEsQ0FBRS9CLENBQUEsTUFBT1osQ0FBQSxDQUFFWSxDQUFBLEdBQUksT0FBTytCLENBQUEsQ0FBRS9CLENBQUEsSUFBS1osQ0FBQSxDQUFFWSxDQUFBLElBQUssS0FBSzs7RUFFL0MsT0FBT3doQixFQUFBLEtBQU9DLEVBQUEsR0FBSyxJQUFJRCxFQUFBLEdBQUtDLEVBQUEsR0FBSyxLQUFLO0FBQ3hDO0FBR0EsU0FBU3RLLEtBQUs3VSxDQUFBLEVBQU07RUFDbEIsTUFBTUgsQ0FBQSxHQUFJLE9BQU9HLENBQUE7RUFDakIsSUFBSUgsQ0FBQSxLQUFNLFVBQVUsT0FBT0EsQ0FBQTtFQUMzQixJQUFJdWYsV0FBQSxDQUFZQyxNQUFBLENBQU9yZixDQUFDLEdBQUcsT0FBTztFQUNsQyxNQUFNc2YsS0FBQSxHQUFROWUsV0FBQSxDQUFZUixDQUFDO0VBQzNCLE9BQU9zZixLQUFBLEtBQVUsZ0JBQWdCLFdBQVlBLEtBQUE7QUFDL0M7QUFnQkEsU0FBU04sY0FBY3ZmLENBQUEsRUFBYTtFQUNsQyxJQUFJQSxDQUFBLFlBQWFzSCxVQUFBLEVBQVksT0FBT3RILENBQUE7RUFDcEMsSUFBSTJmLFdBQUEsQ0FBWUMsTUFBQSxDQUFPNWYsQ0FBQyxHQUV0QixPQUFPLElBQUlzSCxVQUFBLENBQVd0SCxDQUFBLENBQUU4ZixNQUFBLEVBQVE5ZixDQUFBLENBQUUrZixVQUFBLEVBQVkvZixDQUFBLENBQUVnZ0IsVUFBVTtFQUM1RCxPQUFPLElBQUkxWSxVQUFBLENBQVd0SCxDQUFDO0FBQ3pCO0lDcEVhOFksVUFBQSxTQUFVO0VBd0JyQm1ILE1BQVN6aUIsRUFBQSxFQUF3RWdSLEVBQUEsRUFBRztJQUNsRixJQUFJOE0sR0FBQSxHQUFNLEtBQUs0RSxJQUFBO0lBQ2YsT0FBTzVFLEdBQUEsQ0FBSTZFLEtBQUEsR0FDVDdFLEdBQUEsQ0FBSThFLEtBQUEsQ0FBTXpLLE1BQUEsQ0FBTyxNQUFNL0UsU0FBQSxDQUFVcFUsSUFBQSxDQUFLLE1BQU04ZSxHQUFBLENBQUk2RSxLQUFLLENBQUMsSUFDdEQ3RSxHQUFBLENBQUk4RSxLQUFBLENBQU16SyxNQUFBLENBQU8sWUFBWW5ZLEVBQUUsRUFBRStJLElBQUEsQ0FBS2lJLEVBQUU7O0VBRzVDNlIsT0FBVTdpQixFQUFBLEVBQXNFO0lBQzlFLElBQUk4ZCxHQUFBLEdBQU0sS0FBSzRFLElBQUE7SUFDZixPQUFPNUUsR0FBQSxDQUFJNkUsS0FBQSxHQUNUN0UsR0FBQSxDQUFJOEUsS0FBQSxDQUFNekssTUFBQSxDQUFPLE1BQU0vRSxTQUFBLENBQVVwVSxJQUFBLENBQUssTUFBTThlLEdBQUEsQ0FBSTZFLEtBQUssQ0FBQyxJQUN0RDdFLEdBQUEsQ0FBSThFLEtBQUEsQ0FBTXpLLE1BQUEsQ0FBTyxhQUFhblksRUFBQSxFQUFJLFFBQVE7O0VBRzlDOGlCLGNBQWM5aUIsRUFBQSxFQUFFO0lBQ2QsSUFBSThkLEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtJQUNmNUUsR0FBQSxDQUFJc0IsU0FBQSxHQUFZNUgsT0FBQSxDQUFRc0csR0FBQSxDQUFJc0IsU0FBQSxFQUFXcGYsRUFBRTs7RUFHM0NvaEIsU0FDRXBoQixFQUFBLEVBQ0E0Z0IsU0FBQSxFQUE0QjtJQUU1QixPQUFPRCxJQUFBLENBQUssS0FBSytCLElBQUEsRUFBTTFpQixFQUFBLEVBQUk0Z0IsU0FBQSxFQUFXLEtBQUs4QixJQUFBLENBQUtFLEtBQUEsQ0FBTTVKLElBQUk7O0VBUTVEK0osTUFBTXRRLE1BQUEsRUFBTTtJQUNWLElBQUl4UixFQUFBLEdBQUtwRSxNQUFBLENBQU9rQyxNQUFBLENBQU8sS0FBS3NFLFdBQUEsQ0FBWXZFLFNBQVM7TUFDL0NnZixHQUFBLEdBQU1qaEIsTUFBQSxDQUFPa0MsTUFBQSxDQUFPLEtBQUsyakIsSUFBSTtJQUMvQixJQUFJalEsTUFBQSxFQUFPeFYsTUFBQSxDQUFPNmdCLEdBQUEsRUFBS3JMLE1BQUs7SUFDNUJ4UixFQUFBLENBQUd5aEIsSUFBQSxHQUFPNUUsR0FBQTtJQUNWLE9BQU83YyxFQUFBOztFQVFUK2hCLElBQUEsRUFBRztJQUNELEtBQUtOLElBQUEsQ0FBSzVCLFdBQUEsR0FBYztJQUN4QixPQUFPOztFQVFUMUYsS0FBS3BiLEVBQUEsRUFBc0M7SUFDekMsSUFBSThkLEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtJQUVmLE9BQU8sS0FBS0QsS0FBQSxDQUFNMU0sS0FBQSxJQUFTNEssSUFBQSxDQUFLN0MsR0FBQSxFQUFLOWQsRUFBQSxFQUFJK1YsS0FBQSxFQUFPK0gsR0FBQSxDQUFJOEUsS0FBQSxDQUFNNUosSUFBSSxDQUFDOztFQVFqRWdDLE1BQU1oSyxFQUFBLEVBQUc7SUFDUCxPQUFPLEtBQUt5UixLQUFBLENBQU0xTSxLQUFBLElBQUs7TUFDckIsTUFBTStILEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtNQUNqQixNQUFNcEMsU0FBQSxHQUFZeEMsR0FBQSxDQUFJOEUsS0FBQSxDQUFNNUosSUFBQTtNQUM1QixJQUFJa0csZUFBQSxDQUFnQnBCLEdBQUEsRUFBSyxJQUFJLEdBQUc7UUFFOUIsT0FBT3dDLFNBQUEsQ0FBVXRGLEtBQUEsQ0FBTTtVQUNyQmpGLEtBQUE7VUFDQTJLLEtBQUEsRUFBTztZQUNMOUYsS0FBQSxFQUFPbUYsZUFBQSxDQUFnQmpDLEdBQUEsRUFBS3dDLFNBQUEsQ0FBVTdILE1BQU07WUFDNUNxRSxLQUFBLEVBQU9nQixHQUFBLENBQUloQjs7U0FFZCxFQUFFL1QsSUFBQSxDQUFLa2EsTUFBQSxJQUFTQyxJQUFBLENBQUtDLEdBQUEsQ0FBSUYsTUFBQSxFQUFPbkYsR0FBQSxDQUFJMU0sS0FBSyxDQUFDO2FBQ3RDO1FBRUwsSUFBSTRKLEtBQUEsR0FBUTtRQUNaLE9BQU8yRixJQUFBLENBQUs3QyxHQUFBLEVBQUs7VUFBUSxFQUFFOUMsS0FBQTtVQUFPLE9BQU87UUFBTSxHQUFJakYsS0FBQSxFQUFPdUssU0FBUyxFQUNsRXZYLElBQUEsQ0FBSyxNQUFJaVMsS0FBSzs7S0FFbEIsRUFBRWpTLElBQUEsQ0FBS2lJLEVBQUU7O0VBVVpvUyxPQUFPcGlCLE9BQUEsRUFBaUJnUSxFQUFBLEVBQTZCO0lBQ25ELE1BQU1xUyxLQUFBLEdBQVFyaUIsT0FBQSxDQUFRMEIsS0FBQSxDQUFNLEdBQUcsRUFBRThZLE9BQUEsQ0FBTztNQUN0QzhILFFBQUEsR0FBV0QsS0FBQSxDQUFNO01BQ2pCRSxTQUFBLEdBQVlGLEtBQUEsQ0FBTWxpQixNQUFBLEdBQVM7SUFDN0IsU0FBU3FpQixPQUFPdG1CLEdBQUEsRUFBS3VELENBQUEsRUFBQztNQUNwQixJQUFJQSxDQUFBLEVBQUcsT0FBTytpQixNQUFBLENBQU90bUIsR0FBQSxDQUFJbW1CLEtBQUEsQ0FBTTVpQixDQUFBLElBQUtBLENBQUEsR0FBSSxDQUFDO01BQ3pDLE9BQU92RCxHQUFBLENBQUlvbUIsUUFBQTs7SUFFYixJQUFJRyxLQUFBLEdBQVEsS0FBS2YsSUFBQSxDQUFLbEMsR0FBQSxLQUFRLFNBQVMsSUFBSTtJQUUzQyxTQUFTa0QsT0FBT2xoQixDQUFBLEVBQUczQyxDQUFBLEVBQUM7TUFDbEIsSUFBSThqQixJQUFBLEdBQU9ILE1BQUEsQ0FBT2hoQixDQUFBLEVBQUcrZ0IsU0FBUztRQUM1QkssSUFBQSxHQUFPSixNQUFBLENBQU8zakIsQ0FBQSxFQUFHMGpCLFNBQVM7TUFDNUIsT0FBT0ksSUFBQSxHQUFPQyxJQUFBLEdBQU8sQ0FBQ0gsS0FBQSxHQUFRRSxJQUFBLEdBQU9DLElBQUEsR0FBT0gsS0FBQSxHQUFROztJQUV0RCxPQUFPLEtBQUtwSSxPQUFBLENBQVEsVUFBVTdZLENBQUEsRUFBQztNQUM3QixPQUFPQSxDQUFBLENBQUVzWCxJQUFBLENBQUs0SixNQUFNO0tBQ3JCLEVBQUUzYSxJQUFBLENBQUtpSSxFQUFFOztFQVFacUssUUFBUXJLLEVBQUEsRUFBRztJQUNULE9BQU8sS0FBS3lSLEtBQUEsQ0FBTTFNLEtBQUEsSUFBSztNQUNyQixJQUFJK0gsR0FBQSxHQUFNLEtBQUs0RSxJQUFBO01BQ2YsSUFBSTVFLEdBQUEsQ0FBSTBDLEdBQUEsS0FBUSxVQUFVdEIsZUFBQSxDQUFnQnBCLEdBQUEsRUFBSyxJQUFJLEtBQUtBLEdBQUEsQ0FBSTFNLEtBQUEsR0FBUSxHQUFHO1FBR3JFLE1BQU07VUFBQzBQO1FBQVcsSUFBSWhELEdBQUE7UUFDdEIsTUFBTWxELEtBQUEsR0FBUW1GLGVBQUEsQ0FBZ0JqQyxHQUFBLEVBQUtBLEdBQUEsQ0FBSThFLEtBQUEsQ0FBTTVKLElBQUEsQ0FBS1AsTUFBTTtRQUN4RCxPQUFPcUYsR0FBQSxDQUFJOEUsS0FBQSxDQUFNNUosSUFBQSxDQUFLMEgsS0FBQSxDQUFNO1VBQzFCM0ssS0FBQTtVQUNBM0UsS0FBQSxFQUFPME0sR0FBQSxDQUFJMU0sS0FBQTtVQUNYckMsTUFBQSxFQUFRO1VBQ1IyUixLQUFBLEVBQU87WUFDTDlGLEtBQUE7WUFDQWtDLEtBQUEsRUFBT2dCLEdBQUEsQ0FBSWhCOztTQUVkLEVBQUUvVCxJQUFBLENBQUssQ0FBQztVQUFDeEk7UUFBTSxNQUFNdWdCLFdBQUEsR0FBY3ZnQixNQUFBLENBQU8yQixHQUFBLENBQUk0ZSxXQUFXLElBQUl2Z0IsTUFBTTthQUMvRDtRQUVMLE1BQU1pQyxDQUFBLEdBQUk7UUFDVixPQUFPbWUsSUFBQSxDQUFLN0MsR0FBQSxFQUFLdGQsSUFBQSxJQUFRZ0MsQ0FBQSxDQUFFbkIsSUFBQSxDQUFLYixJQUFJLEdBQUd1VixLQUFBLEVBQU8rSCxHQUFBLENBQUk4RSxLQUFBLENBQU01SixJQUFJLEVBQUVqUSxJQUFBLENBQUssTUFBSXZHLENBQUM7O09BRXpFd08sRUFBRTs7RUFRUGtLLE9BQU9BLE1BQUEsRUFBYztJQUNuQixJQUFJNEMsR0FBQSxHQUFNLEtBQUs0RSxJQUFBO0lBQ2YsSUFBSXhILE1BQUEsSUFBVSxHQUFHLE9BQU87SUFDeEI0QyxHQUFBLENBQUk1QyxNQUFBLElBQVVBLE1BQUE7SUFDZCxJQUFJZ0UsZUFBQSxDQUFnQnBCLEdBQUcsR0FBRztNQUN4QjJCLGVBQUEsQ0FBZ0IzQixHQUFBLEVBQUs7UUFDbkIsSUFBSStGLFVBQUEsR0FBYTNJLE1BQUE7UUFDakIsT0FBTyxDQUFDOEYsTUFBQSxFQUFRQyxPQUFBLEtBQU87VUFDckIsSUFBSTRDLFVBQUEsS0FBZSxHQUFHLE9BQU87VUFDN0IsSUFBSUEsVUFBQSxLQUFlLEdBQUc7WUFBRSxFQUFFQSxVQUFBO1lBQVksT0FBTzs7VUFDN0M1QyxPQUFBLENBQVE7WUFDTkQsTUFBQSxDQUFPQyxPQUFBLENBQVE0QyxVQUFVO1lBQ3pCQSxVQUFBLEdBQWE7V0FDZDtVQUNELE9BQU87O09BRVY7V0FDSTtNQUNMcEUsZUFBQSxDQUFnQjNCLEdBQUEsRUFBSztRQUNuQixJQUFJK0YsVUFBQSxHQUFhM0ksTUFBQTtRQUNqQixPQUFPLE1BQU8sRUFBRTJJLFVBQUEsR0FBYTtPQUM5Qjs7SUFFSCxPQUFPOztFQVFUelMsTUFBTStKLE9BQUEsRUFBZTtJQUNuQixLQUFLdUgsSUFBQSxDQUFLdFIsS0FBQSxHQUFROFIsSUFBQSxDQUFLQyxHQUFBLENBQUksS0FBS1QsSUFBQSxDQUFLdFIsS0FBQSxFQUFPK0osT0FBTztJQUNuRHNFLGVBQUEsQ0FBZ0IsS0FBS2lELElBQUEsRUFBTTtNQUN6QixJQUFJb0IsUUFBQSxHQUFXM0ksT0FBQTtNQUNmLE9BQU8sVUFBVTZGLE1BQUEsRUFBUUMsT0FBQSxFQUFTeFgsT0FBQSxFQUFPO1FBQ3ZDLElBQUksRUFBRXFhLFFBQUEsSUFBWSxHQUFHN0MsT0FBQSxDQUFReFgsT0FBTztRQUNwQyxPQUFPcWEsUUFBQSxJQUFZOztPQUVwQixJQUFJO0lBQ1AsT0FBTzs7RUFRVEMsTUFBTXRKLGNBQUEsRUFBZ0N1SixpQkFBQSxFQUFrQjtJQUN0RHhFLFNBQUEsQ0FBVSxLQUFLa0QsSUFBQSxFQUFNLFVBQVUxQixNQUFBLEVBQVFDLE9BQUEsRUFBU3hYLE9BQUEsRUFBTztNQUNyRCxJQUFJZ1IsY0FBQSxDQUFldUcsTUFBQSxDQUFPeGlCLEtBQUssR0FBRztRQUNoQ3lpQixPQUFBLENBQVF4WCxPQUFPO1FBQ2YsT0FBT3VhLGlCQUFBO2FBQ0Y7UUFDTCxPQUFPOztLQUVWO0lBQ0QsT0FBTzs7RUFRVGpMLE1BQU0vSCxFQUFBLEVBQUc7SUFDUCxPQUFPLEtBQUtJLEtBQUEsQ0FBTSxDQUFDLEVBQUVpSyxPQUFBLENBQVEsVUFBVTdZLENBQUEsRUFBQztNQUFJLE9BQU9BLENBQUEsQ0FBRTtJQUFHLENBQUUsRUFBRXVHLElBQUEsQ0FBS2lJLEVBQUU7O0VBUXJFaVQsS0FBS2pULEVBQUEsRUFBRztJQUNOLE9BQU8sS0FBS3dLLE9BQUEsQ0FBTyxFQUFHekMsS0FBQSxDQUFNL0gsRUFBRTs7RUFRaENuTyxPQUFPNFgsY0FBQSxFQUE4QjtJQUVuQytFLFNBQUEsQ0FBVSxLQUFLa0QsSUFBQSxFQUFNLFVBQVUxQixNQUFBLEVBQU07TUFDbkMsT0FBT3ZHLGNBQUEsQ0FBZXVHLE1BQUEsQ0FBT3hpQixLQUFLO0tBQ25DO0lBR0RxaEIsY0FBQSxDQUFlLEtBQUs2QyxJQUFBLEVBQU1qSSxjQUFjO0lBQ3hDLE9BQU87O0VBUVRNLElBQUlsWSxNQUFBLEVBQXNCO0lBQ3hCLE9BQU8sS0FBS0EsTUFBQSxDQUFPQSxNQUFNOztFQVEzQndjLEdBQUc2RSxTQUFBLEVBQWlCO0lBQ2xCLE9BQU8sSUFBSSxLQUFLaFAsRUFBQSxDQUFHbUUsV0FBQSxDQUFZLEtBQUtxSixJQUFBLENBQUtFLEtBQUEsRUFBT3NCLFNBQUEsRUFBVyxJQUFJOztFQVFqRTFJLFFBQUEsRUFBTztJQUNMLEtBQUtrSCxJQUFBLENBQUtsQyxHQUFBLEdBQU8sS0FBS2tDLElBQUEsQ0FBS2xDLEdBQUEsS0FBUSxTQUFTLFNBQVM7SUFDckQsSUFBSSxLQUFLMkQsa0JBQUEsRUFBb0IsS0FBS0Esa0JBQUEsQ0FBbUIsS0FBS3pCLElBQUEsQ0FBS2xDLEdBQUc7SUFDbEUsT0FBTzs7RUFRVDRELEtBQUEsRUFBSTtJQUNGLE9BQU8sS0FBSzVJLE9BQUEsQ0FBTzs7RUFRckI2SSxRQUFRclQsRUFBQSxFQUFHO0lBQ1QsSUFBSThNLEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtJQUNmNUUsR0FBQSxDQUFJeUMsUUFBQSxHQUFXLENBQUN6QyxHQUFBLENBQUlnQyxPQUFBO0lBQ3BCLE9BQU8sS0FBSzFFLElBQUEsQ0FBSyxVQUFVaGEsR0FBQSxFQUFLNGYsTUFBQSxFQUFNO01BQUloUSxFQUFBLENBQUdnUSxNQUFBLENBQU8zakIsR0FBQSxFQUFLMmpCLE1BQU07SUFBRSxDQUFFOztFQVFyRXNELGNBQWN0VCxFQUFBLEVBQUc7SUFDZixLQUFLMFIsSUFBQSxDQUFLakMsTUFBQSxHQUFTO0lBQ25CLE9BQU8sS0FBSzRELE9BQUEsQ0FBUXJULEVBQUU7O0VBUXhCdVQsZUFBZXZULEVBQUEsRUFBRztJQUNoQixJQUFJOE0sR0FBQSxHQUFNLEtBQUs0RSxJQUFBO0lBQ2Y1RSxHQUFBLENBQUl5QyxRQUFBLEdBQVcsQ0FBQ3pDLEdBQUEsQ0FBSWdDLE9BQUE7SUFDcEIsT0FBTyxLQUFLMUUsSUFBQSxDQUFLLFVBQVVoYSxHQUFBLEVBQUs0ZixNQUFBLEVBQU07TUFBSWhRLEVBQUEsQ0FBR2dRLE1BQUEsQ0FBT2QsVUFBQSxFQUFZYyxNQUFNO0lBQUUsQ0FBRTs7RUFRNUVwa0IsS0FBS29VLEVBQUEsRUFBRztJQUNOLElBQUk4TSxHQUFBLEdBQU0sS0FBSzRFLElBQUE7SUFDZjVFLEdBQUEsQ0FBSXlDLFFBQUEsR0FBVyxDQUFDekMsR0FBQSxDQUFJZ0MsT0FBQTtJQUNwQixJQUFJdGQsQ0FBQSxHQUFJO0lBQ1IsT0FBTyxLQUFLNFksSUFBQSxDQUFLLFVBQVU1YSxJQUFBLEVBQU13Z0IsTUFBQSxFQUFNO01BQ3JDeGUsQ0FBQSxDQUFFbkIsSUFBQSxDQUFLMmYsTUFBQSxDQUFPM2pCLEdBQUc7S0FDbEIsRUFBRTBMLElBQUEsQ0FBSztNQUNOLE9BQU92RyxDQUFBO0tBQ1IsRUFBRXVHLElBQUEsQ0FBS2lJLEVBQUU7O0VBUVp3VCxZQUFZeFQsRUFBQSxFQUFHO0lBQ2IsSUFBSThNLEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtJQUNmLElBQUk1RSxHQUFBLENBQUkwQyxHQUFBLEtBQVEsVUFBVXRCLGVBQUEsQ0FBZ0JwQixHQUFBLEVBQUssSUFBSSxLQUFLQSxHQUFBLENBQUkxTSxLQUFBLEdBQVEsR0FBRztNQUdyRSxPQUFPLEtBQUtxUixLQUFBLENBQU0xTSxLQUFBLElBQUs7UUFDckIsSUFBSTZFLEtBQUEsR0FBUW1GLGVBQUEsQ0FBZ0JqQyxHQUFBLEVBQUtBLEdBQUEsQ0FBSThFLEtBQUEsQ0FBTTVKLElBQUEsQ0FBS1AsTUFBTTtRQUN0RCxPQUFPcUYsR0FBQSxDQUFJOEUsS0FBQSxDQUFNNUosSUFBQSxDQUFLMEgsS0FBQSxDQUFNO1VBQzFCM0ssS0FBQTtVQUNBaEgsTUFBQSxFQUFRO1VBQ1JxQyxLQUFBLEVBQU8wTSxHQUFBLENBQUkxTSxLQUFBO1VBQ1hzUCxLQUFBLEVBQU87WUFDTDlGLEtBQUE7WUFDQWtDLEtBQUEsRUFBT2dCLEdBQUEsQ0FBSWhCOztTQUNYO09BQ0wsRUFBRS9ULElBQUEsQ0FBSyxDQUFDO1FBQUN4STtNQUFNLE1BQUlBLE1BQU0sRUFBRXdJLElBQUEsQ0FBS2lJLEVBQUU7O0lBRXJDOE0sR0FBQSxDQUFJeUMsUUFBQSxHQUFXLENBQUN6QyxHQUFBLENBQUlnQyxPQUFBO0lBQ3BCLElBQUl0ZCxDQUFBLEdBQUk7SUFDUixPQUFPLEtBQUs0WSxJQUFBLENBQUssVUFBVTVhLElBQUEsRUFBTXdnQixNQUFBLEVBQU07TUFDckN4ZSxDQUFBLENBQUVuQixJQUFBLENBQUsyZixNQUFBLENBQU9kLFVBQVU7S0FDekIsRUFBRW5YLElBQUEsQ0FBSztNQUNOLE9BQU92RyxDQUFBO0tBQ1IsRUFBRXVHLElBQUEsQ0FBS2lJLEVBQUU7O0VBUVp5VCxXQUFXelQsRUFBQSxFQUFHO0lBQ1osS0FBSzBSLElBQUEsQ0FBS2pDLE1BQUEsR0FBUztJQUNuQixPQUFPLEtBQUs3akIsSUFBQSxDQUFLb1UsRUFBRTs7RUFRckIwVCxTQUFTMVQsRUFBQSxFQUFHO0lBQ1YsT0FBTyxLQUFLSSxLQUFBLENBQU0sQ0FBQyxFQUFFeFUsSUFBQSxDQUFLLFVBQVU0RixDQUFBLEVBQUM7TUFBSSxPQUFPQSxDQUFBLENBQUU7SUFBRyxDQUFFLEVBQUV1RyxJQUFBLENBQUtpSSxFQUFFOztFQVFsRTJULFFBQVEzVCxFQUFBLEVBQUc7SUFDVCxPQUFPLEtBQUt3SyxPQUFBLENBQU8sRUFBR2tKLFFBQUEsQ0FBUzFULEVBQUU7O0VBUW5DNFQsU0FBQSxFQUFRO0lBQ04sSUFBSTlHLEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtNQUNibEksR0FBQSxHQUFNc0QsR0FBQSxDQUFJbEQsS0FBQSxJQUFTa0QsR0FBQSxDQUFJOEUsS0FBQSxDQUFNbkssTUFBQSxDQUFPMEIsU0FBQSxDQUFVMkQsR0FBQSxDQUFJbEQsS0FBQTtJQUNwRCxJQUFJLENBQUNKLEdBQUEsSUFBTyxDQUFDQSxHQUFBLENBQUlLLEtBQUEsRUFBTyxPQUFPO0lBQy9CLElBQUl2YyxHQUFBLEdBQU07SUFDVmtoQixTQUFBLENBQVUsS0FBS2tELElBQUEsRUFBTSxVQUFVMUIsTUFBQSxFQUFvQjtNQUNqRCxJQUFJNkQsTUFBQSxHQUFTN0QsTUFBQSxDQUFPZCxVQUFBLENBQVc1YyxRQUFBLENBQVE7TUFDdkMsSUFBSXdoQixLQUFBLEdBQVFwbkIsTUFBQSxDQUFPWSxHQUFBLEVBQUt1bUIsTUFBTTtNQUM5QnZtQixHQUFBLENBQUl1bUIsTUFBQSxJQUFVO01BQ2QsT0FBTyxDQUFDQyxLQUFBO0tBQ1Q7SUFDRCxPQUFPOztFQWFUcEksT0FBT3FJLE9BQUEsRUFBK0U7SUFDcEYsSUFBSWpILEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtJQUNmLE9BQU8sS0FBS0csTUFBQSxDQUFPOU0sS0FBQSxJQUFLO01BQ3RCLElBQUlpUCxRQUFBO01BQ0osSUFBSSxPQUFPRCxPQUFBLEtBQVksWUFBWTtRQUVqQ0MsUUFBQSxHQUFXRCxPQUFBO2FBQ047UUFFTCxJQUFJekwsUUFBQSxHQUFXMWMsSUFBQSxDQUFLbW9CLE9BQU87UUFDM0IsSUFBSW5ILE9BQUEsR0FBVXRFLFFBQUEsQ0FBU25ZLE1BQUE7UUFDdkI2akIsUUFBQSxHQUFXLFNBQUFBLENBQVV4a0IsSUFBQSxFQUFJO1VBQ3ZCLElBQUl5a0IsZ0JBQUEsR0FBbUI7VUFDdkIsU0FBU3hrQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbWQsT0FBQSxFQUFTLEVBQUVuZCxDQUFBLEVBQUc7WUFDaEMsSUFBSU8sT0FBQSxHQUFVc1ksUUFBQSxDQUFTN1ksQ0FBQTtjQUFJVyxHQUFBLEdBQU0yakIsT0FBQSxDQUFRL2pCLE9BQUE7WUFDekMsSUFBSUQsWUFBQSxDQUFhUCxJQUFBLEVBQU1RLE9BQU8sTUFBTUksR0FBQSxFQUFLO2NBQ3ZDTSxZQUFBLENBQWFsQixJQUFBLEVBQU1RLE9BQUEsRUFBU0ksR0FBRztjQUMvQjZqQixnQkFBQSxHQUFtQjs7O1VBR3ZCLE9BQU9BLGdCQUFBOzs7TUFJWCxNQUFNM0UsU0FBQSxHQUFZeEMsR0FBQSxDQUFJOEUsS0FBQSxDQUFNNUosSUFBQTtNQUM1QixNQUFNO1FBQUNrTSxRQUFBO1FBQVVDO01BQVUsSUFBSTdFLFNBQUEsQ0FBVTdILE1BQUEsQ0FBT3lILFVBQUE7TUFDaEQsTUFBTTlPLEtBQUEsR0FBUSxLQUFLOEQsRUFBQSxDQUFHUyxRQUFBLENBQVN5UCxlQUFBLElBQW1CO01BQ2xELE1BQU1DLGFBQUEsR0FBZ0I7TUFDdEIsSUFBSTdlLFlBQUEsR0FBZTtNQUNuQixNQUFNQyxVQUFBLEdBQThCO01BQ3BDLE1BQU02ZSxpQkFBQSxHQUFvQkEsQ0FBQ0MsYUFBQSxFQUF1QmhkLEdBQUEsS0FBeUI7UUFDekUsTUFBTTtVQUFDbkMsUUFBQTtVQUFVZ1c7UUFBVyxJQUFJN1QsR0FBQTtRQUNoQy9CLFlBQUEsSUFBZ0IrZSxhQUFBLEdBQWdCbkosV0FBQTtRQUNoQyxTQUFTelYsR0FBQSxJQUFPL0osSUFBQSxDQUFLd0osUUFBUSxHQUFHO1VBQzlCaWYsYUFBQSxDQUFjaGtCLElBQUEsQ0FBSytFLFFBQUEsQ0FBU08sR0FBQSxDQUFJOzs7TUFHcEMsT0FBTyxLQUFLb2MsS0FBQSxDQUFLLEVBQUd5QixXQUFBLENBQVcsRUFBR3piLElBQUEsQ0FBS2lVLEtBQUEsSUFBSTtRQUV6QyxNQUFNd0ksU0FBQSxHQUFhdEssTUFBQSxJQUFjO1VBQy9CLE1BQU1GLEtBQUEsR0FBUWtJLElBQUEsQ0FBS0MsR0FBQSxDQUFJL1IsS0FBQSxFQUFPNEwsS0FBQSxDQUFLN2IsTUFBQSxHQUFTK1osTUFBTTtVQUNsRCxPQUFPb0YsU0FBQSxDQUFVckQsT0FBQSxDQUFRO1lBQ3ZCbEgsS0FBQTtZQUNBblosSUFBQSxFQUFNb2dCLEtBQUEsQ0FBSzNkLEtBQUEsQ0FBTTZiLE1BQUEsRUFBUUEsTUFBQSxHQUFTRixLQUFLO1lBQ3ZDeUssS0FBQSxFQUFPO1dBSVIsRUFBRTFjLElBQUEsQ0FBS2dHLE1BQUEsSUFBTTtZQUNaLE1BQU0yVyxTQUFBLEdBQVk7WUFDbEIsTUFBTUMsU0FBQSxHQUFZO1lBQ2xCLE1BQU1DLE9BQUEsR0FBVVYsUUFBQSxHQUFXLEtBQUs7WUFDaEMsTUFBTVcsVUFBQSxHQUFhO1lBQ25CLFNBQVNwbEIsQ0FBQSxHQUFFLEdBQUdBLENBQUEsR0FBRXVhLEtBQUEsRUFBTyxFQUFFdmEsQ0FBQSxFQUFHO2NBQzFCLE1BQU1xbEIsU0FBQSxHQUFZL1csTUFBQSxDQUFPdE8sQ0FBQTtjQUN6QixNQUFNc2xCLElBQUEsR0FBTTtnQkFDVnZuQixLQUFBLEVBQU95RSxTQUFBLENBQVU2aUIsU0FBUztnQkFDMUJwTSxPQUFBLEVBQVNzRCxLQUFBLENBQUs5QixNQUFBLEdBQU96YSxDQUFBOztjQUV2QixJQUFJdWtCLFFBQUEsQ0FBU3BuQixJQUFBLENBQUttb0IsSUFBQSxFQUFLQSxJQUFBLENBQUl2bkIsS0FBQSxFQUFPdW5CLElBQUcsTUFBTSxPQUFPO2dCQUNoRCxJQUFJQSxJQUFBLENBQUl2bkIsS0FBQSxJQUFTLE1BQU07a0JBRXJCcW5CLFVBQUEsQ0FBV3hrQixJQUFBLENBQUsyYixLQUFBLENBQUs5QixNQUFBLEdBQU96YSxDQUFBLENBQUU7MkJBQ3JCLENBQUN5a0IsUUFBQSxJQUFZM0ssR0FBQSxDQUFJNEssVUFBQSxDQUFXVyxTQUFTLEdBQUdYLFVBQUEsQ0FBV1ksSUFBQSxDQUFJdm5CLEtBQUssQ0FBQyxNQUFNLEdBQUc7a0JBRS9FcW5CLFVBQUEsQ0FBV3hrQixJQUFBLENBQUsyYixLQUFBLENBQUs5QixNQUFBLEdBQU96YSxDQUFBLENBQUU7a0JBQzlCaWxCLFNBQUEsQ0FBVXJrQixJQUFBLENBQUswa0IsSUFBQSxDQUFJdm5CLEtBQUs7dUJBQ25CO2tCQUVMbW5CLFNBQUEsQ0FBVXRrQixJQUFBLENBQUswa0IsSUFBQSxDQUFJdm5CLEtBQUs7a0JBQ3hCLElBQUkwbUIsUUFBQSxFQUFVVSxPQUFBLENBQVF2a0IsSUFBQSxDQUFLMmIsS0FBQSxDQUFLOUIsTUFBQSxHQUFPemEsQ0FBQSxDQUFFOzs7O1lBSS9DLE1BQU11bEIsUUFBQSxHQUFXOUcsZUFBQSxDQUFnQnBCLEdBQUcsS0FDbENBLEdBQUEsQ0FBSTFNLEtBQUEsS0FBVTVDLFFBQUEsS0FDYixPQUFPdVcsT0FBQSxLQUFZLGNBQWNBLE9BQUEsS0FBWWtCLGNBQUEsS0FBbUI7Y0FDL0RyTCxLQUFBLEVBQU9rRCxHQUFBLENBQUlsRCxLQUFBO2NBQ1hrQyxLQUFBLEVBQU9nQixHQUFBLENBQUloQjs7WUFHZixPQUFPOWYsT0FBQSxDQUFReU0sT0FBQSxDQUFRaWMsU0FBQSxDQUFVdmtCLE1BQUEsR0FBUyxLQUN4Q21mLFNBQUEsQ0FBVW5FLE1BQUEsQ0FBTztjQUFDcEcsS0FBQTtjQUFPNkIsSUFBQSxFQUFNO2NBQU83SSxNQUFBLEVBQVEyVztZQUFTLENBQUMsRUFDckQzYyxJQUFBLENBQUtSLEdBQUEsSUFBRztjQUNQLFNBQVM1QixHQUFBLElBQU80QixHQUFBLENBQUluQyxRQUFBLEVBQVU7Z0JBRTVCeWYsVUFBQSxDQUFXN2pCLE1BQUEsQ0FBT0QsUUFBQSxDQUFTNEUsR0FBRyxHQUFHLENBQUM7O2NBRXBDMmUsaUJBQUEsQ0FBa0JJLFNBQUEsQ0FBVXZrQixNQUFBLEVBQVFvSCxHQUFHO2FBQ3hDLENBQUMsRUFDSlEsSUFBQSxDQUFLLE9BQUs0YyxTQUFBLENBQVV4a0IsTUFBQSxHQUFTLEtBQU02a0IsUUFBQSxJQUFZLE9BQU9qQixPQUFBLEtBQVksYUFDaEV6RSxTQUFBLENBQVVuRSxNQUFBLENBQU87Y0FDZnBHLEtBQUE7Y0FDQTZCLElBQUEsRUFBTTtjQUNOaGIsSUFBQSxFQUFNZ3BCLE9BQUE7Y0FDTjdXLE1BQUEsRUFBUTRXLFNBQUE7Y0FDUkssUUFBQTtjQUNBRSxVQUFBLEVBQVksT0FBT25CLE9BQUEsS0FBWSxjQUMxQkE7YUFDTixFQUFFaGMsSUFBQSxDQUFLUixHQUFBLElBQUsrYyxpQkFBQSxDQUFrQkssU0FBQSxDQUFVeGtCLE1BQUEsRUFBUW9ILEdBQUcsQ0FBQyxDQUFDLEVBQ3hEUSxJQUFBLENBQUssT0FBSzhjLFVBQUEsQ0FBVzFrQixNQUFBLEdBQVMsS0FBTTZrQixRQUFBLElBQVlqQixPQUFBLEtBQVlrQixjQUFBLEtBQzFEM0YsU0FBQSxDQUFVbkUsTUFBQSxDQUFPO2NBQ2ZwRyxLQUFBO2NBQ0E2QixJQUFBLEVBQU07Y0FDTmhiLElBQUEsRUFBTWlwQixVQUFBO2NBQ05HO2FBQ0QsRUFBRWpkLElBQUEsQ0FBS1IsR0FBQSxJQUFLK2MsaUJBQUEsQ0FBa0JPLFVBQUEsQ0FBVzFrQixNQUFBLEVBQVFvSCxHQUFHLENBQUMsQ0FBQyxFQUN6RFEsSUFBQSxDQUFLO2NBQ0wsT0FBT2lVLEtBQUEsQ0FBSzdiLE1BQUEsR0FBUytaLE1BQUEsR0FBU0YsS0FBQSxJQUFTd0ssU0FBQSxDQUFVdEssTUFBQSxHQUFTOUosS0FBSzthQUNoRTtXQUNGOztRQUdILE9BQU9vVSxTQUFBLENBQVUsQ0FBQyxFQUFFemMsSUFBQSxDQUFLO1VBQ3ZCLElBQUlzYyxhQUFBLENBQWNsa0IsTUFBQSxHQUFTLEdBQ3pCLE1BQU0sSUFBSW9GLFdBQUEsQ0FBWSx1Q0FBdUM4ZSxhQUFBLEVBQWU3ZSxZQUFBLEVBQWNDLFVBQXdDO1VBRXBJLE9BQU91VyxLQUFBLENBQUs3YixNQUFBO1NBQ2I7T0FDRjtLQUVGOztFQVFIeWIsT0FBQSxFQUFNO0lBQ0osSUFBSWtCLEdBQUEsR0FBTSxLQUFLNEUsSUFBQTtNQUNiNUYsS0FBQSxHQUFRZ0IsR0FBQSxDQUFJaEIsS0FBQTtJQUdkLElBQUlvQyxlQUFBLENBQWdCcEIsR0FBRyxNQUNuQkEsR0FBQSxDQUFJbUMsU0FBQSxJQUFhLENBQUM5SSwwQkFBQSxJQUErQjJGLEtBQUEsQ0FBTWxGLElBQUEsS0FBSSxJQUMvRDtNQUtFLE9BQU8sS0FBS2lMLE1BQUEsQ0FBTzlNLEtBQUEsSUFBSztRQUV0QixNQUFNO1VBQUNtSztRQUFVLElBQUlwQyxHQUFBLENBQUk4RSxLQUFBLENBQU01SixJQUFBLENBQUtQLE1BQUE7UUFDcEMsTUFBTTBOLFNBQUEsR0FBWXJKLEtBQUE7UUFDbEIsT0FBT2dCLEdBQUEsQ0FBSThFLEtBQUEsQ0FBTTVKLElBQUEsQ0FBS2dDLEtBQUEsQ0FBTTtVQUFDakYsS0FBQTtVQUFPMkssS0FBQSxFQUFPO1lBQUM5RixLQUFBLEVBQU9zRixVQUFBO1lBQVlwRCxLQUFBLEVBQU9xSjtVQUFTO1FBQUMsQ0FBQyxFQUFFcGQsSUFBQSxDQUFLaVMsS0FBQSxJQUFLO1VBQzNGLE9BQU84QyxHQUFBLENBQUk4RSxLQUFBLENBQU01SixJQUFBLENBQUttRCxNQUFBLENBQU87WUFBQ3BHLEtBQUE7WUFBTzZCLElBQUEsRUFBTTtZQUFla0YsS0FBQSxFQUFPcUo7VUFBUyxDQUFDLEVBQzFFcGQsSUFBQSxDQUFLLENBQUM7WUFBQzNDLFFBQUE7WUFBVWlXLFVBQUE7WUFBWXZNLE9BQUE7WUFBU3NNO1VBQVcsTUFBQztZQUNqRCxJQUFJQSxXQUFBLEVBQWEsTUFBTSxJQUFJN1YsV0FBQSxDQUFZLGdDQUNyQzFKLE1BQUEsQ0FBT0QsSUFBQSxDQUFLd0osUUFBUSxFQUFFbEUsR0FBQSxDQUFJeUUsR0FBQSxJQUFPUCxRQUFBLENBQVNPLEdBQUEsQ0FBSSxHQUM5Q3FVLEtBQUEsR0FBUW9CLFdBQVc7WUFDckIsT0FBT3BCLEtBQUEsR0FBUW9CLFdBQUE7V0FDaEI7U0FDRjtPQUNGOztJQUdILE9BQU8sS0FBS00sTUFBQSxDQUFPdUosY0FBYzs7O0FBSXJDLElBQU1BLGNBQUEsR0FBaUJBLENBQUN6bkIsS0FBQSxFQUFPc2YsR0FBQSxLQUFRQSxHQUFBLENBQUl0ZixLQUFBLEdBQVE7U0MxbEJuQzRuQiw0QkFBNEJsUixFQUFBLEVBQVM7RUFDbkQsT0FBTzJKLG9CQUFBLENBQ0x2RCxVQUFBLENBQVd4YyxTQUFBLEVBRVgsU0FBU3VuQixZQUVQQyxXQUFBLEVBQ0FDLGlCQUFBLEVBQXdDO0lBRXhDLEtBQUtyUixFQUFBLEdBQUtBLEVBQUE7SUFDVixJQUFJc1IsUUFBQSxHQUFXN08sUUFBQTtNQUFVZ0wsS0FBQSxHQUFRO0lBQ2pDLElBQUk0RCxpQkFBQSxFQUFtQixJQUFJO01BQ3pCQyxRQUFBLEdBQVdELGlCQUFBLENBQWlCO2FBQ3JCemxCLEVBQUEsRUFBUDtNQUNBNmhCLEtBQUEsR0FBUTdoQixFQUFBOztJQUdWLE1BQU0ybEIsUUFBQSxHQUFXSCxXQUFBLENBQVk1RCxJQUFBO0lBQzdCLE1BQU1FLEtBQUEsR0FBUTZELFFBQUEsQ0FBUzdELEtBQUE7SUFDdkIsTUFBTThELFdBQUEsR0FBYzlELEtBQUEsQ0FBTTNKLElBQUEsQ0FBS0MsT0FBQSxDQUFRQyxJQUFBO0lBQ3ZDLEtBQUt1SixJQUFBLEdBQU87TUFDVkUsS0FBQTtNQUNBaEksS0FBQSxFQUFPNkwsUUFBQSxDQUFTN0wsS0FBQTtNQUNoQnFGLFNBQUEsRUFBWSxDQUFDd0csUUFBQSxDQUFTN0wsS0FBQSxJQUFVZ0ksS0FBQSxDQUFNbkssTUFBQSxDQUFPaUIsT0FBQSxDQUFRMVksT0FBQSxJQUFXeWxCLFFBQUEsQ0FBUzdMLEtBQUEsS0FBVWdJLEtBQUEsQ0FBTW5LLE1BQUEsQ0FBT2lCLE9BQUEsQ0FBUXhVLElBQUE7TUFDeEc0WCxLQUFBLEVBQU8wSixRQUFBO01BQ1BqRyxRQUFBLEVBQVU7TUFDVkMsR0FBQSxFQUFLO01BQ0xDLE1BQUEsRUFBUTtNQUNSckIsU0FBQSxFQUFXO01BQ1h2YyxNQUFBLEVBQVE7TUFDUjBjLFlBQUEsRUFBYztNQUNkRCxTQUFBLEVBQVc7TUFDWFEsT0FBQSxFQUFTO01BQ1Q1RSxNQUFBLEVBQVE7TUFDUjlKLEtBQUEsRUFBTzVDLFFBQUE7TUFDUG1VLEtBQUE7TUFDQXRELEVBQUEsRUFBSW9ILFFBQUEsQ0FBU3BILEVBQUE7TUFDYnlCLFdBQUEsRUFBYTRGLFdBQUEsS0FBZ0IzZSxNQUFBLEdBQVMyZSxXQUFBLEdBQWM7O0dBRXZEO0FBRUw7U0MzRGdCQyxjQUFjbmtCLENBQUEsRUFBRzNDLENBQUEsRUFBQztFQUNoQyxPQUFPMkMsQ0FBQSxHQUFJM0MsQ0FBQSxHQUFJLEtBQUsyQyxDQUFBLEtBQU0zQyxDQUFBLEdBQUksSUFBSTtBQUNwQztTQUVnQittQixxQkFBcUJwa0IsQ0FBQSxFQUFHM0MsQ0FBQSxFQUFDO0VBQ3ZDLE9BQU8yQyxDQUFBLEdBQUkzQyxDQUFBLEdBQUksS0FBSzJDLENBQUEsS0FBTTNDLENBQUEsR0FBSSxJQUFJO0FBQ3BDO1NDRGdCc2hCLEtBQUswRix1QkFBQSxFQUFtRDdZLEdBQUEsRUFBSzhZLENBQUEsRUFBRTtFQUM3RSxJQUFJQyxVQUFBLEdBQWFGLHVCQUFBLFlBQW1DeE4sV0FBQSxHQUNoRCxJQUFJd04sdUJBQUEsQ0FBd0J2TCxVQUFBLENBQVl1TCx1QkFBdUIsSUFDL0RBLHVCQUFBO0VBRUpFLFVBQUEsQ0FBV3JFLElBQUEsQ0FBS0MsS0FBQSxHQUFRbUUsQ0FBQSxHQUFJLElBQUlBLENBQUEsQ0FBRTlZLEdBQUcsSUFBSSxJQUFJekcsU0FBQSxDQUFVeUcsR0FBRztFQUMxRCxPQUFPK1ksVUFBQTtBQUNUO1NBRWdCQyxnQkFBZ0JWLFdBQUEsRUFBd0I7RUFDdEQsT0FBTyxJQUFJQSxXQUFBLENBQVloTCxVQUFBLENBQVlnTCxXQUFBLEVBQWEsTUFBTVcsVUFBQSxDQUFXLEVBQUUsQ0FBQyxFQUFFN1YsS0FBQSxDQUFNLENBQUM7QUFDL0U7U0FFZ0I4VixhQUFhMUcsR0FBQSxFQUFvQjtFQUMvQyxPQUFPQSxHQUFBLEtBQVEsU0FDWmxhLENBQUEsSUFBY0EsQ0FBQSxDQUFFNmdCLFdBQUEsQ0FBVyxJQUMzQjdnQixDQUFBLElBQWNBLENBQUEsQ0FBRThnQixXQUFBLENBQVc7QUFDaEM7U0FFZ0JDLGFBQWE3RyxHQUFBLEVBQW9CO0VBQy9DLE9BQU9BLEdBQUEsS0FBUSxTQUNabGEsQ0FBQSxJQUFjQSxDQUFBLENBQUU4Z0IsV0FBQSxDQUFXLElBQzNCOWdCLENBQUEsSUFBY0EsQ0FBQSxDQUFFNmdCLFdBQUEsQ0FBVztBQUNoQztTQUVnQkcsV0FBV2pxQixHQUFBLEVBQUtrcUIsUUFBQSxFQUFVQyxXQUFBLEVBQWFDLFdBQUEsRUFBYUMsSUFBQSxFQUFLbEgsR0FBQSxFQUFHO0VBQzFFLElBQUlyZixNQUFBLEdBQVMraEIsSUFBQSxDQUFLQyxHQUFBLENBQUk5bEIsR0FBQSxDQUFJOEQsTUFBQSxFQUFRc21CLFdBQUEsQ0FBWXRtQixNQUFNO0VBQ3BELElBQUl3bUIsR0FBQSxHQUFNO0VBQ1YsU0FBU2xuQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJVSxNQUFBLEVBQVEsRUFBRVYsQ0FBQSxFQUFHO0lBQzdCLElBQUltbkIsVUFBQSxHQUFhTCxRQUFBLENBQVM5bUIsQ0FBQTtJQUMxQixJQUFJbW5CLFVBQUEsS0FBZUgsV0FBQSxDQUFZaG5CLENBQUEsR0FBSTtNQUMvQixJQUFJaW5CLElBQUEsQ0FBSXJxQixHQUFBLENBQUlvRCxDQUFBLEdBQUkrbUIsV0FBQSxDQUFZL21CLENBQUEsQ0FBRSxJQUFJLEdBQUcsT0FBT3BELEdBQUEsQ0FBSW9FLE1BQUEsQ0FBTyxHQUFHaEIsQ0FBQyxJQUFJK21CLFdBQUEsQ0FBWS9tQixDQUFBLElBQUsrbUIsV0FBQSxDQUFZL2xCLE1BQUEsQ0FBT2hCLENBQUEsR0FBSSxDQUFDO01BQ3hHLElBQUlpbkIsSUFBQSxDQUFJcnFCLEdBQUEsQ0FBSW9ELENBQUEsR0FBSWduQixXQUFBLENBQVlobkIsQ0FBQSxDQUFFLElBQUksR0FBRyxPQUFPcEQsR0FBQSxDQUFJb0UsTUFBQSxDQUFPLEdBQUdoQixDQUFDLElBQUlnbkIsV0FBQSxDQUFZaG5CLENBQUEsSUFBSyttQixXQUFBLENBQVkvbEIsTUFBQSxDQUFPaEIsQ0FBQSxHQUFJLENBQUM7TUFDeEcsSUFBSWtuQixHQUFBLElBQU8sR0FBRyxPQUFPdHFCLEdBQUEsQ0FBSW9FLE1BQUEsQ0FBTyxHQUFHa21CLEdBQUcsSUFBSUosUUFBQSxDQUFTSSxHQUFBLElBQU9ILFdBQUEsQ0FBWS9sQixNQUFBLENBQU9rbUIsR0FBQSxHQUFNLENBQUM7TUFDcEYsT0FBTzs7SUFFWCxJQUFJRCxJQUFBLENBQUlycUIsR0FBQSxDQUFJb0QsQ0FBQSxHQUFJbW5CLFVBQVUsSUFBSSxHQUFHRCxHQUFBLEdBQU1sbkIsQ0FBQTs7RUFFM0MsSUFBSVUsTUFBQSxHQUFTc21CLFdBQUEsQ0FBWXRtQixNQUFBLElBQVVxZixHQUFBLEtBQVEsUUFBUSxPQUFPbmpCLEdBQUEsR0FBTW1xQixXQUFBLENBQVkvbEIsTUFBQSxDQUFPcEUsR0FBQSxDQUFJOEQsTUFBTTtFQUM3RixJQUFJQSxNQUFBLEdBQVM5RCxHQUFBLENBQUk4RCxNQUFBLElBQVVxZixHQUFBLEtBQVEsUUFBUSxPQUFPbmpCLEdBQUEsQ0FBSW9FLE1BQUEsQ0FBTyxHQUFHK2xCLFdBQUEsQ0FBWXJtQixNQUFNO0VBQ2xGLE9BQVF3bUIsR0FBQSxHQUFNLElBQUksT0FBT3RxQixHQUFBLENBQUlvRSxNQUFBLENBQU8sR0FBR2ttQixHQUFHLElBQUlGLFdBQUEsQ0FBWUUsR0FBQSxJQUFPSCxXQUFBLENBQVkvbEIsTUFBQSxDQUFPa21CLEdBQUEsR0FBTSxDQUFDO0FBQzdGO1NBRWdCRSx1QkFBdUJ2QixXQUFBLEVBQTBCd0IsS0FBQSxFQUFPQyxPQUFBLEVBQVNDLE1BQUEsRUFBTTtFQUVyRixJQUFJalEsS0FBQTtJQUFPRixLQUFBO0lBQU9vUSxPQUFBO0lBQVNDLFlBQUE7SUFBY0MsWUFBQTtJQUFjQyxTQUFBO0lBQVdDLGFBQUE7SUFDOURDLFVBQUEsR0FBYVAsT0FBQSxDQUFRNW1CLE1BQUE7RUFDekIsSUFBSSxDQUFDNG1CLE9BQUEsQ0FBUWxPLEtBQUEsQ0FBTXZULENBQUEsSUFBSyxPQUFPQSxDQUFBLEtBQU0sUUFBUSxHQUFHO0lBQzVDLE9BQU82YSxJQUFBLENBQUttRixXQUFBLEVBQWF6UCxlQUFlOztFQUU1QyxTQUFTMFIsY0FBYy9ILEdBQUEsRUFBRztJQUN0QnpJLEtBQUEsR0FBUW1QLFlBQUEsQ0FBYTFHLEdBQUc7SUFDeEIzSSxLQUFBLEdBQVF3UCxZQUFBLENBQWE3RyxHQUFHO0lBQ3hCeUgsT0FBQSxHQUFXekgsR0FBQSxLQUFRLFNBQVNtRyxhQUFBLEdBQWdCQyxvQkFBQTtJQUM1QyxJQUFJNEIsWUFBQSxHQUFlVCxPQUFBLENBQVE3bEIsR0FBQSxDQUFJLFVBQVV1bUIsTUFBQSxFQUFNO01BQzNDLE9BQU87UUFBQzVRLEtBQUEsRUFBT0EsS0FBQSxDQUFNNFEsTUFBTTtRQUFHMVEsS0FBQSxFQUFPQSxLQUFBLENBQU0wUSxNQUFNO01BQUM7S0FDckQsRUFBRTNPLElBQUEsQ0FBSyxVQUFTdFgsQ0FBQSxFQUFFM0MsQ0FBQSxFQUFDO01BQ2hCLE9BQU9vb0IsT0FBQSxDQUFRemxCLENBQUEsQ0FBRXFWLEtBQUEsRUFBT2hZLENBQUEsQ0FBRWdZLEtBQUs7S0FDbEM7SUFDRHFRLFlBQUEsR0FBZU0sWUFBQSxDQUFhdG1CLEdBQUEsQ0FBSSxVQUFVd21CLEVBQUEsRUFBRTtNQUFHLE9BQU9BLEVBQUEsQ0FBRzNRLEtBQUE7SUFBTSxDQUFFO0lBQ2pFb1EsWUFBQSxHQUFlSyxZQUFBLENBQWF0bUIsR0FBQSxDQUFJLFVBQVV3bUIsRUFBQSxFQUFFO01BQUcsT0FBT0EsRUFBQSxDQUFHN1EsS0FBQTtJQUFNLENBQUU7SUFDakV1USxTQUFBLEdBQVk1SCxHQUFBO0lBQ1o2SCxhQUFBLEdBQWlCN0gsR0FBQSxLQUFRLFNBQVMsS0FBS3dILE1BQUE7O0VBRTNDTyxhQUFBLENBQWMsTUFBTTtFQUVwQixJQUFJaEgsQ0FBQSxHQUFJLElBQUkrRSxXQUFBLENBQVloTCxVQUFBLENBQ3BCZ0wsV0FBQSxFQUNBLE1BQUlxQyxXQUFBLENBQVlULFlBQUEsQ0FBYSxJQUFJQyxZQUFBLENBQWFHLFVBQUEsR0FBVyxLQUFLTixNQUFNLENBQUM7RUFHekV6RyxDQUFBLENBQUU0QyxrQkFBQSxHQUFxQixVQUFVeUUsVUFBQSxFQUFTO0lBRXRDTCxhQUFBLENBQWNLLFVBQVM7O0VBRzNCLElBQUlDLG1CQUFBLEdBQXNCO0VBRTFCdEgsQ0FBQSxDQUFFdUIsYUFBQSxDQUFjLFVBQVU5QixNQUFBLEVBQVFDLE9BQUEsRUFBU3hYLE9BQUEsRUFBTztJQUk5QyxJQUFJcE0sR0FBQSxHQUFNMmpCLE1BQUEsQ0FBTzNqQixHQUFBO0lBQ2pCLElBQUksT0FBT0EsR0FBQSxLQUFRLFVBQVUsT0FBTztJQUNwQyxJQUFJa3FCLFFBQUEsR0FBVzFQLEtBQUEsQ0FBTXhhLEdBQUc7SUFDeEIsSUFBSXlxQixLQUFBLENBQU1QLFFBQUEsRUFBVVksWUFBQSxFQUFjVSxtQkFBbUIsR0FBRztNQUNwRCxPQUFPO1dBQ0o7TUFDSCxJQUFJQyxvQkFBQSxHQUF1QjtNQUMzQixTQUFTcm9CLENBQUEsR0FBRW9vQixtQkFBQSxFQUFxQnBvQixDQUFBLEdBQUU2bkIsVUFBQSxFQUFZLEVBQUU3bkIsQ0FBQSxFQUFHO1FBQy9DLElBQUlzb0IsTUFBQSxHQUFTekIsVUFBQSxDQUFXanFCLEdBQUEsRUFBS2txQixRQUFBLEVBQVVXLFlBQUEsQ0FBYXpuQixDQUFBLEdBQUkwbkIsWUFBQSxDQUFhMW5CLENBQUEsR0FBSXduQixPQUFBLEVBQVNHLFNBQVM7UUFDM0YsSUFBSVcsTUFBQSxLQUFXLFFBQVFELG9CQUFBLEtBQXlCLE1BQzVDRCxtQkFBQSxHQUFzQnBvQixDQUFBLEdBQUksTyxJQUNyQnFvQixvQkFBQSxLQUF5QixRQUFRYixPQUFBLENBQVFhLG9CQUFBLEVBQXNCQyxNQUFNLElBQUksR0FBRztVQUNqRkQsb0JBQUEsR0FBdUJDLE1BQUE7OztNQUcvQixJQUFJRCxvQkFBQSxLQUF5QixNQUFNO1FBQy9CN0gsT0FBQSxDQUFRO1VBQWNELE1BQUEsQ0FBT1MsUUFBQSxDQUFTcUgsb0JBQUEsR0FBdUJULGFBQWE7UUFBRSxDQUFFO2FBQzNFO1FBQ0hwSCxPQUFBLENBQVF4WCxPQUFPOztNQUVuQixPQUFPOztHQUVkO0VBQ0QsT0FBTzhYLENBQUE7QUFDVDtTQUVnQm9ILFlBQWE5USxLQUFBLEVBQXNCRSxLQUFBLEVBQXNCRCxTQUFBLEVBQXFCRSxTQUFBLEVBQW1CO0VBQzdHLE9BQU87SUFDSEosSUFBQSxFQUFJO0lBQ0pDLEtBQUE7SUFDQUUsS0FBQTtJQUNBRCxTQUFBO0lBQ0FFOztBQUVSO1NBRWdCaVAsV0FBWXpvQixLQUFBLEVBQW9CO0VBQzVDLE9BQU87SUFDSG9aLElBQUEsRUFBSTtJQUNKQyxLQUFBLEVBQU9yWixLQUFBO0lBQ1B1WixLQUFBLEVBQU92Wjs7QUFFZjtJQ3BIYTZhLFdBQUEsU0FBVztFQWN0QixJQUFJaUMsV0FBQSxFQUFVO0lBQ1osT0FBTyxLQUFLb0gsSUFBQSxDQUFLRSxLQUFBLENBQU0xTixFQUFBLENBQUdvRyxVQUFBOztFQVE1QjBOLFFBQVFuUixLQUFBLEVBQXNCRSxLQUFBLEVBQXNCa1IsWUFBQSxFQUF3QkMsWUFBQSxFQUFzQjtJQUNoR0QsWUFBQSxHQUFlQSxZQUFBLEtBQWlCO0lBQ2hDQyxZQUFBLEdBQWVBLFlBQUEsS0FBaUI7SUFDaEMsSUFBSTtNQUNGLElBQUssS0FBS0MsSUFBQSxDQUFLdFIsS0FBQSxFQUFPRSxLQUFLLElBQUksS0FDNUIsS0FBS29SLElBQUEsQ0FBS3RSLEtBQUEsRUFBT0UsS0FBSyxNQUFNLE1BQU1rUixZQUFBLElBQWdCQyxZQUFBLEtBQWlCLEVBQUVELFlBQUEsSUFBZ0JDLFlBQUEsR0FDdEYsT0FBT2xDLGVBQUEsQ0FBZ0IsSUFBSTtNQUM3QixPQUFPLElBQUksS0FBSzFMLFVBQUEsQ0FBVyxNQUFNLE1BQUlxTixXQUFBLENBQVk5USxLQUFBLEVBQU9FLEtBQUEsRUFBTyxDQUFDa1IsWUFBQSxFQUFjLENBQUNDLFlBQVksQ0FBQzthQUNyRnBrQixDQUFBLEVBQVA7TUFDQSxPQUFPcWMsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7OztFQVMxQzJDLE9BQU8vYSxLQUFBLEVBQW9CO0lBQ3pCLElBQUlBLEtBQUEsSUFBUyxNQUFNLE9BQU8yaUIsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7SUFDekQsT0FBTyxJQUFJLEtBQUswRSxVQUFBLENBQVcsTUFBTSxNQUFNMkwsVUFBQSxDQUFXem9CLEtBQUssQ0FBQzs7RUFRMUQ0cUIsTUFBTTVxQixLQUFBLEVBQW9CO0lBQ3hCLElBQUlBLEtBQUEsSUFBUyxNQUFNLE9BQU8yaUIsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7SUFDekQsT0FBTyxJQUFJLEtBQUswRSxVQUFBLENBQVcsTUFBTSxNQUFNcU4sV0FBQSxDQUFZbnFCLEtBQUEsRUFBTyxRQUFXLElBQUksQ0FBQzs7RUFRNUU2cUIsYUFBYTdxQixLQUFBLEVBQW9CO0lBQy9CLElBQUlBLEtBQUEsSUFBUyxNQUFNLE9BQU8yaUIsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7SUFDekQsT0FBTyxJQUFJLEtBQUswRSxVQUFBLENBQVcsTUFBTSxNQUFNcU4sV0FBQSxDQUFZbnFCLEtBQUEsRUFBTyxRQUFXLEtBQUssQ0FBQzs7RUFRN0U4cUIsTUFBTTlxQixLQUFBLEVBQW9CO0lBQ3hCLElBQUlBLEtBQUEsSUFBUyxNQUFNLE9BQU8yaUIsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7SUFDekQsT0FBTyxJQUFJLEtBQUswRSxVQUFBLENBQVcsTUFBTSxNQUFNcU4sV0FBQSxDQUFZLFFBQVducUIsS0FBQSxFQUFPLE9BQU8sSUFBSSxDQUFDOztFQVFuRitxQixhQUFhL3FCLEtBQUEsRUFBb0I7SUFDL0IsSUFBSUEsS0FBQSxJQUFTLE1BQU0sT0FBTzJpQixJQUFBLENBQUssTUFBTXZLLG9CQUFvQjtJQUN6RCxPQUFPLElBQUksS0FBSzBFLFVBQUEsQ0FBVyxNQUFNLE1BQU1xTixXQUFBLENBQVksUUFBV25xQixLQUFLLENBQUM7O0VBUXRFZ3JCLFdBQVdDLEdBQUEsRUFBVztJQUNwQixJQUFJLE9BQU9BLEdBQUEsS0FBUSxVQUFVLE9BQU90SSxJQUFBLENBQUssTUFBTXRLLGVBQWU7SUFDOUQsT0FBTyxLQUFLbVMsT0FBQSxDQUFRUyxHQUFBLEVBQUtBLEdBQUEsR0FBTWpULFNBQUEsRUFBVyxNQUFNLElBQUk7O0VBUXREa1QscUJBQXFCRCxHQUFBLEVBQVc7SUFDOUIsSUFBSUEsR0FBQSxLQUFRLElBQUksT0FBTyxLQUFLRCxVQUFBLENBQVdDLEdBQUc7SUFDMUMsT0FBTzVCLHNCQUFBLENBQXVCLE1BQU0sQ0FBQzlrQixDQUFBLEVBQUdQLENBQUEsS0FBTU8sQ0FBQSxDQUFFeEIsT0FBQSxDQUFRaUIsQ0FBQSxDQUFFLEVBQUUsTUFBTSxHQUFHLENBQUNpbkIsR0FBRyxHQUFHalQsU0FBUzs7RUFRdkZtVCxpQkFBaUJGLEdBQUEsRUFBVztJQUMxQixPQUFPNUIsc0JBQUEsQ0FBdUIsTUFBTSxDQUFDOWtCLENBQUEsRUFBR1AsQ0FBQSxLQUFNTyxDQUFBLEtBQU1QLENBQUEsQ0FBRSxJQUFJLENBQUNpbkIsR0FBRyxHQUFHLEVBQUU7O0VBVXJFRyxnQkFBQSxFQUFlO0lBQ2IsSUFBSXRyQixHQUFBLEdBQU13RixVQUFBLENBQVdqRCxLQUFBLENBQU1nRCxhQUFBLEVBQWVJLFNBQVM7SUFDbkQsSUFBSTNGLEdBQUEsQ0FBSTZDLE1BQUEsS0FBVyxHQUFHLE9BQU82bEIsZUFBQSxDQUFnQixJQUFJO0lBQ2pELE9BQU9hLHNCQUFBLENBQXVCLE1BQU0sQ0FBQzlrQixDQUFBLEVBQUdQLENBQUEsS0FBTUEsQ0FBQSxDQUFFakIsT0FBQSxDQUFRd0IsQ0FBQyxNQUFNLElBQUl6RSxHQUFBLEVBQUssRUFBRTs7RUFVNUV1ckIsMEJBQUEsRUFBeUI7SUFDdkIsSUFBSXZyQixHQUFBLEdBQU13RixVQUFBLENBQVdqRCxLQUFBLENBQU1nRCxhQUFBLEVBQWVJLFNBQVM7SUFDbkQsSUFBSTNGLEdBQUEsQ0FBSTZDLE1BQUEsS0FBVyxHQUFHLE9BQU82bEIsZUFBQSxDQUFnQixJQUFJO0lBQ2pELE9BQU9hLHNCQUFBLENBQXVCLE1BQU0sQ0FBQzlrQixDQUFBLEVBQUdQLENBQUEsS0FBTUEsQ0FBQSxDQUFFcVAsSUFBQSxDQUFLaVksQ0FBQSxJQUFLL21CLENBQUEsQ0FBRXhCLE9BQUEsQ0FBUXVvQixDQUFDLE1BQU0sQ0FBQyxHQUFHeHJCLEdBQUEsRUFBS2tZLFNBQVM7O0VBVS9GdVQsTUFBQSxFQUFLO0lBQ0gsTUFBTXpyQixHQUFBLEdBQU13RixVQUFBLENBQVdqRCxLQUFBLENBQU1nRCxhQUFBLEVBQWVJLFNBQVM7SUFDckQsSUFBSWdrQixPQUFBLEdBQVUsS0FBS2tCLElBQUE7SUFDbkIsSUFBSTtNQUFFN3FCLEdBQUEsQ0FBSXdiLElBQUEsQ0FBS21PLE9BQU87YUFBWW5qQixDQUFBLEVBQVA7TUFBWSxPQUFPcWMsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7O0lBQzdFLElBQUl0WSxHQUFBLENBQUk2QyxNQUFBLEtBQVcsR0FBRyxPQUFPNmxCLGVBQUEsQ0FBZ0IsSUFBSTtJQUNqRCxNQUFNekYsQ0FBQSxHQUFJLElBQUksS0FBS2pHLFVBQUEsQ0FBVyxNQUFNLE1BQU1xTixXQUFBLENBQVlycUIsR0FBQSxDQUFJLElBQUlBLEdBQUEsQ0FBSUEsR0FBQSxDQUFJNkMsTUFBQSxHQUFTLEVBQUUsQ0FBQztJQUVsRm9nQixDQUFBLENBQUU0QyxrQkFBQSxHQUFxQmlFLFNBQUEsSUFBUztNQUM5QkgsT0FBQSxHQUFXRyxTQUFBLEtBQWMsU0FDdkIsS0FBSzRCLFVBQUEsR0FDTCxLQUFLQyxXQUFBO01BQ1AzckIsR0FBQSxDQUFJd2IsSUFBQSxDQUFLbU8sT0FBTzs7SUFHbEIsSUFBSXhuQixDQUFBLEdBQUk7SUFDUjhnQixDQUFBLENBQUV1QixhQUFBLENBQWMsQ0FBQzlCLE1BQUEsRUFBUUMsT0FBQSxFQUFTeFgsT0FBQSxLQUFPO01BQ3ZDLE1BQU1wTSxHQUFBLEdBQU0yakIsTUFBQSxDQUFPM2pCLEdBQUE7TUFDbkIsT0FBTzRxQixPQUFBLENBQVE1cUIsR0FBQSxFQUFLaUIsR0FBQSxDQUFJbUMsQ0FBQSxDQUFFLElBQUksR0FBRztRQUUvQixFQUFFQSxDQUFBO1FBQ0YsSUFBSUEsQ0FBQSxLQUFNbkMsR0FBQSxDQUFJNkMsTUFBQSxFQUFRO1VBRXBCOGYsT0FBQSxDQUFReFgsT0FBTztVQUNmLE9BQU87OztNQUdYLElBQUl3ZSxPQUFBLENBQVE1cUIsR0FBQSxFQUFLaUIsR0FBQSxDQUFJbUMsQ0FBQSxDQUFFLE1BQU0sR0FBRztRQUU5QixPQUFPO2FBQ0Y7UUFFTHdnQixPQUFBLENBQVE7VUFBUUQsTUFBQSxDQUFPUyxRQUFBLENBQVNuakIsR0FBQSxDQUFJbUMsQ0FBQSxDQUFFO1FBQUUsQ0FBRTtRQUMxQyxPQUFPOztLQUVWO0lBQ0QsT0FBTzhnQixDQUFBOztFQVFUMkksU0FBUzFyQixLQUFBLEVBQW9CO0lBQzNCLE9BQU8sS0FBSzJyQixVQUFBLENBQVcsQ0FBQyxDQUFDeFQsTUFBQSxFQUFRblksS0FBSyxHQUFHLENBQUNBLEtBQUEsRUFBTyxLQUFLMFcsRUFBQSxDQUFHNkUsT0FBTyxDQUFDLEdBQUc7TUFBRXFRLGFBQUEsRUFBZTtNQUFPQyxhQUFBLEVBQWU7SUFBSyxDQUFFOztFQVVwSEMsT0FBQSxFQUFNO0lBQ0osTUFBTWhzQixHQUFBLEdBQU13RixVQUFBLENBQVdqRCxLQUFBLENBQU1nRCxhQUFBLEVBQWVJLFNBQVM7SUFDckQsSUFBSTNGLEdBQUEsQ0FBSTZDLE1BQUEsS0FBVyxHQUFHLE9BQU8sSUFBSSxLQUFLbWEsVUFBQSxDQUFXLElBQUk7SUFDckQsSUFBSTtNQUFFaGQsR0FBQSxDQUFJd2IsSUFBQSxDQUFLLEtBQUtrUSxVQUFVO2FBQVlsbEIsQ0FBQSxFQUFQO01BQVksT0FBT3FjLElBQUEsQ0FBSyxNQUFNdkssb0JBQW9COztJQUVyRixNQUFNMlQsTUFBQSxHQUFTanNCLEdBQUEsQ0FBSWdDLE1BQUEsQ0FDakIsQ0FBQ2lJLEdBQUEsRUFBS25ILEdBQUEsS0FBUW1ILEdBQUEsR0FDWkEsR0FBQSxDQUFJakcsTUFBQSxDQUFPLENBQUMsQ0FBQ2lHLEdBQUEsQ0FBSUEsR0FBQSxDQUFJcEgsTUFBQSxHQUFTLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUMsSUFDMUMsQ0FBQyxDQUFDdVYsTUFBQSxFQUFRdlYsR0FBRyxDQUFDLEdBQ2hCLElBQUk7SUFDTm1wQixNQUFBLENBQU9scEIsSUFBQSxDQUFLLENBQUMvQyxHQUFBLENBQUlBLEdBQUEsQ0FBSTZDLE1BQUEsR0FBUyxJQUFJLEtBQUsrVCxFQUFBLENBQUc2RSxPQUFPLENBQUM7SUFDbEQsT0FBTyxLQUFLb1EsVUFBQSxDQUFXSSxNQUFBLEVBQVE7TUFBRUgsYUFBQSxFQUFlO01BQU9DLGFBQUEsRUFBZTtJQUFLLENBQUU7O0VBUS9FRixXQUNFSSxNQUFBLEVBQ0Fuc0IsT0FBQSxFQUE4RDtJQUU5RCxNQUFNc3BCLElBQUEsR0FBTSxLQUFLeUIsSUFBQTtNQUNYcUIsU0FBQSxHQUFZLEtBQUtSLFVBQUE7TUFDakJTLFVBQUEsR0FBYSxLQUFLUixXQUFBO01BQ2xCOUcsR0FBQSxHQUFNLEtBQUt1SCxJQUFBO01BQ1hDLEdBQUEsR0FBTSxLQUFLQyxJQUFBO0lBRWpCLElBQUlMLE1BQUEsQ0FBT3BwQixNQUFBLEtBQVcsR0FBRyxPQUFPNmxCLGVBQUEsQ0FBZ0IsSUFBSTtJQUNwRCxJQUFJLENBQUN1RCxNQUFBLENBQU8xUSxLQUFBLENBQU1pRCxLQUFBLElBQ2hCQSxLQUFBLENBQU0sT0FBTyxVQUNiQSxLQUFBLENBQU0sT0FBTyxVQUNiME4sU0FBQSxDQUFVMU4sS0FBQSxDQUFNLElBQUlBLEtBQUEsQ0FBTSxFQUFFLEtBQUssQ0FBQyxHQUFHO01BQ3JDLE9BQU9xRSxJQUFBLENBQ0wsTUFDQSw4SEFDQXBhLFVBQUEsQ0FBV3lWLGVBQWU7O0lBRTlCLE1BQU00TixhQUFBLEdBQWdCLENBQUNoc0IsT0FBQSxJQUFXQSxPQUFBLENBQVFnc0IsYUFBQSxLQUFrQjtJQUM1RCxNQUFNQyxhQUFBLEdBQWdCanNCLE9BQUEsSUFBV0EsT0FBQSxDQUFRaXNCLGFBQUEsS0FBa0I7SUFFM0QsU0FBU1EsVUFBU0MsT0FBQSxFQUFRQyxRQUFBLEVBQVE7TUFDaEMsSUFBSXRxQixDQUFBLEdBQUk7UUFBR1MsQ0FBQSxHQUFJNHBCLE9BQUEsQ0FBTzNwQixNQUFBO01BQ3RCLE9BQU9WLENBQUEsR0FBSVMsQ0FBQSxFQUFHLEVBQUVULENBQUEsRUFBRztRQUNqQixNQUFNcWMsS0FBQSxHQUFRZ08sT0FBQSxDQUFPcnFCLENBQUE7UUFDckIsSUFBSWluQixJQUFBLENBQUlxRCxRQUFBLENBQVMsSUFBSWpPLEtBQUEsQ0FBTSxFQUFFLElBQUksS0FBSzRLLElBQUEsQ0FBSXFELFFBQUEsQ0FBUyxJQUFJak8sS0FBQSxDQUFNLEVBQUUsSUFBSSxHQUFHO1VBQ3BFQSxLQUFBLENBQU0sS0FBS3FHLEdBQUEsQ0FBSXJHLEtBQUEsQ0FBTSxJQUFJaU8sUUFBQSxDQUFTLEVBQUU7VUFDcENqTyxLQUFBLENBQU0sS0FBSzZOLEdBQUEsQ0FBSTdOLEtBQUEsQ0FBTSxJQUFJaU8sUUFBQSxDQUFTLEVBQUU7VUFDcEM7OztNQUdKLElBQUl0cUIsQ0FBQSxLQUFNUyxDQUFBLEVBQ1I0cEIsT0FBQSxDQUFPenBCLElBQUEsQ0FBSzBwQixRQUFRO01BQ3RCLE9BQU9ELE9BQUE7O0lBR1QsSUFBSUUsYUFBQSxHQUFnQlIsU0FBQTtJQUNwQixTQUFTUyxZQUFZem9CLENBQUEsRUFBRzNDLENBQUEsRUFBQztNQUFJLE9BQU9tckIsYUFBQSxDQUFjeG9CLENBQUEsQ0FBRSxJQUFJM0MsQ0FBQSxDQUFFLEVBQUU7SUFBRTtJQUc5RCxJQUFJdkIsR0FBQTtJQUNKLElBQUk7TUFDRkEsR0FBQSxHQUFNaXNCLE1BQUEsQ0FBT2pxQixNQUFBLENBQU91cUIsU0FBQSxFQUFVLEVBQUU7TUFDaEN2c0IsR0FBQSxDQUFJd2IsSUFBQSxDQUFLbVIsV0FBVzthQUNibnFCLEVBQUEsRUFBUDtNQUNBLE9BQU9xZ0IsSUFBQSxDQUFLLE1BQU12SyxvQkFBb0I7O0lBR3hDLElBQUlzVSxRQUFBLEdBQVc7SUFDZixNQUFNQyx1QkFBQSxHQUEwQmQsYUFBQSxHQUM5Qmh0QixHQUFBLElBQU9tdEIsU0FBQSxDQUFVbnRCLEdBQUEsRUFBS2lCLEdBQUEsQ0FBSTRzQixRQUFBLEVBQVUsRUFBRSxJQUFJLElBQzFDN3RCLEdBQUEsSUFBT210QixTQUFBLENBQVVudEIsR0FBQSxFQUFLaUIsR0FBQSxDQUFJNHNCLFFBQUEsRUFBVSxFQUFFLEtBQUs7SUFFN0MsTUFBTUUsdUJBQUEsR0FBMEJoQixhQUFBLEdBQzlCL3NCLEdBQUEsSUFBT290QixVQUFBLENBQVdwdEIsR0FBQSxFQUFLaUIsR0FBQSxDQUFJNHNCLFFBQUEsRUFBVSxFQUFFLElBQUksSUFDM0M3dEIsR0FBQSxJQUFPb3RCLFVBQUEsQ0FBV3B0QixHQUFBLEVBQUtpQixHQUFBLENBQUk0c0IsUUFBQSxFQUFVLEVBQUUsS0FBSztJQUU5QyxTQUFTRyxzQkFBc0JodUIsR0FBQSxFQUFHO01BQ2hDLE9BQU8sQ0FBQzh0Qix1QkFBQSxDQUF3Qjl0QixHQUFHLEtBQUssQ0FBQyt0Qix1QkFBQSxDQUF3Qi90QixHQUFHOztJQUd0RSxJQUFJaXVCLFFBQUEsR0FBV0gsdUJBQUE7SUFFZixNQUFNNUosQ0FBQSxHQUFJLElBQUksS0FBS2pHLFVBQUEsQ0FDakIsTUFDQSxNQUFNcU4sV0FBQSxDQUFZcnFCLEdBQUEsQ0FBSSxHQUFHLElBQUlBLEdBQUEsQ0FBSUEsR0FBQSxDQUFJNkMsTUFBQSxHQUFTLEdBQUcsSUFBSSxDQUFDaXBCLGFBQUEsRUFBZSxDQUFDQyxhQUFhLENBQUM7SUFFdEY5SSxDQUFBLENBQUU0QyxrQkFBQSxHQUFxQmlFLFNBQUEsSUFBUztNQUM5QixJQUFJQSxTQUFBLEtBQWMsUUFBUTtRQUN4QmtELFFBQUEsR0FBV0gsdUJBQUE7UUFDWEgsYUFBQSxHQUFnQlIsU0FBQTthQUNYO1FBQ0xjLFFBQUEsR0FBV0YsdUJBQUE7UUFDWEosYUFBQSxHQUFnQlAsVUFBQTs7TUFFbEJuc0IsR0FBQSxDQUFJd2IsSUFBQSxDQUFLbVIsV0FBVzs7SUFHdEIxSixDQUFBLENBQUV1QixhQUFBLENBQWMsQ0FBQzlCLE1BQUEsRUFBUUMsT0FBQSxFQUFTeFgsT0FBQSxLQUFPO01BQ3ZDLElBQUlwTSxHQUFBLEdBQU0yakIsTUFBQSxDQUFPM2pCLEdBQUE7TUFDakIsT0FBT2l1QixRQUFBLENBQVNqdUIsR0FBRyxHQUFHO1FBRXBCLEVBQUU2dEIsUUFBQTtRQUNGLElBQUlBLFFBQUEsS0FBYTVzQixHQUFBLENBQUk2QyxNQUFBLEVBQVE7VUFFM0I4ZixPQUFBLENBQVF4WCxPQUFPO1VBQ2YsT0FBTzs7O01BR1gsSUFBSTRoQixxQkFBQSxDQUFzQmh1QixHQUFHLEdBQUc7UUFFOUIsT0FBTztpQkFDRSxLQUFLOHJCLElBQUEsQ0FBSzlyQixHQUFBLEVBQUtpQixHQUFBLENBQUk0c0IsUUFBQSxFQUFVLEVBQUUsTUFBTSxLQUFLLEtBQUsvQixJQUFBLENBQUs5ckIsR0FBQSxFQUFLaUIsR0FBQSxDQUFJNHNCLFFBQUEsRUFBVSxFQUFFLE1BQU0sR0FBRztRQUczRixPQUFPO2FBQ0Y7UUFFTGpLLE9BQUEsQ0FBUTtVQUNOLElBQUkrSixhQUFBLEtBQWtCUixTQUFBLEVBQVd4SixNQUFBLENBQU9TLFFBQUEsQ0FBU25qQixHQUFBLENBQUk0c0IsUUFBQSxFQUFVLEVBQUUsT0FDNURsSyxNQUFBLENBQU9TLFFBQUEsQ0FBU25qQixHQUFBLENBQUk0c0IsUUFBQSxFQUFVLEVBQUU7U0FDdEM7UUFDRCxPQUFPOztLQUVWO0lBQ0QsT0FBTzNKLENBQUE7O0VBVVRnSyxnQkFBQSxFQUFlO0lBQ2IsTUFBTWp0QixHQUFBLEdBQU13RixVQUFBLENBQVdqRCxLQUFBLENBQU1nRCxhQUFBLEVBQWVJLFNBQVM7SUFFckQsSUFBSSxDQUFDM0YsR0FBQSxDQUFJdWIsS0FBQSxDQUFNdlQsQ0FBQSxJQUFLLE9BQU9BLENBQUEsS0FBTSxRQUFRLEdBQUc7TUFDeEMsT0FBTzZhLElBQUEsQ0FBSyxNQUFNLDJDQUEyQzs7SUFFakUsSUFBSTdpQixHQUFBLENBQUk2QyxNQUFBLEtBQVcsR0FBRyxPQUFPNmxCLGVBQUEsQ0FBZ0IsSUFBSTtJQUVqRCxPQUFPLEtBQUttRCxVQUFBLENBQVc3ckIsR0FBQSxDQUFJNEQsR0FBQSxDQUFLdW5CLEdBQUEsSUFBZ0IsQ0FBQ0EsR0FBQSxFQUFLQSxHQUFBLEdBQU1qVCxTQUFTLENBQUMsQ0FBQzs7O1NDdlYzRGdWLDZCQUE2QnRXLEVBQUEsRUFBUztFQUNwRCxPQUFPMkosb0JBQUEsQ0FDTHhGLFdBQUEsQ0FBWXZhLFNBQUEsRUFFWixTQUFTMnNCLGFBQStCN0ksS0FBQSxFQUFjaEksS0FBQSxFQUFnQjhRLFlBQUEsRUFBeUI7SUFDN0YsS0FBS3hXLEVBQUEsR0FBS0EsRUFBQTtJQUNWLEtBQUt3TixJQUFBLEdBQU87TUFDVkUsS0FBQTtNQUNBaEksS0FBQSxFQUFPQSxLQUFBLEtBQVUsUUFBUSxPQUFPQSxLQUFBO01BQ2hDeUUsRUFBQSxFQUFJcU07O0lBRU4sTUFBTUMsVUFBQSxHQUFZelcsRUFBQSxDQUFHbUYsS0FBQSxDQUFNQyxTQUFBO0lBQzNCLElBQUksQ0FBQ3FSLFVBQUEsRUFBVyxNQUFNLElBQUk1a0IsVUFBQSxDQUFXakIsVUFBQSxDQUFVO0lBQy9DLEtBQUtxakIsSUFBQSxHQUFPLEtBQUthLFVBQUEsR0FBYTJCLFVBQUEsQ0FBVXBSLEdBQUEsQ0FBSXZiLElBQUEsQ0FBSzJzQixVQUFTO0lBQzFELEtBQUsxQixXQUFBLEdBQWMsQ0FBQ3puQixDQUFBLEVBQUczQyxDQUFBLEtBQU04ckIsVUFBQSxDQUFVcFIsR0FBQSxDQUFJMWEsQ0FBQSxFQUFHMkMsQ0FBQztJQUMvQyxLQUFLb29CLElBQUEsR0FBTyxDQUFDcG9CLENBQUEsRUFBRzNDLENBQUEsS0FBTThyQixVQUFBLENBQVVwUixHQUFBLENBQUkvWCxDQUFBLEVBQUUzQyxDQUFDLElBQUksSUFBSTJDLENBQUEsR0FBSTNDLENBQUE7SUFDbkQsS0FBSzZxQixJQUFBLEdBQU8sQ0FBQ2xvQixDQUFBLEVBQUczQyxDQUFBLEtBQU04ckIsVUFBQSxDQUFVcFIsR0FBQSxDQUFJL1gsQ0FBQSxFQUFFM0MsQ0FBQyxJQUFJLElBQUkyQyxDQUFBLEdBQUkzQyxDQUFBO0lBQ25ELEtBQUsrckIsWUFBQSxHQUFlMVcsRUFBQSxDQUFHbUYsS0FBQSxDQUFNd1IsV0FBQTtHQUM5QjtBQUVMO1NDcENnQkMsbUJBQW1CdmUsTUFBQSxFQUFNO0VBQ3ZDLE9BQU91RSxJQUFBLENBQUssVUFBVXNDLEtBQUEsRUFBSztJQUN2QjJYLGNBQUEsQ0FBZTNYLEtBQUs7SUFDcEI3RyxNQUFBLENBQVE2RyxLQUFBLENBQU00WCxNQUFBLENBQU9ySixLQUFLO0lBQzFCLE9BQU87R0FDVjtBQUNIO1NBNENnQm9KLGVBQWUzWCxLQUFBLEVBQUs7RUFDbEMsSUFBSUEsS0FBQSxDQUFNNlgsZUFBQSxFQUNON1gsS0FBQSxDQUFNNlgsZUFBQSxDQUFlO0VBQ3pCLElBQUk3WCxLQUFBLENBQU0yWCxjQUFBLEVBQ04zWCxLQUFBLENBQU0yWCxjQUFBLENBQWM7QUFDMUI7QUN0RE8sSUFBTUcsZ0NBQUEsR0FBbUM7QUFhekMsSUFBTUMsOEJBQUEsR0FBaUM7QUFFdkMsSUFBTUMsWUFBQSxHQUFldk8sTUFBQSxDQUFPLE1BQU1xTyxnQ0FBZ0M7SUNDNURHLFdBQUEsU0FBVztFQTZCdEJDLE1BQUEsRUFBSztJQUNIMXNCLE1BQUEsQ0FBTyxDQUFDbU0sR0FBQSxDQUFJcFAsTUFBTTtJQUVsQixFQUFFLEtBQUs0dkIsU0FBQTtJQUNQLElBQUksS0FBS0EsU0FBQSxLQUFjLEtBQUssQ0FBQ3hnQixHQUFBLENBQUlwUCxNQUFBLEVBQVFvUCxHQUFBLENBQUl5Z0IsWUFBQSxHQUFlO0lBQzVELE9BQU87O0VBT1RDLFFBQUEsRUFBTztJQUNMN3NCLE1BQUEsQ0FBTyxDQUFDbU0sR0FBQSxDQUFJcFAsTUFBTTtJQUNsQixJQUFJLEVBQUUsS0FBSzR2QixTQUFBLEtBQWMsR0FBRztNQUMxQixJQUFJLENBQUN4Z0IsR0FBQSxDQUFJcFAsTUFBQSxFQUFRb1AsR0FBQSxDQUFJeWdCLFlBQUEsR0FBZTtNQUNwQyxPQUFPLEtBQUtFLGFBQUEsQ0FBY3ZyQixNQUFBLEdBQVMsS0FBSyxDQUFDLEtBQUt3ckIsT0FBQSxDQUFPLEdBQUk7UUFDdkQsSUFBSUMsUUFBQSxHQUFXLEtBQUtGLGFBQUEsQ0FBY0csS0FBQSxDQUFLO1FBQ3ZDLElBQUk7VUFBRXhkLE1BQUEsQ0FBT3VkLFFBQUEsQ0FBUyxJQUFJQSxRQUFBLENBQVMsRUFBRTtpQkFBWTluQixDQUFBLEVBQVAsQ0FBVTs7O0lBR3hELE9BQU87O0VBT1Q2bkIsUUFBQSxFQUFPO0lBV0wsT0FBTyxLQUFLSixTQUFBLElBQWF4Z0IsR0FBQSxDQUFJeWdCLFlBQUEsS0FBaUI7O0VBUWhEenRCLE9BQU80WixRQUFBLEVBQXlCO0lBQzlCLElBQUksQ0FBQyxLQUFLeEQsSUFBQSxFQUFNLE9BQU87SUFDdkIsTUFBTUUsS0FBQSxHQUFRLEtBQUtILEVBQUEsQ0FBR0csS0FBQTtJQUN0QixNQUFNSSxXQUFBLEdBQWMsS0FBS1AsRUFBQSxDQUFHdkksTUFBQSxDQUFPOEksV0FBQTtJQUNuQzdWLE1BQUEsQ0FBTyxDQUFDLEtBQUsrWSxRQUFRO0lBQ3JCLElBQUksQ0FBQ0EsUUFBQSxJQUFZLENBQUN0RCxLQUFBLEVBQU87TUFDdkIsUUFBUUksV0FBQSxJQUFlQSxXQUFBLENBQVl2USxJQUFBO2FBQzVCO1VBRUgsTUFBTSxJQUFJNkIsVUFBQSxDQUFXcEIsY0FBQSxDQUFlOFAsV0FBVzthQUM1QztVQUVILE1BQU0sSUFBSTFPLFVBQUEsQ0FBV2pCLFVBQUEsQ0FBVzJQLFdBQUEsQ0FBWXRRLE9BQUEsRUFBU3NRLFdBQVc7O1VBR2hFLE1BQU0sSUFBSTFPLFVBQUEsQ0FBVytsQixVQUFBLENBQVdyWCxXQUFXOzs7SUFHakQsSUFBSSxDQUFDLEtBQUtzWCxNQUFBLEVBQVEsTUFBTSxJQUFJaG1CLFVBQUEsQ0FBV2xCLG1CQUFBLENBQW1CO0lBQzFEakcsTUFBQSxDQUFPLEtBQUswVyxXQUFBLENBQVkzSixNQUFBLEtBQVcsSUFBSTtJQUV2Q2dNLFFBQUEsR0FBVyxLQUFLQSxRQUFBLEdBQVdBLFFBQUEsS0FDeEIsS0FBS3pELEVBQUEsQ0FBRzhELElBQUEsR0FDTCxLQUFLOUQsRUFBQSxDQUFHOEQsSUFBQSxDQUFLZ1UsV0FBQSxDQUFZLEtBQUs1WCxVQUFBLEVBQVksS0FBS0QsSUFBQSxFQUFrQztNQUFFOFgsVUFBQSxFQUFZLEtBQUtDO0lBQTJCLENBQUUsSUFDakk3WCxLQUFBLENBQU0yWCxXQUFBLENBQVksS0FBSzVYLFVBQUEsRUFBWSxLQUFLRCxJQUFBLEVBQU07TUFBRThYLFVBQUEsRUFBWSxLQUFLQztJQUEyQixDQUFFO0lBR3BHdlUsUUFBQSxDQUFTL1gsT0FBQSxHQUFVa1IsSUFBQSxDQUFLcWIsRUFBQSxJQUFFO01BQ3hCcEIsY0FBQSxDQUFlb0IsRUFBRTtNQUNqQixLQUFLQyxPQUFBLENBQVF6VSxRQUFBLENBQVNnSyxLQUFLO0tBQzVCO0lBQ0RoSyxRQUFBLENBQVMwVSxPQUFBLEdBQVV2YixJQUFBLENBQUtxYixFQUFBLElBQUU7TUFDeEJwQixjQUFBLENBQWVvQixFQUFFO01BQ2pCLEtBQUtKLE1BQUEsSUFBVSxLQUFLSyxPQUFBLENBQVEsSUFBSXJtQixVQUFBLENBQVduQixLQUFBLENBQU0rUyxRQUFBLENBQVNnSyxLQUFLLENBQUM7TUFDaEUsS0FBS29LLE1BQUEsR0FBUztNQUNkLEtBQUtPLEVBQUEsQ0FBRyxPQUFPLEVBQUVuVSxJQUFBLENBQUtnVSxFQUFFO0tBQ3pCO0lBQ0R4VSxRQUFBLENBQVM0VSxVQUFBLEdBQWF6YixJQUFBLENBQUs7TUFDekIsS0FBS2liLE1BQUEsR0FBUztNQUNkLEtBQUtTLFFBQUEsQ0FBUTtNQUNiLElBQUksa0JBQWtCN1UsUUFBQSxFQUFVO1FBQzlCeVQsWUFBQSxDQUFhcUIsY0FBQSxDQUFldFUsSUFBQSxDQUFLUixRQUFBLENBQVMsZUFBZTs7S0FFNUQ7SUFDRCxPQUFPOztFQU9UbEksU0FDRTBFLElBQUEsRUFDQW5WLEVBQUEsRUFDQTB0QixVQUFBLEVBQTZCO0lBRTdCLElBQUl2WSxJQUFBLEtBQVMsZUFBZSxLQUFLQSxJQUFBLEtBQVMsYUFDeEMsT0FBTy9CLFNBQUEsQ0FBVSxJQUFJck0sVUFBQSxDQUFXNG1CLFFBQUEsQ0FBUyx5QkFBeUIsQ0FBQztJQUVyRSxJQUFJLENBQUMsS0FBS1osTUFBQSxFQUNSLE9BQU8zWixTQUFBLENBQVUsSUFBSXJNLFVBQUEsQ0FBV2xCLG1CQUFBLENBQW1CLENBQUU7SUFFdkQsSUFBSSxLQUFLOG1CLE9BQUEsQ0FBTyxHQUFJO01BQ2xCLE9BQU8sSUFBSXpnQixZQUFBLENBQWEsQ0FBQ3pDLE9BQUEsRUFBUzhELE1BQUEsS0FBTTtRQUN0QyxLQUFLbWYsYUFBQSxDQUFjcnJCLElBQUEsQ0FBSyxDQUFDO1VBQ3ZCLEtBQUtvUCxRQUFBLENBQVMwRSxJQUFBLEVBQU1uVixFQUFBLEVBQUkwdEIsVUFBVSxFQUFFM2tCLElBQUEsQ0FBS1UsT0FBQSxFQUFTOEQsTUFBTTtXQUN2RHhCLEdBQUcsQ0FBQztPQUNSO2VBRVEyaEIsVUFBQSxFQUFZO01BQ3JCLE9BQU90ZSxRQUFBLENBQVM7UUFDZCxJQUFJd2UsRUFBQSxHQUFJLElBQUkxaEIsWUFBQSxDQUFhLENBQUN6QyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07VUFDdkMsS0FBSytlLEtBQUEsQ0FBSztVQUNWLE1BQU1yckIsRUFBQSxHQUFLakIsRUFBQSxDQUFHeUosT0FBQSxFQUFTOEQsTUFBQSxFQUFRLElBQUk7VUFDbkMsSUFBSXRNLEVBQUEsSUFBTUEsRUFBQSxDQUFHOEgsSUFBQSxFQUFNOUgsRUFBQSxDQUFHOEgsSUFBQSxDQUFLVSxPQUFBLEVBQVM4RCxNQUFNO1NBQzNDO1FBQ0RxZ0IsRUFBQSxDQUFFMWYsT0FBQSxDQUFRLE1BQU0sS0FBS3VlLE9BQUEsQ0FBTyxDQUFFO1FBQzlCbUIsRUFBQSxDQUFFdmhCLElBQUEsR0FBTztRQUNULE9BQU91aEIsRUFBQTtPQUNSO1dBRUk7TUFDTCxJQUFJN2QsQ0FBQSxHQUFJLElBQUk3RCxZQUFBLENBQWEsQ0FBQ3pDLE9BQUEsRUFBUzhELE1BQUEsS0FBTTtRQUN2QyxJQUFJdE0sRUFBQSxHQUFLakIsRUFBQSxDQUFHeUosT0FBQSxFQUFTOEQsTUFBQSxFQUFRLElBQUk7UUFDakMsSUFBSXRNLEVBQUEsSUFBTUEsRUFBQSxDQUFHOEgsSUFBQSxFQUFNOUgsRUFBQSxDQUFHOEgsSUFBQSxDQUFLVSxPQUFBLEVBQVM4RCxNQUFNO09BQzNDO01BQ0R3QyxDQUFBLENBQUUxRCxJQUFBLEdBQU87TUFDVCxPQUFPMEQsQ0FBQTs7O0VBUVg4ZCxNQUFBLEVBQUs7SUFDSCxPQUFPLEtBQUtqYixNQUFBLEdBQVMsS0FBS0EsTUFBQSxDQUFPaWIsS0FBQSxDQUFLLElBQUs7O0VBUzdDQyxRQUFRQyxXQUFBLEVBQTZCO0lBRW5DLElBQUlDLElBQUEsR0FBTyxLQUFLSCxLQUFBLENBQUs7SUFHckIsTUFBTXpkLE9BQUEsR0FBVWxFLFlBQUEsQ0FBYXpDLE9BQUEsQ0FBUXNrQixXQUFXO0lBQ2hELElBQUlDLElBQUEsQ0FBS0MsV0FBQSxFQUFhO01BRXBCRCxJQUFBLENBQUtDLFdBQUEsR0FBY0QsSUFBQSxDQUFLQyxXQUFBLENBQVlsbEIsSUFBQSxDQUFLLE1BQU1xSCxPQUFPO1dBQ2pEO01BRUw0ZCxJQUFBLENBQUtDLFdBQUEsR0FBYzdkLE9BQUE7TUFDbkI0ZCxJQUFBLENBQUtFLGFBQUEsR0FBZ0I7TUFFckIsSUFBSUMsS0FBQSxHQUFRSCxJQUFBLENBQUtyVixRQUFBLENBQVN5VixXQUFBLENBQVlKLElBQUEsQ0FBSzVZLFVBQUEsQ0FBVyxFQUFFO01BQ3hELENBQUMsU0FBU2laLEtBQUEsRUFBSTtRQUNaLEVBQUVMLElBQUEsQ0FBS00sVUFBQTtRQUNQLE9BQU9OLElBQUEsQ0FBS0UsYUFBQSxDQUFjL3NCLE1BQUEsRUFBUzZzQixJQUFBLENBQUtFLGFBQUEsQ0FBY3JCLEtBQUEsQ0FBSyxFQUFFO1FBQzdELElBQUltQixJQUFBLENBQUtDLFdBQUEsRUFBYUUsS0FBQSxDQUFNOXZCLEdBQUEsQ0FBSSxDQUFBbVEsUUFBUyxFQUFFaEcsU0FBQSxHQUFZNmxCLElBQUE7U0FDeEQ7O0lBRUgsSUFBSUUsa0JBQUEsR0FBcUJQLElBQUEsQ0FBS0MsV0FBQTtJQUM5QixPQUFPLElBQUkvaEIsWUFBQSxDQUFhLENBQUN6QyxPQUFBLEVBQVM4RCxNQUFBLEtBQU07TUFDdEM2QyxPQUFBLENBQVFySCxJQUFBLENBQ05SLEdBQUEsSUFBT3lsQixJQUFBLENBQUtFLGFBQUEsQ0FBYzdzQixJQUFBLENBQUt5USxJQUFBLENBQUtySSxPQUFBLENBQVF6SyxJQUFBLENBQUssTUFBTXVKLEdBQUcsQ0FBQyxDQUFDLEdBQzVEeUYsR0FBQSxJQUFPZ2dCLElBQUEsQ0FBS0UsYUFBQSxDQUFjN3NCLElBQUEsQ0FBS3lRLElBQUEsQ0FBS3ZFLE1BQUEsQ0FBT3ZPLElBQUEsQ0FBSyxNQUFNZ1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUM1REUsT0FBQSxDQUFRO1FBQ1IsSUFBSThmLElBQUEsQ0FBS0MsV0FBQSxLQUFnQk0sa0JBQUEsRUFBb0I7VUFFM0NQLElBQUEsQ0FBS0MsV0FBQSxHQUFjOztPQUV0QjtLQUNGOztFQU9ITyxNQUFBLEVBQUs7SUFDSCxJQUFJLEtBQUt6QixNQUFBLEVBQVE7TUFDZixLQUFLQSxNQUFBLEdBQVM7TUFDZCxJQUFJLEtBQUtwVSxRQUFBLEVBQVUsS0FBS0EsUUFBQSxDQUFTNlYsS0FBQSxDQUFLO01BQ3RDLEtBQUtwQixPQUFBLENBQVEsSUFBSXJtQixVQUFBLENBQVduQixLQUFBLENBQUssQ0FBRTs7O0VBUXZDZ2QsTUFBTXRLLFNBQUEsRUFBaUI7SUFDckIsTUFBTW1XLGNBQUEsR0FBa0IsS0FBS0MsZUFBQSxLQUFvQixLQUFLQSxlQUFBLEdBQWtCO0lBQ3hFLElBQUloeEIsTUFBQSxDQUFPK3dCLGNBQUEsRUFBZ0JuVyxTQUFTLEdBQ2xDLE9BQU9tVyxjQUFBLENBQWVuVyxTQUFBO0lBQ3hCLE1BQU0wRyxXQUFBLEdBQWMsS0FBS3ZHLE1BQUEsQ0FBT0gsU0FBQTtJQUNoQyxJQUFJLENBQUMwRyxXQUFBLEVBQWE7TUFDaEIsTUFBTSxJQUFJalksVUFBQSxDQUFXMlIsUUFBQSxDQUFTLFdBQVdKLFNBQUEsR0FBWSwwQkFBMEI7O0lBR2pGLE1BQU1xVyxxQkFBQSxHQUF3QixJQUFJLEtBQUt6WixFQUFBLENBQUdnRCxLQUFBLENBQU1JLFNBQUEsRUFBVzBHLFdBQUEsRUFBYSxJQUFJO0lBQzVFMlAscUJBQUEsQ0FBc0IzVixJQUFBLEdBQU8sS0FBSzlELEVBQUEsQ0FBRzhELElBQUEsQ0FBSzRKLEtBQUEsQ0FBTXRLLFNBQVM7SUFDekRtVyxjQUFBLENBQWVuVyxTQUFBLElBQWFxVyxxQkFBQTtJQUM1QixPQUFPQSxxQkFBQTs7O1NDaFBLQyw2QkFBNkIxWixFQUFBLEVBQVM7RUFDcEQsT0FBTzJKLG9CQUFBLENBQ0x3TixXQUFBLENBQVl2dEIsU0FBQSxFQUNaLFNBQVMrdkIsYUFFUDFaLElBQUEsRUFDQUMsVUFBQSxFQUNBMFosUUFBQSxFQUNBNUIsMkJBQUEsRUFDQXRhLE1BQUEsRUFBb0I7SUFFcEIsS0FBS3NDLEVBQUEsR0FBS0EsRUFBQTtJQUNWLEtBQUtDLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUtDLFVBQUEsR0FBYUEsVUFBQTtJQUNsQixLQUFLcUQsTUFBQSxHQUFTcVcsUUFBQTtJQUNkLEtBQUs1QiwyQkFBQSxHQUE4QkEsMkJBQUE7SUFDbkMsS0FBS3ZVLFFBQUEsR0FBVztJQUNoQixLQUFLMlUsRUFBQSxHQUFLelAsTUFBQSxDQUFPLE1BQU0sWUFBWSxTQUFTLE9BQU87SUFDbkQsS0FBS2pMLE1BQUEsR0FBU0EsTUFBQSxJQUFVO0lBQ3hCLEtBQUttYSxNQUFBLEdBQVM7SUFDZCxLQUFLUixTQUFBLEdBQVk7SUFDakIsS0FBS0csYUFBQSxHQUFnQjtJQUNyQixLQUFLYyxRQUFBLEdBQVc7SUFDaEIsS0FBS0osT0FBQSxHQUFVO0lBQ2YsS0FBS2EsV0FBQSxHQUFjO0lBQ25CLEtBQUtDLGFBQUEsR0FBZ0I7SUFDckIsS0FBS0ksVUFBQSxHQUFhO0lBQ2xCLEtBQUtoWSxXQUFBLEdBQWMsSUFBSXBLLFlBQUEsQ0FBUyxDQUFDekMsT0FBQSxFQUFTOEQsTUFBQSxLQUFNO01BQzVDLEtBQUtpZ0IsUUFBQSxHQUFXL2pCLE9BQUE7TUFDaEIsS0FBSzJqQixPQUFBLEdBQVU3ZixNQUFBO0tBQ2xCO0lBRUQsS0FBSytJLFdBQUEsQ0FBWXZOLElBQUEsQ0FDYjtNQUNJLEtBQUtna0IsTUFBQSxHQUFTO01BQ2QsS0FBS08sRUFBQSxDQUFHeUIsUUFBQSxDQUFTNVYsSUFBQSxDQUFJO09BRXpCclUsQ0FBQSxJQUFDO01BQ0csSUFBSWtxQixTQUFBLEdBQVksS0FBS2pDLE1BQUE7TUFDckIsS0FBS0EsTUFBQSxHQUFTO01BQ2QsS0FBS08sRUFBQSxDQUFHM0ssS0FBQSxDQUFNeEosSUFBQSxDQUFLclUsQ0FBQztNQUNwQixLQUFLOE4sTUFBQSxHQUNELEtBQUtBLE1BQUEsQ0FBT3dhLE9BQUEsQ0FBUXRvQixDQUFDLElBQ3JCa3FCLFNBQUEsSUFBYSxLQUFLclcsUUFBQSxJQUFZLEtBQUtBLFFBQUEsQ0FBUzZWLEtBQUEsQ0FBSztNQUNyRCxPQUFPcGIsU0FBQSxDQUFVdE8sQ0FBQztLQUNyQjtHQUVOO0FBQ0w7U0NyRWdCbXFCLGdCQUNkL3BCLElBQUEsRUFDQWxFLE9BQUEsRUFDQXlmLE1BQUEsRUFDQTVGLEtBQUEsRUFDQW9CLElBQUEsRUFDQXJDLFFBQUEsRUFDQXFHLFNBQUEsRUFBa0I7RUFFbEIsT0FBTztJQUNML2EsSUFBQTtJQUNBbEUsT0FBQTtJQUNBeWYsTUFBQTtJQUNBNUYsS0FBQTtJQUNBb0IsSUFBQTtJQUNBckMsUUFBQTtJQUNBc1YsR0FBQSxHQUFNek8sTUFBQSxJQUFVLENBQUNSLFNBQUEsR0FBWSxNQUFNLE9BQU9wRixLQUFBLEdBQVEsTUFBTSxPQUFPb0IsSUFBQSxHQUFPLE9BQU8sTUFBTWtULGVBQUEsQ0FBZ0JudUIsT0FBTzs7QUFFOUc7U0FFZ0JtdUIsZ0JBQWlCbnVCLE9BQUEsRUFBMkI7RUFDMUQsT0FBTyxPQUFPQSxPQUFBLEtBQVksV0FDeEJBLE9BQUEsR0FDQUEsT0FBQSxHQUFXLE1BQU0sR0FBR3FFLElBQUEsQ0FBS3pILElBQUEsQ0FBS29ELE9BQUEsRUFBUyxHQUFHLElBQUksTUFBTztBQUN6RDtTQ3JCZ0JvdUIsa0JBQ2RscUIsSUFBQSxFQUNBd1UsT0FBQSxFQUNBRCxPQUFBLEVBQW9CO0VBRXBCLE9BQU87SUFDTHZVLElBQUE7SUFDQXdVLE9BQUE7SUFDQUQsT0FBQTtJQUNBaUMsV0FBQSxFQUFhO0lBQ2J2QixTQUFBLEVBQVdoYSxhQUFBLENBQWNzWixPQUFBLEVBQVNtQixLQUFBLElBQVMsQ0FBQ0EsS0FBQSxDQUFNMVYsSUFBQSxFQUFNMFYsS0FBSyxDQUFDOztBQUVsRTtTQ2ZnQnlVLG9CQUFvQmphLFVBQUEsRUFBb0I7RUFDdEQsT0FBT0EsVUFBQSxDQUFXalUsTUFBQSxLQUFXLElBQUlpVSxVQUFBLENBQVcsS0FBS0EsVUFBQTtBQUNuRDtBQU9PLElBQUlrYSxTQUFBLEdBQWFDLFdBQUEsSUFBK0I7RUFDckQsSUFBSTtJQUNGQSxXQUFBLENBQVlDLElBQUEsQ0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNyQkYsU0FBQSxHQUFZQSxDQUFBLEtBQU0sQ0FBQyxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxFQUFFO1dBQ0h4cUIsQ0FBQSxFQUFQO0lBQ0F3cUIsU0FBQSxHQUFZQSxDQUFBLEtBQU05WSxTQUFBO0lBQ2xCLE9BQU9BLFNBQUE7O0FBRVg7U0NsQmdCaVosZ0JBQWlCenVCLE9BQUEsRUFBaUM7RUFDaEUsSUFBSUEsT0FBQSxJQUFXLE1BQU07SUFDbkIsT0FBTyxNQUFNO2FBQ0osT0FBT0EsT0FBQSxLQUFZLFVBQVU7SUFDdEMsT0FBTzB1Qix5QkFBQSxDQUEwQjF1QixPQUFPO1NBQ25DO0lBQ0wsT0FBTzlELEdBQUEsSUFBTzZELFlBQUEsQ0FBYTdELEdBQUEsRUFBSzhELE9BQU87O0FBRTNDO1NBRWdCMHVCLDBCQUEwQjF1QixPQUFBLEVBQWU7RUFDdkQsTUFBTTBCLEtBQUEsR0FBUTFCLE9BQUEsQ0FBUTBCLEtBQUEsQ0FBTSxHQUFHO0VBQy9CLElBQUlBLEtBQUEsQ0FBTXZCLE1BQUEsS0FBVyxHQUFHO0lBQ3RCLE9BQU9qRSxHQUFBLElBQU9BLEdBQUEsQ0FBSThELE9BQUE7U0FDYjtJQUNMLE9BQU85RCxHQUFBLElBQU82RCxZQUFBLENBQWE3RCxHQUFBLEVBQUs4RCxPQUFPOztBQUUzQztTQ0NnQjJ1QixTQUFZNXJCLFNBQUEsRUFBK0M7RUFDekUsT0FBTyxHQUFHMUUsS0FBQSxDQUFNekIsSUFBQSxDQUFLbUcsU0FBUztBQUNoQztBQU9BLElBQUk2ckIsV0FBQSxHQUFjO1NBRUZDLGdCQUFnQjd1QixPQUFBLEVBQWlDO0VBQy9ELE9BQU9BLE9BQUEsSUFBVyxPQUNoQixRQUNBLE9BQU9BLE9BQUEsS0FBWSxXQUNqQkEsT0FBQSxHQUNBLElBQUlBLE9BQUEsQ0FBUXFFLElBQUEsQ0FBSyxHQUFHO0FBQzFCO1NBRWdCeXFCLGFBQ2Q1YSxFQUFBLEVBQ0FxYSxXQUFBLEVBQ0FRLFFBQUEsRUFBd0I7RUFFeEIsU0FBU0MsY0FBY0MsR0FBQSxFQUFpQmxhLEtBQUEsRUFBcUI7SUFDM0QsTUFBTW1hLE9BQUEsR0FBU1AsUUFBQSxDQUFTTSxHQUFBLENBQUdFLGdCQUFnQjtJQUMzQyxPQUFPO01BQ0wxWCxNQUFBLEVBQVE7UUFDTnZULElBQUEsRUFBTStxQixHQUFBLENBQUcvcUIsSUFBQTtRQUNUa3JCLE1BQUEsRUFBUUYsT0FBQSxDQUFPaHVCLEdBQUEsQ0FBSTBnQixLQUFBLElBQVM3TSxLQUFBLENBQU1xWSxXQUFBLENBQVl4TCxLQUFLLENBQUMsRUFBRTFnQixHQUFBLENBQUlpc0IsS0FBQSxJQUFLO1VBQzdELE1BQU07WUFBQ250QixPQUFBO1lBQVNxdkI7VUFBYSxJQUFJbEMsS0FBQTtVQUNqQyxNQUFNdlUsUUFBQSxHQUFXOWMsT0FBQSxDQUFRa0UsT0FBTztVQUNoQyxNQUFNa2tCLFFBQUEsR0FBV2xrQixPQUFBLElBQVc7VUFDNUIsTUFBTXN2QixjQUFBLEdBQXdEO1VBQzlELE1BQU0vdkIsTUFBQSxHQUFTO1lBQ2IyRSxJQUFBLEVBQU1pcEIsS0FBQSxDQUFNanBCLElBQUE7WUFDWmdiLFVBQUEsRUFBWTtjQUNWaGIsSUFBQSxFQUFNO2NBQ05xckIsWUFBQSxFQUFjO2NBQ2RyTCxRQUFBO2NBQ0F0TCxRQUFBO2NBQ0E1WSxPQUFBO2NBQ0FxdkIsYUFBQTtjQUNBNVAsTUFBQSxFQUFRO2NBQ1IwRSxVQUFBLEVBQVlzSyxlQUFBLENBQWdCenVCLE9BQU87O1lBRXJDeVksT0FBQSxFQUFTa1csUUFBQSxDQUFTeEIsS0FBQSxDQUFNcUMsVUFBVSxFQUFFdHVCLEdBQUEsQ0FBSWdpQixTQUFBLElBQWFpSyxLQUFBLENBQU12VCxLQUFBLENBQU1zSixTQUFTLENBQUMsRUFDeEVoaUIsR0FBQSxDQUFJMFksS0FBQSxJQUFLO2NBQ1IsTUFBTTtnQkFBQzFWLElBQUE7Z0JBQU11YixNQUFBO2dCQUFRZ1EsVUFBQTtnQkFBWXp2QixPQUFBLEVBQUEwdkI7Y0FBTyxJQUFJOVYsS0FBQTtjQUM1QyxNQUFNK1YsU0FBQSxHQUFXN3pCLE9BQUEsQ0FBUTR6QixRQUFPO2NBQ2hDLE1BQU1FLE9BQUEsR0FBc0I7Z0JBQzFCMXJCLElBQUE7Z0JBQ0EwVSxRQUFBLEVBQUErVyxTQUFBO2dCQUNBM3ZCLE9BQUEsRUFBQTB2QixRQUFBO2dCQUNBalEsTUFBQTtnQkFDQWdRLFVBQUE7Z0JBQ0F0TCxVQUFBLEVBQVlzSyxlQUFBLENBQWdCaUIsUUFBTzs7Y0FFckNKLGNBQUEsQ0FBZVQsZUFBQSxDQUFnQmEsUUFBTyxLQUFLRSxPQUFBO2NBQzNDLE9BQU9BLE9BQUE7YUFDUjtZQUNIelEsaUJBQUEsRUFBb0J1USxRQUFBLElBQXNDSixjQUFBLENBQWVULGVBQUEsQ0FBZ0JhLFFBQU87O1VBRWxHSixjQUFBLENBQWUsU0FBUy92QixNQUFBLENBQU8yZixVQUFBO1VBQy9CLElBQUlsZixPQUFBLElBQVcsTUFBTTtZQUNuQnN2QixjQUFBLENBQWVULGVBQUEsQ0FBZ0I3dUIsT0FBTyxLQUFLVCxNQUFBLENBQU8yZixVQUFBOztVQUVwRCxPQUFPM2YsTUFBQTtTQUNSOztNQUVIc3dCLFNBQUEsRUFBV1gsT0FBQSxDQUFPL3VCLE1BQUEsR0FBUyxLQUFNLFlBQVk0VSxLQUFBLENBQU1xWSxXQUFBLENBQVk4QixPQUFBLENBQU8sRUFBRSxLQUN0RSxFQUFFLE9BQU9sWixTQUFBLEtBQWMsZUFBZSxTQUFTelMsSUFBQSxDQUFLeVMsU0FBQSxDQUFVQyxTQUFTLEtBQ3ZFLENBQUMsb0JBQW9CMVMsSUFBQSxDQUFLeVMsU0FBQSxDQUFVQyxTQUFTLEtBQzdDLEdBQUczVSxNQUFBLENBQU8wVSxTQUFBLENBQVVDLFNBQUEsQ0FBVTZRLEtBQUEsQ0FBTSxlQUFlLENBQUMsRUFBRSxLQUFLOzs7RUFJakUsU0FBU2dKLGdCQUFpQmhVLEtBQUEsRUFBcUI7SUFDN0MsSUFBSUEsS0FBQSxDQUFNbEYsSUFBQSxLQUFJLEdBQTBCLE9BQU87SUFDL0MsSUFBSWtGLEtBQUEsQ0FBTWxGLElBQUEsS0FBSSxHQUE0QixNQUFNLElBQUk5WCxLQUFBLENBQU0sMENBQTBDO0lBQ3BHLE1BQU07TUFBQytYLEtBQUE7TUFBT0UsS0FBQTtNQUFPRCxTQUFBO01BQVdFO0lBQVMsSUFBSThFLEtBQUE7SUFDN0MsTUFBTWlVLFFBQUEsR0FBV2xaLEtBQUEsS0FBVSxTQUN6QkUsS0FBQSxLQUFVLFNBQ1IsT0FDQXdYLFdBQUEsQ0FBWXlCLFVBQUEsQ0FBV2paLEtBQUEsRUFBTyxDQUFDLENBQUNDLFNBQVMsSUFDM0NELEtBQUEsS0FBVSxTQUNSd1gsV0FBQSxDQUFZMEIsVUFBQSxDQUFXcFosS0FBQSxFQUFPLENBQUMsQ0FBQ0MsU0FBUyxJQUN6Q3lYLFdBQUEsQ0FBWTJCLEtBQUEsQ0FBTXJaLEtBQUEsRUFBT0UsS0FBQSxFQUFPLENBQUMsQ0FBQ0QsU0FBQSxFQUFXLENBQUMsQ0FBQ0UsU0FBUztJQUM1RCxPQUFPK1ksUUFBQTs7RUFHVCxTQUFTSSxrQkFBa0JuUyxXQUFBLEVBQThCO0lBQ3ZELE1BQU0xRyxTQUFBLEdBQVkwRyxXQUFBLENBQVk5WixJQUFBO0lBRTlCLFNBQVNpWCxPQUFRO01BQUNwRyxLQUFBO01BQU82QixJQUFBLEVBQUE5SixLQUFBO01BQU1sUixJQUFBLEVBQUFvZ0IsS0FBQTtNQUFNak8sTUFBQTtNQUFRK047SUFBSyxHQUFDO01BQ2pELE9BQU8sSUFBSTlmLE9BQUEsQ0FBOEIsQ0FBQ3lNLE9BQUEsRUFBUzhELE1BQUEsS0FBTTtRQUN2RDlELE9BQUEsR0FBVXFJLElBQUEsQ0FBS3JJLE9BQU87UUFDdEIsTUFBTTBrQixLQUFBLEdBQVNwWSxLQUFBLENBQXlCcVksV0FBQSxDQUFZOVYsU0FBUztRQUM3RCxNQUFNNE0sUUFBQSxHQUFXaUosS0FBQSxDQUFNbnRCLE9BQUEsSUFBVztRQUNsQyxNQUFNb3dCLFVBQUEsR0FBYXRqQixLQUFBLEtBQVMsU0FBU0EsS0FBQSxLQUFTO1FBQzlDLElBQUksQ0FBQ3NqQixVQUFBLElBQWN0akIsS0FBQSxLQUFTLFlBQVlBLEtBQUEsS0FBUyxlQUMvQyxNQUFNLElBQUloTyxLQUFBLENBQU8sNkJBQTZCZ08sS0FBSTtRQUVwRCxNQUFNO1VBQUMzTTtRQUFNLElBQUk2YixLQUFBLElBQVFqTyxNQUFBLElBQVU7VUFBQzVOLE1BQUEsRUFBUTtRQUFDO1FBQzdDLElBQUk2YixLQUFBLElBQVFqTyxNQUFBLElBQVVpTyxLQUFBLENBQUs3YixNQUFBLEtBQVc0TixNQUFBLENBQU81TixNQUFBLEVBQVE7VUFDbkQsTUFBTSxJQUFJckIsS0FBQSxDQUFNLCtEQUErRDs7UUFFakYsSUFBSXFCLE1BQUEsS0FBVyxHQUViLE9BQU9zSSxPQUFBLENBQVE7VUFBQzJTLFdBQUEsRUFBYTtVQUFHaFcsUUFBQSxFQUFVO1VBQUkwSixPQUFBLEVBQVM7VUFBSXVNLFVBQUEsRUFBWTtRQUFTLENBQUM7UUFFbkYsSUFBSWdWLEdBQUE7UUFDSixNQUFNQyxJQUFBLEdBQXFCO1FBRTNCLE1BQU1sckIsUUFBQSxHQUErQztRQUNyRCxJQUFJZ1csV0FBQSxHQUFjO1FBQ2xCLE1BQU1tVixZQUFBLEdBQ0puZCxLQUFBLElBQUs7VUFDSCxFQUFFZ0ksV0FBQTtVQUNGMlAsY0FBQSxDQUFlM1gsS0FBSzs7UUFHeEIsSUFBSXRHLEtBQUEsS0FBUyxlQUFlO1VBRTFCLElBQUlnUCxLQUFBLENBQU1sRixJQUFBLEtBQUksR0FDWixPQUFPbk8sT0FBQSxDQUFRO1lBQUMyUyxXQUFBO1lBQWFoVyxRQUFBO1lBQVUwSixPQUFBLEVBQVM7WUFBSXVNLFVBQUEsRUFBWTtVQUFTLENBQUM7VUFDNUUsSUFBSVMsS0FBQSxDQUFNbEYsSUFBQSxLQUFJLEdBQ1owWixJQUFBLENBQUtqd0IsSUFBQSxDQUFLZ3dCLEdBQUEsR0FBTWxELEtBQUEsQ0FBTXRSLEtBQUEsQ0FBSyxDQUFFLE9BRTdCeVUsSUFBQSxDQUFLandCLElBQUEsQ0FBS2d3QixHQUFBLEdBQU1sRCxLQUFBLENBQU12UixNQUFBLENBQU9rVSxlQUFBLENBQWdCaFUsS0FBSyxDQUFDLENBQUM7ZUFDakQ7VUFFTCxNQUFNLENBQUMwVSxLQUFBLEVBQU83UyxLQUFLLElBQUl5UyxVQUFBLEdBQ3JCbE0sUUFBQSxHQUNFLENBQUNuVyxNQUFBLEVBQVFpTyxLQUFJLElBQ2IsQ0FBQ2pPLE1BQUEsRUFBUSxJQUFJLElBQ2YsQ0FBQ2lPLEtBQUEsRUFBTSxJQUFJO1VBRWIsSUFBSW9VLFVBQUEsRUFBWTtZQUNkLFNBQVMzd0IsQ0FBQSxHQUFFLEdBQUdBLENBQUEsR0FBRVUsTUFBQSxFQUFRLEVBQUVWLENBQUEsRUFBRztjQUMzQjZ3QixJQUFBLENBQUtqd0IsSUFBQSxDQUFLZ3dCLEdBQUEsR0FBTzFTLEtBQUEsSUFBU0EsS0FBQSxDQUFNbGUsQ0FBQSxNQUFPLFNBQ3JDMHRCLEtBQUEsQ0FBTXJnQixLQUFBLEVBQU0wakIsS0FBQSxDQUFNL3dCLENBQUEsR0FBSWtlLEtBQUEsQ0FBTWxlLENBQUEsQ0FBRSxJQUM5QjB0QixLQUFBLENBQU1yZ0IsS0FBQSxFQUFNMGpCLEtBQUEsQ0FBTS93QixDQUFBLENBQUUsQ0FBZ0I7Y0FDdEM0d0IsR0FBQSxDQUFJendCLE9BQUEsR0FBVTJ3QixZQUFBOztpQkFFWDtZQUNMLFNBQVM5d0IsQ0FBQSxHQUFFLEdBQUdBLENBQUEsR0FBRVUsTUFBQSxFQUFRLEVBQUVWLENBQUEsRUFBRztjQUMzQjZ3QixJQUFBLENBQUtqd0IsSUFBQSxDQUFLZ3dCLEdBQUEsR0FBTWxELEtBQUEsQ0FBTXJnQixLQUFBLEVBQU0wakIsS0FBQSxDQUFNL3dCLENBQUEsQ0FBRSxDQUFlO2NBQ25ENHdCLEdBQUEsQ0FBSXp3QixPQUFBLEdBQVUyd0IsWUFBQTs7OztRQUlwQixNQUFNcHRCLElBQUEsR0FBT2lRLEtBQUEsSUFBSztVQUNoQixNQUFNaUksVUFBQSxHQUFhakksS0FBQSxDQUFNNFgsTUFBQSxDQUFPenJCLE1BQUE7VUFDaEMrd0IsSUFBQSxDQUFLbDBCLE9BQUEsQ0FBUSxDQUFDcTBCLElBQUEsRUFBS2h4QixDQUFBLEtBQU1neEIsSUFBQSxDQUFJOU8sS0FBQSxJQUFTLFNBQVN2YyxRQUFBLENBQVMzRixDQUFBLElBQUtneEIsSUFBQSxDQUFJOU8sS0FBQSxDQUFNO1VBQ3ZFbFosT0FBQSxDQUFRO1lBQ04yUyxXQUFBO1lBQ0FoVyxRQUFBO1lBQ0EwSixPQUFBLEVBQVNoQyxLQUFBLEtBQVMsV0FBV2tQLEtBQUEsR0FBT3NVLElBQUEsQ0FBS3B2QixHQUFBLENBQUl1dkIsSUFBQSxJQUFPQSxJQUFBLENBQUlseEIsTUFBTTtZQUM5RDhiO1dBQ0Q7O1FBR0hnVixHQUFBLENBQUl6d0IsT0FBQSxHQUFVd1QsS0FBQSxJQUFLO1VBQ2pCbWQsWUFBQSxDQUFhbmQsS0FBSztVQUNsQmpRLElBQUEsQ0FBS2lRLEtBQUs7O1FBR1ppZCxHQUFBLENBQUk3b0IsU0FBQSxHQUFZckUsSUFBQTtPQUNqQjs7SUFHSCxTQUFTdXRCLFlBQVk7TUFBQzNiLEtBQUE7TUFBT2hILE1BQUE7TUFBUTJSLEtBQUEsRUFBQWlSLE1BQUE7TUFBT25XLE9BQUE7TUFBU2lGO0lBQU0sR0FBMEI7TUFFbkYsT0FBTyxJQUFJempCLE9BQUEsQ0FBUSxDQUFDeU0sT0FBQSxFQUFTOEQsTUFBQSxLQUFNO1FBQ2pDOUQsT0FBQSxHQUFVcUksSUFBQSxDQUFLckksT0FBTztRQUN0QixNQUFNO1VBQUNtUixLQUFBO1VBQU9rQztRQUFLLElBQUk2VSxNQUFBO1FBQ3ZCLE1BQU14RCxLQUFBLEdBQVNwWSxLQUFBLENBQXlCcVksV0FBQSxDQUFZOVYsU0FBUztRQUU3RCxNQUFNc1osTUFBQSxHQUFTaFgsS0FBQSxDQUFNMlYsWUFBQSxHQUNuQnBDLEtBQUEsR0FDQUEsS0FBQSxDQUFNdlQsS0FBQSxDQUFNQSxLQUFBLENBQU0xVixJQUFJO1FBRXhCLE1BQU1rakIsU0FBQSxHQUFZNU0sT0FBQSxHQUNoQmlGLE1BQUEsR0FDRSxlQUNBLFNBQ0ZBLE1BQUEsR0FDRSxlQUNBO1FBRUosTUFBTTRRLEdBQUEsR0FBTXRpQixNQUFBLElBQVUsRUFBRSxtQkFBbUI2aUIsTUFBQSxJQUN6Q0EsTUFBQSxDQUFPdlIsVUFBQSxDQUFXeVEsZUFBQSxDQUFnQmhVLEtBQUssR0FBR3NMLFNBQVMsSUFDbkR3SixNQUFBLENBQU9DLGFBQUEsQ0FBY2YsZUFBQSxDQUFnQmhVLEtBQUssR0FBR3NMLFNBQVM7UUFHeERpSixHQUFBLENBQUl6d0IsT0FBQSxHQUFVa3JCLGtCQUFBLENBQW1CdmUsTUFBTTtRQUN2QzhqQixHQUFBLENBQUk3b0IsU0FBQSxHQUFZc0osSUFBQSxDQUFLcWIsRUFBQSxJQUFFO1VBRXJCLE1BQU1uTSxNQUFBLEdBQVNxUSxHQUFBLENBQUk5d0IsTUFBQTtVQUNuQixJQUFJLENBQUN5Z0IsTUFBQSxFQUFRO1lBQ1h2WCxPQUFBLENBQVEsSUFBSTtZQUNaOztVQUVEdVgsTUFBQSxDQUFlOFEsS0FBQSxHQUFRLEVBQUVsQyxXQUFBO1VBQ3pCNU8sTUFBQSxDQUFlN2MsSUFBQSxHQUFPO1VBQ3ZCLE1BQU00dEIsZUFBQSxHQUFrQi9RLE1BQUEsQ0FBT1MsUUFBQSxDQUFTemlCLElBQUEsQ0FBS2dpQixNQUFNO1VBQ25ELElBQUlnUix5QkFBQSxHQUE0QmhSLE1BQUEsQ0FBT2lSLGtCQUFBO1VBQ3ZDLElBQUlELHlCQUFBLEVBQTJCQSx5QkFBQSxHQUE0QkEseUJBQUEsQ0FBMEJoekIsSUFBQSxDQUFLZ2lCLE1BQU07VUFDaEcsTUFBTWtSLGNBQUEsR0FBaUJsUixNQUFBLENBQU9DLE9BQUEsQ0FBUWppQixJQUFBLENBQUtnaUIsTUFBTTtVQUNqRCxNQUFNbVIseUJBQUEsR0FBNEJBLENBQUE7WUFBSyxNQUFNLElBQUlyeUIsS0FBQSxDQUFNLG9CQUFvQjtVQUFFO1VBQzdFLE1BQU1zeUIsc0JBQUEsR0FBeUJBLENBQUE7WUFBSyxNQUFNLElBQUl0eUIsS0FBQSxDQUFNLG9CQUFvQjtVQUFFO1VBQ3pFa2hCLE1BQUEsQ0FBZWpMLEtBQUEsR0FBUUEsS0FBQTtVQUN4QmlMLE1BQUEsQ0FBT0UsSUFBQSxHQUFPRixNQUFBLENBQU9TLFFBQUEsR0FBV1QsTUFBQSxDQUFPaVIsa0JBQUEsR0FBcUJqUixNQUFBLENBQU9DLE9BQUEsR0FBVWtSLHlCQUFBO1VBQzdFblIsTUFBQSxDQUFPRyxJQUFBLEdBQU9yUCxJQUFBLENBQUt2RSxNQUFNO1VBQ3pCeVQsTUFBQSxDQUFPOWMsSUFBQSxHQUFPO1lBR1osSUFBSW11QixNQUFBLEdBQVM7WUFDYixPQUFPLEtBQUs5eUIsS0FBQSxDQUFNLE1BQU04eUIsTUFBQSxLQUFXLEtBQUs1USxRQUFBLENBQVEsSUFBSyxLQUFLUCxJQUFBLENBQUksQ0FBRSxFQUFFblksSUFBQSxDQUFLLE1BQU0sSUFBSTs7VUFFbkZpWSxNQUFBLENBQU96aEIsS0FBQSxHQUFTc0wsUUFBQSxJQUFRO1lBRXRCLE1BQU15bkIsZ0JBQUEsR0FBbUIsSUFBSXQxQixPQUFBLENBQWMsQ0FBQ3UxQixnQkFBQSxFQUFrQkMsZUFBQSxLQUFlO2NBQzNFRCxnQkFBQSxHQUFtQnpnQixJQUFBLENBQUt5Z0IsZ0JBQWdCO2NBQ3hDbEIsR0FBQSxDQUFJendCLE9BQUEsR0FBVWtyQixrQkFBQSxDQUFtQjBHLGVBQWU7Y0FDaER4UixNQUFBLENBQU9HLElBQUEsR0FBT3FSLGVBQUE7Y0FDZHhSLE1BQUEsQ0FBT0UsSUFBQSxHQUFPMWlCLEtBQUEsSUFBSztnQkFFakJ3aUIsTUFBQSxDQUFPRSxJQUFBLEdBQU9GLE1BQUEsQ0FBT1MsUUFBQSxHQUFXVCxNQUFBLENBQU9pUixrQkFBQSxHQUFxQmpSLE1BQUEsQ0FBT0MsT0FBQSxHQUFVbVIsc0JBQUE7Z0JBQzdFRyxnQkFBQSxDQUFpQi96QixLQUFLOzthQUV6QjtZQUVELE1BQU1pMEIsZUFBQSxHQUFrQkEsQ0FBQTtjQUN0QixJQUFJcEIsR0FBQSxDQUFJOXdCLE1BQUEsRUFBUTtnQkFFZCxJQUFJO2tCQUNGc0ssUUFBQSxDQUFRO3lCQUNEbUQsR0FBQSxFQUFQO2tCQUNBZ1QsTUFBQSxDQUFPRyxJQUFBLENBQUtuVCxHQUFHOztxQkFFWjtnQkFDSmdULE1BQUEsQ0FBZTdjLElBQUEsR0FBTztnQkFDdkI2YyxNQUFBLENBQU96aEIsS0FBQSxHQUFRO2tCQUFLLE1BQU0sSUFBSU8sS0FBQSxDQUFNLDBCQUEwQjtnQkFBRTtnQkFDaEVraEIsTUFBQSxDQUFPRSxJQUFBLENBQUk7OztZQUdmbVEsR0FBQSxDQUFJN29CLFNBQUEsR0FBWXNKLElBQUEsQ0FBSzRnQixHQUFBLElBQUU7Y0FJckJyQixHQUFBLENBQUk3b0IsU0FBQSxHQUFZaXFCLGVBQUE7Y0FDaEJBLGVBQUEsQ0FBZTthQUNoQjtZQUNEelIsTUFBQSxDQUFPUyxRQUFBLEdBQVdzUSxlQUFBO1lBQ2xCL1EsTUFBQSxDQUFPaVIsa0JBQUEsR0FBcUJELHlCQUFBO1lBQzVCaFIsTUFBQSxDQUFPQyxPQUFBLEdBQVVpUixjQUFBO1lBQ2pCTyxlQUFBLENBQWU7WUFDZixPQUFPSCxnQkFBQTs7VUFFVDdvQixPQUFBLENBQVF1WCxNQUFNO1dBQ2J6VCxNQUFNO09BQ1Y7O0lBR0gsU0FBU21ULE1BQU9pUyxVQUFBLEVBQWtCO01BQ2hDLE9BQVFDLE9BQUEsSUFBMkI7UUFDakMsT0FBTyxJQUFJNTFCLE9BQUEsQ0FBNkIsQ0FBQ3lNLE9BQUEsRUFBUzhELE1BQUEsS0FBTTtVQUN0RDlELE9BQUEsR0FBVXFJLElBQUEsQ0FBS3JJLE9BQU87VUFDdEIsTUFBTTtZQUFDc00sS0FBQTtZQUFPaEgsTUFBQTtZQUFRcUMsS0FBQTtZQUFPc1AsS0FBQSxFQUFBaVI7VUFBSyxJQUFJaUIsT0FBQTtVQUN0QyxNQUFNQyxlQUFBLEdBQWtCemhCLEtBQUEsS0FBVTVDLFFBQUEsR0FBVyxTQUFZNEMsS0FBQTtVQUN6RCxNQUFNO1lBQUN3SixLQUFBO1lBQU9rQztVQUFLLElBQUk2VSxNQUFBO1VBQ3ZCLE1BQU14RCxLQUFBLEdBQVNwWSxLQUFBLENBQXlCcVksV0FBQSxDQUFZOVYsU0FBUztVQUM3RCxNQUFNc1osTUFBQSxHQUFTaFgsS0FBQSxDQUFNMlYsWUFBQSxHQUFlcEMsS0FBQSxHQUFRQSxLQUFBLENBQU12VCxLQUFBLENBQU1BLEtBQUEsQ0FBTTFWLElBQUk7VUFDbEUsTUFBTTR0QixXQUFBLEdBQWNoQyxlQUFBLENBQWdCaFUsS0FBSztVQUN6QyxJQUFJMUwsS0FBQSxLQUFVLEdBQUcsT0FBTzNILE9BQUEsQ0FBUTtZQUFDbEosTUFBQSxFQUFRO1VBQUUsQ0FBQztVQUM1QyxJQUFJb3lCLFVBQUEsRUFBVztZQUNiLE1BQU10QixHQUFBLEdBQU10aUIsTUFBQSxHQUNQNmlCLE1BQUEsQ0FBZW1CLE1BQUEsQ0FBT0QsV0FBQSxFQUFhRCxlQUFlLElBQ2xEakIsTUFBQSxDQUFlb0IsVUFBQSxDQUFXRixXQUFBLEVBQWFELGVBQWU7WUFDM0R4QixHQUFBLENBQUk3b0IsU0FBQSxHQUFZNEwsS0FBQSxJQUFTM0ssT0FBQSxDQUFRO2NBQUNsSixNQUFBLEVBQVE2VCxLQUFBLENBQU00WCxNQUFBLENBQU96ckI7WUFBTSxDQUFDO1lBQzlEOHdCLEdBQUEsQ0FBSXp3QixPQUFBLEdBQVVrckIsa0JBQUEsQ0FBbUJ2ZSxNQUFNO2lCQUNsQztZQUNMLElBQUl5TixLQUFBLEdBQVE7WUFDWixNQUFNcVcsR0FBQSxHQUFNdGlCLE1BQUEsSUFBVSxFQUFFLG1CQUFtQjZpQixNQUFBLElBQ3pDQSxNQUFBLENBQU92UixVQUFBLENBQVd5UyxXQUFXLElBQzdCbEIsTUFBQSxDQUFPQyxhQUFBLENBQWNpQixXQUFXO1lBQ2xDLE1BQU12eUIsTUFBQSxHQUFTO1lBQ2Y4d0IsR0FBQSxDQUFJN29CLFNBQUEsR0FBWTRMLEtBQUEsSUFBSztjQUNuQixNQUFNNE0sTUFBQSxHQUFTcVEsR0FBQSxDQUFJOXdCLE1BQUE7Y0FDbkIsSUFBSSxDQUFDeWdCLE1BQUEsRUFBUSxPQUFPdlgsT0FBQSxDQUFRO2dCQUFDbEo7Y0FBTSxDQUFDO2NBQ3BDQSxNQUFBLENBQU9jLElBQUEsQ0FBSzBOLE1BQUEsR0FBU2lTLE1BQUEsQ0FBT3hpQixLQUFBLEdBQVF3aUIsTUFBQSxDQUFPZCxVQUFVO2NBQ3JELElBQUksRUFBRWxGLEtBQUEsS0FBVTVKLEtBQUEsRUFBTyxPQUFPM0gsT0FBQSxDQUFRO2dCQUFDbEo7Y0FBTSxDQUFDO2NBQzlDeWdCLE1BQUEsQ0FBT1MsUUFBQSxDQUFROztZQUVqQjRQLEdBQUEsQ0FBSXp3QixPQUFBLEdBQVVrckIsa0JBQUEsQ0FBbUJ2ZSxNQUFNOztTQUUxQzs7O0lBSUwsT0FBTztNQUNMckksSUFBQSxFQUFNb1QsU0FBQTtNQUNORyxNQUFBLEVBQVF1RyxXQUFBO01BRVI3QyxNQUFBO01BRUFjLFFBQVM7UUFBQ2xILEtBQUE7UUFBT25aLElBQUEsRUFBQW9nQjtNQUFJLEdBQUM7UUFDcEIsT0FBTyxJQUFJaGdCLE9BQUEsQ0FBZSxDQUFDeU0sT0FBQSxFQUFTOEQsTUFBQSxLQUFNO1VBQ3hDOUQsT0FBQSxHQUFVcUksSUFBQSxDQUFLckksT0FBTztVQUN0QixNQUFNMGtCLEtBQUEsR0FBU3BZLEtBQUEsQ0FBeUJxWSxXQUFBLENBQVk5VixTQUFTO1VBQzdELE1BQU1uWCxNQUFBLEdBQVM2YixLQUFBLENBQUs3YixNQUFBO1VBQ3BCLE1BQU1aLE1BQUEsR0FBUyxJQUFJeEQsS0FBQSxDQUFNb0UsTUFBTTtVQUMvQixJQUFJOHhCLFFBQUEsR0FBVztVQUNmLElBQUlDLGFBQUEsR0FBZ0I7VUFFcEIsSUFBSTdCLEdBQUE7VUFFSixNQUFNOEIsY0FBQSxHQUFpQi9lLEtBQUEsSUFBSztZQUMxQixNQUFNcWQsSUFBQSxHQUFNcmQsS0FBQSxDQUFNNFgsTUFBQTtZQUNsQixLQUFLenJCLE1BQUEsQ0FBT2t4QixJQUFBLENBQUkyQixJQUFBLElBQVEzQixJQUFBLENBQUlseEIsTUFBQSxLQUFXLE1BQU07WUFDN0MsSUFBSSxFQUFFMnlCLGFBQUEsS0FBa0JELFFBQUEsRUFBVXhwQixPQUFBLENBQVFsSixNQUFNOztVQUVsRCxNQUFNZ3hCLFlBQUEsR0FBZXpGLGtCQUFBLENBQW1CdmUsTUFBTTtVQUU5QyxTQUFTOU0sQ0FBQSxHQUFFLEdBQUdBLENBQUEsR0FBRVUsTUFBQSxFQUFRLEVBQUVWLENBQUEsRUFBRztZQUMzQixNQUFNcEQsR0FBQSxHQUFNMmYsS0FBQSxDQUFLdmMsQ0FBQTtZQUNqQixJQUFJcEQsR0FBQSxJQUFPLE1BQU07Y0FDZmcwQixHQUFBLEdBQU1sRCxLQUFBLENBQU05dkIsR0FBQSxDQUFJMmUsS0FBQSxDQUFLdmMsQ0FBQSxDQUFFO2NBQ3ZCNHdCLEdBQUEsQ0FBSStCLElBQUEsR0FBTzN5QixDQUFBO2NBQ1g0d0IsR0FBQSxDQUFJN29CLFNBQUEsR0FBWTJxQixjQUFBO2NBQ2hCOUIsR0FBQSxDQUFJendCLE9BQUEsR0FBVTJ3QixZQUFBO2NBQ2QsRUFBRTBCLFFBQUE7OztVQUdOLElBQUlBLFFBQUEsS0FBYSxHQUFHeHBCLE9BQUEsQ0FBUWxKLE1BQU07U0FDbkM7O01BR0hsQyxJQUFLO1FBQUMwWCxLQUFBO1FBQU8xWTtNQUFHLEdBQUM7UUFDZixPQUFPLElBQUlMLE9BQUEsQ0FBYSxDQUFDeU0sT0FBQSxFQUFTOEQsTUFBQSxLQUFNO1VBQ3RDOUQsT0FBQSxHQUFVcUksSUFBQSxDQUFNckksT0FBTztVQUN2QixNQUFNMGtCLEtBQUEsR0FBU3BZLEtBQUEsQ0FBeUJxWSxXQUFBLENBQVk5VixTQUFTO1VBQzdELE1BQU0rWSxHQUFBLEdBQU1sRCxLQUFBLENBQU05dkIsR0FBQSxDQUFJaEIsR0FBRztVQUN6QmcwQixHQUFBLENBQUk3b0IsU0FBQSxHQUFZNEwsS0FBQSxJQUFTM0ssT0FBQSxDQUFTMkssS0FBQSxDQUFNNFgsTUFBQSxDQUFlenJCLE1BQU07VUFDN0Q4d0IsR0FBQSxDQUFJendCLE9BQUEsR0FBVWtyQixrQkFBQSxDQUFtQnZlLE1BQU07U0FDeEM7O01BR0htVCxLQUFBLEVBQU9BLEtBQUEsQ0FBTW1RLFNBQVM7TUFFdEJ4USxVQUFBLEVBQUFxUixXQUFBO01BRUExVyxNQUFPO1FBQUMwRixLQUFBLEVBQUFpUixNQUFBO1FBQU81YjtNQUFLLEdBQUM7UUFDbkIsTUFBTTtVQUFDNkUsS0FBQTtVQUFPa0M7UUFBSyxJQUFJNlUsTUFBQTtRQUN2QixPQUFPLElBQUkzMEIsT0FBQSxDQUFnQixDQUFDeU0sT0FBQSxFQUFTOEQsTUFBQSxLQUFNO1VBQ3pDLE1BQU00Z0IsS0FBQSxHQUFTcFksS0FBQSxDQUF5QnFZLFdBQUEsQ0FBWTlWLFNBQVM7VUFDN0QsTUFBTXNaLE1BQUEsR0FBU2hYLEtBQUEsQ0FBTTJWLFlBQUEsR0FBZXBDLEtBQUEsR0FBUUEsS0FBQSxDQUFNdlQsS0FBQSxDQUFNQSxLQUFBLENBQU0xVixJQUFJO1VBQ2xFLE1BQU00dEIsV0FBQSxHQUFjaEMsZUFBQSxDQUFnQmhVLEtBQUs7VUFDekMsTUFBTXVVLEdBQUEsR0FBTXlCLFdBQUEsR0FBY2xCLE1BQUEsQ0FBTzVXLEtBQUEsQ0FBTThYLFdBQVcsSUFBSWxCLE1BQUEsQ0FBTzVXLEtBQUEsQ0FBSztVQUNsRXFXLEdBQUEsQ0FBSTdvQixTQUFBLEdBQVlzSixJQUFBLENBQUtxYixFQUFBLElBQU0xakIsT0FBQSxDQUFTMGpCLEVBQUEsQ0FBR25CLE1BQUEsQ0FBc0J6ckIsTUFBTSxDQUFDO1VBQ3BFOHdCLEdBQUEsQ0FBSXp3QixPQUFBLEdBQVVrckIsa0JBQUEsQ0FBbUJ2ZSxNQUFNO1NBQ3hDOzs7O0VBS1AsTUFBTTtJQUFDa0wsTUFBQTtJQUFRb1k7RUFBUyxJQUFJYixhQUFBLENBQWM5YSxFQUFBLEVBQUk2YSxRQUFRO0VBQ3RELE1BQU1LLE1BQUEsR0FBUzNYLE1BQUEsQ0FBTzJYLE1BQUEsQ0FBT2x1QixHQUFBLENBQUk4YyxXQUFBLElBQWVtUyxpQkFBQSxDQUFrQm5TLFdBQVcsQ0FBQztFQUM5RSxNQUFNcVUsUUFBQSxHQUEwQztFQUNoRGpELE1BQUEsQ0FBT2h6QixPQUFBLENBQVF3bEIsS0FBQSxJQUFTeVEsUUFBQSxDQUFTelEsS0FBQSxDQUFNMWQsSUFBQSxJQUFRMGQsS0FBSztFQUNwRCxPQUFPO0lBQ0xoZSxLQUFBLEVBQU87SUFFUG9vQixXQUFBLEVBQWE5WCxFQUFBLENBQUc4WCxXQUFBLENBQVlodUIsSUFBQSxDQUFLa1csRUFBRTtJQUVuQzBOLE1BQU0xZCxJQUFBLEVBQVk7TUFDaEIsTUFBTTNFLE1BQUEsR0FBUzh5QixRQUFBLENBQVNudUIsSUFBQTtNQUN4QixJQUFJLENBQUMzRSxNQUFBLEVBQVEsTUFBTSxJQUFJVCxLQUFBLENBQU0sVUFBVW9GLElBQUEsYUFBaUI7TUFDeEQsT0FBT211QixRQUFBLENBQVNudUIsSUFBQTs7SUFHbEJvdUIsT0FBQSxFQUFTLENBQUE5a0IsUUFBQTtJQUVUK2tCLE9BQUEsRUFBU2pFLFNBQUEsQ0FBVUMsV0FBVztJQUU5QjlXOztBQUdKO0FDblpBLFNBQVMrYSxzQkFDUEMsU0FBQSxFQUNBQyxXQUFBLEVBQTBDO0VBQzFDLE9BQU9BLFdBQUEsQ0FBWXB6QixNQUFBLENBQU8sQ0FBQ3F6QixJQUFBLEVBQU07SUFBQzUwQjtFQUFNLE9BQU87SUFBQyxHQUFHNDBCLElBQUE7SUFBTSxHQUFHNTBCLE1BQUEsQ0FBTzQwQixJQUFJO0VBQUMsSUFBSUYsU0FBUztBQUN2RjtBQUVBLFNBQVNHLHVCQUNQRixXQUFBLEVBQ0FyZSxLQUFBLEVBQ0E7RUFBQ3dXLFdBQUE7RUFBYXZSLFNBQUEsRUFBQXFSO0FBQVMsR0FDdkJvRSxRQUFBLEVBQXdCO0VBRXhCLE1BQU04RCxNQUFBLEdBQVNMLHFCQUFBLENBQ2IxRCxZQUFBLENBQWF6YSxLQUFBLEVBQU93VyxXQUFBLEVBQWFrRSxRQUFRLEdBQ3pDMkQsV0FBQSxDQUFZRyxNQUFNO0VBS3BCLE9BQU87SUFDTEE7O0FBRUo7U0FFZ0JDLHlCQUF5QjtFQUFDQyxNQUFBLEVBQVE3ZTtBQUFFLEdBQVU2YSxRQUFBLEVBQXdCO0VBQ3BGLE1BQU0xYSxLQUFBLEdBQVEwYSxRQUFBLENBQVM3YSxFQUFBO0VBQ3ZCLE1BQU05RyxNQUFBLEdBQVN3bEIsc0JBQUEsQ0FBdUIxZSxFQUFBLENBQUc4ZSxZQUFBLEVBQWMzZSxLQUFBLEVBQU9ILEVBQUEsQ0FBR21GLEtBQUEsRUFBTzBWLFFBQVE7RUFDaEY3YSxFQUFBLENBQUc4RCxJQUFBLEdBQU81SyxNQUFBLENBQU95bEIsTUFBQTtFQUNqQjNlLEVBQUEsQ0FBR2tiLE1BQUEsQ0FBT2h6QixPQUFBLENBQVF3bEIsS0FBQSxJQUFLO0lBQ3JCLE1BQU10SyxTQUFBLEdBQVlzSyxLQUFBLENBQU0xZCxJQUFBO0lBQ3hCLElBQUlnUSxFQUFBLENBQUc4RCxJQUFBLENBQUtQLE1BQUEsQ0FBTzJYLE1BQUEsQ0FBT3ZlLElBQUEsQ0FBS29pQixHQUFBLElBQU9BLEdBQUEsQ0FBSS91QixJQUFBLEtBQVNvVCxTQUFTLEdBQUc7TUFDN0RzSyxLQUFBLENBQU01SixJQUFBLEdBQU85RCxFQUFBLENBQUc4RCxJQUFBLENBQUs0SixLQUFBLENBQU10SyxTQUFTO01BQ3BDLElBQUlwRCxFQUFBLENBQUdvRCxTQUFBLGFBQXNCcEQsRUFBQSxDQUFHZ0QsS0FBQSxFQUFPO1FBQ25DaEQsRUFBQSxDQUFHb0QsU0FBQSxFQUFXVSxJQUFBLEdBQU80SixLQUFBLENBQU01SixJQUFBOzs7R0FHbEM7QUFDSDtTQzVCZ0JrYixjQUFjO0VBQUNILE1BQUEsRUFBUTdlO0FBQUUsR0FBVWlmLElBQUEsRUFBZ0JDLFVBQUEsRUFBc0J0RixRQUFBLEVBQWtCO0VBQ3pHc0YsVUFBQSxDQUFXaDNCLE9BQUEsQ0FBUWtiLFNBQUEsSUFBUztJQUMxQixNQUFNRyxNQUFBLEdBQVNxVyxRQUFBLENBQVN4VyxTQUFBO0lBQ3hCNmIsSUFBQSxDQUFLLzJCLE9BQUEsQ0FBUUYsR0FBQSxJQUFHO01BQ2QsTUFBTW0zQixRQUFBLEdBQVduMUIscUJBQUEsQ0FBc0JoQyxHQUFBLEVBQUtvYixTQUFTO01BQ3JELElBQUksQ0FBQytiLFFBQUEsSUFBYSxXQUFXQSxRQUFBLElBQVlBLFFBQUEsQ0FBUzcxQixLQUFBLEtBQVUsUUFBWTtRQUV0RSxJQUFJdEIsR0FBQSxLQUFRZ1ksRUFBQSxDQUFHbVgsV0FBQSxDQUFZdnRCLFNBQUEsSUFBYTVCLEdBQUEsWUFBZWdZLEVBQUEsQ0FBR21YLFdBQUEsRUFBYTtVQUdyRXB1QixPQUFBLENBQVFmLEdBQUEsRUFBS29iLFNBQUEsRUFBVztZQUN0QmphLElBQUEsRUFBRztjQUFzQixPQUFPLEtBQUt1a0IsS0FBQSxDQUFNdEssU0FBUztZQUFFO1lBQ3REaGEsSUFBSUUsS0FBQSxFQUFVO2NBR1pOLGNBQUEsQ0FBZSxNQUFNb2EsU0FBQSxFQUFXO2dCQUFDOVosS0FBQTtnQkFBT0MsUUFBQSxFQUFVO2dCQUFNRixZQUFBLEVBQWM7Z0JBQU0rMUIsVUFBQSxFQUFZO2NBQUksQ0FBQzs7V0FFaEc7ZUFDSTtVQUVMcDNCLEdBQUEsQ0FBSW9iLFNBQUEsSUFBYSxJQUFJcEQsRUFBQSxDQUFHZ0QsS0FBQSxDQUFNSSxTQUFBLEVBQVdHLE1BQU07OztLQUdwRDtHQUNGO0FBQ0g7U0FFZ0I4YixnQkFBZ0I7RUFBQ1IsTUFBQSxFQUFRN2U7QUFBRSxHQUFVaWYsSUFBQSxFQUFjO0VBQ2pFQSxJQUFBLENBQUsvMkIsT0FBQSxDQUFRRixHQUFBLElBQUc7SUFDZCxTQUFTRyxHQUFBLElBQU9ILEdBQUEsRUFBSztNQUNuQixJQUFJQSxHQUFBLENBQUlHLEdBQUEsYUFBZ0I2WCxFQUFBLENBQUdnRCxLQUFBLEVBQU8sT0FBT2hiLEdBQUEsQ0FBSUcsR0FBQTs7R0FFaEQ7QUFDSDtTQUVnQm0zQixrQkFBa0JoeUIsQ0FBQSxFQUFZM0MsQ0FBQSxFQUFVO0VBQ3RELE9BQU8yQyxDQUFBLENBQUVpeUIsSUFBQSxDQUFLQyxPQUFBLEdBQVU3MEIsQ0FBQSxDQUFFNDBCLElBQUEsQ0FBS0MsT0FBQTtBQUNqQztTQUVnQkMsYUFBYXpmLEVBQUEsRUFBVzBmLFVBQUEsRUFBb0JDLGVBQUEsRUFBaUN0bkIsTUFBQSxFQUFNO0VBQ2pHLE1BQU11bkIsWUFBQSxHQUFlNWYsRUFBQSxDQUFHZSxTQUFBO0VBQ3hCLE1BQU1GLEtBQUEsR0FBUWIsRUFBQSxDQUFHYyxrQkFBQSxDQUFtQixhQUFhZCxFQUFBLENBQUc2ZixXQUFBLEVBQWFELFlBQVk7RUFDN0UvZSxLQUFBLENBQU1oWCxNQUFBLENBQU84MUIsZUFBZTtFQUM1QjllLEtBQUEsQ0FBTU8sV0FBQSxDQUFZekksS0FBQSxDQUFNTixNQUFNO0VBQzlCLE1BQU15bkIsaUJBQUEsR0FBb0JqZixLQUFBLENBQU1xWCxPQUFBLENBQVFwdUIsSUFBQSxDQUFLK1csS0FBSztFQUNsRCxNQUFNNkMsU0FBQSxHQUFZN00sR0FBQSxDQUFJNk0sU0FBQSxJQUFhN00sR0FBQTtFQUNuQ3FELFFBQUEsQ0FBUztJQUNQckQsR0FBQSxDQUFJZ0ssS0FBQSxHQUFRQSxLQUFBO0lBQ1poSyxHQUFBLENBQUk2TSxTQUFBLEdBQVlBLFNBQUE7SUFDaEIsSUFBSWdjLFVBQUEsS0FBZSxHQUFHO01BRXBCaDRCLElBQUEsQ0FBS2s0QixZQUFZLEVBQUUxM0IsT0FBQSxDQUFRa2IsU0FBQSxJQUFTO1FBQ2xDMmMsV0FBQSxDQUFZSixlQUFBLEVBQWlCdmMsU0FBQSxFQUFXd2MsWUFBQSxDQUFheGMsU0FBQSxFQUFXb0IsT0FBQSxFQUFTb2IsWUFBQSxDQUFheGMsU0FBQSxFQUFXbUIsT0FBTztPQUN6RztNQUNEcWEsd0JBQUEsQ0FBeUI1ZSxFQUFBLEVBQUkyZixlQUFlO01BQzVDM29CLFlBQUEsQ0FBUXFELE1BQUEsQ0FBTyxNQUFNMkYsRUFBQSxDQUFHb1ksRUFBQSxDQUFHNEgsUUFBQSxDQUFTL2IsSUFBQSxDQUFLcEQsS0FBSyxDQUFDLEVBQUVsSSxLQUFBLENBQU1tbkIsaUJBQWlCO1dBRXhFRyxzQkFBQSxDQUF1QmpnQixFQUFBLEVBQUkwZixVQUFBLEVBQVk3ZSxLQUFBLEVBQU84ZSxlQUFlLEVBQUVobkIsS0FBQSxDQUFNbW5CLGlCQUFpQjtHQUN6RjtBQUNIO1NBSWdCRyx1QkFDZDtFQUFDcEIsTUFBQSxFQUFRN2U7QUFBRSxHQUNYMGYsVUFBQSxFQUNBN2UsS0FBQSxFQUNBOGUsZUFBQSxFQUErQjtFQUkvQixNQUFNTyxLQUFBLEdBQTRCO0VBQ2xDLE1BQU1DLFFBQUEsR0FBV25nQixFQUFBLENBQUdvZ0IsU0FBQTtFQUNwQixJQUFJUixZQUFBLEdBQWU1ZixFQUFBLENBQUdlLFNBQUEsR0FBWXNmLGlCQUFBLENBQWtCcmdCLEVBQUEsRUFBSUEsRUFBQSxDQUFHRyxLQUFBLEVBQU93ZixlQUFlO0VBQ2pGLElBQUlXLHdCQUFBLEdBQTJCO0VBRS9CLE1BQU1DLFNBQUEsR0FBWUosUUFBQSxDQUFTeHlCLE1BQUEsQ0FBT3dELENBQUEsSUFBS0EsQ0FBQSxDQUFFb3VCLElBQUEsQ0FBS0MsT0FBQSxJQUFXRSxVQUFVO0VBQ25FYSxTQUFBLENBQVVyNEIsT0FBQSxDQUFRczNCLE9BQUEsSUFBTztJQUN2QlUsS0FBQSxDQUFNL3pCLElBQUEsQ0FBSztNQUNULE1BQU1xMEIsU0FBQSxHQUFZWixZQUFBO01BQ2xCLE1BQU1hLFNBQUEsR0FBWWpCLE9BQUEsQ0FBUUQsSUFBQSxDQUFLM0YsUUFBQTtNQUMvQjhHLDBCQUFBLENBQTJCMWdCLEVBQUEsRUFBSXdnQixTQUFBLEVBQVdiLGVBQWU7TUFDekRlLDBCQUFBLENBQTJCMWdCLEVBQUEsRUFBSXlnQixTQUFBLEVBQVdkLGVBQWU7TUFFekRDLFlBQUEsR0FBZTVmLEVBQUEsQ0FBR2UsU0FBQSxHQUFZMGYsU0FBQTtNQUU5QixNQUFNRSxJQUFBLEdBQU9DLGFBQUEsQ0FBY0osU0FBQSxFQUFXQyxTQUFTO01BRS9DRSxJQUFBLENBQUs3WixHQUFBLENBQUk1ZSxPQUFBLENBQVEyNEIsS0FBQSxJQUFLO1FBQ3BCZCxXQUFBLENBQVlKLGVBQUEsRUFBaUJrQixLQUFBLENBQU0sSUFBSUEsS0FBQSxDQUFNLEdBQUdyYyxPQUFBLEVBQVNxYyxLQUFBLENBQU0sR0FBR3RjLE9BQU87T0FDMUU7TUFFRG9jLElBQUEsQ0FBS0csTUFBQSxDQUFPNTRCLE9BQUEsQ0FBUTQ0QixNQUFBLElBQU07UUFDeEIsSUFBSUEsTUFBQSxDQUFPQyxRQUFBLEVBQVU7VUFDbkIsTUFBTSxJQUFJbHZCLFVBQUEsQ0FBV212QixPQUFBLENBQVEsMENBQTBDO2VBQ2xFO1VBQ0wsTUFBTS9ILEtBQUEsR0FBUTBHLGVBQUEsQ0FBZ0J6RyxXQUFBLENBQVk0SCxNQUFBLENBQU85d0IsSUFBSTtVQUVyRDh3QixNQUFBLENBQU9oYSxHQUFBLENBQUk1ZSxPQUFBLENBQVFvZCxHQUFBLElBQU8yYixRQUFBLENBQVNoSSxLQUFBLEVBQU8zVCxHQUFHLENBQUM7VUFFOUN3YixNQUFBLENBQU9BLE1BQUEsQ0FBTzU0QixPQUFBLENBQVFvZCxHQUFBLElBQUc7WUFDdkIyVCxLQUFBLENBQU1pSSxXQUFBLENBQVk1YixHQUFBLENBQUl0VixJQUFJO1lBQzFCaXhCLFFBQUEsQ0FBU2hJLEtBQUEsRUFBTzNULEdBQUc7V0FDcEI7VUFFRHdiLE1BQUEsQ0FBT0ssR0FBQSxDQUFJajVCLE9BQUEsQ0FBUWs1QixPQUFBLElBQVduSSxLQUFBLENBQU1pSSxXQUFBLENBQVlFLE9BQU8sQ0FBQzs7T0FFM0Q7TUFFRCxNQUFNQyxjQUFBLEdBQWlCN0IsT0FBQSxDQUFRRCxJQUFBLENBQUs4QixjQUFBO01BRXBDLElBQUlBLGNBQUEsSUFBa0I3QixPQUFBLENBQVFELElBQUEsQ0FBS0MsT0FBQSxHQUFVRSxVQUFBLEVBQVk7UUFFdkRkLHdCQUFBLENBQXlCNWUsRUFBQSxFQUFJMmYsZUFBZTtRQUM1QzllLEtBQUEsQ0FBTTJZLGVBQUEsR0FBa0I7UUFFeEI4Ryx3QkFBQSxHQUEyQjtRQUczQixJQUFJZ0IsYUFBQSxHQUFnQnAwQixZQUFBLENBQWF1ekIsU0FBUztRQUMxQ0UsSUFBQSxDQUFLUSxHQUFBLENBQUlqNUIsT0FBQSxDQUFRd2xCLEtBQUEsSUFBSztVQUNwQjRULGFBQUEsQ0FBYzVULEtBQUEsSUFBUzhTLFNBQUEsQ0FBVTlTLEtBQUE7U0FDbEM7UUFNRDJSLGVBQUEsQ0FBZ0JyZixFQUFBLEVBQUksQ0FBQ0EsRUFBQSxDQUFHbVgsV0FBQSxDQUFZdnRCLFNBQVMsQ0FBQztRQUM5Q28xQixhQUFBLENBQWNoZixFQUFBLEVBQUksQ0FBQ0EsRUFBQSxDQUFHbVgsV0FBQSxDQUFZdnRCLFNBQVMsR0FBR2xDLElBQUEsQ0FBSzQ1QixhQUFhLEdBQUdBLGFBQWE7UUFDaEZ6Z0IsS0FBQSxDQUFNMEMsTUFBQSxHQUFTK2QsYUFBQTtRQUdmLE1BQU1DLHFCQUFBLEdBQXdCcnlCLGVBQUEsQ0FBZ0JteUIsY0FBYztRQUM1RCxJQUFJRSxxQkFBQSxFQUF1QjtVQUN6QnZqQix1QkFBQSxDQUF1Qjs7UUFHekIsSUFBSXdqQixXQUFBO1FBQ0osTUFBTUMsZUFBQSxHQUFrQnpxQixZQUFBLENBQVFxRCxNQUFBLENBQU87VUFFckNtbkIsV0FBQSxHQUFjSCxjQUFBLENBQWV4Z0IsS0FBSztVQUNsQyxJQUFJMmdCLFdBQUEsRUFBYTtZQUNmLElBQUlELHFCQUFBLEVBQXVCO2NBRXpCLElBQUlHLFdBQUEsR0FBY3RwQix1QkFBQSxDQUF3QnRPLElBQUEsQ0FBSyxNQUFNLElBQUk7Y0FDekQwM0IsV0FBQSxDQUFZM3RCLElBQUEsQ0FBSzZ0QixXQUFBLEVBQWFBLFdBQVc7OztTQUc5QztRQUNELE9BQVFGLFdBQUEsSUFBZSxPQUFPQSxXQUFBLENBQVkzdEIsSUFBQSxLQUFTLGFBQ2pEbUQsWUFBQSxDQUFRekMsT0FBQSxDQUFRaXRCLFdBQVcsSUFBSUMsZUFBQSxDQUFnQjV0QixJQUFBLENBQUssTUFBSTJ0QixXQUFXOztLQUV4RTtJQUNEdEIsS0FBQSxDQUFNL3pCLElBQUEsQ0FBS3NYLFFBQUEsSUFBUTtNQUNqQixJQUFJLENBQUM2Yyx3QkFBQSxJQUE0QixDQUFDdGUseUJBQUEsRUFBMkI7UUFDM0QsTUFBTXllLFNBQUEsR0FBWWpCLE9BQUEsQ0FBUUQsSUFBQSxDQUFLM0YsUUFBQTtRQUUvQitILG1CQUFBLENBQW9CbEIsU0FBQSxFQUFXaGQsUUFBUTs7TUFHekM0YixlQUFBLENBQWdCcmYsRUFBQSxFQUFJLENBQUNBLEVBQUEsQ0FBR21YLFdBQUEsQ0FBWXZ0QixTQUFTLENBQUM7TUFDOUNvMUIsYUFBQSxDQUFjaGYsRUFBQSxFQUFJLENBQUNBLEVBQUEsQ0FBR21YLFdBQUEsQ0FBWXZ0QixTQUFTLEdBQUdvVyxFQUFBLENBQUc2ZixXQUFBLEVBQWE3ZixFQUFBLENBQUdlLFNBQVM7TUFDMUVGLEtBQUEsQ0FBTTBDLE1BQUEsR0FBU3ZELEVBQUEsQ0FBR2UsU0FBQTtLQUNuQjtHQUNGO0VBR0QsU0FBUzZnQixTQUFBLEVBQVE7SUFDZixPQUFPMUIsS0FBQSxDQUFNajBCLE1BQUEsR0FBUytLLFlBQUEsQ0FBUXpDLE9BQUEsQ0FBUTJyQixLQUFBLENBQU12SSxLQUFBLENBQUssRUFBRzlXLEtBQUEsQ0FBTTRDLFFBQVEsQ0FBQyxFQUFFNVAsSUFBQSxDQUFLK3RCLFFBQVEsSUFDaEY1cUIsWUFBQSxDQUFRekMsT0FBQSxDQUFPOztFQUduQixPQUFPcXRCLFFBQUEsQ0FBUSxFQUFHL3RCLElBQUEsQ0FBSztJQUNyQmd1QixtQkFBQSxDQUFvQmpDLFlBQUEsRUFBY0QsZUFBZTtHQUNsRDtBQUNIO1NBZ0JnQmlCLGNBQWNKLFNBQUEsRUFBcUJDLFNBQUEsRUFBbUI7RUFDcEUsTUFBTUUsSUFBQSxHQUFtQjtJQUN2QlEsR0FBQSxFQUFLO0lBQ0xyYSxHQUFBLEVBQUs7SUFDTGdhLE1BQUEsRUFBUTs7RUFFVixJQUFJcFQsS0FBQTtFQUNKLEtBQUtBLEtBQUEsSUFBUzhTLFNBQUEsRUFBVztJQUN2QixJQUFJLENBQUNDLFNBQUEsQ0FBVS9TLEtBQUEsR0FBUWlULElBQUEsQ0FBS1EsR0FBQSxDQUFJaDFCLElBQUEsQ0FBS3VoQixLQUFLOztFQUU1QyxLQUFLQSxLQUFBLElBQVMrUyxTQUFBLEVBQVc7SUFDdkIsTUFBTXFCLE1BQUEsR0FBU3RCLFNBQUEsQ0FBVTlTLEtBQUE7TUFDdkJxVSxNQUFBLEdBQVN0QixTQUFBLENBQVUvUyxLQUFBO0lBQ3JCLElBQUksQ0FBQ29VLE1BQUEsRUFBUTtNQUNYbkIsSUFBQSxDQUFLN1osR0FBQSxDQUFJM2EsSUFBQSxDQUFLLENBQUN1aEIsS0FBQSxFQUFPcVUsTUFBTSxDQUFDO1dBQ3hCO01BQ0wsTUFBTWpCLE1BQUEsR0FBUztRQUNiOXdCLElBQUEsRUFBTTBkLEtBQUE7UUFDTnNVLEdBQUEsRUFBS0QsTUFBQTtRQUNMaEIsUUFBQSxFQUFVO1FBQ1ZJLEdBQUEsRUFBSztRQUNMcmEsR0FBQSxFQUFLO1FBQ0xnYSxNQUFBLEVBQVE7O01BRVYsSUFJTSxNQUFJZ0IsTUFBQSxDQUFPdGQsT0FBQSxDQUFRMVksT0FBQSxJQUFTLFFBRTVCLE1BQUlpMkIsTUFBQSxDQUFPdmQsT0FBQSxDQUFRMVksT0FBQSxJQUFTLE9BRzdCZzJCLE1BQUEsQ0FBT3RkLE9BQUEsQ0FBUXVDLElBQUEsS0FBU2diLE1BQUEsQ0FBT3ZkLE9BQUEsQ0FBUXVDLElBQUEsSUFBUSxDQUFDbEYsVUFBQSxFQUNyRDtRQUVFaWYsTUFBQSxDQUFPQyxRQUFBLEdBQVc7UUFDbEJKLElBQUEsQ0FBS0csTUFBQSxDQUFPMzBCLElBQUEsQ0FBSzIwQixNQUFNO2FBQ2xCO1FBRUwsTUFBTW1CLFVBQUEsR0FBYUgsTUFBQSxDQUFPN2MsU0FBQTtRQUMxQixNQUFNaWQsVUFBQSxHQUFhSCxNQUFBLENBQU85YyxTQUFBO1FBQzFCLElBQUltYyxPQUFBO1FBQ0osS0FBS0EsT0FBQSxJQUFXYSxVQUFBLEVBQVk7VUFDMUIsSUFBSSxDQUFDQyxVQUFBLENBQVdkLE9BQUEsR0FBVU4sTUFBQSxDQUFPSyxHQUFBLENBQUloMUIsSUFBQSxDQUFLaTFCLE9BQU87O1FBRW5ELEtBQUtBLE9BQUEsSUFBV2MsVUFBQSxFQUFZO1VBQzFCLE1BQU1DLE1BQUEsR0FBU0YsVUFBQSxDQUFXYixPQUFBO1lBQ3hCZ0IsTUFBQSxHQUFTRixVQUFBLENBQVdkLE9BQUE7VUFDdEIsSUFBSSxDQUFDZSxNQUFBLEVBQVFyQixNQUFBLENBQU9oYSxHQUFBLENBQUkzYSxJQUFBLENBQUtpMkIsTUFBTSxPLElBQzFCRCxNQUFBLENBQU9uSSxHQUFBLEtBQVFvSSxNQUFBLENBQU9wSSxHQUFBLEVBQUs4RyxNQUFBLENBQU9BLE1BQUEsQ0FBTzMwQixJQUFBLENBQUtpMkIsTUFBTTs7UUFFL0QsSUFBSXRCLE1BQUEsQ0FBT0ssR0FBQSxDQUFJbDFCLE1BQUEsR0FBUyxLQUFLNjBCLE1BQUEsQ0FBT2hhLEdBQUEsQ0FBSTdhLE1BQUEsR0FBUyxLQUFLNjBCLE1BQUEsQ0FBT0EsTUFBQSxDQUFPNzBCLE1BQUEsR0FBUyxHQUFHO1VBQzlFMDBCLElBQUEsQ0FBS0csTUFBQSxDQUFPMzBCLElBQUEsQ0FBSzIwQixNQUFNOzs7OztFQUsvQixPQUFPSCxJQUFBO0FBQ1Q7U0FFZ0JaLFlBQ2R0YyxRQUFBLEVBQ0FMLFNBQUEsRUFDQW9CLE9BQUEsRUFDQUQsT0FBQSxFQUFvQjtFQUVwQixNQUFNMFUsS0FBQSxHQUFReFYsUUFBQSxDQUFTekQsRUFBQSxDQUFHcWlCLGlCQUFBLENBQ3hCamYsU0FBQSxFQUNBb0IsT0FBQSxDQUFRMVksT0FBQSxHQUNOO0lBQUVBLE9BQUEsRUFBUzBZLE9BQUEsQ0FBUTFZLE9BQUE7SUFBU3F2QixhQUFBLEVBQWUzVyxPQUFBLENBQVF1QztFQUFJLElBQ3ZEO0lBQUVvVSxhQUFBLEVBQWUzVyxPQUFBLENBQVF1QztFQUFJLENBQUU7RUFFbkN4QyxPQUFBLENBQVFyYyxPQUFBLENBQVFvZCxHQUFBLElBQU8yYixRQUFBLENBQVNoSSxLQUFBLEVBQU8zVCxHQUFHLENBQUM7RUFDM0MsT0FBTzJULEtBQUE7QUFDVDtTQUVnQjRJLG9CQUFvQnBCLFNBQUEsRUFBcUJoZCxRQUFBLEVBQXdCO0VBQy9FL2IsSUFBQSxDQUFLKzRCLFNBQVMsRUFBRXY0QixPQUFBLENBQVFrYixTQUFBLElBQVM7SUFDL0IsSUFBSSxDQUFDSyxRQUFBLENBQVN6RCxFQUFBLENBQUdpYixnQkFBQSxDQUFpQnFILFFBQUEsQ0FBU2xmLFNBQVMsR0FBRztNQUNyRDJjLFdBQUEsQ0FBWXRjLFFBQUEsRUFBVUwsU0FBQSxFQUFXcWQsU0FBQSxDQUFVcmQsU0FBQSxFQUFXb0IsT0FBQSxFQUFTaWMsU0FBQSxDQUFVcmQsU0FBQSxFQUFXbUIsT0FBTzs7R0FFOUY7QUFDSDtTQUVnQm9kLG9CQUFvQmxCLFNBQUEsRUFBcUJoZCxRQUFBLEVBQXdCO0VBQy9FLEdBQUd0WixLQUFBLENBQU16QixJQUFBLENBQUsrYSxRQUFBLENBQVN6RCxFQUFBLENBQUdpYixnQkFBZ0IsRUFBRS95QixPQUFBLENBQVFxNkIsU0FBQSxJQUNsRDlCLFNBQUEsQ0FBVThCLFNBQUEsS0FBYyxRQUFROWUsUUFBQSxDQUFTekQsRUFBQSxDQUFHd2lCLGlCQUFBLENBQWtCRCxTQUFTLENBQUM7QUFDNUU7U0FFZ0J0QixTQUFTaEksS0FBQSxFQUF1QjNULEdBQUEsRUFBYztFQUM1RDJULEtBQUEsQ0FBTXdKLFdBQUEsQ0FBWW5kLEdBQUEsQ0FBSXRWLElBQUEsRUFBTXNWLEdBQUEsQ0FBSXhaLE9BQUEsRUFBUztJQUFFeWYsTUFBQSxFQUFRakcsR0FBQSxDQUFJaUcsTUFBQTtJQUFRZ1EsVUFBQSxFQUFZalcsR0FBQSxDQUFJSztFQUFLLENBQUU7QUFDeEY7QUFFQSxTQUFTMGEsa0JBQ1ByZ0IsRUFBQSxFQUNBRyxLQUFBLEVBQ0EwYSxRQUFBLEVBQXdCO0VBRXhCLE1BQU0rRSxZQUFBLEdBQWU7RUFDckIsTUFBTThDLFlBQUEsR0FBZXY0QixLQUFBLENBQU1nVyxLQUFBLENBQU04YSxnQkFBQSxFQUFrQixDQUFDO0VBQ3BEeUgsWUFBQSxDQUFheDZCLE9BQUEsQ0FBUXE2QixTQUFBLElBQVM7SUFDNUIsTUFBTXRKLEtBQUEsR0FBUTRCLFFBQUEsQ0FBUzNCLFdBQUEsQ0FBWXFKLFNBQVM7SUFDNUMsSUFBSXoyQixPQUFBLEdBQVVtdEIsS0FBQSxDQUFNbnRCLE9BQUE7SUFDcEIsTUFBTTBZLE9BQUEsR0FBVXVWLGVBQUEsQ0FDZEUsZUFBQSxDQUFnQm51QixPQUFPLEdBQ3ZCQSxPQUFBLElBQVcsSUFDWCxPQUNBLE9BQ0EsQ0FBQyxDQUFDbXRCLEtBQUEsQ0FBTWtDLGFBQUEsRUFDUnJ2QixPQUFBLElBQVcsT0FBT0EsT0FBQSxLQUFZLFVBQzlCLElBQUk7SUFFTixNQUFNeVksT0FBQSxHQUF1QjtJQUM3QixTQUFTb2UsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTFKLEtBQUEsQ0FBTXFDLFVBQUEsQ0FBV3J2QixNQUFBLEVBQVEsRUFBRTAyQixDQUFBLEVBQUc7TUFDaEQsTUFBTUMsUUFBQSxHQUFXM0osS0FBQSxDQUFNdlQsS0FBQSxDQUFNdVQsS0FBQSxDQUFNcUMsVUFBQSxDQUFXcUgsQ0FBQSxDQUFFO01BQ2hENzJCLE9BQUEsR0FBVTgyQixRQUFBLENBQVM5MkIsT0FBQTtNQUNuQixJQUFJNFosS0FBQSxHQUFRcVUsZUFBQSxDQUNWNkksUUFBQSxDQUFTNXlCLElBQUEsRUFDVGxFLE9BQUEsRUFDQSxDQUFDLENBQUM4MkIsUUFBQSxDQUFTclgsTUFBQSxFQUNYLENBQUMsQ0FBQ3FYLFFBQUEsQ0FBU3JILFVBQUEsRUFDWCxPQUNBenZCLE9BQUEsSUFBVyxPQUFPQSxPQUFBLEtBQVksVUFDOUIsS0FBSztNQUVQeVksT0FBQSxDQUFRcFksSUFBQSxDQUFLdVosS0FBSzs7SUFFcEJrYSxZQUFBLENBQWEyQyxTQUFBLElBQWFySSxpQkFBQSxDQUFrQnFJLFNBQUEsRUFBVy9kLE9BQUEsRUFBU0QsT0FBTztHQUN4RTtFQUNELE9BQU9xYixZQUFBO0FBQ1Q7U0FFZ0JpRCxpQkFBaUI7RUFBQ2hFLE1BQUEsRUFBUTdlO0FBQUUsR0FBVUcsS0FBQSxFQUFvQjBhLFFBQUEsRUFBd0I7RUFDaEc3YSxFQUFBLENBQUc4aUIsS0FBQSxHQUFRM2lCLEtBQUEsQ0FBTXFmLE9BQUEsR0FBVTtFQUMzQixNQUFNSSxZQUFBLEdBQWU1ZixFQUFBLENBQUdlLFNBQUEsR0FBWXNmLGlCQUFBLENBQWtCcmdCLEVBQUEsRUFBSUcsS0FBQSxFQUFPMGEsUUFBUTtFQUN6RTdhLEVBQUEsQ0FBRzZmLFdBQUEsR0FBYzExQixLQUFBLENBQU1nVyxLQUFBLENBQU04YSxnQkFBQSxFQUFrQixDQUFDO0VBQ2hEK0QsYUFBQSxDQUFjaGYsRUFBQSxFQUFJLENBQUNBLEVBQUEsQ0FBRytKLFVBQVUsR0FBR3JpQixJQUFBLENBQUtrNEIsWUFBWSxHQUFHQSxZQUFZO0FBQ3JFO1NBRWdCbUQsc0JBQXNCL2lCLEVBQUEsRUFBVzZhLFFBQUEsRUFBd0I7RUFDdkUsTUFBTW1JLGVBQUEsR0FBa0IzQyxpQkFBQSxDQUFrQnJnQixFQUFBLEVBQUlBLEVBQUEsQ0FBR0csS0FBQSxFQUFPMGEsUUFBUTtFQUNoRSxNQUFNOEYsSUFBQSxHQUFPQyxhQUFBLENBQWNvQyxlQUFBLEVBQWlCaGpCLEVBQUEsQ0FBR2UsU0FBUztFQUN4RCxPQUFPLEVBQUU0ZixJQUFBLENBQUs3WixHQUFBLENBQUk3YSxNQUFBLElBQVUwMEIsSUFBQSxDQUFLRyxNQUFBLENBQU9ua0IsSUFBQSxDQUFLc21CLEVBQUEsSUFBTUEsRUFBQSxDQUFHbmMsR0FBQSxDQUFJN2EsTUFBQSxJQUFVZzNCLEVBQUEsQ0FBR25DLE1BQUEsQ0FBTzcwQixNQUFNO0FBQ3RGO1NBRWdCeTBCLDJCQUEyQjtFQUFDN0IsTUFBQSxFQUFRN2U7QUFBRSxHQUFVdUQsTUFBQSxFQUFrQkUsUUFBQSxFQUF3QjtFQUV4RyxNQUFNdkQsVUFBQSxHQUFhdUQsUUFBQSxDQUFTekQsRUFBQSxDQUFHaWIsZ0JBQUE7RUFFL0IsU0FBUzF2QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMlUsVUFBQSxDQUFXalUsTUFBQSxFQUFRLEVBQUVWLENBQUEsRUFBRztJQUMxQyxNQUFNZzNCLFNBQUEsR0FBWXJpQixVQUFBLENBQVczVSxDQUFBO0lBQzdCLE1BQU0wdEIsS0FBQSxHQUFReFYsUUFBQSxDQUFTeVYsV0FBQSxDQUFZcUosU0FBUztJQUM1Q3ZpQixFQUFBLENBQUdrakIsVUFBQSxHQUFhLFlBQVlqSyxLQUFBO0lBRTVCLFNBQVMwSixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMUosS0FBQSxDQUFNcUMsVUFBQSxDQUFXcnZCLE1BQUEsRUFBUSxFQUFFMDJCLENBQUEsRUFBRztNQUNoRCxNQUFNM1QsU0FBQSxHQUFZaUssS0FBQSxDQUFNcUMsVUFBQSxDQUFXcUgsQ0FBQTtNQUNuQyxNQUFNNzJCLE9BQUEsR0FBVW10QixLQUFBLENBQU12VCxLQUFBLENBQU1zSixTQUFTLEVBQUVsakIsT0FBQTtNQUN2QyxNQUFNcTNCLFNBQUEsR0FBWSxPQUFPcjNCLE9BQUEsS0FBWSxXQUFXQSxPQUFBLEdBQVUsTUFBTTNCLEtBQUEsQ0FBTTJCLE9BQU8sRUFBRXFFLElBQUEsQ0FBSyxHQUFHLElBQUk7TUFDM0YsSUFBSW9ULE1BQUEsQ0FBT2dmLFNBQUEsR0FBWTtRQUNyQixNQUFNYSxTQUFBLEdBQVk3ZixNQUFBLENBQU9nZixTQUFBLEVBQVd0ZCxTQUFBLENBQVVrZSxTQUFBO1FBQzlDLElBQUlDLFNBQUEsRUFBVztVQUNiQSxTQUFBLENBQVVwekIsSUFBQSxHQUFPZ2YsU0FBQTtVQUNqQixPQUFPekwsTUFBQSxDQUFPZ2YsU0FBQSxFQUFXdGQsU0FBQSxDQUFVa2UsU0FBQTtVQUNuQzVmLE1BQUEsQ0FBT2dmLFNBQUEsRUFBV3RkLFNBQUEsQ0FBVStKLFNBQUEsSUFBYW9VLFNBQUE7Ozs7O0VBT2pELElBQUksT0FBT3RoQixTQUFBLEtBQWMsZUFBZSxTQUFTelMsSUFBQSxDQUFLeVMsU0FBQSxDQUFVQyxTQUFTLEtBQ3ZFLENBQUMsb0JBQW9CMVMsSUFBQSxDQUFLeVMsU0FBQSxDQUFVQyxTQUFTLEtBQzdDMWEsT0FBQSxDQUFRZzhCLGlCQUFBLElBQXFCaDhCLE9BQUEsWUFBbUJBLE9BQUEsQ0FBUWc4QixpQkFBQSxJQUN4RCxHQUFHajJCLE1BQUEsQ0FBTzBVLFNBQUEsQ0FBVUMsU0FBQSxDQUFVNlEsS0FBQSxDQUFNLGVBQWUsQ0FBQyxFQUFFLEtBQUssS0FDN0Q7SUFDRTVTLEVBQUEsQ0FBR2tqQixVQUFBLEdBQWE7O0FBRXBCO1NBRWdCSSxpQkFBaUJDLGlCQUFBLEVBQXlCO0VBQ3hELE9BQU9BLGlCQUFBLENBQWtCLzFCLEtBQUEsQ0FBTSxHQUFHLEVBQUVSLEdBQUEsQ0FBSSxDQUFDMFksS0FBQSxFQUFPOGQsUUFBQSxLQUFRO0lBQ3REOWQsS0FBQSxHQUFRQSxLQUFBLENBQU0rZCxJQUFBLENBQUk7SUFDbEIsTUFBTXp6QixJQUFBLEdBQU8wVixLQUFBLENBQU1nZSxPQUFBLENBQVEsZ0JBQWdCLEVBQUU7SUFFN0MsTUFBTTUzQixPQUFBLEdBQVUsTUFBTXVELElBQUEsQ0FBS1csSUFBSSxJQUFJQSxJQUFBLENBQUs0aUIsS0FBQSxDQUFNLFlBQVksRUFBRSxHQUFHcGxCLEtBQUEsQ0FBTSxHQUFHLElBQUl3QyxJQUFBO0lBRTVFLE9BQU8rcEIsZUFBQSxDQUNML3BCLElBQUEsRUFDQWxFLE9BQUEsSUFBVyxNQUNYLEtBQUt1RCxJQUFBLENBQUtxVyxLQUFLLEdBQ2YsS0FBS3JXLElBQUEsQ0FBS3FXLEtBQUssR0FDZixPQUFPclcsSUFBQSxDQUFLcVcsS0FBSyxHQUNqQjlkLE9BQUEsQ0FBUWtFLE9BQU8sR0FDZjAzQixRQUFBLEtBQWEsQ0FBQztHQUVqQjtBQUNIO0lDdllhRyxPQUFBLFNBQU87RUFVbEJDLGlCQUFpQkMsTUFBQSxFQUFnREMsU0FBQSxFQUFtQjtJQUNsRnA4QixJQUFBLENBQUttOEIsTUFBTSxFQUFFMzdCLE9BQUEsQ0FBUWtiLFNBQUEsSUFBUztNQUM1QixJQUFJeWdCLE1BQUEsQ0FBT3pnQixTQUFBLE1BQWUsTUFBTTtRQUM1QixJQUFJbUIsT0FBQSxHQUFVK2UsZ0JBQUEsQ0FBaUJPLE1BQUEsQ0FBT3pnQixTQUFBLENBQVU7UUFDaEQsSUFBSW9CLE9BQUEsR0FBVUQsT0FBQSxDQUFRb1QsS0FBQSxDQUFLO1FBQzNCLElBQUluVCxPQUFBLENBQVFtQixLQUFBLEVBQU8sTUFBTSxJQUFJOVQsVUFBQSxDQUFXcVosTUFBQSxDQUFPLG9DQUFvQztRQUNuRjNHLE9BQUEsQ0FBUXJjLE9BQUEsQ0FBUW9kLEdBQUEsSUFBRztVQUNmLElBQUlBLEdBQUEsQ0FBSXlCLElBQUEsRUFBTSxNQUFNLElBQUlsVixVQUFBLENBQVdxWixNQUFBLENBQU8sc0RBQXNEO1VBQ2hHLElBQUksQ0FBQzVGLEdBQUEsQ0FBSXhaLE9BQUEsRUFBUyxNQUFNLElBQUkrRixVQUFBLENBQVdxWixNQUFBLENBQU8sc0RBQXNEO1NBQ3ZHO1FBQ0Q0WSxTQUFBLENBQVUxZ0IsU0FBQSxJQUFhOFcsaUJBQUEsQ0FBa0I5VyxTQUFBLEVBQVdvQixPQUFBLEVBQVNELE9BQU87O0tBRXpFOztFQUdIc2YsT0FBT0EsTUFBQSxFQUF5QztJQUM5QyxNQUFNN2pCLEVBQUEsR0FBSyxLQUFLQSxFQUFBO0lBQ2hCLEtBQUt1ZixJQUFBLENBQUt3RSxZQUFBLEdBQWUsS0FBS3hFLElBQUEsQ0FBS3dFLFlBQUEsR0FDakNoOEIsTUFBQSxDQUFPLEtBQUt3M0IsSUFBQSxDQUFLd0UsWUFBQSxFQUFjRixNQUFNLElBQ3JDQSxNQUFBO0lBQ0YsTUFBTTFELFFBQUEsR0FBV25nQixFQUFBLENBQUdvZ0IsU0FBQTtJQUdwQixNQUFNNEQsVUFBQSxHQUF5QztJQUMvQyxJQUFJcEssUUFBQSxHQUFXO0lBQ2Z1RyxRQUFBLENBQVNqNEIsT0FBQSxDQUFRczNCLE9BQUEsSUFBTztNQUN0QnozQixNQUFBLENBQU9pOEIsVUFBQSxFQUFZeEUsT0FBQSxDQUFRRCxJQUFBLENBQUt3RSxZQUFZO01BQzVDbkssUUFBQSxHQUFZNEYsT0FBQSxDQUFRRCxJQUFBLENBQUszRixRQUFBLEdBQVc7TUFDcEM0RixPQUFBLENBQVFvRSxnQkFBQSxDQUFpQkksVUFBQSxFQUFZcEssUUFBUTtLQUM5QztJQUVENVosRUFBQSxDQUFHZSxTQUFBLEdBQVk2WSxRQUFBO0lBRWZ5RixlQUFBLENBQWdCcmYsRUFBQSxFQUFJLENBQUNBLEVBQUEsQ0FBRytKLFVBQUEsRUFBWS9KLEVBQUEsRUFBSUEsRUFBQSxDQUFHbVgsV0FBQSxDQUFZdnRCLFNBQVMsQ0FBQztJQUNqRW8xQixhQUFBLENBQWNoZixFQUFBLEVBQUksQ0FBQ0EsRUFBQSxDQUFHK0osVUFBQSxFQUFZL0osRUFBQSxFQUFJQSxFQUFBLENBQUdtWCxXQUFBLENBQVl2dEIsU0FBQSxFQUFXLEtBQUsyMUIsSUFBQSxDQUFLckUsTUFBTSxHQUFHeHpCLElBQUEsQ0FBS2t5QixRQUFRLEdBQUdBLFFBQVE7SUFDM0c1WixFQUFBLENBQUc2ZixXQUFBLEdBQWNuNEIsSUFBQSxDQUFLa3lCLFFBQVE7SUFDOUIsT0FBTzs7RUFHVHFLLFFBQVFDLGVBQUEsRUFBZ0U7SUFDdEUsS0FBSzNFLElBQUEsQ0FBSzhCLGNBQUEsR0FBaUJ6dEIsZUFBQSxDQUFnQixLQUFLMnJCLElBQUEsQ0FBSzhCLGNBQUEsSUFBa0J6dUIsR0FBQSxFQUFLc3hCLGVBQWU7SUFDM0YsT0FBTzs7O1NDbERLQyx5QkFBeUJua0IsRUFBQSxFQUFTO0VBQ2hELE9BQU8ySixvQkFBQSxDQUNMZ2EsT0FBQSxDQUFRLzVCLFNBQUEsRUFFUixTQUFTdzZCLFNBQXVCQyxhQUFBLEVBQXFCO0lBQ25ELEtBQUtya0IsRUFBQSxHQUFLQSxFQUFBO0lBQ1YsS0FBS3VmLElBQUEsR0FBTztNQUNWQyxPQUFBLEVBQVM2RSxhQUFBO01BQ1ROLFlBQUEsRUFBYztNQUNkbkssUUFBQSxFQUFVO01BQ1ZzQixNQUFBLEVBQVE7TUFDUm1HLGNBQUEsRUFBZ0I7O0dBRW5CO0FBRUw7QUN0QkEsU0FBU2lELGdCQUFnQjdOLFVBQUEsRUFBdUJFLFdBQUEsRUFBMkI7RUFDekUsSUFBSTROLFNBQUEsR0FBWTlOLFVBQUEsQ0FBVTtFQUMxQixJQUFJLENBQUM4TixTQUFBLEVBQVc7SUFDZEEsU0FBQSxHQUFZOU4sVUFBQSxDQUFVLGdCQUFnQixJQUFJOXZCLE9BQUEsQ0FBTXdiLFVBQUEsRUFBWTtNQUMxRHFpQixNQUFBLEVBQVE7TUFDUnBmLFNBQUEsRUFBQXFSLFVBQUE7TUFDQUU7S0FDRDtJQUNENE4sU0FBQSxDQUFVL0UsT0FBQSxDQUFRLENBQUMsRUFBRXFFLE1BQUEsQ0FBTztNQUFFWSxPQUFBLEVBQVM7SUFBTSxDQUFFOztFQUVqRCxPQUFPRixTQUFBLENBQVU3VyxLQUFBLENBQU0sU0FBUztBQUNsQztBQUVBLFNBQVNnWCxtQkFBbUJqTyxVQUFBLEVBQXFCO0VBQy9DLE9BQU9BLFVBQUEsSUFBYSxPQUFPQSxVQUFBLENBQVVrTyxTQUFBLEtBQWM7QUFDckQ7U0FFZ0JDLGlCQUFpQjtFQUMvQnhmLFNBQUEsRUFBQXFSLFVBQUE7RUFDQUU7QUFBVyxHQUNVO0VBQ3JCLE9BQU8rTixrQkFBQSxDQUFtQmpPLFVBQVMsSUFDL0IzdUIsT0FBQSxDQUFReU0sT0FBQSxDQUFRa2lCLFVBQUEsQ0FBVWtPLFNBQUEsQ0FBUyxDQUFFLEVBQUU5d0IsSUFBQSxDQUFNZ3hCLEtBQUEsSUFDM0NBLEtBQUEsQ0FFRzczQixHQUFBLENBQUs4M0IsSUFBQSxJQUFTQSxJQUFBLENBQUs5MEIsSUFBSSxFQUV2QnJDLE1BQUEsQ0FBUXFDLElBQUEsSUFBU0EsSUFBQSxLQUFTbVMsVUFBVSxDQUFDLElBRTFDbWlCLGVBQUEsQ0FBZ0I3TixVQUFBLEVBQVdFLFdBQVcsRUFBRS9RLFlBQUEsQ0FBWSxFQUFHMEosV0FBQSxDQUFXO0FBQ3hFO1NBRWdCeVYsbUJBQ2Q7RUFBRTNmLFNBQUEsRUFBQXFSLFVBQUE7RUFBV0U7QUFBVyxHQUN4QjNtQixJQUFBLEVBQVk7RUFFWixDQUFDMDBCLGtCQUFBLENBQW1Cak8sVUFBUyxLQUMzQnptQixJQUFBLEtBQVNtUyxVQUFBLElBQ1RtaUIsZUFBQSxDQUFnQjdOLFVBQUEsRUFBV0UsV0FBVyxFQUFFbFAsR0FBQSxDQUFJO0lBQUN6WDtFQUFJLENBQUMsRUFBRTJJLEtBQUEsQ0FBTS9GLEdBQUc7QUFDakU7U0FFZ0JveUIsbUJBQ2Q7RUFBRTVmLFNBQUEsRUFBQXFSLFVBQUE7RUFBV0U7QUFBVyxHQUN4QjNtQixJQUFBLEVBQVk7RUFFWixDQUFDMDBCLGtCQUFBLENBQW1Cak8sVUFBUyxLQUMzQnptQixJQUFBLEtBQVNtUyxVQUFBLElBQ1RtaUIsZUFBQSxDQUFnQjdOLFVBQUEsRUFBV0UsV0FBVyxFQUFFalAsTUFBQSxDQUFPMVgsSUFBSSxFQUFFMkksS0FBQSxDQUFNL0YsR0FBRztBQUNsRTtTQ3JEZ0JxeUIsSUFBS242QixFQUFBLEVBQUU7RUFTckIsT0FBT29QLFFBQUEsQ0FBUztJQUNkckQsR0FBQSxDQUFJd0osVUFBQSxHQUFhO0lBQ2pCLE9BQU92VixFQUFBLENBQUU7R0FDVjtBQUNIO0FDVkEsU0FBU282QixTQUFBLEVBQVc7RUFDaEIsSUFBSUMsUUFBQSxHQUFXLENBQUNyakIsU0FBQSxDQUFVc2pCLGFBQUEsSUFDdEIsV0FBVy8xQixJQUFBLENBQUt5UyxTQUFBLENBQVVDLFNBQVMsS0FDbkMsQ0FBQyxpQkFBaUIxUyxJQUFBLENBQUt5UyxTQUFBLENBQVVDLFNBQVM7RUFFOUMsSUFBSSxDQUFDb2pCLFFBQUEsSUFBWSxDQUFDL2YsU0FBQSxDQUFVdWYsU0FBQSxFQUN4QixPQUFPNzhCLE9BQUEsQ0FBUXlNLE9BQUEsQ0FBTztFQUMxQixJQUFJOHdCLFVBQUE7RUFDSixPQUFPLElBQUl2OUIsT0FBQSxDQUFRLFVBQVV5TSxPQUFBLEVBQVM7SUFDbEMsSUFBSSt3QixNQUFBLEdBQVMsU0FBQUEsQ0FBQSxFQUFZO01BQUUsT0FBT2xnQixTQUFBLENBQVV1ZixTQUFBLENBQVMsRUFBRzNyQixPQUFBLENBQVF6RSxPQUFPO0lBQUU7SUFDekU4d0IsVUFBQSxHQUFhRSxXQUFBLENBQVlELE1BQUEsRUFBUSxHQUFHO0lBQ3BDQSxNQUFBLENBQU07RUFDZCxDQUFLLEVBQUV0c0IsT0FBQSxDQUFRLFlBQVk7SUFBRSxPQUFPd3NCLGFBQUEsQ0FBY0gsVUFBVTtFQUFFLENBQUU7QUFDaEU7U0NIZ0JJLFVBQVd6bEIsRUFBQSxFQUFTO0VBQ2xDLE1BQU0wbEIsS0FBQSxHQUFRMWxCLEVBQUEsQ0FBR3ZJLE1BQUE7RUFDakIsTUFBTTtJQUFDMk4sU0FBQSxFQUFBcVI7RUFBUyxJQUFJelcsRUFBQSxDQUFHbUYsS0FBQTtFQUN2QixJQUFJdWdCLEtBQUEsQ0FBTWxsQixhQUFBLElBQWlCUixFQUFBLENBQUdHLEtBQUEsRUFDMUIsT0FBT3VsQixLQUFBLENBQU05a0IsY0FBQSxDQUFlL00sSUFBQSxDQUFZLE1BQU02eEIsS0FBQSxDQUFNbmxCLFdBQUEsR0FDbERyQyxTQUFBLENBQVd3bkIsS0FBQSxDQUFNbmxCLFdBQVcsSUFDNUJQLEVBQUU7RUFDUjdRLEtBQUEsS0FBZ0J1MkIsS0FBQSxDQUFNQyxhQUFBLENBQWNydUIsWUFBQSxHQUFlM0gsaUJBQUEsQ0FBdUI7RUFDMUUrMUIsS0FBQSxDQUFNbGxCLGFBQUEsR0FBZ0I7RUFDdEJrbEIsS0FBQSxDQUFNbmxCLFdBQUEsR0FBYztFQUNwQm1sQixLQUFBLENBQU10bEIsWUFBQSxHQUFlO0VBQ3JCLE1BQU11bEIsYUFBQSxHQUFnQkQsS0FBQSxDQUFNQyxhQUFBO0VBRTVCLFNBQVNDLGlCQUFBLEVBQWdCO0lBR3ZCLElBQUlGLEtBQUEsQ0FBTUMsYUFBQSxLQUFrQkEsYUFBQSxFQUFlLE1BQU0sSUFBSTl6QixVQUFBLENBQVdwQixjQUFBLENBQWUseUJBQXlCOztFQUkxRyxJQUFJbzFCLGNBQUEsR0FBaUJILEtBQUEsQ0FBTUksY0FBQTtJQUV2QkMsa0JBQUEsR0FBOEM7SUFDOUNDLFVBQUEsR0FBYTtFQUVqQixNQUFNQyxTQUFBLEdBQVlBLENBQUEsS0FBTSxJQUFJanZCLFlBQUEsQ0FBUSxDQUFDekMsT0FBQSxFQUFTOEQsTUFBQSxLQUFNO0lBTWxEdXRCLGdCQUFBLENBQWdCO0lBRWhCLElBQUksQ0FBQ25QLFVBQUEsRUFBVyxNQUFNLElBQUk1a0IsVUFBQSxDQUFXakIsVUFBQSxDQUFVO0lBQy9DLE1BQU1zMUIsTUFBQSxHQUFTbG1CLEVBQUEsQ0FBR2hRLElBQUE7SUFFbEIsTUFBTW1zQixHQUFBLEdBQU11SixLQUFBLENBQU1TLFVBQUEsR0FDaEIxUCxVQUFBLENBQVU5VixJQUFBLENBQUt1bEIsTUFBTSxJQUNyQnpQLFVBQUEsQ0FBVTlWLElBQUEsQ0FBS3VsQixNQUFBLEVBQVFsWSxJQUFBLENBQUtvWSxLQUFBLENBQU1wbUIsRUFBQSxDQUFHOGlCLEtBQUEsR0FBUSxFQUFFLENBQUM7SUFDbEQsSUFBSSxDQUFDM0csR0FBQSxFQUFLLE1BQU0sSUFBSXRxQixVQUFBLENBQVdqQixVQUFBLENBQVU7SUFDekN1ckIsR0FBQSxDQUFJendCLE9BQUEsR0FBVWtyQixrQkFBQSxDQUFtQnZlLE1BQU07SUFDdkM4akIsR0FBQSxDQUFJa0ssU0FBQSxHQUFZenBCLElBQUEsQ0FBS29ELEVBQUEsQ0FBR3NtQixjQUFjO0lBQ3RDbkssR0FBQSxDQUFJb0ssZUFBQSxHQUFrQjNwQixJQUFBLENBQU1oTixDQUFBLElBQUM7TUFDekJtMkIsa0JBQUEsR0FBcUI1SixHQUFBLENBQUlyRSxXQUFBO01BQ3pCLElBQUk0TixLQUFBLENBQU1TLFVBQUEsSUFBYyxDQUFDbm1CLEVBQUEsQ0FBR1MsUUFBQSxDQUFTK2xCLFlBQUEsRUFBYztRQUkvQ3JLLEdBQUEsQ0FBSXp3QixPQUFBLEdBQVVtckIsY0FBQTtRQUNka1Asa0JBQUEsQ0FBbUJ6TSxLQUFBLENBQUs7UUFFeEI2QyxHQUFBLENBQUk5d0IsTUFBQSxDQUFPbzdCLEtBQUEsQ0FBSztRQUNoQixNQUFNQyxNQUFBLEdBQVNqUSxVQUFBLENBQVVrUSxjQUFBLENBQWVULE1BQU07UUFDOUNRLE1BQUEsQ0FBT3B6QixTQUFBLEdBQVlvekIsTUFBQSxDQUFPaDdCLE9BQUEsR0FBVWtSLElBQUEsQ0FBSztVQUNyQ3ZFLE1BQUEsQ0FBUSxJQUFJeEcsVUFBQSxDQUFXKzBCLGNBQUEsQ0FBZSxZQUFZVixNQUFBLGVBQXFCLENBQUM7U0FDM0U7YUFDRTtRQUNISCxrQkFBQSxDQUFtQnI2QixPQUFBLEdBQVVrckIsa0JBQUEsQ0FBbUJ2ZSxNQUFNO1FBQ3RELElBQUl3dUIsTUFBQSxHQUFTajNCLENBQUEsQ0FBRTh2QixVQUFBLEdBQWExUixJQUFBLENBQUs4WSxHQUFBLENBQUksR0FBRyxFQUFFLElBQUksSUFBSWwzQixDQUFBLENBQUU4dkIsVUFBQTtRQUNwRHNHLFVBQUEsR0FBYWEsTUFBQSxHQUFTO1FBQ3RCN21CLEVBQUEsQ0FBRzZlLE1BQUEsQ0FBTzFlLEtBQUEsR0FBUWdjLEdBQUEsQ0FBSTl3QixNQUFBO1FBQ3RCbzBCLFlBQUEsQ0FBYXpmLEVBQUEsRUFBSTZtQixNQUFBLEdBQVMsSUFBSWQsa0JBQUEsRUFBb0IxdEIsTUFBTTs7T0FFN0RBLE1BQU07SUFFVDhqQixHQUFBLENBQUk3b0IsU0FBQSxHQUFZc0osSUFBQSxDQUFNO01BRWxCbXBCLGtCQUFBLEdBQXFCO01BQ3JCLE1BQU01bEIsS0FBQSxHQUFRSCxFQUFBLENBQUc2ZSxNQUFBLENBQU8xZSxLQUFBLEdBQVFnYyxHQUFBLENBQUk5d0IsTUFBQTtNQUVwQyxNQUFNNHZCLGdCQUFBLEdBQW1COXdCLEtBQUEsQ0FBTWdXLEtBQUEsQ0FBTThhLGdCQUFnQjtNQUNyRCxJQUFJQSxnQkFBQSxDQUFpQmh2QixNQUFBLEdBQVMsR0FBRyxJQUFJO1FBQ25DLE1BQU00dUIsUUFBQSxHQUFXMWEsS0FBQSxDQUFNMlgsV0FBQSxDQUFZcUMsbUJBQUEsQ0FBb0JjLGdCQUFnQixHQUFHLFVBQVU7UUFDcEYsSUFBSXlLLEtBQUEsQ0FBTVMsVUFBQSxFQUFZdEQsZ0JBQUEsQ0FBaUI3aUIsRUFBQSxFQUFJRyxLQUFBLEVBQU8wYSxRQUFRLE9BQ3JEO1VBQ0Q2RiwwQkFBQSxDQUEyQjFnQixFQUFBLEVBQUlBLEVBQUEsQ0FBR2UsU0FBQSxFQUFXOFosUUFBUTtVQUNyRCxJQUFJLENBQUNrSSxxQkFBQSxDQUFzQi9pQixFQUFBLEVBQUk2YSxRQUFRLEdBQUc7WUFDdENoYixPQUFBLENBQVFDLElBQUEsQ0FBSyxvSEFBb0g7OztRQUd6SThlLHdCQUFBLENBQXlCNWUsRUFBQSxFQUFJNmEsUUFBUTtlQUM5QmpyQixDQUFBLEVBQVAsQztNQVNGZ1MsV0FBQSxDQUFZelYsSUFBQSxDQUFLNlQsRUFBRTtNQUVuQkcsS0FBQSxDQUFNNG1CLGVBQUEsR0FBa0JucUIsSUFBQSxDQUFLcWIsRUFBQSxJQUFFO1FBQzNCeU4sS0FBQSxDQUFNc0IsT0FBQSxHQUFVO1FBQ2hCaG5CLEVBQUEsQ0FBR29ZLEVBQUEsQ0FBRyxlQUFlLEVBQUVuVSxJQUFBLENBQUtnVSxFQUFFO09BQ2pDO01BRUQ5WCxLQUFBLENBQU04bUIsT0FBQSxHQUFVcnFCLElBQUEsQ0FBS3FiLEVBQUEsSUFBRTtRQUNuQmpZLEVBQUEsQ0FBR29ZLEVBQUEsQ0FBRyxPQUFPLEVBQUVuVSxJQUFBLENBQUtnVSxFQUFFO09BQ3pCO01BRUQsSUFBSStOLFVBQUEsRUFBWWpCLGtCQUFBLENBQW1CL2tCLEVBQUEsQ0FBR21GLEtBQUEsRUFBTytnQixNQUFNO01BRW5EM3hCLE9BQUEsQ0FBTztPQUVSOEQsTUFBTTtHQUNWLEVBQUVNLEtBQUEsQ0FBTUcsR0FBQSxJQUFHO0lBQ1YsSUFBSUEsR0FBQSxJQUFPQSxHQUFBLENBQUk5SSxJQUFBLEtBQVMsa0JBQWtCMDFCLEtBQUEsQ0FBTTFrQixjQUFBLEdBQWlCLEdBQUc7TUFHbEUwa0IsS0FBQSxDQUFNMWtCLGNBQUE7TUFDTm5CLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLHFEQUFxRDtNQUNsRSxPQUFPbW1CLFNBQUEsQ0FBUztXQUNYO01BQ0wsT0FBT2p2QixZQUFBLENBQVFxQixNQUFBLENBQU9TLEdBQUc7O0dBRTVCO0VBR0QsT0FBTzlCLFlBQUEsQ0FBUWdELElBQUEsQ0FBSyxDQUNsQjJyQixhQUFBLEUsQ0FDQyxPQUFPN2pCLFNBQUEsS0FBYyxjQUFjOUssWUFBQSxDQUFRekMsT0FBQSxDQUFPLElBQUsyd0IsUUFBQSxDQUFrQixHQUFJcnhCLElBQUEsQ0FBS295QixTQUFTLEVBQzdGLEVBQUVweUIsSUFBQSxDQUFLO0lBS0oreEIsZ0JBQUEsQ0FBZ0I7SUFDaEJGLEtBQUEsQ0FBTXdCLGlCQUFBLEdBQW9CO0lBQzFCLE9BQU9sd0IsWUFBQSxDQUFRekMsT0FBQSxDQUFRMHdCLEdBQUEsQ0FBSSxNQUFJamxCLEVBQUEsQ0FBR29ZLEVBQUEsQ0FBRytPLEtBQUEsQ0FBTWxqQixJQUFBLENBQUtqRSxFQUFBLENBQUdpbEIsR0FBRyxDQUFDLENBQUMsRUFBRXB4QixJQUFBLENBQUssU0FBU3V6QixlQUFBLEVBQWM7TUFDbEYsSUFBSTFCLEtBQUEsQ0FBTXdCLGlCQUFBLENBQWtCajdCLE1BQUEsR0FBUyxHQUFHO1FBRXBDLElBQUlvN0IsVUFBQSxHQUFhM0IsS0FBQSxDQUFNd0IsaUJBQUEsQ0FBa0I5N0IsTUFBQSxDQUFPd0ksZUFBQSxFQUFpQmhCLEdBQUc7UUFDcEU4eUIsS0FBQSxDQUFNd0IsaUJBQUEsR0FBb0I7UUFDMUIsT0FBT2x3QixZQUFBLENBQVF6QyxPQUFBLENBQVEwd0IsR0FBQSxDQUFJLE1BQUlvQyxVQUFBLENBQVdybkIsRUFBQSxDQUFHaWxCLEdBQUcsQ0FBQyxDQUFDLEVBQUVweEIsSUFBQSxDQUFLdXpCLGNBQWM7O0tBRTlFO0dBQ0osRUFBRXB1QixPQUFBLENBQVE7SUFDUDBzQixLQUFBLENBQU13QixpQkFBQSxHQUFvQjtJQUMxQnhCLEtBQUEsQ0FBTWxsQixhQUFBLEdBQWdCO0dBQ3pCLEVBQUUzTSxJQUFBLENBQUs7SUFFSixPQUFPbU0sRUFBQTtHQUNWLEVBQUVySCxLQUFBLENBQU1HLEdBQUEsSUFBRztJQUNSNHNCLEtBQUEsQ0FBTW5sQixXQUFBLEdBQWN6SCxHQUFBO0lBQ3BCLElBQUk7TUFFRml0QixrQkFBQSxJQUFzQkEsa0JBQUEsQ0FBbUJ6TSxLQUFBLENBQUs7YUFDOUMvUixFQUFBLEdBQU07SUFDUixJQUFJb2UsYUFBQSxLQUFrQkQsS0FBQSxDQUFNQyxhQUFBLEVBQWU7TUFHekMzbEIsRUFBQSxDQUFHbUIsTUFBQSxDQUFNOztJQUVYLE9BQU9qRCxTQUFBLENBQVdwRixHQUFHO0dBQ3hCLEVBQUVFLE9BQUEsQ0FBUTtJQUNQMHNCLEtBQUEsQ0FBTXRsQixZQUFBLEdBQWU7SUFDckJ5bEIsY0FBQSxDQUFjO0dBQ2pCO0FBQ0g7U0M3S2dCeUIsY0FBZTc0QixRQUFBLEVBQXVCO0VBQ3BELElBQUk4NEIsUUFBQSxHQUFXbDhCLE1BQUEsSUFBVW9ELFFBQUEsQ0FBU08sSUFBQSxDQUFLM0QsTUFBTTtJQUN6Q204QixPQUFBLEdBQVUvWixLQUFBLElBQVNoZixRQUFBLENBQVNnNUIsS0FBQSxDQUFNaGEsS0FBSztJQUN2Q2lhLFNBQUEsR0FBWUMsSUFBQSxDQUFLSixRQUFRO0lBQ3pCSyxPQUFBLEdBQVVELElBQUEsQ0FBS0gsT0FBTztFQUUxQixTQUFTRyxLQUFLRSxPQUFBLEVBQW1CO0lBQzdCLE9BQVEzN0IsR0FBQSxJQUFJO01BQ1IsSUFBSThDLElBQUEsR0FBTzY0QixPQUFBLENBQVEzN0IsR0FBRztRQUNsQjVDLEtBQUEsR0FBUTBGLElBQUEsQ0FBSzFGLEtBQUE7TUFFakIsT0FBTzBGLElBQUEsQ0FBS0MsSUFBQSxHQUFPM0YsS0FBQSxHQUNkLENBQUNBLEtBQUEsSUFBUyxPQUFPQSxLQUFBLENBQU11SyxJQUFBLEtBQVMsYUFDN0JqTSxPQUFBLENBQVEwQixLQUFLLElBQUl4QixPQUFBLENBQVE4UixHQUFBLENBQUl0USxLQUFLLEVBQUV1SyxJQUFBLENBQUs2ekIsU0FBQSxFQUFXRSxPQUFPLElBQUlGLFNBQUEsQ0FBVXArQixLQUFLLElBQzlFQSxLQUFBLENBQU11SyxJQUFBLENBQUs2ekIsU0FBQSxFQUFXRSxPQUFPOzs7RUFJN0MsT0FBT0QsSUFBQSxDQUFLSixRQUFRLEVBQUM7QUFDdkI7U0NQZ0JPLHVCQUF1QjduQixJQUFBLEVBQXVCOG5CLFdBQUEsRUFBYUMsU0FBQSxFQUFTO0VBRWxGLElBQUl6OEIsQ0FBQSxHQUFJd0QsU0FBQSxDQUFVOUMsTUFBQTtFQUNsQixJQUFJVixDQUFBLEdBQUksR0FBRyxNQUFNLElBQUlzRyxVQUFBLENBQVd5VixlQUFBLENBQWdCLG1CQUFtQjtFQUduRSxJQUFJbGQsSUFBQSxHQUFPLElBQUl2QyxLQUFBLENBQU0wRCxDQUFBLEdBQUksQ0FBQztFQUMxQixPQUFPLEVBQUVBLENBQUEsRUFBR25CLElBQUEsQ0FBS21CLENBQUEsR0FBSSxLQUFLd0QsU0FBQSxDQUFVeEQsQ0FBQTtFQUVwQ3k4QixTQUFBLEdBQVk1OUIsSUFBQSxDQUFLa1UsR0FBQSxDQUFHO0VBQ3BCLElBQUk0YyxNQUFBLEdBQVM3dEIsT0FBQSxDQUFRakQsSUFBSTtFQUN6QixPQUFPLENBQUM2VixJQUFBLEVBQU1pYixNQUFBLEVBQVE4TSxTQUFTO0FBQ2pDO1NBRWdCQyxzQkFDZGpvQixFQUFBLEVBQ0FDLElBQUEsRUFDQUMsVUFBQSxFQUNBZ29CLGlCQUFBLEVBQ0FGLFNBQUEsRUFBcUM7RUFFckMsT0FBT2h4QixZQUFBLENBQVF6QyxPQUFBLENBQU8sRUFBR1YsSUFBQSxDQUFLO0lBRTVCLE1BQU02UCxTQUFBLEdBQVk3TSxHQUFBLENBQUk2TSxTQUFBLElBQWE3TSxHQUFBO0lBR25DLE1BQU1nSyxLQUFBLEdBQVFiLEVBQUEsQ0FBR2Msa0JBQUEsQ0FBbUJiLElBQUEsRUFBTUMsVUFBQSxFQUFZRixFQUFBLENBQUdlLFNBQUEsRUFBV21uQixpQkFBaUI7SUFFckYsTUFBTTV0QixTQUFBLEdBQVk7TUFDaEJ1RyxLQUFBO01BQ0E2Qzs7SUFHRixJQUFJd2tCLGlCQUFBLEVBQW1CO01BRXJCcm5CLEtBQUEsQ0FBTTRDLFFBQUEsR0FBV3lrQixpQkFBQSxDQUFrQnprQixRQUFBO1dBQzlCO01BQ0wsSUFBSTtRQUNGNUMsS0FBQSxDQUFNaFgsTUFBQSxDQUFNO1FBQ1ptVyxFQUFBLENBQUd2SSxNQUFBLENBQU91SixjQUFBLEdBQWlCO2VBQ3BCcFYsRUFBQSxFQUFQO1FBQ0EsSUFBSUEsRUFBQSxDQUFHb0UsSUFBQSxLQUFTMkIsUUFBQSxDQUFTc1AsWUFBQSxJQUFnQmpCLEVBQUEsQ0FBR2tCLE1BQUEsQ0FBTSxLQUFNLEVBQUVsQixFQUFBLENBQUd2SSxNQUFBLENBQU91SixjQUFBLEdBQWlCLEdBQUc7VUFDdEZuQixPQUFBLENBQVFDLElBQUEsQ0FBSywwQkFBMEI7VUFDdkNFLEVBQUEsQ0FBR21CLE1BQUEsQ0FBTTtVQUNULE9BQU9uQixFQUFBLENBQUdXLElBQUEsQ0FBSSxFQUFHOU0sSUFBQSxDQUFLLE1BQU1vMEIscUJBQUEsQ0FDMUJqb0IsRUFBQSxFQUNBQyxJQUFBLEVBQ0FDLFVBQUEsRUFDQSxNQUNBOG5CLFNBQVMsQ0FDVjs7UUFFSCxPQUFPOXBCLFNBQUEsQ0FBVXRTLEVBQUU7OztJQUt2QixNQUFNdThCLGdCQUFBLEdBQW1CajVCLGVBQUEsQ0FBZ0I4NEIsU0FBUztJQUNsRCxJQUFJRyxnQkFBQSxFQUFrQjtNQUNwQm5xQix1QkFBQSxDQUF1Qjs7SUFHekIsSUFBSXdqQixXQUFBO0lBQ0osTUFBTUMsZUFBQSxHQUFrQnpxQixZQUFBLENBQVFxRCxNQUFBLENBQU87TUFFckNtbkIsV0FBQSxHQUFjd0csU0FBQSxDQUFVdC9CLElBQUEsQ0FBS21ZLEtBQUEsRUFBT0EsS0FBSztNQUN6QyxJQUFJMmdCLFdBQUEsRUFBYTtRQUNmLElBQUkyRyxnQkFBQSxFQUFrQjtVQUVwQixJQUFJekcsV0FBQSxHQUFjdHBCLHVCQUFBLENBQXdCdE8sSUFBQSxDQUFLLE1BQU0sSUFBSTtVQUN6RDAzQixXQUFBLENBQVkzdEIsSUFBQSxDQUFLNnRCLFdBQUEsRUFBYUEsV0FBVzttQkFDaEMsT0FBT0YsV0FBQSxDQUFZeHlCLElBQUEsS0FBUyxjQUFjLE9BQU93eUIsV0FBQSxDQUFZaUcsS0FBQSxLQUFVLFlBQVk7VUFFNUZqRyxXQUFBLEdBQWM4RixhQUFBLENBQWM5RixXQUFXOzs7T0FHMUNsbkIsU0FBUztJQUNaLFFBQVFrbkIsV0FBQSxJQUFlLE9BQU9BLFdBQUEsQ0FBWTN0QixJQUFBLEtBQVMsYUFFakRtRCxZQUFBLENBQVF6QyxPQUFBLENBQVFpdEIsV0FBVyxFQUFFM3RCLElBQUEsQ0FBS2hHLENBQUEsSUFBS2dULEtBQUEsQ0FBTWdYLE1BQUEsR0FDM0NocUIsQ0FBQSxHQUNFcVEsU0FBQSxDQUFVLElBQUlyTSxVQUFBLENBQVd1MkIsZUFBQSxDQUN6Qiw0REFBNEQsQ0FBQyxDQUFDLElBRWhFM0csZUFBQSxDQUFnQjV0QixJQUFBLENBQUssTUFBTTJ0QixXQUFXLEdBQ3hDM3RCLElBQUEsQ0FBS2hHLENBQUEsSUFBQztNQUVOLElBQUlxNkIsaUJBQUEsRUFBbUJybkIsS0FBQSxDQUFNeVgsUUFBQSxDQUFRO01BR3JDLE9BQU96WCxLQUFBLENBQU1PLFdBQUEsQ0FBWXZOLElBQUEsQ0FBSyxNQUFNaEcsQ0FBQztLQUN0QyxFQUFFOEssS0FBQSxDQUFNL0ksQ0FBQSxJQUFDO01BQ1JpUixLQUFBLENBQU1xWCxPQUFBLENBQVF0b0IsQ0FBQztNQUNmLE9BQU9zTyxTQUFBLENBQVV0TyxDQUFDO0tBQ25CO0dBQ0Y7QUFDSDtTQzdFZ0J5NEIsSUFBSy82QixDQUFBLEVBQWdCaEUsS0FBQSxFQUFZd2MsS0FBQSxFQUFhO0VBQzVELE1BQU16YSxNQUFBLEdBQVN6RCxPQUFBLENBQVEwRixDQUFDLElBQUlBLENBQUEsQ0FBRW5ELEtBQUEsQ0FBSyxJQUFLLENBQUNtRCxDQUFDO0VBQzFDLFNBQVMvQixDQUFBLEdBQUUsR0FBR0EsQ0FBQSxHQUFFdWEsS0FBQSxFQUFPLEVBQUV2YSxDQUFBLEVBQUdGLE1BQUEsQ0FBT2MsSUFBQSxDQUFLN0MsS0FBSztFQUM3QyxPQUFPK0IsTUFBQTtBQUNUO1NBR2dCaTlCLDZCQUE4QjdKLElBQUEsRUFBWTtFQUN4RCxPQUFPO0lBQ0wsR0FBR0EsSUFBQTtJQUNIL1EsTUFBTXRLLFNBQUEsRUFBaUI7TUFDckIsTUFBTXNLLEtBQUEsR0FBUStRLElBQUEsQ0FBSy9RLEtBQUEsQ0FBTXRLLFNBQVM7TUFDbEMsTUFBTTtRQUFDRztNQUFNLElBQUltSyxLQUFBO01BQ2pCLE1BQU02YSxXQUFBLEdBQXNEO01BQzVELE1BQU1DLGlCQUFBLEdBQW9DO01BRTFDLFNBQVNDLGtCQUFtQjM4QixPQUFBLEVBQW1DNDhCLE9BQUEsRUFBaUJDLGFBQUEsRUFBMEI7UUFDeEcsTUFBTUMsWUFBQSxHQUFlak8sZUFBQSxDQUFnQjd1QixPQUFPO1FBQzVDLE1BQU0rOEIsU0FBQSxHQUFhTixXQUFBLENBQVlLLFlBQUEsSUFBZ0JMLFdBQUEsQ0FBWUssWUFBQSxLQUFpQjtRQUM1RSxNQUFNRSxTQUFBLEdBQVloOUIsT0FBQSxJQUFXLE9BQU8sSUFBRyxPQUFPQSxPQUFBLEtBQVksV0FBVyxJQUFJQSxPQUFBLENBQVFHLE1BQUE7UUFDakYsTUFBTTg4QixTQUFBLEdBQVlMLE9BQUEsR0FBVTtRQUM1QixNQUFNTSxZQUFBLEdBQWU7VUFDbkIsR0FBR0wsYUFBQTtVQUNISSxTQUFBO1VBQ0FMLE9BQUE7VUFDQUksU0FBQTtVQUNBN1ksVUFBQSxFQUFZc0ssZUFBQSxDQUFnQnp1QixPQUFPO1VBQ25DeWYsTUFBQSxFQUFRLENBQUN3ZCxTQUFBLElBQWFKLGFBQUEsQ0FBY3BkOztRQUV0Q3NkLFNBQUEsQ0FBVTE4QixJQUFBLENBQUs2OEIsWUFBWTtRQUMzQixJQUFJLENBQUNBLFlBQUEsQ0FBYTNOLFlBQUEsRUFBYztVQUM5Qm1OLGlCQUFBLENBQWtCcjhCLElBQUEsQ0FBSzY4QixZQUFZOztRQUVyQyxJQUFJRixTQUFBLEdBQVksR0FBRztVQUNqQixNQUFNRyxjQUFBLEdBQWlCSCxTQUFBLEtBQWMsSUFDbkNoOUIsT0FBQSxDQUFRLEtBQ1JBLE9BQUEsQ0FBUTNCLEtBQUEsQ0FBTSxHQUFHMitCLFNBQUEsR0FBWSxDQUFDO1VBQ2hDTCxpQkFBQSxDQUFrQlEsY0FBQSxFQUFnQlAsT0FBQSxHQUFVLEdBQUdDLGFBQWE7O1FBRTlERSxTQUFBLENBQVVqa0IsSUFBQSxDQUFLLENBQUN0WCxDQUFBLEVBQUUzQyxDQUFBLEtBQU0yQyxDQUFBLENBQUVvN0IsT0FBQSxHQUFVLzlCLENBQUEsQ0FBRSs5QixPQUFPO1FBQzdDLE9BQU9NLFlBQUE7O01BR1QsTUFBTWhlLFVBQUEsR0FBYXlkLGlCQUFBLENBQWtCbGxCLE1BQUEsQ0FBT3lILFVBQUEsQ0FBV2xmLE9BQUEsRUFBUyxHQUFHeVgsTUFBQSxDQUFPeUgsVUFBVTtNQUNwRnVkLFdBQUEsQ0FBWSxTQUFTLENBQUN2ZCxVQUFVO01BQ2hDLFdBQVd0RixLQUFBLElBQVNuQyxNQUFBLENBQU9nQixPQUFBLEVBQVM7UUFDbENra0IsaUJBQUEsQ0FBa0IvaUIsS0FBQSxDQUFNNVosT0FBQSxFQUFTLEdBQUc0WixLQUFLOztNQUczQyxTQUFTd2pCLGNBQWNwOUIsT0FBQSxFQUFpQztRQUN0RCxNQUFNNHZCLE9BQUEsR0FBUzZNLFdBQUEsQ0FBWTVOLGVBQUEsQ0FBZ0I3dUIsT0FBTztRQUNsRCxPQUFPNHZCLE9BQUEsSUFBVUEsT0FBQSxDQUFPOztNQUcxQixTQUFTeU4sZUFBZ0J2aEIsS0FBQSxFQUF1QjhnQixPQUFBLEVBQWU7UUFDN0QsT0FBTztVQUNMaG1CLElBQUEsRUFBTWtGLEtBQUEsQ0FBTWxGLElBQUEsS0FBSSxRQUVka0YsS0FBQSxDQUFNbEYsSUFBQTtVQUNSQyxLQUFBLEVBQU8wbEIsR0FBQSxDQUFJemdCLEtBQUEsQ0FBTWpGLEtBQUEsRUFBT2lGLEtBQUEsQ0FBTWhGLFNBQUEsR0FBWTZiLElBQUEsQ0FBS0osT0FBQSxHQUFVSSxJQUFBLENBQUtMLE9BQUEsRUFBU3NLLE9BQU87VUFDOUU5bEIsU0FBQSxFQUFXO1VBQ1hDLEtBQUEsRUFBT3dsQixHQUFBLENBQUl6Z0IsS0FBQSxDQUFNL0UsS0FBQSxFQUFPK0UsS0FBQSxDQUFNOUUsU0FBQSxHQUFZMmIsSUFBQSxDQUFLTCxPQUFBLEdBQVVLLElBQUEsQ0FBS0osT0FBQSxFQUFTcUssT0FBTztVQUM5RTVsQixTQUFBLEVBQVc7OztNQU1mLFNBQVNzbUIsaUJBQWtCak4sR0FBQSxFQUF1QjtRQUNoRCxNQUFNelcsS0FBQSxHQUFReVcsR0FBQSxDQUFJM1EsS0FBQSxDQUFNOUYsS0FBQTtRQUN4QixPQUFPQSxLQUFBLENBQU1xakIsU0FBQSxHQUFZO1VBQ3ZCLEdBQUc1TSxHQUFBO1VBQ0gzUSxLQUFBLEVBQU87WUFDTDlGLEtBQUE7WUFDQWtDLEtBQUEsRUFBT3VoQixjQUFBLENBQWVoTixHQUFBLENBQUkzUSxLQUFBLENBQU01RCxLQUFBLEVBQU9sQyxLQUFBLENBQU1nakIsT0FBTzs7WUFFcER2TSxHQUFBOztNQUdOLE1BQU05d0IsTUFBQSxHQUFzQjtRQUMxQixHQUFHcWlCLEtBQUE7UUFDSG5LLE1BQUEsRUFBUTtVQUNOLEdBQUdBLE1BQUE7VUFDSHlILFVBQUE7VUFDQXpHLE9BQUEsRUFBU2lrQixpQkFBQTtVQUNUdmQsaUJBQUEsRUFBbUJpZTs7UUFHckJwakIsTUFBTXFXLEdBQUEsRUFBRztVQUNQLE9BQU96TyxLQUFBLENBQU01SCxLQUFBLENBQU1zakIsZ0JBQUEsQ0FBaUJqTixHQUFHLENBQUM7O1FBRzFDM1EsTUFBTTJRLEdBQUEsRUFBRztVQUNQLE9BQU96TyxLQUFBLENBQU1sQyxLQUFBLENBQU00ZCxnQkFBQSxDQUFpQmpOLEdBQUcsQ0FBQzs7UUFHMUNoUixXQUFXZ1IsR0FBQSxFQUFHO1VBQ1osTUFBTTtZQUFDdU0sT0FBQTtZQUFTSyxTQUFBO1lBQVdEO1VBQVMsSUFBSzNNLEdBQUEsQ0FBSTNRLEtBQUEsQ0FBTTlGLEtBQUE7VUFDbkQsSUFBSSxDQUFDcWpCLFNBQUEsRUFBVyxPQUFPcmIsS0FBQSxDQUFNdkMsVUFBQSxDQUFXZ1IsR0FBRztVQUUzQyxTQUFTa04sb0JBQW9CdmQsTUFBQSxFQUFvQjtZQUMvQyxTQUFTd2QsVUFBV25oQyxHQUFBLEVBQVM7Y0FDM0JBLEdBQUEsSUFBTyxPQUNMMmpCLE1BQUEsQ0FBT1MsUUFBQSxDQUFTOGIsR0FBQSxDQUFJbGdDLEdBQUEsRUFBS2cwQixHQUFBLENBQUk3VixPQUFBLEdBQVVtWSxJQUFBLENBQUtKLE9BQUEsR0FBVUksSUFBQSxDQUFLTCxPQUFBLEVBQVNzSyxPQUFPLENBQUMsSUFDNUV2TSxHQUFBLENBQUk1USxNQUFBLEdBQ0ZPLE1BQUEsQ0FBT1MsUUFBQSxDQUNMVCxNQUFBLENBQU8zakIsR0FBQSxDQUFJZ0MsS0FBQSxDQUFNLEdBQUcyK0IsU0FBUyxFQUMxQjE3QixNQUFBLENBQU8rdUIsR0FBQSxDQUFJN1YsT0FBQSxHQUNSbVksSUFBQSxDQUFLTCxPQUFBLEdBQ0xLLElBQUEsQ0FBS0osT0FBQSxFQUFTcUssT0FBTyxDQUFDLElBRTlCNWMsTUFBQSxDQUFPUyxRQUFBLENBQVE7O1lBRXJCLE1BQU1nZCxhQUFBLEdBQWdCNWhDLE1BQUEsQ0FBT2tDLE1BQUEsQ0FBT2lpQixNQUFBLEVBQVE7Y0FDMUNTLFFBQUEsRUFBVTtnQkFBQ2pqQixLQUFBLEVBQU9nZ0M7Y0FBUztjQUMzQnZNLGtCQUFBLEVBQW9CO2dCQUNsQnp6QixNQUFNbkIsR0FBQSxFQUFVcWhDLFdBQUEsRUFBZTtrQkFDN0IxZCxNQUFBLENBQU9pUixrQkFBQSxDQUFtQnNMLEdBQUEsQ0FBSWxnQyxHQUFBLEVBQUtzMkIsSUFBQSxDQUFLSixPQUFBLEVBQVNxSyxPQUFPLEdBQUdjLFdBQVU7OztjQUd6RXhlLFVBQUEsRUFBWTtnQkFDVjdoQixJQUFBLEVBQUc7a0JBQ0QsT0FBTzJpQixNQUFBLENBQU9kLFVBQUE7OztjQUdsQjdpQixHQUFBLEVBQUs7Z0JBQ0hnQixJQUFBLEVBQUc7a0JBQ0QsTUFBTWhCLEdBQUEsR0FBTTJqQixNQUFBLENBQU8zakIsR0FBQTtrQkFDbkIsT0FBTzJnQyxTQUFBLEtBQWMsSUFDbkIzZ0MsR0FBQSxDQUFJLEtBQ0pBLEdBQUEsQ0FBSWdDLEtBQUEsQ0FBTSxHQUFHMitCLFNBQVM7OztjQUc1QngvQixLQUFBLEVBQU87Z0JBQ0xILElBQUEsRUFBRztrQkFDRCxPQUFPMmlCLE1BQUEsQ0FBT3hpQixLQUFBOzs7YUFHbkI7WUFDRCxPQUFPaWdDLGFBQUE7O1VBR1QsT0FBTzdiLEtBQUEsQ0FBTXZDLFVBQUEsQ0FBV2llLGdCQUFBLENBQWlCak4sR0FBRyxDQUFDLEVBQzFDdG9CLElBQUEsQ0FBS2lZLE1BQUEsSUFBVUEsTUFBQSxJQUFVdWQsbUJBQUEsQ0FBb0J2ZCxNQUFNLENBQUM7OztNQUczRCxPQUFPemdCLE1BQUE7OztBQUdiO0FBRU8sSUFBTW8rQixzQkFBQSxHQUE4QztFQUN6RC81QixLQUFBLEVBQU87RUFDUE0sSUFBQSxFQUFNO0VBQ04wNUIsS0FBQSxFQUFPO0VBQ1A3L0IsTUFBQSxFQUFReStCOztTQzFMTXFCLGNBQWNyOEIsQ0FBQSxFQUFRM0MsQ0FBQSxFQUFRb0IsRUFBQSxFQUFVNjlCLElBQUEsRUFBYTtFQUVuRTc5QixFQUFBLEdBQUtBLEVBQUEsSUFBTTtFQUNYNjlCLElBQUEsR0FBT0EsSUFBQSxJQUFRO0VBQ2ZsaUMsSUFBQSxDQUFLNEYsQ0FBQyxFQUFFcEYsT0FBQSxDQUFTTyxJQUFBLElBQUk7SUFDbkIsSUFBSSxDQUFDRCxNQUFBLENBQU9tQyxDQUFBLEVBQUdsQyxJQUFJLEdBQUc7TUFFcEJzRCxFQUFBLENBQUc2OUIsSUFBQSxHQUFPbmhDLElBQUEsSUFBUTtXQUNiO01BQ0wsSUFBSW9oQyxFQUFBLEdBQUt2OEIsQ0FBQSxDQUFFN0UsSUFBQTtRQUNUcWhDLEVBQUEsR0FBS24vQixDQUFBLENBQUVsQyxJQUFBO01BQ1QsSUFBSSxPQUFPb2hDLEVBQUEsS0FBTyxZQUFZLE9BQU9DLEVBQUEsS0FBTyxZQUFZRCxFQUFBLElBQU1DLEVBQUEsRUFBSTtRQUNoRSxNQUFNQyxVQUFBLEdBQWExN0IsV0FBQSxDQUFZdzdCLEVBQUU7UUFDakMsTUFBTUcsVUFBQSxHQUFhMzdCLFdBQUEsQ0FBWXk3QixFQUFFO1FBRWpDLElBQUlDLFVBQUEsS0FBZUMsVUFBQSxFQUFZO1VBQzdCaitCLEVBQUEsQ0FBRzY5QixJQUFBLEdBQU9uaEMsSUFBQSxJQUFRa0MsQ0FBQSxDQUFFbEMsSUFBQTttQkFDWHNoQyxVQUFBLEtBQWUsVUFBVTtVQUVsQ0osYUFBQSxDQUFjRSxFQUFBLEVBQUlDLEVBQUEsRUFBSS85QixFQUFBLEVBQUk2OUIsSUFBQSxHQUFPbmhDLElBQUEsR0FBTyxHQUFHO21CQUNsQ29oQyxFQUFBLEtBQU9DLEVBQUEsRUFBSTtVQUtwQi85QixFQUFBLENBQUc2OUIsSUFBQSxHQUFPbmhDLElBQUEsSUFBUWtDLENBQUEsQ0FBRWxDLElBQUE7O2lCQUVib2hDLEVBQUEsS0FBT0MsRUFBQSxFQUFJLzlCLEVBQUEsQ0FBRzY5QixJQUFBLEdBQU9uaEMsSUFBQSxJQUFRa0MsQ0FBQSxDQUFFbEMsSUFBQTs7R0FFN0M7RUFDRGYsSUFBQSxDQUFLaUQsQ0FBQyxFQUFFekMsT0FBQSxDQUFTTyxJQUFBLElBQUk7SUFDbkIsSUFBSSxDQUFDRCxNQUFBLENBQU84RSxDQUFBLEVBQUc3RSxJQUFJLEdBQUc7TUFDcEJzRCxFQUFBLENBQUc2OUIsSUFBQSxHQUFPbmhDLElBQUEsSUFBUWtDLENBQUEsQ0FBRWxDLElBQUE7O0dBRXZCO0VBQ0QsT0FBT3NELEVBQUE7QUFDVDtTQzlCZ0JrK0IsaUJBQ2RqZixVQUFBLEVBQ0FtUixHQUFBLEVBQWlJO0VBR2pJLElBQUlBLEdBQUEsQ0FBSXpaLElBQUEsS0FBUyxVQUFVLE9BQU95WixHQUFBLENBQUl6MEIsSUFBQTtFQUN0QyxPQUFPeTBCLEdBQUEsQ0FBSXowQixJQUFBLElBQVF5MEIsR0FBQSxDQUFJdGlCLE1BQUEsQ0FBTzdNLEdBQUEsQ0FBSWdlLFVBQUEsQ0FBV2lGLFVBQVU7QUFDekQ7QUNLTyxJQUFNaWEsZUFBQSxHQUF1QztFQUNsRHg2QixLQUFBLEVBQU87RUFDUE0sSUFBQSxFQUFNO0VBQ04wNUIsS0FBQSxFQUFPO0VBQ1A3L0IsTUFBQSxFQUFTc2dDLFFBQUEsS0FBc0I7SUFDN0IsR0FBR0EsUUFBQTtJQUNIemMsTUFBTXRLLFNBQUEsRUFBaUI7TUFDckIsTUFBTWduQixTQUFBLEdBQVlELFFBQUEsQ0FBU3pjLEtBQUEsQ0FBTXRLLFNBQVM7TUFDMUMsTUFBTTtRQUFDNEg7TUFBVSxJQUFJb2YsU0FBQSxDQUFVN21CLE1BQUE7TUFFL0IsTUFBTThtQixlQUFBLEdBQStCO1FBQ25DLEdBQUdELFNBQUE7UUFDSG5qQixPQUFPa1YsR0FBQSxFQUFHO1VBQ1IsTUFBTW1PLE9BQUEsR0FBVXp6QixHQUFBLENBQUlnSyxLQUFBO1VBR3BCLE1BQU07WUFBQzBwQixRQUFBO1lBQVVDLFFBQUE7WUFBVUM7VUFBUSxJQUFJSCxPQUFBLENBQVE1YyxLQUFBLENBQU10SyxTQUFTLEVBQUVXLElBQUE7VUFDaEUsUUFBUW9ZLEdBQUEsQ0FBSXpaLElBQUE7aUJBQ0w7Y0FDSCxJQUFJOG5CLFFBQUEsQ0FBU3ZtQixJQUFBLEtBQVNyUixHQUFBLEVBQUs7Y0FDM0IsT0FBTzAzQixPQUFBLENBQVEvdUIsUUFBQSxDQUFTLGFBQWEsTUFBSW12QixjQUFBLENBQWV2TyxHQUFHLEdBQUcsSUFBSTtpQkFDL0Q7Y0FDSCxJQUFJcU8sUUFBQSxDQUFTdm1CLElBQUEsS0FBU3JSLEdBQUEsSUFBTzYzQixRQUFBLENBQVN4bUIsSUFBQSxLQUFTclIsR0FBQSxFQUFLO2NBQ3BELE9BQU8wM0IsT0FBQSxDQUFRL3VCLFFBQUEsQ0FBUyxhQUFhLE1BQUltdkIsY0FBQSxDQUFldk8sR0FBRyxHQUFHLElBQUk7aUJBQy9EO2NBQ0gsSUFBSW9PLFFBQUEsQ0FBU3RtQixJQUFBLEtBQVNyUixHQUFBLEVBQUs7Y0FDM0IsT0FBTzAzQixPQUFBLENBQVEvdUIsUUFBQSxDQUFTLGFBQWEsTUFBSW12QixjQUFBLENBQWV2TyxHQUFHLEdBQUcsSUFBSTtpQkFDL0Q7Y0FDSCxJQUFJb08sUUFBQSxDQUFTdG1CLElBQUEsS0FBU3JSLEdBQUEsRUFBSztjQUMzQixPQUFPMDNCLE9BQUEsQ0FBUS91QixRQUFBLENBQVMsYUFBYSxNQUFJb3ZCLFdBQUEsQ0FBWXhPLEdBQUcsR0FBRyxJQUFJOztVQUduRSxPQUFPaU8sU0FBQSxDQUFVbmpCLE1BQUEsQ0FBT2tWLEdBQUc7VUFHM0IsU0FBU3VPLGVBQWVuTyxJQUFBLEVBQThEO1lBQ3BGLE1BQU1xTyxRQUFBLEdBQVUvekIsR0FBQSxDQUFJZ0ssS0FBQTtZQUNwQixNQUFNaUgsS0FBQSxHQUFPeVUsSUFBQSxDQUFJNzBCLElBQUEsSUFBUXVpQyxnQkFBQSxDQUFpQmpmLFVBQUEsRUFBWXVSLElBQUc7WUFDekQsSUFBSSxDQUFDelUsS0FBQSxFQUFNLE1BQU0sSUFBSWxkLEtBQUEsQ0FBTSxjQUFjO1lBRXpDMnhCLElBQUEsR0FBTUEsSUFBQSxDQUFJN1osSUFBQSxLQUFTLFNBQVM2WixJQUFBLENBQUk3WixJQUFBLEtBQVMsUUFDdkM7Y0FBQyxHQUFHNlosSUFBQTtjQUFLNzBCLElBQUEsRUFBQW9nQjtZQUFJLElBQ2I7Y0FBQyxHQUFHeVU7WUFBRztZQUNULElBQUlBLElBQUEsQ0FBSTdaLElBQUEsS0FBUyxVQUFVNlosSUFBQSxDQUFJMWlCLE1BQUEsR0FBUyxDQUFDLEdBQUcwaUIsSUFBQSxDQUFJMWlCLE1BQU07WUFDdEQsSUFBSTBpQixJQUFBLENBQUk3MEIsSUFBQSxFQUFNNjBCLElBQUEsQ0FBSTcwQixJQUFBLEdBQU8sQ0FBQyxHQUFHNjBCLElBQUEsQ0FBSTcwQixJQUFJO1lBRXJDLE9BQU9takMsaUJBQUEsQ0FBa0JULFNBQUEsRUFBVzdOLElBQUEsRUFBS3pVLEtBQUksRUFBRWpVLElBQUEsQ0FBTWkzQixjQUFBLElBQWM7Y0FDakUsTUFBTUMsUUFBQSxHQUFXampCLEtBQUEsQ0FBSzlhLEdBQUEsQ0FBSSxDQUFDN0UsR0FBQSxFQUFLb0QsQ0FBQSxLQUFDO2dCQUMvQixNQUFNeS9CLGFBQUEsR0FBZ0JGLGNBQUEsQ0FBZXYvQixDQUFBO2dCQUNyQyxNQUFNcWQsR0FBQSxHQUFNO2tCQUFFbGQsT0FBQSxFQUFTO2tCQUFNNEgsU0FBQSxFQUFXO2dCQUFJO2dCQUM1QyxJQUFJaXBCLElBQUEsQ0FBSTdaLElBQUEsS0FBUyxVQUFVO2tCQUV6QjZuQixRQUFBLENBQVN0bUIsSUFBQSxDQUFLdmIsSUFBQSxDQUFLa2dCLEdBQUEsRUFBS3pnQixHQUFBLEVBQUs2aUMsYUFBQSxFQUFlSixRQUFPOzJCQUMxQ3JPLElBQUEsQ0FBSTdaLElBQUEsS0FBUyxTQUFTc29CLGFBQUEsS0FBa0IsUUFBVztrQkFFNUQsTUFBTUMsbUJBQUEsR0FBc0JULFFBQUEsQ0FBU3ZtQixJQUFBLENBQUt2YixJQUFBLENBQUtrZ0IsR0FBQSxFQUFLemdCLEdBQUEsRUFBS28wQixJQUFBLENBQUkxaUIsTUFBQSxDQUFPdE8sQ0FBQSxHQUFJcS9CLFFBQU87a0JBQy9FLElBQUl6aUMsR0FBQSxJQUFPLFFBQVE4aUMsbUJBQUEsSUFBdUIsTUFBTTtvQkFDOUM5aUMsR0FBQSxHQUFNOGlDLG1CQUFBO29CQUNOMU8sSUFBQSxDQUFJNzBCLElBQUEsQ0FBSzZELENBQUEsSUFBS3BELEdBQUE7b0JBQ2QsSUFBSSxDQUFDNmlCLFVBQUEsQ0FBV2dGLFFBQUEsRUFBVTtzQkFDeEJ4akIsWUFBQSxDQUFhK3ZCLElBQUEsQ0FBSTFpQixNQUFBLENBQU90TyxDQUFBLEdBQUl5ZixVQUFBLENBQVdsZixPQUFBLEVBQVMzRCxHQUFHOzs7dUJBR2xEO2tCQUVMLE1BQU0raUMsVUFBQSxHQUFhdkIsYUFBQSxDQUFjcUIsYUFBQSxFQUFlek8sSUFBQSxDQUFJMWlCLE1BQUEsQ0FBT3RPLENBQUEsQ0FBRTtrQkFDN0QsTUFBTTQvQixpQkFBQSxHQUFvQlYsUUFBQSxDQUFTeG1CLElBQUEsQ0FBS3ZiLElBQUEsQ0FBS2tnQixHQUFBLEVBQUtzaUIsVUFBQSxFQUFZL2lDLEdBQUEsRUFBSzZpQyxhQUFBLEVBQWVKLFFBQU87a0JBQ3pGLElBQUlPLGlCQUFBLEVBQW1CO29CQUNyQixNQUFNQyxjQUFBLEdBQWlCN08sSUFBQSxDQUFJMWlCLE1BQUEsQ0FBT3RPLENBQUE7b0JBQ2xDNUQsTUFBQSxDQUFPRCxJQUFBLENBQUt5akMsaUJBQWlCLEVBQUVqakMsT0FBQSxDQUFRNEQsT0FBQSxJQUFPO3NCQUM1QyxJQUFJdEQsTUFBQSxDQUFPNGlDLGNBQUEsRUFBZ0J0L0IsT0FBTyxHQUFHO3dCQUVuQ3MvQixjQUFBLENBQWV0L0IsT0FBQSxJQUFXcS9CLGlCQUFBLENBQWtCci9CLE9BQUE7NkJBQ3ZDO3dCQUVMVSxZQUFBLENBQWE0K0IsY0FBQSxFQUFnQnQvQixPQUFBLEVBQVNxL0IsaUJBQUEsQ0FBa0JyL0IsT0FBQSxDQUFROztxQkFFbkU7OztnQkFHTCxPQUFPOGMsR0FBQTtlQUNSO2NBQ0QsT0FBT3doQixTQUFBLENBQVVuakIsTUFBQSxDQUFPc1YsSUFBRyxFQUFFMW9CLElBQUEsQ0FBSyxDQUFDO2dCQUFDM0MsUUFBQTtnQkFBVTBKLE9BQUE7Z0JBQVNzTSxXQUFBO2dCQUFhQztjQUFVLE1BQUM7Z0JBQzdFLFNBQVM1YixDQUFBLEdBQUUsR0FBR0EsQ0FBQSxHQUFFdWMsS0FBQSxDQUFLN2IsTUFBQSxFQUFRLEVBQUVWLENBQUEsRUFBRztrQkFDaEMsTUFBTWlaLE9BQUEsR0FBVTVKLE9BQUEsR0FBVUEsT0FBQSxDQUFRclAsQ0FBQSxJQUFLdWMsS0FBQSxDQUFLdmMsQ0FBQTtrQkFDNUMsTUFBTXFkLEdBQUEsR0FBTW1pQixRQUFBLENBQVN4L0IsQ0FBQTtrQkFDckIsSUFBSWlaLE9BQUEsSUFBVyxNQUFNO29CQUNuQm9FLEdBQUEsQ0FBSWxkLE9BQUEsSUFBV2tkLEdBQUEsQ0FBSWxkLE9BQUEsQ0FBUXdGLFFBQUEsQ0FBUzNGLENBQUEsQ0FBRTt5QkFDakM7b0JBQ0xxZCxHQUFBLENBQUl0VixTQUFBLElBQWFzVixHQUFBLENBQUl0VixTQUFBLENBQ25CaXBCLElBQUEsQ0FBSTdaLElBQUEsS0FBUyxTQUFTb29CLGNBQUEsQ0FBZXYvQixDQUFBLElBQ25DZ3hCLElBQUEsQ0FBSTFpQixNQUFBLENBQU90TyxDQUFBLElBQ1hpWixPOzs7Z0JBSVIsT0FBTztrQkFBQ3RULFFBQUE7a0JBQVUwSixPQUFBO2tCQUFTc00sV0FBQTtrQkFBYUM7Z0JBQVU7ZUFDbkQsRUFBRXhPLEtBQUEsQ0FBTThVLEtBQUEsSUFBSztnQkFDWnNkLFFBQUEsQ0FBUzdpQyxPQUFBLENBQVEwZ0IsR0FBQSxJQUFPQSxHQUFBLENBQUlsZCxPQUFBLElBQVdrZCxHQUFBLENBQUlsZCxPQUFBLENBQVEraEIsS0FBSyxDQUFDO2dCQUN6RCxPQUFPM2xCLE9BQUEsQ0FBUXVRLE1BQUEsQ0FBT29WLEtBQUs7ZUFDNUI7YUFDRjs7VUFHSCxTQUFTa2QsWUFBWXBPLElBQUEsRUFBNkI7WUFDaEQsT0FBTzhPLGVBQUEsQ0FBZ0I5TyxJQUFBLENBQUkxYixLQUFBLEVBQU8wYixJQUFBLENBQUkzVSxLQUFBLEVBQU8sR0FBSzs7VUFHcEQsU0FBU3lqQixnQkFBZ0J4cUIsS0FBQSxFQUEwQitHLEtBQUEsRUFBdUIxTCxLQUFBLEVBQWE7WUFFckYsT0FBT2t1QixTQUFBLENBQVU1ZSxLQUFBLENBQU07Y0FBQzNLLEtBQUE7Y0FBT2hILE1BQUEsRUFBUTtjQUFPMlIsS0FBQSxFQUFPO2dCQUFDOUYsS0FBQSxFQUFPc0YsVUFBQTtnQkFBWXBEO2NBQUs7Y0FBRzFMO1lBQUssQ0FBQyxFQUN0RnJJLElBQUEsQ0FBSyxDQUFDO2NBQUN4STtZQUFNLE1BQUM7Y0FHYixPQUFPcS9CLGNBQUEsQ0FBZTtnQkFBQ2hvQixJQUFBLEVBQU07Z0JBQVVoYixJQUFBLEVBQU0yRCxNQUFBO2dCQUFRd1Y7Y0FBSyxDQUFDLEVBQUVoTixJQUFBLENBQUtSLEdBQUEsSUFBRztnQkFDbkUsSUFBSUEsR0FBQSxDQUFJNlQsV0FBQSxHQUFjLEdBQUcsT0FBT3BmLE9BQUEsQ0FBUXVRLE1BQUEsQ0FBT2hGLEdBQUEsQ0FBSW5DLFFBQUEsQ0FBUyxFQUFFO2dCQUM5RCxJQUFJN0YsTUFBQSxDQUFPWSxNQUFBLEdBQVNpUSxLQUFBLEVBQU87a0JBQ3pCLE9BQU87b0JBQUNoTCxRQUFBLEVBQVU7b0JBQUlnVyxXQUFBLEVBQWE7b0JBQUdDLFVBQUEsRUFBWTtrQkFBUzt1QkFDdEQ7a0JBQ0wsT0FBT2trQixlQUFBLENBQWdCeHFCLEtBQUEsRUFBTztvQkFBQyxHQUFHK0csS0FBQTtvQkFBT2pGLEtBQUEsRUFBT3RYLE1BQUEsQ0FBT0EsTUFBQSxDQUFPWSxNQUFBLEdBQVM7b0JBQUkyVyxTQUFBLEVBQVc7a0JBQUksR0FBRzFHLEtBQUs7O2VBRXJHO2FBQ0Y7Ozs7TUFNUCxPQUFPbXVCLGVBQUE7Ozs7QUFLYixTQUFTUSxrQkFDUG5kLEtBQUEsRUFDQXlPLEdBQUEsRUFDQW1QLGFBQUEsRUFBb0I7RUFFcEIsT0FBT25QLEdBQUEsQ0FBSXpaLElBQUEsS0FBUyxRQUNoQjVhLE9BQUEsQ0FBUXlNLE9BQUEsQ0FBUSxFQUFFLElBQ2xCbVosS0FBQSxDQUFNM0YsT0FBQSxDQUFRO0lBQUVsSCxLQUFBLEVBQU9zYixHQUFBLENBQUl0YixLQUFBO0lBQU9uWixJQUFBLEVBQU00akMsYUFBQTtJQUFlL2EsS0FBQSxFQUFPO0VBQVcsQ0FBRTtBQUNqRjtTQzNKZ0JnYix3QkFDZHpqQixLQUFBLEVBQ0F5SSxLQUFBLEVBQ0ExQyxLQUFBLEVBQWU7RUFFZixJQUFJO0lBQ0YsSUFBSSxDQUFDMEMsS0FBQSxFQUFPLE9BQU87SUFDbkIsSUFBSUEsS0FBQSxDQUFNN29CLElBQUEsQ0FBS3VFLE1BQUEsR0FBUzZiLEtBQUEsQ0FBSzdiLE1BQUEsRUFBUSxPQUFPO0lBQzVDLE1BQU1aLE1BQUEsR0FBZ0I7SUFJdEIsU0FBU0UsQ0FBQSxHQUFJLEdBQUdvM0IsQ0FBQSxHQUFJLEdBQUdwM0IsQ0FBQSxHQUFJZ2xCLEtBQUEsQ0FBTTdvQixJQUFBLENBQUt1RSxNQUFBLElBQVUwMkIsQ0FBQSxHQUFJN2EsS0FBQSxDQUFLN2IsTUFBQSxFQUFRLEVBQUVWLENBQUEsRUFBRztNQUNwRSxJQUFJOFosR0FBQSxDQUFJa0wsS0FBQSxDQUFNN29CLElBQUEsQ0FBSzZELENBQUEsR0FBSXVjLEtBQUEsQ0FBSzZhLENBQUEsQ0FBRSxNQUFNLEdBQUc7TUFDdkN0M0IsTUFBQSxDQUFPYyxJQUFBLENBQUswaEIsS0FBQSxHQUFROWYsU0FBQSxDQUFVd2lCLEtBQUEsQ0FBTTFXLE1BQUEsQ0FBT3RPLENBQUEsQ0FBRSxJQUFJZ2xCLEtBQUEsQ0FBTTFXLE1BQUEsQ0FBT3RPLENBQUEsQ0FBRTtNQUNoRSxFQUFFbzNCLENBQUE7O0lBR0osT0FBT3QzQixNQUFBLENBQU9ZLE1BQUEsS0FBVzZiLEtBQUEsQ0FBSzdiLE1BQUEsR0FBU1osTUFBQSxHQUFTO1dBQ2hEa2MsRUFBQTtJQUNBLE9BQU87O0FBRVg7QUFFTyxJQUFNaWtCLDZCQUFBLEdBQW9EO0VBQy9EOTdCLEtBQUEsRUFBTztFQUNQZzZCLEtBQUEsRUFBTztFQUNQNy9CLE1BQUEsRUFBU2lhLElBQUEsSUFBSTtJQUNYLE9BQU87TUFDTDRKLEtBQUEsRUFBUXRLLFNBQUEsSUFBUztRQUNmLE1BQU1zSyxLQUFBLEdBQVE1SixJQUFBLENBQUs0SixLQUFBLENBQU10SyxTQUFTO1FBQ2xDLE9BQU87VUFDTCxHQUFHc0ssS0FBQTtVQUNIM0YsT0FBQSxFQUFVb1UsR0FBQSxJQUFHO1lBQ1gsSUFBSSxDQUFDQSxHQUFBLENBQUk1TCxLQUFBLEVBQU87Y0FDZCxPQUFPN0MsS0FBQSxDQUFNM0YsT0FBQSxDQUFRb1UsR0FBRzs7WUFFMUIsTUFBTXNQLFlBQUEsR0FBZUYsdUJBQUEsQ0FDbkJwUCxHQUFBLENBQUl6MEIsSUFBQSxFQUNKeTBCLEdBQUEsQ0FBSXRiLEtBQUEsQ0FBTSxXQUNWc2IsR0FBQSxDQUFJNUwsS0FBQSxLQUFVLE9BQU87WUFFdkIsSUFBSWtiLFlBQUEsRUFBYztjQUNoQixPQUFPejBCLFlBQUEsQ0FBUXpDLE9BQUEsQ0FBUWszQixZQUFZOztZQUVyQyxPQUFPL2QsS0FBQSxDQUFNM0YsT0FBQSxDQUFRb1UsR0FBRyxFQUFFdG9CLElBQUEsQ0FBTVIsR0FBQSxJQUFHO2NBQ2pDOG9CLEdBQUEsQ0FBSXRiLEtBQUEsQ0FBTSxZQUFZO2dCQUNwQm5aLElBQUEsRUFBTXkwQixHQUFBLENBQUl6MEIsSUFBQTtnQkFDVm1TLE1BQUEsRUFBUXNpQixHQUFBLENBQUk1TCxLQUFBLEtBQVUsVUFBVXhpQixTQUFBLENBQVVzRixHQUFHLElBQUlBOztjQUVuRCxPQUFPQSxHQUFBO2FBQ1I7O1VBRUg0VCxNQUFBLEVBQVNrVixHQUFBLElBQUc7WUFFVixJQUFJQSxHQUFBLENBQUl6WixJQUFBLEtBQVMsT0FBT3laLEdBQUEsQ0FBSXRiLEtBQUEsQ0FBTSxZQUFZO1lBQzlDLE9BQU82TSxLQUFBLENBQU16RyxNQUFBLENBQU9rVixHQUFHOzs7Ozs7O0FDN0NuQyxTQUFTdVAsYUFBYUMsSUFBQSxFQUE2RDtFQUNqRixPQUFPLEVBQUUsVUFBVUEsSUFBQTtBQUNyQjtJQUlhL2tDLFFBQUEsR0FBVyxTQUFBQSxDQUFTZ2xDLFVBQUEsRUFBaUJDLEVBQUEsRUFBUTtFQUN4RCxJQUFJLE1BQU07SUFFUjlqQyxNQUFBLENBQU8sTUFBTWdILFNBQUEsQ0FBVTlDLE1BQUEsR0FBUztNQUFDNi9CLENBQUEsRUFBRTtNQUFHcGlDLElBQUEsRUFBTWtpQyxVQUFBO01BQVlDLEVBQUEsRUFBSTk4QixTQUFBLENBQVU5QyxNQUFBLEdBQVMsSUFBSTQvQixFQUFBLEdBQUtEO0lBQVUsSUFBSTtNQUFDRSxDQUFBLEVBQUU7SUFBQyxDQUFDO1NBQ3RHO0lBRUwsTUFBTS8vQixFQUFBLEdBQUssSUFBSW5GLFFBQUEsQ0FBUTtJQUN2QixJQUFJZ2xDLFVBQUEsSUFBZSxPQUFPQSxVQUFBLEVBQWE7TUFDckM3akMsTUFBQSxDQUFPZ0UsRUFBQSxFQUFJNi9CLFVBQVU7O0lBRXZCLE9BQU83L0IsRUFBQTs7QUFFWDtBQUVBcEQsS0FBQSxDQUFNL0IsUUFBQSxDQUFTZ0QsU0FBQSxFQUFXO0VBQ3hCa2QsSUFBSWlsQixRQUFBLEVBQWlFO0lBQ25FL2tDLFdBQUEsQ0FBWSxNQUFNK2tDLFFBQVE7SUFDMUIsT0FBTzs7RUFFVEMsT0FBTzdqQyxHQUFBLEVBQWtCO0lBQ3ZCOGpDLFFBQUEsQ0FBUyxNQUFNOWpDLEdBQUEsRUFBS0EsR0FBRztJQUN2QixPQUFPOztFQUVUK2pDLFFBQVFwa0IsS0FBQSxFQUFxQjtJQUMzQkEsS0FBQSxDQUFLNWYsT0FBQSxDQUFRQyxHQUFBLElBQU84akMsUUFBQSxDQUFTLE1BQU05akMsR0FBQSxFQUFLQSxHQUFHLENBQUM7SUFDNUMsT0FBTzs7RUFHVCxDQUFDb0csY0FBQSxJQUFlO0lBQ2QsT0FBTzQ5QixtQkFBQSxDQUFvQixJQUFJOztDQUVsQztBQUVELFNBQVNGLFNBQVNuVixNQUFBLEVBQXNCcHRCLElBQUEsRUFBcUJtaUMsRUFBQSxFQUFpQjtFQUM1RSxNQUFNbEwsSUFBQSxHQUFPdGIsR0FBQSxDQUFJM2IsSUFBQSxFQUFNbWlDLEVBQUU7RUFHekIsSUFBSWovQixLQUFBLENBQU0rekIsSUFBSSxHQUFHO0VBR2pCLElBQUlBLElBQUEsR0FBTyxHQUFHLE1BQU1wdUIsVUFBQSxDQUFVO0VBRTlCLElBQUltNUIsWUFBQSxDQUFhNVUsTUFBTSxHQUFHLE9BQU8vdUIsTUFBQSxDQUFPK3VCLE1BQUEsRUFBUTtJQUFFcHRCLElBQUE7SUFBTW1pQyxFQUFBO0lBQUlDLENBQUEsRUFBRztFQUFDLENBQUU7RUFDbEUsTUFBTU0sSUFBQSxHQUFPdFYsTUFBQSxDQUFPOXFCLENBQUE7RUFDcEIsTUFBTXFnQyxLQUFBLEdBQVF2VixNQUFBLENBQU93VixDQUFBO0VBQ3JCLElBQUlqbkIsR0FBQSxDQUFJd21CLEVBQUEsRUFBSS9VLE1BQUEsQ0FBT3B0QixJQUFJLElBQUksR0FBRztJQUM1QjBpQyxJQUFBLEdBQ0lILFFBQUEsQ0FBU0csSUFBQSxFQUFNMWlDLElBQUEsRUFBTW1pQyxFQUFFLElBQ3RCL1UsTUFBQSxDQUFPOXFCLENBQUEsR0FBSTtNQUFFdEMsSUFBQTtNQUFNbWlDLEVBQUE7TUFBSUMsQ0FBQSxFQUFHO01BQUc5L0IsQ0FBQSxFQUFHO01BQU1zZ0MsQ0FBQSxFQUFHO0lBQUk7SUFDbEQsT0FBT0MsU0FBQSxDQUFVelYsTUFBTTs7RUFFekIsSUFBSXpSLEdBQUEsQ0FBSTNiLElBQUEsRUFBTW90QixNQUFBLENBQU8rVSxFQUFFLElBQUksR0FBRztJQUM1QlEsS0FBQSxHQUNJSixRQUFBLENBQVNJLEtBQUEsRUFBTzNpQyxJQUFBLEVBQU1taUMsRUFBRSxJQUN2Qi9VLE1BQUEsQ0FBT3dWLENBQUEsR0FBSTtNQUFFNWlDLElBQUE7TUFBTW1pQyxFQUFBO01BQUlDLENBQUEsRUFBRztNQUFHOS9CLENBQUEsRUFBRztNQUFNc2dDLENBQUEsRUFBRztJQUFJO0lBQ2xELE9BQU9DLFNBQUEsQ0FBVXpWLE1BQU07O0VBS3pCLElBQUl6UixHQUFBLENBQUkzYixJQUFBLEVBQU1vdEIsTUFBQSxDQUFPcHRCLElBQUksSUFBSSxHQUFHO0lBQzlCb3RCLE1BQUEsQ0FBT3B0QixJQUFBLEdBQU9BLElBQUE7SUFDZG90QixNQUFBLENBQU85cUIsQ0FBQSxHQUFJO0lBQ1g4cUIsTUFBQSxDQUFPZ1YsQ0FBQSxHQUFJTyxLQUFBLEdBQVFBLEtBQUEsQ0FBTVAsQ0FBQSxHQUFJLElBQUk7O0VBR25DLElBQUl6bUIsR0FBQSxDQUFJd21CLEVBQUEsRUFBSS9VLE1BQUEsQ0FBTytVLEVBQUUsSUFBSSxHQUFHO0lBQzFCL1UsTUFBQSxDQUFPK1UsRUFBQSxHQUFLQSxFQUFBO0lBQ1ovVSxNQUFBLENBQU93VixDQUFBLEdBQUk7SUFDWHhWLE1BQUEsQ0FBT2dWLENBQUEsR0FBSWhWLE1BQUEsQ0FBTzlxQixDQUFBLEdBQUk4cUIsTUFBQSxDQUFPOXFCLENBQUEsQ0FBRTgvQixDQUFBLEdBQUksSUFBSTs7RUFFekMsTUFBTVUsY0FBQSxHQUFpQixDQUFDMVYsTUFBQSxDQUFPd1YsQ0FBQTtFQUUvQixJQUFJRixJQUFBLElBQVEsQ0FBQ3RWLE1BQUEsQ0FBTzlxQixDQUFBLEVBQUc7SUFHckJoRixXQUFBLENBQVk4dkIsTUFBQSxFQUFRc1YsSUFBSTs7RUFHMUIsSUFBSUMsS0FBQSxJQUFTRyxjQUFBLEVBQWdCO0lBRzNCeGxDLFdBQUEsQ0FBWTh2QixNQUFBLEVBQVF1VixLQUFLOztBQUU3QjtTQUVnQnJsQyxZQUFZOHZCLE1BQUEsRUFBc0IyVixNQUFBLEVBQStEO0VBQy9HLFNBQVNDLGFBQ1BDLE9BQUEsRUFDQTtJQUFFampDLElBQUE7SUFBTW1pQyxFQUFBO0lBQUk3L0IsQ0FBQTtJQUFHc2dDO0VBQUMsR0FBNkY7SUFFN0dMLFFBQUEsQ0FBU1UsT0FBQSxFQUFRampDLElBQUEsRUFBTW1pQyxFQUFFO0lBQ3pCLElBQUk3L0IsQ0FBQSxFQUFHMGdDLFlBQUEsQ0FBYUMsT0FBQSxFQUFRM2dDLENBQUM7SUFDN0IsSUFBSXNnQyxDQUFBLEVBQUdJLFlBQUEsQ0FBYUMsT0FBQSxFQUFRTCxDQUFDOztFQUcvQixJQUFHLENBQUNaLFlBQUEsQ0FBYWUsTUFBTSxHQUFHQyxZQUFBLENBQWE1VixNQUFBLEVBQVEyVixNQUFNO0FBQ3ZEO1NBRWdCeGxDLGNBQ2QybEMsU0FBQSxFQUNBQyxTQUFBLEVBQXVCO0VBR3JCLE1BQU1DLEVBQUEsR0FBS1gsbUJBQUEsQ0FBb0JVLFNBQVM7RUFDeEMsSUFBSUUsV0FBQSxHQUFjRCxFQUFBLENBQUc5OUIsSUFBQSxDQUFJO0VBQ3pCLElBQUkrOUIsV0FBQSxDQUFZOTlCLElBQUEsRUFBTSxPQUFPO0VBQzdCLElBQUkzQixDQUFBLEdBQUl5L0IsV0FBQSxDQUFZempDLEtBQUE7RUFHcEIsTUFBTTBmLEVBQUEsR0FBS21qQixtQkFBQSxDQUFvQlMsU0FBUztFQUN4QyxJQUFJSSxXQUFBLEdBQWNoa0IsRUFBQSxDQUFHaGEsSUFBQSxDQUFLMUIsQ0FBQSxDQUFFNUQsSUFBSTtFQUNoQyxJQUFJaUIsQ0FBQSxHQUFJcWlDLFdBQUEsQ0FBWTFqQyxLQUFBO0VBRXBCLE9BQU8sQ0FBQ3lqQyxXQUFBLENBQVk5OUIsSUFBQSxJQUFRLENBQUMrOUIsV0FBQSxDQUFZLzlCLElBQUEsRUFBTTtJQUM3QyxJQUFJb1csR0FBQSxDQUFJMWEsQ0FBQSxDQUFHakIsSUFBQSxFQUFNNEQsQ0FBQSxDQUFFdStCLEVBQUUsS0FBSyxLQUFLeG1CLEdBQUEsQ0FBSTFhLENBQUEsQ0FBR2toQyxFQUFBLEVBQUl2K0IsQ0FBQSxDQUFFNUQsSUFBSSxLQUFLLEdBQUcsT0FBTztJQUMvRDJiLEdBQUEsQ0FBSS9YLENBQUEsQ0FBRTVELElBQUEsRUFBTWlCLENBQUEsQ0FBR2pCLElBQUksSUFBSSxJQUNsQjRELENBQUEsSUFBS3kvQixXQUFBLEdBQWNELEVBQUEsQ0FBRzk5QixJQUFBLENBQUtyRSxDQUFBLENBQUdqQixJQUFJLEdBQUdKLEtBQUEsR0FDckNxQixDQUFBLElBQUtxaUMsV0FBQSxHQUFjaGtCLEVBQUEsQ0FBR2hhLElBQUEsQ0FBSzFCLENBQUEsQ0FBRTVELElBQUksR0FBR0osS0FBQTs7RUFFN0MsT0FBTztBQUNUO1NBVWdCNmlDLG9CQUNkUixJQUFBLEVBQW1DO0VBRW5DLElBQUlqRyxLQUFBLEdBQStCZ0csWUFBQSxDQUFhQyxJQUFJLElBQUksT0FBTztJQUFFdjZCLENBQUEsRUFBRztJQUFHd2pCLENBQUEsRUFBRytXO0VBQUk7RUFFOUUsT0FBTztJQUNMMzhCLEtBQUs3RyxHQUFBLEVBQUk7TUFDUCxNQUFNOGtDLFdBQUEsR0FBY2wrQixTQUFBLENBQVU5QyxNQUFBLEdBQVM7TUFDdkMsT0FBT3k1QixLQUFBLEVBQU87UUFDWixRQUFRQSxLQUFBLENBQU10MEIsQ0FBQTtlQUNQO1lBR0hzMEIsS0FBQSxDQUFNdDBCLENBQUEsR0FBSTtZQUNWLElBQUk2N0IsV0FBQSxFQUFhO2NBQ2YsT0FBT3ZILEtBQUEsQ0FBTTlRLENBQUEsQ0FBRTVvQixDQUFBLElBQUtxWixHQUFBLENBQUlsZCxHQUFBLEVBQUt1OUIsS0FBQSxDQUFNOVEsQ0FBQSxDQUFFbHJCLElBQUksSUFBSSxHQUMzQ2c4QixLQUFBLEdBQVE7Z0JBQUV3SCxFQUFBLEVBQUl4SCxLQUFBO2dCQUFPOVEsQ0FBQSxFQUFHOFEsS0FBQSxDQUFNOVEsQ0FBQSxDQUFFNW9CLENBQUE7Z0JBQUdvRixDQUFBLEVBQUc7Y0FBQzttQkFDcEM7Y0FDTCxPQUFPczBCLEtBQUEsQ0FBTTlRLENBQUEsQ0FBRTVvQixDQUFBLEVBQUcwNUIsS0FBQSxHQUFRO2dCQUFFd0gsRUFBQSxFQUFJeEgsS0FBQTtnQkFBTzlRLENBQUEsRUFBRzhRLEtBQUEsQ0FBTTlRLENBQUEsQ0FBRTVvQixDQUFBO2dCQUFHb0YsQ0FBQSxFQUFHO2NBQUM7O2VBR3hEO1lBRUhzMEIsS0FBQSxDQUFNdDBCLENBQUEsR0FBSTtZQUNWLElBQUksQ0FBQzY3QixXQUFBLElBQWU1bkIsR0FBQSxDQUFJbGQsR0FBQSxFQUFLdTlCLEtBQUEsQ0FBTTlRLENBQUEsQ0FBRWlYLEVBQUUsS0FBSyxHQUMxQyxPQUFPO2NBQUV2aUMsS0FBQSxFQUFPbzhCLEtBQUEsQ0FBTTlRLENBQUE7Y0FBRzNsQixJQUFBLEVBQU07WUFBSztlQUNuQztZQUVILElBQUl5MkIsS0FBQSxDQUFNOVEsQ0FBQSxDQUFFMFgsQ0FBQSxFQUFHO2NBQ2I1RyxLQUFBLENBQU10MEIsQ0FBQSxHQUFJO2NBQ1ZzMEIsS0FBQSxHQUFRO2dCQUFFd0gsRUFBQSxFQUFJeEgsS0FBQTtnQkFBTzlRLENBQUEsRUFBRzhRLEtBQUEsQ0FBTTlRLENBQUEsQ0FBRTBYLENBQUE7Z0JBQUdsN0IsQ0FBQSxFQUFHO2NBQUM7Y0FDdkM7O2VBR0M7WUFDSHMwQixLQUFBLEdBQVFBLEtBQUEsQ0FBTXdILEVBQUE7OztNQUdwQixPQUFPO1FBQUVqK0IsSUFBQSxFQUFNO01BQUk7OztBQUd6QjtBQUVBLFNBQVNzOUIsVUFBVXpWLE1BQUEsRUFBd0I7O0VBQ3pDLE1BQU02SixJQUFBLE1BQVFwWixFQUFBLEdBQUF1UCxNQUFBLENBQU93VixDQUFBLE1BQUMsUUFBQS9rQixFQUFBLHVCQUFBQSxFQUFBLENBQUV1a0IsQ0FBQSxLQUFLLFFBQU1xQixFQUFBLEdBQUFyVyxNQUFBLENBQU85cUIsQ0FBQSxNQUFDLFFBQUFtaEMsRUFBQSx1QkFBQUEsRUFBQSxDQUFFckIsQ0FBQSxLQUFLO0VBQ2xELE1BQU1RLENBQUEsR0FBSTNMLElBQUEsR0FBTyxJQUFJLE1BQU1BLElBQUEsR0FBTyxLQUFLLE1BQU07RUFDN0MsSUFBSTJMLENBQUEsRUFBRztJQXNCTCxNQUFNdGdDLENBQUEsR0FBSXNnQyxDQUFBLEtBQU0sTUFBTSxNQUFNO0lBQzVCLE1BQU1jLFNBQUEsR0FBWTtNQUFFLEdBQUd0VztJQUFNO0lBSTdCLE1BQU11VyxZQUFBLEdBQWV2VyxNQUFBLENBQU93VixDQUFBO0lBQzVCeFYsTUFBQSxDQUFPcHRCLElBQUEsR0FBTzJqQyxZQUFBLENBQWEzakMsSUFBQTtJQUMzQm90QixNQUFBLENBQU8rVSxFQUFBLEdBQUt3QixZQUFBLENBQWF4QixFQUFBO0lBQ3pCL1UsTUFBQSxDQUFPd1YsQ0FBQSxJQUFLZSxZQUFBLENBQWFmLENBQUE7SUFDekJjLFNBQUEsQ0FBVWQsQ0FBQSxJQUFLZSxZQUFBLENBQWFyaEMsQ0FBQTtJQUM1QjhxQixNQUFBLENBQU85cUIsQ0FBQSxJQUFLb2hDLFNBQUE7SUFDWkEsU0FBQSxDQUFVdEIsQ0FBQSxHQUFJd0IsWUFBQSxDQUFhRixTQUFTOztFQUV0Q3RXLE1BQUEsQ0FBT2dWLENBQUEsR0FBSXdCLFlBQUEsQ0FBYXhXLE1BQU07QUFDaEM7QUFFQSxTQUFTd1csYUFBYTtFQUFFaEIsQ0FBQTtFQUFHdGdDO0FBQUMsR0FBcUM7RUFDL0QsUUFBUXNnQyxDQUFBLEdBQUt0Z0MsQ0FBQSxHQUFJZ2lCLElBQUEsQ0FBS3lILEdBQUEsQ0FBSTZXLENBQUEsQ0FBRVIsQ0FBQSxFQUFHOS9CLENBQUEsQ0FBRTgvQixDQUFDLElBQUlRLENBQUEsQ0FBRVIsQ0FBQSxHQUFLOS9CLENBQUEsR0FBSUEsQ0FBQSxDQUFFOC9CLENBQUEsR0FBSSxLQUFLO0FBQzlEO0FDMU5PLElBQU15Qix1QkFBQSxHQUE4QztFQUN6RDc5QixLQUFBLEVBQU87RUFDUGc2QixLQUFBLEVBQU87RUFDUDcvQixNQUFBLEVBQVNpYSxJQUFBLElBQUk7SUFDWCxNQUFNb2lCLE1BQUEsR0FBU3BpQixJQUFBLENBQUtQLE1BQUEsQ0FBT3ZULElBQUE7SUFDM0IsTUFBTXc5QixVQUFBLEdBQWEsSUFBSTVtQyxRQUFBLENBQVNrZCxJQUFBLENBQUtzYSxPQUFBLEVBQVN0YSxJQUFBLENBQUt1YSxPQUFPO0lBRTFELE9BQU87TUFDTCxHQUFHdmEsSUFBQTtNQUNINEosS0FBQSxFQUFRdEssU0FBQSxJQUFTO1FBQ2YsTUFBTXNLLEtBQUEsR0FBUTVKLElBQUEsQ0FBSzRKLEtBQUEsQ0FBTXRLLFNBQVM7UUFDbEMsTUFBTTtVQUFFRztRQUFNLElBQUttSyxLQUFBO1FBQ25CLE1BQU07VUFBRTFDO1FBQVUsSUFBS3pILE1BQUE7UUFDdkIsTUFBTTtVQUFFME0sVUFBQTtVQUFZRDtRQUFRLElBQUtoRixVQUFBO1FBQ2pDLE1BQU15aUIsVUFBQSxHQUEwQjtVQUM5QixHQUFHL2YsS0FBQTtVQUNIekcsTUFBQSxFQUFTa1YsR0FBQSxJQUFHO1lBQ1YsTUFBTXRiLEtBQUEsR0FBUXNiLEdBQUEsQ0FBSXRiLEtBQUE7WUFHbEIsTUFBTTZzQixZQUFBLEdBQ0o3c0IsS0FBQSxDQUFNNnNCLFlBQUEsS0FBaUI3c0IsS0FBQSxDQUFNNnNCLFlBQUEsR0FBZTtZQUM5QyxNQUFNQyxXQUFBLEdBQWUzZSxTQUFBLElBQWlCO2NBQ3BDLE1BQU00ZSxJQUFBLEdBQU8sU0FBUzFILE1BQUEsSUFBVTlpQixTQUFBLElBQWE0TCxTQUFBO2NBQzdDLE9BQVEwZSxZQUFBLENBQWFFLElBQUEsTUFDbEJGLFlBQUEsQ0FBYUUsSUFBQSxJQUFRLElBQUlobkMsUUFBQSxDQUFROztZQUV0QyxNQUFNaW5DLFVBQUEsR0FBYUYsV0FBQSxDQUFZLEVBQUU7WUFDakMsTUFBTUcsWUFBQSxHQUFlSCxXQUFBLENBQVksT0FBTztZQUV4QyxNQUFNO2NBQUVqckIsSUFBQSxFQUFBOUo7WUFBSSxJQUFLdWpCLEdBQUE7WUFDakIsSUFBSSxDQUFDclUsS0FBQSxFQUFNaW1CLE9BQU8sSUFDaEI1UixHQUFBLENBQUl6WixJQUFBLEtBQVMsZ0JBQ1QsQ0FBQ3laLEdBQUEsQ0FBSXZVLEtBQUssSUFDVnVVLEdBQUEsQ0FBSXpaLElBQUEsS0FBUyxXQUNiLENBQUN5WixHQUFBLENBQUl6MEIsSUFBSSxJQUNUeTBCLEdBQUEsQ0FBSXRpQixNQUFBLENBQU81TixNQUFBLEdBQVMsS0FDcEIsQ0FBQyxJQUFJa3dCLEdBQUEsQ0FBSXRpQixNQUFNLElBQ2Y7WUFDTixNQUFNbTBCLFFBQUEsR0FBVzdSLEdBQUEsQ0FBSXRiLEtBQUEsQ0FBTTtZQUMzQixPQUFPNk0sS0FBQSxDQUFNekcsTUFBQSxDQUFPa1YsR0FBRyxFQUFFdG9CLElBQUEsQ0FBTVIsR0FBQSxJQUFHO2NBR2hDLElBQUl6TCxPQUFBLENBQVFrZ0IsS0FBSSxHQUFHO2dCQUVqQixJQUFJbFAsS0FBQSxLQUFTLFVBQVVrUCxLQUFBLEdBQU96VSxHQUFBLENBQUl1SCxPQUFBO2dCQUVsQ2l6QixVQUFBLENBQVczQixPQUFBLENBQVFwa0IsS0FBSTtnQkFHdkIsTUFBTW1tQixPQUFBLEdBQVUxQyx1QkFBQSxDQUF3QnpqQixLQUFBLEVBQU1rbUIsUUFBUTtnQkFHdEQsSUFBSSxDQUFDQyxPQUFBLElBQVdyMUIsS0FBQSxLQUFTLE9BQU87a0JBRzlCazFCLFlBQUEsQ0FBYTVCLE9BQUEsQ0FBUXBrQixLQUFJOztnQkFFM0IsSUFBSW1tQixPQUFBLElBQVdGLE9BQUEsRUFBUztrQkFFdEJHLG9CQUFBLENBQXFCUCxXQUFBLEVBQWFwcUIsTUFBQSxFQUFRMHFCLE9BQUEsRUFBU0YsT0FBTzs7eUJBRW5Eam1CLEtBQUEsRUFBTTtnQkFFZixNQUFNRixLQUFBLEdBQVE7a0JBQUVsZSxJQUFBLEVBQU1vZSxLQUFBLENBQUtuRixLQUFBO2tCQUFPa3BCLEVBQUEsRUFBSS9qQixLQUFBLENBQUtqRjtnQkFBSztnQkFDaERpckIsWUFBQSxDQUFhaG5CLEdBQUEsQ0FBSWMsS0FBSztnQkFFdEJpbUIsVUFBQSxDQUFXL21CLEdBQUEsQ0FBSWMsS0FBSztxQkFDZjtnQkFJTGltQixVQUFBLENBQVcvbUIsR0FBQSxDQUFJMG1CLFVBQVU7Z0JBQ3pCTSxZQUFBLENBQWFobkIsR0FBQSxDQUFJMG1CLFVBQVU7Z0JBQzNCanFCLE1BQUEsQ0FBT2dCLE9BQUEsQ0FBUXJjLE9BQUEsQ0FBUW9kLEdBQUEsSUFBT3FvQixXQUFBLENBQVlyb0IsR0FBQSxDQUFJdFYsSUFBSSxFQUFFOFcsR0FBQSxDQUFJMG1CLFVBQVUsQ0FBQzs7Y0FFckUsT0FBT242QixHQUFBO2FBQ1I7OztRQUlMLE1BQU04NkIsUUFBQSxHQUFrREEsQ0FBQztVQUN2RDNpQixLQUFBLEVBQU87WUFBRTlGLEtBQUE7WUFBT2tDO1VBQUs7UUFBRSxNQUlFOztVQUFLLFFBQzlCbEMsS0FBQSxFQUNBLElBQUk5ZSxRQUFBLEVBQVMyZ0IsRUFBQSxHQUFBSyxLQUFBLENBQU1qRixLQUFBLE1BQUssUUFBQTRFLEVBQUEsY0FBQUEsRUFBQSxHQUFJekQsSUFBQSxDQUFLc2EsT0FBQSxHQUFTK08sRUFBQSxHQUFBdmxCLEtBQUEsQ0FBTS9FLEtBQUEsTUFBSyxRQUFBc3FCLEVBQUEsY0FBQUEsRUFBQSxHQUFJcnBCLElBQUEsQ0FBS3VhLE9BQU8sRTs7UUFHdkUsTUFBTStQLGVBQUEsR0FHRjtVQUNGamxDLEdBQUEsRUFBTWd6QixHQUFBLElBQVEsQ0FBQ25SLFVBQUEsRUFBWSxJQUFJcGtCLFFBQUEsQ0FBU3UxQixHQUFBLENBQUloMEIsR0FBRyxDQUFDO1VBQ2hENGYsT0FBQSxFQUFVb1UsR0FBQSxJQUFRLENBQUNuUixVQUFBLEVBQVksSUFBSXBrQixRQUFBLENBQVEsRUFBR3NsQyxPQUFBLENBQVEvUCxHQUFBLENBQUl6MEIsSUFBSSxDQUFDO1VBQy9Eb2UsS0FBQSxFQUFPcW9CLFFBQUE7VUFDUDNpQixLQUFBLEVBQU8yaUIsUUFBQTtVQUNQaGpCLFVBQUEsRUFBWWdqQjs7UUFHZHptQyxJQUFBLENBQUswbUMsZUFBZSxFQUFFbG1DLE9BQUEsQ0FBUW1tQyxNQUFBLElBQU07VUFDbENaLFVBQUEsQ0FBV1ksTUFBQSxJQUFVLFVBQ25CbFMsR0FBQSxFQUsyQjtZQUUzQixNQUFNO2NBQUVtUztZQUFNLElBQUt6M0IsR0FBQTtZQUNuQixJQUFJeTNCLE1BQUEsRUFBUTtjQUtWLE1BQU1YLFdBQUEsR0FBZTNlLFNBQUEsSUFBaUI7Z0JBQ3BDLE1BQU00ZSxJQUFBLEdBQU8sU0FBUzFILE1BQUEsSUFBVTlpQixTQUFBLElBQWE0TCxTQUFBO2dCQUM3QyxPQUFRc2YsTUFBQSxDQUFPVixJQUFBLE1BQ1pVLE1BQUEsQ0FBT1YsSUFBQSxJQUFRLElBQUlobkMsUUFBQSxDQUFROztjQUVoQyxNQUFNaW5DLFVBQUEsR0FBYUYsV0FBQSxDQUFZLEVBQUU7Y0FDakMsTUFBTUcsWUFBQSxHQUFlSCxXQUFBLENBQVksT0FBTztjQUN4QyxNQUFNLENBQUNZLFlBQUEsRUFBY0MsYUFBYSxJQUFJSixlQUFBLENBQWdCQyxNQUFBLEVBQVFsUyxHQUFHO2NBRWpFd1IsV0FBQSxDQUFZWSxZQUFBLENBQWF2K0IsSUFBQSxJQUFRLEVBQUUsRUFBRThXLEdBQUEsQ0FBSTBuQixhQUFhO2NBQ3RELElBQUksQ0FBQ0QsWUFBQSxDQUFhbFQsWUFBQSxFQUFjO2dCQVU5QixJQUFJZ1QsTUFBQSxLQUFXLFNBQVM7a0JBS3RCUCxZQUFBLENBQWFobkIsR0FBQSxDQUFJMG1CLFVBQVU7dUJBQ3RCO2tCQUlMLE1BQU1pQixXQUFBLEdBQ0pKLE1BQUEsS0FBVyxXQUNYcmUsUUFBQSxJQUNDbU0sR0FBQSxDQUEyQnRpQixNQUFBLElBQzVCNlQsS0FBQSxDQUFNbEMsS0FBQSxDQUFNO29CQUNWLEdBQUkyUSxHQUFBO29CQUNKdGlCLE1BQUEsRUFBUTttQkFDVDtrQkFFSCxPQUFPNlQsS0FBQSxDQUFNMmdCLE1BQUEsRUFBUTFpQyxLQUFBLENBQU0sTUFBTW9ELFNBQVMsRUFBRThFLElBQUEsQ0FBTVIsR0FBQSxJQUFHO29CQUNuRCxJQUFJZzdCLE1BQUEsS0FBVyxTQUFTO3NCQUN0QixJQUFJcmUsUUFBQSxJQUFhbU0sR0FBQSxDQUEyQnRpQixNQUFBLEVBQVE7d0JBTWxELE9BQU80MEIsV0FBQSxDQUFZNTZCLElBQUEsQ0FDakIsQ0FBQzswQkFBRXhJLE1BQUEsRUFBUXFqQzt3QkFBYSxNQUF1QjswQkFDN0NiLFVBQUEsQ0FBVzNCLE9BQUEsQ0FBUXdDLGFBQWE7MEJBQ2hDLE9BQU9yN0IsR0FBQTt5QkFDUjs7c0JBS0wsTUFBTXM3QixLQUFBLEdBQVN4UyxHQUFBLENBQTJCdGlCLE1BQUEsR0FDckN4RyxHQUFBLENBQTRCaEksTUFBQSxDQUFPMkIsR0FBQSxDQUFJaWpCLFVBQVUsSUFDakQ1YyxHQUFBLENBQTRCaEksTUFBQTtzQkFDakMsSUFBSzh3QixHQUFBLENBQTJCdGlCLE1BQUEsRUFBUTt3QkFHdENnMEIsVUFBQSxDQUFXM0IsT0FBQSxDQUFReUMsS0FBSzs2QkFDbkI7d0JBUUxiLFlBQUEsQ0FBYTVCLE9BQUEsQ0FBUXlDLEtBQUs7OytCQUVuQk4sTUFBQSxLQUFXLGNBQWM7c0JBS2xDLE1BQU12aUIsTUFBQSxHQUE4QnpZLEdBQUE7c0JBQ3BDLE1BQU11N0IsVUFBQSxHQUFjelMsR0FBQSxDQUFnQ3RpQixNQUFBO3NCQUNwRCxPQUNFaVMsTUFBQSxJQUNBbmtCLE1BQUEsQ0FBT2tDLE1BQUEsQ0FBT2lpQixNQUFBLEVBQVE7d0JBQ3BCM2pCLEdBQUEsRUFBSzswQkFDSGdCLElBQUEsRUFBRzs0QkFDRDJrQyxZQUFBLENBQWE5QixNQUFBLENBQU9sZ0IsTUFBQSxDQUFPZCxVQUFVOzRCQUNyQyxPQUFPYyxNQUFBLENBQU8zakIsR0FBQTs7O3dCQUdsQjZpQixVQUFBLEVBQVk7MEJBQ1Y3aEIsSUFBQSxFQUFHOzRCQUNELE1BQU0wbEMsSUFBQSxHQUFPL2lCLE1BQUEsQ0FBT2QsVUFBQTs0QkFDcEI4aUIsWUFBQSxDQUFhOUIsTUFBQSxDQUFPNkMsSUFBSTs0QkFDeEIsT0FBT0EsSUFBQTs7O3dCQUdYdmxDLEtBQUEsRUFBTzswQkFDTEgsSUFBQSxFQUFHOzRCQUNEeWxDLFVBQUEsSUFBY2YsVUFBQSxDQUFXN0IsTUFBQSxDQUFPbGdCLE1BQUEsQ0FBT2QsVUFBVTs0QkFDakQsT0FBT2MsTUFBQSxDQUFPeGlCLEtBQUE7Ozt1QkFHbkI7O29CQUdMLE9BQU8rSixHQUFBO21CQUNSOzs7O1lBSVAsT0FBT3FhLEtBQUEsQ0FBTTJnQixNQUFBLEVBQVExaUMsS0FBQSxDQUFNLE1BQU1vRCxTQUFTOztTQUU3QztRQUNELE9BQU8wK0IsVUFBQTs7Ozs7QUFNZixTQUFTUyxxQkFDUFAsV0FBQSxFQUNBcHFCLE1BQUEsRUFDQTBxQixPQUFBLEVBQ0FGLE9BQUEsRUFBMEI7RUFFMUIsU0FBU2UsaUJBQWlCcnFCLEVBQUEsRUFBZTtJQUN2QyxNQUFNc25CLFFBQUEsR0FBVzRCLFdBQUEsQ0FBWWxwQixFQUFBLENBQUd6VSxJQUFBLElBQVEsRUFBRTtJQUMxQyxTQUFTaWdCLFdBQVdqb0IsR0FBQSxFQUFRO01BQzFCLE9BQU9BLEdBQUEsSUFBTyxPQUFPeWMsRUFBQSxDQUFHd0wsVUFBQSxDQUFXam9CLEdBQUcsSUFBSTs7SUFFNUMsTUFBTSttQyxZQUFBLEdBQWdCNW1DLEdBQUEsSUFBYXNjLEVBQUEsQ0FBRzhXLFVBQUEsSUFBYzN6QixPQUFBLENBQVFPLEdBQUcsSUFFM0RBLEdBQUEsQ0FBSUQsT0FBQSxDQUFROG1DLElBQUEsSUFBT2pELFFBQUEsQ0FBU0MsTUFBQSxDQUFPZ0QsSUFBRyxDQUFDLElBRXZDakQsUUFBQSxDQUFTQyxNQUFBLENBQU83akMsR0FBRztJQUV2QixDQUFDOGxDLE9BQUEsSUFBV0YsT0FBQSxFQUFTN2xDLE9BQUEsQ0FBUSxDQUFDeVgsQ0FBQSxFQUFHcFUsQ0FBQSxLQUFDO01BQ2hDLE1BQU0wakMsTUFBQSxHQUFTaEIsT0FBQSxJQUFXaGUsVUFBQSxDQUFXZ2UsT0FBQSxDQUFRMWlDLENBQUEsQ0FBRTtNQUMvQyxNQUFNMmpDLE1BQUEsR0FBU25CLE9BQUEsSUFBVzlkLFVBQUEsQ0FBVzhkLE9BQUEsQ0FBUXhpQyxDQUFBLENBQUU7TUFDL0MsSUFBSThaLEdBQUEsQ0FBSTRwQixNQUFBLEVBQVFDLE1BQU0sTUFBTSxHQUFHO1FBRTdCLElBQUlELE1BQUEsSUFBVSxNQUFNRixZQUFBLENBQWFFLE1BQU07UUFDdkMsSUFBSUMsTUFBQSxJQUFVLE1BQU1ILFlBQUEsQ0FBYUcsTUFBTTs7S0FFMUM7O0VBRUgzckIsTUFBQSxDQUFPZ0IsT0FBQSxDQUFRcmMsT0FBQSxDQUFRNG1DLGdCQUFnQjtBQUN6QztJQ2pPYW5vQyxPQUFBLFNBQUs7RUE2QmhCd0gsWUFBWTZCLElBQUEsRUFBYzlHLE9BQUEsRUFBc0I7SUFqQmhELEtBQUE0MUIsWUFBQSxHQUEwRjtJQU0xRixLQUFBZ0UsS0FBQSxHQUFnQjtJQVlkLE1BQU1xTSxJQUFBLEdBQVF4b0MsT0FBQSxDQUFrQ3lvQyxZQUFBO0lBQ2hELEtBQUszdUIsUUFBQSxHQUFXdlgsT0FBQSxHQUFVO01BRXhCczdCLE1BQUEsRUFBUzc5QixPQUFBLENBQWtDNjlCLE1BQUE7TUFDM0M5akIsUUFBQSxFQUFVO01BRVYwRSxTQUFBLEVBQVcrcEIsSUFBQSxDQUFLL3BCLFNBQUE7TUFDaEJ1UixXQUFBLEVBQWF3WSxJQUFBLENBQUt4WSxXQUFBO01BQ2xCLEdBQUd6dEI7O0lBRUwsS0FBS2ljLEtBQUEsR0FBUTtNQUNYQyxTQUFBLEVBQVdsYyxPQUFBLENBQVFrYyxTQUFBO01BQ25CdVIsV0FBQSxFQUFhenRCLE9BQUEsQ0FBUXl0Qjs7SUFFdkIsTUFBTTtNQUNKNk47SUFBTSxJQUNKdDdCLE9BQUE7SUFDSixLQUFLNlgsU0FBQSxHQUFZO0lBQ2pCLEtBQUtxZixTQUFBLEdBQVk7SUFDakIsS0FBS1AsV0FBQSxHQUFjO0lBQ25CLEtBQUs5VixVQUFBLEdBQWE7SUFDbEIsS0FBSzVKLEtBQUEsR0FBUTtJQUNiLEtBQUswZSxNQUFBLEdBQVM7SUFDZCxNQUFNNkcsS0FBQSxHQUFzQjtNQUMxQm5sQixXQUFBLEVBQWE7TUFDYkMsYUFBQSxFQUFlO01BQ2YwbUIsaUJBQUEsRUFBbUI7TUFDbkI5bUIsWUFBQSxFQUFjO01BQ2QwbEIsY0FBQSxFQUFnQmx6QixHQUFBO01BQ2hCZ08sY0FBQSxFQUFnQjtNQUNoQnl1QixVQUFBLEVBQVl6OEIsR0FBQTtNQUNaK3lCLGFBQUEsRUFBZTtNQUNmUSxVQUFBLEVBQVk7TUFDWm5sQixjQUFBLEVBQWdCOztJQUVsQjBrQixLQUFBLENBQU05a0IsY0FBQSxHQUFpQixJQUFJNUosWUFBQSxDQUFRekMsT0FBQSxJQUFPO01BQ3hDbXhCLEtBQUEsQ0FBTUksY0FBQSxHQUFpQnZ4QixPQUFBO0tBQ3hCO0lBQ0RteEIsS0FBQSxDQUFNQyxhQUFBLEdBQWdCLElBQUkzdUIsWUFBQSxDQUFRLENBQUMySSxDQUFBLEVBQUd0SCxNQUFBLEtBQU07TUFDMUNxdEIsS0FBQSxDQUFNMkosVUFBQSxHQUFhaDNCLE1BQUE7S0FDcEI7SUFDRCxLQUFLWixNQUFBLEdBQVNpdUIsS0FBQTtJQUNkLEtBQUsxMUIsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS29vQixFQUFBLEdBQUt6UCxNQUFBLENBQU8sTUFBTSxZQUFZLFdBQVcsaUJBQWlCLFNBQVM7TUFBRXdlLEtBQUEsRUFBTyxDQUFDdnpCLGVBQUEsRUFBaUJoQixHQUFHO0lBQUMsQ0FBRTtJQUN6RyxLQUFLd2xCLEVBQUEsQ0FBRytPLEtBQUEsQ0FBTWxlLFNBQUEsR0FBWTFlLFFBQUEsQ0FBUyxLQUFLNnRCLEVBQUEsQ0FBRytPLEtBQUEsQ0FBTWxlLFNBQUEsRUFBV0EsU0FBQSxJQUFTO01BQ25FLE9BQU8sQ0FBQ0YsVUFBQSxFQUFZdW1CLE9BQUEsS0FBTztRQUN4QjNvQyxPQUFBLENBQWtDcytCLEdBQUEsQ0FBSTtVQUNyQyxNQUFNc0ssTUFBQSxHQUFRLEtBQUs5M0IsTUFBQTtVQUNuQixJQUFJODNCLE1BQUEsQ0FBTW52QixZQUFBLEVBQWM7WUFFdEIsSUFBSSxDQUFDbXZCLE1BQUEsQ0FBTWh2QixXQUFBLEVBQWF2SixZQUFBLENBQVF6QyxPQUFBLENBQU8sRUFBR1YsSUFBQSxDQUFLa1YsVUFBVTtZQUV6RCxJQUFJdW1CLE9BQUEsRUFBU3JtQixTQUFBLENBQVVGLFVBQVU7cUJBQ3hCd21CLE1BQUEsQ0FBTXJJLGlCQUFBLEVBQW1CO1lBRWxDcUksTUFBQSxDQUFNckksaUJBQUEsQ0FBa0IvNkIsSUFBQSxDQUFLNGMsVUFBVTtZQUN2QyxJQUFJdW1CLE9BQUEsRUFBU3JtQixTQUFBLENBQVVGLFVBQVU7aUJBQzVCO1lBRUxFLFNBQUEsQ0FBVUYsVUFBVTtZQUVwQixNQUFNL0ksRUFBQSxHQUFLO1lBQ1gsSUFBSSxDQUFDc3ZCLE9BQUEsRUFBU3JtQixTQUFBLENBQVUsU0FBU3ZDLFlBQUEsRUFBVztjQUMxQzFHLEVBQUEsQ0FBR29ZLEVBQUEsQ0FBRytPLEtBQUEsQ0FBTXpnQixXQUFBLENBQVlxQyxVQUFVO2NBQ2xDL0ksRUFBQSxDQUFHb1ksRUFBQSxDQUFHK08sS0FBQSxDQUFNemdCLFdBQUEsQ0FBWUEsV0FBVzthQUNwQzs7U0FFSjs7S0FFSjtJQUdELEtBQUtOLFVBQUEsR0FBYThLLDJCQUFBLENBQTRCLElBQUk7SUFDbEQsS0FBS2xPLEtBQUEsR0FBUTRHLHNCQUFBLENBQXVCLElBQUk7SUFDeEMsS0FBS3VOLFdBQUEsR0FBY3VDLDRCQUFBLENBQTZCLElBQUk7SUFDcEQsS0FBS2lLLE9BQUEsR0FBVVEsd0JBQUEsQ0FBeUIsSUFBSTtJQUM1QyxLQUFLaGdCLFdBQUEsR0FBY21TLDRCQUFBLENBQTZCLElBQUk7SUFLcEQsS0FBSzhCLEVBQUEsQ0FBRyxpQkFBaUJILEVBQUEsSUFBRTtNQUt6QixJQUFJQSxFQUFBLENBQUd1WCxVQUFBLEdBQWEsR0FDbEIzdkIsT0FBQSxDQUFRQyxJQUFBLENBQUssaURBQWlELEtBQUs5UCxJQUFBLDBDQUE4QyxPQUVqSDZQLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLGdEQUFnRCxLQUFLOVAsSUFBQSxpREFBcUQ7TUFDekgsS0FBS3kyQixLQUFBLENBQUs7S0FPWDtJQUNELEtBQUtyTyxFQUFBLENBQUcsV0FBV0gsRUFBQSxJQUFFO01BQ25CLElBQUksQ0FBQ0EsRUFBQSxDQUFHdVgsVUFBQSxJQUFjdlgsRUFBQSxDQUFHdVgsVUFBQSxHQUFhdlgsRUFBQSxDQUFHeUgsVUFBQSxFQUN2QzdmLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLGlCQUFpQixLQUFLOVAsSUFBQSxnQkFBb0IsT0FFdkQ2UCxPQUFBLENBQVFDLElBQUEsQ0FBSyxZQUFZLEtBQUs5UCxJQUFBLGlEQUFxRGlvQixFQUFBLENBQUd5SCxVQUFBLEdBQWEsSUFBSTtLQUMxRztJQUVELEtBQUs3YSxPQUFBLEdBQVV1VixTQUFBLENBQVVseEIsT0FBQSxDQUFReXRCLFdBQWlDO0lBRWxFLEtBQUs3VixrQkFBQSxHQUFxQixDQUN4QmIsSUFBQSxFQUNBQyxVQUFBLEVBQ0EwWixRQUFBLEVBQ0FzTyxpQkFBQSxLQUFvQyxJQUFJLEtBQUsvUSxXQUFBLENBQVlsWCxJQUFBLEVBQU1DLFVBQUEsRUFBWTBaLFFBQUEsRUFBVSxLQUFLblosUUFBQSxDQUFTdVgsMkJBQUEsRUFBNkJrUSxpQkFBaUI7SUFFbkosS0FBSzVCLGNBQUEsR0FBaUJyTyxFQUFBLElBQUU7TUFDdEIsS0FBS0csRUFBQSxDQUFHLFNBQVMsRUFBRW5VLElBQUEsQ0FBS2dVLEVBQUU7TUFFMUJyVyxXQUFBLENBQ0dqVSxNQUFBLENBQU8wZSxDQUFBLElBQUtBLENBQUEsQ0FBRXJjLElBQUEsS0FBUyxLQUFLQSxJQUFBLElBQVFxYyxDQUFBLEtBQU0sUUFBUSxDQUFDQSxDQUFBLENBQUU1VSxNQUFBLENBQU91dkIsT0FBTyxFQUNuRWg2QixHQUFBLENBQUlxZixDQUFBLElBQUtBLENBQUEsQ0FBRStMLEVBQUEsQ0FBRyxlQUFlLEVBQUVuVSxJQUFBLENBQUtnVSxFQUFFLENBQUM7O0lBSTVDLEtBQUt3WCxHQUFBLENBQUloRyxzQkFBc0I7SUFDL0IsS0FBS2dHLEdBQUEsQ0FBSXZGLGVBQWU7SUFDeEIsS0FBS3VGLEdBQUEsQ0FBSWxDLHVCQUF1QjtJQUNoQyxLQUFLa0MsR0FBQSxDQUFJakUsNkJBQTZCO0lBRXRDLEtBQUt2RyxHQUFBLEdBQU10OUIsTUFBQSxDQUFPa0MsTUFBQSxDQUFPLE1BQU07TUFBQ3lXLElBQUEsRUFBTTtRQUFDaFgsS0FBQSxFQUFPO01BQUk7SUFBQyxDQUFDO0lBR3BEazdCLE1BQUEsQ0FBT3Q4QixPQUFBLENBQVF3bkMsS0FBQSxJQUFTQSxLQUFBLENBQU0sSUFBSSxDQUFDOztFQUdyQ2xRLFFBQVE2RSxhQUFBLEVBQXFCO0lBQzNCLElBQUl6M0IsS0FBQSxDQUFNeTNCLGFBQWEsS0FBS0EsYUFBQSxHQUFnQixLQUFLLE1BQU0sSUFBSXh5QixVQUFBLENBQVdPLElBQUEsQ0FBSyx3Q0FBd0M7SUFDbkhpeUIsYUFBQSxHQUFnQnJXLElBQUEsQ0FBS29ZLEtBQUEsQ0FBTS9CLGFBQUEsR0FBZ0IsRUFBRSxJQUFJO0lBQ2pELElBQUksS0FBS2xrQixLQUFBLElBQVMsS0FBSzFJLE1BQUEsQ0FBTytJLGFBQUEsRUFDNUIsTUFBTSxJQUFJM08sVUFBQSxDQUFXcVosTUFBQSxDQUFPLDBDQUEwQztJQUN4RSxLQUFLNFgsS0FBQSxHQUFROVUsSUFBQSxDQUFLeUgsR0FBQSxDQUFJLEtBQUtxTixLQUFBLEVBQU91QixhQUFhO0lBQy9DLE1BQU1sRSxRQUFBLEdBQVcsS0FBS0MsU0FBQTtJQUN0QixJQUFJdVAsZUFBQSxHQUFrQnhQLFFBQUEsQ0FBU3h5QixNQUFBLENBQzdCd0QsQ0FBQSxJQUFLQSxDQUFBLENBQUVvdUIsSUFBQSxDQUFLQyxPQUFBLEtBQVk2RSxhQUFhLEVBQUU7SUFDekMsSUFBSXNMLGVBQUEsRUFBaUIsT0FBT0EsZUFBQTtJQUM1QkEsZUFBQSxHQUFrQixJQUFJLEtBQUtoTSxPQUFBLENBQVFVLGFBQWE7SUFDaERsRSxRQUFBLENBQVNoMEIsSUFBQSxDQUFLd2pDLGVBQWU7SUFDN0J4UCxRQUFBLENBQVN2YixJQUFBLENBQUswYSxpQkFBaUI7SUFDL0JxUSxlQUFBLENBQWdCOUwsTUFBQSxDQUFPLEVBQUU7SUFFekIsS0FBS3BzQixNQUFBLENBQU8wdUIsVUFBQSxHQUFhO0lBQ3pCLE9BQU93SixlQUFBOztFQUdUQyxXQUFjOWtDLEVBQUEsRUFBb0I7SUFDaEMsT0FBUSxLQUFLcVYsS0FBQSxLQUFVLEtBQUsxSSxNQUFBLENBQU8ySSxZQUFBLElBQWdCdkosR0FBQSxDQUFJd0osVUFBQSxJQUFjLEtBQUtDLElBQUEsSUFBU3hWLEVBQUEsQ0FBRSxJQUFLLElBQUlrTSxZQUFBLENBQVcsQ0FBQ3pDLE9BQUEsRUFBUzhELE1BQUEsS0FBTTtNQUN2SCxJQUFJLEtBQUtaLE1BQUEsQ0FBTzJJLFlBQUEsRUFBYztRQUc1QixPQUFPL0gsTUFBQSxDQUFPLElBQUl4RyxVQUFBLENBQVdwQixjQUFBLENBQWUsS0FBS2dILE1BQUEsQ0FBTzhJLFdBQVcsQ0FBQzs7TUFFdEUsSUFBSSxDQUFDLEtBQUs5SSxNQUFBLENBQU8rSSxhQUFBLEVBQWU7UUFDOUIsSUFBSSxDQUFDLEtBQUtDLFFBQUEsQ0FBU0MsUUFBQSxFQUFVO1VBQzNCckksTUFBQSxDQUFPLElBQUl4RyxVQUFBLENBQVdwQixjQUFBLENBQWMsQ0FBRTtVQUN0Qzs7UUFFRixLQUFLa1EsSUFBQSxDQUFJLEVBQUdoSSxLQUFBLENBQU0vRixHQUFHOztNQUV2QixLQUFLNkUsTUFBQSxDQUFPbUosY0FBQSxDQUFlL00sSUFBQSxDQUFLVSxPQUFBLEVBQVM4RCxNQUFNO0tBQ2hELEVBQUV4RSxJQUFBLENBQUsvSSxFQUFFOztFQUdaMmtDLElBQUk7SUFBQy8vQixLQUFBO0lBQU83RixNQUFBO0lBQVE2L0IsS0FBQTtJQUFPMTVCO0VBQUksR0FBcUI7SUFDbEQsSUFBSUEsSUFBQSxFQUFNLEtBQUs2L0IsS0FBQSxDQUFNO01BQUNuZ0MsS0FBQTtNQUFPTTtJQUFJLENBQUM7SUFDbEMsTUFBTXd1QixXQUFBLEdBQWMsS0FBS00sWUFBQSxDQUFhcHZCLEtBQUEsTUFBVyxLQUFLb3ZCLFlBQUEsQ0FBYXB2QixLQUFBLElBQVM7SUFDNUU4dUIsV0FBQSxDQUFZcnlCLElBQUEsQ0FBSztNQUFDdUQsS0FBQTtNQUFPN0YsTUFBQTtNQUFRNi9CLEtBQUEsRUFBT0EsS0FBQSxJQUFTLE9BQU8sS0FBS0EsS0FBQTtNQUFPMTVCO0lBQUksQ0FBQztJQUN6RXd1QixXQUFBLENBQVk1WixJQUFBLENBQUssQ0FBQ3RYLENBQUEsRUFBRzNDLENBQUEsS0FBTTJDLENBQUEsQ0FBRW84QixLQUFBLEdBQVEvK0IsQ0FBQSxDQUFFKytCLEtBQUs7SUFHNUMsT0FBTzs7RUFLVG1HLE1BQU07SUFBQ25nQyxLQUFBO0lBQU9NLElBQUE7SUFBTW5HO0VBQU0sR0FBK0Q7SUFDdkYsSUFBSTZGLEtBQUEsSUFBUyxLQUFLb3ZCLFlBQUEsQ0FBYXB2QixLQUFBLEdBQVE7TUFDckMsS0FBS292QixZQUFBLENBQWFwdkIsS0FBQSxJQUFTLEtBQUtvdkIsWUFBQSxDQUFhcHZCLEtBQUEsRUFBTy9CLE1BQUEsQ0FBT21pQyxFQUFBLElBQ3pEam1DLE1BQUEsR0FBU2ltQyxFQUFBLENBQUdqbUMsTUFBQSxLQUFXQSxNQUFBLEdBQ3ZCbUcsSUFBQSxHQUFPOC9CLEVBQUEsQ0FBRzkvQixJQUFBLEtBQVNBLElBQUEsR0FDbkIsS0FBSzs7SUFFVCxPQUFPOztFQUdUMlEsS0FBQSxFQUFJO0lBQ0YsT0FBTzhrQixTQUFBLENBQVUsSUFBSTs7RUFHdkJ0a0IsT0FBQSxFQUFNO0lBQ0osTUFBTXVrQixLQUFBLEdBQVEsS0FBS2p1QixNQUFBO0lBQ25CLE1BQU02TixHQUFBLEdBQU0xRCxXQUFBLENBQVl2VixPQUFBLENBQVEsSUFBSTtJQUNwQyxJQUFJaVosR0FBQSxJQUFPLEdBQUcxRCxXQUFBLENBQVk5VSxNQUFBLENBQU93WSxHQUFBLEVBQUssQ0FBQztJQUN2QyxJQUFJLEtBQUtuRixLQUFBLEVBQU87TUFDZCxJQUFJO1FBQUUsS0FBS0EsS0FBQSxDQUFNc21CLEtBQUEsQ0FBSztlQUFhNzJCLENBQUEsRUFBUCxDQUFVO01BQ3RDLEtBQUtpdkIsTUFBQSxDQUFPMWUsS0FBQSxHQUFROztJQUd0QnVsQixLQUFBLENBQU05a0IsY0FBQSxHQUFpQixJQUFJNUosWUFBQSxDQUFRekMsT0FBQSxJQUFPO01BQ3hDbXhCLEtBQUEsQ0FBTUksY0FBQSxHQUFpQnZ4QixPQUFBO0tBQ3hCO0lBQ0RteEIsS0FBQSxDQUFNQyxhQUFBLEdBQWdCLElBQUkzdUIsWUFBQSxDQUFRLENBQUMySSxDQUFBLEVBQUd0SCxNQUFBLEtBQU07TUFDMUNxdEIsS0FBQSxDQUFNMkosVUFBQSxHQUFhaDNCLE1BQUE7S0FDcEI7O0VBR0hvdUIsTUFBQSxFQUFLO0lBQ0gsS0FBS3RsQixNQUFBLENBQU07SUFDWCxNQUFNdWtCLEtBQUEsR0FBUSxLQUFLanVCLE1BQUE7SUFDbkIsS0FBS2dKLFFBQUEsQ0FBU0MsUUFBQSxHQUFXO0lBQ3pCZ2xCLEtBQUEsQ0FBTW5sQixXQUFBLEdBQWMsSUFBSTFPLFVBQUEsQ0FBV3BCLGNBQUEsQ0FBYztJQUNqRCxJQUFJaTFCLEtBQUEsQ0FBTWxsQixhQUFBLEVBQ1JrbEIsS0FBQSxDQUFNMkosVUFBQSxDQUFXM0osS0FBQSxDQUFNbmxCLFdBQVc7O0VBR3RDbUgsT0FBQSxFQUFNO0lBQ0osTUFBTXFvQixZQUFBLEdBQWVoaEMsU0FBQSxDQUFVOUMsTUFBQSxHQUFTO0lBQ3hDLE1BQU15NUIsS0FBQSxHQUFRLEtBQUtqdUIsTUFBQTtJQUNuQixPQUFPLElBQUlULFlBQUEsQ0FBUSxDQUFDekMsT0FBQSxFQUFTOEQsTUFBQSxLQUFNO01BQ2pDLE1BQU0yM0IsUUFBQSxHQUFXQSxDQUFBO1FBQ2YsS0FBS3ZKLEtBQUEsQ0FBSztRQUNWLElBQUl0SyxHQUFBLEdBQU0sS0FBS2hYLEtBQUEsQ0FBTUMsU0FBQSxDQUFVdWhCLGNBQUEsQ0FBZSxLQUFLMzJCLElBQUk7UUFDdkRtc0IsR0FBQSxDQUFJN29CLFNBQUEsR0FBWXNKLElBQUEsQ0FBSztVQUNuQm9vQixrQkFBQSxDQUFtQixLQUFLN2YsS0FBQSxFQUFPLEtBQUtuVixJQUFJO1VBQ3hDdUUsT0FBQSxDQUFPO1NBQ1I7UUFDRDRuQixHQUFBLENBQUl6d0IsT0FBQSxHQUFVa3JCLGtCQUFBLENBQW1CdmUsTUFBTTtRQUN2QzhqQixHQUFBLENBQUlrSyxTQUFBLEdBQVksS0FBS0MsY0FBQTs7TUFHdkIsSUFBSXlKLFlBQUEsRUFBYyxNQUFNLElBQUlsK0IsVUFBQSxDQUFXeVYsZUFBQSxDQUFnQixzQ0FBc0M7TUFDN0YsSUFBSW9lLEtBQUEsQ0FBTWxsQixhQUFBLEVBQWU7UUFDdkJrbEIsS0FBQSxDQUFNOWtCLGNBQUEsQ0FBZS9NLElBQUEsQ0FBS204QixRQUFRO2FBQzdCO1FBQ0xBLFFBQUEsQ0FBUTs7S0FFWDs7RUFHSEMsVUFBQSxFQUFTO0lBQ1AsT0FBTyxLQUFLOXZCLEtBQUE7O0VBR2RlLE9BQUEsRUFBTTtJQUNKLE9BQU8sS0FBS2YsS0FBQSxLQUFVOztFQUd4Qit2QixjQUFBLEVBQWE7SUFDWCxNQUFNM3ZCLFdBQUEsR0FBYyxLQUFLOUksTUFBQSxDQUFPOEksV0FBQTtJQUNoQyxPQUFPQSxXQUFBLElBQWdCQSxXQUFBLENBQVl2USxJQUFBLEtBQVM7O0VBRzlDbWdDLFVBQUEsRUFBUztJQUNQLE9BQU8sS0FBSzE0QixNQUFBLENBQU84SSxXQUFBLEtBQWdCOztFQUdyQzZ2QixrQkFBQSxFQUFpQjtJQUNmLE9BQU8sS0FBSzM0QixNQUFBLENBQU8wdUIsVUFBQTs7RUFHckIsSUFBSWpMLE9BQUEsRUFBTTtJQUNSLE9BQU94ekIsSUFBQSxDQUFLLEtBQUtxaUIsVUFBVSxFQUFFL2MsR0FBQSxDQUFJZ0QsSUFBQSxJQUFRLEtBQUsrWixVQUFBLENBQVcvWixJQUFBLENBQUs7O0VBR2hFOG5CLFlBQUEsRUFBVztJQUNULE1BQU0xdEIsSUFBQSxHQUFPMDlCLHNCQUFBLENBQXVCbjhCLEtBQUEsQ0FBTSxNQUFNb0QsU0FBUztJQUN6RCxPQUFPLEtBQUtzaEMsWUFBQSxDQUFhMWtDLEtBQUEsQ0FBTSxNQUFNdkIsSUFBSTs7RUFHM0NpbUMsYUFBYXB3QixJQUFBLEVBQXVCaWIsTUFBQSxFQUFnQzhNLFNBQUEsRUFBbUI7SUFDckYsSUFBSUUsaUJBQUEsR0FBb0JyeEIsR0FBQSxDQUFJZ0ssS0FBQTtJQUU1QixJQUFJLENBQUNxbkIsaUJBQUEsSUFBcUJBLGlCQUFBLENBQWtCbG9CLEVBQUEsS0FBTyxRQUFRQyxJQUFBLENBQUs1VCxPQUFBLENBQVEsR0FBRyxNQUFNLElBQUk2N0IsaUJBQUEsR0FBb0I7SUFDekcsTUFBTW9JLGdCQUFBLEdBQW1CcndCLElBQUEsQ0FBSzVULE9BQUEsQ0FBUSxHQUFHLE1BQU07SUFDL0M0VCxJQUFBLEdBQU9BLElBQUEsQ0FBS3lqQixPQUFBLENBQVEsS0FBSyxFQUFFLEVBQUVBLE9BQUEsQ0FBUSxLQUFLLEVBQUU7SUFDNUMsSUFBSTZNLE9BQUEsRUFDQXJ3QixVQUFBO0lBRUosSUFBSTtNQUlBQSxVQUFBLEdBQWFnYixNQUFBLENBQU9sdUIsR0FBQSxDQUFJMGdCLEtBQUEsSUFBSztRQUN6QixJQUFJNlUsU0FBQSxHQUFZN1UsS0FBQSxZQUFpQixLQUFLMUssS0FBQSxHQUFRMEssS0FBQSxDQUFNMWQsSUFBQSxHQUFPMGQsS0FBQTtRQUMzRCxJQUFJLE9BQU82VSxTQUFBLEtBQWMsVUFBVSxNQUFNLElBQUlsd0IsU0FBQSxDQUFVLGlGQUFpRjtRQUN4SSxPQUFPa3dCLFNBQUE7T0FDVjtNQUtELElBQUl0aUIsSUFBQSxJQUFRLE9BQU9BLElBQUEsS0FBU21DLFFBQUEsRUFDMUJtdUIsT0FBQSxHQUFVbnVCLFFBQUEsTSxJQUNIbkMsSUFBQSxJQUFRLFFBQVFBLElBQUEsSUFBUW9DLFNBQUEsRUFDL0JrdUIsT0FBQSxHQUFVbHVCLFNBQUEsTUFFUixNQUFNLElBQUl4USxVQUFBLENBQVd5VixlQUFBLENBQWdCLCtCQUErQnJILElBQUk7TUFFNUUsSUFBSWlvQixpQkFBQSxFQUFtQjtRQUVuQixJQUFJQSxpQkFBQSxDQUFrQmpvQixJQUFBLEtBQVNtQyxRQUFBLElBQVltdUIsT0FBQSxLQUFZbHVCLFNBQUEsRUFBVztVQUM5RCxJQUFJaXVCLGdCQUFBLEVBQWtCO1lBRWxCcEksaUJBQUEsR0FBb0I7aUJBRW5CLE1BQU0sSUFBSXIyQixVQUFBLENBQVcyK0IsY0FBQSxDQUFlLHdGQUF3Rjs7UUFFckksSUFBSXRJLGlCQUFBLEVBQW1CO1VBQ25CaG9CLFVBQUEsQ0FBV2hZLE9BQUEsQ0FBUXE2QixTQUFBLElBQVM7WUFDeEIsSUFBSTJGLGlCQUFBLElBQXFCQSxpQkFBQSxDQUFrQmhvQixVQUFBLENBQVc3VCxPQUFBLENBQVFrMkIsU0FBUyxNQUFNLElBQUk7Y0FDN0UsSUFBSStOLGdCQUFBLEVBQWtCO2dCQUVsQnBJLGlCQUFBLEdBQW9CO3FCQUVuQixNQUFNLElBQUlyMkIsVUFBQSxDQUFXMitCLGNBQUEsQ0FBZSxXQUFXak8sU0FBQSxHQUNoRCxzQ0FBc0M7O1dBRWpEOztRQUVMLElBQUkrTixnQkFBQSxJQUFvQnBJLGlCQUFBLElBQXFCLENBQUNBLGlCQUFBLENBQWtCclEsTUFBQSxFQUFRO1VBRXBFcVEsaUJBQUEsR0FBb0I7OzthQUd2QnQ0QixDQUFBLEVBQVA7TUFDRSxPQUFPczRCLGlCQUFBLEdBQ0hBLGlCQUFBLENBQWtCM3NCLFFBQUEsQ0FBUyxNQUFNLENBQUNvRSxDQUFBLEVBQUd0SCxNQUFBLEtBQU07UUFBTUEsTUFBQSxDQUFPekksQ0FBQztNQUFFLENBQUMsSUFDNURzTyxTQUFBLENBQVd0TyxDQUFDOztJQUdwQixNQUFNNmdDLGdCQUFBLEdBQW1CeEkscUJBQUEsQ0FBc0JuK0IsSUFBQSxDQUFLLE1BQU0sTUFBTXltQyxPQUFBLEVBQVNyd0IsVUFBQSxFQUFZZ29CLGlCQUFBLEVBQW1CRixTQUFTO0lBQ2pILE9BQVFFLGlCQUFBLEdBQ0pBLGlCQUFBLENBQWtCM3NCLFFBQUEsQ0FBU2cxQixPQUFBLEVBQVNFLGdCQUFBLEVBQWtCLE1BQU0sSUFDNUQ1NUIsR0FBQSxDQUFJZ0ssS0FBQSxHQUlBMUcsTUFBQSxDQUFPdEQsR0FBQSxDQUFJNk0sU0FBQSxFQUFXLE1BQUksS0FBS2tzQixVQUFBLENBQVdhLGdCQUFnQixDQUFDLElBQzNELEtBQUtiLFVBQUEsQ0FBWWEsZ0JBQWdCOztFQUszQy9pQixNQUFNdEssU0FBQSxFQUFpQjtJQUNyQixJQUFJLENBQUM1YSxNQUFBLENBQU8sS0FBS3VoQixVQUFBLEVBQVkzRyxTQUFTLEdBQUc7TUFDdkMsTUFBTSxJQUFJdlIsVUFBQSxDQUFXNitCLFlBQUEsQ0FBYSxTQUFTdHRCLFNBQUEsaUJBQTBCOztJQUN2RSxPQUFPLEtBQUsyRyxVQUFBLENBQVczRyxTQUFBOzs7QUN0YjNCLElBQU11dEIsZ0JBQUEsR0FDSixPQUFPbmlDLE1BQUEsS0FBVyxlQUFlLGdCQUFnQkEsTUFBQSxHQUM3Q0EsTUFBQSxDQUFPb2lDLFVBQUEsR0FDUDtJQUVPQyxVQUFBLFNBQVU7RUFLckIxaUMsWUFBWThhLFNBQUEsRUFBa0Q7SUFDNUQsS0FBSzZuQixVQUFBLEdBQWE3bkIsU0FBQTs7RUFTcEJBLFVBQVVwYixDQUFBLEVBQVM0ZixLQUFBLEVBQWFvTSxRQUFBLEVBQWM7SUFDNUMsT0FBTyxLQUFLaVgsVUFBQSxDQUNWLENBQUNqakMsQ0FBQSxJQUFLLE9BQU9BLENBQUEsS0FBTSxhQUFhO01BQUVtQixJQUFBLEVBQU1uQixDQUFBO01BQUc0ZixLQUFBO01BQU9vTTtJQUFRLElBQUtoc0IsQ0FBQzs7RUFJcEUsQ0FBQzhpQyxnQkFBQSxJQUFpQjtJQUNoQixPQUFPOzs7U0M3QktJLHVCQUNkamEsTUFBQSxFQUNBMlYsTUFBQSxFQUF3QjtFQUV4Qi9rQyxJQUFBLENBQUsra0MsTUFBTSxFQUFFdmtDLE9BQUEsQ0FBUTBsQyxJQUFBLElBQUk7SUFDdkIsTUFBTTdCLFFBQUEsR0FBV2pWLE1BQUEsQ0FBTzhXLElBQUEsTUFBVTlXLE1BQUEsQ0FBTzhXLElBQUEsSUFBUSxJQUFJaG5DLFFBQUEsQ0FBUTtJQUM3REksV0FBQSxDQUFZK2tDLFFBQUEsRUFBVVUsTUFBQSxDQUFPbUIsSUFBQSxDQUFLO0dBQ25DO0VBQ0QsT0FBTzlXLE1BQUE7QUFDVDtTQ0tnQi92QixVQUFhaXFDLE9BQUEsRUFBNkI7RUFDeEQsSUFBSUMsUUFBQSxHQUFXO0VBQ2YsSUFBSUMsWUFBQSxHQUFrQjtFQUN0QixNQUFNTixVQUFBLEdBQWEsSUFBSUMsVUFBQSxDQUFlTSxRQUFBLElBQVE7SUFDNUMsTUFBTWhKLGdCQUFBLEdBQW1CajVCLGVBQUEsQ0FBZ0I4aEMsT0FBTztJQUNoRCxTQUFTSSxRQUFROUMsTUFBQSxFQUF3QjtNQUN2QyxJQUFJbkcsZ0JBQUEsRUFBa0I7UUFDcEJucUIsdUJBQUEsQ0FBdUI7O01BRXpCLE1BQU1xekIsSUFBQSxHQUFPQSxDQUFBLEtBQU1uM0IsUUFBQSxDQUFTODJCLE9BQUEsRUFBUztRQUFFMUMsTUFBQTtRQUFRenRCLEtBQUEsRUFBTztNQUFJLENBQUU7TUFDNUQsTUFBTTlVLEVBQUEsR0FBSzhLLEdBQUEsQ0FBSWdLLEtBQUEsR0FFWDFHLE1BQUEsQ0FBT3RELEdBQUEsQ0FBSTZNLFNBQUEsRUFBVzJ0QixJQUFJLElBQzFCQSxJQUFBLENBQUk7TUFDUixJQUFJbEosZ0JBQUEsRUFBa0I7UUFDbkJwOEIsRUFBQSxDQUFvQjhILElBQUEsQ0FDbkJ1RSx1QkFBQSxFQUNBQSx1QkFBdUI7O01BRzNCLE9BQU9yTSxFQUFBOztJQUdULElBQUl1bEMsTUFBQSxHQUFTO0lBRWIsSUFBSUMsU0FBQSxHQUE4QjtJQUNsQyxJQUFJQyxVQUFBLEdBQStCO0lBRW5DLE1BQU1DLFlBQUEsR0FBNkI7TUFDakMsSUFBSUgsT0FBQSxFQUFNO1FBQ1IsT0FBT0EsTUFBQTs7TUFFVDVxQixXQUFBLEVBQWFBLENBQUE7UUFDWDRxQixNQUFBLEdBQVM7UUFDVHBhLFlBQUEsQ0FBYXFCLGNBQUEsQ0FBZTdSLFdBQUEsQ0FBWWdyQixnQkFBZ0I7OztJQUk1RFAsUUFBQSxDQUFTOW1DLEtBQUEsSUFBUzhtQyxRQUFBLENBQVM5bUMsS0FBQSxDQUFNb25DLFlBQVk7SUFFN0MsSUFBSUUsUUFBQSxHQUFXO01BQ2JDLGdCQUFBLEdBQW1CO0lBRXJCLFNBQVNDLGFBQUEsRUFBWTtNQUNuQixPQUFPbnFDLElBQUEsQ0FBSzhwQyxVQUFVLEVBQUU3MEIsSUFBQSxDQUNyQnhVLEdBQUEsSUFDQ29wQyxTQUFBLENBQVVwcEMsR0FBQSxLQUFRbEIsYUFBQSxDQUFjc3FDLFNBQUEsQ0FBVXBwQyxHQUFBLEdBQU1xcEMsVUFBQSxDQUFXcnBDLEdBQUEsQ0FBSSxDQUFDOztJQUl0RSxNQUFNdXBDLGdCQUFBLEdBQW9CdmpCLEtBQUEsSUFBdUI7TUFDL0M0aUIsc0JBQUEsQ0FBdUJRLFNBQUEsRUFBV3BqQixLQUFLO01BQ3ZDLElBQUkwakIsWUFBQSxDQUFZLEdBQUk7UUFDbEJDLE9BQUEsQ0FBTzs7O0lBSVgsTUFBTUEsT0FBQSxHQUFVQSxDQUFBO01BQ2QsSUFBSUgsUUFBQSxJQUFZTCxNQUFBLEVBQVE7TUFDeEJDLFNBQUEsR0FBWTtNQUNaLE1BQU1qRCxNQUFBLEdBQTJCO01BQ2pDLE1BQU10eUIsR0FBQSxHQUFNbzFCLE9BQUEsQ0FBUTlDLE1BQU07TUFDMUIsSUFBSSxDQUFDc0QsZ0JBQUEsRUFBa0I7UUFDckIxYSxZQUFBLENBQWFGLGdDQUFBLEVBQWtDMGEsZ0JBQWdCO1FBQy9ERSxnQkFBQSxHQUFtQjs7TUFFckJELFFBQUEsR0FBVztNQUNYN3BDLE9BQUEsQ0FBUXlNLE9BQUEsQ0FBUXlILEdBQUcsRUFBRW5JLElBQUEsQ0FDbEJ4SSxNQUFBLElBQU07UUFDTDRsQyxRQUFBLEdBQVc7UUFDWEMsWUFBQSxHQUFlN2xDLE1BQUE7UUFDZnNtQyxRQUFBLEdBQVc7UUFDWCxJQUFJTCxNQUFBLEVBQVE7UUFDWixJQUFJTyxZQUFBLENBQVksR0FBSTtVQUVsQkMsT0FBQSxDQUFPO2VBQ0Y7VUFDTFAsU0FBQSxHQUFZO1VBRVpDLFVBQUEsR0FBYWxELE1BQUE7VUFDYjZDLFFBQUEsQ0FBU25pQyxJQUFBLElBQVFtaUMsUUFBQSxDQUFTbmlDLElBQUEsQ0FBSzNELE1BQU07O1NBR3hDeU4sR0FBQSxJQUFHO1FBQ0Y2NEIsUUFBQSxHQUFXO1FBQ1hWLFFBQUEsR0FBVztRQUNYRSxRQUFBLENBQVMxakIsS0FBQSxJQUFTMGpCLFFBQUEsQ0FBUzFqQixLQUFBLENBQU0zVSxHQUFHO1FBQ3BDMjRCLFlBQUEsQ0FBYS9xQixXQUFBLENBQVc7T0FDekI7O0lBSUxvckIsT0FBQSxDQUFPO0lBQ1AsT0FBT0wsWUFBQTtHQUNSO0VBQ0RiLFVBQUEsQ0FBV0ssUUFBQSxHQUFXLE1BQU1BLFFBQUE7RUFDNUJMLFVBQUEsQ0FBV21CLFFBQUEsR0FBVyxNQUFNYixZQUFBO0VBQzVCLE9BQU9OLFVBQUE7QUFDVDtBQ2pITyxJQUFJb0IsT0FBQTtBQUVYLElBQUk7RUFDRkEsT0FBQSxHQUFVO0lBRVI1c0IsU0FBQSxFQUFXL2QsT0FBQSxDQUFRK2QsU0FBQSxJQUFhL2QsT0FBQSxDQUFRNHFDLFlBQUEsSUFBZ0I1cUMsT0FBQSxDQUFRNnFDLGVBQUEsSUFBbUI3cUMsT0FBQSxDQUFROHFDLFdBQUE7SUFDM0Z4YixXQUFBLEVBQWF0dkIsT0FBQSxDQUFRc3ZCLFdBQUEsSUFBZXR2QixPQUFBLENBQVErcUM7O1NBRXZDeGlDLENBQUEsRUFBUDtFQUNBb2lDLE9BQUEsR0FBVTtJQUFFNXNCLFNBQUEsRUFBVztJQUFNdVIsV0FBQSxFQUFhO0VBQUk7O0FDeUJoRCxJQUFNandCLEtBQUEsR0FBUUMsT0FBQTtBQUtkZ0MsS0FBQSxDQUFNakMsS0FBQSxFQUFPO0VBSVgsR0FBR2lNLGtCQUFBO0VBS0grVSxPQUFPMnFCLFlBQUEsRUFBb0I7SUFDekIsTUFBTXJ5QixFQUFBLEdBQUssSUFBSXRaLEtBQUEsQ0FBTTJyQyxZQUFBLEVBQWM7TUFBQzdOLE1BQUEsRUFBUTtJQUFFLENBQUM7SUFDL0MsT0FBT3hrQixFQUFBLENBQUcwSCxNQUFBLENBQU07O0VBTWxCNHFCLE9BQU90aUMsSUFBQSxFQUFZO0lBQ2pCLE9BQU8sSUFBSXRKLEtBQUEsQ0FBTXNKLElBQUEsRUFBTTtNQUFFdzBCLE1BQUEsRUFBUTtJQUFFLENBQUUsRUFBRTdqQixJQUFBLENBQUksRUFBRzlNLElBQUEsQ0FBS21NLEVBQUEsSUFBRTtNQUNuREEsRUFBQSxDQUFHeW1CLEtBQUEsQ0FBSztNQUNSLE9BQU87S0FDUixFQUFFOXRCLEtBQUEsQ0FBTSx1QkFBdUIsTUFBTSxLQUFLOztFQU03Q2lzQixpQkFBaUI5b0IsRUFBQSxFQUFFO0lBQ2pCLElBQUk7TUFDRixPQUFPOG9CLGdCQUFBLENBQWlCbCtCLEtBQUEsQ0FBTTBvQyxZQUFZLEVBQUV2N0IsSUFBQSxDQUFLaUksRUFBRTthQUNuRHlMLEVBQUE7TUFDQSxPQUFPckosU0FBQSxDQUFVLElBQUlyTSxVQUFBLENBQVdqQixVQUFBLENBQVUsQ0FBRTs7O0VBS2hEK1YsWUFBQSxFQUFXO0lBQ1QsU0FBU0MsTUFBTUMsT0FBQSxFQUFPO01BQ3BCOWUsTUFBQSxDQUFPLE1BQU04ZSxPQUFPOztJQUV0QixPQUFPRCxLQUFBOztFQUdUMnJCLGtCQUFrQnZLLFNBQUEsRUFBUztJQXNCekIsT0FBT254QixHQUFBLENBQUlnSyxLQUFBLEdBQ1QxRyxNQUFBLENBQU90RCxHQUFBLENBQUk2TSxTQUFBLEVBQVdza0IsU0FBUyxJQUMvQkEsU0FBQSxDQUFTOztFQUdiL0MsR0FBQTtFQUVBdU4sS0FBQSxFQUFPLFNBQUFBLENBQVVDLFdBQUEsRUFBcUI7SUFDcEMsT0FBTztNQUNMLElBQUk7UUFDRixJQUFJMW1DLEVBQUEsR0FBS3U3QixhQUFBLENBQWNtTCxXQUFBLENBQVk5bUMsS0FBQSxDQUFNLE1BQU1vRCxTQUFTLENBQUM7UUFDekQsSUFBSSxDQUFDaEQsRUFBQSxJQUFNLE9BQU9BLEVBQUEsQ0FBRzhILElBQUEsS0FBUyxZQUM1QixPQUFPbUQsWUFBQSxDQUFRekMsT0FBQSxDQUFReEksRUFBRTtRQUMzQixPQUFPQSxFQUFBO2VBQ0E2RCxDQUFBLEVBQVA7UUFDQSxPQUFPc08sU0FBQSxDQUFVdE8sQ0FBQzs7OztFQUt4QjhpQyxLQUFBLEVBQU8sU0FBQUEsQ0FBVUQsV0FBQSxFQUFhcm9DLElBQUEsRUFBTTBKLElBQUEsRUFBSTtJQUN0QyxJQUFJO01BQ0YsSUFBSS9ILEVBQUEsR0FBS3U3QixhQUFBLENBQWNtTCxXQUFBLENBQVk5bUMsS0FBQSxDQUFNbUksSUFBQSxFQUFNMUosSUFBQSxJQUFRLEVBQUUsQ0FBQztNQUMxRCxJQUFJLENBQUMyQixFQUFBLElBQU0sT0FBT0EsRUFBQSxDQUFHOEgsSUFBQSxLQUFTLFlBQzVCLE9BQU9tRCxZQUFBLENBQVF6QyxPQUFBLENBQVF4SSxFQUFFO01BQzNCLE9BQU9BLEVBQUE7YUFDQTZELENBQUEsRUFBUDtNQUNBLE9BQU9zTyxTQUFBLENBQVV0TyxDQUFDOzs7RUFLdEIraUMsa0JBQUEsRUFBb0I7SUFDbEJ4cEMsR0FBQSxFQUFLQSxDQUFBLEtBQU0wTixHQUFBLENBQUlnSyxLQUFBLElBQVM7O0VBRzFCK1gsT0FBQSxFQUFTLFNBQUFBLENBQVVnYSxpQkFBQSxFQUFtQkMsZUFBQSxFQUFlO0lBRW5ELE1BQU0zM0IsT0FBQSxHQUFVbEUsWUFBQSxDQUFRekMsT0FBQSxDQUN0QixPQUFPcStCLGlCQUFBLEtBQXNCLGFBQzNCbHNDLEtBQUEsQ0FBTTZyQyxpQkFBQSxDQUFrQkssaUJBQWlCLElBQ3pDQSxpQkFBaUIsRUFDbEJ4NUIsT0FBQSxDQUFReTVCLGVBQUEsSUFBbUIsR0FBSztJQUluQyxPQUFPaDhCLEdBQUEsQ0FBSWdLLEtBQUEsR0FDVGhLLEdBQUEsQ0FBSWdLLEtBQUEsQ0FBTStYLE9BQUEsQ0FBUTFkLE9BQU8sSUFDekJBLE9BQUE7O0VBSUpwVCxPQUFBLEVBQVNrUCxZQUFBO0VBTVQ3SCxLQUFBLEVBQU87SUFDTGhHLEdBQUEsRUFBS0EsQ0FBQSxLQUFNZ0csS0FBQTtJQUNYL0YsR0FBQSxFQUFLRSxLQUFBLElBQUs7TUFDUmlHLFFBQUEsQ0FBZWpHLEtBQUEsRUFBT0EsS0FBQSxLQUFVLFVBQVUsTUFBTSxPQUFPNFkscUJBQXFCOzs7RUFLaEYxWSxNQUFBO0VBQ0F6QixNQUFBO0VBQ0FZLEtBQUE7RUFDQTRCLFFBQUE7RUFFQW9lLE1BQUE7RUFDQXlQLEVBQUEsRUFBSWxCLFlBQUE7RUFDSm53QixTQUFBO0VBQ0FncUMsc0JBQUE7RUFFQWxsQyxZQUFBO0VBQ0FXLFlBQUE7RUFDQU8sWUFBQTtFQUNBRyxZQUFBO0VBQ0FhLFNBQUE7RUFDQTQ3QixhQUFBO0VBQ0F0a0IsR0FBQTtFQUNBM1AsSUFBQSxFQUFNN0ssTUFBQTtFQUVONFcsTUFBQTtFQUVBK2lCLE1BQUEsRUFBUTtFQUVSNWlCLFdBQUE7RUFHQWpRLFFBQUE7RUFjQXk5QixZQUFBLEVBQWM0QyxPQUFBO0VBR2RjLE1BQUEsRUFBUXp4QixhQUFBO0VBQ1JtZSxPQUFBLEVBQVNuZSxhQUFBLENBQWM3VCxLQUFBLENBQU0sR0FBRyxFQUM3QlIsR0FBQSxDQUFJNG5CLENBQUEsSUFBSy9uQixRQUFBLENBQVMrbkIsQ0FBQyxDQUFDLEVBQ3BCeHBCLE1BQUEsQ0FBTyxDQUFDeVAsQ0FBQSxFQUFHd1IsQ0FBQSxFQUFHOWdCLENBQUEsS0FBTXNQLENBQUEsR0FBS3dSLENBQUEsR0FBSTJCLElBQUEsQ0FBSzhZLEdBQUEsQ0FBSSxJQUFJdjdCLENBQUEsR0FBSSxDQUFDLENBQUU7Q0FZckQ7QUFFRDdFLEtBQUEsQ0FBTXFzQyxNQUFBLEdBQVMzWSxTQUFBLENBQVUxekIsS0FBQSxDQUFNMG9DLFlBQUEsQ0FBYXpZLFdBQVc7QUNyT3ZELElBQUksT0FBT25YLGFBQUEsS0FBa0IsZUFBZSxPQUFPd3pCLGdCQUFBLEtBQXFCLGFBQWE7RUFDbkY5YixZQUFBLENBQWFGLGdDQUFBLEVBQWtDaWMsWUFBQSxJQUFZO0lBQ3pELElBQUksQ0FBQ0Msa0JBQUEsRUFBb0I7TUFDdkIsSUFBSWgwQixLQUFBO01BQ0osSUFBSTJDLFVBQUEsRUFBWTtRQUNkM0MsS0FBQSxHQUFRN0osUUFBQSxDQUFTK0osV0FBQSxDQUFZLGFBQWE7UUFDMUNGLEtBQUEsQ0FBTWkwQixlQUFBLENBQWdCbGMsOEJBQUEsRUFBZ0MsTUFBTSxNQUFNZ2MsWUFBWTthQUN6RTtRQUNML3pCLEtBQUEsR0FBUSxJQUFJSSxXQUFBLENBQVkyWCw4QkFBQSxFQUFnQztVQUN0RDFYLE1BQUEsRUFBUTB6QjtTQUNUOztNQUVIQyxrQkFBQSxHQUFxQjtNQUNyQjF6QixhQUFBLENBQWNOLEtBQUs7TUFDbkJnMEIsa0JBQUEsR0FBcUI7O0dBRXhCO0VBQ0RGLGdCQUFBLENBQWlCL2IsOEJBQUEsRUFBZ0MsQ0FBQztJQUFDMVg7RUFBTSxNQUFnQztJQUN2RixJQUFJLENBQUMyekIsa0JBQUEsRUFBb0I7TUFDdkJFLGdCQUFBLENBQWlCN3pCLE1BQU07O0dBRTFCOztTQUdhNnpCLGlCQUFpQkMsV0FBQSxFQUE2QjtFQUM1RCxJQUFJQyxLQUFBLEdBQVFKLGtCQUFBO0VBQ1osSUFBSTtJQUNGQSxrQkFBQSxHQUFxQjtJQUNyQmhjLFlBQUEsQ0FBYXFCLGNBQUEsQ0FBZXRVLElBQUEsQ0FBS292QixXQUFXOztJQUU1Q0gsa0JBQUEsR0FBcUJJLEtBQUE7O0FBRXpCO0FBRU8sSUFBSUosa0JBQUEsR0FBcUI7QUMvQmhDLElBQUksT0FBT0ssZ0JBQUEsS0FBcUIsYUFBYTtFQUMzQyxNQUFNQyxFQUFBLEdBQUssSUFBSUQsZ0JBQUEsQ0FBaUJ0Yyw4QkFBOEI7RUFVOUQsSUFBSSxPQUFRdWMsRUFBQSxDQUFXQyxLQUFBLEtBQVUsWUFBWTtJQUMxQ0QsRUFBQSxDQUFXQyxLQUFBLENBQUs7O0VBTW5CdmMsWUFBQSxDQUFhRixnQ0FBQSxFQUFtQzBjLFlBQUEsSUFBWTtJQUMxRCxJQUFJLENBQUNSLGtCQUFBLEVBQW9CO01BQ3ZCTSxFQUFBLENBQUdHLFdBQUEsQ0FBWUQsWUFBWTs7R0FFOUI7RUFLREYsRUFBQSxDQUFHSSxTQUFBLEdBQWEzYixFQUFBLElBQUU7SUFDaEIsSUFBSUEsRUFBQSxDQUFHNGIsSUFBQSxFQUFNVCxnQkFBQSxDQUFpQm5iLEVBQUEsQ0FBRzRiLElBQUk7O1dBRTlCLE9BQU90c0MsSUFBQSxLQUFTLGVBQWUsT0FBT3VhLFNBQUEsS0FBYyxhQUFhO0VBTzFFb1YsWUFBQSxDQUFhRixnQ0FBQSxFQUFtQzBjLFlBQUEsSUFBWTtJQUMxRCxJQUFJO01BQ0YsSUFBSSxDQUFDUixrQkFBQSxFQUFvQjtRQUN2QixJQUFJLE9BQU9ZLFlBQUEsS0FBaUIsYUFBYTtVQUV2Q0EsWUFBQSxDQUFhQyxPQUFBLENBQ1g5Yyw4QkFBQSxFQUNBbFMsSUFBQSxDQUFLQyxTQUFBLENBQVU7WUFDYmd2QixJQUFBLEVBQU1obUIsSUFBQSxDQUFLaW1CLE1BQUEsQ0FBTTtZQUNqQlA7V0FDRCxDQUFDOztRQUdOLElBQUksT0FBT25zQyxJQUFBLENBQUssZUFBZSxVQUFVO1VBRXZDLENBQUMsR0FBR0EsSUFBQSxDQUFLLFdBQVcyc0MsUUFBQSxDQUFTO1lBQUVDLG1CQUFBLEVBQXFCO1VBQUksQ0FBRSxDQUFDLEVBQUVqc0MsT0FBQSxDQUMxRGtzQyxNQUFBLElBQ0NBLE1BQUEsQ0FBT1QsV0FBQSxDQUFZO1lBQ2pCanhCLElBQUEsRUFBTXVVLDhCQUFBO1lBQ055YztXQUNELENBQUM7OzthQUlWbnNCLEVBQUEsR0FBTTtHQUNUO0VBS0QsSUFBSSxPQUFPeXJCLGdCQUFBLEtBQXFCLGFBQWE7SUFDekNBLGdCQUFBLENBQWlCLFdBQVkvYSxFQUFBLElBQWdCO01BQzdDLElBQUlBLEVBQUEsQ0FBRzl2QixHQUFBLEtBQVE4dUIsOEJBQUEsRUFBZ0M7UUFDN0MsTUFBTTRjLElBQUEsR0FBTzl1QixJQUFBLENBQUtzdkIsS0FBQSxDQUFNcGMsRUFBQSxDQUFHcWMsUUFBUTtRQUNuQyxJQUFJVCxJQUFBLEVBQU1ULGdCQUFBLENBQWlCUyxJQUFBLENBQUtILFlBQVk7O0tBRS9DOztFQU1ILE1BQU1hLFdBQUEsR0FBY2h0QyxJQUFBLENBQUs4TixRQUFBLElBQVl5TSxTQUFBLENBQVUweUIsYUFBQTtFQUMvQyxJQUFJRCxXQUFBLEVBQWE7SUFFZkEsV0FBQSxDQUFZdkIsZ0JBQUEsQ0FBaUIsV0FBV3lCLHVCQUF1Qjs7O0FBSW5FLFNBQVNBLHdCQUF3QjtFQUFFWjtBQUFJLEdBQWdCO0VBQ3JELElBQUlBLElBQUEsSUFBUUEsSUFBQSxDQUFLbnhCLElBQUEsS0FBU3VVLDhCQUFBLEVBQWdDO0lBQ3hEbWMsZ0JBQUEsQ0FBaUJTLElBQUEsQ0FBS0gsWUFBWTs7QUFFdEM7QUNoRkExOEIsWUFBQSxDQUFhZCxlQUFBLEdBQWtCekQsUUFBQTtBQUcvQmxELFFBQUEsQ0FBZUosS0FBQSxFQUFhK1MscUJBQXFCOzs7QTFEakJqRCxJQUFPcGIsbUJBQUEsR0FBUUgsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==