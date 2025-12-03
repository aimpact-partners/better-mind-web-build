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

// .beyond/uimport/temp/zod.3.24.4.js
var zod_3_24_4_default = z;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3pvZC4zLjI0LjQuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL2xpYi9pbmRleC5tanMiXSwibmFtZXMiOlsiem9kXzNfMjRfNF9leHBvcnRzIiwiX19leHBvcnQiLCJCUkFORCIsIkRJUlRZIiwiRU1QVFlfUEFUSCIsIklOVkFMSUQiLCJORVZFUiIsIk9LIiwiUGFyc2VTdGF0dXMiLCJTY2hlbWEiLCJab2RUeXBlIiwiWm9kQW55IiwiWm9kQXJyYXkiLCJab2RCaWdJbnQiLCJab2RCb29sZWFuIiwiWm9kQnJhbmRlZCIsIlpvZENhdGNoIiwiWm9kRGF0ZSIsIlpvZERlZmF1bHQiLCJab2REaXNjcmltaW5hdGVkVW5pb24iLCJab2RFZmZlY3RzIiwiWm9kRW51bSIsIlpvZEVycm9yIiwiWm9kRmlyc3RQYXJ0eVR5cGVLaW5kIiwiWm9kRnVuY3Rpb24iLCJab2RJbnRlcnNlY3Rpb24iLCJab2RJc3N1ZUNvZGUiLCJab2RMYXp5IiwiWm9kTGl0ZXJhbCIsIlpvZE1hcCIsIlpvZE5hTiIsIlpvZE5hdGl2ZUVudW0iLCJab2ROZXZlciIsIlpvZE51bGwiLCJab2ROdWxsYWJsZSIsIlpvZE51bWJlciIsIlpvZE9iamVjdCIsIlpvZE9wdGlvbmFsIiwiWm9kUGFyc2VkVHlwZSIsIlpvZFBpcGVsaW5lIiwiWm9kUHJvbWlzZSIsIlpvZFJlYWRvbmx5IiwiWm9kUmVjb3JkIiwiWm9kU2NoZW1hIiwiWm9kU2V0IiwiWm9kU3RyaW5nIiwiWm9kU3ltYm9sIiwiWm9kVHJhbnNmb3JtZXIiLCJab2RUdXBsZSIsIlpvZFVuZGVmaW5lZCIsIlpvZFVuaW9uIiwiWm9kVW5rbm93biIsIlpvZFZvaWQiLCJhZGRJc3N1ZVRvQ29udGV4dCIsImFueSIsImFueVR5cGUiLCJhcnJheSIsImFycmF5VHlwZSIsImJpZ2ludCIsImJpZ0ludFR5cGUiLCJib29sZWFuIiwiYm9vbGVhblR5cGUiLCJjb2VyY2UiLCJjdXN0b20iLCJkYXRlIiwiZGF0ZVR5cGUiLCJkYXRldGltZVJlZ2V4IiwiZGVmYXVsdCIsInpvZF8zXzI0XzRfZGVmYXVsdCIsImRlZmF1bHRFcnJvck1hcCIsImVycm9yTWFwIiwiZGlzY3JpbWluYXRlZFVuaW9uIiwiZGlzY3JpbWluYXRlZFVuaW9uVHlwZSIsImVmZmVjdCIsImVmZmVjdHNUeXBlIiwiZW51bSIsImVudW1UeXBlIiwiZnVuY3Rpb24iLCJmdW5jdGlvblR5cGUiLCJnZXRFcnJvck1hcCIsImdldFBhcnNlZFR5cGUiLCJpbnN0YW5jZW9mIiwiaW5zdGFuY2VPZlR5cGUiLCJpbnRlcnNlY3Rpb24iLCJpbnRlcnNlY3Rpb25UeXBlIiwiaXNBYm9ydGVkIiwiaXNBc3luYyIsImlzRGlydHkiLCJpc1ZhbGlkIiwibGF0ZSIsImxhenkiLCJsYXp5VHlwZSIsImxpdGVyYWwiLCJsaXRlcmFsVHlwZSIsIm1ha2VJc3N1ZSIsIm1hcCIsIm1hcFR5cGUiLCJuYW4iLCJuYW5UeXBlIiwibmF0aXZlRW51bSIsIm5hdGl2ZUVudW1UeXBlIiwibmV2ZXIiLCJuZXZlclR5cGUiLCJudWxsIiwibnVsbFR5cGUiLCJudWxsYWJsZSIsIm51bGxhYmxlVHlwZSIsIm51bWJlciIsIm51bWJlclR5cGUiLCJvYmplY3QiLCJvYmplY3RUeXBlIiwib2JqZWN0VXRpbCIsIm9ib29sZWFuIiwib251bWJlciIsIm9wdGlvbmFsIiwib3B0aW9uYWxUeXBlIiwib3N0cmluZyIsInBpcGVsaW5lIiwicGlwZWxpbmVUeXBlIiwicHJlcHJvY2VzcyIsInByZXByb2Nlc3NUeXBlIiwicHJvbWlzZSIsInByb21pc2VUeXBlIiwicXVvdGVsZXNzSnNvbiIsInJlY29yZCIsInJlY29yZFR5cGUiLCJzZXQiLCJzZXRUeXBlIiwic2V0RXJyb3JNYXAiLCJzdHJpY3RPYmplY3QiLCJzdHJpY3RPYmplY3RUeXBlIiwic3RyaW5nIiwic3RyaW5nVHlwZSIsInN5bWJvbCIsInN5bWJvbFR5cGUiLCJ0cmFuc2Zvcm1lciIsInR1cGxlIiwidHVwbGVUeXBlIiwidW5kZWZpbmVkIiwidW5kZWZpbmVkVHlwZSIsInVuaW9uIiwidW5pb25UeXBlIiwidW5rbm93biIsInVua25vd25UeXBlIiwidXRpbCIsInZvaWQiLCJ2b2lkVHlwZSIsInoiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidXRpbDIiLCJhc3NlcnRFcXVhbCIsInZhbCIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsIl8iLCJ2YWx1ZSIsInRvU3RyaW5nIiwib2JqZWN0VXRpbDIiLCJtZXJnZVNoYXBlcyIsImZpcnN0Iiwic2Vjb25kIiwiZGF0YSIsInQiLCJpc05hTiIsIkFycmF5IiwiaXNBcnJheSIsInRoZW4iLCJjYXRjaCIsIk1hcCIsIlNldCIsIkRhdGUiLCJqc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJfWm9kRXJyb3IiLCJlcnJvcnMiLCJpc3N1ZXMiLCJjb25zdHJ1Y3RvciIsImFkZElzc3VlIiwic3ViIiwiYWRkSXNzdWVzIiwic3VicyIsImFjdHVhbFByb3RvIiwibmV3IiwidGFyZ2V0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJuYW1lIiwiZm9ybWF0IiwiX21hcHBlciIsIm1hcHBlciIsImlzc3VlIiwibWVzc2FnZSIsImZpZWxkRXJyb3JzIiwiX2Vycm9ycyIsInByb2Nlc3NFcnJvciIsImVycm9yIiwiY29kZSIsInVuaW9uRXJyb3JzIiwicmV0dXJuVHlwZUVycm9yIiwiYXJndW1lbnRzRXJyb3IiLCJwYXRoIiwibGVuZ3RoIiwiY3VyciIsImkiLCJlbCIsInRlcm1pbmFsIiwiYXNzZXJ0IiwiaXNFbXB0eSIsImZsYXR0ZW4iLCJmb3JtRXJyb3JzIiwiY3JlYXRlIiwiX2N0eCIsImludmFsaWRfdHlwZSIsInJlY2VpdmVkIiwiZXhwZWN0ZWQiLCJpbnZhbGlkX2xpdGVyYWwiLCJ1bnJlY29nbml6ZWRfa2V5cyIsImludmFsaWRfdW5pb24iLCJpbnZhbGlkX3VuaW9uX2Rpc2NyaW1pbmF0b3IiLCJvcHRpb25zIiwiaW52YWxpZF9lbnVtX3ZhbHVlIiwiaW52YWxpZF9hcmd1bWVudHMiLCJpbnZhbGlkX3JldHVybl90eXBlIiwiaW52YWxpZF9kYXRlIiwiaW52YWxpZF9zdHJpbmciLCJ2YWxpZGF0aW9uIiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInRvb19zbWFsbCIsInR5cGUiLCJleGFjdCIsImluY2x1c2l2ZSIsIm1pbmltdW0iLCJ0b29fYmlnIiwibWF4aW11bSIsImludmFsaWRfaW50ZXJzZWN0aW9uX3R5cGVzIiwibm90X211bHRpcGxlX29mIiwibXVsdGlwbGVPZiIsIm5vdF9maW5pdGUiLCJkZWZhdWx0RXJyb3IiLCJvdmVycmlkZUVycm9yTWFwIiwicGFyYW1zIiwiZXJyb3JNYXBzIiwiaXNzdWVEYXRhIiwiZnVsbFBhdGgiLCJmdWxsSXNzdWUiLCJlcnJvck1lc3NhZ2UiLCJtYXBzIiwibSIsInNsaWNlIiwicmV2ZXJzZSIsImN0eCIsIm92ZXJyaWRlTWFwIiwiY29tbW9uIiwiY29udGV4dHVhbEVycm9yTWFwIiwic2NoZW1hRXJyb3JNYXAiLCJ4IiwiX1BhcnNlU3RhdHVzIiwiZGlydHkiLCJhYm9ydCIsIm1lcmdlQXJyYXkiLCJzdGF0dXMiLCJyZXN1bHRzIiwiYXJyYXlWYWx1ZSIsInMiLCJtZXJnZU9iamVjdEFzeW5jIiwicGFpcnMiLCJzeW5jUGFpcnMiLCJwYWlyIiwibWVyZ2VPYmplY3RTeW5jIiwiZmluYWxPYmplY3QiLCJhbHdheXNTZXQiLCJmcmVlemUiLCJQcm9taXNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImdldCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJTdXBwcmVzc2VkRXJyb3IiLCJzdXBwcmVzc2VkIiwiZXJyb3JVdGlsIiwiZXJyb3JVdGlsMiIsImVyclRvT2JqIiwiX1pvZEVudW1fY2FjaGUiLCJfWm9kTmF0aXZlRW51bV9jYWNoZSIsIlBhcnNlSW5wdXRMYXp5UGF0aCIsInBhcmVudCIsIl9jYWNoZWRQYXRoIiwiX3BhdGgiLCJfa2V5IiwiaGFuZGxlUmVzdWx0IiwicmVzdWx0Iiwic3VjY2VzcyIsIl9lcnJvciIsInByb2Nlc3NDcmVhdGVQYXJhbXMiLCJlcnJvck1hcDIiLCJpbnZhbGlkX3R5cGVfZXJyb3IiLCJyZXF1aXJlZF9lcnJvciIsImRlc2NyaXB0aW9uIiwiY3VzdG9tTWFwIiwiaXNzIiwiX2EiLCJfYiIsIl9kZWYiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJzYWZlUGFyc2UiLCJhc3luYyIsIn52YWxpZGF0ZSIsImVyciIsInRvTG93ZXJDYXNlIiwicGFyc2VBc3luYyIsInNhZmVQYXJzZUFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsInJlZmluZSIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnQiLCJyZWZpbmVtZW50RGF0YSIsInNjaGVtYSIsInR5cGVOYW1lIiwic3VwZXJSZWZpbmUiLCJkZWYiLCJzcGEiLCJiaW5kIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwidmVyc2lvbiIsInZlbmRvciIsInZhbGlkYXRlIiwib3B0aW9uIiwiaW5jb21pbmciLCJkZWZhdWx0VmFsdWVGdW5jIiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiY2F0Y2hWYWx1ZUZ1bmMiLCJjYXRjaFZhbHVlIiwiVGhpcyIsImN1aWRSZWdleCIsImN1aWQyUmVnZXgiLCJ1bGlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJuYW5vaWRSZWdleCIsImp3dFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY0Q2lkclJlZ2V4IiwiaXB2NlJlZ2V4IiwiaXB2NkNpZHJSZWdleCIsImJhc2U2NFJlZ2V4IiwiYmFzZTY0dXJsUmVnZXgiLCJkYXRlUmVnZXhTb3VyY2UiLCJkYXRlUmVnZXgiLCJSZWdFeHAiLCJ0aW1lUmVnZXhTb3VyY2UiLCJhcmdzIiwic2Vjb25kc1JlZ2V4U291cmNlIiwicHJlY2lzaW9uIiwic2Vjb25kc1F1YW50aWZpZXIiLCJ0aW1lUmVnZXgiLCJyZWdleCIsIm9wdHMiLCJsb2NhbCIsIm9mZnNldCIsImlzVmFsaWRJUCIsImlwIiwidGVzdCIsImlzVmFsaWRKV1QiLCJqd3QiLCJhbGciLCJoZWFkZXIiLCJzcGxpdCIsImJhc2U2NCIsInBhZEVuZCIsImRlY29kZWQiLCJhdG9iIiwidHlwIiwiaXNWYWxpZENpZHIiLCJfWm9kU3RyaW5nIiwiU3RyaW5nIiwiY3R4MiIsImNoZWNrcyIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NHVybCIsImNpZHIiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNDSURSIiwiaXNCYXNlNjQiLCJpc0Jhc2U2NHVybCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsInBvdyIsIl9ab2ROdW1iZXIiLCJhcmd1bWVudHMiLCJndGUiLCJsdGUiLCJzZXRMaW1pdCIsImd0IiwibHQiLCJpbnQiLCJwb3NpdGl2ZSIsIm5lZ2F0aXZlIiwibm9ucG9zaXRpdmUiLCJub25uZWdhdGl2ZSIsImZpbml0ZSIsInNhZmUiLCJNSU5fU0FGRV9JTlRFR0VSIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJpc0ludCIsIl9ab2RCaWdJbnQiLCJCaWdJbnQiLCJfZ2V0SW52YWxpZElucHV0IiwiQm9vbGVhbiIsIl9ab2REYXRlIiwiZ2V0VGltZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2FueSIsIl91bmtub3duIiwiX1pvZEFycmF5IiwiZXhhY3RMZW5ndGgiLCJhbGwiLCJyZXN1bHQyIiwiZWxlbWVudCIsImRlZXBQYXJ0aWFsaWZ5IiwibmV3U2hhcGUiLCJzaGFwZSIsImZpZWxkU2NoZW1hIiwidW53cmFwIiwiX1pvZE9iamVjdCIsIl9jYWNoZWQiLCJub25zdHJpY3QiLCJwYXNzdGhyb3VnaCIsImF1Z21lbnQiLCJleHRlbmQiLCJfZ2V0Q2FjaGVkIiwic2hhcGVLZXlzIiwiZXh0cmFLZXlzIiwiY2F0Y2hhbGwiLCJ1bmtub3duS2V5cyIsImtleVZhbGlkYXRvciIsInN0cmljdCIsIl9jIiwiX2QiLCJzdHJpcCIsImF1Z21lbnRhdGlvbiIsIm1lcmdlIiwibWVyZ2luZyIsIm1lcmdlZCIsInNldEtleSIsImluZGV4IiwicGljayIsIm1hc2siLCJmb3JFYWNoIiwib21pdCIsImRlZXBQYXJ0aWFsIiwicGFydGlhbCIsInJlcXVpcmVkIiwibmV3RmllbGQiLCJrZXlvZiIsImNyZWF0ZVpvZEVudW0iLCJzdHJpY3RDcmVhdGUiLCJsYXp5Y3JlYXRlIiwiaGFuZGxlUmVzdWx0cyIsImNoaWxkQ3R4IiwiaXNzdWVzMiIsInR5cGVzIiwiZ2V0RGlzY3JpbWluYXRvciIsIl9ab2REaXNjcmltaW5hdGVkVW5pb24iLCJkaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvclZhbHVlIiwib3B0aW9uc01hcCIsImZyb20iLCJkaXNjcmltaW5hdG9yVmFsdWVzIiwibWVyZ2VWYWx1ZXMiLCJhIiwiYiIsImFUeXBlIiwiYlR5cGUiLCJ2YWxpZCIsImJLZXlzIiwic2hhcmVkS2V5cyIsImluZGV4T2YiLCJuZXdPYmoiLCJzaGFyZWRWYWx1ZSIsIm5ld0FycmF5IiwiaXRlbUEiLCJpdGVtQiIsImhhbmRsZVBhcnNlZCIsInBhcnNlZExlZnQiLCJwYXJzZWRSaWdodCIsImxlZnQiLCJyaWdodCIsIl9ab2RUdXBsZSIsInJlc3QiLCJpdGVtSW5kZXgiLCJzY2hlbWFzIiwiX1pvZFJlY29yZCIsImtleVNjaGVtYSIsImtleVR5cGUiLCJ2YWx1ZVNjaGVtYSIsInZhbHVlVHlwZSIsInRoaXJkIiwiZW50cmllcyIsImZpbmFsTWFwIiwiX1pvZFNldCIsIm1pblNpemUiLCJzaXplIiwibWF4U2l6ZSIsImZpbmFsaXplU2V0IiwiZWxlbWVudHMyIiwicGFyc2VkU2V0IiwiYWRkIiwiZWxlbWVudHMiLCJ2YWx1ZXMiLCJfWm9kRnVuY3Rpb24iLCJpbXBsZW1lbnQiLCJtYWtlQXJnc0lzc3VlIiwibWFrZVJldHVybnNJc3N1ZSIsInJldHVybnMiLCJmbiIsIm1lIiwicGFyc2VkQXJncyIsIlJlZmxlY3QiLCJhcHBseSIsInBhcnNlZFJldHVybnMiLCJwYXJhbWV0ZXJzIiwicmV0dXJuVHlwZSIsImZ1bmMiLCJ2YWxpZGF0ZWRGdW5jIiwic3RyaWN0SW1wbGVtZW50IiwiZ2V0dGVyIiwibGF6eVNjaGVtYSIsIl9ab2RFbnVtIiwiZXhwZWN0ZWRWYWx1ZXMiLCJlbnVtVmFsdWVzIiwiVmFsdWVzIiwiRW51bSIsImV4dHJhY3QiLCJuZXdEZWYiLCJleGNsdWRlIiwib3B0IiwiV2Vha01hcCIsIm5hdGl2ZUVudW1WYWx1ZXMiLCJwcm9taXNpZmllZCIsInNvdXJjZVR5cGUiLCJjaGVja0N0eCIsImFyZyIsImZhdGFsIiwicHJvY2Vzc2VkIiwicHJvY2Vzc2VkMiIsImV4ZWN1dGVSZWZpbmVtZW50IiwiYWNjIiwiaW5uZXIiLCJiYXNlIiwiY3JlYXRlV2l0aFByZXByb2Nlc3MiLCJyZW1vdmVEZWZhdWx0IiwibmV3Q3R4IiwicmVtb3ZlQ2F0Y2giLCJTeW1ib2wiLCJfWm9kUGlwZWxpbmUiLCJoYW5kbGVBc3luYyIsImluUmVzdWx0IiwiaW4iLCJvdXQiLCJjbGVhblBhcmFtcyIsInAiLCJwMiIsIl9wYXJhbXMiLCJyIiwicjIiLCJfYTIiLCJfYjIiLCJfZmF0YWwiLCJab2RGaXJzdFBhcnR5VHlwZUtpbmQyIiwiY2xzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtF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cEIsV0FBQTtFQUNBRyxPQUFBO0VBQ0FDLFVBQUE7RUFDQVAsT0FBQTtFQUNBVSxhQUFBO0VBQ0FTLFVBQUE7RUFDQXBCLFVBQUE7RUFDQTJCLGNBQUEsRUFBZ0IzQixVQUFBO0VBQ2hCaUIsV0FBQTtFQUNBSCxXQUFBO0VBQ0FoQixVQUFBO0VBQ0FGLFFBQUE7RUFDQWMsTUFBQTtFQUNBNUIsS0FBQTtFQUNBYSxVQUFBO0VBQ0F3QixXQUFBO0VBQ0FFLFdBQUE7RUFDQXNCLE1BQUE7RUFDQXRELE1BQUEsRUFBUUMsT0FBQTtFQUNSaUMsU0FBQSxFQUFXakMsT0FBQTtFQUNYK0UsSUFBQTtFQUNBLElBQUlsRSxzQkFBQSxFQUF5QjtJQUFFLE9BQU9BLHFCQUFBO0VBQXVCO0VBQzdEdUMsTUFBQTtFQUNBUixHQUFBLEVBQUtDLE9BQUE7RUFDTEMsS0FBQSxFQUFPQyxTQUFBO0VBQ1BDLE1BQUEsRUFBUUMsVUFBQTtFQUNSQyxPQUFBLEVBQVNDLFdBQUE7RUFDVEcsSUFBQSxFQUFNQyxRQUFBO0VBQ05NLGtCQUFBLEVBQW9CQyxzQkFBQTtFQUNwQkMsTUFBQSxFQUFRQyxXQUFBO0VBQ1IsUUFBUUUsUUFBQTtFQUNSLFlBQVlFLFlBQUE7RUFDWixjQUFjSSxjQUFBO0VBQ2RDLFlBQUEsRUFBY0MsZ0JBQUE7RUFDZE0sSUFBQSxFQUFNQyxRQUFBO0VBQ05DLE9BQUEsRUFBU0MsV0FBQTtFQUNURSxHQUFBLEVBQUtDLE9BQUE7RUFDTEMsR0FBQSxFQUFLQyxPQUFBO0VBQ0xDLFVBQUEsRUFBWUMsY0FBQTtFQUNaQyxLQUFBLEVBQU9DLFNBQUE7RUFDUCxRQUFRRSxRQUFBO0VBQ1JDLFFBQUEsRUFBVUMsWUFBQTtFQUNWQyxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsTUFBQSxFQUFRQyxVQUFBO0VBQ1JFLFFBQUE7RUFDQUMsT0FBQTtFQUNBQyxRQUFBLEVBQVVDLFlBQUE7RUFDVkMsT0FBQTtFQUNBQyxRQUFBLEVBQVVDLFlBQUE7RUFDVkMsVUFBQSxFQUFZQyxjQUFBO0VBQ1pDLE9BQUEsRUFBU0MsV0FBQTtFQUNURSxNQUFBLEVBQVFDLFVBQUE7RUFDUkMsR0FBQSxFQUFLQyxPQUFBO0VBQ0xFLFlBQUEsRUFBY0MsZ0JBQUE7RUFDZEMsTUFBQSxFQUFRQyxVQUFBO0VBQ1JDLE1BQUEsRUFBUUMsVUFBQTtFQUNSQyxXQUFBLEVBQWE3RCxXQUFBO0VBQ2I4RCxLQUFBLEVBQU9DLFNBQUE7RUFDUCxhQUFhRSxhQUFBO0VBQ2JDLEtBQUEsRUFBT0MsU0FBQTtFQUNQQyxPQUFBLEVBQVNDLFdBQUE7RUFDVCxRQUFRRyxRQUFBO0VBQ1I1SSxLQUFBO0VBQ0FvQixZQUFBO0VBQ0FpRyxhQUFBO0VBQ0FyRztBQUNKLENBQUM7OztBRC95SUQsSUFBTzhDLGtCQUFBLEdBQVErRSxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==