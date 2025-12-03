System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep)],
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

// .beyond/uimport/temp/prosemirror-commands.1.7.1.js
var prosemirror_commands_1_7_1_exports = {};
__export(prosemirror_commands_1_7_1_exports, {
  autoJoin: () => autoJoin,
  baseKeymap: () => baseKeymap,
  chainCommands: () => chainCommands,
  createParagraphNear: () => createParagraphNear,
  deleteSelection: () => deleteSelection,
  exitCode: () => exitCode,
  joinBackward: () => joinBackward,
  joinDown: () => joinDown,
  joinForward: () => joinForward,
  joinTextblockBackward: () => joinTextblockBackward,
  joinTextblockForward: () => joinTextblockForward,
  joinUp: () => joinUp,
  lift: () => lift,
  liftEmptyBlock: () => liftEmptyBlock,
  macBaseKeymap: () => macBaseKeymap,
  newlineInCode: () => newlineInCode,
  pcBaseKeymap: () => pcBaseKeymap,
  selectAll: () => selectAll,
  selectNodeBackward: () => selectNodeBackward,
  selectNodeForward: () => selectNodeForward,
  selectParentNode: () => selectParentNode,
  selectTextblockEnd: () => selectTextblockEnd,
  selectTextblockStart: () => selectTextblockStart,
  setBlockType: () => setBlockType,
  splitBlock: () => splitBlock,
  splitBlockAs: () => splitBlockAs,
  splitBlockKeepMarks: () => splitBlockKeepMarks,
  toggleMark: () => toggleMark,
  wrapIn: () => wrapIn
});
module.exports = __toCommonJS(prosemirror_commands_1_7_1_exports);

// node_modules/prosemirror-commands/dist/index.js
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var deleteSelection = (state, dispatch) => {
  if (state.selection.empty) return false;
  if (dispatch) dispatch(state.tr.deleteSelection().scrollIntoView());
  return true;
};
function atBlockStart(state, view) {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("backward", state) : $cursor.parentOffset > 0)) return null;
  return $cursor;
}
var joinBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  if (!$cut) {
    let range = $cursor.blockRange(),
      target = range && (0, import_prosemirror_transform.liftTarget)(range);
    if (target == null) return false;
    if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  let before = $cut.nodeBefore;
  if (deleteBarrier(state, $cut, dispatch, -1)) return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(before, "end") || import_prosemirror_state.NodeSelection.isSelectable(before))) {
    for (let depth = $cursor.depth;; depth--) {
      let delStep = (0, import_prosemirror_transform.replaceStep)(state.doc, $cursor.before(depth), $cursor.after(depth), import_prosemirror_model.Slice.empty);
      if (delStep && delStep.slice.size < delStep.to - delStep.from) {
        if (dispatch) {
          let tr = state.tr.step(delStep);
          tr.setSelection(textblockAt(before, "end") ? import_prosemirror_state.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos, -1)), -1) : import_prosemirror_state.NodeSelection.create(tr.doc, $cut.pos - before.nodeSize));
          dispatch(tr.scrollIntoView());
        }
        return true;
      }
      if (depth == 1 || $cursor.node(depth - 1).childCount > 1) break;
    }
  }
  if (before.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state.tr.delete($cut.pos - before.nodeSize, $cut.pos).scrollIntoView());
    return true;
  }
  return false;
};
var joinTextblockBackward = (state, dispatch, view) => {
  let $cursor = atBlockStart(state, view);
  if (!$cursor) return false;
  let $cut = findCutBefore($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
var joinTextblockForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  return $cut ? joinTextblocksAround(state, $cut, dispatch) : false;
};
function joinTextblocksAround(state, $cut, dispatch) {
  let before = $cut.nodeBefore,
    beforeText = before,
    beforePos = $cut.pos - 1;
  for (; !beforeText.isTextblock; beforePos--) {
    if (beforeText.type.spec.isolating) return false;
    let child = beforeText.lastChild;
    if (!child) return false;
    beforeText = child;
  }
  let after = $cut.nodeAfter,
    afterText = after,
    afterPos = $cut.pos + 1;
  for (; !afterText.isTextblock; afterPos++) {
    if (afterText.type.spec.isolating) return false;
    let child = afterText.firstChild;
    if (!child) return false;
    afterText = child;
  }
  let step = (0, import_prosemirror_transform.replaceStep)(state.doc, beforePos, afterPos, import_prosemirror_model.Slice.empty);
  if (!step || step.from != beforePos || step instanceof import_prosemirror_transform.ReplaceStep && step.slice.size >= afterPos - beforePos) return false;
  if (dispatch) {
    let tr = state.tr.step(step);
    tr.setSelection(import_prosemirror_state.TextSelection.create(tr.doc, beforePos));
    dispatch(tr.scrollIntoView());
  }
  return true;
}
function textblockAt(node, side, only = false) {
  for (let scan = node; scan; scan = side == "start" ? scan.firstChild : scan.lastChild) {
    if (scan.isTextblock) return true;
    if (only && scan.childCount != 1) return false;
  }
  return false;
}
var selectNodeBackward = (state, dispatch, view) => {
  let {
      $head,
      empty
    } = state.selection,
    $cut = $head;
  if (!empty) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("backward", state) : $head.parentOffset > 0) return false;
    $cut = findCutBefore($head);
  }
  let node = $cut && $cut.nodeBefore;
  if (!node || !import_prosemirror_state.NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.NodeSelection.create(state.doc, $cut.pos - node.nodeSize)).scrollIntoView());
  return true;
};
function findCutBefore($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    if ($pos.index(i) > 0) return $pos.doc.resolve($pos.before(i + 1));
    if ($pos.node(i).type.spec.isolating) break;
  }
  return null;
}
function atBlockEnd(state, view) {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || (view ? !view.endOfTextblock("forward", state) : $cursor.parentOffset < $cursor.parent.content.size)) return null;
  return $cursor;
}
var joinForward = (state, dispatch, view) => {
  let $cursor = atBlockEnd(state, view);
  if (!$cursor) return false;
  let $cut = findCutAfter($cursor);
  if (!$cut) return false;
  let after = $cut.nodeAfter;
  if (deleteBarrier(state, $cut, dispatch, 1)) return true;
  if ($cursor.parent.content.size == 0 && (textblockAt(after, "start") || import_prosemirror_state.NodeSelection.isSelectable(after))) {
    let delStep = (0, import_prosemirror_transform.replaceStep)(state.doc, $cursor.before(), $cursor.after(), import_prosemirror_model.Slice.empty);
    if (delStep && delStep.slice.size < delStep.to - delStep.from) {
      if (dispatch) {
        let tr = state.tr.step(delStep);
        tr.setSelection(textblockAt(after, "start") ? import_prosemirror_state.Selection.findFrom(tr.doc.resolve(tr.mapping.map($cut.pos)), 1) : import_prosemirror_state.NodeSelection.create(tr.doc, tr.mapping.map($cut.pos)));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  if (after.isAtom && $cut.depth == $cursor.depth - 1) {
    if (dispatch) dispatch(state.tr.delete($cut.pos, $cut.pos + after.nodeSize).scrollIntoView());
    return true;
  }
  return false;
};
var selectNodeForward = (state, dispatch, view) => {
  let {
      $head,
      empty
    } = state.selection,
    $cut = $head;
  if (!empty) return false;
  if ($head.parent.isTextblock) {
    if (view ? !view.endOfTextblock("forward", state) : $head.parentOffset < $head.parent.content.size) return false;
    $cut = findCutAfter($head);
  }
  let node = $cut && $cut.nodeAfter;
  if (!node || !import_prosemirror_state.NodeSelection.isSelectable(node)) return false;
  if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.NodeSelection.create(state.doc, $cut.pos)).scrollIntoView());
  return true;
};
function findCutAfter($pos) {
  if (!$pos.parent.type.spec.isolating) for (let i = $pos.depth - 1; i >= 0; i--) {
    let parent = $pos.node(i);
    if ($pos.index(i) + 1 < parent.childCount) return $pos.doc.resolve($pos.after(i + 1));
    if (parent.type.spec.isolating) break;
  }
  return null;
}
var joinUp = (state, dispatch) => {
  let sel = state.selection,
    nodeSel = sel instanceof import_prosemirror_state.NodeSelection,
    point;
  if (nodeSel) {
    if (sel.node.isTextblock || !(0, import_prosemirror_transform.canJoin)(state.doc, sel.from)) return false;
    point = sel.from;
  } else {
    point = (0, import_prosemirror_transform.joinPoint)(state.doc, sel.from, -1);
    if (point == null) return false;
  }
  if (dispatch) {
    let tr = state.tr.join(point);
    if (nodeSel) tr.setSelection(import_prosemirror_state.NodeSelection.create(tr.doc, point - state.doc.resolve(point).nodeBefore.nodeSize));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var joinDown = (state, dispatch) => {
  let sel = state.selection,
    point;
  if (sel instanceof import_prosemirror_state.NodeSelection) {
    if (sel.node.isTextblock || !(0, import_prosemirror_transform.canJoin)(state.doc, sel.to)) return false;
    point = sel.to;
  } else {
    point = (0, import_prosemirror_transform.joinPoint)(state.doc, sel.to, 1);
    if (point == null) return false;
  }
  if (dispatch) dispatch(state.tr.join(point).scrollIntoView());
  return true;
};
var lift = (state, dispatch) => {
  let {
    $from,
    $to
  } = state.selection;
  let range = $from.blockRange($to),
    target = range && (0, import_prosemirror_transform.liftTarget)(range);
  if (target == null) return false;
  if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
var newlineInCode = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  if (dispatch) dispatch(state.tr.insertText("\n").scrollIntoView());
  return true;
};
function defaultBlockAt(match) {
  for (let i = 0; i < match.edgeCount; i++) {
    let {
      type
    } = match.edge(i);
    if (type.isTextblock && !type.hasRequiredAttrs()) return type;
  }
  return null;
}
var exitCode = (state, dispatch) => {
  let {
    $head,
    $anchor
  } = state.selection;
  if (!$head.parent.type.spec.code || !$head.sameParent($anchor)) return false;
  let above = $head.node(-1),
    after = $head.indexAfter(-1),
    type = defaultBlockAt(above.contentMatchAt(after));
  if (!type || !above.canReplaceWith(after, after, type)) return false;
  if (dispatch) {
    let pos = $head.after(),
      tr = state.tr.replaceWith(pos, pos, type.createAndFill());
    tr.setSelection(import_prosemirror_state.Selection.near(tr.doc.resolve(pos), 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var createParagraphNear = (state, dispatch) => {
  let sel = state.selection,
    {
      $from,
      $to
    } = sel;
  if (sel instanceof import_prosemirror_state.AllSelection || $from.parent.inlineContent || $to.parent.inlineContent) return false;
  let type = defaultBlockAt($to.parent.contentMatchAt($to.indexAfter()));
  if (!type || !type.isTextblock) return false;
  if (dispatch) {
    let side = (!$from.parentOffset && $to.index() < $to.parent.childCount ? $from : $to).pos;
    let tr = state.tr.insert(side, type.createAndFill());
    tr.setSelection(import_prosemirror_state.TextSelection.create(tr.doc, side + 1));
    dispatch(tr.scrollIntoView());
  }
  return true;
};
var liftEmptyBlock = (state, dispatch) => {
  let {
    $cursor
  } = state.selection;
  if (!$cursor || $cursor.parent.content.size) return false;
  if ($cursor.depth > 1 && $cursor.after() != $cursor.end(-1)) {
    let before = $cursor.before();
    if ((0, import_prosemirror_transform.canSplit)(state.doc, before)) {
      if (dispatch) dispatch(state.tr.split(before).scrollIntoView());
      return true;
    }
  }
  let range = $cursor.blockRange(),
    target = range && (0, import_prosemirror_transform.liftTarget)(range);
  if (target == null) return false;
  if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
  return true;
};
function splitBlockAs(splitNode) {
  return (state, dispatch) => {
    let {
      $from,
      $to
    } = state.selection;
    if (state.selection instanceof import_prosemirror_state.NodeSelection && state.selection.node.isBlock) {
      if (!$from.parentOffset || !(0, import_prosemirror_transform.canSplit)(state.doc, $from.pos)) return false;
      if (dispatch) dispatch(state.tr.split($from.pos).scrollIntoView());
      return true;
    }
    if (!$from.depth) return false;
    let types = [];
    let splitDepth,
      deflt,
      atEnd = false,
      atStart = false;
    for (let d = $from.depth;; d--) {
      let node = $from.node(d);
      if (node.isBlock) {
        atEnd = $from.end(d) == $from.pos + ($from.depth - d);
        atStart = $from.start(d) == $from.pos - ($from.depth - d);
        deflt = defaultBlockAt($from.node(d - 1).contentMatchAt($from.indexAfter(d - 1)));
        let splitType = splitNode && splitNode($to.parent, atEnd, $from);
        types.unshift(splitType || (atEnd && deflt ? {
          type: deflt
        } : null));
        splitDepth = d;
        break;
      } else {
        if (d == 1) return false;
        types.unshift(null);
      }
    }
    let tr = state.tr;
    if (state.selection instanceof import_prosemirror_state.TextSelection || state.selection instanceof import_prosemirror_state.AllSelection) tr.deleteSelection();
    let splitPos = tr.mapping.map($from.pos);
    let can = (0, import_prosemirror_transform.canSplit)(tr.doc, splitPos, types.length, types);
    if (!can) {
      types[0] = deflt ? {
        type: deflt
      } : null;
      can = (0, import_prosemirror_transform.canSplit)(tr.doc, splitPos, types.length, types);
    }
    if (!can) return false;
    tr.split(splitPos, types.length, types);
    if (!atEnd && atStart && $from.node(splitDepth).type != deflt) {
      let first = tr.mapping.map($from.before(splitDepth)),
        $first = tr.doc.resolve(first);
      if (deflt && $from.node(splitDepth - 1).canReplaceWith($first.index(), $first.index() + 1, deflt)) tr.setNodeMarkup(tr.mapping.map($from.before(splitDepth)), deflt);
    }
    if (dispatch) dispatch(tr.scrollIntoView());
    return true;
  };
}
var splitBlock = splitBlockAs();
var splitBlockKeepMarks = (state, dispatch) => {
  return splitBlock(state, dispatch && (tr => {
    let marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
    if (marks) tr.ensureMarks(marks);
    dispatch(tr);
  }));
};
var selectParentNode = (state, dispatch) => {
  let {
      $from,
      to
    } = state.selection,
    pos;
  let same = $from.sharedDepth(to);
  if (same == 0) return false;
  pos = $from.before(same);
  if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.NodeSelection.create(state.doc, pos)));
  return true;
};
var selectAll = (state, dispatch) => {
  if (dispatch) dispatch(state.tr.setSelection(new import_prosemirror_state.AllSelection(state.doc)));
  return true;
};
function joinMaybeClear(state, $pos, dispatch) {
  let before = $pos.nodeBefore,
    after = $pos.nodeAfter,
    index = $pos.index();
  if (!before || !after || !before.type.compatibleContent(after.type)) return false;
  if (!before.content.size && $pos.parent.canReplace(index - 1, index)) {
    if (dispatch) dispatch(state.tr.delete($pos.pos - before.nodeSize, $pos.pos).scrollIntoView());
    return true;
  }
  if (!$pos.parent.canReplace(index, index + 1) || !(after.isTextblock || (0, import_prosemirror_transform.canJoin)(state.doc, $pos.pos))) return false;
  if (dispatch) dispatch(state.tr.join($pos.pos).scrollIntoView());
  return true;
}
function deleteBarrier(state, $cut, dispatch, dir) {
  let before = $cut.nodeBefore,
    after = $cut.nodeAfter,
    conn,
    match;
  let isolated = before.type.spec.isolating || after.type.spec.isolating;
  if (!isolated && joinMaybeClear(state, $cut, dispatch)) return true;
  let canDelAfter = !isolated && $cut.parent.canReplace($cut.index(), $cut.index() + 1);
  if (canDelAfter && (conn = (match = before.contentMatchAt(before.childCount)).findWrapping(after.type)) && match.matchType(conn[0] || after.type).validEnd) {
    if (dispatch) {
      let end = $cut.pos + after.nodeSize,
        wrap = import_prosemirror_model.Fragment.empty;
      for (let i = conn.length - 1; i >= 0; i--) wrap = import_prosemirror_model.Fragment.from(conn[i].create(null, wrap));
      wrap = import_prosemirror_model.Fragment.from(before.copy(wrap));
      let tr = state.tr.step(new import_prosemirror_transform.ReplaceAroundStep($cut.pos - 1, end, $cut.pos, end, new import_prosemirror_model.Slice(wrap, 1, 0), conn.length, true));
      let $joinAt = tr.doc.resolve(end + 2 * conn.length);
      if ($joinAt.nodeAfter && $joinAt.nodeAfter.type == before.type && (0, import_prosemirror_transform.canJoin)(tr.doc, $joinAt.pos)) tr.join($joinAt.pos);
      dispatch(tr.scrollIntoView());
    }
    return true;
  }
  let selAfter = after.type.spec.isolating || dir > 0 && isolated ? null : import_prosemirror_state.Selection.findFrom($cut, 1);
  let range = selAfter && selAfter.$from.blockRange(selAfter.$to),
    target = range && (0, import_prosemirror_transform.liftTarget)(range);
  if (target != null && target >= $cut.depth) {
    if (dispatch) dispatch(state.tr.lift(range, target).scrollIntoView());
    return true;
  }
  if (canDelAfter && textblockAt(after, "start", true) && textblockAt(before, "end")) {
    let at = before,
      wrap = [];
    for (;;) {
      wrap.push(at);
      if (at.isTextblock) break;
      at = at.lastChild;
    }
    let afterText = after,
      afterDepth = 1;
    for (; !afterText.isTextblock; afterText = afterText.firstChild) afterDepth++;
    if (at.canReplace(at.childCount, at.childCount, afterText.content)) {
      if (dispatch) {
        let end = import_prosemirror_model.Fragment.empty;
        for (let i = wrap.length - 1; i >= 0; i--) end = import_prosemirror_model.Fragment.from(wrap[i].copy(end));
        let tr = state.tr.step(new import_prosemirror_transform.ReplaceAroundStep($cut.pos - wrap.length, $cut.pos + after.nodeSize, $cut.pos + afterDepth, $cut.pos + after.nodeSize - afterDepth, new import_prosemirror_model.Slice(end, wrap.length, 0), 0, true));
        dispatch(tr.scrollIntoView());
      }
      return true;
    }
  }
  return false;
}
function selectTextblockSide(side) {
  return function (state, dispatch) {
    let sel = state.selection,
      $pos = side < 0 ? sel.$from : sel.$to;
    let depth = $pos.depth;
    while ($pos.node(depth).isInline) {
      if (!depth) return false;
      depth--;
    }
    if (!$pos.node(depth).isTextblock) return false;
    if (dispatch) dispatch(state.tr.setSelection(import_prosemirror_state.TextSelection.create(state.doc, side < 0 ? $pos.start(depth) : $pos.end(depth))));
    return true;
  };
}
var selectTextblockStart = selectTextblockSide(-1);
var selectTextblockEnd = selectTextblockSide(1);
function wrapIn(nodeType, attrs = null) {
  return function (state, dispatch) {
    let {
      $from,
      $to
    } = state.selection;
    let range = $from.blockRange($to),
      wrapping = range && (0, import_prosemirror_transform.findWrapping)(range, nodeType, attrs);
    if (!wrapping) return false;
    if (dispatch) dispatch(state.tr.wrap(range, wrapping).scrollIntoView());
    return true;
  };
}
function setBlockType(nodeType, attrs = null) {
  return function (state, dispatch) {
    let applicable = false;
    for (let i = 0; i < state.selection.ranges.length && !applicable; i++) {
      let {
        $from: {
          pos: from
        },
        $to: {
          pos: to
        }
      } = state.selection.ranges[i];
      state.doc.nodesBetween(from, to, (node, pos) => {
        if (applicable) return false;
        if (!node.isTextblock || node.hasMarkup(nodeType, attrs)) return;
        if (node.type == nodeType) {
          applicable = true;
        } else {
          let $pos = state.doc.resolve(pos),
            index = $pos.index();
          applicable = $pos.parent.canReplaceWith(index, index + 1, nodeType);
        }
      });
    }
    if (!applicable) return false;
    if (dispatch) {
      let tr = state.tr;
      for (let i = 0; i < state.selection.ranges.length; i++) {
        let {
          $from: {
            pos: from
          },
          $to: {
            pos: to
          }
        } = state.selection.ranges[i];
        tr.setBlockType(from, to, nodeType, attrs);
      }
      dispatch(tr.scrollIntoView());
    }
    return true;
  };
}
function markApplies(doc, ranges, type, enterAtoms) {
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    let can = $from.depth == 0 ? doc.inlineContent && doc.type.allowsMarkType(type) : false;
    doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (can || !enterAtoms && node.isAtom && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) return false;
      can = node.inlineContent && node.type.allowsMarkType(type);
    });
    if (can) return true;
  }
  return false;
}
function removeInlineAtoms(ranges) {
  let result = [];
  for (let i = 0; i < ranges.length; i++) {
    let {
      $from,
      $to
    } = ranges[i];
    $from.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
      if (node.isAtom && node.content.size && node.isInline && pos >= $from.pos && pos + node.nodeSize <= $to.pos) {
        if (pos + 1 > $from.pos) result.push(new import_prosemirror_state.SelectionRange($from, $from.doc.resolve(pos + 1)));
        $from = $from.doc.resolve(pos + 1 + node.content.size);
        return false;
      }
    });
    if ($from.pos < $to.pos) result.push(new import_prosemirror_state.SelectionRange($from, $to));
  }
  return result;
}
function toggleMark(markType, attrs = null, options) {
  let removeWhenPresent = (options && options.removeWhenPresent) !== false;
  let enterAtoms = (options && options.enterInlineAtoms) !== false;
  let dropSpace = !(options && options.includeWhitespace);
  return function (state, dispatch) {
    let {
      empty,
      $cursor,
      ranges
    } = state.selection;
    if (empty && !$cursor || !markApplies(state.doc, ranges, markType, enterAtoms)) return false;
    if (dispatch) {
      if ($cursor) {
        if (markType.isInSet(state.storedMarks || $cursor.marks())) dispatch(state.tr.removeStoredMark(markType));else dispatch(state.tr.addStoredMark(markType.create(attrs)));
      } else {
        let add,
          tr = state.tr;
        if (!enterAtoms) ranges = removeInlineAtoms(ranges);
        if (removeWhenPresent) {
          add = !ranges.some(r => state.doc.rangeHasMark(r.$from.pos, r.$to.pos, markType));
        } else {
          add = !ranges.every(r => {
            let missing = false;
            tr.doc.nodesBetween(r.$from.pos, r.$to.pos, (node, pos, parent) => {
              if (missing) return false;
              missing = !markType.isInSet(node.marks) && !!parent && parent.type.allowsMarkType(markType) && !(node.isText && /^\s*$/.test(node.textBetween(Math.max(0, r.$from.pos - pos), Math.min(node.nodeSize, r.$to.pos - pos))));
            });
            return !missing;
          });
        }
        for (let i = 0; i < ranges.length; i++) {
          let {
            $from,
            $to
          } = ranges[i];
          if (!add) {
            tr.removeMark($from.pos, $to.pos, markType);
          } else {
            let from = $from.pos,
              to = $to.pos,
              start = $from.nodeAfter,
              end = $to.nodeBefore;
            let spaceStart = dropSpace && start && start.isText ? /^\s*/.exec(start.text)[0].length : 0;
            let spaceEnd = dropSpace && end && end.isText ? /\s*$/.exec(end.text)[0].length : 0;
            if (from + spaceStart < to) {
              from += spaceStart;
              to -= spaceEnd;
            }
            tr.addMark(from, to, markType.create(attrs));
          }
        }
        dispatch(tr.scrollIntoView());
      }
    }
    return true;
  };
}
function wrapDispatchForJoin(dispatch, isJoinable) {
  return tr => {
    if (!tr.isGeneric) return dispatch(tr);
    let ranges = [];
    for (let i = 0; i < tr.mapping.maps.length; i++) {
      let map = tr.mapping.maps[i];
      for (let j = 0; j < ranges.length; j++) ranges[j] = map.map(ranges[j]);
      map.forEach((_s, _e, from, to) => ranges.push(from, to));
    }
    let joinable = [];
    for (let i = 0; i < ranges.length; i += 2) {
      let from = ranges[i],
        to = ranges[i + 1];
      let $from = tr.doc.resolve(from),
        depth = $from.sharedDepth(to),
        parent = $from.node(depth);
      for (let index = $from.indexAfter(depth), pos = $from.after(depth + 1); pos <= to; ++index) {
        let after = parent.maybeChild(index);
        if (!after) break;
        if (index && joinable.indexOf(pos) == -1) {
          let before = parent.child(index - 1);
          if (before.type == after.type && isJoinable(before, after)) joinable.push(pos);
        }
        pos += after.nodeSize;
      }
    }
    joinable.sort((a, b) => a - b);
    for (let i = joinable.length - 1; i >= 0; i--) {
      if ((0, import_prosemirror_transform.canJoin)(tr.doc, joinable[i])) tr.join(joinable[i]);
    }
    dispatch(tr);
  };
}
function autoJoin(command, isJoinable) {
  let canJoin2 = Array.isArray(isJoinable) ? node => isJoinable.indexOf(node.type.name) > -1 : isJoinable;
  return (state, dispatch, view) => command(state, dispatch && wrapDispatchForJoin(dispatch, canJoin2), view);
}
function chainCommands(...commands) {
  return function (state, dispatch, view) {
    for (let i = 0; i < commands.length; i++) if (commands[i](state, dispatch, view)) return true;
    return false;
  };
}
var backspace = chainCommands(deleteSelection, joinBackward, selectNodeBackward);
var del = chainCommands(deleteSelection, joinForward, selectNodeForward);
var pcBaseKeymap = {
  "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
  "Mod-Enter": exitCode,
  "Backspace": backspace,
  "Mod-Backspace": backspace,
  "Shift-Backspace": backspace,
  "Delete": del,
  "Mod-Delete": del,
  "Mod-a": selectAll
};
var macBaseKeymap = {
  "Ctrl-h": pcBaseKeymap["Backspace"],
  "Alt-Backspace": pcBaseKeymap["Mod-Backspace"],
  "Ctrl-d": pcBaseKeymap["Delete"],
  "Ctrl-Alt-Backspace": pcBaseKeymap["Mod-Delete"],
  "Alt-Delete": pcBaseKeymap["Mod-Delete"],
  "Alt-d": pcBaseKeymap["Mod-Delete"],
  "Ctrl-a": selectTextblockStart,
  "Ctrl-e": selectTextblockEnd
};
for (let key in pcBaseKeymap) macBaseKeymap[key] = pcBaseKeymap[key];
var mac = typeof navigator != "undefined" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os != "undefined" && os.platform ? os.platform() == "darwin" : false;
var baseKeymap = mac ? macBaseKeymap : pcBaseKeymap;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWNvbW1hbmRzLjEuNy4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWNvbW1hbmRzL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3JfY29tbWFuZHNfMV83XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiYXV0b0pvaW4iLCJiYXNlS2V5bWFwIiwiY2hhaW5Db21tYW5kcyIsImNyZWF0ZVBhcmFncmFwaE5lYXIiLCJkZWxldGVTZWxlY3Rpb24iLCJleGl0Q29kZSIsImpvaW5CYWNrd2FyZCIsImpvaW5Eb3duIiwiam9pbkZvcndhcmQiLCJqb2luVGV4dGJsb2NrQmFja3dhcmQiLCJqb2luVGV4dGJsb2NrRm9yd2FyZCIsImpvaW5VcCIsImxpZnQiLCJsaWZ0RW1wdHlCbG9jayIsIm1hY0Jhc2VLZXltYXAiLCJuZXdsaW5lSW5Db2RlIiwicGNCYXNlS2V5bWFwIiwic2VsZWN0QWxsIiwic2VsZWN0Tm9kZUJhY2t3YXJkIiwic2VsZWN0Tm9kZUZvcndhcmQiLCJzZWxlY3RQYXJlbnROb2RlIiwic2VsZWN0VGV4dGJsb2NrRW5kIiwic2VsZWN0VGV4dGJsb2NrU3RhcnQiLCJzZXRCbG9ja1R5cGUiLCJzcGxpdEJsb2NrIiwic3BsaXRCbG9ja0FzIiwic3BsaXRCbG9ja0tlZXBNYXJrcyIsInRvZ2dsZU1hcmsiLCJ3cmFwSW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX3RyYW5zZm9ybSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfbW9kZWwiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfc3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2VsZWN0aW9uIiwiZW1wdHkiLCJ0ciIsInNjcm9sbEludG9WaWV3IiwiYXRCbG9ja1N0YXJ0IiwidmlldyIsIiRjdXJzb3IiLCJlbmRPZlRleHRibG9jayIsInBhcmVudE9mZnNldCIsIiRjdXQiLCJmaW5kQ3V0QmVmb3JlIiwicmFuZ2UiLCJibG9ja1JhbmdlIiwidGFyZ2V0IiwibGlmdFRhcmdldCIsImJlZm9yZSIsIm5vZGVCZWZvcmUiLCJkZWxldGVCYXJyaWVyIiwicGFyZW50IiwiY29udGVudCIsInNpemUiLCJ0ZXh0YmxvY2tBdCIsIk5vZGVTZWxlY3Rpb24iLCJpc1NlbGVjdGFibGUiLCJkZXB0aCIsImRlbFN0ZXAiLCJyZXBsYWNlU3RlcCIsImRvYyIsImFmdGVyIiwiU2xpY2UiLCJzbGljZSIsInRvIiwiZnJvbSIsInN0ZXAiLCJzZXRTZWxlY3Rpb24iLCJTZWxlY3Rpb24iLCJmaW5kRnJvbSIsInJlc29sdmUiLCJtYXBwaW5nIiwibWFwIiwicG9zIiwiY3JlYXRlIiwibm9kZVNpemUiLCJub2RlIiwiY2hpbGRDb3VudCIsImlzQXRvbSIsImRlbGV0ZSIsImpvaW5UZXh0YmxvY2tzQXJvdW5kIiwiYXRCbG9ja0VuZCIsImZpbmRDdXRBZnRlciIsImJlZm9yZVRleHQiLCJiZWZvcmVQb3MiLCJpc1RleHRibG9jayIsInR5cGUiLCJzcGVjIiwiaXNvbGF0aW5nIiwiY2hpbGQiLCJsYXN0Q2hpbGQiLCJub2RlQWZ0ZXIiLCJhZnRlclRleHQiLCJhZnRlclBvcyIsImZpcnN0Q2hpbGQiLCJSZXBsYWNlU3RlcCIsIlRleHRTZWxlY3Rpb24iLCJzaWRlIiwib25seSIsInNjYW4iLCIkaGVhZCIsIiRwb3MiLCJpIiwiaW5kZXgiLCJzZWwiLCJub2RlU2VsIiwicG9pbnQiLCJjYW5Kb2luIiwiam9pblBvaW50Iiwiam9pbiIsIiRmcm9tIiwiJHRvIiwiJGFuY2hvciIsImNvZGUiLCJzYW1lUGFyZW50IiwiaW5zZXJ0VGV4dCIsImRlZmF1bHRCbG9ja0F0IiwibWF0Y2giLCJlZGdlQ291bnQiLCJlZGdlIiwiaGFzUmVxdWlyZWRBdHRycyIsImFib3ZlIiwiaW5kZXhBZnRlciIsImNvbnRlbnRNYXRjaEF0IiwiY2FuUmVwbGFjZVdpdGgiLCJyZXBsYWNlV2l0aCIsImNyZWF0ZUFuZEZpbGwiLCJuZWFyIiwiQWxsU2VsZWN0aW9uIiwiaW5saW5lQ29udGVudCIsImluc2VydCIsImVuZCIsImNhblNwbGl0Iiwic3BsaXQiLCJzcGxpdE5vZGUiLCJpc0Jsb2NrIiwidHlwZXMiLCJzcGxpdERlcHRoIiwiZGVmbHQiLCJhdEVuZCIsImF0U3RhcnQiLCJkIiwic3RhcnQiLCJzcGxpdFR5cGUiLCJ1bnNoaWZ0Iiwic3BsaXRQb3MiLCJjYW4iLCJsZW5ndGgiLCJmaXJzdCIsIiRmaXJzdCIsInNldE5vZGVNYXJrdXAiLCJtYXJrcyIsInN0b3JlZE1hcmtzIiwiZW5zdXJlTWFya3MiLCJzYW1lIiwic2hhcmVkRGVwdGgiLCJqb2luTWF5YmVDbGVhciIsImNvbXBhdGlibGVDb250ZW50IiwiY2FuUmVwbGFjZSIsImRpciIsImNvbm4iLCJpc29sYXRlZCIsImNhbkRlbEFmdGVyIiwiZmluZFdyYXBwaW5nIiwibWF0Y2hUeXBlIiwidmFsaWRFbmQiLCJ3cmFwIiwiRnJhZ21lbnQiLCJjb3B5IiwiUmVwbGFjZUFyb3VuZFN0ZXAiLCIkam9pbkF0Iiwic2VsQWZ0ZXIiLCJhdCIsInB1c2giLCJhZnRlckRlcHRoIiwic2VsZWN0VGV4dGJsb2NrU2lkZSIsImlzSW5saW5lIiwibm9kZVR5cGUiLCJhdHRycyIsIndyYXBwaW5nIiwiYXBwbGljYWJsZSIsInJhbmdlcyIsIm5vZGVzQmV0d2VlbiIsImhhc01hcmt1cCIsIm1hcmtBcHBsaWVzIiwiZW50ZXJBdG9tcyIsImFsbG93c01hcmtUeXBlIiwicmVtb3ZlSW5saW5lQXRvbXMiLCJyZXN1bHQiLCJTZWxlY3Rpb25SYW5nZSIsIm1hcmtUeXBlIiwib3B0aW9ucyIsInJlbW92ZVdoZW5QcmVzZW50IiwiZW50ZXJJbmxpbmVBdG9tcyIsImRyb3BTcGFjZSIsImluY2x1ZGVXaGl0ZXNwYWNlIiwiaXNJblNldCIsInJlbW92ZVN0b3JlZE1hcmsiLCJhZGRTdG9yZWRNYXJrIiwiYWRkIiwic29tZSIsInIiLCJyYW5nZUhhc01hcmsiLCJldmVyeSIsIm1pc3NpbmciLCJpc1RleHQiLCJ0ZXN0IiwidGV4dEJldHdlZW4iLCJNYXRoIiwibWF4IiwibWluIiwicmVtb3ZlTWFyayIsInNwYWNlU3RhcnQiLCJleGVjIiwidGV4dCIsInNwYWNlRW5kIiwiYWRkTWFyayIsIndyYXBEaXNwYXRjaEZvckpvaW4iLCJpc0pvaW5hYmxlIiwiaXNHZW5lcmljIiwibWFwcyIsImoiLCJmb3JFYWNoIiwiX3MiLCJfZSIsImpvaW5hYmxlIiwibWF5YmVDaGlsZCIsImluZGV4T2YiLCJzb3J0IiwiYSIsImIiLCJjb21tYW5kIiwiY2FuSm9pbjIiLCJBcnJheSIsImlzQXJyYXkiLCJuYW1lIiwiY29tbWFuZHMiLCJiYWNrc3BhY2UiLCJkZWwiLCJrZXkiLCJtYWMiLCJuYXZpZ2F0b3IiLCJwbGF0Zm9ybSIsIm9zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQ0FBQTtBQUFBQyxRQUFBLENBQUFELGtDQUFBO0VBQUFFLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFqQyxrQ0FBQTs7O0FDQUEsSUFBQWtDLDRCQUFBLEdBQW9IQyxPQUFBO0FBQ3BILElBQUFDLHdCQUFBLEdBQWdDRCxPQUFBO0FBQ2hDLElBQUFFLHdCQUFBLEdBQXNGRixPQUFBO0FBS3RGLElBQU03QixlQUFBLEdBQWtCQSxDQUFDZ0MsS0FBQSxFQUFPQyxRQUFBLEtBQWE7RUFDekMsSUFBSUQsS0FBQSxDQUFNRSxTQUFBLENBQVVDLEtBQUEsRUFDaEIsT0FBTztFQUNYLElBQUlGLFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBR3BDLGVBQUEsQ0FBZ0IsRUFBRXFDLGNBQUEsQ0FBZSxDQUFDO0VBQ3hELE9BQU87QUFDWDtBQUNBLFNBQVNDLGFBQWFOLEtBQUEsRUFBT08sSUFBQSxFQUFNO0VBQy9CLElBQUk7SUFBRUM7RUFBUSxJQUFJUixLQUFBLENBQU1FLFNBQUE7RUFDeEIsSUFBSSxDQUFDTSxPQUFBLEtBQVlELElBQUEsR0FBTyxDQUFDQSxJQUFBLENBQUtFLGNBQUEsQ0FBZSxZQUFZVCxLQUFLLElBQ3hEUSxPQUFBLENBQVFFLFlBQUEsR0FBZSxJQUN6QixPQUFPO0VBQ1gsT0FBT0YsT0FBQTtBQUNYO0FBVUEsSUFBTXRDLFlBQUEsR0FBZUEsQ0FBQzhCLEtBQUEsRUFBT0MsUUFBQSxFQUFVTSxJQUFBLEtBQVM7RUFDNUMsSUFBSUMsT0FBQSxHQUFVRixZQUFBLENBQWFOLEtBQUEsRUFBT08sSUFBSTtFQUN0QyxJQUFJLENBQUNDLE9BQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSUcsSUFBQSxHQUFPQyxhQUFBLENBQWNKLE9BQU87RUFFaEMsSUFBSSxDQUFDRyxJQUFBLEVBQU07SUFDUCxJQUFJRSxLQUFBLEdBQVFMLE9BQUEsQ0FBUU0sVUFBQSxDQUFXO01BQUdDLE1BQUEsR0FBU0YsS0FBQSxRQUFTakIsNEJBQUEsQ0FBQW9CLFVBQUEsRUFBV0gsS0FBSztJQUNwRSxJQUFJRSxNQUFBLElBQVUsTUFDVixPQUFPO0lBQ1gsSUFBSWQsUUFBQSxFQUNBQSxRQUFBLENBQVNELEtBQUEsQ0FBTUksRUFBQSxDQUFHNUIsSUFBQSxDQUFLcUMsS0FBQSxFQUFPRSxNQUFNLEVBQUVWLGNBQUEsQ0FBZSxDQUFDO0lBQzFELE9BQU87RUFDWDtFQUNBLElBQUlZLE1BQUEsR0FBU04sSUFBQSxDQUFLTyxVQUFBO0VBRWxCLElBQUlDLGFBQUEsQ0FBY25CLEtBQUEsRUFBT1csSUFBQSxFQUFNVixRQUFBLEVBQVUsRUFBRSxHQUN2QyxPQUFPO0VBR1gsSUFBSU8sT0FBQSxDQUFRWSxNQUFBLENBQU9DLE9BQUEsQ0FBUUMsSUFBQSxJQUFRLE1BQzlCQyxXQUFBLENBQVlOLE1BQUEsRUFBUSxLQUFLLEtBQUtsQix3QkFBQSxDQUFBeUIsYUFBQSxDQUFjQyxZQUFBLENBQWFSLE1BQU0sSUFBSTtJQUNwRSxTQUFTUyxLQUFBLEdBQVFsQixPQUFBLENBQVFrQixLQUFBLEdBQVFBLEtBQUEsSUFBUztNQUN0QyxJQUFJQyxPQUFBLE9BQVUvQiw0QkFBQSxDQUFBZ0MsV0FBQSxFQUFZNUIsS0FBQSxDQUFNNkIsR0FBQSxFQUFLckIsT0FBQSxDQUFRUyxNQUFBLENBQU9TLEtBQUssR0FBR2xCLE9BQUEsQ0FBUXNCLEtBQUEsQ0FBTUosS0FBSyxHQUFHNUIsd0JBQUEsQ0FBQWlDLEtBQUEsQ0FBTTVCLEtBQUs7TUFDN0YsSUFBSXdCLE9BQUEsSUFBV0EsT0FBQSxDQUFRSyxLQUFBLENBQU1WLElBQUEsR0FBT0ssT0FBQSxDQUFRTSxFQUFBLEdBQUtOLE9BQUEsQ0FBUU8sSUFBQSxFQUFNO1FBQzNELElBQUlqQyxRQUFBLEVBQVU7VUFDVixJQUFJRyxFQUFBLEdBQUtKLEtBQUEsQ0FBTUksRUFBQSxDQUFHK0IsSUFBQSxDQUFLUixPQUFPO1VBQzlCdkIsRUFBQSxDQUFHZ0MsWUFBQSxDQUFhYixXQUFBLENBQVlOLE1BQUEsRUFBUSxLQUFLLElBQ25DbEIsd0JBQUEsQ0FBQXNDLFNBQUEsQ0FBVUMsUUFBQSxDQUFTbEMsRUFBQSxDQUFHeUIsR0FBQSxDQUFJVSxPQUFBLENBQVFuQyxFQUFBLENBQUdvQyxPQUFBLENBQVFDLEdBQUEsQ0FBSTlCLElBQUEsQ0FBSytCLEdBQUEsRUFBSyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQ25FM0Msd0JBQUEsQ0FBQXlCLGFBQUEsQ0FBY21CLE1BQUEsQ0FBT3ZDLEVBQUEsQ0FBR3lCLEdBQUEsRUFBS2xCLElBQUEsQ0FBSytCLEdBQUEsR0FBTXpCLE1BQUEsQ0FBTzJCLFFBQVEsQ0FBQztVQUM5RDNDLFFBQUEsQ0FBU0csRUFBQSxDQUFHQyxjQUFBLENBQWUsQ0FBQztRQUNoQztRQUNBLE9BQU87TUFDWDtNQUNBLElBQUlxQixLQUFBLElBQVMsS0FBS2xCLE9BQUEsQ0FBUXFDLElBQUEsQ0FBS25CLEtBQUEsR0FBUSxDQUFDLEVBQUVvQixVQUFBLEdBQWEsR0FDbkQ7SUFDUjtFQUNKO0VBRUEsSUFBSTdCLE1BQUEsQ0FBTzhCLE1BQUEsSUFBVXBDLElBQUEsQ0FBS2UsS0FBQSxJQUFTbEIsT0FBQSxDQUFRa0IsS0FBQSxHQUFRLEdBQUc7SUFDbEQsSUFBSXpCLFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBRzRDLE1BQUEsQ0FBT3JDLElBQUEsQ0FBSytCLEdBQUEsR0FBTXpCLE1BQUEsQ0FBTzJCLFFBQUEsRUFBVWpDLElBQUEsQ0FBSytCLEdBQUcsRUFBRXJDLGNBQUEsQ0FBZSxDQUFDO0lBQ25GLE9BQU87RUFDWDtFQUNBLE9BQU87QUFDWDtBQU1BLElBQU1oQyxxQkFBQSxHQUF3QkEsQ0FBQzJCLEtBQUEsRUFBT0MsUUFBQSxFQUFVTSxJQUFBLEtBQVM7RUFDckQsSUFBSUMsT0FBQSxHQUFVRixZQUFBLENBQWFOLEtBQUEsRUFBT08sSUFBSTtFQUN0QyxJQUFJLENBQUNDLE9BQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSUcsSUFBQSxHQUFPQyxhQUFBLENBQWNKLE9BQU87RUFDaEMsT0FBT0csSUFBQSxHQUFPc0Msb0JBQUEsQ0FBcUJqRCxLQUFBLEVBQU9XLElBQUEsRUFBTVYsUUFBUSxJQUFJO0FBQ2hFO0FBTUEsSUFBTTNCLG9CQUFBLEdBQXVCQSxDQUFDMEIsS0FBQSxFQUFPQyxRQUFBLEVBQVVNLElBQUEsS0FBUztFQUNwRCxJQUFJQyxPQUFBLEdBQVUwQyxVQUFBLENBQVdsRCxLQUFBLEVBQU9PLElBQUk7RUFDcEMsSUFBSSxDQUFDQyxPQUFBLEVBQ0QsT0FBTztFQUNYLElBQUlHLElBQUEsR0FBT3dDLFlBQUEsQ0FBYTNDLE9BQU87RUFDL0IsT0FBT0csSUFBQSxHQUFPc0Msb0JBQUEsQ0FBcUJqRCxLQUFBLEVBQU9XLElBQUEsRUFBTVYsUUFBUSxJQUFJO0FBQ2hFO0FBQ0EsU0FBU2dELHFCQUFxQmpELEtBQUEsRUFBT1csSUFBQSxFQUFNVixRQUFBLEVBQVU7RUFDakQsSUFBSWdCLE1BQUEsR0FBU04sSUFBQSxDQUFLTyxVQUFBO0lBQVlrQyxVQUFBLEdBQWFuQyxNQUFBO0lBQVFvQyxTQUFBLEdBQVkxQyxJQUFBLENBQUsrQixHQUFBLEdBQU07RUFDMUUsT0FBTyxDQUFDVSxVQUFBLENBQVdFLFdBQUEsRUFBYUQsU0FBQSxJQUFhO0lBQ3pDLElBQUlELFVBQUEsQ0FBV0csSUFBQSxDQUFLQyxJQUFBLENBQUtDLFNBQUEsRUFDckIsT0FBTztJQUNYLElBQUlDLEtBQUEsR0FBUU4sVUFBQSxDQUFXTyxTQUFBO0lBQ3ZCLElBQUksQ0FBQ0QsS0FBQSxFQUNELE9BQU87SUFDWE4sVUFBQSxHQUFhTSxLQUFBO0VBQ2pCO0VBQ0EsSUFBSTVCLEtBQUEsR0FBUW5CLElBQUEsQ0FBS2lELFNBQUE7SUFBV0MsU0FBQSxHQUFZL0IsS0FBQTtJQUFPZ0MsUUFBQSxHQUFXbkQsSUFBQSxDQUFLK0IsR0FBQSxHQUFNO0VBQ3JFLE9BQU8sQ0FBQ21CLFNBQUEsQ0FBVVAsV0FBQSxFQUFhUSxRQUFBLElBQVk7SUFDdkMsSUFBSUQsU0FBQSxDQUFVTixJQUFBLENBQUtDLElBQUEsQ0FBS0MsU0FBQSxFQUNwQixPQUFPO0lBQ1gsSUFBSUMsS0FBQSxHQUFRRyxTQUFBLENBQVVFLFVBQUE7SUFDdEIsSUFBSSxDQUFDTCxLQUFBLEVBQ0QsT0FBTztJQUNYRyxTQUFBLEdBQVlILEtBQUE7RUFDaEI7RUFDQSxJQUFJdkIsSUFBQSxPQUFPdkMsNEJBQUEsQ0FBQWdDLFdBQUEsRUFBWTVCLEtBQUEsQ0FBTTZCLEdBQUEsRUFBS3dCLFNBQUEsRUFBV1MsUUFBQSxFQUFVaEUsd0JBQUEsQ0FBQWlDLEtBQUEsQ0FBTTVCLEtBQUs7RUFDbEUsSUFBSSxDQUFDZ0MsSUFBQSxJQUFRQSxJQUFBLENBQUtELElBQUEsSUFBUW1CLFNBQUEsSUFDdEJsQixJQUFBLFlBQWdCdkMsNEJBQUEsQ0FBQW9FLFdBQUEsSUFBZTdCLElBQUEsQ0FBS0gsS0FBQSxDQUFNVixJQUFBLElBQVF3QyxRQUFBLEdBQVdULFNBQUEsRUFDN0QsT0FBTztFQUNYLElBQUlwRCxRQUFBLEVBQVU7SUFDVixJQUFJRyxFQUFBLEdBQUtKLEtBQUEsQ0FBTUksRUFBQSxDQUFHK0IsSUFBQSxDQUFLQSxJQUFJO0lBQzNCL0IsRUFBQSxDQUFHZ0MsWUFBQSxDQUFhckMsd0JBQUEsQ0FBQWtFLGFBQUEsQ0FBY3RCLE1BQUEsQ0FBT3ZDLEVBQUEsQ0FBR3lCLEdBQUEsRUFBS3dCLFNBQVMsQ0FBQztJQUN2RHBELFFBQUEsQ0FBU0csRUFBQSxDQUFHQyxjQUFBLENBQWUsQ0FBQztFQUNoQztFQUNBLE9BQU87QUFDWDtBQUNBLFNBQVNrQixZQUFZc0IsSUFBQSxFQUFNcUIsSUFBQSxFQUFNQyxJQUFBLEdBQU8sT0FBTztFQUMzQyxTQUFTQyxJQUFBLEdBQU92QixJQUFBLEVBQU11QixJQUFBLEVBQU1BLElBQUEsR0FBUUYsSUFBQSxJQUFRLFVBQVVFLElBQUEsQ0FBS0wsVUFBQSxHQUFhSyxJQUFBLENBQUtULFNBQUEsRUFBWTtJQUNyRixJQUFJUyxJQUFBLENBQUtkLFdBQUEsRUFDTCxPQUFPO0lBQ1gsSUFBSWEsSUFBQSxJQUFRQyxJQUFBLENBQUt0QixVQUFBLElBQWMsR0FDM0IsT0FBTztFQUNmO0VBQ0EsT0FBTztBQUNYO0FBU0EsSUFBTWhFLGtCQUFBLEdBQXFCQSxDQUFDa0IsS0FBQSxFQUFPQyxRQUFBLEVBQVVNLElBQUEsS0FBUztFQUNsRCxJQUFJO01BQUU4RCxLQUFBO01BQU9sRTtJQUFNLElBQUlILEtBQUEsQ0FBTUUsU0FBQTtJQUFXUyxJQUFBLEdBQU8wRCxLQUFBO0VBQy9DLElBQUksQ0FBQ2xFLEtBQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSWtFLEtBQUEsQ0FBTWpELE1BQUEsQ0FBT2tDLFdBQUEsRUFBYTtJQUMxQixJQUFJL0MsSUFBQSxHQUFPLENBQUNBLElBQUEsQ0FBS0UsY0FBQSxDQUFlLFlBQVlULEtBQUssSUFBSXFFLEtBQUEsQ0FBTTNELFlBQUEsR0FBZSxHQUN0RSxPQUFPO0lBQ1hDLElBQUEsR0FBT0MsYUFBQSxDQUFjeUQsS0FBSztFQUM5QjtFQUNBLElBQUl4QixJQUFBLEdBQU9sQyxJQUFBLElBQVFBLElBQUEsQ0FBS08sVUFBQTtFQUN4QixJQUFJLENBQUMyQixJQUFBLElBQVEsQ0FBQzlDLHdCQUFBLENBQUF5QixhQUFBLENBQWNDLFlBQUEsQ0FBYW9CLElBQUksR0FDekMsT0FBTztFQUNYLElBQUk1QyxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUdnQyxZQUFBLENBQWFyQyx3QkFBQSxDQUFBeUIsYUFBQSxDQUFjbUIsTUFBQSxDQUFPM0MsS0FBQSxDQUFNNkIsR0FBQSxFQUFLbEIsSUFBQSxDQUFLK0IsR0FBQSxHQUFNRyxJQUFBLENBQUtELFFBQVEsQ0FBQyxFQUFFdkMsY0FBQSxDQUFlLENBQUM7RUFDOUcsT0FBTztBQUNYO0FBQ0EsU0FBU08sY0FBYzBELElBQUEsRUFBTTtFQUN6QixJQUFJLENBQUNBLElBQUEsQ0FBS2xELE1BQUEsQ0FBT21DLElBQUEsQ0FBS0MsSUFBQSxDQUFLQyxTQUFBLEVBQ3ZCLFNBQVNjLENBQUEsR0FBSUQsSUFBQSxDQUFLNUMsS0FBQSxHQUFRLEdBQUc2QyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO0lBQ3RDLElBQUlELElBQUEsQ0FBS0UsS0FBQSxDQUFNRCxDQUFDLElBQUksR0FDaEIsT0FBT0QsSUFBQSxDQUFLekMsR0FBQSxDQUFJVSxPQUFBLENBQVErQixJQUFBLENBQUtyRCxNQUFBLENBQU9zRCxDQUFBLEdBQUksQ0FBQyxDQUFDO0lBQzlDLElBQUlELElBQUEsQ0FBS3pCLElBQUEsQ0FBSzBCLENBQUMsRUFBRWhCLElBQUEsQ0FBS0MsSUFBQSxDQUFLQyxTQUFBLEVBQ3ZCO0VBQ1I7RUFDSixPQUFPO0FBQ1g7QUFDQSxTQUFTUCxXQUFXbEQsS0FBQSxFQUFPTyxJQUFBLEVBQU07RUFDN0IsSUFBSTtJQUFFQztFQUFRLElBQUlSLEtBQUEsQ0FBTUUsU0FBQTtFQUN4QixJQUFJLENBQUNNLE9BQUEsS0FBWUQsSUFBQSxHQUFPLENBQUNBLElBQUEsQ0FBS0UsY0FBQSxDQUFlLFdBQVdULEtBQUssSUFDdkRRLE9BQUEsQ0FBUUUsWUFBQSxHQUFlRixPQUFBLENBQVFZLE1BQUEsQ0FBT0MsT0FBQSxDQUFRQyxJQUFBLEdBQ2hELE9BQU87RUFDWCxPQUFPZCxPQUFBO0FBQ1g7QUFRQSxJQUFNcEMsV0FBQSxHQUFjQSxDQUFDNEIsS0FBQSxFQUFPQyxRQUFBLEVBQVVNLElBQUEsS0FBUztFQUMzQyxJQUFJQyxPQUFBLEdBQVUwQyxVQUFBLENBQVdsRCxLQUFBLEVBQU9PLElBQUk7RUFDcEMsSUFBSSxDQUFDQyxPQUFBLEVBQ0QsT0FBTztFQUNYLElBQUlHLElBQUEsR0FBT3dDLFlBQUEsQ0FBYTNDLE9BQU87RUFFL0IsSUFBSSxDQUFDRyxJQUFBLEVBQ0QsT0FBTztFQUNYLElBQUltQixLQUFBLEdBQVFuQixJQUFBLENBQUtpRCxTQUFBO0VBRWpCLElBQUl6QyxhQUFBLENBQWNuQixLQUFBLEVBQU9XLElBQUEsRUFBTVYsUUFBQSxFQUFVLENBQUMsR0FDdEMsT0FBTztFQUdYLElBQUlPLE9BQUEsQ0FBUVksTUFBQSxDQUFPQyxPQUFBLENBQVFDLElBQUEsSUFBUSxNQUM5QkMsV0FBQSxDQUFZTyxLQUFBLEVBQU8sT0FBTyxLQUFLL0Isd0JBQUEsQ0FBQXlCLGFBQUEsQ0FBY0MsWUFBQSxDQUFhSyxLQUFLLElBQUk7SUFDcEUsSUFBSUgsT0FBQSxPQUFVL0IsNEJBQUEsQ0FBQWdDLFdBQUEsRUFBWTVCLEtBQUEsQ0FBTTZCLEdBQUEsRUFBS3JCLE9BQUEsQ0FBUVMsTUFBQSxDQUFPLEdBQUdULE9BQUEsQ0FBUXNCLEtBQUEsQ0FBTSxHQUFHaEMsd0JBQUEsQ0FBQWlDLEtBQUEsQ0FBTTVCLEtBQUs7SUFDbkYsSUFBSXdCLE9BQUEsSUFBV0EsT0FBQSxDQUFRSyxLQUFBLENBQU1WLElBQUEsR0FBT0ssT0FBQSxDQUFRTSxFQUFBLEdBQUtOLE9BQUEsQ0FBUU8sSUFBQSxFQUFNO01BQzNELElBQUlqQyxRQUFBLEVBQVU7UUFDVixJQUFJRyxFQUFBLEdBQUtKLEtBQUEsQ0FBTUksRUFBQSxDQUFHK0IsSUFBQSxDQUFLUixPQUFPO1FBQzlCdkIsRUFBQSxDQUFHZ0MsWUFBQSxDQUFhYixXQUFBLENBQVlPLEtBQUEsRUFBTyxPQUFPLElBQUkvQix3QkFBQSxDQUFBc0MsU0FBQSxDQUFVQyxRQUFBLENBQVNsQyxFQUFBLENBQUd5QixHQUFBLENBQUlVLE9BQUEsQ0FBUW5DLEVBQUEsQ0FBR29DLE9BQUEsQ0FBUUMsR0FBQSxDQUFJOUIsSUFBQSxDQUFLK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUN0RzNDLHdCQUFBLENBQUF5QixhQUFBLENBQWNtQixNQUFBLENBQU92QyxFQUFBLENBQUd5QixHQUFBLEVBQUt6QixFQUFBLENBQUdvQyxPQUFBLENBQVFDLEdBQUEsQ0FBSTlCLElBQUEsQ0FBSytCLEdBQUcsQ0FBQyxDQUFDO1FBQzVEekMsUUFBQSxDQUFTRyxFQUFBLENBQUdDLGNBQUEsQ0FBZSxDQUFDO01BQ2hDO01BQ0EsT0FBTztJQUNYO0VBQ0o7RUFFQSxJQUFJeUIsS0FBQSxDQUFNaUIsTUFBQSxJQUFVcEMsSUFBQSxDQUFLZSxLQUFBLElBQVNsQixPQUFBLENBQVFrQixLQUFBLEdBQVEsR0FBRztJQUNqRCxJQUFJekIsUUFBQSxFQUNBQSxRQUFBLENBQVNELEtBQUEsQ0FBTUksRUFBQSxDQUFHNEMsTUFBQSxDQUFPckMsSUFBQSxDQUFLK0IsR0FBQSxFQUFLL0IsSUFBQSxDQUFLK0IsR0FBQSxHQUFNWixLQUFBLENBQU1jLFFBQVEsRUFBRXZDLGNBQUEsQ0FBZSxDQUFDO0lBQ2xGLE9BQU87RUFDWDtFQUNBLE9BQU87QUFDWDtBQVNBLElBQU10QixpQkFBQSxHQUFvQkEsQ0FBQ2lCLEtBQUEsRUFBT0MsUUFBQSxFQUFVTSxJQUFBLEtBQVM7RUFDakQsSUFBSTtNQUFFOEQsS0FBQTtNQUFPbEU7SUFBTSxJQUFJSCxLQUFBLENBQU1FLFNBQUE7SUFBV1MsSUFBQSxHQUFPMEQsS0FBQTtFQUMvQyxJQUFJLENBQUNsRSxLQUFBLEVBQ0QsT0FBTztFQUNYLElBQUlrRSxLQUFBLENBQU1qRCxNQUFBLENBQU9rQyxXQUFBLEVBQWE7SUFDMUIsSUFBSS9DLElBQUEsR0FBTyxDQUFDQSxJQUFBLENBQUtFLGNBQUEsQ0FBZSxXQUFXVCxLQUFLLElBQUlxRSxLQUFBLENBQU0zRCxZQUFBLEdBQWUyRCxLQUFBLENBQU1qRCxNQUFBLENBQU9DLE9BQUEsQ0FBUUMsSUFBQSxFQUMxRixPQUFPO0lBQ1hYLElBQUEsR0FBT3dDLFlBQUEsQ0FBYWtCLEtBQUs7RUFDN0I7RUFDQSxJQUFJeEIsSUFBQSxHQUFPbEMsSUFBQSxJQUFRQSxJQUFBLENBQUtpRCxTQUFBO0VBQ3hCLElBQUksQ0FBQ2YsSUFBQSxJQUFRLENBQUM5Qyx3QkFBQSxDQUFBeUIsYUFBQSxDQUFjQyxZQUFBLENBQWFvQixJQUFJLEdBQ3pDLE9BQU87RUFDWCxJQUFJNUMsUUFBQSxFQUNBQSxRQUFBLENBQVNELEtBQUEsQ0FBTUksRUFBQSxDQUFHZ0MsWUFBQSxDQUFhckMsd0JBQUEsQ0FBQXlCLGFBQUEsQ0FBY21CLE1BQUEsQ0FBTzNDLEtBQUEsQ0FBTTZCLEdBQUEsRUFBS2xCLElBQUEsQ0FBSytCLEdBQUcsQ0FBQyxFQUFFckMsY0FBQSxDQUFlLENBQUM7RUFDOUYsT0FBTztBQUNYO0FBQ0EsU0FBUzhDLGFBQWFtQixJQUFBLEVBQU07RUFDeEIsSUFBSSxDQUFDQSxJQUFBLENBQUtsRCxNQUFBLENBQU9tQyxJQUFBLENBQUtDLElBQUEsQ0FBS0MsU0FBQSxFQUN2QixTQUFTYyxDQUFBLEdBQUlELElBQUEsQ0FBSzVDLEtBQUEsR0FBUSxHQUFHNkMsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztJQUN0QyxJQUFJbkQsTUFBQSxHQUFTa0QsSUFBQSxDQUFLekIsSUFBQSxDQUFLMEIsQ0FBQztJQUN4QixJQUFJRCxJQUFBLENBQUtFLEtBQUEsQ0FBTUQsQ0FBQyxJQUFJLElBQUluRCxNQUFBLENBQU8wQixVQUFBLEVBQzNCLE9BQU93QixJQUFBLENBQUt6QyxHQUFBLENBQUlVLE9BQUEsQ0FBUStCLElBQUEsQ0FBS3hDLEtBQUEsQ0FBTXlDLENBQUEsR0FBSSxDQUFDLENBQUM7SUFDN0MsSUFBSW5ELE1BQUEsQ0FBT21DLElBQUEsQ0FBS0MsSUFBQSxDQUFLQyxTQUFBLEVBQ2pCO0VBQ1I7RUFDSixPQUFPO0FBQ1g7QUFNQSxJQUFNbEYsTUFBQSxHQUFTQSxDQUFDeUIsS0FBQSxFQUFPQyxRQUFBLEtBQWE7RUFDaEMsSUFBSXdFLEdBQUEsR0FBTXpFLEtBQUEsQ0FBTUUsU0FBQTtJQUFXd0UsT0FBQSxHQUFVRCxHQUFBLFlBQWUxRSx3QkFBQSxDQUFBeUIsYUFBQTtJQUFlbUQsS0FBQTtFQUNuRSxJQUFJRCxPQUFBLEVBQVM7SUFDVCxJQUFJRCxHQUFBLENBQUk1QixJQUFBLENBQUtTLFdBQUEsSUFBZSxLQUFDMUQsNEJBQUEsQ0FBQWdGLE9BQUEsRUFBUTVFLEtBQUEsQ0FBTTZCLEdBQUEsRUFBSzRDLEdBQUEsQ0FBSXZDLElBQUksR0FDcEQsT0FBTztJQUNYeUMsS0FBQSxHQUFRRixHQUFBLENBQUl2QyxJQUFBO0VBQ2hCLE9BQ0s7SUFDRHlDLEtBQUEsT0FBUS9FLDRCQUFBLENBQUFpRixTQUFBLEVBQVU3RSxLQUFBLENBQU02QixHQUFBLEVBQUs0QyxHQUFBLENBQUl2QyxJQUFBLEVBQU0sRUFBRTtJQUN6QyxJQUFJeUMsS0FBQSxJQUFTLE1BQ1QsT0FBTztFQUNmO0VBQ0EsSUFBSTFFLFFBQUEsRUFBVTtJQUNWLElBQUlHLEVBQUEsR0FBS0osS0FBQSxDQUFNSSxFQUFBLENBQUcwRSxJQUFBLENBQUtILEtBQUs7SUFDNUIsSUFBSUQsT0FBQSxFQUNBdEUsRUFBQSxDQUFHZ0MsWUFBQSxDQUFhckMsd0JBQUEsQ0FBQXlCLGFBQUEsQ0FBY21CLE1BQUEsQ0FBT3ZDLEVBQUEsQ0FBR3lCLEdBQUEsRUFBSzhDLEtBQUEsR0FBUTNFLEtBQUEsQ0FBTTZCLEdBQUEsQ0FBSVUsT0FBQSxDQUFRb0MsS0FBSyxFQUFFekQsVUFBQSxDQUFXMEIsUUFBUSxDQUFDO0lBQ3RHM0MsUUFBQSxDQUFTRyxFQUFBLENBQUdDLGNBQUEsQ0FBZSxDQUFDO0VBQ2hDO0VBQ0EsT0FBTztBQUNYO0FBS0EsSUFBTWxDLFFBQUEsR0FBV0EsQ0FBQzZCLEtBQUEsRUFBT0MsUUFBQSxLQUFhO0VBQ2xDLElBQUl3RSxHQUFBLEdBQU16RSxLQUFBLENBQU1FLFNBQUE7SUFBV3lFLEtBQUE7RUFDM0IsSUFBSUYsR0FBQSxZQUFlMUUsd0JBQUEsQ0FBQXlCLGFBQUEsRUFBZTtJQUM5QixJQUFJaUQsR0FBQSxDQUFJNUIsSUFBQSxDQUFLUyxXQUFBLElBQWUsS0FBQzFELDRCQUFBLENBQUFnRixPQUFBLEVBQVE1RSxLQUFBLENBQU02QixHQUFBLEVBQUs0QyxHQUFBLENBQUl4QyxFQUFFLEdBQ2xELE9BQU87SUFDWDBDLEtBQUEsR0FBUUYsR0FBQSxDQUFJeEMsRUFBQTtFQUNoQixPQUNLO0lBQ0QwQyxLQUFBLE9BQVEvRSw0QkFBQSxDQUFBaUYsU0FBQSxFQUFVN0UsS0FBQSxDQUFNNkIsR0FBQSxFQUFLNEMsR0FBQSxDQUFJeEMsRUFBQSxFQUFJLENBQUM7SUFDdEMsSUFBSTBDLEtBQUEsSUFBUyxNQUNULE9BQU87RUFDZjtFQUNBLElBQUkxRSxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUcwRSxJQUFBLENBQUtILEtBQUssRUFBRXRFLGNBQUEsQ0FBZSxDQUFDO0VBQ2xELE9BQU87QUFDWDtBQUtBLElBQU03QixJQUFBLEdBQU9BLENBQUN3QixLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUM5QixJQUFJO0lBQUU4RSxLQUFBO0lBQU9DO0VBQUksSUFBSWhGLEtBQUEsQ0FBTUUsU0FBQTtFQUMzQixJQUFJVyxLQUFBLEdBQVFrRSxLQUFBLENBQU1qRSxVQUFBLENBQVdrRSxHQUFHO0lBQUdqRSxNQUFBLEdBQVNGLEtBQUEsUUFBU2pCLDRCQUFBLENBQUFvQixVQUFBLEVBQVdILEtBQUs7RUFDckUsSUFBSUUsTUFBQSxJQUFVLE1BQ1YsT0FBTztFQUNYLElBQUlkLFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBRzVCLElBQUEsQ0FBS3FDLEtBQUEsRUFBT0UsTUFBTSxFQUFFVixjQUFBLENBQWUsQ0FBQztFQUMxRCxPQUFPO0FBQ1g7QUFNQSxJQUFNMUIsYUFBQSxHQUFnQkEsQ0FBQ3FCLEtBQUEsRUFBT0MsUUFBQSxLQUFhO0VBQ3ZDLElBQUk7SUFBRW9FLEtBQUE7SUFBT1k7RUFBUSxJQUFJakYsS0FBQSxDQUFNRSxTQUFBO0VBQy9CLElBQUksQ0FBQ21FLEtBQUEsQ0FBTWpELE1BQUEsQ0FBT21DLElBQUEsQ0FBS0MsSUFBQSxDQUFLMEIsSUFBQSxJQUFRLENBQUNiLEtBQUEsQ0FBTWMsVUFBQSxDQUFXRixPQUFPLEdBQ3pELE9BQU87RUFDWCxJQUFJaEYsUUFBQSxFQUNBQSxRQUFBLENBQVNELEtBQUEsQ0FBTUksRUFBQSxDQUFHZ0YsVUFBQSxDQUFXLElBQUksRUFBRS9FLGNBQUEsQ0FBZSxDQUFDO0VBQ3ZELE9BQU87QUFDWDtBQUNBLFNBQVNnRixlQUFlQyxLQUFBLEVBQU87RUFDM0IsU0FBU2YsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWUsS0FBQSxDQUFNQyxTQUFBLEVBQVdoQixDQUFBLElBQUs7SUFDdEMsSUFBSTtNQUFFaEI7SUFBSyxJQUFJK0IsS0FBQSxDQUFNRSxJQUFBLENBQUtqQixDQUFDO0lBQzNCLElBQUloQixJQUFBLENBQUtELFdBQUEsSUFBZSxDQUFDQyxJQUFBLENBQUtrQyxnQkFBQSxDQUFpQixHQUMzQyxPQUFPbEMsSUFBQTtFQUNmO0VBQ0EsT0FBTztBQUNYO0FBTUEsSUFBTXRGLFFBQUEsR0FBV0EsQ0FBQytCLEtBQUEsRUFBT0MsUUFBQSxLQUFhO0VBQ2xDLElBQUk7SUFBRW9FLEtBQUE7SUFBT1k7RUFBUSxJQUFJakYsS0FBQSxDQUFNRSxTQUFBO0VBQy9CLElBQUksQ0FBQ21FLEtBQUEsQ0FBTWpELE1BQUEsQ0FBT21DLElBQUEsQ0FBS0MsSUFBQSxDQUFLMEIsSUFBQSxJQUFRLENBQUNiLEtBQUEsQ0FBTWMsVUFBQSxDQUFXRixPQUFPLEdBQ3pELE9BQU87RUFDWCxJQUFJUyxLQUFBLEdBQVFyQixLQUFBLENBQU14QixJQUFBLENBQUssRUFBRTtJQUFHZixLQUFBLEdBQVF1QyxLQUFBLENBQU1zQixVQUFBLENBQVcsRUFBRTtJQUFHcEMsSUFBQSxHQUFPOEIsY0FBQSxDQUFlSyxLQUFBLENBQU1FLGNBQUEsQ0FBZTlELEtBQUssQ0FBQztFQUMzRyxJQUFJLENBQUN5QixJQUFBLElBQVEsQ0FBQ21DLEtBQUEsQ0FBTUcsY0FBQSxDQUFlL0QsS0FBQSxFQUFPQSxLQUFBLEVBQU95QixJQUFJLEdBQ2pELE9BQU87RUFDWCxJQUFJdEQsUUFBQSxFQUFVO0lBQ1YsSUFBSXlDLEdBQUEsR0FBTTJCLEtBQUEsQ0FBTXZDLEtBQUEsQ0FBTTtNQUFHMUIsRUFBQSxHQUFLSixLQUFBLENBQU1JLEVBQUEsQ0FBRzBGLFdBQUEsQ0FBWXBELEdBQUEsRUFBS0EsR0FBQSxFQUFLYSxJQUFBLENBQUt3QyxhQUFBLENBQWMsQ0FBQztJQUNqRjNGLEVBQUEsQ0FBR2dDLFlBQUEsQ0FBYXJDLHdCQUFBLENBQUFzQyxTQUFBLENBQVUyRCxJQUFBLENBQUs1RixFQUFBLENBQUd5QixHQUFBLENBQUlVLE9BQUEsQ0FBUUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN0RHpDLFFBQUEsQ0FBU0csRUFBQSxDQUFHQyxjQUFBLENBQWUsQ0FBQztFQUNoQztFQUNBLE9BQU87QUFDWDtBQUtBLElBQU10QyxtQkFBQSxHQUFzQkEsQ0FBQ2lDLEtBQUEsRUFBT0MsUUFBQSxLQUFhO0VBQzdDLElBQUl3RSxHQUFBLEdBQU16RSxLQUFBLENBQU1FLFNBQUE7SUFBVztNQUFFNkUsS0FBQTtNQUFPQztJQUFJLElBQUlQLEdBQUE7RUFDNUMsSUFBSUEsR0FBQSxZQUFlMUUsd0JBQUEsQ0FBQWtHLFlBQUEsSUFBZ0JsQixLQUFBLENBQU0zRCxNQUFBLENBQU84RSxhQUFBLElBQWlCbEIsR0FBQSxDQUFJNUQsTUFBQSxDQUFPOEUsYUFBQSxFQUN4RSxPQUFPO0VBQ1gsSUFBSTNDLElBQUEsR0FBTzhCLGNBQUEsQ0FBZUwsR0FBQSxDQUFJNUQsTUFBQSxDQUFPd0UsY0FBQSxDQUFlWixHQUFBLENBQUlXLFVBQUEsQ0FBVyxDQUFDLENBQUM7RUFDckUsSUFBSSxDQUFDcEMsSUFBQSxJQUFRLENBQUNBLElBQUEsQ0FBS0QsV0FBQSxFQUNmLE9BQU87RUFDWCxJQUFJckQsUUFBQSxFQUFVO0lBQ1YsSUFBSWlFLElBQUEsSUFBUSxDQUFDYSxLQUFBLENBQU1yRSxZQUFBLElBQWdCc0UsR0FBQSxDQUFJUixLQUFBLENBQU0sSUFBSVEsR0FBQSxDQUFJNUQsTUFBQSxDQUFPMEIsVUFBQSxHQUFhaUMsS0FBQSxHQUFRQyxHQUFBLEVBQUt0QyxHQUFBO0lBQ3RGLElBQUl0QyxFQUFBLEdBQUtKLEtBQUEsQ0FBTUksRUFBQSxDQUFHK0YsTUFBQSxDQUFPakMsSUFBQSxFQUFNWCxJQUFBLENBQUt3QyxhQUFBLENBQWMsQ0FBQztJQUNuRDNGLEVBQUEsQ0FBR2dDLFlBQUEsQ0FBYXJDLHdCQUFBLENBQUFrRSxhQUFBLENBQWN0QixNQUFBLENBQU92QyxFQUFBLENBQUd5QixHQUFBLEVBQUtxQyxJQUFBLEdBQU8sQ0FBQyxDQUFDO0lBQ3REakUsUUFBQSxDQUFTRyxFQUFBLENBQUdDLGNBQUEsQ0FBZSxDQUFDO0VBQ2hDO0VBQ0EsT0FBTztBQUNYO0FBS0EsSUFBTTVCLGNBQUEsR0FBaUJBLENBQUN1QixLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUN4QyxJQUFJO0lBQUVPO0VBQVEsSUFBSVIsS0FBQSxDQUFNRSxTQUFBO0VBQ3hCLElBQUksQ0FBQ00sT0FBQSxJQUFXQSxPQUFBLENBQVFZLE1BQUEsQ0FBT0MsT0FBQSxDQUFRQyxJQUFBLEVBQ25DLE9BQU87RUFDWCxJQUFJZCxPQUFBLENBQVFrQixLQUFBLEdBQVEsS0FBS2xCLE9BQUEsQ0FBUXNCLEtBQUEsQ0FBTSxLQUFLdEIsT0FBQSxDQUFRNEYsR0FBQSxDQUFJLEVBQUUsR0FBRztJQUN6RCxJQUFJbkYsTUFBQSxHQUFTVCxPQUFBLENBQVFTLE1BQUEsQ0FBTztJQUM1QixRQUFJckIsNEJBQUEsQ0FBQXlHLFFBQUEsRUFBU3JHLEtBQUEsQ0FBTTZCLEdBQUEsRUFBS1osTUFBTSxHQUFHO01BQzdCLElBQUloQixRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUdrRyxLQUFBLENBQU1yRixNQUFNLEVBQUVaLGNBQUEsQ0FBZSxDQUFDO01BQ3BELE9BQU87SUFDWDtFQUNKO0VBQ0EsSUFBSVEsS0FBQSxHQUFRTCxPQUFBLENBQVFNLFVBQUEsQ0FBVztJQUFHQyxNQUFBLEdBQVNGLEtBQUEsUUFBU2pCLDRCQUFBLENBQUFvQixVQUFBLEVBQVdILEtBQUs7RUFDcEUsSUFBSUUsTUFBQSxJQUFVLE1BQ1YsT0FBTztFQUNYLElBQUlkLFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBRzVCLElBQUEsQ0FBS3FDLEtBQUEsRUFBT0UsTUFBTSxFQUFFVixjQUFBLENBQWUsQ0FBQztFQUMxRCxPQUFPO0FBQ1g7QUFLQSxTQUFTaEIsYUFBYWtILFNBQUEsRUFBVztFQUM3QixPQUFPLENBQUN2RyxLQUFBLEVBQU9DLFFBQUEsS0FBYTtJQUN4QixJQUFJO01BQUU4RSxLQUFBO01BQU9DO0lBQUksSUFBSWhGLEtBQUEsQ0FBTUUsU0FBQTtJQUMzQixJQUFJRixLQUFBLENBQU1FLFNBQUEsWUFBcUJILHdCQUFBLENBQUF5QixhQUFBLElBQWlCeEIsS0FBQSxDQUFNRSxTQUFBLENBQVUyQyxJQUFBLENBQUsyRCxPQUFBLEVBQVM7TUFDMUUsSUFBSSxDQUFDekIsS0FBQSxDQUFNckUsWUFBQSxJQUFnQixLQUFDZCw0QkFBQSxDQUFBeUcsUUFBQSxFQUFTckcsS0FBQSxDQUFNNkIsR0FBQSxFQUFLa0QsS0FBQSxDQUFNckMsR0FBRyxHQUNyRCxPQUFPO01BQ1gsSUFBSXpDLFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBR2tHLEtBQUEsQ0FBTXZCLEtBQUEsQ0FBTXJDLEdBQUcsRUFBRXJDLGNBQUEsQ0FBZSxDQUFDO01BQ3ZELE9BQU87SUFDWDtJQUNBLElBQUksQ0FBQzBFLEtBQUEsQ0FBTXJELEtBQUEsRUFDUCxPQUFPO0lBQ1gsSUFBSStFLEtBQUEsR0FBUSxFQUFDO0lBQ2IsSUFBSUMsVUFBQTtNQUFZQyxLQUFBO01BQU9DLEtBQUEsR0FBUTtNQUFPQyxPQUFBLEdBQVU7SUFDaEQsU0FBU0MsQ0FBQSxHQUFJL0IsS0FBQSxDQUFNckQsS0FBQSxHQUFRb0YsQ0FBQSxJQUFLO01BQzVCLElBQUlqRSxJQUFBLEdBQU9rQyxLQUFBLENBQU1sQyxJQUFBLENBQUtpRSxDQUFDO01BQ3ZCLElBQUlqRSxJQUFBLENBQUsyRCxPQUFBLEVBQVM7UUFDZEksS0FBQSxHQUFRN0IsS0FBQSxDQUFNcUIsR0FBQSxDQUFJVSxDQUFDLEtBQUsvQixLQUFBLENBQU1yQyxHQUFBLElBQU9xQyxLQUFBLENBQU1yRCxLQUFBLEdBQVFvRixDQUFBO1FBQ25ERCxPQUFBLEdBQVU5QixLQUFBLENBQU1nQyxLQUFBLENBQU1ELENBQUMsS0FBSy9CLEtBQUEsQ0FBTXJDLEdBQUEsSUFBT3FDLEtBQUEsQ0FBTXJELEtBQUEsR0FBUW9GLENBQUE7UUFDdkRILEtBQUEsR0FBUXRCLGNBQUEsQ0FBZU4sS0FBQSxDQUFNbEMsSUFBQSxDQUFLaUUsQ0FBQSxHQUFJLENBQUMsRUFBRWxCLGNBQUEsQ0FBZWIsS0FBQSxDQUFNWSxVQUFBLENBQVdtQixDQUFBLEdBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSUUsU0FBQSxHQUFZVCxTQUFBLElBQWFBLFNBQUEsQ0FBVXZCLEdBQUEsQ0FBSTVELE1BQUEsRUFBUXdGLEtBQUEsRUFBTzdCLEtBQUs7UUFDL0QwQixLQUFBLENBQU1RLE9BQUEsQ0FBUUQsU0FBQSxLQUFjSixLQUFBLElBQVNELEtBQUEsR0FBUTtVQUFFcEQsSUFBQSxFQUFNb0Q7UUFBTSxJQUFJLEtBQUs7UUFDcEVELFVBQUEsR0FBYUksQ0FBQTtRQUNiO01BQ0osT0FDSztRQUNELElBQUlBLENBQUEsSUFBSyxHQUNMLE9BQU87UUFDWEwsS0FBQSxDQUFNUSxPQUFBLENBQVEsSUFBSTtNQUN0QjtJQUNKO0lBQ0EsSUFBSTdHLEVBQUEsR0FBS0osS0FBQSxDQUFNSSxFQUFBO0lBQ2YsSUFBSUosS0FBQSxDQUFNRSxTQUFBLFlBQXFCSCx3QkFBQSxDQUFBa0UsYUFBQSxJQUFpQmpFLEtBQUEsQ0FBTUUsU0FBQSxZQUFxQkgsd0JBQUEsQ0FBQWtHLFlBQUEsRUFDdkU3RixFQUFBLENBQUdwQyxlQUFBLENBQWdCO0lBQ3ZCLElBQUlrSixRQUFBLEdBQVc5RyxFQUFBLENBQUdvQyxPQUFBLENBQVFDLEdBQUEsQ0FBSXNDLEtBQUEsQ0FBTXJDLEdBQUc7SUFDdkMsSUFBSXlFLEdBQUEsT0FBTXZILDRCQUFBLENBQUF5RyxRQUFBLEVBQVNqRyxFQUFBLENBQUd5QixHQUFBLEVBQUtxRixRQUFBLEVBQVVULEtBQUEsQ0FBTVcsTUFBQSxFQUFRWCxLQUFLO0lBQ3hELElBQUksQ0FBQ1UsR0FBQSxFQUFLO01BQ05WLEtBQUEsQ0FBTSxDQUFDLElBQUlFLEtBQUEsR0FBUTtRQUFFcEQsSUFBQSxFQUFNb0Q7TUFBTSxJQUFJO01BQ3JDUSxHQUFBLE9BQU12SCw0QkFBQSxDQUFBeUcsUUFBQSxFQUFTakcsRUFBQSxDQUFHeUIsR0FBQSxFQUFLcUYsUUFBQSxFQUFVVCxLQUFBLENBQU1XLE1BQUEsRUFBUVgsS0FBSztJQUN4RDtJQUNBLElBQUksQ0FBQ1UsR0FBQSxFQUNELE9BQU87SUFDWC9HLEVBQUEsQ0FBR2tHLEtBQUEsQ0FBTVksUUFBQSxFQUFVVCxLQUFBLENBQU1XLE1BQUEsRUFBUVgsS0FBSztJQUN0QyxJQUFJLENBQUNHLEtBQUEsSUFBU0MsT0FBQSxJQUFXOUIsS0FBQSxDQUFNbEMsSUFBQSxDQUFLNkQsVUFBVSxFQUFFbkQsSUFBQSxJQUFRb0QsS0FBQSxFQUFPO01BQzNELElBQUlVLEtBQUEsR0FBUWpILEVBQUEsQ0FBR29DLE9BQUEsQ0FBUUMsR0FBQSxDQUFJc0MsS0FBQSxDQUFNOUQsTUFBQSxDQUFPeUYsVUFBVSxDQUFDO1FBQUdZLE1BQUEsR0FBU2xILEVBQUEsQ0FBR3lCLEdBQUEsQ0FBSVUsT0FBQSxDQUFROEUsS0FBSztNQUNuRixJQUFJVixLQUFBLElBQVM1QixLQUFBLENBQU1sQyxJQUFBLENBQUs2RCxVQUFBLEdBQWEsQ0FBQyxFQUFFYixjQUFBLENBQWV5QixNQUFBLENBQU85QyxLQUFBLENBQU0sR0FBRzhDLE1BQUEsQ0FBTzlDLEtBQUEsQ0FBTSxJQUFJLEdBQUdtQyxLQUFLLEdBQzVGdkcsRUFBQSxDQUFHbUgsYUFBQSxDQUFjbkgsRUFBQSxDQUFHb0MsT0FBQSxDQUFRQyxHQUFBLENBQUlzQyxLQUFBLENBQU05RCxNQUFBLENBQU95RixVQUFVLENBQUMsR0FBR0MsS0FBSztJQUN4RTtJQUNBLElBQUkxRyxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0csRUFBQSxDQUFHQyxjQUFBLENBQWUsQ0FBQztJQUNoQyxPQUFPO0VBQ1g7QUFDSjtBQUtBLElBQU1qQixVQUFBLEdBQWFDLFlBQUEsQ0FBYTtBQUtoQyxJQUFNQyxtQkFBQSxHQUFzQkEsQ0FBQ1UsS0FBQSxFQUFPQyxRQUFBLEtBQWE7RUFDN0MsT0FBT2IsVUFBQSxDQUFXWSxLQUFBLEVBQU9DLFFBQUEsS0FBYUcsRUFBQSxJQUFNO0lBQ3hDLElBQUlvSCxLQUFBLEdBQVF4SCxLQUFBLENBQU15SCxXQUFBLElBQWdCekgsS0FBQSxDQUFNRSxTQUFBLENBQVU4RSxHQUFBLENBQUl0RSxZQUFBLElBQWdCVixLQUFBLENBQU1FLFNBQUEsQ0FBVTZFLEtBQUEsQ0FBTXlDLEtBQUEsQ0FBTTtJQUNsRyxJQUFJQSxLQUFBLEVBQ0FwSCxFQUFBLENBQUdzSCxXQUFBLENBQVlGLEtBQUs7SUFDeEJ2SCxRQUFBLENBQVNHLEVBQUU7RUFDZixFQUFFO0FBQ047QUFLQSxJQUFNcEIsZ0JBQUEsR0FBbUJBLENBQUNnQixLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUMxQyxJQUFJO01BQUU4RSxLQUFBO01BQU85QztJQUFHLElBQUlqQyxLQUFBLENBQU1FLFNBQUE7SUFBV3dDLEdBQUE7RUFDckMsSUFBSWlGLElBQUEsR0FBTzVDLEtBQUEsQ0FBTTZDLFdBQUEsQ0FBWTNGLEVBQUU7RUFDL0IsSUFBSTBGLElBQUEsSUFBUSxHQUNSLE9BQU87RUFDWGpGLEdBQUEsR0FBTXFDLEtBQUEsQ0FBTTlELE1BQUEsQ0FBTzBHLElBQUk7RUFDdkIsSUFBSTFILFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBR2dDLFlBQUEsQ0FBYXJDLHdCQUFBLENBQUF5QixhQUFBLENBQWNtQixNQUFBLENBQU8zQyxLQUFBLENBQU02QixHQUFBLEVBQUthLEdBQUcsQ0FBQyxDQUFDO0VBQ3hFLE9BQU87QUFDWDtBQUlBLElBQU03RCxTQUFBLEdBQVlBLENBQUNtQixLQUFBLEVBQU9DLFFBQUEsS0FBYTtFQUNuQyxJQUFJQSxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUdnQyxZQUFBLENBQWEsSUFBSXJDLHdCQUFBLENBQUFrRyxZQUFBLENBQWFqRyxLQUFBLENBQU02QixHQUFHLENBQUMsQ0FBQztFQUMvRCxPQUFPO0FBQ1g7QUFDQSxTQUFTZ0csZUFBZTdILEtBQUEsRUFBT3NFLElBQUEsRUFBTXJFLFFBQUEsRUFBVTtFQUMzQyxJQUFJZ0IsTUFBQSxHQUFTcUQsSUFBQSxDQUFLcEQsVUFBQTtJQUFZWSxLQUFBLEdBQVF3QyxJQUFBLENBQUtWLFNBQUE7SUFBV1ksS0FBQSxHQUFRRixJQUFBLENBQUtFLEtBQUEsQ0FBTTtFQUN6RSxJQUFJLENBQUN2RCxNQUFBLElBQVUsQ0FBQ2EsS0FBQSxJQUFTLENBQUNiLE1BQUEsQ0FBT3NDLElBQUEsQ0FBS3VFLGlCQUFBLENBQWtCaEcsS0FBQSxDQUFNeUIsSUFBSSxHQUM5RCxPQUFPO0VBQ1gsSUFBSSxDQUFDdEMsTUFBQSxDQUFPSSxPQUFBLENBQVFDLElBQUEsSUFBUWdELElBQUEsQ0FBS2xELE1BQUEsQ0FBTzJHLFVBQUEsQ0FBV3ZELEtBQUEsR0FBUSxHQUFHQSxLQUFLLEdBQUc7SUFDbEUsSUFBSXZFLFFBQUEsRUFDQUEsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBRzRDLE1BQUEsQ0FBT3NCLElBQUEsQ0FBSzVCLEdBQUEsR0FBTXpCLE1BQUEsQ0FBTzJCLFFBQUEsRUFBVTBCLElBQUEsQ0FBSzVCLEdBQUcsRUFBRXJDLGNBQUEsQ0FBZSxDQUFDO0lBQ25GLE9BQU87RUFDWDtFQUNBLElBQUksQ0FBQ2lFLElBQUEsQ0FBS2xELE1BQUEsQ0FBTzJHLFVBQUEsQ0FBV3ZELEtBQUEsRUFBT0EsS0FBQSxHQUFRLENBQUMsS0FBSyxFQUFFMUMsS0FBQSxDQUFNd0IsV0FBQSxRQUFlMUQsNEJBQUEsQ0FBQWdGLE9BQUEsRUFBUTVFLEtBQUEsQ0FBTTZCLEdBQUEsRUFBS3lDLElBQUEsQ0FBSzVCLEdBQUcsSUFDL0YsT0FBTztFQUNYLElBQUl6QyxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUcwRSxJQUFBLENBQUtSLElBQUEsQ0FBSzVCLEdBQUcsRUFBRXJDLGNBQUEsQ0FBZSxDQUFDO0VBQ3JELE9BQU87QUFDWDtBQUNBLFNBQVNjLGNBQWNuQixLQUFBLEVBQU9XLElBQUEsRUFBTVYsUUFBQSxFQUFVK0gsR0FBQSxFQUFLO0VBQy9DLElBQUkvRyxNQUFBLEdBQVNOLElBQUEsQ0FBS08sVUFBQTtJQUFZWSxLQUFBLEdBQVFuQixJQUFBLENBQUtpRCxTQUFBO0lBQVdxRSxJQUFBO0lBQU0zQyxLQUFBO0VBQzVELElBQUk0QyxRQUFBLEdBQVdqSCxNQUFBLENBQU9zQyxJQUFBLENBQUtDLElBQUEsQ0FBS0MsU0FBQSxJQUFhM0IsS0FBQSxDQUFNeUIsSUFBQSxDQUFLQyxJQUFBLENBQUtDLFNBQUE7RUFDN0QsSUFBSSxDQUFDeUUsUUFBQSxJQUFZTCxjQUFBLENBQWU3SCxLQUFBLEVBQU9XLElBQUEsRUFBTVYsUUFBUSxHQUNqRCxPQUFPO0VBQ1gsSUFBSWtJLFdBQUEsR0FBYyxDQUFDRCxRQUFBLElBQVl2SCxJQUFBLENBQUtTLE1BQUEsQ0FBTzJHLFVBQUEsQ0FBV3BILElBQUEsQ0FBSzZELEtBQUEsQ0FBTSxHQUFHN0QsSUFBQSxDQUFLNkQsS0FBQSxDQUFNLElBQUksQ0FBQztFQUNwRixJQUFJMkQsV0FBQSxLQUNDRixJQUFBLElBQVEzQyxLQUFBLEdBQVFyRSxNQUFBLENBQU8yRSxjQUFBLENBQWUzRSxNQUFBLENBQU82QixVQUFVLEdBQUdzRixZQUFBLENBQWF0RyxLQUFBLENBQU15QixJQUFJLE1BQ2xGK0IsS0FBQSxDQUFNK0MsU0FBQSxDQUFVSixJQUFBLENBQUssQ0FBQyxLQUFLbkcsS0FBQSxDQUFNeUIsSUFBSSxFQUFFK0UsUUFBQSxFQUFVO0lBQ2pELElBQUlySSxRQUFBLEVBQVU7TUFDVixJQUFJbUcsR0FBQSxHQUFNekYsSUFBQSxDQUFLK0IsR0FBQSxHQUFNWixLQUFBLENBQU1jLFFBQUE7UUFBVTJGLElBQUEsR0FBT3pJLHdCQUFBLENBQUEwSSxRQUFBLENBQVNySSxLQUFBO01BQ3JELFNBQVNvRSxDQUFBLEdBQUkwRCxJQUFBLENBQUtiLE1BQUEsR0FBUyxHQUFHN0MsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDbENnRSxJQUFBLEdBQU96SSx3QkFBQSxDQUFBMEksUUFBQSxDQUFTdEcsSUFBQSxDQUFLK0YsSUFBQSxDQUFLMUQsQ0FBQyxFQUFFNUIsTUFBQSxDQUFPLE1BQU00RixJQUFJLENBQUM7TUFDbkRBLElBQUEsR0FBT3pJLHdCQUFBLENBQUEwSSxRQUFBLENBQVN0RyxJQUFBLENBQUtqQixNQUFBLENBQU93SCxJQUFBLENBQUtGLElBQUksQ0FBQztNQUN0QyxJQUFJbkksRUFBQSxHQUFLSixLQUFBLENBQU1JLEVBQUEsQ0FBRytCLElBQUEsQ0FBSyxJQUFJdkMsNEJBQUEsQ0FBQThJLGlCQUFBLENBQWtCL0gsSUFBQSxDQUFLK0IsR0FBQSxHQUFNLEdBQUcwRCxHQUFBLEVBQUt6RixJQUFBLENBQUsrQixHQUFBLEVBQUswRCxHQUFBLEVBQUssSUFBSXRHLHdCQUFBLENBQUFpQyxLQUFBLENBQU13RyxJQUFBLEVBQU0sR0FBRyxDQUFDLEdBQUdOLElBQUEsQ0FBS2IsTUFBQSxFQUFRLElBQUksQ0FBQztNQUN4SCxJQUFJdUIsT0FBQSxHQUFVdkksRUFBQSxDQUFHeUIsR0FBQSxDQUFJVSxPQUFBLENBQVE2RCxHQUFBLEdBQU0sSUFBSTZCLElBQUEsQ0FBS2IsTUFBTTtNQUNsRCxJQUFJdUIsT0FBQSxDQUFRL0UsU0FBQSxJQUFhK0UsT0FBQSxDQUFRL0UsU0FBQSxDQUFVTCxJQUFBLElBQVF0QyxNQUFBLENBQU9zQyxJQUFBLFFBQ3REM0QsNEJBQUEsQ0FBQWdGLE9BQUEsRUFBUXhFLEVBQUEsQ0FBR3lCLEdBQUEsRUFBSzhHLE9BQUEsQ0FBUWpHLEdBQUcsR0FDM0J0QyxFQUFBLENBQUcwRSxJQUFBLENBQUs2RCxPQUFBLENBQVFqRyxHQUFHO01BQ3ZCekMsUUFBQSxDQUFTRyxFQUFBLENBQUdDLGNBQUEsQ0FBZSxDQUFDO0lBQ2hDO0lBQ0EsT0FBTztFQUNYO0VBQ0EsSUFBSXVJLFFBQUEsR0FBVzlHLEtBQUEsQ0FBTXlCLElBQUEsQ0FBS0MsSUFBQSxDQUFLQyxTQUFBLElBQWN1RSxHQUFBLEdBQU0sS0FBS0UsUUFBQSxHQUFZLE9BQU9uSSx3QkFBQSxDQUFBc0MsU0FBQSxDQUFVQyxRQUFBLENBQVMzQixJQUFBLEVBQU0sQ0FBQztFQUNyRyxJQUFJRSxLQUFBLEdBQVErSCxRQUFBLElBQVlBLFFBQUEsQ0FBUzdELEtBQUEsQ0FBTWpFLFVBQUEsQ0FBVzhILFFBQUEsQ0FBUzVELEdBQUc7SUFBR2pFLE1BQUEsR0FBU0YsS0FBQSxRQUFTakIsNEJBQUEsQ0FBQW9CLFVBQUEsRUFBV0gsS0FBSztFQUNuRyxJQUFJRSxNQUFBLElBQVUsUUFBUUEsTUFBQSxJQUFVSixJQUFBLENBQUtlLEtBQUEsRUFBTztJQUN4QyxJQUFJekIsUUFBQSxFQUNBQSxRQUFBLENBQVNELEtBQUEsQ0FBTUksRUFBQSxDQUFHNUIsSUFBQSxDQUFLcUMsS0FBQSxFQUFPRSxNQUFNLEVBQUVWLGNBQUEsQ0FBZSxDQUFDO0lBQzFELE9BQU87RUFDWDtFQUNBLElBQUk4SCxXQUFBLElBQWU1RyxXQUFBLENBQVlPLEtBQUEsRUFBTyxTQUFTLElBQUksS0FBS1AsV0FBQSxDQUFZTixNQUFBLEVBQVEsS0FBSyxHQUFHO0lBQ2hGLElBQUk0SCxFQUFBLEdBQUs1SCxNQUFBO01BQVFzSCxJQUFBLEdBQU8sRUFBQztJQUN6QixTQUFTO01BQ0xBLElBQUEsQ0FBS08sSUFBQSxDQUFLRCxFQUFFO01BQ1osSUFBSUEsRUFBQSxDQUFHdkYsV0FBQSxFQUNIO01BQ0p1RixFQUFBLEdBQUtBLEVBQUEsQ0FBR2xGLFNBQUE7SUFDWjtJQUNBLElBQUlFLFNBQUEsR0FBWS9CLEtBQUE7TUFBT2lILFVBQUEsR0FBYTtJQUNwQyxPQUFPLENBQUNsRixTQUFBLENBQVVQLFdBQUEsRUFBYU8sU0FBQSxHQUFZQSxTQUFBLENBQVVFLFVBQUEsRUFDakRnRixVQUFBO0lBQ0osSUFBSUYsRUFBQSxDQUFHZCxVQUFBLENBQVdjLEVBQUEsQ0FBRy9GLFVBQUEsRUFBWStGLEVBQUEsQ0FBRy9GLFVBQUEsRUFBWWUsU0FBQSxDQUFVeEMsT0FBTyxHQUFHO01BQ2hFLElBQUlwQixRQUFBLEVBQVU7UUFDVixJQUFJbUcsR0FBQSxHQUFNdEcsd0JBQUEsQ0FBQTBJLFFBQUEsQ0FBU3JJLEtBQUE7UUFDbkIsU0FBU29FLENBQUEsR0FBSWdFLElBQUEsQ0FBS25CLE1BQUEsR0FBUyxHQUFHN0MsQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFDbEM2QixHQUFBLEdBQU10Ryx3QkFBQSxDQUFBMEksUUFBQSxDQUFTdEcsSUFBQSxDQUFLcUcsSUFBQSxDQUFLaEUsQ0FBQyxFQUFFa0UsSUFBQSxDQUFLckMsR0FBRyxDQUFDO1FBQ3pDLElBQUloRyxFQUFBLEdBQUtKLEtBQUEsQ0FBTUksRUFBQSxDQUFHK0IsSUFBQSxDQUFLLElBQUl2Qyw0QkFBQSxDQUFBOEksaUJBQUEsQ0FBa0IvSCxJQUFBLENBQUsrQixHQUFBLEdBQU02RixJQUFBLENBQUtuQixNQUFBLEVBQVF6RyxJQUFBLENBQUsrQixHQUFBLEdBQU1aLEtBQUEsQ0FBTWMsUUFBQSxFQUFVakMsSUFBQSxDQUFLK0IsR0FBQSxHQUFNcUcsVUFBQSxFQUFZcEksSUFBQSxDQUFLK0IsR0FBQSxHQUFNWixLQUFBLENBQU1jLFFBQUEsR0FBV21HLFVBQUEsRUFBWSxJQUFJakosd0JBQUEsQ0FBQWlDLEtBQUEsQ0FBTXFFLEdBQUEsRUFBS21DLElBQUEsQ0FBS25CLE1BQUEsRUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDdk1uSCxRQUFBLENBQVNHLEVBQUEsQ0FBR0MsY0FBQSxDQUFlLENBQUM7TUFDaEM7TUFDQSxPQUFPO0lBQ1g7RUFDSjtFQUNBLE9BQU87QUFDWDtBQUNBLFNBQVMySSxvQkFBb0I5RSxJQUFBLEVBQU07RUFDL0IsT0FBTyxVQUFVbEUsS0FBQSxFQUFPQyxRQUFBLEVBQVU7SUFDOUIsSUFBSXdFLEdBQUEsR0FBTXpFLEtBQUEsQ0FBTUUsU0FBQTtNQUFXb0UsSUFBQSxHQUFPSixJQUFBLEdBQU8sSUFBSU8sR0FBQSxDQUFJTSxLQUFBLEdBQVFOLEdBQUEsQ0FBSU8sR0FBQTtJQUM3RCxJQUFJdEQsS0FBQSxHQUFRNEMsSUFBQSxDQUFLNUMsS0FBQTtJQUNqQixPQUFPNEMsSUFBQSxDQUFLekIsSUFBQSxDQUFLbkIsS0FBSyxFQUFFdUgsUUFBQSxFQUFVO01BQzlCLElBQUksQ0FBQ3ZILEtBQUEsRUFDRCxPQUFPO01BQ1hBLEtBQUE7SUFDSjtJQUNBLElBQUksQ0FBQzRDLElBQUEsQ0FBS3pCLElBQUEsQ0FBS25CLEtBQUssRUFBRTRCLFdBQUEsRUFDbEIsT0FBTztJQUNYLElBQUlyRCxRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUdnQyxZQUFBLENBQWFyQyx3QkFBQSxDQUFBa0UsYUFBQSxDQUFjdEIsTUFBQSxDQUFPM0MsS0FBQSxDQUFNNkIsR0FBQSxFQUFLcUMsSUFBQSxHQUFPLElBQUlJLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTXJGLEtBQUssSUFBSTRDLElBQUEsQ0FBSzhCLEdBQUEsQ0FBSTFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkgsT0FBTztFQUNYO0FBQ0o7QUFJQSxJQUFNeEMsb0JBQUEsR0FBdUI4SixtQkFBQSxDQUFvQixFQUFFO0FBSW5ELElBQU0vSixrQkFBQSxHQUFxQitKLG1CQUFBLENBQW9CLENBQUM7QUFNaEQsU0FBU3hKLE9BQU8wSixRQUFBLEVBQVVDLEtBQUEsR0FBUSxNQUFNO0VBQ3BDLE9BQU8sVUFBVW5KLEtBQUEsRUFBT0MsUUFBQSxFQUFVO0lBQzlCLElBQUk7TUFBRThFLEtBQUE7TUFBT0M7SUFBSSxJQUFJaEYsS0FBQSxDQUFNRSxTQUFBO0lBQzNCLElBQUlXLEtBQUEsR0FBUWtFLEtBQUEsQ0FBTWpFLFVBQUEsQ0FBV2tFLEdBQUc7TUFBR29FLFFBQUEsR0FBV3ZJLEtBQUEsUUFBU2pCLDRCQUFBLENBQUF3SSxZQUFBLEVBQWF2SCxLQUFBLEVBQU9xSSxRQUFBLEVBQVVDLEtBQUs7SUFDMUYsSUFBSSxDQUFDQyxRQUFBLEVBQ0QsT0FBTztJQUNYLElBQUluSixRQUFBLEVBQ0FBLFFBQUEsQ0FBU0QsS0FBQSxDQUFNSSxFQUFBLENBQUdtSSxJQUFBLENBQUsxSCxLQUFBLEVBQU91SSxRQUFRLEVBQUUvSSxjQUFBLENBQWUsQ0FBQztJQUM1RCxPQUFPO0VBQ1g7QUFDSjtBQUtBLFNBQVNsQixhQUFhK0osUUFBQSxFQUFVQyxLQUFBLEdBQVEsTUFBTTtFQUMxQyxPQUFPLFVBQVVuSixLQUFBLEVBQU9DLFFBQUEsRUFBVTtJQUM5QixJQUFJb0osVUFBQSxHQUFhO0lBQ2pCLFNBQVM5RSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdkUsS0FBQSxDQUFNRSxTQUFBLENBQVVvSixNQUFBLENBQU9sQyxNQUFBLElBQVUsQ0FBQ2lDLFVBQUEsRUFBWTlFLENBQUEsSUFBSztNQUNuRSxJQUFJO1FBQUVRLEtBQUEsRUFBTztVQUFFckMsR0FBQSxFQUFLUjtRQUFLO1FBQUc4QyxHQUFBLEVBQUs7VUFBRXRDLEdBQUEsRUFBS1Q7UUFBRztNQUFFLElBQUlqQyxLQUFBLENBQU1FLFNBQUEsQ0FBVW9KLE1BQUEsQ0FBTy9FLENBQUM7TUFDekV2RSxLQUFBLENBQU02QixHQUFBLENBQUkwSCxZQUFBLENBQWFySCxJQUFBLEVBQU1ELEVBQUEsRUFBSSxDQUFDWSxJQUFBLEVBQU1ILEdBQUEsS0FBUTtRQUM1QyxJQUFJMkcsVUFBQSxFQUNBLE9BQU87UUFDWCxJQUFJLENBQUN4RyxJQUFBLENBQUtTLFdBQUEsSUFBZVQsSUFBQSxDQUFLMkcsU0FBQSxDQUFVTixRQUFBLEVBQVVDLEtBQUssR0FDbkQ7UUFDSixJQUFJdEcsSUFBQSxDQUFLVSxJQUFBLElBQVEyRixRQUFBLEVBQVU7VUFDdkJHLFVBQUEsR0FBYTtRQUNqQixPQUNLO1VBQ0QsSUFBSS9FLElBQUEsR0FBT3RFLEtBQUEsQ0FBTTZCLEdBQUEsQ0FBSVUsT0FBQSxDQUFRRyxHQUFHO1lBQUc4QixLQUFBLEdBQVFGLElBQUEsQ0FBS0UsS0FBQSxDQUFNO1VBQ3RENkUsVUFBQSxHQUFhL0UsSUFBQSxDQUFLbEQsTUFBQSxDQUFPeUUsY0FBQSxDQUFlckIsS0FBQSxFQUFPQSxLQUFBLEdBQVEsR0FBRzBFLFFBQVE7UUFDdEU7TUFDSixDQUFDO0lBQ0w7SUFDQSxJQUFJLENBQUNHLFVBQUEsRUFDRCxPQUFPO0lBQ1gsSUFBSXBKLFFBQUEsRUFBVTtNQUNWLElBQUlHLEVBQUEsR0FBS0osS0FBQSxDQUFNSSxFQUFBO01BQ2YsU0FBU21FLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl2RSxLQUFBLENBQU1FLFNBQUEsQ0FBVW9KLE1BQUEsQ0FBT2xDLE1BQUEsRUFBUTdDLENBQUEsSUFBSztRQUNwRCxJQUFJO1VBQUVRLEtBQUEsRUFBTztZQUFFckMsR0FBQSxFQUFLUjtVQUFLO1VBQUc4QyxHQUFBLEVBQUs7WUFBRXRDLEdBQUEsRUFBS1Q7VUFBRztRQUFFLElBQUlqQyxLQUFBLENBQU1FLFNBQUEsQ0FBVW9KLE1BQUEsQ0FBTy9FLENBQUM7UUFDekVuRSxFQUFBLENBQUdqQixZQUFBLENBQWErQyxJQUFBLEVBQU1ELEVBQUEsRUFBSWlILFFBQUEsRUFBVUMsS0FBSztNQUM3QztNQUNBbEosUUFBQSxDQUFTRyxFQUFBLENBQUdDLGNBQUEsQ0FBZSxDQUFDO0lBQ2hDO0lBQ0EsT0FBTztFQUNYO0FBQ0o7QUFDQSxTQUFTb0osWUFBWTVILEdBQUEsRUFBS3lILE1BQUEsRUFBUS9GLElBQUEsRUFBTW1HLFVBQUEsRUFBWTtFQUNoRCxTQUFTbkYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSStFLE1BQUEsQ0FBT2xDLE1BQUEsRUFBUTdDLENBQUEsSUFBSztJQUNwQyxJQUFJO01BQUVRLEtBQUE7TUFBT0M7SUFBSSxJQUFJc0UsTUFBQSxDQUFPL0UsQ0FBQztJQUM3QixJQUFJNEMsR0FBQSxHQUFNcEMsS0FBQSxDQUFNckQsS0FBQSxJQUFTLElBQUlHLEdBQUEsQ0FBSXFFLGFBQUEsSUFBaUJyRSxHQUFBLENBQUkwQixJQUFBLENBQUtvRyxjQUFBLENBQWVwRyxJQUFJLElBQUk7SUFDbEYxQixHQUFBLENBQUkwSCxZQUFBLENBQWF4RSxLQUFBLENBQU1yQyxHQUFBLEVBQUtzQyxHQUFBLENBQUl0QyxHQUFBLEVBQUssQ0FBQ0csSUFBQSxFQUFNSCxHQUFBLEtBQVE7TUFDaEQsSUFBSXlFLEdBQUEsSUFBTyxDQUFDdUMsVUFBQSxJQUFjN0csSUFBQSxDQUFLRSxNQUFBLElBQVVGLElBQUEsQ0FBS29HLFFBQUEsSUFBWXZHLEdBQUEsSUFBT3FDLEtBQUEsQ0FBTXJDLEdBQUEsSUFBT0EsR0FBQSxHQUFNRyxJQUFBLENBQUtELFFBQUEsSUFBWW9DLEdBQUEsQ0FBSXRDLEdBQUEsRUFDckcsT0FBTztNQUNYeUUsR0FBQSxHQUFNdEUsSUFBQSxDQUFLcUQsYUFBQSxJQUFpQnJELElBQUEsQ0FBS1UsSUFBQSxDQUFLb0csY0FBQSxDQUFlcEcsSUFBSTtJQUM3RCxDQUFDO0lBQ0QsSUFBSTRELEdBQUEsRUFDQSxPQUFPO0VBQ2Y7RUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTeUMsa0JBQWtCTixNQUFBLEVBQVE7RUFDL0IsSUFBSU8sTUFBQSxHQUFTLEVBQUM7RUFDZCxTQUFTdEYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSStFLE1BQUEsQ0FBT2xDLE1BQUEsRUFBUTdDLENBQUEsSUFBSztJQUNwQyxJQUFJO01BQUVRLEtBQUE7TUFBT0M7SUFBSSxJQUFJc0UsTUFBQSxDQUFPL0UsQ0FBQztJQUM3QlEsS0FBQSxDQUFNbEQsR0FBQSxDQUFJMEgsWUFBQSxDQUFheEUsS0FBQSxDQUFNckMsR0FBQSxFQUFLc0MsR0FBQSxDQUFJdEMsR0FBQSxFQUFLLENBQUNHLElBQUEsRUFBTUgsR0FBQSxLQUFRO01BQ3RELElBQUlHLElBQUEsQ0FBS0UsTUFBQSxJQUFVRixJQUFBLENBQUt4QixPQUFBLENBQVFDLElBQUEsSUFBUXVCLElBQUEsQ0FBS29HLFFBQUEsSUFBWXZHLEdBQUEsSUFBT3FDLEtBQUEsQ0FBTXJDLEdBQUEsSUFBT0EsR0FBQSxHQUFNRyxJQUFBLENBQUtELFFBQUEsSUFBWW9DLEdBQUEsQ0FBSXRDLEdBQUEsRUFBSztRQUN6RyxJQUFJQSxHQUFBLEdBQU0sSUFBSXFDLEtBQUEsQ0FBTXJDLEdBQUEsRUFDaEJtSCxNQUFBLENBQU9mLElBQUEsQ0FBSyxJQUFJL0ksd0JBQUEsQ0FBQStKLGNBQUEsQ0FBZS9FLEtBQUEsRUFBT0EsS0FBQSxDQUFNbEQsR0FBQSxDQUFJVSxPQUFBLENBQVFHLEdBQUEsR0FBTSxDQUFDLENBQUMsQ0FBQztRQUNyRXFDLEtBQUEsR0FBUUEsS0FBQSxDQUFNbEQsR0FBQSxDQUFJVSxPQUFBLENBQVFHLEdBQUEsR0FBTSxJQUFJRyxJQUFBLENBQUt4QixPQUFBLENBQVFDLElBQUk7UUFDckQsT0FBTztNQUNYO0lBQ0osQ0FBQztJQUNELElBQUl5RCxLQUFBLENBQU1yQyxHQUFBLEdBQU1zQyxHQUFBLENBQUl0QyxHQUFBLEVBQ2hCbUgsTUFBQSxDQUFPZixJQUFBLENBQUssSUFBSS9JLHdCQUFBLENBQUErSixjQUFBLENBQWUvRSxLQUFBLEVBQU9DLEdBQUcsQ0FBQztFQUNsRDtFQUNBLE9BQU82RSxNQUFBO0FBQ1g7QUFVQSxTQUFTdEssV0FBV3dLLFFBQUEsRUFBVVosS0FBQSxHQUFRLE1BQU1hLE9BQUEsRUFBUztFQUNqRCxJQUFJQyxpQkFBQSxJQUFxQkQsT0FBQSxJQUFXQSxPQUFBLENBQVFDLGlCQUFBLE1BQXVCO0VBQ25FLElBQUlQLFVBQUEsSUFBY00sT0FBQSxJQUFXQSxPQUFBLENBQVFFLGdCQUFBLE1BQXNCO0VBQzNELElBQUlDLFNBQUEsR0FBWSxFQUFFSCxPQUFBLElBQVdBLE9BQUEsQ0FBUUksaUJBQUE7RUFDckMsT0FBTyxVQUFVcEssS0FBQSxFQUFPQyxRQUFBLEVBQVU7SUFDOUIsSUFBSTtNQUFFRSxLQUFBO01BQU9LLE9BQUE7TUFBUzhJO0lBQU8sSUFBSXRKLEtBQUEsQ0FBTUUsU0FBQTtJQUN2QyxJQUFLQyxLQUFBLElBQVMsQ0FBQ0ssT0FBQSxJQUFZLENBQUNpSixXQUFBLENBQVl6SixLQUFBLENBQU02QixHQUFBLEVBQUt5SCxNQUFBLEVBQVFTLFFBQUEsRUFBVUwsVUFBVSxHQUMzRSxPQUFPO0lBQ1gsSUFBSXpKLFFBQUEsRUFBVTtNQUNWLElBQUlPLE9BQUEsRUFBUztRQUNULElBQUl1SixRQUFBLENBQVNNLE9BQUEsQ0FBUXJLLEtBQUEsQ0FBTXlILFdBQUEsSUFBZWpILE9BQUEsQ0FBUWdILEtBQUEsQ0FBTSxDQUFDLEdBQ3JEdkgsUUFBQSxDQUFTRCxLQUFBLENBQU1JLEVBQUEsQ0FBR2tLLGdCQUFBLENBQWlCUCxRQUFRLENBQUMsT0FFNUM5SixRQUFBLENBQVNELEtBQUEsQ0FBTUksRUFBQSxDQUFHbUssYUFBQSxDQUFjUixRQUFBLENBQVNwSCxNQUFBLENBQU93RyxLQUFLLENBQUMsQ0FBQztNQUMvRCxPQUNLO1FBQ0QsSUFBSXFCLEdBQUE7VUFBS3BLLEVBQUEsR0FBS0osS0FBQSxDQUFNSSxFQUFBO1FBQ3BCLElBQUksQ0FBQ3NKLFVBQUEsRUFDREosTUFBQSxHQUFTTSxpQkFBQSxDQUFrQk4sTUFBTTtRQUNyQyxJQUFJVyxpQkFBQSxFQUFtQjtVQUNuQk8sR0FBQSxHQUFNLENBQUNsQixNQUFBLENBQU9tQixJQUFBLENBQUtDLENBQUEsSUFBSzFLLEtBQUEsQ0FBTTZCLEdBQUEsQ0FBSThJLFlBQUEsQ0FBYUQsQ0FBQSxDQUFFM0YsS0FBQSxDQUFNckMsR0FBQSxFQUFLZ0ksQ0FBQSxDQUFFMUYsR0FBQSxDQUFJdEMsR0FBQSxFQUFLcUgsUUFBUSxDQUFDO1FBQ3BGLE9BQ0s7VUFDRFMsR0FBQSxHQUFNLENBQUNsQixNQUFBLENBQU9zQixLQUFBLENBQU1GLENBQUEsSUFBSztZQUNyQixJQUFJRyxPQUFBLEdBQVU7WUFDZHpLLEVBQUEsQ0FBR3lCLEdBQUEsQ0FBSTBILFlBQUEsQ0FBYW1CLENBQUEsQ0FBRTNGLEtBQUEsQ0FBTXJDLEdBQUEsRUFBS2dJLENBQUEsQ0FBRTFGLEdBQUEsQ0FBSXRDLEdBQUEsRUFBSyxDQUFDRyxJQUFBLEVBQU1ILEdBQUEsRUFBS3RCLE1BQUEsS0FBVztjQUMvRCxJQUFJeUosT0FBQSxFQUNBLE9BQU87Y0FDWEEsT0FBQSxHQUFVLENBQUNkLFFBQUEsQ0FBU00sT0FBQSxDQUFReEgsSUFBQSxDQUFLMkUsS0FBSyxLQUFLLENBQUMsQ0FBQ3BHLE1BQUEsSUFBVUEsTUFBQSxDQUFPbUMsSUFBQSxDQUFLb0csY0FBQSxDQUFlSSxRQUFRLEtBQ3RGLEVBQUVsSCxJQUFBLENBQUtpSSxNQUFBLElBQVUsUUFBUUMsSUFBQSxDQUFLbEksSUFBQSxDQUFLbUksV0FBQSxDQUFZQyxJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHUixDQUFBLENBQUUzRixLQUFBLENBQU1yQyxHQUFBLEdBQU1BLEdBQUcsR0FBR3VJLElBQUEsQ0FBS0UsR0FBQSxDQUFJdEksSUFBQSxDQUFLRCxRQUFBLEVBQVU4SCxDQUFBLENBQUUxRixHQUFBLENBQUl0QyxHQUFBLEdBQU1BLEdBQUcsQ0FBQyxDQUFDO1lBQ2hJLENBQUM7WUFDRCxPQUFPLENBQUNtSSxPQUFBO1VBQ1osQ0FBQztRQUNMO1FBQ0EsU0FBU3RHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkrRSxNQUFBLENBQU9sQyxNQUFBLEVBQVE3QyxDQUFBLElBQUs7VUFDcEMsSUFBSTtZQUFFUSxLQUFBO1lBQU9DO1VBQUksSUFBSXNFLE1BQUEsQ0FBTy9FLENBQUM7VUFDN0IsSUFBSSxDQUFDaUcsR0FBQSxFQUFLO1lBQ05wSyxFQUFBLENBQUdnTCxVQUFBLENBQVdyRyxLQUFBLENBQU1yQyxHQUFBLEVBQUtzQyxHQUFBLENBQUl0QyxHQUFBLEVBQUtxSCxRQUFRO1VBQzlDLE9BQ0s7WUFDRCxJQUFJN0gsSUFBQSxHQUFPNkMsS0FBQSxDQUFNckMsR0FBQTtjQUFLVCxFQUFBLEdBQUsrQyxHQUFBLENBQUl0QyxHQUFBO2NBQUtxRSxLQUFBLEdBQVFoQyxLQUFBLENBQU1uQixTQUFBO2NBQVd3QyxHQUFBLEdBQU1wQixHQUFBLENBQUk5RCxVQUFBO1lBQ3ZFLElBQUltSyxVQUFBLEdBQWFsQixTQUFBLElBQWFwRCxLQUFBLElBQVNBLEtBQUEsQ0FBTStELE1BQUEsR0FBUyxPQUFPUSxJQUFBLENBQUt2RSxLQUFBLENBQU13RSxJQUFJLEVBQUUsQ0FBQyxFQUFFbkUsTUFBQSxHQUFTO1lBQzFGLElBQUlvRSxRQUFBLEdBQVdyQixTQUFBLElBQWEvRCxHQUFBLElBQU9BLEdBQUEsQ0FBSTBFLE1BQUEsR0FBUyxPQUFPUSxJQUFBLENBQUtsRixHQUFBLENBQUltRixJQUFJLEVBQUUsQ0FBQyxFQUFFbkUsTUFBQSxHQUFTO1lBQ2xGLElBQUlsRixJQUFBLEdBQU9tSixVQUFBLEdBQWFwSixFQUFBLEVBQUk7Y0FDeEJDLElBQUEsSUFBUW1KLFVBQUE7Y0FDUnBKLEVBQUEsSUFBTXVKLFFBQUE7WUFDVjtZQUNBcEwsRUFBQSxDQUFHcUwsT0FBQSxDQUFRdkosSUFBQSxFQUFNRCxFQUFBLEVBQUk4SCxRQUFBLENBQVNwSCxNQUFBLENBQU93RyxLQUFLLENBQUM7VUFDL0M7UUFDSjtRQUNBbEosUUFBQSxDQUFTRyxFQUFBLENBQUdDLGNBQUEsQ0FBZSxDQUFDO01BQ2hDO0lBQ0o7SUFDQSxPQUFPO0VBQ1g7QUFDSjtBQUNBLFNBQVNxTCxvQkFBb0J6TCxRQUFBLEVBQVUwTCxVQUFBLEVBQVk7RUFDL0MsT0FBUXZMLEVBQUEsSUFBTztJQUNYLElBQUksQ0FBQ0EsRUFBQSxDQUFHd0wsU0FBQSxFQUNKLE9BQU8zTCxRQUFBLENBQVNHLEVBQUU7SUFDdEIsSUFBSWtKLE1BQUEsR0FBUyxFQUFDO0lBQ2QsU0FBUy9FLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUluRSxFQUFBLENBQUdvQyxPQUFBLENBQVFxSixJQUFBLENBQUt6RSxNQUFBLEVBQVE3QyxDQUFBLElBQUs7TUFDN0MsSUFBSTlCLEdBQUEsR0FBTXJDLEVBQUEsQ0FBR29DLE9BQUEsQ0FBUXFKLElBQUEsQ0FBS3RILENBQUM7TUFDM0IsU0FBU3VILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl4QyxNQUFBLENBQU9sQyxNQUFBLEVBQVEwRSxDQUFBLElBQy9CeEMsTUFBQSxDQUFPd0MsQ0FBQyxJQUFJckosR0FBQSxDQUFJQSxHQUFBLENBQUk2RyxNQUFBLENBQU93QyxDQUFDLENBQUM7TUFDakNySixHQUFBLENBQUlzSixPQUFBLENBQVEsQ0FBQ0MsRUFBQSxFQUFJQyxFQUFBLEVBQUkvSixJQUFBLEVBQU1ELEVBQUEsS0FBT3FILE1BQUEsQ0FBT1IsSUFBQSxDQUFLNUcsSUFBQSxFQUFNRCxFQUFFLENBQUM7SUFDM0Q7SUFHQSxJQUFJaUssUUFBQSxHQUFXLEVBQUM7SUFDaEIsU0FBUzNILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkrRSxNQUFBLENBQU9sQyxNQUFBLEVBQVE3QyxDQUFBLElBQUssR0FBRztNQUN2QyxJQUFJckMsSUFBQSxHQUFPb0gsTUFBQSxDQUFPL0UsQ0FBQztRQUFHdEMsRUFBQSxHQUFLcUgsTUFBQSxDQUFPL0UsQ0FBQSxHQUFJLENBQUM7TUFDdkMsSUFBSVEsS0FBQSxHQUFRM0UsRUFBQSxDQUFHeUIsR0FBQSxDQUFJVSxPQUFBLENBQVFMLElBQUk7UUFBR1IsS0FBQSxHQUFRcUQsS0FBQSxDQUFNNkMsV0FBQSxDQUFZM0YsRUFBRTtRQUFHYixNQUFBLEdBQVMyRCxLQUFBLENBQU1sQyxJQUFBLENBQUtuQixLQUFLO01BQzFGLFNBQVM4QyxLQUFBLEdBQVFPLEtBQUEsQ0FBTVksVUFBQSxDQUFXakUsS0FBSyxHQUFHZ0IsR0FBQSxHQUFNcUMsS0FBQSxDQUFNakQsS0FBQSxDQUFNSixLQUFBLEdBQVEsQ0FBQyxHQUFHZ0IsR0FBQSxJQUFPVCxFQUFBLEVBQUksRUFBRXVDLEtBQUEsRUFBTztRQUN4RixJQUFJMUMsS0FBQSxHQUFRVixNQUFBLENBQU8rSyxVQUFBLENBQVczSCxLQUFLO1FBQ25DLElBQUksQ0FBQzFDLEtBQUEsRUFDRDtRQUNKLElBQUkwQyxLQUFBLElBQVMwSCxRQUFBLENBQVNFLE9BQUEsQ0FBUTFKLEdBQUcsS0FBSyxJQUFJO1VBQ3RDLElBQUl6QixNQUFBLEdBQVNHLE1BQUEsQ0FBT3NDLEtBQUEsQ0FBTWMsS0FBQSxHQUFRLENBQUM7VUFDbkMsSUFBSXZELE1BQUEsQ0FBT3NDLElBQUEsSUFBUXpCLEtBQUEsQ0FBTXlCLElBQUEsSUFBUW9JLFVBQUEsQ0FBVzFLLE1BQUEsRUFBUWEsS0FBSyxHQUNyRG9LLFFBQUEsQ0FBU3BELElBQUEsQ0FBS3BHLEdBQUc7UUFDekI7UUFDQUEsR0FBQSxJQUFPWixLQUFBLENBQU1jLFFBQUE7TUFDakI7SUFDSjtJQUVBc0osUUFBQSxDQUFTRyxJQUFBLENBQUssQ0FBQ0MsQ0FBQSxFQUFHQyxDQUFBLEtBQU1ELENBQUEsR0FBSUMsQ0FBQztJQUM3QixTQUFTaEksQ0FBQSxHQUFJMkgsUUFBQSxDQUFTOUUsTUFBQSxHQUFTLEdBQUc3QyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO01BQzNDLFFBQUkzRSw0QkFBQSxDQUFBZ0YsT0FBQSxFQUFReEUsRUFBQSxDQUFHeUIsR0FBQSxFQUFLcUssUUFBQSxDQUFTM0gsQ0FBQyxDQUFDLEdBQzNCbkUsRUFBQSxDQUFHMEUsSUFBQSxDQUFLb0gsUUFBQSxDQUFTM0gsQ0FBQyxDQUFDO0lBQzNCO0lBQ0F0RSxRQUFBLENBQVNHLEVBQUU7RUFDZjtBQUNKO0FBU0EsU0FBU3hDLFNBQVM0TyxPQUFBLEVBQVNiLFVBQUEsRUFBWTtFQUNuQyxJQUFJYyxRQUFBLEdBQVVDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRaEIsVUFBVSxJQUFLOUksSUFBQSxJQUFTOEksVUFBQSxDQUFXUyxPQUFBLENBQVF2SixJQUFBLENBQUtVLElBQUEsQ0FBS3FKLElBQUksSUFBSSxLQUNuRmpCLFVBQUE7RUFDTixPQUFPLENBQUMzTCxLQUFBLEVBQU9DLFFBQUEsRUFBVU0sSUFBQSxLQUFTaU0sT0FBQSxDQUFReE0sS0FBQSxFQUFPQyxRQUFBLElBQVl5TCxtQkFBQSxDQUFvQnpMLFFBQUEsRUFBVXdNLFFBQU8sR0FBR2xNLElBQUk7QUFDN0c7QUFLQSxTQUFTekMsY0FBQSxHQUFpQitPLFFBQUEsRUFBVTtFQUNoQyxPQUFPLFVBQVU3TSxLQUFBLEVBQU9DLFFBQUEsRUFBVU0sSUFBQSxFQUFNO0lBQ3BDLFNBQVNnRSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJc0ksUUFBQSxDQUFTekYsTUFBQSxFQUFRN0MsQ0FBQSxJQUNqQyxJQUFJc0ksUUFBQSxDQUFTdEksQ0FBQyxFQUFFdkUsS0FBQSxFQUFPQyxRQUFBLEVBQVVNLElBQUksR0FDakMsT0FBTztJQUNmLE9BQU87RUFDWDtBQUNKO0FBQ0EsSUFBSXVNLFNBQUEsR0FBWWhQLGFBQUEsQ0FBY0UsZUFBQSxFQUFpQkUsWUFBQSxFQUFjWSxrQkFBa0I7QUFDL0UsSUFBSWlPLEdBQUEsR0FBTWpQLGFBQUEsQ0FBY0UsZUFBQSxFQUFpQkksV0FBQSxFQUFhVyxpQkFBaUI7QUFhdkUsSUFBTUgsWUFBQSxHQUFlO0VBQ2pCLFNBQVNkLGFBQUEsQ0FBY2EsYUFBQSxFQUFlWixtQkFBQSxFQUFxQlUsY0FBQSxFQUFnQlcsVUFBVTtFQUNyRixhQUFhbkIsUUFBQTtFQUNiLGFBQWE2TyxTQUFBO0VBQ2IsaUJBQWlCQSxTQUFBO0VBQ2pCLG1CQUFtQkEsU0FBQTtFQUNuQixVQUFVQyxHQUFBO0VBQ1YsY0FBY0EsR0FBQTtFQUNkLFNBQVNsTztBQUNiO0FBT0EsSUFBTUgsYUFBQSxHQUFnQjtFQUNsQixVQUFVRSxZQUFBLENBQWEsV0FBVztFQUNsQyxpQkFBaUJBLFlBQUEsQ0FBYSxlQUFlO0VBQzdDLFVBQVVBLFlBQUEsQ0FBYSxRQUFRO0VBQy9CLHNCQUFzQkEsWUFBQSxDQUFhLFlBQVk7RUFDL0MsY0FBY0EsWUFBQSxDQUFhLFlBQVk7RUFDdkMsU0FBU0EsWUFBQSxDQUFhLFlBQVk7RUFDbEMsVUFBVU0sb0JBQUE7RUFDVixVQUFVRDtBQUNkO0FBQ0EsU0FBUytOLEdBQUEsSUFBT3BPLFlBQUEsRUFDWkYsYUFBQSxDQUFjc08sR0FBRyxJQUFJcE8sWUFBQSxDQUFhb08sR0FBRztBQUN6QyxJQUFNQyxHQUFBLEdBQU0sT0FBT0MsU0FBQSxJQUFhLGNBQWMscUJBQXFCbkMsSUFBQSxDQUFLbUMsU0FBQSxDQUFVQyxRQUFRLElBRXBGLE9BQU9DLEVBQUEsSUFBTSxlQUFlQSxFQUFBLENBQUdELFFBQUEsR0FBV0MsRUFBQSxDQUFHRCxRQUFBLENBQVMsS0FBSyxXQUFXO0FBTTVFLElBQU10UCxVQUFBLEdBQWFvUCxHQUFBLEdBQU12TyxhQUFBLEdBQWdCRSxZQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==