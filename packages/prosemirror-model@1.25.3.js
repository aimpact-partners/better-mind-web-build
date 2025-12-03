System.register(["orderedmap@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep)],
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

// .beyond/uimport/temp/prosemirror-model.1.25.3.js
var prosemirror_model_1_25_3_exports = {};
__export(prosemirror_model_1_25_3_exports, {
  ContentMatch: () => ContentMatch,
  DOMParser: () => DOMParser,
  DOMSerializer: () => DOMSerializer,
  Fragment: () => Fragment,
  Mark: () => Mark,
  MarkType: () => MarkType,
  Node: () => Node,
  NodeRange: () => NodeRange,
  NodeType: () => NodeType,
  ReplaceError: () => ReplaceError,
  ResolvedPos: () => ResolvedPos,
  Schema: () => Schema,
  Slice: () => Slice
});
module.exports = __toCommonJS(prosemirror_model_1_25_3_exports);

// node_modules/prosemirror-model/dist/index.js
var import_orderedmap = __toESM(require("orderedmap@2.1.1"), 0);
function findDiffStart(a, b, pos) {
  for (let i = 0;; i++) {
    if (i == a.childCount || i == b.childCount) return a.childCount == b.childCount ? null : pos;
    let childA = a.child(i),
      childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB)) return pos;
    if (childA.isText && childA.text != childB.text) {
      for (let j = 0; childA.text[j] == childB.text[j]; j++) pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null) return inner;
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (let iA = a.childCount, iB = b.childCount;;) {
    if (iA == 0 || iB == 0) return iA == iB ? null : {
      a: posA,
      b: posB
    };
    let childA = a.child(--iA),
      childB = b.child(--iB),
      size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB)) return {
      a: posA,
      b: posB
    };
    if (childA.isText && childA.text != childB.text) {
      let same = 0,
        minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return {
        a: posA,
        b: posB
      };
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner) return inner;
    }
    posA -= size;
    posB -= size;
  }
}
var Fragment = class _Fragment {
  /**
  @internal
  */
  constructor(content, size) {
    this.content = content;
    this.size = size || 0;
    if (size == null) for (let i = 0; i < content.length; i++) this.size += content[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(from, to, f, nodeStart = 0, parent) {
    for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i],
        end = pos + child.nodeSize;
      if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
        let start = pos + 1;
        child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
      }
      pos = end;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(f) {
    this.nodesBetween(0, this.size, f);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(from, to, blockSeparator, leafText) {
    let text = "",
      first = true;
    this.nodesBetween(from, to, (node, pos) => {
      let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
      if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
        if (first) first = false;else text += blockSeparator;
      }
      text += nodeText;
    }, 0);
    return text;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(other) {
    if (!other.size) return this;
    if (!this.size) return other;
    let last = this.lastChild,
      first = other.firstChild,
      content = this.content.slice(),
      i = 0;
    if (last.isText && last.sameMarkup(first)) {
      content[content.length - 1] = last.withText(last.text + first.text);
      i = 1;
    }
    for (; i < other.content.length; i++) content.push(other.content[i]);
    return new _Fragment(content, this.size + other.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(from, to = this.size) {
    if (from == 0 && to == this.size) return this;
    let result = [],
      size = 0;
    if (to > from) for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i],
        end = pos + child.nodeSize;
      if (end > from) {
        if (pos < from || end > to) {
          if (child.isText) child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));else child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
        }
        result.push(child);
        size += child.nodeSize;
      }
      pos = end;
    }
    return new _Fragment(result, size);
  }
  /**
  @internal
  */
  cutByIndex(from, to) {
    if (from == to) return _Fragment.empty;
    if (from == 0 && to == this.content.length) return this;
    return new _Fragment(this.content.slice(from, to));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(index, node) {
    let current = this.content[index];
    if (current == node) return this;
    let copy2 = this.content.slice();
    let size = this.size + node.nodeSize - current.nodeSize;
    copy2[index] = node;
    return new _Fragment(copy2, size);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(node) {
    return new _Fragment([node].concat(this.content), this.size + node.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(node) {
    return new _Fragment(this.content.concat(node), this.size + node.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(other) {
    if (this.content.length != other.content.length) return false;
    for (let i = 0; i < this.content.length; i++) if (!this.content[i].eq(other.content[i])) return false;
    return true;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(index) {
    let found2 = this.content[index];
    if (!found2) throw new RangeError("Index " + index + " out of range for " + this);
    return found2;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content[index] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    for (let i = 0, p = 0; i < this.content.length; i++) {
      let child = this.content[i];
      f(child, p, i);
      p += child.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(other, pos = 0) {
    return findDiffStart(this, other, pos);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(other, pos = this.size, otherPos = other.size) {
    return findDiffEnd(this, other, pos, otherPos);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(pos) {
    if (pos == 0) return retIndex(0, pos);
    if (pos == this.size) return retIndex(this.content.length, pos);
    if (pos > this.size || pos < 0) throw new RangeError(`Position ${pos} outside of fragment (${this})`);
    for (let i = 0, curPos = 0;; i++) {
      let cur = this.child(i),
        end = curPos + cur.nodeSize;
      if (end >= pos) {
        if (end == pos) return retIndex(i + 1, end);
        return retIndex(i, curPos);
      }
      curPos = end;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map(n => n.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(schema, value) {
    if (!value) return _Fragment.empty;
    if (!Array.isArray(value)) throw new RangeError("Invalid input for Fragment.fromJSON");
    return new _Fragment(value.map(schema.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(array) {
    if (!array.length) return _Fragment.empty;
    let joined,
      size = 0;
    for (let i = 0; i < array.length; i++) {
      let node = array[i];
      size += node.nodeSize;
      if (i && node.isText && array[i - 1].sameMarkup(node)) {
        if (!joined) joined = array.slice(0, i);
        joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
      } else if (joined) {
        joined.push(node);
      }
    }
    return new _Fragment(joined || array, size);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(nodes) {
    if (!nodes) return _Fragment.empty;
    if (nodes instanceof _Fragment) return nodes;
    if (Array.isArray(nodes)) return this.fromArray(nodes);
    if (nodes.attrs) return new _Fragment([nodes], nodes.nodeSize);
    throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
Fragment.empty = new Fragment([], 0);
var found = {
  index: 0,
  offset: 0
};
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found;
}
function compareDeep(a, b) {
  if (a === b) return true;
  if (!(a && typeof a == "object") || !(b && typeof b == "object")) return false;
  let array = Array.isArray(a);
  if (Array.isArray(b) != array) return false;
  if (array) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!compareDeep(a[i], b[i])) return false;
  } else {
    for (let p in a) if (!(p in b) || !compareDeep(a[p], b[p])) return false;
    for (let p in b) if (!(p in a)) return false;
  }
  return true;
}
var Mark = class _Mark {
  /**
  @internal
  */
  constructor(type, attrs) {
    this.type = type;
    this.attrs = attrs;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(set) {
    let copy2,
      placed = false;
    for (let i = 0; i < set.length; i++) {
      let other = set[i];
      if (this.eq(other)) return set;
      if (this.type.excludes(other.type)) {
        if (!copy2) copy2 = set.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy2) copy2 = set.slice(0, i);
          copy2.push(this);
          placed = true;
        }
        if (copy2) copy2.push(other);
      }
    }
    if (!copy2) copy2 = set.slice();
    if (!placed) copy2.push(this);
    return copy2;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
    return set;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return true;
    return false;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(other) {
    return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(schema, json) {
    if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
    let type = schema.marks[json.type];
    if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
    let mark = type.create(json.attrs);
    type.checkAttrs(mark.attrs);
    return mark;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(a, b) {
    if (a == b) return true;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
    return true;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(marks) {
    if (!marks || Array.isArray(marks) && marks.length == 0) return _Mark.none;
    if (marks instanceof _Mark) return [marks];
    let copy2 = marks.slice();
    copy2.sort((a, b) => a.type.rank - b.type.rank);
    return copy2;
  }
};
Mark.none = [];
var ReplaceError = class extends Error {};
var Slice = class _Slice {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(content, openStart, openEnd) {
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(pos, fragment) {
    let content = insertInto(this.content, pos + this.openStart, fragment);
    return content && new _Slice(content, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(from, to) {
    return new _Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(other) {
    return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size) return null;
    let json = {
      content: this.content.toJSON()
    };
    if (this.openStart > 0) json.openStart = this.openStart;
    if (this.openEnd > 0) json.openEnd = this.openEnd;
    return json;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json) return _Slice.empty;
    let openStart = json.openStart || 0,
      openEnd = json.openEnd || 0;
    if (typeof openStart != "number" || typeof openEnd != "number") throw new RangeError("Invalid input for Slice.fromJSON");
    return new _Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(fragment, openIsolating = true) {
    let openStart = 0,
      openEnd = 0;
    for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild) openStart++;
    for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild) openEnd++;
    return new _Slice(fragment, openStart, openEnd);
  }
};
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
  let {
      index,
      offset
    } = content.findIndex(from),
    child = content.maybeChild(index);
  let {
    index: indexTo,
    offset: offsetTo
  } = content.findIndex(to);
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText) throw new RangeError("Removing non-flat range");
    return content.cut(0, from).append(content.cut(to));
  }
  if (index != indexTo) throw new RangeError("Removing non-flat range");
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, parent) {
  let {
      index,
      offset
    } = content.findIndex(dist),
    child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert)) return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  let inner = insertInto(child.content, dist - offset - 1, insert, child);
  return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
  if (slice.openStart > $from.depth) throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd) throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
  let index = $from.index(depth),
    node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    let inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    let parent = $from.parent,
      content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    let {
      start,
      end
    } = prepareSliceForReplace(slice, $from);
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}
function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type)) throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
  let node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  let last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last])) target[last] = child.withText(target[last].text + child.text);else target.push(child);
}
function addRange($start, $end, depth, target) {
  let node = ($end || $start).node(depth);
  let startIndex = 0,
    endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (let i = startIndex; i < endIndex; i++) addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset) addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  let content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart) addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd) addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  let content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    let type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
  let extra = $along.depth - slice.openStart,
    parent = $along.node(extra);
  let node = parent.copy(slice.content);
  for (let i = extra - 1; i >= 0; i--) node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
}
var ResolvedPos = class _ResolvedPos {
  /**
  @internal
  */
  constructor(pos, path, parentOffset) {
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(val) {
    if (val == null) return this.depth;
    if (val < 0) return this.depth + val;
    return val;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(depth) {
    return this.path[this.resolveDepth(depth) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(depth) {
    return this.path[this.resolveDepth(depth) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(depth) {
    depth = this.resolveDepth(depth);
    return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(depth) {
    depth = this.resolveDepth(depth);
    return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(depth) {
    depth = this.resolveDepth(depth);
    return this.start(depth) + this.node(depth).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position before the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(depth) {
    depth = this.resolveDepth(depth);
    if (!depth) throw new RangeError("There is no position after the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let parent = this.parent,
      index = this.index(this.depth);
    if (index == parent.childCount) return null;
    let dOff = this.pos - this.path[this.path.length - 1],
      child = parent.child(index);
    return dOff ? parent.child(index).cut(dOff) : child;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let index = this.index(this.depth);
    let dOff = this.pos - this.path[this.path.length - 1];
    if (dOff) return this.parent.child(index).cut(0, dOff);
    return index == 0 ? null : this.parent.child(index - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(index, depth) {
    depth = this.resolveDepth(depth);
    let node = this.path[depth * 3],
      pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    for (let i = 0; i < index; i++) pos += node.child(i).nodeSize;
    return pos;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let parent = this.parent,
      index = this.index();
    if (parent.content.size == 0) return Mark.none;
    if (this.textOffset) return parent.child(index).marks;
    let main = parent.maybeChild(index - 1),
      other = parent.maybeChild(index);
    if (!main) {
      let tmp = main;
      main = other;
      other = tmp;
    }
    let marks = main.marks;
    for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks))) marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross($end) {
    let after = this.parent.maybeChild(this.index());
    if (!after || !after.isInline) return null;
    let marks = after.marks,
      next = $end.parent.maybeChild($end.index());
    for (var i = 0; i < marks.length; i++) if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks))) marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(pos) {
    for (let depth = this.depth; depth > 0; depth--) if (this.start(depth) <= pos && this.end(depth) >= pos) return depth;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(other = this, pred) {
    if (other.pos < this.pos) return other.blockRange(this);
    for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--) if (other.pos <= this.end(d) && (!pred || pred(this.node(d)))) return new NodeRange(this, other, d);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(other) {
    return this.pos - this.parentOffset == other.pos - other.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(other) {
    return other.pos > this.pos ? other : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(other) {
    return other.pos < this.pos ? other : this;
  }
  /**
  @internal
  */
  toString() {
    let str = "";
    for (let i = 1; i <= this.depth; i++) str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
    return str + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(doc2, pos) {
    if (!(pos >= 0 && pos <= doc2.content.size)) throw new RangeError("Position " + pos + " out of range");
    let path = [];
    let start = 0,
      parentOffset = pos;
    for (let node = doc2;;) {
      let {
        index,
        offset
      } = node.content.findIndex(parentOffset);
      let rem = parentOffset - offset;
      path.push(node, index, start + offset);
      if (!rem) break;
      node = node.child(index);
      if (node.isText) break;
      parentOffset = rem - 1;
      start += offset + 1;
    }
    return new _ResolvedPos(pos, path, parentOffset);
  }
  /**
  @internal
  */
  static resolveCached(doc2, pos) {
    let cache = resolveCache.get(doc2);
    if (cache) {
      for (let i = 0; i < cache.elts.length; i++) {
        let elt = cache.elts[i];
        if (elt.pos == pos) return elt;
      }
    } else {
      resolveCache.set(doc2, cache = new ResolveCache());
    }
    let result = cache.elts[cache.i] = _ResolvedPos.resolve(doc2, pos);
    cache.i = (cache.i + 1) % resolveCacheSize;
    return result;
  }
};
var ResolveCache = class {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
};
var resolveCacheSize = 12,
  resolveCache = /* @__PURE__ */new WeakMap();
var NodeRange = class {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor($from, $to, depth) {
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
var emptyAttrs = /* @__PURE__ */Object.create(null);
var Node = class _Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks = Mark.none) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.content = content || Fragment.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(index) {
    return this.content.child(index);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content.maybeChild(index);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    this.content.forEach(f);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(from, to, f, startPos = 0) {
    this.content.nodesBetween(from, to, f, startPos, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(f) {
    this.nodesBetween(0, this.content.size, f);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(from, to, blockSeparator, leafText) {
    return this.content.textBetween(from, to, blockSeparator, leafText);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(other) {
    return this == other || this.sameMarkup(other) && this.content.eq(other.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(other) {
    return this.hasMarkup(other.type, other.attrs, other.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(type, attrs, marks) {
    return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(content = null) {
    if (content == this.content) return this;
    return new _Node(this.type, this.attrs, content, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(marks) {
    return marks == this.marks ? this : new _Node(this.type, this.attrs, this.content, marks);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(from, to = this.content.size) {
    if (from == 0 && to == this.content.size) return this;
    return this.copy(this.content.cut(from, to));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(from, to = this.content.size, includeParents = false) {
    if (from == to) return Slice.empty;
    let $from = this.resolve(from),
      $to = this.resolve(to);
    let depth = includeParents ? 0 : $from.sharedDepth(to);
    let start = $from.start(depth),
      node = $from.node(depth);
    let content = node.content.cut($from.pos - start, $to.pos - start);
    return new Slice(content, $from.depth - depth, $to.depth - depth);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(from, to, slice) {
    return replace(this.resolve(from), this.resolve(to), slice);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(pos) {
    for (let node = this;;) {
      let {
        index,
        offset
      } = node.content.findIndex(pos);
      node = node.maybeChild(index);
      if (!node) return null;
      if (offset == pos || node.isText) return node;
      pos -= offset + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(pos) {
    let {
      index,
      offset
    } = this.content.findIndex(pos);
    return {
      node: this.content.maybeChild(index),
      index,
      offset
    };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(pos) {
    if (pos == 0) return {
      node: null,
      index: 0,
      offset: 0
    };
    let {
      index,
      offset
    } = this.content.findIndex(pos);
    if (offset < pos) return {
      node: this.content.child(index),
      index,
      offset
    };
    let node = this.content.child(index - 1);
    return {
      node,
      index: index - 1,
      offset: offset - node.nodeSize
    };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(pos) {
    return ResolvedPos.resolveCached(this, pos);
  }
  /**
  @internal
  */
  resolveNoCache(pos) {
    return ResolvedPos.resolve(this, pos);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(from, to, type) {
    let found2 = false;
    if (to > from) this.nodesBetween(from, to, node => {
      if (type.isInSet(node.marks)) found2 = true;
      return !found2;
    });
    return found2;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    let name = this.type.name;
    if (this.content.size) name += "(" + this.content.toStringInner() + ")";
    return wrapMarks(this.marks, name);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(index) {
    let match = this.type.contentMatch.matchFragment(this.content, 0, index);
    if (!match) throw new Error("Called contentMatchAt on a node with invalid content");
    return match;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
    let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
    let two = one && one.matchFragment(this.content, to);
    if (!two || !two.validEnd) return false;
    for (let i = start; i < end; i++) if (!this.type.allowsMarks(replacement.child(i).marks)) return false;
    return true;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(from, to, type, marks) {
    if (marks && !this.type.allowsMarks(marks)) return false;
    let start = this.contentMatchAt(from).matchType(type);
    let end = start && start.matchFragment(this.content, to);
    return end ? end.validEnd : false;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(other) {
    if (other.content.size) return this.canReplace(this.childCount, this.childCount, other.content);else return this.type.compatibleContent(other.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let copy2 = Mark.none;
    for (let i = 0; i < this.marks.length; i++) {
      let mark = this.marks[i];
      mark.type.checkAttrs(mark.attrs);
      copy2 = mark.addToSet(copy2);
    }
    if (!Mark.sameSet(copy2, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(m => m.type.name)}`);
    this.content.forEach(node => node.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let obj = {
      type: this.type.name
    };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    if (this.content.size) obj.content = this.content.toJSON();
    if (this.marks.length) obj.marks = this.marks.map(n => n.toJSON());
    return obj;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json) throw new RangeError("Invalid input for Node.fromJSON");
    let marks = void 0;
    if (json.marks) {
      if (!Array.isArray(json.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
      marks = json.marks.map(schema.markFromJSON);
    }
    if (json.type == "text") {
      if (typeof json.text != "string") throw new RangeError("Invalid text node in JSON");
      return schema.text(json.text, marks);
    }
    let content = Fragment.fromJSON(schema, json.content);
    let node = schema.nodeType(json.type).create(json.attrs, content, marks);
    node.type.checkAttrs(node.attrs);
    return node;
  }
};
Node.prototype.text = void 0;
var TextNode = class _TextNode extends Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks) {
    super(type, attrs, null, marks);
    if (!content) throw new RangeError("Empty text nodes are not allowed");
    this.text = content;
  }
  toString() {
    if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
    return wrapMarks(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(from, to) {
    return this.text.slice(from, to);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(marks) {
    return marks == this.marks ? this : new _TextNode(this.type, this.attrs, this.text, marks);
  }
  withText(text) {
    if (text == this.text) return this;
    return new _TextNode(this.type, this.attrs, text, this.marks);
  }
  cut(from = 0, to = this.text.length) {
    if (from == 0 && to == this.text.length) return this;
    return this.withText(this.text.slice(from, to));
  }
  eq(other) {
    return this.sameMarkup(other) && this.text == other.text;
  }
  toJSON() {
    let base = super.toJSON();
    base.text = this.text;
    return base;
  }
};
function wrapMarks(marks, str) {
  for (let i = marks.length - 1; i >= 0; i--) str = marks[i].type.name + "(" + str + ")";
  return str;
}
var ContentMatch = class _ContentMatch {
  /**
  @internal
  */
  constructor(validEnd) {
    this.validEnd = validEnd;
    this.next = [];
    this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(string, nodeTypes) {
    let stream = new TokenStream(string, nodeTypes);
    if (stream.next == null) return _ContentMatch.empty;
    let expr = parseExpr(stream);
    if (stream.next) stream.err("Unexpected trailing text");
    let match = dfa(nfa(expr));
    checkForDeadEnds(match, stream);
    return match;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(type) {
    for (let i = 0; i < this.next.length; i++) if (this.next[i].type == type) return this.next[i].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(frag, start = 0, end = frag.childCount) {
    let cur = this;
    for (let i = start; cur && i < end; i++) cur = cur.matchType(frag.child(i).type);
    return cur;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let i = 0; i < this.next.length; i++) {
      let {
        type
      } = this.next[i];
      if (!(type.isText || type.hasRequiredAttrs())) return type;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(other) {
    for (let i = 0; i < this.next.length; i++) for (let j = 0; j < other.next.length; j++) if (this.next[i].type == other.next[j].type) return true;
    return false;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(after, toEnd = false, startIndex = 0) {
    let seen = [this];
    function search(match, types) {
      let finished = match.matchFragment(after, startIndex);
      if (finished && (!toEnd || finished.validEnd)) return Fragment.from(types.map(tp => tp.createAndFill()));
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
          seen.push(next);
          let found2 = search(next, types.concat(type));
          if (found2) return found2;
        }
      }
      return null;
    }
    return search(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(target) {
    for (let i = 0; i < this.wrapCache.length; i += 2) if (this.wrapCache[i] == target) return this.wrapCache[i + 1];
    let computed = this.computeWrapping(target);
    this.wrapCache.push(target, computed);
    return computed;
  }
  /**
  @internal
  */
  computeWrapping(target) {
    let seen = /* @__PURE__ */Object.create(null),
      active = [{
        match: this,
        type: null,
        via: null
      }];
    while (active.length) {
      let current = active.shift(),
        match = current.match;
      if (match.matchType(target)) {
        let result = [];
        for (let obj = current; obj.type; obj = obj.via) result.push(obj.type);
        return result.reverse();
      }
      for (let i = 0; i < match.next.length; i++) {
        let {
          type,
          next
        } = match.next[i];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
          active.push({
            match: type.contentMatch,
            type,
            via: current
          });
          seen[type.name] = true;
        }
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(n) {
    if (n >= this.next.length) throw new RangeError(`There's no ${n}th edge in this content match`);
    return this.next[n];
  }
  /**
  @internal
  */
  toString() {
    let seen = [];
    function scan(m) {
      seen.push(m);
      for (let i = 0; i < m.next.length; i++) if (seen.indexOf(m.next[i].next) == -1) scan(m.next[i].next);
    }
    scan(this);
    return seen.map((m, i) => {
      let out = i + (m.validEnd ? "*" : " ") + " ";
      for (let i2 = 0; i2 < m.next.length; i2++) out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
      return out;
    }).join("\n");
  }
};
ContentMatch.empty = new ContentMatch(true);
var TokenStream = class {
  constructor(string, nodeTypes) {
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "") this.tokens.pop();
    if (this.tokens[0] == "") this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(tok) {
    return this.next == tok && (this.pos++ || true);
  }
  err(str) {
    throw new SyntaxError(str + " (in content expression '" + this.string + "')");
  }
};
function parseExpr(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : {
    type: "choice",
    exprs
  };
}
function parseExprSeq(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : {
    type: "seq",
    exprs
  };
}
function parseExprSubscript(stream) {
  let expr = parseExprAtom(stream);
  for (;;) {
    if (stream.eat("+")) expr = {
      type: "plus",
      expr
    };else if (stream.eat("*")) expr = {
      type: "star",
      expr
    };else if (stream.eat("?")) expr = {
      type: "opt",
      expr
    };else if (stream.eat("{")) expr = parseExprRange(stream, expr);else break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next)) stream.err("Expected number, got '" + stream.next + "'");
  let result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  let min = parseNum(stream),
    max = min;
  if (stream.eat(",")) {
    if (stream.next != "}") max = parseNum(stream);else max = -1;
  }
  if (!stream.eat("}")) stream.err("Unclosed braced range");
  return {
    type: "range",
    min,
    max,
    expr
  };
}
function resolveName(stream, name) {
  let types = stream.nodeTypes,
    type = types[name];
  if (type) return [type];
  let result = [];
  for (let typeName in types) {
    let type2 = types[typeName];
    if (type2.isInGroup(name)) result.push(type2);
  }
  if (result.length == 0) stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    let expr = parseExpr(stream);
    if (!stream.eat(")")) stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    let exprs = resolveName(stream, stream.next).map(type => {
      if (stream.inline == null) stream.inline = type.isInline;else if (stream.inline != type.isInline) stream.err("Mixing inline and block content");
      return {
        type: "name",
        value: type
      };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : {
      type: "choice",
      exprs
    };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  let nfa2 = [[]];
  connect(compile(expr, 0), node());
  return nfa2;
  function node() {
    return nfa2.push([]) - 1;
  }
  function edge(from, to, term) {
    let edge2 = {
      term,
      to
    };
    nfa2[from].push(edge2);
    return edge2;
  }
  function connect(edges, to) {
    edges.forEach(edge2 => edge2.to = to);
  }
  function compile(expr2, from) {
    if (expr2.type == "choice") {
      return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from)), []);
    } else if (expr2.type == "seq") {
      for (let i = 0;; i++) {
        let next = compile(expr2.exprs[i], from);
        if (i == expr2.exprs.length - 1) return next;
        connect(next, from = node());
      }
    } else if (expr2.type == "star") {
      let loop = node();
      edge(from, loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "plus") {
      let loop = node();
      connect(compile(expr2.expr, from), loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "opt") {
      return [edge(from)].concat(compile(expr2.expr, from));
    } else if (expr2.type == "range") {
      let cur = from;
      for (let i = 0; i < expr2.min; i++) {
        let next = node();
        connect(compile(expr2.expr, cur), next);
        cur = next;
      }
      if (expr2.max == -1) {
        connect(compile(expr2.expr, cur), cur);
      } else {
        for (let i = expr2.min; i < expr2.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr2.type == "name") {
      return [edge(from, void 0, expr2.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa2, node) {
  let result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node2) {
    let edges = nfa2[node2];
    if (edges.length == 1 && !edges[0].term) return scan(edges[0].to);
    result.push(node2);
    for (let i = 0; i < edges.length; i++) {
      let {
        term,
        to
      } = edges[i];
      if (!term && result.indexOf(to) == -1) scan(to);
    }
  }
}
function dfa(nfa2) {
  let labeled = /* @__PURE__ */Object.create(null);
  return explore(nullFrom(nfa2, 0));
  function explore(states) {
    let out = [];
    states.forEach(node => {
      nfa2[node].forEach(({
        term,
        to
      }) => {
        if (!term) return;
        let set;
        for (let i = 0; i < out.length; i++) if (out[i][0] == term) set = out[i][1];
        nullFrom(nfa2, to).forEach(node2 => {
          if (!set) out.push([term, set = []]);
          if (set.indexOf(node2) == -1) set.push(node2);
        });
      });
    });
    let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
    for (let i = 0; i < out.length; i++) {
      let states2 = out[i][1].sort(cmp);
      state.next.push({
        type: out[i][0],
        next: labeled[states2.join(",")] || explore(states2)
      });
    }
    return state;
  }
}
function checkForDeadEnds(match, stream) {
  for (let i = 0, work = [match]; i < work.length; i++) {
    let state = work[i],
      dead = !state.validEnd,
      nodes = [];
    for (let j = 0; j < state.next.length; j++) {
      let {
        type,
        next
      } = state.next[j];
      nodes.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs())) dead = false;
      if (work.indexOf(next) == -1) work.push(next);
    }
    if (dead) stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function defaultAttrs(attrs) {
  let defaults = /* @__PURE__ */Object.create(null);
  for (let attrName in attrs) {
    let attr = attrs[attrName];
    if (!attr.hasDefault) return null;
    defaults[attrName] = attr.default;
  }
  return defaults;
}
function computeAttrs(attrs, value) {
  let built = /* @__PURE__ */Object.create(null);
  for (let name in attrs) {
    let given = value && value[name];
    if (given === void 0) {
      let attr = attrs[name];
      if (attr.hasDefault) given = attr.default;else throw new RangeError("No value supplied for attribute " + name);
    }
    built[name] = given;
  }
  return built;
}
function checkAttrs(attrs, values, type, name) {
  for (let name2 in values) if (!(name2 in attrs)) throw new RangeError(`Unsupported attribute ${name2} for ${type} of type ${name2}`);
  for (let name2 in attrs) {
    let attr = attrs[name2];
    if (attr.validate) attr.validate(values[name2]);
  }
}
function initAttrs(typeName, attrs) {
  let result = /* @__PURE__ */Object.create(null);
  if (attrs) for (let name in attrs) result[name] = new Attribute(typeName, name, attrs[name]);
  return result;
}
var NodeType = class _NodeType {
  /**
  @internal
  */
  constructor(name, schema, spec) {
    this.name = name;
    this.schema = schema;
    this.spec = spec;
    this.markSet = null;
    this.groups = spec.group ? spec.group.split(" ") : [];
    this.attrs = initAttrs(name, spec.attrs);
    this.defaultAttrs = defaultAttrs(this.attrs);
    this.contentMatch = null;
    this.inlineContent = null;
    this.isBlock = !(spec.inline || name == "text");
    this.isText = name == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == ContentMatch.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(group) {
    return this.groups.indexOf(group) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let n in this.attrs) if (this.attrs[n].isRequired) return true;
    return false;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(other) {
    return this == other || this.contentMatch.compatible(other.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(attrs) {
    if (!attrs && this.defaultAttrs) return this.defaultAttrs;else return computeAttrs(this.attrs, attrs);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(attrs = null, content, marks) {
    if (this.isText) throw new Error("NodeType.create can't construct text nodes");
    return new Node(this, this.computeAttrs(attrs), Fragment.from(content), Mark.setFrom(marks));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(attrs = null, content, marks) {
    content = Fragment.from(content);
    this.checkContent(content);
    return new Node(this, this.computeAttrs(attrs), content, Mark.setFrom(marks));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(attrs = null, content, marks) {
    attrs = this.computeAttrs(attrs);
    content = Fragment.from(content);
    if (content.size) {
      let before = this.contentMatch.fillBefore(content);
      if (!before) return null;
      content = before.append(content);
    }
    let matched = this.contentMatch.matchFragment(content);
    let after = matched && matched.fillBefore(Fragment.empty, true);
    if (!after) return null;
    return new Node(this, attrs, content.append(after), Mark.setFrom(marks));
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(content) {
    let result = this.contentMatch.matchFragment(content);
    if (!result || !result.validEnd) return false;
    for (let i = 0; i < content.childCount; i++) if (!this.allowsMarks(content.child(i).marks)) return false;
    return true;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(content) {
    if (!this.validContent(content)) throw new RangeError(`Invalid content for node ${this.name}: ${content.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(markType) {
    return this.markSet == null || this.markSet.indexOf(markType) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(marks) {
    if (this.markSet == null) return true;
    for (let i = 0; i < marks.length; i++) if (!this.allowsMarkType(marks[i].type)) return false;
    return true;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(marks) {
    if (this.markSet == null) return marks;
    let copy2;
    for (let i = 0; i < marks.length; i++) {
      if (!this.allowsMarkType(marks[i].type)) {
        if (!copy2) copy2 = marks.slice(0, i);
      } else if (copy2) {
        copy2.push(marks[i]);
      }
    }
    return !copy2 ? marks : copy2.length ? copy2 : Mark.none;
  }
  /**
  @internal
  */
  static compile(nodes, schema) {
    let result = /* @__PURE__ */Object.create(null);
    nodes.forEach((name, spec) => result[name] = new _NodeType(name, schema, spec));
    let topType = schema.spec.topNode || "doc";
    if (!result[topType]) throw new RangeError("Schema is missing its top node type ('" + topType + "')");
    if (!result.text) throw new RangeError("Every schema needs a 'text' type");
    for (let _ in result.text.attrs) throw new RangeError("The text node type should not have attributes");
    return result;
  }
};
function validateType(typeName, attrName, type) {
  let types = type.split("|");
  return value => {
    let name = value === null ? "null" : typeof value;
    if (types.indexOf(name) < 0) throw new RangeError(`Expected value of type ${types} for attribute ${attrName} on type ${typeName}, got ${name}`);
  };
}
var Attribute = class {
  constructor(typeName, attrName, options) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(options, "default");
    this.default = options.default;
    this.validate = typeof options.validate == "string" ? validateType(typeName, attrName, options.validate) : options.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
};
var MarkType = class _MarkType {
  /**
  @internal
  */
  constructor(name, rank, schema, spec) {
    this.name = name;
    this.rank = rank;
    this.schema = schema;
    this.spec = spec;
    this.attrs = initAttrs(name, spec.attrs);
    this.excluded = null;
    let defaults = defaultAttrs(this.attrs);
    this.instance = defaults ? new Mark(this, defaults) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(attrs = null) {
    if (!attrs && this.instance) return this.instance;
    return new Mark(this, computeAttrs(this.attrs, attrs));
  }
  /**
  @internal
  */
  static compile(marks, schema) {
    let result = /* @__PURE__ */Object.create(null),
      rank = 0;
    marks.forEach((name, spec) => result[name] = new _MarkType(name, rank++, schema, spec));
    return result;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(set) {
    for (var i = 0; i < set.length; i++) if (set[i].type == this) {
      set = set.slice(0, i).concat(set.slice(i + 1));
      i--;
    }
    return set;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++) if (set[i].type == this) return set[i];
  }
  /**
  @internal
  */
  checkAttrs(attrs) {
    checkAttrs(this.attrs, attrs, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(other) {
    return this.excluded.indexOf(other) > -1;
  }
};
var Schema = class {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(spec) {
    this.linebreakReplacement = null;
    this.cached = /* @__PURE__ */Object.create(null);
    let instanceSpec = this.spec = {};
    for (let prop in spec) instanceSpec[prop] = spec[prop];
    instanceSpec.nodes = import_orderedmap.default.from(spec.nodes), instanceSpec.marks = import_orderedmap.default.from(spec.marks || {}), this.nodes = NodeType.compile(this.spec.nodes, this);
    this.marks = MarkType.compile(this.spec.marks, this);
    let contentExprCache = /* @__PURE__ */Object.create(null);
    for (let prop in this.nodes) {
      if (prop in this.marks) throw new RangeError(prop + " can not be both a node and a mark");
      let type = this.nodes[prop],
        contentExpr = type.spec.content || "",
        markExpr = type.spec.marks;
      type.contentMatch = contentExprCache[contentExpr] || (contentExprCache[contentExpr] = ContentMatch.parse(contentExpr, this.nodes));
      type.inlineContent = type.contentMatch.inlineContent;
      if (type.spec.linebreakReplacement) {
        if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
        if (!type.isInline || !type.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = type;
      }
      type.markSet = markExpr == "_" ? null : markExpr ? gatherMarks(this, markExpr.split(" ")) : markExpr == "" || !type.inlineContent ? [] : null;
    }
    for (let prop in this.marks) {
      let type = this.marks[prop],
        excl = type.spec.excludes;
      type.excluded = excl == null ? [type] : excl == "" ? [] : gatherMarks(this, excl.split(" "));
    }
    this.nodeFromJSON = json => Node.fromJSON(this, json);
    this.markFromJSON = json => Mark.fromJSON(this, json);
    this.topNodeType = this.nodes[this.spec.topNode || "doc"];
    this.cached.wrappings = /* @__PURE__ */Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(type, attrs = null, content, marks) {
    if (typeof type == "string") type = this.nodeType(type);else if (!(type instanceof NodeType)) throw new RangeError("Invalid node type: " + type);else if (type.schema != this) throw new RangeError("Node type from different schema used (" + type.name + ")");
    return type.createChecked(attrs, content, marks);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(text, marks) {
    let type = this.nodes.text;
    return new TextNode(type, type.defaultAttrs, text, Mark.setFrom(marks));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(type, attrs) {
    if (typeof type == "string") type = this.marks[type];
    return type.create(attrs);
  }
  /**
  @internal
  */
  nodeType(name) {
    let found2 = this.nodes[name];
    if (!found2) throw new RangeError("Unknown node type: " + name);
    return found2;
  }
};
function gatherMarks(schema, marks) {
  let found2 = [];
  for (let i = 0; i < marks.length; i++) {
    let name = marks[i],
      mark = schema.marks[name],
      ok = mark;
    if (mark) {
      found2.push(mark);
    } else {
      for (let prop in schema.marks) {
        let mark2 = schema.marks[prop];
        if (name == "_" || mark2.spec.group && mark2.spec.group.split(" ").indexOf(name) > -1) found2.push(ok = mark2);
      }
    }
    if (!ok) throw new SyntaxError("Unknown mark type: '" + marks[i] + "'");
  }
  return found2;
}
function isTagRule(rule) {
  return rule.tag != null;
}
function isStyleRule(rule) {
  return rule.style != null;
}
var DOMParser = class _DOMParser {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(schema, rules) {
    this.schema = schema;
    this.rules = rules;
    this.tags = [];
    this.styles = [];
    let matchedStyles = this.matchedStyles = [];
    rules.forEach(rule => {
      if (isTagRule(rule)) {
        this.tags.push(rule);
      } else if (isStyleRule(rule)) {
        let prop = /[^=]*/.exec(rule.style)[0];
        if (matchedStyles.indexOf(prop) < 0) matchedStyles.push(prop);
        this.styles.push(rule);
      }
    });
    this.normalizeLists = !this.tags.some(r => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node) return false;
      let node = schema.nodes[r.node];
      return node.contentMatch.matchType(node);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(dom, options = {}) {
    let context = new ParseContext(this, options, false);
    context.addAll(dom, Mark.none, options.from, options.to);
    return context.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(dom, options = {}) {
    let context = new ParseContext(this, options, true);
    context.addAll(dom, Mark.none, options.from, options.to);
    return Slice.maxOpen(context.finish());
  }
  /**
  @internal
  */
  matchTag(dom, context, after) {
    for (let i = after ? this.tags.indexOf(after) + 1 : 0; i < this.tags.length; i++) {
      let rule = this.tags[i];
      if (matches(dom, rule.tag) && (rule.namespace === void 0 || dom.namespaceURI == rule.namespace) && (!rule.context || context.matchesContext(rule.context))) {
        if (rule.getAttrs) {
          let result = rule.getAttrs(dom);
          if (result === false) continue;
          rule.attrs = result || void 0;
        }
        return rule;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(prop, value, context, after) {
    for (let i = after ? this.styles.indexOf(after) + 1 : 0; i < this.styles.length; i++) {
      let rule = this.styles[i],
        style = rule.style;
      if (style.indexOf(prop) != 0 || rule.context && !context.matchesContext(rule.context) ||
      // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      style.length > prop.length && (style.charCodeAt(prop.length) != 61 || style.slice(prop.length + 1) != value)) continue;
      if (rule.getAttrs) {
        let result = rule.getAttrs(value);
        if (result === false) continue;
        rule.attrs = result || void 0;
      }
      return rule;
    }
  }
  /**
  @internal
  */
  static schemaRules(schema) {
    let result = [];
    function insert(rule) {
      let priority = rule.priority == null ? 50 : rule.priority,
        i = 0;
      for (; i < result.length; i++) {
        let next = result[i],
          nextPriority = next.priority == null ? 50 : next.priority;
        if (nextPriority < priority) break;
      }
      result.splice(i, 0, rule);
    }
    for (let name in schema.marks) {
      let rules = schema.marks[name].spec.parseDOM;
      if (rules) rules.forEach(rule => {
        insert(rule = copy(rule));
        if (!(rule.mark || rule.ignore || rule.clearMark)) rule.mark = name;
      });
    }
    for (let name in schema.nodes) {
      let rules = schema.nodes[name].spec.parseDOM;
      if (rules) rules.forEach(rule => {
        insert(rule = copy(rule));
        if (!(rule.node || rule.ignore || rule.mark)) rule.node = name;
      });
    }
    return result;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(schema) {
    return schema.cached.domParser || (schema.cached.domParser = new _DOMParser(schema, _DOMParser.schemaRules(schema)));
  }
};
var blockTags = {
  address: true,
  article: true,
  aside: true,
  blockquote: true,
  canvas: true,
  dd: true,
  div: true,
  dl: true,
  fieldset: true,
  figcaption: true,
  figure: true,
  footer: true,
  form: true,
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  h6: true,
  header: true,
  hgroup: true,
  hr: true,
  li: true,
  noscript: true,
  ol: true,
  output: true,
  p: true,
  pre: true,
  section: true,
  table: true,
  tfoot: true,
  ul: true
};
var ignoreTags = {
  head: true,
  noscript: true,
  object: true,
  script: true,
  style: true,
  title: true
};
var listTags = {
  ol: true,
  ul: true
};
var OPT_PRESERVE_WS = 1,
  OPT_PRESERVE_WS_FULL = 2,
  OPT_OPEN_LEFT = 4;
function wsOptionsFor(type, preserveWhitespace, base) {
  if (preserveWhitespace != null) return (preserveWhitespace ? OPT_PRESERVE_WS : 0) | (preserveWhitespace === "full" ? OPT_PRESERVE_WS_FULL : 0);
  return type && type.whitespace == "pre" ? OPT_PRESERVE_WS | OPT_PRESERVE_WS_FULL : base & ~OPT_OPEN_LEFT;
}
var NodeContext = class {
  constructor(type, attrs, marks, solid, match, options) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.solid = solid;
    this.options = options;
    this.content = [];
    this.activeMarks = Mark.none;
    this.match = match || (options & OPT_OPEN_LEFT ? null : type.contentMatch);
  }
  findWrapping(node) {
    if (!this.match) {
      if (!this.type) return [];
      let fill = this.type.contentMatch.fillBefore(Fragment.from(node));
      if (fill) {
        this.match = this.type.contentMatch.matchFragment(fill);
      } else {
        let start = this.type.contentMatch,
          wrap;
        if (wrap = start.findWrapping(node.type)) {
          this.match = start;
          return wrap;
        } else {
          return null;
        }
      }
    }
    return this.match.findWrapping(node.type);
  }
  finish(openEnd) {
    if (!(this.options & OPT_PRESERVE_WS)) {
      let last = this.content[this.content.length - 1],
        m;
      if (last && last.isText && (m = /[ \t\r\n\u000c]+$/.exec(last.text))) {
        let text = last;
        if (last.text.length == m[0].length) this.content.pop();else this.content[this.content.length - 1] = text.withText(text.text.slice(0, text.text.length - m[0].length));
      }
    }
    let content = Fragment.from(this.content);
    if (!openEnd && this.match) content = content.append(this.match.fillBefore(Fragment.empty, true));
    return this.type ? this.type.create(this.attrs, content, this.marks) : content;
  }
  inlineContext(node) {
    if (this.type) return this.type.inlineContent;
    if (this.content.length) return this.content[0].isInline;
    return node.parentNode && !blockTags.hasOwnProperty(node.parentNode.nodeName.toLowerCase());
  }
};
var ParseContext = class {
  constructor(parser, options, isOpen) {
    this.parser = parser;
    this.options = options;
    this.isOpen = isOpen;
    this.open = 0;
    this.localPreserveWS = false;
    let topNode = options.topNode,
      topContext;
    let topOptions = wsOptionsFor(null, options.preserveWhitespace, 0) | (isOpen ? OPT_OPEN_LEFT : 0);
    if (topNode) topContext = new NodeContext(topNode.type, topNode.attrs, Mark.none, true, options.topMatch || topNode.type.contentMatch, topOptions);else if (isOpen) topContext = new NodeContext(null, null, Mark.none, true, null, topOptions);else topContext = new NodeContext(parser.schema.topNodeType, null, Mark.none, true, null, topOptions);
    this.nodes = [topContext];
    this.find = options.findPositions;
    this.needsBlock = false;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(dom, marks) {
    if (dom.nodeType == 3) this.addTextNode(dom, marks);else if (dom.nodeType == 1) this.addElement(dom, marks);
  }
  addTextNode(dom, marks) {
    let value = dom.nodeValue;
    let top = this.top,
      preserveWS = top.options & OPT_PRESERVE_WS_FULL ? "full" : this.localPreserveWS || (top.options & OPT_PRESERVE_WS) > 0;
    if (preserveWS === "full" || top.inlineContext(dom) || /[^ \t\r\n\u000c]/.test(value)) {
      if (!preserveWS) {
        value = value.replace(/[ \t\r\n\u000c]+/g, " ");
        if (/^[ \t\r\n\u000c]/.test(value) && this.open == this.nodes.length - 1) {
          let nodeBefore = top.content[top.content.length - 1];
          let domNodeBefore = dom.previousSibling;
          if (!nodeBefore || domNodeBefore && domNodeBefore.nodeName == "BR" || nodeBefore.isText && /[ \t\r\n\u000c]$/.test(nodeBefore.text)) value = value.slice(1);
        }
      } else if (preserveWS !== "full") {
        value = value.replace(/\r?\n|\r/g, " ");
      } else {
        value = value.replace(/\r\n?/g, "\n");
      }
      if (value) this.insertNode(this.parser.schema.text(value), marks, !/\S/.test(value));
      this.findInText(dom);
    } else {
      this.findInside(dom);
    }
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(dom, marks, matchAfter) {
    let outerWS = this.localPreserveWS,
      top = this.top;
    if (dom.tagName == "PRE" || /pre/.test(dom.style && dom.style.whiteSpace)) this.localPreserveWS = true;
    let name = dom.nodeName.toLowerCase(),
      ruleID;
    if (listTags.hasOwnProperty(name) && this.parser.normalizeLists) normalizeList(dom);
    let rule = this.options.ruleFromNode && this.options.ruleFromNode(dom) || (ruleID = this.parser.matchTag(dom, this, matchAfter));
    out: if (rule ? rule.ignore : ignoreTags.hasOwnProperty(name)) {
      this.findInside(dom);
      this.ignoreFallback(dom, marks);
    } else if (!rule || rule.skip || rule.closeParent) {
      if (rule && rule.closeParent) this.open = Math.max(0, this.open - 1);else if (rule && rule.skip.nodeType) dom = rule.skip;
      let sync,
        oldNeedsBlock = this.needsBlock;
      if (blockTags.hasOwnProperty(name)) {
        if (top.content.length && top.content[0].isInline && this.open) {
          this.open--;
          top = this.top;
        }
        sync = true;
        if (!top.type) this.needsBlock = true;
      } else if (!dom.firstChild) {
        this.leafFallback(dom, marks);
        break out;
      }
      let innerMarks = rule && rule.skip ? marks : this.readStyles(dom, marks);
      if (innerMarks) this.addAll(dom, innerMarks);
      if (sync) this.sync(top);
      this.needsBlock = oldNeedsBlock;
    } else {
      let innerMarks = this.readStyles(dom, marks);
      if (innerMarks) this.addElementByRule(dom, rule, innerMarks, rule.consuming === false ? ruleID : void 0);
    }
    this.localPreserveWS = outerWS;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(dom, marks) {
    if (dom.nodeName == "BR" && this.top.type && this.top.type.inlineContent) this.addTextNode(dom.ownerDocument.createTextNode("\n"), marks);
  }
  // Called for ignored nodes
  ignoreFallback(dom, marks) {
    if (dom.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent)) this.findPlace(this.parser.schema.text("-"), marks, true);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(dom, marks) {
    let styles = dom.style;
    if (styles && styles.length) for (let i = 0; i < this.parser.matchedStyles.length; i++) {
      let name = this.parser.matchedStyles[i],
        value = styles.getPropertyValue(name);
      if (value) for (let after = void 0;;) {
        let rule = this.parser.matchStyle(name, value, this, after);
        if (!rule) break;
        if (rule.ignore) return null;
        if (rule.clearMark) marks = marks.filter(m => !rule.clearMark(m));else marks = marks.concat(this.parser.schema.marks[rule.mark].create(rule.attrs));
        if (rule.consuming === false) after = rule;else break;
      }
    }
    return marks;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(dom, rule, marks, continueAfter) {
    let sync, nodeType;
    if (rule.node) {
      nodeType = this.parser.schema.nodes[rule.node];
      if (!nodeType.isLeaf) {
        let inner = this.enter(nodeType, rule.attrs || null, marks, rule.preserveWhitespace);
        if (inner) {
          sync = true;
          marks = inner;
        }
      } else if (!this.insertNode(nodeType.create(rule.attrs), marks, dom.nodeName == "BR")) {
        this.leafFallback(dom, marks);
      }
    } else {
      let markType = this.parser.schema.marks[rule.mark];
      marks = marks.concat(markType.create(rule.attrs));
    }
    let startIn = this.top;
    if (nodeType && nodeType.isLeaf) {
      this.findInside(dom);
    } else if (continueAfter) {
      this.addElement(dom, marks, continueAfter);
    } else if (rule.getContent) {
      this.findInside(dom);
      rule.getContent(dom, this.parser.schema).forEach(node => this.insertNode(node, marks, false));
    } else {
      let contentDOM = dom;
      if (typeof rule.contentElement == "string") contentDOM = dom.querySelector(rule.contentElement);else if (typeof rule.contentElement == "function") contentDOM = rule.contentElement(dom);else if (rule.contentElement) contentDOM = rule.contentElement;
      this.findAround(dom, contentDOM, true);
      this.addAll(contentDOM, marks);
      this.findAround(dom, contentDOM, false);
    }
    if (sync && this.sync(startIn)) this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(parent, marks, startIndex, endIndex) {
    let index = startIndex || 0;
    for (let dom = startIndex ? parent.childNodes[startIndex] : parent.firstChild, end = endIndex == null ? null : parent.childNodes[endIndex]; dom != end; dom = dom.nextSibling, ++index) {
      this.findAtPoint(parent, index);
      this.addDOM(dom, marks);
    }
    this.findAtPoint(parent, index);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(node, marks, cautious) {
    let route, sync;
    for (let depth = this.open, penalty = 0; depth >= 0; depth--) {
      let cx = this.nodes[depth];
      let found2 = cx.findWrapping(node);
      if (found2 && (!route || route.length > found2.length + penalty)) {
        route = found2;
        sync = cx;
        if (!found2.length) break;
      }
      if (cx.solid) {
        if (cautious) break;
        penalty += 2;
      }
    }
    if (!route) return null;
    this.sync(sync);
    for (let i = 0; i < route.length; i++) marks = this.enterInner(route[i], null, marks, false);
    return marks;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(node, marks, cautious) {
    if (node.isInline && this.needsBlock && !this.top.type) {
      let block = this.textblockFromContext();
      if (block) marks = this.enterInner(block, null, marks);
    }
    let innerMarks = this.findPlace(node, marks, cautious);
    if (innerMarks) {
      this.closeExtra();
      let top = this.top;
      if (top.match) top.match = top.match.matchType(node.type);
      let nodeMarks = Mark.none;
      for (let m of innerMarks.concat(node.marks)) if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, node.type)) nodeMarks = m.addToSet(nodeMarks);
      top.content.push(node.mark(nodeMarks));
      return true;
    }
    return false;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(type, attrs, marks, preserveWS) {
    let innerMarks = this.findPlace(type.create(attrs), marks, false);
    if (innerMarks) innerMarks = this.enterInner(type, attrs, marks, true, preserveWS);
    return innerMarks;
  }
  // Open a node of the given type
  enterInner(type, attrs, marks, solid = false, preserveWS) {
    this.closeExtra();
    let top = this.top;
    top.match = top.match && top.match.matchType(type);
    let options = wsOptionsFor(type, preserveWS, top.options);
    if (top.options & OPT_OPEN_LEFT && top.content.length == 0) options |= OPT_OPEN_LEFT;
    let applyMarks = Mark.none;
    marks = marks.filter(m => {
      if (top.type ? top.type.allowsMarkType(m.type) : markMayApply(m.type, type)) {
        applyMarks = m.addToSet(applyMarks);
        return false;
      }
      return true;
    });
    this.nodes.push(new NodeContext(type, attrs, applyMarks, solid, null, options));
    this.open++;
    return marks;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(openEnd = false) {
    let i = this.nodes.length - 1;
    if (i > this.open) {
      for (; i > this.open; i--) this.nodes[i - 1].content.push(this.nodes[i].finish(openEnd));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    this.open = 0;
    this.closeExtra(this.isOpen);
    return this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(to) {
    for (let i = this.open; i >= 0; i--) {
      if (this.nodes[i] == to) {
        this.open = i;
        return true;
      } else if (this.localPreserveWS) {
        this.nodes[i].options |= OPT_PRESERVE_WS;
      }
    }
    return false;
  }
  get currentPos() {
    this.closeExtra();
    let pos = 0;
    for (let i = this.open; i >= 0; i--) {
      let content = this.nodes[i].content;
      for (let j = content.length - 1; j >= 0; j--) pos += content[j].nodeSize;
      if (i) pos++;
    }
    return pos;
  }
  findAtPoint(parent, offset) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == parent && this.find[i].offset == offset) this.find[i].pos = this.currentPos;
    }
  }
  findInside(parent) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) this.find[i].pos = this.currentPos;
    }
  }
  findAround(parent, content, before) {
    if (parent != content && this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].pos == null && parent.nodeType == 1 && parent.contains(this.find[i].node)) {
        let pos = content.compareDocumentPosition(this.find[i].node);
        if (pos & (before ? 2 : 4)) this.find[i].pos = this.currentPos;
      }
    }
  }
  findInText(textNode) {
    if (this.find) for (let i = 0; i < this.find.length; i++) {
      if (this.find[i].node == textNode) this.find[i].pos = this.currentPos - (textNode.nodeValue.length - this.find[i].offset);
    }
  }
  // Determines whether the given context string matches this context.
  matchesContext(context) {
    if (context.indexOf("|") > -1) return context.split(/\s*\|\s*/).some(this.matchesContext, this);
    let parts = context.split("/");
    let option = this.options.context;
    let useRoot = !this.isOpen && (!option || option.parent.type == this.nodes[0].type);
    let minDepth = -(option ? option.depth + 1 : 0) + (useRoot ? 0 : 1);
    let match = (i, depth) => {
      for (; i >= 0; i--) {
        let part = parts[i];
        if (part == "") {
          if (i == parts.length - 1 || i == 0) continue;
          for (; depth >= minDepth; depth--) if (match(i - 1, depth)) return true;
          return false;
        } else {
          let next = depth > 0 || depth == 0 && useRoot ? this.nodes[depth].type : option && depth >= minDepth ? option.node(depth - minDepth).type : null;
          if (!next || next.name != part && !next.isInGroup(part)) return false;
          depth--;
        }
      }
      return true;
    };
    return match(parts.length - 1, this.open);
  }
  textblockFromContext() {
    let $context = this.options.context;
    if ($context) for (let d = $context.depth; d >= 0; d--) {
      let deflt = $context.node(d).contentMatchAt($context.indexAfter(d)).defaultType;
      if (deflt && deflt.isTextblock && deflt.defaultAttrs) return deflt;
    }
    for (let name in this.parser.schema.nodes) {
      let type = this.parser.schema.nodes[name];
      if (type.isTextblock && type.defaultAttrs) return type;
    }
  }
};
function normalizeList(dom) {
  for (let child = dom.firstChild, prevItem = null; child; child = child.nextSibling) {
    let name = child.nodeType == 1 ? child.nodeName.toLowerCase() : null;
    if (name && listTags.hasOwnProperty(name) && prevItem) {
      prevItem.appendChild(child);
      child = prevItem;
    } else if (name == "li") {
      prevItem = child;
    } else if (name) {
      prevItem = null;
    }
  }
}
function matches(dom, selector) {
  return (dom.matches || dom.msMatchesSelector || dom.webkitMatchesSelector || dom.mozMatchesSelector).call(dom, selector);
}
function copy(obj) {
  let copy2 = {};
  for (let prop in obj) copy2[prop] = obj[prop];
  return copy2;
}
function markMayApply(markType, nodeType) {
  let nodes = nodeType.schema.nodes;
  for (let name in nodes) {
    let parent = nodes[name];
    if (!parent.allowsMarkType(markType)) continue;
    let seen = [],
      scan = match => {
        seen.push(match);
        for (let i = 0; i < match.edgeCount; i++) {
          let {
            type,
            next
          } = match.edge(i);
          if (type == nodeType) return true;
          if (seen.indexOf(next) < 0 && scan(next)) return true;
        }
      };
    if (scan(parent.contentMatch)) return true;
  }
}
var DOMSerializer = class _DOMSerializer {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(nodes, marks) {
    this.nodes = nodes;
    this.marks = marks;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(fragment, options = {}, target) {
    if (!target) target = doc(options).createDocumentFragment();
    let top = target,
      active = [];
    fragment.forEach(node => {
      if (active.length || node.marks.length) {
        let keep = 0,
          rendered = 0;
        while (keep < active.length && rendered < node.marks.length) {
          let next = node.marks[rendered];
          if (!this.marks[next.type.name]) {
            rendered++;
            continue;
          }
          if (!next.eq(active[keep][0]) || next.type.spec.spanning === false) break;
          keep++;
          rendered++;
        }
        while (keep < active.length) top = active.pop()[1];
        while (rendered < node.marks.length) {
          let add = node.marks[rendered++];
          let markDOM = this.serializeMark(add, node.isInline, options);
          if (markDOM) {
            active.push([add, top]);
            top.appendChild(markDOM.dom);
            top = markDOM.contentDOM || markDOM.dom;
          }
        }
      }
      top.appendChild(this.serializeNodeInner(node, options));
    });
    return target;
  }
  /**
  @internal
  */
  serializeNodeInner(node, options) {
    let {
      dom,
      contentDOM
    } = renderSpec(doc(options), this.nodes[node.type.name](node), null, node.attrs);
    if (contentDOM) {
      if (node.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(node.content, options, contentDOM);
    }
    return dom;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(node, options = {}) {
    let dom = this.serializeNodeInner(node, options);
    for (let i = node.marks.length - 1; i >= 0; i--) {
      let wrap = this.serializeMark(node.marks[i], node.isInline, options);
      if (wrap) {
        (wrap.contentDOM || wrap.dom).appendChild(dom);
        dom = wrap.dom;
      }
    }
    return dom;
  }
  /**
  @internal
  */
  serializeMark(mark, inline, options = {}) {
    let toDOM = this.marks[mark.type.name];
    return toDOM && renderSpec(doc(options), toDOM(mark, inline), null, mark.attrs);
  }
  static renderSpec(doc2, structure, xmlNS = null, blockArraysIn) {
    return renderSpec(doc2, structure, xmlNS, blockArraysIn);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(schema) {
    return schema.cached.domSerializer || (schema.cached.domSerializer = new _DOMSerializer(this.nodesFromSchema(schema), this.marksFromSchema(schema)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(schema) {
    let result = gatherToDOM(schema.nodes);
    if (!result.text) result.text = node => node.text;
    return result;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(schema) {
    return gatherToDOM(schema.marks);
  }
};
function gatherToDOM(obj) {
  let result = {};
  for (let name in obj) {
    let toDOM = obj[name].spec.toDOM;
    if (toDOM) result[name] = toDOM;
  }
  return result;
}
function doc(options) {
  return options.document || window.document;
}
var suspiciousAttributeCache = /* @__PURE__ */new WeakMap();
function suspiciousAttributes(attrs) {
  let value = suspiciousAttributeCache.get(attrs);
  if (value === void 0) suspiciousAttributeCache.set(attrs, value = suspiciousAttributesInner(attrs));
  return value;
}
function suspiciousAttributesInner(attrs) {
  let result = null;
  function scan(value) {
    if (value && typeof value == "object") {
      if (Array.isArray(value)) {
        if (typeof value[0] == "string") {
          if (!result) result = [];
          result.push(value);
        } else {
          for (let i = 0; i < value.length; i++) scan(value[i]);
        }
      } else {
        for (let prop in value) scan(value[prop]);
      }
    }
  }
  scan(attrs);
  return result;
}
function renderSpec(doc2, structure, xmlNS, blockArraysIn) {
  if (typeof structure == "string") return {
    dom: doc2.createTextNode(structure)
  };
  if (structure.nodeType != null) return {
    dom: structure
  };
  if (structure.dom && structure.dom.nodeType != null) return structure;
  let tagName = structure[0],
    suspicious;
  if (typeof tagName != "string") throw new RangeError("Invalid array passed to renderSpec");
  if (blockArraysIn && (suspicious = suspiciousAttributes(blockArraysIn)) && suspicious.indexOf(structure) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let space = tagName.indexOf(" ");
  if (space > 0) {
    xmlNS = tagName.slice(0, space);
    tagName = tagName.slice(space + 1);
  }
  let contentDOM;
  let dom = xmlNS ? doc2.createElementNS(xmlNS, tagName) : doc2.createElement(tagName);
  let attrs = structure[1],
    start = 1;
  if (attrs && typeof attrs == "object" && attrs.nodeType == null && !Array.isArray(attrs)) {
    start = 2;
    for (let name in attrs) if (attrs[name] != null) {
      let space2 = name.indexOf(" ");
      if (space2 > 0) dom.setAttributeNS(name.slice(0, space2), name.slice(space2 + 1), attrs[name]);else if (name == "style" && dom.style) dom.style.cssText = attrs[name];else dom.setAttribute(name, attrs[name]);
    }
  }
  for (let i = start; i < structure.length; i++) {
    let child = structure[i];
    if (child === 0) {
      if (i < structure.length - 1 || i > start) throw new RangeError("Content hole must be the only child of its parent node");
      return {
        dom,
        contentDOM: dom
      };
    } else {
      let {
        dom: inner,
        contentDOM: innerContent
      } = renderSpec(doc2, child, xmlNS, blockArraysIn);
      dom.appendChild(inner);
      if (innerContent) {
        if (contentDOM) throw new RangeError("Multiple content holes");
        contentDOM = innerContent;
      }
    }
  }
  return {
    dom,
    contentDOM
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLW1vZGVsLjEuMjUuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1tb2RlbC9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX21vZGVsXzFfMjVfM19leHBvcnRzIiwiX19leHBvcnQiLCJDb250ZW50TWF0Y2giLCJET01QYXJzZXIiLCJET01TZXJpYWxpemVyIiwiRnJhZ21lbnQiLCJNYXJrIiwiTWFya1R5cGUiLCJOb2RlIiwiTm9kZVJhbmdlIiwiTm9kZVR5cGUiLCJSZXBsYWNlRXJyb3IiLCJSZXNvbHZlZFBvcyIsIlNjaGVtYSIsIlNsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9vcmRlcmVkbWFwIiwiX190b0VTTSIsInJlcXVpcmUiLCJmaW5kRGlmZlN0YXJ0IiwiYSIsImIiLCJwb3MiLCJpIiwiY2hpbGRDb3VudCIsImNoaWxkQSIsImNoaWxkIiwiY2hpbGRCIiwibm9kZVNpemUiLCJzYW1lTWFya3VwIiwiaXNUZXh0IiwidGV4dCIsImoiLCJjb250ZW50Iiwic2l6ZSIsImlubmVyIiwiZmluZERpZmZFbmQiLCJwb3NBIiwicG9zQiIsImlBIiwiaUIiLCJzYW1lIiwibWluU2l6ZSIsIk1hdGgiLCJtaW4iLCJsZW5ndGgiLCJfRnJhZ21lbnQiLCJjb25zdHJ1Y3RvciIsIm5vZGVzQmV0d2VlbiIsImZyb20iLCJ0byIsImYiLCJub2RlU3RhcnQiLCJwYXJlbnQiLCJlbmQiLCJzdGFydCIsIm1heCIsImRlc2NlbmRhbnRzIiwidGV4dEJldHdlZW4iLCJibG9ja1NlcGFyYXRvciIsImxlYWZUZXh0IiwiZmlyc3QiLCJub2RlIiwibm9kZVRleHQiLCJzbGljZSIsImlzTGVhZiIsInR5cGUiLCJzcGVjIiwiaXNCbG9jayIsImlzVGV4dGJsb2NrIiwiYXBwZW5kIiwib3RoZXIiLCJsYXN0IiwibGFzdENoaWxkIiwiZmlyc3RDaGlsZCIsIndpdGhUZXh0IiwicHVzaCIsImN1dCIsInJlc3VsdCIsImN1dEJ5SW5kZXgiLCJlbXB0eSIsInJlcGxhY2VDaGlsZCIsImluZGV4IiwiY3VycmVudCIsImNvcHkyIiwiYWRkVG9TdGFydCIsImNvbmNhdCIsImFkZFRvRW5kIiwiZXEiLCJmb3VuZDIiLCJSYW5nZUVycm9yIiwibWF5YmVDaGlsZCIsImZvckVhY2giLCJwIiwib3RoZXJQb3MiLCJmaW5kSW5kZXgiLCJyZXRJbmRleCIsImN1clBvcyIsImN1ciIsInRvU3RyaW5nIiwidG9TdHJpbmdJbm5lciIsImpvaW4iLCJ0b0pTT04iLCJtYXAiLCJuIiwiZnJvbUpTT04iLCJzY2hlbWEiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIm5vZGVGcm9tSlNPTiIsImZyb21BcnJheSIsImFycmF5Iiwiam9pbmVkIiwibm9kZXMiLCJhdHRycyIsImZvdW5kIiwib2Zmc2V0IiwiY29tcGFyZURlZXAiLCJfTWFyayIsImFkZFRvU2V0Iiwic2V0IiwicGxhY2VkIiwiZXhjbHVkZXMiLCJyYW5rIiwicmVtb3ZlRnJvbVNldCIsImlzSW5TZXQiLCJvYmoiLCJuYW1lIiwiXyIsImpzb24iLCJtYXJrcyIsIm1hcmsiLCJjcmVhdGUiLCJjaGVja0F0dHJzIiwic2FtZVNldCIsInNldEZyb20iLCJub25lIiwic29ydCIsIkVycm9yIiwiX1NsaWNlIiwib3BlblN0YXJ0Iiwib3BlbkVuZCIsImluc2VydEF0IiwiZnJhZ21lbnQiLCJpbnNlcnRJbnRvIiwicmVtb3ZlQmV0d2VlbiIsInJlbW92ZVJhbmdlIiwibWF4T3BlbiIsIm9wZW5Jc29sYXRpbmciLCJpc29sYXRpbmciLCJpbmRleFRvIiwib2Zmc2V0VG8iLCJjb3B5IiwiZGlzdCIsImluc2VydCIsImNhblJlcGxhY2UiLCJyZXBsYWNlIiwiJGZyb20iLCIkdG8iLCJkZXB0aCIsInJlcGxhY2VPdXRlciIsImNsb3NlIiwicmVwbGFjZVR3b1dheSIsInBhcmVudE9mZnNldCIsInByZXBhcmVTbGljZUZvclJlcGxhY2UiLCJyZXBsYWNlVGhyZWVXYXkiLCJjaGVja0pvaW4iLCJtYWluIiwic3ViIiwiY29tcGF0aWJsZUNvbnRlbnQiLCJqb2luYWJsZSIsIiRiZWZvcmUiLCIkYWZ0ZXIiLCJhZGROb2RlIiwidGFyZ2V0IiwiYWRkUmFuZ2UiLCIkc3RhcnQiLCIkZW5kIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwidGV4dE9mZnNldCIsIm5vZGVBZnRlciIsIm5vZGVCZWZvcmUiLCJjaGVja0NvbnRlbnQiLCIkYWxvbmciLCJleHRyYSIsInJlc29sdmVOb0NhY2hlIiwiX1Jlc29sdmVkUG9zIiwicGF0aCIsInJlc29sdmVEZXB0aCIsInZhbCIsImRvYyIsImluZGV4QWZ0ZXIiLCJiZWZvcmUiLCJhZnRlciIsImRPZmYiLCJwb3NBdEluZGV4IiwidG1wIiwiaW5jbHVzaXZlIiwibWFya3NBY3Jvc3MiLCJpc0lubGluZSIsIm5leHQiLCJzaGFyZWREZXB0aCIsImJsb2NrUmFuZ2UiLCJwcmVkIiwiZCIsImlubGluZUNvbnRlbnQiLCJzYW1lUGFyZW50Iiwic3RyIiwicmVzb2x2ZSIsImRvYzIiLCJyZW0iLCJyZXNvbHZlQ2FjaGVkIiwiY2FjaGUiLCJyZXNvbHZlQ2FjaGUiLCJnZXQiLCJlbHRzIiwiZWx0IiwiUmVzb2x2ZUNhY2hlIiwicmVzb2x2ZUNhY2hlU2l6ZSIsIldlYWtNYXAiLCJlbXB0eUF0dHJzIiwiT2JqZWN0IiwiX05vZGUiLCJjaGlsZHJlbiIsInN0YXJ0UG9zIiwidGV4dENvbnRlbnQiLCJoYXNNYXJrdXAiLCJkZWZhdWx0QXR0cnMiLCJpbmNsdWRlUGFyZW50cyIsIm5vZGVBdCIsImNoaWxkQWZ0ZXIiLCJjaGlsZEJlZm9yZSIsInJhbmdlSGFzTWFyayIsImlzQXRvbSIsInRvRGVidWdTdHJpbmciLCJ3cmFwTWFya3MiLCJjb250ZW50TWF0Y2hBdCIsIm1hdGNoIiwiY29udGVudE1hdGNoIiwibWF0Y2hGcmFnbWVudCIsInJlcGxhY2VtZW50Iiwib25lIiwidHdvIiwidmFsaWRFbmQiLCJhbGxvd3NNYXJrcyIsImNhblJlcGxhY2VXaXRoIiwibWF0Y2hUeXBlIiwiY2FuQXBwZW5kIiwiY2hlY2siLCJtIiwibWFya0Zyb21KU09OIiwibm9kZVR5cGUiLCJwcm90b3R5cGUiLCJUZXh0Tm9kZSIsIl9UZXh0Tm9kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiYXNlIiwiX0NvbnRlbnRNYXRjaCIsIndyYXBDYWNoZSIsInBhcnNlIiwic3RyaW5nIiwibm9kZVR5cGVzIiwic3RyZWFtIiwiVG9rZW5TdHJlYW0iLCJleHByIiwicGFyc2VFeHByIiwiZXJyIiwiZGZhIiwibmZhIiwiY2hlY2tGb3JEZWFkRW5kcyIsImZyYWciLCJkZWZhdWx0VHlwZSIsImhhc1JlcXVpcmVkQXR0cnMiLCJjb21wYXRpYmxlIiwiZmlsbEJlZm9yZSIsInRvRW5kIiwic2VlbiIsInNlYXJjaCIsInR5cGVzIiwiZmluaXNoZWQiLCJ0cCIsImNyZWF0ZUFuZEZpbGwiLCJpbmRleE9mIiwiZmluZFdyYXBwaW5nIiwiY29tcHV0ZWQiLCJjb21wdXRlV3JhcHBpbmciLCJhY3RpdmUiLCJ2aWEiLCJzaGlmdCIsInJldmVyc2UiLCJlZGdlQ291bnQiLCJlZGdlIiwic2NhbiIsIm91dCIsImkyIiwiaW5saW5lIiwidG9rZW5zIiwic3BsaXQiLCJwb3AiLCJlYXQiLCJ0b2siLCJTeW50YXhFcnJvciIsImV4cHJzIiwicGFyc2VFeHByU2VxIiwicGFyc2VFeHByU3Vic2NyaXB0IiwicGFyc2VFeHByQXRvbSIsInBhcnNlRXhwclJhbmdlIiwicGFyc2VOdW0iLCJ0ZXN0IiwiTnVtYmVyIiwicmVzb2x2ZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUyIiwiaXNJbkdyb3VwIiwibmZhMiIsImNvbm5lY3QiLCJjb21waWxlIiwidGVybSIsImVkZ2UyIiwiZWRnZXMiLCJleHByMiIsInJlZHVjZSIsImV4cHIzIiwibG9vcCIsImNtcCIsIm51bGxGcm9tIiwibm9kZTIiLCJsYWJlbGVkIiwiZXhwbG9yZSIsInN0YXRlcyIsInN0YXRlIiwic3RhdGVzMiIsIndvcmsiLCJkZWFkIiwiZGVmYXVsdHMiLCJhdHRyTmFtZSIsImF0dHIiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdCIsImNvbXB1dGVBdHRycyIsImJ1aWx0IiwiZ2l2ZW4iLCJ2YWx1ZXMiLCJuYW1lMiIsInZhbGlkYXRlIiwiaW5pdEF0dHJzIiwiQXR0cmlidXRlIiwiX05vZGVUeXBlIiwibWFya1NldCIsImdyb3VwcyIsImdyb3VwIiwiYXRvbSIsIndoaXRlc3BhY2UiLCJjb2RlIiwiaXNSZXF1aXJlZCIsImNyZWF0ZUNoZWNrZWQiLCJtYXRjaGVkIiwidmFsaWRDb250ZW50IiwiYWxsb3dzTWFya1R5cGUiLCJtYXJrVHlwZSIsImFsbG93ZWRNYXJrcyIsInRvcFR5cGUiLCJ0b3BOb2RlIiwidmFsaWRhdGVUeXBlIiwib3B0aW9ucyIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9NYXJrVHlwZSIsImV4Y2x1ZGVkIiwiaW5zdGFuY2UiLCJsaW5lYnJlYWtSZXBsYWNlbWVudCIsImNhY2hlZCIsImluc3RhbmNlU3BlYyIsInByb3AiLCJjb250ZW50RXhwckNhY2hlIiwiY29udGVudEV4cHIiLCJtYXJrRXhwciIsImdhdGhlck1hcmtzIiwiZXhjbCIsInRvcE5vZGVUeXBlIiwid3JhcHBpbmdzIiwib2siLCJtYXJrMiIsImlzVGFnUnVsZSIsInJ1bGUiLCJ0YWciLCJpc1N0eWxlUnVsZSIsInN0eWxlIiwiX0RPTVBhcnNlciIsInJ1bGVzIiwidGFncyIsInN0eWxlcyIsIm1hdGNoZWRTdHlsZXMiLCJleGVjIiwibm9ybWFsaXplTGlzdHMiLCJzb21lIiwiciIsImRvbSIsImNvbnRleHQiLCJQYXJzZUNvbnRleHQiLCJhZGRBbGwiLCJmaW5pc2giLCJwYXJzZVNsaWNlIiwibWF0Y2hUYWciLCJtYXRjaGVzIiwibmFtZXNwYWNlIiwibmFtZXNwYWNlVVJJIiwibWF0Y2hlc0NvbnRleHQiLCJnZXRBdHRycyIsIm1hdGNoU3R5bGUiLCJjaGFyQ29kZUF0Iiwic2NoZW1hUnVsZXMiLCJwcmlvcml0eSIsIm5leHRQcmlvcml0eSIsInNwbGljZSIsInBhcnNlRE9NIiwiaWdub3JlIiwiY2xlYXJNYXJrIiwiZnJvbVNjaGVtYSIsImRvbVBhcnNlciIsImJsb2NrVGFncyIsImFkZHJlc3MiLCJhcnRpY2xlIiwiYXNpZGUiLCJibG9ja3F1b3RlIiwiY2FudmFzIiwiZGQiLCJkaXYiLCJkbCIsImZpZWxkc2V0IiwiZmlnY2FwdGlvbiIsImZpZ3VyZSIsImZvb3RlciIsImZvcm0iLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJoZWFkZXIiLCJoZ3JvdXAiLCJociIsImxpIiwibm9zY3JpcHQiLCJvbCIsIm91dHB1dCIsInByZSIsInNlY3Rpb24iLCJ0YWJsZSIsInRmb290IiwidWwiLCJpZ25vcmVUYWdzIiwiaGVhZCIsIm9iamVjdCIsInNjcmlwdCIsInRpdGxlIiwibGlzdFRhZ3MiLCJPUFRfUFJFU0VSVkVfV1MiLCJPUFRfUFJFU0VSVkVfV1NfRlVMTCIsIk9QVF9PUEVOX0xFRlQiLCJ3c09wdGlvbnNGb3IiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJOb2RlQ29udGV4dCIsInNvbGlkIiwiYWN0aXZlTWFya3MiLCJmaWxsIiwid3JhcCIsImlubGluZUNvbnRleHQiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlciIsImlzT3BlbiIsIm9wZW4iLCJsb2NhbFByZXNlcnZlV1MiLCJ0b3BDb250ZXh0IiwidG9wT3B0aW9ucyIsInRvcE1hdGNoIiwiZmluZCIsImZpbmRQb3NpdGlvbnMiLCJuZWVkc0Jsb2NrIiwidG9wIiwiYWRkRE9NIiwiYWRkVGV4dE5vZGUiLCJhZGRFbGVtZW50Iiwibm9kZVZhbHVlIiwicHJlc2VydmVXUyIsImRvbU5vZGVCZWZvcmUiLCJwcmV2aW91c1NpYmxpbmciLCJpbnNlcnROb2RlIiwiZmluZEluVGV4dCIsImZpbmRJbnNpZGUiLCJtYXRjaEFmdGVyIiwib3V0ZXJXUyIsInRhZ05hbWUiLCJ3aGl0ZVNwYWNlIiwicnVsZUlEIiwibm9ybWFsaXplTGlzdCIsInJ1bGVGcm9tTm9kZSIsImlnbm9yZUZhbGxiYWNrIiwic2tpcCIsImNsb3NlUGFyZW50Iiwic3luYyIsIm9sZE5lZWRzQmxvY2siLCJsZWFmRmFsbGJhY2siLCJpbm5lck1hcmtzIiwicmVhZFN0eWxlcyIsImFkZEVsZW1lbnRCeVJ1bGUiLCJjb25zdW1pbmciLCJvd25lckRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJmaW5kUGxhY2UiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZmlsdGVyIiwiY29udGludWVBZnRlciIsImVudGVyIiwic3RhcnRJbiIsImdldENvbnRlbnQiLCJjb250ZW50RE9NIiwiY29udGVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmluZEFyb3VuZCIsImNoaWxkTm9kZXMiLCJuZXh0U2libGluZyIsImZpbmRBdFBvaW50IiwiY2F1dGlvdXMiLCJyb3V0ZSIsInBlbmFsdHkiLCJjeCIsImVudGVySW5uZXIiLCJibG9jayIsInRleHRibG9ja0Zyb21Db250ZXh0IiwiY2xvc2VFeHRyYSIsIm5vZGVNYXJrcyIsIm1hcmtNYXlBcHBseSIsImFwcGx5TWFya3MiLCJ0b3BPcGVuIiwiY3VycmVudFBvcyIsImNvbnRhaW5zIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJ0ZXh0Tm9kZSIsInBhcnRzIiwib3B0aW9uIiwidXNlUm9vdCIsIm1pbkRlcHRoIiwicGFydCIsIiRjb250ZXh0IiwiZGVmbHQiLCJwcmV2SXRlbSIsImFwcGVuZENoaWxkIiwic2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIl9ET01TZXJpYWxpemVyIiwic2VyaWFsaXplRnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwia2VlcCIsInJlbmRlcmVkIiwic3Bhbm5pbmciLCJhZGQiLCJtYXJrRE9NIiwic2VyaWFsaXplTWFyayIsInNlcmlhbGl6ZU5vZGVJbm5lciIsInJlbmRlclNwZWMiLCJzZXJpYWxpemVOb2RlIiwidG9ET00iLCJzdHJ1Y3R1cmUiLCJ4bWxOUyIsImJsb2NrQXJyYXlzSW4iLCJkb21TZXJpYWxpemVyIiwibm9kZXNGcm9tU2NoZW1hIiwibWFya3NGcm9tU2NoZW1hIiwiZ2F0aGVyVG9ET00iLCJkb2N1bWVudCIsIndpbmRvdyIsInN1c3BpY2lvdXNBdHRyaWJ1dGVDYWNoZSIsInN1c3BpY2lvdXNBdHRyaWJ1dGVzIiwic3VzcGljaW91c0F0dHJpYnV0ZXNJbm5lciIsInN1c3BpY2lvdXMiLCJzcGFjZSIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJzcGFjZTIiLCJzZXRBdHRyaWJ1dGVOUyIsImNzc1RleHQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFD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QixNQUFBLEVBQVF0QixDQUFBLElBQUs7SUFDM0MsSUFBSUcsS0FBQSxHQUFRaWlCLFNBQUEsQ0FBVXBpQixDQUFDO0lBQ3ZCLElBQUlHLEtBQUEsS0FBVSxHQUFHO01BQ2IsSUFBSUgsQ0FBQSxHQUFJb2lCLFNBQUEsQ0FBVTlnQixNQUFBLEdBQVMsS0FBS3RCLENBQUEsR0FBSWdDLEtBQUEsRUFDaEMsTUFBTSxJQUFJbUMsVUFBQSxDQUFXLHdEQUF3RDtNQUNqRixPQUFPO1FBQUVzVCxHQUFBO1FBQUswSCxVQUFBLEVBQVkxSDtNQUFJO0lBQ2xDLE9BQ0s7TUFDRCxJQUFJO1FBQUVBLEdBQUEsRUFBSzdXLEtBQUE7UUFBT3VlLFVBQUEsRUFBWXFFO01BQWEsSUFBSXZCLFVBQUEsQ0FBV3JXLElBQUEsRUFBS3pMLEtBQUEsRUFBT2tpQixLQUFBLEVBQU9DLGFBQWE7TUFDMUY3SyxHQUFBLENBQUl5SixXQUFBLENBQVl0Z0IsS0FBSztNQUNyQixJQUFJNGlCLFlBQUEsRUFBYztRQUNkLElBQUlyRSxVQUFBLEVBQ0EsTUFBTSxJQUFJaGIsVUFBQSxDQUFXLHdCQUF3QjtRQUNqRGdiLFVBQUEsR0FBYXFFLFlBQUE7TUFDakI7SUFDSjtFQUNKO0VBQ0EsT0FBTztJQUFFL0wsR0FBQTtJQUFLMEg7RUFBVztBQUM3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=