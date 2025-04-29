System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/widgets","1.1.2"]]);
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
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2FuY2hvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9pbnN0YW5jZXMvbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvcHJlcmVuZGVyZWQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY2hlY2tzdW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9jc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3JlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zc3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9zdHlsZXMvZ2xvYmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldHMudHMiXSwibmFtZXMiOlsicmVuZGVyXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJleW9uZFdpZGdldCIsIkdsb2JhbENTUyIsIklCZXlvbmRXaWRnZXRDb250cm9sbGVyIiwiSVdpZGdldFNwZWNzIiwiTm9kZVdpZGdldCIsIlN0eWxlc01hbmFnZXIiLCJXaWRnZXRDU1IiLCJfX2JleW9uZF9wa2ciLCJhdHRyaWJ1dGVzIiwiaG1yIiwicHJlcmVuZGVyIiwid2lkZ2V0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJwcm9jZXNzIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsInJvdXRpbmciLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzQXR0cmlidXRlIiwidXJsIiwiZ2V0QXR0cmlidXRlIiwicHVzaFN0YXRlIiwiX2NvcmUiLCJyZXF1aXJlMiIsIkF0dHJpYnV0ZXMiLCJFdmVudHMiLCJ2YWx1ZXMiLCJNYXAiLCJhZGQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJ0cmlnZ2VyIiwicmVtb3ZlIiwiZGVsZXRlIiwiYXR0cmlidXRlczIiLCJfbm9kZSIsImluc3RhbmNlcyIsIlNldCIsInJlZ2lzdGVyIiwid2lkZ2V0IiwicGFyZW50IiwicGFyZW50MiIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsImhhcyIsIm5vZGUiLCJ3bm9kZSIsImNoaWxkcmVuIiwiTm9kZVdpZGdldDIiLCJwcmVyZW5kZXIyIiwic3NyIiwiZmluZCIsImVsZW1lbnQiLCJhdHRycyIsIml0ZW0iLCJpYXR0cnMiLCJyZWR1Y2UiLCJwcmV2IiwiZ2V0IiwiX2F0dHJpYnV0ZXMiLCJXaWRnZXRHbG9iYWxBdHRyaWJ1dGVzIiwiaG9sZGVyIiwiI3NldCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXRpYWxpc2UiLCJmb3JFYWNoIiwib24iLCJkZXN0cm95Iiwib2ZmIiwiX2RlZmF1bHQiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsIldpZGdldENTUjIiLCJidW5kbGUiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJsb2FkaW5nIiwibG9hZGVkIiwiaG9sZGVycyIsInNwZWNzIiwicmVuZGVyIiwiY3NyIiwiRXJyb3IiLCJzcGVjaWZpZXIiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJzdGFjayIsIm1lc3NhZ2UiLCIjcmVuZGVyIiwic2l6ZSIsIkNvbnRyb2xsZXIiLCJsb2NhbE5hbWUiLCJsb2ciLCJkaXNjb25uZWN0IiwiYXR0cmlidXRlQ2hhbmdlZCIsIm9sZCIsIl9pbnN0YW5jZXMiLCJfc3IiLCJfY3NyIiwiX3NzciIsIl9zdHlsZXMiLCJFbGVtZW50IiwiQmV5b25kV2lkZ2V0MiIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJvbmNvbnRyb2xsZXIiLCIjb25jb250cm9sbGVyIiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjb21wb3NlZCIsImRpc3BhdGNoRXZlbnQiLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInN1YnBhdGgiLCJqb2luIiwiV2lkZ2V0U1IiLCJXaWRnZXRTU1IiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic2hhZG93Um9vdCIsImFwcGVuZCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwiUmVuZGVyZXIiLCJjdCIsImVycm9ycyIsImh0bWwiLCJpbm5lckhUTUwiLCJsaW5rcyIsInJlc291cmNlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwdXNoIiwiaHJlZiIsIm9ubG9hZGVkIiwicmVhZHkiLCJfY2hlY2tzdW0iLCJfcmVuZGVyZXIiLCJyZW5kZXJlciIsImluaXRpYWxpc2VkIiwibGFuZ3VhZ2UiLCJtdWx0aWxhbmd1YWdlIiwibGFuZ3VhZ2UyIiwibG9jYWxTdG9yYWdlIiwiX19iZXlvbmRfbGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJzbGljZSIsInJlc291cmNlIiwia2V5IiwicGF0aG5hbWUiLCJzZWFyY2giLCJkZWZhdWx0IiwiY29tcHV0ZSIsImF0dHIiLCJzb3J0IiwiYSIsImIiLCJrIiwidiIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIiwiX3ByZXJlbmRlcmVkIiwibWFwIiwiZm91bmQiLCJsb2FkIiwiI2xvYWQiLCJwa2ciLCJjb25maWciLCJhdHRyczIiLCJHbG9iYWxDU1MyIiwidmVyc2lvbiIsImxpbmsiLCJ1cGRhdGUiLCJfbGluayIsIl9nbG9iYWwiLCJTdHlsZXNNYW5hZ2VyMiIsImV2ZW50cyIsImxpc3RlbmVyIiwiZ2xvYmFsY3NzIiwiY2hhbmdlZCIsIiNjaGFuZ2VkIiwicmVzb2x2ZWQiLCJrZXlzIiwiY2hlY2siLCJwcm9taXNlIiwicmVzb2x2ZSIsImN1cnJlbnRUYXJnZXQiLCJ3YXJuIiwicHVyZ2UiLCIjY2hlY2siLCJsb2FkZWQyIiwiI3B1cmdlIiwidmVyc2lvbnMiLCJsYXN0IiwibGFzdExvYWRlZCIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJyZWZyZXNoIiwiI3JlZnJlc2giLCIjdXBkYXRlIiwiX2xpbmtzIiwidW5zaGlmdCIsIlByb21pc2UiLCJpdiIsInBhcnNlSW50IiwiX3dpZGdldCIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsInNwZWNzMiIsIm9ic2VydmVkQXR0cmlidXRlcyIsIndpZGdldHMyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWhCLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tBLE9BQU9pQixPQUFBLEtBQVksWUFDbEJDLGNBQUEsQ0FBZUMsTUFBQSxDQUNkLGVBQ0EsY0FBY0MsV0FBQSxDQUFXO01BQ3hCLENBQUFDLE9BQUE7TUFFQUMsWUFBQTtRQUNDLE1BQUs7UUFDTEMsT0FBQSxDQUFRLDJCQUEyQixFQUFFQyxJQUFBLENBQUssQ0FBQztVQUFFSDtRQUFPLE1BQVEsS0FBSyxDQUFBQSxPQUFBLEdBQVdBLE9BQVE7TUFDckY7TUFFQUksa0JBQUEsRUFBaUI7UUFDaEIsS0FBS0MsZ0JBQUEsQ0FBaUIsU0FBUyxNQUFLO1VBQ25DLElBQUksQ0FBQyxLQUFLQyxZQUFBLENBQWEsVUFBVSxHQUFHO1VBRXBDLE1BQU1DLEdBQUEsR0FBTSxLQUFLQyxZQUFBLENBQWEsVUFBVTtVQUN4QyxLQUFLLENBQUFSLE9BQUEsRUFBVVMsU0FBQSxDQUFVRixHQUFHO1FBQzdCLENBQUM7TUFDRjtLQUNBOzs7Ozs7Ozs7Ozs7SUN4QkgsSUFBQUcsS0FBQSxHQUFBQyxRQUFBO0lBRU0sTUFBT0MsVUFBQSxTQUFtQkYsS0FBQSxDQUFBRyxNQUFBLENBQU07TUFDckMsQ0FBQUMsTUFBQSxHQUErQixtQkFBSUMsR0FBQSxDQUFHO01BQ3RDLElBQUlELE9BQUEsRUFBTTtRQUNULE9BQU8sS0FBSyxDQUFBQSxNQUFBO01BQ2I7TUFFQUUsSUFBSUMsSUFBQSxFQUFjQyxLQUFBLEVBQWE7UUFDOUIsS0FBSyxDQUFBSixNQUFBLENBQVFLLEdBQUEsQ0FBSUYsSUFBQSxFQUFNQyxLQUFLO1FBQzVCLEtBQUtFLE9BQUEsQ0FBUSxPQUFPSCxJQUFBLEVBQU1DLEtBQUs7UUFDL0IsS0FBS0UsT0FBQSxDQUFRLFFBQVE7TUFDdEI7TUFFQUMsT0FBT0osSUFBQSxFQUFZO1FBQ2xCLEtBQUssQ0FBQUgsTUFBQSxDQUFRUSxNQUFBLENBQU9MLElBQUk7UUFDeEIsS0FBS0csT0FBQSxDQUFRLFVBQVVILElBQUk7UUFDM0IsS0FBS0csT0FBQSxDQUFRLFFBQVE7TUFDdEI7O0lBQ0ExQixPQUFBLENBQUFrQixVQUFBLEdBQUFBLFVBQUE7SUFFaUIsTUFBTVcsV0FBQSxHQUFVN0IsT0FBQSxDQUFBTCxVQUFBLEdBQWUsSUFBSXVCLFVBQUEsQ0FBVTs7Ozs7Ozs7Ozs7O0lDcEIvRCxJQUFBWSxLQUFBLEdBQUFiLFFBQUE7SUFJTyxNQUFNYyxTQUFBLEdBQVMvQixPQUFBLENBQUErQixTQUFBLEdBQUcsSUFBSyxjQUFjQyxHQUFBLENBQWlCO01BQzVEQyxTQUFTQyxNQUFBLEVBQW9CO1FBQzVCLEtBQUtaLEdBQUEsQ0FBSVksTUFBTTtRQUdmLE1BQU1DLE1BQUEsSUFBd0IsTUFBbUI7VUFDaEQsSUFBSUMsT0FBQSxHQUFlRixNQUFBO1VBQ25CLE9BQU8sTUFBTTtZQUNaLE1BQU1HLElBQUEsR0FBYUQsT0FBQSxDQUFPRSxXQUFBLENBQVc7WUFDckMsSUFBSUQsSUFBQSxLQUFTRSxRQUFBLEVBQVU7WUFFdkJILE9BQUEsR0FBc0JDLElBQUEsQ0FBTUcsSUFBQTtZQUM1QixJQUFJLEtBQUtDLEdBQUEsQ0FBa0JMLE9BQU0sR0FBRyxPQUFxQkEsT0FBQTs7UUFFM0QsR0FBRTtRQUVGLE1BQU1NLElBQUEsR0FBTyxJQUFJWixLQUFBLENBQUF2QyxVQUFBLENBQVcyQyxNQUFBLEVBQVFDLE1BQU07UUFDMUNBLE1BQUEsRUFBUVEsS0FBQSxDQUFNQyxRQUFBLENBQVN0QixHQUFBLENBQUlZLE1BQU07UUFFakMsS0FBS1osR0FBQSxDQUFJWSxNQUFNO1FBQ2YsT0FBT1EsSUFBQTtNQUNSO01BQ0M7Ozs7Ozs7Ozs7OztJQ3pCZSxNQUNYRyxXQUFBLENBQVU7TUFDTixDQUFBWCxNQUFBO01BQ1QsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUVTLENBQUFDLE1BQUE7TUFDVCxJQUFJQSxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNiO01BRVMsQ0FBQVMsUUFBQSxHQUErQixtQkFBSVosR0FBQSxDQUFHO01BQy9DLElBQUlZLFNBQUEsRUFBUTtRQUNYLE9BQU8sS0FBSyxDQUFBQSxRQUFBO01BQ2I7TUFFQXJDLFlBQVkyQixNQUFBLEVBQXNCQyxNQUFBLEVBQXFCO1FBQ3RELEtBQUssQ0FBQUQsTUFBQSxHQUFVQSxNQUFBO1FBQ2YsS0FBSyxDQUFBQyxNQUFBLEdBQVVBLE1BQUE7TUFDaEI7O0lBQ0FuQyxPQUFBLENBQUFULFVBQUEsR0FBQXNELFdBQUE7Ozs7Ozs7Ozs7OztJQ3BCRCxNQUFNQyxVQUFBLEdBQVM5QyxPQUFBLENBQUFILFNBQUEsR0FBRyxJQUFLO01BQ2IsQ0FBQWtELEdBQUEsR0FBMEI7TUFDbkMsSUFBSUEsSUFBQSxFQUFHO1FBQ04sT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDYjtNQUVBQyxLQUFLQyxPQUFBLEVBQWlCQyxLQUFBLEVBQTBCO1FBQy9DLE9BQU8sS0FBSyxDQUFBSCxHQUFBLENBQUtDLElBQUEsQ0FBS0csSUFBQSxJQUFPO1VBQzVCLElBQUlBLElBQUEsQ0FBS0YsT0FBQSxLQUFZQSxPQUFBLEVBQVMsT0FBTztVQUNyQyxNQUFNRyxNQUFBLEdBQVMsSUFBSS9CLEdBQUEsQ0FBSThCLElBQUEsQ0FBS3hELFVBQVU7VUFDdEMsT0FBTyxDQUFDLEdBQUd1RCxLQUFLLEVBQUVHLE1BQUEsQ0FBTyxDQUFDQyxJQUFBLEVBQU0sQ0FBQy9CLElBQUEsRUFBTUMsS0FBSyxNQUFNOEIsSUFBQSxJQUFRRixNQUFBLENBQU9HLEdBQUEsQ0FBSWhDLElBQUksTUFBTUMsS0FBQSxFQUFPLElBQUk7UUFDM0YsQ0FBQztNQUNGO01BQ0M7Ozs7Ozs7Ozs7OztJQ2hCRixJQUFBZ0MsV0FBQSxHQUFBdkMsUUFBQTtJQUtNLE1BQU93QyxzQkFBQSxDQUFzQjtNQUNsQyxDQUFBQyxNQUFBO01BQ0EsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUVBLENBQUFqQyxHQUFBLEdBQU9rQyxDQUFDcEMsSUFBQSxFQUFjQyxLQUFBLEtBQWlCO1FBQ3RDLEtBQUssQ0FBQWtDLE1BQUEsQ0FBUUUsWUFBQSxDQUFhckMsSUFBQSxFQUFNQyxLQUFLO01BQ3RDO01BRUEsQ0FBQUcsTUFBQSxHQUFXSixJQUFBLElBQWdCO1FBQzFCLEtBQUssQ0FBQW1DLE1BQUEsQ0FBUUcsZUFBQSxDQUFnQnRDLElBQUk7TUFDbEM7TUFFQXVDLFdBQVdKLE1BQUEsRUFBdUI7UUFDakMsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7UUFFZkYsV0FBQSxDQUFBN0QsVUFBQSxDQUFXeUIsTUFBQSxDQUFPMkMsT0FBQSxDQUFRLENBQUN2QyxLQUFBLEVBQU9ELElBQUEsS0FBUyxLQUFLLENBQUFFLEdBQUEsQ0FBS0YsSUFBQSxFQUFNQyxLQUFLLENBQUM7UUFDakVnQyxXQUFBLENBQUE3RCxVQUFBLENBQVdxRSxFQUFBLENBQUcsT0FBTyxLQUFLLENBQUF2QyxHQUFJO1FBQzlCK0IsV0FBQSxDQUFBN0QsVUFBQSxDQUFXcUUsRUFBQSxDQUFHLFVBQVUsS0FBSyxDQUFBckMsTUFBTztNQUNyQztNQUVBc0MsUUFBQSxFQUFPO1FBQ05ULFdBQUEsQ0FBQTdELFVBQUEsQ0FBV3VFLEdBQUEsQ0FBSSxPQUFPLEtBQUssQ0FBQXpDLEdBQUk7UUFDL0IrQixXQUFBLENBQUE3RCxVQUFBLENBQVd1RSxHQUFBLENBQUksVUFBVSxLQUFLLENBQUF2QyxNQUFPO01BQ3RDOztJQUNBM0IsT0FBQSxDQUFBeUQsc0JBQUEsR0FBQUEsc0JBQUE7Ozs7Ozs7Ozs7OztJQy9CYSxTQUFBVSxTQUFXQyxDQUFBLEVBQVM7TUFDakMsSUFBSUMsSUFBQSxHQUFPO1FBQ1ZDLENBQUE7UUFDQUMsQ0FBQTtNQUNELE1BQU1DLE1BQUEsR0FBU0osQ0FBQSxDQUFFSSxNQUFBO01BRWpCLElBQUlBLE1BQUEsS0FBVyxHQUFHO1FBQ2pCLE9BQU9ILElBQUE7O01BRVIsS0FBS0MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUUsTUFBQSxFQUFRRixDQUFBLElBQUs7UUFDNUJDLENBQUEsR0FBSUgsQ0FBQSxDQUFFSyxVQUFBLENBQVdILENBQUM7UUFDbEJELElBQUEsSUFBUUEsSUFBQSxJQUFRLEtBQUtBLElBQUEsR0FBT0UsQ0FBQTtRQUM1QkYsSUFBQSxHQUFPQSxJQUFBLEdBQU9BLElBQUE7O01BR2YsT0FBT0EsSUFBQSxDQUFLSyxRQUFBLENBQVEsRUFBR0MsT0FBQSxDQUFRLEtBQUssR0FBRztJQUN4Qzs7Ozs7Ozs7Ozs7O0lDaEJBLElBQUEzRCxLQUFBLEdBQUFDLFFBQUE7SUFZaUIsTUFDWDJELFVBQUEsU0FBa0I1RCxLQUFBLENBQUFHLE1BQUEsQ0FBTTtNQUNwQixDQUFBZSxNQUFBO01BRVQsQ0FBQTJDLE1BQUE7TUFDQSxJQUFJQSxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNiO01BRUEsQ0FBQUMsVUFBQTtNQUNBLElBQUlBLFdBQUEsRUFBVTtRQUNiLE9BQU8sS0FBSyxDQUFBQSxVQUFBO01BQ2I7TUFFQSxDQUFBQyxLQUFBO01BQ0EsSUFBSUEsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDYjtNQUVBLENBQUFDLE9BQUEsR0FBb0I7TUFDcEIsSUFBSUEsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUFBLE9BQUE7TUFDYjtNQUVBLENBQUFDLE1BQUEsR0FBbUI7TUFDbkIsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUVBLENBQUFDLE9BQUEsR0FBVyxtQkFBSWxELEdBQUEsQ0FBSSxDQUFDLGVBQWUsUUFBUSxDQUFDO01BRTVDOEIsV0FBQSxFQUFVO1FBRVQsSUFBSSxDQUFDLEtBQUssQ0FBQTVCLE1BQUEsQ0FBUWlELEtBQUEsQ0FBTUMsTUFBQSxDQUFPQyxHQUFBLEVBQUs7UUFFcEMsSUFBSSxDQUFDLEtBQUssQ0FBQUgsT0FBQSxDQUFTekMsR0FBQSxDQUFJLGFBQWEsR0FBRyxNQUFNLElBQUk2QyxLQUFBLENBQU0sZ0NBQWdDO1FBQ3ZGLEtBQUssQ0FBQUosT0FBQSxDQUFTdEQsTUFBQSxDQUFPLGFBQWE7UUFDbEMsS0FBSyxDQUFBd0QsTUFBQSxDQUFPO01BQ2I7TUFFQTdFLFlBQVkyQixNQUFBLEVBQW9CO1FBQy9CLE1BQUs7UUFDTCxNQUFNO1VBQUVxRCxTQUFBO1VBQVdKO1FBQUssSUFBTSxLQUFLLENBQUFqRCxNQUFBLEdBQVVBLE1BQUE7UUFHN0MsSUFBSSxDQUFDaUQsS0FBQSxDQUFNQyxNQUFBLENBQU9DLEdBQUEsRUFBSztRQUV2QjdFLE9BQUEsQ0FBUStFLFNBQVMsRUFDZjlFLElBQUEsQ0FBTW9FLE1BQUEsSUFBZTtVQUNyQixLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtVQUNmLEtBQUssQ0FBQUcsT0FBQSxHQUFXO1VBQ2hCLEtBQUssQ0FBQUMsTUFBQSxHQUFVO1VBQ2YsS0FBSyxDQUFBQyxPQUFBLENBQVN0RCxNQUFBLENBQU8sUUFBUTtVQUM3QixLQUFLLENBQUF3RCxNQUFBLENBQU87UUFDYixDQUFDLEVBQ0FJLEtBQUEsQ0FBT0MsR0FBQSxJQUFjO1VBQ3JCQyxPQUFBLENBQVFYLEtBQUEsQ0FBTSx5QkFBeUJRLFNBQUEsS0FBY0UsR0FBQSxDQUFJRSxLQUFLO1VBQzlELEtBQUssQ0FBQVosS0FBQSxHQUFTVSxHQUFBLENBQUlHLE9BQUE7VUFDbEIsS0FBSyxDQUFBWixPQUFBLEdBQVc7UUFDakIsQ0FBQztNQUNIO01BRUEsQ0FBQUksTUFBQSxHQUFVUyxDQUFBLEtBQUs7UUFFZCxJQUFJLEtBQUssQ0FBQVgsT0FBQSxDQUFTWSxJQUFBLEVBQU07UUFFeEIsTUFBTTtVQUFFQztRQUFVLElBQUssS0FBSyxDQUFBbEIsTUFBQTtRQUM1QixJQUFJLENBQUNrQixVQUFBLElBQWMsT0FBT0EsVUFBQSxLQUFlLFlBQVk7VUFDcEQsTUFBTUgsT0FBQSxHQUFVLFdBQVcsS0FBSyxDQUFBMUQsTUFBQSxDQUFROEQsU0FBQTtVQUN4Q04sT0FBQSxDQUFRWCxLQUFBLENBQU1hLE9BQU87VUFDckIsS0FBSyxDQUFBYixLQUFBLEdBQVNhLE9BQUE7VUFDZDs7UUFHRCxLQUFLLENBQUFkLFVBQUEsR0FBYyxJQUFJaUIsVUFBQSxDQUFXLEtBQUssQ0FBQTdELE1BQU87UUFDOUMsS0FBSyxDQUFBNEMsVUFBQSxDQUNIaEIsVUFBQSxDQUFVLEVBQ1ZyRCxJQUFBLENBQUssTUFBTSxLQUFLaUIsT0FBQSxDQUFRLHdCQUF3QixDQUFDLEVBQ2pEOEQsS0FBQSxDQUFPQyxHQUFBLElBQWVDLE9BQUEsQ0FBUU8sR0FBQSxDQUFJUixHQUFBLFlBQWVILEtBQUEsR0FBUUcsR0FBQSxDQUFJRSxLQUFBLEdBQVFGLEdBQUcsQ0FBQztNQUM1RTtNQUVBUyxXQUFBLEVBQVU7UUFDVCxLQUFLLENBQUFwQixVQUFBLEVBQWFvQixVQUFBLEdBQVk7TUFDL0I7TUFFQUMsaUJBQWlCNUUsSUFBQSxFQUFjNkUsR0FBQSxFQUFhNUUsS0FBQSxFQUFhO1FBQ3hELEtBQUssQ0FBQXNELFVBQUEsRUFBYXFCLGdCQUFBLENBQWlCNUUsSUFBQSxFQUFNNkUsR0FBQSxFQUFLNUUsS0FBSztNQUNwRDs7SUFDQXhCLE9BQUEsQ0FBQVAsU0FBQSxHQUFBbUYsVUFBQTs7Ozs7Ozs7Ozs7O0lDcEdELElBQUF5QixVQUFBLEdBQUFwRixRQUFBO0lBRUEsSUFBQXFGLEdBQUEsR0FBQXJGLFFBQUE7SUFDQSxJQUFBc0YsSUFBQSxHQUFBdEYsUUFBQTtJQUNBLElBQUF1RixJQUFBLEdBQUF2RixRQUFBO0lBQ0EsSUFBQXVDLFdBQUEsR0FBQXZDLFFBQUE7SUFDQSxJQUFBd0YsT0FBQSxHQUFBeEYsUUFBQTtJQW1CQSxNQUFNeUYsT0FBQSxHQUFVLE9BQU9yRyxXQUFBLEtBQWdCLGNBQWMsT0FBT0EsV0FBQTtJQUUzQyxNQUNYc0csYUFBQSxTQUFxQkQsT0FBQSxDQUFPO01BQ3hCLENBQUF2QixLQUFBO01BQ1QsSUFBSUEsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDYjtNQUVBLElBQUk1RCxLQUFBLEVBQUk7UUFDUCxPQUFPLEtBQUssQ0FBQTRELEtBQUEsQ0FBTzVELElBQUE7TUFDcEI7TUFFQSxJQUFJcUYsV0FBQSxFQUFVO1FBQ2IsT0FBTyxLQUFLLENBQUF6QixLQUFBLENBQU95QixVQUFBO01BQ3BCO01BRVMsQ0FBQXJCLFNBQUE7TUFDVCxJQUFJQSxVQUFBLEVBQVM7UUFDWixPQUFPLEtBQUssQ0FBQUEsU0FBQTtNQUNiO01BRUEsSUFBSS9DLEtBQUEsRUFBSTtRQUNQLE9BQU8sR0FBR3FFLFFBQUEsQ0FBU0MsTUFBQTtNQUNwQjtNQUVBLElBQUlDLEdBQUEsRUFBRTtRQUNMLE9BQU8sS0FBSyxDQUFBNUIsS0FBQSxDQUFPNEIsRUFBQTtNQUNwQjtNQUVBLElBQUlDLE1BQUEsRUFBSztRQUNSLE9BQU8sS0FBSyxDQUFBN0IsS0FBQSxDQUFPNkIsS0FBQTtNQUNwQjtNQUVBLElBQUlDLE9BQUEsRUFBTTtRQUNULE9BQU8sS0FBSyxDQUFBOUIsS0FBQSxDQUFPOEIsTUFBQTtNQUNwQjtNQUVBLENBQUF2RCxNQUFBO01BQ0EsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUVTLENBQUF3RCxFQUFBO01BQ1QsSUFBSUEsR0FBQSxFQUFFO1FBQ0wsT0FBTyxLQUFLLENBQUFBLEVBQUE7TUFDYjtNQUVTLENBQUE3QixHQUFBO01BQ1QsSUFBSUEsSUFBQSxFQUFHO1FBQ04sT0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDYjtNQUVBLElBQUlQLFdBQUEsRUFBVTtRQUNiLE9BQU8sS0FBSyxDQUFBTyxHQUFBLENBQUtQLFVBQUE7TUFDbEI7TUFFUyxDQUFBL0IsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFFUyxDQUFBcEQsVUFBQTtNQUVBLENBQUF3SCxNQUFBO01BQ1QsSUFBSUEsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDYjtNQUdBLENBQUF4RSxLQUFBO01BQ0EsSUFBSUEsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDYjtNQUVBLElBQUl5RSxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUssQ0FBQXpFLEtBQUEsQ0FBT1IsTUFBQTtNQUNwQjtNQUVBLElBQUlrRixVQUFBLEVBQVM7UUFDWixPQUFPLENBQUMsR0FBRyxLQUFLLENBQUExRSxLQUFBLENBQU9DLFFBQVE7TUFDaEM7TUFLQSxDQUFBMEUsWUFBQSxHQUFnQkMsQ0FBQSxLQUFLO1FBQ3BCLE1BQU1DLEtBQUEsR0FBUSxJQUFJQyxXQUFBLENBQVksMEJBQTBCO1VBQUVDLE9BQUEsRUFBUztVQUFPQyxRQUFBLEVBQVU7UUFBSyxDQUFFO1FBQzNGLEtBQUtDLGFBQUEsQ0FBY0osS0FBSztNQUN6QjtNQUVBakgsWUFBWTRFLEtBQUEsRUFBbUI7UUFDOUIsTUFBSztRQUNMLEtBQUssQ0FBQUEsS0FBQSxHQUFTQSxLQUFBO1FBRWQsS0FBSzBDLFlBQUEsQ0FBYTtVQUFFQyxJQUFBLEVBQU07UUFBTSxDQUFFO1FBTWxDLEtBQUssQ0FBQXZDLFNBQUEsSUFBYyxNQUFLO1VBQ3ZCLE1BQU13QyxLQUFBLEdBQVE1QyxLQUFBLENBQU15QixVQUFBLENBQVdtQixLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsQ0FBSyxJQUFLO1VBQ3pELE1BQU0sQ0FBQzNHLElBQUksSUFBSXdHLEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEVBQUdILEtBQUEsQ0FBTSxHQUFHO1VBRXRDLE1BQU1JLE9BQUEsR0FBVUosS0FBQSxDQUFNSyxJQUFBLENBQUssR0FBRztVQUM5QixRQUFRSixLQUFBLEdBQVEsR0FBR0EsS0FBQSxJQUFTekcsSUFBQSxLQUFTQSxJQUFBLEtBQVM0RyxPQUFBLEdBQVUsSUFBSUEsT0FBQSxLQUFZO1FBQ3pFLEdBQUU7UUFFRixLQUFLLENBQUF4SSxVQUFBLEdBQWMsSUFBSTZELFdBQUEsQ0FBQUMsc0JBQUEsQ0FBc0I7UUFDN0MsS0FBSyxDQUFBeUQsRUFBQSxHQUFNLElBQUlaLEdBQUEsQ0FBQStCLFFBQUEsQ0FBUyxJQUFJO1FBQzVCLEtBQUssQ0FBQXRGLEdBQUEsR0FBTyxJQUFJeUQsSUFBQSxDQUFBOEIsU0FBQSxDQUFVLElBQUk7UUFDOUIsS0FBSyxDQUFBakQsR0FBQSxHQUFPLElBQUlrQixJQUFBLENBQUE5RyxTQUFBLENBQVUsSUFBSTtRQUM5QixLQUFLLENBQUE0RixHQUFBLEVBQU1yQixFQUFBLENBQUcsMEJBQTBCLEtBQUssQ0FBQXNELFlBQWE7UUFDMUQsS0FBSyxDQUFBSCxNQUFBLEdBQVUsSUFBSVYsT0FBQSxDQUFBakgsYUFBQSxDQUFjLElBQUk7TUFDdEM7TUFFQWtCLGtCQUFBLEVBQWlCO1FBRWhCLEtBQUssQ0FBQWlDLEtBQUEsR0FBUzBELFVBQUEsQ0FBQXRFLFNBQUEsQ0FBVUUsUUFBQSxDQUFTLElBQUk7UUFFckMsS0FBSyxDQUFBeUIsTUFBQSxHQUFVbkIsUUFBQSxDQUFTZ0csYUFBQSxDQUFjLE1BQU07UUFDNUMsS0FBSyxDQUFBN0UsTUFBQSxDQUFROEUsS0FBQSxDQUFNQyxPQUFBLEdBQVU7UUFDN0IsS0FBS0MsVUFBQSxDQUFXQyxNQUFBLENBQU8sS0FBSyxDQUFBakYsTUFBTztRQUVuQyxLQUFLLENBQUEvRCxVQUFBLENBQVltRSxVQUFBLENBQVcsS0FBSyxDQUFBSixNQUFPO1FBRXhDLEtBQUssQ0FBQVgsR0FBQSxDQUFLZSxVQUFBLENBQVUsRUFBRzBCLEtBQUEsQ0FBT0MsR0FBQSxJQUFlQyxPQUFBLENBQVFYLEtBQUEsQ0FBTVUsR0FBQSxDQUFJRSxLQUFLLENBQUM7UUFDckUsS0FBSyxDQUFBdUIsRUFBQSxDQUFJcEQsVUFBQSxDQUFVLEVBQUcwQixLQUFBLENBQU9DLEdBQUEsSUFBZUMsT0FBQSxDQUFRWCxLQUFBLENBQU1VLEdBQUEsQ0FBSUUsS0FBSyxDQUFDO1FBQ3BFLEtBQUssQ0FBQU4sR0FBQSxDQUFLdkIsVUFBQSxDQUFVO01BQ3JCO01BRUE4RSxxQkFBQSxFQUFvQjtRQUNuQixLQUFLLENBQUF2RCxHQUFBLENBQUthLFVBQUEsQ0FBVTtNQUNyQjtNQUVBMkMseUJBQXlCdEgsSUFBQSxFQUFjNkUsR0FBQSxFQUFhNUUsS0FBQSxFQUFhO1FBQ2hFLEtBQUssQ0FBQTZELEdBQUEsQ0FBS2MsZ0JBQUEsQ0FBaUI1RSxJQUFBLEVBQU02RSxHQUFBLEVBQUs1RSxLQUFLO01BQzVDOztJQUNBeEIsT0FBQSxDQUFBYixZQUFBLEdBQUF3SCxhQUFBOzs7Ozs7Ozs7Ozs7SUN6SkssTUFBT21DLFFBQUEsQ0FBUTtNQUNYLENBQUE1RyxNQUFBO01BRVQzQixZQUFZMkIsTUFBQSxFQUFvQjtRQUMvQixLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtNQUNoQjtNQUdBLENBQUE2RyxFQUFBLEdBQU07TUFFTixNQUFNM0QsT0FBTzhCLEVBQUEsRUFBbUI7UUFDL0IsTUFBTTZCLEVBQUEsR0FBSyxFQUFFLEtBQUssQ0FBQUEsRUFBQTtRQUVsQixNQUFNO1VBQUV4SCxJQUFBO1VBQU1tQyxNQUFBO1VBQVF5RDtRQUFNLElBQUssS0FBSyxDQUFBakYsTUFBQTtRQUN0QyxJQUFJZ0YsRUFBQSxDQUFHOEIsTUFBQSxFQUFReEUsTUFBQSxFQUFRO1VBQ3RCa0IsT0FBQSxDQUFRWCxLQUFBLENBQU0sMENBQTBDeEQsSUFBQSxNQUFVMkYsRUFBQSxDQUFHOEIsTUFBTTtVQUMzRTs7UUFJRCxJQUFJdEYsTUFBQSxDQUFPZCxRQUFBLENBQVM0QixNQUFBLEVBQVE7UUFFNUIsSUFBSSxDQUFDMEMsRUFBQSxDQUFHK0IsSUFBQSxFQUFNLE9BQU87UUFFckIsTUFBTXpHLElBQUEsR0FBTyxNQUFNLEtBQUssQ0FBQU4sTUFBQSxDQUFRTSxJQUFBO1FBQ2hDa0IsTUFBQSxDQUFPd0YsU0FBQSxJQUFhLE1BQU1oQyxFQUFBLENBQUcrQixJQUFBLENBQUt0RSxPQUFBLENBQVEsa0JBQWtCLE1BQU1uQyxJQUFJLEdBQUU7UUFHeEUsTUFBTTJHLEtBQUEsR0FBa0I7UUFDeEIsTUFBTUMsU0FBQSxHQUFZMUYsTUFBQSxDQUFPMkYsZ0JBQUEsQ0FBaUIsTUFBTTtRQUNoREQsU0FBQSxDQUFVckYsT0FBQSxDQUFRckIsSUFBQSxJQUFReUcsS0FBQSxDQUFNRyxJQUFBLENBQUs1RyxJQUFBLENBQUs2RyxJQUFJLENBQUM7UUFFL0NKLEtBQUEsQ0FBTTNFLE1BQUEsS0FBVyxNQUFNMkMsTUFBQSxDQUFPckQsVUFBQSxDQUFXcUYsS0FBSztRQUU5Q0MsU0FBQSxDQUFVckYsT0FBQSxDQUNSckIsSUFBQSxJQUEwQkEsSUFBQSxDQUFLc0QsU0FBQSxLQUFjLFVBQVV0RCxJQUFBLENBQUsvQixnQkFBQSxDQUFpQixRQUFRd0csTUFBQSxDQUFPcUMsUUFBUSxDQUFDO1FBSXZHLE1BQU1yQyxNQUFBLEVBQVFzQyxLQUFBO1FBRWQsSUFBSSxLQUFLLENBQUFWLEVBQUEsS0FBUUEsRUFBQSxFQUFJO1FBR3JCckYsTUFBQSxDQUFPOEUsS0FBQSxDQUFNQyxPQUFBLEdBQVU7TUFDeEI7O0lBQ0F6SSxPQUFBLENBQUE4SSxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7OztJQ3pERCxJQUFBWSxTQUFBLEdBQUF6SSxRQUFBO0lBQ0EsSUFBQTBJLFNBQUEsR0FBQTFJLFFBQUE7SUFFTSxNQUFPb0gsUUFBQSxDQUFRO01BQ1gsQ0FBQW5HLE1BQUE7TUFDQSxDQUFBMEgsUUFBQTtNQUVULENBQUEvSixTQUFBO01BQ0EsSUFBSUEsVUFBQSxFQUFTO1FBQ1osT0FBTyxLQUFLLENBQUFBLFNBQUE7TUFDYjtNQUVBVSxZQUFZMkIsTUFBQSxFQUFvQjtRQUMvQixLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtRQUNmLEtBQUssQ0FBQTBILFFBQUEsR0FBWSxJQUFJRCxTQUFBLENBQUFiLFFBQUEsQ0FBUzVHLE1BQU07TUFDckM7TUFFQSxDQUFBMkgsV0FBQSxHQUFlO01BRWYsTUFBTS9GLFdBQUEsRUFBVTtRQUNmLElBQUksS0FBSyxDQUFBK0YsV0FBQSxFQUFjLE1BQU0sSUFBSXZFLEtBQUEsQ0FBTSxnQ0FBZ0M7UUFDdkUsS0FBSyxDQUFBdUUsV0FBQSxHQUFlO1FBRXBCLE1BQU07VUFBRTFFO1FBQUssSUFBSyxLQUFLLENBQUFqRCxNQUFBO1FBR3ZCLElBQUksQ0FBQ2lELEtBQUEsQ0FBTUMsTUFBQSxDQUFPOEIsRUFBQSxFQUFJO1FBRXRCLE1BQU00QyxRQUFBLElBQVksTUFBSztVQUN0QixNQUFNO1lBQUVDO1VBQWEsSUFBSzVFLEtBQUEsQ0FBTUMsTUFBQTtVQUNoQyxJQUFJLENBQUMyRSxhQUFBLEVBQWUsT0FBTztVQUUzQixJQUFJQyxTQUFBLEdBQVdDLFlBQUEsQ0FBYUMsaUJBQUE7VUFDNUJGLFNBQUEsR0FBV0EsU0FBQSxHQUFXQSxTQUFBLEdBQVdHLFNBQUEsQ0FBVUwsUUFBQTtVQUMzQ0UsU0FBQSxHQUFXQSxTQUFBLENBQVNJLEtBQUEsQ0FBTSxHQUFHLENBQUM7VUFDOUIsT0FBTyxHQUFHSixTQUFBO1FBQ1gsR0FBRTtRQUVGLElBQUlLLFFBQUE7UUFDSixJQUFJbEYsS0FBQSxDQUFNNEIsRUFBQSxLQUFPLFFBQVE7VUFDeEIsSUFBSXVELEdBQUEsR0FBTSxHQUFHUixRQUFBLEdBQVczRSxLQUFBLENBQU01RCxJQUFBLEtBQVNzRixRQUFBLENBQVMwRCxRQUFBLEdBQVcxRCxRQUFBLENBQVMyRCxNQUFBO1VBQ3BFSCxRQUFBLElBQVcsR0FBQVgsU0FBQSxDQUFBZSxPQUFBLEVBQVNILEdBQUc7bUJBQ2JuRixLQUFBLENBQU00QixFQUFBLEtBQU8sVUFBVTtVQUNqQ3NELFFBQUEsSUFBVyxHQUFBWCxTQUFBLENBQUFlLE9BQUEsRUFBUyxHQUFHWCxRQUFBLEdBQVczRSxLQUFBLENBQU01RCxJQUFBLEVBQU07ZUFDeEM7VUFDTixNQUFNbUosT0FBQSxHQUFVLG1CQUFJckosR0FBQSxDQUFHO1VBQ3ZCOEQsS0FBQSxDQUFNakMsS0FBQSxFQUFPYSxPQUFBLENBQVE0RyxJQUFBLElBQU87WUFDM0IsTUFBTW5KLEtBQUEsR0FBUSxLQUFLLENBQUFVLE1BQUEsQ0FBUXBCLFlBQUEsQ0FBYTZKLElBQUk7WUFDNUNuSixLQUFBLElBQVNrSixPQUFBLENBQVFqSixHQUFBLENBQUlrSixJQUFBLEVBQU1uSixLQUFLO1VBQ2pDLENBQUM7VUFFRCxJQUFJOEksR0FBQSxHQUFNUixRQUFBO1VBQ1YsQ0FBQyxHQUFHWSxPQUFPLEVBQUVFLElBQUEsQ0FBSyxDQUFDQyxDQUFBLEVBQUdDLENBQUEsS0FBT0QsQ0FBQSxDQUFFLEtBQUtDLENBQUEsQ0FBRSxLQUFLLElBQUksQ0FBRSxFQUFFL0csT0FBQSxDQUFRLENBQUMsQ0FBQ2dILENBQUEsRUFBR0MsQ0FBQyxNQUFPVixHQUFBLElBQU8sR0FBR1MsQ0FBQSxLQUFNQyxDQUFBLEtBQU87VUFDL0ZYLFFBQUEsSUFBVyxHQUFBWCxTQUFBLENBQUFlLE9BQUEsRUFBU0gsR0FBRzs7UUFHeEIsTUFBTTlILElBQUEsR0FBTyxNQUFNLEtBQUssQ0FBQU4sTUFBQSxDQUFRTSxJQUFBO1FBQ2hDLE1BQU0zQixHQUFBLEdBQU0sR0FBRzJCLElBQUEsa0JBQXNCMkMsS0FBQSxDQUFNNUQsSUFBQSxJQUFROEksUUFBQTtRQUVuRCxJQUFJO1VBQ0gsTUFBTVksUUFBQSxHQUFXLE1BQU1DLEtBQUEsQ0FBTXJLLEdBQUc7VUFDaEMsSUFBSW9LLFFBQUEsQ0FBU0UsTUFBQSxLQUFXLEtBQUs7WUFDNUJ6RixPQUFBLENBQVFYLEtBQUEsQ0FBTSwwQ0FBMENJLEtBQUEsQ0FBTTVELElBQUEsbUJBQXVCMEosUUFBQSxDQUFTRSxNQUFBLEVBQVE7WUFDdEc7O1VBRUQsTUFBTWpFLEVBQUEsR0FBc0IsTUFBTStELFFBQUEsQ0FBU0csSUFBQSxDQUFJO1VBRy9DLEtBQUssQ0FBQXZMLFNBQUEsR0FBYXFILEVBQUE7VUFHbEIsTUFBTSxLQUFLLENBQUEwQyxRQUFBLENBQVV4RSxNQUFBLENBQU84QixFQUFFO2lCQUN0QnpCLEdBQUEsRUFBUDtVQUNEQyxPQUFBLENBQVFYLEtBQUEsQ0FBTSxzQ0FBc0NVLEdBQUEsQ0FBSUcsT0FBTzs7TUFFakU7O0lBQ0E1RixPQUFBLENBQUFxSSxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7OztJQzVFRCxJQUFBZ0QsWUFBQSxHQUFBcEssUUFBQTtJQUNBLElBQUEwSSxTQUFBLEdBQUExSSxRQUFBO0lBSU0sTUFBT3FILFNBQUEsQ0FBUztNQUNaLENBQUFwRyxNQUFBO01BQ0EsQ0FBQTBILFFBQUE7TUFFVCxDQUFBL0osU0FBQTtNQUNBLElBQUlBLFVBQUEsRUFBUztRQUNaLE9BQU8sS0FBSyxDQUFBQSxTQUFBO01BQ2I7TUFFQVUsWUFBWTJCLE1BQUEsRUFBb0I7UUFDL0IsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7UUFDZixLQUFLLENBQUEwSCxRQUFBLEdBQVksSUFBSUQsU0FBQSxDQUFBYixRQUFBLENBQVM1RyxNQUFNO01BQ3JDO01BRUEsQ0FBQTJILFdBQUEsR0FBZTtNQUtmLE1BQU0vRixXQUFBLEVBQVU7UUFFZixJQUFJLENBQUMsS0FBSyxDQUFBNUIsTUFBQSxDQUFRaUQsS0FBQSxDQUFNQyxNQUFBLENBQU9yQyxHQUFBLEVBQUs7UUFFcEMsSUFBSSxLQUFLLENBQUE4RyxXQUFBLEVBQWMsTUFBTSxJQUFJdkUsS0FBQSxDQUFNLGdDQUFnQztRQUN2RSxLQUFLLENBQUF1RSxXQUFBLEdBQWU7UUFFcEIsTUFBTTNILE1BQUEsR0FBUyxLQUFLLENBQUFBLE1BQUE7UUFDcEIsTUFBTTtVQUFFaUQ7UUFBSyxJQUFLakQsTUFBQTtRQUNsQixNQUFNZ0IsS0FBQSxHQUFRLElBQUk3QixHQUFBLENBQUk4RCxLQUFBLENBQU1qQyxLQUFBLEdBQVFpQyxLQUFBLENBQU1qQyxLQUFBLENBQU1vSSxHQUFBLENBQUlYLElBQUEsSUFBUSxDQUFDQSxJQUFBLEVBQU16SSxNQUFBLENBQU9wQixZQUFBLENBQWE2SixJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU07UUFDdkcsTUFBTVksS0FBQSxHQUFRRixZQUFBLENBQUF4TCxTQUFBLENBQVVtRCxJQUFBLENBQUttQyxLQUFBLENBQU01RCxJQUFBLEVBQU0yQixLQUFLO1FBRzlDLElBQUksQ0FBQ3FJLEtBQUEsRUFBTztVQUNYLE9BQU8sTUFBTSxLQUFLLENBQUFDLElBQUEsQ0FBSzs7UUFFeEIsS0FBSyxDQUFBM0wsU0FBQSxHQUFhMEwsS0FBQTtRQUdsQixNQUFNLEtBQUssQ0FBQTNCLFFBQUEsQ0FBVXhFLE1BQUEsQ0FBT21HLEtBQUs7TUFDbEM7TUFFQSxNQUFNLENBQUFDLElBQUFDLENBQUEsRUFBSztRQUNWLE1BQU07VUFBRWxHLFNBQUE7VUFBV2hFO1FBQUksSUFBSyxLQUFLLENBQUFXLE1BQUE7UUFFakMsTUFBTU0sSUFBQSxHQUFPLE9BQU8sWUFBVztVQUM5QixNQUFNdUYsS0FBQSxHQUFReEMsU0FBQSxDQUFVd0MsS0FBQSxDQUFNLEdBQUc7VUFDakMsTUFBTTJELEdBQUEsR0FBTTNELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJLEdBQUdGLEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEtBQU1ILEtBQUEsQ0FBTUcsS0FBQSxDQUFLLE1BQU9ILEtBQUEsQ0FBTUcsS0FBQSxDQUFLO1VBQ3hGLE1BQU07WUFBRW5GLEdBQUEsRUFBSzRJO1VBQU0sS0FBTSxNQUFNbkwsT0FBQSxDQUFRLEdBQUdrTCxHQUFBLFNBQVksR0FBR2pCLE9BQUE7VUFDekQsSUFBSSxDQUFDa0IsTUFBQSxJQUFVLENBQUNBLE1BQUEsQ0FBT25KLElBQUEsRUFBTTtZQUM1QmtELE9BQUEsQ0FBUVgsS0FBQSxDQUNQLFlBQVkyRyxHQUFBLDhEQUFzRW5LLElBQUEsV0FBZTtZQUVsRzs7VUFHRCxPQUFPb0ssTUFBQSxDQUFPbkosSUFBQTtRQUNmLEdBQUU7UUFDRixJQUFJLENBQUNBLElBQUEsRUFBTTtRQUVYLE1BQU1zSCxRQUFBLElBQVksTUFBSztVQUN0QixNQUFNO1lBQUUzRTtVQUFLLElBQUssS0FBSyxDQUFBakQsTUFBQTtVQUN2QixNQUFNO1lBQUU2SDtVQUFhLElBQUs1RSxLQUFBLENBQU1DLE1BQUE7VUFDaEMsSUFBSSxDQUFDMkUsYUFBQSxFQUFlLE9BQU87VUFFM0IsSUFBSUMsU0FBQSxHQUFXQyxZQUFBLENBQWFDLGlCQUFBO1VBQzVCRixTQUFBLEdBQVdBLFNBQUEsR0FBV0EsU0FBQSxHQUFXRyxTQUFBLENBQVVMLFFBQUE7VUFDM0NFLFNBQUEsR0FBV0EsU0FBQSxDQUFTSSxLQUFBLENBQU0sR0FBRyxDQUFDO1VBQzlCLE9BQU8sYUFBYUosU0FBQTtRQUNyQixHQUFFO1FBRUYsSUFBSTlHLEtBQUEsSUFBUyxNQUFLO1VBQ2pCLE1BQU07WUFBRWlDO1VBQUssSUFBSyxLQUFLLENBQUFqRCxNQUFBO1VBQ3ZCLElBQUksQ0FBQ2lELEtBQUEsQ0FBTWpDLEtBQUEsRUFBT3NCLE1BQUEsRUFBUSxPQUFPO1VBRWpDLElBQUlvSCxNQUFBLEdBQVEsWUFBWXpHLEtBQUEsQ0FBTWpDLEtBQUEsQ0FBTWtGLElBQUEsQ0FBSyxHQUFHO1VBQzVDakQsS0FBQSxDQUFNakMsS0FBQSxDQUFNYSxPQUFBLENBQVE0RyxJQUFBLElBQU87WUFDMUIsTUFBTW5KLEtBQUEsR0FBUSxLQUFLLENBQUFVLE1BQUEsQ0FBUXBCLFlBQUEsQ0FBYTZKLElBQUk7WUFDNUMsSUFBSSxDQUFDbkosS0FBQSxFQUFPO1lBQ1pvSyxNQUFBLElBQVMsU0FBU2pCLElBQUEsSUFBUW5KLEtBQUE7VUFDM0IsQ0FBQztRQUNGLEdBQUU7UUFFRixNQUFNWCxHQUFBLEdBQU0sR0FBRzJCLElBQUEsZ0JBQW9CakIsSUFBQSxHQUFPdUksUUFBQSxHQUFXNUcsS0FBQTtRQUVyRCxJQUFJO1VBQ0gsTUFBTStILFFBQUEsR0FBVyxNQUFNQyxLQUFBLENBQU1ySyxHQUFHO1VBQ2hDLElBQUlvSyxRQUFBLENBQVNFLE1BQUEsS0FBVyxLQUFLO1lBQzVCekYsT0FBQSxDQUFRWCxLQUFBLENBQU0saUNBQWlDeEQsSUFBQSxtQkFBdUIwSixRQUFBLENBQVNFLE1BQUEsRUFBUTtZQUN2Rjs7VUFFRCxNQUFNakUsRUFBQSxHQUFzQixNQUFNK0QsUUFBQSxDQUFTRyxJQUFBLENBQUk7VUFHL0MsS0FBSyxDQUFBdkwsU0FBQSxHQUFhcUgsRUFBQTtVQUdsQixNQUFNLEtBQUssQ0FBQTBDLFFBQUEsQ0FBVXhFLE1BQUEsQ0FBTzhCLEVBQUU7aUJBQ3RCekIsR0FBQSxFQUFQO1VBQ0RDLE9BQUEsQ0FBUVgsS0FBQSxDQUFNVSxHQUFBLENBQUlFLEtBQUs7O01BRXpCOztJQUNBM0YsT0FBQSxDQUFBc0ksU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7SUMxR0QsSUFBQXRILEtBQUEsR0FBQUMsUUFBQTtJQUVpQixNQUNYNEssVUFBQSxTQUFrQjdLLEtBQUEsQ0FBQUcsTUFBQSxDQUFNO01BQ3BCLENBQUFlLE1BQUE7TUFDVCxDQUFBNEosT0FBQSxHQUFXO01BRVh2TCxZQUFZMkIsTUFBQSxFQUFvQjtRQUMvQixNQUFLO1FBQ0wsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7UUFFZixNQUFNO1VBQUVNO1FBQUksSUFBSyxLQUFLLENBQUFOLE1BQUE7UUFDdEIsTUFBTTRKLE9BQUEsR0FBVSxLQUFLLENBQUFBLE9BQUEsS0FBYSxJQUFJLFlBQVksS0FBSyxDQUFBQSxPQUFBLEtBQWE7UUFDcEUsS0FBSyxDQUFBQyxJQUFBLEdBQVEsR0FBR3ZKLElBQUEsYUFBaUJzSixPQUFBO01BQ2xDO01BRVMsQ0FBQUMsSUFBQTtNQUNULElBQUlBLEtBQUEsRUFBSTtRQUNQLE9BQU8sS0FBSyxDQUFBQSxJQUFBO01BQ2I7TUFFQUMsT0FBQSxFQUFNO1FBQ0wsS0FBSyxDQUFBRixPQUFBO1FBQ0wsS0FBS3BLLE9BQUEsQ0FBUSxRQUFRO01BQ3RCOztJQUNBMUIsT0FBQSxDQUFBWixTQUFBLEdBQUF5TSxVQUFBOzs7Ozs7Ozs7Ozs7SUMxQkQsSUFBQTdLLEtBQUEsR0FBQUMsUUFBQTtJQUVBLElBQUFnTCxLQUFBLEdBQUFoTCxRQUFBO0lBQ0EsSUFBQWlMLE9BQUEsR0FBQWpMLFFBQUE7SUFFaUIsTUFDWGtMLGNBQUEsQ0FBYTtNQUNULENBQUFDLE1BQUEsR0FBa0IsSUFBSXBMLEtBQUEsQ0FBQUcsTUFBQSxDQUFNO01BQ3JDNkMsRUFBQSxHQUFLQSxDQUFDd0QsS0FBQSxFQUFlNkUsUUFBQSxLQUF5QixLQUFLLENBQUFELE1BQUEsQ0FBUXBJLEVBQUEsQ0FBR3dELEtBQUEsRUFBTzZFLFFBQVE7TUFDN0VuSSxHQUFBLEdBQU1BLENBQUNzRCxLQUFBLEVBQWU2RSxRQUFBLEtBQXlCLEtBQUssQ0FBQUQsTUFBQSxDQUFRbEksR0FBQSxDQUFJc0QsS0FBQSxFQUFPNkUsUUFBUTtNQUV0RSxDQUFBcEgsTUFBQSxHQUFnQyxtQkFBSTVELEdBQUEsQ0FBRztNQUN2QyxDQUFBaUwsU0FBQTtNQUVULENBQUFSLE9BQUEsR0FBVztNQUNYLElBQUlBLFFBQUEsRUFBTztRQUNWLE9BQU8sS0FBSyxDQUFBQSxPQUFBO01BQ2I7TUFFQSxDQUFBUyxPQUFBQyxDQUFBLEVBQVE7UUFDUCxLQUFLLENBQUFWLE9BQUE7UUFDTCxLQUFLLENBQUFXLFFBQUEsSUFBYSxLQUFLLENBQUFMLE1BQUEsQ0FBUTFLLE9BQUEsQ0FBUSxRQUFRO01BQ2hEO01BRUEsSUFBSTBILFVBQUEsRUFBUztRQUNaLE9BQU8sbUJBQUlwSCxHQUFBLENBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQWlELE1BQUEsQ0FBUXlILElBQUEsQ0FBSSxDQUFFLENBQUM7TUFDeEM7TUFFQSxJQUFJekgsT0FBQSxFQUFNO1FBQ1QsS0FBSyxDQUFBMEgsS0FBQSxDQUFNO1FBQ1gsT0FBTyxLQUFLLENBQUFGLFFBQUE7TUFDYjtNQUVTLENBQUFHLE9BQUE7TUFDVCxDQUFBSCxRQUFBLEdBQVk7TUFDWixDQUFBSSxPQUFBO01BRUEsSUFBSXBELE1BQUEsRUFBSztRQUNSLEtBQUssQ0FBQWtELEtBQUEsQ0FBTTtRQUNYLE9BQU8sS0FBSyxDQUFBQyxPQUFBO01BQ2I7TUFFQXBELFFBQUEsR0FBWWhDLEtBQUEsSUFBa0M7UUFDN0MsTUFBTStCLElBQUEsR0FBTyxPQUFPL0IsS0FBQSxLQUFVLFdBQVdBLEtBQUEsR0FBMEJBLEtBQUEsQ0FBTXNGLGFBQUEsQ0FBZWhNLFlBQUEsQ0FBYSxNQUFNO1FBQzNHLElBQUksQ0FBQyxLQUFLLENBQUFtRSxNQUFBLENBQVF4QyxHQUFBLENBQUk4RyxJQUFJLEdBQUc7VUFDNUI3RCxPQUFBLENBQVFxSCxJQUFBLENBQUssb0JBQW9CeEQsSUFBQSxrQkFBc0I7VUFDdkQ7O1FBR0QsS0FBSyxDQUFBdEUsTUFBQSxDQUFReEQsR0FBQSxDQUFJOEgsSUFBQSxFQUFNLElBQUk7UUFDM0IsS0FBSyxDQUFBb0QsS0FBQSxDQUFNO1FBQ1gsTUFBTUosT0FBQSxHQUFVLEtBQUssQ0FBQVMsS0FBQSxDQUFNO1FBQzNCVCxPQUFBLElBQVcsS0FBSyxDQUFBQSxPQUFBLENBQVE7UUFFeEIsT0FBTztNQUNSO01BRUEsQ0FBQUksS0FBQU0sQ0FBQSxFQUFNO1FBQ0wsSUFBSSxLQUFLLENBQUFSLFFBQUEsRUFBVyxPQUFPO1FBRzNCLE1BQU14SCxNQUFBLEdBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQUEsTUFBQSxDQUFRN0QsTUFBQSxDQUFNLENBQUUsRUFBRWlDLE1BQUEsQ0FBTyxDQUFDQyxJQUFBLEVBQU00SixPQUFBLEtBQVc1SixJQUFBLElBQVE0SixPQUFBLEVBQVEsSUFBSTtRQUN2RmpJLE1BQUEsSUFBVSxLQUFLLENBQUE0SCxPQUFBLENBQVE7UUFFdkIsT0FBUSxLQUFLLENBQUFKLFFBQUEsR0FBWXhILE1BQUE7TUFDMUI7TUFNQSxDQUFBK0gsS0FBQUcsQ0FBQSxFQUFNO1FBQ0wsTUFBTUMsUUFBQSxHQUlGO1VBQUVDLElBQUEsRUFBTSxtQkFBSWhNLEdBQUEsQ0FBRztVQUFJRCxNQUFBLEVBQVEsbUJBQUlDLEdBQUEsQ0FBRztVQUFJaU0sVUFBQSxFQUFZLG1CQUFJak0sR0FBQSxDQUFHO1FBQUU7UUFFL0QsQ0FBQyxHQUFHLEtBQUssQ0FBQTRELE1BQUEsQ0FBUXlILElBQUEsQ0FBSSxDQUFFLEVBQUUzSSxPQUFBLENBQVF3RixJQUFBLElBQU87VUFDdkMsTUFBTXdDLElBQUEsR0FBTyxJQUFJRSxLQUFBLENBQUF4QixPQUFBLENBQUtsQixJQUFJO1VBQzFCLE1BQU1nRSxRQUFBLEdBQVdILFFBQUEsQ0FBU0MsSUFBQSxDQUFLOUosR0FBQSxDQUFJd0ksSUFBQSxDQUFLMUIsUUFBUTtVQUNoRCxNQUFNZ0QsSUFBQSxHQUFPRSxRQUFBLElBQVlBLFFBQUEsR0FBV3hCLElBQUEsQ0FBS0QsT0FBQSxHQUFVeUIsUUFBQSxHQUFXeEIsSUFBQSxDQUFLRCxPQUFBO1VBQ25Fc0IsUUFBQSxDQUFTQyxJQUFBLENBQUs1TCxHQUFBLENBQUlzSyxJQUFBLENBQUsxQixRQUFBLEVBQVVnRCxJQUFJO1VBRXJDLElBQUksS0FBSyxDQUFBcEksTUFBQSxDQUFRMUIsR0FBQSxDQUFJd0ksSUFBQSxDQUFLeEMsSUFBSSxHQUFHO1lBQ2hDLE1BQU1pRSxjQUFBLEdBQWlCSixRQUFBLENBQVNFLFVBQUEsQ0FBVy9KLEdBQUEsQ0FBSXdJLElBQUEsQ0FBSzFCLFFBQVE7WUFDNUQsTUFBTWlELFVBQUEsR0FBYUUsY0FBQSxJQUFrQkEsY0FBQSxHQUFpQnpCLElBQUEsQ0FBS0QsT0FBQSxHQUFVMEIsY0FBQSxHQUFpQnpCLElBQUEsQ0FBS0QsT0FBQTtZQUMzRnNCLFFBQUEsQ0FBU0UsVUFBQSxDQUFXN0wsR0FBQSxDQUFJc0ssSUFBQSxDQUFLMUIsUUFBQSxFQUFVaUQsVUFBVTs7VUFHbEQsTUFBTWxNLE1BQUEsR0FBc0JnTSxRQUFBLENBQVNoTSxNQUFBLENBQU9xQixHQUFBLENBQUlzSixJQUFBLENBQUsxQixRQUFRLElBQzFEK0MsUUFBQSxDQUFTaE0sTUFBQSxDQUFPbUMsR0FBQSxDQUFJd0ksSUFBQSxDQUFLMUIsUUFBUSxJQUNqQyxtQkFBSXJJLEdBQUEsQ0FBRztVQUNWWixNQUFBLENBQU9FLEdBQUEsQ0FBSXlLLElBQUEsQ0FBS0QsT0FBTztVQUN2QnNCLFFBQUEsQ0FBU2hNLE1BQUEsQ0FBT0ssR0FBQSxDQUFJc0ssSUFBQSxDQUFLMUIsUUFBQSxFQUFVakosTUFBTTtRQUMxQyxDQUFDO1FBR0QsTUFBTTRMLEtBQUEsR0FBZ0I7UUFDdEIsQ0FBQyxHQUFHLEtBQUssQ0FBQS9ILE1BQUEsQ0FBUXlILElBQUEsQ0FBSSxDQUFFLEVBQUUzSSxPQUFBLENBQVF3RixJQUFBLElBQU87VUFDdkMsTUFBTXdDLElBQUEsR0FBTyxJQUFJRSxLQUFBLENBQUF4QixPQUFBLENBQUtsQixJQUFJO1VBQzFCLE1BQU0rRCxVQUFBLEdBQWFGLFFBQUEsQ0FBU0UsVUFBQSxDQUFXL0osR0FBQSxDQUFJd0ksSUFBQSxDQUFLMUIsUUFBUTtVQUN4RDBCLElBQUEsQ0FBS0QsT0FBQSxHQUFVd0IsVUFBQSxJQUFjTixLQUFBLENBQU0xRCxJQUFBLENBQUt5QyxJQUFJO1FBQzdDLENBQUM7UUFFRGlCLEtBQUEsQ0FBTWpKLE9BQUEsQ0FBUWdJLElBQUEsSUFBUSxLQUFLLENBQUE5RyxNQUFBLENBQVFyRCxNQUFBLENBQU9tSyxJQUFBLENBQUt4QyxJQUFJLENBQUM7UUFDcEQsT0FBTyxDQUFDLENBQUN5RCxLQUFBLENBQU14SSxNQUFBO01BQ2hCO01BUUEsQ0FBQTZJLElBQUE7TUFDQSxDQUFBSSxPQUFBLEdBQVdDLENBQUEsS0FBSztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUFMLElBQUEsRUFBTztRQUNqQixNQUFNZCxPQUFBLEdBQVUsS0FBSyxDQUFBUCxNQUFBLENBQVEsS0FBSyxDQUFBcUIsSUFBSztRQUN2Q2QsT0FBQSxJQUFXLEtBQUssQ0FBQUEsT0FBQSxDQUFRO01BQ3pCO01BRUEsQ0FBQVAsTUFBQTJCLENBQVFDLE1BQUEsRUFBaUI7UUFDeEIsS0FBSyxDQUFBUCxJQUFBLEdBQVFPLE1BQUE7UUFFYkEsTUFBQSxDQUFPQyxPQUFBLENBQVEsS0FBSyxDQUFBdkIsU0FBQSxDQUFXUCxJQUFJO1FBQ25DLE1BQU01QyxLQUFBLEdBQWdCeUUsTUFBQSxDQUFPdEMsR0FBQSxDQUFJUyxJQUFBLElBQVEsSUFBSUUsS0FBQSxDQUFBeEIsT0FBQSxDQUFLc0IsSUFBSSxDQUFDO1FBR3ZELElBQUlRLE9BQUEsR0FBVTtRQUNkcEQsS0FBQSxDQUFNcEYsT0FBQSxDQUFRZ0ksSUFBQSxJQUFPO1VBQ3BCLElBQUksS0FBSyxDQUFBOUcsTUFBQSxDQUFReEMsR0FBQSxDQUFJc0osSUFBQSxDQUFLeEMsSUFBSSxHQUFHO1VBQ2pDLEtBQUssQ0FBQXRFLE1BQUEsQ0FBUXhELEdBQUEsQ0FBSXNLLElBQUEsQ0FBS3hDLElBQUEsRUFBTSxLQUFLO1VBQ2pDZ0QsT0FBQSxHQUFVO1FBQ1gsQ0FBQztRQUNELE9BQU9BLE9BQUE7TUFDUjtNQUVBUCxPQUFPN0MsS0FBQSxFQUFlO1FBQ3JCLE1BQU1vRCxPQUFBLEdBQVUsS0FBSyxDQUFBUCxNQUFBLENBQVE3QyxLQUFLO1FBQ2xDb0QsT0FBQSxJQUFXLEtBQUssQ0FBQUEsT0FBQSxDQUFRO01BQ3pCO01BRUFoTSxZQUFZMkIsTUFBQSxFQUFvQjtRQUMvQixLQUFLLENBQUFvSyxTQUFBLEdBQWEsSUFBSUosT0FBQSxDQUFBOU0sU0FBQSxDQUFVOEMsTUFBTTtRQUN0QyxLQUFLLENBQUEwSyxPQUFBLEdBQVcsSUFBSWtCLE9BQUEsQ0FBUWpCLE9BQUEsSUFBWSxLQUFLLENBQUFBLE9BQUEsR0FBV0EsT0FBUTtNQUNqRTtNQUVBLENBQUFoRCxXQUFBLEdBQWU7TUFDZixJQUFJQSxZQUFBLEVBQVc7UUFDZCxPQUFPLEtBQUssQ0FBQUEsV0FBQTtNQUNiO01BRUEsTUFBTS9GLFdBQVdxRixLQUFBLEVBQWU7UUFDL0IsSUFBSSxLQUFLLENBQUFVLFdBQUEsRUFBYyxNQUFNLElBQUl2RSxLQUFBLENBQU0sbUNBQW1DO1FBQzFFLEtBQUssQ0FBQXVFLFdBQUEsR0FBZTtRQUVwQixLQUFLLENBQUFtQyxNQUFBLENBQVE3QyxLQUFLO1FBQ2xCLEtBQUssQ0FBQW1ELFNBQUEsQ0FBV3RJLEVBQUEsQ0FBRyxVQUFVLEtBQUssQ0FBQXlKLE9BQVE7TUFDM0M7TUFFQXhKLFFBQUEsRUFBTztRQUNOLEtBQUssQ0FBQXFJLFNBQUEsQ0FBV3BJLEdBQUEsQ0FBSSxVQUFVLEtBQUssQ0FBQXVKLE9BQVE7TUFDNUM7O0lBQ0F6TixPQUFBLENBQUFSLGFBQUEsR0FBQTJNLGNBQUE7Ozs7Ozs7Ozs7OztJQ3BLYSxNQUFBaEksUUFBQTtNQUNKLENBQUFvRixJQUFBO01BQ1QsSUFBSUEsS0FBQSxFQUFJO1FBQ1AsT0FBTyxLQUFLLENBQUFBLElBQUE7TUFDYjtNQUVTLENBQUFjLFFBQUE7TUFDVCxJQUFJQSxTQUFBLEVBQVE7UUFDWCxPQUFPLEtBQUssQ0FBQUEsUUFBQTtNQUNiO01BRVMsQ0FBQXlCLE9BQUE7TUFDVCxJQUFJQSxRQUFBLEVBQU87UUFDVixPQUFPLEtBQUssQ0FBQUEsT0FBQTtNQUNiO01BRUF2TCxZQUFZZ0osSUFBQSxFQUFZO1FBQ3ZCLEtBQUssQ0FBQUEsSUFBQSxHQUFRQSxJQUFBO1FBRWIsTUFBTXdFLEVBQUEsR0FBS3hFLElBQUEsQ0FBS3hCLEtBQUEsQ0FBTSxXQUFXO1FBQ2pDLEtBQUssQ0FBQXNDLFFBQUEsR0FBWTBELEVBQUEsQ0FBRztRQUNwQixLQUFLLENBQUFqQyxPQUFBLEdBQVdpQyxFQUFBLENBQUcsS0FBS0MsUUFBQSxDQUFTRCxFQUFBLENBQUcsRUFBRSxJQUFJO01BQzNDOztJQUNBL04sT0FBQSxDQUFBeUssT0FBQSxHQUFBdEcsUUFBQTs7Ozs7Ozs7Ozs7O0lDdkJELElBQUE4SixPQUFBLEdBQUFoTixRQUFBO0lBQ0EsSUFBQW9GLFVBQUEsR0FBQXBGLFFBQUE7SUFDQSxJQUFBdUMsV0FBQSxHQUFBdkMsUUFBQTtJQUNBQSxRQUFBO0lBSUEsTUFBTWlOLGFBQUEsU0FBc0I3TSxHQUFBLENBQXlCO01BQ3BELENBQUEwQixHQUFBLEdBQU87TUFDUCxJQUFJQSxJQUFBLEVBQUc7UUFDTixPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNiO01BRUF4QyxZQUFBO1FBQ0MsTUFBSztNQUNOO01BRUE0TixNQUFNeEMsTUFBQSxFQUF5QjtRQUM5QixLQUFLLENBQUE1SSxHQUFBLEdBQU8sT0FBTzRJLE1BQUEsRUFBUTVJLEdBQUEsS0FBUSxZQUFZNEksTUFBQSxDQUFPNUksR0FBQSxHQUFNO01BQzdEO01BRUEsSUFBSWhCLFVBQUEsRUFBUztRQUNaLE9BQU9zRSxVQUFBLENBQUF0RSxTQUFBO01BQ1I7TUFFQSxJQUFJcEMsV0FBQSxFQUFVO1FBQ2IsT0FBTzZELFdBQUEsQ0FBQTdELFVBQUE7TUFDUjtNQUVBc0MsU0FBU2tELEtBQUEsRUFBcUI7UUFDN0JBLEtBQUEsQ0FBTXBCLE9BQUEsQ0FBUXFLLE1BQUEsSUFBUTtVQUVyQixJQUFJLEtBQUszTCxHQUFBLENBQUkyTCxNQUFBLENBQU03TSxJQUFJLEdBQUc7VUFFMUI2TSxNQUFBLENBQU1oSixNQUFBLEdBQVNnSixNQUFBLENBQU1oSixNQUFBLEdBQVNnSixNQUFBLENBQU1oSixNQUFBLEdBQVM7WUFBRUMsR0FBQSxFQUFLO1lBQU10QyxHQUFBLEVBQUs7WUFBT21FLEVBQUEsRUFBSTtVQUFLO1VBQy9FLE1BQU07WUFBRTNGLElBQUE7WUFBTTZEO1VBQU0sSUFBS2dKLE1BQUE7VUFDekJoSixNQUFBLENBQU9DLEdBQUEsR0FBTSxPQUFPRCxNQUFBLENBQU9DLEdBQUEsS0FBUSxZQUFZRCxNQUFBLENBQU9DLEdBQUEsR0FBTTtVQUU1RCxLQUFLNUQsR0FBQSxDQUFJRixJQUFBLEVBQU02TSxNQUFLO1VBR3BCLElBQUksT0FBT2xPLE9BQUEsS0FBWSxVQUFVO1VBRWpDQyxjQUFBLENBQWVDLE1BQUEsQ0FDZG1CLElBQUEsRUFDQSxjQUFjME0sT0FBQSxDQUFBOU8sWUFBQSxDQUFZO1lBQ3pCLFdBQVdrUCxtQkFBQSxFQUFrQjtjQUM1QixPQUFPRCxNQUFBLENBQU1sTCxLQUFBLEdBQVFrTCxNQUFBLENBQU1sTCxLQUFBLEdBQVE7WUFDcEM7WUFFQTNDLFlBQUE7Y0FDQyxNQUFNNk4sTUFBSztZQUNaO1dBQ0E7UUFFSCxDQUFDO01BQ0Y7O0lBR2lCLE1BQU1FLFFBQUEsR0FBT3RPLE9BQUEsQ0FBQUYsT0FBQSxHQUFrQixJQUFJb08sYUFBQSxDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9