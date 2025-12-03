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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1jbGllbnQuNi42LjMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vZ2xvYmFscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy9wb2xsaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvaGFzLWNvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy9wb2xsaW5nLXhoci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnRyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMvcG9sbGluZy1mZXRjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJlbmdpbmVfaW9fY2xpZW50XzZfNl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZldGNoIiwiTm9kZVdlYlNvY2tldCIsIldTIiwiTm9kZVhIUiIsIlhIUiIsIlNvY2tldCIsIlNvY2tldFdpdGhVcGdyYWRlIiwiU29ja2V0V2l0aG91dFVwZ3JhZGUiLCJUcmFuc3BvcnQiLCJUcmFuc3BvcnRFcnJvciIsIldlYlNvY2tldCIsIldlYlRyYW5zcG9ydCIsIldUIiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwicHJvdG9jb2wyIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsInNldFRpbWVvdXRGbiIsImdsb2JhbFRoaXNTaGltIiwic2VsZiIsIndpbmRvdyIsIkZ1bmN0aW9uIiwiZGVmYXVsdEJpbmFyeVR5cGUiLCJjcmVhdGVDb29raWVKYXIiLCJwaWNrIiwib2JqIiwiYXR0ciIsInJlZHVjZSIsImFjYyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIk5BVElWRV9TRVRfVElNRU9VVCIsInNldFRpbWVvdXQiLCJOQVRJVkVfQ0xFQVJfVElNRU9VVCIsImNsZWFyVGltZW91dCIsIm9wdHMiLCJ1c2VOYXRpdmVUaW1lcnMiLCJiaW5kIiwiY2xlYXJUaW1lb3V0Rm4iLCJCQVNFNjRfT1ZFUkhFQUQiLCJieXRlTGVuZ3RoIiwidXRmOExlbmd0aCIsIk1hdGgiLCJjZWlsIiwic2l6ZSIsInN0ciIsImMiLCJsZW5ndGgiLCJpIiwibCIsImNoYXJDb2RlQXQiLCJyYW5kb21TdHJpbmciLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJyYW5kb20iLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWNvZGUiLCJxcyIsInFyeSIsInBhaXJzIiwic3BsaXQiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaW1wb3J0X2VuZ2luZSIsInJlcXVpcmUiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0IiwidHlwZSIsIkVtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwic3VwcG9ydHNCaW5hcnkiLCJmb3JjZUJhc2U2NCIsIm9uRXJyb3IiLCJlbWl0UmVzZXJ2ZWQiLCJvcGVuIiwicmVhZHlTdGF0ZSIsImRvT3BlbiIsImNsb3NlIiwiZG9DbG9zZSIsIm9uQ2xvc2UiLCJzZW5kIiwicGFja2V0cyIsIndyaXRlIiwib25PcGVuIiwib25EYXRhIiwiZGF0YSIsInBhY2tldCIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJvblBhY2tldCIsImRldGFpbHMiLCJwYXVzZSIsIm9uUGF1c2UiLCJjcmVhdGVVcmkiLCJzY2hlbWEiLCJfaG9zdG5hbWUiLCJfcG9ydCIsInBhdGgiLCJfcXVlcnkiLCJob3N0bmFtZSIsImluZGV4T2YiLCJwb3J0Iiwic2VjdXJlIiwiTnVtYmVyIiwiZW5jb2RlZFF1ZXJ5IiwiaW1wb3J0X2VuZ2luZTIiLCJQb2xsaW5nIiwiYXJndW1lbnRzIiwiX3BvbGxpbmciLCJuYW1lIiwiX3BvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwidmFsdWUiLCJYTUxIdHRwUmVxdWVzdCIsImVyciIsImhhc0NPUlMiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiZW1wdHkiLCJCYXNlWEhSIiwibG9jYXRpb24iLCJpc1NTTCIsInhkIiwiZm4iLCJyZXEiLCJyZXF1ZXN0IiwibWV0aG9kIiwib24iLCJ4aHJTdGF0dXMiLCJwb2xsWGhyIiwiUmVxdWVzdCIsIl9SZXF1ZXN0IiwiY3JlYXRlUmVxdWVzdCIsIl9vcHRzIiwiX21ldGhvZCIsIl91cmkiLCJfZGF0YSIsIl9jcmVhdGUiLCJfYSIsInhkb21haW4iLCJ4aHIiLCJfeGhyIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImUiLCJjb29raWVKYXIiLCJhZGRDb29raWVzIiwid2l0aENyZWRlbnRpYWxzIiwicmVxdWVzdFRpbWVvdXQiLCJ0aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiX2EyIiwicGFyc2VDb29raWVzIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJzdGF0dXMiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJkb2N1bWVudCIsIl9pbmRleCIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsIl9jbGVhbnVwIiwiZnJvbUVycm9yIiwiYWJvcnQiLCJyZXNwb25zZVRleHQiLCJhdHRhY2hFdmVudCIsInVubG9hZEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGVybWluYXRpb25FdmVudCIsImhhc1hIUjIiLCJuZXdSZXF1ZXN0IiwicmVzcG9uc2VUeXBlIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uY2F0Iiwiam9pbiIsImltcG9ydF9lbmdpbmUzIiwiaXNSZWFjdE5hdGl2ZSIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsIkJhc2VXUyIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImNyZWF0ZVNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0IiwiV2ViU29ja2V0Q3RvciIsIk1veldlYlNvY2tldCIsIl9wYWNrZXQiLCJpbXBvcnRfZW5naW5lNCIsIl90cmFuc3BvcnQiLCJ0cmFuc3BvcnRPcHRpb25zIiwiY2xvc2VkIiwiY2F0Y2giLCJyZWFkeSIsImNyZWF0ZUJpZGlyZWN0aW9uYWxTdHJlYW0iLCJzdHJlYW0iLCJkZWNvZGVyU3RyZWFtIiwiY3JlYXRlUGFja2V0RGVjb2RlclN0cmVhbSIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZWFkZXIiLCJyZWFkYWJsZSIsInBpcGVUaHJvdWdoIiwiZ2V0UmVhZGVyIiwiZW5jb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldEVuY29kZXJTdHJlYW0iLCJwaXBlVG8iLCJfd3JpdGVyIiwiZ2V0V3JpdGVyIiwicmVhZCIsImRvbmUiLCJ2YWx1ZTIiLCJ3ZWJzb2NrZXQiLCJ3ZWJ0cmFuc3BvcnQiLCJwb2xsaW5nIiwicmUiLCJwYXJ0cyIsInNyYyIsImIiLCJyZXBsYWNlIiwibSIsImV4ZWMiLCJzb3VyY2UiLCJob3N0IiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIm5hbWVzIiwic2xpY2UiLCJzcGxpY2UiLCIkMCIsIiQxIiwiJDIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIzIiwiaW1wb3J0X2VuZ2luZTUiLCJ3aXRoRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiT0ZGTElORV9FVkVOVF9MSVNURU5FUlMiLCJsaXN0ZW5lciIsIl9Tb2NrZXRXaXRob3V0VXBncmFkZSIsIndyaXRlQnVmZmVyIiwiX3ByZXZCdWZmZXJMZW4iLCJfcGluZ0ludGVydmFsIiwiX3BpbmdUaW1lb3V0IiwiX21heFBheWxvYWQiLCJfcGluZ1RpbWVvdXRUaW1lIiwiSW5maW5pdHkiLCJwYXJzZWRVcmkiLCJfdHJhbnNwb3J0c0J5TmFtZSIsInQiLCJ0cmFuc3BvcnROYW1lIiwicHJvdG90eXBlIiwicHVzaCIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJwZXJNZXNzYWdlRGVmbGF0ZSIsInRocmVzaG9sZCIsImNsb3NlT25CZWZvcmV1bmxvYWQiLCJfYmVmb3JldW5sb2FkRXZlbnRMaXN0ZW5lciIsInRyYW5zcG9ydCIsInJlbW92ZUFsbExpc3RlbmVycyIsIl9vZmZsaW5lRXZlbnRMaXN0ZW5lciIsIl9vbkNsb3NlIiwiX2Nvb2tpZUphciIsIl9vcGVuIiwiY3JlYXRlVHJhbnNwb3J0IiwiRUlPIiwiaWQiLCJwcmlvcldlYnNvY2tldFN1Y2Nlc3MiLCJzZXRUcmFuc3BvcnQiLCJfb25EcmFpbiIsIl9vblBhY2tldCIsImZsdXNoIiwib25IYW5kc2hha2UiLCJKU09OIiwiX3NlbmRQYWNrZXQiLCJfcmVzZXRQaW5nVGltZW91dCIsImNvZGUiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsIm1heFBheWxvYWQiLCJfcGluZ1RpbWVvdXRUaW1lciIsImRlbGF5IiwidXBncmFkaW5nIiwiX2dldFdyaXRhYmxlUGFja2V0cyIsInNob3VsZENoZWNrUGF5bG9hZFNpemUiLCJwYXlsb2FkU2l6ZSIsIl9oYXNQaW5nRXhwaXJlZCIsImhhc0V4cGlyZWQiLCJtc2ciLCJvcHRpb25zIiwiY29tcHJlc3MiLCJjbGVhbnVwQW5kQ2xvc2UiLCJvZmYiLCJ3YWl0Rm9yVXBncmFkZSIsInRyeUFsbFRyYW5zcG9ydHMiLCJzaGlmdCIsIl91cGdyYWRlcyIsIl9wcm9iZSIsImZhaWxlZCIsIm9uVHJhbnNwb3J0T3BlbiIsImNsZWFudXAiLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwiX2ZpbHRlclVwZ3JhZGVzIiwidXBncmFkZXMiLCJmaWx0ZXJlZFVwZ3JhZGVzIiwibyIsIm1hcCIsImZpbHRlciIsIl9mZXRjaCIsInJlcyIsIm9rIiwidGV4dCIsImlzUG9zdCIsIkhlYWRlcnMiLCJzZXQiLCJhcHBlbmRDb29r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QSxJQUFRO01BQ2YsSUFBSSxDQUFDQSxHQUFBLENBQUlDLEVBQUEsRUFBSTtRQUNULE9BQU8sS0FBS2pSLE9BQUEsQ0FBUSxxQkFBcUJnUixHQUFBLENBQUlsTCxNQUFBLEVBQVFrTCxHQUFHO01BQzVEO01BQ0F0TyxRQUFBLENBQVM7SUFDYixDQUFDLEVBQ0l1RyxLQUFBLENBQU8zRixHQUFBLElBQVE7TUFDaEIsS0FBS3RELE9BQUEsQ0FBUSxxQkFBcUJzRCxHQUFHO0lBQ3pDLENBQUM7RUFDTDtFQUNBeU4sT0FBT2xRLElBQUEsRUFBTTtJQUNULElBQUlnRSxFQUFBO0lBQ0osTUFBTXNNLE1BQUEsR0FBU3RRLElBQUEsS0FBUztJQUN4QixNQUFNOEcsT0FBQSxHQUFVLElBQUl5SixPQUFBLENBQVEsS0FBS2xVLElBQUEsQ0FBSytILFlBQVk7SUFDbEQsSUFBSWtNLE1BQUEsRUFBUTtNQUNSeEosT0FBQSxDQUFRMEosR0FBQSxDQUFJLGdCQUFnQiwwQkFBMEI7SUFDMUQ7SUFDQSxDQUFDeE0sRUFBQSxHQUFLLEtBQUtoRixNQUFBLENBQU8rTixVQUFBLE1BQWdCLFFBQVEvSSxFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUd5TSxhQUFBLENBQWMzSixPQUFPO0lBQzNGLE9BQU80SixLQUFBLENBQU0sS0FBS3hPLEdBQUEsQ0FBSSxHQUFHO01BQ3JCa0IsTUFBQSxFQUFRa04sTUFBQSxHQUFTLFNBQVM7TUFDMUJLLElBQUEsRUFBTUwsTUFBQSxHQUFTdFEsSUFBQSxHQUFPO01BQ3RCOEcsT0FBQTtNQUNBOEosV0FBQSxFQUFhLEtBQUt2VSxJQUFBLENBQUtxSSxlQUFBLEdBQWtCLFlBQVk7SUFDekQsQ0FBQyxFQUFFeEosSUFBQSxDQUFNaVYsR0FBQSxJQUFRO01BQ2IsSUFBSXJMLEdBQUE7TUFFSixDQUFDQSxHQUFBLEdBQUssS0FBSzlGLE1BQUEsQ0FBTytOLFVBQUEsTUFBZ0IsUUFBUWpJLEdBQUEsS0FBTyxTQUFTLFNBQVNBLEdBQUEsQ0FBR0MsWUFBQSxDQUFhb0wsR0FBQSxDQUFJckosT0FBQSxDQUFRK0osWUFBQSxDQUFhLENBQUM7TUFDN0csT0FBT1YsR0FBQTtJQUNYLENBQUM7RUFDTDtBQUNKOzs7QUNwRE8sSUFBTTFWLFNBQUEsR0FBV1osTUFBQSxDQUFPVyxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==