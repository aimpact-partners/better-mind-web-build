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

// .beyond/uimport/prosemirror-history.1.4.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1oaXN0b3J5LjEuNC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWhpc3RvcnkvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9oaXN0b3J5XzFfNF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNsb3NlSGlzdG9yeSIsImhpc3RvcnkiLCJyZWRvIiwicmVkb0RlcHRoIiwicmVkb05vU2Nyb2xsIiwidW5kbyIsInVuZG9EZXB0aCIsInVuZG9Ob1Njcm9sbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcm9wZV9zZXF1ZW5jZSIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3Byb3NlbWlycm9yX3RyYW5zZm9ybSIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsIm1heF9lbXB0eV9pdGVtcyIsIkJyYW5jaCIsIl9CcmFuY2giLCJjb25zdHJ1Y3RvciIsIml0ZW1zIiwiZXZlbnRDb3VudCIsInBvcEV2ZW50Iiwic3RhdGUiLCJwcmVzZXJ2ZUl0ZW1zIiwiZW5kIiwibGVuZ3RoIiwibmV4dCIsImdldCIsInNlbGVjdGlvbiIsInJlbWFwIiwibWFwRnJvbSIsInJlbWFwcGluZyIsIm1hcHMiLCJ0cmFuc2Zvcm0iLCJ0ciIsInJlbWFpbmluZyIsImFkZEFmdGVyIiwiYWRkQmVmb3JlIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwic3RlcCIsInB1c2giLCJJdGVtIiwibWFwIiwic2xpY2UiLCJtYXliZVN0ZXAiLCJkb2MiLCJtYXBwaW5nIiwiYXBwZW5kTWFwIiwiYXBwZW5kIiwicmV2ZXJzZSIsImNvbmNhdCIsImFkZFRyYW5zZm9ybSIsImhpc3RPcHRpb25zIiwibmV3SXRlbXMiLCJvbGRJdGVtcyIsImxhc3RJdGVtIiwic3RlcHMiLCJpbnZlcnQiLCJkb2NzIiwibWVyZ2VkIiwibWVyZ2UiLCJwb3AiLCJvdmVyZmxvdyIsImRlcHRoIiwiREVQVEhfT1ZFUkZMT1ciLCJjdXRPZmZFdmVudHMiLCJmcm9tIiwidG8iLCJNYXBwaW5nIiwibWlycm9yUG9zIiwibWlycm9yT2Zmc2V0IiwiYWRkTWFwcyIsImFycmF5IiwicmViYXNlZCIsInJlYmFzZWRUcmFuc2Zvcm0iLCJyZWJhc2VkQ291bnQiLCJyZWJhc2VkSXRlbXMiLCJzdGFydCIsIk1hdGgiLCJtYXgiLCJuZXdVbnRpbCIsImlSZWJhc2VkIiwicG9zIiwiZ2V0TWlycm9yIiwibWluIiwibmV3TWFwcyIsImJyYW5jaCIsImVtcHR5SXRlbUNvdW50IiwiY29tcHJlc3MiLCJjb3VudCIsInVwdG8iLCJldmVudHMiLCJnZXRNYXAiLCJuZXdJdGVtIiwibGFzdCIsImRlZmF1bHQiLCJlbXB0eSIsIm4iLCJjdXRQb2ludCIsIl9JdGVtIiwib3RoZXIiLCJIaXN0b3J5U3RhdGUiLCJkb25lIiwidW5kb25lIiwicHJldlJhbmdlcyIsInByZXZUaW1lIiwicHJldkNvbXBvc2l0aW9uIiwiYXBwbHlUcmFuc2FjdGlvbiIsImhpc3RvcnkyIiwib3B0aW9ucyIsImhpc3RvcnlUciIsImdldE1ldGEiLCJoaXN0b3J5S2V5IiwiaGlzdG9yeVN0YXRlIiwiY2xvc2VIaXN0b3J5S2V5IiwiYXBwZW5kZWQiLCJtdXN0UHJlc2VydmVJdGVtcyIsInJhbmdlc0ZvciIsImNvbXBvc2l0aW9uIiwibmV3R3JvdXAiLCJ0aW1lIiwibmV3R3JvdXBEZWxheSIsImlzQWRqYWNlbnRUbyIsIm1hcFJhbmdlcyIsImdldEJvb2ttYXJrIiwiZG9jQ2hhbmdlZCIsImFkamFjZW50IiwicmVzdWx0IiwiX2Zyb20iLCJfdG8iLCJyYW5nZXMiLCJoaXN0VHJhbnNhY3Rpb24iLCJyZWRvMiIsInNwZWMiLCJjb25maWciLCJyZXNvbHZlIiwiYWRkZWQiLCJuZXdIaXN0Iiwic2V0U2VsZWN0aW9uIiwic2V0TWV0YSIsImNhY2hlZFByZXNlcnZlSXRlbXMiLCJjYWNoZWRQcmVzZXJ2ZUl0ZW1zUGx1Z2lucyIsInBsdWdpbnMiLCJoaXN0b3J5UHJlc2VydmVJdGVtcyIsIlBsdWdpbktleSIsIlBsdWdpbiIsImtleSIsImluaXQiLCJhcHBseSIsImhpc3QiLCJwcm9wcyIsImhhbmRsZURPTUV2ZW50cyIsImJlZm9yZWlucHV0IiwidmlldyIsImUiLCJpbnB1dFR5cGUiLCJjb21tYW5kIiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsImJ1aWxkQ29tbWFuZCIsInNjcm9sbCIsImdldFN0YXRlIiwic2Nyb2xsSW50b1ZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWixpQ0FBQTs7O0FDQUEsSUFBQWEsb0JBQUEsR0FBeUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN6QixJQUFBQyw0QkFBQSxHQUF3QkQsT0FBQTtBQUN4QixJQUFBRSx3QkFBQSxHQUFrQ0YsT0FBQTtBQWtCbEMsSUFBTUcsZUFBQSxHQUFrQjtBQUN4QixJQUFNQyxNQUFBLEdBQU4sTUFBTUMsT0FBQSxDQUFPO0VBQ1RDLFlBQVlDLEtBQUEsRUFBT0MsVUFBQSxFQUFZO0lBQzNCLEtBQUtELEtBQUEsR0FBUUEsS0FBQTtJQUNiLEtBQUtDLFVBQUEsR0FBYUEsVUFBQTtFQUN0QjtFQUFBO0VB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QSxJQUFhLGdCQUFnQjVKLElBQUEsR0FBTztVQUN0RixJQUFJLENBQUM2SixPQUFBLEVBQ0QsT0FBTztVQUNYRixDQUFBLENBQUVHLGNBQUEsQ0FBZTtVQUNqQixPQUFPRCxPQUFBLENBQVFILElBQUEsQ0FBS3JJLEtBQUEsRUFBT3FJLElBQUEsQ0FBS0ssUUFBUTtRQUM1QztNQUNKO0lBQ0o7RUFDSixDQUFDO0FBQ0w7QUFDQSxTQUFTQyxhQUFhM0IsS0FBQSxFQUFNNEIsTUFBQSxFQUFRO0VBQ2hDLE9BQU8sQ0FBQzVJLEtBQUEsRUFBTzBJLFFBQUEsS0FBYTtJQUN4QixJQUFJVCxJQUFBLEdBQU9yQyxVQUFBLENBQVdpRCxRQUFBLENBQVM3SSxLQUFLO0lBQ3BDLElBQUksQ0FBQ2lJLElBQUEsS0FBU2pCLEtBQUEsR0FBT2lCLElBQUEsQ0FBSzlDLE1BQUEsR0FBUzhDLElBQUEsQ0FBSy9DLElBQUEsRUFBTXBGLFVBQUEsSUFBYyxHQUN4RCxPQUFPO0lBQ1gsSUFBSTRJLFFBQUEsRUFBVTtNQUNWLElBQUk5SCxFQUFBLEdBQUttRyxlQUFBLENBQWdCa0IsSUFBQSxFQUFNakksS0FBQSxFQUFPZ0gsS0FBSTtNQUMxQyxJQUFJcEcsRUFBQSxFQUNBOEgsUUFBQSxDQUFTRSxNQUFBLEdBQVNoSSxFQUFBLENBQUdrSSxjQUFBLENBQWUsSUFBSWxJLEVBQUU7SUFDbEQ7SUFDQSxPQUFPO0VBQ1g7QUFDSjtBQUlBLElBQU05QixJQUFBLEdBQU82SixZQUFBLENBQWEsT0FBTyxJQUFJO0FBSXJDLElBQU1oSyxJQUFBLEdBQU9nSyxZQUFBLENBQWEsTUFBTSxJQUFJO0FBS3BDLElBQU0zSixZQUFBLEdBQWUySixZQUFBLENBQWEsT0FBTyxLQUFLO0FBSzlDLElBQU05SixZQUFBLEdBQWU4SixZQUFBLENBQWEsTUFBTSxLQUFLO0FBSTdDLFNBQVM1SixVQUFVaUIsS0FBQSxFQUFPO0VBQ3RCLElBQUlpSSxJQUFBLEdBQU9yQyxVQUFBLENBQVdpRCxRQUFBLENBQVM3SSxLQUFLO0VBQ3BDLE9BQU9pSSxJQUFBLEdBQU9BLElBQUEsQ0FBSy9DLElBQUEsQ0FBS3BGLFVBQUEsR0FBYTtBQUN6QztBQUlBLFNBQVNsQixVQUFVb0IsS0FBQSxFQUFPO0VBQ3RCLElBQUlpSSxJQUFBLEdBQU9yQyxVQUFBLENBQVdpRCxRQUFBLENBQVM3SSxLQUFLO0VBQ3BDLE9BQU9pSSxJQUFBLEdBQU9BLElBQUEsQ0FBSzlDLE1BQUEsQ0FBT3JGLFVBQUEsR0FBYTtBQUMzQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=