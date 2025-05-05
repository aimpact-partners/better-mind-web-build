System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zod","3.24.4"]]);
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

// .beyond/uimport/zod.3.24.4.js
var zod_3_24_4_exports = {};
__export(zod_3_24_4_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  default: () => zod_3_24_4_default,
  defaultErrorMap: () => errorMap,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType,
  z: () => z
});
module.exports = __toCommonJS(zod_3_24_4_exports);

// node_modules/zod/lib/index.mjs
var util;
(function (util2) {
  util2.assertEqual = val => val;
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = items => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = obj => {
    const validKeys = util2.objectKeys(obj).filter(k => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = obj => {
    return util2.objectKeys(obj).map(function (e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? obj => Object.keys(obj) : object => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item)) return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? val => Number.isInteger(val) : val => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map(val => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function (objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var getParsedType = data => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var quotelessJson = obj => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = sub => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function (issue) {
      return issue.message;
    };
    const fieldErrors = {
      _errors: []
    };
    const processError = error => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || {
                _errors: []
              };
            } else {
              curr[el] = curr[el] || {
                _errors: []
              };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = issue => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return {
      formErrors,
      fieldErrors
    };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = issues => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return {
    message
  };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = params => {
  const {
    data,
    path,
    errorMaps,
    issueData
  } = params;
  const fullPath = [...path, ...(issueData.path || [])];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter(m => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, {
      data,
      defaultError: errorMessage
    }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, overrideMap, overrideMap === errorMap ? void 0 : errorMap].filter(x => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted") return INVALID;
      if (s.status === "dirty") status.dirty();
      arrayValue.push(s.value);
    }
    return {
      status: status.value,
      value: arrayValue
    };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const {
        key,
        value
      } = pair;
      if (key.status === "aborted") return INVALID;
      if (value.status === "aborted") return INVALID;
      if (key.status === "dirty") status.dirty();
      if (value.status === "dirty") status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return {
      status: status.value,
      value: finalObject
    };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = value => ({
  status: "dirty",
  value
});
var OK = value => ({
  status: "valid",
  value
});
var isAborted = x => x.status === "aborted";
var isDirty = x => x.status === "dirty";
var isValid = x => x.status === "valid";
var isAsync = x => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var errorUtil;
(function (errorUtil2) {
  errorUtil2.errToObj = message => typeof message === "string" ? {
    message
  } : message || {};
  errorUtil2.toString = message => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache, _ZodNativeEnum_cache;
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return {
      success: true,
      data: result.value
    };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params) return {};
  const {
    errorMap: errorMap2,
    invalid_type_error,
    required_error,
    description
  } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2) return {
    errorMap: errorMap2,
    description
  };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const {
      message
    } = params;
    if (iss.code === "invalid_enum_value") {
      return {
        message: message !== null && message !== void 0 ? message : ctx.defaultError
      };
    }
    if (typeof ctx.data === "undefined") {
      return {
        message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError
      };
    }
    if (iss.code !== "invalid_type") return {
      message: ctx.defaultError
    };
    return {
      message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError
    };
  };
  return {
    errorMap: customMap,
    description
  };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({
      data,
      path: ctx.path,
      parent: ctx
    });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({
          data,
          path: [],
          parent: ctx
        });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({
      data,
      path: [],
      parent: ctx
    }).then(result => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = val => {
      if (typeof message === "string" || typeof message === "undefined") {
        return {
          message
        };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(data => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "refinement",
        refinement
      }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: data => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "transform",
        transform
      }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt)) return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null) return false;
    if (!decoded.typ || !decoded.alg) return false;
    if (alg && decoded.alg !== alg) return false;
    return true;
  } catch (_a) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              includes: check.value,
              position: check.position
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              startsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              endsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  _regex(regex, validation, message) {
    return this.refinement(data => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({
      kind: "email",
      ...errorUtil.errToObj(message)
    });
  }
  url(message) {
    return this._addCheck({
      kind: "url",
      ...errorUtil.errToObj(message)
    });
  }
  emoji(message) {
    return this._addCheck({
      kind: "emoji",
      ...errorUtil.errToObj(message)
    });
  }
  uuid(message) {
    return this._addCheck({
      kind: "uuid",
      ...errorUtil.errToObj(message)
    });
  }
  nanoid(message) {
    return this._addCheck({
      kind: "nanoid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid(message) {
    return this._addCheck({
      kind: "cuid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid2(message) {
    return this._addCheck({
      kind: "cuid2",
      ...errorUtil.errToObj(message)
    });
  }
  ulid(message) {
    return this._addCheck({
      kind: "ulid",
      ...errorUtil.errToObj(message)
    });
  }
  base64(message) {
    return this._addCheck({
      kind: "base64",
      ...errorUtil.errToObj(message)
    });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({
      kind: "jwt",
      ...errorUtil.errToObj(options)
    });
  }
  ip(options) {
    return this._addCheck({
      kind: "ip",
      ...errorUtil.errToObj(options)
    });
  }
  cidr(options) {
    return this._addCheck({
      kind: "cidr",
      ...errorUtil.errToObj(options)
    });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  date(message) {
    return this._addCheck({
      kind: "date",
      message
    });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  duration(message) {
    return this._addCheck({
      kind: "duration",
      ...errorUtil.errToObj(message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(ch => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(ch => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(ch => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(ch => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(ch => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(ch => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(ch => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(ch => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(ch => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(ch => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(ch => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(ch => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(ch => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(ch => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(ch => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(ch => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = params => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find(ch => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null,
      min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = params => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = params => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = params => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = params => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = params => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = params => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = params => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = params => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = params => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = params => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = params => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const {
      ctx,
      status
    } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then(result2 => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: {
        value: minLength,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: {
        value: maxLength,
        message: errorUtil.toString(message)
      }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: {
        value: len,
        message: errorUtil.toString(message)
      }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map(item => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = {
      shape,
      keys
    };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const {
      shape,
      keys: shapeKeys
    } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: {
          status: "valid",
          value: key
        },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: {
              status: "valid",
              value: key
            },
            value: {
              status: "valid",
              value: ctx.data[key]
            }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: {
            status: "valid",
            value: key
          },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then(syncPairs => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...(message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys") return {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          };
          return {
            message: defaultError
          };
        }
      } : {})
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({
      [key]: schema
    });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach(key => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach(key => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach(key => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach(key => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map(result => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async option => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = {
            result,
            ctx: childCtx
          };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map(issues2 => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = type => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return {
      valid: true,
      data: a
    };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter(key => bKeys.indexOf(key) !== -1);
    const newObj = {
      ...a,
      ...b
    };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newObj[key] = sharedValue.data;
    }
    return {
      valid: true,
      data: newObj
    };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return {
        valid: false
      };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newArray.push(sharedValue.data);
    }
    return {
      valid: true,
      data: newArray
    };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return {
      valid: true,
      data: a
    };
  } else {
    return {
      valid: false
    };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return {
        status: status.value,
        value: merged.data
      };
    };
    if (ctx.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema) return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter(x => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then(results => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return {
          status: status.value,
          value: finalMap
        };
      });
    } else {
      const finalMap = /* @__PURE__ */new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return {
        status: status.value,
        value: finalMap
      };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */new Set();
      for (const element of elements2) {
        if (element.status === "aborted") return INVALID;
        if (element.status === "dirty") status.dirty();
        parsedSet.add(element.value);
      }
      return {
        status: status.value,
        value: parsedSet
      };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then(elements2 => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: {
        value: minSize,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: {
        value: maxSize,
        message: errorUtil.toString(message)
      }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = {
      errorMap: ctx.common.contextualErrorMap
    };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function (...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch(e => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch(e => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function (...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, void 0);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter(opt => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
_ZodEnum_cache = /* @__PURE__ */new WeakMap();
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, void 0);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
_ZodNativeEnum_cache = /* @__PURE__ */new WeakMap();
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then(data => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: arg => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async processed2 => {
          if (status.value === "aborted") return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted") return INVALID;
          if (result.status === "dirty") return DIRTY(result.value);
          if (status.value === "dirty") return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted") return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted") return INVALID;
        if (result.status === "dirty") return DIRTY(result.value);
        if (status.value === "dirty") return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = acc => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted") return INVALID;
        if (inner.status === "dirty") status.dirty();
        executeRefinement(inner.value);
        return {
          status: status.value,
          value: inner.value
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(inner => {
          if (inner.status === "aborted") return INVALID;
          if (inner.status === "dirty") status.dirty();
          return executeRefinement(inner.value).then(() => {
            return {
              status: status.value,
              value: inner.value
            };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base)) return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return {
          status: status.value,
          value: result
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(base => {
          if (!isValid(base)) return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then(result => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: {
      type: "preprocess",
      transform: preprocess
    },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then(result2 => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
};
ZodNaN.create = params => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted") return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted") return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = data => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then(data => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
    message: params
  } : params;
  const p2 = typeof p === "string" ? {
    message: p
  } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check) return ZodAny.create().superRefine((data, ctx) => {
    var _a, _b;
    const r = check(data);
    if (r instanceof Promise) {
      return r.then(r2 => {
        var _a2, _b2;
        if (!r2) {
          const params = cleanParams(_params, data);
          const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
          ctx.addIssue({
            code: "custom",
            ...params,
            fatal: _fatal
          });
        }
      });
    }
    if (!r) {
      const params = cleanParams(_params, data);
      const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
      ctx.addIssue({
        code: "custom",
        ...params,
        fatal: _fatal
      });
    }
    return;
  });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom(data => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: arg => ZodString.create({
    ...arg,
    coerce: true
  }),
  number: arg => ZodNumber.create({
    ...arg,
    coerce: true
  }),
  boolean: arg => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: arg => ZodBigInt.create({
    ...arg,
    coerce: true
  }),
  date: arg => ZodDate.create({
    ...arg,
    coerce: true
  })
};
var NEVER = INVALID;
var z = /* @__PURE__ */Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// .beyond/uimport/zod.3.24.4.js
var zod_3_24_4_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yNC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9saWIvaW5kZXgubWpzIl0sIm5hbWVzIjpbInpvZF8zXzI0XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yNF80X2RlZmF1bHQiLCJkZWZhdWx0RXJyb3JNYXAiLCJlcnJvck1hcCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInV0aWwyIiwiYXNzZXJ0RXF1YWwiLCJ2YWwiLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsImlzSW50ZWdlciIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJfIiwidmFsdWUiLCJ0b1N0cmluZyIsIm9iamVjdFV0aWwyIiwibWVyZ2VTaGFwZXMiLCJmaXJzdCIsInNlY29uZCIsImRhdGEiLCJ0IiwiaXNOYU4iLCJBcnJheSIsImlzQXJyYXkiLCJ0aGVuIiwiY2F0Y2giLCJNYXAiLCJTZXQiLCJEYXRlIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiZXJyb3JzIiwiaXNzdWVzIiwiY29uc3RydWN0b3IiLCJhZGRJc3N1ZSIsInN1YiIsImFkZElzc3VlcyIsInN1YnMiLCJhY3R1YWxQcm90byIsIm5ldyIsInRhcmdldCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibmFtZSIsImZvcm1hdCIsIl9tYXBwZXIiLCJtYXBwZXIiLCJpc3N1ZSIsIm1lc3NhZ2UiLCJmaWVsZEVycm9ycyIsIl9lcnJvcnMiLCJwcm9jZXNzRXJyb3IiLCJlcnJvciIsImNvZGUiLCJ1bmlvbkVycm9ycyIsInJldHVyblR5cGVFcnJvciIsImFyZ3VtZW50c0Vycm9yIiwicGF0aCIsImxlbmd0aCIsImN1cnIiLCJpIiwiZWwiLCJ0ZXJtaW5hbCIsImFzc2VydCIsImlzRW1wdHkiLCJmbGF0dGVuIiwiZm9ybUVycm9ycyIsImNyZWF0ZSIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJzbGljZSIsInJldmVyc2UiLCJjdHgiLCJvdmVycmlkZU1hcCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsImRpcnR5IiwiYWJvcnQiLCJtZXJnZUFycmF5Iiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJzIiwibWVyZ2VPYmplY3RBc3luYyIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiUHJvbWlzZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsImVycm9yVXRpbCIsImVycm9yVXRpbDIiLCJlcnJUb09iaiIsIl9ab2RFbnVtX2NhY2hlIiwiX1pvZE5hdGl2ZUVudW1fY2FjaGUiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9hIiwiX2IiLCJfZGVmIiwiX2dldFR5cGUiLCJpbnB1dCIsIl9nZXRPclJldHVybkN0eCIsInBhcnNlZFR5cGUiLCJfcHJvY2Vzc0lucHV0UGFyYW1zIiwiX3BhcnNlU3luYyIsIl9wYXJzZSIsIl9wYXJzZUFzeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwic2FmZVBhcnNlIiwiYXN5bmMiLCJ+dmFsaWRhdGUiLCJlcnIiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlQXN5bmMiLCJzYWZlUGFyc2VBc3luYyIsIm1heWJlQXN5bmNSZXN1bHQiLCJyZWZpbmUiLCJjaGVjayIsImdldElzc3VlUHJvcGVydGllcyIsIl9yZWZpbmVtZW50Iiwic2V0RXJyb3IiLCJyZWZpbmVtZW50IiwicmVmaW5lbWVudERhdGEiLCJzY2hlbWEiLCJ0eXBlTmFtZSIsInN1cGVyUmVmaW5lIiwiZGVmIiwic3BhIiwiYmluZCIsIm51bGxpc2giLCJvciIsImFuZCIsInRyYW5zZm9ybSIsImJyYW5kIiwiZGVzY3JpYmUiLCJwaXBlIiwicmVhZG9ubHkiLCJpc051bGxhYmxlIiwiaXNPcHRpb25hbCIsInZlcnNpb24iLCJ2ZW5kb3IiLCJ2YWxpZGF0ZSIsIm9wdGlvbiIsImluY29taW5nIiwiZGVmYXVsdFZhbHVlRnVuYyIsImlubmVyVHlwZSIsImRlZmF1bHRWYWx1ZSIsImNhdGNoVmFsdWVGdW5jIiwiY2F0Y2hWYWx1ZSIsIlRoaXMiLCJjdWlkUmVnZXgiLCJjdWlkMlJlZ2V4IiwidWxpZFJlZ2V4IiwidXVpZFJlZ2V4IiwibmFub2lkUmVnZXgiLCJqd3RSZWdleCIsImR1cmF0aW9uUmVnZXgiLCJlbWFpbFJlZ2V4IiwiX2Vtb2ppUmVnZXgiLCJlbW9qaVJlZ2V4IiwiaXB2NFJlZ2V4IiwiaXB2NENpZHJSZWdleCIsImlwdjZSZWdleCIsImlwdjZDaWRyUmVnZXgiLCJiYXNlNjRSZWdleCIsImJhc2U2NHVybFJlZ2V4IiwiZGF0ZVJlZ2V4U291cmNlIiwiZGF0ZVJlZ2V4IiwiUmVnRXhwIiwidGltZVJlZ2V4U291cmNlIiwiYXJncyIsInNlY29uZHNSZWdleFNvdXJjZSIsInByZWNpc2lvbiIsInNlY29uZHNRdWFudGlmaWVyIiwidGltZVJlZ2V4IiwicmVnZXgiLCJvcHRzIiwibG9jYWwiLCJvZmZzZXQiLCJpc1ZhbGlkSVAiLCJpcCIsInRlc3QiLCJpc1ZhbGlkSldUIiwiand0IiwiYWxnIiwiaGVhZGVyIiwic3BsaXQiLCJiYXNlNjQiLCJwYWRFbmQiLCJkZWNvZGVkIiwiYXRvYiIsInR5cCIsImlzVmFsaWRDaWRyIiwiU3RyaW5nIiwiY3R4MiIsImNoZWNrcyIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NHVybCIsImNpZHIiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNDSURSIiwiaXNCYXNlNjQiLCJpc0Jhc2U2NHVybCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsInBvdyIsImFyZ3VtZW50cyIsImd0ZSIsImx0ZSIsInNldExpbWl0IiwiZ3QiLCJsdCIsImludCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJub25wb3NpdGl2ZSIsIm5vbm5lZ2F0aXZlIiwiZmluaXRlIiwic2FmZSIsIk1JTl9TQUZFX0lOVEVHRVIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzSW50IiwiQmlnSW50IiwiX2dldEludmFsaWRJbnB1dCIsIkJvb2xlYW4iLCJnZXRUaW1lIiwibWluRGF0ZSIsIm1heERhdGUiLCJfYW55IiwiX3Vua25vd24iLCJleGFjdExlbmd0aCIsImFsbCIsInJlc3VsdDIiLCJlbGVtZW50IiwiZGVlcFBhcnRpYWxpZnkiLCJuZXdTaGFwZSIsInNoYXBlIiwiZmllbGRTY2hlbWEiLCJ1bndyYXAiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJrZXlWYWxpZGF0b3IiLCJzdHJpY3QiLCJfYyIsIl9kIiwic3RyaXAiLCJhdWdtZW50YXRpb24iLCJtZXJnZSIsIm1lcmdpbmciLCJtZXJnZWQiLCJzZXRLZXkiLCJpbmRleCIsInBpY2siLCJtYXNrIiwiZm9yRWFjaCIsIm9taXQiLCJkZWVwUGFydGlhbCIsInBhcnRpYWwiLCJyZXF1aXJlZCIsIm5ld0ZpZWxkIiwia2V5b2YiLCJjcmVhdGVab2RFbnVtIiwic3RyaWN0Q3JlYXRlIiwibGF6eWNyZWF0ZSIsImhhbmRsZVJlc3VsdHMiLCJjaGlsZEN0eCIsImlzc3VlczIiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvclZhbHVlIiwib3B0aW9uc01hcCIsImZyb20iLCJkaXNjcmltaW5hdG9yVmFsdWVzIiwibWVyZ2VWYWx1ZXMiLCJhIiwiYiIsImFUeXBlIiwiYlR5cGUiLCJ2YWxpZCIsImJLZXlzIiwic2hhcmVkS2V5cyIsImluZGV4T2YiLCJuZXdPYmoiLCJzaGFyZWRWYWx1ZSIsIm5ld0FycmF5IiwiaXRlbUEiLCJpdGVtQiIsImhhbmRsZVBhcnNlZCIsInBhcnNlZExlZnQiLCJwYXJzZWRSaWdodCIsImxlZnQiLCJyaWdodCIsInJlc3QiLCJpdGVtSW5kZXgiLCJzY2hlbWFzIiwia2V5U2NoZW1hIiwia2V5VHlwZSIsInZhbHVlU2NoZW1hIiwidmFsdWVUeXBlIiwidGhpcmQiLCJlbnRyaWVzIiwiZmluYWxNYXAiLCJtaW5TaXplIiwic2l6ZSIsIm1heFNpemUiLCJmaW5hbGl6ZVNldCIsImVsZW1lbnRzMiIsInBhcnNlZFNldCIsImFkZCIsImVsZW1lbnRzIiwidmFsdWVzIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJtZSIsInBhcnNlZEFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJwYXJzZWRSZXR1cm5zIiwicGFyYW1ldGVycyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsInN0cmljdEltcGxlbWVudCIsImdldHRlciIsImxhenlTY2hlbWEiLCJleHBlY3RlZFZhbHVlcyIsImVudW1WYWx1ZXMiLCJWYWx1ZXMiLCJFbnVtIiwiZXh0cmFjdCIsIm5ld0RlZiIsImV4Y2x1ZGUiLCJvcHQiLCJXZWFrTWFwIiwibmF0aXZlRW51bVZhbHVlcyIsInByb21pc2lmaWVkIiwic291cmNlVHlwZSIsImNoZWNrQ3R4IiwiYXJnIiwiZmF0YWwiLCJwcm9jZXNzZWQiLCJwcm9jZXNzZWQyIiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInJlbW92ZURlZmF1bHQiLCJuZXdDdHgiLCJyZW1vdmVDYXRjaCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJpbiIsIm91dCIsImNsZWFuUGFyYW1zIiwicCIsInAyIiwiX3BhcmFtcyIsInIiLCJyMiIsIl9hMiIsIl9iMiIsIl9mYXRhbCIsIlpvZEZpcnN0UGFydHlUeXBlS2luZDIiLCJjbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBakMsT0FBQTtFQUFBa0MsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUEzQixVQUFBO0VBQUE0QixRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBdEMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQXVDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLGtCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEs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RyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxVQUFVO0VBQ2pFO0VBQ0EsSUFBSWdLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUtqSSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSWlLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUtsSSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSWtLLFdBQUEsRUFBYTtJQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUtuSSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxVQUFVO0VBQ2pFO0VBQ0EsSUFBSW1LLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUtwSSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSW9LLE1BQUEsRUFBUTtJQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUtySSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxLQUFLO0VBQzVEO0VBQ0EsSUFBSXFLLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUt0SSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSXNLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUt2SSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSXVLLFNBQUEsRUFBVztJQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUt4SSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxRQUFRO0VBQy9EO0VBQ0EsSUFBSXdLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUt6SSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSXlLLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUsxSSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSTBLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUszSSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSTJLLEtBQUEsRUFBTztJQUNQLE9BQU8sQ0FBQyxDQUFDLEtBQUs1SSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxJQUFJO0VBQzNEO0VBQ0EsSUFBSTRLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUs3SSxJQUFBLENBQUtrRyxNQUFBLENBQU8xUSxJQUFBLENBQU13UyxFQUFBLElBQU9BLEVBQUEsQ0FBRy9KLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSTZLLFNBQUEsRUFBVztJQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUs5SSxJQUFB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