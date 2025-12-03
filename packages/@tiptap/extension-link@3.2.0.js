System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","prosemirror-state@1.4.3","@tiptap/pm@3.2.0/state","prosemirror-view@1.40.1","@tiptap/pm@3.2.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.2.0/keymap","@tiptap/pm@3.2.0/transform","@tiptap/pm@3.2.0/model","prosemirror-commands@1.7.1","@tiptap/pm@3.2.0/commands","prosemirror-schema-list@1.5.1","@tiptap/pm@3.2.0/schema-list","@tiptap/core@3.2.0","linkifyjs@4.3.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["prosemirror-state","1.4.3"],["@tiptap/pm","3.2.0"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["@tiptap/core","3.2.0"],["linkifyjs","4.3.2"],["@tiptap/extension-link","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/state', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.2.0/keymap', dep), dep => dependencies.set('@tiptap/pm@3.2.0/transform', dep), dep => dependencies.set('@tiptap/pm@3.2.0/model', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/commands', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.2.0/schema-list', dep), dep => dependencies.set('@tiptap/core@3.2.0', dep), dep => dependencies.set('linkifyjs@4.3.2', dep)],
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

// .beyond/uimport/temp/@tiptap/extension-link.3.2.0.js
var extension_link_3_2_0_exports = {};
__export(extension_link_3_2_0_exports, {
  Link: () => Link,
  default: () => extension_link_3_2_0_default,
  isAllowedUri: () => isAllowedUri,
  pasteRegex: () => pasteRegex
});
module.exports = __toCommonJS(extension_link_3_2_0_exports);

// node_modules/@tiptap/extension-link/dist/index.js
var import_core = require("@tiptap/core@3.2.0");
var import_linkifyjs = require("linkifyjs@4.3.2");
var import_core2 = require("@tiptap/core@3.2.0");
var import_state = require("@tiptap/pm@3.2.0/state");
var import_linkifyjs2 = require("linkifyjs@4.3.2");
var import_core3 = require("@tiptap/core@3.2.0");
var import_state2 = require("@tiptap/pm@3.2.0/state");
var import_state3 = require("@tiptap/pm@3.2.0/state");
var import_linkifyjs3 = require("linkifyjs@4.3.2");
var UNICODE_WHITESPACE_PATTERN = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]";
var UNICODE_WHITESPACE_REGEX = new RegExp(UNICODE_WHITESPACE_PATTERN);
var UNICODE_WHITESPACE_REGEX_END = new RegExp(`${UNICODE_WHITESPACE_PATTERN}$`);
var UNICODE_WHITESPACE_REGEX_GLOBAL = new RegExp(UNICODE_WHITESPACE_PATTERN, "g");
function isValidLinkStructure(tokens) {
  if (tokens.length === 1) {
    return tokens[0].isLink;
  }
  if (tokens.length === 3 && tokens[1].isLink) {
    return ["()", "[]"].includes(tokens[0].value + tokens[2].value);
  }
  return false;
}
function autolink(options) {
  return new import_state.Plugin({
    key: new import_state.PluginKey("autolink"),
    appendTransaction: (transactions, oldState, newState) => {
      const docChanges = transactions.some(transaction => transaction.docChanged) && !oldState.doc.eq(newState.doc);
      const preventAutolink = transactions.some(transaction => transaction.getMeta("preventAutolink"));
      if (!docChanges || preventAutolink) {
        return;
      }
      const {
        tr
      } = newState;
      const transform = (0, import_core2.combineTransactionSteps)(oldState.doc, [...transactions]);
      const changes = (0, import_core2.getChangedRanges)(transform);
      changes.forEach(({
        newRange
      }) => {
        const nodesInChangedRanges = (0, import_core2.findChildrenInRange)(newState.doc, newRange, node => node.isTextblock);
        let textBlock;
        let textBeforeWhitespace;
        if (nodesInChangedRanges.length > 1) {
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, textBlock.pos + textBlock.node.nodeSize, void 0, " ");
        } else if (nodesInChangedRanges.length) {
          const endText = newState.doc.textBetween(newRange.from, newRange.to, " ", " ");
          if (!UNICODE_WHITESPACE_REGEX_END.test(endText)) {
            return;
          }
          textBlock = nodesInChangedRanges[0];
          textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, newRange.to, void 0, " ");
        }
        if (textBlock && textBeforeWhitespace) {
          const wordsBeforeWhitespace = textBeforeWhitespace.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);
          if (wordsBeforeWhitespace.length <= 0) {
            return false;
          }
          const lastWordBeforeSpace = wordsBeforeWhitespace[wordsBeforeWhitespace.length - 1];
          const lastWordAndBlockOffset = textBlock.pos + textBeforeWhitespace.lastIndexOf(lastWordBeforeSpace);
          if (!lastWordBeforeSpace) {
            return false;
          }
          const linksBeforeSpace = (0, import_linkifyjs2.tokenize)(lastWordBeforeSpace).map(t => t.toObject(options.defaultProtocol));
          if (!isValidLinkStructure(linksBeforeSpace)) {
            return false;
          }
          linksBeforeSpace.filter(link => link.isLink).map(link => ({
            ...link,
            from: lastWordAndBlockOffset + link.start + 1,
            to: lastWordAndBlockOffset + link.end + 1
          })).filter(link => {
            if (!newState.schema.marks.code) {
              return true;
            }
            return !newState.doc.rangeHasMark(link.from, link.to, newState.schema.marks.code);
          }).filter(link => options.validate(link.value)).filter(link => options.shouldAutoLink(link.value)).forEach(link => {
            if ((0, import_core2.getMarksBetween)(link.from, link.to, newState.doc).some(item => item.mark.type === options.type)) {
              return;
            }
            tr.addMark(link.from, link.to, options.type.create({
              href: link.href
            }));
          });
        }
      });
      if (!tr.steps.length) {
        return;
      }
      return tr;
    }
  });
}
function clickHandler(options) {
  return new import_state2.Plugin({
    key: new import_state2.PluginKey("handleClickLink"),
    props: {
      handleClick: (view, pos, event) => {
        var _a, _b;
        if (event.button !== 0) {
          return false;
        }
        if (!view.editable) {
          return false;
        }
        let link = null;
        if (event.target instanceof HTMLAnchorElement) {
          link = event.target;
        } else {
          let a = event.target;
          const els = [];
          while (a.nodeName !== "DIV") {
            els.push(a);
            a = a.parentNode;
          }
          link = els.find(value => value.nodeName === "A");
        }
        if (!link) {
          return false;
        }
        const attrs = (0, import_core3.getAttributes)(view.state, options.type.name);
        const href = (_a = link == null ? void 0 : link.href) != null ? _a : attrs.href;
        const target = (_b = link == null ? void 0 : link.target) != null ? _b : attrs.target;
        if (options.enableClickSelection) {
          options.editor.commands.extendMarkRange(options.type.name);
        }
        if (link && href) {
          window.open(href, target);
          return true;
        }
        return false;
      }
    }
  });
}
function pasteHandler(options) {
  return new import_state3.Plugin({
    key: new import_state3.PluginKey("handlePasteLink"),
    props: {
      handlePaste: (view, event, slice) => {
        const {
          state
        } = view;
        const {
          selection
        } = state;
        const {
          empty
        } = selection;
        if (empty) {
          return false;
        }
        let textContent = "";
        slice.content.forEach(node => {
          textContent += node.textContent;
        });
        const link = (0, import_linkifyjs3.find)(textContent, {
          defaultProtocol: options.defaultProtocol
        }).find(item => item.isLink && item.value === textContent);
        if (!textContent || !link) {
          return false;
        }
        return options.editor.commands.setMark(options.type, {
          href: link.href
        });
      }
    }
  });
}
var pasteRegex = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/gi;
function isAllowedUri(uri, protocols) {
  const allowedProtocols = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  if (protocols) {
    protocols.forEach(protocol => {
      const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
      if (nextProtocol) {
        allowedProtocols.push(nextProtocol);
      }
    });
  }
  return !uri || uri.replace(UNICODE_WHITESPACE_REGEX_GLOBAL, "").match(new RegExp(
  // eslint-disable-next-line no-useless-escape
  `^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
var Link = import_core.Mark.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: false,
  exitable: true,
  onCreate() {
    if (this.options.validate && !this.options.shouldAutoLink) {
      this.options.shouldAutoLink = this.options.validate;
      console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
    }
    this.options.protocols.forEach(protocol => {
      if (typeof protocol === "string") {
        (0, import_linkifyjs.registerCustomProtocol)(protocol);
        return;
      }
      (0, import_linkifyjs.registerCustomProtocol)(protocol.scheme, protocol.optionalSlashes);
    });
  },
  onDestroy() {
    (0, import_linkifyjs.reset)();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: true,
      enableClickSelection: false,
      linkOnPaste: true,
      autolink: true,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (url, ctx) => !!isAllowedUri(url, ctx.protocols),
      validate: url => !!url,
      shouldAutoLink: url => !!url
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(element) {
          return element.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [{
      tag: "a[href]",
      getAttrs: dom => {
        const href = dom.getAttribute("href");
        if (!href || !this.options.isAllowedUri(href, {
          defaultValidate: url => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return null;
      }
    }];
  },
  renderHTML({
    HTMLAttributes
  }) {
    if (!this.options.isAllowedUri(HTMLAttributes.href, {
      defaultValidate: href => !!isAllowedUri(href, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    })) {
      return ["a", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, {
        ...HTMLAttributes,
        href: ""
      }), 0];
    }
    return ["a", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      setLink: attributes => ({
        chain
      }) => {
        const {
          href
        } = attributes;
        if (!this.options.isAllowedUri(href, {
          defaultValidate: url => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
      },
      toggleLink: attributes => ({
        chain
      }) => {
        const {
          href
        } = attributes || {};
        if (href && !this.options.isAllowedUri(href, {
          defaultValidate: url => !!isAllowedUri(url, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        })) {
          return false;
        }
        return chain().toggleMark(this.name, attributes, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      },
      unsetLink: () => ({
        chain
      }) => {
        return chain().unsetMark(this.name, {
          extendEmptyMarkRange: true
        }).setMeta("preventAutolink", true).run();
      }
    };
  },
  addPasteRules() {
    return [(0, import_core.markPasteRule)({
      find: text => {
        const foundLinks = [];
        if (text) {
          const {
            protocols,
            defaultProtocol
          } = this.options;
          const links = (0, import_linkifyjs.find)(text).filter(item => item.isLink && this.options.isAllowedUri(item.value, {
            defaultValidate: href => !!isAllowedUri(href, protocols),
            protocols,
            defaultProtocol
          }));
          if (links.length) {
            links.forEach(link => foundLinks.push({
              text: link.value,
              data: {
                href: link.href
              },
              index: link.start
            }));
          }
        }
        return foundLinks;
      },
      type: this.type,
      getAttributes: match => {
        var _a;
        return {
          href: (_a = match.data) == null ? void 0 : _a.href
        };
      }
    })];
  },
  addProseMirrorPlugins() {
    const plugins = [];
    const {
      protocols,
      defaultProtocol
    } = this.options;
    if (this.options.autolink) {
      plugins.push(autolink({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: url => this.options.isAllowedUri(url, {
          defaultValidate: href => !!isAllowedUri(href, protocols),
          protocols,
          defaultProtocol
        }),
        shouldAutoLink: this.options.shouldAutoLink
      }));
    }
    if (this.options.openOnClick === true) {
      plugins.push(clickHandler({
        type: this.type,
        editor: this.editor,
        enableClickSelection: this.options.enableClickSelection
      }));
    }
    if (this.options.linkOnPaste) {
      plugins.push(pasteHandler({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      }));
    }
    return plugins;
  }
});
var index_default = Link;

// .beyond/uimport/temp/@tiptap/extension-link.3.2.0.js
var extension_link_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmsuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGluay9zcmMvbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL2F1dG9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmsvc3JjL2hlbHBlcnMvY2xpY2tIYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmsvc3JjL2hlbHBlcnMvcGFzdGVIYW5kbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmsvc3JjL2hlbHBlcnMvd2hpdGVzcGFjZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJleHRlbnNpb25fbGlua18zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJMaW5rIiwiZGVmYXVsdCIsImV4dGVuc2lvbl9saW5rXzNfMl8wX2RlZmF1bHQiLCJpc0FsbG93ZWRVcmkiLCJwYXN0ZVJlZ2V4IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9jb3JlIiwicmVxdWlyZSIsImltcG9ydF9saW5raWZ5anMiLCJpbXBvcnRfY29yZTIiLCJpbXBvcnRfc3RhdGUiLCJpbXBvcnRfbGlua2lmeWpzMiIsImltcG9ydF9jb3JlMyIsImltcG9ydF9zdGF0ZTIiLCJpbXBvcnRfc3RhdGUzIiwiaW1wb3J0X2xpbmtpZnlqczMiLCJVTklDT0RFX1dISVRFU1BBQ0VfUEFUVEVSTiIsIlVOSUNPREVfV0hJVEVTUEFDRV9SRUdFWCIsIlJlZ0V4cCIsIlVOSUNPREVfV0hJVEVTUEFDRV9SRUdFWF9FTkQiLCJVTklDT0RFX1dISVRFU1BBQ0VfUkVHRVhfR0xPQkFMIiwiaXNWYWxpZExpbmtTdHJ1Y3R1cmUiLCJ0b2tlbnMiLCJsZW5ndGgiLCJpc0xpbmsiLCJpbmNsdWRlcyIsInZhbHVlIiwiYXV0b2xpbmsiLCJvcHRpb25zIiwiUGx1Z2luIiwia2V5IiwiUGx1Z2luS2V5IiwiYXBwZW5kVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbnMiLCJvbGRTdGF0ZSIsIm5ld1N0YXRlIiwiZG9jQ2hhbmdlcyIsInNvbWUiLCJ0cmFuc2FjdGlvbiIsImRvY0NoYW5nZWQiLCJkb2MiLCJlcSIsInByZXZlbnRBdXRvbGluayIsImdldE1ldGEiLCJ0ciIsInRyYW5zZm9ybSIsImNvbWJpbmVUcmFuc2FjdGlvblN0ZXBzIiwiY2hhbmdlcyIsImdldENoYW5nZWRSYW5nZXMiLCJmb3JFYWNoIiwibmV3UmFuZ2UiLCJub2Rlc0luQ2hhbmdlZFJhbmdlcyIsImZpbmRDaGlsZHJlbkluUmFuZ2UiLCJub2RlIiwiaXNUZXh0YmxvY2siLCJ0ZXh0QmxvY2siLCJ0ZXh0QmVmb3JlV2hpdGVzcGFjZSIsInRleHRCZXR3ZWVuIiwicG9zIiwibm9kZVNpemUiLCJlbmRUZXh0IiwiZnJvbSIsInRvIiwidGVzdCIsIndvcmRzQmVmb3JlV2hpdGVzcGFjZSIsInNwbGl0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImxhc3RXb3JkQmVmb3JlU3BhY2UiLCJsYXN0V29yZEFuZEJsb2NrT2Zmc2V0IiwibGFzdEluZGV4T2YiLCJsaW5rc0JlZm9yZVNwYWNlIiwidG9rZW5pemUiLCJtYXAiLCJ0IiwidG9PYmplY3QiLCJkZWZhdWx0UHJvdG9jb2wiLCJsaW5rIiwic3RhcnQiLCJlbmQiLCJzY2hlbWEiLCJtYXJrcyIsImNvZGUiLCJyYW5nZUhhc01hcmsiLCJ2YWxpZGF0ZSIsInNob3VsZEF1dG9MaW5rIiwiZ2V0TWFya3NCZXR3ZWVuIiwiaXRlbSIsIm1hcmsiLCJ0eXBlIiwiYWRkTWFyayIsImNyZWF0ZSIsImhyZWYiLCJzdGVwcyIsImNsaWNrSGFuZGxlciIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJ2aWV3IiwiZXZlbnQiLCJfYSIsIl9iIiwiYnV0dG9uIiwiZWRpdGFibGUiLCJ0YXJnZXQiLCJIVE1MQW5jaG9yRWxlbWVudCIsImEiLCJlbHMiLCJub2RlTmFtZSIsInB1c2giLCJwYXJlbnROb2RlIiwiZmluZCIsImF0dHJzIiwiZ2V0QXR0cmlidXRlcyIsInN0YXRlIiwibmFtZSIsImVuYWJsZUNsaWNrU2VsZWN0aW9uIiwiZWRpdG9yIiwiY29tbWFuZHMiLCJleHRlbmRNYXJrUmFuZ2UiLCJ3aW5kb3ciLCJvcGVuIiwicGFzdGVIYW5kbGVyIiwiaGFuZGxlUGFzdGUiLCJzbGljZSIsInNlbGVjdGlvbiIsImVtcHR5IiwidGV4dENvbnRlbnQiLCJjb250ZW50Iiwic2V0TWFyayIsInVyaSIsInByb3RvY29scyIsImFsbG93ZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsIm5leHRQcm90b2NvbCIsInNjaGVtZSIsInJlcGxhY2UiLCJtYXRjaCIsImpvaW4iLCJNYXJrIiwicHJpb3JpdHkiLCJrZWVwT25TcGxpdCIsImV4aXRhYmxlIiwib25DcmVhdGUiLCJjb25zb2xlIiwid2FybiIsInJlZ2lzdGVyQ3VzdG9tUHJvdG9jb2wiLCJvcHRpb25hbFNsYXNoZXMiLCJvbkRlc3Ryb3kiLCJyZXNldCIsImluY2x1c2l2ZSIsImFkZE9wdGlvbnMiLCJvcGVuT25DbGljayIsImxpbmtPblBhc3RlIiwiSFRNTEF0dHJpYnV0ZXMiLCJyZWwiLCJjbGFzcyIsInVybCIsImN0eCIsImFkZEF0dHJpYnV0ZXMiLCJwYXJzZUhUTUwiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidGFnIiwiZ2V0QXR0cnMiLCJkb20iLCJkZWZhdWx0VmFsaWRhdGUiLCJyZW5kZXJIVE1MIiwibWVyZ2VBdHRyaWJ1dGVzIiwiYWRkQ29tbWFuZHMiLCJzZXRMaW5rIiwiYXR0cmlidXRlcyIsImNoYWluIiwic2V0TWV0YSIsInJ1biIsInRvZ2dsZUxpbmsiLCJ0b2dnbGVNYXJrIiwiZXh0ZW5kRW1wdHlNYXJrUmFuZ2UiLCJ1bnNldExpbmsiLCJ1bnNldE1hcmsiLCJhZGRQYXN0ZVJ1bGVzIiwibWFya1Bhc3RlUnVsZSIsInRleHQiLCJmb3VuZExpbmtzIiwibGlua3MiLCJkYXRhIiwiaW5kZXgiLCJhZGRQcm9zZU1pcnJvclBsdWdpbnMiLCJwbHVnaW5zIiwiaW5kZXhfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsNEJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsNEJBQUE7OztBQ0NBLElBQUFVLFdBQUEsR0FBcURDLE9BQUE7QUFFckQsSUFBQUMsZ0JBQUEsR0FBb0RELE9BQUE7QUNGcEQsSUFBQUUsWUFBQSxHQUFnR0YsT0FBQTtBQUVoRyxJQUFBRyxZQUFBLEdBQWtDSCxPQUFBO0FBRWxDLElBQUFJLGlCQUFBLEdBQXlCSixPQUFBO0FDSnpCLElBQUFLLFlBQUEsR0FBOEJMLE9BQUE7QUFFOUIsSUFBQU0sYUFBQSxHQUFrQ04sT0FBQTtBQ0RsQyxJQUFBTyxhQUFBLEdBQWtDUCxPQUFBO0FBQ2xDLElBQUFRLGlCQUFBLEdBQXFCUixPQUFBO0FDRGQsSUFBTVMsMEJBQUEsR0FBNkI7QUFFbkMsSUFBTUMsd0JBQUEsR0FBMkIsSUFBSUMsTUFBQSxDQUFPRiwwQkFBMEI7QUFDdEUsSUFBTUcsNEJBQUEsR0FBK0IsSUFBSUQsTUFBQSxDQUFPLEdBQUdGLDBCQUEwQixHQUFHO0FBQ2hGLElBQU1JLCtCQUFBLEdBQWtDLElBQUlGLE1BQUEsQ0FBT0YsMEJBQUEsRUFBNEIsR0FBRztBSGF6RixTQUFTSyxxQkFBcUJDLE1BQUEsRUFBbUQ7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ZUFBQSxFQUFpQnpFLElBQUEsSUFBUSxDQUFDLENBQUMzRixZQUFBLENBQWEyRixJQUFBLEVBQU1zQyxTQUFTO1VBQ3ZEQSxTQUFBO1VBQ0F0RDtRQUNGLENBQUM7UUFDSFMsY0FBQSxFQUFnQixLQUFLekQsT0FBQSxDQUFReUQ7TUFDL0IsQ0FBQyxDQUNIO0lBQ0Y7SUFFQSxJQUFJLEtBQUt6RCxPQUFBLENBQVEySCxXQUFBLEtBQWdCLE1BQU07TUFDckNvQyxPQUFBLENBQVEvRSxJQUFBLENBQ05kLFlBQUEsQ0FBYTtRQUNYTCxJQUFBLEVBQU0sS0FBS0EsSUFBQTtRQUNYMkIsTUFBQSxFQUFRLEtBQUtBLE1BQUE7UUFDYkQsb0JBQUEsRUFBc0IsS0FBS3ZGLE9BQUEsQ0FBUXVGO01BQ3JDLENBQUMsQ0FDSDtJQUNGO0lBRUEsSUFBSSxLQUFLdkYsT0FBQSxDQUFRNEgsV0FBQSxFQUFhO01BQzVCbUMsT0FBQSxDQUFRL0UsSUFBQSxDQUNOYSxZQUFBLENBQWE7UUFDWEwsTUFBQSxFQUFRLEtBQUtBLE1BQUE7UUFDYnhDLGVBQUEsRUFBaUIsS0FBS2hELE9BQUEsQ0FBUWdELGVBQUE7UUFDOUJhLElBQUEsRUFBTSxLQUFLQTtNQUNiLENBQUMsQ0FDSDtJQUNGO0lBRUEsT0FBT2tHLE9BQUE7RUFDVDtBQUNGLENBQUM7QUtuYkQsSUFBT0MsYUFBQSxHQUFROUwsSUFBQTs7O0FORGYsSUFBT0UsNEJBQUEsR0FBUTRMLGFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9