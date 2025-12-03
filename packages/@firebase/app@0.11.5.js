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

// .beyond/uimport/temp/@firebase/app.0.11.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hcHAuMC4xMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9sb2dnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZUFwcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZVNlcnZlckFwcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2hlYXJ0YmVhdFNlcnZpY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcmVnaXN0ZXJDb3JlQ29tcG9uZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHBfMF8xMV81X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZpcmViYXNlRXJyb3IiLCJpbXBvcnRfdXRpbDIiLCJTREtfVkVSU0lPTiIsIl9ERUZBVUxUX0VOVFJZX05BTUUiLCJERUZBVUxUX0VOVFJZX05BTUUiLCJfYWRkQ29tcG9uZW50IiwiX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiX2FwcHMiLCJfY2xlYXJDb21wb25lbnRzIiwiX2NvbXBvbmVudHMiLCJfZ2V0UHJvdmlkZXIiLCJfaXNGaXJlYmFzZUFwcCIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiX3JlbW92ZVNlcnZpY2VJbnN0YW5jZSIsIl9zZXJ2ZXJBcHBzIiwiZGVsZXRlQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImluaXRpYWxpemVBcHAiLCJpbml0aWFsaXplU2VydmVyQXBwIiwib25Mb2ciLCJyZWdpc3RlclZlcnNpb24iLCJzZXRMb2dMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJnZXRQbGF0Zm9ybUluZm9TdHJpbmciLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJtYXAiLCJwcm92aWRlciIsImlzVmVyc2lvblNlcnZpY2VQcm92aWRlciIsInNlcnZpY2UiLCJnZXRJbW1lZGlhdGUiLCJsaWJyYXJ5IiwidmVyc2lvbiIsImZpbHRlciIsImxvZ1N0cmluZyIsImpvaW4iLCJjb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJ0eXBlIiwibG9nZ2VyIiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIlBMQVRGT1JNX0xPR19TVFJJTkciLCJuYW1lJHEiLCJuYW1lJHAiLCJuYW1lJG4iLCJuYW1lJG8iLCJuYW1lJGwiLCJuYW1lJG0iLCJuYW1lJGsiLCJuYW1lJGoiLCJuYW1lJGkiLCJuYW1lJGgiLCJuYW1lJGciLCJuYW1lJGYiLCJuYW1lJGUiLCJuYW1lJGQiLCJuYW1lJGMiLCJuYW1lJGIiLCJuYW1lJGEiLCJuYW1lJDkiLCJuYW1lJDgiLCJuYW1lJDciLCJuYW1lJDYiLCJuYW1lJDUiLCJuYW1lJDQiLCJuYW1lJDMiLCJuYW1lJDEiLCJuYW1lJDIiLCJuYW1lIiwiTWFwIiwiYXBwIiwiYWRkQ29tcG9uZW50IiwiZSIsImRlYnVnIiwiYWRkT3JPdmVyd3JpdGVDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwiaGFzIiwic2V0IiwidmFsdWVzIiwic2VydmVyQXBwIiwibmFtZTIiLCJoZWFydGJlYXRDb250cm9sbGVyIiwiZ2V0UHJvdmlkZXIiLCJvcHRpb25hbCIsInRyaWdnZXJIZWFydGJlYXQiLCJpbnN0YW5jZUlkZW50aWZpZXIiLCJjbGVhckluc3RhbmNlIiwib2JqIiwib3B0aW9ucyIsInNldHRpbmdzIiwiY2xlYXIiLCJFUlJPUlMiLCJFUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJGaXJlYmFzZUFwcEltcGwiLCJjb25maWciLCJfaXNEZWxldGVkIiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfY29uZmlnIiwiX25hbWUiLCJfYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiX2NvbnRhaW5lciIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJjaGVja0Rlc3Ryb3llZCIsInZhbCIsImlzRGVsZXRlZCIsImNyZWF0ZSIsImFwcE5hbWUiLCJ2YWxpZGF0ZVRva2VuVFRMIiwiYmFzZTY0VG9rZW4iLCJ0b2tlbk5hbWUiLCJzZWNvbmRQYXJ0IiwiYmFzZTY0RGVjb2RlIiwic3BsaXQiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBDbGFpbSIsIkpTT04iLCJwYXJzZSIsImV4cCIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiZGlmZiIsIkZpcmViYXNlU2VydmVyQXBwSW1wbCIsInNlcnZlckNvbmZpZyIsImFwaUtleSIsImFwcEltcGwiLCJfc2VydmVyQ29uZmlnIiwiYXV0aElkVG9rZW4iLCJhcHBDaGVja1Rva2VuIiwiX2ZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiRmluYWxpemF0aW9uUmVnaXN0cnkiLCJhdXRvbWF0aWNDbGVhbnVwIiwiX3JlZkNvdW50IiwiaW5jUmVmQ291bnQiLCJyZWxlYXNlT25EZXJlZiIsInZlcnNpb24kMSIsInRvSlNPTiIsInJlZkNvdW50IiwicmVnaXN0ZXIiLCJkZWNSZWZDb3VudCIsInJhd0NvbmZpZyIsIm5hbWUzIiwiU3RyaW5nIiwiZ2V0RGVmYXVsdEFwcENvbmZpZyIsImV4aXN0aW5nQXBwIiwiZ2V0IiwiZGVlcEVxdWFsIiwiQ29tcG9uZW50Q29udGFpbmVyIiwibmV3QXBwIiwiX3NlcnZlckFwcENvbmZpZyIsImlzQnJvd3NlciIsImlzV2ViV29ya2VyIiwiYXBwT3B0aW9ucyIsIm5hbWVPYmoiLCJoYXNoQ29kZSIsInMiLCJyZWR1Y2UiLCJoYXNoIiwiYyIsIk1hdGgiLCJpbXVsIiwiY2hhckNvZGVBdCIsIm5hbWVTdHJpbmciLCJzdHJpbmdpZnkiLCJBcnJheSIsImZyb20iLCJjbGVhbnVwUHJvdmlkZXJzIiwiZGVsZXRlIiwiZmlyZWJhc2VTZXJ2ZXJBcHAiLCJQcm9taXNlIiwiYWxsIiwibGlicmFyeUtleU9yTmFtZSIsInZlcnNpb24yIiwidmFyaWFudCIsIl9hIiwibGlicmFyeU1pc21hdGNoIiwibWF0Y2giLCJ2ZXJzaW9uTWlzbWF0Y2giLCJ3YXJuaW5nIiwicHVzaCIsIndhcm4iLCJsb2dDYWxsYmFjayIsInNldFVzZXJMb2dIYW5kbGVyIiwibG9nTGV2ZWwiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIlNUT1JFX05BTUUiLCJkYlByb21pc2UiLCJnZXREYlByb21pc2UiLCJpbXBvcnRfaWRiIiwib3BlbkRCIiwidXBncmFkZSIsImRiIiwib2xkVmVyc2lvbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY2F0Y2giLCJvcmlnaW5hbEVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicmVzdWx0Iiwib2JqZWN0U3RvcmUiLCJjb21wdXRlS2V5IiwiZG9uZSIsImlkYkdldEVycm9yIiwid3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIiLCJoZWFydGJlYXRPYmplY3QiLCJwdXQiLCJhcHBJZCIsIk1BWF9IRUFERVJfQllURVMiLCJNQVhfTlVNX1NUT1JFRF9IRUFSVEJFQVRTIiwiSGVhcnRiZWF0U2VydmljZUltcGwiLCJfaGVhcnRiZWF0c0NhY2hlIiwiX3N0b3JhZ2UiLCJIZWFydGJlYXRTdG9yYWdlSW1wbCIsIl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlIiwicmVhZCIsInRoZW4iLCJwbGF0Zm9ybUxvZ2dlciIsImFnZW50IiwiZGF0ZSIsImdldFVUQ0RhdGVTdHJpbmciLCJoZWFydGJlYXRzIiwiX2IiLCJsYXN0U2VudEhlYXJ0YmVhdERhdGUiLCJzb21lIiwic2luZ2xlRGF0ZUhlYXJ0YmVhdCIsImxlbmd0aCIsImVhcmxpZXN0SGVhcnRiZWF0SWR4IiwiZ2V0RWFybGllc3RIZWFydGJlYXRJZHgiLCJzcGxpY2UiLCJvdmVyd3JpdGUiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiaGVhcnRiZWF0c1RvU2VuZCIsInVuc2VudEVudHJpZXMiLCJleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlciIsImhlYWRlclN0cmluZyIsImJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nIiwidG9kYXkiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsImhlYXJ0YmVhdHNDYWNoZSIsIm1heFNpemUiLCJzbGljZSIsImhlYXJ0YmVhdEVudHJ5IiwiZmluZCIsImhiIiwiZGF0ZXMiLCJjb3VudEJ5dGVzIiwicG9wIiwiX2NhblVzZUluZGV4ZWREQlByb21pc2UiLCJydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrIiwiaXNJbmRleGVkREJBdmFpbGFibGUiLCJ2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlIiwiY2FuVXNlSW5kZXhlZERCIiwiaWRiSGVhcnRiZWF0T2JqZWN0IiwiaGVhcnRiZWF0c09iamVjdCIsImV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCIsImFkZCIsImVhcmxpZXN0SGVhcnRiZWF0RGF0ZSIsImkiLCJyZWdpc3RlckNvcmVDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFB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QUFXSyxNQUFBLEtBQVcsR0FBRztJQUMzQixPQUFPOztFQUdULElBQUlDLG9CQUFBLEdBQXVCO0VBQzNCLElBQUkrQixxQkFBQSxHQUF3QnJDLFVBQUEsQ0FBVyxDQUFDLEVBQUVGLElBQUE7RUFFMUMsU0FBU3dDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl0QyxVQUFBLENBQVdLLE1BQUEsRUFBUWlDLENBQUEsSUFBSztJQUMxQyxJQUFJdEMsVUFBQSxDQUFXc0MsQ0FBQyxFQUFFeEMsSUFBQSxHQUFPdUMscUJBQUEsRUFBdUI7TUFDOUNBLHFCQUFBLEdBQXdCckMsVUFBQSxDQUFXc0MsQ0FBQyxFQUFFeEMsSUFBQTtNQUN0Q1Esb0JBQUEsR0FBdUJnQyxDQUFBOzs7RUFJM0IsT0FBT2hDLG9CQUFBO0FBQ1Q7QUNwVE0sU0FBVWlDLHVCQUF1QnpGLE9BQUEsRUFBZ0I7RUFDckQvSyxrQkFBQSxDQUNFLElBQUlxRyxnQkFBQSxDQUFBQyxTQUFBLENBQ0YsbUJBQ0F0RixTQUFBLElBQWEsSUFBSUYseUJBQUEsQ0FBMEJFLFNBQVMsR0FBQzs2QkFBQSxDQUV0RDtFQUVIaEIsa0JBQUEsQ0FDRSxJQUFJcUcsZ0JBQUEsQ0FBQUMsU0FBQSxDQUNGLGFBQ0F0RixTQUFBLElBQWEsSUFBSXNNLG9CQUFBLENBQXFCdE0sU0FBUyxHQUFDOzZCQUFBLENBRWpEO0VBSUhQLGVBQUEsQ0FBZ0I0QixNQUFBLEVBQU1vRyxTQUFBLEVBQVNzQyxPQUFPO0VBRXRDdEssZUFBQSxDQUFnQjRCLE1BQUEsRUFBTW9HLFNBQUEsRUFBUyxTQUFrQjtFQUVqRGhJLGVBQUEsQ0FBZ0IsV0FBVyxFQUFFO0FBQy9CO0FDaEJBK1Asc0JBQUEsQ0FBdUIsRUFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9