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
var Dexie$1 = class _Dexie$1 {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = _Dexie$1.dependencies;
    this._options = options = {
      addons: _Dexie$1.addons,
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
        _Dexie$1.vip(() => {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2RleGllLjMuMi43LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL3V0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2RlYnVnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9lcnJvcnMvZXJyb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvY2hhaW5pbmctZnVuY3Rpb25zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy90ZW1wLXRyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbWJpbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9rZXlyYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL3dvcmthcm91bmQtdW5kZWZpbmVkLXByaW1rZXkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvRXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvbWFrZS1jbGFzcy1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy90YWJsZS90YWJsZS1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NtcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvY29tcGFyZS1mdW5jdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvd2hlcmUtY2xhdXNlL3doZXJlLWNsYXVzZS1oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvd2hlcmUtY2xhdXNlL3doZXJlLWNsYXVzZS1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2V2ZW50LXdyYXBwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9nbG9iYWxzL2dsb2JhbC1ldmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24tY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvaW5kZXgtc3BlYy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy90YWJsZS1zY2hlbWEudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9xdWlya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9nZXQta2V5LWV4dHJhY3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2RiY29yZS1pbmRleGVkZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZ2VuZXJhdGUtbWlkZGxld2FyZS1zdGFja3MudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi9zY2hlbWEtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy92ZXJzaW9uL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2RhdGFiYXNlLWVudW1lcmF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdmlwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL25vZGVfbW9kdWxlcy9zYWZhcmktMTQtaWRiLWZpeC9kaXN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLW9wZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMveWllbGQtc3VwcG9ydC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS90cmFuc2FjdGlvbi1oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvdmlydHVhbC1pbmRleC1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvZ2V0LW9iamVjdC1kaWZmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWVmZmVjdGl2ZS1rZXlzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9ob29rcy9ob29rcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvY2FjaGUtZXhpc3RpbmctdmFsdWVzLW1pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvcmFuZ2VzZXQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvb2JzZXJ2YWJpbGl0eS1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL29ic2VydmFibGUvb2JzZXJ2YWJsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9leHRlbmQtb2JzZXJ2YWJpbGl0eS1zZXQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvbGl2ZS1xdWVyeS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1kb20tZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2RleGllLXN0YXRpYy1wcm9wcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9wcm9wYWdhdGUtbG9jYWxseS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvbGl2ZS1xdWVyeS9lbmFibGUtYnJvYWRjYXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJkZXhpZV8zXzJfN19leHBvcnRzIiwiX19leHBvcnQiLCJEZXhpZSIsIkRleGllJDEiLCJSYW5nZVNldCIsImRlZmF1bHQiLCJkZXhpZV8zXzJfN19kZWZhdWx0IiwibGl2ZVF1ZXJ5IiwibWVyZ2VSYW5nZXMiLCJyYW5nZXNPdmVybGFwIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9nbG9iYWwiLCJnbG9iYWxUaGlzIiwic2VsZiIsIndpbmRvdyIsImdsb2JhbCIsImtleXMiLCJPYmplY3QiLCJpc0FycmF5IiwiQXJyYXkiLCJQcm9taXNlIiwiZXh0ZW5kIiwib2JqIiwiZXh0ZW5zaW9uIiwiZm9yRWFjaCIsImtleSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJwcm9wIiwiY2FsbCIsInByb3BzIiwicHJvdG8iLCJSZWZsZWN0Iiwib3duS2V5cyIsInNldFByb3AiLCJkZWZpbmVQcm9wZXJ0eSIsImZ1bmN0aW9uT3JHZXRTZXQiLCJvcHRpb25zIiwiZ2V0Iiwic2V0IiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJ3cml0YWJsZSIsImRlcml2ZSIsIkNoaWxkIiwiZnJvbSIsIlBhcmVudCIsInByb3RvdHlwZSIsImNyZWF0ZSIsImJpbmQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eURlc2NyaXB0b3IiLCJwZCIsIl9zbGljZSIsInNsaWNlIiwiYXJncyIsInN0YXJ0IiwiZW5kIiwib3ZlcnJpZGUiLCJvcmlnRnVuYyIsIm92ZXJyaWRlZEZhY3RvcnkiLCJhc3NlcnQiLCJiIiwiRXJyb3IiLCJhc2FwJDEiLCJmbiIsInNldEltbWVkaWF0ZSIsInNldFRpbWVvdXQiLCJhcnJheVRvT2JqZWN0IiwiYXJyYXkiLCJleHRyYWN0b3IiLCJyZWR1Y2UiLCJyZXN1bHQiLCJpdGVtIiwiaSIsIm5hbWVBbmRWYWx1ZSIsInRyeUNhdGNoIiwib25lcnJvciIsImFwcGx5IiwiZXgiLCJnZXRCeUtleVBhdGgiLCJrZXlQYXRoIiwicnYiLCJsIiwibGVuZ3RoIiwidmFsIiwicHVzaCIsInBlcmlvZCIsImluZGV4T2YiLCJpbm5lck9iaiIsInN1YnN0ciIsInNldEJ5S2V5UGF0aCIsImlzRnJvemVuIiwiY3VycmVudEtleVBhdGgiLCJyZW1haW5pbmdLZXlQYXRoIiwiaXNOYU4iLCJwYXJzZUludCIsInNwbGljZSIsImRlbEJ5S2V5UGF0aCIsIm1hcCIsImtwIiwic2hhbGxvd0Nsb25lIiwibSIsImNvbmNhdCIsImZsYXR0ZW4iLCJhIiwiaW50cmluc2ljVHlwZU5hbWVzIiwic3BsaXQiLCJudW0iLCJ0IiwiZmlsdGVyIiwiaW50cmluc2ljVHlwZXMiLCJ4IiwiY2lyY3VsYXJSZWZzIiwiZGVlcENsb25lIiwiYW55IiwiV2Vha01hcCIsImlubmVyRGVlcENsb25lIiwiY29uc3RydWN0b3IiLCJ0b1N0cmluZyIsInRvU3RyaW5nVGFnIiwibyIsIml0ZXJhdG9yU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJnZXRJdGVyYXRvck9mIiwiTk9fQ0hBUl9BUlJBWSIsImdldEFycmF5T2YiLCJhcnJheUxpa2UiLCJpdCIsImFyZ3VtZW50cyIsIm5leHQiLCJkb25lIiwiaXNBc3luY0Z1bmN0aW9uIiwiZGVidWciLCJsb2NhdGlvbiIsInRlc3QiLCJocmVmIiwic2V0RGVidWciLCJsaWJyYXJ5RmlsdGVyIiwiTkVFRFNfVEhST1dfRk9SX1NUQUNLIiwic3RhY2siLCJnZXRFcnJvcldpdGhTdGFjayIsImUiLCJwcmV0dHlTdGFjayIsImV4Y2VwdGlvbiIsIm51bUlnbm9yZWRGcmFtZXMiLCJuYW1lIiwibWVzc2FnZSIsImZyYW1lIiwiam9pbiIsImRleGllRXJyb3JOYW1lcyIsImlkYkRvbUVycm9yTmFtZXMiLCJlcnJvckxpc3QiLCJkZWZhdWx0VGV4dHMiLCJWZXJzaW9uQ2hhbmdlZCIsIkRhdGFiYXNlQ2xvc2VkIiwiQWJvcnQiLCJUcmFuc2FjdGlvbkluYWN0aXZlIiwiTWlzc2luZ0FQSSIsIkRleGllRXJyb3IiLCJtc2ciLCJfZSIsIl9zdGFjayIsImdldE11bHRpRXJyb3JNZXNzYWdlIiwiZmFpbHVyZXMiLCJ2IiwicyIsIk1vZGlmeUVycm9yIiwic3VjY2Vzc0NvdW50IiwiZmFpbGVkS2V5cyIsIkJ1bGtFcnJvciIsInBvcyIsImZhaWx1cmVzQnlQb3MiLCJlcnJuYW1lcyIsIkJhc2VFeGNlcHRpb24iLCJleGNlcHRpb25zIiwiZnVsbE5hbWUiLCJEZXhpZUVycm9yMiIsIm1zZ09ySW5uZXIiLCJpbm5lciIsIlN5bnRheCIsIlN5bnRheEVycm9yIiwiVHlwZSIsIlR5cGVFcnJvciIsIlJhbmdlIiwiUmFuZ2VFcnJvciIsImV4Y2VwdGlvbk1hcCIsIm1hcEVycm9yIiwiZG9tRXJyb3IiLCJmdWxsTmFtZUV4Y2VwdGlvbnMiLCJub3AiLCJtaXJyb3IiLCJwdXJlRnVuY3Rpb25DaGFpbiIsImYxIiwiZjIiLCJjYWxsQm90aCIsIm9uMSIsIm9uMiIsImhvb2tDcmVhdGluZ0NoYWluIiwicmVzIiwib25zdWNjZXNzIiwicmVzMiIsImhvb2tEZWxldGluZ0NoYWluIiwiaG9va1VwZGF0aW5nQ2hhaW4iLCJtb2RpZmljYXRpb25zIiwicmV2ZXJzZVN0b3BwYWJsZUV2ZW50Q2hhaW4iLCJwcm9taXNhYmxlQ2hhaW4iLCJ0aGVuIiwidGhpeiIsIklOVEVSTkFMIiwiTE9OR19TVEFDS1NfQ0xJUF9MSU1JVCIsIk1BWF9MT05HX1NUQUNLUyIsIlpPTkVfRUNIT19MSU1JVCIsInJlc29sdmVkTmF0aXZlUHJvbWlzZSIsIm5hdGl2ZVByb21pc2VQcm90byIsInJlc29sdmVkR2xvYmFsUHJvbWlzZSIsImdsb2JhbFAiLCJyZXNvbHZlIiwiY3J5cHRvIiwic3VidGxlIiwibmF0aXZlUCIsImRpZ2VzdCIsIlVpbnQ4QXJyYXkiLCJuYXRpdmVQcm9taXNlVGhlbiIsIk5hdGl2ZVByb21pc2UiLCJwYXRjaEdsb2JhbFByb21pc2UiLCJzdGFja19iZWluZ19nZW5lcmF0ZWQiLCJzY2hlZHVsZVBoeXNpY2FsVGljayIsInBoeXNpY2FsVGljayIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJoaWRkZW5EaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsImFzYXAiLCJjYWxsYmFjayIsIm1pY3JvdGlja1F1ZXVlIiwibmVlZHNOZXdQaHlzaWNhbFRpY2siLCJpc091dHNpZGVNaWNyb1RpY2siLCJ1bmhhbmRsZWRFcnJvcnMiLCJyZWplY3RpbmdFcnJvcnMiLCJjdXJyZW50RnVsZmlsbGVyIiwicmVqZWN0aW9uTWFwcGVyIiwiZ2xvYmFsUFNEIiwiaWQiLCJyZWYiLCJ1bmhhbmRsZWRzIiwib251bmhhbmRsZWQiLCJnbG9iYWxFcnJvciIsInBncCIsImVudiIsImZpbmFsaXplIiwidWgiLCJQU0QiLCJudW1TY2hlZHVsZWRDYWxscyIsInRpY2tGaW5hbGl6ZXJzIiwiRGV4aWVQcm9taXNlIiwiX2xpc3RlbmVycyIsIm9udW5jYXRjaGVkIiwiX2xpYiIsInBzZCIsIl9QU0QiLCJfc3RhY2tIb2xkZXIiLCJfcHJldiIsIl9udW1QcmV2IiwiX3N0YXRlIiwiX3ZhbHVlIiwiaGFuZGxlUmVqZWN0aW9uIiwiZXhlY3V0ZVByb21pc2VUYXNrIiwidGhlblByb3AiLCJtaWNyb1Rhc2tJZCIsInRvdGFsRWNob2VzIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicG9zc2libGVBd2FpdCIsImNsZWFudXAiLCJkZWNyZW1lbnRFeHBlY3RlZEF3YWl0cyIsInJlamVjdCIsInByb3BhZ2F0ZVRvTGlzdGVuZXIiLCJMaXN0ZW5lciIsIm5hdGl2ZUF3YWl0Q29tcGF0aWJsZVdyYXAiLCJsaW5rVG9QcmV2aW91c1Byb21pc2UiLCJfdGhlbiIsImNhdGNoIiwidHlwZTIiLCJoYW5kbGVyIiwiZXJyIiwiUHJvbWlzZVJlamVjdCIsImZpbmFsbHkiLCJvbkZpbmFsbHkiLCJzdGFja3MiLCJnZXRTdGFjayIsInRpbWVvdXQiLCJtcyIsIkluZmluaXR5IiwiaGFuZGxlIiwiVGltZW91dCIsImNsZWFyVGltZW91dCIsInNuYXBTaG90Iiwiem9uZSIsImFsbCIsInZhbHVlcyIsIm9uUG9zc2libGVQYXJhbGxlbGxBc3luYyIsInJlbWFpbmluZyIsInJhY2UiLCJuZXdQU0QiLCJuZXdTY29wZSIsInVzZVBTRCIsInNjaGVkdWxlciIsImZvbGxvdyIsInpvbmVQcm9wcyIsInJlc29sdmUyIiwicmVqZWN0MiIsInJ1bl9hdF9lbmRfb2ZfdGhpc19vcl9uZXh0X3BoeXNpY2FsX3RpY2siLCJhbGxTZXR0bGVkIiwicG9zc2libGVQcm9taXNlcyIsInJlc3VsdHMiLCJwIiwic3RhdHVzIiwicmVhc29uIiwiQWdncmVnYXRlRXJyb3IiLCJmYWlsdXJlIiwicHJvbWlzZSIsInNob3VsZEV4ZWN1dGVUaWNrIiwiYmVnaW5NaWNyb1RpY2tTY29wZSIsInByb3BhZ2F0ZUFsbExpc3RlbmVycyIsImVuZE1pY3JvVGlja1Njb3BlIiwiX3Byb21pc2UiLCJvcmlnUHJvcCIsImFkZFBvc3NpYmx5VW5oYW5kbGVkRXJyb3IiLCJsaXN0ZW5lcnMiLCJsZW4iLCJmaW5hbGl6ZVBoeXNpY2FsVGljayIsImxpc3RlbmVyIiwiY2IiLCJjYWxsTGlzdGVuZXIiLCJyZXQiLCJtYXJrRXJyb3JBc0hhbmRsZWQiLCJsaW1pdCIsImVycm9yTmFtZSIsInByZXYiLCJudW1QcmV2Iiwid2FzUm9vdEV4ZWMiLCJjYWxsYmFja3MiLCJ1bmhhbmRsZWRFcnJzIiwiZmluYWxpemVycyIsImZpbmFsaXplciIsInNvbWUiLCJ3cmFwIiwiZXJyb3JDYXRjaGVyIiwib3V0ZXJTY29wZSIsInN3aXRjaFRvWm9uZSIsInRhc2siLCJhd2FpdHMiLCJlY2hvZXMiLCJ0YXNrQ291bnRlciIsInpvbmVTdGFjayIsInpvbmVFY2hvZXMiLCJ6b25lX2lkX2NvdW50ZXIiLCJwcm9wczIiLCJhMSIsImEyIiwicGFyZW50IiwiZ2xvYmFsRW52IiwiUHJvbWlzZVByb3AiLCJudGhlbiIsImdldFBhdGNoZWRQcm9taXNlVGhlbiIsImd0aGVuIiwiaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJwb3NzaWJsZVByb21pc2UiLCJyZWplY3Rpb24iLCJ6b25lRW50ZXJFY2hvIiwidGFyZ2V0Wm9uZSIsInpvbmVMZWF2ZUVjaG8iLCJwb3AiLCJiRW50ZXJpbmdab25lIiwiY3VycmVudFpvbmUiLCJlbnF1ZXVlTmF0aXZlTWljcm9UYXNrIiwiR2xvYmFsUHJvbWlzZSIsInRhcmdldEVudiIsImEzIiwiam9iIiwib3V0ZXJab25lIiwib3JpZ1RoZW4iLCJvblJlc29sdmVkIiwiVU5IQU5ETEVEUkVKRUNUSU9OIiwiZXZlbnQiLCJldmVudERhdGEiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwiXyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb25zb2xlIiwid2FybiIsInRlbXBUcmFuc2FjdGlvbiIsImRiIiwibW9kZSIsInN0b3JlTmFtZXMiLCJpZGJkYiIsIm9wZW5Db21wbGV0ZSIsImxldFRocm91Z2giLCJfdmlwIiwiZGJPcGVuRXJyb3IiLCJpc0JlaW5nT3BlbmVkIiwiX29wdGlvbnMiLCJhdXRvT3BlbiIsIm9wZW4iLCJkYlJlYWR5UHJvbWlzZSIsInRyYW5zIiwiX2NyZWF0ZVRyYW5zYWN0aW9uIiwiX2RiU2NoZW1hIiwiUFIxMzk4X21heExvb3AiLCJJbnZhbGlkU3RhdGUiLCJpc09wZW4iLCJfY2xvc2UiLCJfY29tcGxldGlvbiIsIkRFWElFX1ZFUlNJT04iLCJtYXhTdHJpbmciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5LZXkiLCJJTlZBTElEX0tFWV9BUkdVTUVOVCIsIlNUUklOR19FWFBFQ1RFRCIsImNvbm5lY3Rpb25zIiwiaXNJRU9yRWRnZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhhc0lFRGVsZXRlT2JqZWN0U3RvcmVCdWciLCJoYW5nc09uRGVsZXRlTGFyZ2VLZXlSYW5nZSIsImRleGllU3RhY2tGcmFtZUZpbHRlciIsIkRCTkFNRVNfREIiLCJSRUFET05MWSIsIlJFQURXUklURSIsImNvbWJpbmUiLCJmaWx0ZXIxIiwiZmlsdGVyMiIsIkFueVJhbmdlIiwidHlwZSIsImxvd2VyIiwibG93ZXJPcGVuIiwidXBwZXIiLCJ1cHBlck9wZW4iLCJ3b3JrYXJvdW5kRm9yVW5kZWZpbmVkUHJpbUtleSIsIlRhYmxlIiwiX3RyYW5zIiwid3JpdGVMb2NrZWQiLCJfdHgiLCJ0YWJsZU5hbWUiLCJjaGVja1RhYmxlSW5UcmFuc2FjdGlvbiIsInRyYW5zMiIsInNjaGVtYSIsIk5vdEZvdW5kIiwiaWRidHJhbnMiLCJ0cmFuc2xlc3MiLCJrZXlPckNyaXQiLCJ3aGVyZSIsImZpcnN0IiwiY29yZSIsImhvb2siLCJyZWFkaW5nIiwiZmlyZSIsImluZGV4T3JDcml0IiwiV2hlcmVDbGF1c2UiLCJrZXlQYXRocyIsImVxdWFscyIsImNvbXBvdW5kSW5kZXgiLCJpbmRleGVzIiwicHJpbUtleSIsIml4IiwiY29tcG91bmQiLCJldmVyeSIsInNvcnQiLCJfbWF4S2V5Iiwia2V5UGF0aHNJblZhbGlkT3JkZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiaWR4QnlOYW1lIiwiaWRiIiwiX2RlcHMiLCJpbmRleGVkREIiLCJjbXAiLCJpZHgiLCJmaWx0ZXJGdW5jdGlvbiIsInByZXZJbmRleCIsInByZXZGaWx0ZXJGbiIsImluZGV4IiwibXVsdGkiLCJ0b0NvbGxlY3Rpb24iLCJhbmQiLCJjb3VudCIsInRoZW5TaG9ydGN1dCIsIm9mZnNldCIsIm51bVJvd3MiLCJlYWNoIiwidG9BcnJheSIsIkNvbGxlY3Rpb24iLCJvcmRlckJ5IiwicmV2ZXJzZSIsIm1hcFRvQ2xhc3MiLCJtYXBwZWRDbGFzcyIsInJlYWRIb29rIiwidW5zdWJzY3JpYmUiLCJkZWZpbmVDbGFzcyIsIkNsYXNzIiwiY29udGVudCIsImFkZCIsImF1dG8iLCJvYmpUb0FkZCIsIm11dGF0ZSIsIm51bUZhaWx1cmVzIiwibGFzdFJlc3VsdCIsInVwZGF0ZSIsImtleU9yT2JqZWN0IiwiSW52YWxpZEFyZ3VtZW50IiwiX2EiLCJtb2RpZnkiLCJwdXQiLCJkZWxldGUiLCJjbGVhciIsInJhbmdlIiwiYnVsa0dldCIsImtleXMyIiwiZ2V0TWFueSIsImJ1bGtBZGQiLCJvYmplY3RzIiwia2V5c09yT3B0aW9ucyIsIndhbnRSZXN1bHRzIiwiYWxsS2V5cyIsIm51bU9iamVjdHMiLCJvYmplY3RzVG9BZGQiLCJidWxrUHV0Iiwib2JqZWN0c1RvUHV0IiwiYnVsa0RlbGV0ZSIsIm51bUtleXMiLCJFdmVudHMiLCJjdHgiLCJldnMiLCJldmVudE5hbWUiLCJzdWJzY3JpYmVyIiwiaTIiLCJzdWJzY3JpYmUiLCJhZGRFdmVudFR5cGUiLCJjaGFpbkZ1bmN0aW9uIiwiZGVmYXVsdEZ1bmN0aW9uIiwiYWRkQ29uZmlndXJlZEV2ZW50cyIsImNvbnRleHQiLCJzdWJzY3JpYmVycyIsImNmZyIsImFyZ3MyIiwiZmlyZUV2ZW50IiwibWFrZUNsYXNzQ29uc3RydWN0b3IiLCJjcmVhdGVUYWJsZUNvbnN0cnVjdG9yIiwiVGFibGUyIiwidGFibGVTY2hlbWEiLCJfYWxsVGFibGVzIiwiaXNQbGFpbktleVJhbmdlIiwiaWdub3JlTGltaXRGaWx0ZXIiLCJhbGdvcml0aG0iLCJvciIsImp1c3RMaW1pdCIsInJlcGxheUZpbHRlciIsImFkZEZpbHRlciIsImFkZFJlcGxheUZpbHRlciIsImZhY3RvcnkiLCJpc0xpbWl0RmlsdGVyIiwiY3VyciIsImFkZE1hdGNoRmlsdGVyIiwiaXNNYXRjaCIsImdldEluZGV4T3JTdG9yZSIsImNvcmVTY2hlbWEiLCJpc1ByaW1LZXkiLCJwcmltYXJ5S2V5IiwiZ2V0SW5kZXhCeUtleVBhdGgiLCJTY2hlbWEiLCJvcGVuQ3Vyc29yIiwiY29yZVRhYmxlIiwia2V5c09ubHkiLCJkaXIiLCJ1bmlxdWUiLCJxdWVyeSIsIml0ZXIiLCJjb3JlVHJhbnMiLCJpdGVyYXRlIiwidmFsdWVNYXBwZXIiLCJ1bmlvbiIsImN1cnNvciIsImFkdmFuY2UiLCJzdG9wIiwiZmFpbCIsIl9pdGVyYXRlIiwiY3Vyc29yUHJvbWlzZSIsIm1hcHBlZEZuIiwiYyIsIndyYXBwZWRGbiIsImNvbnRpbnVlIiwiYWR2YW5jZXIiLCJ0YSIsInRiIiwiTmFOIiwiY29tcGFyZVVpbnQ4QXJyYXlzIiwiZ2V0VWludDhBcnJheSIsImNvbXBhcmVBcnJheXMiLCJhbCIsImJsIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJ0c1RhZyIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIiwiX3JlYWQiLCJfY3R4IiwiZXJyb3IiLCJ0YWJsZSIsIl93cml0ZSIsIl9hZGRBbGdvcml0aG0iLCJjbG9uZSIsInJhdyIsImNvdW50MiIsIk1hdGgiLCJtaW4iLCJzb3J0QnkiLCJwYXJ0cyIsImxhc3RQYXJ0IiwibGFzdEluZGV4IiwiZ2V0dmFsIiwib3JkZXIiLCJzb3J0ZXIiLCJhVmFsIiwiYlZhbCIsIm9mZnNldExlZnQiLCJyb3dzTGVmdCIsInVudGlsIiwiYkluY2x1ZGVTdG9wRW50cnkiLCJsYXN0IiwiaW5kZXhOYW1lIiwiX29uZGlyZWN0aW9uY2hhbmdlIiwiZGVzYyIsImVhY2hLZXkiLCJlYWNoVW5pcXVlS2V5IiwiZWFjaFByaW1hcnlLZXkiLCJwcmltYXJ5S2V5cyIsInVuaXF1ZUtleXMiLCJmaXJzdEtleSIsImxhc3RLZXkiLCJkaXN0aW5jdCIsInN0cktleSIsImZvdW5kIiwiY2hhbmdlcyIsIm1vZGlmeWVyIiwiYW55dGhpbmdNb2RpZmllZCIsIm91dGJvdW5kIiwiZXh0cmFjdEtleSIsIm1vZGlmeUNodW5rU2l6ZSIsInRvdGFsRmFpbHVyZXMiLCJhcHBseU11dGF0ZVJlc3VsdCIsImV4cGVjdGVkQ291bnQiLCJuZXh0Q2h1bmsiLCJjYWNoZSIsImFkZFZhbHVlcyIsInB1dFZhbHVlcyIsInB1dEtleXMiLCJkZWxldGVLZXlzIiwib3JpZ1ZhbHVlIiwiY3R4MiIsImNyaXRlcmlhIiwiZGVsZXRlQ2FsbGJhY2siLCJjaGFuZ2VTcGVjIiwiY29yZVJhbmdlIiwiY3JlYXRlQ29sbGVjdGlvbkNvbnN0cnVjdG9yIiwiQ29sbGVjdGlvbjIiLCJ3aGVyZUNsYXVzZSIsImtleVJhbmdlR2VuZXJhdG9yIiwia2V5UmFuZ2UiLCJ3aGVyZUN0eCIsInJlYWRpbmdIb29rIiwic2ltcGxlQ29tcGFyZSIsInNpbXBsZUNvbXBhcmVSZXZlcnNlIiwiY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UiLCJUIiwiY29sbGVjdGlvbiIsImVtcHR5Q29sbGVjdGlvbiIsInJhbmdlRXF1YWwiLCJ1cHBlckZhY3RvcnkiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibG93ZXJGYWN0b3J5IiwibmV4dENhc2luZyIsImxvd2VyS2V5IiwidXBwZXJOZWVkbGUiLCJsb3dlck5lZWRsZSIsImNtcDIiLCJsbHAiLCJsd3JLZXlDaGFyIiwiYWRkSWdub3JlQ2FzZUFsZ29yaXRobSIsIm1hdGNoIiwibmVlZGxlcyIsInN1ZmZpeCIsImNvbXBhcmUiLCJ1cHBlck5lZWRsZXMiLCJsb3dlck5lZWRsZXMiLCJkaXJlY3Rpb24iLCJuZXh0S2V5U3VmZml4IiwibmVlZGxlc0xlbiIsImluaXREaXJlY3Rpb24iLCJuZWVkbGVCb3VuZHMiLCJuZWVkbGUiLCJuYiIsImNyZWF0ZVJhbmdlIiwiZGlyZWN0aW9uMiIsImZpcnN0UG9zc2libGVOZWVkbGUiLCJsb3dlc3RQb3NzaWJsZUNhc2luZyIsImNhc2luZyIsImJldHdlZW4iLCJpbmNsdWRlTG93ZXIiLCJpbmNsdWRlVXBwZXIiLCJfY21wIiwiYWJvdmUiLCJhYm92ZU9yRXF1YWwiLCJiZWxvdyIsImJlbG93T3JFcXVhbCIsInN0YXJ0c1dpdGgiLCJzdHIiLCJzdGFydHNXaXRoSWdub3JlQ2FzZSIsImVxdWFsc0lnbm9yZUNhc2UiLCJhbnlPZklnbm9yZUNhc2UiLCJzdGFydHNXaXRoQW55T2ZJZ25vcmVDYXNlIiwibiIsImFueU9mIiwiX2FzY2VuZGluZyIsIl9kZXNjZW5kaW5nIiwibm90RXF1YWwiLCJpbkFueVJhbmdlIiwiaW5jbHVkZUxvd2VycyIsImluY2x1ZGVVcHBlcnMiLCJub25lT2YiLCJyYW5nZXMiLCJhc2NlbmRpbmciLCJkZXNjZW5kaW5nIiwiX21pbiIsIm1heCIsIl9tYXgiLCJhZGRSYW5nZTIiLCJyYW5nZXMyIiwibmV3UmFuZ2UiLCJzb3J0RGlyZWN0aW9uIiwicmFuZ2VTb3J0ZXIiLCJyYW5nZVBvcyIsImtleUlzQmV5b25kQ3VycmVudEVudHJ5Iiwia2V5SXNCZWZvcmVDdXJyZW50RW50cnkiLCJrZXlXaXRoaW5DdXJyZW50UmFuZ2UiLCJjaGVja0tleSIsInN0YXJ0c1dpdGhBbnlPZiIsImNyZWF0ZVdoZXJlQ2xhdXNlQ29uc3RydWN0b3IiLCJXaGVyZUNsYXVzZTIiLCJvckNvbGxlY3Rpb24iLCJpbmRleGVkREIyIiwiX0lEQktleVJhbmdlIiwiSURCS2V5UmFuZ2UiLCJldmVudFJlamVjdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInN0b3BQcm9wYWdhdGlvbiIsIkRFWElFX1NUT1JBR0VfTVVUQVRFRF9FVkVOVF9OQU1FIiwiU1RPUkFHRV9NVVRBVEVEX0RPTV9FVkVOVF9OQU1FIiwiZ2xvYmFsRXZlbnRzIiwiVHJhbnNhY3Rpb24iLCJfbG9jayIsIl9yZWN1bG9jayIsImxvY2tPd25lckZvciIsIl91bmxvY2siLCJfYmxvY2tlZEZ1bmNzIiwiX2xvY2tlZCIsImZuQW5kUFNEIiwic2hpZnQiLCJPcGVuRmFpbGVkIiwiYWN0aXZlIiwidHJhbnNhY3Rpb24iLCJkdXJhYmlsaXR5IiwiY2hyb21lVHJhbnNhY3Rpb25EdXJhYmlsaXR5IiwiZXYiLCJfcmVqZWN0Iiwib25hYm9ydCIsIm9uIiwib25jb21wbGV0ZSIsIl9yZXNvbHZlIiwic3RvcmFnZW11dGF0ZWQiLCJiV3JpdGVMb2NrIiwiUmVhZE9ubHkiLCJwMiIsIl9yb290Iiwid2FpdEZvciIsInByb21pc2VMaWtlIiwicm9vdCIsIl93YWl0aW5nRm9yIiwiX3dhaXRpbmdRdWV1ZSIsInN0b3JlIiwib2JqZWN0U3RvcmUiLCJzcGluIiwiX3NwaW5Db3VudCIsImN1cnJlbnRXYWl0UHJvbWlzZSIsImFib3J0IiwibWVtb2l6ZWRUYWJsZXMiLCJfbWVtb2l6ZWRUYWJsZXMiLCJ0cmFuc2FjdGlvbkJvdW5kVGFibGUiLCJjcmVhdGVUcmFuc2FjdGlvbkNvbnN0cnVjdG9yIiwiVHJhbnNhY3Rpb24yIiwiZGJzY2hlbWEiLCJjb21wbGV0ZSIsIndhc0FjdGl2ZSIsImNyZWF0ZUluZGV4U3BlYyIsInNyYyIsIm5hbWVGcm9tS2V5UGF0aCIsImNyZWF0ZVRhYmxlU2NoZW1hIiwic2FmYXJpTXVsdGlTdG9yZUZpeCIsImdldE1heEtleSIsIklkYktleVJhbmdlIiwib25seSIsImdldEtleUV4dHJhY3RvciIsImdldFNpbmdsZVBhdGhLZXlFeHRyYWN0b3IiLCJhcnJheWlmeSIsIl9pZF9jb3VudGVyIiwiZ2V0S2V5UGF0aEFsaWFzIiwiY3JlYXRlREJDb3JlIiwidG1wVHJhbnMiLCJleHRyYWN0U2NoZW1hIiwiZGIyIiwidGFibGVzMiIsIm9iamVjdFN0b3JlTmFtZXMiLCJ0YWJsZXMiLCJhdXRvSW5jcmVtZW50IiwiaW5kZXhCeUtleVBhdGgiLCJpc1ByaW1hcnlLZXkiLCJpbmRleE5hbWVzIiwibXVsdGlFbnRyeSIsImtleVBhdGgyIiwiY29tcG91bmQyIiwicmVzdWx0MiIsImhhc0dldEFsbCIsIm1ha2VJREJLZXlSYW5nZSIsImlkYlJhbmdlIiwidXBwZXJCb3VuZCIsImxvd2VyQm91bmQiLCJib3VuZCIsImNyZWF0ZURiQ29yZVRhYmxlIiwiaXNBZGRPclB1dCIsInJlcSIsInJlcXMiLCJlcnJvckhhbmRsZXIiLCJhcmdzMSIsInJlcTIiLCJvcGVuQ3Vyc29yMiIsInF1ZXJ5MiIsInNvdXJjZSIsIm9wZW5LZXlDdXJzb3IiLCJfX19pZCIsIl9jdXJzb3JDb250aW51ZSIsIl9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkiLCJjb250aW51ZVByaW1hcnlLZXkiLCJfY3Vyc29yQWR2YW5jZSIsImRvVGhyb3dDdXJzb3JJc05vdFN0YXJ0ZWQiLCJkb1Rocm93Q3Vyc29ySXNTdG9wcGVkIiwiZ290T25lIiwiaXRlcmF0aW9uUHJvbWlzZSIsInJlc29sdmVJdGVyYXRpb24iLCJyZWplY3RJdGVyYXRpb24iLCJndWFyZGVkQ2FsbGJhY2siLCJldjIiLCJoYXNHZXRBbGwyIiwicmVxdWVzdCIsIm5vbkluZmluaXRMaW1pdCIsImlkYktleVJhbmdlIiwiZ2V0QWxsIiwiZ2V0QWxsS2V5cyIsImtleUNvdW50IiwiY2FsbGJhY2tDb3VudCIsInN1Y2Nlc3NIYW5kbGVyIiwiX3BvcyIsInRhYmxlTWFwIiwiTUlOX0tFWSIsIk1BWF9LRVkiLCJjcmVhdGVNaWRkbGV3YXJlU3RhY2siLCJzdGFja0ltcGwiLCJtaWRkbGV3YXJlcyIsImRvd24iLCJjcmVhdGVNaWRkbGV3YXJlU3RhY2tzIiwiZGJjb3JlIiwiZ2VuZXJhdGVNaWRkbGV3YXJlU3RhY2tzIiwiX25vdmlwIiwiX21pZGRsZXdhcmVzIiwidGJsIiwic2V0QXBpT25QbGFjZSIsIm9ianMiLCJ0YWJsZU5hbWVzIiwicHJvcERlc2MiLCJlbnVtZXJhYmxlIiwicmVtb3ZlVGFibGVzQXBpIiwibG93ZXJWZXJzaW9uRmlyc3QiLCJfY2ZnIiwidmVyc2lvbiIsInJ1blVwZ3JhZGVycyIsIm9sZFZlcnNpb24iLCJpZGJVcGdyYWRlVHJhbnMiLCJnbG9iYWxTY2hlbWEiLCJfc3RvcmVOYW1lcyIsInJlamVjdFRyYW5zYWN0aW9uIiwiY3JlYXRlVGFibGUiLCJwb3B1bGF0ZSIsInVwZGF0ZVRhYmxlc0FuZEluZGV4ZXMiLCJxdWV1ZSIsInZlcnNpb25zIiwiX3ZlcnNpb25zIiwiYnVpbGRHbG9iYWxTY2hlbWEiLCJhbnlDb250ZW50VXBncmFkZXJIYXNSdW4iLCJ2ZXJzVG9SdW4iLCJvbGRTY2hlbWEiLCJuZXdTY2hlbWEiLCJhZGp1c3RUb0V4aXN0aW5nSW5kZXhOYW1lcyIsImRpZmYiLCJnZXRTY2hlbWFEaWZmIiwidHVwbGUiLCJjaGFuZ2UiLCJyZWNyZWF0ZSIsIlVwZ3JhZGUiLCJhZGRJbmRleCIsImRlbGV0ZUluZGV4IiwiZGVsIiwiaWR4TmFtZSIsImNvbnRlbnRVcGdyYWRlIiwidXBncmFkZVNjaGVtYSIsImNvbnRlbnRVcGdyYWRlSXNBc3luYyIsInJldHVyblZhbHVlIiwicHJvbWlzZUZvbGxvd2VkIiwiZGVjcmVtZW50b3IiLCJkZWxldGVSZW1vdmVkVGFibGVzIiwicnVuUXVldWUiLCJjcmVhdGVNaXNzaW5nVGFibGVzIiwib2xkRGVmIiwibmV3RGVmIiwiZGVmIiwib2xkSW5kZXhlcyIsIm5ld0luZGV4ZXMiLCJvbGRJZHgiLCJuZXdJZHgiLCJjcmVhdGVPYmplY3RTdG9yZSIsImNvbnRhaW5zIiwic3RvcmVOYW1lIiwiZGVsZXRlT2JqZWN0U3RvcmUiLCJjcmVhdGVJbmRleCIsImRiU3RvcmVOYW1lcyIsImoiLCJpZGJpbmRleCIsInJlYWRHbG9iYWxTY2hlbWEiLCJ2ZXJubyIsInZlcmlmeUluc3RhbGxlZFNjaGVtYSIsImluc3RhbGxlZFNjaGVtYSIsImNoIiwiX2hhc0dldEFsbCIsImRleGllTmFtZSIsImluZGV4U3BlYyIsIldvcmtlckdsb2JhbFNjb3BlIiwicGFyc2VJbmRleFN5bnRheCIsInByaW1LZXlBbmRJbmRleGVzIiwiaW5kZXhOdW0iLCJ0cmltIiwicmVwbGFjZSIsIlZlcnNpb24iLCJfcGFyc2VTdG9yZXNTcGVjIiwic3RvcmVzIiwib3V0U2NoZW1hIiwic3RvcmVzU291cmNlIiwic3RvcmVzU3BlYyIsInVwZ3JhZGUiLCJ1cGdyYWRlRnVuY3Rpb24iLCJjcmVhdGVWZXJzaW9uQ29uc3RydWN0b3IiLCJWZXJzaW9uMiIsInZlcnNpb25OdW1iZXIiLCJnZXREYk5hbWVzVGFibGUiLCJkYk5hbWVzREIiLCJhZGRvbnMiLCJkYm5hbWVzIiwiaGFzRGF0YWJhc2VzTmF0aXZlIiwiZGF0YWJhc2VzIiwiZ2V0RGF0YWJhc2VOYW1lcyIsImluZm9zIiwiaW5mbyIsIl9vbkRhdGFiYXNlQ3JlYXRlZCIsIl9vbkRhdGFiYXNlRGVsZXRlZCIsInZpcCIsImlkYlJlYWR5IiwiaXNTYWZhcmkiLCJ1c2VyQWdlbnREYXRhIiwiaW50ZXJ2YWxJZCIsInRyeUlkYiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRleGllT3BlbiIsInN0YXRlIiwib3BlbkNhbmNlbGxlciIsInRocm93SWZDYW5jZWxsZWQiLCJyZXNvbHZlRGJSZWFkeSIsImRiUmVhZHlSZXNvbHZlIiwidXBncmFkZVRyYW5zYWN0aW9uIiwid2FzQ3JlYXRlZCIsInRyeU9wZW5EQiIsImRiTmFtZSIsImF1dG9TY2hlbWEiLCJyb3VuZCIsIm9uYmxvY2tlZCIsIl9maXJlT25CbG9ja2VkIiwib251cGdyYWRlbmVlZGVkIiwiYWxsb3dFbXB0eURCIiwiY2xvc2UiLCJkZWxyZXEiLCJkZWxldGVEYXRhYmFzZSIsIk5vU3VjaERhdGFiYXNlIiwib2xkVmVyIiwicG93Iiwib252ZXJzaW9uY2hhbmdlIiwidmNGaXJlZCIsIm9uY2xvc2UiLCJvblJlYWR5QmVpbmdGaXJlZCIsInJlYWR5IiwiZmlyZVJlbWFpbmRlcnMiLCJyZW1haW5kZXJzIiwiYXdhaXRJdGVyYXRvciIsImNhbGxOZXh0IiwiZG9UaHJvdyIsInRocm93Iiwib25TdWNjZXNzIiwic3RlcCIsIm9uRXJyb3IiLCJnZXROZXh0IiwiZXh0cmFjdFRyYW5zYWN0aW9uQXJncyIsIl90YWJsZUFyZ3NfIiwic2NvcGVGdW5jIiwiZW50ZXJUcmFuc2FjdGlvblNjb3BlIiwicGFyZW50VHJhbnNhY3Rpb24iLCJzY29wZUZ1bmNJc0FzeW5jIiwiUHJlbWF0dXJlQ29tbWl0IiwicGFkIiwiY3JlYXRlVmlydHVhbEluZGV4TWlkZGxld2FyZSIsImluZGV4TG9va3VwIiwiYWxsVmlydHVhbEluZGV4ZXMiLCJhZGRWaXJ0dWFsSW5kZXhlcyIsImtleVRhaWwiLCJsb3dMZXZlbEluZGV4Iiwia2V5UGF0aEFsaWFzIiwiaW5kZXhMaXN0Iiwia2V5TGVuZ3RoIiwiaXNWaXJ0dWFsIiwidmlydHVhbEluZGV4IiwidmlydHVhbEtleVBhdGgiLCJmaW5kQmVzdEluZGV4IiwidHJhbnNsYXRlUmFuZ2UiLCJ0cmFuc2xhdGVSZXF1ZXN0IiwiY3JlYXRlVmlydHVhbEN1cnNvciIsIl9jb250aW51ZSIsInZpcnR1YWxDdXJzb3IiLCJwcmltYXJ5S2V5MiIsInZpcnR1YWxJbmRleE1pZGRsZXdhcmUiLCJsZXZlbCIsImdldE9iamVjdERpZmYiLCJwcmZ4IiwiYXAiLCJicCIsImFwVHlwZU5hbWUiLCJicFR5cGVOYW1lIiwiZ2V0RWZmZWN0aXZlS2V5cyIsImhvb2tzTWlkZGxld2FyZSIsImRvd25Db3JlIiwiZG93blRhYmxlIiwidGFibGVNaWRkbGV3YXJlIiwiZHhUcmFucyIsImRlbGV0aW5nIiwiY3JlYXRpbmciLCJ1cGRhdGluZyIsImFkZFB1dE9yRGVsZXRlIiwiZGVsZXRlUmFuZ2UiLCJkeFRyYW5zMiIsImdldEV4aXN0aW5nVmFsdWVzIiwiZXhpc3RpbmdWYWx1ZXMiLCJjb250ZXh0cyIsImV4aXN0aW5nVmFsdWUiLCJnZW5lcmF0ZWRQcmltYXJ5S2V5Iiwib2JqZWN0RGlmZiIsImFkZGl0aW9uYWxDaGFuZ2VzIiwicmVxdWVzdGVkVmFsdWUiLCJkZWxldGVOZXh0Q2h1bmsiLCJlZmZlY3RpdmVLZXlzIiwiZ2V0RnJvbVRyYW5zYWN0aW9uQ2FjaGUiLCJjYWNoZUV4aXN0aW5nVmFsdWVzTWlkZGxld2FyZSIsImNhY2hlZFJlc3VsdCIsImlzRW1wdHlSYW5nZSIsIm5vZGUiLCJmcm9tT3JUcmVlIiwidG8iLCJkIiwicmFuZ2VTZXQiLCJhZGRLZXkiLCJhZGRSYW5nZSIsImFkZEtleXMiLCJnZXRSYW5nZVNldEl0ZXJhdG9yIiwibGVmdCIsInJpZ2h0IiwiciIsInJlYmFsYW5jZSIsInJpZ2h0V2FzQ3V0T2ZmIiwibmV3U2V0IiwiX2FkZFJhbmdlU2V0IiwidGFyZ2V0MiIsInJhbmdlU2V0MSIsInJhbmdlU2V0MiIsImkxIiwibmV4dFJlc3VsdDEiLCJuZXh0UmVzdWx0MiIsImtleVByb3ZpZGVkIiwidXAiLCJfYiIsInJvb3RDbG9uZSIsIm9sZFJvb3RSaWdodCIsImNvbXB1dGVEZXB0aCIsIm9ic2VydmFiaWxpdHlNaWRkbGV3YXJlIiwiRlVMTF9SQU5HRSIsInRhYmxlQ2xvbmUiLCJtdXRhdGVkUGFydHMiLCJnZXRSYW5nZVNldCIsInBhcnQiLCJwa1JhbmdlU2V0IiwiZGVsc1JhbmdlU2V0IiwibmV3T2JqcyIsIm9sZENhY2hlIiwib2xkT2JqcyIsInRyYWNrQWZmZWN0ZWRJbmRleGVzIiwiZ2V0UmFuZ2UiLCJyZWFkU3Vic2NyaWJlcnMiLCJtZXRob2QiLCJzdWJzY3IiLCJxdWVyaWVkSW5kZXgiLCJxdWVyaWVkUmFuZ2VzIiwia2V5c1Byb21pc2UiLCJyZXN1bHRpbmdLZXlzIiwicEtleXMiLCJ3YW50VmFsdWVzIiwicGtleSIsImFkZEFmZmVjdGVkSW5kZXgiLCJhZGRLZXlPcktleXMiLCJrZXkyIiwib2xkS2V5IiwibmV3S2V5IiwiX0RleGllJDEiLCJkZXBzIiwiZGVwZW5kZW5jaWVzIiwiY2FuY2VsT3BlbiIsImJTdGlja3kiLCJzdGF0ZTIiLCJuZXdWZXJzaW9uIiwidXNlIiwiYWRkb24iLCJ2ZXJzaW9uSW5zdGFuY2UiLCJfd2hlblJlYWR5IiwidW51c2UiLCJtdyIsImhhc0FyZ3VtZW50cyIsImRvRGVsZXRlIiwiYmFja2VuZERCIiwiaGFzQmVlbkNsb3NlZCIsImhhc0ZhaWxlZCIsImR5bmFtaWNhbGx5T3BlbmVkIiwiX3RyYW5zYWN0aW9uIiwib25seUlmQ29tcGF0aWJsZSIsImlkYk1vZGUiLCJTdWJUcmFuc2FjdGlvbiIsImVudGVyVHJhbnNhY3Rpb24iLCJJbnZhbGlkVGFibGUiLCJzeW1ib2xPYnNlcnZhYmxlIiwib2JzZXJ2YWJsZSIsIk9ic2VydmFibGUiLCJfc3Vic2NyaWJlIiwiZXh0ZW5kT2JzZXJ2YWJpbGl0eVNldCIsInF1ZXJpZXIiLCJoYXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIm9ic2VydmVyIiwiZXhlY3V0ZSIsImV4ZWMiLCJjbG9zZWQiLCJhY2N1bU11dHMiLCJjdXJyZW50T2JzIiwic3Vic2NyaXB0aW9uIiwibXV0YXRpb25MaXN0ZW5lciIsInF1ZXJ5aW5nIiwic3RhcnRlZExpc3RlbmluZyIsInNob3VsZE5vdGlmeSIsImRvUXVlcnkiLCJnZXRWYWx1ZSIsImRvbURlcHMiLCJtb3pJbmRleGVkREIiLCJ3ZWJraXRJbmRleGVkREIiLCJtc0luZGV4ZWREQiIsIndlYmtpdElEQktleVJhbmdlIiwiZGF0YWJhc2VOYW1lIiwiZXhpc3RzIiwiaWdub3JlVHJhbnNhY3Rpb24iLCJhc3luYyIsImdlbmVyYXRvckZuIiwic3Bhd24iLCJjdXJyZW50VHJhbnNhY3Rpb24iLCJwcm9taXNlT3JGdW5jdGlvbiIsIm9wdGlvbmFsVGltZW91dCIsInNlbVZlciIsIm1heEtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVkUGFydHMiLCJwcm9wYWdhdGluZ0xvY2FsbHkiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm9wYWdhdGVMb2NhbGx5IiwidXBkYXRlUGFydHMiLCJ3YXNNZSIsIkJyb2FkY2FzdENoYW5uZWwiLCJiYyIsInVucmVmIiwiY2hhbmdlZFBhcnRzIiwicG9zdE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRyaWciLCJyYW5kb20iLCJtYXRjaEFsbCIsImluY2x1ZGVVbmNvbnRyb2xsZWQiLCJjbGllbnQiLCJwYXJzZSIsIm5ld1ZhbHVlIiwic3dDb250YWluZXIiLCJzZXJ2aWNlV29ya2VyIiwicHJvcGFnYXRlTWVzc2FnZUxvY2FsbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLG1CQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFaLG1CQUFBOzs7QUNDTyxJQUFNYSxPQUFBLEdBQ1QsT0FBT0MsVUFBQSxLQUFlLGNBQWNBLFVBQUEsR0FDcEMsT0FBT0MsSUFBQSxLQUFTLGNBQWNBLElBQUEs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