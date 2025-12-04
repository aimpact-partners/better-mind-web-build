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

// .beyond/uimport/prosemirror-view.1.40.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci12aWV3LjEuNDAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci12aWV3L2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsicHJvc2VtaXJyb3Jfdmlld18xXzQwXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRGVjb3JhdGlvbiIsIkRlY29yYXRpb25TZXQiLCJFZGl0b3JWaWV3IiwiX19lbmRDb21wb3NpdGlvbiIsIl9fcGFyc2VGcm9tQ2xpcGJvYXJkIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9wcm9zZW1pcnJvcl9zdGF0ZSIsInJlcXVpcmUiLCJpbXBvcnRfcHJvc2VtaXJyb3JfbW9kZWwiLCJpbXBvcnRfcHJvc2VtaXJyb3JfdHJhbnNmb3JtIiwiZG9tSW5kZXgiLCJub2RlIiwiaW5kZXgiLCJwcmV2aW91c1NpYmxpbmciLCJwYXJlbnROb2RlIiwicGFyZW50IiwiYXNzaWduZWRTbG90Iiwibm9kZVR5cGUiLCJob3N0IiwicmV1c2VkUmFuZ2UiLCJ0ZXh0UmFuZ2UiLCJmcm9tIiwidG8iLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZXRFbmQiLCJub2RlVmFsdWUiLCJsZW5ndGgiLCJzZXRTdGFydCIsImNsZWFyUmV1c2VkUmFuZ2UiLCJpc0VxdWl2YWxlbnRQb3NpdGlvbiIsIm9mZiIsInRhcmdldE5vZGUiLCJ0YXJnZXRPZmYiLCJzY2FuRm9yIiwiYXRvbUVsZW1lbnRzIiwiZGlyIiwiX2EiLCJub2RlU2l6ZSIsImhhc0Jsb2NrRGVzYyIsInRlc3QiLCJub2RlTmFtZSIsImNvbnRlbnRFZGl0YWJsZSIsImNoaWxkIiwiY2hpbGROb2RlcyIsInBtVmlld0Rlc2MiLCJpZ25vcmVGb3JTZWxlY3Rpb24iLCJ0ZXh0Tm9kZUJlZm9yZSQxIiwib2Zmc2V0IiwidGV4dE5vZGVBZnRlciQxIiwiaXNPbkVkZ2UiLCJhdFN0YXJ0IiwiYXRFbmQiLCJkb20iLCJkZXNjIiwiY3VyIiwiaXNCbG9jayIsImNvbnRlbnRET00iLCJzZWxlY3Rpb25Db2xsYXBzZWQiLCJkb21TZWwiLCJmb2N1c05vZGUiLCJmb2N1c09mZnNldCIsImFuY2hvck5vZGUiLCJhbmNob3JPZmZzZXQiLCJrZXlFdmVudCIsImtleUNvZGUiLCJrZXkiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiY29kZSIsImRlZXBBY3RpdmVFbGVtZW50IiwiZG9jMiIsImVsdCIsImFjdGl2ZUVsZW1lbnQiLCJzaGFkb3dSb290IiwiY2FyZXRGcm9tUG9pbnQiLCJ4IiwieSIsImNhcmV0UG9zaXRpb25Gcm9tUG9pbnQiLCJwb3MiLCJvZmZzZXROb2RlIiwiTWF0aCIsIm1pbiIsIl8iLCJjYXJldFJhbmdlRnJvbVBvaW50Iiwic3RhcnRDb250YWluZXIiLCJzdGFydE9mZnNldCIsIm5hdiIsIm5hdmlnYXRvciIsImRvYyIsImFnZW50IiwidXNlckFnZW50IiwiaWVfZWRnZSIsImV4ZWMiLCJpZV91cHRvMTAiLCJpZV8xMXVwIiwiaWUiLCJpZV92ZXJzaW9uIiwiZG9jdW1lbnRNb2RlIiwiZ2Vja28iLCJfY2hyb21lIiwiY2hyb21lIiwiY2hyb21lX3ZlcnNpb24iLCJzYWZhcmkiLCJ2ZW5kb3IiLCJpb3MiLCJtYXhUb3VjaFBvaW50cyIsIm1hYyIsInBsYXRmb3JtIiwid2luZG93cyIsImFuZHJvaWQiLCJ3ZWJraXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsIndlYmtpdF92ZXJzaW9uIiwid2luZG93UmVjdCIsInZwIiwiZGVmYXVsdFZpZXciLCJ2aXN1YWxWaWV3cG9ydCIsImxlZnQiLCJyaWdodCIsIndpZHRoIiwidG9wIiwiYm90dG9tIiwiaGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRTaWRlIiwidmFsdWUiLCJzaWRlIiwiY2xpZW50UmVjdCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY2FsZVgiLCJvZmZzZXRXaWR0aCIsInNjYWxlWSIsIm9mZnNldEhlaWdodCIsInNjcm9sbFJlY3RJbnRvVmlldyIsInZpZXciLCJzdGFydERPTSIsInNjcm9sbFRocmVzaG9sZCIsInNvbWVQcm9wIiwic2Nyb2xsTWFyZ2luIiwib3duZXJEb2N1bWVudCIsImF0VG9wIiwiYm9keSIsImJvdW5kaW5nIiwibW92ZVgiLCJtb3ZlWSIsInNjcm9sbEJ5Iiwic3RhcnRYIiwic2Nyb2xsTGVmdCIsInN0YXJ0WSIsInNjcm9sbFRvcCIsImRYIiwiZFkiLCJnZXRDb21wdXRlZFN0eWxlIiwicG9zaXRpb24iLCJvZmZzZXRQYXJlbnQiLCJzdG9yZVNjcm9sbFBvcyIsIm1heCIsInJlZkRPTSIsInJlZlRvcCIsImlubmVySGVpZ2h0Iiwicm9vdCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjb250YWlucyIsImxvY2FsUmVjdCIsInN0YWNrIiwic2Nyb2xsU3RhY2siLCJwdXNoIiwicmVzZXRTY3JvbGxQb3MiLCJuZXdSZWZUb3AiLCJyZXN0b3JlU2Nyb2xsU3RhY2siLCJkVG9wIiwiaSIsInByZXZlbnRTY3JvbGxTdXBwb3J0ZWQiLCJmb2N1c1ByZXZlbnRTY3JvbGwiLCJzZXRBY3RpdmUiLCJmb2N1cyIsInN0b3JlZCIsInByZXZlbnRTY3JvbGwiLCJmaW5kT2Zmc2V0SW5Ob2RlIiwiY29vcmRzIiwiY2xvc2VzdCIsImR4Q2xvc2VzdCIsImNvb3Jkc0Nsb3Nlc3QiLCJyb3dCb3QiLCJyb3dUb3AiLCJmaXJzdEJlbG93IiwiY29vcmRzQmVsb3ciLCJmaXJzdENoaWxkIiwiY2hpbGRJbmRleCIsIm5leHRTaWJsaW5nIiwicmVjdHMiLCJnZXRDbGllbnRSZWN0cyIsImR4IiwiZmluZE9mZnNldEluVGV4dCIsImxlbiIsInNpbmdsZVJlY3QiLCJpblJlY3QiLCJ0YXJnZXRLbHVkZ2UiLCJwb3NGcm9tRWxlbWVudCIsImJpYXMiLCJkb2NWaWV3IiwicG9zRnJvbURPTSIsInBvc0Zyb21DYXJldCIsIm91dHNpZGVCbG9jayIsInNhd0Jsb2NrIiwibmVhcmVzdERlc2MiLCJwb3NCZWZvcmUiLCJwb3NBZnRlciIsImlzVGV4dCIsImJlZm9yZSIsImVsZW1lbnQiLCJib3giLCJzdGFydEkiLCJmbG9vciIsImoiLCJwb3NBdENvb3JkcyIsImNhcmV0IiwicCIsImRyYWdnYWJsZSIsIm5leHQiLCJwcmV2IiwibGFzdENoaWxkIiwic3RhdGUiLCJjb250ZW50Iiwic2l6ZSIsImluc2lkZSIsInBvc0F0U3RhcnQiLCJib3JkZXIiLCJub25aZXJvIiwidGFyZ2V0IiwiZmlyc3QiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbmQiLCJjYWxsIiwiQklESSIsImNvb3Jkc0F0UG9zIiwiYXRvbSIsImRvbUZyb21Qb3MiLCJzdXBwb3J0RW1wdHlSYW5nZSIsInJlY3RCZWZvcmUiLCJyZWN0QWZ0ZXIiLCJmbGF0dGVuViIsInRha2VTaWRlIiwiJGRvbSIsInJlc29sdmUiLCJpbmxpbmVDb250ZW50IiwiZmxhdHRlbkgiLCJhZnRlciIsImlnbm9yZUZvckNvb3JkcyIsIndpdGhGbHVzaGVkU3RhdGUiLCJmIiwidmlld1N0YXRlIiwiYWN0aXZlIiwidXBkYXRlU3RhdGUiLCJlbmRPZlRleHRibG9ja1ZlcnRpY2FsIiwic2VsIiwic2VsZWN0aW9uIiwiJHBvcyIsIiRmcm9tIiwiJHRvIiwibmVhcmVzdCIsImJveGVzIiwibWF5YmVSVEwiLCJlbmRPZlRleHRibG9ja0hvcml6b250YWwiLCIkaGVhZCIsImlzVGV4dGJsb2NrIiwicGFyZW50T2Zmc2V0IiwiZG9tU2VsZWN0aW9uIiwic3RhcnQiLCJlbmQiLCJ0ZXh0Q29udGVudCIsIm1vZGlmeSIsIm9sZE5vZGUiLCJvbGRPZmYiLCJkb21TZWxlY3Rpb25SYW5nZSIsIm9sZEJpZGlMZXZlbCIsImNhcmV0QmlkaUxldmVsIiwicGFyZW50RE9NIiwiZGVwdGgiLCJkb21BZnRlclBvcyIsIm5ld05vZGUiLCJuZXdPZmYiLCJyZXN1bHQiLCJjb2xsYXBzZSIsImV4dGVuZCIsImNhY2hlZFN0YXRlIiwiY2FjaGVkRGlyIiwiY2FjaGVkUmVzdWx0IiwiZW5kT2ZUZXh0YmxvY2siLCJOT1RfRElSVFkiLCJDSElMRF9ESVJUWSIsIkNPTlRFTlRfRElSVFkiLCJOT0RFX0RJUlRZIiwiVmlld0Rlc2MiLCJjb25zdHJ1Y3RvciIsImNoaWxkcmVuIiwiZGlydHkiLCJtYXRjaGVzV2lkZ2V0Iiwid2lkZ2V0IiwibWF0Y2hlc01hcmsiLCJtYXJrIiwibWF0Y2hlc05vZGUiLCJvdXRlckRlY28iLCJpbm5lckRlY28iLCJtYXRjaGVzSGFjayIsInBhcnNlUnVsZSIsInN0b3BFdmVudCIsImRlc3Ryb3kiLCJwb3NCZWZvcmVDaGlsZCIsInBvc0F0RW5kIiwibG9jYWxQb3NGcm9tRE9NIiwiZG9tQmVmb3JlIiwiZG9tQWZ0ZXIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInNlYXJjaCIsIm9ubHlOb2RlcyIsImdldERlc2MiLCJub2RlRE9NIiwic2NhbiIsImRlc2NBdCIsImkyIiwiaW5uZXIiLCJjdXJQb3MiLCJUcmFpbGluZ0hhY2tWaWV3RGVzYyIsIldpZGdldFZpZXdEZXNjIiwiZW50ZXIiLCJkb21BdG9tIiwicGFyc2VSYW5nZSIsImJhc2UiLCJmcm9tT2Zmc2V0IiwidG9PZmZzZXQiLCJjaGlsZEJhc2UiLCJlbXB0eUNoaWxkQXQiLCJSYW5nZUVycm9yIiwic2V0U2VsZWN0aW9uIiwiYW5jaG9yIiwiaGVhZCIsImZvcmNlIiwiYW5jaG9yRE9NIiwiaGVhZERPTSIsImdldFNlbGVjdGlvbiIsInNlbFJhbmdlIiwiYnJLbHVkZ2UiLCJkb21TZWxFeHRlbmRlZCIsInRtcCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiaWdub3JlTXV0YXRpb24iLCJtdXRhdGlvbiIsInR5cGUiLCJjb250ZW50TG9zdCIsIm1hcmtEaXJ0eSIsInN0YXJ0SW5zaWRlIiwiZW5kSW5zaWRlIiwibWFya1BhcmVudHNEaXJ0eSIsImxldmVsIiwidGV4dCIsInNlbGYiLCJ0b0RPTSIsInNwZWMiLCJyYXciLCJ3cmFwIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZXEiLCJpZ25vcmUiLCJzdG9wIiwiaWdub3JlU2VsZWN0aW9uIiwicmVsYXhlZFNpZGUiLCJDb21wb3NpdGlvblZpZXdEZXNjIiwidGV4dERPTSIsIm11dCIsIm9sZFZhbHVlIiwiTWFya1ZpZXdEZXNjIiwiX01hcmtWaWV3RGVzYyIsImNyZWF0ZSIsImlubGluZSIsImN1c3RvbSIsIm5vZGVWaWV3cyIsIm5hbWUiLCJET01TZXJpYWxpemVyIiwicmVuZGVyU3BlYyIsImF0dHJzIiwicmVwYXJzZUluVmlldyIsImNvbnRlbnRFbGVtZW50Iiwic2xpY2UiLCJjb3B5Iiwibm9kZXMiLCJyZXBsYWNlTm9kZXMiLCJOb2RlVmlld0Rlc2MiLCJfTm9kZVZpZXdEZXNjIiwiZGVzY09iaiIsImNyZWF0ZVRleHROb2RlIiwic3BlYzIiLCJoYXNBdHRyaWJ1dGUiLCJhcHBseU91dGVyRGVjbyIsIkN1c3RvbU5vZGVWaWV3RGVzYyIsIlRleHRWaWV3RGVzYyIsInJ1bGUiLCJ3aGl0ZXNwYWNlIiwicHJlc2VydmVXaGl0ZXNwYWNlIiwiZ2V0Q29udGVudCIsIkZyYWdtZW50IiwiZW1wdHkiLCJzYW1lT3V0ZXJEZWNvIiwiaXNMZWFmIiwidXBkYXRlQ2hpbGRyZW4iLCJjb21wb3NpdGlvbiIsImNvbXBvc2luZyIsImxvY2FsQ29tcG9zaXRpb25JbmZvIiwibG9jYWxDb21wb3NpdGlvbiIsImNvbXBvc2l0aW9uSW5DaGlsZCIsInVwZGF0ZXIiLCJWaWV3VHJlZVVwZGF0ZXIiLCJpdGVyRGVjbyIsImluc2lkZU5vZGUiLCJtYXJrcyIsInN5bmNUb01hcmtzIiwiY2hpbGRDb3VudCIsIk1hcmsiLCJub25lIiwicGxhY2VXaWRnZXQiLCJjb21wSW5kZXgiLCJmaW5kTm9kZU1hdGNoIiwiZmluZEluZGV4V2l0aENoaWxkIiwidXBkYXRlTm9kZUF0IiwidXBkYXRlTmV4dE5vZGUiLCJhZGROb2RlIiwiYWRkVGV4dGJsb2NrSGFja3MiLCJkZXN0cm95UmVzdCIsImNoYW5nZWQiLCJwcm90ZWN0TG9jYWxDb21wb3NpdGlvbiIsInJlbmRlckRlc2NzIiwiaW9zSGFja3MiLCJUZXh0U2VsZWN0aW9uIiwidGV4dE5vZGUiLCJpbnB1dCIsImNvbXBvc2l0aW9uTm9kZSIsInRleHRQb3MiLCJmaW5kVGV4dEluRnJhZ21lbnQiLCJ0b3BOb2RlIiwicmVtb3ZlQ2hpbGQiLCJjb21wb3NpdGlvbk5vZGVzIiwidXBkYXRlIiwic2FtZU1hcmt1cCIsInVwZGF0ZUlubmVyIiwidXBkYXRlT3V0ZXJEZWNvIiwibmVlZHNXcmFwIiwib2xkRE9NIiwicGF0Y2hPdXRlckRlY28iLCJjb21wdXRlT3V0ZXJEZWNvIiwic2VsZWN0Tm9kZSIsImRlc2VsZWN0Tm9kZSIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlzQXRvbSIsImRvY1ZpZXdEZXNjIiwiX1RleHRWaWV3RGVzYyIsInNraXAiLCJwbUlzRGVjbyIsImluUGFyZW50IiwidHJhY2tXcml0ZXMiLCJuIiwiY3V0IiwibXVsdGlUeXBlIiwiZGVzY3MiLCJ3cml0dGVuIiwiY2hpbGRET00iLCJybSIsImluc2VydEJlZm9yZSIsIk91dGVyRGVjb0xldmVsIiwiT2JqZWN0Iiwibm9EZWNvIiwidmFsIiwiaXNJbmxpbmUiLCJjbGFzcyIsIm91dGVyRE9NIiwicHJldkNvbXB1dGVkIiwiY3VyQ29tcHV0ZWQiLCJjdXJET00iLCJkZWNvIiwidG9Mb3dlckNhc2UiLCJwYXRjaEF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJwcmV2TGlzdCIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImN1ckxpc3QiLCJpbmRleE9mIiwicHJvcCIsIm0iLCJyZW1vdmVQcm9wZXJ0eSIsImNzc1RleHQiLCJhIiwiYiIsImxvY2siLCJwcmVNYXRjaCIsImRlc3Ryb3lCZXR3ZWVuIiwic3BsaWNlIiwia2VlcCIsIm1heEtlZXAiLCJzcGFubmluZyIsInBvcCIsImZvdW5kIiwiaXNMb2NrZWQiLCJtYXJrRGVzYyIsInRhcmdldERlc2MiLCJtYXRjaGVzIiwiZSIsIm1hdGNoZWQiLCJoYXMiLCJkb21Ob2RlIiwicHJlTWF0Y2gyIiwiZ2V0IiwibmV4dERPTSIsInVwZGF0ZWQiLCJsb2NrZWQiLCJyZWNyZWF0ZVdyYXBwZXIiLCJ3cmFwcGVyIiwiY2giLCJyZXF1aXJlc0dlY2tvSGFja05vZGUiLCJhZGRIYWNrTm9kZSIsImNsYXNzTmFtZSIsImFsdCIsImhhY2siLCJmcmFnIiwicGFyZW50RGVzYyIsImN1ckRlc2MiLCJkZXNjSSIsImZJIiwiTWFwIiwib3V0ZXIiLCJzZXQiLCJyZXZlcnNlIiwiY29tcGFyZVNpZGUiLCJvbldpZGdldCIsIm9uTm9kZSIsImxvY2FscyIsImZvckNoaWxkIiwiZGVjb0luZGV4IiwicmVzdE5vZGUiLCJwYXJlbnRJbmRleCIsIndpZGdldHMiLCJzb3J0IiwiY3V0QXQiLCJkIiwib2xkQ1NTIiwid2luZG93IiwibGlzdFN0eWxlIiwiY2hpbGRTdGFydCIsInN0ciIsImxhc3RJbmRleE9mIiwicmVwbGFjZW1lbnQiLCJzZWxlY3Rpb25Gcm9tRE9NIiwib3JpZ2luIiwiaW5XaWRnZXQiLCJuZWFyZXN0RGVzY05vZGUiLCJOb2RlU2VsZWN0aW9uIiwiaXNTZWxlY3RhYmxlIiwiU2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJlbmRDb250YWluZXIiLCJlbmRPZmZzZXQiLCIkYW5jaG9yIiwic2VsZWN0aW9uQmV0d2VlbiIsImVkaXRvck93bnNTZWxlY3Rpb24iLCJlZGl0YWJsZSIsImhhc0ZvY3VzIiwiaGFzU2VsZWN0aW9uIiwic2VsZWN0aW9uVG9ET00iLCJzeW5jTm9kZVNlbGVjdGlvbiIsIm1vdXNlRG93biIsImFsbG93RGVmYXVsdCIsImN1clNlbCIsImRvbU9ic2VydmVyIiwiY3VycmVudFNlbGVjdGlvbiIsImRlbGF5ZWRTZWxlY3Rpb25TeW5jIiwic2V0Q3VyU2VsZWN0aW9uIiwiZGlzY29ubmVjdFNlbGVjdGlvbiIsImN1cnNvcldyYXBwZXIiLCJzZWxlY3RDdXJzb3JXcmFwcGVyIiwicmVzZXRFZGl0YWJsZUZyb20iLCJyZXNldEVkaXRhYmxlVG8iLCJicm9rZW5TZWxlY3RCZXR3ZWVuVW5lZGl0YWJsZSIsInRlbXBvcmFyaWx5RWRpdGFibGVOZWFyIiwicmVzZXRFZGl0YWJsZSIsInZpc2libGUiLCJyZW1vdmVDbGFzc09uU2VsZWN0aW9uQ2hhbmdlIiwiY29ubmVjdFNlbGVjdGlvbiIsInNldEVkaXRhYmxlIiwid2FzRHJhZ2dhYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVTZWxlY3Rpb25HdWFyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiaW1nIiwiZGlzYWJsZWQiLCJsYXN0U2VsZWN0ZWRWaWV3RGVzYyIsImNsZWFyTm9kZVNlbGVjdGlvbiIsImJldHdlZW4iLCJoYXNGb2N1c0FuZFNlbGVjdGlvbiIsImFuY2hvckluUmlnaHRQbGFjZSIsIm1vdmVTZWxlY3Rpb25CbG9jayIsIiRzaWRlIiwiJHN0YXJ0IiwiZmluZEZyb20iLCJhcHBseSIsImRpc3BhdGNoIiwidHIiLCJzY3JvbGxJbnRvVmlldyIsInNlbGVjdEhvcml6b250YWxseSIsIm1vZHMiLCJ0ZXh0T2Zmc2V0Iiwibm9kZUJlZm9yZSIsIm5vZGVBZnRlciIsIiRuZXdIZWFkIiwibm9kZVBvcyIsIm5vZGVMZW4iLCJpc0lnbm9yYWJsZSIsInNraXBJZ25vcmVkTm9kZXMiLCJza2lwSWdub3JlZE5vZGVzQmVmb3JlIiwic2tpcElnbm9yZWROb2Rlc0FmdGVyIiwibW92ZU5vZGUiLCJtb3ZlT2Zmc2V0IiwiaXNCbG9ja05vZGUiLCJzZXRTZWxGb2N1cyIsInRleHROb2RlQWZ0ZXIiLCJ0ZXh0Tm9kZUJlZm9yZSIsImZpbmREaXJlY3Rpb24iLCJtaWQiLCJhYnMiLCJjb21wdXRlZCIsImRpcmVjdGlvbiIsInNlbGVjdFZlcnRpY2FsbHkiLCJiZXlvbmQiLCJBbGxTZWxlY3Rpb24iLCJuZWFyIiwic3RvcE5hdGl2ZUhvcml6b250YWxEZWxldGUiLCJlbXB0eTIiLCJzYW1lUGFyZW50IiwibmV4dE5vZGUiLCJkZWxldGUiLCJzd2l0Y2hFZGl0YWJsZSIsInNhZmFyaURvd25BcnJvd0J1ZyIsImdldE1vZHMiLCJjdHJsS2V5IiwibWV0YUtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwiY2FwdHVyZUtleURvd24iLCJzZXJpYWxpemVGb3JDbGlwYm9hcmQiLCJjb250ZXh0Iiwib3BlblN0YXJ0Iiwib3BlbkVuZCIsImRlZmF1bHRBdHRycyIsInNlcmlhbGl6ZXIiLCJmcm9tU2NoZW1hIiwic2NoZW1hIiwiZGV0YWNoZWREb2MiLCJzZXJpYWxpemVGcmFnbWVudCIsIndyYXBwZXJzIiwid3JhcE1hcCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0QmV0d2VlbiIsInBhcnNlRnJvbUNsaXBib2FyZCIsImh0bWwiLCJwbGFpblRleHQiLCIkY29udGV4dCIsImluQ29kZSIsImFzVGV4dCIsIlNsaWNlIiwicmVwbGFjZSIsInBhcnNlZCIsImZvckVhY2giLCJibG9jayIsInNlcmlhbGl6ZU5vZGUiLCJyZWFkSFRNTCIsInJlc3RvcmVSZXBsYWNlZFNwYWNlcyIsImNvbnRleHROb2RlIiwicXVlcnlTZWxlY3RvciIsInNsaWNlRGF0YSIsImdldEF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsInBhcnNlU2xpY2UiLCJydWxlRnJvbU5vZGUiLCJkb20yIiwiaW5saW5lUGFyZW50cyIsImFkZENvbnRleHQiLCJjbG9zZVNsaWNlIiwibWF4T3BlbiIsIm5vcm1hbGl6ZVNpYmxpbmdzIiwiaXNvbGF0aW5nIiwiZnJhZ21lbnQiLCJtYXRjaCIsImNvbnRlbnRNYXRjaEF0IiwibGFzdFdyYXAiLCJmaW5kV3JhcHBpbmciLCJpbkxhc3QiLCJhZGRUb1NpYmxpbmciLCJjbG9zZVJpZ2h0Iiwid3JhcHBlZCIsIndpdGhXcmFwcGVycyIsIm1hdGNoVHlwZSIsInNpYmxpbmciLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmQiLCJmaWxsIiwiZmlsbEJlZm9yZSIsImNsb3NlUmFuZ2UiLCJ0aGVhZCIsInRib2R5IiwidGZvb3QiLCJjYXB0aW9uIiwiY29sZ3JvdXAiLCJjb2wiLCJ0ZCIsInRoIiwiX2RldGFjaGVkRG9jIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJfcG9saWN5IiwibWF5YmVXcmFwVHJ1c3RlZCIsInRydXN0ZWRUeXBlcyIsImRlZmF1bHRQb2xpY3kiLCJjcmVhdGVQb2xpY3kiLCJjcmVhdGVIVE1MIiwicyIsIm1ldGFzIiwiZmlyc3RUYWciLCJtYXAiLCJqb2luIiwiaW5uZXJIVE1MIiwicXVlcnlTZWxlY3RvckFsbCIsImFycmF5IiwicGFyc2UiLCJoYXNSZXF1aXJlZEF0dHJzIiwiaGFuZGxlcnMiLCJlZGl0SGFuZGxlcnMiLCJwYXNzaXZlSGFuZGxlcnMiLCJ0b3VjaHN0YXJ0IiwidG91Y2htb3ZlIiwiSW5wdXRTdGF0ZSIsImxhc3RLZXlDb2RlIiwibGFzdEtleUNvZGVUaW1lIiwibGFzdENsaWNrIiwidGltZSIsImJ1dHRvbiIsImxhc3RTZWxlY3Rpb25PcmlnaW4iLCJsYXN0U2VsZWN0aW9uVGltZSIsImxhc3RJT1NFbnRlciIsImxhc3RJT1NFbnRlckZhbGxiYWNrVGltZW91dCIsImxhc3RGb2N1cyIsImxhc3RUb3VjaCIsImxhc3RDaHJvbWVEZWxldGUiLCJjb21wb3NpbmdUaW1lb3V0IiwiY29tcG9zaXRpb25FbmRlZEF0IiwiY29tcG9zaXRpb25JRCIsImNvbXBvc2l0aW9uUGVuZGluZ0NoYW5nZXMiLCJkb21DaGFuZ2VDb3VudCIsImV2ZW50SGFuZGxlcnMiLCJpbml0SW5wdXQiLCJoYW5kbGVyIiwiZXZlbnQyIiwiZXZlbnRCZWxvbmdzVG9WaWV3IiwicnVuQ3VzdG9tSGFuZGxlciIsInBhc3NpdmUiLCJlbnN1cmVMaXN0ZW5lcnMiLCJzZXRTZWxlY3Rpb25PcmlnaW4iLCJEYXRlIiwibm93IiwiZGVzdHJveUlucHV0IiwiY2xlYXJUaW1lb3V0IiwiY3VycmVudEhhbmRsZXJzIiwiaGFuZGxlcnMyIiwiZGVmYXVsdFByZXZlbnRlZCIsImJ1YmJsZXMiLCJkaXNwYXRjaEV2ZW50Iiwia2V5ZG93biIsIl9ldmVudCIsImluT3JOZWFyQ29tcG9zaXRpb24iLCJmb3JjZUZsdXNoIiwicHJldmVudERlZmF1bHQiLCJrZXl1cCIsImtleXByZXNzIiwiY2hhckNvZGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJkZWZsdCIsImluc2VydFRleHQiLCJldmVudENvb3JkcyIsImNsaWVudFgiLCJjbGllbnRZIiwiaXNOZWFyIiwiY2xpY2siLCJkeSIsInJ1bkhhbmRsZXJPbkNvbnRleHQiLCJwcm9wTmFtZSIsInVwZGF0ZVNlbGVjdGlvbiIsImZvY3VzZWQiLCJzZXRNZXRhIiwic2VsZWN0Q2xpY2tlZExlYWYiLCJzZWxlY3RDbGlja2VkTm9kZSIsInNlbGVjdGVkTm9kZSIsInNlbGVjdEF0IiwiaGFuZGxlU2luZ2xlQ2xpY2siLCJoYW5kbGVEb3VibGVDbGljayIsImhhbmRsZVRyaXBsZUNsaWNrIiwiZGVmYXVsdFRyaXBsZUNsaWNrIiwiZm9yY2VET01GbHVzaCIsImVuZENvbXBvc2l0aW9uIiwic2VsZWN0Tm9kZU1vZGlmaWVyIiwibW91c2Vkb3duIiwiZmx1c2hlZCIsImRvbmUiLCJNb3VzZURvd24iLCJtaWdodERyYWciLCJzdGFydERvYyIsInRhcmdldFBvcyIsIm5vZGVBdCIsInNlbGVjdGFibGUiLCJhZGRBdHRyIiwic2V0VW5lZGl0YWJsZSIsInVwIiwiYmluZCIsIm1vdmUiLCJ1cGRhdGVBbGxvd0RlZmF1bHQiLCJidXR0b25zIiwiY29udGV4dG1lbnUiLCJ0aW1lU3RhbXAiLCJ0aW1lb3V0Q29tcG9zaXRpb24iLCJjb21wb3NpdGlvbnN0YXJ0IiwiY29tcG9zaXRpb251cGRhdGUiLCJmbHVzaCIsInN0b3JlZE1hcmtzIiwic29tZSIsImluY2x1c2l2ZSIsIm1hcmtDdXJzb3IiLCJzZWwyIiwic2NoZWR1bGVDb21wb3NlRW5kIiwiY29tcG9zaXRpb25lbmQiLCJwZW5kaW5nUmVjb3JkcyIsIlByb21pc2UiLCJ0aGVuIiwiZGVsYXkiLCJjbGVhckNvbXBvc2l0aW9uIiwidGltZXN0YW1wRnJvbUN1c3RvbUV2ZW50IiwiZmluZENvbXBvc2l0aW9uTm9kZSIsInRleHRCZWZvcmUiLCJ0ZXh0QWZ0ZXIiLCJkZXNjQWZ0ZXIiLCJsYXN0Q2hhbmdlZCIsImxhc3RDaGFuZ2VkVGV4dE5vZGUiLCJkZXNjQmVmb3JlIiwicmVzdGFydGluZyIsImZsdXNoaW5nU29vbiIsInNoYXJlZERlcHRoIiwiZGVsZXRlU2VsZWN0aW9uIiwiY2FwdHVyZUNvcHkiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJibHVyIiwiYnJva2VuQ2xpcGJvYXJkQVBJIiwiZGF0YSIsImNsaXBib2FyZERhdGEiLCJjbGVhckRhdGEiLCJzZXREYXRhIiwic2xpY2VTaW5nbGVOb2RlIiwiY2FwdHVyZVBhc3RlIiwicGxhaW4iLCJkb1Bhc3RlIiwicHJlZmVyUGxhaW4iLCJzaW5nbGVOb2RlIiwicmVwbGFjZVNlbGVjdGlvbldpdGgiLCJyZXBsYWNlU2VsZWN0aW9uIiwiZ2V0VGV4dCIsImdldERhdGEiLCJ1cmlzIiwicGFzdGUiLCJEcmFnZ2luZyIsImRyYWdDb3B5TW9kaWZpZXIiLCJkcmFnTW92ZXMiLCJtb3ZlcyIsImRyYWdzdGFydCIsImRhdGFUcmFuc2ZlciIsImRyYWdnZWRTbGljZSIsImZpbGVzIiwiZWZmZWN0QWxsb3dlZCIsImRyYWdnaW5nIiwiZHJhZ2VuZCIsImRyYWdvdmVyIiwiZHJhZ2VudGVyIiwiZHJvcCIsImV2ZW50UG9zIiwiJG1vdXNlIiwiaW5zZXJ0UG9zIiwiZHJvcFBvaW50IiwibWFwcGluZyIsImlzTm9kZSIsImJlZm9yZUluc2VydCIsInJlcGxhY2VSYW5nZVdpdGgiLCJyZXBsYWNlUmFuZ2UiLCJtYXBzIiwiX2Zyb20iLCJfdG8iLCJfbmV3RnJvbSIsIm5ld1RvIiwicmVsYXRlZFRhcmdldCIsImNsZWFyIiwiYmVmb3JlaW5wdXQiLCJpbnB1dFR5cGUiLCJmbHVzaFNvb24iLCIkY3Vyc29yIiwiY29tcGFyZU9ianMiLCJXaWRnZXRUeXBlIiwiX1dpZGdldFR5cGUiLCJub1NwZWMiLCJzcGFuIiwib2xkT2Zmc2V0IiwiZGVsZXRlZCIsIm1hcFJlc3VsdCIsInZhbGlkIiwib3RoZXIiLCJJbmxpbmVUeXBlIiwiX0lubGluZVR5cGUiLCJpbmNsdXNpdmVTdGFydCIsImluY2x1c2l2ZUVuZCIsImlzIiwiTm9kZVR5cGUiLCJfTm9kZVR5cGUiLCJmaW5kSW5kZXgiLCJfRGVjb3JhdGlvbiIsIl9EZWNvcmF0aW9uU2V0IiwibG9jYWwiLCJkZWNvcmF0aW9ucyIsImJ1aWxkVHJlZSIsInByZWRpY2F0ZSIsImZpbmRJbm5lciIsImNoaWxkT2ZmIiwib3B0aW9ucyIsIm1hcElubmVyIiwibmV3TG9jYWwiLCJtYXBwZWQiLCJvblJlbW92ZSIsIm1hcENoaWxkcmVuIiwiYnlQb3MiLCJhZGRJbm5lciIsImNoaWxkTm9kZSIsImNoaWxkT2Zmc2V0IiwiYmFzZU9mZnNldCIsInRha2VTcGFuc0Zvck5vZGUiLCJtb3ZlU3BhbnMiLCJ3aXRob3V0TnVsbHMiLCJjb25jYXQiLCJyZW1vdmVJbm5lciIsInJlbW92ZWQiLCJkZWMiLCJsb2NhbFNldCIsIkRlY29yYXRpb25Hcm91cCIsInJlbW92ZU92ZXJsYXAiLCJsb2NhbHNJbm5lciIsImZvckVhY2hTZXQiLCJfRGVjb3JhdGlvbkdyb3VwIiwibWVtYmVycyIsIm1hcHBlZERlY29zIiwibWVtYmVyIiwic29ydGVkIiwiZXZlcnkiLCJyZWR1Y2UiLCJyIiwib2xkQ2hpbGRyZW4iLCJtb3ZlZCIsIm9sZFN0YXJ0Iiwib2xkRW5kIiwibmV3U3RhcnQiLCJuZXdFbmQiLCJkU2l6ZSIsIm11c3RSZWJ1aWxkIiwiZnJvbUxvY2FsIiwidG9Mb2NhbCIsIm1heWJlQ2hpbGQiLCJtYXBBbmRHYXRoZXJSZW1haW5pbmdEZWNvcmF0aW9ucyIsImJ1aWx0Iiwic3BhbnMiLCJnYXRoZXIiLCJvbGRPZmZzZXQyIiwiaGFzTnVsbHMiLCJsb2NhbFN0YXJ0Iiwic3VidHJlZSIsIndvcmtpbmciLCJpbnNlcnRBaGVhZCIsInZpZXdEZWNvcmF0aW9ucyIsIm9ic2VydmVPcHRpb25zIiwiY2hpbGRMaXN0IiwiY2hhcmFjdGVyRGF0YSIsImNoYXJhY3RlckRhdGFPbGRWYWx1ZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsInVzZUNoYXJEYXRhIiwiU2VsZWN0aW9uU3RhdGUiLCJET01PYnNlcnZlciIsImhhbmRsZURPTUNoYW5nZSIsInF1ZXVlIiwib2JzZXJ2ZXIiLCJvbkNoYXJEYXRhIiwic3VwcHJlc3NpbmdTZWxlY3Rpb25VcGRhdGVzIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInJlbW92ZWROb2RlcyIsInByZXZWYWx1ZSIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwidGFrZVJlY29yZHMiLCJvYnNlcnZlIiwidGFrZSIsImRpc2Nvbm5lY3QiLCJzdXBwcmVzc1NlbGVjdGlvblVwZGF0ZXMiLCJpZ25vcmVTZWxlY3Rpb25DaGFuZ2UiLCJhbmNlc3RvcnMiLCJTZXQiLCJjb250YWluZXIiLCJuZXdTZWwiLCJ0eXBlT3ZlciIsImFkZGVkIiwicmVnaXN0ZXJNdXRhdGlvbiIsImJycyIsImJyIiwiYmxvY2tQYXJlbnQiLCJyZWFkU2VsIiwic2Nyb2xsVG9TZWxlY3Rpb24iLCJjaGVja0NTUyIsImF0dHJpYnV0ZU5hbWUiLCJhZGRlZE5vZGVzIiwiY3NzQ2hlY2tlZCIsIldlYWtNYXAiLCJjc3NDaGVja1dhcm5lZCIsIndoaXRlU3BhY2UiLCJjb25zb2xlIiwicmFuZ2VUb1NlbGVjdGlvblJhbmdlIiwiY3VycmVudEFuY2hvciIsImRvbUF0UG9zIiwic2FmYXJpU2hhZG93U2VsZWN0aW9uUmFuZ2UiLCJnZXRDb21wb3NlZFJhbmdlcyIsInJlYWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJnZXRUYXJnZXRSYW5nZXMiLCJleGVjQ29tbWFuZCIsInBhcnNlQmV0d2VlbiIsImZyb21fIiwidG9fIiwidG9wTWF0Y2giLCJ0b3BPcGVuIiwiZmluZFBvc2l0aW9ucyIsImFuY2hvcjIiLCJyZWFkRE9NQ2hhbmdlIiwiJGJlZm9yZSIsInNoYXJlZCIsImNvbXBhcmUiLCJwcmVmZXJyZWRQb3MiLCJwcmVmZXJyZWRTaWRlIiwiY2hhbmdlIiwiZmluZERpZmYiLCJlbmRBIiwiZW5kQiIsInJlc29sdmVTZWxlY3Rpb24iLCJyZXNvbHZlTm9DYWNoZSIsIiRmcm9tQSIsImlubGluZUNoYW5nZSIsIm5leHRTZWwiLCJsb29rc0xpa2VCYWNrc3BhY2UiLCJjaEZyb20iLCJjaFRvIiwibWtUciIsIm1hcmtDaGFuZ2UiLCJtYXJrc0Fjcm9zcyIsImVuc3VyZU1hcmtzIiwiaXNNYXJrQ2hhbmdlIiwiYWRkTWFyayIsInJlbW92ZU1hcmsiLCJwYXJzZWRTZWwiLCJjdXJNYXJrcyIsInByZXZNYXJrcyIsInJlbW92ZUZyb21TZXQiLCJhZGRUb1NldCIsIm9sZCIsIiRuZXdTdGFydCIsIiRuZXdFbmQiLCJza2lwQ2xvc2luZ0FuZE9wZW5pbmciLCIkbmV4dCIsImZyb21FbmQiLCJtYXlPcGVuIiwiaW5kZXhBZnRlciIsImZpbmREaWZmU3RhcnQiLCJmaW5kRGlmZkVuZCIsImFkanVzdCIsImlzU3Vycm9nYXRlUGFpciIsImNoYXJDb2RlQXQiLCJwbGFjZSIsInByb3BzIiwiX3Jvb3QiLCJtb3VudGVkIiwicHJldkRpcmVjdFBsdWdpbnMiLCJwbHVnaW5WaWV3cyIsIl9wcm9wcyIsImRpcmVjdFBsdWdpbnMiLCJwbHVnaW5zIiwiY2hlY2tTdGF0ZUNvbXBvbmVudCIsIm1vdW50IiwiZ2V0RWRpdGFibGUiLCJ1cGRhdGVDdXJzb3JXcmFwcGVyIiwiYnVpbGROb2RlVmlld3MiLCJjb21wdXRlRG9jRGVjbyIsInVwZGF0ZVBsdWdpblZpZXdzIiwiaGFuZGxlRE9NRXZlbnRzIiwicHJldlByb3BzIiwidXBkYXRlU3RhdGVJbm5lciIsInNldFByb3BzIiwicmVkcmF3IiwidXBkYXRlU2VsIiwicGx1Z2luc0NoYW5nZWQiLCJjaGFuZ2VkTm9kZVZpZXdzIiwic2Nyb2xsIiwidXBkYXRlRG9jIiwib2xkU2Nyb2xsUG9zIiwib3ZlcmZsb3dBbmNob3IiLCJmb3JjZVNlbFVwZGF0ZSIsInNlbGVjdGlvbkNvbnRleHRDaGFuZ2VkIiwiY2hyb21lS2x1ZGdlIiwidXBkYXRlRHJhZ2dlZE5vZGUiLCJkZXN0cm95UGx1Z2luVmlld3MiLCJwcmV2U3RhdGUiLCJwbHVnaW4iLCJwbHVnaW5WaWV3IiwibW92ZWRQb3MiLCJwcm9wMiIsInBhcmVudEVsZW1lbnQiLCJjYWNoZWQiLCJnZXRQcm90b3R5cGVPZiIsInVwZGF0ZVJvb3QiLCJwb3NBdERPTSIsInBhc3RlSFRNTCIsIkNsaXBib2FyZEV2ZW50IiwicGFzdGVUZXh0IiwiaXNEZXN0cm95ZWQiLCJkaXNwYXRjaFRyYW5zYWN0aW9uIiwiY29udGVudGVkaXRhYmxlIiwiYXR0ciIsInRyYW5zbGF0ZSIsInNlbDEiLCJvYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIm5BIiwibkIiLCJmaWx0ZXJUcmFuc2FjdGlvbiIsImFwcGVuZFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwrQkFBQTtBQUFBQyxRQUFBLENBQUFELCtCQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULCtCQUFBOzs7QUNBQSxJQUFBVSx3QkFBQSxHQUFzRUMsT0FBQTtBQUN0RSxJQUFBQyx3QkFBQSxHQUFnRUQsT0FBQTtBQUNoRSxJQUFBRSw0QkFBQSxHQUEwQkYsT0FBQTtBQUUxQixJQUFNRyxRQUFBLEdBQVcsU0FBQUEsQ0FBVUMsSUFBQSxFQUFNO0VBQzdCLFNBQVNDLEtBQUEsR0FBUSxJQUFJQSxLQUFBLElBQVM7SUFDMUJELElBQUEsR0FBT0EsSUFBQSxDQUFLRSxlQUFB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NUIsSUFBSWlwQixFQUFBLEdBQUs7SUFBR0MsRUFBQSxHQUFLO0VBQ2pCLFNBQVN2cEIsSUFBQSxJQUFRSSxDQUFBLEVBQUc7SUFDaEIsSUFBSUEsQ0FBQSxDQUFFSixJQUFJLEtBQUtLLENBQUEsQ0FBRUwsSUFBSSxHQUNqQixPQUFPO0lBQ1hzcEIsRUFBQTtFQUNKO0VBQ0EsU0FBU3BqQyxDQUFBLElBQUttYSxDQUFBLEVBQ1ZrcEIsRUFBQTtFQUNKLE9BQU9ELEVBQUEsSUFBTUMsRUFBQTtBQUNqQjtBQUNBLFNBQVM5QyxvQkFBb0J5QixNQUFBLEVBQVE7RUFDakMsSUFBSUEsTUFBQSxDQUFPdndCLElBQUEsQ0FBSzFJLEtBQUEsSUFBU2k1QixNQUFBLENBQU92d0IsSUFBQSxDQUFLNnhCLGlCQUFBLElBQXFCdEIsTUFBQSxDQUFPdndCLElBQUEsQ0FBSzh4QixpQkFBQSxFQUNsRSxNQUFNLElBQUl4ekIsVUFBQSxDQUFXLHFFQUFxRTtBQUNsRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=