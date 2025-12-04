System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep)],
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

// .beyond/uimport/prosemirror-transform.1.10.4.js
var prosemirror_transform_1_10_4_exports = {};
__export(prosemirror_transform_1_10_4_exports, {
  AddMarkStep: () => AddMarkStep,
  AddNodeMarkStep: () => AddNodeMarkStep,
  AttrStep: () => AttrStep,
  DocAttrStep: () => DocAttrStep,
  MapResult: () => MapResult,
  Mapping: () => Mapping,
  RemoveMarkStep: () => RemoveMarkStep,
  RemoveNodeMarkStep: () => RemoveNodeMarkStep,
  ReplaceAroundStep: () => ReplaceAroundStep,
  ReplaceStep: () => ReplaceStep,
  Step: () => Step,
  StepMap: () => StepMap,
  StepResult: () => StepResult,
  Transform: () => Transform,
  TransformError: () => TransformError,
  canJoin: () => canJoin,
  canSplit: () => canSplit,
  dropPoint: () => dropPoint,
  findWrapping: () => findWrapping,
  insertPoint: () => insertPoint,
  joinPoint: () => joinPoint,
  liftTarget: () => liftTarget,
  replaceStep: () => replaceStep
});
module.exports = __toCommonJS(prosemirror_transform_1_10_4_exports);

// node_modules/prosemirror-transform/dist/index.js
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var lower16 = 65535;
var factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
  return index + offset * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
var DEL_BEFORE = 1,
  DEL_AFTER = 2,
  DEL_ACROSS = 4,
  DEL_SIDE = 8;
var MapResult = class {
  /**
  @internal
  */
  constructor(pos, delInfo, recover) {
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & DEL_SIDE) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & DEL_ACROSS) > 0;
  }
};
var StepMap = class _StepMap {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(ranges, inverted = false) {
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && _StepMap.empty) return _StepMap.empty;
  }
  /**
  @internal
  */
  recover(value) {
    let diff = 0,
      index = recoverIndex(value);
    if (!this.inverted) for (let i = 0; i < index; i++) diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[index * 3] + diff + recoverOffset(value);
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  map(pos, assoc = 1) {
    return this._map(pos, assoc, true);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let diff = 0,
      oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex],
        end = start + oldSize;
      if (pos <= end) {
        let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
        let result = start + diff + (side < 0 ? 0 : newSize);
        if (simple) return result;
        let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
        let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
        if (assoc < 0 ? pos != start : pos != end) del |= DEL_SIDE;
        return new MapResult(result, del, recover);
      }
      diff += newSize - oldSize;
    }
    return simple ? pos + diff : new MapResult(pos + diff, 0, null);
  }
  /**
  @internal
  */
  touches(pos, recover) {
    let diff = 0,
      index = recoverIndex(recover);
    let oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos) break;
      let oldSize = this.ranges[i + oldIndex],
        end = start + oldSize;
      if (pos <= end && i == index * 3) return true;
      diff += this.ranges[i + newIndex] - oldSize;
    }
    return false;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(f) {
    let oldIndex = this.inverted ? 2 : 1,
      newIndex = this.inverted ? 1 : 2;
    for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i],
        oldStart = start - (this.inverted ? diff : 0),
        newStart = start + (this.inverted ? 0 : diff);
      let oldSize = this.ranges[i + oldIndex],
        newSize = this.ranges[i + newIndex];
      f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
      diff += newSize - oldSize;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new _StepMap(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(n) {
    return n == 0 ? _StepMap.empty : new _StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
  }
};
StepMap.empty = new StepMap([]);
var Mapping = class _Mapping {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(maps, mirror, from = 0, to = maps ? maps.length : 0) {
    this.mirror = mirror;
    this.from = from;
    this.to = to;
    this._maps = maps || [];
    this.ownData = !(maps || mirror);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(from = 0, to = this.maps.length) {
    return new _Mapping(this._maps, this.mirror, from, to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(map, mirrors) {
    if (!this.ownData) {
      this._maps = this._maps.slice();
      this.mirror = this.mirror && this.mirror.slice();
      this.ownData = true;
    }
    this.to = this._maps.push(map);
    if (mirrors != null) this.setMirror(this._maps.length - 1, mirrors);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(mapping) {
    for (let i = 0, startSize = this._maps.length; i < mapping._maps.length; i++) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping._maps[i], mirr != null && mirr < i ? startSize + mirr : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(n) {
    if (this.mirror) {
      for (let i = 0; i < this.mirror.length; i++) if (this.mirror[i] == n) return this.mirror[i + (i % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(n, m) {
    if (!this.mirror) this.mirror = [];
    this.mirror.push(n, m);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(mapping) {
    for (let i = mapping.maps.length - 1, totalSize = this._maps.length + mapping._maps.length; i >= 0; i--) {
      let mirr = mapping.getMirror(i);
      this.appendMap(mapping._maps[i].invert(), mirr != null && mirr > i ? totalSize - mirr - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let inverse = new _Mapping();
    inverse.appendMappingInverted(this);
    return inverse;
  }
  /**
  Map a position through this mapping.
  */
  map(pos, assoc = 1) {
    if (this.mirror) return this._map(pos, assoc, true);
    for (let i = this.from; i < this.to; i++) pos = this._maps[i].map(pos, assoc);
    return pos;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let delInfo = 0;
    for (let i = this.from; i < this.to; i++) {
      let map = this._maps[i],
        result = map.mapResult(pos, assoc);
      if (result.recover != null) {
        let corr = this.getMirror(i);
        if (corr != null && corr > i && corr < this.to) {
          i = corr;
          pos = this._maps[corr].recover(result.recover);
          continue;
        }
      }
      delInfo |= result.delInfo;
      pos = result.pos;
    }
    return simple ? pos : new MapResult(pos, delInfo, null);
  }
};
var stepsByID = /* @__PURE__ */Object.create(null);
var Step = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return StepMap.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(other) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(schema, json) {
    if (!json || !json.stepType) throw new RangeError("Invalid input for Step.fromJSON");
    let type = stepsByID[json.stepType];
    if (!type) throw new RangeError(`No step type ${json.stepType} defined`);
    return type.fromJSON(schema, json);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(id, stepClass) {
    if (id in stepsByID) throw new RangeError("Duplicate use of step JSON ID " + id);
    stepsByID[id] = stepClass;
    stepClass.prototype.jsonID = id;
    return stepClass;
  }
};
var StepResult = class _StepResult {
  /**
  @internal
  */
  constructor(doc, failed) {
    this.doc = doc;
    this.failed = failed;
  }
  /**
  Create a successful step result.
  */
  static ok(doc) {
    return new _StepResult(doc, null);
  }
  /**
  Create a failed step result.
  */
  static fail(message) {
    return new _StepResult(null, message);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(doc, from, to, slice) {
    try {
      return _StepResult.ok(doc.replace(from, to, slice));
    } catch (e) {
      if (e instanceof import_prosemirror_model.ReplaceError) return _StepResult.fail(e.message);
      throw e;
    }
  }
};
function mapFragment(fragment, f, parent) {
  let mapped = [];
  for (let i = 0; i < fragment.childCount; i++) {
    let child = fragment.child(i);
    if (child.content.size) child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline) child = f(child, parent, i);
    mapped.push(child);
  }
  return import_prosemirror_model.Fragment.fromArray(mapped);
}
var AddMarkStep = class _AddMarkStep extends Step {
  /**
  Create a mark step.
  */
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to),
      $from = doc.resolve(this.from);
    let parent = $from.node($from.sharedDepth(this.to));
    let slice = new import_prosemirror_model.Slice(mapFragment(oldSlice.content, (node, parent2) => {
      if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type)) return node;
      return node.mark(this.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) return null;
    return new _AddMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new _AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new _AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = class _RemoveMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to);
    let slice = new import_prosemirror_model.Slice(mapFragment(oldSlice.content, node => {
      return node.mark(this.mark.removeFromSet(node.marks));
    }, doc), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos) return null;
    return new _RemoveMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from) return new _RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new _RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = class _AddNodeMarkStep extends Step {
  /**
  Create a node mark step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (node) {
      let newSet = this.mark.addToSet(node.marks);
      if (newSet.length == node.marks.length) {
        for (let i = 0; i < node.marks.length; i++) if (!node.marks[i].isInSet(newSet)) return new _AddNodeMarkStep(this.pos, node.marks[i]);
        return new _AddNodeMarkStep(this.pos, this.mark);
      }
    }
    return new RemoveNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AddNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "addNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new _AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = class _RemoveNodeMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node || !this.mark.isInSet(node.marks)) return this;
    return new AddNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _RemoveNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return {
      stepType: "removeNodeMark",
      pos: this.pos,
      mark: this.mark.toJSON()
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new _RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = class _ReplaceStep extends Step {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(from, to, slice, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && contentBetween(doc, this.from, this.to)) return StepResult.fail("Structure replace would overwrite content");
    return StepResult.fromReplace(doc, this.from, this.to, this.slice);
  }
  getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  }
  invert(doc) {
    return new _ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    if (from.deletedAcross && to.deletedAcross) return null;
    return new _ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
  }
  merge(other) {
    if (!(other instanceof _ReplaceStep) || other.structure || this.structure) return null;
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      let slice = this.slice.size + other.slice.size == 0 ? import_prosemirror_model.Slice.empty : new import_prosemirror_model.Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new _ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      let slice = this.slice.size + other.slice.size == 0 ? import_prosemirror_model.Slice.empty : new import_prosemirror_model.Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new _ReplaceStep(other.from, this.to, slice, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let json = {
      stepType: "replace",
      from: this.from,
      to: this.to
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new _ReplaceStep(json.from, json.to, import_prosemirror_model.Slice.fromJSON(schema, json.slice), !!json.structure);
  }
};
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = class _ReplaceAroundStep extends Step {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(from, to, gapFrom, gapTo, slice, insert, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to))) return StepResult.fail("Structure gap-replace would overwrite content");
    let gap = doc.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd) return StepResult.fail("Gap is not a flat range");
    let inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted) return StepResult.fail("Content does not fit in gap");
    return StepResult.fromReplace(doc, this.from, this.to, inserted);
  }
  getMap() {
    return new StepMap([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert]);
  }
  invert(doc) {
    let gap = this.gapTo - this.gapFrom;
    return new _ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1),
      to = mapping.mapResult(this.to, -1);
    let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
    let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
    if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos) return null;
    return new _ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size) json.slice = this.slice.toJSON();
    if (this.structure) json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new _ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, import_prosemirror_model.Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
  }
};
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
  let $from = doc.resolve(from),
    dist = to - from,
    depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    let next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf) return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
function addMark(tr, from, to, mark) {
  let removed = [],
    added = [];
  let removing, adding;
  tr.doc.nodesBetween(from, to, (node, pos, parent) => {
    if (!node.isInline) return;
    let marks = node.marks;
    if (!mark.isInSet(marks) && parent.type.allowsMarkType(mark.type)) {
      let start = Math.max(pos, from),
        end = Math.min(pos + node.nodeSize, to);
      let newSet = mark.addToSet(marks);
      for (let i = 0; i < marks.length; i++) {
        if (!marks[i].isInSet(newSet)) {
          if (removing && removing.to == start && removing.mark.eq(marks[i])) removing.to = end;else removed.push(removing = new RemoveMarkStep(start, end, marks[i]));
        }
      }
      if (adding && adding.to == start) adding.to = end;else added.push(adding = new AddMarkStep(start, end, mark));
    }
  });
  removed.forEach(s => tr.step(s));
  added.forEach(s => tr.step(s));
}
function removeMark(tr, from, to, mark) {
  let matched = [],
    step = 0;
  tr.doc.nodesBetween(from, to, (node, pos) => {
    if (!node.isInline) return;
    step++;
    let toRemove = null;
    if (mark instanceof import_prosemirror_model.MarkType) {
      let set = node.marks,
        found;
      while (found = mark.isInSet(set)) {
        (toRemove || (toRemove = [])).push(found);
        set = found.removeFromSet(set);
      }
    } else if (mark) {
      if (mark.isInSet(node.marks)) toRemove = [mark];
    } else {
      toRemove = node.marks;
    }
    if (toRemove && toRemove.length) {
      let end = Math.min(pos + node.nodeSize, to);
      for (let i = 0; i < toRemove.length; i++) {
        let style = toRemove[i],
          found;
        for (let j = 0; j < matched.length; j++) {
          let m = matched[j];
          if (m.step == step - 1 && style.eq(matched[j].style)) found = m;
        }
        if (found) {
          found.to = end;
          found.step = step;
        } else {
          matched.push({
            style,
            from: Math.max(pos, from),
            to: end,
            step
          });
        }
      }
    }
  });
  matched.forEach(m => tr.step(new RemoveMarkStep(m.from, m.to, m.style)));
}
function clearIncompatible(tr, pos, parentType, match = parentType.contentMatch, clearNewlines = true) {
  let node = tr.doc.nodeAt(pos);
  let replSteps = [],
    cur = pos + 1;
  for (let i = 0; i < node.childCount; i++) {
    let child = node.child(i),
      end = cur + child.nodeSize;
    let allowed = match.matchType(child.type);
    if (!allowed) {
      replSteps.push(new ReplaceStep(cur, end, import_prosemirror_model.Slice.empty));
    } else {
      match = allowed;
      for (let j = 0; j < child.marks.length; j++) if (!parentType.allowsMarkType(child.marks[j].type)) tr.step(new RemoveMarkStep(cur, end, child.marks[j]));
      if (clearNewlines && child.isText && parentType.whitespace != "pre") {
        let m,
          newline = /\r?\n|\r/g,
          slice;
        while (m = newline.exec(child.text)) {
          if (!slice) slice = new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(parentType.schema.text(" ", parentType.allowedMarks(child.marks))), 0, 0);
          replSteps.push(new ReplaceStep(cur + m.index, cur + m.index + m[0].length, slice));
        }
      }
    }
    cur = end;
  }
  if (!match.validEnd) {
    let fill = match.fillBefore(import_prosemirror_model.Fragment.empty, true);
    tr.replace(cur, cur, new import_prosemirror_model.Slice(fill, 0, 0));
  }
  for (let i = replSteps.length - 1; i >= 0; i--) tr.step(replSteps[i]);
}
function canCut(node, start, end) {
  return (start == 0 || node.canReplace(start, node.childCount)) && (end == node.childCount || node.canReplace(0, end));
}
function liftTarget(range) {
  let parent = range.parent;
  let content = parent.content.cutByIndex(range.startIndex, range.endIndex);
  for (let depth = range.depth;; --depth) {
    let node = range.$from.node(depth);
    let index = range.$from.index(depth),
      endIndex = range.$to.indexAfter(depth);
    if (depth < range.depth && node.canReplace(index, endIndex, content)) return depth;
    if (depth == 0 || node.type.spec.isolating || !canCut(node, index, endIndex)) break;
  }
  return null;
}
function lift(tr, range, target) {
  let {
    $from,
    $to,
    depth
  } = range;
  let gapStart = $from.before(depth + 1),
    gapEnd = $to.after(depth + 1);
  let start = gapStart,
    end = gapEnd;
  let before = import_prosemirror_model.Fragment.empty,
    openStart = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $from.index(d) > 0) {
    splitting = true;
    before = import_prosemirror_model.Fragment.from($from.node(d).copy(before));
    openStart++;
  } else {
    start--;
  }
  let after = import_prosemirror_model.Fragment.empty,
    openEnd = 0;
  for (let d = depth, splitting = false; d > target; d--) if (splitting || $to.after(d + 1) < $to.end(d)) {
    splitting = true;
    after = import_prosemirror_model.Fragment.from($to.node(d).copy(after));
    openEnd++;
  } else {
    end++;
  }
  tr.step(new ReplaceAroundStep(start, end, gapStart, gapEnd, new import_prosemirror_model.Slice(before.append(after), openStart, openEnd), before.size - openStart, true));
}
function findWrapping(range, nodeType, attrs = null, innerRange = range) {
  let around = findWrappingOutside(range, nodeType);
  let inner = around && findWrappingInside(innerRange, nodeType);
  if (!inner) return null;
  return around.map(withAttrs).concat({
    type: nodeType,
    attrs
  }).concat(inner.map(withAttrs));
}
function withAttrs(type) {
  return {
    type,
    attrs: null
  };
}
function findWrappingOutside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let around = parent.contentMatchAt(startIndex).findWrapping(type);
  if (!around) return null;
  let outer = around.length ? around[0] : type;
  return parent.canReplaceWith(startIndex, endIndex, outer) ? around : null;
}
function findWrappingInside(range, type) {
  let {
    parent,
    startIndex,
    endIndex
  } = range;
  let inner = parent.child(startIndex);
  let inside = type.contentMatch.findWrapping(inner.type);
  if (!inside) return null;
  let lastType = inside.length ? inside[inside.length - 1] : type;
  let innerMatch = lastType.contentMatch;
  for (let i = startIndex; innerMatch && i < endIndex; i++) innerMatch = innerMatch.matchType(parent.child(i).type);
  if (!innerMatch || !innerMatch.validEnd) return null;
  return inside;
}
function wrap(tr, range, wrappers) {
  let content = import_prosemirror_model.Fragment.empty;
  for (let i = wrappers.length - 1; i >= 0; i--) {
    if (content.size) {
      let match = wrappers[i].type.contentMatch.matchFragment(content);
      if (!match || !match.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    content = import_prosemirror_model.Fragment.from(wrappers[i].type.create(wrappers[i].attrs, content));
  }
  let start = range.start,
    end = range.end;
  tr.step(new ReplaceAroundStep(start, end, start, end, new import_prosemirror_model.Slice(content, 0, 0), wrappers.length, true));
}
function setBlockType(tr, from, to, type, attrs) {
  if (!type.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
  let mapFrom = tr.steps.length;
  tr.doc.nodesBetween(from, to, (node, pos) => {
    let attrsHere = typeof attrs == "function" ? attrs(node) : attrs;
    if (node.isTextblock && !node.hasMarkup(type, attrsHere) && canChangeType(tr.doc, tr.mapping.slice(mapFrom).map(pos), type)) {
      let convertNewlines = null;
      if (type.schema.linebreakReplacement) {
        let pre = type.whitespace == "pre",
          supportLinebreak = !!type.contentMatch.matchType(type.schema.linebreakReplacement);
        if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
      }
      if (convertNewlines === false) replaceLinebreaks(tr, node, pos, mapFrom);
      clearIncompatible(tr, tr.mapping.slice(mapFrom).map(pos, 1), type, void 0, convertNewlines === null);
      let mapping = tr.mapping.slice(mapFrom);
      let startM = mapping.map(pos, 1),
        endM = mapping.map(pos + node.nodeSize, 1);
      tr.step(new ReplaceAroundStep(startM, endM, startM + 1, endM - 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(type.create(attrsHere, null, node.marks)), 0, 0), 1, true));
      if (convertNewlines === true) replaceNewlines(tr, node, pos, mapFrom);
      return false;
    }
  });
}
function replaceNewlines(tr, node, pos, mapFrom) {
  node.forEach((child, offset) => {
    if (child.isText) {
      let m,
        newline = /\r?\n|\r/g;
      while (m = newline.exec(child.text)) {
        let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset + m.index);
        tr.replaceWith(start, start + 1, node.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function replaceLinebreaks(tr, node, pos, mapFrom) {
  node.forEach((child, offset) => {
    if (child.type == child.type.schema.linebreakReplacement) {
      let start = tr.mapping.slice(mapFrom).map(pos + 1 + offset);
      tr.replaceWith(start, start + 1, node.type.schema.text("\n"));
    }
  });
}
function canChangeType(doc, pos, type) {
  let $pos = doc.resolve(pos),
    index = $pos.index();
  return $pos.parent.canReplaceWith(index, index + 1, type);
}
function setNodeMarkup(tr, pos, type, attrs, marks) {
  let node = tr.doc.nodeAt(pos);
  if (!node) throw new RangeError("No node at given position");
  if (!type) type = node.type;
  let newNode = type.create(attrs, null, marks || node.marks);
  if (node.isLeaf) return tr.replaceWith(pos, pos + node.nodeSize, newNode);
  if (!type.validContent(node.content)) throw new RangeError("Invalid content for node type " + type.name);
  tr.step(new ReplaceAroundStep(pos, pos + node.nodeSize, pos + 1, pos + node.nodeSize - 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(newNode), 0, 0), 1, true));
}
function canSplit(doc, pos, depth = 1, typesAfter) {
  let $pos = doc.resolve(pos),
    base = $pos.depth - depth;
  let innerType = typesAfter && typesAfter[typesAfter.length - 1] || $pos.parent;
  if (base < 0 || $pos.parent.type.spec.isolating || !$pos.parent.canReplace($pos.index(), $pos.parent.childCount) || !innerType.type.validContent($pos.parent.content.cutByIndex($pos.index(), $pos.parent.childCount))) return false;
  for (let d = $pos.depth - 1, i = depth - 2; d > base; d--, i--) {
    let node = $pos.node(d),
      index2 = $pos.index(d);
    if (node.type.spec.isolating) return false;
    let rest = node.content.cutByIndex(index2, node.childCount);
    let overrideChild = typesAfter && typesAfter[i + 1];
    if (overrideChild) rest = rest.replaceChild(0, overrideChild.type.create(overrideChild.attrs));
    let after = typesAfter && typesAfter[i] || node;
    if (!node.canReplace(index2 + 1, node.childCount) || !after.type.validContent(rest)) return false;
  }
  let index = $pos.indexAfter(base);
  let baseType = typesAfter && typesAfter[0];
  return $pos.node(base).canReplaceWith(index, index, baseType ? baseType.type : $pos.node(base + 1).type);
}
function split(tr, pos, depth = 1, typesAfter) {
  let $pos = tr.doc.resolve(pos),
    before = import_prosemirror_model.Fragment.empty,
    after = import_prosemirror_model.Fragment.empty;
  for (let d = $pos.depth, e = $pos.depth - depth, i = depth - 1; d > e; d--, i--) {
    before = import_prosemirror_model.Fragment.from($pos.node(d).copy(before));
    let typeAfter = typesAfter && typesAfter[i];
    after = import_prosemirror_model.Fragment.from(typeAfter ? typeAfter.type.create(typeAfter.attrs, after) : $pos.node(d).copy(after));
  }
  tr.step(new ReplaceStep(pos, pos, new import_prosemirror_model.Slice(before.append(after), depth, depth), true));
}
function canJoin(doc, pos) {
  let $pos = doc.resolve(pos),
    index = $pos.index();
  return joinable($pos.nodeBefore, $pos.nodeAfter) && $pos.parent.canReplace(index, index + 1);
}
function canAppendWithSubstitutedLinebreaks(a, b) {
  if (!b.content.size) a.type.compatibleContent(b.type);
  let match = a.contentMatchAt(a.childCount);
  let {
    linebreakReplacement
  } = a.type.schema;
  for (let i = 0; i < b.childCount; i++) {
    let child = b.child(i);
    let type = child.type == linebreakReplacement ? a.type.schema.nodes.text : child.type;
    match = match.matchType(type);
    if (!match) return false;
    if (!a.type.allowsMarks(child.marks)) return false;
  }
  return match.validEnd;
}
function joinable(a, b) {
  return !!(a && b && !a.isLeaf && canAppendWithSubstitutedLinebreaks(a, b));
}
function joinPoint(doc, pos, dir = -1) {
  let $pos = doc.resolve(pos);
  for (let d = $pos.depth;; d--) {
    let before,
      after,
      index = $pos.index(d);
    if (d == $pos.depth) {
      before = $pos.nodeBefore;
      after = $pos.nodeAfter;
    } else if (dir > 0) {
      before = $pos.node(d + 1);
      index++;
      after = $pos.node(d).maybeChild(index);
    } else {
      before = $pos.node(d).maybeChild(index - 1);
      after = $pos.node(d + 1);
    }
    if (before && !before.isTextblock && joinable(before, after) && $pos.node(d).canReplace(index, index + 1)) return pos;
    if (d == 0) break;
    pos = dir < 0 ? $pos.before(d) : $pos.after(d);
  }
}
function join(tr, pos, depth) {
  let convertNewlines = null;
  let {
    linebreakReplacement
  } = tr.doc.type.schema;
  let $before = tr.doc.resolve(pos - depth),
    beforeType = $before.node().type;
  if (linebreakReplacement && beforeType.inlineContent) {
    let pre = beforeType.whitespace == "pre";
    let supportLinebreak = !!beforeType.contentMatch.matchType(linebreakReplacement);
    if (pre && !supportLinebreak) convertNewlines = false;else if (!pre && supportLinebreak) convertNewlines = true;
  }
  let mapFrom = tr.steps.length;
  if (convertNewlines === false) {
    let $after = tr.doc.resolve(pos + depth);
    replaceLinebreaks(tr, $after.node(), $after.before(), mapFrom);
  }
  if (beforeType.inlineContent) clearIncompatible(tr, pos + depth - 1, beforeType, $before.node().contentMatchAt($before.index()), convertNewlines == null);
  let mapping = tr.mapping.slice(mapFrom),
    start = mapping.map(pos - depth);
  tr.step(new ReplaceStep(start, mapping.map(pos + depth, -1), import_prosemirror_model.Slice.empty, true));
  if (convertNewlines === true) {
    let $full = tr.doc.resolve(start);
    replaceNewlines(tr, $full.node(), $full.before(), tr.steps.length);
  }
  return tr;
}
function insertPoint(doc, pos, nodeType) {
  let $pos = doc.resolve(pos);
  if ($pos.parent.canReplaceWith($pos.index(), $pos.index(), nodeType)) return pos;
  if ($pos.parentOffset == 0) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.index(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.before(d + 1);
    if (index > 0) return null;
  }
  if ($pos.parentOffset == $pos.parent.content.size) for (let d = $pos.depth - 1; d >= 0; d--) {
    let index = $pos.indexAfter(d);
    if ($pos.node(d).canReplaceWith(index, index, nodeType)) return $pos.after(d + 1);
    if (index < $pos.node(d).childCount) return null;
  }
  return null;
}
function dropPoint(doc, pos, slice) {
  let $pos = doc.resolve(pos);
  if (!slice.content.size) return pos;
  let content = slice.content;
  for (let i = 0; i < slice.openStart; i++) content = content.firstChild.content;
  for (let pass = 1; pass <= (slice.openStart == 0 && slice.size ? 2 : 1); pass++) {
    for (let d = $pos.depth; d >= 0; d--) {
      let bias = d == $pos.depth ? 0 : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2 ? -1 : 1;
      let insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      let parent = $pos.node(d),
        fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        let wrapping = parent.contentMatchAt(insertPos).findWrapping(content.firstChild.type);
        fits = wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) return bias == 0 ? $pos.pos : bias < 0 ? $pos.before(d + 1) : $pos.after(d + 1);
    }
  }
  return null;
}
function replaceStep(doc, from, to = from, slice = import_prosemirror_model.Slice.empty) {
  if (from == to && !slice.size) return null;
  let $from = doc.resolve(from),
    $to = doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return new ReplaceStep(from, to, slice);
  return new Fitter($from, $to, slice).fit();
}
function fitsTrivially($from, $to, slice) {
  return !slice.openStart && !slice.openEnd && $from.start() == $to.start() && $from.parent.canReplace($from.index(), $to.index(), slice.content);
}
var Fitter = class {
  constructor($from, $to, unplaced) {
    this.$from = $from;
    this.$to = $to;
    this.unplaced = unplaced;
    this.frontier = [];
    this.placed = import_prosemirror_model.Fragment.empty;
    for (let i = 0; i <= $from.depth; i++) {
      let node = $from.node(i);
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt($from.indexAfter(i))
      });
    }
    for (let i = $from.depth; i > 0; i--) this.placed = import_prosemirror_model.Fragment.from($from.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    while (this.unplaced.size) {
      let fit = this.findFittable();
      if (fit) this.placeNodes(fit);else this.openMore() || this.dropNode();
    }
    let moveInline = this.mustMoveInline(),
      placedSize = this.placed.size - this.depth - this.$from.depth;
    let $from = this.$from,
      $to = this.close(moveInline < 0 ? this.$to : $from.doc.resolve(moveInline));
    if (!$to) return null;
    let content = this.placed,
      openStart = $from.depth,
      openEnd = $to.depth;
    while (openStart && openEnd && content.childCount == 1) {
      content = content.firstChild.content;
      openStart--;
      openEnd--;
    }
    let slice = new import_prosemirror_model.Slice(content, openStart, openEnd);
    if (moveInline > -1) return new ReplaceAroundStep($from.pos, moveInline, this.$to.pos, this.$to.end(), slice, placedSize);
    if (slice.size || $from.pos != this.$to.pos) return new ReplaceStep($from.pos, $to.pos, slice);
    return null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let startDepth = this.unplaced.openStart;
    for (let cur = this.unplaced.content, d = 0, openEnd = this.unplaced.openEnd; d < startDepth; d++) {
      let node = cur.firstChild;
      if (cur.childCount > 1) openEnd = 0;
      if (node.type.spec.isolating && openEnd <= d) {
        startDepth = d;
        break;
      }
      cur = node.content;
    }
    for (let pass = 1; pass <= 2; pass++) {
      for (let sliceDepth = pass == 1 ? startDepth : this.unplaced.openStart; sliceDepth >= 0; sliceDepth--) {
        let fragment,
          parent = null;
        if (sliceDepth) {
          parent = contentAt(this.unplaced.content, sliceDepth - 1).firstChild;
          fragment = parent.content;
        } else {
          fragment = this.unplaced.content;
        }
        let first = fragment.firstChild;
        for (let frontierDepth = this.depth; frontierDepth >= 0; frontierDepth--) {
          let {
              type,
              match
            } = this.frontier[frontierDepth],
            wrap2,
            inject = null;
          if (pass == 1 && (first ? match.matchType(first.type) || (inject = match.fillBefore(import_prosemirror_model.Fragment.from(first), false)) : parent && type.compatibleContent(parent.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            inject
          };else if (pass == 2 && first && (wrap2 = match.findWrapping(first.type))) return {
            sliceDepth,
            frontierDepth,
            parent,
            wrap: wrap2
          };
          if (parent && match.matchType(parent.type)) break;
        }
      }
    }
  }
  openMore() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (!inner.childCount || inner.firstChild.isLeaf) return false;
    this.unplaced = new import_prosemirror_model.Slice(content, openStart + 1, Math.max(openEnd, inner.size + openStart >= content.size - openEnd ? openStart + 1 : 0));
    return true;
  }
  dropNode() {
    let {
      content,
      openStart,
      openEnd
    } = this.unplaced;
    let inner = contentAt(content, openStart);
    if (inner.childCount <= 1 && openStart > 0) {
      let openAtEnd = content.size - openStart <= openStart + inner.size;
      this.unplaced = new import_prosemirror_model.Slice(dropFromFragment(content, openStart - 1, 1), openStart - 1, openAtEnd ? openStart - 1 : openEnd);
    } else {
      this.unplaced = new import_prosemirror_model.Slice(dropFromFragment(content, openStart, 1), openStart, openEnd);
    }
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({
    sliceDepth,
    frontierDepth,
    parent,
    inject,
    wrap: wrap2
  }) {
    while (this.depth > frontierDepth) this.closeFrontierNode();
    if (wrap2) for (let i = 0; i < wrap2.length; i++) this.openFrontierNode(wrap2[i]);
    let slice = this.unplaced,
      fragment = parent ? parent.content : slice.content;
    let openStart = slice.openStart - sliceDepth;
    let taken = 0,
      add = [];
    let {
      match,
      type
    } = this.frontier[frontierDepth];
    if (inject) {
      for (let i = 0; i < inject.childCount; i++) add.push(inject.child(i));
      match = match.matchFragment(inject);
    }
    let openEndCount = fragment.size + sliceDepth - (slice.content.size - slice.openEnd);
    while (taken < fragment.childCount) {
      let next = fragment.child(taken),
        matches = match.matchType(next.type);
      if (!matches) break;
      taken++;
      if (taken > 1 || openStart == 0 || next.content.size) {
        match = matches;
        add.push(closeNodeStart(next.mark(type.allowedMarks(next.marks)), taken == 1 ? openStart : 0, taken == fragment.childCount ? openEndCount : -1));
      }
    }
    let toEnd = taken == fragment.childCount;
    if (!toEnd) openEndCount = -1;
    this.placed = addToFragment(this.placed, frontierDepth, import_prosemirror_model.Fragment.from(add));
    this.frontier[frontierDepth].match = match;
    if (toEnd && openEndCount < 0 && parent && parent.type == this.frontier[this.depth].type && this.frontier.length > 1) this.closeFrontierNode();
    for (let i = 0, cur = fragment; i < openEndCount; i++) {
      let node = cur.lastChild;
      this.frontier.push({
        type: node.type,
        match: node.contentMatchAt(node.childCount)
      });
      cur = node.content;
    }
    this.unplaced = !toEnd ? new import_prosemirror_model.Slice(dropFromFragment(slice.content, sliceDepth, taken), slice.openStart, slice.openEnd) : sliceDepth == 0 ? import_prosemirror_model.Slice.empty : new import_prosemirror_model.Slice(dropFromFragment(slice.content, sliceDepth - 1, 1), sliceDepth - 1, openEndCount < 0 ? slice.openEnd : sliceDepth - 1);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock) return -1;
    let top = this.frontier[this.depth],
      level;
    if (!top.type.isTextblock || !contentAfterFits(this.$to, this.$to.depth, top.type, top.match, false) || this.$to.depth == this.depth && (level = this.findCloseLevel(this.$to)) && level.depth == this.depth) return -1;
    let {
        depth
      } = this.$to,
      after = this.$to.after(depth);
    while (depth > 1 && after == this.$to.end(--depth)) ++after;
    return after;
  }
  findCloseLevel($to) {
    scan: for (let i = Math.min(this.depth, $to.depth); i >= 0; i--) {
      let {
        match,
        type
      } = this.frontier[i];
      let dropInner = i < $to.depth && $to.end(i + 1) == $to.pos + ($to.depth - (i + 1));
      let fit = contentAfterFits($to, i, type, match, dropInner);
      if (!fit) continue;
      for (let d = i - 1; d >= 0; d--) {
        let {
          match: match2,
          type: type2
        } = this.frontier[d];
        let matches = contentAfterFits($to, d, type2, match2, true);
        if (!matches || matches.childCount) continue scan;
      }
      return {
        depth: i,
        fit,
        move: dropInner ? $to.doc.resolve($to.after(i + 1)) : $to
      };
    }
  }
  close($to) {
    let close = this.findCloseLevel($to);
    if (!close) return null;
    while (this.depth > close.depth) this.closeFrontierNode();
    if (close.fit.childCount) this.placed = addToFragment(this.placed, close.depth, close.fit);
    $to = close.move;
    for (let d = close.depth + 1; d <= $to.depth; d++) {
      let node = $to.node(d),
        add = node.type.contentMatch.fillBefore(node.content, true, $to.index(d));
      this.openFrontierNode(node.type, node.attrs, add);
    }
    return $to;
  }
  openFrontierNode(type, attrs = null, content) {
    let top = this.frontier[this.depth];
    top.match = top.match.matchType(type);
    this.placed = addToFragment(this.placed, this.depth, import_prosemirror_model.Fragment.from(type.create(attrs, content)));
    this.frontier.push({
      type,
      match: type.contentMatch
    });
  }
  closeFrontierNode() {
    let open = this.frontier.pop();
    let add = open.match.fillBefore(import_prosemirror_model.Fragment.empty, true);
    if (add.childCount) this.placed = addToFragment(this.placed, this.frontier.length, add);
  }
};
function dropFromFragment(fragment, depth, count) {
  if (depth == 0) return fragment.cutByIndex(count, fragment.childCount);
  return fragment.replaceChild(0, fragment.firstChild.copy(dropFromFragment(fragment.firstChild.content, depth - 1, count)));
}
function addToFragment(fragment, depth, content) {
  if (depth == 0) return fragment.append(content);
  return fragment.replaceChild(fragment.childCount - 1, fragment.lastChild.copy(addToFragment(fragment.lastChild.content, depth - 1, content)));
}
function contentAt(fragment, depth) {
  for (let i = 0; i < depth; i++) fragment = fragment.firstChild.content;
  return fragment;
}
function closeNodeStart(node, openStart, openEnd) {
  if (openStart <= 0) return node;
  let frag = node.content;
  if (openStart > 1) frag = frag.replaceChild(0, closeNodeStart(frag.firstChild, openStart - 1, frag.childCount == 1 ? openEnd - 1 : 0));
  if (openStart > 0) {
    frag = node.type.contentMatch.fillBefore(frag).append(frag);
    if (openEnd <= 0) frag = frag.append(node.type.contentMatch.matchFragment(frag).fillBefore(import_prosemirror_model.Fragment.empty, true));
  }
  return node.copy(frag);
}
function contentAfterFits($to, depth, type, match, open) {
  let node = $to.node(depth),
    index = open ? $to.indexAfter(depth) : $to.index(depth);
  if (index == node.childCount && !type.compatibleContent(node.type)) return null;
  let fit = match.fillBefore(node.content, true, index);
  return fit && !invalidMarks(type, node.content, index) ? fit : null;
}
function invalidMarks(type, fragment, start) {
  for (let i = start; i < fragment.childCount; i++) if (!type.allowsMarks(fragment.child(i).marks)) return true;
  return false;
}
function definesContent(type) {
  return type.spec.defining || type.spec.definingForContent;
}
function replaceRange(tr, from, to, slice) {
  if (!slice.size) return tr.deleteRange(from, to);
  let $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  if (fitsTrivially($from, $to, slice)) return tr.step(new ReplaceStep(from, to, slice));
  let targetDepths = coveredDepths($from, tr.doc.resolve(to));
  if (targetDepths[targetDepths.length - 1] == 0) targetDepths.pop();
  let preferredTarget = -($from.depth + 1);
  targetDepths.unshift(preferredTarget);
  for (let d = $from.depth, pos = $from.pos - 1; d > 0; d--, pos--) {
    let spec = $from.node(d).type.spec;
    if (spec.defining || spec.definingAsContext || spec.isolating) break;
    if (targetDepths.indexOf(d) > -1) preferredTarget = d;else if ($from.before(d) == pos) targetDepths.splice(1, 0, -d);
  }
  let preferredTargetIndex = targetDepths.indexOf(preferredTarget);
  let leftNodes = [],
    preferredDepth = slice.openStart;
  for (let content = slice.content, i = 0;; i++) {
    let node = content.firstChild;
    leftNodes.push(node);
    if (i == slice.openStart) break;
    content = node.content;
  }
  for (let d = preferredDepth - 1; d >= 0; d--) {
    let leftNode = leftNodes[d],
      def = definesContent(leftNode.type);
    if (def && !leftNode.sameMarkup($from.node(Math.abs(preferredTarget) - 1))) preferredDepth = d;else if (def || !leftNode.type.isTextblock) break;
  }
  for (let j = slice.openStart; j >= 0; j--) {
    let openDepth = (j + preferredDepth + 1) % (slice.openStart + 1);
    let insert = leftNodes[openDepth];
    if (!insert) continue;
    for (let i = 0; i < targetDepths.length; i++) {
      let targetDepth = targetDepths[(i + preferredTargetIndex) % targetDepths.length],
        expand = true;
      if (targetDepth < 0) {
        expand = false;
        targetDepth = -targetDepth;
      }
      let parent = $from.node(targetDepth - 1),
        index = $from.index(targetDepth - 1);
      if (parent.canReplaceWith(index, index, insert.type, insert.marks)) return tr.replace($from.before(targetDepth), expand ? $to.after(targetDepth) : to, new import_prosemirror_model.Slice(closeFragment(slice.content, 0, slice.openStart, openDepth), openDepth, slice.openEnd));
    }
  }
  let startSteps = tr.steps.length;
  for (let i = targetDepths.length - 1; i >= 0; i--) {
    tr.replace(from, to, slice);
    if (tr.steps.length > startSteps) break;
    let depth = targetDepths[i];
    if (depth < 0) continue;
    from = $from.before(depth);
    to = $to.after(depth);
  }
}
function closeFragment(fragment, depth, oldOpen, newOpen, parent) {
  if (depth < oldOpen) {
    let first = fragment.firstChild;
    fragment = fragment.replaceChild(0, first.copy(closeFragment(first.content, depth + 1, oldOpen, newOpen, first)));
  }
  if (depth > newOpen) {
    let match = parent.contentMatchAt(0);
    let start = match.fillBefore(fragment).append(fragment);
    fragment = start.append(match.matchFragment(start).fillBefore(import_prosemirror_model.Fragment.empty, true));
  }
  return fragment;
}
function replaceRangeWith(tr, from, to, node) {
  if (!node.isInline && from == to && tr.doc.resolve(from).parent.content.size) {
    let point = insertPoint(tr.doc, from, node.type);
    if (point != null) from = to = point;
  }
  tr.replaceRange(from, to, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(node), 0, 0));
}
function deleteRange(tr, from, to) {
  let $from = tr.doc.resolve(from),
    $to = tr.doc.resolve(to);
  let covered = coveredDepths($from, $to);
  for (let i = 0; i < covered.length; i++) {
    let depth = covered[i],
      last = i == covered.length - 1;
    if (last && depth == 0 || $from.node(depth).type.contentMatch.validEnd) return tr.delete($from.start(depth), $to.end(depth));
    if (depth > 0 && (last || $from.node(depth - 1).canReplace($from.index(depth - 1), $to.indexAfter(depth - 1)))) return tr.delete($from.before(depth), $to.after(depth));
  }
  for (let d = 1; d <= $from.depth && d <= $to.depth; d++) {
    if (from - $from.start(d) == $from.depth - d && to > $from.end(d) && $to.end(d) - to != $to.depth - d && $from.start(d - 1) == $to.start(d - 1) && $from.node(d - 1).canReplace($from.index(d - 1), $to.index(d - 1))) return tr.delete($from.before(d), to);
  }
  tr.delete(from, to);
}
function coveredDepths($from, $to) {
  let result = [],
    minDepth = Math.min($from.depth, $to.depth);
  for (let d = minDepth; d >= 0; d--) {
    let start = $from.start(d);
    if (start < $from.pos - ($from.depth - d) || $to.end(d) > $to.pos + ($to.depth - d) || $from.node(d).type.spec.isolating || $to.node(d).type.spec.isolating) break;
    if (start == $to.start(d) || d == $from.depth && d == $to.depth && $from.parent.inlineContent && $to.parent.inlineContent && d && $to.start(d - 1) == start - 1) result.push(d);
  }
  return result;
}
var AttrStep = class _AttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(pos, attr, value) {
    super();
    this.pos = pos;
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node) return StepResult.fail("No node at attribute step's position");
    let attrs = /* @__PURE__ */Object.create(null);
    for (let name in node.attrs) attrs[name] = node.attrs[name];
    attrs[this.attr] = this.value;
    let updated = node.type.create(attrs, null, node.marks);
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new _AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AttrStep(pos.pos, this.attr, this.value);
  }
  toJSON() {
    return {
      stepType: "attr",
      pos: this.pos,
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number" || typeof json.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _AttrStep(json.pos, json.attr, json.value);
  }
};
Step.jsonID("attr", AttrStep);
var DocAttrStep = class _DocAttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(attr, value) {
    super();
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let attrs = /* @__PURE__ */Object.create(null);
    for (let name in doc.attrs) attrs[name] = doc.attrs[name];
    attrs[this.attr] = this.value;
    let updated = doc.type.create(attrs, doc.content, doc.marks);
    return StepResult.ok(updated);
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new _DocAttrStep(this.attr, doc.attrs[this.attr]);
  }
  map(mapping) {
    return this;
  }
  toJSON() {
    return {
      stepType: "docAttr",
      attr: this.attr,
      value: this.value
    };
  }
  static fromJSON(schema, json) {
    if (typeof json.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new _DocAttrStep(json.attr, json.value);
  }
};
Step.jsonID("docAttr", DocAttrStep);
var TransformError = class extends Error {};
TransformError = function TransformError2(message) {
  let err = Error.call(this, message);
  err.__proto__ = TransformError2.prototype;
  return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";
var Transform = class {
  /**
  Create a transform that starts with the given document.
  */
  constructor(doc) {
    this.doc = doc;
    this.steps = [];
    this.docs = [];
    this.mapping = new Mapping();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(step) {
    let result = this.maybeStep(step);
    if (result.failed) throw new TransformError(result.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(step) {
    let result = step.apply(this.doc);
    if (!result.failed) this.addStep(step, result.doc);
    return result;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(step, doc) {
    this.docs.push(this.doc);
    this.steps.push(step);
    this.mapping.appendMap(step.getMap());
    this.doc = doc;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(from, to = from, slice = import_prosemirror_model.Slice.empty) {
    let step = replaceStep(this.doc, from, to, slice);
    if (step) this.step(step);
    return this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(from, to, content) {
    return this.replace(from, to, new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(content), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(from, to) {
    return this.replace(from, to, import_prosemirror_model.Slice.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(pos, content) {
    return this.replaceWith(pos, pos, content);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(from, to, slice) {
    replaceRange(this, from, to, slice);
    return this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(from, to, node) {
    replaceRangeWith(this, from, to, node);
    return this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(from, to) {
    deleteRange(this, from, to);
    return this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(range, target) {
    lift(this, range, target);
    return this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(pos, depth = 1) {
    join(this, pos, depth);
    return this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(range, wrappers) {
    wrap(this, range, wrappers);
    return this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(from, to = from, type, attrs = null) {
    setBlockType(this, from, to, type, attrs);
    return this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(pos, type, attrs = null, marks) {
    setNodeMarkup(this, pos, type, attrs, marks);
    return this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(pos, attr, value) {
    this.step(new AttrStep(pos, attr, value));
    return this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(attr, value) {
    this.step(new DocAttrStep(attr, value));
    return this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(pos, mark) {
    this.step(new AddNodeMarkStep(pos, mark));
    return this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(pos, mark) {
    let node = this.doc.nodeAt(pos);
    if (!node) throw new RangeError("No node at position " + pos);
    if (mark instanceof import_prosemirror_model.Mark) {
      if (mark.isInSet(node.marks)) this.step(new RemoveNodeMarkStep(pos, mark));
    } else {
      let set = node.marks,
        found,
        steps = [];
      while (found = mark.isInSet(set)) {
        steps.push(new RemoveNodeMarkStep(pos, found));
        set = found.removeFromSet(set);
      }
      for (let i = steps.length - 1; i >= 0; i--) this.step(steps[i]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(pos, depth = 1, typesAfter) {
    split(this, pos, depth, typesAfter);
    return this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(from, to, mark) {
    addMark(this, from, to, mark);
    return this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(from, to, mark) {
    removeMark(this, from, to, mark);
    return this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(pos, parentType, match) {
    clearIncompatible(this, pos, parentType, match);
    return this;
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci10cmFuc2Zvcm0uMS4xMC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLXRyYW5zZm9ybS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX3RyYW5zZm9ybV8xXzEwXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWRkTWFya1N0ZXAiLCJBZGROb2RlTWFya1N0ZXAiLCJBdHRyU3RlcCIsIkRvY0F0dHJTdGVwIiwiTWFwUmVzdWx0IiwiTWFwcGluZyIsIlJlbW92ZU1hcmtTdGVwIiwiUmVtb3ZlTm9kZU1hcmtTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJSZXBsYWNlU3RlcCIsIlN0ZXAiLCJTdGVwTWFwIiwiU3RlcFJlc3VsdCIsIlRyYW5zZm9ybSIsIlRyYW5zZm9ybUVycm9yIiwiY2FuSm9pbiIsImNhblNwbGl0IiwiZHJvcFBvaW50IiwiZmluZFdyYXBwaW5nIiwiaW5zZXJ0UG9pbnQiLCJqb2luUG9pbnQiLCJsaWZ0VGFyZ2V0IiwicmVwbGFjZVN0ZXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX21vZGVsIiwicmVxdWlyZSIsImxvd2VyMTYiLCJmYWN0b3IxNiIsIk1hdGgiLCJwb3ciLCJtYWtlUmVjb3ZlciIsImluZGV4Iiwib2Zmc2V0IiwicmVjb3ZlckluZGV4IiwidmFsdWUiLCJyZWNvdmVyT2Zmc2V0IiwiREVMX0JFRk9SRSIsIkRFTF9BRlRFUiIsIkRFTF9BQ1JPU1MiLCJERUxfU0lERSIsImNvbnN0cnVjdG9yIiwicG9zIiwiZGVsSW5mbyIsInJlY292ZXIiLCJkZWxldGVkIiwiZGVsZXRlZEJlZm9yZSIsImRlbGV0ZWRBZnRlciIsImRlbGV0ZWRBY3Jvc3MiLCJfU3RlcE1hcCIsInJhbmdlcyIsImludmVydGVkIiwibGVuZ3RoIiwiZW1wdHkiLCJkaWZmIiwiaSIsIm1hcFJlc3VsdCIsImFzc29jIiwiX21hcCIsIm1hcCIsInNpbXBsZSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJzdGFydCIsIm9sZFNpemUiLCJuZXdTaXplIiwiZW5kIiwic2lkZSIsInJlc3VsdCIsImRlbCIsInRvdWNoZXMiLCJmb3JFYWNoIiwiZiIsIm9sZFN0YXJ0IiwibmV3U3RhcnQiLCJpbnZlcnQiLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJuIiwiX01hcHBpbmciLCJtYXBzIiwibWlycm9yIiwiZnJvbSIsInRvIiwiX21hcHMiLCJvd25EYXRhIiwic2xpY2UiLCJhcHBlbmRNYXAiLCJtaXJyb3JzIiwicHVzaCIsInNldE1pcnJvciIsImFwcGVuZE1hcHBpbmciLCJtYXBwaW5nIiwic3RhcnRTaXplIiwibWlyciIsImdldE1pcnJvciIsIm0iLCJhcHBlbmRNYXBwaW5nSW52ZXJ0ZWQiLCJ0b3RhbFNpemUiLCJpbnZlcnNlIiwiY29yciIsInN0ZXBzQnlJRCIsIk9iamVjdCIsImNyZWF0ZSIsImdldE1hcCIsIm1lcmdlIiwib3RoZXIiLCJmcm9tSlNPTiIsInNjaGVtYSIsImpzb24iLCJzdGVwVHlwZSIsIlJhbmdlRXJyb3IiLCJ0eXBlIiwianNvbklEIiwiaWQiLCJzdGVwQ2xhc3MiLCJwcm90b3R5cGUiLCJfU3RlcFJlc3VsdCIsImRvYyIsImZhaWxlZCIsIm9rIiwiZmFpbCIsIm1lc3NhZ2UiLCJmcm9tUmVwbGFjZSIsInJlcGxhY2UiLCJlIiwiUmVwbGFjZUVycm9yIiwibWFwRnJhZ21lbnQiLCJmcmFnbWVudCIsInBhcmVudCIsIm1hcHBlZCIsImNoaWxkQ291bnQiLCJjaGlsZCIsImNvbnRlbnQiLCJzaXplIiwiY29weSIsImlzSW5saW5lIiwiRnJhZ21lbnQiLCJmcm9tQXJyYXkiLCJfQWRkTWFya1N0ZXAiLCJtYXJrIiwiYXBwbHkiLCJvbGRTbGljZSIsIiRmcm9tIiwicmVzb2x2ZSIsIm5vZGUiLCJzaGFyZWREZXB0aCIsIlNsaWNlIiwicGFyZW50MiIsImlzQXRvbSIsImFsbG93c01hcmtUeXBlIiwiYWRkVG9TZXQiLCJtYXJrcyIsIm9wZW5TdGFydCIsIm9wZW5FbmQiLCJlcSIsIm1pbiIsIm1heCIsInRvSlNPTiIsIm1hcmtGcm9tSlNPTiIsIl9SZW1vdmVNYXJrU3RlcCIsInJlbW92ZUZyb21TZXQiLCJfQWRkTm9kZU1hcmtTdGVwIiwibm9kZUF0IiwidXBkYXRlZCIsImF0dHJzIiwiaXNMZWFmIiwibmV3U2V0IiwiaXNJblNldCIsIl9SZW1vdmVOb2RlTWFya1N0ZXAiLCJfUmVwbGFjZVN0ZXAiLCJzdHJ1Y3R1cmUiLCJjb250ZW50QmV0d2VlbiIsImFwcGVuZCIsIl9SZXBsYWNlQXJvdW5kU3RlcCIsImdhcEZyb20iLCJnYXBUbyIsImluc2VydCIsImdhcCIsImluc2VydGVkIiwiaW5zZXJ0QXQiLCJyZW1vdmVCZXR3ZWVuIiwiZGlzdCIsImRlcHRoIiwiaW5kZXhBZnRlciIsIm5leHQiLCJtYXliZUNoaWxkIiwiZmlyc3RDaGlsZCIsImFkZE1hcmsiLCJ0ciIsInJlbW92ZWQiLCJhZGRlZCIsInJlbW92aW5nIiwiYWRkaW5nIiwibm9kZXNCZXR3ZWVuIiwibm9kZVNpemUiLCJzIiwic3RlcCIsInJlbW92ZU1hcmsiLCJtYXRjaGVkIiwidG9SZW1vdmUiLCJNYXJrVHlwZSIsInNldCIsImZvdW5kIiwic3R5bGUiLCJqIiwiY2xlYXJJbmNvbXBhdGlibGUiLCJwYXJlbnRUeXBlIiwibWF0Y2giLCJjb250ZW50TWF0Y2giLCJjbGVhck5ld2xpbmVzIiwicmVwbFN0ZXBzIiwiY3VyIiwiYWxsb3dlZCIsIm1hdGNoVHlwZSIsImlzVGV4dCIsIndoaXRlc3BhY2UiLCJuZXdsaW5lIiwiZXhlYyIsInRleHQiLCJhbGxvd2VkTWFya3MiLCJ2YWxpZEVuZCIsImZpbGwiLCJmaWxsQmVmb3JlIiwiY2FuQ3V0IiwiY2FuUmVwbGFjZSIsInJhbmdlIiwiY3V0QnlJbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIiR0byIsInNwZWMiLCJpc29sYXRpbmciLCJsaWZ0IiwidGFyZ2V0IiwiZ2FwU3RhcnQiLCJiZWZvcmUiLCJnYXBFbmQiLCJhZnRlciIsImQiLCJzcGxpdHRpbmciLCJub2RlVHlwZSIsImlubmVyUmFuZ2UiLCJhcm91bmQiLCJmaW5kV3JhcHBpbmdPdXRzaWRlIiwiaW5uZXIiLCJmaW5kV3JhcHBpbmdJbnNpZGUiLCJ3aXRoQXR0cnMiLCJjb25jYXQiLCJjb250ZW50TWF0Y2hBdCIsIm91dGVyIiwiY2FuUmVwbGFjZVdpdGgiLCJpbnNpZGUiLCJsYXN0VHlwZSIsImlubmVyTWF0Y2giLCJ3cmFwIiwid3JhcHBlcnMiLCJtYXRjaEZyYWdtZW50Iiwic2V0QmxvY2tUeXBlIiwiaXNUZXh0YmxvY2siLCJtYXBGcm9tIiwic3RlcHMiLCJhdHRyc0hlcmUiLCJoYXNNYXJrdXAiLCJjYW5DaGFuZ2VUeXBlIiwiY29udmVydE5ld2xpbmVzIiwibGluZWJyZWFrUmVwbGFjZW1lbnQiLCJwcmUiLCJzdXBwb3J0TGluZWJyZWFrIiwicmVwbGFjZUxpbmVicmVha3MiLCJzdGFydE0iLCJlbmRNIiwicmVwbGFjZU5ld2xpbmVzIiwicmVwbGFjZVdpdGgiLCIkcG9zIiwic2V0Tm9kZU1hcmt1cCIsIm5ld05vZGUiLCJ2YWxpZENvbnRlbnQiLCJuYW1lIiwidHlwZXNBZnRlciIsImJhc2UiLCJpbm5lclR5cGUiLCJpbmRleDIiLCJyZXN0Iiwib3ZlcnJpZGVDaGlsZCIsInJlcGxhY2VDaGlsZCIsImJhc2VUeXBlIiwic3BsaXQiLCJ0eXBlQWZ0ZXIiLCJqb2luYWJsZSIsIm5vZGVCZWZvcmUiLCJub2RlQWZ0ZXIiLCJjYW5BcHBlbmRXaXRoU3Vic3RpdHV0ZWRMaW5lYnJlYWtzIiwiYSIsImIiLCJjb21wYXRpYmxlQ29udGVudCIsIm5vZGVzIiwiYWxsb3dzTWFya3MiLCJkaXIiLCJqb2luIiwiJGJlZm9yZSIsImJlZm9yZVR5cGUiLCJpbmxpbmVDb250ZW50IiwiJGFmdGVyIiwiJGZ1bGwiLCJwYXJlbnRPZmZzZXQiLCJwYXNzIiwiYmlhcyIsImluc2VydFBvcyIsImZpdHMiLCJ3cmFwcGluZyIsImZpdHNUcml2aWFsbHkiLCJGaXR0ZXIiLCJmaXQiLCJ1bnBsYWNlZCIsImZyb250aWVyIiwicGxhY2VkIiwiZmluZEZpdHRhYmxlIiwicGxhY2VOb2RlcyIsIm9wZW5Nb3JlIiwiZHJvcE5vZGUiLCJtb3ZlSW5saW5lIiwibXVzdE1vdmVJbmxpbmUiLCJwbGFjZWRTaXplIiwiY2xvc2UiLCJzdGFydERlcHRoIiwic2xpY2VEZXB0aCIsImNvbnRlbnRBdCIsImZpcnN0IiwiZnJvbnRpZXJEZXB0aCIsIndyYXAyIiwiaW5qZWN0Iiwib3BlbkF0RW5kIiwiZHJvcEZyb21GcmFnbWVudCIsImNsb3NlRnJvbnRpZXJOb2RlIiwib3BlbkZyb250aWVyTm9kZSIsInRha2VuIiwiYWRkIiwib3BlbkVuZENvdW50IiwibWF0Y2hlcyIsImNsb3NlTm9kZVN0YXJ0IiwidG9FbmQiLCJhZGRUb0ZyYWdtZW50IiwibGFzdENoaWxkIiwidG9wIiwibGV2ZWwiLCJjb250ZW50QWZ0ZXJGaXRzIiwiZmluZENsb3NlTGV2ZWwiLCJzY2FuIiwiZHJvcElubmVyIiwibWF0Y2gyIiwidHlwZTIiLCJtb3ZlIiwib3BlbiIsInBvcCIsImNvdW50IiwiZnJhZyIsImludmFsaWRNYXJrcyIsImRlZmluZXNDb250ZW50IiwiZGVmaW5pbmciLCJkZWZpbmluZ0ZvckNvbnRlbnQiLCJyZXBsYWNlUmFuZ2UiLCJkZWxldGVSYW5nZSIsInRhcmdldERlcHRocyIsImNvdmVyZWREZXB0aHMiLCJwcmVmZXJyZWRUYXJnZXQiLCJ1bnNoaWZ0IiwiZGVmaW5pbmdBc0NvbnRleHQiLCJpbmRleE9mIiwic3BsaWNlIiwicHJlZmVycmVkVGFyZ2V0SW5kZXgiLCJsZWZ0Tm9kZXMiLCJwcmVmZXJyZWREZXB0aCIsImxlZnROb2RlIiwiZGVmIiwic2FtZU1hcmt1cCIsImFicyIsIm9wZW5EZXB0aCIsInRhcmdldERlcHRoIiwiZXhwYW5kIiwiY2xvc2VGcmFnbWVudCIsInN0YXJ0U3RlcHMiLCJvbGRPcGVuIiwibmV3T3BlbiIsInJlcGxhY2VSYW5nZVdpdGgiLCJwb2ludCIsImNvdmVyZWQiLCJsYXN0IiwiZGVsZXRlIiwibWluRGVwdGgiLCJfQXR0clN0ZXAiLCJhdHRyIiwiX0RvY0F0dHJTdGVwIiwiRXJyb3IiLCJUcmFuc2Zvcm1FcnJvcjIiLCJlcnIiLCJjYWxsIiwiX19wcm90b19fIiwiZG9jcyIsIm1heWJlU3RlcCIsImFkZFN0ZXAiLCJkb2NDaGFuZ2VkIiwic2V0Tm9kZUF0dHJpYnV0ZSIsInNldERvY0F0dHJpYnV0ZSIsImFkZE5vZGVNYXJrIiwicmVtb3ZlTm9kZU1hcmsiLCJNYXJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQ0FBQTtBQUFBQyxRQUFBLENBQUFELG9DQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEs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QyxVQUFBLENBQVcseUJBQXlCdEUsR0FBRztJQUNyRCxJQUFJbUcsSUFBQSxZQUFnQnBILHdCQUFBLENBQUE4WCxJQUFBLEVBQU07TUFDdEIsSUFBSTFRLElBQUEsQ0FBSzRCLE9BQUEsQ0FBUXZCLElBQUEsQ0FBS08sS0FBSyxHQUN2QixLQUFLNkMsSUFBQSxDQUFLLElBQUloTSxrQkFBQSxDQUFtQm9DLEdBQUEsRUFBS21HLElBQUksQ0FBQztJQUNuRCxPQUNLO01BQ0QsSUFBSThELEdBQUEsR0FBTXpELElBQUEsQ0FBS08sS0FBQTtRQUFPbUQsS0FBQTtRQUFPMEQsS0FBQSxHQUFRLEVBQUM7TUFDdEMsT0FBTzFELEtBQUEsR0FBUS9ELElBQUEsQ0FBSzRCLE9BQUEsQ0FBUWtDLEdBQUcsR0FBRztRQUM5QjJELEtBQUEsQ0FBTTVLLElBQUEsQ0FBSyxJQUFJcEYsa0JBQUEsQ0FBbUJvQyxHQUFBLEVBQUtrSyxLQUFLLENBQUM7UUFDN0NELEdBQUEsR0FBTUMsS0FBQSxDQUFNMUMsYUFBQSxDQUFjeUMsR0FBRztNQUNqQztNQUNBLFNBQVNwSixDQUFBLEdBQUkrTSxLQUFBLENBQU1sTixNQUFBLEdBQVMsR0FBR0csQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDbkMsS0FBSytJLElBQUEsQ0FBS2dFLEtBQUEsQ0FBTS9NLENBQUMsQ0FBQztJQUMxQjtJQUNBLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBUUF5TyxNQUFNdFAsR0FBQSxFQUFLOEksS0FBQSxHQUFRLEdBQUdnRyxVQUFBLEVBQVk7SUFDOUJRLEtBQUEsQ0FBTSxNQUFNdFAsR0FBQSxFQUFLOEksS0FBQSxFQUFPZ0csVUFBVTtJQUNsQyxPQUFPO0VBQ1g7RUFBQTtBQUFBO0FBQUE7RUFJQTNGLFFBQVExRyxJQUFBLEVBQU1DLEVBQUEsRUFBSXlELElBQUEsRUFBTTtJQUNwQmdELE9BQUEsQ0FBUSxNQUFNMUcsSUFBQSxFQUFNQyxFQUFBLEVBQUl5RCxJQUFJO0lBQzVCLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU9BMEQsV0FBV3BILElBQUEsRUFBTUMsRUFBQSxFQUFJeUQsSUFBQSxFQUFNO0lBQ3ZCMEQsVUFBQSxDQUFXLE1BQU1wSCxJQUFBLEVBQU1DLEVBQUEsRUFBSXlELElBQUk7SUFDL0IsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBT0FrRSxrQkFBa0JySyxHQUFBLEVBQUtzSyxVQUFBLEVBQVlDLEtBQUEsRUFBTztJQUN0Q0YsaUJBQUEsQ0FBa0IsTUFBTXJLLEdBQUEsRUFBS3NLLFVBQUEsRUFBWUMsS0FBSztJQUM5QyxPQUFPO0VBQ1g7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=