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

// .beyond/uimport/temp/socket.io-parser.4.2.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1wYXJzZXIuNC4yLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaXMtYmluYXJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2JpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRfaW9fcGFyc2VyXzRfMl80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRlY29kZXIiLCJFbmNvZGVyIiwiUGFja2V0VHlwZSIsInByb3RvY29sIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3Iiwib2JqIiwiYnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJjYWxsIiwid2l0aE5hdGl2ZUZpbGUiLCJGaWxlIiwiaXNCaW5hcnkiLCJoYXNCaW5hcnkiLCJ0b0pTT04iLCJBcnJheSIsImlzQXJyYXkiLCJpIiwibCIsImxlbmd0aCIsImFyZ3VtZW50cyIsImtleSIsImhhc093blByb3BlcnR5IiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrZXQiLCJidWZmZXJzIiwicGFja2V0RGF0YSIsImRhdGEiLCJwYWNrIiwiX2RlY29uc3RydWN0UGFja2V0IiwiYXR0YWNobWVudHMiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm51bSIsInB1c2giLCJuZXdEYXRhIiwiRGF0ZSIsInJlY29uc3RydWN0UGFja2V0IiwiX3JlY29uc3RydWN0UGFja2V0IiwiaXNJbmRleFZhbGlkIiwiRXJyb3IiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJyZXF1aXJlIiwiUkVTRVJWRURfRVZFTlRTIiwiUGFja2V0VHlwZTIiLCJjb25zdHJ1Y3RvciIsInJlcGxhY2VyIiwiZW5jb2RlIiwidHlwZSIsIkVWRU5UIiwiQUNLIiwiZW5jb2RlQXNCaW5hcnkiLCJCSU5BUllfRVZFTlQiLCJCSU5BUllfQUNLIiwibnNwIiwiaWQiLCJlbmNvZGVBc1N0cmluZyIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWNvbnN0cnVjdGlvbiIsInVuc2hpZnQiLCJpc09iamVjdCIsInZhbHVlIiwiX0RlY29kZXIiLCJFbWl0dGVyIiwicmV2aXZlciIsImFkZCIsInJlY29uc3RydWN0b3IiLCJkZWNvZGVTdHJpbmciLCJpc0JpbmFyeUV2ZW50IiwiQmluYXJ5UmVjb25zdHJ1Y3RvciIsImVtaXRSZXNlcnZlZCIsImJhc2U2NCIsInRha2VCaW5hcnlEYXRhIiwicCIsIk51bWJlciIsImNoYXJBdCIsInN0YXJ0IiwiYnVmIiwic3Vic3RyaW5nIiwiYyIsIm5leHQiLCJwYXlsb2FkIiwidHJ5UGFyc2UiLCJzdWJzdHIiLCJpc1BheWxvYWRWYWxpZCIsInBhcnNlIiwiZSIsIkNPTk5FQ1QiLCJESVNDT05ORUNUIiwiQ09OTkVDVF9FUlJPUiIsImluZGV4T2YiLCJkZXN0cm95IiwiZmluaXNoZWRSZWNvbnN0cnVjdGlvbiIsInJlY29uUGFjayIsImJpbkRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsOEJBQUE7OztBQ0FBLElBQU1TLHFCQUFBLEdBQXdCLE9BQU9DLFdBQUEsS0FB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