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

// .beyond/uimport/orderedmap.2.1.1.js
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

// .beyond/uimport/orderedmap.2.1.1.js
var orderedmap_2_1_1_default = dist_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9vcmRlcmVkbWFwLjIuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL29yZGVyZWRtYXAvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJvcmRlcmVkbWFwXzJfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJvcmRlcmVkbWFwXzJfMV8xX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiT3JkZXJlZE1hcCIsImNvbnRlbnQiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsImZpbmQiLCJrZXkiLCJpIiwibGVuZ3RoIiwiZ2V0IiwiZm91bmQiLCJ1cGRhdGUiLCJ2YWx1ZSIsIm5ld0tleSIsInNlbGYiLCJyZW1vdmUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJhZGRUb1N0YXJ0IiwiY29uY2F0IiwiYWRkVG9FbmQiLCJhZGRCZWZvcmUiLCJwbGFjZSIsIndpdGhvdXQiLCJmb3JFYWNoIiwiZiIsInByZXBlbmQiLCJtYXAiLCJmcm9tIiwic2l6ZSIsInN1YnRyYWN0IiwiYXBwZW5kIiwicmVzdWx0IiwidG9PYmplY3QiLCJwcm9wIiwiZGlzdF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHdCQUFBOzs7QUNFQSxTQUFTTyxXQUFXQyxPQUFBLEVBQVM7RUFDM0IsS0FBS0EsT0FBQSxHQUFVQSxPQUFBO0FBQ2pCO0FBRUFELFVBQUEsQ0FBV0UsU0FBQSxHQUFZO0VBQ3JCQyxXQUFBLEVBQWFILFVBQUE7RUFFYkksSUFBQSxFQUFNLFNBQUFBLENBQVNDLEdBQUEsRUFBSztJQUNsQixTQUFTQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUtMLE9BQUEsQ0FBUU0sTUFBQSxFQUFRRCxDQUFBLElBQUssR0FDNUMsSUFBSSxLQUFLTCxPQUFBLENBQVFLLENBQUMsTUFBTUQsR0FBQSxFQUFLLE9BQU9DLENBQUE7SUFDdEMsT0FBTztFQUNUO0VBQUE7RUFBQTtFQUFBO0VBS0FFLEdBQUEsRUFBSyxTQUFBQSxDQUFTSCxHQUFBLEVBQUs7SUFDakIsSUFBSUksS0FBQSxHQUFRLEtBQUtMLElBQUEsQ0FBS0MsR0FBRztJQUN6QixPQUFPSSxLQUFBLElBQVMsS0FBSyxTQUFZLEtBQUtSLE9BQUEsQ0FBUVEsS0FBQSxHQUFRLENBQUM7RUFDekQ7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQU1BQyxNQUFBLEVBQVEsU0FBQUEsQ0FBU0wsR0FBQSxFQUFLTSxLQUFBLEVBQU9DLE1BQUEsRUFBUTtJQUNuQyxJQUFJQyxJQUFBLEdBQU9ELE1BQUEsSUFBVUEsTUFBQSxJQUFVUCxHQUFBLEdBQU0sS0FBS1MsTUFBQSxDQUFPRixNQUFNLElBQUk7SUFDM0QsSUFBSUgsS0FBQSxHQUFRSSxJQUFBLENBQUtULElBQUEsQ0FBS0MsR0FBRztNQUFHSixPQUFBLEdBQVVZLElBQUEsQ0FBS1osT0FBQSxDQUFRYyxLQUFBLENBQU07SUFDekQsSUFBSU4sS0FBQSxJQUFTLElBQUk7TUFDZlIsT0FBQSxDQUFRZSxJQUFBLENBQUtKLE1BQUEsSUFBVVAsR0FBQSxFQUFLTSxLQUFLO0lBQ25DLE9BQU87TUFDTFYsT0FBQSxDQUFRUSxLQUFBLEdBQVEsQ0FBQyxJQUFJRSxLQUFBO01BQ3JCLElBQUlDLE1BQUEsRUFBUVgsT0FBQSxDQUFRUSxLQUFLLElBQUlHLE1BQUE7SUFDL0I7SUFDQSxPQUFPLElBQUlaLFVBQUEsQ0FBV0MsT0FBTztFQUMvQjtFQUFBO0VBQUE7RUFJQWEsTUFBQSxFQUFRLFNBQUFBLENBQVNULEdBQUEsRUFBSztJQUNwQixJQUFJSSxLQUFBLEdBQVEsS0FBS0wsSUFBQSxDQUFLQyxHQUFHO0lBQ3pCLElBQUlJLEtBQUEsSUFBUyxJQUFJLE9BQU87SUFDeEIsSUFBSVIsT0FBQSxHQUFVLEtBQUtBLE9BQUEsQ0FBUWMsS0FBQSxDQUFNO0lBQ2pDZCxPQUFBLENBQVFnQixNQUFBLENBQU9SLEtBQUEsRUFBTyxDQUFDO0lBQ3ZCLE9BQU8sSUFBSVQsVUFBQSxDQUFXQyxPQUFPO0VBQy9CO0VBQUE7RUFBQTtFQUlBaUIsVUFBQSxFQUFZLFNBQUFBLENBQVNiLEdBQUEsRUFBS00sS0FBQSxFQUFPO0lBQy9CLE9BQU8sSUFBSVgsVUFBQSxDQUFXLENBQUNLLEdBQUEsRUFBS00sS0FBSyxFQUFFUSxNQUFBLENBQU8sS0FBS0wsTUFBQSxDQUFPVCxHQUFHLEVBQUVKLE9BQU8sQ0FBQztFQUNyRTtFQUFBO0VBQUE7RUFJQW1CLFFBQUEsRUFBVSxTQUFBQSxDQUFTZixHQUFBLEVBQUtNLEtBQUEsRUFBTztJQUM3QixJQUFJVixPQUFBLEdBQVUsS0FBS2EsTUFBQSxDQUFPVCxHQUFHLEVBQUVKLE9BQUEsQ0FBUWMsS0FBQSxDQUFNO0lBQzdDZCxPQUFBLENBQVFlLElBQUEsQ0FBS1gsR0FBQSxFQUFLTSxLQUFLO0lBQ3ZCLE9BQU8sSUFBSVgsVUFBQSxDQUFXQyxPQUFPO0VBQy9CO0VBQUE7RUFBQTtFQUFBO0VBS0FvQixTQUFBLEVBQVcsU0FBQUEsQ0FBU0MsS0FBQSxFQUFPakIsR0FBQSxFQUFLTSxLQUFBLEVBQU87SUFDckMsSUFBSVksT0FBQSxHQUFVLEtBQUtULE1BQUEsQ0FBT1QsR0FBRztNQUFHSixPQUFBLEdBQVVzQixPQUFBLENBQVF0QixPQUFBLENBQVFjLEtBQUEsQ0FBTTtJQUNoRSxJQUFJTixLQUFBLEdBQVFjLE9BQUEsQ0FBUW5CLElBQUEsQ0FBS2tCLEtBQUs7SUFDOUJyQixPQUFBLENBQVFnQixNQUFBLENBQU9SLEtBQUEsSUFBUyxLQUFLUixPQUFBLENBQVFNLE1BQUEsR0FBU0UsS0FBQSxFQUFPLEdBQUdKLEdBQUEsRUFBS00sS0FBSztJQUNsRSxPQUFPLElBQUlYLFVBQUEsQ0FBV0MsT0FBTztFQUMvQjtFQUFBO0VBQUE7RUFBQTtFQUtBdUIsT0FBQSxFQUFTLFNBQUFBLENBQVNDLENBQUEsRUFBRztJQUNuQixTQUFTbkIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLTCxPQUFBLENBQVFNLE1BQUEsRUFBUUQsQ0FBQSxJQUFLLEdBQzVDbUIsQ0FBQSxDQUFFLEtBQUt4QixPQUFBLENBQVFLLENBQUMsR0FBRyxLQUFLTCxPQUFBLENBQVFLLENBQUEsR0FBSSxDQUFDLENBQUM7RUFDMUM7RUFBQTtFQUFBO0VBQUE7RUFLQW9CLE9BQUEsRUFBUyxTQUFBQSxDQUFTQyxHQUFBLEVBQUs7SUFDckJBLEdBQUEsR0FBTTNCLFVBQUEsQ0FBVzRCLElBQUEsQ0FBS0QsR0FBRztJQUN6QixJQUFJLENBQUNBLEdBQUEsQ0FBSUUsSUFBQSxFQUFNLE9BQU87SUFDdEIsT0FBTyxJQUFJN0IsVUFBQSxDQUFXMkIsR0FBQSxDQUFJMUIsT0FBQSxDQUFRa0IsTUFBQSxDQUFPLEtBQUtXLFFBQUEsQ0FBU0gsR0FBRyxFQUFFMUIsT0FBTyxDQUFDO0VBQ3RFO0VBQUE7RUFBQTtFQUFBO0VBS0E4QixNQUFBLEVBQVEsU0FBQUEsQ0FBU0osR0FBQSxFQUFLO0lBQ3BCQSxHQUFBLEdBQU0zQixVQUFBLENBQVc0QixJQUFBLENBQUtELEdBQUc7SUFDekIsSUFBSSxDQUFDQSxHQUFBLENBQUlFLElBQUEsRUFBTSxPQUFPO0lBQ3RCLE9BQU8sSUFBSTdCLFVBQUEsQ0FBVyxLQUFLOEIsUUFBQSxDQUFTSCxHQUFHLEVBQUUxQixPQUFBLENBQVFrQixNQUFBLENBQU9RLEdBQUEsQ0FBSTFCLE9BQU8sQ0FBQztFQUN0RTtFQUFBO0VBQUE7RUFBQTtFQUtBNkIsUUFBQSxFQUFVLFNBQUFBLENBQVNILEdBQUEsRUFBSztJQUN0QixJQUFJSyxNQUFBLEdBQVM7SUFDYkwsR0FBQSxHQUFNM0IsVUFBQSxDQUFXNEIsSUFBQSxDQUFLRCxHQUFHO0lBQ3pCLFNBQVNyQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJcUIsR0FBQSxDQUFJMUIsT0FBQSxDQUFRTSxNQUFBLEVBQVFELENBQUEsSUFBSyxHQUMzQzBCLE1BQUEsR0FBU0EsTUFBQSxDQUFPbEIsTUFBQSxDQUFPYSxHQUFBLENBQUkxQixPQUFBLENBQVFLLENBQUMsQ0FBQztJQUN2QyxPQUFPMEIsTUFBQTtFQUNUO0VBQUE7RUFBQTtFQUlBQyxRQUFBLEVBQVUsU0FBQUEsQ0FBQSxFQUFXO0lBQ25CLElBQUlELE1BQUEsR0FBUyxDQUFDO0lBQ2QsS0FBS1IsT0FBQSxDQUFRLFVBQVNuQixHQUFBLEVBQUtNLEtBQUEsRUFBTztNQUFFcUIsTUFBQSxDQUFPM0IsR0FBRyxJQUFJTSxLQUFBO0lBQU8sQ0FBQztJQUMxRCxPQUFPcUIsTUFBQTtFQUNUO0VBQUE7RUFBQTtFQUlBLElBQUlILEtBQUEsRUFBTztJQUNULE9BQU8sS0FBSzVCLE9BQUEsQ0FBUU0sTUFBQSxJQUFVO0VBQ2hDO0FBQ0Y7QUFNQVAsVUFBQSxDQUFXNEIsSUFBQSxHQUFPLFVBQVNqQixLQUFBLEVBQU87RUFDaEMsSUFBSUEsS0FBQSxZQUFpQlgsVUFBQSxFQUFZLE9BQU9XLEtBQUE7RUFDeEMsSUFBSVYsT0FBQSxHQUFVLEVBQUM7RUFDZixJQUFJVSxLQUFBLEVBQU8sU0FBU3VCLElBQUEsSUFBUXZCLEtBQUEsRUFBT1YsT0FBQSxDQUFRZSxJQUFBLENBQUtrQixJQUFBLEVBQU12QixLQUFBLENBQU11QixJQUFJLENBQUM7RUFDakUsT0FBTyxJQUFJbEMsVUFBQSxDQUFXQyxPQUFPO0FBQy9CO0FBRUEsSUFBT2tDLFlBQUEsR0FBUW5DLFVBQUE7OztBRHJJZixJQUFPSix3QkFBQSxHQUFRdUMsWUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=