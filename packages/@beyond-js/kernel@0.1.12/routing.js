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

// .beyond/uimport/temp/@beyond-js/kernel/routing.0.1.12.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcuMC4xLjEyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9oaXN0b3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9wb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvcmVjb3Jkcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL3JvdXRpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkvcXVlcnlzdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMF8xXzEyX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlVSSSIsInJvdXRpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3Bvc2l0aW9uIiwicmVxdWlyZTIiLCJfcmVjb3JkcyIsIkJleW9uZEhpc3RvcnkiLCJwb3NpdGlvbiIsInJlY29yZHMiLCJ2YWxpZCIsImN1cnJlbnQiLCJ1cmkiLCJpbml0aWFsIiwiaGlzdG9yeSIsImxlbmd0aCIsInByb2Nlc3NCcm93c2VyVVJJIiwiI3Byb2Nlc3NCcm93c2VyVVJJIiwicm91dGluZzIiLCJSb3V0aW5nTW9kZUVudW0iLCJSb3V0aW5nTW9kZSIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicHVzaCIsIiNwdXNoIiwicmVzZXQiLCJzYXZlIiwicmVwbGFjZVN0YXRlIiwic3RhdGUiLCJ0aXRsZSIsIkVycm9yIiwidXBkYXRlQ3VycmVudFVSSSIsInZhbHVlIiwicHVzaFN0YXRlIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJiYWNrIiwicHJldmlvdXMiLCJnbyIsImZvcndhcmQiLCJmb2xsb3dpbmciLCJjb25zdHJ1Y3RvciIsIk1vZGUiLCJIaXN0b3J5UG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsInNsaWNlIiwiY2hlY2siLCJjb25zb2xlIiwiZXJyb3IiLCJfX2JleW9uZF9uYXZpZ2F0aW9uX3Bvc2l0aW9uIiwiZW50cmllcyIsInBhcnNlZCIsInN0b3JlZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImV4YyIsInN0YWNrIiwiQXJyYXkiLCJ3YXJuaW5nIiwid2FybiIsInNhbml0aXplVVJJIiwiI3Nhbml0aXplVVJJIiwic3RhcnRzV2l0aCIsImdldCIsImluZGV4IiwiZmlsdGVyIiwiZW50cnkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX3VyaTIiLCJfY29yZSIsIl9oaXN0b3J5IiwiUm91dGluZ01vZGUyIiwic2VydmVyc2lkZSIsInByb2Nlc3MiLCJSb3V0aW5nIiwiRXZlbnRzIiwiaW5pdGlhbGlzZWQiLCJyZXNvbHZlIiwicmVhZHkiLCJQcm9taXNlIiwibWlzc2luZyIsInJlZGlyZWN0IiwicmVzb2x2ZUNvbmZpZ3VyZWQiLCJjb25maWd1cmVkIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJiaW1wb3J0IiwidGhlbiIsImRlZmF1bHQiLCJjb25maWciLCJyb3V0aW5nTW9kZSIsIlBhdGhuYW1lIiwicHJvdG9jb2wiLCJpbmNsdWRlcyIsInJlZGlyZWN0ZWQiLCJ1cGRhdGUiLCJjYXRjaCIsImNhbmNlbGxhdGlvblRva2VuIiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJfdXJpIiwiY2FuY2VsbGF0aW9uVG9rZW5JZCIsInRyaWdnZXIiLCJzdGFydGVkIiwic2V0dXAiLCJiZXlvbmQiLCJuYXZpZ2F0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJRdWVyeVN0cmluZyIsIk1hcCIsInRyaW0iLCJzcGxpdCIsImkiLCJwYXJhbSIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJzZXQiLCJfcXVlcnlzdHJpbmciLCJVUkkyIiwicXMiLCJ1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQTtBQUFBQyxRQUFBLENBQUFELHNCQUFBO0VBQUFFLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHNCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBTyxTQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxRQUFBLEdBQUFELFFBQUE7SUFTTSxNQUFPRSxhQUFBLENBQWE7TUFDaEIsQ0FBQUMsUUFBQTtNQUNULElBQUlBLFNBQUEsRUFBUTtRQUNYLE9BQU8sS0FBSyxDQUFBQSxRQUFBO01BQ2I7TUFFUyxDQUFBQyxPQUFBO01BQ1QsSUFBSUEsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUFBLE9BQUE7TUFDYjtNQUVBLElBQUlDLE1BQUEsRUFBSztRQUNSLE9BQU8sS0FBSyxDQUFBRCxPQUFBLENBQVNDLEtBQUE7TUFDdEI7TUFFQSxJQUFJQyxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUtELEtBQUEsR0FBUSxLQUFLLENBQUFELE9BQUEsQ0FBU0UsT0FBQSxDQUFRQyxHQUFBLEdBQU07TUFDakQ7TUFFQSxDQUFBQyxPQUFBLEdBQW1CQyxPQUFBLENBQVFDLE1BQUE7TUFDM0IsSUFBSUYsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUFBLE9BQUE7TUFDYjtNQVNB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