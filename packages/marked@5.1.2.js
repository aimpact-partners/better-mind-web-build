System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked","5.1.2"]]);
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
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .beyond/uimport/temp/marked.5.1.2.js
var marked_5_1_2_exports = {};
__export(marked_5_1_2_exports, {
  Hooks: () => Hooks,
  Lexer: () => Lexer,
  Marked: () => Marked,
  Parser: () => Parser,
  Renderer: () => Renderer,
  Slugger: () => Slugger,
  TextRenderer: () => TextRenderer,
  Tokenizer: () => Tokenizer,
  defaults: () => defaults,
  getDefaults: () => getDefaults,
  lexer: () => lexer,
  marked: () => marked,
  options: () => options,
  parse: () => parse,
  parseInline: () => parseInline,
  parser: () => parser,
  setOptions: () => setOptions,
  use: () => use,
  walkTokens: () => walkTokens
});
module.exports = __toCommonJS(marked_5_1_2_exports);

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
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
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest = {
  exec: function noopTest2() {}
};
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkDeprecations(opt, callback) {
  if (!opt || opt.silent) {
    return;
  }
  if (callback) {
    console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async");
  }
  if (opt.sanitize || opt.sanitizer) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
  if (opt.highlight || opt.langPrefix !== "language-") {
    console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight.");
  }
  if (opt.mangle) {
    console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`.");
  }
  if (opt.baseUrl) {
    console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url.");
  }
  if (opt.smartypants) {
    console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants.");
  }
  if (opt.xhtml) {
    console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml.");
  }
  if (opt.headerIds || opt.headerPrefix) {
    console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`.");
  }
}
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map(node => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0].replace(/^\t+/, t => " ".repeat(3 * t.length));
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        if (!list.loose) {
          const spacers = list.items[i].tokens.filter(t => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      }
      if (list.loose) {
        for (i = 0; i < l; i++) {
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph";
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map(c => {
          return {
            text: c
          };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => {
            return {
              text: c
            };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = match[0].length - 1;
      let rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const raw = src.slice(0, lLength + match.index + rLength + 1);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: "text",
          raw: text,
          text
        }]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: "text",
          raw: text,
          text
        }]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.lheading = edit(block.lheading).replace(/bull/g, block.bullet).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = {
  ...block
};
block.gfm = {
  ...block.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^((?![*_])[\spunctuation])/
};
inline._punctuation = "\\p{P}$+<=>`^|~";
inline.punctuation = edit(inline.punctuation, "u").replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
inline.anyPunctuation = /\\[punct]/g;
inline._escapes = /\\([punct])/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim, "u").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline.anyPunctuation = edit(inline.anyPunctuation, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = edit(inline._escapes, "gu").replace(/punct/g, inline._punctuation).getRegex();
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = {
  ...inline
};
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
};
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "",
    i,
    ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer = class {
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */Object.create(null);
    this.options = options2 || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.lex(src);
  }
  static lexInline(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function (getStartIndex) {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html, block2) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul",
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var TextRenderer = class {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var Slugger = class {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options2 = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
};
var Parser = class {
  constructor(options2) {
    this.options = options2 || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "",
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space":
          {
            continue;
          }
        case "hr":
          {
            out += this.renderer.hr();
            continue;
          }
        case "heading":
          {
            out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
            continue;
          }
        case "code":
          {
            out += this.renderer.code(token.text, token.lang, token.escaped);
            continue;
          }
        case "table":
          {
            header = "";
            cell = "";
            l2 = token.header.length;
            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                header: true,
                align: token.align[j]
              });
            }
            header += this.renderer.tablerow(cell);
            body = "";
            l2 = token.rows.length;
            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = "";
              l3 = row.length;
              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: token.align[k]
                });
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header, body);
            continue;
          }
        case "blockquote":
          {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
        case "list":
          {
            ordered = token.ordered;
            start = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = "";
            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = "";
              if (item.task) {
                checkbox = this.renderer.checkbox(checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }
            out += this.renderer.list(body, ordered, start);
            continue;
          }
        case "html":
          {
            out += this.renderer.html(token.text, token.block);
            continue;
          }
        case "paragraph":
          {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }
        case "text":
          {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;
            while (i + 1 < l && tokens[i + 1].type === "text") {
              token = tokens[++i];
              body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }
            out += top ? this.renderer.paragraph(body) : body;
            continue;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "",
      i,
      token,
      ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape":
          {
            out += renderer.text(token.text);
            break;
          }
        case "html":
          {
            out += renderer.html(token.text);
            break;
          }
        case "link":
          {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }
        case "image":
          {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }
        case "strong":
          {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }
        case "em":
          {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }
        case "codespan":
          {
            out += renderer.codespan(token.text);
            break;
          }
        case "br":
          {
            out += renderer.br();
            break;
          }
        case "del":
          {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }
        case "text":
          {
            out += renderer.text(token.text);
            break;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
};
var Hooks = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  preprocess(markdown) {
    return markdown;
  }
  postprocess(html) {
    return html;
  }
};
__publicField(Hooks, "passThroughHooks", /* @__PURE__ */new Set(["preprocess", "postprocess"]));
var Marked = class {
  defaults = getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(Lexer.lex, Parser.parse);
  parseInline = this.#parseMarkdown(Lexer.lexInline, Parser.parseInline);
  Parser = Parser;
  parser = Parser.parse;
  Renderer = Renderer;
  TextRenderer = TextRenderer;
  Lexer = Lexer;
  lexer = Lexer.lex;
  Tokenizer = Tokenizer;
  Slugger = Slugger;
  Hooks = Hooks;
  constructor(...args) {
    this.use(...args);
  }
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table":
          {
            for (const cell of token.header) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
            for (const row of token.rows) {
              for (const cell of row) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
        case "list":
          {
            values = values.concat(this.walkTokens(token.items, callback));
            break;
          }
        default:
          {
            if (this.defaults.extensions && this.defaults.extensions.childTokens && this.defaults.extensions.childTokens[token.type]) {
              this.defaults.extensions.childTokens[token.type].forEach(childTokens => {
                values = values.concat(this.walkTokens(token[childTokens], callback));
              });
            } else if (token.tokens) {
              values = values.concat(this.walkTokens(token.tokens, callback));
            }
          }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    args.forEach(pack => {
      const opts = {
        ...pack
      };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach(ext => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if (ext.renderer) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function (...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new Renderer(this.defaults);
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new Hooks();
        for (const prop in pack.hooks) {
          const prevHook = hooks[prop];
          if (Hooks.passThroughHooks.has(prop)) {
            hooks[prop] = arg => {
              if (this.defaults.async) {
                return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then(ret2 => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = pack.hooks[prop].call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[prop] = (...args2) => {
              let ret = pack.hooks[prop].apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        opts.walkTokens = function (token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = {
        ...this.defaults,
        ...opts
      };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = {
      ...this.defaults,
      ...opt
    };
    return this;
  }
  #parseMarkdown(lexer2, parser2) {
    return (src, opt, callback) => {
      if (typeof opt === "function") {
        callback = opt;
        opt = null;
      }
      const origOpt = {
        ...opt
      };
      opt = {
        ...this.defaults,
        ...origOpt
      };
      const throwError = this.#onError(opt.silent, opt.async, callback);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      checkDeprecations(opt, callback);
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (callback) {
        const highlight = opt.highlight;
        let tokens;
        try {
          if (opt.hooks) {
            src = opt.hooks.preprocess(src);
          }
          tokens = lexer2(src, opt);
        } catch (e) {
          return throwError(e);
        }
        const done = err => {
          let out;
          if (!err) {
            try {
              if (opt.walkTokens) {
                this.walkTokens(tokens, opt.walkTokens);
              }
              out = parser2(tokens, opt);
              if (opt.hooks) {
                out = opt.hooks.postprocess(out);
              }
            } catch (e) {
              err = e;
            }
          }
          opt.highlight = highlight;
          return err ? throwError(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3) {
          return done();
        }
        delete opt.highlight;
        if (!tokens.length) return done();
        let pending = 0;
        this.walkTokens(tokens, token => {
          if (token.type === "code") {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, (err, code) => {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });
        if (pending === 0) {
          done();
        }
        return;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(src2 => lexer2(src2, opt)).then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then(tokens => parser2(tokens, opt)).then(html => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        const tokens = lexer2(src, opt);
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser2(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  #onError(silent, async, callback) {
    return e => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        if (callback) {
          callback(null, msg);
          return;
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      if (callback) {
        callback(e);
        return;
      }
      throw e;
    };
  }
};
var markedInstance = new Marked(defaults);
function marked(src, opt, callback) {
  return markedInstance.parse(src, opt, callback);
}
marked.options = marked.setOptions = function (opt) {
  markedInstance.setOptions(opt);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function (...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse = marked;
var parser = Parser.parse;
var lexer = Lexer.lex;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC41LjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5lc20uanMiXSwibmFtZXMiOlsibWFya2VkXzVfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkhvb2tzIiwiTGV4ZXIiLCJNYXJrZWQiLCJQYXJzZXIiLCJSZW5kZXJlciIsIlNsdWdnZXIiLCJUZXh0UmVuZGVyZXIiLCJUb2tlbml6ZXIiLCJkZWZhdWx0cyIsImdldERlZmF1bHRzIiwibGV4ZXIiLCJtYXJrZWQiLCJvcHRpb25zIiwicGFyc2UiLCJwYXJzZUlubGluZSIsInBhcnNlciIsInNldE9wdGlvbnMiLCJ1c2UiLCJ3YWxrVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImFzeW5jIiwiYmFzZVVybCIsImJyZWFrcyIsImV4dGVuc2lvbnMiLCJnZm0iLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJoaWdobGlnaHQiLCJob29rcyIsImxhbmdQcmVmaXgiLCJtYW5nbGUiLCJwZWRhbnRpYyIsInJlbmRlcmVyIiwic2FuaXRpemUiLCJzYW5pdGl6ZXIiLCJzaWxlbnQiLCJzbWFydHlwYW50cyIsInRva2VuaXplciIsInhodG1sIiwiY2hhbmdlRGVmYXVsdHMiLCJuZXdEZWZhdWx0cyIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImVzY2FwZSIsImh0bWwiLCJlbmNvZGUiLCJ0ZXN0IiwicmVwbGFjZSIsInVuZXNjYXBlVGVzdCIsInVuZXNjYXBlIiwiXyIsIm4iLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY2FyZXQiLCJlZGl0IiwicmVnZXgiLCJvcHQiLCJvYmoiLCJuYW1lIiwidmFsIiwiZ2V0UmVnZXgiLCJub25Xb3JkQW5kQ29sb25UZXN0Iiwib3JpZ2luSW5kZXBlbmRlbnRVcmwiLCJjbGVhblVybCIsImJhc2UiLCJocmVmIiwicHJvdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImUiLCJpbmRleE9mIiwicmVzb2x2ZVVybCIsImVuY29kZVVSSSIsImJhc2VVcmxzIiwianVzdERvbWFpbiIsInByb3RvY29sIiwiZG9tYWluIiwicnRyaW0iLCJyZWxhdGl2ZUJhc2UiLCJub29wVGVzdCIsImV4ZWMiLCJub29wVGVzdDIiLCJzcGxpdENlbGxzIiwidGFibGVSb3ciLCJjb3VudCIsInJvdyIsIm1hdGNoIiwib2Zmc2V0Iiwic3RyIiwiZXNjYXBlZCIsImN1cnIiLCJjZWxscyIsInNwbGl0IiwiaSIsInRyaW0iLCJzaGlmdCIsImxlbmd0aCIsInBvcCIsInNwbGljZSIsInB1c2giLCJjIiwiaW52ZXJ0IiwibCIsInN1ZmZMZW4iLCJjdXJyQ2hhciIsInNsaWNlIiwiZmluZENsb3NpbmdCcmFja2V0IiwiYiIsImxldmVsIiwiY2hlY2tEZXByZWNhdGlvbnMiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJ3YXJuIiwib3V0cHV0TGluayIsImNhcCIsImxpbmsiLCJyYXciLCJsZXhlcjIiLCJ0aXRsZSIsInRleHQiLCJzdGF0ZSIsImluTGluayIsInRva2VuIiwidHlwZSIsInRva2VucyIsImlubGluZVRva2VucyIsImluZGVudENvZGVDb21wZW5zYXRpb24iLCJtYXRjaEluZGVudFRvQ29kZSIsImluZGVudFRvQ29kZSIsIm1hcCIsIm5vZGUiLCJtYXRjaEluZGVudEluTm9kZSIsImluZGVudEluTm9kZSIsImpvaW4iLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMyIiwic3BhY2UiLCJzcmMiLCJydWxlcyIsImJsb2NrIiwibmV3bGluZSIsImNvZGUiLCJjb2RlQmxvY2tTdHlsZSIsImZlbmNlcyIsImxhbmciLCJpbmxpbmUiLCJfZXNjYXBlcyIsImhlYWRpbmciLCJ0cmltbWVkIiwiZGVwdGgiLCJociIsImJsb2NrcXVvdGUiLCJ0b3AiLCJibG9ja1Rva2VucyIsImxpc3QiLCJpc3Rhc2siLCJpc2NoZWNrZWQiLCJpbmRlbnQiLCJibGFua0xpbmUiLCJlbmRzV2l0aEJsYW5rTGluZSIsImxpbmUiLCJuZXh0TGluZSIsInJhd0xpbmUiLCJpdGVtQ29udGVudHMiLCJlbmRFYXJseSIsImJ1bGwiLCJpc29yZGVyZWQiLCJvcmRlcmVkIiwic3RhcnQiLCJsb29zZSIsIml0ZW1zIiwiaXRlbVJlZ2V4IiwidCIsInJlcGVhdCIsInRyaW1MZWZ0Iiwic2VhcmNoIiwibmV4dEJ1bGxldFJlZ2V4IiwiTWF0aCIsIm1pbiIsImhyUmVnZXgiLCJmZW5jZXNCZWdpblJlZ2V4IiwiaGVhZGluZ0JlZ2luUmVnZXgiLCJ0YXNrIiwiY2hlY2tlZCIsInRyaW1SaWdodCIsInNwYWNlcnMiLCJmaWx0ZXIiLCJoYXNNdWx0aXBsZUxpbmVCcmVha3MiLCJzb21lIiwicHJlIiwiZGVmIiwidGFnIiwidGFibGUiLCJpdGVtIiwiaGVhZGVyIiwiYWxpZ24iLCJyb3dzIiwiaiIsImsiLCJsaGVhZGluZyIsInBhcmFncmFwaCIsImluUmF3QmxvY2siLCJ0cmltbWVkVXJsIiwicnRyaW1TbGFzaCIsImxhc3RQYXJlbkluZGV4IiwibGlua0xlbiIsInJlZmxpbmsiLCJsaW5rcyIsIm5vbGluayIsImVtU3Ryb25nIiwibWFza2VkU3JjIiwicHJldkNoYXIiLCJsRGVsaW0iLCJuZXh0Q2hhciIsInB1bmN0dWF0aW9uIiwibExlbmd0aCIsInJEZWxpbSIsInJMZW5ndGgiLCJkZWxpbVRvdGFsIiwibWlkRGVsaW1Ub3RhbCIsImVuZFJlZyIsInJEZWxpbUFzdCIsInJEZWxpbVVuZCIsImxhc3RJbmRleCIsImluZGV4IiwidGV4dDIiLCJjb2Rlc3BhbiIsImhhc05vblNwYWNlQ2hhcnMiLCJoYXNTcGFjZUNoYXJzT25Cb3RoRW5kcyIsImJyIiwiZGVsIiwiYXV0b2xpbmsiLCJtYW5nbGUyIiwidXJsIiwicHJldkNhcFplcm8iLCJfYmFja3BlZGFsIiwiaW5saW5lVGV4dCIsInNtYXJ0eXBhbnRzMiIsIl9wYXJhZ3JhcGgiLCJfbGFiZWwiLCJfdGl0bGUiLCJidWxsZXQiLCJsaXN0SXRlbVN0YXJ0IiwiX3RhZyIsIl9jb21tZW50Iiwibm9ybWFsIiwicmVmbGlua1NlYXJjaCIsIl9wdW5jdHVhdGlvbiIsImJsb2NrU2tpcCIsImFueVB1bmN0dWF0aW9uIiwiX3NjaGVtZSIsIl9lbWFpbCIsIl9hdHRyaWJ1dGUiLCJfaHJlZiIsInN0cm9uZyIsIm1pZGRsZSIsImVuZEFzdCIsImVuZFVuZCIsImVtIiwiX2V4dGVuZGVkX2VtYWlsIiwib3V0IiwiY2hhckNvZGVBdCIsInJhbmRvbSIsInRvU3RyaW5nIiwiT2JqZWN0IiwiY3JlYXRlIiwiaW5saW5lUXVldWUiLCJsZXgiLCJsZXhJbmxpbmUiLCJuZXh0IiwibGVhZGluZyIsInRhYnMiLCJsYXN0VG9rZW4iLCJjdXRTcmMiLCJsYXN0UGFyYWdyYXBoQ2xpcHBlZCIsImV4dFRva2VuaXplciIsImNhbGwiLCJzdGFydEJsb2NrIiwic3RhcnRJbmRleCIsIkluZmluaXR5IiwidGVtcFNyYyIsInRlbXBTdGFydCIsImZvckVhY2giLCJnZXRTdGFydEluZGV4IiwiZXJyTXNnIiwiZXJyb3IiLCJFcnJvciIsImtlZXBQcmV2Q2hhciIsImtleXMiLCJpbmNsdWRlcyIsImxhc3RJbmRleE9mIiwic3RhcnRJbmxpbmUiLCJpbmZvc3RyaW5nIiwicXVvdGUiLCJibG9jazIiLCJzbHVnZ2VyIiwiaWQiLCJzbHVnIiwiYm9keSIsInN0YXJ0YXR0IiwibGlzdGl0ZW0iLCJjaGVja2JveCIsInRhYmxlcm93IiwiY29udGVudCIsInRhYmxlY2VsbCIsImZsYWdzIiwiaW1hZ2UiLCJzZWVuIiwic2VyaWFsaXplIiwidmFsdWUiLCJnZXROZXh0U2FmZVNsdWciLCJvcmlnaW5hbFNsdWciLCJpc0RyeVJ1biIsIm9jY3VyZW5jZUFjY3VtdWxhdG9yIiwiaGFzT3duUHJvcGVydHkiLCJkcnlydW4iLCJ0ZXh0UmVuZGVyZXIiLCJwYXJzZXIyIiwibDIiLCJsMyIsImNlbGwiLCJpdGVtQm9keSIsInJldCIsInJlbmRlcmVycyIsInVuc2hpZnQiLCJwcmVwcm9jZXNzIiwibWFya2Rvd24iLCJwb3N0cHJvY2VzcyIsIl9fcHVibGljRmllbGQiLCJTZXQiLCJwYXJzZU1hcmtkb3duIiwiYXJncyIsInZhbHVlcyIsImNvbmNhdCIsImNoaWxkVG9rZW5zIiwicGFjayIsIm9wdHMiLCJleHQiLCJwcmV2UmVuZGVyZXIiLCJhcmdzMiIsImFwcGx5IiwicHJvcCIsInByZXZUb2tlbml6ZXIiLCJwcmV2SG9vayIsInBhc3NUaHJvdWdoSG9va3MiLCJoYXMiLCJhcmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXQyIiwid2Fsa1Rva2VuczIiLCIjcGFyc2VNYXJrZG93biIsIm9yaWdPcHQiLCJ0aHJvd0Vycm9yIiwib25FcnJvciIsInByb3RvdHlwZSIsImRvbmUiLCJlcnIiLCJwZW5kaW5nIiwic2V0VGltZW91dCIsInNyYzIiLCJhbGwiLCJjYXRjaCIsIiNvbkVycm9yIiwibWVzc2FnZSIsIm1zZyIsInJlamVjdCIsIm1hcmtlZEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEs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QSxDQUFPUCxRQUFBLEdBQVdBLFFBQUE7QUFDbEJPLE1BQUEsQ0FBT0wsWUFBQSxHQUFlQSxZQUFBO0FBQ3RCSyxNQUFBLENBQU9WLEtBQUEsR0FBUUEsS0FBQTtBQUNmVSxNQUFBLENBQU9ELEtBQUEsR0FBUVQsS0FBQSxDQUFNdVIsR0FBQTtBQUNyQjdRLE1BQUEsQ0FBT0osU0FBQSxHQUFZQSxTQUFBO0FBQ25CSSxNQUFBLENBQU9OLE9BQUEsR0FBVUEsT0FBQTtBQUNqQk0sTUFBQSxDQUFPWCxLQUFBLEdBQVFBLEtBQUE7QUFDZlcsTUFBQSxDQUFPRSxLQUFBLEdBQVFGLE1BQUE7QUFFZixJQUFNQyxPQUFBLEdBQVVELE1BQUEsQ0FBT0MsT0FBQTtBQUN2QixJQUFNSSxVQUFBLEdBQWFMLE1BQUEsQ0FBT0ssVUFBQTtBQUMxQixJQUFNQyxHQUFBLEdBQU1OLE1BQUEsQ0FBT00sR0FBQTtBQUNuQixJQUFNQyxVQUFBLEdBQWFQLE1BQUEsQ0FBT08sVUFBQTtBQUMxQixJQUFNSixXQUFBLEdBQWNILE1BQUEsQ0FBT0csV0FBQTtBQUMzQixJQUFNRCxLQUFBLEdBQVFGLE1BQUE7QUFDZCxJQUFNSSxNQUFBLEdBQVNaLE1BQUEsQ0FBT1UsS0FBQTtBQUN0QixJQUFNSCxLQUFBLEdBQVFULEtBQUEsQ0FBTXVSLEdBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=