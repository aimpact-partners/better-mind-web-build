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

// .beyond/uimport/temp/zod.3.24.4.js
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

// .beyond/uimport/temp/zod.3.24.4.js
var zod_3_24_4_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3pvZC4zLjI0LjQuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiXSwibmFtZXMiOlsiem9kXzNfMjRfNF9leHBvcnRzIiwiX19leHBvcnQiLCJCUkFORCIsIkRJUlRZIiwiRU1QVFlfUEFUSCIsIklOVkFMSUQiLCJORVZFUiIsIk9LIiwiUGFyc2VTdGF0dXMiLCJTY2hlbWEiLCJab2RUeXBlIiwiWm9kQW55IiwiWm9kQXJyYXkiLCJab2RCaWdJbnQiLCJab2RCb29sZWFuIiwiWm9kQnJhbmRlZCIsIlpvZENhdGNoIiwiWm9kRGF0ZSIsIlpvZERlZmF1bHQiLCJab2REaXNjcmltaW5hdGVkVW5pb24iLCJab2RFZmZlY3RzIiwiWm9kRW51bSIsIlpvZEVycm9yIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiWm9kRnVuY3Rpb24iLCJab2RJbnRlcnNlY3Rpb24iLCJab2RJc3N1ZUNvZGUiLCJab2RMYXp5IiwiWm9kTGl0ZXJhbCIsIlpvZE1hcCIsIlpvZE5hTiIsIlpvZE5hdGl2ZUVudW0iLCJab2ROZXZlciIsIlpvZE51bGwiLCJab2ROdWxsYWJsZSIsIlpvZE51bWJlciIsIlpvZE9iamVjdCIsIlpvZE9wdGlvbmFsIiwiWm9kUGFyc2VkVHlwZSIsIlpvZFBpcGVsaW5lIiwiWm9kUHJvbWlzZSIsIlpvZFJlYWRvbmx5IiwiWm9kUmVjb3JkIiwiWm9kU2NoZW1hIiwiWm9kU2V0IiwiWm9kU3RyaW5nIiwiWm9kU3ltYm9sIiwiWm9kVHJhbnNmb3JtZXIiLCJab2RUdXBsZSIsIlpvZFVuZGVmaW5lZCIsIlpvZFVuaW9uIiwiWm9kVW5rbm93biIsIlpvZFZvaWQiLCJhZGRJc3N1ZVRvQ29udGV4dCIsImFueSIsImFueVR5cGUiLCJhcnJheSIsImFycmF5VHlwZSIsImJpZ2ludCIsImJpZ0ludFR5cGUiLCJib29sZWFuIiwiYm9vbGVhblR5cGUiLCJjb2VyY2UiLCJjdXN0b20iLCJkYXRlIiwiZGF0ZVR5cGUiLCJkYXRldGltZVJlZ2V4IiwiZGVmYXVsdCIsInpvZF8zXzI0XzRfZGVmYXVsdCIsImRlZmF1bHRFcnJvck1hcCIsImVycm9yTWFwIiwiZGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRlZFVuaW9uVHlwZSIsImVmZmVjdCIsImVmZmVjdHNUeXBlIiwiZW51bSIsImVudW1UeXBlIiwiZnVuY3Rpb24iLCJmdW5jdGlvblR5cGUiLCJnZXRFcnJvck1hcCIsImdldFBhcnNlZFR5cGUiLCJpbnN0YW5jZW9mIiwiaW5zdGFuY2VPZlR5cGUiLCJpbnRlcnNlY3Rpb24iLCJpbnRlcnNlY3Rpb25UeXBlIiwiaXNBYm9ydGVkIiwiaXNBc3luYyIsImlzRGlydHkiLCJpc1ZhbGlkIiwibGF0ZSIsImxhenkiLCJsYXp5VHlwZSIsImxpdGVyYWwiLCJsaXRlcmFsVHlwZSIsIm1ha2VJc3N1ZSIsIm1hcCIsIm1hcFR5cGUiLCJuYW4iLCJuYW5UeXBlIiwibmF0aXZlRW51bSIsIm5hdGl2ZUVudW1UeXBlIiwibmV2ZXIiLCJuZXZlclR5cGUiLCJudWxsIiwibnVsbFR5cGUiLCJudWxsYWJsZSIsIm51bGxhYmxlVHlwZSIsIm51bWJlciIsIm51bWJlclR5cGUiLCJvYmplY3QiLCJvYmplY3RUeXBlIiwib2JqZWN0VXRpbCIsIm9ib29sZWFuIiwib251bWJlciIsIm9wdGlvbmFsIiwib3B0aW9uYWxUeXBlIiwib3N0cmluZyIsInBpcGVsaW5lIiwicGlwZWxpbmVUeXBlIiwicHJlcHJvY2VzcyIsInByZXByb2Nlc3NUeXBlIiwicHJvbWlzZSIsInByb21pc2VUeXBlIiwicXVvdGVsZXNzSnNvbiIsInJlY29yZCIsInJlY29yZFR5cGUiLCJzZXQiLCJzZXRUeXBlIiwic2V0RXJyb3JNYXAiLCJzdHJpY3RPYmplY3QiLCJzdHJpY3RPYmplY3RUeXBlIiwic3RyaW5nIiwic3RyaW5nVHlwZSIsInN5bWJvbCIsInN5bWJvbFR5cGUiLCJ0cmFuc2Zvcm1lciIsInR1cGxlIiwidHVwbGVUeXBlIiwidW5kZWZpbmVkIiwidW5kZWZpbmVkVHlwZSIsInVuaW9uIiwidW5pb25UeXBlIiwidW5rbm93biIsInVua25vd25UeXBlIiwidXRpbCIsInZvaWQiLCJ2b2lkVHlwZSIsInoiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidXRpbDIiLCJhc3NlcnRFcXVhbCIsInZhbCIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwib2JqZWN0VXRpbDIiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiZGF0YSIsInQiLCJpc05hTiIsIkFycmF5IiwiaXNBcnJheSIsInRoZW4iLCJjYXRjaCIsIk1hcCIsIlNldCIsIkRhdGUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJlcnJvcnMiLCJpc3N1ZXMiLCJjb25zdHJ1Y3RvciIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwibmV3IiwidGFyZ2V0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiZm9ybWF0IiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwibGVuZ3RoIiwiY3VyciIsImkiLCJlbCIsInRlcm1pbmFsIiwiYXNzZXJ0IiwiaXNFbXB0eSIsImZsYXR0ZW4iLCJmb3JtRXJyb3JzIiwiY3JlYXRlIiwiX2N0eCIsImludmFsaWRfdHlwZSIsInJlY2VpdmVkIiwiZXhwZWN0ZWQiLCJpbnZhbGlkX2xpdGVyYWwiLCJ1bnJlY29nbml6ZWRfa2V5cyIsImludmFsaWRfdW5pb24iLCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IiLCJvcHRpb25zIiwiaW52YWxpZF9lbnVtX3ZhbHVlIiwiaW52YWxpZF9hcmd1bWVudHMiLCJpbnZhbGlkX3JldHVybl90eXBlIiwiaW52YWxpZF9kYXRlIiwiaW52YWxpZF9zdHJpbmciLCJ2YWxpZGF0aW9uIiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRvb19zbWFsbCIsInR5cGUiLCJleGFjdCIsImluY2x1c2l2ZSIsIm1pbmltdW0iLCJ0b29fYmlnIiwibWF4aW11bSIsImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzIiwibm90X211bHRpcGxlX29mIiwibXVsdGlwbGVPZiIsIm5vdF9maW5pdGUiLCJkZWZhdWx0RXJyb3IiLCJvdmVycmlkZUVycm9yTWFwIiwicGFyYW1zIiwiZXJyb3JNYXBzIiwiaXNzdWVEYXRhIiwiZnVsbFBhdGgiLCJmdWxsSXNzdWUiLCJlcnJvck1lc3NhZ2UiLCJtYXBzIiwibSIsInNsaWNlIiwicmV2ZXJzZSIsImN0eCIsIm92ZXJyaWRlTWFwIiwiY29tbW9uIiwiY29udGV4dHVhbEVycm9yTWFwIiwic2NoZW1hRXJyb3JNYXAiLCJ4IiwiZGlydHkiLCJhYm9ydCIsIm1lcmdlQXJyYXkiLCJzdGF0dXMiLCJyZXN1bHRzIiwiYXJyYXlWYWx1ZSIsInMiLCJtZXJnZU9iamVjdEFzeW5jIiwicGFpcnMiLCJzeW5jUGFpcnMiLCJwYWlyIiwibWVyZ2VPYmplY3RTeW5jIiwiZmluYWxPYmplY3QiLCJhbHdheXNTZXQiLCJmcmVlemUiLCJQcm9taXNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImdldCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJTdXBwcmVzc2VkRXJyb3IiLCJzdXBwcmVzc2VkIiwiZXJyb3JVdGlsIiwiZXJyb3JVdGlsMiIsImVyclRvT2JqIiwiX1pvZEVudW1fY2FjaGUiLCJfWm9kTmF0aXZlRW51bV9jYWNoZSIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9jYWNoZWRQYXRoIiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsIl9lcnJvciIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJlcnJvck1hcDIiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiX2EiLCJfYiIsIl9kZWYiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJzYWZlUGFyc2UiLCJhc3luYyIsIn52YWxpZGF0ZSIsImVyciIsInRvTG93ZXJDYXNlIiwicGFyc2VBc3luYyIsInNhZmVQYXJzZUFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsInJlZmluZSIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnQiLCJyZWZpbmVtZW50RGF0YSIsInNjaGVtYSIsInR5cGVOYW1lIiwic3VwZXJSZWZpbmUiLCJkZWYiLCJzcGEiLCJiaW5kIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwidmVyc2lvbiIsInZlbmRvciIsInZhbGlkYXRlIiwib3B0aW9uIiwiaW5jb21pbmciLCJkZWZhdWx0VmFsdWVGdW5jIiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiY2F0Y2hWYWx1ZUZ1bmMiLCJjYXRjaFZhbHVlIiwiVGhpcyIsImN1aWRSZWdleCIsImN1aWQyUmVnZXgiLCJ1bGlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJuYW5vaWRSZWdleCIsImp3dFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY0Q2lkclJlZ2V4IiwiaXB2NlJlZ2V4IiwiaXB2NkNpZHJSZWdleCIsImJhc2U2NFJlZ2V4IiwiYmFzZTY0dXJsUmVnZXgiLCJkYXRlUmVnZXhTb3VyY2UiLCJkYXRlUmVnZXgiLCJSZWdFeHAiLCJ0aW1lUmVnZXhTb3VyY2UiLCJhcmdzIiwic2Vjb25kc1JlZ2V4U291cmNlIiwicHJlY2lzaW9uIiwic2Vjb25kc1F1YW50aWZpZXIiLCJ0aW1lUmVnZXgiLCJyZWdleCIsIm9wdHMiLCJsb2NhbCIsIm9mZnNldCIsImlzVmFsaWRJUCIsImlwIiwidGVzdCIsImlzVmFsaWRKV1QiLCJqd3QiLCJhbGciLCJoZWFkZXIiLCJzcGxpdCIsImJhc2U2NCIsInBhZEVuZCIsImRlY29kZWQiLCJhdG9iIiwidHlwIiwiaXNWYWxpZENpZHIiLCJTdHJpbmciLCJjdHgyIiwiY2hlY2tzIiwidG9vQmlnIiwidG9vU21hbGwiLCJVUkwiLCJsYXN0SW5kZXgiLCJ0ZXN0UmVzdWx0IiwidHJpbSIsInRvVXBwZXJDYXNlIiwiX3JlZ2V4IiwiX2FkZENoZWNrIiwiZW1haWwiLCJ1cmwiLCJlbW9qaSIsInV1aWQiLCJuYW5vaWQiLCJjdWlkIiwiY3VpZDIiLCJ1bGlkIiwiYmFzZTY0dXJsIiwiY2lkciIsImRhdGV0aW1lIiwidGltZSIsImR1cmF0aW9uIiwibWluIiwibWluTGVuZ3RoIiwibWF4IiwibWF4TGVuZ3RoIiwibGVuIiwibm9uZW1wdHkiLCJpc0RhdGV0aW1lIiwiY2giLCJpc0RhdGUiLCJpc1RpbWUiLCJpc0R1cmF0aW9uIiwiaXNFbWFpbCIsImlzVVJMIiwiaXNFbW9qaSIsImlzVVVJRCIsImlzTkFOT0lEIiwiaXNDVUlEIiwiaXNDVUlEMiIsImlzVUxJRCIsImlzSVAiLCJpc0NJRFIiLCJpc0Jhc2U2NCIsImlzQmFzZTY0dXJsIiwiZmxvYXRTYWZlUmVtYWluZGVyIiwic3RlcCIsInZhbERlY0NvdW50Iiwic3RlcERlY0NvdW50IiwiZGVjQ291bnQiLCJ2YWxJbnQiLCJwYXJzZUludCIsInRvRml4ZWQiLCJzdGVwSW50IiwicG93IiwiYXJndW1lbnRzIiwiZ3RlIiwibHRlIiwic2V0TGltaXQiLCJndCIsImx0IiwiaW50IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm5vbnBvc2l0aXZlIiwibm9ubmVnYXRpdmUiLCJmaW5pdGUiLCJzYWZlIiwiTUlOX1NBRkVfSU5URUdFUiIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNJbnQiLCJCaWdJbnQiLCJfZ2V0SW52YWxpZElucHV0IiwiQm9vbGVhbiIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9hbnkiLCJfdW5rbm93biIsImV4YWN0TGVuZ3RoIiwiYWxsIiwicmVzdWx0MiIsImVsZW1lbnQiLCJkZWVwUGFydGlhbGlmeSIsIm5ld1NoYXBlIiwic2hhcGUiLCJmaWVsZFNjaGVtYSIsInVud3JhcCIsIl9jYWNoZWQiLCJub25zdHJpY3QiLCJwYXNzdGhyb3VnaCIsImF1Z21lbnQiLCJleHRlbmQiLCJfZ2V0Q2FjaGVkIiwic2hhcGVLZXlzIiwiZXh0cmFLZXlzIiwiY2F0Y2hhbGwiLCJ1bmtub3duS2V5cyIsImtleVZhbGlkYXRvciIsInN0cmljdCIsIl9jIiwiX2QiLCJzdHJpcCIsImF1Z21lbnRhdGlvbiIsIm1lcmdlIiwibWVyZ2luZyIsIm1lcmdlZCIsInNldEtleSIsImluZGV4IiwicGljayIsIm1hc2siLCJmb3JFYWNoIiwib21pdCIsImRlZXBQYXJ0aWFsIiwicGFydGlhbCIsInJlcXVpcmVkIiwibmV3RmllbGQiLCJrZXlvZiIsImNyZWF0ZVpvZEVudW0iLCJzdHJpY3RDcmVhdGUiLCJsYXp5Y3JlYXRlIiwiaGFuZGxlUmVzdWx0cyIsImNoaWxkQ3R4IiwiaXNzdWVzMiIsInR5cGVzIiwiZ2V0RGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yVmFsdWUiLCJvcHRpb25zTWFwIiwiZnJvbSIsImRpc2NyaW1pbmF0b3JWYWx1ZXMiLCJtZXJnZVZhbHVlcyIsImEiLCJiIiwiYVR5cGUiLCJiVHlwZSIsInZhbGlkIiwiYktleXMiLCJzaGFyZWRLZXlzIiwiaW5kZXhPZiIsIm5ld09iaiIsInNoYXJlZFZhbHVlIiwibmV3QXJyYXkiLCJpdGVtQSIsIml0ZW1CIiwiaGFuZGxlUGFyc2VkIiwicGFyc2VkTGVmdCIsInBhcnNlZFJpZ2h0IiwibGVmdCIsInJpZ2h0IiwicmVzdCIsIml0ZW1JbmRleCIsInNjaGVtYXMiLCJrZXlTY2hlbWEiLCJrZXlUeXBlIiwidmFsdWVTY2hlbWEiLCJ2YWx1ZVR5cGUiLCJ0aGlyZCIsImVudHJpZXMiLCJmaW5hbE1hcCIsIm1pblNpemUiLCJzaXplIiwibWF4U2l6ZSIsImZpbmFsaXplU2V0IiwiZWxlbWVudHMyIiwicGFyc2VkU2V0IiwiYWRkIiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJpbXBsZW1lbnQiLCJtYWtlQXJnc0lzc3VlIiwibWFrZVJldHVybnNJc3N1ZSIsInJldHVybnMiLCJmbiIsIm1lIiwicGFyc2VkQXJncyIsIlJlZmxlY3QiLCJhcHBseSIsInBhcnNlZFJldHVybnMiLCJwYXJhbWV0ZXJzIiwicmV0dXJuVHlwZSIsImZ1bmMiLCJ2YWxpZGF0ZWRGdW5jIiwic3RyaWN0SW1wbGVtZW50IiwiZ2V0dGVyIiwibGF6eVNjaGVtYSIsImV4cGVjdGVkVmFsdWVzIiwiZW51bVZhbHVlcyIsIlZhbHVlcyIsIkVudW0iLCJleHRyYWN0IiwibmV3RGVmIiwiZXhjbHVkZSIsIm9wdCIsIldlYWtNYXAiLCJuYXRpdmVFbnVtVmFsdWVzIiwicHJvbWlzaWZpZWQiLCJzb3VyY2VUeXBlIiwiY2hlY2tDdHgiLCJhcmciLCJmYXRhbCIsInByb2Nlc3NlZCIsInByb2Nlc3NlZDIiLCJleGVjdXRlUmVmaW5lbWVudCIsImFjYyIsImlubmVyIiwiYmFzZSIsImNyZWF0ZVdpdGhQcmVwcm9jZXNzIiwicmVtb3ZlRGVmYXVsdCIsIm5ld0N0eCIsInJlbW92ZUNhdGNoIiwiU3ltYm9sIiwiaGFuZGxlQXN5bmMiLCJpblJlc3VsdCIsImluIiwib3V0IiwiY2xlYW5QYXJhbXMiLCJwIiwicDIiLCJfcGFyYW1zIiwiciIsInIyIiwiX2EyIiwiX2IyIiwiX2ZhdGFsIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kMiIsImNscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxFQUFBLEVBQUFBLENBQUEsS0FBQUEsRUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFqQyxPQUFBO0VBQUFrQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQTNCLFVBQUE7RUFBQTRCLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUF0QyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBdUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQyxzQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMs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