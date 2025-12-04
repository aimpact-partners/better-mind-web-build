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

// .beyond/uimport/prosemirror-state.1.4.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1zdGF0ZS4xLjQuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1zdGF0ZS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX3N0YXRlXzFfNF8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFsbFNlbGVjdGlvbiIsIkVkaXRvclN0YXRlIiwiTm9kZVNlbGVjdGlvbiIsIlBsdWdpbiIsIlBsdWdpbktleSIsIlNlbGVjdGlvbiIsIlNlbGVjdGlvblJhbmdlIiwiVGV4dFNlbGVjdGlvbiIsIlRyYW5zYWN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9wcm9zZW1pcnJvcl9tb2RlbCIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfdHJhbnNmb3JtIiwiY2xhc3Nlc0J5SWQiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIiRhbmNob3IiLCIkaGVhZCIsInJhbmdlcyIsIm1pbiIsIm1heCIsImFuY2hvciIsInBvcyIsImhlYWQiLCJmcm9tIiwiJGZyb20iLCJ0byIsIiR0byIsImVtcHR5IiwiaSIsImxlbmd0aCIsImNvbnRlbnQiLCJkb2MiLCJzbGljZSIsInJlcGxhY2UiLCJ0ciIsIlNsaWNlIiwibGFzdE5vZGUiLCJsYXN0Q2hpbGQiLCJsYXN0UGFyZW50Iiwib3BlbkVuZCIsIm1hcEZyb20iLCJzdGVwcyIsIm1hcHBpbmciLCJyZXBsYWNlUmFuZ2UiLCJtYXAiLCJzZWxlY3Rpb25Ub0luc2VydGlvbkVuZCIsImlzSW5saW5lIiwiaXNUZXh0YmxvY2siLCJyZXBsYWNlV2l0aCIsIm5vZGUiLCJkZWxldGVSYW5nZSIsInJlcGxhY2VSYW5nZVdpdGgiLCJmaW5kRnJvbSIsIiRwb3MiLCJkaXIiLCJ0ZXh0T25seSIsImlubmVyIiwicGFyZW50IiwiaW5saW5lQ29udGVudCIsImZpbmRTZWxlY3Rpb25JbiIsImluZGV4IiwiZGVwdGgiLCJmb3VuZCIsImJlZm9yZSIsImFmdGVyIiwibmVhciIsImJpYXMiLCJhdFN0YXJ0IiwiYXRFbmQiLCJzaXplIiwiY2hpbGRDb3VudCIsImZyb21KU09OIiwianNvbiIsInR5cGUiLCJSYW5nZUVycm9yIiwiY2xzIiwianNvbklEIiwiaWQiLCJzZWxlY3Rpb25DbGFzcyIsInByb3RvdHlwZSIsImdldEJvb2ttYXJrIiwiYmV0d2VlbiIsInZpc2libGUiLCJ3YXJuZWRBYm91dFRleHRTZWxlY3Rpb24iLCJjaGVja1RleHRTZWxlY3Rpb24iLCJjb25zb2xlIiwibmFtZSIsIl9UZXh0U2VsZWN0aW9uIiwiJGN1cnNvciIsInJlc29sdmUiLCJtYXJrcyIsIm1hcmtzQWNyb3NzIiwiZW5zdXJlTWFya3MiLCJlcSIsIm90aGVyIiwiVGV4dEJvb2ttYXJrIiwidG9KU09OIiwiZFBvcyIsIl9UZXh0Qm9va21hcmsiLCJfTm9kZVNlbGVjdGlvbiIsIm5vZGVBZnRlciIsIiRlbmQiLCJub2RlU2l6ZSIsImRlbGV0ZWQiLCJtYXBSZXN1bHQiLCJGcmFnbWVudCIsIk5vZGVCb29rbWFyayIsImlzU2VsZWN0YWJsZSIsImlzVGV4dCIsInNwZWMiLCJzZWxlY3RhYmxlIiwiX05vZGVCb29rbWFyayIsIl9BbGxTZWxlY3Rpb24iLCJkZWxldGUiLCJzZWwiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJBbGxCb29rbWFyayIsInRleHQiLCJjaGlsZCIsImlzQXRvbSIsInN0YXJ0TGVuIiwibGFzdCIsInN0ZXAiLCJSZXBsYWNlU3RlcCIsIlJlcGxhY2VBcm91bmRTdGVwIiwibWFwcyIsImVuZCIsImZvckVhY2giLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJVUERBVEVEX1NFTCIsIlVQREFURURfTUFSS1MiLCJVUERBVEVEX1NDUk9MTCIsIlRyYW5zZm9ybSIsInN0YXRlIiwiY3VyU2VsZWN0aW9uRm9yIiwidXBkYXRlZCIsIm1ldGEiLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImN1clNlbGVjdGlvbiIsInN0b3JlZE1hcmtzIiwic2VsZWN0aW9uU2V0Iiwic2V0U3RvcmVkTWFya3MiLCJNYXJrIiwic2FtZVNldCIsImFkZFN0b3JlZE1hcmsiLCJtYXJrIiwiYWRkVG9TZXQiLCJyZW1vdmVTdG9yZWRNYXJrIiwicmVtb3ZlRnJvbVNldCIsInN0b3JlZE1hcmtzU2V0IiwiYWRkU3RlcCIsInNldFRpbWUiLCJyZXBsYWNlU2VsZWN0aW9uIiwicmVwbGFjZVNlbGVjdGlvbldpdGgiLCJpbmhlcml0TWFya3MiLCJub25lIiwiZGVsZXRlU2VsZWN0aW9uIiwiaW5zZXJ0VGV4dCIsInNjaGVtYSIsInNldE1ldGEiLCJrZXkiLCJ2YWx1ZSIsImdldE1ldGEiLCJpc0dlbmVyaWMiLCJfIiwic2Nyb2xsSW50b1ZpZXciLCJzY3JvbGxlZEludG9WaWV3IiwiYmluZCIsImYiLCJzZWxmIiwiRmllbGREZXNjIiwiZGVzYyIsImluaXQiLCJhcHBseSIsImJhc2VGaWVsZHMiLCJjb25maWciLCJ0b3BOb2RlVHlwZSIsImNyZWF0ZUFuZEZpbGwiLCJpbnN0YW5jZSIsIl9tYXJrcyIsIl9vbGQiLCJwcmV2IiwiQ29uZmlndXJhdGlvbiIsInBsdWdpbnMiLCJwbHVnaW5zQnlLZXkiLCJmaWVsZHMiLCJwbHVnaW4iLCJwdXNoIiwiX0VkaXRvclN0YXRlIiwiYXBwbHlUcmFuc2FjdGlvbiIsImZpbHRlclRyYW5zYWN0aW9uIiwiaWdub3JlIiwiY2FsbCIsInJvb3RUciIsInRyYW5zYWN0aW9ucyIsInRycyIsIm5ld1N0YXRlIiwiYXBwbHlJbm5lciIsInNlZW4iLCJoYXZlTmV3IiwiYXBwZW5kVHJhbnNhY3Rpb24iLCJuIiwib2xkU3RhdGUiLCJqIiwibmV3SW5zdGFuY2UiLCJmaWVsZCIsIiRjb25maWciLCJyZWNvbmZpZ3VyZSIsImhhc093blByb3BlcnR5IiwicGx1Z2luRmllbGRzIiwicmVzdWx0IiwibSIsInByb3AiLCJOb2RlIiwibWFya0Zyb21KU09OIiwiYmluZFByb3BzIiwib2JqIiwidGFyZ2V0IiwidmFs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QUNMTCxTQUFBLENBQVVoSCxJQUFBLENBQUtxSCxLQUFBLEVBQU8sTUFBTSxLQUFLQSxLQUFLO0lBQzFDLEtBQUs1RCxHQUFBLEdBQU16RCxJQUFBLENBQUt5RCxHQUFBLEdBQU16RCxJQUFBLENBQUt5RCxHQUFBLENBQUlBLEdBQUEsR0FBTTZELFNBQUEsQ0FBVSxRQUFRO0VBQzNEO0VBQUE7QUFBQTtBQUFBO0VBSUFDLFNBQVMzRixLQUFBLEVBQU87SUFBRSxPQUFPQSxLQUFBLENBQU0sS0FBSzZCLEdBQUc7RUFBRztBQUM5QztBQUNBLElBQU0rRCxJQUFBLEdBQU8sZUFBQXpOLE1BQUEsQ0FBT0MsTUFBQSxDQUFPLElBQUk7QUFDL0IsU0FBU3NOLFVBQVU3SSxJQUFBLEVBQU07RUFDckIsSUFBSUEsSUFBQSxJQUFRK0ksSUFBQSxFQUNSLE9BQU8vSSxJQUFBLEdBQU8sTUFBTSxFQUFFK0ksSUFBQSxDQUFLL0ksSUFBSTtFQUNuQytJLElBQUEsQ0FBSy9JLElBQUksSUFBSTtFQUNiLE9BQU9BLElBQUEsR0FBTztBQUNsQjtBQU9BLElBQU10RixTQUFBLEdBQU4sTUFBZ0I7RUFBQTtBQUFBO0FBQUE7RUFJWmMsWUFBWXdFLElBQUEsR0FBTyxPQUFPO0lBQUUsS0FBS2dGLEdBQUEsR0FBTTZELFNBQUEsQ0FBVTdJLElBQUk7RUFBRztFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS3hEZ0osSUFBSTdGLEtBQUEsRUFBTztJQUFFLE9BQU9BLEtBQUEsQ0FBTTRDLE1BQUEsQ0FBT1MsWUFBQSxDQUFhLEtBQUt4QixHQUFHO0VBQUc7RUFBQTtBQUFBO0FBQUE7RUFJekQ4RCxTQUFTM0YsS0FBQSxFQUFPO0lBQUUsT0FBT0EsS0FBQSxDQUFNLEtBQUs2QixHQUFHO0VBQUc7QUFDOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9