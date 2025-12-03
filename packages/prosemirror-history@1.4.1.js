System.register(["rope-sequence@1.3.4","orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["rope-sequence","1.3.4"],["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-history","1.4.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('rope-sequence@1.3.4', dep), dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep)],
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

// .beyond/uimport/temp/prosemirror-history.1.4.1.js
var prosemirror_history_1_4_1_exports = {};
__export(prosemirror_history_1_4_1_exports, {
  closeHistory: () => closeHistory,
  history: () => history,
  redo: () => redo,
  redoDepth: () => redoDepth,
  redoNoScroll: () => redoNoScroll,
  undo: () => undo,
  undoDepth: () => undoDepth,
  undoNoScroll: () => undoNoScroll
});
module.exports = __toCommonJS(prosemirror_history_1_4_1_exports);

// node_modules/prosemirror-history/dist/index.js
var import_rope_sequence = __toESM(require("rope-sequence@1.3.4"), 0);
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var max_empty_items = 500;
var Branch = class _Branch {
  constructor(items, eventCount) {
    this.items = items;
    this.eventCount = eventCount;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(state, preserveItems) {
    if (this.eventCount == 0) return null;
    let end = this.items.length;
    for (;; end--) {
      let next = this.items.get(end - 1);
      if (next.selection) {
        --end;
        break;
      }
    }
    let remap, mapFrom;
    if (preserveItems) {
      remap = this.remapping(end, this.items.length);
      mapFrom = remap.maps.length;
    }
    let transform = state.tr;
    let selection, remaining;
    let addAfter = [],
      addBefore = [];
    this.items.forEach((item, i) => {
      if (!item.step) {
        if (!remap) {
          remap = this.remapping(end, i + 1);
          mapFrom = remap.maps.length;
        }
        mapFrom--;
        addBefore.push(item);
        return;
      }
      if (remap) {
        addBefore.push(new Item(item.map));
        let step = item.step.map(remap.slice(mapFrom)),
          map;
        if (step && transform.maybeStep(step).doc) {
          map = transform.mapping.maps[transform.mapping.maps.length - 1];
          addAfter.push(new Item(map, void 0, void 0, addAfter.length + addBefore.length));
        }
        mapFrom--;
        if (map) remap.appendMap(map, mapFrom);
      } else {
        transform.maybeStep(item.step);
      }
      if (item.selection) {
        selection = remap ? item.selection.map(remap.slice(mapFrom)) : item.selection;
        remaining = new _Branch(this.items.slice(0, end).append(addBefore.reverse().concat(addAfter)), this.eventCount - 1);
        return false;
      }
    }, this.items.length, 0);
    return {
      remaining,
      transform,
      selection
    };
  }
  // Create a new branch with the given transform added.
  addTransform(transform, selection, histOptions, preserveItems) {
    let newItems = [],
      eventCount = this.eventCount;
    let oldItems = this.items,
      lastItem = !preserveItems && oldItems.length ? oldItems.get(oldItems.length - 1) : null;
    for (let i = 0; i < transform.steps.length; i++) {
      let step = transform.steps[i].invert(transform.docs[i]);
      let item = new Item(transform.mapping.maps[i], step, selection),
        merged;
      if (merged = lastItem && lastItem.merge(item)) {
        item = merged;
        if (i) newItems.pop();else oldItems = oldItems.slice(0, oldItems.length - 1);
      }
      newItems.push(item);
      if (selection) {
        eventCount++;
        selection = void 0;
      }
      if (!preserveItems) lastItem = item;
    }
    let overflow = eventCount - histOptions.depth;
    if (overflow > DEPTH_OVERFLOW) {
      oldItems = cutOffEvents(oldItems, overflow);
      eventCount -= overflow;
    }
    return new _Branch(oldItems.append(newItems), eventCount);
  }
  remapping(from, to) {
    let maps = new import_prosemirror_transform.Mapping();
    this.items.forEach((item, i) => {
      let mirrorPos = item.mirrorOffset != null && i - item.mirrorOffset >= from ? maps.maps.length - item.mirrorOffset : void 0;
      maps.appendMap(item.map, mirrorPos);
    }, from, to);
    return maps;
  }
  addMaps(array) {
    if (this.eventCount == 0) return this;
    return new _Branch(this.items.append(array.map(map => new Item(map))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(rebasedTransform, rebasedCount) {
    if (!this.eventCount) return this;
    let rebasedItems = [],
      start = Math.max(0, this.items.length - rebasedCount);
    let mapping = rebasedTransform.mapping;
    let newUntil = rebasedTransform.steps.length;
    let eventCount = this.eventCount;
    this.items.forEach(item => {
      if (item.selection) eventCount--;
    }, start);
    let iRebased = rebasedCount;
    this.items.forEach(item => {
      let pos = mapping.getMirror(--iRebased);
      if (pos == null) return;
      newUntil = Math.min(newUntil, pos);
      let map = mapping.maps[pos];
      if (item.step) {
        let step = rebasedTransform.steps[pos].invert(rebasedTransform.docs[pos]);
        let selection = item.selection && item.selection.map(mapping.slice(iRebased + 1, pos));
        if (selection) eventCount++;
        rebasedItems.push(new Item(map, step, selection));
      } else {
        rebasedItems.push(new Item(map));
      }
    }, start);
    let newMaps = [];
    for (let i = rebasedCount; i < newUntil; i++) newMaps.push(new Item(mapping.maps[i]));
    let items = this.items.slice(0, start).append(newMaps).append(rebasedItems);
    let branch = new _Branch(items, eventCount);
    if (branch.emptyItemCount() > max_empty_items) branch = branch.compress(this.items.length - rebasedItems.length);
    return branch;
  }
  emptyItemCount() {
    let count = 0;
    this.items.forEach(item => {
      if (!item.step) count++;
    });
    return count;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(upto = this.items.length) {
    let remap = this.remapping(0, upto),
      mapFrom = remap.maps.length;
    let items = [],
      events = 0;
    this.items.forEach((item, i) => {
      if (i >= upto) {
        items.push(item);
        if (item.selection) events++;
      } else if (item.step) {
        let step = item.step.map(remap.slice(mapFrom)),
          map = step && step.getMap();
        mapFrom--;
        if (map) remap.appendMap(map, mapFrom);
        if (step) {
          let selection = item.selection && item.selection.map(remap.slice(mapFrom));
          if (selection) events++;
          let newItem = new Item(map.invert(), step, selection),
            merged,
            last = items.length - 1;
          if (merged = items.length && items[last].merge(newItem)) items[last] = merged;else items.push(newItem);
        }
      } else if (item.map) {
        mapFrom--;
      }
    }, this.items.length, 0);
    return new _Branch(import_rope_sequence.default.from(items.reverse()), events);
  }
};
Branch.empty = new Branch(import_rope_sequence.default.empty, 0);
function cutOffEvents(items, n) {
  let cutPoint;
  items.forEach((item, i) => {
    if (item.selection && n-- == 0) {
      cutPoint = i;
      return false;
    }
  });
  return items.slice(cutPoint);
}
var Item = class _Item {
  constructor(map, step, selection, mirrorOffset) {
    this.map = map;
    this.step = step;
    this.selection = selection;
    this.mirrorOffset = mirrorOffset;
  }
  merge(other) {
    if (this.step && other.step && !other.selection) {
      let step = other.step.merge(this.step);
      if (step) return new _Item(step.getMap().invert(), step, this.selection);
    }
  }
};
var HistoryState = class {
  constructor(done, undone, prevRanges, prevTime, prevComposition) {
    this.done = done;
    this.undone = undone;
    this.prevRanges = prevRanges;
    this.prevTime = prevTime;
    this.prevComposition = prevComposition;
  }
};
var DEPTH_OVERFLOW = 20;
function applyTransaction(history2, state, tr, options) {
  let historyTr = tr.getMeta(historyKey),
    rebased;
  if (historyTr) return historyTr.historyState;
  if (tr.getMeta(closeHistoryKey)) history2 = new HistoryState(history2.done, history2.undone, null, 0, -1);
  let appended = tr.getMeta("appendedTransaction");
  if (tr.steps.length == 0) {
    return history2;
  } else if (appended && appended.getMeta(historyKey)) {
    if (appended.getMeta(historyKey).redo) return new HistoryState(history2.done.addTransform(tr, void 0, options, mustPreserveItems(state)), history2.undone, rangesFor(tr.mapping.maps), history2.prevTime, history2.prevComposition);else return new HistoryState(history2.done, history2.undone.addTransform(tr, void 0, options, mustPreserveItems(state)), null, history2.prevTime, history2.prevComposition);
  } else if (tr.getMeta("addToHistory") !== false && !(appended && appended.getMeta("addToHistory") === false)) {
    let composition = tr.getMeta("composition");
    let newGroup = history2.prevTime == 0 || !appended && history2.prevComposition != composition && (history2.prevTime < (tr.time || 0) - options.newGroupDelay || !isAdjacentTo(tr, history2.prevRanges));
    let prevRanges = appended ? mapRanges(history2.prevRanges, tr.mapping) : rangesFor(tr.mapping.maps);
    return new HistoryState(history2.done.addTransform(tr, newGroup ? state.selection.getBookmark() : void 0, options, mustPreserveItems(state)), Branch.empty, prevRanges, tr.time, composition == null ? history2.prevComposition : composition);
  } else if (rebased = tr.getMeta("rebased")) {
    return new HistoryState(history2.done.rebased(tr, rebased), history2.undone.rebased(tr, rebased), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
  } else {
    return new HistoryState(history2.done.addMaps(tr.mapping.maps), history2.undone.addMaps(tr.mapping.maps), mapRanges(history2.prevRanges, tr.mapping), history2.prevTime, history2.prevComposition);
  }
}
function isAdjacentTo(transform, prevRanges) {
  if (!prevRanges) return false;
  if (!transform.docChanged) return true;
  let adjacent = false;
  transform.mapping.maps[0].forEach((start, end) => {
    for (let i = 0; i < prevRanges.length; i += 2) if (start <= prevRanges[i + 1] && end >= prevRanges[i]) adjacent = true;
  });
  return adjacent;
}
function rangesFor(maps) {
  let result = [];
  for (let i = maps.length - 1; i >= 0 && result.length == 0; i--) maps[i].forEach((_from, _to, from, to) => result.push(from, to));
  return result;
}
function mapRanges(ranges, mapping) {
  if (!ranges) return null;
  let result = [];
  for (let i = 0; i < ranges.length; i += 2) {
    let from = mapping.map(ranges[i], 1),
      to = mapping.map(ranges[i + 1], -1);
    if (from <= to) result.push(from, to);
  }
  return result;
}
function histTransaction(history2, state, redo2) {
  let preserveItems = mustPreserveItems(state);
  let histOptions = historyKey.get(state).spec.config;
  let pop = (redo2 ? history2.undone : history2.done).popEvent(state, preserveItems);
  if (!pop) return null;
  let selection = pop.selection.resolve(pop.transform.doc);
  let added = (redo2 ? history2.done : history2.undone).addTransform(pop.transform, state.selection.getBookmark(), histOptions, preserveItems);
  let newHist = new HistoryState(redo2 ? added : pop.remaining, redo2 ? pop.remaining : added, null, 0, -1);
  return pop.transform.setSelection(selection).setMeta(historyKey, {
    redo: redo2,
    historyState: newHist
  });
}
var cachedPreserveItems = false,
  cachedPreserveItemsPlugins = null;
function mustPreserveItems(state) {
  let plugins = state.plugins;
  if (cachedPreserveItemsPlugins != plugins) {
    cachedPreserveItems = false;
    cachedPreserveItemsPlugins = plugins;
    for (let i = 0; i < plugins.length; i++) if (plugins[i].spec.historyPreserveItems) {
      cachedPreserveItems = true;
      break;
    }
  }
  return cachedPreserveItems;
}
function closeHistory(tr) {
  return tr.setMeta(closeHistoryKey, true);
}
var historyKey = new import_prosemirror_state.PluginKey("history");
var closeHistoryKey = new import_prosemirror_state.PluginKey("closeHistory");
function history(config = {}) {
  config = {
    depth: config.depth || 100,
    newGroupDelay: config.newGroupDelay || 500
  };
  return new import_prosemirror_state.Plugin({
    key: historyKey,
    state: {
      init() {
        return new HistoryState(Branch.empty, Branch.empty, null, 0, -1);
      },
      apply(tr, hist, state) {
        return applyTransaction(hist, state, tr, config);
      }
    },
    config,
    props: {
      handleDOMEvents: {
        beforeinput(view, e) {
          let inputType = e.inputType;
          let command = inputType == "historyUndo" ? undo : inputType == "historyRedo" ? redo : null;
          if (!command) return false;
          e.preventDefault();
          return command(view.state, view.dispatch);
        }
      }
    }
  });
}
function buildCommand(redo2, scroll) {
  return (state, dispatch) => {
    let hist = historyKey.getState(state);
    if (!hist || (redo2 ? hist.undone : hist.done).eventCount == 0) return false;
    if (dispatch) {
      let tr = histTransaction(hist, state, redo2);
      if (tr) dispatch(scroll ? tr.scrollIntoView() : tr);
    }
    return true;
  };
}
var undo = buildCommand(false, true);
var redo = buildCommand(true, true);
var undoNoScroll = buildCommand(false, false);
var redoNoScroll = buildCommand(true, false);
function undoDepth(state) {
  let hist = historyKey.getState(state);
  return hist ? hist.done.eventCount : 0;
}
function redoDepth(state) {
  let hist = historyKey.getState(state);
  return hist ? hist.undone.eventCount : 0;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWhpc3RvcnkuMS40LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItaGlzdG9yeS9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX2hpc3RvcnlfMV80XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY2xvc2VIaXN0b3J5IiwiaGlzdG9yeSIsInJlZG8iLCJyZWRvRGVwdGgiLCJyZWRvTm9TY3JvbGwiLCJ1bmRvIiwidW5kb0RlcHRoIiwidW5kb05vU2Nyb2xsIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yb3BlX3NlcXVlbmNlIiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfdHJhbnNmb3JtIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwibWF4X2VtcHR5X2l0ZW1zIiwiQnJhbmNoIiwiX0JyYW5jaCIsImNvbnN0cnVjdG9yIiwiaXRlbXMiLCJldmVudENvdW50IiwicG9wRXZlbnQiLCJzdGF0ZSIsInByZXNlcnZlSXRlbXMiLCJlbmQiLCJsZW5ndGgiLCJuZXh0IiwiZ2V0Iiwic2VsZWN0aW9uIiwicmVtYXAiLCJtYXBGcm9tIiwicmVtYXBwaW5nIiwibWFwcyIsInRyYW5zZm9ybSIsInRyIiwicmVtYWluaW5nIiwiYWRkQWZ0ZXIiLCJhZGRCZWZvcmUiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJzdGVwIiwicHVzaCIsIkl0ZW0iLCJtYXAiLCJzbGljZSIsIm1heWJlU3RlcCIsImRvYyIsIm1hcHBpbmciLCJhcHBlbmRNYXAiLCJhcHBlbmQiLCJyZXZlcnNlIiwiY29uY2F0IiwiYWRkVHJhbnNmb3JtIiwiaGlzdE9wdGlvbnMiLCJuZXdJdGVtcyIsIm9sZEl0ZW1zIiwibGFzdEl0ZW0iLCJzdGVwcyIsImludmVydCIsImRvY3MiLCJtZXJnZWQiLCJtZXJnZSIsInBvcCIsIm92ZXJmbG93IiwiZGVwdGgiLCJERVBUSF9PVkVSRkxPVyIsImN1dE9mZkV2ZW50cyIsImZyb20iLCJ0byIsIk1hcHBpbmciLCJtaXJyb3JQb3MiLCJtaXJyb3JPZmZzZXQiLCJhZGRNYXBzIiwiYXJyYXkiLCJyZWJhc2VkIiwicmViYXNlZFRyYW5zZm9ybSIsInJlYmFzZWRDb3VudCIsInJlYmFzZWRJdGVtcyIsInN0YXJ0IiwiTWF0aCIsIm1heCIsIm5ld1VudGlsIiwiaVJlYmFzZWQiLCJwb3MiLCJnZXRNaXJyb3IiLCJtaW4iLCJuZXdNYXBzIiwiYnJhbmNoIiwiZW1wdHlJdGVtQ291bnQiLCJjb21wcmVzcyIsImNvdW50IiwidXB0byIsImV2ZW50cyIsImdldE1hcCIsIm5ld0l0ZW0iLCJsYXN0IiwiZGVmYXVsdCIsImVtcHR5IiwibiIsImN1dFBvaW50IiwiX0l0ZW0iLCJvdGhlciIsIkhpc3RvcnlTdGF0ZSIsImRvbmUiLCJ1bmRvbmUiLCJwcmV2UmFuZ2VzIiwicHJldlRpbWUiLCJwcmV2Q29tcG9zaXRpb24iLCJhcHBseVRyYW5zYWN0aW9uIiwiaGlzdG9yeTIiLCJvcHRpb25zIiwiaGlzdG9yeVRyIiwiZ2V0TWV0YSIsImhpc3RvcnlLZXkiLCJoaXN0b3J5U3RhdGUiLCJjbG9zZUhpc3RvcnlLZXkiLCJhcHBlbmRlZCIsIm11c3RQcmVzZXJ2ZUl0ZW1zIiwicmFuZ2VzRm9yIiwiY29tcG9zaXRpb24iLCJuZXdHcm91cCIsInRpbWUiLCJuZXdHcm91cERlbGF5IiwiaXNBZGphY2VudFRvIiwibWFwUmFuZ2VzIiwiZ2V0Qm9va21hcmsiLCJkb2NDaGFuZ2VkIiwiYWRqYWNlbnQiLCJyZXN1bHQiLCJfZnJvbSIsIl90byIsInJhbmdlcyIsImhpc3RUcmFuc2FjdGlvbiIsInJlZG8yIiwic3BlYyIsImNvbmZpZyIsInJlc29sdmUiLCJhZGRlZCIsIm5ld0hpc3QiLCJzZXRTZWxlY3Rpb24iLCJzZXRNZXRhIiwiY2FjaGVkUHJlc2VydmVJdGVtcyIsImNhY2hlZFByZXNlcnZlSXRlbXNQbHVnaW5zIiwicGx1Z2lucyIsImhpc3RvcnlQcmVzZXJ2ZUl0ZW1zIiwiUGx1Z2luS2V5IiwiUGx1Z2luIiwia2V5IiwiaW5pdCIsImFwcGx5IiwiaGlzdCIsInByb3BzIiwiaGFuZGxlRE9NRXZlbnRzIiwiYmVmb3JlaW5wdXQiLCJ2aWV3IiwiZSIsImlucHV0VHlwZSIsImNvbW1hbmQiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIiwiYnVpbGRDb21tYW5kIiwic2Nyb2xsIiwiZ2V0U3RhdGUiLCJzY3JvbGxJbnRvVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxpQ0FBQTtBQUFBQyxRQUFBLENBQUFELGlDQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFaLGlDQUFBOzs7QUNBQSxJQUFBYSxvQkFBQSxHQUF5QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3pCLElBQUFDLDRCQUFBLEdBQXdCRCxPQUFBO0FBQ3hCLElBQUFFLHdCQUFBLEdBQWtDRixPQUFBO0FBa0JsQyxJQUFNRyxlQUFBLEdBQWtCO0FBQ3hCLElBQU1DLE1BQUEsR0FBTixNQUFNQyxPQUFBLENBQU87RUFDVEMsWUFBWUMsS0FBQSxFQUFPQyxVQUFBLEVBQVk7SUFDM0IsS0FBS0QsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS0MsVUFBQSxHQUFhQSxVQUFBO0VBQ3RCO0VBQUE7RUFBQTtFQUdBQyxTQUFTQyxLQUFBLEVBQU9DLGFBQUEsRUFBZTtJQUMzQixJQUFJLEtBQUtILFVBQUEsSUFBYyxHQUNuQixPQUFPO0lBQ1gsSUFBSUksR0FBQSxHQUFNLEtBQUtMLEtBQUEsQ0FBTU0sTUFBQTtJQUNyQixRQUFRRCxHQUFBLElBQU87TUFDWCxJQUFJRSxJQUFBLEdBQU8sS0FBS1AsS0FBQSxDQUFNUSxHQUFBLENBQUlILEdBQUEsR0FBTSxDQUFDO01BQ2pDLElBQUlFLElBQUEsQ0FBS0UsU0FBQSxFQUFXO1FBQ2hCLEVBQUVKLEdBQUE7UUFDRjtNQUNKO0lBQ0o7SUFDQSxJQUFJSyxLQUFBLEVBQU9DLE9BQUE7SUFDWCxJQUFJUCxhQUFBLEVBQWU7TUFDZk0sS0FBQSxHQUFRLEtBQUtFLFNBQUEsQ0FBVVAsR0FBQSxFQUFLLEtBQUtMLEtBQUEsQ0FBTU0sTUFBTTtNQUM3Q0ssT0FBQSxHQUFVRCxLQUFBLENBQU1HLElBQUEsQ0FBS1AsTUFBQTtJQUN6QjtJQUNBLElBQUlRLFNBQUEsR0FBWVgsS0FBQSxDQUFNWSxFQUFBO0lBQ3RCLElBQUlOLFNBQUEsRUFBV08sU0FBQTtJQUNmLElBQUlDLFFBQUEsR0FBVyxFQUFDO01BQUdDLFNBQUEsR0FBWSxFQUFDO0lBQ2hDLEtBQUtsQixLQUFBLENBQU1tQixPQUFBLENBQVEsQ0FBQ0MsSUFBQSxFQUFNQyxDQUFBLEtBQU07TUFDNUIsSUFBSSxDQUFDRCxJQUFBLENBQUtFLElBQUEsRUFBTTtRQUNaLElBQUksQ0FBQ1osS0FBQSxFQUFPO1VBQ1JBLEtBQUEsR0FBUSxLQUFLRSxTQUFBLENBQVVQLEdBQUEsRUFBS2dCLENBQUEsR0FBSSxDQUFDO1VBQ2pDVixPQUFBLEdBQVVELEtBQUEsQ0FBTUcsSUFBQSxDQUFLUCxNQUFBO1FBQ3pCO1FBQ0FLLE9BQUE7UUFDQU8sU0FBQSxDQUFVSyxJQUFBLENBQUtILElBQUk7UUFDbkI7TUFDSjtNQUNBLElBQUlWLEtBQUEsRUFBTztRQUNQUSxTQUFBLENBQVVLLElBQUEsQ0FBSyxJQUFJQyxJQUFBLENBQUtKLElBQUEsQ0FBS0ssR0FBRyxDQUFDO1FBQ2pDLElBQUlILElBQUEsR0FBT0YsSUFBQSxDQUFLRSxJQUFBLENBQUtHLEdBQUEsQ0FBSWYsS0FBQSxDQUFNZ0IsS0FBQSxDQUFNZixPQUFPLENBQUM7VUFBR2MsR0FBQTtRQUNoRCxJQUFJSCxJQUFBLElBQVFSLFNBQUEsQ0FBVWEsU0FBQSxDQUFVTCxJQUFJLEVBQUVNLEdBQUEsRUFBSztVQUN2Q0gsR0FBQSxHQUFNWCxTQUFBLENBQVVlLE9BQUEsQ0FBUWhCLElBQUEsQ0FBS0MsU0FBQSxDQUFVZSxPQUFBLENBQVFoQixJQUFBLENBQUtQLE1BQUEsR0FBUyxDQUFDO1VBQzlEVyxRQUFBLENBQVNNLElBQUEsQ0FBSyxJQUFJQyxJQUFBLENBQUtDLEdBQUEsRUFBSyxRQUFXLFFBQVdSLFFBQUEsQ0FBU1gsTUFBQSxHQUFTWSxTQUFBLENBQVVaLE1BQU0sQ0FBQztRQUN6RjtRQUNBSyxPQUFBO1FBQ0EsSUFBSWMsR0FBQSxFQUNBZixLQUFBLENBQU1vQixTQUFBLENBQVVMLEdBQUEsRUFBS2QsT0FBTztNQUNwQyxPQUNLO1FBQ0RHLFNBQUEsQ0FBVWEsU0FBQSxDQUFVUCxJQUFBLENBQUtFLElBQUk7TUFDakM7TUFDQSxJQUFJRixJQUFBLENBQUtYLFNBQUEsRUFBVztRQUNoQkEsU0FBQSxHQUFZQyxLQUFBLEdBQVFVLElBQUEsQ0FBS1gsU0FBQSxDQUFVZ0IsR0FBQSxDQUFJZixLQUFBLENBQU1nQixLQUFBLENBQU1mLE9BQU8sQ0FBQyxJQUFJUyxJQUFBLENBQUtYLFNBQUE7UUFDcEVPLFNBQUEsR0FBWSxJQUFJbEIsT0FBQSxDQUFPLEtBQUtFLEtBQUEsQ0FBTTBCLEtBQUEsQ0FBTSxHQUFHckIsR0FBRyxFQUFFMEIsTUFBQSxDQUFPYixTQUFBLENBQVVjLE9BQUEsQ0FBUSxFQUFFQyxNQUFBLENBQU9oQixRQUFRLENBQUMsR0FBRyxLQUFLaEIsVUFBQSxHQUFhLENBQUM7UUFDakgsT0FBTztNQUNYO0lBQ0osR0FBRyxLQUFLRCxLQUFBLENBQU1NLE1BQUEsRUFBUSxDQUFDO0lBQ3ZCLE9BQU87TUFBRVUsU0FBQTtNQUFzQkYsU0FBQTtNQUFXTDtJQUFxQjtFQUNuRTtFQUFBO0VBRUF5QixhQUFhcEIsU0FBQSxFQUFXTCxTQUFBLEVBQVcwQixXQUFBLEVBQWEvQixhQUFBLEVBQWU7SUFDM0QsSUFBSWdDLFFBQUEsR0FBVyxFQUFDO01BQUduQyxVQUFBLEdBQWEsS0FBS0EsVUFBQTtJQUNyQyxJQUFJb0MsUUFBQSxHQUFXLEtBQUtyQyxLQUFBO01BQU9zQyxRQUFBLEdBQVcsQ0FBQ2xDLGFBQUEsSUFBaUJpQyxRQUFBLENBQVMvQixNQUFBLEdBQVMrQixRQUFBLENBQVM3QixHQUFBLENBQUk2QixRQUFBLENBQVMvQixNQUFBLEdBQVMsQ0FBQyxJQUFJO0lBQzlHLFNBQVNlLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlQLFNBQUEsQ0FBVXlCLEtBQUEsQ0FBTWpDLE1BQUEsRUFBUWUsQ0FBQSxJQUFLO01BQzdDLElBQUlDLElBQUEsR0FBT1IsU0FBQSxDQUFVeUIsS0FBQSxDQUFNbEIsQ0FBQyxFQUFFbUIsTUFBQSxDQUFPMUIsU0FBQSxDQUFVMkIsSUFBQSxDQUFLcEIsQ0FBQyxDQUFDO01BQ3RELElBQUlELElBQUEsR0FBTyxJQUFJSSxJQUFBLENBQUtWLFNBQUEsQ0FBVWUsT0FBQSxDQUFRaEIsSUFBQSxDQUFLUSxDQUFDLEdBQUdDLElBQUEsRUFBTWIsU0FBUztRQUFHaUMsTUFBQTtNQUNqRSxJQUFJQSxNQUFBLEdBQVNKLFFBQUEsSUFBWUEsUUFBQSxDQUFTSyxLQUFBLENBQU12QixJQUFJLEdBQUc7UUFDM0NBLElBQUEsR0FBT3NCLE1BQUE7UUFDUCxJQUFJckIsQ0FBQSxFQUNBZSxRQUFBLENBQVNRLEdBQUEsQ0FBSSxPQUViUCxRQUFBLEdBQVdBLFFBQUEsQ0FBU1gsS0FBQSxDQUFNLEdBQUdXLFFBQUEsQ0FBUy9CLE1BQUEsR0FBUyxDQUFDO01BQ3hEO01BQ0E4QixRQUFBLENBQVNiLElBQUEsQ0FBS0gsSUFBSTtNQUNsQixJQUFJWCxTQUFBLEVBQVc7UUFDWFIsVUFBQTtRQUNBUSxTQUFBLEdBQVk7TUFDaEI7TUFDQSxJQUFJLENBQUNMLGFBQUEsRUFDRGtDLFFBQUEsR0FBV2xCLElBQUE7SUFDbkI7SUFDQSxJQUFJeUIsUUFBQSxHQUFXNUMsVUFBQSxHQUFha0MsV0FBQSxDQUFZVyxLQUFBO0lBQ3hDLElBQUlELFFBQUEsR0FBV0UsY0FBQSxFQUFnQjtNQUMzQlYsUUFBQSxHQUFXVyxZQUFBLENBQWFYLFFBQUEsRUFBVVEsUUFBUTtNQUMxQzVDLFVBQUEsSUFBYzRDLFFBQUE7SUFDbEI7SUFDQSxPQUFPLElBQUkvQyxPQUFBLENBQU91QyxRQUFBLENBQVNOLE1BQUEsQ0FBT0ssUUFBUSxHQUFHbkMsVUFBVTtFQUMzRDtFQUNBVyxVQUFVcUMsSUFBQSxFQUFNQyxFQUFBLEVBQUk7SUFDaEIsSUFBSXJDLElBQUEsR0FBTyxJQUFJbkIsNEJBQUEsQ0FBQXlELE9BQUE7SUFDZixLQUFLbkQsS0FBQSxDQUFNbUIsT0FBQSxDQUFRLENBQUNDLElBQUEsRUFBTUMsQ0FBQSxLQUFNO01BQzVCLElBQUkrQixTQUFBLEdBQVloQyxJQUFBLENBQUtpQyxZQUFBLElBQWdCLFFBQVFoQyxDQUFBLEdBQUlELElBQUEsQ0FBS2lDLFlBQUEsSUFBZ0JKLElBQUEsR0FDaEVwQyxJQUFBLENBQUtBLElBQUEsQ0FBS1AsTUFBQSxHQUFTYyxJQUFBLENBQUtpQyxZQUFBLEdBQWU7TUFDN0N4QyxJQUFBLENBQUtpQixTQUFBLENBQVVWLElBQUEsQ0FBS0ssR0FBQSxFQUFLMkIsU0FBUztJQUN0QyxHQUFHSCxJQUFBLEVBQU1DLEVBQUU7SUFDWCxPQUFPckMsSUFBQTtFQUNYO0VBQ0F5QyxRQUFRQyxLQUFBLEVBQU87SUFDWCxJQUFJLEtBQUt0RCxVQUFBLElBQWMsR0FDbkIsT0FBTztJQUNYLE9BQU8sSUFBSUgsT0FBQSxDQUFPLEtBQUtFLEtBQUEsQ0FBTStCLE1BQUEsQ0FBT3dCLEtBQUEsQ0FBTTlCLEdBQUEsQ0FBSUEsR0FBQSxJQUFPLElBQUlELElBQUEsQ0FBS0MsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLeEIsVUFBVTtFQUN6RjtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBS0F1RCxRQUFRQyxnQkFBQSxFQUFrQkMsWUFBQSxFQUFjO0lBQ3BDLElBQUksQ0FBQyxLQUFLekQsVUFBQSxFQUNOLE9BQU87SUFDWCxJQUFJMEQsWUFBQSxHQUFlLEVBQUM7TUFBR0MsS0FBQSxHQUFRQyxJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHLEtBQUs5RCxLQUFBLENBQU1NLE1BQUEsR0FBU29ELFlBQVk7SUFDM0UsSUFBSTdCLE9BQUEsR0FBVTRCLGdCQUFBLENBQWlCNUIsT0FBQTtJQUMvQixJQUFJa0MsUUFBQSxHQUFXTixnQkFBQSxDQUFpQmxCLEtBQUEsQ0FBTWpDLE1BQUE7SUFDdEMsSUFBSUwsVUFBQSxHQUFhLEtBQUtBLFVBQUE7SUFDdEIsS0FBS0QsS0FBQSxDQUFNbUIsT0FBQSxDQUFRQyxJQUFBLElBQVE7TUFBRSxJQUFJQSxJQUFBLENBQUtYLFNBQUEsRUFDbENSLFVBQUE7SUFBYyxHQUFHMkQsS0FBSztJQUMxQixJQUFJSSxRQUFBLEdBQVdOLFlBQUE7SUFDZixLQUFLMUQsS0FBQSxDQUFNbUIsT0FBQSxDQUFRQyxJQUFBLElBQVE7TUFDdkIsSUFBSTZDLEdBQUEsR0FBTXBDLE9BQUEsQ0FBUXFDLFNBQUEsQ0FBVSxFQUFFRixRQUFRO01BQ3RDLElBQUlDLEdBQUEsSUFBTyxNQUNQO01BQ0pGLFFBQUEsR0FBV0YsSUFBQSxDQUFLTSxHQUFBLENBQUlKLFFBQUEsRUFBVUUsR0FBRztNQUNqQyxJQUFJeEMsR0FBQSxHQUFNSSxPQUFBLENBQVFoQixJQUFBLENBQUtvRCxHQUFHO01BQzFCLElBQUk3QyxJQUFBLENBQUtFLElBQUEsRUFBTTtRQUNYLElBQUlBLElBQUEsR0FBT21DLGdCQUFBLENBQWlCbEIsS0FBQSxDQUFNMEIsR0FBRyxFQUFFekIsTUFBQSxDQUFPaUIsZ0JBQUEsQ0FBaUJoQixJQUFBLENBQUt3QixHQUFHLENBQUM7UUFDeEUsSUFBSXhELFNBQUEsR0FBWVcsSUFBQSxDQUFLWCxTQUFBLElBQWFXLElBQUEsQ0FBS1gsU0FBQSxDQUFVZ0IsR0FBQSxDQUFJSSxPQUFBLENBQVFILEtBQUEsQ0FBTXNDLFFBQUEsR0FBVyxHQUFHQyxHQUFHLENBQUM7UUFDckYsSUFBSXhELFNBQUEsRUFDQVIsVUFBQTtRQUNKMEQsWUFBQSxDQUFhcEMsSUFBQSxDQUFLLElBQUlDLElBQUEsQ0FBS0MsR0FBQSxFQUFLSCxJQUFBLEVBQU1iLFNBQVMsQ0FBQztNQUNwRCxPQUNLO1FBQ0RrRCxZQUFBLENBQWFwQyxJQUFBLENBQUssSUFBSUMsSUFBQSxDQUFLQyxHQUFHLENBQUM7TUFDbkM7SUFDSixHQUFHbUMsS0FBSztJQUNSLElBQUlRLE9BQUEsR0FBVSxFQUFDO0lBQ2YsU0FBUy9DLENBQUEsR0FBSXFDLFlBQUEsRUFBY3JDLENBQUEsR0FBSTBDLFFBQUEsRUFBVTFDLENBQUEsSUFDckMrQyxPQUFBLENBQVE3QyxJQUFBLENBQUssSUFBSUMsSUFBQSxDQUFLSyxPQUFBLENBQVFoQixJQUFBLENBQUtRLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQUlyQixLQUFBLEdBQVEsS0FBS0EsS0FBQSxDQUFNMEIsS0FBQSxDQUFNLEdBQUdrQyxLQUFLLEVBQUU3QixNQUFBLENBQU9xQyxPQUFPLEVBQUVyQyxNQUFBLENBQU80QixZQUFZO0lBQzFFLElBQUlVLE1BQUEsR0FBUyxJQUFJdkUsT0FBQSxDQUFPRSxLQUFBLEVBQU9DLFVBQVU7SUFDekMsSUFBSW9FLE1BQUEsQ0FBT0MsY0FBQSxDQUFlLElBQUkxRSxlQUFBLEVBQzFCeUUsTUFBQSxHQUFTQSxNQUFBLENBQU9FLFFBQUEsQ0FBUyxLQUFLdkUsS0FBQSxDQUFNTSxNQUFBLEdBQVNxRCxZQUFBLENBQWFyRCxNQUFNO0lBQ3BFLE9BQU8rRCxNQUFBO0VBQ1g7RUFDQUMsZUFBQSxFQUFpQjtJQUNiLElBQUlFLEtBQUEsR0FBUTtJQUNaLEtBQUt4RSxLQUFBLENBQU1tQixPQUFBLENBQVFDLElBQUEsSUFBUTtNQUFFLElBQUksQ0FBQ0EsSUFBQSxDQUFLRSxJQUFBLEVBQ25Da0QsS0FBQTtJQUFTLENBQUM7SUFDZCxPQUFPQSxLQUFBO0VBQ1g7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFPQUQsU0FBU0UsSUFBQSxHQUFPLEtBQUt6RSxLQUFBLENBQU1NLE1BQUEsRUFBUTtJQUMvQixJQUFJSSxLQUFBLEdBQVEsS0FBS0UsU0FBQSxDQUFVLEdBQUc2RCxJQUFJO01BQUc5RCxPQUFBLEdBQVVELEtBQUEsQ0FBTUcsSUFBQSxDQUFLUCxNQUFBO0lBQzFELElBQUlOLEtBQUEsR0FBUSxFQUFDO01BQUcwRSxNQUFBLEdBQVM7SUFDekIsS0FBSzFFLEtBQUEsQ0FBTW1CLE9BQUEsQ0FBUSxDQUFDQyxJQUFBLEVBQU1DLENBQUEsS0FBTTtNQUM1QixJQUFJQSxDQUFBLElBQUtvRCxJQUFBLEVBQU07UUFDWHpFLEtBQUEsQ0FBTXVCLElBQUEsQ0FBS0gsSUFBSTtRQUNmLElBQUlBLElBQUEsQ0FBS1gsU0FBQSxFQUNMaUUsTUFBQTtNQUNSLFdBQ1N0RCxJQUFBLENBQUtFLElBQUEsRUFBTTtRQUNoQixJQUFJQSxJQUFBLEdBQU9GLElBQUEsQ0FBS0UsSUFBQSxDQUFLRyxHQUFBLENBQUlmLEtBQUEsQ0FBTWdCLEtBQUEsQ0FBTWYsT0FBTyxDQUFDO1VBQUdjLEdBQUEsR0FBTUgsSUFBQSxJQUFRQSxJQUFBLENBQUtxRCxNQUFBLENBQU87UUFDMUVoRSxPQUFBO1FBQ0EsSUFBSWMsR0FBQSxFQUNBZixLQUFBLENBQU1vQixTQUFBLENBQVVMLEdBQUEsRUFBS2QsT0FBTztRQUNoQyxJQUFJVyxJQUFBLEVBQU07VUFDTixJQUFJYixTQUFBLEdBQVlXLElBQUEsQ0FBS1gsU0FBQSxJQUFhVyxJQUFBLENBQUtYLFNBQUEsQ0FBVWdCLEdBQUEsQ0FBSWYsS0FBQSxDQUFNZ0IsS0FBQSxDQUFNZixPQUFPLENBQUM7VUFDekUsSUFBSUYsU0FBQSxFQUNBaUUsTUFBQTtVQUNKLElBQUlFLE9BQUEsR0FBVSxJQUFJcEQsSUFBQSxDQUFLQyxHQUFBLENBQUllLE1BQUEsQ0FBTyxHQUFHbEIsSUFBQSxFQUFNYixTQUFTO1lBQUdpQyxNQUFBO1lBQVFtQyxJQUFBLEdBQU83RSxLQUFBLENBQU1NLE1BQUEsR0FBUztVQUNyRixJQUFJb0MsTUFBQSxHQUFTMUMsS0FBQSxDQUFNTSxNQUFBLElBQVVOLEtBQUEsQ0FBTTZFLElBQUksRUFBRWxDLEtBQUEsQ0FBTWlDLE9BQU8sR0FDbEQ1RSxLQUFBLENBQU02RSxJQUFJLElBQUluQyxNQUFBLE1BRWQxQyxLQUFBLENBQU11QixJQUFBLENBQUtxRCxPQUFPO1FBQzFCO01BQ0osV0FDU3hELElBQUEsQ0FBS0ssR0FBQSxFQUFLO1FBQ2ZkLE9BQUE7TUFDSjtJQUNKLEdBQUcsS0FBS1gsS0FBQSxDQUFNTSxNQUFBLEVBQVEsQ0FBQztJQUN2QixPQUFPLElBQUlSLE9BQUEsQ0FBT1Asb0JBQUEsQ0FBQXVGLE9BQUEsQ0FBYTdCLElBQUEsQ0FBS2pELEtBQUEsQ0FBTWdDLE9BQUEsQ0FBUSxDQUFDLEdBQUcwQyxNQUFNO0VBQ2hFO0FBQ0o7QUFDQTdFLE1BQUEsQ0FBT2tGLEtBQUEsR0FBUSxJQUFJbEYsTUFBQSxDQUFPTixvQkFBQSxDQUFBdUYsT0FBQSxDQUFhQyxLQUFBLEVBQU8sQ0FBQztBQUMvQyxTQUFTL0IsYUFBYWhELEtBQUEsRUFBT2dGLENBQUEsRUFBRztFQUM1QixJQUFJQyxRQUFBO0VBQ0pqRixLQUFBLENBQU1tQixPQUFBLENBQVEsQ0FBQ0MsSUFBQSxFQUFNQyxDQUFBLEtBQU07SUFDdkIsSUFBSUQsSUFBQSxDQUFLWCxTQUFBLElBQWN1RSxDQUFBLE1BQU8sR0FBSTtNQUM5QkMsUUFBQSxHQUFXNUQsQ0FBQTtNQUNYLE9BQU87SUFDWDtFQUNKLENBQUM7RUFDRCxPQUFPckIsS0FBQSxDQUFNMEIsS0FBQSxDQUFNdUQsUUFBUTtBQUMvQjtBQUNBLElBQU16RCxJQUFBLEdBQU4sTUFBTTBELEtBQUEsQ0FBSztFQUNQbkYsWUFFQTBCLEdBQUEsRUFFQUgsSUFBQSxFQUlBYixTQUFBLEVBR0E0QyxZQUFBLEVBQWM7SUFDVixLQUFLNUIsR0FBQSxHQUFNQSxHQUFBO0lBQ1gsS0FBS0gsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS2IsU0FBQSxHQUFZQSxTQUFBO0lBQ2pCLEtBQUs0QyxZQUFBLEdBQWVBLFlBQUE7RUFDeEI7RUFDQVYsTUFBTXdDLEtBQUEsRUFBTztJQUNULElBQUksS0FBSzdELElBQUEsSUFBUTZELEtBQUEsQ0FBTTdELElBQUEsSUFBUSxDQUFDNkQsS0FBQSxDQUFNMUUsU0FBQSxFQUFXO01BQzdDLElBQUlhLElBQUEsR0FBTzZELEtBQUEsQ0FBTTdELElBQUEsQ0FBS3FCLEtBQUEsQ0FBTSxLQUFLckIsSUFBSTtNQUNyQyxJQUFJQSxJQUFBLEVBQ0EsT0FBTyxJQUFJNEQsS0FBQSxDQUFLNUQsSUFBQSxDQUFLcUQsTUFBQSxDQUFPLEVBQUVuQyxNQUFBLENBQU8sR0FBR2xCLElBQUEsRUFBTSxLQUFLYixTQUFTO0lBQ3BFO0VBQ0o7QUFDSjtBQUlBLElBQU0yRSxZQUFBLEdBQU4sTUFBbUI7RUFDZnJGLFlBQVlzRixJQUFBLEVBQU1DLE1BQUEsRUFBUUMsVUFBQSxFQUFZQyxRQUFBLEVBQVVDLGVBQUEsRUFBaUI7SUFDN0QsS0FBS0osSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS0MsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0MsVUFBQSxHQUFhQSxVQUFBO0lBQ2xCLEtBQUtDLFFBQUEsR0FBV0EsUUFBQTtJQUNoQixLQUFLQyxlQUFBLEdBQWtCQSxlQUFBO0VBQzNCO0FBQ0o7QUFDQSxJQUFNMUMsY0FBQSxHQUFpQjtBQUV2QixTQUFTMkMsaUJBQWlCQyxRQUFBLEVBQVN4RixLQUFBLEVBQU9ZLEVBQUEsRUFBSTZFLE9BQUEsRUFBUztFQUNuRCxJQUFJQyxTQUFBLEdBQVk5RSxFQUFBLENBQUcrRSxPQUFBLENBQVFDLFVBQVU7SUFBR3ZDLE9BQUE7RUFDeEMsSUFBSXFDLFNBQUEsRUFDQSxPQUFPQSxTQUFBLENBQVVHLFlBQUE7RUFDckIsSUFBSWpGLEVBQUEsQ0FBRytFLE9BQUEsQ0FBUUcsZUFBZSxHQUMxQk4sUUFBQSxHQUFVLElBQUlQLFlBQUEsQ0FBYU8sUUFBQSxDQUFRTixJQUFBLEVBQU1NLFFBQUEsQ0FBUUwsTUFBQSxFQUFRLE1BQU0sR0FBRyxFQUFFO0VBQ3hFLElBQUlZLFFBQUEsR0FBV25GLEVBQUEsQ0FBRytFLE9BQUEsQ0FBUSxxQkFBcUI7RUFDL0MsSUFBSS9FLEVBQUEsQ0FBR3dCLEtBQUEsQ0FBTWpDLE1BQUEsSUFBVSxHQUFHO0lBQ3RCLE9BQU9xRixRQUFBO0VBQ1gsV0FDU08sUUFBQSxJQUFZQSxRQUFBLENBQVNKLE9BQUEsQ0FBUUMsVUFBVSxHQUFHO0lBQy9DLElBQUlHLFFBQUEsQ0FBU0osT0FBQSxDQUFRQyxVQUFVLEVBQUVqSCxJQUFBLEVBQzdCLE9BQU8sSUFBSXNHLFlBQUEsQ0FBYU8sUUFBQSxDQUFRTixJQUFBLENBQUtuRCxZQUFBLENBQWFuQixFQUFBLEVBQUksUUFBVzZFLE9BQUEsRUFBU08saUJBQUEsQ0FBa0JoRyxLQUFLLENBQUMsR0FBR3dGLFFBQUEsQ0FBUUwsTUFBQSxFQUFRYyxTQUFBLENBQVVyRixFQUFBLENBQUdjLE9BQUEsQ0FBUWhCLElBQUksR0FBRzhFLFFBQUEsQ0FBUUgsUUFBQSxFQUFVRyxRQUFBLENBQVFGLGVBQWUsT0FFMUwsT0FBTyxJQUFJTCxZQUFBLENBQWFPLFFBQUEsQ0FBUU4sSUFBQSxFQUFNTSxRQUFBLENBQVFMLE1BQUEsQ0FBT3BELFlBQUEsQ0FBYW5CLEVBQUEsRUFBSSxRQUFXNkUsT0FBQSxFQUFTTyxpQkFBQSxDQUFrQmhHLEtBQUssQ0FBQyxHQUFHLE1BQU13RixRQUFBLENBQVFILFFBQUEsRUFBVUcsUUFBQSxDQUFRRixlQUFlO0VBQzVLLFdBQ1MxRSxFQUFBLENBQUcrRSxPQUFBLENBQVEsY0FBYyxNQUFNLFNBQVMsRUFBRUksUUFBQSxJQUFZQSxRQUFBLENBQVNKLE9BQUEsQ0FBUSxjQUFjLE1BQU0sUUFBUTtJQUV4RyxJQUFJTyxXQUFBLEdBQWN0RixFQUFBLENBQUcrRSxPQUFBLENBQVEsYUFBYTtJQUMxQyxJQUFJUSxRQUFBLEdBQVdYLFFBQUEsQ0FBUUgsUUFBQSxJQUFZLEtBQzlCLENBQUNVLFFBQUEsSUFBWVAsUUFBQSxDQUFRRixlQUFBLElBQW1CWSxXQUFBLEtBQ3BDVixRQUFBLENBQVFILFFBQUEsSUFBWXpFLEVBQUEsQ0FBR3dGLElBQUEsSUFBUSxLQUFLWCxPQUFBLENBQVFZLGFBQUEsSUFBaUIsQ0FBQ0MsWUFBQSxDQUFhMUYsRUFBQSxFQUFJNEUsUUFBQSxDQUFRSixVQUFVO0lBQzFHLElBQUlBLFVBQUEsR0FBYVcsUUFBQSxHQUFXUSxTQUFBLENBQVVmLFFBQUEsQ0FBUUosVUFBQSxFQUFZeEUsRUFBQSxDQUFHYyxPQUFPLElBQUl1RSxTQUFBLENBQVVyRixFQUFBLENBQUdjLE9BQUEsQ0FBUWhCLElBQUk7SUFDakcsT0FBTyxJQUFJdUUsWUFBQSxDQUFhTyxRQUFBLENBQVFOLElBQUEsQ0FBS25ELFlBQUEsQ0FBYW5CLEVBQUEsRUFBSXVGLFFBQUEsR0FBV25HLEtBQUEsQ0FBTU0sU0FBQSxDQUFVa0csV0FBQSxDQUFZLElBQUksUUFBV2YsT0FBQSxFQUFTTyxpQkFBQSxDQUFrQmhHLEtBQUssQ0FBQyxHQUFHTixNQUFBLENBQU9rRixLQUFBLEVBQU9RLFVBQUEsRUFBWXhFLEVBQUEsQ0FBR3dGLElBQUEsRUFBTUYsV0FBQSxJQUFlLE9BQU9WLFFBQUEsQ0FBUUYsZUFBQSxHQUFrQlksV0FBVztFQUNsUCxXQUNTN0MsT0FBQSxHQUFVekMsRUFBQSxDQUFHK0UsT0FBQSxDQUFRLFNBQVMsR0FBRztJQUd0QyxPQUFPLElBQUlWLFlBQUEsQ0FBYU8sUUFBQSxDQUFRTixJQUFBLENBQUs3QixPQUFBLENBQVF6QyxFQUFBLEVBQUl5QyxPQUFPLEdBQUdtQyxRQUFBLENBQVFMLE1BQUEsQ0FBTzlCLE9BQUEsQ0FBUXpDLEVBQUEsRUFBSXlDLE9BQU8sR0FBR2tELFNBQUEsQ0FBVWYsUUFBQSxDQUFRSixVQUFBLEVBQVl4RSxFQUFBLENBQUdjLE9BQU8sR0FBRzhELFFBQUEsQ0FBUUgsUUFBQSxFQUFVRyxRQUFBLENBQVFGLGVBQWU7RUFDeEwsT0FDSztJQUNELE9BQU8sSUFBSUwsWUFBQSxDQUFhTyxRQUFBLENBQVFOLElBQUEsQ0FBSy9CLE9BQUEsQ0FBUXZDLEVBQUEsQ0FBR2MsT0FBQSxDQUFRaEIsSUFBSSxHQUFHOEUsUUFBQSxDQUFRTCxNQUFBLENBQU9oQyxPQUFBLENBQVF2QyxFQUFBLENBQUdjLE9BQUEsQ0FBUWhCLElBQUksR0FBRzZGLFNBQUEsQ0FBVWYsUUFBQSxDQUFRSixVQUFBLEVBQVl4RSxFQUFBLENBQUdjLE9BQU8sR0FBRzhELFFBQUEsQ0FBUUgsUUFBQSxFQUFVRyxRQUFBLENBQVFGLGVBQWU7RUFDaE07QUFDSjtBQUNBLFNBQVNnQixhQUFhM0YsU0FBQSxFQUFXeUUsVUFBQSxFQUFZO0VBQ3pDLElBQUksQ0FBQ0EsVUFBQSxFQUNELE9BQU87RUFDWCxJQUFJLENBQUN6RSxTQUFBLENBQVU4RixVQUFBLEVBQ1gsT0FBTztFQUNYLElBQUlDLFFBQUEsR0FBVztFQUNmL0YsU0FBQSxDQUFVZSxPQUFBLENBQVFoQixJQUFBLENBQUssQ0FBQyxFQUFFTSxPQUFBLENBQVEsQ0FBQ3lDLEtBQUEsRUFBT3ZELEdBQUEsS0FBUTtJQUM5QyxTQUFTZ0IsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWtFLFVBQUEsQ0FBV2pGLE1BQUEsRUFBUWUsQ0FBQSxJQUFLLEdBQ3hDLElBQUl1QyxLQUFBLElBQVMyQixVQUFBLENBQVdsRSxDQUFBLEdBQUksQ0FBQyxLQUFLaEIsR0FBQSxJQUFPa0YsVUFBQSxDQUFXbEUsQ0FBQyxHQUNqRHdGLFFBQUEsR0FBVztFQUN2QixDQUFDO0VBQ0QsT0FBT0EsUUFBQTtBQUNYO0FBQ0EsU0FBU1QsVUFBVXZGLElBQUEsRUFBTTtFQUNyQixJQUFJaUcsTUFBQSxHQUFTLEVBQUM7RUFDZCxTQUFTekYsQ0FBQSxHQUFJUixJQUFBLENBQUtQLE1BQUEsR0FBUyxHQUFHZSxDQUFBLElBQUssS0FBS3lGLE1BQUEsQ0FBT3hHLE1BQUEsSUFBVSxHQUFHZSxDQUFBLElBQ3hEUixJQUFBLENBQUtRLENBQUMsRUFBRUYsT0FBQSxDQUFRLENBQUM0RixLQUFBLEVBQU9DLEdBQUEsRUFBSy9ELElBQUEsRUFBTUMsRUFBQSxLQUFPNEQsTUFBQSxDQUFPdkYsSUFBQSxDQUFLMEIsSUFBQSxFQUFNQyxFQUFFLENBQUM7RUFDbkUsT0FBTzRELE1BQUE7QUFDWDtBQUNBLFNBQVNKLFVBQVVPLE1BQUEsRUFBUXBGLE9BQUEsRUFBUztFQUNoQyxJQUFJLENBQUNvRixNQUFBLEVBQ0QsT0FBTztFQUNYLElBQUlILE1BQUEsR0FBUyxFQUFDO0VBQ2QsU0FBU3pGLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk0RixNQUFBLENBQU8zRyxNQUFBLEVBQVFlLENBQUEsSUFBSyxHQUFHO0lBQ3ZDLElBQUk0QixJQUFBLEdBQU9wQixPQUFBLENBQVFKLEdBQUEsQ0FBSXdGLE1BQUEsQ0FBTzVGLENBQUMsR0FBRyxDQUFDO01BQUc2QixFQUFBLEdBQUtyQixPQUFBLENBQVFKLEdBQUEsQ0FBSXdGLE1BQUEsQ0FBTzVGLENBQUEsR0FBSSxDQUFDLEdBQUcsRUFBRTtJQUN4RSxJQUFJNEIsSUFBQSxJQUFRQyxFQUFBLEVBQ1I0RCxNQUFBLENBQU92RixJQUFBLENBQUswQixJQUFBLEVBQU1DLEVBQUU7RUFDNUI7RUFDQSxPQUFPNEQsTUFBQTtBQUNYO0FBR0EsU0FBU0ksZ0JBQWdCdkIsUUFBQSxFQUFTeEYsS0FBQSxFQUFPZ0gsS0FBQSxFQUFNO0VBQzNDLElBQUkvRyxhQUFBLEdBQWdCK0YsaUJBQUEsQ0FBa0JoRyxLQUFLO0VBQzNDLElBQUlnQyxXQUFBLEdBQWM0RCxVQUFBLENBQVd2RixHQUFBLENBQUlMLEtBQUssRUFBRWlILElBQUEsQ0FBS0MsTUFBQTtFQUM3QyxJQUFJekUsR0FBQSxJQUFPdUUsS0FBQSxHQUFPeEIsUUFBQSxDQUFRTCxNQUFBLEdBQVNLLFFBQUEsQ0FBUU4sSUFBQSxFQUFNbkYsUUFBQSxDQUFTQyxLQUFBLEVBQU9DLGFBQWE7RUFDOUUsSUFBSSxDQUFDd0MsR0FBQSxFQUNELE9BQU87RUFDWCxJQUFJbkMsU0FBQSxHQUFZbUMsR0FBQSxDQUFJbkMsU0FBQSxDQUFVNkcsT0FBQSxDQUFRMUUsR0FBQSxDQUFJOUIsU0FBQSxDQUFVYyxHQUFHO0VBQ3ZELElBQUkyRixLQUFBLElBQVNKLEtBQUEsR0FBT3hCLFFBQUEsQ0FBUU4sSUFBQSxHQUFPTSxRQUFBLENBQVFMLE1BQUEsRUFBUXBELFlBQUEsQ0FBYVUsR0FBQSxDQUFJOUIsU0FBQSxFQUFXWCxLQUFBLENBQU1NLFNBQUEsQ0FBVWtHLFdBQUEsQ0FBWSxHQUFHeEUsV0FBQSxFQUFhL0IsYUFBYTtFQUN4SSxJQUFJb0gsT0FBQSxHQUFVLElBQUlwQyxZQUFBLENBQWErQixLQUFBLEdBQU9JLEtBQUEsR0FBUTNFLEdBQUEsQ0FBSTVCLFNBQUEsRUFBV21HLEtBQUEsR0FBT3ZFLEdBQUEsQ0FBSTVCLFNBQUEsR0FBWXVHLEtBQUEsRUFBTyxNQUFNLEdBQUcsRUFBRTtFQUN0RyxPQUFPM0UsR0FBQSxDQUFJOUIsU0FBQSxDQUFVMkcsWUFBQSxDQUFhaEgsU0FBUyxFQUFFaUgsT0FBQSxDQUFRM0IsVUFBQSxFQUFZO0lBQUVqSCxJQUFBLEVBQUFxSSxLQUFBO0lBQU1uQixZQUFBLEVBQWN3QjtFQUFRLENBQUM7QUFDcEc7QUFDQSxJQUFJRyxtQkFBQSxHQUFzQjtFQUFPQywwQkFBQSxHQUE2QjtBQUs5RCxTQUFTekIsa0JBQWtCaEcsS0FBQSxFQUFPO0VBQzlCLElBQUkwSCxPQUFBLEdBQVUxSCxLQUFBLENBQU0wSCxPQUFBO0VBQ3BCLElBQUlELDBCQUFBLElBQThCQyxPQUFBLEVBQVM7SUFDdkNGLG1CQUFBLEdBQXNCO0lBQ3RCQywwQkFBQSxHQUE2QkMsT0FBQTtJQUM3QixTQUFTeEcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXdHLE9BQUEsQ0FBUXZILE1BQUEsRUFBUWUsQ0FBQSxJQUNoQyxJQUFJd0csT0FBQSxDQUFReEcsQ0FBQyxFQUFFK0YsSUFBQSxDQUFLVSxvQkFBQSxFQUFzQjtNQUN0Q0gsbUJBQUEsR0FBc0I7TUFDdEI7SUFDSjtFQUNSO0VBQ0EsT0FBT0EsbUJBQUE7QUFDWDtBQU1BLFNBQVMvSSxhQUFhbUMsRUFBQSxFQUFJO0VBQ3RCLE9BQU9BLEVBQUEsQ0FBRzJHLE9BQUEsQ0FBUXpCLGVBQUEsRUFBaUIsSUFBSTtBQUMzQztBQUNBLElBQU1GLFVBQUEsR0FBYSxJQUFJcEcsd0JBQUEsQ0FBQW9JLFNBQUEsQ0FBVSxTQUFTO0FBQzFDLElBQU05QixlQUFBLEdBQWtCLElBQUl0Ryx3QkFBQSxDQUFBb0ksU0FBQSxDQUFVLGNBQWM7QUFVcEQsU0FBU2xKLFFBQVF3SSxNQUFBLEdBQVMsQ0FBQyxHQUFHO0VBQzFCQSxNQUFBLEdBQVM7SUFBRXZFLEtBQUEsRUFBT3VFLE1BQUEsQ0FBT3ZFLEtBQUEsSUFBUztJQUM5QjBELGFBQUEsRUFBZWEsTUFBQSxDQUFPYixhQUFBLElBQWlCO0VBQUk7RUFDL0MsT0FBTyxJQUFJN0csd0JBQUEsQ0FBQXFJLE1BQUEsQ0FBTztJQUNkQyxHQUFBLEVBQUtsQyxVQUFBO0lBQ0w1RixLQUFBLEVBQU87TUFDSCtILEtBQUEsRUFBTztRQUNILE9BQU8sSUFBSTlDLFlBQUEsQ0FBYXZGLE1BQUEsQ0FBT2tGLEtBQUEsRUFBT2xGLE1BQUEsQ0FBT2tGLEtBQUEsRUFBTyxNQUFNLEdBQUcsRUFBRTtNQUNuRTtNQUNBb0QsTUFBTXBILEVBQUEsRUFBSXFILElBQUEsRUFBTWpJLEtBQUEsRUFBTztRQUNuQixPQUFPdUYsZ0JBQUEsQ0FBaUIwQyxJQUFBLEVBQU1qSSxLQUFBLEVBQU9ZLEVBQUEsRUFBSXNHLE1BQU07TUFDbkQ7SUFDSjtJQUNBQSxNQUFBO0lBQ0FnQixLQUFBLEVBQU87TUFDSEMsZUFBQSxFQUFpQjtRQUNiQyxZQUFZQyxJQUFBLEVBQU1DLENBQUEsRUFBRztVQUNqQixJQUFJQyxTQUFBLEdBQVlELENBQUEsQ0FBRUMsU0FBQTtVQUNsQixJQUFJQyxPQUFBLEdBQVVELFNBQUEsSUFBYSxnQkFBZ0J6SixJQUFBLEdBQU95SixTQUFBLElBQWEsZ0JBQWdCNUosSUFBQSxHQUFPO1VBQ3RGLElBQUksQ0FBQzZKLE9BQUEsRUFDRCxPQUFPO1VBQ1hGLENBQUEsQ0FBRUcsY0FBQSxDQUFlO1VBQ2pCLE9BQU9ELE9BQUEsQ0FBUUgsSUFBQSxDQUFLckksS0FBQSxFQUFPcUksSUFBQSxDQUFLSyxRQUFRO1FBQzVDO01BQ0o7SUFDSjtFQUNKLENBQUM7QUFDTDtBQUNBLFNBQVNDLGFBQWEzQixLQUFBLEVBQU00QixNQUFBLEVBQVE7RUFDaEMsT0FBTyxDQUFDNUksS0FBQSxFQUFPMEksUUFBQSxLQUFhO0lBQ3hCLElBQUlULElBQUEsR0FBT3JDLFVBQUEsQ0FBV2lELFFBQUEsQ0FBUzdJLEtBQUs7SUFDcEMsSUFBSSxDQUFDaUksSUFBQSxLQUFTakIsS0FBQSxHQUFPaUIsSUFBQSxDQUFLOUMsTUFBQSxHQUFTOEMsSUFBQSxDQUFLL0MsSUFBQSxFQUFNcEYsVUFBQSxJQUFjLEdBQ3hELE9BQU87SUFDWCxJQUFJNEksUUFBQSxFQUFVO01BQ1YsSUFBSTlILEVBQUEsR0FBS21HLGVBQUEsQ0FBZ0JrQixJQUFBLEVBQU1qSSxLQUFBLEVBQU9nSCxLQUFJO01BQzFDLElBQUlwRyxFQUFBLEVBQ0E4SCxRQUFBLENBQVNFLE1BQUEsR0FBU2hJLEVBQUEsQ0FBR2tJLGNBQUEsQ0FBZSxJQUFJbEksRUFBRTtJQUNsRDtJQUNBLE9BQU87RUFDWDtBQUNKO0FBSUEsSUFBTTlCLElBQUEsR0FBTzZKLFlBQUEsQ0FBYSxPQUFPLElBQUk7QUFJckMsSUFBTWhLLElBQUEsR0FBT2dLLFlBQUEsQ0FBYSxNQUFNLElBQUk7QUFLcEMsSUFBTTNKLFlBQUEsR0FBZTJKLFlBQUEsQ0FBYSxPQUFPLEtBQUs7QUFLOUMsSUFBTTlKLFlBQUEsR0FBZThKLFlBQUEsQ0FBYSxNQUFNLEtBQUs7QUFJN0MsU0FBUzVKLFVBQVVpQixLQUFBLEVBQU87RUFDdEIsSUFBSWlJLElBQUEsR0FBT3JDLFVBQUEsQ0FBV2lELFFBQUEsQ0FBUzdJLEtBQUs7RUFDcEMsT0FBT2lJLElBQUEsR0FBT0EsSUFBQSxDQUFLL0MsSUFBQSxDQUFLcEYsVUFBQSxHQUFhO0FBQ3pDO0FBSUEsU0FBU2xCLFVBQVVvQixLQUFBLEVBQU87RUFDdEIsSUFBSWlJLElBQUEsR0FBT3JDLFVBQUEsQ0FBV2lELFFBQUEsQ0FBUzdJLEtBQUs7RUFDcEMsT0FBT2lJLElBQUEsR0FBT0EsSUFBQSxDQUFLOUMsTUFBQSxDQUFPckYsVUFBQSxHQUFhO0FBQzNDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==