System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.4"]]);
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

// .beyond/uimport/temp/@firebase/app.0.11.4.js
var app_0_11_4_exports = {};
__export(app_0_11_4_exports, {
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
module.exports = __toCommonJS(app_0_11_4_exports);

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
var version$1 = "0.11.4";
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
var version = "11.6.0";
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
  ["no-app"]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
  ["bad-app-name"]: "Illegal App name: '{$appName}'",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["server-app-deleted"]: "Firebase Server App has been deleted",
  ["no-options"]: "Need to provide options, when not being deployed to hosting via source.",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function.",
  ["idb-open"]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-get"]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-set"]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  ["idb-delete"]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  ["finalization-registry-not-supported"]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  ["invalid-server-app-environment"]: "FirebaseServerApp is not for use in browser environments."
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
    this.container.addComponent(new import_component.Component("app", () => this, "PUBLIC"));
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
  const now = new Date().getTime();
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
  incRefCount(obj) {
    if (this.isDeleted) {
      return;
    }
    this._refCount++;
    if (obj !== void 0 && this._finalizationRegistry !== null) {
      this._finalizationRegistry.register(obj, this);
    }
  }
  decRefCount() {
    if (this.isDeleted) {
      return 0;
    }
    return --this._refCount;
  }
  automaticCleanup() {
    void deleteApp(this);
  }
  get settings() {
    this.checkDestroyed();
    return this._serverConfig;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("server-app-deleted");
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
    throw ERROR_FACTORY.create("no-options");
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
    throw ERROR_FACTORY.create("invalid-server-app-environment");
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
  }), "VERSION"));
}
function onLog(logCallback, options) {
  if (logCallback !== null && typeof logCallback !== "function") {
    throw ERROR_FACTORY.create("invalid-log-argument");
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
  const today = new Date();
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
  return (0, import_util.base64urlEncodeWithoutPadding)(JSON.stringify({
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
  _registerComponent(new import_component.Component("platform-logger", container => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  _registerComponent(new import_component.Component("heartbeat", container => new HeartbeatServiceImpl(container), "PRIVATE"));
  registerVersion(name$q, version$1, variant);
  registerVersion(name$q, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");
/**
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
 */
/**
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
 */
/**
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
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hcHAuMC4xMS40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9sb2dnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZUFwcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZVNlcnZlckFwcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2hlYXJ0YmVhdFNlcnZpY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvcmVnaXN0ZXJDb3JlQ29tcG9uZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHBfMF8xMV80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZpcmViYXNlRXJyb3IiLCJpbXBvcnRfdXRpbDIiLCJTREtfVkVSU0lPTiIsIl9ERUZBVUxUX0VOVFJZX05BTUUiLCJERUZBVUxUX0VOVFJZX05BTUUiLCJfYWRkQ29tcG9uZW50IiwiX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiX2FwcHMiLCJfY2xlYXJDb21wb25lbnRzIiwiX2NvbXBvbmVudHMiLCJfZ2V0UHJvdmlkZXIiLCJfaXNGaXJlYmFzZUFwcCIsIl9pc0ZpcmViYXNlU2VydmVyQXBwIiwiX3JlZ2lzdGVyQ29tcG9uZW50IiwiX3JlbW92ZVNlcnZpY2VJbnN0YW5jZSIsIl9zZXJ2ZXJBcHBzIiwiZGVsZXRlQXBwIiwiZ2V0QXBwIiwiZ2V0QXBwcyIsImluaXRpYWxpemVBcHAiLCJpbml0aWFsaXplU2VydmVyQXBwIiwib25Mb2ciLCJyZWdpc3RlclZlcnNpb24iLCJzZXRMb2dMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIiwiY29uc3RydWN0b3IiLCJjb250YWluZXIiLCJnZXRQbGF0Zm9ybUluZm9TdHJpbmciLCJwcm92aWRlcnMiLCJnZXRQcm92aWRlcnMiLCJtYXAiLCJwcm92aWRlciIsImlzVmVyc2lvblNlcnZpY2VQcm92aWRlciIsInNlcnZpY2UiLCJnZXRJbW1lZGlhdGUiLCJsaWJyYXJ5IiwidmVyc2lvbiIsImZpbHRlciIsImxvZ1N0cmluZyIsImpvaW4iLCJjb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJ0eXBlIiwibG9nZ2VyIiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIlBMQVRGT1JNX0xPR19TVFJJTkciLCJuYW1lJHEiLCJuYW1lJHAiLCJuYW1lJG4iLCJuYW1lJG8iLCJuYW1lJGwiLCJuYW1lJG0iLCJuYW1lJGsiLCJuYW1lJGoiLCJuYW1lJGkiLCJuYW1lJGgiLCJuYW1lJGciLCJuYW1lJGYiLCJuYW1lJGUiLCJuYW1lJGQiLCJuYW1lJGMiLCJuYW1lJGIiLCJuYW1lJGEiLCJuYW1lJDkiLCJuYW1lJDgiLCJuYW1lJDciLCJuYW1lJDYiLCJuYW1lJDUiLCJuYW1lJDQiLCJuYW1lJDMiLCJuYW1lJDEiLCJuYW1lJDIiLCJuYW1lIiwiTWFwIiwiYXBwIiwiYWRkQ29tcG9uZW50IiwiZSIsImRlYnVnIiwiYWRkT3JPdmVyd3JpdGVDb21wb25lbnQiLCJjb21wb25lbnROYW1lIiwiaGFzIiwic2V0IiwidmFsdWVzIiwic2VydmVyQXBwIiwibmFtZTIiLCJoZWFydGJlYXRDb250cm9sbGVyIiwiZ2V0UHJvdmlkZXIiLCJvcHRpb25hbCIsInRyaWdnZXJIZWFydGJlYXQiLCJpbnN0YW5jZUlkZW50aWZpZXIiLCJjbGVhckluc3RhbmNlIiwib2JqIiwib3B0aW9ucyIsInNldHRpbmdzIiwiY2xlYXIiLCJFUlJPUlMiLCJFUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJGaXJlYmFzZUFwcEltcGwiLCJjb25maWciLCJfaXNEZWxldGVkIiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfY29uZmlnIiwiX25hbWUiLCJfYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkIiwiX2NvbnRhaW5lciIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJjaGVja0Rlc3Ryb3llZCIsInZhbCIsImlzRGVsZXRlZCIsImNyZWF0ZSIsImFwcE5hbWUiLCJ2YWxpZGF0ZVRva2VuVFRMIiwiYmFzZTY0VG9rZW4iLCJ0b2tlbk5hbWUiLCJzZWNvbmRQYXJ0IiwiYmFzZTY0RGVjb2RlIiwic3BsaXQiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBDbGFpbSIsIkpTT04iLCJwYXJzZSIsImV4cCIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwiZGlmZiIsIkZpcmViYXNlU2VydmVyQXBwSW1wbCIsInNlcnZlckNvbmZpZyIsImFwaUtleSIsImFwcEltcGwiLCJfc2VydmVyQ29uZmlnIiwiYXV0aElkVG9rZW4iLCJhcHBDaGVja1Rva2VuIiwiX2ZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiRmluYWxpemF0aW9uUmVnaXN0cnkiLCJhdXRvbWF0aWNDbGVhbnVwIiwiX3JlZkNvdW50IiwiaW5jUmVmQ291bnQiLCJyZWxlYXNlT25EZXJlZiIsInZlcnNpb24kMSIsInRvSlNPTiIsInJlZkNvdW50IiwicmVnaXN0ZXIiLCJkZWNSZWZDb3VudCIsInJhd0NvbmZpZyIsIm5hbWUzIiwiU3RyaW5nIiwiZ2V0RGVmYXVsdEFwcENvbmZpZyIsImV4aXN0aW5nQXBwIiwiZ2V0IiwiZGVlcEVxdWFsIiwiQ29tcG9uZW50Q29udGFpbmVyIiwibmV3QXBwIiwiX3NlcnZlckFwcENvbmZpZyIsImlzQnJvd3NlciIsImlzV2ViV29ya2VyIiwiYXBwT3B0aW9ucyIsIm5hbWVPYmoiLCJoYXNoQ29kZSIsInMiLCJyZWR1Y2UiLCJoYXNoIiwiYyIsIk1hdGgiLCJpbXVsIiwiY2hhckNvZGVBdCIsIm5hbWVTdHJpbmciLCJzdHJpbmdpZnkiLCJBcnJheSIsImZyb20iLCJjbGVhbnVwUHJvdmlkZXJzIiwiZGVsZXRlIiwiZmlyZWJhc2VTZXJ2ZXJBcHAiLCJQcm9taXNlIiwiYWxsIiwibGlicmFyeUtleU9yTmFtZSIsInZlcnNpb24yIiwidmFyaWFudCIsIl9hIiwibGlicmFyeU1pc21hdGNoIiwibWF0Y2giLCJ2ZXJzaW9uTWlzbWF0Y2giLCJ3YXJuaW5nIiwicHVzaCIsIndhcm4iLCJsb2dDYWxsYmFjayIsInNldFVzZXJMb2dIYW5kbGVyIiwibG9nTGV2ZWwiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIlNUT1JFX05BTUUiLCJkYlByb21pc2UiLCJnZXREYlByb21pc2UiLCJpbXBvcnRfaWRiIiwib3BlbkRCIiwidXBncmFkZSIsImRiIiwib2xkVmVyc2lvbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY2F0Y2giLCJvcmlnaW5hbEVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJyZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicmVzdWx0Iiwib2JqZWN0U3RvcmUiLCJjb21wdXRlS2V5IiwiZG9uZSIsImlkYkdldEVycm9yIiwid3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIiLCJoZWFydGJlYXRPYmplY3QiLCJwdXQiLCJhcHBJZCIsIk1BWF9IRUFERVJfQllURVMiLCJNQVhfTlVNX1NUT1JFRF9IRUFSVEJFQVRTIiwiSGVhcnRiZWF0U2VydmljZUltcGwiLCJfaGVhcnRiZWF0c0NhY2hlIiwiX3N0b3JhZ2UiLCJIZWFydGJlYXRTdG9yYWdlSW1wbCIsIl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlIiwicmVhZCIsInRoZW4iLCJwbGF0Zm9ybUxvZ2dlciIsImFnZW50IiwiZGF0ZSIsImdldFVUQ0RhdGVTdHJpbmciLCJoZWFydGJlYXRzIiwiX2IiLCJsYXN0U2VudEhlYXJ0YmVhdERhdGUiLCJzb21lIiwic2luZ2xlRGF0ZUhlYXJ0YmVhdCIsImxlbmd0aCIsImVhcmxpZXN0SGVhcnRiZWF0SWR4IiwiZ2V0RWFybGllc3RIZWFydGJlYXRJZHgiLCJzcGxpY2UiLCJvdmVyd3JpdGUiLCJnZXRIZWFydGJlYXRzSGVhZGVyIiwiaGVhcnRiZWF0c1RvU2VuZCIsInVuc2VudEVudHJpZXMiLCJleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlciIsImhlYWRlclN0cmluZyIsImJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nIiwidG9kYXkiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsImhlYXJ0YmVhdHNDYWNoZSIsIm1heFNpemUiLCJzbGljZSIsImhlYXJ0YmVhdEVudHJ5IiwiZmluZCIsImhiIiwiZGF0ZXMiLCJjb3VudEJ5dGVzIiwicG9wIiwiX2NhblVzZUluZGV4ZWREQlByb21pc2UiLCJydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrIiwiaXNJbmRleGVkREJBdmFpbGFibGUiLCJ2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlIiwiY2FuVXNlSW5kZXhlZERCIiwiaWRiSGVhcnRiZWF0T2JqZWN0IiwiaGVhcnRiZWF0c09iamVjdCIsImV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCIsImFkZCIsImVhcmxpZXN0SGVhcnRiZWF0RGF0ZSIsImkiLCJyZWdpc3RlckNvcmVDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFB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