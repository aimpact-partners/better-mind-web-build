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

// .beyond/uimport/temp/@beyond-js/widgets/render.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIuMS4xLjIuanMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvYW5jaG9yLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL2F0dHJpYnV0ZXMudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL2luc3RhbmNlcy9ub2RlLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9jaGVja3N1bS50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY3NyLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvcmVuZGVyZXIudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3NyLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zc3IudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9nbG9iYWwudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCJmaWxlOi8vL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0cy50cyJdLCJuYW1lcyI6WyJyZW5kZXJfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQmV5b25kV2lkZ2V0IiwiR2xvYmFsQ1NTIiwiSUJleW9uZFdpZGdldENvbnRyb2xsZXIiLCJJV2lkZ2V0U3BlY3MiLCJOb2RlV2lkZ2V0IiwiU3R5bGVzTWFuYWdlciIsIldpZGdldENTUiIsIl9fYmV5b25kX3BrZyIsImF0dHJpYnV0ZXMiLCJobXIiLCJwcmVyZW5kZXIiLCJ3aWRnZXRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInByb2Nlc3MiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50Iiwicm91dGluZyIsImNvbnN0cnVjdG9yIiwiYmltcG9ydCIsInRoZW4iLCJjb25uZWN0ZWRDYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYXNBdHRyaWJ1dGUiLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJwdXNoU3RhdGUiLCJfY29yZSIsInJlcXVpcmUyIiwiQXR0cmlidXRlcyIsIkV2ZW50cyIsInZhbHVlcyIsIk1hcCIsImFkZCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsInRyaWdnZXIiLCJyZW1vdmUiLCJkZWxldGUiLCJhdHRyaWJ1dGVzMiIsIl9ub2RlIiwiaW5zdGFuY2VzIiwiU2V0IiwicmVnaXN0ZXIiLCJ3aWRnZXQiLCJwYXJlbnQiLCJwYXJlbnQyIiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0IiwiaGFzIiwibm9kZSIsIndub2RlIiwiY2hpbGRyZW4iLCJOb2RlV2lkZ2V0MiIsInByZXJlbmRlcjIiLCJzc3IiLCJmaW5kIiwiZWxlbWVudCIsImF0dHJzIiwiaXRlbSIsImlhdHRycyIsInJlZHVjZSIsInByZXYiLCJnZXQiLCJfYXR0cmlidXRlcyIsIldpZGdldEdsb2JhbEF0dHJpYnV0ZXMiLCJob2xkZXIiLCIjc2V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5pdGlhbGlzZSIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJfZGVmYXVsdCIsInMiLCJoYXNoIiwiaSIsImMiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiV2lkZ2V0Q1NSMiIsImJ1bmRsZSIsImNvbnRyb2xsZXIiLCJlcnJvciIsImxvYWRpbmciLCJsb2FkZWQiLCJob2xkZXJzIiwic3BlY3MiLCJyZW5kZXIiLCJjc3IiLCJFcnJvciIsInNwZWNpZmllciIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsInN0YWNrIiwibWVzc2FnZSIsIiNyZW5kZXIiLCJzaXplIiwiQ29udHJvbGxlciIsImxvY2FsTmFtZSIsImxvZyIsImRpc2Nvbm5lY3QiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwib2xkIiwiX2luc3RhbmNlcyIsIl9zciIsIl9jc3IiLCJfc3NyIiwiX3N0eWxlcyIsIkVsZW1lbnQiLCJCZXlvbmRXaWRnZXQyIiwidnNwZWNpZmllciIsImxvY2F0aW9uIiwib3JpZ2luIiwiaXMiLCJyb3V0ZSIsImxheW91dCIsInNyIiwic3R5bGVzIiwid3BhcmVudCIsIndjaGlsZHJlbiIsIm9uY29udHJvbGxlciIsIiNvbmNvbnRyb2xsZXIiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsImpvaW4iLCJXaWRnZXRTUiIsIldpZGdldFNTUiIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzaGFkb3dSb290IiwiYXBwZW5kIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2siLCJSZW5kZXJlciIsImN0IiwiZXJyb3JzIiwiaHRtbCIsImlubmVySFRNTCIsImxpbmtzIiwicmVzb3VyY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInB1c2giLCJocmVmIiwib25sb2FkZWQiLCJyZWFkeSIsIl9jaGVja3N1bSIsIl9yZW5kZXJlciIsInJlbmRlcmVyIiwiaW5pdGlhbGlzZWQiLCJsYW5ndWFnZSIsIm11bHRpbGFuZ3VhZ2UiLCJsYW5ndWFnZTIiLCJsb2NhbFN0b3JhZ2UiLCJfX2JleW9uZF9sYW5ndWFnZSIsIm5hdmlnYXRvciIsInNsaWNlIiwicmVzb3VyY2UiLCJrZXkiLCJwYXRobmFtZSIsInNlYXJjaCIsImRlZmF1bHQiLCJjb21wdXRlIiwiYXR0ciIsInNvcnQiLCJhIiwiYiIsImsiLCJ2IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJfcHJlcmVuZGVyZWQiLCJtYXAiLCJmb3VuZCIsImxvYWQiLCIjbG9hZCIsInBrZyIsImNvbmZpZyIsImF0dHJzMiIsIkdsb2JhbENTUzIiLCJ2ZXJzaW9uIiwibGluayIsInVwZGF0ZSIsIl9saW5rIiwiX2dsb2JhbCIsIlN0eWxlc01hbmFnZXIyIiwiZXZlbnRzIiwibGlzdGVuZXIiLCJnbG9iYWxjc3MiLCJjaGFuZ2VkIiwiI2NoYW5nZWQiLCJyZXNvbHZlZCIsImtleXMiLCJjaGVjayIsInByb21pc2UiLCJyZXNvbHZlIiwiY3VycmVudFRhcmdldCIsIndhcm4iLCJwdXJnZSIsIiNjaGVjayIsImxvYWRlZDIiLCIjcHVyZ2UiLCJ2ZXJzaW9ucyIsImxhc3QiLCJsYXN0TG9hZGVkIiwicHJldkxhc3QiLCJwcmV2TGFzdExvYWRlZCIsInJlZnJlc2giLCIjcmVmcmVzaCIsIiN1cGRhdGUiLCJfbGlua3MiLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsIml2IiwicGFyc2VJbnQiLCJfd2lkZ2V0IiwiQmV5b25kV2lkZ2V0cyIsInNldHVwIiwic3BlY3MyIiwib2JzZXJ2ZWRBdHRyaWJ1dGVzIiwid2lkZ2V0czIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFB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RCxDQUFBMEIsR0FBQSxHQUFPO01BQ1AsSUFBSUEsSUFBQSxFQUFHO1FBQ04sT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDYjtNQUVBeEMsWUFBQTtRQUNDLE1BQUs7TUFDTjtNQUVBNE4sTUFBTXhDLE1BQUEsRUFBeUI7UUFDOUIsS0FBSyxDQUFBNUksR0FBQSxHQUFPLE9BQU80SSxNQUFBLEVBQVE1SSxHQUFBLEtBQVEsWUFBWTRJLE1BQUEsQ0FBTzVJLEdBQUEsR0FBTTtNQUM3RDtNQUVBLElBQUloQixVQUFBLEVBQVM7UUFDWixPQUFPc0UsVUFBQSxDQUFBdEUsU0FBQTtNQUNSO01BRUEsSUFBSXBDLFdBQUEsRUFBVTtRQUNiLE9BQU82RCxXQUFBLENBQUE3RCxVQUFBO01BQ1I7TUFFQXNDLFNBQVNrRCxLQUFBLEVBQXFCO1FBQzdCQSxLQUFBLENBQU1wQixPQUFBLENBQVFxSyxNQUFBLElBQVE7VUFFckIsSUFBSSxLQUFLM0wsR0FBQSxDQUFJMkwsTUFBQSxDQUFNN00sSUFBSSxHQUFHO1VBRTFCNk0sTUFBQSxDQUFNaEosTUFBQSxHQUFTZ0osTUFBQSxDQUFNaEosTUFBQSxHQUFTZ0osTUFBQSxDQUFNaEosTUFBQSxHQUFTO1lBQUVDLEdBQUEsRUFBSztZQUFNdEMsR0FBQSxFQUFLO1lBQU9tRSxFQUFBLEVBQUk7VUFBSztVQUMvRSxNQUFNO1lBQUUzRixJQUFBO1lBQU02RDtVQUFNLElBQUtnSixNQUFBO1VBQ3pCaEosTUFBQSxDQUFPQyxHQUFBLEdBQU0sT0FBT0QsTUFBQSxDQUFPQyxHQUFBLEtBQVEsWUFBWUQsTUFBQSxDQUFPQyxHQUFBLEdBQU07VUFFNUQsS0FBSzVELEdBQUEsQ0FBSUYsSUFBQSxFQUFNNk0sTUFBSztVQUdwQixJQUFJLE9BQU9sTyxPQUFBLEtBQVksVUFBVTtVQUVqQ0MsY0FBQSxDQUFlQyxNQUFBLENBQ2RtQixJQUFBLEVBQ0EsY0FBYzBNLE9BQUEsQ0FBQTlPLFlBQUEsQ0FBWTtZQUN6QixXQUFXa1AsbUJBQUEsRUFBa0I7Y0FDNUIsT0FBT0QsTUFBQSxDQUFNbEwsS0FBQSxHQUFRa0wsTUFBQSxDQUFNbEwsS0FBQSxHQUFRO1lBQ3BDO1lBRUEzQyxZQUFBO2NBQ0MsTUFBTTZOLE1BQUs7WUFDWjtXQUNBO1FBRUgsQ0FBQztNQUNGOztJQUdpQixNQUFNRSxRQUFBLEdBQU90TyxPQUFBLENBQUFGLE9BQUEsR0FBa0IsSUFBSW9PLGFBQUEsQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=