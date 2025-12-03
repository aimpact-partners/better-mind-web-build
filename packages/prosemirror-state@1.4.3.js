System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep)],
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

// .beyond/uimport/temp/prosemirror-state.1.4.3.js
var prosemirror_state_1_4_3_exports = {};
__export(prosemirror_state_1_4_3_exports, {
  AllSelection: () => AllSelection,
  EditorState: () => EditorState,
  NodeSelection: () => NodeSelection,
  Plugin: () => Plugin,
  PluginKey: () => PluginKey,
  Selection: () => Selection,
  SelectionRange: () => SelectionRange,
  TextSelection: () => TextSelection,
  Transaction: () => Transaction
});
module.exports = __toCommonJS(prosemirror_state_1_4_3_exports);

// node_modules/prosemirror-state/dist/index.js
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var classesById = /* @__PURE__ */Object.create(null);
var Selection = class {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor($anchor, $head, ranges) {
    this.$anchor = $anchor;
    this.$head = $head;
    this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) if (ranges[i].$from.pos != ranges[i].$to.pos) return false;
    return true;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(tr, content = import_prosemirror_model.Slice.empty) {
    let lastNode = content.content.lastChild,
      lastParent = null;
    for (let i = 0; i < content.openEnd; i++) {
      lastParent = lastNode;
      lastNode = lastNode.lastChild;
    }
    let mapFrom = tr.steps.length,
      ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
          $from,
          $to
        } = ranges[i],
        mapping = tr.mapping.slice(mapFrom);
      tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? import_prosemirror_model.Slice.empty : content);
      if (i == 0) selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(tr, node) {
    let mapFrom = tr.steps.length,
      ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let {
          $from,
          $to
        } = ranges[i],
        mapping = tr.mapping.slice(mapFrom);
      let from = mapping.map($from.pos),
        to = mapping.map($to.pos);
      if (i) {
        tr.deleteRange(from, to);
      } else {
        tr.replaceRangeWith(from, to, node);
        selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
      }
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom($pos, dir, textOnly = false) {
    let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
    if (inner) return inner;
    for (let depth = $pos.depth - 1; depth >= 0; depth--) {
      let found = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
      if (found) return found;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near($pos, bias = 1) {
    return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(doc) {
    return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(doc) {
    return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(doc, json) {
    if (!json || !json.type) throw new RangeError("Invalid input for Selection.fromJSON");
    let cls = classesById[json.type];
    if (!cls) throw new RangeError(`No selection type ${json.type} defined`);
    return cls.fromJSON(doc, json);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(id, selectionClass) {
    if (id in classesById) throw new RangeError("Duplicate use of selection JSON ID " + id);
    classesById[id] = selectionClass;
    selectionClass.prototype.jsonID = id;
    return selectionClass;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return TextSelection.between(this.$anchor, this.$head).getBookmark();
  }
};
Selection.prototype.visible = true;
var SelectionRange = class {
  /**
  Create a range.
  */
  constructor($from, $to) {
    this.$from = $from;
    this.$to = $to;
  }
};
var warnedAboutTextSelection = false;
function checkTextSelection($pos) {
  if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
    warnedAboutTextSelection = true;
    console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
  }
}
var TextSelection = class _TextSelection extends Selection {
  /**
  Construct a text selection between the given points.
  */
  constructor($anchor, $head = $anchor) {
    checkTextSelection($anchor);
    checkTextSelection($head);
    super($anchor, $head);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(doc, mapping) {
    let $head = doc.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent) return Selection.near($head);
    let $anchor = doc.resolve(mapping.map(this.anchor));
    return new _TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
  }
  replace(tr, content = import_prosemirror_model.Slice.empty) {
    super.replace(tr, content);
    if (content == import_prosemirror_model.Slice.empty) {
      let marks = this.$from.marksAcross(this.$to);
      if (marks) tr.ensureMarks(marks);
    }
  }
  eq(other) {
    return other instanceof _TextSelection && other.anchor == this.anchor && other.head == this.head;
  }
  getBookmark() {
    return new TextBookmark(this.anchor, this.head);
  }
  toJSON() {
    return {
      type: "text",
      anchor: this.anchor,
      head: this.head
    };
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new _TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(doc, anchor, head = anchor) {
    let $anchor = doc.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between($anchor, $head, bias) {
    let dPos = $anchor.pos - $head.pos;
    if (!bias || dPos) bias = dPos >= 0 ? 1 : -1;
    if (!$head.parent.inlineContent) {
      let found = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
      if (found) $head = found.$head;else return Selection.near($head, bias);
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
        if ($anchor.pos < $head.pos != dPos < 0) $anchor = $head;
      }
    }
    return new _TextSelection($anchor, $head);
  }
};
Selection.jsonID("text", TextSelection);
var TextBookmark = class _TextBookmark {
  constructor(anchor, head) {
    this.anchor = anchor;
    this.head = head;
  }
  map(mapping) {
    return new _TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
  }
  resolve(doc) {
    return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
  }
};
var NodeSelection = class _NodeSelection extends Selection {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor($pos) {
    let node = $pos.nodeAfter;
    let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    super($pos, $end);
    this.node = node;
  }
  map(doc, mapping) {
    let {
      deleted,
      pos
    } = mapping.mapResult(this.anchor);
    let $pos = doc.resolve(pos);
    if (deleted) return Selection.near($pos);
    return new _NodeSelection($pos);
  }
  content() {
    return new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(this.node), 0, 0);
  }
  eq(other) {
    return other instanceof _NodeSelection && other.anchor == this.anchor;
  }
  toJSON() {
    return {
      type: "node",
      anchor: this.anchor
    };
  }
  getBookmark() {
    return new NodeBookmark(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new _NodeSelection(doc.resolve(json.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(doc, from) {
    return new _NodeSelection(doc.resolve(from));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(node) {
    return !node.isText && node.type.spec.selectable !== false;
  }
};
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
var NodeBookmark = class _NodeBookmark {
  constructor(anchor) {
    this.anchor = anchor;
  }
  map(mapping) {
    let {
      deleted,
      pos
    } = mapping.mapResult(this.anchor);
    return deleted ? new TextBookmark(pos, pos) : new _NodeBookmark(pos);
  }
  resolve(doc) {
    let $pos = doc.resolve(this.anchor),
      node = $pos.nodeAfter;
    if (node && NodeSelection.isSelectable(node)) return new NodeSelection($pos);
    return Selection.near($pos);
  }
};
var AllSelection = class _AllSelection extends Selection {
  /**
  Create an all-selection over the given document.
  */
  constructor(doc) {
    super(doc.resolve(0), doc.resolve(doc.content.size));
  }
  replace(tr, content = import_prosemirror_model.Slice.empty) {
    if (content == import_prosemirror_model.Slice.empty) {
      tr.delete(0, tr.doc.content.size);
      let sel = Selection.atStart(tr.doc);
      if (!sel.eq(tr.selection)) tr.setSelection(sel);
    } else {
      super.replace(tr, content);
    }
  }
  toJSON() {
    return {
      type: "all"
    };
  }
  /**
  @internal
  */
  static fromJSON(doc) {
    return new _AllSelection(doc);
  }
  map(doc) {
    return new _AllSelection(doc);
  }
  eq(other) {
    return other instanceof _AllSelection;
  }
  getBookmark() {
    return AllBookmark;
  }
};
Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map() {
    return this;
  },
  resolve(doc) {
    return new AllSelection(doc);
  }
};
function findSelectionIn(doc, node, pos, index, dir, text = false) {
  if (node.inlineContent) return TextSelection.create(doc, pos);
  for (let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    let child = node.child(i);
    if (!child.isAtom) {
      let inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
      if (inner) return inner;
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
    }
    pos += child.nodeSize * dir;
  }
  return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
  let last = tr.steps.length - 1;
  if (last < startLen) return;
  let step = tr.steps[last];
  if (!(step instanceof import_prosemirror_transform.ReplaceStep || step instanceof import_prosemirror_transform.ReplaceAroundStep)) return;
  let map = tr.mapping.maps[last],
    end;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end == null) end = newTo;
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
var UPDATED_SEL = 1,
  UPDATED_MARKS = 2,
  UPDATED_SCROLL = 4;
var Transaction = class extends import_prosemirror_transform.Transform {
  /**
  @internal
  */
  constructor(state) {
    super(state.doc);
    this.curSelectionFor = 0;
    this.updated = 0;
    this.meta = /* @__PURE__ */Object.create(null);
    this.time = Date.now();
    this.curSelection = state.selection;
    this.storedMarks = state.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    if (this.curSelectionFor < this.steps.length) {
      this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor));
      this.curSelectionFor = this.steps.length;
    }
    return this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(selection) {
    if (selection.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
    this.curSelection = selection;
    this.curSelectionFor = this.steps.length;
    this.updated = (this.updated | UPDATED_SEL) & ~UPDATED_MARKS;
    this.storedMarks = null;
    return this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & UPDATED_SEL) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(marks) {
    this.storedMarks = marks;
    this.updated |= UPDATED_MARKS;
    return this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(marks) {
    if (!import_prosemirror_model.Mark.sameSet(this.storedMarks || this.selection.$from.marks(), marks)) this.setStoredMarks(marks);
    return this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(mark) {
    return this.ensureMarks(mark.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(mark) {
    return this.ensureMarks(mark.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & UPDATED_MARKS) > 0;
  }
  /**
  @internal
  */
  addStep(step, doc) {
    super.addStep(step, doc);
    this.updated = this.updated & ~UPDATED_MARKS;
    this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(time) {
    this.time = time;
    return this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(slice) {
    this.selection.replace(this, slice);
    return this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(node, inheritMarks = true) {
    let selection = this.selection;
    if (inheritMarks) node = node.mark(this.storedMarks || (selection.empty ? selection.$from.marks() : selection.$from.marksAcross(selection.$to) || import_prosemirror_model.Mark.none));
    selection.replaceWith(this, node);
    return this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    this.selection.replace(this);
    return this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(text, from, to) {
    let schema = this.doc.type.schema;
    if (from == null) {
      if (!text) return this.deleteSelection();
      return this.replaceSelectionWith(schema.text(text), true);
    } else {
      if (to == null) to = from;
      to = to == null ? from : to;
      if (!text) return this.deleteRange(from, to);
      let marks = this.storedMarks;
      if (!marks) {
        let $from = this.doc.resolve(from);
        marks = to == from ? $from.marks() : $from.marksAcross(this.doc.resolve(to));
      }
      this.replaceRangeWith(from, to, schema.text(text, marks));
      if (!this.selection.empty) this.setSelection(Selection.near(this.selection.$to));
      return this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(key, value) {
    this.meta[typeof key == "string" ? key : key.key] = value;
    return this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(key) {
    return this.meta[typeof key == "string" ? key : key.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let _ in this.meta) return false;
    return true;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    this.updated |= UPDATED_SCROLL;
    return this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & UPDATED_SCROLL) > 0;
  }
};
function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}
var FieldDesc = class {
  constructor(name, desc, self) {
    this.name = name;
    this.init = bind(desc.init, self);
    this.apply = bind(desc.apply, self);
  }
};
var baseFields = [new FieldDesc("doc", {
  init(config) {
    return config.doc || config.schema.topNodeType.createAndFill();
  },
  apply(tr) {
    return tr.doc;
  }
}), new FieldDesc("selection", {
  init(config, instance) {
    return config.selection || Selection.atStart(instance.doc);
  },
  apply(tr) {
    return tr.selection;
  }
}), new FieldDesc("storedMarks", {
  init(config) {
    return config.storedMarks || null;
  },
  apply(tr, _marks, _old, state) {
    return state.selection.$cursor ? tr.storedMarks : null;
  }
}), new FieldDesc("scrollToSelection", {
  init() {
    return 0;
  },
  apply(tr, prev) {
    return tr.scrolledIntoView ? prev + 1 : prev;
  }
})];
var Configuration = class {
  constructor(schema, plugins) {
    this.schema = schema;
    this.plugins = [];
    this.pluginsByKey = /* @__PURE__ */Object.create(null);
    this.fields = baseFields.slice();
    if (plugins) plugins.forEach(plugin => {
      if (this.pluginsByKey[plugin.key]) throw new RangeError("Adding different instances of a keyed plugin (" + plugin.key + ")");
      this.plugins.push(plugin);
      this.pluginsByKey[plugin.key] = plugin;
      if (plugin.spec.state) this.fields.push(new FieldDesc(plugin.key, plugin.spec.state, plugin));
    });
  }
};
var EditorState = class _EditorState {
  /**
  @internal
  */
  constructor(config) {
    this.config = config;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(tr) {
    return this.applyTransaction(tr).state;
  }
  /**
  @internal
  */
  filterTransaction(tr, ignore = -1) {
    for (let i = 0; i < this.config.plugins.length; i++) if (i != ignore) {
      let plugin = this.config.plugins[i];
      if (plugin.spec.filterTransaction && !plugin.spec.filterTransaction.call(plugin, tr, this)) return false;
    }
    return true;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(rootTr) {
    if (!this.filterTransaction(rootTr)) return {
      state: this,
      transactions: []
    };
    let trs = [rootTr],
      newState = this.applyInner(rootTr),
      seen = null;
    for (;;) {
      let haveNew = false;
      for (let i = 0; i < this.config.plugins.length; i++) {
        let plugin = this.config.plugins[i];
        if (plugin.spec.appendTransaction) {
          let n = seen ? seen[i].n : 0,
            oldState = seen ? seen[i].state : this;
          let tr = n < trs.length && plugin.spec.appendTransaction.call(plugin, n ? trs.slice(n) : trs, oldState, newState);
          if (tr && newState.filterTransaction(tr, i)) {
            tr.setMeta("appendedTransaction", rootTr);
            if (!seen) {
              seen = [];
              for (let j = 0; j < this.config.plugins.length; j++) seen.push(j < i ? {
                state: newState,
                n: trs.length
              } : {
                state: this,
                n: 0
              });
            }
            trs.push(tr);
            newState = newState.applyInner(tr);
            haveNew = true;
          }
          if (seen) seen[i] = {
            state: newState,
            n: trs.length
          };
        }
      }
      if (!haveNew) return {
        state: newState,
        transactions: trs
      };
    }
  }
  /**
  @internal
  */
  applyInner(tr) {
    if (!tr.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
    let newInstance = new _EditorState(this.config),
      fields = this.config.fields;
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      newInstance[field.name] = field.apply(tr, this[field.name], this, newInstance);
    }
    return newInstance;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Transaction(this);
  }
  /**
  Create a new state.
  */
  static create(config) {
    let $config = new Configuration(config.doc ? config.doc.type.schema : config.schema, config.plugins);
    let instance = new _EditorState($config);
    for (let i = 0; i < $config.fields.length; i++) instance[$config.fields[i].name] = $config.fields[i].init(config, instance);
    return instance;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(config) {
    let $config = new Configuration(this.schema, config.plugins);
    let fields = $config.fields,
      instance = new _EditorState($config);
    for (let i = 0; i < fields.length; i++) {
      let name = fields[i].name;
      instance[name] = this.hasOwnProperty(name) ? this[name] : fields[i].init(config, instance);
    }
    return instance;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(pluginFields) {
    let result = {
      doc: this.doc.toJSON(),
      selection: this.selection.toJSON()
    };
    if (this.storedMarks) result.storedMarks = this.storedMarks.map(m => m.toJSON());
    if (pluginFields && typeof pluginFields == "object") for (let prop in pluginFields) {
      if (prop == "doc" || prop == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
      let plugin = pluginFields[prop],
        state = plugin.spec.state;
      if (state && state.toJSON) result[prop] = state.toJSON.call(plugin, this[plugin.key]);
    }
    return result;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(config, json, pluginFields) {
    if (!json) throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!config.schema) throw new RangeError("Required config field 'schema' missing");
    let $config = new Configuration(config.schema, config.plugins);
    let instance = new _EditorState($config);
    $config.fields.forEach(field => {
      if (field.name == "doc") {
        instance.doc = import_prosemirror_model.Node.fromJSON(config.schema, json.doc);
      } else if (field.name == "selection") {
        instance.selection = Selection.fromJSON(instance.doc, json.selection);
      } else if (field.name == "storedMarks") {
        if (json.storedMarks) instance.storedMarks = json.storedMarks.map(config.schema.markFromJSON);
      } else {
        if (pluginFields) for (let prop in pluginFields) {
          let plugin = pluginFields[prop],
            state = plugin.spec.state;
          if (plugin.key == field.name && state && state.fromJSON && Object.prototype.hasOwnProperty.call(json, prop)) {
            instance[field.name] = state.fromJSON.call(plugin, config, json[prop], instance);
            return;
          }
        }
        instance[field.name] = field.init(config, instance);
      }
    });
    return instance;
  }
};
function bindProps(obj, self, target) {
  for (let prop in obj) {
    let val = obj[prop];
    if (val instanceof Function) val = val.bind(self);else if (prop == "handleDOMEvents") val = bindProps(val, self, {});
    target[prop] = val;
  }
  return target;
}
var Plugin = class {
  /**
  Create a plugin.
  */
  constructor(spec) {
    this.spec = spec;
    this.props = {};
    if (spec.props) bindProps(spec.props, this, this.props);
    this.key = spec.key ? spec.key.key : createKey("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
};
var keys = /* @__PURE__ */Object.create(null);
function createKey(name) {
  if (name in keys) return name + "$" + ++keys[name];
  keys[name] = 0;
  return name + "$";
}
var PluginKey = class {
  /**
  Create a plugin key.
  */
  constructor(name = "key") {
    this.key = createKey(name);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(state) {
    return state.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLXN0YXRlLjEuNC4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLXN0YXRlL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3Jfc3RhdGVfMV80XzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWxsU2VsZWN0aW9uIiwiRWRpdG9yU3RhdGUiLCJOb2RlU2VsZWN0aW9uIiwiUGx1Z2luIiwiUGx1Z2luS2V5IiwiU2VsZWN0aW9uIiwiU2VsZWN0aW9uUmFuZ2UiLCJUZXh0U2VsZWN0aW9uIiwiVHJhbnNhY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX21vZGVsIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl90cmFuc2Zvcm0iLCJjbGFzc2VzQnlJZCIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiJGFuY2hvciIsIiRoZWFkIiwicmFuZ2VzIiwibWluIiwibWF4IiwiYW5jaG9yIiwicG9zIiwiaGVhZCIsImZyb20iLCIkZnJvbSIsInRvIiwiJHRvIiwiZW1wdHkiLCJpIiwibGVuZ3RoIiwiY29udGVudCIsImRvYyIsInNsaWNlIiwicmVwbGFjZSIsInRyIiwiU2xpY2UiLCJsYXN0Tm9kZSIsImxhc3RDaGlsZCIsImxhc3RQYXJlbnQiLCJvcGVuRW5kIiwibWFwRnJvbSIsInN0ZXBzIiwibWFwcGluZyIsInJlcGxhY2VSYW5nZSIsIm1hcCIsInNlbGVjdGlvblRvSW5zZXJ0aW9uRW5kIiwiaXNJbmxpbmUiLCJpc1RleHRibG9jayIsInJlcGxhY2VXaXRoIiwibm9kZSIsImRlbGV0ZVJhbmdlIiwicmVwbGFjZVJhbmdlV2l0aCIsImZpbmRGcm9tIiwiJHBvcyIsImRpciIsInRleHRPbmx5IiwiaW5uZXIiLCJwYXJlbnQiLCJpbmxpbmVDb250ZW50IiwiZmluZFNlbGVjdGlvbkluIiwiaW5kZXgiLCJkZXB0aCIsImZvdW5kIiwiYmVmb3JlIiwiYWZ0ZXIiLCJuZWFyIiwiYmlhcyIsImF0U3RhcnQiLCJhdEVuZCIsInNpemUiLCJjaGlsZENvdW50IiwiZnJvbUpTT04iLCJqc29uIiwidHlwZSIsIlJhbmdlRXJyb3IiLCJjbHMiLCJqc29uSUQiLCJpZCIsInNlbGVjdGlvbkNsYXNzIiwicHJvdG90eXBlIiwiZ2V0Qm9va21hcmsiLCJiZXR3ZWVuIiwidmlzaWJsZSIsIndhcm5lZEFib3V0VGV4dFNlbGVjdGlvbiIsImNoZWNrVGV4dFNlbGVjdGlvbiIsImNvbnNvbGUiLCJuYW1lIiwiX1RleHRTZWxlY3Rpb24iLCIkY3Vyc29yIiwicmVzb2x2ZSIsIm1hcmtzIiwibWFya3NBY3Jvc3MiLCJlbnN1cmVNYXJrcyIsImVxIiwib3RoZXIiLCJUZXh0Qm9va21hcmsiLCJ0b0pTT04iLCJkUG9zIiwiX1RleHRCb29rbWFyayIsIl9Ob2RlU2VsZWN0aW9uIiwibm9kZUFmdGVyIiwiJGVuZCIsIm5vZGVTaXplIiwiZGVsZXRlZCIsIm1hcFJlc3VsdCIsIkZyYWdtZW50IiwiTm9kZUJvb2ttYXJrIiwiaXNTZWxlY3RhYmxlIiwiaXNUZXh0Iiwic3BlYyIsInNlbGVjdGFibGUiLCJfTm9kZUJvb2ttYXJrIiwiX0FsbFNlbGVjdGlvbiIsImRlbGV0ZSIsInNlbCIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsIkFsbEJvb2ttYXJrIiwidGV4dCIsImNoaWxkIiwiaXNBdG9tIiwic3RhcnRMZW4iLCJsYXN0Iiwic3RlcCIsIlJlcGxhY2VTdGVwIiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCJtYXBzIiwiZW5kIiwiZm9yRWFjaCIsIl9mcm9tIiwiX3RvIiwiX25ld0Zyb20iLCJuZXdUbyIsIlVQREFURURfU0VMIiwiVVBEQVRFRF9NQVJLUyIsIlVQREFURURfU0NST0xMIiwiVHJhbnNmb3JtIiwic3RhdGUiLCJjdXJTZWxlY3Rpb25Gb3IiLCJ1cGRhdGVkIiwibWV0YSIsInRpbWUiLCJEYXRlIiwibm93IiwiY3VyU2VsZWN0aW9uIiwic3RvcmVkTWFya3MiLCJzZWxlY3Rpb25TZXQiLCJzZXRTdG9yZWRNYXJrcyIsIk1hcmsiLCJzYW1lU2V0IiwiYWRkU3RvcmVkTWFyayIsIm1hcmsiLCJhZGRUb1NldCIsInJlbW92ZVN0b3JlZE1hcmsiLCJyZW1vdmVGcm9tU2V0Iiwic3RvcmVkTWFya3NTZXQiLCJhZGRTdGVwIiwic2V0VGltZSIsInJlcGxhY2VTZWxlY3Rpb24iLCJyZXBsYWNlU2VsZWN0aW9uV2l0aCIsImluaGVyaXRNYXJrcyIsIm5vbmUiLCJkZWxldGVTZWxlY3Rpb24iLCJpbnNlcnRUZXh0Iiwic2NoZW1hIiwic2V0TWV0YSIsImtleSIsInZhbHVlIiwiZ2V0TWV0YSIsImlzR2VuZXJpYyIsIl8iLCJzY3JvbGxJbnRvVmlldyIsInNjcm9sbGVkSW50b1ZpZXciLCJiaW5kIiwiZiIsInNlbGYiLCJGaWVsZERlc2MiLCJkZXNjIiwiaW5pdCIsImFwcGx5IiwiYmFzZUZpZWxkcyIsImNvbmZpZyIsInRvcE5vZGVUeXBlIiwiY3JlYXRlQW5kRmlsbCIsImluc3RhbmNlIiwiX21hcmtzIiwiX29sZCIsInByZXYiLCJDb25maWd1cmF0aW9uIiwicGx1Z2lucyIsInBsdWdpbnNCeUtleSIsImZpZWxkcyIsInBsdWdpbiIsInB1c2giLCJfRWRpdG9yU3RhdGUiLCJhcHBseVRyYW5zYWN0aW9uIiwiZmlsdGVyVHJhbnNhY3Rpb24iLCJpZ25vcmUiLCJjYWxsIiwicm9vdFRyIiwidHJhbnNhY3Rpb25zIiwidHJzIiwibmV3U3RhdGUiLCJhcHBseUlubmVyIiwic2VlbiIsImhhdmVOZXciLCJhcHBlbmRUcmFuc2FjdGlvbiIsIm4iLCJvbGRTdGF0ZSIsImoiLCJuZXdJbnN0YW5jZSIsImZpZWxkIiwiJGNvbmZpZyIsInJlY29uZmlndXJlIiwiaGFzT3duUHJvcGVydHkiLCJwbHVnaW5GaWVsZHMiLCJyZXN1bHQiLCJtIiwicHJvcCIsIk5vZGUiLCJtYXJrRnJvbUpTT04iLCJiaW5kUHJvcHMiLCJvYmoiLCJ0YXJnZXQi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QUFBLEVBQ0xMLFNBQUEsQ0FBVWhILElBQUEsQ0FBS3FILEtBQUEsRUFBTyxNQUFNLEtBQUtBLEtBQUs7SUFDMUMsS0FBSzVELEdBQUEsR0FBTXpELElBQUEsQ0FBS3lELEdBQUEsR0FBTXpELElBQUEsQ0FBS3lELEdBQUEsQ0FBSUEsR0FBQSxHQUFNNkQsU0FBQSxDQUFVLFFBQVE7RUFDM0Q7RUFBQTtBQUFBO0FBQUE7RUFJQUMsU0FBUzNGLEtBQUEsRUFBTztJQUFFLE9BQU9BLEtBQUEsQ0FBTSxLQUFLNkIsR0FBRztFQUFHO0FBQzlDO0FBQ0EsSUFBTStELElBQUEsR0FBTyxlQUFBek4sTUFBQSxDQUFPQyxNQUFBLENBQU8sSUFBSTtBQUMvQixTQUFTc04sVUFBVTdJLElBQUEsRUFBTTtFQUNyQixJQUFJQSxJQUFBLElBQVErSSxJQUFBLEVBQ1IsT0FBTy9JLElBQUEsR0FBTyxNQUFNLEVBQUUrSSxJQUFBLENBQUsvSSxJQUFJO0VBQ25DK0ksSUFBQSxDQUFLL0ksSUFBSSxJQUFJO0VBQ2IsT0FBT0EsSUFBQSxHQUFPO0FBQ2xCO0FBT0EsSUFBTXRGLFNBQUEsR0FBTixNQUFnQjtFQUFBO0FBQUE7QUFBQTtFQUlaYyxZQUFZd0UsSUFBQSxHQUFPLE9BQU87SUFBRSxLQUFLZ0YsR0FBQSxHQUFNNkQsU0FBQSxDQUFVN0ksSUFBSTtFQUFHO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFLeERnSixJQUFJN0YsS0FBQSxFQUFPO0lBQUUsT0FBT0EsS0FBQSxDQUFNNEMsTUFBQSxDQUFPUyxZQUFBLENBQWEsS0FBS3hCLEdBQUc7RUFBRztFQUFBO0FBQUE7QUFBQTtFQUl6RDhELFNBQVMzRixLQUFBLEVBQU87SUFBRSxPQUFPQSxLQUFBLENBQU0sS0FBSzZCLEdBQUc7RUFBRztBQUM5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=