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

// .beyond/uimport/temp/engine.io-client.6.6.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi42LjMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnRyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy1mZXRjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJlbmdpbmVfaW9fY2xpZW50XzZfNl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZldGNoIiwiTm9kZVdlYlNvY2tldCIsIldTIiwiTm9kZVhIUiIsIlhIUiIsIlNvY2tldCIsIlNvY2tldFdpdGhVcGdyYWRlIiwiU29ja2V0V2l0aG91dFVwZ3JhZGUiLCJUcmFuc3BvcnQiLCJUcmFuc3BvcnRFcnJvciIsIldlYlNvY2tldCIsIldlYlRyYW5zcG9ydCIsIldUIiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwicHJvdG9jb2wyIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsInNldFRpbWVvdXRGbiIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJjcmVhdGVDb29raWVKYXIiLCJwaWNrIiwib2JqIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIk5BVElWRV9TRVRfVElNRU9VVCIsInNldFRpbWVvdXQiLCJOQVRJVkVfQ0xFQVJfVElNRU9VVCIsImNsZWFyVGltZW91dCIsIm9wdHMiLCJ1c2VOYXRpdmVUaW1lcnMiLCJiaW5kIiwiY2xlYXJUaW1lb3V0Rm4iLCJCQVNFNjRfT1ZFUkhFQUQiLCJieXRlTGVuZ3RoIiwidXRmOExlbmd0aCIsIk1hdGgiLCJjZWlsIiwic2l6ZSIsInN0ciIsImMiLCJsZW5ndGgiLCJpIiwibCIsImNoYXJDb2RlQXQiLCJyYW5kb21TdHJpbmciLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJyYW5kb20iLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJxcyIsInFyeSIsInBhaXJzIiwic3BsaXQiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW1wb3J0X2VuZ2luZSIsInJlcXVpcmUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0IiwidHlwZSIsIkVtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwic3VwcG9ydHNCaW5hcnkiLCJmb3JjZUJhc2U2NCIsIm9uRXJyb3IiLCJlbWl0UmVzZXJ2ZWQiLCJvcGVuIiwicmVhZHlTdGF0ZSIsImRvT3BlbiIsImNsb3NlIiwiZG9DbG9zZSIsIm9uQ2xvc2UiLCJzZW5kIiwicGFja2V0cyIsIndyaXRlIiwib25PcGVuIiwib25EYXRhIiwiZGF0YSIsInBhY2tldCIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJwYXVzZSIsIm9uUGF1c2UiLCJjcmVhdGVVcmkiLCJzY2hlbWEiLCJfaG9zdG5hbWUiLCJfcG9ydCIsInBhdGgiLCJfcXVlcnkiLCJob3N0bmFtZSIsImluZGV4T2YiLCJwb3J0Iiwic2VjdXJlIiwiTnVtYmVyIiwiZW5jb2RlZFF1ZXJ5IiwiaW1wb3J0X2VuZ2luZTIiLCJQb2xsaW5nIiwiYXJndW1lbnRzIiwiX3BvbGxpbmciLCJuYW1lIiwiX3BvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwidmFsdWUiLCJYTUxIdHRwUmVxdWVzdCIsImVyciIsImhhc0NPUlMiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiZW1wdHkiLCJCYXNlWEhSIiwibG9jYXRpb24iLCJpc1NTTCIsInhkIiwiZm4iLCJyZXEiLCJyZXF1ZXN0IiwibWV0aG9kIiwib24iLCJ4aHJTdGF0dXMiLCJwb2xsWGhyIiwiUmVxdWVzdCIsImNyZWF0ZVJlcXVlc3QiLCJfb3B0cyIsIl9tZXRob2QiLCJfdXJpIiwiX2RhdGEiLCJfY3JlYXRlIiwiX2EiLCJ4ZG9tYWluIiwieGhyIiwiX3hociIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJlIiwiY29va2llSmFyIiwiYWRkQ29va2llcyIsIndpdGhDcmVkZW50aWFscyIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9hMiIsInBhcnNlQ29va2llcyIsImdldFJlc3BvbnNlSGVhZGVyIiwic3RhdHVzIiwiX29uTG9hZCIsIl9vbkVycm9yIiwiZG9jdW1lbnQiLCJfaW5kZXgiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJfY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJoYXNYSFIyIiwibmV3UmVxdWVzdCIsInJlc3BvbnNlVHlwZSIsIk9iamVjdCIsImFzc2lnbiIsImNvbmNhdCIsImpvaW4iLCJpbXBvcnRfZW5naW5lMyIsImlzUmVhY3ROYXRpdmUiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJCYXNlV1MiLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJjcmVhdGVTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsImF1dG9VbnJlZiIsIl9zb2NrZXQiLCJ1bnJlZiIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25tZXNzYWdlIiwiZXYiLCJvbmVycm9yIiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIldlYlNvY2tldEN0b3IiLCJNb3pXZWJTb2NrZXQiLCJfcGFja2V0IiwiaW1wb3J0X2VuZ2luZTQiLCJfdHJhbnNwb3J0IiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlZCIsImNhdGNoIiwicmVhZHkiLCJjcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtIiwic3RyZWFtIiwiZGVjb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldERlY29kZXJTdHJlYW0iLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVhZGVyIiwicmVhZGFibGUiLCJwaXBlVGhyb3VnaCIsImdldFJlYWRlciIsImVuY29kZXJTdHJlYW0iLCJjcmVhdGVQYWNrZXRFbmNvZGVyU3RyZWFtIiwicGlwZVRvIiwiX3dyaXRlciIsImdldFdyaXRlciIsInJlYWQiLCJkb25lIiwidmFsdWUyIiwid2Vic29ja2V0Iiwid2VidHJhbnNwb3J0IiwicG9sbGluZyIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwicmVwbGFjZSIsIm0iLCJleGVjIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCJuYW1lcyIsInNsaWNlIiwic3BsaWNlIiwiJDAiLCIkMSIsIiQyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMyIsImltcG9ydF9lbmdpbmU1Iiwid2l0aEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk9GRkxJTkVfRVZFTlRfTElTVEVORVJTIiwibGlzdGVuZXIiLCJ3cml0ZUJ1ZmZlciIsIl9wcmV2QnVmZmVyTGVuIiwiX3BpbmdJbnRlcnZhbCIsIl9waW5nVGltZW91dCIsIl9tYXhQYXlsb2FkIiwiX3BpbmdUaW1lb3V0VGltZSIsIkluZmluaXR5IiwicGFyc2VkVXJpIiwiX3RyYW5zcG9ydHNCeU5hbWUiLCJ0IiwidHJhbnNwb3J0TmFtZSIsInByb3RvdHlwZSIsInB1c2giLCJhZ2VudCIsInVwZ3JhZGUiLCJyZW1lbWJlclVwZ3JhZGUiLCJhZGRUcmFpbGluZ1NsYXNoIiwicmVqZWN0VW5hdXRob3JpemVkIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiX2JlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc3BvcnQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJfb2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJfb25DbG9zZSIsIl9jb29raWVKYXIiLCJfb3BlbiIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsImlkIiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwic2V0VHJhbnNwb3J0IiwiX29uRHJhaW4iLCJfb25QYWNrZXQiLCJmbHVzaCIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsIl9zZW5kUGFja2V0IiwiX3Jlc2V0UGluZ1RpbWVvdXQiLCJjb2RlIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJtYXhQYXlsb2FkIiwiX3BpbmdUaW1lb3V0VGltZXIiLCJkZWxheSIsInVwZ3JhZGluZyIsIl9nZXRXcml0YWJsZVBhY2tldHMiLCJzaG91bGRDaGVja1BheWxvYWRTaXplIiwicGF5bG9hZFNpemUiLCJfaGFzUGluZ0V4cGlyZWQiLCJoYXNFeHBpcmVkIiwibXNnIiwib3B0aW9ucyIsImNvbXByZXNzIiwiY2xlYW51cEFuZENsb3NlIiwib2ZmIiwid2FpdEZvclVwZ3JhZGUiLCJ0cnlBbGxUcmFuc3BvcnRzIiwic2hpZnQiLCJfdXBncmFkZXMiLCJfcHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJjbGVhbnVwIiwiZnJlZXplVHJhbnNwb3J0IiwiZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJyZW1vdmVMaXN0ZW5lciIsIl9maWx0ZXJVcGdyYWRlcyIsInVwZ3JhZGVzIiwiZmlsdGVyZWRVcGdyYWRlcyIsIm8iLCJtYXAiLCJmaWx0ZXIiLCJfZmV0Y2giLCJyZXMiLCJvayIsInRleHQiLCJpc1Bvc3QiLCJIZWFkZXJzIiwic2V0IiwiYXBwZW5kQ29va2llcyIsImZldGNoIiwiYm9keSIsImNyZWRlbnRpYWxzIiwi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T0FBTzJKLEtBQUEsQ0FBTSxLQUFLdE8sR0FBQSxDQUFJLEdBQUc7TUFDckJrQixNQUFBLEVBQVFnTixNQUFBLEdBQVMsU0FBUztNQUMxQkssSUFBQSxFQUFNTCxNQUFBLEdBQVNwUSxJQUFBLEdBQU87TUFDdEI2RyxPQUFBO01BQ0E2SixXQUFBLEVBQWEsS0FBS3JVLElBQUEsQ0FBS29JLGVBQUEsR0FBa0IsWUFBWTtJQUN6RCxDQUFDLEVBQUV2SixJQUFBLENBQU0rVSxHQUFBLElBQVE7TUFDYixJQUFJcEwsR0FBQTtNQUVKLENBQUNBLEdBQUEsR0FBSyxLQUFLN0YsTUFBQSxDQUFPNk4sVUFBQSxNQUFnQixRQUFRaEksR0FBQSxLQUFPLFNBQVMsU0FBU0EsR0FBQSxDQUFHQyxZQUFBLENBQWFtTCxHQUFBLENBQUlwSixPQUFBLENBQVE4SixZQUFBLENBQWEsQ0FBQztNQUM3RyxPQUFPVixHQUFBO0lBQ1gsQ0FBQztFQUNMO0FBQ0o7OztBQ3BETyxJQUFNeFYsU0FBQSxHQUFXWixNQUFBLENBQU9XLFFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=