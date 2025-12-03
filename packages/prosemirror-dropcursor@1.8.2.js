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

// .beyond/uimport/temp/prosemirror-dropcursor.1.8.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Byb3NlbWlycm9yLWRyb3BjdXJzb3IuMS44LjIuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvc2VtaXJyb3ItZHJvcGN1cnNvci9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3NlbWlycm9yX2Ryb3BjdXJzb3JfMV84XzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZHJvcEN1cnNvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfcHJvc2VtaXJyb3Jfc3RhdGUiLCJyZXF1aXJlIiwiaW1wb3J0X3Byb3NlbWlycm9yX3RyYW5zZm9ybSIsIm9wdGlvbnMiLCJQbHVnaW4iLCJ2aWV3IiwiZWRpdG9yVmlldyIsIkRyb3BDdXJzb3JWaWV3IiwiY29uc3RydWN0b3IiLCJfYSIsImN1cnNvclBvcyIsImVsZW1lbnQiLCJ0aW1lb3V0Iiwid2lkdGgiLCJjb2xvciIsImNsYXNzIiwiaGFuZGxlcnMiLCJtYXAiLCJuYW1lIiwiaGFuZGxlciIsImUiLCJkb20iLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsImZvckVhY2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXBkYXRlIiwicHJldlN0YXRlIiwiZG9jIiwic3RhdGUiLCJjb250ZW50Iiwic2l6ZSIsInNldEN1cnNvciIsInVwZGF0ZU92ZXJsYXkiLCJwb3MiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCIkcG9zIiwicmVzb2x2ZSIsImlzQmxvY2siLCJwYXJlbnQiLCJpbmxpbmVDb250ZW50IiwicmVjdCIsImVkaXRvckRPTSIsImVkaXRvclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY2FsZVgiLCJvZmZzZXRXaWR0aCIsInNjYWxlWSIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsImJlZm9yZSIsIm5vZGVCZWZvcmUiLCJhZnRlciIsIm5vZGVBZnRlciIsIm5vZGUiLCJub2RlRE9NIiwibm9kZVNpemUiLCJub2RlUmVjdCIsInRvcCIsImJvdHRvbSIsImhhbGZXaWR0aCIsImxlZnQiLCJyaWdodCIsImNvb3JkcyIsImNvb3Jkc0F0UG9zIiwib2Zmc2V0UGFyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNzc1RleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJwYXJlbnRMZWZ0IiwicGFyZW50VG9wIiwiYm9keSIsImdldENvbXB1dGVkU3R5bGUiLCJwb3NpdGlvbiIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJyZWN0MiIsInBhcmVudFNjYWxlWCIsInBhcmVudFNjYWxlWSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJzY2hlZHVsZVJlbW92YWwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZHJhZ292ZXIiLCJldmVudCIsImVkaXRhYmxlIiwicG9zQXRDb29yZHMiLCJjbGllbnRYIiwiY2xpZW50WSIsImluc2lkZSIsIm5vZGVBdCIsImRpc2FibGVEcm9wQ3Vyc29yIiwidHlwZSIsInNwZWMiLCJkaXNhYmxlZCIsInRhcmdldCIsImRyYWdnaW5nIiwic2xpY2UiLCJwb2ludCIsImRyb3BQb2ludCIsImRyYWdlbmQiLCJkcm9wIiwiZHJhZ2xlYXZlIiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQ0FBQTtBQUFBQyxRQUFBLENBQUFELG9DQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLG9DQUFBOzs7QUNBQSxJQUFBTSx3QkFBQSxHQUF1QkMsT0FBQTtBQUN2QixJQUFBQyw0QkFBQSxHQUEwQkQsT0FBQTtBQVkxQixTQUFTTCxXQUFXTyxPQUFBLEdBQVUsQ0FBQyxHQUFHO0VBQzlCLE9BQU8sSUFBSUgsd0JBQUEsQ0FBQUksTUFBQSxDQUFPO0lBQ2RDLEtBQUtDLFVBQUEsRUFBWTtNQUFFLE9BQU8sSUFBSUMsY0FBQSxDQUFlRCxVQUFBLEVBQVlILE9BQU87SUFBRztFQUN2RSxDQUFDO0FBQ0w7QUFDQSxJQUFNSSxjQUFBLEdBQU4sTUFBcUI7RUFDakJDLFlBQVlGLFVBQUEsRUFBWUgsT0FBQSxFQUFTO0lBQzdCLElBQUlNLEVBQUE7SUFDSixLQUFLSCxVQUFBLEdBQWFBLFVBQUE7SUFDbEIsS0FBS0ksU0FBQSxHQUFZO0lBQ2pCLEtBQUtDLE9BQUEsR0FBVTtJQUNmLEtBQUtDLE9BQUEsR0FBVTtJQUNmLEtBQUtDLEtBQUEsSUFBU0osRUFBQSxHQUFLTixPQUFBLENBQVFVLEtBQUEsTUFBVyxRQUFRSixFQUFBLEtBQU8sU0FBU0EsRUFBQSxHQUFLO0lBQ25FLEtBQUtLLEtBQUEsR0FBUVgsT0FBQSxDQUFRVyxLQUFBLEtBQVUsUUFBUSxTQUFhWCxPQUFBLENBQVFXLEtBQUEsSUFBUztJQUNyRSxLQUFLQyxLQUFBLEdBQVFaLE9BQUEsQ0FBUVksS0FBQTtJQUNyQixLQUFLQyxRQUFBLEdBQVcsQ0FBQyxZQUFZLFdBQVcsUUFBUSxXQUFXLEVBQUVDLEdBQUEsQ0FBSUMsSUFBQSxJQUFRO01BQ3JFLElBQUlDLE9BQUEsR0FBV0MsQ0FBQSxJQUFNO1FBQUUsS0FBS0YsSUFBSSxFQUFFRSxDQUFDO01BQUc7TUFDdENkLFVBQUEsQ0FBV2UsR0FBQSxDQUFJQyxnQkFBQSxDQUFpQkosSUFBQSxFQUFNQyxPQUFPO01BQzdDLE9BQU87UUFBRUQsSUFBQTtRQUFNQztNQUFRO0lBQzNCLENBQUM7RUFDTDtFQUNBSSxRQUFBLEVBQVU7SUFDTixLQUFLUCxRQUFBLENBQVNRLE9BQUEsQ0FBUSxDQUFDO01BQUVOLElBQUE7TUFBTUM7SUFBUSxNQUFNLEtBQUtiLFVBQUEsQ0FBV2UsR0FBQSxDQUFJSSxtQkFBQSxDQUFvQlAsSUFBQSxFQUFNQyxPQUFPLENBQUM7RUFDdkc7RUFDQU8sT0FBT3BCLFVBQUEsRUFBWXFCLFNBQUEsRUFBVztJQUMxQixJQUFJLEtBQUtqQixTQUFBLElBQWEsUUFBUWlCLFNBQUEsQ0FBVUMsR0FBQSxJQUFPdEIsVUFBQSxDQUFXdUIsS0FBQSxDQUFNRCxHQUFBLEVBQUs7TUFDakUsSUFBSSxLQUFLbEIsU0FBQSxHQUFZSixVQUFBLENBQVd1QixLQUFBLENBQU1ELEdBQUEsQ0FBSUUsT0FBQSxDQUFRQyxJQUFBLEVBQzlDLEtBQUtDLFNBQUEsQ0FBVSxJQUFJLE9BRW5CLEtBQUtDLGFBQUEsQ0FBYztJQUMzQjtFQUNKO0VBQ0FELFVBQVVFLEdBQUEsRUFBSztJQUNYLElBQUlBLEdBQUEsSUFBTyxLQUFLeEIsU0FBQSxFQUNaO0lBQ0osS0FBS0EsU0FBQSxHQUFZd0IsR0FBQTtJQUNqQixJQUFJQSxHQUFBLElBQU8sTUFBTTtNQUNiLEtBQUt2QixPQUFBLENBQVF3QixVQUFBLENBQVdDLFdBQUEsQ0FBWSxLQUFLekIsT0FBTztNQUNoRCxLQUFLQSxPQUFBLEdBQVU7SUFDbkIsT0FDSztNQUNELEtBQUtzQixhQUFBLENBQWM7SUFDdkI7RUFDSjtFQUNBQSxjQUFBLEVBQWdCO0lBQ1osSUFBSUksSUFBQSxHQUFPLEtBQUsvQixVQUFBLENBQVd1QixLQUFBLENBQU1ELEdBQUEsQ0FBSVUsT0FBQSxDQUFRLEtBQUs1QixTQUFTO0lBQzNELElBQUk2QixPQUFBLEdBQVUsQ0FBQ0YsSUFBQSxDQUFLRyxNQUFBLENBQU9DLGFBQUE7TUFBZUMsSUFBQTtJQUMxQyxJQUFJQyxTQUFBLEdBQVksS0FBS3JDLFVBQUEsQ0FBV2UsR0FBQTtNQUFLdUIsVUFBQSxHQUFhRCxTQUFBLENBQVVFLHFCQUFBLENBQXNCO0lBQ2xGLElBQUlDLE1BQUEsR0FBU0YsVUFBQSxDQUFXL0IsS0FBQSxHQUFROEIsU0FBQSxDQUFVSSxXQUFBO01BQWFDLE1BQUEsR0FBU0osVUFBQSxDQUFXSyxNQUFBLEdBQVNOLFNBQUEsQ0FBVU8sWUFBQTtJQUM5RixJQUFJWCxPQUFBLEVBQVM7TUFDVCxJQUFJWSxNQUFBLEdBQVNkLElBQUEsQ0FBS2UsVUFBQTtRQUFZQyxLQUFBLEdBQVFoQixJQUFBLENBQUtpQixTQUFBO01BQzNDLElBQUlILE1BQUEsSUFBVUUsS0FBQSxFQUFPO1FBQ2pCLElBQUlFLElBQUEsR0FBTyxLQUFLakQsVUFBQSxDQUFXa0QsT0FBQSxDQUFRLEtBQUs5QyxTQUFBLElBQWF5QyxNQUFBLEdBQVNBLE1BQUEsQ0FBT00sUUFBQSxHQUFXLEVBQUU7UUFDbEYsSUFBSUYsSUFBQSxFQUFNO1VBQ04sSUFBSUcsUUFBQSxHQUFXSCxJQUFBLENBQUtWLHFCQUFBLENBQXNCO1VBQzFDLElBQUljLEdBQUEsR0FBTVIsTUFBQSxHQUFTTyxRQUFBLENBQVNFLE1BQUEsR0FBU0YsUUFBQSxDQUFTQyxHQUFBO1VBQzlDLElBQUlSLE1BQUEsSUFBVUUsS0FBQSxFQUNWTSxHQUFBLElBQU9BLEdBQUEsR0FBTSxLQUFLckQsVUFBQSxDQUFXa0QsT0FBQSxDQUFRLEtBQUs5QyxTQUFTLEVBQUVtQyxxQkFBQSxDQUFzQixFQUFFYyxHQUFBLElBQU87VUFDeEYsSUFBSUUsU0FBQSxHQUFhLEtBQUtoRCxLQUFBLEdBQVEsSUFBS21DLE1BQUE7VUFDbkNOLElBQUEsR0FBTztZQUFFb0IsSUFBQSxFQUFNSixRQUFBLENBQVNJLElBQUE7WUFBTUMsS0FBQSxFQUFPTCxRQUFBLENBQVNLLEtBQUE7WUFBT0osR0FBQSxFQUFLQSxHQUFBLEdBQU1FLFNBQUE7WUFBV0QsTUFBQSxFQUFRRCxHQUFBLEdBQU1FO1VBQVU7UUFDdkc7TUFDSjtJQUNKO0lBQ0EsSUFBSSxDQUFDbkIsSUFBQSxFQUFNO01BQ1AsSUFBSXNCLE1BQUEsR0FBUyxLQUFLMUQsVUFBQSxDQUFXMkQsV0FBQSxDQUFZLEtBQUt2RCxTQUFTO01BQ3ZELElBQUltRCxTQUFBLEdBQWEsS0FBS2hELEtBQUEsR0FBUSxJQUFLaUMsTUFBQTtNQUNuQ0osSUFBQSxHQUFPO1FBQUVvQixJQUFBLEVBQU1FLE1BQUEsQ0FBT0YsSUFBQSxHQUFPRCxTQUFBO1FBQVdFLEtBQUEsRUFBT0MsTUFBQSxDQUFPRixJQUFBLEdBQU9ELFNBQUE7UUFBV0YsR0FBQSxFQUFLSyxNQUFBLENBQU9MLEdBQUE7UUFBS0MsTUFBQSxFQUFRSSxNQUFBLENBQU9KO01BQU87SUFDbkg7SUFDQSxJQUFJcEIsTUFBQSxHQUFTLEtBQUtsQyxVQUFBLENBQVdlLEdBQUEsQ0FBSTZDLFlBQUE7SUFDakMsSUFBSSxDQUFDLEtBQUt2RCxPQUFBLEVBQVM7TUFDZixLQUFLQSxPQUFBLEdBQVU2QixNQUFBLENBQU8yQixXQUFBLENBQVlDLFFBQUEsQ0FBU0MsYUFBQSxDQUFjLEtBQUssQ0FBQztNQUMvRCxJQUFJLEtBQUt0RCxLQUFBLEVBQ0wsS0FBS0osT0FBQSxDQUFRMkQsU0FBQSxHQUFZLEtBQUt2RCxLQUFBO01BQ2xDLEtBQUtKLE9BQUEsQ0FBUTRELEtBQUEsQ0FBTUMsT0FBQSxHQUFVO01BQzdCLElBQUksS0FBSzFELEtBQUEsRUFBTztRQUNaLEtBQUtILE9BQUEsQ0FBUTRELEtBQUEsQ0FBTUUsZUFBQSxHQUFrQixLQUFLM0QsS0FBQTtNQUM5QztJQUNKO0lBQ0EsS0FBS0gsT0FBQSxDQUFRK0QsU0FBQSxDQUFVQyxNQUFBLENBQU8sZ0NBQWdDcEMsT0FBTztJQUNyRSxLQUFLNUIsT0FBQSxDQUFRK0QsU0FBQSxDQUFVQyxNQUFBLENBQU8saUNBQWlDLENBQUNwQyxPQUFPO0lBQ3ZFLElBQUlxQyxVQUFBLEVBQVlDLFNBQUE7SUFDaEIsSUFBSSxDQUFDckMsTUFBQSxJQUFVQSxNQUFBLElBQVU0QixRQUFBLENBQVNVLElBQUEsSUFBUUMsZ0JBQUEsQ0FBaUJ2QyxNQUFNLEVBQUV3QyxRQUFBLElBQVksVUFBVTtNQUNyRkosVUFBQSxHQUFhLENBQUNLLFdBQUE7TUFDZEosU0FBQSxHQUFZLENBQUNLLFdBQUE7SUFDakIsT0FDSztNQUNELElBQUlDLEtBQUEsR0FBTzNDLE1BQUEsQ0FBT0sscUJBQUEsQ0FBc0I7TUFDeEMsSUFBSXVDLFlBQUEsR0FBZUQsS0FBQSxDQUFLdEUsS0FBQSxHQUFRMkIsTUFBQSxDQUFPTyxXQUFBO1FBQWFzQyxZQUFBLEdBQWVGLEtBQUEsQ0FBS2xDLE1BQUEsR0FBU1QsTUFBQSxDQUFPVSxZQUFBO01BQ3hGMEIsVUFBQSxHQUFhTyxLQUFBLENBQUtyQixJQUFBLEdBQU90QixNQUFBLENBQU84QyxVQUFBLEdBQWFGLFlBQUE7TUFDN0NQLFNBQUEsR0FBWU0sS0FBQSxDQUFLeEIsR0FBQSxHQUFNbkIsTUFBQSxDQUFPK0MsU0FBQSxHQUFZRixZQUFBO0lBQzlDO0lBQ0EsS0FBSzFFLE9BQUEsQ0FBUTRELEtBQUEsQ0FBTVQsSUFBQSxJQUFRcEIsSUFBQSxDQUFLb0IsSUFBQSxHQUFPYyxVQUFBLElBQWM5QixNQUFBLEdBQVM7SUFDOUQsS0FBS25DLE9BQUEsQ0FBUTRELEtBQUEsQ0FBTVosR0FBQSxJQUFPakIsSUFBQSxDQUFLaUIsR0FBQSxHQUFNa0IsU0FBQSxJQUFhN0IsTUFBQSxHQUFTO0lBQzNELEtBQUtyQyxPQUFBLENBQVE0RCxLQUFBLENBQU0xRCxLQUFBLElBQVM2QixJQUFBLENBQUtxQixLQUFBLEdBQVFyQixJQUFBLENBQUtvQixJQUFBLElBQVFoQixNQUFBLEdBQVM7SUFDL0QsS0FBS25DLE9BQUEsQ0FBUTRELEtBQUEsQ0FBTXRCLE1BQUEsSUFBVVAsSUFBQSxDQUFLa0IsTUFBQSxHQUFTbEIsSUFBQSxDQUFLaUIsR0FBQSxJQUFPWCxNQUFBLEdBQVM7RUFDcEU7RUFDQXdDLGdCQUFnQjVFLE9BQUEsRUFBUztJQUNyQjZFLFlBQUEsQ0FBYSxLQUFLN0UsT0FBTztJQUN6QixLQUFLQSxPQUFBLEdBQVU4RSxVQUFBLENBQVcsTUFBTSxLQUFLMUQsU0FBQSxDQUFVLElBQUksR0FBR3BCLE9BQU87RUFDakU7RUFDQStFLFNBQVNDLEtBQUEsRUFBTztJQUNaLElBQUksQ0FBQyxLQUFLdEYsVUFBQSxDQUFXdUYsUUFBQSxFQUNqQjtJQUNKLElBQUkzRCxHQUFBLEdBQU0sS0FBSzVCLFVBQUEsQ0FBV3dGLFdBQUEsQ0FBWTtNQUFFaEMsSUFBQSxFQUFNOEIsS0FBQSxDQUFNRyxPQUFBO01BQVNwQyxHQUFBLEVBQUtpQyxLQUFBLENBQU1JO0lBQVEsQ0FBQztJQUNqRixJQUFJekMsSUFBQSxHQUFPckIsR0FBQSxJQUFPQSxHQUFBLENBQUkrRCxNQUFBLElBQVUsS0FBSyxLQUFLM0YsVUFBQSxDQUFXdUIsS0FBQSxDQUFNRCxHQUFBLENBQUlzRSxNQUFBLENBQU9oRSxHQUFBLENBQUkrRCxNQUFNO0lBQ2hGLElBQUlFLGlCQUFBLEdBQW9CNUMsSUFBQSxJQUFRQSxJQUFBLENBQUs2QyxJQUFBLENBQUtDLElBQUEsQ0FBS0YsaUJBQUE7SUFDL0MsSUFBSUcsUUFBQSxHQUFXLE9BQU9ILGlCQUFBLElBQXFCLGFBQ3JDQSxpQkFBQSxDQUFrQixLQUFLN0YsVUFBQSxFQUFZNEIsR0FBQSxFQUFLMEQsS0FBSyxJQUM3Q08saUJBQUE7SUFDTixJQUFJakUsR0FBQSxJQUFPLENBQUNvRSxRQUFBLEVBQVU7TUFDbEIsSUFBSUMsTUFBQSxHQUFTckUsR0FBQSxDQUFJQSxHQUFBO01BQ2pCLElBQUksS0FBSzVCLFVBQUEsQ0FBV2tHLFFBQUEsSUFBWSxLQUFLbEcsVUFBQSxDQUFXa0csUUFBQSxDQUFTQyxLQUFBLEVBQU87UUFDNUQsSUFBSUMsS0FBQSxPQUFReEcsNEJBQUEsQ0FBQXlHLFNBQUEsRUFBVSxLQUFLckcsVUFBQSxDQUFXdUIsS0FBQSxDQUFNRCxHQUFBLEVBQUsyRSxNQUFBLEVBQVEsS0FBS2pHLFVBQUEsQ0FBV2tHLFFBQUEsQ0FBU0MsS0FBSztRQUN2RixJQUFJQyxLQUFBLElBQVMsTUFDVEgsTUFBQSxHQUFTRyxLQUFBO01BQ2pCO01BQ0EsS0FBSzFFLFNBQUEsQ0FBVXVFLE1BQU07TUFDckIsS0FBS2YsZUFBQSxDQUFnQixHQUFJO0lBQzdCO0VBQ0o7RUFDQW9CLFFBQUEsRUFBVTtJQUNOLEtBQUtwQixlQUFBLENBQWdCLEVBQUU7RUFDM0I7RUFDQXFCLEtBQUEsRUFBTztJQUNILEtBQUtyQixlQUFBLENBQWdCLEVBQUU7RUFDM0I7RUFDQXNCLFVBQVVsQixLQUFBLEVBQU87SUFDYixJQUFJLENBQUMsS0FBS3RGLFVBQUEsQ0FBV2UsR0FBQSxDQUFJMEYsUUFBQSxDQUFTbkIsS0FBQSxDQUFNb0IsYUFBYSxHQUNqRCxLQUFLaEYsU0FBQSxDQUFVLElBQUk7RUFDM0I7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=