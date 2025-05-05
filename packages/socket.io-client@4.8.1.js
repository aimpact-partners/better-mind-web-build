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

// .beyond/uimport/socket.io-client.4.8.1.js
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

// .beyond/uimport/socket.io-client.4.8.1.js
var socket_io_client_4_8_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuOC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRfaW9fY2xpZW50XzRfOF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZldGNoIiwiaW1wb3J0X2VuZ2luZTMiLCJNYW5hZ2VyIiwiTm9kZVdlYlNvY2tldCIsIk5vZGVYSFIiLCJTb2NrZXQiLCJXZWJTb2NrZXQiLCJXZWJUcmFuc3BvcnQiLCJYSFIiLCJjb25uZWN0IiwibG9va3VwIiwiZGVmYXVsdCIsInNvY2tldF9pb19jbGllbnRfNF84XzFfZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJpbXBvcnRfc29ja2V0NCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZW5naW5lIiwicmVxdWlyZSIsInVybCIsInVyaSIsInBhdGgiLCJsb2MiLCJvYmoiLCJsb2NhdGlvbiIsImhvc3QiLCJjaGFyQXQiLCJ0ZXN0IiwicGFyc2UiLCJwb3J0IiwiaXB2NiIsImluZGV4T2YiLCJpZCIsImhyZWYiLCJvbiIsImV2IiwiZm4iLCJzdWJEZXN0cm95Iiwib2ZmIiwiaW1wb3J0X3NvY2tldCIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJuc3AiLCJvcHRzIiwiY29ubmVjdGVkIiwicmVjb3ZlcmVkIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJfcXVldWUiLCJfcXVldWVTZXEiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJhdXRoIiwiX29wdHMiLCJhc3NpZ24iLCJfYXV0b0Nvbm5lY3QiLCJvcGVuIiwiZGlzY29ubmVjdGVkIiwic3ViRXZlbnRzIiwic3VicyIsIm9ub3BlbiIsImJpbmQiLCJvbnBhY2tldCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwiYWN0aXZlIiwiX3JlYWR5U3RhdGUiLCJzZW5kIiwiYXJncyIsInVuc2hpZnQiLCJlbWl0IiwiYXBwbHkiLCJfYSIsIl9iIiwiX2MiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidG9TdHJpbmciLCJyZXRyaWVzIiwiZnJvbVF1ZXVlIiwidm9sYXRpbGUiLCJfYWRkVG9RdWV1ZSIsInBhY2tldCIsInR5cGUiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJkYXRhIiwib3B0aW9ucyIsImNvbXByZXNzIiwibGVuZ3RoIiwiYWNrIiwicG9wIiwiX3JlZ2lzdGVyQWNrQ2FsbGJhY2siLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZW5naW5lIiwidHJhbnNwb3J0Iiwid3JpdGFibGUiLCJpc0Nvbm5lY3RlZCIsIl9oYXNQaW5nRXhwaXJlZCIsImRpc2NhcmRQYWNrZXQiLCJub3RpZnlPdXRnb2luZ0xpc3RlbmVycyIsInB1c2giLCJ0aW1lb3V0IiwiYWNrVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dEZuIiwiaSIsInNwbGljZSIsImNhbGwiLCJjbGVhclRpbWVvdXRGbiIsIndpdGhFcnJvciIsImVtaXRXaXRoQWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcmcxIiwiYXJnMiIsInRyeUNvdW50IiwicGVuZGluZyIsImVyciIsInJlc3BvbnNlQXJncyIsImhhc0Vycm9yIiwic2hpZnQiLCJfZHJhaW5RdWV1ZSIsImZvcmNlIiwiX3BhY2tldCIsIl9zZW5kQ29ubmVjdFBhY2tldCIsIkNPTk5FQ1QiLCJfcGlkIiwicGlkIiwib2Zmc2V0IiwiX2xhc3RPZmZzZXQiLCJlbWl0UmVzZXJ2ZWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsIl9jbGVhckFja3MiLCJrZXlzIiwiZm9yRWFjaCIsImlzQnVmZmVyZWQiLCJzb21lIiwiU3RyaW5nIiwic2FtZU5hbWVzcGFjZSIsInNpZCIsIm9uY29ubmVjdCIsIkJJTkFSWV9FVkVOVCIsIm9uZXZlbnQiLCJBQ0siLCJCSU5BUllfQUNLIiwib25hY2siLCJESVNDT05ORUNUIiwib25kaXNjb25uZWN0IiwiQ09OTkVDVF9FUlJPUiIsImRlc3Ryb3kiLCJtZXNzYWdlIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVycyIsInNsaWNlIiwibGlzdGVuZXIiLCJzZWxmIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiaW1wb3J0X2VuZ2luZTIiLCJwYXJzZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIm5zcHMiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwic2tpcFJlY29ubmVjdCIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9yZWNvbm5lY3Rpb25EZWxheSIsIl9yYW5kb21pemF0aW9uRmFjdG9yIiwiX3JlY29ubmVjdGlvbkRlbGF5TWF4IiwiX3RpbWVvdXQiLCJtYXliZVJlY29ubmVjdE9uT3BlbiIsIl9yZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJzb2NrZXQiLCJvcGVuU3ViRGVzdHJveSIsIm9uRXJyb3IiLCJjbGVhbnVwIiwiZXJyb3JTdWIiLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsImUiLCJuZXh0VGljayIsIl9kZXN0cm95Iiwic29ja2V0MiIsIl9jbG9zZSIsImVuY29kZWRQYWNrZXRzIiwiZW5jb2RlIiwid3JpdGUiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsImNhY2hlIiwicGFyc2VkIiwic291cmNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwicXVlcnkiLCJxdWVyeUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQSxDQUFBRCxLQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FB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QUFNO0VBQ1Y7RUFDQWdDLElBQUEsR0FBT0EsSUFBQSxJQUFRLENBQUM7RUFDaEIsTUFBTTJNLE1BQUEsR0FBUzVPLEdBQUEsQ0FBSUMsR0FBQSxFQUFLZ0MsSUFBQSxDQUFLL0IsSUFBQSxJQUFRLFlBQVk7RUFDakQsTUFBTTJPLE1BQUEsR0FBU0QsTUFBQSxDQUFPQyxNQUFBO0VBQ3RCLE1BQU1oTyxFQUFBLEdBQUsrTixNQUFBLENBQU8vTixFQUFBO0VBQ2xCLE1BQU1YLElBQUEsR0FBTzBPLE1BQUEsQ0FBTzFPLElBQUE7RUFDcEIsTUFBTWtJLGFBQUEsR0FBZ0J1RyxLQUFBLENBQU05TixFQUFBLEtBQU9YLElBQUEsSUFBUXlPLEtBQUEsQ0FBTTlOLEVBQUEsRUFBSTtFQUNyRCxNQUFNaU8sYUFBQSxHQUFnQjdNLElBQUEsQ0FBSzhNLFFBQUEsSUFDdkI5TSxJQUFBLENBQUssMkJBQ0wsVUFBVUEsSUFBQSxDQUFLK00sU0FBQSxJQUNmNUcsYUFBQTtFQUNKLElBQUk1SSxFQUFBO0VBQ0osSUFBSXNQLGFBQUEsRUFBZTtJQUNmdFAsRUFBQSxHQUFLLElBQUlYLE9BQUEsQ0FBUWdRLE1BQUEsRUFBUTVNLElBQUk7RUFDakMsT0FDSztJQUNELElBQUksQ0FBQzBNLEtBQUEsQ0FBTTlOLEVBQUEsR0FBSztNQUNaOE4sS0FBQSxDQUFNOU4sRUFBQSxJQUFNLElBQUloQyxPQUFBLENBQVFnUSxNQUFBLEVBQVE1TSxJQUFJO0lBQ3hDO0lBQ0F6QyxFQUFBLEdBQUttUCxLQUFBLENBQU05TixFQUFBO0VBQ2Y7RUFDQSxJQUFJK04sTUFBQSxDQUFPSyxLQUFBLElBQVMsQ0FBQ2hOLElBQUEsQ0FBS2dOLEtBQUEsRUFBTztJQUM3QmhOLElBQUEsQ0FBS2dOLEtBQUEsR0FBUUwsTUFBQSxDQUFPTSxRQUFBO0VBQ3hCO0VBQ0EsT0FBTzFQLEVBQUEsQ0FBRzZOLE1BQUEsQ0FBT3VCLE1BQUEsQ0FBTzFPLElBQUEsRUFBTStCLElBQUk7QUFDdEM7QUFHQVYsTUFBQSxDQUFPc0IsTUFBQSxDQUFPeEQsTUFBQSxFQUFRO0VBQ2xCUixPQUFBO0VBQ0FHLE1BQUE7RUFDQVEsRUFBQSxFQUFJSCxNQUFBO0VBQ0pELE9BQUEsRUFBU0M7QUFDYixDQUFDOzs7QU56Q0QsSUFBT0UsOEJBQUEsR0FBUUYsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=