System.register(["@socket.io/component-emitter@3.1.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.2"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.2', dep)],
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

// .beyond/uimport/socket.io-parser.4.2.4.js
var socket_io_parser_4_2_4_exports = {};
__export(socket_io_parser_4_2_4_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_4_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.2");
var RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"
// used by the Node.js EventEmitter
];
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
var Decoder = class _Decoder extends import_component_emitter.Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (_Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0X2lvX3BhcnNlcl80XzJfNF9leHBvcnRzIiwiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm9iaiIsImJ1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwiY2FsbCIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzQmluYXJ5IiwiaGFzQmluYXJ5IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJsZW5ndGgiLCJhcmd1bWVudHMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlY29uc3RydWN0UGFja2V0IiwicGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJkYXRhIiwicGFjayIsIl9kZWNvbnN0cnVjdFBhY2tldCIsImF0dGFjaG1lbnRzIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJwdXNoIiwibmV3RGF0YSIsIkRhdGUiLCJyZWNvbnN0cnVjdFBhY2tldCIsIl9yZWNvbnN0cnVjdFBhY2tldCIsImlzSW5kZXhWYWxpZCIsIkVycm9yIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmVxdWlyZSIsIlJFU0VSVkVEX0VWRU5UUyIsIlBhY2tldFR5cGUyIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsImVuY29kZUFzQmluYXJ5IiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsIm5zcCIsImlkIiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiaXNPYmplY3QiLCJ2YWx1ZSIsIl9EZWNvZGVyIiwiRW1pdHRlciIsInJldml2ZXIiLCJhZGQiLCJyZWNvbnN0cnVjdG9yIiwiZGVjb2RlU3RyaW5nIiwiaXNCaW5hcnlFdmVudCIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJlbWl0UmVzZXJ2ZWQiLCJiYXNlNjQiLCJ0YWtlQmluYXJ5RGF0YSIsInAiLCJOdW1iZXIiLCJjaGFyQXQiLCJzdGFydCIsImJ1ZiIsInN1YnN0cmluZyIsImMiLCJuZXh0IiwicGF5bG9hZCIsInRyeVBhcnNlIiwic3Vic3RyIiwiaXNQYXlsb2FkVmFsaWQiLCJwYXJzZSIsImUiLCJDT05ORUNUIiwiRElTQ09OTkVDVCIsIkNPTk5FQ1RfRVJST1IiLCJpbmRleE9mIiwiZGVzdHJveSIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLDhCQUFBOzs7QUNBQSxJQUFNUyxxQkFBQSxHQUF3QixPQUFPQyxXQUFBLEtBQWdCO0FB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