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

// .beyond/uimport/prosemirror-model.1.25.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1tb2RlbC4xLjI1LjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItbW9kZWwvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9tb2RlbF8xXzI1XzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ29udGVudE1hdGNoIiwiRE9NUGFyc2VyIiwiRE9NU2VyaWFsaXplciIsIkZyYWdtZW50IiwiTWFyayIsIk1hcmtUeXBlIiwiTm9kZSIsIk5vZGVSYW5nZSIsIk5vZGVUeXBlIiwiUmVwbGFjZUVycm9yIiwiUmVzb2x2ZWRQb3MiLCJTY2hlbWEiLCJTbGljZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfb3JkZXJlZG1hcCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiZmluZERpZmZTdGFydCIsImEiLCJiIiwicG9zIiwiaSIsImNoaWxkQ291bnQiLCJjaGlsZEEiLCJjaGlsZCIsImNoaWxkQiIsIm5vZGVTaXplIiwic2FtZU1hcmt1cCIsImlzVGV4dCIsInRleHQiLCJqIiwiY29udGVudCIsInNpemUiLCJpbm5lciIsImZpbmREaWZmRW5kIiwicG9zQSIsInBvc0IiLCJpQSIsImlCIiwic2FtZSIsIm1pblNpemUiLCJNYXRoIiwibWluIiwibGVuZ3RoIiwiX0ZyYWdtZW50IiwiY29uc3RydWN0b3IiLCJub2Rlc0JldHdlZW4iLCJmcm9tIiwidG8iLCJmIiwibm9kZVN0YXJ0IiwicGFyZW50IiwiZW5kIiwic3RhcnQiLCJtYXgiLCJkZXNjZW5kYW50cyIsInRleHRCZXR3ZWVuIiwiYmxvY2tTZXBhcmF0b3IiLCJsZWFmVGV4dCIsImZpcnN0Iiwibm9kZSIsIm5vZGVUZXh0Iiwic2xpY2UiLCJpc0xlYWYiLCJ0eXBlIiwic3BlYyIsImlzQmxvY2siLCJpc1RleHRibG9jayIsImFwcGVuZCIsIm90aGVyIiwibGFzdCIsImxhc3RDaGlsZCIsImZpcnN0Q2hpbGQiLCJ3aXRoVGV4dCIsInB1c2giLCJjdXQiLCJyZXN1bHQiLCJjdXRCeUluZGV4IiwiZW1wdHkiLCJyZXBsYWNlQ2hpbGQiLCJpbmRleCIsImN1cnJlbnQiLCJjb3B5MiIsImFkZFRvU3RhcnQiLCJjb25jYXQiLCJhZGRUb0VuZCIsImVxIiwiZm91bmQyIiwiUmFuZ2VFcnJvciIsIm1heWJlQ2hpbGQiLCJmb3JFYWNoIiwicCIsIm90aGVyUG9zIiwiZmluZEluZGV4IiwicmV0SW5kZXgiLCJjdXJQb3MiLCJjdXIiLCJ0b1N0cmluZyIsInRvU3RyaW5nSW5uZXIiLCJqb2luIiwidG9KU09OIiwibWFwIiwibiIsImZyb21KU09OIiwic2NoZW1hIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJub2RlRnJvbUpTT04iLCJmcm9tQXJyYXkiLCJhcnJheSIsImpvaW5lZCIsIm5vZGVzIiwiYXR0cnMiLCJmb3VuZCIsIm9mZnNldCIsImNvbXBhcmVEZWVwIiwiX01hcmsiLCJhZGRUb1NldCIsInNldCIsInBsYWNlZCIsImV4Y2x1ZGVzIiwicmFuayIsInJlbW92ZUZyb21TZXQiLCJpc0luU2V0Iiwib2JqIiwibmFtZSIsIl8iLCJqc29uIiwibWFya3MiLCJtYXJrIiwiY3JlYXRlIiwiY2hlY2tBdHRycyIsInNhbWVTZXQiLCJzZXRGcm9tIiwibm9uZSIsInNvcnQiLCJFcnJvciIsIl9TbGljZSIsIm9wZW5TdGFydCIsIm9wZW5FbmQiLCJpbnNlcnRBdCIsImZyYWdtZW50IiwiaW5zZXJ0SW50byIsInJlbW92ZUJldHdlZW4iLCJyZW1vdmVSYW5nZSIsIm1heE9wZW4iLCJvcGVuSXNvbGF0aW5nIiwiaXNvbGF0aW5nIiwiaW5kZXhUbyIsIm9mZnNldFRvIiwiY29weSIsImRpc3QiLCJpbnNlcnQiLCJjYW5SZXBsYWNlIiwicmVwbGFjZSIsIiRmcm9tIiwiJHRvIiwiZGVwdGgiLCJyZXBsYWNlT3V0ZXIiLCJjbG9zZSIsInJlcGxhY2VUd29XYXkiLCJwYXJlbnRPZmZzZXQiLCJwcmVwYXJlU2xpY2VGb3JSZXBsYWNlIiwicmVwbGFjZVRocmVlV2F5IiwiY2hlY2tKb2luIiwibWFpbiIsInN1YiIsImNvbXBhdGlibGVDb250ZW50Iiwiam9pbmFibGUiLCIkYmVmb3JlIiwiJGFmdGVyIiwiYWRkTm9kZSIsInRhcmdldCIsImFkZFJhbmdlIiwiJHN0YXJ0IiwiJGVuZCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInRleHRPZmZzZXQiLCJub2RlQWZ0ZXIiLCJub2RlQmVmb3JlIiwiY2hlY2tDb250ZW50IiwiJGFsb25nIiwiZXh0cmEiLCJyZXNvbHZlTm9DYWNoZSIsIl9SZXNvbHZlZFBvcyIsInBhdGgiLCJyZXNvbHZlRGVwdGgiLCJ2YWwiLCJkb2MiLCJpbmRleEFmdGVyIiwiYmVmb3JlIiwiYWZ0ZXIiLCJkT2ZmIiwicG9zQXRJbmRleCIsInRtcCIsImluY2x1c2l2ZSIsIm1hcmtzQWNyb3NzIiwiaXNJbmxpbmUiLCJuZXh0Iiwic2hhcmVkRGVwdGgiLCJibG9ja1JhbmdlIiwicHJlZCIsImQiLCJpbmxpbmVDb250ZW50Iiwic2FtZVBhcmVudCIsInN0ciIsInJlc29sdmUiLCJkb2MyIiwicmVtIiwicmVzb2x2ZUNhY2hlZCIsImNhY2hlIiwicmVzb2x2ZUNhY2hlIiwiZ2V0IiwiZWx0cyIsImVsdCIsIlJlc29sdmVDYWNoZSIsInJlc29sdmVDYWNoZVNpemUiLCJXZWFrTWFwIiwiZW1wdHlBdHRycyIsIk9iamVjdCIsIl9Ob2RlIiwiY2hpbGRyZW4iLCJzdGFydFBvcyIsInRleHRDb250ZW50IiwiaGFzTWFya3VwIiwiZGVmYXVsdEF0dHJzIiwiaW5jbHVkZVBhcmVudHMiLCJub2RlQXQiLCJjaGlsZEFmdGVyIiwiY2hpbGRCZWZvcmUiLCJyYW5nZUhhc01hcmsiLCJpc0F0b20iLCJ0b0RlYnVnU3RyaW5nIiwid3JhcE1hcmtzIiwiY29udGVudE1hdGNoQXQiLCJtYXRjaCIsImNvbnRlbnRNYXRjaCIsIm1hdGNoRnJhZ21lbnQiLCJyZXBsYWNlbWVudCIsIm9uZSIsInR3byIsInZhbGlkRW5kIiwiYWxsb3dzTWFya3MiLCJjYW5SZXBsYWNlV2l0aCIsIm1hdGNoVHlwZSIsImNhbkFwcGVuZCIsImNoZWNrIiwibSIsIm1hcmtGcm9tSlNPTiIsIm5vZGVUeXBlIiwicHJvdG90eXBlIiwiVGV4dE5vZGUiLCJfVGV4dE5vZGUiLCJKU09OIiwic3RyaW5naWZ5IiwiYmFzZSIsIl9Db250ZW50TWF0Y2giLCJ3cmFwQ2FjaGUiLCJwYXJzZSIsInN0cmluZyIsIm5vZGVUeXBlcyIsInN0cmVhbSIsIlRva2VuU3RyZWFtIiwiZXhwciIsInBhcnNlRXhwciIsImVyciIsImRmYSIsIm5mYSIsImNoZWNrRm9yRGVhZEVuZHMiLCJmcmFnIiwiZGVmYXVsdFR5cGUiLCJoYXNSZXF1aXJlZEF0dHJzIiwiY29tcGF0aWJsZSIsImZpbGxCZWZvcmUiLCJ0b0VuZCIsInNlZW4iLCJzZWFyY2giLCJ0eXBlcyIsImZpbmlzaGVkIiwidHAiLCJjcmVhdGVBbmRGaWxsIiwiaW5kZXhPZiIsImZpbmRXcmFwcGluZyIsImNvbXB1dGVkIiwiY29tcHV0ZVdyYXBwaW5nIiwiYWN0aXZlIiwidmlhIiwic2hpZnQiLCJyZXZlcnNlIiwiZWRnZUNvdW50IiwiZWRnZSIsInNjYW4iLCJvdXQiLCJpMiIsImlubGluZSIsInRva2VucyIsInNwbGl0IiwicG9wIiwiZWF0IiwidG9rIiwiU3ludGF4RXJyb3IiLCJleHBycyIsInBhcnNlRXhwclNlcSIsInBhcnNlRXhwclN1YnNjcmlwdCIsInBhcnNlRXhwckF0b20iLCJwYXJzZUV4cHJSYW5nZSIsInBhcnNlTnVtIiwidGVzdCIsIk51bWJlciIsInJlc29sdmVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlMiIsImlzSW5Hcm91cCIsIm5mYTIiLCJjb25uZWN0IiwiY29tcGlsZSIsInRlcm0iLCJlZGdlMiIsImVkZ2VzIiwiZXhwcjIiLCJyZWR1Y2UiLCJleHByMyIsImxvb3AiLCJjbXAiLCJudWxsRnJvbSIsIm5vZGUyIiwibGFiZWxlZCIsImV4cGxvcmUiLCJzdGF0ZXMiLCJzdGF0ZSIsInN0YXRlczIiLCJ3b3JrIiwiZGVhZCIsImRlZmF1bHRzIiwiYXR0ck5hbWUiLCJhdHRyIiwiaGFzRGVmYXVsdCIsImRlZmF1bHQiLCJjb21wdXRlQXR0cnMiLCJidWlsdCIsImdpdmVuIiwidmFsdWVzIiwibmFtZTIiLCJ2YWxpZGF0ZSIsImluaXRBdHRycyIsIkF0dHJpYnV0ZSIsIl9Ob2RlVHlwZSIsIm1hcmtTZXQiLCJncm91cHMiLCJncm91cCIsImF0b20iLCJ3aGl0ZXNwYWNlIiwiY29kZSIsImlzUmVxdWlyZWQiLCJjcmVhdGVDaGVja2VkIiwibWF0Y2hlZCIsInZhbGlkQ29udGVudCIsImFsbG93c01hcmtUeXBlIiwibWFya1R5cGUiLCJhbGxvd2VkTWFya3MiLCJ0b3BUeXBlIiwidG9wTm9kZSIsInZhbGlkYXRlVHlwZSIsIm9wdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfTWFya1R5cGUiLCJleGNsdWRlZCIsImluc3RhbmNlIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJjYWNoZWQiLCJpbnN0YW5jZVNwZWMiLCJwcm9wIiwiY29udGVudEV4cHJDYWNoZSIsImNvbnRlbnRFeHByIiwibWFya0V4cHIiLCJnYXRoZXJNYXJrcyIsImV4Y2wiLCJ0b3BOb2RlVHlwZSIsIndyYXBwaW5ncyIsIm9rIiwibWFyazIiLCJpc1RhZ1J1bGUiLCJydWxlIiwidGFnIiwiaXNTdHlsZVJ1bGUiLCJzdHlsZSIsIl9ET01QYXJzZXIiLCJydWxlcyIsInRhZ3MiLCJzdHlsZXMiLCJtYXRjaGVkU3R5bGVzIiwiZXhlYyIsIm5vcm1hbGl6ZUxpc3RzIiwic29tZSIsInIiLCJkb20iLCJjb250ZXh0IiwiUGFyc2VDb250ZXh0IiwiYWRkQWxsIiwiZmluaXNoIiwicGFyc2VTbGljZSIsIm1hdGNoVGFnIiwibWF0Y2hlcyIsIm5hbWVzcGFjZSIsIm5hbWVzcGFjZVVSSSIsIm1hdGNoZXNDb250ZXh0IiwiZ2V0QXR0cnMiLCJtYXRjaFN0eWxlIiwiY2hhckNvZGVBdCIsInNjaGVtYVJ1bGVzIiwicHJpb3JpdHkiLCJuZXh0UHJpb3JpdHkiLCJzcGxpY2UiLCJwYXJzZURPTSIsImlnbm9yZSIsImNsZWFyTWFyayIsImZyb21TY2hlbWEiLCJkb21QYXJzZXIiLCJibG9ja1RhZ3MiLCJhZGRyZXNzIiwiYXJ0aWNsZSIsImFzaWRlIiwiYmxvY2txdW90ZSIsImNhbnZhcyIsImRkIiwiZGl2IiwiZGwiLCJmaWVsZHNldCIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJmb290ZXIiLCJmb3JtIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaGVhZGVyIiwiaGdyb3VwIiwiaHIiLCJsaSIsIm5vc2NyaXB0Iiwib2wiLCJvdXRwdXQiLCJwcmUiLCJzZWN0aW9uIiwidGFibGUiLCJ0Zm9vdCIsInVsIiwiaWdub3JlVGFncyIsImhlYWQiLCJvYmplY3QiLCJzY3JpcHQiLCJ0aXRsZSIsImxpc3RUYWdzIiwiT1BUX1BSRVNFUlZFX1dTIiwiT1BUX1BSRVNFUlZFX1dTX0ZVTEwiLCJPUFRfT1BFTl9MRUZUIiwid3NPcHRpb25zRm9yIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiTm9kZUNvbnRleHQiLCJzb2xpZCIsImFjdGl2ZU1hcmtzIiwiZmlsbCIsIndyYXAiLCJpbmxpbmVDb250ZXh0IiwicGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJwYXJzZXIiLCJpc09wZW4iLCJvcGVuIiwibG9jYWxQcmVzZXJ2ZVdTIiwidG9wQ29udGV4dCIsInRvcE9wdGlvbnMiLCJ0b3BNYXRjaCIsImZpbmQiLCJmaW5kUG9zaXRpb25zIiwibmVlZHNCbG9jayIsInRvcCIsImFkZERPTSIsImFkZFRleHROb2RlIiwiYWRkRWxlbWVudCIsIm5vZGVWYWx1ZSIsInByZXNlcnZlV1MiLCJkb21Ob2RlQmVmb3JlIiwicHJldmlvdXNTaWJsaW5nIiwiaW5zZXJ0Tm9kZSIsImZpbmRJblRleHQiLCJmaW5kSW5zaWRlIiwibWF0Y2hBZnRlciIsIm91dGVyV1MiLCJ0YWdOYW1lIiwid2hpdGVTcGFjZSIsInJ1bGVJRCIsIm5vcm1hbGl6ZUxpc3QiLCJydWxlRnJvbU5vZGUiLCJpZ25vcmVGYWxsYmFjayIsInNraXAiLCJjbG9zZVBhcmVudCIsInN5bmMiLCJvbGROZWVkc0Jsb2NrIiwibGVhZkZhbGxiYWNrIiwiaW5uZXJNYXJrcyIsInJlYWRTdHlsZXMiLCJhZGRFbGVtZW50QnlSdWxlIiwiY29uc3VtaW5nIiwib3duZXJEb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiZmluZFBsYWNlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImZpbHRlciIsImNvbnRpbnVlQWZ0ZXIiLCJlbnRlciIsInN0YXJ0SW4iLCJnZXRDb250ZW50IiwiY29udGVudERPTSIsImNvbnRlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImZpbmRBcm91bmQiLCJjaGlsZE5vZGVzIiwibmV4dFNpYmxpbmciLCJmaW5kQXRQb2ludCIsImNhdXRpb3VzIiwicm91dGUiLCJwZW5hbHR5IiwiY3giLCJlbnRlcklubmVyIiwiYmxvY2siLCJ0ZXh0YmxvY2tGcm9tQ29udGV4dCIsImNsb3NlRXh0cmEiLCJub2RlTWFya3MiLCJtYXJrTWF5QXBwbHkiLCJhcHBseU1hcmtzIiwidG9wT3BlbiIsImN1cnJlbnRQb3MiLCJjb250YWlucyIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwidGV4dE5vZGUiLCJwYXJ0cyIsIm9wdGlvbiIsInVzZVJvb3QiLCJtaW5EZXB0aCIsInBhcnQiLCIkY29udGV4dCIsImRlZmx0IiwicHJldkl0ZW0iLCJhcHBlbmRDaGlsZCIsInNlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJfRE9NU2VyaWFsaXplciIsInNlcmlhbGl6ZUZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImtlZXAiLCJyZW5kZXJlZCIsInNwYW5uaW5nIiwiYWRkIiwibWFya0RPTSIsInNlcmlhbGl6ZU1hcmsiLCJzZXJpYWxpemVOb2RlSW5uZXIiLCJyZW5kZXJTcGVjIiwic2VyaWFsaXplTm9kZSIsInRvRE9NIiwic3RydWN0dXJlIiwieG1sTlMiLCJibG9ja0FycmF5c0luIiwiZG9tU2VyaWFsaXplciIsIm5vZGVzRnJvbVNjaGVtYSIsIm1hcmtzRnJvbVNjaGVtYSIsImdhdGhlclRvRE9NIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJzdXNwaWNpb3VzQXR0cmlidXRlQ2FjaGUiLCJzdXNwaWNpb3VzQXR0cmlidXRlcyIsInN1c3BpY2lvdXNBdHRyaWJ1dGVzSW5uZXIiLCJzdXNwaWNpb3VzIiwic3BhY2UiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50Iiwic3BhY2UyIiwic2V0QXR0cmlidXRlTlMiLCJjc3NUZXh0Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWpCLGdDQUFBOzs7QUNBQSxJQUFBa0IsaUJBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUV2QixTQUFTQyxjQUFjQyxDQUFBLEVBQUdDLENBQUEsRUFBR0MsR0FBQSxFQUFLO0VBQzlCLFNBQVNDLENBQUEsR0FBSSxJQUFJQSxDQUFBLElBQUs7SUFDbEIsSUFBSUEsQ0FBQSxJQUFLSCxDQUFBLENBQUVJLFVBQUEsSUFBY0QsQ0FBQSxJQUFLRixDQUFBLENBQUVHLFVBQUEsRUFDNUIsT0FBT0osQ0FBQSxDQUFFSSxVQUFBLElBQWNILENBQUEsQ0FBRUcsVUFBQSxHQUFhLE9BQU9GLEdBQUE7SUFDakQsSUFBSUcsTUFBQSxHQUFTTCxDQUFBLENBQUVNLEtBQUEsQ0FBTUgsQ0FBQztNQUFHSSxNQUFBLEdBQVNOLENBQUEsQ0FBRUssS0FBQSxDQUFNSCxDQUFDO0lBQzNDLElBQUlFLE1BQUEsSUFBVUUsTUFBQSxFQUFRO01BQ2xCTCxHQUFBLElBQU9HLE1BQUEsQ0FBT0csUUFBQTtNQUNkO0lBQ0o7SUFDQSxJQUFJLENBQUNILE1BQUEsQ0FBT0ksVUFBQSxDQUFXRixNQUFNLEdBQ3pCLE9BQU9MLEdBQUE7SUFDWCxJQUFJRyxNQUFBLENBQU9LLE1BQUEsSUFBVUwsTUFBQSxDQUFPTSxJQUFBLElBQVFKLE1BQUEsQ0FBT0ksSUFBQSxFQUFNO01BQzdDLFNBQVNDLENBQUEsR0FBSSxHQUFHUCxNQUFBLENBQU9NLElBQUEsQ0FBS0MsQ0FBQyxLQUFLTCxNQUFBLENBQU9JLElBQUEsQ0FBS0MsQ0FBQyxHQUFHQSxDQUFBLElBQzlDVixHQUFBO01BQ0osT0FBT0EsR0FBQTtJQUNYO0lBQ0EsSUFBSUcsTUFBQSxDQUFPUSxPQUFBLENBQVFDLElBQUEsSUFBUVAsTUFBQSxDQUFPTSxPQUFBLENBQVFDLElBQUEsRUFBTTtNQUM1QyxJQUFJQyxLQUFBLEdBQVFoQixhQUFBLENBQWNNLE1BQUEsQ0FBT1EsT0FBQSxFQUFTTixNQUFBLENBQU9NLE9BQUEsRUFBU1gsR0FBQSxHQUFNLENBQUM7TUFDakUsSUFBSWEsS0FBQSxJQUFTLE1BQ1QsT0FBT0EsS0FBQTtJQUNmO0lBQ0FiLEdBQUEsSUFBT0csTUFBQSxDQUFPRyxRQUFBO0VBQ2xCO0FBQ0o7QUFDQSxTQUFTUSxZQUFZaEIsQ0FBQSxFQUFHQyxDQUFBLEVBQUdnQixJQUFBLEVBQU1DLElBQUEsRUFBTTtFQUNuQyxTQUFTQyxFQUFBLEdBQUtuQixDQUFBLENBQUVJLFVBQUEsRUFBWWdCLEVBQUEsR0FBS25CLENBQUEsQ0FBRUcsVUFBQSxJQUFjO0lBQzdDLElBQUllLEVBQUEsSUFBTSxLQUFLQyxFQUFBLElBQU0sR0FDakIsT0FBT0QsRUFBQSxJQUFNQyxFQUFBLEdBQUssT0FBTztNQUFFcEIsQ0FBQSxFQUFHaUIsSUFBQTtNQUFNaEIsQ0FBQSxFQUFHaUI7SUFBSztJQUNoRCxJQUFJYixNQUFBLEdBQVNMLENBQUEsQ0FBRU0sS0FBQSxDQUFNLEVBQUVhLEVBQUU7TUFBR1osTUFBQSxHQUFTTixDQUFBLENBQUVLLEtBQUEsQ0FBTSxFQUFFYyxFQUFFO01BQUdOLElBQUEsR0FBT1QsTUFBQSxDQUFPRyxRQUFBO0lBQ2xFLElBQUlILE1BQUEsSUFBVUUsTUFBQSxFQUFRO01BQ2xCVSxJQUFBLElBQVFILElBQUE7TUFDUkksSUFBQSxJQUFRSixJQUFBO01BQ1I7SUFDSjtJQUNBLElBQUksQ0FBQ1QsTUFBQSxDQUFPSSxVQUFBLENBQVdGLE1BQU0sR0FDekIsT0FBTztNQUFFUCxDQUFBLEVBQUdpQixJQUFBO01BQU1oQixDQUFBLEVBQUdpQjtJQUFLO0lBQzlCLElBQUliLE1BQUEsQ0FBT0ssTUFBQSxJQUFVTCxNQUFBLENBQU9NLElBQUEsSUFBUUosTUFBQSxDQUFPSSxJQUFBLEVBQU07TUFDN0MsSUFBSVUsSUFBQSxHQUFPO1FBQUdDLE9BQUEsR0FBVUMsSUFBQSxDQUFLQyxHQUFBLENBQUluQixNQUFBLENBQU9NLElBQUEsQ0FBS2MsTUFBQSxFQUFRbEIsTUFBQSxDQUFPSSxJQUFBLENBQUtjLE1BQU07TUFDdkUsT0FBT0osSUFBQSxHQUFPQyxPQUFBLElBQVdqQixNQUFBLENBQU9NLElBQUEsQ0FBS04sTUFBQSxDQUFPTSxJQUFBLENBQUtjLE1BQUEsR0FBU0osSUFBQSxHQUFPLENBQUMsS0FBS2QsTUFBQSxDQUFPSSxJQUFBLENBQUtKLE1BQUEsQ0FBT0ksSUFBQSxDQUFLYyxNQUFBLEdBQVNKLElBQUEsR0FBTyxDQUFDLEdBQUc7UUFDL0dBLElBQUE7UUFDQUosSUFBQTtRQUNBQyxJQUFBO01BQ0o7TUFDQSxPQUFPO1FBQUVsQixDQUFBLEVBQUdpQixJQUFBO1FBQU1oQixDQUFBLEVBQUdpQjtNQUFLO0lBQzlCO0lBQ0EsSUFBSWIsTUFBQSxDQUFPUSxPQUFBLENBQVFDLElBQUEsSUFBUVAsTUFBQSxDQUFPTSxPQUFBLENBQVFDLElBQUEsRUFBTTtNQUM1QyxJQUFJQyxLQUFBLEdBQVFDLFdBQUEsQ0FBWVgsTUFBQSxDQUFPUSxPQUFBLEVBQVNOLE1BQUEsQ0FBT00sT0FBQSxFQUFTSSxJQUFBLEdBQU8sR0FBR0MsSUFBQSxHQUFPLENBQUM7TUFDMUUsSUFBSUgsS0FBQSxFQUNBLE9BQU9BLEtBQUE7SUFDZjtJQUNBRSxJQUFBLElBQVFILElBQUE7SUFDUkksSUFBQSxJQUFRSixJQUFBO0VBQ1o7QUFDSjtBQVNBLElBQU0vQixRQUFBLEdBQU4sTUFBTTJDLFNBQUEsQ0FBUztFQUFBO0FBQUE7QUFBQTtFQUlYQyxZQUlBZCxPQUFBLEVBQVNDLElBQUEsRUFBTTtJQUNYLEtBQUtELE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUtDLElBQUEsR0FBT0EsSUFBQSxJQUFRO0lBQ3BCLElBQUlBLElBQUEsSUFBUSxNQUNSLFNBQVNYLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlVLE9BQUEsQ0FBUVksTUFBQSxFQUFRdEIsQ0FBQSxJQUNoQyxLQUFLVyxJQUFBLElBQVFELE9BQUEsQ0FBUVYsQ0FBQyxFQUFFSyxRQUFBO0VBQ3BDO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1Bb0IsYUFBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUlDLENBQUEsRUFBR0MsU0FBQSxHQUFZLEdBQUdDLE1BQUEsRUFBUTtJQUM3QyxTQUFTOUIsQ0FBQSxHQUFJLEdBQUdELEdBQUEsR0FBTSxHQUFHQSxHQUFBLEdBQU00QixFQUFBLEVBQUkzQixDQUFBLElBQUs7TUFDcEMsSUFBSUcsS0FBQSxHQUFRLEtBQUtPLE9BQUEsQ0FBUVYsQ0FBQztRQUFHK0IsR0FBQSxHQUFNaEMsR0FBQSxHQUFNSSxLQUFBLENBQU1FLFFBQUE7TUFDL0MsSUFBSTBCLEdBQUEsR0FBTUwsSUFBQSxJQUFRRSxDQUFBLENBQUV6QixLQUFBLEVBQU8wQixTQUFBLEdBQVk5QixHQUFBLEVBQUsrQixNQUFBLElBQVUsTUFBTTlCLENBQUMsTUFBTSxTQUFTRyxLQUFBLENBQU1PLE9BQUEsQ0FBUUMsSUFBQSxFQUFNO1FBQzVGLElBQUlxQixLQUFBLEdBQVFqQyxHQUFBLEdBQU07UUFDbEJJLEtBQUEsQ0FBTXNCLFlBQUEsQ0FBYUwsSUFBQSxDQUFLYSxHQUFBLENBQUksR0FBR1AsSUFBQSxHQUFPTSxLQUFLLEdBQUdaLElBQUEsQ0FBS0MsR0FBQSxDQUFJbEIsS0FBQSxDQUFNTyxPQUFBLENBQVFDLElBQUEsRUFBTWdCLEVBQUEsR0FBS0ssS0FBSyxHQUFHSixDQUFBLEVBQUdDLFNBQUEsR0FBWUcsS0FBSztNQUNoSDtNQUNBakMsR0FBQSxHQUFNZ0MsR0FBQTtJQUNWO0VBQ0o7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUFHLFlBQVlOLENBQUEsRUFBRztJQUNYLEtBQUtILFlBQUEsQ0FBYSxHQUFHLEtBQUtkLElBQUEsRUFBTWlCLENBQUM7RUFDckM7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBTyxZQUFZVCxJQUFBLEVBQU1DLEVBQUEsRUFBSVMsY0FBQSxFQUFnQkMsUUFBQSxFQUFVO0lBQzVDLElBQUk3QixJQUFBLEdBQU87TUFBSThCLEtBQUEsR0FBUTtJQUN2QixLQUFLYixZQUFBLENBQWFDLElBQUEsRUFBTUMsRUFBQSxFQUFJLENBQUNZLElBQUEsRUFBTXhDLEdBQUEsS0FBUTtNQUN2QyxJQUFJeUMsUUFBQSxHQUFXRCxJQUFBLENBQUtoQyxNQUFBLEdBQVNnQyxJQUFBLENBQUsvQixJQUFBLENBQUtpQyxLQUFBLENBQU1yQixJQUFBLENBQUthLEdBQUEsQ0FBSVAsSUFBQSxFQUFNM0IsR0FBRyxJQUFJQSxHQUFBLEVBQUs0QixFQUFBLEdBQUs1QixHQUFHLElBQzFFLENBQUN3QyxJQUFBLENBQUtHLE1BQUEsR0FBUyxLQUNYTCxRQUFBLEdBQVksT0FBT0EsUUFBQSxLQUFhLGFBQWFBLFFBQUEsQ0FBU0UsSUFBSSxJQUFJRixRQUFBLEdBQzFERSxJQUFBLENBQUtJLElBQUEsQ0FBS0MsSUFBQSxDQUFLUCxRQUFBLEdBQVdFLElBQUEsQ0FBS0ksSUFBQSxDQUFLQyxJQUFBLENBQUtQLFFBQUEsQ0FBU0UsSUFBSSxJQUNsRDtNQUNsQixJQUFJQSxJQUFBLENBQUtNLE9BQUEsS0FBWU4sSUFBQSxDQUFLRyxNQUFBLElBQVVGLFFBQUEsSUFBWUQsSUFBQSxDQUFLTyxXQUFBLEtBQWdCVixjQUFBLEVBQWdCO1FBQ2pGLElBQUlFLEtBQUEsRUFDQUEsS0FBQSxHQUFRLFdBRVI5QixJQUFBLElBQVE0QixjQUFBO01BQ2hCO01BQ0E1QixJQUFBLElBQVFnQyxRQUFBO0lBQ1osR0FBRyxDQUFDO0lBQ0osT0FBT2hDLElBQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0F1QyxPQUFPQyxLQUFBLEVBQU87SUFDVixJQUFJLENBQUNBLEtBQUEsQ0FBTXJDLElBQUEsRUFDUCxPQUFPO0lBQ1gsSUFBSSxDQUFDLEtBQUtBLElBQUEsRUFDTixPQUFPcUMsS0FBQTtJQUNYLElBQUlDLElBQUEsR0FBTyxLQUFLQyxTQUFBO01BQVdaLEtBQUEsR0FBUVUsS0FBQSxDQUFNRyxVQUFBO01BQVl6QyxPQUFBLEdBQVUsS0FBS0EsT0FBQSxDQUFRK0IsS0FBQSxDQUFNO01BQUd6QyxDQUFBLEdBQUk7SUFDekYsSUFBSWlELElBQUEsQ0FBSzFDLE1BQUEsSUFBVTBDLElBQUEsQ0FBSzNDLFVBQUEsQ0FBV2dDLEtBQUssR0FBRztNQUN2QzVCLE9BQUEsQ0FBUUEsT0FBQSxDQUFRWSxNQUFBLEdBQVMsQ0FBQyxJQUFJMkIsSUFBQSxDQUFLRyxRQUFBLENBQVNILElBQUEsQ0FBS3pDLElBQUEsR0FBTzhCLEtBQUEsQ0FBTTlCLElBQUk7TUFDbEVSLENBQUEsR0FBSTtJQUNSO0lBQ0EsT0FBT0EsQ0FBQSxHQUFJZ0QsS0FBQSxDQUFNdEMsT0FBQSxDQUFRWSxNQUFBLEVBQVF0QixDQUFBLElBQzdCVSxPQUFBLENBQVEyQyxJQUFBLENBQUtMLEtBQUEsQ0FBTXRDLE9BQUEsQ0FBUVYsQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sSUFBSXVCLFNBQUEsQ0FBU2IsT0FBQSxFQUFTLEtBQUtDLElBQUEsR0FBT3FDLEtBQUEsQ0FBTXJDLElBQUk7RUFDdkQ7RUFBQTtBQUFBO0FBQUE7RUFJQTJDLElBQUk1QixJQUFBLEVBQU1DLEVBQUEsR0FBSyxLQUFLaEIsSUFBQSxFQUFNO0lBQ3RCLElBQUllLElBQUEsSUFBUSxLQUFLQyxFQUFBLElBQU0sS0FBS2hCLElBQUEsRUFDeEIsT0FBTztJQUNYLElBQUk0QyxNQUFBLEdBQVMsRUFBQztNQUFHNUMsSUFBQSxHQUFPO0lBQ3hCLElBQUlnQixFQUFBLEdBQUtELElBQUEsRUFDTCxTQUFTMUIsQ0FBQSxHQUFJLEdBQUdELEdBQUEsR0FBTSxHQUFHQSxHQUFBLEdBQU00QixFQUFBLEVBQUkzQixDQUFBLElBQUs7TUFDcEMsSUFBSUcsS0FBQSxHQUFRLEtBQUtPLE9BQUEsQ0FBUVYsQ0FBQztRQUFHK0IsR0FBQSxHQUFNaEMsR0FBQSxHQUFNSSxLQUFBLENBQU1FLFFBQUE7TUFDL0MsSUFBSTBCLEdBQUEsR0FBTUwsSUFBQSxFQUFNO1FBQ1osSUFBSTNCLEdBQUEsR0FBTTJCLElBQUEsSUFBUUssR0FBQSxHQUFNSixFQUFBLEVBQUk7VUFDeEIsSUFBSXhCLEtBQUEsQ0FBTUksTUFBQSxFQUNOSixLQUFBLEdBQVFBLEtBQUEsQ0FBTW1ELEdBQUEsQ0FBSWxDLElBQUEsQ0FBS2EsR0FBQSxDQUFJLEdBQUdQLElBQUEsR0FBTzNCLEdBQUcsR0FBR3FCLElBQUEsQ0FBS0MsR0FBQSxDQUFJbEIsS0FBQSxDQUFNSyxJQUFBLENBQUtjLE1BQUEsRUFBUUssRUFBQSxHQUFLNUIsR0FBRyxDQUFDLE9BRWhGSSxLQUFBLEdBQVFBLEtBQUEsQ0FBTW1ELEdBQUEsQ0FBSWxDLElBQUEsQ0FBS2EsR0FBQSxDQUFJLEdBQUdQLElBQUEsR0FBTzNCLEdBQUEsR0FBTSxDQUFDLEdBQUdxQixJQUFBLENBQUtDLEdBQUEsQ0FBSWxCLEtBQUEsQ0FBTU8sT0FBQSxDQUFRQyxJQUFBLEVBQU1nQixFQUFBLEdBQUs1QixHQUFBLEdBQU0sQ0FBQyxDQUFDO1FBQ2pHO1FBQ0F3RCxNQUFBLENBQU9GLElBQUEsQ0FBS2xELEtBQUs7UUFDakJRLElBQUEsSUFBUVIsS0FBQSxDQUFNRSxRQUFBO01BQ2xCO01BQ0FOLEdBQUEsR0FBTWdDLEdBQUE7SUFDVjtJQUNKLE9BQU8sSUFBSVIsU0FBQSxDQUFTZ0MsTUFBQSxFQUFRNUMsSUFBSTtFQUNwQztFQUFBO0FBQUE7QUFBQTtFQUlBNkMsV0FBVzlCLElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQ2pCLElBQUlELElBQUEsSUFBUUMsRUFBQSxFQUNSLE9BQU9KLFNBQUEsQ0FBU2tDLEtBQUE7SUFDcEIsSUFBSS9CLElBQUEsSUFBUSxLQUFLQyxFQUFBLElBQU0sS0FBS2pCLE9BQUEsQ0FBUVksTUFBQSxFQUNoQyxPQUFPO0lBQ1gsT0FBTyxJQUFJQyxTQUFBLENBQVMsS0FBS2IsT0FBQSxDQUFRK0IsS0FBQSxDQUFNZixJQUFBLEVBQU1DLEVBQUUsQ0FBQztFQUNwRDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0ErQixhQUFhQyxLQUFBLEVBQU9wQixJQUFBLEVBQU07SUFDdEIsSUFBSXFCLE9BQUEsR0FBVSxLQUFLbEQsT0FBQSxDQUFRaUQsS0FBSztJQUNoQyxJQUFJQyxPQUFBLElBQVdyQixJQUFBLEVBQ1gsT0FBTztJQUNYLElBQUlzQixLQUFBLEdBQU8sS0FBS25ELE9BQUEsQ0FBUStCLEtBQUEsQ0FBTTtJQUM5QixJQUFJOUIsSUFBQSxHQUFPLEtBQUtBLElBQUEsR0FBTzRCLElBQUEsQ0FBS2xDLFFBQUEsR0FBV3VELE9BQUEsQ0FBUXZELFFBQUE7SUFDL0N3RCxLQUFBLENBQUtGLEtBQUssSUFBSXBCLElBQUE7SUFDZCxPQUFPLElBQUloQixTQUFBLENBQVNzQyxLQUFBLEVBQU1sRCxJQUFJO0VBQ2xDO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQW1ELFdBQVd2QixJQUFBLEVBQU07SUFDYixPQUFPLElBQUloQixTQUFBLENBQVMsQ0FBQ2dCLElBQUksRUFBRXdCLE1BQUEsQ0FBTyxLQUFLckQsT0FBTyxHQUFHLEtBQUtDLElBQUEsR0FBTzRCLElBQUEsQ0FBS2xDLFFBQVE7RUFDOUU7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBMkQsU0FBU3pCLElBQUEsRUFBTTtJQUNYLE9BQU8sSUFBSWhCLFNBQUEsQ0FBUyxLQUFLYixPQUFBLENBQVFxRCxNQUFBLENBQU94QixJQUFJLEdBQUcsS0FBSzVCLElBQUEsR0FBTzRCLElBQUEsQ0FBS2xDLFFBQVE7RUFDNUU7RUFBQTtBQUFBO0FBQUE7RUFJQTRELEdBQUdqQixLQUFBLEVBQU87SUFDTixJQUFJLEtBQUt0QyxPQUFBLENBQVFZLE1BQUEsSUFBVTBCLEtBQUEsQ0FBTXRDLE9BQUEsQ0FBUVksTUFBQSxFQUNyQyxPQUFPO0lBQ1gsU0FBU3RCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS1UsT0FBQSxDQUFRWSxNQUFBLEVBQVF0QixDQUFBLElBQ3JDLElBQUksQ0FBQyxLQUFLVSxPQUFBLENBQVFWLENBQUMsRUFBRWlFLEVBQUEsQ0FBR2pCLEtBQUEsQ0FBTXRDLE9BQUEsQ0FBUVYsQ0FBQyxDQUFDLEdBQ3BDLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFBQTtBQUFBO0FBQUE7RUFJQSxJQUFJbUQsV0FBQSxFQUFhO0lBQUUsT0FBTyxLQUFLekMsT0FBQSxDQUFRWSxNQUFBLEdBQVMsS0FBS1osT0FBQSxDQUFRLENBQUMsSUFBSTtFQUFNO0VBQUE7QUFBQTtBQUFBO0VBSXhFLElBQUl3QyxVQUFBLEVBQVk7SUFBRSxPQUFPLEtBQUt4QyxPQUFBLENBQVFZLE1BQUEsR0FBUyxLQUFLWixPQUFBLENBQVEsS0FBS0EsT0FBQSxDQUFRWSxNQUFBLEdBQVMsQ0FBQyxJQUFJO0VBQU07RUFBQTtBQUFBO0FBQUE7RUFJN0YsSUFBSXJCLFdBQUEsRUFBYTtJQUFFLE9BQU8sS0FBS1MsT0FBQSxDQUFRWSxNQUFBO0VBQVE7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUsvQ25CLE1BQU13RCxLQUFBLEVBQU87SUFDVCxJQUFJTyxNQUFBLEdBQVEsS0FBS3hELE9BQUEsQ0FBUWlELEtBQUs7SUFDOUIsSUFBSSxDQUFDTyxNQUFBLEVBQ0QsTUFBTSxJQUFJQyxVQUFBLENBQVcsV0FBV1IsS0FBQSxHQUFRLHVCQUF1QixJQUFJO0lBQ3ZFLE9BQU9PLE1BQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtFQUlBRSxXQUFXVCxLQUFBLEVBQU87SUFDZCxPQUFPLEtBQUtqRCxPQUFBLENBQVFpRCxLQUFLLEtBQUs7RUFDbEM7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBVSxRQUFRekMsQ0FBQSxFQUFHO0lBQ1AsU0FBUzVCLENBQUEsR0FBSSxHQUFHc0UsQ0FBQSxHQUFJLEdBQUd0RSxDQUFBLEdBQUksS0FBS1UsT0FBQSxDQUFRWSxNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDakQsSUFBSUcsS0FBQSxHQUFRLEtBQUtPLE9BQUEsQ0FBUVYsQ0FBQztNQUMxQjRCLENBQUEsQ0FBRXpCLEtBQUEsRUFBT21FLENBQUEsRUFBR3RFLENBQUM7TUFDYnNFLENBQUEsSUFBS25FLEtBQUEsQ0FBTUUsUUFBQTtJQUNmO0VBQ0o7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBVCxjQUFjb0QsS0FBQSxFQUFPakQsR0FBQSxHQUFNLEdBQUc7SUFDMUIsT0FBT0gsYUFBQSxDQUFjLE1BQU1vRCxLQUFBLEVBQU9qRCxHQUFHO0VBQ3pDO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBT0FjLFlBQVltQyxLQUFBLEVBQU9qRCxHQUFBLEdBQU0sS0FBS1ksSUFBQSxFQUFNNEQsUUFBQSxHQUFXdkIsS0FBQSxDQUFNckMsSUFBQSxFQUFNO0lBQ3ZELE9BQU9FLFdBQUEsQ0FBWSxNQUFNbUMsS0FBQSxFQUFPakQsR0FBQSxFQUFLd0UsUUFBUTtFQUNqRDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQUMsVUFBVXpFLEdBQUEsRUFBSztJQUNYLElBQUlBLEdBQUEsSUFBTyxHQUNQLE9BQU8wRSxRQUFBLENBQVMsR0FBRzFFLEdBQUc7SUFDMUIsSUFBSUEsR0FBQSxJQUFPLEtBQUtZLElBQUEsRUFDWixPQUFPOEQsUUFBQSxDQUFTLEtBQUsvRCxPQUFBLENBQVFZLE1BQUEsRUFBUXZCLEdBQUc7SUFDNUMsSUFBSUEsR0FBQSxHQUFNLEtBQUtZLElBQUEsSUFBUVosR0FBQSxHQUFNLEdBQ3pCLE1BQU0sSUFBSW9FLFVBQUEsQ0FBVyxZQUFZcEUsR0FBRyx5QkFBeUIsSUFBSSxHQUFHO0lBQ3hFLFNBQVNDLENBQUEsR0FBSSxHQUFHMEUsTUFBQSxHQUFTLElBQUkxRSxDQUFBLElBQUs7TUFDOUIsSUFBSTJFLEdBQUEsR0FBTSxLQUFLeEUsS0FBQSxDQUFNSCxDQUFDO1FBQUcrQixHQUFBLEdBQU0yQyxNQUFBLEdBQVNDLEdBQUEsQ0FBSXRFLFFBQUE7TUFDNUMsSUFBSTBCLEdBQUEsSUFBT2hDLEdBQUEsRUFBSztRQUNaLElBQUlnQyxHQUFBLElBQU9oQyxHQUFBLEVBQ1AsT0FBTzBFLFFBQUEsQ0FBU3pFLENBQUEsR0FBSSxHQUFHK0IsR0FBRztRQUM5QixPQUFPMEMsUUFBQSxDQUFTekUsQ0FBQSxFQUFHMEUsTUFBTTtNQUM3QjtNQUNBQSxNQUFBLEdBQVMzQyxHQUFBO0lBQ2I7RUFDSjtFQUFBO0FBQUE7QUFBQTtFQUlBNkMsU0FBQSxFQUFXO0lBQUUsT0FBTyxNQUFNLEtBQUtDLGFBQUEsQ0FBYyxJQUFJO0VBQUs7RUFBQTtBQUFBO0FBQUE7RUFJdERBLGNBQUEsRUFBZ0I7SUFBRSxPQUFPLEtBQUtuRSxPQUFBLENBQVFvRSxJQUFBLENBQUssSUFBSTtFQUFHO0VBQUE7QUFBQTtBQUFBO0VBSWxEQyxPQUFBLEVBQVM7SUFDTCxPQUFPLEtBQUtyRSxPQUFBLENBQVFZLE1BQUEsR0FBUyxLQUFLWixPQUFBLENBQVFzRSxHQUFBLENBQUlDLENBQUEsSUFBS0EsQ0FBQSxDQUFFRixNQUFBLENBQU8sQ0FBQyxJQUFJO0VBQ3JFO0VBQUE7QUFBQTtBQUFBO0VBSUEsT0FBT0csU0FBU0MsTUFBQSxFQUFRQyxLQUFBLEVBQU87SUFDM0IsSUFBSSxDQUFDQSxLQUFBLEVBQ0QsT0FBTzdELFNBQUEsQ0FBU2tDLEtBQUE7SUFDcEIsSUFBSSxDQUFDNEIsS0FBQSxDQUFNQyxPQUFBLENBQVFGLEtBQUssR0FDcEIsTUFBTSxJQUFJakIsVUFBQSxDQUFXLHFDQUFxQztJQUM5RCxPQUFPLElBQUk1QyxTQUFBLENBQVM2RCxLQUFBLENBQU1KLEdBQUEsQ0FBSUcsTUFBQSxDQUFPSSxZQUFZLENBQUM7RUFDdEQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBLE9BQU9DLFVBQVVDLEtBQUEsRUFBTztJQUNwQixJQUFJLENBQUNBLEtBQUEsQ0FBTW5FLE1BQUEsRUFDUCxPQUFPQyxTQUFBLENBQVNrQyxLQUFBO0lBQ3BCLElBQUlpQyxNQUFBO01BQVEvRSxJQUFBLEdBQU87SUFDbkIsU0FBU1gsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXlGLEtBQUEsQ0FBTW5FLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUNuQyxJQUFJdUMsSUFBQSxHQUFPa0QsS0FBQSxDQUFNekYsQ0FBQztNQUNsQlcsSUFBQSxJQUFRNEIsSUFBQSxDQUFLbEMsUUFBQTtNQUNiLElBQUlMLENBQUEsSUFBS3VDLElBQUEsQ0FBS2hDLE1BQUEsSUFBVWtGLEtBQUEsQ0FBTXpGLENBQUEsR0FBSSxDQUFDLEVBQUVNLFVBQUEsQ0FBV2lDLElBQUksR0FBRztRQUNuRCxJQUFJLENBQUNtRCxNQUFBLEVBQ0RBLE1BQUEsR0FBU0QsS0FBQSxDQUFNaEQsS0FBQSxDQUFNLEdBQUd6QyxDQUFDO1FBQzdCMEYsTUFBQSxDQUFPQSxNQUFBLENBQU9wRSxNQUFBLEdBQVMsQ0FBQyxJQUFJaUIsSUFBQSxDQUN2QmEsUUFBQSxDQUFTc0MsTUFBQSxDQUFPQSxNQUFBLENBQU9wRSxNQUFBLEdBQVMsQ0FBQyxFQUFFZCxJQUFBLEdBQU8rQixJQUFBLENBQUsvQixJQUFJO01BQzVELFdBQ1NrRixNQUFBLEVBQVE7UUFDYkEsTUFBQSxDQUFPckMsSUFBQSxDQUFLZCxJQUFJO01BQ3BCO0lBQ0o7SUFDQSxPQUFPLElBQUloQixTQUFBLENBQVNtRSxNQUFBLElBQVVELEtBQUEsRUFBTzlFLElBQUk7RUFDN0M7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFPQSxPQUFPZSxLQUFLaUUsS0FBQSxFQUFPO0lBQ2YsSUFBSSxDQUFDQSxLQUFBLEVBQ0QsT0FBT3BFLFNBQUEsQ0FBU2tDLEtBQUE7SUFDcEIsSUFBSWtDLEtBQUEsWUFBaUJwRSxTQUFBLEVBQ2pCLE9BQU9vRSxLQUFBO0lBQ1gsSUFBSU4sS0FBQSxDQUFNQyxPQUFBLENBQVFLLEtBQUssR0FDbkIsT0FBTyxLQUFLSCxTQUFBLENBQVVHLEtBQUs7SUFDL0IsSUFBSUEsS0FBQSxDQUFNQyxLQUFBLEVBQ04sT0FBTyxJQUFJckUsU0FBQSxDQUFTLENBQUNvRSxLQUFLLEdBQUdBLEtBQUEsQ0FBTXRGLFFBQVE7SUFDL0MsTUFBTSxJQUFJOEQsVUFBQSxDQUFXLHFCQUFxQndCLEtBQUEsR0FBUSxvQkFDN0NBLEtBQUEsQ0FBTWxFLFlBQUEsR0FBZSxxRUFBcUUsR0FBRztFQUN0RztBQUNKO0FBTUE3QyxRQUFBLENBQVM2RSxLQUFBLEdBQVEsSUFBSTdFLFFBQUEsQ0FBUyxFQUFDLEVBQUcsQ0FBQztBQUNuQyxJQUFNaUgsS0FBQSxHQUFRO0VBQUVsQyxLQUFBLEVBQU87RUFBR21DLE1BQUEsRUFBUTtBQUFFO0FBQ3BDLFNBQVNyQixTQUFTZCxLQUFBLEVBQU9tQyxNQUFBLEVBQVE7RUFDN0JELEtBQUEsQ0FBTWxDLEtBQUEsR0FBUUEsS0FBQTtFQUNka0MsS0FBQSxDQUFNQyxNQUFBLEdBQVNBLE1BQUE7RUFDZixPQUFPRCxLQUFBO0FBQ1g7QUFFQSxTQUFTRSxZQUFZbEcsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7RUFDdkIsSUFBSUQsQ0FBQSxLQUFNQyxDQUFBLEVBQ04sT0FBTztFQUNYLElBQUksRUFBRUQsQ0FBQSxJQUFLLE9BQU9BLENBQUEsSUFBSyxhQUNuQixFQUFFQyxDQUFBLElBQUssT0FBT0EsQ0FBQSxJQUFLLFdBQ25CLE9BQU87RUFDWCxJQUFJMkYsS0FBQSxHQUFRSixLQUFBLENBQU1DLE9BQUEsQ0FBUXpGLENBQUM7RUFDM0IsSUFBSXdGLEtBQUEsQ0FBTUMsT0FBQSxDQUFReEYsQ0FBQyxLQUFLMkYsS0FBQSxFQUNwQixPQUFPO0VBQ1gsSUFBSUEsS0FBQSxFQUFPO0lBQ1AsSUFBSTVGLENBQUEsQ0FBRXlCLE1BQUEsSUFBVXhCLENBQUEsQ0FBRXdCLE1BQUEsRUFDZCxPQUFPO0lBQ1gsU0FBU3RCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlILENBQUEsQ0FBRXlCLE1BQUEsRUFBUXRCLENBQUEsSUFDMUIsSUFBSSxDQUFDK0YsV0FBQSxDQUFZbEcsQ0FBQSxDQUFFRyxDQUFDLEdBQUdGLENBQUEsQ0FBRUUsQ0FBQyxDQUFDLEdBQ3ZCLE9BQU87RUFDbkIsT0FDSztJQUNELFNBQVNzRSxDQUFBLElBQUt6RSxDQUFBLEVBQ1YsSUFBSSxFQUFFeUUsQ0FBQSxJQUFLeEUsQ0FBQSxLQUFNLENBQUNpRyxXQUFBLENBQVlsRyxDQUFBLENBQUV5RSxDQUFDLEdBQUd4RSxDQUFBLENBQUV3RSxDQUFDLENBQUMsR0FDcEMsT0FBTztJQUNmLFNBQVNBLENBQUEsSUFBS3hFLENBQUEsRUFDVixJQUFJLEVBQUV3RSxDQUFBLElBQUt6RSxDQUFBLEdBQ1AsT0FBTztFQUNuQjtFQUNBLE9BQU87QUFDWDtBQVVBLElBQU1oQixJQUFBLEdBQU4sTUFBTW1ILEtBQUEsQ0FBSztFQUFBO0FBQUE7QUFBQTtFQUlQeEUsWUFJQW1CLElBQUEsRUFJQWlELEtBQUEsRUFBTztJQUNILEtBQUtqRCxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLaUQsS0FBQSxHQUFRQSxLQUFBO0VBQ2pCO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFRQUssU0FBU0MsR0FBQSxFQUFLO0lBQ1YsSUFBSXJDLEtBQUE7TUFBTXNDLE1BQUEsR0FBUztJQUNuQixTQUFTbkcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWtHLEdBQUEsQ0FBSTVFLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUNqQyxJQUFJZ0QsS0FBQSxHQUFRa0QsR0FBQSxDQUFJbEcsQ0FBQztNQUNqQixJQUFJLEtBQUtpRSxFQUFBLENBQUdqQixLQUFLLEdBQ2IsT0FBT2tELEdBQUE7TUFDWCxJQUFJLEtBQUt2RCxJQUFBLENBQUt5RCxRQUFBLENBQVNwRCxLQUFBLENBQU1MLElBQUksR0FBRztRQUNoQyxJQUFJLENBQUNrQixLQUFBLEVBQ0RBLEtBQUEsR0FBT3FDLEdBQUEsQ0FBSXpELEtBQUEsQ0FBTSxHQUFHekMsQ0FBQztNQUM3QixXQUNTZ0QsS0FBQSxDQUFNTCxJQUFBLENBQUt5RCxRQUFBLENBQVMsS0FBS3pELElBQUksR0FBRztRQUNyQyxPQUFPdUQsR0FBQTtNQUNYLE9BQ0s7UUFDRCxJQUFJLENBQUNDLE1BQUEsSUFBVW5ELEtBQUEsQ0FBTUwsSUFBQSxDQUFLMEQsSUFBQSxHQUFPLEtBQUsxRCxJQUFBLENBQUswRCxJQUFBLEVBQU07VUFDN0MsSUFBSSxDQUFDeEMsS0FBQSxFQUNEQSxLQUFBLEdBQU9xQyxHQUFBLENBQUl6RCxLQUFBLENBQU0sR0FBR3pDLENBQUM7VUFDekI2RCxLQUFBLENBQUtSLElBQUEsQ0FBSyxJQUFJO1VBQ2Q4QyxNQUFBLEdBQVM7UUFDYjtRQUNBLElBQUl0QyxLQUFBLEVBQ0FBLEtBQUEsQ0FBS1IsSUFBQSxDQUFLTCxLQUFLO01BQ3ZCO0lBQ0o7SUFDQSxJQUFJLENBQUNhLEtBQUEsRUFDREEsS0FBQSxHQUFPcUMsR0FBQSxDQUFJekQsS0FBQSxDQUFNO0lBQ3JCLElBQUksQ0FBQzBELE1BQUEsRUFDRHRDLEtBQUEsQ0FBS1IsSUFBQSxDQUFLLElBQUk7SUFDbEIsT0FBT1EsS0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQXlDLGNBQWNKLEdBQUEsRUFBSztJQUNmLFNBQVNsRyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJa0csR0FBQSxDQUFJNUUsTUFBQSxFQUFRdEIsQ0FBQSxJQUM1QixJQUFJLEtBQUtpRSxFQUFBLENBQUdpQyxHQUFBLENBQUlsRyxDQUFDLENBQUMsR0FDZCxPQUFPa0csR0FBQSxDQUFJekQsS0FBQSxDQUFNLEdBQUd6QyxDQUFDLEVBQUUrRCxNQUFBLENBQU9tQyxHQUFBLENBQUl6RCxLQUFBLENBQU16QyxDQUFBLEdBQUksQ0FBQyxDQUFDO0lBQ3RELE9BQU9rRyxHQUFBO0VBQ1g7RUFBQTtBQUFBO0FBQUE7RUFJQUssUUFBUUwsR0FBQSxFQUFLO0lBQ1QsU0FBU2xHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlrRyxHQUFBLENBQUk1RSxNQUFBLEVBQVF0QixDQUFBLElBQzVCLElBQUksS0FBS2lFLEVBQUEsQ0FBR2lDLEdBQUEsQ0FBSWxHLENBQUMsQ0FBQyxHQUNkLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBaUUsR0FBR2pCLEtBQUEsRUFBTztJQUNOLE9BQU8sUUFBUUEsS0FBQSxJQUNWLEtBQUtMLElBQUEsSUFBUUssS0FBQSxDQUFNTCxJQUFBLElBQVFvRCxXQUFBLENBQVksS0FBS0gsS0FBQSxFQUFPNUMsS0FBQSxDQUFNNEMsS0FBSztFQUN2RTtFQUFBO0FBQUE7QUFBQTtFQUlBYixPQUFBLEVBQVM7SUFDTCxJQUFJeUIsR0FBQSxHQUFNO01BQUU3RCxJQUFBLEVBQU0sS0FBS0EsSUFBQSxDQUFLOEQ7SUFBSztJQUNqQyxTQUFTQyxDQUFBLElBQUssS0FBS2QsS0FBQSxFQUFPO01BQ3RCWSxHQUFBLENBQUlaLEtBQUEsR0FBUSxLQUFLQSxLQUFBO01BQ2pCO0lBQ0o7SUFDQSxPQUFPWSxHQUFBO0VBQ1g7RUFBQTtBQUFBO0FBQUE7RUFJQSxPQUFPdEIsU0FBU0MsTUFBQSxFQUFRd0IsSUFBQSxFQUFNO0lBQzFCLElBQUksQ0FBQ0EsSUFBQSxFQUNELE1BQU0sSUFBSXhDLFVBQUEsQ0FBVyxpQ0FBaUM7SUFDMUQsSUFBSXhCLElBQUEsR0FBT3dDLE1BQUEsQ0FBT3lCLEtBQUEsQ0FBTUQsSUFBQSxDQUFLaEUsSUFBSTtJQUNqQyxJQUFJLENBQUNBLElBQUEsRUFDRCxNQUFNLElBQUl3QixVQUFBLENBQVcseUJBQXlCd0MsSUFBQSxDQUFLaEUsSUFBSSxpQkFBaUI7SUFDNUUsSUFBSWtFLElBQUEsR0FBT2xFLElBQUEsQ0FBS21FLE1BQUEsQ0FBT0gsSUFBQSxDQUFLZixLQUFLO0lBQ2pDakQsSUFBQSxDQUFLb0UsVUFBQSxDQUFXRixJQUFBLENBQUtqQixLQUFLO0lBQzFCLE9BQU9pQixJQUFBO0VBQ1g7RUFBQTtBQUFBO0FBQUE7RUFJQSxPQUFPRyxRQUFRbkgsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7SUFDakIsSUFBSUQsQ0FBQSxJQUFLQyxDQUFBLEVBQ0wsT0FBTztJQUNYLElBQUlELENBQUEsQ0FBRXlCLE1BQUEsSUFBVXhCLENBQUEsQ0FBRXdCLE1BQUEsRUFDZCxPQUFPO0lBQ1gsU0FBU3RCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlILENBQUEsQ0FBRXlCLE1BQUEsRUFBUXRCLENBQUEsSUFDMUIsSUFBSSxDQUFDSCxDQUFBLENBQUVHLENBQUMsRUFBRWlFLEVBQUEsQ0FBR25FLENBQUEsQ0FBRUUsQ0FBQyxDQUFDLEdBQ2IsT0FBTztJQUNmLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0EsT0FBT2lILFFBQVFMLEtBQUEsRUFBTztJQUNsQixJQUFJLENBQUNBLEtBQUEsSUFBU3ZCLEtBQUEsQ0FBTUMsT0FBQSxDQUFRc0IsS0FBSyxLQUFLQSxLQUFBLENBQU10RixNQUFBLElBQVUsR0FDbEQsT0FBTzBFLEtBQUEsQ0FBS2tCLElBQUE7SUFDaEIsSUFBSU4sS0FBQSxZQUFpQlosS0FBQSxFQUNqQixPQUFPLENBQUNZLEtBQUs7SUFDakIsSUFBSS9DLEtBQUEsR0FBTytDLEtBQUEsQ0FBTW5FLEtBQUEsQ0FBTTtJQUN2Qm9CLEtBQUEsQ0FBS3NELElBQUEsQ0FBSyxDQUFDdEgsQ0FBQSxFQUFHQyxDQUFBLEtBQU1ELENBQUEsQ0FBRThDLElBQUEsQ0FBSzBELElBQUEsR0FBT3ZHLENBQUEsQ0FBRTZDLElBQUEsQ0FBSzBELElBQUk7SUFDN0MsT0FBT3hDLEtBQUE7RUFDWDtBQUNKO0FBSUFoRixJQUFBLENBQUtxSSxJQUFBLEdBQU8sRUFBQztBQU1iLElBQU1oSSxZQUFBLEdBQU4sY0FBMkJrSSxLQUFBLENBQU0sRUFDakM7QUFpQkEsSUFBTS9ILEtBQUEsR0FBTixNQUFNZ0ksTUFBQSxDQUFNO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBYVI3RixZQUlBZCxPQUFBLEVBSUE0RyxTQUFBLEVBSUFDLE9BQUEsRUFBUztJQUNMLEtBQUs3RyxPQUFBLEdBQVVBLE9BQUE7SUFDZixLQUFLNEcsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLEtBQUtDLE9BQUEsR0FBVUEsT0FBQTtFQUNuQjtFQUFBO0FBQUE7QUFBQTtFQUlBLElBQUk1RyxLQUFBLEVBQU87SUFDUCxPQUFPLEtBQUtELE9BQUEsQ0FBUUMsSUFBQSxHQUFPLEtBQUsyRyxTQUFBLEdBQVksS0FBS0MsT0FBQTtFQUNyRDtFQUFBO0FBQUE7QUFBQTtFQUlBQyxTQUFTekgsR0FBQSxFQUFLMEgsUUFBQSxFQUFVO0lBQ3BCLElBQUkvRyxPQUFBLEdBQVVnSCxVQUFBLENBQVcsS0FBS2hILE9BQUEsRUFBU1gsR0FBQSxHQUFNLEtBQUt1SCxTQUFBLEVBQVdHLFFBQVE7SUFDckUsT0FBTy9HLE9BQUEsSUFBVyxJQUFJMkcsTUFBQSxDQUFNM0csT0FBQSxFQUFTLEtBQUs0RyxTQUFBLEVBQVcsS0FBS0MsT0FBTztFQUNyRTtFQUFBO0FBQUE7QUFBQTtFQUlBSSxjQUFjakcsSUFBQSxFQUFNQyxFQUFBLEVBQUk7SUFDcEIsT0FBTyxJQUFJMEYsTUFBQSxDQUFNTyxXQUFBLENBQVksS0FBS2xILE9BQUEsRUFBU2dCLElBQUEsR0FBTyxLQUFLNEYsU0FBQSxFQUFXM0YsRUFBQSxHQUFLLEtBQUsyRixTQUFTLEdBQUcsS0FBS0EsU0FBQSxFQUFXLEtBQUtDLE9BQU87RUFDeEg7RUFBQTtBQUFBO0FBQUE7RUFJQXRELEdBQUdqQixLQUFBLEVBQU87SUFDTixPQUFPLEtBQUt0QyxPQUFBLENBQVF1RCxFQUFBLENBQUdqQixLQUFBLENBQU10QyxPQUFPLEtBQUssS0FBSzRHLFNBQUEsSUFBYXRFLEtBQUEsQ0FBTXNFLFNBQUEsSUFBYSxLQUFLQyxPQUFBLElBQVd2RSxLQUFBLENBQU11RSxPQUFBO0VBQ3hHO0VBQUE7QUFBQTtBQUFBO0VBSUEzQyxTQUFBLEVBQVc7SUFDUCxPQUFPLEtBQUtsRSxPQUFBLEdBQVUsTUFBTSxLQUFLNEcsU0FBQSxHQUFZLE1BQU0sS0FBS0MsT0FBQSxHQUFVO0VBQ3RFO0VBQUE7QUFBQTtBQUFBO0VBSUF4QyxPQUFBLEVBQVM7SUFDTCxJQUFJLENBQUMsS0FBS3JFLE9BQUEsQ0FBUUMsSUFBQSxFQUNkLE9BQU87SUFDWCxJQUFJZ0csSUFBQSxHQUFPO01BQUVqRyxPQUFBLEVBQVMsS0FBS0EsT0FBQSxDQUFRcUUsTUFBQSxDQUFPO0lBQUU7SUFDNUMsSUFBSSxLQUFLdUMsU0FBQSxHQUFZLEdBQ2pCWCxJQUFBLENBQUtXLFNBQUEsR0FBWSxLQUFLQSxTQUFBO0lBQzFCLElBQUksS0FBS0MsT0FBQSxHQUFVLEdBQ2ZaLElBQUEsQ0FBS1ksT0FBQSxHQUFVLEtBQUtBLE9BQUE7SUFDeEIsT0FBT1osSUFBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUEsT0FBT3pCLFNBQVNDLE1BQUEsRUFBUXdCLElBQUEsRUFBTTtJQUMxQixJQUFJLENBQUNBLElBQUEsRUFDRCxPQUFPVSxNQUFBLENBQU01RCxLQUFBO0lBQ2pCLElBQUk2RCxTQUFBLEdBQVlYLElBQUEsQ0FBS1csU0FBQSxJQUFhO01BQUdDLE9BQUEsR0FBVVosSUFBQSxDQUFLWSxPQUFBLElBQVc7SUFDL0QsSUFBSSxPQUFPRCxTQUFBLElBQWEsWUFBWSxPQUFPQyxPQUFBLElBQVcsVUFDbEQsTUFBTSxJQUFJcEQsVUFBQSxDQUFXLGtDQUFrQztJQUMzRCxPQUFPLElBQUlrRCxNQUFBLENBQU16SSxRQUFBLENBQVNzRyxRQUFBLENBQVNDLE1BQUEsRUFBUXdCLElBQUEsQ0FBS2pHLE9BQU8sR0FBRzRHLFNBQUEsRUFBV0MsT0FBTztFQUNoRjtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0EsT0FBT00sUUFBUUosUUFBQSxFQUFVSyxhQUFBLEdBQWdCLE1BQU07SUFDM0MsSUFBSVIsU0FBQSxHQUFZO01BQUdDLE9BQUEsR0FBVTtJQUM3QixTQUFTdEMsQ0FBQSxHQUFJd0MsUUFBQSxDQUFTdEUsVUFBQSxFQUFZOEIsQ0FBQSxJQUFLLENBQUNBLENBQUEsQ0FBRXZDLE1BQUEsS0FBV29GLGFBQUEsSUFBaUIsQ0FBQzdDLENBQUEsQ0FBRXRDLElBQUEsQ0FBS0MsSUFBQSxDQUFLbUYsU0FBQSxHQUFZOUMsQ0FBQSxHQUFJQSxDQUFBLENBQUU5QixVQUFBLEVBQ2pHbUUsU0FBQTtJQUNKLFNBQVNyQyxDQUFBLEdBQUl3QyxRQUFBLENBQVN2RSxTQUFBLEVBQVcrQixDQUFBLElBQUssQ0FBQ0EsQ0FBQSxDQUFFdkMsTUFBQSxLQUFXb0YsYUFBQSxJQUFpQixDQUFDN0MsQ0FBQSxDQUFFdEMsSUFBQSxDQUFLQyxJQUFBLENBQUttRixTQUFBLEdBQVk5QyxDQUFBLEdBQUlBLENBQUEsQ0FBRS9CLFNBQUEsRUFDaEdxRSxPQUFBO0lBQ0osT0FBTyxJQUFJRixNQUFBLENBQU1JLFFBQUEsRUFBVUgsU0FBQSxFQUFXQyxPQUFPO0VBQ2pEO0FBQ0o7QUFJQWxJLEtBQUEsQ0FBTW9FLEtBQUEsR0FBUSxJQUFJcEUsS0FBQSxDQUFNVCxRQUFBLENBQVM2RSxLQUFBLEVBQU8sR0FBRyxDQUFDO0FBQzVDLFNBQVNtRSxZQUFZbEgsT0FBQSxFQUFTZ0IsSUFBQSxFQUFNQyxFQUFBLEVBQUk7RUFDcEMsSUFBSTtNQUFFZ0MsS0FBQTtNQUFPbUM7SUFBTyxJQUFJcEYsT0FBQSxDQUFROEQsU0FBQSxDQUFVOUMsSUFBSTtJQUFHdkIsS0FBQSxHQUFRTyxPQUFBLENBQVEwRCxVQUFBLENBQVdULEtBQUs7RUFDakYsSUFBSTtJQUFFQSxLQUFBLEVBQU9xRSxPQUFBO0lBQVNsQyxNQUFBLEVBQVFtQztFQUFTLElBQUl2SCxPQUFBLENBQVE4RCxTQUFBLENBQVU3QyxFQUFFO0VBQy9ELElBQUltRSxNQUFBLElBQVVwRSxJQUFBLElBQVF2QixLQUFBLENBQU1JLE1BQUEsRUFBUTtJQUNoQyxJQUFJMEgsUUFBQSxJQUFZdEcsRUFBQSxJQUFNLENBQUNqQixPQUFBLENBQVFQLEtBQUEsQ0FBTTZILE9BQU8sRUFBRXpILE1BQUEsRUFDMUMsTUFBTSxJQUFJNEQsVUFBQSxDQUFXLHlCQUF5QjtJQUNsRCxPQUFPekQsT0FBQSxDQUFRNEMsR0FBQSxDQUFJLEdBQUc1QixJQUFJLEVBQUVxQixNQUFBLENBQU9yQyxPQUFBLENBQVE0QyxHQUFBLENBQUkzQixFQUFFLENBQUM7RUFDdEQ7RUFDQSxJQUFJZ0MsS0FBQSxJQUFTcUUsT0FBQSxFQUNULE1BQU0sSUFBSTdELFVBQUEsQ0FBVyx5QkFBeUI7RUFDbEQsT0FBT3pELE9BQUEsQ0FBUWdELFlBQUEsQ0FBYUMsS0FBQSxFQUFPeEQsS0FBQSxDQUFNK0gsSUFBQSxDQUFLTixXQUFBLENBQVl6SCxLQUFBLENBQU1PLE9BQUEsRUFBU2dCLElBQUEsR0FBT29FLE1BQUEsR0FBUyxHQUFHbkUsRUFBQSxHQUFLbUUsTUFBQSxHQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2pIO0FBQ0EsU0FBUzRCLFdBQVdoSCxPQUFBLEVBQVN5SCxJQUFBLEVBQU1DLE1BQUEsRUFBUXRHLE1BQUEsRUFBUTtFQUMvQyxJQUFJO01BQUU2QixLQUFBO01BQU9tQztJQUFPLElBQUlwRixPQUFBLENBQVE4RCxTQUFBLENBQVUyRCxJQUFJO0lBQUdoSSxLQUFBLEdBQVFPLE9BQUEsQ0FBUTBELFVBQUEsQ0FBV1QsS0FBSztFQUNqRixJQUFJbUMsTUFBQSxJQUFVcUMsSUFBQSxJQUFRaEksS0FBQSxDQUFNSSxNQUFBLEVBQVE7SUFDaEMsSUFBSXVCLE1BQUEsSUFBVSxDQUFDQSxNQUFBLENBQU91RyxVQUFBLENBQVcxRSxLQUFBLEVBQU9BLEtBQUEsRUFBT3lFLE1BQU0sR0FDakQsT0FBTztJQUNYLE9BQU8xSCxPQUFBLENBQVE0QyxHQUFBLENBQUksR0FBRzZFLElBQUksRUFBRXBGLE1BQUEsQ0FBT3FGLE1BQU0sRUFBRXJGLE1BQUEsQ0FBT3JDLE9BQUEsQ0FBUTRDLEdBQUEsQ0FBSTZFLElBQUksQ0FBQztFQUN2RTtFQUNBLElBQUl2SCxLQUFBLEdBQVE4RyxVQUFBLENBQVd2SCxLQUFBLENBQU1PLE9BQUEsRUFBU3lILElBQUEsR0FBT3JDLE1BQUEsR0FBUyxHQUFHc0MsTUFBQSxFQUFRakksS0FBSztFQUN0RSxPQUFPUyxLQUFBLElBQVNGLE9BQUEsQ0FBUWdELFlBQUEsQ0FBYUMsS0FBQSxFQUFPeEQsS0FBQSxDQUFNK0gsSUFBQSxDQUFLdEgsS0FBSyxDQUFDO0FBQ2pFO0FBQ0EsU0FBUzBILFFBQVFDLEtBQUEsRUFBT0MsR0FBQSxFQUFLL0YsS0FBQSxFQUFPO0VBQ2hDLElBQUlBLEtBQUEsQ0FBTTZFLFNBQUEsR0FBWWlCLEtBQUEsQ0FBTUUsS0FBQSxFQUN4QixNQUFNLElBQUl2SixZQUFBLENBQWEsaURBQWlEO0VBQzVFLElBQUlxSixLQUFBLENBQU1FLEtBQUEsR0FBUWhHLEtBQUEsQ0FBTTZFLFNBQUEsSUFBYWtCLEdBQUEsQ0FBSUMsS0FBQSxHQUFRaEcsS0FBQSxDQUFNOEUsT0FBQSxFQUNuRCxNQUFNLElBQUlySSxZQUFBLENBQWEsMEJBQTBCO0VBQ3JELE9BQU93SixZQUFBLENBQWFILEtBQUEsRUFBT0MsR0FBQSxFQUFLL0YsS0FBQSxFQUFPLENBQUM7QUFDNUM7QUFDQSxTQUFTaUcsYUFBYUgsS0FBQSxFQUFPQyxHQUFBLEVBQUsvRixLQUFBLEVBQU9nRyxLQUFBLEVBQU87RUFDNUMsSUFBSTlFLEtBQUEsR0FBUTRFLEtBQUEsQ0FBTTVFLEtBQUEsQ0FBTThFLEtBQUs7SUFBR2xHLElBQUEsR0FBT2dHLEtBQUEsQ0FBTWhHLElBQUEsQ0FBS2tHLEtBQUs7RUFDdkQsSUFBSTlFLEtBQUEsSUFBUzZFLEdBQUEsQ0FBSTdFLEtBQUEsQ0FBTThFLEtBQUssS0FBS0EsS0FBQSxHQUFRRixLQUFBLENBQU1FLEtBQUEsR0FBUWhHLEtBQUEsQ0FBTTZFLFNBQUEsRUFBVztJQUNwRSxJQUFJMUcsS0FBQSxHQUFROEgsWUFBQSxDQUFhSCxLQUFBLEVBQU9DLEdBQUEsRUFBSy9GLEtBQUEsRUFBT2dHLEtBQUEsR0FBUSxDQUFDO0lBQ3JELE9BQU9sRyxJQUFBLENBQUsyRixJQUFBLENBQUszRixJQUFBLENBQUs3QixPQUFBLENBQVFnRCxZQUFBLENBQWFDLEtBQUEsRUFBTy9DLEtBQUssQ0FBQztFQUM1RCxXQUNTLENBQUM2QixLQUFBLENBQU0vQixPQUFBLENBQVFDLElBQUEsRUFBTTtJQUMxQixPQUFPZ0ksS0FBQSxDQUFNcEcsSUFBQSxFQUFNcUcsYUFBQSxDQUFjTCxLQUFBLEVBQU9DLEdBQUEsRUFBS0MsS0FBSyxDQUFDO0VBQ3ZELFdBQ1MsQ0FBQ2hHLEtBQUEsQ0FBTTZFLFNBQUEsSUFBYSxDQUFDN0UsS0FBQSxDQUFNOEUsT0FBQSxJQUFXZ0IsS0FBQSxDQUFNRSxLQUFBLElBQVNBLEtBQUEsSUFBU0QsR0FBQSxDQUFJQyxLQUFBLElBQVNBLEtBQUEsRUFBTztJQUN2RixJQUFJM0csTUFBQSxHQUFTeUcsS0FBQSxDQUFNekcsTUFBQTtNQUFRcEIsT0FBQSxHQUFVb0IsTUFBQSxDQUFPcEIsT0FBQTtJQUM1QyxPQUFPaUksS0FBQSxDQUFNN0csTUFBQSxFQUFRcEIsT0FBQSxDQUFRNEMsR0FBQSxDQUFJLEdBQUdpRixLQUFBLENBQU1NLFlBQVksRUFBRTlGLE1BQUEsQ0FBT04sS0FBQSxDQUFNL0IsT0FBTyxFQUFFcUMsTUFBQSxDQUFPckMsT0FBQSxDQUFRNEMsR0FBQSxDQUFJa0YsR0FBQSxDQUFJSyxZQUFZLENBQUMsQ0FBQztFQUN2SCxPQUNLO0lBQ0QsSUFBSTtNQUFFN0csS0FBQTtNQUFPRDtJQUFJLElBQUkrRyxzQkFBQSxDQUF1QnJHLEtBQUEsRUFBTzhGLEtBQUs7SUFDeEQsT0FBT0ksS0FBQSxDQUFNcEcsSUFBQSxFQUFNd0csZUFBQSxDQUFnQlIsS0FBQSxFQUFPdkcsS0FBQSxFQUFPRCxHQUFBLEVBQUt5RyxHQUFBLEVBQUtDLEtBQUssQ0FBQztFQUNyRTtBQUNKO0FBQ0EsU0FBU08sVUFBVUMsSUFBQSxFQUFNQyxHQUFBLEVBQUs7RUFDMUIsSUFBSSxDQUFDQSxHQUFBLENBQUl2RyxJQUFBLENBQUt3RyxpQkFBQSxDQUFrQkYsSUFBQSxDQUFLdEcsSUFBSSxHQUNyQyxNQUFNLElBQUl6RCxZQUFBLENBQWEsaUJBQWlCZ0ssR0FBQSxDQUFJdkcsSUFBQSxDQUFLOEQsSUFBQSxHQUFPLFdBQVd3QyxJQUFBLENBQUt0RyxJQUFBLENBQUs4RCxJQUFJO0FBQ3pGO0FBQ0EsU0FBUzJDLFNBQVNDLE9BQUEsRUFBU0MsTUFBQSxFQUFRYixLQUFBLEVBQU87RUFDdEMsSUFBSWxHLElBQUEsR0FBTzhHLE9BQUEsQ0FBUTlHLElBQUEsQ0FBS2tHLEtBQUs7RUFDN0JPLFNBQUEsQ0FBVXpHLElBQUEsRUFBTStHLE1BQUEsQ0FBTy9HLElBQUEsQ0FBS2tHLEtBQUssQ0FBQztFQUNsQyxPQUFPbEcsSUFBQTtBQUNYO0FBQ0EsU0FBU2dILFFBQVFwSixLQUFBLEVBQU9xSixNQUFBLEVBQVE7RUFDNUIsSUFBSXZHLElBQUEsR0FBT3VHLE1BQUEsQ0FBT2xJLE1BQUEsR0FBUztFQUMzQixJQUFJMkIsSUFBQSxJQUFRLEtBQUs5QyxLQUFBLENBQU1JLE1BQUEsSUFBVUosS0FBQSxDQUFNRyxVQUFBLENBQVdrSixNQUFBLENBQU92RyxJQUFJLENBQUMsR0FDMUR1RyxNQUFBLENBQU92RyxJQUFJLElBQUk5QyxLQUFBLENBQU1pRCxRQUFBLENBQVNvRyxNQUFBLENBQU92RyxJQUFJLEVBQUV6QyxJQUFBLEdBQU9MLEtBQUEsQ0FBTUssSUFBSSxPQUU1RGdKLE1BQUEsQ0FBT25HLElBQUEsQ0FBS2xELEtBQUs7QUFDekI7QUFDQSxTQUFTc0osU0FBU0MsTUFBQSxFQUFRQyxJQUFBLEVBQU1sQixLQUFBLEVBQU9lLE1BQUEsRUFBUTtFQUMzQyxJQUFJakgsSUFBQSxJQUFRb0gsSUFBQSxJQUFRRCxNQUFBLEVBQVFuSCxJQUFBLENBQUtrRyxLQUFLO0VBQ3RDLElBQUltQixVQUFBLEdBQWE7SUFBR0MsUUFBQSxHQUFXRixJQUFBLEdBQU9BLElBQUEsQ0FBS2hHLEtBQUEsQ0FBTThFLEtBQUssSUFBSWxHLElBQUEsQ0FBS3RDLFVBQUE7RUFDL0QsSUFBSXlKLE1BQUEsRUFBUTtJQUNSRSxVQUFBLEdBQWFGLE1BQUEsQ0FBTy9GLEtBQUEsQ0FBTThFLEtBQUs7SUFDL0IsSUFBSWlCLE1BQUEsQ0FBT2pCLEtBQUEsR0FBUUEsS0FBQSxFQUFPO01BQ3RCbUIsVUFBQTtJQUNKLFdBQ1NGLE1BQUEsQ0FBT0ksVUFBQSxFQUFZO01BQ3hCUCxPQUFBLENBQVFHLE1BQUEsQ0FBT0ssU0FBQSxFQUFXUCxNQUFNO01BQ2hDSSxVQUFBO0lBQ0o7RUFDSjtFQUNBLFNBQVM1SixDQUFBLEdBQUk0SixVQUFBLEVBQVk1SixDQUFBLEdBQUk2SixRQUFBLEVBQVU3SixDQUFBLElBQ25DdUosT0FBQSxDQUFRaEgsSUFBQSxDQUFLcEMsS0FBQSxDQUFNSCxDQUFDLEdBQUd3SixNQUFNO0VBQ2pDLElBQUlHLElBQUEsSUFBUUEsSUFBQSxDQUFLbEIsS0FBQSxJQUFTQSxLQUFBLElBQVNrQixJQUFBLENBQUtHLFVBQUEsRUFDcENQLE9BQUEsQ0FBUUksSUFBQSxDQUFLSyxVQUFBLEVBQVlSLE1BQU07QUFDdkM7QUFDQSxTQUFTYixNQUFNcEcsSUFBQSxFQUFNN0IsT0FBQSxFQUFTO0VBQzFCNkIsSUFBQSxDQUFLSSxJQUFBLENBQUtzSCxZQUFBLENBQWF2SixPQUFPO0VBQzlCLE9BQU82QixJQUFBLENBQUsyRixJQUFBLENBQUt4SCxPQUFPO0FBQzVCO0FBQ0EsU0FBU3FJLGdCQUFnQlIsS0FBQSxFQUFPbUIsTUFBQSxFQUFRQyxJQUFBLEVBQU1uQixHQUFBLEVBQUtDLEtBQUEsRUFBTztFQUN0RCxJQUFJbkIsU0FBQSxHQUFZaUIsS0FBQSxDQUFNRSxLQUFBLEdBQVFBLEtBQUEsSUFBU1csUUFBQSxDQUFTYixLQUFBLEVBQU9tQixNQUFBLEVBQVFqQixLQUFBLEdBQVEsQ0FBQztFQUN4RSxJQUFJbEIsT0FBQSxHQUFVaUIsR0FBQSxDQUFJQyxLQUFBLEdBQVFBLEtBQUEsSUFBU1csUUFBQSxDQUFTTyxJQUFBLEVBQU1uQixHQUFBLEVBQUtDLEtBQUEsR0FBUSxDQUFDO0VBQ2hFLElBQUkvSCxPQUFBLEdBQVUsRUFBQztFQUNmK0ksUUFBQSxDQUFTLE1BQU1sQixLQUFBLEVBQU9FLEtBQUEsRUFBTy9ILE9BQU87RUFDcEMsSUFBSTRHLFNBQUEsSUFBYUMsT0FBQSxJQUFXbUMsTUFBQSxDQUFPL0YsS0FBQSxDQUFNOEUsS0FBSyxLQUFLa0IsSUFBQSxDQUFLaEcsS0FBQSxDQUFNOEUsS0FBSyxHQUFHO0lBQ2xFTyxTQUFBLENBQVUxQixTQUFBLEVBQVdDLE9BQU87SUFDNUJnQyxPQUFBLENBQVFaLEtBQUEsQ0FBTXJCLFNBQUEsRUFBV3lCLGVBQUEsQ0FBZ0JSLEtBQUEsRUFBT21CLE1BQUEsRUFBUUMsSUFBQSxFQUFNbkIsR0FBQSxFQUFLQyxLQUFBLEdBQVEsQ0FBQyxDQUFDLEdBQUcvSCxPQUFPO0VBQzNGLE9BQ0s7SUFDRCxJQUFJNEcsU0FBQSxFQUNBaUMsT0FBQSxDQUFRWixLQUFBLENBQU1yQixTQUFBLEVBQVdzQixhQUFBLENBQWNMLEtBQUEsRUFBT21CLE1BQUEsRUFBUWpCLEtBQUEsR0FBUSxDQUFDLENBQUMsR0FBRy9ILE9BQU87SUFDOUUrSSxRQUFBLENBQVNDLE1BQUEsRUFBUUMsSUFBQSxFQUFNbEIsS0FBQSxFQUFPL0gsT0FBTztJQUNyQyxJQUFJNkcsT0FBQSxFQUNBZ0MsT0FBQSxDQUFRWixLQUFBLENBQU1wQixPQUFBLEVBQVNxQixhQUFBLENBQWNlLElBQUEsRUFBTW5CLEdBQUEsRUFBS0MsS0FBQSxHQUFRLENBQUMsQ0FBQyxHQUFHL0gsT0FBTztFQUM1RTtFQUNBK0ksUUFBQSxDQUFTakIsR0FBQSxFQUFLLE1BQU1DLEtBQUEsRUFBTy9ILE9BQU87RUFDbEMsT0FBTyxJQUFJOUIsUUFBQSxDQUFTOEIsT0FBTztBQUMvQjtBQUNBLFNBQVNrSSxjQUFjTCxLQUFBLEVBQU9DLEdBQUEsRUFBS0MsS0FBQSxFQUFPO0VBQ3RDLElBQUkvSCxPQUFBLEdBQVUsRUFBQztFQUNmK0ksUUFBQSxDQUFTLE1BQU1sQixLQUFBLEVBQU9FLEtBQUEsRUFBTy9ILE9BQU87RUFDcEMsSUFBSTZILEtBQUEsQ0FBTUUsS0FBQSxHQUFRQSxLQUFBLEVBQU87SUFDckIsSUFBSTlGLElBQUEsR0FBT3lHLFFBQUEsQ0FBU2IsS0FBQSxFQUFPQyxHQUFBLEVBQUtDLEtBQUEsR0FBUSxDQUFDO0lBQ3pDYyxPQUFBLENBQVFaLEtBQUEsQ0FBTWhHLElBQUEsRUFBTWlHLGFBQUEsQ0FBY0wsS0FBQSxFQUFPQyxHQUFBLEVBQUtDLEtBQUEsR0FBUSxDQUFDLENBQUMsR0FBRy9ILE9BQU87RUFDdEU7RUFDQStJLFFBQUEsQ0FBU2pCLEdBQUEsRUFBSyxNQUFNQyxLQUFBLEVBQU8vSCxPQUFPO0VBQ2xDLE9BQU8sSUFBSTlCLFFBQUEsQ0FBUzhCLE9BQU87QUFDL0I7QUFDQSxTQUFTb0ksdUJBQXVCckcsS0FBQSxFQUFPeUgsTUFBQSxFQUFRO0VBQzNDLElBQUlDLEtBQUEsR0FBUUQsTUFBQSxDQUFPekIsS0FBQSxHQUFRaEcsS0FBQSxDQUFNNkUsU0FBQTtJQUFXeEYsTUFBQSxHQUFTb0ksTUFBQSxDQUFPM0gsSUFBQSxDQUFLNEgsS0FBSztFQUN0RSxJQUFJNUgsSUFBQSxHQUFPVCxNQUFBLENBQU9vRyxJQUFBLENBQUt6RixLQUFBLENBQU0vQixPQUFPO0VBQ3BDLFNBQVNWLENBQUEsR0FBSW1LLEtBQUEsR0FBUSxHQUFHbkssQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDNUJ1QyxJQUFBLEdBQU8ySCxNQUFBLENBQU8zSCxJQUFBLENBQUt2QyxDQUFDLEVBQUVrSSxJQUFBLENBQUt0SixRQUFBLENBQVM4QyxJQUFBLENBQUthLElBQUksQ0FBQztFQUNsRCxPQUFPO0lBQUVQLEtBQUEsRUFBT08sSUFBQSxDQUFLNkgsY0FBQSxDQUFlM0gsS0FBQSxDQUFNNkUsU0FBQSxHQUFZNkMsS0FBSztJQUN2RHBJLEdBQUEsRUFBS1EsSUFBQSxDQUFLNkgsY0FBQSxDQUFlN0gsSUFBQSxDQUFLN0IsT0FBQSxDQUFRQyxJQUFBLEdBQU84QixLQUFBLENBQU04RSxPQUFBLEdBQVU0QyxLQUFLO0VBQUU7QUFDNUU7QUFZQSxJQUFNaEwsV0FBQSxHQUFOLE1BQU1rTCxZQUFBLENBQVk7RUFBQTtBQUFBO0FBQUE7RUFJZDdJLFlBSUF6QixHQUFBLEVBSUF1SyxJQUFBLEVBSUF6QixZQUFBLEVBQWM7SUFDVixLQUFLOUksR0FBQSxHQUFNQSxHQUFBO0lBQ1gsS0FBS3VLLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUt6QixZQUFBLEdBQWVBLFlBQUE7SUFDcEIsS0FBS0osS0FBQSxHQUFRNkIsSUFBQSxDQUFLaEosTUFBQSxHQUFTLElBQUk7RUFDbkM7RUFBQTtBQUFBO0FBQUE7RUFJQWlKLGFBQWFDLEdBQUEsRUFBSztJQUNkLElBQUlBLEdBQUEsSUFBTyxNQUNQLE9BQU8sS0FBSy9CLEtBQUE7SUFDaEIsSUFBSStCLEdBQUEsR0FBTSxHQUNOLE9BQU8sS0FBSy9CLEtBQUEsR0FBUStCLEdBQUE7SUFDeEIsT0FBT0EsR0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1BLElBQUkxSSxPQUFBLEVBQVM7SUFBRSxPQUFPLEtBQUtTLElBQUEsQ0FBSyxLQUFLa0csS0FBSztFQUFHO0VBQUE7QUFBQTtBQUFBO0VBSTdDLElBQUlnQyxJQUFBLEVBQU07SUFBRSxPQUFPLEtBQUtsSSxJQUFBLENBQUssQ0FBQztFQUFHO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLakNBLEtBQUtrRyxLQUFBLEVBQU87SUFBRSxPQUFPLEtBQUs2QixJQUFBLENBQUssS0FBS0MsWUFBQSxDQUFhOUIsS0FBSyxJQUFJLENBQUM7RUFBRztFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNOUQ5RSxNQUFNOEUsS0FBQSxFQUFPO0lBQUUsT0FBTyxLQUFLNkIsSUFBQSxDQUFLLEtBQUtDLFlBQUEsQ0FBYTlCLEtBQUssSUFBSSxJQUFJLENBQUM7RUFBRztFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS25FaUMsV0FBV2pDLEtBQUEsRUFBTztJQUNkQSxLQUFBLEdBQVEsS0FBSzhCLFlBQUEsQ0FBYTlCLEtBQUs7SUFDL0IsT0FBTyxLQUFLOUUsS0FBQSxDQUFNOEUsS0FBSyxLQUFLQSxLQUFBLElBQVMsS0FBS0EsS0FBQSxJQUFTLENBQUMsS0FBS3FCLFVBQUEsR0FBYSxJQUFJO0VBQzlFO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQTlILE1BQU15RyxLQUFBLEVBQU87SUFDVEEsS0FBQSxHQUFRLEtBQUs4QixZQUFBLENBQWE5QixLQUFLO0lBQy9CLE9BQU9BLEtBQUEsSUFBUyxJQUFJLElBQUksS0FBSzZCLElBQUEsQ0FBSzdCLEtBQUEsR0FBUSxJQUFJLENBQUMsSUFBSTtFQUN2RDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0ExRyxJQUFJMEcsS0FBQSxFQUFPO0lBQ1BBLEtBQUEsR0FBUSxLQUFLOEIsWUFBQSxDQUFhOUIsS0FBSztJQUMvQixPQUFPLEtBQUt6RyxLQUFBLENBQU15RyxLQUFLLElBQUksS0FBS2xHLElBQUEsQ0FBS2tHLEtBQUssRUFBRS9ILE9BQUEsQ0FBUUMsSUFBQTtFQUN4RDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQWdLLE9BQU9sQyxLQUFBLEVBQU87SUFDVkEsS0FBQSxHQUFRLEtBQUs4QixZQUFBLENBQWE5QixLQUFLO0lBQy9CLElBQUksQ0FBQ0EsS0FBQSxFQUNELE1BQU0sSUFBSXRFLFVBQUEsQ0FBVyxnREFBZ0Q7SUFDekUsT0FBT3NFLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEdBQVEsSUFBSSxLQUFLMUksR0FBQSxHQUFNLEtBQUt1SyxJQUFBLENBQUs3QixLQUFBLEdBQVEsSUFBSSxDQUFDO0VBQ3ZFO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQW1DLE1BQU1uQyxLQUFBLEVBQU87SUFDVEEsS0FBQSxHQUFRLEtBQUs4QixZQUFBLENBQWE5QixLQUFLO0lBQy9CLElBQUksQ0FBQ0EsS0FBQSxFQUNELE1BQU0sSUFBSXRFLFVBQUEsQ0FBVywrQ0FBK0M7SUFDeEUsT0FBT3NFLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEdBQVEsSUFBSSxLQUFLMUksR0FBQSxHQUFNLEtBQUt1SyxJQUFBLENBQUs3QixLQUFBLEdBQVEsSUFBSSxDQUFDLElBQUksS0FBSzZCLElBQUEsQ0FBSzdCLEtBQUEsR0FBUSxDQUFDLEVBQUVwSSxRQUFBO0VBQ2hHO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1BLElBQUl5SixXQUFBLEVBQWE7SUFBRSxPQUFPLEtBQUsvSixHQUFBLEdBQU0sS0FBS3VLLElBQUEsQ0FBSyxLQUFLQSxJQUFBLENBQUtoSixNQUFBLEdBQVMsQ0FBQztFQUFHO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU10RSxJQUFJeUksVUFBQSxFQUFZO0lBQ1osSUFBSWpJLE1BQUEsR0FBUyxLQUFLQSxNQUFBO01BQVE2QixLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNLEtBQUs4RSxLQUFLO0lBQ3ZELElBQUk5RSxLQUFBLElBQVM3QixNQUFBLENBQU83QixVQUFBLEVBQ2hCLE9BQU87SUFDWCxJQUFJNEssSUFBQSxHQUFPLEtBQUs5SyxHQUFBLEdBQU0sS0FBS3VLLElBQUEsQ0FBSyxLQUFLQSxJQUFBLENBQUtoSixNQUFBLEdBQVMsQ0FBQztNQUFHbkIsS0FBQSxHQUFRMkIsTUFBQSxDQUFPM0IsS0FBQSxDQUFNd0QsS0FBSztJQUNqRixPQUFPa0gsSUFBQSxHQUFPL0ksTUFBQSxDQUFPM0IsS0FBQSxDQUFNd0QsS0FBSyxFQUFFTCxHQUFBLENBQUl1SCxJQUFJLElBQUkxSyxLQUFBO0VBQ2xEO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1BLElBQUk2SixXQUFBLEVBQWE7SUFDYixJQUFJckcsS0FBQSxHQUFRLEtBQUtBLEtBQUEsQ0FBTSxLQUFLOEUsS0FBSztJQUNqQyxJQUFJb0MsSUFBQSxHQUFPLEtBQUs5SyxHQUFBLEdBQU0sS0FBS3VLLElBQUEsQ0FBSyxLQUFLQSxJQUFBLENBQUtoSixNQUFBLEdBQVMsQ0FBQztJQUNwRCxJQUFJdUosSUFBQSxFQUNBLE9BQU8sS0FBSy9JLE1BQUEsQ0FBTzNCLEtBQUEsQ0FBTXdELEtBQUssRUFBRUwsR0FBQSxDQUFJLEdBQUd1SCxJQUFJO0lBQy9DLE9BQU9sSCxLQUFBLElBQVMsSUFBSSxPQUFPLEtBQUs3QixNQUFBLENBQU8zQixLQUFBLENBQU13RCxLQUFBLEdBQVEsQ0FBQztFQUMxRDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0FtSCxXQUFXbkgsS0FBQSxFQUFPOEUsS0FBQSxFQUFPO0lBQ3JCQSxLQUFBLEdBQVEsS0FBSzhCLFlBQUEsQ0FBYTlCLEtBQUs7SUFDL0IsSUFBSWxHLElBQUEsR0FBTyxLQUFLK0gsSUFBQSxDQUFLN0IsS0FBQSxHQUFRLENBQUM7TUFBRzFJLEdBQUEsR0FBTTBJLEtBQUEsSUFBUyxJQUFJLElBQUksS0FBSzZCLElBQUEsQ0FBSzdCLEtBQUEsR0FBUSxJQUFJLENBQUMsSUFBSTtJQUNuRixTQUFTekksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJELEtBQUEsRUFBTzNELENBQUEsSUFDdkJELEdBQUEsSUFBT3dDLElBQUEsQ0FBS3BDLEtBQUEsQ0FBTUgsQ0FBQyxFQUFFSyxRQUFBO0lBQ3pCLE9BQU9OLEdBQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU9BNkcsTUFBQSxFQUFRO0lBQ0osSUFBSTlFLE1BQUEsR0FBUyxLQUFLQSxNQUFBO01BQVE2QixLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNO0lBRTdDLElBQUk3QixNQUFBLENBQU9wQixPQUFBLENBQVFDLElBQUEsSUFBUSxHQUN2QixPQUFPOUIsSUFBQSxDQUFLcUksSUFBQTtJQUVoQixJQUFJLEtBQUs0QyxVQUFBLEVBQ0wsT0FBT2hJLE1BQUEsQ0FBTzNCLEtBQUEsQ0FBTXdELEtBQUssRUFBRWlELEtBQUE7SUFDL0IsSUFBSXFDLElBQUEsR0FBT25ILE1BQUEsQ0FBT3NDLFVBQUEsQ0FBV1QsS0FBQSxHQUFRLENBQUM7TUFBR1gsS0FBQSxHQUFRbEIsTUFBQSxDQUFPc0MsVUFBQSxDQUFXVCxLQUFLO0lBR3hFLElBQUksQ0FBQ3NGLElBQUEsRUFBTTtNQUNQLElBQUk4QixHQUFBLEdBQU05QixJQUFBO01BQ1ZBLElBQUEsR0FBT2pHLEtBQUE7TUFDUEEsS0FBQSxHQUFRK0gsR0FBQTtJQUNaO0lBR0EsSUFBSW5FLEtBQUEsR0FBUXFDLElBQUEsQ0FBS3JDLEtBQUE7SUFDakIsU0FBUzVHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk0RyxLQUFBLENBQU10RixNQUFBLEVBQVF0QixDQUFBLElBQzlCLElBQUk0RyxLQUFBLENBQU01RyxDQUFDLEVBQUUyQyxJQUFBLENBQUtDLElBQUEsQ0FBS29JLFNBQUEsS0FBYyxVQUFVLENBQUNoSSxLQUFBLElBQVMsQ0FBQzRELEtBQUEsQ0FBTTVHLENBQUMsRUFBRXVHLE9BQUEsQ0FBUXZELEtBQUEsQ0FBTTRELEtBQUssSUFDbEZBLEtBQUEsR0FBUUEsS0FBQSxDQUFNNUcsQ0FBQSxFQUFHLEVBQUVzRyxhQUFBLENBQWNNLEtBQUs7SUFDOUMsT0FBT0EsS0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVNBcUUsWUFBWXRCLElBQUEsRUFBTTtJQUNkLElBQUlpQixLQUFBLEdBQVEsS0FBSzlJLE1BQUEsQ0FBT3NDLFVBQUEsQ0FBVyxLQUFLVCxLQUFBLENBQU0sQ0FBQztJQUMvQyxJQUFJLENBQUNpSCxLQUFBLElBQVMsQ0FBQ0EsS0FBQSxDQUFNTSxRQUFBLEVBQ2pCLE9BQU87SUFDWCxJQUFJdEUsS0FBQSxHQUFRZ0UsS0FBQSxDQUFNaEUsS0FBQTtNQUFPdUUsSUFBQSxHQUFPeEIsSUFBQSxDQUFLN0gsTUFBQSxDQUFPc0MsVUFBQSxDQUFXdUYsSUFBQSxDQUFLaEcsS0FBQSxDQUFNLENBQUM7SUFDbkUsU0FBUzNELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk0RyxLQUFBLENBQU10RixNQUFBLEVBQVF0QixDQUFBLElBQzlCLElBQUk0RyxLQUFBLENBQU01RyxDQUFDLEVBQUUyQyxJQUFBLENBQUtDLElBQUEsQ0FBS29JLFNBQUEsS0FBYyxVQUFVLENBQUNHLElBQUEsSUFBUSxDQUFDdkUsS0FBQSxDQUFNNUcsQ0FBQyxFQUFFdUcsT0FBQSxDQUFRNEUsSUFBQSxDQUFLdkUsS0FBSyxJQUNoRkEsS0FBQSxHQUFRQSxLQUFBLENBQU01RyxDQUFBLEVBQUcsRUFBRXNHLGFBQUEsQ0FBY00sS0FBSztJQUM5QyxPQUFPQSxLQUFBO0VBQ1g7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBd0UsWUFBWXJMLEdBQUEsRUFBSztJQUNiLFNBQVMwSSxLQUFBLEdBQVEsS0FBS0EsS0FBQSxFQUFPQSxLQUFBLEdBQVEsR0FBR0EsS0FBQSxJQUNwQyxJQUFJLEtBQUt6RyxLQUFBLENBQU15RyxLQUFLLEtBQUsxSSxHQUFBLElBQU8sS0FBS2dDLEdBQUEsQ0FBSTBHLEtBQUssS0FBSzFJLEdBQUEsRUFDL0MsT0FBTzBJLEtBQUE7SUFDZixPQUFPO0VBQ1g7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFVQTRDLFdBQVdySSxLQUFBLEdBQVEsTUFBTXNJLElBQUEsRUFBTTtJQUMzQixJQUFJdEksS0FBQSxDQUFNakQsR0FBQSxHQUFNLEtBQUtBLEdBQUEsRUFDakIsT0FBT2lELEtBQUEsQ0FBTXFJLFVBQUEsQ0FBVyxJQUFJO0lBQ2hDLFNBQVNFLENBQUEsR0FBSSxLQUFLOUMsS0FBQSxJQUFTLEtBQUszRyxNQUFBLENBQU8wSixhQUFBLElBQWlCLEtBQUt6TCxHQUFBLElBQU9pRCxLQUFBLENBQU1qRCxHQUFBLEdBQU0sSUFBSSxJQUFJd0wsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDNUYsSUFBSXZJLEtBQUEsQ0FBTWpELEdBQUEsSUFBTyxLQUFLZ0MsR0FBQSxDQUFJd0osQ0FBQyxNQUFNLENBQUNELElBQUEsSUFBUUEsSUFBQSxDQUFLLEtBQUsvSSxJQUFBLENBQUtnSixDQUFDLENBQUMsSUFDdkQsT0FBTyxJQUFJdk0sU0FBQSxDQUFVLE1BQU1nRSxLQUFBLEVBQU91SSxDQUFDO0lBQzNDLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtFQUlBRSxXQUFXekksS0FBQSxFQUFPO0lBQ2QsT0FBTyxLQUFLakQsR0FBQSxHQUFNLEtBQUs4SSxZQUFBLElBQWdCN0YsS0FBQSxDQUFNakQsR0FBQSxHQUFNaUQsS0FBQSxDQUFNNkYsWUFBQTtFQUM3RDtFQUFBO0FBQUE7QUFBQTtFQUlBNUcsSUFBSWUsS0FBQSxFQUFPO0lBQ1AsT0FBT0EsS0FBQSxDQUFNakQsR0FBQSxHQUFNLEtBQUtBLEdBQUEsR0FBTWlELEtBQUEsR0FBUTtFQUMxQztFQUFBO0FBQUE7QUFBQTtFQUlBM0IsSUFBSTJCLEtBQUEsRUFBTztJQUNQLE9BQU9BLEtBQUEsQ0FBTWpELEdBQUEsR0FBTSxLQUFLQSxHQUFBLEdBQU1pRCxLQUFBLEdBQVE7RUFDMUM7RUFBQTtBQUFBO0FBQUE7RUFJQTRCLFNBQUEsRUFBVztJQUNQLElBQUk4RyxHQUFBLEdBQU07SUFDVixTQUFTMUwsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBSyxLQUFLeUksS0FBQSxFQUFPekksQ0FBQSxJQUM3QjBMLEdBQUEsS0FBUUEsR0FBQSxHQUFNLE1BQU0sTUFBTSxLQUFLbkosSUFBQSxDQUFLdkMsQ0FBQyxFQUFFMkMsSUFBQSxDQUFLOEQsSUFBQSxHQUFPLE1BQU0sS0FBSzlDLEtBQUEsQ0FBTTNELENBQUEsR0FBSSxDQUFDO0lBQzdFLE9BQU8wTCxHQUFBLEdBQU0sTUFBTSxLQUFLN0MsWUFBQTtFQUM1QjtFQUFBO0FBQUE7QUFBQTtFQUlBLE9BQU84QyxRQUFRQyxJQUFBLEVBQUs3TCxHQUFBLEVBQUs7SUFDckIsSUFBSSxFQUFFQSxHQUFBLElBQU8sS0FBS0EsR0FBQSxJQUFPNkwsSUFBQSxDQUFJbEwsT0FBQSxDQUFRQyxJQUFBLEdBQ2pDLE1BQU0sSUFBSXdELFVBQUEsQ0FBVyxjQUFjcEUsR0FBQSxHQUFNLGVBQWU7SUFDNUQsSUFBSXVLLElBQUEsR0FBTyxFQUFDO0lBQ1osSUFBSXRJLEtBQUEsR0FBUTtNQUFHNkcsWUFBQSxHQUFlOUksR0FBQTtJQUM5QixTQUFTd0MsSUFBQSxHQUFPcUosSUFBQSxJQUFPO01BQ25CLElBQUk7UUFBRWpJLEtBQUE7UUFBT21DO01BQU8sSUFBSXZELElBQUEsQ0FBSzdCLE9BQUEsQ0FBUThELFNBQUEsQ0FBVXFFLFlBQVk7TUFDM0QsSUFBSWdELEdBQUEsR0FBTWhELFlBQUEsR0FBZS9DLE1BQUE7TUFDekJ3RSxJQUFBLENBQUtqSCxJQUFBLENBQUtkLElBQUEsRUFBTW9CLEtBQUEsRUFBTzNCLEtBQUEsR0FBUThELE1BQU07TUFDckMsSUFBSSxDQUFDK0YsR0FBQSxFQUNEO01BQ0p0SixJQUFBLEdBQU9BLElBQUEsQ0FBS3BDLEtBQUEsQ0FBTXdELEtBQUs7TUFDdkIsSUFBSXBCLElBQUEsQ0FBS2hDLE1BQUEsRUFDTDtNQUNKc0ksWUFBQSxHQUFlZ0QsR0FBQSxHQUFNO01BQ3JCN0osS0FBQSxJQUFTOEQsTUFBQSxHQUFTO0lBQ3RCO0lBQ0EsT0FBTyxJQUFJdUUsWUFBQSxDQUFZdEssR0FBQSxFQUFLdUssSUFBQSxFQUFNekIsWUFBWTtFQUNsRDtFQUFBO0FBQUE7QUFBQTtFQUlBLE9BQU9pRCxjQUFjRixJQUFBLEVBQUs3TCxHQUFBLEVBQUs7SUFDM0IsSUFBSWdNLEtBQUEsR0FBUUMsWUFBQSxDQUFhQyxHQUFBLENBQUlMLElBQUc7SUFDaEMsSUFBSUcsS0FBQSxFQUFPO01BQ1AsU0FBUy9MLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkrTCxLQUFBLENBQU1HLElBQUEsQ0FBSzVLLE1BQUEsRUFBUXRCLENBQUEsSUFBSztRQUN4QyxJQUFJbU0sR0FBQSxHQUFNSixLQUFBLENBQU1HLElBQUEsQ0FBS2xNLENBQUM7UUFDdEIsSUFBSW1NLEdBQUEsQ0FBSXBNLEdBQUEsSUFBT0EsR0FBQSxFQUNYLE9BQU9vTSxHQUFBO01BQ2Y7SUFDSixPQUNLO01BQ0RILFlBQUEsQ0FBYTlGLEdBQUEsQ0FBSTBGLElBQUEsRUFBS0csS0FBQSxHQUFRLElBQUlLLFlBQUEsRUFBWTtJQUNsRDtJQUNBLElBQUk3SSxNQUFBLEdBQVN3SSxLQUFBLENBQU1HLElBQUEsQ0FBS0gsS0FBQSxDQUFNL0wsQ0FBQyxJQUFJcUssWUFBQSxDQUFZc0IsT0FBQSxDQUFRQyxJQUFBLEVBQUs3TCxHQUFHO0lBQy9EZ00sS0FBQSxDQUFNL0wsQ0FBQSxJQUFLK0wsS0FBQSxDQUFNL0wsQ0FBQSxHQUFJLEtBQUtxTSxnQkFBQTtJQUMxQixPQUFPOUksTUFBQTtFQUNYO0FBQ0o7QUFDQSxJQUFNNkksWUFBQSxHQUFOLE1BQW1CO0VBQ2Y1SyxZQUFBLEVBQWM7SUFDVixLQUFLMEssSUFBQSxHQUFPLEVBQUM7SUFDYixLQUFLbE0sQ0FBQSxHQUFJO0VBQ2I7QUFDSjtBQUNBLElBQU1xTSxnQkFBQSxHQUFtQjtFQUFJTCxZQUFBLEdBQWUsbUJBQUlNLE9BQUEsQ0FBUTtBQUt4RCxJQUFNdE4sU0FBQSxHQUFOLE1BQWdCO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1ad0MsWUFPQStHLEtBQUEsRUFLQUMsR0FBQSxFQUlBQyxLQUFBLEVBQU87SUFDSCxLQUFLRixLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLQyxHQUFBLEdBQU1BLEdBQUE7SUFDWCxLQUFLQyxLQUFBLEdBQVFBLEtBQUE7RUFDakI7RUFBQTtBQUFBO0FBQUE7RUFJQSxJQUFJekcsTUFBQSxFQUFRO0lBQUUsT0FBTyxLQUFLdUcsS0FBQSxDQUFNb0MsTUFBQSxDQUFPLEtBQUtsQyxLQUFBLEdBQVEsQ0FBQztFQUFHO0VBQUE7QUFBQTtBQUFBO0VBSXhELElBQUkxRyxJQUFBLEVBQU07SUFBRSxPQUFPLEtBQUt5RyxHQUFBLENBQUlvQyxLQUFBLENBQU0sS0FBS25DLEtBQUEsR0FBUSxDQUFDO0VBQUc7RUFBQTtBQUFBO0FBQUE7RUFJbkQsSUFBSTNHLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBS3lHLEtBQUEsQ0FBTWhHLElBQUEsQ0FBSyxLQUFLa0csS0FBSztFQUFHO0VBQUE7QUFBQTtBQUFBO0VBSW5ELElBQUltQixXQUFBLEVBQWE7SUFBRSxPQUFPLEtBQUtyQixLQUFBLENBQU01RSxLQUFBLENBQU0sS0FBSzhFLEtBQUs7RUFBRztFQUFBO0FBQUE7QUFBQTtFQUl4RCxJQUFJb0IsU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLckIsR0FBQSxDQUFJa0MsVUFBQSxDQUFXLEtBQUtqQyxLQUFLO0VBQUc7QUFDN0Q7QUFFQSxJQUFNOEQsVUFBQSxHQUFhLGVBQUFDLE1BQUEsQ0FBTzFGLE1BQUEsQ0FBTyxJQUFJO0FBZXJDLElBQU0vSCxJQUFBLEdBQU4sTUFBTTBOLEtBQUEsQ0FBSztFQUFBO0FBQUE7QUFBQTtFQUlQakwsWUFJQW1CLElBQUEsRUFNQWlELEtBQUEsRUFFQWxGLE9BQUEsRUFLQWtHLEtBQUEsR0FBUS9ILElBQUEsQ0FBS3FJLElBQUEsRUFBTTtJQUNmLEtBQUt2RSxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLaUQsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS2dCLEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtsRyxPQUFBLEdBQVVBLE9BQUEsSUFBVzlCLFFBQUEsQ0FBUzZFLEtBQUE7RUFDdkM7RUFBQTtBQUFBO0FBQUE7RUFJQSxJQUFJaUosU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLaE0sT0FBQSxDQUFRQSxPQUFBO0VBQVM7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVE5QyxJQUFJTCxTQUFBLEVBQVc7SUFBRSxPQUFPLEtBQUtxQyxNQUFBLEdBQVMsSUFBSSxJQUFJLEtBQUtoQyxPQUFBLENBQVFDLElBQUE7RUFBTTtFQUFBO0FBQUE7QUFBQTtFQUlqRSxJQUFJVixXQUFBLEVBQWE7SUFBRSxPQUFPLEtBQUtTLE9BQUEsQ0FBUVQsVUFBQTtFQUFZO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLbkRFLE1BQU13RCxLQUFBLEVBQU87SUFBRSxPQUFPLEtBQUtqRCxPQUFBLENBQVFQLEtBQUEsQ0FBTXdELEtBQUs7RUFBRztFQUFBO0FBQUE7QUFBQTtFQUlqRFMsV0FBV1QsS0FBQSxFQUFPO0lBQUUsT0FBTyxLQUFLakQsT0FBQSxDQUFRMEQsVUFBQSxDQUFXVCxLQUFLO0VBQUc7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUszRFUsUUFBUXpDLENBQUEsRUFBRztJQUFFLEtBQUtsQixPQUFBLENBQVEyRCxPQUFBLENBQVF6QyxDQUFDO0VBQUc7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVd0Q0gsYUFBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUlDLENBQUEsRUFBRytLLFFBQUEsR0FBVyxHQUFHO0lBQ3BDLEtBQUtqTSxPQUFBLENBQVFlLFlBQUEsQ0FBYUMsSUFBQSxFQUFNQyxFQUFBLEVBQUlDLENBQUEsRUFBRytLLFFBQUEsRUFBVSxJQUFJO0VBQ3pEO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQXpLLFlBQVlOLENBQUEsRUFBRztJQUNYLEtBQUtILFlBQUEsQ0FBYSxHQUFHLEtBQUtmLE9BQUEsQ0FBUUMsSUFBQSxFQUFNaUIsQ0FBQztFQUM3QztFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0EsSUFBSWdMLFlBQUEsRUFBYztJQUNkLE9BQVEsS0FBS2xLLE1BQUEsSUFBVSxLQUFLQyxJQUFBLENBQUtDLElBQUEsQ0FBS1AsUUFBQSxHQUNoQyxLQUFLTSxJQUFBLENBQUtDLElBQUEsQ0FBS1AsUUFBQSxDQUFTLElBQUksSUFDNUIsS0FBS0YsV0FBQSxDQUFZLEdBQUcsS0FBS3pCLE9BQUEsQ0FBUUMsSUFBQSxFQUFNLEVBQUU7RUFDbkQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVFBd0IsWUFBWVQsSUFBQSxFQUFNQyxFQUFBLEVBQUlTLGNBQUEsRUFBZ0JDLFFBQUEsRUFBVTtJQUM1QyxPQUFPLEtBQUszQixPQUFBLENBQVF5QixXQUFBLENBQVlULElBQUEsRUFBTUMsRUFBQSxFQUFJUyxjQUFBLEVBQWdCQyxRQUFRO0VBQ3RFO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQSxJQUFJYyxXQUFBLEVBQWE7SUFBRSxPQUFPLEtBQUt6QyxPQUFBLENBQVF5QyxVQUFBO0VBQVk7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtuRCxJQUFJRCxVQUFBLEVBQVk7SUFBRSxPQUFPLEtBQUt4QyxPQUFBLENBQVF3QyxTQUFBO0VBQVc7RUFBQTtBQUFBO0FBQUE7RUFJakRlLEdBQUdqQixLQUFBLEVBQU87SUFDTixPQUFPLFFBQVFBLEtBQUEsSUFBVSxLQUFLMUMsVUFBQSxDQUFXMEMsS0FBSyxLQUFLLEtBQUt0QyxPQUFBLENBQVF1RCxFQUFBLENBQUdqQixLQUFBLENBQU10QyxPQUFPO0VBQ3BGO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQUosV0FBVzBDLEtBQUEsRUFBTztJQUNkLE9BQU8sS0FBSzZKLFNBQUEsQ0FBVTdKLEtBQUEsQ0FBTUwsSUFBQSxFQUFNSyxLQUFBLENBQU00QyxLQUFBLEVBQU81QyxLQUFBLENBQU00RCxLQUFLO0VBQzlEO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQWlHLFVBQVVsSyxJQUFBLEVBQU1pRCxLQUFBLEVBQU9nQixLQUFBLEVBQU87SUFDMUIsT0FBTyxLQUFLakUsSUFBQSxJQUFRQSxJQUFBLElBQ2hCb0QsV0FBQSxDQUFZLEtBQUtILEtBQUEsRUFBT0EsS0FBQSxJQUFTakQsSUFBQSxDQUFLbUssWUFBQSxJQUFnQlAsVUFBVSxLQUNoRTFOLElBQUEsQ0FBS21JLE9BQUEsQ0FBUSxLQUFLSixLQUFBLEVBQU9BLEtBQUEsSUFBUy9ILElBQUEsQ0FBS3FJLElBQUk7RUFDbkQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBZ0IsS0FBS3hILE9BQUEsR0FBVSxNQUFNO0lBQ2pCLElBQUlBLE9BQUEsSUFBVyxLQUFLQSxPQUFBLEVBQ2hCLE9BQU87SUFDWCxPQUFPLElBQUkrTCxLQUFBLENBQUssS0FBSzlKLElBQUEsRUFBTSxLQUFLaUQsS0FBQSxFQUFPbEYsT0FBQSxFQUFTLEtBQUtrRyxLQUFLO0VBQzlEO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQUMsS0FBS0QsS0FBQSxFQUFPO0lBQ1IsT0FBT0EsS0FBQSxJQUFTLEtBQUtBLEtBQUEsR0FBUSxPQUFPLElBQUk2RixLQUFBLENBQUssS0FBSzlKLElBQUEsRUFBTSxLQUFLaUQsS0FBQSxFQUFPLEtBQUtsRixPQUFBLEVBQVNrRyxLQUFLO0VBQzNGO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1BdEQsSUFBSTVCLElBQUEsRUFBTUMsRUFBQSxHQUFLLEtBQUtqQixPQUFBLENBQVFDLElBQUEsRUFBTTtJQUM5QixJQUFJZSxJQUFBLElBQVEsS0FBS0MsRUFBQSxJQUFNLEtBQUtqQixPQUFBLENBQVFDLElBQUEsRUFDaEMsT0FBTztJQUNYLE9BQU8sS0FBS3VILElBQUEsQ0FBSyxLQUFLeEgsT0FBQSxDQUFRNEMsR0FBQSxDQUFJNUIsSUFBQSxFQUFNQyxFQUFFLENBQUM7RUFDL0M7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBYyxNQUFNZixJQUFBLEVBQU1DLEVBQUEsR0FBSyxLQUFLakIsT0FBQSxDQUFRQyxJQUFBLEVBQU1vTSxjQUFBLEdBQWlCLE9BQU87SUFDeEQsSUFBSXJMLElBQUEsSUFBUUMsRUFBQSxFQUNSLE9BQU90QyxLQUFBLENBQU1vRSxLQUFBO0lBQ2pCLElBQUk4RSxLQUFBLEdBQVEsS0FBS29ELE9BQUEsQ0FBUWpLLElBQUk7TUFBRzhHLEdBQUEsR0FBTSxLQUFLbUQsT0FBQSxDQUFRaEssRUFBRTtJQUNyRCxJQUFJOEcsS0FBQSxHQUFRc0UsY0FBQSxHQUFpQixJQUFJeEUsS0FBQSxDQUFNNkMsV0FBQSxDQUFZekosRUFBRTtJQUNyRCxJQUFJSyxLQUFBLEdBQVF1RyxLQUFBLENBQU12RyxLQUFBLENBQU15RyxLQUFLO01BQUdsRyxJQUFBLEdBQU9nRyxLQUFBLENBQU1oRyxJQUFBLENBQUtrRyxLQUFLO0lBQ3ZELElBQUkvSCxPQUFBLEdBQVU2QixJQUFBLENBQUs3QixPQUFBLENBQVE0QyxHQUFBLENBQUlpRixLQUFBLENBQU14SSxHQUFBLEdBQU1pQyxLQUFBLEVBQU93RyxHQUFBLENBQUl6SSxHQUFBLEdBQU1pQyxLQUFLO0lBQ2pFLE9BQU8sSUFBSTNDLEtBQUEsQ0FBTXFCLE9BQUEsRUFBUzZILEtBQUEsQ0FBTUUsS0FBQSxHQUFRQSxLQUFBLEVBQU9ELEdBQUEsQ0FBSUMsS0FBQSxHQUFRQSxLQUFLO0VBQ3BFO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVNBSCxRQUFRNUcsSUFBQSxFQUFNQyxFQUFBLEVBQUljLEtBQUEsRUFBTztJQUNyQixPQUFPNkYsT0FBQSxDQUFRLEtBQUtxRCxPQUFBLENBQVFqSyxJQUFJLEdBQUcsS0FBS2lLLE9BQUEsQ0FBUWhLLEVBQUUsR0FBR2MsS0FBSztFQUM5RDtFQUFBO0FBQUE7QUFBQTtFQUlBdUssT0FBT2pOLEdBQUEsRUFBSztJQUNSLFNBQVN3QyxJQUFBLEdBQU8sUUFBUTtNQUNwQixJQUFJO1FBQUVvQixLQUFBO1FBQU9tQztNQUFPLElBQUl2RCxJQUFBLENBQUs3QixPQUFBLENBQVE4RCxTQUFBLENBQVV6RSxHQUFHO01BQ2xEd0MsSUFBQSxHQUFPQSxJQUFBLENBQUs2QixVQUFBLENBQVdULEtBQUs7TUFDNUIsSUFBSSxDQUFDcEIsSUFBQSxFQUNELE9BQU87TUFDWCxJQUFJdUQsTUFBQSxJQUFVL0YsR0FBQSxJQUFPd0MsSUFBQSxDQUFLaEMsTUFBQSxFQUN0QixPQUFPZ0MsSUFBQTtNQUNYeEMsR0FBQSxJQUFPK0YsTUFBQSxHQUFTO0lBQ3BCO0VBQ0o7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUFtSCxXQUFXbE4sR0FBQSxFQUFLO0lBQ1osSUFBSTtNQUFFNEQsS0FBQTtNQUFPbUM7SUFBTyxJQUFJLEtBQUtwRixPQUFBLENBQVE4RCxTQUFBLENBQVV6RSxHQUFHO0lBQ2xELE9BQU87TUFBRXdDLElBQUEsRUFBTSxLQUFLN0IsT0FBQSxDQUFRMEQsVUFBQSxDQUFXVCxLQUFLO01BQUdBLEtBQUE7TUFBT21DO0lBQU87RUFDakU7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUFvSCxZQUFZbk4sR0FBQSxFQUFLO0lBQ2IsSUFBSUEsR0FBQSxJQUFPLEdBQ1AsT0FBTztNQUFFd0MsSUFBQSxFQUFNO01BQU1vQixLQUFBLEVBQU87TUFBR21DLE1BQUEsRUFBUTtJQUFFO0lBQzdDLElBQUk7TUFBRW5DLEtBQUE7TUFBT21DO0lBQU8sSUFBSSxLQUFLcEYsT0FBQSxDQUFROEQsU0FBQSxDQUFVekUsR0FBRztJQUNsRCxJQUFJK0YsTUFBQSxHQUFTL0YsR0FBQSxFQUNULE9BQU87TUFBRXdDLElBQUEsRUFBTSxLQUFLN0IsT0FBQSxDQUFRUCxLQUFBLENBQU13RCxLQUFLO01BQUdBLEtBQUE7TUFBT21DO0lBQU87SUFDNUQsSUFBSXZELElBQUEsR0FBTyxLQUFLN0IsT0FBQSxDQUFRUCxLQUFBLENBQU13RCxLQUFBLEdBQVEsQ0FBQztJQUN2QyxPQUFPO01BQUVwQixJQUFBO01BQU1vQixLQUFBLEVBQU9BLEtBQUEsR0FBUTtNQUFHbUMsTUFBQSxFQUFRQSxNQUFBLEdBQVN2RCxJQUFBLENBQUtsQztJQUFTO0VBQ3BFO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQXNMLFFBQVE1TCxHQUFBLEVBQUs7SUFBRSxPQUFPWixXQUFBLENBQVkyTSxhQUFBLENBQWMsTUFBTS9MLEdBQUc7RUFBRztFQUFBO0FBQUE7QUFBQTtFQUk1RHFLLGVBQWVySyxHQUFBLEVBQUs7SUFBRSxPQUFPWixXQUFBLENBQVl3TSxPQUFBLENBQVEsTUFBTTVMLEdBQUc7RUFBRztFQUFBO0FBQUE7QUFBQTtBQUFBO0VBSzdEb04sYUFBYXpMLElBQUEsRUFBTUMsRUFBQSxFQUFJZ0IsSUFBQSxFQUFNO0lBQ3pCLElBQUl1QixNQUFBLEdBQVE7SUFDWixJQUFJdkMsRUFBQSxHQUFLRCxJQUFBLEVBQ0wsS0FBS0QsWUFBQSxDQUFhQyxJQUFBLEVBQU1DLEVBQUEsRUFBSVksSUFBQSxJQUFRO01BQ2hDLElBQUlJLElBQUEsQ0FBSzRELE9BQUEsQ0FBUWhFLElBQUEsQ0FBS3FFLEtBQUssR0FDdkIxQyxNQUFBLEdBQVE7TUFDWixPQUFPLENBQUNBLE1BQUE7SUFDWixDQUFDO0lBQ0wsT0FBT0EsTUFBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUEsSUFBSXJCLFFBQUEsRUFBVTtJQUFFLE9BQU8sS0FBS0YsSUFBQSxDQUFLRSxPQUFBO0VBQVM7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUsxQyxJQUFJQyxZQUFBLEVBQWM7SUFBRSxPQUFPLEtBQUtILElBQUEsQ0FBS0csV0FBQTtFQUFhO0VBQUE7QUFBQTtBQUFBO0VBSWxELElBQUkwSSxjQUFBLEVBQWdCO0lBQUUsT0FBTyxLQUFLN0ksSUFBQSxDQUFLNkksYUFBQTtFQUFlO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLdEQsSUFBSU4sU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLdkksSUFBQSxDQUFLdUksUUFBQTtFQUFVO0VBQUE7QUFBQTtBQUFBO0VBSTVDLElBQUkzSyxPQUFBLEVBQVM7SUFBRSxPQUFPLEtBQUtvQyxJQUFBLENBQUtwQyxNQUFBO0VBQVE7RUFBQTtBQUFBO0FBQUE7RUFJeEMsSUFBSW1DLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBS0MsSUFBQSxDQUFLRCxNQUFBO0VBQVE7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVF4QyxJQUFJMEssT0FBQSxFQUFTO0lBQUUsT0FBTyxLQUFLekssSUFBQSxDQUFLeUssTUFBQTtFQUFRO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLeEN4SSxTQUFBLEVBQVc7SUFDUCxJQUFJLEtBQUtqQyxJQUFBLENBQUtDLElBQUEsQ0FBS3lLLGFBQUEsRUFDZixPQUFPLEtBQUsxSyxJQUFBLENBQUtDLElBQUEsQ0FBS3lLLGFBQUEsQ0FBYyxJQUFJO0lBQzVDLElBQUk1RyxJQUFBLEdBQU8sS0FBSzlELElBQUEsQ0FBSzhELElBQUE7SUFDckIsSUFBSSxLQUFLL0YsT0FBQSxDQUFRQyxJQUFBLEVBQ2I4RixJQUFBLElBQVEsTUFBTSxLQUFLL0YsT0FBQSxDQUFRbUUsYUFBQSxDQUFjLElBQUk7SUFDakQsT0FBT3lJLFNBQUEsQ0FBVSxLQUFLMUcsS0FBQSxFQUFPSCxJQUFJO0VBQ3JDO0VBQUE7QUFBQTtBQUFBO0VBSUE4RyxlQUFlNUosS0FBQSxFQUFPO0lBQ2xCLElBQUk2SixLQUFBLEdBQVEsS0FBSzdLLElBQUEsQ0FBSzhLLFlBQUEsQ0FBYUMsYUFBQSxDQUFjLEtBQUtoTixPQUFBLEVBQVMsR0FBR2lELEtBQUs7SUFDdkUsSUFBSSxDQUFDNkosS0FBQSxFQUNELE1BQU0sSUFBSXBHLEtBQUEsQ0FBTSxzREFBc0Q7SUFDMUUsT0FBT29HLEtBQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBUUFuRixXQUFXM0csSUFBQSxFQUFNQyxFQUFBLEVBQUlnTSxXQUFBLEdBQWMvTyxRQUFBLENBQVM2RSxLQUFBLEVBQU96QixLQUFBLEdBQVEsR0FBR0QsR0FBQSxHQUFNNEwsV0FBQSxDQUFZMU4sVUFBQSxFQUFZO0lBQ3hGLElBQUkyTixHQUFBLEdBQU0sS0FBS0wsY0FBQSxDQUFlN0wsSUFBSSxFQUFFZ00sYUFBQSxDQUFjQyxXQUFBLEVBQWEzTCxLQUFBLEVBQU9ELEdBQUc7SUFDekUsSUFBSThMLEdBQUEsR0FBTUQsR0FBQSxJQUFPQSxHQUFBLENBQUlGLGFBQUEsQ0FBYyxLQUFLaE4sT0FBQSxFQUFTaUIsRUFBRTtJQUNuRCxJQUFJLENBQUNrTSxHQUFBLElBQU8sQ0FBQ0EsR0FBQSxDQUFJQyxRQUFBLEVBQ2IsT0FBTztJQUNYLFNBQVM5TixDQUFBLEdBQUlnQyxLQUFBLEVBQU9oQyxDQUFBLEdBQUkrQixHQUFBLEVBQUsvQixDQUFBLElBQ3pCLElBQUksQ0FBQyxLQUFLMkMsSUFBQSxDQUFLb0wsV0FBQSxDQUFZSixXQUFBLENBQVl4TixLQUFBLENBQU1ILENBQUMsRUFBRTRHLEtBQUssR0FDakQsT0FBTztJQUNmLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0FvSCxlQUFldE0sSUFBQSxFQUFNQyxFQUFBLEVBQUlnQixJQUFBLEVBQU1pRSxLQUFBLEVBQU87SUFDbEMsSUFBSUEsS0FBQSxJQUFTLENBQUMsS0FBS2pFLElBQUEsQ0FBS29MLFdBQUEsQ0FBWW5ILEtBQUssR0FDckMsT0FBTztJQUNYLElBQUk1RSxLQUFBLEdBQVEsS0FBS3VMLGNBQUEsQ0FBZTdMLElBQUksRUFBRXVNLFNBQUEsQ0FBVXRMLElBQUk7SUFDcEQsSUFBSVosR0FBQSxHQUFNQyxLQUFBLElBQVNBLEtBQUEsQ0FBTTBMLGFBQUEsQ0FBYyxLQUFLaE4sT0FBQSxFQUFTaUIsRUFBRTtJQUN2RCxPQUFPSSxHQUFBLEdBQU1BLEdBQUEsQ0FBSStMLFFBQUEsR0FBVztFQUNoQztFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU9BSSxVQUFVbEwsS0FBQSxFQUFPO0lBQ2IsSUFBSUEsS0FBQSxDQUFNdEMsT0FBQSxDQUFRQyxJQUFBLEVBQ2QsT0FBTyxLQUFLMEgsVUFBQSxDQUFXLEtBQUtwSSxVQUFBLEVBQVksS0FBS0EsVUFBQSxFQUFZK0MsS0FBQSxDQUFNdEMsT0FBTyxPQUV0RSxPQUFPLEtBQUtpQyxJQUFBLENBQUt3RyxpQkFBQSxDQUFrQm5HLEtBQUEsQ0FBTUwsSUFBSTtFQUNyRDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0F3TCxNQUFBLEVBQVE7SUFDSixLQUFLeEwsSUFBQSxDQUFLc0gsWUFBQSxDQUFhLEtBQUt2SixPQUFPO0lBQ25DLEtBQUtpQyxJQUFBLENBQUtvRSxVQUFBLENBQVcsS0FBS25CLEtBQUs7SUFDL0IsSUFBSS9CLEtBQUEsR0FBT2hGLElBQUEsQ0FBS3FJLElBQUE7SUFDaEIsU0FBU2xILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzRHLEtBQUEsQ0FBTXRGLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUN4QyxJQUFJNkcsSUFBQSxHQUFPLEtBQUtELEtBQUEsQ0FBTTVHLENBQUM7TUFDdkI2RyxJQUFBLENBQUtsRSxJQUFBLENBQUtvRSxVQUFBLENBQVdGLElBQUEsQ0FBS2pCLEtBQUs7TUFDL0IvQixLQUFBLEdBQU9nRCxJQUFBLENBQUtaLFFBQUEsQ0FBU3BDLEtBQUk7SUFDN0I7SUFDQSxJQUFJLENBQUNoRixJQUFBLENBQUttSSxPQUFBLENBQVFuRCxLQUFBLEVBQU0sS0FBSytDLEtBQUssR0FDOUIsTUFBTSxJQUFJekMsVUFBQSxDQUFXLHdDQUF3QyxLQUFLeEIsSUFBQSxDQUFLOEQsSUFBSSxLQUFLLEtBQUtHLEtBQUEsQ0FBTTVCLEdBQUEsQ0FBSW9KLENBQUEsSUFBS0EsQ0FBQSxDQUFFekwsSUFBQSxDQUFLOEQsSUFBSSxDQUFDLEVBQUU7SUFDdEgsS0FBSy9GLE9BQUEsQ0FBUTJELE9BQUEsQ0FBUTlCLElBQUEsSUFBUUEsSUFBQSxDQUFLNEwsS0FBQSxDQUFNLENBQUM7RUFDN0M7RUFBQTtBQUFBO0FBQUE7RUFJQXBKLE9BQUEsRUFBUztJQUNMLElBQUl5QixHQUFBLEdBQU07TUFBRTdELElBQUEsRUFBTSxLQUFLQSxJQUFBLENBQUs4RDtJQUFLO0lBQ2pDLFNBQVNDLENBQUEsSUFBSyxLQUFLZCxLQUFBLEVBQU87TUFDdEJZLEdBQUEsQ0FBSVosS0FBQSxHQUFRLEtBQUtBLEtBQUE7TUFDakI7SUFDSjtJQUNBLElBQUksS0FBS2xGLE9BQUEsQ0FBUUMsSUFBQSxFQUNiNkYsR0FBQSxDQUFJOUYsT0FBQSxHQUFVLEtBQUtBLE9BQUEsQ0FBUXFFLE1BQUEsQ0FBTztJQUN0QyxJQUFJLEtBQUs2QixLQUFBLENBQU10RixNQUFBLEVBQ1hrRixHQUFBLENBQUlJLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU01QixHQUFBLENBQUlDLENBQUEsSUFBS0EsQ0FBQSxDQUFFRixNQUFBLENBQU8sQ0FBQztJQUM5QyxPQUFPeUIsR0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUEsT0FBT3RCLFNBQVNDLE1BQUEsRUFBUXdCLElBQUEsRUFBTTtJQUMxQixJQUFJLENBQUNBLElBQUEsRUFDRCxNQUFNLElBQUl4QyxVQUFBLENBQVcsaUNBQWlDO0lBQzFELElBQUl5QyxLQUFBLEdBQVE7SUFDWixJQUFJRCxJQUFBLENBQUtDLEtBQUEsRUFBTztNQUNaLElBQUksQ0FBQ3ZCLEtBQUEsQ0FBTUMsT0FBQSxDQUFRcUIsSUFBQSxDQUFLQyxLQUFLLEdBQ3pCLE1BQU0sSUFBSXpDLFVBQUEsQ0FBVyxxQ0FBcUM7TUFDOUR5QyxLQUFBLEdBQVFELElBQUEsQ0FBS0MsS0FBQSxDQUFNNUIsR0FBQSxDQUFJRyxNQUFBLENBQU9rSixZQUFZO0lBQzlDO0lBQ0EsSUFBSTFILElBQUEsQ0FBS2hFLElBQUEsSUFBUSxRQUFRO01BQ3JCLElBQUksT0FBT2dFLElBQUEsQ0FBS25HLElBQUEsSUFBUSxVQUNwQixNQUFNLElBQUkyRCxVQUFBLENBQVcsMkJBQTJCO01BQ3BELE9BQU9nQixNQUFBLENBQU8zRSxJQUFBLENBQUttRyxJQUFBLENBQUtuRyxJQUFBLEVBQU1vRyxLQUFLO0lBQ3ZDO0lBQ0EsSUFBSWxHLE9BQUEsR0FBVTlCLFFBQUEsQ0FBU3NHLFFBQUEsQ0FBU0MsTUFBQSxFQUFRd0IsSUFBQSxDQUFLakcsT0FBTztJQUNwRCxJQUFJNkIsSUFBQSxHQUFPNEMsTUFBQSxDQUFPbUosUUFBQSxDQUFTM0gsSUFBQSxDQUFLaEUsSUFBSSxFQUFFbUUsTUFBQSxDQUFPSCxJQUFBLENBQUtmLEtBQUEsRUFBT2xGLE9BQUEsRUFBU2tHLEtBQUs7SUFDdkVyRSxJQUFBLENBQUtJLElBQUEsQ0FBS29FLFVBQUEsQ0FBV3hFLElBQUEsQ0FBS3FELEtBQUs7SUFDL0IsT0FBT3JELElBQUE7RUFDWDtBQUNKO0FBQ0F4RCxJQUFBLENBQUt3UCxTQUFBLENBQVUvTixJQUFBLEdBQU87QUFDdEIsSUFBTWdPLFFBQUEsR0FBTixNQUFNQyxTQUFBLFNBQWlCMVAsSUFBQSxDQUFLO0VBQUE7QUFBQTtBQUFBO0VBSXhCeUMsWUFBWW1CLElBQUEsRUFBTWlELEtBQUEsRUFBT2xGLE9BQUEsRUFBU2tHLEtBQUEsRUFBTztJQUNyQyxNQUFNakUsSUFBQSxFQUFNaUQsS0FBQSxFQUFPLE1BQU1nQixLQUFLO0lBQzlCLElBQUksQ0FBQ2xHLE9BQUEsRUFDRCxNQUFNLElBQUl5RCxVQUFBLENBQVcsa0NBQWtDO0lBQzNELEtBQUszRCxJQUFBLEdBQU9FLE9BQUE7RUFDaEI7RUFDQWtFLFNBQUEsRUFBVztJQUNQLElBQUksS0FBS2pDLElBQUEsQ0FBS0MsSUFBQSxDQUFLeUssYUFBQSxFQUNmLE9BQU8sS0FBSzFLLElBQUEsQ0FBS0MsSUFBQSxDQUFLeUssYUFBQSxDQUFjLElBQUk7SUFDNUMsT0FBT0MsU0FBQSxDQUFVLEtBQUsxRyxLQUFBLEVBQU84SCxJQUFBLENBQUtDLFNBQUEsQ0FBVSxLQUFLbk8sSUFBSSxDQUFDO0VBQzFEO0VBQ0EsSUFBSW9NLFlBQUEsRUFBYztJQUFFLE9BQU8sS0FBS3BNLElBQUE7RUFBTTtFQUN0QzJCLFlBQVlULElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQUUsT0FBTyxLQUFLbkIsSUFBQSxDQUFLaUMsS0FBQSxDQUFNZixJQUFBLEVBQU1DLEVBQUU7RUFBRztFQUMxRCxJQUFJdEIsU0FBQSxFQUFXO0lBQUUsT0FBTyxLQUFLRyxJQUFBLENBQUtjLE1BQUE7RUFBUTtFQUMxQ3VGLEtBQUtELEtBQUEsRUFBTztJQUNSLE9BQU9BLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEdBQVEsT0FBTyxJQUFJNkgsU0FBQSxDQUFTLEtBQUs5TCxJQUFBLEVBQU0sS0FBS2lELEtBQUEsRUFBTyxLQUFLcEYsSUFBQSxFQUFNb0csS0FBSztFQUM1RjtFQUNBeEQsU0FBUzVDLElBQUEsRUFBTTtJQUNYLElBQUlBLElBQUEsSUFBUSxLQUFLQSxJQUFBLEVBQ2IsT0FBTztJQUNYLE9BQU8sSUFBSWlPLFNBQUEsQ0FBUyxLQUFLOUwsSUFBQSxFQUFNLEtBQUtpRCxLQUFBLEVBQU9wRixJQUFBLEVBQU0sS0FBS29HLEtBQUs7RUFDL0Q7RUFDQXRELElBQUk1QixJQUFBLEdBQU8sR0FBR0MsRUFBQSxHQUFLLEtBQUtuQixJQUFBLENBQUtjLE1BQUEsRUFBUTtJQUNqQyxJQUFJSSxJQUFBLElBQVEsS0FBS0MsRUFBQSxJQUFNLEtBQUtuQixJQUFBLENBQUtjLE1BQUEsRUFDN0IsT0FBTztJQUNYLE9BQU8sS0FBSzhCLFFBQUEsQ0FBUyxLQUFLNUMsSUFBQSxDQUFLaUMsS0FBQSxDQUFNZixJQUFBLEVBQU1DLEVBQUUsQ0FBQztFQUNsRDtFQUNBc0MsR0FBR2pCLEtBQUEsRUFBTztJQUNOLE9BQU8sS0FBSzFDLFVBQUEsQ0FBVzBDLEtBQUssS0FBSyxLQUFLeEMsSUFBQSxJQUFRd0MsS0FBQSxDQUFNeEMsSUFBQTtFQUN4RDtFQUNBdUUsT0FBQSxFQUFTO0lBQ0wsSUFBSTZKLElBQUEsR0FBTyxNQUFNN0osTUFBQSxDQUFPO0lBQ3hCNkosSUFBQSxDQUFLcE8sSUFBQSxHQUFPLEtBQUtBLElBQUE7SUFDakIsT0FBT29PLElBQUE7RUFDWDtBQUNKO0FBQ0EsU0FBU3RCLFVBQVUxRyxLQUFBLEVBQU84RSxHQUFBLEVBQUs7RUFDM0IsU0FBUzFMLENBQUEsR0FBSTRHLEtBQUEsQ0FBTXRGLE1BQUEsR0FBUyxHQUFHdEIsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDbkMwTCxHQUFBLEdBQU05RSxLQUFBLENBQU01RyxDQUFDLEVBQUUyQyxJQUFBLENBQUs4RCxJQUFBLEdBQU8sTUFBTWlGLEdBQUEsR0FBTTtFQUMzQyxPQUFPQSxHQUFBO0FBQ1g7QUFRQSxJQUFNak4sWUFBQSxHQUFOLE1BQU1vUSxhQUFBLENBQWE7RUFBQTtBQUFBO0FBQUE7RUFJZnJOLFlBSUFzTSxRQUFBLEVBQVU7SUFDTixLQUFLQSxRQUFBLEdBQVdBLFFBQUE7SUFJaEIsS0FBSzNDLElBQUEsR0FBTyxFQUFDO0lBSWIsS0FBSzJELFNBQUEsR0FBWSxFQUFDO0VBQ3RCO0VBQUE7QUFBQTtBQUFBO0VBSUEsT0FBT0MsTUFBTUMsTUFBQSxFQUFRQyxTQUFBLEVBQVc7SUFDNUIsSUFBSUMsTUFBQSxHQUFTLElBQUlDLFdBQUEsQ0FBWUgsTUFBQSxFQUFRQyxTQUFTO0lBQzlDLElBQUlDLE1BQUEsQ0FBTy9ELElBQUEsSUFBUSxNQUNmLE9BQU8wRCxhQUFBLENBQWFwTCxLQUFBO0lBQ3hCLElBQUkyTCxJQUFBLEdBQU9DLFNBQUEsQ0FBVUgsTUFBTTtJQUMzQixJQUFJQSxNQUFBLENBQU8vRCxJQUFBLEVBQ1ArRCxNQUFBLENBQU9JLEdBQUEsQ0FBSSwwQkFBMEI7SUFDekMsSUFBSTlCLEtBQUEsR0FBUStCLEdBQUEsQ0FBSUMsR0FBQSxDQUFJSixJQUFJLENBQUM7SUFDekJLLGdCQUFBLENBQWlCakMsS0FBQSxFQUFPMEIsTUFBTTtJQUM5QixPQUFPMUIsS0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQVMsVUFBVXRMLElBQUEsRUFBTTtJQUNaLFNBQVMzQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUttTCxJQUFBLENBQUs3SixNQUFBLEVBQVF0QixDQUFBLElBQ2xDLElBQUksS0FBS21MLElBQUEsQ0FBS25MLENBQUMsRUFBRTJDLElBQUEsSUFBUUEsSUFBQSxFQUNyQixPQUFPLEtBQUt3SSxJQUFBLENBQUtuTCxDQUFDLEVBQUVtTCxJQUFBO0lBQzVCLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0F1QyxjQUFjZ0MsSUFBQSxFQUFNMU4sS0FBQSxHQUFRLEdBQUdELEdBQUEsR0FBTTJOLElBQUEsQ0FBS3pQLFVBQUEsRUFBWTtJQUNsRCxJQUFJMEUsR0FBQSxHQUFNO0lBQ1YsU0FBUzNFLENBQUEsR0FBSWdDLEtBQUEsRUFBTzJDLEdBQUEsSUFBTzNFLENBQUEsR0FBSStCLEdBQUEsRUFBSy9CLENBQUEsSUFDaEMyRSxHQUFBLEdBQU1BLEdBQUEsQ0FBSXNKLFNBQUEsQ0FBVXlCLElBQUEsQ0FBS3ZQLEtBQUEsQ0FBTUgsQ0FBQyxFQUFFMkMsSUFBSTtJQUMxQyxPQUFPZ0MsR0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUEsSUFBSTZHLGNBQUEsRUFBZ0I7SUFDaEIsT0FBTyxLQUFLTCxJQUFBLENBQUs3SixNQUFBLElBQVUsS0FBSyxLQUFLNkosSUFBQSxDQUFLLENBQUMsRUFBRXhJLElBQUEsQ0FBS3VJLFFBQUE7RUFDdEQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBLElBQUl5RSxZQUFBLEVBQWM7SUFDZCxTQUFTM1AsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLbUwsSUFBQSxDQUFLN0osTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ3ZDLElBQUk7UUFBRTJDO01BQUssSUFBSSxLQUFLd0ksSUFBQSxDQUFLbkwsQ0FBQztNQUMxQixJQUFJLEVBQUUyQyxJQUFBLENBQUtwQyxNQUFBLElBQVVvQyxJQUFBLENBQUtpTixnQkFBQSxDQUFpQixJQUN2QyxPQUFPak4sSUFBQTtJQUNmO0lBQ0EsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUFrTixXQUFXN00sS0FBQSxFQUFPO0lBQ2QsU0FBU2hELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS21MLElBQUEsQ0FBSzdKLE1BQUEsRUFBUXRCLENBQUEsSUFDbEMsU0FBU1MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXVDLEtBQUEsQ0FBTW1JLElBQUEsQ0FBSzdKLE1BQUEsRUFBUWIsQ0FBQSxJQUNuQyxJQUFJLEtBQUswSyxJQUFBLENBQUtuTCxDQUFDLEVBQUUyQyxJQUFBLElBQVFLLEtBQUEsQ0FBTW1JLElBQUEsQ0FBSzFLLENBQUMsRUFBRWtDLElBQUEsRUFDbkMsT0FBTztJQUNuQixPQUFPO0VBQ1g7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBU0FtTixXQUFXbEYsS0FBQSxFQUFPbUYsS0FBQSxHQUFRLE9BQU9uRyxVQUFBLEdBQWEsR0FBRztJQUM3QyxJQUFJb0csSUFBQSxHQUFPLENBQUMsSUFBSTtJQUNoQixTQUFTQyxPQUFPekMsS0FBQSxFQUFPMEMsS0FBQSxFQUFPO01BQzFCLElBQUlDLFFBQUEsR0FBVzNDLEtBQUEsQ0FBTUUsYUFBQSxDQUFjOUMsS0FBQSxFQUFPaEIsVUFBVTtNQUNwRCxJQUFJdUcsUUFBQSxLQUFhLENBQUNKLEtBQUEsSUFBU0ksUUFBQSxDQUFTckMsUUFBQSxHQUNoQyxPQUFPbFAsUUFBQSxDQUFTOEMsSUFBQSxDQUFLd08sS0FBQSxDQUFNbEwsR0FBQSxDQUFJb0wsRUFBQSxJQUFNQSxFQUFBLENBQUdDLGFBQUEsQ0FBYyxDQUFDLENBQUM7TUFDNUQsU0FBU3JRLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl3TixLQUFBLENBQU1yQyxJQUFBLENBQUs3SixNQUFBLEVBQVF0QixDQUFBLElBQUs7UUFDeEMsSUFBSTtVQUFFMkMsSUFBQTtVQUFNd0k7UUFBSyxJQUFJcUMsS0FBQSxDQUFNckMsSUFBQSxDQUFLbkwsQ0FBQztRQUNqQyxJQUFJLEVBQUUyQyxJQUFBLENBQUtwQyxNQUFBLElBQVVvQyxJQUFBLENBQUtpTixnQkFBQSxDQUFpQixNQUFNSSxJQUFBLENBQUtNLE9BQUEsQ0FBUW5GLElBQUksS0FBSyxJQUFJO1VBQ3ZFNkUsSUFBQSxDQUFLM00sSUFBQSxDQUFLOEgsSUFBSTtVQUNkLElBQUlqSCxNQUFBLEdBQVErTCxNQUFBLENBQU85RSxJQUFBLEVBQU0rRSxLQUFBLENBQU1uTSxNQUFBLENBQU9wQixJQUFJLENBQUM7VUFDM0MsSUFBSXVCLE1BQUEsRUFDQSxPQUFPQSxNQUFBO1FBQ2Y7TUFDSjtNQUNBLE9BQU87SUFDWDtJQUNBLE9BQU8rTCxNQUFBLENBQU8sTUFBTSxFQUFFO0VBQzFCO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBT0FNLGFBQWEvRyxNQUFBLEVBQVE7SUFDakIsU0FBU3hKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzhPLFNBQUEsQ0FBVXhOLE1BQUEsRUFBUXRCLENBQUEsSUFBSyxHQUM1QyxJQUFJLEtBQUs4TyxTQUFBLENBQVU5TyxDQUFDLEtBQUt3SixNQUFBLEVBQ3JCLE9BQU8sS0FBS3NGLFNBQUEsQ0FBVTlPLENBQUEsR0FBSSxDQUFDO0lBQ25DLElBQUl3USxRQUFBLEdBQVcsS0FBS0MsZUFBQSxDQUFnQmpILE1BQU07SUFDMUMsS0FBS3NGLFNBQUEsQ0FBVXpMLElBQUEsQ0FBS21HLE1BQUEsRUFBUWdILFFBQVE7SUFDcEMsT0FBT0EsUUFBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUFDLGdCQUFnQmpILE1BQUEsRUFBUTtJQUNwQixJQUFJd0csSUFBQSxHQUFPLGVBQUF4RCxNQUFBLENBQU8xRixNQUFBLENBQU8sSUFBSTtNQUFHNEosTUFBQSxHQUFTLENBQUM7UUFBRWxELEtBQUEsRUFBTztRQUFNN0ssSUFBQSxFQUFNO1FBQU1nTyxHQUFBLEVBQUs7TUFBSyxDQUFDO0lBQ2hGLE9BQU9ELE1BQUEsQ0FBT3BQLE1BQUEsRUFBUTtNQUNsQixJQUFJc0MsT0FBQSxHQUFVOE0sTUFBQSxDQUFPRSxLQUFBLENBQU07UUFBR3BELEtBQUEsR0FBUTVKLE9BQUEsQ0FBUTRKLEtBQUE7TUFDOUMsSUFBSUEsS0FBQSxDQUFNUyxTQUFBLENBQVV6RSxNQUFNLEdBQUc7UUFDekIsSUFBSWpHLE1BQUEsR0FBUyxFQUFDO1FBQ2QsU0FBU2lELEdBQUEsR0FBTTVDLE9BQUEsRUFBUzRDLEdBQUEsQ0FBSTdELElBQUEsRUFBTTZELEdBQUEsR0FBTUEsR0FBQSxDQUFJbUssR0FBQSxFQUN4Q3BOLE1BQUEsQ0FBT0YsSUFBQSxDQUFLbUQsR0FBQSxDQUFJN0QsSUFBSTtRQUN4QixPQUFPWSxNQUFBLENBQU9zTixPQUFBLENBQVE7TUFDMUI7TUFDQSxTQUFTN1EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXdOLEtBQUEsQ0FBTXJDLElBQUEsQ0FBSzdKLE1BQUEsRUFBUXRCLENBQUEsSUFBSztRQUN4QyxJQUFJO1VBQUUyQyxJQUFBO1VBQU13STtRQUFLLElBQUlxQyxLQUFBLENBQU1yQyxJQUFBLENBQUtuTCxDQUFDO1FBQ2pDLElBQUksQ0FBQzJDLElBQUEsQ0FBS0QsTUFBQSxJQUFVLENBQUNDLElBQUEsQ0FBS2lOLGdCQUFBLENBQWlCLEtBQUssRUFBRWpOLElBQUEsQ0FBSzhELElBQUEsSUFBUXVKLElBQUEsTUFBVSxDQUFDcE0sT0FBQSxDQUFRakIsSUFBQSxJQUFRd0ksSUFBQSxDQUFLMkMsUUFBQSxHQUFXO1VBQ3RHNEMsTUFBQSxDQUFPck4sSUFBQSxDQUFLO1lBQUVtSyxLQUFBLEVBQU83SyxJQUFBLENBQUs4SyxZQUFBO1lBQWM5SyxJQUFBO1lBQU1nTyxHQUFBLEVBQUsvTTtVQUFRLENBQUM7VUFDNURvTSxJQUFBLENBQUtyTixJQUFBLENBQUs4RCxJQUFJLElBQUk7UUFDdEI7TUFDSjtJQUNKO0lBQ0EsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQSxJQUFJcUssVUFBQSxFQUFZO0lBQ1osT0FBTyxLQUFLM0YsSUFBQSxDQUFLN0osTUFBQTtFQUNyQjtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0F5UCxLQUFLOUwsQ0FBQSxFQUFHO0lBQ0osSUFBSUEsQ0FBQSxJQUFLLEtBQUtrRyxJQUFBLENBQUs3SixNQUFBLEVBQ2YsTUFBTSxJQUFJNkMsVUFBQSxDQUFXLGNBQWNjLENBQUMsK0JBQStCO0lBQ3ZFLE9BQU8sS0FBS2tHLElBQUEsQ0FBS2xHLENBQUM7RUFDdEI7RUFBQTtBQUFBO0FBQUE7RUFJQUwsU0FBQSxFQUFXO0lBQ1AsSUFBSW9MLElBQUEsR0FBTyxFQUFDO0lBQ1osU0FBU2dCLEtBQUs1QyxDQUFBLEVBQUc7TUFDYjRCLElBQUEsQ0FBSzNNLElBQUEsQ0FBSytLLENBQUM7TUFDWCxTQUFTcE8sQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSW9PLENBQUEsQ0FBRWpELElBQUEsQ0FBSzdKLE1BQUEsRUFBUXRCLENBQUEsSUFDL0IsSUFBSWdRLElBQUEsQ0FBS00sT0FBQSxDQUFRbEMsQ0FBQSxDQUFFakQsSUFBQSxDQUFLbkwsQ0FBQyxFQUFFbUwsSUFBSSxLQUFLLElBQ2hDNkYsSUFBQSxDQUFLNUMsQ0FBQSxDQUFFakQsSUFBQSxDQUFLbkwsQ0FBQyxFQUFFbUwsSUFBSTtJQUMvQjtJQUNBNkYsSUFBQSxDQUFLLElBQUk7SUFDVCxPQUFPaEIsSUFBQSxDQUFLaEwsR0FBQSxDQUFJLENBQUNvSixDQUFBLEVBQUdwTyxDQUFBLEtBQU07TUFDdEIsSUFBSWlSLEdBQUEsR0FBTWpSLENBQUEsSUFBS29PLENBQUEsQ0FBRU4sUUFBQSxHQUFXLE1BQU0sT0FBTztNQUN6QyxTQUFTb0QsRUFBQSxHQUFJLEdBQUdBLEVBQUEsR0FBSTlDLENBQUEsQ0FBRWpELElBQUEsQ0FBSzdKLE1BQUEsRUFBUTRQLEVBQUEsSUFDL0JELEdBQUEsS0FBUUMsRUFBQSxHQUFJLE9BQU8sTUFBTTlDLENBQUEsQ0FBRWpELElBQUEsQ0FBSytGLEVBQUMsRUFBRXZPLElBQUEsQ0FBSzhELElBQUEsR0FBTyxPQUFPdUosSUFBQSxDQUFLTSxPQUFBLENBQVFsQyxDQUFBLENBQUVqRCxJQUFBLENBQUsrRixFQUFDLEVBQUUvRixJQUFJO01BQ3JGLE9BQU84RixHQUFBO0lBQ1gsQ0FBQyxFQUFFbk0sSUFBQSxDQUFLLElBQUk7RUFDaEI7QUFDSjtBQUlBckcsWUFBQSxDQUFhZ0YsS0FBQSxHQUFRLElBQUloRixZQUFBLENBQWEsSUFBSTtBQUMxQyxJQUFNMFEsV0FBQSxHQUFOLE1BQWtCO0VBQ2QzTixZQUFZd04sTUFBQSxFQUFRQyxTQUFBLEVBQVc7SUFDM0IsS0FBS0QsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0MsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLEtBQUtrQyxNQUFBLEdBQVM7SUFDZCxLQUFLcFIsR0FBQSxHQUFNO0lBQ1gsS0FBS3FSLE1BQUEsR0FBU3BDLE1BQUEsQ0FBT3FDLEtBQUEsQ0FBTSxnQkFBZ0I7SUFDM0MsSUFBSSxLQUFLRCxNQUFBLENBQU8sS0FBS0EsTUFBQSxDQUFPOVAsTUFBQSxHQUFTLENBQUMsS0FBSyxJQUN2QyxLQUFLOFAsTUFBQSxDQUFPRSxHQUFBLENBQUk7SUFDcEIsSUFBSSxLQUFLRixNQUFBLENBQU8sQ0FBQyxLQUFLLElBQ2xCLEtBQUtBLE1BQUEsQ0FBT1IsS0FBQSxDQUFNO0VBQzFCO0VBQ0EsSUFBSXpGLEtBQUEsRUFBTztJQUFFLE9BQU8sS0FBS2lHLE1BQUEsQ0FBTyxLQUFLclIsR0FBRztFQUFHO0VBQzNDd1IsSUFBSUMsR0FBQSxFQUFLO0lBQUUsT0FBTyxLQUFLckcsSUFBQSxJQUFRcUcsR0FBQSxLQUFRLEtBQUt6UixHQUFBLE1BQVM7RUFBTztFQUM1RHVQLElBQUk1RCxHQUFBLEVBQUs7SUFBRSxNQUFNLElBQUkrRixXQUFBLENBQVkvRixHQUFBLEdBQU0sOEJBQThCLEtBQUtzRCxNQUFBLEdBQVMsSUFBSTtFQUFHO0FBQzlGO0FBQ0EsU0FBU0ssVUFBVUgsTUFBQSxFQUFRO0VBQ3ZCLElBQUl3QyxLQUFBLEdBQVEsRUFBQztFQUNiLEdBQUc7SUFDQ0EsS0FBQSxDQUFNck8sSUFBQSxDQUFLc08sWUFBQSxDQUFhekMsTUFBTSxDQUFDO0VBQ25DLFNBQVNBLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHO0VBQ3ZCLE9BQU9HLEtBQUEsQ0FBTXBRLE1BQUEsSUFBVSxJQUFJb1EsS0FBQSxDQUFNLENBQUMsSUFBSTtJQUFFL08sSUFBQSxFQUFNO0lBQVUrTztFQUFNO0FBQ2xFO0FBQ0EsU0FBU0MsYUFBYXpDLE1BQUEsRUFBUTtFQUMxQixJQUFJd0MsS0FBQSxHQUFRLEVBQUM7RUFDYixHQUFHO0lBQ0NBLEtBQUEsQ0FBTXJPLElBQUEsQ0FBS3VPLGtCQUFBLENBQW1CMUMsTUFBTSxDQUFDO0VBQ3pDLFNBQVNBLE1BQUEsQ0FBTy9ELElBQUEsSUFBUStELE1BQUEsQ0FBTy9ELElBQUEsSUFBUSxPQUFPK0QsTUFBQSxDQUFPL0QsSUFBQSxJQUFRO0VBQzdELE9BQU91RyxLQUFBLENBQU1wUSxNQUFBLElBQVUsSUFBSW9RLEtBQUEsQ0FBTSxDQUFDLElBQUk7SUFBRS9PLElBQUEsRUFBTTtJQUFPK087RUFBTTtBQUMvRDtBQUNBLFNBQVNFLG1CQUFtQjFDLE1BQUEsRUFBUTtFQUNoQyxJQUFJRSxJQUFBLEdBQU95QyxhQUFBLENBQWMzQyxNQUFNO0VBQy9CLFNBQVM7SUFDTCxJQUFJQSxNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUNkbkMsSUFBQSxHQUFPO01BQUV6TSxJQUFBLEVBQU07TUFBUXlNO0lBQUssV0FDdkJGLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHLEdBQ25CbkMsSUFBQSxHQUFPO01BQUV6TSxJQUFBLEVBQU07TUFBUXlNO0lBQUssV0FDdkJGLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHLEdBQ25CbkMsSUFBQSxHQUFPO01BQUV6TSxJQUFBLEVBQU07TUFBT3lNO0lBQUssV0FDdEJGLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHLEdBQ25CbkMsSUFBQSxHQUFPMEMsY0FBQSxDQUFlNUMsTUFBQSxFQUFRRSxJQUFJLE9BRWxDO0VBQ1I7RUFDQSxPQUFPQSxJQUFBO0FBQ1g7QUFDQSxTQUFTMkMsU0FBUzdDLE1BQUEsRUFBUTtFQUN0QixJQUFJLEtBQUs4QyxJQUFBLENBQUs5QyxNQUFBLENBQU8vRCxJQUFJLEdBQ3JCK0QsTUFBQSxDQUFPSSxHQUFBLENBQUksMkJBQTJCSixNQUFBLENBQU8vRCxJQUFBLEdBQU8sR0FBRztFQUMzRCxJQUFJNUgsTUFBQSxHQUFTME8sTUFBQSxDQUFPL0MsTUFBQSxDQUFPL0QsSUFBSTtFQUMvQitELE1BQUEsQ0FBT25QLEdBQUE7RUFDUCxPQUFPd0QsTUFBQTtBQUNYO0FBQ0EsU0FBU3VPLGVBQWU1QyxNQUFBLEVBQVFFLElBQUEsRUFBTTtFQUNsQyxJQUFJL04sR0FBQSxHQUFNMFEsUUFBQSxDQUFTN0MsTUFBTTtJQUFHak4sR0FBQSxHQUFNWixHQUFBO0VBQ2xDLElBQUk2TixNQUFBLENBQU9xQyxHQUFBLENBQUksR0FBRyxHQUFHO0lBQ2pCLElBQUlyQyxNQUFBLENBQU8vRCxJQUFBLElBQVEsS0FDZmxKLEdBQUEsR0FBTThQLFFBQUEsQ0FBUzdDLE1BQU0sT0FFckJqTixHQUFBLEdBQU07RUFDZDtFQUNBLElBQUksQ0FBQ2lOLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHLEdBQ2ZyQyxNQUFBLENBQU9JLEdBQUEsQ0FBSSx1QkFBdUI7RUFDdEMsT0FBTztJQUFFM00sSUFBQSxFQUFNO0lBQVN0QixHQUFBO0lBQUtZLEdBQUE7SUFBS21OO0VBQUs7QUFDM0M7QUFDQSxTQUFTOEMsWUFBWWhELE1BQUEsRUFBUXpJLElBQUEsRUFBTTtFQUMvQixJQUFJeUosS0FBQSxHQUFRaEIsTUFBQSxDQUFPRCxTQUFBO0lBQVd0TSxJQUFBLEdBQU91TixLQUFBLENBQU16SixJQUFJO0VBQy9DLElBQUk5RCxJQUFBLEVBQ0EsT0FBTyxDQUFDQSxJQUFJO0VBQ2hCLElBQUlZLE1BQUEsR0FBUyxFQUFDO0VBQ2QsU0FBUzRPLFFBQUEsSUFBWWpDLEtBQUEsRUFBTztJQUN4QixJQUFJa0MsS0FBQSxHQUFPbEMsS0FBQSxDQUFNaUMsUUFBUTtJQUN6QixJQUFJQyxLQUFBLENBQUtDLFNBQUEsQ0FBVTVMLElBQUksR0FDbkJsRCxNQUFBLENBQU9GLElBQUEsQ0FBSytPLEtBQUk7RUFDeEI7RUFDQSxJQUFJN08sTUFBQSxDQUFPakMsTUFBQSxJQUFVLEdBQ2pCNE4sTUFBQSxDQUFPSSxHQUFBLENBQUksNEJBQTRCN0ksSUFBQSxHQUFPLFNBQVM7RUFDM0QsT0FBT2xELE1BQUE7QUFDWDtBQUNBLFNBQVNzTyxjQUFjM0MsTUFBQSxFQUFRO0VBQzNCLElBQUlBLE1BQUEsQ0FBT3FDLEdBQUEsQ0FBSSxHQUFHLEdBQUc7SUFDakIsSUFBSW5DLElBQUEsR0FBT0MsU0FBQSxDQUFVSCxNQUFNO0lBQzNCLElBQUksQ0FBQ0EsTUFBQSxDQUFPcUMsR0FBQSxDQUFJLEdBQUcsR0FDZnJDLE1BQUEsQ0FBT0ksR0FBQSxDQUFJLHVCQUF1QjtJQUN0QyxPQUFPRixJQUFBO0VBQ1gsV0FDUyxDQUFDLEtBQUs0QyxJQUFBLENBQUs5QyxNQUFBLENBQU8vRCxJQUFJLEdBQUc7SUFDOUIsSUFBSXVHLEtBQUEsR0FBUVEsV0FBQSxDQUFZaEQsTUFBQSxFQUFRQSxNQUFBLENBQU8vRCxJQUFJLEVBQUVuRyxHQUFBLENBQUlyQyxJQUFBLElBQVE7TUFDckQsSUFBSXVNLE1BQUEsQ0FBT2lDLE1BQUEsSUFBVSxNQUNqQmpDLE1BQUEsQ0FBT2lDLE1BQUEsR0FBU3hPLElBQUEsQ0FBS3VJLFFBQUEsVUFDaEJnRSxNQUFBLENBQU9pQyxNQUFBLElBQVV4TyxJQUFBLENBQUt1SSxRQUFBLEVBQzNCZ0UsTUFBQSxDQUFPSSxHQUFBLENBQUksaUNBQWlDO01BQ2hELE9BQU87UUFBRTNNLElBQUEsRUFBTTtRQUFReUMsS0FBQSxFQUFPekM7TUFBSztJQUN2QyxDQUFDO0lBQ0R1TSxNQUFBLENBQU9uUCxHQUFBO0lBQ1AsT0FBTzJSLEtBQUEsQ0FBTXBRLE1BQUEsSUFBVSxJQUFJb1EsS0FBQSxDQUFNLENBQUMsSUFBSTtNQUFFL08sSUFBQSxFQUFNO01BQVUrTztJQUFNO0VBQ2xFLE9BQ0s7SUFDRHhDLE1BQUEsQ0FBT0ksR0FBQSxDQUFJLHVCQUF1QkosTUFBQSxDQUFPL0QsSUFBQSxHQUFPLEdBQUc7RUFDdkQ7QUFDSjtBQVNBLFNBQVNxRSxJQUFJSixJQUFBLEVBQU07RUFDZixJQUFJa0QsSUFBQSxHQUFNLENBQUMsRUFBRTtFQUNiQyxPQUFBLENBQVFDLE9BQUEsQ0FBUXBELElBQUEsRUFBTSxDQUFDLEdBQUc3TSxJQUFBLENBQUssQ0FBQztFQUNoQyxPQUFPK1AsSUFBQTtFQUNQLFNBQVMvUCxLQUFBLEVBQU87SUFBRSxPQUFPK1AsSUFBQSxDQUFJalAsSUFBQSxDQUFLLEVBQUUsSUFBSTtFQUFHO0VBQzNDLFNBQVMwTixLQUFLclAsSUFBQSxFQUFNQyxFQUFBLEVBQUk4USxJQUFBLEVBQU07SUFDMUIsSUFBSUMsS0FBQSxHQUFPO01BQUVELElBQUE7TUFBTTlRO0lBQUc7SUFDdEIyUSxJQUFBLENBQUk1USxJQUFJLEVBQUUyQixJQUFBLENBQUtxUCxLQUFJO0lBQ25CLE9BQU9BLEtBQUE7RUFDWDtFQUNBLFNBQVNILFFBQVFJLEtBQUEsRUFBT2hSLEVBQUEsRUFBSTtJQUN4QmdSLEtBQUEsQ0FBTXRPLE9BQUEsQ0FBUXFPLEtBQUEsSUFBUUEsS0FBQSxDQUFLL1EsRUFBQSxHQUFLQSxFQUFFO0VBQ3RDO0VBQ0EsU0FBUzZRLFFBQVFJLEtBQUEsRUFBTWxSLElBQUEsRUFBTTtJQUN6QixJQUFJa1IsS0FBQSxDQUFLalEsSUFBQSxJQUFRLFVBQVU7TUFDdkIsT0FBT2lRLEtBQUEsQ0FBS2xCLEtBQUEsQ0FBTW1CLE1BQUEsQ0FBTyxDQUFDNUIsR0FBQSxFQUFLNkIsS0FBQSxLQUFTN0IsR0FBQSxDQUFJbE4sTUFBQSxDQUFPeU8sT0FBQSxDQUFRTSxLQUFBLEVBQU1wUixJQUFJLENBQUMsR0FBRyxFQUFFO0lBQy9FLFdBQ1NrUixLQUFBLENBQUtqUSxJQUFBLElBQVEsT0FBTztNQUN6QixTQUFTM0MsQ0FBQSxHQUFJLElBQUlBLENBQUEsSUFBSztRQUNsQixJQUFJbUwsSUFBQSxHQUFPcUgsT0FBQSxDQUFRSSxLQUFBLENBQUtsQixLQUFBLENBQU0xUixDQUFDLEdBQUcwQixJQUFJO1FBQ3RDLElBQUkxQixDQUFBLElBQUs0UyxLQUFBLENBQUtsQixLQUFBLENBQU1wUSxNQUFBLEdBQVMsR0FDekIsT0FBTzZKLElBQUE7UUFDWG9ILE9BQUEsQ0FBUXBILElBQUEsRUFBTXpKLElBQUEsR0FBT2EsSUFBQSxDQUFLLENBQUM7TUFDL0I7SUFDSixXQUNTcVEsS0FBQSxDQUFLalEsSUFBQSxJQUFRLFFBQVE7TUFDMUIsSUFBSW9RLElBQUEsR0FBT3hRLElBQUEsQ0FBSztNQUNoQndPLElBQUEsQ0FBS3JQLElBQUEsRUFBTXFSLElBQUk7TUFDZlIsT0FBQSxDQUFRQyxPQUFBLENBQVFJLEtBQUEsQ0FBS3hELElBQUEsRUFBTTJELElBQUksR0FBR0EsSUFBSTtNQUN0QyxPQUFPLENBQUNoQyxJQUFBLENBQUtnQyxJQUFJLENBQUM7SUFDdEIsV0FDU0gsS0FBQSxDQUFLalEsSUFBQSxJQUFRLFFBQVE7TUFDMUIsSUFBSW9RLElBQUEsR0FBT3hRLElBQUEsQ0FBSztNQUNoQmdRLE9BQUEsQ0FBUUMsT0FBQSxDQUFRSSxLQUFBLENBQUt4RCxJQUFBLEVBQU0xTixJQUFJLEdBQUdxUixJQUFJO01BQ3RDUixPQUFBLENBQVFDLE9BQUEsQ0FBUUksS0FBQSxDQUFLeEQsSUFBQSxFQUFNMkQsSUFBSSxHQUFHQSxJQUFJO01BQ3RDLE9BQU8sQ0FBQ2hDLElBQUEsQ0FBS2dDLElBQUksQ0FBQztJQUN0QixXQUNTSCxLQUFBLENBQUtqUSxJQUFBLElBQVEsT0FBTztNQUN6QixPQUFPLENBQUNvTyxJQUFBLENBQUtyUCxJQUFJLENBQUMsRUFBRXFDLE1BQUEsQ0FBT3lPLE9BQUEsQ0FBUUksS0FBQSxDQUFLeEQsSUFBQSxFQUFNMU4sSUFBSSxDQUFDO0lBQ3ZELFdBQ1NrUixLQUFBLENBQUtqUSxJQUFBLElBQVEsU0FBUztNQUMzQixJQUFJZ0MsR0FBQSxHQUFNakQsSUFBQTtNQUNWLFNBQVMxQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNFMsS0FBQSxDQUFLdlIsR0FBQSxFQUFLckIsQ0FBQSxJQUFLO1FBQy9CLElBQUltTCxJQUFBLEdBQU81SSxJQUFBLENBQUs7UUFDaEJnUSxPQUFBLENBQVFDLE9BQUEsQ0FBUUksS0FBQSxDQUFLeEQsSUFBQSxFQUFNekssR0FBRyxHQUFHd0csSUFBSTtRQUNyQ3hHLEdBQUEsR0FBTXdHLElBQUE7TUFDVjtNQUNBLElBQUl5SCxLQUFBLENBQUszUSxHQUFBLElBQU8sSUFBSTtRQUNoQnNRLE9BQUEsQ0FBUUMsT0FBQSxDQUFRSSxLQUFBLENBQUt4RCxJQUFBLEVBQU16SyxHQUFHLEdBQUdBLEdBQUc7TUFDeEMsT0FDSztRQUNELFNBQVMzRSxDQUFBLEdBQUk0UyxLQUFBLENBQUt2UixHQUFBLEVBQUtyQixDQUFBLEdBQUk0UyxLQUFBLENBQUszUSxHQUFBLEVBQUtqQyxDQUFBLElBQUs7VUFDdEMsSUFBSW1MLElBQUEsR0FBTzVJLElBQUEsQ0FBSztVQUNoQndPLElBQUEsQ0FBS3BNLEdBQUEsRUFBS3dHLElBQUk7VUFDZG9ILE9BQUEsQ0FBUUMsT0FBQSxDQUFRSSxLQUFBLENBQUt4RCxJQUFBLEVBQU16SyxHQUFHLEdBQUd3RyxJQUFJO1VBQ3JDeEcsR0FBQSxHQUFNd0csSUFBQTtRQUNWO01BQ0o7TUFDQSxPQUFPLENBQUM0RixJQUFBLENBQUtwTSxHQUFHLENBQUM7SUFDckIsV0FDU2lPLEtBQUEsQ0FBS2pRLElBQUEsSUFBUSxRQUFRO01BQzFCLE9BQU8sQ0FBQ29PLElBQUEsQ0FBS3JQLElBQUEsRUFBTSxRQUFXa1IsS0FBQSxDQUFLeE4sS0FBSyxDQUFDO0lBQzdDLE9BQ0s7TUFDRCxNQUFNLElBQUlnQyxLQUFBLENBQU0sbUJBQW1CO0lBQ3ZDO0VBQ0o7QUFDSjtBQUNBLFNBQVM0TCxJQUFJblQsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7RUFBRSxPQUFPQSxDQUFBLEdBQUlELENBQUE7QUFBRztBQUluQyxTQUFTb1QsU0FBU1gsSUFBQSxFQUFLL1AsSUFBQSxFQUFNO0VBQ3pCLElBQUlnQixNQUFBLEdBQVMsRUFBQztFQUNkeU4sSUFBQSxDQUFLek8sSUFBSTtFQUNULE9BQU9nQixNQUFBLENBQU80RCxJQUFBLENBQUs2TCxHQUFHO0VBQ3RCLFNBQVNoQyxLQUFLa0MsS0FBQSxFQUFNO0lBQ2hCLElBQUlQLEtBQUEsR0FBUUwsSUFBQSxDQUFJWSxLQUFJO0lBQ3BCLElBQUlQLEtBQUEsQ0FBTXJSLE1BQUEsSUFBVSxLQUFLLENBQUNxUixLQUFBLENBQU0sQ0FBQyxFQUFFRixJQUFBLEVBQy9CLE9BQU96QixJQUFBLENBQUsyQixLQUFBLENBQU0sQ0FBQyxFQUFFaFIsRUFBRTtJQUMzQjRCLE1BQUEsQ0FBT0YsSUFBQSxDQUFLNlAsS0FBSTtJQUNoQixTQUFTbFQsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJTLEtBQUEsQ0FBTXJSLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUNuQyxJQUFJO1FBQUV5UyxJQUFBO1FBQU05UTtNQUFHLElBQUlnUixLQUFBLENBQU0zUyxDQUFDO01BQzFCLElBQUksQ0FBQ3lTLElBQUEsSUFBUWxQLE1BQUEsQ0FBTytNLE9BQUEsQ0FBUTNPLEVBQUUsS0FBSyxJQUMvQnFQLElBQUEsQ0FBS3JQLEVBQUU7SUFDZjtFQUNKO0FBQ0o7QUFJQSxTQUFTNE4sSUFBSStDLElBQUEsRUFBSztFQUNkLElBQUlhLE9BQUEsR0FBVSxlQUFBM0csTUFBQSxDQUFPMUYsTUFBQSxDQUFPLElBQUk7RUFDaEMsT0FBT3NNLE9BQUEsQ0FBUUgsUUFBQSxDQUFTWCxJQUFBLEVBQUssQ0FBQyxDQUFDO0VBQy9CLFNBQVNjLFFBQVFDLE1BQUEsRUFBUTtJQUNyQixJQUFJcEMsR0FBQSxHQUFNLEVBQUM7SUFDWG9DLE1BQUEsQ0FBT2hQLE9BQUEsQ0FBUTlCLElBQUEsSUFBUTtNQUNuQitQLElBQUEsQ0FBSS9QLElBQUksRUFBRThCLE9BQUEsQ0FBUSxDQUFDO1FBQUVvTyxJQUFBO1FBQU05UTtNQUFHLE1BQU07UUFDaEMsSUFBSSxDQUFDOFEsSUFBQSxFQUNEO1FBQ0osSUFBSXZNLEdBQUE7UUFDSixTQUFTbEcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWlSLEdBQUEsQ0FBSTNQLE1BQUEsRUFBUXRCLENBQUEsSUFDNUIsSUFBSWlSLEdBQUEsQ0FBSWpSLENBQUMsRUFBRSxDQUFDLEtBQUt5UyxJQUFBLEVBQ2J2TSxHQUFBLEdBQU0rSyxHQUFBLENBQUlqUixDQUFDLEVBQUUsQ0FBQztRQUN0QmlULFFBQUEsQ0FBU1gsSUFBQSxFQUFLM1EsRUFBRSxFQUFFMEMsT0FBQSxDQUFRNk8sS0FBQSxJQUFRO1VBQzlCLElBQUksQ0FBQ2hOLEdBQUEsRUFDRCtLLEdBQUEsQ0FBSTVOLElBQUEsQ0FBSyxDQUFDb1AsSUFBQSxFQUFNdk0sR0FBQSxHQUFNLEVBQUUsQ0FBQztVQUM3QixJQUFJQSxHQUFBLENBQUlvSyxPQUFBLENBQVE0QyxLQUFJLEtBQUssSUFDckJoTixHQUFBLENBQUk3QyxJQUFBLENBQUs2UCxLQUFJO1FBQ3JCLENBQUM7TUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUlJLEtBQUEsR0FBUUgsT0FBQSxDQUFRRSxNQUFBLENBQU92TyxJQUFBLENBQUssR0FBRyxDQUFDLElBQUksSUFBSXJHLFlBQUEsQ0FBYTRVLE1BQUEsQ0FBTy9DLE9BQUEsQ0FBUWdDLElBQUEsQ0FBSWhSLE1BQUEsR0FBUyxDQUFDLElBQUksRUFBRTtJQUM1RixTQUFTdEIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWlSLEdBQUEsQ0FBSTNQLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUNqQyxJQUFJdVQsT0FBQSxHQUFTdEMsR0FBQSxDQUFJalIsQ0FBQyxFQUFFLENBQUMsRUFBRW1ILElBQUEsQ0FBSzZMLEdBQUc7TUFDL0JNLEtBQUEsQ0FBTW5JLElBQUEsQ0FBSzlILElBQUEsQ0FBSztRQUFFVixJQUFBLEVBQU1zTyxHQUFBLENBQUlqUixDQUFDLEVBQUUsQ0FBQztRQUFHbUwsSUFBQSxFQUFNZ0ksT0FBQSxDQUFRSSxPQUFBLENBQU96TyxJQUFBLENBQUssR0FBRyxDQUFDLEtBQUtzTyxPQUFBLENBQVFHLE9BQU07TUFBRSxDQUFDO0lBQzNGO0lBQ0EsT0FBT0QsS0FBQTtFQUNYO0FBQ0o7QUFDQSxTQUFTN0QsaUJBQWlCakMsS0FBQSxFQUFPMEIsTUFBQSxFQUFRO0VBQ3JDLFNBQVNsUCxDQUFBLEdBQUksR0FBR3dULElBQUEsR0FBTyxDQUFDaEcsS0FBSyxHQUFHeE4sQ0FBQSxHQUFJd1QsSUFBQSxDQUFLbFMsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO0lBQ2xELElBQUlzVCxLQUFBLEdBQVFFLElBQUEsQ0FBS3hULENBQUM7TUFBR3lULElBQUEsR0FBTyxDQUFDSCxLQUFBLENBQU14RixRQUFBO01BQVVuSSxLQUFBLEdBQVEsRUFBQztJQUN0RCxTQUFTbEYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZTLEtBQUEsQ0FBTW5JLElBQUEsQ0FBSzdKLE1BQUEsRUFBUWIsQ0FBQSxJQUFLO01BQ3hDLElBQUk7UUFBRWtDLElBQUE7UUFBTXdJO01BQUssSUFBSW1JLEtBQUEsQ0FBTW5JLElBQUEsQ0FBSzFLLENBQUM7TUFDakNrRixLQUFBLENBQU10QyxJQUFBLENBQUtWLElBQUEsQ0FBSzhELElBQUk7TUFDcEIsSUFBSWdOLElBQUEsSUFBUSxFQUFFOVEsSUFBQSxDQUFLcEMsTUFBQSxJQUFVb0MsSUFBQSxDQUFLaU4sZ0JBQUEsQ0FBaUIsSUFDL0M2RCxJQUFBLEdBQU87TUFDWCxJQUFJRCxJQUFBLENBQUtsRCxPQUFBLENBQVFuRixJQUFJLEtBQUssSUFDdEJxSSxJQUFBLENBQUtuUSxJQUFBLENBQUs4SCxJQUFJO0lBQ3RCO0lBQ0EsSUFBSXNJLElBQUEsRUFDQXZFLE1BQUEsQ0FBT0ksR0FBQSxDQUFJLGlDQUFpQzNKLEtBQUEsQ0FBTWIsSUFBQSxDQUFLLElBQUksSUFBSSxnRkFBZ0Y7RUFDdko7QUFDSjtBQU1BLFNBQVNnSSxhQUFhbEgsS0FBQSxFQUFPO0VBQ3pCLElBQUk4TixRQUFBLEdBQVcsZUFBQWxILE1BQUEsQ0FBTzFGLE1BQUEsQ0FBTyxJQUFJO0VBQ2pDLFNBQVM2TSxRQUFBLElBQVkvTixLQUFBLEVBQU87SUFDeEIsSUFBSWdPLElBQUEsR0FBT2hPLEtBQUEsQ0FBTStOLFFBQVE7SUFDekIsSUFBSSxDQUFDQyxJQUFBLENBQUtDLFVBQUEsRUFDTixPQUFPO0lBQ1hILFFBQUEsQ0FBU0MsUUFBUSxJQUFJQyxJQUFBLENBQUtFLE9BQUE7RUFDOUI7RUFDQSxPQUFPSixRQUFBO0FBQ1g7QUFDQSxTQUFTSyxhQUFhbk8sS0FBQSxFQUFPUixLQUFBLEVBQU87RUFDaEMsSUFBSTRPLEtBQUEsR0FBUSxlQUFBeEgsTUFBQSxDQUFPMUYsTUFBQSxDQUFPLElBQUk7RUFDOUIsU0FBU0wsSUFBQSxJQUFRYixLQUFBLEVBQU87SUFDcEIsSUFBSXFPLEtBQUEsR0FBUTdPLEtBQUEsSUFBU0EsS0FBQSxDQUFNcUIsSUFBSTtJQUMvQixJQUFJd04sS0FBQSxLQUFVLFFBQVc7TUFDckIsSUFBSUwsSUFBQSxHQUFPaE8sS0FBQSxDQUFNYSxJQUFJO01BQ3JCLElBQUltTixJQUFBLENBQUtDLFVBQUEsRUFDTEksS0FBQSxHQUFRTCxJQUFBLENBQUtFLE9BQUEsTUFFYixNQUFNLElBQUkzUCxVQUFBLENBQVcscUNBQXFDc0MsSUFBSTtJQUN0RTtJQUNBdU4sS0FBQSxDQUFNdk4sSUFBSSxJQUFJd04sS0FBQTtFQUNsQjtFQUNBLE9BQU9ELEtBQUE7QUFDWDtBQUNBLFNBQVNqTixXQUFXbkIsS0FBQSxFQUFPc08sTUFBQSxFQUFRdlIsSUFBQSxFQUFNOEQsSUFBQSxFQUFNO0VBQzNDLFNBQVMwTixLQUFBLElBQVFELE1BQUEsRUFDYixJQUFJLEVBQUVDLEtBQUEsSUFBUXZPLEtBQUEsR0FDVixNQUFNLElBQUl6QixVQUFBLENBQVcseUJBQXlCZ1EsS0FBSSxRQUFReFIsSUFBSSxZQUFZd1IsS0FBSSxFQUFFO0VBQ3hGLFNBQVNBLEtBQUEsSUFBUXZPLEtBQUEsRUFBTztJQUNwQixJQUFJZ08sSUFBQSxHQUFPaE8sS0FBQSxDQUFNdU8sS0FBSTtJQUNyQixJQUFJUCxJQUFBLENBQUtRLFFBQUEsRUFDTFIsSUFBQSxDQUFLUSxRQUFBLENBQVNGLE1BQUEsQ0FBT0MsS0FBSSxDQUFDO0VBQ2xDO0FBQ0o7QUFDQSxTQUFTRSxVQUFVbEMsUUFBQSxFQUFVdk0sS0FBQSxFQUFPO0VBQ2hDLElBQUlyQyxNQUFBLEdBQVMsZUFBQWlKLE1BQUEsQ0FBTzFGLE1BQUEsQ0FBTyxJQUFJO0VBQy9CLElBQUlsQixLQUFBLEVBQ0EsU0FBU2EsSUFBQSxJQUFRYixLQUFBLEVBQ2JyQyxNQUFBLENBQU9rRCxJQUFJLElBQUksSUFBSTZOLFNBQUEsQ0FBVW5DLFFBQUEsRUFBVTFMLElBQUEsRUFBTWIsS0FBQSxDQUFNYSxJQUFJLENBQUM7RUFDaEUsT0FBT2xELE1BQUE7QUFDWDtBQU9BLElBQU10RSxRQUFBLEdBQU4sTUFBTXNWLFNBQUEsQ0FBUztFQUFBO0FBQUE7QUFBQTtFQUlYL1MsWUFJQWlGLElBQUEsRUFJQXRCLE1BQUEsRUFJQXZDLElBQUEsRUFBTTtJQUNGLEtBQUs2RCxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLdEIsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS3ZDLElBQUEsR0FBT0EsSUFBQTtJQUtaLEtBQUs0UixPQUFBLEdBQVU7SUFDZixLQUFLQyxNQUFBLEdBQVM3UixJQUFBLENBQUs4UixLQUFBLEdBQVE5UixJQUFBLENBQUs4UixLQUFBLENBQU1yRCxLQUFBLENBQU0sR0FBRyxJQUFJLEVBQUM7SUFDcEQsS0FBS3pMLEtBQUEsR0FBUXlPLFNBQUEsQ0FBVTVOLElBQUEsRUFBTTdELElBQUEsQ0FBS2dELEtBQUs7SUFDdkMsS0FBS2tILFlBQUEsR0FBZUEsWUFBQSxDQUFhLEtBQUtsSCxLQUFLO0lBQzNDLEtBQUs2SCxZQUFBLEdBQWU7SUFDcEIsS0FBS2pDLGFBQUEsR0FBZ0I7SUFDckIsS0FBSzNJLE9BQUEsR0FBVSxFQUFFRCxJQUFBLENBQUt1TyxNQUFBLElBQVUxSyxJQUFBLElBQVE7SUFDeEMsS0FBS2xHLE1BQUEsR0FBU2tHLElBQUEsSUFBUTtFQUMxQjtFQUFBO0FBQUE7QUFBQTtFQUlBLElBQUl5RSxTQUFBLEVBQVc7SUFBRSxPQUFPLENBQUMsS0FBS3JJLE9BQUE7RUFBUztFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS3ZDLElBQUlDLFlBQUEsRUFBYztJQUFFLE9BQU8sS0FBS0QsT0FBQSxJQUFXLEtBQUsySSxhQUFBO0VBQWU7RUFBQTtBQUFBO0FBQUE7RUFJL0QsSUFBSTlJLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBSytLLFlBQUEsSUFBZ0JoUCxZQUFBLENBQWFnRixLQUFBO0VBQU87RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUsvRCxJQUFJMkosT0FBQSxFQUFTO0lBQUUsT0FBTyxLQUFLMUssTUFBQSxJQUFVLENBQUMsQ0FBQyxLQUFLRSxJQUFBLENBQUsrUixJQUFBO0VBQU07RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUt2RHRDLFVBQVVxQyxLQUFBLEVBQU87SUFDYixPQUFPLEtBQUtELE1BQUEsQ0FBT25FLE9BQUEsQ0FBUW9FLEtBQUssSUFBSTtFQUN4QztFQUFBO0FBQUE7QUFBQTtFQUlBLElBQUlFLFdBQUEsRUFBYTtJQUNiLE9BQU8sS0FBS2hTLElBQUEsQ0FBS2dTLFVBQUEsS0FBZSxLQUFLaFMsSUFBQSxDQUFLaVMsSUFBQSxHQUFPLFFBQVE7RUFDN0Q7RUFBQTtBQUFBO0FBQUE7RUFJQWpGLGlCQUFBLEVBQW1CO0lBQ2YsU0FBUzNLLENBQUEsSUFBSyxLQUFLVyxLQUFBLEVBQ2YsSUFBSSxLQUFLQSxLQUFBLENBQU1YLENBQUMsRUFBRTZQLFVBQUEsRUFDZCxPQUFPO0lBQ2YsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQTNMLGtCQUFrQm5HLEtBQUEsRUFBTztJQUNyQixPQUFPLFFBQVFBLEtBQUEsSUFBUyxLQUFLeUssWUFBQSxDQUFhb0MsVUFBQSxDQUFXN00sS0FBQSxDQUFNeUssWUFBWTtFQUMzRTtFQUFBO0FBQUE7QUFBQTtFQUlBc0csYUFBYW5PLEtBQUEsRUFBTztJQUNoQixJQUFJLENBQUNBLEtBQUEsSUFBUyxLQUFLa0gsWUFBQSxFQUNmLE9BQU8sS0FBS0EsWUFBQSxNQUVaLE9BQU9pSCxZQUFBLENBQWEsS0FBS25PLEtBQUEsRUFBT0EsS0FBSztFQUM3QztFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFTQWtCLE9BQU9sQixLQUFBLEdBQVEsTUFBTWxGLE9BQUEsRUFBU2tHLEtBQUEsRUFBTztJQUNqQyxJQUFJLEtBQUtyRyxNQUFBLEVBQ0wsTUFBTSxJQUFJNkcsS0FBQSxDQUFNLDRDQUE0QztJQUNoRSxPQUFPLElBQUlySSxJQUFBLENBQUssTUFBTSxLQUFLZ1YsWUFBQSxDQUFhbk8sS0FBSyxHQUFHaEgsUUFBQSxDQUFTOEMsSUFBQSxDQUFLaEIsT0FBTyxHQUFHN0IsSUFBQSxDQUFLb0ksT0FBQSxDQUFRTCxLQUFLLENBQUM7RUFDL0Y7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUFtTyxjQUFjblAsS0FBQSxHQUFRLE1BQU1sRixPQUFBLEVBQVNrRyxLQUFBLEVBQU87SUFDeENsRyxPQUFBLEdBQVU5QixRQUFBLENBQVM4QyxJQUFBLENBQUtoQixPQUFPO0lBQy9CLEtBQUt1SixZQUFBLENBQWF2SixPQUFPO0lBQ3pCLE9BQU8sSUFBSTNCLElBQUEsQ0FBSyxNQUFNLEtBQUtnVixZQUFBLENBQWFuTyxLQUFLLEdBQUdsRixPQUFBLEVBQVM3QixJQUFBLENBQUtvSSxPQUFBLENBQVFMLEtBQUssQ0FBQztFQUNoRjtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFTQXlKLGNBQWN6SyxLQUFBLEdBQVEsTUFBTWxGLE9BQUEsRUFBU2tHLEtBQUEsRUFBTztJQUN4Q2hCLEtBQUEsR0FBUSxLQUFLbU8sWUFBQSxDQUFhbk8sS0FBSztJQUMvQmxGLE9BQUEsR0FBVTlCLFFBQUEsQ0FBUzhDLElBQUEsQ0FBS2hCLE9BQU87SUFDL0IsSUFBSUEsT0FBQSxDQUFRQyxJQUFBLEVBQU07TUFDZCxJQUFJZ0ssTUFBQSxHQUFTLEtBQUs4QyxZQUFBLENBQWFxQyxVQUFBLENBQVdwUCxPQUFPO01BQ2pELElBQUksQ0FBQ2lLLE1BQUEsRUFDRCxPQUFPO01BQ1hqSyxPQUFBLEdBQVVpSyxNQUFBLENBQU81SCxNQUFBLENBQU9yQyxPQUFPO0lBQ25DO0lBQ0EsSUFBSXNVLE9BQUEsR0FBVSxLQUFLdkgsWUFBQSxDQUFhQyxhQUFBLENBQWNoTixPQUFPO0lBQ3JELElBQUlrSyxLQUFBLEdBQVFvSyxPQUFBLElBQVdBLE9BQUEsQ0FBUWxGLFVBQUEsQ0FBV2xSLFFBQUEsQ0FBUzZFLEtBQUEsRUFBTyxJQUFJO0lBQzlELElBQUksQ0FBQ21ILEtBQUEsRUFDRCxPQUFPO0lBQ1gsT0FBTyxJQUFJN0wsSUFBQSxDQUFLLE1BQU02RyxLQUFBLEVBQU9sRixPQUFBLENBQVFxQyxNQUFBLENBQU82SCxLQUFLLEdBQUcvTCxJQUFBLENBQUtvSSxPQUFBLENBQVFMLEtBQUssQ0FBQztFQUMzRTtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0FxTyxhQUFhdlUsT0FBQSxFQUFTO0lBQ2xCLElBQUk2QyxNQUFBLEdBQVMsS0FBS2tLLFlBQUEsQ0FBYUMsYUFBQSxDQUFjaE4sT0FBTztJQUNwRCxJQUFJLENBQUM2QyxNQUFBLElBQVUsQ0FBQ0EsTUFBQSxDQUFPdUssUUFBQSxFQUNuQixPQUFPO0lBQ1gsU0FBUzlOLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlVLE9BQUEsQ0FBUVQsVUFBQSxFQUFZRCxDQUFBLElBQ3BDLElBQUksQ0FBQyxLQUFLK04sV0FBQSxDQUFZck4sT0FBQSxDQUFRUCxLQUFBLENBQU1ILENBQUMsRUFBRTRHLEtBQUssR0FDeEMsT0FBTztJQUNmLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQXFELGFBQWF2SixPQUFBLEVBQVM7SUFDbEIsSUFBSSxDQUFDLEtBQUt1VSxZQUFBLENBQWF2VSxPQUFPLEdBQzFCLE1BQU0sSUFBSXlELFVBQUEsQ0FBVyw0QkFBNEIsS0FBS3NDLElBQUksS0FBSy9GLE9BQUEsQ0FBUWtFLFFBQUEsQ0FBUyxFQUFFbkMsS0FBQSxDQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUU7RUFDeEc7RUFBQTtBQUFBO0FBQUE7RUFJQXNFLFdBQVduQixLQUFBLEVBQU87SUFDZG1CLFVBQUEsQ0FBVyxLQUFLbkIsS0FBQSxFQUFPQSxLQUFBLEVBQU8sUUFBUSxLQUFLYSxJQUFJO0VBQ25EO0VBQUE7QUFBQTtBQUFBO0VBSUF5TyxlQUFlQyxRQUFBLEVBQVU7SUFDckIsT0FBTyxLQUFLWCxPQUFBLElBQVcsUUFBUSxLQUFLQSxPQUFBLENBQVFsRSxPQUFBLENBQVE2RSxRQUFRLElBQUk7RUFDcEU7RUFBQTtBQUFBO0FBQUE7RUFJQXBILFlBQVluSCxLQUFBLEVBQU87SUFDZixJQUFJLEtBQUs0TixPQUFBLElBQVcsTUFDaEIsT0FBTztJQUNYLFNBQVN4VSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNEcsS0FBQSxDQUFNdEYsTUFBQSxFQUFRdEIsQ0FBQSxJQUM5QixJQUFJLENBQUMsS0FBS2tWLGNBQUEsQ0FBZXRPLEtBQUEsQ0FBTTVHLENBQUMsRUFBRTJDLElBQUksR0FDbEMsT0FBTztJQUNmLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtFQUlBeVMsYUFBYXhPLEtBQUEsRUFBTztJQUNoQixJQUFJLEtBQUs0TixPQUFBLElBQVcsTUFDaEIsT0FBTzVOLEtBQUE7SUFDWCxJQUFJL0MsS0FBQTtJQUNKLFNBQVM3RCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNEcsS0FBQSxDQUFNdEYsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO01BQ25DLElBQUksQ0FBQyxLQUFLa1YsY0FBQSxDQUFldE8sS0FBQSxDQUFNNUcsQ0FBQyxFQUFFMkMsSUFBSSxHQUFHO1FBQ3JDLElBQUksQ0FBQ2tCLEtBQUEsRUFDREEsS0FBQSxHQUFPK0MsS0FBQSxDQUFNbkUsS0FBQSxDQUFNLEdBQUd6QyxDQUFDO01BQy9CLFdBQ1M2RCxLQUFBLEVBQU07UUFDWEEsS0FBQSxDQUFLUixJQUFBLENBQUt1RCxLQUFBLENBQU01RyxDQUFDLENBQUM7TUFDdEI7SUFDSjtJQUNBLE9BQU8sQ0FBQzZELEtBQUEsR0FBTytDLEtBQUEsR0FBUS9DLEtBQUEsQ0FBS3ZDLE1BQUEsR0FBU3VDLEtBQUEsR0FBT2hGLElBQUEsQ0FBS3FJLElBQUE7RUFDckQ7RUFBQTtBQUFBO0FBQUE7RUFJQSxPQUFPc0wsUUFBUTdNLEtBQUEsRUFBT1IsTUFBQSxFQUFRO0lBQzFCLElBQUk1QixNQUFBLEdBQVMsZUFBQWlKLE1BQUEsQ0FBTzFGLE1BQUEsQ0FBTyxJQUFJO0lBQy9CbkIsS0FBQSxDQUFNdEIsT0FBQSxDQUFRLENBQUNvQyxJQUFBLEVBQU03RCxJQUFBLEtBQVNXLE1BQUEsQ0FBT2tELElBQUksSUFBSSxJQUFJOE4sU0FBQSxDQUFTOU4sSUFBQSxFQUFNdEIsTUFBQSxFQUFRdkMsSUFBSSxDQUFDO0lBQzdFLElBQUl5UyxPQUFBLEdBQVVsUSxNQUFBLENBQU92QyxJQUFBLENBQUswUyxPQUFBLElBQVc7SUFDckMsSUFBSSxDQUFDL1IsTUFBQSxDQUFPOFIsT0FBTyxHQUNmLE1BQU0sSUFBSWxSLFVBQUEsQ0FBVywyQ0FBMkNrUixPQUFBLEdBQVUsSUFBSTtJQUNsRixJQUFJLENBQUM5UixNQUFBLENBQU8vQyxJQUFBLEVBQ1IsTUFBTSxJQUFJMkQsVUFBQSxDQUFXLGtDQUFrQztJQUMzRCxTQUFTdUMsQ0FBQSxJQUFLbkQsTUFBQSxDQUFPL0MsSUFBQSxDQUFLb0YsS0FBQSxFQUN0QixNQUFNLElBQUl6QixVQUFBLENBQVcsK0NBQStDO0lBQ3hFLE9BQU9aLE1BQUE7RUFDWDtBQUNKO0FBQ0EsU0FBU2dTLGFBQWFwRCxRQUFBLEVBQVV3QixRQUFBLEVBQVVoUixJQUFBLEVBQU07RUFDNUMsSUFBSXVOLEtBQUEsR0FBUXZOLElBQUEsQ0FBSzBPLEtBQUEsQ0FBTSxHQUFHO0VBQzFCLE9BQVFqTSxLQUFBLElBQVU7SUFDZCxJQUFJcUIsSUFBQSxHQUFPckIsS0FBQSxLQUFVLE9BQU8sU0FBUyxPQUFPQSxLQUFBO0lBQzVDLElBQUk4SyxLQUFBLENBQU1JLE9BQUEsQ0FBUTdKLElBQUksSUFBSSxHQUN0QixNQUFNLElBQUl0QyxVQUFBLENBQVcsMEJBQTBCK0wsS0FBSyxrQkFBa0J5RCxRQUFRLFlBQVl4QixRQUFRLFNBQVMxTCxJQUFJLEVBQUU7RUFDekg7QUFDSjtBQUVBLElBQU02TixTQUFBLEdBQU4sTUFBZ0I7RUFDWjlTLFlBQVkyUSxRQUFBLEVBQVV3QixRQUFBLEVBQVU2QixPQUFBLEVBQVM7SUFDckMsS0FBSzNCLFVBQUEsR0FBYXJILE1BQUEsQ0FBTytCLFNBQUEsQ0FBVWtILGNBQUEsQ0FBZUMsSUFBQSxDQUFLRixPQUFBLEVBQVMsU0FBUztJQUN6RSxLQUFLMUIsT0FBQSxHQUFVMEIsT0FBQSxDQUFRMUIsT0FBQTtJQUN2QixLQUFLTSxRQUFBLEdBQVcsT0FBT29CLE9BQUEsQ0FBUXBCLFFBQUEsSUFBWSxXQUFXbUIsWUFBQSxDQUFhcEQsUUFBQSxFQUFVd0IsUUFBQSxFQUFVNkIsT0FBQSxDQUFRcEIsUUFBUSxJQUFJb0IsT0FBQSxDQUFRcEIsUUFBQTtFQUN2SDtFQUNBLElBQUlVLFdBQUEsRUFBYTtJQUNiLE9BQU8sQ0FBQyxLQUFLakIsVUFBQTtFQUNqQjtBQUNKO0FBUUEsSUFBTS9VLFFBQUEsR0FBTixNQUFNNlcsU0FBQSxDQUFTO0VBQUE7QUFBQTtBQUFBO0VBSVhuVSxZQUlBaUYsSUFBQSxFQUlBSixJQUFBLEVBSUFsQixNQUFBLEVBSUF2QyxJQUFBLEVBQU07SUFDRixLQUFLNkQsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS0osSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS2xCLE1BQUEsR0FBU0EsTUFBQTtJQUNkLEtBQUt2QyxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLZ0QsS0FBQSxHQUFReU8sU0FBQSxDQUFVNU4sSUFBQSxFQUFNN0QsSUFBQSxDQUFLZ0QsS0FBSztJQUN2QyxLQUFLZ1EsUUFBQSxHQUFXO0lBQ2hCLElBQUlsQyxRQUFBLEdBQVc1RyxZQUFBLENBQWEsS0FBS2xILEtBQUs7SUFDdEMsS0FBS2lRLFFBQUEsR0FBV25DLFFBQUEsR0FBVyxJQUFJN1UsSUFBQSxDQUFLLE1BQU02VSxRQUFRLElBQUk7RUFDMUQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUE1TSxPQUFPbEIsS0FBQSxHQUFRLE1BQU07SUFDakIsSUFBSSxDQUFDQSxLQUFBLElBQVMsS0FBS2lRLFFBQUEsRUFDZixPQUFPLEtBQUtBLFFBQUE7SUFDaEIsT0FBTyxJQUFJaFgsSUFBQSxDQUFLLE1BQU1rVixZQUFBLENBQWEsS0FBS25PLEtBQUEsRUFBT0EsS0FBSyxDQUFDO0VBQ3pEO0VBQUE7QUFBQTtBQUFBO0VBSUEsT0FBTzRNLFFBQVE1TCxLQUFBLEVBQU96QixNQUFBLEVBQVE7SUFDMUIsSUFBSTVCLE1BQUEsR0FBUyxlQUFBaUosTUFBQSxDQUFPMUYsTUFBQSxDQUFPLElBQUk7TUFBR1QsSUFBQSxHQUFPO0lBQ3pDTyxLQUFBLENBQU12QyxPQUFBLENBQVEsQ0FBQ29DLElBQUEsRUFBTTdELElBQUEsS0FBU1csTUFBQSxDQUFPa0QsSUFBSSxJQUFJLElBQUlrUCxTQUFBLENBQVNsUCxJQUFBLEVBQU1KLElBQUEsSUFBUWxCLE1BQUEsRUFBUXZDLElBQUksQ0FBQztJQUNyRixPQUFPVyxNQUFBO0VBQ1g7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBK0MsY0FBY0osR0FBQSxFQUFLO0lBQ2YsU0FBU2xHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlrRyxHQUFBLENBQUk1RSxNQUFBLEVBQVF0QixDQUFBLElBQzVCLElBQUlrRyxHQUFBLENBQUlsRyxDQUFDLEVBQUUyQyxJQUFBLElBQVEsTUFBTTtNQUNyQnVELEdBQUEsR0FBTUEsR0FBQSxDQUFJekQsS0FBQSxDQUFNLEdBQUd6QyxDQUFDLEVBQUUrRCxNQUFBLENBQU9tQyxHQUFBLENBQUl6RCxLQUFBLENBQU16QyxDQUFBLEdBQUksQ0FBQyxDQUFDO01BQzdDQSxDQUFBO0lBQ0o7SUFDSixPQUFPa0csR0FBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUFLLFFBQVFMLEdBQUEsRUFBSztJQUNULFNBQVNsRyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJa0csR0FBQSxDQUFJNUUsTUFBQSxFQUFRdEIsQ0FBQSxJQUM1QixJQUFJa0csR0FBQSxDQUFJbEcsQ0FBQyxFQUFFMkMsSUFBQSxJQUFRLE1BQ2YsT0FBT3VELEdBQUEsQ0FBSWxHLENBQUM7RUFDeEI7RUFBQTtBQUFBO0FBQUE7RUFJQStHLFdBQVduQixLQUFBLEVBQU87SUFDZG1CLFVBQUEsQ0FBVyxLQUFLbkIsS0FBQSxFQUFPQSxLQUFBLEVBQU8sUUFBUSxLQUFLYSxJQUFJO0VBQ25EO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQUwsU0FBU3BELEtBQUEsRUFBTztJQUNaLE9BQU8sS0FBSzRTLFFBQUEsQ0FBU3RGLE9BQUEsQ0FBUXROLEtBQUssSUFBSTtFQUMxQztBQUNKO0FBVUEsSUFBTTVELE1BQUEsR0FBTixNQUFhO0VBQUE7QUFBQTtBQUFBO0VBSVRvQyxZQUFZb0IsSUFBQSxFQUFNO0lBTWQsS0FBS2tULG9CQUFBLEdBQXVCO0lBTTVCLEtBQUtDLE1BQUEsR0FBUyxlQUFBdkosTUFBQSxDQUFPMUYsTUFBQSxDQUFPLElBQUk7SUFDaEMsSUFBSWtQLFlBQUEsR0FBZSxLQUFLcFQsSUFBQSxHQUFPLENBQUM7SUFDaEMsU0FBU3FULElBQUEsSUFBUXJULElBQUEsRUFDYm9ULFlBQUEsQ0FBYUMsSUFBSSxJQUFJclQsSUFBQSxDQUFLcVQsSUFBSTtJQUNsQ0QsWUFBQSxDQUFhclEsS0FBQSxHQUFRbEcsaUJBQUEsQ0FBQXFVLE9BQUEsQ0FBV3BTLElBQUEsQ0FBS2tCLElBQUEsQ0FBSytDLEtBQUssR0FDM0NxUSxZQUFBLENBQWFwUCxLQUFBLEdBQVFuSCxpQkFBQSxDQUFBcVUsT0FBQSxDQUFXcFMsSUFBQSxDQUFLa0IsSUFBQSxDQUFLZ0UsS0FBQSxJQUFTLENBQUMsQ0FBQyxHQUNyRCxLQUFLakIsS0FBQSxHQUFRMUcsUUFBQSxDQUFTdVQsT0FBQSxDQUFRLEtBQUs1UCxJQUFBLENBQUsrQyxLQUFBLEVBQU8sSUFBSTtJQUN2RCxLQUFLaUIsS0FBQSxHQUFROUgsUUFBQSxDQUFTMFQsT0FBQSxDQUFRLEtBQUs1UCxJQUFBLENBQUtnRSxLQUFBLEVBQU8sSUFBSTtJQUNuRCxJQUFJc1AsZ0JBQUEsR0FBbUIsZUFBQTFKLE1BQUEsQ0FBTzFGLE1BQUEsQ0FBTyxJQUFJO0lBQ3pDLFNBQVNtUCxJQUFBLElBQVEsS0FBS3RRLEtBQUEsRUFBTztNQUN6QixJQUFJc1EsSUFBQSxJQUFRLEtBQUtyUCxLQUFBLEVBQ2IsTUFBTSxJQUFJekMsVUFBQSxDQUFXOFIsSUFBQSxHQUFPLG9DQUFvQztNQUNwRSxJQUFJdFQsSUFBQSxHQUFPLEtBQUtnRCxLQUFBLENBQU1zUSxJQUFJO1FBQUdFLFdBQUEsR0FBY3hULElBQUEsQ0FBS0MsSUFBQSxDQUFLbEMsT0FBQSxJQUFXO1FBQUkwVixRQUFBLEdBQVd6VCxJQUFBLENBQUtDLElBQUEsQ0FBS2dFLEtBQUE7TUFDekZqRSxJQUFBLENBQUs4SyxZQUFBLEdBQWV5SSxnQkFBQSxDQUFpQkMsV0FBVyxNQUMzQ0QsZ0JBQUEsQ0FBaUJDLFdBQVcsSUFBSTFYLFlBQUEsQ0FBYXNRLEtBQUEsQ0FBTW9ILFdBQUEsRUFBYSxLQUFLeFEsS0FBSztNQUMvRWhELElBQUEsQ0FBSzZJLGFBQUEsR0FBZ0I3SSxJQUFBLENBQUs4SyxZQUFBLENBQWFqQyxhQUFBO01BQ3ZDLElBQUk3SSxJQUFBLENBQUtDLElBQUEsQ0FBS2tULG9CQUFBLEVBQXNCO1FBQ2hDLElBQUksS0FBS0Esb0JBQUEsRUFDTCxNQUFNLElBQUkzUixVQUFBLENBQVcsa0NBQWtDO1FBQzNELElBQUksQ0FBQ3hCLElBQUEsQ0FBS3VJLFFBQUEsSUFBWSxDQUFDdkksSUFBQSxDQUFLRCxNQUFBLEVBQ3hCLE1BQU0sSUFBSXlCLFVBQUEsQ0FBVyx1REFBdUQ7UUFDaEYsS0FBSzJSLG9CQUFBLEdBQXVCblQsSUFBQTtNQUNoQztNQUNBQSxJQUFBLENBQUs2UixPQUFBLEdBQVU0QixRQUFBLElBQVksTUFBTSxPQUM3QkEsUUFBQSxHQUFXQyxXQUFBLENBQVksTUFBTUQsUUFBQSxDQUFTL0UsS0FBQSxDQUFNLEdBQUcsQ0FBQyxJQUM1QytFLFFBQUEsSUFBWSxNQUFNLENBQUN6VCxJQUFBLENBQUs2SSxhQUFBLEdBQWdCLEVBQUMsR0FBSTtJQUN6RDtJQUNBLFNBQVN5SyxJQUFBLElBQVEsS0FBS3JQLEtBQUEsRUFBTztNQUN6QixJQUFJakUsSUFBQSxHQUFPLEtBQUtpRSxLQUFBLENBQU1xUCxJQUFJO1FBQUdLLElBQUEsR0FBTzNULElBQUEsQ0FBS0MsSUFBQSxDQUFLd0QsUUFBQTtNQUM5Q3pELElBQUEsQ0FBS2lULFFBQUEsR0FBV1UsSUFBQSxJQUFRLE9BQU8sQ0FBQzNULElBQUksSUFBSTJULElBQUEsSUFBUSxLQUFLLEVBQUMsR0FBSUQsV0FBQSxDQUFZLE1BQU1DLElBQUEsQ0FBS2pGLEtBQUEsQ0FBTSxHQUFHLENBQUM7SUFDL0Y7SUFDQSxLQUFLOUwsWUFBQSxHQUFlb0IsSUFBQSxJQUFRNUgsSUFBQSxDQUFLbUcsUUFBQSxDQUFTLE1BQU15QixJQUFJO0lBQ3BELEtBQUswSCxZQUFBLEdBQWUxSCxJQUFBLElBQVE5SCxJQUFBLENBQUtxRyxRQUFBLENBQVMsTUFBTXlCLElBQUk7SUFDcEQsS0FBSzRQLFdBQUEsR0FBYyxLQUFLNVEsS0FBQSxDQUFNLEtBQUsvQyxJQUFBLENBQUswUyxPQUFBLElBQVcsS0FBSztJQUN4RCxLQUFLUyxNQUFBLENBQU9TLFNBQUEsR0FBWSxlQUFBaEssTUFBQSxDQUFPMUYsTUFBQSxDQUFPLElBQUk7RUFDOUM7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFPQXZFLEtBQUtJLElBQUEsRUFBTWlELEtBQUEsR0FBUSxNQUFNbEYsT0FBQSxFQUFTa0csS0FBQSxFQUFPO0lBQ3JDLElBQUksT0FBT2pFLElBQUEsSUFBUSxVQUNmQSxJQUFBLEdBQU8sS0FBSzJMLFFBQUEsQ0FBUzNMLElBQUksV0FDcEIsRUFBRUEsSUFBQSxZQUFnQjFELFFBQUEsR0FDdkIsTUFBTSxJQUFJa0YsVUFBQSxDQUFXLHdCQUF3QnhCLElBQUksV0FDNUNBLElBQUEsQ0FBS3dDLE1BQUEsSUFBVSxNQUNwQixNQUFNLElBQUloQixVQUFBLENBQVcsMkNBQTJDeEIsSUFBQSxDQUFLOEQsSUFBQSxHQUFPLEdBQUc7SUFDbkYsT0FBTzlELElBQUEsQ0FBS29TLGFBQUEsQ0FBY25QLEtBQUEsRUFBT2xGLE9BQUEsRUFBU2tHLEtBQUs7RUFDbkQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBcEcsS0FBS0EsSUFBQSxFQUFNb0csS0FBQSxFQUFPO0lBQ2QsSUFBSWpFLElBQUEsR0FBTyxLQUFLZ0QsS0FBQSxDQUFNbkYsSUFBQTtJQUN0QixPQUFPLElBQUlnTyxRQUFBLENBQVM3TCxJQUFBLEVBQU1BLElBQUEsQ0FBS21LLFlBQUEsRUFBY3RNLElBQUEsRUFBTTNCLElBQUEsQ0FBS29JLE9BQUEsQ0FBUUwsS0FBSyxDQUFDO0VBQzFFO0VBQUE7QUFBQTtBQUFBO0VBSUFDLEtBQUtsRSxJQUFBLEVBQU1pRCxLQUFBLEVBQU87SUFDZCxJQUFJLE9BQU9qRCxJQUFBLElBQVEsVUFDZkEsSUFBQSxHQUFPLEtBQUtpRSxLQUFBLENBQU1qRSxJQUFJO0lBQzFCLE9BQU9BLElBQUEsQ0FBS21FLE1BQUEsQ0FBT2xCLEtBQUs7RUFDNUI7RUFBQTtBQUFBO0FBQUE7RUFJQTBJLFNBQVM3SCxJQUFBLEVBQU07SUFDWCxJQUFJdkMsTUFBQSxHQUFRLEtBQUt5QixLQUFBLENBQU1jLElBQUk7SUFDM0IsSUFBSSxDQUFDdkMsTUFBQSxFQUNELE1BQU0sSUFBSUMsVUFBQSxDQUFXLHdCQUF3QnNDLElBQUk7SUFDckQsT0FBT3ZDLE1BQUE7RUFDWDtBQUNKO0FBQ0EsU0FBU21TLFlBQVlsUixNQUFBLEVBQVF5QixLQUFBLEVBQU87RUFDaEMsSUFBSTFDLE1BQUEsR0FBUSxFQUFDO0VBQ2IsU0FBU2xFLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk0RyxLQUFBLENBQU10RixNQUFBLEVBQVF0QixDQUFBLElBQUs7SUFDbkMsSUFBSXlHLElBQUEsR0FBT0csS0FBQSxDQUFNNUcsQ0FBQztNQUFHNkcsSUFBQSxHQUFPMUIsTUFBQSxDQUFPeUIsS0FBQSxDQUFNSCxJQUFJO01BQUdnUSxFQUFBLEdBQUs1UCxJQUFBO0lBQ3JELElBQUlBLElBQUEsRUFBTTtNQUNOM0MsTUFBQSxDQUFNYixJQUFBLENBQUt3RCxJQUFJO0lBQ25CLE9BQ0s7TUFDRCxTQUFTb1AsSUFBQSxJQUFROVEsTUFBQSxDQUFPeUIsS0FBQSxFQUFPO1FBQzNCLElBQUk4UCxLQUFBLEdBQU92UixNQUFBLENBQU95QixLQUFBLENBQU1xUCxJQUFJO1FBQzVCLElBQUl4UCxJQUFBLElBQVEsT0FBUWlRLEtBQUEsQ0FBSzlULElBQUEsQ0FBSzhSLEtBQUEsSUFBU2dDLEtBQUEsQ0FBSzlULElBQUEsQ0FBSzhSLEtBQUEsQ0FBTXJELEtBQUEsQ0FBTSxHQUFHLEVBQUVmLE9BQUEsQ0FBUTdKLElBQUksSUFBSSxJQUM5RXZDLE1BQUEsQ0FBTWIsSUFBQSxDQUFLb1QsRUFBQSxHQUFLQyxLQUFJO01BQzVCO0lBQ0o7SUFDQSxJQUFJLENBQUNELEVBQUEsRUFDRCxNQUFNLElBQUloRixXQUFBLENBQVkseUJBQXlCN0ssS0FBQSxDQUFNNUcsQ0FBQyxJQUFJLEdBQUc7RUFDckU7RUFDQSxPQUFPa0UsTUFBQTtBQUNYO0FBRUEsU0FBU3lTLFVBQVVDLElBQUEsRUFBTTtFQUFFLE9BQU9BLElBQUEsQ0FBS0MsR0FBQSxJQUFPO0FBQU07QUFDcEQsU0FBU0MsWUFBWUYsSUFBQSxFQUFNO0VBQUUsT0FBT0EsSUFBQSxDQUFLRyxLQUFBLElBQVM7QUFBTTtBQU14RCxJQUFNclksU0FBQSxHQUFOLE1BQU1zWSxVQUFBLENBQVU7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtaeFYsWUFJQTJELE1BQUEsRUFLQThSLEtBQUEsRUFBTztJQUNILEtBQUs5UixNQUFBLEdBQVNBLE1BQUE7SUFDZCxLQUFLOFIsS0FBQSxHQUFRQSxLQUFBO0lBSWIsS0FBS0MsSUFBQSxHQUFPLEVBQUM7SUFJYixLQUFLQyxNQUFBLEdBQVMsRUFBQztJQUNmLElBQUlDLGFBQUEsR0FBZ0IsS0FBS0EsYUFBQSxHQUFnQixFQUFDO0lBQzFDSCxLQUFBLENBQU01UyxPQUFBLENBQVF1UyxJQUFBLElBQVE7TUFDbEIsSUFBSUQsU0FBQSxDQUFVQyxJQUFJLEdBQUc7UUFDakIsS0FBS00sSUFBQSxDQUFLN1QsSUFBQSxDQUFLdVQsSUFBSTtNQUN2QixXQUNTRSxXQUFBLENBQVlGLElBQUksR0FBRztRQUN4QixJQUFJWCxJQUFBLEdBQU8sUUFBUW9CLElBQUEsQ0FBS1QsSUFBQSxDQUFLRyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxJQUFJSyxhQUFBLENBQWM5RyxPQUFBLENBQVEyRixJQUFJLElBQUksR0FDOUJtQixhQUFBLENBQWMvVCxJQUFBLENBQUs0UyxJQUFJO1FBQzNCLEtBQUtrQixNQUFBLENBQU85VCxJQUFBLENBQUt1VCxJQUFJO01BQ3pCO0lBQ0osQ0FBQztJQUVELEtBQUtVLGNBQUEsR0FBaUIsQ0FBQyxLQUFLSixJQUFBLENBQUtLLElBQUEsQ0FBS0MsQ0FBQSxJQUFLO01BQ3ZDLElBQUksQ0FBQyxhQUFheEYsSUFBQSxDQUFLd0YsQ0FBQSxDQUFFWCxHQUFHLEtBQUssQ0FBQ1csQ0FBQSxDQUFFalYsSUFBQSxFQUNoQyxPQUFPO01BQ1gsSUFBSUEsSUFBQSxHQUFPNEMsTUFBQSxDQUFPUSxLQUFBLENBQU02UixDQUFBLENBQUVqVixJQUFJO01BQzlCLE9BQU9BLElBQUEsQ0FBS2tMLFlBQUEsQ0FBYVEsU0FBQSxDQUFVMUwsSUFBSTtJQUMzQyxDQUFDO0VBQ0w7RUFBQTtBQUFBO0FBQUE7RUFJQXdNLE1BQU0wSSxHQUFBLEVBQUtqQyxPQUFBLEdBQVUsQ0FBQyxHQUFHO0lBQ3JCLElBQUlrQyxPQUFBLEdBQVUsSUFBSUMsWUFBQSxDQUFhLE1BQU1uQyxPQUFBLEVBQVMsS0FBSztJQUNuRGtDLE9BQUEsQ0FBUUUsTUFBQSxDQUFPSCxHQUFBLEVBQUs1WSxJQUFBLENBQUtxSSxJQUFBLEVBQU1zTyxPQUFBLENBQVE5VCxJQUFBLEVBQU04VCxPQUFBLENBQVE3VCxFQUFFO0lBQ3ZELE9BQU8rVixPQUFBLENBQVFHLE1BQUEsQ0FBTztFQUMxQjtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFTQUMsV0FBV0wsR0FBQSxFQUFLakMsT0FBQSxHQUFVLENBQUMsR0FBRztJQUMxQixJQUFJa0MsT0FBQSxHQUFVLElBQUlDLFlBQUEsQ0FBYSxNQUFNbkMsT0FBQSxFQUFTLElBQUk7SUFDbERrQyxPQUFBLENBQVFFLE1BQUEsQ0FBT0gsR0FBQSxFQUFLNVksSUFBQSxDQUFLcUksSUFBQSxFQUFNc08sT0FBQSxDQUFROVQsSUFBQSxFQUFNOFQsT0FBQSxDQUFRN1QsRUFBRTtJQUN2RCxPQUFPdEMsS0FBQSxDQUFNd0ksT0FBQSxDQUFRNlAsT0FBQSxDQUFRRyxNQUFBLENBQU8sQ0FBQztFQUN6QztFQUFBO0FBQUE7QUFBQTtFQUlBRSxTQUFTTixHQUFBLEVBQUtDLE9BQUEsRUFBUzlNLEtBQUEsRUFBTztJQUMxQixTQUFTNUssQ0FBQSxHQUFJNEssS0FBQSxHQUFRLEtBQUtzTSxJQUFBLENBQUs1RyxPQUFBLENBQVExRixLQUFLLElBQUksSUFBSSxHQUFHNUssQ0FBQSxHQUFJLEtBQUtrWCxJQUFBLENBQUs1VixNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDOUUsSUFBSTRXLElBQUEsR0FBTyxLQUFLTSxJQUFBLENBQUtsWCxDQUFDO01BQ3RCLElBQUlnWSxPQUFBLENBQVFQLEdBQUEsRUFBS2IsSUFBQSxDQUFLQyxHQUFHLE1BQ3BCRCxJQUFBLENBQUtxQixTQUFBLEtBQWMsVUFBYVIsR0FBQSxDQUFJUyxZQUFBLElBQWdCdEIsSUFBQSxDQUFLcUIsU0FBQSxNQUN6RCxDQUFDckIsSUFBQSxDQUFLYyxPQUFBLElBQVdBLE9BQUEsQ0FBUVMsY0FBQSxDQUFldkIsSUFBQSxDQUFLYyxPQUFPLElBQUk7UUFDekQsSUFBSWQsSUFBQSxDQUFLd0IsUUFBQSxFQUFVO1VBQ2YsSUFBSTdVLE1BQUEsR0FBU3FULElBQUEsQ0FBS3dCLFFBQUEsQ0FBU1gsR0FBRztVQUM5QixJQUFJbFUsTUFBQSxLQUFXLE9BQ1g7VUFDSnFULElBQUEsQ0FBS2hSLEtBQUEsR0FBUXJDLE1BQUEsSUFBVTtRQUMzQjtRQUNBLE9BQU9xVCxJQUFBO01BQ1g7SUFDSjtFQUNKO0VBQUE7QUFBQTtBQUFBO0VBSUF5QixXQUFXcEMsSUFBQSxFQUFNN1EsS0FBQSxFQUFPc1MsT0FBQSxFQUFTOU0sS0FBQSxFQUFPO0lBQ3BDLFNBQVM1SyxDQUFBLEdBQUk0SyxLQUFBLEdBQVEsS0FBS3VNLE1BQUEsQ0FBTzdHLE9BQUEsQ0FBUTFGLEtBQUssSUFBSSxJQUFJLEdBQUc1SyxDQUFBLEdBQUksS0FBS21YLE1BQUEsQ0FBTzdWLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUNsRixJQUFJNFcsSUFBQSxHQUFPLEtBQUtPLE1BQUEsQ0FBT25YLENBQUM7UUFBRytXLEtBQUEsR0FBUUgsSUFBQSxDQUFLRyxLQUFBO01BQ3hDLElBQUlBLEtBQUEsQ0FBTXpHLE9BQUEsQ0FBUTJGLElBQUksS0FBSyxLQUN2QlcsSUFBQSxDQUFLYyxPQUFBLElBQVcsQ0FBQ0EsT0FBQSxDQUFRUyxjQUFBLENBQWV2QixJQUFBLENBQUtjLE9BQU87TUFBQTtNQUFBO01BQUE7TUFJcERYLEtBQUEsQ0FBTXpWLE1BQUEsR0FBUzJVLElBQUEsQ0FBSzNVLE1BQUEsS0FDZnlWLEtBQUEsQ0FBTXVCLFVBQUEsQ0FBV3JDLElBQUEsQ0FBSzNVLE1BQU0sS0FBSyxNQUFNeVYsS0FBQSxDQUFNdFUsS0FBQSxDQUFNd1QsSUFBQSxDQUFLM1UsTUFBQSxHQUFTLENBQUMsS0FBSzhELEtBQUEsR0FDNUU7TUFDSixJQUFJd1IsSUFBQSxDQUFLd0IsUUFBQSxFQUFVO1FBQ2YsSUFBSTdVLE1BQUEsR0FBU3FULElBQUEsQ0FBS3dCLFFBQUEsQ0FBU2hULEtBQUs7UUFDaEMsSUFBSTdCLE1BQUEsS0FBVyxPQUNYO1FBQ0pxVCxJQUFBLENBQUtoUixLQUFBLEdBQVFyQyxNQUFBLElBQVU7TUFDM0I7TUFDQSxPQUFPcVQsSUFBQTtJQUNYO0VBQ0o7RUFBQTtBQUFBO0FBQUE7RUFJQSxPQUFPMkIsWUFBWXBULE1BQUEsRUFBUTtJQUN2QixJQUFJNUIsTUFBQSxHQUFTLEVBQUM7SUFDZCxTQUFTNkUsT0FBT3dPLElBQUEsRUFBTTtNQUNsQixJQUFJNEIsUUFBQSxHQUFXNUIsSUFBQSxDQUFLNEIsUUFBQSxJQUFZLE9BQU8sS0FBSzVCLElBQUEsQ0FBSzRCLFFBQUE7UUFBVXhZLENBQUEsR0FBSTtNQUMvRCxPQUFPQSxDQUFBLEdBQUl1RCxNQUFBLENBQU9qQyxNQUFBLEVBQVF0QixDQUFBLElBQUs7UUFDM0IsSUFBSW1MLElBQUEsR0FBTzVILE1BQUEsQ0FBT3ZELENBQUM7VUFBR3lZLFlBQUEsR0FBZXROLElBQUEsQ0FBS3FOLFFBQUEsSUFBWSxPQUFPLEtBQUtyTixJQUFBLENBQUtxTixRQUFBO1FBQ3ZFLElBQUlDLFlBQUEsR0FBZUQsUUFBQSxFQUNmO01BQ1I7TUFDQWpWLE1BQUEsQ0FBT21WLE1BQUEsQ0FBTzFZLENBQUEsRUFBRyxHQUFHNFcsSUFBSTtJQUM1QjtJQUNBLFNBQVNuUSxJQUFBLElBQVF0QixNQUFBLENBQU95QixLQUFBLEVBQU87TUFDM0IsSUFBSXFRLEtBQUEsR0FBUTlSLE1BQUEsQ0FBT3lCLEtBQUEsQ0FBTUgsSUFBSSxFQUFFN0QsSUFBQSxDQUFLK1YsUUFBQTtNQUNwQyxJQUFJMUIsS0FBQSxFQUNBQSxLQUFBLENBQU01UyxPQUFBLENBQVF1UyxJQUFBLElBQVE7UUFDbEJ4TyxNQUFBLENBQU93TyxJQUFBLEdBQU8xTyxJQUFBLENBQUswTyxJQUFJLENBQUM7UUFDeEIsSUFBSSxFQUFFQSxJQUFBLENBQUsvUCxJQUFBLElBQVErUCxJQUFBLENBQUtnQyxNQUFBLElBQVVoQyxJQUFBLENBQUtpQyxTQUFBLEdBQ25DakMsSUFBQSxDQUFLL1AsSUFBQSxHQUFPSixJQUFBO01BQ3BCLENBQUM7SUFDVDtJQUNBLFNBQVNBLElBQUEsSUFBUXRCLE1BQUEsQ0FBT1EsS0FBQSxFQUFPO01BQzNCLElBQUlzUixLQUFBLEdBQVE5UixNQUFBLENBQU9RLEtBQUEsQ0FBTWMsSUFBSSxFQUFFN0QsSUFBQSxDQUFLK1YsUUFBQTtNQUNwQyxJQUFJMUIsS0FBQSxFQUNBQSxLQUFBLENBQU01UyxPQUFBLENBQVF1UyxJQUFBLElBQVE7UUFDbEJ4TyxNQUFBLENBQU93TyxJQUFBLEdBQU8xTyxJQUFBLENBQUswTyxJQUFJLENBQUM7UUFDeEIsSUFBSSxFQUFFQSxJQUFBLENBQUtyVSxJQUFBLElBQVFxVSxJQUFBLENBQUtnQyxNQUFBLElBQVVoQyxJQUFBLENBQUsvUCxJQUFBLEdBQ25DK1AsSUFBQSxDQUFLclUsSUFBQSxHQUFPa0UsSUFBQTtNQUNwQixDQUFDO0lBQ1Q7SUFDQSxPQUFPbEQsTUFBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1BLE9BQU91VixXQUFXM1QsTUFBQSxFQUFRO0lBQ3RCLE9BQU9BLE1BQUEsQ0FBTzRRLE1BQUEsQ0FBT2dELFNBQUEsS0FDaEI1VCxNQUFBLENBQU80USxNQUFBLENBQU9nRCxTQUFBLEdBQVksSUFBSS9CLFVBQUEsQ0FBVTdSLE1BQUEsRUFBUTZSLFVBQUEsQ0FBVXVCLFdBQUEsQ0FBWXBULE1BQU0sQ0FBQztFQUN0RjtBQUNKO0FBQ0EsSUFBTTZULFNBQUEsR0FBWTtFQUNkQyxPQUFBLEVBQVM7RUFBTUMsT0FBQSxFQUFTO0VBQU1DLEtBQUEsRUFBTztFQUFNQyxVQUFBLEVBQVk7RUFBTUMsTUFBQSxFQUFRO0VBQ3JFQyxFQUFBLEVBQUk7RUFBTUMsR0FBQSxFQUFLO0VBQU1DLEVBQUEsRUFBSTtFQUFNQyxRQUFBLEVBQVU7RUFBTUMsVUFBQSxFQUFZO0VBQU1DLE1BQUEsRUFBUTtFQUN6RUMsTUFBQSxFQUFRO0VBQU1DLElBQUEsRUFBTTtFQUFNQyxFQUFBLEVBQUk7RUFBTUMsRUFBQSxFQUFJO0VBQU1DLEVBQUEsRUFBSTtFQUFNQyxFQUFBLEVBQUk7RUFBTUMsRUFBQSxFQUFJO0VBQ3RFQyxFQUFBLEVBQUk7RUFBTUMsTUFBQSxFQUFRO0VBQU1DLE1BQUEsRUFBUTtFQUFNQyxFQUFBLEVBQUk7RUFBTUMsRUFBQSxFQUFJO0VBQU1DLFFBQUEsRUFBVTtFQUFNQyxFQUFBLEVBQUk7RUFDOUVDLE1BQUEsRUFBUTtFQUFNcFcsQ0FBQSxFQUFHO0VBQU1xVyxHQUFBLEVBQUs7RUFBTUMsT0FBQSxFQUFTO0VBQU1DLEtBQUEsRUFBTztFQUFNQyxLQUFBLEVBQU87RUFBTUMsRUFBQSxFQUFJO0FBQ25GO0FBQ0EsSUFBTUMsVUFBQSxHQUFhO0VBQ2ZDLElBQUEsRUFBTTtFQUFNVCxRQUFBLEVBQVU7RUFBTVUsTUFBQSxFQUFRO0VBQU1DLE1BQUEsRUFBUTtFQUFNcEUsS0FBQSxFQUFPO0VBQU1xRSxLQUFBLEVBQU87QUFDaEY7QUFDQSxJQUFNQyxRQUFBLEdBQVc7RUFBRVosRUFBQSxFQUFJO0VBQU1NLEVBQUEsRUFBSTtBQUFLO0FBRXRDLElBQU1PLGVBQUEsR0FBa0I7RUFBR0Msb0JBQUEsR0FBdUI7RUFBR0MsYUFBQSxHQUFnQjtBQUNyRSxTQUFTQyxhQUFhOVksSUFBQSxFQUFNK1ksa0JBQUEsRUFBb0I5TSxJQUFBLEVBQU07RUFDbEQsSUFBSThNLGtCQUFBLElBQXNCLE1BQ3RCLFFBQVFBLGtCQUFBLEdBQXFCSixlQUFBLEdBQWtCLE1BQzFDSSxrQkFBQSxLQUF1QixTQUFTSCxvQkFBQSxHQUF1QjtFQUNoRSxPQUFPNVksSUFBQSxJQUFRQSxJQUFBLENBQUtpUyxVQUFBLElBQWMsUUFBUTBHLGVBQUEsR0FBa0JDLG9CQUFBLEdBQXVCM00sSUFBQSxHQUFPLENBQUM0TSxhQUFBO0FBQy9GO0FBQ0EsSUFBTUcsV0FBQSxHQUFOLE1BQWtCO0VBQ2RuYSxZQUFZbUIsSUFBQSxFQUFNaUQsS0FBQSxFQUFPZ0IsS0FBQSxFQUFPZ1YsS0FBQSxFQUFPcE8sS0FBQSxFQUFPZ0ksT0FBQSxFQUFTO0lBQ25ELEtBQUs3UyxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLaUQsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS2dCLEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtnVixLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLcEcsT0FBQSxHQUFVQSxPQUFBO0lBQ2YsS0FBSzlVLE9BQUEsR0FBVSxFQUFDO0lBRWhCLEtBQUttYixXQUFBLEdBQWNoZCxJQUFBLENBQUtxSSxJQUFBO0lBQ3hCLEtBQUtzRyxLQUFBLEdBQVFBLEtBQUEsS0FBVWdJLE9BQUEsR0FBVWdHLGFBQUEsR0FBZ0IsT0FBTzdZLElBQUEsQ0FBSzhLLFlBQUE7RUFDakU7RUFDQThDLGFBQWFoTyxJQUFBLEVBQU07SUFDZixJQUFJLENBQUMsS0FBS2lMLEtBQUEsRUFBTztNQUNiLElBQUksQ0FBQyxLQUFLN0ssSUFBQSxFQUNOLE9BQU8sRUFBQztNQUNaLElBQUltWixJQUFBLEdBQU8sS0FBS25aLElBQUEsQ0FBSzhLLFlBQUEsQ0FBYXFDLFVBQUEsQ0FBV2xSLFFBQUEsQ0FBUzhDLElBQUEsQ0FBS2EsSUFBSSxDQUFDO01BQ2hFLElBQUl1WixJQUFBLEVBQU07UUFDTixLQUFLdE8sS0FBQSxHQUFRLEtBQUs3SyxJQUFBLENBQUs4SyxZQUFBLENBQWFDLGFBQUEsQ0FBY29PLElBQUk7TUFDMUQsT0FDSztRQUNELElBQUk5WixLQUFBLEdBQVEsS0FBS1csSUFBQSxDQUFLOEssWUFBQTtVQUFjc08sSUFBQTtRQUNwQyxJQUFJQSxJQUFBLEdBQU8vWixLQUFBLENBQU11TyxZQUFBLENBQWFoTyxJQUFBLENBQUtJLElBQUksR0FBRztVQUN0QyxLQUFLNkssS0FBQSxHQUFReEwsS0FBQTtVQUNiLE9BQU8rWixJQUFBO1FBQ1gsT0FDSztVQUNELE9BQU87UUFDWDtNQUNKO0lBQ0o7SUFDQSxPQUFPLEtBQUt2TyxLQUFBLENBQU0rQyxZQUFBLENBQWFoTyxJQUFBLENBQUtJLElBQUk7RUFDNUM7RUFDQWtWLE9BQU90USxPQUFBLEVBQVM7SUFDWixJQUFJLEVBQUUsS0FBS2lPLE9BQUEsR0FBVThGLGVBQUEsR0FBa0I7TUFDbkMsSUFBSXJZLElBQUEsR0FBTyxLQUFLdkMsT0FBQSxDQUFRLEtBQUtBLE9BQUEsQ0FBUVksTUFBQSxHQUFTLENBQUM7UUFBRzhNLENBQUE7TUFDbEQsSUFBSW5MLElBQUEsSUFBUUEsSUFBQSxDQUFLMUMsTUFBQSxLQUFXNk4sQ0FBQSxHQUFJLG9CQUFvQmlKLElBQUEsQ0FBS3BVLElBQUEsQ0FBS3pDLElBQUksSUFBSTtRQUNsRSxJQUFJQSxJQUFBLEdBQU95QyxJQUFBO1FBQ1gsSUFBSUEsSUFBQSxDQUFLekMsSUFBQSxDQUFLYyxNQUFBLElBQVU4TSxDQUFBLENBQUUsQ0FBQyxFQUFFOU0sTUFBQSxFQUN6QixLQUFLWixPQUFBLENBQVE0USxHQUFBLENBQUksT0FFakIsS0FBSzVRLE9BQUEsQ0FBUSxLQUFLQSxPQUFBLENBQVFZLE1BQUEsR0FBUyxDQUFDLElBQUlkLElBQUEsQ0FBSzRDLFFBQUEsQ0FBUzVDLElBQUEsQ0FBS0EsSUFBQSxDQUFLaUMsS0FBQSxDQUFNLEdBQUdqQyxJQUFBLENBQUtBLElBQUEsQ0FBS2MsTUFBQSxHQUFTOE0sQ0FBQSxDQUFFLENBQUMsRUFBRTlNLE1BQU0sQ0FBQztNQUNoSDtJQUNKO0lBQ0EsSUFBSVosT0FBQSxHQUFVOUIsUUFBQSxDQUFTOEMsSUFBQSxDQUFLLEtBQUtoQixPQUFPO0lBQ3hDLElBQUksQ0FBQzZHLE9BQUEsSUFBVyxLQUFLaUcsS0FBQSxFQUNqQjlNLE9BQUEsR0FBVUEsT0FBQSxDQUFRcUMsTUFBQSxDQUFPLEtBQUt5SyxLQUFBLENBQU1zQyxVQUFBLENBQVdsUixRQUFBLENBQVM2RSxLQUFBLEVBQU8sSUFBSSxDQUFDO0lBQ3hFLE9BQU8sS0FBS2QsSUFBQSxHQUFPLEtBQUtBLElBQUEsQ0FBS21FLE1BQUEsQ0FBTyxLQUFLbEIsS0FBQSxFQUFPbEYsT0FBQSxFQUFTLEtBQUtrRyxLQUFLLElBQUlsRyxPQUFBO0VBQzNFO0VBQ0FzYixjQUFjelosSUFBQSxFQUFNO0lBQ2hCLElBQUksS0FBS0ksSUFBQSxFQUNMLE9BQU8sS0FBS0EsSUFBQSxDQUFLNkksYUFBQTtJQUNyQixJQUFJLEtBQUs5SyxPQUFBLENBQVFZLE1BQUEsRUFDYixPQUFPLEtBQUtaLE9BQUEsQ0FBUSxDQUFDLEVBQUV3SyxRQUFBO0lBQzNCLE9BQU8zSSxJQUFBLENBQUswWixVQUFBLElBQWMsQ0FBQ2pELFNBQUEsQ0FBVXZELGNBQUEsQ0FBZWxULElBQUEsQ0FBSzBaLFVBQUEsQ0FBV0MsUUFBQSxDQUFTQyxXQUFBLENBQVksQ0FBQztFQUM5RjtBQUNKO0FBQ0EsSUFBTXhFLFlBQUEsR0FBTixNQUFtQjtFQUNmblcsWUFFQTRhLE1BQUEsRUFFQTVHLE9BQUEsRUFBUzZHLE1BQUEsRUFBUTtJQUNiLEtBQUtELE1BQUEsR0FBU0EsTUFBQTtJQUNkLEtBQUs1RyxPQUFBLEdBQVVBLE9BQUE7SUFDZixLQUFLNkcsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0MsSUFBQSxHQUFPO0lBQ1osS0FBS0MsZUFBQSxHQUFrQjtJQUN2QixJQUFJakgsT0FBQSxHQUFVRSxPQUFBLENBQVFGLE9BQUE7TUFBU2tILFVBQUE7SUFDL0IsSUFBSUMsVUFBQSxHQUFhaEIsWUFBQSxDQUFhLE1BQU1qRyxPQUFBLENBQVFrRyxrQkFBQSxFQUFvQixDQUFDLEtBQUtXLE1BQUEsR0FBU2IsYUFBQSxHQUFnQjtJQUMvRixJQUFJbEcsT0FBQSxFQUNBa0gsVUFBQSxHQUFhLElBQUliLFdBQUEsQ0FBWXJHLE9BQUEsQ0FBUTNTLElBQUEsRUFBTTJTLE9BQUEsQ0FBUTFQLEtBQUEsRUFBTy9HLElBQUEsQ0FBS3FJLElBQUEsRUFBTSxNQUFNc08sT0FBQSxDQUFRa0gsUUFBQSxJQUFZcEgsT0FBQSxDQUFRM1MsSUFBQSxDQUFLOEssWUFBQSxFQUFjZ1AsVUFBVSxXQUMvSEosTUFBQSxFQUNMRyxVQUFBLEdBQWEsSUFBSWIsV0FBQSxDQUFZLE1BQU0sTUFBTTljLElBQUEsQ0FBS3FJLElBQUEsRUFBTSxNQUFNLE1BQU11VixVQUFVLE9BRTFFRCxVQUFBLEdBQWEsSUFBSWIsV0FBQSxDQUFZUyxNQUFBLENBQU9qWCxNQUFBLENBQU9vUixXQUFBLEVBQWEsTUFBTTFYLElBQUEsQ0FBS3FJLElBQUEsRUFBTSxNQUFNLE1BQU11VixVQUFVO0lBQ25HLEtBQUs5VyxLQUFBLEdBQVEsQ0FBQzZXLFVBQVU7SUFDeEIsS0FBS0csSUFBQSxHQUFPbkgsT0FBQSxDQUFRb0gsYUFBQTtJQUNwQixLQUFLQyxVQUFBLEdBQWE7RUFDdEI7RUFDQSxJQUFJQyxJQUFBLEVBQU07SUFDTixPQUFPLEtBQUtuWCxLQUFBLENBQU0sS0FBSzJXLElBQUk7RUFDL0I7RUFBQTtFQUFBO0VBQUE7RUFJQVMsT0FBT3RGLEdBQUEsRUFBSzdRLEtBQUEsRUFBTztJQUNmLElBQUk2USxHQUFBLENBQUluSixRQUFBLElBQVksR0FDaEIsS0FBSzBPLFdBQUEsQ0FBWXZGLEdBQUEsRUFBSzdRLEtBQUssV0FDdEI2USxHQUFBLENBQUluSixRQUFBLElBQVksR0FDckIsS0FBSzJPLFVBQUEsQ0FBV3hGLEdBQUEsRUFBSzdRLEtBQUs7RUFDbEM7RUFDQW9XLFlBQVl2RixHQUFBLEVBQUs3USxLQUFBLEVBQU87SUFDcEIsSUFBSXhCLEtBQUEsR0FBUXFTLEdBQUEsQ0FBSXlGLFNBQUE7SUFDaEIsSUFBSUosR0FBQSxHQUFNLEtBQUtBLEdBQUE7TUFBS0ssVUFBQSxHQUFjTCxHQUFBLENBQUl0SCxPQUFBLEdBQVUrRixvQkFBQSxHQUF3QixTQUNsRSxLQUFLZ0IsZUFBQSxLQUFvQk8sR0FBQSxDQUFJdEgsT0FBQSxHQUFVOEYsZUFBQSxJQUFtQjtJQUNoRSxJQUFJNkIsVUFBQSxLQUFlLFVBQ2ZMLEdBQUEsQ0FBSWQsYUFBQSxDQUFjdkUsR0FBRyxLQUNyQixtQkFBbUJ6RixJQUFBLENBQUs1TSxLQUFLLEdBQUc7TUFDaEMsSUFBSSxDQUFDK1gsVUFBQSxFQUFZO1FBQ2IvWCxLQUFBLEdBQVFBLEtBQUEsQ0FBTWtELE9BQUEsQ0FBUSxxQkFBcUIsR0FBRztRQUk5QyxJQUFJLG1CQUFtQjBKLElBQUEsQ0FBSzVNLEtBQUssS0FBSyxLQUFLa1gsSUFBQSxJQUFRLEtBQUszVyxLQUFBLENBQU1yRSxNQUFBLEdBQVMsR0FBRztVQUN0RSxJQUFJMEksVUFBQSxHQUFhOFMsR0FBQSxDQUFJcGMsT0FBQSxDQUFRb2MsR0FBQSxDQUFJcGMsT0FBQSxDQUFRWSxNQUFBLEdBQVMsQ0FBQztVQUNuRCxJQUFJOGIsYUFBQSxHQUFnQjNGLEdBQUEsQ0FBSTRGLGVBQUE7VUFDeEIsSUFBSSxDQUFDclQsVUFBQSxJQUNBb1QsYUFBQSxJQUFpQkEsYUFBQSxDQUFjbEIsUUFBQSxJQUFZLFFBQzNDbFMsVUFBQSxDQUFXekosTUFBQSxJQUFVLG1CQUFtQnlSLElBQUEsQ0FBS2hJLFVBQUEsQ0FBV3hKLElBQUksR0FDN0Q0RSxLQUFBLEdBQVFBLEtBQUEsQ0FBTTNDLEtBQUEsQ0FBTSxDQUFDO1FBQzdCO01BQ0osV0FDUzBhLFVBQUEsS0FBZSxRQUFRO1FBQzVCL1gsS0FBQSxHQUFRQSxLQUFBLENBQU1rRCxPQUFBLENBQVEsYUFBYSxHQUFHO01BQzFDLE9BQ0s7UUFDRGxELEtBQUEsR0FBUUEsS0FBQSxDQUFNa0QsT0FBQSxDQUFRLFVBQVUsSUFBSTtNQUN4QztNQUNBLElBQUlsRCxLQUFBLEVBQ0EsS0FBS2tZLFVBQUEsQ0FBVyxLQUFLbEIsTUFBQSxDQUFPalgsTUFBQSxDQUFPM0UsSUFBQSxDQUFLNEUsS0FBSyxHQUFHd0IsS0FBQSxFQUFPLENBQUMsS0FBS29MLElBQUEsQ0FBSzVNLEtBQUssQ0FBQztNQUM1RSxLQUFLbVksVUFBQSxDQUFXOUYsR0FBRztJQUN2QixPQUNLO01BQ0QsS0FBSytGLFVBQUEsQ0FBVy9GLEdBQUc7SUFDdkI7RUFDSjtFQUFBO0VBQUE7RUFHQXdGLFdBQVd4RixHQUFBLEVBQUs3USxLQUFBLEVBQU82VyxVQUFBLEVBQVk7SUFDL0IsSUFBSUMsT0FBQSxHQUFVLEtBQUtuQixlQUFBO01BQWlCTyxHQUFBLEdBQU0sS0FBS0EsR0FBQTtJQUMvQyxJQUFJckYsR0FBQSxDQUFJa0csT0FBQSxJQUFXLFNBQVMsTUFBTTNMLElBQUEsQ0FBS3lGLEdBQUEsQ0FBSVYsS0FBQSxJQUFTVSxHQUFBLENBQUlWLEtBQUEsQ0FBTTZHLFVBQVUsR0FDcEUsS0FBS3JCLGVBQUEsR0FBa0I7SUFDM0IsSUFBSTlWLElBQUEsR0FBT2dSLEdBQUEsQ0FBSXlFLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO01BQUcwQixNQUFBO0lBQ3ZDLElBQUl4QyxRQUFBLENBQVM1RixjQUFBLENBQWVoUCxJQUFJLEtBQUssS0FBSzJWLE1BQUEsQ0FBTzlFLGNBQUEsRUFDN0N3RyxhQUFBLENBQWNyRyxHQUFHO0lBQ3JCLElBQUliLElBQUEsR0FBUSxLQUFLcEIsT0FBQSxDQUFRdUksWUFBQSxJQUFnQixLQUFLdkksT0FBQSxDQUFRdUksWUFBQSxDQUFhdEcsR0FBRyxNQUNqRW9HLE1BQUEsR0FBUyxLQUFLekIsTUFBQSxDQUFPckUsUUFBQSxDQUFTTixHQUFBLEVBQUssTUFBTWdHLFVBQVU7SUFDeER4TSxHQUFBLEVBQUssSUFBSTJGLElBQUEsR0FBT0EsSUFBQSxDQUFLZ0MsTUFBQSxHQUFTb0MsVUFBQSxDQUFXdkYsY0FBQSxDQUFlaFAsSUFBSSxHQUFHO01BQzNELEtBQUsrVyxVQUFBLENBQVcvRixHQUFHO01BQ25CLEtBQUt1RyxjQUFBLENBQWV2RyxHQUFBLEVBQUs3USxLQUFLO0lBQ2xDLFdBQ1MsQ0FBQ2dRLElBQUEsSUFBUUEsSUFBQSxDQUFLcUgsSUFBQSxJQUFRckgsSUFBQSxDQUFLc0gsV0FBQSxFQUFhO01BQzdDLElBQUl0SCxJQUFBLElBQVFBLElBQUEsQ0FBS3NILFdBQUEsRUFDYixLQUFLNUIsSUFBQSxHQUFPbGIsSUFBQSxDQUFLYSxHQUFBLENBQUksR0FBRyxLQUFLcWEsSUFBQSxHQUFPLENBQUMsV0FDaEMxRixJQUFBLElBQVFBLElBQUEsQ0FBS3FILElBQUEsQ0FBSzNQLFFBQUEsRUFDdkJtSixHQUFBLEdBQU1iLElBQUEsQ0FBS3FILElBQUE7TUFDZixJQUFJRSxJQUFBO1FBQU1DLGFBQUEsR0FBZ0IsS0FBS3ZCLFVBQUE7TUFDL0IsSUFBSTdELFNBQUEsQ0FBVXZELGNBQUEsQ0FBZWhQLElBQUksR0FBRztRQUNoQyxJQUFJcVcsR0FBQSxDQUFJcGMsT0FBQSxDQUFRWSxNQUFBLElBQVV3YixHQUFBLENBQUlwYyxPQUFBLENBQVEsQ0FBQyxFQUFFd0ssUUFBQSxJQUFZLEtBQUtvUixJQUFBLEVBQU07VUFDNUQsS0FBS0EsSUFBQTtVQUNMUSxHQUFBLEdBQU0sS0FBS0EsR0FBQTtRQUNmO1FBQ0FxQixJQUFBLEdBQU87UUFDUCxJQUFJLENBQUNyQixHQUFBLENBQUluYSxJQUFBLEVBQ0wsS0FBS2thLFVBQUEsR0FBYTtNQUMxQixXQUNTLENBQUNwRixHQUFBLENBQUl0VSxVQUFBLEVBQVk7UUFDdEIsS0FBS2tiLFlBQUEsQ0FBYTVHLEdBQUEsRUFBSzdRLEtBQUs7UUFDNUIsTUFBTXFLLEdBQUE7TUFDVjtNQUNBLElBQUlxTixVQUFBLEdBQWExSCxJQUFBLElBQVFBLElBQUEsQ0FBS3FILElBQUEsR0FBT3JYLEtBQUEsR0FBUSxLQUFLMlgsVUFBQSxDQUFXOUcsR0FBQSxFQUFLN1EsS0FBSztNQUN2RSxJQUFJMFgsVUFBQSxFQUNBLEtBQUsxRyxNQUFBLENBQU9ILEdBQUEsRUFBSzZHLFVBQVU7TUFDL0IsSUFBSUgsSUFBQSxFQUNBLEtBQUtBLElBQUEsQ0FBS3JCLEdBQUc7TUFDakIsS0FBS0QsVUFBQSxHQUFhdUIsYUFBQTtJQUN0QixPQUNLO01BQ0QsSUFBSUUsVUFBQSxHQUFhLEtBQUtDLFVBQUEsQ0FBVzlHLEdBQUEsRUFBSzdRLEtBQUs7TUFDM0MsSUFBSTBYLFVBQUEsRUFDQSxLQUFLRSxnQkFBQSxDQUFpQi9HLEdBQUEsRUFBS2IsSUFBQSxFQUFNMEgsVUFBQSxFQUFZMUgsSUFBQSxDQUFLNkgsU0FBQSxLQUFjLFFBQVFaLE1BQUEsR0FBUyxNQUFTO0lBQ2xHO0lBQ0EsS0FBS3RCLGVBQUEsR0FBa0JtQixPQUFBO0VBQzNCO0VBQUE7RUFFQVcsYUFBYTVHLEdBQUEsRUFBSzdRLEtBQUEsRUFBTztJQUNyQixJQUFJNlEsR0FBQSxDQUFJeUUsUUFBQSxJQUFZLFFBQVEsS0FBS1ksR0FBQSxDQUFJbmEsSUFBQSxJQUFRLEtBQUttYSxHQUFBLENBQUluYSxJQUFBLENBQUs2SSxhQUFBLEVBQ3ZELEtBQUt3UixXQUFBLENBQVl2RixHQUFBLENBQUlpSCxhQUFBLENBQWNDLGNBQUEsQ0FBZSxJQUFJLEdBQUcvWCxLQUFLO0VBQ3RFO0VBQUE7RUFFQW9YLGVBQWV2RyxHQUFBLEVBQUs3USxLQUFBLEVBQU87SUFFdkIsSUFBSTZRLEdBQUEsQ0FBSXlFLFFBQUEsSUFBWSxTQUFTLENBQUMsS0FBS1ksR0FBQSxDQUFJbmEsSUFBQSxJQUFRLENBQUMsS0FBS21hLEdBQUEsQ0FBSW5hLElBQUEsQ0FBSzZJLGFBQUEsR0FDMUQsS0FBS29ULFNBQUEsQ0FBVSxLQUFLeEMsTUFBQSxDQUFPalgsTUFBQSxDQUFPM0UsSUFBQSxDQUFLLEdBQUcsR0FBR29HLEtBQUEsRUFBTyxJQUFJO0VBQ2hFO0VBQUE7RUFBQTtFQUFBO0VBSUEyWCxXQUFXOUcsR0FBQSxFQUFLN1EsS0FBQSxFQUFPO0lBQ25CLElBQUl1USxNQUFBLEdBQVNNLEdBQUEsQ0FBSVYsS0FBQTtJQU1qQixJQUFJSSxNQUFBLElBQVVBLE1BQUEsQ0FBTzdWLE1BQUEsRUFDakIsU0FBU3RCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS29jLE1BQUEsQ0FBT2hGLGFBQUEsQ0FBYzlWLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUN2RCxJQUFJeUcsSUFBQSxHQUFPLEtBQUsyVixNQUFBLENBQU9oRixhQUFBLENBQWNwWCxDQUFDO1FBQUdvRixLQUFBLEdBQVErUixNQUFBLENBQU8wSCxnQkFBQSxDQUFpQnBZLElBQUk7TUFDN0UsSUFBSXJCLEtBQUEsRUFDQSxTQUFTd0YsS0FBQSxHQUFRLFVBQWE7UUFDMUIsSUFBSWdNLElBQUEsR0FBTyxLQUFLd0YsTUFBQSxDQUFPL0QsVUFBQSxDQUFXNVIsSUFBQSxFQUFNckIsS0FBQSxFQUFPLE1BQU13RixLQUFLO1FBQzFELElBQUksQ0FBQ2dNLElBQUEsRUFDRDtRQUNKLElBQUlBLElBQUEsQ0FBS2dDLE1BQUEsRUFDTCxPQUFPO1FBQ1gsSUFBSWhDLElBQUEsQ0FBS2lDLFNBQUEsRUFDTGpTLEtBQUEsR0FBUUEsS0FBQSxDQUFNa1ksTUFBQSxDQUFPMVEsQ0FBQSxJQUFLLENBQUN3SSxJQUFBLENBQUtpQyxTQUFBLENBQVV6SyxDQUFDLENBQUMsT0FFNUN4SCxLQUFBLEdBQVFBLEtBQUEsQ0FBTTdDLE1BQUEsQ0FBTyxLQUFLcVksTUFBQSxDQUFPalgsTUFBQSxDQUFPeUIsS0FBQSxDQUFNZ1EsSUFBQSxDQUFLL1AsSUFBSSxFQUFFQyxNQUFBLENBQU84UCxJQUFBLENBQUtoUixLQUFLLENBQUM7UUFDL0UsSUFBSWdSLElBQUEsQ0FBSzZILFNBQUEsS0FBYyxPQUNuQjdULEtBQUEsR0FBUWdNLElBQUEsTUFFUjtNQUNSO0lBQ1I7SUFDSixPQUFPaFEsS0FBQTtFQUNYO0VBQUE7RUFBQTtFQUFBO0VBSUE0WCxpQkFBaUIvRyxHQUFBLEVBQUtiLElBQUEsRUFBTWhRLEtBQUEsRUFBT21ZLGFBQUEsRUFBZTtJQUM5QyxJQUFJWixJQUFBLEVBQU03UCxRQUFBO0lBQ1YsSUFBSXNJLElBQUEsQ0FBS3JVLElBQUEsRUFBTTtNQUNYK0wsUUFBQSxHQUFXLEtBQUs4TixNQUFBLENBQU9qWCxNQUFBLENBQU9RLEtBQUEsQ0FBTWlSLElBQUEsQ0FBS3JVLElBQUk7TUFDN0MsSUFBSSxDQUFDK0wsUUFBQSxDQUFTNUwsTUFBQSxFQUFRO1FBQ2xCLElBQUk5QixLQUFBLEdBQVEsS0FBS29lLEtBQUEsQ0FBTTFRLFFBQUEsRUFBVXNJLElBQUEsQ0FBS2hSLEtBQUEsSUFBUyxNQUFNZ0IsS0FBQSxFQUFPZ1EsSUFBQSxDQUFLOEUsa0JBQWtCO1FBQ25GLElBQUk5YSxLQUFBLEVBQU87VUFDUHVkLElBQUEsR0FBTztVQUNQdlgsS0FBQSxHQUFRaEcsS0FBQTtRQUNaO01BQ0osV0FDUyxDQUFDLEtBQUswYyxVQUFBLENBQVdoUCxRQUFBLENBQVN4SCxNQUFBLENBQU84UCxJQUFBLENBQUtoUixLQUFLLEdBQUdnQixLQUFBLEVBQU82USxHQUFBLENBQUl5RSxRQUFBLElBQVksSUFBSSxHQUFHO1FBQ2pGLEtBQUttQyxZQUFBLENBQWE1RyxHQUFBLEVBQUs3USxLQUFLO01BQ2hDO0lBQ0osT0FDSztNQUNELElBQUl1TyxRQUFBLEdBQVcsS0FBS2lILE1BQUEsQ0FBT2pYLE1BQUEsQ0FBT3lCLEtBQUEsQ0FBTWdRLElBQUEsQ0FBSy9QLElBQUk7TUFDakRELEtBQUEsR0FBUUEsS0FBQSxDQUFNN0MsTUFBQSxDQUFPb1IsUUFBQSxDQUFTck8sTUFBQSxDQUFPOFAsSUFBQSxDQUFLaFIsS0FBSyxDQUFDO0lBQ3BEO0lBQ0EsSUFBSXFaLE9BQUEsR0FBVSxLQUFLbkMsR0FBQTtJQUNuQixJQUFJeE8sUUFBQSxJQUFZQSxRQUFBLENBQVM1TCxNQUFBLEVBQVE7TUFDN0IsS0FBSzhhLFVBQUEsQ0FBVy9GLEdBQUc7SUFDdkIsV0FDU3NILGFBQUEsRUFBZTtNQUNwQixLQUFLOUIsVUFBQSxDQUFXeEYsR0FBQSxFQUFLN1EsS0FBQSxFQUFPbVksYUFBYTtJQUM3QyxXQUNTbkksSUFBQSxDQUFLc0ksVUFBQSxFQUFZO01BQ3RCLEtBQUsxQixVQUFBLENBQVcvRixHQUFHO01BQ25CYixJQUFBLENBQUtzSSxVQUFBLENBQVd6SCxHQUFBLEVBQUssS0FBSzJFLE1BQUEsQ0FBT2pYLE1BQU0sRUFBRWQsT0FBQSxDQUFROUIsSUFBQSxJQUFRLEtBQUsrYSxVQUFBLENBQVcvYSxJQUFBLEVBQU1xRSxLQUFBLEVBQU8sS0FBSyxDQUFDO0lBQ2hHLE9BQ0s7TUFDRCxJQUFJdVksVUFBQSxHQUFhMUgsR0FBQTtNQUNqQixJQUFJLE9BQU9iLElBQUEsQ0FBS3dJLGNBQUEsSUFBa0IsVUFDOUJELFVBQUEsR0FBYTFILEdBQUEsQ0FBSTRILGFBQUEsQ0FBY3pJLElBQUEsQ0FBS3dJLGNBQWMsV0FDN0MsT0FBT3hJLElBQUEsQ0FBS3dJLGNBQUEsSUFBa0IsWUFDbkNELFVBQUEsR0FBYXZJLElBQUEsQ0FBS3dJLGNBQUEsQ0FBZTNILEdBQUcsV0FDL0JiLElBQUEsQ0FBS3dJLGNBQUEsRUFDVkQsVUFBQSxHQUFhdkksSUFBQSxDQUFLd0ksY0FBQTtNQUN0QixLQUFLRSxVQUFBLENBQVc3SCxHQUFBLEVBQUswSCxVQUFBLEVBQVksSUFBSTtNQUNyQyxLQUFLdkgsTUFBQSxDQUFPdUgsVUFBQSxFQUFZdlksS0FBSztNQUM3QixLQUFLMFksVUFBQSxDQUFXN0gsR0FBQSxFQUFLMEgsVUFBQSxFQUFZLEtBQUs7SUFDMUM7SUFDQSxJQUFJaEIsSUFBQSxJQUFRLEtBQUtBLElBQUEsQ0FBS2MsT0FBTyxHQUN6QixLQUFLM0MsSUFBQTtFQUNiO0VBQUE7RUFBQTtFQUFBO0VBSUExRSxPQUFPOVYsTUFBQSxFQUFROEUsS0FBQSxFQUFPZ0QsVUFBQSxFQUFZQyxRQUFBLEVBQVU7SUFDeEMsSUFBSWxHLEtBQUEsR0FBUWlHLFVBQUEsSUFBYztJQUMxQixTQUFTNk4sR0FBQSxHQUFNN04sVUFBQSxHQUFhOUgsTUFBQSxDQUFPeWQsVUFBQSxDQUFXM1YsVUFBVSxJQUFJOUgsTUFBQSxDQUFPcUIsVUFBQSxFQUFZcEIsR0FBQSxHQUFNOEgsUUFBQSxJQUFZLE9BQU8sT0FBTy9ILE1BQUEsQ0FBT3lkLFVBQUEsQ0FBVzFWLFFBQVEsR0FBRzROLEdBQUEsSUFBTzFWLEdBQUEsRUFBSzBWLEdBQUEsR0FBTUEsR0FBQSxDQUFJK0gsV0FBQSxFQUFhLEVBQUU3YixLQUFBLEVBQU87TUFDcEwsS0FBSzhiLFdBQUEsQ0FBWTNkLE1BQUEsRUFBUTZCLEtBQUs7TUFDOUIsS0FBS29aLE1BQUEsQ0FBT3RGLEdBQUEsRUFBSzdRLEtBQUs7SUFDMUI7SUFDQSxLQUFLNlksV0FBQSxDQUFZM2QsTUFBQSxFQUFRNkIsS0FBSztFQUNsQztFQUFBO0VBQUE7RUFBQTtFQUlBaWIsVUFBVXJjLElBQUEsRUFBTXFFLEtBQUEsRUFBTzhZLFFBQUEsRUFBVTtJQUM3QixJQUFJQyxLQUFBLEVBQU94QixJQUFBO0lBQ1gsU0FBUzFWLEtBQUEsR0FBUSxLQUFLNlQsSUFBQSxFQUFNc0QsT0FBQSxHQUFVLEdBQUduWCxLQUFBLElBQVMsR0FBR0EsS0FBQSxJQUFTO01BQzFELElBQUlvWCxFQUFBLEdBQUssS0FBS2xhLEtBQUEsQ0FBTThDLEtBQUs7TUFDekIsSUFBSXZFLE1BQUEsR0FBUTJiLEVBQUEsQ0FBR3RQLFlBQUEsQ0FBYWhPLElBQUk7TUFDaEMsSUFBSTJCLE1BQUEsS0FBVSxDQUFDeWIsS0FBQSxJQUFTQSxLQUFBLENBQU1yZSxNQUFBLEdBQVM0QyxNQUFBLENBQU01QyxNQUFBLEdBQVNzZSxPQUFBLEdBQVU7UUFDNURELEtBQUEsR0FBUXpiLE1BQUE7UUFDUmlhLElBQUEsR0FBTzBCLEVBQUE7UUFDUCxJQUFJLENBQUMzYixNQUFBLENBQU01QyxNQUFBLEVBQ1A7TUFDUjtNQUNBLElBQUl1ZSxFQUFBLENBQUdqRSxLQUFBLEVBQU87UUFDVixJQUFJOEQsUUFBQSxFQUNBO1FBQ0pFLE9BQUEsSUFBVztNQUNmO0lBQ0o7SUFDQSxJQUFJLENBQUNELEtBQUEsRUFDRCxPQUFPO0lBQ1gsS0FBS3hCLElBQUEsQ0FBS0EsSUFBSTtJQUNkLFNBQVNuZSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMmYsS0FBQSxDQUFNcmUsTUFBQSxFQUFRdEIsQ0FBQSxJQUM5QjRHLEtBQUEsR0FBUSxLQUFLa1osVUFBQSxDQUFXSCxLQUFBLENBQU0zZixDQUFDLEdBQUcsTUFBTTRHLEtBQUEsRUFBTyxLQUFLO0lBQ3hELE9BQU9BLEtBQUE7RUFDWDtFQUFBO0VBRUEwVyxXQUFXL2EsSUFBQSxFQUFNcUUsS0FBQSxFQUFPOFksUUFBQSxFQUFVO0lBQzlCLElBQUluZCxJQUFBLENBQUsySSxRQUFBLElBQVksS0FBSzJSLFVBQUEsSUFBYyxDQUFDLEtBQUtDLEdBQUEsQ0FBSW5hLElBQUEsRUFBTTtNQUNwRCxJQUFJb2QsS0FBQSxHQUFRLEtBQUtDLG9CQUFBLENBQXFCO01BQ3RDLElBQUlELEtBQUEsRUFDQW5aLEtBQUEsR0FBUSxLQUFLa1osVUFBQSxDQUFXQyxLQUFBLEVBQU8sTUFBTW5aLEtBQUs7SUFDbEQ7SUFDQSxJQUFJMFgsVUFBQSxHQUFhLEtBQUtNLFNBQUEsQ0FBVXJjLElBQUEsRUFBTXFFLEtBQUEsRUFBTzhZLFFBQVE7SUFDckQsSUFBSXBCLFVBQUEsRUFBWTtNQUNaLEtBQUsyQixVQUFBLENBQVc7TUFDaEIsSUFBSW5ELEdBQUEsR0FBTSxLQUFLQSxHQUFBO01BQ2YsSUFBSUEsR0FBQSxDQUFJdFAsS0FBQSxFQUNKc1AsR0FBQSxDQUFJdFAsS0FBQSxHQUFRc1AsR0FBQSxDQUFJdFAsS0FBQSxDQUFNUyxTQUFBLENBQVUxTCxJQUFBLENBQUtJLElBQUk7TUFDN0MsSUFBSXVkLFNBQUEsR0FBWXJoQixJQUFBLENBQUtxSSxJQUFBO01BQ3JCLFNBQVNrSCxDQUFBLElBQUtrUSxVQUFBLENBQVd2YSxNQUFBLENBQU94QixJQUFBLENBQUtxRSxLQUFLLEdBQ3RDLElBQUlrVyxHQUFBLENBQUluYSxJQUFBLEdBQU9tYSxHQUFBLENBQUluYSxJQUFBLENBQUt1UyxjQUFBLENBQWU5RyxDQUFBLENBQUV6TCxJQUFJLElBQUl3ZCxZQUFBLENBQWEvUixDQUFBLENBQUV6TCxJQUFBLEVBQU1KLElBQUEsQ0FBS0ksSUFBSSxHQUMzRXVkLFNBQUEsR0FBWTlSLENBQUEsQ0FBRW5JLFFBQUEsQ0FBU2lhLFNBQVM7TUFDeENwRCxHQUFBLENBQUlwYyxPQUFBLENBQVEyQyxJQUFBLENBQUtkLElBQUEsQ0FBS3NFLElBQUEsQ0FBS3FaLFNBQVMsQ0FBQztNQUNyQyxPQUFPO0lBQ1g7SUFDQSxPQUFPO0VBQ1g7RUFBQTtFQUFBO0VBR0FsQixNQUFNcmMsSUFBQSxFQUFNaUQsS0FBQSxFQUFPZ0IsS0FBQSxFQUFPdVcsVUFBQSxFQUFZO0lBQ2xDLElBQUltQixVQUFBLEdBQWEsS0FBS00sU0FBQSxDQUFVamMsSUFBQSxDQUFLbUUsTUFBQSxDQUFPbEIsS0FBSyxHQUFHZ0IsS0FBQSxFQUFPLEtBQUs7SUFDaEUsSUFBSTBYLFVBQUEsRUFDQUEsVUFBQSxHQUFhLEtBQUt3QixVQUFBLENBQVduZCxJQUFBLEVBQU1pRCxLQUFBLEVBQU9nQixLQUFBLEVBQU8sTUFBTXVXLFVBQVU7SUFDckUsT0FBT21CLFVBQUE7RUFDWDtFQUFBO0VBRUF3QixXQUFXbmQsSUFBQSxFQUFNaUQsS0FBQSxFQUFPZ0IsS0FBQSxFQUFPZ1YsS0FBQSxHQUFRLE9BQU91QixVQUFBLEVBQVk7SUFDdEQsS0FBSzhDLFVBQUEsQ0FBVztJQUNoQixJQUFJbkQsR0FBQSxHQUFNLEtBQUtBLEdBQUE7SUFDZkEsR0FBQSxDQUFJdFAsS0FBQSxHQUFRc1AsR0FBQSxDQUFJdFAsS0FBQSxJQUFTc1AsR0FBQSxDQUFJdFAsS0FBQSxDQUFNUyxTQUFBLENBQVV0TCxJQUFJO0lBQ2pELElBQUk2UyxPQUFBLEdBQVVpRyxZQUFBLENBQWE5WSxJQUFBLEVBQU13YSxVQUFBLEVBQVlMLEdBQUEsQ0FBSXRILE9BQU87SUFDeEQsSUFBS3NILEdBQUEsQ0FBSXRILE9BQUEsR0FBVWdHLGFBQUEsSUFBa0JzQixHQUFBLENBQUlwYyxPQUFBLENBQVFZLE1BQUEsSUFBVSxHQUN2RGtVLE9BQUEsSUFBV2dHLGFBQUE7SUFDZixJQUFJNEUsVUFBQSxHQUFhdmhCLElBQUEsQ0FBS3FJLElBQUE7SUFDdEJOLEtBQUEsR0FBUUEsS0FBQSxDQUFNa1ksTUFBQSxDQUFPMVEsQ0FBQSxJQUFLO01BQ3RCLElBQUkwTyxHQUFBLENBQUluYSxJQUFBLEdBQU9tYSxHQUFBLENBQUluYSxJQUFBLENBQUt1UyxjQUFBLENBQWU5RyxDQUFBLENBQUV6TCxJQUFJLElBQUl3ZCxZQUFBLENBQWEvUixDQUFBLENBQUV6TCxJQUFBLEVBQU1BLElBQUksR0FBRztRQUN6RXlkLFVBQUEsR0FBYWhTLENBQUEsQ0FBRW5JLFFBQUEsQ0FBU21hLFVBQVU7UUFDbEMsT0FBTztNQUNYO01BQ0EsT0FBTztJQUNYLENBQUM7SUFDRCxLQUFLemEsS0FBQSxDQUFNdEMsSUFBQSxDQUFLLElBQUlzWSxXQUFBLENBQVloWixJQUFBLEVBQU1pRCxLQUFBLEVBQU93YSxVQUFBLEVBQVl4RSxLQUFBLEVBQU8sTUFBTXBHLE9BQU8sQ0FBQztJQUM5RSxLQUFLOEcsSUFBQTtJQUNMLE9BQU8xVixLQUFBO0VBQ1g7RUFBQTtFQUFBO0VBR0FxWixXQUFXMVksT0FBQSxHQUFVLE9BQU87SUFDeEIsSUFBSXZILENBQUEsR0FBSSxLQUFLMkYsS0FBQSxDQUFNckUsTUFBQSxHQUFTO0lBQzVCLElBQUl0QixDQUFBLEdBQUksS0FBS3NjLElBQUEsRUFBTTtNQUNmLE9BQU90YyxDQUFBLEdBQUksS0FBS3NjLElBQUEsRUFBTXRjLENBQUEsSUFDbEIsS0FBSzJGLEtBQUEsQ0FBTTNGLENBQUEsR0FBSSxDQUFDLEVBQUVVLE9BQUEsQ0FBUTJDLElBQUEsQ0FBSyxLQUFLc0MsS0FBQSxDQUFNM0YsQ0FBQyxFQUFFNlgsTUFBQSxDQUFPdFEsT0FBTyxDQUFDO01BQ2hFLEtBQUs1QixLQUFBLENBQU1yRSxNQUFBLEdBQVMsS0FBS2diLElBQUEsR0FBTztJQUNwQztFQUNKO0VBQ0F6RSxPQUFBLEVBQVM7SUFDTCxLQUFLeUUsSUFBQSxHQUFPO0lBQ1osS0FBSzJELFVBQUEsQ0FBVyxLQUFLNUQsTUFBTTtJQUMzQixPQUFPLEtBQUsxVyxLQUFBLENBQU0sQ0FBQyxFQUFFa1MsTUFBQSxDQUFPLENBQUMsRUFBRSxLQUFLd0UsTUFBQSxJQUFVLEtBQUs3RyxPQUFBLENBQVE2SyxPQUFBLENBQVE7RUFDdkU7RUFDQWxDLEtBQUt4YyxFQUFBLEVBQUk7SUFDTCxTQUFTM0IsQ0FBQSxHQUFJLEtBQUtzYyxJQUFBLEVBQU10YyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO01BQ2pDLElBQUksS0FBSzJGLEtBQUEsQ0FBTTNGLENBQUMsS0FBSzJCLEVBQUEsRUFBSTtRQUNyQixLQUFLMmEsSUFBQSxHQUFPdGMsQ0FBQTtRQUNaLE9BQU87TUFDWCxXQUNTLEtBQUt1YyxlQUFBLEVBQWlCO1FBQzNCLEtBQUs1VyxLQUFBLENBQU0zRixDQUFDLEVBQUV3VixPQUFBLElBQVc4RixlQUFBO01BQzdCO0lBQ0o7SUFDQSxPQUFPO0VBQ1g7RUFDQSxJQUFJZ0YsV0FBQSxFQUFhO0lBQ2IsS0FBS0wsVUFBQSxDQUFXO0lBQ2hCLElBQUlsZ0IsR0FBQSxHQUFNO0lBQ1YsU0FBU0MsQ0FBQSxHQUFJLEtBQUtzYyxJQUFBLEVBQU10YyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO01BQ2pDLElBQUlVLE9BQUEsR0FBVSxLQUFLaUYsS0FBQSxDQUFNM0YsQ0FBQyxFQUFFVSxPQUFBO01BQzVCLFNBQVNELENBQUEsR0FBSUMsT0FBQSxDQUFRWSxNQUFBLEdBQVMsR0FBR2IsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDckNWLEdBQUEsSUFBT1csT0FBQSxDQUFRRCxDQUFDLEVBQUVKLFFBQUE7TUFDdEIsSUFBSUwsQ0FBQSxFQUNBRCxHQUFBO0lBQ1I7SUFDQSxPQUFPQSxHQUFBO0VBQ1g7RUFDQTBmLFlBQVkzZCxNQUFBLEVBQVFnRSxNQUFBLEVBQVE7SUFDeEIsSUFBSSxLQUFLNlcsSUFBQSxFQUNMLFNBQVMzYyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUsyYyxJQUFBLENBQUtyYixNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDdkMsSUFBSSxLQUFLMmMsSUFBQSxDQUFLM2MsQ0FBQyxFQUFFdUMsSUFBQSxJQUFRVCxNQUFBLElBQVUsS0FBSzZhLElBQUEsQ0FBSzNjLENBQUMsRUFBRThGLE1BQUEsSUFBVUEsTUFBQSxFQUN0RCxLQUFLNlcsSUFBQSxDQUFLM2MsQ0FBQyxFQUFFRCxHQUFBLEdBQU0sS0FBS3VnQixVQUFBO0lBQ2hDO0VBQ1I7RUFDQTlDLFdBQVcxYixNQUFBLEVBQVE7SUFDZixJQUFJLEtBQUs2YSxJQUFBLEVBQ0wsU0FBUzNjLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzJjLElBQUEsQ0FBS3JiLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUN2QyxJQUFJLEtBQUsyYyxJQUFBLENBQUszYyxDQUFDLEVBQUVELEdBQUEsSUFBTyxRQUFRK0IsTUFBQSxDQUFPd00sUUFBQSxJQUFZLEtBQUt4TSxNQUFBLENBQU95ZSxRQUFBLENBQVMsS0FBSzVELElBQUEsQ0FBSzNjLENBQUMsRUFBRXVDLElBQUksR0FDckYsS0FBS29hLElBQUEsQ0FBSzNjLENBQUMsRUFBRUQsR0FBQSxHQUFNLEtBQUt1Z0IsVUFBQTtJQUNoQztFQUNSO0VBQ0FoQixXQUFXeGQsTUFBQSxFQUFRcEIsT0FBQSxFQUFTaUssTUFBQSxFQUFRO0lBQ2hDLElBQUk3SSxNQUFBLElBQVVwQixPQUFBLElBQVcsS0FBS2ljLElBQUEsRUFDMUIsU0FBUzNjLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzJjLElBQUEsQ0FBS3JiLE1BQUEsRUFBUXRCLENBQUEsSUFBSztNQUN2QyxJQUFJLEtBQUsyYyxJQUFBLENBQUszYyxDQUFDLEVBQUVELEdBQUEsSUFBTyxRQUFRK0IsTUFBQSxDQUFPd00sUUFBQSxJQUFZLEtBQUt4TSxNQUFBLENBQU95ZSxRQUFBLENBQVMsS0FBSzVELElBQUEsQ0FBSzNjLENBQUMsRUFBRXVDLElBQUksR0FBRztRQUN4RixJQUFJeEMsR0FBQSxHQUFNVyxPQUFBLENBQVE4Zix1QkFBQSxDQUF3QixLQUFLN0QsSUFBQSxDQUFLM2MsQ0FBQyxFQUFFdUMsSUFBSTtRQUMzRCxJQUFJeEMsR0FBQSxJQUFPNEssTUFBQSxHQUFTLElBQUksSUFDcEIsS0FBS2dTLElBQUEsQ0FBSzNjLENBQUMsRUFBRUQsR0FBQSxHQUFNLEtBQUt1Z0IsVUFBQTtNQUNoQztJQUNKO0VBQ1I7RUFDQS9DLFdBQVdrRCxRQUFBLEVBQVU7SUFDakIsSUFBSSxLQUFLOUQsSUFBQSxFQUNMLFNBQVMzYyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUsyYyxJQUFBLENBQUtyYixNQUFBLEVBQVF0QixDQUFBLElBQUs7TUFDdkMsSUFBSSxLQUFLMmMsSUFBQSxDQUFLM2MsQ0FBQyxFQUFFdUMsSUFBQSxJQUFRa2UsUUFBQSxFQUNyQixLQUFLOUQsSUFBQSxDQUFLM2MsQ0FBQyxFQUFFRCxHQUFBLEdBQU0sS0FBS3VnQixVQUFBLElBQWNHLFFBQUEsQ0FBU3ZELFNBQUEsQ0FBVTViLE1BQUEsR0FBUyxLQUFLcWIsSUFBQSxDQUFLM2MsQ0FBQyxFQUFFOEYsTUFBQTtJQUN2RjtFQUNSO0VBQUE7RUFFQXFTLGVBQWVULE9BQUEsRUFBUztJQUNwQixJQUFJQSxPQUFBLENBQVFwSCxPQUFBLENBQVEsR0FBRyxJQUFJLElBQ3ZCLE9BQU9vSCxPQUFBLENBQVFyRyxLQUFBLENBQU0sVUFBVSxFQUFFa0csSUFBQSxDQUFLLEtBQUtZLGNBQUEsRUFBZ0IsSUFBSTtJQUNuRSxJQUFJdUksS0FBQSxHQUFRaEosT0FBQSxDQUFRckcsS0FBQSxDQUFNLEdBQUc7SUFDN0IsSUFBSXNQLE1BQUEsR0FBUyxLQUFLbkwsT0FBQSxDQUFRa0MsT0FBQTtJQUMxQixJQUFJa0osT0FBQSxHQUFVLENBQUMsS0FBS3ZFLE1BQUEsS0FBVyxDQUFDc0UsTUFBQSxJQUFVQSxNQUFBLENBQU83ZSxNQUFBLENBQU9hLElBQUEsSUFBUSxLQUFLZ0QsS0FBQSxDQUFNLENBQUMsRUFBRWhELElBQUE7SUFDOUUsSUFBSWtlLFFBQUEsR0FBVyxFQUFFRixNQUFBLEdBQVNBLE1BQUEsQ0FBT2xZLEtBQUEsR0FBUSxJQUFJLE1BQU1tWSxPQUFBLEdBQVUsSUFBSTtJQUNqRSxJQUFJcFQsS0FBQSxHQUFRQSxDQUFDeE4sQ0FBQSxFQUFHeUksS0FBQSxLQUFVO01BQ3RCLE9BQU96SSxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO1FBQ2hCLElBQUk4Z0IsSUFBQSxHQUFPSixLQUFBLENBQU0xZ0IsQ0FBQztRQUNsQixJQUFJOGdCLElBQUEsSUFBUSxJQUFJO1VBQ1osSUFBSTlnQixDQUFBLElBQUswZ0IsS0FBQSxDQUFNcGYsTUFBQSxHQUFTLEtBQUt0QixDQUFBLElBQUssR0FDOUI7VUFDSixPQUFPeUksS0FBQSxJQUFTb1ksUUFBQSxFQUFVcFksS0FBQSxJQUN0QixJQUFJK0UsS0FBQSxDQUFNeE4sQ0FBQSxHQUFJLEdBQUd5SSxLQUFLLEdBQ2xCLE9BQU87VUFDZixPQUFPO1FBQ1gsT0FDSztVQUNELElBQUkwQyxJQUFBLEdBQU8xQyxLQUFBLEdBQVEsS0FBTUEsS0FBQSxJQUFTLEtBQUttWSxPQUFBLEdBQVcsS0FBS2piLEtBQUEsQ0FBTThDLEtBQUssRUFBRTlGLElBQUEsR0FDOURnZSxNQUFBLElBQVVsWSxLQUFBLElBQVNvWSxRQUFBLEdBQVdGLE1BQUEsQ0FBT3BlLElBQUEsQ0FBS2tHLEtBQUEsR0FBUW9ZLFFBQVEsRUFBRWxlLElBQUEsR0FDeEQ7VUFDVixJQUFJLENBQUN3SSxJQUFBLElBQVNBLElBQUEsQ0FBSzFFLElBQUEsSUFBUXFhLElBQUEsSUFBUSxDQUFDM1YsSUFBQSxDQUFLa0gsU0FBQSxDQUFVeU8sSUFBSSxHQUNuRCxPQUFPO1VBQ1hyWSxLQUFBO1FBQ0o7TUFDSjtNQUNBLE9BQU87SUFDWDtJQUNBLE9BQU8rRSxLQUFBLENBQU1rVCxLQUFBLENBQU1wZixNQUFBLEdBQVMsR0FBRyxLQUFLZ2IsSUFBSTtFQUM1QztFQUNBMEQscUJBQUEsRUFBdUI7SUFDbkIsSUFBSWUsUUFBQSxHQUFXLEtBQUt2TCxPQUFBLENBQVFrQyxPQUFBO0lBQzVCLElBQUlxSixRQUFBLEVBQ0EsU0FBU3hWLENBQUEsR0FBSXdWLFFBQUEsQ0FBU3RZLEtBQUEsRUFBTzhDLENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUs7TUFDdEMsSUFBSXlWLEtBQUEsR0FBUUQsUUFBQSxDQUFTeGUsSUFBQSxDQUFLZ0osQ0FBQyxFQUFFZ0MsY0FBQSxDQUFld1QsUUFBQSxDQUFTclcsVUFBQSxDQUFXYSxDQUFDLENBQUMsRUFBRW9FLFdBQUE7TUFDcEUsSUFBSXFSLEtBQUEsSUFBU0EsS0FBQSxDQUFNbGUsV0FBQSxJQUFla2UsS0FBQSxDQUFNbFUsWUFBQSxFQUNwQyxPQUFPa1UsS0FBQTtJQUNmO0lBQ0osU0FBU3ZhLElBQUEsSUFBUSxLQUFLMlYsTUFBQSxDQUFPalgsTUFBQSxDQUFPUSxLQUFBLEVBQU87TUFDdkMsSUFBSWhELElBQUEsR0FBTyxLQUFLeVosTUFBQSxDQUFPalgsTUFBQSxDQUFPUSxLQUFBLENBQU1jLElBQUk7TUFDeEMsSUFBSTlELElBQUEsQ0FBS0csV0FBQSxJQUFlSCxJQUFBLENBQUttSyxZQUFBLEVBQ3pCLE9BQU9uSyxJQUFBO0lBQ2Y7RUFDSjtBQUNKO0FBSUEsU0FBU21iLGNBQWNyRyxHQUFBLEVBQUs7RUFDeEIsU0FBU3RYLEtBQUEsR0FBUXNYLEdBQUEsQ0FBSXRVLFVBQUEsRUFBWThkLFFBQUEsR0FBVyxNQUFNOWdCLEtBQUEsRUFBT0EsS0FBQSxHQUFRQSxLQUFBLENBQU1xZixXQUFBLEVBQWE7SUFDaEYsSUFBSS9ZLElBQUEsR0FBT3RHLEtBQUEsQ0FBTW1PLFFBQUEsSUFBWSxJQUFJbk8sS0FBQSxDQUFNK2IsUUFBQSxDQUFTQyxXQUFBLENBQVksSUFBSTtJQUNoRSxJQUFJMVYsSUFBQSxJQUFRNFUsUUFBQSxDQUFTNUYsY0FBQSxDQUFlaFAsSUFBSSxLQUFLd2EsUUFBQSxFQUFVO01BQ25EQSxRQUFBLENBQVNDLFdBQUEsQ0FBWS9nQixLQUFLO01BQzFCQSxLQUFBLEdBQVE4Z0IsUUFBQTtJQUNaLFdBQ1N4YSxJQUFBLElBQVEsTUFBTTtNQUNuQndhLFFBQUEsR0FBVzlnQixLQUFBO0lBQ2YsV0FDU3NHLElBQUEsRUFBTTtNQUNYd2EsUUFBQSxHQUFXO0lBQ2Y7RUFDSjtBQUNKO0FBRUEsU0FBU2pKLFFBQVFQLEdBQUEsRUFBSzBKLFFBQUEsRUFBVTtFQUM1QixRQUFRMUosR0FBQSxDQUFJTyxPQUFBLElBQVdQLEdBQUEsQ0FBSTJKLGlCQUFBLElBQXFCM0osR0FBQSxDQUFJNEoscUJBQUEsSUFBeUI1SixHQUFBLENBQUk2SixrQkFBQSxFQUFvQjVMLElBQUEsQ0FBSytCLEdBQUEsRUFBSzBKLFFBQVE7QUFDM0g7QUFDQSxTQUFTalosS0FBSzFCLEdBQUEsRUFBSztFQUNmLElBQUkzQyxLQUFBLEdBQU8sQ0FBQztFQUNaLFNBQVNvUyxJQUFBLElBQVF6UCxHQUFBLEVBQ2IzQyxLQUFBLENBQUtvUyxJQUFJLElBQUl6UCxHQUFBLENBQUl5UCxJQUFJO0VBQ3pCLE9BQU9wUyxLQUFBO0FBQ1g7QUFJQSxTQUFTc2MsYUFBYWhMLFFBQUEsRUFBVTdHLFFBQUEsRUFBVTtFQUN0QyxJQUFJM0ksS0FBQSxHQUFRMkksUUFBQSxDQUFTbkosTUFBQSxDQUFPUSxLQUFBO0VBQzVCLFNBQVNjLElBQUEsSUFBUWQsS0FBQSxFQUFPO0lBQ3BCLElBQUk3RCxNQUFBLEdBQVM2RCxLQUFBLENBQU1jLElBQUk7SUFDdkIsSUFBSSxDQUFDM0UsTUFBQSxDQUFPb1QsY0FBQSxDQUFlQyxRQUFRLEdBQy9CO0lBQ0osSUFBSW5GLElBQUEsR0FBTyxFQUFDO01BQUdnQixJQUFBLEdBQVF4RCxLQUFBLElBQVU7UUFDN0J3QyxJQUFBLENBQUszTSxJQUFBLENBQUttSyxLQUFLO1FBQ2YsU0FBU3hOLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl3TixLQUFBLENBQU1zRCxTQUFBLEVBQVc5USxDQUFBLElBQUs7VUFDdEMsSUFBSTtZQUFFMkMsSUFBQTtZQUFNd0k7VUFBSyxJQUFJcUMsS0FBQSxDQUFNdUQsSUFBQSxDQUFLL1EsQ0FBQztVQUNqQyxJQUFJMkMsSUFBQSxJQUFRMkwsUUFBQSxFQUNSLE9BQU87VUFDWCxJQUFJMEIsSUFBQSxDQUFLTSxPQUFBLENBQVFuRixJQUFJLElBQUksS0FBSzZGLElBQUEsQ0FBSzdGLElBQUksR0FDbkMsT0FBTztRQUNmO01BQ0o7SUFDQSxJQUFJNkYsSUFBQSxDQUFLbFAsTUFBQSxDQUFPMkwsWUFBWSxHQUN4QixPQUFPO0VBQ2Y7QUFDSjtBQU1BLElBQU05TyxhQUFBLEdBQU4sTUFBTTRpQixjQUFBLENBQWM7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFVaEIvZixZQUlBbUUsS0FBQSxFQUlBaUIsS0FBQSxFQUFPO0lBQ0gsS0FBS2pCLEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtpQixLQUFBLEdBQVFBLEtBQUE7RUFDakI7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFPQTRhLGtCQUFrQi9aLFFBQUEsRUFBVStOLE9BQUEsR0FBVSxDQUFDLEdBQUdoTSxNQUFBLEVBQVE7SUFDOUMsSUFBSSxDQUFDQSxNQUFBLEVBQ0RBLE1BQUEsR0FBU2lCLEdBQUEsQ0FBSStLLE9BQU8sRUFBRWlNLHNCQUFBLENBQXVCO0lBQ2pELElBQUkzRSxHQUFBLEdBQU10VCxNQUFBO01BQVFrSCxNQUFBLEdBQVMsRUFBQztJQUM1QmpKLFFBQUEsQ0FBU3BELE9BQUEsQ0FBUTlCLElBQUEsSUFBUTtNQUNyQixJQUFJbU8sTUFBQSxDQUFPcFAsTUFBQSxJQUFVaUIsSUFBQSxDQUFLcUUsS0FBQSxDQUFNdEYsTUFBQSxFQUFRO1FBQ3BDLElBQUlvZ0IsSUFBQSxHQUFPO1VBQUdDLFFBQUEsR0FBVztRQUN6QixPQUFPRCxJQUFBLEdBQU9oUixNQUFBLENBQU9wUCxNQUFBLElBQVVxZ0IsUUFBQSxHQUFXcGYsSUFBQSxDQUFLcUUsS0FBQSxDQUFNdEYsTUFBQSxFQUFRO1VBQ3pELElBQUk2SixJQUFBLEdBQU81SSxJQUFBLENBQUtxRSxLQUFBLENBQU0rYSxRQUFRO1VBQzlCLElBQUksQ0FBQyxLQUFLL2EsS0FBQSxDQUFNdUUsSUFBQSxDQUFLeEksSUFBQSxDQUFLOEQsSUFBSSxHQUFHO1lBQzdCa2IsUUFBQTtZQUNBO1VBQ0o7VUFDQSxJQUFJLENBQUN4VyxJQUFBLENBQUtsSCxFQUFBLENBQUd5TSxNQUFBLENBQU9nUixJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUt2VyxJQUFBLENBQUt4SSxJQUFBLENBQUtDLElBQUEsQ0FBS2dmLFFBQUEsS0FBYSxPQUN6RDtVQUNKRixJQUFBO1VBQ0FDLFFBQUE7UUFDSjtRQUNBLE9BQU9ELElBQUEsR0FBT2hSLE1BQUEsQ0FBT3BQLE1BQUEsRUFDakJ3YixHQUFBLEdBQU1wTSxNQUFBLENBQU9ZLEdBQUEsQ0FBSSxFQUFFLENBQUM7UUFDeEIsT0FBT3FRLFFBQUEsR0FBV3BmLElBQUEsQ0FBS3FFLEtBQUEsQ0FBTXRGLE1BQUEsRUFBUTtVQUNqQyxJQUFJdWdCLEdBQUEsR0FBTXRmLElBQUEsQ0FBS3FFLEtBQUEsQ0FBTSthLFFBQUEsRUFBVTtVQUMvQixJQUFJRyxPQUFBLEdBQVUsS0FBS0MsYUFBQSxDQUFjRixHQUFBLEVBQUt0ZixJQUFBLENBQUsySSxRQUFBLEVBQVVzSyxPQUFPO1VBQzVELElBQUlzTSxPQUFBLEVBQVM7WUFDVHBSLE1BQUEsQ0FBT3JOLElBQUEsQ0FBSyxDQUFDd2UsR0FBQSxFQUFLL0UsR0FBRyxDQUFDO1lBQ3RCQSxHQUFBLENBQUlvRSxXQUFBLENBQVlZLE9BQUEsQ0FBUXJLLEdBQUc7WUFDM0JxRixHQUFBLEdBQU1nRixPQUFBLENBQVEzQyxVQUFBLElBQWMyQyxPQUFBLENBQVFySyxHQUFBO1VBQ3hDO1FBQ0o7TUFDSjtNQUNBcUYsR0FBQSxDQUFJb0UsV0FBQSxDQUFZLEtBQUtjLGtCQUFBLENBQW1CemYsSUFBQSxFQUFNaVQsT0FBTyxDQUFDO0lBQzFELENBQUM7SUFDRCxPQUFPaE0sTUFBQTtFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUF3WSxtQkFBbUJ6ZixJQUFBLEVBQU1pVCxPQUFBLEVBQVM7SUFDOUIsSUFBSTtNQUFFaUMsR0FBQTtNQUFLMEg7SUFBVyxJQUFJOEMsVUFBQSxDQUFXeFgsR0FBQSxDQUFJK0ssT0FBTyxHQUFHLEtBQUs3UCxLQUFBLENBQU1wRCxJQUFBLENBQUtJLElBQUEsQ0FBSzhELElBQUksRUFBRWxFLElBQUksR0FBRyxNQUFNQSxJQUFBLENBQUtxRCxLQUFLO0lBQ3JHLElBQUl1WixVQUFBLEVBQVk7TUFDWixJQUFJNWMsSUFBQSxDQUFLRyxNQUFBLEVBQ0wsTUFBTSxJQUFJeUIsVUFBQSxDQUFXLDhDQUE4QztNQUN2RSxLQUFLcWQsaUJBQUEsQ0FBa0JqZixJQUFBLENBQUs3QixPQUFBLEVBQVM4VSxPQUFBLEVBQVMySixVQUFVO0lBQzVEO0lBQ0EsT0FBTzFILEdBQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBUUF5SyxjQUFjM2YsSUFBQSxFQUFNaVQsT0FBQSxHQUFVLENBQUMsR0FBRztJQUM5QixJQUFJaUMsR0FBQSxHQUFNLEtBQUt1SyxrQkFBQSxDQUFtQnpmLElBQUEsRUFBTWlULE9BQU87SUFDL0MsU0FBU3hWLENBQUEsR0FBSXVDLElBQUEsQ0FBS3FFLEtBQUEsQ0FBTXRGLE1BQUEsR0FBUyxHQUFHdEIsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztNQUM3QyxJQUFJK2IsSUFBQSxHQUFPLEtBQUtnRyxhQUFBLENBQWN4ZixJQUFBLENBQUtxRSxLQUFBLENBQU01RyxDQUFDLEdBQUd1QyxJQUFBLENBQUsySSxRQUFBLEVBQVVzSyxPQUFPO01BQ25FLElBQUl1RyxJQUFBLEVBQU07UUFDTixDQUFDQSxJQUFBLENBQUtvRCxVQUFBLElBQWNwRCxJQUFBLENBQUt0RSxHQUFBLEVBQUt5SixXQUFBLENBQVl6SixHQUFHO1FBQzdDQSxHQUFBLEdBQU1zRSxJQUFBLENBQUt0RSxHQUFBO01BQ2Y7SUFDSjtJQUNBLE9BQU9BLEdBQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtFQUlBc0ssY0FBY2xiLElBQUEsRUFBTXNLLE1BQUEsRUFBUXFFLE9BQUEsR0FBVSxDQUFDLEdBQUc7SUFDdEMsSUFBSTJNLEtBQUEsR0FBUSxLQUFLdmIsS0FBQSxDQUFNQyxJQUFBLENBQUtsRSxJQUFBLENBQUs4RCxJQUFJO0lBQ3JDLE9BQU8wYixLQUFBLElBQVNGLFVBQUEsQ0FBV3hYLEdBQUEsQ0FBSStLLE9BQU8sR0FBRzJNLEtBQUEsQ0FBTXRiLElBQUEsRUFBTXNLLE1BQU0sR0FBRyxNQUFNdEssSUFBQSxDQUFLakIsS0FBSztFQUNsRjtFQUNBLE9BQU9xYyxXQUFXclcsSUFBQSxFQUFLd1csU0FBQSxFQUFXQyxLQUFBLEdBQVEsTUFBTUMsYUFBQSxFQUFlO0lBQzNELE9BQU9MLFVBQUEsQ0FBV3JXLElBQUEsRUFBS3dXLFNBQUEsRUFBV0MsS0FBQSxFQUFPQyxhQUFhO0VBQzFEO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQSxPQUFPeEosV0FBVzNULE1BQUEsRUFBUTtJQUN0QixPQUFPQSxNQUFBLENBQU80USxNQUFBLENBQU93TSxhQUFBLEtBQ2hCcGQsTUFBQSxDQUFPNFEsTUFBQSxDQUFPd00sYUFBQSxHQUFnQixJQUFJaEIsY0FBQSxDQUFjLEtBQUtpQixlQUFBLENBQWdCcmQsTUFBTSxHQUFHLEtBQUtzZCxlQUFBLENBQWdCdGQsTUFBTSxDQUFDO0VBQ25IO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLQSxPQUFPcWQsZ0JBQWdCcmQsTUFBQSxFQUFRO0lBQzNCLElBQUk1QixNQUFBLEdBQVNtZixXQUFBLENBQVl2ZCxNQUFBLENBQU9RLEtBQUs7SUFDckMsSUFBSSxDQUFDcEMsTUFBQSxDQUFPL0MsSUFBQSxFQUNSK0MsTUFBQSxDQUFPL0MsSUFBQSxHQUFPK0IsSUFBQSxJQUFRQSxJQUFBLENBQUsvQixJQUFBO0lBQy9CLE9BQU8rQyxNQUFBO0VBQ1g7RUFBQTtBQUFBO0FBQUE7RUFJQSxPQUFPa2YsZ0JBQWdCdGQsTUFBQSxFQUFRO0lBQzNCLE9BQU91ZCxXQUFBLENBQVl2ZCxNQUFBLENBQU95QixLQUFLO0VBQ25DO0FBQ0o7QUFDQSxTQUFTOGIsWUFBWWxjLEdBQUEsRUFBSztFQUN0QixJQUFJakQsTUFBQSxHQUFTLENBQUM7RUFDZCxTQUFTa0QsSUFBQSxJQUFRRCxHQUFBLEVBQUs7SUFDbEIsSUFBSTJiLEtBQUEsR0FBUTNiLEdBQUEsQ0FBSUMsSUFBSSxFQUFFN0QsSUFBQSxDQUFLdWYsS0FBQTtJQUMzQixJQUFJQSxLQUFBLEVBQ0E1ZSxNQUFBLENBQU9rRCxJQUFJLElBQUkwYixLQUFBO0VBQ3ZCO0VBQ0EsT0FBTzVlLE1BQUE7QUFDWDtBQUNBLFNBQVNrSCxJQUFJK0ssT0FBQSxFQUFTO0VBQ2xCLE9BQU9BLE9BQUEsQ0FBUW1OLFFBQUEsSUFBWUMsTUFBQSxDQUFPRCxRQUFBO0FBQ3RDO0FBQ0EsSUFBTUUsd0JBQUEsR0FBMkIsbUJBQUl2VyxPQUFBLENBQVE7QUFDN0MsU0FBU3dXLHFCQUFxQmxkLEtBQUEsRUFBTztFQUNqQyxJQUFJUixLQUFBLEdBQVF5ZCx3QkFBQSxDQUF5QjVXLEdBQUEsQ0FBSXJHLEtBQUs7RUFDOUMsSUFBSVIsS0FBQSxLQUFVLFFBQ1Z5ZCx3QkFBQSxDQUF5QjNjLEdBQUEsQ0FBSU4sS0FBQSxFQUFPUixLQUFBLEdBQVEyZCx5QkFBQSxDQUEwQm5kLEtBQUssQ0FBQztFQUNoRixPQUFPUixLQUFBO0FBQ1g7QUFDQSxTQUFTMmQsMEJBQTBCbmQsS0FBQSxFQUFPO0VBQ3RDLElBQUlyQyxNQUFBLEdBQVM7RUFDYixTQUFTeU4sS0FBSzVMLEtBQUEsRUFBTztJQUNqQixJQUFJQSxLQUFBLElBQVMsT0FBT0EsS0FBQSxJQUFTLFVBQVU7TUFDbkMsSUFBSUMsS0FBQSxDQUFNQyxPQUFBLENBQVFGLEtBQUssR0FBRztRQUN0QixJQUFJLE9BQU9BLEtBQUEsQ0FBTSxDQUFDLEtBQUssVUFBVTtVQUM3QixJQUFJLENBQUM3QixNQUFBLEVBQ0RBLE1BQUEsR0FBUyxFQUFDO1VBQ2RBLE1BQUEsQ0FBT0YsSUFBQSxDQUFLK0IsS0FBSztRQUNyQixPQUNLO1VBQ0QsU0FBU3BGLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlvRixLQUFBLENBQU05RCxNQUFBLEVBQVF0QixDQUFBLElBQzlCZ1IsSUFBQSxDQUFLNUwsS0FBQSxDQUFNcEYsQ0FBQyxDQUFDO1FBQ3JCO01BQ0osT0FDSztRQUNELFNBQVNpVyxJQUFBLElBQVE3USxLQUFBLEVBQ2I0TCxJQUFBLENBQUs1TCxLQUFBLENBQU02USxJQUFJLENBQUM7TUFDeEI7SUFDSjtFQUNKO0VBQ0FqRixJQUFBLENBQUtwTCxLQUFLO0VBQ1YsT0FBT3JDLE1BQUE7QUFDWDtBQUNBLFNBQVMwZSxXQUFXclcsSUFBQSxFQUFLd1csU0FBQSxFQUFXQyxLQUFBLEVBQU9DLGFBQUEsRUFBZTtFQUN0RCxJQUFJLE9BQU9GLFNBQUEsSUFBYSxVQUNwQixPQUFPO0lBQUUzSyxHQUFBLEVBQUs3TCxJQUFBLENBQUkrUyxjQUFBLENBQWV5RCxTQUFTO0VBQUU7RUFDaEQsSUFBSUEsU0FBQSxDQUFVOVQsUUFBQSxJQUFZLE1BQ3RCLE9BQU87SUFBRW1KLEdBQUEsRUFBSzJLO0VBQVU7RUFDNUIsSUFBSUEsU0FBQSxDQUFVM0ssR0FBQSxJQUFPMkssU0FBQSxDQUFVM0ssR0FBQSxDQUFJbkosUUFBQSxJQUFZLE1BQzNDLE9BQU84VCxTQUFBO0VBQ1gsSUFBSXpFLE9BQUEsR0FBVXlFLFNBQUEsQ0FBVSxDQUFDO0lBQUdZLFVBQUE7RUFDNUIsSUFBSSxPQUFPckYsT0FBQSxJQUFXLFVBQ2xCLE1BQU0sSUFBSXhaLFVBQUEsQ0FBVyxvQ0FBb0M7RUFDN0QsSUFBSW1lLGFBQUEsS0FBa0JVLFVBQUEsR0FBYUYsb0JBQUEsQ0FBcUJSLGFBQWEsTUFDakVVLFVBQUEsQ0FBVzFTLE9BQUEsQ0FBUThSLFNBQVMsSUFBSSxJQUNoQyxNQUFNLElBQUlqZSxVQUFBLENBQVcsOEdBQThHO0VBQ3ZJLElBQUk4ZSxLQUFBLEdBQVF0RixPQUFBLENBQVFyTixPQUFBLENBQVEsR0FBRztFQUMvQixJQUFJMlMsS0FBQSxHQUFRLEdBQUc7SUFDWFosS0FBQSxHQUFRMUUsT0FBQSxDQUFRbGIsS0FBQSxDQUFNLEdBQUd3Z0IsS0FBSztJQUM5QnRGLE9BQUEsR0FBVUEsT0FBQSxDQUFRbGIsS0FBQSxDQUFNd2dCLEtBQUEsR0FBUSxDQUFDO0VBQ3JDO0VBQ0EsSUFBSTlELFVBQUE7RUFDSixJQUFJMUgsR0FBQSxHQUFPNEssS0FBQSxHQUFRelcsSUFBQSxDQUFJc1gsZUFBQSxDQUFnQmIsS0FBQSxFQUFPMUUsT0FBTyxJQUFJL1IsSUFBQSxDQUFJdVgsYUFBQSxDQUFjeEYsT0FBTztFQUNsRixJQUFJL1gsS0FBQSxHQUFRd2MsU0FBQSxDQUFVLENBQUM7SUFBR3BnQixLQUFBLEdBQVE7RUFDbEMsSUFBSTRELEtBQUEsSUFBUyxPQUFPQSxLQUFBLElBQVMsWUFBWUEsS0FBQSxDQUFNMEksUUFBQSxJQUFZLFFBQVEsQ0FBQ2pKLEtBQUEsQ0FBTUMsT0FBQSxDQUFRTSxLQUFLLEdBQUc7SUFDdEY1RCxLQUFBLEdBQVE7SUFDUixTQUFTeUUsSUFBQSxJQUFRYixLQUFBLEVBQ2IsSUFBSUEsS0FBQSxDQUFNYSxJQUFJLEtBQUssTUFBTTtNQUNyQixJQUFJMmMsTUFBQSxHQUFRM2MsSUFBQSxDQUFLNkosT0FBQSxDQUFRLEdBQUc7TUFDNUIsSUFBSThTLE1BQUEsR0FBUSxHQUNSM0wsR0FBQSxDQUFJNEwsY0FBQSxDQUFlNWMsSUFBQSxDQUFLaEUsS0FBQSxDQUFNLEdBQUcyZ0IsTUFBSyxHQUFHM2MsSUFBQSxDQUFLaEUsS0FBQSxDQUFNMmdCLE1BQUEsR0FBUSxDQUFDLEdBQUd4ZCxLQUFBLENBQU1hLElBQUksQ0FBQyxXQUN0RUEsSUFBQSxJQUFRLFdBQVdnUixHQUFBLENBQUlWLEtBQUEsRUFDNUJVLEdBQUEsQ0FBSVYsS0FBQSxDQUFNdU0sT0FBQSxHQUFVMWQsS0FBQSxDQUFNYSxJQUFJLE9BRTlCZ1IsR0FBQSxDQUFJOEwsWUFBQSxDQUFhOWMsSUFBQSxFQUFNYixLQUFBLENBQU1hLElBQUksQ0FBQztJQUMxQztFQUNSO0VBQ0EsU0FBU3pHLENBQUEsR0FBSWdDLEtBQUEsRUFBT2hDLENBQUEsR0FBSW9pQixTQUFBLENBQVU5Z0IsTUFBQSxFQUFRdEIsQ0FBQSxJQUFLO0lBQzNDLElBQUlHLEtBQUEsR0FBUWlpQixTQUFBLENBQVVwaUIsQ0FBQztJQUN2QixJQUFJRyxLQUFBLEtBQVUsR0FBRztNQUNiLElBQUlILENBQUEsR0FBSW9pQixTQUFBLENBQVU5Z0IsTUFBQSxHQUFTLEtBQUt0QixDQUFBLEdBQUlnQyxLQUFBLEVBQ2hDLE1BQU0sSUFBSW1DLFVBQUEsQ0FBVyx3REFBd0Q7TUFDakYsT0FBTztRQUFFc1QsR0FBQTtRQUFLMEgsVUFBQSxFQUFZMUg7TUFBSTtJQUNsQyxPQUNLO01BQ0QsSUFBSTtRQUFFQSxHQUFBLEVBQUs3VyxLQUFBO1FBQU91ZSxVQUFBLEVBQVlxRTtNQUFhLElBQUl2QixVQUFBLENBQVdyVyxJQUFBLEVBQUt6TCxLQUFBLEVBQU9raUIsS0FBQSxFQUFPQyxhQUFhO01BQzFGN0ssR0FBQSxDQUFJeUosV0FBQSxDQUFZdGdCLEtBQUs7TUFDckIsSUFBSTRpQixZQUFBLEVBQWM7UUFDZCxJQUFJckUsVUFBQSxFQUNBLE1BQU0sSUFBSWhiLFVBQUEsQ0FBVyx3QkFBd0I7UUFDakRnYixVQUFBLEdBQWFxRSxZQUFBO01BQ2pCO0lBQ0o7RUFDSjtFQUNBLE9BQU87SUFBRS9MLEdBQUE7SUFBSzBIO0VBQVc7QUFDN0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9