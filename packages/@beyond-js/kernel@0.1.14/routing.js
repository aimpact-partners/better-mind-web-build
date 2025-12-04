System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/kernel/routing.0.1.14.js
var routing_0_1_14_exports = {};
__export(routing_0_1_14_exports, {
  URI: () => URI,
  routing: () => routing
});
module.exports = __toCommonJS(routing_0_1_14_exports);

// node_modules/@beyond-js/kernel/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.14/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.13/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./history/history", {
  hash: 3912439774,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondHistory = void 0;
    var _position = require2("./position");
    var _records = require2("./records");
    class BeyondHistory {
      #position;
      get position() {
        return this.#position;
      }
      #records;
      get records() {
        return this.#records;
      }
      get valid() {
        return this.#records.valid;
      }
      get current() {
        return this.valid ? this.#records.current.uri : void 0;
      }
      #initial = history.length;
      get initial() {
        return this.#initial;
      }
      /**
       * Process the browser URI that takes into consideration the routing mode
       *
       * @param {string} uri The internal URI (always starts with '/')
       * @return {string} The URI to be pushed or replaced in the browser considering the routing mode
       * @private
       */
      #processBrowserURI(uri) {
        void this;
        if (uri === void 0) return;
        const {
          routing: routing2
        } = require2("../routing");
        const RoutingModeEnum = require2("../routing").RoutingMode;
        return routing2.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
      }
      #push(uri) {
        this.#records.reset();
        this.#records.push(uri);
        this.#position.save(this.#records.length);
      }
      replaceState(state, title, uri) {
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        this.#records.updateCurrentURI(uri);
        const position = this.#position.value;
        history.replaceState(state, title, this.#processBrowserURI(uri));
        this.#position.save(position);
      }
      pushState(uri, state) {
        if (uri === `${location.pathname}${location.search}${location.hash}`) return;
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        history.pushState(state, null, this.#processBrowserURI(uri));
        this.#push(uri);
      }
      back() {
        const previous = this.#records.previous?.position;
        const current = this.#records.current?.position;
        if (!previous) return;
        history.go(previous - current);
      }
      forward() {
        const following = this.#records.following?.position;
        const current = this.#records.current?.position;
        if (!following) return;
        history.go(following - current);
      }
      constructor(routing2, Mode) {
        this.#position = new _position.HistoryPosition();
        this.#records = new _records.HistoryRecords(this.#position);
        if (this.#position.value === void 0) {
          let uri = routing2.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
          this.#push(uri);
        }
      }
    }
    exports.BeyondHistory = BeyondHistory;
  }
});
ims.set("./history/position", {
  hash: 3613484025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryPosition = void 0;
    class HistoryPosition {
      check() {
        if (this.value) return true;
        console.error("History state is not defined. This happen when state is changed outside the beyond defined navigation flows.");
        return false;
      }
      /**
       * Returns the position from the history.state
       * @returns {number | undefined}
       */
      get value() {
        return history.state?.__beyond_navigation_position;
      }
      save(position) {
        const state = history.state ? history.state : {};
        state.__beyond_navigation_position = position;
        history.replaceState(state, null);
      }
    }
    exports.HistoryPosition = HistoryPosition;
  }
});
ims.set("./history/records", {
  hash: 3466552890,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryRecords = void 0;
    class HistoryRecords {
      #position;
      #valid = true;
      get valid() {
        return this.#valid;
      }
      #entries = [];
      get entries() {
        return this.#entries.slice();
      }
      get length() {
        return this.#entries.length;
      }
      get current() {
        return this.#entries[this.#position.value - 1];
      }
      get previous() {
        const previous = this.#position.value - 2;
        if (previous < 0) return;
        return this.#entries[previous];
      }
      get following() {
        const following = this.#position.value;
        if (following >= this.#entries.length) return;
        return this.#entries[following];
      }
      constructor(position) {
        this.#position = position;
        let parsed;
        try {
          const stored = sessionStorage.getItem("__beyond_navigation_records");
          if (!stored && position.value !== void 0) {
            this.#valid = false;
            return;
          }
          parsed = stored ? JSON.parse(stored) : [];
        } catch (exc) {
          this.#valid = false;
          console.error("Error loading beyond navigation state", exc instanceof Error ? exc.stack : exc);
          this.#entries = [];
        }
        if (!(parsed instanceof Array)) {
          const warning = "The beyond navigation data, stored in session store is invalid.";
          console.warn(warning, parsed);
        }
        this.#entries = parsed;
      }
      /**
       * Set the URI always starting with '/' no matter the routing mode (hash or pathname)
       *
       * @param {string} uri
       * @return {string}
       */
      #sanitizeURI(uri) {
        void this;
        if (uri === void 0) return;
        return uri.startsWith("/") ? uri : `/${uri}`;
      }
      get(index) {
        return this.#entries[index];
      }
      /**
       * Push a uri to the records stored in the sessionStorage
       * @param {string} uri
       */
      push(uri) {
        uri = this.#sanitizeURI(uri);
        this.#entries.push({
          uri,
          position: history.length
        });
        this.save();
      }
      /**
       * Reset the list of records from the current position
       * This is required when:
       *      1. The list of browsed pages is greater than one (ex: page1 and page2)
       *      2. The user goes back in the history (ex: to position 1: page1)
       *      3. The user navigates another page (ex: page3)
       *
       * This method is required in step 3, to clean the records from position 1, and after this
       * execution, the navigation flow can push page3
       */
      reset() {
        const position = this.#position.value;
        if (position) return;
        this.#entries = this.#entries.filter(entry => entry.position < history.length);
      }
      updateCurrentURI(uri) {
        if (!this.#valid) return;
        const position = this.#position.value;
        uri = this.#sanitizeURI(uri);
        this.#entries[position - 1] = {
          uri,
          position: history.length
        };
        this.save();
      }
      save() {
        if (!this.#valid) return;
        sessionStorage.setItem("__beyond_navigation_records", JSON.stringify(this.#entries));
      }
    }
    exports.HistoryRecords = HistoryRecords;
  }
});
ims.set("./routing", {
  hash: 382689137,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.routing = exports.RoutingMode = exports.Routing = void 0;
    var _uri = require2("./uri/uri");
    var _core = require2("@beyond-js/kernel/core");
    var _history = require2("./history/history");
    var RoutingMode;
    (function (RoutingMode2) {
      RoutingMode2[RoutingMode2["Hash"] = 0] = "Hash";
      RoutingMode2[RoutingMode2["Pathname"] = 1] = "Pathname";
    })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));
    const serverside = typeof process === "object";
    class Routing extends _core.Events {
      #mode;
      get mode() {
        return this.#mode;
      }
      #history;
      get history() {
        return this.#history;
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      missing;
      redirect;
      #resolveConfigured;
      #configured = new Promise(resolve => this.#resolveConfigured = resolve);
      constructor() {
        super();
        const {
          specifier
        } = globalThis.__app_package;
        !serverside && bimport(`${specifier}/config`).then(({
          default: config
        }) => {
          let configured = config.routing?.mode;
          let routingMode = configured === "hash" ? RoutingMode.Hash : RoutingMode.Pathname;
          location.protocol === "file:" && (routingMode = RoutingMode.Hash);
          ![0, 1].includes(routingMode) && (routingMode = location.protocol === "file:" ? RoutingMode.Hash : RoutingMode.Pathname);
          this.#mode = routingMode;
          this.#history = new _history.BeyondHistory(this, RoutingMode);
          this.#resolveConfigured();
        });
      }
      #redirect = async uri => {
        if (typeof this.redirect !== "function") return;
        const redirected = await this.redirect(uri);
        if (!redirected) return;
        if (typeof redirected !== "string") {
          console.error(`Invalid route value set by custom routing function`, redirected);
          return;
        }
        if (uri.uri === redirected) return;
        this.pushState(redirected);
        return true;
      };
      pushState(uri, state) {
        this.#configured.then(() => {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      replaceState(state, title, uri) {
        this.#configured.then(() => {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      // Avoid to continue the execution on asynchronous calls, when a newest call's been made
      #cancellationToken = new _core.CancellationToken();
      update = async () => {
        const {
          hash,
          pathname,
          search
        } = window.location;
        const stripIndex = path2 => {
          const parts = path2.split("/");
          const kept = parts.filter((seg, i) => seg.toLowerCase() !== "index.html" || seg === "" && i === 0);
          let out = kept.join("/");
          if (!out.startsWith("/")) out = "/" + out;
          out = out.replace(/\/{2,}/g, "/");
          return out === "" ? "/" : out;
        };
        let path = stripIndex(pathname);
        path = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : `${path}${search}${hash}`;
        if (this.#uri?.uri === path) return;
        const cancellationTokenId = this.#cancellationToken.reset();
        const uri = this.#uri = new _uri.URI(path);
        const redirected = await this.#redirect(uri);
        if (!this.#cancellationToken.check(cancellationTokenId)) return;
        if (redirected) return;
        if (this.#history && uri.uri !== this.#history.current) {
          console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
        }
        this.#initialised ? this.trigger("change") : this.#resolve();
        this.#initialised = true;
      };
      // Wait for start.js be completed, as routing.redirect must be set before initialising routing
      #started = false;
      setup() {
        this.#started = true;
        !serverside && this.update().catch(exc => console.error(exc.stack));
      }
      back() {
        this.#history.back();
      }
      forward() {
        this.#history.forward();
      }
    }
    exports.Routing = Routing;
    const routing2 = exports.routing = new Routing();
    globalThis.routing = routing2;
    !serverside && (beyond.navigate = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.pushState = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.back = () => routing2.back());
    !serverside && (beyond.forward = () => routing2.forward());
    !serverside && window.addEventListener("popstate", () => routing2.update().catch(exc => console.error(exc.stack)));
  }
});
ims.set("./uri/querystring", {
  hash: 187911159,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueryString = void 0;
    class QueryString extends Map {
      constructor(search) {
        super();
        if (search.trim() === "") return;
        search = search.slice(0, 1) === "?" ? search.slice(1) : search;
        const split = search.split("&");
        for (let i = 0; i < split.length; ++i) {
          const param = split[i].split("=", 2);
          const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, " ")) : void 0;
          this.set(param[0], value);
        }
      }
    }
    exports.QueryString = QueryString;
  }
});
ims.set("./uri/uri", {
  hash: 748332499,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URI = void 0;
    var _querystring = require2("./querystring");
    class URI2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #search;
      get search() {
        return this.#search;
      }
      #qs;
      get qs() {
        return this.#qs;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      constructor(uri) {
        this.#uri = uri;
        const [u, hash] = uri.split("#");
        const [pathname, search] = u.split("?");
        this.#pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
        this.#search = search ? search : "";
        this.#qs = new _querystring.QueryString(this.#search);
        this.#hash = hash;
      }
    }
    exports.URI = URI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./routing",
  "from": "routing",
  "name": "routing"
}, {
  "im": "./uri/uri",
  "from": "URI",
  "name": "URI"
}];
var routing, URI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "routing") && (routing = require2 ? require2("./routing").routing : value);
  (require2 || prop === "URI") && (URI = require2 ? require2("./uri/uri").URI : value);
};
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nLjAuMS4xNC5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9oaXN0b3J5LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L3Bvc2l0aW9uLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L3JlY29yZHMudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3JvdXRpbmcudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3VyaS9xdWVyeXN0cmluZy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvdXJpL3VyaS50cyJdLCJuYW1lcyI6WyJyb3V0aW5nXzBfMV8xNF9leHBvcnRzIiwiX19leHBvcnQiLCJVUkkiLCJyb3V0aW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9wb3NpdGlvbiIsInJlcXVpcmUyIiwiX3JlY29yZHMiLCJCZXlvbmRIaXN0b3J5IiwicG9zaXRpb24iLCJyZWNvcmRzIiwidmFsaWQiLCJjdXJyZW50IiwidXJpIiwiaW5pdGlhbCIsImhpc3RvcnkiLCJsZW5ndGgiLCJwcm9jZXNzQnJvd3NlclVSSSIsIiNwcm9jZXNzQnJvd3NlclVSSSIsInJvdXRpbmcyIiwiUm91dGluZ01vZGVFbnVtIiwiUm91dGluZ01vZGUiLCJtb2RlIiwiSGFzaCIsInN1YnN0ciIsInB1c2giLCIjcHVzaCIsInJlc2V0Iiwic2F2ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwidGl0bGUiLCJFcnJvciIsInVwZGF0ZUN1cnJlbnRVUkkiLCJ2YWx1ZSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwiYmFjayIsInByZXZpb3VzIiwiZ28iLCJmb3J3YXJkIiwiZm9sbG93aW5nIiwiY29uc3RydWN0b3IiLCJNb2RlIiwiSGlzdG9yeVBvc2l0aW9uIiwiSGlzdG9yeVJlY29yZHMiLCJzbGljZSIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzYW5pdGl6ZVVSSSIsIiNzYW5pdGl6ZVVSSSIsInN0YXJ0c1dpdGgiLCJnZXQiLCJpbmRleCIsImZpbHRlciIsImVudHJ5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl91cmkiLCJfY29yZSIsIl9oaXN0b3J5IiwiUm91dGluZ01vZGUyIiwic2VydmVyc2lkZSIsInByb2Nlc3MiLCJSb3V0aW5nIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJyZXNvbHZlIiwicmVhZHkiLCJQcm9taXNlIiwibWlzc2luZyIsInJlZGlyZWN0IiwicmVzb2x2ZUNvbmZpZ3VyZWQiLCJjb25maWd1cmVkIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJiaW1wb3J0IiwidGhlbiIsImRlZmF1bHQiLCJjb25maWciLCJyb3V0aW5nTW9kZSIsIlBhdGhuYW1lIiwicHJvdG9jb2wiLCJpbmNsdWRlcyIsInJlZGlyZWN0ZWQiLCJ1cGRhdGUiLCJjYXRjaCIsImNhbmNlbGxhdGlvblRva2VuIiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJ3aW5kb3ciLCJzdHJpcEluZGV4IiwicGF0aDIiLCJwYXJ0cyIsInNwbGl0Iiwia2VwdCIsInNlZyIsImkiLCJ0b0xvd2VyQ2FzZSIsIm91dCIsImpvaW4iLCJyZXBsYWNlIiwicGF0aCIsImNhbmNlbGxhdGlvblRva2VuSWQiLCJ0cmlnZ2VyIiwic3RhcnRlZCIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwicGFyYW0iLCJkZWNv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QU1nQixLQUFBLEdBQVFuQixLQUFBLENBQU1HLENBQUMsRUFBRUgsS0FBQSxDQUFNLEtBQUssQ0FBQztVQUNuQyxNQUFNN0UsS0FBQSxHQUFRZ0csS0FBQSxDQUFNLENBQUMsSUFDakJDLGtCQUFBLENBQW1CRCxLQUFBLENBQU0sQ0FBQyxFQUFFWixPQUFBLENBQVEsT0FBTyxHQUFHLENBQUMsSUFBSTtVQUN2RCxLQUFLYyxHQUFBLENBQUlGLEtBQUEsQ0FBTSxDQUFDLEdBQUdoRyxLQUFLOztNQUVoQzs7SUFDSC9CLE9BQUEsQ0FBQTRILFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7O0lDVEQsSUFBQU0sWUFBQSxHQUFBL0gsUUFBQTtJQUVpQixNQUNYZ0ksSUFBQSxDQUFHO01BQ0ksQ0FBQXpILEdBQUE7TUFDVCxJQUFJQSxJQUFBLEVBQUc7UUFDSCxPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNoQjtNQUVTLENBQUF3QixRQUFBO01BQ1QsSUFBSUEsU0FBQSxFQUFRO1FBQ1IsT0FBTyxLQUFLLENBQUFBLFFBQUE7TUFDaEI7TUFFUyxDQUFBQyxNQUFBO01BQ1QsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7TUFFUyxDQUFBaUcsRUFBQTtNQUNULElBQUlBLEdBQUEsRUFBRTtRQUNGLE9BQU8sS0FBSyxDQUFBQSxFQUFBO01BQ2hCO01BRVMsQ0FBQWhHLElBQUE7TUFDVCxJQUFJQSxLQUFBLEVBQUk7UUFDSixPQUFPLEtBQUssQ0FBQUEsSUFBQTtNQUNoQjtNQUVBTSxZQUFZaEMsR0FBQSxFQUFXO1FBQ25CLEtBQUssQ0FBQUEsR0FBQSxHQUFPQSxHQUFBO1FBRVosTUFBTSxDQUFDMkgsQ0FBQSxFQUFHakcsSUFBSSxJQUFJMUIsR0FBQSxDQUFJa0csS0FBQSxDQUFNLEdBQUc7UUFDL0IsTUFBTSxDQUFDMUUsUUFBQSxFQUFVQyxNQUFNLElBQUlrRyxDQUFBLENBQUV6QixLQUFBLENBQU0sR0FBRztRQUV0QyxLQUFLLENBQUExRSxRQUFBLEdBQVlBLFFBQUEsQ0FBUytCLFVBQUEsQ0FBVyxHQUFHLElBQUkvQixRQUFBLEdBQVcsSUFBSUEsUUFBUTtRQUNuRSxLQUFLLENBQUFDLE1BQUEsR0FBVUEsTUFBQSxHQUFTQSxNQUFBLEdBQVM7UUFDakMsS0FBSyxDQUFBaUcsRUFBQSxHQUFNLElBQUlGLFlBQUEsQ0FBQU4sV0FBQSxDQUFZLEtBQUssQ0FBQXpGLE1BQU87UUFDdkMsS0FBSyxDQUFBQyxJQUFBLEdBQVFBLElBQUE7TUFDakI7O0lBQ0hwQyxPQUFBLENBQUFILEdBQUEsR0FBQXNJLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9