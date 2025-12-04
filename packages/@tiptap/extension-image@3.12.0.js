System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["@tiptap/extension-image","3.12.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep)],
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

// .beyond/uimport/@tiptap/extension-image.3.12.0.js
var extension_image_3_12_0_exports = {};
__export(extension_image_3_12_0_exports, {
  Image: () => Image,
  default: () => extension_image_3_12_0_default,
  inputRegex: () => inputRegex
});
module.exports = __toCommonJS(extension_image_3_12_0_exports);

// node_modules/@tiptap/extension-image/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
var Image = import_core.Node.create({
  name: "image",
  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
      resize: false
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: true,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [{
      tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return ["img", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes)];
  },
  parseMarkdown: (token, helpers) => {
    return helpers.createNode("image", {
      src: token.href,
      title: token.title,
      alt: token.text
    });
  },
  renderMarkdown: node => {
    var _a, _b, _c, _d, _e, _f;
    const src = (_b = (_a = node.attrs) == null ? void 0 : _a.src) != null ? _b : "";
    const alt = (_d = (_c = node.attrs) == null ? void 0 : _c.alt) != null ? _d : "";
    const title = (_f = (_e = node.attrs) == null ? void 0 : _e.title) != null ? _f : "";
    return title ? `![${alt}](${src} "${title}")` : `![${alt}](${src})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document === "undefined" || !this.editor.isEditable) {
      return null;
    }
    const {
      directions,
      minWidth,
      minHeight,
      alwaysPreserveAspectRatio
    } = this.options.resize;
    return ({
      node,
      getPos,
      HTMLAttributes
    }) => {
      const el = document.createElement("img");
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        if (value != null) {
          switch (key) {
            case "width":
            case "height":
              break;
            default:
              el.setAttribute(key, value);
              break;
          }
        }
      });
      el.src = HTMLAttributes.src;
      const nodeView = new import_core.ResizableNodeView({
        element: el,
        node,
        getPos,
        onResize: (width, height) => {
          el.style.width = `${width}px`;
          el.style.height = `${height}px`;
        },
        onCommit: (width, height) => {
          const pos = getPos();
          if (pos === void 0) {
            return;
          }
          this.editor.chain().setNodeSelection(pos).updateAttributes(this.name, {
            width,
            height
          }).run();
        },
        onUpdate: (updatedNode, _decorations, _innerDecorations) => {
          if (updatedNode.type !== node.type) {
            return false;
          }
          return true;
        },
        options: {
          directions,
          min: {
            width: minWidth,
            height: minHeight
          },
          preserveAspectRatio: alwaysPreserveAspectRatio === true
        }
      });
      const dom = nodeView.dom;
      dom.style.visibility = "hidden";
      dom.style.pointerEvents = "none";
      el.onload = () => {
        dom.style.visibility = "";
        dom.style.pointerEvents = "";
      };
      return nodeView;
    };
  },
  addCommands() {
    return {
      setImage: options => ({
        commands
      }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },
  addInputRules() {
    return [(0, import_core.nodeInputRule)({
      find: inputRegex,
      type: this.type,
      getAttributes: match => {
        const [,, alt, src, title] = match;
        return {
          src,
          alt,
          title
        };
      }
    })];
  }
});
var index_default = Image;

// .beyond/uimport/@tiptap/extension-image.3.12.0.js
var extension_image_3_12_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZS4zLjEyLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taW1hZ2Uvc3JjL2ltYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWltYWdlL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25faW1hZ2VfM18xMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkltYWdlIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9pbWFnZV8zXzEyXzBfZGVmYXVsdCIsImlucHV0UmVnZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiTm9kZSIsImNyZWF0ZSIsIm5hbWUiLCJhZGRPcHRpb25zIiwiaW5saW5lIiwiYWxsb3dCYXNlNjQiLCJIVE1MQXR0cmlidXRlcyIsInJlc2l6ZSIsIm9wdGlvbnMiLCJncm91cCIsImRyYWdnYWJsZSIsImFkZEF0dHJpYnV0ZXMiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFyc2VIVE1MIiwidGFnIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsInBhcnNlTWFya2Rvd24iLCJ0b2tlbiIsImhlbHBlcnMiLCJjcmVhdGVOb2RlIiwiaHJlZiIsInRleHQiLCJyZW5kZXJNYXJrZG93biIsIm5vZGUiLCJfYSIsIl9iIiwiX2MiLCJfZCIsIl9lIiwiX2YiLCJhdHRycyIsImFkZE5vZGVWaWV3IiwiZW5hYmxlZCIsImRvY3VtZW50IiwiZWRpdG9yIiwiaXNFZGl0YWJsZSIsImRpcmVjdGlvbnMiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImFsd2F5c1ByZXNlcnZlQXNwZWN0UmF0aW8iLCJnZXRQb3MiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwibm9kZVZpZXciLCJSZXNpemFibGVOb2RlVmlldyIsImVsZW1lbnQiLCJvblJlc2l6ZSIsInN0eWxlIiwib25Db21taXQiLCJwb3MiLCJjaGFpbiIsInNldE5vZGVTZWxlY3Rpb24iLCJ1cGRhdGVBdHRyaWJ1dGVzIiwicnVuIiwib25VcGRhdGUiLCJ1cGRhdGVkTm9kZSIsIl9kZWNvcmF0aW9ucyIsIl9pbm5lckRlY29yYXRpb25zIiwidHlwZSIsIm1pbiIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJkb20iLCJ2aXNpYmlsaXR5IiwicG9pbnRlckV2ZW50cyIsIm9ubG9hZCIsImFkZENvbW1hbmRzIiwic2V0SW1hZ2UiLCJjb21tYW5kcyIsImluc2VydENvbnRlbnQiLCJhZGRJbnB1dFJ1bGVzIiwibm9kZUlucHV0UnVsZSIsImZpbmQiLCJnZXRBdHRyaWJ1dGVzIiwibWF0Y2giLCJpbmRleF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyw4QkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUiw4QkFBQTs7O0FDQ0EsSUFBQVMsV0FBQSxHQUF3RUMsT0FBQTtBQW9FakUsSUFBTUwsVUFBQSxHQUFhO0FBTW5CLElBQU1ILEtBQUEsR0FBUU8sV0FBQSxDQUFBRSxJQUFBLENBQUtDLE1BQUEsQ0FBcUI7RUFDN0NDLElBQUEsRUFBTTtFQUVOQyxXQUFBLEVBQWE7SUFDWCxPQUFPO01BQ0xDLE1BQUEsRUFBUTtNQUNSQyxXQUFBLEVBQWE7TUFDYkMsY0FBQSxFQUFnQixDQUFDO01BQ2pCQyxNQUFBLEVBQVE7SUFDVjtFQUNGO0VBRUFILE9BQUEsRUFB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QXFCM0IseUJBQUEsS0FBOEI7UUFDckQ7TUFDRixDQUFDO01BRUQsTUFBTTRCLEdBQUEsR0FBTWxCLFFBQUEsQ0FBU2tCLEdBQUE7TUFHckJBLEdBQUEsQ0FBSWQsS0FBQSxDQUFNZSxVQUFBLEdBQWE7TUFDdkJELEdBQUEsQ0FBSWQsS0FBQSxDQUFNZ0IsYUFBQSxHQUFnQjtNQUMxQjVCLEVBQUEsQ0FBRzZCLE1BQUEsR0FBUyxNQUFNO1FBQ2hCSCxHQUFBLENBQUlkLEtBQUEsQ0FBTWUsVUFBQSxHQUFhO1FBQ3ZCRCxHQUFBLENBQUlkLEtBQUEsQ0FBTWdCLGFBQUEsR0FBZ0I7TUFDNUI7TUFFQSxPQUFPcEIsUUFBQTtJQUNUO0VBQ0Y7RUFFQXNCLFlBQUEsRUFBYztJQUNaLE9BQU87TUFDTEMsUUFBQSxFQUNFckUsT0FBQSxJQUNBLENBQUM7UUFBRXNFO01BQVMsTUFBTTtRQUNoQixPQUFPQSxRQUFBLENBQVNDLGFBQUEsQ0FBYztVQUM1QlYsSUFBQSxFQUFNLEtBQUtuRSxJQUFBO1VBQ1hpQyxLQUFBLEVBQU8zQjtRQUNULENBQUM7TUFDSDtJQUNKO0VBQ0Y7RUFFQXdFLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEMsSUFDTGxGLFdBQUEsQ0FBQW1GLGFBQUEsRUFBYztNQUNaQyxJQUFBLEVBQU14RixVQUFBO01BQ04yRSxJQUFBLEVBQU0sS0FBS0EsSUFBQTtNQUNYYyxhQUFBLEVBQWVDLEtBQUEsSUFBUztRQUN0QixNQUFNLElBQUt2RSxHQUFBLEVBQUtELEdBQUEsRUFBS0UsS0FBSyxJQUFJc0UsS0FBQTtRQUU5QixPQUFPO1VBQUV4RSxHQUFBO1VBQUtDLEdBQUE7VUFBS0M7UUFBTTtNQUMzQjtJQUNGLENBQUMsRUFDSDtFQUNGO0FBQ0YsQ0FBQztBQzNQRCxJQUFPdUUsYUFBQSxHQUFROUYsS0FBQTs7O0FGRGYsSUFBT0UsOEJBQUEsR0FBUTRGLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9