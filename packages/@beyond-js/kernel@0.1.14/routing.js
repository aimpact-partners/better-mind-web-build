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

// .beyond/uimport/temp/@beyond-js/kernel/routing.0.1.14.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcuMC4xLjE0LmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L2hpc3RvcnkudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvcG9zaXRpb24udHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvcmVjb3Jkcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvcm91dGluZy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvdXJpL3F1ZXJ5c3RyaW5nLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy91cmkvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMF8xXzE0X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlVSSSIsInJvdXRpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3Bvc2l0aW9uIiwicmVxdWlyZTIiLCJfcmVjb3JkcyIsIkJleW9uZEhpc3RvcnkiLCJwb3NpdGlvbiIsInJlY29yZHMiLCJ2YWxpZCIsImN1cnJlbnQiLCJ1cmkiLCJpbml0aWFsIiwiaGlzdG9yeSIsImxlbmd0aCIsInByb2Nlc3NCcm93c2VyVVJJIiwiI3Byb2Nlc3NCcm93c2VyVVJJIiwicm91dGluZzIiLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicHVzaCIsIiNwdXNoIiwicmVzZXQiLCJzYXZlIiwicmVwbGFjZVN0YXRlIiwic3RhdGUiLCJ0aXRsZSIsIkVycm9yIiwidXBkYXRlQ3VycmVudFVSSSIsInZhbHVlIiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJiYWNrIiwicHJldmlvdXMiLCJnbyIsImZvcndhcmQiLCJmb2xsb3dpbmciLCJjb25zdHJ1Y3RvciIsIk1vZGUiLCJIaXN0b3J5UG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsInNsaWNlIiwiY2hlY2siLCJjb25zb2xlIiwiZXJyb3IiLCJfX2JleW9uZF9uYXZpZ2F0aW9uX3Bvc2l0aW9uIiwiZW50cmllcyIsInBhcnNlZCIsInN0b3JlZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImV4YyIsInN0YWNrIiwiQXJyYXkiLCJ3YXJuaW5nIiwid2FybiIsInNhbml0aXplVVJJIiwiI3Nhbml0aXplVVJJIiwic3RhcnRzV2l0aCIsImdldCIsImluZGV4IiwiZmlsdGVyIiwiZW50cnkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX3VyaSIsIl9jb3JlIiwiX2hpc3RvcnkiLCJSb3V0aW5nTW9kZTIiLCJzZXJ2ZXJzaWRlIiwicHJvY2VzcyIsIlJvdXRpbmciLCJFdmVudHMiLCJpbml0aWFsaXNlZCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJtaXNzaW5nIiwicmVkaXJlY3QiLCJyZXNvbHZlQ29uZmlndXJlZCIsImNvbmZpZ3VyZWQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsInJvdXRpbmdNb2RlIiwiUGF0aG5hbWUiLCJwcm90b2NvbCIsImluY2x1ZGVzIiwicmVkaXJlY3RlZCIsInVwZGF0ZSIsImNhdGNoIiwiY2FuY2VsbGF0aW9uVG9rZW4iLCJDYW5jZWxsYXRpb25Ub2tlbiIsIndpbmRvdyIsInN0cmlwSW5kZXgiLCJwYXRoMiIsInBhcnRzIiwic3BsaXQiLCJrZXB0Iiwic2VnIiwiaSIsInRvTG93ZXJDYXNlIiwib3V0Iiwiam9pbiIsInJlcGxhY2UiLCJwYXRoIiwiY2FuY2VsbGF0aW9uVG9rZW5JZCIsInRyaWdnZXIiLCJzdGFydGVkIiwic2V0dXAiLCJiZXlvbmQiLCJuYXZpZ2F0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJRdWVyeVN0cmluZyIsIk1hcCIsInRyaW0iLCJwYXJhbSIs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bkMsTUFBTWdCLEtBQUEsR0FBUW5CLEtBQUEsQ0FBTUcsQ0FBQyxFQUFFSCxLQUFBLENBQU0sS0FBSyxDQUFDO1VBQ25DLE1BQU03RSxLQUFBLEdBQVFnRyxLQUFBLENBQU0sQ0FBQyxJQUNqQkMsa0JBQUEsQ0FBbUJELEtBQUEsQ0FBTSxDQUFDLEVBQUVaLE9BQUEsQ0FBUSxPQUFPLEdBQUcsQ0FBQyxJQUFJO1VBQ3ZELEtBQUtjLEdBQUEsQ0FBSUYsS0FBQSxDQUFNLENBQUMsR0FBR2hHLEtBQUs7O01BRWhDOztJQUNIL0IsT0FBQSxDQUFBNEgsV0FBQSxHQUFBQSxXQUFBOzs7Ozs7Ozs7Ozs7SUNURCxJQUFBTSxZQUFBLEdBQUEvSCxRQUFBO0lBRWlCLE1BQ1hnSSxJQUFBLENBQUc7TUFDSSxDQUFBekgsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNILE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2hCO01BRVMsQ0FBQXdCLFFBQUE7TUFDVCxJQUFJQSxTQUFBLEVBQVE7UUFDUixPQUFPLEtBQUssQ0FBQUEsUUFBQTtNQUNoQjtNQUVTLENBQUFDLE1BQUE7TUFDVCxJQUFJQSxPQUFBLEVBQU07UUFDTixPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNoQjtNQUVTLENBQUFpRyxFQUFBO01BQ1QsSUFBSUEsR0FBQSxFQUFFO1FBQ0YsT0FBTyxLQUFLLENBQUFBLEVBQUE7TUFDaEI7TUFFUyxDQUFBaEcsSUFBQTtNQUNULElBQUlBLEtBQUEsRUFBSTtRQUNKLE9BQU8sS0FBSyxDQUFBQSxJQUFBO01BQ2hCO01BRUFNLFlBQVloQyxHQUFBLEVBQVc7UUFDbkIsS0FBSyxDQUFBQSxHQUFBLEdBQU9BLEdBQUE7UUFFWixNQUFNLENBQUMySCxDQUFBLEVBQUdqRyxJQUFJLElBQUkxQixHQUFBLENBQUlrRyxLQUFBLENBQU0sR0FBRztRQUMvQixNQUFNLENBQUMxRSxRQUFBLEVBQVVDLE1BQU0sSUFBSWtHLENBQUEsQ0FBRXpCLEtBQUEsQ0FBTSxHQUFHO1FBRXRDLEtBQUssQ0FBQTFFLFFBQUEsR0FBWUEsUUFBQSxDQUFTK0IsVUFBQSxDQUFXLEdBQUcsSUFBSS9CLFFBQUEsR0FBVyxJQUFJQSxRQUFRO1FBQ25FLEtBQUssQ0FBQUMsTUFBQSxHQUFVQSxNQUFBLEdBQVNBLE1BQUEsR0FBUztRQUNqQyxLQUFLLENBQUFpRyxFQUFBLEdBQU0sSUFBSUYsWUFBQSxDQUFBTixXQUFBLENBQVksS0FBSyxDQUFBekYsTUFBTztRQUN2QyxLQUFLLENBQUFDLElBQUEsR0FBUUEsSUFBQTtNQUNqQjs7SUFDSHBDLE9BQUEsQ0FBQUgsR0FBQSxHQUFBc0ksSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=