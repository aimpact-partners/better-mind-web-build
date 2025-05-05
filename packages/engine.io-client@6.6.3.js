System.register(["engine.io-parser@5.2.3","@socket.io/component-emitter@3.1.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.3"],["@socket.io/component-emitter","3.1.2"],["engine.io-client","6.6.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.3', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.2', dep)],
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/engine.io-client.6.6.3.js
var engine_io_client_6_6_3_exports = {};
__export(engine_io_client_6_6_3_exports, {
  Fetch: () => Fetch,
  NodeWebSocket: () => WS,
  NodeXHR: () => XHR,
  Socket: () => Socket,
  SocketWithUpgrade: () => SocketWithUpgrade,
  SocketWithoutUpgrade: () => SocketWithoutUpgrade,
  Transport: () => Transport,
  TransportError: () => TransportError,
  WebSocket: () => WS,
  WebTransport: () => WT,
  XHR: () => XHR,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_6_3_exports);

// node_modules/engine.io-client/build/esm/globals.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
var defaultBinaryType = "arraybuffer";
function createCookieJar() {}

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length = 0;
  for (let i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length += 1;
    } else if (c < 2048) {
      length += 2;
    } else if (c < 55296 || c >= 57344) {
      length += 3;
    } else {
      i++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i = 0, l = pairs.length; i < l; i++) {
    let pair = pairs[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.2.3");
var import_component_emitter = require("@socket.io/component-emitter@3.1.2");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.2.3");
var Polling = class extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/polling-xhr.js
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.2");
function empty() {}
var BaseXHR = class extends Polling {
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  _create() {
    var _a;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr.getResponseHeader("set-cookie"));
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this._onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = Request.requestsCount++;
      Request.requests[this._index] = this;
    }
  }
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this._index];
    }
    this._xhr = null;
  }
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  abort() {
    this._cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
var hasXHR2 = function () {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
var XHR = class extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd
    }, this.opts);
    return new Request(newRequest, this.uri(), opts);
  }
};
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.2.3");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var BaseWS = class extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        try {
          this.doWrite(packet, data);
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {};
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
};
var WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var WS = class extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data) {
    this.ws.send(data);
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var import_engine4 = require("engine.io-parser@5.2.3");
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch(err => {
      this.onError("webtransport error", err);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then(stream => {
        const decoderStream = (0, import_engine4.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = (0, import_engine4.createPacketEncoderStream)();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({
            done,
            value: value2
          }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch(err => {});
        };
        read();
        const packet = {
          type: "open"
        };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  if (str.length > 8e3) {
    throw "URI too long";
  }
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.2");
var import_engine5 = require("engine.io-parser@5.2.3");
var withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
var OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach(listener => listener());
  }, false);
}
var SocketWithoutUpgrade = class extends import_component_emitter3.Emitter {
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query) opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach(t => {
      const transportName = t.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine5.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new this._transportsByName[name](opts);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", reason => this._onClose("transport close", reason));
  }
  onOpen() {
    this.readyState = "open";
    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this._onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data = this.writeBuffer[i].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  _sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  _onError(err) {
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
};
SocketWithoutUpgrade.protocol = import_engine5.protocol;
var SocketWithUpgrade = class extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i = 0; i < this._upgrades.length; i++) {
        this._probe(this._upgrades[i]);
      }
    }
  }
  _probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i = 0; i < upgrades.length; i++) {
      if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
var Socket = class extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o = typeof uri === "object" ? uri : opts;
    if (!o.transports || o.transports && typeof o.transports[0] === "string") {
      o.transports = (o.transports || ["polling", "websocket", "webtransport"]).map(transportName => transports[transportName]).filter(t => !!t);
    }
    super(uri, o);
  }
};

// node_modules/engine.io-client/build/esm/transports/polling-fetch.js
var Fetch = class extends Polling {
  doPoll() {
    this._fetch().then(res => {
      if (!res.ok) {
        return this.onError("fetch read error", res.status, res);
      }
      res.text().then(data => this.onData(data));
    }).catch(err => {
      this.onError("fetch read error", err);
    });
  }
  doWrite(data, callback) {
    this._fetch(data).then(res => {
      if (!res.ok) {
        return this.onError("fetch write error", res.status, res);
      }
      callback();
    }).catch(err => {
      this.onError("fetch write error", err);
    });
  }
  _fetch(data) {
    var _a;
    const isPost = data !== void 0;
    const headers = new Headers(this.opts.extraHeaders);
    if (isPost) {
      headers.set("content-type", "text/plain;charset=UTF-8");
    }
    (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
    return fetch(this.uri(), {
      method: isPost ? "POST" : "GET",
      body: isPost ? data : null,
      headers,
      credentials: this.opts.withCredentials ? "include" : "omit"
    }).then(res => {
      var _a2;
      (_a2 = this.socket._cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(res.headers.getSetCookie());
      return res;
    });
  }
};

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3BhcnNlcXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJ0cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3BhcnNldXJpLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmctZmV0Y2guanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX2NsaWVudF82XzZfM19leHBvcnRzIiwiX19leHBvcnQiLCJGZXRjaCIsIk5vZGVXZWJTb2NrZXQiLCJXUyIsIk5vZGVYSFIiLCJYSFIiLCJTb2NrZXQiLCJTb2NrZXRXaXRoVXBncmFkZSIsIlNvY2tldFdpdGhvdXRVcGdyYWRlIiwiVHJhbnNwb3J0IiwiVHJhbnNwb3J0RXJyb3IiLCJXZWJTb2NrZXQiLCJXZWJUcmFuc3BvcnQiLCJXVCIsImluc3RhbGxUaW1lckZ1bmN0aW9ucyIsIm5leHRUaWNrIiwicGFyc2UiLCJwcm90b2NvbCIsInByb3RvY29sMiIsInRyYW5zcG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaXNQcm9taXNlQXZhaWxhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYiIsInRoZW4iLCJzZXRUaW1lb3V0Rm4iLCJnbG9iYWxUaGlzU2hpbSIsInNlbGYiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsImRlZmF1bHRCaW5hcnlUeXBlIiwiY3JlYXRlQ29va2llSmFyIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoIiwiaSIsImwiLCJjaGFyQ29kZUF0IiwicmFuZG9tU3RyaW5nIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicmFuZG9tIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlIiwicXMiLCJxcnkiLCJwYWlycyIsInNwbGl0IiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJFbWl0dGVyIiwid3JpdGFibGUiLCJxdWVyeSIsInNvY2tldCIsInN1cHBvcnRzQmluYXJ5IiwiZm9yY2VCYXNlNjQiLCJvbkVycm9yIiwiZW1pdFJlc2VydmVkIiwib3BlbiIsInJlYWR5U3RhdGUiLCJkb09wZW4iLCJjbG9zZSIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsInBhY2tldHMiLCJ3cml0ZSIsIm9uT3BlbiIsIm9uRGF0YSIsImRhdGEiLCJwYWNrZXQiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwib25QYWNrZXQiLCJkZXRhaWxzIiwicGF1c2UiLCJvblBhdXNlIiwiY3JlYXRlVXJpIiwic2NoZW1hIiwiX2hvc3RuYW1lIiwiX3BvcnQiLCJwYXRoIiwiX3F1ZXJ5IiwiaG9zdG5hbWUiLCJpbmRleE9mIiwicG9ydCIsInNlY3VyZSIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImltcG9ydF9lbmdpbmUyIiwiUG9sbGluZyIsImFyZ3VtZW50cyIsIl9wb2xsaW5nIiwibmFtZSIsIl9wb2xsIiwidG90YWwiLCJvbmNlIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZm9yRWFjaCIsImVuY29kZVBheWxvYWQiLCJkb1dyaXRlIiwidXJpIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0aW1lc3RhbXBQYXJhbSIsInNpZCIsImI2NCIsInZhbHVlIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIiLCJoYXNDT1JTIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsImVtcHR5IiwiQmFzZVhIUiIsImxvY2F0aW9uIiwiaXNTU0wiLCJ4ZCIsImZuIiwicmVxIiwicmVxdWVzdCIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsIlJlcXVlc3QiLCJjcmVhdGVSZXF1ZXN0IiwiX29wdHMiLCJfbWV0aG9kIiwiX3VyaSIsIl9kYXRhIiwiX2NyZWF0ZSIsIl9hIiwieGRvbWFpbiIsInhociIsIl94aHIiLCJleHRyYUhlYWRlcnMiLCJzZXREaXNhYmxlSGVhZGVyQ2hlY2siLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZSIsImNvb2tpZUphciIsImFkZENvb2tpZXMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfYTIiLCJwYXJzZUNvb2tpZXMiLCJnZXRSZXNwb25zZUhlYWRlciIsInN0YXR1cyIsIl9vbkxvYWQiLCJfb25FcnJvciIsImRvY3VtZW50IiwiX2luZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiX2NsZWFudXAiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlVGV4dCIsImF0dGFjaEV2ZW50IiwidW5sb2FkSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXJtaW5hdGlvbkV2ZW50IiwiaGFzWEhSMiIsIm5ld1JlcXVlc3QiLCJyZXNwb25zZVR5cGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25jYXQiLCJqb2luIiwiaW1wb3J0X2VuZ2luZTMiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiQmFzZVdTIiwicHJvdG9jb2xzIiwiaGVhZGVycyIsIndzIiwiY3JlYXRlU29ja2V0IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm9wZW4iLCJhdXRvVW5yZWYiLCJfc29ja2V0IiwidW5yZWYiLCJvbmNsb3NlIiwiY2xvc2VFdmVudCIsIm9ubWVzc2FnZSIsImV2Iiwib25lcnJvciIsImxhc3RQYWNrZXQiLCJlbmNvZGVQYWNrZXQiLCJXZWJTb2NrZXRDdG9yIiwiTW96V2ViU29ja2V0IiwiX3BhY2tldCIsImltcG9ydF9lbmdpbmU0IiwiX3RyYW5zcG9ydCIsInRyYW5zcG9ydE9wdGlvbnMiLCJjbG9zZWQiLCJjYXRjaCIsInJlYWR5IiwiY3JlYXRlQmlkaXJlY3Rpb25hbFN0cmVhbSIsInN0cmVhbSIsImRlY29kZXJTdHJlYW0iLCJjcmVhdGVQYWNrZXREZWNvZGVyU3RyZWFtIiwiTUFYX1NBRkVfSU5URUdFUiIsInJlYWRlciIsInJlYWRhYmxlIiwicGlwZVRocm91Z2giLCJnZXRSZWFkZXIiLCJlbmNvZGVyU3RyZWFtIiwiY3JlYXRlUGFja2V0RW5jb2RlclN0cmVhbSIsInBpcGVUbyIsIl93cml0ZXIiLCJnZXRXcml0ZXIiLCJyZWFkIiwiZG9uZSIsInZhbHVlMiIsIndlYnNvY2tldCIsIndlYnRyYW5zcG9ydCIsInBvbGxpbmciLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJpbXBvcnRfZW5naW5lNSIsIndpdGhFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJPRkZMSU5FX0VWRU5UX0xJU1RFTkVSUyIsImxpc3RlbmVyIiwid3JpdGVCdWZmZXIiLCJfcHJldkJ1ZmZlckxlbiIsIl9waW5nSW50ZXJ2YWwiLCJfcGluZ1RpbWVvdXQiLCJfbWF4UGF5bG9hZCIsIl9waW5nVGltZW91dFRpbWUiLCJJbmZpbml0eSIsInBhcnNlZFVyaSIsIl90cmFuc3BvcnRzQnlOYW1lIiwidCIsInRyYW5zcG9ydE5hbWUiLCJwcm90b3R5cGUiLCJwdXNoIiwiYWdlbnQiLCJ1cGdyYWRlIiwicmVtZW1iZXJVcGdyYWRlIiwiYWRkVHJhaWxpbmdTbGFzaCIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwiY2xvc2VPbkJlZm9yZXVubG9hZCIsIl9iZWZvcmV1bmxvYWRFdmVudExpc3RlbmVyIiwidHJhbnNwb3J0IiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiX29mZmxpbmVFdmVudExpc3RlbmVyIiwiX29uQ2xvc2UiLCJfY29va2llSmFyIiwiX29wZW4iLCJjcmVhdGVUcmFuc3BvcnQiLCJFSU8iLCJpZCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNldFRyYW5zcG9ydCIsIl9vbkRyYWluIiwiX29uUGFja2V0IiwiZmx1c2giLCJvbkhhbmRzaGFrZSIsIkpTT04iLCJfc2VuZFBhY2tldCIsIl9yZXNldFBpbmdUaW1lb3V0IiwiY29kZSIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwibWF4UGF5bG9hZCIsIl9waW5nVGltZW91dFRpbWVyIiwiZGVsYXkiLCJ1cGdyYWRpbmciLCJfZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwiX2hhc1BpbmdFeHBpcmVkIiwiaGFzRXhwaXJlZCIsIm1zZyIsIm9wdGlvbnMiLCJjb21wcmVzcyIsImNsZWFudXBBbmRDbG9zZSIsIm9mZiIsIndhaXRGb3JVcGdyYWRlIiwidHJ5QWxsVHJhbnNwb3J0cyIsInNoaWZ0IiwiX3VwZ3JhZGVzIiwiX3Byb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwiY2xlYW51cCIsImZyZWV6ZVRyYW5zcG9ydCIsImVycm9yIiwib25UcmFuc3BvcnRDbG9zZSIsIm9udXBncmFkZSIsInRvIiwicmVtb3ZlTGlzdGVuZXIiLCJfZmlsdGVyVXBncmFkZXMiLCJ1cGdyYWRlcyIsImZpbHRlcmVkVXBncmFkZXMiLCJvIiwibWFwIiwiZmlsdGVyIiwiX2ZldGNoIiwicmVzIiwib2siLCJ0ZXh0IiwiaXNQb3N0IiwiSGVhZGVycyIsInNldCIsImFwcGVuZENvb2tpZXMiLCJmZXRjaCIsImJvZHkiLCJjcmVkZW50aWFscyIsImdldFNl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SixLQUFBLENBQU0sS0FBS3RPLEdBQUEsQ0FBSSxHQUFHO01BQ3JCa0IsTUFBQSxFQUFRZ04sTUFBQSxHQUFTLFNBQVM7TUFDMUJLLElBQUEsRUFBTUwsTUFBQSxHQUFTcFEsSUFBQSxHQUFPO01BQ3RCNkcsT0FBQTtNQUNBNkosV0FBQSxFQUFhLEtBQUtyVSxJQUFBLENBQUtvSSxlQUFBLEdBQWtCLFlBQVk7SUFDekQsQ0FBQyxFQUFFdkosSUFBQSxDQUFNK1UsR0FBQSxJQUFRO01BQ2IsSUFBSXBMLEdBQUE7TUFFSixDQUFDQSxHQUFBLEdBQUssS0FBSzdGLE1BQUEsQ0FBTzZOLFVBQUEsTUFBZ0IsUUFBUWhJLEdBQUEsS0FBTyxTQUFTLFNBQVNBLEdBQUEsQ0FBR0MsWUFBQSxDQUFhbUwsR0FBQSxDQUFJcEosT0FBQSxDQUFROEosWUFBQSxDQUFhLENBQUM7TUFDN0csT0FBT1YsR0FBQTtJQUNYLENBQUM7RUFDTDtBQUNKOzs7QUNwRE8sSUFBTXhWLFNBQUEsR0FBV1osTUFBQSxDQUFPVyxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==