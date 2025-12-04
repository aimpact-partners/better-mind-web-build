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

// .beyond/uimport/prosemirror-gapcursor.1.3.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1nYXBjdXJzb3IuMS4zLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItZ2FwY3Vyc29yL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3JfZ2FwY3Vyc29yXzFfM18yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkdhcEN1cnNvciIsImdhcEN1cnNvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfa2V5bWFwIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsImltcG9ydF9wcm9zZW1pcnJvcl9tb2RlbCIsImltcG9ydF9wcm9zZW1pcnJvcl92aWV3IiwiX0dhcEN1cnNvciIsIlNlbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiJHBvcyIsIm1hcCIsImRvYyIsIm1hcHBpbmciLCJyZXNvbHZlIiwiaGVhZCIsInZhbGlkIiwibmVhciIsImNvbnRlbnQiLCJTbGljZSIsImVtcHR5IiwiZXEiLCJvdGhlciIsInRvSlNPTiIsInR5cGUiLCJwb3MiLCJmcm9tSlNPTiIsImpzb24iLCJSYW5nZUVycm9yIiwiZ2V0Qm9va21hcmsiLCJHYXBCb29rbWFyayIsImFuY2hvciIsInBhcmVudCIsImlzVGV4dGJsb2NrIiwiY2xvc2VkQmVmb3JlIiwiY2xvc2VkQWZ0ZXIiLCJvdmVycmlkZSIsInNwZWMiLCJhbGxvd0dhcEN1cnNvciIsImRlZmx0IiwiY29udGVudE1hdGNoQXQiLCJpbmRleCIsImRlZmF1bHRUeXBlIiwiZmluZEdhcEN1cnNvckZyb20iLCJkaXIiLCJtdXN0TW92ZSIsInNlYXJjaCIsIm5leHQiLCJkIiwiZGVwdGgiLCJub2RlIiwiaW5kZXhBZnRlciIsImNoaWxkQ291bnQiLCJjaGlsZCIsIiRjdXIiLCJpbnNpZGUiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwiaXNBdG9tIiwiaXNUZXh0IiwiTm9kZVNlbGVjdGlvbiIsImlzU2VsZWN0YWJsZSIsIm5vZGVTaXplIiwicHJvdG90eXBlIiwidmlzaWJsZSIsImZpbmRGcm9tIiwianNvbklEIiwiX0dhcEJvb2ttYXJrIiwiaXNvbGF0aW5nIiwiYmVmb3JlIiwiaW5saW5lQ29udGVudCIsImFmdGVyIiwiUGx1Z2luIiwicHJvcHMiLCJkZWNvcmF0aW9ucyIsImRyYXdHYXBDdXJzb3IiLCJjcmVhdGVTZWxlY3Rpb25CZXR3ZWVuIiwiX3ZpZXciLCIkYW5jaG9yIiwiJGhlYWQiLCJoYW5kbGVDbGljayIsImhhbmRsZUtleURvd24iLCJoYW5kbGVET01FdmVudHMiLCJiZWZvcmVpbnB1dCIsImtleWRvd25IYW5kbGVyIiwiYXJyb3ciLCJheGlzIiwiZGlyU3RyIiwic3RhdGUiLCJkaXNwYXRjaCIsInZpZXciLCJzZWwiLCJzZWxlY3Rpb24iLCIkc3RhcnQiLCIkdG8iLCIkZnJvbSIsIlRleHRTZWxlY3Rpb24iLCJlbmRPZlRleHRibG9jayIsIiRmb3VuZCIsInRyIiwic2V0U2VsZWN0aW9uIiwiZXZlbnQiLCJlZGl0YWJsZSIsImNsaWNrUG9zIiwicG9zQXRDb29yZHMiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJub2RlQXQiLCJpbnB1dFR5cGUiLCJpbnNlcnQiLCJmaW5kV3JhcHBpbmciLCJzY2hlbWEiLCJub2RlcyIsInRleHQiLCJmcmFnIiwiRnJhZ21lbnQiLCJpIiwibGVuZ3RoIiwiZnJvbSIsImNyZWF0ZUFuZEZpbGwiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRGVjb3JhdGlvblNldCIsImNyZWF0ZSIsIkRlY29yYXRpb24iLCJ3aWRnZXQiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUNBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sbUNBQUE7OztBQ0FBLElBQUFPLHlCQUFBLEdBQStCQyxPQUFBO0FBQy9CLElBQUFDLHdCQUFBLEdBQWdFRCxPQUFBO0FBQ2hFLElBQUFFLHdCQUFBLEdBQWdDRixPQUFBO0FBQ2hDLElBQUFHLHVCQUFBLEdBQTBDSCxPQUFBO0FBTTFDLElBQU1OLFNBQUEsR0FBTixNQUFNVSxVQUFBLFNBQWtCSCx3QkFBQSxDQUFBSSxTQUFBLENBQVU7RUFBQTtBQUFBO0FBQUE7RUFJOUJDLFlBQVlDLElBQUEsRUFBTTtJQUNkLE1BQU1BLElBQUEsRUFBTUEsSUFBSTtFQUNwQjtFQUNBQyxJQUFJQyxHQUFBLEVBQUtDLE9BQUEsRUFBUztJQUNkLElBQUlILElBQUEsR0FBT0UsR0FBQSxDQUFJRSxPQUFBLENBQVFELE9BQUEsQ0FBUUYsR0FBQSxDQUFJLEtBQUtJLElBQUksQ0FBQztJQUM3QyxPQUFPUixVQUFBLENBQVVTLEtBQUEsQ0FBTU4sSUFBSSxJQUFJLElBQUlILFVBQUEsQ0FBVUcsSUFBSSxJQUFJTix3QkFBQSxDQUFBSSxTQUFBLENBQVVTLElBQUEsQ0FBS1AsSUFBSTtFQUM1RTtFQUNBUSxRQUFBLEVBQVU7SUFBRSxPQUFPYix3QkFBQSxDQUFBYyxLQUFBLENBQU1DLEtBQUE7RUFBTztFQUNoQ0MsR0FBR0MsS0FBQSxFQUFPO0lBQ04sT0FBT0EsS0FBQSxZQUFpQmYsVUFBQSxJQUFhZSxLQUFBLENBQU1QLElBQUEsSUFBUSxLQUFLQSxJQUFBO0VBQzVEO0VBQ0FRLE9BQUEsRUFBUztJQUNMLE9BQU87TUFBRUMsSUFBQSxFQUFNO01BQWFDLEdBQUEsRUFBSyxLQUFLVjtJQUFLO0VBQy9DO0VBQUE7QUFBQTtBQUFBO0VBSUEsT0FBT1csU0FBU2QsR0FBQSxFQUFLZSxJQUFBLEVBQU07SUFDdkIsSUFBSSxPQUFPQSxJQUFBLENBQUtGLEdBQUEsSUFBTyxVQUNuQixNQUFNLElBQUlHLFVBQUEsQ0FBVyxzQ0FBc0M7SUFDL0QsT0FBTyxJQUFJckIsVUFBQSxDQUFVSyxHQUFBLENBQUlFLE9BQUEsQ0FBUWEsSUFBQSxDQUFLRixHQUFHLENBQUM7RUFDOUM7RUFBQTtBQUFBO0FBQUE7RUFJQUksWUFBQSxFQUFjO0lBQUUsT0FBTyxJQUFJQyxXQUFBLENBQVksS0FBS0MsTUFBTTtFQUFHO0VBQUE7QUFBQTtBQUFBO0VBSXJELE9BQU9mLE1BQU1OLElBQUEsRUFBTTtJQUNmLElBQUlzQixNQUFBLEdBQVN0QixJQUFBLENBQUtzQixNQUFBO0lBQ2xCLElBQUlBLE1BQUEsQ0FBT0MsV0FBQSxJQUFlLENBQUNDLFlBQUEsQ0FBYXhCLElBQUksS0FBSyxDQUFDeUIsV0FBQSxDQUFZekIsSUFBSSxHQUM5RCxPQUFPO0lBQ1gsSUFBSTBCLFFBQUEsR0FBV0osTUFBQSxDQUFPUixJQUFBLENBQUthLElBQUEsQ0FBS0MsY0FBQTtJQUNoQyxJQUFJRixRQUFBLElBQVksTUFDWixPQUFPQSxRQUFBO0lBQ1gsSUFBSUcsS0FBQSxHQUFRUCxNQUFBLENBQU9RLGNBQUEsQ0FBZTlCLElBQUEsQ0FBSytCLEtBQUEsQ0FBTSxDQUFDLEVBQUVDLFdBQUE7SUFDaEQsT0FBT0gsS0FBQSxJQUFTQSxLQUFBLENBQU1OLFdBQUE7RUFDMUI7RUFBQTtBQUFBO0FBQUE7RUFJQSxPQUFPVSxrQkFBa0JqQyxJQUFBLEVBQU1rQyxHQUFBLEVBQUtDLFFBQUEsR0FBVyxPQUFPO0lBQ2xEQyxNQUFBLEVBQVEsU0FBUztNQUNiLElBQUksQ0FBQ0QsUUFBQSxJQUFZdEMsVUFBQSxDQUFVUyxLQUFBLENBQU1OLElBQUksR0FDakMsT0FBT0EsSUFBQTtNQUNYLElBQUllLEdBQUEsR0FBTWYsSUFBQSxDQUFLZSxHQUFBO1FBQUtzQixJQUFBLEdBQU87TUFFM0IsU0FBU0MsQ0FBQSxHQUFJdEMsSUFBQSxDQUFLdUMsS0FBQSxHQUFRRCxDQUFBLElBQUs7UUFDM0IsSUFBSWhCLE1BQUEsR0FBU3RCLElBQUEsQ0FBS3dDLElBQUEsQ0FBS0YsQ0FBQztRQUN4QixJQUFJSixHQUFBLEdBQU0sSUFBSWxDLElBQUEsQ0FBS3lDLFVBQUEsQ0FBV0gsQ0FBQyxJQUFJaEIsTUFBQSxDQUFPb0IsVUFBQSxHQUFhMUMsSUFBQSxDQUFLK0IsS0FBQSxDQUFNTyxDQUFDLElBQUksR0FBRztVQUN0RUQsSUFBQSxHQUFPZixNQUFBLENBQU9xQixLQUFBLENBQU1ULEdBQUEsR0FBTSxJQUFJbEMsSUFBQSxDQUFLeUMsVUFBQSxDQUFXSCxDQUFDLElBQUl0QyxJQUFBLENBQUsrQixLQUFBLENBQU1PLENBQUMsSUFBSSxDQUFDO1VBQ3BFO1FBQ0osV0FDU0EsQ0FBQSxJQUFLLEdBQUc7VUFDYixPQUFPO1FBQ1g7UUFDQXZCLEdBQUEsSUFBT21CLEdBQUE7UUFDUCxJQUFJVSxJQUFBLEdBQU81QyxJQUFBLENBQUtFLEdBQUEsQ0FBSUUsT0FBQSxDQUFRVyxHQUFHO1FBQy9CLElBQUlsQixVQUFBLENBQVVTLEtBQUEsQ0FBTXNDLElBQUksR0FDcEIsT0FBT0EsSUFBQTtNQUNmO01BRUEsU0FBUztRQUNMLElBQUlDLE1BQUEsR0FBU1gsR0FBQSxHQUFNLElBQUlHLElBQUEsQ0FBS1MsVUFBQSxHQUFhVCxJQUFBLENBQUtVLFNBQUE7UUFDOUMsSUFBSSxDQUFDRixNQUFBLEVBQVE7VUFDVCxJQUFJUixJQUFBLENBQUtXLE1BQUEsSUFBVSxDQUFDWCxJQUFBLENBQUtZLE1BQUEsSUFBVSxDQUFDdkQsd0JBQUEsQ0FBQXdELGFBQUEsQ0FBY0MsWUFBQSxDQUFhZCxJQUFJLEdBQUc7WUFDbEVyQyxJQUFBLEdBQU9BLElBQUEsQ0FBS0UsR0FBQSxDQUFJRSxPQUFBLENBQVFXLEdBQUEsR0FBTXNCLElBQUEsQ0FBS2UsUUFBQSxHQUFXbEIsR0FBRztZQUNqREMsUUFBQSxHQUFXO1lBQ1gsU0FBU0MsTUFBQTtVQUNiO1VBQ0E7UUFDSjtRQUNBQyxJQUFBLEdBQU9RLE1BQUE7UUFDUDlCLEdBQUEsSUFBT21CLEdBQUE7UUFDUCxJQUFJVSxJQUFBLEdBQU81QyxJQUFBLENBQUtFLEdBQUEsQ0FBSUUsT0FBQSxDQUFRVyxHQUFHO1FBQy9CLElBQUlsQixVQUFBLENBQVVTLEtBQUEsQ0FBTXNDLElBQUksR0FDcEIsT0FBT0EsSUFBQTtNQUNmO01BQ0EsT0FBTztJQUNYO0VBQ0o7QUFDSjtBQUNBekQsU0FBQSxDQUFVa0UsU0FBQSxDQUFVQyxPQUFBLEdBQVU7QUFDOUJuRSxTQUFBLENBQVVvRSxRQUFBLEdBQVdwRSxTQUFBLENBQVU4QyxpQkFBQTtBQUMvQnZDLHdCQUFBLENBQUFJLFNBQUEsQ0FBVTBELE1BQUEsQ0FBTyxhQUFhckUsU0FBUztBQUN2QyxJQUFNaUMsV0FBQSxHQUFOLE1BQU1xQyxZQUFBLENBQVk7RUFDZDFELFlBQVlnQixHQUFBLEVBQUs7SUFDYixLQUFLQSxHQUFBLEdBQU1BLEdBQUE7RUFDZjtFQUNBZCxJQUFJRSxPQUFBLEVBQVM7SUFDVCxPQUFPLElBQUlzRCxZQUFBLENBQVl0RCxPQUFBLENBQVFGLEdBQUEsQ0FBSSxLQUFLYyxHQUFHLENBQUM7RUFDaEQ7RUFDQVgsUUFBUUYsR0FBQSxFQUFLO0lBQ1QsSUFBSUYsSUFBQSxHQUFPRSxHQUFBLENBQUlFLE9BQUEsQ0FBUSxLQUFLVyxHQUFHO0lBQy9CLE9BQU81QixTQUFBLENBQVVtQixLQUFBLENBQU1OLElBQUksSUFBSSxJQUFJYixTQUFBLENBQVVhLElBQUksSUFBSU4sd0JBQUEsQ0FBQUksU0FBQSxDQUFVUyxJQUFBLENBQUtQLElBQUk7RUFDNUU7QUFDSjtBQUNBLFNBQVN3QixhQUFheEIsSUFBQSxFQUFNO0VBQ3hCLFNBQVNzQyxDQUFBLEdBQUl0QyxJQUFBLENBQUt1QyxLQUFBLEVBQU9ELENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUs7SUFDbEMsSUFBSVAsS0FBQSxHQUFRL0IsSUFBQSxDQUFLK0IsS0FBQSxDQUFNTyxDQUFDO01BQUdoQixNQUFBLEdBQVN0QixJQUFBLENBQUt3QyxJQUFBLENBQUtGLENBQUM7SUFFL0MsSUFBSVAsS0FBQSxJQUFTLEdBQUc7TUFDWixJQUFJVCxNQUFBLENBQU9SLElBQUEsQ0FBS2EsSUFBQSxDQUFLK0IsU0FBQSxFQUNqQixPQUFPO01BQ1g7SUFDSjtJQUVBLFNBQVNDLE1BQUEsR0FBU3JDLE1BQUEsQ0FBT3FCLEtBQUEsQ0FBTVosS0FBQSxHQUFRLENBQUMsSUFBSTRCLE1BQUEsR0FBU0EsTUFBQSxDQUFPWixTQUFBLEVBQVc7TUFDbkUsSUFBS1ksTUFBQSxDQUFPakIsVUFBQSxJQUFjLEtBQUssQ0FBQ2lCLE1BQUEsQ0FBT0MsYUFBQSxJQUFrQkQsTUFBQSxDQUFPWCxNQUFBLElBQVVXLE1BQUEsQ0FBTzdDLElBQUEsQ0FBS2EsSUFBQSxDQUFLK0IsU0FBQSxFQUN2RixPQUFPO01BQ1gsSUFBSUMsTUFBQSxDQUFPQyxhQUFBLEVBQ1AsT0FBTztJQUNmO0VBQ0o7RUFFQSxPQUFPO0FBQ1g7QUFDQSxTQUFTbkMsWUFBWXpCLElBQUEsRUFBTTtFQUN2QixTQUFTc0MsQ0FBQSxHQUFJdEMsSUFBQSxDQUFLdUMsS0FBQSxFQUFPRCxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO0lBQ2xDLElBQUlQLEtBQUEsR0FBUS9CLElBQUEsQ0FBS3lDLFVBQUEsQ0FBV0gsQ0FBQztNQUFHaEIsTUFBQSxHQUFTdEIsSUFBQSxDQUFLd0MsSUFBQSxDQUFLRixDQUFDO0lBQ3BELElBQUlQLEtBQUEsSUFBU1QsTUFBQSxDQUFPb0IsVUFBQSxFQUFZO01BQzVCLElBQUlwQixNQUFBLENBQU9SLElBQUEsQ0FBS2EsSUFBQSxDQUFLK0IsU0FBQSxFQUNqQixPQUFPO01BQ1g7SUFDSjtJQUNBLFNBQVNHLEtBQUEsR0FBUXZDLE1BQUEsQ0FBT3FCLEtBQUEsQ0FBTVosS0FBSyxJQUFJOEIsS0FBQSxHQUFRQSxLQUFBLENBQU1mLFVBQUEsRUFBWTtNQUM3RCxJQUFLZSxLQUFBLENBQU1uQixVQUFBLElBQWMsS0FBSyxDQUFDbUIsS0FBQSxDQUFNRCxhQUFBLElBQWtCQyxLQUFBLENBQU1iLE1BQUEsSUFBVWEsS0FBQSxDQUFNL0MsSUFBQSxDQUFLYSxJQUFBLENBQUsrQixTQUFBLEVBQ25GLE9BQU87TUFDWCxJQUFJRyxLQUFBLENBQU1ELGFBQUEsRUFDTixPQUFPO0lBQ2Y7RUFDSjtFQUNBLE9BQU87QUFDWDtBQVdBLFNBQVN4RSxVQUFBLEVBQVk7RUFDakIsT0FBTyxJQUFJTSx3QkFBQSxDQUFBb0UsTUFBQSxDQUFPO0lBQ2RDLEtBQUEsRUFBTztNQUNIQyxXQUFBLEVBQWFDLGFBQUE7TUFDYkMsdUJBQXVCQyxLQUFBLEVBQU9DLE9BQUEsRUFBU0MsS0FBQSxFQUFPO1FBQzFDLE9BQU9ELE9BQUEsQ0FBUXJELEdBQUEsSUFBT3NELEtBQUEsQ0FBTXRELEdBQUEsSUFBTzVCLFNBQUEsQ0FBVW1CLEtBQUEsQ0FBTStELEtBQUssSUFBSSxJQUFJbEYsU0FBQSxDQUFVa0YsS0FBSyxJQUFJO01BQ3ZGO01BQ0FDLFdBQUE7TUFDQUMsYUFBQTtNQUNBQyxlQUFBLEVBQWlCO1FBQUVDO01BQXlCO0lBQ2hEO0VBQ0osQ0FBQztBQUNMO0FBQ0EsSUFBTUYsYUFBQSxPQUFnQi9FLHlCQUFBLENBQUFrRixjQUFBLEVBQWU7RUFDakMsYUFBYUMsS0FBQSxDQUFNLFNBQVMsRUFBRTtFQUM5QixjQUFjQSxLQUFBLENBQU0sU0FBUyxDQUFDO0VBQzlCLFdBQVdBLEtBQUEsQ0FBTSxRQUFRLEVBQUU7RUFDM0IsYUFBYUEsS0FBQSxDQUFNLFFBQVEsQ0FBQztBQUNoQyxDQUFDO0FBQ0QsU0FBU0EsTUFBTUMsSUFBQSxFQUFNMUMsR0FBQSxFQUFLO0VBQ3RCLE1BQU0yQyxNQUFBLEdBQVNELElBQUEsSUFBUSxTQUFVMUMsR0FBQSxHQUFNLElBQUksU0FBUyxPQUFTQSxHQUFBLEdBQU0sSUFBSSxVQUFVO0VBQ2pGLE9BQU8sVUFBVTRDLEtBQUEsRUFBT0MsUUFBQSxFQUFVQyxJQUFBLEVBQU07SUFDcEMsSUFBSUMsR0FBQSxHQUFNSCxLQUFBLENBQU1JLFNBQUE7SUFDaEIsSUFBSUMsTUFBQSxHQUFTakQsR0FBQSxHQUFNLElBQUkrQyxHQUFBLENBQUlHLEdBQUEsR0FBTUgsR0FBQSxDQUFJSSxLQUFBO01BQU9sRCxRQUFBLEdBQVc4QyxHQUFBLENBQUl2RSxLQUFBO0lBQzNELElBQUl1RSxHQUFBLFlBQWV2Rix3QkFBQSxDQUFBNEYsYUFBQSxFQUFlO01BQzlCLElBQUksQ0FBQ04sSUFBQSxDQUFLTyxjQUFBLENBQWVWLE1BQU0sS0FBS00sTUFBQSxDQUFPNUMsS0FBQSxJQUFTLEdBQ2hELE9BQU87TUFDWEosUUFBQSxHQUFXO01BQ1hnRCxNQUFBLEdBQVNMLEtBQUEsQ0FBTTVFLEdBQUEsQ0FBSUUsT0FBQSxDQUFROEIsR0FBQSxHQUFNLElBQUlpRCxNQUFBLENBQU90QixLQUFBLENBQU0sSUFBSXNCLE1BQUEsQ0FBT3hCLE1BQUEsQ0FBTyxDQUFDO0lBQ3pFO0lBQ0EsSUFBSTZCLE1BQUEsR0FBU3JHLFNBQUEsQ0FBVThDLGlCQUFBLENBQWtCa0QsTUFBQSxFQUFRakQsR0FBQSxFQUFLQyxRQUFRO0lBQzlELElBQUksQ0FBQ3FELE1BQUEsRUFDRCxPQUFPO0lBQ1gsSUFBSVQsUUFBQSxFQUNBQSxRQUFBLENBQVNELEtBQUEsQ0FBTVcsRUFBQSxDQUFHQyxZQUFBLENBQWEsSUFBSXZHLFNBQUEsQ0FBVXFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELE9BQU87RUFDWDtBQUNKO0FBQ0EsU0FBU2xCLFlBQVlVLElBQUEsRUFBTWpFLEdBQUEsRUFBSzRFLEtBQUEsRUFBTztFQUNuQyxJQUFJLENBQUNYLElBQUEsSUFBUSxDQUFDQSxJQUFBLENBQUtZLFFBQUEsRUFDZixPQUFPO0VBQ1gsSUFBSTVGLElBQUEsR0FBT2dGLElBQUEsQ0FBS0YsS0FBQSxDQUFNNUUsR0FBQSxDQUFJRSxPQUFBLENBQVFXLEdBQUc7RUFDckMsSUFBSSxDQUFDNUIsU0FBQSxDQUFVbUIsS0FBQSxDQUFNTixJQUFJLEdBQ3JCLE9BQU87RUFDWCxJQUFJNkYsUUFBQSxHQUFXYixJQUFBLENBQUtjLFdBQUEsQ0FBWTtJQUFFQyxJQUFBLEVBQU1KLEtBQUEsQ0FBTUssT0FBQTtJQUFTQyxHQUFBLEVBQUtOLEtBQUEsQ0FBTU87RUFBUSxDQUFDO0VBQzNFLElBQUlMLFFBQUEsSUFBWUEsUUFBQSxDQUFTaEQsTUFBQSxHQUFTLE1BQU1uRCx3QkFBQSxDQUFBd0QsYUFBQSxDQUFjQyxZQUFBLENBQWE2QixJQUFBLENBQUtGLEtBQUEsQ0FBTTVFLEdBQUEsQ0FBSWlHLE1BQUEsQ0FBT04sUUFBQSxDQUFTaEQsTUFBTSxDQUFDLEdBQ3JHLE9BQU87RUFDWG1DLElBQUEsQ0FBS0QsUUFBQSxDQUFTQyxJQUFBLENBQUtGLEtBQUEsQ0FBTVcsRUFBQSxDQUFHQyxZQUFBLENBQWEsSUFBSXZHLFNBQUEsQ0FBVWEsSUFBSSxDQUFDLENBQUM7RUFDN0QsT0FBTztBQUNYO0FBS0EsU0FBU3lFLFlBQVlPLElBQUEsRUFBTVcsS0FBQSxFQUFPO0VBQzlCLElBQUlBLEtBQUEsQ0FBTVMsU0FBQSxJQUFhLDJCQUEyQixFQUFFcEIsSUFBQSxDQUFLRixLQUFBLENBQU1JLFNBQUEsWUFBcUIvRixTQUFBLEdBQ2hGLE9BQU87RUFDWCxJQUFJO0lBQUVrRztFQUFNLElBQUlMLElBQUEsQ0FBS0YsS0FBQSxDQUFNSSxTQUFBO0VBQzNCLElBQUltQixNQUFBLEdBQVNoQixLQUFBLENBQU0vRCxNQUFBLENBQU9RLGNBQUEsQ0FBZXVELEtBQUEsQ0FBTXRELEtBQUEsQ0FBTSxDQUFDLEVBQUV1RSxZQUFBLENBQWF0QixJQUFBLENBQUtGLEtBQUEsQ0FBTXlCLE1BQUEsQ0FBT0MsS0FBQSxDQUFNQyxJQUFJO0VBQ2pHLElBQUksQ0FBQ0osTUFBQSxFQUNELE9BQU87RUFDWCxJQUFJSyxJQUFBLEdBQU8vRyx3QkFBQSxDQUFBZ0gsUUFBQSxDQUFTakcsS0FBQTtFQUNwQixTQUFTa0csQ0FBQSxHQUFJUCxNQUFBLENBQU9RLE1BQUEsR0FBUyxHQUFHRCxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUNwQ0YsSUFBQSxHQUFPL0csd0JBQUEsQ0FBQWdILFFBQUEsQ0FBU0csSUFBQSxDQUFLVCxNQUFBLENBQU9PLENBQUMsRUFBRUcsYUFBQSxDQUFjLE1BQU1MLElBQUksQ0FBQztFQUM1RCxJQUFJakIsRUFBQSxHQUFLVCxJQUFBLENBQUtGLEtBQUEsQ0FBTVcsRUFBQSxDQUFHdUIsT0FBQSxDQUFRM0IsS0FBQSxDQUFNdEUsR0FBQSxFQUFLc0UsS0FBQSxDQUFNdEUsR0FBQSxFQUFLLElBQUlwQix3QkFBQSxDQUFBYyxLQUFBLENBQU1pRyxJQUFBLEVBQU0sR0FBRyxDQUFDLENBQUM7RUFDMUVqQixFQUFBLENBQUdDLFlBQUEsQ0FBYWhHLHdCQUFBLENBQUE0RixhQUFBLENBQWMvRSxJQUFBLENBQUtrRixFQUFBLENBQUd2RixHQUFBLENBQUlFLE9BQUEsQ0FBUWlGLEtBQUEsQ0FBTXRFLEdBQUEsR0FBTSxDQUFDLENBQUMsQ0FBQztFQUNqRWlFLElBQUEsQ0FBS0QsUUFBQSxDQUFTVSxFQUFFO0VBQ2hCLE9BQU87QUFDWDtBQUNBLFNBQVN4QixjQUFjYSxLQUFBLEVBQU87RUFDMUIsSUFBSSxFQUFFQSxLQUFBLENBQU1JLFNBQUEsWUFBcUIvRixTQUFBLEdBQzdCLE9BQU87RUFDWCxJQUFJcUQsSUFBQSxHQUFPeUUsUUFBQSxDQUFTQyxhQUFBLENBQWMsS0FBSztFQUN2QzFFLElBQUEsQ0FBSzJFLFNBQUEsR0FBWTtFQUNqQixPQUFPdkgsdUJBQUEsQ0FBQXdILGFBQUEsQ0FBY0MsTUFBQSxDQUFPdkMsS0FBQSxDQUFNNUUsR0FBQSxFQUFLLENBQUNOLHVCQUFBLENBQUEwSCxVQUFBLENBQVdDLE1BQUEsQ0FBT3pDLEtBQUEsQ0FBTUksU0FBQSxDQUFVN0UsSUFBQSxFQUFNbUMsSUFBQSxFQUFNO0lBQUVnRixHQUFBLEVBQUs7RUFBWSxDQUFDLENBQUMsQ0FBQztBQUNoSCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=