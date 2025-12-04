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
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  /**
   * `Socket` constructor.
   */
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
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
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
  /**
   * @private
   */
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
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
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
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
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
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
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
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
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
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
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
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
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
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
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
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
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
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
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
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
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
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
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
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
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
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
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
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)),
    // @ts-ignore
    on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err) {
    this.emitReserved("error", err);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
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
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
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
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
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
  /**
   * Attempt a reconnection.
   *
   * @private
   */
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
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuOC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRfaW9fY2xpZW50XzRfOF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZldGNoIiwiaW1wb3J0X2VuZ2luZTMiLCJNYW5hZ2VyIiwiTm9kZVdlYlNvY2tldCIsIk5vZGVYSFIiLCJTb2NrZXQiLCJXZWJTb2NrZXQiLCJXZWJUcmFuc3BvcnQiLCJYSFIiLCJjb25uZWN0IiwibG9va3VwIiwiZGVmYXVsdCIsInNvY2tldF9pb19jbGllbnRfNF84XzFfZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJpbXBvcnRfc29ja2V0NCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZW5naW5lIiwicmVxdWlyZSIsInVybCIsInVyaSIsInBhdGgiLCJsb2MiLCJvYmoiLCJsb2NhdGlvbiIsImhvc3QiLCJjaGFyQXQiLCJ0ZXN0IiwicGFyc2UiLCJwb3J0IiwiaXB2NiIsImluZGV4T2YiLCJpZCIsImhyZWYiLCJvbiIsImV2IiwiZm4iLCJzdWJEZXN0cm95Iiwib2ZmIiwiaW1wb3J0X3NvY2tldCIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJuc3AiLCJvcHRzIiwiY29ubmVjdGVkIiwicmVjb3ZlcmVkIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJfcXVldWUiLCJfcXVldWVTZXEiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJhdXRoIiwiX29wdHMiLCJhc3NpZ24iLCJfYXV0b0Nvbm5lY3QiLCJvcGVuIiwiZGlzY29ubmVjdGVkIiwic3ViRXZlbnRzIiwic3VicyIsIm9ub3BlbiIsImJpbmQiLCJvbnBhY2tldCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwiYWN0aXZlIiwiX3JlYWR5U3RhdGUiLCJzZW5kIiwiYXJncyIsInVuc2hpZnQiLCJlbWl0IiwiYXBwbHkiLCJfYSIsIl9iIiwiX2MiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidG9TdHJpbmciLCJyZXRyaWVzIiwiZnJvbVF1ZXVlIiwidm9sYXRpbGUiLCJfYWRkVG9RdWV1ZSIsInBhY2tldCIsInR5cGUiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJkYXRhIiwib3B0aW9ucyIsImNvbXByZXNzIiwibGVuZ3RoIiwiYWNrIiwicG9wIiwiX3JlZ2lzdGVyQWNrQ2FsbGJhY2siLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZW5naW5lIiwidHJhbnNwb3J0Iiwid3JpdGFibGUiLCJpc0Nvbm5lY3RlZCIsIl9oYXNQaW5nRXhwaXJlZCIsImRpc2NhcmRQYWNrZXQiLCJub3RpZnlPdXRnb2luZ0xpc3RlbmVycyIsInB1c2giLCJ0aW1lb3V0IiwiYWNrVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dEZuIiwiaSIsInNwbGljZSIsImNhbGwiLCJjbGVhclRpbWVvdXRGbiIsIndpdGhFcnJvciIsImVtaXRXaXRoQWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcmcxIiwiYXJnMiIsInRyeUNvdW50IiwicGVuZGluZyIsImVyciIsInJlc3BvbnNlQXJncyIsImhhc0Vycm9yIiwic2hpZnQiLCJfZHJhaW5RdWV1ZSIsImZvcmNlIiwiX3BhY2tldCIsIl9zZW5kQ29ubmVjdFBhY2tldCIsIkNPTk5FQ1QiLCJfcGlkIiwicGlkIiwib2Zmc2V0IiwiX2xhc3RPZmZzZXQiLCJlbWl0UmVzZXJ2ZWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsIl9jbGVhckFja3MiLCJrZXlzIiwiZm9yRWFjaCIsImlzQnVmZmVyZWQiLCJzb21lIiwiU3RyaW5nIiwic2FtZU5hbWVzcGFjZSIsInNpZCIsIm9uY29ubmVjdCIsIkJJTkFSWV9FVkVOVCIsIm9uZXZlbnQiLCJBQ0siLCJCSU5BUllfQUNLIiwib25hY2siLCJESVNDT05ORUNUIiwib25kaXNjb25uZWN0IiwiQ09OTkVDVF9FUlJPUiIsImRlc3Ryb3kiLCJtZXNzYWdlIiwiZW1pdEV2ZW50IiwiX2FueUxpc3RlbmVycyIsImxpc3RlbmVycyIsInNsaWNlIiwibGlzdGVuZXIiLCJzZWxmIiwic2VudCIsImVtaXRCdWZmZXJlZCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiaW1wb3J0X2VuZ2luZTIiLCJwYXJzZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIm5zcHMiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwic2tpcFJlY29ubmVjdCIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9yZWNvbm5lY3Rpb25EZWxheSIsIl9yYW5kb21pemF0aW9uRmFjdG9yIiwiX3JlY29ubmVjdGlvbkRlbGF5TWF4IiwiX3RpbWVvdXQiLCJtYXliZVJlY29ubmVjdE9uT3BlbiIsIl9yZWNvbm5lY3RpbmciLCJyZWNvbm5lY3QiLCJzb2NrZXQiLCJvcGVuU3ViRGVzdHJveSIsIm9uRXJyb3IiLCJjbGVhbnVwIiwiZXJyb3JTdWIiLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsImUiLCJuZXh0VGljayIsIl9kZXN0cm95Iiwic29ja2V0MiIsIl9jbG9zZSIsImVuY29kZWRQYWNrZXRzIiwiZW5jb2RlIiwid3JpdGUiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsImNhY2hlIiwicGFyc2VkIiwic291cmNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwicXVlcnkiLCJxdWVyeUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBLENBQUFELEtBQUE7RUFBQUUsT0FBQSxFQUFB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QUFBO0VBQ0osSUFBSTVJLEVBQUE7RUFDSixJQUFJc1AsYUFBQSxFQUFlO0lBQ2Z0UCxFQUFBLEdBQUssSUFBSVgsT0FBQSxDQUFRZ1EsTUFBQSxFQUFRNU0sSUFBSTtFQUNqQyxPQUNLO0lBQ0QsSUFBSSxDQUFDME0sS0FBQSxDQUFNOU4sRUFBRSxHQUFHO01BQ1o4TixLQUFBLENBQU05TixFQUFFLElBQUksSUFBSWhDLE9BQUEsQ0FBUWdRLE1BQUEsRUFBUTVNLElBQUk7SUFDeEM7SUFDQXpDLEVBQUEsR0FBS21QLEtBQUEsQ0FBTTlOLEVBQUU7RUFDakI7RUFDQSxJQUFJK04sTUFBQSxDQUFPSyxLQUFBLElBQVMsQ0FBQ2hOLElBQUEsQ0FBS2dOLEtBQUEsRUFBTztJQUM3QmhOLElBQUEsQ0FBS2dOLEtBQUEsR0FBUUwsTUFBQSxDQUFPTSxRQUFBO0VBQ3hCO0VBQ0EsT0FBTzFQLEVBQUEsQ0FBRzZOLE1BQUEsQ0FBT3VCLE1BQUEsQ0FBTzFPLElBQUEsRUFBTStCLElBQUk7QUFDdEM7QUFHQVYsTUFBQSxDQUFPc0IsTUFBQSxDQUFPeEQsTUFBQSxFQUFRO0VBQ2xCUixPQUFBO0VBQ0FHLE1BQUE7RUFDQVEsRUFBQSxFQUFJSCxNQUFBO0VBQ0pELE9BQUEsRUFBU0M7QUFDYixDQUFDOzs7QU56Q0QsSUFBT0UsOEJBQUEsR0FBUUYsTUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=