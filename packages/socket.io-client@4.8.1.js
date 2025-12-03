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

// .beyond/uimport/temp/socket.io-client.4.8.1.js
var socket_io_client_4_8_1_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1jbGllbnQuNC44LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vdXJsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2JhY2tvMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2tldF9pb19jbGllbnRfNF84XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRmV0Y2giLCJpbXBvcnRfZW5naW5lMyIsIk1hbmFnZXIiLCJOb2RlV2ViU29ja2V0IiwiTm9kZVhIUiIsIlNvY2tldCIsIldlYlNvY2tldCIsIldlYlRyYW5zcG9ydCIsIlhIUiIsImNvbm5lY3QiLCJsb29rdXAiLCJkZWZhdWx0Iiwic29ja2V0X2lvX2NsaWVudF80XzhfMV9kZWZhdWx0IiwiaW8iLCJwcm90b2NvbCIsImltcG9ydF9zb2NrZXQ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJwYXJzZSIsInBvcnQiLCJpcHY2IiwiaW5kZXhPZiIsImlkIiwiaHJlZiIsIm9uIiwiZXYiLCJmbiIsInN1YkRlc3Ryb3kiLCJvZmYiLCJpbXBvcnRfc29ja2V0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiT2JqZWN0IiwiZnJlZXplIiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIkVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNvdmVyZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsIl9xdWV1ZSIsIl9xdWV1ZVNlcSIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfb3B0cyIsImFzc2lnbiIsIl9hdXRvQ29ubmVjdCIsIm9wZW4iLCJkaXNjb25uZWN0ZWQiLCJzdWJFdmVudHMiLCJzdWJzIiwib25vcGVuIiwiYmluZCIsIm9ucGFja2V0Iiwib25lcnJvciIsIm9uY2xvc2UiLCJhY3RpdmUiLCJfcmVhZHlTdGF0ZSIsInNlbmQiLCJhcmdzIiwidW5zaGlmdCIsImVtaXQiLCJhcHBseSIsIl9hIiwiX2IiLCJfYyIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJ0b1N0cmluZyIsInJldHJpZXMiLCJmcm9tUXVldWUiLCJ2b2xhdGlsZSIsIl9hZGRUb1F1ZXVlIiwicGFja2V0IiwidHlwZSIsIlBhY2tldFR5cGUiLCJFVkVOVCIsImRhdGEiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJsZW5ndGgiLCJhY2siLCJwb3AiLCJfcmVnaXN0ZXJBY2tDYWxsYmFjayIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJlbmdpbmUiLCJ0cmFuc3BvcnQiLCJ3cml0YWJsZSIsImlzQ29ubmVjdGVkIiwiX2hhc1BpbmdFeHBpcmVkIiwiZGlzY2FyZFBhY2tldCIsIm5vdGlmeU91dGdvaW5nTGlzdGVuZXJzIiwicHVzaCIsInRpbWVvdXQiLCJhY2tUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Rm4iLCJpIiwic3BsaWNlIiwiY2FsbCIsImNsZWFyVGltZW91dEZuIiwid2l0aEVycm9yIiwiZW1pdFdpdGhBY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFyZzEiLCJhcmcyIiwidHJ5Q291bnQiLCJwZW5kaW5nIiwiZXJyIiwicmVzcG9uc2VBcmdzIiwiaGFzRXJyb3IiLCJzaGlmdCIsIl9kcmFpblF1ZXVlIiwiZm9yY2UiLCJfcGFja2V0IiwiX3NlbmRDb25uZWN0UGFja2V0IiwiQ09OTkVDVCIsIl9waWQiLCJwaWQiLCJvZmZzZXQiLCJfbGFzdE9mZnNldCIsImVtaXRSZXNlcnZlZCIsInJlYXNvbiIsImRlc2NyaXB0aW9uIiwiX2NsZWFyQWNrcyIsImtleXMiLCJmb3JFYWNoIiwiaXNCdWZmZXJlZCIsInNvbWUiLCJTdHJpbmciLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiY2xvc2UiLCJvbkFueSIsInByZXBlbmRBbnkiLCJvZmZBbnkiLCJsaXN0ZW5lcnNBbnkiLCJvbkFueU91dGdvaW5nIiwiX2FueU91dGdvaW5nTGlzdGVuZXJzIiwicHJlcGVuZEFueU91dGdvaW5nIiwib2ZmQW55T3V0Z29pbmciLCJsaXN0ZW5lcnNBbnlPdXRnb2luZyIsIkJhY2tvZmYiLCJtcyIsIm1pbiIsIm1heCIsImZhY3RvciIsImppdHRlciIsImF0dGVtcHRzIiwicHJvdG90eXBlIiwiZHVyYXRpb24iLCJNYXRoIiwicG93IiwicmFuZCIsInJhbmRvbSIsImRldmlhdGlvbiIsImZsb29yIiwicmVzZXQiLCJzZXRNaW4iLCJzZXRNYXgiLCJzZXRKaXR0ZXIiLCJpbXBvcnRfZW5naW5lMiIsInBhcnNlciIsIl9fdG9FU00iLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwibnNwcyIsImluc3RhbGxUaW1lckZ1bmN0aW9ucyIsInJlY29ubmVjdGlvbiIsInJlY29ubmVjdGlvbkF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJfcGFyc2VyIiwiZW5jb2RlciIsIkVuY29kZXIiLCJkZWNvZGVyIiwiRGVjb2RlciIsImF1dG9Db25uZWN0IiwidiIsImFyZ3VtZW50cyIsIl9yZWNvbm5lY3Rpb24iLCJza2lwUmVjb25uZWN0IiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsInNvY2tldCIsIm9wZW5TdWJEZXN0cm95Iiwib25FcnJvciIsImNsZWFudXAiLCJlcnJvclN1YiIsImF1dG9VbnJlZiIsInVucmVmIiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwiZSIsIm5leHRUaWNrIiwiX2Rlc3Ryb3kiLCJzb2NrZXQyIiwiX2Nsb3NlIiwiZW5jb2RlZFBhY2tldHMiLCJlbmNvZGUiLCJ3cml0ZSIsImRlbGF5Iiwib25yZWNvbm5lY3QiLCJhdHRlbXB0IiwiY2FjaGUiLCJwYXJzZWQiLCJzb3VyY2UiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJxdWVyeSIsInF1ZXJ5S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUEsQ0FBQUQsS0FBQTtFQUFBRSxPQUFB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ZjVHLGFBQUE7RUFDSixJQUFJNUksRUFBQTtFQUNKLElBQUlzUCxhQUFBLEVBQWU7SUFDZnRQLEVBQUEsR0FBSyxJQUFJWCxPQUFBLENBQVFnUSxNQUFBLEVBQVE1TSxJQUFJO0VBQ2pDLE9BQ0s7SUFDRCxJQUFJLENBQUMwTSxLQUFBLENBQU05TixFQUFFLEdBQUc7TUFDWjhOLEtBQUEsQ0FBTTlOLEVBQUUsSUFBSSxJQUFJaEMsT0FBQSxDQUFRZ1EsTUFBQSxFQUFRNU0sSUFBSTtJQUN4QztJQUNBekMsRUFBQSxHQUFLbVAsS0FBQSxDQUFNOU4sRUFBRTtFQUNqQjtFQUNBLElBQUkrTixNQUFBLENBQU9LLEtBQUEsSUFBUyxDQUFDaE4sSUFBQSxDQUFLZ04sS0FBQSxFQUFPO0lBQzdCaE4sSUFBQSxDQUFLZ04sS0FBQSxHQUFRTCxNQUFBLENBQU9NLFFBQUE7RUFDeEI7RUFDQSxPQUFPMVAsRUFBQSxDQUFHNk4sTUFBQSxDQUFPdUIsTUFBQSxDQUFPMU8sSUFBQSxFQUFNK0IsSUFBSTtBQUN0QztBQUdBVixNQUFBLENBQU9zQixNQUFBLENBQU94RCxNQUFBLEVBQVE7RUFDbEJSLE9BQUE7RUFDQUcsTUFBQTtFQUNBUSxFQUFBLEVBQUlILE1BQUE7RUFDSkQsT0FBQSxFQUFTQztBQUNiLENBQUM7OztBTnpDRCxJQUFPRSw4QkFBQSxHQUFRRixNQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==