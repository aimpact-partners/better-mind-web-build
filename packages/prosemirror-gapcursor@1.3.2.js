System.register(["w3c-keyname@2.2.8","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","prosemirror-keymap@1.2.3","prosemirror-view@1.40.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["w3c-keyname","2.2.8"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-keymap","1.2.3"],["prosemirror-view","1.40.1"],["prosemirror-gapcursor","1.3.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep)],
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

// .beyond/uimport/temp/prosemirror-gapcursor.1.3.2.js
var prosemirror_gapcursor_1_3_2_exports = {};
__export(prosemirror_gapcursor_1_3_2_exports, {
  GapCursor: () => GapCursor,
  gapCursor: () => gapCursor
});
module.exports = __toCommonJS(prosemirror_gapcursor_1_3_2_exports);

// node_modules/prosemirror-gapcursor/dist/index.js
var import_prosemirror_keymap = require("prosemirror-keymap@1.2.3");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_view = require("prosemirror-view@1.40.1");
var GapCursor = class _GapCursor extends import_prosemirror_state.Selection {
  /**
  Create a gap cursor.
  */
  constructor($pos) {
    super($pos, $pos);
  }
  map(doc, mapping) {
    let $pos = doc.resolve(mapping.map(this.head));
    return _GapCursor.valid($pos) ? new _GapCursor($pos) : import_prosemirror_state.Selection.near($pos);
  }
  content() {
    return import_prosemirror_model.Slice.empty;
  }
  eq(other) {
    return other instanceof _GapCursor && other.head == this.head;
  }
  toJSON() {
    return {
      type: "gapcursor",
      pos: this.head
    };
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new _GapCursor(doc.resolve(json.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new GapBookmark(this.anchor);
  }
  /**
  @internal
  */
  static valid($pos) {
    let parent = $pos.parent;
    if (parent.isTextblock || !closedBefore($pos) || !closedAfter($pos)) return false;
    let override = parent.type.spec.allowGapCursor;
    if (override != null) return override;
    let deflt = parent.contentMatchAt($pos.index()).defaultType;
    return deflt && deflt.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom($pos, dir, mustMove = false) {
    search: for (;;) {
      if (!mustMove && _GapCursor.valid($pos)) return $pos;
      let pos = $pos.pos,
        next = null;
      for (let d = $pos.depth;; d--) {
        let parent = $pos.node(d);
        if (dir > 0 ? $pos.indexAfter(d) < parent.childCount : $pos.index(d) > 0) {
          next = parent.child(dir > 0 ? $pos.indexAfter(d) : $pos.index(d) - 1);
          break;
        } else if (d == 0) {
          return null;
        }
        pos += dir;
        let $cur = $pos.doc.resolve(pos);
        if (_GapCursor.valid($cur)) return $cur;
      }
      for (;;) {
        let inside = dir > 0 ? next.firstChild : next.lastChild;
        if (!inside) {
          if (next.isAtom && !next.isText && !import_prosemirror_state.NodeSelection.isSelectable(next)) {
            $pos = $pos.doc.resolve(pos + next.nodeSize * dir);
            mustMove = false;
            continue search;
          }
          break;
        }
        next = inside;
        pos += dir;
        let $cur = $pos.doc.resolve(pos);
        if (_GapCursor.valid($cur)) return $cur;
      }
      return null;
    }
  }
};
GapCursor.prototype.visible = false;
GapCursor.findFrom = GapCursor.findGapCursorFrom;
import_prosemirror_state.Selection.jsonID("gapcursor", GapCursor);
var GapBookmark = class _GapBookmark {
  constructor(pos) {
    this.pos = pos;
  }
  map(mapping) {
    return new _GapBookmark(mapping.map(this.pos));
  }
  resolve(doc) {
    let $pos = doc.resolve(this.pos);
    return GapCursor.valid($pos) ? new GapCursor($pos) : import_prosemirror_state.Selection.near($pos);
  }
};
function closedBefore($pos) {
  for (let d = $pos.depth; d >= 0; d--) {
    let index = $pos.index(d),
      parent = $pos.node(d);
    if (index == 0) {
      if (parent.type.spec.isolating) return true;
      continue;
    }
    for (let before = parent.child(index - 1);; before = before.lastChild) {
      if (before.childCount == 0 && !before.inlineContent || before.isAtom || before.type.spec.isolating) return true;
      if (before.inlineContent) return false;
    }
  }
  return true;
}
function closedAfter($pos) {
  for (let d = $pos.depth; d >= 0; d--) {
    let index = $pos.indexAfter(d),
      parent = $pos.node(d);
    if (index == parent.childCount) {
      if (parent.type.spec.isolating) return true;
      continue;
    }
    for (let after = parent.child(index);; after = after.firstChild) {
      if (after.childCount == 0 && !after.inlineContent || after.isAtom || after.type.spec.isolating) return true;
      if (after.inlineContent) return false;
    }
  }
  return true;
}
function gapCursor() {
  return new import_prosemirror_state.Plugin({
    props: {
      decorations: drawGapCursor,
      createSelectionBetween(_view, $anchor, $head) {
        return $anchor.pos == $head.pos && GapCursor.valid($head) ? new GapCursor($head) : null;
      },
      handleClick,
      handleKeyDown,
      handleDOMEvents: {
        beforeinput
      }
    }
  });
}
var handleKeyDown = (0, import_prosemirror_keymap.keydownHandler)({
  "ArrowLeft": arrow("horiz", -1),
  "ArrowRight": arrow("horiz", 1),
  "ArrowUp": arrow("vert", -1),
  "ArrowDown": arrow("vert", 1)
});
function arrow(axis, dir) {
  const dirStr = axis == "vert" ? dir > 0 ? "down" : "up" : dir > 0 ? "right" : "left";
  return function (state, dispatch, view) {
    let sel = state.selection;
    let $start = dir > 0 ? sel.$to : sel.$from,
      mustMove = sel.empty;
    if (sel instanceof import_prosemirror_state.TextSelection) {
      if (!view.endOfTextblock(dirStr) || $start.depth == 0) return false;
      mustMove = false;
      $start = state.doc.resolve(dir > 0 ? $start.after() : $start.before());
    }
    let $found = GapCursor.findGapCursorFrom($start, dir, mustMove);
    if (!$found) return false;
    if (dispatch) dispatch(state.tr.setSelection(new GapCursor($found)));
    return true;
  };
}
function handleClick(view, pos, event) {
  if (!view || !view.editable) return false;
  let $pos = view.state.doc.resolve(pos);
  if (!GapCursor.valid($pos)) return false;
  let clickPos = view.posAtCoords({
    left: event.clientX,
    top: event.clientY
  });
  if (clickPos && clickPos.inside > -1 && import_prosemirror_state.NodeSelection.isSelectable(view.state.doc.nodeAt(clickPos.inside))) return false;
  view.dispatch(view.state.tr.setSelection(new GapCursor($pos)));
  return true;
}
function beforeinput(view, event) {
  if (event.inputType != "insertCompositionText" || !(view.state.selection instanceof GapCursor)) return false;
  let {
    $from
  } = view.state.selection;
  let insert = $from.parent.contentMatchAt($from.index()).findWrapping(view.state.schema.nodes.text);
  if (!insert) return false;
  let frag = import_prosemirror_model.Fragment.empty;
  for (let i = insert.length - 1; i >= 0; i--) frag = import_prosemirror_model.Fragment.from(insert[i].createAndFill(null, frag));
  let tr = view.state.tr.replace($from.pos, $from.pos, new import_prosemirror_model.Slice(frag, 0, 0));
  tr.setSelection(import_prosemirror_state.TextSelection.near(tr.doc.resolve($from.pos + 1)));
  view.dispatch(tr);
  return false;
}
function drawGapCursor(state) {
  if (!(state.selection instanceof GapCursor)) return null;
  let node = document.createElement("div");
  node.className = "ProseMirror-gapcursor";
  return import_prosemirror_view.DecorationSet.create(state.doc, [import_prosemirror_view.Decoration.widget(state.selection.head, node, {
    key: "gapcursor"
  })]);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWdhcGN1cnNvci4xLjMuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1nYXBjdXJzb3IvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9nYXBjdXJzb3JfMV8zXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiR2FwQ3Vyc29yIiwiZ2FwQ3Vyc29yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9wcm9zZW1pcnJvcl9rZXltYXAiLCJyZXF1aXJlIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwiaW1wb3J0X3Byb3NlbWlycm9yX21vZGVsIiwiaW1wb3J0X3Byb3NlbWlycm9yX3ZpZXciLCJfR2FwQ3Vyc29yIiwiU2VsZWN0aW9uIiwiY29uc3RydWN0b3IiLCIkcG9zIiwibWFwIiwiZG9jIiwibWFwcGluZyIsInJlc29sdmUiLCJoZWFkIiwidmFsaWQiLCJuZWFyIiwiY29udGVudCIsIlNsaWNlIiwiZW1wdHkiLCJlcSIsIm90aGVyIiwidG9KU09OIiwidHlwZSIsInBvcyIsImZyb21KU09OIiwianNvbiIsIlJhbmdlRXJyb3IiLCJnZXRCb29rbWFyayIsIkdhcEJvb2ttYXJrIiwiYW5jaG9yIiwicGFyZW50IiwiaXNUZXh0YmxvY2siLCJjbG9zZWRCZWZvcmUiLCJjbG9zZWRBZnRlciIsIm92ZXJyaWRlIiwic3BlYyIsImFsbG93R2FwQ3Vyc29yIiwiZGVmbHQiLCJjb250ZW50TWF0Y2hBdCIsImluZGV4IiwiZGVmYXVsdFR5cGUiLCJmaW5kR2FwQ3Vyc29yRnJvbSIsImRpciIsIm11c3RNb3ZlIiwic2VhcmNoIiwibmV4dCIsImQiLCJkZXB0aCIsIm5vZGUiLCJpbmRleEFmdGVyIiwiY2hpbGRDb3VudCIsImNoaWxkIiwiJGN1ciIsImluc2lkZSIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJpc0F0b20iLCJpc1RleHQiLCJOb2RlU2VsZWN0aW9uIiwiaXNTZWxlY3RhYmxlIiwibm9kZVNpemUiLCJwcm90b3R5cGUiLCJ2aXNpYmxlIiwiZmluZEZyb20iLCJqc29uSUQiLCJfR2FwQm9va21hcmsiLCJpc29sYXRpbmciLCJiZWZvcmUiLCJpbmxpbmVDb250ZW50IiwiYWZ0ZXIiLCJQbHVnaW4iLCJwcm9wcyIsImRlY29yYXRpb25zIiwiZHJhd0dhcEN1cnNvciIsImNyZWF0ZVNlbGVjdGlvbkJldHdlZW4iLCJfdmlldyIsIiRhbmNob3IiLCIkaGVhZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZURPTUV2ZW50cyIsImJlZm9yZWlucHV0Iiwia2V5ZG93bkhhbmRsZXIiLCJhcnJvdyIsImF4aXMiLCJkaXJTdHIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidmlldyIsInNlbCIsInNlbGVjdGlvbiIsIiRzdGFydCIsIiR0byIsIiRmcm9tIiwiVGV4dFNlbGVjdGlvbiIsImVuZE9mVGV4dGJsb2NrIiwiJGZvdW5kIiwidHIiLCJzZXRTZWxlY3Rpb24iLCJldmVudCIsImVkaXRhYmxlIiwiY2xpY2tQb3MiLCJwb3NBdENvb3JkcyIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsIm5vZGVBdCIsImlucHV0VHlwZSIsImluc2VydCIsImZpbmRXcmFwcGluZyIsInNjaGVtYSIsIm5vZGVzIiwidGV4dCIsImZyYWciLCJGcmFnbWVudCIsImkiLCJsZW5ndGgiLCJmcm9tIiwiY3JlYXRlQW5kRmlsbCIsInJlcGxhY2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJEZWNvcmF0aW9uU2V0IiwiY3JlYXRlIiwiRGVjb3JhdGlvbiIsIndpZGdldCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQ0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FB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QzVELElBQUlqQixFQUFBLEdBQUtULElBQUEsQ0FBS0YsS0FBQSxDQUFNVyxFQUFBLENBQUd1QixPQUFBLENBQVEzQixLQUFBLENBQU10RSxHQUFBLEVBQUtzRSxLQUFBLENBQU10RSxHQUFBLEVBQUssSUFBSXBCLHdCQUFBLENBQUFjLEtBQUEsQ0FBTWlHLElBQUEsRUFBTSxHQUFHLENBQUMsQ0FBQztFQUMxRWpCLEVBQUEsQ0FBR0MsWUFBQSxDQUFhaEcsd0JBQUEsQ0FBQTRGLGFBQUEsQ0FBYy9FLElBQUEsQ0FBS2tGLEVBQUEsQ0FBR3ZGLEdBQUEsQ0FBSUUsT0FBQSxDQUFRaUYsS0FBQSxDQUFNdEUsR0FBQSxHQUFNLENBQUMsQ0FBQyxDQUFDO0VBQ2pFaUUsSUFBQSxDQUFLRCxRQUFBLENBQVNVLEVBQUU7RUFDaEIsT0FBTztBQUNYO0FBQ0EsU0FBU3hCLGNBQWNhLEtBQUEsRUFBTztFQUMxQixJQUFJLEVBQUVBLEtBQUEsQ0FBTUksU0FBQSxZQUFxQi9GLFNBQUEsR0FDN0IsT0FBTztFQUNYLElBQUlxRCxJQUFBLEdBQU95RSxRQUFBLENBQVNDLGFBQUEsQ0FBYyxLQUFLO0VBQ3ZDMUUsSUFBQSxDQUFLMkUsU0FBQSxHQUFZO0VBQ2pCLE9BQU92SCx1QkFBQSxDQUFBd0gsYUFBQSxDQUFjQyxNQUFBLENBQU92QyxLQUFBLENBQU01RSxHQUFBLEVBQUssQ0FBQ04sdUJBQUEsQ0FBQTBILFVBQUEsQ0FBV0MsTUFBQSxDQUFPekMsS0FBQSxDQUFNSSxTQUFBLENBQVU3RSxJQUFBLEVBQU1tQyxJQUFBLEVBQU07SUFBRWdGLEdBQUEsRUFBSztFQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2hIIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==