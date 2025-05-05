System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/kernel/routing.0.1.12.js
var routing_0_1_12_exports = {};
__export(routing_0_1_12_exports, {
  URI: () => URI,
  routing: () => routing
});
module.exports = __toCommonJS(routing_0_1_12_exports);

// node_modules/@beyond-js/kernel/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.11/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./history/history", {
  hash: 1835933971,
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
      #processBrowserURI(uri) {
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
      #sanitizeURI(uri) {
        if (uri === void 0) return;
        return uri.startsWith("/") ? uri : `/${uri}`;
      }
      get(index) {
        return this.#entries[index];
      }
      push(uri) {
        uri = this.#sanitizeURI(uri);
        this.#entries.push({
          uri,
          position: history.length
        });
        this.save();
      }
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
  hash: 1121896291,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.routing = exports.RoutingMode = exports.Routing = void 0;
    var _uri2 = require2("./uri/uri");
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
      #cancellationToken = new _core.CancellationToken();
      update = async () => {
        const {
          hash,
          pathname,
          search
        } = location;
        const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
        if (this.#uri?.uri === _uri) return;
        const cancellationTokenId = this.#cancellationToken.reset();
        const uri = this.#uri = new _uri2.URI(_uri);
        const redirected = await this.#redirect(uri);
        if (!this.#cancellationToken.check(cancellationTokenId)) return;
        if (redirected) return;
        this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
        this.#initialised ? this.trigger("change") : this.#resolve();
        this.#initialised = true;
      };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nLjAuMS4xMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvaGlzdG9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvcG9zaXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L3JlY29yZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9yb3V0aW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpL3F1ZXJ5c3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpL3VyaS50cyJdLCJuYW1lcyI6WyJyb3V0aW5nXzBfMV8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJVUkkiLCJyb3V0aW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9wb3NpdGlvbiIsInJlcXVpcmUyIiwiX3JlY29yZHMiLCJCZXlvbmRIaXN0b3J5IiwicG9zaXRpb24iLCJyZWNvcmRzIiwidmFsaWQiLCJjdXJyZW50IiwidXJpIiwiaW5pdGlhbCIsImhpc3RvcnkiLCJsZW5ndGgiLCJwcm9jZXNzQnJvd3NlclVSSSIsIiNwcm9jZXNzQnJvd3NlclVSSSIsInJvdXRpbmcyIiwiUm91dGluZ01vZGVFbnVtIiwiUm91dGluZ01vZGUiLCJtb2RlIiwiSGFzaCIsInN1YnN0ciIsInB1c2giLCIjcHVzaCIsInJlc2V0Iiwic2F2ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwidGl0bGUiLCJFcnJvciIsInVwZGF0ZUN1cnJlbnRVUkkiLCJ2YWx1ZSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwiYmFjayIsInByZXZpb3VzIiwiZ28iLCJmb3J3YXJkIiwiZm9sbG93aW5nIiwiY29uc3RydWN0b3IiLCJNb2RlIiwiSGlzdG9yeVBvc2l0aW9uIiwiSGlzdG9yeVJlY29yZHMiLCJzbGljZSIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzYW5pdGl6ZVVSSSIsIiNzYW5pdGl6ZVVSSSIsInN0YXJ0c1dpdGgiLCJnZXQiLCJpbmRleCIsImZpbHRlciIsImVudHJ5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl91cmkyIiwiX2NvcmUiLCJfaGlzdG9yeSIsIlJvdXRpbmdNb2RlMiIsInNlcnZlcnNpZGUiLCJwcm9jZXNzIiwiUm91dGluZyIsIkV2ZW50cyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsIm1pc3NpbmciLCJyZWRpcmVjdCIsInJlc29sdmVDb25maWd1cmVkIiwiY29uZmlndXJlZCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYmltcG9ydCIsInRoZW4iLCJkZWZhdWx0IiwiY29uZmlnIiwicm91dGluZ01vZGUiLCJQYXRobmFtZSIsInByb3RvY29sIiwiaW5jbHVkZXMiLCJyZWRpcmVjdGVkIiwidXBkYXRlIiwiY2F0Y2giLCJjYW5jZWxsYXRpb25Ub2tlbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiX3VyaSIsImNhbmNlbGxhdGlvblRva2VuSWQiLCJ0cmlnZ2VyIiwic3RhcnRlZCIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwic2V0IiwiX3F1ZXJ5c3RyaW5nIiwiVVJJMiIsInFzIiwidSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQU8sU0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsUUFBQSxHQUFBRCxRQUFBO0lBU00sTUFBT0UsYUFBQSxDQUFhO01BQ2hCLENBQUFDLFFBQUE7TUFDVCxJQUFJQSxTQUFBLEVBQVE7UUFDWCxPQUFPLEtBQUssQ0FBQUEsUUFBQTtNQUNiO01BRVMsQ0FBQUMsT0FBQTtNQUNULElBQUlBLFFBQUEsRUFBTztRQUNWLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2I7TUFFQSxJQUFJQyxNQUFBLEVBQUs7UUFDUixPQUFPLEtBQUssQ0FBQUQsT0FBQSxDQUFTQyxLQUFBO01BQ3RCO01BRUEsSUFBSUMsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLRCxLQUFBLEdBQVEsS0FBSyxDQUFBRCxPQUFBLENBQVNFLE9BQUEsQ0FBUUMsR0FBQSxHQUFNO01BQ2pEO01BRUEsQ0FBQUMsT0FBQSxHQUFtQkMsT0FBQSxDQUFRQyxNQUFBO01BQzNCLElBQUlGLFFBQUEsRUFBTztRQUNWLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2I7TUFTQSxDQUFB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O01BRVMsQ0FBQUMsTUFBQTtNQUNULElBQUlBLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2hCO01BRVMsQ0FBQXlGLEVBQUE7TUFDVCxJQUFJQSxHQUFBLEVBQUU7UUFDRixPQUFPLEtBQUssQ0FBQUEsRUFBQTtNQUNoQjtNQUVTLENBQUF4RixJQUFBO01BQ1QsSUFBSUEsS0FBQSxFQUFJO1FBQ0osT0FBTyxLQUFLLENBQUFBLElBQUE7TUFDaEI7TUFFQU0sWUFBWWhDLEdBQUEsRUFBVztRQUNuQixLQUFLLENBQUFBLEdBQUEsR0FBT0EsR0FBQTtRQUVaLE1BQU0sQ0FBQ21ILENBQUEsRUFBR3pGLElBQUksSUFBSTFCLEdBQUEsQ0FBSTBHLEtBQUEsQ0FBTSxHQUFHO1FBQy9CLE1BQU0sQ0FBQ2xGLFFBQUEsRUFBVUMsTUFBTSxJQUFJMEYsQ0FBQSxDQUFFVCxLQUFBLENBQU0sR0FBRztRQUV0QyxLQUFLLENBQUFsRixRQUFBLEdBQVlBLFFBQUEsQ0FBUytCLFVBQUEsQ0FBVyxHQUFHLElBQUkvQixRQUFBLEdBQVcsSUFBSUEsUUFBQTtRQUMzRCxLQUFLLENBQUFDLE1BQUEsR0FBVUEsTUFBQSxHQUFTQSxNQUFBLEdBQVM7UUFDakMsS0FBSyxDQUFBeUYsRUFBQSxHQUFNLElBQUlGLFlBQUEsQ0FBQVQsV0FBQSxDQUFZLEtBQUssQ0FBQTlFLE1BQU87UUFDdkMsS0FBSyxDQUFBQyxJQUFBLEdBQVFBLElBQUE7TUFDakI7O0lBQ0hwQyxPQUFBLENBQUFILEdBQUEsR0FBQThILElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9