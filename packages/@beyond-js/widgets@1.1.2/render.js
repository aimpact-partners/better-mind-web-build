System.register(["@beyond-js/kernel@0.1.14/bundle","@beyond-js/kernel@0.1.14/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["@beyond-js/widgets","1.1.2"]]);
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

// .beyond/uimport/@beyond-js/widgets/render.1.1.2.js
var render_1_1_2_exports = {};
__export(render_1_1_2_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
});
module.exports = __toCommonJS(render_1_1_2_exports);

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.14/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.2/render"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 157107968,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;
      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }
      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }
    });
  }
});
ims.set("./attributes", {
  hash: 1948053846,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();
      get values() {
        return this.#values;
      }
      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }
      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }
    }
    exports.Attributes = Attributes;
    const attributes2 = exports.attributes = new Attributes();
  }
});
ims.set("./instances/index", {
  hash: 2203205286,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    var _node = require2("./node");
    const instances = exports.instances = new class extends Set {
      register(widget) {
        this.add(widget);
        const parent = (() => {
          let parent2 = widget;
          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();
        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }
    }();
  }
});
ims.set("./instances/node", {
  hash: 2635585213,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;
    class NodeWidget2 {
      #widget;
      get widget() {
        return this.#widget;
      }
      #parent;
      get parent() {
        return this.#parent;
      }
      #children = /* @__PURE__ */new Set();
      get children() {
        return this.#children;
      }
      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }
    }
    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 1802094002,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = exports.prerender = new class {
      #ssr = [];
      get ssr() {
        return this.#ssr;
      }
      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }
    }();
  }
});
ims.set("./widget/attributes", {
  hash: 1844817953,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;
    var _attributes = require2("../attributes");
    class WidgetGlobalAttributes {
      #holder;
      get holder() {
        return this.#holder;
      }
      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };
      initialise(holder) {
        this.#holder = holder;
        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
        _attributes.attributes.on("add", this.#set);
        _attributes.attributes.on("remove", this.#remove);
      }
      destroy() {
        _attributes.attributes.off("add", this.#set);
        _attributes.attributes.off("remove", this.#remove);
      }
    }
    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1000731235,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    function _default(s) {
      let hash = 0,
        i,
        c;
      const length = s.length;
      if (length === 0) {
        return hash;
      }
      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }
      return hash.toString().replace("-", "n");
    }
  }
});
ims.set("./widget/csr", {
  hash: 3612276883,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #controller;
      get controller() {
        return this.#controller;
      }
      #error;
      get error() {
        return this.#error;
      }
      #loading = false;
      get loading() {
        return this.#loading;
      }
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);
      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }
      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }
      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;
        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }
        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };
      disconnect() {
        this.#controller?.disconnect?.();
      }
      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }
    }
    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2614430817,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;
    var _instances = require2("../instances");
    var _sr = require2("./sr");
    var _csr = require2("./csr");
    var _ssr = require2("./ssr");
    var _attributes = require2("./attributes");
    var _styles = require2("./styles");
    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;
    class BeyondWidget2 extends Element {
      #specs;
      get specs() {
        return this.#specs;
      }
      get name() {
        return this.#specs.name;
      }
      get vspecifier() {
        return this.#specs.vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      get host() {
        return `${location.origin}/`;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #holder;
      get holder() {
        return this.#holder;
      }
      #sr;
      get sr() {
        return this.#sr;
      }
      #csr;
      get csr() {
        return this.#csr;
      }
      get controller() {
        return this.#csr.controller;
      }
      #ssr;
      get ssr() {
        return this.#ssr;
      }
      #attributes;
      #styles;
      get styles() {
        return this.#styles;
      }
      // To identify where the widget is in the widgets tree
      #wnode;
      get wnode() {
        return this.#wnode;
      }
      get wparent() {
        return this.#wnode.parent;
      }
      get wchildren() {
        return [...this.#wnode.children];
      }
      /**
       * Actually required by routing to call the .show & .hide methods once the controller is initialised
       */
      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };
      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });
        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();
        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }
      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }
      disconnectedCallback() {
        this.#csr.disconnect();
      }
      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }
    }
    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 442693055,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;
    class Renderer {
      #widget;
      constructor(widget) {
        this.#widget = widget;
      }
      // Cancellation token
      #ct = 0;
      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;
        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }
        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;
        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }
    }
    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 828831605,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;
    var _checksum = require2("./checksum");
    var _renderer = require2("./renderer");
    class WidgetSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;
        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();
        let resource;
        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }
        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }
    }
    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 3024365739,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;
    var _prerendered = require2("../prerendered");
    var _renderer = require2("./renderer");
    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      /**
       * Check if widget is already pre-rendered (index.html makes a page ssr fetch)
       */
      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
        const found = _prerendered.prerender.find(specs.name, attrs);
        if (!found) {
          return await this.#load();
        }
        this.#prerender = found;
        await this.#renderer.render(found);
      }
      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }
          return config.host;
        })();
        if (!host) return;
        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();
        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();
        const url = `${host}/widget?name=${name}${language}${attrs}`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }
    }
    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1112922337,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;
      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }
      #link;
      get link() {
        return this.#link;
      }
      update() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 3021483485,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _link = require2("./link");
    var _global = require2("./global");
    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;
      get version() {
        return this.#version;
      }
      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }
      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }
      get loaded() {
        this.#check();
        return this.#resolved;
      }
      #promise;
      #resolved = false;
      #resolve;
      get ready() {
        this.#check();
        return this.#promise;
      }
      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.getAttribute("href");
        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }
        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };
      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }
      /**
       * Remove style sheets that have been supplanted by newer hmr versions
       * @private
       */
      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);
          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }
          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }
      /**
       * Required to support global.css HMR
       *
       * @type {string[]}
       * @private
       */
      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };
      #update(_links) {
        this.#last = _links;
        _links.unshift(this.#globalcss.link);
        const links = _links.map(link => new _link.default(link));
        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }
      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }
      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }
      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }
    }
    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 2453054171,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      #href;
      get href() {
        return this.#href;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      #version;
      get version() {
        return this.#version;
      }
      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }
    }
    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 334125737,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;
    var _widget = require2("./widget");
    var _instances = require2("./instances");
    var _attributes = require2("./attributes");
    require2("./anchor");
    class BeyondWidgets extends Map {
      #ssr = true;
      get ssr() {
        return this.#ssr;
      }
      constructor() {
        super();
      }
      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }
      get instances() {
        return _instances.instances;
      }
      get attributes() {
        return _attributes.attributes;
      }
      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }
            constructor() {
              super(specs2);
            }
          });
        });
      }
    }
    const widgets2 = exports.widgets = new BeyondWidgets();
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyLjEuMS4yLmpzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL2FuY2hvci50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci9hdHRyaWJ1dGVzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL2luc3RhbmNlcy9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci9pbnN0YW5jZXMvbm9kZS50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci9wcmVyZW5kZXJlZC9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvYXR0cmlidXRlcy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY2hlY2tzdW0udHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L2Nzci50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3JlbmRlcmVyLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zci50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3NyLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zdHlsZXMvZ2xvYmFsLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zdHlsZXMvaW5kZXgudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldHMudHMiXSwibmFtZXMiOlsicmVuZGVyXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJleW9uZFdpZGdldCIsIkdsb2JhbENTUyIsIklCZXlvbmRXaWRnZXRDb250cm9sbGVyIiwiSVdpZGdldFNwZWNzIiwiTm9kZVdpZGdldCIsIlN0eWxlc01hbmFnZXIiLCJXaWRnZXRDU1IiLCJfX2JleW9uZF9wa2ciLCJhdHRyaWJ1dGVzIiwiaG1yIiwicHJlcmVuZGVyIiwid2lkZ2V0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsInJvdXRpbmciLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiX2NvcmUiLCJyZXF1aXJlMiIsIkF0dHJpYnV0ZXMiLCJFdmVudHMiLCJ2YWx1ZXMiLCJNYXAiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiYXR0cmlidXRlczIiLCJfbm9kZSIsImluc3RhbmNlcyIsIlNldCIsInJlZ2lzdGVyIiwid2lkZ2V0IiwicGFyZW50IiwicGFyZW50MiIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsImhhcyIsIm5vZGUiLCJ3bm9kZSIsImNoaWxkcmVuIiwiTm9kZVdpZGdldDIiLCJwcmVyZW5kZXIyIiwic3NyIiwiZmluZCIsImVsZW1lbnQiLCJhdHRycyIsIml0ZW0iLCJpYXR0cnMiLCJyZWR1Y2UiLCJwcmV2IiwiZ2V0IiwiX2F0dHJpYnV0ZXMiLCJXaWRnZXRHbG9iYWxBdHRyaWJ1dGVzIiwiaG9sZGVyIiwiI3NldCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXRpYWxpc2UiLCJmb3JFYWNoIiwib24iLCJkZXN0cm95Iiwib2ZmIiwiX2RlZmF1bHQiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsIldpZGdldENTUjIiLCJidW5kbGUiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJsb2FkaW5nIiwibG9hZGVkIiwiaG9sZGVycyIsInNwZWNzIiwicmVuZGVyIiwiY3NyIiwiRXJyb3IiLCJzcGVjaWZpZXIiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCIjcmVuZGVyIiwic2l6ZSIsIkNvbnRyb2xsZXIiLCJsb2NhbE5hbWUiLCJsb2ciLCJkaXNjb25uZWN0IiwiYXR0cmlidXRlQ2hhbmdlZCIsIm9sZCIsIl9pbnN0YW5jZXMiLCJfc3IiLCJfY3NyIiwiX3NzciIsIl9zdHlsZXMiLCJFbGVtZW50IiwiQmV5b25kV2lkZ2V0MiIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJvbmNvbnRyb2xsZXIiLCIjb25jb250cm9sbGVyIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJfY2hlY2tzdW0iLCJfcmVuZGVyZXIiLCJyZW5kZXJlciIsImluaXRpYWxpc2VkIiwibGFuZ3VhZ2UiLCJtdWx0aWxhbmd1YWdlIiwibGFuZ3VhZ2UyIiwibG9jYWxTdG9yYWdlIiwiX19iZXlvbmRfbGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJzbGljZSIsInJlc291cmNlIiwia2V5IiwicGF0aG5hbWUiLCJzZWFyY2giLCJkZWZhdWx0IiwiY29tcHV0ZSIsImF0dHIiLCJzb3J0IiwiYSIsImIiLCJrIiwidiIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiX3ByZXJlbmRlcmVkIiwibWFwIiwiZm91bmQiLCJsb2FkIiwiI2xvYWQiLCJwa2ciLCJjb25maWciLCJhdHRyczIiLCJHbG9iYWxDU1MyIiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJfbGluayIsIl9nbG9iYWwiLCJTdHlsZXNNYW5hZ2VyMiIsImV2ZW50cyIsImxpc3RlbmVyIiwiZ2xvYmFsY3NzIiwiY2hhbmdlZCIsIiNjaGFuZ2VkIiwicmVzb2x2ZWQiLCJrZXlzIiwiY2hlY2siLCJwcm9taXNlIiwicmVzb2x2ZSIsImN1cnJlbnRUYXJnZXQiLCJ3YXJuIiwicHVyZ2UiLCIjY2hlY2siLCJsb2FkZWQyIiwiI3B1cmdlIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJyZWZyZXNoIiwiI3JlZnJlc2giLCIjdXBkYXRlIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJpdiIsInBhcnNlSW50IiwiX3dpZGdldCIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsInNwZWNzMiIsIm9ic2VydmVkQXR0cmlidXRlcyIsIndpZGdldHMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFB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QTBCLEdBQUEsR0FBTztNQUNQLElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFFQXhDLFlBQUE7UUFDQyxNQUFLO01BQ047TUFFQTROLE1BQU14QyxNQUFBLEVBQXlCO1FBQzlCLEtBQUssQ0FBQTVJLEdBQUEsR0FBTyxPQUFPNEksTUFBQSxFQUFRNUksR0FBQSxLQUFRLFlBQVk0SSxNQUFBLENBQU81SSxHQUFBLEdBQU07TUFDN0Q7TUFFQSxJQUFJaEIsVUFBQSxFQUFTO1FBQ1osT0FBT3NFLFVBQUEsQ0FBQXRFLFNBQUE7TUFDUjtNQUVBLElBQUlwQyxXQUFBLEVBQVU7UUFDYixPQUFPNkQsV0FBQSxDQUFBN0QsVUFBQTtNQUNSO01BRUFzQyxTQUFTa0QsS0FBQSxFQUFxQjtRQUM3QkEsS0FBQSxDQUFNcEIsT0FBQSxDQUFRcUssTUFBQSxJQUFRO1VBRXJCLElBQUksS0FBSzNMLEdBQUEsQ0FBSTJMLE1BQUEsQ0FBTTdNLElBQUksR0FBRztVQUUxQjZNLE1BQUEsQ0FBTWhKLE1BQUEsR0FBU2dKLE1BQUEsQ0FBTWhKLE1BQUEsR0FBU2dKLE1BQUEsQ0FBTWhKLE1BQUEsR0FBUztZQUFFQyxHQUFBLEVBQUs7WUFBTXRDLEdBQUEsRUFBSztZQUFPbUUsRUFBQSxFQUFJO1VBQUs7VUFDL0UsTUFBTTtZQUFFM0YsSUFBQTtZQUFNNkQ7VUFBTSxJQUFLZ0osTUFBQTtVQUN6QmhKLE1BQUEsQ0FBT0MsR0FBQSxHQUFNLE9BQU9ELE1BQUEsQ0FBT0MsR0FBQSxLQUFRLFlBQVlELE1BQUEsQ0FBT0MsR0FBQSxHQUFNO1VBRTVELEtBQUs1RCxHQUFBLENBQUlGLElBQUEsRUFBTTZNLE1BQUs7VUFHcEIsSUFBSSxPQUFPbE8sT0FBQSxLQUFZLFVBQVU7VUFFakNDLGNBQUEsQ0FBZUMsTUFBQSxDQUNkbUIsSUFBQSxFQUNBLGNBQWMwTSxPQUFBLENBQUE5TyxZQUFBLENBQVk7WUFDekIsV0FBV2tQLG1CQUFBLEVBQWtCO2NBQzVCLE9BQU9ELE1BQUEsQ0FBTWxMLEtBQUEsR0FBUWtMLE1BQUEsQ0FBTWxMLEtBQUEsR0FBUTtZQUNwQztZQUVBM0MsWUFBQTtjQUNDLE1BQU02TixNQUFLO1lBQ1o7V0FDQTtRQUVILENBQUM7TUFDRjs7SUFHaUIsTUFBTUUsUUFBQSxHQUFPdE8sT0FBQSxDQUFBRixPQUFBLEdBQWtCLElBQUlvTyxhQUFBLENBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9