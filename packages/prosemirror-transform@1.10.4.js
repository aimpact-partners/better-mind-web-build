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

// .beyond/uimport/temp/prosemirror-transform.1.10.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLXRyYW5zZm9ybS4xLjEwLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItdHJhbnNmb3JtL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3JfdHJhbnNmb3JtXzFfMTBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJBZGRNYXJrU3RlcCIsIkFkZE5vZGVNYXJrU3RlcCIsIkF0dHJTdGVwIiwiRG9jQXR0clN0ZXAiLCJNYXBSZXN1bHQiLCJNYXBwaW5nIiwiUmVtb3ZlTWFya1N0ZXAiLCJSZW1vdmVOb2RlTWFya1N0ZXAiLCJSZXBsYWNlQXJvdW5kU3RlcCIsIlJlcGxhY2VTdGVwIiwiU3RlcCIsIlN0ZXBNYXAiLCJTdGVwUmVzdWx0IiwiVHJhbnNmb3JtIiwiVHJhbnNmb3JtRXJyb3IiLCJjYW5Kb2luIiwiY2FuU3BsaXQiLCJkcm9wUG9pbnQiLCJmaW5kV3JhcHBpbmciLCJpbnNlcnRQb2ludCIsImpvaW5Qb2ludCIsImxpZnRUYXJnZXQiLCJyZXBsYWNlU3RlcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcHJvc2VtaXJyb3JfbW9kZWwiLCJyZXF1aXJlIiwibG93ZXIxNiIsImZhY3RvcjE2IiwiTWF0aCIsInBvdyIsIm1ha2VSZWNvdmVyIiwiaW5kZXgiLCJvZmZzZXQiLCJyZWNvdmVySW5kZXgiLCJ2YWx1ZSIsInJlY292ZXJPZmZzZXQiLCJERUxfQkVGT1JFIiwiREVMX0FGVEVSIiwiREVMX0FDUk9TUyIsIkRFTF9TSURFIiwiY29uc3RydWN0b3IiLCJwb3MiLCJkZWxJbmZvIiwicmVjb3ZlciIsImRlbGV0ZWQiLCJkZWxldGVkQmVmb3JlIiwiZGVsZXRlZEFmdGVyIiwiZGVsZXRlZEFjcm9zcyIsIl9TdGVwTWFwIiwicmFuZ2VzIiwiaW52ZXJ0ZWQiLCJsZW5ndGgiLCJlbXB0eSIsImRpZmYiLCJpIiwibWFwUmVzdWx0IiwiYXNzb2MiLCJfbWFwIiwibWFwIiwic2ltcGxlIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsInN0YXJ0Iiwib2xkU2l6ZSIsIm5ld1NpemUiLCJlbmQiLCJzaWRlIiwicmVzdWx0IiwiZGVsIiwidG91Y2hlcyIsImZvckVhY2giLCJmIiwib2xkU3RhcnQiLCJuZXdTdGFydCIsImludmVydCIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm4iLCJfTWFwcGluZyIsIm1hcHMiLCJtaXJyb3IiLCJmcm9tIiwidG8iLCJfbWFwcyIsIm93bkRhdGEiLCJzbGljZSIsImFwcGVuZE1hcCIsIm1pcnJvcnMiLCJwdXNoIiwic2V0TWlycm9yIiwiYXBwZW5kTWFwcGluZyIsIm1hcHBpbmciLCJzdGFydFNpemUiLCJtaXJyIiwiZ2V0TWlycm9yIiwibSIsImFwcGVuZE1hcHBpbmdJbnZlcnRlZCIsInRvdGFsU2l6ZSIsImludmVyc2UiLCJjb3JyIiwic3RlcHNCeUlEIiwiT2JqZWN0IiwiY3JlYXRlIiwiZ2V0TWFwIiwibWVyZ2UiLCJvdGhlciIsImZyb21KU09OIiwic2NoZW1hIiwianNvbiIsInN0ZXBUeXBlIiwiUmFuZ2VFcnJvciIsInR5cGUiLCJqc29uSUQiLCJpZCIsInN0ZXBDbGFzcyIsInByb3RvdHlwZSIsIl9TdGVwUmVzdWx0IiwiZG9jIiwiZmFpbGVkIiwib2siLCJmYWlsIiwibWVzc2FnZSIsImZyb21SZXBsYWNlIiwicmVwbGFjZSIsImUiLCJSZXBsYWNlRXJyb3IiLCJtYXBGcmFnbWVudCIsImZyYWdtZW50IiwicGFyZW50IiwibWFwcGVkIiwiY2hpbGRDb3VudCIsImNoaWxkIiwiY29udGVudCIsInNpemUiLCJjb3B5IiwiaXNJbmxpbmUiLCJGcmFnbWVudCIsImZyb21BcnJheSIsIl9BZGRNYXJrU3RlcCIsIm1hcmsiLCJhcHBseSIsIm9sZFNsaWNlIiwiJGZyb20iLCJyZXNvbHZlIiwibm9kZSIsInNoYXJlZERlcHRoIiwiU2xpY2UiLCJwYXJlbnQyIiwiaXNBdG9tIiwiYWxsb3dzTWFya1R5cGUiLCJhZGRUb1NldCIsIm1hcmtzIiwib3BlblN0YXJ0Iiwib3BlbkVuZCIsImVxIiwibWluIiwibWF4IiwidG9KU09OIiwibWFya0Zyb21KU09OIiwiX1JlbW92ZU1hcmtTdGVwIiwicmVtb3ZlRnJvbVNldCIsIl9BZGROb2RlTWFya1N0ZXAiLCJub2RlQXQiLCJ1cGRhdGVkIiwiYXR0cnMiLCJpc0xlYWYiLCJuZXdTZXQiLCJpc0luU2V0IiwiX1JlbW92ZU5vZGVNYXJrU3RlcCIsIl9SZXBsYWNlU3RlcCIsInN0cnVjdHVyZSIsImNvbnRlbnRCZXR3ZWVuIiwiYXBwZW5kIiwiX1JlcGxhY2VBcm91bmRTdGVwIiwiZ2FwRnJvbSIsImdhcFRvIiwiaW5zZXJ0IiwiZ2FwIiwiaW5zZXJ0ZWQiLCJpbnNlcnRBdCIsInJlbW92ZUJldHdlZW4iLCJkaXN0IiwiZGVwdGgiLCJpbmRleEFmdGVyIiwibmV4dCIsIm1heWJlQ2hpbGQiLCJmaXJzdENoaWxkIiwiYWRkTWFyayIsInRyIiwicmVtb3ZlZCIsImFkZGVkIiwicmVtb3ZpbmciLCJhZGRpbmciLCJub2Rlc0JldHdlZW4iLCJub2RlU2l6ZSIsInMiLCJzdGVwIiwicmVtb3ZlTWFyayIsIm1hdGNoZWQiLCJ0b1JlbW92ZSIsIk1hcmtUeXBlIiwic2V0IiwiZm91bmQiLCJzdHlsZSIsImoiLCJjbGVhckluY29tcGF0aWJsZSIsInBhcmVudFR5cGUiLCJtYXRjaCIsImNvbnRlbnRNYXRjaCIsImNsZWFyTmV3bGluZXMiLCJyZXBsU3RlcHMiLCJjdXIiLCJhbGxvd2VkIiwibWF0Y2hUeXBlIiwiaXNUZXh0Iiwid2hpdGVzcGFjZSIsIm5ld2xpbmUiLCJleGVjIiwidGV4dCIsImFsbG93ZWRNYXJrcyIsInZhbGlkRW5kIiwiZmlsbCIsImZpbGxCZWZvcmUiLCJjYW5DdXQiLCJjYW5SZXBsYWNlIiwicmFuZ2UiLCJjdXRCeUluZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiJHRvIiwic3BlYyIsImlzb2xhdGluZyIsImxpZnQiLCJ0YXJnZXQiLCJnYXBTdGFydCIsImJlZm9yZSIsImdhcEVuZCIsImFmdGVyIiwiZCIsInNwbGl0dGluZyIsIm5vZGVUeXBlIiwiaW5uZXJSYW5nZSIsImFyb3VuZCIsImZpbmRXcmFwcGluZ091dHNpZGUiLCJpbm5lciIsImZpbmRXcmFwcGluZ0luc2lkZSIsIndpdGhBdHRycyIsImNvbmNhdCIsImNvbnRlbnRNYXRjaEF0Iiwib3V0ZXIiLCJjYW5SZXBsYWNlV2l0aCIsImluc2lkZSIsImxhc3RUeXBlIiwiaW5uZXJNYXRjaCIsIndyYXAiLCJ3cmFwcGVycyIsIm1hdGNoRnJhZ21lbnQiLCJzZXRCbG9ja1R5cGUiLCJpc1RleHRibG9jayIsIm1hcEZyb20iLCJzdGVwcyIsImF0dHJzSGVyZSIsImhhc01hcmt1cCIsImNhbkNoYW5nZVR5cGUiLCJjb252ZXJ0TmV3bGluZXMiLCJsaW5lYnJlYWtSZXBsYWNlbWVudCIsInByZSIsInN1cHBvcnRMaW5lYnJlYWsiLCJyZXBsYWNlTGluZWJyZWFrcyIsInN0YXJ0TSIsImVuZE0iLCJyZXBsYWNlTmV3bGluZXMiLCJyZXBsYWNlV2l0aCIsIiRwb3MiLCJzZXROb2RlTWFya3VwIiwibmV3Tm9kZSIsInZhbGlkQ29udGVudCIsIm5hbWUiLCJ0eXBlc0FmdGVyIiwiYmFzZSIsImlubmVyVHlwZSIsImluZGV4MiIsInJlc3QiLCJvdmVycmlkZUNoaWxkIiwicmVwbGFjZUNoaWxkIiwiYmFzZVR5cGUiLCJzcGxpdCIsInR5cGVBZnRlciIsImpvaW5hYmxlIiwibm9kZUJlZm9yZSIsIm5vZGVBZnRlciIsImNhbkFwcGVuZFdpdGhTdWJzdGl0dXRlZExpbmVicmVha3MiLCJhIiwiYiIsImNvbXBhdGlibGVDb250ZW50Iiwibm9kZXMiLCJhbGxvd3NNYXJrcyIsImRpciIsImpvaW4iLCIkYmVmb3JlIiwiYmVmb3JlVHlwZSIsImlubGluZUNvbnRlbnQiLCIkYWZ0ZXIiLCIkZnVsbCIsInBhcmVudE9mZnNldCIsInBhc3MiLCJiaWFzIiwiaW5zZXJ0UG9zIiwiZml0cyIsIndyYXBwaW5nIiwiZml0c1RyaXZpYWxseSIsIkZpdHRlciIsImZpdCIsInVucGxhY2VkIiwiZnJvbnRpZXIiLCJwbGFjZWQiLCJmaW5kRml0dGFibGUiLCJwbGFjZU5vZGVzIiwib3Blbk1vcmUiLCJkcm9wTm9kZSIsIm1vdmVJbmxpbmUiLCJtdXN0TW92ZUlubGluZSIsInBsYWNlZFNpemUiLCJjbG9zZSIsInN0YXJ0RGVwdGgiLCJzbGljZURlcHRoIiwiY29udGVudEF0IiwiZmlyc3QiLCJmcm9udGllckRlcHRoIiwid3JhcDIiLCJpbmplY3QiLCJvcGVuQXRFbmQiLCJkcm9wRnJvbUZyYWdtZW50IiwiY2xvc2VGcm9udGllck5vZGUiLCJvcGVuRnJvbnRpZXJOb2RlIiwidGFrZW4iLCJhZGQiLCJvcGVuRW5kQ291bnQiLCJtYXRjaGVzIiwiY2xvc2VOb2RlU3RhcnQiLCJ0b0VuZCIsImFkZFRvRnJhZ21lbnQiLCJsYXN0Q2hpbGQiLCJ0b3AiLCJsZXZlbCIsImNvbnRlbnRBZnRlckZpdHMiLCJmaW5kQ2xvc2VMZXZlbCIsInNjYW4iLCJkcm9wSW5uZXIiLCJtYXRjaDIiLCJ0eXBlMiIsIm1vdmUiLCJvcGVuIiwicG9wIiwiY291bnQiLCJmcmFnIiwiaW52YWxpZE1hcmtzIiwiZGVmaW5lc0NvbnRlbnQiLCJkZWZpbmluZyIsImRlZmluaW5nRm9yQ29udGVudCIsInJlcGxhY2VSYW5nZSIsImRlbGV0ZVJhbmdlIiwidGFyZ2V0RGVwdGhzIiwiY292ZXJlZERlcHRocyIsInByZWZlcnJlZFRhcmdldCIsInVuc2hpZnQiLCJkZWZpbmluZ0FzQ29udGV4dCIsImluZGV4T2YiLCJzcGxpY2UiLCJwcmVmZXJyZWRUYXJnZXRJbmRleCIsImxlZnROb2RlcyIsInByZWZlcnJlZERlcHRoIiwibGVmdE5vZGUiLCJkZWYiLCJzYW1lTWFya3VwIiwiYWJzIiwib3BlbkRlcHRoIiwidGFyZ2V0RGVwdGgiLCJleHBhbmQiLCJjbG9zZUZyYWdtZW50Iiwic3RhcnRTdGVwcyIsIm9sZE9wZW4iLCJuZXdPcGVuIiwicmVwbGFjZVJhbmdlV2l0aCIsInBvaW50IiwiY292ZXJlZCIsImxhc3QiLCJkZWxldGUiLCJtaW5EZXB0aCIsIl9BdHRyU3RlcCIsImF0dHIiLCJfRG9jQXR0clN0ZXAiLCJFcnJvciIsIlRyYW5zZm9ybUVycm9yMiIsImVyciIsImNhbGwiLCJfX3Byb3RvX18iLCJkb2NzIiwibWF5YmVTdGVwIiwiYWRkU3RlcCIsImRvY0NoYW5nZWQiLCJzZXROb2RlQXR0cmlidXRlIiwic2V0RG9jQXR0cmlidXRlIiwiYWRkTm9kZU1hcmsiLCJyZW1vdmVOb2RlTWFyayIsIk1hcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0NBQUE7RUFBQUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEs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SUFBSWxDLFVBQUEsQ0FBVyx5QkFBeUJ0RSxHQUFHO0lBQ3JELElBQUltRyxJQUFBLFlBQWdCcEgsd0JBQUEsQ0FBQThYLElBQUEsRUFBTTtNQUN0QixJQUFJMVEsSUFBQSxDQUFLNEIsT0FBQSxDQUFRdkIsSUFBQSxDQUFLTyxLQUFLLEdBQ3ZCLEtBQUs2QyxJQUFBLENBQUssSUFBSWhNLGtCQUFBLENBQW1Cb0MsR0FBQSxFQUFLbUcsSUFBSSxDQUFDO0lBQ25ELE9BQ0s7TUFDRCxJQUFJOEQsR0FBQSxHQUFNekQsSUFBQSxDQUFLTyxLQUFBO1FBQU9tRCxLQUFBO1FBQU8wRCxLQUFBLEdBQVEsRUFBQztNQUN0QyxPQUFPMUQsS0FBQSxHQUFRL0QsSUFBQSxDQUFLNEIsT0FBQSxDQUFRa0MsR0FBRyxHQUFHO1FBQzlCMkQsS0FBQSxDQUFNNUssSUFBQSxDQUFLLElBQUlwRixrQkFBQSxDQUFtQm9DLEdBQUEsRUFBS2tLLEtBQUssQ0FBQztRQUM3Q0QsR0FBQSxHQUFNQyxLQUFBLENBQU0xQyxhQUFBLENBQWN5QyxHQUFHO01BQ2pDO01BQ0EsU0FBU3BKLENBQUEsR0FBSStNLEtBQUEsQ0FBTWxOLE1BQUEsR0FBUyxHQUFHRyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUNuQyxLQUFLK0ksSUFBQSxDQUFLZ0UsS0FBQSxDQUFNL00sQ0FBQyxDQUFDO0lBQzFCO0lBQ0EsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFRQXlPLE1BQU10UCxHQUFBLEVBQUs4SSxLQUFBLEdBQVEsR0FBR2dHLFVBQUEsRUFBWTtJQUM5QlEsS0FBQSxDQUFNLE1BQU10UCxHQUFBLEVBQUs4SSxLQUFBLEVBQU9nRyxVQUFVO0lBQ2xDLE9BQU87RUFDWDtFQUFBO0FBQUE7QUFBQTtFQUlBM0YsUUFBUTFHLElBQUEsRUFBTUMsRUFBQSxFQUFJeUQsSUFBQSxFQUFNO0lBQ3BCZ0QsT0FBQSxDQUFRLE1BQU0xRyxJQUFBLEVBQU1DLEVBQUEsRUFBSXlELElBQUk7SUFDNUIsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBT0EwRCxXQUFXcEgsSUFBQSxFQUFNQyxFQUFBLEVBQUl5RCxJQUFBLEVBQU07SUFDdkIwRCxVQUFBLENBQVcsTUFBTXBILElBQUEsRUFBTUMsRUFBQSxFQUFJeUQsSUFBSTtJQUMvQixPQUFPO0VBQ1g7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFPQWtFLGtCQUFrQnJLLEdBQUEsRUFBS3NLLFVBQUEsRUFBWUMsS0FBQSxFQUFPO0lBQ3RDRixpQkFBQSxDQUFrQixNQUFNckssR0FBQSxFQUFLc0ssVUFBQSxFQUFZQyxLQUFLO0lBQzlDLE9BQU87RUFDWDtBQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==