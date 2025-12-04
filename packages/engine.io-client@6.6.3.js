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
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
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
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
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
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
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
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
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
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
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
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
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
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
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
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class _Request extends import_component_emitter2.Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
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
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
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
          (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
          // @ts-ignore
          xhr.getResponseHeader("set-cookie"));
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
      this._index = _Request.requestsCount++;
      _Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err) {
    this.emitReserved("error", err, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
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
      delete _Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
  }
  /**
   * Aborts the request.
   *
   * @package
   */
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
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
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
  /**
   * Generates uri for connection.
   *
   * @private
   */
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
var SocketWithoutUpgrade = class _SocketWithoutUpgrade extends import_component_emitter3.Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
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
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
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
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const transportName = this.opts.rememberUpgrade && _SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", reason => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    _SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
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
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
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
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
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
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
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
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
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
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
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
  /**
   * Closes the connection.
   */
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
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err) {
    _SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err);
    this._onClose("transport error", err);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
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
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
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
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNi4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3BhcnNlcXMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJ0cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL3BhcnNldXJpLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmctZmV0Y2guanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX2NsaWVudF82XzZfM19leHBvcnRzIiwiX19leHBvcnQiLCJGZXRjaCIsIk5vZGVXZWJTb2NrZXQiLCJXUyIsIk5vZGVYSFIiLCJYSFIiLCJTb2NrZXQiLCJTb2NrZXRXaXRoVXBncmFkZSIsIlNvY2tldFdpdGhvdXRVcGdyYWRlIiwiVHJhbnNwb3J0IiwiVHJhbnNwb3J0RXJyb3IiLCJXZWJTb2NrZXQiLCJXZWJUcmFuc3BvcnQiLCJXVCIsImluc3RhbGxUaW1lckZ1bmN0aW9ucyIsIm5leHRUaWNrIiwicGFyc2UiLCJwcm90b2NvbCIsInByb3RvY29sMiIsInRyYW5zcG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaXNQcm9taXNlQXZhaWxhYmxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYiIsInRoZW4iLCJzZXRUaW1lb3V0Rm4iLCJnbG9iYWxUaGlzU2hpbSIsInNlbGYiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsImRlZmF1bHRCaW5hcnlUeXBlIiwiY3JlYXRlQ29va2llSmFyIiwicGljayIsIm9iaiIsImF0dHIiLCJyZWR1Y2UiLCJhY2MiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJOQVRJVkVfU0VUX1RJTUVPVVQiLCJzZXRUaW1lb3V0IiwiTkFUSVZFX0NMRUFSX1RJTUVPVVQiLCJjbGVhclRpbWVvdXQiLCJvcHRzIiwidXNlTmF0aXZlVGltZXJzIiwiYmluZCIsImNsZWFyVGltZW91dEZuIiwiQkFTRTY0X09WRVJIRUFEIiwiYnl0ZUxlbmd0aCIsInV0ZjhMZW5ndGgiLCJNYXRoIiwiY2VpbCIsInNpemUiLCJzdHIiLCJjIiwibGVuZ3RoIiwiaSIsImwiLCJjaGFyQ29kZUF0IiwicmFuZG9tU3RyaW5nIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwicmFuZG9tIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlIiwicXMiLCJxcnkiLCJwYWlycyIsInNwbGl0IiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiY29udGV4dCIsInR5cGUiLCJFbWl0dGVyIiwid3JpdGFibGUiLCJxdWVyeSIsInNvY2tldCIsInN1cHBvcnRzQmluYXJ5IiwiZm9yY2VCYXNlNjQiLCJvbkVycm9yIiwiZW1pdFJlc2VydmVkIiwib3BlbiIsInJlYWR5U3RhdGUiLCJkb09wZW4iLCJjbG9zZSIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsInBhY2tldHMiLCJ3cml0ZSIsIm9uT3BlbiIsIm9uRGF0YSIsImRhdGEiLCJwYWNrZXQiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwib25QYWNrZXQiLCJkZXRhaWxzIiwicGF1c2UiLCJvblBhdXNlIiwiY3JlYXRlVXJpIiwic2NoZW1hIiwiX2hvc3RuYW1lIiwiX3BvcnQiLCJwYXRoIiwiX3F1ZXJ5IiwiaG9zdG5hbWUiLCJpbmRleE9mIiwicG9ydCIsInNlY3VyZSIsIk51bWJlciIsImVuY29kZWRRdWVyeSIsImltcG9ydF9lbmdpbmUyIiwiUG9sbGluZyIsImFyZ3VtZW50cyIsIl9wb2xsaW5nIiwibmFtZSIsIl9wb2xsIiwidG90YWwiLCJvbmNlIiwiZG9Qb2xsIiwiY2FsbGJhY2siLCJkZWNvZGVQYXlsb2FkIiwiZm9yRWFjaCIsImVuY29kZVBheWxvYWQiLCJkb1dyaXRlIiwidXJpIiwidGltZXN0YW1wUmVxdWVzdHMiLCJ0aW1lc3RhbXBQYXJhbSIsInNpZCIsImI2NCIsInZhbHVlIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIiLCJoYXNDT1JTIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsImVtcHR5IiwiQmFzZVhIUiIsImxvY2F0aW9uIiwiaXNTU0wiLCJ4ZCIsImZuIiwicmVxIiwicmVxdWVzdCIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsIlJlcXVlc3QiLCJfUmVxdWVzdCIsImNyZWF0ZVJlcXVlc3QiLCJfb3B0cyIsIl9tZXRob2QiLCJfdXJpIiwiX2RhdGEiLCJfY3JlYXRlIiwiX2EiLCJ4ZG9tYWluIiwieGhyIiwiX3hociIsImV4dHJhSGVhZGVycyIsInNldERpc2FibGVIZWFkZXJDaGVjayIsInNldFJlcXVlc3RIZWFkZXIiLCJlIiwiY29va2llSmFyIiwiYWRkQ29va2llcyIsIndpdGhDcmVkZW50aWFscyIsInJlcXVlc3RUaW1lb3V0IiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9hMiIsInBhcnNlQ29va2llcyIsImdldFJlc3BvbnNlSGVhZGVyIiwic3RhdHVzIiwiX29uTG9hZCIsIl9vbkVycm9yIiwiZG9jdW1lbnQiLCJfaW5kZXgiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJfY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJoYXNYSFIyIiwibmV3UmVxdWVzdCIsInJlc3BvbnNlVHlwZSIsIk9iamVjdCIsImFzc2lnbiIsImNvbmNhdCIsImpvaW4iLCJpbXBvcnRfZW5naW5lMyIsImlzUmVhY3ROYXRpdmUiLCJuYXZpZ2F0b3IiLCJwcm9kdWN0IiwidG9Mb3dlckNhc2UiLCJCYXNlV1MiLCJwcm90b2NvbHMiLCJoZWFkZXJzIiwid3MiLCJjcmVhdGVTb2NrZXQiLCJhZGRFdmVudExpc3RlbmVycyIsIm9ub3BlbiIsImF1dG9VbnJlZiIsIl9zb2NrZXQiLCJ1bnJlZiIsIm9uY2xvc2UiLCJjbG9zZUV2ZW50Iiwib25tZXNzYWdlIiwiZXYiLCJvbmVycm9yIiwibGFzdFBhY2tldCIsImVuY29kZVBhY2tldCIsIldlYlNvY2tldEN0b3IiLCJNb3pXZWJTb2NrZXQiLCJfcGFja2V0IiwiaW1wb3J0X2VuZ2luZTQiLCJfdHJhbnNwb3J0IiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlZCIsImNhdGNoIiwicmVhZHkiLCJjcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtIiwic3RyZWFtIiwiZGVjb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldERlY29kZXJTdHJlYW0iLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVhZGVyIiwicmVhZGFibGUiLCJwaXBlVGhyb3VnaCIsImdldFJlYWRlciIsImVuY29kZXJTdHJlYW0iLCJjcmVhdGVQYWNrZXRFbmNvZGVyU3RyZWFtIiwicGlwZVRvIiwiX3dyaXRlciIsImdldFdyaXRlciIsInJlYWQiLCJkb25lIiwidmFsdWUyIiwid2Vic29ja2V0Iiwid2VidHJhbnNwb3J0IiwicG9sbGluZyIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwicmVwbGFjZSIsIm0iLCJleGVjIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJwYXRoTmFtZXMiLCJxdWVyeUtleSIsInJlZ3giLCJuYW1lcyIsInNsaWNlIiwic3BsaWNlIiwiJDAiLCIkMSIsIiQyIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMyIsImltcG9ydF9lbmdpbmU1Iiwid2l0aEV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk9GRkxJTkVfRVZFTlRfTElTVEVORVJTIiwibGlzdGVuZXIiLCJfU29ja2V0V2l0aG91dFVwZ3JhZGUiLCJ3cml0ZUJ1ZmZlciIsIl9wcmV2QnVmZmVyTGVuIiwiX3BpbmdJbnRlcnZhbCIsIl9waW5nVGltZW91dCIsIl9tYXhQYXlsb2FkIiwiX3BpbmdUaW1lb3V0VGltZSIsIkluZmluaXR5IiwicGFyc2VkVXJpIiwiX3RyYW5zcG9ydHNCeU5hbWUiLCJ0IiwidHJhbnNwb3J0TmFtZSIsInByb3RvdHlwZSIsInB1c2giLCJhZ2VudCIsInVwZ3JhZGUiLCJyZW1lbWJlclVwZ3JhZGUiLCJhZGRUcmFpbGluZ1NsYXNoIiwicmVqZWN0VW5hdXRob3JpemVkIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiX2JlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc3BvcnQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJfb2ZmbGluZUV2ZW50TGlzdGVuZXIiLCJfb25DbG9zZSIsIl9jb29raWVKYXIiLCJfb3BlbiIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsImlkIiwicHJpb3JXZWJzb2NrZXRTdWNjZXNzIiwic2V0VHJhbnNwb3J0IiwiX29uRHJhaW4iLCJfb25QYWNrZXQiLCJmbHVzaCIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsIl9zZW5kUGFja2V0IiwiX3Jlc2V0UGluZ1RpbWVvdXQiLCJjb2RlIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJtYXhQYXlsb2FkIiwiX3BpbmdUaW1lb3V0VGltZXIiLCJkZWxheSIsInVwZ3JhZGluZyIsIl9nZXRXcml0YWJsZVBhY2tldHMiLCJzaG91bGRDaGVja1BheWxvYWRTaXplIiwicGF5bG9hZFNpemUiLCJfaGFzUGluZ0V4cGlyZWQiLCJoYXNFeHBpcmVkIiwibXNnIiwib3B0aW9ucyIsImNvbXByZXNzIiwiY2xlYW51cEFuZENsb3NlIiwib2ZmIiwid2FpdEZvclVwZ3JhZGUiLCJ0cnlBbGxUcmFuc3BvcnRzIiwic2hpZnQiLCJfdXBncmFkZXMiLCJfcHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJjbGVhbnVwIiwiZnJlZXplVHJhbnNwb3J0IiwiZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJyZW1vdmVMaXN0ZW5lciIsIl9maWx0ZXJVcGdyYWRlcyIsInVwZ3JhZGVzIiwiZmlsdGVyZWRVcGdyYWRlcyIsIm8iLCJtYXAiLCJmaWx0ZXIiLCJfZmV0Y2giLCJyZXMiLCJvayIsInRleHQiLCJpc1Bvc3QiLCJIZWFkZXJzIiwic2V0IiwiYXBwZW5kQ29va2llcyIs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UTtNQUNmLElBQUksQ0FBQ0EsR0FBQSxDQUFJQyxFQUFBLEVBQUk7UUFDVCxPQUFPLEtBQUtqUixPQUFBLENBQVEscUJBQXFCZ1IsR0FBQSxDQUFJbEwsTUFBQSxFQUFRa0wsR0FBRztNQUM1RDtNQUNBdE8sUUFBQSxDQUFTO0lBQ2IsQ0FBQyxFQUNJdUcsS0FBQSxDQUFPM0YsR0FBQSxJQUFRO01BQ2hCLEtBQUt0RCxPQUFBLENBQVEscUJBQXFCc0QsR0FBRztJQUN6QyxDQUFDO0VBQ0w7RUFDQXlOLE9BQU9sUSxJQUFBLEVBQU07SUFDVCxJQUFJZ0UsRUFBQTtJQUNKLE1BQU1zTSxNQUFBLEdBQVN0USxJQUFBLEtBQVM7SUFDeEIsTUFBTThHLE9BQUEsR0FBVSxJQUFJeUosT0FBQSxDQUFRLEtBQUtsVSxJQUFBLENBQUsrSCxZQUFZO0lBQ2xELElBQUlrTSxNQUFBLEVBQVE7TUFDUnhKLE9BQUEsQ0FBUTBKLEdBQUEsQ0FBSSxnQkFBZ0IsMEJBQTBCO0lBQzFEO0lBQ0EsQ0FBQ3hNLEVBQUEsR0FBSyxLQUFLaEYsTUFBQSxDQUFPK04sVUFBQSxNQUFnQixRQUFRL0ksRUFBQSxLQUFPLFNBQVMsU0FBU0EsRUFBQSxDQUFHeU0sYUFBQSxDQUFjM0osT0FBTztJQUMzRixPQUFPNEosS0FBQSxDQUFNLEtBQUt4TyxHQUFBLENBQUksR0FBRztNQUNyQmtCLE1BQUEsRUFBUWtOLE1BQUEsR0FBUyxTQUFTO01BQzFCSyxJQUFBLEVBQU1MLE1BQUEsR0FBU3RRLElBQUEsR0FBTztNQUN0QjhHLE9BQUE7TUFDQThKLFdBQUEsRUFBYSxLQUFLdlUsSUFBQSxDQUFLcUksZUFBQSxHQUFrQixZQUFZO0lBQ3pELENBQUMsRUFBRXhKLElBQUEsQ0FBTWlWLEdBQUEsSUFBUTtNQUNiLElBQUlyTCxHQUFBO01BRUosQ0FBQ0EsR0FBQSxHQUFLLEtBQUs5RixNQUFBLENBQU8rTixVQUFBLE1BQWdCLFFBQVFqSSxHQUFBLEtBQU8sU0FBUyxTQUFTQSxHQUFBLENBQUdDLFlBQUEsQ0FBYW9MLEdBQUEsQ0FBSXJKLE9BQUEsQ0FBUStKLFlBQUEsQ0FBYSxDQUFDO01BQzdHLE9BQU9WLEdBQUE7SUFDWCxDQUFDO0VBQ0w7QUFDSjs7O0FDcERPLElBQU0xVixTQUFBLEdBQVdaLE1BQUEsQ0FBT1csUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=