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

// .beyond/uimport/@firebase/app.0.11.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXBwLjAuMTEuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9wbGF0Zm9ybUxvZ2dlclNlcnZpY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2NvbnN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZmlyZWJhc2VBcHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvZmlyZWJhc2VTZXJ2ZXJBcHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4ZWRkYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9oZWFydGJlYXRTZXJ2aWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3JlZ2lzdGVyQ29yZUNvbXBvbmVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiYXBwXzBfMTFfNF9leHBvcnRzIiwiX19leHBvcnQiLCJGaXJlYmFzZUVycm9yIiwiaW1wb3J0X3V0aWwyIiwiU0RLX1ZFUlNJT04iLCJfREVGQVVMVF9FTlRSWV9OQU1FIiwiREVGQVVMVF9FTlRSWV9OQU1FIiwiX2FkZENvbXBvbmVudCIsIl9hZGRPck92ZXJ3cml0ZUNvbXBvbmVudCIsIl9hcHBzIiwiX2NsZWFyQ29tcG9uZW50cyIsIl9jb21wb25lbnRzIiwiX2dldFByb3ZpZGVyIiwiX2lzRmlyZWJhc2VBcHAiLCJfaXNGaXJlYmFzZVNlcnZlckFwcCIsIl9yZWdpc3RlckNvbXBvbmVudCIsIl9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UiLCJfc2VydmVyQXBwcyIsImRlbGV0ZUFwcCIsImdldEFwcCIsImdldEFwcHMiLCJpbml0aWFsaXplQXBwIiwiaW5pdGlhbGl6ZVNlcnZlckFwcCIsIm9uTG9nIiwicmVnaXN0ZXJWZXJzaW9uIiwic2V0TG9nTGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwiZ2V0UGxhdGZvcm1JbmZvU3RyaW5nIiwicHJvdmlkZXJzIiwiZ2V0UHJvdmlkZXJzIiwibWFwIiwicHJvdmlkZXIiLCJpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIiLCJzZXJ2aWNlIiwiZ2V0SW1tZWRpYXRlIiwibGlicmFyeSIsInZlcnNpb24iLCJmaWx0ZXIiLCJsb2dTdHJpbmciLCJqb2luIiwiY29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwidHlwZSIsImxvZ2dlciIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJQTEFURk9STV9MT0dfU1RSSU5HIiwibmFtZSRxIiwibmFtZSRwIiwibmFtZSRuIiwibmFtZSRvIiwibmFtZSRsIiwibmFtZSRtIiwibmFtZSRrIiwibmFtZSRqIiwibmFtZSRpIiwibmFtZSRoIiwibmFtZSRnIiwibmFtZSRmIiwibmFtZSRlIiwibmFtZSRkIiwibmFtZSRjIiwibmFtZSRiIiwibmFtZSRhIiwibmFtZSQ5IiwibmFtZSQ4IiwibmFtZSQ3IiwibmFtZSQ2IiwibmFtZSQ1IiwibmFtZSQ0IiwibmFtZSQzIiwibmFtZSQxIiwibmFtZSQyIiwibmFtZSIsIk1hcCIsImFwcCIsImFkZENvbXBvbmVudCIsImUiLCJkZWJ1ZyIsImFkZE9yT3ZlcndyaXRlQ29tcG9uZW50IiwiY29tcG9uZW50TmFtZSIsImhhcyIsInNldCIsInZhbHVlcyIsInNlcnZlckFwcCIsIm5hbWUyIiwiaGVhcnRiZWF0Q29udHJvbGxlciIsImdldFByb3ZpZGVyIiwib3B0aW9uYWwiLCJ0cmlnZ2VySGVhcnRiZWF0IiwiaW5zdGFuY2VJZGVudGlmaWVyIiwiY2xlYXJJbnN0YW5jZSIsIm9iaiIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImNsZWFyIiwiRVJST1JTIiwiRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiRmlyZWJhc2VBcHBJbXBsIiwiY29uZmlnIiwiX2lzRGVsZXRlZCIsIl9vcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX2NvbmZpZyIsIl9uYW1lIiwiX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCIsImF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCIsIl9jb250YWluZXIiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiY2hlY2tEZXN0cm95ZWQiLCJ2YWwiLCJpc0RlbGV0ZWQiLCJjcmVhdGUiLCJhcHBOYW1lIiwidmFsaWRhdGVUb2tlblRUTCIsImJhc2U2NFRva2VuIiwidG9rZW5OYW1lIiwic2Vjb25kUGFydCIsImJhc2U2NERlY29kZSIsInNwbGl0IiwiY29uc29sZSIsImVycm9yIiwiZXhwQ2xhaW0iLCJKU09OIiwicGFyc2UiLCJleHAiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImRpZmYiLCJGaXJlYmFzZVNlcnZlckFwcEltcGwiLCJzZXJ2ZXJDb25maWciLCJhcGlLZXkiLCJhcHBJbXBsIiwiX3NlcnZlckNvbmZpZyIsImF1dGhJZFRva2VuIiwiYXBwQ2hlY2tUb2tlbiIsIl9maW5hbGl6YXRpb25SZWdpc3RyeSIsIkZpbmFsaXphdGlvblJlZ2lzdHJ5IiwiYXV0b21hdGljQ2xlYW51cCIsIl9yZWZDb3VudCIsImluY1JlZkNvdW50IiwicmVsZWFzZU9uRGVyZWYiLCJ2ZXJzaW9uJDEiLCJ0b0pTT04iLCJyZWZDb3VudCIsInJlZ2lzdGVyIiwiZGVjUmVmQ291bnQiLCJyYXdDb25maWciLCJuYW1lMyIsIlN0cmluZyIsImdldERlZmF1bHRBcHBDb25maWciLCJleGlzdGluZ0FwcCIsImdldCIsImRlZXBFcXVhbCIsIkNvbXBvbmVudENvbnRhaW5lciIsIm5ld0FwcCIsIl9zZXJ2ZXJBcHBDb25maWciLCJpc0Jyb3dzZXIiLCJpc1dlYldvcmtlciIsImFwcE9wdGlvbnMiLCJuYW1lT2JqIiwiaGFzaENvZGUiLCJzIiwicmVkdWNlIiwiaGFzaCIsImMiLCJNYXRoIiwiaW11bCIsImNoYXJDb2RlQXQiLCJuYW1lU3RyaW5nIiwic3RyaW5naWZ5IiwiQXJyYXkiLCJmcm9tIiwiY2xlYW51cFByb3ZpZGVycyIsImRlbGV0ZSIsImZpcmViYXNlU2VydmVyQXBwIiwiUHJvbWlzZSIsImFsbCIsImxpYnJhcnlLZXlPck5hbWUiLCJ2ZXJzaW9uMiIsInZhcmlhbnQiLCJfYSIsImxpYnJhcnlNaXNtYXRjaCIsIm1hdGNoIiwidmVyc2lvbk1pc21hdGNoIiwid2FybmluZyIsInB1c2giLCJ3YXJuIiwibG9nQ2FsbGJhY2siLCJzZXRVc2VyTG9nSGFuZGxlciIsImxvZ0xldmVsIiwiREJfTkFNRSIsIkRCX1ZFUlNJT04iLCJTVE9SRV9OQU1FIiwiZGJQcm9taXNlIiwiZ2V0RGJQcm9taXNlIiwiaW1wb3J0X2lkYiIsIm9wZW5EQiIsInVwZ3JhZGUiLCJkYiIsIm9sZFZlcnNpb24iLCJjcmVhdGVPYmplY3RTdG9yZSIsImNhdGNoIiwib3JpZ2luYWxFcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwicmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCIiwidHgiLCJ0cmFuc2FjdGlvbiIsInJlc3VsdCIsIm9iamVjdFN0b3JlIiwiY29tcHV0ZUtleSIsImRvbmUiLCJpZGJHZXRFcnJvciIsIndyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCIiwiaGVhcnRiZWF0T2JqZWN0IiwicHV0IiwiYXBwSWQiLCJNQVhfSEVBREVSX0JZVEVTIiwiTUFYX05VTV9TVE9SRURfSEVBUlRCRUFUUyIsIkhlYXJ0YmVhdFNlcnZpY2VJbXBsIiwiX2hlYXJ0YmVhdHNDYWNoZSIsIl9zdG9yYWdlIiwiSGVhcnRiZWF0U3RvcmFnZUltcGwiLCJfaGVhcnRiZWF0c0NhY2hlUHJvbWlzZSIsInJlYWQiLCJ0aGVuIiwicGxhdGZvcm1Mb2dnZXIiLCJhZ2VudCIsImRhdGUiLCJnZXRVVENEYXRlU3RyaW5nIiwiaGVhcnRiZWF0cyIsIl9iIiwibGFzdFNlbnRIZWFydGJlYXREYXRlIiwic29tZSIsInNpbmdsZURhdGVIZWFydGJlYXQiLCJsZW5ndGgiLCJlYXJsaWVzdEhlYXJ0YmVhdElkeCIsImdldEVhcmxpZXN0SGVhcnRiZWF0SWR4Iiwic3BsaWNlIiwib3ZlcndyaXRlIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImhlYXJ0YmVhdHNUb1NlbmQiLCJ1bnNlbnRFbnRyaWVzIiwiZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIiLCJoZWFkZXJTdHJpbmciLCJiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyIsInRvZGF5IiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJoZWFydGJlYXRzQ2FjaGUiLCJtYXhTaXplIiwic2xpY2UiLCJoZWFydGJlYXRFbnRyeSIsImZpbmQiLCJoYiIsImRhdGVzIiwiY291bnRCeXRlcyIsInBvcCIsIl9jYW5Vc2VJbmRleGVkREJQcm9taXNlIiwicnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjayIsImlzSW5kZXhlZERCQXZhaWxhYmxlIiwidmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSIsImNhblVzZUluZGV4ZWREQiIsImlkYkhlYXJ0YmVhdE9iamVjdCIsImhlYXJ0YmVhdHNPYmplY3QiLCJleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QiLCJhZGQiLCJlYXJsaWVzdEhlYXJ0YmVhdERhdGUiLCJpIiwicmVnaXN0ZXJDb3JlQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFB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