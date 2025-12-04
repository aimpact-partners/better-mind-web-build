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
      // second overwrites first
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
var ZodError = class _ZodError extends Error {
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
    if (!(value instanceof _ZodError)) {
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
    errorMaps: [ctx.common.contextualErrorMap,
    // contextual error map is first priority
    ctx.schemaErrorMap,
    // then schema-bound map if available
    overrideMap,
    // then global override map
    overrideMap === errorMap ? void 0 : errorMap
    // then global default map
    ].filter(x => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
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
    return _ParseStatus.mergeObjectSync(status, syncPairs);
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
var ZodString = class _ZodString extends ZodType {
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
    return new _ZodString({
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
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new _ZodString({
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
var ZodNumber = class _ZodNumber extends ZodType {
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
    return new _ZodNumber({
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
    return new _ZodNumber({
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
var ZodBigInt = class _ZodBigInt extends ZodType {
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
    return new _ZodBigInt({
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
    return new _ZodBigInt({
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
var ZodDate = class _ZodDate extends ZodType {
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
    return new _ZodDate({
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
var ZodArray = class _ZodArray extends ZodType {
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
    return new _ZodArray({
      ...this._def,
      minLength: {
        value: minLength,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: {
        value: maxLength,
        message: errorUtil.toString(message)
      }
    });
  }
  length(len, message) {
    return new _ZodArray({
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
var ZodObject = class _ZodObject extends ZodType {
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
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)
          //, ctx.child(key), value, getParsedType(value)
          ),
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
    return new _ZodObject({
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
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
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
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({
      [key]: schema
    });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
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
    return new _ZodObject({
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
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
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
    return new _ZodObject({
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
    return new _ZodObject({
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
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
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
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
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
    return new _ZodDiscriminatedUnion({
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
var ZodTuple = class _ZodTuple extends ZodType {
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
    return new _ZodTuple({
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
var ZodRecord = class _ZodRecord extends ZodType {
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
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
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
var ZodSet = class _ZodSet extends ZodType {
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
    return new _ZodSet({
      ...this._def,
      minSize: {
        value: minSize,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
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
var ZodFunction = class _ZodFunction extends ZodType {
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
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
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
    return new _ZodFunction({
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
var ZodEnum = class _ZodEnum extends ZodType {
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
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter(opt => !values.includes(opt)), {
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
var ZodPipeline = class _ZodPipeline extends ZodType {
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
    return new _ZodPipeline({
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yNC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC9saWIvaW5kZXgubWpzIl0sIm5hbWVzIjpbInpvZF8zXzI0XzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yNF80X2RlZmF1bHQiLCJkZWZhdWx0RXJyb3JNYXAiLCJlcnJvck1hcCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInV0aWwyIiwiYXNzZXJ0RXF1YWwiLCJ2YWwiLCJhc3NlcnRJcyIsIl9hcmciLCJhc3NlcnROZXZlciIsIl94IiwiRXJyb3IiLCJhcnJheVRvRW51bSIsIml0ZW1zIiwib2JqIiwiaXRlbSIsImdldFZhbGlkRW51bVZhbHVlcyIsInZhbGlkS2V5cyIsIm9iamVjdEtleXMiLCJmaWx0ZXIiLCJrIiwiZmlsdGVyZWQiLCJvYmplY3RWYWx1ZXMiLCJlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInB1c2giLCJmaW5kIiwiYXJyIiwiY2hlY2tlciIsImlzSW50ZWdlciIsIk51bWJlciIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiam9pblZhbHVlcyIsInNlcGFyYXRvciIsImpvaW4iLCJqc29uU3RyaW5naWZ5UmVwbGFjZXIiLCJfIiwidmFsdWUiLCJ0b1N0cmluZyIsIm9iamVjdFV0aWwyIiwibWVyZ2VTaGFwZXMiLCJmaXJzdCIsInNlY29uZCIsImRhdGEiLCJ0IiwiaXNOYU4iLCJBcnJheSIsImlzQXJyYXkiLCJ0aGVuIiwiY2F0Y2giLCJNYXAiLCJTZXQiLCJEYXRlIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwiX1pvZEVycm9yIiwiZXJyb3JzIiwiaXNzdWVzIiwiY29uc3RydWN0b3IiLCJhZGRJc3N1ZSIsInN1YiIsImFkZElzc3VlcyIsInN1YnMiLCJhY3R1YWxQcm90byIsIm5ldyIsInRhcmdldCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibmFtZSIsImZvcm1hdCIsIl9tYXBwZXIiLCJtYXBwZXIiLCJpc3N1ZSIsIm1lc3NhZ2UiLCJmaWVsZEVycm9ycyIsIl9lcnJvcnMiLCJwcm9jZXNzRXJyb3IiLCJlcnJvciIsImNvZGUiLCJ1bmlvbkVycm9ycyIsInJldHVyblR5cGVFcnJvciIsImFyZ3VtZW50c0Vycm9yIiwicGF0aCIsImxlbmd0aCIsImN1cnIiLCJpIiwiZWwiLCJ0ZXJtaW5hbCIsImFzc2VydCIsImlzRW1wdHkiLCJmbGF0dGVuIiwiZm9ybUVycm9ycyIsImNyZWF0ZSIsIl9jdHgiLCJpbnZhbGlkX3R5cGUiLCJyZWNlaXZlZCIsImV4cGVjdGVkIiwiaW52YWxpZF9saXRlcmFsIiwidW5yZWNvZ25pemVkX2tleXMiLCJpbnZhbGlkX3VuaW9uIiwiaW52YWxpZF91bmlvbl9kaXNjcmltaW5hdG9yIiwib3B0aW9ucyIsImludmFsaWRfZW51bV92YWx1ZSIsImludmFsaWRfYXJndW1lbnRzIiwiaW52YWxpZF9yZXR1cm5fdHlwZSIsImludmFsaWRfZGF0ZSIsImludmFsaWRfc3RyaW5nIiwidmFsaWRhdGlvbiIsImluY2x1ZGVzIiwicG9zaXRpb24iLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ0b29fc21hbGwiLCJ0eXBlIiwiZXhhY3QiLCJpbmNsdXNpdmUiLCJtaW5pbXVtIiwidG9vX2JpZyIsIm1heGltdW0iLCJpbnZhbGlkX2ludGVyc2VjdGlvbl90eXBlcyIsIm5vdF9tdWx0aXBsZV9vZiIsIm11bHRpcGxlT2YiLCJub3RfZmluaXRlIiwiZGVmYXVsdEVycm9yIiwib3ZlcnJpZGVFcnJvck1hcCIsInBhcmFtcyIsImVycm9yTWFwcyIsImlzc3VlRGF0YSIsImZ1bGxQYXRoIiwiZnVsbElzc3VlIiwiZXJyb3JNZXNzYWdlIiwibWFwcyIsIm0iLCJzbGljZSIsInJldmVyc2UiLCJjdHgiLCJvdmVycmlkZU1hcCIsImNvbW1vbiIsImNvbnRleHR1YWxFcnJvck1hcCIsInNjaGVtYUVycm9yTWFwIiwieCIsIl9QYXJzZVN0YXR1cyIsImRpcnR5IiwiYWJvcnQiLCJtZXJnZUFycmF5Iiwic3RhdHVzIiwicmVzdWx0cyIsImFycmF5VmFsdWUiLCJzIiwibWVyZ2VPYmplY3RBc3luYyIsInBhaXJzIiwic3luY1BhaXJzIiwicGFpciIsIm1lcmdlT2JqZWN0U3luYyIsImZpbmFsT2JqZWN0IiwiYWx3YXlzU2V0IiwiZnJlZXplIiwiUHJvbWlzZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiU3VwcHJlc3NlZEVycm9yIiwic3VwcHJlc3NlZCIsImVycm9yVXRpbCIsImVycm9yVXRpbDIiLCJlcnJUb09iaiIsIl9ab2RFbnVtX2NhY2hlIiwiX1pvZE5hdGl2ZUVudW1fY2FjaGUiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9hIiwiX2IiLCJfZGVmIiwiX2dldFR5cGUiLCJpbnB1dCIsIl9nZXRPclJldHVybkN0eCIsInBhcnNlZFR5cGUiLCJfcHJvY2Vzc0lucHV0UGFyYW1zIiwiX3BhcnNlU3luYyIsIl9wYXJzZSIsIl9wYXJzZUFzeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwic2FmZVBhcnNlIiwiYXN5bmMiLCJ+dmFsaWRhdGUiLCJlcnIiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlQXN5bmMiLCJzYWZlUGFyc2VBc3luYyIsIm1heWJlQXN5bmNSZXN1bHQiLCJyZWZpbmUiLCJjaGVjayIsImdldElzc3VlUHJvcGVydGllcyIsIl9yZWZpbmVtZW50Iiwic2V0RXJyb3IiLCJyZWZpbmVtZW50IiwicmVmaW5lbWVudERhdGEiLCJzY2hlbWEiLCJ0eXBlTmFtZSIsInN1cGVyUmVmaW5lIiwiZGVmIiwic3BhIiwiYmluZCIsIm51bGxpc2giLCJvciIsImFuZCIsInRyYW5zZm9ybSIsImJyYW5kIiwiZGVzY3JpYmUiLCJwaXBlIiwicmVhZG9ubHkiLCJpc051bGxhYmxlIiwiaXNPcHRpb25hbCIsInZlcnNpb24iLCJ2ZW5kb3IiLCJ2YWxpZGF0ZSIsIm9wdGlvbiIsImluY29taW5nIiwiZGVmYXVsdFZhbHVlRnVuYyIsImlubmVyVHlwZSIsImRlZmF1bHRWYWx1ZSIsImNhdGNoVmFsdWVGdW5jIiwiY2F0Y2hWYWx1ZSIsIlRoaXMiLCJjdWlkUmVnZXgiLCJjdWlkMlJlZ2V4IiwidWxpZFJlZ2V4IiwidXVpZFJlZ2V4IiwibmFub2lkUmVnZXgiLCJqd3RSZWdleCIsImR1cmF0aW9uUmVnZXgiLCJlbWFpbFJlZ2V4IiwiX2Vtb2ppUmVnZXgiLCJlbW9qaVJlZ2V4IiwiaXB2NFJlZ2V4IiwiaXB2NENpZHJSZWdleCIsImlwdjZSZWdleCIsImlwdjZDaWRyUmVnZXgiLCJiYXNlNjRSZWdleCIsImJhc2U2NHVybFJlZ2V4IiwiZGF0ZVJlZ2V4U291cmNlIiwiZGF0ZVJlZ2V4IiwiUmVnRXhwIiwidGltZVJlZ2V4U291cmNlIiwiYXJncyIsInNlY29uZHNSZWdleFNvdXJjZSIsInByZWNpc2lvbiIsInNlY29uZHNRdWFudGlmaWVyIiwidGltZVJlZ2V4IiwicmVnZXgiLCJvcHRzIiwibG9jYWwiLCJvZmZzZXQiLCJpc1ZhbGlkSVAiLCJpcCIsInRlc3QiLCJpc1ZhbGlkSldUIiwiand0IiwiYWxnIiwiaGVhZGVyIiwic3BsaXQiLCJiYXNlNjQiLCJwYWRFbmQiLCJkZWNvZGVkIiwiYXRvYiIsInR5cCIsImlzVmFsaWRDaWRyIiwiX1pvZFN0cmluZyIsIlN0cmluZyIsImN0eDIiLCJjaGVja3MiLCJ0b29CaWciLCJ0b29TbWFsbCIsIlVSTCIsImxhc3RJbmRleCIsInRlc3RSZXN1bHQiLCJ0cmltIiwidG9VcHBlckNhc2UiLCJfcmVnZXgiLCJfYWRkQ2hlY2siLCJlbWFpbCIsInVybCIsImVtb2ppIiwidXVpZCIsIm5hbm9pZCIsImN1aWQiLCJjdWlkMiIsInVsaWQiLCJiYXNlNjR1cmwiLCJjaWRyIiwiZGF0ZXRpbWUiLCJ0aW1lIiwiZHVyYXRpb24iLCJtaW4iLCJtaW5MZW5ndGgiLCJtYXgiLCJtYXhMZW5ndGgiLCJsZW4iLCJub25lbXB0eSIsImlzRGF0ZXRpbWUiLCJjaCIsImlzRGF0ZSIsImlzVGltZSIsImlzRHVyYXRpb24iLCJpc0VtYWlsIiwiaXNVUkwiLCJpc0Vtb2ppIiwiaXNVVUlEIiwiaXNOQU5PSUQiLCJpc0NVSUQiLCJpc0NVSUQyIiwiaXNVTElEIiwiaXNJUCIsImlzQ0lEUiIsImlzQmFzZTY0IiwiaXNCYXNlNjR1cmwiLCJmbG9hdFNhZmVSZW1haW5kZXIiLCJzdGVwIiwidmFsRGVjQ291bnQiLCJzdGVwRGVjQ291bnQiLCJkZWNDb3VudCIsInZhbEludCIsInBhcnNlSW50IiwidG9GaXhlZCIsInN0ZXBJbnQiLCJwb3ciLCJfWm9kTnVtYmVyIiwiYXJndW1lbnRzIiwiZ3RlIiwibHRlIiwic2V0TGltaXQiLCJndCIsImx0IiwiaW50IiwicG9zaXRpdmUiLCJuZWdhdGl2ZSIsIm5vbnBvc2l0aXZlIiwibm9ubmVnYXRpdmUiLCJmaW5pdGUiLCJzYWZlIiwiTUlOX1NBRkVfSU5URUdFUiIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNJbnQiLCJfWm9kQmlnSW50IiwiQmlnSW50IiwiX2dldEludmFsaWRJbnB1dCIsIkJvb2xlYW4iLCJfWm9kRGF0ZSIsImdldFRpbWUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9hbnkiLCJfdW5rbm93biIsIl9ab2RBcnJheSIsImV4YWN0TGVuZ3RoIiwiYWxsIiwicmVzdWx0MiIsImVsZW1lbnQiLCJkZWVwUGFydGlhbGlmeSIsIm5ld1NoYXBlIiwic2hhcGUiLCJmaWVsZFNjaGVtYSIsInVud3JhcCIsIl9ab2RPYmplY3QiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJrZXlWYWxpZGF0b3IiLCJzdHJpY3QiLCJfYyIsIl9kIiwic3RyaXAiLCJhdWdtZW50YXRpb24iLCJtZXJnZSIsIm1lcmdpbmciLCJtZXJnZWQiLCJzZXRLZXkiLCJpbmRleCIsInBpY2siLCJtYXNrIiwiZm9yRWFjaCIsIm9taXQiLCJkZWVwUGFydGlhbCIsInBhcnRpYWwiLCJyZXF1aXJlZCIsIm5ld0ZpZWxkIiwia2V5b2YiLCJjcmVhdGVab2RFbnVtIiwic3RyaWN0Q3JlYXRlIiwibGF6eWNyZWF0ZSIsImhhbmRsZVJlc3VsdHMiLCJjaGlsZEN0eCIsImlzc3VlczIiLCJ0eXBlcyIsImdldERpc2NyaW1pbmF0b3IiLCJfWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJmcm9tIiwiZGlzY3JpbWluYXRvclZhbHVlcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJpbmRleE9mIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJfWm9kVHVwbGUiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsIl9ab2RSZWNvcmQiLCJrZXlTY2hlbWEiLCJrZXlUeXBlIiwidmFsdWVTY2hlbWEiLCJ2YWx1ZVR5cGUiLCJ0aGlyZCIsImVudHJpZXMiLCJmaW5hbE1hcCIsIl9ab2RTZXQiLCJtaW5TaXplIiwic2l6ZSIsIm1heFNpemUiLCJmaW5hbGl6ZVNldCIsImVsZW1lbnRzMiIsInBhcnNlZFNldCIsImFkZCIsImVsZW1lbnRzIiwidmFsdWVzIiwiX1pvZEZ1bmN0aW9uIiwiaW1wbGVtZW50IiwibWFrZUFyZ3NJc3N1ZSIsIm1ha2VSZXR1cm5zSXNzdWUiLCJyZXR1cm5zIiwiZm4iLCJtZSIsInBhcnNlZEFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJwYXJzZWRSZXR1cm5zIiwicGFyYW1ldGVycyIsInJldHVyblR5cGUiLCJmdW5jIiwidmFsaWRhdGVkRnVuYyIsInN0cmljdEltcGxlbWVudCIsImdldHRlciIsImxhenlTY2hlbWEiLCJfWm9kRW51bSIsImV4cGVjdGVkVmFsdWVzIiwiZW51bVZhbHVlcyIsIlZhbHVlcyIsIkVudW0iLCJleHRyYWN0IiwibmV3RGVmIiwiZXhjbHVkZSIsIm9wdCIsIldlYWtNYXAiLCJuYXRpdmVFbnVtVmFsdWVzIiwicHJvbWlzaWZpZWQiLCJzb3VyY2VUeXBlIiwiY2hlY2tDdHgiLCJhcmciLCJmYXRhbCIsInByb2Nlc3NlZCIsInByb2Nlc3NlZDIiLCJleGVjdXRlUmVmaW5lbWVudCIsImFjYyIsImlubmVyIiwiYmFzZSIsImNyZWF0ZVdpdGhQcmVwcm9jZXNzIiwicmVtb3ZlRGVmYXVsdCIsIm5ld0N0eCIsInJlbW92ZUNhdGNoIiwiU3ltYm9sIiwiX1pvZFBpcGVsaW5lIiwiaGFuZGxlQXN5bmMiLCJpblJlc3VsdCIsImluIiwib3V0IiwiY2xlYW5QYXJhbXMiLCJwIiwicDIiLCJfcGFyYW1zIiwiciIsInIyIiwiX2EyIiwiX2IyIiwiX2ZhdGFsIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kMiIsImNscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxFQUFBLEVBQUFBLENBQUEsS0FBQUEsRUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFqQyxPQUFBO0VBQUFrQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQTNCLFVBQUE7RUFBQTRCLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUF0QyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBdUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsa0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQyxzQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBN0QsV0FBQTtFQUFBOEQsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFDLGFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQXRKLGtCQUFBOzs7QUNBQSxJQUFJZ0osSUFBQTtBQUFBLENBQ0gsVUFBVU8sS0FBQSxFQUFNO0VBQ2JBLEtBQUEsQ0FBS0MsV0FBQSxHQUFlQyxHQUFBLElBQVFBLEdBQUE7RUFDNUIsU0FBU0MsU0FBU0MsSUFBQSxFQUFNLENBQUU7RUFDMUJKLEtBQUEsQ0FBS0csUUFBQSxHQUFXQSxRQUFBO0VBQ2hCLFNBQVNFLFlBQVlDLEVBQUEsRUFBSTtJQUNyQixNQUFNLElBQUlDLEtBQUEsQ0FBTTtFQUNwQjtFQUNBUCxLQUFBLENBQUtLLFdBQUEsR0FBY0EsV0FBQTtFQUNuQkwsS0FBQSxDQUFLUSxXQUFBLEdBQWVDLEtBQUEsSUFBVTtJQUMxQixNQUFNQyxHQUFBLEdBQU0sQ0FBQztJQUNiLFdBQVdDLElBQUEsSUFBUUYsS0FBQSxFQUFPO01BQ3RCQyxHQUFBLENBQUlDLElBQUksSUFBSUEsSUFBQTtJQUNoQjtJQUNBLE9BQU9ELEdBQUE7RUFDWDtFQUNBVixLQUFBLENBQUtZLGtCQUFBLEdBQXNCRixHQUFBLElBQVE7SUFDL0IsTUFBTUcsU0FBQSxHQUFZYixLQUFBLENBQUtjLFVBQUEsQ0FBV0osR0FBRyxFQUFFSyxNQUFBLENBQVFDLENBQUEsSUFBTSxPQUFPTixHQUFBLENBQUlBLEdBQUEsQ0FBSU0sQ0FBQyxDQUFDLE1BQU0sUUFBUTtJQUNwRixNQUFNQyxRQUFBLEdBQVcsQ0FBQztJQUNsQixXQUFXRCxDQUFBLElBQUtILFNBQUEsRUFBVztNQUN2QkksUUFBQSxDQUFTRCxDQUFDLElBQUlOLEdBQUEsQ0FBSU0sQ0FBQztJQUN2QjtJQUNBLE9BQU9oQixLQUFBLENBQUtrQixZQUFBLENBQWFELFFBQVE7RUFDckM7RUFDQWpCLEtBQUEsQ0FBS2tCLFlBQUEsR0FBZ0JSLEdBQUEsSUFBUTtJQUN6QixPQUFPVixLQUFBLENBQUtjLFVBQUEsQ0FBV0osR0FBRyxFQUFFbEUsR0FBQSxDQUFJLFVBQVUyRSxDQUFBLEVBQUc7TUFDekMsT0FBT1QsR0FBQSxDQUFJUyxDQUFDO0lBQ2hCLENBQUM7RUFDTDtFQUNBbkIsS0FBQSxDQUFLYyxVQUFBLEdBQWEsT0FBT00sTUFBQSxDQUFPQyxJQUFBLEtBQVMsYUFDbENYLEdBQUEsSUFBUVUsTUFBQSxDQUFPQyxJQUFBLENBQUtYLEdBQUcsSUFDdkJwRCxNQUFBLElBQVc7SUFDVixNQUFNK0QsSUFBQSxHQUFPLEVBQUM7SUFDZCxXQUFXQyxHQUFBLElBQU9oRSxNQUFBLEVBQVE7TUFDdEIsSUFBSThELE1BQUEsQ0FBT0csU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBS25FLE1BQUEsRUFBUWdFLEdBQUcsR0FBRztRQUNuREQsSUFBQSxDQUFLSyxJQUFBLENBQUtKLEdBQUc7TUFDakI7SUFDSjtJQUNBLE9BQU9ELElBQUE7RUFDWDtFQUNKckIsS0FBQSxDQUFLMkIsSUFBQSxHQUFPLENBQUNDLEdBQUEsRUFBS0MsT0FBQSxLQUFZO0lBQzFCLFdBQVdsQixJQUFBLElBQVFpQixHQUFBLEVBQUs7TUFDcEIsSUFBSUMsT0FBQSxDQUFRbEIsSUFBSSxHQUNaLE9BQU9BLElBQUE7SUFDZjtJQUNBLE9BQU87RUFDWDtFQUNBWCxLQUFBLENBQUs4QixTQUFBLEdBQVksT0FBT0MsTUFBQSxDQUFPRCxTQUFBLEtBQWMsYUFDdEM1QixHQUFBLElBQVE2QixNQUFBLENBQU9ELFNBQUEsQ0FBVTVCLEdBQUcsSUFDNUJBLEdBQUEsSUFBUSxPQUFPQSxHQUFBLEtBQVEsWUFBWThCLFFBQUEsQ0FBUzlCLEdBQUcsS0FBSytCLElBQUEsQ0FBS0MsS0FBQSxDQUFNaEMsR0FBRyxNQUFNQSxHQUFBO0VBQy9FLFNBQVNpQyxXQUFXbEksS0FBQSxFQUFPbUksU0FBQSxHQUFZLE9BQU87SUFDMUMsT0FBT25JLEtBQUEsQ0FDRnVDLEdBQUEsQ0FBSzBELEdBQUEsSUFBUyxPQUFPQSxHQUFBLEtBQVEsV0FBVyxJQUFJQSxHQUFHLE1BQU1BLEdBQUksRUFDekRtQyxJQUFBLENBQUtELFNBQVM7RUFDdkI7RUFDQXBDLEtBQUEsQ0FBS21DLFVBQUEsR0FBYUEsVUFBQTtFQUNsQm5DLEtBQUEsQ0FBS3NDLHFCQUFBLEdBQXdCLENBQUNDLENBQUEsRUFBR0MsS0FBQSxLQUFVO0lBQ3ZDLElBQUksT0FBT0EsS0FBQSxLQUFVLFVBQVU7TUFDM0IsT0FBT0EsS0FBQSxDQUFNQyxRQUFBLENBQVM7SUFDMUI7SUFDQSxPQUFPRCxLQUFBO0VBQ1g7QUFDSixHQUFHL0MsSUFBQSxLQUFTQSxJQUFBLEdBQU8sQ0FBQyxFQUFFO0FBQ3RCLElBQUlqQyxVQUFBO0FBQUEsQ0FDSCxVQUFVa0YsV0FBQSxFQUFZO0VBQ25CQSxXQUFBLENBQVdDLFdBQUEsR0FBYyxDQUFDQyxLQUFBLEVBQU9DLE1BQUEsS0FBVztJQUN4QyxPQUFPO01BQ0gsR0FBR0QsS0FBQTtNQUNILEdBQUdDO01BQUE7SUFDUDtFQUNKO0FBQ0osR0FBR3JGLFVBQUEsS0FBZUEsVUFBQSxHQUFhLENBQUMsRUFBRTtBQUNsQyxJQUFNekUsYUFBQSxHQUFnQjBHLElBQUEsQ0FBS2UsV0FBQSxDQUFZLENBQ25DLFVBQ0EsT0FDQSxVQUNBLFdBQ0EsU0FDQSxXQUNBLFFBQ0EsVUFDQSxVQUNBLFlBQ0EsYUFDQSxRQUNBLFNBQ0EsVUFDQSxXQUNBLFdBQ0EsUUFDQSxTQUNBLE9BQ0EsTUFDSDtBQUNELElBQU0vRSxhQUFBLEdBQWlCcUgsSUFBQSxJQUFTO0VBQzVCLE1BQU1DLENBQUEsR0FBSSxPQUFPRCxJQUFBO0VBQ2pCLFFBQVFDLENBQUE7SUFDSixLQUFLO01BQ0QsT0FBT2hLLGFBQUEsQ0FBY29HLFNBQUE7SUFDekIsS0FBSztNQUNELE9BQU9wRyxhQUFBLENBQWM2RixNQUFBO0lBQ3pCLEtBQUs7TUFDRCxPQUFPb0UsS0FBQSxDQUFNRixJQUFJLElBQUkvSixhQUFBLENBQWMyRCxHQUFBLEdBQU0zRCxhQUFBLENBQWNxRSxNQUFBO0lBQzNELEtBQUs7TUFDRCxPQUFPckUsYUFBQSxDQUFjc0IsT0FBQTtJQUN6QixLQUFLO01BQ0QsT0FBT3RCLGFBQUEsQ0FBY3VDLFFBQUE7SUFDekIsS0FBSztNQUNELE9BQU92QyxhQUFBLENBQWNvQixNQUFBO0lBQ3pCLEtBQUs7TUFDRCxPQUFPcEIsYUFBQSxDQUFjK0YsTUFBQTtJQUN6QixLQUFLO01BQ0QsSUFBSW1FLEtBQUEsQ0FBTUMsT0FBQSxDQUFRSixJQUFJLEdBQUc7UUFDckIsT0FBTy9KLGFBQUEsQ0FBY2tCLEtBQUE7TUFDekI7TUFDQSxJQUFJNkksSUFBQSxLQUFTLE1BQU07UUFDZixPQUFPL0osYUFBQSxDQUFjaUUsSUFBQTtNQUN6QjtNQUNBLElBQUk4RixJQUFBLENBQUtLLElBQUEsSUFDTCxPQUFPTCxJQUFBLENBQUtLLElBQUEsS0FBUyxjQUNyQkwsSUFBQSxDQUFLTSxLQUFBLElBQ0wsT0FBT04sSUFBQSxDQUFLTSxLQUFBLEtBQVUsWUFBWTtRQUNsQyxPQUFPckssYUFBQSxDQUFjbUYsT0FBQTtNQUN6QjtNQUNBLElBQUksT0FBT21GLEdBQUEsS0FBUSxlQUFlUCxJQUFBLFlBQWdCTyxHQUFBLEVBQUs7UUFDbkQsT0FBT3RLLGFBQUEsQ0FBY3lELEdBQUE7TUFDekI7TUFDQSxJQUFJLE9BQU84RyxHQUFBLEtBQVEsZUFBZVIsSUFBQSxZQUFnQlEsR0FBQSxFQUFLO1FBQ25ELE9BQU92SyxhQUFBLENBQWN3RixHQUFBO01BQ3pCO01BQ0EsSUFBSSxPQUFPZ0YsSUFBQSxLQUFTLGVBQWVULElBQUEsWUFBZ0JTLElBQUEsRUFBTTtRQUNyRCxPQUFPeEssYUFBQSxDQUFjMEIsSUFBQTtNQUN6QjtNQUNBLE9BQU8xQixhQUFBLENBQWN1RSxNQUFBO0lBQ3pCO01BQ0ksT0FBT3ZFLGFBQUEsQ0FBY3dHLE9BQUE7RUFDN0I7QUFDSjtBQUVBLElBQU1wSCxZQUFBLEdBQWVzSCxJQUFBLENBQUtlLFdBQUEsQ0FBWSxDQUNsQyxnQkFDQSxtQkFDQSxVQUNBLGlCQUNBLCtCQUNBLHNCQUNBLHFCQUNBLHFCQUNBLHVCQUNBLGdCQUNBLGtCQUNBLGFBQ0EsV0FDQSw4QkFDQSxtQkFDQSxhQUNIO0FBQ0QsSUFBTXBDLGFBQUEsR0FBaUJzQyxHQUFBLElBQVE7RUFDM0IsTUFBTThDLElBQUEsR0FBT0MsSUFBQSxDQUFLQyxTQUFBLENBQVVoRCxHQUFBLEVBQUssTUFBTSxDQUFDO0VBQ3hDLE9BQU84QyxJQUFBLENBQUtHLE9BQUEsQ0FBUSxlQUFlLEtBQUs7QUFDNUM7QUFDQSxJQUFNNUwsUUFBQSxHQUFOLE1BQU02TCxTQUFBLFNBQWlCckQsS0FBQSxDQUFNO0VBQ3pCLElBQUlzRCxPQUFBLEVBQVM7SUFDVCxPQUFPLEtBQUtDLE1BQUE7RUFDaEI7RUFDQUMsWUFBWUQsTUFBQSxFQUFRO0lBQ2hCLE1BQU07SUFDTixLQUFLQSxNQUFBLEdBQVMsRUFBQztJQUNmLEtBQUtFLFFBQUEsR0FBWUMsR0FBQSxJQUFRO01BQ3JCLEtBQUtILE1BQUEsR0FBUyxDQUFDLEdBQUcsS0FBS0EsTUFBQSxFQUFRRyxHQUFHO0lBQ3RDO0lBQ0EsS0FBS0MsU0FBQSxHQUFZLENBQUNDLElBQUEsR0FBTyxFQUFDLEtBQU07TUFDNUIsS0FBS0wsTUFBQSxHQUFTLENBQUMsR0FBRyxLQUFLQSxNQUFBLEVBQVEsR0FBR0ssSUFBSTtJQUMxQztJQUNBLE1BQU1DLFdBQUEsR0FBY0MsR0FBQSxDQUFBQyxNQUFBLENBQVcvQyxTQUFBO0lBQy9CLElBQUlILE1BQUEsQ0FBT21ELGNBQUEsRUFBZ0I7TUFFdkJuRCxNQUFBLENBQU9tRCxjQUFBLENBQWUsTUFBTUgsV0FBVztJQUMzQyxPQUNLO01BQ0QsS0FBS0ksU0FBQSxHQUFZSixXQUFBO0lBQ3JCO0lBQ0EsS0FBS0ssSUFBQSxHQUFPO0lBQ1osS0FBS1gsTUFBQSxHQUFTQSxNQUFBO0VBQ2xCO0VBQ0FZLE9BQU9DLE9BQUEsRUFBUztJQUNaLE1BQU1DLE1BQUEsR0FBU0QsT0FBQSxJQUNYLFVBQVVFLEtBQUEsRUFBTztNQUNiLE9BQU9BLEtBQUEsQ0FBTUMsT0FBQTtJQUNqQjtJQUNKLE1BQU1DLFdBQUEsR0FBYztNQUFFQyxPQUFBLEVBQVM7SUFBRztJQUNsQyxNQUFNQyxZQUFBLEdBQWdCQyxLQUFBLElBQVU7TUFDNUIsV0FBV0wsS0FBQSxJQUFTSyxLQUFBLENBQU1wQixNQUFBLEVBQVE7UUFDOUIsSUFBSWUsS0FBQSxDQUFNTSxJQUFBLEtBQVMsaUJBQWlCO1VBQ2hDTixLQUFBLENBQU1PLFdBQUEsQ0FBWTVJLEdBQUEsQ0FBSXlJLFlBQVk7UUFDdEMsV0FDU0osS0FBQSxDQUFNTSxJQUFBLEtBQVMsdUJBQXVCO1VBQzNDRixZQUFBLENBQWFKLEtBQUEsQ0FBTVEsZUFBZTtRQUN0QyxXQUNTUixLQUFBLENBQU1NLElBQUEsS0FBUyxxQkFBcUI7VUFDekNGLFlBQUEsQ0FBYUosS0FBQSxDQUFNUyxjQUFjO1FBQ3JDLFdBQ1NULEtBQUEsQ0FBTVUsSUFBQSxDQUFLQyxNQUFBLEtBQVcsR0FBRztVQUM5QlQsV0FBQSxDQUFZQyxPQUFBLENBQVF0RCxJQUFBLENBQUtrRCxNQUFBLENBQU9DLEtBQUssQ0FBQztRQUMxQyxPQUNLO1VBQ0QsSUFBSVksSUFBQSxHQUFPVixXQUFBO1VBQ1gsSUFBSVcsQ0FBQSxHQUFJO1VBQ1IsT0FBT0EsQ0FBQSxHQUFJYixLQUFBLENBQU1VLElBQUEsQ0FBS0MsTUFBQSxFQUFRO1lBQzFCLE1BQU1HLEVBQUEsR0FBS2QsS0FBQSxDQUFNVSxJQUFBLENBQUtHLENBQUM7WUFDdkIsTUFBTUUsUUFBQSxHQUFXRixDQUFBLEtBQU1iLEtBQUEsQ0FBTVUsSUFBQSxDQUFLQyxNQUFBLEdBQVM7WUFDM0MsSUFBSSxDQUFDSSxRQUFBLEVBQVU7Y0FDWEgsSUFBQSxDQUFLRSxFQUFFLElBQUlGLElBQUEsQ0FBS0UsRUFBRSxLQUFLO2dCQUFFWCxPQUFBLEVBQVM7Y0FBRztZQVF6QyxPQUNLO2NBQ0RTLElBQUEsQ0FBS0UsRUFBRSxJQUFJRixJQUFBLENBQUtFLEVBQUUsS0FBSztnQkFBRVgsT0FBQSxFQUFTO2NBQUc7Y0FDckNTLElBQUEsQ0FBS0UsRUFBRSxFQUFFWCxPQUFBLENBQVF0RCxJQUFBLENBQUtrRCxNQUFBLENBQU9DLEtBQUssQ0FBQztZQUN2QztZQUNBWSxJQUFBLEdBQU9BLElBQUEsQ0FBS0UsRUFBRTtZQUNkRCxDQUFBO1VBQ0o7UUFDSjtNQUNKO0lBQ0o7SUFDQVQsWUFBQSxDQUFhLElBQUk7SUFDakIsT0FBT0YsV0FBQTtFQUNYO0VBQ0EsT0FBT2MsT0FBT3JELEtBQUEsRUFBTztJQUNqQixJQUFJLEVBQUVBLEtBQUEsWUFBaUJvQixTQUFBLEdBQVc7TUFDOUIsTUFBTSxJQUFJckQsS0FBQSxDQUFNLG1CQUFtQmlDLEtBQUssRUFBRTtJQUM5QztFQUNKO0VBQ0FDLFNBQUEsRUFBVztJQUNQLE9BQU8sS0FBS3FDLE9BQUE7RUFDaEI7RUFDQSxJQUFJQSxRQUFBLEVBQVU7SUFDVixPQUFPckIsSUFBQSxDQUFLQyxTQUFBLENBQVUsS0FBS0ksTUFBQSxFQUFRckUsSUFBQSxDQUFLNkMscUJBQUEsRUFBdUIsQ0FBQztFQUNwRTtFQUNBLElBQUl3RCxRQUFBLEVBQVU7SUFDVixPQUFPLEtBQUtoQyxNQUFBLENBQU8wQixNQUFBLEtBQVc7RUFDbEM7RUFDQU8sUUFBUW5CLE1BQUEsR0FBVUMsS0FBQSxJQUFVQSxLQUFBLENBQU1DLE9BQUEsRUFBUztJQUN2QyxNQUFNQyxXQUFBLEdBQWMsQ0FBQztJQUNyQixNQUFNaUIsVUFBQSxHQUFhLEVBQUM7SUFDcEIsV0FBVy9CLEdBQUEsSUFBTyxLQUFLSCxNQUFBLEVBQVE7TUFDM0IsSUFBSUcsR0FBQSxDQUFJc0IsSUFBQSxDQUFLQyxNQUFBLEdBQVMsR0FBRztRQUNyQlQsV0FBQSxDQUFZZCxHQUFBLENBQUlzQixJQUFBLENBQUssQ0FBQyxDQUFDLElBQUlSLFdBQUEsQ0FBWWQsR0FBQSxDQUFJc0IsSUFBQSxDQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUM7UUFDeERSLFdBQUEsQ0FBWWQsR0FBQSxDQUFJc0IsSUFBQSxDQUFLLENBQUMsQ0FBQyxFQUFFN0QsSUFBQSxDQUFLa0QsTUFBQSxDQUFPWCxHQUFHLENBQUM7TUFDN0MsT0FDSztRQUNEK0IsVUFBQSxDQUFXdEUsSUFBQSxDQUFLa0QsTUFBQSxDQUFPWCxHQUFHLENBQUM7TUFDL0I7SUFDSjtJQUNBLE9BQU87TUFBRStCLFVBQUE7TUFBWWpCO0lBQVk7RUFDckM7RUFDQSxJQUFJaUIsV0FBQSxFQUFhO0lBQ2IsT0FBTyxLQUFLRCxPQUFBLENBQVE7RUFDeEI7QUFDSjtBQUNBaE8sUUFBQSxDQUFTa08sTUFBQSxHQUFVbkMsTUFBQSxJQUFXO0VBQzFCLE1BQU1vQixLQUFBLEdBQVEsSUFBSW5OLFFBQUEsQ0FBUytMLE1BQU07RUFDakMsT0FBT29CLEtBQUE7QUFDWDtBQUVBLElBQU1uSyxRQUFBLEdBQVdBLENBQUM4SixLQUFBLEVBQU9xQixJQUFBLEtBQVM7RUFDOUIsSUFBSXBCLE9BQUE7RUFDSixRQUFRRCxLQUFBLENBQU1NLElBQUE7SUFDVixLQUFLaE4sWUFBQSxDQUFhZ08sWUFBQTtNQUNkLElBQUl0QixLQUFBLENBQU11QixRQUFBLEtBQWFyTixhQUFBLENBQWNvRyxTQUFBLEVBQVc7UUFDNUMyRixPQUFBLEdBQVU7TUFDZCxPQUNLO1FBQ0RBLE9BQUEsR0FBVSxZQUFZRCxLQUFBLENBQU13QixRQUFRLGNBQWN4QixLQUFBLENBQU11QixRQUFRO01BQ3BFO01BQ0E7SUFDSixLQUFLak8sWUFBQSxDQUFhbU8sZUFBQTtNQUNkeEIsT0FBQSxHQUFVLG1DQUFtQ3JCLElBQUEsQ0FBS0MsU0FBQSxDQUFVbUIsS0FBQSxDQUFNd0IsUUFBQSxFQUFVNUcsSUFBQSxDQUFLNkMscUJBQXFCLENBQUM7TUFDdkc7SUFDSixLQUFLbkssWUFBQSxDQUFhb08saUJBQUE7TUFDZHpCLE9BQUEsR0FBVSxrQ0FBa0NyRixJQUFBLENBQUswQyxVQUFBLENBQVcwQyxLQUFBLENBQU14RCxJQUFBLEVBQU0sSUFBSSxDQUFDO01BQzdFO0lBQ0osS0FBS2xKLFlBQUEsQ0FBYXFPLGFBQUE7TUFDZDFCLE9BQUEsR0FBVTtNQUNWO0lBQ0osS0FBSzNNLFlBQUEsQ0FBYXNPLDJCQUFBO01BQ2QzQixPQUFBLEdBQVUseUNBQXlDckYsSUFBQSxDQUFLMEMsVUFBQSxDQUFXMEMsS0FBQSxDQUFNNkIsT0FBTyxDQUFDO01BQ2pGO0lBQ0osS0FBS3ZPLFlBQUEsQ0FBYXdPLGtCQUFBO01BQ2Q3QixPQUFBLEdBQVUsZ0NBQWdDckYsSUFBQSxDQUFLMEMsVUFBQSxDQUFXMEMsS0FBQSxDQUFNNkIsT0FBTyxDQUFDLGVBQWU3QixLQUFBLENBQU11QixRQUFRO01BQ3JHO0lBQ0osS0FBS2pPLFlBQUEsQ0FBYXlPLGlCQUFBO01BQ2Q5QixPQUFBLEdBQVU7TUFDVjtJQUNKLEtBQUszTSxZQUFBLENBQWEwTyxtQkFBQTtNQUNkL0IsT0FBQSxHQUFVO01BQ1Y7SUFDSixLQUFLM00sWUFBQSxDQUFhMk8sWUFBQTtNQUNkaEMsT0FBQSxHQUFVO01BQ1Y7SUFDSixLQUFLM00sWUFBQSxDQUFhNE8sY0FBQTtNQUNkLElBQUksT0FBT2xDLEtBQUEsQ0FBTW1DLFVBQUEsS0FBZSxVQUFVO1FBQ3RDLElBQUksY0FBY25DLEtBQUEsQ0FBTW1DLFVBQUEsRUFBWTtVQUNoQ2xDLE9BQUEsR0FBVSxnQ0FBZ0NELEtBQUEsQ0FBTW1DLFVBQUEsQ0FBV0MsUUFBUTtVQUNuRSxJQUFJLE9BQU9wQyxLQUFBLENBQU1tQyxVQUFBLENBQVdFLFFBQUEsS0FBYSxVQUFVO1lBQy9DcEMsT0FBQSxHQUFVLEdBQUdBLE9BQU8sc0RBQXNERCxLQUFBLENBQU1tQyxVQUFBLENBQVdFLFFBQVE7VUFDdkc7UUFDSixXQUNTLGdCQUFnQnJDLEtBQUEsQ0FBTW1DLFVBQUEsRUFBWTtVQUN2Q2xDLE9BQUEsR0FBVSxtQ0FBbUNELEtBQUEsQ0FBTW1DLFVBQUEsQ0FBV0csVUFBVTtRQUM1RSxXQUNTLGNBQWN0QyxLQUFBLENBQU1tQyxVQUFBLEVBQVk7VUFDckNsQyxPQUFBLEdBQVUsaUNBQWlDRCxLQUFBLENBQU1tQyxVQUFBLENBQVdJLFFBQVE7UUFDeEUsT0FDSztVQUNEM0gsSUFBQSxDQUFLWSxXQUFBLENBQVl3RSxLQUFBLENBQU1tQyxVQUFVO1FBQ3JDO01BQ0osV0FDU25DLEtBQUEsQ0FBTW1DLFVBQUEsS0FBZSxTQUFTO1FBQ25DbEMsT0FBQSxHQUFVLFdBQVdELEtBQUEsQ0FBTW1DLFVBQVU7TUFDekMsT0FDSztRQUNEbEMsT0FBQSxHQUFVO01BQ2Q7TUFDQTtJQUNKLEtBQUszTSxZQUFBLENBQWFrUCxTQUFBO01BQ2QsSUFBSXhDLEtBQUEsQ0FBTXlDLElBQUEsS0FBUyxTQUNmeEMsT0FBQSxHQUFVLHNCQUFzQkQsS0FBQSxDQUFNMEMsS0FBQSxHQUFRLFlBQVkxQyxLQUFBLENBQU0yQyxTQUFBLEdBQVksYUFBYSxXQUFXLElBQUkzQyxLQUFBLENBQU00QyxPQUFPLHVCQUNoSDVDLEtBQUEsQ0FBTXlDLElBQUEsS0FBUyxVQUNwQnhDLE9BQUEsR0FBVSx1QkFBdUJELEtBQUEsQ0FBTTBDLEtBQUEsR0FBUSxZQUFZMUMsS0FBQSxDQUFNMkMsU0FBQSxHQUFZLGFBQWEsTUFBTSxJQUFJM0MsS0FBQSxDQUFNNEMsT0FBTyx5QkFDNUc1QyxLQUFBLENBQU15QyxJQUFBLEtBQVMsVUFDcEJ4QyxPQUFBLEdBQVUsa0JBQWtCRCxLQUFBLENBQU0wQyxLQUFBLEdBQzVCLHNCQUNBMUMsS0FBQSxDQUFNMkMsU0FBQSxHQUNGLDhCQUNBLGVBQWUsR0FBRzNDLEtBQUEsQ0FBTTRDLE9BQU8sWUFDcEM1QyxLQUFBLENBQU15QyxJQUFBLEtBQVMsUUFDcEJ4QyxPQUFBLEdBQVUsZ0JBQWdCRCxLQUFBLENBQU0wQyxLQUFBLEdBQzFCLHNCQUNBMUMsS0FBQSxDQUFNMkMsU0FBQSxHQUNGLDhCQUNBLGVBQWUsR0FBRyxJQUFJakUsSUFBQSxDQUFLeEIsTUFBQSxDQUFPOEMsS0FBQSxDQUFNNEMsT0FBTyxDQUFDLENBQUMsUUFFM0QzQyxPQUFBLEdBQVU7TUFDZDtJQUNKLEtBQUszTSxZQUFBLENBQWF1UCxPQUFBO01BQ2QsSUFBSTdDLEtBQUEsQ0FBTXlDLElBQUEsS0FBUyxTQUNmeEMsT0FBQSxHQUFVLHNCQUFzQkQsS0FBQSxDQUFNMEMsS0FBQSxHQUFRLFlBQVkxQyxLQUFBLENBQU0yQyxTQUFBLEdBQVksWUFBWSxXQUFXLElBQUkzQyxLQUFBLENBQU04QyxPQUFPLHVCQUMvRzlDLEtBQUEsQ0FBTXlDLElBQUEsS0FBUyxVQUNwQnhDLE9BQUEsR0FBVSx1QkFBdUJELEtBQUEsQ0FBTTBDLEtBQUEsR0FBUSxZQUFZMUMsS0FBQSxDQUFNMkMsU0FBQSxHQUFZLFlBQVksT0FBTyxJQUFJM0MsS0FBQSxDQUFNOEMsT0FBTyx5QkFDNUc5QyxLQUFBLENBQU15QyxJQUFBLEtBQVMsVUFDcEJ4QyxPQUFBLEdBQVUsa0JBQWtCRCxLQUFBLENBQU0wQyxLQUFBLEdBQzVCLFlBQ0ExQyxLQUFBLENBQU0yQyxTQUFBLEdBQ0YsMEJBQ0EsV0FBVyxJQUFJM0MsS0FBQSxDQUFNOEMsT0FBTyxZQUNqQzlDLEtBQUEsQ0FBTXlDLElBQUEsS0FBUyxVQUNwQnhDLE9BQUEsR0FBVSxrQkFBa0JELEtBQUEsQ0FBTTBDLEtBQUEsR0FDNUIsWUFDQTFDLEtBQUEsQ0FBTTJDLFNBQUEsR0FDRiwwQkFDQSxXQUFXLElBQUkzQyxLQUFBLENBQU04QyxPQUFPLFlBQ2pDOUMsS0FBQSxDQUFNeUMsSUFBQSxLQUFTLFFBQ3BCeEMsT0FBQSxHQUFVLGdCQUFnQkQsS0FBQSxDQUFNMEMsS0FBQSxHQUMxQixZQUNBMUMsS0FBQSxDQUFNMkMsU0FBQSxHQUNGLDZCQUNBLGNBQWMsSUFBSSxJQUFJakUsSUFBQSxDQUFLeEIsTUFBQSxDQUFPOEMsS0FBQSxDQUFNOEMsT0FBTyxDQUFDLENBQUMsUUFFM0Q3QyxPQUFBLEdBQVU7TUFDZDtJQUNKLEtBQUszTSxZQUFBLENBQWFxQyxNQUFBO01BQ2RzSyxPQUFBLEdBQVU7TUFDVjtJQUNKLEtBQUszTSxZQUFBLENBQWF5UCwwQkFBQTtNQUNkOUMsT0FBQSxHQUFVO01BQ1Y7SUFDSixLQUFLM00sWUFBQSxDQUFhMFAsZUFBQTtNQUNkL0MsT0FBQSxHQUFVLGdDQUFnQ0QsS0FBQSxDQUFNaUQsVUFBVTtNQUMxRDtJQUNKLEtBQUszUCxZQUFBLENBQWE0UCxVQUFBO01BQ2RqRCxPQUFBLEdBQVU7TUFDVjtJQUNKO01BQ0lBLE9BQUEsR0FBVW9CLElBQUEsQ0FBSzhCLFlBQUE7TUFDZnZJLElBQUEsQ0FBS1ksV0FBQSxDQUFZd0UsS0FBSztFQUM5QjtFQUNBLE9BQU87SUFBRUM7RUFBUTtBQUNyQjtBQUVBLElBQUltRCxnQkFBQSxHQUFtQmxOLFFBQUE7QUFDdkIsU0FBUzBELFlBQVlqQyxHQUFBLEVBQUs7RUFDdEJ5TCxnQkFBQSxHQUFtQnpMLEdBQUE7QUFDdkI7QUFDQSxTQUFTaEIsWUFBQSxFQUFjO0VBQ25CLE9BQU95TSxnQkFBQTtBQUNYO0FBRUEsSUFBTTFMLFNBQUEsR0FBYTJMLE1BQUEsSUFBVztFQUMxQixNQUFNO0lBQUVwRixJQUFBO0lBQU15QyxJQUFBO0lBQU00QyxTQUFBO0lBQVdDO0VBQVUsSUFBSUYsTUFBQTtFQUM3QyxNQUFNRyxRQUFBLEdBQVcsQ0FBQyxHQUFHOUMsSUFBQSxFQUFNLElBQUk2QyxTQUFBLENBQVU3QyxJQUFBLElBQVEsRUFBRztFQUNwRCxNQUFNK0MsU0FBQSxHQUFZO0lBQ2QsR0FBR0YsU0FBQTtJQUNIN0MsSUFBQSxFQUFNOEM7RUFDVjtFQUNBLElBQUlELFNBQUEsQ0FBVXRELE9BQUEsS0FBWSxRQUFXO0lBQ2pDLE9BQU87TUFDSCxHQUFHc0QsU0FBQTtNQUNIN0MsSUFBQSxFQUFNOEMsUUFBQTtNQUNOdkQsT0FBQSxFQUFTc0QsU0FBQSxDQUFVdEQ7SUFDdkI7RUFDSjtFQUNBLElBQUl5RCxZQUFBLEdBQWU7RUFDbkIsTUFBTUMsSUFBQSxHQUFPTCxTQUFBLENBQ1JwSCxNQUFBLENBQVEwSCxDQUFBLElBQU0sQ0FBQyxDQUFDQSxDQUFDLEVBQ2pCQyxLQUFBLENBQU0sRUFDTkMsT0FBQSxDQUFRO0VBQ2IsV0FBV25NLEdBQUEsSUFBT2dNLElBQUEsRUFBTTtJQUNwQkQsWUFBQSxHQUFlL0wsR0FBQSxDQUFJOEwsU0FBQSxFQUFXO01BQUV4RixJQUFBO01BQU1rRixZQUFBLEVBQWNPO0lBQWEsQ0FBQyxFQUFFekQsT0FBQTtFQUN4RTtFQUNBLE9BQU87SUFDSCxHQUFHc0QsU0FBQTtJQUNIN0MsSUFBQSxFQUFNOEMsUUFBQTtJQUNOdkQsT0FBQSxFQUFTeUQ7RUFDYjtBQUNKO0FBQ0EsSUFBTTFSLFVBQUEsR0FBYSxFQUFDO0FBQ3BCLFNBQVNpRCxrQkFBa0I4TyxHQUFBLEVBQUtSLFNBQUEsRUFBVztFQUN2QyxNQUFNUyxXQUFBLEdBQWNyTixXQUFBLENBQVk7RUFDaEMsTUFBTXFKLEtBQUEsR0FBUXRJLFNBQUEsQ0FBVTtJQUNwQjZMLFNBQUE7SUFDQXRGLElBQUEsRUFBTThGLEdBQUEsQ0FBSTlGLElBQUE7SUFDVnlDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7SUFDVjRDLFNBQUEsRUFBVyxDQUNQUyxHQUFBLENBQUlFLE1BQUEsQ0FBT0Msa0JBQUE7SUFBQTtJQUNYSCxHQUFBLENBQUlJLGNBQUE7SUFBQTtJQUNKSCxXQUFBO0lBQUE7SUFDQUEsV0FBQSxLQUFnQjlOLFFBQUEsR0FBVyxTQUFZQTtJQUFBO0lBQUEsQ0FDM0MsQ0FBRWdHLE1BQUEsQ0FBUWtJLENBQUEsSUFBTSxDQUFDLENBQUNBLENBQUM7RUFDdkIsQ0FBQztFQUNETCxHQUFBLENBQUlFLE1BQUEsQ0FBT2hGLE1BQUEsQ0FBT3BDLElBQUEsQ0FBS21ELEtBQUs7QUFDaEM7QUFDQSxJQUFNNU4sV0FBQSxHQUFOLE1BQU1pUyxZQUFBLENBQVk7RUFDZG5GLFlBQUEsRUFBYztJQUNWLEtBQUt2QixLQUFBLEdBQVE7RUFDakI7RUFDQTJHLE1BQUEsRUFBUTtJQUNKLElBQUksS0FBSzNHLEtBQUEsS0FBVSxTQUNmLEtBQUtBLEtBQUEsR0FBUTtFQUNyQjtFQUNBNEcsTUFBQSxFQUFRO0lBQ0osSUFBSSxLQUFLNUcsS0FBQSxLQUFVLFdBQ2YsS0FBS0EsS0FBQSxHQUFRO0VBQ3JCO0VBQ0EsT0FBTzZHLFdBQVdDLE1BQUEsRUFBUUMsT0FBQSxFQUFTO0lBQy9CLE1BQU1DLFVBQUEsR0FBYSxFQUFDO0lBQ3BCLFdBQVdDLENBQUEsSUFBS0YsT0FBQSxFQUFTO01BQ3JCLElBQUlFLENBQUEsQ0FBRUgsTUFBQSxLQUFXLFdBQ2IsT0FBT3hTLE9BQUE7TUFDWCxJQUFJMlMsQ0FBQSxDQUFFSCxNQUFBLEtBQVcsU0FDYkEsTUFBQSxDQUFPSCxLQUFBLENBQU07TUFDakJLLFVBQUEsQ0FBVzlILElBQUEsQ0FBSytILENBQUEsQ0FBRWpILEtBQUs7SUFDM0I7SUFDQSxPQUFPO01BQUU4RyxNQUFBLEVBQVFBLE1BQUEsQ0FBTzlHLEtBQUE7TUFBT0EsS0FBQSxFQUFPZ0g7SUFBVztFQUNyRDtFQUNBLGFBQWFFLGlCQUFpQkosTUFBQSxFQUFRSyxLQUFBLEVBQU87SUFDekMsTUFBTUMsU0FBQSxHQUFZLEVBQUM7SUFDbkIsV0FBV0MsSUFBQSxJQUFRRixLQUFBLEVBQU87TUFDdEIsTUFBTXJJLEdBQUEsR0FBTSxNQUFNdUksSUFBQSxDQUFLdkksR0FBQTtNQUN2QixNQUFNa0IsS0FBQSxHQUFRLE1BQU1xSCxJQUFBLENBQUtySCxLQUFBO01BQ3pCb0gsU0FBQSxDQUFVbEksSUFBQSxDQUFLO1FBQ1hKLEdBQUE7UUFDQWtCO01BQ0osQ0FBQztJQUNMO0lBQ0EsT0FBTzBHLFlBQUEsQ0FBWVksZUFBQSxDQUFnQlIsTUFBQSxFQUFRTSxTQUFTO0VBQ3hEO0VBQ0EsT0FBT0UsZ0JBQWdCUixNQUFBLEVBQVFLLEtBQUEsRUFBTztJQUNsQyxNQUFNSSxXQUFBLEdBQWMsQ0FBQztJQUNyQixXQUFXRixJQUFBLElBQVFGLEtBQUEsRUFBTztNQUN0QixNQUFNO1FBQUVySSxHQUFBO1FBQUtrQjtNQUFNLElBQUlxSCxJQUFBO01BQ3ZCLElBQUl2SSxHQUFBLENBQUlnSSxNQUFBLEtBQVcsV0FDZixPQUFPeFMsT0FBQTtNQUNYLElBQUkwTCxLQUFBLENBQU04RyxNQUFBLEtBQVcsV0FDakIsT0FBT3hTLE9BQUE7TUFDWCxJQUFJd0ssR0FBQSxDQUFJZ0ksTUFBQSxLQUFXLFNBQ2ZBLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO01BQ2pCLElBQUkzRyxLQUFBLENBQU04RyxNQUFBLEtBQVcsU0FDakJBLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO01BQ2pCLElBQUk3SCxHQUFBLENBQUlrQixLQUFBLEtBQVUsZ0JBQ2IsT0FBT0EsS0FBQSxDQUFNQSxLQUFBLEtBQVUsZUFBZXFILElBQUEsQ0FBS0csU0FBQSxHQUFZO1FBQ3hERCxXQUFBLENBQVl6SSxHQUFBLENBQUlrQixLQUFLLElBQUlBLEtBQUEsQ0FBTUEsS0FBQTtNQUNuQztJQUNKO0lBQ0EsT0FBTztNQUFFOEcsTUFBQSxFQUFRQSxNQUFBLENBQU85RyxLQUFBO01BQU9BLEtBQUEsRUFBT3VIO0lBQVk7RUFDdEQ7QUFDSjtBQUNBLElBQU1qVCxPQUFBLEdBQVVzSyxNQUFBLENBQU82SSxNQUFBLENBQU87RUFDMUJYLE1BQUEsRUFBUTtBQUNaLENBQUM7QUFDRCxJQUFNMVMsS0FBQSxHQUFTNEwsS0FBQSxLQUFXO0VBQUU4RyxNQUFBLEVBQVE7RUFBUzlHO0FBQU07QUFDbkQsSUFBTXhMLEVBQUEsR0FBTXdMLEtBQUEsS0FBVztFQUFFOEcsTUFBQSxFQUFRO0VBQVM5RztBQUFNO0FBQ2hELElBQU0xRyxTQUFBLEdBQWFtTixDQUFBLElBQU1BLENBQUEsQ0FBRUssTUFBQSxLQUFXO0FBQ3RDLElBQU10TixPQUFBLEdBQVdpTixDQUFBLElBQU1BLENBQUEsQ0FBRUssTUFBQSxLQUFXO0FBQ3BDLElBQU1yTixPQUFBLEdBQVdnTixDQUFBLElBQU1BLENBQUEsQ0FBRUssTUFBQSxLQUFXO0FBQ3BDLElBQU12TixPQUFBLEdBQVdrTixDQUFBLElBQU0sT0FBT2lCLE9BQUEsS0FBWSxlQUFlakIsQ0FBQSxZQUFhaUIsT0FBQTtBQWlCdEUsU0FBU0MsdUJBQXVCQyxRQUFBLEVBQVVDLEtBQUEsRUFBT0MsSUFBQSxFQUFNQyxDQUFBLEVBQUc7RUFDdEQsSUFBSUQsSUFBQSxLQUFTLE9BQU8sQ0FBQ0MsQ0FBQSxFQUFHLE1BQU0sSUFBSUMsU0FBQSxDQUFVLCtDQUErQztFQUMzRixJQUFJLE9BQU9ILEtBQUEsS0FBVSxhQUFhRCxRQUFBLEtBQWFDLEtBQUEsSUFBUyxDQUFDRSxDQUFBLEdBQUksQ0FBQ0YsS0FBQSxDQUFNSSxHQUFBLENBQUlMLFFBQVEsR0FBRyxNQUFNLElBQUlJLFNBQUEsQ0FBVSwwRUFBMEU7RUFDakwsT0FBT0YsSUFBQSxLQUFTLE1BQU1DLENBQUEsR0FBSUQsSUFBQSxLQUFTLE1BQU1DLENBQUEsQ0FBRTlJLElBQUEsQ0FBSzJJLFFBQVEsSUFBSUcsQ0FBQSxHQUFJQSxDQUFBLENBQUUvSCxLQUFBLEdBQVE2SCxLQUFBLENBQU1LLEdBQUEsQ0FBSU4sUUFBUTtBQUNoRztBQUVBLFNBQVNPLHVCQUF1QlAsUUFBQSxFQUFVQyxLQUFBLEVBQU83SCxLQUFBLEVBQU84SCxJQUFBLEVBQU1DLENBQUEsRUFBRztFQUM3RCxJQUFJRCxJQUFBLEtBQVMsS0FBSyxNQUFNLElBQUlFLFNBQUEsQ0FBVSxnQ0FBZ0M7RUFDdEUsSUFBSUYsSUFBQSxLQUFTLE9BQU8sQ0FBQ0MsQ0FBQSxFQUFHLE1BQU0sSUFBSUMsU0FBQSxDQUFVLCtDQUErQztFQUMzRixJQUFJLE9BQU9ILEtBQUEsS0FBVSxhQUFhRCxRQUFBLEtBQWFDLEtBQUEsSUFBUyxDQUFDRSxDQUFBLEdBQUksQ0FBQ0YsS0FBQSxDQUFNSSxHQUFBLENBQUlMLFFBQVEsR0FBRyxNQUFNLElBQUlJLFNBQUEsQ0FBVSx5RUFBeUU7RUFDaEwsT0FBUUYsSUFBQSxLQUFTLE1BQU1DLENBQUEsQ0FBRTlJLElBQUEsQ0FBSzJJLFFBQUEsRUFBVTVILEtBQUssSUFBSStILENBQUEsR0FBSUEsQ0FBQSxDQUFFL0gsS0FBQSxHQUFRQSxLQUFBLEdBQVE2SCxLQUFBLENBQU05TCxHQUFBLENBQUk2TCxRQUFBLEVBQVU1SCxLQUFLLEdBQUlBLEtBQUE7QUFDeEc7QUFFQSxPQUFPb0ksZUFBQSxLQUFvQixhQUFhQSxlQUFBLEdBQWtCLFVBQVUxRixLQUFBLEVBQU8yRixVQUFBLEVBQVkvRixPQUFBLEVBQVM7RUFDNUYsSUFBSTNELENBQUEsR0FBSSxJQUFJWixLQUFBLENBQU11RSxPQUFPO0VBQ3pCLE9BQU8zRCxDQUFBLENBQUVzRCxJQUFBLEdBQU8sbUJBQW1CdEQsQ0FBQSxDQUFFK0QsS0FBQSxHQUFRQSxLQUFBLEVBQU8vRCxDQUFBLENBQUUwSixVQUFBLEdBQWFBLFVBQUEsRUFBWTFKLENBQUE7QUFDbkY7QUFFQSxJQUFJMkosU0FBQTtBQUFBLENBQ0gsVUFBVUMsVUFBQSxFQUFXO0VBQ2xCQSxVQUFBLENBQVVDLFFBQUEsR0FBWWxHLE9BQUEsSUFBWSxPQUFPQSxPQUFBLEtBQVksV0FBVztJQUFFQTtFQUFRLElBQUlBLE9BQUEsSUFBVyxDQUFDO0VBQzFGaUcsVUFBQSxDQUFVdEksUUFBQSxHQUFZcUMsT0FBQSxJQUFZLE9BQU9BLE9BQUEsS0FBWSxXQUFXQSxPQUFBLEdBQVVBLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVFBLE9BQUE7QUFDeEksR0FBR2dHLFNBQUEsS0FBY0EsU0FBQSxHQUFZLENBQUMsRUFBRTtBQUVoQyxJQUFJRyxjQUFBLEVBQWdCQyxvQkFBQTtBQUNwQixJQUFNQyxrQkFBQSxHQUFOLE1BQXlCO0VBQ3JCcEgsWUFBWXFILE1BQUEsRUFBUTVJLEtBQUEsRUFBTytDLElBQUEsRUFBTWpFLEdBQUEsRUFBSztJQUNsQyxLQUFLK0osV0FBQSxHQUFjLEVBQUM7SUFDcEIsS0FBS0QsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS3RJLElBQUEsR0FBT04sS0FBQTtJQUNaLEtBQUs4SSxLQUFBLEdBQVEvRixJQUFBO0lBQ2IsS0FBS2dHLElBQUEsR0FBT2pLLEdBQUE7RUFDaEI7RUFDQSxJQUFJaUUsS0FBQSxFQUFPO0lBQ1AsSUFBSSxDQUFDLEtBQUs4RixXQUFBLENBQVk3RixNQUFBLEVBQVE7TUFDMUIsSUFBSSxLQUFLK0YsSUFBQSxZQUFnQnRJLEtBQUEsRUFBTztRQUM1QixLQUFLb0ksV0FBQSxDQUFZM0osSUFBQSxDQUFLLEdBQUcsS0FBSzRKLEtBQUEsRUFBTyxHQUFHLEtBQUtDLElBQUk7TUFDckQsT0FDSztRQUNELEtBQUtGLFdBQUEsQ0FBWTNKLElBQUEsQ0FBSyxHQUFHLEtBQUs0SixLQUFBLEVBQU8sS0FBS0MsSUFBSTtNQUNsRDtJQUNKO0lBQ0EsT0FBTyxLQUFLRixXQUFBO0VBQ2hCO0FBQ0o7QUFDQSxJQUFNRyxZQUFBLEdBQWVBLENBQUM1QyxHQUFBLEVBQUs2QyxNQUFBLEtBQVc7RUFDbEMsSUFBSXhQLE9BQUEsQ0FBUXdQLE1BQU0sR0FBRztJQUNqQixPQUFPO01BQUVDLE9BQUEsRUFBUztNQUFNNUksSUFBQSxFQUFNMkksTUFBQSxDQUFPako7SUFBTTtFQUMvQyxPQUNLO0lBQ0QsSUFBSSxDQUFDb0csR0FBQSxDQUFJRSxNQUFBLENBQU9oRixNQUFBLENBQU8wQixNQUFBLEVBQVE7TUFDM0IsTUFBTSxJQUFJakYsS0FBQSxDQUFNLDJDQUEyQztJQUMvRDtJQUNBLE9BQU87TUFDSG1MLE9BQUEsRUFBUztNQUNULElBQUl4RyxNQUFBLEVBQVE7UUFDUixJQUFJLEtBQUt5RyxNQUFBLEVBQ0wsT0FBTyxLQUFLQSxNQUFBO1FBQ2hCLE1BQU16RyxLQUFBLEdBQVEsSUFBSW5OLFFBQUEsQ0FBUzZRLEdBQUEsQ0FBSUUsTUFBQSxDQUFPaEYsTUFBTTtRQUM1QyxLQUFLNkgsTUFBQSxHQUFTekcsS0FBQTtRQUNkLE9BQU8sS0FBS3lHLE1BQUE7TUFDaEI7SUFDSjtFQUNKO0FBQ0o7QUFDQSxTQUFTQyxvQkFBb0IxRCxNQUFBLEVBQVE7RUFDakMsSUFBSSxDQUFDQSxNQUFBLEVBQ0QsT0FBTyxDQUFDO0VBQ1osTUFBTTtJQUFFbk4sUUFBQSxFQUFBOFEsU0FBQTtJQUFVQyxrQkFBQTtJQUFvQkMsY0FBQTtJQUFnQkM7RUFBWSxJQUFJOUQsTUFBQTtFQUN0RSxJQUFJMkQsU0FBQSxLQUFhQyxrQkFBQSxJQUFzQkMsY0FBQSxHQUFpQjtJQUNwRCxNQUFNLElBQUl4TCxLQUFBLENBQU0sMEZBQTBGO0VBQzlHO0VBQ0EsSUFBSXNMLFNBQUEsRUFDQSxPQUFPO0lBQUU5USxRQUFBLEVBQVU4USxTQUFBO0lBQVVHO0VBQVk7RUFDN0MsTUFBTUMsU0FBQSxHQUFZQSxDQUFDQyxHQUFBLEVBQUt0RCxHQUFBLEtBQVE7SUFDNUIsSUFBSXVELEVBQUEsRUFBSUMsRUFBQTtJQUNSLE1BQU07TUFBRXRIO0lBQVEsSUFBSW9ELE1BQUE7SUFDcEIsSUFBSWdFLEdBQUEsQ0FBSS9HLElBQUEsS0FBUyxzQkFBc0I7TUFDbkMsT0FBTztRQUFFTCxPQUFBLEVBQVNBLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBU0EsT0FBQSxHQUFVOEQsR0FBQSxDQUFJWjtNQUFhO0lBQzFGO0lBQ0EsSUFBSSxPQUFPWSxHQUFBLENBQUk5RixJQUFBLEtBQVMsYUFBYTtNQUNqQyxPQUFPO1FBQUVnQyxPQUFBLEdBQVVxSCxFQUFBLEdBQUtySCxPQUFBLEtBQVksUUFBUUEsT0FBQSxLQUFZLFNBQVNBLE9BQUEsR0FBVWlILGNBQUEsTUFBb0IsUUFBUUksRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBS3ZELEdBQUEsQ0FBSVo7TUFBYTtJQUNqSjtJQUNBLElBQUlrRSxHQUFBLENBQUkvRyxJQUFBLEtBQVMsZ0JBQ2IsT0FBTztNQUFFTCxPQUFBLEVBQVM4RCxHQUFBLENBQUlaO0lBQWE7SUFDdkMsT0FBTztNQUFFbEQsT0FBQSxHQUFVc0gsRUFBQSxHQUFLdEgsT0FBQSxLQUFZLFFBQVFBLE9BQUEsS0FBWSxTQUFTQSxPQUFBLEdBQVVnSCxrQkFBQSxNQUF3QixRQUFRTSxFQUFBLEtBQU8sU0FBU0EsRUFBQSxHQUFLeEQsR0FBQSxDQUFJWjtJQUFhO0VBQ3JKO0VBQ0EsT0FBTztJQUFFak4sUUFBQSxFQUFVa1IsU0FBQTtJQUFXRDtFQUFZO0FBQzlDO0FBQ0EsSUFBTTdVLE9BQUEsR0FBTixNQUFjO0VBQ1YsSUFBSTZVLFlBQUEsRUFBYztJQUNkLE9BQU8sS0FBS0ssSUFBQSxDQUFLTCxXQUFBO0VBQ3JCO0VBQ0FNLFNBQVNDLEtBQUEsRUFBTztJQUNaLE9BQU85USxhQUFBLENBQWM4USxLQUFBLENBQU16SixJQUFJO0VBQ25DO0VBQ0EwSixnQkFBZ0JELEtBQUEsRUFBTzNELEdBQUEsRUFBSztJQUN4QixPQUFRQSxHQUFBLElBQU87TUFDWEUsTUFBQSxFQUFReUQsS0FBQSxDQUFNbkIsTUFBQSxDQUFPdEMsTUFBQTtNQUNyQmhHLElBQUEsRUFBTXlKLEtBQUEsQ0FBTXpKLElBQUE7TUFDWjJKLFVBQUEsRUFBWWhSLGFBQUEsQ0FBYzhRLEtBQUEsQ0FBTXpKLElBQUk7TUFDcENrRyxjQUFBLEVBQWdCLEtBQUtxRCxJQUFBLENBQUt0UixRQUFBO01BQzFCd0ssSUFBQSxFQUFNZ0gsS0FBQSxDQUFNaEgsSUFBQTtNQUNaNkYsTUFBQSxFQUFRbUIsS0FBQSxDQUFNbkI7SUFDbEI7RUFDSjtFQUNBc0Isb0JBQW9CSCxLQUFBLEVBQU87SUFDdkIsT0FBTztNQUNIakQsTUFBQSxFQUFRLElBQUlyUyxXQUFBLENBQVk7TUFDeEIyUixHQUFBLEVBQUs7UUFDREUsTUFBQSxFQUFReUQsS0FBQSxDQUFNbkIsTUFBQSxDQUFPdEMsTUFBQTtRQUNyQmhHLElBQUEsRUFBTXlKLEtBQUEsQ0FBTXpKLElBQUE7UUFDWjJKLFVBQUEsRUFBWWhSLGFBQUEsQ0FBYzhRLEtBQUEsQ0FBTXpKLElBQUk7UUFDcENrRyxjQUFBLEVBQWdCLEtBQUtxRCxJQUFBLENBQUt0UixRQUFBO1FBQzFCd0ssSUFBQSxFQUFNZ0gsS0FBQSxDQUFNaEgsSUFBQTtRQUNaNkYsTUFBQSxFQUFRbUIsS0FBQSxDQUFNbkI7TUFDbEI7SUFDSjtFQUNKO0VBQ0F1QixXQUFXSixLQUFBLEVBQU87SUFDZCxNQUFNZCxNQUFBLEdBQVMsS0FBS21CLE1BQUEsQ0FBT0wsS0FBSztJQUNoQyxJQUFJeFEsT0FBQSxDQUFRMFAsTUFBTSxHQUFHO01BQ2pCLE1BQU0sSUFBSWxMLEtBQUEsQ0FBTSx3Q0FBd0M7SUFDNUQ7SUFDQSxPQUFPa0wsTUFBQTtFQUNYO0VBQ0FvQixZQUFZTixLQUFBLEVBQU87SUFDZixNQUFNZCxNQUFBLEdBQVMsS0FBS21CLE1BQUEsQ0FBT0wsS0FBSztJQUNoQyxPQUFPckMsT0FBQSxDQUFRNEMsT0FBQSxDQUFRckIsTUFBTTtFQUNqQztFQUNBc0IsTUFBTWpLLElBQUEsRUFBTW9GLE1BQUEsRUFBUTtJQUNoQixNQUFNdUQsTUFBQSxHQUFTLEtBQUt1QixTQUFBLENBQVVsSyxJQUFBLEVBQU1vRixNQUFNO0lBQzFDLElBQUl1RCxNQUFBLENBQU9DLE9BQUEsRUFDUCxPQUFPRCxNQUFBLENBQU8zSSxJQUFBO0lBQ2xCLE1BQU0ySSxNQUFBLENBQU92RyxLQUFBO0VBQ2pCO0VBQ0E4SCxVQUFVbEssSUFBQSxFQUFNb0YsTUFBQSxFQUFRO0lBQ3BCLElBQUlpRSxFQUFBO0lBQ0osTUFBTXZELEdBQUEsR0FBTTtNQUNSRSxNQUFBLEVBQVE7UUFDSmhGLE1BQUEsRUFBUSxFQUFDO1FBQ1RtSixLQUFBLEdBQVFkLEVBQUEsR0FBS2pFLE1BQUEsS0FBVyxRQUFRQSxNQUFBLEtBQVcsU0FBUyxTQUFTQSxNQUFBLENBQU8rRSxLQUFBLE1BQVcsUUFBUWQsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSztRQUM1R3BELGtCQUFBLEVBQW9CYixNQUFBLEtBQVcsUUFBUUEsTUFBQSxLQUFXLFNBQVMsU0FBU0EsTUFBQSxDQUFPbk47TUFDL0U7TUFDQXdLLElBQUEsR0FBTzJDLE1BQUEsS0FBVyxRQUFRQSxNQUFBLEtBQVcsU0FBUyxTQUFTQSxNQUFBLENBQU8zQyxJQUFBLEtBQVMsRUFBQztNQUN4RXlELGNBQUEsRUFBZ0IsS0FBS3FELElBQUEsQ0FBS3RSLFFBQUE7TUFDMUJxUSxNQUFBLEVBQVE7TUFDUnRJLElBQUE7TUFDQTJKLFVBQUEsRUFBWWhSLGFBQUEsQ0FBY3FILElBQUk7SUFDbEM7SUFDQSxNQUFNMkksTUFBQSxHQUFTLEtBQUtrQixVQUFBLENBQVc7TUFBRTdKLElBQUE7TUFBTXlDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7TUFBTTZGLE1BQUEsRUFBUXhDO0lBQUksQ0FBQztJQUNwRSxPQUFPNEMsWUFBQSxDQUFhNUMsR0FBQSxFQUFLNkMsTUFBTTtFQUNuQztFQUNBLFdBQUF5QixDQUFZcEssSUFBQSxFQUFNO0lBQ2QsSUFBSXFKLEVBQUEsRUFBSUMsRUFBQTtJQUNSLE1BQU14RCxHQUFBLEdBQU07TUFDUkUsTUFBQSxFQUFRO1FBQ0poRixNQUFBLEVBQVEsRUFBQztRQUNUbUosS0FBQSxFQUFPLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRUE7TUFDL0I7TUFDQTFILElBQUEsRUFBTSxFQUFDO01BQ1B5RCxjQUFBLEVBQWdCLEtBQUtxRCxJQUFBLENBQUt0UixRQUFBO01BQzFCcVEsTUFBQSxFQUFRO01BQ1J0SSxJQUFBO01BQ0EySixVQUFBLEVBQVloUixhQUFBLENBQWNxSCxJQUFJO0lBQ2xDO0lBQ0EsSUFBSSxDQUFDLEtBQUssV0FBVyxFQUFFbUssS0FBQSxFQUFPO01BQzFCLElBQUk7UUFDQSxNQUFNeEIsTUFBQSxHQUFTLEtBQUtrQixVQUFBLENBQVc7VUFBRTdKLElBQUE7VUFBTXlDLElBQUEsRUFBTSxFQUFDO1VBQUc2RixNQUFBLEVBQVF4QztRQUFJLENBQUM7UUFDOUQsT0FBTzNNLE9BQUEsQ0FBUXdQLE1BQU0sSUFDZjtVQUNFakosS0FBQSxFQUFPaUosTUFBQSxDQUFPako7UUFDbEIsSUFDRTtVQUNFc0IsTUFBQSxFQUFROEUsR0FBQSxDQUFJRSxNQUFBLENBQU9oRjtRQUN2QjtNQUNSLFNBQ09xSixHQUFBLEVBQUs7UUFDUixLQUFLZixFQUFBLElBQU1ELEVBQUEsR0FBS2dCLEdBQUEsS0FBUSxRQUFRQSxHQUFBLEtBQVEsU0FBUyxTQUFTQSxHQUFBLENBQUlySSxPQUFBLE1BQWEsUUFBUXFILEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR2lCLFdBQUEsQ0FBWSxPQUFPLFFBQVFoQixFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUduRixRQUFBLENBQVMsYUFBYSxHQUFHO1VBQzNMLEtBQUssV0FBVyxFQUFFZ0csS0FBQSxHQUFRO1FBQzlCO1FBQ0FyRSxHQUFBLENBQUlFLE1BQUEsR0FBUztVQUNUaEYsTUFBQSxFQUFRLEVBQUM7VUFDVG1KLEtBQUEsRUFBTztRQUNYO01BQ0o7SUFDSjtJQUNBLE9BQU8sS0FBS0osV0FBQSxDQUFZO01BQUUvSixJQUFBO01BQU15QyxJQUFBLEVBQU0sRUFBQztNQUFHNkYsTUFBQSxFQUFReEM7SUFBSSxDQUFDLEVBQUV6RixJQUFBLENBQU1zSSxNQUFBLElBQVd4UCxPQUFBLENBQVF3UCxNQUFNLElBQ2xGO01BQ0VqSixLQUFBLEVBQU9pSixNQUFBLENBQU9qSjtJQUNsQixJQUNFO01BQ0VzQixNQUFBLEVBQVE4RSxHQUFBLENBQUlFLE1BQUEsQ0FBT2hGO0lBQ3ZCLENBQUM7RUFDVDtFQUNBLE1BQU11SixXQUFXdkssSUFBQSxFQUFNb0YsTUFBQSxFQUFRO0lBQzNCLE1BQU11RCxNQUFBLEdBQVMsTUFBTSxLQUFLNkIsY0FBQSxDQUFleEssSUFBQSxFQUFNb0YsTUFBTTtJQUNyRCxJQUFJdUQsTUFBQSxDQUFPQyxPQUFBLEVBQ1AsT0FBT0QsTUFBQSxDQUFPM0ksSUFBQTtJQUNsQixNQUFNMkksTUFBQSxDQUFPdkcsS0FBQTtFQUNqQjtFQUNBLE1BQU1vSSxlQUFleEssSUFBQSxFQUFNb0YsTUFBQSxFQUFRO0lBQy9CLE1BQU1VLEdBQUEsR0FBTTtNQUNSRSxNQUFBLEVBQVE7UUFDSmhGLE1BQUEsRUFBUSxFQUFDO1FBQ1RpRixrQkFBQSxFQUFvQmIsTUFBQSxLQUFXLFFBQVFBLE1BQUEsS0FBVyxTQUFTLFNBQVNBLE1BQUEsQ0FBT25OLFFBQUE7UUFDM0VrUyxLQUFBLEVBQU87TUFDWDtNQUNBMUgsSUFBQSxHQUFPMkMsTUFBQSxLQUFXLFFBQVFBLE1BQUEsS0FBVyxTQUFTLFNBQVNBLE1BQUEsQ0FBTzNDLElBQUEsS0FBUyxFQUFDO01BQ3hFeUQsY0FBQSxFQUFnQixLQUFLcUQsSUFBQSxDQUFLdFIsUUFBQTtNQUMxQnFRLE1BQUEsRUFBUTtNQUNSdEksSUFBQTtNQUNBMkosVUFBQSxFQUFZaFIsYUFBQSxDQUFjcUgsSUFBSTtJQUNsQztJQUNBLE1BQU15SyxnQkFBQSxHQUFtQixLQUFLWCxNQUFBLENBQU87TUFBRTlKLElBQUE7TUFBTXlDLElBQUEsRUFBTXFELEdBQUEsQ0FBSXJELElBQUE7TUFBTTZGLE1BQUEsRUFBUXhDO0lBQUksQ0FBQztJQUMxRSxNQUFNNkMsTUFBQSxHQUFTLE9BQU8xUCxPQUFBLENBQVF3UixnQkFBZ0IsSUFDeENBLGdCQUFBLEdBQ0FyRCxPQUFBLENBQVE0QyxPQUFBLENBQVFTLGdCQUFnQjtJQUN0QyxPQUFPL0IsWUFBQSxDQUFhNUMsR0FBQSxFQUFLNkMsTUFBTTtFQUNuQztFQUNBK0IsT0FBT0MsS0FBQSxFQUFPM0ksT0FBQSxFQUFTO0lBQ25CLE1BQU00SSxrQkFBQSxHQUFzQnhOLEdBQUEsSUFBUTtNQUNoQyxJQUFJLE9BQU80RSxPQUFBLEtBQVksWUFBWSxPQUFPQSxPQUFBLEtBQVksYUFBYTtRQUMvRCxPQUFPO1VBQUVBO1FBQVE7TUFDckIsV0FDUyxPQUFPQSxPQUFBLEtBQVksWUFBWTtRQUNwQyxPQUFPQSxPQUFBLENBQVE1RSxHQUFHO01BQ3RCLE9BQ0s7UUFDRCxPQUFPNEUsT0FBQTtNQUNYO0lBQ0o7SUFDQSxPQUFPLEtBQUs2SSxXQUFBLENBQVksQ0FBQ3pOLEdBQUEsRUFBSzBJLEdBQUEsS0FBUTtNQUNsQyxNQUFNNkMsTUFBQSxHQUFTZ0MsS0FBQSxDQUFNdk4sR0FBRztNQUN4QixNQUFNME4sUUFBQSxHQUFXQSxDQUFBLEtBQU1oRixHQUFBLENBQUk1RSxRQUFBLENBQVM7UUFDaENtQixJQUFBLEVBQU1oTixZQUFBLENBQWFxQyxNQUFBO1FBQ25CLEdBQUdrVCxrQkFBQSxDQUFtQnhOLEdBQUc7TUFDN0IsQ0FBQztNQUNELElBQUksT0FBT2dLLE9BQUEsS0FBWSxlQUFldUIsTUFBQSxZQUFrQnZCLE9BQUEsRUFBUztRQUM3RCxPQUFPdUIsTUFBQSxDQUFPdEksSUFBQSxDQUFNTCxJQUFBLElBQVM7VUFDekIsSUFBSSxDQUFDQSxJQUFBLEVBQU07WUFDUDhLLFFBQUEsQ0FBUztZQUNULE9BQU87VUFDWCxPQUNLO1lBQ0QsT0FBTztVQUNYO1FBQ0osQ0FBQztNQUNMO01BQ0EsSUFBSSxDQUFDbkMsTUFBQSxFQUFRO1FBQ1RtQyxRQUFBLENBQVM7UUFDVCxPQUFPO01BQ1gsT0FDSztRQUNELE9BQU87TUFDWDtJQUNKLENBQUM7RUFDTDtFQUNBQyxXQUFXSixLQUFBLEVBQU9LLGNBQUEsRUFBZ0I7SUFDOUIsT0FBTyxLQUFLSCxXQUFBLENBQVksQ0FBQ3pOLEdBQUEsRUFBSzBJLEdBQUEsS0FBUTtNQUNsQyxJQUFJLENBQUM2RSxLQUFBLENBQU12TixHQUFHLEdBQUc7UUFDYjBJLEdBQUEsQ0FBSTVFLFFBQUEsQ0FBUyxPQUFPOEosY0FBQSxLQUFtQixhQUNqQ0EsY0FBQSxDQUFlNU4sR0FBQSxFQUFLMEksR0FBRyxJQUN2QmtGLGNBQWM7UUFDcEIsT0FBTztNQUNYLE9BQ0s7UUFDRCxPQUFPO01BQ1g7SUFDSixDQUFDO0VBQ0w7RUFDQUgsWUFBWUUsVUFBQSxFQUFZO0lBQ3BCLE9BQU8sSUFBSWhXLFVBQUEsQ0FBVztNQUNsQmtXLE1BQUEsRUFBUTtNQUNSQyxRQUFBLEVBQVVoVyxxQkFBQSxDQUFzQkgsVUFBQTtNQUNoQ3FELE1BQUEsRUFBUTtRQUFFb00sSUFBQSxFQUFNO1FBQWN1RztNQUFXO0lBQzdDLENBQUM7RUFDTDtFQUNBSSxZQUFZSixVQUFBLEVBQVk7SUFDcEIsT0FBTyxLQUFLRixXQUFBLENBQVlFLFVBQVU7RUFDdEM7RUFDQTlKLFlBQVltSyxHQUFBLEVBQUs7SUFFYixLQUFLQyxHQUFBLEdBQU0sS0FBS2IsY0FBQTtJQUNoQixLQUFLakIsSUFBQSxHQUFPNkIsR0FBQTtJQUNaLEtBQUtuQixLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNcUIsSUFBQSxDQUFLLElBQUk7SUFDakMsS0FBS3BCLFNBQUEsR0FBWSxLQUFLQSxTQUFBLENBQVVvQixJQUFBLENBQUssSUFBSTtJQUN6QyxLQUFLZixVQUFBLEdBQWEsS0FBS0EsVUFBQSxDQUFXZSxJQUFBLENBQUssSUFBSTtJQUMzQyxLQUFLZCxjQUFBLEdBQWlCLEtBQUtBLGNBQUEsQ0FBZWMsSUFBQSxDQUFLLElBQUk7SUFDbkQsS0FBS0QsR0FBQSxHQUFNLEtBQUtBLEdBQUEsQ0FBSUMsSUFBQSxDQUFLLElBQUk7SUFDN0IsS0FBS1osTUFBQSxHQUFTLEtBQUtBLE1BQUEsQ0FBT1ksSUFBQSxDQUFLLElBQUk7SUFDbkMsS0FBS1AsVUFBQSxHQUFhLEtBQUtBLFVBQUEsQ0FBV08sSUFBQSxDQUFLLElBQUk7SUFDM0MsS0FBS0gsV0FBQSxHQUFjLEtBQUtBLFdBQUEsQ0FBWUcsSUFBQSxDQUFLLElBQUk7SUFDN0MsS0FBS3pRLFFBQUEsR0FBVyxLQUFLQSxRQUFBLENBQVN5USxJQUFBLENBQUssSUFBSTtJQUN2QyxLQUFLbFIsUUFBQSxHQUFXLEtBQUtBLFFBQUEsQ0FBU2tSLElBQUEsQ0FBSyxJQUFJO0lBQ3ZDLEtBQUtDLE9BQUEsR0FBVSxLQUFLQSxPQUFBLENBQVFELElBQUEsQ0FBSyxJQUFJO0lBQ3JDLEtBQUtuVSxLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNbVUsSUFBQSxDQUFLLElBQUk7SUFDakMsS0FBS2xRLE9BQUEsR0FBVSxLQUFLQSxPQUFBLENBQVFrUSxJQUFBLENBQUssSUFBSTtJQUNyQyxLQUFLRSxFQUFBLEdBQUssS0FBS0EsRUFBQSxDQUFHRixJQUFBLENBQUssSUFBSTtJQUMzQixLQUFLRyxHQUFBLEdBQU0sS0FBS0EsR0FBQSxDQUFJSCxJQUFBLENBQUssSUFBSTtJQUM3QixLQUFLSSxTQUFBLEdBQVksS0FBS0EsU0FBQSxDQUFVSixJQUFBLENBQUssSUFBSTtJQUN6QyxLQUFLSyxLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNTCxJQUFBLENBQUssSUFBSTtJQUNqQyxLQUFLeFQsT0FBQSxHQUFVLEtBQUtBLE9BQUEsQ0FBUXdULElBQUEsQ0FBSyxJQUFJO0lBQ3JDLEtBQUtoTCxLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNZ0wsSUFBQSxDQUFLLElBQUk7SUFDakMsS0FBS00sUUFBQSxHQUFXLEtBQUtBLFFBQUEsQ0FBU04sSUFBQSxDQUFLLElBQUk7SUFDdkMsS0FBS08sSUFBQSxHQUFPLEtBQUtBLElBQUEsQ0FBS1AsSUFBQSxDQUFLLElBQUk7SUFDL0IsS0FBS1EsUUFBQSxHQUFXLEtBQUtBLFFBQUEsQ0FBU1IsSUFBQSxDQUFLLElBQUk7SUFDdkMsS0FBS1MsVUFBQSxHQUFhLEtBQUtBLFVBQUEsQ0FBV1QsSUFBQSxDQUFLLElBQUk7SUFDM0MsS0FBS1UsVUFBQSxHQUFhLEtBQUtBLFVBQUEsQ0FBV1YsSUFBQSxDQUFLLElBQUk7SUFDM0MsS0FBSyxXQUFXLElBQUk7TUFDaEJXLE9BQUEsRUFBUztNQUNUQyxNQUFBLEVBQVE7TUFDUkMsUUFBQSxFQUFXbk0sSUFBQSxJQUFTLEtBQUssV0FBVyxFQUFFQSxJQUFJO0lBQzlDO0VBQ0o7RUFDQW5GLFNBQUEsRUFBVztJQUNQLE9BQU83RSxXQUFBLENBQVltTixNQUFBLENBQU8sTUFBTSxLQUFLb0csSUFBSTtFQUM3QztFQUNBblAsU0FBQSxFQUFXO0lBQ1AsT0FBT3ZFLFdBQUEsQ0FBWXNOLE1BQUEsQ0FBTyxNQUFNLEtBQUtvRyxJQUFJO0VBQzdDO0VBQ0FnQyxRQUFBLEVBQVU7SUFDTixPQUFPLEtBQUtuUixRQUFBLENBQVMsRUFBRVMsUUFBQSxDQUFTO0VBQ3BDO0VBQ0ExRCxNQUFBLEVBQVE7SUFDSixPQUFPNUMsUUFBQSxDQUFTNE8sTUFBQSxDQUFPLElBQUk7RUFDL0I7RUFDQS9ILFFBQUEsRUFBVTtJQUNOLE9BQU9qRixVQUFBLENBQVdnTixNQUFBLENBQU8sTUFBTSxLQUFLb0csSUFBSTtFQUM1QztFQUNBaUMsR0FBR1ksTUFBQSxFQUFRO0lBQ1AsT0FBT3ZWLFFBQUEsQ0FBU3NNLE1BQUEsQ0FBTyxDQUFDLE1BQU1pSixNQUFNLEdBQUcsS0FBSzdDLElBQUk7RUFDcEQ7RUFDQWtDLElBQUlZLFFBQUEsRUFBVTtJQUNWLE9BQU9qWCxlQUFBLENBQWdCK04sTUFBQSxDQUFPLE1BQU1rSixRQUFBLEVBQVUsS0FBSzlDLElBQUk7RUFDM0Q7RUFDQW1DLFVBQVVBLFNBQUEsRUFBVztJQUNqQixPQUFPLElBQUkzVyxVQUFBLENBQVc7TUFDbEIsR0FBRytULG1CQUFBLENBQW9CLEtBQUtTLElBQUk7TUFDaEMwQixNQUFBLEVBQVE7TUFDUkMsUUFBQSxFQUFVaFcscUJBQUEsQ0FBc0JILFVBQUE7TUFDaENxRCxNQUFBLEVBQVE7UUFBRW9NLElBQUEsRUFBTTtRQUFha0g7TUFBVTtJQUMzQyxDQUFDO0VBQ0w7RUFDQTVULFFBQVFzVCxHQUFBLEVBQUs7SUFDVCxNQUFNa0IsZ0JBQUEsR0FBbUIsT0FBT2xCLEdBQUEsS0FBUSxhQUFhQSxHQUFBLEdBQU0sTUFBTUEsR0FBQTtJQUNqRSxPQUFPLElBQUl2VyxVQUFBLENBQVc7TUFDbEIsR0FBR2lVLG1CQUFBLENBQW9CLEtBQUtTLElBQUk7TUFDaENnRCxTQUFBLEVBQVc7TUFDWEMsWUFBQSxFQUFjRixnQkFBQTtNQUNkcEIsUUFBQSxFQUFVaFcscUJBQUEsQ0FBc0JMO0lBQ3BDLENBQUM7RUFDTDtFQUNBOFcsTUFBQSxFQUFRO0lBQ0osT0FBTyxJQUFJalgsVUFBQSxDQUFXO01BQ2xCd1csUUFBQSxFQUFVaFcscUJBQUEsQ0FBc0JSLFVBQUE7TUFDaEM4UCxJQUFBLEVBQU07TUFDTixHQUFHc0UsbUJBQUEsQ0FBb0IsS0FBS1MsSUFBSTtJQUNwQyxDQUFDO0VBQ0w7RUFDQWpKLE1BQU04SyxHQUFBLEVBQUs7SUFDUCxNQUFNcUIsY0FBQSxHQUFpQixPQUFPckIsR0FBQSxLQUFRLGFBQWFBLEdBQUEsR0FBTSxNQUFNQSxHQUFBO0lBQy9ELE9BQU8sSUFBSXpXLFFBQUEsQ0FBUztNQUNoQixHQUFHbVUsbUJBQUEsQ0FBb0IsS0FBS1MsSUFBSTtNQUNoQ2dELFNBQUEsRUFBVztNQUNYRyxVQUFBLEVBQVlELGNBQUE7TUFDWnZCLFFBQUEsRUFBVWhXLHFCQUFBLENBQXNCUDtJQUNwQyxDQUFDO0VBQ0w7RUFDQWlYLFNBQVMxQyxXQUFBLEVBQWE7SUFDbEIsTUFBTXlELElBQUEsR0FBTyxLQUFLMUwsV0FBQTtJQUNsQixPQUFPLElBQUkwTCxJQUFBLENBQUs7TUFDWixHQUFHLEtBQUtwRCxJQUFBO01BQ1JMO0lBQ0osQ0FBQztFQUNMO0VBQ0EyQyxLQUFLckssTUFBQSxFQUFRO0lBQ1QsT0FBT3RMLFdBQUEsQ0FBWWlOLE1BQUEsQ0FBTyxNQUFNM0IsTUFBTTtFQUMxQztFQUNBc0ssU0FBQSxFQUFXO0lBQ1AsT0FBTzFWLFdBQUEsQ0FBWStNLE1BQUEsQ0FBTyxJQUFJO0VBQ2xDO0VBQ0E2SSxXQUFBLEVBQWE7SUFDVCxPQUFPLEtBQUs5QixTQUFBLENBQVUsTUFBUyxFQUFFdEIsT0FBQTtFQUNyQztFQUNBbUQsV0FBQSxFQUFhO0lBQ1QsT0FBTyxLQUFLN0IsU0FBQSxDQUFVLElBQUksRUFBRXRCLE9BQUE7RUFDaEM7QUFDSjtBQUNBLElBQU1nRSxTQUFBLEdBQVk7QUFDbEIsSUFBTUMsVUFBQSxHQUFhO0FBQ25CLElBQU1DLFNBQUEsR0FBWTtBQUdsQixJQUFNQyxTQUFBLEdBQVk7QUFDbEIsSUFBTUMsV0FBQSxHQUFjO0FBQ3BCLElBQU1DLFFBQUEsR0FBVztBQUNqQixJQUFNQyxhQUFBLEdBQWdCO0FBYXRCLElBQU1DLFVBQUEsR0FBYTtBQUluQixJQUFNQyxXQUFBLEdBQWM7QUFDcEIsSUFBSUMsVUFBQTtBQUVKLElBQU1DLFNBQUEsR0FBWTtBQUNsQixJQUFNQyxhQUFBLEdBQWdCO0FBR3RCLElBQU1DLFNBQUEsR0FBWTtBQUNsQixJQUFNQyxhQUFBLEdBQWdCO0FBRXRCLElBQU1DLFdBQUEsR0FBYztBQUVwQixJQUFNQyxjQUFBLEdBQWlCO0FBTXZCLElBQU1DLGVBQUEsR0FBa0I7QUFDeEIsSUFBTUMsU0FBQSxHQUFZLElBQUlDLE1BQUEsQ0FBTyxJQUFJRixlQUFlLEdBQUc7QUFDbkQsU0FBU0csZ0JBQWdCQyxJQUFBLEVBQU07RUFDM0IsSUFBSUMsa0JBQUEsR0FBcUI7RUFDekIsSUFBSUQsSUFBQSxDQUFLRSxTQUFBLEVBQVc7SUFDaEJELGtCQUFBLEdBQXFCLEdBQUdBLGtCQUFrQixVQUFVRCxJQUFBLENBQUtFLFNBQVM7RUFDdEUsV0FDU0YsSUFBQSxDQUFLRSxTQUFBLElBQWEsTUFBTTtJQUM3QkQsa0JBQUEsR0FBcUIsR0FBR0Esa0JBQWtCO0VBQzlDO0VBQ0EsTUFBTUUsaUJBQUEsR0FBb0JILElBQUEsQ0FBS0UsU0FBQSxHQUFZLE1BQU07RUFDakQsT0FBTyw4QkFBOEJELGtCQUFrQixJQUFJRSxpQkFBaUI7QUFDaEY7QUFDQSxTQUFTQyxVQUFVSixJQUFBLEVBQU07RUFDckIsT0FBTyxJQUFJRixNQUFBLENBQU8sSUFBSUMsZUFBQSxDQUFnQkMsSUFBSSxDQUFDLEdBQUc7QUFDbEQ7QUFFQSxTQUFTblcsY0FBY21XLElBQUEsRUFBTTtFQUN6QixJQUFJSyxLQUFBLEdBQVEsR0FBR1QsZUFBZSxJQUFJRyxlQUFBLENBQWdCQyxJQUFJLENBQUM7RUFDdkQsTUFBTU0sSUFBQSxHQUFPLEVBQUM7RUFDZEEsSUFBQSxDQUFLMVAsSUFBQSxDQUFLb1AsSUFBQSxDQUFLTyxLQUFBLEdBQVEsT0FBTyxHQUFHO0VBQ2pDLElBQUlQLElBQUEsQ0FBS1EsTUFBQSxFQUNMRixJQUFBLENBQUsxUCxJQUFBLENBQUssc0JBQXNCO0VBQ3BDeVAsS0FBQSxHQUFRLEdBQUdBLEtBQUssSUFBSUMsSUFBQSxDQUFLL08sSUFBQSxDQUFLLEdBQUcsQ0FBQztFQUNsQyxPQUFPLElBQUl1TyxNQUFBLENBQU8sSUFBSU8sS0FBSyxHQUFHO0FBQ2xDO0FBQ0EsU0FBU0ksVUFBVUMsRUFBQSxFQUFJekMsT0FBQSxFQUFTO0VBQzVCLEtBQUtBLE9BQUEsS0FBWSxRQUFRLENBQUNBLE9BQUEsS0FBWXFCLFNBQUEsQ0FBVXFCLElBQUEsQ0FBS0QsRUFBRSxHQUFHO0lBQ3RELE9BQU87RUFDWDtFQUNBLEtBQUt6QyxPQUFBLEtBQVksUUFBUSxDQUFDQSxPQUFBLEtBQVl1QixTQUFBLENBQVVtQixJQUFBLENBQUtELEVBQUUsR0FBRztJQUN0RCxPQUFPO0VBQ1g7RUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTRSxXQUFXQyxHQUFBLEVBQUtDLEdBQUEsRUFBSztFQUMxQixJQUFJLENBQUM3QixRQUFBLENBQVMwQixJQUFBLENBQUtFLEdBQUcsR0FDbEIsT0FBTztFQUNYLElBQUk7SUFDQSxNQUFNLENBQUNFLE1BQU0sSUFBSUYsR0FBQSxDQUFJRyxLQUFBLENBQU0sR0FBRztJQUU5QixNQUFNQyxNQUFBLEdBQVNGLE1BQUEsQ0FDVmxPLE9BQUEsQ0FBUSxNQUFNLEdBQUcsRUFDakJBLE9BQUEsQ0FBUSxNQUFNLEdBQUcsRUFDakJxTyxNQUFBLENBQU9ILE1BQUEsQ0FBT3JNLE1BQUEsSUFBVyxJQUFLcU0sTUFBQSxDQUFPck0sTUFBQSxHQUFTLEtBQU0sR0FBSSxHQUFHO0lBQ2hFLE1BQU15TSxPQUFBLEdBQVV4TyxJQUFBLENBQUtzSixLQUFBLENBQU1tRixJQUFBLENBQUtILE1BQU0sQ0FBQztJQUN2QyxJQUFJLE9BQU9FLE9BQUEsS0FBWSxZQUFZQSxPQUFBLEtBQVksTUFDM0MsT0FBTztJQUNYLElBQUksQ0FBQ0EsT0FBQSxDQUFRRSxHQUFBLElBQU8sQ0FBQ0YsT0FBQSxDQUFRTCxHQUFBLEVBQ3pCLE9BQU87SUFDWCxJQUFJQSxHQUFBLElBQU9LLE9BQUEsQ0FBUUwsR0FBQSxLQUFRQSxHQUFBLEVBQ3ZCLE9BQU87SUFDWCxPQUFPO0VBQ1gsU0FDT3pGLEVBQUEsRUFBSTtJQUNQLE9BQU87RUFDWDtBQUNKO0FBQ0EsU0FBU2lHLFlBQVlaLEVBQUEsRUFBSXpDLE9BQUEsRUFBUztFQUM5QixLQUFLQSxPQUFBLEtBQVksUUFBUSxDQUFDQSxPQUFBLEtBQVlzQixhQUFBLENBQWNvQixJQUFBLENBQUtELEVBQUUsR0FBRztJQUMxRCxPQUFPO0VBQ1g7RUFDQSxLQUFLekMsT0FBQSxLQUFZLFFBQVEsQ0FBQ0EsT0FBQSxLQUFZd0IsYUFBQSxDQUFja0IsSUFBQSxDQUFLRCxFQUFFLEdBQUc7SUFDMUQsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBQ0EsSUFBTWxZLFNBQUEsR0FBTixNQUFNK1ksVUFBQSxTQUFrQmxiLE9BQUEsQ0FBUTtFQUM1QnlWLE9BQU9MLEtBQUEsRUFBTztJQUNWLElBQUksS0FBS0YsSUFBQSxDQUFLOVIsTUFBQSxFQUFRO01BQ2xCZ1MsS0FBQSxDQUFNekosSUFBQSxHQUFPd1AsTUFBQSxDQUFPL0YsS0FBQSxDQUFNekosSUFBSTtJQUNsQztJQUNBLE1BQU0ySixVQUFBLEdBQWEsS0FBS0gsUUFBQSxDQUFTQyxLQUFLO0lBQ3RDLElBQUlFLFVBQUEsS0FBZTFULGFBQUEsQ0FBYzZGLE1BQUEsRUFBUTtNQUNyQyxNQUFNMlQsSUFBQSxHQUFNLEtBQUsvRixlQUFBLENBQWdCRCxLQUFLO01BQ3RDelMsaUJBQUEsQ0FBa0J5WSxJQUFBLEVBQUs7UUFDbkJwTixJQUFBLEVBQU1oTixZQUFBLENBQWFnTyxZQUFBO1FBQ25CRSxRQUFBLEVBQVV0TixhQUFBLENBQWM2RixNQUFBO1FBQ3hCd0gsUUFBQSxFQUFVbU0sSUFBQSxDQUFJOUY7TUFDbEIsQ0FBQztNQUNELE9BQU8zVixPQUFBO0lBQ1g7SUFDQSxNQUFNd1MsTUFBQSxHQUFTLElBQUlyUyxXQUFBLENBQVk7SUFDL0IsSUFBSTJSLEdBQUEsR0FBTTtJQUNWLFdBQVc2RSxLQUFBLElBQVMsS0FBS3BCLElBQUEsQ0FBS21HLE1BQUEsRUFBUTtNQUNsQyxJQUFJL0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLE9BQU87UUFDdEIsSUFBSWlDLEtBQUEsQ0FBTXpKLElBQUEsQ0FBSzBDLE1BQUEsR0FBU2lJLEtBQUEsQ0FBTWpMLEtBQUEsRUFBTztVQUNqQ29HLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNaE4sWUFBQSxDQUFha1AsU0FBQTtZQUNuQkksT0FBQSxFQUFTZ0csS0FBQSxDQUFNakwsS0FBQTtZQUNmOEUsSUFBQSxFQUFNO1lBQ05FLFNBQUEsRUFBVztZQUNYRCxLQUFBLEVBQU87WUFDUHpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxPQUFPO1FBQzNCLElBQUlpQyxLQUFBLENBQU16SixJQUFBLENBQUswQyxNQUFBLEdBQVNpSSxLQUFBLENBQU1qTCxLQUFBLEVBQU87VUFDakNvRyxHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckM5TyxpQkFBQSxDQUFrQjhPLEdBQUEsRUFBSztZQUNuQnpELElBQUEsRUFBTWhOLFlBQUEsQ0FBYXVQLE9BQUE7WUFDbkJDLE9BQUEsRUFBUzhGLEtBQUEsQ0FBTWpMLEtBQUE7WUFDZjhFLElBQUEsRUFBTTtZQUNORSxTQUFBLEVBQVc7WUFDWEQsS0FBQSxFQUFPO1lBQ1B6QyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsVUFBVTtRQUM5QixNQUFNbUksTUFBQSxHQUFTbEcsS0FBQSxDQUFNekosSUFBQSxDQUFLMEMsTUFBQSxHQUFTaUksS0FBQSxDQUFNakwsS0FBQTtRQUN6QyxNQUFNa1EsUUFBQSxHQUFXbkcsS0FBQSxDQUFNekosSUFBQSxDQUFLMEMsTUFBQSxHQUFTaUksS0FBQSxDQUFNakwsS0FBQTtRQUMzQyxJQUFJaVEsTUFBQSxJQUFVQyxRQUFBLEVBQVU7VUFDcEI5SixHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckMsSUFBSTZKLE1BQUEsRUFBUTtZQUNSM1ksaUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7Y0FDbkJ6RCxJQUFBLEVBQU1oTixZQUFBLENBQWF1UCxPQUFBO2NBQ25CQyxPQUFBLEVBQVM4RixLQUFBLENBQU1qTCxLQUFBO2NBQ2Y4RSxJQUFBLEVBQU07Y0FDTkUsU0FBQSxFQUFXO2NBQ1hELEtBQUEsRUFBTztjQUNQekMsT0FBQSxFQUFTMkksS0FBQSxDQUFNM0k7WUFDbkIsQ0FBQztVQUNMLFdBQ1M0TixRQUFBLEVBQVU7WUFDZjVZLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO2NBQ25CekQsSUFBQSxFQUFNaE4sWUFBQSxDQUFha1AsU0FBQTtjQUNuQkksT0FBQSxFQUFTZ0csS0FBQSxDQUFNakwsS0FBQTtjQUNmOEUsSUFBQSxFQUFNO2NBQ05FLFNBQUEsRUFBVztjQUNYRCxLQUFBLEVBQU87Y0FDUHpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1lBQ25CLENBQUM7VUFDTDtVQUNBd0UsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixXQUNTc0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLFNBQVM7UUFDN0IsSUFBSSxDQUFDMkYsVUFBQSxDQUFXd0IsSUFBQSxDQUFLbEYsS0FBQSxDQUFNekosSUFBSSxHQUFHO1VBQzlCOEYsR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkI1QixVQUFBLEVBQVk7WUFDWjdCLElBQUEsRUFBTWhOLFlBQUEsQ0FBYTRPLGNBQUE7WUFDbkJqQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsU0FBUztRQUM3QixJQUFJLENBQUM2RixVQUFBLEVBQVk7VUFDYkEsVUFBQSxHQUFhLElBQUlTLE1BQUEsQ0FBT1YsV0FBQSxFQUFhLEdBQUc7UUFDNUM7UUFDQSxJQUFJLENBQUNDLFVBQUEsQ0FBV3NCLElBQUEsQ0FBS2xGLEtBQUEsQ0FBTXpKLElBQUksR0FBRztVQUM5QjhGLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CNUIsVUFBQSxFQUFZO1lBQ1o3QixJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CakMsT0FBQSxFQUFTMkksS0FBQSxDQUFNM0k7VUFDbkIsQ0FBQztVQUNEd0UsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixXQUNTc0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLFFBQVE7UUFDNUIsSUFBSSxDQUFDdUYsU0FBQSxDQUFVNEIsSUFBQSxDQUFLbEYsS0FBQSxDQUFNekosSUFBSSxHQUFHO1VBQzdCOEYsR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkI1QixVQUFBLEVBQVk7WUFDWjdCLElBQUEsRUFBTWhOLFlBQUEsQ0FBYTRPLGNBQUE7WUFDbkJqQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsVUFBVTtRQUM5QixJQUFJLENBQUN3RixXQUFBLENBQVkyQixJQUFBLENBQUtsRixLQUFBLENBQU16SixJQUFJLEdBQUc7VUFDL0I4RixHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckM5TyxpQkFBQSxDQUFrQjhPLEdBQUEsRUFBSztZQUNuQjVCLFVBQUEsRUFBWTtZQUNaN0IsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQmpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxRQUFRO1FBQzVCLElBQUksQ0FBQ29GLFNBQUEsQ0FBVStCLElBQUEsQ0FBS2xGLEtBQUEsQ0FBTXpKLElBQUksR0FBRztVQUM3QjhGLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CNUIsVUFBQSxFQUFZO1lBQ1o3QixJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CakMsT0FBQSxFQUFTMkksS0FBQSxDQUFNM0k7VUFDbkIsQ0FBQztVQUNEd0UsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixXQUNTc0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLFNBQVM7UUFDN0IsSUFBSSxDQUFDcUYsVUFBQSxDQUFXOEIsSUFBQSxDQUFLbEYsS0FBQSxDQUFNekosSUFBSSxHQUFHO1VBQzlCOEYsR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkI1QixVQUFBLEVBQVk7WUFDWjdCLElBQUEsRUFBTWhOLFlBQUEsQ0FBYTRPLGNBQUE7WUFDbkJqQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsUUFBUTtRQUM1QixJQUFJLENBQUNzRixTQUFBLENBQVU2QixJQUFBLENBQUtsRixLQUFBLENBQU16SixJQUFJLEdBQUc7VUFDN0I4RixHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckM5TyxpQkFBQSxDQUFrQjhPLEdBQUEsRUFBSztZQUNuQjVCLFVBQUEsRUFBWTtZQUNaN0IsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQmpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxPQUFPO1FBQzNCLElBQUk7VUFDQSxJQUFJcUksR0FBQSxDQUFJcEcsS0FBQSxDQUFNekosSUFBSTtRQUN0QixTQUNPcUosRUFBQSxFQUFJO1VBQ1B2RCxHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckM5TyxpQkFBQSxDQUFrQjhPLEdBQUEsRUFBSztZQUNuQjVCLFVBQUEsRUFBWTtZQUNaN0IsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQmpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxTQUFTO1FBQzdCbUQsS0FBQSxDQUFNMEQsS0FBQSxDQUFNeUIsU0FBQSxHQUFZO1FBQ3hCLE1BQU1DLFVBQUEsR0FBYXBGLEtBQUEsQ0FBTTBELEtBQUEsQ0FBTU0sSUFBQSxDQUFLbEYsS0FBQSxDQUFNekosSUFBSTtRQUM5QyxJQUFJLENBQUMrUCxVQUFBLEVBQVk7VUFDYmpLLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CNUIsVUFBQSxFQUFZO1lBQ1o3QixJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CakMsT0FBQSxFQUFTMkksS0FBQSxDQUFNM0k7VUFDbkIsQ0FBQztVQUNEd0UsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixXQUNTc0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLFFBQVE7UUFDNUJpQyxLQUFBLENBQU16SixJQUFBLEdBQU95SixLQUFBLENBQU16SixJQUFBLENBQUtnUSxJQUFBLENBQUs7TUFDakMsV0FDU3JGLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxZQUFZO1FBQ2hDLElBQUksQ0FBQ2lDLEtBQUEsQ0FBTXpKLElBQUEsQ0FBS21FLFFBQUEsQ0FBU3dHLEtBQUEsQ0FBTWpMLEtBQUEsRUFBT2lMLEtBQUEsQ0FBTXZHLFFBQVEsR0FBRztVQUNuRDBCLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQkMsVUFBQSxFQUFZO2NBQUVDLFFBQUEsRUFBVXdHLEtBQUEsQ0FBTWpMLEtBQUE7Y0FBTzBFLFFBQUEsRUFBVXVHLEtBQUEsQ0FBTXZHO1lBQVM7WUFDOURwQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsZUFBZTtRQUNuQ2lDLEtBQUEsQ0FBTXpKLElBQUEsR0FBT3lKLEtBQUEsQ0FBTXpKLElBQUEsQ0FBS3NLLFdBQUEsQ0FBWTtNQUN4QyxXQUNTSyxLQUFBLENBQU1uRCxJQUFBLEtBQVMsZUFBZTtRQUNuQ2lDLEtBQUEsQ0FBTXpKLElBQUEsR0FBT3lKLEtBQUEsQ0FBTXpKLElBQUEsQ0FBS2lRLFdBQUEsQ0FBWTtNQUN4QyxXQUNTdEYsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLGNBQWM7UUFDbEMsSUFBSSxDQUFDaUMsS0FBQSxDQUFNekosSUFBQSxDQUFLcUUsVUFBQSxDQUFXc0csS0FBQSxDQUFNakwsS0FBSyxHQUFHO1VBQ3JDb0csR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CQyxVQUFBLEVBQVk7Y0FBRUcsVUFBQSxFQUFZc0csS0FBQSxDQUFNakw7WUFBTTtZQUN0Q3NDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxZQUFZO1FBQ2hDLElBQUksQ0FBQ2lDLEtBQUEsQ0FBTXpKLElBQUEsQ0FBS3NFLFFBQUEsQ0FBU3FHLEtBQUEsQ0FBTWpMLEtBQUssR0FBRztVQUNuQ29HLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQkMsVUFBQSxFQUFZO2NBQUVJLFFBQUEsRUFBVXFHLEtBQUEsQ0FBTWpMO1lBQU07WUFDcENzQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsWUFBWTtRQUNoQyxNQUFNNkcsS0FBQSxHQUFReFcsYUFBQSxDQUFjOFMsS0FBSztRQUNqQyxJQUFJLENBQUMwRCxLQUFBLENBQU1NLElBQUEsQ0FBS2xGLEtBQUEsQ0FBTXpKLElBQUksR0FBRztVQUN6QjhGLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQkMsVUFBQSxFQUFZO1lBQ1psQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsUUFBUTtRQUM1QixNQUFNNkcsS0FBQSxHQUFRUixTQUFBO1FBQ2QsSUFBSSxDQUFDUSxLQUFBLENBQU1NLElBQUEsQ0FBS2xGLEtBQUEsQ0FBTXpKLElBQUksR0FBRztVQUN6QjhGLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CekQsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQkMsVUFBQSxFQUFZO1lBQ1psQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsUUFBUTtRQUM1QixNQUFNNkcsS0FBQSxHQUFRRCxTQUFBLENBQVV6RCxLQUFLO1FBQzdCLElBQUksQ0FBQzBELEtBQUEsQ0FBTU0sSUFBQSxDQUFLbEYsS0FBQSxDQUFNekosSUFBSSxHQUFHO1VBQ3pCOEYsR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkJ6RCxJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CQyxVQUFBLEVBQVk7WUFDWmxDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxZQUFZO1FBQ2hDLElBQUksQ0FBQzBGLGFBQUEsQ0FBY3lCLElBQUEsQ0FBS2xGLEtBQUEsQ0FBTXpKLElBQUksR0FBRztVQUNqQzhGLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CNUIsVUFBQSxFQUFZO1lBQ1o3QixJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CakMsT0FBQSxFQUFTMkksS0FBQSxDQUFNM0k7VUFDbkIsQ0FBQztVQUNEd0UsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixXQUNTc0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLE1BQU07UUFDMUIsSUFBSSxDQUFDaUgsU0FBQSxDQUFVaEYsS0FBQSxDQUFNekosSUFBQSxFQUFNMkssS0FBQSxDQUFNc0IsT0FBTyxHQUFHO1VBQ3ZDbkcsR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkI1QixVQUFBLEVBQVk7WUFDWjdCLElBQUEsRUFBTWhOLFlBQUEsQ0FBYTRPLGNBQUE7WUFDbkJqQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsT0FBTztRQUMzQixJQUFJLENBQUNvSCxVQUFBLENBQVduRixLQUFBLENBQU16SixJQUFBLEVBQU0ySyxLQUFBLENBQU1tRSxHQUFHLEdBQUc7VUFDcENoSixHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckM5TyxpQkFBQSxDQUFrQjhPLEdBQUEsRUFBSztZQUNuQjVCLFVBQUEsRUFBWTtZQUNaN0IsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQmpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osV0FDU3NFLEtBQUEsQ0FBTW5ELElBQUEsS0FBUyxRQUFRO1FBQzVCLElBQUksQ0FBQzhILFdBQUEsQ0FBWTdGLEtBQUEsQ0FBTXpKLElBQUEsRUFBTTJLLEtBQUEsQ0FBTXNCLE9BQU8sR0FBRztVQUN6Q25HLEdBQUEsR0FBTSxLQUFLNEQsZUFBQSxDQUFnQkQsS0FBQSxFQUFPM0QsR0FBRztVQUNyQzlPLGlCQUFBLENBQWtCOE8sR0FBQSxFQUFLO1lBQ25CNUIsVUFBQSxFQUFZO1lBQ1o3QixJQUFBLEVBQU1oTixZQUFBLENBQWE0TyxjQUFBO1lBQ25CakMsT0FBQSxFQUFTMkksS0FBQSxDQUFNM0k7VUFDbkIsQ0FBQztVQUNEd0UsTUFBQSxDQUFPSCxLQUFBLENBQU07UUFDakI7TUFDSixXQUNTc0UsS0FBQSxDQUFNbkQsSUFBQSxLQUFTLFVBQVU7UUFDOUIsSUFBSSxDQUFDa0csV0FBQSxDQUFZaUIsSUFBQSxDQUFLbEYsS0FBQSxDQUFNekosSUFBSSxHQUFHO1VBQy9COEYsR0FBQSxHQUFNLEtBQUs0RCxlQUFBLENBQWdCRCxLQUFBLEVBQU8zRCxHQUFHO1VBQ3JDOU8saUJBQUEsQ0FBa0I4TyxHQUFBLEVBQUs7WUFDbkI1QixVQUFBLEVBQVk7WUFDWjdCLElBQUEsRUFBTWhOLFlBQUEsQ0FBYTRPLGNBQUE7WUFDbkJqQyxPQUFBLEVBQVMySSxLQUFBLENBQU0zSTtVQUNuQixDQUFDO1VBQ0R3RSxNQUFBLENBQU9ILEtBQUEsQ0FBTTtRQUNqQjtNQUNKLFdBQ1NzRSxLQUFBLENBQU1uRCxJQUFBLEtBQVMsYUFBYTtRQUNqQyxJQUFJLENBQUNtRyxjQUFBLENBQWVnQixJQUFBLENBQUtsRixLQUFBLENBQU16SixJQUFJLEdBQUc7VUFDbEM4RixHQUFBLEdBQU0sS0FBSzRELGVBQUEsQ0FBZ0JELEtBQUEsRUFBTzNELEdBQUc7VUFDckM5TyxpQkFBQSxDQUFrQjhPLEdBQUEsRUFBSztZQUNuQjVCLFVBQUEsRUFBWTtZQUNaN0IsSUFBQSxFQUFNaE4sWUFBQSxDQUFhNE8sY0FBQTtZQUNuQmpDLE9BQUEsRUFBUzJJLEtBQUEsQ0FBTTNJO1VBQ25CLENBQUM7VUFDRHdFLE1BQUEsQ0FBT0gsS0FBQSxDQUFNO1FBQ2pCO01BQ0osT0FDSztRQUNEMUosSUFBQSxDQUFLWSxXQUFBLENBQVlvTixLQUFLO01BQzFCO0lBQ0o7SUFDQSxPQUFPO01BQUVuRSxNQUFBLEVBQVFBLE1BQUEsQ0FBTzlHLEtBQUE7TUFBT0EsS0FBQSxFQUFPK0osS0FBQSxDQUFNeko7SUFBSztFQUNyRDtFQUNBa1EsT0FBTzdCLEtBQUEsRUFBT25LLFVBQUEsRUFBWWxDLE9BQUEsRUFBUztJQUMvQixPQUFPLEtBQUsrSSxVQUFBLENBQVkvSyxJQUFBLElBQVNxTyxLQUFBLENBQU1NLElBQUEsQ0FBSzNPLElBQUksR0FBRztNQUMvQ2tFLFVBQUE7TUFDQTdCLElBQUEsRUFBTWhOLFlBQUEsQ0FBYTRPLGNBQUE7TUFDbkIsR0FBRytELFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUNqQyxDQUFDO0VBQ0w7RUFDQW1PLFVBQVV4RixLQUFBLEVBQU87SUFDYixPQUFPLElBQUk0RSxVQUFBLENBQVU7TUFDakIsR0FBRyxLQUFLaEcsSUFBQTtNQUNSbUcsTUFBQSxFQUFRLENBQUMsR0FBRyxLQUFLbkcsSUFBQSxDQUFLbUcsTUFBQSxFQUFRL0UsS0FBSztJQUN2QyxDQUFDO0VBQ0w7RUFDQXlGLE1BQU1wTyxPQUFBLEVBQVM7SUFDWCxPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFTLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDM0U7RUFDQXFPLElBQUlyTyxPQUFBLEVBQVM7SUFDVCxPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFPLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDekU7RUFDQXNPLE1BQU10TyxPQUFBLEVBQVM7SUFDWCxPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFTLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDM0U7RUFDQXVPLEtBQUt2TyxPQUFBLEVBQVM7SUFDVixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFRLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDMUU7RUFDQXdPLE9BQU94TyxPQUFBLEVBQVM7SUFDWixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFVLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDNUU7RUFDQXlPLEtBQUt6TyxPQUFBLEVBQVM7SUFDVixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFRLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDMUU7RUFDQTBPLE1BQU0xTyxPQUFBLEVBQVM7SUFDWCxPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFTLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDM0U7RUFDQTJPLEtBQUszTyxPQUFBLEVBQVM7SUFDVixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFRLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDMUU7RUFDQWlOLE9BQU9qTixPQUFBLEVBQVM7SUFDWixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFBRTNJLElBQUEsRUFBTTtNQUFVLEdBQUdRLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUFFLENBQUM7RUFDNUU7RUFDQTRPLFVBQVU1TyxPQUFBLEVBQVM7SUFFZixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFDbEIzSSxJQUFBLEVBQU07TUFDTixHQUFHUSxTQUFBLENBQVVFLFFBQUEsQ0FBU2xHLE9BQU87SUFDakMsQ0FBQztFQUNMO0VBQ0E2TSxJQUFJakwsT0FBQSxFQUFTO0lBQ1QsT0FBTyxLQUFLdU0sU0FBQSxDQUFVO01BQUUzSSxJQUFBLEVBQU07TUFBTyxHQUFHUSxTQUFBLENBQVVFLFFBQUEsQ0FBU3RFLE9BQU87SUFBRSxDQUFDO0VBQ3pFO0VBQ0E4SyxHQUFHOUssT0FBQSxFQUFTO0lBQ1IsT0FBTyxLQUFLdU0sU0FBQSxDQUFVO01BQUUzSSxJQUFBLEVBQU07TUFBTSxHQUFHUSxTQUFBLENBQVVFLFFBQUEsQ0FBU3RFLE9BQU87SUFBRSxDQUFDO0VBQ3hFO0VBQ0FpTixLQUFLak4sT0FBQSxFQUFTO0lBQ1YsT0FBTyxLQUFLdU0sU0FBQSxDQUFVO01BQUUzSSxJQUFBLEVBQU07TUFBUSxHQUFHUSxTQUFBLENBQVVFLFFBQUEsQ0FBU3RFLE9BQU87SUFBRSxDQUFDO0VBQzFFO0VBQ0FrTixTQUFTbE4sT0FBQSxFQUFTO0lBQ2QsSUFBSXlGLEVBQUEsRUFBSUMsRUFBQTtJQUNSLElBQUksT0FBTzFGLE9BQUEsS0FBWSxVQUFVO01BQzdCLE9BQU8sS0FBS3VNLFNBQUEsQ0FBVTtRQUNsQjNJLElBQUEsRUFBTTtRQUNOMEcsU0FBQSxFQUFXO1FBQ1hNLE1BQUEsRUFBUTtRQUNSRCxLQUFBLEVBQU87UUFDUHZNLE9BQUEsRUFBUzRCO01BQ2IsQ0FBQztJQUNMO0lBQ0EsT0FBTyxLQUFLdU0sU0FBQSxDQUFVO01BQ2xCM0ksSUFBQSxFQUFNO01BQ04wRyxTQUFBLEVBQVcsUUFBUXRLLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVFzSyxTQUFBLE1BQWUsY0FBYyxPQUFPdEssT0FBQSxLQUFZLFFBQVFBLE9BQUEsS0FBWSxTQUFTLFNBQVNBLE9BQUEsQ0FBUXNLLFNBQUE7TUFDM0tNLE1BQUEsR0FBU25GLEVBQUEsR0FBS3pGLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVE0SyxNQUFBLE1BQVksUUFBUW5GLEVBQUEsS0FBTyxTQUFTQSxFQUFBLEdBQUs7TUFDakhrRixLQUFBLEdBQVFqRixFQUFBLEdBQUsxRixPQUFBLEtBQVksUUFBUUEsT0FBQSxLQUFZLFNBQVMsU0FBU0EsT0FBQSxDQUFRMkssS0FBQSxNQUFXLFFBQVFqRixFQUFBLEtBQU8sU0FBU0EsRUFBQSxHQUFLO01BQy9HLEdBQUd0QixTQUFBLENBQVVFLFFBQUEsQ0FBU3RFLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVE1QixPQUFPO0lBQzNGLENBQUM7RUFDTDtFQUNBckssS0FBS3FLLE9BQUEsRUFBUztJQUNWLE9BQU8sS0FBS21PLFNBQUEsQ0FBVTtNQUFFM0ksSUFBQSxFQUFNO01BQVF4RjtJQUFRLENBQUM7RUFDbkQ7RUFDQStPLEtBQUtuTixPQUFBLEVBQVM7SUFDVixJQUFJLE9BQU9BLE9BQUEsS0FBWSxVQUFVO01BQzdCLE9BQU8sS0FBS3VNLFNBQUEsQ0FBVTtRQUNsQjNJLElBQUEsRUFBTTtRQUNOMEcsU0FBQSxFQUFXO1FBQ1hsTSxPQUFBLEVBQVM0QjtNQUNiLENBQUM7SUFDTDtJQUNBLE9BQU8sS0FBS3VNLFNBQUEsQ0FBVTtNQUNsQjNJLElBQUEsRUFBTTtNQUNOMEcsU0FBQSxFQUFXLFFBQVF0SyxPQUFBLEtBQVksUUFBUUEsT0FBQSxLQUFZLFNBQVMsU0FBU0EsT0FBQSxDQUFRc0ssU0FBQSxNQUFlLGNBQWMsT0FBT3RLLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVFzSyxTQUFBO01BQzNLLEdBQUdsRyxTQUFBLENBQVVFLFFBQUEsQ0FBU3RFLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVE1QixPQUFPO0lBQzNGLENBQUM7RUFDTDtFQUNBZ1AsU0FBU2hQLE9BQUEsRUFBUztJQUNkLE9BQU8sS0FBS21PLFNBQUEsQ0FBVTtNQUFFM0ksSUFBQSxFQUFNO01BQVksR0FBR1EsU0FBQSxDQUFVRSxRQUFBLENBQVNsRyxPQUFPO0lBQUUsQ0FBQztFQUM5RTtFQUNBcU0sTUFBTUEsS0FBQSxFQUFPck0sT0FBQSxFQUFTO0lBQ2xCLE9BQU8sS0FBS21PLFNBQUEsQ0FBVTtNQUNsQjNJLElBQUEsRUFBTTtNQUNONkcsS0FBQTtNQUNBLEdBQUdyRyxTQUFBLENBQVVFLFFBQUEsQ0FBU2xHLE9BQU87SUFDakMsQ0FBQztFQUNMO0VBQ0FtQyxTQUFTekUsS0FBQSxFQUFPa0UsT0FBQSxFQUFTO0lBQ3JCLE9BQU8sS0FBS3VNLFNBQUEsQ0FBVTtNQUNsQjNJLElBQUEsRUFBTTtNQUNOOUgsS0FBQTtNQUNBMEUsUUFBQSxFQUFVUixPQUFBLEtBQVksUUFBUUEsT0FBQSxLQUFZLFNBQVMsU0FBU0EsT0FBQSxDQUFRUSxRQUFBO01BQ3BFLEdBQUc0RCxTQUFBLENBQVVFLFFBQUEsQ0FBU3RFLE9BQUEsS0FBWSxRQUFRQSxPQUFBLEtBQVksU0FBUyxTQUFTQSxPQUFBLENBQVE1QixPQUFPO0lBQzNGLENBQUM7RUFDTDtFQUNBcUMsV0FBVzNFLEtBQUEsRUFBT3NDLE9BQUEsRUFBUztJQUN2QixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFDbEIzSSxJQUFBLEVBQU07TUFDTjlILEtBQUE7TUFDQSxHQUFHc0ksU0FBQSxDQUFVRSxRQUFBLENBQVNsRyxPQUFPO0lBQ2pDLENBQUM7RUFDTDtFQUNBc0MsU0FBUzVFLEtBQUEsRUFBT3NDLE9BQUEsRUFBUztJQUNyQixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFDbEIzSSxJQUFBLEVBQU07TUFDTjlILEtBQUE7TUFDQSxHQUFHc0ksU0FBQSxDQUFVRSxRQUFBLENBQVNsRyxPQUFPO0lBQ2pDLENBQUM7RUFDTDtFQUNBaVAsSUFBSUMsU0FBQSxFQUFXbFAsT0FBQSxFQUFTO0lBQ3BCLE9BQU8sS0FBS21PLFNBQUEsQ0FBVTtNQUNsQjNJLElBQUEsRUFBTTtNQUNOOUgsS0FBQSxFQUFPd1IsU0FBQTtNQUNQLEdBQUdsSixTQUFBLENBQVVFLFFBQUEsQ0FBU2xHLE9BQU87SUFDakMsQ0FBQztFQUNMO0VBQ0FtUCxJQUFJQyxTQUFBLEVBQVdwUCxPQUFBLEVBQVM7SUFDcEIsT0FBTyxLQUFLbU8sU0FBQSxDQUFVO01BQ2xCM0ksSUFBQSxFQUFNO01BQ045SCxLQUFBLEVBQU8wUixTQUFBO01BQ1AsR0FBR3BKLFNBQUEsQ0FBVUUsUUFBQSxDQUFTbEcsT0FBTztJQUNqQyxDQUFDO0VBQ0w7RUFDQVUsT0FBTzJPLEdBQUEsRUFBS3JQLE9BQUEsRUFBUztJQUNqQixPQUFPLEtBQUttTyxTQUFBLENBQVU7TUFDbEIzSSxJQUFBLEVBQU07TUFDTjlILEtBQUEsRUFBTzJSLEdBQUE7TUFDUCxHQUFHckosU0FBQSxDQUFVRSxRQUFBLENBQVNsRyxPQUFPO0lBQ2pDLENBQUM7RUFDTDtFQUFBO0FBQUE7QUFBQTtFQUlBc1AsU0FBU3RQLE9BQUEsRUFBUztJQUNkLE9BQU8sS0FBS2lQLEdBQUEsQ0FBSSxHQUFHakosU0FBQSxDQUFVRSxRQUFBLENBQVNsRyxPQUFPLENBQUM7RUFDbEQ7RUFDQWdPLEtBQUEsRUFBTztJQUNILE9BQU8sSUFBSVQsVUFBQSxDQUFVO01BQ2pCLEdBQUcsS0FBS2hHLElBQUE7TUFDUm1HLE1BQUEsRUFBUSxDQUFDLEdBQUcsS0FBS25HLElBQUEsQ0FBS21HLE1BQUEsRUFBUTtRQUFFbEksSUFBQSxFQUFNO01BQU8sQ0FBQztJQUNsRCxDQUFDO0VBQ0w7RUFDQThDLFlBQUEsRUFBYztJQUNWLE9BQU8sSUFBSWlGLFVBQUEsQ0FBVTtNQUNqQixHQUFHLEtBQUtoRyxJQUFBO01BQ1JtRyxNQUFBLEVBQVEsQ0FBQyxHQUFHLEtBQUtuRyxJQUFBLENBQUttRyxNQUFBLEVBQVE7UUFBRWxJLElBQUEsRUFBTTtNQUFjLENBQUM7SUFDekQsQ0FBQztFQUNMO0VBQ0F5SSxZQUFBLEVBQWM7SUFDVixPQUFPLElBQUlWLFVBQUEsQ0FBVTtNQUNqQixHQUFHLEtBQUtoRyxJQUFBO01BQ1JtRyxNQUFBLEVBQVEsQ0FBQyxHQUFHLEtBQUtuRyxJQUFBLENBQUttRyxNQUFBLEVBQVE7UUFBRWxJLElBQUEsRUFBTTtNQUFjLENBQUM7SUFDekQsQ0FBQztFQUNMO0VBQ0EsSUFBSStKLFdBQUEsRUFBYTtJQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUtoSSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxVQUFVO0VBQ2pFO0VBQ0EsSUFBSWlLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUtsSSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSWtLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUtuSSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSW1LLFdBQUEsRUFBYTtJQUNiLE9BQU8sQ0FBQyxDQUFDLEtBQUtwSSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxVQUFVO0VBQ2pFO0VBQ0EsSUFBSW9LLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUtySSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSXFLLE1BQUEsRUFBUTtJQUNSLE9BQU8sQ0FBQyxDQUFDLEtBQUt0SSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxLQUFLO0VBQzVEO0VBQ0EsSUFBSXNLLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUt2SSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSXVLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUt4SSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSXdLLFNBQUEsRUFBVztJQUNYLE9BQU8sQ0FBQyxDQUFDLEtBQUt6SSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxRQUFRO0VBQy9EO0VBQ0EsSUFBSXlLLE9BQUEsRUFBUztJQUNULE9BQU8sQ0FBQyxDQUFDLEtBQUsxSSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxNQUFNO0VBQzdEO0VBQ0EsSUFBSTBLLFFBQUEsRUFBVTtJQUNWLE9BQU8sQ0FBQyxDQUFDLEtBQUszSSxJQUFBLENBQUttRyxNQUFBLENBQU83USxJQUFBLENBQU0yUyxFQUFBLElBQU9BLEVBQUEsQ0FBR2hLLElBQUEsS0FBUyxPQUFPO0VBQzlEO0VBQ0EsSUFBSTJLLE9BQUEsRUFBUztJ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QUE7RUFDQUcsT0FBQTtFQUNBQyxVQUFBO0VBQ0FQLE9BQUE7RUFDQVUsYUFBQTtFQUNBUyxVQUFBO0VBQ0FwQixVQUFBO0VBQ0EyQixjQUFBLEVBQWdCM0IsVUFBQTtFQUNoQmlCLFdBQUE7RUFDQUgsV0FBQTtFQUNBaEIsVUFBQTtFQUNBRixRQUFBO0VBQ0FjLE1BQUE7RUFDQTVCLEtBQUE7RUFDQWEsVUFBQTtFQUNBd0IsV0FBQTtFQUNBRSxXQUFBO0VBQ0FzQixNQUFBO0VBQ0F0RCxNQUFBLEVBQVFDLE9BQUE7RUFDUmlDLFNBQUEsRUFBV2pDLE9BQUE7RUFDWCtFLElBQUE7RUFDQSxJQUFJbEUsc0JBQUEsRUFBeUI7SUFBRSxPQUFPQSxxQkFBQTtFQUF1QjtFQUM3RHVDLE1BQUE7RUFDQVIsR0FBQSxFQUFLQyxPQUFBO0VBQ0xDLEtBQUEsRUFBT0MsU0FBQTtFQUNQQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsT0FBQSxFQUFTQyxXQUFBO0VBQ1RHLElBQUEsRUFBTUMsUUFBQTtFQUNOTSxrQkFBQSxFQUFvQkMsc0JBQUE7RUFDcEJDLE1BQUEsRUFBUUMsV0FBQTtFQUNSLFFBQVFFLFFBQUE7RUFDUixZQUFZRSxZQUFBO0VBQ1osY0FBY0ksY0FBQTtFQUNkQyxZQUFBLEVBQWNDLGdCQUFBO0VBQ2RNLElBQUEsRUFBTUMsUUFBQTtFQUNOQyxPQUFBLEVBQVNDLFdBQUE7RUFDVEUsR0FBQSxFQUFLQyxPQUFBO0VBQ0xDLEdBQUEsRUFBS0MsT0FBQTtFQUNMQyxVQUFBLEVBQVlDLGNBQUE7RUFDWkMsS0FBQSxFQUFPQyxTQUFBO0VBQ1AsUUFBUUUsUUFBQTtFQUNSQyxRQUFBLEVBQVVDLFlBQUE7RUFDVkMsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLE1BQUEsRUFBUUMsVUFBQTtFQUNSRSxRQUFBO0VBQ0FDLE9BQUE7RUFDQUMsUUFBQSxFQUFVQyxZQUFBO0VBQ1ZDLE9BQUE7RUFDQUMsUUFBQSxFQUFVQyxZQUFBO0VBQ1ZDLFVBQUEsRUFBWUMsY0FBQTtFQUNaQyxPQUFBLEVBQVNDLFdBQUE7RUFDVEUsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLEdBQUEsRUFBS0MsT0FBQTtFQUNMRSxZQUFBLEVBQWNDLGdCQUFBO0VBQ2RDLE1BQUEsRUFBUUMsVUFBQTtFQUNSQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsV0FBQSxFQUFhN0QsV0FBQTtFQUNiOEQsS0FBQSxFQUFPQyxTQUFBO0VBQ1AsYUFBYUUsYUFBQTtFQUNiQyxLQUFBLEVBQU9DLFNBQUE7RUFDUEMsT0FBQSxFQUFTQyxXQUFBO0VBQ1QsUUFBUUcsUUFBQTtFQUNSNUksS0FBQTtFQUNBb0IsWUFBQTtFQUNBaUcsYUFBQTtFQUNBckc7QUFDSixDQUFDOzs7QUQveUlELElBQU84QyxrQkFBQSxHQUFRK0UsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=