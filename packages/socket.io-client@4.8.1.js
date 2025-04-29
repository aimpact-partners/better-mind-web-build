System.register(["engine.io-parser@5.2.3","@socket.io/component-emitter@3.1.2","engine.io-client@6.6.3","socket.io-parser@4.2.4"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.3"],["@socket.io/component-emitter","3.1.2"],["engine.io-client","6.6.3"],["socket.io-client","4.8.1"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.3', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.2', dep), dep => dependencies.set('engine.io-client@6.6.3', dep), dep => dependencies.set('socket.io-parser@4.2.4', dep)],
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

// .beyond/uimport/temp/socket.io-client.4.8.1.js
var socket_io_client_4_8_1_exports = {};
__export(socket_io_client_4_8_1_exports, {
  Fetch: () => import_engine3.Fetch,
  Manager: () => Manager,
  NodeWebSocket: () => import_engine3.NodeWebSocket,
  NodeXHR: () => import_engine3.NodeXHR,
  Socket: () => Socket,
  WebSocket: () => import_engine3.WebSocket,
  WebTransport: () => import_engine3.WebTransport,
  XHR: () => import_engine3.XHR,
  connect: () => lookup,
  default: () => socket_io_client_4_8_1_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_8_1_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.6.3");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.4");
var import_component_emitter = require("@socket.io/component-emitter@3.1.2");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    var _a, _b, _c;
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) {} else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn.withError = true;
    this.acks[id] = fn;
  }
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn.withError = true;
      args.push(fn);
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach(id => {
      const isBuffered = this.sendBuffer.some(packet => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      return;
    }
    delete this.acks[packet.id];
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.6.3");
var parser = __toESM(require("socket.io-parser@4.2.4"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.2");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    if (!v) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const onError = err => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    var _a;
    this.cleanup();
    (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.4");
var import_engine3 = require("engine.io-client@6.6.3");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/temp/socket.io-client.4.8.1.js
var socket_io_client_4_8_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1jbGllbnQuNC44LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vdXJsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2JhY2tvMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2tldF9pb19jbGllbnRfNF84XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRmV0Y2giLCJpbXBvcnRfZW5naW5lMyIsIk1hbmFnZXIiLCJOb2RlV2ViU29ja2V0IiwiTm9kZVhIUiIsIlNvY2tldCIsIldlYlNvY2tldCIsIldlYlRyYW5zcG9ydCIsIlhIUiIsImNvbm5lY3QiLCJsb29rdXAiLCJkZWZhdWx0Iiwic29ja2V0X2lvX2NsaWVudF80XzhfMV9kZWZhdWx0IiwiaW8iLCJwcm90b2NvbCIsImltcG9ydF9zb2NrZXQ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJwYXJzZSIsInBvcnQiLCJpcHY2IiwiaW5kZXhPZiIsImlkIiwiaHJlZiIsIm9uIiwiZXYiLCJmbiIsInN1YkRlc3Ryb3kiLCJvZmYiLCJpbXBvcnRfc29ja2V0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiT2JqZWN0IiwiZnJlZXplIiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIkVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNvdmVyZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsIl9xdWV1ZSIsIl9xdWV1ZVNlcSIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfb3B0cyIsImFzc2lnbiIsIl9hdXRvQ29ubmVjdCIsIm9wZW4iLCJkaXNjb25uZWN0ZWQiLCJzdWJFdmVudHMiLCJzdWJzIiwib25vcGVuIiwiYmluZCIsIm9ucGFja2V0Iiwib25lcnJvciIsIm9uY2xvc2UiLCJhY3RpdmUiLCJfcmVhZHlTdGF0ZSIsInNlbmQiLCJhcmdzIiwidW5zaGlmdCIsImVtaXQiLCJhcHBseSIsIl9hIiwiX2IiLCJfYyIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJ0b1N0cmluZyIsInJldHJpZXMiLCJmcm9tUXVldWUiLCJ2b2xhdGlsZSIsIl9hZGRUb1F1ZXVlIiwicGFja2V0IiwidHlwZSIsIlBhY2tldFR5cGUiLCJFVkVOVCIsImRhdGEiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJsZW5ndGgiLCJhY2siLCJwb3AiLCJfcmVnaXN0ZXJBY2tDYWxsYmFjayIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJlbmdpbmUiLCJ0cmFuc3BvcnQiLCJ3cml0YWJsZSIsImlzQ29ubmVjdGVkIiwiX2hhc1BpbmdFeHBpcmVkIiwiZGlzY2FyZFBhY2tldCIsIm5vdGlmeU91dGdvaW5nTGlzdGVuZXJzIiwicHVzaCIsInRpbWVvdXQiLCJhY2tUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Rm4iLCJpIiwic3BsaWNlIiwiY2FsbCIsImNsZWFyVGltZW91dEZuIiwid2l0aEVycm9yIiwiZW1pdFdpdGhBY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFyZzEiLCJhcmcyIiwidHJ5Q291bnQiLCJwZW5kaW5nIiwiZXJyIiwicmVzcG9uc2VBcmdzIiwiaGFzRXJyb3IiLCJzaGlmdCIsIl9kcmFpblF1ZXVlIiwiZm9yY2UiLCJfcGFja2V0IiwiX3NlbmRDb25uZWN0UGFja2V0IiwiQ09OTkVDVCIsIl9waWQiLCJwaWQiLCJvZmZzZXQiLCJfbGFzdE9mZnNldCIsImVtaXRSZXNlcnZlZCIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiX2NsZWFyQWNrcyIsImtleXMiLCJmb3JFYWNoIiwiaXNCdWZmZXJlZCIsInNvbWUiLCJTdHJpbmciLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiY2xvc2UiLCJvbkFueSIsInByZXBlbmRBbnkiLCJvZmZBbnkiLCJsaXN0ZW5lcnNBbnkiLCJvbkFueU91dGdvaW5nIiwiX2FueU91dGdvaW5nTGlzdGVuZXJzIiwicHJlcGVuZEFueU91dGdvaW5nIiwib2ZmQW55T3V0Z29pbmciLCJsaXN0ZW5lcnNBbnlPdXRnb2luZyIsIkJhY2tvZmYiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicHJvdG90eXBlIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJpbXBvcnRfZW5naW5lMiIsInBhcnNlciIsIl9fdG9FU00iLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwibnNwcyIsImluc3RhbGxUaW1lckZ1bmN0aW9ucyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsImF1dG9Db25uZWN0IiwidiIsImFyZ3VtZW50cyIsIl9yZWNvbm5lY3Rpb24iLCJza2lwUmVjb25uZWN0IiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsInNvY2tldCIsIm9wZW5TdWJEZXN0cm95Iiwib25FcnJvciIsImNsZWFudXAiLCJlcnJvclN1YiIsImF1dG9VbnJlZiIsInVucmVmIiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwiZSIsIm5leHRUaWNrIiwiX2Rlc3Ryb3kiLCJzb2NrZXQyIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBLENBQUFELEtBQUE7RUFBQUUsT0FBQSxFQUFB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QUFBLEdBQU07RUFDVjtFQUNBZ0MsSUFBQSxHQUFPQSxJQUFBLElBQVEsQ0FBQztFQUNoQixNQUFNMk0sTUFBQSxHQUFTNU8sR0FBQSxDQUFJQyxHQUFBLEVBQUtnQyxJQUFBLENBQUsvQixJQUFBLElBQVEsWUFBWTtFQUNqRCxNQUFNMk8sTUFBQSxHQUFTRCxNQUFBLENBQU9DLE1BQUE7RUFDdEIsTUFBTWhPLEVBQUEsR0FBSytOLE1BQUEsQ0FBTy9OLEVBQUE7RUFDbEIsTUFBTVgsSUFBQSxHQUFPME8sTUFBQSxDQUFPMU8sSUFBQTtFQUNwQixNQUFNa0ksYUFBQSxHQUFnQnVHLEtBQUEsQ0FBTTlOLEVBQUEsS0FBT1gsSUFBQSxJQUFReU8sS0FBQSxDQUFNOU4sRUFBQSxFQUFJO0VBQ3JELE1BQU1pTyxhQUFBLEdBQWdCN00sSUFBQSxDQUFLOE0sUUFBQSxJQUN2QjlNLElBQUEsQ0FBSywyQkFDTCxVQUFVQSxJQUFBLENBQUsrTSxTQUFBLElBQ2Y1RyxhQUFBO0VBQ0osSUFBSTVJLEVBQUE7RUFDSixJQUFJc1AsYUFBQSxFQUFlO0lBQ2Z0UCxFQUFBLEdBQUssSUFBSVgsT0FBQSxDQUFRZ1EsTUFBQSxFQUFRNU0sSUFBSTtFQUNqQyxPQUNLO0lBQ0QsSUFBSSxDQUFDME0sS0FBQSxDQUFNOU4sRUFBQSxHQUFLO01BQ1o4TixLQUFBLENBQU05TixFQUFBLElBQU0sSUFBSWhDLE9BQUEsQ0FBUWdRLE1BQUEsRUFBUTVNLElBQUk7SUFDeEM7SUFDQXpDLEVBQUEsR0FBS21QLEtBQUEsQ0FBTTlOLEVBQUE7RUFDZjtFQUNBLElBQUkrTixNQUFBLENBQU9LLEtBQUEsSUFBUyxDQUFDaE4sSUFBQSxDQUFLZ04sS0FBQSxFQUFPO0lBQzdCaE4sSUFBQSxDQUFLZ04sS0FBQSxHQUFRTCxNQUFBLENBQU9NLFFBQUE7RUFDeEI7RUFDQSxPQUFPMVAsRUFBQSxDQUFHNk4sTUFBQSxDQUFPdUIsTUFBQSxDQUFPMU8sSUFBQSxFQUFNK0IsSUFBSTtBQUN0QztBQUdBVixNQUFBLENBQU9zQixNQUFBLENBQU94RCxNQUFBLEVBQVE7RUFDbEJSLE9BQUE7RUFDQUcsTUFBQTtFQUNBUSxFQUFBLEVBQUlILE1BQUE7RUFDSkQsT0FBQSxFQUFTQztBQUNiLENBQUM7OztBTnpDRCxJQUFPRSw4QkFBQSxHQUFRRixNQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9