System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zod","3.24.2"]]);
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

// .beyond/uimport/zod.3.24.2.js
var zod_3_24_2_exports = {};
__export(zod_3_24_2_exports, {
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
  default: () => zod_3_24_2_default,
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
module.exports = __toCommonJS(zod_3_24_2_exports);

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
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
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

// .beyond/uimport/zod.3.24.2.js
var zod_3_24_2_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yNC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9saWIvaW5kZXgubWpzIl0sIm5hbWVzIjpbInpvZF8zXzI0XzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yNF8yX2RlZmF1bHQiLCJkZWZhdWx0RXJyb3JNYXAiLCJlcnJvck1hcCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInV0aWwyIiwiYXNzZXJ0RXF1YWwiLCJ2YWwiLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsImlzSW50ZWdlciIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJfIiwidmFsdWUiLCJ0b1N0cmluZyIsIm9iamVjdFV0aWwyIiwibWVyZ2VTaGFwZXMiLCJmaXJzdCIsInNlY29uZCIsImRhdGEiLCJ0IiwiaXNOYU4iLCJBcnJheSIsImlzQXJyYXkiLCJ0aGVuIiwiY2F0Y2giLCJNYXAiLCJTZXQiLCJEYXRlIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiZXJyb3JzIiwiaXNzdWVzIiwiY29uc3RydWN0b3IiLCJhZGRJc3N1ZSIsInN1YiIsImFkZElzc3VlcyIsInN1YnMiLCJhY3R1YWxQcm90byIsIm5ldyIsInRhcmdldCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibmFtZSIsImZvcm1hdCIsIl9tYXBwZXIiLCJtYXBwZXIiLCJpc3N1ZSIsIm1lc3NhZ2UiLCJmaWVsZEVycm9ycyIsIl9lcnJvcnMiLCJwcm9jZXNzRXJyb3IiLCJlcnJvciIsImNvZGUiLCJ1bmlvbkVycm9ycyIsInJldHVyblR5cGVFcnJvciIsImFyZ3VtZW50c0Vycm9yIiwicGF0aCIsImxlbmd0aCIsImN1cnIiLCJpIiwiZWwiLCJ0ZXJtaW5hbCIsImFzc2VydCIsImlzRW1wdHkiLCJmbGF0dGVuIiwiZm9ybUVycm9ycyIsImNyZWF0ZSIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJzbGljZSIsInJldmVyc2UiLCJjdHgiLCJvdmVycmlkZU1hcCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsImRpcnR5IiwiYWJvcnQiLCJtZXJnZUFycmF5Iiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJzIiwibWVyZ2VPYmplY3RBc3luYyIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiUHJvbWlzZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsImVycm9yVXRpbCIsImVycm9yVXRpbDIiLCJlcnJUb09iaiIsIl9ab2RFbnVtX2NhY2hlIiwiX1pvZE5hdGl2ZUVudW1fY2FjaGUiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9hIiwiX2IiLCJfZGVmIiwiX2dldFR5cGUiLCJpbnB1dCIsIl9nZXRPclJldHVybkN0eCIsInBhcnNlZFR5cGUiLCJfcHJvY2Vzc0lucHV0UGFyYW1zIiwiX3BhcnNlU3luYyIsIl9wYXJzZSIsIl9wYXJzZUFzeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwic2FmZVBhcnNlIiwiYXN5bmMiLCJ+dmFsaWRhdGUiLCJlcnIiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlQXN5bmMiLCJzYWZlUGFyc2VBc3luYyIsIm1heWJlQXN5bmNSZXN1bHQiLCJyZWZpbmUiLCJjaGVjayIsImdldElzc3VlUHJvcGVydGllcyIsIl9yZWZpbmVtZW50Iiwic2V0RXJyb3IiLCJyZWZpbmVtZW50IiwicmVmaW5lbWVudERhdGEiLCJzY2hlbWEiLCJ0eXBlTmFtZSIsInN1cGVyUmVmaW5lIiwiZGVmIiwic3BhIiwiYmluZCIsIm51bGxpc2giLCJvciIsImFuZCIsInRyYW5zZm9ybSIsImJyYW5kIiwiZGVzY3JpYmUiLCJwaXBlIiwicmVhZG9ubHkiLCJpc051bGxhYmxlIiwiaXNPcHRpb25hbCIsInZlcnNpb24iLCJ2ZW5kb3IiLCJ2YWxpZGF0ZSIsIm9wdGlvbiIsImluY29taW5nIiwiZGVmYXVsdFZhbHVlRnVuYyIsImlubmVyVHlwZSIsImRlZmF1bHRWYWx1ZSIsImNhdGNoVmFsdWVGdW5jIiwiY2F0Y2hWYWx1ZSIsIlRoaXMiLCJjdWlkUmVnZXgiLCJjdWlkMlJlZ2V4IiwidWxpZFJlZ2V4IiwidXVpZFJlZ2V4IiwibmFub2lkUmVnZXgiLCJqd3RSZWdleCIsImR1cmF0aW9uUmVnZXgiLCJlbWFpbFJlZ2V4IiwiX2Vtb2ppUmVnZXgiLCJlbW9qaVJlZ2V4IiwiaXB2NFJlZ2V4IiwiaXB2NENpZHJSZWdleCIsImlwdjZSZWdleCIsImlwdjZDaWRyUmVnZXgiLCJiYXNlNjRSZWdleCIsImJhc2U2NHVybFJlZ2V4IiwiZGF0ZVJlZ2V4U291cmNlIiwiZGF0ZVJlZ2V4IiwiUmVnRXhwIiwidGltZVJlZ2V4U291cmNlIiwiYXJncyIsInJlZ2V4IiwicHJlY2lzaW9uIiwidGltZVJlZ2V4Iiwib3B0cyIsImxvY2FsIiwib2Zmc2V0IiwiaXNWYWxpZElQIiwiaXAiLCJ0ZXN0IiwiaXNWYWxpZEpXVCIsImp3dCIsImFsZyIsImhlYWRlciIsInNwbGl0IiwiYmFzZTY0IiwicGFkRW5kIiwiZGVjb2RlZCIsImF0b2IiLCJ0eXAiLCJpc1ZhbGlkQ2lkciIsIlN0cmluZyIsImN0eDIiLCJjaGVja3MiLCJ0b29CaWciLCJ0b29TbWFsbCIsIlVSTCIsImxhc3RJbmRleCIsInRlc3RSZXN1bHQiLCJ0cmltIiwidG9VcHBlckNhc2UiLCJfcmVnZXgiLCJfYWRkQ2hlY2siLCJlbWFpbCIsInVybCIsImVtb2ppIiwidXVpZCIsIm5hbm9pZCIsImN1aWQiLCJjdWlkMiIsInVsaWQiLCJiYXNlNjR1cmwiLCJjaWRyIiwiZGF0ZXRpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJtaW4iLCJtaW5MZW5ndGgiLCJtYXgiLCJtYXhMZW5ndGgiLCJsZW4iLCJub25lbXB0eSIsImlzRGF0ZXRpbWUiLCJjaCIsImlzRGF0ZSIsImlzVGltZSIsImlzRHVyYXRpb24iLCJpc0VtYWlsIiwiaXNVUkwiLCJpc0Vtb2ppIiwiaXNVVUlEIiwiaXNOQU5PSUQiLCJpc0NVSUQiLCJpc0NVSUQyIiwiaXNVTElEIiwiaXNJUCIsImlzQ0lEUiIsImlzQmFzZTY0IiwiaXNCYXNlNjR1cmwiLCJmbG9hdFNhZmVSZW1haW5kZXIiLCJzdGVwIiwidmFsRGVjQ291bnQiLCJzdGVwRGVjQ291bnQiLCJkZWNDb3VudCIsInZhbEludCIsInBhcnNlSW50IiwidG9GaXhlZCIsInN0ZXBJbnQiLCJwb3ciLCJhcmd1bWVudHMiLCJndGUiLCJsdGUiLCJzZXRMaW1pdCIsImd0IiwibHQiLCJpbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibm9ucG9zaXRpdmUiLCJub25uZWdhdGl2ZSIsImZpbml0ZSIsInNhZmUiLCJNSU5fU0FGRV9JTlRFR0VSIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJpc0ludCIsIkJpZ0ludCIsIl9nZXRJbnZhbGlkSW5wdXQiLCJCb29sZWFuIiwiZ2V0VGltZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2FueSIsIl91bmtub3duIiwiZXhhY3RMZW5ndGgiLCJhbGwiLCJyZXN1bHQyIiwiZWxlbWVudCIsImRlZXBQYXJ0aWFsaWZ5IiwibmV3U2hhcGUiLCJzaGFwZSIsImZpZWxkU2NoZW1hIiwidW53cmFwIiwiX2NhY2hlZCIsIm5vbnN0cmljdCIsInBhc3N0aHJvdWdoIiwiYXVnbWVudCIsImV4dGVuZCIsIl9nZXRDYWNoZWQiLCJzaGFwZUtleXMiLCJleHRyYUtleXMiLCJjYXRjaGFsbCIsInVua25vd25LZXlzIiwia2V5VmFsaWRhdG9yIiwic3RyaWN0IiwiX2MiLCJfZCIsInN0cmlwIiwiYXVnbWVudGF0aW9uIiwibWVyZ2UiLCJtZXJnaW5nIiwibWVyZ2VkIiwic2V0S2V5IiwiaW5kZXgiLCJwaWNrIiwibWFzayIsImZvckVhY2giLCJvbWl0IiwiZGVlcFBhcnRpYWwiLCJwYXJ0aWFsIiwicmVxdWlyZWQiLCJuZXdGaWVsZCIsImtleW9mIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJpc3N1ZXMyIiwidHlwZXMiLCJnZXREaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJmcm9tIiwiZGlzY3JpbWluYXRvclZhbHVlcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJpbmRleE9mIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsImtleVNjaGVtYSIsImtleVR5cGUiLCJ2YWx1ZVNjaGVtYSIsInZhbHVlVHlwZSIsInRoaXJkIiwiZW50cmllcyIsImZpbmFsTWFwIiwibWluU2l6ZSIsInNpemUiLCJtYXhTaXplIiwiZmluYWxpemVTZXQiLCJlbGVtZW50czIiLCJwYXJzZWRTZXQiLCJhZGQiLCJlbGVtZW50cyIsInZhbHVlcyIsImltcGxlbWVudCIsIm1ha2VBcmdzSXNzdWUiLCJtYWtlUmV0dXJuc0lzc3VlIiwicmV0dXJucyIsImZuIiwibWUiLCJwYXJzZWRBcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwicGFyc2VkUmV0dXJucyIsInBhcmFtZXRlcnMiLCJyZXR1cm5UeXBlIiwiZnVuYyIsInZhbGlkYXRlZEZ1bmMiLCJzdHJpY3RJbXBsZW1lbnQiLCJnZXR0ZXIiLCJsYXp5U2NoZW1hIiwiZXhwZWN0ZWRWYWx1ZXMiLCJlbnVtVmFsdWVzIiwiVmFsdWVzIiwiRW51bSIsImV4dHJhY3QiLCJuZXdEZWYiLCJleGNsdWRlIiwib3B0IiwiV2Vha01hcCIsIm5hdGl2ZUVudW1WYWx1ZXMiLCJwcm9taXNpZmllZCIsInNvdXJjZVR5cGUiLCJjaGVja0N0eCIsImFyZyIsImZhdGFsIiwicHJvY2Vzc2VkIiwicHJvY2Vzc2VkMiIsImV4ZWN1dGVSZWZpbmVtZW50IiwiYWNjIiwiaW5uZXIiLCJiYXNlIiwiY3JlYXRlV2l0aFByZXByb2Nlc3MiLCJyZW1vdmVEZWZhdWx0IiwibmV3Q3R4IiwicmVtb3ZlQ2F0Y2giLCJTeW1ib2wiLCJoYW5kbGVBc3luYyIsImluUmVzdWx0IiwiaW4iLCJvdXQiLCJjbGVhblBhcmFtcyIsInAiLCJwMiIsIl9wYXJhbXMiLCJyIiwicjIiLCJfYTIiLCJfYjIiLCJfZmF0YWwiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQyIiwiY2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENB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