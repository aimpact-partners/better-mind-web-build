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

// .beyond/uimport/temp/@tiptap/extension-image.3.12.0.js
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

// .beyond/uimport/temp/@tiptap/extension-image.3.12.0.js
var extension_image_3_12_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWltYWdlLjMuMTIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1pbWFnZS9zcmMvaW1hZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24taW1hZ2Uvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImV4dGVuc2lvbl9pbWFnZV8zXzEyXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSW1hZ2UiLCJkZWZhdWx0IiwiZXh0ZW5zaW9uX2ltYWdlXzNfMTJfMF9kZWZhdWx0IiwiaW5wdXRSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJOb2RlIiwiY3JlYXRlIiwibmFtZSIsImFkZE9wdGlvbnMiLCJpbmxpbmUiLCJhbGxvd0Jhc2U2NCIsIkhUTUxBdHRyaWJ1dGVzIiwicmVzaXplIiwib3B0aW9ucyIsImdyb3VwIiwiZHJhZ2dhYmxlIiwiYWRkQXR0cmlidXRlcyIsInNyYyIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwYXJzZUhUTUwiLCJ0YWciLCJyZW5kZXJIVE1MIiwibWVyZ2VBdHRyaWJ1dGVzIiwicGFyc2VNYXJrZG93biIsInRva2VuIiwiaGVscGVycyIsImNyZWF0ZU5vZGUiLCJocmVmIiwidGV4dCIsInJlbmRlck1hcmtkb3duIiwibm9kZSIsIl9hIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsImF0dHJzIiwiYWRkTm9kZVZpZXciLCJlbmFibGVkIiwiZG9jdW1lbnQiLCJlZGl0b3IiLCJpc0VkaXRhYmxlIiwiZGlyZWN0aW9ucyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiYWx3YXlzUHJlc2VydmVBc3BlY3RSYXRpbyIsImdldFBvcyIsImVsIiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJub2RlVmlldyIsIlJlc2l6YWJsZU5vZGVWaWV3IiwiZWxlbWVudCIsIm9uUmVzaXplIiwic3R5bGUiLCJvbkNvbW1pdCIsInBvcyIsImNoYWluIiwic2V0Tm9kZVNlbGVjdGlvbiIsInVwZGF0ZUF0dHJpYnV0ZXMiLCJydW4iLCJvblVwZGF0ZSIsInVwZGF0ZWROb2RlIiwiX2RlY29yYXRpb25zIiwiX2lubmVyRGVjb3JhdGlvbnMiLCJ0eXBlIiwibWluIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsImRvbSIsInZpc2liaWxpdHkiLCJwb2ludGVyRXZlbnRzIiwib25sb2FkIiwiYWRkQ29tbWFuZHMiLCJzZXRJbWFnZSIsImNvbW1hbmRzIiwiaW5zZXJ0Q29udGVudCIsImFkZElucHV0UnVsZXMiLCJub2RlSW5wdXRSdWxlIiwiZmluZCIsImdldEF0dHJpYnV0ZXMiLCJtYXRjaCIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDhCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLDhCQUFBOzs7QUNDQSxJQUFBUyxXQUFBLEdBQXdFQyxPQUFBO0FBb0VqRSxJQUFNTCxVQUFBLEdBQWE7QUFNbkIsSUFBTUgsS0FBQSxHQUFRTyxXQUFBLENBQUFFLElBQUEsQ0FBS0MsTUFBQSxDQUFxQjtFQUM3Q0MsSUFBQSxFQUFNO0VBRU5DLFdBQUEsRUFBYTtJQUNYLE9BQU87TUFDTEMsTUFBQSxFQUFRO01BQ1JDLFdBQUEsRUFBYTtNQUNiQyxjQUFBLEVBQWdCLENBQUM7TUFDakJDLE1BQUEsRUFBUTtJQUNWO0VBQ0Y7RUFFQUgsT0FB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