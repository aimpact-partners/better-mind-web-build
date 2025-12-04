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

// .beyond/uimport/marked.5.1.2.js
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
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
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
  // Cells
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    //         (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //         | Skip orphan inside strong      | Consume to delim | (1) #***              | (2) a***#, a***                    | (3) #***a, ***a                  | (4) ***#                 | (5) #***#                         | (6) a***a
    rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/
    // ^- Not allowed for _
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
var Lexer = class _Lexer {
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
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new _Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new _Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  /**
   * Lexing
   */
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
  /**
   * Lexing/Compiling
   */
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
  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html, block2) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
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
  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  /**
   * @param {string} content
   */
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
  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
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
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
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
  // no need for block level renderers
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
  /**
   * @param {string} value
   */
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
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
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options2 = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
};
var Parser = class _Parser {
  constructor(options2) {
    this.options = options2 || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new _Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new _Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
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
  /**
   * Parse Inline Tokens
   */
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
  static passThroughHooks = /* @__PURE__ */new Set(["preprocess", "postprocess"]);
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
};
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQuNS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL2xpYi9tYXJrZWQuZXNtLmpzIl0sIm5hbWVzIjpbIm1hcmtlZF81XzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJIb29rcyIsIkxleGVyIiwiTWFya2VkIiwiUGFyc2VyIiwiUmVuZGVyZXIiLCJTbHVnZ2VyIiwiVGV4dFJlbmRlcmVyIiwiVG9rZW5pemVyIiwiZGVmYXVsdHMiLCJnZXREZWZhdWx0cyIsImxleGVyIiwibWFya2VkIiwib3B0aW9ucyIsInBhcnNlIiwicGFyc2VJbmxpbmUiLCJwYXJzZXIiLCJzZXRPcHRpb25zIiwidXNlIiwid2Fsa1Rva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJhc3luYyIsImJhc2VVcmwiLCJicmVha3MiLCJleHRlbnNpb25zIiwiZ2ZtIiwiaGVhZGVySWRzIiwiaGVhZGVyUHJlZml4IiwiaGlnaGxpZ2h0IiwiaG9va3MiLCJsYW5nUHJlZml4IiwibWFuZ2xlIiwicGVkYW50aWMiLCJyZW5kZXJlciIsInNhbml0aXplIiwic2FuaXRpemVyIiwic2lsZW50Iiwic21hcnR5cGFudHMiLCJ0b2tlbml6ZXIiLCJ4aHRtbCIsImNoYW5nZURlZmF1bHRzIiwibmV3RGVmYXVsdHMiLCJlc2NhcGVUZXN0IiwiZXNjYXBlUmVwbGFjZSIsIlJlZ0V4cCIsInNvdXJjZSIsImVzY2FwZVRlc3ROb0VuY29kZSIsImVzY2FwZVJlcGxhY2VOb0VuY29kZSIsImVzY2FwZVJlcGxhY2VtZW50cyIsImdldEVzY2FwZVJlcGxhY2VtZW50IiwiY2giLCJlc2NhcGUiLCJodG1sIiwiZW5jb2RlIiwidGVzdCIsInJlcGxhY2UiLCJ1bmVzY2FwZVRlc3QiLCJ1bmVzY2FwZSIsIl8iLCJuIiwidG9Mb3dlckNhc2UiLCJjaGFyQXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImNhcmV0IiwiZWRpdCIsInJlZ2V4Iiwib3B0Iiwib2JqIiwibmFtZSIsInZhbCIsImdldFJlZ2V4Iiwibm9uV29yZEFuZENvbG9uVGVzdCIsIm9yaWdpbkluZGVwZW5kZW50VXJsIiwiY2xlYW5VcmwiLCJiYXNlIiwiaHJlZiIsInByb3QiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlIiwiaW5kZXhPZiIsInJlc29sdmVVcmwiLCJlbmNvZGVVUkkiLCJiYXNlVXJscyIsImp1c3REb21haW4iLCJwcm90b2NvbCIsImRvbWFpbiIsInJ0cmltIiwicmVsYXRpdmVCYXNlIiwibm9vcFRlc3QiLCJleGVjIiwibm9vcFRlc3QyIiwic3BsaXRDZWxscyIsInRhYmxlUm93IiwiY291bnQiLCJyb3ciLCJtYXRjaCIsIm9mZnNldCIsInN0ciIsImVzY2FwZWQiLCJjdXJyIiwiY2VsbHMiLCJzcGxpdCIsImkiLCJ0cmltIiwic2hpZnQiLCJsZW5ndGgiLCJwb3AiLCJzcGxpY2UiLCJwdXNoIiwiYyIsImludmVydCIsImwiLCJzdWZmTGVuIiwiY3VyckNoYXIiLCJzbGljZSIsImZpbmRDbG9zaW5nQnJhY2tldCIsImIiLCJsZXZlbCIsImNoZWNrRGVwcmVjYXRpb25zIiwiY2FsbGJhY2siLCJjb25zb2xlIiwid2FybiIsIm91dHB1dExpbmsiLCJjYXAiLCJsaW5rIiwicmF3IiwibGV4ZXIyIiwidGl0bGUiLCJ0ZXh0Iiwic3RhdGUiLCJpbkxpbmsiLCJ0b2tlbiIsInR5cGUiLCJ0b2tlbnMiLCJpbmxpbmVUb2tlbnMiLCJpbmRlbnRDb2RlQ29tcGVuc2F0aW9uIiwibWF0Y2hJbmRlbnRUb0NvZGUiLCJpbmRlbnRUb0NvZGUiLCJtYXAiLCJub2RlIiwibWF0Y2hJbmRlbnRJbk5vZGUiLCJpbmRlbnRJbk5vZGUiLCJqb2luIiwiY29uc3RydWN0b3IiLCJvcHRpb25zMiIsInNwYWNlIiwic3JjIiwicnVsZXMiLCJibG9jayIsIm5ld2xpbmUiLCJjb2RlIiwiY29kZUJsb2NrU3R5bGUiLCJmZW5jZXMiLCJsYW5nIiwiaW5saW5lIiwiX2VzY2FwZXMiLCJoZWFkaW5nIiwidHJpbW1lZCIsImRlcHRoIiwiaHIiLCJibG9ja3F1b3RlIiwidG9wIiwiYmxvY2tUb2tlbnMiLCJsaXN0IiwiaXN0YXNrIiwiaXNjaGVja2VkIiwiaW5kZW50IiwiYmxhbmtMaW5lIiwiZW5kc1dpdGhCbGFua0xpbmUiLCJsaW5lIiwibmV4dExpbmUiLCJyYXdMaW5lIiwiaXRlbUNvbnRlbnRzIiwiZW5kRWFybHkiLCJidWxsIiwiaXNvcmRlcmVkIiwib3JkZXJlZCIsInN0YXJ0IiwibG9vc2UiLCJpdGVtcyIsIml0ZW1SZWdleCIsInQiLCJyZXBlYXQiLCJ0cmltTGVmdCIsInNlYXJjaCIsIm5leHRCdWxsZXRSZWdleCIsIk1hdGgiLCJtaW4iLCJoclJlZ2V4IiwiZmVuY2VzQmVnaW5SZWdleCIsImhlYWRpbmdCZWdpblJlZ2V4IiwidGFzayIsImNoZWNrZWQiLCJ0cmltUmlnaHQiLCJzcGFjZXJzIiwiZmlsdGVyIiwiaGFzTXVsdGlwbGVMaW5lQnJlYWtzIiwic29tZSIsInByZSIsImRlZiIsInRhZyIsInRhYmxlIiwiaXRlbSIsImhlYWRlciIsImFsaWduIiwicm93cyIsImoiLCJrIiwibGhlYWRpbmciLCJwYXJhZ3JhcGgiLCJpblJhd0Jsb2NrIiwidHJpbW1lZFVybCIsInJ0cmltU2xhc2giLCJsYXN0UGFyZW5JbmRleCIsImxpbmtMZW4iLCJyZWZsaW5rIiwibGlua3MiLCJub2xpbmsiLCJlbVN0cm9uZyIsIm1hc2tlZFNyYyIsInByZXZDaGFyIiwibERlbGltIiwibmV4dENoYXIiLCJwdW5jdHVhdGlvbiIsImxMZW5ndGgiLCJyRGVsaW0iLCJyTGVuZ3RoIiwiZGVsaW1Ub3RhbCIsIm1pZERlbGltVG90YWwiLCJlbmRSZWciLCJyRGVsaW1Bc3QiLCJyRGVsaW1VbmQiLCJsYXN0SW5kZXgiLCJpbmRleCIsInRleHQyIiwiY29kZXNwYW4iLCJoYXNOb25TcGFjZUNoYXJzIiwiaGFzU3BhY2VDaGFyc09uQm90aEVuZHMiLCJiciIsImRlbCIsImF1dG9saW5rIiwibWFuZ2xlMiIsInVybCIsInByZXZDYXBaZXJvIiwiX2JhY2twZWRhbCIsImlubGluZVRleHQiLCJzbWFydHlwYW50czIiLCJfcGFyYWdyYXBoIiwiX2xhYmVsIiwiX3RpdGxlIiwiYnVsbGV0IiwibGlzdEl0ZW1TdGFydCIsIl90YWciLCJfY29tbWVudCIsIm5vcm1hbCIsInJlZmxpbmtTZWFyY2giLCJfcHVuY3R1YXRpb24iLCJibG9ja1NraXAiLCJhbnlQdW5jdHVhdGlvbiIsIl9zY2hlbWUiLCJfZW1haWwiLCJfYXR0cmlidXRlIiwiX2hyZWYiLCJzdHJvbmciLCJtaWRkbGUiLCJlbmRBc3QiLCJlbmRVbmQiLCJlbSIsIl9leHRlbmRlZF9lbWFpbCIsIm91dCIsImNoYXJDb2RlQXQiLCJyYW5kb20iLCJ0b1N0cmluZyIsIl9MZXhlciIsIk9iamVjdCIsImNyZWF0ZSIsImlubGluZVF1ZXVlIiwibGV4IiwibGV4SW5saW5lIiwibmV4dCIsImxlYWRpbmciLCJ0YWJzIiwibGFzdFRva2VuIiwiY3V0U3JjIiwibGFzdFBhcmFncmFwaENsaXBwZWQiLCJleHRUb2tlbml6ZXIiLCJjYWxsIiwic3RhcnRCbG9jayIsInN0YXJ0SW5kZXgiLCJJbmZpbml0eSIsInRlbXBTcmMiLCJ0ZW1wU3RhcnQiLCJmb3JFYWNoIiwiZ2V0U3RhcnRJbmRleCIsImVyck1zZyIsImVycm9yIiwiRXJyb3IiLCJrZWVwUHJldkNoYXIiLCJrZXlzIiwiaW5jbHVkZXMiLCJsYXN0SW5kZXhPZiIsInN0YXJ0SW5saW5lIiwiaW5mb3N0cmluZyIsInF1b3RlIiwiYmxvY2syIiwic2x1Z2dlciIsImlkIiwic2x1ZyIsImJvZHkiLCJzdGFydGF0dCIsImxpc3RpdGVtIiwiY2hlY2tib3giLCJ0YWJsZXJvdyIsImNvbnRlbnQiLCJ0YWJsZWNlbGwiLCJmbGFncyIsImltYWdlIiwic2VlbiIsInNlcmlhbGl6ZSIsInZhbHVlIiwiZ2V0TmV4dFNhZmVTbHVnIiwib3JpZ2luYWxTbHVnIiwiaXNEcnlSdW4iLCJvY2N1cmVuY2VBY2N1bXVsYXRvciIsImhhc093blByb3BlcnR5IiwiZHJ5cnVuIiwiX1BhcnNlciIsInRleHRSZW5kZXJlciIsInBhcnNlcjIiLCJsMiIsImwzIiwiY2VsbCIsIml0ZW1Cb2R5IiwicmV0IiwicmVuZGVyZXJzIiwidW5zaGlmdCIsInBhc3NUaHJvdWdoSG9va3MiLCJTZXQiLCJwcmVwcm9jZXNzIiwibWFya2Rvd24iLCJwb3N0cHJvY2VzcyIsInBhcnNlTWFya2Rvd24iLCJhcmdzIiwidmFsdWVzIiwiY29uY2F0IiwiY2hpbGRUb2tlbnMiLCJwYWNrIiwib3B0cyIsImV4dCIsInByZXZSZW5kZXJlciIsImFyZ3MyIiwiYXBwbHkiLCJwcm9wIiwicHJldlRva2VuaXplciIsInByZXZIb29rIiwiaGFzIiwiYXJnIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwicmV0MiIsIndhbGtUb2tlbnMyIiwiI3BhcnNlTWFya2Rvd24iLCJvcmlnT3B0IiwidGhyb3dFcnJvciIsIm9uRXJyb3IiLCJwcm90b3R5cGUiLCJkb25lIiwiZXJyIiwicGVuZGluZyIsInNldFRpbWVvdXQiLCJzcmMyIiwiYWxsIiwiY2F0Y2giLCIjb25FcnJvciIsIm1lc3NhZ2UiLCJtc2ciLCJyZWplY3QiLCJtYXJrZWRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxT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LE1BQUEsQ0FBT0YsV0FBQSxHQUFjQSxXQUFBO0FBRXJCRSxNQUFBLENBQU9ILFFBQUEsR0FBV0EsUUFBQTtBQU1sQkcsTUFBQSxDQUFPTSxHQUFBLEdBQU0sYUFBWXlVLElBQUEsRUFBTTtFQUM3Qm9DLGNBQUEsQ0FBZTdXLEdBQUEsQ0FBSSxHQUFHeVUsSUFBSTtFQUMxQi9VLE1BQUEsQ0FBT0gsUUFBQSxHQUFXc1gsY0FBQSxDQUFldFgsUUFBQTtFQUNqQ2lDLGNBQUEsQ0FBZTlCLE1BQUEsQ0FBT0gsUUFBUTtFQUM5QixPQUFPRyxNQUFBO0FBQ1Q7QUFNQUEsTUFBQSxDQUFPTyxVQUFBLEdBQWEsVUFBU3VILE1BQUEsRUFBUWQsUUFBQSxFQUFVO0VBQzdDLE9BQU9tUSxjQUFBLENBQWU1VyxVQUFBLENBQVd1SCxNQUFBLEVBQVFkLFFBQVE7QUFDbkQ7QUFNQWhILE1BQUEsQ0FBT0csV0FBQSxHQUFjZ1gsY0FBQSxDQUFlaFgsV0FBQTtBQUtwQ0gsTUFBQSxDQUFPUixNQUFBLEdBQVNBLE1BQUE7QUFDaEJRLE1BQUEsQ0FBT0ksTUFBQSxHQUFTWixNQUFBLENBQU9VLEtBQUE7QUFDdkJGLE1BQUEsQ0FBT1AsUUFBQSxHQUFXQSxRQUFBO0FBQ2xCTyxNQUFBLENBQU9MLFlBQUEsR0FBZUEsWUFBQTtBQUN0QkssTUFBQSxDQUFPVixLQUFBLEdBQVFBLEtBQUE7QUFDZlUsTUFBQSxDQUFPRCxLQUFBLEdBQVFULEtBQUEsQ0FBTXdSLEdBQUE7QUFDckI5USxNQUFBLENBQU9KLFNBQUEsR0FBWUEsU0FBQTtBQUNuQkksTUFBQSxDQUFPTixPQUFBLEdBQVVBLE9BQUE7QUFDakJNLE1BQUEsQ0FBT1gsS0FBQSxHQUFRQSxLQUFBO0FBQ2ZXLE1BQUEsQ0FBT0UsS0FBQSxHQUFRRixNQUFBO0FBRWYsSUFBTUMsT0FBQSxHQUFVRCxNQUFBLENBQU9DLE9BQUE7QUFDdkIsSUFBTUksVUFBQSxHQUFhTCxNQUFBLENBQU9LLFVBQUE7QUFDMUIsSUFBTUMsR0FBQSxHQUFNTixNQUFBLENBQU9NLEdBQUE7QUFDbkIsSUFBTUMsVUFBQSxHQUFhUCxNQUFBLENBQU9PLFVBQUE7QUFDMUIsSUFBTUosV0FBQSxHQUFjSCxNQUFBLENBQU9HLFdBQUE7QUFDM0IsSUFBTUQsS0FBQSxHQUFRRixNQUFBO0FBQ2QsSUFBTUksTUFBQSxHQUFTWixNQUFBLENBQU9VLEtBQUE7QUFDdEIsSUFBTUgsS0FBQSxHQUFRVCxLQUFBLENBQU13UixHQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==