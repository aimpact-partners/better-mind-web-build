System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/temp/orderedmap.2.1.1.js
var orderedmap_2_1_1_exports = {};
__export(orderedmap_2_1_1_exports, {
  default: () => orderedmap_2_1_1_default
});
module.exports = __toCommonJS(orderedmap_2_1_1_exports);

// node_modules/orderedmap/dist/index.js
function OrderedMap(content) {
  this.content = content;
}
OrderedMap.prototype = {
  constructor: OrderedMap,
  find: function (key) {
    for (var i = 0; i < this.content.length; i += 2) if (this.content[i] === key) return i;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function (key) {
    var found = this.find(key);
    return found == -1 ? void 0 : this.content[found + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function (key, value, newKey) {
    var self = newKey && newKey != key ? this.remove(newKey) : this;
    var found = self.find(key),
      content = self.content.slice();
    if (found == -1) {
      content.push(newKey || key, value);
    } else {
      content[found + 1] = value;
      if (newKey) content[found] = newKey;
    }
    return new OrderedMap(content);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function (key) {
    var found = this.find(key);
    if (found == -1) return this;
    var content = this.content.slice();
    content.splice(found, 2);
    return new OrderedMap(content);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function (key, value) {
    return new OrderedMap([key, value].concat(this.remove(key).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function (key, value) {
    var content = this.remove(key).content.slice();
    content.push(key, value);
    return new OrderedMap(content);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function (place, key, value) {
    var without = this.remove(key),
      content = without.content.slice();
    var found = without.find(place);
    content.splice(found == -1 ? content.length : found, 0, key, value);
    return new OrderedMap(content);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function (f) {
    for (var i = 0; i < this.content.length; i += 2) f(this.content[i], this.content[i + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function (map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(map.content.concat(this.subtract(map).content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function (map) {
    map = OrderedMap.from(map);
    if (!map.size) return this;
    return new OrderedMap(this.subtract(map).content.concat(map.content));
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function (map) {
    var result = this;
    map = OrderedMap.from(map);
    for (var i = 0; i < map.content.length; i += 2) result = result.remove(map.content[i]);
    return result;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function () {
    var result = {};
    this.forEach(function (key, value) {
      result[key] = value;
    });
    return result;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
OrderedMap.from = function (value) {
  if (value instanceof OrderedMap) return value;
  var content = [];
  if (value) for (var prop in value) content.push(prop, value[prop]);
  return new OrderedMap(content);
};
var dist_default = OrderedMap;

// .beyond/uimport/temp/orderedmap.2.1.1.js
var orderedmap_2_1_1_default = dist_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL29yZGVyZWRtYXAuMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvb3JkZXJlZG1hcC9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIm9yZGVyZWRtYXBfMl8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIm9yZGVyZWRtYXBfMl8xXzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJPcmRlcmVkTWFwIiwiY29udGVudCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZmluZCIsImtleSIsImkiLCJsZW5ndGgiLCJnZXQiLCJmb3VuZCIsInVwZGF0ZSIsInZhbHVlIiwibmV3S2V5Iiwic2VsZiIsInJlbW92ZSIsInNsaWNlIiwicHVzaCIsInNwbGljZSIsImFkZFRvU3RhcnQiLCJjb25jYXQiLCJhZGRUb0VuZCIsImFkZEJlZm9yZSIsInBsYWNlIiwid2l0aG91dCIsImZvckVhY2giLCJmIiwicHJlcGVuZCIsIm1hcCIsImZyb20iLCJzaXplIiwic3VidHJhY3QiLCJhcHBlbmQiLCJyZXN1bHQiLCJ0b09iamVjdCIsInByb3AiLCJkaXN0X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sd0JBQUE7OztBQ0VBLFNBQVNPLFdBQVdDLE9BQUEsRUFBUztFQUMzQixLQUFLQSxPQUFBLEdBQVVBLE9BQUE7QUFDakI7QUFFQUQsVUFBQSxDQUFXRSxTQUFBLEdBQVk7RUFDckJDLFdBQUEsRUFBYUgsVUFBQTtFQUViSSxJQUFBLEVBQU0sU0FBQUEsQ0FBU0MsR0FBQSxFQUFLO0lBQ2xCLFNBQVNDLENBQUEsR0FB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LENBQVFNLE1BQUEsRUFBUUQsQ0FBQSxJQUFLLEdBQzNDMEIsTUFBQSxHQUFTQSxNQUFBLENBQU9sQixNQUFBLENBQU9hLEdBQUEsQ0FBSTFCLE9BQUEsQ0FBUUssQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8wQixNQUFBO0VBQ1Q7RUFBQTtFQUFBO0VBSUFDLFFBQUEsRUFBVSxTQUFBQSxDQUFBLEVBQVc7SUFDbkIsSUFBSUQsTUFBQSxHQUFTLENBQUM7SUFDZCxLQUFLUixPQUFBLENBQVEsVUFBU25CLEdBQUEsRUFBS00sS0FBQSxFQUFPO01BQUVxQixNQUFBLENBQU8zQixHQUFHLElBQUlNLEtBQUE7SUFBTyxDQUFDO0lBQzFELE9BQU9xQixNQUFBO0VBQ1Q7RUFBQTtFQUFBO0VBSUEsSUFBSUgsS0FBQSxFQUFPO0lBQ1QsT0FBTyxLQUFLNUIsT0FBQSxDQUFRTSxNQUFBLElBQVU7RUFDaEM7QUFDRjtBQU1BUCxVQUFBLENBQVc0QixJQUFBLEdBQU8sVUFBU2pCLEtBQUEsRUFBTztFQUNoQyxJQUFJQSxLQUFBLFlBQWlCWCxVQUFBLEVBQVksT0FBT1csS0FBQTtFQUN4QyxJQUFJVixPQUFBLEdBQVUsRUFBQztFQUNmLElBQUlVLEtBQUEsRUFBTyxTQUFTdUIsSUFBQSxJQUFRdkIsS0FBQSxFQUFPVixPQUFBLENBQVFlLElBQUEsQ0FBS2tCLElBQUEsRUFBTXZCLEtBQUEsQ0FBTXVCLElBQUksQ0FBQztFQUNqRSxPQUFPLElBQUlsQyxVQUFBLENBQVdDLE9BQU87QUFDL0I7QUFFQSxJQUFPa0MsWUFBQSxHQUFRbkMsVUFBQTs7O0FEcklmLElBQU9KLHdCQUFBLEdBQVF1QyxZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==