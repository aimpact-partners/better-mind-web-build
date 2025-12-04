System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["prosemirror-dropcursor","1.8.2"]]);
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

// .beyond/uimport/prosemirror-dropcursor.1.8.2.js
var prosemirror_dropcursor_1_8_2_exports = {};
__export(prosemirror_dropcursor_1_8_2_exports, {
  dropCursor: () => dropCursor
});
module.exports = __toCommonJS(prosemirror_dropcursor_1_8_2_exports);

// node_modules/prosemirror-dropcursor/dist/index.js
var import_prosemirror_state = require("prosemirror-state@1.4.3");
var import_prosemirror_transform = require("prosemirror-transform@1.10.4");
function dropCursor(options = {}) {
  return new import_prosemirror_state.Plugin({
    view(editorView) {
      return new DropCursorView(editorView, options);
    }
  });
}
var DropCursorView = class {
  constructor(editorView, options) {
    var _a;
    this.editorView = editorView;
    this.cursorPos = null;
    this.element = null;
    this.timeout = -1;
    this.width = (_a = options.width) !== null && _a !== void 0 ? _a : 1;
    this.color = options.color === false ? void 0 : options.color || "black";
    this.class = options.class;
    this.handlers = ["dragover", "dragend", "drop", "dragleave"].map(name => {
      let handler = e => {
        this[name](e);
      };
      editorView.dom.addEventListener(name, handler);
      return {
        name,
        handler
      };
    });
  }
  destroy() {
    this.handlers.forEach(({
      name,
      handler
    }) => this.editorView.dom.removeEventListener(name, handler));
  }
  update(editorView, prevState) {
    if (this.cursorPos != null && prevState.doc != editorView.state.doc) {
      if (this.cursorPos > editorView.state.doc.content.size) this.setCursor(null);else this.updateOverlay();
    }
  }
  setCursor(pos) {
    if (pos == this.cursorPos) return;
    this.cursorPos = pos;
    if (pos == null) {
      this.element.parentNode.removeChild(this.element);
      this.element = null;
    } else {
      this.updateOverlay();
    }
  }
  updateOverlay() {
    let $pos = this.editorView.state.doc.resolve(this.cursorPos);
    let isBlock = !$pos.parent.inlineContent,
      rect;
    let editorDOM = this.editorView.dom,
      editorRect = editorDOM.getBoundingClientRect();
    let scaleX = editorRect.width / editorDOM.offsetWidth,
      scaleY = editorRect.height / editorDOM.offsetHeight;
    if (isBlock) {
      let before = $pos.nodeBefore,
        after = $pos.nodeAfter;
      if (before || after) {
        let node = this.editorView.nodeDOM(this.cursorPos - (before ? before.nodeSize : 0));
        if (node) {
          let nodeRect = node.getBoundingClientRect();
          let top = before ? nodeRect.bottom : nodeRect.top;
          if (before && after) top = (top + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2;
          let halfWidth = this.width / 2 * scaleY;
          rect = {
            left: nodeRect.left,
            right: nodeRect.right,
            top: top - halfWidth,
            bottom: top + halfWidth
          };
        }
      }
    }
    if (!rect) {
      let coords = this.editorView.coordsAtPos(this.cursorPos);
      let halfWidth = this.width / 2 * scaleX;
      rect = {
        left: coords.left - halfWidth,
        right: coords.left + halfWidth,
        top: coords.top,
        bottom: coords.bottom
      };
    }
    let parent = this.editorView.dom.offsetParent;
    if (!this.element) {
      this.element = parent.appendChild(document.createElement("div"));
      if (this.class) this.element.className = this.class;
      this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;";
      if (this.color) {
        this.element.style.backgroundColor = this.color;
      }
    }
    this.element.classList.toggle("prosemirror-dropcursor-block", isBlock);
    this.element.classList.toggle("prosemirror-dropcursor-inline", !isBlock);
    let parentLeft, parentTop;
    if (!parent || parent == document.body && getComputedStyle(parent).position == "static") {
      parentLeft = -pageXOffset;
      parentTop = -pageYOffset;
    } else {
      let rect2 = parent.getBoundingClientRect();
      let parentScaleX = rect2.width / parent.offsetWidth,
        parentScaleY = rect2.height / parent.offsetHeight;
      parentLeft = rect2.left - parent.scrollLeft * parentScaleX;
      parentTop = rect2.top - parent.scrollTop * parentScaleY;
    }
    this.element.style.left = (rect.left - parentLeft) / scaleX + "px";
    this.element.style.top = (rect.top - parentTop) / scaleY + "px";
    this.element.style.width = (rect.right - rect.left) / scaleX + "px";
    this.element.style.height = (rect.bottom - rect.top) / scaleY + "px";
  }
  scheduleRemoval(timeout) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setCursor(null), timeout);
  }
  dragover(event) {
    if (!this.editorView.editable) return;
    let pos = this.editorView.posAtCoords({
      left: event.clientX,
      top: event.clientY
    });
    let node = pos && pos.inside >= 0 && this.editorView.state.doc.nodeAt(pos.inside);
    let disableDropCursor = node && node.type.spec.disableDropCursor;
    let disabled = typeof disableDropCursor == "function" ? disableDropCursor(this.editorView, pos, event) : disableDropCursor;
    if (pos && !disabled) {
      let target = pos.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let point = (0, import_prosemirror_transform.dropPoint)(this.editorView.state.doc, target, this.editorView.dragging.slice);
        if (point != null) target = point;
      }
      this.setCursor(target);
      this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(event) {
    if (!this.editorView.dom.contains(event.relatedTarget)) this.setCursor(null);
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9wcm9zZW1pcnJvci1kcm9wY3Vyc29yLjEuOC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLWRyb3BjdXJzb3IvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9zZW1pcnJvcl9kcm9wY3Vyc29yXzFfOF8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRyb3BDdXJzb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3Byb3NlbWlycm9yX3N0YXRlIiwicmVxdWlyZSIsImltcG9ydF9wcm9zZW1pcnJvcl90cmFuc2Zvcm0iLCJvcHRpb25zIiwiUGx1Z2luIiwidmlldyIsImVkaXRvclZpZXciLCJEcm9wQ3Vyc29yVmlldyIsImNvbnN0cnVjdG9yIiwiX2EiLCJjdXJzb3JQb3MiLCJlbGVtZW50IiwidGltZW91dCIsIndpZHRoIiwiY29sb3IiLCJjbGFzcyIsImhhbmRsZXJzIiwibWFwIiwibmFtZSIsImhhbmRsZXIiLCJlIiwiZG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJmb3JFYWNoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZSIsInByZXZTdGF0ZSIsImRvYyIsInN0YXRlIiwiY29udGVudCIsInNpemUiLCJzZXRDdXJzb3IiLCJ1cGRhdGVPdmVybGF5IiwicG9zIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiJHBvcyIsInJlc29sdmUiLCJpc0Jsb2NrIiwicGFyZW50IiwiaW5saW5lQ29udGVudCIsInJlY3QiLCJlZGl0b3JET00iLCJlZGl0b3JSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2NhbGVYIiwib2Zmc2V0V2lkdGgiLCJzY2FsZVkiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJiZWZvcmUiLCJub2RlQmVmb3JlIiwiYWZ0ZXIiLCJub2RlQWZ0ZXIiLCJub2RlIiwibm9kZURPTSIsIm5vZGVTaXplIiwibm9kZVJlY3QiLCJ0b3AiLCJib3R0b20iLCJoYWxmV2lkdGgiLCJsZWZ0IiwicmlnaHQiLCJjb29yZHMiLCJjb29yZHNBdFBvcyIsIm9mZnNldFBhcmVudCIsImFwcGVuZENoaWxkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjc3NUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGFyZW50TGVmdCIsInBhcmVudFRvcCIsImJvZHkiLCJnZXRDb21wdXRlZFN0eWxlIiwicG9zaXRpb24iLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0IiwicmVjdDIiLCJwYXJlbnRTY2FsZVgiLCJwYXJlbnRTY2FsZVkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwic2NoZWR1bGVSZW1vdmFsIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRyYWdvdmVyIiwiZXZlbnQiLCJlZGl0YWJsZSIsInBvc0F0Q29vcmRzIiwiY2xpZW50WCIsImNsaWVudFkiLCJpbnNpZGUiLCJub2RlQXQiLCJkaXNhYmxlRHJvcEN1cnNvciIsInR5cGUiLCJzcGVjIiwiZGlzYWJsZWQiLCJ0YXJnZXQiLCJkcmFnZ2luZyIsInNsaWNlIiwicG9pbnQiLCJkcm9wUG9pbnQiLCJkcmFnZW5kIiwiZHJvcCIsImRyYWdsZWF2ZSIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQ0FBQTtFQUFBRSxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxvQ0FBQTs7O0FDQUEsSUFBQU0sd0JBQUEsR0FBdUJDLE9BQUE7QUFDdkIsSUFBQUMsNEJBQUEsR0FBMEJELE9BQUE7QUFZMUIsU0FBU0wsV0FBV08sT0FBQSxHQUFVLENBQUMsR0FBRztFQUM5QixP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T0FBQTtNQUFTcEMsR0FBQSxFQUFLaUMsS0FBQSxDQUFNSTtJQUFRLENBQUM7SUFDakYsSUFBSXpDLElBQUEsR0FBT3JCLEdBQUEsSUFBT0EsR0FBQSxDQUFJK0QsTUFBQSxJQUFVLEtBQUssS0FBSzNGLFVBQUEsQ0FBV3VCLEtBQUEsQ0FBTUQsR0FBQSxDQUFJc0UsTUFBQSxDQUFPaEUsR0FBQSxDQUFJK0QsTUFBTTtJQUNoRixJQUFJRSxpQkFBQSxHQUFvQjVDLElBQUEsSUFBUUEsSUFBQSxDQUFLNkMsSUFBQSxDQUFLQyxJQUFBLENBQUtGLGlCQUFBO0lBQy9DLElBQUlHLFFBQUEsR0FBVyxPQUFPSCxpQkFBQSxJQUFxQixhQUNyQ0EsaUJBQUEsQ0FBa0IsS0FBSzdGLFVBQUEsRUFBWTRCLEdBQUEsRUFBSzBELEtBQUssSUFDN0NPLGlCQUFBO0lBQ04sSUFBSWpFLEdBQUEsSUFBTyxDQUFDb0UsUUFBQSxFQUFVO01BQ2xCLElBQUlDLE1BQUEsR0FBU3JFLEdBQUEsQ0FBSUEsR0FBQTtNQUNqQixJQUFJLEtBQUs1QixVQUFBLENBQVdrRyxRQUFBLElBQVksS0FBS2xHLFVBQUEsQ0FBV2tHLFFBQUEsQ0FBU0MsS0FBQSxFQUFPO1FBQzVELElBQUlDLEtBQUEsT0FBUXhHLDRCQUFBLENBQUF5RyxTQUFBLEVBQVUsS0FBS3JHLFVBQUEsQ0FBV3VCLEtBQUEsQ0FBTUQsR0FBQSxFQUFLMkUsTUFBQSxFQUFRLEtBQUtqRyxVQUFBLENBQVdrRyxRQUFBLENBQVNDLEtBQUs7UUFDdkYsSUFBSUMsS0FBQSxJQUFTLE1BQ1RILE1BQUEsR0FBU0csS0FBQTtNQUNqQjtNQUNBLEtBQUsxRSxTQUFBLENBQVV1RSxNQUFNO01BQ3JCLEtBQUtmLGVBQUEsQ0FBZ0IsR0FBSTtJQUM3QjtFQUNKO0VBQ0FvQixRQUFBLEVBQVU7SUFDTixLQUFLcEIsZUFBQSxDQUFnQixFQUFFO0VBQzNCO0VBQ0FxQixLQUFBLEVBQU87SUFDSCxLQUFLckIsZUFBQSxDQUFnQixFQUFFO0VBQzNCO0VBQ0FzQixVQUFVbEIsS0FBQSxFQUFPO0lBQ2IsSUFBSSxDQUFDLEtBQUt0RixVQUFBLENBQVdlLEdBQUEsQ0FBSTBGLFFBQUEsQ0FBU25CLEtBQUEsQ0FBTW9CLGFBQWEsR0FDakQsS0FBS2hGLFNBQUEsQ0FBVSxJQUFJO0VBQzNCO0FBQ0oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9