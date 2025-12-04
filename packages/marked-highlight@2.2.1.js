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

// .beyond/uimport/marked-highlight.2.2.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtaGlnaGxpZ2h0LjIuMi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC1oaWdobGlnaHQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9oaWdobGlnaHRfMl8yXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwibWFya2VkSGlnaGxpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJFcnJvciIsImxhbmdQcmVmaXgiLCJlbXB0eUxhbmdDbGFzcyIsImFzeW5jIiwid2Fsa1Rva2VucyIsInRva2VuIiwidHlwZSIsImxhbmciLCJnZXRMYW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwidGhlbiIsInVwZGF0ZVRva2VuIiwiY29kZSIsInVzZU5ld1JlbmRlcmVyIiwicmVuZGVyZXIiLCJpbmZvU3RyaW5nIiwiZXNjYXBlZCIsImNsYXNzVmFsdWUiLCJlc2NhcGUiLCJjbGFzc0F0dHIiLCJyZXBsYWNlIiwibWF0Y2giLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJodG1sIiwiZW5jb2RlIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw4QkFBQTs7O0FDQU8sU0FBU0UsZ0JBQWdCSSxPQUFBLEVBQVM7RUFDdkMsSUFBSSxPQUFPQSxPQUFBLEtBQVksWUFBWTtJQUNq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QUN2RCxJQUFNQyxrQkFBQSxHQUFxQjtBQUMzQixJQUFNQyxxQkFBQSxHQUF3QixJQUFJSCxNQUFBLENBQU9FLGtCQUFBLENBQW1CRCxNQUFBLEVBQVEsR0FBRztBQUN2RSxJQUFNRyxrQkFBQSxHQUFxQjtFQUN6QixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztBQUNQO0FBQ0EsSUFBTUMsb0JBQUEsR0FBd0JDLEVBQUEsSUFBT0Ysa0JBQUEsQ0FBbUJFLEVBQUU7QUFDMUQsU0FBU1osT0FBT2EsSUFBQSxFQUFNQyxNQUFBLEVBQVE7RUFDNUIsSUFBSUEsTUFBQSxFQUFRO0lBQ1YsSUFBSVYsVUFBQSxDQUFXVyxJQUFBLENBQUtGLElBQUksR0FBRztNQUN6QixPQUFPQSxJQUFBLENBQUtYLE9BQUEsQ0FBUUcsYUFBQSxFQUFlTSxvQkFBb0I7SUFDekQ7RUFDRixPQUFPO0lBQ0wsSUFBSUgsa0JBQUEsQ0FBbUJPLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ2pDLE9BQU9BLElBQUEsQ0FBS1gsT0FBQSxDQUFRTyxxQkFBQSxFQUF1QkUsb0JBQW9CO0lBQ2pFO0VBQ0Y7RUFFQSxPQUFPRSxJQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9