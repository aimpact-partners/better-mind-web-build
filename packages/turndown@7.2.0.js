System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["turndown","7.2.0"]]);
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

// .beyond/uimport/temp/turndown.7.2.0.js
var turndown_7_2_0_exports = {};
__export(turndown_7_2_0_exports, {
  default: () => turndown_7_2_0_default
});
module.exports = __toCommonJS(turndown_7_2_0_exports);

// node_modules/turndown/lib/turndown.browser.es.js
function extend(destination) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) destination[key] = source[key];
    }
  }
  return destination;
}
function repeat(character, count) {
  return Array(count + 1).join(character);
}
function trimLeadingNewlines(string) {
  return string.replace(/^\n*/, "");
}
function trimTrailingNewlines(string) {
  var indexEnd = string.length;
  while (indexEnd > 0 && string[indexEnd - 1] === "\n") indexEnd--;
  return string.substring(0, indexEnd);
}
var blockElements = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];
function isBlock(node) {
  return is(node, blockElements);
}
var voidElements = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];
function isVoid(node) {
  return is(node, voidElements);
}
function hasVoid(node) {
  return has(node, voidElements);
}
var meaningfulWhenBlankElements = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];
function isMeaningfulWhenBlank(node) {
  return is(node, meaningfulWhenBlankElements);
}
function hasMeaningfulWhenBlank(node) {
  return has(node, meaningfulWhenBlankElements);
}
function is(node, tagNames) {
  return tagNames.indexOf(node.nodeName) >= 0;
}
function has(node, tagNames) {
  return node.getElementsByTagName && tagNames.some(function (tagName) {
    return node.getElementsByTagName(tagName).length;
  });
}
var rules = {};
rules.paragraph = {
  filter: "p",
  replacement: function (content) {
    return "\n\n" + content + "\n\n";
  }
};
rules.lineBreak = {
  filter: "br",
  replacement: function (content, node, options) {
    return options.br + "\n";
  }
};
rules.heading = {
  filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
  replacement: function (content, node, options) {
    var hLevel = Number(node.nodeName.charAt(1));
    if (options.headingStyle === "setext" && hLevel < 3) {
      var underline = repeat(hLevel === 1 ? "=" : "-", content.length);
      return "\n\n" + content + "\n" + underline + "\n\n";
    } else {
      return "\n\n" + repeat("#", hLevel) + " " + content + "\n\n";
    }
  }
};
rules.blockquote = {
  filter: "blockquote",
  replacement: function (content) {
    content = content.replace(/^\n+|\n+$/g, "");
    content = content.replace(/^/gm, "> ");
    return "\n\n" + content + "\n\n";
  }
};
rules.list = {
  filter: ["ul", "ol"],
  replacement: function (content, node) {
    var parent = node.parentNode;
    if (parent.nodeName === "LI" && parent.lastElementChild === node) {
      return "\n" + content;
    } else {
      return "\n\n" + content + "\n\n";
    }
  }
};
rules.listItem = {
  filter: "li",
  replacement: function (content, node, options) {
    content = content.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n    ");
    var prefix = options.bulletListMarker + "   ";
    var parent = node.parentNode;
    if (parent.nodeName === "OL") {
      var start = parent.getAttribute("start");
      var index = Array.prototype.indexOf.call(parent.children, node);
      prefix = (start ? Number(start) + index : index + 1) + ".  ";
    }
    return prefix + content + (node.nextSibling && !/\n$/.test(content) ? "\n" : "");
  }
};
rules.indentedCodeBlock = {
  filter: function (node, options) {
    return options.codeBlockStyle === "indented" && node.nodeName === "PRE" && node.firstChild && node.firstChild.nodeName === "CODE";
  },
  replacement: function (content, node, options) {
    return "\n\n    " + node.firstChild.textContent.replace(/\n/g, "\n    ") + "\n\n";
  }
};
rules.fencedCodeBlock = {
  filter: function (node, options) {
    return options.codeBlockStyle === "fenced" && node.nodeName === "PRE" && node.firstChild && node.firstChild.nodeName === "CODE";
  },
  replacement: function (content, node, options) {
    var className = node.firstChild.getAttribute("class") || "";
    var language = (className.match(/language-(\S+)/) || [null, ""])[1];
    var code = node.firstChild.textContent;
    var fenceChar = options.fence.charAt(0);
    var fenceSize = 3;
    var fenceInCodeRegex = new RegExp("^" + fenceChar + "{3,}", "gm");
    var match;
    while (match = fenceInCodeRegex.exec(code)) {
      if (match[0].length >= fenceSize) {
        fenceSize = match[0].length + 1;
      }
    }
    var fence = repeat(fenceChar, fenceSize);
    return "\n\n" + fence + language + "\n" + code.replace(/\n$/, "") + "\n" + fence + "\n\n";
  }
};
rules.horizontalRule = {
  filter: "hr",
  replacement: function (content, node, options) {
    return "\n\n" + options.hr + "\n\n";
  }
};
rules.inlineLink = {
  filter: function (node, options) {
    return options.linkStyle === "inlined" && node.nodeName === "A" && node.getAttribute("href");
  },
  replacement: function (content, node) {
    var href = node.getAttribute("href");
    if (href) href = href.replace(/([()])/g, "\\$1");
    var title = cleanAttribute(node.getAttribute("title"));
    if (title) title = ' "' + title.replace(/"/g, '\\"') + '"';
    return "[" + content + "](" + href + title + ")";
  }
};
rules.referenceLink = {
  filter: function (node, options) {
    return options.linkStyle === "referenced" && node.nodeName === "A" && node.getAttribute("href");
  },
  replacement: function (content, node, options) {
    var href = node.getAttribute("href");
    var title = cleanAttribute(node.getAttribute("title"));
    if (title) title = ' "' + title + '"';
    var replacement;
    var reference;
    switch (options.linkReferenceStyle) {
      case "collapsed":
        replacement = "[" + content + "][]";
        reference = "[" + content + "]: " + href + title;
        break;
      case "shortcut":
        replacement = "[" + content + "]";
        reference = "[" + content + "]: " + href + title;
        break;
      default:
        var id = this.references.length + 1;
        replacement = "[" + content + "][" + id + "]";
        reference = "[" + id + "]: " + href + title;
    }
    this.references.push(reference);
    return replacement;
  },
  references: [],
  append: function (options) {
    var references = "";
    if (this.references.length) {
      references = "\n\n" + this.references.join("\n") + "\n\n";
      this.references = [];
    }
    return references;
  }
};
rules.emphasis = {
  filter: ["em", "i"],
  replacement: function (content, node, options) {
    if (!content.trim()) return "";
    return options.emDelimiter + content + options.emDelimiter;
  }
};
rules.strong = {
  filter: ["strong", "b"],
  replacement: function (content, node, options) {
    if (!content.trim()) return "";
    return options.strongDelimiter + content + options.strongDelimiter;
  }
};
rules.code = {
  filter: function (node) {
    var hasSiblings = node.previousSibling || node.nextSibling;
    var isCodeBlock = node.parentNode.nodeName === "PRE" && !hasSiblings;
    return node.nodeName === "CODE" && !isCodeBlock;
  },
  replacement: function (content) {
    if (!content) return "";
    content = content.replace(/\r?\n|\r/g, " ");
    var extraSpace = /^`|^ .*?[^ ].* $|`$/.test(content) ? " " : "";
    var delimiter = "`";
    var matches = content.match(/`+/gm) || [];
    while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + "`";
    return delimiter + extraSpace + content + extraSpace + delimiter;
  }
};
rules.image = {
  filter: "img",
  replacement: function (content, node) {
    var alt = cleanAttribute(node.getAttribute("alt"));
    var src = node.getAttribute("src") || "";
    var title = cleanAttribute(node.getAttribute("title"));
    var titlePart = title ? ' "' + title + '"' : "";
    return src ? "![" + alt + "](" + src + titlePart + ")" : "";
  }
};
function cleanAttribute(attribute) {
  return attribute ? attribute.replace(/(\n+\s*)+/g, "\n") : "";
}
function Rules(options) {
  this.options = options;
  this._keep = [];
  this._remove = [];
  this.blankRule = {
    replacement: options.blankReplacement
  };
  this.keepReplacement = options.keepReplacement;
  this.defaultRule = {
    replacement: options.defaultReplacement
  };
  this.array = [];
  for (var key in options.rules) this.array.push(options.rules[key]);
}
Rules.prototype = {
  add: function (key, rule) {
    this.array.unshift(rule);
  },
  keep: function (filter) {
    this._keep.unshift({
      filter,
      replacement: this.keepReplacement
    });
  },
  remove: function (filter) {
    this._remove.unshift({
      filter,
      replacement: function () {
        return "";
      }
    });
  },
  forNode: function (node) {
    if (node.isBlank) return this.blankRule;
    var rule;
    if (rule = findRule(this.array, node, this.options)) return rule;
    if (rule = findRule(this._keep, node, this.options)) return rule;
    if (rule = findRule(this._remove, node, this.options)) return rule;
    return this.defaultRule;
  },
  forEach: function (fn) {
    for (var i = 0; i < this.array.length; i++) fn(this.array[i], i);
  }
};
function findRule(rules2, node, options) {
  for (var i = 0; i < rules2.length; i++) {
    var rule = rules2[i];
    if (filterValue(rule, node, options)) return rule;
  }
  return void 0;
}
function filterValue(rule, node, options) {
  var filter = rule.filter;
  if (typeof filter === "string") {
    if (filter === node.nodeName.toLowerCase()) return true;
  } else if (Array.isArray(filter)) {
    if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true;
  } else if (typeof filter === "function") {
    if (filter.call(rule, node, options)) return true;
  } else {
    throw new TypeError("`filter` needs to be a string, array, or function");
  }
}
function collapseWhitespace(options) {
  var element = options.element;
  var isBlock2 = options.isBlock;
  var isVoid2 = options.isVoid;
  var isPre = options.isPre || function (node2) {
    return node2.nodeName === "PRE";
  };
  if (!element.firstChild || isPre(element)) return;
  var prevText = null;
  var keepLeadingWs = false;
  var prev = null;
  var node = next(prev, element, isPre);
  while (node !== element) {
    if (node.nodeType === 3 || node.nodeType === 4) {
      var text = node.data.replace(/[ \r\n\t]+/g, " ");
      if ((!prevText || / $/.test(prevText.data)) && !keepLeadingWs && text[0] === " ") {
        text = text.substr(1);
      }
      if (!text) {
        node = remove(node);
        continue;
      }
      node.data = text;
      prevText = node;
    } else if (node.nodeType === 1) {
      if (isBlock2(node) || node.nodeName === "BR") {
        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, "");
        }
        prevText = null;
        keepLeadingWs = false;
      } else if (isVoid2(node) || isPre(node)) {
        prevText = null;
        keepLeadingWs = true;
      } else if (prevText) {
        keepLeadingWs = false;
      }
    } else {
      node = remove(node);
      continue;
    }
    var nextNode = next(prev, node, isPre);
    prev = node;
    node = nextNode;
  }
  if (prevText) {
    prevText.data = prevText.data.replace(/ $/, "");
    if (!prevText.data) {
      remove(prevText);
    }
  }
}
function remove(node) {
  var next2 = node.nextSibling || node.parentNode;
  node.parentNode.removeChild(node);
  return next2;
}
function next(prev, current, isPre) {
  if (prev && prev.parentNode === current || isPre(current)) {
    return current.nextSibling || current.parentNode;
  }
  return current.firstChild || current.nextSibling || current.parentNode;
}
var root = typeof window !== "undefined" ? window : {};
function canParseHTMLNatively() {
  var Parser = root.DOMParser;
  var canParse = false;
  try {
    if (new Parser().parseFromString("", "text/html")) {
      canParse = true;
    }
  } catch (e) {}
  return canParse;
}
function createHTMLParser() {
  var Parser = function () {};
  {
    if (shouldUseActiveX()) {
      Parser.prototype.parseFromString = function (string) {
        var doc = new window.ActiveXObject("htmlfile");
        doc.designMode = "on";
        doc.open();
        doc.write(string);
        doc.close();
        return doc;
      };
    } else {
      Parser.prototype.parseFromString = function (string) {
        var doc = document.implementation.createHTMLDocument("");
        doc.open();
        doc.write(string);
        doc.close();
        return doc;
      };
    }
  }
  return Parser;
}
function shouldUseActiveX() {
  var useActiveX = false;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch (e) {
    if (root.ActiveXObject) useActiveX = true;
  }
  return useActiveX;
}
var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();
function RootNode(input, options) {
  var root2;
  if (typeof input === "string") {
    var doc = htmlParser().parseFromString(
    // DOM parsers arrange elements in the <head> and <body>.
    // Wrapping in a custom element ensures elements are reliably arranged in
    // a single element.
    '<x-turndown id="turndown-root">' + input + "</x-turndown>", "text/html");
    root2 = doc.getElementById("turndown-root");
  } else {
    root2 = input.cloneNode(true);
  }
  collapseWhitespace({
    element: root2,
    isBlock,
    isVoid,
    isPre: options.preformattedCode ? isPreOrCode : null
  });
  return root2;
}
var _htmlParser;
function htmlParser() {
  _htmlParser = _htmlParser || new HTMLParser();
  return _htmlParser;
}
function isPreOrCode(node) {
  return node.nodeName === "PRE" || node.nodeName === "CODE";
}
function Node(node, options) {
  node.isBlock = isBlock(node);
  node.isCode = node.nodeName === "CODE" || node.parentNode.isCode;
  node.isBlank = isBlank(node);
  node.flankingWhitespace = flankingWhitespace(node, options);
  return node;
}
function isBlank(node) {
  return !isVoid(node) && !isMeaningfulWhenBlank(node) && /^\s*$/i.test(node.textContent) && !hasVoid(node) && !hasMeaningfulWhenBlank(node);
}
function flankingWhitespace(node, options) {
  if (node.isBlock || options.preformattedCode && node.isCode) {
    return {
      leading: "",
      trailing: ""
    };
  }
  var edges = edgeWhitespace(node.textContent);
  if (edges.leadingAscii && isFlankedByWhitespace("left", node, options)) {
    edges.leading = edges.leadingNonAscii;
  }
  if (edges.trailingAscii && isFlankedByWhitespace("right", node, options)) {
    edges.trailing = edges.trailingNonAscii;
  }
  return {
    leading: edges.leading,
    trailing: edges.trailing
  };
}
function edgeWhitespace(string) {
  var m = string.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: m[1],
    // whole string for whitespace-only strings
    leadingAscii: m[2],
    leadingNonAscii: m[3],
    trailing: m[4],
    // empty for whitespace-only strings
    trailingNonAscii: m[5],
    trailingAscii: m[6]
  };
}
function isFlankedByWhitespace(side, node, options) {
  var sibling;
  var regExp;
  var isFlanked;
  if (side === "left") {
    sibling = node.previousSibling;
    regExp = / $/;
  } else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }
  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    } else if (options.preformattedCode && sibling.nodeName === "CODE") {
      isFlanked = false;
    } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked;
}
var reduce = Array.prototype.reduce;
var escapes = [[/\\/g, "\\\\"], [/\*/g, "\\*"], [/^-/g, "\\-"], [/^\+ /g, "\\+ "], [/^(=+)/g, "\\$1"], [/^(#{1,6}) /g, "\\$1 "], [/`/g, "\\`"], [/^~~~/g, "\\~~~"], [/\[/g, "\\["], [/\]/g, "\\]"], [/^>/g, "\\>"], [/_/g, "\\_"], [/^(\d+)\. /g, "$1\\. "]];
function TurndownService(options) {
  if (!(this instanceof TurndownService)) return new TurndownService(options);
  var defaults = {
    rules,
    headingStyle: "setext",
    hr: "* * *",
    bulletListMarker: "*",
    codeBlockStyle: "indented",
    fence: "```",
    emDelimiter: "_",
    strongDelimiter: "**",
    linkStyle: "inlined",
    linkReferenceStyle: "full",
    br: "  ",
    preformattedCode: false,
    blankReplacement: function (content, node) {
      return node.isBlock ? "\n\n" : "";
    },
    keepReplacement: function (content, node) {
      return node.isBlock ? "\n\n" + node.outerHTML + "\n\n" : node.outerHTML;
    },
    defaultReplacement: function (content, node) {
      return node.isBlock ? "\n\n" + content + "\n\n" : content;
    }
  };
  this.options = extend({}, defaults, options);
  this.rules = new Rules(this.options);
}
TurndownService.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */
  turndown: function (input) {
    if (!canConvert(input)) {
      throw new TypeError(input + " is not a string, or an element/document/fragment node.");
    }
    if (input === "") return "";
    var output = process.call(this, new RootNode(input, this.options));
    return postProcess.call(this, output);
  },
  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */
  use: function (plugin) {
    if (Array.isArray(plugin)) {
      for (var i = 0; i < plugin.length; i++) this.use(plugin[i]);
    } else if (typeof plugin === "function") {
      plugin(this);
    } else {
      throw new TypeError("plugin must be a Function or an Array of Functions");
    }
    return this;
  },
  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  addRule: function (key, rule) {
    this.rules.add(key, rule);
    return this;
  },
  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  keep: function (filter) {
    this.rules.keep(filter);
    return this;
  },
  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */
  remove: function (filter) {
    this.rules.remove(filter);
    return this;
  },
  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */
  escape: function (string) {
    return escapes.reduce(function (accumulator, escape) {
      return accumulator.replace(escape[0], escape[1]);
    }, string);
  }
};
function process(parentNode) {
  var self = this;
  return reduce.call(parentNode.childNodes, function (output, node) {
    node = new Node(node, self.options);
    var replacement = "";
    if (node.nodeType === 3) {
      replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
    } else if (node.nodeType === 1) {
      replacement = replacementForNode.call(self, node);
    }
    return join(output, replacement);
  }, "");
}
function postProcess(output) {
  var self = this;
  this.rules.forEach(function (rule) {
    if (typeof rule.append === "function") {
      output = join(output, rule.append(self.options));
    }
  });
  return output.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
}
function replacementForNode(node) {
  var rule = this.rules.forNode(node);
  var content = process.call(this, node);
  var whitespace = node.flankingWhitespace;
  if (whitespace.leading || whitespace.trailing) content = content.trim();
  return whitespace.leading + rule.replacement(content, node, this.options) + whitespace.trailing;
}
function join(output, replacement) {
  var s1 = trimTrailingNewlines(output);
  var s2 = trimLeadingNewlines(replacement);
  var nls = Math.max(output.length - s1.length, replacement.length - s2.length);
  var separator = "\n\n".substring(0, nls);
  return s1 + separator + s2;
}
function canConvert(input) {
  return input != null && (typeof input === "string" || input.nodeType && (input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11));
}
var turndown_browser_es_default = TurndownService;

// .beyond/uimport/temp/turndown.7.2.0.js
var turndown_7_2_0_default = turndown_browser_es_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3R1cm5kb3duLjcuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3R1cm5kb3duL2xpYi90dXJuZG93bi5icm93c2VyLmVzLmpzIl0sIm5hbWVzIjpbInR1cm5kb3duXzdfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJ0dXJuZG93bl83XzJfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImV4dGVuZCIsImRlc3RpbmF0aW9uIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsImhhc093blByb3BlcnR5IiwicmVwZWF0IiwiY2hhcmFjdGVyIiwiY291bnQiLCJBcnJheSIsImpvaW4iLCJ0cmltTGVhZGluZ05ld2xpbmVzIiwic3RyaW5nIiwicmVwbGFjZSIsInRyaW1UcmFpbGluZ05ld2xpbmVzIiwiaW5kZXhFbmQiLCJzdWJzdHJpbmciLCJibG9ja0VsZW1lbnRzIiwiaXNCbG9jayIsIm5vZGUiLCJpcyIsInZvaWRFbGVtZW50cyIsImlzVm9pZCIsImhhc1ZvaWQiLCJoYXMiLCJtZWFuaW5nZnVsV2hlbkJsYW5rRWxlbWVudHMiLCJpc01lYW5pbmdmdWxXaGVuQmxhbmsiLCJoYXNNZWFuaW5nZnVsV2hlbkJsYW5rIiwidGFnTmFtZXMiLCJpbmRleE9mIiwibm9kZU5hbWUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNvbWUiLCJ0YWdOYW1lIiwicnVsZXMiLCJwYXJhZ3JhcGgiLCJmaWx0ZXIiLCJyZXBsYWNlbWVudCIsImNvbnRlbnQiLCJsaW5lQnJlYWsiLCJvcHRpb25zIiwiYnIiLCJoZWFkaW5nIiwiaExldmVsIiwiTnVtYmVyIiwiY2hhckF0IiwiaGVhZGluZ1N0eWxlIiwidW5kZXJsaW5lIiwiYmxvY2txdW90ZSIsImxpc3QiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwibGFzdEVsZW1lbnRDaGlsZCIsImxpc3RJdGVtIiwicHJlZml4IiwiYnVsbGV0TGlzdE1hcmtlciIsInN0YXJ0IiwiZ2V0QXR0cmlidXRlIiwiaW5kZXgiLCJwcm90b3R5cGUiLCJjYWxsIiwiY2hpbGRyZW4iLCJuZXh0U2libGluZyIsInRlc3QiLCJpbmRlbnRlZENvZGVCbG9jayIsImNvZGVCbG9ja1N0eWxlIiwiZmlyc3RDaGlsZCIsInRleHRDb250ZW50IiwiZmVuY2VkQ29kZUJsb2NrIiwiY2xhc3NOYW1lIiwibGFuZ3VhZ2UiLCJtYXRjaCIsImNvZGUiLCJmZW5jZUNoYXIiLCJmZW5jZSIsImZlbmNlU2l6ZSIsImZlbmNlSW5Db2RlUmVnZXgiLCJSZWdFeHAiLCJleGVjIiwiaG9yaXpvbnRhbFJ1bGUiLCJociIsImlubGluZUxpbmsiLCJsaW5rU3R5bGUiLCJocmVmIiwidGl0bGUiLCJjbGVhbkF0dHJpYnV0ZSIsInJlZmVyZW5jZUxpbmsiLCJyZWZlcmVuY2UiLCJsaW5rUmVmZXJlbmNlU3R5bGUiLCJpZCIsInJlZmVyZW5jZXMiLCJwdXNoIiwiYXBwZW5kIiwiZW1waGFzaXMiLCJ0cmltIiwiZW1EZWxpbWl0ZXIiLCJzdHJvbmciLCJzdHJvbmdEZWxpbWl0ZXIiLCJoYXNTaWJsaW5ncyIsInByZXZpb3VzU2libGluZyIsImlzQ29kZUJsb2NrIiwiZXh0cmFTcGFjZSIsImRlbGltaXRlciIsIm1hdGNoZXMiLCJpbWFnZSIsImFsdCIsInNyYyIsInRpdGxlUGFydCIsImF0dHJpYnV0ZSIsIlJ1bGVzIiwiX2tlZXAiLCJfcmVtb3ZlIiwiYmxhbmtSdWxlIiwiYmxhbmtSZXBsYWNlbWVudCIsImtlZXBSZXBsYWNlbWVudCIsImRlZmF1bHRSdWxlIiwiZGVmYXVsdFJlcGxhY2VtZW50IiwiYXJyYXkiLCJhZGQiLCJydWxlIiwidW5zaGlmdCIsImtlZXAiLCJyZW1vdmUiLCJmb3JOb2RlIiwiaXNCbGFuayIsImZpbmRSdWxlIiwiZm9yRWFjaCIsImZuIiwicnVsZXMyIiwiZmlsdGVyVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImlzQXJyYXkiLCJUeXBlRXJyb3IiLCJjb2xsYXBzZVdoaXRlc3BhY2UiLCJlbGVtZW50IiwiaXNCbG9jazIiLCJpc1ZvaWQyIiwiaXNQcmUiLCJub2RlMiIsInByZXZUZXh0Iiwia2VlcExlYWRpbmdXcyIsInByZXYiLCJuZXh0Iiwibm9kZVR5cGUiLCJ0ZXh0IiwiZGF0YSIsInN1YnN0ciIsIm5leHROb2RlIiwibmV4dDIiLCJyZW1vdmVDaGlsZCIsImN1cnJlbnQiLCJyb290Iiwid2luZG93IiwiY2FuUGFyc2VIVE1MTmF0aXZlbHkiLCJQYXJzZXIiLCJET01QYXJzZXIiLCJjYW5QYXJzZSIsInBhcnNlRnJvbVN0cmluZyIsImUiLCJjcmVhdGVIVE1MUGFyc2VyIiwic2hvdWxkVXNlQWN0aXZlWCIsImRvYyIsIkFjdGl2ZVhPYmplY3QiLCJkZXNpZ25Nb2RlIiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJkb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwidXNlQWN0aXZlWCIsIkhUTUxQYXJzZXIiLCJSb290Tm9kZSIsImlucHV0Iiwicm9vdDIiLCJodG1sUGFyc2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9uZU5vZGUiLCJwcmVmb3JtYXR0ZWRDb2RlIiwiaXNQcmVPckNvZGUiLCJfaHRtbFBhcnNlciIsIk5vZGUiLCJpc0NvZGUiLCJmbGFua2luZ1doaXRlc3BhY2UiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJlZGdlcyIsImVkZ2VXaGl0ZXNwYWNlIiwibGVhZGluZ0FzY2lpIiwiaXNGbGFua2VkQnlXaGl0ZXNwYWNlIiwibGVhZGluZ05vbkFzY2lpIiwidHJhaWxpbmdBc2NpaSIsInRyYWlsaW5nTm9uQXNjaWkiLCJtIiwic2lkZSIsInNpYmxpbmciLCJyZWdFeHAiLCJpc0ZsYW5rZWQiLCJub2RlVmFsdWUiLCJyZWR1Y2UiLCJlc2NhcGVzIiwiVHVybmRvd25TZXJ2aWNlIiwiZGVmYXVsdHMiLCJvdXRlckhUTUwiLCJ0dXJuZG93biIsImNhbkNvbnZlcnQiLCJvdXRwdXQiLCJwcm9jZXNzIiwicG9zdFByb2Nlc3MiLCJ1c2UiLCJwbHVnaW4iLCJhZGRSdWxlIiwiZXNjYXBlIiwiYWNjdW11bGF0b3IiLCJzZWxmIiwiY2hpbGROb2RlcyIsInJlcGxhY2VtZW50Rm9yTm9kZSIsIndoaXRlc3BhY2UiLCJzMSIsInMyIiwibmxzIiwiTWF0aCIsIm1heCIsInNlcGFyYXRvciIsInR1cm5kb3duX2Jyb3dzZXJfZXNfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixzQkFBQTs7O0FDQUEsU0FBU08sT0FBUUMsV0FBQSxFQUFhO0VBQzVCLFNBQVNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlDLFNBQUEsQ0FBVUMsTUFBQSxFQUFRRixDQUFBLElBQUs7SUFDekMsSUFBSUcsTUFBQSxHQUFTRixTQUFBLENBQVVELENBQUM7SUFDeEIsU0FBU0ksR0FBQSxJQUFPRCxNQUFBLEVBQVE7TUFDdEIsSUFBSUEsTUFBQSxDQUFPRSxjQUFBLENBQWVELEdBQUcsR0FBR0wsV0FBQSxDQUFZSyxHQUFHLElBQUlELE1BQUEsQ0FBT0MsR0FBRztJQUMvRDtFQUNGO0VBQ0EsT0FBT0wsV0FBQTtBQUNUO0FBRUEsU0FBU08sT0FBUUMsU0FBQSxFQUFXQyxLQUFBLEVBQU87RUFDakMsT0FBT0MsS0FBQSxDQUFNRCxLQUFBLEdBQVEsQ0FBQyxFQUFFRSxJQUFBLENBQUtILFNBQVM7QUFDeEM7QUFFQSxTQUFTSSxvQkFBcUJDLE1BQUEsRUFBUTtFQUNwQyxPQUFPQSxNQUFBLENBQU9DLE9BQUEsQ0FBUSxRQUFRLEVBQUU7QUFDbEM7QUFFQSxTQUFTQyxxQkFBc0JGLE1BQUEsRUFBUTtFQUVyQyxJQUFJRyxRQUFBLEdBQVdILE1BQUEsQ0FBT1YsTUFBQTtFQUN0QixP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