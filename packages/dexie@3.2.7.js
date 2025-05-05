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

// .beyond/uimport/dexie.3.2.7.js
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

// .beyond/uimport/dexie.3.2.7.js
var dexie_3_2_7_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZXhpZS4zLjIuNy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kZWJ1Zy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZXJyb3JzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NoYWluaW5nLWZ1bmN0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9wcm9taXNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvdGVtcC10cmFuc2FjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jb21iaW5lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUva2V5cmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy93b3JrYXJvdW5kLXVuZGVmaW5lZC1wcmlta2V5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RhYmxlL3RhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL0V2ZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL21ha2UtY2xhc3MtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jbXAudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbXBhcmUtZnVuY3Rpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy93aGVyZS1jbGF1c2Uvd2hlcmUtY2xhdXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9ldmVudC13cmFwcGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwtZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2luZGV4LXNwZWMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvdGFibGUtc2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvcXVpcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWtleS1leHRyYWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9kYmNvcmUtaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2dlbmVyYXRlLW1pZGRsZXdhcmUtc3RhY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vc2NoZW1hLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vdmVyc2lvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kYXRhYmFzZS1lbnVtZXJhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL3ZpcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9ub2RlX21vZHVsZXMvc2FmYXJpLTE0LWlkYi1maXgvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1vcGVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3lpZWxkLXN1cHBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdHJhbnNhY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL3ZpcnR1YWwtaW5kZXgtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2dldC1vYmplY3QtZGlmZi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2dldC1lZmZlY3RpdmUta2V5cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaG9va3MvaG9va3MtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2NhY2hlLWV4aXN0aW5nLXZhbHVlcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Jhbmdlc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L29ic2VydmFiaWxpdHktbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9vYnNlcnZhYmxlL29ic2VydmFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZXh0ZW5kLW9ic2VydmFiaWxpdHktc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L2xpdmUtcXVlcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZGV4aWUtZG9tLWRlcGVuZGVuY2llcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1zdGF0aWMtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvcHJvcGFnYXRlLWxvY2FsbHkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZW5hYmxlLWJyb2FkY2FzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZGV4aWVfM18yXzdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGV4aWUiLCJEZXhpZSQxIiwiUmFuZ2VTZXQiLCJkZWZhdWx0IiwiZGV4aWVfM18yXzdfZGVmYXVsdCIsImxpdmVRdWVyeSIsIm1lcmdlUmFuZ2VzIiwicmFuZ2VzT3ZlcmxhcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZ2xvYmFsIiwiZ2xvYmFsVGhpcyIsInNlbGYiLCJ3aW5kb3ciLCJnbG9iYWwiLCJrZXlzIiwiT2JqZWN0IiwiaXNBcnJheSIsIkFycmF5IiwiUHJvbWlzZSIsImV4dGVuZCIsIm9iaiIsImV4dGVuc2lvbiIsImZvckVhY2giLCJrZXkiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiX2hhc093biIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwicHJvcCIsImNhbGwiLCJwcm9wcyIsInByb3RvIiwiUmVmbGVjdCIsIm93bktleXMiLCJzZXRQcm9wIiwiZGVmaW5lUHJvcGVydHkiLCJmdW5jdGlvbk9yR2V0U2V0Iiwib3B0aW9ucyIsImdldCIsInNldCIsImNvbmZpZ3VyYWJsZSIsInZhbHVlIiwid3JpdGFibGUiLCJkZXJpdmUiLCJDaGlsZCIsImZyb20iLCJQYXJlbnQiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJiaW5kIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvcGVydHlEZXNjcmlwdG9yIiwicGQiLCJfc2xpY2UiLCJzbGljZSIsImFyZ3MiLCJzdGFydCIsImVuZCIsIm92ZXJyaWRlIiwib3JpZ0Z1bmMiLCJvdmVycmlkZWRGYWN0b3J5IiwiYXNzZXJ0IiwiYiIsIkVycm9yIiwiYXNhcCQxIiwiZm4iLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwiYXJyYXlUb09iamVjdCIsImFycmF5IiwiZXh0cmFjdG9yIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImkiLCJuYW1lQW5kVmFsdWUiLCJ0cnlDYXRjaCIsIm9uZXJyb3IiLCJhcHBseSIsImV4IiwiZ2V0QnlLZXlQYXRoIiwia2V5UGF0aCIsInJ2IiwibCIsImxlbmd0aCIsInZhbCIsInB1c2giLCJwZXJpb2QiLCJpbmRleE9mIiwiaW5uZXJPYmoiLCJzdWJzdHIiLCJzZXRCeUtleVBhdGgiLCJpc0Zyb3plbiIsImN1cnJlbnRLZXlQYXRoIiwicmVtYWluaW5nS2V5UGF0aCIsImlzTmFOIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJkZWxCeUtleVBhdGgiLCJtYXAiLCJrcCIsInNoYWxsb3dDbG9uZSIsIm0iLCJjb25jYXQiLCJmbGF0dGVuIiwiYSIsImludHJpbnNpY1R5cGVOYW1lcyIsInNwbGl0IiwibnVtIiwidCIsImZpbHRlciIsImludHJpbnNpY1R5cGVzIiwieCIsImNpcmN1bGFyUmVmcyIsImRlZXBDbG9uZSIsImFueSIsIldlYWtNYXAiLCJpbm5lckRlZXBDbG9uZSIsImNvbnN0cnVjdG9yIiwidG9TdHJpbmciLCJ0b1N0cmluZ1RhZyIsIm8iLCJpdGVyYXRvclN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JPZiIsIk5PX0NIQVJfQVJSQVkiLCJnZXRBcnJheU9mIiwiYXJyYXlMaWtlIiwiaXQiLCJhcmd1bWVudHMiLCJuZXh0IiwiZG9uZSIsImlzQXN5bmNGdW5jdGlvbiIsImRlYnVnIiwibG9jYXRpb24iLCJ0ZXN0IiwiaHJlZiIsInNldERlYnVnIiwibGlicmFyeUZpbHRlciIsIk5FRURTX1RIUk9XX0ZPUl9TVEFDSyIsInN0YWNrIiwiZ2V0RXJyb3JXaXRoU3RhY2siLCJlIiwicHJldHR5U3RhY2siLCJleGNlcHRpb24iLCJudW1JZ25vcmVkRnJhbWVzIiwibmFtZSIsIm1lc3NhZ2UiLCJmcmFtZSIsImpvaW4iLCJkZXhpZUVycm9yTmFtZXMiLCJpZGJEb21FcnJvck5hbWVzIiwiZXJyb3JMaXN0IiwiZGVmYXVsdFRleHRzIiwiVmVyc2lvbkNoYW5nZWQiLCJEYXRhYmFzZUNsb3NlZCIsIkFib3J0IiwiVHJhbnNhY3Rpb25JbmFjdGl2ZSIsIk1pc3NpbmdBUEkiLCJEZXhpZUVycm9yIiwibXNnIiwiX2UiLCJfc3RhY2siLCJnZXRNdWx0aUVycm9yTWVzc2FnZSIsImZhaWx1cmVzIiwidiIsInMiLCJNb2RpZnlFcnJvciIsInN1Y2Nlc3NDb3VudCIsImZhaWxlZEtleXMiLCJCdWxrRXJyb3IiLCJwb3MiLCJmYWlsdXJlc0J5UG9zIiwiZXJybmFtZXMiLCJCYXNlRXhjZXB0aW9uIiwiZXhjZXB0aW9ucyIsImZ1bGxOYW1lIiwiRGV4aWVFcnJvcjIiLCJtc2dPcklubmVyIiwiaW5uZXIiLCJTeW50YXgiLCJTeW50YXhFcnJvciIsIlR5cGUiLCJUeXBlRXJyb3IiLCJSYW5nZSIsIlJhbmdlRXJyb3IiLCJleGNlcHRpb25NYXAiLCJtYXBFcnJvciIsImRvbUVycm9yIiwiZnVsbE5hbWVFeGNlcHRpb25zIiwibm9wIiwibWlycm9yIiwicHVyZUZ1bmN0aW9uQ2hhaW4iLCJmMSIsImYyIiwiY2FsbEJvdGgiLCJvbjEiLCJvbjIiLCJob29rQ3JlYXRpbmdDaGFpbiIsInJlcyIsIm9uc3VjY2VzcyIsInJlczIiLCJob29rRGVsZXRpbmdDaGFpbiIsImhvb2tVcGRhdGluZ0NoYWluIiwibW9kaWZpY2F0aW9ucyIsInJldmVyc2VTdG9wcGFibGVFdmVudENoYWluIiwicHJvbWlzYWJsZUNoYWluIiwidGhlbiIsInRoaXoiLCJJTlRFUk5BTCIsIkxPTkdfU1RBQ0tTX0NMSVBfTElNSVQiLCJNQVhfTE9OR19TVEFDS1MiLCJaT05FX0VDSE9fTElNSVQiLCJyZXNvbHZlZE5hdGl2ZVByb21pc2UiLCJuYXRpdmVQcm9taXNlUHJvdG8iLCJyZXNvbHZlZEdsb2JhbFByb21pc2UiLCJnbG9iYWxQIiwicmVzb2x2ZSIsImNyeXB0byIsInN1YnRsZSIsIm5hdGl2ZVAiLCJkaWdlc3QiLCJVaW50OEFycmF5IiwibmF0aXZlUHJvbWlzZVRoZW4iLCJOYXRpdmVQcm9taXNlIiwicGF0Y2hHbG9iYWxQcm9taXNlIiwic3RhY2tfYmVpbmdfZ2VuZXJhdGVkIiwic2NoZWR1bGVQaHlzaWNhbFRpY2siLCJwaHlzaWNhbFRpY2siLCJNdXRhdGlvbk9ic2VydmVyIiwiaGlkZGVuRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJhc2FwIiwiY2FsbGJhY2siLCJtaWNyb3RpY2tRdWV1ZSIsIm5lZWRzTmV3UGh5c2ljYWxUaWNrIiwiaXNPdXRzaWRlTWljcm9UaWNrIiwidW5oYW5kbGVkRXJyb3JzIiwicmVqZWN0aW5nRXJyb3JzIiwiY3VycmVudEZ1bGZpbGxlciIsInJlamVjdGlvbk1hcHBlciIsImdsb2JhbFBTRCIsImlkIiwicmVmIiwidW5oYW5kbGVkcyIsIm9udW5oYW5kbGVkIiwiZ2xvYmFsRXJyb3IiLCJwZ3AiLCJlbnYiLCJmaW5hbGl6ZSIsInVoIiwiUFNEIiwibnVtU2NoZWR1bGVkQ2FsbHMiLCJ0aWNrRmluYWxpemVycyIsIkRleGllUHJvbWlzZSIsIl9saXN0ZW5lcnMiLCJvbnVuY2F0Y2hlZCIsIl9saWIiLCJwc2QiLCJfUFNEIiwiX3N0YWNrSG9sZGVyIiwiX3ByZXYiLCJfbnVtUHJldiIsIl9zdGF0ZSIsIl92YWx1ZSIsImhhbmRsZVJlamVjdGlvbiIsImV4ZWN1dGVQcm9taXNlVGFzayIsInRoZW5Qcm9wIiwibWljcm9UYXNrSWQiLCJ0b3RhbEVjaG9lcyIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInBvc3NpYmxlQXdhaXQiLCJjbGVhbnVwIiwiZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJyZWplY3QiLCJwcm9wYWdhdGVUb0xpc3RlbmVyIiwiTGlzdGVuZXIiLCJuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwIiwibGlua1RvUHJldmlvdXNQcm9taXNlIiwiX3RoZW4iLCJjYXRjaCIsInR5cGUyIiwiaGFuZGxlciIsImVyciIsIlByb21pc2VSZWplY3QiLCJmaW5hbGx5Iiwib25GaW5hbGx5Iiwic3RhY2tzIiwiZ2V0U3RhY2siLCJ0aW1lb3V0IiwibXMiLCJJbmZpbml0eSIsImhhbmRsZSIsIlRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzbmFwU2hvdCIsInpvbmUiLCJhbGwiLCJ2YWx1ZXMiLCJvblBvc3NpYmxlUGFyYWxsZWxsQXN5bmMiLCJyZW1haW5pbmciLCJyYWNlIiwibmV3UFNEIiwibmV3U2NvcGUiLCJ1c2VQU0QiLCJzY2hlZHVsZXIiLCJmb2xsb3ciLCJ6b25lUHJvcHMiLCJyZXNvbHZlMiIsInJlamVjdDIiLCJydW5fYXRfZW5kX29mX3RoaXNfb3JfbmV4dF9waHlzaWNhbF90aWNrIiwiYWxsU2V0dGxlZCIsInBvc3NpYmxlUHJvbWlzZXMiLCJyZXN1bHRzIiwicCIsInN0YXR1cyIsInJlYXNvbiIsIkFnZ3JlZ2F0ZUVycm9yIiwiZmFpbHVyZSIsInByb21pc2UiLCJzaG91bGRFeGVjdXRlVGljayIsImJlZ2luTWljcm9UaWNrU2NvcGUiLCJwcm9wYWdhdGVBbGxMaXN0ZW5lcnMiLCJlbmRNaWNyb1RpY2tTY29wZSIsIl9wcm9taXNlIiwib3JpZ1Byb3AiLCJhZGRQb3NzaWJseVVuaGFuZGxlZEVycm9yIiwibGlzdGVuZXJzIiwibGVuIiwiZmluYWxpemVQaHlzaWNhbFRpY2siLCJsaXN0ZW5lciIsImNiIiwiY2FsbExpc3RlbmVyIiwicmV0IiwibWFya0Vycm9yQXNIYW5kbGVkIiwibGltaXQiLCJlcnJvck5hbWUiLCJwcmV2IiwibnVtUHJldiIsIndhc1Jvb3RFeGVjIiwiY2FsbGJhY2tzIiwidW5oYW5kbGVkRXJycyIsImZpbmFsaXplcnMiLCJmaW5hbGl6ZXIiLCJzb21lIiwid3JhcCIsImVycm9yQ2F0Y2hlciIsIm91dGVyU2NvcGUiLCJzd2l0Y2hUb1pvbmUiLCJ0YXNrIiwiYXdhaXRzIiwiZWNob2VzIiwidGFza0NvdW50ZXIiLCJ6b25lU3RhY2siLCJ6b25lRWNob2VzIiwiem9uZV9pZF9jb3VudGVyIiwicHJvcHMyIiwiYTEiLCJhMiIsInBhcmVudCIsImdsb2JhbEVudiIsIlByb21pc2VQcm9wIiwibnRoZW4iLCJnZXRQYXRjaGVkUHJvbWlzZVRoZW4iLCJndGhlbiIsImluY3JlbWVudEV4cGVjdGVkQXdhaXRzIiwicG9zc2libGVQcm9taXNlIiwicmVqZWN0aW9uIiwiem9uZUVudGVyRWNobyIsInRhcmdldFpvbmUiLCJ6b25lTGVhdmVFY2hvIiwicG9wIiwiYkVudGVyaW5nWm9uZSIsImN1cnJlbnRab25lIiwiZW5xdWV1ZU5hdGl2ZU1pY3JvVGFzayIsIkdsb2JhbFByb21pc2UiLCJ0YXJnZXRFbnYiLCJhMyIsImpvYiIsIm91dGVyWm9uZSIsIm9yaWdUaGVuIiwib25SZXNvbHZlZCIsIlVOSEFORExFRFJFSkVDVElPTiIsImV2ZW50IiwiZXZlbnREYXRhIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsIl8iLCJkZWZhdWx0UHJldmVudGVkIiwiY29uc29sZSIsIndhcm4iLCJ0ZW1wVHJhbnNhY3Rpb24iLCJkYiIsIm1vZGUiLCJzdG9yZU5hbWVzIiwiaWRiZGIiLCJvcGVuQ29tcGxldGUiLCJsZXRUaHJvdWdoIiwiX3ZpcCIsImRiT3BlbkVycm9yIiwiaXNCZWluZ09wZW5lZCIsIl9vcHRpb25zIiwiYXV0b09wZW4iLCJvcGVuIiwiZGJSZWFkeVByb21pc2UiLCJ0cmFucyIsIl9jcmVhdGVUcmFuc2FjdGlvbiIsIl9kYlNjaGVtYSIsIlBSMTM5OF9tYXhMb29wIiwiSW52YWxpZFN0YXRlIiwiaXNPcGVuIiwiX2Nsb3NlIiwiX2NvbXBsZXRpb24iLCJERVhJRV9WRVJTSU9OIiwibWF4U3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWluS2V5IiwiSU5WQUxJRF9LRVlfQVJHVU1FTlQiLCJTVFJJTkdfRVhQRUNURUQiLCJjb25uZWN0aW9ucyIsImlzSUVPckVkZ2UiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYXNJRURlbGV0ZU9iamVjdFN0b3JlQnVnIiwiaGFuZ3NPbkRlbGV0ZUxhcmdlS2V5UmFuZ2UiLCJkZXhpZVN0YWNrRnJhbWVGaWx0ZXIiLCJEQk5BTUVTX0RCIiwiUkVBRE9OTFkiLCJSRUFEV1JJVEUiLCJjb21iaW5lIiwiZmlsdGVyMSIsImZpbHRlcjIiLCJBbnlSYW5nZSIsInR5cGUiLCJsb3dlciIsImxvd2VyT3BlbiIsInVwcGVyIiwidXBwZXJPcGVuIiwid29ya2Fyb3VuZEZvclVuZGVmaW5lZFByaW1LZXkiLCJUYWJsZSIsIl90cmFucyIsIndyaXRlTG9ja2VkIiwiX3R4IiwidGFibGVOYW1lIiwiY2hlY2tUYWJsZUluVHJhbnNhY3Rpb24iLCJ0cmFuczIiLCJzY2hlbWEiLCJOb3RGb3VuZCIsImlkYnRyYW5zIiwidHJhbnNsZXNzIiwia2V5T3JDcml0Iiwid2hlcmUiLCJmaXJzdCIsImNvcmUiLCJob29rIiwicmVhZGluZyIsImZpcmUiLCJpbmRleE9yQ3JpdCIsIldoZXJlQ2xhdXNlIiwia2V5UGF0aHMiLCJlcXVhbHMiLCJjb21wb3VuZEluZGV4IiwiaW5kZXhlcyIsInByaW1LZXkiLCJpeCIsImNvbXBvdW5kIiwiZXZlcnkiLCJzb3J0IiwiX21heEtleSIsImtleVBhdGhzSW5WYWxpZE9yZGVyIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkeEJ5TmFtZSIsImlkYiIsIl9kZXBzIiwiaW5kZXhlZERCIiwiY21wIiwiaWR4IiwiZmlsdGVyRnVuY3Rpb24iLCJwcmV2SW5kZXgiLCJwcmV2RmlsdGVyRm4iLCJpbmRleCIsIm11bHRpIiwidG9Db2xsZWN0aW9uIiwiYW5kIiwiY291bnQiLCJ0aGVuU2hvcnRjdXQiLCJvZmZzZXQiLCJudW1Sb3dzIiwiZWFjaCIsInRvQXJyYXkiLCJDb2xsZWN0aW9uIiwib3JkZXJCeSIsInJldmVyc2UiLCJtYXBUb0NsYXNzIiwibWFwcGVkQ2xhc3MiLCJyZWFkSG9vayIsInVuc3Vic2NyaWJlIiwiZGVmaW5lQ2xhc3MiLCJDbGFzcyIsImNvbnRlbnQiLCJhZGQiLCJhdXRvIiwib2JqVG9BZGQiLCJtdXRhdGUiLCJudW1GYWlsdXJlcyIsImxhc3RSZXN1bHQiLCJ1cGRhdGUiLCJrZXlPck9iamVjdCIsIkludmFsaWRBcmd1bWVudCIsIl9hIiwibW9kaWZ5IiwicHV0IiwiZGVsZXRlIiwiY2xlYXIiLCJyYW5nZSIsImJ1bGtHZXQiLCJrZXlzMiIsImdldE1hbnkiLCJidWxrQWRkIiwib2JqZWN0cyIsImtleXNPck9wdGlvbnMiLCJ3YW50UmVzdWx0cyIsImFsbEtleXMiLCJudW1PYmplY3RzIiwib2JqZWN0c1RvQWRkIiwiYnVsa1B1dCIsIm9iamVjdHNUb1B1dCIsImJ1bGtEZWxldGUiLCJudW1LZXlzIiwiRXZlbnRzIiwiY3R4IiwiZXZzIiwiZXZlbnROYW1lIiwic3Vic2NyaWJlciIsImkyIiwic3Vic2NyaWJlIiwiYWRkRXZlbnRUeXBlIiwiY2hhaW5GdW5jdGlvbiIsImRlZmF1bHRGdW5jdGlvbiIsImFkZENvbmZpZ3VyZWRFdmVudHMiLCJjb250ZXh0Iiwic3Vic2NyaWJlcnMiLCJjZmciLCJhcmdzMiIsImZpcmVFdmVudCIsIm1ha2VDbGFzc0NvbnN0cnVjdG9yIiwiY3JlYXRlVGFibGVDb25zdHJ1Y3RvciIsIlRhYmxlMiIsInRhYmxlU2NoZW1hIiwiX2FsbFRhYmxlcyIsImlzUGxhaW5LZXlSYW5nZSIsImlnbm9yZUxpbWl0RmlsdGVyIiwiYWxnb3JpdGhtIiwib3IiLCJqdXN0TGltaXQiLCJyZXBsYXlGaWx0ZXIiLCJhZGRGaWx0ZXIiLCJhZGRSZXBsYXlGaWx0ZXIiLCJmYWN0b3J5IiwiaXNMaW1pdEZpbHRlciIsImN1cnIiLCJhZGRNYXRjaEZpbHRlciIsImlzTWF0Y2giLCJnZXRJbmRleE9yU3RvcmUiLCJjb3JlU2NoZW1hIiwiaXNQcmltS2V5IiwicHJpbWFyeUtleSIsImdldEluZGV4QnlLZXlQYXRoIiwiU2NoZW1hIiwib3BlbkN1cnNvciIsImNvcmVUYWJsZSIsImtleXNPbmx5IiwiZGlyIiwidW5pcXVlIiwicXVlcnkiLCJpdGVyIiwiY29yZVRyYW5zIiwiaXRlcmF0ZSIsInZhbHVlTWFwcGVyIiwidW5pb24iLCJjdXJzb3IiLCJhZHZhbmNlIiwic3RvcCIsImZhaWwiLCJfaXRlcmF0ZSIsImN1cnNvclByb21pc2UiLCJtYXBwZWRGbiIsImMiLCJ3cmFwcGVkRm4iLCJjb250aW51ZSIsImFkdmFuY2VyIiwidGEiLCJ0YiIsIk5hTiIsImNvbXBhcmVVaW50OEFycmF5cyIsImdldFVpbnQ4QXJyYXkiLCJjb21wYXJlQXJyYXlzIiwiYWwiLCJibCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwidHNUYWciLCJidWZmZXIiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIl9yZWFkIiwiX2N0eCIsImVycm9yIiwidGFibGUiLCJfd3JpdGUiLCJfYWRkQWxnb3JpdGhtIiwiY2xvbmUiLCJyYXciLCJjb3VudDIiLCJNYXRoIiwibWluIiwic29ydEJ5IiwicGFydHMiLCJsYXN0UGFydCIsImxhc3RJbmRleCIsImdldHZhbCIsIm9yZGVyIiwic29ydGVyIiwiYVZhbCIsImJWYWwiLCJvZmZzZXRMZWZ0Iiwicm93c0xlZnQiLCJ1bnRpbCIsImJJbmNsdWRlU3RvcEVudHJ5IiwibGFzdCIsImluZGV4TmFtZSIsIl9vbmRpcmVjdGlvbmNoYW5nZSIsImRlc2MiLCJlYWNoS2V5IiwiZWFjaFVuaXF1ZUtleSIsImVhY2hQcmltYXJ5S2V5IiwicHJpbWFyeUtleXMiLCJ1bmlxdWVLZXlzIiwiZmlyc3RLZXkiLCJsYXN0S2V5IiwiZGlzdGluY3QiLCJzdHJLZXkiLCJmb3VuZCIsImNoYW5nZXMiLCJtb2RpZnllciIsImFueXRoaW5nTW9kaWZpZWQiLCJvdXRib3VuZCIsImV4dHJhY3RLZXkiLCJtb2RpZnlDaHVua1NpemUiLCJ0b3RhbEZhaWx1cmVzIiwiYXBwbHlNdXRhdGVSZXN1bHQiLCJleHBlY3RlZENvdW50IiwibmV4dENodW5rIiwiY2FjaGUiLCJhZGRWYWx1ZXMiLCJwdXRWYWx1ZXMiLCJwdXRLZXlzIiwiZGVsZXRlS2V5cyIsIm9yaWdWYWx1ZSIsImN0eDIiLCJjcml0ZXJpYSIsImRlbGV0ZUNhbGxiYWNrIiwiY2hhbmdlU3BlYyIsImNvcmVSYW5nZSIsImNyZWF0ZUNvbGxlY3Rpb25Db25zdHJ1Y3RvciIsIkNvbGxlY3Rpb24yIiwid2hlcmVDbGF1c2UiLCJrZXlSYW5nZUdlbmVyYXRvciIsImtleVJhbmdlIiwid2hlcmVDdHgiLCJyZWFkaW5nSG9vayIsInNpbXBsZUNvbXBhcmUiLCJzaW1wbGVDb21wYXJlUmV2ZXJzZSIsImNvbGxlY3Rpb25PcldoZXJlQ2xhdXNlIiwiVCIsImNvbGxlY3Rpb24iLCJlbXB0eUNvbGxlY3Rpb24iLCJyYW5nZUVxdWFsIiwidXBwZXJGYWN0b3J5IiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyRmFjdG9yeSIsIm5leHRDYXNpbmciLCJsb3dlcktleSIsInVwcGVyTmVlZGxlIiwibG93ZXJOZWVkbGUiLCJjbXAyIiwibGxwIiwibHdyS2V5Q2hhciIsImFkZElnbm9yZUNhc2VBbGdvcml0aG0iLCJtYXRjaCIsIm5lZWRsZXMiLCJzdWZmaXgiLCJjb21wYXJlIiwidXBwZXJOZWVkbGVzIiwibG93ZXJOZWVkbGVzIiwiZGlyZWN0aW9uIiwibmV4dEtleVN1ZmZpeCIsIm5lZWRsZXNMZW4iLCJpbml0RGlyZWN0aW9uIiwibmVlZGxlQm91bmRzIiwibmVlZGxlIiwibmIiLCJjcmVhdGVSYW5nZSIsImRpcmVjdGlvbjIiLCJmaXJzdFBvc3NpYmxlTmVlZGxlIiwibG93ZXN0UG9zc2libGVDYXNpbmciLCJjYXNpbmciLCJiZXR3ZWVuIiwiaW5jbHVkZUxvd2VyIiwiaW5jbHVkZVVwcGVyIiwiX2NtcCIsImFib3ZlIiwiYWJvdmVPckVxdWFsIiwiYmVsb3ciLCJiZWxvd09yRXF1YWwiLCJzdGFydHNXaXRoIiwic3RyIiwic3RhcnRzV2l0aElnbm9yZUNhc2UiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYW55T2ZJZ25vcmVDYXNlIiwic3RhcnRzV2l0aEFueU9mSWdub3JlQ2FzZSIsIm4iLCJhbnlPZiIsIl9hc2NlbmRpbmciLCJfZGVzY2VuZGluZyIsIm5vdEVxdWFsIiwiaW5BbnlSYW5nZSIsImluY2x1ZGVMb3dlcnMiLCJpbmNsdWRlVXBwZXJzIiwibm9uZU9mIiwicmFuZ2VzIiwiYXNjZW5kaW5nIiwiZGVzY2VuZGluZyIsIl9taW4iLCJtYXgiLCJfbWF4IiwiYWRkUmFuZ2UyIiwicmFuZ2VzMiIsIm5ld1JhbmdlIiwic29ydERpcmVjdGlvbiIsInJhbmdlU29ydGVyIiwicmFuZ2VQb3MiLCJrZXlJc0JleW9uZEN1cnJlbnRFbnRyeSIsImtleUlzQmVmb3JlQ3VycmVudEVudHJ5Iiwia2V5V2l0aGluQ3VycmVudFJhbmdlIiwiY2hlY2tLZXkiLCJzdGFydHNXaXRoQW55T2YiLCJjcmVhdGVXaGVyZUNsYXVzZUNvbnN0cnVjdG9yIiwiV2hlcmVDbGF1c2UyIiwib3JDb2xsZWN0aW9uIiwiaW5kZXhlZERCMiIsIl9JREJLZXlSYW5nZSIsIklEQktleVJhbmdlIiwiZXZlbnRSZWplY3RIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJzdG9wUHJvcGFnYXRpb24iLCJERVhJRV9TVE9SQUdFX01VVEFURURfRVZFTlRfTkFNRSIsIlNUT1JBR0VfTVVUQVRFRF9ET01fRVZFTlRfTkFNRSIsImdsb2JhbEV2ZW50cyIsIlRyYW5zYWN0aW9uIiwiX2xvY2siLCJfcmVjdWxvY2siLCJsb2NrT3duZXJGb3IiLCJfdW5sb2NrIiwiX2Jsb2NrZWRGdW5jcyIsIl9sb2NrZWQiLCJmbkFuZFBTRCIsInNoaWZ0IiwiT3BlbkZhaWxlZCIsImFjdGl2ZSIsInRyYW5zYWN0aW9uIiwiZHVyYWJpbGl0eSIsImNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eSIsImV2IiwiX3JlamVjdCIsIm9uYWJvcnQiLCJvbiIsIm9uY29tcGxldGUiLCJfcmVzb2x2ZSIsInN0b3JhZ2VtdXRhdGVkIiwiYldyaXRlTG9jayIsIlJlYWRPbmx5IiwicDIiLCJfcm9vdCIsIndhaXRGb3IiLCJwcm9taXNlTGlrZSIsInJvb3QiLCJfd2FpdGluZ0ZvciIsIl93YWl0aW5nUXVldWUiLCJzdG9yZSIsIm9iamVjdFN0b3JlIiwic3BpbiIsIl9zcGluQ291bnQiLCJjdXJyZW50V2FpdFByb21pc2UiLCJhYm9ydCIsIm1lbW9pemVkVGFibGVzIiwiX21lbW9pemVkVGFibGVzIiwidHJhbnNhY3Rpb25Cb3VuZFRhYmxlIiwiY3JlYXRlVHJhbnNhY3Rpb25Db25zdHJ1Y3RvciIsIlRyYW5zYWN0aW9uMiIsImRic2NoZW1hIiwiY29tcGxldGUiLCJ3YXNBY3RpdmUiLCJjcmVhdGVJbmRleFNwZWMiLCJzcmMiLCJuYW1lRnJvbUtleVBhdGgiLCJjcmVhdGVUYWJsZVNjaGVtYSIsInNhZmFyaU11bHRpU3RvcmVGaXgiLCJnZXRNYXhLZXkiLCJJZGJLZXlSYW5nZSIsIm9ubHkiLCJnZXRLZXlFeHRyYWN0b3IiLCJnZXRTaW5nbGVQYXRoS2V5RXh0cmFjdG9yIiwiYXJyYXlpZnkiLCJfaWRfY291bnRlciIsImdldEtleVBhdGhBbGlhcyIsImNyZWF0ZURCQ29yZSIsInRtcFRyYW5zIiwiZXh0cmFjdFNjaGVtYSIsImRiMiIsInRhYmxlczIiLCJvYmplY3RTdG9yZU5hbWVzIiwidGFibGVzIiwiYXV0b0luY3JlbWVudCIsImluZGV4QnlLZXlQYXRoIiwiaXNQcmltYXJ5S2V5IiwiaW5kZXhOYW1lcyIsIm11bHRpRW50cnkiLCJrZXlQYXRoMiIsImNvbXBvdW5kMiIsInJlc3VsdDIiLCJoYXNHZXRBbGwiLCJtYWtlSURCS2V5UmFuZ2UiLCJpZGJSYW5nZSIsInVwcGVyQm91bmQiLCJsb3dlckJvdW5kIiwiYm91bmQiLCJjcmVhdGVEYkNvcmVUYWJsZSIsImlzQWRkT3JQdXQiLCJyZXEiLCJyZXFzIiwiZXJyb3JIYW5kbGVyIiwiYXJnczEiLCJyZXEyIiwib3BlbkN1cnNvcjIiLCJxdWVyeTIiLCJzb3VyY2UiLCJvcGVuS2V5Q3Vyc29yIiwiX19faWQiLCJfY3Vyc29yQ29udGludWUiLCJfY3Vyc29yQ29udGludWVQcmltYXJ5S2V5IiwiY29udGludWVQcmltYXJ5S2V5IiwiX2N1cnNvckFkdmFuY2UiLCJkb1Rocm93Q3Vyc29ySXNOb3RTdGFydGVkIiwiZG9UaHJvd0N1cnNvcklzU3RvcHBlZCIsImdvdE9uZSIsIml0ZXJhdGlvblByb21pc2UiLCJyZXNvbHZlSXRlcmF0aW9uIiwicmVqZWN0SXRlcmF0aW9uIiwiZ3VhcmRlZENhbGxiYWNrIiwiZXYyIiwiaGFzR2V0QWxsMiIsInJlcXVlc3QiLCJub25JbmZpbml0TGltaXQiLCJpZGJLZXlSYW5nZSIsImdldEFsbCIsImdldEFsbEtleXMiLCJrZXlDb3VudCIsImNhbGxiYWNrQ291bnQiLCJzdWNjZXNzSGFuZGxlciIsIl9wb3MiLCJ0YWJsZU1hcCIsIk1JTl9LRVkiLCJNQVhfS0VZIiwiY3JlYXRlTWlkZGxld2FyZVN0YWNrIiwic3RhY2tJbXBsIiwibWlkZGxld2FyZXMiLCJkb3duIiwiY3JlYXRlTWlkZGxld2FyZVN0YWNrcyIsImRiY29yZSIsImdlbmVyYXRlTWlkZGxld2FyZVN0YWNrcyIsIl9ub3ZpcCIsIl9taWRkbGV3YXJlcyIsInRibCIsInNldEFwaU9uUGxhY2UiLCJvYmpzIiwidGFibGVOYW1lcyIsInByb3BEZXNjIiwiZW51bWVyYWJsZSIsInJlbW92ZVRhYmxlc0FwaSIsImxvd2VyVmVyc2lvbkZpcnN0IiwiX2NmZyIsInZlcnNpb24iLCJydW5VcGdyYWRlcnMiLCJvbGRWZXJzaW9uIiwiaWRiVXBncmFkZVRyYW5zIiwiZ2xvYmFsU2NoZW1hIiwiX3N0b3JlTmFtZXMiLCJyZWplY3RUcmFuc2FjdGlvbiIsImNyZWF0ZVRhYmxlIiwicG9wdWxhdGUiLCJ1cGRhdGVUYWJsZXNBbmRJbmRleGVzIiwicXVldWUiLCJ2ZXJzaW9ucyIsIl92ZXJzaW9ucyIsImJ1aWxkR2xvYmFsU2NoZW1hIiwiYW55Q29udGVudFVwZ3JhZGVySGFzUnVuIiwidmVyc1RvUnVuIiwib2xkU2NoZW1hIiwibmV3U2NoZW1hIiwiYWRqdXN0VG9FeGlzdGluZ0luZGV4TmFtZXMiLCJkaWZmIiwiZ2V0U2NoZW1hRGlmZiIsInR1cGxlIiwiY2hhbmdlIiwicmVjcmVhdGUiLCJVcGdyYWRlIiwiYWRkSW5kZXgiLCJkZWxldGVJbmRleCIsImRlbCIsImlkeE5hbWUiLCJjb250ZW50VXBncmFkZSIsInVwZ3JhZGVTY2hlbWEiLCJjb250ZW50VXBncmFkZUlzQXN5bmMiLCJyZXR1cm5WYWx1ZSIsInByb21pc2VGb2xsb3dlZCIsImRlY3JlbWVudG9yIiwiZGVsZXRlUmVtb3ZlZFRhYmxlcyIsInJ1blF1ZXVlIiwiY3JlYXRlTWlzc2luZ1RhYmxlcyIsIm9sZERlZiIsIm5ld0RlZiIsImRlZiIsIm9sZEluZGV4ZXMiLCJuZXdJbmRleGVzIiwib2xkSWR4IiwibmV3SWR4IiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJjb250YWlucyIsInN0b3JlTmFtZSIsImRlbGV0ZU9iamVjdFN0b3JlIiwiY3JlYXRlSW5kZXgiLCJkYlN0b3JlTmFtZXMiLCJqIiwiaWRiaW5kZXgiLCJyZWFkR2xvYmFsU2NoZW1hIiwidmVybm8iLCJ2ZXJpZnlJbnN0YWxsZWRTY2hlbWEiLCJpbnN0YWxsZWRTY2hlbWEiLCJjaCIsIl9oYXNHZXRBbGwiLCJkZXhpZU5hbWUiLCJpbmRleFNwZWMiLCJXb3JrZXJHbG9iYWxTY29wZSIsInBhcnNlSW5kZXhTeW50YXgiLCJwcmltS2V5QW5kSW5kZXhlcyIsImluZGV4TnVtIiwidHJpbSIsInJlcGxhY2UiLCJWZXJzaW9uIiwiX3BhcnNlU3RvcmVzU3BlYyIsInN0b3JlcyIsIm91dFNjaGVtYSIsInN0b3Jlc1NvdXJjZSIsInN0b3Jlc1NwZWMiLCJ1cGdyYWRlIiwidXBncmFkZUZ1bmN0aW9uIiwiY3JlYXRlVmVyc2lvbkNvbnN0cnVjdG9yIiwiVmVyc2lvbjIiLCJ2ZXJzaW9uTnVtYmVyIiwiZ2V0RGJOYW1lc1RhYmxlIiwiZGJOYW1lc0RCIiwiYWRkb25zIiwiZGJuYW1lcyIsImhhc0RhdGFiYXNlc05hdGl2ZSIsImRhdGFiYXNlcyIsImdldERhdGFiYXNlTmFtZXMiLCJpbmZvcyIsImluZm8iLCJfb25EYXRhYmFzZUNyZWF0ZWQiLCJfb25EYXRhYmFzZURlbGV0ZWQiLCJ2aXAiLCJpZGJSZWFkeSIsImlzU2FmYXJpIiwidXNlckFnZW50RGF0YSIsImludGVydmFsSWQiLCJ0cnlJZGIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkZXhpZU9wZW4iLCJzdGF0ZSIsIm9wZW5DYW5jZWxsZXIiLCJ0aHJvd0lmQ2FuY2VsbGVkIiwicmVzb2x2ZURiUmVhZHkiLCJkYlJlYWR5UmVzb2x2ZSIsInVwZ3JhZGVUcmFuc2FjdGlvbiIsIndhc0NyZWF0ZWQiLCJ0cnlPcGVuREIiLCJkYk5hbWUiLCJhdXRvU2NoZW1hIiwicm91bmQiLCJvbmJsb2NrZWQiLCJfZmlyZU9uQmxvY2tlZCIsIm9udXBncmFkZW5lZWRlZCIsImFsbG93RW1wdHlEQiIsImNsb3NlIiwiZGVscmVxIiwiZGVsZXRlRGF0YWJhc2UiLCJOb1N1Y2hEYXRhYmFzZSIsIm9sZFZlciIsInBvdyIsIm9udmVyc2lvbmNoYW5nZSIsInZjRmlyZWQiLCJvbmNsb3NlIiwib25SZWFkeUJlaW5nRmlyZWQiLCJyZWFkeSIsImZpcmVSZW1haW5kZXJzIiwicmVtYWluZGVycyIsImF3YWl0SXRlcmF0b3IiLCJjYWxsTmV4dCIsImRvVGhyb3ciLCJ0aHJvdyIsIm9uU3VjY2VzcyIsInN0ZXAiLCJvbkVycm9yIiwiZ2V0TmV4dCIsImV4dHJhY3RUcmFuc2FjdGlvbkFyZ3MiLCJfdGFibGVBcmdzXyIsInNjb3BlRnVuYyIsImVudGVyVHJhbnNhY3Rpb25TY29wZSIsInBhcmVudFRyYW5zYWN0aW9uIiwic2NvcGVGdW5jSXNBc3luYyIsIlByZW1hdHVyZUNvbW1pdCIsInBhZCIsImNyZWF0ZVZpcnR1YWxJbmRleE1pZGRsZXdhcmUiLCJpbmRleExvb2t1cCIsImFsbFZpcnR1YWxJbmRleGVzIiwiYWRkVmlydHVhbEluZGV4ZXMiLCJrZXlUYWlsIiwibG93TGV2ZWxJbmRleCIsImtleVBhdGhBbGlhcyIsImluZGV4TGlzdCIsImtleUxlbmd0aCIsImlzVmlydHVhbCIsInZpcnR1YWxJbmRleCIsInZpcnR1YWxLZXlQYXRoIiwiZmluZEJlc3RJbmRleCIsInRyYW5zbGF0ZVJhbmdlIiwidHJhbnNsYXRlUmVxdWVzdCIsImNyZWF0ZVZpcnR1YWxDdXJzb3IiLCJfY29udGludWUiLCJ2aXJ0dWFsQ3Vyc29yIiwicHJpbWFyeUtleTIiLCJ2aXJ0dWFsSW5kZXhNaWRkbGV3YXJlIiwibGV2ZWwiLCJnZXRPYmplY3REaWZmIiwicHJmeCIsImFwIiwiYnAiLCJhcFR5cGVOYW1lIiwiYnBUeXBlTmFtZSIsImdldEVmZmVjdGl2ZUtleXMiLCJob29rc01pZGRsZXdhcmUiLCJkb3duQ29yZSIsImRvd25UYWJsZSIsInRhYmxlTWlkZGxld2FyZSIsImR4VHJhbnMiLCJkZWxldGluZyIsImNyZWF0aW5nIiwidXBkYXRpbmciLCJhZGRQdXRPckRlbGV0ZSIsImRlbGV0ZVJhbmdlIiwiZHhUcmFuczIiLCJnZXRFeGlzdGluZ1ZhbHVlcyIsImV4aXN0aW5nVmFsdWVzIiwiY29udGV4dHMiLCJleGlzdGluZ1ZhbHVlIiwiZ2VuZXJhdGVkUHJpbWFyeUtleSIsIm9iamVjdERpZmYiLCJhZGRpdGlvbmFsQ2hhbmdlcyIsInJlcXVlc3RlZFZhbHVlIiwiZGVsZXRlTmV4dENodW5rIiwiZWZmZWN0aXZlS2V5cyIsImdldEZyb21UcmFuc2FjdGlvbkNhY2hlIiwiY2FjaGVFeGlzdGluZ1ZhbHVlc01pZGRsZXdhcmUiLCJjYWNoZWRSZXN1bHQiLCJpc0VtcHR5UmFuZ2UiLCJub2RlIiwiZnJvbU9yVHJlZSIsInRvIiwiZCIsInJhbmdlU2V0IiwiYWRkS2V5IiwiYWRkUmFuZ2UiLCJhZGRLZXlzIiwiZ2V0UmFuZ2VTZXRJdGVyYXRvciIsImxlZnQiLCJyaWdodCIsInIiLCJyZWJhbGFuY2UiLCJyaWdodFdhc0N1dE9mZiIsIm5ld1NldCIsIl9hZGRSYW5nZVNldCIsInRhcmdldDIiLCJyYW5nZVNldDEiLCJyYW5nZVNldDIiLCJpMSIsIm5leHRSZXN1bHQxIiwibmV4dFJlc3VsdDIiLCJrZXlQcm92aWRlZCIsInVwIiwiX2IiLCJyb290Q2xvbmUiLCJvbGRSb290UmlnaHQiLCJjb21wdXRlRGVwdGgiLCJvYnNlcnZhYmlsaXR5TWlkZGxld2FyZSIsIkZVTExfUkFOR0UiLCJ0YWJsZUNsb25lIiwibXV0YXRlZFBhcnRzIiwiZ2V0UmFuZ2VTZXQiLCJwYXJ0IiwicGtSYW5nZVNldCIsImRlbHNSYW5nZVNldCIsIm5ld09ianMiLCJvbGRDYWNoZSIsIm9sZE9ianMiLCJ0cmFja0FmZmVjdGVkSW5kZXhlcyIsImdldFJhbmdlIiwicmVhZFN1YnNjcmliZXJzIiwibWV0aG9kIiwic3Vic2NyIiwicXVlcmllZEluZGV4IiwicXVlcmllZFJhbmdlcyIsImtleXNQcm9taXNlIiwicmVzdWx0aW5nS2V5cyIsInBLZXlzIiwid2FudFZhbHVlcyIsInBrZXkiLCJhZGRBZmZlY3RlZEluZGV4IiwiYWRkS2V5T3JLZXlzIiwia2V5MiIsIm9sZEtleSIsIm5ld0tleSIsImRlcHMiLCJkZXBlbmRlbmNpZXMiLCJjYW5jZWxPcGVuIiwiYlN0aWNreSIsInN0YXRlMiIsIm5ld1ZlcnNpb24iLCJ1c2UiLCJhZGRvbiIsInZlcnNpb25JbnN0YW5jZSIsIl93aGVuUmVhZHkiLCJ1bnVzZSIsIm13IiwiaGFzQXJndW1lbnRzIiwiZG9EZWxldGUiLCJiYWNrZW5kREIiLCJoYXNCZWVuQ2xvc2VkIiwiaGFzRmFpbGVkIiwiZHluYW1pY2FsbHlPcGVuZWQiLCJfdHJhbnNhY3Rpb24iLCJvbmx5SWZDb21wYXRpYmxlIiwiaWRiTW9kZSIsIlN1YlRyYW5zYWN0aW9uIiwiZW50ZXJUcmFuc2FjdGlvbiIsIkludmFsaWRUYWJsZSIsInN5bWJvbE9ic2VydmFibGUiLCJvYnNlcnZhYmxlIiwiT2JzZXJ2YWJsZSIsIl9zdWJzY3JpYmUiLCJleHRlbmRPYnNlcnZhYmlsaXR5U2V0IiwicXVlcmllciIsImhhc1ZhbHVlIiwiY3VycmVudFZhbHVlIiwib2JzZXJ2ZXIiLCJleGVjdXRlIiwiZXhlYyIsImNsb3NlZCIsImFjY3VtTXV0cyIsImN1cnJlbnRPYnMiLCJzdWJzY3JpcHRpb24iLCJtdXRhdGlvbkxpc3RlbmVyIiwicXVlcnlpbmciLCJzdGFydGVkTGlzdGVuaW5nIiwic2hvdWxkTm90aWZ5IiwiZG9RdWVyeSIsImdldFZhbHVlIiwiZG9tRGVwcyIsIm1vekluZGV4ZWREQiIsIndlYmtpdEluZGV4ZWREQiIsIm1zSW5kZXhlZERCIiwid2Via2l0SURCS2V5UmFuZ2UiLCJkYXRhYmFzZU5hbWUiLCJleGlzdHMiLCJpZ25vcmVUcmFuc2FjdGlvbiIsImFzeW5jIiwiZ2VuZXJhdG9yRm4iLCJzcGF3biIsImN1cnJlbnRUcmFuc2FjdGlvbiIsInByb21pc2VPckZ1bmN0aW9uIiwib3B0aW9uYWxUaW1lb3V0Iiwic2VtVmVyIiwibWF4S2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZWRQYXJ0cyIsInByb3BhZ2F0aW5nTG9jYWxseSIsImluaXRDdXN0b21FdmVudCIsInByb3BhZ2F0ZUxvY2FsbHkiLCJ1cGRhdGVQYXJ0cyIsIndhc01lIiwiQnJvYWRjYXN0Q2hhbm5lbCIsImJjIiwidW5yZWYiLCJjaGFuZ2VkUGFydHMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidHJpZyIsInJhbmRvbSIsIm1hdGNoQWxsIiwiaW5jbHVkZVVuY29udHJvbGxlZCIsImNsaWVudCIsInBhcnNlIiwibmV3VmFsdWUiLCJzd0NvbnRhaW5lciIsInNlcnZpY2VXb3JrZXIiLCJwcm9wYWdhdGVNZXNzYWdlTG9jYWxseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsbUJBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVosbUJBQUE7OztBQ0NPLElBQU1hLE9BQUEsR0FDVCxPQUFPQyxVQUFBLEtBQWUsY0FBY0EsVUFBQSxHQUNwQyxPQUFPQyxJQUFBLEtBQVMsY0FBY0EsSUFBQSxHQUM5QixPQUFPQyxNQUFB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QixPQUFPdHNDLElBQUEsS0FBUyxlQUFlLE9BQU91YSxTQUFBLEtBQWMsYUFBYTtFQU8xRW9WLFlBQUEsQ0FBYUYsZ0NBQUEsRUFBbUMwYyxZQUFBLElBQVk7SUFDMUQsSUFBSTtNQUNGLElBQUksQ0FBQ1Isa0JBQUEsRUFBb0I7UUFDdkIsSUFBSSxPQUFPWSxZQUFBLEtBQWlCLGFBQWE7VUFFdkNBLFlBQUEsQ0FBYUMsT0FBQSxDQUNYOWMsOEJBQUEsRUFDQWxTLElBQUEsQ0FBS0MsU0FBQSxDQUFVO1lBQ2JndkIsSUFBQSxFQUFNaG1CLElBQUEsQ0FBS2ltQixNQUFBLENBQU07WUFDakJQO1dBQ0QsQ0FBQzs7UUFHTixJQUFJLE9BQU9uc0MsSUFBQSxDQUFLLGVBQWUsVUFBVTtVQUV2QyxDQUFDLEdBQUdBLElBQUEsQ0FBSyxXQUFXMnNDLFFBQUEsQ0FBUztZQUFFQyxtQkFBQSxFQUFxQjtVQUFJLENBQUUsQ0FBQyxFQUFFanNDLE9BQUEsQ0FDMURrc0MsTUFBQSxJQUNDQSxNQUFBLENBQU9ULFdBQUEsQ0FBWTtZQUNqQmp4QixJQUFBLEVBQU11VSw4QkFBQTtZQUNOeWM7V0FDRCxDQUFDOzs7YUFJVm5zQixFQUFBLEdBQU07R0FDVDtFQUtELElBQUksT0FBT3lyQixnQkFBQSxLQUFxQixhQUFhO0lBQ3pDQSxnQkFBQSxDQUFpQixXQUFZL2EsRUFBQSxJQUFnQjtNQUM3QyxJQUFJQSxFQUFBLENBQUc5dkIsR0FBQSxLQUFROHVCLDhCQUFBLEVBQWdDO1FBQzdDLE1BQU00YyxJQUFBLEdBQU85dUIsSUFBQSxDQUFLc3ZCLEtBQUEsQ0FBTXBjLEVBQUEsQ0FBR3FjLFFBQVE7UUFDbkMsSUFBSVQsSUFBQSxFQUFNVCxnQkFBQSxDQUFpQlMsSUFBQSxDQUFLSCxZQUFZOztLQUUvQzs7RUFNSCxNQUFNYSxXQUFBLEdBQWNodEMsSUFBQSxDQUFLOE4sUUFBQSxJQUFZeU0sU0FBQSxDQUFVMHlCLGFBQUE7RUFDL0MsSUFBSUQsV0FBQSxFQUFhO0lBRWZBLFdBQUEsQ0FBWXZCLGdCQUFBLENBQWlCLFdBQVd5Qix1QkFBdUI7OztBQUluRSxTQUFTQSx3QkFBd0I7RUFBRVo7QUFBSSxHQUFnQjtFQUNyRCxJQUFJQSxJQUFBLElBQVFBLElBQUEsQ0FBS254QixJQUFBLEtBQVN1VSw4QkFBQSxFQUFnQztJQUN4RG1jLGdCQUFBLENBQWlCUyxJQUFBLENBQUtILFlBQVk7O0FBRXRDO0FDaEZBMThCLFlBQUEsQ0FBYWQsZUFBQSxHQUFrQnpELFFBQUE7QUFHL0JsRCxRQUFBLENBQWVKLEtBQUEsRUFBYStTLHFCQUFxQjs7O0ExRGpCakQsSUFBT3BiLG1CQUFBLEdBQVFILE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9