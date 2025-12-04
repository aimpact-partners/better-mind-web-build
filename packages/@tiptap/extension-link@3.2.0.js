System.register(["orderedmap@2.1.1","prosemirror-model@1.25.3","prosemirror-transform@1.10.4","@tiptap/pm@3.12.0/transform","prosemirror-state@1.4.3","prosemirror-commands@1.7.1","@tiptap/pm@3.12.0/commands","@tiptap/pm@3.12.0/state","@tiptap/pm@3.12.0/model","prosemirror-schema-list@1.5.1","@tiptap/pm@3.12.0/schema-list","prosemirror-view@1.40.1","@tiptap/pm@3.12.0/view","w3c-keyname@2.2.8","prosemirror-keymap@1.2.3","@tiptap/pm@3.12.0/keymap","@tiptap/core@3.12.0","linkifyjs@4.3.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["orderedmap","2.1.1"],["prosemirror-model","1.25.3"],["prosemirror-transform","1.10.4"],["@tiptap/pm","3.12.0"],["prosemirror-state","1.4.3"],["prosemirror-commands","1.7.1"],["prosemirror-schema-list","1.5.1"],["prosemirror-view","1.40.1"],["w3c-keyname","2.2.8"],["prosemirror-keymap","1.2.3"],["@tiptap/core","3.12.0"],["linkifyjs","4.3.2"],["@tiptap/extension-link","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('orderedmap@2.1.1', dep), dep => dependencies.set('prosemirror-model@1.25.3', dep), dep => dependencies.set('prosemirror-transform@1.10.4', dep), dep => dependencies.set('@tiptap/pm@3.12.0/transform', dep), dep => dependencies.set('prosemirror-state@1.4.3', dep), dep => dependencies.set('prosemirror-commands@1.7.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/commands', dep), dep => dependencies.set('@tiptap/pm@3.12.0/state', dep), dep => dependencies.set('@tiptap/pm@3.12.0/model', dep), dep => dependencies.set('prosemirror-schema-list@1.5.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/schema-list', dep), dep => dependencies.set('prosemirror-view@1.40.1', dep), dep => dependencies.set('@tiptap/pm@3.12.0/view', dep), dep => dependencies.set('w3c-keyname@2.2.8', dep), dep => dependencies.set('prosemirror-keymap@1.2.3', dep), dep => dependencies.set('@tiptap/pm@3.12.0/keymap', dep), dep => dependencies.set('@tiptap/core@3.12.0', dep), dep => dependencies.set('linkifyjs@4.3.2', dep)],
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

// .beyond/uimport/@tiptap/extension-link.3.2.0.js
var extension_link_3_2_0_exports = {};
__export(extension_link_3_2_0_exports, {
  Link: () => Link,
  default: () => extension_link_3_2_0_default,
  isAllowedUri: () => isAllowedUri,
  pasteRegex: () => pasteRegex
});
module.exports = __toCommonJS(extension_link_3_2_0_exports);

// node_modules/@tiptap/extension-link/dist/index.js
var import_core = require("@tiptap/core@3.12.0");
var import_linkifyjs = require("linkifyjs@4.3.2");
var import_core2 = require("@tiptap/core@3.12.0");
var import_state = require("@tiptap/pm@3.12.0/state");
var import_linkifyjs2 = require("linkifyjs@4.3.2");
var import_core3 = require("@tiptap/core@3.12.0");
var import_state2 = require("@tiptap/pm@3.12.0/state");
var import_state3 = require("@tiptap/pm@3.12.0/state");
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

// .beyond/uimport/@tiptap/extension-link.3.2.0.js
var extension_link_3_2_0_default = index_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AdGlwdGFwL2V4dGVuc2lvbi1saW5rLjMuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0B0aXB0YXAvZXh0ZW5zaW9uLWxpbmsvc3JjL2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGluay9zcmMvaGVscGVycy9hdXRvbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL2NsaWNrSGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL3Bhc3RlSGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AdGlwdGFwL2V4dGVuc2lvbi1saW5rL3NyYy9oZWxwZXJzL3doaXRlc3BhY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQHRpcHRhcC9leHRlbnNpb24tbGluay9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiZXh0ZW5zaW9uX2xpbmtfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGluayIsImRlZmF1bHQiLCJleHRlbnNpb25fbGlua18zXzJfMF9kZWZhdWx0IiwiaXNBbGxvd2VkVXJpIiwicGFzdGVSZWdleCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfY29yZSIsInJlcXVpcmUiLCJpbXBvcnRfbGlua2lmeWpzIiwiaW1wb3J0X2NvcmUyIiwiaW1wb3J0X3N0YXRlIiwiaW1wb3J0X2xpbmtpZnlqczIiLCJpbXBvcnRfY29yZTMiLCJpbXBvcnRfc3RhdGUyIiwiaW1wb3J0X3N0YXRlMyIsImltcG9ydF9saW5raWZ5anMzIiwiVU5JQ09ERV9XSElURVNQQUNFX1BBVFRFUk4iLCJVTklDT0RFX1dISVRFU1BBQ0VfUkVHRVgiLCJSZWdFeHAiLCJVTklDT0RFX1dISVRFU1BBQ0VfUkVHRVhfRU5EIiwiVU5JQ09ERV9XSElURVNQQUNFX1JFR0VYX0dMT0JBTCIsImlzVmFsaWRMaW5rU3RydWN0dXJlIiwidG9rZW5zIiwibGVuZ3RoIiwiaXNMaW5rIiwiaW5jbHVkZXMiLCJ2YWx1ZSIsImF1dG9saW5rIiwib3B0aW9ucyIsIlBsdWdpbiIsImtleSIsIlBsdWdpbktleSIsImFwcGVuZFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25zIiwib2xkU3RhdGUiLCJuZXdTdGF0ZSIsImRvY0NoYW5nZXMiLCJzb21lIiwidHJhbnNhY3Rpb24iLCJkb2NDaGFuZ2VkIiwiZG9jIiwiZXEiLCJwcmV2ZW50QXV0b2xpbmsiLCJnZXRNZXRhIiwidHIiLCJ0cmFuc2Zvcm0iLCJjb21iaW5lVHJhbnNhY3Rpb25TdGVwcyIsImNoYW5nZXMiLCJnZXRDaGFuZ2VkUmFuZ2VzIiwiZm9yRWFjaCIsIm5ld1JhbmdlIiwibm9kZXNJbkNoYW5nZWRSYW5nZXMiLCJmaW5kQ2hpbGRyZW5JblJhbmdlIiwibm9kZSIsImlzVGV4dGJsb2NrIiwidGV4dEJsb2NrIiwidGV4dEJlZm9yZVdoaXRlc3BhY2UiLCJ0ZXh0QmV0d2VlbiIsInBvcyIsIm5vZGVTaXplIiwiZW5kVGV4dCIsImZyb20iLCJ0byIsInRlc3QiLCJ3b3Jkc0JlZm9yZVdoaXRlc3BhY2UiLCJzcGxpdCIsImZpbHRlciIsIkJvb2xlYW4iLCJsYXN0V29yZEJlZm9yZVNwYWNlIiwibGFzdFdvcmRBbmRCbG9ja09mZnNldCIsImxhc3RJbmRleE9mIiwibGlua3NCZWZvcmVTcGFjZSIsInRva2VuaXplIiwibWFwIiwidCIsInRvT2JqZWN0IiwiZGVmYXVsdFByb3RvY29sIiwibGluayIsInN0YXJ0IiwiZW5kIiwic2NoZW1hIiwibWFya3MiLCJjb2RlIiwicmFuZ2VIYXNNYXJrIiwidmFsaWRhdGUiLCJzaG91bGRBdXRvTGluayIsImdldE1hcmtzQmV0d2VlbiIsIml0ZW0iLCJtYXJrIiwidHlwZSIsImFkZE1hcmsiLCJjcmVhdGUiLCJocmVmIiwic3RlcHMiLCJjbGlja0hhbmRsZXIiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwidmlldyIsImV2ZW50IiwiX2EiLCJfYiIsImJ1dHRvbiIsImVkaXRhYmxlIiwidGFyZ2V0IiwiSFRNTEFuY2hvckVsZW1lbnQiLCJhIiwiZWxzIiwibm9kZU5hbWUiLCJwdXNoIiwicGFyZW50Tm9kZSIsImZpbmQiLCJhdHRycyIsImdldEF0dHJpYnV0ZXMiLCJzdGF0ZSIsIm5hbWUiLCJlbmFibGVDbGlja1NlbGVjdGlvbiIsImVkaXRvciIsImNvbW1hbmRzIiwiZXh0ZW5kTWFya1JhbmdlIiwid2luZG93Iiwib3BlbiIsInBhc3RlSGFuZGxlciIsImhhbmRsZVBhc3RlIiwic2xpY2UiLCJzZWxlY3Rpb24iLCJlbXB0eSIsInRleHRDb250ZW50IiwiY29udGVudCIsInNldE1hcmsiLCJ1cmkiLCJwcm90b2NvbHMiLCJhbGxvd2VkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJuZXh0UHJvdG9jb2wiLCJzY2hlbWUiLCJyZXBsYWNlIiwibWF0Y2giLCJqb2luIiwiTWFyayIsInByaW9yaXR5Iiwia2VlcE9uU3BsaXQiLCJleGl0YWJsZSIsIm9uQ3JlYXRlIiwiY29uc29sZSIsIndhcm4iLCJyZWdpc3RlckN1c3RvbVByb3RvY29sIiwib3B0aW9uYWxTbGFzaGVzIiwib25EZXN0cm95IiwicmVzZXQiLCJpbmNsdXNpdmUiLCJhZGRPcHRpb25zIiwib3Blbk9uQ2xpY2siLCJsaW5rT25QYXN0ZSIsIkhUTUxBdHRyaWJ1dGVzIiwicmVsIiwiY2xhc3MiLCJ1cmwiLCJjdHgiLCJhZGRBdHRyaWJ1dGVzIiwicGFyc2VIVE1MIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRhZyIsImdldEF0dHJzIiwiZG9tIiwiZGVmYXVsdFZhbGlkYXRlIiwicmVuZGVySFRNTCIsIm1lcmdlQXR0cmlidXRlcyIsImFkZENvbW1hbmRzIiwic2V0TGluayIsImF0dHJpYnV0ZXMiLCJjaGFpbiIsInNldE1ldGEiLCJydW4iLCJ0b2dnbGVMaW5rIiwidG9nZ2xlTWFyayIsImV4dGVuZEVtcHR5TWFya1JhbmdlIiwidW5zZXRMaW5rIiwidW5zZXRNYXJrIiwiYWRkUGFzdGVSdWxlcyIsIm1hcmtQYXN0ZVJ1bGUiLCJ0ZXh0IiwiZm91bmRMaW5rcyIsImxpbmtzIiwiZGF0YSIsImluZGV4IiwiYWRkUHJvc2VNaXJyb3JQbHVnaW5zIiwicGx1Z2lucyIsImluZGV4X2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDRCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULDRCQUFBOzs7QUNDQSxJQUFBVSxXQUFBLEdBQXFEQyxPQUFBO0FBRXJELElBQUFDLGdCQUFBLEdBQW9ERCxPQUFBO0FDRnBELElBQUFFLFlBQUEsR0FBZ0dGLE9BQUE7QUFFaEcsSUFBQUcsWUFBQSxHQUFrQ0gsT0FBQTtBQUVsQyxJQUFBSSxpQkFBQSxHQUF5QkosT0FBQTtBQ0p6QixJQUFBSyxZQUFBLEdBQThCTCxPQUFBO0FBRTlCLElBQUFNLGFBQUEsR0FBa0NOLE9BQUE7QUNEbEMsSUFBQU8sYUFBQSxHQUFrQ1AsT0FBQTtBQUNsQyxJQUFBUSxpQkFBQSxHQUFxQlIsT0FBQTtBQ0RkLElBQU1TLDBCQUFBLEdBQTZCO0FBRW5DLElBQU1DLHdCQUFBLEdBQTJCLElBQUlDLE1BQUEsQ0FBT0YsMEJBQTBCO0FBQ3RFLElBQU1HLDRCQUFBLEdBQStCLElBQUlELE1BQUEsQ0FBTyxHQUFHRiwwQkFBMEIsR0FBRztBQUNoRixJQUFNSSwrQkFBQSxHQUFrQyxJQUFJRixNQUFBLENBQU9GLDBCQUFBLEVBQTRCLEdBQUc7QUhhekYsU0FBU0sscUJBQXFCQyxNQUFBLEVBQW1EO0VBQy9F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RUFBaUJ6RSxJQUFBLElBQVEsQ0FBQyxDQUFDM0YsWUFBQSxDQUFhMkYsSUFBQSxFQUFNc0MsU0FBUztVQUN2REEsU0FBQTtVQUNBdEQ7UUFDRixDQUFDO1FBQ0hTLGNBQUEsRUFBZ0IsS0FBS3pELE9BQUEsQ0FBUXlEO01BQy9CLENBQUMsQ0FDSDtJQUNGO0lBRUEsSUFBSSxLQUFLekQsT0FBQSxDQUFRMkgsV0FBQSxLQUFnQixNQUFNO01BQ3JDb0MsT0FBQSxDQUFRL0UsSUFBQSxDQUNOZCxZQUFBLENBQWE7UUFDWEwsSUFBQSxFQUFNLEtBQUtBLElBQUE7UUFDWDJCLE1BQUEsRUFBUSxLQUFLQSxNQUFBO1FBQ2JELG9CQUFBLEVBQXNCLEtBQUt2RixPQUFBLENBQVF1RjtNQUNyQyxDQUFDLENBQ0g7SUFDRjtJQUVBLElBQUksS0FBS3ZGLE9BQUEsQ0FBUTRILFdBQUEsRUFBYTtNQUM1Qm1DLE9BQUEsQ0FBUS9FLElBQUEsQ0FDTmEsWUFBQSxDQUFhO1FBQ1hMLE1BQUEsRUFBUSxLQUFLQSxNQUFBO1FBQ2J4QyxlQUFBLEVBQWlCLEtBQUtoRCxPQUFBLENBQVFnRCxlQUFBO1FBQzlCYSxJQUFBLEVBQU0sS0FBS0E7TUFDYixDQUFDLENBQ0g7SUFDRjtJQUVBLE9BQU9rRyxPQUFBO0VBQ1Q7QUFDRixDQUFDO0FLbmJELElBQU9DLGFBQUEsR0FBUTlMLElBQUE7OztBTkRmLElBQU9FLDRCQUFBLEdBQVE0TCxhQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==