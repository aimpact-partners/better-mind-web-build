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

// .beyond/uimport/temp/zod.3.24.2.js
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

// .beyond/uimport/temp/zod.3.24.2.js
var zod_3_24_2_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3pvZC4zLjI0LjIuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiXSwibmFtZXMiOlsiem9kXzNfMjRfMl9leHBvcnRzIiwiX19leHBvcnQiLCJCUkFORCIsIkRJUlRZIiwiRU1QVFlfUEFUSCIsIklOVkFMSUQiLCJORVZFUiIsIk9LIiwiUGFyc2VTdGF0dXMiLCJTY2hlbWEiLCJab2RUeXBlIiwiWm9kQW55IiwiWm9kQXJyYXkiLCJab2RCaWdJbnQiLCJab2RCb29sZWFuIiwiWm9kQnJhbmRlZCIsIlpvZENhdGNoIiwiWm9kRGF0ZSIsIlpvZERlZmF1bHQiLCJab2REaXNjcmltaW5hdGVkVW5pb24iLCJab2RFZmZlY3RzIiwiWm9kRW51bSIsIlpvZEVycm9yIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiWm9kRnVuY3Rpb24iLCJab2RJbnRlcnNlY3Rpb24iLCJab2RJc3N1ZUNvZGUiLCJab2RMYXp5IiwiWm9kTGl0ZXJhbCIsIlpvZE1hcCIsIlpvZE5hTiIsIlpvZE5hdGl2ZUVudW0iLCJab2ROZXZlciIsIlpvZE51bGwiLCJab2ROdWxsYWJsZSIsIlpvZE51bWJlciIsIlpvZE9iamVjdCIsIlpvZE9wdGlvbmFsIiwiWm9kUGFyc2VkVHlwZSIsIlpvZFBpcGVsaW5lIiwiWm9kUHJvbWlzZSIsIlpvZFJlYWRvbmx5IiwiWm9kUmVjb3JkIiwiWm9kU2NoZW1hIiwiWm9kU2V0IiwiWm9kU3RyaW5nIiwiWm9kU3ltYm9sIiwiWm9kVHJhbnNmb3JtZXIiLCJab2RUdXBsZSIsIlpvZFVuZGVmaW5lZCIsIlpvZFVuaW9uIiwiWm9kVW5rbm93biIsIlpvZFZvaWQiLCJhZGRJc3N1ZVRvQ29udGV4dCIsImFueSIsImFueVR5cGUiLCJhcnJheSIsImFycmF5VHlwZSIsImJpZ2ludCIsImJpZ0ludFR5cGUiLCJib29sZWFuIiwiYm9vbGVhblR5cGUiLCJjb2VyY2UiLCJjdXN0b20iLCJkYXRlIiwiZGF0ZVR5cGUiLCJkYXRldGltZVJlZ2V4IiwiZGVmYXVsdCIsInpvZF8zXzI0XzJfZGVmYXVsdCIsImRlZmF1bHRFcnJvck1hcCIsImVycm9yTWFwIiwiZGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRlZFVuaW9uVHlwZSIsImVmZmVjdCIsImVmZmVjdHNUeXBlIiwiZW51bSIsImVudW1UeXBlIiwiZnVuY3Rpb24iLCJmdW5jdGlvblR5cGUiLCJnZXRFcnJvck1hcCIsImdldFBhcnNlZFR5cGUiLCJpbnN0YW5jZW9mIiwiaW5zdGFuY2VPZlR5cGUiLCJpbnRlcnNlY3Rpb24iLCJpbnRlcnNlY3Rpb25UeXBlIiwiaXNBYm9ydGVkIiwiaXNBc3luYyIsImlzRGlydHkiLCJpc1ZhbGlkIiwibGF0ZSIsImxhenkiLCJsYXp5VHlwZSIsImxpdGVyYWwiLCJsaXRlcmFsVHlwZSIsIm1ha2VJc3N1ZSIsIm1hcCIsIm1hcFR5cGUiLCJuYW4iLCJuYW5UeXBlIiwibmF0aXZlRW51bSIsIm5hdGl2ZUVudW1UeXBlIiwibmV2ZXIiLCJuZXZlclR5cGUiLCJudWxsIiwibnVsbFR5cGUiLCJudWxsYWJsZSIsIm51bGxhYmxlVHlwZSIsIm51bWJlciIsIm51bWJlclR5cGUiLCJvYmplY3QiLCJvYmplY3RUeXBlIiwib2JqZWN0VXRpbCIsIm9ib29sZWFuIiwib251bWJlciIsIm9wdGlvbmFsIiwib3B0aW9uYWxUeXBlIiwib3N0cmluZyIsInBpcGVsaW5lIiwicGlwZWxpbmVUeXBlIiwicHJlcHJvY2VzcyIsInByZXByb2Nlc3NUeXBlIiwicHJvbWlzZSIsInByb21pc2VUeXBlIiwicXVvdGVsZXNzSnNvbiIsInJlY29yZCIsInJlY29yZFR5cGUiLCJzZXQiLCJzZXRUeXBlIiwic2V0RXJyb3JNYXAiLCJzdHJpY3RPYmplY3QiLCJzdHJpY3RPYmplY3RUeXBlIiwic3RyaW5nIiwic3RyaW5nVHlwZSIsInN5bWJvbCIsInN5bWJvbFR5cGUiLCJ0cmFuc2Zvcm1lciIsInR1cGxlIiwidHVwbGVUeXBlIiwidW5kZWZpbmVkIiwidW5kZWZpbmVkVHlwZSIsInVuaW9uIiwidW5pb25UeXBlIiwidW5rbm93biIsInVua25vd25UeXBlIiwidXRpbCIsInZvaWQiLCJ2b2lkVHlwZSIsInoiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidXRpbDIiLCJhc3NlcnRFcXVhbCIsInZhbCIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwib2JqZWN0VXRpbDIiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiZGF0YSIsInQiLCJpc05hTiIsIkFycmF5IiwiaXNBcnJheSIsInRoZW4iLCJjYXRjaCIsIk1hcCIsIlNldCIsIkRhdGUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJlcnJvcnMiLCJpc3N1ZXMiLCJjb25zdHJ1Y3RvciIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwibmV3IiwidGFyZ2V0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiZm9ybWF0IiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwibGVuZ3RoIiwiY3VyciIsImkiLCJlbCIsInRlcm1pbmFsIiwiYXNzZXJ0IiwiaXNFbXB0eSIsImZsYXR0ZW4iLCJmb3JtRXJyb3JzIiwiY3JlYXRlIiwiX2N0eCIsImludmFsaWRfdHlwZSIsInJlY2VpdmVkIiwiZXhwZWN0ZWQiLCJpbnZhbGlkX2xpdGVyYWwiLCJ1bnJlY29nbml6ZWRfa2V5cyIsImludmFsaWRfdW5pb24iLCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IiLCJvcHRpb25zIiwiaW52YWxpZF9lbnVtX3ZhbHVlIiwiaW52YWxpZF9hcmd1bWVudHMiLCJpbnZhbGlkX3JldHVybl90eXBlIiwiaW52YWxpZF9kYXRlIiwiaW52YWxpZF9zdHJpbmciLCJ2YWxpZGF0aW9uIiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRvb19zbWFsbCIsInR5cGUiLCJleGFjdCIsImluY2x1c2l2ZSIsIm1pbmltdW0iLCJ0b29fYmlnIiwibWF4aW11bSIsImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzIiwibm90X211bHRpcGxlX29mIiwibXVsdGlwbGVPZiIsIm5vdF9maW5pdGUiLCJkZWZhdWx0RXJyb3IiLCJvdmVycmlkZUVycm9yTWFwIiwicGFyYW1zIiwiZXJyb3JNYXBzIiwiaXNzdWVEYXRhIiwiZnVsbFBhdGgiLCJmdWxsSXNzdWUiLCJlcnJvck1lc3NhZ2UiLCJtYXBzIiwibSIsInNsaWNlIiwicmV2ZXJzZSIsImN0eCIsIm92ZXJyaWRlTWFwIiwiY29tbW9uIiwiY29udGV4dHVhbEVycm9yTWFwIiwic2NoZW1hRXJyb3JNYXAiLCJ4IiwiZGlydHkiLCJhYm9ydCIsIm1lcmdlQXJyYXkiLCJzdGF0dXMiLCJyZXN1bHRzIiwiYXJyYXlWYWx1ZSIsInMiLCJtZXJnZU9iamVjdEFzeW5jIiwicGFpcnMiLCJzeW5jUGFpcnMiLCJwYWlyIiwibWVyZ2VPYmplY3RTeW5jIiwiZmluYWxPYmplY3QiLCJhbHdheXNTZXQiLCJmcmVlemUiLCJQcm9taXNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImdldCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJTdXBwcmVzc2VkRXJyb3IiLCJzdXBwcmVzc2VkIiwiZXJyb3JVdGlsIiwiZXJyb3JVdGlsMiIsImVyclRvT2JqIiwiX1pvZEVudW1fY2FjaGUiLCJfWm9kTmF0aXZlRW51bV9jYWNoZSIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9jYWNoZWRQYXRoIiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsIl9lcnJvciIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJlcnJvck1hcDIiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiX2EiLCJfYiIsIl9kZWYiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJzYWZlUGFyc2UiLCJhc3luYyIsIn52YWxpZGF0ZSIsImVyciIsInRvTG93ZXJDYXNlIiwicGFyc2VBc3luYyIsInNhZmVQYXJzZUFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsInJlZmluZSIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnQiLCJyZWZpbmVtZW50RGF0YSIsInNjaGVtYSIsInR5cGVOYW1lIiwic3VwZXJSZWZpbmUiLCJkZWYiLCJzcGEiLCJiaW5kIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwidmVyc2lvbiIsInZlbmRvciIsInZhbGlkYXRlIiwib3B0aW9uIiwiaW5jb21pbmciLCJkZWZhdWx0VmFsdWVGdW5jIiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiY2F0Y2hWYWx1ZUZ1bmMiLCJjYXRjaFZhbHVlIiwiVGhpcyIsImN1aWRSZWdleCIsImN1aWQyUmVnZXgiLCJ1bGlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJuYW5vaWRSZWdleCIsImp3dFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY0Q2lkclJlZ2V4IiwiaXB2NlJlZ2V4IiwiaXB2NkNpZHJSZWdleCIsImJhc2U2NFJlZ2V4IiwiYmFzZTY0dXJsUmVnZXgiLCJkYXRlUmVnZXhTb3VyY2UiLCJkYXRlUmVnZXgiLCJSZWdFeHAiLCJ0aW1lUmVnZXhTb3VyY2UiLCJhcmdzIiwicmVnZXgiLCJwcmVjaXNpb24iLCJ0aW1lUmVnZXgiLCJvcHRzIiwibG9jYWwiLCJvZmZzZXQiLCJpc1ZhbGlkSVAiLCJpcCIsInRlc3QiLCJpc1ZhbGlkSldUIiwiand0IiwiYWxnIiwiaGVhZGVyIiwic3BsaXQiLCJiYXNlNjQiLCJwYWRFbmQiLCJkZWNvZGVkIiwiYXRvYiIsInR5cCIsImlzVmFsaWRDaWRyIiwiU3RyaW5nIiwiY3R4MiIsImNoZWNrcyIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NHVybCIsImNpZHIiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNDSURSIiwiaXNCYXNlNjQiLCJpc0Jhc2U2NHVybCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsInBvdyIsImFyZ3VtZW50cyIsImd0ZSIsImx0ZSIsInNldExpbWl0IiwiZ3QiLCJsdCIsImludCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJub25wb3NpdGl2ZSIsIm5vbm5lZ2F0aXZlIiwiZmluaXRlIiwic2FmZSIsIk1JTl9TQUZFX0lOVEVHRVIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzSW50IiwiQmlnSW50IiwiX2dldEludmFsaWRJbnB1dCIsIkJvb2xlYW4iLCJnZXRUaW1lIiwibWluRGF0ZSIsIm1heERhdGUiLCJfYW55IiwiX3Vua25vd24iLCJleGFjdExlbmd0aCIsImFsbCIsInJlc3VsdDIiLCJlbGVtZW50IiwiZGVlcFBhcnRpYWxpZnkiLCJuZXdTaGFwZSIsInNoYXBlIiwiZmllbGRTY2hlbWEiLCJ1bndyYXAiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJrZXlWYWxpZGF0b3IiLCJzdHJpY3QiLCJfYyIsIl9kIiwic3RyaXAiLCJhdWdtZW50YXRpb24iLCJtZXJnZSIsIm1lcmdpbmciLCJtZXJnZWQiLCJzZXRLZXkiLCJpbmRleCIsInBpY2siLCJtYXNrIiwiZm9yRWFjaCIsIm9taXQiLCJkZWVwUGFydGlhbCIsInBhcnRpYWwiLCJyZXF1aXJlZCIsIm5ld0ZpZWxkIiwia2V5b2YiLCJjcmVhdGVab2RFbnVtIiwic3RyaWN0Q3JlYXRlIiwibGF6eWNyZWF0ZSIsImhhbmRsZVJlc3VsdHMiLCJjaGlsZEN0eCIsImlzc3VlczIiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJkaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvclZhbHVlIiwib3B0aW9uc01hcCIsImZyb20iLCJkaXNjcmltaW5hdG9yVmFsdWVzIiwibWVyZ2VWYWx1ZXMiLCJhIiwiYiIsImFUeXBlIiwiYlR5cGUiLCJ2YWxpZCIsImJLZXlzIiwic2hhcmVkS2V5cyIsImluZGV4T2YiLCJuZXdPYmoiLCJzaGFyZWRWYWx1ZSIsIm5ld0FycmF5IiwiaXRlbUEiLCJpdGVtQiIsImhhbmRsZVBhcnNlZCIsInBhcnNlZExlZnQiLCJwYXJzZWRSaWdodCIsImxlZnQiLCJyaWdodCIsInJlc3QiLCJpdGVtSW5kZXgiLCJzY2hlbWFzIiwia2V5U2NoZW1hIiwia2V5VHlwZSIsInZhbHVlU2NoZW1hIiwidmFsdWVUeXBlIiwidGhpcmQiLCJlbnRyaWVzIiwiZmluYWxNYXAiLCJtaW5TaXplIiwic2l6ZSIsIm1heFNpemUiLCJmaW5hbGl6ZVNldCIsImVsZW1lbnRzMiIsInBhcnNlZFNldCIsImFkZCIsImVsZW1lbnRzIiwidmFsdWVzIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJtZSIsInBhcnNlZEFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJwYXJzZWRSZXR1cm5zIiwicGFyYW1ldGVycyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsInN0cmljdEltcGxlbWVudCIsImdldHRlciIsImxhenlTY2hlbWEiLCJleHBlY3RlZFZhbHVlcyIsImVudW1WYWx1ZXMiLCJWYWx1ZXMiLCJFbnVtIiwiZXh0cmFjdCIsIm5ld0RlZiIsImV4Y2x1ZGUiLCJvcHQiLCJXZWFrTWFwIiwibmF0aXZlRW51bVZhbHVlcyIsInByb21pc2lmaWVkIiwic291cmNlVHlwZSIsImNoZWNrQ3R4IiwiYXJnIiwiZmF0YWwiLCJwcm9jZXNzZWQiLCJwcm9jZXNzZWQyIiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInJlbW92ZURlZmF1bHQiLCJuZXdDdHgiLCJyZW1vdmVDYXRjaCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJpbiIsIm91dCIsImNsZWFuUGFyYW1zIiwicCIsInAyIiwiX3BhcmFtcyIsInIiLCJyMiIsIl9hMiIsIl9iMiIsIl9mYXRhbCIsIlpvZEZpcnN0UGFydHlUeXBlS2luZDIiLCJjbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFBLEVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBakMsT0FBQTtFQUFBa0MsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUEzQixVQUFBO0VBQUE0QixRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBdEMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQXVDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLGtCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLE9BQUEsRUFB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SUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsUUFBUTtFQUMvRDtFQUNBLElBQUlzSyxPQUFBLEVBQVM7SUFDVCxPQUFPLENBQUMsQ0FBQyxLQUFLdkksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsTUFBTTtFQUM3RDtFQUNBLElBQUl1SyxRQUFBLEVBQVU7SUFDVixPQUFPLENBQUMsQ0FBQyxLQUFLeEksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsT0FBTztFQUM5RDtFQUNBLElBQUl3SyxPQUFBLEVBQVM7SUFDVCxPQUFPLENBQUMsQ0FBQyxLQUFLekksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsTUFBTTtFQUM3RDtFQUNBLElBQUl5SyxLQUFBLEVBQU87SUFDUCxPQUFPLENBQUMsQ0FBQyxLQUFLMUksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsSUFBSTtFQUMzRDtFQUNBLElBQUkwSyxPQUFBLEVBQVM7SUFDVCxPQUFPLENBQUMsQ0FBQyxLQUFLM0ksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsTUFBTTtFQUM3RDtFQUNBLElBQUkySyxTQUFBLEVBQVc7SUFDWCxPQUFPLENBQUMsQ0FBQyxLQUFLNUksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsUUFBUTtFQUMvRDtFQUNBLElBQUk0SyxZQUFBLEVBQWM7SUFFZCxPQUFPLENBQUMsQ0FBQyxLQUFLN0ksSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsV0FBVztFQUNsRTtFQUNBLElBQUl1SixVQUFBLEVBQVk7SUFDWixJQUFJRCxHQUFBLEdBQU07SUFDVixXQUFXTyxFQUFBLElBQU0sS0FBSzlILElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUMvQixJQUFJOEIsRUFBQSxDQUFHN0osSUFBQSxLQUFTLE9BQU87UUFDbkIsSUFBSXNKLEdBQUEsS0FBUSxRQUFRTyxFQUFBLENBQUd6UixLQUFBLEdBQVFrUixHQUFBLEVBQzNCQSxHQUFBLEdBQU1PLEVBQUEsQ0FBR3pSLEtBQUE7TUFDakI7SUFDSjtJQUNBLE9BQU9rUixHQUFBO0VBQ1g7RUFDQSxJQUFJRyxVQUFBLEVBQVk7SUFDWixJQUFJRCxHQUFBLEdBQU07SUFDVixXQUFXSyxFQUFBLElBQU0sS0FBSzlILElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUMvQixJQUFJOEIsRUFBQSxDQUFHN0osSUFBQSxLQUFTLE9BQU87UUFDbkIsSUFBSXdKLEdBQUEsS0FBUSxRQUFRSyxFQUFBLENBQUd6UixLQUFBLEdBQVFvUixHQUFBLEVBQzNCQSxHQUFBLEdBQU1LLEVBQUEsQ0FBR3pSLEtBQUE7TUFDakI7SUFDSjtJQUNBLE9BQU9vUixHQUFBO0VBQ1g7QUFDSjtBQUNBdGEsU0FBQSxDQUFVME0sTUFBQSxHQUFVaUMsTUFBQSxJQUFXO0VBQzNCLElBQUlnRSxFQUFBO0VBQ0osT0FBTyxJQUFJM1MsU0FBQSxDQUFVO0lBQ2pCNlksTUFBQSxFQUFRLEVBQUM7SUFDVHJFLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCc0IsU0FBQTtJQUNoQ2lCLE1BQUEsR0FBUzBSLEVBQUEsR0FBS2hFLE1BQUEsS0FBVyxRQUFRQSxNQUFBLEtBQVcsU0FBUyxTQUFTQSxNQUFBLENBQU8xTixNQUFBLE1BQVksUUFBUTBSLEVBQUEsS0FBTyxTQUFTQSxFQUFBLEdBQUs7SUFDOUcsR0FBR1AsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUVBLFNBQVNnTixtQkFBbUIvVSxHQUFBLEVBQUtnVixJQUFBLEVBQU07RUFDbkMsTUFBTUMsV0FBQSxJQUFlalYsR0FBQSxDQUFJdUMsUUFBQSxDQUFTLEVBQUVpUCxLQUFBLENBQU0sR0FBRyxFQUFFLE1BQU0sSUFBSW5NLE1BQUE7RUFDekQsTUFBTTZQLFlBQUEsSUFBZ0JGLElBQUEsQ0FBS3pTLFFBQUEsQ0FBUyxFQUFFaVAsS0FBQSxDQUFNLEdBQUcsRUFBRSxNQUFNLElBQUluTSxNQUFBO0VBQzNELE1BQU04UCxRQUFBLEdBQVdGLFdBQUEsR0FBY0MsWUFBQSxHQUFlRCxXQUFBLEdBQWNDLFlBQUE7RUFDNUQsTUFBTUUsTUFBQSxHQUFTQyxRQUFBLENBQVNyVixHQUFBLENBQUlzVixPQUFBLENBQVFILFFBQVEsRUFBRTFSLE9BQUEsQ0FBUSxLQUFLLEVBQUUsQ0FBQztFQUM5RCxNQUFNOFIsT0FBQSxHQUFVRixRQUFBLENBQVNMLElBQUEsQ0FBS00sT0FBQSxDQUFRSCxRQUFRLEVBQUUxUixPQUFBLENBQVEsS0FBSyxFQUFFLENBQUM7RUFDaEUsT0FBUTJSLE1BQUEsR0FBU0csT0FBQSxHQUFXeFQsSUFBQSxDQUFLeVQsR0FBQSxDQUFJLElBQUlMLFFBQVE7QUFDckQ7QUFDQSxJQUFNemMsU0FBQSxHQUFOLGNBQXdCekIsT0FBQSxDQUFRO0VBQzVCMk0sWUFBQSxFQUFjO0lBQ1YsTUFBTSxHQUFHNlIsU0FBUztJQUNsQixLQUFLakMsR0FBQSxHQUFNLEtBQUtrQyxHQUFBO0lBQ2hCLEtBQUtoQyxHQUFBLEdBQU0sS0FBS2lDLEdBQUE7SUFDaEIsS0FBS1gsSUFBQSxHQUFPLEtBQUtyTixVQUFBO0VBQ3JCO0VBQ0E2RSxPQUFPTCxLQUFBLEVBQU87SUFDVixJQUFJLEtBQUtGLElBQUEsQ0FBSzVSLE1BQUEsRUFBUTtNQUNsQjhSLEtBQUEsQ0FBTXZKLElBQUEsR0FBT2YsTUFBQSxDQUFPc0ssS0FBQSxDQUFNdkosSUFBSTtJQUNsQztJQUNBLE1BQU15SixVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZXhULGFBQUEsQ0FBY3FFLE1BQUEsRUFBUTtNQUNyQyxNQUFNOFUsSUFBQSxHQUFNLEtBQUs1RixlQUFBLENBQWdCRCxLQUFLO01BQ3RDdlMsaUJBQUEsQ0FBa0JvWSxJQUFBLEVBQUs7UUFDbkJoTixJQUFBLEVBQU0vTSxZQUFBLENBQWErTixZQUFBO1FBQ25CRSxRQUFBLEVBQVVyTixhQUFBLENBQWNxRSxNQUFBO1FBQ3hCK0ksUUFBQSxFQUFVK0wsSUFBQSxDQUFJM0Y7TUFDbEIsQ0FBQztNQUNELE9BQU96VixPQUFBO0lBQ1g7SUFDQSxJQUFJNlIsR0FBQSxHQUFNO0lBQ1YsTUFBTVMsTUFBQSxHQUFTLElBQUluUyxXQUFBLENBQVk7SUFDL0IsV0FBV3NXLEtBQUEsSUFBUyxLQUFLcEIsSUFBQSxDQUFLZ0csTUFBQSxFQUFRO01BQ2xDLElBQUk1RSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsT0FBTztRQUN0QixJQUFJLENBQUMzSyxJQUFBLENBQUtxQyxTQUFBLENBQVV1SyxLQUFBLENBQU12SixJQUFJLEdBQUc7VUFDN0I2RixHQUFBLEdBQU0sS0FBSzJELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzFELEdBQUc7VUFDckM3TyxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztZQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYStOLFlBQUE7WUFDbkJFLFFBQUEsRUFBVTtZQUNWRCxRQUFBLEVBQVU7WUFDVnRCLE9BQUEsRUFBUzBJLEtBQUEsQ0FBTTFJO1VBQ25CLENBQUM7VUFDRHVFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxPQUFPO1FBQzNCLE1BQU1pSSxRQUFBLEdBQVc5RSxLQUFBLENBQU1oRyxTQUFBLEdBQ2pCOEUsS0FBQSxDQUFNdkosSUFBQSxHQUFPeUssS0FBQSxDQUFNL0ssS0FBQSxHQUNuQjZKLEtBQUEsQ0FBTXZKLElBQUEsSUFBUXlLLEtBQUEsQ0FBTS9LLEtBQUE7UUFDMUIsSUFBSTZQLFFBQUEsRUFBVTtVQUNWMUosR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFBLEVBQU8xRCxHQUFHO1VBQ3JDN08saUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFpUCxTQUFBO1lBQ25CSSxPQUFBLEVBQVMrRixLQUFBLENBQU0vSyxLQUFBO1lBQ2Y2RSxJQUFBLEVBQU07WUFDTkUsU0FBQSxFQUFXZ0csS0FBQSxDQUFNaEcsU0FBQTtZQUNqQkQsS0FBQSxFQUFPO1lBQ1B6QyxPQUFBLEVBQVMwSSxLQUFBLENBQU0xSTtVQUNuQixDQUFDO1VBQ0R1RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsT0FBTztRQUMzQixNQUFNZ0ksTUFBQSxHQUFTN0UsS0FBQSxDQUFNaEcsU0FBQSxHQUNmOEUsS0FBQSxDQUFNdkosSUFBQSxHQUFPeUssS0FBQSxDQUFNL0ssS0FBQSxHQUNuQjZKLEtBQUEsQ0FBTXZKLElBQUEsSUFBUXlLLEtBQUEsQ0FBTS9LLEtBQUE7UUFDMUIsSUFBSTRQLE1BQUEsRUFBUTtVQUNSekosR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFBLEVBQU8xRCxHQUFHO1VBQ3JDN08saUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFzUCxPQUFBO1lBQ25CQyxPQUFBLEVBQVM2RixLQUFBLENBQU0vSyxLQUFBO1lBQ2Y2RSxJQUFBLEVBQU07WUFDTkUsU0FBQSxFQUFXZ0csS0FBQSxDQUFNaEcsU0FBQTtZQUNqQkQsS0FBQSxFQUFPO1lBQ1B6QyxPQUFBLEVBQVMwSSxLQUFBLENBQU0xSTtVQUNuQixDQUFDO1VBQ0R1RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsY0FBYztRQUNsQyxJQUFJNkssa0JBQUEsQ0FBbUI1SSxLQUFBLENBQU12SixJQUFBLEVBQU15SyxLQUFBLENBQU0vSyxLQUFLLE1BQU0sR0FBRztVQUNuRG1HLEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPMUQsR0FBRztVQUNyQzdPLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFheVAsZUFBQTtZQUNuQkMsVUFBQSxFQUFZMEYsS0FBQSxDQUFNL0ssS0FBQTtZQUNsQnFDLE9BQUEsRUFBUzBJLEtBQUEsQ0FBTTFJO1VBQ25CLENBQUM7VUFDRHVFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxVQUFVO1FBQzlCLElBQUksQ0FBQ3JJLE1BQUEsQ0FBT0MsUUFBQSxDQUFTcUssS0FBQSxDQUFNdkosSUFBSSxHQUFHO1VBQzlCNkYsR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFBLEVBQU8xRCxHQUFHO1VBQ3JDN08saUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWEyUCxVQUFBO1lBQ25CakQsT0FBQSxFQUFTMEksS0FBQSxDQUFNMUk7VUFDbkIsQ0FBQztVQUNEdUUsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixPQUNLO1FBQ0R4SixJQUFBLENBQUtZLFdBQUEsQ0FBWWtOLEtBQUs7TUFDMUI7SUFDSjtJQUNBLE9BQU87TUFBRW5FLE1BQUEsRUFBUUEsTUFBQSxDQUFPNUcsS0FBQTtNQUFPQSxLQUFBLEVBQU82SixLQUFBLENBQU12SjtJQUFLO0VBQ3JEO0VBQ0E4UyxJQUFJcFQsS0FBQSxFQUFPcUMsT0FBQSxFQUFTO0lBQ2hCLE9BQU8sS0FBS2lSLFFBQUEsQ0FBUyxPQUFPdFQsS0FBQSxFQUFPLE1BQU1vSSxTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPLENBQUM7RUFDeEU7RUFDQWtSLEdBQUd2VCxLQUFBLEVBQU9xQyxPQUFBLEVBQVM7SUFDZixPQUFPLEtBQUtpUixRQUFBLENBQVMsT0FBT3RULEtBQUEsRUFBTyxPQUFPb0ksU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTyxDQUFDO0VBQ3pFO0VBQ0FnUixJQUFJclQsS0FBQSxFQUFPcUMsT0FBQSxFQUFTO0lBQ2hCLE9BQU8sS0FBS2lSLFFBQUEsQ0FBUyxPQUFPdFQsS0FBQSxFQUFPLE1BQU1vSSxTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPLENBQUM7RUFDeEU7RUFDQW1SLEdBQUd4VCxLQUFBLEVBQU9xQyxPQUFBLEVBQVM7SUFDZixPQUFPLEtBQUtpUixRQUFBLENBQVMsT0FBT3RULEtBQUEsRUFBTyxPQUFPb0ksU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTyxDQUFDO0VBQ3pFO0VBQ0FpUixTQUFTMUwsSUFBQSxFQUFNNUgsS0FBQSxFQUFPK0UsU0FBQSxFQUFXMUMsT0FBQSxFQUFTO0lBQ3RDLE9BQU8sSUFBSWpNLFNBQUEsQ0FBVTtNQUNqQixHQUFHLEtBQUt1VCxJQUFBO01BQ1JnRyxNQUFBLEVBQVEsQ0FDSixHQUFHLEtBQUtoRyxJQUFBLENBQUtnRyxNQUFBLEVBQ2I7UUFDSS9ILElBQUE7UUFDQTVILEtBQUE7UUFDQStFLFNBQUE7UUFDQTFDLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87TUFDdkM7SUFFUixDQUFDO0VBQ0w7RUFDQStOLFVBQVVyRixLQUFBLEVBQU87SUFDYixPQUFPLElBQUkzVSxTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLdVQsSUFBQTtNQUNSZ0csTUFBQSxFQUFRLENBQUMsR0FBRyxLQUFLaEcsSUFBQSxDQUFLZ0csTUFBQSxFQUFRNUUsS0FBSztJQUN2QyxDQUFDO0VBQ0w7RUFDQTBJLElBQUlwUixPQUFBLEVBQVM7SUFDVCxPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTnZGLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87SUFDdkMsQ0FBQztFQUNMO0VBQ0FxUixTQUFTclIsT0FBQSxFQUFTO0lBQ2QsT0FBTyxLQUFLK04sU0FBQSxDQUFVO01BQ2xCeEksSUFBQSxFQUFNO01BQ041SCxLQUFBLEVBQU87TUFDUCtFLFNBQUEsRUFBVztNQUNYMUMsT0FBQSxFQUFTK0YsU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTztJQUN2QyxDQUFDO0VBQ0w7RUFDQXNSLFNBQVN0UixPQUFBLEVBQVM7SUFDZCxPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUEsRUFBTztNQUNQK0UsU0FBQSxFQUFXO01BQ1gxQyxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUM7RUFDTDtFQUNBdVIsWUFBWXZSLE9BQUEsRUFBUztJQUNqQixPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUEsRUFBTztNQUNQK0UsU0FBQSxFQUFXO01BQ1gxQyxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUM7RUFDTDtFQUNBd1IsWUFBWXhSLE9BQUEsRUFBUztJQUNqQixPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUEsRUFBTztNQUNQK0UsU0FBQSxFQUFXO01BQ1gxQyxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUM7RUFDTDtFQUNBZ0QsV0FBV3JGLEtBQUEsRUFBT3FDLE9BQUEsRUFBUztJQUN2QixPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUE7TUFDQXFDLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87SUFDdkMsQ0FBQztFQUNMO0VBQ0F5UixPQUFPelIsT0FBQSxFQUFTO0lBQ1osT0FBTyxLQUFLK04sU0FBQSxDQUFVO01BQ2xCeEksSUFBQSxFQUFNO01BQ052RixPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUM7RUFDTDtFQUNBMFIsS0FBSzFSLE9BQUEsRUFBUztJQUNWLE9BQU8sS0FBSytOLFNBQUEsQ0FBVTtNQUNsQnhJLElBQUEsRUFBTTtNQUNON0MsU0FBQSxFQUFXO01BQ1gvRSxLQUFBLEVBQU9ULE1BQUEsQ0FBT3lVLGdCQUFBO01BQ2QzUixPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUMsRUFBRStOLFNBQUEsQ0FBVTtNQUNUeEksSUFBQSxFQUFNO01BQ043QyxTQUFBLEVBQVc7TUFDWC9FLEtBQUEsRUFBT1QsTUFBQSxDQUFPMFUsZ0JBQUE7TUFDZDVSLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87SUFDdkMsQ0FBQztFQUNMO0VBQ0EsSUFBSTZSLFNBQUEsRUFBVztJQUNYLElBQUloRCxHQUFBLEdBQU07SUFDVixXQUFXTyxFQUFBLElBQU0sS0FBSzlILElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUMvQixJQUFJOEIsRUFBQSxDQUFHN0osSUFBQSxLQUFTLE9BQU87UUFDbkIsSUFBSXNKLEdBQUEsS0FBUSxRQUFRTyxFQUFBLENBQUd6UixLQUFBLEdBQVFrUixHQUFBLEVBQzNCQSxHQUFBLEdBQU1PLEVBQUEsQ0FBR3pSLEtBQUE7TUFDakI7SUFDSjtJQUNBLE9BQU9rUixHQUFBO0VBQ1g7RUFDQSxJQUFJaUQsU0FBQSxFQUFXO0lBQ1gsSUFBSS9DLEdBQUEsR0FBTTtJQUNWLFdBQVdLLEVBQUEsSUFBTSxLQUFLOUgsSUFBQSxDQUFLZ0csTUFBQSxFQUFRO01BQy9CLElBQUk4QixFQUFBLENBQUc3SixJQUFBLEtBQVMsT0FBTztRQUNuQixJQUFJd0osR0FBQSxLQUFRLFFBQVFLLEVBQUEsQ0FBR3pSLEtBQUEsR0FBUW9SLEdBQUEsRUFDM0JBLEdBQUEsR0FBTUssRUFBQSxDQUFHelIsS0FBQTtNQUNqQjtJQUNKO0lBQ0EsT0FBT29SLEdBQUE7RUFDWDtFQUNBLElBQUlnRCxNQUFBLEVBQVE7SUFDUixPQUFPLENBQUMsQ0FBQyxLQUFLekssSUFBQSxDQUFLZ0csTUFBQSxDQUFPeFEsSUFBQSxDQUFNc1MsRUFBQSxJQUFPQSxFQUFBLENBQUc3SixJQUFBLEtBQVMsU0FDOUM2SixFQUFBLENBQUc3SixJQUFBLEtBQVMsZ0JBQWdCM0ssSUFBQSxDQUFLcUMsU0FBQSxDQUFVbVMsRUFBQSxDQUFHelIsS0FBSyxDQUFFO0VBQzlEO0VBQ0EsSUFBSVIsU0FBQSxFQUFXO0lBQ1gsSUFBSTRSLEdBQUEsR0FBTTtNQUFNRixHQUFBLEdBQU07SUFDdEIsV0FBV08sRUFBQSxJQUFNLEtBQUs5SCxJQUFBLENBQUtnRyxNQUFBLEVBQVE7TUFDL0IsSUFBSThCLEVBQUEsQ0FBRzdKLElBQUEsS0FBUyxZQUNaNkosRUFBQSxDQUFHN0osSUFBQSxLQUFTLFNBQ1o2SixFQUFBLENBQUc3SixJQUFBLEtBQVMsY0FBYztRQUMxQixPQUFPO01BQ1gsV0FDUzZKLEVBQUEsQ0FBRzdKLElBQUEsS0FBUyxPQUFPO1FBQ3hCLElBQUlzSixHQUFBLEtBQVEsUUFBUU8sRUFBQSxDQUFHelIsS0FBQSxHQUFRa1IsR0FBQSxFQUMzQkEsR0FBQSxHQUFNTyxFQUFBLENBQUd6UixLQUFBO01BQ2pCLFdBQ1N5UixFQUFBLENBQUc3SixJQUFBLEtBQVMsT0FBTztRQUN4QixJQUFJd0osR0FBQSxLQUFRLFFBQVFLLEVBQUEsQ0FBR3pSLEtBQUEsR0FBUW9SLEdBQUEsRUFDM0JBLEdBQUEsR0FBTUssRUFBQSxDQUFHelIsS0FBQTtNQUNqQjtJQUNKO0lBQ0EsT0FBT1QsTUFBQSxDQUFPQyxRQUFBLENBQVMwUixHQUFHLEtBQUszUixNQUFBLENBQU9DLFFBQUEsQ0FBUzRSLEdBQUc7RUFDdEQ7QUFDSjtBQUNBaGIsU0FBQSxDQUFVb04sTUFBQSxHQUFVaUMsTUFBQSxJQUFXO0VBQzNCLE9BQU8sSUFBSXJQLFNBQUEsQ0FBVTtJQUNqQnVaLE1BQUEsRUFBUSxFQUFDO0lBQ1RyRSxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQlksU0FBQTtJQUNoQzJCLE1BQUEsR0FBUzBOLE1BQUEsS0FBVyxRQUFRQSxNQUFBLEtBQVcsU0FBUyxTQUFTQSxNQUFBLENBQU8xTixNQUFBLEtBQVc7SUFDM0UsR0FBR21SLG1CQUFBLENBQW9CekQsTUFBTTtFQUNqQyxDQUFDO0FBQ0w7QUFDQSxJQUFNM1EsU0FBQSxHQUFOLGNBQXdCSCxPQUFBLENBQVE7RUFDNUIyTSxZQUFBLEVBQWM7SUFDVixNQUFNLEdBQUc2UixTQUFTO0lBQ2xCLEtBQUtqQyxHQUFBLEdBQU0sS0FBS2tDLEdBQUE7SUFDaEIsS0FBS2hDLEdBQUEsR0FBTSxLQUFLaUMsR0FBQTtFQUNwQjtFQUNBbkosT0FBT0wsS0FBQSxFQUFPO0lBQ1YsSUFBSSxLQUFLRixJQUFBLENBQUs1UixNQUFBLEVBQVE7TUFDbEIsSUFBSTtRQUNBOFIsS0FBQSxDQUFNdkosSUFBQSxHQUFPK1QsTUFBQSxDQUFPeEssS0FBQSxDQUFNdkosSUFBSTtNQUNsQyxTQUNPbUosRUFBQSxFQUFQO1FBQ0ksT0FBTyxLQUFLNkssZ0JBQUEsQ0FBaUJ6SyxLQUFLO01BQ3RDO0lBQ0o7SUFDQSxNQUFNRSxVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZXhULGFBQUEsQ0FBY29CLE1BQUEsRUFBUTtNQUNyQyxPQUFPLEtBQUsyYyxnQkFBQSxDQUFpQnpLLEtBQUs7SUFDdEM7SUFDQSxJQUFJMUQsR0FBQSxHQUFNO0lBQ1YsTUFBTVMsTUFBQSxHQUFTLElBQUluUyxXQUFBLENBQVk7SUFDL0IsV0FBV3NXLEtBQUEsSUFBUyxLQUFLcEIsSUFBQSxDQUFLZ0csTUFBQSxFQUFRO01BQ2xDLElBQUk1RSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsT0FBTztRQUN0QixNQUFNaUksUUFBQSxHQUFXOUUsS0FBQSxDQUFNaEcsU0FBQSxHQUNqQjhFLEtBQUEsQ0FBTXZKLElBQUEsR0FBT3lLLEtBQUEsQ0FBTS9LLEtBQUEsR0FDbkI2SixLQUFBLENBQU12SixJQUFBLElBQVF5SyxLQUFBLENBQU0vSyxLQUFBO1FBQzFCLElBQUk2UCxRQUFBLEVBQVU7VUFDVjFKLEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPMUQsR0FBRztVQUNyQzdPLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhaVAsU0FBQTtZQUNuQkMsSUFBQSxFQUFNO1lBQ05HLE9BQUEsRUFBUytGLEtBQUEsQ0FBTS9LLEtBQUE7WUFDZitFLFNBQUEsRUFBV2dHLEtBQUEsQ0FBTWhHLFNBQUE7WUFDakIxQyxPQUFBLEVBQVMwSSxLQUFBLENBQU0xSTtVQUNuQixDQUFDO1VBQ0R1RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsT0FBTztRQUMzQixNQUFNZ0ksTUFBQSxHQUFTN0UsS0FBQSxDQUFNaEcsU0FBQSxHQUNmOEUsS0FBQSxDQUFNdkosSUFBQSxHQUFPeUssS0FBQSxDQUFNL0ssS0FBQSxHQUNuQjZKLEtBQUEsQ0FBTXZKLElBQUEsSUFBUXlLLEtBQUEsQ0FBTS9LLEtBQUE7UUFDMUIsSUFBSTRQLE1BQUEsRUFBUTtVQUNSekosR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFBLEVBQU8xRCxHQUFHO1VBQ3JDN08saUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFzUCxPQUFBO1lBQ25CSixJQUFBLEVBQU07WUFDTkssT0FBQSxFQUFTNkYsS0FBQSxDQUFNL0ssS0FBQTtZQUNmK0UsU0FBQSxFQUFXZ0csS0FBQSxDQUFNaEcsU0FBQTtZQUNqQjFDLE9BQUEsRUFBUzBJLEtBQUEsQ0FBTTFJO1VBQ25CLENBQUM7VUFDRHVFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxjQUFjO1FBQ2xDLElBQUlpQyxLQUFBLENBQU12SixJQUFBLEdBQU95SyxLQUFBLENBQU0vSyxLQUFBLEtBQVVxVSxNQUFBLENBQU8sQ0FBQyxHQUFHO1VBQ3hDbE8sR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFBLEVBQU8xRCxHQUFHO1VBQ3JDN08saUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWF5UCxlQUFBO1lBQ25CQyxVQUFBLEVBQVkwRixLQUFBLENBQU0vSyxLQUFBO1lBQ2xCcUMsT0FBQSxFQUFTMEksS0FBQSxDQUFNMUk7VUFDbkIsQ0FBQztVQUNEdUUsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixPQUNLO1FBQ0R4SixJQUFBLENBQUtZLFdBQUEsQ0FBWWtOLEtBQUs7TUFDMUI7SUFDSjtJQUNBLE9BQU87TUFBRW5FLE1BQUEsRUFBUUEsTUFBQSxDQUFPNUcsS0FBQTtNQUFPQSxLQUFBLEVBQU82SixLQUFBLENBQU12SjtJQUFLO0VBQ3JEO0VBQ0FnVSxpQkFBaUJ6SyxLQUFBLEVBQU87SUFDcEIsTUFBTTFELEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBSztJQUN0Q3ZTLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO01BQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtNQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjb0IsTUFBQTtNQUN4QmdNLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO0lBQ2xCLENBQUM7SUFDRCxPQUFPelYsT0FBQTtFQUNYO0VBQ0E4ZSxJQUFJcFQsS0FBQSxFQUFPcUMsT0FBQSxFQUFTO0lBQ2hCLE9BQU8sS0FBS2lSLFFBQUEsQ0FBUyxPQUFPdFQsS0FBQSxFQUFPLE1BQU1vSSxTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPLENBQUM7RUFDeEU7RUFDQWtSLEdBQUd2VCxLQUFBLEVBQU9xQyxPQUFBLEVBQVM7SUFDZixPQUFPLEtBQUtpUixRQUFBLENBQVMsT0FBT3RULEtBQUEsRUFBTyxPQUFPb0ksU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTyxDQUFDO0VBQ3pFO0VBQ0FnUixJQUFJclQsS0FBQSxFQUFPcUMsT0FBQSxFQUFTO0lBQ2hCLE9BQU8sS0FBS2lSLFFBQUEsQ0FBUyxPQUFPdFQsS0FBQSxFQUFPLE1BQU1vSSxTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPLENBQUM7RUFDeEU7RUFDQW1SLEdBQUd4VCxLQUFBLEVBQU9xQyxPQUFBLEVBQVM7SUFDZixPQUFPLEtBQUtpUixRQUFBLENBQVMsT0FBT3RULEtBQUEsRUFBTyxPQUFPb0ksU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTyxDQUFDO0VBQ3pFO0VBQ0FpUixTQUFTMUwsSUFBQSxFQUFNNUgsS0FBQSxFQUFPK0UsU0FBQSxFQUFXMUMsT0FBQSxFQUFTO0lBQ3RDLE9BQU8sSUFBSXZOLFNBQUEsQ0FBVTtNQUNqQixHQUFHLEtBQUs2VSxJQUFBO01BQ1JnRyxNQUFBLEVBQVEsQ0FDSixHQUFHLEtBQUtoRyxJQUFBLENBQUtnRyxNQUFBLEVBQ2I7UUFDSS9ILElBQUE7UUFDQTVILEtBQUE7UUFDQStFLFNBQUE7UUFDQTFDLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87TUFDdkM7SUFFUixDQUFDO0VBQ0w7RUFDQStOLFVBQVVyRixLQUFBLEVBQU87SUFDYixPQUFPLElBQUlqVyxTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLNlUsSUFBQTtNQUNSZ0csTUFBQSxFQUFRLENBQUMsR0FBRyxLQUFLaEcsSUFBQSxDQUFLZ0csTUFBQSxFQUFRNUUsS0FBSztJQUN2QyxDQUFDO0VBQ0w7RUFDQTJJLFNBQVNyUixPQUFBLEVBQVM7SUFDZCxPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUEsRUFBT3FVLE1BQUEsQ0FBTyxDQUFDO01BQ2Z0UCxTQUFBLEVBQVc7TUFDWDFDLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87SUFDdkMsQ0FBQztFQUNMO0VBQ0FzUixTQUFTdFIsT0FBQSxFQUFTO0lBQ2QsT0FBTyxLQUFLK04sU0FBQSxDQUFVO01BQ2xCeEksSUFBQSxFQUFNO01BQ041SCxLQUFBLEVBQU9xVSxNQUFBLENBQU8sQ0FBQztNQUNmdFAsU0FBQSxFQUFXO01BQ1gxQyxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUM7RUFDTDtFQUNBdVIsWUFBWXZSLE9BQUEsRUFBUztJQUNqQixPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUEsRUFBT3FVLE1BQUEsQ0FBTyxDQUFDO01BQ2Z0UCxTQUFBLEVBQVc7TUFDWDFDLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87SUFDdkMsQ0FBQztFQUNMO0VBQ0F3UixZQUFZeFIsT0FBQSxFQUFTO0lBQ2pCLE9BQU8sS0FBSytOLFNBQUEsQ0FBVTtNQUNsQnhJLElBQUEsRUFBTTtNQUNONUgsS0FBQSxFQUFPcVUsTUFBQSxDQUFPLENBQUM7TUFDZnRQLFNBQUEsRUFBVztNQUNYMUMsT0FBQSxFQUFTK0YsU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTztJQUN2QyxDQUFDO0VBQ0w7RUFDQWdELFdBQVdyRixLQUFBLEVBQU9xQyxPQUFBLEVBQVM7SUFDdkIsT0FBTyxLQUFLK04sU0FBQSxDQUFVO01BQ2xCeEksSUFBQSxFQUFNO01BQ041SCxLQUFBO01BQ0FxQyxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO0lBQ3ZDLENBQUM7RUFDTDtFQUNBLElBQUk2UixTQUFBLEVBQVc7SUFDWCxJQUFJaEQsR0FBQSxHQUFNO0lBQ1YsV0FBV08sRUFBQSxJQUFNLEtBQUs5SCxJQUFBLENBQUtnRyxNQUFBLEVBQVE7TUFDL0IsSUFBSThCLEVBQUEsQ0FBRzdKLElBQUEsS0FBUyxPQUFPO1FBQ25CLElBQUlzSixHQUFBLEtBQVEsUUFBUU8sRUFBQSxDQUFHelIsS0FBQSxHQUFRa1IsR0FBQSxFQUMzQkEsR0FBQSxHQUFNTyxFQUFBLENBQUd6UixLQUFBO01BQ2pCO0lBQ0o7SUFDQSxPQUFPa1IsR0FBQTtFQUNYO0VBQ0EsSUFBSWlELFNBQUEsRUFBVztJQUNYLElBQUkvQyxHQUFBLEdBQU07SUFDVixXQUFXSyxFQUFBLElBQU0sS0FBSzlILElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUMvQixJQUFJOEIsRUFBQSxDQUFHN0osSUFBQSxLQUFTLE9BQU87UUFDbkIsSUFBSXdKLEdBQUEsS0FBUSxRQUFRSyxFQUFBLENBQUd6UixLQUFBLEdBQVFvUixHQUFBLEVBQzNCQSxHQUFBLEdBQU1LLEVBQUEsQ0FBR3pSLEtBQUE7TUFDakI7SUFDSjtJQUNBLE9BQU9vUixHQUFBO0VBQ1g7QUFDSjtBQUNBdGMsU0FBQSxDQUFVME8sTUFBQSxHQUFVaUMsTUFBQSxJQUFXO0VBQzNCLElBQUlnRSxFQUFBO0VBQ0osT0FBTyxJQUFJM1UsU0FBQSxDQUFVO0lBQ2pCNmEsTUFBQSxFQUFRLEVBQUM7SUFDVHJFLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCVixTQUFBO0lBQ2hDaUQsTUFBQSxHQUFTMFIsRUFBQSxHQUFLaEUsTUFBQSxLQUFXLFFBQVFBLE1BQUEsS0FBVyxTQUFTLFNBQVNBLE1BQUEsQ0FBTzFOLE1BQUEsTUFBWSxRQUFRMFIsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSztJQUM5RyxHQUFHUCxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTTFRLFVBQUEsR0FBTixjQUF5QkosT0FBQSxDQUFRO0VBQzdCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsSUFBSSxLQUFLRixJQUFBLENBQUs1UixNQUFBLEVBQVE7TUFDbEI4UixLQUFBLENBQU12SixJQUFBLEdBQU9pVSxPQUFBLENBQVExSyxLQUFBLENBQU12SixJQUFJO0lBQ25DO0lBQ0EsTUFBTXlKLFVBQUEsR0FBYSxLQUFLSCxRQUFBLENBQVNDLEtBQUs7SUFDdEMsSUFBSUUsVUFBQSxLQUFleFQsYUFBQSxDQUFjc0IsT0FBQSxFQUFTO01BQ3RDLE1BQU1zTyxHQUFBLEdBQU0sS0FBSzJELGVBQUEsQ0FBZ0JELEtBQUs7TUFDdEN2UyxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztRQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYStOLFlBQUE7UUFDbkJFLFFBQUEsRUFBVXJOLGFBQUEsQ0FBY3NCLE9BQUE7UUFDeEI4TCxRQUFBLEVBQVV3QyxHQUFBLENBQUk0RDtNQUNsQixDQUFDO01BQ0QsT0FBT3pWLE9BQUE7SUFDWDtJQUNBLE9BQU9FLEVBQUEsQ0FBR3FWLEtBQUEsQ0FBTXZKLElBQUk7RUFDeEI7QUFDSjtBQUNBdkwsVUFBQSxDQUFXeU8sTUFBQSxHQUFVaUMsTUFBQSxJQUFXO0VBQzVCLE9BQU8sSUFBSTFRLFVBQUEsQ0FBVztJQUNsQnVXLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCVCxVQUFBO0lBQ2hDZ0QsTUFBQSxHQUFTME4sTUFBQSxLQUFXLFFBQVFBLE1BQUEsS0FBVyxTQUFTLFNBQVNBLE1BQUEsQ0FBTzFOLE1BQUEsS0FBVztJQUMzRSxHQUFHbVIsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU12USxPQUFBLEdBQU4sY0FBc0JQLE9BQUEsQ0FBUTtFQUMxQnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLElBQUksS0FBS0YsSUFBQSxDQUFLNVIsTUFBQSxFQUFRO01BQ2xCOFIsS0FBQSxDQUFNdkosSUFBQSxHQUFPLElBQUlTLElBQUEsQ0FBSzhJLEtBQUEsQ0FBTXZKLElBQUk7SUFDcEM7SUFDQSxNQUFNeUosVUFBQSxHQUFhLEtBQUtILFFBQUEsQ0FBU0MsS0FBSztJQUN0QyxJQUFJRSxVQUFBLEtBQWV4VCxhQUFBLENBQWMwQixJQUFBLEVBQU07TUFDbkMsTUFBTXlYLElBQUEsR0FBTSxLQUFLNUYsZUFBQSxDQUFnQkQsS0FBSztNQUN0Q3ZTLGlCQUFBLENBQWtCb1ksSUFBQSxFQUFLO1FBQ25CaE4sSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjMEIsSUFBQTtRQUN4QjBMLFFBQUEsRUFBVStMLElBQUEsQ0FBSTNGO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsSUFBSWtNLEtBQUEsQ0FBTXFKLEtBQUEsQ0FBTXZKLElBQUEsQ0FBS2tVLE9BQUEsQ0FBUSxDQUFDLEdBQUc7TUFDN0IsTUFBTTlFLElBQUEsR0FBTSxLQUFLNUYsZUFBQSxDQUFnQkQsS0FBSztNQUN0Q3ZTLGlCQUFBLENBQWtCb1ksSUFBQSxFQUFLO1FBQ25CaE4sSUFBQSxFQUFNL00sWUFBQSxDQUFhME87TUFDdkIsQ0FBQztNQUNELE9BQU8vUCxPQUFBO0lBQ1g7SUFDQSxNQUFNc1MsTUFBQSxHQUFTLElBQUluUyxXQUFBLENBQVk7SUFDL0IsSUFBSTBSLEdBQUEsR0FBTTtJQUNWLFdBQVc0RSxLQUFBLElBQVMsS0FBS3BCLElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUNsQyxJQUFJNUUsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLE9BQU87UUFDdEIsSUFBSWlDLEtBQUEsQ0FBTXZKLElBQUEsQ0FBS2tVLE9BQUEsQ0FBUSxJQUFJekosS0FBQSxDQUFNL0ssS0FBQSxFQUFPO1VBQ3BDbUcsR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFBLEVBQU8xRCxHQUFHO1VBQ3JDN08saUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFpUCxTQUFBO1lBQ25CdkMsT0FBQSxFQUFTMEksS0FBQSxDQUFNMUksT0FBQTtZQUNmMEMsU0FBQSxFQUFXO1lBQ1hELEtBQUEsRUFBTztZQUNQRSxPQUFBLEVBQVMrRixLQUFBLENBQU0vSyxLQUFBO1lBQ2Y2RSxJQUFBLEVBQU07VUFDVixDQUFDO1VBQ0QrQixNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsT0FBTztRQUMzQixJQUFJaUMsS0FBQSxDQUFNdkosSUFBQSxDQUFLa1UsT0FBQSxDQUFRLElBQUl6SixLQUFBLENBQU0vSyxLQUFBLEVBQU87VUFDcENtRyxHQUFBLEdBQU0sS0FBSzJELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzFELEdBQUc7VUFDckM3TyxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztZQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYXNQLE9BQUE7WUFDbkI1QyxPQUFBLEVBQVMwSSxLQUFBLENBQU0xSSxPQUFBO1lBQ2YwQyxTQUFBLEVBQVc7WUFDWEQsS0FBQSxFQUFPO1lBQ1BJLE9BQUEsRUFBUzZGLEtBQUEsQ0FBTS9LLEtBQUE7WUFDZjZFLElBQUEsRUFBTTtVQUNWLENBQUM7VUFDRCtCLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osT0FDSztRQUNEeEosSUFBQSxDQUFLWSxXQUFBLENBQVlrTixLQUFLO01BQzFCO0lBQ0o7SUFDQSxPQUFPO01BQ0huRSxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVHLEtBQUE7TUFDZkEsS0FBQSxFQUFPLElBQUllLElBQUEsQ0FBSzhJLEtBQUEsQ0FBTXZKLElBQUEsQ0FBS2tVLE9BQUEsQ0FBUSxDQUFDO0lBQ3hDO0VBQ0o7RUFDQXBFLFVBQVVyRixLQUFBLEVBQU87SUFDYixPQUFPLElBQUk3VixPQUFBLENBQVE7TUFDZixHQUFHLEtBQUt5VSxJQUFBO01BQ1JnRyxNQUFBLEVBQVEsQ0FBQyxHQUFHLEtBQUtoRyxJQUFBLENBQUtnRyxNQUFBLEVBQVE1RSxLQUFLO0lBQ3ZDLENBQUM7RUFDTDtFQUNBbUcsSUFBSXVELE9BQUEsRUFBU3BTLE9BQUEsRUFBUztJQUNsQixPQUFPLEtBQUsrTixTQUFBLENBQVU7TUFDbEJ4SSxJQUFBLEVBQU07TUFDTjVILEtBQUEsRUFBT3lVLE9BQUEsQ0FBUUQsT0FBQSxDQUFRO01BQ3ZCblMsT0FBQSxFQUFTK0YsU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTztJQUN2QyxDQUFDO0VBQ0w7RUFDQStPLElBQUlzRCxPQUFBLEVBQVNyUyxPQUFBLEVBQVM7SUFDbEIsT0FBTyxLQUFLK04sU0FBQSxDQUFVO01BQ2xCeEksSUFBQSxFQUFNO01BQ041SCxLQUFBLEVBQU8wVSxPQUFBLENBQVFGLE9BQUEsQ0FBUTtNQUN2Qm5TLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87SUFDdkMsQ0FBQztFQUNMO0VBQ0EsSUFBSW9TLFFBQUEsRUFBVTtJQUNWLElBQUl2RCxHQUFBLEdBQU07SUFDVixXQUFXTyxFQUFBLElBQU0sS0FBSzlILElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUMvQixJQUFJOEIsRUFBQSxDQUFHN0osSUFBQSxLQUFTLE9BQU87UUFDbkIsSUFBSXNKLEdBQUEsS0FBUSxRQUFRTyxFQUFBLENBQUd6UixLQUFBLEdBQVFrUixHQUFBLEVBQzNCQSxHQUFBLEdBQU1PLEVBQUEsQ0FBR3pSLEtBQUE7TUFDakI7SUFDSjtJQUNBLE9BQU9rUixHQUFBLElBQU8sT0FBTyxJQUFJblEsSUFBQSxDQUFLbVEsR0FBRyxJQUFJO0VBQ3pDO0VBQ0EsSUFBSXdELFFBQUEsRUFBVTtJQUNWLElBQUl0RCxHQUFBLEdBQU07SUFDVixXQUFXSyxFQUFBLElBQU0sS0FBSzlILElBQUEsQ0FBS2dHLE1BQUEsRUFBUTtNQUMvQixJQUFJOEIsRUFBQSxDQUFHN0osSUFBQSxLQUFTLE9BQU87UUFDbkIsSUFBSXdKLEdBQUEsS0FBUSxRQUFRSyxFQUFBLENBQUd6UixLQUFBLEdBQVFvUixHQUFBLEVBQzNCQSxHQUFBLEdBQU1LLEVBQUEsQ0FBR3pSLEtBQUE7TUFDakI7SUFDSjtJQUNBLE9BQU9vUixHQUFBLElBQU8sT0FBTyxJQUFJclEsSUFBQSxDQUFLcVEsR0FBRyxJQUFJO0VBQ3pDO0FBQ0o7QUFDQWxjLE9BQUEsQ0FBUXNPLE1BQUEsR0FBVWlDLE1BQUEsSUFBVztFQUN6QixPQUFPLElBQUl2USxPQUFBLENBQVE7SUFDZnlhLE1BQUEsRUFBUSxFQUFDO0lBQ1Q1WCxNQUFBLEdBQVMwTixNQUFBLEtBQVcsUUFBUUEsTUFBQSxLQUFXLFNBQVMsU0FBU0EsTUFBQSxDQUFPMU4sTUFBQSxLQUFXO0lBQzNFdVQsUUFBQSxFQUFVOVYscUJBQUEsQ0FBc0JOLE9BQUE7SUFDaEMsR0FBR2dVLG1CQUFBLENBQW9CekQsTUFBTTtFQUNqQyxDQUFDO0FBQ0w7QUFDQSxJQUFNMU8sU0FBQSxHQUFOLGNBQXdCcEMsT0FBQSxDQUFRO0VBQzVCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTUUsVUFBQSxHQUFhLEtBQUtILFFBQUEsQ0FBU0MsS0FBSztJQUN0QyxJQUFJRSxVQUFBLEtBQWV4VCxhQUFBLENBQWMrRixNQUFBLEVBQVE7TUFDckMsTUFBTTZKLEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBSztNQUN0Q3ZTLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjK0YsTUFBQTtRQUN4QnFILFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsT0FBT0UsRUFBQSxDQUFHcVYsS0FBQSxDQUFNdkosSUFBSTtFQUN4QjtBQUNKO0FBQ0F2SixTQUFBLENBQVV5TSxNQUFBLEdBQVVpQyxNQUFBLElBQVc7RUFDM0IsT0FBTyxJQUFJMU8sU0FBQSxDQUFVO0lBQ2pCdVUsUUFBQSxFQUFVOVYscUJBQUEsQ0FBc0J1QixTQUFBO0lBQ2hDLEdBQUdtUyxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTXZPLFlBQUEsR0FBTixjQUEyQnZDLE9BQUEsQ0FBUTtFQUMvQnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU1FLFVBQUEsR0FBYSxLQUFLSCxRQUFBLENBQVNDLEtBQUs7SUFDdEMsSUFBSUUsVUFBQSxLQUFleFQsYUFBQSxDQUFjb0csU0FBQSxFQUFXO01BQ3hDLE1BQU13SixHQUFBLEdBQU0sS0FBSzJELGVBQUEsQ0FBZ0JELEtBQUs7TUFDdEN2UyxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztRQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYStOLFlBQUE7UUFDbkJFLFFBQUEsRUFBVXJOLGFBQUEsQ0FBY29HLFNBQUE7UUFDeEJnSCxRQUFBLEVBQVV3QyxHQUFBLENBQUk0RDtNQUNsQixDQUFDO01BQ0QsT0FBT3pWLE9BQUE7SUFDWDtJQUNBLE9BQU9FLEVBQUEsQ0FBR3FWLEtBQUEsQ0FBTXZKLElBQUk7RUFDeEI7QUFDSjtBQUNBcEosWUFBQSxDQUFhc00sTUFBQSxHQUFVaUMsTUFBQSxJQUFXO0VBQzlCLE9BQU8sSUFBSXZPLFlBQUEsQ0FBYTtJQUNwQm9VLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCMEIsWUFBQTtJQUNoQyxHQUFHZ1MsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU12UCxPQUFBLEdBQU4sY0FBc0J2QixPQUFBLENBQVE7RUFDMUJ1VixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNRSxVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZXhULGFBQUEsQ0FBY2lFLElBQUEsRUFBTTtNQUNuQyxNQUFNMkwsR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFLO01BQ3RDdlMsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWErTixZQUFBO1FBQ25CRSxRQUFBLEVBQVVyTixhQUFBLENBQWNpRSxJQUFBO1FBQ3hCbUosUUFBQSxFQUFVd0MsR0FBQSxDQUFJNEQ7TUFDbEIsQ0FBQztNQUNELE9BQU96VixPQUFBO0lBQ1g7SUFDQSxPQUFPRSxFQUFBLENBQUdxVixLQUFBLENBQU12SixJQUFJO0VBQ3hCO0FBQ0o7QUFDQXBLLE9BQUEsQ0FBUXNOLE1BQUEsR0FBVWlDLE1BQUEsSUFBVztFQUN6QixPQUFPLElBQUl2UCxPQUFBLENBQVE7SUFDZm9WLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCVSxPQUFBO0lBQ2hDLEdBQUdnVCxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTTdRLE1BQUEsR0FBTixjQUFxQkQsT0FBQSxDQUFRO0VBQ3pCMk0sWUFBQSxFQUFjO0lBQ1YsTUFBTSxHQUFHNlIsU0FBUztJQUVsQixLQUFLd0IsSUFBQSxHQUFPO0VBQ2hCO0VBQ0F6SyxPQUFPTCxLQUFBLEVBQU87SUFDVixPQUFPclYsRUFBQSxDQUFHcVYsS0FBQSxDQUFNdkosSUFBSTtFQUN4QjtBQUNKO0FBQ0ExTCxNQUFBLENBQU80TyxNQUFBLEdBQVVpQyxNQUFBLElBQVc7RUFDeEIsT0FBTyxJQUFJN1EsTUFBQSxDQUFPO0lBQ2QwVyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQlosTUFBQTtJQUNoQyxHQUFHc1UsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU1yTyxVQUFBLEdBQU4sY0FBeUJ6QyxPQUFBLENBQVE7RUFDN0IyTSxZQUFBLEVBQWM7SUFDVixNQUFNLEdBQUc2UixTQUFTO0lBRWxCLEtBQUt5QixRQUFBLEdBQVc7RUFDcEI7RUFDQTFLLE9BQU9MLEtBQUEsRUFBTztJQUNWLE9BQU9yVixFQUFBLENBQUdxVixLQUFBLENBQU12SixJQUFJO0VBQ3hCO0FBQ0o7QUFDQWxKLFVBQUEsQ0FBV29NLE1BQUEsR0FBVWlDLE1BQUEsSUFBVztFQUM1QixPQUFPLElBQUlyTyxVQUFBLENBQVc7SUFDbEJrVSxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQjRCLFVBQUE7SUFDaEMsR0FBRzhSLG1CQUFBLENBQW9CekQsTUFBTTtFQUNqQyxDQUFDO0FBQ0w7QUFDQSxJQUFNeFAsUUFBQSxHQUFOLGNBQXVCdEIsT0FBQSxDQUFRO0VBQzNCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTTFELEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBSztJQUN0Q3ZTLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO01BQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtNQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjK0QsS0FBQTtNQUN4QnFKLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO0lBQ2xCLENBQUM7SUFDRCxPQUFPelYsT0FBQTtFQUNYO0FBQ0o7QUFDQTJCLFFBQUEsQ0FBU3VOLE1BQUEsR0FBVWlDLE1BQUEsSUFBVztFQUMxQixPQUFPLElBQUl4UCxRQUFBLENBQVM7SUFDaEJxVixRQUFBLEVBQVU5VixxQkFBQSxDQUFzQlMsUUFBQTtJQUNoQyxHQUFHaVQsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU1wTyxPQUFBLEdBQU4sY0FBc0IxQyxPQUFBLENBQVE7RUFDMUJ1VixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNRSxVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZXhULGFBQUEsQ0FBY29HLFNBQUEsRUFBVztNQUN4QyxNQUFNd0osR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFLO01BQ3RDdlMsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWErTixZQUFBO1FBQ25CRSxRQUFBLEVBQVVyTixhQUFBLENBQWMyRyxJQUFBO1FBQ3hCeUcsUUFBQSxFQUFVd0MsR0FBQSxDQUFJNEQ7TUFDbEIsQ0FBQztNQUNELE9BQU96VixPQUFBO0lBQ1g7SUFDQSxPQUFPRSxFQUFBLENBQUdxVixLQUFBLENBQU12SixJQUFJO0VBQ3hCO0FBQ0o7QUFDQWpKLE9BQUEsQ0FBUW1NLE1BQUEsR0FBVWlDLE1BQUEsSUFBVztFQUN6QixPQUFPLElBQUlwTyxPQUFBLENBQVE7SUFDZmlVLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCNkIsT0FBQTtJQUNoQyxHQUFHNlIsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU01USxRQUFBLEdBQU4sY0FBdUJGLE9BQUEsQ0FBUTtFQUMzQnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU07TUFBRTFELEdBQUE7TUFBS1M7SUFBTyxJQUFJLEtBQUtvRCxtQkFBQSxDQUFvQkgsS0FBSztJQUN0RCxNQUFNMkIsR0FBQSxHQUFNLEtBQUs3QixJQUFBO0lBQ2pCLElBQUl4RCxHQUFBLENBQUk0RCxVQUFBLEtBQWV4VCxhQUFBLENBQWNrQixLQUFBLEVBQU87TUFDeENILGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFja0IsS0FBQTtRQUN4QmtNLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsSUFBSWtYLEdBQUEsQ0FBSXFKLFdBQUEsS0FBZ0IsTUFBTTtNQUMxQixNQUFNakYsTUFBQSxHQUFTekosR0FBQSxDQUFJN0YsSUFBQSxDQUFLeUMsTUFBQSxHQUFTeUksR0FBQSxDQUFJcUosV0FBQSxDQUFZN1UsS0FBQTtNQUNqRCxNQUFNNlAsUUFBQSxHQUFXMUosR0FBQSxDQUFJN0YsSUFBQSxDQUFLeUMsTUFBQSxHQUFTeUksR0FBQSxDQUFJcUosV0FBQSxDQUFZN1UsS0FBQTtNQUNuRCxJQUFJNFAsTUFBQSxJQUFVQyxRQUFBLEVBQVU7UUFDcEJ2WSxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztVQUNuQnpELElBQUEsRUFBTWtOLE1BQUEsR0FBU2phLFlBQUEsQ0FBYXNQLE9BQUEsR0FBVXRQLFlBQUEsQ0FBYWlQLFNBQUE7VUFDbkRJLE9BQUEsRUFBVTZLLFFBQUEsR0FBV3JFLEdBQUEsQ0FBSXFKLFdBQUEsQ0FBWTdVLEtBQUEsR0FBUTtVQUM3Q2tGLE9BQUEsRUFBVTBLLE1BQUEsR0FBU3BFLEdBQUEsQ0FBSXFKLFdBQUEsQ0FBWTdVLEtBQUEsR0FBUTtVQUMzQzZFLElBQUEsRUFBTTtVQUNORSxTQUFBLEVBQVc7VUFDWEQsS0FBQSxFQUFPO1VBQ1B6QyxPQUFBLEVBQVNtSixHQUFBLENBQUlxSixXQUFBLENBQVl4UztRQUM3QixDQUFDO1FBQ0R1RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtNQUNqQjtJQUNKO0lBQ0EsSUFBSStFLEdBQUEsQ0FBSTJGLFNBQUEsS0FBYyxNQUFNO01BQ3hCLElBQUloTCxHQUFBLENBQUk3RixJQUFBLENBQUt5QyxNQUFBLEdBQVN5SSxHQUFBLENBQUkyRixTQUFBLENBQVVuUixLQUFBLEVBQU87UUFDdkMxSSxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztVQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYWlQLFNBQUE7VUFDbkJJLE9BQUEsRUFBU3dHLEdBQUEsQ0FBSTJGLFNBQUEsQ0FBVW5SLEtBQUE7VUFDdkI2RSxJQUFBLEVBQU07VUFDTkUsU0FBQSxFQUFXO1VBQ1hELEtBQUEsRUFBTztVQUNQekMsT0FBQSxFQUFTbUosR0FBQSxDQUFJMkYsU0FBQSxDQUFVOU87UUFDM0IsQ0FBQztRQUNEdUUsTUFBQSxDQUFPSCxLQUFBLENBQU07TUFDakI7SUFDSjtJQUNBLElBQUkrRSxHQUFBLENBQUk2RixTQUFBLEtBQWMsTUFBTTtNQUN4QixJQUFJbEwsR0FBQSxDQUFJN0YsSUFBQSxDQUFLeUMsTUFBQSxHQUFTeUksR0FBQSxDQUFJNkYsU0FBQSxDQUFVclIsS0FBQSxFQUFPO1FBQ3ZDMUksaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7VUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFzUCxPQUFBO1VBQ25CQyxPQUFBLEVBQVNzRyxHQUFBLENBQUk2RixTQUFBLENBQVVyUixLQUFBO1VBQ3ZCNkUsSUFBQSxFQUFNO1VBQ05FLFNBQUEsRUFBVztVQUNYRCxLQUFBLEVBQU87VUFDUHpDLE9BQUEsRUFBU21KLEdBQUEsQ0FBSTZGLFNBQUEsQ0FBVWhQO1FBQzNCLENBQUM7UUFDRHVFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO01BQ2pCO0lBQ0o7SUFDQSxJQUFJTixHQUFBLENBQUlFLE1BQUEsQ0FBT2tFLEtBQUEsRUFBTztNQUNsQixPQUFPL0MsT0FBQSxDQUFRc04sR0FBQSxDQUFJLENBQUMsR0FBRzNPLEdBQUEsQ0FBSTdGLElBQUksRUFBRXRHLEdBQUEsQ0FBSSxDQUFDbUUsSUFBQSxFQUFNOEUsQ0FBQSxLQUFNO1FBQzlDLE9BQU91SSxHQUFBLENBQUkzRyxJQUFBLENBQUtzRixXQUFBLENBQVksSUFBSTFCLGtCQUFBLENBQW1CdEMsR0FBQSxFQUFLaEksSUFBQSxFQUFNZ0ksR0FBQSxDQUFJckQsSUFBQSxFQUFNRyxDQUFDLENBQUM7TUFDOUUsQ0FBQyxDQUFDLEVBQUV0QyxJQUFBLENBQU1vVSxPQUFBLElBQVc7UUFDakIsT0FBT3RnQixXQUFBLENBQVlrUyxVQUFBLENBQVdDLE1BQUEsRUFBUW1PLE9BQU07TUFDaEQsQ0FBQztJQUNMO0lBQ0EsTUFBTWhNLE1BQUEsR0FBUyxDQUFDLEdBQUc1QyxHQUFBLENBQUk3RixJQUFJLEVBQUV0RyxHQUFBLENBQUksQ0FBQ21FLElBQUEsRUFBTThFLENBQUEsS0FBTTtNQUMxQyxPQUFPdUksR0FBQSxDQUFJM0csSUFBQSxDQUFLb0YsVUFBQSxDQUFXLElBQUl4QixrQkFBQSxDQUFtQnRDLEdBQUEsRUFBS2hJLElBQUEsRUFBTWdJLEdBQUEsQ0FBSXJELElBQUEsRUFBTUcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDRCxPQUFPeE8sV0FBQSxDQUFZa1MsVUFBQSxDQUFXQyxNQUFBLEVBQVFtQyxNQUFNO0VBQ2hEO0VBQ0EsSUFBSWlNLFFBQUEsRUFBVTtJQUNWLE9BQU8sS0FBS3JMLElBQUEsQ0FBSzlFLElBQUE7RUFDckI7RUFDQXFNLElBQUlDLFNBQUEsRUFBVzlPLE9BQUEsRUFBUztJQUNwQixPQUFPLElBQUl4TixRQUFBLENBQVM7TUFDaEIsR0FBRyxLQUFLOFUsSUFBQTtNQUNSd0gsU0FBQSxFQUFXO1FBQUVuUixLQUFBLEVBQU9tUixTQUFBO1FBQVc5TyxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO01BQUU7SUFDeEUsQ0FBQztFQUNMO0VBQ0ErTyxJQUFJQyxTQUFBLEVBQVdoUCxPQUFBLEVBQVM7SUFDcEIsT0FBTyxJQUFJeE4sUUFBQSxDQUFTO01BQ2hCLEdBQUcsS0FBSzhVLElBQUE7TUFDUjBILFNBQUEsRUFBVztRQUFFclIsS0FBQSxFQUFPcVIsU0FBQTtRQUFXaFAsT0FBQSxFQUFTK0YsU0FBQSxDQUFVbkksUUFBQSxDQUFTb0MsT0FBTztNQUFFO0lBQ3hFLENBQUM7RUFDTDtFQUNBVSxPQUFPdU8sR0FBQSxFQUFLalAsT0FBQSxFQUFTO0lBQ2pCLE9BQU8sSUFBSXhOLFFBQUEsQ0FBUztNQUNoQixHQUFHLEtBQUs4VSxJQUFBO01BQ1JrTCxXQUFBLEVBQWE7UUFBRTdVLEtBQUEsRUFBT3NSLEdBQUE7UUFBS2pQLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87TUFBRTtJQUNwRSxDQUFDO0VBQ0w7RUFDQWtQLFNBQVNsUCxPQUFBLEVBQVM7SUFDZCxPQUFPLEtBQUs2TyxHQUFBLENBQUksR0FBRzdPLE9BQU87RUFDOUI7QUFDSjtBQUNBeE4sUUFBQSxDQUFTMk8sTUFBQSxHQUFTLENBQUM2SCxNQUFBLEVBQVE1RixNQUFBLEtBQVc7RUFDbEMsT0FBTyxJQUFJNVEsUUFBQSxDQUFTO0lBQ2hCZ1EsSUFBQSxFQUFNd0csTUFBQTtJQUNOOEYsU0FBQSxFQUFXO0lBQ1hFLFNBQUEsRUFBVztJQUNYd0QsV0FBQSxFQUFhO0lBQ2J2SixRQUFBLEVBQVU5VixxQkFBQSxDQUFzQlgsUUFBQTtJQUNoQyxHQUFHcVUsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLFNBQVN3UCxlQUFlNUosTUFBQSxFQUFRO0VBQzVCLElBQUlBLE1BQUEsWUFBa0JoVixTQUFBLEVBQVc7SUFDN0IsTUFBTTZlLFFBQUEsR0FBVyxDQUFDO0lBQ2xCLFdBQVdwVyxHQUFBLElBQU91TSxNQUFBLENBQU84SixLQUFBLEVBQU87TUFDNUIsTUFBTUMsV0FBQSxHQUFjL0osTUFBQSxDQUFPOEosS0FBQSxDQUFNclcsR0FBQTtNQUNqQ29XLFFBQUEsQ0FBU3BXLEdBQUEsSUFBT3hJLFdBQUEsQ0FBWWtOLE1BQUEsQ0FBT3lSLGNBQUEsQ0FBZUcsV0FBVyxDQUFDO0lBQ2xFO0lBQ0EsT0FBTyxJQUFJL2UsU0FBQSxDQUFVO01BQ2pCLEdBQUdnVixNQUFBLENBQU8xQixJQUFBO01BQ1Z3TCxLQUFBLEVBQU9BLENBQUEsS0FBTUQ7SUFDakIsQ0FBQztFQUNMLFdBQ1M3SixNQUFBLFlBQWtCeFcsUUFBQSxFQUFVO0lBQ2pDLE9BQU8sSUFBSUEsUUFBQSxDQUFTO01BQ2hCLEdBQUd3VyxNQUFBLENBQU8xQixJQUFBO01BQ1Y5RSxJQUFBLEVBQU1vUSxjQUFBLENBQWU1SixNQUFBLENBQU8ySixPQUFPO0lBQ3ZDLENBQUM7RUFDTCxXQUNTM0osTUFBQSxZQUFrQi9VLFdBQUEsRUFBYTtJQUNwQyxPQUFPQSxXQUFBLENBQVlrTixNQUFBLENBQU95UixjQUFBLENBQWU1SixNQUFBLENBQU9nSyxNQUFBLENBQU8sQ0FBQyxDQUFDO0VBQzdELFdBQ1NoSyxNQUFBLFlBQWtCbFYsV0FBQSxFQUFhO0lBQ3BDLE9BQU9BLFdBQUEsQ0FBWXFOLE1BQUEsQ0FBT3lSLGNBQUEsQ0FBZTVKLE1BQUEsQ0FBT2dLLE1BQUEsQ0FBTyxDQUFDLENBQUM7RUFDN0QsV0FDU2hLLE1BQUEsWUFBa0JwVSxRQUFBLEVBQVU7SUFDakMsT0FBT0EsUUFBQSxDQUFTdU0sTUFBQSxDQUFPNkgsTUFBQSxDQUFPcE4sS0FBQSxDQUFNakUsR0FBQSxDQUFLbUUsSUFBQSxJQUFTOFcsY0FBQSxDQUFlOVcsSUFBSSxDQUFDLENBQUM7RUFDM0UsT0FDSztJQUNELE9BQU9rTixNQUFBO0VBQ1g7QUFDSjtBQUNBLElBQU1oVixTQUFBLEdBQU4sY0FBd0IxQixPQUFBLENBQVE7RUFDNUIyTSxZQUFBLEVBQWM7SUFDVixNQUFNLEdBQUc2UixTQUFTO0lBQ2xCLEtBQUttQyxPQUFBLEdBQVU7SUFLZixLQUFLQyxTQUFBLEdBQVksS0FBS0MsV0FBQTtJQXFDdEIsS0FBS0MsT0FBQSxHQUFVLEtBQUtDLE1BQUE7RUFDeEI7RUFDQUMsV0FBQSxFQUFhO0lBQ1QsSUFBSSxLQUFLTCxPQUFBLEtBQVksTUFDakIsT0FBTyxLQUFLQSxPQUFBO0lBQ2hCLE1BQU1ILEtBQUEsR0FBUSxLQUFLeEwsSUFBQSxDQUFLd0wsS0FBQSxDQUFNO0lBQzlCLE1BQU10VyxJQUFBLEdBQU81QixJQUFBLENBQUtxQixVQUFBLENBQVc2VyxLQUFLO0lBQ2xDLE9BQVEsS0FBS0csT0FBQSxHQUFVO01BQUVILEtBQUE7TUFBT3RXO0lBQUs7RUFDekM7RUFDQXFMLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU1FLFVBQUEsR0FBYSxLQUFLSCxRQUFBLENBQVNDLEtBQUs7SUFDdEMsSUFBSUUsVUFBQSxLQUFleFQsYUFBQSxDQUFjdUUsTUFBQSxFQUFRO01BQ3JDLE1BQU00VSxJQUFBLEdBQU0sS0FBSzVGLGVBQUEsQ0FBZ0JELEtBQUs7TUFDdEN2UyxpQkFBQSxDQUFrQm9ZLElBQUEsRUFBSztRQUNuQmhOLElBQUEsRUFBTS9NLFlBQUEsQ0FBYStOLFlBQUE7UUFDbkJFLFFBQUEsRUFBVXJOLGFBQUEsQ0FBY3VFLE1BQUE7UUFDeEI2SSxRQUFBLEVBQVUrTCxJQUFBLENBQUkzRjtNQUNsQixDQUFDO01BQ0QsT0FBT3pWLE9BQUE7SUFDWDtJQUNBLE1BQU07TUFBRXNTLE1BQUE7TUFBUVQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUN0RCxNQUFNO01BQUVzTCxLQUFBO01BQU90VyxJQUFBLEVBQU0rVztJQUFVLElBQUksS0FBS0QsVUFBQSxDQUFXO0lBQ25ELE1BQU1FLFNBQUEsR0FBWSxFQUFDO0lBQ25CLElBQUksRUFBRSxLQUFLbE0sSUFBQSxDQUFLbU0sUUFBQSxZQUFvQjdmLFFBQUEsSUFDaEMsS0FBSzBULElBQUEsQ0FBS29NLFdBQUEsS0FBZ0IsVUFBVTtNQUNwQyxXQUFXalgsR0FBQSxJQUFPcUgsR0FBQSxDQUFJN0YsSUFBQSxFQUFNO1FBQ3hCLElBQUksQ0FBQ3NWLFNBQUEsQ0FBVXBSLFFBQUEsQ0FBUzFGLEdBQUcsR0FBRztVQUMxQitXLFNBQUEsQ0FBVTNXLElBQUEsQ0FBS0osR0FBRztRQUN0QjtNQUNKO0lBQ0o7SUFDQSxNQUFNbUksS0FBQSxHQUFRLEVBQUM7SUFDZixXQUFXbkksR0FBQSxJQUFPOFcsU0FBQSxFQUFXO01BQ3pCLE1BQU1JLFlBQUEsR0FBZWIsS0FBQSxDQUFNclcsR0FBQTtNQUMzQixNQUFNa0IsS0FBQSxHQUFRbUcsR0FBQSxDQUFJN0YsSUFBQSxDQUFLeEIsR0FBQTtNQUN2Qm1JLEtBQUEsQ0FBTS9ILElBQUEsQ0FBSztRQUNQSixHQUFBLEVBQUs7VUFBRThILE1BQUEsRUFBUTtVQUFTNUcsS0FBQSxFQUFPbEI7UUFBSTtRQUNuQ2tCLEtBQUEsRUFBT2dXLFlBQUEsQ0FBYTlMLE1BQUEsQ0FBTyxJQUFJekIsa0JBQUEsQ0FBbUJ0QyxHQUFBLEVBQUtuRyxLQUFBLEVBQU9tRyxHQUFBLENBQUlyRCxJQUFBLEVBQU1oRSxHQUFHLENBQUM7UUFDNUV3SSxTQUFBLEVBQVd4SSxHQUFBLElBQU9xSCxHQUFBLENBQUk3RjtNQUMxQixDQUFDO0lBQ0w7SUFDQSxJQUFJLEtBQUtxSixJQUFBLENBQUttTSxRQUFBLFlBQW9CN2YsUUFBQSxFQUFVO01BQ3hDLE1BQU04ZixXQUFBLEdBQWMsS0FBS3BNLElBQUEsQ0FBS29NLFdBQUE7TUFDOUIsSUFBSUEsV0FBQSxLQUFnQixlQUFlO1FBQy9CLFdBQVdqWCxHQUFBLElBQU8rVyxTQUFBLEVBQVc7VUFDekI1TyxLQUFBLENBQU0vSCxJQUFBLENBQUs7WUFDUEosR0FBQSxFQUFLO2NBQUU4SCxNQUFBLEVBQVE7Y0FBUzVHLEtBQUEsRUFBT2xCO1lBQUk7WUFDbkNrQixLQUFBLEVBQU87Y0FBRTRHLE1BQUEsRUFBUTtjQUFTNUcsS0FBQSxFQUFPbUcsR0FBQSxDQUFJN0YsSUFBQSxDQUFLeEIsR0FBQTtZQUFLO1VBQ25ELENBQUM7UUFDTDtNQUNKLFdBQ1NpWCxXQUFBLEtBQWdCLFVBQVU7UUFDL0IsSUFBSUYsU0FBQSxDQUFVOVMsTUFBQSxHQUFTLEdBQUc7VUFDdEJ6TCxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztZQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYW1PLGlCQUFBO1lBQ25CakYsSUFBQSxFQUFNZ1g7VUFDVixDQUFDO1VBQ0RqUCxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzUCxXQUFBLEtBQWdCLFNBQVMsTUFDN0I7UUFDRCxNQUFNLElBQUloWSxLQUFBLENBQU0sc0RBQXNEO01BQzFFO0lBQ0osT0FDSztNQUVELE1BQU0rWCxRQUFBLEdBQVcsS0FBS25NLElBQUEsQ0FBS21NLFFBQUE7TUFDM0IsV0FBV2hYLEdBQUEsSUFBTytXLFNBQUEsRUFBVztRQUN6QixNQUFNN1YsS0FBQSxHQUFRbUcsR0FBQSxDQUFJN0YsSUFBQSxDQUFLeEIsR0FBQTtRQUN2Qm1JLEtBQUEsQ0FBTS9ILElBQUEsQ0FBSztVQUNQSixHQUFBLEVBQUs7WUFBRThILE1BQUEsRUFBUTtZQUFTNUcsS0FBQSxFQUFPbEI7VUFBSTtVQUNuQ2tCLEtBQUEsRUFBTzhWLFFBQUEsQ0FBUzVMLE1BQUEsQ0FBTyxJQUFJekIsa0JBQUEsQ0FBbUJ0QyxHQUFBLEVBQUtuRyxLQUFBLEVBQU9tRyxHQUFBLENBQUlyRCxJQUFBLEVBQU1oRSxHQUFHLENBQ3ZFO1VBQ0F3SSxTQUFBLEVBQVd4SSxHQUFBLElBQU9xSCxHQUFBLENBQUk3RjtRQUMxQixDQUFDO01BQ0w7SUFDSjtJQUNBLElBQUk2RixHQUFBLENBQUlFLE1BQUEsQ0FBT2tFLEtBQUEsRUFBTztNQUNsQixPQUFPL0MsT0FBQSxDQUFRNEMsT0FBQSxDQUFRLEVBQ2xCekosSUFBQSxDQUFLLFlBQVk7UUFDbEIsTUFBTXVHLFNBQUEsR0FBWSxFQUFDO1FBQ25CLFdBQVdDLElBQUEsSUFBUUYsS0FBQSxFQUFPO1VBQ3RCLE1BQU1uSSxHQUFBLEdBQU0sTUFBTXFJLElBQUEsQ0FBS3JJLEdBQUE7VUFDdkIsTUFBTWtCLEtBQUEsR0FBUSxNQUFNbUgsSUFBQSxDQUFLbkgsS0FBQTtVQUN6QmtILFNBQUEsQ0FBVWhJLElBQUEsQ0FBSztZQUNYSixHQUFBO1lBQ0FrQixLQUFBO1lBQ0FzSCxTQUFBLEVBQVdILElBQUEsQ0FBS0c7VUFDcEIsQ0FBQztRQUNMO1FBQ0EsT0FBT0osU0FBQTtNQUNYLENBQUMsRUFDSXZHLElBQUEsQ0FBTXVHLFNBQUEsSUFBYztRQUNyQixPQUFPelMsV0FBQSxDQUFZMlMsZUFBQSxDQUFnQlIsTUFBQSxFQUFRTSxTQUFTO01BQ3hELENBQUM7SUFDTCxPQUNLO01BQ0QsT0FBT3pTLFdBQUEsQ0FBWTJTLGVBQUEsQ0FBZ0JSLE1BQUEsRUFBUUssS0FBSztJQUNwRDtFQUNKO0VBQ0EsSUFBSWtPLE1BQUEsRUFBUTtJQUNSLE9BQU8sS0FBS3hMLElBQUEsQ0FBS3dMLEtBQUEsQ0FBTTtFQUMzQjtFQUNBYyxPQUFPNVQsT0FBQSxFQUFTO0lBQ1orRixTQUFBLENBQVVFLFFBQUE7SUFDVixPQUFPLElBQUlqUyxTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSb00sV0FBQSxFQUFhO01BQ2IsSUFBSTFULE9BQUEsS0FBWSxTQUNWO1FBQ0U5SixRQUFBLEVBQVVBLENBQUM2SixLQUFBLEVBQU8rRCxHQUFBLEtBQVE7VUFDdEIsSUFBSXNELEVBQUEsRUFBSUMsRUFBQSxFQUFJd00sRUFBQSxFQUFJQyxFQUFBO1VBQ2hCLE1BQU01USxZQUFBLElBQWdCMlEsRUFBQSxJQUFNeE0sRUFBQSxJQUFNRCxFQUFBLEdBQUssS0FBS0UsSUFBQSxFQUFNcFIsUUFBQSxNQUFjLFFBQVFtUixFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUd6SyxJQUFBLENBQUt3SyxFQUFBLEVBQUlySCxLQUFBLEVBQU8rRCxHQUFHLEVBQUU5RCxPQUFBLE1BQWEsUUFBUTZULEVBQUEsS0FBTyxTQUFTQSxFQUFBLEdBQUsvUCxHQUFBLENBQUlaLFlBQUE7VUFDdkssSUFBSW5ELEtBQUEsQ0FBTU0sSUFBQSxLQUFTLHFCQUNmLE9BQU87WUFDSEwsT0FBQSxHQUFVOFQsRUFBQSxHQUFLL04sU0FBQSxDQUFVRSxRQUFBLENBQVNqRyxPQUFPLEVBQUVBLE9BQUEsTUFBYSxRQUFROFQsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSzVRO1VBQ3pGO1VBQ0osT0FBTztZQUNIbEQsT0FBQSxFQUFTa0Q7VUFDYjtRQUNKO01BQ0osSUFDRSxDQUFDO0lBQ1gsQ0FBQztFQUNMO0VBQ0E2USxNQUFBLEVBQVE7SUFDSixPQUFPLElBQUkvZixTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSb00sV0FBQSxFQUFhO0lBQ2pCLENBQUM7RUFDTDtFQUNBUCxZQUFBLEVBQWM7SUFDVixPQUFPLElBQUluZixTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSb00sV0FBQSxFQUFhO0lBQ2pCLENBQUM7RUFDTDtFQWtCQUwsT0FBT1csWUFBQSxFQUFjO0lBQ2pCLE9BQU8sSUFBSWhnQixTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSd0wsS0FBQSxFQUFPQSxDQUFBLE1BQU87UUFDVixHQUFHLEtBQUt4TCxJQUFBLENBQUt3TCxLQUFBLENBQU07UUFDbkIsR0FBR2tCO01BQ1A7SUFDSixDQUFDO0VBQ0w7RUFNQUMsTUFBTUMsT0FBQSxFQUFTO0lBQ1gsTUFBTUMsTUFBQSxHQUFTLElBQUluZ0IsU0FBQSxDQUFVO01BQ3pCMGYsV0FBQSxFQUFhUSxPQUFBLENBQVE1TSxJQUFBLENBQUtvTSxXQUFBO01BQzFCRCxRQUFBLEVBQVVTLE9BQUEsQ0FBUTVNLElBQUEsQ0FBS21NLFFBQUE7TUFDdkJYLEtBQUEsRUFBT0EsQ0FBQSxNQUFPO1FBQ1YsR0FBRyxLQUFLeEwsSUFBQSxDQUFLd0wsS0FBQSxDQUFNO1FBQ25CLEdBQUdvQixPQUFBLENBQVE1TSxJQUFBLENBQUt3TCxLQUFBLENBQU07TUFDMUI7TUFDQTdKLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCYTtJQUNwQyxDQUFDO0lBQ0QsT0FBT21nQixNQUFBO0VBQ1g7RUFvQ0FDLE9BQU8zWCxHQUFBLEVBQUt1TSxNQUFBLEVBQVE7SUFDaEIsT0FBTyxLQUFLb0ssT0FBQSxDQUFRO01BQUUsQ0FBQzNXLEdBQUEsR0FBTXVNO0lBQU8sQ0FBQztFQUN6QztFQXNCQXlLLFNBQVNZLEtBQUEsRUFBTztJQUNaLE9BQU8sSUFBSXJnQixTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSbU0sUUFBQSxFQUFVWTtJQUNkLENBQUM7RUFDTDtFQUNBQyxLQUFLQyxJQUFBLEVBQU07SUFDUCxNQUFNekIsS0FBQSxHQUFRLENBQUM7SUFDZmxZLElBQUEsQ0FBS3FCLFVBQUEsQ0FBV3NZLElBQUksRUFBRUMsT0FBQSxDQUFTL1gsR0FBQSxJQUFRO01BQ25DLElBQUk4WCxJQUFBLENBQUs5WCxHQUFBLEtBQVEsS0FBS3FXLEtBQUEsQ0FBTXJXLEdBQUEsR0FBTTtRQUM5QnFXLEtBQUEsQ0FBTXJXLEdBQUEsSUFBTyxLQUFLcVcsS0FBQSxDQUFNclcsR0FBQTtNQUM1QjtJQUNKLENBQUM7SUFDRCxPQUFPLElBQUl6SSxTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSd0wsS0FBQSxFQUFPQSxDQUFBLEtBQU1BO0lBQ2pCLENBQUM7RUFDTDtFQUNBMkIsS0FBS0YsSUFBQSxFQUFNO0lBQ1AsTUFBTXpCLEtBQUEsR0FBUSxDQUFDO0lBQ2ZsWSxJQUFBLENBQUtxQixVQUFBLENBQVcsS0FBSzZXLEtBQUssRUFBRTBCLE9BQUEsQ0FBUy9YLEdBQUEsSUFBUTtNQUN6QyxJQUFJLENBQUM4WCxJQUFBLENBQUs5WCxHQUFBLEdBQU07UUFDWnFXLEtBQUEsQ0FBTXJXLEdBQUEsSUFBTyxLQUFLcVcsS0FBQSxDQUFNclcsR0FBQTtNQUM1QjtJQUNKLENBQUM7SUFDRCxPQUFPLElBQUl6SSxTQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLc1QsSUFBQTtNQUNSd0wsS0FBQSxFQUFPQSxDQUFBLEtBQU1BO0lBQ2pCLENBQUM7RUFDTDtFQUlBNEIsWUFBQSxFQUFjO0lBQ1YsT0FBTzlCLGNBQUEsQ0FBZSxJQUFJO0VBQzlCO0VBQ0ErQixRQUFRSixJQUFBLEVBQU07SUFDVixNQUFNMUIsUUFBQSxHQUFXLENBQUM7SUFDbEJqWSxJQUFBLENBQUtxQixVQUFBLENBQVcsS0FBSzZXLEtBQUssRUFBRTBCLE9BQUEsQ0FBUy9YLEdBQUEsSUFBUTtNQUN6QyxNQUFNc1csV0FBQSxHQUFjLEtBQUtELEtBQUEsQ0FBTXJXLEdBQUE7TUFDL0IsSUFBSThYLElBQUEsSUFBUSxDQUFDQSxJQUFBLENBQUs5WCxHQUFBLEdBQU07UUFDcEJvVyxRQUFBLENBQVNwVyxHQUFBLElBQU9zVyxXQUFBO01BQ3BCLE9BQ0s7UUFDREYsUUFBQSxDQUFTcFcsR0FBQSxJQUFPc1csV0FBQSxDQUFZamEsUUFBQSxDQUFTO01BQ3pDO0lBQ0osQ0FBQztJQUNELE9BQU8sSUFBSTlFLFNBQUEsQ0FBVTtNQUNqQixHQUFHLEtBQUtzVCxJQUFBO01BQ1J3TCxLQUFBLEVBQU9BLENBQUEsS0FBTUQ7SUFDakIsQ0FBQztFQUNMO0VBQ0ErQixTQUFTTCxJQUFBLEVBQU07SUFDWCxNQUFNMUIsUUFBQSxHQUFXLENBQUM7SUFDbEJqWSxJQUFBLENBQUtxQixVQUFBLENBQVcsS0FBSzZXLEtBQUssRUFBRTBCLE9BQUEsQ0FBUy9YLEdBQUEsSUFBUTtNQUN6QyxJQUFJOFgsSUFBQSxJQUFRLENBQUNBLElBQUEsQ0FBSzlYLEdBQUEsR0FBTTtRQUNwQm9XLFFBQUEsQ0FBU3BXLEdBQUEsSUFBTyxLQUFLcVcsS0FBQSxDQUFNclcsR0FBQTtNQUMvQixPQUNLO1FBQ0QsTUFBTXNXLFdBQUEsR0FBYyxLQUFLRCxLQUFBLENBQU1yVyxHQUFBO1FBQy9CLElBQUlvWSxRQUFBLEdBQVc5QixXQUFBO1FBQ2YsT0FBTzhCLFFBQUEsWUFBb0I1Z0IsV0FBQSxFQUFhO1VBQ3BDNGdCLFFBQUEsR0FBV0EsUUFBQSxDQUFTdk4sSUFBQSxDQUFLZ0QsU0FBQTtRQUM3QjtRQUNBdUksUUFBQSxDQUFTcFcsR0FBQSxJQUFPb1ksUUFBQTtNQUNwQjtJQUNKLENBQUM7SUFDRCxPQUFPLElBQUk3Z0IsU0FBQSxDQUFVO01BQ2pCLEdBQUcsS0FBS3NULElBQUE7TUFDUndMLEtBQUEsRUFBT0EsQ0FBQSxLQUFNRDtJQUNqQixDQUFDO0VBQ0w7RUFDQWlDLE1BQUEsRUFBUTtJQUNKLE9BQU9DLGFBQUEsQ0FBY25hLElBQUEsQ0FBS3FCLFVBQUEsQ0FBVyxLQUFLNlcsS0FBSyxDQUFDO0VBQ3BEO0FBQ0o7QUFDQTllLFNBQUEsQ0FBVW1OLE1BQUEsR0FBUyxDQUFDMlIsS0FBQSxFQUFPMVAsTUFBQSxLQUFXO0VBQ2xDLE9BQU8sSUFBSXBQLFNBQUEsQ0FBVTtJQUNqQjhlLEtBQUEsRUFBT0EsQ0FBQSxLQUFNQSxLQUFBO0lBQ2JZLFdBQUEsRUFBYTtJQUNiRCxRQUFBLEVBQVU3ZixRQUFBLENBQVN1TixNQUFBLENBQU87SUFDMUI4SCxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQmEsU0FBQTtJQUNoQyxHQUFHNlMsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBcFAsU0FBQSxDQUFVZ2hCLFlBQUEsR0FBZSxDQUFDbEMsS0FBQSxFQUFPMVAsTUFBQSxLQUFXO0VBQ3hDLE9BQU8sSUFBSXBQLFNBQUEsQ0FBVTtJQUNqQjhlLEtBQUEsRUFBT0EsQ0FBQSxLQUFNQSxLQUFBO0lBQ2JZLFdBQUEsRUFBYTtJQUNiRCxRQUFBLEVBQVU3ZixRQUFBLENBQVN1TixNQUFBLENBQU87SUFDMUI4SCxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQmEsU0FBQTtJQUNoQyxHQUFHNlMsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBcFAsU0FBQSxDQUFVaWhCLFVBQUEsR0FBYSxDQUFDbkMsS0FBQSxFQUFPMVAsTUFBQSxLQUFXO0VBQ3RDLE9BQU8sSUFBSXBQLFNBQUEsQ0FBVTtJQUNqQjhlLEtBQUE7SUFDQVksV0FBQSxFQUFhO0lBQ2JELFFBQUEsRUFBVTdmLFFBQUEsQ0FBU3VOLE1BQUEsQ0FBTztJQUMxQjhILFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCYSxTQUFBO0lBQ2hDLEdBQUc2UyxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTXRPLFFBQUEsR0FBTixjQUF1QnhDLE9BQUEsQ0FBUTtFQUMzQnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU07TUFBRTFEO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDOUMsTUFBTTVGLE9BQUEsR0FBVSxLQUFLMEYsSUFBQSxDQUFLMUYsT0FBQTtJQUMxQixTQUFTc1QsY0FBYzFRLE9BQUEsRUFBUztNQUU1QixXQUFXa0MsTUFBQSxJQUFVbEMsT0FBQSxFQUFTO1FBQzFCLElBQUlrQyxNQUFBLENBQU9BLE1BQUEsQ0FBT25DLE1BQUEsS0FBVyxTQUFTO1VBQ2xDLE9BQU9tQyxNQUFBLENBQU9BLE1BQUE7UUFDbEI7TUFDSjtNQUNBLFdBQVdBLE1BQUEsSUFBVWxDLE9BQUEsRUFBUztRQUMxQixJQUFJa0MsTUFBQSxDQUFPQSxNQUFBLENBQU9uQyxNQUFBLEtBQVcsU0FBUztVQUVsQ1QsR0FBQSxDQUFJRSxNQUFBLENBQU9oRixNQUFBLENBQU9uQyxJQUFBLENBQUssR0FBRzZKLE1BQUEsQ0FBTzVDLEdBQUEsQ0FBSUUsTUFBQSxDQUFPaEYsTUFBTTtVQUNsRCxPQUFPMEgsTUFBQSxDQUFPQSxNQUFBO1FBQ2xCO01BQ0o7TUFFQSxNQUFNcEcsV0FBQSxHQUFja0UsT0FBQSxDQUFRN00sR0FBQSxDQUFLK08sTUFBQSxJQUFXLElBQUl4VCxRQUFBLENBQVN3VCxNQUFBLENBQU81QyxHQUFBLENBQUlFLE1BQUEsQ0FBT2hGLE1BQU0sQ0FBQztNQUNsRi9KLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhb08sYUFBQTtRQUNuQnBCO01BQ0osQ0FBQztNQUNELE9BQU9yTyxPQUFBO0lBQ1g7SUFDQSxJQUFJNlIsR0FBQSxDQUFJRSxNQUFBLENBQU9rRSxLQUFBLEVBQU87TUFDbEIsT0FBTy9DLE9BQUEsQ0FBUXNOLEdBQUEsQ0FBSTdRLE9BQUEsQ0FBUWpLLEdBQUEsQ0FBSSxNQUFPd1MsTUFBQSxJQUFXO1FBQzdDLE1BQU1nTCxRQUFBLEdBQVc7VUFDYixHQUFHclIsR0FBQTtVQUNIRSxNQUFBLEVBQVE7WUFDSixHQUFHRixHQUFBLENBQUlFLE1BQUE7WUFDUGhGLE1BQUEsRUFBUTtVQUNaO1VBQ0FxSCxNQUFBLEVBQVE7UUFDWjtRQUNBLE9BQU87VUFDSEssTUFBQSxFQUFRLE1BQU15RCxNQUFBLENBQU9yQyxXQUFBLENBQVk7WUFDN0I3SixJQUFBLEVBQU02RixHQUFBLENBQUk3RixJQUFBO1lBQ1Z3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1lBQ1Y0RixNQUFBLEVBQVE4TztVQUNaLENBQUM7VUFDRHJSLEdBQUEsRUFBS3FSO1FBQ1Q7TUFDSixDQUFDLENBQUMsRUFBRTdXLElBQUEsQ0FBSzRXLGFBQWE7SUFDMUIsT0FDSztNQUNELElBQUk5USxLQUFBLEdBQVE7TUFDWixNQUFNcEYsTUFBQSxHQUFTLEVBQUM7TUFDaEIsV0FBV21MLE1BQUEsSUFBVXZJLE9BQUEsRUFBUztRQUMxQixNQUFNdVQsUUFBQSxHQUFXO1VBQ2IsR0FBR3JSLEdBQUE7VUFDSEUsTUFBQSxFQUFRO1lBQ0osR0FBR0YsR0FBQSxDQUFJRSxNQUFBO1lBQ1BoRixNQUFBLEVBQVE7VUFDWjtVQUNBcUgsTUFBQSxFQUFRO1FBQ1o7UUFDQSxNQUFNSyxNQUFBLEdBQVN5RCxNQUFBLENBQU92QyxVQUFBLENBQVc7VUFDN0IzSixJQUFBLEVBQU02RixHQUFBLENBQUk3RixJQUFBO1VBQ1Z3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1VBQ1Y0RixNQUFBLEVBQVE4TztRQUNaLENBQUM7UUFDRCxJQUFJek8sTUFBQSxDQUFPbkMsTUFBQSxLQUFXLFNBQVM7VUFDM0IsT0FBT21DLE1BQUE7UUFDWCxXQUNTQSxNQUFBLENBQU9uQyxNQUFBLEtBQVcsV0FBVyxDQUFDSCxLQUFBLEVBQU87VUFDMUNBLEtBQUEsR0FBUTtZQUFFc0MsTUFBQTtZQUFRNUMsR0FBQSxFQUFLcVI7VUFBUztRQUNwQztRQUNBLElBQUlBLFFBQUEsQ0FBU25SLE1BQUEsQ0FBT2hGLE1BQUEsQ0FBTzBCLE1BQUEsRUFBUTtVQUMvQjFCLE1BQUEsQ0FBT25DLElBQUEsQ0FBS3NZLFFBQUEsQ0FBU25SLE1BQUEsQ0FBT2hGLE1BQU07UUFDdEM7TUFDSjtNQUNBLElBQUlvRixLQUFBLEVBQU87UUFDUE4sR0FBQSxDQUFJRSxNQUFBLENBQU9oRixNQUFBLENBQU9uQyxJQUFBLENBQUssR0FBR3VILEtBQUEsQ0FBTU4sR0FBQSxDQUFJRSxNQUFBLENBQU9oRixNQUFNO1FBQ2pELE9BQU9vRixLQUFBLENBQU1zQyxNQUFBO01BQ2pCO01BQ0EsTUFBTXBHLFdBQUEsR0FBY3RCLE1BQUEsQ0FBT3JILEdBQUEsQ0FBS3lkLE9BQUEsSUFBVyxJQUFJbGlCLFFBQUEsQ0FBU2tpQixPQUFNLENBQUM7TUFDL0RuZ0IsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFvTyxhQUFBO1FBQ25CcEI7TUFDSixDQUFDO01BQ0QsT0FBT3JPLE9BQUE7SUFDWDtFQUNKO0VBQ0EsSUFBSTJQLFFBQUEsRUFBVTtJQUNWLE9BQU8sS0FBSzBGLElBQUEsQ0FBSzFGLE9BQUE7RUFDckI7QUFDSjtBQUNBOU0sUUFBQSxDQUFTcU0sTUFBQSxHQUFTLENBQUNrVSxLQUFBLEVBQU9qUyxNQUFBLEtBQVc7RUFDakMsT0FBTyxJQUFJdE8sUUFBQSxDQUFTO0lBQ2hCOE0sT0FBQSxFQUFTeVQsS0FBQTtJQUNUcE0sUUFBQSxFQUFVOVYscUJBQUEsQ0FBc0IyQixRQUFBO0lBQ2hDLEdBQUcrUixtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBUUEsSUFBTWtTLGdCQUFBLEdBQW9COVMsSUFBQSxJQUFTO0VBQy9CLElBQUlBLElBQUEsWUFBZ0JqUCxPQUFBLEVBQVM7SUFDekIsT0FBTytoQixnQkFBQSxDQUFpQjlTLElBQUEsQ0FBS3dHLE1BQU07RUFDdkMsV0FDU3hHLElBQUEsWUFBZ0J4UCxVQUFBLEVBQVk7SUFDakMsT0FBT3NpQixnQkFBQSxDQUFpQjlTLElBQUEsQ0FBSzhILFNBQUEsQ0FBVSxDQUFDO0VBQzVDLFdBQ1M5SCxJQUFBLFlBQWdCaFAsVUFBQSxFQUFZO0lBQ2pDLE9BQU8sQ0FBQ2dQLElBQUEsQ0FBSzdFLEtBQUs7RUFDdEIsV0FDUzZFLElBQUEsWUFBZ0J2UCxPQUFBLEVBQVM7SUFDOUIsT0FBT3VQLElBQUEsQ0FBS1osT0FBQTtFQUNoQixXQUNTWSxJQUFBLFlBQWdCN08sYUFBQSxFQUFlO0lBRXBDLE9BQU9pSCxJQUFBLENBQUt5QixZQUFBLENBQWFtRyxJQUFBLENBQUtqTSxJQUFJO0VBQ3RDLFdBQ1NpTSxJQUFBLFlBQWdCMVAsVUFBQSxFQUFZO0lBQ2pDLE9BQU93aUIsZ0JBQUEsQ0FBaUI5UyxJQUFBLENBQUs4RSxJQUFBLENBQUtnRCxTQUFTO0VBQy9DLFdBQ1M5SCxJQUFBLFlBQWdCM04sWUFBQSxFQUFjO0lBQ25DLE9BQU8sQ0FBQyxNQUFTO0VBQ3JCLFdBQ1MyTixJQUFBLFlBQWdCM08sT0FBQSxFQUFTO0lBQzlCLE9BQU8sQ0FBQyxJQUFJO0VBQ2hCLFdBQ1MyTyxJQUFBLFlBQWdCdk8sV0FBQSxFQUFhO0lBQ2xDLE9BQU8sQ0FBQyxRQUFXLEdBQUdxaEIsZ0JBQUEsQ0FBaUI5UyxJQUFBLENBQUt3USxNQUFBLENBQU8sQ0FBQyxDQUFDO0VBQ3pELFdBQ1N4USxJQUFBLFlBQWdCMU8sV0FBQSxFQUFhO0lBQ2xDLE9BQU8sQ0FBQyxNQUFNLEdBQUd3aEIsZ0JBQUEsQ0FBaUI5UyxJQUFBLENBQUt3USxNQUFBLENBQU8sQ0FBQyxDQUFDO0VBQ3BELFdBQ1N4USxJQUFBLFlBQWdCN1AsVUFBQSxFQUFZO0lBQ2pDLE9BQU8yaUIsZ0JBQUEsQ0FBaUI5UyxJQUFBLENBQUt3USxNQUFBLENBQU8sQ0FBQztFQUN6QyxXQUNTeFEsSUFBQSxZQUFnQm5PLFdBQUEsRUFBYTtJQUNsQyxPQUFPaWhCLGdCQUFBLENBQWlCOVMsSUFBQSxDQUFLd1EsTUFBQSxDQUFPLENBQUM7RUFDekMsV0FDU3hRLElBQUEsWUFBZ0I1UCxRQUFBLEVBQVU7SUFDL0IsT0FBTzBpQixnQkFBQSxDQUFpQjlTLElBQUEsQ0FBSzhFLElBQUEsQ0FBS2dELFNBQVM7RUFDL0MsT0FDSztJQUNELE9BQU8sRUFBQztFQUNaO0FBQ0o7QUFDQSxJQUFNdlgscUJBQUEsR0FBTixjQUFvQ1QsT0FBQSxDQUFRO0VBQ3hDdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTTtNQUFFMUQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUM5QyxJQUFJMUQsR0FBQSxDQUFJNEQsVUFBQSxLQUFleFQsYUFBQSxDQUFjdUUsTUFBQSxFQUFRO01BQ3pDeEQsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWErTixZQUFBO1FBQ25CRSxRQUFBLEVBQVVyTixhQUFBLENBQWN1RSxNQUFBO1FBQ3hCNkksUUFBQSxFQUFVd0MsR0FBQSxDQUFJNEQ7TUFDbEIsQ0FBQztNQUNELE9BQU96VixPQUFBO0lBQ1g7SUFDQSxNQUFNc2pCLGFBQUEsR0FBZ0IsS0FBS0EsYUFBQTtJQUMzQixNQUFNQyxrQkFBQSxHQUFxQjFSLEdBQUEsQ0FBSTdGLElBQUEsQ0FBS3NYLGFBQUE7SUFDcEMsTUFBTXBMLE1BQUEsR0FBUyxLQUFLc0wsVUFBQSxDQUFXOVAsR0FBQSxDQUFJNlAsa0JBQWtCO0lBQ3JELElBQUksQ0FBQ3JMLE1BQUEsRUFBUTtNQUNUbFYsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWFxTywyQkFBQTtRQUNuQkMsT0FBQSxFQUFTeEQsS0FBQSxDQUFNc1gsSUFBQSxDQUFLLEtBQUtELFVBQUEsQ0FBV2paLElBQUEsQ0FBSyxDQUFDO1FBQzFDaUUsSUFBQSxFQUFNLENBQUM4VSxhQUFhO01BQ3hCLENBQUM7TUFDRCxPQUFPdGpCLE9BQUE7SUFDWDtJQUNBLElBQUk2UixHQUFBLENBQUlFLE1BQUEsQ0FBT2tFLEtBQUEsRUFBTztNQUNsQixPQUFPaUMsTUFBQSxDQUFPckMsV0FBQSxDQUFZO1FBQ3RCN0osSUFBQSxFQUFNNkYsR0FBQSxDQUFJN0YsSUFBQTtRQUNWd0MsSUFBQSxFQUFNcUQsR0FBQSxDQUFJckQsSUFBQTtRQUNWNEYsTUFBQSxFQUFRdkM7TUFDWixDQUFDO0lBQ0wsT0FDSztNQUNELE9BQU9xRyxNQUFBLENBQU92QyxVQUFBLENBQVc7UUFDckIzSixJQUFBLEVBQU02RixHQUFBLENBQUk3RixJQUFBO1FBQ1Z3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1FBQ1Y0RixNQUFBLEVBQVF2QztNQUNaLENBQUM7SUFDTDtFQUNKO0VBQ0EsSUFBSXlSLGNBQUEsRUFBZ0I7SUFDaEIsT0FBTyxLQUFLak8sSUFBQSxDQUFLaU8sYUFBQTtFQUNyQjtFQUNBLElBQUkzVCxRQUFBLEVBQVU7SUFDVixPQUFPLEtBQUswRixJQUFBLENBQUsxRixPQUFBO0VBQ3JCO0VBQ0EsSUFBSTZULFdBQUEsRUFBYTtJQUNiLE9BQU8sS0FBS25PLElBQUEsQ0FBS21PLFVBQUE7RUFDckI7RUFTQSxPQUFPdFUsT0FBT29VLGFBQUEsRUFBZTNULE9BQUEsRUFBU3dCLE1BQUEsRUFBUTtJQUUxQyxNQUFNcVMsVUFBQSxHQUFhLG1CQUFJalgsR0FBQSxDQUFJO0lBRTNCLFdBQVdnRSxJQUFBLElBQVFaLE9BQUEsRUFBUztNQUN4QixNQUFNK1QsbUJBQUEsR0FBc0JMLGdCQUFBLENBQWlCOVMsSUFBQSxDQUFLc1EsS0FBQSxDQUFNeUMsYUFBQSxDQUFjO01BQ3RFLElBQUksQ0FBQ0ksbUJBQUEsQ0FBb0JqVixNQUFBLEVBQVE7UUFDN0IsTUFBTSxJQUFJaEYsS0FBQSxDQUFNLG1DQUFtQzZaLGFBQUEsbURBQWdFO01BQ3ZIO01BQ0EsV0FBVzVYLEtBQUEsSUFBU2dZLG1CQUFBLEVBQXFCO1FBQ3JDLElBQUlGLFVBQUEsQ0FBVy9QLEdBQUEsQ0FBSS9ILEtBQUssR0FBRztVQUN2QixNQUFNLElBQUlqQyxLQUFBLENBQU0sMEJBQTBCMFIsTUFBQSxDQUFPbUksYUFBYSx5QkFBeUJuSSxNQUFBLENBQU96UCxLQUFLLEdBQUc7UUFDMUc7UUFDQThYLFVBQUEsQ0FBVy9iLEdBQUEsQ0FBSWlFLEtBQUEsRUFBTzZFLElBQUk7TUFDOUI7SUFDSjtJQUNBLE9BQU8sSUFBSXpQLHFCQUFBLENBQXNCO01BQzdCa1csUUFBQSxFQUFVOVYscUJBQUEsQ0FBc0JKLHFCQUFBO01BQ2hDd2lCLGFBQUE7TUFDQTNULE9BQUE7TUFDQTZULFVBQUE7TUFDQSxHQUFHNU8sbUJBQUEsQ0FBb0J6RCxNQUFNO0lBQ2pDLENBQUM7RUFDTDtBQUNKO0FBQ0EsU0FBU3dTLFlBQVlDLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQ3ZCLE1BQU1DLEtBQUEsR0FBUW5mLGFBQUEsQ0FBY2lmLENBQUM7RUFDN0IsTUFBTUcsS0FBQSxHQUFRcGYsYUFBQSxDQUFja2YsQ0FBQztFQUM3QixJQUFJRCxDQUFBLEtBQU1DLENBQUEsRUFBRztJQUNULE9BQU87TUFBRUcsS0FBQSxFQUFPO01BQU1oWSxJQUFBLEVBQU00WDtJQUFFO0VBQ2xDLFdBQ1NFLEtBQUEsS0FBVTdoQixhQUFBLENBQWN1RSxNQUFBLElBQVV1ZCxLQUFBLEtBQVU5aEIsYUFBQSxDQUFjdUUsTUFBQSxFQUFRO0lBQ3ZFLE1BQU15ZCxLQUFBLEdBQVF0YixJQUFBLENBQUtxQixVQUFBLENBQVc2WixDQUFDO0lBQy9CLE1BQU1LLFVBQUEsR0FBYXZiLElBQUEsQ0FDZHFCLFVBQUEsQ0FBVzRaLENBQUMsRUFDWjNaLE1BQUEsQ0FBUU8sR0FBQSxJQUFReVosS0FBQSxDQUFNRSxPQUFBLENBQVEzWixHQUFHLE1BQU0sRUFBRTtJQUM5QyxNQUFNNFosTUFBQSxHQUFTO01BQUUsR0FBR1IsQ0FBQTtNQUFHLEdBQUdDO0lBQUU7SUFDNUIsV0FBV3JaLEdBQUEsSUFBTzBaLFVBQUEsRUFBWTtNQUMxQixNQUFNRyxXQUFBLEdBQWNWLFdBQUEsQ0FBWUMsQ0FBQSxDQUFFcFosR0FBQSxHQUFNcVosQ0FBQSxDQUFFclosR0FBQSxDQUFJO01BQzlDLElBQUksQ0FBQzZaLFdBQUEsQ0FBWUwsS0FBQSxFQUFPO1FBQ3BCLE9BQU87VUFBRUEsS0FBQSxFQUFPO1FBQU07TUFDMUI7TUFDQUksTUFBQSxDQUFPNVosR0FBQSxJQUFPNlosV0FBQSxDQUFZclksSUFBQTtJQUM5QjtJQUNBLE9BQU87TUFBRWdZLEtBQUEsRUFBTztNQUFNaFksSUFBQSxFQUFNb1k7SUFBTztFQUN2QyxXQUNTTixLQUFBLEtBQVU3aEIsYUFBQSxDQUFja0IsS0FBQSxJQUFTNGdCLEtBQUEsS0FBVTloQixhQUFBLENBQWNrQixLQUFBLEVBQU87SUFDckUsSUFBSXlnQixDQUFBLENBQUVuVixNQUFBLEtBQVdvVixDQUFBLENBQUVwVixNQUFBLEVBQVE7TUFDdkIsT0FBTztRQUFFdVYsS0FBQSxFQUFPO01BQU07SUFDMUI7SUFDQSxNQUFNTSxRQUFBLEdBQVcsRUFBQztJQUNsQixTQUFTbEMsS0FBQSxHQUFRLEdBQUdBLEtBQUEsR0FBUXdCLENBQUEsQ0FBRW5WLE1BQUEsRUFBUTJULEtBQUEsSUFBUztNQUMzQyxNQUFNbUMsS0FBQSxHQUFRWCxDQUFBLENBQUV4QixLQUFBO01BQ2hCLE1BQU1vQyxLQUFBLEdBQVFYLENBQUEsQ0FBRXpCLEtBQUE7TUFDaEIsTUFBTWlDLFdBQUEsR0FBY1YsV0FBQSxDQUFZWSxLQUFBLEVBQU9DLEtBQUs7TUFDNUMsSUFBSSxDQUFDSCxXQUFBLENBQVlMLEtBQUEsRUFBTztRQUNwQixPQUFPO1VBQUVBLEtBQUEsRUFBTztRQUFNO01BQzFCO01BQ0FNLFFBQUEsQ0FBUzFaLElBQUEsQ0FBS3laLFdBQUEsQ0FBWXJZLElBQUk7SUFDbEM7SUFDQSxPQUFPO01BQUVnWSxLQUFBLEVBQU87TUFBTWhZLElBQUEsRUFBTXNZO0lBQVM7RUFDekMsV0FDU1IsS0FBQSxLQUFVN2hCLGFBQUEsQ0FBYzBCLElBQUEsSUFDN0JvZ0IsS0FBQSxLQUFVOWhCLGFBQUEsQ0FBYzBCLElBQUEsSUFDeEIsQ0FBQ2lnQixDQUFBLEtBQU0sQ0FBQ0MsQ0FBQSxFQUFHO0lBQ1gsT0FBTztNQUFFRyxLQUFBLEVBQU87TUFBTWhZLElBQUEsRUFBTTRYO0lBQUU7RUFDbEMsT0FDSztJQUNELE9BQU87TUFBRUksS0FBQSxFQUFPO0lBQU07RUFDMUI7QUFDSjtBQUNBLElBQU01aUIsZUFBQSxHQUFOLGNBQThCZixPQUFBLENBQVE7RUFDbEN1VixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUVqRCxNQUFBO01BQVFUO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDdEQsTUFBTWtQLFlBQUEsR0FBZUEsQ0FBQ0MsVUFBQSxFQUFZQyxXQUFBLEtBQWdCO01BQzlDLElBQUkzZixTQUFBLENBQVUwZixVQUFVLEtBQUsxZixTQUFBLENBQVUyZixXQUFXLEdBQUc7UUFDakQsT0FBTzNrQixPQUFBO01BQ1g7TUFDQSxNQUFNa2lCLE1BQUEsR0FBU3lCLFdBQUEsQ0FBWWUsVUFBQSxDQUFXaFosS0FBQSxFQUFPaVosV0FBQSxDQUFZalosS0FBSztNQUM5RCxJQUFJLENBQUN3VyxNQUFBLENBQU84QixLQUFBLEVBQU87UUFDZmhoQixpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztVQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYXdQO1FBQ3ZCLENBQUM7UUFDRCxPQUFPN1EsT0FBQTtNQUNYO01BQ0EsSUFBSWtGLE9BQUEsQ0FBUXdmLFVBQVUsS0FBS3hmLE9BQUEsQ0FBUXlmLFdBQVcsR0FBRztRQUM3Q3JTLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO01BQ2pCO01BQ0EsT0FBTztRQUFFRyxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVHLEtBQUE7UUFBT0EsS0FBQSxFQUFPd1csTUFBQSxDQUFPbFc7TUFBSztJQUN0RDtJQUNBLElBQUk2RixHQUFBLENBQUlFLE1BQUEsQ0FBT2tFLEtBQUEsRUFBTztNQUNsQixPQUFPL0MsT0FBQSxDQUFRc04sR0FBQSxDQUFJLENBQ2YsS0FBS25MLElBQUEsQ0FBS3VQLElBQUEsQ0FBSy9PLFdBQUEsQ0FBWTtRQUN2QjdKLElBQUEsRUFBTTZGLEdBQUEsQ0FBSTdGLElBQUE7UUFDVndDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7UUFDVjRGLE1BQUEsRUFBUXZDO01BQ1osQ0FBQyxHQUNELEtBQUt3RCxJQUFBLENBQUt3UCxLQUFBLENBQU1oUCxXQUFBLENBQVk7UUFDeEI3SixJQUFBLEVBQU02RixHQUFBLENBQUk3RixJQUFBO1FBQ1Z3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1FBQ1Y0RixNQUFBLEVBQVF2QztNQUNaLENBQUMsRUFDSixFQUFFeEYsSUFBQSxDQUFLLENBQUMsQ0FBQ3VZLElBQUEsRUFBTUMsS0FBSyxNQUFNSixZQUFBLENBQWFHLElBQUEsRUFBTUMsS0FBSyxDQUFDO0lBQ3hELE9BQ0s7TUFDRCxPQUFPSixZQUFBLENBQWEsS0FBS3BQLElBQUEsQ0FBS3VQLElBQUEsQ0FBS2pQLFVBQUEsQ0FBVztRQUMxQzNKLElBQUEsRUFBTTZGLEdBQUEsQ0FBSTdGLElBQUE7UUFDVndDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7UUFDVjRGLE1BQUEsRUFBUXZDO01BQ1osQ0FBQyxHQUFHLEtBQUt3RCxJQUFBLENBQUt3UCxLQUFBLENBQU1sUCxVQUFBLENBQVc7UUFDM0IzSixJQUFBLEVBQU02RixHQUFBLENBQUk3RixJQUFBO1FBQ1Z3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1FBQ1Y0RixNQUFBLEVBQVF2QztNQUNaLENBQUMsQ0FBQztJQUNOO0VBQ0o7QUFDSjtBQUNBelEsZUFBQSxDQUFnQjhOLE1BQUEsR0FBUyxDQUFDMFYsSUFBQSxFQUFNQyxLQUFBLEVBQU8xVCxNQUFBLEtBQVc7RUFDOUMsT0FBTyxJQUFJL1AsZUFBQSxDQUFnQjtJQUN2QndqQixJQUFBO0lBQ0FDLEtBQUE7SUFDQTdOLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCRSxlQUFBO0lBQ2hDLEdBQUd3VCxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTXhPLFFBQUEsR0FBTixjQUF1QnRDLE9BQUEsQ0FBUTtFQUMzQnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU07TUFBRWpELE1BQUE7TUFBUVQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUN0RCxJQUFJMUQsR0FBQSxDQUFJNEQsVUFBQSxLQUFleFQsYUFBQSxDQUFja0IsS0FBQSxFQUFPO01BQ3hDSCxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztRQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYStOLFlBQUE7UUFDbkJFLFFBQUEsRUFBVXJOLGFBQUEsQ0FBY2tCLEtBQUE7UUFDeEJrTSxRQUFBLEVBQVV3QyxHQUFBLENBQUk0RDtNQUNsQixDQUFDO01BQ0QsT0FBT3pWLE9BQUE7SUFDWDtJQUNBLElBQUk2UixHQUFBLENBQUk3RixJQUFBLENBQUt5QyxNQUFBLEdBQVMsS0FBSzRHLElBQUEsQ0FBSzFMLEtBQUEsQ0FBTThFLE1BQUEsRUFBUTtNQUMxQ3pMLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhaVAsU0FBQTtRQUNuQkksT0FBQSxFQUFTLEtBQUsyRSxJQUFBLENBQUsxTCxLQUFBLENBQU04RSxNQUFBO1FBQ3pCZ0MsU0FBQSxFQUFXO1FBQ1hELEtBQUEsRUFBTztRQUNQRCxJQUFBLEVBQU07TUFDVixDQUFDO01BQ0QsT0FBT3ZRLE9BQUE7SUFDWDtJQUNBLE1BQU04a0IsSUFBQSxHQUFPLEtBQUt6UCxJQUFBLENBQUt5UCxJQUFBO0lBQ3ZCLElBQUksQ0FBQ0EsSUFBQSxJQUFRalQsR0FBQSxDQUFJN0YsSUFBQSxDQUFLeUMsTUFBQSxHQUFTLEtBQUs0RyxJQUFBLENBQUsxTCxLQUFBLENBQU04RSxNQUFBLEVBQVE7TUFDbkR6TCxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztRQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYXNQLE9BQUE7UUFDbkJDLE9BQUEsRUFBUyxLQUFLeUUsSUFBQSxDQUFLMUwsS0FBQSxDQUFNOEUsTUFBQTtRQUN6QmdDLFNBQUEsRUFBVztRQUNYRCxLQUFBLEVBQU87UUFDUEQsSUFBQSxFQUFNO01BQ1YsQ0FBQztNQUNEK0IsTUFBQSxDQUFPSCxLQUFBLENBQU07SUFDakI7SUFDQSxNQUFNeEksS0FBQSxHQUFRLENBQUMsR0FBR2tJLEdBQUEsQ0FBSTdGLElBQUksRUFDckJ0RyxHQUFBLENBQUksQ0FBQ21FLElBQUEsRUFBTWtiLFNBQUEsS0FBYztNQUMxQixNQUFNaE8sTUFBQSxHQUFTLEtBQUsxQixJQUFBLENBQUsxTCxLQUFBLENBQU1vYixTQUFBLEtBQWMsS0FBSzFQLElBQUEsQ0FBS3lQLElBQUE7TUFDdkQsSUFBSSxDQUFDL04sTUFBQSxFQUNELE9BQU87TUFDWCxPQUFPQSxNQUFBLENBQU9uQixNQUFBLENBQU8sSUFBSXpCLGtCQUFBLENBQW1CdEMsR0FBQSxFQUFLaEksSUFBQSxFQUFNZ0ksR0FBQSxDQUFJckQsSUFBQSxFQUFNdVcsU0FBUyxDQUFDO0lBQy9FLENBQUMsRUFDSTlhLE1BQUEsQ0FBUWlJLENBQUEsSUFBTSxDQUFDLENBQUNBLENBQUM7SUFDdEIsSUFBSUwsR0FBQSxDQUFJRSxNQUFBLENBQU9rRSxLQUFBLEVBQU87TUFDbEIsT0FBTy9DLE9BQUEsQ0FBUXNOLEdBQUEsQ0FBSTdXLEtBQUssRUFBRTBDLElBQUEsQ0FBTWtHLE9BQUEsSUFBWTtRQUN4QyxPQUFPcFMsV0FBQSxDQUFZa1MsVUFBQSxDQUFXQyxNQUFBLEVBQVFDLE9BQU87TUFDakQsQ0FBQztJQUNMLE9BQ0s7TUFDRCxPQUFPcFMsV0FBQSxDQUFZa1MsVUFBQSxDQUFXQyxNQUFBLEVBQVEzSSxLQUFLO0lBQy9DO0VBQ0o7RUFDQSxJQUFJQSxNQUFBLEVBQVE7SUFDUixPQUFPLEtBQUswTCxJQUFBLENBQUsxTCxLQUFBO0VBQ3JCO0VBQ0FtYixLQUFLQSxJQUFBLEVBQU07SUFDUCxPQUFPLElBQUluaUIsUUFBQSxDQUFTO01BQ2hCLEdBQUcsS0FBSzBTLElBQUE7TUFDUnlQO0lBQ0osQ0FBQztFQUNMO0FBQ0o7QUFDQW5pQixRQUFBLENBQVN1TSxNQUFBLEdBQVMsQ0FBQzhWLE9BQUEsRUFBUzdULE1BQUEsS0FBVztFQUNuQyxJQUFJLENBQUNoRixLQUFBLENBQU1DLE9BQUEsQ0FBUTRZLE9BQU8sR0FBRztJQUN6QixNQUFNLElBQUl2YixLQUFBLENBQU0sdURBQXVEO0VBQzNFO0VBQ0EsT0FBTyxJQUFJOUcsUUFBQSxDQUFTO0lBQ2hCZ0gsS0FBQSxFQUFPcWIsT0FBQTtJQUNQaE8sUUFBQSxFQUFVOVYscUJBQUEsQ0FBc0J5QixRQUFBO0lBQ2hDbWlCLElBQUEsRUFBTTtJQUNOLEdBQUdsUSxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTTlPLFNBQUEsR0FBTixjQUF3QmhDLE9BQUEsQ0FBUTtFQUM1QixJQUFJNGtCLFVBQUEsRUFBWTtJQUNaLE9BQU8sS0FBSzVQLElBQUEsQ0FBSzZQLE9BQUE7RUFDckI7RUFDQSxJQUFJQyxZQUFBLEVBQWM7SUFDZCxPQUFPLEtBQUs5UCxJQUFBLENBQUsrUCxTQUFBO0VBQ3JCO0VBQ0F4UCxPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUVqRCxNQUFBO01BQVFUO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDdEQsSUFBSTFELEdBQUEsQ0FBSTRELFVBQUEsS0FBZXhULGFBQUEsQ0FBY3VFLE1BQUEsRUFBUTtNQUN6Q3hELGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjdUUsTUFBQTtRQUN4QjZJLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsTUFBTTJTLEtBQUEsR0FBUSxFQUFDO0lBQ2YsTUFBTXVTLE9BQUEsR0FBVSxLQUFLN1AsSUFBQSxDQUFLNlAsT0FBQTtJQUMxQixNQUFNRSxTQUFBLEdBQVksS0FBSy9QLElBQUEsQ0FBSytQLFNBQUE7SUFDNUIsV0FBVzVhLEdBQUEsSUFBT3FILEdBQUEsQ0FBSTdGLElBQUEsRUFBTTtNQUN4QjJHLEtBQUEsQ0FBTS9ILElBQUEsQ0FBSztRQUNQSixHQUFBLEVBQUswYSxPQUFBLENBQVF0UCxNQUFBLENBQU8sSUFBSXpCLGtCQUFBLENBQW1CdEMsR0FBQSxFQUFLckgsR0FBQSxFQUFLcUgsR0FBQSxDQUFJckQsSUFBQSxFQUFNaEUsR0FBRyxDQUFDO1FBQ25Fa0IsS0FBQSxFQUFPMFosU0FBQSxDQUFVeFAsTUFBQSxDQUFPLElBQUl6QixrQkFBQSxDQUFtQnRDLEdBQUEsRUFBS0EsR0FBQSxDQUFJN0YsSUFBQSxDQUFLeEIsR0FBQSxHQUFNcUgsR0FBQSxDQUFJckQsSUFBQSxFQUFNaEUsR0FBRyxDQUFDO1FBQ2pGd0ksU0FBQSxFQUFXeEksR0FBQSxJQUFPcUgsR0FBQSxDQUFJN0Y7TUFDMUIsQ0FBQztJQUNMO0lBQ0EsSUFBSTZGLEdBQUEsQ0FBSUUsTUFBQSxDQUFPa0UsS0FBQSxFQUFPO01BQ2xCLE9BQU85VixXQUFBLENBQVl1UyxnQkFBQSxDQUFpQkosTUFBQSxFQUFRSyxLQUFLO0lBQ3JELE9BQ0s7TUFDRCxPQUFPeFMsV0FBQSxDQUFZMlMsZUFBQSxDQUFnQlIsTUFBQSxFQUFRSyxLQUFLO0lBQ3BEO0VBQ0o7RUFDQSxJQUFJK04sUUFBQSxFQUFVO0lBQ1YsT0FBTyxLQUFLckwsSUFBQSxDQUFLK1AsU0FBQTtFQUNyQjtFQUNBLE9BQU9sVyxPQUFPcEQsS0FBQSxFQUFPQyxNQUFBLEVBQVFzWixLQUFBLEVBQU87SUFDaEMsSUFBSXRaLE1BQUEsWUFBa0IxTCxPQUFBLEVBQVM7TUFDM0IsT0FBTyxJQUFJZ0MsU0FBQSxDQUFVO1FBQ2pCNmlCLE9BQUEsRUFBU3BaLEtBQUE7UUFDVHNaLFNBQUEsRUFBV3JaLE1BQUE7UUFDWGlMLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCbUIsU0FBQTtRQUNoQyxHQUFHdVMsbUJBQUEsQ0FBb0J5USxLQUFLO01BQ2hDLENBQUM7SUFDTDtJQUNBLE9BQU8sSUFBSWhqQixTQUFBLENBQVU7TUFDakI2aUIsT0FBQSxFQUFTMWlCLFNBQUEsQ0FBVTBNLE1BQUEsQ0FBTztNQUMxQmtXLFNBQUEsRUFBV3RaLEtBQUE7TUFDWGtMLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCbUIsU0FBQTtNQUNoQyxHQUFHdVMsbUJBQUEsQ0FBb0I3SSxNQUFNO0lBQ2pDLENBQUM7RUFDTDtBQUNKO0FBQ0EsSUFBTXZLLE1BQUEsR0FBTixjQUFxQm5CLE9BQUEsQ0FBUTtFQUN6QixJQUFJNGtCLFVBQUEsRUFBWTtJQUNaLE9BQU8sS0FBSzVQLElBQUEsQ0FBSzZQLE9BQUE7RUFDckI7RUFDQSxJQUFJQyxZQUFBLEVBQWM7SUFDZCxPQUFPLEtBQUs5UCxJQUFBLENBQUsrUCxTQUFBO0VBQ3JCO0VBQ0F4UCxPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUVqRCxNQUFBO01BQVFUO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDdEQsSUFBSTFELEdBQUEsQ0FBSTRELFVBQUEsS0FBZXhULGFBQUEsQ0FBY3lELEdBQUEsRUFBSztNQUN0QzFDLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjeUQsR0FBQTtRQUN4QjJKLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsTUFBTWtsQixPQUFBLEdBQVUsS0FBSzdQLElBQUEsQ0FBSzZQLE9BQUE7SUFDMUIsTUFBTUUsU0FBQSxHQUFZLEtBQUsvUCxJQUFBLENBQUsrUCxTQUFBO0lBQzVCLE1BQU16UyxLQUFBLEdBQVEsQ0FBQyxHQUFHZCxHQUFBLENBQUk3RixJQUFBLENBQUtzWixPQUFBLENBQVEsQ0FBQyxFQUFFNWYsR0FBQSxDQUFJLENBQUMsQ0FBQzhFLEdBQUEsRUFBS2tCLEtBQUssR0FBRzBXLEtBQUEsS0FBVTtNQUMvRCxPQUFPO1FBQ0g1WCxHQUFBLEVBQUswYSxPQUFBLENBQVF0UCxNQUFBLENBQU8sSUFBSXpCLGtCQUFBLENBQW1CdEMsR0FBQSxFQUFLckgsR0FBQSxFQUFLcUgsR0FBQSxDQUFJckQsSUFBQSxFQUFNLENBQUM0VCxLQUFBLEVBQU8sS0FBSyxDQUFDLENBQUM7UUFDOUUxVyxLQUFBLEVBQU8wWixTQUFBLENBQVV4UCxNQUFBLENBQU8sSUFBSXpCLGtCQUFBLENBQW1CdEMsR0FBQSxFQUFLbkcsS0FBQSxFQUFPbUcsR0FBQSxDQUFJckQsSUFBQSxFQUFNLENBQUM0VCxLQUFBLEVBQU8sT0FBTyxDQUFDLENBQUM7TUFDMUY7SUFDSixDQUFDO0lBQ0QsSUFBSXZRLEdBQUEsQ0FBSUUsTUFBQSxDQUFPa0UsS0FBQSxFQUFPO01BQ2xCLE1BQU1zUCxRQUFBLEdBQVcsbUJBQUloWixHQUFBLENBQUk7TUFDekIsT0FBTzJHLE9BQUEsQ0FBUTRDLE9BQUEsQ0FBUSxFQUFFekosSUFBQSxDQUFLLFlBQVk7UUFDdEMsV0FBV3dHLElBQUEsSUFBUUYsS0FBQSxFQUFPO1VBQ3RCLE1BQU1uSSxHQUFBLEdBQU0sTUFBTXFJLElBQUEsQ0FBS3JJLEdBQUE7VUFDdkIsTUFBTWtCLEtBQUEsR0FBUSxNQUFNbUgsSUFBQSxDQUFLbkgsS0FBQTtVQUN6QixJQUFJbEIsR0FBQSxDQUFJOEgsTUFBQSxLQUFXLGFBQWE1RyxLQUFBLENBQU00RyxNQUFBLEtBQVcsV0FBVztZQUN4RCxPQUFPdFMsT0FBQTtVQUNYO1VBQ0EsSUFBSXdLLEdBQUEsQ0FBSThILE1BQUEsS0FBVyxXQUFXNUcsS0FBQSxDQUFNNEcsTUFBQSxLQUFXLFNBQVM7WUFDcERBLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1VBQ2pCO1VBQ0FvVCxRQUFBLENBQVM5ZCxHQUFBLENBQUkrQyxHQUFBLENBQUlrQixLQUFBLEVBQU9BLEtBQUEsQ0FBTUEsS0FBSztRQUN2QztRQUNBLE9BQU87VUFBRTRHLE1BQUEsRUFBUUEsTUFBQSxDQUFPNUcsS0FBQTtVQUFPQSxLQUFBLEVBQU82WjtRQUFTO01BQ25ELENBQUM7SUFDTCxPQUNLO01BQ0QsTUFBTUEsUUFBQSxHQUFXLG1CQUFJaFosR0FBQSxDQUFJO01BQ3pCLFdBQVdzRyxJQUFBLElBQVFGLEtBQUEsRUFBTztRQUN0QixNQUFNbkksR0FBQSxHQUFNcUksSUFBQSxDQUFLckksR0FBQTtRQUNqQixNQUFNa0IsS0FBQSxHQUFRbUgsSUFBQSxDQUFLbkgsS0FBQTtRQUNuQixJQUFJbEIsR0FBQSxDQUFJOEgsTUFBQSxLQUFXLGFBQWE1RyxLQUFBLENBQU00RyxNQUFBLEtBQVcsV0FBVztVQUN4RCxPQUFPdFMsT0FBQTtRQUNYO1FBQ0EsSUFBSXdLLEdBQUEsQ0FBSThILE1BQUEsS0FBVyxXQUFXNUcsS0FBQSxDQUFNNEcsTUFBQSxLQUFXLFNBQVM7VUFDcERBLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO1FBQ0FvVCxRQUFBLENBQVM5ZCxHQUFBLENBQUkrQyxHQUFBLENBQUlrQixLQUFBLEVBQU9BLEtBQUEsQ0FBTUEsS0FBSztNQUN2QztNQUNBLE9BQU87UUFBRTRHLE1BQUEsRUFBUUEsTUFBQSxDQUFPNUcsS0FBQTtRQUFPQSxLQUFBLEVBQU82WjtNQUFTO0lBQ25EO0VBQ0o7QUFDSjtBQUNBL2pCLE1BQUEsQ0FBTzBOLE1BQUEsR0FBUyxDQUFDZ1csT0FBQSxFQUFTRSxTQUFBLEVBQVdqVSxNQUFBLEtBQVc7RUFDNUMsT0FBTyxJQUFJM1AsTUFBQSxDQUFPO0lBQ2Q0akIsU0FBQTtJQUNBRixPQUFBO0lBQ0FsTyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQk0sTUFBQTtJQUNoQyxHQUFHb1QsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU01TyxNQUFBLEdBQU4sY0FBcUJsQyxPQUFBLENBQVE7RUFDekJ1VixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUVqRCxNQUFBO01BQVFUO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDdEQsSUFBSTFELEdBQUEsQ0FBSTRELFVBQUEsS0FBZXhULGFBQUEsQ0FBY3dGLEdBQUEsRUFBSztNQUN0Q3pFLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjd0YsR0FBQTtRQUN4QjRILFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsTUFBTWtYLEdBQUEsR0FBTSxLQUFLN0IsSUFBQTtJQUNqQixJQUFJNkIsR0FBQSxDQUFJc08sT0FBQSxLQUFZLE1BQU07TUFDdEIsSUFBSTNULEdBQUEsQ0FBSTdGLElBQUEsQ0FBS3laLElBQUEsR0FBT3ZPLEdBQUEsQ0FBSXNPLE9BQUEsQ0FBUTlaLEtBQUEsRUFBTztRQUNuQzFJLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1VBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhaVAsU0FBQTtVQUNuQkksT0FBQSxFQUFTd0csR0FBQSxDQUFJc08sT0FBQSxDQUFROVosS0FBQTtVQUNyQjZFLElBQUEsRUFBTTtVQUNORSxTQUFBLEVBQVc7VUFDWEQsS0FBQSxFQUFPO1VBQ1B6QyxPQUFBLEVBQVNtSixHQUFBLENBQUlzTyxPQUFBLENBQVF6WDtRQUN6QixDQUFDO1FBQ0R1RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtNQUNqQjtJQUNKO0lBQ0EsSUFBSStFLEdBQUEsQ0FBSXdPLE9BQUEsS0FBWSxNQUFNO01BQ3RCLElBQUk3VCxHQUFBLENBQUk3RixJQUFBLENBQUt5WixJQUFBLEdBQU92TyxHQUFBLENBQUl3TyxPQUFBLENBQVFoYSxLQUFBLEVBQU87UUFDbkMxSSxpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztVQUNuQnpELElBQUEsRUFBTS9NLFlBQUEsQ0FBYXNQLE9BQUE7VUFDbkJDLE9BQUEsRUFBU3NHLEdBQUEsQ0FBSXdPLE9BQUEsQ0FBUWhhLEtBQUE7VUFDckI2RSxJQUFBLEVBQU07VUFDTkUsU0FBQSxFQUFXO1VBQ1hELEtBQUEsRUFBTztVQUNQekMsT0FBQSxFQUFTbUosR0FBQSxDQUFJd08sT0FBQSxDQUFRM1g7UUFDekIsQ0FBQztRQUNEdUUsTUFBQSxDQUFPSCxLQUFBLENBQU07TUFDakI7SUFDSjtJQUNBLE1BQU1pVCxTQUFBLEdBQVksS0FBSy9QLElBQUEsQ0FBSytQLFNBQUE7SUFDNUIsU0FBU08sWUFBWUMsU0FBQSxFQUFVO01BQzNCLE1BQU1DLFNBQUEsR0FBWSxtQkFBSXJaLEdBQUEsQ0FBSTtNQUMxQixXQUFXa1UsT0FBQSxJQUFXa0YsU0FBQSxFQUFVO1FBQzVCLElBQUlsRixPQUFBLENBQVFwTyxNQUFBLEtBQVcsV0FDbkIsT0FBT3RTLE9BQUE7UUFDWCxJQUFJMGdCLE9BQUEsQ0FBUXBPLE1BQUEsS0FBVyxTQUNuQkEsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakIwVCxTQUFBLENBQVVDLEdBQUEsQ0FBSXBGLE9BQUEsQ0FBUWhWLEtBQUs7TUFDL0I7TUFDQSxPQUFPO1FBQUU0RyxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVHLEtBQUE7UUFBT0EsS0FBQSxFQUFPbWE7TUFBVTtJQUNwRDtJQUNBLE1BQU1FLFFBQUEsR0FBVyxDQUFDLEdBQUdsVSxHQUFBLENBQUk3RixJQUFBLENBQUtnYSxNQUFBLENBQU8sQ0FBQyxFQUFFdGdCLEdBQUEsQ0FBSSxDQUFDbUUsSUFBQSxFQUFNOEUsQ0FBQSxLQUFNeVcsU0FBQSxDQUFVeFAsTUFBQSxDQUFPLElBQUl6QixrQkFBQSxDQUFtQnRDLEdBQUEsRUFBS2hJLElBQUEsRUFBTWdJLEdBQUEsQ0FBSXJELElBQUEsRUFBTUcsQ0FBQyxDQUFDLENBQUM7SUFDekgsSUFBSWtELEdBQUEsQ0FBSUUsTUFBQSxDQUFPa0UsS0FBQSxFQUFPO01BQ2xCLE9BQU8vQyxPQUFBLENBQVFzTixHQUFBLENBQUl1RixRQUFRLEVBQUUxWixJQUFBLENBQU11WixTQUFBLElBQWFELFdBQUEsQ0FBWUMsU0FBUSxDQUFDO0lBQ3pFLE9BQ0s7TUFDRCxPQUFPRCxXQUFBLENBQVlJLFFBQVE7SUFDL0I7RUFDSjtFQUNBbkosSUFBSTRJLE9BQUEsRUFBU3pYLE9BQUEsRUFBUztJQUNsQixPQUFPLElBQUl4TCxNQUFBLENBQU87TUFDZCxHQUFHLEtBQUs4UyxJQUFBO01BQ1JtUSxPQUFBLEVBQVM7UUFBRTlaLEtBQUEsRUFBTzhaLE9BQUE7UUFBU3pYLE9BQUEsRUFBUytGLFNBQUEsQ0FBVW5JLFFBQUEsQ0FBU29DLE9BQU87TUFBRTtJQUNwRSxDQUFDO0VBQ0w7RUFDQStPLElBQUk0SSxPQUFBLEVBQVMzWCxPQUFBLEVBQVM7SUFDbEIsT0FBTyxJQUFJeEwsTUFBQSxDQUFPO01BQ2QsR0FBRyxLQUFLOFMsSUFBQTtNQUNScVEsT0FBQSxFQUFTO1FBQUVoYSxLQUFBLEVBQU9nYSxPQUFBO1FBQVMzWCxPQUFBLEVBQVMrRixTQUFBLENBQVVuSSxRQUFBLENBQVNvQyxPQUFPO01BQUU7SUFDcEUsQ0FBQztFQUNMO0VBQ0EwWCxLQUFLQSxJQUFBLEVBQU0xWCxPQUFBLEVBQVM7SUFDaEIsT0FBTyxLQUFLNk8sR0FBQSxDQUFJNkksSUFBQSxFQUFNMVgsT0FBTyxFQUFFK08sR0FBQSxDQUFJMkksSUFBQSxFQUFNMVgsT0FBTztFQUNwRDtFQUNBa1AsU0FBU2xQLE9BQUEsRUFBUztJQUNkLE9BQU8sS0FBSzZPLEdBQUEsQ0FBSSxHQUFHN08sT0FBTztFQUM5QjtBQUNKO0FBQ0F4TCxNQUFBLENBQU8yTSxNQUFBLEdBQVMsQ0FBQ2tXLFNBQUEsRUFBV2pVLE1BQUEsS0FBVztFQUNuQyxPQUFPLElBQUk1TyxNQUFBLENBQU87SUFDZDZpQixTQUFBO0lBQ0FJLE9BQUEsRUFBUztJQUNURSxPQUFBLEVBQVM7SUFDVDFPLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCcUIsTUFBQTtJQUNoQyxHQUFHcVMsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU1oUSxXQUFBLEdBQU4sY0FBMEJkLE9BQUEsQ0FBUTtFQUM5QjJNLFlBQUEsRUFBYztJQUNWLE1BQU0sR0FBRzZSLFNBQVM7SUFDbEIsS0FBSzVHLFFBQUEsR0FBVyxLQUFLZ08sU0FBQTtFQUN6QjtFQUNBclEsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTTtNQUFFMUQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUM5QyxJQUFJMUQsR0FBQSxDQUFJNEQsVUFBQSxLQUFleFQsYUFBQSxDQUFjdUMsUUFBQSxFQUFVO01BQzNDeEIsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ6RCxJQUFBLEVBQU0vTSxZQUFBLENBQWErTixZQUFBO1FBQ25CRSxRQUFBLEVBQVVyTixhQUFBLENBQWN1QyxRQUFBO1FBQ3hCNkssUUFBQSxFQUFVd0MsR0FBQSxDQUFJNEQ7TUFDbEIsQ0FBQztNQUNELE9BQU96VixPQUFBO0lBQ1g7SUFDQSxTQUFTa21CLGNBQWNwTSxJQUFBLEVBQU0zTCxLQUFBLEVBQU87TUFDaEMsT0FBTzFJLFNBQUEsQ0FBVTtRQUNidUcsSUFBQSxFQUFNOE4sSUFBQTtRQUNOdEwsSUFBQSxFQUFNcUQsR0FBQSxDQUFJckQsSUFBQTtRQUNWNEMsU0FBQSxFQUFXLENBQ1BTLEdBQUEsQ0FBSUUsTUFBQSxDQUFPQyxrQkFBQSxFQUNYSCxHQUFBLENBQUlJLGNBQUEsRUFDSnZOLFdBQUEsQ0FBWSxHQUNaVCxRQUFBLENBQ0osQ0FBRWdHLE1BQUEsQ0FBUWlJLENBQUEsSUFBTSxDQUFDLENBQUNBLENBQUM7UUFDbkJiLFNBQUEsRUFBVztVQUNQakQsSUFBQSxFQUFNL00sWUFBQSxDQUFhd08saUJBQUE7VUFDbkJ0QixjQUFBLEVBQWdCSjtRQUNwQjtNQUNKLENBQUM7SUFDTDtJQUNBLFNBQVNnWSxpQkFBaUJDLE9BQUEsRUFBU2pZLEtBQUEsRUFBTztNQUN0QyxPQUFPMUksU0FBQSxDQUFVO1FBQ2J1RyxJQUFBLEVBQU1vYSxPQUFBO1FBQ041WCxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1FBQ1Y0QyxTQUFBLEVBQVcsQ0FDUFMsR0FBQSxDQUFJRSxNQUFBLENBQU9DLGtCQUFBLEVBQ1hILEdBQUEsQ0FBSUksY0FBQSxFQUNKdk4sV0FBQSxDQUFZLEdBQ1pULFFBQUEsQ0FDSixDQUFFZ0csTUFBQSxDQUFRaUksQ0FBQSxJQUFNLENBQUMsQ0FBQ0EsQ0FBQztRQUNuQmIsU0FBQSxFQUFXO1VBQ1BqRCxJQUFBLEVBQU0vTSxZQUFBLENBQWF5TyxtQkFBQTtVQUNuQnhCLGVBQUEsRUFBaUJIO1FBQ3JCO01BQ0osQ0FBQztJQUNMO0lBQ0EsTUFBTWdELE1BQUEsR0FBUztNQUFFbE4sUUFBQSxFQUFVNE4sR0FBQSxDQUFJRSxNQUFBLENBQU9DO0lBQW1CO0lBQ3pELE1BQU1xVSxFQUFBLEdBQUt4VSxHQUFBLENBQUk3RixJQUFBO0lBQ2YsSUFBSSxLQUFLcUosSUFBQSxDQUFLK1EsT0FBQSxZQUFtQmprQixVQUFBLEVBQVk7TUFJekMsTUFBTW1rQixFQUFBLEdBQUs7TUFDWCxPQUFPcG1CLEVBQUEsQ0FBRyxtQkFBbUI0WixJQUFBLEVBQU07UUFDL0IsTUFBTTNMLEtBQUEsR0FBUSxJQUFJbE4sUUFBQSxDQUFTLEVBQUU7UUFDN0IsTUFBTXNsQixVQUFBLEdBQWEsTUFBTUQsRUFBQSxDQUFHalIsSUFBQSxDQUFLeUUsSUFBQSxDQUM1QnpELFVBQUEsQ0FBV3lELElBQUEsRUFBTTNJLE1BQU0sRUFDdkI3RSxLQUFBLENBQU9qQyxDQUFBLElBQU07VUFDZDhELEtBQUEsQ0FBTWxCLFFBQUEsQ0FBU2laLGFBQUEsQ0FBY3BNLElBQUEsRUFBTXpQLENBQUMsQ0FBQztVQUNyQyxNQUFNOEQsS0FBQTtRQUNWLENBQUM7UUFDRCxNQUFNc0csTUFBQSxHQUFTLE1BQU0rUixPQUFBLENBQVFDLEtBQUEsQ0FBTUosRUFBQSxFQUFJLE1BQU1FLFVBQVU7UUFDdkQsTUFBTUcsYUFBQSxHQUFnQixNQUFNSixFQUFBLENBQUdqUixJQUFBLENBQUsrUSxPQUFBLENBQVEvUSxJQUFBLENBQUs5RSxJQUFBLENBQzVDOEYsVUFBQSxDQUFXNUIsTUFBQSxFQUFRdEQsTUFBTSxFQUN6QjdFLEtBQUEsQ0FBT2pDLENBQUEsSUFBTTtVQUNkOEQsS0FBQSxDQUFNbEIsUUFBQSxDQUFTa1osZ0JBQUEsQ0FBaUIxUixNQUFBLEVBQVFwSyxDQUFDLENBQUM7VUFDMUMsTUFBTThELEtBQUE7UUFDVixDQUFDO1FBQ0QsT0FBT3VZLGFBQUE7TUFDWCxDQUFDO0lBQ0wsT0FDSztNQUlELE1BQU1KLEVBQUEsR0FBSztNQUNYLE9BQU9wbUIsRUFBQSxDQUFHLGFBQWE0WixJQUFBLEVBQU07UUFDekIsTUFBTXlNLFVBQUEsR0FBYUQsRUFBQSxDQUFHalIsSUFBQSxDQUFLeUUsSUFBQSxDQUFLOUQsU0FBQSxDQUFVOEQsSUFBQSxFQUFNM0ksTUFBTTtRQUN0RCxJQUFJLENBQUNvVixVQUFBLENBQVc3UixPQUFBLEVBQVM7VUFDckIsTUFBTSxJQUFJelQsUUFBQSxDQUFTLENBQUNpbEIsYUFBQSxDQUFjcE0sSUFBQSxFQUFNeU0sVUFBQSxDQUFXcFksS0FBSyxDQUFDLENBQUM7UUFDOUQ7UUFDQSxNQUFNc0csTUFBQSxHQUFTK1IsT0FBQSxDQUFRQyxLQUFBLENBQU1KLEVBQUEsRUFBSSxNQUFNRSxVQUFBLENBQVd2YSxJQUFJO1FBQ3RELE1BQU0wYSxhQUFBLEdBQWdCSixFQUFBLENBQUdqUixJQUFBLENBQUsrUSxPQUFBLENBQVFwUSxTQUFBLENBQVV2QixNQUFBLEVBQVF0RCxNQUFNO1FBQzlELElBQUksQ0FBQ3VWLGFBQUEsQ0FBY2hTLE9BQUEsRUFBUztVQUN4QixNQUFNLElBQUl6VCxRQUFBLENBQVMsQ0FBQ2tsQixnQkFBQSxDQUFpQjFSLE1BQUEsRUFBUWlTLGFBQUEsQ0FBY3ZZLEtBQUssQ0FBQyxDQUFDO1FBQ3RFO1FBQ0EsT0FBT3VZLGFBQUEsQ0FBYzFhLElBQUE7TUFDekIsQ0FBQztJQUNMO0VBQ0o7RUFDQTJhLFdBQUEsRUFBYTtJQUNULE9BQU8sS0FBS3RSLElBQUEsQ0FBS3lFLElBQUE7RUFDckI7RUFDQThNLFdBQUEsRUFBYTtJQUNULE9BQU8sS0FBS3ZSLElBQUEsQ0FBSytRLE9BQUE7RUFDckI7RUFDQXRNLEtBQUEsR0FBUW5RLEtBQUEsRUFBTztJQUNYLE9BQU8sSUFBSXhJLFdBQUEsQ0FBWTtNQUNuQixHQUFHLEtBQUtrVSxJQUFBO01BQ1J5RSxJQUFBLEVBQU1uWCxRQUFBLENBQVN1TSxNQUFBLENBQU92RixLQUFLLEVBQUVtYixJQUFBLENBQUtoaUIsVUFBQSxDQUFXb00sTUFBQSxDQUFPLENBQUM7SUFDekQsQ0FBQztFQUNMO0VBQ0FrWCxRQUFRUSxVQUFBLEVBQVk7SUFDaEIsT0FBTyxJQUFJemxCLFdBQUEsQ0FBWTtNQUNuQixHQUFHLEtBQUtrVSxJQUFBO01BQ1IrUSxPQUFBLEVBQVNRO0lBQ2IsQ0FBQztFQUNMO0VBQ0FYLFVBQVVZLElBQUEsRUFBTTtJQUNaLE1BQU1DLGFBQUEsR0FBZ0IsS0FBSy9RLEtBQUEsQ0FBTThRLElBQUk7SUFDckMsT0FBT0MsYUFBQTtFQUNYO0VBQ0FDLGdCQUFnQkYsSUFBQSxFQUFNO0lBQ2xCLE1BQU1DLGFBQUEsR0FBZ0IsS0FBSy9RLEtBQUEsQ0FBTThRLElBQUk7SUFDckMsT0FBT0MsYUFBQTtFQUNYO0VBQ0EsT0FBTzVYLE9BQU80SyxJQUFBLEVBQU1zTSxPQUFBLEVBQVNqVixNQUFBLEVBQVE7SUFDakMsT0FBTyxJQUFJaFEsV0FBQSxDQUFZO01BQ25CMlksSUFBQSxFQUFPQSxJQUFBLEdBQ0RBLElBQUEsR0FDQW5YLFFBQUEsQ0FBU3VNLE1BQUEsQ0FBTyxFQUFFLEVBQUU0VixJQUFBLENBQUtoaUIsVUFBQSxDQUFXb00sTUFBQSxDQUFPLENBQUM7TUFDbERrWCxPQUFBLEVBQVNBLE9BQUEsSUFBV3RqQixVQUFBLENBQVdvTSxNQUFBLENBQU87TUFDdEM4SCxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQkMsV0FBQTtNQUNoQyxHQUFHeVQsbUJBQUEsQ0FBb0J6RCxNQUFNO0lBQ2pDLENBQUM7RUFDTDtBQUNKO0FBQ0EsSUFBTTdQLE9BQUEsR0FBTixjQUFzQmpCLE9BQUEsQ0FBUTtFQUMxQixJQUFJMFcsT0FBQSxFQUFTO0lBQ1QsT0FBTyxLQUFLMUIsSUFBQSxDQUFLMlIsTUFBQSxDQUFPO0VBQzVCO0VBQ0FwUixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUUxRDtJQUFJLElBQUksS0FBSzZELG1CQUFBLENBQW9CSCxLQUFLO0lBQzlDLE1BQU0wUixVQUFBLEdBQWEsS0FBSzVSLElBQUEsQ0FBSzJSLE1BQUEsQ0FBTztJQUNwQyxPQUFPQyxVQUFBLENBQVdyUixNQUFBLENBQU87TUFBRTVKLElBQUEsRUFBTTZGLEdBQUEsQ0FBSTdGLElBQUE7TUFBTXdDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7TUFBTTRGLE1BQUEsRUFBUXZDO0lBQUksQ0FBQztFQUM1RTtBQUNKO0FBQ0F2USxPQUFBLENBQVE0TixNQUFBLEdBQVMsQ0FBQzhYLE1BQUEsRUFBUTdWLE1BQUEsS0FBVztFQUNqQyxPQUFPLElBQUk3UCxPQUFBLENBQVE7SUFDZjBsQixNQUFBO0lBQ0FoUSxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQkksT0FBQTtJQUNoQyxHQUFHc1QsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU01UCxVQUFBLEdBQU4sY0FBeUJsQixPQUFBLENBQVE7RUFDN0J1VixPQUFPTCxLQUFBLEVBQU87SUFDVixJQUFJQSxLQUFBLENBQU12SixJQUFBLEtBQVMsS0FBS3FKLElBQUEsQ0FBSzNKLEtBQUEsRUFBTztNQUNoQyxNQUFNbUcsR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFLO01BQ3RDdlMsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ4QyxRQUFBLEVBQVV3QyxHQUFBLENBQUk3RixJQUFBO1FBQ2RvQyxJQUFBLEVBQU0vTSxZQUFBLENBQWFrTyxlQUFBO1FBQ25CRCxRQUFBLEVBQVUsS0FBSytGLElBQUEsQ0FBSzNKO01BQ3hCLENBQUM7TUFDRCxPQUFPMUwsT0FBQTtJQUNYO0lBQ0EsT0FBTztNQUFFc1MsTUFBQSxFQUFRO01BQVM1RyxLQUFBLEVBQU82SixLQUFBLENBQU12SjtJQUFLO0VBQ2hEO0VBQ0EsSUFBSU4sTUFBQSxFQUFRO0lBQ1IsT0FBTyxLQUFLMkosSUFBQSxDQUFLM0osS0FBQTtFQUNyQjtBQUNKO0FBQ0FuSyxVQUFBLENBQVcyTixNQUFBLEdBQVMsQ0FBQ3hELEtBQUEsRUFBT3lGLE1BQUEsS0FBVztFQUNuQyxPQUFPLElBQUk1UCxVQUFBLENBQVc7SUFDbEJtSyxLQUFBO0lBQ0FzTCxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQkssVUFBQTtJQUNoQyxHQUFHcVQsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLFNBQVMyUixjQUFja0QsTUFBQSxFQUFRN1UsTUFBQSxFQUFRO0VBQ25DLE9BQU8sSUFBSW5RLE9BQUEsQ0FBUTtJQUNmZ2xCLE1BQUE7SUFDQWhQLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCRixPQUFBO0lBQ2hDLEdBQUc0VCxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTW5RLE9BQUEsR0FBTixjQUFzQlgsT0FBQSxDQUFRO0VBQzFCMk0sWUFBQSxFQUFjO0lBQ1YsTUFBTSxHQUFHNlIsU0FBUztJQUNsQjVLLGNBQUEsQ0FBZXhNLEdBQUEsQ0FBSSxNQUFNLE1BQU07RUFDbkM7RUFDQW1PLE9BQU9MLEtBQUEsRUFBTztJQUNWLElBQUksT0FBT0EsS0FBQSxDQUFNdkosSUFBQSxLQUFTLFVBQVU7TUFDaEMsTUFBTTZGLEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBSztNQUN0QyxNQUFNMlIsY0FBQSxHQUFpQixLQUFLN1IsSUFBQSxDQUFLMlEsTUFBQTtNQUNqQ2hqQixpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztRQUNuQnZDLFFBQUEsRUFBVTNHLElBQUEsQ0FBSzBDLFVBQUEsQ0FBVzZiLGNBQWM7UUFDeEM3WCxRQUFBLEVBQVV3QyxHQUFBLENBQUk0RCxVQUFBO1FBQ2RySCxJQUFBLEVBQU0vTSxZQUFBLENBQWErTjtNQUN2QixDQUFDO01BQ0QsT0FBT3BQLE9BQUE7SUFDWDtJQUNBLElBQUksQ0FBQ21ULHNCQUFBLENBQXVCLE1BQU1jLGNBQUEsRUFBZ0IsR0FBRyxHQUFHO01BQ3BETixzQkFBQSxDQUF1QixNQUFNTSxjQUFBLEVBQWdCLElBQUl6SCxHQUFBLENBQUksS0FBSzZJLElBQUEsQ0FBSzJRLE1BQU0sR0FBRyxHQUFHO0lBQy9FO0lBQ0EsSUFBSSxDQUFDN1Msc0JBQUEsQ0FBdUIsTUFBTWMsY0FBQSxFQUFnQixHQUFHLEVBQUVSLEdBQUEsQ0FBSThCLEtBQUEsQ0FBTXZKLElBQUksR0FBRztNQUNwRSxNQUFNNkYsR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFLO01BQ3RDLE1BQU0yUixjQUFBLEdBQWlCLEtBQUs3UixJQUFBLENBQUsyUSxNQUFBO01BQ2pDaGpCLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CeEMsUUFBQSxFQUFVd0MsR0FBQSxDQUFJN0YsSUFBQTtRQUNkb0MsSUFBQSxFQUFNL00sWUFBQSxDQUFhdU8sa0JBQUE7UUFDbkJELE9BQUEsRUFBU3VYO01BQ2IsQ0FBQztNQUNELE9BQU9sbkIsT0FBQTtJQUNYO0lBQ0EsT0FBT0UsRUFBQSxDQUFHcVYsS0FBQSxDQUFNdkosSUFBSTtFQUN4QjtFQUNBLElBQUkyRCxRQUFBLEVBQVU7SUFDVixPQUFPLEtBQUswRixJQUFBLENBQUsyUSxNQUFBO0VBQ3JCO0VBQ0EsSUFBSTFoQixLQUFBLEVBQU87SUFDUCxNQUFNNmlCLFVBQUEsR0FBYSxDQUFDO0lBQ3BCLFdBQVcvZCxHQUFBLElBQU8sS0FBS2lNLElBQUEsQ0FBSzJRLE1BQUEsRUFBUTtNQUNoQ21CLFVBQUEsQ0FBVy9kLEdBQUEsSUFBT0EsR0FBQTtJQUN0QjtJQUNBLE9BQU8rZCxVQUFBO0VBQ1g7RUFDQSxJQUFJQyxPQUFBLEVBQVM7SUFDVCxNQUFNRCxVQUFBLEdBQWEsQ0FBQztJQUNwQixXQUFXL2QsR0FBQSxJQUFPLEtBQUtpTSxJQUFBLENBQUsyUSxNQUFBLEVBQVE7TUFDaENtQixVQUFBLENBQVcvZCxHQUFBLElBQU9BLEdBQUE7SUFDdEI7SUFDQSxPQUFPK2QsVUFBQTtFQUNYO0VBQ0EsSUFBSUUsS0FBQSxFQUFPO0lBQ1AsTUFBTUYsVUFBQSxHQUFhLENBQUM7SUFDcEIsV0FBVy9kLEdBQUEsSUFBTyxLQUFLaU0sSUFBQSxDQUFLMlEsTUFBQSxFQUFRO01BQ2hDbUIsVUFBQSxDQUFXL2QsR0FBQSxJQUFPQSxHQUFBO0lBQ3RCO0lBQ0EsT0FBTytkLFVBQUE7RUFDWDtFQUNBRyxRQUFRdEIsTUFBQSxFQUFRdUIsTUFBQSxHQUFTLEtBQUtsUyxJQUFBLEVBQU07SUFDaEMsT0FBT3JVLE9BQUEsQ0FBUWtPLE1BQUEsQ0FBTzhXLE1BQUEsRUFBUTtNQUMxQixHQUFHLEtBQUszUSxJQUFBO01BQ1IsR0FBR2tTO0lBQ1AsQ0FBQztFQUNMO0VBQ0FDLFFBQVF4QixNQUFBLEVBQVF1QixNQUFBLEdBQVMsS0FBS2xTLElBQUEsRUFBTTtJQUNoQyxPQUFPclUsT0FBQSxDQUFRa08sTUFBQSxDQUFPLEtBQUtTLE9BQUEsQ0FBUTFGLE1BQUEsQ0FBUXdkLEdBQUEsSUFBUSxDQUFDekIsTUFBQSxDQUFPOVYsUUFBQSxDQUFTdVgsR0FBRyxDQUFDLEdBQUc7TUFDdkUsR0FBRyxLQUFLcFMsSUFBQTtNQUNSLEdBQUdrUztJQUNQLENBQUM7RUFDTDtBQUNKO0FBQ0F0VCxjQUFBLEdBQWlCLG1CQUFJeVQsT0FBQSxDQUFRO0FBQzdCMW1CLE9BQUEsQ0FBUWtPLE1BQUEsR0FBUzRULGFBQUE7QUFDakIsSUFBTXBoQixhQUFBLEdBQU4sY0FBNEJyQixPQUFBLENBQVE7RUFDaEMyTSxZQUFBLEVBQWM7SUFDVixNQUFNLEdBQUc2UixTQUFTO0lBQ2xCM0ssb0JBQUEsQ0FBcUJ6TSxHQUFBLENBQUksTUFBTSxNQUFNO0VBQ3pDO0VBQ0FtTyxPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNb1MsZ0JBQUEsR0FBbUJoZixJQUFBLENBQUttQixrQkFBQSxDQUFtQixLQUFLdUwsSUFBQSxDQUFLMlEsTUFBTTtJQUNqRSxNQUFNblUsR0FBQSxHQUFNLEtBQUsyRCxlQUFBLENBQWdCRCxLQUFLO0lBQ3RDLElBQUkxRCxHQUFBLENBQUk0RCxVQUFBLEtBQWV4VCxhQUFBLENBQWM2RixNQUFBLElBQ2pDK0osR0FBQSxDQUFJNEQsVUFBQSxLQUFleFQsYUFBQSxDQUFjcUUsTUFBQSxFQUFRO01BQ3pDLE1BQU00Z0IsY0FBQSxHQUFpQnZlLElBQUEsQ0FBS3lCLFlBQUEsQ0FBYXVkLGdCQUFnQjtNQUN6RDNrQixpQkFBQSxDQUFrQjZPLEdBQUEsRUFBSztRQUNuQnZDLFFBQUEsRUFBVTNHLElBQUEsQ0FBSzBDLFVBQUEsQ0FBVzZiLGNBQWM7UUFDeEM3WCxRQUFBLEVBQVV3QyxHQUFBLENBQUk0RCxVQUFBO1FBQ2RySCxJQUFBLEVBQU0vTSxZQUFBLENBQWErTjtNQUN2QixDQUFDO01BQ0QsT0FBT3BQLE9BQUE7SUFDWDtJQUNBLElBQUksQ0FBQ21ULHNCQUFBLENBQXVCLE1BQU1lLG9CQUFBLEVBQXNCLEdBQUcsR0FBRztNQUMxRFAsc0JBQUEsQ0FBdUIsTUFBTU8sb0JBQUEsRUFBc0IsSUFBSTFILEdBQUEsQ0FBSTdELElBQUEsQ0FBS21CLGtCQUFBLENBQW1CLEtBQUt1TCxJQUFBLENBQUsyUSxNQUFNLENBQUMsR0FBRyxHQUFHO0lBQzlHO0lBQ0EsSUFBSSxDQUFDN1Msc0JBQUEsQ0FBdUIsTUFBTWUsb0JBQUEsRUFBc0IsR0FBRyxFQUFFVCxHQUFBLENBQUk4QixLQUFBLENBQU12SixJQUFJLEdBQUc7TUFDMUUsTUFBTWtiLGNBQUEsR0FBaUJ2ZSxJQUFBLENBQUt5QixZQUFBLENBQWF1ZCxnQkFBZ0I7TUFDekQza0IsaUJBQUEsQ0FBa0I2TyxHQUFBLEVBQUs7UUFDbkJ4QyxRQUFBLEVBQVV3QyxHQUFBLENBQUk3RixJQUFBO1FBQ2RvQyxJQUFBLEVBQU0vTSxZQUFBLENBQWF1TyxrQkFBQTtRQUNuQkQsT0FBQSxFQUFTdVg7TUFDYixDQUFDO01BQ0QsT0FBT2xuQixPQUFBO0lBQ1g7SUFDQSxPQUFPRSxFQUFBLENBQUdxVixLQUFBLENBQU12SixJQUFJO0VBQ3hCO0VBQ0EsSUFBSTFILEtBQUEsRUFBTztJQUNQLE9BQU8sS0FBSytRLElBQUEsQ0FBSzJRLE1BQUE7RUFDckI7QUFDSjtBQUNBOVIsb0JBQUEsR0FBdUIsbUJBQUl3VCxPQUFBLENBQVE7QUFDbkNobUIsYUFBQSxDQUFjd04sTUFBQSxHQUFTLENBQUM4VyxNQUFBLEVBQVE3VSxNQUFBLEtBQVc7RUFDdkMsT0FBTyxJQUFJelAsYUFBQSxDQUFjO0lBQ3JCc2tCLE1BQUE7SUFDQWhQLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCUSxhQUFBO0lBQ2hDLEdBQUdrVCxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTWhQLFVBQUEsR0FBTixjQUF5QjlCLE9BQUEsQ0FBUTtFQUM3QjBnQixPQUFBLEVBQVM7SUFDTCxPQUFPLEtBQUsxTCxJQUFBLENBQUs5RSxJQUFBO0VBQ3JCO0VBQ0FxRixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUUxRDtJQUFJLElBQUksS0FBSzZELG1CQUFBLENBQW9CSCxLQUFLO0lBQzlDLElBQUkxRCxHQUFBLENBQUk0RCxVQUFBLEtBQWV4VCxhQUFBLENBQWNtRixPQUFBLElBQ2pDeUssR0FBQSxDQUFJRSxNQUFBLENBQU9rRSxLQUFBLEtBQVUsT0FBTztNQUM1QmpULGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjbUYsT0FBQTtRQUN4QmlJLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsTUFBTTRuQixXQUFBLEdBQWMvVixHQUFBLENBQUk0RCxVQUFBLEtBQWV4VCxhQUFBLENBQWNtRixPQUFBLEdBQy9DeUssR0FBQSxDQUFJN0YsSUFBQSxHQUNKa0gsT0FBQSxDQUFRNEMsT0FBQSxDQUFRakUsR0FBQSxDQUFJN0YsSUFBSTtJQUM5QixPQUFPOUwsRUFBQSxDQUFHMG5CLFdBQUEsQ0FBWXZiLElBQUEsQ0FBTUwsSUFBQSxJQUFTO01BQ2pDLE9BQU8sS0FBS3FKLElBQUEsQ0FBSzlFLElBQUEsQ0FBSzhGLFVBQUEsQ0FBV3JLLElBQUEsRUFBTTtRQUNuQ3dDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7UUFDVnZLLFFBQUEsRUFBVTROLEdBQUEsQ0FBSUUsTUFBQSxDQUFPQztNQUN6QixDQUFDO0lBQ0wsQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUNBN1AsVUFBQSxDQUFXK00sTUFBQSxHQUFTLENBQUM2SCxNQUFBLEVBQVE1RixNQUFBLEtBQVc7RUFDcEMsT0FBTyxJQUFJaFAsVUFBQSxDQUFXO0lBQ2xCb08sSUFBQSxFQUFNd0csTUFBQTtJQUNOQyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQmlCLFVBQUE7SUFDaEMsR0FBR3lTLG1CQUFBLENBQW9CekQsTUFBTTtFQUNqQyxDQUFDO0FBQ0w7QUFDQSxJQUFNcFEsVUFBQSxHQUFOLGNBQXlCVixPQUFBLENBQVE7RUFDN0JnWSxVQUFBLEVBQVk7SUFDUixPQUFPLEtBQUtoRCxJQUFBLENBQUswQixNQUFBO0VBQ3JCO0VBQ0E4USxXQUFBLEVBQWE7SUFDVCxPQUFPLEtBQUt4UyxJQUFBLENBQUswQixNQUFBLENBQU8xQixJQUFBLENBQUsyQixRQUFBLEtBQWE5VixxQkFBQSxDQUFzQkgsVUFBQSxHQUMxRCxLQUFLc1UsSUFBQSxDQUFLMEIsTUFBQSxDQUFPOFEsVUFBQSxDQUFXLElBQzVCLEtBQUt4UyxJQUFBLENBQUswQixNQUFBO0VBQ3BCO0VBQ0FuQixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNO01BQUVqRCxNQUFBO01BQVFUO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDdEQsTUFBTW5SLE1BQUEsR0FBUyxLQUFLaVIsSUFBQSxDQUFLalIsTUFBQSxJQUFVO0lBQ25DLE1BQU0wakIsUUFBQSxHQUFXO01BQ2I3YSxRQUFBLEVBQVc4YSxHQUFBLElBQVE7UUFDZi9rQixpQkFBQSxDQUFrQjZPLEdBQUEsRUFBS2tXLEdBQUc7UUFDMUIsSUFBSUEsR0FBQSxDQUFJQyxLQUFBLEVBQU87VUFDWDFWLE1BQUEsQ0FBT0YsS0FBQSxDQUFNO1FBQ2pCLE9BQ0s7VUFDREUsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSjtNQUNBLElBQUkzRCxLQUFBLEVBQU87UUFDUCxPQUFPcUQsR0FBQSxDQUFJckQsSUFBQTtNQUNmO0lBQ0o7SUFDQXNaLFFBQUEsQ0FBUzdhLFFBQUEsR0FBVzZhLFFBQUEsQ0FBUzdhLFFBQUEsQ0FBU21LLElBQUEsQ0FBSzBRLFFBQVE7SUFDbkQsSUFBSTFqQixNQUFBLENBQU9tTSxJQUFBLEtBQVMsY0FBYztNQUM5QixNQUFNMFgsU0FBQSxHQUFZN2pCLE1BQUEsQ0FBT29ULFNBQUEsQ0FBVTNGLEdBQUEsQ0FBSTdGLElBQUEsRUFBTThiLFFBQVE7TUFDckQsSUFBSWpXLEdBQUEsQ0FBSUUsTUFBQSxDQUFPa0UsS0FBQSxFQUFPO1FBQ2xCLE9BQU8vQyxPQUFBLENBQVE0QyxPQUFBLENBQVFtUyxTQUFTLEVBQUU1YixJQUFBLENBQUssTUFBTzZiLFVBQUEsSUFBYztVQUN4RCxJQUFJNVYsTUFBQSxDQUFPNUcsS0FBQSxLQUFVLFdBQ2pCLE9BQU8xTCxPQUFBO1VBQ1gsTUFBTXlVLE1BQUEsR0FBUyxNQUFNLEtBQUtZLElBQUEsQ0FBSzBCLE1BQUEsQ0FBT2xCLFdBQUEsQ0FBWTtZQUM5QzdKLElBQUEsRUFBTWtjLFVBQUE7WUFDTjFaLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7WUFDVjRGLE1BQUEsRUFBUXZDO1VBQ1osQ0FBQztVQUNELElBQUk0QyxNQUFBLENBQU9uQyxNQUFBLEtBQVcsV0FDbEIsT0FBT3RTLE9BQUE7VUFDWCxJQUFJeVUsTUFBQSxDQUFPbkMsTUFBQSxLQUFXLFNBQ2xCLE9BQU94UyxLQUFBLENBQU0yVSxNQUFBLENBQU8vSSxLQUFLO1VBQzdCLElBQUk0RyxNQUFBLENBQU81RyxLQUFBLEtBQVUsU0FDakIsT0FBTzVMLEtBQUEsQ0FBTTJVLE1BQUEsQ0FBTy9JLEtBQUs7VUFDN0IsT0FBTytJLE1BQUE7UUFDWCxDQUFDO01BQ0wsT0FDSztRQUNELElBQUluQyxNQUFBLENBQU81RyxLQUFBLEtBQVUsV0FDakIsT0FBTzFMLE9BQUE7UUFDWCxNQUFNeVUsTUFBQSxHQUFTLEtBQUtZLElBQUEsQ0FBSzBCLE1BQUEsQ0FBT3BCLFVBQUEsQ0FBVztVQUN2QzNKLElBQUEsRUFBTWljLFNBQUE7VUFDTnpaLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7VUFDVjRGLE1BQUEsRUFBUXZDO1FBQ1osQ0FBQztRQUNELElBQUk0QyxNQUFBLENBQU9uQyxNQUFBLEtBQVcsV0FDbEIsT0FBT3RTLE9BQUE7UUFDWCxJQUFJeVUsTUFBQSxDQUFPbkMsTUFBQSxLQUFXLFNBQ2xCLE9BQU94UyxLQUFBLENBQU0yVSxNQUFBLENBQU8vSSxLQUFLO1FBQzdCLElBQUk0RyxNQUFBLENBQU81RyxLQUFBLEtBQVUsU0FDakIsT0FBTzVMLEtBQUEsQ0FBTTJVLE1BQUEsQ0FBTy9JLEtBQUs7UUFDN0IsT0FBTytJLE1BQUE7TUFDWDtJQUNKO0lBQ0EsSUFBSXJRLE1BQUEsQ0FBT21NLElBQUEsS0FBUyxjQUFjO01BQzlCLE1BQU00WCxpQkFBQSxHQUFxQkMsR0FBQSxJQUFRO1FBQy9CLE1BQU0zVCxNQUFBLEdBQVNyUSxNQUFBLENBQU95UyxVQUFBLENBQVd1UixHQUFBLEVBQUtOLFFBQVE7UUFDOUMsSUFBSWpXLEdBQUEsQ0FBSUUsTUFBQSxDQUFPa0UsS0FBQSxFQUFPO1VBQ2xCLE9BQU8vQyxPQUFBLENBQVE0QyxPQUFBLENBQVFyQixNQUFNO1FBQ2pDO1FBQ0EsSUFBSUEsTUFBQSxZQUFrQnZCLE9BQUEsRUFBUztVQUMzQixNQUFNLElBQUl6SixLQUFBLENBQU0sMkZBQTJGO1FBQy9HO1FBQ0EsT0FBTzJlLEdBQUE7TUFDWDtNQUNBLElBQUl2VyxHQUFBLENBQUlFLE1BQUEsQ0FBT2tFLEtBQUEsS0FBVSxPQUFPO1FBQzVCLE1BQU1vUyxLQUFBLEdBQVEsS0FBS2hULElBQUEsQ0FBSzBCLE1BQUEsQ0FBT3BCLFVBQUEsQ0FBVztVQUN0QzNKLElBQUEsRUFBTTZGLEdBQUEsQ0FBSTdGLElBQUE7VUFDVndDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7VUFDVjRGLE1BQUEsRUFBUXZDO1FBQ1osQ0FBQztRQUNELElBQUl3VyxLQUFBLENBQU0vVixNQUFBLEtBQVcsV0FDakIsT0FBT3RTLE9BQUE7UUFDWCxJQUFJcW9CLEtBQUEsQ0FBTS9WLE1BQUEsS0FBVyxTQUNqQkEsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFFakJnVyxpQkFBQSxDQUFrQkUsS0FBQSxDQUFNM2MsS0FBSztRQUM3QixPQUFPO1VBQUU0RyxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVHLEtBQUE7VUFBT0EsS0FBQSxFQUFPMmMsS0FBQSxDQUFNM2M7UUFBTTtNQUN0RCxPQUNLO1FBQ0QsT0FBTyxLQUFLMkosSUFBQSxDQUFLMEIsTUFBQSxDQUNabEIsV0FBQSxDQUFZO1VBQUU3SixJQUFBLEVBQU02RixHQUFBLENBQUk3RixJQUFBO1VBQU13QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO1VBQU00RixNQUFBLEVBQVF2QztRQUFJLENBQUMsRUFDM0R4RixJQUFBLENBQU1nYyxLQUFBLElBQVU7VUFDakIsSUFBSUEsS0FBQSxDQUFNL1YsTUFBQSxLQUFXLFdBQ2pCLE9BQU90UyxPQUFBO1VBQ1gsSUFBSXFvQixLQUFBLENBQU0vVixNQUFBLEtBQVcsU0FDakJBLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1VBQ2pCLE9BQU9nVyxpQkFBQSxDQUFrQkUsS0FBQSxDQUFNM2MsS0FBSyxFQUFFVyxJQUFBLENBQUssTUFBTTtZQUM3QyxPQUFPO2NBQUVpRyxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVHLEtBQUE7Y0FBT0EsS0FBQSxFQUFPMmMsS0FBQSxDQUFNM2M7WUFBTTtVQUN0RCxDQUFDO1FBQ0wsQ0FBQztNQUNMO0lBQ0o7SUFDQSxJQUFJdEgsTUFBQSxDQUFPbU0sSUFBQSxLQUFTLGFBQWE7TUFDN0IsSUFBSXNCLEdBQUEsQ0FBSUUsTUFBQSxDQUFPa0UsS0FBQSxLQUFVLE9BQU87UUFDNUIsTUFBTXFTLElBQUEsR0FBTyxLQUFLalQsSUFBQSxDQUFLMEIsTUFBQSxDQUFPcEIsVUFBQSxDQUFXO1VBQ3JDM0osSUFBQSxFQUFNNkYsR0FBQSxDQUFJN0YsSUFBQTtVQUNWd0MsSUFBQSxFQUFNcUQsR0FBQSxDQUFJckQsSUFBQTtVQUNWNEYsTUFBQSxFQUFRdkM7UUFDWixDQUFDO1FBQ0QsSUFBSSxDQUFDMU0sT0FBQSxDQUFRbWpCLElBQUksR0FDYixPQUFPQSxJQUFBO1FBQ1gsTUFBTTdULE1BQUEsR0FBU3JRLE1BQUEsQ0FBT29ULFNBQUEsQ0FBVThRLElBQUEsQ0FBSzVjLEtBQUEsRUFBT29jLFFBQVE7UUFDcEQsSUFBSXJULE1BQUEsWUFBa0J2QixPQUFBLEVBQVM7VUFDM0IsTUFBTSxJQUFJekosS0FBQSxDQUFNLGlHQUFpRztRQUNySDtRQUNBLE9BQU87VUFBRTZJLE1BQUEsRUFBUUEsTUFBQSxDQUFPNUcsS0FBQTtVQUFPQSxLQUFBLEVBQU8rSTtRQUFPO01BQ2pELE9BQ0s7UUFDRCxPQUFPLEtBQUtZLElBQUEsQ0FBSzBCLE1BQUEsQ0FDWmxCLFdBQUEsQ0FBWTtVQUFFN0osSUFBQSxFQUFNNkYsR0FBQSxDQUFJN0YsSUFBQTtVQUFNd0MsSUFBQSxFQUFNcUQsR0FBQSxDQUFJckQsSUFBQTtVQUFNNEYsTUFBQSxFQUFRdkM7UUFBSSxDQUFDLEVBQzNEeEYsSUFBQSxDQUFNaWMsSUFBQSxJQUFTO1VBQ2hCLElBQUksQ0FBQ25qQixPQUFBLENBQVFtakIsSUFBSSxHQUNiLE9BQU9BLElBQUE7VUFDWCxPQUFPcFYsT0FBQSxDQUFRNEMsT0FBQSxDQUFRMVIsTUFBQSxDQUFPb1QsU0FBQSxDQUFVOFEsSUFBQSxDQUFLNWMsS0FBQSxFQUFPb2MsUUFBUSxDQUFDLEVBQUV6YixJQUFBLENBQU1vSSxNQUFBLEtBQVk7WUFBRW5DLE1BQUEsRUFBUUEsTUFBQSxDQUFPNUcsS0FBQTtZQUFPQSxLQUFBLEVBQU8rSTtVQUFPLEVBQUU7UUFDN0gsQ0FBQztNQUNMO0lBQ0o7SUFDQTlMLElBQUEsQ0FBS1ksV0FBQSxDQUFZbkYsTUFBTTtFQUMzQjtBQUNKO0FBQ0FyRCxVQUFBLENBQVdtTyxNQUFBLEdBQVMsQ0FBQzZILE1BQUEsRUFBUTNTLE1BQUEsRUFBUStNLE1BQUEsS0FBVztFQUM1QyxPQUFPLElBQUlwUSxVQUFBLENBQVc7SUFDbEJnVyxNQUFBO0lBQ0FDLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCSCxVQUFBO0lBQ2hDcUQsTUFBQTtJQUNBLEdBQUd3USxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0FwUSxVQUFBLENBQVd3bkIsb0JBQUEsR0FBdUIsQ0FBQ3JoQixVQUFBLEVBQVk2UCxNQUFBLEVBQVE1RixNQUFBLEtBQVc7RUFDOUQsT0FBTyxJQUFJcFEsVUFBQSxDQUFXO0lBQ2xCZ1csTUFBQTtJQUNBM1MsTUFBQSxFQUFRO01BQUVtTSxJQUFBLEVBQU07TUFBY2lILFNBQUEsRUFBV3RRO0lBQVc7SUFDcEQ4UCxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQkgsVUFBQTtJQUNoQyxHQUFHNlQsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU1uUCxXQUFBLEdBQU4sY0FBMEIzQixPQUFBLENBQVE7RUFDOUJ1VixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNRSxVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZXhULGFBQUEsQ0FBY29HLFNBQUEsRUFBVztNQUN4QyxPQUFPbkksRUFBQSxDQUFHLE1BQVM7SUFDdkI7SUFDQSxPQUFPLEtBQUttVixJQUFBLENBQUtnRCxTQUFBLENBQVV6QyxNQUFBLENBQU9MLEtBQUs7RUFDM0M7RUFDQXdMLE9BQUEsRUFBUztJQUNMLE9BQU8sS0FBSzFMLElBQUEsQ0FBS2dELFNBQUE7RUFDckI7QUFDSjtBQUNBclcsV0FBQSxDQUFZa04sTUFBQSxHQUFTLENBQUNxQixJQUFBLEVBQU1ZLE1BQUEsS0FBVztFQUNuQyxPQUFPLElBQUluUCxXQUFBLENBQVk7SUFDbkJxVyxTQUFBLEVBQVc5SCxJQUFBO0lBQ1h5RyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQmMsV0FBQTtJQUNoQyxHQUFHNFMsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU10UCxXQUFBLEdBQU4sY0FBMEJ4QixPQUFBLENBQVE7RUFDOUJ1VixPQUFPTCxLQUFBLEVBQU87SUFDVixNQUFNRSxVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZXhULGFBQUEsQ0FBY2lFLElBQUEsRUFBTTtNQUNuQyxPQUFPaEcsRUFBQSxDQUFHLElBQUk7SUFDbEI7SUFDQSxPQUFPLEtBQUttVixJQUFBLENBQUtnRCxTQUFBLENBQVV6QyxNQUFBLENBQU9MLEtBQUs7RUFDM0M7RUFDQXdMLE9BQUEsRUFBUztJQUNMLE9BQU8sS0FBSzFMLElBQUEsQ0FBS2dELFNBQUE7RUFDckI7QUFDSjtBQUNBeFcsV0FBQSxDQUFZcU4sTUFBQSxHQUFTLENBQUNxQixJQUFBLEVBQU1ZLE1BQUEsS0FBVztFQUNuQyxPQUFPLElBQUl0UCxXQUFBLENBQVk7SUFDbkJ3VyxTQUFBLEVBQVc5SCxJQUFBO0lBQ1h5RyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQlcsV0FBQTtJQUNoQyxHQUFHK1MsbUJBQUEsQ0FBb0J6RCxNQUFNO0VBQ2pDLENBQUM7QUFDTDtBQUNBLElBQU10USxVQUFBLEdBQU4sY0FBeUJSLE9BQUEsQ0FBUTtFQUM3QnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU07TUFBRTFEO0lBQUksSUFBSSxLQUFLNkQsbUJBQUEsQ0FBb0JILEtBQUs7SUFDOUMsSUFBSXZKLElBQUEsR0FBTzZGLEdBQUEsQ0FBSTdGLElBQUE7SUFDZixJQUFJNkYsR0FBQSxDQUFJNEQsVUFBQSxLQUFleFQsYUFBQSxDQUFjb0csU0FBQSxFQUFXO01BQzVDMkQsSUFBQSxHQUFPLEtBQUtxSixJQUFBLENBQUtpRCxZQUFBLENBQWE7SUFDbEM7SUFDQSxPQUFPLEtBQUtqRCxJQUFBLENBQUtnRCxTQUFBLENBQVV6QyxNQUFBLENBQU87TUFDOUI1SixJQUFBO01BQ0F3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO01BQ1Y0RixNQUFBLEVBQVF2QztJQUNaLENBQUM7RUFDTDtFQUNBMlcsY0FBQSxFQUFnQjtJQUNaLE9BQU8sS0FBS25ULElBQUEsQ0FBS2dELFNBQUE7RUFDckI7QUFDSjtBQUNBeFgsVUFBQSxDQUFXcU8sTUFBQSxHQUFTLENBQUNxQixJQUFBLEVBQU1ZLE1BQUEsS0FBVztFQUNsQyxPQUFPLElBQUl0USxVQUFBLENBQVc7SUFDbEJ3WCxTQUFBLEVBQVc5SCxJQUFBO0lBQ1h5RyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQkwsVUFBQTtJQUNoQ3lYLFlBQUEsRUFBYyxPQUFPbkgsTUFBQSxDQUFPck4sT0FBQSxLQUFZLGFBQ2xDcU4sTUFBQSxDQUFPck4sT0FBQSxHQUNQLE1BQU1xTixNQUFBLENBQU9yTixPQUFBO0lBQ25CLEdBQUc4USxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTXhRLFFBQUEsR0FBTixjQUF1Qk4sT0FBQSxDQUFRO0VBQzNCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTTtNQUFFMUQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUU5QyxNQUFNa1QsTUFBQSxHQUFTO01BQ1gsR0FBRzVXLEdBQUE7TUFDSEUsTUFBQSxFQUFRO1FBQ0osR0FBR0YsR0FBQSxDQUFJRSxNQUFBO1FBQ1BoRixNQUFBLEVBQVE7TUFDWjtJQUNKO0lBQ0EsTUFBTTBILE1BQUEsR0FBUyxLQUFLWSxJQUFBLENBQUtnRCxTQUFBLENBQVV6QyxNQUFBLENBQU87TUFDdEM1SixJQUFBLEVBQU15YyxNQUFBLENBQU96YyxJQUFBO01BQ2J3QyxJQUFBLEVBQU1pYSxNQUFBLENBQU9qYSxJQUFBO01BQ2I0RixNQUFBLEVBQVE7UUFDSixHQUFHcVU7TUFDUDtJQUNKLENBQUM7SUFDRCxJQUFJeGpCLE9BQUEsQ0FBUXdQLE1BQU0sR0FBRztNQUNqQixPQUFPQSxNQUFBLENBQU9wSSxJQUFBLENBQU1vVSxPQUFBLElBQVc7UUFDM0IsT0FBTztVQUNIbk8sTUFBQSxFQUFRO1VBQ1I1RyxLQUFBLEVBQU8rVSxPQUFBLENBQU9uTyxNQUFBLEtBQVcsVUFDbkJtTyxPQUFBLENBQU8vVSxLQUFBLEdBQ1AsS0FBSzJKLElBQUEsQ0FBS21ELFVBQUEsQ0FBVztZQUNuQixJQUFJckssTUFBQSxFQUFRO2NBQ1IsT0FBTyxJQUFJbE4sUUFBQSxDQUFTd25CLE1BQUEsQ0FBTzFXLE1BQUEsQ0FBT2hGLE1BQU07WUFDNUM7WUFDQXdJLEtBQUEsRUFBT2tULE1BQUEsQ0FBT3pjO1VBQ2xCLENBQUM7UUFDVDtNQUNKLENBQUM7SUFDTCxPQUNLO01BQ0QsT0FBTztRQUNIc0csTUFBQSxFQUFRO1FBQ1I1RyxLQUFBLEVBQU8rSSxNQUFBLENBQU9uQyxNQUFBLEtBQVcsVUFDbkJtQyxNQUFBLENBQU8vSSxLQUFBLEdBQ1AsS0FBSzJKLElBQUEsQ0FBS21ELFVBQUEsQ0FBVztVQUNuQixJQUFJckssTUFBQSxFQUFRO1lBQ1IsT0FBTyxJQUFJbE4sUUFBQSxDQUFTd25CLE1BQUEsQ0FBTzFXLE1BQUEsQ0FBT2hGLE1BQU07VUFDNUM7VUFDQXdJLEtBQUEsRUFBT2tULE1BQUEsQ0FBT3pjO1FBQ2xCLENBQUM7TUFDVDtJQUNKO0VBQ0o7RUFDQTBjLFlBQUEsRUFBYztJQUNWLE9BQU8sS0FBS3JULElBQUEsQ0FBS2dELFNBQUE7RUFDckI7QUFDSjtBQUNBMVgsUUFBQSxDQUFTdU8sTUFBQSxHQUFTLENBQUNxQixJQUFBLEVBQU1ZLE1BQUEsS0FBVztFQUNoQyxPQUFPLElBQUl4USxRQUFBLENBQVM7SUFDaEIwWCxTQUFBLEVBQVc5SCxJQUFBO0lBQ1h5RyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQlAsUUFBQTtJQUNoQzZYLFVBQUEsRUFBWSxPQUFPckgsTUFBQSxDQUFPN0UsS0FBQSxLQUFVLGFBQWE2RSxNQUFBLENBQU83RSxLQUFBLEdBQVEsTUFBTTZFLE1BQUEsQ0FBTzdFLEtBQUE7SUFDN0UsR0FBR3NJLG1CQUFBLENBQW9CekQsTUFBTTtFQUNqQyxDQUFDO0FBQ0w7QUFDQSxJQUFNMVAsTUFBQSxHQUFOLGNBQXFCcEIsT0FBQSxDQUFRO0VBQ3pCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTUUsVUFBQSxHQUFhLEtBQUtILFFBQUEsQ0FBU0MsS0FBSztJQUN0QyxJQUFJRSxVQUFBLEtBQWV4VCxhQUFBLENBQWMyRCxHQUFBLEVBQUs7TUFDbEMsTUFBTWlNLEdBQUEsR0FBTSxLQUFLMkQsZUFBQSxDQUFnQkQsS0FBSztNQUN0Q3ZTLGlCQUFBLENBQWtCNk8sR0FBQSxFQUFLO1FBQ25CekQsSUFBQSxFQUFNL00sWUFBQSxDQUFhK04sWUFBQTtRQUNuQkUsUUFBQSxFQUFVck4sYUFBQSxDQUFjMkQsR0FBQTtRQUN4QnlKLFFBQUEsRUFBVXdDLEdBQUEsQ0FBSTREO01BQ2xCLENBQUM7TUFDRCxPQUFPelYsT0FBQTtJQUNYO0lBQ0EsT0FBTztNQUFFc1MsTUFBQSxFQUFRO01BQVM1RyxLQUFBLEVBQU82SixLQUFBLENBQU12SjtJQUFLO0VBQ2hEO0FBQ0o7QUFDQXZLLE1BQUEsQ0FBT3lOLE1BQUEsR0FBVWlDLE1BQUEsSUFBVztFQUN4QixPQUFPLElBQUkxUCxNQUFBLENBQU87SUFDZHVWLFFBQUEsRUFBVTlWLHFCQUFBLENBQXNCTyxNQUFBO0lBQ2hDLEdBQUdtVCxtQkFBQSxDQUFvQnpELE1BQU07RUFDakMsQ0FBQztBQUNMO0FBQ0EsSUFBTXRSLEtBQUEsR0FBUThvQixNQUFBLENBQU8sV0FBVztBQUNoQyxJQUFNam9CLFVBQUEsR0FBTixjQUF5QkwsT0FBQSxDQUFRO0VBQzdCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTTtNQUFFMUQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUM5QyxNQUFNdkosSUFBQSxHQUFPNkYsR0FBQSxDQUFJN0YsSUFBQTtJQUNqQixPQUFPLEtBQUtxSixJQUFBLENBQUs5RSxJQUFBLENBQUtxRixNQUFBLENBQU87TUFDekI1SixJQUFBO01BQ0F3QyxJQUFBLEVBQU1xRCxHQUFBLENBQUlyRCxJQUFBO01BQ1Y0RixNQUFBLEVBQVF2QztJQUNaLENBQUM7RUFDTDtFQUNBa1AsT0FBQSxFQUFTO0lBQ0wsT0FBTyxLQUFLMUwsSUFBQSxDQUFLOUUsSUFBQTtFQUNyQjtBQUNKO0FBQ0EsSUFBTXJPLFdBQUEsR0FBTixjQUEwQjdCLE9BQUEsQ0FBUTtFQUM5QnVWLE9BQU9MLEtBQUEsRUFBTztJQUNWLE1BQU07TUFBRWpELE1BQUE7TUFBUVQ7SUFBSSxJQUFJLEtBQUs2RCxtQkFBQSxDQUFvQkgsS0FBSztJQUN0RCxJQUFJMUQsR0FBQSxDQUFJRSxNQUFBLENBQU9rRSxLQUFBLEVBQU87TUFDbEIsTUFBTTJTLFdBQUEsR0FBYyxNQUFBQSxDQUFBLEtBQVk7UUFDNUIsTUFBTUMsUUFBQSxHQUFXLE1BQU0sS0FBS3hULElBQUEsQ0FBS3lULEVBQUEsQ0FBR2pULFdBQUEsQ0FBWTtVQUM1QzdKLElBQUEsRUFBTTZGLEdBQUEsQ0FBSTdGLElBQUE7VUFDVndDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7VUFDVjRGLE1BQUEsRUFBUXZDO1FBQ1osQ0FBQztRQUNELElBQUlnWCxRQUFBLENBQVN2VyxNQUFBLEtBQVcsV0FDcEIsT0FBT3RTLE9BQUE7UUFDWCxJQUFJNm9CLFFBQUEsQ0FBU3ZXLE1BQUEsS0FBVyxTQUFTO1VBQzdCQSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtVQUNiLE9BQU9yUyxLQUFBLENBQU0rb0IsUUFBQSxDQUFTbmQsS0FBSztRQUMvQixPQUNLO1VBQ0QsT0FBTyxLQUFLMkosSUFBQSxDQUFLMFQsR0FBQSxDQUFJbFQsV0FBQSxDQUFZO1lBQzdCN0osSUFBQSxFQUFNNmMsUUFBQSxDQUFTbmQsS0FBQTtZQUNmOEMsSUFBQSxFQUFNcUQsR0FBQSxDQUFJckQsSUFBQTtZQUNWNEYsTUFBQSxFQUFRdkM7VUFDWixDQUFDO1FBQ0w7TUFDSjtNQUNBLE9BQU8rVyxXQUFBLENBQVk7SUFDdkIsT0FDSztNQUNELE1BQU1DLFFBQUEsR0FBVyxLQUFLeFQsSUFBQSxDQUFLeVQsRUFBQSxDQUFHblQsVUFBQSxDQUFXO1FBQ3JDM0osSUFBQSxFQUFNNkYsR0FBQSxDQUFJN0YsSUFBQTtRQUNWd0MsSUFBQSxFQUFNcUQsR0FBQSxDQUFJckQsSUFBQTtRQUNWNEYsTUFBQSxFQUFRdkM7TUFDWixDQUFDO01BQ0QsSUFBSWdYLFFBQUEsQ0FBU3ZXLE1BQUEsS0FBVyxXQUNwQixPQUFPdFMsT0FBQTtNQUNYLElBQUk2b0IsUUFBQSxDQUFTdlcsTUFBQSxLQUFXLFNBQVM7UUFDN0JBLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2IsT0FBTztVQUNIRyxNQUFBLEVBQVE7VUFDUjVHLEtBQUEsRUFBT21kLFFBQUEsQ0FBU25kO1FBQ3BCO01BQ0osT0FDSztRQUNELE9BQU8sS0FBSzJKLElBQUEsQ0FBSzBULEdBQUEsQ0FBSXBULFVBQUEsQ0FBVztVQUM1QjNKLElBQUEsRUFBTTZjLFFBQUEsQ0FBU25kLEtBQUE7VUFDZjhDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7VUFDVjRGLE1BQUEsRUFBUXZDO1FBQ1osQ0FBQztNQUNMO0lBQ0o7RUFDSjtFQUNBLE9BQU8zQyxPQUFPMFUsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7SUFDaEIsT0FBTyxJQUFJM2hCLFdBQUEsQ0FBWTtNQUNuQjRtQixFQUFBLEVBQUlsRixDQUFBO01BQ0ptRixHQUFBLEVBQUtsRixDQUFBO01BQ0w3TSxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQmdCO0lBQ3BDLENBQUM7RUFDTDtBQUNKO0FBQ0EsSUFBTUUsV0FBQSxHQUFOLGNBQTBCL0IsT0FBQSxDQUFRO0VBQzlCdVYsT0FBT0wsS0FBQSxFQUFPO0lBQ1YsTUFBTWQsTUFBQSxHQUFTLEtBQUtZLElBQUEsQ0FBS2dELFNBQUEsQ0FBVXpDLE1BQUEsQ0FBT0wsS0FBSztJQUMvQyxNQUFNdEMsTUFBQSxHQUFVakgsSUFBQSxJQUFTO01BQ3JCLElBQUk3RyxPQUFBLENBQVE2RyxJQUFJLEdBQUc7UUFDZkEsSUFBQSxDQUFLTixLQUFBLEdBQVFwQixNQUFBLENBQU8ySSxNQUFBLENBQU9qSCxJQUFBLENBQUtOLEtBQUs7TUFDekM7TUFDQSxPQUFPTSxJQUFBO0lBQ1g7SUFDQSxPQUFPL0csT0FBQSxDQUFRd1AsTUFBTSxJQUNmQSxNQUFBLENBQU9wSSxJQUFBLENBQU1MLElBQUEsSUFBU2lILE1BQUEsQ0FBT2pILElBQUksQ0FBQyxJQUNsQ2lILE1BQUEsQ0FBT3dCLE1BQU07RUFDdkI7RUFDQXNNLE9BQUEsRUFBUztJQUNMLE9BQU8sS0FBSzFMLElBQUEsQ0FBS2dELFNBQUE7RUFDckI7QUFDSjtBQUNBalcsV0FBQSxDQUFZOE0sTUFBQSxHQUFTLENBQUNxQixJQUFBLEVBQU1ZLE1BQUEsS0FBVztFQUNuQyxPQUFPLElBQUkvTyxXQUFBLENBQVk7SUFDbkJpVyxTQUFBLEVBQVc5SCxJQUFBO0lBQ1h5RyxRQUFBLEVBQVU5VixxQkFBQSxDQUFzQmtCLFdBQUE7SUFDaEMsR0FBR3dTLG1CQUFBLENBQW9CekQsTUFBTTtFQUNqQyxDQUFDO0FBQ0w7QUFRQSxTQUFTNlgsWUFBWTdYLE1BQUEsRUFBUW5GLElBQUEsRUFBTTtFQUMvQixNQUFNaWQsQ0FBQSxHQUFJLE9BQU85WCxNQUFBLEtBQVcsYUFDdEJBLE1BQUEsQ0FBT25GLElBQUksSUFDWCxPQUFPbUYsTUFBQSxLQUFXLFdBQ2Q7SUFBRXBELE9BQUEsRUFBU29EO0VBQU8sSUFDbEJBLE1BQUE7RUFDVixNQUFNK1gsRUFBQSxHQUFLLE9BQU9ELENBQUEsS0FBTSxXQUFXO0lBQUVsYixPQUFBLEVBQVNrYjtFQUFFLElBQUlBLENBQUE7RUFDcEQsT0FBT0MsRUFBQTtBQUNYO0FBQ0EsU0FBU3hsQixPQUFPK1MsS0FBQSxFQUFPMFMsT0FBQSxHQUFVLENBQUMsR0FXbENuQixLQUFBLEVBQU87RUFDSCxJQUFJdlIsS0FBQSxFQUNBLE9BQU9uVyxNQUFBLENBQU80TyxNQUFBLENBQU8sRUFBRStILFdBQUEsQ0FBWSxDQUFDakwsSUFBQSxFQUFNNkYsR0FBQSxLQUFRO0lBQzlDLElBQUlzRCxFQUFBLEVBQUlDLEVBQUE7SUFDUixNQUFNZ1UsQ0FBQSxHQUFJM1MsS0FBQSxDQUFNekssSUFBSTtJQUNwQixJQUFJb2QsQ0FBQSxZQUFhbFcsT0FBQSxFQUFTO01BQ3RCLE9BQU9rVyxDQUFBLENBQUUvYyxJQUFBLENBQU1nZCxFQUFBLElBQU07UUFDakIsSUFBSUMsR0FBQSxFQUFJQyxHQUFBO1FBQ1IsSUFBSSxDQUFDRixFQUFBLEVBQUc7VUFDSixNQUFNbFksTUFBQSxHQUFTNlgsV0FBQSxDQUFZRyxPQUFBLEVBQVNuZCxJQUFJO1VBQ3hDLE1BQU13ZCxNQUFBLElBQVVELEdBQUEsSUFBTUQsR0FBQSxHQUFLblksTUFBQSxDQUFPNlcsS0FBQSxNQUFXLFFBQVFzQixHQUFBLEtBQU8sU0FBU0EsR0FBQSxHQUFLdEIsS0FBQSxNQUFXLFFBQVF1QixHQUFBLEtBQU8sU0FBU0EsR0FBQSxHQUFLO1VBQ2xIMVgsR0FBQSxDQUFJNUUsUUFBQSxDQUFTO1lBQUVtQixJQUFBLEVBQU07WUFBVSxHQUFHK0MsTUFBQTtZQUFRNlcsS0FBQSxFQUFPd0I7VUFBTyxDQUFDO1FBQzdEO01BQ0osQ0FBQztJQUNMO0lBQ0EsSUFBSSxDQUFDSixDQUFBLEVBQUc7TUFDSixNQUFNalksTUFBQSxHQUFTNlgsV0FBQSxDQUFZRyxPQUFBLEVBQVNuZCxJQUFJO01BQ3hDLE1BQU13ZCxNQUFBLElBQVVwVSxFQUFBLElBQU1ELEVBQUEsR0FBS2hFLE1BQUEsQ0FBTzZXLEtBQUEsTUFBVyxRQUFRN1MsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSzZTLEtBQUEsTUFBVyxRQUFRNVMsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSztNQUNsSHZELEdBQUEsQ0FBSTVFLFFBQUEsQ0FBUztRQUFFbUIsSUFBQSxFQUFNO1FBQVUsR0FBRytDLE1BQUE7UUFBUTZXLEtBQUEsRUFBT3dCO01BQU8sQ0FBQztJQUM3RDtJQUNBO0VBQ0osQ0FBQztFQUNMLE9BQU9scEIsTUFBQSxDQUFPNE8sTUFBQSxDQUFPO0FBQ3pCO0FBQ0EsSUFBTTlKLElBQUEsR0FBTztFQUNUb0IsTUFBQSxFQUFRekUsU0FBQSxDQUFVaWhCO0FBQ3RCO0FBQ0EsSUFBSTloQixxQkFBQTtBQUFBLENBQ0gsVUFBVXVvQixzQkFBQSxFQUF1QjtFQUM5QkEsc0JBQUEsQ0FBc0IsZUFBZTtFQUNyQ0Esc0JBQUEsQ0FBc0IsZUFBZTtFQUNyQ0Esc0JBQUEsQ0FBc0IsWUFBWTtFQUNsQ0Esc0JBQUEsQ0FBc0IsZUFBZTtFQUNyQ0Esc0JBQUEsQ0FBc0IsZ0JBQWdCO0VBQ3RDQSxzQkFBQSxDQUFzQixhQUFhO0VBQ25DQSxzQkFBQSxDQUFzQixlQUFlO0VBQ3JDQSxzQkFBQSxDQUFzQixrQkFBa0I7RUFDeENBLHNCQUFBLENBQXNCLGFBQWE7RUFDbkNBLHNCQUFBLENBQXNCLFlBQVk7RUFDbENBLHNCQUFBLENBQXNCLGdCQUFnQjtFQUN0Q0Esc0JBQUEsQ0FBc0IsY0FBYztFQUNwQ0Esc0JBQUEsQ0FBc0IsYUFBYTtFQUNuQ0Esc0JBQUEsQ0FBc0IsY0FBYztFQUNwQ0Esc0JBQUEsQ0FBc0IsZUFBZTtFQUNyQ0Esc0JBQUEsQ0FBc0IsY0FBYztFQUNwQ0Esc0JBQUEsQ0FBc0IsMkJBQTJCO0VBQ2pEQSxzQkFBQSxDQUFzQixxQkFBcUI7RUFDM0NBLHNCQUFBLENBQXNCLGNBQWM7RUFDcENBLHNCQUFBLENBQXNCLGVBQWU7RUFDckNBLHNCQUFBLENBQXNCLFlBQVk7RUFDbENBLHNCQUFBLENBQXNCLFlBQVk7RUFDbENBLHNCQUFBLENBQXNCLGlCQUFpQjtFQUN2Q0Esc0JBQUEsQ0FBc0IsYUFBYTtFQUNuQ0Esc0JBQUEsQ0FBc0IsZ0JBQWdCO0VBQ3RDQSxzQkFBQSxDQUFzQixhQUFhO0VBQ25DQSxzQkFBQSxDQUFzQixnQkFBZ0I7RUFDdENBLHNCQUFBLENBQXNCLG1CQUFtQjtFQUN6Q0Esc0JBQUEsQ0FBc0IsaUJBQWlCO0VBQ3ZDQSxzQkFBQSxDQUFzQixpQkFBaUI7RUFDdkNBLHNCQUFBLENBQXNCLGdCQUFnQjtFQUN0Q0Esc0JBQUEsQ0FBc0IsY0FBYztFQUNwQ0Esc0JBQUEsQ0FBc0IsZ0JBQWdCO0VBQ3RDQSxzQkFBQSxDQUFzQixnQkFBZ0I7RUFDdENBLHNCQUFBLENBQXNCLGlCQUFpQjtFQUN2Q0Esc0JBQUEsQ0FBc0IsaUJBQWlCO0FBQzNDLEdBQUd2b0IscUJBQUEsS0FBMEJBLHFCQUFBLEdBQXdCLENBQUMsRUFBRTtBQUN4RCxJQUFNMkQsY0FBQSxHQUFpQkEsQ0FFdkI2a0IsR0FBQSxFQUFLdlksTUFBQSxHQUFTO0VBQ1ZwRCxPQUFBLEVBQVMseUJBQXlCMmIsR0FBQSxDQUFJaGMsSUFBQTtBQUMxQyxNQUFNaEssTUFBQSxDQUFRc0ksSUFBQSxJQUFTQSxJQUFBLFlBQWdCMGQsR0FBQSxFQUFLdlksTUFBTTtBQUNsRCxJQUFNcEosVUFBQSxHQUFhdkYsU0FBQSxDQUFVME0sTUFBQTtBQUM3QixJQUFNM0ksVUFBQSxHQUFhekUsU0FBQSxDQUFVb04sTUFBQTtBQUM3QixJQUFNckosT0FBQSxHQUFVcEUsTUFBQSxDQUFPeU4sTUFBQTtBQUN2QixJQUFNNUwsVUFBQSxHQUFhOUMsU0FBQSxDQUFVME8sTUFBQTtBQUM3QixJQUFNMUwsV0FBQSxHQUFjL0MsVUFBQSxDQUFXeU8sTUFBQTtBQUMvQixJQUFNdEwsUUFBQSxHQUFXaEQsT0FBQSxDQUFRc08sTUFBQTtBQUN6QixJQUFNakgsVUFBQSxHQUFheEYsU0FBQSxDQUFVeU0sTUFBQTtBQUM3QixJQUFNNUcsYUFBQSxHQUFnQjFGLFlBQUEsQ0FBYXNNLE1BQUE7QUFDbkMsSUFBTS9JLFFBQUEsR0FBV3ZFLE9BQUEsQ0FBUXNOLE1BQUE7QUFDekIsSUFBTWhNLE9BQUEsR0FBVTVDLE1BQUEsQ0FBTzRPLE1BQUE7QUFDdkIsSUFBTXhHLFdBQUEsR0FBYzVGLFVBQUEsQ0FBV29NLE1BQUE7QUFDL0IsSUFBTWpKLFNBQUEsR0FBWXRFLFFBQUEsQ0FBU3VOLE1BQUE7QUFDM0IsSUFBTXJHLFFBQUEsR0FBVzlGLE9BQUEsQ0FBUW1NLE1BQUE7QUFDekIsSUFBTTlMLFNBQUEsR0FBWTdDLFFBQUEsQ0FBUzJPLE1BQUE7QUFDM0IsSUFBTXpJLFVBQUEsR0FBYTFFLFNBQUEsQ0FBVW1OLE1BQUE7QUFDN0IsSUFBTXJILGdCQUFBLEdBQW1COUYsU0FBQSxDQUFVZ2hCLFlBQUE7QUFDbkMsSUFBTXZhLFNBQUEsR0FBWTNGLFFBQUEsQ0FBU3FNLE1BQUE7QUFDM0IsSUFBTS9LLHNCQUFBLEdBQXlCckQscUJBQUEsQ0FBc0JvTyxNQUFBO0FBQ3JELElBQU1uSyxnQkFBQSxHQUFtQjNELGVBQUEsQ0FBZ0I4TixNQUFBO0FBQ3pDLElBQU05RyxTQUFBLEdBQVl6RixRQUFBLENBQVN1TSxNQUFBO0FBQzNCLElBQU0xSCxVQUFBLEdBQWFuRixTQUFBLENBQVU2TSxNQUFBO0FBQzdCLElBQU12SixPQUFBLEdBQVVuRSxNQUFBLENBQU8wTixNQUFBO0FBQ3ZCLElBQU14SCxPQUFBLEdBQVVuRixNQUFBLENBQU8yTSxNQUFBO0FBQ3ZCLElBQU16SyxZQUFBLEdBQWV0RCxXQUFBLENBQVkrTixNQUFBO0FBQ2pDLElBQU01SixRQUFBLEdBQVdoRSxPQUFBLENBQVE0TixNQUFBO0FBQ3pCLElBQU0xSixXQUFBLEdBQWNqRSxVQUFBLENBQVcyTixNQUFBO0FBQy9CLElBQU0zSyxRQUFBLEdBQVd2RCxPQUFBLENBQVFrTyxNQUFBO0FBQ3pCLElBQU1uSixjQUFBLEdBQWlCckUsYUFBQSxDQUFjd04sTUFBQTtBQUNyQyxJQUFNN0gsV0FBQSxHQUFjbEYsVUFBQSxDQUFXK00sTUFBQTtBQUMvQixJQUFNN0ssV0FBQSxHQUFjdEQsVUFBQSxDQUFXbU8sTUFBQTtBQUMvQixJQUFNcEksWUFBQSxHQUFlOUUsV0FBQSxDQUFZa04sTUFBQTtBQUNqQyxJQUFNN0ksWUFBQSxHQUFleEUsV0FBQSxDQUFZcU4sTUFBQTtBQUNqQyxJQUFNL0gsY0FBQSxHQUFpQnBHLFVBQUEsQ0FBV3duQixvQkFBQTtBQUNsQyxJQUFNdGhCLFlBQUEsR0FBZS9FLFdBQUEsQ0FBWWdOLE1BQUE7QUFDakMsSUFBTW5JLE9BQUEsR0FBVUEsQ0FBQSxLQUFNZ0IsVUFBQSxDQUFXLEVBQUVsQixRQUFBLENBQVM7QUFDNUMsSUFBTUQsT0FBQSxHQUFVQSxDQUFBLEtBQU1MLFVBQUEsQ0FBVyxFQUFFTSxRQUFBLENBQVM7QUFDNUMsSUFBTUYsUUFBQSxHQUFXQSxDQUFBLEtBQU1uRCxXQUFBLENBQVksRUFBRXFELFFBQUEsQ0FBUztBQUM5QyxJQUFNcEQsTUFBQSxHQUFTO0VBQ1hxRSxNQUFBLEVBQVVpZ0IsR0FBQSxJQUFRdmxCLFNBQUEsQ0FBVTBNLE1BQUEsQ0FBTztJQUFFLEdBQUc2WSxHQUFBO0lBQUt0a0IsTUFBQSxFQUFRO0VBQUssQ0FBQztFQUMzRDZDLE1BQUEsRUFBVXloQixHQUFBLElBQVFqbUIsU0FBQSxDQUFVb04sTUFBQSxDQUFPO0lBQUUsR0FBRzZZLEdBQUE7SUFBS3RrQixNQUFBLEVBQVE7RUFBSyxDQUFDO0VBQzNERixPQUFBLEVBQVd3a0IsR0FBQSxJQUFRdG5CLFVBQUEsQ0FBV3lPLE1BQUEsQ0FBTztJQUNqQyxHQUFHNlksR0FBQTtJQUNIdGtCLE1BQUEsRUFBUTtFQUNaLENBQUM7RUFDREosTUFBQSxFQUFVMGtCLEdBQUEsSUFBUXZuQixTQUFBLENBQVUwTyxNQUFBLENBQU87SUFBRSxHQUFHNlksR0FBQTtJQUFLdGtCLE1BQUEsRUFBUTtFQUFLLENBQUM7RUFDM0RFLElBQUEsRUFBUW9rQixHQUFBLElBQVFubkIsT0FBQSxDQUFRc08sTUFBQSxDQUFPO0lBQUUsR0FBRzZZLEdBQUE7SUFBS3RrQixNQUFBLEVBQVE7RUFBSyxDQUFDO0FBQzNEO0FBQ0EsSUFBTXhELEtBQUEsR0FBUUQsT0FBQTtBQUVkLElBQUk4SSxDQUFBLEdBQWlCLGVBQUF3QixNQUFBLENBQU8ySSxNQUFBLENBQU87RUFDL0J4RixTQUFBLEVBQVc7RUFDWHpKLGVBQUEsRUFBaUJDLFFBQUE7RUFDakIwRCxXQUFBO0VBQ0FqRCxXQUFBO0VBQ0FlLFNBQUE7RUFDQTFGLFVBQUE7RUFDQWlELGlCQUFBO0VBQ0E3QyxXQUFBO0VBQ0FILE9BQUE7RUFDQUYsS0FBQTtFQUNBSSxFQUFBO0VBQ0E4RSxTQUFBO0VBQ0FFLE9BQUE7RUFDQUMsT0FBQTtFQUNBRixPQUFBO0VBQ0EsSUFBSTBELEtBQUEsRUFBUTtJQUFFLE9BQU9BLElBQUE7RUFBTTtFQUMzQixJQUFJakMsV0FBQSxFQUFjO0lBQUUsT0FBT0EsVUFBQTtFQUFZO0VBQ3ZDekUsYUFBQTtFQUNBMEMsYUFBQTtFQUNBdEUsT0FBQTtFQUNBd0QsYUFBQTtFQUNBckIsU0FBQTtFQUNBVixTQUFBO0VBQ0F0QixTQUFBO0VBQ0FDLFVBQUE7RUFDQUcsT0FBQTtFQUNBNkIsU0FBQTtFQUNBRyxZQUFBO0VBQ0FoQixPQUFBO0VBQ0F0QixNQUFBO0VBQ0F3QyxVQUFBO0VBQ0FuQixRQUFBO0VBQ0FvQixPQUFBO0VBQ0F4QyxRQUFBO0VBQ0F3QixTQUFBO0VBQ0FjLFFBQUE7RUFDQS9CLHFCQUFBO0VBQ0FNLGVBQUE7RUFDQXVCLFFBQUE7RUFDQU4sU0FBQTtFQUNBYixNQUFBO0VBQ0FlLE1BQUE7RUFDQXBCLFdBQUE7RUFDQUcsT0FBQTtFQUNBQyxVQUFBO0VBQ0FQLE9BQUE7RUFDQVUsYUFBQTtFQUNBUyxVQUFBO0VBQ0FwQixVQUFBO0VBQ0EyQixjQUFBLEVBQWdCM0IsVUFBQTtFQUNoQmlCLFdBQUE7RUFDQUgsV0FBQTtFQUNBaEIsVUFBQTtFQUNBRixRQUFBO0VBQ0FjLE1BQUE7RUFDQTVCLEtBQUE7RUFDQWEsVUFBQTtFQUNBd0IsV0FBQTtFQUNBRSxXQUFBO0VBQ0FzQixNQUFBO0VBQ0F0RCxNQUFBLEVBQVFDLE9BQUE7RUFDUmlDLFNBQUEsRUFBV2pDLE9BQUE7RUFDWCtFLElBQUE7RUFDQSxJQUFJbEUsc0JBQUEsRUFBeUI7SUFBRSxPQUFPQSxxQkFBQTtFQUF1QjtFQUM3RHVDLE1BQUE7RUFDQVIsR0FBQSxFQUFLQyxPQUFBO0VBQ0xDLEtBQUEsRUFBT0MsU0FBQTtFQUNQQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsT0FBQSxFQUFTQyxXQUFBO0VBQ1RHLElBQUEsRUFBTUMsUUFBQTtFQUNOTSxrQkFBQSxFQUFvQkMsc0JBQUE7RUFDcEJDLE1BQUEsRUFBUUMsV0FBQTtFQUNSLFFBQVFFLFFBQUE7RUFDUixZQUFZRSxZQUFBO0VBQ1osY0FBY0ksY0FBQTtFQUNkQyxZQUFBLEVBQWNDLGdCQUFBO0VBQ2RNLElBQUEsRUFBTUMsUUFBQTtFQUNOQyxPQUFBLEVBQVNDLFdBQUE7RUFDVEUsR0FBQSxFQUFLQyxPQUFBO0VBQ0xDLEdBQUEsRUFBS0MsT0FBQTtFQUNMQyxVQUFBLEVBQVlDLGNBQUE7RUFDWkMsS0FBQSxFQUFPQyxTQUFBO0VBQ1AsUUFBUUUsUUFBQTtFQUNSQyxRQUFBLEVBQVVDLFlBQUE7RUFDVkMsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLE1BQUEsRUFBUUMsVUFBQTtFQUNSRSxRQUFBO0VBQ0FDLE9BQUE7RUFDQUMsUUFBQSxFQUFVQyxZQUFBO0VBQ1ZDLE9BQUE7RUFDQUMsUUFBQSxFQUFVQyxZQUFBO0VBQ1ZDLFVBQUEsRUFBWUMsY0FBQTtFQUNaQyxPQUFBLEVBQVNDLFdBQUE7RUFDVEUsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLEdBQUEsRUFBS0MsT0FBQTtFQUNMRSxZQUFBLEVBQWNDLGdCQUFBO0VBQ2RDLE1BQUEsRUFBUUMsVUFBQTtFQUNSQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsV0FBQSxFQUFhN0QsV0FBQTtFQUNiOEQsS0FBQSxFQUFPQyxTQUFBO0VBQ1AsYUFBYUUsYUFBQTtFQUNiQyxLQUFBLEVBQU9DLFNBQUE7RUFDUEMsT0FBQSxFQUFTQyxXQUFBO0VBQ1QsUUFBUUcsUUFBQTtFQUNSNUksS0FBQTtFQUNBb0IsWUFBQTtFQUNBaUcsYUFBQTtFQUNBckc7QUFDSixDQUFDOzs7QUQveUlELElBQU84QyxrQkFBQSxHQUFRK0UsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcC9vdXQifQ==