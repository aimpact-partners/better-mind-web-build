System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked-highlight","2.2.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/temp/marked-highlight.2.2.1.js
var marked_highlight_2_2_1_exports = {};
__export(marked_highlight_2_2_1_exports, {
  markedHighlight: () => markedHighlight
});
module.exports = __toCommonJS(marked_highlight_2_2_1_exports);

// node_modules/marked-highlight/src/index.js
function markedHighlight(options) {
  if (typeof options === "function") {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== "function") {
    throw new Error("Must provide highlight function");
  }
  if (typeof options.langPrefix !== "string") {
    options.langPrefix = "language-";
  }
  if (typeof options.emptyLangClass !== "string") {
    options.emptyLangClass = "";
  }
  return {
    async: !!options.async,
    walkTokens(token) {
      if (token.type !== "code") {
        return;
      }
      const lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || "")).then(updateToken(token));
      }
      const code = options.highlight(token.text, lang, token.lang || "");
      if (code instanceof Promise) {
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code(code, infoString, escaped) {
        if (typeof code === "object") {
          escaped = code.escaped;
          infoString = code.lang;
          code = code.text;
        }
        const lang = getLang(infoString);
        const classValue = lang ? options.langPrefix + escape(lang) : options.emptyLangClass;
        const classAttr = classValue ? ` class="${classValue}"` : "";
        code = code.replace(/\n$/, "");
        return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}
</code></pre>`;
      }
    }
  };
}
function getLang(lang) {
  return (lang || "").match(/\S*/)[0];
}
function updateToken(token) {
  return code => {
    if (typeof code === "string" && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = ch => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1oaWdobGlnaHQuMi4yLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWhpZ2hsaWdodC9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibWFya2VkX2hpZ2hsaWdodF8yXzJfMV9leHBvcnRzIiwiX19leHBvcnQiLCJtYXJrZWRIaWdobGlnaHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIkVycm9yIiwibGFuZ1ByZWZpeCIsImVtcHR5TGFuZ0NsYXNzIiwiYXN5bmMiLCJ3YWxrVG9rZW5zIiwidG9rZW4iLCJ0eXBlIiwibGFuZyIsImdldExhbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRleHQiLCJ0aGVuIiwidXBkYXRlVG9rZW4iLCJjb2RlIiwidXNlTmV3UmVuZGVyZXIiLCJyZW5kZXJlciIsImluZm9TdHJpbmciLCJlc2NhcGVkIiwiY2xhc3NWYWx1ZSIsImVzY2FwZSIsImNsYXNzQXR0ciIsInJlcGxhY2UiLCJtYXRjaCIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImh0bWwiLCJlbmNvZGUiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDhCQUFBOzs7QUNBTyxTQUFTRSxnQkFBZ0JJLE9BQUEsRUFBUztFQUN2QyxJQUFJLE9BQU9BLE9BQUEsS0FBWSxZQUFZ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QUFHO0FBQ3ZELElBQU1DLGtCQUFBLEdBQXFCO0FBQzNCLElBQU1DLHFCQUFBLEdBQXdCLElBQUlILE1BQUEsQ0FBT0Usa0JBQUEsQ0FBbUJELE1BQUEsRUFBUSxHQUFHO0FBQ3ZFLElBQU1HLGtCQUFBLEdBQXFCO0VBQ3pCLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0FBQ1A7QUFDQSxJQUFNQyxvQkFBQSxHQUF3QkMsRUFBQSxJQUFPRixrQkFBQSxDQUFtQkUsRUFBRTtBQUMxRCxTQUFTWixPQUFPYSxJQUFBLEVBQU1DLE1BQUEsRUFBUTtFQUM1QixJQUFJQSxNQUFBLEVBQVE7SUFDVixJQUFJVixVQUFBLENBQVdXLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ3pCLE9BQU9BLElBQUEsQ0FBS1gsT0FBQSxDQUFRRyxhQUFBLEVBQWVNLG9CQUFvQjtJQUN6RDtFQUNGLE9BQU87SUFDTCxJQUFJSCxrQkFBQSxDQUFtQk8sSUFBQSxDQUFLRixJQUFJLEdBQUc7TUFDakMsT0FBT0EsSUFBQSxDQUFLWCxPQUFBLENBQVFPLHFCQUFBLEVBQXVCRSxvQkFBb0I7SUFDakU7RUFDRjtFQUVBLE9BQU9FLElBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=