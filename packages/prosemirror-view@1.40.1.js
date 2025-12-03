System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-view","1.40.1"]]);
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

// .beyond/uimport/temp/prosemirror-view.1.40.1.js
var prosemirror_view_1_40_1_exports = {};
__export(prosemirror_view_1_40_1_exports, {
  Decoration: () => Decoration,
  DecorationSet: () => DecorationSet,
  EditorView: () => EditorView,
  __endComposition: () => __endComposition,
  __parseFromClipboard: () => __parseFromClipboard
});
module.exports = __toCommonJS(prosemirror_view_1_40_1_exports);

// node_modules/prosemirror-view/dist/index.js
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var import_prosemirror_model = require("prosemirror-model@1.25.3");
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
var domIndex = function (node) {
  for (var index = 0;; index++) {
    node = node.previousSibling;
    if (!node) return index;
  }
};
var parentNode = function (node) {
  let parent = node.assignedSlot || node.parentNode;
  return parent && parent.nodeType == 11 ? parent.host : parent;
};
var reusedRange = null;
var textRange = function (node, from, to) {
  let range = reusedRange || (reusedRange = document.createRange());
  range.setEnd(node, to == null ? node.nodeValue.length : to);
  range.setStart(node, from || 0);
  return range;
};
var clearReusedRange = function () {
  reusedRange = null;
};
var isEquivalentPosition = function (node, off, targetNode, targetOff) {
  return targetNode && (scanFor(node, off, targetNode, targetOff, -1) || scanFor(node, off, targetNode, targetOff, 1));
};
var atomElements = /^(img|br|input|textarea|hr)$/i;
function scanFor(node, off, targetNode, targetOff, dir) {
  var _a;
  for (;;) {
    if (node == targetNode && off == targetOff) return true;
    if (off == (dir < 0 ? 0 : nodeSize(node))) {
      let parent = node.parentNode;
      if (!parent || parent.nodeType != 1 || hasBlockDesc(node) || atomElements.test(node.nodeName) || node.contentEditable == "false") return false;
      off = domIndex(node) + (dir < 0 ? 0 : 1);
      node = parent;
    } else if (node.nodeType == 1) {
      let child = node.childNodes[off + (dir < 0 ? -1 : 0)];
      if (child.nodeType == 1 && child.contentEditable == "false") {
        if ((_a = child.pmViewDesc) === null || _a === void 0 ? void 0 : _a.ignoreForSelection) off += dir;else return false;
      } else {
        node = child;
        off = dir < 0 ? nodeSize(node) : 0;
      }
    } else {
      return false;
    }
  }
}
function nodeSize(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function textNodeBefore$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset) return node;
    if (node.nodeType == 1 && offset > 0) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset - 1];
      offset = nodeSize(node);
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node);
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function textNodeAfter$1(node, offset) {
  for (;;) {
    if (node.nodeType == 3 && offset < node.nodeValue.length) return node;
    if (node.nodeType == 1 && offset < node.childNodes.length) {
      if (node.contentEditable == "false") return null;
      node = node.childNodes[offset];
      offset = 0;
    } else if (node.parentNode && !hasBlockDesc(node)) {
      offset = domIndex(node) + 1;
      node = node.parentNode;
    } else {
      return null;
    }
  }
}
function isOnEdge(node, offset, parent) {
  for (let atStart = offset == 0, atEnd = offset == nodeSize(node); atStart || atEnd;) {
    if (node == parent) return true;
    let index = domIndex(node);
    node = node.parentNode;
    if (!node) return false;
    atStart = atStart && index == 0;
    atEnd = atEnd && index == nodeSize(node);
  }
}
function hasBlockDesc(dom) {
  let desc;
  for (let cur = dom; cur; cur = cur.parentNode) if (desc = cur.pmViewDesc) break;
  return desc && desc.node && desc.node.isBlock && (desc.dom == dom || desc.contentDOM == dom);
}
var selectionCollapsed = function (domSel) {
  return domSel.focusNode && isEquivalentPosition(domSel.focusNode, domSel.focusOffset, domSel.anchorNode, domSel.anchorOffset);
};
function keyEvent(keyCode, key) {
  let event = document.createEvent("Event");
  event.initEvent("keydown", true, true);
  event.keyCode = keyCode;
  event.key = event.code = key;
  return event;
}
function deepActiveElement(doc2) {
  let elt = doc2.activeElement;
  while (elt && elt.shadowRoot) elt = elt.shadowRoot.activeElement;
  return elt;
}
function caretFromPoint(doc2, x, y) {
  if (doc2.caretPositionFromPoint) {
    try {
      let pos = doc2.caretPositionFromPoint(x, y);
      if (pos) return {
        node: pos.offsetNode,
        offset: Math.min(nodeSize(pos.offsetNode), pos.offset)
      };
    } catch (_) {}
  }
  if (doc2.caretRangeFromPoint) {
    let range = doc2.caretRangeFromPoint(x, y);
    if (range) return {
      node: range.startContainer,
      offset: Math.min(nodeSize(range.startContainer), range.startOffset)
    };
  }
}
var nav = typeof navigator != "undefined" ? navigator : null;
var doc = typeof document != "undefined" ? document : null;
var agent = nav && nav.userAgent || "";
var ie_edge = /Edge\/(\d+)/.exec(agent);
var ie_upto10 = /MSIE \d/.exec(agent);
var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(agent);
var ie = !!(ie_upto10 || ie_11up || ie_edge);
var ie_version = ie_upto10 ? document.documentMode : ie_11up ? +ie_11up[1] : ie_edge ? +ie_edge[1] : 0;
var gecko = !ie && /gecko\/(\d+)/i.test(agent);
gecko && +(/Firefox\/(\d+)/.exec(agent) || [0, 0])[1];
var _chrome = !ie && /Chrome\/(\d+)/.exec(agent);
var chrome = !!_chrome;
var chrome_version = _chrome ? +_chrome[1] : 0;
var safari = !ie && !!nav && /Apple Computer/.test(nav.vendor);
var ios = safari && (/Mobile\/\w+/.test(agent) || !!nav && nav.maxTouchPoints > 2);
var mac = ios || (nav ? /Mac/.test(nav.platform) : false);
var windows = nav ? /Win/.test(nav.platform) : false;
var android = /Android \d/.test(agent);
var webkit = !!doc && "webkitFontSmoothing" in doc.documentElement.style;
var webkit_version = webkit ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function windowRect(doc2) {
  let vp = doc2.defaultView && doc2.defaultView.visualViewport;
  if (vp) return {
    left: 0,
    right: vp.width,
    top: 0,
    bottom: vp.height
  };
  return {
    left: 0,
    right: doc2.documentElement.clientWidth,
    top: 0,
    bottom: doc2.documentElement.clientHeight
  };
}
function getSide(value, side) {
  return typeof value == "number" ? value : value[side];
}
function clientRect(node) {
  let rect = node.getBoundingClientRect();
  let scaleX = rect.width / node.offsetWidth || 1;
  let scaleY = rect.height / node.offsetHeight || 1;
  return {
    left: rect.left,
    right: rect.left + node.clientWidth * scaleX,
    top: rect.top,
    bottom: rect.top + node.clientHeight * scaleY
  };
}
function scrollRectIntoView(view, rect, startDOM) {
  let scrollThreshold = view.someProp("scrollThreshold") || 0,
    scrollMargin = view.someProp("scrollMargin") || 5;
  let doc2 = view.dom.ownerDocument;
  for (let parent = startDOM || view.dom;;) {
    if (!parent) break;
    if (parent.nodeType != 1) {
      parent = parentNode(parent);
      continue;
    }
    let elt = parent;
    let atTop = elt == doc2.body;
    let bounding = atTop ? windowRect(doc2) : clientRect(elt);
    let moveX = 0,
      moveY = 0;
    if (rect.top < bounding.top + getSide(scrollThreshold, "top")) moveY = -(bounding.top - rect.top + getSide(scrollMargin, "top"));else if (rect.bottom > bounding.bottom - getSide(scrollThreshold, "bottom")) moveY = rect.bottom - rect.top > bounding.bottom - bounding.top ? rect.top + getSide(scrollMargin, "top") - bounding.top : rect.bottom - bounding.bottom + getSide(scrollMargin, "bottom");
    if (rect.left < bounding.left + getSide(scrollThreshold, "left")) moveX = -(bounding.left - rect.left + getSide(scrollMargin, "left"));else if (rect.right > bounding.right - getSide(scrollThreshold, "right")) moveX = rect.right - bounding.right + getSide(scrollMargin, "right");
    if (moveX || moveY) {
      if (atTop) {
        doc2.defaultView.scrollBy(moveX, moveY);
      } else {
        let startX = elt.scrollLeft,
          startY = elt.scrollTop;
        if (moveY) elt.scrollTop += moveY;
        if (moveX) elt.scrollLeft += moveX;
        let dX = elt.scrollLeft - startX,
          dY = elt.scrollTop - startY;
        rect = {
          left: rect.left - dX,
          top: rect.top - dY,
          right: rect.right - dX,
          bottom: rect.bottom - dY
        };
      }
    }
    let pos = atTop ? "fixed" : getComputedStyle(parent).position;
    if (/^(fixed|sticky)$/.test(pos)) break;
    parent = pos == "absolute" ? parent.offsetParent : parentNode(parent);
  }
}
function storeScrollPos(view) {
  let rect = view.dom.getBoundingClientRect(),
    startY = Math.max(0, rect.top);
  let refDOM, refTop;
  for (let x = (rect.left + rect.right) / 2, y = startY + 1; y < Math.min(innerHeight, rect.bottom); y += 5) {
    let dom = view.root.elementFromPoint(x, y);
    if (!dom || dom == view.dom || !view.dom.contains(dom)) continue;
    let localRect = dom.getBoundingClientRect();
    if (localRect.top >= startY - 20) {
      refDOM = dom;
      refTop = localRect.top;
      break;
    }
  }
  return {
    refDOM,
    refTop,
    stack: scrollStack(view.dom)
  };
}
function scrollStack(dom) {
  let stack = [],
    doc2 = dom.ownerDocument;
  for (let cur = dom; cur; cur = parentNode(cur)) {
    stack.push({
      dom: cur,
      top: cur.scrollTop,
      left: cur.scrollLeft
    });
    if (dom == doc2) break;
  }
  return stack;
}
function resetScrollPos({
  refDOM,
  refTop,
  stack
}) {
  let newRefTop = refDOM ? refDOM.getBoundingClientRect().top : 0;
  restoreScrollStack(stack, newRefTop == 0 ? 0 : newRefTop - refTop);
}
function restoreScrollStack(stack, dTop) {
  for (let i = 0; i < stack.length; i++) {
    let {
      dom,
      top,
      left
    } = stack[i];
    if (dom.scrollTop != top + dTop) dom.scrollTop = top + dTop;
    if (dom.scrollLeft != left) dom.scrollLeft = left;
  }
}
var preventScrollSupported = null;
function focusPreventScroll(dom) {
  if (dom.setActive) return dom.setActive();
  if (preventScrollSupported) return dom.focus(preventScrollSupported);
  let stored = scrollStack(dom);
  dom.focus(preventScrollSupported == null ? {
    get preventScroll() {
      preventScrollSupported = {
        preventScroll: true
      };
      return true;
    }
  } : void 0);
  if (!preventScrollSupported) {
    preventScrollSupported = false;
    restoreScrollStack(stored, 0);
  }
}
function findOffsetInNode(node, coords) {
  let closest,
    dxClosest = 2e8,
    coordsClosest,
    offset = 0;
  let rowBot = coords.top,
    rowTop = coords.top;
  let firstBelow, coordsBelow;
  for (let child = node.firstChild, childIndex = 0; child; child = child.nextSibling, childIndex++) {
    let rects;
    if (child.nodeType == 1) rects = child.getClientRects();else if (child.nodeType == 3) rects = textRange(child).getClientRects();else continue;
    for (let i = 0; i < rects.length; i++) {
      let rect = rects[i];
      if (rect.top <= rowBot && rect.bottom >= rowTop) {
        rowBot = Math.max(rect.bottom, rowBot);
        rowTop = Math.min(rect.top, rowTop);
        let dx = rect.left > coords.left ? rect.left - coords.left : rect.right < coords.left ? coords.left - rect.right : 0;
        if (dx < dxClosest) {
          closest = child;
          dxClosest = dx;
          coordsClosest = dx && closest.nodeType == 3 ? {
            left: rect.right < coords.left ? rect.right : rect.left,
            top: coords.top
          } : coords;
          if (child.nodeType == 1 && dx) offset = childIndex + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
          continue;
        }
      } else if (rect.top > coords.top && !firstBelow && rect.left <= coords.left && rect.right >= coords.left) {
        firstBelow = child;
        coordsBelow = {
          left: Math.max(rect.left, Math.min(rect.right, coords.left)),
          top: rect.top
        };
      }
      if (!closest && (coords.left >= rect.right && coords.top >= rect.top || coords.left >= rect.left && coords.top >= rect.bottom)) offset = childIndex + 1;
    }
  }
  if (!closest && firstBelow) {
    closest = firstBelow;
    coordsClosest = coordsBelow;
    dxClosest = 0;
  }
  if (closest && closest.nodeType == 3) return findOffsetInText(closest, coordsClosest);
  if (!closest || dxClosest && closest.nodeType == 1) return {
    node,
    offset
  };
  return findOffsetInNode(closest, coordsClosest);
}
function findOffsetInText(node, coords) {
  let len = node.nodeValue.length;
  let range = document.createRange();
  for (let i = 0; i < len; i++) {
    range.setEnd(node, i + 1);
    range.setStart(node, i);
    let rect = singleRect(range, 1);
    if (rect.top == rect.bottom) continue;
    if (inRect(coords, rect)) return {
      node,
      offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0)
    };
  }
  return {
    node,
    offset: 0
  };
}
function inRect(coords, rect) {
  return coords.left >= rect.left - 1 && coords.left <= rect.right + 1 && coords.top >= rect.top - 1 && coords.top <= rect.bottom + 1;
}
function targetKludge(dom, coords) {
  let parent = dom.parentNode;
  if (parent && /^li$/i.test(parent.nodeName) && coords.left < dom.getBoundingClientRect().left) return parent;
  return dom;
}
function posFromElement(view, elt, coords) {
  let {
      node,
      offset
    } = findOffsetInNode(elt, coords),
    bias = -1;
  if (node.nodeType == 1 && !node.firstChild) {
    let rect = node.getBoundingClientRect();
    bias = rect.left != rect.right && coords.left > (rect.left + rect.right) / 2 ? 1 : -1;
  }
  return view.docView.posFromDOM(node, offset, bias);
}
function posFromCaret(view, node, offset, coords) {
  let outsideBlock = -1;
  for (let cur = node, sawBlock = false;;) {
    if (cur == view.dom) break;
    let desc = view.docView.nearestDesc(cur, true),
      rect;
    if (!desc) return null;
    if (desc.dom.nodeType == 1 && (desc.node.isBlock && desc.parent || !desc.contentDOM) && (
    // Ignore elements with zero-size bounding rectangles
    (rect = desc.dom.getBoundingClientRect()).width || rect.height)) {
      if (desc.node.isBlock && desc.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(desc.dom.nodeName)) {
        if (!sawBlock && rect.left > coords.left || rect.top > coords.top) outsideBlock = desc.posBefore;else if (!sawBlock && rect.right < coords.left || rect.bottom < coords.top) outsideBlock = desc.posAfter;
        sawBlock = true;
      }
      if (!desc.contentDOM && outsideBlock < 0 && !desc.node.isText) {
        let before = desc.node.isBlock ? coords.top < (rect.top + rect.bottom) / 2 : coords.left < (rect.left + rect.right) / 2;
        return before ? desc.posBefore : desc.posAfter;
      }
    }
    cur = desc.dom.parentNode;
  }
  return outsideBlock > -1 ? outsideBlock : view.docView.posFromDOM(node, offset, -1);
}
function elementFromPoint(element, coords, box) {
  let len = element.childNodes.length;
  if (len && box.top < box.bottom) {
    for (let startI = Math.max(0, Math.min(len - 1, Math.floor(len * (coords.top - box.top) / (box.bottom - box.top)) - 2)), i = startI;;) {
      let child = element.childNodes[i];
      if (child.nodeType == 1) {
        let rects = child.getClientRects();
        for (let j = 0; j < rects.length; j++) {
          let rect = rects[j];
          if (inRect(coords, rect)) return elementFromPoint(child, coords, rect);
        }
      }
      if ((i = (i + 1) % len) == startI) break;
    }
  }
  return element;
}
function posAtCoords(view, coords) {
  let doc2 = view.dom.ownerDocument,
    node,
    offset = 0;
  let caret = caretFromPoint(doc2, coords.left, coords.top);
  if (caret) ({
    node,
    offset
  } = caret);
  let elt = (view.root.elementFromPoint ? view.root : doc2).elementFromPoint(coords.left, coords.top);
  let pos;
  if (!elt || !view.dom.contains(elt.nodeType != 1 ? elt.parentNode : elt)) {
    let box = view.dom.getBoundingClientRect();
    if (!inRect(coords, box)) return null;
    elt = elementFromPoint(view.dom, coords, box);
    if (!elt) return null;
  }
  if (safari) {
    for (let p = elt; node && p; p = parentNode(p)) if (p.draggable) node = void 0;
  }
  elt = targetKludge(elt, coords);
  if (node) {
    if (gecko && node.nodeType == 1) {
      offset = Math.min(offset, node.childNodes.length);
      if (offset < node.childNodes.length) {
        let next = node.childNodes[offset],
          box;
        if (next.nodeName == "IMG" && (box = next.getBoundingClientRect()).right <= coords.left && box.bottom > coords.top) offset++;
      }
    }
    let prev;
    if (webkit && offset && node.nodeType == 1 && (prev = node.childNodes[offset - 1]).nodeType == 1 && prev.contentEditable == "false" && prev.getBoundingClientRect().top >= coords.top) offset--;
    if (node == view.dom && offset == node.childNodes.length - 1 && node.lastChild.nodeType == 1 && coords.top > node.lastChild.getBoundingClientRect().bottom) pos = view.state.doc.content.size;else if (offset == 0 || node.nodeType != 1 || node.childNodes[offset - 1].nodeName != "BR") pos = posFromCaret(view, node, offset, coords);
  }
  if (pos == null) pos = posFromElement(view, elt, coords);
  let desc = view.docView.nearestDesc(elt, true);
  return {
    pos,
    inside: desc ? desc.posAtStart - desc.border : -1
  };
}
function nonZero(rect) {
  return rect.top < rect.bottom || rect.left < rect.right;
}
function singleRect(target, bias) {
  let rects = target.getClientRects();
  if (rects.length) {
    let first = rects[bias < 0 ? 0 : rects.length - 1];
    if (nonZero(first)) return first;
  }
  return Array.prototype.find.call(rects, nonZero) || target.getBoundingClientRect();
}
var BIDI = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function coordsAtPos(view, pos, side) {
  let {
    node,
    offset,
    atom
  } = view.docView.domFromPos(pos, side < 0 ? -1 : 1);
  let supportEmptyRange = webkit || gecko;
  if (node.nodeType == 3) {
    if (supportEmptyRange && (BIDI.test(node.nodeValue) || (side < 0 ? !offset : offset == node.nodeValue.length))) {
      let rect = singleRect(textRange(node, offset, offset), side);
      if (gecko && offset && /\s/.test(node.nodeValue[offset - 1]) && offset < node.nodeValue.length) {
        let rectBefore = singleRect(textRange(node, offset - 1, offset - 1), -1);
        if (rectBefore.top == rect.top) {
          let rectAfter = singleRect(textRange(node, offset, offset + 1), -1);
          if (rectAfter.top != rect.top) return flattenV(rectAfter, rectAfter.left < rectBefore.left);
        }
      }
      return rect;
    } else {
      let from = offset,
        to = offset,
        takeSide = side < 0 ? 1 : -1;
      if (side < 0 && !offset) {
        to++;
        takeSide = -1;
      } else if (side >= 0 && offset == node.nodeValue.length) {
        from--;
        takeSide = 1;
      } else if (side < 0) {
        from--;
      } else {
        to++;
      }
      return flattenV(singleRect(textRange(node, from, to), takeSide), takeSide < 0);
    }
  }
  let $dom = view.state.doc.resolve(pos - (atom || 0));
  if (!$dom.parent.inlineContent) {
    if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
      let before = node.childNodes[offset - 1];
      if (before.nodeType == 1) return flattenH(before.getBoundingClientRect(), false);
    }
    if (atom == null && offset < nodeSize(node)) {
      let after = node.childNodes[offset];
      if (after.nodeType == 1) return flattenH(after.getBoundingClientRect(), true);
    }
    return flattenH(node.getBoundingClientRect(), side >= 0);
  }
  if (atom == null && offset && (side < 0 || offset == nodeSize(node))) {
    let before = node.childNodes[offset - 1];
    let target = before.nodeType == 3 ? textRange(before, nodeSize(before) - (supportEmptyRange ? 0 : 1)) : before.nodeType == 1 && (before.nodeName != "BR" || !before.nextSibling) ? before : null;
    if (target) return flattenV(singleRect(target, 1), false);
  }
  if (atom == null && offset < nodeSize(node)) {
    let after = node.childNodes[offset];
    while (after.pmViewDesc && after.pmViewDesc.ignoreForCoords) after = after.nextSibling;
    let target = !after ? null : after.nodeType == 3 ? textRange(after, 0, supportEmptyRange ? 0 : 1) : after.nodeType == 1 ? after : null;
    if (target) return flattenV(singleRect(target, -1), true);
  }
  return flattenV(singleRect(node.nodeType == 3 ? textRange(node) : node, -side), side >= 0);
}
function flattenV(rect, left) {
  if (rect.width == 0) return rect;
  let x = left ? rect.left : rect.right;
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: x,
    right: x
  };
}
function flattenH(rect, top) {
  if (rect.height == 0) return rect;
  let y = top ? rect.top : rect.bottom;
  return {
    top: y,
    bottom: y,
    left: rect.left,
    right: rect.right
  };
}
function withFlushedState(view, state, f) {
  let viewState = view.state,
    active = view.root.activeElement;
  if (viewState != state) view.updateState(state);
  if (active != view.dom) view.focus();
  try {
    return f();
  } finally {
    if (viewState != state) view.updateState(viewState);
    if (active != view.dom && active) active.focus();
  }
}
function endOfTextblockVertical(view, state, dir) {
  let sel = state.selection;
  let $pos = dir == "up" ? sel.$from : sel.$to;
  return withFlushedState(view, state, () => {
    let {
      node: dom
    } = view.docView.domFromPos($pos.pos, dir == "up" ? -1 : 1);
    for (;;) {
      let nearest = view.docView.nearestDesc(dom, true);
      if (!nearest) break;
      if (nearest.node.isBlock) {
        dom = nearest.contentDOM || nearest.dom;
        break;
      }
      dom = nearest.dom.parentNode;
    }
    let coords = coordsAtPos(view, $pos.pos, 1);
    for (let child = dom.firstChild; child; child = child.nextSibling) {
      let boxes;
      if (child.nodeType == 1) boxes = child.getClientRects();else if (child.nodeType == 3) boxes = textRange(child, 0, child.nodeValue.length).getClientRects();else continue;
      for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.bottom > box.top + 1 && (dir == "up" ? coords.top - box.top > (box.bottom - coords.top) * 2 : box.bottom - coords.bottom > (coords.bottom - box.top) * 2)) return false;
      }
    }
    return true;
  });
}
var maybeRTL = /[\u0590-\u08ac]/;
function endOfTextblockHorizontal(view, state, dir) {
  let {
    $head
  } = state.selection;
  if (!$head.parent.isTextblock) return false;
  let offset = $head.parentOffset,
    atStart = !offset,
    atEnd = offset == $head.parent.content.size;
  let sel = view.domSelection();
  if (!sel) return $head.pos == $head.start() || $head.pos == $head.end();
  if (!maybeRTL.test($head.parent.textContent) || !sel.modify) return dir == "left" || dir == "backward" ? atStart : atEnd;
  return withFlushedState(view, state, () => {
    let {
      focusNode: oldNode,
      focusOffset: oldOff,
      anchorNode,
      anchorOffset
    } = view.domSelectionRange();
    let oldBidiLevel = sel.caretBidiLevel;
    sel.modify("move", dir, "character");
    let parentDOM = $head.depth ? view.docView.domAfterPos($head.before()) : view.dom;
    let {
      focusNode: newNode,
      focusOffset: newOff
    } = view.domSelectionRange();
    let result = newNode && !parentDOM.contains(newNode.nodeType == 1 ? newNode : newNode.parentNode) || oldNode == newNode && oldOff == newOff;
    try {
      sel.collapse(anchorNode, anchorOffset);
      if (oldNode && (oldNode != anchorNode || oldOff != anchorOffset) && sel.extend) sel.extend(oldNode, oldOff);
    } catch (_) {}
    if (oldBidiLevel != null) sel.caretBidiLevel = oldBidiLevel;
    return result;
  });
}
var cachedState = null;
var cachedDir = null;
var cachedResult = false;
function endOfTextblock(view, state, dir) {
  if (cachedState == state && cachedDir == dir) return cachedResult;
  cachedState = state;
  cachedDir = dir;
  return cachedResult = dir == "up" || dir == "down" ? endOfTextblockVertical(view, state, dir) : endOfTextblockHorizontal(view, state, dir);
}
var NOT_DIRTY = 0,
  CHILD_DIRTY = 1,
  CONTENT_DIRTY = 2,
  NODE_DIRTY = 3;
var ViewDesc = class {
  constructor(parent, children, dom, contentDOM) {
    this.parent = parent;
    this.children = children;
    this.dom = dom;
    this.contentDOM = contentDOM;
    this.dirty = NOT_DIRTY;
    dom.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(widget) {
    return false;
  }
  matchesMark(mark) {
    return false;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return false;
  }
  matchesHack(nodeName) {
    return false;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(event) {
    return false;
  }
  // The size of the content represented by this desc.
  get size() {
    let size = 0;
    for (let i = 0; i < this.children.length; i++) size += this.children[i].size;
    return size;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0;
    if (this.dom.pmViewDesc == this) this.dom.pmViewDesc = void 0;
    for (let i = 0; i < this.children.length; i++) this.children[i].destroy();
  }
  posBeforeChild(child) {
    for (let i = 0, pos = this.posAtStart;; i++) {
      let cur = this.children[i];
      if (cur == child) return pos;
      pos += cur.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(dom, offset, bias) {
    if (this.contentDOM && this.contentDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode)) {
      if (bias < 0) {
        let domBefore, desc;
        if (dom == this.contentDOM) {
          domBefore = dom.childNodes[offset - 1];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domBefore = dom.previousSibling;
        }
        while (domBefore && !((desc = domBefore.pmViewDesc) && desc.parent == this)) domBefore = domBefore.previousSibling;
        return domBefore ? this.posBeforeChild(desc) + desc.size : this.posAtStart;
      } else {
        let domAfter, desc;
        if (dom == this.contentDOM) {
          domAfter = dom.childNodes[offset];
        } else {
          while (dom.parentNode != this.contentDOM) dom = dom.parentNode;
          domAfter = dom.nextSibling;
        }
        while (domAfter && !((desc = domAfter.pmViewDesc) && desc.parent == this)) domAfter = domAfter.nextSibling;
        return domAfter ? this.posBeforeChild(desc) : this.posAtEnd;
      }
    }
    let atEnd;
    if (dom == this.dom && this.contentDOM) {
      atEnd = offset > domIndex(this.contentDOM);
    } else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) {
      atEnd = dom.compareDocumentPosition(this.contentDOM) & 2;
    } else if (this.dom.firstChild) {
      if (offset == 0) for (let search = dom;; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = false;
          break;
        }
        if (search.previousSibling) break;
      }
      if (atEnd == null && offset == dom.childNodes.length) for (let search = dom;; search = search.parentNode) {
        if (search == this.dom) {
          atEnd = true;
          break;
        }
        if (search.nextSibling) break;
      }
    }
    return (atEnd == null ? bias > 0 : atEnd) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(dom, onlyNodes = false) {
    for (let first = true, cur = dom; cur; cur = cur.parentNode) {
      let desc = this.getDesc(cur),
        nodeDOM;
      if (desc && (!onlyNodes || desc.node)) {
        if (first && (nodeDOM = desc.nodeDOM) && !(nodeDOM.nodeType == 1 ? nodeDOM.contains(dom.nodeType == 1 ? dom : dom.parentNode) : nodeDOM == dom)) first = false;else return desc;
      }
    }
  }
  getDesc(dom) {
    let desc = dom.pmViewDesc;
    for (let cur = desc; cur; cur = cur.parent) if (cur == this) return desc;
  }
  posFromDOM(dom, offset, bias) {
    for (let scan = dom; scan; scan = scan.parentNode) {
      let desc = this.getDesc(scan);
      if (desc) return desc.localPosFromDOM(dom, offset, bias);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(pos) {
    for (let i = 0, offset = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (offset == pos && end != offset) {
        while (!child.border && child.children.length) {
          for (let i2 = 0; i2 < child.children.length; i2++) {
            let inner = child.children[i2];
            if (inner.size) {
              child = inner;
              break;
            }
          }
        }
        return child;
      }
      if (pos < end) return child.descAt(pos - offset - child.border);
      offset = end;
    }
  }
  domFromPos(pos, side) {
    if (!this.contentDOM) return {
      node: this.dom,
      offset: 0,
      atom: pos + 1
    };
    let i = 0,
      offset = 0;
    for (let curPos = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = curPos + child.size;
      if (end > pos || child instanceof TrailingHackViewDesc) {
        offset = pos - curPos;
        break;
      }
      curPos = end;
    }
    if (offset) return this.children[i].domFromPos(offset - this.children[i].border, side);
    for (let prev; i && !(prev = this.children[i - 1]).size && prev instanceof WidgetViewDesc && prev.side >= 0; i--) {}
    if (side <= 0) {
      let prev,
        enter = true;
      for (;; i--, enter = false) {
        prev = i ? this.children[i - 1] : null;
        if (!prev || prev.dom.parentNode == this.contentDOM) break;
      }
      if (prev && side && enter && !prev.border && !prev.domAtom) return prev.domFromPos(prev.size, side);
      return {
        node: this.contentDOM,
        offset: prev ? domIndex(prev.dom) + 1 : 0
      };
    } else {
      let next,
        enter = true;
      for (;; i++, enter = false) {
        next = i < this.children.length ? this.children[i] : null;
        if (!next || next.dom.parentNode == this.contentDOM) break;
      }
      if (next && enter && !next.border && !next.domAtom) return next.domFromPos(0, side);
      return {
        node: this.contentDOM,
        offset: next ? domIndex(next.dom) : this.contentDOM.childNodes.length
      };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(from, to, base = 0) {
    if (this.children.length == 0) return {
      node: this.contentDOM,
      from,
      to,
      fromOffset: 0,
      toOffset: this.contentDOM.childNodes.length
    };
    let fromOffset = -1,
      toOffset = -1;
    for (let offset = base, i = 0;; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (fromOffset == -1 && from <= end) {
        let childBase = offset + child.border;
        if (from >= childBase && to <= end - child.border && child.node && child.contentDOM && this.contentDOM.contains(child.contentDOM)) return child.parseRange(from, to, childBase);
        from = offset;
        for (let j = i; j > 0; j--) {
          let prev = this.children[j - 1];
          if (prev.size && prev.dom.parentNode == this.contentDOM && !prev.emptyChildAt(1)) {
            fromOffset = domIndex(prev.dom) + 1;
            break;
          }
          from -= prev.size;
        }
        if (fromOffset == -1) fromOffset = 0;
      }
      if (fromOffset > -1 && (end > to || i == this.children.length - 1)) {
        to = end;
        for (let j = i + 1; j < this.children.length; j++) {
          let next = this.children[j];
          if (next.size && next.dom.parentNode == this.contentDOM && !next.emptyChildAt(-1)) {
            toOffset = domIndex(next.dom);
            break;
          }
          to += next.size;
        }
        if (toOffset == -1) toOffset = this.contentDOM.childNodes.length;
        break;
      }
      offset = end;
    }
    return {
      node: this.contentDOM,
      from,
      to,
      fromOffset,
      toOffset
    };
  }
  emptyChildAt(side) {
    if (this.border || !this.contentDOM || !this.children.length) return false;
    let child = this.children[side < 0 ? 0 : this.children.length - 1];
    return child.size == 0 || child.emptyChildAt(side);
  }
  domAfterPos(pos) {
    let {
      node,
      offset
    } = this.domFromPos(pos, 0);
    if (node.nodeType != 1 || offset == node.childNodes.length) throw new RangeError("No node after pos " + pos);
    return node.childNodes[offset];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(anchor, head, view, force = false) {
    let from = Math.min(anchor, head),
      to = Math.max(anchor, head);
    for (let i = 0, offset = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (from > offset && to < end) return child.setSelection(anchor - offset - child.border, head - offset - child.border, view, force);
      offset = end;
    }
    let anchorDOM = this.domFromPos(anchor, anchor ? -1 : 1);
    let headDOM = head == anchor ? anchorDOM : this.domFromPos(head, head ? -1 : 1);
    let domSel = view.root.getSelection();
    let selRange = view.domSelectionRange();
    let brKludge = false;
    if ((gecko || safari) && anchor == head) {
      let {
        node,
        offset
      } = anchorDOM;
      if (node.nodeType == 3) {
        brKludge = !!(offset && node.nodeValue[offset - 1] == "\n");
        if (brKludge && offset == node.nodeValue.length) {
          for (let scan = node, after; scan; scan = scan.parentNode) {
            if (after = scan.nextSibling) {
              if (after.nodeName == "BR") anchorDOM = headDOM = {
                node: after.parentNode,
                offset: domIndex(after) + 1
              };
              break;
            }
            let desc = scan.pmViewDesc;
            if (desc && desc.node && desc.node.isBlock) break;
          }
        }
      } else {
        let prev = node.childNodes[offset - 1];
        brKludge = prev && (prev.nodeName == "BR" || prev.contentEditable == "false");
      }
    }
    if (gecko && selRange.focusNode && selRange.focusNode != headDOM.node && selRange.focusNode.nodeType == 1) {
      let after = selRange.focusNode.childNodes[selRange.focusOffset];
      if (after && after.contentEditable == "false") force = true;
    }
    if (!(force || brKludge && safari) && isEquivalentPosition(anchorDOM.node, anchorDOM.offset, selRange.anchorNode, selRange.anchorOffset) && isEquivalentPosition(headDOM.node, headDOM.offset, selRange.focusNode, selRange.focusOffset)) return;
    let domSelExtended = false;
    if ((domSel.extend || anchor == head) && !brKludge) {
      domSel.collapse(anchorDOM.node, anchorDOM.offset);
      try {
        if (anchor != head) domSel.extend(headDOM.node, headDOM.offset);
        domSelExtended = true;
      } catch (_) {}
    }
    if (!domSelExtended) {
      if (anchor > head) {
        let tmp = anchorDOM;
        anchorDOM = headDOM;
        headDOM = tmp;
      }
      let range = document.createRange();
      range.setEnd(headDOM.node, headDOM.offset);
      range.setStart(anchorDOM.node, anchorDOM.offset);
      domSel.removeAllRanges();
      domSel.addRange(range);
    }
  }
  ignoreMutation(mutation) {
    return !this.contentDOM && mutation.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(from, to) {
    for (let offset = 0, i = 0; i < this.children.length; i++) {
      let child = this.children[i],
        end = offset + child.size;
      if (offset == end ? from <= end && to >= offset : from < end && to > offset) {
        let startInside = offset + child.border,
          endInside = end - child.border;
        if (from >= startInside && to <= endInside) {
          this.dirty = from == offset || to == end ? CONTENT_DIRTY : CHILD_DIRTY;
          if (from == startInside && to == endInside && (child.contentLost || child.dom.parentNode != this.contentDOM)) child.dirty = NODE_DIRTY;else child.markDirty(from - startInside, to - startInside);
          return;
        } else {
          child.dirty = child.dom == child.contentDOM && child.dom.parentNode == this.contentDOM && !child.children.length ? CONTENT_DIRTY : NODE_DIRTY;
        }
      }
      offset = end;
    }
    this.dirty = CONTENT_DIRTY;
  }
  markParentsDirty() {
    let level = 1;
    for (let node = this.parent; node; node = node.parent, level++) {
      let dirty = level == 1 ? CONTENT_DIRTY : CHILD_DIRTY;
      if (node.dirty < dirty) node.dirty = dirty;
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(text) {
    return false;
  }
};
var WidgetViewDesc = class extends ViewDesc {
  constructor(parent, widget, view, pos) {
    let self,
      dom = widget.type.toDOM;
    if (typeof dom == "function") dom = dom(view, () => {
      if (!self) return pos;
      if (self.parent) return self.parent.posBeforeChild(self);
    });
    if (!widget.type.spec.raw) {
      if (dom.nodeType != 1) {
        let wrap = document.createElement("span");
        wrap.appendChild(dom);
        dom = wrap;
      }
      dom.contentEditable = "false";
      dom.classList.add("ProseMirror-widget");
    }
    super(parent, [], dom, null);
    this.widget = widget;
    this.widget = widget;
    self = this;
  }
  matchesWidget(widget) {
    return this.dirty == NOT_DIRTY && widget.type.eq(this.widget.type);
  }
  parseRule() {
    return {
      ignore: true
    };
  }
  stopEvent(event) {
    let stop = this.widget.spec.stopEvent;
    return stop ? stop(event) : false;
  }
  ignoreMutation(mutation) {
    return mutation.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
};
var CompositionViewDesc = class extends ViewDesc {
  constructor(parent, dom, textDOM, text) {
    super(parent, [], dom, null);
    this.textDOM = textDOM;
    this.text = text;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(dom, offset) {
    if (dom != this.textDOM) return this.posAtStart + (offset ? this.size : 0);
    return this.posAtStart + offset;
  }
  domFromPos(pos) {
    return {
      node: this.textDOM,
      offset: pos
    };
  }
  ignoreMutation(mut) {
    return mut.type === "characterData" && mut.target.nodeValue == mut.oldValue;
  }
};
var MarkViewDesc = class _MarkViewDesc extends ViewDesc {
  constructor(parent, mark, dom, contentDOM, spec) {
    super(parent, [], dom, contentDOM);
    this.mark = mark;
    this.spec = spec;
  }
  static create(parent, mark, inline, view) {
    let custom = view.nodeViews[mark.type.name];
    let spec = custom && custom(mark, view, inline);
    if (!spec || !spec.dom) spec = import_prosemirror_model.DOMSerializer.renderSpec(document, mark.type.spec.toDOM(mark, inline), null, mark.attrs);
    return new _MarkViewDesc(parent, mark, spec.dom, spec.contentDOM || spec.dom, spec);
  }
  parseRule() {
    if (this.dirty & NODE_DIRTY || this.mark.type.spec.reparseInView) return null;
    return {
      mark: this.mark.type.name,
      attrs: this.mark.attrs,
      contentElement: this.contentDOM
    };
  }
  matchesMark(mark) {
    return this.dirty != NODE_DIRTY && this.mark.eq(mark);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dirty != NOT_DIRTY) {
      let parent = this.parent;
      while (!parent.node) parent = parent.parent;
      if (parent.dirty < this.dirty) parent.dirty = this.dirty;
      this.dirty = NOT_DIRTY;
    }
  }
  slice(from, to, view) {
    let copy = _MarkViewDesc.create(this.parent, this.mark, true, view);
    let nodes = this.children,
      size = this.size;
    if (to < size) nodes = replaceNodes(nodes, to, size, view);
    if (from > 0) nodes = replaceNodes(nodes, 0, from, view);
    for (let i = 0; i < nodes.length; i++) nodes[i].parent = copy;
    copy.children = nodes;
    return copy;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
};
var NodeViewDesc = class _NodeViewDesc extends ViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos) {
    super(parent, [], dom, contentDOM);
    this.node = node;
    this.outerDeco = outerDeco;
    this.innerDeco = innerDeco;
    this.nodeDOM = nodeDOM;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(parent, node, outerDeco, innerDeco, view, pos) {
    let custom = view.nodeViews[node.type.name],
      descObj;
    let spec = custom && custom(node, view, () => {
      if (!descObj) return pos;
      if (descObj.parent) return descObj.parent.posBeforeChild(descObj);
    }, outerDeco, innerDeco);
    let dom = spec && spec.dom,
      contentDOM = spec && spec.contentDOM;
    if (node.isText) {
      if (!dom) dom = document.createTextNode(node.text);else if (dom.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
    } else if (!dom) {
      let spec2 = import_prosemirror_model.DOMSerializer.renderSpec(document, node.type.spec.toDOM(node), null, node.attrs);
      ({
        dom,
        contentDOM
      } = spec2);
    }
    if (!contentDOM && !node.isText && dom.nodeName != "BR") {
      if (!dom.hasAttribute("contenteditable")) dom.contentEditable = "false";
      if (node.type.spec.draggable) dom.draggable = true;
    }
    let nodeDOM = dom;
    dom = applyOuterDeco(dom, outerDeco, node);
    if (spec) return descObj = new CustomNodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, spec, view, pos + 1);else if (node.isText) return new TextViewDesc(parent, node, outerDeco, innerDeco, dom, nodeDOM, view);else return new _NodeViewDesc(parent, node, outerDeco, innerDeco, dom, contentDOM || null, nodeDOM, view, pos + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView) return null;
    let rule = {
      node: this.node.type.name,
      attrs: this.node.attrs
    };
    if (this.node.type.whitespace == "pre") rule.preserveWhitespace = "full";
    if (!this.contentDOM) {
      rule.getContent = () => this.node.content;
    } else if (!this.contentLost) {
      rule.contentElement = this.contentDOM;
    } else {
      for (let i = this.children.length - 1; i >= 0; i--) {
        let child = this.children[i];
        if (this.dom.contains(child.dom.parentNode)) {
          rule.contentElement = child.dom.parentNode;
          break;
        }
      }
      if (!rule.contentElement) rule.getContent = () => import_prosemirror_model.Fragment.empty;
    }
    return rule;
  }
  matchesNode(node, outerDeco, innerDeco) {
    return this.dirty == NOT_DIRTY && node.eq(this.node) && sameOuterDeco(outerDeco, this.outerDeco) && innerDeco.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(view, pos) {
    let inline = this.node.inlineContent,
      off = pos;
    let composition = view.composing ? this.localCompositionInfo(view, pos) : null;
    let localComposition = composition && composition.pos > -1 ? composition : null;
    let compositionInChild = composition && composition.pos < 0;
    let updater = new ViewTreeUpdater(this, localComposition && localComposition.node, view);
    iterDeco(this.node, this.innerDeco, (widget, i, insideNode) => {
      if (widget.spec.marks) updater.syncToMarks(widget.spec.marks, inline, view);else if (widget.type.side >= 0 && !insideNode) updater.syncToMarks(i == this.node.childCount ? import_prosemirror_model.Mark.none : this.node.child(i).marks, inline, view);
      updater.placeWidget(widget, view, off);
    }, (child, outerDeco, innerDeco, i) => {
      updater.syncToMarks(child.marks, inline, view);
      let compIndex;
      if (updater.findNodeMatch(child, outerDeco, innerDeco, i)) ;else if (compositionInChild && view.state.selection.from > off && view.state.selection.to < off + child.nodeSize && (compIndex = updater.findIndexWithChild(composition.node)) > -1 && updater.updateNodeAt(child, outerDeco, innerDeco, compIndex, view)) ;else if (updater.updateNextNode(child, outerDeco, innerDeco, view, i, off)) ;else {
        updater.addNode(child, outerDeco, innerDeco, view, off);
      }
      off += child.nodeSize;
    });
    updater.syncToMarks([], inline, view);
    if (this.node.isTextblock) updater.addTextblockHacks();
    updater.destroyRest();
    if (updater.changed || this.dirty == CONTENT_DIRTY) {
      if (localComposition) this.protectLocalComposition(view, localComposition);
      renderDescs(this.contentDOM, this.children, view);
      if (ios) iosHacks(this.dom);
    }
  }
  localCompositionInfo(view, pos) {
    let {
      from,
      to
    } = view.state.selection;
    if (!(view.state.selection instanceof import_prosemirror_state.TextSelection) || from < pos || to > pos + this.node.content.size) return null;
    let textNode = view.input.compositionNode;
    if (!textNode || !this.dom.contains(textNode.parentNode)) return null;
    if (this.node.inlineContent) {
      let text = textNode.nodeValue;
      let textPos = findTextInFragment(this.node.content, text, from - pos, to - pos);
      return textPos < 0 ? null : {
        node: textNode,
        pos: textPos,
        text
      };
    } else {
      return {
        node: textNode,
        pos: -1,
        text: ""
      };
    }
  }
  protectLocalComposition(view, {
    node,
    pos,
    text
  }) {
    if (this.getDesc(node)) return;
    let topNode = node;
    for (;; topNode = topNode.parentNode) {
      if (topNode.parentNode == this.contentDOM) break;
      while (topNode.previousSibling) topNode.parentNode.removeChild(topNode.previousSibling);
      while (topNode.nextSibling) topNode.parentNode.removeChild(topNode.nextSibling);
      if (topNode.pmViewDesc) topNode.pmViewDesc = void 0;
    }
    let desc = new CompositionViewDesc(this, topNode, node, text);
    view.input.compositionNodes.push(desc);
    this.children = replaceNodes(this.children, pos, pos + text.length, view, desc);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || !node.sameMarkup(this.node)) return false;
    this.updateInner(node, outerDeco, innerDeco, view);
    return true;
  }
  updateInner(node, outerDeco, innerDeco, view) {
    this.updateOuterDeco(outerDeco);
    this.node = node;
    this.innerDeco = innerDeco;
    if (this.contentDOM) this.updateChildren(view, this.posAtStart);
    this.dirty = NOT_DIRTY;
  }
  updateOuterDeco(outerDeco) {
    if (sameOuterDeco(outerDeco, this.outerDeco)) return;
    let needsWrap = this.nodeDOM.nodeType != 1;
    let oldDOM = this.dom;
    this.dom = patchOuterDeco(this.dom, this.nodeDOM, computeOuterDeco(this.outerDeco, this.node, needsWrap), computeOuterDeco(outerDeco, this.node, needsWrap));
    if (this.dom != oldDOM) {
      oldDOM.pmViewDesc = void 0;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = outerDeco;
  }
  // Mark this node as being the selected node.
  selectNode() {
    if (this.nodeDOM.nodeType == 1) this.nodeDOM.classList.add("ProseMirror-selectednode");
    if (this.contentDOM || !this.node.type.spec.draggable) this.dom.draggable = true;
  }
  // Remove selected node marking from this node.
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.remove("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) this.dom.removeAttribute("draggable");
    }
  }
  get domAtom() {
    return this.node.isAtom;
  }
};
function docViewDesc(doc2, outerDeco, innerDeco, dom, view) {
  applyOuterDeco(dom, outerDeco, doc2);
  let docView = new NodeViewDesc(void 0, doc2, outerDeco, innerDeco, dom, dom, dom, view, 0);
  if (docView.contentDOM) docView.updateChildren(view, 0);
  return docView;
}
var TextViewDesc = class _TextViewDesc extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, nodeDOM, view) {
    super(parent, node, outerDeco, innerDeco, dom, null, nodeDOM, view, 0);
  }
  parseRule() {
    let skip = this.nodeDOM.parentNode;
    while (skip && skip != this.dom && !skip.pmIsDeco) skip = skip.parentNode;
    return {
      skip: skip || true
    };
  }
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY || this.dirty != NOT_DIRTY && !this.inParent() || !node.sameMarkup(this.node)) return false;
    this.updateOuterDeco(outerDeco);
    if ((this.dirty != NOT_DIRTY || node.text != this.node.text) && node.text != this.nodeDOM.nodeValue) {
      this.nodeDOM.nodeValue = node.text;
      if (view.trackWrites == this.nodeDOM) view.trackWrites = null;
    }
    this.node = node;
    this.dirty = NOT_DIRTY;
    return true;
  }
  inParent() {
    let parentDOM = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode) if (n == parentDOM) return true;
    return false;
  }
  domFromPos(pos) {
    return {
      node: this.nodeDOM,
      offset: pos
    };
  }
  localPosFromDOM(dom, offset, bias) {
    if (dom == this.nodeDOM) return this.posAtStart + Math.min(offset, this.node.text.length);
    return super.localPosFromDOM(dom, offset, bias);
  }
  ignoreMutation(mutation) {
    return mutation.type != "characterData" && mutation.type != "selection";
  }
  slice(from, to, view) {
    let node = this.node.cut(from, to),
      dom = document.createTextNode(node.text);
    return new _TextViewDesc(this.parent, node, this.outerDeco, this.innerDeco, dom, dom, view);
  }
  markDirty(from, to) {
    super.markDirty(from, to);
    if (this.dom != this.nodeDOM && (from == 0 || to == this.nodeDOM.nodeValue.length)) this.dirty = NODE_DIRTY;
  }
  get domAtom() {
    return false;
  }
  isText(text) {
    return this.node.text == text;
  }
};
var TrailingHackViewDesc = class extends ViewDesc {
  parseRule() {
    return {
      ignore: true
    };
  }
  matchesHack(nodeName) {
    return this.dirty == NOT_DIRTY && this.dom.nodeName == nodeName;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
};
var CustomNodeViewDesc = class extends NodeViewDesc {
  constructor(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, spec, view, pos) {
    super(parent, node, outerDeco, innerDeco, dom, contentDOM, nodeDOM, view, pos);
    this.spec = spec;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(node, outerDeco, innerDeco, view) {
    if (this.dirty == NODE_DIRTY) return false;
    if (this.spec.update && (this.node.type == node.type || this.spec.multiType)) {
      let result = this.spec.update(node, outerDeco, innerDeco);
      if (result) this.updateInner(node, outerDeco, innerDeco, view);
      return result;
    } else if (!this.contentDOM && !node.isLeaf) {
      return false;
    } else {
      return super.update(node, outerDeco, innerDeco, view);
    }
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(anchor, head, view, force) {
    this.spec.setSelection ? this.spec.setSelection(anchor, head, view.root) : super.setSelection(anchor, head, view, force);
  }
  destroy() {
    if (this.spec.destroy) this.spec.destroy();
    super.destroy();
  }
  stopEvent(event) {
    return this.spec.stopEvent ? this.spec.stopEvent(event) : false;
  }
  ignoreMutation(mutation) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(mutation) : super.ignoreMutation(mutation);
  }
};
function renderDescs(parentDOM, descs, view) {
  let dom = parentDOM.firstChild,
    written = false;
  for (let i = 0; i < descs.length; i++) {
    let desc = descs[i],
      childDOM = desc.dom;
    if (childDOM.parentNode == parentDOM) {
      while (childDOM != dom) {
        dom = rm(dom);
        written = true;
      }
      dom = dom.nextSibling;
    } else {
      written = true;
      parentDOM.insertBefore(childDOM, dom);
    }
    if (desc instanceof MarkViewDesc) {
      let pos = dom ? dom.previousSibling : parentDOM.lastChild;
      renderDescs(desc.contentDOM, desc.children, view);
      dom = pos ? pos.nextSibling : parentDOM.firstChild;
    }
  }
  while (dom) {
    dom = rm(dom);
    written = true;
  }
  if (written && view.trackWrites == parentDOM) view.trackWrites = null;
}
var OuterDecoLevel = function (nodeName) {
  if (nodeName) this.nodeName = nodeName;
};
OuterDecoLevel.prototype = /* @__PURE__ */Object.create(null);
var noDeco = [new OuterDecoLevel()];
function computeOuterDeco(outerDeco, node, needsWrap) {
  if (outerDeco.length == 0) return noDeco;
  let top = needsWrap ? noDeco[0] : new OuterDecoLevel(),
    result = [top];
  for (let i = 0; i < outerDeco.length; i++) {
    let attrs = outerDeco[i].type.attrs;
    if (!attrs) continue;
    if (attrs.nodeName) result.push(top = new OuterDecoLevel(attrs.nodeName));
    for (let name in attrs) {
      let val = attrs[name];
      if (val == null) continue;
      if (needsWrap && result.length == 1) result.push(top = new OuterDecoLevel(node.isInline ? "span" : "div"));
      if (name == "class") top.class = (top.class ? top.class + " " : "") + val;else if (name == "style") top.style = (top.style ? top.style + ";" : "") + val;else if (name != "nodeName") top[name] = val;
    }
  }
  return result;
}
function patchOuterDeco(outerDOM, nodeDOM, prevComputed, curComputed) {
  if (prevComputed == noDeco && curComputed == noDeco) return nodeDOM;
  let curDOM = nodeDOM;
  for (let i = 0; i < curComputed.length; i++) {
    let deco = curComputed[i],
      prev = prevComputed[i];
    if (i) {
      let parent;
      if (prev && prev.nodeName == deco.nodeName && curDOM != outerDOM && (parent = curDOM.parentNode) && parent.nodeName.toLowerCase() == deco.nodeName) {
        curDOM = parent;
      } else {
        parent = document.createElement(deco.nodeName);
        parent.pmIsDeco = true;
        parent.appendChild(curDOM);
        prev = noDeco[0];
        curDOM = parent;
      }
    }
    patchAttributes(curDOM, prev || noDeco[0], deco);
  }
  return curDOM;
}
function patchAttributes(dom, prev, cur) {
  for (let name in prev) if (name != "class" && name != "style" && name != "nodeName" && !(name in cur)) dom.removeAttribute(name);
  for (let name in cur) if (name != "class" && name != "style" && name != "nodeName" && cur[name] != prev[name]) dom.setAttribute(name, cur[name]);
  if (prev.class != cur.class) {
    let prevList = prev.class ? prev.class.split(" ").filter(Boolean) : [];
    let curList = cur.class ? cur.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < prevList.length; i++) if (curList.indexOf(prevList[i]) == -1) dom.classList.remove(prevList[i]);
    for (let i = 0; i < curList.length; i++) if (prevList.indexOf(curList[i]) == -1) dom.classList.add(curList[i]);
    if (dom.classList.length == 0) dom.removeAttribute("class");
  }
  if (prev.style != cur.style) {
    if (prev.style) {
      let prop = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
        m;
      while (m = prop.exec(prev.style)) dom.style.removeProperty(m[1]);
    }
    if (cur.style) dom.style.cssText += cur.style;
  }
}
function applyOuterDeco(dom, deco, node) {
  return patchOuterDeco(dom, dom, noDeco, computeOuterDeco(deco, node, dom.nodeType != 1));
}
function sameOuterDeco(a, b) {
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; i++) if (!a[i].type.eq(b[i].type)) return false;
  return true;
}
function rm(dom) {
  let next = dom.nextSibling;
  dom.parentNode.removeChild(dom);
  return next;
}
var ViewTreeUpdater = class {
  constructor(top, lock, view) {
    this.lock = lock;
    this.view = view;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = top;
    this.preMatch = preMatch(top.node.content, top);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(start, end) {
    if (start == end) return;
    for (let i = start; i < end; i++) this.top.children[i].destroy();
    this.top.children.splice(start, end - start);
    this.changed = true;
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(marks, inline, view) {
    let keep = 0,
      depth = this.stack.length >> 1;
    let maxKeep = Math.min(depth, marks.length);
    while (keep < maxKeep && (keep == depth - 1 ? this.top : this.stack[keep + 1 << 1]).matchesMark(marks[keep]) && marks[keep].type.spec.spanning !== false) keep++;
    while (keep < depth) {
      this.destroyRest();
      this.top.dirty = NOT_DIRTY;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      depth--;
    }
    while (depth < marks.length) {
      this.stack.push(this.top, this.index + 1);
      let found = -1;
      for (let i = this.index; i < Math.min(this.index + 3, this.top.children.length); i++) {
        let next = this.top.children[i];
        if (next.matchesMark(marks[depth]) && !this.isLocked(next.dom)) {
          found = i;
          break;
        }
      }
      if (found > -1) {
        if (found > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, found);
        }
        this.top = this.top.children[this.index];
      } else {
        let markDesc = MarkViewDesc.create(this.top, marks[depth], inline, view);
        this.top.children.splice(this.index, 0, markDesc);
        this.top = markDesc;
        this.changed = true;
      }
      this.index = 0;
      depth++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(node, outerDeco, innerDeco, index) {
    let found = -1,
      targetDesc;
    if (index >= this.preMatch.index && (targetDesc = this.preMatch.matches[index - this.preMatch.index]).parent == this.top && targetDesc.matchesNode(node, outerDeco, innerDeco)) {
      found = this.top.children.indexOf(targetDesc, this.index);
    } else {
      for (let i = this.index, e = Math.min(this.top.children.length, i + 5); i < e; i++) {
        let child = this.top.children[i];
        if (child.matchesNode(node, outerDeco, innerDeco) && !this.preMatch.matched.has(child)) {
          found = i;
          break;
        }
      }
    }
    if (found < 0) return false;
    this.destroyBetween(this.index, found);
    this.index++;
    return true;
  }
  updateNodeAt(node, outerDeco, innerDeco, index, view) {
    let child = this.top.children[index];
    if (child.dirty == NODE_DIRTY && child.dom == child.contentDOM) child.dirty = CONTENT_DIRTY;
    if (!child.update(node, outerDeco, innerDeco, view)) return false;
    this.destroyBetween(this.index, index);
    this.index++;
    return true;
  }
  findIndexWithChild(domNode) {
    for (;;) {
      let parent = domNode.parentNode;
      if (!parent) return -1;
      if (parent == this.top.contentDOM) {
        let desc = domNode.pmViewDesc;
        if (desc) for (let i = this.index; i < this.top.children.length; i++) {
          if (this.top.children[i] == desc) return i;
        }
        return -1;
      }
      domNode = parent;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(node, outerDeco, innerDeco, view, index, pos) {
    for (let i = this.index; i < this.top.children.length; i++) {
      let next = this.top.children[i];
      if (next instanceof NodeViewDesc) {
        let preMatch2 = this.preMatch.matched.get(next);
        if (preMatch2 != null && preMatch2 != index) return false;
        let nextDOM = next.dom,
          updated;
        let locked = this.isLocked(nextDOM) && !(node.isText && next.node && next.node.isText && next.nodeDOM.nodeValue == node.text && next.dirty != NODE_DIRTY && sameOuterDeco(outerDeco, next.outerDeco));
        if (!locked && next.update(node, outerDeco, innerDeco, view)) {
          this.destroyBetween(this.index, i);
          if (next.dom != nextDOM) this.changed = true;
          this.index++;
          return true;
        } else if (!locked && (updated = this.recreateWrapper(next, node, outerDeco, innerDeco, view, pos))) {
          this.destroyBetween(this.index, i);
          this.top.children[this.index] = updated;
          if (updated.contentDOM) {
            updated.dirty = CONTENT_DIRTY;
            updated.updateChildren(view, pos + 1);
            updated.dirty = NOT_DIRTY;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(next, node, outerDeco, innerDeco, view, pos) {
    if (next.dirty || node.isAtom || !next.children.length || !next.node.content.eq(node.content) || !sameOuterDeco(outerDeco, next.outerDeco) || !innerDeco.eq(next.innerDeco)) return null;
    let wrapper = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (wrapper.contentDOM) {
      wrapper.children = next.children;
      next.children = [];
      for (let ch of wrapper.children) ch.parent = wrapper;
    }
    next.destroy();
    return wrapper;
  }
  // Insert the node as a newly created node desc.
  addNode(node, outerDeco, innerDeco, view, pos) {
    let desc = NodeViewDesc.create(this.top, node, outerDeco, innerDeco, view, pos);
    if (desc.contentDOM) desc.updateChildren(view, pos + 1);
    this.top.children.splice(this.index++, 0, desc);
    this.changed = true;
  }
  placeWidget(widget, view, pos) {
    let next = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (next && next.matchesWidget(widget) && (widget == next.widget || !next.widget.type.toDOM.parentNode)) {
      this.index++;
    } else {
      let desc = new WidgetViewDesc(this.top, widget, view, pos);
      this.top.children.splice(this.index++, 0, desc);
      this.changed = true;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let lastChild = this.top.children[this.index - 1],
      parent = this.top;
    while (lastChild instanceof MarkViewDesc) {
      parent = lastChild;
      lastChild = parent.children[parent.children.length - 1];
    }
    if (!lastChild ||
    // Empty textblock
    !(lastChild instanceof TextViewDesc) || /\n$/.test(lastChild.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(lastChild.node.text)) {
      if ((safari || chrome) && lastChild && lastChild.dom.contentEditable == "false") this.addHackNode("IMG", parent);
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(nodeName, parent) {
    if (parent == this.top && this.index < parent.children.length && parent.children[this.index].matchesHack(nodeName)) {
      this.index++;
    } else {
      let dom = document.createElement(nodeName);
      if (nodeName == "IMG") {
        dom.className = "ProseMirror-separator";
        dom.alt = "";
      }
      if (nodeName == "BR") dom.className = "ProseMirror-trailingBreak";
      let hack = new TrailingHackViewDesc(this.top, [], dom, null);
      if (parent != this.top) parent.children.push(hack);else parent.children.splice(this.index++, 0, hack);
      this.changed = true;
    }
  }
  isLocked(node) {
    return this.lock && (node == this.lock || node.nodeType == 1 && node.contains(this.lock.parentNode));
  }
};
function preMatch(frag, parentDesc) {
  let curDesc = parentDesc,
    descI = curDesc.children.length;
  let fI = frag.childCount,
    matched = /* @__PURE__ */new Map(),
    matches = [];
  outer: while (fI > 0) {
    let desc;
    for (;;) {
      if (descI) {
        let next = curDesc.children[descI - 1];
        if (next instanceof MarkViewDesc) {
          curDesc = next;
          descI = next.children.length;
        } else {
          desc = next;
          descI--;
          break;
        }
      } else if (curDesc == parentDesc) {
        break outer;
      } else {
        descI = curDesc.parent.children.indexOf(curDesc);
        curDesc = curDesc.parent;
      }
    }
    let node = desc.node;
    if (!node) continue;
    if (node != frag.child(fI - 1)) break;
    --fI;
    matched.set(desc, fI);
    matches.push(desc);
  }
  return {
    index: fI,
    matched,
    matches: matches.reverse()
  };
}
function compareSide(a, b) {
  return a.type.side - b.type.side;
}
function iterDeco(parent, deco, onWidget, onNode) {
  let locals = deco.locals(parent),
    offset = 0;
  if (locals.length == 0) {
    for (let i = 0; i < parent.childCount; i++) {
      let child = parent.child(i);
      onNode(child, locals, deco.forChild(offset, child), i);
      offset += child.nodeSize;
    }
    return;
  }
  let decoIndex = 0,
    active = [],
    restNode = null;
  for (let parentIndex = 0;;) {
    let widget, widgets;
    while (decoIndex < locals.length && locals[decoIndex].to == offset) {
      let next = locals[decoIndex++];
      if (next.widget) {
        if (!widget) widget = next;else (widgets || (widgets = [widget])).push(next);
      }
    }
    if (widget) {
      if (widgets) {
        widgets.sort(compareSide);
        for (let i = 0; i < widgets.length; i++) onWidget(widgets[i], parentIndex, !!restNode);
      } else {
        onWidget(widget, parentIndex, !!restNode);
      }
    }
    let child, index;
    if (restNode) {
      index = -1;
      child = restNode;
      restNode = null;
    } else if (parentIndex < parent.childCount) {
      index = parentIndex;
      child = parent.child(parentIndex++);
    } else {
      break;
    }
    for (let i = 0; i < active.length; i++) if (active[i].to <= offset) active.splice(i--, 1);
    while (decoIndex < locals.length && locals[decoIndex].from <= offset && locals[decoIndex].to > offset) active.push(locals[decoIndex++]);
    let end = offset + child.nodeSize;
    if (child.isText) {
      let cutAt = end;
      if (decoIndex < locals.length && locals[decoIndex].from < cutAt) cutAt = locals[decoIndex].from;
      for (let i = 0; i < active.length; i++) if (active[i].to < cutAt) cutAt = active[i].to;
      if (cutAt < end) {
        restNode = child.cut(cutAt - offset);
        child = child.cut(0, cutAt - offset);
        end = cutAt;
        index = -1;
      }
    } else {
      while (decoIndex < locals.length && locals[decoIndex].to < end) decoIndex++;
    }
    let outerDeco = child.isInline && !child.isLeaf ? active.filter(d => !d.inline) : active.slice();
    onNode(child, outerDeco, deco.forChild(offset, child), index);
    offset = end;
  }
}
function iosHacks(dom) {
  if (dom.nodeName == "UL" || dom.nodeName == "OL") {
    let oldCSS = dom.style.cssText;
    dom.style.cssText = oldCSS + "; list-style: square !important";
    window.getComputedStyle(dom).listStyle;
    dom.style.cssText = oldCSS;
  }
}
function findTextInFragment(frag, text, from, to) {
  for (let i = 0, pos = 0; i < frag.childCount && pos <= to;) {
    let child = frag.child(i++),
      childStart = pos;
    pos += child.nodeSize;
    if (!child.isText) continue;
    let str = child.text;
    while (i < frag.childCount) {
      let next = frag.child(i++);
      pos += next.nodeSize;
      if (!next.isText) break;
      str += next.text;
    }
    if (pos >= from) {
      if (pos >= to && str.slice(to - text.length - childStart, to - childStart) == text) return to - text.length;
      let found = childStart < to ? str.lastIndexOf(text, to - childStart - 1) : -1;
      if (found >= 0 && found + text.length + childStart >= from) return childStart + found;
      if (from == to && str.length >= to + text.length - childStart && str.slice(to - childStart, to - childStart + text.length) == text) return to;
    }
  }
  return -1;
}
function replaceNodes(nodes, from, to, view, replacement) {
  let result = [];
  for (let i = 0, off = 0; i < nodes.length; i++) {
    let child = nodes[i],
      start = off,
      end = off += child.size;
    if (start >= to || end <= from) {
      result.push(child);
    } else {
      if (start < from) result.push(child.slice(0, from - start, view));
      if (replacement) {
        result.push(replacement);
        replacement = void 0;
      }
      if (end > to) result.push(child.slice(to - start, child.size, view));
    }
  }
  return result;
}
function selectionFromDOM(view, origin = null) {
  let domSel = view.domSelectionRange(),
    doc2 = view.state.doc;
  if (!domSel.focusNode) return null;
  let nearestDesc = view.docView.nearestDesc(domSel.focusNode),
    inWidget = nearestDesc && nearestDesc.size == 0;
  let head = view.docView.posFromDOM(domSel.focusNode, domSel.focusOffset, 1);
  if (head < 0) return null;
  let $head = doc2.resolve(head),
    anchor,
    selection;
  if (selectionCollapsed(domSel)) {
    anchor = head;
    while (nearestDesc && !nearestDesc.node) nearestDesc = nearestDesc.parent;
    let nearestDescNode = nearestDesc.node;
    if (nearestDesc && nearestDescNode.isAtom && import_prosemirror_state.NodeSelection.isSelectable(nearestDescNode) && nearestDesc.parent && !(nearestDescNode.isInline && isOnEdge(domSel.focusNode, domSel.focusOffset, nearestDesc.dom))) {
      let pos = nearestDesc.posBefore;
      selection = new import_prosemirror_state.NodeSelection(head == pos ? $head : doc2.resolve(pos));
    }
  } else {
    if (domSel instanceof view.dom.ownerDocument.defaultView.Selection && domSel.rangeCount > 1) {
      let min = head,
        max = head;
      for (let i = 0; i < domSel.rangeCount; i++) {
        let range = domSel.getRangeAt(i);
        min = Math.min(min, view.docView.posFromDOM(range.startContainer, range.startOffset, 1));
        max = Math.max(max, view.docView.posFromDOM(range.endContainer, range.endOffset, -1));
      }
      if (min < 0) return null;
      [anchor, head] = max == view.state.selection.anchor ? [max, min] : [min, max];
      $head = doc2.resolve(head);
    } else {
      anchor = view.docView.posFromDOM(domSel.anchorNode, domSel.anchorOffset, 1);
    }
    if (anchor < 0) return null;
  }
  let $anchor = doc2.resolve(anchor);
  if (!selection) {
    let bias = origin == "pointer" || view.state.selection.head < $head.pos && !inWidget ? 1 : -1;
    selection = selectionBetween(view, $anchor, $head, bias);
  }
  return selection;
}
function editorOwnsSelection(view) {
  return view.editable ? view.hasFocus() : hasSelection(view) && document.activeElement && document.activeElement.contains(view.dom);
}
function selectionToDOM(view, force = false) {
  let sel = view.state.selection;
  syncNodeSelection(view, sel);
  if (!editorOwnsSelection(view)) return;
  if (!force && view.input.mouseDown && view.input.mouseDown.allowDefault && chrome) {
    let domSel = view.domSelectionRange(),
      curSel = view.domObserver.currentSelection;
    if (domSel.anchorNode && curSel.anchorNode && isEquivalentPosition(domSel.anchorNode, domSel.anchorOffset, curSel.anchorNode, curSel.anchorOffset)) {
      view.input.mouseDown.delayedSelectionSync = true;
      view.domObserver.setCurSelection();
      return;
    }
  }
  view.domObserver.disconnectSelection();
  if (view.cursorWrapper) {
    selectCursorWrapper(view);
  } else {
    let {
        anchor,
        head
      } = sel,
      resetEditableFrom,
      resetEditableTo;
    if (brokenSelectBetweenUneditable && !(sel instanceof import_prosemirror_state.TextSelection)) {
      if (!sel.$from.parent.inlineContent) resetEditableFrom = temporarilyEditableNear(view, sel.from);
      if (!sel.empty && !sel.$from.parent.inlineContent) resetEditableTo = temporarilyEditableNear(view, sel.to);
    }
    view.docView.setSelection(anchor, head, view, force);
    if (brokenSelectBetweenUneditable) {
      if (resetEditableFrom) resetEditable(resetEditableFrom);
      if (resetEditableTo) resetEditable(resetEditableTo);
    }
    if (sel.visible) {
      view.dom.classList.remove("ProseMirror-hideselection");
    } else {
      view.dom.classList.add("ProseMirror-hideselection");
      if ("onselectionchange" in document) removeClassOnSelectionChange(view);
    }
  }
  view.domObserver.setCurSelection();
  view.domObserver.connectSelection();
}
var brokenSelectBetweenUneditable = safari || chrome && chrome_version < 63;
function temporarilyEditableNear(view, pos) {
  let {
    node,
    offset
  } = view.docView.domFromPos(pos, 0);
  let after = offset < node.childNodes.length ? node.childNodes[offset] : null;
  let before = offset ? node.childNodes[offset - 1] : null;
  if (safari && after && after.contentEditable == "false") return setEditable(after);
  if ((!after || after.contentEditable == "false") && (!before || before.contentEditable == "false")) {
    if (after) return setEditable(after);else if (before) return setEditable(before);
  }
}
function setEditable(element) {
  element.contentEditable = "true";
  if (safari && element.draggable) {
    element.draggable = false;
    element.wasDraggable = true;
  }
  return element;
}
function resetEditable(element) {
  element.contentEditable = "false";
  if (element.wasDraggable) {
    element.draggable = true;
    element.wasDraggable = null;
  }
}
function removeClassOnSelectionChange(view) {
  let doc2 = view.dom.ownerDocument;
  doc2.removeEventListener("selectionchange", view.input.hideSelectionGuard);
  let domSel = view.domSelectionRange();
  let node = domSel.anchorNode,
    offset = domSel.anchorOffset;
  doc2.addEventListener("selectionchange", view.input.hideSelectionGuard = () => {
    if (domSel.anchorNode != node || domSel.anchorOffset != offset) {
      doc2.removeEventListener("selectionchange", view.input.hideSelectionGuard);
      setTimeout(() => {
        if (!editorOwnsSelection(view) || view.state.selection.visible) view.dom.classList.remove("ProseMirror-hideselection");
      }, 20);
    }
  });
}
function selectCursorWrapper(view) {
  let domSel = view.domSelection(),
    range = document.createRange();
  if (!domSel) return;
  let node = view.cursorWrapper.dom,
    img = node.nodeName == "IMG";
  if (img) range.setStart(node.parentNode, domIndex(node) + 1);else range.setStart(node, 0);
  range.collapse(true);
  domSel.removeAllRanges();
  domSel.addRange(range);
  if (!img && !view.state.selection.visible && ie && ie_version <= 11) {
    node.disabled = true;
    node.disabled = false;
  }
}
function syncNodeSelection(view, sel) {
  if (sel instanceof import_prosemirror_state.NodeSelection) {
    let desc = view.docView.descAt(sel.from);
    if (desc != view.lastSelectedViewDesc) {
      clearNodeSelection(view);
      if (desc) desc.selectNode();
      view.lastSelectedViewDesc = desc;
    }
  } else {
    clearNodeSelection(view);
  }
}
function clearNodeSelection(view) {
  if (view.lastSelectedViewDesc) {
    if (view.lastSelectedViewDesc.parent) view.lastSelectedViewDesc.deselectNode();
    view.lastSelectedViewDesc = void 0;
  }
}
function selectionBetween(view, $anchor, $head, bias) {
  return view.someProp("createSelectionBetween", f => f(view, $anchor, $head)) || import_prosemirror_state.TextSelection.between($anchor, $head, bias);
}
function hasFocusAndSelection(view) {
  if (view.editable && !view.hasFocus()) return false;
  return hasSelection(view);
}
function hasSelection(view) {
  let sel = view.domSelectionRange();
  if (!sel.anchorNode) return false;
  try {
    return view.dom.contains(sel.anchorNode.nodeType == 3 ? sel.anchorNode.parentNode : sel.anchorNode) && (view.editable || view.dom.contains(sel.focusNode.nodeType == 3 ? sel.focusNode.parentNode : sel.focusNode));
  } catch (_) {
    return false;
  }
}
function anchorInRightPlace(view) {
  let anchorDOM = view.docView.domFromPos(view.state.selection.anchor, 0);
  let domSel = view.domSelectionRange();
  return isEquivalentPosition(anchorDOM.node, anchorDOM.offset, domSel.anchorNode, domSel.anchorOffset);
}
function moveSelectionBlock(state, dir) {
  let {
    $anchor,
    $head
  } = state.selection;
  let $side = dir > 0 ? $anchor.max($head) : $anchor.min($head);
  let $start = !$side.parent.inlineContent ? $side : $side.depth ? state.doc.resolve(dir > 0 ? $side.after() : $side.before()) : null;
  return $start && import_prosemirror_state.Selection.findFrom($start, dir);
}
function apply(view, sel) {
  view.dispatch(view.state.tr.setSelection(sel).scrollIntoView());
  return true;
}
function selectHorizontally(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof import_prosemirror_state.TextSelection) {
    if (mods.indexOf("s") > -1) {
      let {
          $head
        } = sel,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter;
      if (!node || node.isText || !node.isLeaf) return false;
      let $newHead = view.state.doc.resolve($head.pos + node.nodeSize * (dir < 0 ? -1 : 1));
      return apply(view, new import_prosemirror_state.TextSelection(sel.$anchor, $newHead));
    } else if (!sel.empty) {
      return false;
    } else if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) {
      let next = moveSelectionBlock(view.state, dir);
      if (next && next instanceof import_prosemirror_state.NodeSelection) return apply(view, next);
      return false;
    } else if (!(mac && mods.indexOf("m") > -1)) {
      let $head = sel.$head,
        node = $head.textOffset ? null : dir < 0 ? $head.nodeBefore : $head.nodeAfter,
        desc;
      if (!node || node.isText) return false;
      let nodePos = dir < 0 ? $head.pos - node.nodeSize : $head.pos;
      if (!(node.isAtom || (desc = view.docView.descAt(nodePos)) && !desc.contentDOM)) return false;
      if (import_prosemirror_state.NodeSelection.isSelectable(node)) {
        return apply(view, new import_prosemirror_state.NodeSelection(dir < 0 ? view.state.doc.resolve($head.pos - node.nodeSize) : $head));
      } else if (webkit) {
        return apply(view, new import_prosemirror_state.TextSelection(view.state.doc.resolve(dir < 0 ? nodePos : nodePos + node.nodeSize)));
      } else {
        return false;
      }
    }
  } else if (sel instanceof import_prosemirror_state.NodeSelection && sel.node.isInline) {
    return apply(view, new import_prosemirror_state.TextSelection(dir > 0 ? sel.$to : sel.$from));
  } else {
    let next = moveSelectionBlock(view.state, dir);
    if (next) return apply(view, next);
    return false;
  }
}
function nodeLen(node) {
  return node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length;
}
function isIgnorable(dom, dir) {
  let desc = dom.pmViewDesc;
  return desc && desc.size == 0 && (dir < 0 || dom.nextSibling || dom.nodeName != "BR");
}
function skipIgnoredNodes(view, dir) {
  return dir < 0 ? skipIgnoredNodesBefore(view) : skipIgnoredNodesAfter(view);
}
function skipIgnoredNodesBefore(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  let moveNode,
    moveOffset,
    force = false;
  if (gecko && node.nodeType == 1 && offset < nodeLen(node) && isIgnorable(node.childNodes[offset], -1)) force = true;
  for (;;) {
    if (offset > 0) {
      if (node.nodeType != 1) {
        break;
      } else {
        let before = node.childNodes[offset - 1];
        if (isIgnorable(before, -1)) {
          moveNode = node;
          moveOffset = --offset;
        } else if (before.nodeType == 3) {
          node = before;
          offset = node.nodeValue.length;
        } else break;
      }
    } else if (isBlockNode(node)) {
      break;
    } else {
      let prev = node.previousSibling;
      while (prev && isIgnorable(prev, -1)) {
        moveNode = node.parentNode;
        moveOffset = domIndex(prev);
        prev = prev.previousSibling;
      }
      if (!prev) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = 0;
      } else {
        node = prev;
        offset = nodeLen(node);
      }
    }
  }
  if (force) setSelFocus(view, node, offset);else if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function skipIgnoredNodesAfter(view) {
  let sel = view.domSelectionRange();
  let node = sel.focusNode,
    offset = sel.focusOffset;
  if (!node) return;
  let len = nodeLen(node);
  let moveNode, moveOffset;
  for (;;) {
    if (offset < len) {
      if (node.nodeType != 1) break;
      let after = node.childNodes[offset];
      if (isIgnorable(after, 1)) {
        moveNode = node;
        moveOffset = ++offset;
      } else break;
    } else if (isBlockNode(node)) {
      break;
    } else {
      let next = node.nextSibling;
      while (next && isIgnorable(next, 1)) {
        moveNode = next.parentNode;
        moveOffset = domIndex(next) + 1;
        next = next.nextSibling;
      }
      if (!next) {
        node = node.parentNode;
        if (node == view.dom) break;
        offset = len = 0;
      } else {
        node = next;
        offset = 0;
        len = nodeLen(node);
      }
    }
  }
  if (moveNode) setSelFocus(view, moveNode, moveOffset);
}
function isBlockNode(dom) {
  let desc = dom.pmViewDesc;
  return desc && desc.node && desc.node.isBlock;
}
function textNodeAfter(node, offset) {
  while (node && offset == node.childNodes.length && !hasBlockDesc(node)) {
    offset = domIndex(node) + 1;
    node = node.parentNode;
  }
  while (node && offset < node.childNodes.length) {
    let next = node.childNodes[offset];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = 0;
  }
}
function textNodeBefore(node, offset) {
  while (node && !offset && !hasBlockDesc(node)) {
    offset = domIndex(node);
    node = node.parentNode;
  }
  while (node && offset) {
    let next = node.childNodes[offset - 1];
    if (next.nodeType == 3) return next;
    if (next.nodeType == 1 && next.contentEditable == "false") break;
    node = next;
    offset = node.childNodes.length;
  }
}
function setSelFocus(view, node, offset) {
  if (node.nodeType != 3) {
    let before, after;
    if (after = textNodeAfter(node, offset)) {
      node = after;
      offset = 0;
    } else if (before = textNodeBefore(node, offset)) {
      node = before;
      offset = before.nodeValue.length;
    }
  }
  let sel = view.domSelection();
  if (!sel) return;
  if (selectionCollapsed(sel)) {
    let range = document.createRange();
    range.setEnd(node, offset);
    range.setStart(node, offset);
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (sel.extend) {
    sel.extend(node, offset);
  }
  view.domObserver.setCurSelection();
  let {
    state
  } = view;
  setTimeout(() => {
    if (view.state == state) selectionToDOM(view);
  }, 50);
}
function findDirection(view, pos) {
  let $pos = view.state.doc.resolve(pos);
  if (!(chrome || windows) && $pos.parent.inlineContent) {
    let coords = view.coordsAtPos(pos);
    if (pos > $pos.start()) {
      let before = view.coordsAtPos(pos - 1);
      let mid = (before.top + before.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(before.left - coords.left) > 1) return before.left < coords.left ? "ltr" : "rtl";
    }
    if (pos < $pos.end()) {
      let after = view.coordsAtPos(pos + 1);
      let mid = (after.top + after.bottom) / 2;
      if (mid > coords.top && mid < coords.bottom && Math.abs(after.left - coords.left) > 1) return after.left > coords.left ? "ltr" : "rtl";
    }
  }
  let computed = getComputedStyle(view.dom).direction;
  return computed == "rtl" ? "rtl" : "ltr";
}
function selectVertically(view, dir, mods) {
  let sel = view.state.selection;
  if (sel instanceof import_prosemirror_state.TextSelection && !sel.empty || mods.indexOf("s") > -1) return false;
  if (mac && mods.indexOf("m") > -1) return false;
  let {
    $from,
    $to
  } = sel;
  if (!$from.parent.inlineContent || view.endOfTextblock(dir < 0 ? "up" : "down")) {
    let next = moveSelectionBlock(view.state, dir);
    if (next && next instanceof import_prosemirror_state.NodeSelection) return apply(view, next);
  }
  if (!$from.parent.inlineContent) {
    let side = dir < 0 ? $from : $to;
    let beyond = sel instanceof import_prosemirror_state.AllSelection ? import_prosemirror_state.Selection.near(side, dir) : import_prosemirror_state.Selection.findFrom(side, dir);
    return beyond ? apply(view, beyond) : false;
  }
  return false;
}
function stopNativeHorizontalDelete(view, dir) {
  if (!(view.state.selection instanceof import_prosemirror_state.TextSelection)) return true;
  let {
    $head,
    $anchor,
    empty: empty2
  } = view.state.selection;
  if (!$head.sameParent($anchor)) return true;
  if (!empty2) return false;
  if (view.endOfTextblock(dir > 0 ? "forward" : "backward")) return true;
  let nextNode = !$head.textOffset && (dir < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (nextNode && !nextNode.isText) {
    let tr = view.state.tr;
    if (dir < 0) tr.delete($head.pos - nextNode.nodeSize, $head.pos);else tr.delete($head.pos, $head.pos + nextNode.nodeSize);
    view.dispatch(tr);
    return true;
  }
  return false;
}
function switchEditable(view, node, state) {
  view.domObserver.stop();
  node.contentEditable = state;
  view.domObserver.start();
}
function safariDownArrowBug(view) {
  if (!safari || view.state.selection.$head.parentOffset > 0) return false;
  let {
    focusNode,
    focusOffset
  } = view.domSelectionRange();
  if (focusNode && focusNode.nodeType == 1 && focusOffset == 0 && focusNode.firstChild && focusNode.firstChild.contentEditable == "false") {
    let child = focusNode.firstChild;
    switchEditable(view, child, "true");
    setTimeout(() => switchEditable(view, child, "false"), 20);
  }
  return false;
}
function getMods(event) {
  let result = "";
  if (event.ctrlKey) result += "c";
  if (event.metaKey) result += "m";
  if (event.altKey) result += "a";
  if (event.shiftKey) result += "s";
  return result;
}
function captureKeyDown(view, event) {
  let code = event.keyCode,
    mods = getMods(event);
  if (code == 8 || mac && code == 72 && mods == "c") {
    return stopNativeHorizontalDelete(view, -1) || skipIgnoredNodes(view, -1);
  } else if (code == 46 && !event.shiftKey || mac && code == 68 && mods == "c") {
    return stopNativeHorizontalDelete(view, 1) || skipIgnoredNodes(view, 1);
  } else if (code == 13 || code == 27) {
    return true;
  } else if (code == 37 || mac && code == 66 && mods == "c") {
    let dir = code == 37 ? findDirection(view, view.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 39 || mac && code == 70 && mods == "c") {
    let dir = code == 39 ? findDirection(view, view.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return selectHorizontally(view, dir, mods) || skipIgnoredNodes(view, dir);
  } else if (code == 38 || mac && code == 80 && mods == "c") {
    return selectVertically(view, -1, mods) || skipIgnoredNodes(view, -1);
  } else if (code == 40 || mac && code == 78 && mods == "c") {
    return safariDownArrowBug(view) || selectVertically(view, 1, mods) || skipIgnoredNodes(view, 1);
  } else if (mods == (mac ? "m" : "c") && (code == 66 || code == 73 || code == 89 || code == 90)) {
    return true;
  }
  return false;
}
function serializeForClipboard(view, slice) {
  view.someProp("transformCopied", f => {
    slice = f(slice, view);
  });
  let context = [],
    {
      content,
      openStart,
      openEnd
    } = slice;
  while (openStart > 1 && openEnd > 1 && content.childCount == 1 && content.firstChild.childCount == 1) {
    openStart--;
    openEnd--;
    let node = content.firstChild;
    context.push(node.type.name, node.attrs != node.type.defaultAttrs ? node.attrs : null);
    content = node.content;
  }
  let serializer = view.someProp("clipboardSerializer") || import_prosemirror_model.DOMSerializer.fromSchema(view.state.schema);
  let doc2 = detachedDoc(),
    wrap = doc2.createElement("div");
  wrap.appendChild(serializer.serializeFragment(content, {
    document: doc2
  }));
  let firstChild = wrap.firstChild,
    needsWrap,
    wrappers = 0;
  while (firstChild && firstChild.nodeType == 1 && (needsWrap = wrapMap[firstChild.nodeName.toLowerCase()])) {
    for (let i = needsWrap.length - 1; i >= 0; i--) {
      let wrapper = doc2.createElement(needsWrap[i]);
      while (wrap.firstChild) wrapper.appendChild(wrap.firstChild);
      wrap.appendChild(wrapper);
      wrappers++;
    }
    firstChild = wrap.firstChild;
  }
  if (firstChild && firstChild.nodeType == 1) firstChild.setAttribute("data-pm-slice", `${openStart} ${openEnd}${wrappers ? ` -${wrappers}` : ""} ${JSON.stringify(context)}`);
  let text = view.someProp("clipboardTextSerializer", f => f(slice, view)) || slice.content.textBetween(0, slice.content.size, "\n\n");
  return {
    dom: wrap,
    text,
    slice
  };
}
function parseFromClipboard(view, text, html, plainText, $context) {
  let inCode = $context.parent.type.spec.code;
  let dom, slice;
  if (!html && !text) return null;
  let asText = text && (plainText || inCode || !html);
  if (asText) {
    view.someProp("transformPastedText", f => {
      text = f(text, inCode || plainText, view);
    });
    if (inCode) return text ? new import_prosemirror_model.Slice(import_prosemirror_model.Fragment.from(view.state.schema.text(text.replace(/\r\n?/g, "\n"))), 0, 0) : import_prosemirror_model.Slice.empty;
    let parsed = view.someProp("clipboardTextParser", f => f(text, $context, plainText, view));
    if (parsed) {
      slice = parsed;
    } else {
      let marks = $context.marks();
      let {
          schema
        } = view.state,
        serializer = import_prosemirror_model.DOMSerializer.fromSchema(schema);
      dom = document.createElement("div");
      text.split(/(?:\r\n?|\n)+/).forEach(block => {
        let p = dom.appendChild(document.createElement("p"));
        if (block) p.appendChild(serializer.serializeNode(schema.text(block, marks)));
      });
    }
  } else {
    view.someProp("transformPastedHTML", f => {
      html = f(html, view);
    });
    dom = readHTML(html);
    if (webkit) restoreReplacedSpaces(dom);
  }
  let contextNode = dom && dom.querySelector("[data-pm-slice]");
  let sliceData = contextNode && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(contextNode.getAttribute("data-pm-slice") || "");
  if (sliceData && sliceData[3]) for (let i = +sliceData[3]; i > 0; i--) {
    let child = dom.firstChild;
    while (child && child.nodeType != 1) child = child.nextSibling;
    if (!child) break;
    dom = child;
  }
  if (!slice) {
    let parser = view.someProp("clipboardParser") || view.someProp("domParser") || import_prosemirror_model.DOMParser.fromSchema(view.state.schema);
    slice = parser.parseSlice(dom, {
      preserveWhitespace: !!(asText || sliceData),
      context: $context,
      ruleFromNode(dom2) {
        if (dom2.nodeName == "BR" && !dom2.nextSibling && dom2.parentNode && !inlineParents.test(dom2.parentNode.nodeName)) return {
          ignore: true
        };
        return null;
      }
    });
  }
  if (sliceData) {
    slice = addContext(closeSlice(slice, +sliceData[1], +sliceData[2]), sliceData[4]);
  } else {
    slice = import_prosemirror_model.Slice.maxOpen(normalizeSiblings(slice.content, $context), true);
    if (slice.openStart || slice.openEnd) {
      let openStart = 0,
        openEnd = 0;
      for (let node = slice.content.firstChild; openStart < slice.openStart && !node.type.spec.isolating; openStart++, node = node.firstChild) {}
      for (let node = slice.content.lastChild; openEnd < slice.openEnd && !node.type.spec.isolating; openEnd++, node = node.lastChild) {}
      slice = closeSlice(slice, openStart, openEnd);
    }
  }
  view.someProp("transformPasted", f => {
    slice = f(slice, view);
  });
  return slice;
}
var inlineParents = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function normalizeSiblings(fragment, $context) {
  if (fragment.childCount < 2) return fragment;
  for (let d = $context.depth; d >= 0; d--) {
    let parent = $context.node(d);
    let match = parent.contentMatchAt($context.index(d));
    let lastWrap,
      result = [];
    fragment.forEach(node => {
      if (!result) return;
      let wrap = match.findWrapping(node.type),
        inLast;
      if (!wrap) return result = null;
      if (inLast = result.length && lastWrap.length && addToSibling(wrap, lastWrap, node, result[result.length - 1], 0)) {
        result[result.length - 1] = inLast;
      } else {
        if (result.length) result[result.length - 1] = closeRight(result[result.length - 1], lastWrap.length);
        let wrapped = withWrappers(node, wrap);
        result.push(wrapped);
        match = match.matchType(wrapped.type);
        lastWrap = wrap;
      }
    });
    if (result) return import_prosemirror_model.Fragment.from(result);
  }
  return fragment;
}
function withWrappers(node, wrap, from = 0) {
  for (let i = wrap.length - 1; i >= from; i--) node = wrap[i].create(null, import_prosemirror_model.Fragment.from(node));
  return node;
}
function addToSibling(wrap, lastWrap, node, sibling, depth) {
  if (depth < wrap.length && depth < lastWrap.length && wrap[depth] == lastWrap[depth]) {
    let inner = addToSibling(wrap, lastWrap, node, sibling.lastChild, depth + 1);
    if (inner) return sibling.copy(sibling.content.replaceChild(sibling.childCount - 1, inner));
    let match = sibling.contentMatchAt(sibling.childCount);
    if (match.matchType(depth == wrap.length - 1 ? node.type : wrap[depth + 1])) return sibling.copy(sibling.content.append(import_prosemirror_model.Fragment.from(withWrappers(node, wrap, depth + 1))));
  }
}
function closeRight(node, depth) {
  if (depth == 0) return node;
  let fragment = node.content.replaceChild(node.childCount - 1, closeRight(node.lastChild, depth - 1));
  let fill = node.contentMatchAt(node.childCount).fillBefore(import_prosemirror_model.Fragment.empty, true);
  return node.copy(fragment.append(fill));
}
function closeRange(fragment, side, from, to, depth, openEnd) {
  let node = side < 0 ? fragment.firstChild : fragment.lastChild,
    inner = node.content;
  if (fragment.childCount > 1) openEnd = 0;
  if (depth < to - 1) inner = closeRange(inner, side, from, to, depth + 1, openEnd);
  if (depth >= from) inner = side < 0 ? node.contentMatchAt(0).fillBefore(inner, openEnd <= depth).append(inner) : inner.append(node.contentMatchAt(node.childCount).fillBefore(import_prosemirror_model.Fragment.empty, true));
  return fragment.replaceChild(side < 0 ? 0 : fragment.childCount - 1, node.copy(inner));
}
function closeSlice(slice, openStart, openEnd) {
  if (openStart < slice.openStart) slice = new import_prosemirror_model.Slice(closeRange(slice.content, -1, openStart, slice.openStart, 0, slice.openEnd), openStart, slice.openEnd);
  if (openEnd < slice.openEnd) slice = new import_prosemirror_model.Slice(closeRange(slice.content, 1, openEnd, slice.openEnd, 0, 0), slice.openStart, openEnd);
  return slice;
}
var wrapMap = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
var _detachedDoc = null;
function detachedDoc() {
  return _detachedDoc || (_detachedDoc = document.implementation.createHTMLDocument("title"));
}
var _policy = null;
function maybeWrapTrusted(html) {
  let trustedTypes = window.trustedTypes;
  if (!trustedTypes) return html;
  if (!_policy) _policy = trustedTypes.defaultPolicy || trustedTypes.createPolicy("ProseMirrorClipboard", {
    createHTML: s => s
  });
  return _policy.createHTML(html);
}
function readHTML(html) {
  let metas = /^(\s*<meta [^>]*>)*/.exec(html);
  if (metas) html = html.slice(metas[0].length);
  let elt = detachedDoc().createElement("div");
  let firstTag = /<([a-z][^>\s]+)/i.exec(html),
    wrap;
  if (wrap = firstTag && wrapMap[firstTag[1].toLowerCase()]) html = wrap.map(n => "<" + n + ">").join("") + html + wrap.map(n => "</" + n + ">").reverse().join("");
  elt.innerHTML = maybeWrapTrusted(html);
  if (wrap) for (let i = 0; i < wrap.length; i++) elt = elt.querySelector(wrap[i]) || elt;
  return elt;
}
function restoreReplacedSpaces(dom) {
  let nodes = dom.querySelectorAll(chrome ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.childNodes.length == 1 && node.textContent == "\xA0" && node.parentNode) node.parentNode.replaceChild(dom.ownerDocument.createTextNode(" "), node);
  }
}
function addContext(slice, context) {
  if (!slice.size) return slice;
  let schema = slice.content.firstChild.type.schema,
    array;
  try {
    array = JSON.parse(context);
  } catch (e) {
    return slice;
  }
  let {
    content,
    openStart,
    openEnd
  } = slice;
  for (let i = array.length - 2; i >= 0; i -= 2) {
    let type = schema.nodes[array[i]];
    if (!type || type.hasRequiredAttrs()) break;
    content = import_prosemirror_model.Fragment.from(type.create(array[i + 1], content));
    openStart++;
    openEnd++;
  }
  return new import_prosemirror_model.Slice(content, openStart, openEnd);
}
var handlers = {};
var editHandlers = {};
var passiveHandlers = {
  touchstart: true,
  touchmove: true
};
var InputState = class {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: "",
      button: 0
    };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastChromeDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -2e8;
    this.compositionID = 1;
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = /* @__PURE__ */Object.create(null);
    this.hideSelectionGuard = null;
  }
};
function initInput(view) {
  for (let event in handlers) {
    let handler = handlers[event];
    view.dom.addEventListener(event, view.input.eventHandlers[event] = event2 => {
      if (eventBelongsToView(view, event2) && !runCustomHandler(view, event2) && (view.editable || !(event2.type in editHandlers))) handler(view, event2);
    }, passiveHandlers[event] ? {
      passive: true
    } : void 0);
  }
  if (safari) view.dom.addEventListener("input", () => null);
  ensureListeners(view);
}
function setSelectionOrigin(view, origin) {
  view.input.lastSelectionOrigin = origin;
  view.input.lastSelectionTime = Date.now();
}
function destroyInput(view) {
  view.domObserver.stop();
  for (let type in view.input.eventHandlers) view.dom.removeEventListener(type, view.input.eventHandlers[type]);
  clearTimeout(view.input.composingTimeout);
  clearTimeout(view.input.lastIOSEnterFallbackTimeout);
}
function ensureListeners(view) {
  view.someProp("handleDOMEvents", currentHandlers => {
    for (let type in currentHandlers) if (!view.input.eventHandlers[type]) view.dom.addEventListener(type, view.input.eventHandlers[type] = event => runCustomHandler(view, event));
  });
}
function runCustomHandler(view, event) {
  return view.someProp("handleDOMEvents", handlers2 => {
    let handler = handlers2[event.type];
    return handler ? handler(view, event) || event.defaultPrevented : false;
  });
}
function eventBelongsToView(view, event) {
  if (!event.bubbles) return true;
  if (event.defaultPrevented) return false;
  for (let node = event.target; node != view.dom; node = node.parentNode) if (!node || node.nodeType == 11 || node.pmViewDesc && node.pmViewDesc.stopEvent(event)) return false;
  return true;
}
function dispatchEvent(view, event) {
  if (!runCustomHandler(view, event) && handlers[event.type] && (view.editable || !(event.type in editHandlers))) handlers[event.type](view, event);
}
editHandlers.keydown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.keyCode == 16 || event.shiftKey;
  if (inOrNearComposition(view, event)) return;
  view.input.lastKeyCode = event.keyCode;
  view.input.lastKeyCodeTime = Date.now();
  if (android && chrome && event.keyCode == 13) return;
  if (event.keyCode != 229) view.domObserver.forceFlush();
  if (ios && event.keyCode == 13 && !event.ctrlKey && !event.altKey && !event.metaKey) {
    let now = Date.now();
    view.input.lastIOSEnter = now;
    view.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
      if (view.input.lastIOSEnter == now) {
        view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")));
        view.input.lastIOSEnter = 0;
      }
    }, 200);
  } else if (view.someProp("handleKeyDown", f => f(view, event)) || captureKeyDown(view, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "key");
  }
};
editHandlers.keyup = (view, event) => {
  if (event.keyCode == 16) view.input.shiftKey = false;
};
editHandlers.keypress = (view, _event) => {
  let event = _event;
  if (inOrNearComposition(view, event) || !event.charCode || event.ctrlKey && !event.altKey || mac && event.metaKey) return;
  if (view.someProp("handleKeyPress", f => f(view, event))) {
    event.preventDefault();
    return;
  }
  let sel = view.state.selection;
  if (!(sel instanceof import_prosemirror_state.TextSelection) || !sel.$from.sameParent(sel.$to)) {
    let text = String.fromCharCode(event.charCode);
    let deflt = () => view.state.tr.insertText(text).scrollIntoView();
    if (!/[\r\n]/.test(text) && !view.someProp("handleTextInput", f => f(view, sel.$from.pos, sel.$to.pos, text, deflt))) view.dispatch(deflt());
    event.preventDefault();
  }
};
function eventCoords(event) {
  return {
    left: event.clientX,
    top: event.clientY
  };
}
function isNear(event, click) {
  let dx = click.x - event.clientX,
    dy = click.y - event.clientY;
  return dx * dx + dy * dy < 100;
}
function runHandlerOnContext(view, propName, pos, inside, event) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    if (view.someProp(propName, f => i > $pos.depth ? f(view, pos, $pos.nodeAfter, $pos.before(i), event, true) : f(view, pos, $pos.node(i), $pos.before(i), event, false))) return true;
  }
  return false;
}
function updateSelection(view, selection, origin) {
  if (!view.focused) view.focus();
  if (view.state.selection.eq(selection)) return;
  let tr = view.state.tr.setSelection(selection);
  if (origin == "pointer") tr.setMeta("pointer", true);
  view.dispatch(tr);
}
function selectClickedLeaf(view, inside) {
  if (inside == -1) return false;
  let $pos = view.state.doc.resolve(inside),
    node = $pos.nodeAfter;
  if (node && node.isAtom && import_prosemirror_state.NodeSelection.isSelectable(node)) {
    updateSelection(view, new import_prosemirror_state.NodeSelection($pos), "pointer");
    return true;
  }
  return false;
}
function selectClickedNode(view, inside) {
  if (inside == -1) return false;
  let sel = view.state.selection,
    selectedNode,
    selectAt;
  if (sel instanceof import_prosemirror_state.NodeSelection) selectedNode = sel.node;
  let $pos = view.state.doc.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    if (import_prosemirror_state.NodeSelection.isSelectable(node)) {
      if (selectedNode && sel.$from.depth > 0 && i >= sel.$from.depth && $pos.before(sel.$from.depth + 1) == sel.$from.pos) selectAt = $pos.before(sel.$from.depth);else selectAt = $pos.before(i);
      break;
    }
  }
  if (selectAt != null) {
    updateSelection(view, import_prosemirror_state.NodeSelection.create(view.state.doc, selectAt), "pointer");
    return true;
  } else {
    return false;
  }
}
function handleSingleClick(view, pos, inside, event, selectNode) {
  return runHandlerOnContext(view, "handleClickOn", pos, inside, event) || view.someProp("handleClick", f => f(view, pos, event)) || (selectNode ? selectClickedNode(view, inside) : selectClickedLeaf(view, inside));
}
function handleDoubleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleDoubleClickOn", pos, inside, event) || view.someProp("handleDoubleClick", f => f(view, pos, event));
}
function handleTripleClick(view, pos, inside, event) {
  return runHandlerOnContext(view, "handleTripleClickOn", pos, inside, event) || view.someProp("handleTripleClick", f => f(view, pos, event)) || defaultTripleClick(view, inside, event);
}
function defaultTripleClick(view, inside, event) {
  if (event.button != 0) return false;
  let doc2 = view.state.doc;
  if (inside == -1) {
    if (doc2.inlineContent) {
      updateSelection(view, import_prosemirror_state.TextSelection.create(doc2, 0, doc2.content.size), "pointer");
      return true;
    }
    return false;
  }
  let $pos = doc2.resolve(inside);
  for (let i = $pos.depth + 1; i > 0; i--) {
    let node = i > $pos.depth ? $pos.nodeAfter : $pos.node(i);
    let nodePos = $pos.before(i);
    if (node.inlineContent) updateSelection(view, import_prosemirror_state.TextSelection.create(doc2, nodePos + 1, nodePos + 1 + node.content.size), "pointer");else if (import_prosemirror_state.NodeSelection.isSelectable(node)) updateSelection(view, import_prosemirror_state.NodeSelection.create(doc2, nodePos), "pointer");else continue;
    return true;
  }
}
function forceDOMFlush(view) {
  return endComposition(view);
}
var selectNodeModifier = mac ? "metaKey" : "ctrlKey";
handlers.mousedown = (view, _event) => {
  let event = _event;
  view.input.shiftKey = event.shiftKey;
  let flushed = forceDOMFlush(view);
  let now = Date.now(),
    type = "singleClick";
  if (now - view.input.lastClick.time < 500 && isNear(event, view.input.lastClick) && !event[selectNodeModifier] && view.input.lastClick.button == event.button) {
    if (view.input.lastClick.type == "singleClick") type = "doubleClick";else if (view.input.lastClick.type == "doubleClick") type = "tripleClick";
  }
  view.input.lastClick = {
    time: now,
    x: event.clientX,
    y: event.clientY,
    type,
    button: event.button
  };
  let pos = view.posAtCoords(eventCoords(event));
  if (!pos) return;
  if (type == "singleClick") {
    if (view.input.mouseDown) view.input.mouseDown.done();
    view.input.mouseDown = new MouseDown(view, pos, event, !!flushed);
  } else if ((type == "doubleClick" ? handleDoubleClick : handleTripleClick)(view, pos.pos, pos.inside, event)) {
    event.preventDefault();
  } else {
    setSelectionOrigin(view, "pointer");
  }
};
var MouseDown = class {
  constructor(view, pos, event, flushed) {
    this.view = view;
    this.pos = pos;
    this.event = event;
    this.flushed = flushed;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = view.state.doc;
    this.selectNode = !!event[selectNodeModifier];
    this.allowDefault = event.shiftKey;
    let targetNode, targetPos;
    if (pos.inside > -1) {
      targetNode = view.state.doc.nodeAt(pos.inside);
      targetPos = pos.inside;
    } else {
      let $pos = view.state.doc.resolve(pos.pos);
      targetNode = $pos.parent;
      targetPos = $pos.depth ? $pos.before() : 0;
    }
    const target = flushed ? null : event.target;
    const targetDesc = target ? view.docView.nearestDesc(target, true) : null;
    this.target = targetDesc && targetDesc.dom.nodeType == 1 ? targetDesc.dom : null;
    let {
      selection
    } = view.state;
    if (event.button == 0 && targetNode.type.spec.draggable && targetNode.type.spec.selectable !== false || selection instanceof import_prosemirror_state.NodeSelection && selection.from <= targetPos && selection.to > targetPos) this.mightDrag = {
      node: targetNode,
      pos: targetPos,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && gecko && !this.target.hasAttribute("contentEditable"))
    };
    if (this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable)) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.draggable = true;
      if (this.mightDrag.setUneditable) setTimeout(() => {
        if (this.view.input.mouseDown == this) this.target.setAttribute("contentEditable", "false");
      }, 20);
      this.view.domObserver.start();
    }
    view.root.addEventListener("mouseup", this.up = this.up.bind(this));
    view.root.addEventListener("mousemove", this.move = this.move.bind(this));
    setSelectionOrigin(view, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) this.target.removeAttribute("draggable");
      if (this.mightDrag.setUneditable) this.target.removeAttribute("contentEditable");
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync) setTimeout(() => selectionToDOM(this.view));
    this.view.input.mouseDown = null;
  }
  up(event) {
    this.done();
    if (!this.view.dom.contains(event.target)) return;
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc) pos = this.view.posAtCoords(eventCoords(event));
    this.updateAllowDefault(event);
    if (this.allowDefault || !pos) {
      setSelectionOrigin(this.view, "pointer");
    } else if (handleSingleClick(this.view, pos.pos, pos.inside, event, this.selectNode)) {
      event.preventDefault();
    } else if (event.button == 0 && (this.flushed ||
    // Safari ignores clicks on draggable elements
    safari && this.mightDrag && !this.mightDrag.node.isAtom ||
    // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    chrome && !this.view.state.selection.visible && Math.min(Math.abs(pos.pos - this.view.state.selection.from), Math.abs(pos.pos - this.view.state.selection.to)) <= 2)) {
      updateSelection(this.view, import_prosemirror_state.Selection.near(this.view.state.doc.resolve(pos.pos)), "pointer");
      event.preventDefault();
    } else {
      setSelectionOrigin(this.view, "pointer");
    }
  }
  move(event) {
    this.updateAllowDefault(event);
    setSelectionOrigin(this.view, "pointer");
    if (event.buttons == 0) this.done();
  }
  updateAllowDefault(event) {
    if (!this.allowDefault && (Math.abs(this.event.x - event.clientX) > 4 || Math.abs(this.event.y - event.clientY) > 4)) this.allowDefault = true;
  }
};
handlers.touchstart = view => {
  view.input.lastTouch = Date.now();
  forceDOMFlush(view);
  setSelectionOrigin(view, "pointer");
};
handlers.touchmove = view => {
  view.input.lastTouch = Date.now();
  setSelectionOrigin(view, "pointer");
};
handlers.contextmenu = view => forceDOMFlush(view);
function inOrNearComposition(view, event) {
  if (view.composing) return true;
  if (safari && Math.abs(event.timeStamp - view.input.compositionEndedAt) < 500) {
    view.input.compositionEndedAt = -2e8;
    return true;
  }
  return false;
}
var timeoutComposition = android ? 5e3 : -1;
editHandlers.compositionstart = editHandlers.compositionupdate = view => {
  if (!view.composing) {
    view.domObserver.flush();
    let {
        state
      } = view,
      $pos = state.selection.$to;
    if (state.selection instanceof import_prosemirror_state.TextSelection && (state.storedMarks || !$pos.textOffset && $pos.parentOffset && $pos.nodeBefore.marks.some(m => m.type.spec.inclusive === false))) {
      view.markCursor = view.state.storedMarks || $pos.marks();
      endComposition(view, true);
      view.markCursor = null;
    } else {
      endComposition(view, !state.selection.empty);
      if (gecko && state.selection.empty && $pos.parentOffset && !$pos.textOffset && $pos.nodeBefore.marks.length) {
        let sel = view.domSelectionRange();
        for (let node = sel.focusNode, offset = sel.focusOffset; node && node.nodeType == 1 && offset != 0;) {
          let before = offset < 0 ? node.lastChild : node.childNodes[offset - 1];
          if (!before) break;
          if (before.nodeType == 3) {
            let sel2 = view.domSelection();
            if (sel2) sel2.collapse(before, before.nodeValue.length);
            break;
          } else {
            node = before;
            offset = -1;
          }
        }
      }
    }
    view.input.composing = true;
  }
  scheduleComposeEnd(view, timeoutComposition);
};
editHandlers.compositionend = (view, event) => {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = event.timeStamp;
    view.input.compositionPendingChanges = view.domObserver.pendingRecords().length ? view.input.compositionID : 0;
    view.input.compositionNode = null;
    if (view.input.compositionPendingChanges) Promise.resolve().then(() => view.domObserver.flush());
    view.input.compositionID++;
    scheduleComposeEnd(view, 20);
  }
};
function scheduleComposeEnd(view, delay) {
  clearTimeout(view.input.composingTimeout);
  if (delay > -1) view.input.composingTimeout = setTimeout(() => endComposition(view), delay);
}
function clearComposition(view) {
  if (view.composing) {
    view.input.composing = false;
    view.input.compositionEndedAt = timestampFromCustomEvent();
  }
  while (view.input.compositionNodes.length > 0) view.input.compositionNodes.pop().markParentsDirty();
}
function findCompositionNode(view) {
  let sel = view.domSelectionRange();
  if (!sel.focusNode) return null;
  let textBefore = textNodeBefore$1(sel.focusNode, sel.focusOffset);
  let textAfter = textNodeAfter$1(sel.focusNode, sel.focusOffset);
  if (textBefore && textAfter && textBefore != textAfter) {
    let descAfter = textAfter.pmViewDesc,
      lastChanged = view.domObserver.lastChangedTextNode;
    if (textBefore == lastChanged || textAfter == lastChanged) return lastChanged;
    if (!descAfter || !descAfter.isText(textAfter.nodeValue)) {
      return textAfter;
    } else if (view.input.compositionNode == textAfter) {
      let descBefore = textBefore.pmViewDesc;
      if (!(!descBefore || !descBefore.isText(textBefore.nodeValue))) return textAfter;
    }
  }
  return textBefore || textAfter;
}
function timestampFromCustomEvent() {
  let event = document.createEvent("Event");
  event.initEvent("event", true, true);
  return event.timeStamp;
}
function endComposition(view, restarting = false) {
  if (android && view.domObserver.flushingSoon >= 0) return;
  view.domObserver.forceFlush();
  clearComposition(view);
  if (restarting || view.docView && view.docView.dirty) {
    let sel = selectionFromDOM(view),
      cur = view.state.selection;
    if (sel && !sel.eq(cur)) view.dispatch(view.state.tr.setSelection(sel));else if ((view.markCursor || restarting) && !cur.$from.node(cur.$from.sharedDepth(cur.to)).inlineContent) view.dispatch(view.state.tr.deleteSelection());else view.updateState(view.state);
    return true;
  }
  return false;
}
function captureCopy(view, dom) {
  if (!view.dom.parentNode) return;
  let wrap = view.dom.parentNode.appendChild(document.createElement("div"));
  wrap.appendChild(dom);
  wrap.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let sel = getSelection(),
    range = document.createRange();
  range.selectNodeContents(dom);
  view.dom.blur();
  sel.removeAllRanges();
  sel.addRange(range);
  setTimeout(() => {
    if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    view.focus();
  }, 50);
}
var brokenClipboardAPI = ie && ie_version < 15 || ios && webkit_version < 604;
handlers.copy = editHandlers.cut = (view, _event) => {
  let event = _event;
  let sel = view.state.selection,
    cut = event.type == "cut";
  if (sel.empty) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let slice = sel.content(),
    {
      dom,
      text
    } = serializeForClipboard(view, slice);
  if (data) {
    event.preventDefault();
    data.clearData();
    data.setData("text/html", dom.innerHTML);
    data.setData("text/plain", text);
  } else {
    captureCopy(view, dom);
  }
  if (cut) view.dispatch(view.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function sliceSingleNode(slice) {
  return slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1 ? slice.content.firstChild : null;
}
function capturePaste(view, event) {
  if (!view.dom.parentNode) return;
  let plainText = view.input.shiftKey || view.state.selection.$from.parent.type.spec.code;
  let target = view.dom.parentNode.appendChild(document.createElement(plainText ? "textarea" : "div"));
  if (!plainText) target.contentEditable = "true";
  target.style.cssText = "position: fixed; left: -10000px; top: 10px";
  target.focus();
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  setTimeout(() => {
    view.focus();
    if (target.parentNode) target.parentNode.removeChild(target);
    if (plainText) doPaste(view, target.value, null, plain, event);else doPaste(view, target.textContent, target.innerHTML, plain, event);
  }, 50);
}
function doPaste(view, text, html, preferPlain, event) {
  let slice = parseFromClipboard(view, text, html, preferPlain, view.state.selection.$from);
  if (view.someProp("handlePaste", f => f(view, event, slice || import_prosemirror_model.Slice.empty))) return true;
  if (!slice) return false;
  let singleNode = sliceSingleNode(slice);
  let tr = singleNode ? view.state.tr.replaceSelectionWith(singleNode, preferPlain) : view.state.tr.replaceSelection(slice);
  view.dispatch(tr.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"));
  return true;
}
function getText(clipboardData) {
  let text = clipboardData.getData("text/plain") || clipboardData.getData("Text");
  if (text) return text;
  let uris = clipboardData.getData("text/uri-list");
  return uris ? uris.replace(/\r?\n/g, " ") : "";
}
editHandlers.paste = (view, _event) => {
  let event = _event;
  if (view.composing && !android) return;
  let data = brokenClipboardAPI ? null : event.clipboardData;
  let plain = view.input.shiftKey && view.input.lastKeyCode != 45;
  if (data && doPaste(view, getText(data), data.getData("text/html"), plain, event)) event.preventDefault();else capturePaste(view, event);
};
var Dragging = class {
  constructor(slice, move, node) {
    this.slice = slice;
    this.move = move;
    this.node = node;
  }
};
var dragCopyModifier = mac ? "altKey" : "ctrlKey";
function dragMoves(view, event) {
  let moves = view.someProp("dragCopies", test => !test(event));
  return moves != null ? moves : !event[dragCopyModifier];
}
handlers.dragstart = (view, _event) => {
  let event = _event;
  let mouseDown = view.input.mouseDown;
  if (mouseDown) mouseDown.done();
  if (!event.dataTransfer) return;
  let sel = view.state.selection;
  let pos = sel.empty ? null : view.posAtCoords(eventCoords(event));
  let node;
  if (pos && pos.pos >= sel.from && pos.pos <= (sel instanceof import_prosemirror_state.NodeSelection ? sel.to - 1 : sel.to)) ;else if (mouseDown && mouseDown.mightDrag) {
    node = import_prosemirror_state.NodeSelection.create(view.state.doc, mouseDown.mightDrag.pos);
  } else if (event.target && event.target.nodeType == 1) {
    let desc = view.docView.nearestDesc(event.target, true);
    if (desc && desc.node.type.spec.draggable && desc != view.docView) node = import_prosemirror_state.NodeSelection.create(view.state.doc, desc.posBefore);
  }
  let draggedSlice = (node || view.state.selection).content();
  let {
    dom,
    text,
    slice
  } = serializeForClipboard(view, draggedSlice);
  if (!event.dataTransfer.files.length || !chrome || chrome_version > 120) event.dataTransfer.clearData();
  event.dataTransfer.setData(brokenClipboardAPI ? "Text" : "text/html", dom.innerHTML);
  event.dataTransfer.effectAllowed = "copyMove";
  if (!brokenClipboardAPI) event.dataTransfer.setData("text/plain", text);
  view.dragging = new Dragging(slice, dragMoves(view, event), node);
};
handlers.dragend = view => {
  let dragging = view.dragging;
  window.setTimeout(() => {
    if (view.dragging == dragging) view.dragging = null;
  }, 50);
};
editHandlers.dragover = editHandlers.dragenter = (_, e) => e.preventDefault();
editHandlers.drop = (view, _event) => {
  let event = _event;
  let dragging = view.dragging;
  view.dragging = null;
  if (!event.dataTransfer) return;
  let eventPos = view.posAtCoords(eventCoords(event));
  if (!eventPos) return;
  let $mouse = view.state.doc.resolve(eventPos.pos);
  let slice = dragging && dragging.slice;
  if (slice) {
    view.someProp("transformPasted", f => {
      slice = f(slice, view);
    });
  } else {
    slice = parseFromClipboard(view, getText(event.dataTransfer), brokenClipboardAPI ? null : event.dataTransfer.getData("text/html"), false, $mouse);
  }
  let move = !!(dragging && dragMoves(view, event));
  if (view.someProp("handleDrop", f => f(view, event, slice || import_prosemirror_model.Slice.empty, move))) {
    event.preventDefault();
    return;
  }
  if (!slice) return;
  event.preventDefault();
  let insertPos = slice ? (0, import_prosemirror_transform.dropPoint)(view.state.doc, $mouse.pos, slice) : $mouse.pos;
  if (insertPos == null) insertPos = $mouse.pos;
  let tr = view.state.tr;
  if (move) {
    let {
      node
    } = dragging;
    if (node) node.replace(tr);else tr.deleteSelection();
  }
  let pos = tr.mapping.map(insertPos);
  let isNode = slice.openStart == 0 && slice.openEnd == 0 && slice.content.childCount == 1;
  let beforeInsert = tr.doc;
  if (isNode) tr.replaceRangeWith(pos, pos, slice.content.firstChild);else tr.replaceRange(pos, pos, slice);
  if (tr.doc.eq(beforeInsert)) return;
  let $pos = tr.doc.resolve(pos);
  if (isNode && import_prosemirror_state.NodeSelection.isSelectable(slice.content.firstChild) && $pos.nodeAfter && $pos.nodeAfter.sameMarkup(slice.content.firstChild)) {
    tr.setSelection(new import_prosemirror_state.NodeSelection($pos));
  } else {
    let end = tr.mapping.map(insertPos);
    tr.mapping.maps[tr.mapping.maps.length - 1].forEach((_from, _to, _newFrom, newTo) => end = newTo);
    tr.setSelection(selectionBetween(view, $pos, tr.doc.resolve(end)));
  }
  view.focus();
  view.dispatch(tr.setMeta("uiEvent", "drop"));
};
handlers.focus = view => {
  view.input.lastFocus = Date.now();
  if (!view.focused) {
    view.domObserver.stop();
    view.dom.classList.add("ProseMirror-focused");
    view.domObserver.start();
    view.focused = true;
    setTimeout(() => {
      if (view.docView && view.hasFocus() && !view.domObserver.currentSelection.eq(view.domSelectionRange())) selectionToDOM(view);
    }, 20);
  }
};
handlers.blur = (view, _event) => {
  let event = _event;
  if (view.focused) {
    view.domObserver.stop();
    view.dom.classList.remove("ProseMirror-focused");
    view.domObserver.start();
    if (event.relatedTarget && view.dom.contains(event.relatedTarget)) view.domObserver.currentSelection.clear();
    view.focused = false;
  }
};
handlers.beforeinput = (view, _event) => {
  let event = _event;
  if (chrome && android && event.inputType == "deleteContentBackward") {
    view.domObserver.flushSoon();
    let {
      domChangeCount
    } = view.input;
    setTimeout(() => {
      if (view.input.domChangeCount != domChangeCount) return;
      view.dom.blur();
      view.focus();
      if (view.someProp("handleKeyDown", f => f(view, keyEvent(8, "Backspace")))) return;
      let {
        $cursor
      } = view.state.selection;
      if ($cursor && $cursor.pos > 0) view.dispatch(view.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView());
    }, 50);
  }
};
for (let prop in editHandlers) handlers[prop] = editHandlers[prop];
function compareObjs(a, b) {
  if (a == b) return true;
  for (let p in a) if (a[p] !== b[p]) return false;
  for (let p in b) if (!(p in a)) return false;
  return true;
}
var WidgetType = class _WidgetType {
  constructor(toDOM, spec) {
    this.toDOM = toDOM;
    this.spec = spec || noSpec;
    this.side = this.spec.side || 0;
  }
  map(mapping, span, offset, oldOffset) {
    let {
      pos,
      deleted
    } = mapping.mapResult(span.from + oldOffset, this.side < 0 ? -1 : 1);
    return deleted ? null : new Decoration(pos - offset, pos - offset, this);
  }
  valid() {
    return true;
  }
  eq(other) {
    return this == other || other instanceof _WidgetType && (this.spec.key && this.spec.key == other.spec.key || this.toDOM == other.toDOM && compareObjs(this.spec, other.spec));
  }
  destroy(node) {
    if (this.spec.destroy) this.spec.destroy(node);
  }
};
var InlineType = class _InlineType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset, oldOffset) {
    let from = mapping.map(span.from + oldOffset, this.spec.inclusiveStart ? -1 : 1) - offset;
    let to = mapping.map(span.to + oldOffset, this.spec.inclusiveEnd ? 1 : -1) - offset;
    return from >= to ? null : new Decoration(from, to, this);
  }
  valid(_, span) {
    return span.from < span.to;
  }
  eq(other) {
    return this == other || other instanceof _InlineType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  static is(span) {
    return span.type instanceof _InlineType;
  }
  destroy() {}
};
var NodeType = class _NodeType {
  constructor(attrs, spec) {
    this.attrs = attrs;
    this.spec = spec || noSpec;
  }
  map(mapping, span, offset, oldOffset) {
    let from = mapping.mapResult(span.from + oldOffset, 1);
    if (from.deleted) return null;
    let to = mapping.mapResult(span.to + oldOffset, -1);
    if (to.deleted || to.pos <= from.pos) return null;
    return new Decoration(from.pos - offset, to.pos - offset, this);
  }
  valid(node, span) {
    let {
        index,
        offset
      } = node.content.findIndex(span.from),
      child;
    return offset == span.from && !(child = node.child(index)).isText && offset + child.nodeSize == span.to;
  }
  eq(other) {
    return this == other || other instanceof _NodeType && compareObjs(this.attrs, other.attrs) && compareObjs(this.spec, other.spec);
  }
  destroy() {}
};
var Decoration = class _Decoration {
  /**
  @internal
  */
  constructor(from, to, type) {
    this.from = from;
    this.to = to;
    this.type = type;
  }
  /**
  @internal
  */
  copy(from, to) {
    return new _Decoration(from, to, this.type);
  }
  /**
  @internal
  */
  eq(other, offset = 0) {
    return this.type.eq(other.type) && this.from + offset == other.from && this.to + offset == other.to;
  }
  /**
  @internal
  */
  map(mapping, offset, oldOffset) {
    return this.type.map(mapping, this, offset, oldOffset);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(pos, toDOM, spec) {
    return new _Decoration(pos, pos, new WidgetType(toDOM, spec));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(from, to, attrs, spec) {
    return new _Decoration(from, to, new InlineType(attrs, spec));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(from, to, attrs, spec) {
    return new _Decoration(from, to, new NodeType(attrs, spec));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof InlineType;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof WidgetType;
  }
};
var none = [],
  noSpec = {};
var DecorationSet = class _DecorationSet {
  /**
  @internal
  */
  constructor(local, children) {
    this.local = local.length ? local : none;
    this.children = children.length ? children : none;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(doc2, decorations) {
    return decorations.length ? buildTree(decorations, doc2, 0, noSpec) : empty;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(start, end, predicate) {
    let result = [];
    this.findInner(start == null ? 0 : start, end == null ? 1e9 : end, result, 0, predicate);
    return result;
  }
  findInner(start, end, result, offset, predicate) {
    for (let i = 0; i < this.local.length; i++) {
      let span = this.local[i];
      if (span.from <= end && span.to >= start && (!predicate || predicate(span.spec))) result.push(span.copy(span.from + offset, span.to + offset));
    }
    for (let i = 0; i < this.children.length; i += 3) {
      if (this.children[i] < end && this.children[i + 1] > start) {
        let childOff = this.children[i] + 1;
        this.children[i + 2].findInner(start - childOff, end - childOff, result, offset + childOff, predicate);
      }
    }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(mapping, doc2, options) {
    if (this == empty || mapping.maps.length == 0) return this;
    return this.mapInner(mapping, doc2, 0, 0, options || noSpec);
  }
  /**
  @internal
  */
  mapInner(mapping, node, offset, oldOffset, options) {
    let newLocal;
    for (let i = 0; i < this.local.length; i++) {
      let mapped = this.local[i].map(mapping, offset, oldOffset);
      if (mapped && mapped.type.valid(node, mapped)) (newLocal || (newLocal = [])).push(mapped);else if (options.onRemove) options.onRemove(this.local[i].spec);
    }
    if (this.children.length) return mapChildren(this.children, newLocal || [], mapping, node, offset, oldOffset, options);else return newLocal ? new _DecorationSet(newLocal.sort(byPos), none) : empty;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(doc2, decorations) {
    if (!decorations.length) return this;
    if (this == empty) return _DecorationSet.create(doc2, decorations);
    return this.addInner(doc2, decorations, 0);
  }
  addInner(doc2, decorations, offset) {
    let children,
      childIndex = 0;
    doc2.forEach((childNode, childOffset) => {
      let baseOffset = childOffset + offset,
        found;
      if (!(found = takeSpansForNode(decorations, childNode, baseOffset))) return;
      if (!children) children = this.children.slice();
      while (childIndex < children.length && children[childIndex] < childOffset) childIndex += 3;
      if (children[childIndex] == childOffset) children[childIndex + 2] = children[childIndex + 2].addInner(childNode, found, baseOffset + 1);else children.splice(childIndex, 0, childOffset, childOffset + childNode.nodeSize, buildTree(found, childNode, baseOffset + 1, noSpec));
      childIndex += 3;
    });
    let local = moveSpans(childIndex ? withoutNulls(decorations) : decorations, -offset);
    for (let i = 0; i < local.length; i++) if (!local[i].type.valid(doc2, local[i])) local.splice(i--, 1);
    return new _DecorationSet(local.length ? this.local.concat(local).sort(byPos) : this.local, children || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(decorations) {
    if (decorations.length == 0 || this == empty) return this;
    return this.removeInner(decorations, 0);
  }
  removeInner(decorations, offset) {
    let children = this.children,
      local = this.local;
    for (let i = 0; i < children.length; i += 3) {
      let found;
      let from = children[i] + offset,
        to = children[i + 1] + offset;
      for (let j = 0, span; j < decorations.length; j++) if (span = decorations[j]) {
        if (span.from > from && span.to < to) {
          decorations[j] = null;
          (found || (found = [])).push(span);
        }
      }
      if (!found) continue;
      if (children == this.children) children = this.children.slice();
      let removed = children[i + 2].removeInner(found, from + 1);
      if (removed != empty) {
        children[i + 2] = removed;
      } else {
        children.splice(i, 3);
        i -= 3;
      }
    }
    if (local.length) {
      for (let i = 0, span; i < decorations.length; i++) if (span = decorations[i]) {
        for (let j = 0; j < local.length; j++) if (local[j].eq(span, offset)) {
          if (local == this.local) local = this.local.slice();
          local.splice(j--, 1);
        }
      }
    }
    if (children == this.children && local == this.local) return this;
    return local.length || children.length ? new _DecorationSet(local, children) : empty;
  }
  forChild(offset, node) {
    if (this == empty) return this;
    if (node.isLeaf) return _DecorationSet.empty;
    let child, local;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] >= offset) {
      if (this.children[i] == offset) child = this.children[i + 2];
      break;
    }
    let start = offset + 1,
      end = start + node.content.size;
    for (let i = 0; i < this.local.length; i++) {
      let dec = this.local[i];
      if (dec.from < end && dec.to > start && dec.type instanceof InlineType) {
        let from = Math.max(start, dec.from) - start,
          to = Math.min(end, dec.to) - start;
        if (from < to) (local || (local = [])).push(dec.copy(from, to));
      }
    }
    if (local) {
      let localSet = new _DecorationSet(local.sort(byPos), none);
      return child ? new DecorationGroup([localSet, child]) : localSet;
    }
    return child || empty;
  }
  /**
  @internal
  */
  eq(other) {
    if (this == other) return true;
    if (!(other instanceof _DecorationSet) || this.local.length != other.local.length || this.children.length != other.children.length) return false;
    for (let i = 0; i < this.local.length; i++) if (!this.local[i].eq(other.local[i])) return false;
    for (let i = 0; i < this.children.length; i += 3) if (this.children[i] != other.children[i] || this.children[i + 1] != other.children[i + 1] || !this.children[i + 2].eq(other.children[i + 2])) return false;
    return true;
  }
  /**
  @internal
  */
  locals(node) {
    return removeOverlap(this.localsInner(node));
  }
  /**
  @internal
  */
  localsInner(node) {
    if (this == empty) return none;
    if (node.inlineContent || !this.local.some(InlineType.is)) return this.local;
    let result = [];
    for (let i = 0; i < this.local.length; i++) {
      if (!(this.local[i].type instanceof InlineType)) result.push(this.local[i]);
    }
    return result;
  }
  forEachSet(f) {
    f(this);
  }
};
DecorationSet.empty = new DecorationSet([], []);
DecorationSet.removeOverlap = removeOverlap;
var empty = DecorationSet.empty;
var DecorationGroup = class _DecorationGroup {
  constructor(members) {
    this.members = members;
  }
  map(mapping, doc2) {
    const mappedDecos = this.members.map(member => member.map(mapping, doc2, noSpec));
    return _DecorationGroup.from(mappedDecos);
  }
  forChild(offset, child) {
    if (child.isLeaf) return DecorationSet.empty;
    let found = [];
    for (let i = 0; i < this.members.length; i++) {
      let result = this.members[i].forChild(offset, child);
      if (result == empty) continue;
      if (result instanceof _DecorationGroup) found = found.concat(result.members);else found.push(result);
    }
    return _DecorationGroup.from(found);
  }
  eq(other) {
    if (!(other instanceof _DecorationGroup) || other.members.length != this.members.length) return false;
    for (let i = 0; i < this.members.length; i++) if (!this.members[i].eq(other.members[i])) return false;
    return true;
  }
  locals(node) {
    let result,
      sorted = true;
    for (let i = 0; i < this.members.length; i++) {
      let locals = this.members[i].localsInner(node);
      if (!locals.length) continue;
      if (!result) {
        result = locals;
      } else {
        if (sorted) {
          result = result.slice();
          sorted = false;
        }
        for (let j = 0; j < locals.length; j++) result.push(locals[j]);
      }
    }
    return result ? removeOverlap(sorted ? result : result.sort(byPos)) : none;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(members) {
    switch (members.length) {
      case 0:
        return empty;
      case 1:
        return members[0];
      default:
        return new _DecorationGroup(members.every(m => m instanceof DecorationSet) ? members : members.reduce((r, m) => r.concat(m instanceof DecorationSet ? m : m.members), []));
    }
  }
  forEachSet(f) {
    for (let i = 0; i < this.members.length; i++) this.members[i].forEachSet(f);
  }
};
function mapChildren(oldChildren, newLocal, mapping, node, offset, oldOffset, options) {
  let children = oldChildren.slice();
  for (let i = 0, baseOffset = oldOffset; i < mapping.maps.length; i++) {
    let moved = 0;
    mapping.maps[i].forEach((oldStart, oldEnd, newStart, newEnd) => {
      let dSize = newEnd - newStart - (oldEnd - oldStart);
      for (let i2 = 0; i2 < children.length; i2 += 3) {
        let end = children[i2 + 1];
        if (end < 0 || oldStart > end + baseOffset - moved) continue;
        let start = children[i2] + baseOffset - moved;
        if (oldEnd >= start) {
          children[i2 + 1] = oldStart <= start ? -2 : -1;
        } else if (oldStart >= baseOffset && dSize) {
          children[i2] += dSize;
          children[i2 + 1] += dSize;
        }
      }
      moved += dSize;
    });
    baseOffset = mapping.maps[i].map(baseOffset, -1);
  }
  let mustRebuild = false;
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
    if (children[i + 1] == -2) {
      mustRebuild = true;
      children[i + 1] = -1;
      continue;
    }
    let from = mapping.map(oldChildren[i] + oldOffset),
      fromLocal = from - offset;
    if (fromLocal < 0 || fromLocal >= node.content.size) {
      mustRebuild = true;
      continue;
    }
    let to = mapping.map(oldChildren[i + 1] + oldOffset, -1),
      toLocal = to - offset;
    let {
      index,
      offset: childOffset
    } = node.content.findIndex(fromLocal);
    let childNode = node.maybeChild(index);
    if (childNode && childOffset == fromLocal && childOffset + childNode.nodeSize == toLocal) {
      let mapped = children[i + 2].mapInner(mapping, childNode, from + 1, oldChildren[i] + oldOffset + 1, options);
      if (mapped != empty) {
        children[i] = fromLocal;
        children[i + 1] = toLocal;
        children[i + 2] = mapped;
      } else {
        children[i + 1] = -2;
        mustRebuild = true;
      }
    } else {
      mustRebuild = true;
    }
  }
  if (mustRebuild) {
    let decorations = mapAndGatherRemainingDecorations(children, oldChildren, newLocal, mapping, offset, oldOffset, options);
    let built = buildTree(decorations, node, 0, options);
    newLocal = built.local;
    for (let i = 0; i < children.length; i += 3) if (children[i + 1] < 0) {
      children.splice(i, 3);
      i -= 3;
    }
    for (let i = 0, j = 0; i < built.children.length; i += 3) {
      let from = built.children[i];
      while (j < children.length && children[j] < from) j += 3;
      children.splice(j, 0, built.children[i], built.children[i + 1], built.children[i + 2]);
    }
  }
  return new DecorationSet(newLocal.sort(byPos), children);
}
function moveSpans(spans, offset) {
  if (!offset || !spans.length) return spans;
  let result = [];
  for (let i = 0; i < spans.length; i++) {
    let span = spans[i];
    result.push(new Decoration(span.from + offset, span.to + offset, span.type));
  }
  return result;
}
function mapAndGatherRemainingDecorations(children, oldChildren, decorations, mapping, offset, oldOffset, options) {
  function gather(set, oldOffset2) {
    for (let i = 0; i < set.local.length; i++) {
      let mapped = set.local[i].map(mapping, offset, oldOffset2);
      if (mapped) decorations.push(mapped);else if (options.onRemove) options.onRemove(set.local[i].spec);
    }
    for (let i = 0; i < set.children.length; i += 3) gather(set.children[i + 2], set.children[i] + oldOffset2 + 1);
  }
  for (let i = 0; i < children.length; i += 3) if (children[i + 1] == -1) gather(children[i + 2], oldChildren[i] + oldOffset + 1);
  return decorations;
}
function takeSpansForNode(spans, node, offset) {
  if (node.isLeaf) return null;
  let end = offset + node.nodeSize,
    found = null;
  for (let i = 0, span; i < spans.length; i++) {
    if ((span = spans[i]) && span.from > offset && span.to < end) {
      (found || (found = [])).push(span);
      spans[i] = null;
    }
  }
  return found;
}
function withoutNulls(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) if (array[i] != null) result.push(array[i]);
  return result;
}
function buildTree(spans, node, offset, options) {
  let children = [],
    hasNulls = false;
  node.forEach((childNode, localStart) => {
    let found = takeSpansForNode(spans, childNode, localStart + offset);
    if (found) {
      hasNulls = true;
      let subtree = buildTree(found, childNode, offset + localStart + 1, options);
      if (subtree != empty) children.push(localStart, localStart + childNode.nodeSize, subtree);
    }
  });
  let locals = moveSpans(hasNulls ? withoutNulls(spans) : spans, -offset).sort(byPos);
  for (let i = 0; i < locals.length; i++) if (!locals[i].type.valid(node, locals[i])) {
    if (options.onRemove) options.onRemove(locals[i].spec);
    locals.splice(i--, 1);
  }
  return locals.length || children.length ? new DecorationSet(locals, children) : empty;
}
function byPos(a, b) {
  return a.from - b.from || a.to - b.to;
}
function removeOverlap(spans) {
  let working = spans;
  for (let i = 0; i < working.length - 1; i++) {
    let span = working[i];
    if (span.from != span.to) for (let j = i + 1; j < working.length; j++) {
      let next = working[j];
      if (next.from == span.from) {
        if (next.to != span.to) {
          if (working == spans) working = spans.slice();
          working[j] = next.copy(next.from, span.to);
          insertAhead(working, j + 1, next.copy(span.to, next.to));
        }
        continue;
      } else {
        if (next.from < span.to) {
          if (working == spans) working = spans.slice();
          working[i] = span.copy(span.from, next.from);
          insertAhead(working, j, span.copy(next.from, span.to));
        }
        break;
      }
    }
  }
  return working;
}
function insertAhead(array, i, deco) {
  while (i < array.length && byPos(deco, array[i]) > 0) i++;
  array.splice(i, 0, deco);
}
function viewDecorations(view) {
  let found = [];
  view.someProp("decorations", f => {
    let result = f(view.state);
    if (result && result != empty) found.push(result);
  });
  if (view.cursorWrapper) found.push(DecorationSet.create(view.state.doc, [view.cursorWrapper.deco]));
  return DecorationGroup.from(found);
}
var observeOptions = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true
};
var useCharData = ie && ie_version <= 11;
var SelectionState = class {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(sel) {
    this.anchorNode = sel.anchorNode;
    this.anchorOffset = sel.anchorOffset;
    this.focusNode = sel.focusNode;
    this.focusOffset = sel.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(sel) {
    return sel.anchorNode == this.anchorNode && sel.anchorOffset == this.anchorOffset && sel.focusNode == this.focusNode && sel.focusOffset == this.focusOffset;
  }
};
var DOMObserver = class {
  constructor(view, handleDOMChange) {
    this.view = view;
    this.handleDOMChange = handleDOMChange;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new SelectionState();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer = window.MutationObserver && new window.MutationObserver(mutations => {
      for (let i = 0; i < mutations.length; i++) this.queue.push(mutations[i]);
      if (ie && ie_version <= 11 && mutations.some(m => m.type == "childList" && m.removedNodes.length || m.type == "characterData" && m.oldValue.length > m.target.nodeValue.length)) this.flushSoon();else this.flush();
    });
    if (useCharData) {
      this.onCharData = e => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0) this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1;
      this.flush();
    }, 20);
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, observeOptions);
    }
    if (this.onCharData) this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData);
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let take = this.observer.takeRecords();
      if (take.length) {
        for (let i = 0; i < take.length; i++) this.queue.push(take[i]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData) this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData);
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => this.suppressingSelectionUpdates = false, 50);
  }
  onSelectionChange() {
    if (!hasFocusAndSelection(this.view)) return;
    if (this.suppressingSelectionUpdates) return selectionToDOM(this.view);
    if (ie && ie_version <= 11 && !this.view.state.selection.empty) {
      let sel = this.view.domSelectionRange();
      if (sel.focusNode && isEquivalentPosition(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset)) return this.flushSoon();
    }
    this.flush();
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(sel) {
    if (!sel.focusNode) return true;
    let ancestors = /* @__PURE__ */new Set(),
      container;
    for (let scan = sel.focusNode; scan; scan = parentNode(scan)) ancestors.add(scan);
    for (let scan = sel.anchorNode; scan; scan = parentNode(scan)) if (ancestors.has(scan)) {
      container = scan;
      break;
    }
    let desc = container && this.view.docView.nearestDesc(container);
    if (desc && desc.ignoreMutation({
      type: "selection",
      target: container.nodeType == 3 ? container.parentNode : container
    })) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer) for (let mut of this.observer.takeRecords()) this.queue.push(mut);
    return this.queue;
  }
  flush() {
    let {
      view
    } = this;
    if (!view.docView || this.flushingSoon > -1) return;
    let mutations = this.pendingRecords();
    if (mutations.length) this.queue = [];
    let sel = view.domSelectionRange();
    let newSel = !this.suppressingSelectionUpdates && !this.currentSelection.eq(sel) && hasFocusAndSelection(view) && !this.ignoreSelectionChange(sel);
    let from = -1,
      to = -1,
      typeOver = false,
      added = [];
    if (view.editable) {
      for (let i = 0; i < mutations.length; i++) {
        let result = this.registerMutation(mutations[i], added);
        if (result) {
          from = from < 0 ? result.from : Math.min(result.from, from);
          to = to < 0 ? result.to : Math.max(result.to, to);
          if (result.typeOver) typeOver = true;
        }
      }
    }
    if (gecko && added.length) {
      let brs = added.filter(n => n.nodeName == "BR");
      if (brs.length == 2) {
        let [a, b] = brs;
        if (a.parentNode && a.parentNode.parentNode == b.parentNode) b.remove();else a.remove();
      } else {
        let {
          focusNode
        } = this.currentSelection;
        for (let br of brs) {
          let parent = br.parentNode;
          if (parent && parent.nodeName == "LI" && (!focusNode || blockParent(view, focusNode) != parent)) br.remove();
        }
      }
    }
    let readSel = null;
    if (from < 0 && newSel && view.input.lastFocus > Date.now() - 200 && Math.max(view.input.lastTouch, view.input.lastClick.time) < Date.now() - 300 && selectionCollapsed(sel) && (readSel = selectionFromDOM(view)) && readSel.eq(import_prosemirror_state.Selection.near(view.state.doc.resolve(0), 1))) {
      view.input.lastFocus = 0;
      selectionToDOM(view);
      this.currentSelection.set(sel);
      view.scrollToSelection();
    } else if (from > -1 || newSel) {
      if (from > -1) {
        view.docView.markDirty(from, to);
        checkCSS(view);
      }
      this.handleDOMChange(from, to, typeOver, added);
      if (view.docView && view.docView.dirty) view.updateState(view.state);else if (!this.currentSelection.eq(sel)) selectionToDOM(view);
      this.currentSelection.set(sel);
    }
  }
  registerMutation(mut, added) {
    if (added.indexOf(mut.target) > -1) return null;
    let desc = this.view.docView.nearestDesc(mut.target);
    if (mut.type == "attributes" && (desc == this.view.docView || mut.attributeName == "contenteditable" ||
    // Firefox sometimes fires spurious events for null/empty styles
    mut.attributeName == "style" && !mut.oldValue && !mut.target.getAttribute("style"))) return null;
    if (!desc || desc.ignoreMutation(mut)) return null;
    if (mut.type == "childList") {
      for (let i = 0; i < mut.addedNodes.length; i++) {
        let node = mut.addedNodes[i];
        added.push(node);
        if (node.nodeType == 3) this.lastChangedTextNode = node;
      }
      if (desc.contentDOM && desc.contentDOM != desc.dom && !desc.contentDOM.contains(mut.target)) return {
        from: desc.posBefore,
        to: desc.posAfter
      };
      let prev = mut.previousSibling,
        next = mut.nextSibling;
      if (ie && ie_version <= 11 && mut.addedNodes.length) {
        for (let i = 0; i < mut.addedNodes.length; i++) {
          let {
            previousSibling,
            nextSibling
          } = mut.addedNodes[i];
          if (!previousSibling || Array.prototype.indexOf.call(mut.addedNodes, previousSibling) < 0) prev = previousSibling;
          if (!nextSibling || Array.prototype.indexOf.call(mut.addedNodes, nextSibling) < 0) next = nextSibling;
        }
      }
      let fromOffset = prev && prev.parentNode == mut.target ? domIndex(prev) + 1 : 0;
      let from = desc.localPosFromDOM(mut.target, fromOffset, -1);
      let toOffset = next && next.parentNode == mut.target ? domIndex(next) : mut.target.childNodes.length;
      let to = desc.localPosFromDOM(mut.target, toOffset, 1);
      return {
        from,
        to
      };
    } else if (mut.type == "attributes") {
      return {
        from: desc.posAtStart - desc.border,
        to: desc.posAtEnd + desc.border
      };
    } else {
      this.lastChangedTextNode = mut.target;
      return {
        from: desc.posAtStart,
        to: desc.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: mut.target.nodeValue == mut.oldValue
      };
    }
  }
};
var cssChecked = /* @__PURE__ */new WeakMap();
var cssCheckWarned = false;
function checkCSS(view) {
  if (cssChecked.has(view)) return;
  cssChecked.set(view, null);
  if (["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(view.dom).whiteSpace) !== -1) {
    view.requiresGeckoHackNode = gecko;
    if (cssCheckWarned) return;
    console["warn"]("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");
    cssCheckWarned = true;
  }
}
function rangeToSelectionRange(view, range) {
  let anchorNode = range.startContainer,
    anchorOffset = range.startOffset;
  let focusNode = range.endContainer,
    focusOffset = range.endOffset;
  let currentAnchor = view.domAtPos(view.state.selection.anchor);
  if (isEquivalentPosition(currentAnchor.node, currentAnchor.offset, focusNode, focusOffset)) [anchorNode, anchorOffset, focusNode, focusOffset] = [focusNode, focusOffset, anchorNode, anchorOffset];
  return {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  };
}
function safariShadowSelectionRange(view, selection) {
  if (selection.getComposedRanges) {
    let range = selection.getComposedRanges(view.root)[0];
    if (range) return rangeToSelectionRange(view, range);
  }
  let found;
  function read(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    found = event.getTargetRanges()[0];
  }
  view.dom.addEventListener("beforeinput", read, true);
  document.execCommand("indent");
  view.dom.removeEventListener("beforeinput", read, true);
  return found ? rangeToSelectionRange(view, found) : null;
}
function blockParent(view, node) {
  for (let p = node.parentNode; p && p != view.dom; p = p.parentNode) {
    let desc = view.docView.nearestDesc(p, true);
    if (desc && desc.node.isBlock) return p;
  }
  return null;
}
function parseBetween(view, from_, to_) {
  let {
    node: parent,
    fromOffset,
    toOffset,
    from,
    to
  } = view.docView.parseRange(from_, to_);
  let domSel = view.domSelectionRange();
  let find;
  let anchor = domSel.anchorNode;
  if (anchor && view.dom.contains(anchor.nodeType == 1 ? anchor : anchor.parentNode)) {
    find = [{
      node: anchor,
      offset: domSel.anchorOffset
    }];
    if (!selectionCollapsed(domSel)) find.push({
      node: domSel.focusNode,
      offset: domSel.focusOffset
    });
  }
  if (chrome && view.input.lastKeyCode === 8) {
    for (let off = toOffset; off > fromOffset; off--) {
      let node = parent.childNodes[off - 1],
        desc = node.pmViewDesc;
      if (node.nodeName == "BR" && !desc) {
        toOffset = off;
        break;
      }
      if (!desc || desc.size) break;
    }
  }
  let startDoc = view.state.doc;
  let parser = view.someProp("domParser") || import_prosemirror_model.DOMParser.fromSchema(view.state.schema);
  let $from = startDoc.resolve(from);
  let sel = null,
    doc2 = parser.parse(parent, {
      topNode: $from.parent,
      topMatch: $from.parent.contentMatchAt($from.index()),
      topOpen: true,
      from: fromOffset,
      to: toOffset,
      preserveWhitespace: $from.parent.type.whitespace == "pre" ? "full" : true,
      findPositions: find,
      ruleFromNode,
      context: $from
    });
  if (find && find[0].pos != null) {
    let anchor2 = find[0].pos,
      head = find[1] && find[1].pos;
    if (head == null) head = anchor2;
    sel = {
      anchor: anchor2 + from,
      head: head + from
    };
  }
  return {
    doc: doc2,
    sel,
    from,
    to
  };
}
function ruleFromNode(dom) {
  let desc = dom.pmViewDesc;
  if (desc) {
    return desc.parseRule();
  } else if (dom.nodeName == "BR" && dom.parentNode) {
    if (safari && /^(ul|ol)$/i.test(dom.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip
      };
    } else if (dom.parentNode.lastChild == dom || safari && /^(tr|table)$/i.test(dom.parentNode.nodeName)) {
      return {
        ignore: true
      };
    }
  } else if (dom.nodeName == "IMG" && dom.getAttribute("mark-placeholder")) {
    return {
      ignore: true
    };
  }
  return null;
}
var isInline = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function readDOMChange(view, from, to, typeOver, addedNodes) {
  let compositionID = view.input.compositionPendingChanges || (view.composing ? view.input.compositionID : 0);
  view.input.compositionPendingChanges = 0;
  if (from < 0) {
    let origin = view.input.lastSelectionTime > Date.now() - 50 ? view.input.lastSelectionOrigin : null;
    let newSel = selectionFromDOM(view, origin);
    if (newSel && !view.state.selection.eq(newSel)) {
      if (chrome && android && view.input.lastKeyCode === 13 && Date.now() - 100 < view.input.lastKeyCodeTime && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) return;
      let tr = view.state.tr.setSelection(newSel);
      if (origin == "pointer") tr.setMeta("pointer", true);else if (origin == "key") tr.scrollIntoView();
      if (compositionID) tr.setMeta("composition", compositionID);
      view.dispatch(tr);
    }
    return;
  }
  let $before = view.state.doc.resolve(from);
  let shared = $before.sharedDepth(to);
  from = $before.before(shared + 1);
  to = view.state.doc.resolve(to).after(shared + 1);
  let sel = view.state.selection;
  let parse = parseBetween(view, from, to);
  let doc2 = view.state.doc,
    compare = doc2.slice(parse.from, parse.to);
  let preferredPos, preferredSide;
  if (view.input.lastKeyCode === 8 && Date.now() - 100 < view.input.lastKeyCodeTime) {
    preferredPos = view.state.selection.to;
    preferredSide = "end";
  } else {
    preferredPos = view.state.selection.from;
    preferredSide = "start";
  }
  view.input.lastKeyCode = null;
  let change = findDiff(compare.content, parse.doc.content, parse.from, preferredPos, preferredSide);
  if (change) view.input.domChangeCount++;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 || android) && addedNodes.some(n => n.nodeType == 1 && !isInline.test(n.nodeName)) && (!change || change.endA >= change.endB) && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (!change) {
    if (typeOver && sel instanceof import_prosemirror_state.TextSelection && !sel.empty && sel.$head.sameParent(sel.$anchor) && !view.composing && !(parse.sel && parse.sel.anchor != parse.sel.head)) {
      change = {
        start: sel.from,
        endA: sel.to,
        endB: sel.to
      };
    } else {
      if (parse.sel) {
        let sel2 = resolveSelection(view, view.state.doc, parse.sel);
        if (sel2 && !sel2.eq(view.state.selection)) {
          let tr = view.state.tr.setSelection(sel2);
          if (compositionID) tr.setMeta("composition", compositionID);
          view.dispatch(tr);
        }
      }
      return;
    }
  }
  if (view.state.selection.from < view.state.selection.to && change.start == change.endB && view.state.selection instanceof import_prosemirror_state.TextSelection) {
    if (change.start > view.state.selection.from && change.start <= view.state.selection.from + 2 && view.state.selection.from >= parse.from) {
      change.start = view.state.selection.from;
    } else if (change.endA < view.state.selection.to && change.endA >= view.state.selection.to - 2 && view.state.selection.to <= parse.to) {
      change.endB += view.state.selection.to - change.endA;
      change.endA = view.state.selection.to;
    }
  }
  if (ie && ie_version <= 11 && change.endB == change.start + 1 && change.endA == change.start && change.start > parse.from && parse.doc.textBetween(change.start - parse.from - 1, change.start - parse.from + 1) == " \xA0") {
    change.start--;
    change.endA--;
    change.endB--;
  }
  let $from = parse.doc.resolveNoCache(change.start - parse.from);
  let $to = parse.doc.resolveNoCache(change.endB - parse.from);
  let $fromA = doc2.resolve(change.start);
  let inlineChange = $from.sameParent($to) && $from.parent.inlineContent && $fromA.end() >= change.endA;
  let nextSel;
  if ((ios && view.input.lastIOSEnter > Date.now() - 225 && (!inlineChange || addedNodes.some(n => n.nodeName == "DIV" || n.nodeName == "P")) || !inlineChange && $from.pos < parse.doc.content.size && (!$from.sameParent($to) || !$from.parent.inlineContent) && !/\S/.test(parse.doc.textBetween($from.pos, $to.pos, "", "")) && (nextSel = import_prosemirror_state.Selection.findFrom(parse.doc.resolve($from.pos + 1), 1, true)) && nextSel.head > $from.pos) && view.someProp("handleKeyDown", f => f(view, keyEvent(13, "Enter")))) {
    view.input.lastIOSEnter = 0;
    return;
  }
  if (view.state.selection.anchor > change.start && looksLikeBackspace(doc2, change.start, change.endA, $from, $to) && view.someProp("handleKeyDown", f => f(view, keyEvent(8, "Backspace")))) {
    if (android && chrome) view.domObserver.suppressSelectionUpdates();
    return;
  }
  if (chrome && change.endB == change.start) view.input.lastChromeDelete = Date.now();
  if (android && !inlineChange && $from.start() != $to.start() && $to.parentOffset == 0 && $from.depth == $to.depth && parse.sel && parse.sel.anchor == parse.sel.head && parse.sel.head == change.endA) {
    change.endB -= 2;
    $to = parse.doc.resolveNoCache(change.endB - parse.from);
    setTimeout(() => {
      view.someProp("handleKeyDown", function (f) {
        return f(view, keyEvent(13, "Enter"));
      });
    }, 20);
  }
  let chFrom = change.start,
    chTo = change.endA;
  let mkTr = base => {
    let tr = base || view.state.tr.replace(chFrom, chTo, parse.doc.slice(change.start - parse.from, change.endB - parse.from));
    if (parse.sel) {
      let sel2 = resolveSelection(view, tr.doc, parse.sel);
      if (sel2 && !(chrome && view.composing && sel2.empty && (change.start != change.endB || view.input.lastChromeDelete < Date.now() - 100) && (sel2.head == chFrom || sel2.head == tr.mapping.map(chTo) - 1) || ie && sel2.empty && sel2.head == chFrom)) tr.setSelection(sel2);
    }
    if (compositionID) tr.setMeta("composition", compositionID);
    return tr.scrollIntoView();
  };
  let markChange;
  if (inlineChange) {
    if ($from.pos == $to.pos) {
      if (ie && ie_version <= 11 && $from.parentOffset == 0) {
        view.domObserver.suppressSelectionUpdates();
        setTimeout(() => selectionToDOM(view), 20);
      }
      let tr = mkTr(view.state.tr.delete(chFrom, chTo));
      let marks = doc2.resolve(change.start).marksAcross(doc2.resolve(change.endA));
      if (marks) tr.ensureMarks(marks);
      view.dispatch(tr);
    } else if (
    // Adding or removing a mark
    change.endA == change.endB && (markChange = isMarkChange($from.parent.content.cut($from.parentOffset, $to.parentOffset), $fromA.parent.content.cut($fromA.parentOffset, change.endA - $fromA.start())))) {
      let tr = mkTr(view.state.tr);
      if (markChange.type == "add") tr.addMark(chFrom, chTo, markChange.mark);else tr.removeMark(chFrom, chTo, markChange.mark);
      view.dispatch(tr);
    } else if ($from.parent.child($from.index()).isText && $from.index() == $to.index() - ($to.textOffset ? 0 : 1)) {
      let text = $from.parent.textBetween($from.parentOffset, $to.parentOffset);
      let deflt = () => mkTr(view.state.tr.insertText(text, chFrom, chTo));
      if (!view.someProp("handleTextInput", f => f(view, chFrom, chTo, text, deflt))) view.dispatch(deflt());
    }
  } else {
    view.dispatch(mkTr());
  }
}
function resolveSelection(view, doc2, parsedSel) {
  if (Math.max(parsedSel.anchor, parsedSel.head) > doc2.content.size) return null;
  return selectionBetween(view, doc2.resolve(parsedSel.anchor), doc2.resolve(parsedSel.head));
}
function isMarkChange(cur, prev) {
  let curMarks = cur.firstChild.marks,
    prevMarks = prev.firstChild.marks;
  let added = curMarks,
    removed = prevMarks,
    type,
    mark,
    update;
  for (let i = 0; i < prevMarks.length; i++) added = prevMarks[i].removeFromSet(added);
  for (let i = 0; i < curMarks.length; i++) removed = curMarks[i].removeFromSet(removed);
  if (added.length == 1 && removed.length == 0) {
    mark = added[0];
    type = "add";
    update = node => node.mark(mark.addToSet(node.marks));
  } else if (added.length == 0 && removed.length == 1) {
    mark = removed[0];
    type = "remove";
    update = node => node.mark(mark.removeFromSet(node.marks));
  } else {
    return null;
  }
  let updated = [];
  for (let i = 0; i < prev.childCount; i++) updated.push(update(prev.child(i)));
  if (import_prosemirror_model.Fragment.from(updated).eq(cur)) return {
    mark,
    type
  };
}
function looksLikeBackspace(old, start, end, $newStart, $newEnd) {
  if (
  // The content must have shrunk
  end - start <= $newEnd.pos - $newStart.pos ||
  // newEnd must point directly at or after the end of the block that newStart points into
  skipClosingAndOpening($newStart, true, false) < $newEnd.pos) return false;
  let $start = old.resolve(start);
  if (!$newStart.parent.isTextblock) {
    let after = $start.nodeAfter;
    return after != null && end == start + after.nodeSize;
  }
  if ($start.parentOffset < $start.parent.content.size || !$start.parent.isTextblock) return false;
  let $next = old.resolve(skipClosingAndOpening($start, true, true));
  if (!$next.parent.isTextblock || $next.pos > end || skipClosingAndOpening($next, true, false) < end) return false;
  return $newStart.parent.content.cut($newStart.parentOffset).eq($next.parent.content);
}
function skipClosingAndOpening($pos, fromEnd, mayOpen) {
  let depth = $pos.depth,
    end = fromEnd ? $pos.end() : $pos.pos;
  while (depth > 0 && (fromEnd || $pos.indexAfter(depth) == $pos.node(depth).childCount)) {
    depth--;
    end++;
    fromEnd = false;
  }
  if (mayOpen) {
    let next = $pos.node(depth).maybeChild($pos.indexAfter(depth));
    while (next && !next.isLeaf) {
      next = next.firstChild;
      end++;
    }
  }
  return end;
}
function findDiff(a, b, pos, preferredPos, preferredSide) {
  let start = a.findDiffStart(b, pos);
  if (start == null) return null;
  let {
    a: endA,
    b: endB
  } = a.findDiffEnd(b, pos + a.size, pos + b.size);
  if (preferredSide == "end") {
    let adjust = Math.max(0, start - Math.min(endA, endB));
    preferredPos -= endA + adjust - start;
  }
  if (endA < start && a.size < b.size) {
    let move = preferredPos <= start && preferredPos >= endA ? start - preferredPos : 0;
    start -= move;
    if (start && start < b.size && isSurrogatePair(b.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endB = start + (endB - endA);
    endA = start;
  } else if (endB < start) {
    let move = preferredPos <= start && preferredPos >= endB ? start - preferredPos : 0;
    start -= move;
    if (start && start < a.size && isSurrogatePair(a.textBetween(start - 1, start + 1))) start += move ? 1 : -1;
    endA = start + (endA - endB);
    endB = start;
  }
  return {
    start,
    endA,
    endB
  };
}
function isSurrogatePair(str) {
  if (str.length != 2) return false;
  let a = str.charCodeAt(0),
    b = str.charCodeAt(1);
  return a >= 56320 && a <= 57343 && b >= 55296 && b <= 56319;
}
var __parseFromClipboard = parseFromClipboard;
var __endComposition = endComposition;
var EditorView = class {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(place, props) {
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = void 0;
    this.input = new InputState();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = props;
    this.state = props.state;
    this.directPlugins = props.plugins || [];
    this.directPlugins.forEach(checkStateComponent);
    this.dispatch = this.dispatch.bind(this);
    this.dom = place && place.mount || document.createElement("div");
    if (place) {
      if (place.appendChild) place.appendChild(this.dom);else if (typeof place == "function") place(this.dom);else if (place.mount) this.mounted = true;
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    this.nodeViews = buildNodeViews(this);
    this.docView = docViewDesc(this.state.doc, computeDocDeco(this), viewDecorations(this), this.dom, this);
    this.domObserver = new DOMObserver(this, (from, to, typeOver, added) => readDOMChange(this, from, to, typeOver, added));
    this.domObserver.start();
    initInput(this);
    this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let prev = this._props;
      this._props = {};
      for (let name in prev) this._props[name] = prev[name];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(props) {
    if (props.handleDOMEvents != this._props.handleDOMEvents) ensureListeners(this);
    let prevProps = this._props;
    this._props = props;
    if (props.plugins) {
      props.plugins.forEach(checkStateComponent);
      this.directPlugins = props.plugins;
    }
    this.updateStateInner(props.state, prevProps);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(props) {
    let updated = {};
    for (let name in this._props) updated[name] = this._props[name];
    updated.state = this.state;
    for (let name in props) updated[name] = props[name];
    this.update(updated);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(state) {
    this.updateStateInner(state, this._props);
  }
  updateStateInner(state, prevProps) {
    var _a;
    let prev = this.state,
      redraw = false,
      updateSel = false;
    if (state.storedMarks && this.composing) {
      clearComposition(this);
      updateSel = true;
    }
    this.state = state;
    let pluginsChanged = prev.plugins != state.plugins || this._props.plugins != prevProps.plugins;
    if (pluginsChanged || this._props.plugins != prevProps.plugins || this._props.nodeViews != prevProps.nodeViews) {
      let nodeViews = buildNodeViews(this);
      if (changedNodeViews(nodeViews, this.nodeViews)) {
        this.nodeViews = nodeViews;
        redraw = true;
      }
    }
    if (pluginsChanged || prevProps.handleDOMEvents != this._props.handleDOMEvents) {
      ensureListeners(this);
    }
    this.editable = getEditable(this);
    updateCursorWrapper(this);
    let innerDeco = viewDecorations(this),
      outerDeco = computeDocDeco(this);
    let scroll = prev.plugins != state.plugins && !prev.doc.eq(state.doc) ? "reset" : state.scrollToSelection > prev.scrollToSelection ? "to selection" : "preserve";
    let updateDoc = redraw || !this.docView.matchesNode(state.doc, outerDeco, innerDeco);
    if (updateDoc || !state.selection.eq(prev.selection)) updateSel = true;
    let oldScrollPos = scroll == "preserve" && updateSel && this.dom.style.overflowAnchor == null && storeScrollPos(this);
    if (updateSel) {
      this.domObserver.stop();
      let forceSelUpdate = updateDoc && (ie || chrome) && !this.composing && !prev.selection.empty && !state.selection.empty && selectionContextChanged(prev.selection, state.selection);
      if (updateDoc) {
        let chromeKludge = chrome ? this.trackWrites = this.domSelectionRange().focusNode : null;
        if (this.composing) this.input.compositionNode = findCompositionNode(this);
        if (redraw || !this.docView.update(state.doc, outerDeco, innerDeco, this)) {
          this.docView.updateOuterDeco(outerDeco);
          this.docView.destroy();
          this.docView = docViewDesc(state.doc, outerDeco, innerDeco, this.dom, this);
        }
        if (chromeKludge && !this.trackWrites) forceSelUpdate = true;
      }
      if (forceSelUpdate || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && anchorInRightPlace(this))) {
        selectionToDOM(this, forceSelUpdate);
      } else {
        syncNodeSelection(this, state.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(prev);
    if (((_a = this.dragging) === null || _a === void 0 ? void 0 : _a.node) && !prev.doc.eq(state.doc)) this.updateDraggedNode(this.dragging, prev);
    if (scroll == "reset") {
      this.dom.scrollTop = 0;
    } else if (scroll == "to selection") {
      this.scrollToSelection();
    } else if (oldScrollPos) {
      resetScrollPos(oldScrollPos);
    }
  }
  /**
  @internal
  */
  scrollToSelection() {
    let startDOM = this.domSelectionRange().focusNode;
    if (!startDOM || !this.dom.contains(startDOM.nodeType == 1 ? startDOM : startDOM.parentNode)) ;else if (this.someProp("handleScrollToSelection", f => f(this))) ;else if (this.state.selection instanceof import_prosemirror_state.NodeSelection) {
      let target = this.docView.domAfterPos(this.state.selection.from);
      if (target.nodeType == 1) scrollRectIntoView(this, target.getBoundingClientRect(), startDOM);
    } else {
      scrollRectIntoView(this, this.coordsAtPos(this.state.selection.head, 1), startDOM);
    }
  }
  destroyPluginViews() {
    let view;
    while (view = this.pluginViews.pop()) if (view.destroy) view.destroy();
  }
  updatePluginViews(prevState) {
    if (!prevState || prevState.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let i = 0; i < this.directPlugins.length; i++) {
        let plugin = this.directPlugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
      for (let i = 0; i < this.state.plugins.length; i++) {
        let plugin = this.state.plugins[i];
        if (plugin.spec.view) this.pluginViews.push(plugin.spec.view(this));
      }
    } else {
      for (let i = 0; i < this.pluginViews.length; i++) {
        let pluginView = this.pluginViews[i];
        if (pluginView.update) pluginView.update(this, prevState);
      }
    }
  }
  updateDraggedNode(dragging, prev) {
    let sel = dragging.node,
      found = -1;
    if (this.state.doc.nodeAt(sel.from) == sel.node) {
      found = sel.from;
    } else {
      let movedPos = sel.from + (this.state.doc.content.size - prev.doc.content.size);
      let moved = movedPos > 0 && this.state.doc.nodeAt(movedPos);
      if (moved == sel.node) found = movedPos;
    }
    this.dragging = new Dragging(dragging.slice, dragging.move, found < 0 ? void 0 : import_prosemirror_state.NodeSelection.create(this.state.doc, found));
  }
  someProp(propName, f) {
    let prop = this._props && this._props[propName],
      value;
    if (prop != null && (value = f ? f(prop) : prop)) return value;
    for (let i = 0; i < this.directPlugins.length; i++) {
      let prop2 = this.directPlugins[i].props[propName];
      if (prop2 != null && (value = f ? f(prop2) : prop2)) return value;
    }
    let plugins = this.state.plugins;
    if (plugins) for (let i = 0; i < plugins.length; i++) {
      let prop2 = plugins[i].props[propName];
      if (prop2 != null && (value = f ? f(prop2) : prop2)) return value;
    }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (ie) {
      let node = this.root.activeElement;
      if (node == this.dom) return true;
      if (!node || !this.dom.contains(node)) return false;
      while (node && this.dom != node && this.dom.contains(node)) {
        if (node.contentEditable == "false") return false;
        node = node.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop();
    if (this.editable) focusPreventScroll(this.dom);
    selectionToDOM(this);
    this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let cached = this._root;
    if (cached == null) for (let search = this.dom.parentNode; search; search = search.parentNode) {
      if (search.nodeType == 9 || search.nodeType == 11 && search.host) {
        if (!search.getSelection) Object.getPrototypeOf(search).getSelection = () => search.ownerDocument.getSelection();
        return this._root = search;
      }
    }
    return cached || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(coords) {
    return posAtCoords(this, coords);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(pos, side = 1) {
    return coordsAtPos(this, pos, side);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(pos, side = 0) {
    return this.docView.domFromPos(pos, side);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(pos) {
    let desc = this.docView.descAt(pos);
    return desc ? desc.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(node, offset, bias = -1) {
    let pos = this.docView.posFromDOM(node, offset, bias);
    if (pos == null) throw new RangeError("DOM position not inside the editor");
    return pos;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(dir, state) {
    return endOfTextblock(this, state || this.state, dir);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(html, event) {
    return doPaste(this, "", html, false, event || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(text, event) {
    return doPaste(this, text, null, true, event || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(slice) {
    return serializeForClipboard(this, slice);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    if (!this.docView) return;
    destroyInput(this);
    this.destroyPluginViews();
    if (this.mounted) {
      this.docView.update(this.state.doc, [], viewDecorations(this), this);
      this.dom.textContent = "";
    } else if (this.dom.parentNode) {
      this.dom.parentNode.removeChild(this.dom);
    }
    this.docView.destroy();
    this.docView = null;
    clearReusedRange();
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(event) {
    return dispatchEvent(this, event);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let sel = this.domSelection();
    if (!sel) return {
      focusNode: null,
      focusOffset: 0,
      anchorNode: null,
      anchorOffset: 0
    };
    return safari && this.root.nodeType === 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariShadowSelectionRange(this, sel) || sel;
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
};
EditorView.prototype.dispatch = function (tr) {
  let dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) dispatchTransaction.call(this, tr);else this.updateState(this.state.apply(tr));
};
function computeDocDeco(view) {
  let attrs = /* @__PURE__ */Object.create(null);
  attrs.class = "ProseMirror";
  attrs.contenteditable = String(view.editable);
  view.someProp("attributes", value => {
    if (typeof value == "function") value = value(view.state);
    if (value) for (let attr in value) {
      if (attr == "class") attrs.class += " " + value[attr];else if (attr == "style") attrs.style = (attrs.style ? attrs.style + ";" : "") + value[attr];else if (!attrs[attr] && attr != "contenteditable" && attr != "nodeName") attrs[attr] = String(value[attr]);
    }
  });
  if (!attrs.translate) attrs.translate = "no";
  return [Decoration.node(0, view.state.doc.content.size, attrs)];
}
function updateCursorWrapper(view) {
  if (view.markCursor) {
    let dom = document.createElement("img");
    dom.className = "ProseMirror-separator";
    dom.setAttribute("mark-placeholder", "true");
    dom.setAttribute("alt", "");
    view.cursorWrapper = {
      dom,
      deco: Decoration.widget(view.state.selection.from, dom, {
        raw: true,
        marks: view.markCursor
      })
    };
  } else {
    view.cursorWrapper = null;
  }
}
function getEditable(view) {
  return !view.someProp("editable", value => value(view.state) === false);
}
function selectionContextChanged(sel1, sel2) {
  let depth = Math.min(sel1.$anchor.sharedDepth(sel1.head), sel2.$anchor.sharedDepth(sel2.head));
  return sel1.$anchor.start(depth) != sel2.$anchor.start(depth);
}
function buildNodeViews(view) {
  let result = /* @__PURE__ */Object.create(null);
  function add(obj) {
    for (let prop in obj) if (!Object.prototype.hasOwnProperty.call(result, prop)) result[prop] = obj[prop];
  }
  view.someProp("nodeViews", add);
  view.someProp("markViews", add);
  return result;
}
function changedNodeViews(a, b) {
  let nA = 0,
    nB = 0;
  for (let prop in a) {
    if (a[prop] != b[prop]) return true;
    nA++;
  }
  for (let _ in b) nB++;
  return nA != nB;
}
function checkStateComponent(plugin) {
  if (plugin.spec.state || plugin.spec.filterTransaction || plugin.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLXZpZXcuMS40MC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLXZpZXcvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl92aWV3XzFfNDBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJEZWNvcmF0aW9uIiwiRGVjb3JhdGlvblNldCIsIkVkaXRvclZpZXciLCJfX2VuZENvbXBvc2l0aW9uIiwiX19wYXJzZUZyb21DbGlwYm9hcmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl9tb2RlbCIsImltcG9ydF9wcm9zZW1pcnJvcl90cmFuc2Zvcm0iLCJkb21JbmRleCIsIm5vZGUiLCJpbmRleCIsInByZXZpb3VzU2libGluZyIsInBhcmVudE5vZGUiLCJwYXJlbnQiLCJhc3NpZ25lZFNsb3QiLCJub2RlVHlwZSIsImhvc3QiLCJyZXVzZWRSYW5nZSIsInRleHRSYW5nZSIsImZyb20iLCJ0byIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNldEVuZCIsIm5vZGVWYWx1ZSIsImxlbmd0aCIsInNldFN0YXJ0IiwiY2xlYXJSZXVzZWRSYW5nZSIsImlzRXF1aXZhbGVudFBvc2l0aW9uIiwib2ZmIiwidGFyZ2V0Tm9kZSIsInRhcmdldE9mZiIsInNjYW5Gb3IiLCJhdG9tRWxlbWVudHMiLCJkaXIiLCJfYSIsIm5vZGVTaXplIiwiaGFzQmxvY2tEZXNjIiwidGVzdCIsIm5vZGVOYW1lIiwiY29udGVudEVkaXRhYmxlIiwiY2hpbGQiLCJjaGlsZE5vZGVzIiwicG1WaWV3RGVzYyIsImlnbm9yZUZvclNlbGVjdGlvbiIsInRleHROb2RlQmVmb3JlJDEiLCJvZmZzZXQiLCJ0ZXh0Tm9kZUFmdGVyJDEiLCJpc09uRWRnZSIsImF0U3RhcnQiLCJhdEVuZCIsImRvbSIsImRlc2MiLCJjdXIiLCJpc0Jsb2NrIiwiY29udGVudERPTSIsInNlbGVjdGlvbkNvbGxhcHNlZCIsImRvbVNlbCIsImZvY3VzTm9kZSIsImZvY3VzT2Zmc2V0IiwiYW5jaG9yTm9kZSIsImFuY2hvck9mZnNldCIsImtleUV2ZW50Iiwia2V5Q29kZSIsImtleSIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJjb2RlIiwiZGVlcEFjdGl2ZUVsZW1lbnQiLCJkb2MyIiwiZWx0IiwiYWN0aXZlRWxlbWVudCIsInNoYWRvd1Jvb3QiLCJjYXJldEZyb21Qb2ludCIsIngiLCJ5IiwiY2FyZXRQb3NpdGlvbkZyb21Qb2ludCIsInBvcyIsIm9mZnNldE5vZGUiLCJNYXRoIiwibWluIiwiXyIsImNhcmV0UmFuZ2VGcm9tUG9pbnQiLCJzdGFydENvbnRhaW5lciIsInN0YXJ0T2Zmc2V0IiwibmF2IiwibmF2aWdhdG9yIiwiZG9jIiwiYWdlbnQiLCJ1c2VyQWdlbnQiLCJpZV9lZGdlIiwiZXhlYyIsImllX3VwdG8xMCIsImllXzExdXAiLCJpZSIsImllX3ZlcnNpb24iLCJkb2N1bWVudE1vZGUiLCJnZWNrbyIsIl9jaHJvbWUiLCJjaHJvbWUiLCJjaHJvbWVfdmVyc2lvbiIsInNhZmFyaSIsInZlbmRvciIsImlvcyIsIm1heFRvdWNoUG9pbnRzIiwibWFjIiwicGxhdGZvcm0iLCJ3aW5kb3dzIiwiYW5kcm9pZCIsIndlYmtpdCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwid2Via2l0X3ZlcnNpb24iLCJ3aW5kb3dSZWN0IiwidnAiLCJkZWZhdWx0VmlldyIsInZpc3VhbFZpZXdwb3J0IiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJ0b3AiLCJib3R0b20iLCJoZWlnaHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldFNpZGUiLCJ2YWx1ZSIsInNpZGUiLCJjbGllbnRSZWN0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjYWxlWCIsIm9mZnNldFdpZHRoIiwic2NhbGVZIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsUmVjdEludG9WaWV3IiwidmlldyIsInN0YXJ0RE9NIiwic2Nyb2xsVGhyZXNob2xkIiwic29tZVByb3AiLCJzY3JvbGxNYXJnaW4iLCJvd25lckRvY3VtZW50IiwiYXRUb3AiLCJib2R5IiwiYm91bmRpbmciLCJtb3ZlWCIsIm1vdmVZIiwic2Nyb2xsQnkiLCJzdGFydFgiLCJzY3JvbGxMZWZ0Iiwic3RhcnRZIiwic2Nyb2xsVG9wIiwiZFgiLCJkWSIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsIm9mZnNldFBhcmVudCIsInN0b3JlU2Nyb2xsUG9zIiwibWF4IiwicmVmRE9NIiwicmVmVG9wIiwiaW5uZXJIZWlnaHQiLCJyb290IiwiZWxlbWVudEZyb21Qb2ludCIsImNvbnRhaW5zIiwibG9jYWxSZWN0Iiwic3RhY2siLCJzY3JvbGxTdGFjayIsInB1c2giLCJyZXNldFNjcm9sbFBvcyIsIm5ld1JlZlRvcCIsInJlc3RvcmVTY3JvbGxTdGFjayIsImRUb3AiLCJpIiwicHJldmVudFNjcm9sbFN1cHBvcnRlZCIsImZvY3VzUHJldmVudFNjcm9sbCIsInNldEFjdGl2ZSIsImZvY3VzIiwic3RvcmVkIiwicHJldmVudFNjcm9sbCIsImZpbmRPZmZzZXRJbk5vZGUiLCJjb29yZHMiLCJjbG9zZXN0IiwiZHhDbG9zZXN0IiwiY29vcmRzQ2xvc2VzdCIsInJvd0JvdCIsInJvd1RvcCIsImZpcnN0QmVsb3ciLCJjb29yZHNCZWxvdyIsImZpcnN0Q2hpbGQiLCJjaGlsZEluZGV4IiwibmV4dFNpYmxpbmciLCJyZWN0cyIsImdldENsaWVudFJlY3RzIiwiZHgiLCJmaW5kT2Zmc2V0SW5UZXh0IiwibGVuIiwic2luZ2xlUmVjdCIsImluUmVjdCIsInRhcmdldEtsdWRnZSIsInBvc0Zyb21FbGVtZW50IiwiYmlhcyIsImRvY1ZpZXciLCJwb3NGcm9tRE9NIiwicG9zRnJvbUNhcmV0Iiwib3V0c2lkZUJsb2NrIiwic2F3QmxvY2siLCJuZWFyZXN0RGVzYyIsInBvc0JlZm9yZSIsInBvc0FmdGVyIiwiaXNUZXh0IiwiYmVmb3JlIiwiZWxlbWVudCIsImJveCIsInN0YXJ0SSIsImZsb29yIiwiaiIsInBvc0F0Q29vcmRzIiwiY2FyZXQiLCJwIiwiZHJhZ2dhYmxlIiwibmV4dCIsInByZXYiLCJsYXN0Q2hpbGQiLCJzdGF0ZSIsImNvbnRlbnQiLCJzaXplIiwiaW5zaWRlIiwicG9zQXRTdGFydCIsImJvcmRlciIsIm5vblplcm8iLCJ0YXJnZXQiLCJmaXJzdCIsIkFycmF5IiwicHJvdG90eXBlIiwiZmluZCIsImNhbGwiLCJCSURJIiwiY29vcmRzQXRQb3MiLCJhdG9tIiwiZG9tRnJvbVBvcyIsInN1cHBvcnRFbXB0eVJhbmdlIiwicmVjdEJlZm9yZSIsInJlY3RBZnRlciIsImZsYXR0ZW5WIiwidGFrZVNpZGUiLCIkZG9tIiwicmVzb2x2ZSIsImlubGluZUNvbnRlbnQiLCJmbGF0dGVuSCIsImFmdGVyIiwiaWdub3JlRm9yQ29vcmRzIiwid2l0aEZsdXNoZWRTdGF0ZSIsImYiLCJ2aWV3U3RhdGUiLCJhY3RpdmUiLCJ1cGRhdGVTdGF0ZSIsImVuZE9mVGV4dGJsb2NrVmVydGljYWwiLCJzZWwiLCJzZWxlY3Rpb24iLCIkcG9zIiwiJGZyb20iLCIkdG8iLCJuZWFyZXN0IiwiYm94ZXMiLCJtYXliZVJUTCIsImVuZE9mVGV4dGJsb2NrSG9yaXpvbnRhbCIsIiRoZWFkIiwiaXNUZXh0YmxvY2siLCJwYXJlbnRPZmZzZXQiLCJkb21TZWxlY3Rpb24iLCJzdGFydCIsImVuZCIsInRleHRDb250ZW50IiwibW9kaWZ5Iiwib2xkTm9kZSIsIm9sZE9mZiIsImRvbVNlbGVjdGlvblJhbmdlIiwib2xkQmlkaUxldmVsIiwiY2FyZXRCaWRpTGV2ZWwiLCJwYXJlbnRET00iLCJkZXB0aCIsImRvbUFmdGVyUG9zIiwibmV3Tm9kZSIsIm5ld09mZiIsInJlc3VsdCIsImNvbGxhcHNlIiwiZXh0ZW5kIiwiY2FjaGVkU3RhdGUiLCJjYWNoZWREaXIiLCJjYWNoZWRSZXN1bHQiLCJlbmRPZlRleHRibG9jayIsIk5PVF9ESVJUWSIsIkNISUxEX0RJUlRZIiwiQ09OVEVOVF9ESVJUWSIsIk5PREVfRElSVFkiLCJWaWV3RGVzYyIsImNvbnN0cnVjdG9yIiwiY2hpbGRyZW4iLCJkaXJ0eSIsIm1hdGNoZXNXaWRnZXQiLCJ3aWRnZXQiLCJtYXRjaGVzTWFyayIsIm1hcmsiLCJtYXRjaGVzTm9kZSIsIm91dGVyRGVjbyIsImlubmVyRGVjbyIsIm1hdGNoZXNIYWNrIiwicGFyc2VSdWxlIiwic3RvcEV2ZW50IiwiZGVzdHJveSIsInBvc0JlZm9yZUNoaWxkIiwicG9zQXRFbmQiLCJsb2NhbFBvc0Zyb21ET00iLCJkb21CZWZvcmUiLCJkb21BZnRlciIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwic2VhcmNoIiwib25seU5vZGVzIiwiZ2V0RGVzYyIsIm5vZGVET00iLCJzY2FuIiwiZGVzY0F0IiwiaTIiLCJpbm5lciIsImN1clBvcyIsIlRyYWlsaW5nSGFja1ZpZXdEZXNjIiwiV2lkZ2V0Vmlld0Rlc2MiLCJlbnRlciIsImRvbUF0b20iLCJwYXJzZVJhbmdlIiwiYmFzZSIsImZyb21PZmZzZXQiLCJ0b09mZnNldCIsImNoaWxkQmFzZSIsImVtcHR5Q2hpbGRBdCIsIlJhbmdlRXJyb3IiLCJzZXRTZWxlY3Rpb24iLCJhbmNob3IiLCJoZWFkIiwiZm9yY2UiLCJhbmNob3JET00iLCJoZWFkRE9NIiwiZ2V0U2VsZWN0aW9uIiwic2VsUmFuZ2UiLCJicktsdWRnZSIsImRvbVNlbEV4dGVuZGVkIiwidG1wIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJpZ25vcmVNdXRhdGlvbiIsIm11dGF0aW9uIiwidHlwZSIsImNvbnRlbnRMb3N0IiwibWFya0RpcnR5Iiwic3RhcnRJbnNpZGUiLCJlbmRJbnNpZGUiLCJtYXJrUGFyZW50c0RpcnR5IiwibGV2ZWwiLCJ0ZXh0Iiwic2VsZiIsInRvRE9NIiwic3BlYyIsInJhdyIsIndyYXAiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJlcSIsImlnbm9yZSIsInN0b3AiLCJpZ25vcmVTZWxlY3Rpb24iLCJyZWxheGVkU2lkZSIsIkNvbXBvc2l0aW9uVmlld0Rlc2MiLCJ0ZXh0RE9NIiwibXV0Iiwib2xkVmFsdWUiLCJNYXJrVmlld0Rlc2MiLCJfTWFya1ZpZXdEZXNjIiwiY3JlYXRlIiwiaW5saW5lIiwiY3VzdG9tIiwibm9kZVZpZXdzIiwibmFtZSIsIkRPTVNlcmlhbGl6ZXIiLCJyZW5kZXJTcGVjIiwiYXR0cnMiLCJyZXBhcnNlSW5WaWV3IiwiY29udGVudEVsZW1lbnQiLCJzbGljZSIsImNvcHkiLCJub2RlcyIsInJlcGxhY2VOb2RlcyIsIk5vZGVWaWV3RGVzYyIsIl9Ob2RlVmlld0Rlc2MiLCJkZXNjT2JqIiwiY3JlYXRlVGV4dE5vZGUiLCJzcGVjMiIsImhhc0F0dHJpYnV0ZSIsImFwcGx5T3V0ZXJEZWNvIiwiQ3VzdG9tTm9kZVZpZXdEZXNjIiwiVGV4dFZpZXdEZXNjIiwicnVsZSIsIndoaXRlc3BhY2UiLCJwcmVzZXJ2ZVdoaXRlc3BhY2UiLCJnZXRDb250ZW50IiwiRnJhZ21lbnQiLCJlbXB0eSIsInNhbWVPdXRlckRlY28iLCJpc0xlYWYiLCJ1cGRhdGVDaGlsZHJlbiIsImNvbXBvc2l0aW9uIiwiY29tcG9zaW5nIiwibG9jYWxDb21wb3NpdGlvbkluZm8iLCJsb2NhbENvbXBvc2l0aW9uIiwiY29tcG9zaXRpb25JbkNoaWxkIiwidXBkYXRlciIsIlZpZXdUcmVlVXBkYXRlciIsIml0ZXJEZWNvIiwiaW5zaWRlTm9kZSIsIm1hcmtzIiwic3luY1RvTWFya3MiLCJjaGlsZENvdW50IiwiTWFyayIsIm5vbmUiLCJwbGFjZVdpZGdldCIsImNvbXBJbmRleCIsImZpbmROb2RlTWF0Y2giLCJmaW5kSW5kZXhXaXRoQ2hpbGQiLCJ1cGRhdGVOb2RlQXQiLCJ1cGRhdGVOZXh0Tm9kZSIsImFkZE5vZGUiLCJhZGRUZXh0YmxvY2tIYWNrcyIsImRlc3Ryb3lSZXN0IiwiY2hhbmdlZCIsInByb3RlY3RMb2NhbENvbXBvc2l0aW9uIiwicmVuZGVyRGVzY3MiLCJpb3NIYWNrcyIsIlRleHRTZWxlY3Rpb24iLCJ0ZXh0Tm9kZSIsImlucHV0IiwiY29tcG9zaXRpb25Ob2RlIiwidGV4dFBvcyIsImZpbmRUZXh0SW5GcmFnbWVudCIsInRvcE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbXBvc2l0aW9uTm9kZXMiLCJ1cGRhdGUiLCJzYW1lTWFya3VwIiwidXBkYXRlSW5uZXIiLCJ1cGRhdGVPdXRlckRlY28iLCJuZWVkc1dyYXAiLCJvbGRET00iLCJwYXRjaE91dGVyRGVjbyIsImNvbXB1dGVPdXRlckRlY28iLCJzZWxlY3ROb2RlIiwiZGVzZWxlY3ROb2RlIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwiaXNBdG9tIiwiZG9jVmlld0Rlc2MiLCJfVGV4dFZpZXdEZXNjIiwic2tpcCIsInBtSXNEZWNvIiwiaW5QYXJlbnQiLCJ0cmFja1dyaXRlcyIsIm4iLCJjdXQiLCJtdWx0aVR5cGUiLCJkZXNjcyIsIndyaXR0ZW4iLCJjaGlsZERPTSIsInJtIiwiaW5zZXJ0QmVmb3JlIiwiT3V0ZXJEZWNvTGV2ZWwiLCJPYmplY3QiLCJub0RlY28iLCJ2YWwiLCJpc0lubGluZSIsImNsYXNzIiwib3V0ZXJET00iLCJwcmV2Q29tcHV0ZWQiLCJjdXJDb21wdXRlZCIsImN1ckRPTSIsImRlY28iLCJ0b0xvd2VyQ2FzZSIsInBhdGNoQXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsInByZXZMaXN0Iiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiY3VyTGlzdCIsImluZGV4T2YiLCJwcm9wIiwibSIsInJlbW92ZVByb3BlcnR5IiwiY3NzVGV4dCIsImEiLCJiIiwibG9jayIsInByZU1hdGNoIiwiZGVzdHJveUJldHdlZW4iLCJzcGxpY2UiLCJrZWVwIiwibWF4S2VlcCIsInNwYW5uaW5nIiwicG9wIiwiZm91bmQiLCJpc0xvY2tlZCIsIm1hcmtEZXNjIiwidGFyZ2V0RGVzYyIsIm1hdGNoZXMiLCJlIiwibWF0Y2hlZCIsImhhcyIsImRvbU5vZGUiLCJwcmVNYXRjaDIiLCJnZXQiLCJuZXh0RE9NIiwidXBkYXRlZCIsImxvY2tlZCIsInJlY3JlYXRlV3JhcHBlciIsIndyYXBwZXIiLCJjaCIsInJlcXVpcmVzR2Vja29IYWNrTm9kZSIsImFkZEhhY2tOb2RlIiwiY2xhc3NOYW1lIiwiYWx0IiwiaGFjayIsImZyYWciLCJwYXJlbnREZXNjIiwiY3VyRGVzYyIsImRlc2NJIiwiZkkiLCJNYXAiLCJvdXRlciIsInNldCIsInJldmVyc2UiLCJjb21wYXJlU2lkZSIsIm9uV2lkZ2V0Iiwib25Ob2RlIiwibG9jYWxzIiwiZm9yQ2hpbGQiLCJkZWNvSW5kZXgiLCJyZXN0Tm9kZSIsInBhcmVudEluZGV4Iiwid2lkZ2V0cyIsInNvcnQiLCJjdXRBdCIsImQiLCJvbGRDU1MiLCJ3aW5kb3ciLCJsaXN0U3R5bGUiLCJjaGlsZFN0YXJ0Iiwic3RyIiwibGFzdEluZGV4T2YiLCJyZXBsYWNlbWVudCIsInNlbGVjdGlvbkZyb21ET00iLCJvcmlnaW4iLCJpbldpZGdldCIsIm5lYXJlc3REZXNjTm9kZSIsIk5vZGVTZWxlY3Rpb24iLCJpc1NlbGVjdGFibGUiLCJTZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsImVuZENvbnRhaW5lciIsImVuZE9mZnNldCIsIiRhbmNob3IiLCJzZWxlY3Rpb25CZXR3ZWVuIiwiZWRpdG9yT3duc1NlbGVjdGlvbiIsImVkaXRhYmxlIiwiaGFzRm9jdXMiLCJoYXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25Ub0RPTSIsInN5bmNOb2RlU2VsZWN0aW9uIiwibW91c2VEb3duIiwiYWxsb3dEZWZhdWx0IiwiY3VyU2VsIiwiZG9tT2JzZXJ2ZXIiLCJjdXJyZW50U2VsZWN0aW9uIiwiZGVsYXllZFNlbGVjdGlvblN5bmMiLCJzZXRDdXJTZWxlY3Rpb24iLCJkaXNjb25uZWN0U2VsZWN0aW9uIiwiY3Vyc29yV3JhcHBlciIsInNlbGVjdEN1cnNvcldyYXBwZXIiLCJyZXNldEVkaXRhYmxlRnJvbSIsInJlc2V0RWRpdGFibGVUbyIsImJyb2tlblNlbGVjdEJldHdlZW5VbmVkaXRhYmxlIiwidGVtcG9yYXJpbHlFZGl0YWJsZU5lYXIiLCJyZXNldEVkaXRhYmxlIiwidmlzaWJsZSIsInJlbW92ZUNsYXNzT25TZWxlY3Rpb25DaGFuZ2UiLCJjb25uZWN0U2VsZWN0aW9uIiwic2V0RWRpdGFibGUiLCJ3YXNEcmFnZ2FibGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGlkZVNlbGVjdGlvbkd1YXJkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJpbWciLCJkaXNhYmxlZCIsImxhc3RTZWxlY3RlZFZpZXdEZXNjIiwiY2xlYXJOb2RlU2VsZWN0aW9uIiwiYmV0d2VlbiIsImhhc0ZvY3VzQW5kU2VsZWN0aW9uIiwiYW5jaG9ySW5SaWdodFBsYWNlIiwibW92ZVNlbGVjdGlvbkJsb2NrIiwiJHNpZGUiLCIkc3RhcnQiLCJmaW5kRnJvbSIsImFwcGx5IiwiZGlzcGF0Y2giLCJ0ciIsInNjcm9sbEludG9WaWV3Iiwic2VsZWN0SG9yaXpvbnRhbGx5IiwibW9kcyIsInRleHRPZmZzZXQiLCJub2RlQmVmb3JlIiwibm9kZUFmdGVyIiwiJG5ld0hlYWQiLCJub2RlUG9zIiwibm9kZUxlbiIsImlzSWdub3JhYmxlIiwic2tpcElnbm9yZWROb2RlcyIsInNraXBJZ25vcmVkTm9kZXNCZWZvcmUiLCJza2lwSWdub3JlZE5vZGVzQWZ0ZXIiLCJtb3ZlTm9kZSIsIm1vdmVPZmZzZXQiLCJpc0Jsb2NrTm9kZSIsInNldFNlbEZvY3VzIiwidGV4dE5vZGVBZnRlciIsInRleHROb2RlQmVmb3JlIiwiZmluZERpcmVjdGlvbiIsIm1pZCIsImFicyIsImNvbXB1dGVkIiwiZGlyZWN0aW9uIiwic2VsZWN0VmVydGljYWxseSIsImJleW9uZCIsIkFsbFNlbGVjdGlvbiIsIm5lYXIiLCJzdG9wTmF0aXZlSG9yaXpvbnRhbERlbGV0ZSIsImVtcHR5MiIsInNhbWVQYXJlbnQiLCJuZXh0Tm9kZSIsImRlbGV0ZSIsInN3aXRjaEVkaXRhYmxlIiwic2FmYXJpRG93bkFycm93QnVnIiwiZ2V0TW9kcyIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJjYXB0dXJlS2V5RG93biIsInNlcmlhbGl6ZUZvckNsaXBib2FyZCIsImNvbnRleHQiLCJvcGVuU3RhcnQiLCJvcGVuRW5kIiwiZGVmYXVsdEF0dHJzIiwic2VyaWFsaXplciIsImZyb21TY2hlbWEiLCJzY2hlbWEiLCJkZXRhY2hlZERvYyIsInNlcmlhbGl6ZUZyYWdtZW50Iiwid3JhcHBlcnMiLCJ3cmFwTWFwIiwiSlNPTiIsInN0cmluZ2lmeSIsInRleHRCZXR3ZWVuIiwicGFyc2VGcm9tQ2xpcGJvYXJkIiwiaHRtbCIsInBsYWluVGV4dCIsIiRjb250ZXh0IiwiaW5Db2RlIiwiYXNUZXh0IiwiU2xpY2UiLCJyZXBsYWNlIiwicGFyc2VkIiwiZm9yRWFjaCIsImJsb2NrIiwic2VyaWFsaXplTm9kZSIsInJlYWRIVE1MIiwicmVzdG9yZVJlcGxhY2VkU3BhY2VzIiwiY29udGV4dE5vZGUiLCJxdWVyeVNlbGVjdG9yIiwic2xpY2VEYXRhIiwiZ2V0QXR0cmlidXRlIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VTbGljZSIsInJ1bGVGcm9tTm9kZSIsImRvbTIiLCJpbmxpbmVQYXJlbnRzIiwiYWRkQ29udGV4dCIsImNsb3NlU2xpY2UiLCJtYXhPcGVuIiwibm9ybWFsaXplU2libGluZ3MiLCJpc29sYXRpbmciLCJmcmFnbWVudCIsIm1hdGNoIiwiY29udGVudE1hdGNoQXQiLCJsYXN0V3JhcCIsImZpbmRXcmFwcGluZyIsImluTGFzdCIsImFkZFRvU2libGluZyIsImNsb3NlUmlnaHQiLCJ3cmFwcGVkIiwid2l0aFdyYXBwZXJzIiwibWF0Y2hUeXBlIiwic2libGluZyIsInJlcGxhY2VDaGlsZCIsImFwcGVuZCIsImZpbGwiLCJmaWxsQmVmb3JlIiwiY2xvc2VSYW5nZSIsInRoZWFkIiwidGJvZHkiLCJ0Zm9vdCIsImNhcHRpb24iLCJjb2xncm91cCIsImNvbCIsInRkIiwidGgiLCJfZGV0YWNoZWREb2MiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIl9wb2xpY3kiLCJtYXliZVdyYXBUcnVzdGVkIiwidHJ1c3RlZFR5cGVzIiwiZGVmYXVsdFBvbGljeSIsImNyZWF0ZVBvbGljeSIsImNyZWF0ZUhUTUwiLCJzIiwibWV0YXMiLCJmaXJzdFRhZyIsIm1hcCIsImpvaW4iLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXJyYXkiLCJwYXJzZSIsImhhc1JlcXVpcmVkQXR0cnMiLCJoYW5kbGVycyIsImVkaXRIYW5kbGVycyIsInBhc3NpdmVIYW5kbGVycyIsInRvdWNoc3RhcnQiLCJ0b3VjaG1vdmUiLCJJbnB1dFN0YXRlIiwibGFzdEtleUNvZGUiLCJsYXN0S2V5Q29kZVRpbWUiLCJsYXN0Q2xpY2siLCJ0aW1lIiwiYnV0dG9uIiwibGFzdFNlbGVjdGlvbk9yaWdpbiIsImxhc3RTZWxlY3Rpb25UaW1lIiwibGFzdElPU0VudGVyIiwibGFzdElPU0VudGVyRmFsbGJhY2tUaW1lb3V0IiwibGFzdEZvY3VzIiwibGFzdFRvdWNoIiwibGFzdENocm9tZURlbGV0ZSIsImNvbXBvc2luZ1RpbWVvdXQiLCJjb21wb3NpdGlvbkVuZGVkQXQiLCJjb21wb3NpdGlvbklEIiwiY29tcG9zaXRpb25QZW5kaW5nQ2hhbmdlcyIsImRvbUNoYW5nZUNvdW50IiwiZXZlbnRIYW5kbGVycyIsImluaXRJbnB1dCIsImhhbmRsZXIiLCJldmVudDIiLCJldmVudEJlbG9uZ3NUb1ZpZXciLCJydW5DdXN0b21IYW5kbGVyIiwicGFzc2l2ZSIsImVuc3VyZUxpc3RlbmVycyIsInNldFNlbGVjdGlvbk9yaWdpbiIsIkRhdGUiLCJub3ciLCJkZXN0cm95SW5wdXQiLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50SGFuZGxlcnMiLCJoYW5kbGVyczIiLCJkZWZhdWx0UHJldmVudGVkIiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJrZXlkb3duIiwiX2V2ZW50IiwiaW5Pck5lYXJDb21wb3NpdGlvbiIsImZvcmNlRmx1c2giLCJwcmV2ZW50RGVmYXVsdCIsImtleXVwIiwia2V5cHJlc3MiLCJjaGFyQ29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImRlZmx0IiwiaW5zZXJ0VGV4dCIsImV2ZW50Q29vcmRzIiwiY2xpZW50WCIsImNsaWVudFkiLCJpc05lYXIiLCJjbGljayIsImR5IiwicnVuSGFuZGxlck9uQ29udGV4dCIsInByb3BOYW1lIiwidXBkYXRlU2VsZWN0aW9uIiwiZm9jdXNlZCIsInNldE1ldGEiLCJzZWxlY3RDbGlja2VkTGVhZiIsInNlbGVjdENsaWNrZWROb2RlIiwic2VsZWN0ZWROb2RlIiwic2VsZWN0QXQiLCJoYW5kbGVTaW5nbGVDbGljayIsImhhbmRsZURvdWJsZUNsaWNrIiwiaGFuZGxlVHJpcGxlQ2xpY2siLCJkZWZhdWx0VHJpcGxlQ2xpY2siLCJmb3JjZURPTUZsdXNoIiwiZW5kQ29tcG9zaXRpb24iLCJzZWxlY3ROb2RlTW9kaWZpZXIiLCJtb3VzZWRvd24iLCJmbHVzaGVkIiwiZG9uZSIsIk1vdXNlRG93biIsIm1pZ2h0RHJhZyIsInN0YXJ0RG9jIiwidGFyZ2V0UG9zIiwibm9kZUF0Iiwic2VsZWN0YWJsZSIsImFkZEF0dHIiLCJzZXRVbmVkaXRhYmxlIiwidXAiLCJiaW5kIiwibW92ZSIsInVwZGF0ZUFsbG93RGVmYXVsdCIsImJ1dHRvbnMiLCJjb250ZXh0bWVudSIsInRpbWVTdGFtcCIsInRpbWVvdXRDb21wb3NpdGlvbiIsImNvbXBvc2l0aW9uc3RhcnQiLCJjb21wb3NpdGlvbnVwZGF0ZSIsImZsdXNoIiwic3RvcmVkTWFya3MiLCJzb21lIiwiaW5jbHVzaXZlIiwibWFya0N1cnNvciIsInNlbDIiLCJzY2hlZHVsZUNvbXBvc2VFbmQiLCJjb21wb3NpdGlvbmVuZCIsInBlbmRpbmdSZWNvcmRzIiwiUHJvbWlzZSIsInRoZW4iLCJkZWxheSIsImNsZWFyQ29tcG9zaXRpb24iLCJ0aW1lc3RhbXBGcm9tQ3VzdG9tRXZlbnQiLCJmaW5kQ29tcG9zaXRpb25Ob2RlIiwidGV4dEJlZm9yZSIsInRleHRBZnRlciIsImRlc2NBZnRlciIsImxhc3RDaGFuZ2VkIiwibGFzdENoYW5nZWRUZXh0Tm9kZSIsImRlc2NCZWZvcmUiLCJyZXN0YXJ0aW5nIiwiZmx1c2hpbmdTb29uIiwic2hhcmVkRGVwdGgiLCJkZWxldGVTZWxlY3Rpb24iLCJjYXB0dXJlQ29weSIsInNlbGVjdE5vZGVDb250ZW50cyIsImJsdXIiLCJicm9rZW5DbGlwYm9hcmRBUEkiLCJkYXRhIiwiY2xpcGJvYXJkRGF0YSIsImNsZWFyRGF0YSIsInNldERhdGEiLCJzbGljZVNpbmdsZU5vZGUiLCJjYXB0dXJlUGFzdGUiLCJwbGFpbiIsImRvUGFzdGUiLCJwcmVmZXJQbGFpbiIsInNpbmdsZU5vZGUiLCJyZXBsYWNlU2VsZWN0aW9uV2l0aCIsInJlcGxhY2VTZWxlY3Rpb24iLCJnZXRUZXh0IiwiZ2V0RGF0YSIsInVyaXMiLCJwYXN0ZSIsIkRyYWdnaW5nIiwiZHJhZ0NvcHlNb2RpZmllciIsImRyYWdNb3ZlcyIsIm1vdmVzIiwiZHJhZ3N0YXJ0IiwiZGF0YVRyYW5zZmVyIiwiZHJhZ2dlZFNsaWNlIiwiZmlsZXMiLCJlZmZlY3RBbGxvd2VkIiwiZHJhZ2dpbmciLCJkcmFnZW5kIiwiZHJhZ292ZXIiLCJkcmFnZW50ZXIiLCJkcm9wIiwiZXZlbnRQb3MiLCIkbW91c2UiLCJpbnNlcnRQb3MiLCJkcm9wUG9pbnQiLCJtYXBwaW5nIiwiaXNOb2RlIiwiYmVmb3JlSW5zZXJ0IiwicmVwbGFjZVJhbmdlV2l0aCIsInJlcGxhY2VSYW5nZSIsIm1hcHMiLCJfZnJvbSIsIl90byIsIl9uZXdGcm9tIiwibmV3VG8iLCJyZWxhdGVkVGFyZ2V0IiwiY2xlYXIiLCJiZWZvcmVpbnB1dCIsImlucHV0VHlwZSIsImZsdXNoU29vbiIsIiRjdXJzb3IiLCJjb21wYXJlT2JqcyIsIldpZGdldFR5cGUiLCJfV2lkZ2V0VHlwZSIsIm5vU3BlYyIsInNwYW4iLCJvbGRPZmZzZXQiLCJkZWxldGVkIiwibWFwUmVzdWx0IiwidmFsaWQiLCJvdGhlciIsIklubGluZVR5cGUiLCJfSW5saW5lVHlwZSIsImluY2x1c2l2ZVN0YXJ0IiwiaW5jbHVzaXZlRW5kIiwiaXMiLCJOb2RlVHlwZSIsIl9Ob2RlVHlwZSIsImZpbmRJbmRleCIsIl9EZWNvcmF0aW9uIiwiX0RlY29yYXRpb25TZXQiLCJsb2NhbCIsImRlY29yYXRpb25zIiwiYnVpbGRUcmVlIiwicHJlZGljYXRlIiwiZmluZElubmVyIiwiY2hpbGRPZmYiLCJvcHRpb25zIiwibWFwSW5uZXIiLCJuZXdMb2NhbCIsIm1hcHBlZCIsIm9uUmVtb3ZlIiwibWFwQ2hpbGRyZW4iLCJieVBvcyIsImFkZElubmVyIiwiY2hpbGROb2RlIiwiY2hpbGRPZmZzZXQiLCJiYXNlT2Zmc2V0IiwidGFrZVNwYW5zRm9yTm9kZSIsIm1vdmVTcGFucyIsIndpdGhvdXROdWxscyIsImNvbmNhdCIsInJlbW92ZUlubmVyIiwicmVtb3ZlZCIsImRlYyIsImxvY2FsU2V0IiwiRGVjb3JhdGlvbkdyb3VwIiwicmVtb3ZlT3ZlcmxhcCIsImxvY2Fsc0lubmVyIiwiZm9yRWFjaFNldCIsIl9EZWNvcmF0aW9uR3JvdXAiLCJtZW1iZXJzIiwibWFwcGVkRGVjb3MiLCJtZW1iZXIiLCJzb3J0ZWQiLCJldmVyeSIsInJlZHVjZSIsInIiLCJvbGRDaGlsZHJlbiIsIm1vdmVkIiwib2xkU3RhcnQiLCJvbGRFbmQiLCJuZXdTdGFydCIsIm5ld0VuZCIsImRTaXplIiwibXVzdFJlYnVpbGQiLCJmcm9tTG9jYWwiLCJ0b0xvY2FsIiwibWF5YmVDaGlsZCIsIm1hcEFuZEdhdGhlclJlbWFpbmluZ0RlY29yYXRpb25zIiwiYnVpbHQiLCJzcGFucyIsImdhdGhlciIsIm9sZE9mZnNldDIiLCJoYXNOdWxscyIsImxvY2FsU3RhcnQiLCJzdWJ0cmVlIiwid29ya2luZyIsImluc2VydEFoZWFkIiwidmlld0RlY29yYXRpb25zIiwib2JzZXJ2ZU9wdGlvbnMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyRGF0YU9sZFZhbHVlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZU9sZFZhbHVlIiwidXNlQ2hhckRhdGEiLCJTZWxlY3Rpb25TdGF0ZSIsIkRPTU9ic2VydmVyIiwiaGFuZGxlRE9NQ2hhbmdlIiwicXVldWUiLCJvYnNlcnZlciIsIm9uQ2hhckRhdGEiLCJzdXBwcmVzc2luZ1NlbGVjdGlvblVwZGF0ZXMiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwicmVtb3ZlZE5vZGVzIiwicHJldlZhbHVlIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJ0YWtlUmVjb3JkcyIsIm9ic2VydmUiLCJ0YWtlIiwiZGlzY29ubmVjdCIsInN1cHByZXNzU2VsZWN0aW9uVXBkYXRlcyIsImlnbm9yZVNlbGVjdGlvbkNoYW5nZSIsImFuY2VzdG9ycyIsIlNldCIsImNvbnRhaW5lciIsIm5ld1NlbCIsInR5cGVPdmVyIiwiYWRkZWQiLCJyZWdpc3Rlck11dGF0aW9uIiwiYnJzIiwiYnIiLCJibG9ja1BhcmVudCIsInJlYWRTZWwiLCJzY3JvbGxUb1NlbGVjdGlvbiIsImNoZWNrQ1NTIiwiYXR0cmlidXRlTmFtZSIsImFkZGVkTm9kZXMiLCJjc3NDaGVja2VkIiwiV2Vha01hcCIsImNzc0NoZWNrV2FybmVkIiwid2hpdGVTcGFjZSIsImNvbnNvbGUiLCJyYW5nZVRvU2VsZWN0aW9uUmFuZ2UiLCJjdXJyZW50QW5jaG9yIiwiZG9tQXRQb3MiLCJzYWZhcmlTaGFkb3dTZWxlY3Rpb25SYW5nZSIsImdldENvbXBvc2VkUmFuZ2VzIiwicmVhZCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImdldFRhcmdldFJhbmdlcyIsImV4ZWNDb21tYW5kIiwicGFyc2VCZXR3ZWVuIiwiZnJvbV8iLCJ0b18iLCJ0b3BNYXRjaCIsInRvcE9wZW4iLCJmaW5kUG9zaXRpb25zIiwiYW5jaG9yMiIsInJlYWRET01DaGFuZ2UiLCIkYmVmb3JlIiwic2hhcmVkIiwiY29tcGFyZSIsInByZWZlcnJlZFBvcyIsInByZWZlcnJlZFNpZGUiLCJjaGFuZ2UiLCJmaW5kRGlmZiIsImVuZEEiLCJlbmRCIiwicmVzb2x2ZVNlbGVjdGlvbiIsInJlc29sdmVOb0NhY2hlIiwiJGZyb21BIiwiaW5saW5lQ2hhbmdlIiwibmV4dFNlbCIsImxvb2tzTGlrZUJhY2tzcGFjZSIsImNoRnJvbSIsImNoVG8iLCJta1RyIiwibWFya0NoYW5nZSIsIm1hcmtzQWNyb3NzIiwiZW5zdXJlTWFya3MiLCJpc01hcmtDaGFuZ2UiLCJhZGRNYXJrIiwicmVtb3ZlTWFyayIsInBhcnNlZFNlbCIsImN1ck1hcmtzIiwicHJldk1hcmtzIiwicmVtb3ZlRnJvbVNldCIsImFkZFRvU2V0Iiwib2xkIiwiJG5ld1N0YXJ0IiwiJG5ld0VuZCIsInNraXBDbG9zaW5nQW5kT3BlbmluZyIsIiRuZXh0IiwiZnJvbUVuZCIsIm1heU9wZW4iLCJpbmRleEFmdGVyIiwiZmluZERpZmZTdGFydCIsImZpbmREaWZmRW5kIiwiYWRqdXN0IiwiaXNTdXJyb2dhdGVQYWlyIiwiY2hhckNvZGVBdCIsInBsYWNlIiwicHJvcHMiLCJfcm9vdCIsIm1vdW50ZWQiLCJwcmV2RGlyZWN0UGx1Z2lucyIsInBsdWdpblZpZXdzIiwiX3Byb3BzIiwiZGlyZWN0UGx1Z2lucyIsInBsdWdpbnMiLCJjaGVja1N0YXRlQ29tcG9uZW50IiwibW91bnQiLCJnZXRFZGl0YWJsZSIsInVwZGF0ZUN1cnNvcldyYXBwZXIiLCJidWlsZE5vZGVWaWV3cyIsImNvbXB1dGVEb2NEZWNvIiwidXBkYXRlUGx1Z2luVmlld3MiLCJoYW5kbGVET01FdmVudHMiLCJwcmV2UHJvcHMiLCJ1cGRhdGVTdGF0ZUlubmVyIiwic2V0UHJvcHMiLCJyZWRyYXciLCJ1cGRhdGVTZWwiLCJwbHVnaW5zQ2hhbmdlZCIsImNoYW5nZWROb2RlVmlld3MiLCJzY3JvbGwiLCJ1cGRhdGVEb2MiLCJvbGRTY3JvbGxQb3MiLCJvdmVyZmxvd0FuY2hvciIsImZvcmNlU2VsVXBkYXRlIiwic2VsZWN0aW9uQ29udGV4dENoYW5nZWQiLCJjaHJvbWVLbHVkZ2UiLCJ1cGRhdGVEcmFnZ2VkTm9kZSIsImRlc3Ryb3lQbHVnaW5WaWV3cyIsInByZXZTdGF0ZSIsInBsdWdpbiIsInBsdWdpblZpZXciLCJtb3ZlZFBvcyIsInByb3AyIiwicGFyZW50RWxlbWVudCIsImNhY2hlZCIsImdldFByb3RvdHlwZU9mIiwidXBkYXRlUm9vdCIsInBvc0F0RE9NIiwicGFzdGVIVE1MIiwiQ2xpcGJvYXJkRXZlbnQiLCJwYXN0ZVRleHQiLCJpc0Rlc3Ryb3llZCIsImRpc3BhdGNoVHJhbnNhY3Rpb24iLCJjb250ZW50ZWRpdGFibGUiLCJhdHRyIiwidHJhbnNsYXRlIiwic2VsMSIsIm9iaiIsImhhc093blByb3BlcnR5IiwibkEiLCJuQiIsImZpbHRlclRyYW5zYWN0aW9uIiwiYXBwZW5kVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0JBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsK0JBQUE7OztBQ0FBLElBQUFVLHdCQUFBLEdBQXNFQyxPQUFBO0FBQ3RFLElBQUFDLHdCQUFBLEdBQWdFRCxPQUFBO0FBQ2hFLElBQUFFLDRCQUFBLEdBQTBCRixPQUFBO0FBRTFCLElBQU1HLFFBQUEsR0FBVyxTQUFBQSxDQUFVQyxJQUFBLEVBQU07RUFDN0IsU0FBU0MsS0FBQSxHQUFRLElBQUlBLEtBQUEsSUFBUztJQUMxQkQsSUFBQSxHQUFPQSxJQUFBLENBQUtFLGVBQUE7SUFDWixJQUFJLENBQUNGLElBQUEsRUFDRCxPQUFPQyxLQUFBO0VBQ2Y7QUFDSjtBQUNBLElBQU1FLFVBQUEsR0FBYSxTQUFBQSxDQUFVSCxJQUFBLEVBQU07RUFDL0IsSUFBSUksTUFBQSxHQUFTSixJQUFBLENBQUtLLFlBQUEsSUFBZ0JMLElBQUEsQ0FBS0csVUFBQTtFQUN2QyxPQUFPQyxNQUFBLElBQVVBLE1BQUEsQ0FBT0UsUUFBQSxJQUFZLEtBQUtGLE1BQUEsQ0FBT0csSUFBQSxHQUFPSCxNQUFBO0FBQzNEO0FBQ0EsSUFBSUksV0FBQSxHQUFjO0FBSWxCLElBQU1DLFNBQUEsR0FBWSxTQUFBQSxDQUFVVCxJQUFBLEVBQU1VLElBQUEsRUFBTUMsRUFBQSxFQUFJO0VBQ3hDLElBQUlDLEtBQUEsR0FBUUosV0FBQSxLQUFnQkEsV0FBQSxHQUFjSyxRQUFBLENBQVNDLFdBQUEsQ0FBWTtFQUMvREYsS0FBQSxDQUFNRyxNQUFBLENBQU9mLElBQUEsRUFBTVcsRUFBQSxJQUFNLE9BQU9YLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQSxHQUFTTixFQUFFO0VBQzFEQyxLQUFBLENBQU1NLFFBQUEsQ0FBU2xCLElBQUEsRUFBTVUsSUFBQSxJQUFRLENBQUM7RUFDOUIsT0FBT0UsS0FBQTtBQUNYO0FBQ0EsSUFBTU8sZ0JBQUEsR0FBbUIsU0FBQUEsQ0FBQSxFQUFZO0VBQ2pDWCxXQUFBLEdBQWM7QUFDbEI7QUFJQSxJQUFNWSxvQkFBQSxHQUF1QixTQUFBQSxDQUFVcEIsSUFBQSxFQUFNcUIsR0FBQSxFQUFLQyxVQUFBLEVBQVlDLFNBQUEsRUFBVztFQUNyRSxPQUFPRCxVQUFBLEtBQWVFLE9BQUEsQ0FBUXhCLElBQUEsRUFBTXFCLEdBQUEsRUFBS0MsVUFBQSxFQUFZQyxTQUFBLEVBQVcsRUFBRSxLQUM5REMsT0FBQSxDQUFReEIsSUFBQSxFQUFNcUIsR0FBQSxFQUFLQyxVQUFBLEVBQVlDLFNBQUEsRUFBVyxDQUFDO0FBQ25EO0FBQ0EsSUFBTUUsWUFBQSxHQUFlO0FBQ3JCLFNBQVNELFFBQVF4QixJQUFBLEVBQU1xQixHQUFBLEVBQUtDLFVBQUEsRUFBWUMsU0FBQSxFQUFXRyxHQUFBLEVBQUs7RUFDcEQsSUFBSUMsRUFBQTtFQUNKLFNBQVM7SUFDTCxJQUFJM0IsSUFBQSxJQUFRc0IsVUFBQSxJQUFjRCxHQUFBLElBQU9FLFNBQUEsRUFDN0IsT0FBTztJQUNYLElBQUlGLEdBQUEsS0FBUUssR0FBQSxHQUFNLElBQUksSUFBSUUsUUFBQSxDQUFTNUIsSUFBSSxJQUFJO01BQ3ZDLElBQUlJLE1BQUEsR0FBU0osSUFBQSxDQUFLRyxVQUFBO01BQ2xCLElBQUksQ0FBQ0MsTUFBQSxJQUFVQSxNQUFBLENBQU9FLFFBQUEsSUFBWSxLQUFLdUIsWUFBQSxDQUFhN0IsSUFBSSxLQUFLeUIsWUFBQSxDQUFhSyxJQUFBLENBQUs5QixJQUFBLENBQUsrQixRQUFRLEtBQ3hGL0IsSUFBQSxDQUFLZ0MsZUFBQSxJQUFtQixTQUN4QixPQUFPO01BQ1hYLEdBQUEsR0FBTXRCLFFBQUEsQ0FBU0MsSUFBSSxLQUFLMEIsR0FBQSxHQUFNLElBQUksSUFBSTtNQUN0QzFCLElBQUEsR0FBT0ksTUFBQTtJQUNYLFdBQ1NKLElBQUEsQ0FBS00sUUFBQSxJQUFZLEdBQUc7TUFDekIsSUFBSTJCLEtBQUEsR0FBUWpDLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2IsR0FBQSxJQUFPSyxHQUFBLEdBQU0sSUFBSSxLQUFLLEVBQUU7TUFDcEQsSUFBSU8sS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEtBQUsyQixLQUFBLENBQU1ELGVBQUEsSUFBbUIsU0FBUztRQUN6RCxLQUFLTCxFQUFBLEdBQUtNLEtBQUEsQ0FBTUUsVUFBQSxNQUFnQixRQUFRUixFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUdTLGtCQUFBLEVBQ2hFZixHQUFBLElBQU9LLEdBQUEsTUFFUCxPQUFPO01BQ2YsT0FDSztRQUNEMUIsSUFBQSxHQUFPaUMsS0FBQTtRQUNQWixHQUFBLEdBQU1LLEdBQUEsR0FBTSxJQUFJRSxRQUFBLENBQVM1QixJQUFJLElBQUk7TUFDckM7SUFDSixPQUNLO01BQ0QsT0FBTztJQUNYO0VBQ0o7QUFDSjtBQUNBLFNBQVM0QixTQUFTNUIsSUFBQSxFQUFNO0VBQ3BCLE9BQU9BLElBQUEsQ0FBS00sUUFBQSxJQUFZLElBQUlOLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQSxHQUFTakIsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQTtBQUN4RTtBQUNBLFNBQVNvQixpQkFBaUJyQyxJQUFBLEVBQU1zQyxNQUFBLEVBQVE7RUFDcEMsU0FBUztJQUNMLElBQUl0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLZ0MsTUFBQSxFQUN0QixPQUFPdEMsSUFBQTtJQUNYLElBQUlBLElBQUEsQ0FBS00sUUFBQSxJQUFZLEtBQUtnQyxNQUFBLEdBQVMsR0FBRztNQUNsQyxJQUFJdEMsSUFBQSxDQUFLZ0MsZUFBQSxJQUFtQixTQUN4QixPQUFPO01BQ1hoQyxJQUFBLEdBQU9BLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQSxHQUFTLENBQUM7TUFDakNBLE1BQUEsR0FBU1YsUUFBQSxDQUFTNUIsSUFBSTtJQUMxQixXQUNTQSxJQUFBLENBQUtHLFVBQUEsSUFBYyxDQUFDMEIsWUFBQSxDQUFhN0IsSUFBSSxHQUFHO01BQzdDc0MsTUFBQSxHQUFTdkMsUUFBQSxDQUFTQyxJQUFJO01BQ3RCQSxJQUFBLEdBQU9BLElBQUEsQ0FBS0csVUFBQTtJQUNoQixPQUNLO01BQ0QsT0FBTztJQUNYO0VBQ0o7QUFDSjtBQUNBLFNBQVNvQyxnQkFBZ0J2QyxJQUFBLEVBQU1zQyxNQUFBLEVBQVE7RUFDbkMsU0FBUztJQUNMLElBQUl0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLZ0MsTUFBQSxHQUFTdEMsSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBLEVBQzlDLE9BQU9qQixJQUFBO0lBQ1gsSUFBSUEsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS2dDLE1BQUEsR0FBU3RDLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2pCLE1BQUEsRUFBUTtNQUN2RCxJQUFJakIsSUFBQSxDQUFLZ0MsZUFBQSxJQUFtQixTQUN4QixPQUFPO01BQ1hoQyxJQUFBLEdBQU9BLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBTTtNQUM3QkEsTUFBQSxHQUFTO0lBQ2IsV0FDU3RDLElBQUEsQ0FBS0csVUFBQSxJQUFjLENBQUMwQixZQUFBLENBQWE3QixJQUFJLEdBQUc7TUFDN0NzQyxNQUFBLEdBQVN2QyxRQUFBLENBQVNDLElBQUksSUFBSTtNQUMxQkEsSUFBQSxHQUFPQSxJQUFBLENBQUtHLFVBQUE7SUFDaEIsT0FDSztNQUNELE9BQU87SUFDWDtFQUNKO0FBQ0o7QUFDQSxTQUFTcUMsU0FBU3hDLElBQUEsRUFBTXNDLE1BQUEsRUFBUWxDLE1BQUEsRUFBUTtFQUNwQyxTQUFTcUMsT0FBQSxHQUFVSCxNQUFBLElBQVUsR0FBR0ksS0FBQSxHQUFRSixNQUFBLElBQVVWLFFBQUEsQ0FBUzVCLElBQUksR0FBR3lDLE9BQUEsSUFBV0MsS0FBQSxHQUFRO0lBQ2pGLElBQUkxQyxJQUFBLElBQVFJLE1BQUEsRUFDUixPQUFPO0lBQ1gsSUFBSUgsS0FBQSxHQUFRRixRQUFBLENBQVNDLElBQUk7SUFDekJBLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBO0lBQ1osSUFBSSxDQUFDSCxJQUFBLEVBQ0QsT0FBTztJQUNYeUMsT0FBQSxHQUFVQSxPQUFBLElBQVd4QyxLQUFBLElBQVM7SUFDOUJ5QyxLQUFBLEdBQVFBLEtBQUEsSUFBU3pDLEtBQUEsSUFBUzJCLFFBQUEsQ0FBUzVCLElBQUk7RUFDM0M7QUFDSjtBQUNBLFNBQVM2QixhQUFhYyxHQUFBLEVBQUs7RUFDdkIsSUFBSUMsSUFBQTtFQUNKLFNBQVNDLEdBQUEsR0FBTUYsR0FBQSxFQUFLRSxHQUFBLEVBQUtBLEdBQUEsR0FBTUEsR0FBQSxDQUFJMUMsVUFBQSxFQUMvQixJQUFJeUMsSUFBQSxHQUFPQyxHQUFBLENBQUlWLFVBQUEsRUFDWDtFQUNSLE9BQU9TLElBQUEsSUFBUUEsSUFBQSxDQUFLNUMsSUFBQSxJQUFRNEMsSUFBQSxDQUFLNUMsSUFBQSxDQUFLOEMsT0FBQSxLQUFZRixJQUFBLENBQUtELEdBQUEsSUFBT0EsR0FBQSxJQUFPQyxJQUFBLENBQUtHLFVBQUEsSUFBY0osR0FBQTtBQUM1RjtBQUdBLElBQU1LLGtCQUFBLEdBQXFCLFNBQUFBLENBQVVDLE1BQUEsRUFBUTtFQUN6QyxPQUFPQSxNQUFBLENBQU9DLFNBQUEsSUFBYTlCLG9CQUFBLENBQXFCNkIsTUFBQSxDQUFPQyxTQUFBLEVBQVdELE1BQUEsQ0FBT0UsV0FBQSxFQUFhRixNQUFBLENBQU9HLFVBQUEsRUFBWUgsTUFBQSxDQUFPSSxZQUFZO0FBQ2hJO0FBQ0EsU0FBU0MsU0FBU0MsT0FBQSxFQUFTQyxHQUFBLEVBQUs7RUFDNUIsSUFBSUMsS0FBQSxHQUFRNUMsUUFBQSxDQUFTNkMsV0FBQSxDQUFZLE9BQU87RUFDeENELEtBQUEsQ0FBTUUsU0FBQSxDQUFVLFdBQVcsTUFBTSxJQUFJO0VBQ3JDRixLQUFBLENBQU1GLE9BQUEsR0FBVUEsT0FBQTtFQUNoQkUsS0FBQSxDQUFNRCxHQUFBLEdBQU1DLEtBQUEsQ0FBTUcsSUFBQSxHQUFPSixHQUFBO0VBQ3pCLE9BQU9DLEtBQUE7QUFDWDtBQUNBLFNBQVNJLGtCQUFrQkMsSUFBQSxFQUFLO0VBQzVCLElBQUlDLEdBQUEsR0FBTUQsSUFBQSxDQUFJRSxhQUFBO0VBQ2QsT0FBT0QsR0FBQSxJQUFPQSxHQUFBLENBQUlFLFVBQUEsRUFDZEYsR0FBQSxHQUFNQSxHQUFBLENBQUlFLFVBQUEsQ0FBV0QsYUFBQTtFQUN6QixPQUFPRCxHQUFBO0FBQ1g7QUFDQSxTQUFTRyxlQUFlSixJQUFBLEVBQUtLLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQy9CLElBQUlOLElBQUEsQ0FBSU8sc0JBQUEsRUFBd0I7SUFDNUIsSUFBSTtNQUNBLElBQUlDLEdBQUEsR0FBTVIsSUFBQSxDQUFJTyxzQkFBQSxDQUF1QkYsQ0FBQSxFQUFHQyxDQUFDO01BSXpDLElBQUlFLEdBQUEsRUFDQSxPQUFPO1FBQUV0RSxJQUFBLEVBQU1zRSxHQUFBLENBQUlDLFVBQUE7UUFBWWpDLE1BQUEsRUFBUWtDLElBQUEsQ0FBS0MsR0FBQSxDQUFJN0MsUUFBQSxDQUFTMEMsR0FBQSxDQUFJQyxVQUFVLEdBQUdELEdBQUEsQ0FBSWhDLE1BQU07TUFBRTtJQUM5RixTQUNPb0MsQ0FBQSxFQUFHLENBQUU7RUFDaEI7RUFDQSxJQUFJWixJQUFBLENBQUlhLG1CQUFBLEVBQXFCO0lBQ3pCLElBQUkvRCxLQUFBLEdBQVFrRCxJQUFBLENBQUlhLG1CQUFBLENBQW9CUixDQUFBLEVBQUdDLENBQUM7SUFDeEMsSUFBSXhELEtBQUEsRUFDQSxPQUFPO01BQUVaLElBQUEsRUFBTVksS0FBQSxDQUFNZ0UsY0FBQTtNQUFnQnRDLE1BQUEsRUFBUWtDLElBQUEsQ0FBS0MsR0FBQSxDQUFJN0MsUUFBQSxDQUFTaEIsS0FBQSxDQUFNZ0UsY0FBYyxHQUFHaEUsS0FBQSxDQUFNaUUsV0FBVztJQUFFO0VBQ2pIO0FBQ0o7QUFFQSxJQUFNQyxHQUFBLEdBQU0sT0FBT0MsU0FBQSxJQUFhLGNBQWNBLFNBQUEsR0FBWTtBQUMxRCxJQUFNQyxHQUFBLEdBQU0sT0FBT25FLFFBQUEsSUFBWSxjQUFjQSxRQUFBLEdBQVc7QUFDeEQsSUFBTW9FLEtBQUEsR0FBU0gsR0FBQSxJQUFPQSxHQUFBLENBQUlJLFNBQUEsSUFBYztBQUN4QyxJQUFNQyxPQUFBLEdBQVUsY0FBY0MsSUFBQSxDQUFLSCxLQUFLO0FBQ3hDLElBQU1JLFNBQUEsR0FBWSxVQUFVRCxJQUFBLENBQUtILEtBQUs7QUFDdEMsSUFBTUssT0FBQSxHQUFVLHdDQUF3Q0YsSUFBQSxDQUFLSCxLQUFLO0FBQ2xFLElBQU1NLEVBQUEsR0FBSyxDQUFDLEVBQUVGLFNBQUEsSUFBYUMsT0FBQSxJQUFXSCxPQUFBO0FBQ3RDLElBQU1LLFVBQUEsR0FBYUgsU0FBQSxHQUFZeEUsUUFBQSxDQUFTNEUsWUFBQSxHQUFlSCxPQUFBLEdBQVUsQ0FBQ0EsT0FBQSxDQUFRLENBQUMsSUFBSUgsT0FBQSxHQUFVLENBQUNBLE9BQUEsQ0FBUSxDQUFDLElBQUk7QUFDdkcsSUFBTU8sS0FBQSxHQUFRLENBQUNILEVBQUEsSUFBTSxnQkFBZ0J6RCxJQUFBLENBQUttRCxLQUFLO0FBQy9DUyxLQUFBLElBQVMsRUFBRSxpQkFBaUJOLElBQUEsQ0FBS0gsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNwRCxJQUFNVSxPQUFBLEdBQVUsQ0FBQ0osRUFBQSxJQUFNLGdCQUFnQkgsSUFBQSxDQUFLSCxLQUFLO0FBQ2pELElBQU1XLE1BQUEsR0FBUyxDQUFDLENBQUNELE9BQUE7QUFDakIsSUFBTUUsY0FBQSxHQUFpQkYsT0FBQSxHQUFVLENBQUNBLE9BQUEsQ0FBUSxDQUFDLElBQUk7QUFDL0MsSUFBTUcsTUFBQSxHQUFTLENBQUNQLEVBQUEsSUFBTSxDQUFDLENBQUNULEdBQUEsSUFBTyxpQkFBaUJoRCxJQUFBLENBQUtnRCxHQUFBLENBQUlpQixNQUFNO0FBRS9ELElBQU1DLEdBQUEsR0FBTUYsTUFBQSxLQUFXLGNBQWNoRSxJQUFBLENBQUttRCxLQUFLLEtBQUssQ0FBQyxDQUFDSCxHQUFBLElBQU9BLEdBQUEsQ0FBSW1CLGNBQUEsR0FBaUI7QUFDbEYsSUFBTUMsR0FBQSxHQUFNRixHQUFBLEtBQVFsQixHQUFBLEdBQU0sTUFBTWhELElBQUEsQ0FBS2dELEdBQUEsQ0FBSXFCLFFBQVEsSUFBSTtBQUNyRCxJQUFNQyxPQUFBLEdBQVV0QixHQUFBLEdBQU0sTUFBTWhELElBQUEsQ0FBS2dELEdBQUEsQ0FBSXFCLFFBQVEsSUFBSTtBQUNqRCxJQUFNRSxPQUFBLEdBQVUsYUFBYXZFLElBQUEsQ0FBS21ELEtBQUs7QUFDdkMsSUFBTXFCLE1BQUEsR0FBUyxDQUFDLENBQUN0QixHQUFBLElBQU8seUJBQXlCQSxHQUFBLENBQUl1QixlQUFBLENBQWdCQyxLQUFBO0FBQ3JFLElBQU1DLGNBQUEsR0FBaUJILE1BQUEsR0FBUyxFQUFFLHVCQUF1QmxCLElBQUEsQ0FBS0wsU0FBQSxDQUFVRyxTQUFTLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUk7QUFFbkcsU0FBU3dCLFdBQVc1QyxJQUFBLEVBQUs7RUFDckIsSUFBSTZDLEVBQUEsR0FBSzdDLElBQUEsQ0FBSThDLFdBQUEsSUFBZTlDLElBQUEsQ0FBSThDLFdBQUEsQ0FBWUMsY0FBQTtFQUM1QyxJQUFJRixFQUFBLEVBQ0EsT0FBTztJQUNIRyxJQUFBLEVBQU07SUFBR0MsS0FBQSxFQUFPSixFQUFBLENBQUdLLEtBQUE7SUFDbkJDLEdBQUEsRUFBSztJQUFHQyxNQUFBLEVBQVFQLEVBQUEsQ0FBR1E7RUFDdkI7RUFDSixPQUFPO0lBQUVMLElBQUEsRUFBTTtJQUFHQyxLQUFBLEVBQU9qRCxJQUFBLENBQUl5QyxlQUFBLENBQWdCYSxXQUFBO0lBQ3pDSCxHQUFBLEVBQUs7SUFBR0MsTUFBQSxFQUFRcEQsSUFBQSxDQUFJeUMsZUFBQSxDQUFnQmM7RUFBYTtBQUN6RDtBQUNBLFNBQVNDLFFBQVFDLEtBQUEsRUFBT0MsSUFBQSxFQUFNO0VBQzFCLE9BQU8sT0FBT0QsS0FBQSxJQUFTLFdBQVdBLEtBQUEsR0FBUUEsS0FBQSxDQUFNQyxJQUFJO0FBQ3hEO0FBQ0EsU0FBU0MsV0FBV3pILElBQUEsRUFBTTtFQUN0QixJQUFJMEgsSUFBQSxHQUFPMUgsSUFBQSxDQUFLMkgscUJBQUEsQ0FBc0I7RUFFdEMsSUFBSUMsTUFBQSxHQUFVRixJQUFBLENBQUtWLEtBQUEsR0FBUWhILElBQUEsQ0FBSzZILFdBQUEsSUFBZ0I7RUFDaEQsSUFBSUMsTUFBQSxHQUFVSixJQUFBLENBQUtQLE1BQUEsR0FBU25ILElBQUEsQ0FBSytILFlBQUEsSUFBaUI7RUFFbEQsT0FBTztJQUFFakIsSUFBQSxFQUFNWSxJQUFBLENBQUtaLElBQUE7SUFBTUMsS0FBQSxFQUFPVyxJQUFBLENBQUtaLElBQUEsR0FBTzlHLElBQUEsQ0FBS29ILFdBQUEsR0FBY1EsTUFBQTtJQUM1RFgsR0FBQSxFQUFLUyxJQUFBLENBQUtULEdBQUE7SUFBS0MsTUFBQSxFQUFRUSxJQUFBLENBQUtULEdBQUEsR0FBTWpILElBQUEsQ0FBS3FILFlBQUEsR0FBZVM7RUFBTztBQUNyRTtBQUNBLFNBQVNFLG1CQUFtQkMsSUFBQSxFQUFNUCxJQUFBLEVBQU1RLFFBQUEsRUFBVTtFQUM5QyxJQUFJQyxlQUFBLEdBQWtCRixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUIsS0FBSztJQUFHQyxZQUFBLEdBQWVKLElBQUEsQ0FBS0csUUFBQSxDQUFTLGNBQWMsS0FBSztFQUM3RyxJQUFJdEUsSUFBQSxHQUFNbUUsSUFBQSxDQUFLdEYsR0FBQSxDQUFJMkYsYUFBQTtFQUNuQixTQUFTbEksTUFBQSxHQUFTOEgsUUFBQSxJQUFZRCxJQUFBLENBQUt0RixHQUFBLElBQU87SUFDdEMsSUFBSSxDQUFDdkMsTUFBQSxFQUNEO0lBQ0osSUFBSUEsTUFBQSxDQUFPRSxRQUFBLElBQVksR0FBRztNQUN0QkYsTUFBQSxHQUFTRCxVQUFBLENBQVdDLE1BQU07TUFDMUI7SUFDSjtJQUNBLElBQUkyRCxHQUFBLEdBQU0zRCxNQUFBO0lBQ1YsSUFBSW1JLEtBQUEsR0FBUXhFLEdBQUEsSUFBT0QsSUFBQSxDQUFJMEUsSUFBQTtJQUN2QixJQUFJQyxRQUFBLEdBQVdGLEtBQUEsR0FBUTdCLFVBQUEsQ0FBVzVDLElBQUcsSUFBSTJELFVBQUEsQ0FBVzFELEdBQUc7SUFDdkQsSUFBSTJFLEtBQUEsR0FBUTtNQUFHQyxLQUFBLEdBQVE7SUFDdkIsSUFBSWpCLElBQUEsQ0FBS1QsR0FBQSxHQUFNd0IsUUFBQSxDQUFTeEIsR0FBQSxHQUFNSyxPQUFBLENBQVFhLGVBQUEsRUFBaUIsS0FBSyxHQUN4RFEsS0FBQSxHQUFRLEVBQUVGLFFBQUEsQ0FBU3hCLEdBQUEsR0FBTVMsSUFBQSxDQUFLVCxHQUFBLEdBQU1LLE9BQUEsQ0FBUWUsWUFBQSxFQUFjLEtBQUssWUFDMURYLElBQUEsQ0FBS1IsTUFBQSxHQUFTdUIsUUFBQSxDQUFTdkIsTUFBQSxHQUFTSSxPQUFBLENBQVFhLGVBQUEsRUFBaUIsUUFBUSxHQUN0RVEsS0FBQSxHQUFRakIsSUFBQSxDQUFLUixNQUFBLEdBQVNRLElBQUEsQ0FBS1QsR0FBQSxHQUFNd0IsUUFBQSxDQUFTdkIsTUFBQSxHQUFTdUIsUUFBQSxDQUFTeEIsR0FBQSxHQUN0RFMsSUFBQSxDQUFLVCxHQUFBLEdBQU1LLE9BQUEsQ0FBUWUsWUFBQSxFQUFjLEtBQUssSUFBSUksUUFBQSxDQUFTeEIsR0FBQSxHQUNuRFMsSUFBQSxDQUFLUixNQUFBLEdBQVN1QixRQUFBLENBQVN2QixNQUFBLEdBQVNJLE9BQUEsQ0FBUWUsWUFBQSxFQUFjLFFBQVE7SUFDeEUsSUFBSVgsSUFBQSxDQUFLWixJQUFBLEdBQU8yQixRQUFBLENBQVMzQixJQUFBLEdBQU9RLE9BQUEsQ0FBUWEsZUFBQSxFQUFpQixNQUFNLEdBQzNETyxLQUFBLEdBQVEsRUFBRUQsUUFBQSxDQUFTM0IsSUFBQSxHQUFPWSxJQUFBLENBQUtaLElBQUEsR0FBT1EsT0FBQSxDQUFRZSxZQUFBLEVBQWMsTUFBTSxZQUM3RFgsSUFBQSxDQUFLWCxLQUFBLEdBQVEwQixRQUFBLENBQVMxQixLQUFBLEdBQVFPLE9BQUEsQ0FBUWEsZUFBQSxFQUFpQixPQUFPLEdBQ25FTyxLQUFBLEdBQVFoQixJQUFBLENBQUtYLEtBQUEsR0FBUTBCLFFBQUEsQ0FBUzFCLEtBQUEsR0FBUU8sT0FBQSxDQUFRZSxZQUFBLEVBQWMsT0FBTztJQUN2RSxJQUFJSyxLQUFBLElBQVNDLEtBQUEsRUFBTztNQUNoQixJQUFJSixLQUFBLEVBQU87UUFDUHpFLElBQUEsQ0FBSThDLFdBQUEsQ0FBWWdDLFFBQUEsQ0FBU0YsS0FBQSxFQUFPQyxLQUFLO01BQ3pDLE9BQ0s7UUFDRCxJQUFJRSxNQUFBLEdBQVM5RSxHQUFBLENBQUkrRSxVQUFBO1VBQVlDLE1BQUEsR0FBU2hGLEdBQUEsQ0FBSWlGLFNBQUE7UUFDMUMsSUFBSUwsS0FBQSxFQUNBNUUsR0FBQSxDQUFJaUYsU0FBQSxJQUFhTCxLQUFBO1FBQ3JCLElBQUlELEtBQUEsRUFDQTNFLEdBQUEsQ0FBSStFLFVBQUEsSUFBY0osS0FBQTtRQUN0QixJQUFJTyxFQUFBLEdBQUtsRixHQUFBLENBQUkrRSxVQUFBLEdBQWFELE1BQUE7VUFBUUssRUFBQSxHQUFLbkYsR0FBQSxDQUFJaUYsU0FBQSxHQUFZRCxNQUFBO1FBQ3ZEckIsSUFBQSxHQUFPO1VBQUVaLElBQUEsRUFBTVksSUFBQSxDQUFLWixJQUFBLEdBQU9tQyxFQUFBO1VBQUloQyxHQUFBLEVBQUtTLElBQUEsQ0FBS1QsR0FBQSxHQUFNaUMsRUFBQTtVQUFJbkMsS0FBQSxFQUFPVyxJQUFBLENBQUtYLEtBQUEsR0FBUWtDLEVBQUE7VUFBSS9CLE1BQUEsRUFBUVEsSUFBQSxDQUFLUixNQUFBLEdBQVNnQztRQUFHO01BQ3hHO0lBQ0o7SUFDQSxJQUFJNUUsR0FBQSxHQUFNaUUsS0FBQSxHQUFRLFVBQVVZLGdCQUFBLENBQWlCL0ksTUFBTSxFQUFFZ0osUUFBQTtJQUNyRCxJQUFJLG1CQUFtQnRILElBQUEsQ0FBS3dDLEdBQUcsR0FDM0I7SUFDSmxFLE1BQUEsR0FBU2tFLEdBQUEsSUFBTyxhQUFhbEUsTUFBQSxDQUFPaUosWUFBQSxHQUFlbEosVUFBQSxDQUFXQyxNQUFNO0VBQ3hFO0FBQ0o7QUFLQSxTQUFTa0osZUFBZXJCLElBQUEsRUFBTTtFQUMxQixJQUFJUCxJQUFBLEdBQU9PLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSWdGLHFCQUFBLENBQXNCO0lBQUdvQixNQUFBLEdBQVN2RSxJQUFBLENBQUsrRSxHQUFBLENBQUksR0FBRzdCLElBQUEsQ0FBS1QsR0FBRztFQUMxRSxJQUFJdUMsTUFBQSxFQUFRQyxNQUFBO0VBQ1osU0FBU3RGLENBQUEsSUFBS3VELElBQUEsQ0FBS1osSUFBQSxHQUFPWSxJQUFBLENBQUtYLEtBQUEsSUFBUyxHQUFHM0MsQ0FBQSxHQUFJMkUsTUFBQSxHQUFTLEdBQUczRSxDQUFBLEdBQUlJLElBQUEsQ0FBS0MsR0FBQSxDQUFJaUYsV0FBQSxFQUFhaEMsSUFBQSxDQUFLUixNQUFNLEdBQUc5QyxDQUFBLElBQUssR0FBRztJQUN2RyxJQUFJekIsR0FBQSxHQUFNc0YsSUFBQSxDQUFLMEIsSUFBQSxDQUFLQyxnQkFBQSxDQUFpQnpGLENBQUEsRUFBR0MsQ0FBQztJQUN6QyxJQUFJLENBQUN6QixHQUFBLElBQU9BLEdBQUEsSUFBT3NGLElBQUEsQ0FBS3RGLEdBQUEsSUFBTyxDQUFDc0YsSUFBQSxDQUFLdEYsR0FBQSxDQUFJa0gsUUFBQSxDQUFTbEgsR0FBRyxHQUNqRDtJQUNKLElBQUltSCxTQUFBLEdBQVluSCxHQUFBLENBQUlnRixxQkFBQSxDQUFzQjtJQUMxQyxJQUFJbUMsU0FBQSxDQUFVN0MsR0FBQSxJQUFPOEIsTUFBQSxHQUFTLElBQUk7TUFDOUJTLE1BQUEsR0FBUzdHLEdBQUE7TUFDVDhHLE1BQUEsR0FBU0ssU0FBQSxDQUFVN0MsR0FBQTtNQUNuQjtJQUNKO0VBQ0o7RUFDQSxPQUFPO0lBQUV1QyxNQUFBO0lBQWdCQyxNQUFBO0lBQWdCTSxLQUFBLEVBQU9DLFdBQUEsQ0FBWS9CLElBQUEsQ0FBS3RGLEdBQUc7RUFBRTtBQUMxRTtBQUNBLFNBQVNxSCxZQUFZckgsR0FBQSxFQUFLO0VBQ3RCLElBQUlvSCxLQUFBLEdBQVEsRUFBQztJQUFHakcsSUFBQSxHQUFNbkIsR0FBQSxDQUFJMkYsYUFBQTtFQUMxQixTQUFTekYsR0FBQSxHQUFNRixHQUFBLEVBQUtFLEdBQUEsRUFBS0EsR0FBQSxHQUFNMUMsVUFBQSxDQUFXMEMsR0FBRyxHQUFHO0lBQzVDa0gsS0FBQSxDQUFNRSxJQUFBLENBQUs7TUFBRXRILEdBQUEsRUFBS0UsR0FBQTtNQUFLb0UsR0FBQSxFQUFLcEUsR0FBQSxDQUFJbUcsU0FBQTtNQUFXbEMsSUFBQSxFQUFNakUsR0FBQSxDQUFJaUc7SUFBVyxDQUFDO0lBQ2pFLElBQUluRyxHQUFBLElBQU9tQixJQUFBLEVBQ1A7RUFDUjtFQUNBLE9BQU9pRyxLQUFBO0FBQ1g7QUFHQSxTQUFTRyxlQUFlO0VBQUVWLE1BQUE7RUFBUUMsTUFBQTtFQUFRTTtBQUFNLEdBQUc7RUFDL0MsSUFBSUksU0FBQSxHQUFZWCxNQUFBLEdBQVNBLE1BQUEsQ0FBTzdCLHFCQUFBLENBQXNCLEVBQUVWLEdBQUEsR0FBTTtFQUM5RG1ELGtCQUFBLENBQW1CTCxLQUFBLEVBQU9JLFNBQUEsSUFBYSxJQUFJLElBQUlBLFNBQUEsR0FBWVYsTUFBTTtBQUNyRTtBQUNBLFNBQVNXLG1CQUFtQkwsS0FBQSxFQUFPTSxJQUFBLEVBQU07RUFDckMsU0FBU0MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSVAsS0FBQSxDQUFNOUksTUFBQSxFQUFRcUosQ0FBQSxJQUFLO0lBQ25DLElBQUk7TUFBRTNILEdBQUE7TUFBS3NFLEdBQUE7TUFBS0g7SUFBSyxJQUFJaUQsS0FBQSxDQUFNTyxDQUFDO0lBQ2hDLElBQUkzSCxHQUFBLENBQUlxRyxTQUFBLElBQWEvQixHQUFBLEdBQU1vRCxJQUFBLEVBQ3ZCMUgsR0FBQSxDQUFJcUcsU0FBQSxHQUFZL0IsR0FBQSxHQUFNb0QsSUFBQTtJQUMxQixJQUFJMUgsR0FBQSxDQUFJbUcsVUFBQSxJQUFjaEMsSUFBQSxFQUNsQm5FLEdBQUEsQ0FBSW1HLFVBQUEsR0FBYWhDLElBQUE7RUFDekI7QUFDSjtBQUNBLElBQUl5RCxzQkFBQSxHQUF5QjtBQUc3QixTQUFTQyxtQkFBbUI3SCxHQUFBLEVBQUs7RUFDN0IsSUFBSUEsR0FBQSxDQUFJOEgsU0FBQSxFQUNKLE9BQU85SCxHQUFBLENBQUk4SCxTQUFBLENBQVU7RUFDekIsSUFBSUYsc0JBQUEsRUFDQSxPQUFPNUgsR0FBQSxDQUFJK0gsS0FBQSxDQUFNSCxzQkFBc0I7RUFDM0MsSUFBSUksTUFBQSxHQUFTWCxXQUFBLENBQVlySCxHQUFHO0VBQzVCQSxHQUFBLENBQUkrSCxLQUFBLENBQU1ILHNCQUFBLElBQTBCLE9BQU87SUFDdkMsSUFBSUssY0FBQSxFQUFnQjtNQUNoQkwsc0JBQUEsR0FBeUI7UUFBRUssYUFBQSxFQUFlO01BQUs7TUFDL0MsT0FBTztJQUNYO0VBQ0osSUFBSSxNQUFTO0VBQ2IsSUFBSSxDQUFDTCxzQkFBQSxFQUF3QjtJQUN6QkEsc0JBQUEsR0FBeUI7SUFDekJILGtCQUFBLENBQW1CTyxNQUFBLEVBQVEsQ0FBQztFQUNoQztBQUNKO0FBQ0EsU0FBU0UsaUJBQWlCN0ssSUFBQSxFQUFNOEssTUFBQSxFQUFRO0VBQ3BDLElBQUlDLE9BQUE7SUFBU0MsU0FBQSxHQUFZO0lBQUtDLGFBQUE7SUFBZTNJLE1BQUEsR0FBUztFQUN0RCxJQUFJNEksTUFBQSxHQUFTSixNQUFBLENBQU83RCxHQUFBO0lBQUtrRSxNQUFBLEdBQVNMLE1BQUEsQ0FBTzdELEdBQUE7RUFDekMsSUFBSW1FLFVBQUEsRUFBWUMsV0FBQTtFQUNoQixTQUFTcEosS0FBQSxHQUFRakMsSUFBQSxDQUFLc0wsVUFBQSxFQUFZQyxVQUFBLEdBQWEsR0FBR3RKLEtBQUEsRUFBT0EsS0FBQSxHQUFRQSxLQUFBLENBQU11SixXQUFBLEVBQWFELFVBQUEsSUFBYztJQUM5RixJQUFJRSxLQUFBO0lBQ0osSUFBSXhKLEtBQUEsQ0FBTTNCLFFBQUEsSUFBWSxHQUNsQm1MLEtBQUEsR0FBUXhKLEtBQUEsQ0FBTXlKLGNBQUEsQ0FBZSxXQUN4QnpKLEtBQUEsQ0FBTTNCLFFBQUEsSUFBWSxHQUN2Qm1MLEtBQUEsR0FBUWhMLFNBQUEsQ0FBVXdCLEtBQUssRUFBRXlKLGNBQUEsQ0FBZSxPQUV4QztJQUNKLFNBQVNwQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbUIsS0FBQSxDQUFNeEssTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ25DLElBQUk1QyxJQUFBLEdBQU8rRCxLQUFBLENBQU1uQixDQUFDO01BQ2xCLElBQUk1QyxJQUFBLENBQUtULEdBQUEsSUFBT2lFLE1BQUEsSUFBVXhELElBQUEsQ0FBS1IsTUFBQSxJQUFVaUUsTUFBQSxFQUFRO1FBQzdDRCxNQUFBLEdBQVMxRyxJQUFBLENBQUsrRSxHQUFBLENBQUk3QixJQUFBLENBQUtSLE1BQUEsRUFBUWdFLE1BQU07UUFDckNDLE1BQUEsR0FBUzNHLElBQUEsQ0FBS0MsR0FBQSxDQUFJaUQsSUFBQSxDQUFLVCxHQUFBLEVBQUtrRSxNQUFNO1FBQ2xDLElBQUlRLEVBQUEsR0FBS2pFLElBQUEsQ0FBS1osSUFBQSxHQUFPZ0UsTUFBQSxDQUFPaEUsSUFBQSxHQUFPWSxJQUFBLENBQUtaLElBQUEsR0FBT2dFLE1BQUEsQ0FBT2hFLElBQUEsR0FDaERZLElBQUEsQ0FBS1gsS0FBQSxHQUFRK0QsTUFBQSxDQUFPaEUsSUFBQSxHQUFPZ0UsTUFBQSxDQUFPaEUsSUFBQSxHQUFPWSxJQUFBLENBQUtYLEtBQUEsR0FBUTtRQUM1RCxJQUFJNEUsRUFBQSxHQUFLWCxTQUFBLEVBQVc7VUFDaEJELE9BQUEsR0FBVTlJLEtBQUE7VUFDVitJLFNBQUEsR0FBWVcsRUFBQTtVQUNaVixhQUFBLEdBQWdCVSxFQUFBLElBQU1aLE9BQUEsQ0FBUXpLLFFBQUEsSUFBWSxJQUFJO1lBQzFDd0csSUFBQSxFQUFNWSxJQUFBLENBQUtYLEtBQUEsR0FBUStELE1BQUEsQ0FBT2hFLElBQUEsR0FBT1ksSUFBQSxDQUFLWCxLQUFBLEdBQVFXLElBQUEsQ0FBS1osSUFBQTtZQUNuREcsR0FBQSxFQUFLNkQsTUFBQSxDQUFPN0Q7VUFDaEIsSUFBSTZELE1BQUE7VUFDSixJQUFJN0ksS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEtBQUtxTCxFQUFBLEVBQ3ZCckosTUFBQSxHQUFTaUosVUFBQSxJQUFjVCxNQUFBLENBQU9oRSxJQUFBLEtBQVNZLElBQUEsQ0FBS1osSUFBQSxHQUFPWSxJQUFBLENBQUtYLEtBQUEsSUFBUyxJQUFJLElBQUk7VUFDN0U7UUFDSjtNQUNKLFdBQ1NXLElBQUEsQ0FBS1QsR0FBQSxHQUFNNkQsTUFBQSxDQUFPN0QsR0FBQSxJQUFPLENBQUNtRSxVQUFBLElBQWMxRCxJQUFBLENBQUtaLElBQUEsSUFBUWdFLE1BQUEsQ0FBT2hFLElBQUEsSUFBUVksSUFBQSxDQUFLWCxLQUFBLElBQVMrRCxNQUFBLENBQU9oRSxJQUFBLEVBQU07UUFDcEdzRSxVQUFBLEdBQWFuSixLQUFBO1FBQ2JvSixXQUFBLEdBQWM7VUFBRXZFLElBQUEsRUFBTXRDLElBQUEsQ0FBSytFLEdBQUEsQ0FBSTdCLElBQUEsQ0FBS1osSUFBQSxFQUFNdEMsSUFBQSxDQUFLQyxHQUFBLENBQUlpRCxJQUFBLENBQUtYLEtBQUEsRUFBTytELE1BQUEsQ0FBT2hFLElBQUksQ0FBQztVQUFHRyxHQUFBLEVBQUtTLElBQUEsQ0FBS1Q7UUFBSTtNQUNoRztNQUNBLElBQUksQ0FBQzhELE9BQUEsS0FBWUQsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtYLEtBQUEsSUFBUytELE1BQUEsQ0FBTzdELEdBQUEsSUFBT1MsSUFBQSxDQUFLVCxHQUFBLElBQzdENkQsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtaLElBQUEsSUFBUWdFLE1BQUEsQ0FBTzdELEdBQUEsSUFBT1MsSUFBQSxDQUFLUixNQUFBLEdBQy9DNUUsTUFBQSxHQUFTaUosVUFBQSxHQUFhO0lBQzlCO0VBQ0o7RUFDQSxJQUFJLENBQUNSLE9BQUEsSUFBV0ssVUFBQSxFQUFZO0lBQ3hCTCxPQUFBLEdBQVVLLFVBQUE7SUFDVkgsYUFBQSxHQUFnQkksV0FBQTtJQUNoQkwsU0FBQSxHQUFZO0VBQ2hCO0VBQ0EsSUFBSUQsT0FBQSxJQUFXQSxPQUFBLENBQVF6SyxRQUFBLElBQVksR0FDL0IsT0FBT3NMLGdCQUFBLENBQWlCYixPQUFBLEVBQVNFLGFBQWE7RUFDbEQsSUFBSSxDQUFDRixPQUFBLElBQVlDLFNBQUEsSUFBYUQsT0FBQSxDQUFRekssUUFBQSxJQUFZLEdBQzlDLE9BQU87SUFBRU4sSUFBQTtJQUFNc0M7RUFBTztFQUMxQixPQUFPdUksZ0JBQUEsQ0FBaUJFLE9BQUEsRUFBU0UsYUFBYTtBQUNsRDtBQUNBLFNBQVNXLGlCQUFpQjVMLElBQUEsRUFBTThLLE1BQUEsRUFBUTtFQUNwQyxJQUFJZSxHQUFBLEdBQU03TCxJQUFBLENBQUtnQixTQUFBLENBQVVDLE1BQUE7RUFDekIsSUFBSUwsS0FBQSxHQUFRQyxRQUFBLENBQVNDLFdBQUEsQ0FBWTtFQUNqQyxTQUFTd0osQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXVCLEdBQUEsRUFBS3ZCLENBQUEsSUFBSztJQUMxQjFKLEtBQUEsQ0FBTUcsTUFBQSxDQUFPZixJQUFBLEVBQU1zSyxDQUFBLEdBQUksQ0FBQztJQUN4QjFKLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxFQUFNc0ssQ0FBQztJQUN0QixJQUFJNUMsSUFBQSxHQUFPb0UsVUFBQSxDQUFXbEwsS0FBQSxFQUFPLENBQUM7SUFDOUIsSUFBSThHLElBQUEsQ0FBS1QsR0FBQSxJQUFPUyxJQUFBLENBQUtSLE1BQUEsRUFDakI7SUFDSixJQUFJNkUsTUFBQSxDQUFPakIsTUFBQSxFQUFRcEQsSUFBSSxHQUNuQixPQUFPO01BQUUxSCxJQUFBO01BQU1zQyxNQUFBLEVBQVFnSSxDQUFBLElBQUtRLE1BQUEsQ0FBT2hFLElBQUEsS0FBU1ksSUFBQSxDQUFLWixJQUFBLEdBQU9ZLElBQUEsQ0FBS1gsS0FBQSxJQUFTLElBQUksSUFBSTtJQUFHO0VBQ3pGO0VBQ0EsT0FBTztJQUFFL0csSUFBQTtJQUFNc0MsTUFBQSxFQUFRO0VBQUU7QUFDN0I7QUFDQSxTQUFTeUosT0FBT2pCLE1BQUEsRUFBUXBELElBQUEsRUFBTTtFQUMxQixPQUFPb0QsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtaLElBQUEsR0FBTyxLQUFLZ0UsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtYLEtBQUEsR0FBUSxLQUMvRCtELE1BQUEsQ0FBTzdELEdBQUEsSUFBT1MsSUFBQSxDQUFLVCxHQUFBLEdBQU0sS0FBSzZELE1BQUEsQ0FBTzdELEdBQUEsSUFBT1MsSUFBQSxDQUFLUixNQUFBLEdBQVM7QUFDbEU7QUFDQSxTQUFTOEUsYUFBYXJKLEdBQUEsRUFBS21JLE1BQUEsRUFBUTtFQUMvQixJQUFJMUssTUFBQSxHQUFTdUMsR0FBQSxDQUFJeEMsVUFBQTtFQUNqQixJQUFJQyxNQUFBLElBQVUsUUFBUTBCLElBQUEsQ0FBSzFCLE1BQUEsQ0FBTzJCLFFBQVEsS0FBSytJLE1BQUEsQ0FBT2hFLElBQUEsR0FBT25FLEdBQUEsQ0FBSWdGLHFCQUFBLENBQXNCLEVBQUViLElBQUEsRUFDckYsT0FBTzFHLE1BQUE7RUFDWCxPQUFPdUMsR0FBQTtBQUNYO0FBQ0EsU0FBU3NKLGVBQWVoRSxJQUFBLEVBQU1sRSxHQUFBLEVBQUsrRyxNQUFBLEVBQVE7RUFDdkMsSUFBSTtNQUFFOUssSUFBQTtNQUFNc0M7SUFBTyxJQUFJdUksZ0JBQUEsQ0FBaUI5RyxHQUFBLEVBQUsrRyxNQUFNO0lBQUdvQixJQUFBLEdBQU87RUFDN0QsSUFBSWxNLElBQUEsQ0FBS00sUUFBQSxJQUFZLEtBQUssQ0FBQ04sSUFBQSxDQUFLc0wsVUFBQSxFQUFZO0lBQ3hDLElBQUk1RCxJQUFBLEdBQU8xSCxJQUFBLENBQUsySCxxQkFBQSxDQUFzQjtJQUN0Q3VFLElBQUEsR0FBT3hFLElBQUEsQ0FBS1osSUFBQSxJQUFRWSxJQUFBLENBQUtYLEtBQUEsSUFBUytELE1BQUEsQ0FBT2hFLElBQUEsSUFBUVksSUFBQSxDQUFLWixJQUFBLEdBQU9ZLElBQUEsQ0FBS1gsS0FBQSxJQUFTLElBQUksSUFBSTtFQUN2RjtFQUNBLE9BQU9rQixJQUFBLENBQUtrRSxPQUFBLENBQVFDLFVBQUEsQ0FBV3BNLElBQUEsRUFBTXNDLE1BQUEsRUFBUTRKLElBQUk7QUFDckQ7QUFDQSxTQUFTRyxhQUFhcEUsSUFBQSxFQUFNakksSUFBQSxFQUFNc0MsTUFBQSxFQUFRd0ksTUFBQSxFQUFRO0VBTzlDLElBQUl3QixZQUFBLEdBQWU7RUFDbkIsU0FBU3pKLEdBQUEsR0FBTTdDLElBQUEsRUFBTXVNLFFBQUEsR0FBVyxTQUFTO0lBQ3JDLElBQUkxSixHQUFBLElBQU9vRixJQUFBLENBQUt0RixHQUFBLEVBQ1o7SUFDSixJQUFJQyxJQUFBLEdBQU9xRixJQUFBLENBQUtrRSxPQUFBLENBQVFLLFdBQUEsQ0FBWTNKLEdBQUEsRUFBSyxJQUFJO01BQUc2RSxJQUFBO0lBQ2hELElBQUksQ0FBQzlFLElBQUEsRUFDRCxPQUFPO0lBQ1gsSUFBSUEsSUFBQSxDQUFLRCxHQUFBLENBQUlyQyxRQUFBLElBQVksTUFBTXNDLElBQUEsQ0FBSzVDLElBQUEsQ0FBSzhDLE9BQUEsSUFBV0YsSUFBQSxDQUFLeEMsTUFBQSxJQUFVLENBQUN3QyxJQUFBLENBQUtHLFVBQUE7SUFBQTtJQUFBLENBRW5FMkUsSUFBQSxHQUFPOUUsSUFBQSxDQUFLRCxHQUFBLENBQUlnRixxQkFBQSxDQUFzQixHQUFHWCxLQUFBLElBQVNVLElBQUEsQ0FBS1AsTUFBQSxHQUFTO01BQ2xFLElBQUl2RSxJQUFBLENBQUs1QyxJQUFBLENBQUs4QyxPQUFBLElBQVdGLElBQUEsQ0FBS3hDLE1BQUEsSUFBVSxDQUFDLHdCQUF3QjBCLElBQUEsQ0FBS2MsSUFBQSxDQUFLRCxHQUFBLENBQUlaLFFBQVEsR0FBRztRQUV0RixJQUFJLENBQUN3SyxRQUFBLElBQVk3RSxJQUFBLENBQUtaLElBQUEsR0FBT2dFLE1BQUEsQ0FBT2hFLElBQUEsSUFBUVksSUFBQSxDQUFLVCxHQUFBLEdBQU02RCxNQUFBLENBQU83RCxHQUFBLEVBQzFEcUYsWUFBQSxHQUFlMUosSUFBQSxDQUFLNkosU0FBQSxVQUNmLENBQUNGLFFBQUEsSUFBWTdFLElBQUEsQ0FBS1gsS0FBQSxHQUFRK0QsTUFBQSxDQUFPaEUsSUFBQSxJQUFRWSxJQUFBLENBQUtSLE1BQUEsR0FBUzRELE1BQUEsQ0FBTzdELEdBQUEsRUFDbkVxRixZQUFBLEdBQWUxSixJQUFBLENBQUs4SixRQUFBO1FBQ3hCSCxRQUFBLEdBQVc7TUFDZjtNQUNBLElBQUksQ0FBQzNKLElBQUEsQ0FBS0csVUFBQSxJQUFjdUosWUFBQSxHQUFlLEtBQUssQ0FBQzFKLElBQUEsQ0FBSzVDLElBQUEsQ0FBSzJNLE1BQUEsRUFBUTtRQUUzRCxJQUFJQyxNQUFBLEdBQVNoSyxJQUFBLENBQUs1QyxJQUFBLENBQUs4QyxPQUFBLEdBQVVnSSxNQUFBLENBQU83RCxHQUFBLElBQU9TLElBQUEsQ0FBS1QsR0FBQSxHQUFNUyxJQUFBLENBQUtSLE1BQUEsSUFBVSxJQUNuRTRELE1BQUEsQ0FBT2hFLElBQUEsSUFBUVksSUFBQSxDQUFLWixJQUFBLEdBQU9ZLElBQUEsQ0FBS1gsS0FBQSxJQUFTO1FBQy9DLE9BQU82RixNQUFBLEdBQVNoSyxJQUFBLENBQUs2SixTQUFBLEdBQVk3SixJQUFBLENBQUs4SixRQUFBO01BQzFDO0lBQ0o7SUFDQTdKLEdBQUEsR0FBTUQsSUFBQSxDQUFLRCxHQUFBLENBQUl4QyxVQUFBO0VBQ25CO0VBQ0EsT0FBT21NLFlBQUEsR0FBZSxLQUFLQSxZQUFBLEdBQWVyRSxJQUFBLENBQUtrRSxPQUFBLENBQVFDLFVBQUEsQ0FBV3BNLElBQUEsRUFBTXNDLE1BQUEsRUFBUSxFQUFFO0FBQ3RGO0FBQ0EsU0FBU3NILGlCQUFpQmlELE9BQUEsRUFBUy9CLE1BQUEsRUFBUWdDLEdBQUEsRUFBSztFQUM1QyxJQUFJakIsR0FBQSxHQUFNZ0IsT0FBQSxDQUFRM0ssVUFBQSxDQUFXakIsTUFBQTtFQUM3QixJQUFJNEssR0FBQSxJQUFPaUIsR0FBQSxDQUFJN0YsR0FBQSxHQUFNNkYsR0FBQSxDQUFJNUYsTUFBQSxFQUFRO0lBQzdCLFNBQVM2RixNQUFBLEdBQVN2SSxJQUFBLENBQUsrRSxHQUFBLENBQUksR0FBRy9FLElBQUEsQ0FBS0MsR0FBQSxDQUFJb0gsR0FBQSxHQUFNLEdBQUdySCxJQUFBLENBQUt3SSxLQUFBLENBQU1uQixHQUFBLElBQU9mLE1BQUEsQ0FBTzdELEdBQUEsR0FBTTZGLEdBQUEsQ0FBSTdGLEdBQUEsS0FBUTZGLEdBQUEsQ0FBSTVGLE1BQUEsR0FBUzRGLEdBQUEsQ0FBSTdGLEdBQUEsQ0FBSSxJQUFJLENBQUMsQ0FBQyxHQUFHcUQsQ0FBQSxHQUFJeUMsTUFBQSxJQUFVO01BQ25JLElBQUk5SyxLQUFBLEdBQVE0SyxPQUFBLENBQVEzSyxVQUFBLENBQVdvSSxDQUFDO01BQ2hDLElBQUlySSxLQUFBLENBQU0zQixRQUFBLElBQVksR0FBRztRQUNyQixJQUFJbUwsS0FBQSxHQUFReEosS0FBQSxDQUFNeUosY0FBQSxDQUFlO1FBQ2pDLFNBQVN1QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJeEIsS0FBQSxDQUFNeEssTUFBQSxFQUFRZ00sQ0FBQSxJQUFLO1VBQ25DLElBQUl2RixJQUFBLEdBQU8rRCxLQUFBLENBQU13QixDQUFDO1VBQ2xCLElBQUlsQixNQUFBLENBQU9qQixNQUFBLEVBQVFwRCxJQUFJLEdBQ25CLE9BQU9rQyxnQkFBQSxDQUFpQjNILEtBQUEsRUFBTzZJLE1BQUEsRUFBUXBELElBQUk7UUFDbkQ7TUFDSjtNQUNBLEtBQUs0QyxDQUFBLElBQUtBLENBQUEsR0FBSSxLQUFLdUIsR0FBQSxLQUFRa0IsTUFBQSxFQUN2QjtJQUNSO0VBQ0o7RUFDQSxPQUFPRixPQUFBO0FBQ1g7QUFFQSxTQUFTSyxZQUFZakYsSUFBQSxFQUFNNkMsTUFBQSxFQUFRO0VBQy9CLElBQUloSCxJQUFBLEdBQU1tRSxJQUFBLENBQUt0RixHQUFBLENBQUkyRixhQUFBO0lBQWV0SSxJQUFBO0lBQU1zQyxNQUFBLEdBQVM7RUFDakQsSUFBSTZLLEtBQUEsR0FBUWpKLGNBQUEsQ0FBZUosSUFBQSxFQUFLZ0gsTUFBQSxDQUFPaEUsSUFBQSxFQUFNZ0UsTUFBQSxDQUFPN0QsR0FBRztFQUN2RCxJQUFJa0csS0FBQSxFQUNBLENBQUM7SUFBRW5OLElBQUE7SUFBTXNDO0VBQU8sSUFBSTZLLEtBQUE7RUFDeEIsSUFBSXBKLEdBQUEsSUFBT2tFLElBQUEsQ0FBSzBCLElBQUEsQ0FBS0MsZ0JBQUEsR0FBbUIzQixJQUFBLENBQUswQixJQUFBLEdBQU83RixJQUFBLEVBQy9DOEYsZ0JBQUEsQ0FBaUJrQixNQUFBLENBQU9oRSxJQUFBLEVBQU1nRSxNQUFBLENBQU83RCxHQUFHO0VBQzdDLElBQUkzQyxHQUFBO0VBQ0osSUFBSSxDQUFDUCxHQUFBLElBQU8sQ0FBQ2tFLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSWtILFFBQUEsQ0FBUzlGLEdBQUEsQ0FBSXpELFFBQUEsSUFBWSxJQUFJeUQsR0FBQSxDQUFJNUQsVUFBQSxHQUFhNEQsR0FBRyxHQUFHO0lBQ3RFLElBQUkrSSxHQUFBLEdBQU03RSxJQUFBLENBQUt0RixHQUFBLENBQUlnRixxQkFBQSxDQUFzQjtJQUN6QyxJQUFJLENBQUNvRSxNQUFBLENBQU9qQixNQUFBLEVBQVFnQyxHQUFHLEdBQ25CLE9BQU87SUFDWC9JLEdBQUEsR0FBTTZGLGdCQUFBLENBQWlCM0IsSUFBQSxDQUFLdEYsR0FBQSxFQUFLbUksTUFBQSxFQUFRZ0MsR0FBRztJQUM1QyxJQUFJLENBQUMvSSxHQUFBLEVBQ0QsT0FBTztFQUNmO0VBRUEsSUFBSStCLE1BQUEsRUFBUTtJQUNSLFNBQVNzSCxDQUFBLEdBQUlySixHQUFBLEVBQUsvRCxJQUFBLElBQVFvTixDQUFBLEVBQUdBLENBQUEsR0FBSWpOLFVBQUEsQ0FBV2lOLENBQUMsR0FDekMsSUFBSUEsQ0FBQSxDQUFFQyxTQUFBLEVBQ0ZyTixJQUFBLEdBQU87RUFDbkI7RUFDQStELEdBQUEsR0FBTWlJLFlBQUEsQ0FBYWpJLEdBQUEsRUFBSytHLE1BQU07RUFDOUIsSUFBSTlLLElBQUEsRUFBTTtJQUNOLElBQUkwRixLQUFBLElBQVMxRixJQUFBLENBQUtNLFFBQUEsSUFBWSxHQUFHO01BRzdCZ0MsTUFBQSxHQUFTa0MsSUFBQSxDQUFLQyxHQUFBLENBQUluQyxNQUFBLEVBQVF0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFNO01BR2hELElBQUlxQixNQUFBLEdBQVN0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBLEVBQVE7UUFDakMsSUFBSXFNLElBQUEsR0FBT3ROLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBTTtVQUFHd0ssR0FBQTtRQUNwQyxJQUFJUSxJQUFBLENBQUt2TCxRQUFBLElBQVksVUFBVStLLEdBQUEsR0FBTVEsSUFBQSxDQUFLM0YscUJBQUEsQ0FBc0IsR0FBR1osS0FBQSxJQUFTK0QsTUFBQSxDQUFPaEUsSUFBQSxJQUMvRWdHLEdBQUEsQ0FBSTVGLE1BQUEsR0FBUzRELE1BQUEsQ0FBTzdELEdBQUEsRUFDcEIzRSxNQUFBO01BQ1I7SUFDSjtJQUNBLElBQUlpTCxJQUFBO0lBRUosSUFBSWpILE1BQUEsSUFBVWhFLE1BQUEsSUFBVXRDLElBQUEsQ0FBS00sUUFBQSxJQUFZLE1BQU1pTixJQUFBLEdBQU92TixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxDQUFDLEdBQUdoQyxRQUFBLElBQVksS0FDM0ZpTixJQUFBLENBQUt2TCxlQUFBLElBQW1CLFdBQVd1TCxJQUFBLENBQUs1RixxQkFBQSxDQUFzQixFQUFFVixHQUFBLElBQU82RCxNQUFBLENBQU83RCxHQUFBLEVBQzlFM0UsTUFBQTtJQUdKLElBQUl0QyxJQUFBLElBQVFpSSxJQUFBLENBQUt0RixHQUFBLElBQU9MLE1BQUEsSUFBVXRDLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2pCLE1BQUEsR0FBUyxLQUFLakIsSUFBQSxDQUFLd04sU0FBQSxDQUFVbE4sUUFBQSxJQUFZLEtBQ3ZGd0ssTUFBQSxDQUFPN0QsR0FBQSxHQUFNakgsSUFBQSxDQUFLd04sU0FBQSxDQUFVN0YscUJBQUEsQ0FBc0IsRUFBRVQsTUFBQSxFQUNwRDVDLEdBQUEsR0FBTTJELElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSTBJLE9BQUEsQ0FBUUMsSUFBQSxVQUl4QnJMLE1BQUEsSUFBVSxLQUFLdEMsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS04sSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBLEdBQVMsQ0FBQyxFQUFFUCxRQUFBLElBQVksTUFDbEZ1QyxHQUFBLEdBQU0rSCxZQUFBLENBQWFwRSxJQUFBLEVBQU1qSSxJQUFBLEVBQU1zQyxNQUFBLEVBQVF3SSxNQUFNO0VBQ3JEO0VBQ0EsSUFBSXhHLEdBQUEsSUFBTyxNQUNQQSxHQUFBLEdBQU0ySCxjQUFBLENBQWVoRSxJQUFBLEVBQU1sRSxHQUFBLEVBQUsrRyxNQUFNO0VBQzFDLElBQUlsSSxJQUFBLEdBQU9xRixJQUFBLENBQUtrRSxPQUFBLENBQVFLLFdBQUEsQ0FBWXpJLEdBQUEsRUFBSyxJQUFJO0VBQzdDLE9BQU87SUFBRU8sR0FBQTtJQUFLc0osTUFBQSxFQUFRaEwsSUFBQSxHQUFPQSxJQUFBLENBQUtpTCxVQUFBLEdBQWFqTCxJQUFBLENBQUtrTCxNQUFBLEdBQVM7RUFBRztBQUNwRTtBQUNBLFNBQVNDLFFBQVFyRyxJQUFBLEVBQU07RUFDbkIsT0FBT0EsSUFBQSxDQUFLVCxHQUFBLEdBQU1TLElBQUEsQ0FBS1IsTUFBQSxJQUFVUSxJQUFBLENBQUtaLElBQUEsR0FBT1ksSUFBQSxDQUFLWCxLQUFBO0FBQ3REO0FBQ0EsU0FBUytFLFdBQVdrQyxNQUFBLEVBQVE5QixJQUFBLEVBQU07RUFDOUIsSUFBSVQsS0FBQSxHQUFRdUMsTUFBQSxDQUFPdEMsY0FBQSxDQUFlO0VBQ2xDLElBQUlELEtBQUEsQ0FBTXhLLE1BQUEsRUFBUTtJQUNkLElBQUlnTixLQUFBLEdBQVF4QyxLQUFBLENBQU1TLElBQUEsR0FBTyxJQUFJLElBQUlULEtBQUEsQ0FBTXhLLE1BQUEsR0FBUyxDQUFDO0lBQ2pELElBQUk4TSxPQUFBLENBQVFFLEtBQUssR0FDYixPQUFPQSxLQUFBO0VBQ2Y7RUFDQSxPQUFPQyxLQUFBLENBQU1DLFNBQUEsQ0FBVUMsSUFBQSxDQUFLQyxJQUFBLENBQUs1QyxLQUFBLEVBQU9zQyxPQUFPLEtBQUtDLE1BQUEsQ0FBT3JHLHFCQUFBLENBQXNCO0FBQ3JGO0FBQ0EsSUFBTTJHLElBQUEsR0FBTztBQUdiLFNBQVNDLFlBQVl0RyxJQUFBLEVBQU0zRCxHQUFBLEVBQUtrRCxJQUFBLEVBQU07RUFDbEMsSUFBSTtJQUFFeEgsSUFBQTtJQUFNc0MsTUFBQTtJQUFRa007RUFBSyxJQUFJdkcsSUFBQSxDQUFLa0UsT0FBQSxDQUFRc0MsVUFBQSxDQUFXbkssR0FBQSxFQUFLa0QsSUFBQSxHQUFPLElBQUksS0FBSyxDQUFDO0VBQzNFLElBQUlrSCxpQkFBQSxHQUFvQnBJLE1BQUEsSUFBVVosS0FBQTtFQUNsQyxJQUFJMUYsSUFBQSxDQUFLTSxRQUFBLElBQVksR0FBRztJQUdwQixJQUFJb08saUJBQUEsS0FBc0JKLElBQUEsQ0FBS3hNLElBQUEsQ0FBSzlCLElBQUEsQ0FBS2dCLFNBQVMsTUFBTXdHLElBQUEsR0FBTyxJQUFJLENBQUNsRixNQUFBLEdBQVNBLE1BQUEsSUFBVXRDLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQSxJQUFVO01BQzVHLElBQUl5RyxJQUFBLEdBQU9vRSxVQUFBLENBQVdyTCxTQUFBLENBQVVULElBQUEsRUFBTXNDLE1BQUEsRUFBUUEsTUFBTSxHQUFHa0YsSUFBSTtNQUkzRCxJQUFJOUIsS0FBQSxJQUFTcEQsTUFBQSxJQUFVLEtBQUtSLElBQUEsQ0FBSzlCLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVXNCLE1BQUEsR0FBUyxDQUFDLENBQUMsS0FBS0EsTUFBQSxHQUFTdEMsSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBLEVBQVE7UUFDNUYsSUFBSTBOLFVBQUEsR0FBYTdDLFVBQUEsQ0FBV3JMLFNBQUEsQ0FBVVQsSUFBQSxFQUFNc0MsTUFBQSxHQUFTLEdBQUdBLE1BQUEsR0FBUyxDQUFDLEdBQUcsRUFBRTtRQUN2RSxJQUFJcU0sVUFBQSxDQUFXMUgsR0FBQSxJQUFPUyxJQUFBLENBQUtULEdBQUEsRUFBSztVQUM1QixJQUFJMkgsU0FBQSxHQUFZOUMsVUFBQSxDQUFXckwsU0FBQSxDQUFVVCxJQUFBLEVBQU1zQyxNQUFBLEVBQVFBLE1BQUEsR0FBUyxDQUFDLEdBQUcsRUFBRTtVQUNsRSxJQUFJc00sU0FBQSxDQUFVM0gsR0FBQSxJQUFPUyxJQUFBLENBQUtULEdBQUEsRUFDdEIsT0FBTzRILFFBQUEsQ0FBU0QsU0FBQSxFQUFXQSxTQUFBLENBQVU5SCxJQUFBLEdBQU82SCxVQUFBLENBQVc3SCxJQUFJO1FBQ25FO01BQ0o7TUFDQSxPQUFPWSxJQUFBO0lBQ1gsT0FDSztNQUNELElBQUloSCxJQUFBLEdBQU80QixNQUFBO1FBQVEzQixFQUFBLEdBQUsyQixNQUFBO1FBQVF3TSxRQUFBLEdBQVd0SCxJQUFBLEdBQU8sSUFBSSxJQUFJO01BQzFELElBQUlBLElBQUEsR0FBTyxLQUFLLENBQUNsRixNQUFBLEVBQVE7UUFDckIzQixFQUFBO1FBQ0FtTyxRQUFBLEdBQVc7TUFDZixXQUNTdEgsSUFBQSxJQUFRLEtBQUtsRixNQUFBLElBQVV0QyxJQUFBLENBQUtnQixTQUFBLENBQVVDLE1BQUEsRUFBUTtRQUNuRFAsSUFBQTtRQUNBb08sUUFBQSxHQUFXO01BQ2YsV0FDU3RILElBQUEsR0FBTyxHQUFHO1FBQ2Y5RyxJQUFBO01BQ0osT0FDSztRQUNEQyxFQUFBO01BQ0o7TUFDQSxPQUFPa08sUUFBQSxDQUFTL0MsVUFBQSxDQUFXckwsU0FBQSxDQUFVVCxJQUFBLEVBQU1VLElBQUEsRUFBTUMsRUFBRSxHQUFHbU8sUUFBUSxHQUFHQSxRQUFBLEdBQVcsQ0FBQztJQUNqRjtFQUNKO0VBQ0EsSUFBSUMsSUFBQSxHQUFPOUcsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRMUssR0FBQSxJQUFPa0ssSUFBQSxJQUFRLEVBQUU7RUFFbkQsSUFBSSxDQUFDTyxJQUFBLENBQUszTyxNQUFBLENBQU82TyxhQUFBLEVBQWU7SUFDNUIsSUFBSVQsSUFBQSxJQUFRLFFBQVFsTSxNQUFBLEtBQVdrRixJQUFBLEdBQU8sS0FBS2xGLE1BQUEsSUFBVVYsUUFBQSxDQUFTNUIsSUFBSSxJQUFJO01BQ2xFLElBQUk0TSxNQUFBLEdBQVM1TSxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxDQUFDO01BQ3ZDLElBQUlzSyxNQUFBLENBQU90TSxRQUFBLElBQVksR0FDbkIsT0FBTzRPLFFBQUEsQ0FBU3RDLE1BQUEsQ0FBT2pGLHFCQUFBLENBQXNCLEdBQUcsS0FBSztJQUM3RDtJQUNBLElBQUk2RyxJQUFBLElBQVEsUUFBUWxNLE1BQUEsR0FBU1YsUUFBQSxDQUFTNUIsSUFBSSxHQUFHO01BQ3pDLElBQUltUCxLQUFBLEdBQVFuUCxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQU07TUFDbEMsSUFBSTZNLEtBQUEsQ0FBTTdPLFFBQUEsSUFBWSxHQUNsQixPQUFPNE8sUUFBQSxDQUFTQyxLQUFBLENBQU14SCxxQkFBQSxDQUFzQixHQUFHLElBQUk7SUFDM0Q7SUFDQSxPQUFPdUgsUUFBQSxDQUFTbFAsSUFBQSxDQUFLMkgscUJBQUEsQ0FBc0IsR0FBR0gsSUFBQSxJQUFRLENBQUM7RUFDM0Q7RUFFQSxJQUFJZ0gsSUFBQSxJQUFRLFFBQVFsTSxNQUFBLEtBQVdrRixJQUFBLEdBQU8sS0FBS2xGLE1BQUEsSUFBVVYsUUFBQSxDQUFTNUIsSUFBSSxJQUFJO0lBQ2xFLElBQUk0TSxNQUFBLEdBQVM1TSxJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxDQUFDO0lBQ3ZDLElBQUkwTCxNQUFBLEdBQVNwQixNQUFBLENBQU90TSxRQUFBLElBQVksSUFBSUcsU0FBQSxDQUFVbU0sTUFBQSxFQUFRaEwsUUFBQSxDQUFTZ0wsTUFBTSxLQUFLOEIsaUJBQUEsR0FBb0IsSUFBSSxFQUFFLElBRzlGOUIsTUFBQSxDQUFPdE0sUUFBQSxJQUFZLE1BQU1zTSxNQUFBLENBQU83SyxRQUFBLElBQVksUUFBUSxDQUFDNkssTUFBQSxDQUFPcEIsV0FBQSxJQUFlb0IsTUFBQSxHQUFTO0lBQzFGLElBQUlvQixNQUFBLEVBQ0EsT0FBT2EsUUFBQSxDQUFTL0MsVUFBQSxDQUFXa0MsTUFBQSxFQUFRLENBQUMsR0FBRyxLQUFLO0VBQ3BEO0VBQ0EsSUFBSVEsSUFBQSxJQUFRLFFBQVFsTSxNQUFBLEdBQVNWLFFBQUEsQ0FBUzVCLElBQUksR0FBRztJQUN6QyxJQUFJbVAsS0FBQSxHQUFRblAsSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFNO0lBQ2xDLE9BQU82TSxLQUFBLENBQU1oTixVQUFBLElBQWNnTixLQUFBLENBQU1oTixVQUFBLENBQVdpTixlQUFBLEVBQ3hDRCxLQUFBLEdBQVFBLEtBQUEsQ0FBTTNELFdBQUE7SUFDbEIsSUFBSXdDLE1BQUEsR0FBUyxDQUFDbUIsS0FBQSxHQUFRLE9BQU9BLEtBQUEsQ0FBTTdPLFFBQUEsSUFBWSxJQUFJRyxTQUFBLENBQVUwTyxLQUFBLEVBQU8sR0FBSVQsaUJBQUEsR0FBb0IsSUFBSSxDQUFFLElBQzVGUyxLQUFBLENBQU03TyxRQUFBLElBQVksSUFBSTZPLEtBQUEsR0FBUTtJQUNwQyxJQUFJbkIsTUFBQSxFQUNBLE9BQU9hLFFBQUEsQ0FBUy9DLFVBQUEsQ0FBV2tDLE1BQUEsRUFBUSxFQUFFLEdBQUcsSUFBSTtFQUNwRDtFQUVBLE9BQU9hLFFBQUEsQ0FBUy9DLFVBQUEsQ0FBVzlMLElBQUEsQ0FBS00sUUFBQSxJQUFZLElBQUlHLFNBQUEsQ0FBVVQsSUFBSSxJQUFJQSxJQUFBLEVBQU0sQ0FBQ3dILElBQUksR0FBR0EsSUFBQSxJQUFRLENBQUM7QUFDN0Y7QUFDQSxTQUFTcUgsU0FBU25ILElBQUEsRUFBTVosSUFBQSxFQUFNO0VBQzFCLElBQUlZLElBQUEsQ0FBS1YsS0FBQSxJQUFTLEdBQ2QsT0FBT1UsSUFBQTtFQUNYLElBQUl2RCxDQUFBLEdBQUkyQyxJQUFBLEdBQU9ZLElBQUEsQ0FBS1osSUFBQSxHQUFPWSxJQUFBLENBQUtYLEtBQUE7RUFDaEMsT0FBTztJQUFFRSxHQUFBLEVBQUtTLElBQUEsQ0FBS1QsR0FBQTtJQUFLQyxNQUFBLEVBQVFRLElBQUEsQ0FBS1IsTUFBQTtJQUFRSixJQUFBLEVBQU0zQyxDQUFBO0lBQUc0QyxLQUFBLEVBQU81QztFQUFFO0FBQ25FO0FBQ0EsU0FBUytLLFNBQVN4SCxJQUFBLEVBQU1ULEdBQUEsRUFBSztFQUN6QixJQUFJUyxJQUFBLENBQUtQLE1BQUEsSUFBVSxHQUNmLE9BQU9PLElBQUE7RUFDWCxJQUFJdEQsQ0FBQSxHQUFJNkMsR0FBQSxHQUFNUyxJQUFBLENBQUtULEdBQUEsR0FBTVMsSUFBQSxDQUFLUixNQUFBO0VBQzlCLE9BQU87SUFBRUQsR0FBQSxFQUFLN0MsQ0FBQTtJQUFHOEMsTUFBQSxFQUFROUMsQ0FBQTtJQUFHMEMsSUFBQSxFQUFNWSxJQUFBLENBQUtaLElBQUE7SUFBTUMsS0FBQSxFQUFPVyxJQUFBLENBQUtYO0VBQU07QUFDbkU7QUFDQSxTQUFTc0ksaUJBQWlCcEgsSUFBQSxFQUFNd0YsS0FBQSxFQUFPNkIsQ0FBQSxFQUFHO0VBQ3RDLElBQUlDLFNBQUEsR0FBWXRILElBQUEsQ0FBS3dGLEtBQUE7SUFBTytCLE1BQUEsR0FBU3ZILElBQUEsQ0FBSzBCLElBQUEsQ0FBSzNGLGFBQUE7RUFDL0MsSUFBSXVMLFNBQUEsSUFBYTlCLEtBQUEsRUFDYnhGLElBQUEsQ0FBS3dILFdBQUEsQ0FBWWhDLEtBQUs7RUFDMUIsSUFBSStCLE1BQUEsSUFBVXZILElBQUEsQ0FBS3RGLEdBQUEsRUFDZnNGLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTtFQUNmLElBQUk7SUFDQSxPQUFPNEUsQ0FBQSxDQUFFO0VBQ2IsVUFDQTtJQUNJLElBQUlDLFNBQUEsSUFBYTlCLEtBQUEsRUFDYnhGLElBQUEsQ0FBS3dILFdBQUEsQ0FBWUYsU0FBUztJQUM5QixJQUFJQyxNQUFBLElBQVV2SCxJQUFBLENBQUt0RixHQUFBLElBQU82TSxNQUFBLEVBQ3RCQSxNQUFBLENBQU85RSxLQUFBLENBQU07RUFDckI7QUFDSjtBQUdBLFNBQVNnRix1QkFBdUJ6SCxJQUFBLEVBQU13RixLQUFBLEVBQU8vTCxHQUFBLEVBQUs7RUFDOUMsSUFBSWlPLEdBQUEsR0FBTWxDLEtBQUEsQ0FBTW1DLFNBQUE7RUFDaEIsSUFBSUMsSUFBQSxHQUFPbk8sR0FBQSxJQUFPLE9BQU9pTyxHQUFBLENBQUlHLEtBQUEsR0FBUUgsR0FBQSxDQUFJSSxHQUFBO0VBQ3pDLE9BQU9WLGdCQUFBLENBQWlCcEgsSUFBQSxFQUFNd0YsS0FBQSxFQUFPLE1BQU07SUFDdkMsSUFBSTtNQUFFek4sSUFBQSxFQUFNMkM7SUFBSSxJQUFJc0YsSUFBQSxDQUFLa0UsT0FBQSxDQUFRc0MsVUFBQSxDQUFXb0IsSUFBQSxDQUFLdkwsR0FBQSxFQUFLNUMsR0FBQSxJQUFPLE9BQU8sS0FBSyxDQUFDO0lBQzFFLFNBQVM7TUFDTCxJQUFJc08sT0FBQSxHQUFVL0gsSUFBQSxDQUFLa0UsT0FBQSxDQUFRSyxXQUFBLENBQVk3SixHQUFBLEVBQUssSUFBSTtNQUNoRCxJQUFJLENBQUNxTixPQUFBLEVBQ0Q7TUFDSixJQUFJQSxPQUFBLENBQVFoUSxJQUFBLENBQUs4QyxPQUFBLEVBQVM7UUFDdEJILEdBQUEsR0FBTXFOLE9BQUEsQ0FBUWpOLFVBQUEsSUFBY2lOLE9BQUEsQ0FBUXJOLEdBQUE7UUFDcEM7TUFDSjtNQUNBQSxHQUFBLEdBQU1xTixPQUFBLENBQVFyTixHQUFBLENBQUl4QyxVQUFBO0lBQ3RCO0lBQ0EsSUFBSTJLLE1BQUEsR0FBU3lELFdBQUEsQ0FBWXRHLElBQUEsRUFBTTRILElBQUEsQ0FBS3ZMLEdBQUEsRUFBSyxDQUFDO0lBQzFDLFNBQVNyQyxLQUFBLEdBQVFVLEdBQUEsQ0FBSTJJLFVBQUEsRUFBWXJKLEtBQUEsRUFBT0EsS0FBQSxHQUFRQSxLQUFBLENBQU11SixXQUFBLEVBQWE7TUFDL0QsSUFBSXlFLEtBQUE7TUFDSixJQUFJaE8sS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEdBQ2xCMlAsS0FBQSxHQUFRaE8sS0FBQSxDQUFNeUosY0FBQSxDQUFlLFdBQ3hCekosS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEdBQ3ZCMlAsS0FBQSxHQUFReFAsU0FBQSxDQUFVd0IsS0FBQSxFQUFPLEdBQUdBLEtBQUEsQ0FBTWpCLFNBQUEsQ0FBVUMsTUFBTSxFQUFFeUssY0FBQSxDQUFlLE9BRW5FO01BQ0osU0FBU3BCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyRixLQUFBLENBQU1oUCxNQUFBLEVBQVFxSixDQUFBLElBQUs7UUFDbkMsSUFBSXdDLEdBQUEsR0FBTW1ELEtBQUEsQ0FBTTNGLENBQUM7UUFDakIsSUFBSXdDLEdBQUEsQ0FBSTVGLE1BQUEsR0FBUzRGLEdBQUEsQ0FBSTdGLEdBQUEsR0FBTSxNQUN0QnZGLEdBQUEsSUFBTyxPQUFPb0osTUFBQSxDQUFPN0QsR0FBQSxHQUFNNkYsR0FBQSxDQUFJN0YsR0FBQSxJQUFPNkYsR0FBQSxDQUFJNUYsTUFBQSxHQUFTNEQsTUFBQSxDQUFPN0QsR0FBQSxJQUFPLElBQzVENkYsR0FBQSxDQUFJNUYsTUFBQSxHQUFTNEQsTUFBQSxDQUFPNUQsTUFBQSxJQUFVNEQsTUFBQSxDQUFPNUQsTUFBQSxHQUFTNEYsR0FBQSxDQUFJN0YsR0FBQSxJQUFPLElBQy9ELE9BQU87TUFDZjtJQUNKO0lBQ0EsT0FBTztFQUNYLENBQUM7QUFDTDtBQUNBLElBQU1pSixRQUFBLEdBQVc7QUFDakIsU0FBU0MseUJBQXlCbEksSUFBQSxFQUFNd0YsS0FBQSxFQUFPL0wsR0FBQSxFQUFLO0VBQ2hELElBQUk7SUFBRTBPO0VBQU0sSUFBSTNDLEtBQUEsQ0FBTW1DLFNBQUE7RUFDdEIsSUFBSSxDQUFDUSxLQUFBLENBQU1oUSxNQUFBLENBQU9pUSxXQUFBLEVBQ2QsT0FBTztFQUNYLElBQUkvTixNQUFBLEdBQVM4TixLQUFBLENBQU1FLFlBQUE7SUFBYzdOLE9BQUEsR0FBVSxDQUFDSCxNQUFBO0lBQVFJLEtBQUEsR0FBUUosTUFBQSxJQUFVOE4sS0FBQSxDQUFNaFEsTUFBQSxDQUFPc04sT0FBQSxDQUFRQyxJQUFBO0VBQzNGLElBQUlnQyxHQUFBLEdBQU0xSCxJQUFBLENBQUtzSSxZQUFBLENBQWE7RUFDNUIsSUFBSSxDQUFDWixHQUFBLEVBQ0QsT0FBT1MsS0FBQSxDQUFNOUwsR0FBQSxJQUFPOEwsS0FBQSxDQUFNSSxLQUFBLENBQU0sS0FBS0osS0FBQSxDQUFNOUwsR0FBQSxJQUFPOEwsS0FBQSxDQUFNSyxHQUFBLENBQUk7RUFHaEUsSUFBSSxDQUFDUCxRQUFBLENBQVNwTyxJQUFBLENBQUtzTyxLQUFBLENBQU1oUSxNQUFBLENBQU9zUSxXQUFXLEtBQUssQ0FBQ2YsR0FBQSxDQUFJZ0IsTUFBQSxFQUNqRCxPQUFPalAsR0FBQSxJQUFPLFVBQVVBLEdBQUEsSUFBTyxhQUFhZSxPQUFBLEdBQVVDLEtBQUE7RUFDMUQsT0FBTzJNLGdCQUFBLENBQWlCcEgsSUFBQSxFQUFNd0YsS0FBQSxFQUFPLE1BQU07SUFNdkMsSUFBSTtNQUFFdkssU0FBQSxFQUFXME4sT0FBQTtNQUFTek4sV0FBQSxFQUFhME4sTUFBQTtNQUFRek4sVUFBQTtNQUFZQztJQUFhLElBQUk0RSxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtJQUNuRyxJQUFJQyxZQUFBLEdBQWVwQixHQUFBLENBQUlxQixjQUFBO0lBRXZCckIsR0FBQSxDQUFJZ0IsTUFBQSxDQUFPLFFBQVFqUCxHQUFBLEVBQUssV0FBVztJQUNuQyxJQUFJdVAsU0FBQSxHQUFZYixLQUFBLENBQU1jLEtBQUEsR0FBUWpKLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUWdGLFdBQUEsQ0FBWWYsS0FBQSxDQUFNeEQsTUFBQSxDQUFPLENBQUMsSUFBSTNFLElBQUEsQ0FBS3RGLEdBQUE7SUFDOUUsSUFBSTtNQUFFTyxTQUFBLEVBQVdrTyxPQUFBO01BQVNqTyxXQUFBLEVBQWFrTztJQUFPLElBQUlwSixJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtJQUN6RSxJQUFJUSxNQUFBLEdBQVNGLE9BQUEsSUFBVyxDQUFDSCxTQUFBLENBQVVwSCxRQUFBLENBQVN1SCxPQUFBLENBQVE5USxRQUFBLElBQVksSUFBSThRLE9BQUEsR0FBVUEsT0FBQSxDQUFRalIsVUFBVSxLQUMzRnlRLE9BQUEsSUFBV1EsT0FBQSxJQUFXUCxNQUFBLElBQVVRLE1BQUE7SUFFckMsSUFBSTtNQUNBMUIsR0FBQSxDQUFJNEIsUUFBQSxDQUFTbk8sVUFBQSxFQUFZQyxZQUFZO01BQ3JDLElBQUl1TixPQUFBLEtBQVlBLE9BQUEsSUFBV3hOLFVBQUEsSUFBY3lOLE1BQUEsSUFBVXhOLFlBQUEsS0FBaUJzTSxHQUFBLENBQUk2QixNQUFBLEVBQ3BFN0IsR0FBQSxDQUFJNkIsTUFBQSxDQUFPWixPQUFBLEVBQVNDLE1BQU07SUFDbEMsU0FDT25NLENBQUEsRUFBRyxDQUFFO0lBQ1osSUFBSXFNLFlBQUEsSUFBZ0IsTUFDaEJwQixHQUFBLENBQUlxQixjQUFBLEdBQWlCRCxZQUFBO0lBQ3pCLE9BQU9PLE1BQUE7RUFDWCxDQUFDO0FBQ0w7QUFDQSxJQUFJRyxXQUFBLEdBQWM7QUFDbEIsSUFBSUMsU0FBQSxHQUFZO0FBQ2hCLElBQUlDLFlBQUEsR0FBZTtBQUNuQixTQUFTQyxlQUFlM0osSUFBQSxFQUFNd0YsS0FBQSxFQUFPL0wsR0FBQSxFQUFLO0VBQ3RDLElBQUkrUCxXQUFBLElBQWVoRSxLQUFBLElBQVNpRSxTQUFBLElBQWFoUSxHQUFBLEVBQ3JDLE9BQU9pUSxZQUFBO0VBQ1hGLFdBQUEsR0FBY2hFLEtBQUE7RUFDZGlFLFNBQUEsR0FBWWhRLEdBQUE7RUFDWixPQUFPaVEsWUFBQSxHQUFlalEsR0FBQSxJQUFPLFFBQVFBLEdBQUEsSUFBTyxTQUN0Q2dPLHNCQUFBLENBQXVCekgsSUFBQSxFQUFNd0YsS0FBQSxFQUFPL0wsR0FBRyxJQUN2Q3lPLHdCQUFBLENBQXlCbEksSUFBQSxFQUFNd0YsS0FBQSxFQUFPL0wsR0FBRztBQUNuRDtBQWNBLElBQU1tUSxTQUFBLEdBQVk7RUFBR0MsV0FBQSxHQUFjO0VBQUdDLGFBQUEsR0FBZ0I7RUFBR0MsVUFBQSxHQUFhO0FBR3RFLElBQU1DLFFBQUEsR0FBTixNQUFlO0VBQ1hDLFlBQVk5UixNQUFBLEVBQVErUixRQUFBLEVBQVV4UCxHQUFBLEVBRzlCSSxVQUFBLEVBQVk7SUFDUixLQUFLM0MsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBSytSLFFBQUEsR0FBV0EsUUFBQTtJQUNoQixLQUFLeFAsR0FBQSxHQUFNQSxHQUFBO0lBQ1gsS0FBS0ksVUFBQSxHQUFhQSxVQUFBO0lBQ2xCLEtBQUtxUCxLQUFBLEdBQVFQLFNBQUE7SUFHYmxQLEdBQUEsQ0FBSVIsVUFBQSxHQUFhO0VBQ3JCO0VBQUE7RUFBQTtFQUdBa1EsY0FBY0MsTUFBQSxFQUFRO0lBQUUsT0FBTztFQUFPO0VBQ3RDQyxZQUFZQyxJQUFBLEVBQU07SUFBRSxPQUFPO0VBQU87RUFDbENDLFlBQVl6UyxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVztJQUFFLE9BQU87RUFBTztFQUN4REMsWUFBWTdRLFFBQUEsRUFBVTtJQUFFLE9BQU87RUFBTztFQUFBO0VBQUE7RUFBQTtFQUl0QzhRLFVBQUEsRUFBWTtJQUFFLE9BQU87RUFBTTtFQUFBO0VBQUE7RUFHM0JDLFVBQVVyUCxLQUFBLEVBQU87SUFBRSxPQUFPO0VBQU87RUFBQTtFQUVqQyxJQUFJa0ssS0FBQSxFQUFPO0lBQ1AsSUFBSUEsSUFBQSxHQUFPO0lBQ1gsU0FBU3JELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFDdENxRCxJQUFBLElBQVEsS0FBS3dFLFFBQUEsQ0FBUzdILENBQUMsRUFBRXFELElBQUE7SUFDN0IsT0FBT0EsSUFBQTtFQUNYO0VBQUE7RUFBQTtFQUdBLElBQUlHLE9BQUEsRUFBUztJQUFFLE9BQU87RUFBRztFQUN6QmlGLFFBQUEsRUFBVTtJQUNOLEtBQUszUyxNQUFBLEdBQVM7SUFDZCxJQUFJLEtBQUt1QyxHQUFBLENBQUlSLFVBQUEsSUFBYyxNQUN2QixLQUFLUSxHQUFBLENBQUlSLFVBQUEsR0FBYTtJQUMxQixTQUFTbUksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUN0QyxLQUFLNkgsUUFBQSxDQUFTN0gsQ0FBQyxFQUFFeUksT0FBQSxDQUFRO0VBQ2pDO0VBQ0FDLGVBQWUvUSxLQUFBLEVBQU87SUFDbEIsU0FBU3FJLENBQUEsR0FBSSxHQUFHaEcsR0FBQSxHQUFNLEtBQUt1SixVQUFBLEdBQWF2RCxDQUFBLElBQUs7TUFDekMsSUFBSXpILEdBQUEsR0FBTSxLQUFLc1AsUUFBQSxDQUFTN0gsQ0FBQztNQUN6QixJQUFJekgsR0FBQSxJQUFPWixLQUFBLEVBQ1AsT0FBT3FDLEdBQUE7TUFDWEEsR0FBQSxJQUFPekIsR0FBQSxDQUFJOEssSUFBQTtJQUNmO0VBQ0o7RUFDQSxJQUFJbEIsVUFBQSxFQUFZO0lBQ1osT0FBTyxLQUFLck0sTUFBQSxDQUFPNFMsY0FBQSxDQUFlLElBQUk7RUFDMUM7RUFDQSxJQUFJbkYsV0FBQSxFQUFhO0lBQ2IsT0FBTyxLQUFLek4sTUFBQSxHQUFTLEtBQUtBLE1BQUEsQ0FBTzRTLGNBQUEsQ0FBZSxJQUFJLElBQUksS0FBS2xGLE1BQUEsR0FBUztFQUMxRTtFQUNBLElBQUlwQixTQUFBLEVBQVc7SUFDWCxPQUFPLEtBQUtELFNBQUEsR0FBWSxLQUFLa0IsSUFBQTtFQUNqQztFQUNBLElBQUlzRixTQUFBLEVBQVc7SUFDWCxPQUFPLEtBQUtwRixVQUFBLEdBQWEsS0FBS0YsSUFBQSxHQUFPLElBQUksS0FBS0csTUFBQTtFQUNsRDtFQUNBb0YsZ0JBQWdCdlEsR0FBQSxFQUFLTCxNQUFBLEVBQVE0SixJQUFBLEVBQU07SUFHL0IsSUFBSSxLQUFLbkosVUFBQSxJQUFjLEtBQUtBLFVBQUEsQ0FBVzhHLFFBQUEsQ0FBU2xILEdBQUEsQ0FBSXJDLFFBQUEsSUFBWSxJQUFJcUMsR0FBQSxHQUFNQSxHQUFBLENBQUl4QyxVQUFVLEdBQUc7TUFDdkYsSUFBSStMLElBQUEsR0FBTyxHQUFHO1FBQ1YsSUFBSWlILFNBQUEsRUFBV3ZRLElBQUE7UUFDZixJQUFJRCxHQUFBLElBQU8sS0FBS0ksVUFBQSxFQUFZO1VBQ3hCb1EsU0FBQSxHQUFZeFEsR0FBQSxDQUFJVCxVQUFBLENBQVdJLE1BQUEsR0FBUyxDQUFDO1FBQ3pDLE9BQ0s7VUFDRCxPQUFPSyxHQUFBLENBQUl4QyxVQUFBLElBQWMsS0FBSzRDLFVBQUEsRUFDMUJKLEdBQUEsR0FBTUEsR0FBQSxDQUFJeEMsVUFBQTtVQUNkZ1QsU0FBQSxHQUFZeFEsR0FBQSxDQUFJekMsZUFBQTtRQUNwQjtRQUNBLE9BQU9pVCxTQUFBLElBQWEsR0FBR3ZRLElBQUEsR0FBT3VRLFNBQUEsQ0FBVWhSLFVBQUEsS0FBZVMsSUFBQSxDQUFLeEMsTUFBQSxJQUFVLE9BQ2xFK1MsU0FBQSxHQUFZQSxTQUFBLENBQVVqVCxlQUFBO1FBQzFCLE9BQU9pVCxTQUFBLEdBQVksS0FBS0gsY0FBQSxDQUFlcFEsSUFBSSxJQUFJQSxJQUFBLENBQUsrSyxJQUFBLEdBQU8sS0FBS0UsVUFBQTtNQUNwRSxPQUNLO1FBQ0QsSUFBSXVGLFFBQUEsRUFBVXhRLElBQUE7UUFDZCxJQUFJRCxHQUFBLElBQU8sS0FBS0ksVUFBQSxFQUFZO1VBQ3hCcVEsUUFBQSxHQUFXelEsR0FBQSxDQUFJVCxVQUFBLENBQVdJLE1BQU07UUFDcEMsT0FDSztVQUNELE9BQU9LLEdBQUEsQ0FBSXhDLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxFQUMxQkosR0FBQSxHQUFNQSxHQUFBLENBQUl4QyxVQUFBO1VBQ2RpVCxRQUFBLEdBQVd6USxHQUFBLENBQUk2SSxXQUFBO1FBQ25CO1FBQ0EsT0FBTzRILFFBQUEsSUFBWSxHQUFHeFEsSUFBQSxHQUFPd1EsUUFBQSxDQUFTalIsVUFBQSxLQUFlUyxJQUFBLENBQUt4QyxNQUFBLElBQVUsT0FDaEVnVCxRQUFBLEdBQVdBLFFBQUEsQ0FBUzVILFdBQUE7UUFDeEIsT0FBTzRILFFBQUEsR0FBVyxLQUFLSixjQUFBLENBQWVwUSxJQUFJLElBQUksS0FBS3FRLFFBQUE7TUFDdkQ7SUFDSjtJQUlBLElBQUl2USxLQUFBO0lBQ0osSUFBSUMsR0FBQSxJQUFPLEtBQUtBLEdBQUEsSUFBTyxLQUFLSSxVQUFBLEVBQVk7TUFDcENMLEtBQUEsR0FBUUosTUFBQSxHQUFTdkMsUUFBQSxDQUFTLEtBQUtnRCxVQUFVO0lBQzdDLFdBQ1MsS0FBS0EsVUFBQSxJQUFjLEtBQUtBLFVBQUEsSUFBYyxLQUFLSixHQUFBLElBQU8sS0FBS0EsR0FBQSxDQUFJa0gsUUFBQSxDQUFTLEtBQUs5RyxVQUFVLEdBQUc7TUFDM0ZMLEtBQUEsR0FBUUMsR0FBQSxDQUFJMFEsdUJBQUEsQ0FBd0IsS0FBS3RRLFVBQVUsSUFBSTtJQUMzRCxXQUNTLEtBQUtKLEdBQUEsQ0FBSTJJLFVBQUEsRUFBWTtNQUMxQixJQUFJaEosTUFBQSxJQUFVLEdBQ1YsU0FBU2dSLE1BQUEsR0FBUzNRLEdBQUEsR0FBTTJRLE1BQUEsR0FBU0EsTUFBQSxDQUFPblQsVUFBQSxFQUFZO1FBQ2hELElBQUltVCxNQUFBLElBQVUsS0FBSzNRLEdBQUEsRUFBSztVQUNwQkQsS0FBQSxHQUFRO1VBQ1I7UUFDSjtRQUNBLElBQUk0USxNQUFBLENBQU9wVCxlQUFBLEVBQ1A7TUFDUjtNQUNKLElBQUl3QyxLQUFBLElBQVMsUUFBUUosTUFBQSxJQUFVSyxHQUFBLENBQUlULFVBQUEsQ0FBV2pCLE1BQUEsRUFDMUMsU0FBU3FTLE1BQUEsR0FBUzNRLEdBQUEsR0FBTTJRLE1BQUEsR0FBU0EsTUFBQSxDQUFPblQsVUFBQSxFQUFZO1FBQ2hELElBQUltVCxNQUFBLElBQVUsS0FBSzNRLEdBQUEsRUFBSztVQUNwQkQsS0FBQSxHQUFRO1VBQ1I7UUFDSjtRQUNBLElBQUk0USxNQUFBLENBQU85SCxXQUFBLEVBQ1A7TUFDUjtJQUNSO0lBQ0EsUUFBUTlJLEtBQUEsSUFBUyxPQUFPd0osSUFBQSxHQUFPLElBQUl4SixLQUFBLElBQVMsS0FBS3VRLFFBQUEsR0FBVyxLQUFLcEYsVUFBQTtFQUNyRTtFQUNBckIsWUFBWTdKLEdBQUEsRUFBSzRRLFNBQUEsR0FBWSxPQUFPO0lBQ2hDLFNBQVN0RixLQUFBLEdBQVEsTUFBTXBMLEdBQUEsR0FBTUYsR0FBQSxFQUFLRSxHQUFBLEVBQUtBLEdBQUEsR0FBTUEsR0FBQSxDQUFJMUMsVUFBQSxFQUFZO01BQ3pELElBQUl5QyxJQUFBLEdBQU8sS0FBSzRRLE9BQUEsQ0FBUTNRLEdBQUc7UUFBRzRRLE9BQUE7TUFDOUIsSUFBSTdRLElBQUEsS0FBUyxDQUFDMlEsU0FBQSxJQUFhM1EsSUFBQSxDQUFLNUMsSUFBQSxHQUFPO1FBRW5DLElBQUlpTyxLQUFBLEtBQVV3RixPQUFBLEdBQVU3USxJQUFBLENBQUs2USxPQUFBLEtBQ3pCLEVBQUVBLE9BQUEsQ0FBUW5ULFFBQUEsSUFBWSxJQUFJbVQsT0FBQSxDQUFRNUosUUFBQSxDQUFTbEgsR0FBQSxDQUFJckMsUUFBQSxJQUFZLElBQUlxQyxHQUFBLEdBQU1BLEdBQUEsQ0FBSXhDLFVBQVUsSUFBSXNULE9BQUEsSUFBVzlRLEdBQUEsR0FDbEdzTCxLQUFBLEdBQVEsV0FFUixPQUFPckwsSUFBQTtNQUNmO0lBQ0o7RUFDSjtFQUNBNFEsUUFBUTdRLEdBQUEsRUFBSztJQUNULElBQUlDLElBQUEsR0FBT0QsR0FBQSxDQUFJUixVQUFBO0lBQ2YsU0FBU1UsR0FBQSxHQUFNRCxJQUFBLEVBQU1DLEdBQUEsRUFBS0EsR0FBQSxHQUFNQSxHQUFBLENBQUl6QyxNQUFBLEVBQ2hDLElBQUl5QyxHQUFBLElBQU8sTUFDUCxPQUFPRCxJQUFBO0VBQ25CO0VBQ0F3SixXQUFXekosR0FBQSxFQUFLTCxNQUFBLEVBQVE0SixJQUFBLEVBQU07SUFDMUIsU0FBU3dILElBQUEsR0FBTy9RLEdBQUEsRUFBSytRLElBQUEsRUFBTUEsSUFBQSxHQUFPQSxJQUFBLENBQUt2VCxVQUFBLEVBQVk7TUFDL0MsSUFBSXlDLElBQUEsR0FBTyxLQUFLNFEsT0FBQSxDQUFRRSxJQUFJO01BQzVCLElBQUk5USxJQUFBLEVBQ0EsT0FBT0EsSUFBQSxDQUFLc1EsZUFBQSxDQUFnQnZRLEdBQUEsRUFBS0wsTUFBQSxFQUFRNEosSUFBSTtJQUNyRDtJQUNBLE9BQU87RUFDWDtFQUFBO0VBQUE7RUFHQXlILE9BQU9yUCxHQUFBLEVBQUs7SUFDUixTQUFTZ0csQ0FBQSxHQUFJLEdBQUdoSSxNQUFBLEdBQVMsR0FBR2dJLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3ZELElBQUlySSxLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzdILENBQUM7UUFBR21HLEdBQUEsR0FBTW5PLE1BQUEsR0FBU0wsS0FBQSxDQUFNMEwsSUFBQTtNQUNuRCxJQUFJckwsTUFBQSxJQUFVZ0MsR0FBQSxJQUFPbU0sR0FBQSxJQUFPbk8sTUFBQSxFQUFRO1FBQ2hDLE9BQU8sQ0FBQ0wsS0FBQSxDQUFNNkwsTUFBQSxJQUFVN0wsS0FBQSxDQUFNa1EsUUFBQSxDQUFTbFIsTUFBQSxFQUFRO1VBQzNDLFNBQVMyUyxFQUFBLEdBQUksR0FBR0EsRUFBQSxHQUFJM1IsS0FBQSxDQUFNa1EsUUFBQSxDQUFTbFIsTUFBQSxFQUFRMlMsRUFBQSxJQUFLO1lBQzVDLElBQUlDLEtBQUEsR0FBUTVSLEtBQUEsQ0FBTWtRLFFBQUEsQ0FBU3lCLEVBQUM7WUFDNUIsSUFBSUMsS0FBQSxDQUFNbEcsSUFBQSxFQUFNO2NBQ1oxTCxLQUFBLEdBQVE0UixLQUFBO2NBQ1I7WUFDSjtVQUNKO1FBQ0o7UUFDQSxPQUFPNVIsS0FBQTtNQUNYO01BQ0EsSUFBSXFDLEdBQUEsR0FBTW1NLEdBQUEsRUFDTixPQUFPeE8sS0FBQSxDQUFNMFIsTUFBQSxDQUFPclAsR0FBQSxHQUFNaEMsTUFBQSxHQUFTTCxLQUFBLENBQU02TCxNQUFNO01BQ25EeEwsTUFBQSxHQUFTbU8sR0FBQTtJQUNiO0VBQ0o7RUFDQWhDLFdBQVduSyxHQUFBLEVBQUtrRCxJQUFBLEVBQU07SUFDbEIsSUFBSSxDQUFDLEtBQUt6RSxVQUFBLEVBQ04sT0FBTztNQUFFL0MsSUFBQSxFQUFNLEtBQUsyQyxHQUFBO01BQUtMLE1BQUEsRUFBUTtNQUFHa00sSUFBQSxFQUFNbEssR0FBQSxHQUFNO0lBQUU7SUFFdEQsSUFBSWdHLENBQUEsR0FBSTtNQUFHaEksTUFBQSxHQUFTO0lBQ3BCLFNBQVN3UixNQUFBLEdBQVMsR0FBR3hKLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ2hELElBQUlySSxLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzdILENBQUM7UUFBR21HLEdBQUEsR0FBTXFELE1BQUEsR0FBUzdSLEtBQUEsQ0FBTTBMLElBQUE7TUFDbkQsSUFBSThDLEdBQUEsR0FBTW5NLEdBQUEsSUFBT3JDLEtBQUEsWUFBaUI4UixvQkFBQSxFQUFzQjtRQUNwRHpSLE1BQUEsR0FBU2dDLEdBQUEsR0FBTXdQLE1BQUE7UUFDZjtNQUNKO01BQ0FBLE1BQUEsR0FBU3JELEdBQUE7SUFDYjtJQUVBLElBQUluTyxNQUFBLEVBQ0EsT0FBTyxLQUFLNlAsUUFBQSxDQUFTN0gsQ0FBQyxFQUFFbUUsVUFBQSxDQUFXbk0sTUFBQSxHQUFTLEtBQUs2UCxRQUFBLENBQVM3SCxDQUFDLEVBQUV3RCxNQUFBLEVBQVF0RyxJQUFJO0lBRTdFLFNBQVMrRixJQUFBLEVBQU1qRCxDQUFBLElBQUssRUFBRWlELElBQUEsR0FBTyxLQUFLNEUsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsR0FBR3FELElBQUEsSUFBUUosSUFBQSxZQUFnQnlHLGNBQUEsSUFBa0J6RyxJQUFBLENBQUsvRixJQUFBLElBQVEsR0FBRzhDLENBQUEsSUFBSyxDQUFFO0lBRXBILElBQUk5QyxJQUFBLElBQVEsR0FBRztNQUNYLElBQUkrRixJQUFBO1FBQU0wRyxLQUFBLEdBQVE7TUFDbEIsUUFBUTNKLENBQUEsSUFBSzJKLEtBQUEsR0FBUSxPQUFPO1FBQ3hCMUcsSUFBQSxHQUFPakQsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxJQUFJO1FBQ2xDLElBQUksQ0FBQ2lELElBQUEsSUFBUUEsSUFBQSxDQUFLNUssR0FBQSxDQUFJeEMsVUFBQSxJQUFjLEtBQUs0QyxVQUFBLEVBQ3JDO01BQ1I7TUFDQSxJQUFJd0ssSUFBQSxJQUFRL0YsSUFBQSxJQUFReU0sS0FBQSxJQUFTLENBQUMxRyxJQUFBLENBQUtPLE1BQUEsSUFBVSxDQUFDUCxJQUFBLENBQUsyRyxPQUFBLEVBQy9DLE9BQU8zRyxJQUFBLENBQUtrQixVQUFBLENBQVdsQixJQUFBLENBQUtJLElBQUEsRUFBTW5HLElBQUk7TUFDMUMsT0FBTztRQUFFeEgsSUFBQSxFQUFNLEtBQUsrQyxVQUFBO1FBQVlULE1BQUEsRUFBUWlMLElBQUEsR0FBT3hOLFFBQUEsQ0FBU3dOLElBQUEsQ0FBSzVLLEdBQUcsSUFBSSxJQUFJO01BQUU7SUFDOUUsT0FDSztNQUNELElBQUkySyxJQUFBO1FBQU0yRyxLQUFBLEdBQVE7TUFDbEIsUUFBUTNKLENBQUEsSUFBSzJKLEtBQUEsR0FBUSxPQUFPO1FBQ3hCM0csSUFBQSxHQUFPaEQsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEdBQVMsS0FBS2tSLFFBQUEsQ0FBUzdILENBQUMsSUFBSTtRQUNyRCxJQUFJLENBQUNnRCxJQUFBLElBQVFBLElBQUEsQ0FBSzNLLEdBQUEsQ0FBSXhDLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxFQUNyQztNQUNSO01BQ0EsSUFBSXVLLElBQUEsSUFBUTJHLEtBQUEsSUFBUyxDQUFDM0csSUFBQSxDQUFLUSxNQUFBLElBQVUsQ0FBQ1IsSUFBQSxDQUFLNEcsT0FBQSxFQUN2QyxPQUFPNUcsSUFBQSxDQUFLbUIsVUFBQSxDQUFXLEdBQUdqSCxJQUFJO01BQ2xDLE9BQU87UUFBRXhILElBQUEsRUFBTSxLQUFLK0MsVUFBQTtRQUFZVCxNQUFBLEVBQVFnTCxJQUFBLEdBQU92TixRQUFBLENBQVN1TixJQUFBLENBQUszSyxHQUFHLElBQUksS0FBS0ksVUFBQSxDQUFXYixVQUFBLENBQVdqQjtNQUFPO0lBQzFHO0VBQ0o7RUFBQTtFQUFBO0VBR0FrVCxXQUFXelQsSUFBQSxFQUFNQyxFQUFBLEVBQUl5VCxJQUFBLEdBQU8sR0FBRztJQUMzQixJQUFJLEtBQUtqQyxRQUFBLENBQVNsUixNQUFBLElBQVUsR0FDeEIsT0FBTztNQUFFakIsSUFBQSxFQUFNLEtBQUsrQyxVQUFBO01BQVlyQyxJQUFBO01BQU1DLEVBQUE7TUFBSTBULFVBQUEsRUFBWTtNQUFHQyxRQUFBLEVBQVUsS0FBS3ZSLFVBQUEsQ0FBV2IsVUFBQSxDQUFXakI7SUFBTztJQUN6RyxJQUFJb1QsVUFBQSxHQUFhO01BQUlDLFFBQUEsR0FBVztJQUNoQyxTQUFTaFMsTUFBQSxHQUFTOFIsSUFBQSxFQUFNOUosQ0FBQSxHQUFJLElBQUlBLENBQUEsSUFBSztNQUNqQyxJQUFJckksS0FBQSxHQUFRLEtBQUtrUSxRQUFBLENBQVM3SCxDQUFDO1FBQUdtRyxHQUFBLEdBQU1uTyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTBMLElBQUE7TUFDbkQsSUFBSTBHLFVBQUEsSUFBYyxNQUFNM1QsSUFBQSxJQUFRK1AsR0FBQSxFQUFLO1FBQ2pDLElBQUk4RCxTQUFBLEdBQVlqUyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTZMLE1BQUE7UUFFL0IsSUFBSXBOLElBQUEsSUFBUTZULFNBQUEsSUFBYTVULEVBQUEsSUFBTThQLEdBQUEsR0FBTXhPLEtBQUEsQ0FBTTZMLE1BQUEsSUFBVTdMLEtBQUEsQ0FBTWpDLElBQUEsSUFDdkRpQyxLQUFBLENBQU1jLFVBQUEsSUFBYyxLQUFLQSxVQUFBLENBQVc4RyxRQUFBLENBQVM1SCxLQUFBLENBQU1jLFVBQVUsR0FDN0QsT0FBT2QsS0FBQSxDQUFNa1MsVUFBQSxDQUFXelQsSUFBQSxFQUFNQyxFQUFBLEVBQUk0VCxTQUFTO1FBQy9DN1QsSUFBQSxHQUFPNEIsTUFBQTtRQUNQLFNBQVMySyxDQUFBLEdBQUkzQyxDQUFBLEVBQUcyQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxJQUFLO1VBQ3hCLElBQUlNLElBQUEsR0FBTyxLQUFLNEUsUUFBQSxDQUFTbEYsQ0FBQSxHQUFJLENBQUM7VUFDOUIsSUFBSU0sSUFBQSxDQUFLSSxJQUFBLElBQVFKLElBQUEsQ0FBSzVLLEdBQUEsQ0FBSXhDLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxJQUFjLENBQUN3SyxJQUFBLENBQUtpSCxZQUFBLENBQWEsQ0FBQyxHQUFHO1lBQzlFSCxVQUFBLEdBQWF0VSxRQUFBLENBQVN3TixJQUFBLENBQUs1SyxHQUFHLElBQUk7WUFDbEM7VUFDSjtVQUNBakMsSUFBQSxJQUFRNk0sSUFBQSxDQUFLSSxJQUFBO1FBQ2pCO1FBQ0EsSUFBSTBHLFVBQUEsSUFBYyxJQUNkQSxVQUFBLEdBQWE7TUFDckI7TUFDQSxJQUFJQSxVQUFBLEdBQWEsT0FBTzVELEdBQUEsR0FBTTlQLEVBQUEsSUFBTTJKLENBQUEsSUFBSyxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLElBQUk7UUFDaEVOLEVBQUEsR0FBSzhQLEdBQUE7UUFDTCxTQUFTeEQsQ0FBQSxHQUFJM0MsQ0FBQSxHQUFJLEdBQUcyQyxDQUFBLEdBQUksS0FBS2tGLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUWdNLENBQUEsSUFBSztVQUMvQyxJQUFJSyxJQUFBLEdBQU8sS0FBSzZFLFFBQUEsQ0FBU2xGLENBQUM7VUFDMUIsSUFBSUssSUFBQSxDQUFLSyxJQUFBLElBQVFMLElBQUEsQ0FBSzNLLEdBQUEsQ0FBSXhDLFVBQUEsSUFBYyxLQUFLNEMsVUFBQSxJQUFjLENBQUN1SyxJQUFBLENBQUtrSCxZQUFBLENBQWEsRUFBRSxHQUFHO1lBQy9FRixRQUFBLEdBQVd2VSxRQUFBLENBQVN1TixJQUFBLENBQUszSyxHQUFHO1lBQzVCO1VBQ0o7VUFDQWhDLEVBQUEsSUFBTTJNLElBQUEsQ0FBS0ssSUFBQTtRQUNmO1FBQ0EsSUFBSTJHLFFBQUEsSUFBWSxJQUNaQSxRQUFBLEdBQVcsS0FBS3ZSLFVBQUEsQ0FBV2IsVUFBQSxDQUFXakIsTUFBQTtRQUMxQztNQUNKO01BQ0FxQixNQUFBLEdBQVNtTyxHQUFBO0lBQ2I7SUFDQSxPQUFPO01BQUV6USxJQUFBLEVBQU0sS0FBSytDLFVBQUE7TUFBWXJDLElBQUE7TUFBTUMsRUFBQTtNQUFJMFQsVUFBQTtNQUFZQztJQUFTO0VBQ25FO0VBQ0FFLGFBQWFoTixJQUFBLEVBQU07SUFDZixJQUFJLEtBQUtzRyxNQUFBLElBQVUsQ0FBQyxLQUFLL0ssVUFBQSxJQUFjLENBQUMsS0FBS29QLFFBQUEsQ0FBU2xSLE1BQUEsRUFDbEQsT0FBTztJQUNYLElBQUlnQixLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzNLLElBQUEsR0FBTyxJQUFJLElBQUksS0FBSzJLLFFBQUEsQ0FBU2xSLE1BQUEsR0FBUyxDQUFDO0lBQ2pFLE9BQU9nQixLQUFBLENBQU0wTCxJQUFBLElBQVEsS0FBSzFMLEtBQUEsQ0FBTXVTLFlBQUEsQ0FBYWhOLElBQUk7RUFDckQ7RUFDQTJKLFlBQVk3TSxHQUFBLEVBQUs7SUFDYixJQUFJO01BQUV0RSxJQUFBO01BQU1zQztJQUFPLElBQUksS0FBS21NLFVBQUEsQ0FBV25LLEdBQUEsRUFBSyxDQUFDO0lBQzdDLElBQUl0RSxJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLZ0MsTUFBQSxJQUFVdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQSxFQUNoRCxNQUFNLElBQUl3VCxVQUFBLENBQVcsdUJBQXVCblEsR0FBRztJQUNuRCxPQUFPdEUsSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFNO0VBQ2pDO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQU1Bb1MsYUFBYUMsTUFBQSxFQUFRQyxJQUFBLEVBQU0zTSxJQUFBLEVBQU00TSxLQUFBLEdBQVEsT0FBTztJQUU1QyxJQUFJblUsSUFBQSxHQUFPOEQsSUFBQSxDQUFLQyxHQUFBLENBQUlrUSxNQUFBLEVBQVFDLElBQUk7TUFBR2pVLEVBQUEsR0FBSzZELElBQUEsQ0FBSytFLEdBQUEsQ0FBSW9MLE1BQUEsRUFBUUMsSUFBSTtJQUM3RCxTQUFTdEssQ0FBQSxHQUFJLEdBQUdoSSxNQUFBLEdBQVMsR0FBR2dJLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3ZELElBQUlySSxLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzdILENBQUM7UUFBR21HLEdBQUEsR0FBTW5PLE1BQUEsR0FBU0wsS0FBQSxDQUFNMEwsSUFBQTtNQUNuRCxJQUFJak4sSUFBQSxHQUFPNEIsTUFBQSxJQUFVM0IsRUFBQSxHQUFLOFAsR0FBQSxFQUN0QixPQUFPeE8sS0FBQSxDQUFNeVMsWUFBQSxDQUFhQyxNQUFBLEdBQVNyUyxNQUFBLEdBQVNMLEtBQUEsQ0FBTTZMLE1BQUEsRUFBUThHLElBQUEsR0FBT3RTLE1BQUEsR0FBU0wsS0FBQSxDQUFNNkwsTUFBQSxFQUFRN0YsSUFBQSxFQUFNNE0sS0FBSztNQUN2R3ZTLE1BQUEsR0FBU21PLEdBQUE7SUFDYjtJQUNBLElBQUlxRSxTQUFBLEdBQVksS0FBS3JHLFVBQUEsQ0FBV2tHLE1BQUEsRUFBUUEsTUFBQSxHQUFTLEtBQUssQ0FBQztJQUN2RCxJQUFJSSxPQUFBLEdBQVVILElBQUEsSUFBUUQsTUFBQSxHQUFTRyxTQUFBLEdBQVksS0FBS3JHLFVBQUEsQ0FBV21HLElBQUEsRUFBTUEsSUFBQSxHQUFPLEtBQUssQ0FBQztJQUM5RSxJQUFJM1IsTUFBQSxHQUFTZ0YsSUFBQSxDQUFLMEIsSUFBQSxDQUFLcUwsWUFBQSxDQUFhO0lBQ3BDLElBQUlDLFFBQUEsR0FBV2hOLElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0lBQ3RDLElBQUlvRSxRQUFBLEdBQVc7SUFLZixLQUFLeFAsS0FBQSxJQUFTSSxNQUFBLEtBQVc2TyxNQUFBLElBQVVDLElBQUEsRUFBTTtNQUNyQyxJQUFJO1FBQUU1VSxJQUFBO1FBQU1zQztNQUFPLElBQUl3UyxTQUFBO01BQ3ZCLElBQUk5VSxJQUFBLENBQUtNLFFBQUEsSUFBWSxHQUFHO1FBQ3BCNFUsUUFBQSxHQUFXLENBQUMsRUFBRTVTLE1BQUEsSUFBVXRDLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVXNCLE1BQUEsR0FBUyxDQUFDLEtBQUs7UUFFdEQsSUFBSTRTLFFBQUEsSUFBWTVTLE1BQUEsSUFBVXRDLElBQUEsQ0FBS2dCLFNBQUEsQ0FBVUMsTUFBQSxFQUFRO1VBQzdDLFNBQVN5UyxJQUFBLEdBQU8xVCxJQUFBLEVBQU1tUCxLQUFBLEVBQU91RSxJQUFBLEVBQU1BLElBQUEsR0FBT0EsSUFBQSxDQUFLdlQsVUFBQSxFQUFZO1lBQ3ZELElBQUlnUCxLQUFBLEdBQVF1RSxJQUFBLENBQUtsSSxXQUFBLEVBQWE7Y0FDMUIsSUFBSTJELEtBQUEsQ0FBTXBOLFFBQUEsSUFBWSxNQUNsQitTLFNBQUEsR0FBWUMsT0FBQSxHQUFVO2dCQUFFL1UsSUFBQSxFQUFNbVAsS0FBQSxDQUFNaFAsVUFBQTtnQkFBWW1DLE1BQUEsRUFBUXZDLFFBQUEsQ0FBU29QLEtBQUssSUFBSTtjQUFFO2NBQ2hGO1lBQ0o7WUFDQSxJQUFJdk0sSUFBQSxHQUFPOFEsSUFBQSxDQUFLdlIsVUFBQTtZQUNoQixJQUFJUyxJQUFBLElBQVFBLElBQUEsQ0FBSzVDLElBQUEsSUFBUTRDLElBQUEsQ0FBSzVDLElBQUEsQ0FBSzhDLE9BQUEsRUFDL0I7VUFDUjtRQUNKO01BQ0osT0FDSztRQUNELElBQUl5SyxJQUFBLEdBQU92TixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQUEsR0FBUyxDQUFDO1FBQ3JDNFMsUUFBQSxHQUFXM0gsSUFBQSxLQUFTQSxJQUFBLENBQUt4TCxRQUFBLElBQVksUUFBUXdMLElBQUEsQ0FBS3ZMLGVBQUEsSUFBbUI7TUFDekU7SUFDSjtJQUdBLElBQUkwRCxLQUFBLElBQVN1UCxRQUFBLENBQVMvUixTQUFBLElBQWErUixRQUFBLENBQVMvUixTQUFBLElBQWE2UixPQUFBLENBQVEvVSxJQUFBLElBQVFpVixRQUFBLENBQVMvUixTQUFBLENBQVU1QyxRQUFBLElBQVksR0FBRztNQUN2RyxJQUFJNk8sS0FBQSxHQUFROEYsUUFBQSxDQUFTL1IsU0FBQSxDQUFVaEIsVUFBQSxDQUFXK1MsUUFBQSxDQUFTOVIsV0FBVztNQUM5RCxJQUFJZ00sS0FBQSxJQUFTQSxLQUFBLENBQU1uTixlQUFBLElBQW1CLFNBQ2xDNlMsS0FBQSxHQUFRO0lBQ2hCO0lBQ0EsSUFBSSxFQUFFQSxLQUFBLElBQVNLLFFBQUEsSUFBWXBQLE1BQUEsS0FDdkIxRSxvQkFBQSxDQUFxQjBULFNBQUEsQ0FBVTlVLElBQUEsRUFBTThVLFNBQUEsQ0FBVXhTLE1BQUEsRUFBUTJTLFFBQUEsQ0FBUzdSLFVBQUEsRUFBWTZSLFFBQUEsQ0FBUzVSLFlBQVksS0FDakdqQyxvQkFBQSxDQUFxQjJULE9BQUEsQ0FBUS9VLElBQUEsRUFBTStVLE9BQUEsQ0FBUXpTLE1BQUEsRUFBUTJTLFFBQUEsQ0FBUy9SLFNBQUEsRUFBVytSLFFBQUEsQ0FBUzlSLFdBQVcsR0FDM0Y7SUFJSixJQUFJZ1MsY0FBQSxHQUFpQjtJQUNyQixLQUFLbFMsTUFBQSxDQUFPdU8sTUFBQSxJQUFVbUQsTUFBQSxJQUFVQyxJQUFBLEtBQVMsQ0FBQ00sUUFBQSxFQUFVO01BQ2hEalMsTUFBQSxDQUFPc08sUUFBQSxDQUFTdUQsU0FBQSxDQUFVOVUsSUFBQSxFQUFNOFUsU0FBQSxDQUFVeFMsTUFBTTtNQUNoRCxJQUFJO1FBQ0EsSUFBSXFTLE1BQUEsSUFBVUMsSUFBQSxFQUNWM1IsTUFBQSxDQUFPdU8sTUFBQSxDQUFPdUQsT0FBQSxDQUFRL1UsSUFBQSxFQUFNK1UsT0FBQSxDQUFRelMsTUFBTTtRQUM5QzZTLGNBQUEsR0FBaUI7TUFDckIsU0FDT3pRLENBQUEsRUFBRyxDQU9WO0lBQ0o7SUFDQSxJQUFJLENBQUN5USxjQUFBLEVBQWdCO01BQ2pCLElBQUlSLE1BQUEsR0FBU0MsSUFBQSxFQUFNO1FBQ2YsSUFBSVEsR0FBQSxHQUFNTixTQUFBO1FBQ1ZBLFNBQUEsR0FBWUMsT0FBQTtRQUNaQSxPQUFBLEdBQVVLLEdBQUE7TUFDZDtNQUNBLElBQUl4VSxLQUFBLEdBQVFDLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO01BQ2pDRixLQUFBLENBQU1HLE1BQUEsQ0FBT2dVLE9BQUEsQ0FBUS9VLElBQUEsRUFBTStVLE9BQUEsQ0FBUXpTLE1BQU07TUFDekMxQixLQUFBLENBQU1NLFFBQUEsQ0FBUzRULFNBQUEsQ0FBVTlVLElBQUEsRUFBTThVLFNBQUEsQ0FBVXhTLE1BQU07TUFDL0NXLE1BQUEsQ0FBT29TLGVBQUEsQ0FBZ0I7TUFDdkJwUyxNQUFBLENBQU9xUyxRQUFBLENBQVMxVSxLQUFLO0lBQ3pCO0VBQ0o7RUFDQTJVLGVBQWVDLFFBQUEsRUFBVTtJQUNyQixPQUFPLENBQUMsS0FBS3pTLFVBQUEsSUFBY3lTLFFBQUEsQ0FBU0MsSUFBQSxJQUFRO0VBQ2hEO0VBQ0EsSUFBSUMsWUFBQSxFQUFjO0lBQ2QsT0FBTyxLQUFLM1MsVUFBQSxJQUFjLEtBQUtBLFVBQUEsSUFBYyxLQUFLSixHQUFBLElBQU8sQ0FBQyxLQUFLQSxHQUFBLENBQUlrSCxRQUFBLENBQVMsS0FBSzlHLFVBQVU7RUFDL0Y7RUFBQTtFQUFBO0VBR0E0UyxVQUFValYsSUFBQSxFQUFNQyxFQUFBLEVBQUk7SUFDaEIsU0FBUzJCLE1BQUEsR0FBUyxHQUFHZ0ksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3ZELElBQUlySSxLQUFBLEdBQVEsS0FBS2tRLFFBQUEsQ0FBUzdILENBQUM7UUFBR21HLEdBQUEsR0FBTW5PLE1BQUEsR0FBU0wsS0FBQSxDQUFNMEwsSUFBQTtNQUNuRCxJQUFJckwsTUFBQSxJQUFVbU8sR0FBQSxHQUFNL1AsSUFBQSxJQUFRK1AsR0FBQSxJQUFPOVAsRUFBQSxJQUFNMkIsTUFBQSxHQUFTNUIsSUFBQSxHQUFPK1AsR0FBQSxJQUFPOVAsRUFBQSxHQUFLMkIsTUFBQSxFQUFRO1FBQ3pFLElBQUlzVCxXQUFBLEdBQWN0VCxNQUFBLEdBQVNMLEtBQUEsQ0FBTTZMLE1BQUE7VUFBUStILFNBQUEsR0FBWXBGLEdBQUEsR0FBTXhPLEtBQUEsQ0FBTTZMLE1BQUE7UUFDakUsSUFBSXBOLElBQUEsSUFBUWtWLFdBQUEsSUFBZWpWLEVBQUEsSUFBTWtWLFNBQUEsRUFBVztVQUN4QyxLQUFLekQsS0FBQSxHQUFRMVIsSUFBQSxJQUFRNEIsTUFBQSxJQUFVM0IsRUFBQSxJQUFNOFAsR0FBQSxHQUFNc0IsYUFBQSxHQUFnQkQsV0FBQTtVQUMzRCxJQUFJcFIsSUFBQSxJQUFRa1YsV0FBQSxJQUFlalYsRUFBQSxJQUFNa1YsU0FBQSxLQUM1QjVULEtBQUEsQ0FBTXlULFdBQUEsSUFBZXpULEtBQUEsQ0FBTVUsR0FBQSxDQUFJeEMsVUFBQSxJQUFjLEtBQUs0QyxVQUFBLEdBQ25EZCxLQUFBLENBQU1tUSxLQUFBLEdBQVFKLFVBQUEsTUFFZC9QLEtBQUEsQ0FBTTBULFNBQUEsQ0FBVWpWLElBQUEsR0FBT2tWLFdBQUEsRUFBYWpWLEVBQUEsR0FBS2lWLFdBQVc7VUFDeEQ7UUFDSixPQUNLO1VBQ0QzVCxLQUFBLENBQU1tUSxLQUFBLEdBQVFuUSxLQUFBLENBQU1VLEdBQUEsSUFBT1YsS0FBQSxDQUFNYyxVQUFBLElBQWNkLEtBQUEsQ0FBTVUsR0FBQSxDQUFJeEMsVUFBQSxJQUFjLEtBQUs0QyxVQUFBLElBQWMsQ0FBQ2QsS0FBQSxDQUFNa1EsUUFBQSxDQUFTbFIsTUFBQSxHQUNwRzhRLGFBQUEsR0FBZ0JDLFVBQUE7UUFDMUI7TUFDSjtNQUNBMVAsTUFBQSxHQUFTbU8sR0FBQTtJQUNiO0lBQ0EsS0FBSzJCLEtBQUEsR0FBUUwsYUFBQTtFQUNqQjtFQUNBK0QsaUJBQUEsRUFBbUI7SUFDZixJQUFJQyxLQUFBLEdBQVE7SUFDWixTQUFTL1YsSUFBQSxHQUFPLEtBQUtJLE1BQUEsRUFBUUosSUFBQSxFQUFNQSxJQUFBLEdBQU9BLElBQUEsQ0FBS0ksTUFBQSxFQUFRMlYsS0FBQSxJQUFTO01BQzVELElBQUkzRCxLQUFBLEdBQVEyRCxLQUFBLElBQVMsSUFBSWhFLGFBQUEsR0FBZ0JELFdBQUE7TUFDekMsSUFBSTlSLElBQUEsQ0FBS29TLEtBQUEsR0FBUUEsS0FBQSxFQUNicFMsSUFBQSxDQUFLb1MsS0FBQSxHQUFRQSxLQUFBO0lBQ3JCO0VBQ0o7RUFDQSxJQUFJOEIsUUFBQSxFQUFVO0lBQUUsT0FBTztFQUFPO0VBQzlCLElBQUk5RSxnQkFBQSxFQUFrQjtJQUFFLE9BQU87RUFBTztFQUN0QyxJQUFJaE4sbUJBQUEsRUFBcUI7SUFBRSxPQUFPO0VBQU87RUFDekN1SyxPQUFPcUosSUFBQSxFQUFNO0lBQUUsT0FBTztFQUFPO0FBQ2pDO0FBR0EsSUFBTWhDLGNBQUEsR0FBTixjQUE2Qi9CLFFBQUEsQ0FBUztFQUNsQ0MsWUFBWTlSLE1BQUEsRUFBUWtTLE1BQUEsRUFBUXJLLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUNuQyxJQUFJMlIsSUFBQTtNQUFNdFQsR0FBQSxHQUFNMlAsTUFBQSxDQUFPbUQsSUFBQSxDQUFLUyxLQUFBO0lBQzVCLElBQUksT0FBT3ZULEdBQUEsSUFBTyxZQUNkQSxHQUFBLEdBQU1BLEdBQUEsQ0FBSXNGLElBQUEsRUFBTSxNQUFNO01BQ2xCLElBQUksQ0FBQ2dPLElBQUEsRUFDRCxPQUFPM1IsR0FBQTtNQUNYLElBQUkyUixJQUFBLENBQUs3VixNQUFBLEVBQ0wsT0FBTzZWLElBQUEsQ0FBSzdWLE1BQUEsQ0FBTzRTLGNBQUEsQ0FBZWlELElBQUk7SUFDOUMsQ0FBQztJQUNMLElBQUksQ0FBQzNELE1BQUEsQ0FBT21ELElBQUEsQ0FBS1UsSUFBQSxDQUFLQyxHQUFBLEVBQUs7TUFDdkIsSUFBSXpULEdBQUEsQ0FBSXJDLFFBQUEsSUFBWSxHQUFHO1FBQ25CLElBQUkrVixJQUFBLEdBQU94VixRQUFBLENBQVN5VixhQUFBLENBQWMsTUFBTTtRQUN4Q0QsSUFBQSxDQUFLRSxXQUFBLENBQVk1VCxHQUFHO1FBQ3BCQSxHQUFBLEdBQU0wVCxJQUFBO01BQ1Y7TUFDQTFULEdBQUEsQ0FBSVgsZUFBQSxHQUFrQjtNQUN0QlcsR0FBQSxDQUFJNlQsU0FBQSxDQUFVQyxHQUFBLENBQUksb0JBQW9CO0lBQzFDO0lBQ0EsTUFBTXJXLE1BQUEsRUFBUSxFQUFDLEVBQUd1QyxHQUFBLEVBQUssSUFBSTtJQUMzQixLQUFLMlAsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0EsTUFBQSxHQUFTQSxNQUFBO0lBQ2QyRCxJQUFBLEdBQU87RUFDWDtFQUNBNUQsY0FBY0MsTUFBQSxFQUFRO0lBQ2xCLE9BQU8sS0FBS0YsS0FBQSxJQUFTUCxTQUFBLElBQWFTLE1BQUEsQ0FBT21ELElBQUEsQ0FBS2lCLEVBQUEsQ0FBRyxLQUFLcEUsTUFBQSxDQUFPbUQsSUFBSTtFQUNyRTtFQUNBNUMsVUFBQSxFQUFZO0lBQUUsT0FBTztNQUFFOEQsTUFBQSxFQUFRO0lBQUs7RUFBRztFQUN2QzdELFVBQVVyUCxLQUFBLEVBQU87SUFDYixJQUFJbVQsSUFBQSxHQUFPLEtBQUt0RSxNQUFBLENBQU82RCxJQUFBLENBQUtyRCxTQUFBO0lBQzVCLE9BQU84RCxJQUFBLEdBQU9BLElBQUEsQ0FBS25ULEtBQUssSUFBSTtFQUNoQztFQUNBOFIsZUFBZUMsUUFBQSxFQUFVO0lBQ3JCLE9BQU9BLFFBQUEsQ0FBU0MsSUFBQSxJQUFRLGVBQWUsS0FBS25ELE1BQUEsQ0FBTzZELElBQUEsQ0FBS1UsZUFBQTtFQUM1RDtFQUNBOUQsUUFBQSxFQUFVO0lBQ04sS0FBS1QsTUFBQSxDQUFPbUQsSUFBQSxDQUFLMUMsT0FBQSxDQUFRLEtBQUtwUSxHQUFHO0lBQ2pDLE1BQU1vUSxPQUFBLENBQVE7RUFDbEI7RUFDQSxJQUFJbUIsUUFBQSxFQUFVO0lBQUUsT0FBTztFQUFNO0VBQzdCLElBQUk5UixtQkFBQSxFQUFxQjtJQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUtrUSxNQUFBLENBQU9tRCxJQUFBLENBQUtVLElBQUEsQ0FBS1csV0FBQTtFQUFhO0VBQ3ZFLElBQUl0UCxLQUFBLEVBQU87SUFBRSxPQUFPLEtBQUs4SyxNQUFBLENBQU9tRCxJQUFBLENBQUtqTyxJQUFBO0VBQU07QUFDL0M7QUFDQSxJQUFNdVAsbUJBQUEsR0FBTixjQUFrQzlFLFFBQUEsQ0FBUztFQUN2Q0MsWUFBWTlSLE1BQUEsRUFBUXVDLEdBQUEsRUFBS3FVLE9BQUEsRUFBU2hCLElBQUEsRUFBTTtJQUNwQyxNQUFNNVYsTUFBQSxFQUFRLEVBQUMsRUFBR3VDLEdBQUEsRUFBSyxJQUFJO0lBQzNCLEtBQUtxVSxPQUFBLEdBQVVBLE9BQUE7SUFDZixLQUFLaEIsSUFBQSxHQUFPQSxJQUFBO0VBQ2hCO0VBQ0EsSUFBSXJJLEtBQUEsRUFBTztJQUFFLE9BQU8sS0FBS3FJLElBQUEsQ0FBSy9VLE1BQUE7RUFBUTtFQUN0Q2lTLGdCQUFnQnZRLEdBQUEsRUFBS0wsTUFBQSxFQUFRO0lBQ3pCLElBQUlLLEdBQUEsSUFBTyxLQUFLcVUsT0FBQSxFQUNaLE9BQU8sS0FBS25KLFVBQUEsSUFBY3ZMLE1BQUEsR0FBUyxLQUFLcUwsSUFBQSxHQUFPO0lBQ25ELE9BQU8sS0FBS0UsVUFBQSxHQUFhdkwsTUFBQTtFQUM3QjtFQUNBbU0sV0FBV25LLEdBQUEsRUFBSztJQUNaLE9BQU87TUFBRXRFLElBQUEsRUFBTSxLQUFLZ1gsT0FBQTtNQUFTMVUsTUFBQSxFQUFRZ0M7SUFBSTtFQUM3QztFQUNBaVIsZUFBZTBCLEdBQUEsRUFBSztJQUNoQixPQUFPQSxHQUFBLENBQUl4QixJQUFBLEtBQVMsbUJBQW1Cd0IsR0FBQSxDQUFJakosTUFBQSxDQUFPaE4sU0FBQSxJQUFhaVcsR0FBQSxDQUFJQyxRQUFBO0VBQ3ZFO0FBQ0o7QUFNQSxJQUFNQyxZQUFBLEdBQU4sTUFBTUMsYUFBQSxTQUFxQm5GLFFBQUEsQ0FBUztFQUNoQ0MsWUFBWTlSLE1BQUEsRUFBUW9TLElBQUEsRUFBTTdQLEdBQUEsRUFBS0ksVUFBQSxFQUFZb1QsSUFBQSxFQUFNO0lBQzdDLE1BQU0vVixNQUFBLEVBQVEsRUFBQyxFQUFHdUMsR0FBQSxFQUFLSSxVQUFVO0lBQ2pDLEtBQUt5UCxJQUFBLEdBQU9BLElBQUE7SUFDWixLQUFLMkQsSUFBQSxHQUFPQSxJQUFBO0VBQ2hCO0VBQ0EsT0FBT2tCLE9BQU9qWCxNQUFBLEVBQVFvUyxJQUFBLEVBQU04RSxNQUFBLEVBQVFyUCxJQUFBLEVBQU07SUFDdEMsSUFBSXNQLE1BQUEsR0FBU3RQLElBQUEsQ0FBS3VQLFNBQUEsQ0FBVWhGLElBQUEsQ0FBS2lELElBQUEsQ0FBS2dDLElBQUk7SUFDMUMsSUFBSXRCLElBQUEsR0FBT29CLE1BQUEsSUFBVUEsTUFBQSxDQUFPL0UsSUFBQSxFQUFNdkssSUFBQSxFQUFNcVAsTUFBTTtJQUM5QyxJQUFJLENBQUNuQixJQUFBLElBQVEsQ0FBQ0EsSUFBQSxDQUFLeFQsR0FBQSxFQUNmd1QsSUFBQSxHQUFPdFcsd0JBQUEsQ0FBQTZYLGFBQUEsQ0FBY0MsVUFBQSxDQUFXOVcsUUFBQSxFQUFVMlIsSUFBQSxDQUFLaUQsSUFBQSxDQUFLVSxJQUFBLENBQUtELEtBQUEsQ0FBTTFELElBQUEsRUFBTThFLE1BQU0sR0FBRyxNQUFNOUUsSUFBQSxDQUFLb0YsS0FBSztJQUNsRyxPQUFPLElBQUlSLGFBQUEsQ0FBYWhYLE1BQUEsRUFBUW9TLElBQUEsRUFBTTJELElBQUEsQ0FBS3hULEdBQUEsRUFBS3dULElBQUEsQ0FBS3BULFVBQUEsSUFBY29ULElBQUEsQ0FBS3hULEdBQUEsRUFBS3dULElBQUk7RUFDckY7RUFDQXRELFVBQUEsRUFBWTtJQUNSLElBQUssS0FBS1QsS0FBQSxHQUFRSixVQUFBLElBQWUsS0FBS1EsSUFBQSxDQUFLaUQsSUFBQSxDQUFLVSxJQUFBLENBQUswQixhQUFBLEVBQ2pELE9BQU87SUFDWCxPQUFPO01BQUVyRixJQUFBLEVBQU0sS0FBS0EsSUFBQSxDQUFLaUQsSUFBQSxDQUFLZ0MsSUFBQTtNQUFNRyxLQUFBLEVBQU8sS0FBS3BGLElBQUEsQ0FBS29GLEtBQUE7TUFBT0UsY0FBQSxFQUFnQixLQUFLL1U7SUFBVztFQUNoRztFQUNBd1AsWUFBWUMsSUFBQSxFQUFNO0lBQUUsT0FBTyxLQUFLSixLQUFBLElBQVNKLFVBQUEsSUFBYyxLQUFLUSxJQUFBLENBQUtrRSxFQUFBLENBQUdsRSxJQUFJO0VBQUc7RUFDM0VtRCxVQUFValYsSUFBQSxFQUFNQyxFQUFBLEVBQUk7SUFDaEIsTUFBTWdWLFNBQUEsQ0FBVWpWLElBQUEsRUFBTUMsRUFBRTtJQUV4QixJQUFJLEtBQUt5UixLQUFBLElBQVNQLFNBQUEsRUFBVztNQUN6QixJQUFJelIsTUFBQSxHQUFTLEtBQUtBLE1BQUE7TUFDbEIsT0FBTyxDQUFDQSxNQUFBLENBQU9KLElBQUEsRUFDWEksTUFBQSxHQUFTQSxNQUFBLENBQU9BLE1BQUE7TUFDcEIsSUFBSUEsTUFBQSxDQUFPZ1MsS0FBQSxHQUFRLEtBQUtBLEtBQUEsRUFDcEJoUyxNQUFBLENBQU9nUyxLQUFBLEdBQVEsS0FBS0EsS0FBQTtNQUN4QixLQUFLQSxLQUFBLEdBQVFQLFNBQUE7SUFDakI7RUFDSjtFQUNBa0csTUFBTXJYLElBQUEsRUFBTUMsRUFBQSxFQUFJc0gsSUFBQSxFQUFNO0lBQ2xCLElBQUkrUCxJQUFBLEdBQU9aLGFBQUEsQ0FBYUMsTUFBQSxDQUFPLEtBQUtqWCxNQUFBLEVBQVEsS0FBS29TLElBQUEsRUFBTSxNQUFNdkssSUFBSTtJQUNqRSxJQUFJZ1EsS0FBQSxHQUFRLEtBQUs5RixRQUFBO01BQVV4RSxJQUFBLEdBQU8sS0FBS0EsSUFBQTtJQUN2QyxJQUFJaE4sRUFBQSxHQUFLZ04sSUFBQSxFQUNMc0ssS0FBQSxHQUFRQyxZQUFBLENBQWFELEtBQUEsRUFBT3RYLEVBQUEsRUFBSWdOLElBQUEsRUFBTTFGLElBQUk7SUFDOUMsSUFBSXZILElBQUEsR0FBTyxHQUNQdVgsS0FBQSxHQUFRQyxZQUFBLENBQWFELEtBQUEsRUFBTyxHQUFHdlgsSUFBQSxFQUFNdUgsSUFBSTtJQUM3QyxTQUFTcUMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJOLEtBQUEsQ0FBTWhYLE1BQUEsRUFBUXFKLENBQUEsSUFDOUIyTixLQUFBLENBQU0zTixDQUFDLEVBQUVsSyxNQUFBLEdBQVM0WCxJQUFBO0lBQ3RCQSxJQUFBLENBQUs3RixRQUFBLEdBQVc4RixLQUFBO0lBQ2hCLE9BQU9ELElBQUE7RUFDWDtFQUNBekMsZUFBZUMsUUFBQSxFQUFVO0lBQ3JCLE9BQU8sS0FBS1csSUFBQSxDQUFLWixjQUFBLEdBQWlCLEtBQUtZLElBQUEsQ0FBS1osY0FBQSxDQUFlQyxRQUFRLElBQUksTUFBTUQsY0FBQSxDQUFlQyxRQUFRO0VBQ3hHO0VBQ0F6QyxRQUFBLEVBQVU7SUFDTixJQUFJLEtBQUtvRCxJQUFBLENBQUtwRCxPQUFBLEVBQ1YsS0FBS29ELElBQUEsQ0FBS3BELE9BQUEsQ0FBUTtJQUN0QixNQUFNQSxPQUFBLENBQVE7RUFDbEI7QUFDSjtBQUlBLElBQU1vRixZQUFBLEdBQU4sTUFBTUMsYUFBQSxTQUFxQm5HLFFBQUEsQ0FBUztFQUNoQ0MsWUFBWTlSLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtJLFVBQUEsRUFBWTBRLE9BQUEsRUFBU3hMLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUNqRixNQUFNbEUsTUFBQSxFQUFRLEVBQUMsRUFBR3VDLEdBQUEsRUFBS0ksVUFBVTtJQUNqQyxLQUFLL0MsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBSzBTLFNBQUEsR0FBWUEsU0FBQTtJQUNqQixLQUFLQyxTQUFBLEdBQVlBLFNBQUE7SUFDakIsS0FBS2MsT0FBQSxHQUFVQSxPQUFBO0VBQ25CO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBVUEsT0FBTzRELE9BQU9qWCxNQUFBLEVBQVFKLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0lBQ3pELElBQUlpVCxNQUFBLEdBQVN0UCxJQUFBLENBQUt1UCxTQUFBLENBQVV4WCxJQUFBLENBQUt5VixJQUFBLENBQUtnQyxJQUFJO01BQUdZLE9BQUE7SUFDN0MsSUFBSWxDLElBQUEsR0FBT29CLE1BQUEsSUFBVUEsTUFBQSxDQUFPdlgsSUFBQSxFQUFNaUksSUFBQSxFQUFNLE1BQU07TUFHMUMsSUFBSSxDQUFDb1EsT0FBQSxFQUNELE9BQU8vVCxHQUFBO01BQ1gsSUFBSStULE9BQUEsQ0FBUWpZLE1BQUEsRUFDUixPQUFPaVksT0FBQSxDQUFRalksTUFBQSxDQUFPNFMsY0FBQSxDQUFlcUYsT0FBTztJQUNwRCxHQUFHM0YsU0FBQSxFQUFXQyxTQUFTO0lBQ3ZCLElBQUloUSxHQUFBLEdBQU13VCxJQUFBLElBQVFBLElBQUEsQ0FBS3hULEdBQUE7TUFBS0ksVUFBQSxHQUFhb1QsSUFBQSxJQUFRQSxJQUFBLENBQUtwVCxVQUFBO0lBQ3RELElBQUkvQyxJQUFBLENBQUsyTSxNQUFBLEVBQVE7TUFDYixJQUFJLENBQUNoSyxHQUFBLEVBQ0RBLEdBQUEsR0FBTTlCLFFBQUEsQ0FBU3lYLGNBQUEsQ0FBZXRZLElBQUEsQ0FBS2dXLElBQUksV0FDbENyVCxHQUFBLENBQUlyQyxRQUFBLElBQVksR0FDckIsTUFBTSxJQUFJbVUsVUFBQSxDQUFXLDBDQUEwQztJQUN2RSxXQUNTLENBQUM5UixHQUFBLEVBQUs7TUFDWCxJQUFJNFYsS0FBQSxHQUFPMVksd0JBQUEsQ0FBQTZYLGFBQUEsQ0FBY0MsVUFBQSxDQUFXOVcsUUFBQSxFQUFVYixJQUFBLENBQUt5VixJQUFBLENBQUtVLElBQUEsQ0FBS0QsS0FBQSxDQUFNbFcsSUFBSSxHQUFHLE1BQU1BLElBQUEsQ0FBSzRYLEtBQUs7TUFDMUYsQ0FBQztRQUFFalYsR0FBQTtRQUFLSTtNQUFXLElBQUl3VixLQUFBO0lBQzNCO0lBQ0EsSUFBSSxDQUFDeFYsVUFBQSxJQUFjLENBQUMvQyxJQUFBLENBQUsyTSxNQUFBLElBQVVoSyxHQUFBLENBQUlaLFFBQUEsSUFBWSxNQUFNO01BQ3JELElBQUksQ0FBQ1ksR0FBQSxDQUFJNlYsWUFBQSxDQUFhLGlCQUFpQixHQUNuQzdWLEdBQUEsQ0FBSVgsZUFBQSxHQUFrQjtNQUMxQixJQUFJaEMsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUs5SSxTQUFBLEVBQ2YxSyxHQUFBLENBQUkwSyxTQUFBLEdBQVk7SUFDeEI7SUFDQSxJQUFJb0csT0FBQSxHQUFVOVEsR0FBQTtJQUNkQSxHQUFBLEdBQU04VixjQUFBLENBQWU5VixHQUFBLEVBQUsrUCxTQUFBLEVBQVcxUyxJQUFJO0lBQ3pDLElBQUltVyxJQUFBLEVBQ0EsT0FBT2tDLE9BQUEsR0FBVSxJQUFJSyxrQkFBQSxDQUFtQnRZLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtJLFVBQUEsSUFBYyxNQUFNMFEsT0FBQSxFQUFTMEMsSUFBQSxFQUFNbE8sSUFBQSxFQUFNM0QsR0FBQSxHQUFNLENBQUMsV0FDNUh0RSxJQUFBLENBQUsyTSxNQUFBLEVBQ1YsT0FBTyxJQUFJZ00sWUFBQSxDQUFhdlksTUFBQSxFQUFRSixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBV2hRLEdBQUEsRUFBSzhRLE9BQUEsRUFBU3hMLElBQUksT0FFOUUsT0FBTyxJQUFJbVEsYUFBQSxDQUFhaFksTUFBQSxFQUFRSixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBV2hRLEdBQUEsRUFBS0ksVUFBQSxJQUFjLE1BQU0wUSxPQUFBLEVBQVN4TCxJQUFBLEVBQU0zRCxHQUFBLEdBQU0sQ0FBQztFQUNuSDtFQUNBdU8sVUFBQSxFQUFZO0lBRVIsSUFBSSxLQUFLN1MsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUswQixhQUFBLEVBQ3BCLE9BQU87SUFLWCxJQUFJZSxJQUFBLEdBQU87TUFBRTVZLElBQUEsRUFBTSxLQUFLQSxJQUFBLENBQUt5VixJQUFBLENBQUtnQyxJQUFBO01BQU1HLEtBQUEsRUFBTyxLQUFLNVgsSUFBQSxDQUFLNFg7SUFBTTtJQUMvRCxJQUFJLEtBQUs1WCxJQUFBLENBQUt5VixJQUFBLENBQUtvRCxVQUFBLElBQWMsT0FDN0JELElBQUEsQ0FBS0Usa0JBQUEsR0FBcUI7SUFDOUIsSUFBSSxDQUFDLEtBQUsvVixVQUFBLEVBQVk7TUFDbEI2VixJQUFBLENBQUtHLFVBQUEsR0FBYSxNQUFNLEtBQUsvWSxJQUFBLENBQUswTixPQUFBO0lBQ3RDLFdBQ1MsQ0FBQyxLQUFLZ0ksV0FBQSxFQUFhO01BQ3hCa0QsSUFBQSxDQUFLZCxjQUFBLEdBQWlCLEtBQUsvVSxVQUFBO0lBQy9CLE9BQ0s7TUFJRCxTQUFTdUgsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEdBQVMsR0FBR3FKLENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUs7UUFDaEQsSUFBSXJJLEtBQUEsR0FBUSxLQUFLa1EsUUFBQSxDQUFTN0gsQ0FBQztRQUMzQixJQUFJLEtBQUszSCxHQUFBLENBQUlrSCxRQUFBLENBQVM1SCxLQUFBLENBQU1VLEdBQUEsQ0FBSXhDLFVBQVUsR0FBRztVQUN6Q3lZLElBQUEsQ0FBS2QsY0FBQSxHQUFpQjdWLEtBQUEsQ0FBTVUsR0FBQSxDQUFJeEMsVUFBQTtVQUNoQztRQUNKO01BQ0o7TUFDQSxJQUFJLENBQUN5WSxJQUFBLENBQUtkLGNBQUEsRUFDTmMsSUFBQSxDQUFLRyxVQUFBLEdBQWEsTUFBTWxaLHdCQUFBLENBQUFtWixRQUFBLENBQVNDLEtBQUE7SUFDekM7SUFDQSxPQUFPTCxJQUFBO0VBQ1g7RUFDQW5HLFlBQVl6UyxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVztJQUNwQyxPQUFPLEtBQUtQLEtBQUEsSUFBU1AsU0FBQSxJQUFhN1IsSUFBQSxDQUFLMFcsRUFBQSxDQUFHLEtBQUsxVyxJQUFJLEtBQy9Da1osYUFBQSxDQUFjeEcsU0FBQSxFQUFXLEtBQUtBLFNBQVMsS0FBS0MsU0FBQSxDQUFVK0QsRUFBQSxDQUFHLEtBQUsvRCxTQUFTO0VBQy9FO0VBQ0EsSUFBSWhGLEtBQUEsRUFBTztJQUFFLE9BQU8sS0FBSzNOLElBQUEsQ0FBSzRCLFFBQUE7RUFBVTtFQUN4QyxJQUFJa00sT0FBQSxFQUFTO0lBQUUsT0FBTyxLQUFLOU4sSUFBQSxDQUFLbVosTUFBQSxHQUFTLElBQUk7RUFBRztFQUFBO0VBQUE7RUFBQTtFQUFBO0VBS2hEQyxlQUFlblIsSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0lBQ3RCLElBQUlnVCxNQUFBLEdBQVMsS0FBS3RYLElBQUEsQ0FBS2lQLGFBQUE7TUFBZTVOLEdBQUEsR0FBTWlELEdBQUE7SUFDNUMsSUFBSStVLFdBQUEsR0FBY3BSLElBQUEsQ0FBS3FSLFNBQUEsR0FBWSxLQUFLQyxvQkFBQSxDQUFxQnRSLElBQUEsRUFBTTNELEdBQUcsSUFBSTtJQUMxRSxJQUFJa1YsZ0JBQUEsR0FBbUJILFdBQUEsSUFBZUEsV0FBQSxDQUFZL1UsR0FBQSxHQUFNLEtBQUsrVSxXQUFBLEdBQWM7SUFDM0UsSUFBSUksa0JBQUEsR0FBcUJKLFdBQUEsSUFBZUEsV0FBQSxDQUFZL1UsR0FBQSxHQUFNO0lBQzFELElBQUlvVixPQUFBLEdBQVUsSUFBSUMsZUFBQSxDQUFnQixNQUFNSCxnQkFBQSxJQUFvQkEsZ0JBQUEsQ0FBaUJ4WixJQUFBLEVBQU1pSSxJQUFJO0lBQ3ZGMlIsUUFBQSxDQUFTLEtBQUs1WixJQUFBLEVBQU0sS0FBSzJTLFNBQUEsRUFBVyxDQUFDTCxNQUFBLEVBQVFoSSxDQUFBLEVBQUd1UCxVQUFBLEtBQWU7TUFDM0QsSUFBSXZILE1BQUEsQ0FBTzZELElBQUEsQ0FBSzJELEtBQUEsRUFDWkosT0FBQSxDQUFRSyxXQUFBLENBQVl6SCxNQUFBLENBQU82RCxJQUFBLENBQUsyRCxLQUFBLEVBQU94QyxNQUFBLEVBQVFyUCxJQUFJLFdBQzlDcUssTUFBQSxDQUFPbUQsSUFBQSxDQUFLak8sSUFBQSxJQUFRLEtBQUssQ0FBQ3FTLFVBQUEsRUFDL0JILE9BQUEsQ0FBUUssV0FBQSxDQUFZelAsQ0FBQSxJQUFLLEtBQUt0SyxJQUFBLENBQUtnYSxVQUFBLEdBQWFuYSx3QkFBQSxDQUFBb2EsSUFBQSxDQUFLQyxJQUFBLEdBQU8sS0FBS2xhLElBQUEsQ0FBS2lDLEtBQUEsQ0FBTXFJLENBQUMsRUFBRXdQLEtBQUEsRUFBT3hDLE1BQUEsRUFBUXJQLElBQUk7TUFHdEd5UixPQUFBLENBQVFTLFdBQUEsQ0FBWTdILE1BQUEsRUFBUXJLLElBQUEsRUFBTTVHLEdBQUc7SUFDekMsR0FBRyxDQUFDWSxLQUFBLEVBQU95USxTQUFBLEVBQVdDLFNBQUEsRUFBV3JJLENBQUEsS0FBTTtNQUVuQ29QLE9BQUEsQ0FBUUssV0FBQSxDQUFZOVgsS0FBQSxDQUFNNlgsS0FBQSxFQUFPeEMsTUFBQSxFQUFRclAsSUFBSTtNQUU3QyxJQUFJbVMsU0FBQTtNQUNKLElBQUlWLE9BQUEsQ0FBUVcsYUFBQSxDQUFjcFksS0FBQSxFQUFPeVEsU0FBQSxFQUFXQyxTQUFBLEVBQVdySSxDQUFDLEdBQUcsVUFDbERtUCxrQkFBQSxJQUFzQnhSLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWxQLElBQUEsR0FBT1csR0FBQSxJQUN2RDRHLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWpQLEVBQUEsR0FBS1UsR0FBQSxHQUFNWSxLQUFBLENBQU1MLFFBQUEsS0FDckN3WSxTQUFBLEdBQVlWLE9BQUEsQ0FBUVksa0JBQUEsQ0FBbUJqQixXQUFBLENBQVlyWixJQUFJLEtBQUssTUFDN0QwWixPQUFBLENBQVFhLFlBQUEsQ0FBYXRZLEtBQUEsRUFBT3lRLFNBQUEsRUFBV0MsU0FBQSxFQUFXeUgsU0FBQSxFQUFXblMsSUFBSSxHQUFHLFVBQy9EeVIsT0FBQSxDQUFRYyxjQUFBLENBQWV2WSxLQUFBLEVBQU95USxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTXFDLENBQUEsRUFBR2pKLEdBQUcsR0FBRyxNQUN2RTtRQUVEcVksT0FBQSxDQUFRZSxPQUFBLENBQVF4WSxLQUFBLEVBQU95USxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTVHLEdBQUc7TUFDMUQ7TUFDQUEsR0FBQSxJQUFPWSxLQUFBLENBQU1MLFFBQUE7SUFDakIsQ0FBQztJQUVEOFgsT0FBQSxDQUFRSyxXQUFBLENBQVksRUFBQyxFQUFHekMsTUFBQSxFQUFRclAsSUFBSTtJQUNwQyxJQUFJLEtBQUtqSSxJQUFBLENBQUtxUSxXQUFBLEVBQ1ZxSixPQUFBLENBQVFnQixpQkFBQSxDQUFrQjtJQUM5QmhCLE9BQUEsQ0FBUWlCLFdBQUEsQ0FBWTtJQUVwQixJQUFJakIsT0FBQSxDQUFRa0IsT0FBQSxJQUFXLEtBQUt4SSxLQUFBLElBQVNMLGFBQUEsRUFBZTtNQUVoRCxJQUFJeUgsZ0JBQUEsRUFDQSxLQUFLcUIsdUJBQUEsQ0FBd0I1UyxJQUFBLEVBQU11UixnQkFBZ0I7TUFDdkRzQixXQUFBLENBQVksS0FBSy9YLFVBQUEsRUFBWSxLQUFLb1AsUUFBQSxFQUFVbEssSUFBSTtNQUNoRCxJQUFJakMsR0FBQSxFQUNBK1UsUUFBQSxDQUFTLEtBQUtwWSxHQUFHO0lBQ3pCO0VBQ0o7RUFDQTRXLHFCQUFxQnRSLElBQUEsRUFBTTNELEdBQUEsRUFBSztJQUc1QixJQUFJO01BQUU1RCxJQUFBO01BQU1DO0lBQUcsSUFBSXNILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7SUFDOUIsSUFBSSxFQUFFM0gsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxZQUFxQmpRLHdCQUFBLENBQUFxYixhQUFBLEtBQWtCdGEsSUFBQSxHQUFPNEQsR0FBQSxJQUFPM0QsRUFBQSxHQUFLMkQsR0FBQSxHQUFNLEtBQUt0RSxJQUFBLENBQUswTixPQUFBLENBQVFDLElBQUEsRUFDL0YsT0FBTztJQUNYLElBQUlzTixRQUFBLEdBQVdoVCxJQUFBLENBQUtpVCxLQUFBLENBQU1DLGVBQUE7SUFDMUIsSUFBSSxDQUFDRixRQUFBLElBQVksQ0FBQyxLQUFLdFksR0FBQSxDQUFJa0gsUUFBQSxDQUFTb1IsUUFBQSxDQUFTOWEsVUFBVSxHQUNuRCxPQUFPO0lBQ1gsSUFBSSxLQUFLSCxJQUFBLENBQUtpUCxhQUFBLEVBQWU7TUFJekIsSUFBSStHLElBQUEsR0FBT2lGLFFBQUEsQ0FBU2phLFNBQUE7TUFDcEIsSUFBSW9hLE9BQUEsR0FBVUMsa0JBQUEsQ0FBbUIsS0FBS3JiLElBQUEsQ0FBSzBOLE9BQUEsRUFBU3NJLElBQUEsRUFBTXRWLElBQUEsR0FBTzRELEdBQUEsRUFBSzNELEVBQUEsR0FBSzJELEdBQUc7TUFDOUUsT0FBTzhXLE9BQUEsR0FBVSxJQUFJLE9BQU87UUFBRXBiLElBQUEsRUFBTWliLFFBQUE7UUFBVTNXLEdBQUEsRUFBSzhXLE9BQUE7UUFBU3BGO01BQUs7SUFDckUsT0FDSztNQUNELE9BQU87UUFBRWhXLElBQUEsRUFBTWliLFFBQUE7UUFBVTNXLEdBQUEsRUFBSztRQUFJMFIsSUFBQSxFQUFNO01BQUc7SUFDL0M7RUFDSjtFQUNBNkUsd0JBQXdCNVMsSUFBQSxFQUFNO0lBQUVqSSxJQUFBO0lBQU1zRSxHQUFBO0lBQUswUjtFQUFLLEdBQUc7SUFFL0MsSUFBSSxLQUFLeEMsT0FBQSxDQUFReFQsSUFBSSxHQUNqQjtJQUVKLElBQUlzYixPQUFBLEdBQVV0YixJQUFBO0lBQ2QsUUFBUXNiLE9BQUEsR0FBVUEsT0FBQSxDQUFRbmIsVUFBQSxFQUFZO01BQ2xDLElBQUltYixPQUFBLENBQVFuYixVQUFBLElBQWMsS0FBSzRDLFVBQUEsRUFDM0I7TUFDSixPQUFPdVksT0FBQSxDQUFRcGIsZUFBQSxFQUNYb2IsT0FBQSxDQUFRbmIsVUFBQSxDQUFXb2IsV0FBQSxDQUFZRCxPQUFBLENBQVFwYixlQUFlO01BQzFELE9BQU9vYixPQUFBLENBQVE5UCxXQUFBLEVBQ1g4UCxPQUFBLENBQVFuYixVQUFBLENBQVdvYixXQUFBLENBQVlELE9BQUEsQ0FBUTlQLFdBQVc7TUFDdEQsSUFBSThQLE9BQUEsQ0FBUW5aLFVBQUEsRUFDUm1aLE9BQUEsQ0FBUW5aLFVBQUEsR0FBYTtJQUM3QjtJQUNBLElBQUlTLElBQUEsR0FBTyxJQUFJbVUsbUJBQUEsQ0FBb0IsTUFBTXVFLE9BQUEsRUFBU3RiLElBQUEsRUFBTWdXLElBQUk7SUFDNUQvTixJQUFBLENBQUtpVCxLQUFBLENBQU1NLGdCQUFBLENBQWlCdlIsSUFBQSxDQUFLckgsSUFBSTtJQUVyQyxLQUFLdVAsUUFBQSxHQUFXK0YsWUFBQSxDQUFhLEtBQUsvRixRQUFBLEVBQVU3TixHQUFBLEVBQUtBLEdBQUEsR0FBTTBSLElBQUEsQ0FBSy9VLE1BQUEsRUFBUWdILElBQUEsRUFBTXJGLElBQUk7RUFDbEY7RUFBQTtFQUFBO0VBR0E2WSxPQUFPemIsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU07SUFDckMsSUFBSSxLQUFLbUssS0FBQSxJQUFTSixVQUFBLElBQ2QsQ0FBQ2hTLElBQUEsQ0FBSzBiLFVBQUEsQ0FBVyxLQUFLMWIsSUFBSSxHQUMxQixPQUFPO0lBQ1gsS0FBSzJiLFdBQUEsQ0FBWTNiLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBSTtJQUNqRCxPQUFPO0VBQ1g7RUFDQTBULFlBQVkzYixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTtJQUMxQyxLQUFLMlQsZUFBQSxDQUFnQmxKLFNBQVM7SUFDOUIsS0FBSzFTLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUsyUyxTQUFBLEdBQVlBLFNBQUE7SUFDakIsSUFBSSxLQUFLNVAsVUFBQSxFQUNMLEtBQUtxVyxjQUFBLENBQWVuUixJQUFBLEVBQU0sS0FBSzRGLFVBQVU7SUFDN0MsS0FBS3VFLEtBQUEsR0FBUVAsU0FBQTtFQUNqQjtFQUNBK0osZ0JBQWdCbEosU0FBQSxFQUFXO0lBQ3ZCLElBQUl3RyxhQUFBLENBQWN4RyxTQUFBLEVBQVcsS0FBS0EsU0FBUyxHQUN2QztJQUNKLElBQUltSixTQUFBLEdBQVksS0FBS3BJLE9BQUEsQ0FBUW5ULFFBQUEsSUFBWTtJQUN6QyxJQUFJd2IsTUFBQSxHQUFTLEtBQUtuWixHQUFBO0lBQ2xCLEtBQUtBLEdBQUEsR0FBTW9aLGNBQUEsQ0FBZSxLQUFLcFosR0FBQSxFQUFLLEtBQUs4USxPQUFBLEVBQVN1SSxnQkFBQSxDQUFpQixLQUFLdEosU0FBQSxFQUFXLEtBQUsxUyxJQUFBLEVBQU02YixTQUFTLEdBQUdHLGdCQUFBLENBQWlCdEosU0FBQSxFQUFXLEtBQUsxUyxJQUFBLEVBQU02YixTQUFTLENBQUM7SUFDM0osSUFBSSxLQUFLbFosR0FBQSxJQUFPbVosTUFBQSxFQUFRO01BQ3BCQSxNQUFBLENBQU8zWixVQUFBLEdBQWE7TUFDcEIsS0FBS1EsR0FBQSxDQUFJUixVQUFBLEdBQWE7SUFDMUI7SUFDQSxLQUFLdVEsU0FBQSxHQUFZQSxTQUFBO0VBQ3JCO0VBQUE7RUFFQXVKLFdBQUEsRUFBYTtJQUNULElBQUksS0FBS3hJLE9BQUEsQ0FBUW5ULFFBQUEsSUFBWSxHQUN6QixLQUFLbVQsT0FBQSxDQUFRK0MsU0FBQSxDQUFVQyxHQUFBLENBQUksMEJBQTBCO0lBQ3pELElBQUksS0FBSzFULFVBQUEsSUFBYyxDQUFDLEtBQUsvQyxJQUFBLENBQUt5VixJQUFBLENBQUtVLElBQUEsQ0FBSzlJLFNBQUEsRUFDeEMsS0FBSzFLLEdBQUEsQ0FBSTBLLFNBQUEsR0FBWTtFQUM3QjtFQUFBO0VBRUE2TyxhQUFBLEVBQWU7SUFDWCxJQUFJLEtBQUt6SSxPQUFBLENBQVFuVCxRQUFBLElBQVksR0FBRztNQUM1QixLQUFLbVQsT0FBQSxDQUFRK0MsU0FBQSxDQUFVMkYsTUFBQSxDQUFPLDBCQUEwQjtNQUN4RCxJQUFJLEtBQUtwWixVQUFBLElBQWMsQ0FBQyxLQUFLL0MsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUs5SSxTQUFBLEVBQ3hDLEtBQUsxSyxHQUFBLENBQUl5WixlQUFBLENBQWdCLFdBQVc7SUFDNUM7RUFDSjtFQUNBLElBQUlsSSxRQUFBLEVBQVU7SUFBRSxPQUFPLEtBQUtsVSxJQUFBLENBQUtxYyxNQUFBO0VBQVE7QUFDN0M7QUFHQSxTQUFTQyxZQUFZeFksSUFBQSxFQUFLNE8sU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtzRixJQUFBLEVBQU07RUFDdkR3USxjQUFBLENBQWU5VixHQUFBLEVBQUsrUCxTQUFBLEVBQVc1TyxJQUFHO0VBQ2xDLElBQUlxSSxPQUFBLEdBQVUsSUFBSWdNLFlBQUEsQ0FBYSxRQUFXclUsSUFBQSxFQUFLNE8sU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtBLEdBQUEsRUFBS0EsR0FBQSxFQUFLc0YsSUFBQSxFQUFNLENBQUM7RUFDM0YsSUFBSWtFLE9BQUEsQ0FBUXBKLFVBQUEsRUFDUm9KLE9BQUEsQ0FBUWlOLGNBQUEsQ0FBZW5SLElBQUEsRUFBTSxDQUFDO0VBQ2xDLE9BQU9rRSxPQUFBO0FBQ1g7QUFDQSxJQUFNd00sWUFBQSxHQUFOLE1BQU00RCxhQUFBLFNBQXFCcEUsWUFBQSxDQUFhO0VBQ3BDakcsWUFBWTlSLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUs4USxPQUFBLEVBQVN4TCxJQUFBLEVBQU07SUFDaEUsTUFBTTdILE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUssTUFBTThRLE9BQUEsRUFBU3hMLElBQUEsRUFBTSxDQUFDO0VBQ3pFO0VBQ0E0SyxVQUFBLEVBQVk7SUFDUixJQUFJMkosSUFBQSxHQUFPLEtBQUsvSSxPQUFBLENBQVF0VCxVQUFBO0lBQ3hCLE9BQU9xYyxJQUFBLElBQVFBLElBQUEsSUFBUSxLQUFLN1osR0FBQSxJQUFPLENBQUM2WixJQUFBLENBQUtDLFFBQUEsRUFDckNELElBQUEsR0FBT0EsSUFBQSxDQUFLcmMsVUFBQTtJQUNoQixPQUFPO01BQUVxYyxJQUFBLEVBQU9BLElBQUEsSUFBUTtJQUFNO0VBQ2xDO0VBQ0FmLE9BQU96YixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTtJQUNyQyxJQUFJLEtBQUttSyxLQUFBLElBQVNKLFVBQUEsSUFBZSxLQUFLSSxLQUFBLElBQVNQLFNBQUEsSUFBYSxDQUFDLEtBQUs2SyxRQUFBLENBQVMsS0FDdkUsQ0FBQzFjLElBQUEsQ0FBSzBiLFVBQUEsQ0FBVyxLQUFLMWIsSUFBSSxHQUMxQixPQUFPO0lBQ1gsS0FBSzRiLGVBQUEsQ0FBZ0JsSixTQUFTO0lBQzlCLEtBQUssS0FBS04sS0FBQSxJQUFTUCxTQUFBLElBQWE3UixJQUFBLENBQUtnVyxJQUFBLElBQVEsS0FBS2hXLElBQUEsQ0FBS2dXLElBQUEsS0FBU2hXLElBQUEsQ0FBS2dXLElBQUEsSUFBUSxLQUFLdkMsT0FBQSxDQUFRelMsU0FBQSxFQUFXO01BQ2pHLEtBQUt5UyxPQUFBLENBQVF6UyxTQUFBLEdBQVloQixJQUFBLENBQUtnVyxJQUFBO01BQzlCLElBQUkvTixJQUFBLENBQUswVSxXQUFBLElBQWUsS0FBS2xKLE9BQUEsRUFDekJ4TCxJQUFBLENBQUswVSxXQUFBLEdBQWM7SUFDM0I7SUFDQSxLQUFLM2MsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS29TLEtBQUEsR0FBUVAsU0FBQTtJQUNiLE9BQU87RUFDWDtFQUNBNkssU0FBQSxFQUFXO0lBQ1AsSUFBSXpMLFNBQUEsR0FBWSxLQUFLN1EsTUFBQSxDQUFPMkMsVUFBQTtJQUM1QixTQUFTNlosQ0FBQSxHQUFJLEtBQUtuSixPQUFBLEVBQVNtSixDQUFBLEVBQUdBLENBQUEsR0FBSUEsQ0FBQSxDQUFFemMsVUFBQSxFQUNoQyxJQUFJeWMsQ0FBQSxJQUFLM0wsU0FBQSxFQUNMLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFDQXhDLFdBQVduSyxHQUFBLEVBQUs7SUFDWixPQUFPO01BQUV0RSxJQUFBLEVBQU0sS0FBS3lULE9BQUE7TUFBU25SLE1BQUEsRUFBUWdDO0lBQUk7RUFDN0M7RUFDQTRPLGdCQUFnQnZRLEdBQUEsRUFBS0wsTUFBQSxFQUFRNEosSUFBQSxFQUFNO0lBQy9CLElBQUl2SixHQUFBLElBQU8sS0FBSzhRLE9BQUEsRUFDWixPQUFPLEtBQUs1RixVQUFBLEdBQWFySixJQUFBLENBQUtDLEdBQUEsQ0FBSW5DLE1BQUEsRUFBUSxLQUFLdEMsSUFBQSxDQUFLZ1csSUFBQSxDQUFLL1UsTUFBTTtJQUNuRSxPQUFPLE1BQU1pUyxlQUFBLENBQWdCdlEsR0FBQSxFQUFLTCxNQUFBLEVBQVE0SixJQUFJO0VBQ2xEO0VBQ0FxSixlQUFlQyxRQUFBLEVBQVU7SUFDckIsT0FBT0EsUUFBQSxDQUFTQyxJQUFBLElBQVEsbUJBQW1CRCxRQUFBLENBQVNDLElBQUEsSUFBUTtFQUNoRTtFQUNBc0MsTUFBTXJYLElBQUEsRUFBTUMsRUFBQSxFQUFJc0gsSUFBQSxFQUFNO0lBQ2xCLElBQUlqSSxJQUFBLEdBQU8sS0FBS0EsSUFBQSxDQUFLNmMsR0FBQSxDQUFJbmMsSUFBQSxFQUFNQyxFQUFFO01BQUdnQyxHQUFBLEdBQU05QixRQUFBLENBQVN5WCxjQUFBLENBQWV0WSxJQUFBLENBQUtnVyxJQUFJO0lBQzNFLE9BQU8sSUFBSXVHLGFBQUEsQ0FBYSxLQUFLbmMsTUFBQSxFQUFRSixJQUFBLEVBQU0sS0FBSzBTLFNBQUEsRUFBVyxLQUFLQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtBLEdBQUEsRUFBS3NGLElBQUk7RUFDN0Y7RUFDQTBOLFVBQVVqVixJQUFBLEVBQU1DLEVBQUEsRUFBSTtJQUNoQixNQUFNZ1YsU0FBQSxDQUFValYsSUFBQSxFQUFNQyxFQUFFO0lBQ3hCLElBQUksS0FBS2dDLEdBQUEsSUFBTyxLQUFLOFEsT0FBQSxLQUFZL1MsSUFBQSxJQUFRLEtBQUtDLEVBQUEsSUFBTSxLQUFLOFMsT0FBQSxDQUFRelMsU0FBQSxDQUFVQyxNQUFBLEdBQ3ZFLEtBQUttUixLQUFBLEdBQVFKLFVBQUE7RUFDckI7RUFDQSxJQUFJa0MsUUFBQSxFQUFVO0lBQUUsT0FBTztFQUFPO0VBQzlCdkgsT0FBT3FKLElBQUEsRUFBTTtJQUFFLE9BQU8sS0FBS2hXLElBQUEsQ0FBS2dXLElBQUEsSUFBUUEsSUFBQTtFQUFNO0FBQ2xEO0FBR0EsSUFBTWpDLG9CQUFBLEdBQU4sY0FBbUM5QixRQUFBLENBQVM7RUFDeENZLFVBQUEsRUFBWTtJQUFFLE9BQU87TUFBRThELE1BQUEsRUFBUTtJQUFLO0VBQUc7RUFDdkMvRCxZQUFZN1EsUUFBQSxFQUFVO0lBQUUsT0FBTyxLQUFLcVEsS0FBQSxJQUFTUCxTQUFBLElBQWEsS0FBS2xQLEdBQUEsQ0FBSVosUUFBQSxJQUFZQSxRQUFBO0VBQVU7RUFDekYsSUFBSW1TLFFBQUEsRUFBVTtJQUFFLE9BQU87RUFBTTtFQUM3QixJQUFJOUUsZ0JBQUEsRUFBa0I7SUFBRSxPQUFPLEtBQUt6TSxHQUFBLENBQUlaLFFBQUEsSUFBWTtFQUFPO0FBQy9EO0FBSUEsSUFBTTJXLGtCQUFBLEdBQU4sY0FBaUNQLFlBQUEsQ0FBYTtFQUMxQ2pHLFlBQVk5UixNQUFBLEVBQVFKLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXaFEsR0FBQSxFQUFLSSxVQUFBLEVBQVkwUSxPQUFBLEVBQVMwQyxJQUFBLEVBQU1sTyxJQUFBLEVBQU0zRCxHQUFBLEVBQUs7SUFDdkYsTUFBTWxFLE1BQUEsRUFBUUosSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVdoUSxHQUFBLEVBQUtJLFVBQUEsRUFBWTBRLE9BQUEsRUFBU3hMLElBQUEsRUFBTTNELEdBQUc7SUFDN0UsS0FBSzZSLElBQUEsR0FBT0EsSUFBQTtFQUNoQjtFQUFBO0VBQUE7RUFBQTtFQUlBc0YsT0FBT3piLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNO0lBQ3JDLElBQUksS0FBS21LLEtBQUEsSUFBU0osVUFBQSxFQUNkLE9BQU87SUFDWCxJQUFJLEtBQUttRSxJQUFBLENBQUtzRixNQUFBLEtBQVcsS0FBS3piLElBQUEsQ0FBS3lWLElBQUEsSUFBUXpWLElBQUEsQ0FBS3lWLElBQUEsSUFBUSxLQUFLVSxJQUFBLENBQUsyRyxTQUFBLEdBQVk7TUFDMUUsSUFBSXhMLE1BQUEsR0FBUyxLQUFLNkUsSUFBQSxDQUFLc0YsTUFBQSxDQUFPemIsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFTO01BQ3hELElBQUlyQixNQUFBLEVBQ0EsS0FBS3FLLFdBQUEsQ0FBWTNiLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBSTtNQUNyRCxPQUFPcUosTUFBQTtJQUNYLFdBQ1MsQ0FBQyxLQUFLdk8sVUFBQSxJQUFjLENBQUMvQyxJQUFBLENBQUttWixNQUFBLEVBQVE7TUFDdkMsT0FBTztJQUNYLE9BQ0s7TUFDRCxPQUFPLE1BQU1zQyxNQUFBLENBQU96YixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUk7SUFDeEQ7RUFDSjtFQUNBZ1UsV0FBQSxFQUFhO0lBQ1QsS0FBSzlGLElBQUEsQ0FBSzhGLFVBQUEsR0FBYSxLQUFLOUYsSUFBQSxDQUFLOEYsVUFBQSxDQUFXLElBQUksTUFBTUEsVUFBQSxDQUFXO0VBQ3JFO0VBQ0FDLGFBQUEsRUFBZTtJQUNYLEtBQUsvRixJQUFBLENBQUsrRixZQUFBLEdBQWUsS0FBSy9GLElBQUEsQ0FBSytGLFlBQUEsQ0FBYSxJQUFJLE1BQU1BLFlBQUEsQ0FBYTtFQUMzRTtFQUNBeEgsYUFBYUMsTUFBQSxFQUFRQyxJQUFBLEVBQU0zTSxJQUFBLEVBQU00TSxLQUFBLEVBQU87SUFDcEMsS0FBS3NCLElBQUEsQ0FBS3pCLFlBQUEsR0FBZSxLQUFLeUIsSUFBQSxDQUFLekIsWUFBQSxDQUFhQyxNQUFBLEVBQVFDLElBQUEsRUFBTTNNLElBQUEsQ0FBSzBCLElBQUksSUFDakUsTUFBTStLLFlBQUEsQ0FBYUMsTUFBQSxFQUFRQyxJQUFBLEVBQU0zTSxJQUFBLEVBQU00TSxLQUFLO0VBQ3REO0VBQ0E5QixRQUFBLEVBQVU7SUFDTixJQUFJLEtBQUtvRCxJQUFBLENBQUtwRCxPQUFBLEVBQ1YsS0FBS29ELElBQUEsQ0FBS3BELE9BQUEsQ0FBUTtJQUN0QixNQUFNQSxPQUFBLENBQVE7RUFDbEI7RUFDQUQsVUFBVXJQLEtBQUEsRUFBTztJQUNiLE9BQU8sS0FBSzBTLElBQUEsQ0FBS3JELFNBQUEsR0FBWSxLQUFLcUQsSUFBQSxDQUFLckQsU0FBQSxDQUFVclAsS0FBSyxJQUFJO0VBQzlEO0VBQ0E4UixlQUFlQyxRQUFBLEVBQVU7SUFDckIsT0FBTyxLQUFLVyxJQUFBLENBQUtaLGNBQUEsR0FBaUIsS0FBS1ksSUFBQSxDQUFLWixjQUFBLENBQWVDLFFBQVEsSUFBSSxNQUFNRCxjQUFBLENBQWVDLFFBQVE7RUFDeEc7QUFDSjtBQUlBLFNBQVNzRixZQUFZN0osU0FBQSxFQUFXOEwsS0FBQSxFQUFPOVUsSUFBQSxFQUFNO0VBQ3pDLElBQUl0RixHQUFBLEdBQU1zTyxTQUFBLENBQVUzRixVQUFBO0lBQVkwUixPQUFBLEdBQVU7RUFDMUMsU0FBUzFTLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUl5UyxLQUFBLENBQU05YixNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDbkMsSUFBSTFILElBQUEsR0FBT21hLEtBQUEsQ0FBTXpTLENBQUM7TUFBRzJTLFFBQUEsR0FBV3JhLElBQUEsQ0FBS0QsR0FBQTtJQUNyQyxJQUFJc2EsUUFBQSxDQUFTOWMsVUFBQSxJQUFjOFEsU0FBQSxFQUFXO01BQ2xDLE9BQU9nTSxRQUFBLElBQVl0YSxHQUFBLEVBQUs7UUFDcEJBLEdBQUEsR0FBTXVhLEVBQUEsQ0FBR3ZhLEdBQUc7UUFDWnFhLE9BQUEsR0FBVTtNQUNkO01BQ0FyYSxHQUFBLEdBQU1BLEdBQUEsQ0FBSTZJLFdBQUE7SUFDZCxPQUNLO01BQ0R3UixPQUFBLEdBQVU7TUFDVi9MLFNBQUEsQ0FBVWtNLFlBQUEsQ0FBYUYsUUFBQSxFQUFVdGEsR0FBRztJQUN4QztJQUNBLElBQUlDLElBQUEsWUFBZ0J1VSxZQUFBLEVBQWM7TUFDOUIsSUFBSTdTLEdBQUEsR0FBTTNCLEdBQUEsR0FBTUEsR0FBQSxDQUFJekMsZUFBQSxHQUFrQitRLFNBQUEsQ0FBVXpELFNBQUE7TUFDaERzTixXQUFBLENBQVlsWSxJQUFBLENBQUtHLFVBQUEsRUFBWUgsSUFBQSxDQUFLdVAsUUFBQSxFQUFVbEssSUFBSTtNQUNoRHRGLEdBQUEsR0FBTTJCLEdBQUEsR0FBTUEsR0FBQSxDQUFJa0gsV0FBQSxHQUFjeUYsU0FBQSxDQUFVM0YsVUFBQTtJQUM1QztFQUNKO0VBQ0EsT0FBTzNJLEdBQUEsRUFBSztJQUNSQSxHQUFBLEdBQU11YSxFQUFBLENBQUd2YSxHQUFHO0lBQ1pxYSxPQUFBLEdBQVU7RUFDZDtFQUNBLElBQUlBLE9BQUEsSUFBVy9VLElBQUEsQ0FBSzBVLFdBQUEsSUFBZTFMLFNBQUEsRUFDL0JoSixJQUFBLENBQUswVSxXQUFBLEdBQWM7QUFDM0I7QUFDQSxJQUFNUyxjQUFBLEdBQWlCLFNBQUFBLENBQVVyYixRQUFBLEVBQVU7RUFDdkMsSUFBSUEsUUFBQSxFQUNBLEtBQUtBLFFBQUEsR0FBV0EsUUFBQTtBQUN4QjtBQUNBcWIsY0FBQSxDQUFlalAsU0FBQSxHQUFZLGVBQUFrUCxNQUFBLENBQU9oRyxNQUFBLENBQU8sSUFBSTtBQUM3QyxJQUFNaUcsTUFBQSxHQUFTLENBQUMsSUFBSUYsY0FBQSxFQUFjO0FBQ2xDLFNBQVNwQixpQkFBaUJ0SixTQUFBLEVBQVcxUyxJQUFBLEVBQU02YixTQUFBLEVBQVc7RUFDbEQsSUFBSW5KLFNBQUEsQ0FBVXpSLE1BQUEsSUFBVSxHQUNwQixPQUFPcWMsTUFBQTtFQUNYLElBQUlyVyxHQUFBLEdBQU00VSxTQUFBLEdBQVl5QixNQUFBLENBQU8sQ0FBQyxJQUFJLElBQUlGLGNBQUE7SUFBZ0I5TCxNQUFBLEdBQVMsQ0FBQ3JLLEdBQUc7RUFDbkUsU0FBU3FELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlvSSxTQUFBLENBQVV6UixNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDdkMsSUFBSXNOLEtBQUEsR0FBUWxGLFNBQUEsQ0FBVXBJLENBQUMsRUFBRW1MLElBQUEsQ0FBS21DLEtBQUE7SUFDOUIsSUFBSSxDQUFDQSxLQUFBLEVBQ0Q7SUFDSixJQUFJQSxLQUFBLENBQU03VixRQUFBLEVBQ051UCxNQUFBLENBQU9ySCxJQUFBLENBQUtoRCxHQUFBLEdBQU0sSUFBSW1XLGNBQUEsQ0FBZXhGLEtBQUEsQ0FBTTdWLFFBQVEsQ0FBQztJQUN4RCxTQUFTMFYsSUFBQSxJQUFRRyxLQUFBLEVBQU87TUFDcEIsSUFBSTJGLEdBQUEsR0FBTTNGLEtBQUEsQ0FBTUgsSUFBSTtNQUNwQixJQUFJOEYsR0FBQSxJQUFPLE1BQ1A7TUFDSixJQUFJMUIsU0FBQSxJQUFhdkssTUFBQSxDQUFPclEsTUFBQSxJQUFVLEdBQzlCcVEsTUFBQSxDQUFPckgsSUFBQSxDQUFLaEQsR0FBQSxHQUFNLElBQUltVyxjQUFBLENBQWVwZCxJQUFBLENBQUt3ZCxRQUFBLEdBQVcsU0FBUyxLQUFLLENBQUM7TUFDeEUsSUFBSS9GLElBQUEsSUFBUSxTQUNSeFEsR0FBQSxDQUFJd1csS0FBQSxJQUFTeFcsR0FBQSxDQUFJd1csS0FBQSxHQUFReFcsR0FBQSxDQUFJd1csS0FBQSxHQUFRLE1BQU0sTUFBTUYsR0FBQSxVQUM1QzlGLElBQUEsSUFBUSxTQUNieFEsR0FBQSxDQUFJVCxLQUFBLElBQVNTLEdBQUEsQ0FBSVQsS0FBQSxHQUFRUyxHQUFBLENBQUlULEtBQUEsR0FBUSxNQUFNLE1BQU0rVyxHQUFBLFVBQzVDOUYsSUFBQSxJQUFRLFlBQ2J4USxHQUFBLENBQUl3USxJQUFJLElBQUk4RixHQUFBO0lBQ3BCO0VBQ0o7RUFDQSxPQUFPak0sTUFBQTtBQUNYO0FBQ0EsU0FBU3lLLGVBQWUyQixRQUFBLEVBQVVqSyxPQUFBLEVBQVNrSyxZQUFBLEVBQWNDLFdBQUEsRUFBYTtFQUVsRSxJQUFJRCxZQUFBLElBQWdCTCxNQUFBLElBQVVNLFdBQUEsSUFBZU4sTUFBQSxFQUN6QyxPQUFPN0osT0FBQTtFQUNYLElBQUlvSyxNQUFBLEdBQVNwSyxPQUFBO0VBQ2IsU0FBU25KLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlzVCxXQUFBLENBQVkzYyxNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDekMsSUFBSXdULElBQUEsR0FBT0YsV0FBQSxDQUFZdFQsQ0FBQztNQUFHaUQsSUFBQSxHQUFPb1EsWUFBQSxDQUFhclQsQ0FBQztJQUNoRCxJQUFJQSxDQUFBLEVBQUc7TUFDSCxJQUFJbEssTUFBQTtNQUNKLElBQUltTixJQUFBLElBQVFBLElBQUEsQ0FBS3hMLFFBQUEsSUFBWStiLElBQUEsQ0FBSy9iLFFBQUEsSUFBWThiLE1BQUEsSUFBVUgsUUFBQSxLQUNuRHRkLE1BQUEsR0FBU3lkLE1BQUEsQ0FBTzFkLFVBQUEsS0FBZUMsTUFBQSxDQUFPMkIsUUFBQSxDQUFTZ2MsV0FBQSxDQUFZLEtBQUtELElBQUEsQ0FBSy9iLFFBQUEsRUFBVTtRQUNoRjhiLE1BQUEsR0FBU3pkLE1BQUE7TUFDYixPQUNLO1FBQ0RBLE1BQUEsR0FBU1MsUUFBQSxDQUFTeVYsYUFBQSxDQUFjd0gsSUFBQSxDQUFLL2IsUUFBUTtRQUM3QzNCLE1BQUEsQ0FBT3FjLFFBQUEsR0FBVztRQUNsQnJjLE1BQUEsQ0FBT21XLFdBQUEsQ0FBWXNILE1BQU07UUFDekJ0USxJQUFBLEdBQU8rUCxNQUFBLENBQU8sQ0FBQztRQUNmTyxNQUFBLEdBQVN6ZCxNQUFBO01BQ2I7SUFDSjtJQUNBNGQsZUFBQSxDQUFnQkgsTUFBQSxFQUFRdFEsSUFBQSxJQUFRK1AsTUFBQSxDQUFPLENBQUMsR0FBR1EsSUFBSTtFQUNuRDtFQUNBLE9BQU9ELE1BQUE7QUFDWDtBQUNBLFNBQVNHLGdCQUFnQnJiLEdBQUEsRUFBSzRLLElBQUEsRUFBTTFLLEdBQUEsRUFBSztFQUNyQyxTQUFTNFUsSUFBQSxJQUFRbEssSUFBQSxFQUNiLElBQUlrSyxJQUFBLElBQVEsV0FBV0EsSUFBQSxJQUFRLFdBQVdBLElBQUEsSUFBUSxjQUFjLEVBQUVBLElBQUEsSUFBUTVVLEdBQUEsR0FDdEVGLEdBQUEsQ0FBSXlaLGVBQUEsQ0FBZ0IzRSxJQUFJO0VBQ2hDLFNBQVNBLElBQUEsSUFBUTVVLEdBQUEsRUFDYixJQUFJNFUsSUFBQSxJQUFRLFdBQVdBLElBQUEsSUFBUSxXQUFXQSxJQUFBLElBQVEsY0FBYzVVLEdBQUEsQ0FBSTRVLElBQUksS0FBS2xLLElBQUEsQ0FBS2tLLElBQUksR0FDbEY5VSxHQUFBLENBQUlzYixZQUFBLENBQWF4RyxJQUFBLEVBQU01VSxHQUFBLENBQUk0VSxJQUFJLENBQUM7RUFDeEMsSUFBSWxLLElBQUEsQ0FBS2tRLEtBQUEsSUFBUzVhLEdBQUEsQ0FBSTRhLEtBQUEsRUFBTztJQUN6QixJQUFJUyxRQUFBLEdBQVczUSxJQUFBLENBQUtrUSxLQUFBLEdBQVFsUSxJQUFBLENBQUtrUSxLQUFBLENBQU1VLEtBQUEsQ0FBTSxHQUFHLEVBQUVDLE1BQUEsQ0FBT0MsT0FBTyxJQUFJLEVBQUM7SUFDckUsSUFBSUMsT0FBQSxHQUFVemIsR0FBQSxDQUFJNGEsS0FBQSxHQUFRNWEsR0FBQSxDQUFJNGEsS0FBQSxDQUFNVSxLQUFBLENBQU0sR0FBRyxFQUFFQyxNQUFBLENBQU9DLE9BQU8sSUFBSSxFQUFDO0lBQ2xFLFNBQVMvVCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNFQsUUFBQSxDQUFTamQsTUFBQSxFQUFRcUosQ0FBQSxJQUNqQyxJQUFJZ1UsT0FBQSxDQUFRQyxPQUFBLENBQVFMLFFBQUEsQ0FBUzVULENBQUMsQ0FBQyxLQUFLLElBQ2hDM0gsR0FBQSxDQUFJNlQsU0FBQSxDQUFVMkYsTUFBQSxDQUFPK0IsUUFBQSxDQUFTNVQsQ0FBQyxDQUFDO0lBQ3hDLFNBQVNBLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlnVSxPQUFBLENBQVFyZCxNQUFBLEVBQVFxSixDQUFBLElBQ2hDLElBQUk0VCxRQUFBLENBQVNLLE9BQUEsQ0FBUUQsT0FBQSxDQUFRaFUsQ0FBQyxDQUFDLEtBQUssSUFDaEMzSCxHQUFBLENBQUk2VCxTQUFBLENBQVVDLEdBQUEsQ0FBSTZILE9BQUEsQ0FBUWhVLENBQUMsQ0FBQztJQUNwQyxJQUFJM0gsR0FBQSxDQUFJNlQsU0FBQSxDQUFVdlYsTUFBQSxJQUFVLEdBQ3hCMEIsR0FBQSxDQUFJeVosZUFBQSxDQUFnQixPQUFPO0VBQ25DO0VBQ0EsSUFBSTdPLElBQUEsQ0FBSy9HLEtBQUEsSUFBUzNELEdBQUEsQ0FBSTJELEtBQUEsRUFBTztJQUN6QixJQUFJK0csSUFBQSxDQUFLL0csS0FBQSxFQUFPO01BQ1osSUFBSWdZLElBQUEsR0FBTztRQUFpRkMsQ0FBQTtNQUM1RixPQUFPQSxDQUFBLEdBQUlELElBQUEsQ0FBS3BaLElBQUEsQ0FBS21JLElBQUEsQ0FBSy9HLEtBQUssR0FDM0I3RCxHQUFBLENBQUk2RCxLQUFBLENBQU1rWSxjQUFBLENBQWVELENBQUEsQ0FBRSxDQUFDLENBQUM7SUFDckM7SUFDQSxJQUFJNWIsR0FBQSxDQUFJMkQsS0FBQSxFQUNKN0QsR0FBQSxDQUFJNkQsS0FBQSxDQUFNbVksT0FBQSxJQUFXOWIsR0FBQSxDQUFJMkQsS0FBQTtFQUNqQztBQUNKO0FBQ0EsU0FBU2lTLGVBQWU5VixHQUFBLEVBQUttYixJQUFBLEVBQU05ZCxJQUFBLEVBQU07RUFDckMsT0FBTytiLGNBQUEsQ0FBZXBaLEdBQUEsRUFBS0EsR0FBQSxFQUFLMmEsTUFBQSxFQUFRdEIsZ0JBQUEsQ0FBaUI4QixJQUFBLEVBQU05ZCxJQUFBLEVBQU0yQyxHQUFBLENBQUlyQyxRQUFBLElBQVksQ0FBQyxDQUFDO0FBQzNGO0FBQ0EsU0FBUzRZLGNBQWMwRixDQUFBLEVBQUdDLENBQUEsRUFBRztFQUN6QixJQUFJRCxDQUFBLENBQUUzZCxNQUFBLElBQVU0ZCxDQUFBLENBQUU1ZCxNQUFBLEVBQ2QsT0FBTztFQUNYLFNBQVNxSixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJc1UsQ0FBQSxDQUFFM2QsTUFBQSxFQUFRcUosQ0FBQSxJQUMxQixJQUFJLENBQUNzVSxDQUFBLENBQUV0VSxDQUFDLEVBQUVtTCxJQUFBLENBQUtpQixFQUFBLENBQUdtSSxDQUFBLENBQUV2VSxDQUFDLEVBQUVtTCxJQUFJLEdBQ3ZCLE9BQU87RUFDZixPQUFPO0FBQ1g7QUFFQSxTQUFTeUgsR0FBR3ZhLEdBQUEsRUFBSztFQUNiLElBQUkySyxJQUFBLEdBQU8zSyxHQUFBLENBQUk2SSxXQUFBO0VBQ2Y3SSxHQUFBLENBQUl4QyxVQUFBLENBQVdvYixXQUFBLENBQVk1WSxHQUFHO0VBQzlCLE9BQU8ySyxJQUFBO0FBQ1g7QUFHQSxJQUFNcU0sZUFBQSxHQUFOLE1BQXNCO0VBQ2xCekgsWUFBWWpMLEdBQUEsRUFBSzZYLElBQUEsRUFBTTdXLElBQUEsRUFBTTtJQUN6QixLQUFLNlcsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBSzdXLElBQUEsR0FBT0EsSUFBQTtJQUdaLEtBQUtoSSxLQUFBLEdBQVE7SUFHYixLQUFLOEosS0FBQSxHQUFRLEVBQUM7SUFFZCxLQUFLNlEsT0FBQSxHQUFVO0lBQ2YsS0FBSzNULEdBQUEsR0FBTUEsR0FBQTtJQUNYLEtBQUs4WCxRQUFBLEdBQVdBLFFBQUEsQ0FBUzlYLEdBQUEsQ0FBSWpILElBQUEsQ0FBSzBOLE9BQUEsRUFBU3pHLEdBQUc7RUFDbEQ7RUFBQTtFQUFBO0VBR0ErWCxlQUFleE8sS0FBQSxFQUFPQyxHQUFBLEVBQUs7SUFDdkIsSUFBSUQsS0FBQSxJQUFTQyxHQUFBLEVBQ1Q7SUFDSixTQUFTbkcsQ0FBQSxHQUFJa0csS0FBQSxFQUFPbEcsQ0FBQSxHQUFJbUcsR0FBQSxFQUFLbkcsQ0FBQSxJQUN6QixLQUFLckQsR0FBQSxDQUFJa0wsUUFBQSxDQUFTN0gsQ0FBQyxFQUFFeUksT0FBQSxDQUFRO0lBQ2pDLEtBQUs5TCxHQUFBLENBQUlrTCxRQUFBLENBQVM4TSxNQUFBLENBQU96TyxLQUFBLEVBQU9DLEdBQUEsR0FBTUQsS0FBSztJQUMzQyxLQUFLb0ssT0FBQSxHQUFVO0VBQ25CO0VBQUE7RUFFQUQsWUFBQSxFQUFjO0lBQ1YsS0FBS3FFLGNBQUEsQ0FBZSxLQUFLL2UsS0FBQSxFQUFPLEtBQUtnSCxHQUFBLENBQUlrTCxRQUFBLENBQVNsUixNQUFNO0VBQzVEO0VBQUE7RUFBQTtFQUdBOFksWUFBWUQsS0FBQSxFQUFPeEMsTUFBQSxFQUFRclAsSUFBQSxFQUFNO0lBQzdCLElBQUlpWCxJQUFBLEdBQU87TUFBR2hPLEtBQUEsR0FBUSxLQUFLbkgsS0FBQSxDQUFNOUksTUFBQSxJQUFVO0lBQzNDLElBQUlrZSxPQUFBLEdBQVUzYSxJQUFBLENBQUtDLEdBQUEsQ0FBSXlNLEtBQUEsRUFBTzRJLEtBQUEsQ0FBTTdZLE1BQU07SUFDMUMsT0FBT2llLElBQUEsR0FBT0MsT0FBQSxLQUNURCxJQUFBLElBQVFoTyxLQUFBLEdBQVEsSUFBSSxLQUFLakssR0FBQSxHQUFNLEtBQUs4QyxLQUFBLENBQU9tVixJQUFBLEdBQU8sS0FBTSxDQUFDLEdBQ3JEM00sV0FBQSxDQUFZdUgsS0FBQSxDQUFNb0YsSUFBSSxDQUFDLEtBQUtwRixLQUFBLENBQU1vRixJQUFJLEVBQUV6SixJQUFBLENBQUtVLElBQUEsQ0FBS2lKLFFBQUEsS0FBYSxPQUNwRUYsSUFBQTtJQUNKLE9BQU9BLElBQUEsR0FBT2hPLEtBQUEsRUFBTztNQUNqQixLQUFLeUosV0FBQSxDQUFZO01BQ2pCLEtBQUsxVCxHQUFBLENBQUltTCxLQUFBLEdBQVFQLFNBQUE7TUFDakIsS0FBSzVSLEtBQUEsR0FBUSxLQUFLOEosS0FBQSxDQUFNc1YsR0FBQSxDQUFJO01BQzVCLEtBQUtwWSxHQUFBLEdBQU0sS0FBSzhDLEtBQUEsQ0FBTXNWLEdBQUEsQ0FBSTtNQUMxQm5PLEtBQUE7SUFDSjtJQUNBLE9BQU9BLEtBQUEsR0FBUTRJLEtBQUEsQ0FBTTdZLE1BQUEsRUFBUTtNQUN6QixLQUFLOEksS0FBQSxDQUFNRSxJQUFBLENBQUssS0FBS2hELEdBQUEsRUFBSyxLQUFLaEgsS0FBQSxHQUFRLENBQUM7TUFDeEMsSUFBSXFmLEtBQUEsR0FBUTtNQUNaLFNBQVNoVixDQUFBLEdBQUksS0FBS3JLLEtBQUEsRUFBT3FLLENBQUEsR0FBSTlGLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEtBQUt4RSxLQUFBLEdBQVEsR0FBRyxLQUFLZ0gsR0FBQSxDQUFJa0wsUUFBQSxDQUFTbFIsTUFBTSxHQUFHcUosQ0FBQSxJQUFLO1FBQ2xGLElBQUlnRCxJQUFBLEdBQU8sS0FBS3JHLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzdILENBQUM7UUFDOUIsSUFBSWdELElBQUEsQ0FBS2lGLFdBQUEsQ0FBWXVILEtBQUEsQ0FBTTVJLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBS3FPLFFBQUEsQ0FBU2pTLElBQUEsQ0FBSzNLLEdBQUcsR0FBRztVQUM1RDJjLEtBQUEsR0FBUWhWLENBQUE7VUFDUjtRQUNKO01BQ0o7TUFDQSxJQUFJZ1YsS0FBQSxHQUFRLElBQUk7UUFDWixJQUFJQSxLQUFBLEdBQVEsS0FBS3JmLEtBQUEsRUFBTztVQUNwQixLQUFLMmEsT0FBQSxHQUFVO1VBQ2YsS0FBS29FLGNBQUEsQ0FBZSxLQUFLL2UsS0FBQSxFQUFPcWYsS0FBSztRQUN6QztRQUNBLEtBQUtyWSxHQUFBLEdBQU0sS0FBS0EsR0FBQSxDQUFJa0wsUUFBQSxDQUFTLEtBQUtsUyxLQUFLO01BQzNDLE9BQ0s7UUFDRCxJQUFJdWYsUUFBQSxHQUFXckksWUFBQSxDQUFhRSxNQUFBLENBQU8sS0FBS3BRLEdBQUEsRUFBSzZTLEtBQUEsQ0FBTTVJLEtBQUssR0FBR29HLE1BQUEsRUFBUXJQLElBQUk7UUFDdkUsS0FBS2hCLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzhNLE1BQUEsQ0FBTyxLQUFLaGYsS0FBQSxFQUFPLEdBQUd1ZixRQUFRO1FBQ2hELEtBQUt2WSxHQUFBLEdBQU11WSxRQUFBO1FBQ1gsS0FBSzVFLE9BQUEsR0FBVTtNQUNuQjtNQUNBLEtBQUszYSxLQUFBLEdBQVE7TUFDYmlSLEtBQUE7SUFDSjtFQUNKO0VBQUE7RUFBQTtFQUdBbUosY0FBY3JhLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMVMsS0FBQSxFQUFPO0lBQzdDLElBQUlxZixLQUFBLEdBQVE7TUFBSUcsVUFBQTtJQUNoQixJQUFJeGYsS0FBQSxJQUFTLEtBQUs4ZSxRQUFBLENBQVM5ZSxLQUFBLEtBQ3RCd2YsVUFBQSxHQUFhLEtBQUtWLFFBQUEsQ0FBU1csT0FBQSxDQUFRemYsS0FBQSxHQUFRLEtBQUs4ZSxRQUFBLENBQVM5ZSxLQUFLLEdBQUdHLE1BQUEsSUFBVSxLQUFLNkcsR0FBQSxJQUNqRndZLFVBQUEsQ0FBV2hOLFdBQUEsQ0FBWXpTLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBUyxHQUFHO01BQ3BEMk0sS0FBQSxHQUFRLEtBQUtyWSxHQUFBLENBQUlrTCxRQUFBLENBQVNvTSxPQUFBLENBQVFrQixVQUFBLEVBQVksS0FBS3hmLEtBQUs7SUFDNUQsT0FDSztNQUNELFNBQVNxSyxDQUFBLEdBQUksS0FBS3JLLEtBQUEsRUFBTzBmLENBQUEsR0FBSW5iLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEtBQUt3QyxHQUFBLENBQUlrTCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLEdBQUksQ0FBQyxHQUFHQSxDQUFBLEdBQUlxVixDQUFBLEVBQUdyVixDQUFBLElBQUs7UUFDaEYsSUFBSXJJLEtBQUEsR0FBUSxLQUFLZ0YsR0FBQSxDQUFJa0wsUUFBQSxDQUFTN0gsQ0FBQztRQUMvQixJQUFJckksS0FBQSxDQUFNd1EsV0FBQSxDQUFZelMsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFTLEtBQUssQ0FBQyxLQUFLb00sUUFBQSxDQUFTYSxPQUFBLENBQVFDLEdBQUEsQ0FBSTVkLEtBQUssR0FBRztVQUNwRnFkLEtBQUEsR0FBUWhWLENBQUE7VUFDUjtRQUNKO01BQ0o7SUFDSjtJQUNBLElBQUlnVixLQUFBLEdBQVEsR0FDUixPQUFPO0lBQ1gsS0FBS04sY0FBQSxDQUFlLEtBQUsvZSxLQUFBLEVBQU9xZixLQUFLO0lBQ3JDLEtBQUtyZixLQUFBO0lBQ0wsT0FBTztFQUNYO0VBQ0FzYSxhQUFhdmEsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxUyxLQUFBLEVBQU9nSSxJQUFBLEVBQU07SUFDbEQsSUFBSWhHLEtBQUEsR0FBUSxLQUFLZ0YsR0FBQSxDQUFJa0wsUUFBQSxDQUFTbFMsS0FBSztJQUNuQyxJQUFJZ0MsS0FBQSxDQUFNbVEsS0FBQSxJQUFTSixVQUFBLElBQWMvUCxLQUFBLENBQU1VLEdBQUEsSUFBT1YsS0FBQSxDQUFNYyxVQUFBLEVBQ2hEZCxLQUFBLENBQU1tUSxLQUFBLEdBQVFMLGFBQUE7SUFDbEIsSUFBSSxDQUFDOVAsS0FBQSxDQUFNd1osTUFBQSxDQUFPemIsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFJLEdBQzlDLE9BQU87SUFDWCxLQUFLK1csY0FBQSxDQUFlLEtBQUsvZSxLQUFBLEVBQU9BLEtBQUs7SUFDckMsS0FBS0EsS0FBQTtJQUNMLE9BQU87RUFDWDtFQUNBcWEsbUJBQW1Cd0YsT0FBQSxFQUFTO0lBQ3hCLFNBQVM7TUFDTCxJQUFJMWYsTUFBQSxHQUFTMGYsT0FBQSxDQUFRM2YsVUFBQTtNQUNyQixJQUFJLENBQUNDLE1BQUEsRUFDRCxPQUFPO01BQ1gsSUFBSUEsTUFBQSxJQUFVLEtBQUs2RyxHQUFBLENBQUlsRSxVQUFBLEVBQVk7UUFDL0IsSUFBSUgsSUFBQSxHQUFPa2QsT0FBQSxDQUFRM2QsVUFBQTtRQUNuQixJQUFJUyxJQUFBLEVBQ0EsU0FBUzBILENBQUEsR0FBSSxLQUFLckssS0FBQSxFQUFPcUssQ0FBQSxHQUFJLEtBQUtyRCxHQUFBLENBQUlrTCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUs7VUFDeEQsSUFBSSxLQUFLckQsR0FBQSxDQUFJa0wsUUFBQSxDQUFTN0gsQ0FBQyxLQUFLMUgsSUFBQSxFQUN4QixPQUFPMEgsQ0FBQTtRQUNmO1FBQ0osT0FBTztNQUNYO01BQ0F3VixPQUFBLEdBQVUxZixNQUFBO0lBQ2Q7RUFDSjtFQUFBO0VBQUE7RUFHQW9hLGVBQWV4YSxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTWhJLEtBQUEsRUFBT3FFLEdBQUEsRUFBSztJQUN6RCxTQUFTZ0csQ0FBQSxHQUFJLEtBQUtySyxLQUFBLEVBQU9xSyxDQUFBLEdBQUksS0FBS3JELEdBQUEsQ0FBSWtMLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUN4RCxJQUFJZ0QsSUFBQSxHQUFPLEtBQUtyRyxHQUFBLENBQUlrTCxRQUFBLENBQVM3SCxDQUFDO01BQzlCLElBQUlnRCxJQUFBLFlBQWdCNkssWUFBQSxFQUFjO1FBQzlCLElBQUk0SCxTQUFBLEdBQVcsS0FBS2hCLFFBQUEsQ0FBU2EsT0FBQSxDQUFRSSxHQUFBLENBQUkxUyxJQUFJO1FBQzdDLElBQUl5UyxTQUFBLElBQVksUUFBUUEsU0FBQSxJQUFZOWYsS0FBQSxFQUNoQyxPQUFPO1FBQ1gsSUFBSWdnQixPQUFBLEdBQVUzUyxJQUFBLENBQUszSyxHQUFBO1VBQUt1ZCxPQUFBO1FBSXhCLElBQUlDLE1BQUEsR0FBUyxLQUFLWixRQUFBLENBQVNVLE9BQU8sS0FDOUIsRUFBRWpnQixJQUFBLENBQUsyTSxNQUFBLElBQVVXLElBQUEsQ0FBS3ROLElBQUEsSUFBUXNOLElBQUEsQ0FBS3ROLElBQUEsQ0FBSzJNLE1BQUEsSUFBVVcsSUFBQSxDQUFLbUcsT0FBQSxDQUFRelMsU0FBQSxJQUFhaEIsSUFBQSxDQUFLZ1csSUFBQSxJQUM3RTFJLElBQUEsQ0FBSzhFLEtBQUEsSUFBU0osVUFBQSxJQUFja0gsYUFBQSxDQUFjeEcsU0FBQSxFQUFXcEYsSUFBQSxDQUFLb0YsU0FBUztRQUMzRSxJQUFJLENBQUN5TixNQUFBLElBQVU3UyxJQUFBLENBQUttTyxNQUFBLENBQU96YixJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUksR0FBRztVQUMxRCxLQUFLK1csY0FBQSxDQUFlLEtBQUsvZSxLQUFBLEVBQU9xSyxDQUFDO1VBQ2pDLElBQUlnRCxJQUFBLENBQUszSyxHQUFBLElBQU9zZCxPQUFBLEVBQ1osS0FBS3JGLE9BQUEsR0FBVTtVQUNuQixLQUFLM2EsS0FBQTtVQUNMLE9BQU87UUFDWCxXQUNTLENBQUNrZ0IsTUFBQSxLQUFXRCxPQUFBLEdBQVUsS0FBS0UsZUFBQSxDQUFnQjlTLElBQUEsRUFBTXROLElBQUEsRUFBTTBTLFNBQUEsRUFBV0MsU0FBQSxFQUFXMUssSUFBQSxFQUFNM0QsR0FBRyxJQUFJO1VBQy9GLEtBQUswYSxjQUFBLENBQWUsS0FBSy9lLEtBQUEsRUFBT3FLLENBQUM7VUFDakMsS0FBS3JELEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUyxLQUFLbFMsS0FBSyxJQUFJaWdCLE9BQUE7VUFDaEMsSUFBSUEsT0FBQSxDQUFRbmQsVUFBQSxFQUFZO1lBQ3BCbWQsT0FBQSxDQUFROU4sS0FBQSxHQUFRTCxhQUFBO1lBQ2hCbU8sT0FBQSxDQUFROUcsY0FBQSxDQUFlblIsSUFBQSxFQUFNM0QsR0FBQSxHQUFNLENBQUM7WUFDcEM0YixPQUFBLENBQVE5TixLQUFBLEdBQVFQLFNBQUE7VUFDcEI7VUFDQSxLQUFLK0ksT0FBQSxHQUFVO1VBQ2YsS0FBSzNhLEtBQUE7VUFDTCxPQUFPO1FBQ1g7UUFDQTtNQUNKO0lBQ0o7SUFDQSxPQUFPO0VBQ1g7RUFBQTtFQUFBO0VBR0FtZ0IsZ0JBQWdCOVMsSUFBQSxFQUFNdE4sSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU0zRCxHQUFBLEVBQUs7SUFDekQsSUFBSWdKLElBQUEsQ0FBSzhFLEtBQUEsSUFBU3BTLElBQUEsQ0FBS3FjLE1BQUEsSUFBVSxDQUFDL08sSUFBQSxDQUFLNkUsUUFBQSxDQUFTbFIsTUFBQSxJQUM1QyxDQUFDcU0sSUFBQSxDQUFLdE4sSUFBQSxDQUFLME4sT0FBQSxDQUFRZ0osRUFBQSxDQUFHMVcsSUFBQSxDQUFLME4sT0FBTyxLQUNsQyxDQUFDd0wsYUFBQSxDQUFjeEcsU0FBQSxFQUFXcEYsSUFBQSxDQUFLb0YsU0FBUyxLQUFLLENBQUNDLFNBQUEsQ0FBVStELEVBQUEsQ0FBR3BKLElBQUEsQ0FBS3FGLFNBQVMsR0FDekUsT0FBTztJQUNYLElBQUkwTixPQUFBLEdBQVVsSSxZQUFBLENBQWFkLE1BQUEsQ0FBTyxLQUFLcFEsR0FBQSxFQUFLakgsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU0zRCxHQUFHO0lBQ2pGLElBQUkrYixPQUFBLENBQVF0ZCxVQUFBLEVBQVk7TUFDcEJzZCxPQUFBLENBQVFsTyxRQUFBLEdBQVc3RSxJQUFBLENBQUs2RSxRQUFBO01BQ3hCN0UsSUFBQSxDQUFLNkUsUUFBQSxHQUFXLEVBQUM7TUFDakIsU0FBU21PLEVBQUEsSUFBTUQsT0FBQSxDQUFRbE8sUUFBQSxFQUNuQm1PLEVBQUEsQ0FBR2xnQixNQUFBLEdBQVNpZ0IsT0FBQTtJQUNwQjtJQUNBL1MsSUFBQSxDQUFLeUYsT0FBQSxDQUFRO0lBQ2IsT0FBT3NOLE9BQUE7RUFDWDtFQUFBO0VBRUE1RixRQUFRemEsSUFBQSxFQUFNMFMsU0FBQSxFQUFXQyxTQUFBLEVBQVcxSyxJQUFBLEVBQU0zRCxHQUFBLEVBQUs7SUFDM0MsSUFBSTFCLElBQUEsR0FBT3VWLFlBQUEsQ0FBYWQsTUFBQSxDQUFPLEtBQUtwUSxHQUFBLEVBQUtqSCxJQUFBLEVBQU0wUyxTQUFBLEVBQVdDLFNBQUEsRUFBVzFLLElBQUEsRUFBTTNELEdBQUc7SUFDOUUsSUFBSTFCLElBQUEsQ0FBS0csVUFBQSxFQUNMSCxJQUFBLENBQUt3VyxjQUFBLENBQWVuUixJQUFBLEVBQU0zRCxHQUFBLEdBQU0sQ0FBQztJQUNyQyxLQUFLMkMsR0FBQSxDQUFJa0wsUUFBQSxDQUFTOE0sTUFBQSxDQUFPLEtBQUtoZixLQUFBLElBQVMsR0FBRzJDLElBQUk7SUFDOUMsS0FBS2dZLE9BQUEsR0FBVTtFQUNuQjtFQUNBVCxZQUFZN0gsTUFBQSxFQUFRckssSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0lBQzNCLElBQUlnSixJQUFBLEdBQU8sS0FBS3JOLEtBQUEsR0FBUSxLQUFLZ0gsR0FBQSxDQUFJa0wsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLEtBQUtnRyxHQUFBLENBQUlrTCxRQUFBLENBQVMsS0FBS2xTLEtBQUssSUFBSTtJQUNuRixJQUFJcU4sSUFBQSxJQUFRQSxJQUFBLENBQUsrRSxhQUFBLENBQWNDLE1BQU0sTUFDaENBLE1BQUEsSUFBVWhGLElBQUEsQ0FBS2dGLE1BQUEsSUFBVSxDQUFDaEYsSUFBQSxDQUFLZ0YsTUFBQSxDQUFPbUQsSUFBQSxDQUFLUyxLQUFBLENBQU0vVixVQUFBLEdBQWE7TUFDL0QsS0FBS0YsS0FBQTtJQUNULE9BQ0s7TUFDRCxJQUFJMkMsSUFBQSxHQUFPLElBQUlvUixjQUFBLENBQWUsS0FBSy9NLEdBQUEsRUFBS3FMLE1BQUEsRUFBUXJLLElBQUEsRUFBTTNELEdBQUc7TUFDekQsS0FBSzJDLEdBQUEsQ0FBSWtMLFFBQUEsQ0FBUzhNLE1BQUEsQ0FBTyxLQUFLaGYsS0FBQSxJQUFTLEdBQUcyQyxJQUFJO01BQzlDLEtBQUtnWSxPQUFBLEdBQVU7SUFDbkI7RUFDSjtFQUFBO0VBQUE7RUFHQUYsa0JBQUEsRUFBb0I7SUFDaEIsSUFBSWxOLFNBQUEsR0FBWSxLQUFLdkcsR0FBQSxDQUFJa0wsUUFBQSxDQUFTLEtBQUtsUyxLQUFBLEdBQVEsQ0FBQztNQUFHRyxNQUFBLEdBQVMsS0FBSzZHLEdBQUE7SUFDakUsT0FBT3VHLFNBQUEsWUFBcUIySixZQUFBLEVBQWM7TUFDdEMvVyxNQUFBLEdBQVNvTixTQUFBO01BQ1RBLFNBQUEsR0FBWXBOLE1BQUEsQ0FBTytSLFFBQUEsQ0FBUy9SLE1BQUEsQ0FBTytSLFFBQUEsQ0FBU2xSLE1BQUEsR0FBUyxDQUFDO0lBQzFEO0lBQ0EsSUFBSSxDQUFDdU0sU0FBQTtJQUFBO0lBQ0QsRUFBRUEsU0FBQSxZQUFxQm1MLFlBQUEsS0FDdkIsTUFBTTdXLElBQUEsQ0FBSzBMLFNBQUEsQ0FBVXhOLElBQUEsQ0FBS2dXLElBQUksS0FDN0IsS0FBSy9OLElBQUEsQ0FBS3NZLHFCQUFBLElBQXlCLE1BQU16ZSxJQUFBLENBQUswTCxTQUFBLENBQVV4TixJQUFBLENBQUtnVyxJQUFJLEdBQUk7TUFFdEUsS0FBS2xRLE1BQUEsSUFBVUYsTUFBQSxLQUFXNEgsU0FBQSxJQUFhQSxTQUFBLENBQVU3SyxHQUFBLENBQUlYLGVBQUEsSUFBbUIsU0FDcEUsS0FBS3dlLFdBQUEsQ0FBWSxPQUFPcGdCLE1BQU07TUFDbEMsS0FBS29nQixXQUFBLENBQVksTUFBTSxLQUFLdlosR0FBRztJQUNuQztFQUNKO0VBQ0F1WixZQUFZemUsUUFBQSxFQUFVM0IsTUFBQSxFQUFRO0lBQzFCLElBQUlBLE1BQUEsSUFBVSxLQUFLNkcsR0FBQSxJQUFPLEtBQUtoSCxLQUFBLEdBQVFHLE1BQUEsQ0FBTytSLFFBQUEsQ0FBU2xSLE1BQUEsSUFBVWIsTUFBQSxDQUFPK1IsUUFBQSxDQUFTLEtBQUtsUyxLQUFLLEVBQUUyUyxXQUFBLENBQVk3USxRQUFRLEdBQUc7TUFDaEgsS0FBSzlCLEtBQUE7SUFDVCxPQUNLO01BQ0QsSUFBSTBDLEdBQUEsR0FBTTlCLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBY3ZVLFFBQVE7TUFDekMsSUFBSUEsUUFBQSxJQUFZLE9BQU87UUFDbkJZLEdBQUEsQ0FBSThkLFNBQUEsR0FBWTtRQUNoQjlkLEdBQUEsQ0FBSStkLEdBQUEsR0FBTTtNQUNkO01BQ0EsSUFBSTNlLFFBQUEsSUFBWSxNQUNaWSxHQUFBLENBQUk4ZCxTQUFBLEdBQVk7TUFDcEIsSUFBSUUsSUFBQSxHQUFPLElBQUk1TSxvQkFBQSxDQUFxQixLQUFLOU0sR0FBQSxFQUFLLEVBQUMsRUFBR3RFLEdBQUEsRUFBSyxJQUFJO01BQzNELElBQUl2QyxNQUFBLElBQVUsS0FBSzZHLEdBQUEsRUFDZjdHLE1BQUEsQ0FBTytSLFFBQUEsQ0FBU2xJLElBQUEsQ0FBSzBXLElBQUksT0FFekJ2Z0IsTUFBQSxDQUFPK1IsUUFBQSxDQUFTOE0sTUFBQSxDQUFPLEtBQUtoZixLQUFBLElBQVMsR0FBRzBnQixJQUFJO01BQ2hELEtBQUsvRixPQUFBLEdBQVU7SUFDbkI7RUFDSjtFQUNBMkUsU0FBU3ZmLElBQUEsRUFBTTtJQUNYLE9BQU8sS0FBSzhlLElBQUEsS0FBUzllLElBQUEsSUFBUSxLQUFLOGUsSUFBQSxJQUFROWUsSUFBQSxDQUFLTSxRQUFBLElBQVksS0FBS04sSUFBQSxDQUFLNkosUUFBQSxDQUFTLEtBQUtpVixJQUFBLENBQUszZSxVQUFVO0VBQ3RHO0FBQ0o7QUFNQSxTQUFTNGUsU0FBUzZCLElBQUEsRUFBTUMsVUFBQSxFQUFZO0VBQ2hDLElBQUlDLE9BQUEsR0FBVUQsVUFBQTtJQUFZRSxLQUFBLEdBQVFELE9BQUEsQ0FBUTNPLFFBQUEsQ0FBU2xSLE1BQUE7RUFDbkQsSUFBSStmLEVBQUEsR0FBS0osSUFBQSxDQUFLNUcsVUFBQTtJQUFZNEYsT0FBQSxHQUFVLG1CQUFJcUIsR0FBQTtJQUFLdkIsT0FBQSxHQUFVLEVBQUM7RUFDeER3QixLQUFBLEVBQU8sT0FBT0YsRUFBQSxHQUFLLEdBQUc7SUFDbEIsSUFBSXBlLElBQUE7SUFDSixTQUFTO01BQ0wsSUFBSW1lLEtBQUEsRUFBTztRQUNQLElBQUl6VCxJQUFBLEdBQU93VCxPQUFBLENBQVEzTyxRQUFBLENBQVM0TyxLQUFBLEdBQVEsQ0FBQztRQUNyQyxJQUFJelQsSUFBQSxZQUFnQjZKLFlBQUEsRUFBYztVQUM5QjJKLE9BQUEsR0FBVXhULElBQUE7VUFDVnlULEtBQUEsR0FBUXpULElBQUEsQ0FBSzZFLFFBQUEsQ0FBU2xSLE1BQUE7UUFDMUIsT0FDSztVQUNEMkIsSUFBQSxHQUFPMEssSUFBQTtVQUNQeVQsS0FBQTtVQUNBO1FBQ0o7TUFDSixXQUNTRCxPQUFBLElBQVdELFVBQUEsRUFBWTtRQUM1QixNQUFNSyxLQUFBO01BQ1YsT0FDSztRQUVESCxLQUFBLEdBQVFELE9BQUEsQ0FBUTFnQixNQUFBLENBQU8rUixRQUFBLENBQVNvTSxPQUFBLENBQVF1QyxPQUFPO1FBQy9DQSxPQUFBLEdBQVVBLE9BQUEsQ0FBUTFnQixNQUFBO01BQ3RCO0lBQ0o7SUFDQSxJQUFJSixJQUFBLEdBQU80QyxJQUFBLENBQUs1QyxJQUFBO0lBQ2hCLElBQUksQ0FBQ0EsSUFBQSxFQUNEO0lBQ0osSUFBSUEsSUFBQSxJQUFRNGdCLElBQUEsQ0FBSzNlLEtBQUEsQ0FBTStlLEVBQUEsR0FBSyxDQUFDLEdBQ3pCO0lBQ0osRUFBRUEsRUFBQTtJQUNGcEIsT0FBQSxDQUFRdUIsR0FBQSxDQUFJdmUsSUFBQSxFQUFNb2UsRUFBRTtJQUNwQnRCLE9BQUEsQ0FBUXpWLElBQUEsQ0FBS3JILElBQUk7RUFDckI7RUFDQSxPQUFPO0lBQUUzQyxLQUFBLEVBQU8rZ0IsRUFBQTtJQUFJcEIsT0FBQTtJQUFTRixPQUFBLEVBQVNBLE9BQUEsQ0FBUTBCLE9BQUEsQ0FBUTtFQUFFO0FBQzVEO0FBQ0EsU0FBU0MsWUFBWXpDLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQ3ZCLE9BQU9ELENBQUEsQ0FBRW5KLElBQUEsQ0FBS2pPLElBQUEsR0FBT3FYLENBQUEsQ0FBRXBKLElBQUEsQ0FBS2pPLElBQUE7QUFDaEM7QUFLQSxTQUFTb1MsU0FBU3haLE1BQUEsRUFBUTBkLElBQUEsRUFBTXdELFFBQUEsRUFBVUMsTUFBQSxFQUFRO0VBQzlDLElBQUlDLE1BQUEsR0FBUzFELElBQUEsQ0FBSzBELE1BQUEsQ0FBT3BoQixNQUFNO0lBQUdrQyxNQUFBLEdBQVM7RUFFM0MsSUFBSWtmLE1BQUEsQ0FBT3ZnQixNQUFBLElBQVUsR0FBRztJQUNwQixTQUFTcUosQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWxLLE1BQUEsQ0FBTzRaLFVBQUEsRUFBWTFQLENBQUEsSUFBSztNQUN4QyxJQUFJckksS0FBQSxHQUFRN0IsTUFBQSxDQUFPNkIsS0FBQSxDQUFNcUksQ0FBQztNQUMxQmlYLE1BQUEsQ0FBT3RmLEtBQUEsRUFBT3VmLE1BQUEsRUFBUTFELElBQUEsQ0FBSzJELFFBQUEsQ0FBU25mLE1BQUEsRUFBUUwsS0FBSyxHQUFHcUksQ0FBQztNQUNyRGhJLE1BQUEsSUFBVUwsS0FBQSxDQUFNTCxRQUFBO0lBQ3BCO0lBQ0E7RUFDSjtFQUNBLElBQUk4ZixTQUFBLEdBQVk7SUFBR2xTLE1BQUEsR0FBUyxFQUFDO0lBQUdtUyxRQUFBLEdBQVc7RUFDM0MsU0FBU0MsV0FBQSxHQUFjLEtBQUs7SUFDeEIsSUFBSXRQLE1BQUEsRUFBUXVQLE9BQUE7SUFDWixPQUFPSCxTQUFBLEdBQVlGLE1BQUEsQ0FBT3ZnQixNQUFBLElBQVV1Z0IsTUFBQSxDQUFPRSxTQUFTLEVBQUUvZ0IsRUFBQSxJQUFNMkIsTUFBQSxFQUFRO01BQ2hFLElBQUlnTCxJQUFBLEdBQU9rVSxNQUFBLENBQU9FLFNBQUEsRUFBVztNQUM3QixJQUFJcFUsSUFBQSxDQUFLZ0YsTUFBQSxFQUFRO1FBQ2IsSUFBSSxDQUFDQSxNQUFBLEVBQ0RBLE1BQUEsR0FBU2hGLElBQUEsTUFFVCxDQUFDdVUsT0FBQSxLQUFZQSxPQUFBLEdBQVUsQ0FBQ3ZQLE1BQU0sSUFBSXJJLElBQUEsQ0FBS3FELElBQUk7TUFDbkQ7SUFDSjtJQUNBLElBQUlnRixNQUFBLEVBQVE7TUFDUixJQUFJdVAsT0FBQSxFQUFTO1FBQ1RBLE9BQUEsQ0FBUUMsSUFBQSxDQUFLVCxXQUFXO1FBQ3hCLFNBQVMvVyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdVgsT0FBQSxDQUFRNWdCLE1BQUEsRUFBUXFKLENBQUEsSUFDaENnWCxRQUFBLENBQVNPLE9BQUEsQ0FBUXZYLENBQUMsR0FBR3NYLFdBQUEsRUFBYSxDQUFDLENBQUNELFFBQVE7TUFDcEQsT0FDSztRQUNETCxRQUFBLENBQVNoUCxNQUFBLEVBQVFzUCxXQUFBLEVBQWEsQ0FBQyxDQUFDRCxRQUFRO01BQzVDO0lBQ0o7SUFDQSxJQUFJMWYsS0FBQSxFQUFPaEMsS0FBQTtJQUNYLElBQUkwaEIsUUFBQSxFQUFVO01BQ1YxaEIsS0FBQSxHQUFRO01BQ1JnQyxLQUFBLEdBQVEwZixRQUFBO01BQ1JBLFFBQUEsR0FBVztJQUNmLFdBQ1NDLFdBQUEsR0FBY3hoQixNQUFBLENBQU80WixVQUFBLEVBQVk7TUFDdEMvWixLQUFBLEdBQVEyaEIsV0FBQTtNQUNSM2YsS0FBQSxHQUFRN0IsTUFBQSxDQUFPNkIsS0FBQSxDQUFNMmYsV0FBQSxFQUFhO0lBQ3RDLE9BQ0s7TUFDRDtJQUNKO0lBQ0EsU0FBU3RYLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlrRixNQUFBLENBQU92TyxNQUFBLEVBQVFxSixDQUFBLElBQy9CLElBQUlrRixNQUFBLENBQU9sRixDQUFDLEVBQUUzSixFQUFBLElBQU0yQixNQUFBLEVBQ2hCa04sTUFBQSxDQUFPeVAsTUFBQSxDQUFPM1UsQ0FBQSxJQUFLLENBQUM7SUFDNUIsT0FBT29YLFNBQUEsR0FBWUYsTUFBQSxDQUFPdmdCLE1BQUEsSUFBVXVnQixNQUFBLENBQU9FLFNBQVMsRUFBRWhoQixJQUFBLElBQVE0QixNQUFBLElBQVVrZixNQUFBLENBQU9FLFNBQVMsRUFBRS9nQixFQUFBLEdBQUsyQixNQUFBLEVBQzNGa04sTUFBQSxDQUFPdkYsSUFBQSxDQUFLdVgsTUFBQSxDQUFPRSxTQUFBLEVBQVcsQ0FBQztJQUNuQyxJQUFJalIsR0FBQSxHQUFNbk8sTUFBQSxHQUFTTCxLQUFBLENBQU1MLFFBQUE7SUFDekIsSUFBSUssS0FBQSxDQUFNMEssTUFBQSxFQUFRO01BQ2QsSUFBSW9WLEtBQUEsR0FBUXRSLEdBQUE7TUFDWixJQUFJaVIsU0FBQSxHQUFZRixNQUFBLENBQU92Z0IsTUFBQSxJQUFVdWdCLE1BQUEsQ0FBT0UsU0FBUyxFQUFFaGhCLElBQUEsR0FBT3FoQixLQUFBLEVBQ3REQSxLQUFBLEdBQVFQLE1BQUEsQ0FBT0UsU0FBUyxFQUFFaGhCLElBQUE7TUFDOUIsU0FBUzRKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlrRixNQUFBLENBQU92TyxNQUFBLEVBQVFxSixDQUFBLElBQy9CLElBQUlrRixNQUFBLENBQU9sRixDQUFDLEVBQUUzSixFQUFBLEdBQUtvaEIsS0FBQSxFQUNmQSxLQUFBLEdBQVF2UyxNQUFBLENBQU9sRixDQUFDLEVBQUUzSixFQUFBO01BQzFCLElBQUlvaEIsS0FBQSxHQUFRdFIsR0FBQSxFQUFLO1FBQ2JrUixRQUFBLEdBQVcxZixLQUFBLENBQU00YSxHQUFBLENBQUlrRixLQUFBLEdBQVF6ZixNQUFNO1FBQ25DTCxLQUFBLEdBQVFBLEtBQUEsQ0FBTTRhLEdBQUEsQ0FBSSxHQUFHa0YsS0FBQSxHQUFRemYsTUFBTTtRQUNuQ21PLEdBQUEsR0FBTXNSLEtBQUE7UUFDTjloQixLQUFBLEdBQVE7TUFDWjtJQUNKLE9BQ0s7TUFDRCxPQUFPeWhCLFNBQUEsR0FBWUYsTUFBQSxDQUFPdmdCLE1BQUEsSUFBVXVnQixNQUFBLENBQU9FLFNBQVMsRUFBRS9nQixFQUFBLEdBQUs4UCxHQUFBLEVBQ3ZEaVIsU0FBQTtJQUNSO0lBQ0EsSUFBSWhQLFNBQUEsR0FBWXpRLEtBQUEsQ0FBTXViLFFBQUEsSUFBWSxDQUFDdmIsS0FBQSxDQUFNa1gsTUFBQSxHQUFTM0osTUFBQSxDQUFPNE8sTUFBQSxDQUFPNEQsQ0FBQSxJQUFLLENBQUNBLENBQUEsQ0FBRTFLLE1BQU0sSUFBSTlILE1BQUEsQ0FBT3VJLEtBQUEsQ0FBTTtJQUMvRndKLE1BQUEsQ0FBT3RmLEtBQUEsRUFBT3lRLFNBQUEsRUFBV29MLElBQUEsQ0FBSzJELFFBQUEsQ0FBU25mLE1BQUEsRUFBUUwsS0FBSyxHQUFHaEMsS0FBSztJQUM1RHFDLE1BQUEsR0FBU21PLEdBQUE7RUFDYjtBQUNKO0FBR0EsU0FBU3NLLFNBQVNwWSxHQUFBLEVBQUs7RUFDbkIsSUFBSUEsR0FBQSxDQUFJWixRQUFBLElBQVksUUFBUVksR0FBQSxDQUFJWixRQUFBLElBQVksTUFBTTtJQUM5QyxJQUFJa2dCLE1BQUEsR0FBU3RmLEdBQUEsQ0FBSTZELEtBQUEsQ0FBTW1ZLE9BQUE7SUFDdkJoYyxHQUFBLENBQUk2RCxLQUFBLENBQU1tWSxPQUFBLEdBQVVzRCxNQUFBLEdBQVM7SUFDN0JDLE1BQUEsQ0FBTy9ZLGdCQUFBLENBQWlCeEcsR0FBRyxFQUFFd2YsU0FBQTtJQUM3QnhmLEdBQUEsQ0FBSTZELEtBQUEsQ0FBTW1ZLE9BQUEsR0FBVXNELE1BQUE7RUFDeEI7QUFDSjtBQUVBLFNBQVM1RyxtQkFBbUJ1RixJQUFBLEVBQU01SyxJQUFBLEVBQU10VixJQUFBLEVBQU1DLEVBQUEsRUFBSTtFQUM5QyxTQUFTMkosQ0FBQSxHQUFJLEdBQUdoRyxHQUFBLEdBQU0sR0FBR2dHLENBQUEsR0FBSXNXLElBQUEsQ0FBSzVHLFVBQUEsSUFBYzFWLEdBQUEsSUFBTzNELEVBQUEsR0FBSztJQUN4RCxJQUFJc0IsS0FBQSxHQUFRMmUsSUFBQSxDQUFLM2UsS0FBQSxDQUFNcUksQ0FBQSxFQUFHO01BQUc4WCxVQUFBLEdBQWE5ZCxHQUFBO0lBQzFDQSxHQUFBLElBQU9yQyxLQUFBLENBQU1MLFFBQUE7SUFDYixJQUFJLENBQUNLLEtBQUEsQ0FBTTBLLE1BQUEsRUFDUDtJQUNKLElBQUkwVixHQUFBLEdBQU1wZ0IsS0FBQSxDQUFNK1QsSUFBQTtJQUNoQixPQUFPMUwsQ0FBQSxHQUFJc1csSUFBQSxDQUFLNUcsVUFBQSxFQUFZO01BQ3hCLElBQUkxTSxJQUFBLEdBQU9zVCxJQUFBLENBQUszZSxLQUFBLENBQU1xSSxDQUFBLEVBQUc7TUFDekJoRyxHQUFBLElBQU9nSixJQUFBLENBQUsxTCxRQUFBO01BQ1osSUFBSSxDQUFDMEwsSUFBQSxDQUFLWCxNQUFBLEVBQ047TUFDSjBWLEdBQUEsSUFBTy9VLElBQUEsQ0FBSzBJLElBQUE7SUFDaEI7SUFDQSxJQUFJMVIsR0FBQSxJQUFPNUQsSUFBQSxFQUFNO01BQ2IsSUFBSTRELEdBQUEsSUFBTzNELEVBQUEsSUFBTTBoQixHQUFBLENBQUl0SyxLQUFBLENBQU1wWCxFQUFBLEdBQUtxVixJQUFBLENBQUsvVSxNQUFBLEdBQVNtaEIsVUFBQSxFQUFZemhCLEVBQUEsR0FBS3loQixVQUFVLEtBQUtwTSxJQUFBLEVBQzFFLE9BQU9yVixFQUFBLEdBQUtxVixJQUFBLENBQUsvVSxNQUFBO01BQ3JCLElBQUlxZSxLQUFBLEdBQVE4QyxVQUFBLEdBQWF6aEIsRUFBQSxHQUFLMGhCLEdBQUEsQ0FBSUMsV0FBQSxDQUFZdE0sSUFBQSxFQUFNclYsRUFBQSxHQUFLeWhCLFVBQUEsR0FBYSxDQUFDLElBQUk7TUFDM0UsSUFBSTlDLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEdBQVF0SixJQUFBLENBQUsvVSxNQUFBLEdBQVNtaEIsVUFBQSxJQUFjMWhCLElBQUEsRUFDbEQsT0FBTzBoQixVQUFBLEdBQWE5QyxLQUFBO01BQ3hCLElBQUk1ZSxJQUFBLElBQVFDLEVBQUEsSUFBTTBoQixHQUFBLENBQUlwaEIsTUFBQSxJQUFXTixFQUFBLEdBQUtxVixJQUFBLENBQUsvVSxNQUFBLEdBQVVtaEIsVUFBQSxJQUNqREMsR0FBQSxDQUFJdEssS0FBQSxDQUFNcFgsRUFBQSxHQUFLeWhCLFVBQUEsRUFBWXpoQixFQUFBLEdBQUt5aEIsVUFBQSxHQUFhcE0sSUFBQSxDQUFLL1UsTUFBTSxLQUFLK1UsSUFBQSxFQUM3RCxPQUFPclYsRUFBQTtJQUNmO0VBQ0o7RUFDQSxPQUFPO0FBQ1g7QUFNQSxTQUFTdVgsYUFBYUQsS0FBQSxFQUFPdlgsSUFBQSxFQUFNQyxFQUFBLEVBQUlzSCxJQUFBLEVBQU1zYSxXQUFBLEVBQWE7RUFDdEQsSUFBSWpSLE1BQUEsR0FBUyxFQUFDO0VBQ2QsU0FBU2hILENBQUEsR0FBSSxHQUFHakosR0FBQSxHQUFNLEdBQUdpSixDQUFBLEdBQUkyTixLQUFBLENBQU1oWCxNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDNUMsSUFBSXJJLEtBQUEsR0FBUWdXLEtBQUEsQ0FBTTNOLENBQUM7TUFBR2tHLEtBQUEsR0FBUW5QLEdBQUE7TUFBS29QLEdBQUEsR0FBTXBQLEdBQUEsSUFBT1ksS0FBQSxDQUFNMEwsSUFBQTtJQUN0RCxJQUFJNkMsS0FBQSxJQUFTN1AsRUFBQSxJQUFNOFAsR0FBQSxJQUFPL1AsSUFBQSxFQUFNO01BQzVCNFEsTUFBQSxDQUFPckgsSUFBQSxDQUFLaEksS0FBSztJQUNyQixPQUNLO01BQ0QsSUFBSXVPLEtBQUEsR0FBUTlQLElBQUEsRUFDUjRRLE1BQUEsQ0FBT3JILElBQUEsQ0FBS2hJLEtBQUEsQ0FBTThWLEtBQUEsQ0FBTSxHQUFHclgsSUFBQSxHQUFPOFAsS0FBQSxFQUFPdkksSUFBSSxDQUFDO01BQ2xELElBQUlzYSxXQUFBLEVBQWE7UUFDYmpSLE1BQUEsQ0FBT3JILElBQUEsQ0FBS3NZLFdBQVc7UUFDdkJBLFdBQUEsR0FBYztNQUNsQjtNQUNBLElBQUk5UixHQUFBLEdBQU05UCxFQUFBLEVBQ04yUSxNQUFBLENBQU9ySCxJQUFBLENBQUtoSSxLQUFBLENBQU04VixLQUFBLENBQU1wWCxFQUFBLEdBQUs2UCxLQUFBLEVBQU92TyxLQUFBLENBQU0wTCxJQUFBLEVBQU0xRixJQUFJLENBQUM7SUFDN0Q7RUFDSjtFQUNBLE9BQU9xSixNQUFBO0FBQ1g7QUFFQSxTQUFTa1IsaUJBQWlCdmEsSUFBQSxFQUFNd2EsTUFBQSxHQUFTLE1BQU07RUFDM0MsSUFBSXhmLE1BQUEsR0FBU2dGLElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0lBQUdoTixJQUFBLEdBQU1tRSxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBO0VBQ3hELElBQUksQ0FBQy9CLE1BQUEsQ0FBT0MsU0FBQSxFQUNSLE9BQU87RUFDWCxJQUFJc0osV0FBQSxHQUFjdkUsSUFBQSxDQUFLa0UsT0FBQSxDQUFRSyxXQUFBLENBQVl2SixNQUFBLENBQU9DLFNBQVM7SUFBR3dmLFFBQUEsR0FBV2xXLFdBQUEsSUFBZUEsV0FBQSxDQUFZbUIsSUFBQSxJQUFRO0VBQzVHLElBQUlpSCxJQUFBLEdBQU8zTSxJQUFBLENBQUtrRSxPQUFBLENBQVFDLFVBQUEsQ0FBV25KLE1BQUEsQ0FBT0MsU0FBQSxFQUFXRCxNQUFBLENBQU9FLFdBQUEsRUFBYSxDQUFDO0VBQzFFLElBQUl5UixJQUFBLEdBQU8sR0FDUCxPQUFPO0VBQ1gsSUFBSXhFLEtBQUEsR0FBUXRNLElBQUEsQ0FBSWtMLE9BQUEsQ0FBUTRGLElBQUk7SUFBR0QsTUFBQTtJQUFRL0UsU0FBQTtFQUN2QyxJQUFJNU0sa0JBQUEsQ0FBbUJDLE1BQU0sR0FBRztJQUM1QjBSLE1BQUEsR0FBU0MsSUFBQTtJQUNULE9BQU9wSSxXQUFBLElBQWUsQ0FBQ0EsV0FBQSxDQUFZeE0sSUFBQSxFQUMvQndNLFdBQUEsR0FBY0EsV0FBQSxDQUFZcE0sTUFBQTtJQUM5QixJQUFJdWlCLGVBQUEsR0FBa0JuVyxXQUFBLENBQVl4TSxJQUFBO0lBQ2xDLElBQUl3TSxXQUFBLElBQWVtVyxlQUFBLENBQWdCdEcsTUFBQSxJQUFVMWMsd0JBQUEsQ0FBQWlqQixhQUFBLENBQWNDLFlBQUEsQ0FBYUYsZUFBZSxLQUFLblcsV0FBQSxDQUFZcE0sTUFBQSxJQUNqRyxFQUFFdWlCLGVBQUEsQ0FBZ0JuRixRQUFBLElBQVloYixRQUFBLENBQVNTLE1BQUEsQ0FBT0MsU0FBQSxFQUFXRCxNQUFBLENBQU9FLFdBQUEsRUFBYXFKLFdBQUEsQ0FBWTdKLEdBQUcsSUFBSTtNQUNuRyxJQUFJMkIsR0FBQSxHQUFNa0ksV0FBQSxDQUFZQyxTQUFBO01BQ3RCbUQsU0FBQSxHQUFZLElBQUlqUSx3QkFBQSxDQUFBaWpCLGFBQUEsQ0FBY2hPLElBQUEsSUFBUXRRLEdBQUEsR0FBTThMLEtBQUEsR0FBUXRNLElBQUEsQ0FBSWtMLE9BQUEsQ0FBUTFLLEdBQUcsQ0FBQztJQUN4RTtFQUNKLE9BQ0s7SUFDRCxJQUFJckIsTUFBQSxZQUFrQmdGLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSTJGLGFBQUEsQ0FBYzFCLFdBQUEsQ0FBWWtjLFNBQUEsSUFBYTdmLE1BQUEsQ0FBTzhmLFVBQUEsR0FBYSxHQUFHO01BQ3pGLElBQUl0ZSxHQUFBLEdBQU1tUSxJQUFBO1FBQU1yTCxHQUFBLEdBQU1xTCxJQUFBO01BQ3RCLFNBQVN0SyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJckgsTUFBQSxDQUFPOGYsVUFBQSxFQUFZelksQ0FBQSxJQUFLO1FBQ3hDLElBQUkxSixLQUFBLEdBQVFxQyxNQUFBLENBQU8rZixVQUFBLENBQVcxWSxDQUFDO1FBQy9CN0YsR0FBQSxHQUFNRCxJQUFBLENBQUtDLEdBQUEsQ0FBSUEsR0FBQSxFQUFLd0QsSUFBQSxDQUFLa0UsT0FBQSxDQUFRQyxVQUFBLENBQVd4TCxLQUFBLENBQU1nRSxjQUFBLEVBQWdCaEUsS0FBQSxDQUFNaUUsV0FBQSxFQUFhLENBQUMsQ0FBQztRQUN2RjBFLEdBQUEsR0FBTS9FLElBQUEsQ0FBSytFLEdBQUEsQ0FBSUEsR0FBQSxFQUFLdEIsSUFBQSxDQUFLa0UsT0FBQSxDQUFRQyxVQUFBLENBQVd4TCxLQUFBLENBQU1xaUIsWUFBQSxFQUFjcmlCLEtBQUEsQ0FBTXNpQixTQUFBLEVBQVcsRUFBRSxDQUFDO01BQ3hGO01BQ0EsSUFBSXplLEdBQUEsR0FBTSxHQUNOLE9BQU87TUFDWCxDQUFDa1EsTUFBQSxFQUFRQyxJQUFJLElBQUlyTCxHQUFBLElBQU90QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVUrRSxNQUFBLEdBQVMsQ0FBQ3BMLEdBQUEsRUFBSzlFLEdBQUcsSUFBSSxDQUFDQSxHQUFBLEVBQUs4RSxHQUFHO01BQzVFNkcsS0FBQSxHQUFRdE0sSUFBQSxDQUFJa0wsT0FBQSxDQUFRNEYsSUFBSTtJQUM1QixPQUNLO01BQ0RELE1BQUEsR0FBUzFNLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUMsVUFBQSxDQUFXbkosTUFBQSxDQUFPRyxVQUFBLEVBQVlILE1BQUEsQ0FBT0ksWUFBQSxFQUFjLENBQUM7SUFDOUU7SUFDQSxJQUFJc1IsTUFBQSxHQUFTLEdBQ1QsT0FBTztFQUNmO0VBQ0EsSUFBSXdPLE9BQUEsR0FBVXJmLElBQUEsQ0FBSWtMLE9BQUEsQ0FBUTJGLE1BQU07RUFDaEMsSUFBSSxDQUFDL0UsU0FBQSxFQUFXO0lBQ1osSUFBSTFELElBQUEsR0FBT3VXLE1BQUEsSUFBVSxhQUFjeGEsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVZ0YsSUFBQSxHQUFPeEUsS0FBQSxDQUFNOUwsR0FBQSxJQUFPLENBQUNvZSxRQUFBLEdBQVksSUFBSTtJQUM3RjlTLFNBQUEsR0FBWXdULGdCQUFBLENBQWlCbmIsSUFBQSxFQUFNa2IsT0FBQSxFQUFTL1MsS0FBQSxFQUFPbEUsSUFBSTtFQUMzRDtFQUNBLE9BQU8wRCxTQUFBO0FBQ1g7QUFDQSxTQUFTeVQsb0JBQW9CcGIsSUFBQSxFQUFNO0VBQy9CLE9BQU9BLElBQUEsQ0FBS3FiLFFBQUEsR0FBV3JiLElBQUEsQ0FBS3NiLFFBQUEsQ0FBUyxJQUNqQ0MsWUFBQSxDQUFhdmIsSUFBSSxLQUFLcEgsUUFBQSxDQUFTbUQsYUFBQSxJQUFpQm5ELFFBQUEsQ0FBU21ELGFBQUEsQ0FBYzZGLFFBQUEsQ0FBUzVCLElBQUEsQ0FBS3RGLEdBQUc7QUFDaEc7QUFDQSxTQUFTOGdCLGVBQWV4YixJQUFBLEVBQU00TSxLQUFBLEdBQVEsT0FBTztFQUN6QyxJQUFJbEYsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtFQUNyQjhULGlCQUFBLENBQWtCemIsSUFBQSxFQUFNMEgsR0FBRztFQUMzQixJQUFJLENBQUMwVCxtQkFBQSxDQUFvQnBiLElBQUksR0FDekI7RUFJSixJQUFJLENBQUM0TSxLQUFBLElBQVM1TSxJQUFBLENBQUtpVCxLQUFBLENBQU15SSxTQUFBLElBQWExYixJQUFBLENBQUtpVCxLQUFBLENBQU15SSxTQUFBLENBQVVDLFlBQUEsSUFBZ0JoZSxNQUFBLEVBQVE7SUFDL0UsSUFBSTNDLE1BQUEsR0FBU2dGLElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO01BQUcrUyxNQUFBLEdBQVM1YixJQUFBLENBQUs2YixXQUFBLENBQVlDLGdCQUFBO0lBQ2pFLElBQUk5Z0IsTUFBQSxDQUFPRyxVQUFBLElBQWN5Z0IsTUFBQSxDQUFPemdCLFVBQUEsSUFDNUJoQyxvQkFBQSxDQUFxQjZCLE1BQUEsQ0FBT0csVUFBQSxFQUFZSCxNQUFBLENBQU9JLFlBQUEsRUFBY3dnQixNQUFBLENBQU96Z0IsVUFBQSxFQUFZeWdCLE1BQUEsQ0FBT3hnQixZQUFZLEdBQUc7TUFDdEc0RSxJQUFBLENBQUtpVCxLQUFBLENBQU15SSxTQUFBLENBQVVLLG9CQUFBLEdBQXVCO01BQzVDL2IsSUFBQSxDQUFLNmIsV0FBQSxDQUFZRyxlQUFBLENBQWdCO01BQ2pDO0lBQ0o7RUFDSjtFQUNBaGMsSUFBQSxDQUFLNmIsV0FBQSxDQUFZSSxtQkFBQSxDQUFvQjtFQUNyQyxJQUFJamMsSUFBQSxDQUFLa2MsYUFBQSxFQUFlO0lBQ3BCQyxtQkFBQSxDQUFvQm5jLElBQUk7RUFDNUIsT0FDSztJQUNELElBQUk7UUFBRTBNLE1BQUE7UUFBUUM7TUFBSyxJQUFJakYsR0FBQTtNQUFLMFUsaUJBQUE7TUFBbUJDLGVBQUE7SUFDL0MsSUFBSUMsNkJBQUEsSUFBaUMsRUFBRTVVLEdBQUEsWUFBZWhRLHdCQUFBLENBQUFxYixhQUFBLEdBQWdCO01BQ2xFLElBQUksQ0FBQ3JMLEdBQUEsQ0FBSUcsS0FBQSxDQUFNMVAsTUFBQSxDQUFPNk8sYUFBQSxFQUNsQm9WLGlCQUFBLEdBQW9CRyx1QkFBQSxDQUF3QnZjLElBQUEsRUFBTTBILEdBQUEsQ0FBSWpQLElBQUk7TUFDOUQsSUFBSSxDQUFDaVAsR0FBQSxDQUFJc0osS0FBQSxJQUFTLENBQUN0SixHQUFBLENBQUlHLEtBQUEsQ0FBTTFQLE1BQUEsQ0FBTzZPLGFBQUEsRUFDaENxVixlQUFBLEdBQWtCRSx1QkFBQSxDQUF3QnZjLElBQUEsRUFBTTBILEdBQUEsQ0FBSWhQLEVBQUU7SUFDOUQ7SUFDQXNILElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXVJLFlBQUEsQ0FBYUMsTUFBQSxFQUFRQyxJQUFBLEVBQU0zTSxJQUFBLEVBQU00TSxLQUFLO0lBQ25ELElBQUkwUCw2QkFBQSxFQUErQjtNQUMvQixJQUFJRixpQkFBQSxFQUNBSSxhQUFBLENBQWNKLGlCQUFpQjtNQUNuQyxJQUFJQyxlQUFBLEVBQ0FHLGFBQUEsQ0FBY0gsZUFBZTtJQUNyQztJQUNBLElBQUkzVSxHQUFBLENBQUkrVSxPQUFBLEVBQVM7TUFDYnpjLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSTZULFNBQUEsQ0FBVTJGLE1BQUEsQ0FBTywyQkFBMkI7SUFDekQsT0FDSztNQUNEbFUsSUFBQSxDQUFLdEYsR0FBQSxDQUFJNlQsU0FBQSxDQUFVQyxHQUFBLENBQUksMkJBQTJCO01BQ2xELElBQUksdUJBQXVCNVYsUUFBQSxFQUN2QjhqQiw0QkFBQSxDQUE2QjFjLElBQUk7SUFDekM7RUFDSjtFQUNBQSxJQUFBLENBQUs2YixXQUFBLENBQVlHLGVBQUEsQ0FBZ0I7RUFDakNoYyxJQUFBLENBQUs2YixXQUFBLENBQVljLGdCQUFBLENBQWlCO0FBQ3RDO0FBSUEsSUFBTUwsNkJBQUEsR0FBZ0N6ZSxNQUFBLElBQVVGLE1BQUEsSUFBVUMsY0FBQSxHQUFpQjtBQUMzRSxTQUFTMmUsd0JBQXdCdmMsSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0VBQ3hDLElBQUk7SUFBRXRFLElBQUE7SUFBTXNDO0VBQU8sSUFBSTJGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXNDLFVBQUEsQ0FBV25LLEdBQUEsRUFBSyxDQUFDO0VBQ3JELElBQUk2SyxLQUFBLEdBQVE3TSxNQUFBLEdBQVN0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBLEdBQVNqQixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQU0sSUFBSTtFQUN4RSxJQUFJc0ssTUFBQSxHQUFTdEssTUFBQSxHQUFTdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBLEdBQVMsQ0FBQyxJQUFJO0VBQ3BELElBQUl3RCxNQUFBLElBQVVxSixLQUFBLElBQVNBLEtBQUEsQ0FBTW5OLGVBQUEsSUFBbUIsU0FDNUMsT0FBTzZpQixXQUFBLENBQVkxVixLQUFLO0VBQzVCLEtBQUssQ0FBQ0EsS0FBQSxJQUFTQSxLQUFBLENBQU1uTixlQUFBLElBQW1CLGFBQ25DLENBQUM0SyxNQUFBLElBQVVBLE1BQUEsQ0FBTzVLLGVBQUEsSUFBbUIsVUFBVTtJQUNoRCxJQUFJbU4sS0FBQSxFQUNBLE9BQU8wVixXQUFBLENBQVkxVixLQUFLLFdBQ25CdkMsTUFBQSxFQUNMLE9BQU9pWSxXQUFBLENBQVlqWSxNQUFNO0VBQ2pDO0FBQ0o7QUFDQSxTQUFTaVksWUFBWWhZLE9BQUEsRUFBUztFQUMxQkEsT0FBQSxDQUFRN0ssZUFBQSxHQUFrQjtFQUMxQixJQUFJOEQsTUFBQSxJQUFVK0csT0FBQSxDQUFRUSxTQUFBLEVBQVc7SUFDN0JSLE9BQUEsQ0FBUVEsU0FBQSxHQUFZO0lBQ3BCUixPQUFBLENBQVFpWSxZQUFBLEdBQWU7RUFDM0I7RUFDQSxPQUFPalksT0FBQTtBQUNYO0FBQ0EsU0FBUzRYLGNBQWM1WCxPQUFBLEVBQVM7RUFDNUJBLE9BQUEsQ0FBUTdLLGVBQUEsR0FBa0I7RUFDMUIsSUFBSTZLLE9BQUEsQ0FBUWlZLFlBQUEsRUFBYztJQUN0QmpZLE9BQUEsQ0FBUVEsU0FBQSxHQUFZO0lBQ3BCUixPQUFBLENBQVFpWSxZQUFBLEdBQWU7RUFDM0I7QUFDSjtBQUNBLFNBQVNILDZCQUE2QjFjLElBQUEsRUFBTTtFQUN4QyxJQUFJbkUsSUFBQSxHQUFNbUUsSUFBQSxDQUFLdEYsR0FBQSxDQUFJMkYsYUFBQTtFQUNuQnhFLElBQUEsQ0FBSWloQixtQkFBQSxDQUFvQixtQkFBbUI5YyxJQUFBLENBQUtpVCxLQUFBLENBQU04SixrQkFBa0I7RUFDeEUsSUFBSS9oQixNQUFBLEdBQVNnRixJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUNwQyxJQUFJOVEsSUFBQSxHQUFPaUQsTUFBQSxDQUFPRyxVQUFBO0lBQVlkLE1BQUEsR0FBU1csTUFBQSxDQUFPSSxZQUFBO0VBQzlDUyxJQUFBLENBQUltaEIsZ0JBQUEsQ0FBaUIsbUJBQW1CaGQsSUFBQSxDQUFLaVQsS0FBQSxDQUFNOEosa0JBQUEsR0FBcUIsTUFBTTtJQUMxRSxJQUFJL2hCLE1BQUEsQ0FBT0csVUFBQSxJQUFjcEQsSUFBQSxJQUFRaUQsTUFBQSxDQUFPSSxZQUFBLElBQWdCZixNQUFBLEVBQVE7TUFDNUR3QixJQUFBLENBQUlpaEIsbUJBQUEsQ0FBb0IsbUJBQW1COWMsSUFBQSxDQUFLaVQsS0FBQSxDQUFNOEosa0JBQWtCO01BQ3hFRSxVQUFBLENBQVcsTUFBTTtRQUNiLElBQUksQ0FBQzdCLG1CQUFBLENBQW9CcGIsSUFBSSxLQUFLQSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVU4VSxPQUFBLEVBQ25EemMsSUFBQSxDQUFLdEYsR0FBQSxDQUFJNlQsU0FBQSxDQUFVMkYsTUFBQSxDQUFPLDJCQUEyQjtNQUM3RCxHQUFHLEVBQUU7SUFDVDtFQUNKLENBQUM7QUFDTDtBQUNBLFNBQVNpSSxvQkFBb0JuYyxJQUFBLEVBQU07RUFDL0IsSUFBSWhGLE1BQUEsR0FBU2dGLElBQUEsQ0FBS3NJLFlBQUEsQ0FBYTtJQUFHM1AsS0FBQSxHQUFRQyxRQUFBLENBQVNDLFdBQUEsQ0FBWTtFQUMvRCxJQUFJLENBQUNtQyxNQUFBLEVBQ0Q7RUFDSixJQUFJakQsSUFBQSxHQUFPaUksSUFBQSxDQUFLa2MsYUFBQSxDQUFjeGhCLEdBQUE7SUFBS3dpQixHQUFBLEdBQU1ubEIsSUFBQSxDQUFLK0IsUUFBQSxJQUFZO0VBQzFELElBQUlvakIsR0FBQSxFQUNBdmtCLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxDQUFLRyxVQUFBLEVBQVlKLFFBQUEsQ0FBU0MsSUFBSSxJQUFJLENBQUMsT0FFbERZLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxFQUFNLENBQUM7RUFDMUJZLEtBQUEsQ0FBTTJRLFFBQUEsQ0FBUyxJQUFJO0VBQ25CdE8sTUFBQSxDQUFPb1MsZUFBQSxDQUFnQjtFQUN2QnBTLE1BQUEsQ0FBT3FTLFFBQUEsQ0FBUzFVLEtBQUs7RUFNckIsSUFBSSxDQUFDdWtCLEdBQUEsSUFBTyxDQUFDbGQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVOFUsT0FBQSxJQUFXbmYsRUFBQSxJQUFNQyxVQUFBLElBQWMsSUFBSTtJQUNqRXhGLElBQUEsQ0FBS29sQixRQUFBLEdBQVc7SUFDaEJwbEIsSUFBQSxDQUFLb2xCLFFBQUEsR0FBVztFQUNwQjtBQUNKO0FBQ0EsU0FBUzFCLGtCQUFrQnpiLElBQUEsRUFBTTBILEdBQUEsRUFBSztFQUNsQyxJQUFJQSxHQUFBLFlBQWVoUSx3QkFBQSxDQUFBaWpCLGFBQUEsRUFBZTtJQUM5QixJQUFJaGdCLElBQUEsR0FBT3FGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXdILE1BQUEsQ0FBT2hFLEdBQUEsQ0FBSWpQLElBQUk7SUFDdkMsSUFBSWtDLElBQUEsSUFBUXFGLElBQUEsQ0FBS29kLG9CQUFBLEVBQXNCO01BQ25DQyxrQkFBQSxDQUFtQnJkLElBQUk7TUFDdkIsSUFBSXJGLElBQUEsRUFDQUEsSUFBQSxDQUFLcVosVUFBQSxDQUFXO01BQ3BCaFUsSUFBQSxDQUFLb2Qsb0JBQUEsR0FBdUJ6aUIsSUFBQTtJQUNoQztFQUNKLE9BQ0s7SUFDRDBpQixrQkFBQSxDQUFtQnJkLElBQUk7RUFDM0I7QUFDSjtBQUVBLFNBQVNxZCxtQkFBbUJyZCxJQUFBLEVBQU07RUFDOUIsSUFBSUEsSUFBQSxDQUFLb2Qsb0JBQUEsRUFBc0I7SUFDM0IsSUFBSXBkLElBQUEsQ0FBS29kLG9CQUFBLENBQXFCamxCLE1BQUEsRUFDMUI2SCxJQUFBLENBQUtvZCxvQkFBQSxDQUFxQm5KLFlBQUEsQ0FBYTtJQUMzQ2pVLElBQUEsQ0FBS29kLG9CQUFBLEdBQXVCO0VBQ2hDO0FBQ0o7QUFDQSxTQUFTakMsaUJBQWlCbmIsSUFBQSxFQUFNa2IsT0FBQSxFQUFTL1MsS0FBQSxFQUFPbEUsSUFBQSxFQUFNO0VBQ2xELE9BQU9qRSxJQUFBLENBQUtHLFFBQUEsQ0FBUywwQkFBMEJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTWtiLE9BQUEsRUFBUy9TLEtBQUssQ0FBQyxLQUNwRXpRLHdCQUFBLENBQUFxYixhQUFBLENBQWN1SyxPQUFBLENBQVFwQyxPQUFBLEVBQVMvUyxLQUFBLEVBQU9sRSxJQUFJO0FBQ3JEO0FBQ0EsU0FBU3NaLHFCQUFxQnZkLElBQUEsRUFBTTtFQUNoQyxJQUFJQSxJQUFBLENBQUtxYixRQUFBLElBQVksQ0FBQ3JiLElBQUEsQ0FBS3NiLFFBQUEsQ0FBUyxHQUNoQyxPQUFPO0VBQ1gsT0FBT0MsWUFBQSxDQUFhdmIsSUFBSTtBQUM1QjtBQUNBLFNBQVN1YixhQUFhdmIsSUFBQSxFQUFNO0VBQ3hCLElBQUkwSCxHQUFBLEdBQU0xSCxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUNqQyxJQUFJLENBQUNuQixHQUFBLENBQUl2TSxVQUFBLEVBQ0wsT0FBTztFQUNYLElBQUk7SUFJQSxPQUFPNkUsSUFBQSxDQUFLdEYsR0FBQSxDQUFJa0gsUUFBQSxDQUFTOEYsR0FBQSxDQUFJdk0sVUFBQSxDQUFXOUMsUUFBQSxJQUFZLElBQUlxUCxHQUFBLENBQUl2TSxVQUFBLENBQVdqRCxVQUFBLEdBQWF3UCxHQUFBLENBQUl2TSxVQUFVLE1BQzdGNkUsSUFBQSxDQUFLcWIsUUFBQSxJQUFZcmIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJa0gsUUFBQSxDQUFTOEYsR0FBQSxDQUFJek0sU0FBQSxDQUFVNUMsUUFBQSxJQUFZLElBQUlxUCxHQUFBLENBQUl6TSxTQUFBLENBQVUvQyxVQUFBLEdBQWF3UCxHQUFBLENBQUl6TSxTQUFTO0VBQ2xILFNBQ093QixDQUFBLEVBQUc7SUFDTixPQUFPO0VBQ1g7QUFDSjtBQUNBLFNBQVMrZ0IsbUJBQW1CeGQsSUFBQSxFQUFNO0VBQzlCLElBQUk2TSxTQUFBLEdBQVk3TSxJQUFBLENBQUtrRSxPQUFBLENBQVFzQyxVQUFBLENBQVd4RyxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVUrRSxNQUFBLEVBQVEsQ0FBQztFQUN0RSxJQUFJMVIsTUFBQSxHQUFTZ0YsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7RUFDcEMsT0FBTzFQLG9CQUFBLENBQXFCMFQsU0FBQSxDQUFVOVUsSUFBQSxFQUFNOFUsU0FBQSxDQUFVeFMsTUFBQSxFQUFRVyxNQUFBLENBQU9HLFVBQUEsRUFBWUgsTUFBQSxDQUFPSSxZQUFZO0FBQ3hHO0FBRUEsU0FBU3FpQixtQkFBbUJqWSxLQUFBLEVBQU8vTCxHQUFBLEVBQUs7RUFDcEMsSUFBSTtJQUFFeWhCLE9BQUE7SUFBUy9TO0VBQU0sSUFBSTNDLEtBQUEsQ0FBTW1DLFNBQUE7RUFDL0IsSUFBSStWLEtBQUEsR0FBUWprQixHQUFBLEdBQU0sSUFBSXloQixPQUFBLENBQVE1WixHQUFBLENBQUk2RyxLQUFLLElBQUkrUyxPQUFBLENBQVExZSxHQUFBLENBQUkyTCxLQUFLO0VBQzVELElBQUl3VixNQUFBLEdBQVMsQ0FBQ0QsS0FBQSxDQUFNdmxCLE1BQUEsQ0FBTzZPLGFBQUEsR0FBZ0IwVyxLQUFBLEdBQVFBLEtBQUEsQ0FBTXpVLEtBQUEsR0FBUXpELEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUXROLEdBQUEsR0FBTSxJQUFJaWtCLEtBQUEsQ0FBTXhXLEtBQUEsQ0FBTSxJQUFJd1csS0FBQSxDQUFNL1ksTUFBQSxDQUFPLENBQUMsSUFBSTtFQUMvSCxPQUFPZ1osTUFBQSxJQUFVam1CLHdCQUFBLENBQUFtakIsU0FBQSxDQUFVK0MsUUFBQSxDQUFTRCxNQUFBLEVBQVFsa0IsR0FBRztBQUNuRDtBQUNBLFNBQVNva0IsTUFBTTdkLElBQUEsRUFBTTBILEdBQUEsRUFBSztFQUN0QjFILElBQUEsQ0FBSzhkLFFBQUEsQ0FBUzlkLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXVZLEVBQUEsQ0FBR3RSLFlBQUEsQ0FBYS9FLEdBQUcsRUFBRXNXLGNBQUEsQ0FBZSxDQUFDO0VBQzlELE9BQU87QUFDWDtBQUNBLFNBQVNDLG1CQUFtQmplLElBQUEsRUFBTXZHLEdBQUEsRUFBS3lrQixJQUFBLEVBQU07RUFDekMsSUFBSXhXLEdBQUEsR0FBTTFILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7RUFDckIsSUFBSUQsR0FBQSxZQUFlaFEsd0JBQUEsQ0FBQXFiLGFBQUEsRUFBZTtJQUM5QixJQUFJbUwsSUFBQSxDQUFLNUgsT0FBQSxDQUFRLEdBQUcsSUFBSSxJQUFJO01BQ3hCLElBQUk7VUFBRW5PO1FBQU0sSUFBSVQsR0FBQTtRQUFLM1AsSUFBQSxHQUFPb1EsS0FBQSxDQUFNZ1csVUFBQSxHQUFhLE9BQU8xa0IsR0FBQSxHQUFNLElBQUkwTyxLQUFBLENBQU1pVyxVQUFBLEdBQWFqVyxLQUFBLENBQU1rVyxTQUFBO01BQ3pGLElBQUksQ0FBQ3RtQixJQUFBLElBQVFBLElBQUEsQ0FBSzJNLE1BQUEsSUFBVSxDQUFDM00sSUFBQSxDQUFLbVosTUFBQSxFQUM5QixPQUFPO01BQ1gsSUFBSW9OLFFBQUEsR0FBV3RlLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUW9CLEtBQUEsQ0FBTTlMLEdBQUEsR0FBTXRFLElBQUEsQ0FBSzRCLFFBQUEsSUFBWUYsR0FBQSxHQUFNLElBQUksS0FBSyxFQUFFO01BQ3BGLE9BQU9va0IsS0FBQSxDQUFNN2QsSUFBQSxFQUFNLElBQUl0SSx3QkFBQSxDQUFBcWIsYUFBQSxDQUFjckwsR0FBQSxDQUFJd1QsT0FBQSxFQUFTb0QsUUFBUSxDQUFDO0lBQy9ELFdBQ1MsQ0FBQzVXLEdBQUEsQ0FBSXNKLEtBQUEsRUFBTztNQUNqQixPQUFPO0lBQ1gsV0FDU2hSLElBQUEsQ0FBSzJKLGNBQUEsQ0FBZWxRLEdBQUEsR0FBTSxJQUFJLFlBQVksVUFBVSxHQUFHO01BQzVELElBQUk0TCxJQUFBLEdBQU9vWSxrQkFBQSxDQUFtQnpkLElBQUEsQ0FBS3dGLEtBQUEsRUFBTy9MLEdBQUc7TUFDN0MsSUFBSTRMLElBQUEsSUFBU0EsSUFBQSxZQUFnQjNOLHdCQUFBLENBQUFpakIsYUFBQSxFQUN6QixPQUFPa0QsS0FBQSxDQUFNN2QsSUFBQSxFQUFNcUYsSUFBSTtNQUMzQixPQUFPO0lBQ1gsV0FDUyxFQUFFcEgsR0FBQSxJQUFPaWdCLElBQUEsQ0FBSzVILE9BQUEsQ0FBUSxHQUFHLElBQUksS0FBSztNQUN2QyxJQUFJbk8sS0FBQSxHQUFRVCxHQUFBLENBQUlTLEtBQUE7UUFBT3BRLElBQUEsR0FBT29RLEtBQUEsQ0FBTWdXLFVBQUEsR0FBYSxPQUFPMWtCLEdBQUEsR0FBTSxJQUFJME8sS0FBQSxDQUFNaVcsVUFBQSxHQUFhalcsS0FBQSxDQUFNa1csU0FBQTtRQUFXMWpCLElBQUE7TUFDdEcsSUFBSSxDQUFDNUMsSUFBQSxJQUFRQSxJQUFBLENBQUsyTSxNQUFBLEVBQ2QsT0FBTztNQUNYLElBQUk2WixPQUFBLEdBQVU5a0IsR0FBQSxHQUFNLElBQUkwTyxLQUFBLENBQU05TCxHQUFBLEdBQU10RSxJQUFBLENBQUs0QixRQUFBLEdBQVd3TyxLQUFBLENBQU05TCxHQUFBO01BQzFELElBQUksRUFBRXRFLElBQUEsQ0FBS3FjLE1BQUEsS0FBV3paLElBQUEsR0FBT3FGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXdILE1BQUEsQ0FBTzZTLE9BQU8sTUFBTSxDQUFDNWpCLElBQUEsQ0FBS0csVUFBQSxHQUNoRSxPQUFPO01BQ1gsSUFBSXBELHdCQUFBLENBQUFpakIsYUFBQSxDQUFjQyxZQUFBLENBQWE3aUIsSUFBSSxHQUFHO1FBQ2xDLE9BQU84bEIsS0FBQSxDQUFNN2QsSUFBQSxFQUFNLElBQUl0SSx3QkFBQSxDQUFBaWpCLGFBQUEsQ0FBY2xoQixHQUFBLEdBQU0sSUFBSXVHLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUW9CLEtBQUEsQ0FBTTlMLEdBQUEsR0FBTXRFLElBQUEsQ0FBSzRCLFFBQVEsSUFBSXdPLEtBQUssQ0FBQztNQUM3RyxXQUNTOUosTUFBQSxFQUFRO1FBSWIsT0FBT3dmLEtBQUEsQ0FBTTdkLElBQUEsRUFBTSxJQUFJdEksd0JBQUEsQ0FBQXFiLGFBQUEsQ0FBYy9TLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUXROLEdBQUEsR0FBTSxJQUFJOGtCLE9BQUEsR0FBVUEsT0FBQSxHQUFVeG1CLElBQUEsQ0FBSzRCLFFBQVEsQ0FBQyxDQUFDO01BQzdHLE9BQ0s7UUFDRCxPQUFPO01BQ1g7SUFDSjtFQUNKLFdBQ1MrTixHQUFBLFlBQWVoUSx3QkFBQSxDQUFBaWpCLGFBQUEsSUFBaUJqVCxHQUFBLENBQUkzUCxJQUFBLENBQUt3ZCxRQUFBLEVBQVU7SUFDeEQsT0FBT3NJLEtBQUEsQ0FBTTdkLElBQUEsRUFBTSxJQUFJdEksd0JBQUEsQ0FBQXFiLGFBQUEsQ0FBY3RaLEdBQUEsR0FBTSxJQUFJaU8sR0FBQSxDQUFJSSxHQUFBLEdBQU1KLEdBQUEsQ0FBSUcsS0FBSyxDQUFDO0VBQ3ZFLE9BQ0s7SUFDRCxJQUFJeEMsSUFBQSxHQUFPb1ksa0JBQUEsQ0FBbUJ6ZCxJQUFBLENBQUt3RixLQUFBLEVBQU8vTCxHQUFHO0lBQzdDLElBQUk0TCxJQUFBLEVBQ0EsT0FBT3dZLEtBQUEsQ0FBTTdkLElBQUEsRUFBTXFGLElBQUk7SUFDM0IsT0FBTztFQUNYO0FBQ0o7QUFDQSxTQUFTbVosUUFBUXptQixJQUFBLEVBQU07RUFDbkIsT0FBT0EsSUFBQSxDQUFLTSxRQUFBLElBQVksSUFBSU4sSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBLEdBQVNqQixJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBO0FBQ3hFO0FBQ0EsU0FBU3lsQixZQUFZL2pCLEdBQUEsRUFBS2pCLEdBQUEsRUFBSztFQUMzQixJQUFJa0IsSUFBQSxHQUFPRCxHQUFBLENBQUlSLFVBQUE7RUFDZixPQUFPUyxJQUFBLElBQVFBLElBQUEsQ0FBSytLLElBQUEsSUFBUSxNQUFNak0sR0FBQSxHQUFNLEtBQUtpQixHQUFBLENBQUk2SSxXQUFBLElBQWU3SSxHQUFBLENBQUlaLFFBQUEsSUFBWTtBQUNwRjtBQUNBLFNBQVM0a0IsaUJBQWlCMWUsSUFBQSxFQUFNdkcsR0FBQSxFQUFLO0VBQ2pDLE9BQU9BLEdBQUEsR0FBTSxJQUFJa2xCLHNCQUFBLENBQXVCM2UsSUFBSSxJQUFJNGUscUJBQUEsQ0FBc0I1ZSxJQUFJO0FBQzlFO0FBR0EsU0FBUzJlLHVCQUF1QjNlLElBQUEsRUFBTTtFQUNsQyxJQUFJMEgsR0FBQSxHQUFNMUgsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7RUFDakMsSUFBSTlRLElBQUEsR0FBTzJQLEdBQUEsQ0FBSXpNLFNBQUE7SUFBV1osTUFBQSxHQUFTcU4sR0FBQSxDQUFJeE0sV0FBQTtFQUN2QyxJQUFJLENBQUNuRCxJQUFBLEVBQ0Q7RUFDSixJQUFJOG1CLFFBQUE7SUFBVUMsVUFBQTtJQUFZbFMsS0FBQSxHQUFRO0VBSWxDLElBQUluUCxLQUFBLElBQVMxRixJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLZ0MsTUFBQSxHQUFTbWtCLE9BQUEsQ0FBUXptQixJQUFJLEtBQUswbUIsV0FBQSxDQUFZMW1CLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBTSxHQUFHLEVBQUUsR0FDaEd1UyxLQUFBLEdBQVE7RUFDWixTQUFTO0lBQ0wsSUFBSXZTLE1BQUEsR0FBUyxHQUFHO01BQ1osSUFBSXRDLElBQUEsQ0FBS00sUUFBQSxJQUFZLEdBQUc7UUFDcEI7TUFDSixPQUNLO1FBQ0QsSUFBSXNNLE1BQUEsR0FBUzVNLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQSxHQUFTLENBQUM7UUFDdkMsSUFBSW9rQixXQUFBLENBQVk5WixNQUFBLEVBQVEsRUFBRSxHQUFHO1VBQ3pCa2EsUUFBQSxHQUFXOW1CLElBQUE7VUFDWCttQixVQUFBLEdBQWEsRUFBRXprQixNQUFBO1FBQ25CLFdBQ1NzSyxNQUFBLENBQU90TSxRQUFBLElBQVksR0FBRztVQUMzQk4sSUFBQSxHQUFPNE0sTUFBQTtVQUNQdEssTUFBQSxHQUFTdEMsSUFBQSxDQUFLZ0IsU0FBQSxDQUFVQyxNQUFBO1FBQzVCLE9BRUk7TUFDUjtJQUNKLFdBQ1MrbEIsV0FBQSxDQUFZaG5CLElBQUksR0FBRztNQUN4QjtJQUNKLE9BQ0s7TUFDRCxJQUFJdU4sSUFBQSxHQUFPdk4sSUFBQSxDQUFLRSxlQUFBO01BQ2hCLE9BQU9xTixJQUFBLElBQVFtWixXQUFBLENBQVluWixJQUFBLEVBQU0sRUFBRSxHQUFHO1FBQ2xDdVosUUFBQSxHQUFXOW1CLElBQUEsQ0FBS0csVUFBQTtRQUNoQjRtQixVQUFBLEdBQWFobkIsUUFBQSxDQUFTd04sSUFBSTtRQUMxQkEsSUFBQSxHQUFPQSxJQUFBLENBQUtyTixlQUFBO01BQ2hCO01BQ0EsSUFBSSxDQUFDcU4sSUFBQSxFQUFNO1FBQ1B2TixJQUFBLEdBQU9BLElBQUEsQ0FBS0csVUFBQTtRQUNaLElBQUlILElBQUEsSUFBUWlJLElBQUEsQ0FBS3RGLEdBQUEsRUFDYjtRQUNKTCxNQUFBLEdBQVM7TUFDYixPQUNLO1FBQ0R0QyxJQUFBLEdBQU91TixJQUFBO1FBQ1BqTCxNQUFBLEdBQVNta0IsT0FBQSxDQUFRem1CLElBQUk7TUFDekI7SUFDSjtFQUNKO0VBQ0EsSUFBSTZVLEtBQUEsRUFDQW9TLFdBQUEsQ0FBWWhmLElBQUEsRUFBTWpJLElBQUEsRUFBTXNDLE1BQU0sV0FDekJ3a0IsUUFBQSxFQUNMRyxXQUFBLENBQVloZixJQUFBLEVBQU02ZSxRQUFBLEVBQVVDLFVBQVU7QUFDOUM7QUFHQSxTQUFTRixzQkFBc0I1ZSxJQUFBLEVBQU07RUFDakMsSUFBSTBILEdBQUEsR0FBTTFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0VBQ2pDLElBQUk5USxJQUFBLEdBQU8yUCxHQUFBLENBQUl6TSxTQUFBO0lBQVdaLE1BQUEsR0FBU3FOLEdBQUEsQ0FBSXhNLFdBQUE7RUFDdkMsSUFBSSxDQUFDbkQsSUFBQSxFQUNEO0VBQ0osSUFBSTZMLEdBQUEsR0FBTTRhLE9BQUEsQ0FBUXptQixJQUFJO0VBQ3RCLElBQUk4bUIsUUFBQSxFQUFVQyxVQUFBO0VBQ2QsU0FBUztJQUNMLElBQUl6a0IsTUFBQSxHQUFTdUosR0FBQSxFQUFLO01BQ2QsSUFBSTdMLElBQUEsQ0FBS00sUUFBQSxJQUFZLEdBQ2pCO01BQ0osSUFBSTZPLEtBQUEsR0FBUW5QLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBTTtNQUNsQyxJQUFJb2tCLFdBQUEsQ0FBWXZYLEtBQUEsRUFBTyxDQUFDLEdBQUc7UUFDdkIyWCxRQUFBLEdBQVc5bUIsSUFBQTtRQUNYK21CLFVBQUEsR0FBYSxFQUFFemtCLE1BQUE7TUFDbkIsT0FFSTtJQUNSLFdBQ1Mwa0IsV0FBQSxDQUFZaG5CLElBQUksR0FBRztNQUN4QjtJQUNKLE9BQ0s7TUFDRCxJQUFJc04sSUFBQSxHQUFPdE4sSUFBQSxDQUFLd0wsV0FBQTtNQUNoQixPQUFPOEIsSUFBQSxJQUFRb1osV0FBQSxDQUFZcFosSUFBQSxFQUFNLENBQUMsR0FBRztRQUNqQ3daLFFBQUEsR0FBV3haLElBQUEsQ0FBS25OLFVBQUE7UUFDaEI0bUIsVUFBQSxHQUFhaG5CLFFBQUEsQ0FBU3VOLElBQUksSUFBSTtRQUM5QkEsSUFBQSxHQUFPQSxJQUFBLENBQUs5QixXQUFBO01BQ2hCO01BQ0EsSUFBSSxDQUFDOEIsSUFBQSxFQUFNO1FBQ1B0TixJQUFBLEdBQU9BLElBQUEsQ0FBS0csVUFBQTtRQUNaLElBQUlILElBQUEsSUFBUWlJLElBQUEsQ0FBS3RGLEdBQUEsRUFDYjtRQUNKTCxNQUFBLEdBQVN1SixHQUFBLEdBQU07TUFDbkIsT0FDSztRQUNEN0wsSUFBQSxHQUFPc04sSUFBQTtRQUNQaEwsTUFBQSxHQUFTO1FBQ1R1SixHQUFBLEdBQU00YSxPQUFBLENBQVF6bUIsSUFBSTtNQUN0QjtJQUNKO0VBQ0o7RUFDQSxJQUFJOG1CLFFBQUEsRUFDQUcsV0FBQSxDQUFZaGYsSUFBQSxFQUFNNmUsUUFBQSxFQUFVQyxVQUFVO0FBQzlDO0FBQ0EsU0FBU0MsWUFBWXJrQixHQUFBLEVBQUs7RUFDdEIsSUFBSUMsSUFBQSxHQUFPRCxHQUFBLENBQUlSLFVBQUE7RUFDZixPQUFPUyxJQUFBLElBQVFBLElBQUEsQ0FBSzVDLElBQUEsSUFBUTRDLElBQUEsQ0FBSzVDLElBQUEsQ0FBSzhDLE9BQUE7QUFDMUM7QUFDQSxTQUFTb2tCLGNBQWNsbkIsSUFBQSxFQUFNc0MsTUFBQSxFQUFRO0VBQ2pDLE9BQU90QyxJQUFBLElBQVFzQyxNQUFBLElBQVV0QyxJQUFBLENBQUtrQyxVQUFBLENBQVdqQixNQUFBLElBQVUsQ0FBQ1ksWUFBQSxDQUFhN0IsSUFBSSxHQUFHO0lBQ3BFc0MsTUFBQSxHQUFTdkMsUUFBQSxDQUFTQyxJQUFJLElBQUk7SUFDMUJBLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBO0VBQ2hCO0VBQ0EsT0FBT0gsSUFBQSxJQUFRc0MsTUFBQSxHQUFTdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQSxFQUFRO0lBQzVDLElBQUlxTSxJQUFBLEdBQU90TixJQUFBLENBQUtrQyxVQUFBLENBQVdJLE1BQU07SUFDakMsSUFBSWdMLElBQUEsQ0FBS2hOLFFBQUEsSUFBWSxHQUNqQixPQUFPZ04sSUFBQTtJQUNYLElBQUlBLElBQUEsQ0FBS2hOLFFBQUEsSUFBWSxLQUFLZ04sSUFBQSxDQUFLdEwsZUFBQSxJQUFtQixTQUM5QztJQUNKaEMsSUFBQSxHQUFPc04sSUFBQTtJQUNQaEwsTUFBQSxHQUFTO0VBQ2I7QUFDSjtBQUNBLFNBQVM2a0IsZUFBZW5uQixJQUFBLEVBQU1zQyxNQUFBLEVBQVE7RUFDbEMsT0FBT3RDLElBQUEsSUFBUSxDQUFDc0MsTUFBQSxJQUFVLENBQUNULFlBQUEsQ0FBYTdCLElBQUksR0FBRztJQUMzQ3NDLE1BQUEsR0FBU3ZDLFFBQUEsQ0FBU0MsSUFBSTtJQUN0QkEsSUFBQSxHQUFPQSxJQUFBLENBQUtHLFVBQUE7RUFDaEI7RUFDQSxPQUFPSCxJQUFBLElBQVFzQyxNQUFBLEVBQVE7SUFDbkIsSUFBSWdMLElBQUEsR0FBT3ROLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV0ksTUFBQSxHQUFTLENBQUM7SUFDckMsSUFBSWdMLElBQUEsQ0FBS2hOLFFBQUEsSUFBWSxHQUNqQixPQUFPZ04sSUFBQTtJQUNYLElBQUlBLElBQUEsQ0FBS2hOLFFBQUEsSUFBWSxLQUFLZ04sSUFBQSxDQUFLdEwsZUFBQSxJQUFtQixTQUM5QztJQUNKaEMsSUFBQSxHQUFPc04sSUFBQTtJQUNQaEwsTUFBQSxHQUFTdEMsSUFBQSxDQUFLa0MsVUFBQSxDQUFXakIsTUFBQTtFQUM3QjtBQUNKO0FBQ0EsU0FBU2dtQixZQUFZaGYsSUFBQSxFQUFNakksSUFBQSxFQUFNc0MsTUFBQSxFQUFRO0VBQ3JDLElBQUl0QyxJQUFBLENBQUtNLFFBQUEsSUFBWSxHQUFHO0lBQ3BCLElBQUlzTSxNQUFBLEVBQVF1QyxLQUFBO0lBQ1osSUFBSUEsS0FBQSxHQUFRK1gsYUFBQSxDQUFjbG5CLElBQUEsRUFBTXNDLE1BQU0sR0FBRztNQUNyQ3RDLElBQUEsR0FBT21QLEtBQUE7TUFDUDdNLE1BQUEsR0FBUztJQUNiLFdBQ1NzSyxNQUFBLEdBQVN1YSxjQUFBLENBQWVubkIsSUFBQSxFQUFNc0MsTUFBTSxHQUFHO01BQzVDdEMsSUFBQSxHQUFPNE0sTUFBQTtNQUNQdEssTUFBQSxHQUFTc0ssTUFBQSxDQUFPNUwsU0FBQSxDQUFVQyxNQUFBO0lBQzlCO0VBQ0o7RUFDQSxJQUFJME8sR0FBQSxHQUFNMUgsSUFBQSxDQUFLc0ksWUFBQSxDQUFhO0VBQzVCLElBQUksQ0FBQ1osR0FBQSxFQUNEO0VBQ0osSUFBSTNNLGtCQUFBLENBQW1CMk0sR0FBRyxHQUFHO0lBQ3pCLElBQUkvTyxLQUFBLEdBQVFDLFFBQUEsQ0FBU0MsV0FBQSxDQUFZO0lBQ2pDRixLQUFBLENBQU1HLE1BQUEsQ0FBT2YsSUFBQSxFQUFNc0MsTUFBTTtJQUN6QjFCLEtBQUEsQ0FBTU0sUUFBQSxDQUFTbEIsSUFBQSxFQUFNc0MsTUFBTTtJQUMzQnFOLEdBQUEsQ0FBSTBGLGVBQUEsQ0FBZ0I7SUFDcEIxRixHQUFBLENBQUkyRixRQUFBLENBQVMxVSxLQUFLO0VBQ3RCLFdBQ1MrTyxHQUFBLENBQUk2QixNQUFBLEVBQVE7SUFDakI3QixHQUFBLENBQUk2QixNQUFBLENBQU94UixJQUFBLEVBQU1zQyxNQUFNO0VBQzNCO0VBQ0EyRixJQUFBLENBQUs2YixXQUFBLENBQVlHLGVBQUEsQ0FBZ0I7RUFDakMsSUFBSTtJQUFFeFc7RUFBTSxJQUFJeEYsSUFBQTtFQUVoQmlkLFVBQUEsQ0FBVyxNQUFNO0lBQ2IsSUFBSWpkLElBQUEsQ0FBS3dGLEtBQUEsSUFBU0EsS0FBQSxFQUNkZ1csY0FBQSxDQUFleGIsSUFBSTtFQUMzQixHQUFHLEVBQUU7QUFDVDtBQUNBLFNBQVNtZixjQUFjbmYsSUFBQSxFQUFNM0QsR0FBQSxFQUFLO0VBQzlCLElBQUl1TCxJQUFBLEdBQU81SCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVExSyxHQUFHO0VBQ3JDLElBQUksRUFBRXNCLE1BQUEsSUFBVVEsT0FBQSxLQUFZeUosSUFBQSxDQUFLelAsTUFBQSxDQUFPNk8sYUFBQSxFQUFlO0lBQ25ELElBQUluRSxNQUFBLEdBQVM3QyxJQUFBLENBQUtzRyxXQUFBLENBQVlqSyxHQUFHO0lBQ2pDLElBQUlBLEdBQUEsR0FBTXVMLElBQUEsQ0FBS1csS0FBQSxDQUFNLEdBQUc7TUFDcEIsSUFBSTVELE1BQUEsR0FBUzNFLElBQUEsQ0FBS3NHLFdBQUEsQ0FBWWpLLEdBQUEsR0FBTSxDQUFDO01BQ3JDLElBQUkraUIsR0FBQSxJQUFPemEsTUFBQSxDQUFPM0YsR0FBQSxHQUFNMkYsTUFBQSxDQUFPMUYsTUFBQSxJQUFVO01BQ3pDLElBQUltZ0IsR0FBQSxHQUFNdmMsTUFBQSxDQUFPN0QsR0FBQSxJQUFPb2dCLEdBQUEsR0FBTXZjLE1BQUEsQ0FBTzVELE1BQUEsSUFBVTFDLElBQUEsQ0FBSzhpQixHQUFBLENBQUkxYSxNQUFBLENBQU85RixJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFJLElBQUksR0FDakYsT0FBTzhGLE1BQUEsQ0FBTzlGLElBQUEsR0FBT2dFLE1BQUEsQ0FBT2hFLElBQUEsR0FBTyxRQUFRO0lBQ25EO0lBQ0EsSUFBSXhDLEdBQUEsR0FBTXVMLElBQUEsQ0FBS1ksR0FBQSxDQUFJLEdBQUc7TUFDbEIsSUFBSXRCLEtBQUEsR0FBUWxILElBQUEsQ0FBS3NHLFdBQUEsQ0FBWWpLLEdBQUEsR0FBTSxDQUFDO01BQ3BDLElBQUkraUIsR0FBQSxJQUFPbFksS0FBQSxDQUFNbEksR0FBQSxHQUFNa0ksS0FBQSxDQUFNakksTUFBQSxJQUFVO01BQ3ZDLElBQUltZ0IsR0FBQSxHQUFNdmMsTUFBQSxDQUFPN0QsR0FBQSxJQUFPb2dCLEdBQUEsR0FBTXZjLE1BQUEsQ0FBTzVELE1BQUEsSUFBVTFDLElBQUEsQ0FBSzhpQixHQUFBLENBQUluWSxLQUFBLENBQU1ySSxJQUFBLEdBQU9nRSxNQUFBLENBQU9oRSxJQUFJLElBQUksR0FDaEYsT0FBT3FJLEtBQUEsQ0FBTXJJLElBQUEsR0FBT2dFLE1BQUEsQ0FBT2hFLElBQUEsR0FBTyxRQUFRO0lBQ2xEO0VBQ0o7RUFDQSxJQUFJeWdCLFFBQUEsR0FBV3BlLGdCQUFBLENBQWlCbEIsSUFBQSxDQUFLdEYsR0FBRyxFQUFFNmtCLFNBQUE7RUFDMUMsT0FBT0QsUUFBQSxJQUFZLFFBQVEsUUFBUTtBQUN2QztBQUlBLFNBQVNFLGlCQUFpQnhmLElBQUEsRUFBTXZHLEdBQUEsRUFBS3lrQixJQUFBLEVBQU07RUFDdkMsSUFBSXhXLEdBQUEsR0FBTTFILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7RUFDckIsSUFBSUQsR0FBQSxZQUFlaFEsd0JBQUEsQ0FBQXFiLGFBQUEsSUFBaUIsQ0FBQ3JMLEdBQUEsQ0FBSXNKLEtBQUEsSUFBU2tOLElBQUEsQ0FBSzVILE9BQUEsQ0FBUSxHQUFHLElBQUksSUFDbEUsT0FBTztFQUNYLElBQUlyWSxHQUFBLElBQU9pZ0IsSUFBQSxDQUFLNUgsT0FBQSxDQUFRLEdBQUcsSUFBSSxJQUMzQixPQUFPO0VBQ1gsSUFBSTtJQUFFek8sS0FBQTtJQUFPQztFQUFJLElBQUlKLEdBQUE7RUFDckIsSUFBSSxDQUFDRyxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLElBQWlCaEgsSUFBQSxDQUFLMkosY0FBQSxDQUFlbFEsR0FBQSxHQUFNLElBQUksT0FBTyxNQUFNLEdBQUc7SUFDN0UsSUFBSTRMLElBQUEsR0FBT29ZLGtCQUFBLENBQW1CemQsSUFBQSxDQUFLd0YsS0FBQSxFQUFPL0wsR0FBRztJQUM3QyxJQUFJNEwsSUFBQSxJQUFTQSxJQUFBLFlBQWdCM04sd0JBQUEsQ0FBQWlqQixhQUFBLEVBQ3pCLE9BQU9rRCxLQUFBLENBQU03ZCxJQUFBLEVBQU1xRixJQUFJO0VBQy9CO0VBQ0EsSUFBSSxDQUFDd0MsS0FBQSxDQUFNMVAsTUFBQSxDQUFPNk8sYUFBQSxFQUFlO0lBQzdCLElBQUl6SCxJQUFBLEdBQU85RixHQUFBLEdBQU0sSUFBSW9PLEtBQUEsR0FBUUMsR0FBQTtJQUM3QixJQUFJMlgsTUFBQSxHQUFTL1gsR0FBQSxZQUFlaFEsd0JBQUEsQ0FBQWdvQixZQUFBLEdBQWVob0Isd0JBQUEsQ0FBQW1qQixTQUFBLENBQVU4RSxJQUFBLENBQUtwZ0IsSUFBQSxFQUFNOUYsR0FBRyxJQUFJL0Isd0JBQUEsQ0FBQW1qQixTQUFBLENBQVUrQyxRQUFBLENBQVNyZSxJQUFBLEVBQU05RixHQUFHO0lBQ25HLE9BQU9nbUIsTUFBQSxHQUFTNUIsS0FBQSxDQUFNN2QsSUFBQSxFQUFNeWYsTUFBTSxJQUFJO0VBQzFDO0VBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU0csMkJBQTJCNWYsSUFBQSxFQUFNdkcsR0FBQSxFQUFLO0VBQzNDLElBQUksRUFBRXVHLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsWUFBcUJqUSx3QkFBQSxDQUFBcWIsYUFBQSxHQUNsQyxPQUFPO0VBQ1gsSUFBSTtJQUFFNUssS0FBQTtJQUFPK1MsT0FBQTtJQUFTbEssS0FBQSxFQUFBNk87RUFBTSxJQUFJN2YsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtFQUMzQyxJQUFJLENBQUNRLEtBQUEsQ0FBTTJYLFVBQUEsQ0FBVzVFLE9BQU8sR0FDekIsT0FBTztFQUNYLElBQUksQ0FBQzJFLE1BQUEsRUFDRCxPQUFPO0VBQ1gsSUFBSTdmLElBQUEsQ0FBSzJKLGNBQUEsQ0FBZWxRLEdBQUEsR0FBTSxJQUFJLFlBQVksVUFBVSxHQUNwRCxPQUFPO0VBQ1gsSUFBSXNtQixRQUFBLEdBQVcsQ0FBQzVYLEtBQUEsQ0FBTWdXLFVBQUEsS0FBZTFrQixHQUFBLEdBQU0sSUFBSTBPLEtBQUEsQ0FBTWlXLFVBQUEsR0FBYWpXLEtBQUEsQ0FBTWtXLFNBQUE7RUFDeEUsSUFBSTBCLFFBQUEsSUFBWSxDQUFDQSxRQUFBLENBQVNyYixNQUFBLEVBQVE7SUFDOUIsSUFBSXFaLEVBQUEsR0FBSy9kLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXVZLEVBQUE7SUFDcEIsSUFBSXRrQixHQUFBLEdBQU0sR0FDTnNrQixFQUFBLENBQUdpQyxNQUFBLENBQU83WCxLQUFBLENBQU05TCxHQUFBLEdBQU0wakIsUUFBQSxDQUFTcG1CLFFBQUEsRUFBVXdPLEtBQUEsQ0FBTTlMLEdBQUcsT0FFbEQwaEIsRUFBQSxDQUFHaUMsTUFBQSxDQUFPN1gsS0FBQSxDQUFNOUwsR0FBQSxFQUFLOEwsS0FBQSxDQUFNOUwsR0FBQSxHQUFNMGpCLFFBQUEsQ0FBU3BtQixRQUFRO0lBQ3REcUcsSUFBQSxDQUFLOGQsUUFBQSxDQUFTQyxFQUFFO0lBQ2hCLE9BQU87RUFDWDtFQUNBLE9BQU87QUFDWDtBQUNBLFNBQVNrQyxlQUFlamdCLElBQUEsRUFBTWpJLElBQUEsRUFBTXlOLEtBQUEsRUFBTztFQUN2Q3hGLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWWxOLElBQUEsQ0FBSztFQUN0QjVXLElBQUEsQ0FBS2dDLGVBQUEsR0FBa0J5TCxLQUFBO0VBQ3ZCeEYsSUFBQSxDQUFLNmIsV0FBQSxDQUFZdFQsS0FBQSxDQUFNO0FBQzNCO0FBTUEsU0FBUzJYLG1CQUFtQmxnQixJQUFBLEVBQU07RUFDOUIsSUFBSSxDQUFDbkMsTUFBQSxJQUFVbUMsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVUSxLQUFBLENBQU1FLFlBQUEsR0FBZSxHQUNyRCxPQUFPO0VBQ1gsSUFBSTtJQUFFcE4sU0FBQTtJQUFXQztFQUFZLElBQUk4RSxJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUN4RCxJQUFJNU4sU0FBQSxJQUFhQSxTQUFBLENBQVU1QyxRQUFBLElBQVksS0FBSzZDLFdBQUEsSUFBZSxLQUN2REQsU0FBQSxDQUFVb0ksVUFBQSxJQUFjcEksU0FBQSxDQUFVb0ksVUFBQSxDQUFXdEosZUFBQSxJQUFtQixTQUFTO0lBQ3pFLElBQUlDLEtBQUEsR0FBUWlCLFNBQUEsQ0FBVW9JLFVBQUE7SUFDdEI0YyxjQUFBLENBQWVqZ0IsSUFBQSxFQUFNaEcsS0FBQSxFQUFPLE1BQU07SUFDbENpakIsVUFBQSxDQUFXLE1BQU1nRCxjQUFBLENBQWVqZ0IsSUFBQSxFQUFNaEcsS0FBQSxFQUFPLE9BQU8sR0FBRyxFQUFFO0VBQzdEO0VBQ0EsT0FBTztBQUNYO0FBT0EsU0FBU21tQixRQUFRM2tCLEtBQUEsRUFBTztFQUNwQixJQUFJNk4sTUFBQSxHQUFTO0VBQ2IsSUFBSTdOLEtBQUEsQ0FBTTRrQixPQUFBLEVBQ04vVyxNQUFBLElBQVU7RUFDZCxJQUFJN04sS0FBQSxDQUFNNmtCLE9BQUEsRUFDTmhYLE1BQUEsSUFBVTtFQUNkLElBQUk3TixLQUFBLENBQU04a0IsTUFBQSxFQUNOalgsTUFBQSxJQUFVO0VBQ2QsSUFBSTdOLEtBQUEsQ0FBTStrQixRQUFBLEVBQ05sWCxNQUFBLElBQVU7RUFDZCxPQUFPQSxNQUFBO0FBQ1g7QUFDQSxTQUFTbVgsZUFBZXhnQixJQUFBLEVBQU14RSxLQUFBLEVBQU87RUFDakMsSUFBSUcsSUFBQSxHQUFPSCxLQUFBLENBQU1GLE9BQUE7SUFBUzRpQixJQUFBLEdBQU9pQyxPQUFBLENBQVEza0IsS0FBSztFQUM5QyxJQUFJRyxJQUFBLElBQVEsS0FBTXNDLEdBQUEsSUFBT3RDLElBQUEsSUFBUSxNQUFNdWlCLElBQUEsSUFBUSxLQUFNO0lBQ2pELE9BQU8wQiwwQkFBQSxDQUEyQjVmLElBQUEsRUFBTSxFQUFFLEtBQUswZSxnQkFBQSxDQUFpQjFlLElBQUEsRUFBTSxFQUFFO0VBQzVFLFdBQ1VyRSxJQUFBLElBQVEsTUFBTSxDQUFDSCxLQUFBLENBQU0ra0IsUUFBQSxJQUFjdGlCLEdBQUEsSUFBT3RDLElBQUEsSUFBUSxNQUFNdWlCLElBQUEsSUFBUSxLQUFNO0lBQzVFLE9BQU8wQiwwQkFBQSxDQUEyQjVmLElBQUEsRUFBTSxDQUFDLEtBQUswZSxnQkFBQSxDQUFpQjFlLElBQUEsRUFBTSxDQUFDO0VBQzFFLFdBQ1NyRSxJQUFBLElBQVEsTUFBTUEsSUFBQSxJQUFRLElBQUk7SUFDL0IsT0FBTztFQUNYLFdBQ1NBLElBQUEsSUFBUSxNQUFPc0MsR0FBQSxJQUFPdEMsSUFBQSxJQUFRLE1BQU11aUIsSUFBQSxJQUFRLEtBQU07SUFDdkQsSUFBSXprQixHQUFBLEdBQU1rQyxJQUFBLElBQVEsS0FBTXdqQixhQUFBLENBQWNuZixJQUFBLEVBQU1BLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWxQLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSztJQUM1RixPQUFPd2xCLGtCQUFBLENBQW1CamUsSUFBQSxFQUFNdkcsR0FBQSxFQUFLeWtCLElBQUksS0FBS1EsZ0JBQUEsQ0FBaUIxZSxJQUFBLEVBQU12RyxHQUFHO0VBQzVFLFdBQ1NrQyxJQUFBLElBQVEsTUFBT3NDLEdBQUEsSUFBT3RDLElBQUEsSUFBUSxNQUFNdWlCLElBQUEsSUFBUSxLQUFNO0lBQ3ZELElBQUl6a0IsR0FBQSxHQUFNa0MsSUFBQSxJQUFRLEtBQU13akIsYUFBQSxDQUFjbmYsSUFBQSxFQUFNQSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQU07SUFDNUYsT0FBT3dsQixrQkFBQSxDQUFtQmplLElBQUEsRUFBTXZHLEdBQUEsRUFBS3lrQixJQUFJLEtBQUtRLGdCQUFBLENBQWlCMWUsSUFBQSxFQUFNdkcsR0FBRztFQUM1RSxXQUNTa0MsSUFBQSxJQUFRLE1BQU9zQyxHQUFBLElBQU90QyxJQUFBLElBQVEsTUFBTXVpQixJQUFBLElBQVEsS0FBTTtJQUN2RCxPQUFPc0IsZ0JBQUEsQ0FBaUJ4ZixJQUFBLEVBQU0sSUFBSWtlLElBQUksS0FBS1EsZ0JBQUEsQ0FBaUIxZSxJQUFBLEVBQU0sRUFBRTtFQUN4RSxXQUNTckUsSUFBQSxJQUFRLE1BQU9zQyxHQUFBLElBQU90QyxJQUFBLElBQVEsTUFBTXVpQixJQUFBLElBQVEsS0FBTTtJQUN2RCxPQUFPZ0Msa0JBQUEsQ0FBbUJsZ0IsSUFBSSxLQUFLd2YsZ0JBQUEsQ0FBaUJ4ZixJQUFBLEVBQU0sR0FBR2tlLElBQUksS0FBS1EsZ0JBQUEsQ0FBaUIxZSxJQUFBLEVBQU0sQ0FBQztFQUNsRyxXQUNTa2UsSUFBQSxLQUFTamdCLEdBQUEsR0FBTSxNQUFNLFNBQ3pCdEMsSUFBQSxJQUFRLE1BQU1BLElBQUEsSUFBUSxNQUFNQSxJQUFBLElBQVEsTUFBTUEsSUFBQSxJQUFRLEtBQUs7SUFDeEQsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBRUEsU0FBUzhrQixzQkFBc0J6Z0IsSUFBQSxFQUFNOFAsS0FBQSxFQUFPO0VBQ3hDOVAsSUFBQSxDQUFLRyxRQUFBLENBQVMsbUJBQW1Ca0gsQ0FBQSxJQUFLO0lBQUV5SSxLQUFBLEdBQVF6SSxDQUFBLENBQUV5SSxLQUFBLEVBQU85UCxJQUFJO0VBQUcsQ0FBQztFQUNqRSxJQUFJMGdCLE9BQUEsR0FBVSxFQUFDO0lBQUc7TUFBRWpiLE9BQUE7TUFBU2tiLFNBQUE7TUFBV0M7SUFBUSxJQUFJOVEsS0FBQTtFQUNwRCxPQUFPNlEsU0FBQSxHQUFZLEtBQUtDLE9BQUEsR0FBVSxLQUFLbmIsT0FBQSxDQUFRc00sVUFBQSxJQUFjLEtBQUt0TSxPQUFBLENBQVFwQyxVQUFBLENBQVcwTyxVQUFBLElBQWMsR0FBRztJQUNsRzRPLFNBQUE7SUFDQUMsT0FBQTtJQUNBLElBQUk3b0IsSUFBQSxHQUFPME4sT0FBQSxDQUFRcEMsVUFBQTtJQUNuQnFkLE9BQUEsQ0FBUTFlLElBQUEsQ0FBS2pLLElBQUEsQ0FBS3lWLElBQUEsQ0FBS2dDLElBQUEsRUFBTXpYLElBQUEsQ0FBSzRYLEtBQUEsSUFBUzVYLElBQUEsQ0FBS3lWLElBQUEsQ0FBS3FULFlBQUEsR0FBZTlvQixJQUFBLENBQUs0WCxLQUFBLEdBQVEsSUFBSTtJQUNyRmxLLE9BQUEsR0FBVTFOLElBQUEsQ0FBSzBOLE9BQUE7RUFDbkI7RUFDQSxJQUFJcWIsVUFBQSxHQUFhOWdCLElBQUEsQ0FBS0csUUFBQSxDQUFTLHFCQUFxQixLQUFLdkksd0JBQUEsQ0FBQTZYLGFBQUEsQ0FBY3NSLFVBQUEsQ0FBVy9nQixJQUFBLENBQUt3RixLQUFBLENBQU13YixNQUFNO0VBQ25HLElBQUlubEIsSUFBQSxHQUFNb2xCLFdBQUEsQ0FBWTtJQUFHN1MsSUFBQSxHQUFPdlMsSUFBQSxDQUFJd1MsYUFBQSxDQUFjLEtBQUs7RUFDdkRELElBQUEsQ0FBS0UsV0FBQSxDQUFZd1MsVUFBQSxDQUFXSSxpQkFBQSxDQUFrQnpiLE9BQUEsRUFBUztJQUFFN00sUUFBQSxFQUFVaUQ7RUFBSSxDQUFDLENBQUM7RUFDekUsSUFBSXdILFVBQUEsR0FBYStLLElBQUEsQ0FBSy9LLFVBQUE7SUFBWXVRLFNBQUE7SUFBV3VOLFFBQUEsR0FBVztFQUN4RCxPQUFPOWQsVUFBQSxJQUFjQSxVQUFBLENBQVdoTCxRQUFBLElBQVksTUFBTXViLFNBQUEsR0FBWXdOLE9BQUEsQ0FBUS9kLFVBQUEsQ0FBV3ZKLFFBQUEsQ0FBU2djLFdBQUEsQ0FBWSxDQUFDLElBQUk7SUFDdkcsU0FBU3pULENBQUEsR0FBSXVSLFNBQUEsQ0FBVTVhLE1BQUEsR0FBUyxHQUFHcUosQ0FBQSxJQUFLLEdBQUdBLENBQUEsSUFBSztNQUM1QyxJQUFJK1YsT0FBQSxHQUFVdmMsSUFBQSxDQUFJd1MsYUFBQSxDQUFjdUYsU0FBQSxDQUFVdlIsQ0FBQyxDQUFDO01BQzVDLE9BQU8rTCxJQUFBLENBQUsvSyxVQUFBLEVBQ1IrVSxPQUFBLENBQVE5SixXQUFBLENBQVlGLElBQUEsQ0FBSy9LLFVBQVU7TUFDdkMrSyxJQUFBLENBQUtFLFdBQUEsQ0FBWThKLE9BQU87TUFDeEIrSSxRQUFBO0lBQ0o7SUFDQTlkLFVBQUEsR0FBYStLLElBQUEsQ0FBSy9LLFVBQUE7RUFDdEI7RUFDQSxJQUFJQSxVQUFBLElBQWNBLFVBQUEsQ0FBV2hMLFFBQUEsSUFBWSxHQUNyQ2dMLFVBQUEsQ0FBVzJTLFlBQUEsQ0FBYSxpQkFBaUIsR0FBRzJLLFNBQVMsSUFBSUMsT0FBTyxHQUFHTyxRQUFBLEdBQVcsS0FBS0EsUUFBUSxLQUFLLEVBQUUsSUFBSUUsSUFBQSxDQUFLQyxTQUFBLENBQVVaLE9BQU8sQ0FBQyxFQUFFO0VBQ25JLElBQUkzUyxJQUFBLEdBQU8vTixJQUFBLENBQUtHLFFBQUEsQ0FBUywyQkFBMkJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXlJLEtBQUEsRUFBTzlQLElBQUksQ0FBQyxLQUNuRThQLEtBQUEsQ0FBTXJLLE9BQUEsQ0FBUThiLFdBQUEsQ0FBWSxHQUFHelIsS0FBQSxDQUFNckssT0FBQSxDQUFRQyxJQUFBLEVBQU0sTUFBTTtFQUMzRCxPQUFPO0lBQUVoTCxHQUFBLEVBQUswVCxJQUFBO0lBQU1MLElBQUE7SUFBTStCO0VBQU07QUFDcEM7QUFFQSxTQUFTMFIsbUJBQW1CeGhCLElBQUEsRUFBTStOLElBQUEsRUFBTTBULElBQUEsRUFBTUMsU0FBQSxFQUFXQyxRQUFBLEVBQVU7RUFDL0QsSUFBSUMsTUFBQSxHQUFTRCxRQUFBLENBQVN4cEIsTUFBQSxDQUFPcVYsSUFBQSxDQUFLVSxJQUFBLENBQUt2UyxJQUFBO0VBQ3ZDLElBQUlqQixHQUFBLEVBQUtvVixLQUFBO0VBQ1QsSUFBSSxDQUFDMlIsSUFBQSxJQUFRLENBQUMxVCxJQUFBLEVBQ1YsT0FBTztFQUNYLElBQUk4VCxNQUFBLEdBQVM5VCxJQUFBLEtBQVMyVCxTQUFBLElBQWFFLE1BQUEsSUFBVSxDQUFDSCxJQUFBO0VBQzlDLElBQUlJLE1BQUEsRUFBUTtJQUNSN2hCLElBQUEsQ0FBS0csUUFBQSxDQUFTLHVCQUF1QmtILENBQUEsSUFBSztNQUFFMEcsSUFBQSxHQUFPMUcsQ0FBQSxDQUFFMEcsSUFBQSxFQUFNNlQsTUFBQSxJQUFVRixTQUFBLEVBQVcxaEIsSUFBSTtJQUFHLENBQUM7SUFDeEYsSUFBSTRoQixNQUFBLEVBQ0EsT0FBTzdULElBQUEsR0FBTyxJQUFJblcsd0JBQUEsQ0FBQWtxQixLQUFBLENBQU1scUIsd0JBQUEsQ0FBQW1aLFFBQUEsQ0FBU3RZLElBQUEsQ0FBS3VILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXdiLE1BQUEsQ0FBT2pULElBQUEsQ0FBS0EsSUFBQSxDQUFLZ1UsT0FBQSxDQUFRLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSW5xQix3QkFBQSxDQUFBa3FCLEtBQUEsQ0FBTTlRLEtBQUE7SUFDL0csSUFBSWdSLE1BQUEsR0FBU2hpQixJQUFBLENBQUtHLFFBQUEsQ0FBUyx1QkFBdUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRTBHLElBQUEsRUFBTTRULFFBQUEsRUFBVUQsU0FBQSxFQUFXMWhCLElBQUksQ0FBQztJQUN6RixJQUFJZ2lCLE1BQUEsRUFBUTtNQUNSbFMsS0FBQSxHQUFRa1MsTUFBQTtJQUNaLE9BQ0s7TUFDRCxJQUFJblEsS0FBQSxHQUFROFAsUUFBQSxDQUFTOVAsS0FBQSxDQUFNO01BQzNCLElBQUk7VUFBRW1QO1FBQU8sSUFBSWhoQixJQUFBLENBQUt3RixLQUFBO1FBQU9zYixVQUFBLEdBQWFscEIsd0JBQUEsQ0FBQTZYLGFBQUEsQ0FBY3NSLFVBQUEsQ0FBV0MsTUFBTTtNQUN6RXRtQixHQUFBLEdBQU05QixRQUFBLENBQVN5VixhQUFBLENBQWMsS0FBSztNQUNsQ04sSUFBQSxDQUFLbUksS0FBQSxDQUFNLGVBQWUsRUFBRStMLE9BQUEsQ0FBUUMsS0FBQSxJQUFTO1FBQ3pDLElBQUkvYyxDQUFBLEdBQUl6SyxHQUFBLENBQUk0VCxXQUFBLENBQVkxVixRQUFBLENBQVN5VixhQUFBLENBQWMsR0FBRyxDQUFDO1FBQ25ELElBQUk2VCxLQUFBLEVBQ0EvYyxDQUFBLENBQUVtSixXQUFBLENBQVl3UyxVQUFBLENBQVdxQixhQUFBLENBQWNuQixNQUFBLENBQU9qVCxJQUFBLENBQUttVSxLQUFBLEVBQU9yUSxLQUFLLENBQUMsQ0FBQztNQUN6RSxDQUFDO0lBQ0w7RUFDSixPQUNLO0lBQ0Q3UixJQUFBLENBQUtHLFFBQUEsQ0FBUyx1QkFBdUJrSCxDQUFBLElBQUs7TUFBRW9hLElBQUEsR0FBT3BhLENBQUEsQ0FBRW9hLElBQUEsRUFBTXpoQixJQUFJO0lBQUcsQ0FBQztJQUNuRXRGLEdBQUEsR0FBTTBuQixRQUFBLENBQVNYLElBQUk7SUFDbkIsSUFBSXBqQixNQUFBLEVBQ0Fna0IscUJBQUEsQ0FBc0IzbkIsR0FBRztFQUNqQztFQUNBLElBQUk0bkIsV0FBQSxHQUFjNW5CLEdBQUEsSUFBT0EsR0FBQSxDQUFJNm5CLGFBQUEsQ0FBYyxpQkFBaUI7RUFDNUQsSUFBSUMsU0FBQSxHQUFZRixXQUFBLElBQWUsZ0NBQWdDbmxCLElBQUEsQ0FBS21sQixXQUFBLENBQVlHLFlBQUEsQ0FBYSxlQUFlLEtBQUssRUFBRTtFQUNuSCxJQUFJRCxTQUFBLElBQWFBLFNBQUEsQ0FBVSxDQUFDLEdBQ3hCLFNBQVNuZ0IsQ0FBQSxHQUFJLENBQUNtZ0IsU0FBQSxDQUFVLENBQUMsR0FBR25nQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxJQUFLO0lBQ3BDLElBQUlySSxLQUFBLEdBQVFVLEdBQUEsQ0FBSTJJLFVBQUE7SUFDaEIsT0FBT3JKLEtBQUEsSUFBU0EsS0FBQSxDQUFNM0IsUUFBQSxJQUFZLEdBQzlCMkIsS0FBQSxHQUFRQSxLQUFBLENBQU11SixXQUFBO0lBQ2xCLElBQUksQ0FBQ3ZKLEtBQUEsRUFDRDtJQUNKVSxHQUFBLEdBQU1WLEtBQUE7RUFDVjtFQUNKLElBQUksQ0FBQzhWLEtBQUEsRUFBTztJQUNSLElBQUk0UyxNQUFBLEdBQVMxaUIsSUFBQSxDQUFLRyxRQUFBLENBQVMsaUJBQWlCLEtBQUtILElBQUEsQ0FBS0csUUFBQSxDQUFTLFdBQVcsS0FBS3ZJLHdCQUFBLENBQUErcUIsU0FBQSxDQUFVNUIsVUFBQSxDQUFXL2dCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXdiLE1BQU07SUFDckhsUixLQUFBLEdBQVE0UyxNQUFBLENBQU9FLFVBQUEsQ0FBV2xvQixHQUFBLEVBQUs7TUFDM0JtVyxrQkFBQSxFQUFvQixDQUFDLEVBQUVnUixNQUFBLElBQVVXLFNBQUE7TUFDakM5QixPQUFBLEVBQVNpQixRQUFBO01BQ1RrQixhQUFhQyxJQUFBLEVBQUs7UUFDZCxJQUFJQSxJQUFBLENBQUlocEIsUUFBQSxJQUFZLFFBQVEsQ0FBQ2dwQixJQUFBLENBQUl2ZixXQUFBLElBQzdCdWYsSUFBQSxDQUFJNXFCLFVBQUEsSUFBYyxDQUFDNnFCLGFBQUEsQ0FBY2xwQixJQUFBLENBQUtpcEIsSUFBQSxDQUFJNXFCLFVBQUEsQ0FBVzRCLFFBQVEsR0FDN0QsT0FBTztVQUFFNFUsTUFBQSxFQUFRO1FBQUs7UUFDMUIsT0FBTztNQUNYO0lBQ0osQ0FBQztFQUNMO0VBQ0EsSUFBSThULFNBQUEsRUFBVztJQUNYMVMsS0FBQSxHQUFRa1QsVUFBQSxDQUFXQyxVQUFBLENBQVduVCxLQUFBLEVBQU8sQ0FBQzBTLFNBQUEsQ0FBVSxDQUFDLEdBQUcsQ0FBQ0EsU0FBQSxDQUFVLENBQUMsQ0FBQyxHQUFHQSxTQUFBLENBQVUsQ0FBQyxDQUFDO0VBQ3BGLE9BQ0s7SUFDRDFTLEtBQUEsR0FBUWxZLHdCQUFBLENBQUFrcUIsS0FBQSxDQUFNb0IsT0FBQSxDQUFRQyxpQkFBQSxDQUFrQnJULEtBQUEsQ0FBTXJLLE9BQUEsRUFBU2tjLFFBQVEsR0FBRyxJQUFJO0lBQ3RFLElBQUk3UixLQUFBLENBQU02USxTQUFBLElBQWE3USxLQUFBLENBQU04USxPQUFBLEVBQVM7TUFDbEMsSUFBSUQsU0FBQSxHQUFZO1FBQUdDLE9BQUEsR0FBVTtNQUM3QixTQUFTN29CLElBQUEsR0FBTytYLEtBQUEsQ0FBTXJLLE9BQUEsQ0FBUXBDLFVBQUEsRUFBWXNkLFNBQUEsR0FBWTdRLEtBQUEsQ0FBTTZRLFNBQUEsSUFBYSxDQUFDNW9CLElBQUEsQ0FBS3lWLElBQUEsQ0FBS1UsSUFBQSxDQUFLa1YsU0FBQSxFQUFXekMsU0FBQSxJQUFhNW9CLElBQUEsR0FBT0EsSUFBQSxDQUFLc0wsVUFBQSxFQUFZLENBQUU7TUFDM0ksU0FBU3RMLElBQUEsR0FBTytYLEtBQUEsQ0FBTXJLLE9BQUEsQ0FBUUYsU0FBQSxFQUFXcWIsT0FBQSxHQUFVOVEsS0FBQSxDQUFNOFEsT0FBQSxJQUFXLENBQUM3b0IsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUtrVixTQUFBLEVBQVd4QyxPQUFBLElBQVc3b0IsSUFBQSxHQUFPQSxJQUFBLENBQUt3TixTQUFBLEVBQVcsQ0FBRTtNQUNuSXVLLEtBQUEsR0FBUW1ULFVBQUEsQ0FBV25ULEtBQUEsRUFBTzZRLFNBQUEsRUFBV0MsT0FBTztJQUNoRDtFQUNKO0VBQ0E1Z0IsSUFBQSxDQUFLRyxRQUFBLENBQVMsbUJBQW1Ca0gsQ0FBQSxJQUFLO0lBQUV5SSxLQUFBLEdBQVF6SSxDQUFBLENBQUV5SSxLQUFBLEVBQU85UCxJQUFJO0VBQUcsQ0FBQztFQUNqRSxPQUFPOFAsS0FBQTtBQUNYO0FBQ0EsSUFBTWlULGFBQUEsR0FBZ0I7QUFTdEIsU0FBU0ksa0JBQWtCRSxRQUFBLEVBQVUxQixRQUFBLEVBQVU7RUFDM0MsSUFBSTBCLFFBQUEsQ0FBU3RSLFVBQUEsR0FBYSxHQUN0QixPQUFPc1IsUUFBQTtFQUNYLFNBQVN0SixDQUFBLEdBQUk0SCxRQUFBLENBQVMxWSxLQUFBLEVBQU84USxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUFLO0lBQ3RDLElBQUk1aEIsTUFBQSxHQUFTd3BCLFFBQUEsQ0FBUzVwQixJQUFBLENBQUtnaUIsQ0FBQztJQUM1QixJQUFJdUosS0FBQSxHQUFRbnJCLE1BQUEsQ0FBT29yQixjQUFBLENBQWU1QixRQUFBLENBQVMzcEIsS0FBQSxDQUFNK2hCLENBQUMsQ0FBQztJQUNuRCxJQUFJeUosUUFBQTtNQUFVbmEsTUFBQSxHQUFTLEVBQUM7SUFDeEJnYSxRQUFBLENBQVNwQixPQUFBLENBQVFscUIsSUFBQSxJQUFRO01BQ3JCLElBQUksQ0FBQ3NSLE1BQUEsRUFDRDtNQUNKLElBQUkrRSxJQUFBLEdBQU9rVixLQUFBLENBQU1HLFlBQUEsQ0FBYTFyQixJQUFBLENBQUt5VixJQUFJO1FBQUdrVyxNQUFBO01BQzFDLElBQUksQ0FBQ3RWLElBQUEsRUFDRCxPQUFPL0UsTUFBQSxHQUFTO01BQ3BCLElBQUlxYSxNQUFBLEdBQVNyYSxNQUFBLENBQU9yUSxNQUFBLElBQVV3cUIsUUFBQSxDQUFTeHFCLE1BQUEsSUFBVTJxQixZQUFBLENBQWF2VixJQUFBLEVBQU1vVixRQUFBLEVBQVV6ckIsSUFBQSxFQUFNc1IsTUFBQSxDQUFPQSxNQUFBLENBQU9yUSxNQUFBLEdBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRztRQUMvR3FRLE1BQUEsQ0FBT0EsTUFBQSxDQUFPclEsTUFBQSxHQUFTLENBQUMsSUFBSTBxQixNQUFBO01BQ2hDLE9BQ0s7UUFDRCxJQUFJcmEsTUFBQSxDQUFPclEsTUFBQSxFQUNQcVEsTUFBQSxDQUFPQSxNQUFBLENBQU9yUSxNQUFBLEdBQVMsQ0FBQyxJQUFJNHFCLFVBQUEsQ0FBV3ZhLE1BQUEsQ0FBT0EsTUFBQSxDQUFPclEsTUFBQSxHQUFTLENBQUMsR0FBR3dxQixRQUFBLENBQVN4cUIsTUFBTTtRQUNyRixJQUFJNnFCLE9BQUEsR0FBVUMsWUFBQSxDQUFhL3JCLElBQUEsRUFBTXFXLElBQUk7UUFDckMvRSxNQUFBLENBQU9ySCxJQUFBLENBQUs2aEIsT0FBTztRQUNuQlAsS0FBQSxHQUFRQSxLQUFBLENBQU1TLFNBQUEsQ0FBVUYsT0FBQSxDQUFRclcsSUFBSTtRQUNwQ2dXLFFBQUEsR0FBV3BWLElBQUE7TUFDZjtJQUNKLENBQUM7SUFDRCxJQUFJL0UsTUFBQSxFQUNBLE9BQU96Uix3QkFBQSxDQUFBbVosUUFBQSxDQUFTdFksSUFBQSxDQUFLNFEsTUFBTTtFQUNuQztFQUNBLE9BQU9nYSxRQUFBO0FBQ1g7QUFDQSxTQUFTUyxhQUFhL3JCLElBQUEsRUFBTXFXLElBQUEsRUFBTTNWLElBQUEsR0FBTyxHQUFHO0VBQ3hDLFNBQVM0SixDQUFBLEdBQUkrTCxJQUFBLENBQUtwVixNQUFBLEdBQVMsR0FBR3FKLENBQUEsSUFBSzVKLElBQUEsRUFBTTRKLENBQUEsSUFDckN0SyxJQUFBLEdBQU9xVyxJQUFBLENBQUsvTCxDQUFDLEVBQUUrTSxNQUFBLENBQU8sTUFBTXhYLHdCQUFBLENBQUFtWixRQUFBLENBQVN0WSxJQUFBLENBQUtWLElBQUksQ0FBQztFQUNuRCxPQUFPQSxJQUFBO0FBQ1g7QUFHQSxTQUFTNHJCLGFBQWF2VixJQUFBLEVBQU1vVixRQUFBLEVBQVV6ckIsSUFBQSxFQUFNaXNCLE9BQUEsRUFBUy9hLEtBQUEsRUFBTztFQUN4RCxJQUFJQSxLQUFBLEdBQVFtRixJQUFBLENBQUtwVixNQUFBLElBQVVpUSxLQUFBLEdBQVF1YSxRQUFBLENBQVN4cUIsTUFBQSxJQUFVb1YsSUFBQSxDQUFLbkYsS0FBSyxLQUFLdWEsUUFBQSxDQUFTdmEsS0FBSyxHQUFHO0lBQ2xGLElBQUkyQyxLQUFBLEdBQVErWCxZQUFBLENBQWF2VixJQUFBLEVBQU1vVixRQUFBLEVBQVV6ckIsSUFBQSxFQUFNaXNCLE9BQUEsQ0FBUXplLFNBQUEsRUFBVzBELEtBQUEsR0FBUSxDQUFDO0lBQzNFLElBQUkyQyxLQUFBLEVBQ0EsT0FBT29ZLE9BQUEsQ0FBUWpVLElBQUEsQ0FBS2lVLE9BQUEsQ0FBUXZlLE9BQUEsQ0FBUXdlLFlBQUEsQ0FBYUQsT0FBQSxDQUFRalMsVUFBQSxHQUFhLEdBQUduRyxLQUFLLENBQUM7SUFDbkYsSUFBSTBYLEtBQUEsR0FBUVUsT0FBQSxDQUFRVCxjQUFBLENBQWVTLE9BQUEsQ0FBUWpTLFVBQVU7SUFDckQsSUFBSXVSLEtBQUEsQ0FBTVMsU0FBQSxDQUFVOWEsS0FBQSxJQUFTbUYsSUFBQSxDQUFLcFYsTUFBQSxHQUFTLElBQUlqQixJQUFBLENBQUt5VixJQUFBLEdBQU9ZLElBQUEsQ0FBS25GLEtBQUEsR0FBUSxDQUFDLENBQUMsR0FDdEUsT0FBTythLE9BQUEsQ0FBUWpVLElBQUEsQ0FBS2lVLE9BQUEsQ0FBUXZlLE9BQUEsQ0FBUXllLE1BQUEsQ0FBT3RzQix3QkFBQSxDQUFBbVosUUFBQSxDQUFTdFksSUFBQSxDQUFLcXJCLFlBQUEsQ0FBYS9yQixJQUFBLEVBQU1xVyxJQUFBLEVBQU1uRixLQUFBLEdBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN0RztBQUNKO0FBQ0EsU0FBUzJhLFdBQVc3ckIsSUFBQSxFQUFNa1IsS0FBQSxFQUFPO0VBQzdCLElBQUlBLEtBQUEsSUFBUyxHQUNULE9BQU9sUixJQUFBO0VBQ1gsSUFBSXNyQixRQUFBLEdBQVd0ckIsSUFBQSxDQUFLME4sT0FBQSxDQUFRd2UsWUFBQSxDQUFhbHNCLElBQUEsQ0FBS2dhLFVBQUEsR0FBYSxHQUFHNlIsVUFBQSxDQUFXN3JCLElBQUEsQ0FBS3dOLFNBQUEsRUFBVzBELEtBQUEsR0FBUSxDQUFDLENBQUM7RUFDbkcsSUFBSWtiLElBQUEsR0FBT3BzQixJQUFBLENBQUt3ckIsY0FBQSxDQUFleHJCLElBQUEsQ0FBS2dhLFVBQVUsRUFBRXFTLFVBQUEsQ0FBV3hzQix3QkFBQSxDQUFBbVosUUFBQSxDQUFTQyxLQUFBLEVBQU8sSUFBSTtFQUMvRSxPQUFPalosSUFBQSxDQUFLZ1ksSUFBQSxDQUFLc1QsUUFBQSxDQUFTYSxNQUFBLENBQU9DLElBQUksQ0FBQztBQUMxQztBQUNBLFNBQVNFLFdBQVdoQixRQUFBLEVBQVU5akIsSUFBQSxFQUFNOUcsSUFBQSxFQUFNQyxFQUFBLEVBQUl1USxLQUFBLEVBQU8yWCxPQUFBLEVBQVM7RUFDMUQsSUFBSTdvQixJQUFBLEdBQU93SCxJQUFBLEdBQU8sSUFBSThqQixRQUFBLENBQVNoZ0IsVUFBQSxHQUFhZ2dCLFFBQUEsQ0FBUzlkLFNBQUE7SUFBV3FHLEtBQUEsR0FBUTdULElBQUEsQ0FBSzBOLE9BQUE7RUFDN0UsSUFBSTRkLFFBQUEsQ0FBU3RSLFVBQUEsR0FBYSxHQUN0QjZPLE9BQUEsR0FBVTtFQUNkLElBQUkzWCxLQUFBLEdBQVF2USxFQUFBLEdBQUssR0FDYmtULEtBQUEsR0FBUXlZLFVBQUEsQ0FBV3pZLEtBQUEsRUFBT3JNLElBQUEsRUFBTTlHLElBQUEsRUFBTUMsRUFBQSxFQUFJdVEsS0FBQSxHQUFRLEdBQUcyWCxPQUFPO0VBQ2hFLElBQUkzWCxLQUFBLElBQVN4USxJQUFBLEVBQ1RtVCxLQUFBLEdBQVFyTSxJQUFBLEdBQU8sSUFBSXhILElBQUEsQ0FBS3dyQixjQUFBLENBQWUsQ0FBQyxFQUFFYSxVQUFBLENBQVd4WSxLQUFBLEVBQU9nVixPQUFBLElBQVczWCxLQUFLLEVBQUVpYixNQUFBLENBQU90WSxLQUFLLElBQ3BGQSxLQUFBLENBQU1zWSxNQUFBLENBQU9uc0IsSUFBQSxDQUFLd3JCLGNBQUEsQ0FBZXhyQixJQUFBLENBQUtnYSxVQUFVLEVBQUVxUyxVQUFBLENBQVd4c0Isd0JBQUEsQ0FBQW1aLFFBQUEsQ0FBU0MsS0FBQSxFQUFPLElBQUksQ0FBQztFQUM1RixPQUFPcVMsUUFBQSxDQUFTWSxZQUFBLENBQWExa0IsSUFBQSxHQUFPLElBQUksSUFBSThqQixRQUFBLENBQVN0UixVQUFBLEdBQWEsR0FBR2hhLElBQUEsQ0FBS2dZLElBQUEsQ0FBS25FLEtBQUssQ0FBQztBQUN6RjtBQUNBLFNBQVNxWCxXQUFXblQsS0FBQSxFQUFPNlEsU0FBQSxFQUFXQyxPQUFBLEVBQVM7RUFDM0MsSUFBSUQsU0FBQSxHQUFZN1EsS0FBQSxDQUFNNlEsU0FBQSxFQUNsQjdRLEtBQUEsR0FBUSxJQUFJbFksd0JBQUEsQ0FBQWtxQixLQUFBLENBQU11QyxVQUFBLENBQVd2VSxLQUFBLENBQU1ySyxPQUFBLEVBQVMsSUFBSWtiLFNBQUEsRUFBVzdRLEtBQUEsQ0FBTTZRLFNBQUEsRUFBVyxHQUFHN1EsS0FBQSxDQUFNOFEsT0FBTyxHQUFHRCxTQUFBLEVBQVc3USxLQUFBLENBQU04USxPQUFPO0VBQzNILElBQUlBLE9BQUEsR0FBVTlRLEtBQUEsQ0FBTThRLE9BQUEsRUFDaEI5USxLQUFBLEdBQVEsSUFBSWxZLHdCQUFBLENBQUFrcUIsS0FBQSxDQUFNdUMsVUFBQSxDQUFXdlUsS0FBQSxDQUFNckssT0FBQSxFQUFTLEdBQUdtYixPQUFBLEVBQVM5USxLQUFBLENBQU04USxPQUFBLEVBQVMsR0FBRyxDQUFDLEdBQUc5USxLQUFBLENBQU02USxTQUFBLEVBQVdDLE9BQU87RUFDMUcsT0FBTzlRLEtBQUE7QUFDWDtBQUlBLElBQU1zUixPQUFBLEdBQVU7RUFDWmtELEtBQUEsRUFBTyxDQUFDLE9BQU87RUFDZkMsS0FBQSxFQUFPLENBQUMsT0FBTztFQUNmQyxLQUFBLEVBQU8sQ0FBQyxPQUFPO0VBQ2ZDLE9BQUEsRUFBUyxDQUFDLE9BQU87RUFDakJDLFFBQUEsRUFBVSxDQUFDLE9BQU87RUFDbEJDLEdBQUEsRUFBSyxDQUFDLFNBQVMsVUFBVTtFQUN6QjVHLEVBQUEsRUFBSSxDQUFDLFNBQVMsT0FBTztFQUNyQjZHLEVBQUEsRUFBSSxDQUFDLFNBQVMsU0FBUyxJQUFJO0VBQzNCQyxFQUFBLEVBQUksQ0FBQyxTQUFTLFNBQVMsSUFBSTtBQUMvQjtBQUNBLElBQUlDLFlBQUEsR0FBZTtBQUNuQixTQUFTN0QsWUFBQSxFQUFjO0VBQ25CLE9BQU82RCxZQUFBLEtBQWlCQSxZQUFBLEdBQWVsc0IsUUFBQSxDQUFTbXNCLGNBQUEsQ0FBZUMsa0JBQUEsQ0FBbUIsT0FBTztBQUM3RjtBQUNBLElBQUlDLE9BQUEsR0FBVTtBQUNkLFNBQVNDLGlCQUFpQnpELElBQUEsRUFBTTtFQUM1QixJQUFJMEQsWUFBQSxHQUFlbEwsTUFBQSxDQUFPa0wsWUFBQTtFQUMxQixJQUFJLENBQUNBLFlBQUEsRUFDRCxPQUFPMUQsSUFBQTtFQUlYLElBQUksQ0FBQ3dELE9BQUEsRUFDREEsT0FBQSxHQUFVRSxZQUFBLENBQWFDLGFBQUEsSUFBaUJELFlBQUEsQ0FBYUUsWUFBQSxDQUFhLHdCQUF3QjtJQUFFQyxVQUFBLEVBQWFDLENBQUEsSUFBTUE7RUFBRSxDQUFDO0VBQ3RILE9BQU9OLE9BQUEsQ0FBUUssVUFBQSxDQUFXN0QsSUFBSTtBQUNsQztBQUNBLFNBQVNXLFNBQVNYLElBQUEsRUFBTTtFQUNwQixJQUFJK0QsS0FBQSxHQUFRLHNCQUFzQnJvQixJQUFBLENBQUtza0IsSUFBSTtFQUMzQyxJQUFJK0QsS0FBQSxFQUNBL0QsSUFBQSxHQUFPQSxJQUFBLENBQUszUixLQUFBLENBQU0wVixLQUFBLENBQU0sQ0FBQyxFQUFFeHNCLE1BQU07RUFDckMsSUFBSThDLEdBQUEsR0FBTW1sQixXQUFBLENBQVksRUFBRTVTLGFBQUEsQ0FBYyxLQUFLO0VBQzNDLElBQUlvWCxRQUFBLEdBQVcsbUJBQW1CdG9CLElBQUEsQ0FBS3NrQixJQUFJO0lBQUdyVCxJQUFBO0VBQzlDLElBQUlBLElBQUEsR0FBT3FYLFFBQUEsSUFBWXJFLE9BQUEsQ0FBUXFFLFFBQUEsQ0FBUyxDQUFDLEVBQUUzUCxXQUFBLENBQVksQ0FBQyxHQUNwRDJMLElBQUEsR0FBT3JULElBQUEsQ0FBS3NYLEdBQUEsQ0FBSS9RLENBQUEsSUFBSyxNQUFNQSxDQUFBLEdBQUksR0FBRyxFQUFFZ1IsSUFBQSxDQUFLLEVBQUUsSUFBSWxFLElBQUEsR0FBT3JULElBQUEsQ0FBS3NYLEdBQUEsQ0FBSS9RLENBQUEsSUFBSyxPQUFPQSxDQUFBLEdBQUksR0FBRyxFQUFFd0UsT0FBQSxDQUFRLEVBQUV3TSxJQUFBLENBQUssRUFBRTtFQUN6RzdwQixHQUFBLENBQUk4cEIsU0FBQSxHQUFZVixnQkFBQSxDQUFpQnpELElBQUk7RUFDckMsSUFBSXJULElBQUEsRUFDQSxTQUFTL0wsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSStMLElBQUEsQ0FBS3BWLE1BQUEsRUFBUXFKLENBQUEsSUFDN0J2RyxHQUFBLEdBQU1BLEdBQUEsQ0FBSXltQixhQUFBLENBQWNuVSxJQUFBLENBQUsvTCxDQUFDLENBQUMsS0FBS3ZHLEdBQUE7RUFDNUMsT0FBT0EsR0FBQTtBQUNYO0FBTUEsU0FBU3VtQixzQkFBc0IzbkIsR0FBQSxFQUFLO0VBQ2hDLElBQUlzVixLQUFBLEdBQVF0VixHQUFBLENBQUltckIsZ0JBQUEsQ0FBaUJsb0IsTUFBQSxHQUFTLG1DQUFtQyw0QkFBNEI7RUFDekcsU0FBUzBFLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyTixLQUFBLENBQU1oWCxNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDbkMsSUFBSXRLLElBQUEsR0FBT2lZLEtBQUEsQ0FBTTNOLENBQUM7SUFDbEIsSUFBSXRLLElBQUEsQ0FBS2tDLFVBQUEsQ0FBV2pCLE1BQUEsSUFBVSxLQUFLakIsSUFBQSxDQUFLMFEsV0FBQSxJQUFlLFVBQVkxUSxJQUFBLENBQUtHLFVBQUEsRUFDcEVILElBQUEsQ0FBS0csVUFBQSxDQUFXK3JCLFlBQUEsQ0FBYXZwQixHQUFBLENBQUkyRixhQUFBLENBQWNnUSxjQUFBLENBQWUsR0FBRyxHQUFHdFksSUFBSTtFQUNoRjtBQUNKO0FBQ0EsU0FBU2lyQixXQUFXbFQsS0FBQSxFQUFPNFEsT0FBQSxFQUFTO0VBQ2hDLElBQUksQ0FBQzVRLEtBQUEsQ0FBTXBLLElBQUEsRUFDUCxPQUFPb0ssS0FBQTtFQUNYLElBQUlrUixNQUFBLEdBQVNsUixLQUFBLENBQU1ySyxPQUFBLENBQVFwQyxVQUFBLENBQVdtSyxJQUFBLENBQUt3VCxNQUFBO0lBQVE4RSxLQUFBO0VBQ25ELElBQUk7SUFDQUEsS0FBQSxHQUFRekUsSUFBQSxDQUFLMEUsS0FBQSxDQUFNckYsT0FBTztFQUM5QixTQUNPaEosQ0FBQSxFQUFHO0lBQ04sT0FBTzVILEtBQUE7RUFDWDtFQUNBLElBQUk7SUFBRXJLLE9BQUE7SUFBU2tiLFNBQUE7SUFBV0M7RUFBUSxJQUFJOVEsS0FBQTtFQUN0QyxTQUFTek4sQ0FBQSxHQUFJeWpCLEtBQUEsQ0FBTTlzQixNQUFBLEdBQVMsR0FBR3FKLENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQUssR0FBRztJQUMzQyxJQUFJbUwsSUFBQSxHQUFPd1QsTUFBQSxDQUFPaFIsS0FBQSxDQUFNOFYsS0FBQSxDQUFNempCLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUNtTCxJQUFBLElBQVFBLElBQUEsQ0FBS3dZLGdCQUFBLENBQWlCLEdBQy9CO0lBQ0p2Z0IsT0FBQSxHQUFVN04sd0JBQUEsQ0FBQW1aLFFBQUEsQ0FBU3RZLElBQUEsQ0FBSytVLElBQUEsQ0FBSzRCLE1BQUEsQ0FBTzBXLEtBQUEsQ0FBTXpqQixDQUFBLEdBQUksQ0FBQyxHQUFHb0QsT0FBTyxDQUFDO0lBQzFEa2IsU0FBQTtJQUNBQyxPQUFBO0VBQ0o7RUFDQSxPQUFPLElBQUlocEIsd0JBQUEsQ0FBQWtxQixLQUFBLENBQU1yYyxPQUFBLEVBQVNrYixTQUFBLEVBQVdDLE9BQU87QUFDaEQ7QUFJQSxJQUFNcUYsUUFBQSxHQUFXLENBQUM7QUFDbEIsSUFBTUMsWUFBQSxHQUFlLENBQUM7QUFDdEIsSUFBTUMsZUFBQSxHQUFrQjtFQUFFQyxVQUFBLEVBQVk7RUFBTUMsU0FBQSxFQUFXO0FBQUs7QUFDNUQsSUFBTUMsVUFBQSxHQUFOLE1BQWlCO0VBQ2JyYyxZQUFBLEVBQWM7SUFDVixLQUFLc1csUUFBQSxHQUFXO0lBQ2hCLEtBQUs3RSxTQUFBLEdBQVk7SUFDakIsS0FBSzZLLFdBQUEsR0FBYztJQUNuQixLQUFLQyxlQUFBLEdBQWtCO0lBQ3ZCLEtBQUtDLFNBQUEsR0FBWTtNQUFFQyxJQUFBLEVBQU07TUFBR3hxQixDQUFBLEVBQUc7TUFBR0MsQ0FBQSxFQUFHO01BQUdxUixJQUFBLEVBQU07TUFBSW1aLE1BQUEsRUFBUTtJQUFFO0lBQzVELEtBQUtDLG1CQUFBLEdBQXNCO0lBQzNCLEtBQUtDLGlCQUFBLEdBQW9CO0lBQ3pCLEtBQUtDLFlBQUEsR0FBZTtJQUNwQixLQUFLQywyQkFBQSxHQUE4QjtJQUNuQyxLQUFLQyxTQUFBLEdBQVk7SUFDakIsS0FBS0MsU0FBQSxHQUFZO0lBQ2pCLEtBQUtDLGdCQUFBLEdBQW1CO0lBQ3hCLEtBQUs3VixTQUFBLEdBQVk7SUFDakIsS0FBSzZCLGVBQUEsR0FBa0I7SUFDdkIsS0FBS2lVLGdCQUFBLEdBQW1CO0lBQ3hCLEtBQUs1VCxnQkFBQSxHQUFtQixFQUFDO0lBQ3pCLEtBQUs2VCxrQkFBQSxHQUFxQjtJQUMxQixLQUFLQyxhQUFBLEdBQWdCO0lBRXJCLEtBQUtDLHlCQUFBLEdBQTRCO0lBQ2pDLEtBQUtDLGNBQUEsR0FBaUI7SUFDdEIsS0FBS0MsYUFBQSxHQUFnQixlQUFBcFMsTUFBQSxDQUFPaEcsTUFBQSxDQUFPLElBQUk7SUFDdkMsS0FBSzJOLGtCQUFBLEdBQXFCO0VBQzlCO0FBQ0o7QUFDQSxTQUFTMEssVUFBVXpuQixJQUFBLEVBQU07RUFDckIsU0FBU3hFLEtBQUEsSUFBU3lxQixRQUFBLEVBQVU7SUFDeEIsSUFBSXlCLE9BQUEsR0FBVXpCLFFBQUEsQ0FBU3pxQixLQUFLO0lBQzVCd0UsSUFBQSxDQUFLdEYsR0FBQSxDQUFJc2lCLGdCQUFBLENBQWlCeGhCLEtBQUEsRUFBT3dFLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXVVLGFBQUEsQ0FBY2hzQixLQUFLLElBQUttc0IsTUFBQSxJQUFVO01BQzFFLElBQUlDLGtCQUFBLENBQW1CNW5CLElBQUEsRUFBTTJuQixNQUFLLEtBQUssQ0FBQ0UsZ0JBQUEsQ0FBaUI3bkIsSUFBQSxFQUFNMm5CLE1BQUssTUFDL0QzbkIsSUFBQSxDQUFLcWIsUUFBQSxJQUFZLEVBQUVzTSxNQUFBLENBQU1uYSxJQUFBLElBQVEwWSxZQUFBLElBQ2xDd0IsT0FBQSxDQUFRMW5CLElBQUEsRUFBTTJuQixNQUFLO0lBQzNCLEdBQUd4QixlQUFBLENBQWdCM3FCLEtBQUssSUFBSTtNQUFFc3NCLE9BQUEsRUFBUztJQUFLLElBQUksTUFBUztFQUM3RDtFQUlBLElBQUlqcUIsTUFBQSxFQUNBbUMsSUFBQSxDQUFLdEYsR0FBQSxDQUFJc2lCLGdCQUFBLENBQWlCLFNBQVMsTUFBTSxJQUFJO0VBQ2pEK0ssZUFBQSxDQUFnQi9uQixJQUFJO0FBQ3hCO0FBQ0EsU0FBU2dvQixtQkFBbUJob0IsSUFBQSxFQUFNd2EsTUFBQSxFQUFRO0VBQ3RDeGEsSUFBQSxDQUFLaVQsS0FBQSxDQUFNMlQsbUJBQUEsR0FBc0JwTSxNQUFBO0VBQ2pDeGEsSUFBQSxDQUFLaVQsS0FBQSxDQUFNNFQsaUJBQUEsR0FBb0JvQixJQUFBLENBQUtDLEdBQUEsQ0FBSTtBQUM1QztBQUNBLFNBQVNDLGFBQWFub0IsSUFBQSxFQUFNO0VBQ3hCQSxJQUFBLENBQUs2YixXQUFBLENBQVlsTixJQUFBLENBQUs7RUFDdEIsU0FBU25CLElBQUEsSUFBUXhOLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXVVLGFBQUEsRUFDeEJ4bkIsSUFBQSxDQUFLdEYsR0FBQSxDQUFJb2lCLG1CQUFBLENBQW9CdFAsSUFBQSxFQUFNeE4sSUFBQSxDQUFLaVQsS0FBQSxDQUFNdVUsYUFBQSxDQUFjaGEsSUFBSSxDQUFDO0VBQ3JFNGEsWUFBQSxDQUFhcG9CLElBQUEsQ0FBS2lULEtBQUEsQ0FBTWtVLGdCQUFnQjtFQUN4Q2lCLFlBQUEsQ0FBYXBvQixJQUFBLENBQUtpVCxLQUFBLENBQU04VCwyQkFBMkI7QUFDdkQ7QUFDQSxTQUFTZ0IsZ0JBQWdCL25CLElBQUEsRUFBTTtFQUMzQkEsSUFBQSxDQUFLRyxRQUFBLENBQVMsbUJBQW1Ca29CLGVBQUEsSUFBbUI7SUFDaEQsU0FBUzdhLElBQUEsSUFBUTZhLGVBQUEsRUFDYixJQUFJLENBQUNyb0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNdVUsYUFBQSxDQUFjaGEsSUFBSSxHQUM5QnhOLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSXNpQixnQkFBQSxDQUFpQnhQLElBQUEsRUFBTXhOLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXVVLGFBQUEsQ0FBY2hhLElBQUksSUFBSWhTLEtBQUEsSUFBU3FzQixnQkFBQSxDQUFpQjduQixJQUFBLEVBQU14RSxLQUFLLENBQUM7RUFDbkgsQ0FBQztBQUNMO0FBQ0EsU0FBU3FzQixpQkFBaUI3bkIsSUFBQSxFQUFNeEUsS0FBQSxFQUFPO0VBQ25DLE9BQU93RSxJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJtb0IsU0FBQSxJQUFZO0lBQ2hELElBQUlaLE9BQUEsR0FBVVksU0FBQSxDQUFTOXNCLEtBQUEsQ0FBTWdTLElBQUk7SUFDakMsT0FBT2thLE9BQUEsR0FBVUEsT0FBQSxDQUFRMW5CLElBQUEsRUFBTXhFLEtBQUssS0FBS0EsS0FBQSxDQUFNK3NCLGdCQUFBLEdBQW1CO0VBQ3RFLENBQUM7QUFDTDtBQUNBLFNBQVNYLG1CQUFtQjVuQixJQUFBLEVBQU14RSxLQUFBLEVBQU87RUFDckMsSUFBSSxDQUFDQSxLQUFBLENBQU1ndEIsT0FBQSxFQUNQLE9BQU87RUFDWCxJQUFJaHRCLEtBQUEsQ0FBTStzQixnQkFBQSxFQUNOLE9BQU87RUFDWCxTQUFTeHdCLElBQUEsR0FBT3lELEtBQUEsQ0FBTXVLLE1BQUEsRUFBUWhPLElBQUEsSUFBUWlJLElBQUEsQ0FBS3RGLEdBQUEsRUFBSzNDLElBQUEsR0FBT0EsSUFBQSxDQUFLRyxVQUFBLEVBQ3hELElBQUksQ0FBQ0gsSUFBQSxJQUFRQSxJQUFBLENBQUtNLFFBQUEsSUFBWSxNQUN6Qk4sSUFBQSxDQUFLbUMsVUFBQSxJQUFjbkMsSUFBQSxDQUFLbUMsVUFBQSxDQUFXMlEsU0FBQSxDQUFVclAsS0FBSyxHQUNuRCxPQUFPO0VBQ2YsT0FBTztBQUNYO0FBQ0EsU0FBU2l0QixjQUFjem9CLElBQUEsRUFBTXhFLEtBQUEsRUFBTztFQUNoQyxJQUFJLENBQUNxc0IsZ0JBQUEsQ0FBaUI3bkIsSUFBQSxFQUFNeEUsS0FBSyxLQUFLeXFCLFFBQUEsQ0FBU3pxQixLQUFBLENBQU1nUyxJQUFJLE1BQ3BEeE4sSUFBQSxDQUFLcWIsUUFBQSxJQUFZLEVBQUU3ZixLQUFBLENBQU1nUyxJQUFBLElBQVEwWSxZQUFBLElBQ2xDRCxRQUFBLENBQVN6cUIsS0FBQSxDQUFNZ1MsSUFBSSxFQUFFeE4sSUFBQSxFQUFNeEUsS0FBSztBQUN4QztBQUNBMHFCLFlBQUEsQ0FBYXdDLE9BQUEsR0FBVSxDQUFDMW9CLElBQUEsRUFBTTJvQixNQUFBLEtBQVc7RUFDckMsSUFBSW50QixLQUFBLEdBQVFtdEIsTUFBQTtFQUNaM29CLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXNOLFFBQUEsR0FBVy9rQixLQUFBLENBQU1GLE9BQUEsSUFBVyxNQUFNRSxLQUFBLENBQU0ra0IsUUFBQTtFQUNuRCxJQUFJcUksbUJBQUEsQ0FBb0I1b0IsSUFBQSxFQUFNeEUsS0FBSyxHQUMvQjtFQUNKd0UsSUFBQSxDQUFLaVQsS0FBQSxDQUFNc1QsV0FBQSxHQUFjL3FCLEtBQUEsQ0FBTUYsT0FBQTtFQUMvQjBFLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXVULGVBQUEsR0FBa0J5QixJQUFBLENBQUtDLEdBQUEsQ0FBSTtFQUl0QyxJQUFJOXBCLE9BQUEsSUFBV1QsTUFBQSxJQUFVbkMsS0FBQSxDQUFNRixPQUFBLElBQVcsSUFDdEM7RUFDSixJQUFJRSxLQUFBLENBQU1GLE9BQUEsSUFBVyxLQUNqQjBFLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWWdOLFVBQUEsQ0FBVztFQUtoQyxJQUFJOXFCLEdBQUEsSUFBT3ZDLEtBQUEsQ0FBTUYsT0FBQSxJQUFXLE1BQU0sQ0FBQ0UsS0FBQSxDQUFNNGtCLE9BQUEsSUFBVyxDQUFDNWtCLEtBQUEsQ0FBTThrQixNQUFBLElBQVUsQ0FBQzlrQixLQUFBLENBQU02a0IsT0FBQSxFQUFTO0lBQ2pGLElBQUk2SCxHQUFBLEdBQU1ELElBQUEsQ0FBS0MsR0FBQSxDQUFJO0lBQ25CbG9CLElBQUEsQ0FBS2lULEtBQUEsQ0FBTTZULFlBQUEsR0FBZW9CLEdBQUE7SUFDMUJsb0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNOFQsMkJBQUEsR0FBOEI5SixVQUFBLENBQVcsTUFBTTtNQUN0RCxJQUFJamQsSUFBQSxDQUFLaVQsS0FBQSxDQUFNNlQsWUFBQSxJQUFnQm9CLEdBQUEsRUFBSztRQUNoQ2xvQixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFMkUsSUFBQSxDQUFLaVQsS0FBQSxDQUFNNlQsWUFBQSxHQUFlO01BQzlCO0lBQ0osR0FBRyxHQUFHO0VBQ1YsV0FDUzltQixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTXhFLEtBQUssQ0FBQyxLQUFLZ2xCLGNBQUEsQ0FBZXhnQixJQUFBLEVBQU14RSxLQUFLLEdBQUc7SUFDekZBLEtBQUEsQ0FBTXN0QixjQUFBLENBQWU7RUFDekIsT0FDSztJQUNEZCxrQkFBQSxDQUFtQmhvQixJQUFBLEVBQU0sS0FBSztFQUNsQztBQUNKO0FBQ0FrbUIsWUFBQSxDQUFhNkMsS0FBQSxHQUFRLENBQUMvb0IsSUFBQSxFQUFNeEUsS0FBQSxLQUFVO0VBQ2xDLElBQUlBLEtBQUEsQ0FBTUYsT0FBQSxJQUFXLElBQ2pCMEUsSUFBQSxDQUFLaVQsS0FBQSxDQUFNc04sUUFBQSxHQUFXO0FBQzlCO0FBQ0EyRixZQUFBLENBQWE4QyxRQUFBLEdBQVcsQ0FBQ2hwQixJQUFBLEVBQU0yb0IsTUFBQSxLQUFXO0VBQ3RDLElBQUludEIsS0FBQSxHQUFRbXRCLE1BQUE7RUFDWixJQUFJQyxtQkFBQSxDQUFvQjVvQixJQUFBLEVBQU14RSxLQUFLLEtBQUssQ0FBQ0EsS0FBQSxDQUFNeXRCLFFBQUEsSUFDM0N6dEIsS0FBQSxDQUFNNGtCLE9BQUEsSUFBVyxDQUFDNWtCLEtBQUEsQ0FBTThrQixNQUFBLElBQVVyaUIsR0FBQSxJQUFPekMsS0FBQSxDQUFNNmtCLE9BQUEsRUFDL0M7RUFDSixJQUFJcmdCLElBQUEsQ0FBS0csUUFBQSxDQUFTLGtCQUFrQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNeEUsS0FBSyxDQUFDLEdBQUc7SUFDdERBLEtBQUEsQ0FBTXN0QixjQUFBLENBQWU7SUFDckI7RUFDSjtFQUNBLElBQUlwaEIsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtFQUNyQixJQUFJLEVBQUVELEdBQUEsWUFBZWhRLHdCQUFBLENBQUFxYixhQUFBLEtBQWtCLENBQUNyTCxHQUFBLENBQUlHLEtBQUEsQ0FBTWlZLFVBQUEsQ0FBV3BZLEdBQUEsQ0FBSUksR0FBRyxHQUFHO0lBQ25FLElBQUlpRyxJQUFBLEdBQU9tYixNQUFBLENBQU9DLFlBQUEsQ0FBYTN0QixLQUFBLENBQU15dEIsUUFBUTtJQUM3QyxJQUFJRyxLQUFBLEdBQVFBLENBQUEsS0FBTXBwQixJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUdzTCxVQUFBLENBQVd0YixJQUFJLEVBQUVpUSxjQUFBLENBQWU7SUFDaEUsSUFBSSxDQUFDLFNBQVNua0IsSUFBQSxDQUFLa1UsSUFBSSxLQUFLLENBQUMvTixJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTBILEdBQUEsQ0FBSUcsS0FBQSxDQUFNeEwsR0FBQSxFQUFLcUwsR0FBQSxDQUFJSSxHQUFBLENBQUl6TCxHQUFBLEVBQUswUixJQUFBLEVBQU1xYixLQUFLLENBQUMsR0FDL0dwcEIsSUFBQSxDQUFLOGQsUUFBQSxDQUFTc0wsS0FBQSxDQUFNLENBQUM7SUFDekI1dEIsS0FBQSxDQUFNc3RCLGNBQUEsQ0FBZTtFQUN6QjtBQUNKO0FBQ0EsU0FBU1EsWUFBWTl0QixLQUFBLEVBQU87RUFBRSxPQUFPO0lBQUVxRCxJQUFBLEVBQU1yRCxLQUFBLENBQU0rdEIsT0FBQTtJQUFTdnFCLEdBQUEsRUFBS3hELEtBQUEsQ0FBTWd1QjtFQUFRO0FBQUc7QUFDbEYsU0FBU0MsT0FBT2p1QixLQUFBLEVBQU9rdUIsS0FBQSxFQUFPO0VBQzFCLElBQUlobUIsRUFBQSxHQUFLZ21CLEtBQUEsQ0FBTXh0QixDQUFBLEdBQUlWLEtBQUEsQ0FBTSt0QixPQUFBO0lBQVNJLEVBQUEsR0FBS0QsS0FBQSxDQUFNdnRCLENBQUEsR0FBSVgsS0FBQSxDQUFNZ3VCLE9BQUE7RUFDdkQsT0FBTzlsQixFQUFBLEdBQUtBLEVBQUEsR0FBS2ltQixFQUFBLEdBQUtBLEVBQUEsR0FBSztBQUMvQjtBQUNBLFNBQVNDLG9CQUFvQjVwQixJQUFBLEVBQU02cEIsUUFBQSxFQUFVeHRCLEdBQUEsRUFBS3NKLE1BQUEsRUFBUW5LLEtBQUEsRUFBTztFQUM3RCxJQUFJbUssTUFBQSxJQUFVLElBQ1YsT0FBTztFQUNYLElBQUlpQyxJQUFBLEdBQU81SCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVFwQixNQUFNO0VBQ3hDLFNBQVN0RCxDQUFBLEdBQUl1RixJQUFBLENBQUtxQixLQUFBLEdBQVEsR0FBRzVHLENBQUEsR0FBSSxHQUFHQSxDQUFBLElBQUs7SUFDckMsSUFBSXJDLElBQUEsQ0FBS0csUUFBQSxDQUFTMHBCLFFBQUEsRUFBVXhpQixDQUFBLElBQUtoRixDQUFBLEdBQUl1RixJQUFBLENBQUtxQixLQUFBLEdBQVE1QixDQUFBLENBQUVySCxJQUFBLEVBQU0zRCxHQUFBLEVBQUt1TCxJQUFBLENBQUt5VyxTQUFBLEVBQVd6VyxJQUFBLENBQUtqRCxNQUFBLENBQU90QyxDQUFDLEdBQUc3RyxLQUFBLEVBQU8sSUFBSSxJQUNwRzZMLENBQUEsQ0FBRXJILElBQUEsRUFBTTNELEdBQUEsRUFBS3VMLElBQUEsQ0FBSzdQLElBQUEsQ0FBS3NLLENBQUMsR0FBR3VGLElBQUEsQ0FBS2pELE1BQUEsQ0FBT3RDLENBQUMsR0FBRzdHLEtBQUEsRUFBTyxLQUFLLENBQUMsR0FDMUQsT0FBTztFQUNmO0VBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU3N1QixnQkFBZ0I5cEIsSUFBQSxFQUFNMkgsU0FBQSxFQUFXNlMsTUFBQSxFQUFRO0VBQzlDLElBQUksQ0FBQ3hhLElBQUEsQ0FBSytwQixPQUFBLEVBQ04vcEIsSUFBQSxDQUFLeUMsS0FBQSxDQUFNO0VBQ2YsSUFBSXpDLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVThHLEVBQUEsQ0FBRzlHLFNBQVMsR0FDakM7RUFDSixJQUFJb1csRUFBQSxHQUFLL2QsSUFBQSxDQUFLd0YsS0FBQSxDQUFNdVksRUFBQSxDQUFHdFIsWUFBQSxDQUFhOUUsU0FBUztFQUM3QyxJQUFJNlMsTUFBQSxJQUFVLFdBQ1Z1RCxFQUFBLENBQUdpTSxPQUFBLENBQVEsV0FBVyxJQUFJO0VBQzlCaHFCLElBQUEsQ0FBSzhkLFFBQUEsQ0FBU0MsRUFBRTtBQUNwQjtBQUNBLFNBQVNrTSxrQkFBa0JqcUIsSUFBQSxFQUFNMkYsTUFBQSxFQUFRO0VBQ3JDLElBQUlBLE1BQUEsSUFBVSxJQUNWLE9BQU87RUFDWCxJQUFJaUMsSUFBQSxHQUFPNUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRcEIsTUFBTTtJQUFHNU4sSUFBQSxHQUFPNlAsSUFBQSxDQUFLeVcsU0FBQTtFQUN2RCxJQUFJdG1CLElBQUEsSUFBUUEsSUFBQSxDQUFLcWMsTUFBQSxJQUFVMWMsd0JBQUEsQ0FBQWlqQixhQUFBLENBQWNDLFlBQUEsQ0FBYTdpQixJQUFJLEdBQUc7SUFDekQreEIsZUFBQSxDQUFnQjlwQixJQUFBLEVBQU0sSUFBSXRJLHdCQUFBLENBQUFpakIsYUFBQSxDQUFjL1MsSUFBSSxHQUFHLFNBQVM7SUFDeEQsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBQ0EsU0FBU3NpQixrQkFBa0JscUIsSUFBQSxFQUFNMkYsTUFBQSxFQUFRO0VBQ3JDLElBQUlBLE1BQUEsSUFBVSxJQUNWLE9BQU87RUFDWCxJQUFJK0IsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtJQUFXd2lCLFlBQUE7SUFBY0MsUUFBQTtFQUM5QyxJQUFJMWlCLEdBQUEsWUFBZWhRLHdCQUFBLENBQUFpakIsYUFBQSxFQUNmd1AsWUFBQSxHQUFlemlCLEdBQUEsQ0FBSTNQLElBQUE7RUFDdkIsSUFBSTZQLElBQUEsR0FBTzVILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUXBCLE1BQU07RUFDeEMsU0FBU3RELENBQUEsR0FBSXVGLElBQUEsQ0FBS3FCLEtBQUEsR0FBUSxHQUFHNUcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBSztJQUNyQyxJQUFJdEssSUFBQSxHQUFPc0ssQ0FBQSxHQUFJdUYsSUFBQSxDQUFLcUIsS0FBQSxHQUFRckIsSUFBQSxDQUFLeVcsU0FBQSxHQUFZelcsSUFBQSxDQUFLN1AsSUFBQSxDQUFLc0ssQ0FBQztJQUN4RCxJQUFJM0ssd0JBQUEsQ0FBQWlqQixhQUFBLENBQWNDLFlBQUEsQ0FBYTdpQixJQUFJLEdBQUc7TUFDbEMsSUFBSW95QixZQUFBLElBQWdCemlCLEdBQUEsQ0FBSUcsS0FBQSxDQUFNb0IsS0FBQSxHQUFRLEtBQ2xDNUcsQ0FBQSxJQUFLcUYsR0FBQSxDQUFJRyxLQUFBLENBQU1vQixLQUFBLElBQVNyQixJQUFBLENBQUtqRCxNQUFBLENBQU8rQyxHQUFBLENBQUlHLEtBQUEsQ0FBTW9CLEtBQUEsR0FBUSxDQUFDLEtBQUt2QixHQUFBLENBQUlHLEtBQUEsQ0FBTXhMLEdBQUEsRUFDdEUrdEIsUUFBQSxHQUFXeGlCLElBQUEsQ0FBS2pELE1BQUEsQ0FBTytDLEdBQUEsQ0FBSUcsS0FBQSxDQUFNb0IsS0FBSyxPQUV0Q21oQixRQUFBLEdBQVd4aUIsSUFBQSxDQUFLakQsTUFBQSxDQUFPdEMsQ0FBQztNQUM1QjtJQUNKO0VBQ0o7RUFDQSxJQUFJK25CLFFBQUEsSUFBWSxNQUFNO0lBQ2xCTixlQUFBLENBQWdCOXBCLElBQUEsRUFBTXRJLHdCQUFBLENBQUFpakIsYUFBQSxDQUFjdkwsTUFBQSxDQUFPcFAsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxFQUFLcXRCLFFBQVEsR0FBRyxTQUFTO0lBQy9FLE9BQU87RUFDWCxPQUNLO0lBQ0QsT0FBTztFQUNYO0FBQ0o7QUFDQSxTQUFTQyxrQkFBa0JycUIsSUFBQSxFQUFNM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBQSxFQUFPd1ksVUFBQSxFQUFZO0VBQzdELE9BQU80VixtQkFBQSxDQUFvQjVwQixJQUFBLEVBQU0saUJBQWlCM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBSyxLQUNoRXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLGVBQWVrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNELEdBQUEsRUFBS2IsS0FBSyxDQUFDLE1BQ3BEd1ksVUFBQSxHQUFha1csaUJBQUEsQ0FBa0JscUIsSUFBQSxFQUFNMkYsTUFBTSxJQUFJc2tCLGlCQUFBLENBQWtCanFCLElBQUEsRUFBTTJGLE1BQU07QUFDdEY7QUFDQSxTQUFTMmtCLGtCQUFrQnRxQixJQUFBLEVBQU0zRCxHQUFBLEVBQUtzSixNQUFBLEVBQVFuSyxLQUFBLEVBQU87RUFDakQsT0FBT291QixtQkFBQSxDQUFvQjVwQixJQUFBLEVBQU0sdUJBQXVCM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBSyxLQUN0RXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLHFCQUFxQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0QsR0FBQSxFQUFLYixLQUFLLENBQUM7QUFDbkU7QUFDQSxTQUFTK3VCLGtCQUFrQnZxQixJQUFBLEVBQU0zRCxHQUFBLEVBQUtzSixNQUFBLEVBQVFuSyxLQUFBLEVBQU87RUFDakQsT0FBT291QixtQkFBQSxDQUFvQjVwQixJQUFBLEVBQU0sdUJBQXVCM0QsR0FBQSxFQUFLc0osTUFBQSxFQUFRbkssS0FBSyxLQUN0RXdFLElBQUEsQ0FBS0csUUFBQSxDQUFTLHFCQUFxQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0QsR0FBQSxFQUFLYixLQUFLLENBQUMsS0FDM0RndkIsa0JBQUEsQ0FBbUJ4cUIsSUFBQSxFQUFNMkYsTUFBQSxFQUFRbkssS0FBSztBQUM5QztBQUNBLFNBQVNndkIsbUJBQW1CeHFCLElBQUEsRUFBTTJGLE1BQUEsRUFBUW5LLEtBQUEsRUFBTztFQUM3QyxJQUFJQSxLQUFBLENBQU1tckIsTUFBQSxJQUFVLEdBQ2hCLE9BQU87RUFDWCxJQUFJOXFCLElBQUEsR0FBTW1FLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUE7RUFDckIsSUFBSTRJLE1BQUEsSUFBVSxJQUFJO0lBQ2QsSUFBSTlKLElBQUEsQ0FBSW1MLGFBQUEsRUFBZTtNQUNuQjhpQixlQUFBLENBQWdCOXBCLElBQUEsRUFBTXRJLHdCQUFBLENBQUFxYixhQUFBLENBQWMzRCxNQUFBLENBQU92VCxJQUFBLEVBQUssR0FBR0EsSUFBQSxDQUFJNEosT0FBQSxDQUFRQyxJQUFJLEdBQUcsU0FBUztNQUMvRSxPQUFPO0lBQ1g7SUFDQSxPQUFPO0VBQ1g7RUFDQSxJQUFJa0MsSUFBQSxHQUFPL0wsSUFBQSxDQUFJa0wsT0FBQSxDQUFRcEIsTUFBTTtFQUM3QixTQUFTdEQsQ0FBQSxHQUFJdUYsSUFBQSxDQUFLcUIsS0FBQSxHQUFRLEdBQUc1RyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxJQUFLO0lBQ3JDLElBQUl0SyxJQUFBLEdBQU9zSyxDQUFBLEdBQUl1RixJQUFBLENBQUtxQixLQUFBLEdBQVFyQixJQUFBLENBQUt5VyxTQUFBLEdBQVl6VyxJQUFBLENBQUs3UCxJQUFBLENBQUtzSyxDQUFDO0lBQ3hELElBQUlrYyxPQUFBLEdBQVUzVyxJQUFBLENBQUtqRCxNQUFBLENBQU90QyxDQUFDO0lBQzNCLElBQUl0SyxJQUFBLENBQUtpUCxhQUFBLEVBQ0w4aUIsZUFBQSxDQUFnQjlwQixJQUFBLEVBQU10SSx3QkFBQSxDQUFBcWIsYUFBQSxDQUFjM0QsTUFBQSxDQUFPdlQsSUFBQSxFQUFLMGlCLE9BQUEsR0FBVSxHQUFHQSxPQUFBLEdBQVUsSUFBSXhtQixJQUFBLENBQUswTixPQUFBLENBQVFDLElBQUksR0FBRyxTQUFTLFdBQ25HaE8sd0JBQUEsQ0FBQWlqQixhQUFBLENBQWNDLFlBQUEsQ0FBYTdpQixJQUFJLEdBQ3BDK3hCLGVBQUEsQ0FBZ0I5cEIsSUFBQSxFQUFNdEksd0JBQUEsQ0FBQWlqQixhQUFBLENBQWN2TCxNQUFBLENBQU92VCxJQUFBLEVBQUswaUIsT0FBTyxHQUFHLFNBQVMsT0FFbkU7SUFDSixPQUFPO0VBQ1g7QUFDSjtBQUNBLFNBQVNrTSxjQUFjenFCLElBQUEsRUFBTTtFQUN6QixPQUFPMHFCLGNBQUEsQ0FBZTFxQixJQUFJO0FBQzlCO0FBQ0EsSUFBTTJxQixrQkFBQSxHQUFxQjFzQixHQUFBLEdBQU0sWUFBWTtBQUM3Q2dvQixRQUFBLENBQVMyRSxTQUFBLEdBQVksQ0FBQzVxQixJQUFBLEVBQU0yb0IsTUFBQSxLQUFXO0VBQ25DLElBQUludEIsS0FBQSxHQUFRbXRCLE1BQUE7RUFDWjNvQixJQUFBLENBQUtpVCxLQUFBLENBQU1zTixRQUFBLEdBQVcva0IsS0FBQSxDQUFNK2tCLFFBQUE7RUFDNUIsSUFBSXNLLE9BQUEsR0FBVUosYUFBQSxDQUFjenFCLElBQUk7RUFDaEMsSUFBSWtvQixHQUFBLEdBQU1ELElBQUEsQ0FBS0MsR0FBQSxDQUFJO0lBQUcxYSxJQUFBLEdBQU87RUFDN0IsSUFBSTBhLEdBQUEsR0FBTWxvQixJQUFBLENBQUtpVCxLQUFBLENBQU13VCxTQUFBLENBQVVDLElBQUEsR0FBTyxPQUFPK0MsTUFBQSxDQUFPanVCLEtBQUEsRUFBT3dFLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXdULFNBQVMsS0FBSyxDQUFDanJCLEtBQUEsQ0FBTW12QixrQkFBa0IsS0FDekczcUIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNd1QsU0FBQSxDQUFVRSxNQUFBLElBQVVuckIsS0FBQSxDQUFNbXJCLE1BQUEsRUFBUTtJQUM3QyxJQUFJM21CLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXdULFNBQUEsQ0FBVWpaLElBQUEsSUFBUSxlQUM3QkEsSUFBQSxHQUFPLHVCQUNGeE4sSUFBQSxDQUFLaVQsS0FBQSxDQUFNd1QsU0FBQSxDQUFValosSUFBQSxJQUFRLGVBQ2xDQSxJQUFBLEdBQU87RUFDZjtFQUNBeE4sSUFBQSxDQUFLaVQsS0FBQSxDQUFNd1QsU0FBQSxHQUFZO0lBQUVDLElBQUEsRUFBTXdCLEdBQUE7SUFBS2hzQixDQUFBLEVBQUdWLEtBQUEsQ0FBTSt0QixPQUFBO0lBQVNwdEIsQ0FBQSxFQUFHWCxLQUFBLENBQU1ndUIsT0FBQTtJQUFTaGMsSUFBQTtJQUFNbVosTUFBQSxFQUFRbnJCLEtBQUEsQ0FBTW1yQjtFQUFPO0VBQ25HLElBQUl0cUIsR0FBQSxHQUFNMkQsSUFBQSxDQUFLaUYsV0FBQSxDQUFZcWtCLFdBQUEsQ0FBWTl0QixLQUFLLENBQUM7RUFDN0MsSUFBSSxDQUFDYSxHQUFBLEVBQ0Q7RUFDSixJQUFJbVIsSUFBQSxJQUFRLGVBQWU7SUFDdkIsSUFBSXhOLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXlJLFNBQUEsRUFDWDFiLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXlJLFNBQUEsQ0FBVW9QLElBQUEsQ0FBSztJQUM5QjlxQixJQUFBLENBQUtpVCxLQUFBLENBQU15SSxTQUFBLEdBQVksSUFBSXFQLFNBQUEsQ0FBVS9xQixJQUFBLEVBQU0zRCxHQUFBLEVBQUtiLEtBQUEsRUFBTyxDQUFDLENBQUNxdkIsT0FBTztFQUNwRSxZQUNVcmQsSUFBQSxJQUFRLGdCQUFnQjhjLGlCQUFBLEdBQW9CQyxpQkFBQSxFQUFtQnZxQixJQUFBLEVBQU0zRCxHQUFBLENBQUlBLEdBQUEsRUFBS0EsR0FBQSxDQUFJc0osTUFBQSxFQUFRbkssS0FBSyxHQUFHO0lBQ3hHQSxLQUFBLENBQU1zdEIsY0FBQSxDQUFlO0VBQ3pCLE9BQ0s7SUFDRGQsa0JBQUEsQ0FBbUJob0IsSUFBQSxFQUFNLFNBQVM7RUFDdEM7QUFDSjtBQUNBLElBQU0rcUIsU0FBQSxHQUFOLE1BQWdCO0VBQ1o5Z0IsWUFBWWpLLElBQUEsRUFBTTNELEdBQUEsRUFBS2IsS0FBQSxFQUFPcXZCLE9BQUEsRUFBUztJQUNuQyxLQUFLN3FCLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUszRCxHQUFBLEdBQU1BLEdBQUE7SUFDWCxLQUFLYixLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLcXZCLE9BQUEsR0FBVUEsT0FBQTtJQUNmLEtBQUs5TyxvQkFBQSxHQUF1QjtJQUM1QixLQUFLaVAsU0FBQSxHQUFZO0lBQ2pCLEtBQUtDLFFBQUEsR0FBV2pyQixJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBO0lBQzNCLEtBQUtpWCxVQUFBLEdBQWEsQ0FBQyxDQUFDeFksS0FBQSxDQUFNbXZCLGtCQUFrQjtJQUM1QyxLQUFLaFAsWUFBQSxHQUFlbmdCLEtBQUEsQ0FBTStrQixRQUFBO0lBQzFCLElBQUlsbkIsVUFBQSxFQUFZNnhCLFNBQUE7SUFDaEIsSUFBSTd1QixHQUFBLENBQUlzSixNQUFBLEdBQVMsSUFBSTtNQUNqQnRNLFVBQUEsR0FBYTJHLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSW91QixNQUFBLENBQU85dUIsR0FBQSxDQUFJc0osTUFBTTtNQUM3Q3VsQixTQUFBLEdBQVk3dUIsR0FBQSxDQUFJc0osTUFBQTtJQUNwQixPQUNLO01BQ0QsSUFBSWlDLElBQUEsR0FBTzVILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUTFLLEdBQUEsQ0FBSUEsR0FBRztNQUN6Q2hELFVBQUEsR0FBYXVPLElBQUEsQ0FBS3pQLE1BQUE7TUFDbEIreUIsU0FBQSxHQUFZdGpCLElBQUEsQ0FBS3FCLEtBQUEsR0FBUXJCLElBQUEsQ0FBS2pELE1BQUEsQ0FBTyxJQUFJO0lBQzdDO0lBQ0EsTUFBTW9CLE1BQUEsR0FBUzhrQixPQUFBLEdBQVUsT0FBT3J2QixLQUFBLENBQU11SyxNQUFBO0lBQ3RDLE1BQU15UixVQUFBLEdBQWF6UixNQUFBLEdBQVMvRixJQUFBLENBQUtrRSxPQUFBLENBQVFLLFdBQUEsQ0FBWXdCLE1BQUEsRUFBUSxJQUFJLElBQUk7SUFDckUsS0FBS0EsTUFBQSxHQUFTeVIsVUFBQSxJQUFjQSxVQUFBLENBQVc5YyxHQUFBLENBQUlyQyxRQUFBLElBQVksSUFBSW1mLFVBQUEsQ0FBVzljLEdBQUEsR0FBTTtJQUM1RSxJQUFJO01BQUVpTjtJQUFVLElBQUkzSCxJQUFBLENBQUt3RixLQUFBO0lBQ3pCLElBQUloSyxLQUFBLENBQU1tckIsTUFBQSxJQUFVLEtBQ2hCdHRCLFVBQUEsQ0FBV21VLElBQUEsQ0FBS1UsSUFBQSxDQUFLOUksU0FBQSxJQUFhL0wsVUFBQSxDQUFXbVUsSUFBQSxDQUFLVSxJQUFBLENBQUtrZCxVQUFBLEtBQWUsU0FDdEV6akIsU0FBQSxZQUFxQmpRLHdCQUFBLENBQUFpakIsYUFBQSxJQUFpQmhULFNBQUEsQ0FBVWxQLElBQUEsSUFBUXl5QixTQUFBLElBQWF2akIsU0FBQSxDQUFValAsRUFBQSxHQUFLd3lCLFNBQUEsRUFDcEYsS0FBS0YsU0FBQSxHQUFZO01BQ2JqekIsSUFBQSxFQUFNc0IsVUFBQTtNQUNOZ0QsR0FBQSxFQUFLNnVCLFNBQUE7TUFDTEcsT0FBQSxFQUFTLENBQUMsRUFBRSxLQUFLdGxCLE1BQUEsSUFBVSxDQUFDLEtBQUtBLE1BQUEsQ0FBT1gsU0FBQTtNQUN4Q2ttQixhQUFBLEVBQWUsQ0FBQyxFQUFFLEtBQUt2bEIsTUFBQSxJQUFVdEksS0FBQSxJQUFTLENBQUMsS0FBS3NJLE1BQUEsQ0FBT3dLLFlBQUEsQ0FBYSxpQkFBaUI7SUFDekY7SUFDSixJQUFJLEtBQUt4SyxNQUFBLElBQVUsS0FBS2lsQixTQUFBLEtBQWMsS0FBS0EsU0FBQSxDQUFVSyxPQUFBLElBQVcsS0FBS0wsU0FBQSxDQUFVTSxhQUFBLEdBQWdCO01BQzNGLEtBQUt0ckIsSUFBQSxDQUFLNmIsV0FBQSxDQUFZbE4sSUFBQSxDQUFLO01BQzNCLElBQUksS0FBS3FjLFNBQUEsQ0FBVUssT0FBQSxFQUNmLEtBQUt0bEIsTUFBQSxDQUFPWCxTQUFBLEdBQVk7TUFDNUIsSUFBSSxLQUFLNGxCLFNBQUEsQ0FBVU0sYUFBQSxFQUNmck8sVUFBQSxDQUFXLE1BQU07UUFDYixJQUFJLEtBQUtqZCxJQUFBLENBQUtpVCxLQUFBLENBQU15SSxTQUFBLElBQWEsTUFDN0IsS0FBSzNWLE1BQUEsQ0FBT2lRLFlBQUEsQ0FBYSxtQkFBbUIsT0FBTztNQUMzRCxHQUFHLEVBQUU7TUFDVCxLQUFLaFcsSUFBQSxDQUFLNmIsV0FBQSxDQUFZdFQsS0FBQSxDQUFNO0lBQ2hDO0lBQ0F2SSxJQUFBLENBQUswQixJQUFBLENBQUtzYixnQkFBQSxDQUFpQixXQUFXLEtBQUt1TyxFQUFBLEdBQUssS0FBS0EsRUFBQSxDQUFHQyxJQUFBLENBQUssSUFBSSxDQUFDO0lBQ2xFeHJCLElBQUEsQ0FBSzBCLElBQUEsQ0FBS3NiLGdCQUFBLENBQWlCLGFBQWEsS0FBS3lPLElBQUEsR0FBTyxLQUFLQSxJQUFBLENBQUtELElBQUEsQ0FBSyxJQUFJLENBQUM7SUFDeEV4RCxrQkFBQSxDQUFtQmhvQixJQUFBLEVBQU0sU0FBUztFQUN0QztFQUNBOHFCLEtBQUEsRUFBTztJQUNILEtBQUs5cUIsSUFBQSxDQUFLMEIsSUFBQSxDQUFLb2IsbUJBQUEsQ0FBb0IsV0FBVyxLQUFLeU8sRUFBRTtJQUNyRCxLQUFLdnJCLElBQUEsQ0FBSzBCLElBQUEsQ0FBS29iLG1CQUFBLENBQW9CLGFBQWEsS0FBSzJPLElBQUk7SUFDekQsSUFBSSxLQUFLVCxTQUFBLElBQWEsS0FBS2psQixNQUFBLEVBQVE7TUFDL0IsS0FBSy9GLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWWxOLElBQUEsQ0FBSztNQUMzQixJQUFJLEtBQUtxYyxTQUFBLENBQVVLLE9BQUEsRUFDZixLQUFLdGxCLE1BQUEsQ0FBT29PLGVBQUEsQ0FBZ0IsV0FBVztNQUMzQyxJQUFJLEtBQUs2VyxTQUFBLENBQVVNLGFBQUEsRUFDZixLQUFLdmxCLE1BQUEsQ0FBT29PLGVBQUEsQ0FBZ0IsaUJBQWlCO01BQ2pELEtBQUtuVSxJQUFBLENBQUs2YixXQUFBLENBQVl0VCxLQUFBLENBQU07SUFDaEM7SUFDQSxJQUFJLEtBQUt3VCxvQkFBQSxFQUNMa0IsVUFBQSxDQUFXLE1BQU16QixjQUFBLENBQWUsS0FBS3hiLElBQUksQ0FBQztJQUM5QyxLQUFLQSxJQUFBLENBQUtpVCxLQUFBLENBQU15SSxTQUFBLEdBQVk7RUFDaEM7RUFDQTZQLEdBQUcvdkIsS0FBQSxFQUFPO0lBQ04sS0FBS3N2QixJQUFBLENBQUs7SUFDVixJQUFJLENBQUMsS0FBSzlxQixJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVNwRyxLQUFBLENBQU11SyxNQUFNLEdBQ3BDO0lBQ0osSUFBSTFKLEdBQUEsR0FBTSxLQUFLQSxHQUFBO0lBQ2YsSUFBSSxLQUFLMkQsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxJQUFPLEtBQUtrdUIsUUFBQSxFQUM1QjV1QixHQUFBLEdBQU0sS0FBSzJELElBQUEsQ0FBS2lGLFdBQUEsQ0FBWXFrQixXQUFBLENBQVk5dEIsS0FBSyxDQUFDO0lBQ2xELEtBQUtrd0Isa0JBQUEsQ0FBbUJsd0IsS0FBSztJQUM3QixJQUFJLEtBQUttZ0IsWUFBQSxJQUFnQixDQUFDdGYsR0FBQSxFQUFLO01BQzNCMnJCLGtCQUFBLENBQW1CLEtBQUtob0IsSUFBQSxFQUFNLFNBQVM7SUFDM0MsV0FDU3FxQixpQkFBQSxDQUFrQixLQUFLcnFCLElBQUEsRUFBTTNELEdBQUEsQ0FBSUEsR0FBQSxFQUFLQSxHQUFBLENBQUlzSixNQUFBLEVBQVFuSyxLQUFBLEVBQU8sS0FBS3dZLFVBQVUsR0FBRztNQUNoRnhZLEtBQUEsQ0FBTXN0QixjQUFBLENBQWU7SUFDekIsV0FDU3R0QixLQUFBLENBQU1tckIsTUFBQSxJQUFVLE1BQ3BCLEtBQUtrRSxPQUFBO0lBQUE7SUFFRGh0QixNQUFBLElBQVUsS0FBS210QixTQUFBLElBQWEsQ0FBQyxLQUFLQSxTQUFBLENBQVVqekIsSUFBQSxDQUFLcWMsTUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBUWpEelcsTUFBQSxJQUFVLENBQUMsS0FBS3FDLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVThVLE9BQUEsSUFDbENsZ0IsSUFBQSxDQUFLQyxHQUFBLENBQUlELElBQUEsQ0FBSzhpQixHQUFBLENBQUloakIsR0FBQSxDQUFJQSxHQUFBLEdBQU0sS0FBSzJELElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWxQLElBQUksR0FBRzhELElBQUEsQ0FBSzhpQixHQUFBLENBQUloakIsR0FBQSxDQUFJQSxHQUFBLEdBQU0sS0FBSzJELElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWpQLEVBQUUsQ0FBQyxLQUFLLElBQUs7TUFDL0hveEIsZUFBQSxDQUFnQixLQUFLOXBCLElBQUEsRUFBTXRJLHdCQUFBLENBQUFtakIsU0FBQSxDQUFVOEUsSUFBQSxDQUFLLEtBQUszZixJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVExSyxHQUFBLENBQUlBLEdBQUcsQ0FBQyxHQUFHLFNBQVM7TUFDMUZiLEtBQUEsQ0FBTXN0QixjQUFBLENBQWU7SUFDekIsT0FDSztNQUNEZCxrQkFBQSxDQUFtQixLQUFLaG9CLElBQUEsRUFBTSxTQUFTO0lBQzNDO0VBQ0o7RUFDQXlyQixLQUFLandCLEtBQUEsRUFBTztJQUNSLEtBQUtrd0Isa0JBQUEsQ0FBbUJsd0IsS0FBSztJQUM3QndzQixrQkFBQSxDQUFtQixLQUFLaG9CLElBQUEsRUFBTSxTQUFTO0lBQ3ZDLElBQUl4RSxLQUFBLENBQU1td0IsT0FBQSxJQUFXLEdBQ2pCLEtBQUtiLElBQUEsQ0FBSztFQUNsQjtFQUNBWSxtQkFBbUJsd0IsS0FBQSxFQUFPO0lBQ3RCLElBQUksQ0FBQyxLQUFLbWdCLFlBQUEsS0FBaUJwZixJQUFBLENBQUs4aUIsR0FBQSxDQUFJLEtBQUs3akIsS0FBQSxDQUFNVSxDQUFBLEdBQUlWLEtBQUEsQ0FBTSt0QixPQUFPLElBQUksS0FDaEVodEIsSUFBQSxDQUFLOGlCLEdBQUEsQ0FBSSxLQUFLN2pCLEtBQUEsQ0FBTVcsQ0FBQSxHQUFJWCxLQUFBLENBQU1ndUIsT0FBTyxJQUFJLElBQ3pDLEtBQUs3TixZQUFBLEdBQWU7RUFDNUI7QUFDSjtBQUNBc0ssUUFBQSxDQUFTRyxVQUFBLEdBQWFwbUIsSUFBQSxJQUFRO0VBQzFCQSxJQUFBLENBQUtpVCxLQUFBLENBQU1nVSxTQUFBLEdBQVlnQixJQUFBLENBQUtDLEdBQUEsQ0FBSTtFQUNoQ3VDLGFBQUEsQ0FBY3pxQixJQUFJO0VBQ2xCZ29CLGtCQUFBLENBQW1CaG9CLElBQUEsRUFBTSxTQUFTO0FBQ3RDO0FBQ0FpbUIsUUFBQSxDQUFTSSxTQUFBLEdBQVlybUIsSUFBQSxJQUFRO0VBQ3pCQSxJQUFBLENBQUtpVCxLQUFBLENBQU1nVSxTQUFBLEdBQVlnQixJQUFBLENBQUtDLEdBQUEsQ0FBSTtFQUNoQ0Ysa0JBQUEsQ0FBbUJob0IsSUFBQSxFQUFNLFNBQVM7QUFDdEM7QUFDQWltQixRQUFBLENBQVMyRixXQUFBLEdBQWM1ckIsSUFBQSxJQUFReXFCLGFBQUEsQ0FBY3pxQixJQUFJO0FBQ2pELFNBQVM0b0Isb0JBQW9CNW9CLElBQUEsRUFBTXhFLEtBQUEsRUFBTztFQUN0QyxJQUFJd0UsSUFBQSxDQUFLcVIsU0FBQSxFQUNMLE9BQU87RUFXWCxJQUFJeFQsTUFBQSxJQUFVdEIsSUFBQSxDQUFLOGlCLEdBQUEsQ0FBSTdqQixLQUFBLENBQU1xd0IsU0FBQSxHQUFZN3JCLElBQUEsQ0FBS2lULEtBQUEsQ0FBTW1VLGtCQUFrQixJQUFJLEtBQUs7SUFDM0VwbkIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNbVUsa0JBQUEsR0FBcUI7SUFDaEMsT0FBTztFQUNYO0VBQ0EsT0FBTztBQUNYO0FBRUEsSUFBTTBFLGtCQUFBLEdBQXFCMXRCLE9BQUEsR0FBVSxNQUFPO0FBQzVDOG5CLFlBQUEsQ0FBYTZGLGdCQUFBLEdBQW1CN0YsWUFBQSxDQUFhOEYsaUJBQUEsR0FBb0Joc0IsSUFBQSxJQUFRO0VBQ3JFLElBQUksQ0FBQ0EsSUFBQSxDQUFLcVIsU0FBQSxFQUFXO0lBQ2pCclIsSUFBQSxDQUFLNmIsV0FBQSxDQUFZb1EsS0FBQSxDQUFNO0lBQ3ZCLElBQUk7UUFBRXptQjtNQUFNLElBQUl4RixJQUFBO01BQU00SCxJQUFBLEdBQU9wQyxLQUFBLENBQU1tQyxTQUFBLENBQVVHLEdBQUE7SUFDN0MsSUFBSXRDLEtBQUEsQ0FBTW1DLFNBQUEsWUFBcUJqUSx3QkFBQSxDQUFBcWIsYUFBQSxLQUMxQnZOLEtBQUEsQ0FBTTBtQixXQUFBLElBQ0YsQ0FBQ3RrQixJQUFBLENBQUt1VyxVQUFBLElBQWN2VyxJQUFBLENBQUtTLFlBQUEsSUFBZ0JULElBQUEsQ0FBS3dXLFVBQUEsQ0FBV3ZNLEtBQUEsQ0FBTXNhLElBQUEsQ0FBSzNWLENBQUEsSUFBS0EsQ0FBQSxDQUFFaEosSUFBQSxDQUFLVSxJQUFBLENBQUtrZSxTQUFBLEtBQWMsS0FBSyxJQUFLO01BRWxIcHNCLElBQUEsQ0FBS3FzQixVQUFBLEdBQWFyc0IsSUFBQSxDQUFLd0YsS0FBQSxDQUFNMG1CLFdBQUEsSUFBZXRrQixJQUFBLENBQUtpSyxLQUFBLENBQU07TUFDdkQ2WSxjQUFBLENBQWUxcUIsSUFBQSxFQUFNLElBQUk7TUFDekJBLElBQUEsQ0FBS3FzQixVQUFBLEdBQWE7SUFDdEIsT0FDSztNQUNEM0IsY0FBQSxDQUFlMXFCLElBQUEsRUFBTSxDQUFDd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVcUosS0FBSztNQUkzQyxJQUFJdlQsS0FBQSxJQUFTK0gsS0FBQSxDQUFNbUMsU0FBQSxDQUFVcUosS0FBQSxJQUFTcEosSUFBQSxDQUFLUyxZQUFBLElBQWdCLENBQUNULElBQUEsQ0FBS3VXLFVBQUEsSUFBY3ZXLElBQUEsQ0FBS3dXLFVBQUEsQ0FBV3ZNLEtBQUEsQ0FBTTdZLE1BQUEsRUFBUTtRQUN6RyxJQUFJME8sR0FBQSxHQUFNMUgsSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0I7UUFDakMsU0FBUzlRLElBQUEsR0FBTzJQLEdBQUEsQ0FBSXpNLFNBQUEsRUFBV1osTUFBQSxHQUFTcU4sR0FBQSxDQUFJeE0sV0FBQSxFQUFhbkQsSUFBQSxJQUFRQSxJQUFBLENBQUtNLFFBQUEsSUFBWSxLQUFLZ0MsTUFBQSxJQUFVLElBQUk7VUFDakcsSUFBSXNLLE1BQUEsR0FBU3RLLE1BQUEsR0FBUyxJQUFJdEMsSUFBQSxDQUFLd04sU0FBQSxHQUFZeE4sSUFBQSxDQUFLa0MsVUFBQSxDQUFXSSxNQUFBLEdBQVMsQ0FBQztVQUNyRSxJQUFJLENBQUNzSyxNQUFBLEVBQ0Q7VUFDSixJQUFJQSxNQUFBLENBQU90TSxRQUFBLElBQVksR0FBRztZQUN0QixJQUFJaTBCLElBQUEsR0FBTXRzQixJQUFBLENBQUtzSSxZQUFBLENBQWE7WUFDNUIsSUFBSWdrQixJQUFBLEVBQ0FBLElBQUEsQ0FBSWhqQixRQUFBLENBQVMzRSxNQUFBLEVBQVFBLE1BQUEsQ0FBTzVMLFNBQUEsQ0FBVUMsTUFBTTtZQUNoRDtVQUNKLE9BQ0s7WUFDRGpCLElBQUEsR0FBTzRNLE1BQUE7WUFDUHRLLE1BQUEsR0FBUztVQUNiO1FBQ0o7TUFDSjtJQUNKO0lBQ0EyRixJQUFBLENBQUtpVCxLQUFBLENBQU01QixTQUFBLEdBQVk7RUFDM0I7RUFDQWtiLGtCQUFBLENBQW1CdnNCLElBQUEsRUFBTThyQixrQkFBa0I7QUFDL0M7QUFDQTVGLFlBQUEsQ0FBYXNHLGNBQUEsR0FBaUIsQ0FBQ3hzQixJQUFBLEVBQU14RSxLQUFBLEtBQVU7RUFDM0MsSUFBSXdFLElBQUEsQ0FBS3FSLFNBQUEsRUFBVztJQUNoQnJSLElBQUEsQ0FBS2lULEtBQUEsQ0FBTTVCLFNBQUEsR0FBWTtJQUN2QnJSLElBQUEsQ0FBS2lULEtBQUEsQ0FBTW1VLGtCQUFBLEdBQXFCNXJCLEtBQUEsQ0FBTXF3QixTQUFBO0lBQ3RDN3JCLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXFVLHlCQUFBLEdBQTRCdG5CLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWTRRLGNBQUEsQ0FBZSxFQUFFenpCLE1BQUEsR0FBU2dILElBQUEsQ0FBS2lULEtBQUEsQ0FBTW9VLGFBQUEsR0FBZ0I7SUFDN0dybkIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNQyxlQUFBLEdBQWtCO0lBQzdCLElBQUlsVCxJQUFBLENBQUtpVCxLQUFBLENBQU1xVSx5QkFBQSxFQUNYb0YsT0FBQSxDQUFRM2xCLE9BQUEsQ0FBUSxFQUFFNGxCLElBQUEsQ0FBSyxNQUFNM3NCLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWW9RLEtBQUEsQ0FBTSxDQUFDO0lBQ3pEanNCLElBQUEsQ0FBS2lULEtBQUEsQ0FBTW9VLGFBQUE7SUFDWGtGLGtCQUFBLENBQW1CdnNCLElBQUEsRUFBTSxFQUFFO0VBQy9CO0FBQ0o7QUFDQSxTQUFTdXNCLG1CQUFtQnZzQixJQUFBLEVBQU00c0IsS0FBQSxFQUFPO0VBQ3JDeEUsWUFBQSxDQUFhcG9CLElBQUEsQ0FBS2lULEtBQUEsQ0FBTWtVLGdCQUFnQjtFQUN4QyxJQUFJeUYsS0FBQSxHQUFRLElBQ1I1c0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNa1UsZ0JBQUEsR0FBbUJsSyxVQUFBLENBQVcsTUFBTXlOLGNBQUEsQ0FBZTFxQixJQUFJLEdBQUc0c0IsS0FBSztBQUNsRjtBQUNBLFNBQVNDLGlCQUFpQjdzQixJQUFBLEVBQU07RUFDNUIsSUFBSUEsSUFBQSxDQUFLcVIsU0FBQSxFQUFXO0lBQ2hCclIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNNUIsU0FBQSxHQUFZO0lBQ3ZCclIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNbVUsa0JBQUEsR0FBcUIwRix3QkFBQSxDQUF5QjtFQUM3RDtFQUNBLE9BQU85c0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNTSxnQkFBQSxDQUFpQnZhLE1BQUEsR0FBUyxHQUN4Q2dILElBQUEsQ0FBS2lULEtBQUEsQ0FBTU0sZ0JBQUEsQ0FBaUI2RCxHQUFBLENBQUksRUFBRXZKLGdCQUFBLENBQWlCO0FBQzNEO0FBQ0EsU0FBU2tmLG9CQUFvQi9zQixJQUFBLEVBQU07RUFDL0IsSUFBSTBILEdBQUEsR0FBTTFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0VBQ2pDLElBQUksQ0FBQ25CLEdBQUEsQ0FBSXpNLFNBQUEsRUFDTCxPQUFPO0VBQ1gsSUFBSSt4QixVQUFBLEdBQWE1eUIsZ0JBQUEsQ0FBaUJzTixHQUFBLENBQUl6TSxTQUFBLEVBQVd5TSxHQUFBLENBQUl4TSxXQUFXO0VBQ2hFLElBQUkreEIsU0FBQSxHQUFZM3lCLGVBQUEsQ0FBZ0JvTixHQUFBLENBQUl6TSxTQUFBLEVBQVd5TSxHQUFBLENBQUl4TSxXQUFXO0VBQzlELElBQUk4eEIsVUFBQSxJQUFjQyxTQUFBLElBQWFELFVBQUEsSUFBY0MsU0FBQSxFQUFXO0lBQ3BELElBQUlDLFNBQUEsR0FBWUQsU0FBQSxDQUFVL3lCLFVBQUE7TUFBWWl6QixXQUFBLEdBQWNudEIsSUFBQSxDQUFLNmIsV0FBQSxDQUFZdVIsbUJBQUE7SUFDckUsSUFBSUosVUFBQSxJQUFjRyxXQUFBLElBQWVGLFNBQUEsSUFBYUUsV0FBQSxFQUMxQyxPQUFPQSxXQUFBO0lBQ1gsSUFBSSxDQUFDRCxTQUFBLElBQWEsQ0FBQ0EsU0FBQSxDQUFVeG9CLE1BQUEsQ0FBT3VvQixTQUFBLENBQVVsMEIsU0FBUyxHQUFHO01BQ3RELE9BQU9rMEIsU0FBQTtJQUNYLFdBQ1NqdEIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNQyxlQUFBLElBQW1CK1osU0FBQSxFQUFXO01BQzlDLElBQUlJLFVBQUEsR0FBYUwsVUFBQSxDQUFXOXlCLFVBQUE7TUFDNUIsSUFBSSxFQUFFLENBQUNtekIsVUFBQSxJQUFjLENBQUNBLFVBQUEsQ0FBVzNvQixNQUFBLENBQU9zb0IsVUFBQSxDQUFXajBCLFNBQVMsSUFDeEQsT0FBT2swQixTQUFBO0lBQ2Y7RUFDSjtFQUNBLE9BQU9ELFVBQUEsSUFBY0MsU0FBQTtBQUN6QjtBQUNBLFNBQVNILHlCQUFBLEVBQTJCO0VBQ2hDLElBQUl0eEIsS0FBQSxHQUFRNUMsUUFBQSxDQUFTNkMsV0FBQSxDQUFZLE9BQU87RUFDeENELEtBQUEsQ0FBTUUsU0FBQSxDQUFVLFNBQVMsTUFBTSxJQUFJO0VBQ25DLE9BQU9GLEtBQUEsQ0FBTXF3QixTQUFBO0FBQ2pCO0FBSUEsU0FBU25CLGVBQWUxcUIsSUFBQSxFQUFNc3RCLFVBQUEsR0FBYSxPQUFPO0VBQzlDLElBQUlsdkIsT0FBQSxJQUFXNEIsSUFBQSxDQUFLNmIsV0FBQSxDQUFZMFIsWUFBQSxJQUFnQixHQUM1QztFQUNKdnRCLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWWdOLFVBQUEsQ0FBVztFQUM1QmdFLGdCQUFBLENBQWlCN3NCLElBQUk7RUFDckIsSUFBSXN0QixVQUFBLElBQWN0dEIsSUFBQSxDQUFLa0UsT0FBQSxJQUFXbEUsSUFBQSxDQUFLa0UsT0FBQSxDQUFRaUcsS0FBQSxFQUFPO0lBQ2xELElBQUl6QyxHQUFBLEdBQU02UyxnQkFBQSxDQUFpQnZhLElBQUk7TUFBR3BGLEdBQUEsR0FBTW9GLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7SUFDbkQsSUFBSUQsR0FBQSxJQUFPLENBQUNBLEdBQUEsQ0FBSStHLEVBQUEsQ0FBRzdULEdBQUcsR0FDbEJvRixJQUFBLENBQUs4ZCxRQUFBLENBQVM5ZCxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUd0UixZQUFBLENBQWEvRSxHQUFHLENBQUMsWUFDdkMxSCxJQUFBLENBQUtxc0IsVUFBQSxJQUFjaUIsVUFBQSxLQUFlLENBQUMxeUIsR0FBQSxDQUFJaU4sS0FBQSxDQUFNOVAsSUFBQSxDQUFLNkMsR0FBQSxDQUFJaU4sS0FBQSxDQUFNMmxCLFdBQUEsQ0FBWTV5QixHQUFBLENBQUlsQyxFQUFFLENBQUMsRUFBRXNPLGFBQUEsRUFDdkZoSCxJQUFBLENBQUs4ZCxRQUFBLENBQVM5ZCxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUcwUCxlQUFBLENBQWdCLENBQUMsT0FFN0N6dEIsSUFBQSxDQUFLd0gsV0FBQSxDQUFZeEgsSUFBQSxDQUFLd0YsS0FBSztJQUMvQixPQUFPO0VBQ1g7RUFDQSxPQUFPO0FBQ1g7QUFDQSxTQUFTa29CLFlBQVkxdEIsSUFBQSxFQUFNdEYsR0FBQSxFQUFLO0VBRzVCLElBQUksQ0FBQ3NGLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSXhDLFVBQUEsRUFDVjtFQUNKLElBQUlrVyxJQUFBLEdBQU9wTyxJQUFBLENBQUt0RixHQUFBLENBQUl4QyxVQUFBLENBQVdvVyxXQUFBLENBQVkxVixRQUFBLENBQVN5VixhQUFBLENBQWMsS0FBSyxDQUFDO0VBQ3hFRCxJQUFBLENBQUtFLFdBQUEsQ0FBWTVULEdBQUc7RUFDcEIwVCxJQUFBLENBQUs3UCxLQUFBLENBQU1tWSxPQUFBLEdBQVU7RUFDckIsSUFBSWhQLEdBQUEsR0FBTXFGLFlBQUEsQ0FBYTtJQUFHcFUsS0FBQSxHQUFRQyxRQUFBLENBQVNDLFdBQUEsQ0FBWTtFQUN2REYsS0FBQSxDQUFNZzFCLGtCQUFBLENBQW1CanpCLEdBQUc7RUFJNUJzRixJQUFBLENBQUt0RixHQUFBLENBQUlrekIsSUFBQSxDQUFLO0VBQ2RsbUIsR0FBQSxDQUFJMEYsZUFBQSxDQUFnQjtFQUNwQjFGLEdBQUEsQ0FBSTJGLFFBQUEsQ0FBUzFVLEtBQUs7RUFDbEJza0IsVUFBQSxDQUFXLE1BQU07SUFDYixJQUFJN08sSUFBQSxDQUFLbFcsVUFBQSxFQUNMa1csSUFBQSxDQUFLbFcsVUFBQSxDQUFXb2IsV0FBQSxDQUFZbEYsSUFBSTtJQUNwQ3BPLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTtFQUNmLEdBQUcsRUFBRTtBQUNUO0FBSUEsSUFBTW9yQixrQkFBQSxHQUFzQnZ3QixFQUFBLElBQU1DLFVBQUEsR0FBYSxNQUMxQ1EsR0FBQSxJQUFPUyxjQUFBLEdBQWlCO0FBQzdCeW5CLFFBQUEsQ0FBU2xXLElBQUEsR0FBT21XLFlBQUEsQ0FBYXRSLEdBQUEsR0FBTSxDQUFDNVUsSUFBQSxFQUFNMm9CLE1BQUEsS0FBVztFQUNqRCxJQUFJbnRCLEtBQUEsR0FBUW10QixNQUFBO0VBQ1osSUFBSWpoQixHQUFBLEdBQU0xSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0lBQVdpTixHQUFBLEdBQU1wWixLQUFBLENBQU1nUyxJQUFBLElBQVE7RUFDcEQsSUFBSTlGLEdBQUEsQ0FBSXNKLEtBQUEsRUFDSjtFQUVKLElBQUk4YyxJQUFBLEdBQU9ELGtCQUFBLEdBQXFCLE9BQU9yeUIsS0FBQSxDQUFNdXlCLGFBQUE7RUFDN0MsSUFBSWplLEtBQUEsR0FBUXBJLEdBQUEsQ0FBSWpDLE9BQUEsQ0FBUTtJQUFHO01BQUUvSyxHQUFBO01BQUtxVDtJQUFLLElBQUkwUyxxQkFBQSxDQUFzQnpnQixJQUFBLEVBQU04UCxLQUFLO0VBQzVFLElBQUlnZSxJQUFBLEVBQU07SUFDTnR5QixLQUFBLENBQU1zdEIsY0FBQSxDQUFlO0lBQ3JCZ0YsSUFBQSxDQUFLRSxTQUFBLENBQVU7SUFDZkYsSUFBQSxDQUFLRyxPQUFBLENBQVEsYUFBYXZ6QixHQUFBLENBQUlrckIsU0FBUztJQUN2Q2tJLElBQUEsQ0FBS0csT0FBQSxDQUFRLGNBQWNsZ0IsSUFBSTtFQUNuQyxPQUNLO0lBQ0QyZixXQUFBLENBQVkxdEIsSUFBQSxFQUFNdEYsR0FBRztFQUN6QjtFQUNBLElBQUlrYSxHQUFBLEVBQ0E1VSxJQUFBLENBQUs4ZCxRQUFBLENBQVM5ZCxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUcwUCxlQUFBLENBQWdCLEVBQUV6UCxjQUFBLENBQWUsRUFBRWdNLE9BQUEsQ0FBUSxXQUFXLEtBQUssQ0FBQztBQUNoRztBQUNBLFNBQVNrRSxnQkFBZ0JwZSxLQUFBLEVBQU87RUFDNUIsT0FBT0EsS0FBQSxDQUFNNlEsU0FBQSxJQUFhLEtBQUs3USxLQUFBLENBQU04USxPQUFBLElBQVcsS0FBSzlRLEtBQUEsQ0FBTXJLLE9BQUEsQ0FBUXNNLFVBQUEsSUFBYyxJQUFJakMsS0FBQSxDQUFNckssT0FBQSxDQUFRcEMsVUFBQSxHQUFhO0FBQ3BIO0FBQ0EsU0FBUzhxQixhQUFhbnVCLElBQUEsRUFBTXhFLEtBQUEsRUFBTztFQUMvQixJQUFJLENBQUN3RSxJQUFBLENBQUt0RixHQUFBLENBQUl4QyxVQUFBLEVBQ1Y7RUFDSixJQUFJd3BCLFNBQUEsR0FBWTFoQixJQUFBLENBQUtpVCxLQUFBLENBQU1zTixRQUFBLElBQVl2Z0IsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVRSxLQUFBLENBQU0xUCxNQUFBLENBQU9xVixJQUFBLENBQUtVLElBQUEsQ0FBS3ZTLElBQUE7RUFDbkYsSUFBSW9LLE1BQUEsR0FBUy9GLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBV29XLFdBQUEsQ0FBWTFWLFFBQUEsQ0FBU3lWLGFBQUEsQ0FBY3FULFNBQUEsR0FBWSxhQUFhLEtBQUssQ0FBQztFQUNuRyxJQUFJLENBQUNBLFNBQUEsRUFDRDNiLE1BQUEsQ0FBT2hNLGVBQUEsR0FBa0I7RUFDN0JnTSxNQUFBLENBQU94SCxLQUFBLENBQU1tWSxPQUFBLEdBQVU7RUFDdkIzUSxNQUFBLENBQU90RCxLQUFBLENBQU07RUFDYixJQUFJMnJCLEtBQUEsR0FBUXB1QixJQUFBLENBQUtpVCxLQUFBLENBQU1zTixRQUFBLElBQVl2Z0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNc1QsV0FBQSxJQUFlO0VBQzdEdEosVUFBQSxDQUFXLE1BQU07SUFDYmpkLElBQUEsQ0FBS3lDLEtBQUEsQ0FBTTtJQUNYLElBQUlzRCxNQUFBLENBQU83TixVQUFBLEVBQ1A2TixNQUFBLENBQU83TixVQUFBLENBQVdvYixXQUFBLENBQVl2TixNQUFNO0lBQ3hDLElBQUkyYixTQUFBLEVBQ0EyTSxPQUFBLENBQVFydUIsSUFBQSxFQUFNK0YsTUFBQSxDQUFPekcsS0FBQSxFQUFPLE1BQU04dUIsS0FBQSxFQUFPNXlCLEtBQUssT0FFOUM2eUIsT0FBQSxDQUFRcnVCLElBQUEsRUFBTStGLE1BQUEsQ0FBTzBDLFdBQUEsRUFBYTFDLE1BQUEsQ0FBTzZmLFNBQUEsRUFBV3dJLEtBQUEsRUFBTzV5QixLQUFLO0VBQ3hFLEdBQUcsRUFBRTtBQUNUO0FBQ0EsU0FBUzZ5QixRQUFRcnVCLElBQUEsRUFBTStOLElBQUEsRUFBTTBULElBQUEsRUFBTTZNLFdBQUEsRUFBYTl5QixLQUFBLEVBQU87RUFDbkQsSUFBSXNVLEtBQUEsR0FBUTBSLGtCQUFBLENBQW1CeGhCLElBQUEsRUFBTStOLElBQUEsRUFBTTBULElBQUEsRUFBTTZNLFdBQUEsRUFBYXR1QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVFLEtBQUs7RUFDeEYsSUFBSTdILElBQUEsQ0FBS0csUUFBQSxDQUFTLGVBQWVrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTXhFLEtBQUEsRUFBT3NVLEtBQUEsSUFBU2xZLHdCQUFBLENBQUFrcUIsS0FBQSxDQUFNOVEsS0FBSyxDQUFDLEdBQ3RFLE9BQU87RUFDWCxJQUFJLENBQUNsQixLQUFBLEVBQ0QsT0FBTztFQUNYLElBQUl5ZSxVQUFBLEdBQWFMLGVBQUEsQ0FBZ0JwZSxLQUFLO0VBQ3RDLElBQUlpTyxFQUFBLEdBQUt3USxVQUFBLEdBQ0h2dUIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNdVksRUFBQSxDQUFHeVEsb0JBQUEsQ0FBcUJELFVBQUEsRUFBWUQsV0FBVyxJQUMxRHR1QixJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUcwUSxnQkFBQSxDQUFpQjNlLEtBQUs7RUFDMUM5UCxJQUFBLENBQUs4ZCxRQUFBLENBQVNDLEVBQUEsQ0FBR0MsY0FBQSxDQUFlLEVBQUVnTSxPQUFBLENBQVEsU0FBUyxJQUFJLEVBQUVBLE9BQUEsQ0FBUSxXQUFXLE9BQU8sQ0FBQztFQUNwRixPQUFPO0FBQ1g7QUFDQSxTQUFTMEUsUUFBUVgsYUFBQSxFQUFlO0VBQzVCLElBQUloZ0IsSUFBQSxHQUFPZ2dCLGFBQUEsQ0FBY1ksT0FBQSxDQUFRLFlBQVksS0FBS1osYUFBQSxDQUFjWSxPQUFBLENBQVEsTUFBTTtFQUM5RSxJQUFJNWdCLElBQUEsRUFDQSxPQUFPQSxJQUFBO0VBQ1gsSUFBSTZnQixJQUFBLEdBQU9iLGFBQUEsQ0FBY1ksT0FBQSxDQUFRLGVBQWU7RUFDaEQsT0FBT0MsSUFBQSxHQUFPQSxJQUFBLENBQUs3TSxPQUFBLENBQVEsVUFBVSxHQUFHLElBQUk7QUFDaEQ7QUFDQW1FLFlBQUEsQ0FBYTJJLEtBQUEsR0FBUSxDQUFDN3VCLElBQUEsRUFBTTJvQixNQUFBLEtBQVc7RUFDbkMsSUFBSW50QixLQUFBLEdBQVFtdEIsTUFBQTtFQUtaLElBQUkzb0IsSUFBQSxDQUFLcVIsU0FBQSxJQUFhLENBQUNqVCxPQUFBLEVBQ25CO0VBQ0osSUFBSTB2QixJQUFBLEdBQU9ELGtCQUFBLEdBQXFCLE9BQU9yeUIsS0FBQSxDQUFNdXlCLGFBQUE7RUFDN0MsSUFBSUssS0FBQSxHQUFRcHVCLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXNOLFFBQUEsSUFBWXZnQixJQUFBLENBQUtpVCxLQUFBLENBQU1zVCxXQUFBLElBQWU7RUFDN0QsSUFBSXVILElBQUEsSUFBUU8sT0FBQSxDQUFRcnVCLElBQUEsRUFBTTB1QixPQUFBLENBQVFaLElBQUksR0FBR0EsSUFBQSxDQUFLYSxPQUFBLENBQVEsV0FBVyxHQUFHUCxLQUFBLEVBQU81eUIsS0FBSyxHQUM1RUEsS0FBQSxDQUFNc3RCLGNBQUEsQ0FBZSxPQUVyQnFGLFlBQUEsQ0FBYW51QixJQUFBLEVBQU14RSxLQUFLO0FBQ2hDO0FBQ0EsSUFBTXN6QixRQUFBLEdBQU4sTUFBZTtFQUNYN2tCLFlBQVk2RixLQUFBLEVBQU8yYixJQUFBLEVBQU0xekIsSUFBQSxFQUFNO0lBQzNCLEtBQUsrWCxLQUFBLEdBQVFBLEtBQUE7SUFDYixLQUFLMmIsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBSzF6QixJQUFBLEdBQU9BLElBQUE7RUFDaEI7QUFDSjtBQUNBLElBQU1nM0IsZ0JBQUEsR0FBbUI5d0IsR0FBQSxHQUFNLFdBQVc7QUFDMUMsU0FBUyt3QixVQUFVaHZCLElBQUEsRUFBTXhFLEtBQUEsRUFBTztFQUM1QixJQUFJeXpCLEtBQUEsR0FBUWp2QixJQUFBLENBQUtHLFFBQUEsQ0FBUyxjQUFjdEcsSUFBQSxJQUFRLENBQUNBLElBQUEsQ0FBSzJCLEtBQUssQ0FBQztFQUM1RCxPQUFPeXpCLEtBQUEsSUFBUyxPQUFPQSxLQUFBLEdBQVEsQ0FBQ3p6QixLQUFBLENBQU11ekIsZ0JBQWdCO0FBQzFEO0FBQ0E5SSxRQUFBLENBQVNpSixTQUFBLEdBQVksQ0FBQ2x2QixJQUFBLEVBQU0yb0IsTUFBQSxLQUFXO0VBQ25DLElBQUludEIsS0FBQSxHQUFRbXRCLE1BQUE7RUFDWixJQUFJak4sU0FBQSxHQUFZMWIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNeUksU0FBQTtFQUMzQixJQUFJQSxTQUFBLEVBQ0FBLFNBQUEsQ0FBVW9QLElBQUEsQ0FBSztFQUNuQixJQUFJLENBQUN0dkIsS0FBQSxDQUFNMnpCLFlBQUEsRUFDUDtFQUNKLElBQUl6bkIsR0FBQSxHQUFNMUgsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQTtFQUNyQixJQUFJdEwsR0FBQSxHQUFNcUwsR0FBQSxDQUFJc0osS0FBQSxHQUFRLE9BQU9oUixJQUFBLENBQUtpRixXQUFBLENBQVlxa0IsV0FBQSxDQUFZOXRCLEtBQUssQ0FBQztFQUNoRSxJQUFJekQsSUFBQTtFQUNKLElBQUlzRSxHQUFBLElBQU9BLEdBQUEsQ0FBSUEsR0FBQSxJQUFPcUwsR0FBQSxDQUFJalAsSUFBQSxJQUFRNEQsR0FBQSxDQUFJQSxHQUFBLEtBQVFxTCxHQUFBLFlBQWVoUSx3QkFBQSxDQUFBaWpCLGFBQUEsR0FBZ0JqVCxHQUFBLENBQUloUCxFQUFBLEdBQUssSUFBSWdQLEdBQUEsQ0FBSWhQLEVBQUEsR0FBSyxVQUMxRmdqQixTQUFBLElBQWFBLFNBQUEsQ0FBVXNQLFNBQUEsRUFBVztJQUN2Q2p6QixJQUFBLEdBQU9MLHdCQUFBLENBQUFpakIsYUFBQSxDQUFjdkwsTUFBQSxDQUFPcFAsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxFQUFLMmUsU0FBQSxDQUFVc1AsU0FBQSxDQUFVM3VCLEdBQUc7RUFDdkUsV0FDU2IsS0FBQSxDQUFNdUssTUFBQSxJQUFVdkssS0FBQSxDQUFNdUssTUFBQSxDQUFPMU4sUUFBQSxJQUFZLEdBQUc7SUFDakQsSUFBSXNDLElBQUEsR0FBT3FGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUssV0FBQSxDQUFZL0ksS0FBQSxDQUFNdUssTUFBQSxFQUFRLElBQUk7SUFDdEQsSUFBSXBMLElBQUEsSUFBUUEsSUFBQSxDQUFLNUMsSUFBQSxDQUFLeVYsSUFBQSxDQUFLVSxJQUFBLENBQUs5SSxTQUFBLElBQWF6SyxJQUFBLElBQVFxRixJQUFBLENBQUtrRSxPQUFBLEVBQ3REbk0sSUFBQSxHQUFPTCx3QkFBQSxDQUFBaWpCLGFBQUEsQ0FBY3ZMLE1BQUEsQ0FBT3BQLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsRUFBS3BDLElBQUEsQ0FBSzZKLFNBQVM7RUFDbEU7RUFDQSxJQUFJNHFCLFlBQUEsSUFBZ0JyM0IsSUFBQSxJQUFRaUksSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxFQUFXbEMsT0FBQSxDQUFRO0VBQzFELElBQUk7SUFBRS9LLEdBQUE7SUFBS3FULElBQUE7SUFBTStCO0VBQU0sSUFBSTJRLHFCQUFBLENBQXNCemdCLElBQUEsRUFBTW92QixZQUFZO0VBRW5FLElBQUksQ0FBQzV6QixLQUFBLENBQU0yekIsWUFBQSxDQUFhRSxLQUFBLENBQU1yMkIsTUFBQSxJQUFVLENBQUMyRSxNQUFBLElBQVVDLGNBQUEsR0FBaUIsS0FDaEVwQyxLQUFBLENBQU0yekIsWUFBQSxDQUFhbkIsU0FBQSxDQUFVO0VBQ2pDeHlCLEtBQUEsQ0FBTTJ6QixZQUFBLENBQWFsQixPQUFBLENBQVFKLGtCQUFBLEdBQXFCLFNBQVMsYUFBYW56QixHQUFBLENBQUlrckIsU0FBUztFQUVuRnBxQixLQUFBLENBQU0yekIsWUFBQSxDQUFhRyxhQUFBLEdBQWdCO0VBQ25DLElBQUksQ0FBQ3pCLGtCQUFBLEVBQ0RyeUIsS0FBQSxDQUFNMnpCLFlBQUEsQ0FBYWxCLE9BQUEsQ0FBUSxjQUFjbGdCLElBQUk7RUFDakQvTixJQUFBLENBQUt1dkIsUUFBQSxHQUFXLElBQUlULFFBQUEsQ0FBU2hmLEtBQUEsRUFBT2tmLFNBQUEsQ0FBVWh2QixJQUFBLEVBQU14RSxLQUFLLEdBQUd6RCxJQUFJO0FBQ3BFO0FBQ0FrdUIsUUFBQSxDQUFTdUosT0FBQSxHQUFVeHZCLElBQUEsSUFBUTtFQUN2QixJQUFJdXZCLFFBQUEsR0FBV3Z2QixJQUFBLENBQUt1dkIsUUFBQTtFQUNwQnRWLE1BQUEsQ0FBT2dELFVBQUEsQ0FBVyxNQUFNO0lBQ3BCLElBQUlqZCxJQUFBLENBQUt1dkIsUUFBQSxJQUFZQSxRQUFBLEVBQ2pCdnZCLElBQUEsQ0FBS3V2QixRQUFBLEdBQVc7RUFDeEIsR0FBRyxFQUFFO0FBQ1Q7QUFDQXJKLFlBQUEsQ0FBYXVKLFFBQUEsR0FBV3ZKLFlBQUEsQ0FBYXdKLFNBQUEsR0FBWSxDQUFDanpCLENBQUEsRUFBR2liLENBQUEsS0FBTUEsQ0FBQSxDQUFFb1IsY0FBQSxDQUFlO0FBQzVFNUMsWUFBQSxDQUFheUosSUFBQSxHQUFPLENBQUMzdkIsSUFBQSxFQUFNMm9CLE1BQUEsS0FBVztFQUNsQyxJQUFJbnRCLEtBQUEsR0FBUW10QixNQUFBO0VBQ1osSUFBSTRHLFFBQUEsR0FBV3Z2QixJQUFBLENBQUt1dkIsUUFBQTtFQUNwQnZ2QixJQUFBLENBQUt1dkIsUUFBQSxHQUFXO0VBQ2hCLElBQUksQ0FBQy96QixLQUFBLENBQU0yekIsWUFBQSxFQUNQO0VBQ0osSUFBSVMsUUFBQSxHQUFXNXZCLElBQUEsQ0FBS2lGLFdBQUEsQ0FBWXFrQixXQUFBLENBQVk5dEIsS0FBSyxDQUFDO0VBQ2xELElBQUksQ0FBQ28wQixRQUFBLEVBQ0Q7RUFDSixJQUFJQyxNQUFBLEdBQVM3dkIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNekksR0FBQSxDQUFJZ0ssT0FBQSxDQUFRNm9CLFFBQUEsQ0FBU3Z6QixHQUFHO0VBQ2hELElBQUl5VCxLQUFBLEdBQVF5ZixRQUFBLElBQVlBLFFBQUEsQ0FBU3pmLEtBQUE7RUFDakMsSUFBSUEsS0FBQSxFQUFPO0lBQ1A5UCxJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJrSCxDQUFBLElBQUs7TUFBRXlJLEtBQUEsR0FBUXpJLENBQUEsQ0FBRXlJLEtBQUEsRUFBTzlQLElBQUk7SUFBRyxDQUFDO0VBQ3JFLE9BQ0s7SUFDRDhQLEtBQUEsR0FBUTBSLGtCQUFBLENBQW1CeGhCLElBQUEsRUFBTTB1QixPQUFBLENBQVFsekIsS0FBQSxDQUFNMnpCLFlBQVksR0FBR3RCLGtCQUFBLEdBQXFCLE9BQU9yeUIsS0FBQSxDQUFNMnpCLFlBQUEsQ0FBYVIsT0FBQSxDQUFRLFdBQVcsR0FBRyxPQUFPa0IsTUFBTTtFQUNwSjtFQUNBLElBQUlwRSxJQUFBLEdBQU8sQ0FBQyxFQUFFOEQsUUFBQSxJQUFZUCxTQUFBLENBQVVodkIsSUFBQSxFQUFNeEUsS0FBSztFQUMvQyxJQUFJd0UsSUFBQSxDQUFLRyxRQUFBLENBQVMsY0FBY2tILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNeEUsS0FBQSxFQUFPc1UsS0FBQSxJQUFTbFksd0JBQUEsQ0FBQWtxQixLQUFBLENBQU05USxLQUFBLEVBQU95YSxJQUFJLENBQUMsR0FBRztJQUM5RWp3QixLQUFBLENBQU1zdEIsY0FBQSxDQUFlO0lBQ3JCO0VBQ0o7RUFDQSxJQUFJLENBQUNoWixLQUFBLEVBQ0Q7RUFDSnRVLEtBQUEsQ0FBTXN0QixjQUFBLENBQWU7RUFDckIsSUFBSWdILFNBQUEsR0FBWWhnQixLQUFBLE9BQVFqWSw0QkFBQSxDQUFBazRCLFNBQUEsRUFBVS92QixJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLEVBQUs4eUIsTUFBQSxDQUFPeHpCLEdBQUEsRUFBS3lULEtBQUssSUFBSStmLE1BQUEsQ0FBT3h6QixHQUFBO0VBQzlFLElBQUl5ekIsU0FBQSxJQUFhLE1BQ2JBLFNBQUEsR0FBWUQsTUFBQSxDQUFPeHpCLEdBQUE7RUFDdkIsSUFBSTBoQixFQUFBLEdBQUsvZCxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBO0VBQ3BCLElBQUkwTixJQUFBLEVBQU07SUFDTixJQUFJO01BQUUxekI7SUFBSyxJQUFJdzNCLFFBQUE7SUFDZixJQUFJeDNCLElBQUEsRUFDQUEsSUFBQSxDQUFLZ3FCLE9BQUEsQ0FBUWhFLEVBQUUsT0FFZkEsRUFBQSxDQUFHMFAsZUFBQSxDQUFnQjtFQUMzQjtFQUNBLElBQUlweEIsR0FBQSxHQUFNMGhCLEVBQUEsQ0FBR2lTLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSW9LLFNBQVM7RUFDbEMsSUFBSUcsTUFBQSxHQUFTbmdCLEtBQUEsQ0FBTTZRLFNBQUEsSUFBYSxLQUFLN1EsS0FBQSxDQUFNOFEsT0FBQSxJQUFXLEtBQUs5USxLQUFBLENBQU1ySyxPQUFBLENBQVFzTSxVQUFBLElBQWM7RUFDdkYsSUFBSW1lLFlBQUEsR0FBZW5TLEVBQUEsQ0FBR2hoQixHQUFBO0VBQ3RCLElBQUlrekIsTUFBQSxFQUNBbFMsRUFBQSxDQUFHb1MsZ0JBQUEsQ0FBaUI5ekIsR0FBQSxFQUFLQSxHQUFBLEVBQUt5VCxLQUFBLENBQU1ySyxPQUFBLENBQVFwQyxVQUFVLE9BRXREMGEsRUFBQSxDQUFHcVMsWUFBQSxDQUFhL3pCLEdBQUEsRUFBS0EsR0FBQSxFQUFLeVQsS0FBSztFQUNuQyxJQUFJaU8sRUFBQSxDQUFHaGhCLEdBQUEsQ0FBSTBSLEVBQUEsQ0FBR3loQixZQUFZLEdBQ3RCO0VBQ0osSUFBSXRvQixJQUFBLEdBQU9tVyxFQUFBLENBQUdoaEIsR0FBQSxDQUFJZ0ssT0FBQSxDQUFRMUssR0FBRztFQUM3QixJQUFJNHpCLE1BQUEsSUFBVXY0Qix3QkFBQSxDQUFBaWpCLGFBQUEsQ0FBY0MsWUFBQSxDQUFhOUssS0FBQSxDQUFNckssT0FBQSxDQUFRcEMsVUFBVSxLQUM3RHVFLElBQUEsQ0FBS3lXLFNBQUEsSUFBYXpXLElBQUEsQ0FBS3lXLFNBQUEsQ0FBVTVLLFVBQUEsQ0FBVzNELEtBQUEsQ0FBTXJLLE9BQUEsQ0FBUXBDLFVBQVUsR0FBRztJQUN2RTBhLEVBQUEsQ0FBR3RSLFlBQUEsQ0FBYSxJQUFJL1Usd0JBQUEsQ0FBQWlqQixhQUFBLENBQWMvUyxJQUFJLENBQUM7RUFDM0MsT0FDSztJQUNELElBQUlZLEdBQUEsR0FBTXVWLEVBQUEsQ0FBR2lTLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSW9LLFNBQVM7SUFDbEMvUixFQUFBLENBQUdpUyxPQUFBLENBQVFLLElBQUEsQ0FBS3RTLEVBQUEsQ0FBR2lTLE9BQUEsQ0FBUUssSUFBQSxDQUFLcjNCLE1BQUEsR0FBUyxDQUFDLEVBQUVpcEIsT0FBQSxDQUFRLENBQUNxTyxLQUFBLEVBQU9DLEdBQUEsRUFBS0MsUUFBQSxFQUFVQyxLQUFBLEtBQVVqb0IsR0FBQSxHQUFNaW9CLEtBQUs7SUFDaEcxUyxFQUFBLENBQUd0UixZQUFBLENBQWEwTyxnQkFBQSxDQUFpQm5iLElBQUEsRUFBTTRILElBQUEsRUFBTW1XLEVBQUEsQ0FBR2hoQixHQUFBLENBQUlnSyxPQUFBLENBQVF5QixHQUFHLENBQUMsQ0FBQztFQUNyRTtFQUNBeEksSUFBQSxDQUFLeUMsS0FBQSxDQUFNO0VBQ1h6QyxJQUFBLENBQUs4ZCxRQUFBLENBQVNDLEVBQUEsQ0FBR2lNLE9BQUEsQ0FBUSxXQUFXLE1BQU0sQ0FBQztBQUMvQztBQUNBL0QsUUFBQSxDQUFTeGpCLEtBQUEsR0FBUXpDLElBQUEsSUFBUTtFQUNyQkEsSUFBQSxDQUFLaVQsS0FBQSxDQUFNK1QsU0FBQSxHQUFZaUIsSUFBQSxDQUFLQyxHQUFBLENBQUk7RUFDaEMsSUFBSSxDQUFDbG9CLElBQUEsQ0FBSytwQixPQUFBLEVBQVM7SUFDZi9wQixJQUFBLENBQUs2YixXQUFBLENBQVlsTixJQUFBLENBQUs7SUFDdEIzTyxJQUFBLENBQUt0RixHQUFBLENBQUk2VCxTQUFBLENBQVVDLEdBQUEsQ0FBSSxxQkFBcUI7SUFDNUN4TyxJQUFBLENBQUs2YixXQUFBLENBQVl0VCxLQUFBLENBQU07SUFDdkJ2SSxJQUFBLENBQUsrcEIsT0FBQSxHQUFVO0lBQ2Y5TSxVQUFBLENBQVcsTUFBTTtNQUNiLElBQUlqZCxJQUFBLENBQUtrRSxPQUFBLElBQVdsRSxJQUFBLENBQUtzYixRQUFBLENBQVMsS0FBSyxDQUFDdGIsSUFBQSxDQUFLNmIsV0FBQSxDQUFZQyxnQkFBQSxDQUFpQnJOLEVBQUEsQ0FBR3pPLElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCLENBQUMsR0FDakcyUyxjQUFBLENBQWV4YixJQUFJO0lBQzNCLEdBQUcsRUFBRTtFQUNUO0FBQ0o7QUFDQWltQixRQUFBLENBQVMySCxJQUFBLEdBQU8sQ0FBQzV0QixJQUFBLEVBQU0yb0IsTUFBQSxLQUFXO0VBQzlCLElBQUludEIsS0FBQSxHQUFRbXRCLE1BQUE7RUFDWixJQUFJM29CLElBQUEsQ0FBSytwQixPQUFBLEVBQVM7SUFDZC9wQixJQUFBLENBQUs2YixXQUFBLENBQVlsTixJQUFBLENBQUs7SUFDdEIzTyxJQUFBLENBQUt0RixHQUFBLENBQUk2VCxTQUFBLENBQVUyRixNQUFBLENBQU8scUJBQXFCO0lBQy9DbFUsSUFBQSxDQUFLNmIsV0FBQSxDQUFZdFQsS0FBQSxDQUFNO0lBQ3ZCLElBQUkvTSxLQUFBLENBQU1rMUIsYUFBQSxJQUFpQjF3QixJQUFBLENBQUt0RixHQUFBLENBQUlrSCxRQUFBLENBQVNwRyxLQUFBLENBQU1rMUIsYUFBYSxHQUM1RDF3QixJQUFBLENBQUs2YixXQUFBLENBQVlDLGdCQUFBLENBQWlCNlUsS0FBQSxDQUFNO0lBQzVDM3dCLElBQUEsQ0FBSytwQixPQUFBLEdBQVU7RUFDbkI7QUFDSjtBQUNBOUQsUUFBQSxDQUFTMkssV0FBQSxHQUFjLENBQUM1d0IsSUFBQSxFQUFNMm9CLE1BQUEsS0FBVztFQUNyQyxJQUFJbnRCLEtBQUEsR0FBUW10QixNQUFBO0VBS1osSUFBSWhyQixNQUFBLElBQVVTLE9BQUEsSUFBVzVDLEtBQUEsQ0FBTXExQixTQUFBLElBQWEseUJBQXlCO0lBQ2pFN3dCLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWWlWLFNBQUEsQ0FBVTtJQUMzQixJQUFJO01BQUV2SjtJQUFlLElBQUl2bkIsSUFBQSxDQUFLaVQsS0FBQTtJQUM5QmdLLFVBQUEsQ0FBVyxNQUFNO01BQ2IsSUFBSWpkLElBQUEsQ0FBS2lULEtBQUEsQ0FBTXNVLGNBQUEsSUFBa0JBLGNBQUEsRUFDN0I7TUFFSnZuQixJQUFBLENBQUt0RixHQUFBLENBQUlrekIsSUFBQSxDQUFLO01BQ2Q1dEIsSUFBQSxDQUFLeUMsS0FBQSxDQUFNO01BQ1gsSUFBSXpDLElBQUEsQ0FBS0csUUFBQSxDQUFTLGlCQUFpQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0UsUUFBQSxDQUFTLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FDckU7TUFDSixJQUFJO1FBQUUwMUI7TUFBUSxJQUFJL3dCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUE7TUFFN0IsSUFBSW9wQixPQUFBLElBQVdBLE9BQUEsQ0FBUTEwQixHQUFBLEdBQU0sR0FDekIyRCxJQUFBLENBQUs4ZCxRQUFBLENBQVM5ZCxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUdpQyxNQUFBLENBQU8rUSxPQUFBLENBQVExMEIsR0FBQSxHQUFNLEdBQUcwMEIsT0FBQSxDQUFRMTBCLEdBQUcsRUFBRTJoQixjQUFBLENBQWUsQ0FBQztJQUN6RixHQUFHLEVBQUU7RUFDVDtBQUNKO0FBRUEsU0FBU3pILElBQUEsSUFBUTJQLFlBQUEsRUFDYkQsUUFBQSxDQUFTMVAsSUFBSSxJQUFJMlAsWUFBQSxDQUFhM1AsSUFBSTtBQUV0QyxTQUFTeWEsWUFBWXJhLENBQUEsRUFBR0MsQ0FBQSxFQUFHO0VBQ3ZCLElBQUlELENBQUEsSUFBS0MsQ0FBQSxFQUNMLE9BQU87RUFDWCxTQUFTelIsQ0FBQSxJQUFLd1IsQ0FBQSxFQUNWLElBQUlBLENBQUEsQ0FBRXhSLENBQUMsTUFBTXlSLENBQUEsQ0FBRXpSLENBQUMsR0FDWixPQUFPO0VBQ2YsU0FBU0EsQ0FBQSxJQUFLeVIsQ0FBQSxFQUNWLElBQUksRUFBRXpSLENBQUEsSUFBS3dSLENBQUEsR0FDUCxPQUFPO0VBQ2YsT0FBTztBQUNYO0FBQ0EsSUFBTXNhLFVBQUEsR0FBTixNQUFNQyxXQUFBLENBQVc7RUFDYmpuQixZQUFZZ0UsS0FBQSxFQUFPQyxJQUFBLEVBQU07SUFDckIsS0FBS0QsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS0MsSUFBQSxHQUFPQSxJQUFBLElBQVFpakIsTUFBQTtJQUNwQixLQUFLNXhCLElBQUEsR0FBTyxLQUFLMk8sSUFBQSxDQUFLM08sSUFBQSxJQUFRO0VBQ2xDO0VBQ0FtbUIsSUFBSXNLLE9BQUEsRUFBU29CLElBQUEsRUFBTS8yQixNQUFBLEVBQVFnM0IsU0FBQSxFQUFXO0lBQ2xDLElBQUk7TUFBRWgxQixHQUFBO01BQUtpMUI7SUFBUSxJQUFJdEIsT0FBQSxDQUFRdUIsU0FBQSxDQUFVSCxJQUFBLENBQUszNEIsSUFBQSxHQUFPNDRCLFNBQUEsRUFBVyxLQUFLOXhCLElBQUEsR0FBTyxJQUFJLEtBQUssQ0FBQztJQUN0RixPQUFPK3hCLE9BQUEsR0FBVSxPQUFPLElBQUlwNkIsVUFBQSxDQUFXbUYsR0FBQSxHQUFNaEMsTUFBQSxFQUFRZ0MsR0FBQSxHQUFNaEMsTUFBQSxFQUFRLElBQUk7RUFDM0U7RUFDQW0zQixNQUFBLEVBQVE7SUFBRSxPQUFPO0VBQU07RUFDdkIvaUIsR0FBR2dqQixLQUFBLEVBQU87SUFDTixPQUFPLFFBQVFBLEtBQUEsSUFDVkEsS0FBQSxZQUFpQlAsV0FBQSxLQUNiLEtBQUtoakIsSUFBQSxDQUFLM1MsR0FBQSxJQUFPLEtBQUsyUyxJQUFBLENBQUszUyxHQUFBLElBQU9rMkIsS0FBQSxDQUFNdmpCLElBQUEsQ0FBSzNTLEdBQUEsSUFDMUMsS0FBSzBTLEtBQUEsSUFBU3dqQixLQUFBLENBQU14akIsS0FBQSxJQUFTK2lCLFdBQUEsQ0FBWSxLQUFLOWlCLElBQUEsRUFBTXVqQixLQUFBLENBQU12akIsSUFBSTtFQUM5RTtFQUNBcEQsUUFBUS9TLElBQUEsRUFBTTtJQUNWLElBQUksS0FBS21XLElBQUEsQ0FBS3BELE9BQUEsRUFDVixLQUFLb0QsSUFBQSxDQUFLcEQsT0FBQSxDQUFRL1MsSUFBSTtFQUM5QjtBQUNKO0FBQ0EsSUFBTTI1QixVQUFBLEdBQU4sTUFBTUMsV0FBQSxDQUFXO0VBQ2IxbkIsWUFBWTBGLEtBQUEsRUFBT3pCLElBQUEsRUFBTTtJQUNyQixLQUFLeUIsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS3pCLElBQUEsR0FBT0EsSUFBQSxJQUFRaWpCLE1BQUE7RUFDeEI7RUFDQXpMLElBQUlzSyxPQUFBLEVBQVNvQixJQUFBLEVBQU0vMkIsTUFBQSxFQUFRZzNCLFNBQUEsRUFBVztJQUNsQyxJQUFJNTRCLElBQUEsR0FBT3UzQixPQUFBLENBQVF0SyxHQUFBLENBQUkwTCxJQUFBLENBQUszNEIsSUFBQSxHQUFPNDRCLFNBQUEsRUFBVyxLQUFLbmpCLElBQUEsQ0FBSzBqQixjQUFBLEdBQWlCLEtBQUssQ0FBQyxJQUFJdjNCLE1BQUE7SUFDbkYsSUFBSTNCLEVBQUEsR0FBS3MzQixPQUFBLENBQVF0SyxHQUFBLENBQUkwTCxJQUFBLENBQUsxNEIsRUFBQSxHQUFLMjRCLFNBQUEsRUFBVyxLQUFLbmpCLElBQUEsQ0FBSzJqQixZQUFBLEdBQWUsSUFBSSxFQUFFLElBQUl4M0IsTUFBQTtJQUM3RSxPQUFPNUIsSUFBQSxJQUFRQyxFQUFBLEdBQUssT0FBTyxJQUFJeEIsVUFBQSxDQUFXdUIsSUFBQSxFQUFNQyxFQUFBLEVBQUksSUFBSTtFQUM1RDtFQUNBODRCLE1BQU0vMEIsQ0FBQSxFQUFHMjBCLElBQUEsRUFBTTtJQUFFLE9BQU9BLElBQUEsQ0FBSzM0QixJQUFBLEdBQU8yNEIsSUFBQSxDQUFLMTRCLEVBQUE7RUFBSTtFQUM3QytWLEdBQUdnakIsS0FBQSxFQUFPO0lBQ04sT0FBTyxRQUFRQSxLQUFBLElBQ1ZBLEtBQUEsWUFBaUJFLFdBQUEsSUFBY1gsV0FBQSxDQUFZLEtBQUtyaEIsS0FBQSxFQUFPOGhCLEtBQUEsQ0FBTTloQixLQUFLLEtBQy9EcWhCLFdBQUEsQ0FBWSxLQUFLOWlCLElBQUEsRUFBTXVqQixLQUFBLENBQU12akIsSUFBSTtFQUM3QztFQUNBLE9BQU80akIsR0FBR1YsSUFBQSxFQUFNO0lBQUUsT0FBT0EsSUFBQSxDQUFLNWpCLElBQUEsWUFBZ0Jta0IsV0FBQTtFQUFZO0VBQzFEN21CLFFBQUEsRUFBVSxDQUFFO0FBQ2hCO0FBQ0EsSUFBTWluQixRQUFBLEdBQU4sTUFBTUMsU0FBQSxDQUFTO0VBQ1gvbkIsWUFBWTBGLEtBQUEsRUFBT3pCLElBQUEsRUFBTTtJQUNyQixLQUFLeUIsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsS0FBS3pCLElBQUEsR0FBT0EsSUFBQSxJQUFRaWpCLE1BQUE7RUFDeEI7RUFDQXpMLElBQUlzSyxPQUFBLEVBQVNvQixJQUFBLEVBQU0vMkIsTUFBQSxFQUFRZzNCLFNBQUEsRUFBVztJQUNsQyxJQUFJNTRCLElBQUEsR0FBT3UzQixPQUFBLENBQVF1QixTQUFBLENBQVVILElBQUEsQ0FBSzM0QixJQUFBLEdBQU80NEIsU0FBQSxFQUFXLENBQUM7SUFDckQsSUFBSTU0QixJQUFBLENBQUs2NEIsT0FBQSxFQUNMLE9BQU87SUFDWCxJQUFJNTRCLEVBQUEsR0FBS3MzQixPQUFBLENBQVF1QixTQUFBLENBQVVILElBQUEsQ0FBSzE0QixFQUFBLEdBQUsyNEIsU0FBQSxFQUFXLEVBQUU7SUFDbEQsSUFBSTM0QixFQUFBLENBQUc0NEIsT0FBQSxJQUFXNTRCLEVBQUEsQ0FBRzJELEdBQUEsSUFBTzVELElBQUEsQ0FBSzRELEdBQUEsRUFDN0IsT0FBTztJQUNYLE9BQU8sSUFBSW5GLFVBQUEsQ0FBV3VCLElBQUEsQ0FBSzRELEdBQUEsR0FBTWhDLE1BQUEsRUFBUTNCLEVBQUEsQ0FBRzJELEdBQUEsR0FBTWhDLE1BQUEsRUFBUSxJQUFJO0VBQ2xFO0VBQ0FtM0IsTUFBTXo1QixJQUFBLEVBQU1xNUIsSUFBQSxFQUFNO0lBQ2QsSUFBSTtRQUFFcDVCLEtBQUE7UUFBT3FDO01BQU8sSUFBSXRDLElBQUEsQ0FBSzBOLE9BQUEsQ0FBUXdzQixTQUFBLENBQVViLElBQUEsQ0FBSzM0QixJQUFJO01BQUd1QixLQUFBO0lBQzNELE9BQU9LLE1BQUEsSUFBVSsyQixJQUFBLENBQUszNEIsSUFBQSxJQUFRLEVBQUV1QixLQUFBLEdBQVFqQyxJQUFBLENBQUtpQyxLQUFBLENBQU1oQyxLQUFLLEdBQUcwTSxNQUFBLElBQVVySyxNQUFBLEdBQVNMLEtBQUEsQ0FBTUwsUUFBQSxJQUFZeTNCLElBQUEsQ0FBSzE0QixFQUFBO0VBQ3pHO0VBQ0ErVixHQUFHZ2pCLEtBQUEsRUFBTztJQUNOLE9BQU8sUUFBUUEsS0FBQSxJQUNWQSxLQUFBLFlBQWlCTyxTQUFBLElBQVloQixXQUFBLENBQVksS0FBS3JoQixLQUFBLEVBQU84aEIsS0FBQSxDQUFNOWhCLEtBQUssS0FDN0RxaEIsV0FBQSxDQUFZLEtBQUs5aUIsSUFBQSxFQUFNdWpCLEtBQUEsQ0FBTXZqQixJQUFJO0VBQzdDO0VBQ0FwRCxRQUFBLEVBQVUsQ0FBRTtBQUNoQjtBQU1BLElBQU01VCxVQUFBLEdBQU4sTUFBTWc3QixXQUFBLENBQVc7RUFBQTtBQUFBO0FBQUE7RUFJYmpvQixZQUlBeFIsSUFBQSxFQUtBQyxFQUFBLEVBSUE4VSxJQUFBLEVBQU07SUFDRixLQUFLL1UsSUFBQSxHQUFPQSxJQUFBO0lBQ1osS0FBS0MsRUFBQSxHQUFLQSxFQUFBO0lBQ1YsS0FBSzhVLElBQUEsR0FBT0EsSUFBQTtFQUNoQjtFQUFBO0FBQUE7QUFBQTtFQUlBdUMsS0FBS3RYLElBQUEsRUFBTUMsRUFBQSxFQUFJO0lBQ1gsT0FBTyxJQUFJdzVCLFdBQUEsQ0FBV3o1QixJQUFBLEVBQU1DLEVBQUEsRUFBSSxLQUFLOFUsSUFBSTtFQUM3QztFQUFBO0FBQUE7QUFBQTtFQUlBaUIsR0FBR2dqQixLQUFBLEVBQU9wM0IsTUFBQSxHQUFTLEdBQUc7SUFDbEIsT0FBTyxLQUFLbVQsSUFBQSxDQUFLaUIsRUFBQSxDQUFHZ2pCLEtBQUEsQ0FBTWprQixJQUFJLEtBQUssS0FBSy9VLElBQUEsR0FBTzRCLE1BQUEsSUFBVW8zQixLQUFBLENBQU1oNUIsSUFBQSxJQUFRLEtBQUtDLEVBQUEsR0FBSzJCLE1BQUEsSUFBVW8zQixLQUFBLENBQU0vNEIsRUFBQTtFQUNyRztFQUFBO0FBQUE7QUFBQTtFQUlBZ3RCLElBQUlzSyxPQUFBLEVBQVMzMUIsTUFBQSxFQUFRZzNCLFNBQUEsRUFBVztJQUM1QixPQUFPLEtBQUs3akIsSUFBQSxDQUFLa1ksR0FBQSxDQUFJc0ssT0FBQSxFQUFTLE1BQU0zMUIsTUFBQSxFQUFRZzNCLFNBQVM7RUFDekQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBU0EsT0FBT2huQixPQUFPaE8sR0FBQSxFQUFLNFIsS0FBQSxFQUFPQyxJQUFBLEVBQU07SUFDNUIsT0FBTyxJQUFJZ2tCLFdBQUEsQ0FBVzcxQixHQUFBLEVBQUtBLEdBQUEsRUFBSyxJQUFJNDBCLFVBQUEsQ0FBV2hqQixLQUFBLEVBQU9DLElBQUksQ0FBQztFQUMvRDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0EsT0FBT21CLE9BQU81VyxJQUFBLEVBQU1DLEVBQUEsRUFBSWlYLEtBQUEsRUFBT3pCLElBQUEsRUFBTTtJQUNqQyxPQUFPLElBQUlna0IsV0FBQSxDQUFXejVCLElBQUEsRUFBTUMsRUFBQSxFQUFJLElBQUlnNUIsVUFBQSxDQUFXL2hCLEtBQUEsRUFBT3pCLElBQUksQ0FBQztFQUMvRDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQSxPQUFPblcsS0FBS1UsSUFBQSxFQUFNQyxFQUFBLEVBQUlpWCxLQUFBLEVBQU96QixJQUFBLEVBQU07SUFDL0IsT0FBTyxJQUFJZ2tCLFdBQUEsQ0FBV3o1QixJQUFBLEVBQU1DLEVBQUEsRUFBSSxJQUFJcTVCLFFBQUEsQ0FBU3BpQixLQUFBLEVBQU96QixJQUFJLENBQUM7RUFDN0Q7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBLElBQUlBLEtBQUEsRUFBTztJQUFFLE9BQU8sS0FBS1YsSUFBQSxDQUFLVSxJQUFBO0VBQU07RUFBQTtBQUFBO0FBQUE7RUFJcEMsSUFBSW1CLE9BQUEsRUFBUztJQUFFLE9BQU8sS0FBSzdCLElBQUEsWUFBZ0Jra0IsVUFBQTtFQUFZO0VBQUE7QUFBQTtBQUFBO0VBSXZELElBQUlybkIsT0FBQSxFQUFTO0lBQUUsT0FBTyxLQUFLbUQsSUFBQSxZQUFnQnlqQixVQUFBO0VBQVk7QUFDM0Q7QUFDQSxJQUFNaGYsSUFBQSxHQUFPLEVBQUM7RUFBR2tmLE1BQUEsR0FBUyxDQUFDO0FBTzNCLElBQU1oNkIsYUFBQSxHQUFOLE1BQU1nN0IsY0FBQSxDQUFjO0VBQUE7QUFBQTtBQUFBO0VBSWhCbG9CLFlBQVltb0IsS0FBQSxFQUFPbG9CLFFBQUEsRUFBVTtJQUN6QixLQUFLa29CLEtBQUEsR0FBUUEsS0FBQSxDQUFNcDVCLE1BQUEsR0FBU281QixLQUFBLEdBQVFuZ0IsSUFBQTtJQUNwQyxLQUFLL0gsUUFBQSxHQUFXQSxRQUFBLENBQVNsUixNQUFBLEdBQVNrUixRQUFBLEdBQVcrSCxJQUFBO0VBQ2pEO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU1BLE9BQU83QyxPQUFPdlQsSUFBQSxFQUFLdzJCLFdBQUEsRUFBYTtJQUM1QixPQUFPQSxXQUFBLENBQVlyNUIsTUFBQSxHQUFTczVCLFNBQUEsQ0FBVUQsV0FBQSxFQUFheDJCLElBQUEsRUFBSyxHQUFHczFCLE1BQU0sSUFBSW5nQixLQUFBO0VBQ3pFO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVNBN0ssS0FBS29DLEtBQUEsRUFBT0MsR0FBQSxFQUFLK3BCLFNBQUEsRUFBVztJQUN4QixJQUFJbHBCLE1BQUEsR0FBUyxFQUFDO0lBQ2QsS0FBS21wQixTQUFBLENBQVVqcUIsS0FBQSxJQUFTLE9BQU8sSUFBSUEsS0FBQSxFQUFPQyxHQUFBLElBQU8sT0FBTyxNQUFNQSxHQUFBLEVBQUthLE1BQUEsRUFBUSxHQUFHa3BCLFNBQVM7SUFDdkYsT0FBT2xwQixNQUFBO0VBQ1g7RUFDQW1wQixVQUFVanFCLEtBQUEsRUFBT0MsR0FBQSxFQUFLYSxNQUFBLEVBQVFoUCxNQUFBLEVBQVFrNEIsU0FBQSxFQUFXO0lBQzdDLFNBQVNsd0IsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLK3ZCLEtBQUEsQ0FBTXA1QixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDeEMsSUFBSSt1QixJQUFBLEdBQU8sS0FBS2dCLEtBQUEsQ0FBTS92QixDQUFDO01BQ3ZCLElBQUkrdUIsSUFBQSxDQUFLMzRCLElBQUEsSUFBUStQLEdBQUEsSUFBTzRvQixJQUFBLENBQUsxNEIsRUFBQSxJQUFNNlAsS0FBQSxLQUFVLENBQUNncUIsU0FBQSxJQUFhQSxTQUFBLENBQVVuQixJQUFBLENBQUtsakIsSUFBSSxJQUMxRTdFLE1BQUEsQ0FBT3JILElBQUEsQ0FBS292QixJQUFBLENBQUtyaEIsSUFBQSxDQUFLcWhCLElBQUEsQ0FBSzM0QixJQUFBLEdBQU80QixNQUFBLEVBQVErMkIsSUFBQSxDQUFLMTRCLEVBQUEsR0FBSzJCLE1BQU0sQ0FBQztJQUNuRTtJQUNBLFNBQVNnSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUs2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUssR0FBRztNQUM5QyxJQUFJLEtBQUs2SCxRQUFBLENBQVM3SCxDQUFDLElBQUltRyxHQUFBLElBQU8sS0FBSzBCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxDQUFDLElBQUlrRyxLQUFBLEVBQU87UUFDeEQsSUFBSWtxQixRQUFBLEdBQVcsS0FBS3ZvQixRQUFBLENBQVM3SCxDQUFDLElBQUk7UUFDbEMsS0FBSzZILFFBQUEsQ0FBUzdILENBQUEsR0FBSSxDQUFDLEVBQUVtd0IsU0FBQSxDQUFVanFCLEtBQUEsR0FBUWtxQixRQUFBLEVBQVVqcUIsR0FBQSxHQUFNaXFCLFFBQUEsRUFBVXBwQixNQUFBLEVBQVFoUCxNQUFBLEdBQVNvNEIsUUFBQSxFQUFVRixTQUFTO01BQ3pHO0lBQ0o7RUFDSjtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0E3TSxJQUFJc0ssT0FBQSxFQUFTbjBCLElBQUEsRUFBSzYyQixPQUFBLEVBQVM7SUFDdkIsSUFBSSxRQUFRMWhCLEtBQUEsSUFBU2dmLE9BQUEsQ0FBUUssSUFBQSxDQUFLcjNCLE1BQUEsSUFBVSxHQUN4QyxPQUFPO0lBQ1gsT0FBTyxLQUFLMjVCLFFBQUEsQ0FBUzNDLE9BQUEsRUFBU24wQixJQUFBLEVBQUssR0FBRyxHQUFHNjJCLE9BQUEsSUFBV3ZCLE1BQU07RUFDOUQ7RUFBQTtBQUFBO0FBQUE7RUFJQXdCLFNBQVMzQyxPQUFBLEVBQVNqNEIsSUFBQSxFQUFNc0MsTUFBQSxFQUFRZzNCLFNBQUEsRUFBV3FCLE9BQUEsRUFBUztJQUNoRCxJQUFJRSxRQUFBO0lBQ0osU0FBU3Z3QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUsrdkIsS0FBQSxDQUFNcDVCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUN4QyxJQUFJd3dCLE1BQUEsR0FBUyxLQUFLVCxLQUFBLENBQU0vdkIsQ0FBQyxFQUFFcWpCLEdBQUEsQ0FBSXNLLE9BQUEsRUFBUzMxQixNQUFBLEVBQVFnM0IsU0FBUztNQUN6RCxJQUFJd0IsTUFBQSxJQUFVQSxNQUFBLENBQU9ybEIsSUFBQSxDQUFLZ2tCLEtBQUEsQ0FBTXo1QixJQUFBLEVBQU04NkIsTUFBTSxHQUN4QyxDQUFDRCxRQUFBLEtBQWFBLFFBQUEsR0FBVyxFQUFDLEdBQUk1d0IsSUFBQSxDQUFLNndCLE1BQU0sV0FDcENILE9BQUEsQ0FBUUksUUFBQSxFQUNiSixPQUFBLENBQVFJLFFBQUEsQ0FBUyxLQUFLVixLQUFBLENBQU0vdkIsQ0FBQyxFQUFFNkwsSUFBSTtJQUMzQztJQUNBLElBQUksS0FBS2hFLFFBQUEsQ0FBU2xSLE1BQUEsRUFDZCxPQUFPKzVCLFdBQUEsQ0FBWSxLQUFLN29CLFFBQUEsRUFBVTBvQixRQUFBLElBQVksRUFBQyxFQUFHNUMsT0FBQSxFQUFTajRCLElBQUEsRUFBTXNDLE1BQUEsRUFBUWczQixTQUFBLEVBQVdxQixPQUFPLE9BRTNGLE9BQU9FLFFBQUEsR0FBVyxJQUFJVCxjQUFBLENBQWNTLFFBQUEsQ0FBUy9ZLElBQUEsQ0FBS21aLEtBQUssR0FBRy9nQixJQUFJLElBQUlqQixLQUFBO0VBQzFFO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBT0F4QyxJQUFJM1MsSUFBQSxFQUFLdzJCLFdBQUEsRUFBYTtJQUNsQixJQUFJLENBQUNBLFdBQUEsQ0FBWXI1QixNQUFBLEVBQ2IsT0FBTztJQUNYLElBQUksUUFBUWdZLEtBQUEsRUFDUixPQUFPbWhCLGNBQUEsQ0FBYy9pQixNQUFBLENBQU92VCxJQUFBLEVBQUt3MkIsV0FBVztJQUNoRCxPQUFPLEtBQUtZLFFBQUEsQ0FBU3AzQixJQUFBLEVBQUt3MkIsV0FBQSxFQUFhLENBQUM7RUFDNUM7RUFDQVksU0FBU3AzQixJQUFBLEVBQUt3MkIsV0FBQSxFQUFhaDRCLE1BQUEsRUFBUTtJQUMvQixJQUFJNlAsUUFBQTtNQUFVNUcsVUFBQSxHQUFhO0lBQzNCekgsSUFBQSxDQUFJb21CLE9BQUEsQ0FBUSxDQUFDaVIsU0FBQSxFQUFXQyxXQUFBLEtBQWdCO01BQ3BDLElBQUlDLFVBQUEsR0FBYUQsV0FBQSxHQUFjOTRCLE1BQUE7UUFBUWdkLEtBQUE7TUFDdkMsSUFBSSxFQUFFQSxLQUFBLEdBQVFnYyxnQkFBQSxDQUFpQmhCLFdBQUEsRUFBYWEsU0FBQSxFQUFXRSxVQUFVLElBQzdEO01BQ0osSUFBSSxDQUFDbHBCLFFBQUEsRUFDREEsUUFBQSxHQUFXLEtBQUtBLFFBQUEsQ0FBUzRGLEtBQUEsQ0FBTTtNQUNuQyxPQUFPeE0sVUFBQSxHQUFhNEcsUUFBQSxDQUFTbFIsTUFBQSxJQUFVa1IsUUFBQSxDQUFTNUcsVUFBVSxJQUFJNnZCLFdBQUEsRUFDMUQ3dkIsVUFBQSxJQUFjO01BQ2xCLElBQUk0RyxRQUFBLENBQVM1RyxVQUFVLEtBQUs2dkIsV0FBQSxFQUN4QmpwQixRQUFBLENBQVM1RyxVQUFBLEdBQWEsQ0FBQyxJQUFJNEcsUUFBQSxDQUFTNUcsVUFBQSxHQUFhLENBQUMsRUFBRTJ2QixRQUFBLENBQVNDLFNBQUEsRUFBVzdiLEtBQUEsRUFBTytiLFVBQUEsR0FBYSxDQUFDLE9BRTdGbHBCLFFBQUEsQ0FBUzhNLE1BQUEsQ0FBTzFULFVBQUEsRUFBWSxHQUFHNnZCLFdBQUEsRUFBYUEsV0FBQSxHQUFjRCxTQUFBLENBQVV2NUIsUUFBQSxFQUFVMjRCLFNBQUEsQ0FBVWpiLEtBQUEsRUFBTzZiLFNBQUEsRUFBV0UsVUFBQSxHQUFhLEdBQUdqQyxNQUFNLENBQUM7TUFDckk3dEIsVUFBQSxJQUFjO0lBQ2xCLENBQUM7SUFDRCxJQUFJOHVCLEtBQUEsR0FBUWtCLFNBQUEsQ0FBVWh3QixVQUFBLEdBQWFpd0IsWUFBQSxDQUFhbEIsV0FBVyxJQUFJQSxXQUFBLEVBQWEsQ0FBQ2g0QixNQUFNO0lBQ25GLFNBQVNnSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJK3ZCLEtBQUEsQ0FBTXA1QixNQUFBLEVBQVFxSixDQUFBLElBQzlCLElBQUksQ0FBQyt2QixLQUFBLENBQU0vdkIsQ0FBQyxFQUFFbUwsSUFBQSxDQUFLZ2tCLEtBQUEsQ0FBTTMxQixJQUFBLEVBQUt1MkIsS0FBQSxDQUFNL3ZCLENBQUMsQ0FBQyxHQUNsQyt2QixLQUFBLENBQU1wYixNQUFBLENBQU8zVSxDQUFBLElBQUssQ0FBQztJQUMzQixPQUFPLElBQUk4dkIsY0FBQSxDQUFjQyxLQUFBLENBQU1wNUIsTUFBQSxHQUFTLEtBQUtvNUIsS0FBQSxDQUFNb0IsTUFBQSxDQUFPcEIsS0FBSyxFQUFFdlksSUFBQSxDQUFLbVosS0FBSyxJQUFJLEtBQUtaLEtBQUEsRUFBT2xvQixRQUFBLElBQVksS0FBS0EsUUFBUTtFQUN4SDtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0FnSyxPQUFPbWUsV0FBQSxFQUFhO0lBQ2hCLElBQUlBLFdBQUEsQ0FBWXI1QixNQUFBLElBQVUsS0FBSyxRQUFRZ1ksS0FBQSxFQUNuQyxPQUFPO0lBQ1gsT0FBTyxLQUFLeWlCLFdBQUEsQ0FBWXBCLFdBQUEsRUFBYSxDQUFDO0VBQzFDO0VBQ0FvQixZQUFZcEIsV0FBQSxFQUFhaDRCLE1BQUEsRUFBUTtJQUM3QixJQUFJNlAsUUFBQSxHQUFXLEtBQUtBLFFBQUE7TUFBVWtvQixLQUFBLEdBQVEsS0FBS0EsS0FBQTtJQUMzQyxTQUFTL3ZCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUssR0FBRztNQUN6QyxJQUFJZ1YsS0FBQTtNQUNKLElBQUk1ZSxJQUFBLEdBQU95UixRQUFBLENBQVM3SCxDQUFDLElBQUloSSxNQUFBO1FBQVEzQixFQUFBLEdBQUt3UixRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxJQUFJaEksTUFBQTtNQUN4RCxTQUFTMkssQ0FBQSxHQUFJLEdBQUdvc0IsSUFBQSxFQUFNcHNCLENBQUEsR0FBSXF0QixXQUFBLENBQVlyNUIsTUFBQSxFQUFRZ00sQ0FBQSxJQUMxQyxJQUFJb3NCLElBQUEsR0FBT2lCLFdBQUEsQ0FBWXJ0QixDQUFDLEdBQUc7UUFDdkIsSUFBSW9zQixJQUFBLENBQUszNEIsSUFBQSxHQUFPQSxJQUFBLElBQVEyNEIsSUFBQSxDQUFLMTRCLEVBQUEsR0FBS0EsRUFBQSxFQUFJO1VBQ2xDMjVCLFdBQUEsQ0FBWXJ0QixDQUFDLElBQUk7VUFDakIsQ0FBQ3FTLEtBQUEsS0FBVUEsS0FBQSxHQUFRLEVBQUMsR0FBSXJWLElBQUEsQ0FBS292QixJQUFJO1FBQ3JDO01BQ0o7TUFDSixJQUFJLENBQUMvWixLQUFBLEVBQ0Q7TUFDSixJQUFJbk4sUUFBQSxJQUFZLEtBQUtBLFFBQUEsRUFDakJBLFFBQUEsR0FBVyxLQUFLQSxRQUFBLENBQVM0RixLQUFBLENBQU07TUFDbkMsSUFBSTRqQixPQUFBLEdBQVV4cEIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsRUFBRW94QixXQUFBLENBQVlwYyxLQUFBLEVBQU81ZSxJQUFBLEdBQU8sQ0FBQztNQUN6RCxJQUFJaTdCLE9BQUEsSUFBVzFpQixLQUFBLEVBQU87UUFDbEI5RyxRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxJQUFJcXhCLE9BQUE7TUFDdEIsT0FDSztRQUNEeHBCLFFBQUEsQ0FBUzhNLE1BQUEsQ0FBTzNVLENBQUEsRUFBRyxDQUFDO1FBQ3BCQSxDQUFBLElBQUs7TUFDVDtJQUNKO0lBQ0EsSUFBSSt2QixLQUFBLENBQU1wNUIsTUFBQTtNQUNOLFNBQVNxSixDQUFBLEdBQUksR0FBRyt1QixJQUFBLEVBQU0vdUIsQ0FBQSxHQUFJZ3dCLFdBQUEsQ0FBWXI1QixNQUFBLEVBQVFxSixDQUFBLElBQzFDLElBQUkrdUIsSUFBQSxHQUFPaUIsV0FBQSxDQUFZaHdCLENBQUMsR0FBRztRQUN2QixTQUFTMkMsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSW90QixLQUFBLENBQU1wNUIsTUFBQSxFQUFRZ00sQ0FBQSxJQUM5QixJQUFJb3RCLEtBQUEsQ0FBTXB0QixDQUFDLEVBQUV5SixFQUFBLENBQUcyaUIsSUFBQSxFQUFNLzJCLE1BQU0sR0FBRztVQUMzQixJQUFJKzNCLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEVBQ2RBLEtBQUEsR0FBUSxLQUFLQSxLQUFBLENBQU10aUIsS0FBQSxDQUFNO1VBQzdCc2lCLEtBQUEsQ0FBTXBiLE1BQUEsQ0FBT2hTLENBQUEsSUFBSyxDQUFDO1FBQ3ZCO01BQ1I7SUFBQTtJQUNSLElBQUlrRixRQUFBLElBQVksS0FBS0EsUUFBQSxJQUFZa29CLEtBQUEsSUFBUyxLQUFLQSxLQUFBLEVBQzNDLE9BQU87SUFDWCxPQUFPQSxLQUFBLENBQU1wNUIsTUFBQSxJQUFVa1IsUUFBQSxDQUFTbFIsTUFBQSxHQUFTLElBQUltNUIsY0FBQSxDQUFjQyxLQUFBLEVBQU9sb0IsUUFBUSxJQUFJOEcsS0FBQTtFQUNsRjtFQUNBd0ksU0FBU25mLE1BQUEsRUFBUXRDLElBQUEsRUFBTTtJQUNuQixJQUFJLFFBQVFpWixLQUFBLEVBQ1IsT0FBTztJQUNYLElBQUlqWixJQUFBLENBQUttWixNQUFBLEVBQ0wsT0FBT2loQixjQUFBLENBQWNuaEIsS0FBQTtJQUN6QixJQUFJaFgsS0FBQSxFQUFPbzRCLEtBQUE7SUFDWCxTQUFTL3ZCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUMzQyxJQUFJLEtBQUs2SCxRQUFBLENBQVM3SCxDQUFDLEtBQUtoSSxNQUFBLEVBQVE7TUFDNUIsSUFBSSxLQUFLNlAsUUFBQSxDQUFTN0gsQ0FBQyxLQUFLaEksTUFBQSxFQUNwQkwsS0FBQSxHQUFRLEtBQUtrUSxRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQztNQUMvQjtJQUNKO0lBQ0osSUFBSWtHLEtBQUEsR0FBUWxPLE1BQUEsR0FBUztNQUFHbU8sR0FBQSxHQUFNRCxLQUFBLEdBQVF4USxJQUFBLENBQUswTixPQUFBLENBQVFDLElBQUE7SUFDbkQsU0FBU3JELENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSyt2QixLQUFBLENBQU1wNUIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO01BQ3hDLElBQUlzeEIsR0FBQSxHQUFNLEtBQUt2QixLQUFBLENBQU0vdkIsQ0FBQztNQUN0QixJQUFJc3hCLEdBQUEsQ0FBSWw3QixJQUFBLEdBQU8rUCxHQUFBLElBQU9tckIsR0FBQSxDQUFJajdCLEVBQUEsR0FBSzZQLEtBQUEsSUFBVW9yQixHQUFBLENBQUlubUIsSUFBQSxZQUFnQmtrQixVQUFBLEVBQWE7UUFDdEUsSUFBSWo1QixJQUFBLEdBQU84RCxJQUFBLENBQUsrRSxHQUFBLENBQUlpSCxLQUFBLEVBQU9vckIsR0FBQSxDQUFJbDdCLElBQUksSUFBSThQLEtBQUE7VUFBTzdQLEVBQUEsR0FBSzZELElBQUEsQ0FBS0MsR0FBQSxDQUFJZ00sR0FBQSxFQUFLbXJCLEdBQUEsQ0FBSWo3QixFQUFFLElBQUk2UCxLQUFBO1FBQzNFLElBQUk5UCxJQUFBLEdBQU9DLEVBQUEsRUFDUCxDQUFDMDVCLEtBQUEsS0FBVUEsS0FBQSxHQUFRLEVBQUMsR0FBSXB3QixJQUFBLENBQUsyeEIsR0FBQSxDQUFJNWpCLElBQUEsQ0FBS3RYLElBQUEsRUFBTUMsRUFBRSxDQUFDO01BQ3ZEO0lBQ0o7SUFDQSxJQUFJMDVCLEtBQUEsRUFBTztNQUNQLElBQUl3QixRQUFBLEdBQVcsSUFBSXpCLGNBQUEsQ0FBY0MsS0FBQSxDQUFNdlksSUFBQSxDQUFLbVosS0FBSyxHQUFHL2dCLElBQUk7TUFDeEQsT0FBT2pZLEtBQUEsR0FBUSxJQUFJNjVCLGVBQUEsQ0FBZ0IsQ0FBQ0QsUUFBQSxFQUFVNTVCLEtBQUssQ0FBQyxJQUFJNDVCLFFBQUE7SUFDNUQ7SUFDQSxPQUFPNTVCLEtBQUEsSUFBU2dYLEtBQUE7RUFDcEI7RUFBQTtBQUFBO0FBQUE7RUFJQXZDLEdBQUdnakIsS0FBQSxFQUFPO0lBQ04sSUFBSSxRQUFRQSxLQUFBLEVBQ1IsT0FBTztJQUNYLElBQUksRUFBRUEsS0FBQSxZQUFpQlUsY0FBQSxLQUNuQixLQUFLQyxLQUFBLENBQU1wNUIsTUFBQSxJQUFVeTRCLEtBQUEsQ0FBTVcsS0FBQSxDQUFNcDVCLE1BQUEsSUFDakMsS0FBS2tSLFFBQUEsQ0FBU2xSLE1BQUEsSUFBVXk0QixLQUFBLENBQU12bkIsUUFBQSxDQUFTbFIsTUFBQSxFQUN2QyxPQUFPO0lBQ1gsU0FBU3FKLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSyt2QixLQUFBLENBQU1wNUIsTUFBQSxFQUFRcUosQ0FBQSxJQUNuQyxJQUFJLENBQUMsS0FBSyt2QixLQUFBLENBQU0vdkIsQ0FBQyxFQUFFb00sRUFBQSxDQUFHZ2pCLEtBQUEsQ0FBTVcsS0FBQSxDQUFNL3ZCLENBQUMsQ0FBQyxHQUNoQyxPQUFPO0lBQ2YsU0FBU0EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLLEdBQzNDLElBQUksS0FBSzZILFFBQUEsQ0FBUzdILENBQUMsS0FBS292QixLQUFBLENBQU12bkIsUUFBQSxDQUFTN0gsQ0FBQyxLQUNwQyxLQUFLNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsS0FBS292QixLQUFBLENBQU12bkIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsS0FDNUMsQ0FBQyxLQUFLNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsRUFBRW9NLEVBQUEsQ0FBR2dqQixLQUFBLENBQU12bkIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsQ0FBQyxHQUM5QyxPQUFPO0lBQ2YsT0FBTztFQUNYO0VBQUE7QUFBQTtBQUFBO0VBSUFrWCxPQUFPeGhCLElBQUEsRUFBTTtJQUNULE9BQU8rN0IsYUFBQSxDQUFjLEtBQUtDLFdBQUEsQ0FBWWg4QixJQUFJLENBQUM7RUFDL0M7RUFBQTtBQUFBO0FBQUE7RUFJQWc4QixZQUFZaDhCLElBQUEsRUFBTTtJQUNkLElBQUksUUFBUWlaLEtBQUEsRUFDUixPQUFPaUIsSUFBQTtJQUNYLElBQUlsYSxJQUFBLENBQUtpUCxhQUFBLElBQWlCLENBQUMsS0FBS29yQixLQUFBLENBQU1qRyxJQUFBLENBQUt1RixVQUFBLENBQVdJLEVBQUUsR0FDcEQsT0FBTyxLQUFLTSxLQUFBO0lBQ2hCLElBQUkvb0IsTUFBQSxHQUFTLEVBQUM7SUFDZCxTQUFTaEgsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLK3ZCLEtBQUEsQ0FBTXA1QixNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDeEMsSUFBSSxFQUFFLEtBQUsrdkIsS0FBQSxDQUFNL3ZCLENBQUMsRUFBRW1MLElBQUEsWUFBZ0Jra0IsVUFBQSxHQUNoQ3JvQixNQUFBLENBQU9ySCxJQUFBLENBQUssS0FBS293QixLQUFBLENBQU0vdkIsQ0FBQyxDQUFDO0lBQ2pDO0lBQ0EsT0FBT2dILE1BQUE7RUFDWDtFQUNBMnFCLFdBQVczc0IsQ0FBQSxFQUFHO0lBQUVBLENBQUEsQ0FBRSxJQUFJO0VBQUc7QUFDN0I7QUFJQWxRLGFBQUEsQ0FBYzZaLEtBQUEsR0FBUSxJQUFJN1osYUFBQSxDQUFjLEVBQUMsRUFBRyxFQUFFO0FBSTlDQSxhQUFBLENBQWMyOEIsYUFBQSxHQUFnQkEsYUFBQTtBQUM5QixJQUFNOWlCLEtBQUEsR0FBUTdaLGFBQUEsQ0FBYzZaLEtBQUE7QUFJNUIsSUFBTTZpQixlQUFBLEdBQU4sTUFBTUksZ0JBQUEsQ0FBZ0I7RUFDbEJocUIsWUFBWWlxQixPQUFBLEVBQVM7SUFDakIsS0FBS0EsT0FBQSxHQUFVQSxPQUFBO0VBQ25CO0VBQ0F4TyxJQUFJc0ssT0FBQSxFQUFTbjBCLElBQUEsRUFBSztJQUNkLE1BQU1zNEIsV0FBQSxHQUFjLEtBQUtELE9BQUEsQ0FBUXhPLEdBQUEsQ0FBSTBPLE1BQUEsSUFBVUEsTUFBQSxDQUFPMU8sR0FBQSxDQUFJc0ssT0FBQSxFQUFTbjBCLElBQUEsRUFBS3MxQixNQUFNLENBQUM7SUFDL0UsT0FBTzhDLGdCQUFBLENBQWdCeDdCLElBQUEsQ0FBSzA3QixXQUFXO0VBQzNDO0VBQ0EzYSxTQUFTbmYsTUFBQSxFQUFRTCxLQUFBLEVBQU87SUFDcEIsSUFBSUEsS0FBQSxDQUFNa1gsTUFBQSxFQUNOLE9BQU8vWixhQUFBLENBQWM2WixLQUFBO0lBQ3pCLElBQUlxRyxLQUFBLEdBQVEsRUFBQztJQUNiLFNBQVNoVixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUs2eEIsT0FBQSxDQUFRbDdCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUMxQyxJQUFJZ0gsTUFBQSxHQUFTLEtBQUs2cUIsT0FBQSxDQUFRN3hCLENBQUMsRUFBRW1YLFFBQUEsQ0FBU25mLE1BQUEsRUFBUUwsS0FBSztNQUNuRCxJQUFJcVAsTUFBQSxJQUFVMkgsS0FBQSxFQUNWO01BQ0osSUFBSTNILE1BQUEsWUFBa0I0cUIsZ0JBQUEsRUFDbEI1YyxLQUFBLEdBQVFBLEtBQUEsQ0FBTW1jLE1BQUEsQ0FBT25xQixNQUFBLENBQU82cUIsT0FBTyxPQUVuQzdjLEtBQUEsQ0FBTXJWLElBQUEsQ0FBS3FILE1BQU07SUFDekI7SUFDQSxPQUFPNHFCLGdCQUFBLENBQWdCeDdCLElBQUEsQ0FBSzRlLEtBQUs7RUFDckM7RUFDQTVJLEdBQUdnakIsS0FBQSxFQUFPO0lBQ04sSUFBSSxFQUFFQSxLQUFBLFlBQWlCd0MsZ0JBQUEsS0FDbkJ4QyxLQUFBLENBQU15QyxPQUFBLENBQVFsN0IsTUFBQSxJQUFVLEtBQUtrN0IsT0FBQSxDQUFRbDdCLE1BQUEsRUFDckMsT0FBTztJQUNYLFNBQVNxSixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUs2eEIsT0FBQSxDQUFRbDdCLE1BQUEsRUFBUXFKLENBQUEsSUFDckMsSUFBSSxDQUFDLEtBQUs2eEIsT0FBQSxDQUFRN3hCLENBQUMsRUFBRW9NLEVBQUEsQ0FBR2dqQixLQUFBLENBQU15QyxPQUFBLENBQVE3eEIsQ0FBQyxDQUFDLEdBQ3BDLE9BQU87SUFDZixPQUFPO0VBQ1g7RUFDQWtYLE9BQU94aEIsSUFBQSxFQUFNO0lBQ1QsSUFBSXNSLE1BQUE7TUFBUWdyQixNQUFBLEdBQVM7SUFDckIsU0FBU2h5QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUs2eEIsT0FBQSxDQUFRbDdCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUMxQyxJQUFJa1gsTUFBQSxHQUFTLEtBQUsyYSxPQUFBLENBQVE3eEIsQ0FBQyxFQUFFMHhCLFdBQUEsQ0FBWWg4QixJQUFJO01BQzdDLElBQUksQ0FBQ3doQixNQUFBLENBQU92Z0IsTUFBQSxFQUNSO01BQ0osSUFBSSxDQUFDcVEsTUFBQSxFQUFRO1FBQ1RBLE1BQUEsR0FBU2tRLE1BQUE7TUFDYixPQUNLO1FBQ0QsSUFBSThhLE1BQUEsRUFBUTtVQUNSaHJCLE1BQUEsR0FBU0EsTUFBQSxDQUFPeUcsS0FBQSxDQUFNO1VBQ3RCdWtCLE1BQUEsR0FBUztRQUNiO1FBQ0EsU0FBU3J2QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdVUsTUFBQSxDQUFPdmdCLE1BQUEsRUFBUWdNLENBQUEsSUFDL0JxRSxNQUFBLENBQU9ySCxJQUFBLENBQUt1WCxNQUFBLENBQU92VSxDQUFDLENBQUM7TUFDN0I7SUFDSjtJQUNBLE9BQU9xRSxNQUFBLEdBQVN5cUIsYUFBQSxDQUFjTyxNQUFBLEdBQVNockIsTUFBQSxHQUFTQSxNQUFBLENBQU93USxJQUFBLENBQUttWixLQUFLLENBQUMsSUFBSS9nQixJQUFBO0VBQzFFO0VBQUE7RUFBQTtFQUdBLE9BQU94WixLQUFLeTdCLE9BQUEsRUFBUztJQUNqQixRQUFRQSxPQUFBLENBQVFsN0IsTUFBQTtNQUNaLEtBQUs7UUFBRyxPQUFPZ1ksS0FBQTtNQUNmLEtBQUs7UUFBRyxPQUFPa2pCLE9BQUEsQ0FBUSxDQUFDO01BQ3hCO1FBQVMsT0FBTyxJQUFJRCxnQkFBQSxDQUFnQkMsT0FBQSxDQUFRSSxLQUFBLENBQU05ZCxDQUFBLElBQUtBLENBQUEsWUFBYXJmLGFBQWEsSUFBSSs4QixPQUFBLEdBQ2pGQSxPQUFBLENBQVFLLE1BQUEsQ0FBTyxDQUFDQyxDQUFBLEVBQUdoZSxDQUFBLEtBQU1nZSxDQUFBLENBQUVoQixNQUFBLENBQU9oZCxDQUFBLFlBQWFyZixhQUFBLEdBQWdCcWYsQ0FBQSxHQUFJQSxDQUFBLENBQUUwZCxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQzFGO0VBQ0o7RUFDQUYsV0FBVzNzQixDQUFBLEVBQUc7SUFDVixTQUFTaEYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLNnhCLE9BQUEsQ0FBUWw3QixNQUFBLEVBQVFxSixDQUFBLElBQ3JDLEtBQUs2eEIsT0FBQSxDQUFRN3hCLENBQUMsRUFBRTJ4QixVQUFBLENBQVczc0IsQ0FBQztFQUNwQztBQUNKO0FBQ0EsU0FBUzByQixZQUFZMEIsV0FBQSxFQUFhN0IsUUFBQSxFQUFVNUMsT0FBQSxFQUFTajRCLElBQUEsRUFBTXNDLE1BQUEsRUFBUWczQixTQUFBLEVBQVdxQixPQUFBLEVBQVM7RUFDbkYsSUFBSXhvQixRQUFBLEdBQVd1cUIsV0FBQSxDQUFZM2tCLEtBQUEsQ0FBTTtFQUdqQyxTQUFTek4sQ0FBQSxHQUFJLEdBQUcrd0IsVUFBQSxHQUFhL0IsU0FBQSxFQUFXaHZCLENBQUEsR0FBSTJ0QixPQUFBLENBQVFLLElBQUEsQ0FBS3IzQixNQUFBLEVBQVFxSixDQUFBLElBQUs7SUFDbEUsSUFBSXF5QixLQUFBLEdBQVE7SUFDWjFFLE9BQUEsQ0FBUUssSUFBQSxDQUFLaHVCLENBQUMsRUFBRTRmLE9BQUEsQ0FBUSxDQUFDMFMsUUFBQSxFQUFVQyxNQUFBLEVBQVFDLFFBQUEsRUFBVUMsTUFBQSxLQUFXO01BQzVELElBQUlDLEtBQUEsR0FBU0QsTUFBQSxHQUFTRCxRQUFBLElBQWFELE1BQUEsR0FBU0QsUUFBQTtNQUM1QyxTQUFTaHBCLEVBQUEsR0FBSSxHQUFHQSxFQUFBLEdBQUl6QixRQUFBLENBQVNsUixNQUFBLEVBQVEyUyxFQUFBLElBQUssR0FBRztRQUN6QyxJQUFJbkQsR0FBQSxHQUFNMEIsUUFBQSxDQUFTeUIsRUFBQSxHQUFJLENBQUM7UUFDeEIsSUFBSW5ELEdBQUEsR0FBTSxLQUFLbXNCLFFBQUEsR0FBV25zQixHQUFBLEdBQU00cUIsVUFBQSxHQUFhc0IsS0FBQSxFQUN6QztRQUNKLElBQUluc0IsS0FBQSxHQUFRMkIsUUFBQSxDQUFTeUIsRUFBQyxJQUFJeW5CLFVBQUEsR0FBYXNCLEtBQUE7UUFDdkMsSUFBSUUsTUFBQSxJQUFVcnNCLEtBQUEsRUFBTztVQUNqQjJCLFFBQUEsQ0FBU3lCLEVBQUEsR0FBSSxDQUFDLElBQUlncEIsUUFBQSxJQUFZcHNCLEtBQUEsR0FBUSxLQUFLO1FBQy9DLFdBQ1Nvc0IsUUFBQSxJQUFZdkIsVUFBQSxJQUFjMkIsS0FBQSxFQUFPO1VBQ3RDN3FCLFFBQUEsQ0FBU3lCLEVBQUMsS0FBS29wQixLQUFBO1VBQ2Y3cUIsUUFBQSxDQUFTeUIsRUFBQSxHQUFJLENBQUMsS0FBS29wQixLQUFBO1FBQ3ZCO01BQ0o7TUFDQUwsS0FBQSxJQUFTSyxLQUFBO0lBQ2IsQ0FBQztJQUNEM0IsVUFBQSxHQUFhcEQsT0FBQSxDQUFRSyxJQUFBLENBQUtodUIsQ0FBQyxFQUFFcWpCLEdBQUEsQ0FBSTBOLFVBQUEsRUFBWSxFQUFFO0VBQ25EO0VBR0EsSUFBSTRCLFdBQUEsR0FBYztFQUNsQixTQUFTM3lCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk2SCxRQUFBLENBQVNsUixNQUFBLEVBQVFxSixDQUFBLElBQUssR0FDdEMsSUFBSTZILFFBQUEsQ0FBUzdILENBQUEsR0FBSSxDQUFDLElBQUksR0FBRztJQUNyQixJQUFJNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsS0FBSyxJQUFJO01BQ3ZCMnlCLFdBQUEsR0FBYztNQUNkOXFCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxDQUFDLElBQUk7TUFDbEI7SUFDSjtJQUNBLElBQUk1SixJQUFBLEdBQU91M0IsT0FBQSxDQUFRdEssR0FBQSxDQUFJK08sV0FBQSxDQUFZcHlCLENBQUMsSUFBSWd2QixTQUFTO01BQUc0RCxTQUFBLEdBQVl4OEIsSUFBQSxHQUFPNEIsTUFBQTtJQUN2RSxJQUFJNDZCLFNBQUEsR0FBWSxLQUFLQSxTQUFBLElBQWFsOUIsSUFBQSxDQUFLME4sT0FBQSxDQUFRQyxJQUFBLEVBQU07TUFDakRzdkIsV0FBQSxHQUFjO01BQ2Q7SUFDSjtJQUVBLElBQUl0OEIsRUFBQSxHQUFLczNCLE9BQUEsQ0FBUXRLLEdBQUEsQ0FBSStPLFdBQUEsQ0FBWXB5QixDQUFBLEdBQUksQ0FBQyxJQUFJZ3ZCLFNBQUEsRUFBVyxFQUFFO01BQUc2RCxPQUFBLEdBQVV4OEIsRUFBQSxHQUFLMkIsTUFBQTtJQUN6RSxJQUFJO01BQUVyQyxLQUFBO01BQU9xQyxNQUFBLEVBQVE4NEI7SUFBWSxJQUFJcDdCLElBQUEsQ0FBSzBOLE9BQUEsQ0FBUXdzQixTQUFBLENBQVVnRCxTQUFTO0lBQ3JFLElBQUkvQixTQUFBLEdBQVluN0IsSUFBQSxDQUFLbzlCLFVBQUEsQ0FBV245QixLQUFLO0lBQ3JDLElBQUlrN0IsU0FBQSxJQUFhQyxXQUFBLElBQWU4QixTQUFBLElBQWE5QixXQUFBLEdBQWNELFNBQUEsQ0FBVXY1QixRQUFBLElBQVl1N0IsT0FBQSxFQUFTO01BQ3RGLElBQUlyQyxNQUFBLEdBQVMzb0IsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsRUFDdEJzd0IsUUFBQSxDQUFTM0MsT0FBQSxFQUFTa0QsU0FBQSxFQUFXejZCLElBQUEsR0FBTyxHQUFHZzhCLFdBQUEsQ0FBWXB5QixDQUFDLElBQUlndkIsU0FBQSxHQUFZLEdBQUdxQixPQUFPO01BQ25GLElBQUlHLE1BQUEsSUFBVTdoQixLQUFBLEVBQU87UUFDakI5RyxRQUFBLENBQVM3SCxDQUFDLElBQUk0eUIsU0FBQTtRQUNkL3FCLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxDQUFDLElBQUk2eUIsT0FBQTtRQUNsQmhyQixRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxJQUFJd3dCLE1BQUE7TUFDdEIsT0FDSztRQUNEM29CLFFBQUEsQ0FBUzdILENBQUEsR0FBSSxDQUFDLElBQUk7UUFDbEIyeUIsV0FBQSxHQUFjO01BQ2xCO0lBQ0osT0FDSztNQUNEQSxXQUFBLEdBQWM7SUFDbEI7RUFDSjtFQUVKLElBQUlBLFdBQUEsRUFBYTtJQUNiLElBQUkzQyxXQUFBLEdBQWMrQyxnQ0FBQSxDQUFpQ2xyQixRQUFBLEVBQVV1cUIsV0FBQSxFQUFhN0IsUUFBQSxFQUFVNUMsT0FBQSxFQUFTMzFCLE1BQUEsRUFBUWczQixTQUFBLEVBQVdxQixPQUFPO0lBQ3ZILElBQUkyQyxLQUFBLEdBQVEvQyxTQUFBLENBQVVELFdBQUEsRUFBYXQ2QixJQUFBLEVBQU0sR0FBRzI2QixPQUFPO0lBQ25ERSxRQUFBLEdBQVd5QyxLQUFBLENBQU1qRCxLQUFBO0lBQ2pCLFNBQVMvdkIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZILFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUN0QyxJQUFJNkgsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsSUFBSSxHQUFHO01BQ3JCNkgsUUFBQSxDQUFTOE0sTUFBQSxDQUFPM1UsQ0FBQSxFQUFHLENBQUM7TUFDcEJBLENBQUEsSUFBSztJQUNUO0lBQ0osU0FBU0EsQ0FBQSxHQUFJLEdBQUcyQyxDQUFBLEdBQUksR0FBRzNDLENBQUEsR0FBSWd6QixLQUFBLENBQU1uckIsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLLEdBQUc7TUFDdEQsSUFBSTVKLElBQUEsR0FBTzQ4QixLQUFBLENBQU1uckIsUUFBQSxDQUFTN0gsQ0FBQztNQUMzQixPQUFPMkMsQ0FBQSxHQUFJa0YsUUFBQSxDQUFTbFIsTUFBQSxJQUFVa1IsUUFBQSxDQUFTbEYsQ0FBQyxJQUFJdk0sSUFBQSxFQUN4Q3VNLENBQUEsSUFBSztNQUNUa0YsUUFBQSxDQUFTOE0sTUFBQSxDQUFPaFMsQ0FBQSxFQUFHLEdBQUdxd0IsS0FBQSxDQUFNbnJCLFFBQUEsQ0FBUzdILENBQUMsR0FBR2d6QixLQUFBLENBQU1uckIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsR0FBR2d6QixLQUFBLENBQU1uckIsUUFBQSxDQUFTN0gsQ0FBQSxHQUFJLENBQUMsQ0FBQztJQUN6RjtFQUNKO0VBQ0EsT0FBTyxJQUFJbEwsYUFBQSxDQUFjeTdCLFFBQUEsQ0FBUy9ZLElBQUEsQ0FBS21aLEtBQUssR0FBRzlvQixRQUFRO0FBQzNEO0FBQ0EsU0FBU29wQixVQUFVZ0MsS0FBQSxFQUFPajdCLE1BQUEsRUFBUTtFQUM5QixJQUFJLENBQUNBLE1BQUEsSUFBVSxDQUFDaTdCLEtBQUEsQ0FBTXQ4QixNQUFBLEVBQ2xCLE9BQU9zOEIsS0FBQTtFQUNYLElBQUlqc0IsTUFBQSxHQUFTLEVBQUM7RUFDZCxTQUFTaEgsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWl6QixLQUFBLENBQU10OEIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO0lBQ25DLElBQUkrdUIsSUFBQSxHQUFPa0UsS0FBQSxDQUFNanpCLENBQUM7SUFDbEJnSCxNQUFBLENBQU9ySCxJQUFBLENBQUssSUFBSTlLLFVBQUEsQ0FBV2s2QixJQUFBLENBQUszNEIsSUFBQSxHQUFPNEIsTUFBQSxFQUFRKzJCLElBQUEsQ0FBSzE0QixFQUFBLEdBQUsyQixNQUFBLEVBQVErMkIsSUFBQSxDQUFLNWpCLElBQUksQ0FBQztFQUMvRTtFQUNBLE9BQU9uRSxNQUFBO0FBQ1g7QUFDQSxTQUFTK3JCLGlDQUFpQ2xyQixRQUFBLEVBQVV1cUIsV0FBQSxFQUFhcEMsV0FBQSxFQUFhckMsT0FBQSxFQUFTMzFCLE1BQUEsRUFBUWczQixTQUFBLEVBQVdxQixPQUFBLEVBQVM7RUFFL0csU0FBUzZDLE9BQU9yYyxHQUFBLEVBQUtzYyxVQUFBLEVBQVc7SUFDNUIsU0FBU256QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNlcsR0FBQSxDQUFJa1osS0FBQSxDQUFNcDVCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztNQUN2QyxJQUFJd3dCLE1BQUEsR0FBUzNaLEdBQUEsQ0FBSWtaLEtBQUEsQ0FBTS92QixDQUFDLEVBQUVxakIsR0FBQSxDQUFJc0ssT0FBQSxFQUFTMzFCLE1BQUEsRUFBUW03QixVQUFTO01BQ3hELElBQUkzQyxNQUFBLEVBQ0FSLFdBQUEsQ0FBWXJ3QixJQUFBLENBQUs2d0IsTUFBTSxXQUNsQkgsT0FBQSxDQUFRSSxRQUFBLEVBQ2JKLE9BQUEsQ0FBUUksUUFBQSxDQUFTNVosR0FBQSxDQUFJa1osS0FBQSxDQUFNL3ZCLENBQUMsRUFBRTZMLElBQUk7SUFDMUM7SUFDQSxTQUFTN0wsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTZXLEdBQUEsQ0FBSWhQLFFBQUEsQ0FBU2xSLE1BQUEsRUFBUXFKLENBQUEsSUFBSyxHQUMxQ2t6QixNQUFBLENBQU9yYyxHQUFBLENBQUloUCxRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxHQUFHNlcsR0FBQSxDQUFJaFAsUUFBQSxDQUFTN0gsQ0FBQyxJQUFJbXpCLFVBQUEsR0FBWSxDQUFDO0VBQ25FO0VBQ0EsU0FBU256QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJNkgsUUFBQSxDQUFTbFIsTUFBQSxFQUFRcUosQ0FBQSxJQUFLLEdBQ3RDLElBQUk2SCxRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxLQUFLLElBQ25Ca3pCLE1BQUEsQ0FBT3JyQixRQUFBLENBQVM3SCxDQUFBLEdBQUksQ0FBQyxHQUFHb3lCLFdBQUEsQ0FBWXB5QixDQUFDLElBQUlndkIsU0FBQSxHQUFZLENBQUM7RUFDOUQsT0FBT2dCLFdBQUE7QUFDWDtBQUNBLFNBQVNnQixpQkFBaUJpQyxLQUFBLEVBQU92OUIsSUFBQSxFQUFNc0MsTUFBQSxFQUFRO0VBQzNDLElBQUl0QyxJQUFBLENBQUttWixNQUFBLEVBQ0wsT0FBTztFQUNYLElBQUkxSSxHQUFBLEdBQU1uTyxNQUFBLEdBQVN0QyxJQUFBLENBQUs0QixRQUFBO0lBQVUwZCxLQUFBLEdBQVE7RUFDMUMsU0FBU2hWLENBQUEsR0FBSSxHQUFHK3VCLElBQUEsRUFBTS91QixDQUFBLEdBQUlpekIsS0FBQSxDQUFNdDhCLE1BQUEsRUFBUXFKLENBQUEsSUFBSztJQUN6QyxLQUFLK3VCLElBQUEsR0FBT2tFLEtBQUEsQ0FBTWp6QixDQUFDLE1BQU0rdUIsSUFBQSxDQUFLMzRCLElBQUEsR0FBTzRCLE1BQUEsSUFBVSsyQixJQUFBLENBQUsxNEIsRUFBQSxHQUFLOFAsR0FBQSxFQUFLO01BQzFELENBQUM2TyxLQUFBLEtBQVVBLEtBQUEsR0FBUSxFQUFDLEdBQUlyVixJQUFBLENBQUtvdkIsSUFBSTtNQUNqQ2tFLEtBQUEsQ0FBTWp6QixDQUFDLElBQUk7SUFDZjtFQUNKO0VBQ0EsT0FBT2dWLEtBQUE7QUFDWDtBQUNBLFNBQVNrYyxhQUFhek4sS0FBQSxFQUFPO0VBQ3pCLElBQUl6YyxNQUFBLEdBQVMsRUFBQztFQUNkLFNBQVNoSCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJeWpCLEtBQUEsQ0FBTTlzQixNQUFBLEVBQVFxSixDQUFBLElBQzlCLElBQUl5akIsS0FBQSxDQUFNempCLENBQUMsS0FBSyxNQUNaZ0gsTUFBQSxDQUFPckgsSUFBQSxDQUFLOGpCLEtBQUEsQ0FBTXpqQixDQUFDLENBQUM7RUFDNUIsT0FBT2dILE1BQUE7QUFDWDtBQUtBLFNBQVNpcEIsVUFBVWdELEtBQUEsRUFBT3Y5QixJQUFBLEVBQU1zQyxNQUFBLEVBQVFxNEIsT0FBQSxFQUFTO0VBQzdDLElBQUl4b0IsUUFBQSxHQUFXLEVBQUM7SUFBR3VyQixRQUFBLEdBQVc7RUFDOUIxOUIsSUFBQSxDQUFLa3FCLE9BQUEsQ0FBUSxDQUFDaVIsU0FBQSxFQUFXd0MsVUFBQSxLQUFlO0lBQ3BDLElBQUlyZSxLQUFBLEdBQVFnYyxnQkFBQSxDQUFpQmlDLEtBQUEsRUFBT3BDLFNBQUEsRUFBV3dDLFVBQUEsR0FBYXI3QixNQUFNO0lBQ2xFLElBQUlnZCxLQUFBLEVBQU87TUFDUG9lLFFBQUEsR0FBVztNQUNYLElBQUlFLE9BQUEsR0FBVXJELFNBQUEsQ0FBVWpiLEtBQUEsRUFBTzZiLFNBQUEsRUFBVzc0QixNQUFBLEdBQVNxN0IsVUFBQSxHQUFhLEdBQUdoRCxPQUFPO01BQzFFLElBQUlpRCxPQUFBLElBQVcza0IsS0FBQSxFQUNYOUcsUUFBQSxDQUFTbEksSUFBQSxDQUFLMHpCLFVBQUEsRUFBWUEsVUFBQSxHQUFheEMsU0FBQSxDQUFVdjVCLFFBQUEsRUFBVWc4QixPQUFPO0lBQzFFO0VBQ0osQ0FBQztFQUNELElBQUlwYyxNQUFBLEdBQVMrWixTQUFBLENBQVVtQyxRQUFBLEdBQVdsQyxZQUFBLENBQWErQixLQUFLLElBQUlBLEtBQUEsRUFBTyxDQUFDajdCLE1BQU0sRUFBRXdmLElBQUEsQ0FBS21aLEtBQUs7RUFDbEYsU0FBUzN3QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJa1gsTUFBQSxDQUFPdmdCLE1BQUEsRUFBUXFKLENBQUEsSUFDL0IsSUFBSSxDQUFDa1gsTUFBQSxDQUFPbFgsQ0FBQyxFQUFFbUwsSUFBQSxDQUFLZ2tCLEtBQUEsQ0FBTXo1QixJQUFBLEVBQU13aEIsTUFBQSxDQUFPbFgsQ0FBQyxDQUFDLEdBQUc7SUFDeEMsSUFBSXF3QixPQUFBLENBQVFJLFFBQUEsRUFDUkosT0FBQSxDQUFRSSxRQUFBLENBQVN2WixNQUFBLENBQU9sWCxDQUFDLEVBQUU2TCxJQUFJO0lBQ25DcUwsTUFBQSxDQUFPdkMsTUFBQSxDQUFPM1UsQ0FBQSxJQUFLLENBQUM7RUFDeEI7RUFDSixPQUFPa1gsTUFBQSxDQUFPdmdCLE1BQUEsSUFBVWtSLFFBQUEsQ0FBU2xSLE1BQUEsR0FBUyxJQUFJN0IsYUFBQSxDQUFjb2lCLE1BQUEsRUFBUXJQLFFBQVEsSUFBSThHLEtBQUE7QUFDcEY7QUFJQSxTQUFTZ2lCLE1BQU1yYyxDQUFBLEVBQUdDLENBQUEsRUFBRztFQUNqQixPQUFPRCxDQUFBLENBQUVsZSxJQUFBLEdBQU9tZSxDQUFBLENBQUVuZSxJQUFBLElBQVFrZSxDQUFBLENBQUVqZSxFQUFBLEdBQUtrZSxDQUFBLENBQUVsZSxFQUFBO0FBQ3ZDO0FBS0EsU0FBU283QixjQUFjd0IsS0FBQSxFQUFPO0VBQzFCLElBQUlNLE9BQUEsR0FBVU4sS0FBQTtFQUNkLFNBQVNqekIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXV6QixPQUFBLENBQVE1OEIsTUFBQSxHQUFTLEdBQUdxSixDQUFBLElBQUs7SUFDekMsSUFBSSt1QixJQUFBLEdBQU93RSxPQUFBLENBQVF2ekIsQ0FBQztJQUNwQixJQUFJK3VCLElBQUEsQ0FBSzM0QixJQUFBLElBQVEyNEIsSUFBQSxDQUFLMTRCLEVBQUEsRUFDbEIsU0FBU3NNLENBQUEsR0FBSTNDLENBQUEsR0FBSSxHQUFHMkMsQ0FBQSxHQUFJNHdCLE9BQUEsQ0FBUTU4QixNQUFBLEVBQVFnTSxDQUFBLElBQUs7TUFDekMsSUFBSUssSUFBQSxHQUFPdXdCLE9BQUEsQ0FBUTV3QixDQUFDO01BQ3BCLElBQUlLLElBQUEsQ0FBSzVNLElBQUEsSUFBUTI0QixJQUFBLENBQUszNEIsSUFBQSxFQUFNO1FBQ3hCLElBQUk0TSxJQUFBLENBQUszTSxFQUFBLElBQU0wNEIsSUFBQSxDQUFLMTRCLEVBQUEsRUFBSTtVQUNwQixJQUFJazlCLE9BQUEsSUFBV04sS0FBQSxFQUNYTSxPQUFBLEdBQVVOLEtBQUEsQ0FBTXhsQixLQUFBLENBQU07VUFHMUI4bEIsT0FBQSxDQUFRNXdCLENBQUMsSUFBSUssSUFBQSxDQUFLMEssSUFBQSxDQUFLMUssSUFBQSxDQUFLNU0sSUFBQSxFQUFNMjRCLElBQUEsQ0FBSzE0QixFQUFFO1VBQ3pDbTlCLFdBQUEsQ0FBWUQsT0FBQSxFQUFTNXdCLENBQUEsR0FBSSxHQUFHSyxJQUFBLENBQUswSyxJQUFBLENBQUtxaEIsSUFBQSxDQUFLMTRCLEVBQUEsRUFBSTJNLElBQUEsQ0FBSzNNLEVBQUUsQ0FBQztRQUMzRDtRQUNBO01BQ0osT0FDSztRQUNELElBQUkyTSxJQUFBLENBQUs1TSxJQUFBLEdBQU8yNEIsSUFBQSxDQUFLMTRCLEVBQUEsRUFBSTtVQUNyQixJQUFJazlCLE9BQUEsSUFBV04sS0FBQSxFQUNYTSxPQUFBLEdBQVVOLEtBQUEsQ0FBTXhsQixLQUFBLENBQU07VUFHMUI4bEIsT0FBQSxDQUFRdnpCLENBQUMsSUFBSSt1QixJQUFBLENBQUtyaEIsSUFBQSxDQUFLcWhCLElBQUEsQ0FBSzM0QixJQUFBLEVBQU00TSxJQUFBLENBQUs1TSxJQUFJO1VBQzNDbzlCLFdBQUEsQ0FBWUQsT0FBQSxFQUFTNXdCLENBQUEsRUFBR29zQixJQUFBLENBQUtyaEIsSUFBQSxDQUFLMUssSUFBQSxDQUFLNU0sSUFBQSxFQUFNMjRCLElBQUEsQ0FBSzE0QixFQUFFLENBQUM7UUFDekQ7UUFDQTtNQUNKO0lBQ0o7RUFDUjtFQUNBLE9BQU9rOUIsT0FBQTtBQUNYO0FBQ0EsU0FBU0MsWUFBWS9QLEtBQUEsRUFBT3pqQixDQUFBLEVBQUd3VCxJQUFBLEVBQU07RUFDakMsT0FBT3hULENBQUEsR0FBSXlqQixLQUFBLENBQU05c0IsTUFBQSxJQUFVZzZCLEtBQUEsQ0FBTW5kLElBQUEsRUFBTWlRLEtBQUEsQ0FBTXpqQixDQUFDLENBQUMsSUFBSSxHQUMvQ0EsQ0FBQTtFQUNKeWpCLEtBQUEsQ0FBTTlPLE1BQUEsQ0FBTzNVLENBQUEsRUFBRyxHQUFHd1QsSUFBSTtBQUMzQjtBQUVBLFNBQVNpZ0IsZ0JBQWdCOTFCLElBQUEsRUFBTTtFQUMzQixJQUFJcVgsS0FBQSxHQUFRLEVBQUM7RUFDYnJYLElBQUEsQ0FBS0csUUFBQSxDQUFTLGVBQWVrSCxDQUFBLElBQUs7SUFDOUIsSUFBSWdDLE1BQUEsR0FBU2hDLENBQUEsQ0FBRXJILElBQUEsQ0FBS3dGLEtBQUs7SUFDekIsSUFBSTZELE1BQUEsSUFBVUEsTUFBQSxJQUFVMkgsS0FBQSxFQUNwQnFHLEtBQUEsQ0FBTXJWLElBQUEsQ0FBS3FILE1BQU07RUFDekIsQ0FBQztFQUNELElBQUlySixJQUFBLENBQUtrYyxhQUFBLEVBQ0w3RSxLQUFBLENBQU1yVixJQUFBLENBQUs3SyxhQUFBLENBQWNpWSxNQUFBLENBQU9wUCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLEVBQUssQ0FBQ2lELElBQUEsQ0FBS2tjLGFBQUEsQ0FBY3JHLElBQUksQ0FBQyxDQUFDO0VBQzlFLE9BQU9nZSxlQUFBLENBQWdCcDdCLElBQUEsQ0FBSzRlLEtBQUs7QUFDckM7QUFFQSxJQUFNMGUsY0FBQSxHQUFpQjtFQUNuQkMsU0FBQSxFQUFXO0VBQ1hDLGFBQUEsRUFBZTtFQUNmQyxxQkFBQSxFQUF1QjtFQUN2QkMsVUFBQSxFQUFZO0VBQ1pDLGlCQUFBLEVBQW1CO0VBQ25CVCxPQUFBLEVBQVM7QUFDYjtBQUVBLElBQU1VLFdBQUEsR0FBYy80QixFQUFBLElBQU1DLFVBQUEsSUFBYztBQUN4QyxJQUFNKzRCLGNBQUEsR0FBTixNQUFxQjtFQUNqQnJzQixZQUFBLEVBQWM7SUFDVixLQUFLOU8sVUFBQSxHQUFhO0lBQ2xCLEtBQUtDLFlBQUEsR0FBZTtJQUNwQixLQUFLSCxTQUFBLEdBQVk7SUFDakIsS0FBS0MsV0FBQSxHQUFjO0VBQ3ZCO0VBQ0FnZSxJQUFJeFIsR0FBQSxFQUFLO0lBQ0wsS0FBS3ZNLFVBQUEsR0FBYXVNLEdBQUEsQ0FBSXZNLFVBQUE7SUFDdEIsS0FBS0MsWUFBQSxHQUFlc00sR0FBQSxDQUFJdE0sWUFBQTtJQUN4QixLQUFLSCxTQUFBLEdBQVl5TSxHQUFBLENBQUl6TSxTQUFBO0lBQ3JCLEtBQUtDLFdBQUEsR0FBY3dNLEdBQUEsQ0FBSXhNLFdBQUE7RUFDM0I7RUFDQXkxQixNQUFBLEVBQVE7SUFDSixLQUFLeDFCLFVBQUEsR0FBYSxLQUFLRixTQUFBLEdBQVk7RUFDdkM7RUFDQXdULEdBQUcvRyxHQUFBLEVBQUs7SUFDSixPQUFPQSxHQUFBLENBQUl2TSxVQUFBLElBQWMsS0FBS0EsVUFBQSxJQUFjdU0sR0FBQSxDQUFJdE0sWUFBQSxJQUFnQixLQUFLQSxZQUFBLElBQ2pFc00sR0FBQSxDQUFJek0sU0FBQSxJQUFhLEtBQUtBLFNBQUEsSUFBYXlNLEdBQUEsQ0FBSXhNLFdBQUEsSUFBZSxLQUFLQSxXQUFBO0VBQ25FO0FBQ0o7QUFDQSxJQUFNcTdCLFdBQUEsR0FBTixNQUFrQjtFQUNkdHNCLFlBQVlqSyxJQUFBLEVBQU13MkIsZUFBQSxFQUFpQjtJQUMvQixLQUFLeDJCLElBQUEsR0FBT0EsSUFBQTtJQUNaLEtBQUt3MkIsZUFBQSxHQUFrQkEsZUFBQTtJQUN2QixLQUFLQyxLQUFBLEdBQVEsRUFBQztJQUNkLEtBQUtsSixZQUFBLEdBQWU7SUFDcEIsS0FBS21KLFFBQUEsR0FBVztJQUNoQixLQUFLNWEsZ0JBQUEsR0FBbUIsSUFBSXdhLGNBQUE7SUFDNUIsS0FBS0ssVUFBQSxHQUFhO0lBQ2xCLEtBQUtDLDJCQUFBLEdBQThCO0lBQ25DLEtBQUt4SixtQkFBQSxHQUFzQjtJQUMzQixLQUFLc0osUUFBQSxHQUFXemMsTUFBQSxDQUFPNGMsZ0JBQUEsSUFDbkIsSUFBSTVjLE1BQUEsQ0FBTzRjLGdCQUFBLENBQWlCQyxTQUFBLElBQWE7TUFDckMsU0FBU3owQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJeTBCLFNBQUEsQ0FBVTk5QixNQUFBLEVBQVFxSixDQUFBLElBQ2xDLEtBQUtvMEIsS0FBQSxDQUFNejBCLElBQUEsQ0FBSzgwQixTQUFBLENBQVV6MEIsQ0FBQyxDQUFDO01BS2hDLElBQUkvRSxFQUFBLElBQU1DLFVBQUEsSUFBYyxNQUFNdTVCLFNBQUEsQ0FBVTNLLElBQUEsQ0FBSzNWLENBQUEsSUFBS0EsQ0FBQSxDQUFFaEosSUFBQSxJQUFRLGVBQWVnSixDQUFBLENBQUV1Z0IsWUFBQSxDQUFhLzlCLE1BQUEsSUFDdEZ3ZCxDQUFBLENBQUVoSixJQUFBLElBQVEsbUJBQW1CZ0osQ0FBQSxDQUFFdkgsUUFBQSxDQUFTalcsTUFBQSxHQUFTd2QsQ0FBQSxDQUFFelEsTUFBQSxDQUFPaE4sU0FBQSxDQUFVQyxNQUFNLEdBQzFFLEtBQUs4M0IsU0FBQSxDQUFVLE9BRWYsS0FBSzdFLEtBQUEsQ0FBTTtJQUNuQixDQUFDO0lBQ0wsSUFBSW9LLFdBQUEsRUFBYTtNQUNiLEtBQUtNLFVBQUEsR0FBYWpmLENBQUEsSUFBSztRQUNuQixLQUFLK2UsS0FBQSxDQUFNejBCLElBQUEsQ0FBSztVQUFFK0QsTUFBQSxFQUFRMlIsQ0FBQSxDQUFFM1IsTUFBQTtVQUFReUgsSUFBQSxFQUFNO1VBQWlCeUIsUUFBQSxFQUFVeUksQ0FBQSxDQUFFc2Y7UUFBVSxDQUFDO1FBQ2xGLEtBQUtsRyxTQUFBLENBQVU7TUFDbkI7SUFDSjtJQUNBLEtBQUttRyxpQkFBQSxHQUFvQixLQUFLQSxpQkFBQSxDQUFrQnpMLElBQUEsQ0FBSyxJQUFJO0VBQzdEO0VBQ0FzRixVQUFBLEVBQVk7SUFDUixJQUFJLEtBQUt2RCxZQUFBLEdBQWUsR0FDcEIsS0FBS0EsWUFBQSxHQUFldFQsTUFBQSxDQUFPZ0QsVUFBQSxDQUFXLE1BQU07TUFBRSxLQUFLc1EsWUFBQSxHQUFlO01BQUksS0FBS3RCLEtBQUEsQ0FBTTtJQUFHLEdBQUcsRUFBRTtFQUNqRztFQUNBcEQsV0FBQSxFQUFhO0lBQ1QsSUFBSSxLQUFLMEUsWUFBQSxHQUFlLElBQUk7TUFDeEJ0VCxNQUFBLENBQU9tTyxZQUFBLENBQWEsS0FBS21GLFlBQVk7TUFDckMsS0FBS0EsWUFBQSxHQUFlO01BQ3BCLEtBQUt0QixLQUFBLENBQU07SUFDZjtFQUNKO0VBQ0ExakIsTUFBQSxFQUFRO0lBQ0osSUFBSSxLQUFLbXVCLFFBQUEsRUFBVTtNQUNmLEtBQUtBLFFBQUEsQ0FBU1EsV0FBQSxDQUFZO01BQzFCLEtBQUtSLFFBQUEsQ0FBU1MsT0FBQSxDQUFRLEtBQUtuM0IsSUFBQSxDQUFLdEYsR0FBQSxFQUFLcTdCLGNBQWM7SUFDdkQ7SUFDQSxJQUFJLEtBQUtZLFVBQUEsRUFDTCxLQUFLMzJCLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSXNpQixnQkFBQSxDQUFpQiw0QkFBNEIsS0FBSzJaLFVBQVU7SUFDOUUsS0FBS2hhLGdCQUFBLENBQWlCO0VBQzFCO0VBQ0FoTyxLQUFBLEVBQU87SUFDSCxJQUFJLEtBQUsrbkIsUUFBQSxFQUFVO01BQ2YsSUFBSVUsSUFBQSxHQUFPLEtBQUtWLFFBQUEsQ0FBU1EsV0FBQSxDQUFZO01BQ3JDLElBQUlFLElBQUEsQ0FBS3ArQixNQUFBLEVBQVE7UUFDYixTQUFTcUosQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSswQixJQUFBLENBQUtwK0IsTUFBQSxFQUFRcUosQ0FBQSxJQUM3QixLQUFLbzBCLEtBQUEsQ0FBTXowQixJQUFBLENBQUtvMUIsSUFBQSxDQUFLLzBCLENBQUMsQ0FBQztRQUMzQjRYLE1BQUEsQ0FBT2dELFVBQUEsQ0FBVyxNQUFNLEtBQUtnUCxLQUFBLENBQU0sR0FBRyxFQUFFO01BQzVDO01BQ0EsS0FBS3lLLFFBQUEsQ0FBU1csVUFBQSxDQUFXO0lBQzdCO0lBQ0EsSUFBSSxLQUFLVixVQUFBLEVBQ0wsS0FBSzMyQixJQUFBLENBQUt0RixHQUFBLENBQUlvaUIsbUJBQUEsQ0FBb0IsNEJBQTRCLEtBQUs2WixVQUFVO0lBQ2pGLEtBQUsxYSxtQkFBQSxDQUFvQjtFQUM3QjtFQUNBVSxpQkFBQSxFQUFtQjtJQUNmLEtBQUszYyxJQUFBLENBQUt0RixHQUFBLENBQUkyRixhQUFBLENBQWMyYyxnQkFBQSxDQUFpQixtQkFBbUIsS0FBS2lhLGlCQUFpQjtFQUMxRjtFQUNBaGIsb0JBQUEsRUFBc0I7SUFDbEIsS0FBS2pjLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSTJGLGFBQUEsQ0FBY3ljLG1CQUFBLENBQW9CLG1CQUFtQixLQUFLbWEsaUJBQWlCO0VBQzdGO0VBQ0FLLHlCQUFBLEVBQTJCO0lBQ3ZCLEtBQUtWLDJCQUFBLEdBQThCO0lBQ25DM1osVUFBQSxDQUFXLE1BQU0sS0FBSzJaLDJCQUFBLEdBQThCLE9BQU8sRUFBRTtFQUNqRTtFQUNBSyxrQkFBQSxFQUFvQjtJQUNoQixJQUFJLENBQUMxWixvQkFBQSxDQUFxQixLQUFLdmQsSUFBSSxHQUMvQjtJQUNKLElBQUksS0FBSzQyQiwyQkFBQSxFQUNMLE9BQU9wYixjQUFBLENBQWUsS0FBS3hiLElBQUk7SUFJbkMsSUFBSTFDLEVBQUEsSUFBTUMsVUFBQSxJQUFjLE1BQU0sQ0FBQyxLQUFLeUMsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVcUosS0FBQSxFQUFPO01BQzVELElBQUl0SixHQUFBLEdBQU0sS0FBSzFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO01BRXRDLElBQUluQixHQUFBLENBQUl6TSxTQUFBLElBQWE5QixvQkFBQSxDQUFxQnVPLEdBQUEsQ0FBSXpNLFNBQUEsRUFBV3lNLEdBQUEsQ0FBSXhNLFdBQUEsRUFBYXdNLEdBQUEsQ0FBSXZNLFVBQUEsRUFBWXVNLEdBQUEsQ0FBSXRNLFlBQVksR0FDdEcsT0FBTyxLQUFLMDFCLFNBQUEsQ0FBVTtJQUM5QjtJQUNBLEtBQUs3RSxLQUFBLENBQU07RUFDZjtFQUNBalEsZ0JBQUEsRUFBa0I7SUFDZCxLQUFLRixnQkFBQSxDQUFpQjVDLEdBQUEsQ0FBSSxLQUFLbFosSUFBQSxDQUFLNkksaUJBQUEsQ0FBa0IsQ0FBQztFQUMzRDtFQUNBMHVCLHNCQUFzQjd2QixHQUFBLEVBQUs7SUFDdkIsSUFBSSxDQUFDQSxHQUFBLENBQUl6TSxTQUFBLEVBQ0wsT0FBTztJQUNYLElBQUl1OEIsU0FBQSxHQUFZLG1CQUFJQyxHQUFBO01BQUtDLFNBQUE7SUFDekIsU0FBU2pzQixJQUFBLEdBQU8vRCxHQUFBLENBQUl6TSxTQUFBLEVBQVd3USxJQUFBLEVBQU1BLElBQUEsR0FBT3ZULFVBQUEsQ0FBV3VULElBQUksR0FDdkQrckIsU0FBQSxDQUFVaHBCLEdBQUEsQ0FBSS9DLElBQUk7SUFDdEIsU0FBU0EsSUFBQSxHQUFPL0QsR0FBQSxDQUFJdk0sVUFBQSxFQUFZc1EsSUFBQSxFQUFNQSxJQUFBLEdBQU92VCxVQUFBLENBQVd1VCxJQUFJLEdBQ3hELElBQUkrckIsU0FBQSxDQUFVNWYsR0FBQSxDQUFJbk0sSUFBSSxHQUFHO01BQ3JCaXNCLFNBQUEsR0FBWWpzQixJQUFBO01BQ1o7SUFDSjtJQUNKLElBQUk5USxJQUFBLEdBQU8rOEIsU0FBQSxJQUFhLEtBQUsxM0IsSUFBQSxDQUFLa0UsT0FBQSxDQUFRSyxXQUFBLENBQVltekIsU0FBUztJQUMvRCxJQUFJLzhCLElBQUEsSUFBUUEsSUFBQSxDQUFLMlMsY0FBQSxDQUFlO01BQzVCRSxJQUFBLEVBQU07TUFDTnpILE1BQUEsRUFBUTJ4QixTQUFBLENBQVVyL0IsUUFBQSxJQUFZLElBQUlxL0IsU0FBQSxDQUFVeC9CLFVBQUEsR0FBYXcvQjtJQUM3RCxDQUFDLEdBQUc7TUFDQSxLQUFLMWIsZUFBQSxDQUFnQjtNQUNyQixPQUFPO0lBQ1g7RUFDSjtFQUNBeVEsZUFBQSxFQUFpQjtJQUNiLElBQUksS0FBS2lLLFFBQUEsRUFDTCxTQUFTMW5CLEdBQUEsSUFBTyxLQUFLMG5CLFFBQUEsQ0FBU1EsV0FBQSxDQUFZLEdBQ3RDLEtBQUtULEtBQUEsQ0FBTXowQixJQUFBLENBQUtnTixHQUFHO0lBQzNCLE9BQU8sS0FBS3luQixLQUFBO0VBQ2hCO0VBQ0F4SyxNQUFBLEVBQVE7SUFDSixJQUFJO01BQUVqc0I7SUFBSyxJQUFJO0lBQ2YsSUFBSSxDQUFDQSxJQUFBLENBQUtrRSxPQUFBLElBQVcsS0FBS3FwQixZQUFBLEdBQWUsSUFDckM7SUFDSixJQUFJdUosU0FBQSxHQUFZLEtBQUtySyxjQUFBLENBQWU7SUFDcEMsSUFBSXFLLFNBQUEsQ0FBVTk5QixNQUFBLEVBQ1YsS0FBS3k5QixLQUFBLEdBQVEsRUFBQztJQUNsQixJQUFJL3VCLEdBQUEsR0FBTTFILElBQUEsQ0FBSzZJLGlCQUFBLENBQWtCO0lBQ2pDLElBQUk4dUIsTUFBQSxHQUFTLENBQUMsS0FBS2YsMkJBQUEsSUFBK0IsQ0FBQyxLQUFLOWEsZ0JBQUEsQ0FBaUJyTixFQUFBLENBQUcvRyxHQUFHLEtBQUs2VixvQkFBQSxDQUFxQnZkLElBQUksS0FBSyxDQUFDLEtBQUt1M0IscUJBQUEsQ0FBc0I3dkIsR0FBRztJQUNqSixJQUFJalAsSUFBQSxHQUFPO01BQUlDLEVBQUEsR0FBSztNQUFJay9CLFFBQUEsR0FBVztNQUFPQyxLQUFBLEdBQVEsRUFBQztJQUNuRCxJQUFJNzNCLElBQUEsQ0FBS3FiLFFBQUEsRUFBVTtNQUNmLFNBQVNoWixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJeTBCLFNBQUEsQ0FBVTk5QixNQUFBLEVBQVFxSixDQUFBLElBQUs7UUFDdkMsSUFBSWdILE1BQUEsR0FBUyxLQUFLeXVCLGdCQUFBLENBQWlCaEIsU0FBQSxDQUFVejBCLENBQUMsR0FBR3cxQixLQUFLO1FBQ3RELElBQUl4dUIsTUFBQSxFQUFRO1VBQ1I1USxJQUFBLEdBQU9BLElBQUEsR0FBTyxJQUFJNFEsTUFBQSxDQUFPNVEsSUFBQSxHQUFPOEQsSUFBQSxDQUFLQyxHQUFBLENBQUk2TSxNQUFBLENBQU81USxJQUFBLEVBQU1BLElBQUk7VUFDMURDLEVBQUEsR0FBS0EsRUFBQSxHQUFLLElBQUkyUSxNQUFBLENBQU8zUSxFQUFBLEdBQUs2RCxJQUFBLENBQUsrRSxHQUFBLENBQUkrSCxNQUFBLENBQU8zUSxFQUFBLEVBQUlBLEVBQUU7VUFDaEQsSUFBSTJRLE1BQUEsQ0FBT3V1QixRQUFBLEVBQ1BBLFFBQUEsR0FBVztRQUNuQjtNQUNKO0lBQ0o7SUFDQSxJQUFJbjZCLEtBQUEsSUFBU282QixLQUFBLENBQU03K0IsTUFBQSxFQUFRO01BQ3ZCLElBQUkrK0IsR0FBQSxHQUFNRixLQUFBLENBQU0xaEIsTUFBQSxDQUFPeEIsQ0FBQSxJQUFLQSxDQUFBLENBQUU3YSxRQUFBLElBQVksSUFBSTtNQUM5QyxJQUFJaStCLEdBQUEsQ0FBSS8rQixNQUFBLElBQVUsR0FBRztRQUNqQixJQUFJLENBQUMyZCxDQUFBLEVBQUdDLENBQUMsSUFBSW1oQixHQUFBO1FBQ2IsSUFBSXBoQixDQUFBLENBQUV6ZSxVQUFBLElBQWN5ZSxDQUFBLENBQUV6ZSxVQUFBLENBQVdBLFVBQUEsSUFBYzBlLENBQUEsQ0FBRTFlLFVBQUEsRUFDN0MwZSxDQUFBLENBQUUxQyxNQUFBLENBQU8sT0FFVHlDLENBQUEsQ0FBRXpDLE1BQUEsQ0FBTztNQUNqQixPQUNLO1FBQ0QsSUFBSTtVQUFFalo7UUFBVSxJQUFJLEtBQUs2Z0IsZ0JBQUE7UUFDekIsU0FBU2tjLEVBQUEsSUFBTUQsR0FBQSxFQUFLO1VBQ2hCLElBQUk1L0IsTUFBQSxHQUFTNi9CLEVBQUEsQ0FBRzkvQixVQUFBO1VBQ2hCLElBQUlDLE1BQUEsSUFBVUEsTUFBQSxDQUFPMkIsUUFBQSxJQUFZLFNBQVMsQ0FBQ21CLFNBQUEsSUFBYWc5QixXQUFBLENBQVlqNEIsSUFBQSxFQUFNL0UsU0FBUyxLQUFLOUMsTUFBQSxHQUNwRjYvQixFQUFBLENBQUc5akIsTUFBQSxDQUFPO1FBQ2xCO01BQ0o7SUFDSjtJQUNBLElBQUlna0IsT0FBQSxHQUFVO0lBSWQsSUFBSXovQixJQUFBLEdBQU8sS0FBS2svQixNQUFBLElBQVUzM0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNK1QsU0FBQSxHQUFZaUIsSUFBQSxDQUFLQyxHQUFBLENBQUksSUFBSSxPQUMxRDNyQixJQUFBLENBQUsrRSxHQUFBLENBQUl0QixJQUFBLENBQUtpVCxLQUFBLENBQU1nVSxTQUFBLEVBQVdqbkIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNd1QsU0FBQSxDQUFVQyxJQUFJLElBQUl1QixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE9BQ3pFbnRCLGtCQUFBLENBQW1CMk0sR0FBRyxNQUFNd3dCLE9BQUEsR0FBVTNkLGdCQUFBLENBQWlCdmEsSUFBSSxNQUMzRGs0QixPQUFBLENBQVF6cEIsRUFBQSxDQUFHL1csd0JBQUEsQ0FBQW1qQixTQUFBLENBQVU4RSxJQUFBLENBQUszZixJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHO01BQzFEL0csSUFBQSxDQUFLaVQsS0FBQSxDQUFNK1QsU0FBQSxHQUFZO01BQ3ZCeEwsY0FBQSxDQUFleGIsSUFBSTtNQUNuQixLQUFLOGIsZ0JBQUEsQ0FBaUI1QyxHQUFBLENBQUl4UixHQUFHO01BQzdCMUgsSUFBQSxDQUFLbTRCLGlCQUFBLENBQWtCO0lBQzNCLFdBQ1MxL0IsSUFBQSxHQUFPLE1BQU1rL0IsTUFBQSxFQUFRO01BQzFCLElBQUlsL0IsSUFBQSxHQUFPLElBQUk7UUFDWHVILElBQUEsQ0FBS2tFLE9BQUEsQ0FBUXdKLFNBQUEsQ0FBVWpWLElBQUEsRUFBTUMsRUFBRTtRQUMvQjAvQixRQUFBLENBQVNwNEIsSUFBSTtNQUNqQjtNQUNBLEtBQUt3MkIsZUFBQSxDQUFnQi85QixJQUFBLEVBQU1DLEVBQUEsRUFBSWsvQixRQUFBLEVBQVVDLEtBQUs7TUFDOUMsSUFBSTczQixJQUFBLENBQUtrRSxPQUFBLElBQVdsRSxJQUFBLENBQUtrRSxPQUFBLENBQVFpRyxLQUFBLEVBQzdCbkssSUFBQSxDQUFLd0gsV0FBQSxDQUFZeEgsSUFBQSxDQUFLd0YsS0FBSyxXQUN0QixDQUFDLEtBQUtzVyxnQkFBQSxDQUFpQnJOLEVBQUEsQ0FBRy9HLEdBQUcsR0FDbEM4VCxjQUFBLENBQWV4YixJQUFJO01BQ3ZCLEtBQUs4YixnQkFBQSxDQUFpQjVDLEdBQUEsQ0FBSXhSLEdBQUc7SUFDakM7RUFDSjtFQUNBb3dCLGlCQUFpQjlvQixHQUFBLEVBQUs2b0IsS0FBQSxFQUFPO0lBRXpCLElBQUlBLEtBQUEsQ0FBTXZoQixPQUFBLENBQVF0SCxHQUFBLENBQUlqSixNQUFNLElBQUksSUFDNUIsT0FBTztJQUNYLElBQUlwTCxJQUFBLEdBQU8sS0FBS3FGLElBQUEsQ0FBS2tFLE9BQUEsQ0FBUUssV0FBQSxDQUFZeUssR0FBQSxDQUFJakosTUFBTTtJQUNuRCxJQUFJaUosR0FBQSxDQUFJeEIsSUFBQSxJQUFRLGlCQUNYN1MsSUFBQSxJQUFRLEtBQUtxRixJQUFBLENBQUtrRSxPQUFBLElBQVc4SyxHQUFBLENBQUlxcEIsYUFBQSxJQUFpQjtJQUFBO0lBRTlDcnBCLEdBQUEsQ0FBSXFwQixhQUFBLElBQWlCLFdBQVcsQ0FBQ3JwQixHQUFBLENBQUlDLFFBQUEsSUFBWSxDQUFDRCxHQUFBLENBQUlqSixNQUFBLENBQU8wYyxZQUFBLENBQWEsT0FBTyxJQUN0RixPQUFPO0lBQ1gsSUFBSSxDQUFDOW5CLElBQUEsSUFBUUEsSUFBQSxDQUFLMlMsY0FBQSxDQUFlMEIsR0FBRyxHQUNoQyxPQUFPO0lBQ1gsSUFBSUEsR0FBQSxDQUFJeEIsSUFBQSxJQUFRLGFBQWE7TUFDekIsU0FBU25MLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkyTSxHQUFBLENBQUlzcEIsVUFBQSxDQUFXdC9CLE1BQUEsRUFBUXFKLENBQUEsSUFBSztRQUM1QyxJQUFJdEssSUFBQSxHQUFPaVgsR0FBQSxDQUFJc3BCLFVBQUEsQ0FBV2oyQixDQUFDO1FBQzNCdzFCLEtBQUEsQ0FBTTcxQixJQUFBLENBQUtqSyxJQUFJO1FBQ2YsSUFBSUEsSUFBQSxDQUFLTSxRQUFBLElBQVksR0FDakIsS0FBSyswQixtQkFBQSxHQUFzQnIxQixJQUFBO01BQ25DO01BQ0EsSUFBSTRDLElBQUEsQ0FBS0csVUFBQSxJQUFjSCxJQUFBLENBQUtHLFVBQUEsSUFBY0gsSUFBQSxDQUFLRCxHQUFBLElBQU8sQ0FBQ0MsSUFBQSxDQUFLRyxVQUFBLENBQVc4RyxRQUFBLENBQVNvTixHQUFBLENBQUlqSixNQUFNLEdBQ3RGLE9BQU87UUFBRXROLElBQUEsRUFBTWtDLElBQUEsQ0FBSzZKLFNBQUE7UUFBVzlMLEVBQUEsRUFBSWlDLElBQUEsQ0FBSzhKO01BQVM7TUFDckQsSUFBSWEsSUFBQSxHQUFPMEosR0FBQSxDQUFJL1csZUFBQTtRQUFpQm9OLElBQUEsR0FBTzJKLEdBQUEsQ0FBSXpMLFdBQUE7TUFDM0MsSUFBSWpHLEVBQUEsSUFBTUMsVUFBQSxJQUFjLE1BQU15UixHQUFBLENBQUlzcEIsVUFBQSxDQUFXdC9CLE1BQUEsRUFBUTtRQUdqRCxTQUFTcUosQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJNLEdBQUEsQ0FBSXNwQixVQUFBLENBQVd0L0IsTUFBQSxFQUFRcUosQ0FBQSxJQUFLO1VBQzVDLElBQUk7WUFBRXBLLGVBQUE7WUFBaUJzTDtVQUFZLElBQUl5TCxHQUFBLENBQUlzcEIsVUFBQSxDQUFXajJCLENBQUM7VUFDdkQsSUFBSSxDQUFDcEssZUFBQSxJQUFtQmdPLEtBQUEsQ0FBTUMsU0FBQSxDQUFVb1EsT0FBQSxDQUFRbFEsSUFBQSxDQUFLNEksR0FBQSxDQUFJc3BCLFVBQUEsRUFBWXJnQyxlQUFlLElBQUksR0FDcEZxTixJQUFBLEdBQU9yTixlQUFBO1VBQ1gsSUFBSSxDQUFDc0wsV0FBQSxJQUFlMEMsS0FBQSxDQUFNQyxTQUFBLENBQVVvUSxPQUFBLENBQVFsUSxJQUFBLENBQUs0SSxHQUFBLENBQUlzcEIsVUFBQSxFQUFZLzBCLFdBQVcsSUFBSSxHQUM1RThCLElBQUEsR0FBTzlCLFdBQUE7UUFDZjtNQUNKO01BQ0EsSUFBSTZJLFVBQUEsR0FBYTlHLElBQUEsSUFBUUEsSUFBQSxDQUFLcE4sVUFBQSxJQUFjOFcsR0FBQSxDQUFJakosTUFBQSxHQUMxQ2pPLFFBQUEsQ0FBU3dOLElBQUksSUFBSSxJQUFJO01BQzNCLElBQUk3TSxJQUFBLEdBQU9rQyxJQUFBLENBQUtzUSxlQUFBLENBQWdCK0QsR0FBQSxDQUFJakosTUFBQSxFQUFRcUcsVUFBQSxFQUFZLEVBQUU7TUFDMUQsSUFBSUMsUUFBQSxHQUFXaEgsSUFBQSxJQUFRQSxJQUFBLENBQUtuTixVQUFBLElBQWM4VyxHQUFBLENBQUlqSixNQUFBLEdBQ3hDak8sUUFBQSxDQUFTdU4sSUFBSSxJQUFJMkosR0FBQSxDQUFJakosTUFBQSxDQUFPOUwsVUFBQSxDQUFXakIsTUFBQTtNQUM3QyxJQUFJTixFQUFBLEdBQUtpQyxJQUFBLENBQUtzUSxlQUFBLENBQWdCK0QsR0FBQSxDQUFJakosTUFBQSxFQUFRc0csUUFBQSxFQUFVLENBQUM7TUFDckQsT0FBTztRQUFFNVQsSUFBQTtRQUFNQztNQUFHO0lBQ3RCLFdBQ1NzVyxHQUFBLENBQUl4QixJQUFBLElBQVEsY0FBYztNQUMvQixPQUFPO1FBQUUvVSxJQUFBLEVBQU1rQyxJQUFBLENBQUtpTCxVQUFBLEdBQWFqTCxJQUFBLENBQUtrTCxNQUFBO1FBQVFuTixFQUFBLEVBQUlpQyxJQUFBLENBQUtxUSxRQUFBLEdBQVdyUSxJQUFBLENBQUtrTDtNQUFPO0lBQ2xGLE9BQ0s7TUFDRCxLQUFLdW5CLG1CQUFBLEdBQXNCcGUsR0FBQSxDQUFJakosTUFBQTtNQUMvQixPQUFPO1FBQ0h0TixJQUFBLEVBQU1rQyxJQUFBLENBQUtpTCxVQUFBO1FBQ1hsTixFQUFBLEVBQUlpQyxJQUFBLENBQUtxUSxRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFLVDRzQixRQUFBLEVBQVU1b0IsR0FBQSxDQUFJakosTUFBQSxDQUFPaE4sU0FBQSxJQUFhaVcsR0FBQSxDQUFJQztNQUMxQztJQUNKO0VBQ0o7QUFDSjtBQUNBLElBQUlzcEIsVUFBQSxHQUFhLG1CQUFJQyxPQUFBLENBQVE7QUFDN0IsSUFBSUMsY0FBQSxHQUFpQjtBQUNyQixTQUFTTCxTQUFTcDRCLElBQUEsRUFBTTtFQUNwQixJQUFJdTRCLFVBQUEsQ0FBVzNnQixHQUFBLENBQUk1WCxJQUFJLEdBQ25CO0VBQ0p1NEIsVUFBQSxDQUFXcmYsR0FBQSxDQUFJbFosSUFBQSxFQUFNLElBQUk7RUFDekIsSUFBSSxDQUFDLFVBQVUsVUFBVSxVQUFVLEVBQUVzVyxPQUFBLENBQVFwVixnQkFBQSxDQUFpQmxCLElBQUEsQ0FBS3RGLEdBQUcsRUFBRWcrQixVQUFVLE1BQU0sSUFBSTtJQUN4RjE0QixJQUFBLENBQUtzWSxxQkFBQSxHQUF3QjdhLEtBQUE7SUFDN0IsSUFBSWc3QixjQUFBLEVBQ0E7SUFDSkUsT0FBQSxDQUFRLE1BQU0sRUFBRSwwS0FBMEs7SUFDMUxGLGNBQUEsR0FBaUI7RUFDckI7QUFDSjtBQUNBLFNBQVNHLHNCQUFzQjU0QixJQUFBLEVBQU1ySCxLQUFBLEVBQU87RUFDeEMsSUFBSXdDLFVBQUEsR0FBYXhDLEtBQUEsQ0FBTWdFLGNBQUE7SUFBZ0J2QixZQUFBLEdBQWV6QyxLQUFBLENBQU1pRSxXQUFBO0VBQzVELElBQUkzQixTQUFBLEdBQVl0QyxLQUFBLENBQU1xaUIsWUFBQTtJQUFjOWYsV0FBQSxHQUFjdkMsS0FBQSxDQUFNc2lCLFNBQUE7RUFDeEQsSUFBSTRkLGFBQUEsR0FBZ0I3NEIsSUFBQSxDQUFLODRCLFFBQUEsQ0FBUzk0QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVUrRSxNQUFNO0VBSTdELElBQUl2VCxvQkFBQSxDQUFxQjAvQixhQUFBLENBQWM5Z0MsSUFBQSxFQUFNOGdDLGFBQUEsQ0FBY3grQixNQUFBLEVBQVFZLFNBQUEsRUFBV0MsV0FBVyxHQUNyRixDQUFDQyxVQUFBLEVBQVlDLFlBQUEsRUFBY0gsU0FBQSxFQUFXQyxXQUFXLElBQUksQ0FBQ0QsU0FBQSxFQUFXQyxXQUFBLEVBQWFDLFVBQUEsRUFBWUMsWUFBWTtFQUMxRyxPQUFPO0lBQUVELFVBQUE7SUFBWUMsWUFBQTtJQUFjSCxTQUFBO0lBQVdDO0VBQVk7QUFDOUQ7QUFHQSxTQUFTNjlCLDJCQUEyQi80QixJQUFBLEVBQU0ySCxTQUFBLEVBQVc7RUFDakQsSUFBSUEsU0FBQSxDQUFVcXhCLGlCQUFBLEVBQW1CO0lBQzdCLElBQUlyZ0MsS0FBQSxHQUFRZ1AsU0FBQSxDQUFVcXhCLGlCQUFBLENBQWtCaDVCLElBQUEsQ0FBSzBCLElBQUksRUFBRSxDQUFDO0lBQ3BELElBQUkvSSxLQUFBLEVBQ0EsT0FBT2lnQyxxQkFBQSxDQUFzQjU0QixJQUFBLEVBQU1ySCxLQUFLO0VBQ2hEO0VBQ0EsSUFBSTBlLEtBQUE7RUFDSixTQUFTNGhCLEtBQUt6OUIsS0FBQSxFQUFPO0lBQ2pCQSxLQUFBLENBQU1zdEIsY0FBQSxDQUFlO0lBQ3JCdHRCLEtBQUEsQ0FBTTA5Qix3QkFBQSxDQUF5QjtJQUMvQjdoQixLQUFBLEdBQVE3YixLQUFBLENBQU0yOUIsZUFBQSxDQUFnQixFQUFFLENBQUM7RUFDckM7RUFNQW41QixJQUFBLENBQUt0RixHQUFBLENBQUlzaUIsZ0JBQUEsQ0FBaUIsZUFBZWljLElBQUEsRUFBTSxJQUFJO0VBQ25EcmdDLFFBQUEsQ0FBU3dnQyxXQUFBLENBQVksUUFBUTtFQUM3QnA1QixJQUFBLENBQUt0RixHQUFBLENBQUlvaUIsbUJBQUEsQ0FBb0IsZUFBZW1jLElBQUEsRUFBTSxJQUFJO0VBQ3RELE9BQU81aEIsS0FBQSxHQUFRdWhCLHFCQUFBLENBQXNCNTRCLElBQUEsRUFBTXFYLEtBQUssSUFBSTtBQUN4RDtBQUNBLFNBQVM0Z0IsWUFBWWo0QixJQUFBLEVBQU1qSSxJQUFBLEVBQU07RUFDN0IsU0FBU29OLENBQUEsR0FBSXBOLElBQUEsQ0FBS0csVUFBQSxFQUFZaU4sQ0FBQSxJQUFLQSxDQUFBLElBQUtuRixJQUFBLENBQUt0RixHQUFBLEVBQUt5SyxDQUFBLEdBQUlBLENBQUEsQ0FBRWpOLFVBQUEsRUFBWTtJQUNoRSxJQUFJeUMsSUFBQSxHQUFPcUYsSUFBQSxDQUFLa0UsT0FBQSxDQUFRSyxXQUFBLENBQVlZLENBQUEsRUFBRyxJQUFJO0lBQzNDLElBQUl4SyxJQUFBLElBQVFBLElBQUEsQ0FBSzVDLElBQUEsQ0FBSzhDLE9BQUEsRUFDbEIsT0FBT3NLLENBQUE7RUFDZjtFQUNBLE9BQU87QUFDWDtBQU9BLFNBQVNrMEIsYUFBYXI1QixJQUFBLEVBQU1zNUIsS0FBQSxFQUFPQyxHQUFBLEVBQUs7RUFDcEMsSUFBSTtJQUFFeGhDLElBQUEsRUFBTUksTUFBQTtJQUFRaVUsVUFBQTtJQUFZQyxRQUFBO0lBQVU1VCxJQUFBO0lBQU1DO0VBQUcsSUFBSXNILElBQUEsQ0FBS2tFLE9BQUEsQ0FBUWdJLFVBQUEsQ0FBV290QixLQUFBLEVBQU9DLEdBQUc7RUFDekYsSUFBSXYrQixNQUFBLEdBQVNnRixJQUFBLENBQUs2SSxpQkFBQSxDQUFrQjtFQUNwQyxJQUFJMUMsSUFBQTtFQUNKLElBQUl1RyxNQUFBLEdBQVMxUixNQUFBLENBQU9HLFVBQUE7RUFDcEIsSUFBSXVSLE1BQUEsSUFBVTFNLElBQUEsQ0FBS3RGLEdBQUEsQ0FBSWtILFFBQUEsQ0FBUzhLLE1BQUEsQ0FBT3JVLFFBQUEsSUFBWSxJQUFJcVUsTUFBQSxHQUFTQSxNQUFBLENBQU94VSxVQUFVLEdBQUc7SUFDaEZpTyxJQUFBLEdBQU8sQ0FBQztNQUFFcE8sSUFBQSxFQUFNMlUsTUFBQTtNQUFRclMsTUFBQSxFQUFRVyxNQUFBLENBQU9JO0lBQWEsQ0FBQztJQUNyRCxJQUFJLENBQUNMLGtCQUFBLENBQW1CQyxNQUFNLEdBQzFCbUwsSUFBQSxDQUFLbkUsSUFBQSxDQUFLO01BQUVqSyxJQUFBLEVBQU1pRCxNQUFBLENBQU9DLFNBQUE7TUFBV1osTUFBQSxFQUFRVyxNQUFBLENBQU9FO0lBQVksQ0FBQztFQUN4RTtFQUdBLElBQUl5QyxNQUFBLElBQVVxQyxJQUFBLENBQUtpVCxLQUFBLENBQU1zVCxXQUFBLEtBQWdCLEdBQUc7SUFDeEMsU0FBU250QixHQUFBLEdBQU1pVCxRQUFBLEVBQVVqVCxHQUFBLEdBQU1nVCxVQUFBLEVBQVloVCxHQUFBLElBQU87TUFDOUMsSUFBSXJCLElBQUEsR0FBT0ksTUFBQSxDQUFPOEIsVUFBQSxDQUFXYixHQUFBLEdBQU0sQ0FBQztRQUFHdUIsSUFBQSxHQUFPNUMsSUFBQSxDQUFLbUMsVUFBQTtNQUNuRCxJQUFJbkMsSUFBQSxDQUFLK0IsUUFBQSxJQUFZLFFBQVEsQ0FBQ2EsSUFBQSxFQUFNO1FBQ2hDMFIsUUFBQSxHQUFXalQsR0FBQTtRQUNYO01BQ0o7TUFDQSxJQUFJLENBQUN1QixJQUFBLElBQVFBLElBQUEsQ0FBSytLLElBQUEsRUFDZDtJQUNSO0VBQ0o7RUFDQSxJQUFJdWxCLFFBQUEsR0FBV2pyQixJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBO0VBQzFCLElBQUkybEIsTUFBQSxHQUFTMWlCLElBQUEsQ0FBS0csUUFBQSxDQUFTLFdBQVcsS0FBS3ZJLHdCQUFBLENBQUErcUIsU0FBQSxDQUFVNUIsVUFBQSxDQUFXL2dCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXdiLE1BQU07RUFDakYsSUFBSW5aLEtBQUEsR0FBUW9qQixRQUFBLENBQVNsa0IsT0FBQSxDQUFRdE8sSUFBSTtFQUNqQyxJQUFJaVAsR0FBQSxHQUFNO0lBQU03TCxJQUFBLEdBQU02bUIsTUFBQSxDQUFPcUQsS0FBQSxDQUFNNXRCLE1BQUEsRUFBUTtNQUN2Q2tiLE9BQUEsRUFBU3hMLEtBQUEsQ0FBTTFQLE1BQUE7TUFDZnFoQyxRQUFBLEVBQVUzeEIsS0FBQSxDQUFNMVAsTUFBQSxDQUFPb3JCLGNBQUEsQ0FBZTFiLEtBQUEsQ0FBTTdQLEtBQUEsQ0FBTSxDQUFDO01BQ25EeWhDLE9BQUEsRUFBUztNQUNUaGhDLElBQUEsRUFBTTJULFVBQUE7TUFDTjFULEVBQUEsRUFBSTJULFFBQUE7TUFDSndFLGtCQUFBLEVBQW9CaEosS0FBQSxDQUFNMVAsTUFBQSxDQUFPcVYsSUFBQSxDQUFLb0QsVUFBQSxJQUFjLFFBQVEsU0FBUztNQUNyRThvQixhQUFBLEVBQWV2ekIsSUFBQTtNQUNmMGMsWUFBQTtNQUNBbkMsT0FBQSxFQUFTN1k7SUFDYixDQUFDO0VBQ0QsSUFBSTFCLElBQUEsSUFBUUEsSUFBQSxDQUFLLENBQUMsRUFBRTlKLEdBQUEsSUFBTyxNQUFNO0lBQzdCLElBQUlzOUIsT0FBQSxHQUFTeHpCLElBQUEsQ0FBSyxDQUFDLEVBQUU5SixHQUFBO01BQUtzUSxJQUFBLEdBQU94RyxJQUFBLENBQUssQ0FBQyxLQUFLQSxJQUFBLENBQUssQ0FBQyxFQUFFOUosR0FBQTtJQUNwRCxJQUFJc1EsSUFBQSxJQUFRLE1BQ1JBLElBQUEsR0FBT2d0QixPQUFBO0lBQ1hqeUIsR0FBQSxHQUFNO01BQUVnRixNQUFBLEVBQVFpdEIsT0FBQSxHQUFTbGhDLElBQUE7TUFBTWtVLElBQUEsRUFBTUEsSUFBQSxHQUFPbFU7SUFBSztFQUNyRDtFQUNBLE9BQU87SUFBRXNFLEdBQUEsRUFBQWxCLElBQUE7SUFBSzZMLEdBQUE7SUFBS2pQLElBQUE7SUFBTUM7RUFBRztBQUNoQztBQUNBLFNBQVNtcUIsYUFBYW5vQixHQUFBLEVBQUs7RUFDdkIsSUFBSUMsSUFBQSxHQUFPRCxHQUFBLENBQUlSLFVBQUE7RUFDZixJQUFJUyxJQUFBLEVBQU07SUFDTixPQUFPQSxJQUFBLENBQUtpUSxTQUFBLENBQVU7RUFDMUIsV0FDU2xRLEdBQUEsQ0FBSVosUUFBQSxJQUFZLFFBQVFZLEdBQUEsQ0FBSXhDLFVBQUEsRUFBWTtJQUk3QyxJQUFJMkYsTUFBQSxJQUFVLGFBQWFoRSxJQUFBLENBQUthLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBVzRCLFFBQVEsR0FBRztNQUN0RCxJQUFJeWEsSUFBQSxHQUFPM2IsUUFBQSxDQUFTeVYsYUFBQSxDQUFjLEtBQUs7TUFDdkNrRyxJQUFBLENBQUtqRyxXQUFBLENBQVkxVixRQUFBLENBQVN5VixhQUFBLENBQWMsSUFBSSxDQUFDO01BQzdDLE9BQU87UUFBRWtHO01BQUs7SUFDbEIsV0FDUzdaLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBV3FOLFNBQUEsSUFBYTdLLEdBQUEsSUFBT21ELE1BQUEsSUFBVSxnQkFBZ0JoRSxJQUFBLENBQUthLEdBQUEsQ0FBSXhDLFVBQUEsQ0FBVzRCLFFBQVEsR0FBRztNQUNqRyxPQUFPO1FBQUU0VSxNQUFBLEVBQVE7TUFBSztJQUMxQjtFQUNKLFdBQ1NoVSxHQUFBLENBQUlaLFFBQUEsSUFBWSxTQUFTWSxHQUFBLENBQUkrbkIsWUFBQSxDQUFhLGtCQUFrQixHQUFHO0lBQ3BFLE9BQU87TUFBRS9ULE1BQUEsRUFBUTtJQUFLO0VBQzFCO0VBQ0EsT0FBTztBQUNYO0FBQ0EsSUFBTTZHLFFBQUEsR0FBVztBQUNqQixTQUFTcWtCLGNBQWM1NUIsSUFBQSxFQUFNdkgsSUFBQSxFQUFNQyxFQUFBLEVBQUlrL0IsUUFBQSxFQUFVVSxVQUFBLEVBQVk7RUFDekQsSUFBSWpSLGFBQUEsR0FBZ0JybkIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNcVUseUJBQUEsS0FBOEJ0bkIsSUFBQSxDQUFLcVIsU0FBQSxHQUFZclIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNb1UsYUFBQSxHQUFnQjtFQUN6R3JuQixJQUFBLENBQUtpVCxLQUFBLENBQU1xVSx5QkFBQSxHQUE0QjtFQUN2QyxJQUFJN3VCLElBQUEsR0FBTyxHQUFHO0lBQ1YsSUFBSStoQixNQUFBLEdBQVN4YSxJQUFBLENBQUtpVCxLQUFBLENBQU00VCxpQkFBQSxHQUFvQm9CLElBQUEsQ0FBS0MsR0FBQSxDQUFJLElBQUksS0FBS2xvQixJQUFBLENBQUtpVCxLQUFBLENBQU0yVCxtQkFBQSxHQUFzQjtJQUMvRixJQUFJK1EsTUFBQSxHQUFTcGQsZ0JBQUEsQ0FBaUJ2YSxJQUFBLEVBQU13YSxNQUFNO0lBQzFDLElBQUltZCxNQUFBLElBQVUsQ0FBQzMzQixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVU4RyxFQUFBLENBQUdrcEIsTUFBTSxHQUFHO01BQzVDLElBQUloNkIsTUFBQSxJQUFVUyxPQUFBLElBQ1Y0QixJQUFBLENBQUtpVCxLQUFBLENBQU1zVCxXQUFBLEtBQWdCLE1BQU0wQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE1BQU1sb0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNdVQsZUFBQSxJQUMvRHhtQixJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQ2xFO01BQ0osSUFBSTBpQixFQUFBLEdBQUsvZCxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUd0UixZQUFBLENBQWFrckIsTUFBTTtNQUMxQyxJQUFJbmQsTUFBQSxJQUFVLFdBQ1Z1RCxFQUFBLENBQUdpTSxPQUFBLENBQVEsV0FBVyxJQUFJLFdBQ3JCeFAsTUFBQSxJQUFVLE9BQ2Z1RCxFQUFBLENBQUdDLGNBQUEsQ0FBZTtNQUN0QixJQUFJcUosYUFBQSxFQUNBdEosRUFBQSxDQUFHaU0sT0FBQSxDQUFRLGVBQWUzQyxhQUFhO01BQzNDcm5CLElBQUEsQ0FBSzhkLFFBQUEsQ0FBU0MsRUFBRTtJQUNwQjtJQUNBO0VBQ0o7RUFDQSxJQUFJOGIsT0FBQSxHQUFVNzVCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSWdLLE9BQUEsQ0FBUXRPLElBQUk7RUFDekMsSUFBSXFoQyxNQUFBLEdBQVNELE9BQUEsQ0FBUXJNLFdBQUEsQ0FBWTkwQixFQUFFO0VBQ25DRCxJQUFBLEdBQU9vaEMsT0FBQSxDQUFRbDFCLE1BQUEsQ0FBT20xQixNQUFBLEdBQVMsQ0FBQztFQUNoQ3BoQyxFQUFBLEdBQUtzSCxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBLENBQUlnSyxPQUFBLENBQVFyTyxFQUFFLEVBQUV3TyxLQUFBLENBQU00eUIsTUFBQSxHQUFTLENBQUM7RUFDaEQsSUFBSXB5QixHQUFBLEdBQU0xSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBO0VBQ3JCLElBQUlvZSxLQUFBLEdBQVFzVCxZQUFBLENBQWFyNUIsSUFBQSxFQUFNdkgsSUFBQSxFQUFNQyxFQUFFO0VBQ3ZDLElBQUltRCxJQUFBLEdBQU1tRSxJQUFBLENBQUt3RixLQUFBLENBQU16SSxHQUFBO0lBQUtnOUIsT0FBQSxHQUFVbCtCLElBQUEsQ0FBSWlVLEtBQUEsQ0FBTWlXLEtBQUEsQ0FBTXR0QixJQUFBLEVBQU1zdEIsS0FBQSxDQUFNcnRCLEVBQUU7RUFDbEUsSUFBSXNoQyxZQUFBLEVBQWNDLGFBQUE7RUFFbEIsSUFBSWo2QixJQUFBLENBQUtpVCxLQUFBLENBQU1zVCxXQUFBLEtBQWdCLEtBQUswQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE1BQU1sb0IsSUFBQSxDQUFLaVQsS0FBQSxDQUFNdVQsZUFBQSxFQUFpQjtJQUMvRXdULFlBQUEsR0FBZWg2QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBO0lBQ3BDdWhDLGFBQUEsR0FBZ0I7RUFDcEIsT0FDSztJQUNERCxZQUFBLEdBQWVoNkIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQTtJQUNwQ3doQyxhQUFBLEdBQWdCO0VBQ3BCO0VBQ0FqNkIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNc1QsV0FBQSxHQUFjO0VBQ3pCLElBQUkyVCxNQUFBLEdBQVNDLFFBQUEsQ0FBU0osT0FBQSxDQUFRdDBCLE9BQUEsRUFBU3NnQixLQUFBLENBQU1ocEIsR0FBQSxDQUFJMEksT0FBQSxFQUFTc2dCLEtBQUEsQ0FBTXR0QixJQUFBLEVBQU11aEMsWUFBQSxFQUFjQyxhQUFhO0VBQ2pHLElBQUlDLE1BQUEsRUFDQWw2QixJQUFBLENBQUtpVCxLQUFBLENBQU1zVSxjQUFBO0VBQ2YsS0FBS3hwQixHQUFBLElBQU9pQyxJQUFBLENBQUtpVCxLQUFBLENBQU02VCxZQUFBLEdBQWVtQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxJQUFJLE9BQU85cEIsT0FBQSxLQUN0RGs2QixVQUFBLENBQVduTSxJQUFBLENBQUt4WCxDQUFBLElBQUtBLENBQUEsQ0FBRXRjLFFBQUEsSUFBWSxLQUFLLENBQUNrZCxRQUFBLENBQVMxYixJQUFBLENBQUs4YSxDQUFBLENBQUU3YSxRQUFRLENBQUMsTUFDakUsQ0FBQ29nQyxNQUFBLElBQVVBLE1BQUEsQ0FBT0UsSUFBQSxJQUFRRixNQUFBLENBQU9HLElBQUEsS0FDbENyNkIsSUFBQSxDQUFLRyxRQUFBLENBQVMsaUJBQWlCa0gsQ0FBQSxJQUFLQSxDQUFBLENBQUVySCxJQUFBLEVBQU0zRSxRQUFBLENBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHO0lBQ3JFMkUsSUFBQSxDQUFLaVQsS0FBQSxDQUFNNlQsWUFBQSxHQUFlO0lBQzFCO0VBQ0o7RUFDQSxJQUFJLENBQUNvVCxNQUFBLEVBQVE7SUFDVCxJQUFJdEMsUUFBQSxJQUFZbHdCLEdBQUEsWUFBZWhRLHdCQUFBLENBQUFxYixhQUFBLElBQWlCLENBQUNyTCxHQUFBLENBQUlzSixLQUFBLElBQVN0SixHQUFBLENBQUlTLEtBQUEsQ0FBTTJYLFVBQUEsQ0FBV3BZLEdBQUEsQ0FBSXdULE9BQU8sS0FDMUYsQ0FBQ2xiLElBQUEsQ0FBS3FSLFNBQUEsSUFBYSxFQUFFMFUsS0FBQSxDQUFNcmUsR0FBQSxJQUFPcWUsS0FBQSxDQUFNcmUsR0FBQSxDQUFJZ0YsTUFBQSxJQUFVcVosS0FBQSxDQUFNcmUsR0FBQSxDQUFJaUYsSUFBQSxHQUFPO01BQ3ZFdXRCLE1BQUEsR0FBUztRQUFFM3hCLEtBQUEsRUFBT2IsR0FBQSxDQUFJalAsSUFBQTtRQUFNMmhDLElBQUEsRUFBTTF5QixHQUFBLENBQUloUCxFQUFBO1FBQUkyaEMsSUFBQSxFQUFNM3lCLEdBQUEsQ0FBSWhQO01BQUc7SUFDM0QsT0FDSztNQUNELElBQUlxdEIsS0FBQSxDQUFNcmUsR0FBQSxFQUFLO1FBQ1gsSUFBSTRrQixJQUFBLEdBQU1nTyxnQkFBQSxDQUFpQnQ2QixJQUFBLEVBQU1BLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsRUFBS2dwQixLQUFBLENBQU1yZSxHQUFHO1FBQzFELElBQUk0a0IsSUFBQSxJQUFPLENBQUNBLElBQUEsQ0FBSTdkLEVBQUEsQ0FBR3pPLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQVMsR0FBRztVQUN0QyxJQUFJb1csRUFBQSxHQUFLL2QsSUFBQSxDQUFLd0YsS0FBQSxDQUFNdVksRUFBQSxDQUFHdFIsWUFBQSxDQUFhNmYsSUFBRztVQUN2QyxJQUFJakYsYUFBQSxFQUNBdEosRUFBQSxDQUFHaU0sT0FBQSxDQUFRLGVBQWUzQyxhQUFhO1VBQzNDcm5CLElBQUEsQ0FBSzhkLFFBQUEsQ0FBU0MsRUFBRTtRQUNwQjtNQUNKO01BQ0E7SUFDSjtFQUNKO0VBSUEsSUFBSS9kLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWxQLElBQUEsR0FBT3VILElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWpQLEVBQUEsSUFDakR3aEMsTUFBQSxDQUFPM3hCLEtBQUEsSUFBUzJ4QixNQUFBLENBQU9HLElBQUEsSUFDdkJyNkIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxZQUFxQmpRLHdCQUFBLENBQUFxYixhQUFBLEVBQWU7SUFDL0MsSUFBSW1uQixNQUFBLENBQU8zeEIsS0FBQSxHQUFRdkksSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQSxJQUFReWhDLE1BQUEsQ0FBTzN4QixLQUFBLElBQVN2SSxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFBLEdBQU8sS0FDeEZ1SCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFBLElBQVFzdEIsS0FBQSxDQUFNdHRCLElBQUEsRUFBTTtNQUN6Q3loQyxNQUFBLENBQU8zeEIsS0FBQSxHQUFRdkksSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQTtJQUN4QyxXQUNTeWhDLE1BQUEsQ0FBT0UsSUFBQSxHQUFPcDZCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTW1DLFNBQUEsQ0FBVWpQLEVBQUEsSUFBTXdoQyxNQUFBLENBQU9FLElBQUEsSUFBUXA2QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBLEdBQUssS0FDdkZzSCxJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBLElBQU1xdEIsS0FBQSxDQUFNcnRCLEVBQUEsRUFBSTtNQUNyQ3doQyxNQUFBLENBQU9HLElBQUEsSUFBU3I2QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBLEdBQUt3aEMsTUFBQSxDQUFPRSxJQUFBO01BQ2pERixNQUFBLENBQU9FLElBQUEsR0FBT3A2QixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVVqUCxFQUFBO0lBQ3ZDO0VBQ0o7RUFJQSxJQUFJNEUsRUFBQSxJQUFNQyxVQUFBLElBQWMsTUFBTTI4QixNQUFBLENBQU9HLElBQUEsSUFBUUgsTUFBQSxDQUFPM3hCLEtBQUEsR0FBUSxLQUN4RDJ4QixNQUFBLENBQU9FLElBQUEsSUFBUUYsTUFBQSxDQUFPM3hCLEtBQUEsSUFBUzJ4QixNQUFBLENBQU8zeEIsS0FBQSxHQUFRd2QsS0FBQSxDQUFNdHRCLElBQUEsSUFDcERzdEIsS0FBQSxDQUFNaHBCLEdBQUEsQ0FBSXdrQixXQUFBLENBQVkyWSxNQUFBLENBQU8zeEIsS0FBQSxHQUFRd2QsS0FBQSxDQUFNdHRCLElBQUEsR0FBTyxHQUFHeWhDLE1BQUEsQ0FBTzN4QixLQUFBLEdBQVF3ZCxLQUFBLENBQU10dEIsSUFBQSxHQUFPLENBQUMsS0FBSyxTQUFXO0lBQ2xHeWhDLE1BQUEsQ0FBTzN4QixLQUFBO0lBQ1AyeEIsTUFBQSxDQUFPRSxJQUFBO0lBQ1BGLE1BQUEsQ0FBT0csSUFBQTtFQUNYO0VBQ0EsSUFBSXh5QixLQUFBLEdBQVFrZSxLQUFBLENBQU1ocEIsR0FBQSxDQUFJdzlCLGNBQUEsQ0FBZUwsTUFBQSxDQUFPM3hCLEtBQUEsR0FBUXdkLEtBQUEsQ0FBTXR0QixJQUFJO0VBQzlELElBQUlxUCxHQUFBLEdBQU1pZSxLQUFBLENBQU1ocEIsR0FBQSxDQUFJdzlCLGNBQUEsQ0FBZUwsTUFBQSxDQUFPRyxJQUFBLEdBQU90VSxLQUFBLENBQU10dEIsSUFBSTtFQUMzRCxJQUFJK2hDLE1BQUEsR0FBUzMrQixJQUFBLENBQUlrTCxPQUFBLENBQVFtekIsTUFBQSxDQUFPM3hCLEtBQUs7RUFDckMsSUFBSWt5QixZQUFBLEdBQWU1eUIsS0FBQSxDQUFNaVksVUFBQSxDQUFXaFksR0FBRyxLQUFLRCxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLElBQWlCd3pCLE1BQUEsQ0FBT2h5QixHQUFBLENBQUksS0FBSzB4QixNQUFBLENBQU9FLElBQUE7RUFDakcsSUFBSU0sT0FBQTtFQUdKLEtBQU0zOEIsR0FBQSxJQUFPaUMsSUFBQSxDQUFLaVQsS0FBQSxDQUFNNlQsWUFBQSxHQUFlbUIsSUFBQSxDQUFLQyxHQUFBLENBQUksSUFBSSxRQUMvQyxDQUFDdVMsWUFBQSxJQUFnQm5DLFVBQUEsQ0FBV25NLElBQUEsQ0FBS3hYLENBQUEsSUFBS0EsQ0FBQSxDQUFFN2EsUUFBQSxJQUFZLFNBQVM2YSxDQUFBLENBQUU3YSxRQUFBLElBQVksR0FBRyxNQUM5RSxDQUFDMmdDLFlBQUEsSUFBZ0I1eUIsS0FBQSxDQUFNeEwsR0FBQSxHQUFNMHBCLEtBQUEsQ0FBTWhwQixHQUFBLENBQUkwSSxPQUFBLENBQVFDLElBQUEsS0FDM0MsQ0FBQ21DLEtBQUEsQ0FBTWlZLFVBQUEsQ0FBV2hZLEdBQUcsS0FBSyxDQUFDRCxLQUFBLENBQU0xUCxNQUFBLENBQU82TyxhQUFBLEtBQ3pDLENBQUMsS0FBS25OLElBQUEsQ0FBS2tzQixLQUFBLENBQU1ocEIsR0FBQSxDQUFJd2tCLFdBQUEsQ0FBWTFaLEtBQUEsQ0FBTXhMLEdBQUEsRUFBS3lMLEdBQUEsQ0FBSXpMLEdBQUEsRUFBSyxJQUFJLEVBQUUsQ0FBQyxNQUMzRHErQixPQUFBLEdBQVVoakMsd0JBQUEsQ0FBQW1qQixTQUFBLENBQVUrQyxRQUFBLENBQVNtSSxLQUFBLENBQU1ocEIsR0FBQSxDQUFJZ0ssT0FBQSxDQUFRYyxLQUFBLENBQU14TCxHQUFBLEdBQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUN2RXErQixPQUFBLENBQVEvdEIsSUFBQSxHQUFPOUUsS0FBQSxDQUFNeEwsR0FBQSxLQUN6QjJELElBQUEsQ0FBS0csUUFBQSxDQUFTLGlCQUFpQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFckgsSUFBQSxFQUFNM0UsUUFBQSxDQUFTLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRztJQUNyRTJFLElBQUEsQ0FBS2lULEtBQUEsQ0FBTTZULFlBQUEsR0FBZTtJQUMxQjtFQUNKO0VBRUEsSUFBSTltQixJQUFBLENBQUt3RixLQUFBLENBQU1tQyxTQUFBLENBQVUrRSxNQUFBLEdBQVN3dEIsTUFBQSxDQUFPM3hCLEtBQUEsSUFDckNveUIsa0JBQUEsQ0FBbUI5K0IsSUFBQSxFQUFLcStCLE1BQUEsQ0FBTzN4QixLQUFBLEVBQU8yeEIsTUFBQSxDQUFPRSxJQUFBLEVBQU12eUIsS0FBQSxFQUFPQyxHQUFHLEtBQzdEOUgsSUFBQSxDQUFLRyxRQUFBLENBQVMsaUJBQWlCa0gsQ0FBQSxJQUFLQSxDQUFBLENBQUVySCxJQUFBLEVBQU0zRSxRQUFBLENBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHO0lBQ3hFLElBQUkrQyxPQUFBLElBQVdULE1BQUEsRUFDWHFDLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWXliLHdCQUFBLENBQXlCO0lBQzlDO0VBQ0o7RUFJQSxJQUFJMzVCLE1BQUEsSUFBVXU4QixNQUFBLENBQU9HLElBQUEsSUFBUUgsTUFBQSxDQUFPM3hCLEtBQUEsRUFDaEN2SSxJQUFBLENBQUtpVCxLQUFBLENBQU1pVSxnQkFBQSxHQUFtQmUsSUFBQSxDQUFLQyxHQUFBLENBQUk7RUFTM0MsSUFBSTlwQixPQUFBLElBQVcsQ0FBQ3E4QixZQUFBLElBQWdCNXlCLEtBQUEsQ0FBTVUsS0FBQSxDQUFNLEtBQUtULEdBQUEsQ0FBSVMsS0FBQSxDQUFNLEtBQUtULEdBQUEsQ0FBSU8sWUFBQSxJQUFnQixLQUFLUixLQUFBLENBQU1vQixLQUFBLElBQVNuQixHQUFBLENBQUltQixLQUFBLElBQ3hHOGMsS0FBQSxDQUFNcmUsR0FBQSxJQUFPcWUsS0FBQSxDQUFNcmUsR0FBQSxDQUFJZ0YsTUFBQSxJQUFVcVosS0FBQSxDQUFNcmUsR0FBQSxDQUFJaUYsSUFBQSxJQUFRb1osS0FBQSxDQUFNcmUsR0FBQSxDQUFJaUYsSUFBQSxJQUFRdXRCLE1BQUEsQ0FBT0UsSUFBQSxFQUFNO0lBQ2xGRixNQUFBLENBQU9HLElBQUEsSUFBUTtJQUNmdnlCLEdBQUEsR0FBTWllLEtBQUEsQ0FBTWhwQixHQUFBLENBQUl3OUIsY0FBQSxDQUFlTCxNQUFBLENBQU9HLElBQUEsR0FBT3RVLEtBQUEsQ0FBTXR0QixJQUFJO0lBQ3ZEd2tCLFVBQUEsQ0FBVyxNQUFNO01BQ2JqZCxJQUFBLENBQUtHLFFBQUEsQ0FBUyxpQkFBaUIsVUFBVWtILENBQUEsRUFBRztRQUFFLE9BQU9BLENBQUEsQ0FBRXJILElBQUEsRUFBTTNFLFFBQUEsQ0FBUyxJQUFJLE9BQU8sQ0FBQztNQUFHLENBQUM7SUFDMUYsR0FBRyxFQUFFO0VBQ1Q7RUFDQSxJQUFJdS9CLE1BQUEsR0FBU1YsTUFBQSxDQUFPM3hCLEtBQUE7SUFBT3N5QixJQUFBLEdBQU9YLE1BQUEsQ0FBT0UsSUFBQTtFQUN6QyxJQUFJVSxJQUFBLEdBQVEzdUIsSUFBQSxJQUFTO0lBQ2pCLElBQUk0UixFQUFBLEdBQUs1UixJQUFBLElBQVFuTSxJQUFBLENBQUt3RixLQUFBLENBQU11WSxFQUFBLENBQUdnRSxPQUFBLENBQVE2WSxNQUFBLEVBQVFDLElBQUEsRUFBTTlVLEtBQUEsQ0FBTWhwQixHQUFBLENBQUkrUyxLQUFBLENBQU1vcUIsTUFBQSxDQUFPM3hCLEtBQUEsR0FBUXdkLEtBQUEsQ0FBTXR0QixJQUFBLEVBQU15aEMsTUFBQSxDQUFPRyxJQUFBLEdBQU90VSxLQUFBLENBQU10dEIsSUFBSSxDQUFDO0lBQ3pILElBQUlzdEIsS0FBQSxDQUFNcmUsR0FBQSxFQUFLO01BQ1gsSUFBSTRrQixJQUFBLEdBQU1nTyxnQkFBQSxDQUFpQnQ2QixJQUFBLEVBQU0rZCxFQUFBLENBQUdoaEIsR0FBQSxFQUFLZ3BCLEtBQUEsQ0FBTXJlLEdBQUc7TUFNbEQsSUFBSTRrQixJQUFBLElBQU8sRUFBRTN1QixNQUFBLElBQVVxQyxJQUFBLENBQUtxUixTQUFBLElBQWFpYixJQUFBLENBQUl0YixLQUFBLEtBQ3hDa3BCLE1BQUEsQ0FBTzN4QixLQUFBLElBQVMyeEIsTUFBQSxDQUFPRyxJQUFBLElBQVFyNkIsSUFBQSxDQUFLaVQsS0FBQSxDQUFNaVUsZ0JBQUEsR0FBbUJlLElBQUEsQ0FBS0MsR0FBQSxDQUFJLElBQUksU0FDMUVvRSxJQUFBLENBQUkzZixJQUFBLElBQVFpdUIsTUFBQSxJQUFVdE8sSUFBQSxDQUFJM2YsSUFBQSxJQUFRb1IsRUFBQSxDQUFHaVMsT0FBQSxDQUFRdEssR0FBQSxDQUFJbVYsSUFBSSxJQUFJLE1BQzFEdjlCLEVBQUEsSUFBTWd2QixJQUFBLENBQUl0YixLQUFBLElBQVNzYixJQUFBLENBQUkzZixJQUFBLElBQVFpdUIsTUFBQSxHQUMvQjdjLEVBQUEsQ0FBR3RSLFlBQUEsQ0FBYTZmLElBQUc7SUFDM0I7SUFDQSxJQUFJakYsYUFBQSxFQUNBdEosRUFBQSxDQUFHaU0sT0FBQSxDQUFRLGVBQWUzQyxhQUFhO0lBQzNDLE9BQU90SixFQUFBLENBQUdDLGNBQUEsQ0FBZTtFQUM3QjtFQUNBLElBQUkrYyxVQUFBO0VBQ0osSUFBSU4sWUFBQSxFQUFjO0lBQ2QsSUFBSTV5QixLQUFBLENBQU14TCxHQUFBLElBQU95TCxHQUFBLENBQUl6TCxHQUFBLEVBQUs7TUFHdEIsSUFBSWlCLEVBQUEsSUFBTUMsVUFBQSxJQUFjLE1BQU1zSyxLQUFBLENBQU1RLFlBQUEsSUFBZ0IsR0FBRztRQUNuRHJJLElBQUEsQ0FBSzZiLFdBQUEsQ0FBWXliLHdCQUFBLENBQXlCO1FBQzFDcmEsVUFBQSxDQUFXLE1BQU16QixjQUFBLENBQWV4YixJQUFJLEdBQUcsRUFBRTtNQUM3QztNQUNBLElBQUkrZCxFQUFBLEdBQUsrYyxJQUFBLENBQUs5NkIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNdVksRUFBQSxDQUFHaUMsTUFBQSxDQUFPNGEsTUFBQSxFQUFRQyxJQUFJLENBQUM7TUFDaEQsSUFBSWhwQixLQUFBLEdBQVFoVyxJQUFBLENBQUlrTCxPQUFBLENBQVFtekIsTUFBQSxDQUFPM3hCLEtBQUssRUFBRXl5QixXQUFBLENBQVluL0IsSUFBQSxDQUFJa0wsT0FBQSxDQUFRbXpCLE1BQUEsQ0FBT0UsSUFBSSxDQUFDO01BQzFFLElBQUl2b0IsS0FBQSxFQUNBa00sRUFBQSxDQUFHa2QsV0FBQSxDQUFZcHBCLEtBQUs7TUFDeEI3UixJQUFBLENBQUs4ZCxRQUFBLENBQVNDLEVBQUU7SUFDcEI7SUFBQTtJQUVBbWMsTUFBQSxDQUFPRSxJQUFBLElBQVFGLE1BQUEsQ0FBT0csSUFBQSxLQUNqQlUsVUFBQSxHQUFhRyxZQUFBLENBQWFyekIsS0FBQSxDQUFNMVAsTUFBQSxDQUFPc04sT0FBQSxDQUFRbVAsR0FBQSxDQUFJL00sS0FBQSxDQUFNUSxZQUFBLEVBQWNQLEdBQUEsQ0FBSU8sWUFBWSxHQUFHbXlCLE1BQUEsQ0FBT3JpQyxNQUFBLENBQU9zTixPQUFBLENBQVFtUCxHQUFBLENBQUk0bEIsTUFBQSxDQUFPbnlCLFlBQUEsRUFBYzZ4QixNQUFBLENBQU9FLElBQUEsR0FBT0ksTUFBQSxDQUFPanlCLEtBQUEsQ0FBTSxDQUFDLENBQUMsSUFBSTtNQUMzSyxJQUFJd1YsRUFBQSxHQUFLK2MsSUFBQSxDQUFLOTZCLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXVZLEVBQUU7TUFDM0IsSUFBSWdkLFVBQUEsQ0FBV3Z0QixJQUFBLElBQVEsT0FDbkJ1USxFQUFBLENBQUdvZCxPQUFBLENBQVFQLE1BQUEsRUFBUUMsSUFBQSxFQUFNRSxVQUFBLENBQVd4d0IsSUFBSSxPQUV4Q3dULEVBQUEsQ0FBR3FkLFVBQUEsQ0FBV1IsTUFBQSxFQUFRQyxJQUFBLEVBQU1FLFVBQUEsQ0FBV3h3QixJQUFJO01BQy9DdkssSUFBQSxDQUFLOGQsUUFBQSxDQUFTQyxFQUFFO0lBQ3BCLFdBQ1NsVyxLQUFBLENBQU0xUCxNQUFBLENBQU82QixLQUFBLENBQU02TixLQUFBLENBQU03UCxLQUFBLENBQU0sQ0FBQyxFQUFFME0sTUFBQSxJQUFVbUQsS0FBQSxDQUFNN1AsS0FBQSxDQUFNLEtBQUs4UCxHQUFBLENBQUk5UCxLQUFBLENBQU0sS0FBSzhQLEdBQUEsQ0FBSXFXLFVBQUEsR0FBYSxJQUFJLElBQUk7TUFFMUcsSUFBSXBRLElBQUEsR0FBT2xHLEtBQUEsQ0FBTTFQLE1BQUEsQ0FBT29wQixXQUFBLENBQVkxWixLQUFBLENBQU1RLFlBQUEsRUFBY1AsR0FBQSxDQUFJTyxZQUFZO01BQ3hFLElBQUkrZ0IsS0FBQSxHQUFRQSxDQUFBLEtBQU0wUixJQUFBLENBQUs5NkIsSUFBQSxDQUFLd0YsS0FBQSxDQUFNdVksRUFBQSxDQUFHc0wsVUFBQSxDQUFXdGIsSUFBQSxFQUFNNnNCLE1BQUEsRUFBUUMsSUFBSSxDQUFDO01BQ25FLElBQUksQ0FBQzc2QixJQUFBLENBQUtHLFFBQUEsQ0FBUyxtQkFBbUJrSCxDQUFBLElBQUtBLENBQUEsQ0FBRXJILElBQUEsRUFBTTQ2QixNQUFBLEVBQVFDLElBQUEsRUFBTTlzQixJQUFBLEVBQU1xYixLQUFLLENBQUMsR0FDekVwcEIsSUFBQSxDQUFLOGQsUUFBQSxDQUFTc0wsS0FBQSxDQUFNLENBQUM7SUFDN0I7RUFDSixPQUNLO0lBQ0RwcEIsSUFBQSxDQUFLOGQsUUFBQSxDQUFTZ2QsSUFBQSxDQUFLLENBQUM7RUFDeEI7QUFDSjtBQUNBLFNBQVNSLGlCQUFpQnQ2QixJQUFBLEVBQU1uRSxJQUFBLEVBQUt3L0IsU0FBQSxFQUFXO0VBQzVDLElBQUk5K0IsSUFBQSxDQUFLK0UsR0FBQSxDQUFJKzVCLFNBQUEsQ0FBVTN1QixNQUFBLEVBQVEydUIsU0FBQSxDQUFVMXVCLElBQUksSUFBSTlRLElBQUEsQ0FBSTRKLE9BQUEsQ0FBUUMsSUFBQSxFQUN6RCxPQUFPO0VBQ1gsT0FBT3lWLGdCQUFBLENBQWlCbmIsSUFBQSxFQUFNbkUsSUFBQSxDQUFJa0wsT0FBQSxDQUFRczBCLFNBQUEsQ0FBVTN1QixNQUFNLEdBQUc3USxJQUFBLENBQUlrTCxPQUFBLENBQVFzMEIsU0FBQSxDQUFVMXVCLElBQUksQ0FBQztBQUM1RjtBQUlBLFNBQVN1dUIsYUFBYXRnQyxHQUFBLEVBQUswSyxJQUFBLEVBQU07RUFDN0IsSUFBSWcyQixRQUFBLEdBQVcxZ0MsR0FBQSxDQUFJeUksVUFBQSxDQUFXd08sS0FBQTtJQUFPMHBCLFNBQUEsR0FBWWoyQixJQUFBLENBQUtqQyxVQUFBLENBQVd3TyxLQUFBO0VBQ2pFLElBQUlnbUIsS0FBQSxHQUFReUQsUUFBQTtJQUFVNUgsT0FBQSxHQUFVNkgsU0FBQTtJQUFXL3RCLElBQUE7SUFBTWpELElBQUE7SUFBTWlKLE1BQUE7RUFDdkQsU0FBU25SLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlrNUIsU0FBQSxDQUFVdmlDLE1BQUEsRUFBUXFKLENBQUEsSUFDbEN3MUIsS0FBQSxHQUFRMEQsU0FBQSxDQUFVbDVCLENBQUMsRUFBRW01QixhQUFBLENBQWMzRCxLQUFLO0VBQzVDLFNBQVN4MUIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWk1QixRQUFBLENBQVN0aUMsTUFBQSxFQUFRcUosQ0FBQSxJQUNqQ3F4QixPQUFBLEdBQVU0SCxRQUFBLENBQVNqNUIsQ0FBQyxFQUFFbTVCLGFBQUEsQ0FBYzlILE9BQU87RUFDL0MsSUFBSW1FLEtBQUEsQ0FBTTcrQixNQUFBLElBQVUsS0FBSzA2QixPQUFBLENBQVExNkIsTUFBQSxJQUFVLEdBQUc7SUFDMUN1UixJQUFBLEdBQU9zdEIsS0FBQSxDQUFNLENBQUM7SUFDZHJxQixJQUFBLEdBQU87SUFDUGdHLE1BQUEsR0FBVXpiLElBQUEsSUFBU0EsSUFBQSxDQUFLd1MsSUFBQSxDQUFLQSxJQUFBLENBQUtreEIsUUFBQSxDQUFTMWpDLElBQUEsQ0FBSzhaLEtBQUssQ0FBQztFQUMxRCxXQUNTZ21CLEtBQUEsQ0FBTTcrQixNQUFBLElBQVUsS0FBSzA2QixPQUFBLENBQVExNkIsTUFBQSxJQUFVLEdBQUc7SUFDL0N1UixJQUFBLEdBQU9tcEIsT0FBQSxDQUFRLENBQUM7SUFDaEJsbUIsSUFBQSxHQUFPO0lBQ1BnRyxNQUFBLEdBQVV6YixJQUFBLElBQVNBLElBQUEsQ0FBS3dTLElBQUEsQ0FBS0EsSUFBQSxDQUFLaXhCLGFBQUEsQ0FBY3pqQyxJQUFBLENBQUs4WixLQUFLLENBQUM7RUFDL0QsT0FDSztJQUNELE9BQU87RUFDWDtFQUNBLElBQUlvRyxPQUFBLEdBQVUsRUFBQztFQUNmLFNBQVM1VixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJaUQsSUFBQSxDQUFLeU0sVUFBQSxFQUFZMVAsQ0FBQSxJQUNqQzRWLE9BQUEsQ0FBUWpXLElBQUEsQ0FBS3dSLE1BQUEsQ0FBT2xPLElBQUEsQ0FBS3RMLEtBQUEsQ0FBTXFJLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLElBQUl6Syx3QkFBQSxDQUFBbVosUUFBQSxDQUFTdFksSUFBQSxDQUFLd2YsT0FBTyxFQUFFeEosRUFBQSxDQUFHN1QsR0FBRyxHQUM3QixPQUFPO0lBQUUyUCxJQUFBO0lBQU1pRDtFQUFLO0FBQzVCO0FBQ0EsU0FBU210QixtQkFBbUJlLEdBQUEsRUFBS256QixLQUFBLEVBQU9DLEdBQUEsRUFBS216QixTQUFBLEVBQVdDLE9BQUEsRUFBUztFQUM3RDtFQUFBO0VBQ0FwekIsR0FBQSxHQUFNRCxLQUFBLElBQVNxekIsT0FBQSxDQUFRdi9CLEdBQUEsR0FBTXMvQixTQUFBLENBQVV0L0IsR0FBQTtFQUFBO0VBRW5Ddy9CLHFCQUFBLENBQXNCRixTQUFBLEVBQVcsTUFBTSxLQUFLLElBQUlDLE9BQUEsQ0FBUXYvQixHQUFBLEVBQ3hELE9BQU87RUFDWCxJQUFJc2hCLE1BQUEsR0FBUytkLEdBQUEsQ0FBSTMwQixPQUFBLENBQVF3QixLQUFLO0VBRTlCLElBQUksQ0FBQ296QixTQUFBLENBQVV4akMsTUFBQSxDQUFPaVEsV0FBQSxFQUFhO0lBQy9CLElBQUlsQixLQUFBLEdBQVF5VyxNQUFBLENBQU9VLFNBQUE7SUFDbkIsT0FBT25YLEtBQUEsSUFBUyxRQUFRc0IsR0FBQSxJQUFPRCxLQUFBLEdBQVFyQixLQUFBLENBQU12TixRQUFBO0VBQ2pEO0VBRUEsSUFBSWdrQixNQUFBLENBQU90VixZQUFBLEdBQWVzVixNQUFBLENBQU94bEIsTUFBQSxDQUFPc04sT0FBQSxDQUFRQyxJQUFBLElBQVEsQ0FBQ2lZLE1BQUEsQ0FBT3hsQixNQUFBLENBQU9pUSxXQUFBLEVBQ25FLE9BQU87RUFDWCxJQUFJMHpCLEtBQUEsR0FBUUosR0FBQSxDQUFJMzBCLE9BQUEsQ0FBUTgwQixxQkFBQSxDQUFzQmxlLE1BQUEsRUFBUSxNQUFNLElBQUksQ0FBQztFQUVqRSxJQUFJLENBQUNtZSxLQUFBLENBQU0zakMsTUFBQSxDQUFPaVEsV0FBQSxJQUFlMHpCLEtBQUEsQ0FBTXovQixHQUFBLEdBQU1tTSxHQUFBLElBQ3pDcXpCLHFCQUFBLENBQXNCQyxLQUFBLEVBQU8sTUFBTSxLQUFLLElBQUl0ekIsR0FBQSxFQUM1QyxPQUFPO0VBRVgsT0FBT216QixTQUFBLENBQVV4akMsTUFBQSxDQUFPc04sT0FBQSxDQUFRbVAsR0FBQSxDQUFJK21CLFNBQUEsQ0FBVXR6QixZQUFZLEVBQUVvRyxFQUFBLENBQUdxdEIsS0FBQSxDQUFNM2pDLE1BQUEsQ0FBT3NOLE9BQU87QUFDdkY7QUFDQSxTQUFTbzJCLHNCQUFzQmowQixJQUFBLEVBQU1tMEIsT0FBQSxFQUFTQyxPQUFBLEVBQVM7RUFDbkQsSUFBSS95QixLQUFBLEdBQVFyQixJQUFBLENBQUtxQixLQUFBO0lBQU9ULEdBQUEsR0FBTXV6QixPQUFBLEdBQVVuMEIsSUFBQSxDQUFLWSxHQUFBLENBQUksSUFBSVosSUFBQSxDQUFLdkwsR0FBQTtFQUMxRCxPQUFPNE0sS0FBQSxHQUFRLE1BQU04eUIsT0FBQSxJQUFXbjBCLElBQUEsQ0FBS3EwQixVQUFBLENBQVdoekIsS0FBSyxLQUFLckIsSUFBQSxDQUFLN1AsSUFBQSxDQUFLa1IsS0FBSyxFQUFFOEksVUFBQSxHQUFhO0lBQ3BGOUksS0FBQTtJQUNBVCxHQUFBO0lBQ0F1ekIsT0FBQSxHQUFVO0VBQ2Q7RUFDQSxJQUFJQyxPQUFBLEVBQVM7SUFDVCxJQUFJMzJCLElBQUEsR0FBT3VDLElBQUEsQ0FBSzdQLElBQUEsQ0FBS2tSLEtBQUssRUFBRWtzQixVQUFBLENBQVd2dEIsSUFBQSxDQUFLcTBCLFVBQUEsQ0FBV2h6QixLQUFLLENBQUM7SUFDN0QsT0FBTzVELElBQUEsSUFBUSxDQUFDQSxJQUFBLENBQUs2TCxNQUFBLEVBQVE7TUFDekI3TCxJQUFBLEdBQU9BLElBQUEsQ0FBS2hDLFVBQUE7TUFDWm1GLEdBQUE7SUFDSjtFQUNKO0VBQ0EsT0FBT0EsR0FBQTtBQUNYO0FBQ0EsU0FBUzJ4QixTQUFTeGpCLENBQUEsRUFBR0MsQ0FBQSxFQUFHdmEsR0FBQSxFQUFLMjlCLFlBQUEsRUFBY0MsYUFBQSxFQUFlO0VBQ3RELElBQUkxeEIsS0FBQSxHQUFRb08sQ0FBQSxDQUFFdWxCLGFBQUEsQ0FBY3RsQixDQUFBLEVBQUd2YSxHQUFHO0VBQ2xDLElBQUlrTSxLQUFBLElBQVMsTUFDVCxPQUFPO0VBQ1gsSUFBSTtJQUFFb08sQ0FBQSxFQUFHeWpCLElBQUE7SUFBTXhqQixDQUFBLEVBQUd5akI7RUFBSyxJQUFJMWpCLENBQUEsQ0FBRXdsQixXQUFBLENBQVl2bEIsQ0FBQSxFQUFHdmEsR0FBQSxHQUFNc2EsQ0FBQSxDQUFFalIsSUFBQSxFQUFNckosR0FBQSxHQUFNdWEsQ0FBQSxDQUFFbFIsSUFBSTtFQUN0RSxJQUFJdTBCLGFBQUEsSUFBaUIsT0FBTztJQUN4QixJQUFJbUMsTUFBQSxHQUFTNy9CLElBQUEsQ0FBSytFLEdBQUEsQ0FBSSxHQUFHaUgsS0FBQSxHQUFRaE0sSUFBQSxDQUFLQyxHQUFBLENBQUk0OUIsSUFBQSxFQUFNQyxJQUFJLENBQUM7SUFDckRMLFlBQUEsSUFBZ0JJLElBQUEsR0FBT2dDLE1BQUEsR0FBUzd6QixLQUFBO0VBQ3BDO0VBQ0EsSUFBSTZ4QixJQUFBLEdBQU83eEIsS0FBQSxJQUFTb08sQ0FBQSxDQUFFalIsSUFBQSxHQUFPa1IsQ0FBQSxDQUFFbFIsSUFBQSxFQUFNO0lBQ2pDLElBQUkrbEIsSUFBQSxHQUFPdU8sWUFBQSxJQUFnQnp4QixLQUFBLElBQVN5eEIsWUFBQSxJQUFnQkksSUFBQSxHQUFPN3hCLEtBQUEsR0FBUXl4QixZQUFBLEdBQWU7SUFDbEZ6eEIsS0FBQSxJQUFTa2pCLElBQUE7SUFDVCxJQUFJbGpCLEtBQUEsSUFBU0EsS0FBQSxHQUFRcU8sQ0FBQSxDQUFFbFIsSUFBQSxJQUFRMjJCLGVBQUEsQ0FBZ0J6bEIsQ0FBQSxDQUFFMkssV0FBQSxDQUFZaFosS0FBQSxHQUFRLEdBQUdBLEtBQUEsR0FBUSxDQUFDLENBQUMsR0FDOUVBLEtBQUEsSUFBU2tqQixJQUFBLEdBQU8sSUFBSTtJQUN4QjRPLElBQUEsR0FBTzl4QixLQUFBLElBQVM4eEIsSUFBQSxHQUFPRCxJQUFBO0lBQ3ZCQSxJQUFBLEdBQU83eEIsS0FBQTtFQUNYLFdBQ1M4eEIsSUFBQSxHQUFPOXhCLEtBQUEsRUFBTztJQUNuQixJQUFJa2pCLElBQUEsR0FBT3VPLFlBQUEsSUFBZ0J6eEIsS0FBQSxJQUFTeXhCLFlBQUEsSUFBZ0JLLElBQUEsR0FBTzl4QixLQUFBLEdBQVF5eEIsWUFBQSxHQUFlO0lBQ2xGenhCLEtBQUEsSUFBU2tqQixJQUFBO0lBQ1QsSUFBSWxqQixLQUFBLElBQVNBLEtBQUEsR0FBUW9PLENBQUEsQ0FBRWpSLElBQUEsSUFBUTIyQixlQUFBLENBQWdCMWxCLENBQUEsQ0FBRTRLLFdBQUEsQ0FBWWhaLEtBQUEsR0FBUSxHQUFHQSxLQUFBLEdBQVEsQ0FBQyxDQUFDLEdBQzlFQSxLQUFBLElBQVNrakIsSUFBQSxHQUFPLElBQUk7SUFDeEIyTyxJQUFBLEdBQU83eEIsS0FBQSxJQUFTNnhCLElBQUEsR0FBT0MsSUFBQTtJQUN2QkEsSUFBQSxHQUFPOXhCLEtBQUE7RUFDWDtFQUNBLE9BQU87SUFBRUEsS0FBQTtJQUFPNnhCLElBQUE7SUFBTUM7RUFBSztBQUMvQjtBQUNBLFNBQVNnQyxnQkFBZ0JqaUIsR0FBQSxFQUFLO0VBQzFCLElBQUlBLEdBQUEsQ0FBSXBoQixNQUFBLElBQVUsR0FDZCxPQUFPO0VBQ1gsSUFBSTJkLENBQUEsR0FBSXlELEdBQUEsQ0FBSWtpQixVQUFBLENBQVcsQ0FBQztJQUFHMWxCLENBQUEsR0FBSXdELEdBQUEsQ0FBSWtpQixVQUFBLENBQVcsQ0FBQztFQUMvQyxPQUFPM2xCLENBQUEsSUFBSyxTQUFVQSxDQUFBLElBQUssU0FBVUMsQ0FBQSxJQUFLLFNBQVVBLENBQUEsSUFBSztBQUM3RDtBQUtBLElBQU10ZixvQkFBQSxHQUF1QmtxQixrQkFBQTtBQUk3QixJQUFNbnFCLGdCQUFBLEdBQW1CcXpCLGNBQUE7QUFNekIsSUFBTXR6QixVQUFBLEdBQU4sTUFBaUI7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVFiNlMsWUFBWXN5QixLQUFBLEVBQU9DLEtBQUEsRUFBTztJQUN0QixLQUFLQyxLQUFBLEdBQVE7SUFJYixLQUFLMVMsT0FBQSxHQUFVO0lBSWYsS0FBS3JWLFdBQUEsR0FBYztJQUNuQixLQUFLZ29CLE9BQUEsR0FBVTtJQUlmLEtBQUtyUSxVQUFBLEdBQWE7SUFJbEIsS0FBS25RLGFBQUEsR0FBZ0I7SUFJckIsS0FBS2tCLG9CQUFBLEdBQXVCO0lBSTVCLEtBQUtuSyxLQUFBLEdBQVEsSUFBSXFULFVBQUE7SUFDakIsS0FBS3FXLGlCQUFBLEdBQW9CLEVBQUM7SUFDMUIsS0FBS0MsV0FBQSxHQUFjLEVBQUM7SUFNcEIsS0FBS3RrQixxQkFBQSxHQUF3QjtJQU03QixLQUFLaVgsUUFBQSxHQUFXO0lBQ2hCLEtBQUtzTixNQUFBLEdBQVNMLEtBQUE7SUFDZCxLQUFLaDNCLEtBQUEsR0FBUWczQixLQUFBLENBQU1oM0IsS0FBQTtJQUNuQixLQUFLczNCLGFBQUEsR0FBZ0JOLEtBQUEsQ0FBTU8sT0FBQSxJQUFXLEVBQUM7SUFDdkMsS0FBS0QsYUFBQSxDQUFjN2EsT0FBQSxDQUFRK2EsbUJBQW1CO0lBQzlDLEtBQUtsZixRQUFBLEdBQVcsS0FBS0EsUUFBQSxDQUFTME4sSUFBQSxDQUFLLElBQUk7SUFDdkMsS0FBSzl3QixHQUFBLEdBQU82aEMsS0FBQSxJQUFTQSxLQUFBLENBQU1VLEtBQUEsSUFBVXJrQyxRQUFBLENBQVN5VixhQUFBLENBQWMsS0FBSztJQUNqRSxJQUFJa3VCLEtBQUEsRUFBTztNQUNQLElBQUlBLEtBQUEsQ0FBTWp1QixXQUFBLEVBQ05pdUIsS0FBQSxDQUFNanVCLFdBQUEsQ0FBWSxLQUFLNVQsR0FBRyxXQUNyQixPQUFPNmhDLEtBQUEsSUFBUyxZQUNyQkEsS0FBQSxDQUFNLEtBQUs3aEMsR0FBRyxXQUNUNmhDLEtBQUEsQ0FBTVUsS0FBQSxFQUNYLEtBQUtQLE9BQUEsR0FBVTtJQUN2QjtJQUNBLEtBQUtyaEIsUUFBQSxHQUFXNmhCLFdBQUEsQ0FBWSxJQUFJO0lBQ2hDQyxtQkFBQSxDQUFvQixJQUFJO0lBQ3hCLEtBQUs1dEIsU0FBQSxHQUFZNnRCLGNBQUEsQ0FBZSxJQUFJO0lBQ3BDLEtBQUtsNUIsT0FBQSxHQUFVbVEsV0FBQSxDQUFZLEtBQUs3TyxLQUFBLENBQU16SSxHQUFBLEVBQUtzZ0MsY0FBQSxDQUFlLElBQUksR0FBR3ZILGVBQUEsQ0FBZ0IsSUFBSSxHQUFHLEtBQUtwN0IsR0FBQSxFQUFLLElBQUk7SUFDdEcsS0FBS21oQixXQUFBLEdBQWMsSUFBSTBhLFdBQUEsQ0FBWSxNQUFNLENBQUM5OUIsSUFBQSxFQUFNQyxFQUFBLEVBQUlrL0IsUUFBQSxFQUFVQyxLQUFBLEtBQVUrQixhQUFBLENBQWMsTUFBTW5oQyxJQUFBLEVBQU1DLEVBQUEsRUFBSWsvQixRQUFBLEVBQVVDLEtBQUssQ0FBQztJQUN0SCxLQUFLaGMsV0FBQSxDQUFZdFQsS0FBQSxDQUFNO0lBQ3ZCa2YsU0FBQSxDQUFVLElBQUk7SUFDZCxLQUFLNlYsaUJBQUEsQ0FBa0I7RUFDM0I7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUEsSUFBSWpzQixVQUFBLEVBQVk7SUFBRSxPQUFPLEtBQUs0QixLQUFBLENBQU01QixTQUFBO0VBQVc7RUFBQTtBQUFBO0FBQUE7RUFJL0MsSUFBSW1yQixNQUFBLEVBQVE7SUFDUixJQUFJLEtBQUtLLE1BQUEsQ0FBT3IzQixLQUFBLElBQVMsS0FBS0EsS0FBQSxFQUFPO01BQ2pDLElBQUlGLElBQUEsR0FBTyxLQUFLdTNCLE1BQUE7TUFDaEIsS0FBS0EsTUFBQSxHQUFTLENBQUM7TUFDZixTQUFTcnRCLElBQUEsSUFBUWxLLElBQUEsRUFDYixLQUFLdTNCLE1BQUEsQ0FBT3J0QixJQUFJLElBQUlsSyxJQUFBLENBQUtrSyxJQUFJO01BQ2pDLEtBQUtxdEIsTUFBQSxDQUFPcjNCLEtBQUEsR0FBUSxLQUFLQSxLQUFBO0lBQzdCO0lBQ0EsT0FBTyxLQUFLcTNCLE1BQUE7RUFDaEI7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBcnBCLE9BQU9ncEIsS0FBQSxFQUFPO0lBQ1YsSUFBSUEsS0FBQSxDQUFNZSxlQUFBLElBQW1CLEtBQUtWLE1BQUEsQ0FBT1UsZUFBQSxFQUNyQ3hWLGVBQUEsQ0FBZ0IsSUFBSTtJQUN4QixJQUFJeVYsU0FBQSxHQUFZLEtBQUtYLE1BQUE7SUFDckIsS0FBS0EsTUFBQSxHQUFTTCxLQUFBO0lBQ2QsSUFBSUEsS0FBQSxDQUFNTyxPQUFBLEVBQVM7TUFDZlAsS0FBQSxDQUFNTyxPQUFBLENBQVE5YSxPQUFBLENBQVErYSxtQkFBbUI7TUFDekMsS0FBS0YsYUFBQSxHQUFnQk4sS0FBQSxDQUFNTyxPQUFBO0lBQy9CO0lBQ0EsS0FBS1UsZ0JBQUEsQ0FBaUJqQixLQUFBLENBQU1oM0IsS0FBQSxFQUFPZzRCLFNBQVM7RUFDaEQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUFFLFNBQVNsQixLQUFBLEVBQU87SUFDWixJQUFJdmtCLE9BQUEsR0FBVSxDQUFDO0lBQ2YsU0FBU3pJLElBQUEsSUFBUSxLQUFLcXRCLE1BQUEsRUFDbEI1a0IsT0FBQSxDQUFRekksSUFBSSxJQUFJLEtBQUtxdEIsTUFBQSxDQUFPcnRCLElBQUk7SUFDcEN5SSxPQUFBLENBQVF6UyxLQUFBLEdBQVEsS0FBS0EsS0FBQTtJQUNyQixTQUFTZ0ssSUFBQSxJQUFRZ3RCLEtBQUEsRUFDYnZrQixPQUFBLENBQVF6SSxJQUFJLElBQUlndEIsS0FBQSxDQUFNaHRCLElBQUk7SUFDOUIsS0FBS2dFLE1BQUEsQ0FBT3lFLE9BQU87RUFDdkI7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBelEsWUFBWWhDLEtBQUEsRUFBTztJQUNmLEtBQUtpNEIsZ0JBQUEsQ0FBaUJqNEIsS0FBQSxFQUFPLEtBQUtxM0IsTUFBTTtFQUM1QztFQUNBWSxpQkFBaUJqNEIsS0FBQSxFQUFPZzRCLFNBQUEsRUFBVztJQUMvQixJQUFJOWpDLEVBQUE7SUFDSixJQUFJNEwsSUFBQSxHQUFPLEtBQUtFLEtBQUE7TUFBT200QixNQUFBLEdBQVM7TUFBT0MsU0FBQSxHQUFZO0lBR25ELElBQUlwNEIsS0FBQSxDQUFNMG1CLFdBQUEsSUFBZSxLQUFLN2EsU0FBQSxFQUFXO01BQ3JDd2IsZ0JBQUEsQ0FBaUIsSUFBSTtNQUNyQitRLFNBQUEsR0FBWTtJQUNoQjtJQUNBLEtBQUtwNEIsS0FBQSxHQUFRQSxLQUFBO0lBQ2IsSUFBSXE0QixjQUFBLEdBQWlCdjRCLElBQUEsQ0FBS3kzQixPQUFBLElBQVd2M0IsS0FBQSxDQUFNdTNCLE9BQUEsSUFBVyxLQUFLRixNQUFBLENBQU9FLE9BQUEsSUFBV1MsU0FBQSxDQUFVVCxPQUFBO0lBQ3ZGLElBQUljLGNBQUEsSUFBa0IsS0FBS2hCLE1BQUEsQ0FBT0UsT0FBQSxJQUFXUyxTQUFBLENBQVVULE9BQUEsSUFBVyxLQUFLRixNQUFBLENBQU90dEIsU0FBQSxJQUFhaXVCLFNBQUEsQ0FBVWp1QixTQUFBLEVBQVc7TUFDNUcsSUFBSUEsU0FBQSxHQUFZNnRCLGNBQUEsQ0FBZSxJQUFJO01BQ25DLElBQUlVLGdCQUFBLENBQWlCdnVCLFNBQUEsRUFBVyxLQUFLQSxTQUFTLEdBQUc7UUFDN0MsS0FBS0EsU0FBQSxHQUFZQSxTQUFBO1FBQ2pCb3VCLE1BQUEsR0FBUztNQUNiO0lBQ0o7SUFDQSxJQUFJRSxjQUFBLElBQWtCTCxTQUFBLENBQVVELGVBQUEsSUFBbUIsS0FBS1YsTUFBQSxDQUFPVSxlQUFBLEVBQWlCO01BQzVFeFYsZUFBQSxDQUFnQixJQUFJO0lBQ3hCO0lBQ0EsS0FBSzFNLFFBQUEsR0FBVzZoQixXQUFBLENBQVksSUFBSTtJQUNoQ0MsbUJBQUEsQ0FBb0IsSUFBSTtJQUN4QixJQUFJenlCLFNBQUEsR0FBWW9yQixlQUFBLENBQWdCLElBQUk7TUFBR3JyQixTQUFBLEdBQVk0eUIsY0FBQSxDQUFlLElBQUk7SUFDdEUsSUFBSVUsTUFBQSxHQUFTejRCLElBQUEsQ0FBS3kzQixPQUFBLElBQVd2M0IsS0FBQSxDQUFNdTNCLE9BQUEsSUFBVyxDQUFDejNCLElBQUEsQ0FBS3ZJLEdBQUEsQ0FBSTBSLEVBQUEsQ0FBR2pKLEtBQUEsQ0FBTXpJLEdBQUcsSUFBSSxVQUNsRXlJLEtBQUEsQ0FBTTJ5QixpQkFBQSxHQUFvQjd5QixJQUFBLENBQUs2eUIsaUJBQUEsR0FBb0IsaUJBQWlCO0lBQzFFLElBQUk2RixTQUFBLEdBQVlMLE1BQUEsSUFBVSxDQUFDLEtBQUt6NUIsT0FBQSxDQUFRc0csV0FBQSxDQUFZaEYsS0FBQSxDQUFNekksR0FBQSxFQUFLME4sU0FBQSxFQUFXQyxTQUFTO0lBQ25GLElBQUlzekIsU0FBQSxJQUFhLENBQUN4NEIsS0FBQSxDQUFNbUMsU0FBQSxDQUFVOEcsRUFBQSxDQUFHbkosSUFBQSxDQUFLcUMsU0FBUyxHQUMvQ2kyQixTQUFBLEdBQVk7SUFDaEIsSUFBSUssWUFBQSxHQUFlRixNQUFBLElBQVUsY0FBY0gsU0FBQSxJQUFhLEtBQUtsakMsR0FBQSxDQUFJNkQsS0FBQSxDQUFNMi9CLGNBQUEsSUFBa0IsUUFBUTc4QixjQUFBLENBQWUsSUFBSTtJQUNwSCxJQUFJdThCLFNBQUEsRUFBVztNQUNYLEtBQUsvaEIsV0FBQSxDQUFZbE4sSUFBQSxDQUFLO01BTXRCLElBQUl3dkIsY0FBQSxHQUFpQkgsU0FBQSxLQUFjMWdDLEVBQUEsSUFBTUssTUFBQSxLQUFXLENBQUMsS0FBSzBULFNBQUEsSUFDdEQsQ0FBQy9MLElBQUEsQ0FBS3FDLFNBQUEsQ0FBVXFKLEtBQUEsSUFBUyxDQUFDeEwsS0FBQSxDQUFNbUMsU0FBQSxDQUFVcUosS0FBQSxJQUFTb3RCLHVCQUFBLENBQXdCOTRCLElBQUEsQ0FBS3FDLFNBQUEsRUFBV25DLEtBQUEsQ0FBTW1DLFNBQVM7TUFDOUcsSUFBSXEyQixTQUFBLEVBQVc7UUFLWCxJQUFJSyxZQUFBLEdBQWUxZ0MsTUFBQSxHQUFVLEtBQUsrVyxXQUFBLEdBQWMsS0FBSzdMLGlCQUFBLENBQWtCLEVBQUU1TixTQUFBLEdBQWE7UUFDdEYsSUFBSSxLQUFLb1csU0FBQSxFQUNMLEtBQUs0QixLQUFBLENBQU1DLGVBQUEsR0FBa0I2WixtQkFBQSxDQUFvQixJQUFJO1FBQ3pELElBQUk0USxNQUFBLElBQVUsQ0FBQyxLQUFLejVCLE9BQUEsQ0FBUXNQLE1BQUEsQ0FBT2hPLEtBQUEsQ0FBTXpJLEdBQUEsRUFBSzBOLFNBQUEsRUFBV0MsU0FBQSxFQUFXLElBQUksR0FBRztVQUN2RSxLQUFLeEcsT0FBQSxDQUFReVAsZUFBQSxDQUFnQmxKLFNBQVM7VUFDdEMsS0FBS3ZHLE9BQUEsQ0FBUTRHLE9BQUEsQ0FBUTtVQUNyQixLQUFLNUcsT0FBQSxHQUFVbVEsV0FBQSxDQUFZN08sS0FBQSxDQUFNekksR0FBQSxFQUFLME4sU0FBQSxFQUFXQyxTQUFBLEVBQVcsS0FBS2hRLEdBQUEsRUFBSyxJQUFJO1FBQzlFO1FBQ0EsSUFBSTJqQyxZQUFBLElBQWdCLENBQUMsS0FBSzNwQixXQUFBLEVBQ3RCeXBCLGNBQUEsR0FBaUI7TUFDekI7TUFLQSxJQUFJQSxjQUFBLElBQ0EsRUFBRSxLQUFLbHJCLEtBQUEsQ0FBTXlJLFNBQUEsSUFBYSxLQUFLRyxXQUFBLENBQVlDLGdCQUFBLENBQWlCck4sRUFBQSxDQUFHLEtBQUs1RixpQkFBQSxDQUFrQixDQUFDLEtBQ25GMlUsa0JBQUEsQ0FBbUIsSUFBSSxJQUFJO1FBQy9CaEMsY0FBQSxDQUFlLE1BQU0yaUIsY0FBYztNQUN2QyxPQUNLO1FBQ0QxaUIsaUJBQUEsQ0FBa0IsTUFBTWpXLEtBQUEsQ0FBTW1DLFNBQVM7UUFDdkMsS0FBS2tVLFdBQUEsQ0FBWUcsZUFBQSxDQUFnQjtNQUNyQztNQUNBLEtBQUtILFdBQUEsQ0FBWXRULEtBQUEsQ0FBTTtJQUMzQjtJQUNBLEtBQUsrMEIsaUJBQUEsQ0FBa0JoNEIsSUFBSTtJQUMzQixNQUFNNUwsRUFBQSxHQUFLLEtBQUs2MUIsUUFBQSxNQUFjLFFBQVE3MUIsRUFBQSxLQUFPLFNBQVMsU0FBU0EsRUFBQSxDQUFHM0IsSUFBQSxLQUFTLENBQUN1TixJQUFBLENBQUt2SSxHQUFBLENBQUkwUixFQUFBLENBQUdqSixLQUFBLENBQU16SSxHQUFHLEdBQzdGLEtBQUt1aEMsaUJBQUEsQ0FBa0IsS0FBSy9PLFFBQUEsRUFBVWpxQixJQUFJO0lBQzlDLElBQUl5NEIsTUFBQSxJQUFVLFNBQVM7TUFDbkIsS0FBS3JqQyxHQUFBLENBQUlxRyxTQUFBLEdBQVk7SUFDekIsV0FDU2c5QixNQUFBLElBQVUsZ0JBQWdCO01BQy9CLEtBQUs1RixpQkFBQSxDQUFrQjtJQUMzQixXQUNTOEYsWUFBQSxFQUFjO01BQ25CaDhCLGNBQUEsQ0FBZWc4QixZQUFZO0lBQy9CO0VBQ0o7RUFBQTtBQUFBO0FBQUE7RUFJQTlGLGtCQUFBLEVBQW9CO0lBQ2hCLElBQUlsNEIsUUFBQSxHQUFXLEtBQUs0SSxpQkFBQSxDQUFrQixFQUFFNU4sU0FBQTtJQUN4QyxJQUFJLENBQUNnRixRQUFBLElBQVksQ0FBQyxLQUFLdkYsR0FBQSxDQUFJa0gsUUFBQSxDQUFTM0IsUUFBQSxDQUFTNUgsUUFBQSxJQUFZLElBQUk0SCxRQUFBLEdBQVdBLFFBQUEsQ0FBUy9ILFVBQVUsR0FBRyxVQUNyRixLQUFLaUksUUFBQSxDQUFTLDJCQUEyQmtILENBQUEsSUFBS0EsQ0FBQSxDQUFFLElBQUksQ0FBQyxHQUFHLFVBQ3hELEtBQUs3QixLQUFBLENBQU1tQyxTQUFBLFlBQXFCalEsd0JBQUEsQ0FBQWlqQixhQUFBLEVBQWU7TUFDcEQsSUFBSTVVLE1BQUEsR0FBUyxLQUFLN0IsT0FBQSxDQUFRZ0YsV0FBQSxDQUFZLEtBQUsxRCxLQUFBLENBQU1tQyxTQUFBLENBQVVsUCxJQUFJO01BQy9ELElBQUlzTixNQUFBLENBQU8xTixRQUFBLElBQVksR0FDbkIwSCxrQkFBQSxDQUFtQixNQUFNZ0csTUFBQSxDQUFPckcscUJBQUEsQ0FBc0IsR0FBR08sUUFBUTtJQUN6RSxPQUNLO01BQ0RGLGtCQUFBLENBQW1CLE1BQU0sS0FBS3VHLFdBQUEsQ0FBWSxLQUFLZCxLQUFBLENBQU1tQyxTQUFBLENBQVVnRixJQUFBLEVBQU0sQ0FBQyxHQUFHMU0sUUFBUTtJQUNyRjtFQUNKO0VBQ0FzK0IsbUJBQUEsRUFBcUI7SUFDakIsSUFBSXYrQixJQUFBO0lBQ0osT0FBT0EsSUFBQSxHQUFPLEtBQUs0OEIsV0FBQSxDQUFZeGxCLEdBQUEsQ0FBSSxHQUMvQixJQUFJcFgsSUFBQSxDQUFLOEssT0FBQSxFQUNMOUssSUFBQSxDQUFLOEssT0FBQSxDQUFRO0VBQ3pCO0VBQ0F3eUIsa0JBQWtCa0IsU0FBQSxFQUFXO0lBQ3pCLElBQUksQ0FBQ0EsU0FBQSxJQUFhQSxTQUFBLENBQVV6QixPQUFBLElBQVcsS0FBS3YzQixLQUFBLENBQU11M0IsT0FBQSxJQUFXLEtBQUtELGFBQUEsSUFBaUIsS0FBS0gsaUJBQUEsRUFBbUI7TUFDdkcsS0FBS0EsaUJBQUEsR0FBb0IsS0FBS0csYUFBQTtNQUM5QixLQUFLeUIsa0JBQUEsQ0FBbUI7TUFDeEIsU0FBU2w4QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUt5NkIsYUFBQSxDQUFjOWpDLE1BQUEsRUFBUXFKLENBQUEsSUFBSztRQUNoRCxJQUFJbzhCLE1BQUEsR0FBUyxLQUFLM0IsYUFBQSxDQUFjejZCLENBQUM7UUFDakMsSUFBSW84QixNQUFBLENBQU92d0IsSUFBQSxDQUFLbE8sSUFBQSxFQUNaLEtBQUs0OEIsV0FBQSxDQUFZNTZCLElBQUEsQ0FBS3k4QixNQUFBLENBQU92d0IsSUFBQSxDQUFLbE8sSUFBQSxDQUFLLElBQUksQ0FBQztNQUNwRDtNQUNBLFNBQVNxQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUttRCxLQUFBLENBQU11M0IsT0FBQSxDQUFRL2pDLE1BQUEsRUFBUXFKLENBQUEsSUFBSztRQUNoRCxJQUFJbzhCLE1BQUEsR0FBUyxLQUFLajVCLEtBQUEsQ0FBTXUzQixPQUFBLENBQVExNkIsQ0FBQztRQUNqQyxJQUFJbzhCLE1BQUEsQ0FBT3Z3QixJQUFBLENBQUtsTyxJQUFBLEVBQ1osS0FBSzQ4QixXQUFBLENBQVk1NkIsSUFBQSxDQUFLeThCLE1BQUEsQ0FBT3Z3QixJQUFBLENBQUtsTyxJQUFBLENBQUssSUFBSSxDQUFDO01BQ3BEO0lBQ0osT0FDSztNQUNELFNBQVNxQyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUt1NkIsV0FBQSxDQUFZNWpDLE1BQUEsRUFBUXFKLENBQUEsSUFBSztRQUM5QyxJQUFJcThCLFVBQUEsR0FBYSxLQUFLOUIsV0FBQSxDQUFZdjZCLENBQUM7UUFDbkMsSUFBSXE4QixVQUFBLENBQVdsckIsTUFBQSxFQUNYa3JCLFVBQUEsQ0FBV2xyQixNQUFBLENBQU8sTUFBTWdyQixTQUFTO01BQ3pDO0lBQ0o7RUFDSjtFQUNBRixrQkFBa0IvTyxRQUFBLEVBQVVqcUIsSUFBQSxFQUFNO0lBQzlCLElBQUlvQyxHQUFBLEdBQU02bkIsUUFBQSxDQUFTeDNCLElBQUE7TUFBTXNmLEtBQUEsR0FBUTtJQUNqQyxJQUFJLEtBQUs3UixLQUFBLENBQU16SSxHQUFBLENBQUlvdUIsTUFBQSxDQUFPempCLEdBQUEsQ0FBSWpQLElBQUksS0FBS2lQLEdBQUEsQ0FBSTNQLElBQUEsRUFBTTtNQUM3Q3NmLEtBQUEsR0FBUTNQLEdBQUEsQ0FBSWpQLElBQUE7SUFDaEIsT0FDSztNQUNELElBQUlrbUMsUUFBQSxHQUFXajNCLEdBQUEsQ0FBSWpQLElBQUEsSUFBUSxLQUFLK00sS0FBQSxDQUFNekksR0FBQSxDQUFJMEksT0FBQSxDQUFRQyxJQUFBLEdBQU9KLElBQUEsQ0FBS3ZJLEdBQUEsQ0FBSTBJLE9BQUEsQ0FBUUMsSUFBQTtNQUMxRSxJQUFJZ3ZCLEtBQUEsR0FBUWlLLFFBQUEsR0FBVyxLQUFLLEtBQUtuNUIsS0FBQSxDQUFNekksR0FBQSxDQUFJb3VCLE1BQUEsQ0FBT3dULFFBQVE7TUFDMUQsSUFBSWpLLEtBQUEsSUFBU2h0QixHQUFBLENBQUkzUCxJQUFBLEVBQ2JzZixLQUFBLEdBQVFzbkIsUUFBQTtJQUNoQjtJQUNBLEtBQUtwUCxRQUFBLEdBQVcsSUFBSVQsUUFBQSxDQUFTUyxRQUFBLENBQVN6ZixLQUFBLEVBQU95ZixRQUFBLENBQVM5RCxJQUFBLEVBQU1wVSxLQUFBLEdBQVEsSUFBSSxTQUFZM2Ysd0JBQUEsQ0FBQWlqQixhQUFBLENBQWN2TCxNQUFBLENBQU8sS0FBSzVKLEtBQUEsQ0FBTXpJLEdBQUEsRUFBS3NhLEtBQUssQ0FBQztFQUNuSTtFQUNBbFgsU0FBUzBwQixRQUFBLEVBQVV4aUIsQ0FBQSxFQUFHO0lBQ2xCLElBQUlrUCxJQUFBLEdBQU8sS0FBS3NtQixNQUFBLElBQVUsS0FBS0EsTUFBQSxDQUFPaFQsUUFBUTtNQUFHdnFCLEtBQUE7SUFDakQsSUFBSWlYLElBQUEsSUFBUSxTQUFTalgsS0FBQSxHQUFRK0gsQ0FBQSxHQUFJQSxDQUFBLENBQUVrUCxJQUFJLElBQUlBLElBQUEsR0FDdkMsT0FBT2pYLEtBQUE7SUFDWCxTQUFTK0MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLeTZCLGFBQUEsQ0FBYzlqQyxNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDaEQsSUFBSXU4QixLQUFBLEdBQU8sS0FBSzlCLGFBQUEsQ0FBY3o2QixDQUFDLEVBQUVtNkIsS0FBQSxDQUFNM1MsUUFBUTtNQUMvQyxJQUFJK1UsS0FBQSxJQUFRLFNBQVN0L0IsS0FBQSxHQUFRK0gsQ0FBQSxHQUFJQSxDQUFBLENBQUV1M0IsS0FBSSxJQUFJQSxLQUFBLEdBQ3ZDLE9BQU90L0IsS0FBQTtJQUNmO0lBQ0EsSUFBSXk5QixPQUFBLEdBQVUsS0FBS3YzQixLQUFBLENBQU11M0IsT0FBQTtJQUN6QixJQUFJQSxPQUFBLEVBQ0EsU0FBUzE2QixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJMDZCLE9BQUEsQ0FBUS9qQyxNQUFBLEVBQVFxSixDQUFBLElBQUs7TUFDckMsSUFBSXU4QixLQUFBLEdBQU83QixPQUFBLENBQVExNkIsQ0FBQyxFQUFFbTZCLEtBQUEsQ0FBTTNTLFFBQVE7TUFDcEMsSUFBSStVLEtBQUEsSUFBUSxTQUFTdC9CLEtBQUEsR0FBUStILENBQUEsR0FBSUEsQ0FBQSxDQUFFdTNCLEtBQUksSUFBSUEsS0FBQSxHQUN2QyxPQUFPdC9CLEtBQUE7SUFDZjtFQUNSO0VBQUE7QUFBQTtBQUFBO0VBSUFnYyxTQUFBLEVBQVc7SUFJUCxJQUFJaGUsRUFBQSxFQUFJO01BR0osSUFBSXZGLElBQUEsR0FBTyxLQUFLMkosSUFBQSxDQUFLM0YsYUFBQTtNQUNyQixJQUFJaEUsSUFBQSxJQUFRLEtBQUsyQyxHQUFBLEVBQ2IsT0FBTztNQUNYLElBQUksQ0FBQzNDLElBQUEsSUFBUSxDQUFDLEtBQUsyQyxHQUFBLENBQUlrSCxRQUFBLENBQVM3SixJQUFJLEdBQ2hDLE9BQU87TUFDWCxPQUFPQSxJQUFBLElBQVEsS0FBSzJDLEdBQUEsSUFBTzNDLElBQUEsSUFBUSxLQUFLMkMsR0FBQSxDQUFJa0gsUUFBQSxDQUFTN0osSUFBSSxHQUFHO1FBQ3hELElBQUlBLElBQUEsQ0FBS2dDLGVBQUEsSUFBbUIsU0FDeEIsT0FBTztRQUNYaEMsSUFBQSxHQUFPQSxJQUFBLENBQUs4bUMsYUFBQTtNQUNoQjtNQUNBLE9BQU87SUFDWDtJQUNBLE9BQU8sS0FBS245QixJQUFBLENBQUszRixhQUFBLElBQWlCLEtBQUtyQixHQUFBO0VBQzNDO0VBQUE7QUFBQTtBQUFBO0VBSUErSCxNQUFBLEVBQVE7SUFDSixLQUFLb1osV0FBQSxDQUFZbE4sSUFBQSxDQUFLO0lBQ3RCLElBQUksS0FBSzBNLFFBQUEsRUFDTDlZLGtCQUFBLENBQW1CLEtBQUs3SCxHQUFHO0lBQy9COGdCLGNBQUEsQ0FBZSxJQUFJO0lBQ25CLEtBQUtLLFdBQUEsQ0FBWXRULEtBQUEsQ0FBTTtFQUMzQjtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU9BLElBQUk3RyxLQUFBLEVBQU87SUFDUCxJQUFJbzlCLE1BQUEsR0FBUyxLQUFLckMsS0FBQTtJQUNsQixJQUFJcUMsTUFBQSxJQUFVLE1BQ1YsU0FBU3p6QixNQUFBLEdBQVMsS0FBSzNRLEdBQUEsQ0FBSXhDLFVBQUEsRUFBWW1ULE1BQUEsRUFBUUEsTUFBQSxHQUFTQSxNQUFBLENBQU9uVCxVQUFBLEVBQVk7TUFDdkUsSUFBSW1ULE1BQUEsQ0FBT2hULFFBQUEsSUFBWSxLQUFNZ1QsTUFBQSxDQUFPaFQsUUFBQSxJQUFZLE1BQU1nVCxNQUFBLENBQU8vUyxJQUFBLEVBQU87UUFDaEUsSUFBSSxDQUFDK1MsTUFBQSxDQUFPMEIsWUFBQSxFQUNScUksTUFBQSxDQUFPMnBCLGNBQUEsQ0FBZTF6QixNQUFNLEVBQUUwQixZQUFBLEdBQWUsTUFBTTFCLE1BQUEsQ0FBT2hMLGFBQUEsQ0FBYzBNLFlBQUEsQ0FBYTtRQUN6RixPQUFPLEtBQUswdkIsS0FBQSxHQUFRcHhCLE1BQUE7TUFDeEI7SUFDSjtJQUNKLE9BQU95ekIsTUFBQSxJQUFVbG1DLFFBQUE7RUFDckI7RUFBQTtBQUFBO0FBQUE7QUFBQTtFQUtBb21DLFdBQUEsRUFBYTtJQUNULEtBQUt2QyxLQUFBLEdBQVE7RUFDakI7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFVQXgzQixZQUFZcEMsTUFBQSxFQUFRO0lBQ2hCLE9BQU9vQyxXQUFBLENBQVksTUFBTXBDLE1BQU07RUFDbkM7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBU0F5RCxZQUFZakssR0FBQSxFQUFLa0QsSUFBQSxHQUFPLEdBQUc7SUFDdkIsT0FBTytHLFdBQUEsQ0FBWSxNQUFNakssR0FBQSxFQUFLa0QsSUFBSTtFQUN0QztFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBV0F1NUIsU0FBU3o4QixHQUFBLEVBQUtrRCxJQUFBLEdBQU8sR0FBRztJQUNwQixPQUFPLEtBQUsyRSxPQUFBLENBQVFzQyxVQUFBLENBQVduSyxHQUFBLEVBQUtrRCxJQUFJO0VBQzVDO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFXQWlNLFFBQVFuUCxHQUFBLEVBQUs7SUFDVCxJQUFJMUIsSUFBQSxHQUFPLEtBQUt1SixPQUFBLENBQVF3SCxNQUFBLENBQU9yUCxHQUFHO0lBQ2xDLE9BQU8xQixJQUFBLEdBQU9BLElBQUEsQ0FBSzZRLE9BQUEsR0FBVTtFQUNqQztFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBV0F5ekIsU0FBU2xuQyxJQUFBLEVBQU1zQyxNQUFBLEVBQVE0SixJQUFBLEdBQU8sSUFBSTtJQUM5QixJQUFJNUgsR0FBQSxHQUFNLEtBQUs2SCxPQUFBLENBQVFDLFVBQUEsQ0FBV3BNLElBQUEsRUFBTXNDLE1BQUEsRUFBUTRKLElBQUk7SUFDcEQsSUFBSTVILEdBQUEsSUFBTyxNQUNQLE1BQU0sSUFBSW1RLFVBQUEsQ0FBVyxvQ0FBb0M7SUFDN0QsT0FBT25RLEdBQUE7RUFDWDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFTQXNOLGVBQWVsUSxHQUFBLEVBQUsrTCxLQUFBLEVBQU87SUFDdkIsT0FBT21FLGNBQUEsQ0FBZSxNQUFNbkUsS0FBQSxJQUFTLEtBQUtBLEtBQUEsRUFBTy9MLEdBQUc7RUFDeEQ7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUF5bEMsVUFBVXpkLElBQUEsRUFBTWptQixLQUFBLEVBQU87SUFDbkIsT0FBTzZ5QixPQUFBLENBQVEsTUFBTSxJQUFJNU0sSUFBQSxFQUFNLE9BQU9qbUIsS0FBQSxJQUFTLElBQUkyakMsY0FBQSxDQUFlLE9BQU8sQ0FBQztFQUM5RTtFQUFBO0FBQUE7QUFBQTtFQUlBQyxVQUFVcnhCLElBQUEsRUFBTXZTLEtBQUEsRUFBTztJQUNuQixPQUFPNnlCLE9BQUEsQ0FBUSxNQUFNdGdCLElBQUEsRUFBTSxNQUFNLE1BQU12UyxLQUFBLElBQVMsSUFBSTJqQyxjQUFBLENBQWUsT0FBTyxDQUFDO0VBQy9FO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVNBMWUsc0JBQXNCM1EsS0FBQSxFQUFPO0lBQ3pCLE9BQU8yUSxxQkFBQSxDQUFzQixNQUFNM1EsS0FBSztFQUM1QztFQUFBO0FBQUE7QUFBQTtBQUFBO0VBS0FoRixRQUFBLEVBQVU7SUFDTixJQUFJLENBQUMsS0FBSzVHLE9BQUEsRUFDTjtJQUNKaWtCLFlBQUEsQ0FBYSxJQUFJO0lBQ2pCLEtBQUtvVyxrQkFBQSxDQUFtQjtJQUN4QixJQUFJLEtBQUs3QixPQUFBLEVBQVM7TUFDZCxLQUFLeDRCLE9BQUEsQ0FBUXNQLE1BQUEsQ0FBTyxLQUFLaE8sS0FBQSxDQUFNekksR0FBQSxFQUFLLEVBQUMsRUFBRys0QixlQUFBLENBQWdCLElBQUksR0FBRyxJQUFJO01BQ25FLEtBQUtwN0IsR0FBQSxDQUFJK04sV0FBQSxHQUFjO0lBQzNCLFdBQ1MsS0FBSy9OLEdBQUEsQ0FBSXhDLFVBQUEsRUFBWTtNQUMxQixLQUFLd0MsR0FBQSxDQUFJeEMsVUFBQSxDQUFXb2IsV0FBQSxDQUFZLEtBQUs1WSxHQUFHO0lBQzVDO0lBQ0EsS0FBS3dKLE9BQUEsQ0FBUTRHLE9BQUEsQ0FBUTtJQUNyQixLQUFLNUcsT0FBQSxHQUFVO0lBQ2ZoTCxnQkFBQSxDQUFpQjtFQUNyQjtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQSxJQUFJbW1DLFlBQUEsRUFBYztJQUNkLE9BQU8sS0FBS243QixPQUFBLElBQVc7RUFDM0I7RUFBQTtBQUFBO0FBQUE7RUFJQXVrQixjQUFjanRCLEtBQUEsRUFBTztJQUNqQixPQUFPaXRCLGFBQUEsQ0FBYyxNQUFNanRCLEtBQUs7RUFDcEM7RUFBQTtBQUFBO0FBQUE7RUFJQXFOLGtCQUFBLEVBQW9CO0lBQ2hCLElBQUluQixHQUFBLEdBQU0sS0FBS1ksWUFBQSxDQUFhO0lBQzVCLElBQUksQ0FBQ1osR0FBQSxFQUNELE9BQU87TUFBRXpNLFNBQUEsRUFBVztNQUFNQyxXQUFBLEVBQWE7TUFBR0MsVUFBQSxFQUFZO01BQU1DLFlBQUEsRUFBYztJQUFFO0lBQ2hGLE9BQU95QyxNQUFBLElBQVUsS0FBSzZELElBQUEsQ0FBS3JKLFFBQUEsS0FBYSxNQUNwQ3VELGlCQUFBLENBQWtCLEtBQUtsQixHQUFBLENBQUkyRixhQUFhLEtBQUssS0FBSzNGLEdBQUEsSUFBT3ErQiwwQkFBQSxDQUEyQixNQUFNcnhCLEdBQUcsS0FBS0EsR0FBQTtFQUMxRztFQUFBO0FBQUE7QUFBQTtFQUlBWSxhQUFBLEVBQWU7SUFDWCxPQUFPLEtBQUs1RyxJQUFBLENBQUtxTCxZQUFBLENBQWE7RUFDbEM7QUFDSjtBQUNBM1YsVUFBQSxDQUFXOE8sU0FBQSxDQUFVNFgsUUFBQSxHQUFXLFVBQVVDLEVBQUEsRUFBSTtFQUMxQyxJQUFJdWhCLG1CQUFBLEdBQXNCLEtBQUt6QyxNQUFBLENBQU95QyxtQkFBQTtFQUN0QyxJQUFJQSxtQkFBQSxFQUNBQSxtQkFBQSxDQUFvQmw1QixJQUFBLENBQUssTUFBTTJYLEVBQUUsT0FFakMsS0FBS3ZXLFdBQUEsQ0FBWSxLQUFLaEMsS0FBQSxDQUFNcVksS0FBQSxDQUFNRSxFQUFFLENBQUM7QUFDN0M7QUFDQSxTQUFTc2YsZUFBZXI5QixJQUFBLEVBQU07RUFDMUIsSUFBSTJQLEtBQUEsR0FBUSxlQUFBeUYsTUFBQSxDQUFPaEcsTUFBQSxDQUFPLElBQUk7RUFDOUJPLEtBQUEsQ0FBTTZGLEtBQUEsR0FBUTtFQUNkN0YsS0FBQSxDQUFNNHZCLGVBQUEsR0FBa0JyVyxNQUFBLENBQU9scEIsSUFBQSxDQUFLcWIsUUFBUTtFQUM1Q3JiLElBQUEsQ0FBS0csUUFBQSxDQUFTLGNBQWNiLEtBQUEsSUFBUztJQUNqQyxJQUFJLE9BQU9BLEtBQUEsSUFBUyxZQUNoQkEsS0FBQSxHQUFRQSxLQUFBLENBQU1VLElBQUEsQ0FBS3dGLEtBQUs7SUFDNUIsSUFBSWxHLEtBQUEsRUFDQSxTQUFTa2dDLElBQUEsSUFBUWxnQyxLQUFBLEVBQU87TUFDcEIsSUFBSWtnQyxJQUFBLElBQVEsU0FDUjd2QixLQUFBLENBQU02RixLQUFBLElBQVMsTUFBTWxXLEtBQUEsQ0FBTWtnQyxJQUFJLFdBQzFCQSxJQUFBLElBQVEsU0FDYjd2QixLQUFBLENBQU1wUixLQUFBLElBQVNvUixLQUFBLENBQU1wUixLQUFBLEdBQVFvUixLQUFBLENBQU1wUixLQUFBLEdBQVEsTUFBTSxNQUFNZSxLQUFBLENBQU1rZ0MsSUFBSSxXQUM1RCxDQUFDN3ZCLEtBQUEsQ0FBTTZ2QixJQUFJLEtBQUtBLElBQUEsSUFBUSxxQkFBcUJBLElBQUEsSUFBUSxZQUMxRDd2QixLQUFBLENBQU02dkIsSUFBSSxJQUFJdFcsTUFBQSxDQUFPNXBCLEtBQUEsQ0FBTWtnQyxJQUFJLENBQUM7SUFDeEM7RUFDUixDQUFDO0VBQ0QsSUFBSSxDQUFDN3ZCLEtBQUEsQ0FBTTh2QixTQUFBLEVBQ1A5dkIsS0FBQSxDQUFNOHZCLFNBQUEsR0FBWTtFQUN0QixPQUFPLENBQUN2b0MsVUFBQSxDQUFXYSxJQUFBLENBQUssR0FBR2lJLElBQUEsQ0FBS3dGLEtBQUEsQ0FBTXpJLEdBQUEsQ0FBSTBJLE9BQUEsQ0FBUUMsSUFBQSxFQUFNaUssS0FBSyxDQUFDO0FBQ2xFO0FBQ0EsU0FBU3d0QixvQkFBb0JuOUIsSUFBQSxFQUFNO0VBQy9CLElBQUlBLElBQUEsQ0FBS3FzQixVQUFBLEVBQVk7SUFDakIsSUFBSTN4QixHQUFBLEdBQU05QixRQUFBLENBQVN5VixhQUFBLENBQWMsS0FBSztJQUN0QzNULEdBQUEsQ0FBSThkLFNBQUEsR0FBWTtJQUNoQjlkLEdBQUEsQ0FBSXNiLFlBQUEsQ0FBYSxvQkFBb0IsTUFBTTtJQUMzQ3RiLEdBQUEsQ0FBSXNiLFlBQUEsQ0FBYSxPQUFPLEVBQUU7SUFDMUJoVyxJQUFBLENBQUtrYyxhQUFBLEdBQWdCO01BQUV4aEIsR0FBQTtNQUFLbWIsSUFBQSxFQUFNM2UsVUFBQSxDQUFXbVQsTUFBQSxDQUFPckssSUFBQSxDQUFLd0YsS0FBQSxDQUFNbUMsU0FBQSxDQUFVbFAsSUFBQSxFQUFNaUMsR0FBQSxFQUFLO1FBQUV5VCxHQUFBLEVBQUs7UUFBTTBELEtBQUEsRUFBTzdSLElBQUEsQ0FBS3FzQjtNQUFXLENBQUM7SUFBRTtFQUMvSCxPQUNLO0lBQ0Ryc0IsSUFBQSxDQUFLa2MsYUFBQSxHQUFnQjtFQUN6QjtBQUNKO0FBQ0EsU0FBU2doQixZQUFZbDlCLElBQUEsRUFBTTtFQUN2QixPQUFPLENBQUNBLElBQUEsQ0FBS0csUUFBQSxDQUFTLFlBQVliLEtBQUEsSUFBU0EsS0FBQSxDQUFNVSxJQUFBLENBQUt3RixLQUFLLE1BQU0sS0FBSztBQUMxRTtBQUNBLFNBQVM0NEIsd0JBQXdCc0IsSUFBQSxFQUFNcFQsSUFBQSxFQUFNO0VBQ3pDLElBQUlyakIsS0FBQSxHQUFRMU0sSUFBQSxDQUFLQyxHQUFBLENBQUlrakMsSUFBQSxDQUFLeGtCLE9BQUEsQ0FBUXNTLFdBQUEsQ0FBWWtTLElBQUEsQ0FBSy95QixJQUFJLEdBQUcyZixJQUFBLENBQUtwUixPQUFBLENBQVFzUyxXQUFBLENBQVlsQixJQUFBLENBQUszZixJQUFJLENBQUM7RUFDN0YsT0FBTyt5QixJQUFBLENBQUt4a0IsT0FBQSxDQUFRM1MsS0FBQSxDQUFNVSxLQUFLLEtBQUtxakIsSUFBQSxDQUFLcFIsT0FBQSxDQUFRM1MsS0FBQSxDQUFNVSxLQUFLO0FBQ2hFO0FBQ0EsU0FBU20wQixlQUFlcDlCLElBQUEsRUFBTTtFQUMxQixJQUFJcUosTUFBQSxHQUFTLGVBQUErTCxNQUFBLENBQU9oRyxNQUFBLENBQU8sSUFBSTtFQUMvQixTQUFTWixJQUFJbXhCLEdBQUEsRUFBSztJQUNkLFNBQVNwcEIsSUFBQSxJQUFRb3BCLEdBQUEsRUFDYixJQUFJLENBQUN2cUIsTUFBQSxDQUFPbFAsU0FBQSxDQUFVMDVCLGNBQUEsQ0FBZXg1QixJQUFBLENBQUtpRCxNQUFBLEVBQVFrTixJQUFJLEdBQ2xEbE4sTUFBQSxDQUFPa04sSUFBSSxJQUFJb3BCLEdBQUEsQ0FBSXBwQixJQUFJO0VBQ25DO0VBQ0F2VyxJQUFBLENBQUtHLFFBQUEsQ0FBUyxhQUFhcU8sR0FBRztFQUM5QnhPLElBQUEsQ0FBS0csUUFBQSxDQUFTLGFBQWFxTyxHQUFHO0VBQzlCLE9BQU9uRixNQUFBO0FBQ1g7QUFDQSxTQUFTeTBCLGlCQUFpQm5uQixDQUFBLEVBQUdDLENBQUEsRUFBRztFQUM1QixJQUFJaXBCLEVBQUEsR0FBSztJQUFHQyxFQUFBLEdBQUs7RUFDakIsU0FBU3ZwQixJQUFBLElBQVFJLENBQUEsRUFBRztJQUNoQixJQUFJQSxDQUFBLENBQUVKLElBQUksS0FBS0ssQ0FBQSxDQUFFTCxJQUFJLEdBQ2pCLE9BQU87SUFDWHNwQixFQUFBO0VBQ0o7RUFDQSxTQUFTcGpDLENBQUEsSUFBS21hLENBQUEsRUFDVmtwQixFQUFBO0VBQ0osT0FBT0QsRUFBQSxJQUFNQyxFQUFBO0FBQ2pCO0FBQ0EsU0FBUzlDLG9CQUFvQnlCLE1BQUEsRUFBUTtFQUNqQyxJQUFJQSxNQUFBLENBQU92d0IsSUFBQSxDQUFLMUksS0FBQSxJQUFTaTVCLE1BQUEsQ0FBT3Z3QixJQUFBLENBQUs2eEIsaUJBQUEsSUFBcUJ0QixNQUFBLENBQU92d0IsSUFBQSxDQUFLOHhCLGlCQUFBLEVBQ2xFLE1BQU0sSUFBSXh6QixVQUFBLENBQVcscUVBQXFFO0FBQ2xHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==