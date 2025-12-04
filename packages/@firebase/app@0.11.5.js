System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep), dep => dependencies.set('@firebase/component@0.6.13', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep)],
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
  for (var name2 in all) __defProp(target, name2, {
    get: all[name2],
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

// .beyond/uimport/@firebase/app.0.11.5.js
var app_0_11_5_exports = {};
__export(app_0_11_5_exports, {
  FirebaseError: () => import_util2.FirebaseError,
  SDK_VERSION: () => SDK_VERSION,
  _DEFAULT_ENTRY_NAME: () => DEFAULT_ENTRY_NAME,
  _addComponent: () => _addComponent,
  _addOrOverwriteComponent: () => _addOrOverwriteComponent,
  _apps: () => _apps,
  _clearComponents: () => _clearComponents,
  _components: () => _components,
  _getProvider: () => _getProvider,
  _isFirebaseApp: () => _isFirebaseApp,
  _isFirebaseServerApp: () => _isFirebaseServerApp,
  _registerComponent: () => _registerComponent,
  _removeServiceInstance: () => _removeServiceInstance,
  _serverApps: () => _serverApps,
  deleteApp: () => deleteApp,
  getApp: () => getApp,
  getApps: () => getApps,
  initializeApp: () => initializeApp,
  initializeServerApp: () => initializeServerApp,
  onLog: () => onLog,
  registerVersion: () => registerVersion,
  setLogLevel: () => setLogLevel
});
module.exports = __toCommonJS(app_0_11_5_exports);

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var import_component = require("@firebase/component@0.6.13");
var import_logger = require("@firebase/logger@0.4.4");
var import_util = require("@firebase/util@1.11.0");
var import_util2 = require("@firebase/util@1.11.0");
var import_idb = require("idb@7.1.1");
var PlatformLoggerServiceImpl = class {
  constructor(container) {
    this.container = container;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map(provider => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter(logString => logString).join(" ");
  }
};
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
var name$q = "@firebase/app";
var version$1 = "0.11.5";
var logger = new import_logger.Logger("@firebase/app");
var name$p = "@firebase/app-compat";
var name$o = "@firebase/analytics-compat";
var name$n = "@firebase/analytics";
var name$m = "@firebase/app-check-compat";
var name$l = "@firebase/app-check";
var name$k = "@firebase/auth";
var name$j = "@firebase/auth-compat";
var name$i = "@firebase/database";
var name$h = "@firebase/data-connect";
var name$g = "@firebase/database-compat";
var name$f = "@firebase/functions";
var name$e = "@firebase/functions-compat";
var name$d = "@firebase/installations";
var name$c = "@firebase/installations-compat";
var name$b = "@firebase/messaging";
var name$a = "@firebase/messaging-compat";
var name$9 = "@firebase/performance";
var name$8 = "@firebase/performance-compat";
var name$7 = "@firebase/remote-config";
var name$6 = "@firebase/remote-config-compat";
var name$5 = "@firebase/storage";
var name$4 = "@firebase/storage-compat";
var name$3 = "@firebase/firestore";
var name$2 = "@firebase/vertexai";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "11.6.1";
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$q]: "fire-core",
  [name$p]: "fire-core-compat",
  [name$n]: "fire-analytics",
  [name$o]: "fire-analytics-compat",
  [name$l]: "fire-app-check",
  [name$m]: "fire-app-check-compat",
  [name$k]: "fire-auth",
  [name$j]: "fire-auth-compat",
  [name$i]: "fire-rtdb",
  [name$h]: "fire-data-connect",
  [name$g]: "fire-rtdb-compat",
  [name$f]: "fire-fn",
  [name$e]: "fire-fn-compat",
  [name$d]: "fire-iid",
  [name$c]: "fire-iid-compat",
  [name$b]: "fire-fcm",
  [name$a]: "fire-fcm-compat",
  [name$9]: "fire-perf",
  [name$8]: "fire-perf-compat",
  [name$7]: "fire-rc",
  [name$6]: "fire-rc-compat",
  [name$5]: "fire-gcs",
  [name$4]: "fire-gcs-compat",
  [name$3]: "fire-fst",
  [name$1]: "fire-fst-compat",
  [name$2]: "fire-vertex",
  "fire-js": "fire-js",
  // Platform identifier for JS SDK.
  [name]: "fire-js-all"
};
var _apps = /* @__PURE__ */new Map();
var _serverApps = /* @__PURE__ */new Map();
var _components = /* @__PURE__ */new Map();
function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
  }
}
function _addOrOverwriteComponent(app, component) {
  app.container.addOrOverwriteComponent(component);
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app of _apps.values()) {
    _addComponent(app, component);
  }
  for (const serverApp of _serverApps.values()) {
    _addComponent(serverApp, component);
  }
  return true;
}
function _getProvider(app, name2) {
  const heartbeatController = app.container.getProvider("heartbeat").getImmediate({
    optional: true
  });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app.container.getProvider(name2);
}
function _removeServiceInstance(app, name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
  _getProvider(app, name2).clearInstance(instanceIdentifier);
}
function _isFirebaseApp(obj) {
  return obj.options !== void 0;
}
function _isFirebaseServerApp(obj) {
  if (obj === null || obj === void 0) {
    return false;
  }
  return obj.settings !== void 0;
}
function _clearComponents() {
  _components.clear();
}
var ERRORS = {
  ["no-app"
  /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
  ["bad-app-name"
  /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}'",
  ["duplicate-app"
  /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"
  /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
  ["server-app-deleted"
  /* AppError.SERVER_APP_DELETED */]: "Firebase Server App has been deleted",
  ["no-options"
  /* AppError.NO_OPTIONS */]: "Need to provide options, when not being deployed to hosting via source.",
  ["invalid-app-argument"
  /* AppError.INVALID_APP_ARGUMENT */]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"
  /* AppError.INVALID_LOG_ARGUMENT */]: "First argument to `onLog` must be null or a function.",
  ["idb-open"
  /* AppError.IDB_OPEN */]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-get"
  /* AppError.IDB_GET */]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-set"
  /* AppError.IDB_WRITE */]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-delete"
  /* AppError.IDB_DELETE */]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  ["finalization-registry-not-supported"
  /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  ["invalid-server-app-environment"
  /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]: "FirebaseServerApp is not for use in browser environments."
};
var ERROR_FACTORY = new import_util.ErrorFactory("app", "Firebase", ERRORS);
var FirebaseAppImpl = class {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new import_component.Component("app", () => this, "PUBLIC"
    /* ComponentType.PUBLIC */));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", {
        appName: this._name
      });
    }
  }
};
function validateTokenTTL(base64Token, tokenName) {
  const secondPart = (0, import_util.base64Decode)(base64Token.split(".")[1]);
  if (secondPart === null) {
    console.error(`FirebaseServerApp ${tokenName} is invalid: second part could not be parsed.`);
    return;
  }
  const expClaim = JSON.parse(secondPart).exp;
  if (expClaim === void 0) {
    console.error(`FirebaseServerApp ${tokenName} is invalid: expiration claim could not be parsed`);
    return;
  }
  const exp = JSON.parse(secondPart).exp * 1e3;
  const now = (/* @__PURE__ */new Date()).getTime();
  const diff = exp - now;
  if (diff <= 0) {
    console.error(`FirebaseServerApp ${tokenName} is invalid: the token has expired.`);
  }
}
var FirebaseServerAppImpl = class extends FirebaseAppImpl {
  constructor(options, serverConfig, name2, container) {
    const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== void 0 ? serverConfig.automaticDataCollectionEnabled : false;
    const config = {
      name: name2,
      automaticDataCollectionEnabled
    };
    if (options.apiKey !== void 0) {
      super(options, config, container);
    } else {
      const appImpl = options;
      super(appImpl.options, config, container);
    }
    this._serverConfig = Object.assign({
      automaticDataCollectionEnabled
    }, serverConfig);
    if (this._serverConfig.authIdToken) {
      validateTokenTTL(this._serverConfig.authIdToken, "authIdToken");
    }
    if (this._serverConfig.appCheckToken) {
      validateTokenTTL(this._serverConfig.appCheckToken, "appCheckToken");
    }
    this._finalizationRegistry = null;
    if (typeof FinalizationRegistry !== "undefined") {
      this._finalizationRegistry = new FinalizationRegistry(() => {
        this.automaticCleanup();
      });
    }
    this._refCount = 0;
    this.incRefCount(this._serverConfig.releaseOnDeref);
    this._serverConfig.releaseOnDeref = void 0;
    serverConfig.releaseOnDeref = void 0;
    registerVersion(name$q, version$1, "serverapp");
  }
  toJSON() {
    return void 0;
  }
  get refCount() {
    return this._refCount;
  }
  // Increment the reference count of this server app. If an object is provided, register it
  // with the finalization registry.
  incRefCount(obj) {
    if (this.isDeleted) {
      return;
    }
    this._refCount++;
    if (obj !== void 0 && this._finalizationRegistry !== null) {
      this._finalizationRegistry.register(obj, this);
    }
  }
  // Decrement the reference count.
  decRefCount() {
    if (this.isDeleted) {
      return 0;
    }
    return --this._refCount;
  }
  // Invoked by the FinalizationRegistry callback to note that this app should go through its
  // reference counts and delete itself if no reference count remain. The coordinating logic that
  // handles this is in deleteApp(...).
  automaticCleanup() {
    void deleteApp(this);
  }
  get settings() {
    this.checkDestroyed();
    return this._serverConfig;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("server-app-deleted"
      /* AppError.SERVER_APP_DELETED */);
    }
  }
};
var SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
  let options = _options;
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = {
      name: name3
    };
  }
  const config = Object.assign({
    name: DEFAULT_ENTRY_NAME,
    automaticDataCollectionEnabled: false
  }, rawConfig);
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name2)
    });
  }
  options || (options = (0, import_util.getDefaultAppConfig)());
  if (!options) {
    throw ERROR_FACTORY.create("no-options"
    /* AppError.NO_OPTIONS */);
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if ((0, import_util.deepEqual)(options, existingApp.options) && (0, import_util.deepEqual)(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", {
        appName: name2
      });
    }
  }
  const container = new import_component.ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
  if ((0, import_util.isBrowser)() && !(0, import_util.isWebWorker)()) {
    throw ERROR_FACTORY.create("invalid-server-app-environment"
    /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
  }
  if (_serverAppConfig.automaticDataCollectionEnabled === void 0) {
    _serverAppConfig.automaticDataCollectionEnabled = false;
  }
  let appOptions;
  if (_isFirebaseApp(_options)) {
    appOptions = _options.options;
  } else {
    appOptions = _options;
  }
  const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
  if (nameObj.releaseOnDeref !== void 0) {
    delete nameObj.releaseOnDeref;
  }
  const hashCode = s => {
    return [...s].reduce((hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0, 0);
  };
  if (_serverAppConfig.releaseOnDeref !== void 0) {
    if (typeof FinalizationRegistry === "undefined") {
      throw ERROR_FACTORY.create("finalization-registry-not-supported", {});
    }
  }
  const nameString = "" + hashCode(JSON.stringify(nameObj));
  const existingApp = _serverApps.get(nameString);
  if (existingApp) {
    existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
    return existingApp;
  }
  const container = new import_component.ComponentContainer(nameString);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
  _serverApps.set(nameString, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME) {
  const app = _apps.get(name2);
  if (!app && name2 === DEFAULT_ENTRY_NAME && (0, import_util.getDefaultAppConfig)()) {
    return initializeApp();
  }
  if (!app) {
    throw ERROR_FACTORY.create("no-app", {
      appName: name2
    });
  }
  return app;
}
function getApps() {
  return Array.from(_apps.values());
}
async function deleteApp(app) {
  let cleanupProviders = false;
  const name2 = app.name;
  if (_apps.has(name2)) {
    cleanupProviders = true;
    _apps.delete(name2);
  } else if (_serverApps.has(name2)) {
    const firebaseServerApp = app;
    if (firebaseServerApp.decRefCount() <= 0) {
      _serverApps.delete(name2);
      cleanupProviders = true;
    }
  }
  if (cleanupProviders) {
    await Promise.all(app.container.getProviders().map(provider => provider.delete()));
    app.isDeleted = true;
  }
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [`Unable to register library "${library}" with version "${version2}":`];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version2}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new import_component.Component(`${library}-version`, () => ({
    library,
    version: version2
  }), "VERSION"
  /* ComponentType.VERSION */));
}
function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== "function") {
    throw ERROR_FACTORY.create("invalid-log-argument"
    /* AppError.INVALID_LOG_ARGUMENT */);
  }
  (0, import_logger.setUserLogHandler)(logCallback, options);
}
function setLogLevel(logLevel) {
  (0, import_logger.setLogLevel)(logLevel);
}
var DB_NAME = "firebase-heartbeat-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-heartbeat-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = (0, import_idb.openDB)(DB_NAME, DB_VERSION, {
      upgrade: (db, oldVersion) => {
        switch (oldVersion) {
          case 0:
            try {
              db.createObjectStore(STORE_NAME);
            } catch (e) {
              console.warn(e);
            }
        }
      }
    }).catch(e => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME);
    const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
    await tx.done;
    return result;
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
  try {
    const db = await getDbPromise();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app));
    await tx.done;
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app) {
  return `${app.name}!${app.options.appId}`;
}
var MAX_HEADER_BYTES = 1024;
var MAX_NUM_STORED_HEARTBEATS = 30;
var HeartbeatServiceImpl = class {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then(result => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var _a, _b;
    try {
      const platformLogger = this.container.getProvider("platform-logger").getImmediate();
      const agent = platformLogger.getPlatformInfoString();
      const date = getUTCDateString();
      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
        this._heartbeatsCache = await this._heartbeatsCachePromise;
        if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
          return;
        }
      }
      if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
        return;
      } else {
        this._heartbeatsCache.heartbeats.push({
          date,
          agent
        });
        if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
          const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
          this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
        }
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      logger.warn(e);
    }
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var _a;
    try {
      if (this._heartbeatsCache === null) {
        await this._heartbeatsCachePromise;
      }
      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
        return "";
      }
      const date = getUTCDateString();
      const {
        heartbeatsToSend,
        unsentEntries
      } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
      const headerString = (0, import_util.base64urlEncodeWithoutPadding)(JSON.stringify({
        version: 2,
        heartbeats: heartbeatsToSend
      }));
      this._heartbeatsCache.lastSentHeartbeatDate = date;
      if (unsentEntries.length > 0) {
        this._heartbeatsCache.heartbeats = unsentEntries;
        await this._storage.overwrite(this._heartbeatsCache);
      } else {
        this._heartbeatsCache.heartbeats = [];
        void this._storage.overwrite(this._heartbeatsCache);
      }
      return headerString;
    } catch (e) {
      logger.warn(e);
      return "";
    }
  }
};
function getUTCDateString() {
  const today = /* @__PURE__ */new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
var HeartbeatStorageImpl = class {
  constructor(app) {
    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!(0, import_util.isIndexedDBAvailable)()) {
      return false;
    } else {
      return (0, import_util.validateIndexedDBOpenable)().then(() => true).catch(() => false);
    }
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return {
        heartbeats: []
      };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
        return idbHeartbeatObject;
      } else {
        return {
          heartbeats: []
        };
      }
    }
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats
      });
    }
  }
  // add heartbeats
  async add(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [...existingHeartbeatsObject.heartbeats, ...heartbeatsObject.heartbeats]
      });
    }
  }
};
function countBytes(heartbeatsCache) {
  return (0, import_util.base64urlEncodeWithoutPadding)(
  // heartbeatsCache wrapper properties
  JSON.stringify({
    version: 2,
    heartbeats: heartbeatsCache
  })).length;
}
function getEarliestHeartbeatIdx(heartbeats) {
  if (heartbeats.length === 0) {
    return -1;
  }
  let earliestHeartbeatIdx = 0;
  let earliestHeartbeatDate = heartbeats[0].date;
  for (let i = 1; i < heartbeats.length; i++) {
    if (heartbeats[i].date < earliestHeartbeatDate) {
      earliestHeartbeatDate = heartbeats[i].date;
      earliestHeartbeatIdx = i;
    }
  }
  return earliestHeartbeatIdx;
}
function registerCoreComponents(variant) {
  _registerComponent(new import_component.Component("platform-logger", container => new PlatformLoggerServiceImpl(container), "PRIVATE"
  /* ComponentType.PRIVATE */));
  _registerComponent(new import_component.Component("heartbeat", container => new HeartbeatServiceImpl(container), "PRIVATE"
  /* ComponentType.PRIVATE */));
  registerVersion(name$q, version$1, variant);
  registerVersion(name$q, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");
/*! Bundled license information:

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
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
  (**
   * @license
   * Copyright 2023 Google LLC
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
  (**
   * @license
   * Copyright 2021 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXBwLjAuMTEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9wbGF0Zm9ybUxvZ2dlclNlcnZpY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZmlyZWJhc2VBcHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZmlyZWJhc2VTZXJ2ZXJBcHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4ZWRkYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9oZWFydGJlYXRTZXJ2aWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3JlZ2lzdGVyQ29yZUNvbXBvbmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiYXBwXzBfMTFfNV9leHBvcnRzIiwiX19leHBvcnQiLCJGaXJlYmFzZUVycm9yIiwiaW1wb3J0X3V0aWwyIiwiU0RLX1ZFUlNJT04iLCJfREVGQVVMVF9FTlRSWV9OQU1FIiwiREVGQVVMVF9FTlRSWV9OQU1FIiwiX2FkZENvbXBvbmVudCIsIl9hZGRPck92ZXJ3cml0ZUNvbXBvbmVudCIsIl9hcHBzIiwiX2NsZWFyQ29tcG9uZW50cyIsIl9jb21wb25lbnRzIiwiX2dldFByb3ZpZGVyIiwiX2lzRmlyZWJhc2VBcHAiLCJfaXNGaXJlYmFzZVNlcnZlckFwcCIsIl9yZWdpc3RlckNvbXBvbmVudCIsIl9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UiLCJfc2VydmVyQXBwcyIsImRlbGV0ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJpbml0aWFsaXplQXBwIiwiaW5pdGlhbGl6ZVNlcnZlckFwcCIsIm9uTG9nIiwicmVnaXN0ZXJWZXJzaW9uIiwic2V0TG9nTGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiZ2V0UGxhdGZvcm1JbmZvU3RyaW5nIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwibWFwIiwicHJvdmlkZXIiLCJpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIiLCJzZXJ2aWNlIiwiZ2V0SW1tZWRpYXRlIiwibGlicmFyeSIsInZlcnNpb24iLCJmaWx0ZXIiLCJsb2dTdHJpbmciLCJqb2luIiwiY29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwidHlwZSIsImxvZ2dlciIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJQTEFURk9STV9MT0dfU1RSSU5HIiwibmFtZSRxIiwibmFtZSRwIiwibmFtZSRuIiwibmFtZSRvIiwibmFtZSRsIiwibmFtZSRtIiwibmFtZSRrIiwibmFtZSRqIiwibmFtZSRpIiwibmFtZSRoIiwibmFtZSRnIiwibmFtZSRmIiwibmFtZSRlIiwibmFtZSRkIiwibmFtZSRjIiwibmFtZSRiIiwibmFtZSRhIiwibmFtZSQ5IiwibmFtZSQ4IiwibmFtZSQ3IiwibmFtZSQ2IiwibmFtZSQ1IiwibmFtZSQ0IiwibmFtZSQzIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSIsIk1hcCIsImFwcCIsImFkZENvbXBvbmVudCIsImUiLCJkZWJ1ZyIsImFkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImhhcyIsInNldCIsInZhbHVlcyIsInNlcnZlckFwcCIsIm5hbWUyIiwiaGVhcnRiZWF0Q29udHJvbGxlciIsImdldFByb3ZpZGVyIiwib3B0aW9uYWwiLCJ0cmlnZ2VySGVhcnRiZWF0IiwiaW5zdGFuY2VJZGVudGlmaWVyIiwiY2xlYXJJbnN0YW5jZSIsIm9iaiIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImNsZWFyIiwiRVJST1JTIiwiRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiRmlyZWJhc2VBcHBJbXBsIiwiY29uZmlnIiwiX2lzRGVsZXRlZCIsIl9vcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX2NvbmZpZyIsIl9uYW1lIiwiX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCIsImF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCIsIl9jb250YWluZXIiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiY2hlY2tEZXN0cm95ZWQiLCJ2YWwiLCJpc0RlbGV0ZWQiLCJjcmVhdGUiLCJhcHBOYW1lIiwidmFsaWRhdGVUb2tlblRUTCIsImJhc2U2NFRva2VuIiwidG9rZW5OYW1lIiwic2Vjb25kUGFydCIsImJhc2U2NERlY29kZSIsInNwbGl0IiwiY29uc29sZSIsImVycm9yIiwiZXhwQ2xhaW0iLCJKU09OIiwicGFyc2UiLCJleHAiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImRpZmYiLCJGaXJlYmFzZVNlcnZlckFwcEltcGwiLCJzZXJ2ZXJDb25maWciLCJhcGlLZXkiLCJhcHBJbXBsIiwiX3NlcnZlckNvbmZpZyIsImF1dGhJZFRva2VuIiwiYXBwQ2hlY2tUb2tlbiIsIl9maW5hbGl6YXRpb25SZWdpc3RyeSIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiYXV0b21hdGljQ2xlYW51cCIsIl9yZWZDb3VudCIsImluY1JlZkNvdW50IiwicmVsZWFzZU9uRGVyZWYiLCJ2ZXJzaW9uJDEiLCJ0b0pTT04iLCJyZWZDb3VudCIsInJlZ2lzdGVyIiwiZGVjUmVmQ291bnQiLCJyYXdDb25maWciLCJuYW1lMyIsIlN0cmluZyIsImdldERlZmF1bHRBcHBDb25maWciLCJleGlzdGluZ0FwcCIsImdldCIsImRlZXBFcXVhbCIsIkNvbXBvbmVudENvbnRhaW5lciIsIm5ld0FwcCIsIl9zZXJ2ZXJBcHBDb25maWciLCJpc0Jyb3dzZXIiLCJpc1dlYldvcmtlciIsImFwcE9wdGlvbnMiLCJuYW1lT2JqIiwiaGFzaENvZGUiLCJzIiwicmVkdWNlIiwiaGFzaCIsImMiLCJNYXRoIiwiaW11bCIsImNoYXJDb2RlQXQiLCJuYW1lU3RyaW5nIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiY2xlYW51cFByb3ZpZGVycyIsImRlbGV0ZSIsImZpcmViYXNlU2VydmVyQXBwIiwiUHJvbWlzZSIsImFsbCIsImxpYnJhcnlLZXlPck5hbWUiLCJ2ZXJzaW9uMiIsInZhcmlhbnQiLCJfYSIsImxpYnJhcnlNaXNtYXRjaCIsIm1hdGNoIiwidmVyc2lvbk1pc21hdGNoIiwid2FybmluZyIsInB1c2giLCJ3YXJuIiwibG9nQ2FsbGJhY2siLCJzZXRVc2VyTG9nSGFuZGxlciIsImxvZ0xldmVsIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJTVE9SRV9OQU1FIiwiZGJQcm9taXNlIiwiZ2V0RGJQcm9taXNlIiwiaW1wb3J0X2lkYiIsIm9wZW5EQiIsInVwZ3JhZGUiLCJkYiIsIm9sZFZlcnNpb24iLCJjcmVhdGVPYmplY3RTdG9yZSIsImNhdGNoIiwib3JpZ2luYWxFcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwicmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCIiwidHgiLCJ0cmFuc2FjdGlvbiIsInJlc3VsdCIsIm9iamVjdFN0b3JlIiwiY29tcHV0ZUtleSIsImRvbmUiLCJpZGJHZXRFcnJvciIsIndyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCIiwiaGVhcnRiZWF0T2JqZWN0IiwicHV0IiwiYXBwSWQiLCJNQVhfSEVBREVSX0JZVEVTIiwiTUFYX05VTV9TVE9SRURfSEVBUlRCRUFUUyIsIkhlYXJ0YmVhdFNlcnZpY2VJbXBsIiwiX2hlYXJ0YmVhdHNDYWNoZSIsIl9zdG9yYWdlIiwiSGVhcnRiZWF0U3RvcmFnZUltcGwiLCJfaGVhcnRiZWF0c0NhY2hlUHJvbWlzZSIsInJlYWQiLCJ0aGVuIiwicGxhdGZvcm1Mb2dnZXIiLCJhZ2VudCIsImRhdGUiLCJnZXRVVENEYXRlU3RyaW5nIiwiaGVhcnRiZWF0cyIsIl9iIiwibGFzdFNlbnRIZWFydGJlYXREYXRlIiwic29tZSIsInNpbmdsZURhdGVIZWFydGJlYXQiLCJsZW5ndGgiLCJlYXJsaWVzdEhlYXJ0YmVhdElkeCIsImdldEVhcmxpZXN0SGVhcnRiZWF0SWR4Iiwic3BsaWNlIiwib3ZlcndyaXRlIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImhlYXJ0YmVhdHNUb1NlbmQiLCJ1bnNlbnRFbnRyaWVzIiwiZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIiLCJoZWFkZXJTdHJpbmciLCJiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyIsInRvZGF5IiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFydGJlYXRzQ2FjaGUiLCJtYXhTaXplIiwic2xpY2UiLCJoZWFydGJlYXRFbnRyeSIsImZpbmQiLCJoYiIsImRhdGVzIiwiY291bnRCeXRlcyIsInBvcCIsIl9jYW5Vc2VJbmRleGVkREJQcm9taXNlIiwicnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjayIsImlzSW5kZXhlZERCQXZhaWxhYmxlIiwidmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSIsImNhblVzZUluZGV4ZWREQiIsImlkYkhlYXJ0YmVhdE9iamVjdCIsImhlYXJ0YmVhdHNPYmplY3QiLCJleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QiLCJhZGQiLCJlYXJsaWVzdEhlYXJ0YmVhdERhdGUiLCJpIiwicmVnaXN0ZXJDb3JlQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFB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TUFBQSxLQUFXLEdBQUc7SUFDM0IsT0FBTzs7RUFHVCxJQUFJQyxvQkFBQSxHQUF1QjtFQUMzQixJQUFJK0IscUJBQUEsR0FBd0JyQyxVQUFBLENBQVcsQ0FBQyxFQUFFRixJQUFBO0VBRTFDLFNBQVN3QyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdEMsVUFBQSxDQUFXSyxNQUFBLEVBQVFpQyxDQUFBLElBQUs7SUFDMUMsSUFBSXRDLFVBQUEsQ0FBV3NDLENBQUMsRUFBRXhDLElBQUEsR0FBT3VDLHFCQUFBLEVBQXVCO01BQzlDQSxxQkFBQSxHQUF3QnJDLFVBQUEsQ0FBV3NDLENBQUMsRUFBRXhDLElBQUE7TUFDdENRLG9CQUFBLEdBQXVCZ0MsQ0FBQTs7O0VBSTNCLE9BQU9oQyxvQkFBQTtBQUNUO0FDcFRNLFNBQVVpQyx1QkFBdUJ6RixPQUFBLEVBQWdCO0VBQ3JEL0ssa0JBQUEsQ0FDRSxJQUFJcUcsZ0JBQUEsQ0FBQUMsU0FBQSxDQUNGLG1CQUNBdEYsU0FBQSxJQUFhLElBQUlGLHlCQUFBLENBQTBCRSxTQUFTLEdBQUM7NkJBQUEsQ0FFdEQ7RUFFSGhCLGtCQUFBLENBQ0UsSUFBSXFHLGdCQUFBLENBQUFDLFNBQUEsQ0FDRixhQUNBdEYsU0FBQSxJQUFhLElBQUlzTSxvQkFBQSxDQUFxQnRNLFNBQVMsR0FBQzs2QkFBQSxDQUVqRDtFQUlIUCxlQUFBLENBQWdCNEIsTUFBQSxFQUFNb0csU0FBQSxFQUFTc0MsT0FBTztFQUV0Q3RLLGVBQUEsQ0FBZ0I0QixNQUFBLEVBQU1vRyxTQUFBLEVBQVMsU0FBa0I7RUFFakRoSSxlQUFBLENBQWdCLFdBQVcsRUFBRTtBQUMvQjtBQ2hCQStQLHNCQUFBLENBQXVCLEVBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==