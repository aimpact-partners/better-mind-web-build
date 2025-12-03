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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC41LjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5lc20uanMiXSwibmFtZXMiOlsibWFya2VkXzVfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkhvb2tzIiwiTGV4ZXIiLCJNYXJrZWQiLCJQYXJzZXIiLCJSZW5kZXJlciIsIlNsdWdnZXIiLCJUZXh0UmVuZGVyZXIiLCJUb2tlbml6ZXIiLCJkZWZhdWx0cyIsImdldERlZmF1bHRzIiwibGV4ZXIiLCJtYXJrZWQiLCJvcHRpb25zIiwicGFyc2UiLCJwYXJzZUlubGluZSIsInBhcnNlciIsInNldE9wdGlvbnMiLCJ1c2UiLCJ3YWxrVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImFzeW5jIiwiYmFzZVVybCIsImJyZWFrcyIsImV4dGVuc2lvbnMiLCJnZm0iLCJoZWFkZXJJZHMiLCJoZWFkZXJQcmVmaXgiLCJoaWdobGlnaHQiLCJob29rcyIsImxhbmdQcmVmaXgiLCJtYW5nbGUiLCJwZWRhbnRpYyIsInJlbmRlcmVyIiwic2FuaXRpemUiLCJzYW5pdGl6ZXIiLCJzaWxlbnQiLCJzbWFydHlwYW50cyIsInRva2VuaXplciIsInhodG1sIiwiY2hhbmdlRGVmYXVsdHMiLCJuZXdEZWZhdWx0cyIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImVzY2FwZSIsImh0bWwiLCJlbmNvZGUiLCJ0ZXN0IiwicmVwbGFjZSIsInVuZXNjYXBlVGVzdCIsInVuZXNjYXBlIiwiXyIsIm4iLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY2FyZXQiLCJlZGl0IiwicmVnZXgiLCJvcHQiLCJvYmoiLCJuYW1lIiwidmFsIiwiZ2V0UmVnZXgiLCJub25Xb3JkQW5kQ29sb25UZXN0Iiwib3JpZ2luSW5kZXBlbmRlbnRVcmwiLCJjbGVhblVybCIsImJhc2UiLCJocmVmIiwicHJvdCIsImRlY29kZVVSSUNvbXBvbmVudCIsImUiLCJpbmRleE9mIiwicmVzb2x2ZVVybCIsImVuY29kZVVSSSIsImJhc2VVcmxzIiwianVzdERvbWFpbiIsInByb3RvY29sIiwiZG9tYWluIiwicnRyaW0iLCJyZWxhdGl2ZUJhc2UiLCJub29wVGVzdCIsImV4ZWMiLCJub29wVGVzdDIiLCJzcGxpdENlbGxzIiwidGFibGVSb3ciLCJjb3VudCIsInJvdyIsIm1hdGNoIiwib2Zmc2V0Iiwic3RyIiwiZXNjYXBlZCIsImN1cnIiLCJjZWxscyIsInNwbGl0IiwiaSIsInRyaW0iLCJzaGlmdCIsImxlbmd0aCIsInBvcCIsInNwbGljZSIsInB1c2giLCJjIiwiaW52ZXJ0IiwibCIsInN1ZmZMZW4iLCJjdXJyQ2hhciIsInNsaWNlIiwiZmluZENsb3NpbmdCcmFja2V0IiwiYiIsImxldmVsIiwiY2hlY2tEZXByZWNhdGlvbnMiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJ3YXJuIiwib3V0cHV0TGluayIsImNhcCIsImxpbmsiLCJyYXciLCJsZXhlcjIiLCJ0aXRsZSIsInRleHQiLCJzdGF0ZSIsImluTGluayIsInRva2VuIiwidHlwZSIsInRva2VucyIsImlubGluZVRva2VucyIsImluZGVudENvZGVDb21wZW5zYXRpb24iLCJtYXRjaEluZGVudFRvQ29kZSIsImluZGVudFRvQ29kZSIsIm1hcCIsIm5vZGUiLCJtYXRjaEluZGVudEluTm9kZSIsImluZGVudEluTm9kZSIsImpvaW4iLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMyIiwic3BhY2UiLCJzcmMiLCJydWxlcyIsImJsb2NrIiwibmV3bGluZSIsImNvZGUiLCJjb2RlQmxvY2tTdHlsZSIsImZlbmNlcyIsImxhbmciLCJpbmxpbmUiLCJfZXNjYXBlcyIsImhlYWRpbmciLCJ0cmltbWVkIiwiZGVwdGgiLCJociIsImJsb2NrcXVvdGUiLCJ0b3AiLCJibG9ja1Rva2VucyIsImxpc3QiLCJpc3Rhc2siLCJpc2NoZWNrZWQiLCJpbmRlbnQiLCJibGFua0xpbmUiLCJlbmRzV2l0aEJsYW5rTGluZSIsImxpbmUiLCJuZXh0TGluZSIsInJhd0xpbmUiLCJpdGVtQ29udGVudHMiLCJlbmRFYXJseSIsImJ1bGwiLCJpc29yZGVyZWQiLCJvcmRlcmVkIiwic3RhcnQiLCJsb29zZSIsIml0ZW1zIiwiaXRlbVJlZ2V4IiwidCIsInJlcGVhdCIsInRyaW1MZWZ0Iiwic2VhcmNoIiwibmV4dEJ1bGxldFJlZ2V4IiwiTWF0aCIsIm1pbiIsImhyUmVnZXgiLCJmZW5jZXNCZWdpblJlZ2V4IiwiaGVhZGluZ0JlZ2luUmVnZXgiLCJ0YXNrIiwiY2hlY2tlZCIsInRyaW1SaWdodCIsInNwYWNlcnMiLCJmaWx0ZXIiLCJoYXNNdWx0aXBsZUxpbmVCcmVha3MiLCJzb21lIiwicHJlIiwiZGVmIiwidGFnIiwidGFibGUiLCJpdGVtIiwiaGVhZGVyIiwiYWxpZ24iLCJyb3dzIiwiaiIsImsiLCJsaGVhZGluZyIsInBhcmFncmFwaCIsImluUmF3QmxvY2siLCJ0cmltbWVkVXJsIiwicnRyaW1TbGFzaCIsImxhc3RQYXJlbkluZGV4IiwibGlua0xlbiIsInJlZmxpbmsiLCJsaW5rcyIsIm5vbGluayIsImVtU3Ryb25nIiwibWFza2VkU3JjIiwicHJldkNoYXIiLCJsRGVsaW0iLCJuZXh0Q2hhciIsInB1bmN0dWF0aW9uIiwibExlbmd0aCIsInJEZWxpbSIsInJMZW5ndGgiLCJkZWxpbVRvdGFsIiwibWlkRGVsaW1Ub3RhbCIsImVuZFJlZyIsInJEZWxpbUFzdCIsInJEZWxpbVVuZCIsImxhc3RJbmRleCIsImluZGV4IiwidGV4dDIiLCJjb2Rlc3BhbiIsImhhc05vblNwYWNlQ2hhcnMiLCJoYXNTcGFjZUNoYXJzT25Cb3RoRW5kcyIsImJyIiwiZGVsIiwiYXV0b2xpbmsiLCJtYW5nbGUyIiwidXJsIiwicHJldkNhcFplcm8iLCJfYmFja3BlZGFsIiwiaW5saW5lVGV4dCIsInNtYXJ0eXBhbnRzMiIsIl9wYXJhZ3JhcGgiLCJfbGFiZWwiLCJfdGl0bGUiLCJidWxsZXQiLCJsaXN0SXRlbVN0YXJ0IiwiX3RhZyIsIl9jb21tZW50Iiwibm9ybWFsIiwicmVmbGlua1NlYXJjaCIsIl9wdW5jdHVhdGlvbiIsImJsb2NrU2tpcCIsImFueVB1bmN0dWF0aW9uIiwiX3NjaGVtZSIsIl9lbWFpbCIsIl9hdHRyaWJ1dGUiLCJfaHJlZiIsInN0cm9uZyIsIm1pZGRsZSIsImVuZEFzdCIsImVuZFVuZCIsImVtIiwiX2V4dGVuZGVkX2VtYWlsIiwib3V0IiwiY2hhckNvZGVBdCIsInJhbmRvbSIsInRvU3RyaW5nIiwiX0xleGVyIiwiT2JqZWN0IiwiY3JlYXRlIiwiaW5saW5lUXVldWUiLCJsZXgiLCJsZXhJbmxpbmUiLCJuZXh0IiwibGVhZGluZyIsInRhYnMiLCJsYXN0VG9rZW4iLCJjdXRTcmMiLCJsYXN0UGFyYWdyYXBoQ2xpcHBlZCIsImV4dFRva2VuaXplciIsImNhbGwiLCJzdGFydEJsb2NrIiwic3RhcnRJbmRleCIsIkluZmluaXR5IiwidGVtcFNyYyIsInRlbXBTdGFydCIsImZvckVhY2giLCJnZXRTdGFydEluZGV4IiwiZXJyTXNnIiwiZXJyb3IiLCJFcnJvciIsImtlZXBQcmV2Q2hhciIsImtleXMiLCJpbmNsdWRlcyIsImxhc3RJbmRleE9mIiwic3RhcnRJbmxpbmUiLCJpbmZvc3RyaW5nIiwicXVvdGUiLCJibG9jazIiLCJzbHVnZ2VyIiwiaWQiLCJzbHVnIiwiYm9keSIsInN0YXJ0YXR0IiwibGlzdGl0ZW0iLCJjaGVja2JveCIsInRhYmxlcm93IiwiY29udGVudCIsInRhYmxlY2VsbCIsImZsYWdzIiwiaW1hZ2UiLCJzZWVuIiwic2VyaWFsaXplIiwidmFsdWUiLCJnZXROZXh0U2FmZVNsdWciLCJvcmlnaW5hbFNsdWciLCJpc0RyeVJ1biIsIm9jY3VyZW5jZUFjY3VtdWxhdG9yIiwiaGFzT3duUHJvcGVydHkiLCJkcnlydW4iLCJfUGFyc2VyIiwidGV4dFJlbmRlcmVyIiwicGFyc2VyMiIsImwyIiwibDMiLCJjZWxsIiwiaXRlbUJvZHkiLCJyZXQiLCJyZW5kZXJlcnMiLCJ1bnNoaWZ0IiwicGFzc1Rocm91Z2hIb29rcyIsIlNldCIsInByZXByb2Nlc3MiLCJtYXJrZG93biIsInBvc3Rwcm9jZXNzIiwicGFyc2VNYXJrZG93biIsImFyZ3MiLCJ2YWx1ZXMiLCJjb25jYXQiLCJjaGlsZFRva2VucyIsInBhY2siLCJvcHRzIiwiZXh0IiwicHJldlJlbmRlcmVyIiwiYXJnczIiLCJhcHBseSIsInByb3AiLCJwcmV2VG9rZW5pemVyIiwicHJldkhvb2siLCJoYXMiLCJhcmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXQyIiwid2Fsa1Rva2VuczIiLCIjcGFyc2VNYXJrZG93biIsIm9yaWdPcHQiLCJ0aHJvd0Vycm9yIiwib25FcnJvciIsInByb3RvdHlwZSIsImRvbmUiLCJlcnIiLCJwZW5kaW5nIiwic2V0VGltZW91dCIsInNyYzIiLCJhbGwiLCJjYXRjaCIsIiNvbkVycm9yIiwibWVzc2FnZSIsIm1zZyIsInJlamVjdCIsIm1hcmtlZEluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUF2QixvQkFBQTs7O0FDV0EsU0FBU1csWUFBQSxFQUFjO0VBQ3JCLE9BQU87SUFDTGEsS0FBQSxFQUFPO0lBQ1BDLE9BQUEsRUFBUztJQUNUQyxNQUFBLEVBQVE7SUFDUkMsVUFBQSxFQUFZO0lBQ1pDLEdBQUEsRUFBSztJQUNMQyxTQUFBLEVBQVc7SUFDWEMsWUFBQSxFQUFjO0lBQ2RDLFNBQUEsRUFBVztJQUNYQyxLQUFBLEVBQU87SUFDUEMsVUFBQSxFQUFZO0lBQ1pDLE1BQUEsRUFBUTtJQUNSQyxRQUFBLEVBQVU7SUFDVkMsUUFBQSxFQUFVO0lBQ1ZDLFFBQUEsRUFBVTtJQUNWQyxTQUFBLEVBQVc7SUFDWEMsTUFBQSxFQUFRO0lBQ1JDLFdBQUEsRUFBYTtJQUNiQyxTQUFBLEVBQVc7SUFDWHJCLFVBQUEsRUFBWTtJQUNac0IsS0FBQSxFQUFPO0VBQ1Q7QUFDRjtBQUVBLElBQUloQyxRQUFBLEdBQVdDLFdBQUEsQ0FBWTtBQUUzQixTQUFTZ0MsZUFBZUMsV0FBQSxFQUFhO0VBQ25DbEMsUUFBQSxHQUFXa0MsV0FBQTtBQUNiO0FBS0EsSUFBTUMsVUFBQSxHQUFhO0FBQ25CLElBQU1DLGFBQUEsR0FBZ0IsSUFBSUMsTUFBQSxDQUFPRixVQUFBLENBQVdHLE1BQUEsRUFBUSxHQUFHO0FBQ3ZELElBQU1DLGtCQUFBLEdBQXFCO0FBQzNCLElBQU1DLHFCQUFBLEdBQXdCLElBQUlILE1BQUEsQ0FBT0Usa0JBQUEsQ0FBbUJELE1BQUEsRUFBUSxHQUFHO0FBQ3ZFLElBQU1HLGtCQUFBLEdBQXFCO0VBQ3pCLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0FBQ1A7QUFDQSxJQUFNQyxvQkFBQSxHQUF3QkMsRUFBQSxJQUFPRixrQkFBQSxDQUFtQkUsRUFBRTtBQUMxRCxTQUFTQyxPQUFPQyxJQUFBLEVBQU1DLE1BQUEsRUFBUTtFQUM1QixJQUFJQSxNQUFBLEVBQVE7SUFDVixJQUFJWCxVQUFBLENBQVdZLElBQUEsQ0FBS0YsSUFBSSxHQUFHO01BQ3pCLE9BQU9BLElBQUEsQ0FBS0csT0FBQSxDQUFRWixhQUFBLEVBQWVNLG9CQUFvQjtJQUN6RDtFQUNGLE9BQU87SUFDTCxJQUFJSCxrQkFBQSxDQUFtQlEsSUFBQSxDQUFLRixJQUFJLEdBQUc7TUFDakMsT0FBT0EsSUFBQSxDQUFLRyxPQUFBLENBQVFSLHFCQUFBLEVBQXVCRSxvQkFBb0I7SUFDakU7RUFDRjtFQUVBLE9BQU9HLElBQUE7QUFDVDtBQUVBLElBQU1JLFlBQUEsR0FBZTtBQUtyQixTQUFTQyxTQUFTTCxJQUFBLEVBQU07RUFFdEIsT0FBT0EsSUFBQSxDQUFLRyxPQUFBLENBQVFDLFlBQUEsRUFBYyxDQUFDRSxDQUFBLEVBQUdDLENBQUEsS0FBTTtJQUMxQ0EsQ0FBQSxHQUFJQSxDQUFBLENBQUVDLFdBQUEsQ0FBWTtJQUNsQixJQUFJRCxDQUFBLEtBQU0sU0FBUyxPQUFPO0lBQzFCLElBQUlBLENBQUEsQ0FBRUUsTUFBQSxDQUFPLENBQUMsTUFBTSxLQUFLO01BQ3ZCLE9BQU9GLENBQUEsQ0FBRUUsTUFBQSxDQUFPLENBQUMsTUFBTSxNQUNuQkMsTUFBQSxDQUFPQyxZQUFBLENBQWFDLFFBQUEsQ0FBU0wsQ0FBQSxDQUFFTSxTQUFBLENBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUNoREgsTUFBQSxDQUFPQyxZQUFBLENBQWEsQ0FBQ0osQ0FBQSxDQUFFTSxTQUFBLENBQVUsQ0FBQyxDQUFDO0lBQ3pDO0lBQ0EsT0FBTztFQUNULENBQUM7QUFDSDtBQUVBLElBQU1DLEtBQUEsR0FBUTtBQU1kLFNBQVNDLEtBQUtDLEtBQUEsRUFBT0MsR0FBQSxFQUFLO0VBQ3hCRCxLQUFBLEdBQVEsT0FBT0EsS0FBQSxLQUFVLFdBQVdBLEtBQUEsR0FBUUEsS0FBQSxDQUFNdkIsTUFBQTtFQUNsRHdCLEdBQUEsR0FBTUEsR0FBQSxJQUFPO0VBQ2IsTUFBTUMsR0FBQSxHQUFNO0lBQ1ZmLE9BQUEsRUFBU0EsQ0FBQ2dCLElBQUEsRUFBTUMsR0FBQSxLQUFRO01BQ3RCQSxHQUFBLEdBQU1BLEdBQUEsQ0FBSTNCLE1BQUEsSUFBVTJCLEdBQUE7TUFDcEJBLEdBQUEsR0FBTUEsR0FBQSxDQUFJakIsT0FBQSxDQUFRVyxLQUFBLEVBQU8sSUFBSTtNQUM3QkUsS0FBQSxHQUFRQSxLQUFBLENBQU1iLE9BQUEsQ0FBUWdCLElBQUEsRUFBTUMsR0FBRztNQUMvQixPQUFPRixHQUFBO0lBQ1Q7SUFDQUcsUUFBQSxFQUFVQSxDQUFBLEtBQU07TUFDZCxPQUFPLElBQUk3QixNQUFBLENBQU93QixLQUFBLEVBQU9DLEdBQUc7SUFDOUI7RUFDRjtFQUNBLE9BQU9DLEdBQUE7QUFDVDtBQUVBLElBQU1JLG1CQUFBLEdBQXNCO0FBQzVCLElBQU1DLG9CQUFBLEdBQXVCO0FBTzdCLFNBQVNDLFNBQVMxQyxRQUFBLEVBQVUyQyxJQUFBLEVBQU1DLElBQUEsRUFBTTtFQUN0QyxJQUFJNUMsUUFBQSxFQUFVO0lBQ1osSUFBSTZDLElBQUE7SUFDSixJQUFJO01BQ0ZBLElBQUEsR0FBT0Msa0JBQUEsQ0FBbUJ2QixRQUFBLENBQVNxQixJQUFJLENBQUMsRUFDckN2QixPQUFBLENBQVFtQixtQkFBQSxFQUFxQixFQUFFLEVBQy9CZCxXQUFBLENBQVk7SUFDakIsU0FBU3FCLENBQUEsRUFBRztNQUNWLE9BQU87SUFDVDtJQUNBLElBQUlGLElBQUEsQ0FBS0csT0FBQSxDQUFRLGFBQWEsTUFBTSxLQUFLSCxJQUFBLENBQUtHLE9BQUEsQ0FBUSxXQUFXLE1BQU0sS0FBS0gsSUFBQSxDQUFLRyxPQUFBLENBQVEsT0FBTyxNQUFNLEdBQUc7TUFDdkcsT0FBTztJQUNUO0VBQ0Y7RUFDQSxJQUFJTCxJQUFBLElBQVEsQ0FBQ0Ysb0JBQUEsQ0FBcUJyQixJQUFBLENBQUt3QixJQUFJLEdBQUc7SUFDNUNBLElBQUEsR0FBT0ssVUFBQSxDQUFXTixJQUFBLEVBQU1DLElBQUk7RUFDOUI7RUFDQSxJQUFJO0lBQ0ZBLElBQUEsR0FBT00sU0FBQSxDQUFVTixJQUFJLEVBQUV2QixPQUFBLENBQVEsUUFBUSxHQUFHO0VBQzVDLFNBQVMwQixDQUFBLEVBQUc7SUFDVixPQUFPO0VBQ1Q7RUFDQSxPQUFPSCxJQUFBO0FBQ1Q7QUFFQSxJQUFNTyxRQUFBLEdBQVcsQ0FBQztBQUNsQixJQUFNQyxVQUFBLEdBQWE7QUFDbkIsSUFBTUMsUUFBQSxHQUFXO0FBQ2pCLElBQU1DLE1BQUEsR0FBUztBQU1mLFNBQVNMLFdBQVdOLElBQUEsRUFBTUMsSUFBQSxFQUFNO0VBQzlCLElBQUksQ0FBQ08sUUFBQSxDQUFTLE1BQU1SLElBQUksR0FBRztJQUl6QixJQUFJUyxVQUFBLENBQVdoQyxJQUFBLENBQUt1QixJQUFJLEdBQUc7TUFDekJRLFFBQUEsQ0FBUyxNQUFNUixJQUFJLElBQUlBLElBQUEsR0FBTztJQUNoQyxPQUFPO01BQ0xRLFFBQUEsQ0FBUyxNQUFNUixJQUFJLElBQUlZLEtBQUEsQ0FBTVosSUFBQSxFQUFNLEtBQUssSUFBSTtJQUM5QztFQUNGO0VBQ0FBLElBQUEsR0FBT1EsUUFBQSxDQUFTLE1BQU1SLElBQUk7RUFDMUIsTUFBTWEsWUFBQSxHQUFlYixJQUFBLENBQUtLLE9BQUEsQ0FBUSxHQUFHLE1BQU07RUFFM0MsSUFBSUosSUFBQSxDQUFLYixTQUFBLENBQVUsR0FBRyxDQUFDLE1BQU0sTUFBTTtJQUNqQyxJQUFJeUIsWUFBQSxFQUFjO01BQ2hCLE9BQU9aLElBQUE7SUFDVDtJQUNBLE9BQU9ELElBQUEsQ0FBS3RCLE9BQUEsQ0FBUWdDLFFBQUEsRUFBVSxJQUFJLElBQUlULElBQUE7RUFDeEMsV0FBV0EsSUFBQSxDQUFLakIsTUFBQSxDQUFPLENBQUMsTUFBTSxLQUFLO0lBQ2pDLElBQUk2QixZQUFBLEVBQWM7TUFDaEIsT0FBT1osSUFBQTtJQUNUO0lBQ0EsT0FBT0QsSUFBQSxDQUFLdEIsT0FBQSxDQUFRaUMsTUFBQSxFQUFRLElBQUksSUFBSVYsSUFBQTtFQUN0QyxPQUFPO0lBQ0wsT0FBT0QsSUFBQSxHQUFPQyxJQUFBO0VBQ2hCO0FBQ0Y7QUFFQSxJQUFNYSxRQUFBLEdBQVc7RUFBRUMsSUFBQSxFQUFNLFNBQVNDLFVBQUEsRUFBVyxDQUFDO0FBQUU7QUFFaEQsU0FBU0MsV0FBV0MsUUFBQSxFQUFVQyxLQUFBLEVBQU87RUFHbkMsTUFBTUMsR0FBQSxHQUFNRixRQUFBLENBQVN4QyxPQUFBLENBQVEsT0FBTyxDQUFDMkMsS0FBQSxFQUFPQyxNQUFBLEVBQVFDLEdBQUEsS0FBUTtNQUN4RCxJQUFJQyxPQUFBLEdBQVU7UUFDWkMsSUFBQSxHQUFPSCxNQUFBO01BQ1QsT0FBTyxFQUFFRyxJQUFBLElBQVEsS0FBS0YsR0FBQSxDQUFJRSxJQUFJLE1BQU0sTUFBTUQsT0FBQSxHQUFVLENBQUNBLE9BQUE7TUFDckQsSUFBSUEsT0FBQSxFQUFTO1FBR1gsT0FBTztNQUNULE9BQU87UUFFTCxPQUFPO01BQ1Q7SUFDRixDQUFDO0lBQ0RFLEtBQUEsR0FBUU4sR0FBQSxDQUFJTyxLQUFBLENBQU0sS0FBSztFQUN6QixJQUFJQyxDQUFBLEdBQUk7RUFHUixJQUFJLENBQUNGLEtBQUEsQ0FBTSxDQUFDLEVBQUVHLElBQUEsQ0FBSyxHQUFHO0lBQUVILEtBQUEsQ0FBTUksS0FBQSxDQUFNO0VBQUc7RUFDdkMsSUFBSUosS0FBQSxDQUFNSyxNQUFBLEdBQVMsS0FBSyxDQUFDTCxLQUFBLENBQU1BLEtBQUEsQ0FBTUssTUFBQSxHQUFTLENBQUMsRUFBRUYsSUFBQSxDQUFLLEdBQUc7SUFBRUgsS0FBQSxDQUFNTSxHQUFBLENBQUk7RUFBRztFQUV4RSxJQUFJTixLQUFBLENBQU1LLE1BQUEsR0FBU1osS0FBQSxFQUFPO0lBQ3hCTyxLQUFBLENBQU1PLE1BQUEsQ0FBT2QsS0FBSztFQUNwQixPQUFPO0lBQ0wsT0FBT08sS0FBQSxDQUFNSyxNQUFBLEdBQVNaLEtBQUEsRUFBT08sS0FBQSxDQUFNUSxJQUFBLENBQUssRUFBRTtFQUM1QztFQUVBLE9BQU9OLENBQUEsR0FBSUYsS0FBQSxDQUFNSyxNQUFBLEVBQVFILENBQUEsSUFBSztJQUU1QkYsS0FBQSxDQUFNRSxDQUFDLElBQUlGLEtBQUEsQ0FBTUUsQ0FBQyxFQUFFQyxJQUFBLENBQUssRUFBRW5ELE9BQUEsQ0FBUSxTQUFTLEdBQUc7RUFDakQ7RUFDQSxPQUFPZ0QsS0FBQTtBQUNUO0FBVUEsU0FBU2QsTUFBTVcsR0FBQSxFQUFLWSxDQUFBLEVBQUdDLE1BQUEsRUFBUTtFQUM3QixNQUFNQyxDQUFBLEdBQUlkLEdBQUEsQ0FBSVEsTUFBQTtFQUNkLElBQUlNLENBQUEsS0FBTSxHQUFHO0lBQ1gsT0FBTztFQUNUO0VBR0EsSUFBSUMsT0FBQSxHQUFVO0VBR2QsT0FBT0EsT0FBQSxHQUFVRCxDQUFBLEVBQUc7SUFDbEIsTUFBTUUsUUFBQSxHQUFXaEIsR0FBQSxDQUFJdkMsTUFBQSxDQUFPcUQsQ0FBQSxHQUFJQyxPQUFBLEdBQVUsQ0FBQztJQUMzQyxJQUFJQyxRQUFBLEtBQWFKLENBQUEsSUFBSyxDQUFDQyxNQUFBLEVBQVE7TUFDN0JFLE9BQUE7SUFDRixXQUFXQyxRQUFBLEtBQWFKLENBQUEsSUFBS0MsTUFBQSxFQUFRO01BQ25DRSxPQUFBO0lBQ0YsT0FBTztNQUNMO0lBQ0Y7RUFDRjtFQUVBLE9BQU9mLEdBQUEsQ0FBSWlCLEtBQUEsQ0FBTSxHQUFHSCxDQUFBLEdBQUlDLE9BQU87QUFDakM7QUFFQSxTQUFTRyxtQkFBbUJsQixHQUFBLEVBQUttQixDQUFBLEVBQUc7RUFDbEMsSUFBSW5CLEdBQUEsQ0FBSWxCLE9BQUEsQ0FBUXFDLENBQUEsQ0FBRSxDQUFDLENBQUMsTUFBTSxJQUFJO0lBQzVCLE9BQU87RUFDVDtFQUNBLE1BQU1MLENBQUEsR0FBSWQsR0FBQSxDQUFJUSxNQUFBO0VBQ2QsSUFBSVksS0FBQSxHQUFRO0lBQ1ZmLENBQUEsR0FBSTtFQUNOLE9BQU9BLENBQUEsR0FBSVMsQ0FBQSxFQUFHVCxDQUFBLElBQUs7SUFDakIsSUFBSUwsR0FBQSxDQUFJSyxDQUFDLE1BQU0sTUFBTTtNQUNuQkEsQ0FBQTtJQUNGLFdBQVdMLEdBQUEsQ0FBSUssQ0FBQyxNQUFNYyxDQUFBLENBQUUsQ0FBQyxHQUFHO01BQzFCQyxLQUFBO0lBQ0YsV0FBV3BCLEdBQUEsQ0FBSUssQ0FBQyxNQUFNYyxDQUFBLENBQUUsQ0FBQyxHQUFHO01BQzFCQyxLQUFBO01BQ0EsSUFBSUEsS0FBQSxHQUFRLEdBQUc7UUFDYixPQUFPZixDQUFBO01BQ1Q7SUFDRjtFQUNGO0VBQ0EsT0FBTztBQUNUO0FBRUEsU0FBU2dCLGtCQUFrQnBELEdBQUEsRUFBS3FELFFBQUEsRUFBVTtFQUN4QyxJQUFJLENBQUNyRCxHQUFBLElBQU9BLEdBQUEsQ0FBSWpDLE1BQUEsRUFBUTtJQUN0QjtFQUNGO0VBRUEsSUFBSXNGLFFBQUEsRUFBVTtJQUNaQyxPQUFBLENBQVFDLElBQUEsQ0FBSyxtS0FBbUs7RUFDbEw7RUFFQSxJQUFJdkQsR0FBQSxDQUFJbkMsUUFBQSxJQUFZbUMsR0FBQSxDQUFJbEMsU0FBQSxFQUFXO0lBQ2pDd0YsT0FBQSxDQUFRQyxJQUFBLENBQUsseU1BQXlNO0VBQ3hOO0VBRUEsSUFBSXZELEdBQUEsQ0FBSXpDLFNBQUEsSUFBYXlDLEdBQUEsQ0FBSXZDLFVBQUEsS0FBZSxhQUFhO0lBQ25ENkYsT0FBQSxDQUFRQyxJQUFBLENBQUsscU1BQXFNO0VBQ3BOO0VBRUEsSUFBSXZELEdBQUEsQ0FBSXRDLE1BQUEsRUFBUTtJQUNkNEYsT0FBQSxDQUFRQyxJQUFBLENBQUssa1BBQWtQO0VBQ2pRO0VBRUEsSUFBSXZELEdBQUEsQ0FBSS9DLE9BQUEsRUFBUztJQUNmcUcsT0FBQSxDQUFRQyxJQUFBLENBQUssaUxBQWlMO0VBQ2hNO0VBRUEsSUFBSXZELEdBQUEsQ0FBSWhDLFdBQUEsRUFBYTtJQUNuQnNGLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLHdMQUF3TDtFQUN2TTtFQUVBLElBQUl2RCxHQUFBLENBQUk5QixLQUFBLEVBQU87SUFDYm9GLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLDRLQUE0SztFQUMzTDtFQUVBLElBQUl2RCxHQUFBLENBQUkzQyxTQUFBLElBQWEyQyxHQUFBLENBQUkxQyxZQUFBLEVBQWM7SUFDckNnRyxPQUFBLENBQVFDLElBQUEsQ0FBSyxpUkFBaVI7RUFDaFM7QUFDRjtBQUVBLFNBQVNDLFdBQVdDLEdBQUEsRUFBS0MsSUFBQSxFQUFNQyxHQUFBLEVBQUtDLE1BQUEsRUFBTztFQUN6QyxNQUFNbkQsSUFBQSxHQUFPaUQsSUFBQSxDQUFLakQsSUFBQTtFQUNsQixNQUFNb0QsS0FBQSxHQUFRSCxJQUFBLENBQUtHLEtBQUEsR0FBUS9FLE1BQUEsQ0FBTzRFLElBQUEsQ0FBS0csS0FBSyxJQUFJO0VBQ2hELE1BQU1DLElBQUEsR0FBT0wsR0FBQSxDQUFJLENBQUMsRUFBRXZFLE9BQUEsQ0FBUSxlQUFlLElBQUk7RUFFL0MsSUFBSXVFLEdBQUEsQ0FBSSxDQUFDLEVBQUVqRSxNQUFBLENBQU8sQ0FBQyxNQUFNLEtBQUs7SUFDNUJvRSxNQUFBLENBQU1HLEtBQUEsQ0FBTUMsTUFBQSxHQUFTO0lBQ3JCLE1BQU1DLEtBQUEsR0FBUTtNQUNaQyxJQUFBLEVBQU07TUFDTlAsR0FBQTtNQUNBbEQsSUFBQTtNQUNBb0QsS0FBQTtNQUNBQyxJQUFBO01BQ0FLLE1BQUEsRUFBUVAsTUFBQSxDQUFNUSxZQUFBLENBQWFOLElBQUk7SUFDakM7SUFDQUYsTUFBQSxDQUFNRyxLQUFBLENBQU1DLE1BQUEsR0FBUztJQUNyQixPQUFPQyxLQUFBO0VBQ1Q7RUFDQSxPQUFPO0lBQ0xDLElBQUEsRUFBTTtJQUNOUCxHQUFBO0lBQ0FsRCxJQUFBO0lBQ0FvRCxLQUFBO0lBQ0FDLElBQUEsRUFBTWhGLE1BQUEsQ0FBT2dGLElBQUk7RUFDbkI7QUFDRjtBQUVBLFNBQVNPLHVCQUF1QlYsR0FBQSxFQUFLRyxJQUFBLEVBQU07RUFDekMsTUFBTVEsaUJBQUEsR0FBb0JYLEdBQUEsQ0FBSTlCLEtBQUEsQ0FBTSxlQUFlO0VBRW5ELElBQUl5QyxpQkFBQSxLQUFzQixNQUFNO0lBQzlCLE9BQU9SLElBQUE7RUFDVDtFQUVBLE1BQU1TLFlBQUEsR0FBZUQsaUJBQUEsQ0FBa0IsQ0FBQztFQUV4QyxPQUFPUixJQUFBLENBQ0ozQixLQUFBLENBQU0sSUFBSSxFQUNWcUMsR0FBQSxDQUFJQyxJQUFBLElBQVE7SUFDWCxNQUFNQyxpQkFBQSxHQUFvQkQsSUFBQSxDQUFLNUMsS0FBQSxDQUFNLE1BQU07SUFDM0MsSUFBSTZDLGlCQUFBLEtBQXNCLE1BQU07TUFDOUIsT0FBT0QsSUFBQTtJQUNUO0lBRUEsTUFBTSxDQUFDRSxZQUFZLElBQUlELGlCQUFBO0lBRXZCLElBQUlDLFlBQUEsQ0FBYXBDLE1BQUEsSUFBVWdDLFlBQUEsQ0FBYWhDLE1BQUEsRUFBUTtNQUM5QyxPQUFPa0MsSUFBQSxDQUFLekIsS0FBQSxDQUFNdUIsWUFBQSxDQUFhaEMsTUFBTTtJQUN2QztJQUVBLE9BQU9rQyxJQUFBO0VBQ1QsQ0FBQyxFQUNBRyxJQUFBLENBQUssSUFBSTtBQUNkO0FBS0EsSUFBTTNJLFNBQUEsR0FBTixNQUFnQjtFQUNkNEksWUFBWUMsUUFBQSxFQUFTO0lBQ25CLEtBQUt4SSxPQUFBLEdBQVV3SSxRQUFBLElBQVc1SSxRQUFBO0VBQzVCO0VBRUE2SSxNQUFNQyxHQUFBLEVBQUs7SUFDVCxNQUFNdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1DLEtBQUEsQ0FBTUMsT0FBQSxDQUFRNUQsSUFBQSxDQUFLeUQsR0FBRztJQUM3QyxJQUFJdkIsR0FBQSxJQUFPQSxHQUFBLENBQUksQ0FBQyxFQUFFbEIsTUFBQSxHQUFTLEdBQUc7TUFDNUIsT0FBTztRQUNMMkIsSUFBQSxFQUFNO1FBQ05QLEdBQUEsRUFBS0YsR0FBQSxDQUFJLENBQUM7TUFDWjtJQUNGO0VBQ0Y7RUFFQTJCLEtBQUtKLEdBQUEsRUFBSztJQUNSLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTUMsS0FBQSxDQUFNRSxJQUFBLENBQUs3RCxJQUFBLENBQUt5RCxHQUFHO0lBQzFDLElBQUl2QixHQUFBLEVBQUs7TUFDUCxNQUFNSyxJQUFBLEdBQU9MLEdBQUEsQ0FBSSxDQUFDLEVBQUV2RSxPQUFBLENBQVEsYUFBYSxFQUFFO01BQzNDLE9BQU87UUFDTGdGLElBQUEsRUFBTTtRQUNOUCxHQUFBLEVBQUtGLEdBQUEsQ0FBSSxDQUFDO1FBQ1Y0QixjQUFBLEVBQWdCO1FBQ2hCdkIsSUFBQSxFQUFNLENBQUMsS0FBS3hILE9BQUEsQ0FBUXFCLFFBQUEsR0FDaEJ5RCxLQUFBLENBQU0wQyxJQUFBLEVBQU0sSUFBSSxJQUNoQkE7TUFDTjtJQUNGO0VBQ0Y7RUFFQXdCLE9BQU9OLEdBQUEsRUFBSztJQUNWLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTUMsS0FBQSxDQUFNSSxNQUFBLENBQU8vRCxJQUFBLENBQUt5RCxHQUFHO0lBQzVDLElBQUl2QixHQUFBLEVBQUs7TUFDUCxNQUFNRSxHQUFBLEdBQU1GLEdBQUEsQ0FBSSxDQUFDO01BQ2pCLE1BQU1LLElBQUEsR0FBT08sc0JBQUEsQ0FBdUJWLEdBQUEsRUFBS0YsR0FBQSxDQUFJLENBQUMsS0FBSyxFQUFFO01BRXJELE9BQU87UUFDTFMsSUFBQSxFQUFNO1FBQ05QLEdBQUE7UUFDQTRCLElBQUEsRUFBTTlCLEdBQUEsQ0FBSSxDQUFDLElBQUlBLEdBQUEsQ0FBSSxDQUFDLEVBQUVwQixJQUFBLENBQUssRUFBRW5ELE9BQUEsQ0FBUSxLQUFLK0YsS0FBQSxDQUFNTyxNQUFBLENBQU9DLFFBQUEsRUFBVSxJQUFJLElBQUloQyxHQUFBLENBQUksQ0FBQztRQUM5RUs7TUFDRjtJQUNGO0VBQ0Y7RUFFQTRCLFFBQVFWLEdBQUEsRUFBSztJQUNYLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTUMsS0FBQSxDQUFNUSxPQUFBLENBQVFuRSxJQUFBLENBQUt5RCxHQUFHO0lBQzdDLElBQUl2QixHQUFBLEVBQUs7TUFDUCxJQUFJSyxJQUFBLEdBQU9MLEdBQUEsQ0FBSSxDQUFDLEVBQUVwQixJQUFBLENBQUs7TUFHdkIsSUFBSSxLQUFLcEQsSUFBQSxDQUFLNkUsSUFBSSxHQUFHO1FBQ25CLE1BQU02QixPQUFBLEdBQVV2RSxLQUFBLENBQU0wQyxJQUFBLEVBQU0sR0FBRztRQUMvQixJQUFJLEtBQUt4SCxPQUFBLENBQVFxQixRQUFBLEVBQVU7VUFDekJtRyxJQUFBLEdBQU82QixPQUFBLENBQVF0RCxJQUFBLENBQUs7UUFDdEIsV0FBVyxDQUFDc0QsT0FBQSxJQUFXLEtBQUsxRyxJQUFBLENBQUswRyxPQUFPLEdBQUc7VUFFekM3QixJQUFBLEdBQU82QixPQUFBLENBQVF0RCxJQUFBLENBQUs7UUFDdEI7TUFDRjtNQUVBLE9BQU87UUFDTDZCLElBQUEsRUFBTTtRQUNOUCxHQUFBLEVBQUtGLEdBQUEsQ0FBSSxDQUFDO1FBQ1ZtQyxLQUFBLEVBQU9uQyxHQUFBLENBQUksQ0FBQyxFQUFFbEIsTUFBQTtRQUNkdUIsSUFBQTtRQUNBSyxNQUFBLEVBQVEsS0FBSy9ILEtBQUEsQ0FBTW9KLE1BQUEsQ0FBTzFCLElBQUk7TUFDaEM7SUFDRjtFQUNGO0VBRUErQixHQUFHYixHQUFBLEVBQUs7SUFDTixNQUFNdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1DLEtBQUEsQ0FBTVcsRUFBQSxDQUFHdEUsSUFBQSxDQUFLeUQsR0FBRztJQUN4QyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsT0FBTztRQUNMUyxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztNQUNaO0lBQ0Y7RUFDRjtFQUVBcUMsV0FBV2QsR0FBQSxFQUFLO0lBQ2QsTUFBTXZCLEdBQUEsR0FBTSxLQUFLd0IsS0FBQSxDQUFNQyxLQUFBLENBQU1ZLFVBQUEsQ0FBV3ZFLElBQUEsQ0FBS3lELEdBQUc7SUFDaEQsSUFBSXZCLEdBQUEsRUFBSztNQUNQLE1BQU1LLElBQUEsR0FBT0wsR0FBQSxDQUFJLENBQUMsRUFBRXZFLE9BQUEsQ0FBUSxnQkFBZ0IsRUFBRTtNQUM5QyxNQUFNNkcsR0FBQSxHQUFNLEtBQUszSixLQUFBLENBQU0ySCxLQUFBLENBQU1nQyxHQUFBO01BQzdCLEtBQUszSixLQUFBLENBQU0ySCxLQUFBLENBQU1nQyxHQUFBLEdBQU07TUFDdkIsTUFBTTVCLE1BQUEsR0FBUyxLQUFLL0gsS0FBQSxDQUFNNEosV0FBQSxDQUFZbEMsSUFBSTtNQUMxQyxLQUFLMUgsS0FBQSxDQUFNMkgsS0FBQSxDQUFNZ0MsR0FBQSxHQUFNQSxHQUFBO01BQ3ZCLE9BQU87UUFDTDdCLElBQUEsRUFBTTtRQUNOUCxHQUFBLEVBQUtGLEdBQUEsQ0FBSSxDQUFDO1FBQ1ZVLE1BQUE7UUFDQUw7TUFDRjtJQUNGO0VBQ0Y7RUFFQW1DLEtBQUtqQixHQUFBLEVBQUs7SUFDUixJQUFJdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1DLEtBQUEsQ0FBTWUsSUFBQSxDQUFLMUUsSUFBQSxDQUFLeUQsR0FBRztJQUN4QyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsSUFBSUUsR0FBQSxFQUFLdUMsTUFBQSxFQUFRQyxTQUFBLEVBQVdDLE1BQUEsRUFBUWhFLENBQUEsRUFBR2lFLFNBQUEsRUFBV0MsaUJBQUEsRUFDaERDLElBQUEsRUFBTUMsUUFBQSxFQUFVQyxPQUFBLEVBQVNDLFlBQUEsRUFBY0MsUUFBQTtNQUV6QyxJQUFJQyxJQUFBLEdBQU9uRCxHQUFBLENBQUksQ0FBQyxFQUFFcEIsSUFBQSxDQUFLO01BQ3ZCLE1BQU13RSxTQUFBLEdBQVlELElBQUEsQ0FBS3JFLE1BQUEsR0FBUztNQUVoQyxNQUFNMEQsSUFBQSxHQUFPO1FBQ1gvQixJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLO1FBQ0xtRCxPQUFBLEVBQVNELFNBQUE7UUFDVEUsS0FBQSxFQUFPRixTQUFBLEdBQVksQ0FBQ0QsSUFBQSxDQUFLNUQsS0FBQSxDQUFNLEdBQUcsRUFBRSxJQUFJO1FBQ3hDZ0UsS0FBQSxFQUFPO1FBQ1BDLEtBQUEsRUFBTztNQUNUO01BRUFMLElBQUEsR0FBT0MsU0FBQSxHQUFZLGFBQWFELElBQUEsQ0FBSzVELEtBQUEsQ0FBTSxFQUFFLENBQUMsS0FBSyxLQUFLNEQsSUFBSTtNQUU1RCxJQUFJLEtBQUt0SyxPQUFBLENBQVFxQixRQUFBLEVBQVU7UUFDekJpSixJQUFBLEdBQU9DLFNBQUEsR0FBWUQsSUFBQSxHQUFPO01BQzVCO01BR0EsTUFBTU0sU0FBQSxHQUFZLElBQUkzSSxNQUFBLENBQU8sV0FBV3FJLElBQUksOEJBQStCO01BRzNFLE9BQU81QixHQUFBLEVBQUs7UUFDVjJCLFFBQUEsR0FBVztRQUNYLElBQUksRUFBRWxELEdBQUEsR0FBTXlELFNBQUEsQ0FBVTNGLElBQUEsQ0FBS3lELEdBQUcsSUFBSTtVQUNoQztRQUNGO1FBRUEsSUFBSSxLQUFLQyxLQUFBLENBQU1DLEtBQUEsQ0FBTVcsRUFBQSxDQUFHNUcsSUFBQSxDQUFLK0YsR0FBRyxHQUFHO1VBQ2pDO1FBQ0Y7UUFFQXJCLEdBQUEsR0FBTUYsR0FBQSxDQUFJLENBQUM7UUFDWHVCLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVK0QsR0FBQSxDQUFJcEIsTUFBTTtRQUU5QmdFLElBQUEsR0FBTzlDLEdBQUEsQ0FBSSxDQUFDLEVBQUV0QixLQUFBLENBQU0sTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFakQsT0FBQSxDQUFRLFFBQVNpSSxDQUFBLElBQU0sSUFBSUMsTUFBQSxDQUFPLElBQUlELENBQUEsQ0FBRTVFLE1BQU0sQ0FBQztRQUMvRWlFLFFBQUEsR0FBV3hCLEdBQUEsQ0FBSTdDLEtBQUEsQ0FBTSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBRS9CLElBQUksS0FBSzdGLE9BQUEsQ0FBUXFCLFFBQUEsRUFBVTtVQUN6QnlJLE1BQUEsR0FBUztVQUNUTSxZQUFBLEdBQWVILElBQUEsQ0FBS2MsUUFBQSxDQUFTO1FBQy9CLE9BQU87VUFDTGpCLE1BQUEsR0FBUzNDLEdBQUEsQ0FBSSxDQUFDLEVBQUU2RCxNQUFBLENBQU8sTUFBTTtVQUM3QmxCLE1BQUEsR0FBU0EsTUFBQSxHQUFTLElBQUksSUFBSUEsTUFBQTtVQUMxQk0sWUFBQSxHQUFlSCxJQUFBLENBQUt2RCxLQUFBLENBQU1vRCxNQUFNO1VBQ2hDQSxNQUFBLElBQVUzQyxHQUFBLENBQUksQ0FBQyxFQUFFbEIsTUFBQTtRQUNuQjtRQUVBOEQsU0FBQSxHQUFZO1FBRVosSUFBSSxDQUFDRSxJQUFBLElBQVEsT0FBT3RILElBQUEsQ0FBS3VILFFBQVEsR0FBRztVQUNsQzdDLEdBQUEsSUFBTzZDLFFBQUEsR0FBVztVQUNsQnhCLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVNEcsUUFBQSxDQUFTakUsTUFBQSxHQUFTLENBQUM7VUFDdkNvRSxRQUFBLEdBQVc7UUFDYjtRQUVBLElBQUksQ0FBQ0EsUUFBQSxFQUFVO1VBQ2IsTUFBTVksZUFBQSxHQUFrQixJQUFJaEosTUFBQSxDQUFPLFFBQVFpSixJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHckIsTUFBQSxHQUFTLENBQUMsQ0FBQyxvREFBcUQ7VUFDdkgsTUFBTXNCLE9BQUEsR0FBVSxJQUFJbkosTUFBQSxDQUFPLFFBQVFpSixJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHckIsTUFBQSxHQUFTLENBQUMsQ0FBQyxvREFBb0Q7VUFDOUcsTUFBTXVCLGdCQUFBLEdBQW1CLElBQUlwSixNQUFBLENBQU8sUUFBUWlKLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUdyQixNQUFBLEdBQVMsQ0FBQyxDQUFDLGlCQUFpQjtVQUNwRixNQUFNd0IsaUJBQUEsR0FBb0IsSUFBSXJKLE1BQUEsQ0FBTyxRQUFRaUosSUFBQSxDQUFLQyxHQUFBLENBQUksR0FBR3JCLE1BQUEsR0FBUyxDQUFDLENBQUMsSUFBSTtVQUd4RSxPQUFPcEIsR0FBQSxFQUFLO1lBQ1Z5QixPQUFBLEdBQVV6QixHQUFBLENBQUk3QyxLQUFBLENBQU0sTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUM5QnFFLFFBQUEsR0FBV0MsT0FBQTtZQUdYLElBQUksS0FBS25LLE9BQUEsQ0FBUXFCLFFBQUEsRUFBVTtjQUN6QjZJLFFBQUEsR0FBV0EsUUFBQSxDQUFTdEgsT0FBQSxDQUFRLDJCQUEyQixJQUFJO1lBQzdEO1lBR0EsSUFBSXlJLGdCQUFBLENBQWlCMUksSUFBQSxDQUFLdUgsUUFBUSxHQUFHO2NBQ25DO1lBQ0Y7WUFHQSxJQUFJb0IsaUJBQUEsQ0FBa0IzSSxJQUFBLENBQUt1SCxRQUFRLEdBQUc7Y0FDcEM7WUFDRjtZQUdBLElBQUllLGVBQUEsQ0FBZ0J0SSxJQUFBLENBQUt1SCxRQUFRLEdBQUc7Y0FDbEM7WUFDRjtZQUdBLElBQUlrQixPQUFBLENBQVF6SSxJQUFBLENBQUsrRixHQUFHLEdBQUc7Y0FDckI7WUFDRjtZQUVBLElBQUl3QixRQUFBLENBQVNjLE1BQUEsQ0FBTyxNQUFNLEtBQUtsQixNQUFBLElBQVUsQ0FBQ0ksUUFBQSxDQUFTbkUsSUFBQSxDQUFLLEdBQUc7Y0FDekRxRSxZQUFBLElBQWdCLE9BQU9GLFFBQUEsQ0FBU3hELEtBQUEsQ0FBTW9ELE1BQU07WUFDOUMsT0FBTztjQUVMLElBQUlDLFNBQUEsRUFBVztnQkFDYjtjQUNGO2NBR0EsSUFBSUUsSUFBQSxDQUFLZSxNQUFBLENBQU8sTUFBTSxLQUFLLEdBQUc7Z0JBQzVCO2NBQ0Y7Y0FDQSxJQUFJSyxnQkFBQSxDQUFpQjFJLElBQUEsQ0FBS3NILElBQUksR0FBRztnQkFDL0I7Y0FDRjtjQUNBLElBQUlxQixpQkFBQSxDQUFrQjNJLElBQUEsQ0FBS3NILElBQUksR0FBRztnQkFDaEM7Y0FDRjtjQUNBLElBQUltQixPQUFBLENBQVF6SSxJQUFBLENBQUtzSCxJQUFJLEdBQUc7Z0JBQ3RCO2NBQ0Y7Y0FFQUcsWUFBQSxJQUFnQixPQUFPRixRQUFBO1lBQ3pCO1lBRUEsSUFBSSxDQUFDSCxTQUFBLElBQWEsQ0FBQ0csUUFBQSxDQUFTbkUsSUFBQSxDQUFLLEdBQUc7Y0FDbENnRSxTQUFBLEdBQVk7WUFDZDtZQUVBMUMsR0FBQSxJQUFPOEMsT0FBQSxHQUFVO1lBQ2pCekIsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVU2RyxPQUFBLENBQVFsRSxNQUFBLEdBQVMsQ0FBQztZQUN0Q2dFLElBQUEsR0FBT0MsUUFBQSxDQUFTeEQsS0FBQSxDQUFNb0QsTUFBTTtVQUM5QjtRQUNGO1FBRUEsSUFBSSxDQUFDSCxJQUFBLENBQUtlLEtBQUEsRUFBTztVQUVmLElBQUlWLGlCQUFBLEVBQW1CO1lBQ3JCTCxJQUFBLENBQUtlLEtBQUEsR0FBUTtVQUNmLFdBQVcsWUFBWS9ILElBQUEsQ0FBSzBFLEdBQUcsR0FBRztZQUNoQzJDLGlCQUFBLEdBQW9CO1VBQ3RCO1FBQ0Y7UUFHQSxJQUFJLEtBQUtoSyxPQUFBLENBQVFjLEdBQUEsRUFBSztVQUNwQjhJLE1BQUEsR0FBUyxjQUFjM0UsSUFBQSxDQUFLbUYsWUFBWTtVQUN4QyxJQUFJUixNQUFBLEVBQVE7WUFDVkMsU0FBQSxHQUFZRCxNQUFBLENBQU8sQ0FBQyxNQUFNO1lBQzFCUSxZQUFBLEdBQWVBLFlBQUEsQ0FBYXhILE9BQUEsQ0FBUSxnQkFBZ0IsRUFBRTtVQUN4RDtRQUNGO1FBRUErRyxJQUFBLENBQUtnQixLQUFBLENBQU12RSxJQUFBLENBQUs7VUFDZHdCLElBQUEsRUFBTTtVQUNOUCxHQUFBO1VBQ0FrRSxJQUFBLEVBQU0sQ0FBQyxDQUFDM0IsTUFBQTtVQUNSNEIsT0FBQSxFQUFTM0IsU0FBQTtVQUNUYSxLQUFBLEVBQU87VUFDUGxELElBQUEsRUFBTTRDO1FBQ1IsQ0FBQztRQUVEVCxJQUFBLENBQUt0QyxHQUFBLElBQU9BLEdBQUE7TUFDZDtNQUdBc0MsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNaEIsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNMUUsTUFBQSxHQUFTLENBQUMsRUFBRW9CLEdBQUEsR0FBTUEsR0FBQSxDQUFJb0UsU0FBQSxDQUFVO01BQ3REOUIsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNaEIsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNMUUsTUFBQSxHQUFTLENBQUMsRUFBRXVCLElBQUEsR0FBTzRDLFlBQUEsQ0FBYXFCLFNBQUEsQ0FBVTtNQUNoRTlCLElBQUEsQ0FBS3RDLEdBQUEsR0FBTXNDLElBQUEsQ0FBS3RDLEdBQUEsQ0FBSW9FLFNBQUEsQ0FBVTtNQUU5QixNQUFNbEYsQ0FBQSxHQUFJb0QsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNMUUsTUFBQTtNQUdyQixLQUFLSCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJUyxDQUFBLEVBQUdULENBQUEsSUFBSztRQUN0QixLQUFLaEcsS0FBQSxDQUFNMkgsS0FBQSxDQUFNZ0MsR0FBQSxHQUFNO1FBQ3ZCRSxJQUFBLENBQUtnQixLQUFBLENBQU03RSxDQUFDLEVBQUUrQixNQUFBLEdBQVMsS0FBSy9ILEtBQUEsQ0FBTTRKLFdBQUEsQ0FBWUMsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNN0UsQ0FBQyxFQUFFMEIsSUFBQSxFQUFNLEVBQUU7UUFFcEUsSUFBSSxDQUFDbUMsSUFBQSxDQUFLZSxLQUFBLEVBQU87VUFFZixNQUFNZ0IsT0FBQSxHQUFVL0IsSUFBQSxDQUFLZ0IsS0FBQSxDQUFNN0UsQ0FBQyxFQUFFK0IsTUFBQSxDQUFPOEQsTUFBQSxDQUFPZCxDQUFBLElBQUtBLENBQUEsQ0FBRWpELElBQUEsS0FBUyxPQUFPO1VBQ25FLE1BQU1nRSxxQkFBQSxHQUF3QkYsT0FBQSxDQUFRekYsTUFBQSxHQUFTLEtBQUt5RixPQUFBLENBQVFHLElBQUEsQ0FBS2hCLENBQUEsSUFBSyxTQUFTbEksSUFBQSxDQUFLa0ksQ0FBQSxDQUFFeEQsR0FBRyxDQUFDO1VBRTFGc0MsSUFBQSxDQUFLZSxLQUFBLEdBQVFrQixxQkFBQTtRQUNmO01BQ0Y7TUFHQSxJQUFJakMsSUFBQSxDQUFLZSxLQUFBLEVBQU87UUFDZCxLQUFLNUUsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSVMsQ0FBQSxFQUFHVCxDQUFBLElBQUs7VUFDdEI2RCxJQUFBLENBQUtnQixLQUFBLENBQU03RSxDQUFDLEVBQUU0RSxLQUFBLEdBQVE7UUFDeEI7TUFDRjtNQUVBLE9BQU9mLElBQUE7SUFDVDtFQUNGO0VBRUFsSCxLQUFLaUcsR0FBQSxFQUFLO0lBQ1IsTUFBTXZCLEdBQUEsR0FBTSxLQUFLd0IsS0FBQSxDQUFNQyxLQUFBLENBQU1uRyxJQUFBLENBQUt3QyxJQUFBLENBQUt5RCxHQUFHO0lBQzFDLElBQUl2QixHQUFBLEVBQUs7TUFDUCxNQUFNUSxLQUFBLEdBQVE7UUFDWkMsSUFBQSxFQUFNO1FBQ05nQixLQUFBLEVBQU87UUFDUHZCLEdBQUEsRUFBS0YsR0FBQSxDQUFJLENBQUM7UUFDVjJFLEdBQUEsRUFBSyxDQUFDLEtBQUs5TCxPQUFBLENBQVF3QixTQUFBLEtBQ2IyRixHQUFBLENBQUksQ0FBQyxNQUFNLFNBQVNBLEdBQUEsQ0FBSSxDQUFDLE1BQU0sWUFBWUEsR0FBQSxDQUFJLENBQUMsTUFBTTtRQUM1REssSUFBQSxFQUFNTCxHQUFBLENBQUksQ0FBQztNQUNiO01BQ0EsSUFBSSxLQUFLbkgsT0FBQSxDQUFRdUIsUUFBQSxFQUFVO1FBQ3pCLE1BQU1pRyxJQUFBLEdBQU8sS0FBS3hILE9BQUEsQ0FBUXdCLFNBQUEsR0FBWSxLQUFLeEIsT0FBQSxDQUFRd0IsU0FBQSxDQUFVMkYsR0FBQSxDQUFJLENBQUMsQ0FBQyxJQUFJM0UsTUFBQSxDQUFPMkUsR0FBQSxDQUFJLENBQUMsQ0FBQztRQUNwRlEsS0FBQSxDQUFNQyxJQUFBLEdBQU87UUFDYkQsS0FBQSxDQUFNSCxJQUFBLEdBQU9BLElBQUE7UUFDYkcsS0FBQSxDQUFNRSxNQUFBLEdBQVMsS0FBSy9ILEtBQUEsQ0FBTW9KLE1BQUEsQ0FBTzFCLElBQUk7TUFDdkM7TUFDQSxPQUFPRyxLQUFBO0lBQ1Q7RUFDRjtFQUVBb0UsSUFBSXJELEdBQUEsRUFBSztJQUNQLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTUMsS0FBQSxDQUFNbUQsR0FBQSxDQUFJOUcsSUFBQSxDQUFLeUQsR0FBRztJQUN6QyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsTUFBTTZFLEdBQUEsR0FBTTdFLEdBQUEsQ0FBSSxDQUFDLEVBQUVsRSxXQUFBLENBQVksRUFBRUwsT0FBQSxDQUFRLFFBQVEsR0FBRztNQUNwRCxNQUFNdUIsSUFBQSxHQUFPZ0QsR0FBQSxDQUFJLENBQUMsSUFBSUEsR0FBQSxDQUFJLENBQUMsRUFBRXZFLE9BQUEsQ0FBUSxZQUFZLElBQUksRUFBRUEsT0FBQSxDQUFRLEtBQUsrRixLQUFBLENBQU1PLE1BQUEsQ0FBT0MsUUFBQSxFQUFVLElBQUksSUFBSTtNQUNuRyxNQUFNNUIsS0FBQSxHQUFRSixHQUFBLENBQUksQ0FBQyxJQUFJQSxHQUFBLENBQUksQ0FBQyxFQUFFN0QsU0FBQSxDQUFVLEdBQUc2RCxHQUFBLENBQUksQ0FBQyxFQUFFbEIsTUFBQSxHQUFTLENBQUMsRUFBRXJELE9BQUEsQ0FBUSxLQUFLK0YsS0FBQSxDQUFNTyxNQUFBLENBQU9DLFFBQUEsRUFBVSxJQUFJLElBQUloQyxHQUFBLENBQUksQ0FBQztNQUMvRyxPQUFPO1FBQ0xTLElBQUEsRUFBTTtRQUNOb0UsR0FBQTtRQUNBM0UsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztRQUNWaEQsSUFBQTtRQUNBb0Q7TUFDRjtJQUNGO0VBQ0Y7RUFFQTBFLE1BQU12RCxHQUFBLEVBQUs7SUFDVCxNQUFNdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1DLEtBQUEsQ0FBTXFELEtBQUEsQ0FBTWhILElBQUEsQ0FBS3lELEdBQUc7SUFDM0MsSUFBSXZCLEdBQUEsRUFBSztNQUNQLE1BQU0rRSxJQUFBLEdBQU87UUFDWHRFLElBQUEsRUFBTTtRQUNOdUUsTUFBQSxFQUFRaEgsVUFBQSxDQUFXZ0MsR0FBQSxDQUFJLENBQUMsQ0FBQyxFQUFFZSxHQUFBLENBQUk3QixDQUFBLElBQUs7VUFBRSxPQUFPO1lBQUVtQixJQUFBLEVBQU1uQjtVQUFFO1FBQUcsQ0FBQztRQUMzRCtGLEtBQUEsRUFBT2pGLEdBQUEsQ0FBSSxDQUFDLEVBQUV2RSxPQUFBLENBQVEsY0FBYyxFQUFFLEVBQUVpRCxLQUFBLENBQU0sUUFBUTtRQUN0RHdHLElBQUEsRUFBTWxGLEdBQUEsQ0FBSSxDQUFDLEtBQUtBLEdBQUEsQ0FBSSxDQUFDLEVBQUVwQixJQUFBLENBQUssSUFBSW9CLEdBQUEsQ0FBSSxDQUFDLEVBQUV2RSxPQUFBLENBQVEsYUFBYSxFQUFFLEVBQUVpRCxLQUFBLENBQU0sSUFBSSxJQUFJO01BQ2hGO01BRUEsSUFBSXFHLElBQUEsQ0FBS0MsTUFBQSxDQUFPbEcsTUFBQSxLQUFXaUcsSUFBQSxDQUFLRSxLQUFBLENBQU1uRyxNQUFBLEVBQVE7UUFDNUNpRyxJQUFBLENBQUs3RSxHQUFBLEdBQU1GLEdBQUEsQ0FBSSxDQUFDO1FBRWhCLElBQUlaLENBQUEsR0FBSTJGLElBQUEsQ0FBS0UsS0FBQSxDQUFNbkcsTUFBQTtRQUNuQixJQUFJSCxDQUFBLEVBQUd3RyxDQUFBLEVBQUdDLENBQUEsRUFBR2pILEdBQUE7UUFDYixLQUFLUSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJUyxDQUFBLEVBQUdULENBQUEsSUFBSztVQUN0QixJQUFJLFlBQVluRCxJQUFBLENBQUt1SixJQUFBLENBQUtFLEtBQUEsQ0FBTXRHLENBQUMsQ0FBQyxHQUFHO1lBQ25Db0csSUFBQSxDQUFLRSxLQUFBLENBQU10RyxDQUFDLElBQUk7VUFDbEIsV0FBVyxhQUFhbkQsSUFBQSxDQUFLdUosSUFBQSxDQUFLRSxLQUFBLENBQU10RyxDQUFDLENBQUMsR0FBRztZQUMzQ29HLElBQUEsQ0FBS0UsS0FBQSxDQUFNdEcsQ0FBQyxJQUFJO1VBQ2xCLFdBQVcsWUFBWW5ELElBQUEsQ0FBS3VKLElBQUEsQ0FBS0UsS0FBQSxDQUFNdEcsQ0FBQyxDQUFDLEdBQUc7WUFDMUNvRyxJQUFBLENBQUtFLEtBQUEsQ0FBTXRHLENBQUMsSUFBSTtVQUNsQixPQUFPO1lBQ0xvRyxJQUFBLENBQUtFLEtBQUEsQ0FBTXRHLENBQUMsSUFBSTtVQUNsQjtRQUNGO1FBRUFTLENBQUEsR0FBSTJGLElBQUEsQ0FBS0csSUFBQSxDQUFLcEcsTUFBQTtRQUNkLEtBQUtILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBR1QsQ0FBQSxJQUFLO1VBQ3RCb0csSUFBQSxDQUFLRyxJQUFBLENBQUt2RyxDQUFDLElBQUlYLFVBQUEsQ0FBVytHLElBQUEsQ0FBS0csSUFBQSxDQUFLdkcsQ0FBQyxHQUFHb0csSUFBQSxDQUFLQyxNQUFBLENBQU9sRyxNQUFNLEVBQUVpQyxHQUFBLENBQUk3QixDQUFBLElBQUs7WUFBRSxPQUFPO2NBQUVtQixJQUFBLEVBQU1uQjtZQUFFO1VBQUcsQ0FBQztRQUM5RjtRQUtBRSxDQUFBLEdBQUkyRixJQUFBLENBQUtDLE1BQUEsQ0FBT2xHLE1BQUE7UUFDaEIsS0FBS3FHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkvRixDQUFBLEVBQUcrRixDQUFBLElBQUs7VUFDdEJKLElBQUEsQ0FBS0MsTUFBQSxDQUFPRyxDQUFDLEVBQUV6RSxNQUFBLEdBQVMsS0FBSy9ILEtBQUEsQ0FBTW9KLE1BQUEsQ0FBT2dELElBQUEsQ0FBS0MsTUFBQSxDQUFPRyxDQUFDLEVBQUU5RSxJQUFJO1FBQy9EO1FBR0FqQixDQUFBLEdBQUkyRixJQUFBLENBQUtHLElBQUEsQ0FBS3BHLE1BQUE7UUFDZCxLQUFLcUcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSS9GLENBQUEsRUFBRytGLENBQUEsSUFBSztVQUN0QmhILEdBQUEsR0FBTTRHLElBQUEsQ0FBS0csSUFBQSxDQUFLQyxDQUFDO1VBQ2pCLEtBQUtDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlqSCxHQUFBLENBQUlXLE1BQUEsRUFBUXNHLENBQUEsSUFBSztZQUMvQmpILEdBQUEsQ0FBSWlILENBQUMsRUFBRTFFLE1BQUEsR0FBUyxLQUFLL0gsS0FBQSxDQUFNb0osTUFBQSxDQUFPNUQsR0FBQSxDQUFJaUgsQ0FBQyxFQUFFL0UsSUFBSTtVQUMvQztRQUNGO1FBRUEsT0FBTzBFLElBQUE7TUFDVDtJQUNGO0VBQ0Y7RUFFQU0sU0FBUzlELEdBQUEsRUFBSztJQUNaLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTUMsS0FBQSxDQUFNNEQsUUFBQSxDQUFTdkgsSUFBQSxDQUFLeUQsR0FBRztJQUM5QyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsT0FBTztRQUNMUyxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztRQUNWbUMsS0FBQSxFQUFPbkMsR0FBQSxDQUFJLENBQUMsRUFBRWpFLE1BQUEsQ0FBTyxDQUFDLE1BQU0sTUFBTSxJQUFJO1FBQ3RDc0UsSUFBQSxFQUFNTCxHQUFBLENBQUksQ0FBQztRQUNYVSxNQUFBLEVBQVEsS0FBSy9ILEtBQUEsQ0FBTW9KLE1BQUEsQ0FBTy9CLEdBQUEsQ0FBSSxDQUFDLENBQUM7TUFDbEM7SUFDRjtFQUNGO0VBRUFzRixVQUFVL0QsR0FBQSxFQUFLO0lBQ2IsTUFBTXZCLEdBQUEsR0FBTSxLQUFLd0IsS0FBQSxDQUFNQyxLQUFBLENBQU02RCxTQUFBLENBQVV4SCxJQUFBLENBQUt5RCxHQUFHO0lBQy9DLElBQUl2QixHQUFBLEVBQUs7TUFDUCxNQUFNSyxJQUFBLEdBQU9MLEdBQUEsQ0FBSSxDQUFDLEVBQUVqRSxNQUFBLENBQU9pRSxHQUFBLENBQUksQ0FBQyxFQUFFbEIsTUFBQSxHQUFTLENBQUMsTUFBTSxPQUM5Q2tCLEdBQUEsQ0FBSSxDQUFDLEVBQUVULEtBQUEsQ0FBTSxHQUFHLEVBQUUsSUFDbEJTLEdBQUEsQ0FBSSxDQUFDO01BQ1QsT0FBTztRQUNMUyxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztRQUNWSyxJQUFBO1FBQ0FLLE1BQUEsRUFBUSxLQUFLL0gsS0FBQSxDQUFNb0osTUFBQSxDQUFPMUIsSUFBSTtNQUNoQztJQUNGO0VBQ0Y7RUFFQUEsS0FBS2tCLEdBQUEsRUFBSztJQUNSLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTUMsS0FBQSxDQUFNcEIsSUFBQSxDQUFLdkMsSUFBQSxDQUFLeUQsR0FBRztJQUMxQyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsT0FBTztRQUNMUyxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztRQUNWSyxJQUFBLEVBQU1MLEdBQUEsQ0FBSSxDQUFDO1FBQ1hVLE1BQUEsRUFBUSxLQUFLL0gsS0FBQSxDQUFNb0osTUFBQSxDQUFPL0IsR0FBQSxDQUFJLENBQUMsQ0FBQztNQUNsQztJQUNGO0VBQ0Y7RUFFQTNFLE9BQU9rRyxHQUFBLEVBQUs7SUFDVixNQUFNdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1PLE1BQUEsQ0FBTzFHLE1BQUEsQ0FBT3lDLElBQUEsQ0FBS3lELEdBQUc7SUFDN0MsSUFBSXZCLEdBQUEsRUFBSztNQUNQLE9BQU87UUFDTFMsSUFBQSxFQUFNO1FBQ05QLEdBQUEsRUFBS0YsR0FBQSxDQUFJLENBQUM7UUFDVkssSUFBQSxFQUFNaEYsTUFBQSxDQUFPMkUsR0FBQSxDQUFJLENBQUMsQ0FBQztNQUNyQjtJQUNGO0VBQ0Y7RUFFQTZFLElBQUl0RCxHQUFBLEVBQUs7SUFDUCxNQUFNdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1PLE1BQUEsQ0FBTzhDLEdBQUEsQ0FBSS9HLElBQUEsQ0FBS3lELEdBQUc7SUFDMUMsSUFBSXZCLEdBQUEsRUFBSztNQUNQLElBQUksQ0FBQyxLQUFLckgsS0FBQSxDQUFNMkgsS0FBQSxDQUFNQyxNQUFBLElBQVUsUUFBUS9FLElBQUEsQ0FBS3dFLEdBQUEsQ0FBSSxDQUFDLENBQUMsR0FBRztRQUNwRCxLQUFLckgsS0FBQSxDQUFNMkgsS0FBQSxDQUFNQyxNQUFBLEdBQVM7TUFDNUIsV0FBVyxLQUFLNUgsS0FBQSxDQUFNMkgsS0FBQSxDQUFNQyxNQUFBLElBQVUsVUFBVS9FLElBQUEsQ0FBS3dFLEdBQUEsQ0FBSSxDQUFDLENBQUMsR0FBRztRQUM1RCxLQUFLckgsS0FBQSxDQUFNMkgsS0FBQSxDQUFNQyxNQUFBLEdBQVM7TUFDNUI7TUFDQSxJQUFJLENBQUMsS0FBSzVILEtBQUEsQ0FBTTJILEtBQUEsQ0FBTWlGLFVBQUEsSUFBYyxpQ0FBaUMvSixJQUFBLENBQUt3RSxHQUFBLENBQUksQ0FBQyxDQUFDLEdBQUc7UUFDakYsS0FBS3JILEtBQUEsQ0FBTTJILEtBQUEsQ0FBTWlGLFVBQUEsR0FBYTtNQUNoQyxXQUFXLEtBQUs1TSxLQUFBLENBQU0ySCxLQUFBLENBQU1pRixVQUFBLElBQWMsbUNBQW1DL0osSUFBQSxDQUFLd0UsR0FBQSxDQUFJLENBQUMsQ0FBQyxHQUFHO1FBQ3pGLEtBQUtySCxLQUFBLENBQU0ySCxLQUFBLENBQU1pRixVQUFBLEdBQWE7TUFDaEM7TUFFQSxPQUFPO1FBQ0w5RSxJQUFBLEVBQU0sS0FBSzVILE9BQUEsQ0FBUXVCLFFBQUEsR0FDZixTQUNBO1FBQ0o4RixHQUFBLEVBQUtGLEdBQUEsQ0FBSSxDQUFDO1FBQ1ZPLE1BQUEsRUFBUSxLQUFLNUgsS0FBQSxDQUFNMkgsS0FBQSxDQUFNQyxNQUFBO1FBQ3pCZ0YsVUFBQSxFQUFZLEtBQUs1TSxLQUFBLENBQU0ySCxLQUFBLENBQU1pRixVQUFBO1FBQzdCOUQsS0FBQSxFQUFPO1FBQ1BwQixJQUFBLEVBQU0sS0FBS3hILE9BQUEsQ0FBUXVCLFFBQUEsR0FDZCxLQUFLdkIsT0FBQSxDQUFRd0IsU0FBQSxHQUNaLEtBQUt4QixPQUFBLENBQVF3QixTQUFBLENBQVUyRixHQUFBLENBQUksQ0FBQyxDQUFDLElBQzdCM0UsTUFBQSxDQUFPMkUsR0FBQSxDQUFJLENBQUMsQ0FBQyxJQUNmQSxHQUFBLENBQUksQ0FBQztNQUNYO0lBQ0Y7RUFDRjtFQUVBQyxLQUFLc0IsR0FBQSxFQUFLO0lBQ1IsTUFBTXZCLEdBQUEsR0FBTSxLQUFLd0IsS0FBQSxDQUFNTyxNQUFBLENBQU85QixJQUFBLENBQUtuQyxJQUFBLENBQUt5RCxHQUFHO0lBQzNDLElBQUl2QixHQUFBLEVBQUs7TUFDUCxNQUFNd0YsVUFBQSxHQUFheEYsR0FBQSxDQUFJLENBQUMsRUFBRXBCLElBQUEsQ0FBSztNQUMvQixJQUFJLENBQUMsS0FBSy9GLE9BQUEsQ0FBUXFCLFFBQUEsSUFBWSxLQUFLc0IsSUFBQSxDQUFLZ0ssVUFBVSxHQUFHO1FBRW5ELElBQUksQ0FBRSxLQUFLaEssSUFBQSxDQUFLZ0ssVUFBVSxHQUFJO1VBQzVCO1FBQ0Y7UUFHQSxNQUFNQyxVQUFBLEdBQWE5SCxLQUFBLENBQU02SCxVQUFBLENBQVdqRyxLQUFBLENBQU0sR0FBRyxFQUFFLEdBQUcsSUFBSTtRQUN0RCxLQUFLaUcsVUFBQSxDQUFXMUcsTUFBQSxHQUFTMkcsVUFBQSxDQUFXM0csTUFBQSxJQUFVLE1BQU0sR0FBRztVQUNyRDtRQUNGO01BQ0YsT0FBTztRQUVMLE1BQU00RyxjQUFBLEdBQWlCbEcsa0JBQUEsQ0FBbUJRLEdBQUEsQ0FBSSxDQUFDLEdBQUcsSUFBSTtRQUN0RCxJQUFJMEYsY0FBQSxHQUFpQixJQUFJO1VBQ3ZCLE1BQU1wQyxLQUFBLEdBQVF0RCxHQUFBLENBQUksQ0FBQyxFQUFFNUMsT0FBQSxDQUFRLEdBQUcsTUFBTSxJQUFJLElBQUk7VUFDOUMsTUFBTXVJLE9BQUEsR0FBVXJDLEtBQUEsR0FBUXRELEdBQUEsQ0FBSSxDQUFDLEVBQUVsQixNQUFBLEdBQVM0RyxjQUFBO1VBQ3hDMUYsR0FBQSxDQUFJLENBQUMsSUFBSUEsR0FBQSxDQUFJLENBQUMsRUFBRTdELFNBQUEsQ0FBVSxHQUFHdUosY0FBYztVQUMzQzFGLEdBQUEsQ0FBSSxDQUFDLElBQUlBLEdBQUEsQ0FBSSxDQUFDLEVBQUU3RCxTQUFBLENBQVUsR0FBR3dKLE9BQU8sRUFBRS9HLElBQUEsQ0FBSztVQUMzQ29CLEdBQUEsQ0FBSSxDQUFDLElBQUk7UUFDWDtNQUNGO01BQ0EsSUFBSWhELElBQUEsR0FBT2dELEdBQUEsQ0FBSSxDQUFDO01BQ2hCLElBQUlJLEtBQUEsR0FBUTtNQUNaLElBQUksS0FBS3ZILE9BQUEsQ0FBUXFCLFFBQUEsRUFBVTtRQUV6QixNQUFNK0YsSUFBQSxHQUFPLGdDQUFnQ25DLElBQUEsQ0FBS2QsSUFBSTtRQUV0RCxJQUFJaUQsSUFBQSxFQUFNO1VBQ1JqRCxJQUFBLEdBQU9pRCxJQUFBLENBQUssQ0FBQztVQUNiRyxLQUFBLEdBQVFILElBQUEsQ0FBSyxDQUFDO1FBQ2hCO01BQ0YsT0FBTztRQUNMRyxLQUFBLEdBQVFKLEdBQUEsQ0FBSSxDQUFDLElBQUlBLEdBQUEsQ0FBSSxDQUFDLEVBQUVULEtBQUEsQ0FBTSxHQUFHLEVBQUUsSUFBSTtNQUN6QztNQUVBdkMsSUFBQSxHQUFPQSxJQUFBLENBQUs0QixJQUFBLENBQUs7TUFDakIsSUFBSSxLQUFLcEQsSUFBQSxDQUFLd0IsSUFBSSxHQUFHO1FBQ25CLElBQUksS0FBS25FLE9BQUEsQ0FBUXFCLFFBQUEsSUFBWSxDQUFFLEtBQUtzQixJQUFBLENBQUtnSyxVQUFVLEdBQUk7VUFFckR4SSxJQUFBLEdBQU9BLElBQUEsQ0FBS3VDLEtBQUEsQ0FBTSxDQUFDO1FBQ3JCLE9BQU87VUFDTHZDLElBQUEsR0FBT0EsSUFBQSxDQUFLdUMsS0FBQSxDQUFNLEdBQUcsRUFBRTtRQUN6QjtNQUNGO01BQ0EsT0FBT1EsVUFBQSxDQUFXQyxHQUFBLEVBQUs7UUFDckJoRCxJQUFBLEVBQU1BLElBQUEsR0FBT0EsSUFBQSxDQUFLdkIsT0FBQSxDQUFRLEtBQUsrRixLQUFBLENBQU1PLE1BQUEsQ0FBT0MsUUFBQSxFQUFVLElBQUksSUFBSWhGLElBQUE7UUFDOURvRCxLQUFBLEVBQU9BLEtBQUEsR0FBUUEsS0FBQSxDQUFNM0UsT0FBQSxDQUFRLEtBQUsrRixLQUFBLENBQU1PLE1BQUEsQ0FBT0MsUUFBQSxFQUFVLElBQUksSUFBSTVCO01BQ25FLEdBQUdKLEdBQUEsQ0FBSSxDQUFDLEdBQUcsS0FBS3JILEtBQUs7SUFDdkI7RUFDRjtFQUVBaU4sUUFBUXJFLEdBQUEsRUFBS3NFLEtBQUEsRUFBTztJQUNsQixJQUFJN0YsR0FBQTtJQUNKLEtBQUtBLEdBQUEsR0FBTSxLQUFLd0IsS0FBQSxDQUFNTyxNQUFBLENBQU82RCxPQUFBLENBQVE5SCxJQUFBLENBQUt5RCxHQUFHLE9BQ3JDdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1PLE1BQUEsQ0FBTytELE1BQUEsQ0FBT2hJLElBQUEsQ0FBS3lELEdBQUcsSUFBSTtNQUNqRCxJQUFJdEIsSUFBQSxJQUFRRCxHQUFBLENBQUksQ0FBQyxLQUFLQSxHQUFBLENBQUksQ0FBQyxHQUFHdkUsT0FBQSxDQUFRLFFBQVEsR0FBRztNQUNqRHdFLElBQUEsR0FBTzRGLEtBQUEsQ0FBTTVGLElBQUEsQ0FBS25FLFdBQUEsQ0FBWSxDQUFDO01BQy9CLElBQUksQ0FBQ21FLElBQUEsRUFBTTtRQUNULE1BQU1JLElBQUEsR0FBT0wsR0FBQSxDQUFJLENBQUMsRUFBRWpFLE1BQUEsQ0FBTyxDQUFDO1FBQzVCLE9BQU87VUFDTDBFLElBQUEsRUFBTTtVQUNOUCxHQUFBLEVBQUtHLElBQUE7VUFDTEE7UUFDRjtNQUNGO01BQ0EsT0FBT04sVUFBQSxDQUFXQyxHQUFBLEVBQUtDLElBQUEsRUFBTUQsR0FBQSxDQUFJLENBQUMsR0FBRyxLQUFLckgsS0FBSztJQUNqRDtFQUNGO0VBRUFvTixTQUFTeEUsR0FBQSxFQUFLeUUsU0FBQSxFQUFXQyxRQUFBLEdBQVcsSUFBSTtJQUN0QyxJQUFJN0gsS0FBQSxHQUFRLEtBQUtvRCxLQUFBLENBQU1PLE1BQUEsQ0FBT2dFLFFBQUEsQ0FBU0csTUFBQSxDQUFPcEksSUFBQSxDQUFLeUQsR0FBRztJQUN0RCxJQUFJLENBQUNuRCxLQUFBLEVBQU87SUFHWixJQUFJQSxLQUFBLENBQU0sQ0FBQyxLQUFLNkgsUUFBQSxDQUFTN0gsS0FBQSxDQUFNLGVBQWUsR0FBRztJQUVqRCxNQUFNK0gsUUFBQSxHQUFXL0gsS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUMsS0FBSztJQUV6QyxJQUFJLENBQUMrSCxRQUFBLElBQVksQ0FBQ0YsUUFBQSxJQUFZLEtBQUt6RSxLQUFBLENBQU1PLE1BQUEsQ0FBT3FFLFdBQUEsQ0FBWXRJLElBQUEsQ0FBS21JLFFBQVEsR0FBRztNQUMxRSxNQUFNSSxPQUFBLEdBQVVqSSxLQUFBLENBQU0sQ0FBQyxFQUFFVSxNQUFBLEdBQVM7TUFDbEMsSUFBSXdILE1BQUE7UUFBUUMsT0FBQTtRQUFTQyxVQUFBLEdBQWFILE9BQUE7UUFBU0ksYUFBQSxHQUFnQjtNQUUzRCxNQUFNQyxNQUFBLEdBQVN0SSxLQUFBLENBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxNQUFNLEtBQUtvRCxLQUFBLENBQU1PLE1BQUEsQ0FBT2dFLFFBQUEsQ0FBU1ksU0FBQSxHQUFZLEtBQUtuRixLQUFBLENBQU1PLE1BQUEsQ0FBT2dFLFFBQUEsQ0FBU2EsU0FBQTtNQUN2R0YsTUFBQSxDQUFPRyxTQUFBLEdBQVk7TUFHbkJiLFNBQUEsR0FBWUEsU0FBQSxDQUFVekcsS0FBQSxDQUFNLEtBQUtnQyxHQUFBLENBQUl6QyxNQUFBLEdBQVN1SCxPQUFPO01BRXJELFFBQVFqSSxLQUFBLEdBQVFzSSxNQUFBLENBQU81SSxJQUFBLENBQUtrSSxTQUFTLE1BQU0sTUFBTTtRQUMvQ00sTUFBQSxHQUFTbEksS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUM7UUFFNUUsSUFBSSxDQUFDa0ksTUFBQSxFQUFRO1FBRWJDLE9BQUEsR0FBVUQsTUFBQSxDQUFPeEgsTUFBQTtRQUVqQixJQUFJVixLQUFBLENBQU0sQ0FBQyxLQUFLQSxLQUFBLENBQU0sQ0FBQyxHQUFHO1VBQ3hCb0ksVUFBQSxJQUFjRCxPQUFBO1VBQ2Q7UUFDRixXQUFXbkksS0FBQSxDQUFNLENBQUMsS0FBS0EsS0FBQSxDQUFNLENBQUMsR0FBRztVQUMvQixJQUFJaUksT0FBQSxHQUFVLEtBQUssR0FBR0EsT0FBQSxHQUFVRSxPQUFBLElBQVcsSUFBSTtZQUM3Q0UsYUFBQSxJQUFpQkYsT0FBQTtZQUNqQjtVQUNGO1FBQ0Y7UUFFQUMsVUFBQSxJQUFjRCxPQUFBO1FBRWQsSUFBSUMsVUFBQSxHQUFhLEdBQUc7UUFHcEJELE9BQUEsR0FBVXhDLElBQUEsQ0FBS0MsR0FBQSxDQUFJdUMsT0FBQSxFQUFTQSxPQUFBLEdBQVVDLFVBQUEsR0FBYUMsYUFBYTtRQUVoRSxNQUFNdkcsR0FBQSxHQUFNcUIsR0FBQSxDQUFJaEMsS0FBQSxDQUFNLEdBQUc4RyxPQUFBLEdBQVVqSSxLQUFBLENBQU0wSSxLQUFBLEdBQVFQLE9BQUEsR0FBVSxDQUFDO1FBRzVELElBQUl4QyxJQUFBLENBQUtDLEdBQUEsQ0FBSXFDLE9BQUEsRUFBU0UsT0FBTyxJQUFJLEdBQUc7VUFDbEMsTUFBTVEsS0FBQSxHQUFPN0csR0FBQSxDQUFJWCxLQUFBLENBQU0sR0FBRyxFQUFFO1VBQzVCLE9BQU87WUFDTGtCLElBQUEsRUFBTTtZQUNOUCxHQUFBO1lBQ0FHLElBQUEsRUFBQTBHLEtBQUE7WUFDQXJHLE1BQUEsRUFBUSxLQUFLL0gsS0FBQSxDQUFNZ0ksWUFBQSxDQUFhb0csS0FBSTtVQUN0QztRQUNGO1FBR0EsTUFBTTFHLElBQUEsR0FBT0gsR0FBQSxDQUFJWCxLQUFBLENBQU0sR0FBRyxFQUFFO1FBQzVCLE9BQU87VUFDTGtCLElBQUEsRUFBTTtVQUNOUCxHQUFBO1VBQ0FHLElBQUE7VUFDQUssTUFBQSxFQUFRLEtBQUsvSCxLQUFBLENBQU1nSSxZQUFBLENBQWFOLElBQUk7UUFDdEM7TUFDRjtJQUNGO0VBQ0Y7RUFFQTJHLFNBQVN6RixHQUFBLEVBQUs7SUFDWixNQUFNdkIsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1PLE1BQUEsQ0FBT0osSUFBQSxDQUFLN0QsSUFBQSxDQUFLeUQsR0FBRztJQUMzQyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsSUFBSUssSUFBQSxHQUFPTCxHQUFBLENBQUksQ0FBQyxFQUFFdkUsT0FBQSxDQUFRLE9BQU8sR0FBRztNQUNwQyxNQUFNd0wsZ0JBQUEsR0FBbUIsT0FBT3pMLElBQUEsQ0FBSzZFLElBQUk7TUFDekMsTUFBTTZHLHVCQUFBLEdBQTBCLEtBQUsxTCxJQUFBLENBQUs2RSxJQUFJLEtBQUssS0FBSzdFLElBQUEsQ0FBSzZFLElBQUk7TUFDakUsSUFBSTRHLGdCQUFBLElBQW9CQyx1QkFBQSxFQUF5QjtRQUMvQzdHLElBQUEsR0FBT0EsSUFBQSxDQUFLbEUsU0FBQSxDQUFVLEdBQUdrRSxJQUFBLENBQUt2QixNQUFBLEdBQVMsQ0FBQztNQUMxQztNQUNBdUIsSUFBQSxHQUFPaEYsTUFBQSxDQUFPZ0YsSUFBQSxFQUFNLElBQUk7TUFDeEIsT0FBTztRQUNMSSxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztRQUNWSztNQUNGO0lBQ0Y7RUFDRjtFQUVBOEcsR0FBRzVGLEdBQUEsRUFBSztJQUNOLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTU8sTUFBQSxDQUFPb0YsRUFBQSxDQUFHckosSUFBQSxDQUFLeUQsR0FBRztJQUN6QyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsT0FBTztRQUNMUyxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztNQUNaO0lBQ0Y7RUFDRjtFQUVBb0gsSUFBSTdGLEdBQUEsRUFBSztJQUNQLE1BQU12QixHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTU8sTUFBQSxDQUFPcUYsR0FBQSxDQUFJdEosSUFBQSxDQUFLeUQsR0FBRztJQUMxQyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsT0FBTztRQUNMUyxJQUFBLEVBQU07UUFDTlAsR0FBQSxFQUFLRixHQUFBLENBQUksQ0FBQztRQUNWSyxJQUFBLEVBQU1MLEdBQUEsQ0FBSSxDQUFDO1FBQ1hVLE1BQUEsRUFBUSxLQUFLL0gsS0FBQSxDQUFNZ0ksWUFBQSxDQUFhWCxHQUFBLENBQUksQ0FBQyxDQUFDO01BQ3hDO0lBQ0Y7RUFDRjtFQUVBcUgsU0FBUzlGLEdBQUEsRUFBSytGLE9BQUEsRUFBUTtJQUNwQixNQUFNdEgsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1PLE1BQUEsQ0FBT3NGLFFBQUEsQ0FBU3ZKLElBQUEsQ0FBS3lELEdBQUc7SUFDL0MsSUFBSXZCLEdBQUEsRUFBSztNQUNQLElBQUlLLElBQUEsRUFBTXJELElBQUE7TUFDVixJQUFJZ0QsR0FBQSxDQUFJLENBQUMsTUFBTSxLQUFLO1FBQ2xCSyxJQUFBLEdBQU9oRixNQUFBLENBQU8sS0FBS3hDLE9BQUEsQ0FBUW9CLE1BQUEsR0FBU3FOLE9BQUEsQ0FBT3RILEdBQUEsQ0FBSSxDQUFDLENBQUMsSUFBSUEsR0FBQSxDQUFJLENBQUMsQ0FBQztRQUMzRGhELElBQUEsR0FBTyxZQUFZcUQsSUFBQTtNQUNyQixPQUFPO1FBQ0xBLElBQUEsR0FBT2hGLE1BQUEsQ0FBTzJFLEdBQUEsQ0FBSSxDQUFDLENBQUM7UUFDcEJoRCxJQUFBLEdBQU9xRCxJQUFBO01BQ1Q7TUFFQSxPQUFPO1FBQ0xJLElBQUEsRUFBTTtRQUNOUCxHQUFBLEVBQUtGLEdBQUEsQ0FBSSxDQUFDO1FBQ1ZLLElBQUE7UUFDQXJELElBQUE7UUFDQTBELE1BQUEsRUFBUSxDQUNOO1VBQ0VELElBQUEsRUFBTTtVQUNOUCxHQUFBLEVBQUtHLElBQUE7VUFDTEE7UUFDRjtNQUVKO0lBQ0Y7RUFDRjtFQUVBa0gsSUFBSWhHLEdBQUEsRUFBSytGLE9BQUEsRUFBUTtJQUNmLElBQUl0SCxHQUFBO0lBQ0osSUFBSUEsR0FBQSxHQUFNLEtBQUt3QixLQUFBLENBQU1PLE1BQUEsQ0FBT3dGLEdBQUEsQ0FBSXpKLElBQUEsQ0FBS3lELEdBQUcsR0FBRztNQUN6QyxJQUFJbEIsSUFBQSxFQUFNckQsSUFBQTtNQUNWLElBQUlnRCxHQUFBLENBQUksQ0FBQyxNQUFNLEtBQUs7UUFDbEJLLElBQUEsR0FBT2hGLE1BQUEsQ0FBTyxLQUFLeEMsT0FBQSxDQUFRb0IsTUFBQSxHQUFTcU4sT0FBQSxDQUFPdEgsR0FBQSxDQUFJLENBQUMsQ0FBQyxJQUFJQSxHQUFBLENBQUksQ0FBQyxDQUFDO1FBQzNEaEQsSUFBQSxHQUFPLFlBQVlxRCxJQUFBO01BQ3JCLE9BQU87UUFFTCxJQUFJbUgsV0FBQTtRQUNKLEdBQUc7VUFDREEsV0FBQSxHQUFjeEgsR0FBQSxDQUFJLENBQUM7VUFDbkJBLEdBQUEsQ0FBSSxDQUFDLElBQUksS0FBS3dCLEtBQUEsQ0FBTU8sTUFBQSxDQUFPMEYsVUFBQSxDQUFXM0osSUFBQSxDQUFLa0MsR0FBQSxDQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEQsU0FBU3dILFdBQUEsS0FBZ0J4SCxHQUFBLENBQUksQ0FBQztRQUM5QkssSUFBQSxHQUFPaEYsTUFBQSxDQUFPMkUsR0FBQSxDQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJQSxHQUFBLENBQUksQ0FBQyxNQUFNLFFBQVE7VUFDckJoRCxJQUFBLEdBQU8sWUFBWWdELEdBQUEsQ0FBSSxDQUFDO1FBQzFCLE9BQU87VUFDTGhELElBQUEsR0FBT2dELEdBQUEsQ0FBSSxDQUFDO1FBQ2Q7TUFDRjtNQUNBLE9BQU87UUFDTFMsSUFBQSxFQUFNO1FBQ05QLEdBQUEsRUFBS0YsR0FBQSxDQUFJLENBQUM7UUFDVkssSUFBQTtRQUNBckQsSUFBQTtRQUNBMEQsTUFBQSxFQUFRLENBQ047VUFDRUQsSUFBQSxFQUFNO1VBQ05QLEdBQUEsRUFBS0csSUFBQTtVQUNMQTtRQUNGO01BRUo7SUFDRjtFQUNGO0VBRUFxSCxXQUFXbkcsR0FBQSxFQUFLb0csWUFBQSxFQUFhO0lBQzNCLE1BQU0zSCxHQUFBLEdBQU0sS0FBS3dCLEtBQUEsQ0FBTU8sTUFBQSxDQUFPMUIsSUFBQSxDQUFLdkMsSUFBQSxDQUFLeUQsR0FBRztJQUMzQyxJQUFJdkIsR0FBQSxFQUFLO01BQ1AsSUFBSUssSUFBQTtNQUNKLElBQUksS0FBSzFILEtBQUEsQ0FBTTJILEtBQUEsQ0FBTWlGLFVBQUEsRUFBWTtRQUMvQmxGLElBQUEsR0FBTyxLQUFLeEgsT0FBQSxDQUFRdUIsUUFBQSxHQUFZLEtBQUt2QixPQUFBLENBQVF3QixTQUFBLEdBQVksS0FBS3hCLE9BQUEsQ0FBUXdCLFNBQUEsQ0FBVTJGLEdBQUEsQ0FBSSxDQUFDLENBQUMsSUFBSTNFLE1BQUEsQ0FBTzJFLEdBQUEsQ0FBSSxDQUFDLENBQUMsSUFBS0EsR0FBQSxDQUFJLENBQUM7TUFDbkgsT0FBTztRQUNMSyxJQUFBLEdBQU9oRixNQUFBLENBQU8sS0FBS3hDLE9BQUEsQ0FBUTBCLFdBQUEsR0FBY29OLFlBQUEsQ0FBWTNILEdBQUEsQ0FBSSxDQUFDLENBQUMsSUFBSUEsR0FBQSxDQUFJLENBQUMsQ0FBQztNQUN2RTtNQUNBLE9BQU87UUFDTFMsSUFBQSxFQUFNO1FBQ05QLEdBQUEsRUFBS0YsR0FBQSxDQUFJLENBQUM7UUFDVks7TUFDRjtJQUNGO0VBQ0Y7QUFDRjtBQUtBLElBQU1vQixLQUFBLEdBQVE7RUFDWkMsT0FBQSxFQUFTO0VBQ1RDLElBQUEsRUFBTTtFQUNORSxNQUFBLEVBQVE7RUFDUk8sRUFBQSxFQUFJO0VBQ0pILE9BQUEsRUFBUztFQUNUSSxVQUFBLEVBQVk7RUFDWkcsSUFBQSxFQUFNO0VBQ05sSCxJQUFBLEVBQU07RUFVTnNKLEdBQUEsRUFBSztFQUNMRSxLQUFBLEVBQU9qSCxRQUFBO0VBQ1B3SCxRQUFBLEVBQVU7RUFBQTtFQUFBO0VBR1Z1QyxVQUFBLEVBQVk7RUFDWnZILElBQUEsRUFBTTtBQUNSO0FBRUFvQixLQUFBLENBQU1vRyxNQUFBLEdBQVM7QUFDZnBHLEtBQUEsQ0FBTXFHLE1BQUEsR0FBUztBQUNmckcsS0FBQSxDQUFNbUQsR0FBQSxHQUFNdkksSUFBQSxDQUFLb0YsS0FBQSxDQUFNbUQsR0FBRyxFQUN2Qm5KLE9BQUEsQ0FBUSxTQUFTZ0csS0FBQSxDQUFNb0csTUFBTSxFQUM3QnBNLE9BQUEsQ0FBUSxTQUFTZ0csS0FBQSxDQUFNcUcsTUFBTSxFQUM3Qm5MLFFBQUEsQ0FBUztBQUVaOEUsS0FBQSxDQUFNc0csTUFBQSxHQUFTO0FBQ2Z0RyxLQUFBLENBQU11RyxhQUFBLEdBQWdCM0wsSUFBQSxDQUFLLGVBQWUsRUFDdkNaLE9BQUEsQ0FBUSxRQUFRZ0csS0FBQSxDQUFNc0csTUFBTSxFQUM1QnBMLFFBQUEsQ0FBUztBQUVaOEUsS0FBQSxDQUFNZSxJQUFBLEdBQU9uRyxJQUFBLENBQUtvRixLQUFBLENBQU1lLElBQUksRUFDekIvRyxPQUFBLENBQVEsU0FBU2dHLEtBQUEsQ0FBTXNHLE1BQU0sRUFDN0J0TSxPQUFBLENBQVEsTUFBTSxpRUFBaUUsRUFDL0VBLE9BQUEsQ0FBUSxPQUFPLFlBQVlnRyxLQUFBLENBQU1tRCxHQUFBLENBQUk3SixNQUFBLEdBQVMsR0FBRyxFQUNqRDRCLFFBQUEsQ0FBUztBQUVaOEUsS0FBQSxDQUFNd0csSUFBQSxHQUFPO0FBTWJ4RyxLQUFBLENBQU15RyxRQUFBLEdBQVc7QUFDakJ6RyxLQUFBLENBQU1uRyxJQUFBLEdBQU9lLElBQUEsQ0FBS29GLEtBQUEsQ0FBTW5HLElBQUEsRUFBTSxHQUFHLEVBQzlCRyxPQUFBLENBQVEsV0FBV2dHLEtBQUEsQ0FBTXlHLFFBQVEsRUFDakN6TSxPQUFBLENBQVEsT0FBT2dHLEtBQUEsQ0FBTXdHLElBQUksRUFDekJ4TSxPQUFBLENBQVEsYUFBYSwwRUFBMEUsRUFDL0ZrQixRQUFBLENBQVM7QUFFWjhFLEtBQUEsQ0FBTTRELFFBQUEsR0FBV2hKLElBQUEsQ0FBS29GLEtBQUEsQ0FBTTRELFFBQVEsRUFDakM1SixPQUFBLENBQVEsU0FBU2dHLEtBQUEsQ0FBTXNHLE1BQU0sRUFDN0JwTCxRQUFBLENBQVM7QUFFWjhFLEtBQUEsQ0FBTTZELFNBQUEsR0FBWWpKLElBQUEsQ0FBS29GLEtBQUEsQ0FBTW1HLFVBQVUsRUFDcENuTSxPQUFBLENBQVEsTUFBTWdHLEtBQUEsQ0FBTVcsRUFBRSxFQUN0QjNHLE9BQUEsQ0FBUSxXQUFXLGVBQWUsRUFDbENBLE9BQUEsQ0FBUSxhQUFhLEVBQUUsRUFDdkJBLE9BQUEsQ0FBUSxVQUFVLEVBQUUsRUFDcEJBLE9BQUEsQ0FBUSxjQUFjLFNBQVMsRUFDL0JBLE9BQUEsQ0FBUSxVQUFVLGdEQUFnRCxFQUNsRUEsT0FBQSxDQUFRLFFBQVEsd0JBQXdCLEVBQ3hDQSxPQUFBLENBQVEsUUFBUSw2REFBNkQsRUFDN0VBLE9BQUEsQ0FBUSxPQUFPZ0csS0FBQSxDQUFNd0csSUFBSSxFQUN6QnRMLFFBQUEsQ0FBUztBQUVaOEUsS0FBQSxDQUFNWSxVQUFBLEdBQWFoRyxJQUFBLENBQUtvRixLQUFBLENBQU1ZLFVBQVUsRUFDckM1RyxPQUFBLENBQVEsYUFBYWdHLEtBQUEsQ0FBTTZELFNBQVMsRUFDcEMzSSxRQUFBLENBQVM7QUFNWjhFLEtBQUEsQ0FBTTBHLE1BQUEsR0FBUztFQUFFLEdBQUcxRztBQUFNO0FBTTFCQSxLQUFBLENBQU05SCxHQUFBLEdBQU07RUFDVixHQUFHOEgsS0FBQSxDQUFNMEcsTUFBQTtFQUNUckQsS0FBQSxFQUFPO0VBQUE7QUFHVDtBQUVBckQsS0FBQSxDQUFNOUgsR0FBQSxDQUFJbUwsS0FBQSxHQUFRekksSUFBQSxDQUFLb0YsS0FBQSxDQUFNOUgsR0FBQSxDQUFJbUwsS0FBSyxFQUNuQ3JKLE9BQUEsQ0FBUSxNQUFNZ0csS0FBQSxDQUFNVyxFQUFFLEVBQ3RCM0csT0FBQSxDQUFRLFdBQVcsZUFBZSxFQUNsQ0EsT0FBQSxDQUFRLGNBQWMsU0FBUyxFQUMvQkEsT0FBQSxDQUFRLFFBQVEsWUFBWSxFQUM1QkEsT0FBQSxDQUFRLFVBQVUsZ0RBQWdELEVBQ2xFQSxPQUFBLENBQVEsUUFBUSx3QkFBd0IsRUFDeENBLE9BQUEsQ0FBUSxRQUFRLDZEQUE2RCxFQUM3RUEsT0FBQSxDQUFRLE9BQU9nRyxLQUFBLENBQU13RyxJQUFJLEVBQ3pCdEwsUUFBQSxDQUFTO0FBRVo4RSxLQUFBLENBQU05SCxHQUFBLENBQUkyTCxTQUFBLEdBQVlqSixJQUFBLENBQUtvRixLQUFBLENBQU1tRyxVQUFVLEVBQ3hDbk0sT0FBQSxDQUFRLE1BQU1nRyxLQUFBLENBQU1XLEVBQUUsRUFDdEIzRyxPQUFBLENBQVEsV0FBVyxlQUFlLEVBQ2xDQSxPQUFBLENBQVEsYUFBYSxFQUFFLEVBQ3ZCQSxPQUFBLENBQVEsU0FBU2dHLEtBQUEsQ0FBTTlILEdBQUEsQ0FBSW1MLEtBQUssRUFDaENySixPQUFBLENBQVEsY0FBYyxTQUFTLEVBQy9CQSxPQUFBLENBQVEsVUFBVSxnREFBZ0QsRUFDbEVBLE9BQUEsQ0FBUSxRQUFRLHdCQUF3QixFQUN4Q0EsT0FBQSxDQUFRLFFBQVEsNkRBQTZELEVBQzdFQSxPQUFBLENBQVEsT0FBT2dHLEtBQUEsQ0FBTXdHLElBQUksRUFDekJ0TCxRQUFBLENBQVM7QUFLWjhFLEtBQUEsQ0FBTXZILFFBQUEsR0FBVztFQUNmLEdBQUd1SCxLQUFBLENBQU0wRyxNQUFBO0VBQ1Q3TSxJQUFBLEVBQU1lLElBQUEsQ0FDSix3SUFFd0UsRUFDdkVaLE9BQUEsQ0FBUSxXQUFXZ0csS0FBQSxDQUFNeUcsUUFBUSxFQUNqQ3pNLE9BQUEsQ0FBUSxRQUFRLG1LQUdrQixFQUNsQ2tCLFFBQUEsQ0FBUztFQUNaaUksR0FBQSxFQUFLO0VBQ0wzQyxPQUFBLEVBQVM7RUFDVEosTUFBQSxFQUFRaEUsUUFBQTtFQUFBO0VBQ1J3SCxRQUFBLEVBQVU7RUFDVkMsU0FBQSxFQUFXakosSUFBQSxDQUFLb0YsS0FBQSxDQUFNMEcsTUFBQSxDQUFPUCxVQUFVLEVBQ3BDbk0sT0FBQSxDQUFRLE1BQU1nRyxLQUFBLENBQU1XLEVBQUUsRUFDdEIzRyxPQUFBLENBQVEsV0FBVyxpQkFBaUIsRUFDcENBLE9BQUEsQ0FBUSxZQUFZZ0csS0FBQSxDQUFNNEQsUUFBUSxFQUNsQzVKLE9BQUEsQ0FBUSxjQUFjLFNBQVMsRUFDL0JBLE9BQUEsQ0FBUSxXQUFXLEVBQUUsRUFDckJBLE9BQUEsQ0FBUSxTQUFTLEVBQUUsRUFDbkJBLE9BQUEsQ0FBUSxTQUFTLEVBQUUsRUFDbkJrQixRQUFBLENBQVM7QUFDZDtBQUtBLElBQU1vRixNQUFBLEdBQVM7RUFDYjFHLE1BQUEsRUFBUTtFQUNSZ00sUUFBQSxFQUFVO0VBQ1ZFLEdBQUEsRUFBSzFKLFFBQUE7RUFDTGdILEdBQUEsRUFBSztFQUFBO0VBTUw1RSxJQUFBLEVBQU07RUFDTjJGLE9BQUEsRUFBUztFQUNURSxNQUFBLEVBQVE7RUFDUnNDLGFBQUEsRUFBZTtFQUNmckMsUUFBQSxFQUFVO0lBQ1JHLE1BQUEsRUFBUTtJQUFBO0lBQUE7SUFHUlMsU0FBQSxFQUFXO0lBQ1hDLFNBQUEsRUFBVztJQUFBO0VBQ2I7RUFDQWpGLElBQUEsRUFBTTtFQUNOd0YsRUFBQSxFQUFJO0VBQ0pDLEdBQUEsRUFBS3ZKLFFBQUE7RUFDTHdDLElBQUEsRUFBTTtFQUNOK0YsV0FBQSxFQUFhO0FBQ2Y7QUFHQXJFLE1BQUEsQ0FBT3NHLFlBQUEsR0FBZTtBQUN0QnRHLE1BQUEsQ0FBT3FFLFdBQUEsR0FBYy9KLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT3FFLFdBQUEsRUFBYSxHQUFHLEVBQUUzSyxPQUFBLENBQVEsZ0JBQWdCc0csTUFBQSxDQUFPc0csWUFBWSxFQUFFMUwsUUFBQSxDQUFTO0FBR3pHb0YsTUFBQSxDQUFPdUcsU0FBQSxHQUFZO0FBQ25CdkcsTUFBQSxDQUFPd0csY0FBQSxHQUFpQjtBQUN4QnhHLE1BQUEsQ0FBT0MsUUFBQSxHQUFXO0FBRWxCRCxNQUFBLENBQU9tRyxRQUFBLEdBQVc3TCxJQUFBLENBQUtvRixLQUFBLENBQU15RyxRQUFRLEVBQUV6TSxPQUFBLENBQVEsYUFBYSxLQUFLLEVBQUVrQixRQUFBLENBQVM7QUFFNUVvRixNQUFBLENBQU9nRSxRQUFBLENBQVNHLE1BQUEsR0FBUzdKLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT2dFLFFBQUEsQ0FBU0csTUFBQSxFQUFRLEdBQUcsRUFDdER6SyxPQUFBLENBQVEsVUFBVXNHLE1BQUEsQ0FBT3NHLFlBQVksRUFDckMxTCxRQUFBLENBQVM7QUFFWm9GLE1BQUEsQ0FBT2dFLFFBQUEsQ0FBU1ksU0FBQSxHQUFZdEssSUFBQSxDQUFLMEYsTUFBQSxDQUFPZ0UsUUFBQSxDQUFTWSxTQUFBLEVBQVcsSUFBSSxFQUM3RGxMLE9BQUEsQ0FBUSxVQUFVc0csTUFBQSxDQUFPc0csWUFBWSxFQUNyQzFMLFFBQUEsQ0FBUztBQUVab0YsTUFBQSxDQUFPZ0UsUUFBQSxDQUFTYSxTQUFBLEdBQVl2SyxJQUFBLENBQUswRixNQUFBLENBQU9nRSxRQUFBLENBQVNhLFNBQUEsRUFBVyxJQUFJLEVBQzdEbkwsT0FBQSxDQUFRLFVBQVVzRyxNQUFBLENBQU9zRyxZQUFZLEVBQ3JDMUwsUUFBQSxDQUFTO0FBRVpvRixNQUFBLENBQU93RyxjQUFBLEdBQWlCbE0sSUFBQSxDQUFLMEYsTUFBQSxDQUFPd0csY0FBQSxFQUFnQixJQUFJLEVBQ3JEOU0sT0FBQSxDQUFRLFVBQVVzRyxNQUFBLENBQU9zRyxZQUFZLEVBQ3JDMUwsUUFBQSxDQUFTO0FBRVpvRixNQUFBLENBQU9DLFFBQUEsR0FBVzNGLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT0MsUUFBQSxFQUFVLElBQUksRUFDekN2RyxPQUFBLENBQVEsVUFBVXNHLE1BQUEsQ0FBT3NHLFlBQVksRUFDckMxTCxRQUFBLENBQVM7QUFFWm9GLE1BQUEsQ0FBT3lHLE9BQUEsR0FBVTtBQUNqQnpHLE1BQUEsQ0FBTzBHLE1BQUEsR0FBUztBQUNoQjFHLE1BQUEsQ0FBT3NGLFFBQUEsR0FBV2hMLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT3NGLFFBQVEsRUFDbkM1TCxPQUFBLENBQVEsVUFBVXNHLE1BQUEsQ0FBT3lHLE9BQU8sRUFDaEMvTSxPQUFBLENBQVEsU0FBU3NHLE1BQUEsQ0FBTzBHLE1BQU0sRUFDOUI5TCxRQUFBLENBQVM7QUFFWm9GLE1BQUEsQ0FBTzJHLFVBQUEsR0FBYTtBQUVwQjNHLE1BQUEsQ0FBTzhDLEdBQUEsR0FBTXhJLElBQUEsQ0FBSzBGLE1BQUEsQ0FBTzhDLEdBQUcsRUFDekJwSixPQUFBLENBQVEsV0FBV3NHLE1BQUEsQ0FBT21HLFFBQVEsRUFDbEN6TSxPQUFBLENBQVEsYUFBYXNHLE1BQUEsQ0FBTzJHLFVBQVUsRUFDdEMvTCxRQUFBLENBQVM7QUFFWm9GLE1BQUEsQ0FBTzhGLE1BQUEsR0FBUztBQUNoQjlGLE1BQUEsQ0FBTzRHLEtBQUEsR0FBUTtBQUNmNUcsTUFBQSxDQUFPK0YsTUFBQSxHQUFTO0FBRWhCL0YsTUFBQSxDQUFPOUIsSUFBQSxHQUFPNUQsSUFBQSxDQUFLMEYsTUFBQSxDQUFPOUIsSUFBSSxFQUMzQnhFLE9BQUEsQ0FBUSxTQUFTc0csTUFBQSxDQUFPOEYsTUFBTSxFQUM5QnBNLE9BQUEsQ0FBUSxRQUFRc0csTUFBQSxDQUFPNEcsS0FBSyxFQUM1QmxOLE9BQUEsQ0FBUSxTQUFTc0csTUFBQSxDQUFPK0YsTUFBTSxFQUM5Qm5MLFFBQUEsQ0FBUztBQUVab0YsTUFBQSxDQUFPNkQsT0FBQSxHQUFVdkosSUFBQSxDQUFLMEYsTUFBQSxDQUFPNkQsT0FBTyxFQUNqQ25LLE9BQUEsQ0FBUSxTQUFTc0csTUFBQSxDQUFPOEYsTUFBTSxFQUM5QnBNLE9BQUEsQ0FBUSxPQUFPZ0csS0FBQSxDQUFNb0csTUFBTSxFQUMzQmxMLFFBQUEsQ0FBUztBQUVab0YsTUFBQSxDQUFPK0QsTUFBQSxHQUFTekosSUFBQSxDQUFLMEYsTUFBQSxDQUFPK0QsTUFBTSxFQUMvQnJLLE9BQUEsQ0FBUSxPQUFPZ0csS0FBQSxDQUFNb0csTUFBTSxFQUMzQmxMLFFBQUEsQ0FBUztBQUVab0YsTUFBQSxDQUFPcUcsYUFBQSxHQUFnQi9MLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT3FHLGFBQUEsRUFBZSxHQUFHLEVBQ2xEM00sT0FBQSxDQUFRLFdBQVdzRyxNQUFBLENBQU82RCxPQUFPLEVBQ2pDbkssT0FBQSxDQUFRLFVBQVVzRyxNQUFBLENBQU8rRCxNQUFNLEVBQy9CbkosUUFBQSxDQUFTO0FBTVpvRixNQUFBLENBQU9vRyxNQUFBLEdBQVM7RUFBRSxHQUFHcEc7QUFBTztBQU01QkEsTUFBQSxDQUFPN0gsUUFBQSxHQUFXO0VBQ2hCLEdBQUc2SCxNQUFBLENBQU9vRyxNQUFBO0VBQ1ZTLE1BQUEsRUFBUTtJQUNOdEYsS0FBQSxFQUFPO0lBQ1B1RixNQUFBLEVBQVE7SUFDUkMsTUFBQSxFQUFRO0lBQ1JDLE1BQUEsRUFBUTtFQUNWO0VBQ0FDLEVBQUEsRUFBSTtJQUNGMUYsS0FBQSxFQUFPO0lBQ1B1RixNQUFBLEVBQVE7SUFDUkMsTUFBQSxFQUFRO0lBQ1JDLE1BQUEsRUFBUTtFQUNWO0VBQ0E5SSxJQUFBLEVBQU01RCxJQUFBLENBQUsseUJBQXlCLEVBQ2pDWixPQUFBLENBQVEsU0FBU3NHLE1BQUEsQ0FBTzhGLE1BQU0sRUFDOUJsTCxRQUFBLENBQVM7RUFDWmlKLE9BQUEsRUFBU3ZKLElBQUEsQ0FBSywrQkFBK0IsRUFDMUNaLE9BQUEsQ0FBUSxTQUFTc0csTUFBQSxDQUFPOEYsTUFBTSxFQUM5QmxMLFFBQUEsQ0FBUztBQUNkO0FBTUFvRixNQUFBLENBQU9wSSxHQUFBLEdBQU07RUFDWCxHQUFHb0ksTUFBQSxDQUFPb0csTUFBQTtFQUNWOU0sTUFBQSxFQUFRZ0IsSUFBQSxDQUFLMEYsTUFBQSxDQUFPMUcsTUFBTSxFQUFFSSxPQUFBLENBQVEsTUFBTSxNQUFNLEVBQUVrQixRQUFBLENBQVM7RUFDM0RzTSxlQUFBLEVBQWlCO0VBQ2pCMUIsR0FBQSxFQUFLO0VBQ0xFLFVBQUEsRUFBWTtFQUNaTCxHQUFBLEVBQUs7RUFDTC9HLElBQUEsRUFBTTtBQUNSO0FBRUEwQixNQUFBLENBQU9wSSxHQUFBLENBQUk0TixHQUFBLEdBQU1sTCxJQUFBLENBQUswRixNQUFBLENBQU9wSSxHQUFBLENBQUk0TixHQUFBLEVBQUssR0FBRyxFQUN0QzlMLE9BQUEsQ0FBUSxTQUFTc0csTUFBQSxDQUFPcEksR0FBQSxDQUFJc1AsZUFBZSxFQUMzQ3RNLFFBQUEsQ0FBUztBQUtab0YsTUFBQSxDQUFPdEksTUFBQSxHQUFTO0VBQ2QsR0FBR3NJLE1BQUEsQ0FBT3BJLEdBQUE7RUFDVndOLEVBQUEsRUFBSTlLLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT29GLEVBQUUsRUFBRTFMLE9BQUEsQ0FBUSxRQUFRLEdBQUcsRUFBRWtCLFFBQUEsQ0FBUztFQUNsRDBELElBQUEsRUFBTWhFLElBQUEsQ0FBSzBGLE1BQUEsQ0FBT3BJLEdBQUEsQ0FBSTBHLElBQUksRUFDdkI1RSxPQUFBLENBQVEsUUFBUSxlQUFlLEVBQy9CQSxPQUFBLENBQVEsV0FBVyxHQUFHLEVBQ3RCa0IsUUFBQSxDQUFTO0FBQ2Q7QUFNQSxTQUFTcEMsWUFBWThGLElBQUEsRUFBTTtFQUN6QixPQUFPQSxJQUFBLENBRUo1RSxPQUFBLENBQVEsUUFBUSxRQUFRLEVBRXhCQSxPQUFBLENBQVEsT0FBTyxRQUFRLEVBRXZCQSxPQUFBLENBQVEsMkJBQTJCLFVBQVUsRUFFN0NBLE9BQUEsQ0FBUSxNQUFNLFFBQVEsRUFFdEJBLE9BQUEsQ0FBUSxnQ0FBZ0MsVUFBVSxFQUVsREEsT0FBQSxDQUFRLE1BQU0sUUFBUSxFQUV0QkEsT0FBQSxDQUFRLFVBQVUsUUFBUTtBQUMvQjtBQU1BLFNBQVN4QixPQUFPb0csSUFBQSxFQUFNO0VBQ3BCLElBQUk2SSxHQUFBLEdBQU07SUFDUnZLLENBQUE7SUFDQXZELEVBQUE7RUFFRixNQUFNZ0UsQ0FBQSxHQUFJaUIsSUFBQSxDQUFLdkIsTUFBQTtFQUNmLEtBQUtILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBR1QsQ0FBQSxJQUFLO0lBQ3RCdkQsRUFBQSxHQUFLaUYsSUFBQSxDQUFLOEksVUFBQSxDQUFXeEssQ0FBQztJQUN0QixJQUFJb0YsSUFBQSxDQUFLcUYsTUFBQSxDQUFPLElBQUksS0FBSztNQUN2QmhPLEVBQUEsR0FBSyxNQUFNQSxFQUFBLENBQUdpTyxRQUFBLENBQVMsRUFBRTtJQUMzQjtJQUNBSCxHQUFBLElBQU8sT0FBTzlOLEVBQUEsR0FBSztFQUNyQjtFQUVBLE9BQU84TixHQUFBO0FBQ1Q7QUFLQSxJQUFNaFIsS0FBQSxHQUFOLE1BQU1vUixNQUFBLENBQU07RUFDVmxJLFlBQVlDLFFBQUEsRUFBUztJQUNuQixLQUFLWCxNQUFBLEdBQVMsRUFBQztJQUNmLEtBQUtBLE1BQUEsQ0FBT21GLEtBQUEsR0FBUSxlQUFBMEQsTUFBQSxDQUFPQyxNQUFBLENBQU8sSUFBSTtJQUN0QyxLQUFLM1EsT0FBQSxHQUFVd0ksUUFBQSxJQUFXNUksUUFBQTtJQUMxQixLQUFLSSxPQUFBLENBQVEyQixTQUFBLEdBQVksS0FBSzNCLE9BQUEsQ0FBUTJCLFNBQUEsSUFBYSxJQUFJaEMsU0FBQSxDQUFVO0lBQ2pFLEtBQUtnQyxTQUFBLEdBQVksS0FBSzNCLE9BQUEsQ0FBUTJCLFNBQUE7SUFDOUIsS0FBS0EsU0FBQSxDQUFVM0IsT0FBQSxHQUFVLEtBQUtBLE9BQUE7SUFDOUIsS0FBSzJCLFNBQUEsQ0FBVTdCLEtBQUEsR0FBUTtJQUN2QixLQUFLOFEsV0FBQSxHQUFjLEVBQUM7SUFDcEIsS0FBS25KLEtBQUEsR0FBUTtNQUNYQyxNQUFBLEVBQVE7TUFDUmdGLFVBQUEsRUFBWTtNQUNaakQsR0FBQSxFQUFLO0lBQ1A7SUFFQSxNQUFNZCxLQUFBLEdBQVE7TUFDWkMsS0FBQSxFQUFPQSxLQUFBLENBQU0wRyxNQUFBO01BQ2JwRyxNQUFBLEVBQVFBLE1BQUEsQ0FBT29HO0lBQ2pCO0lBRUEsSUFBSSxLQUFLdFAsT0FBQSxDQUFRcUIsUUFBQSxFQUFVO01BQ3pCc0gsS0FBQSxDQUFNQyxLQUFBLEdBQVFBLEtBQUEsQ0FBTXZILFFBQUE7TUFDcEJzSCxLQUFBLENBQU1PLE1BQUEsR0FBU0EsTUFBQSxDQUFPN0gsUUFBQTtJQUN4QixXQUFXLEtBQUtyQixPQUFBLENBQVFjLEdBQUEsRUFBSztNQUMzQjZILEtBQUEsQ0FBTUMsS0FBQSxHQUFRQSxLQUFBLENBQU05SCxHQUFBO01BQ3BCLElBQUksS0FBS2QsT0FBQSxDQUFRWSxNQUFBLEVBQVE7UUFDdkIrSCxLQUFBLENBQU1PLE1BQUEsR0FBU0EsTUFBQSxDQUFPdEksTUFBQTtNQUN4QixPQUFPO1FBQ0wrSCxLQUFBLENBQU1PLE1BQUEsR0FBU0EsTUFBQSxDQUFPcEksR0FBQTtNQUN4QjtJQUNGO0lBQ0EsS0FBS2EsU0FBQSxDQUFVZ0gsS0FBQSxHQUFRQSxLQUFBO0VBQ3pCO0VBQUE7QUFBQTtBQUFBO0VBS0EsV0FBV0EsTUFBQSxFQUFRO0lBQ2pCLE9BQU87TUFDTEMsS0FBQTtNQUNBTTtJQUNGO0VBQ0Y7RUFBQTtBQUFBO0FBQUE7RUFLQSxPQUFPMkgsSUFBSW5JLEdBQUEsRUFBS0YsUUFBQSxFQUFTO0lBQ3ZCLE1BQU1sQixNQUFBLEdBQVEsSUFBSW1KLE1BQUEsQ0FBTWpJLFFBQU87SUFDL0IsT0FBT2xCLE1BQUEsQ0FBTXVKLEdBQUEsQ0FBSW5JLEdBQUc7RUFDdEI7RUFBQTtBQUFBO0FBQUE7RUFLQSxPQUFPb0ksVUFBVXBJLEdBQUEsRUFBS0YsUUFBQSxFQUFTO0lBQzdCLE1BQU1sQixNQUFBLEdBQVEsSUFBSW1KLE1BQUEsQ0FBTWpJLFFBQU87SUFDL0IsT0FBT2xCLE1BQUEsQ0FBTVEsWUFBQSxDQUFhWSxHQUFHO0VBQy9CO0VBQUE7QUFBQTtBQUFBO0VBS0FtSSxJQUFJbkksR0FBQSxFQUFLO0lBQ1BBLEdBQUEsR0FBTUEsR0FBQSxDQUNIOUYsT0FBQSxDQUFRLFlBQVksSUFBSTtJQUUzQixLQUFLOEcsV0FBQSxDQUFZaEIsR0FBQSxFQUFLLEtBQUtiLE1BQU07SUFFakMsSUFBSWtKLElBQUE7SUFDSixPQUFPQSxJQUFBLEdBQU8sS0FBS0gsV0FBQSxDQUFZNUssS0FBQSxDQUFNLEdBQUc7TUFDdEMsS0FBSzhCLFlBQUEsQ0FBYWlKLElBQUEsQ0FBS3JJLEdBQUEsRUFBS3FJLElBQUEsQ0FBS2xKLE1BQU07SUFDekM7SUFFQSxPQUFPLEtBQUtBLE1BQUE7RUFDZDtFQUFBO0FBQUE7QUFBQTtFQUtBNkIsWUFBWWhCLEdBQUEsRUFBS2IsTUFBQSxHQUFTLEVBQUMsRUFBRztJQUM1QixJQUFJLEtBQUs3SCxPQUFBLENBQVFxQixRQUFBLEVBQVU7TUFDekJxSCxHQUFBLEdBQU1BLEdBQUEsQ0FBSTlGLE9BQUEsQ0FBUSxPQUFPLE1BQU0sRUFBRUEsT0FBQSxDQUFRLFVBQVUsRUFBRTtJQUN2RCxPQUFPO01BQ0w4RixHQUFBLEdBQU1BLEdBQUEsQ0FBSTlGLE9BQUEsQ0FBUSxnQkFBZ0IsQ0FBQ0csQ0FBQSxFQUFHaU8sT0FBQSxFQUFTQyxJQUFBLEtBQVM7UUFDdEQsT0FBT0QsT0FBQSxHQUFVLE9BQU9sRyxNQUFBLENBQU9tRyxJQUFBLENBQUtoTCxNQUFNO01BQzVDLENBQUM7SUFDSDtJQUVBLElBQUkwQixLQUFBLEVBQU91SixTQUFBLEVBQVdDLE1BQUEsRUFBUUMsb0JBQUE7SUFFOUIsT0FBTzFJLEdBQUEsRUFBSztNQUNWLElBQUksS0FBSzFJLE9BQUEsQ0FBUWEsVUFBQSxJQUNaLEtBQUtiLE9BQUEsQ0FBUWEsVUFBQSxDQUFXK0gsS0FBQSxJQUN4QixLQUFLNUksT0FBQSxDQUFRYSxVQUFBLENBQVcrSCxLQUFBLENBQU1pRCxJQUFBLENBQU13RixZQUFBLElBQWlCO1FBQ3RELElBQUkxSixLQUFBLEdBQVEwSixZQUFBLENBQWFDLElBQUEsQ0FBSztVQUFFeFIsS0FBQSxFQUFPO1FBQUssR0FBRzRJLEdBQUEsRUFBS2IsTUFBTSxHQUFHO1VBQzNEYSxHQUFBLEdBQU1BLEdBQUEsQ0FBSXBGLFNBQUEsQ0FBVXFFLEtBQUEsQ0FBTU4sR0FBQSxDQUFJcEIsTUFBTTtVQUNwQzRCLE1BQUEsQ0FBT3pCLElBQUEsQ0FBS3VCLEtBQUs7VUFDakIsT0FBTztRQUNUO1FBQ0EsT0FBTztNQUNULENBQUMsR0FBRztRQUNKO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVThHLEtBQUEsQ0FBTUMsR0FBRyxHQUFHO1FBQ3JDQSxHQUFBLEdBQU1BLEdBQUEsQ0FBSXBGLFNBQUEsQ0FBVXFFLEtBQUEsQ0FBTU4sR0FBQSxDQUFJcEIsTUFBTTtRQUNwQyxJQUFJMEIsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFBLEtBQVcsS0FBSzRCLE1BQUEsQ0FBTzVCLE1BQUEsR0FBUyxHQUFHO1VBRy9DNEIsTUFBQSxDQUFPQSxNQUFBLENBQU81QixNQUFBLEdBQVMsQ0FBQyxFQUFFb0IsR0FBQSxJQUFPO1FBQ25DLE9BQU87VUFDTFEsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNuQjtRQUNBO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVW1ILElBQUEsQ0FBS0osR0FBRyxHQUFHO1FBQ3BDQSxHQUFBLEdBQU1BLEdBQUEsQ0FBSXBGLFNBQUEsQ0FBVXFFLEtBQUEsQ0FBTU4sR0FBQSxDQUFJcEIsTUFBTTtRQUNwQ2lMLFNBQUEsR0FBWXJKLE1BQUEsQ0FBT0EsTUFBQSxDQUFPNUIsTUFBQSxHQUFTLENBQUM7UUFFcEMsSUFBSWlMLFNBQUEsS0FBY0EsU0FBQSxDQUFVdEosSUFBQSxLQUFTLGVBQWVzSixTQUFBLENBQVV0SixJQUFBLEtBQVMsU0FBUztVQUM5RXNKLFNBQUEsQ0FBVTdKLEdBQUEsSUFBTyxPQUFPTSxLQUFBLENBQU1OLEdBQUE7VUFDOUI2SixTQUFBLENBQVUxSixJQUFBLElBQVEsT0FBT0csS0FBQSxDQUFNSCxJQUFBO1VBQy9CLEtBQUtvSixXQUFBLENBQVksS0FBS0EsV0FBQSxDQUFZM0ssTUFBQSxHQUFTLENBQUMsRUFBRXlDLEdBQUEsR0FBTXdJLFNBQUEsQ0FBVTFKLElBQUE7UUFDaEUsT0FBTztVQUNMSyxNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ25CO1FBQ0E7TUFDRjtNQUdBLElBQUlBLEtBQUEsR0FBUSxLQUFLaEcsU0FBQSxDQUFVcUgsTUFBQSxDQUFPTixHQUFHLEdBQUc7UUFDdENBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVV5SCxPQUFBLENBQVFWLEdBQUcsR0FBRztRQUN2Q0EsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcEM0QixNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ2pCO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVTRILEVBQUEsQ0FBR2IsR0FBRyxHQUFHO1FBQ2xDQSxHQUFBLEdBQU1BLEdBQUEsQ0FBSXBGLFNBQUEsQ0FBVXFFLEtBQUEsQ0FBTU4sR0FBQSxDQUFJcEIsTUFBTTtRQUNwQzRCLE1BQUEsQ0FBT3pCLElBQUEsQ0FBS3VCLEtBQUs7UUFDakI7TUFDRjtNQUdBLElBQUlBLEtBQUEsR0FBUSxLQUFLaEcsU0FBQSxDQUFVNkgsVUFBQSxDQUFXZCxHQUFHLEdBQUc7UUFDMUNBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVVnSSxJQUFBLENBQUtqQixHQUFHLEdBQUc7UUFDcENBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVVjLElBQUEsQ0FBS2lHLEdBQUcsR0FBRztRQUNwQ0EsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcEM0QixNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ2pCO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVW9LLEdBQUEsQ0FBSXJELEdBQUcsR0FBRztRQUNuQ0EsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcENpTCxTQUFBLEdBQVlySixNQUFBLENBQU9BLE1BQUEsQ0FBTzVCLE1BQUEsR0FBUyxDQUFDO1FBQ3BDLElBQUlpTCxTQUFBLEtBQWNBLFNBQUEsQ0FBVXRKLElBQUEsS0FBUyxlQUFlc0osU0FBQSxDQUFVdEosSUFBQSxLQUFTLFNBQVM7VUFDOUVzSixTQUFBLENBQVU3SixHQUFBLElBQU8sT0FBT00sS0FBQSxDQUFNTixHQUFBO1VBQzlCNkosU0FBQSxDQUFVMUosSUFBQSxJQUFRLE9BQU9HLEtBQUEsQ0FBTU4sR0FBQTtVQUMvQixLQUFLdUosV0FBQSxDQUFZLEtBQUtBLFdBQUEsQ0FBWTNLLE1BQUEsR0FBUyxDQUFDLEVBQUV5QyxHQUFBLEdBQU13SSxTQUFBLENBQVUxSixJQUFBO1FBQ2hFLFdBQVcsQ0FBQyxLQUFLSyxNQUFBLENBQU9tRixLQUFBLENBQU1yRixLQUFBLENBQU1xRSxHQUFHLEdBQUc7VUFDeEMsS0FBS25FLE1BQUEsQ0FBT21GLEtBQUEsQ0FBTXJGLEtBQUEsQ0FBTXFFLEdBQUcsSUFBSTtZQUM3QjdILElBQUEsRUFBTXdELEtBQUEsQ0FBTXhELElBQUE7WUFDWm9ELEtBQUEsRUFBT0ksS0FBQSxDQUFNSjtVQUNmO1FBQ0Y7UUFDQTtNQUNGO01BR0EsSUFBSUksS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVVzSyxLQUFBLENBQU12RCxHQUFHLEdBQUc7UUFDckNBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVU2SyxRQUFBLENBQVM5RCxHQUFHLEdBQUc7UUFDeENBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BSUF3SixNQUFBLEdBQVN6SSxHQUFBO01BQ1QsSUFBSSxLQUFLMUksT0FBQSxDQUFRYSxVQUFBLElBQWMsS0FBS2IsT0FBQSxDQUFRYSxVQUFBLENBQVcwUSxVQUFBLEVBQVk7UUFDakUsSUFBSUMsVUFBQSxHQUFhQyxRQUFBO1FBQ2pCLE1BQU1DLE9BQUEsR0FBVWhKLEdBQUEsQ0FBSWhDLEtBQUEsQ0FBTSxDQUFDO1FBQzNCLElBQUlpTCxTQUFBO1FBQ0osS0FBSzNSLE9BQUEsQ0FBUWEsVUFBQSxDQUFXMFEsVUFBQSxDQUFXSyxPQUFBLENBQVEsVUFBU0MsYUFBQSxFQUFlO1VBQ2pFRixTQUFBLEdBQVlFLGFBQUEsQ0FBY1AsSUFBQSxDQUFLO1lBQUV4UixLQUFBLEVBQU87VUFBSyxHQUFHNFIsT0FBTztVQUN2RCxJQUFJLE9BQU9DLFNBQUEsS0FBYyxZQUFZQSxTQUFBLElBQWEsR0FBRztZQUFFSCxVQUFBLEdBQWF0RyxJQUFBLENBQUtDLEdBQUEsQ0FBSXFHLFVBQUEsRUFBWUcsU0FBUztVQUFHO1FBQ3ZHLENBQUM7UUFDRCxJQUFJSCxVQUFBLEdBQWFDLFFBQUEsSUFBWUQsVUFBQSxJQUFjLEdBQUc7VUFDNUNMLE1BQUEsR0FBU3pJLEdBQUEsQ0FBSXBGLFNBQUEsQ0FBVSxHQUFHa08sVUFBQSxHQUFhLENBQUM7UUFDMUM7TUFDRjtNQUNBLElBQUksS0FBSy9KLEtBQUEsQ0FBTWdDLEdBQUEsS0FBUTlCLEtBQUEsR0FBUSxLQUFLaEcsU0FBQSxDQUFVOEssU0FBQSxDQUFVMEUsTUFBTSxJQUFJO1FBQ2hFRCxTQUFBLEdBQVlySixNQUFBLENBQU9BLE1BQUEsQ0FBTzVCLE1BQUEsR0FBUyxDQUFDO1FBQ3BDLElBQUltTCxvQkFBQSxJQUF3QkYsU0FBQSxDQUFVdEosSUFBQSxLQUFTLGFBQWE7VUFDMURzSixTQUFBLENBQVU3SixHQUFBLElBQU8sT0FBT00sS0FBQSxDQUFNTixHQUFBO1VBQzlCNkosU0FBQSxDQUFVMUosSUFBQSxJQUFRLE9BQU9HLEtBQUEsQ0FBTUgsSUFBQTtVQUMvQixLQUFLb0osV0FBQSxDQUFZMUssR0FBQSxDQUFJO1VBQ3JCLEtBQUswSyxXQUFBLENBQVksS0FBS0EsV0FBQSxDQUFZM0ssTUFBQSxHQUFTLENBQUMsRUFBRXlDLEdBQUEsR0FBTXdJLFNBQUEsQ0FBVTFKLElBQUE7UUFDaEUsT0FBTztVQUNMSyxNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ25CO1FBQ0F5SixvQkFBQSxHQUF3QkQsTUFBQSxDQUFPbEwsTUFBQSxLQUFXeUMsR0FBQSxDQUFJekMsTUFBQTtRQUM5Q3lDLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDO01BQ0Y7TUFHQSxJQUFJMEIsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVU2RixJQUFBLENBQUtrQixHQUFHLEdBQUc7UUFDcENBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDaUwsU0FBQSxHQUFZckosTUFBQSxDQUFPQSxNQUFBLENBQU81QixNQUFBLEdBQVMsQ0FBQztRQUNwQyxJQUFJaUwsU0FBQSxJQUFhQSxTQUFBLENBQVV0SixJQUFBLEtBQVMsUUFBUTtVQUMxQ3NKLFNBQUEsQ0FBVTdKLEdBQUEsSUFBTyxPQUFPTSxLQUFBLENBQU1OLEdBQUE7VUFDOUI2SixTQUFBLENBQVUxSixJQUFBLElBQVEsT0FBT0csS0FBQSxDQUFNSCxJQUFBO1VBQy9CLEtBQUtvSixXQUFBLENBQVkxSyxHQUFBLENBQUk7VUFDckIsS0FBSzBLLFdBQUEsQ0FBWSxLQUFLQSxXQUFBLENBQVkzSyxNQUFBLEdBQVMsQ0FBQyxFQUFFeUMsR0FBQSxHQUFNd0ksU0FBQSxDQUFVMUosSUFBQTtRQUNoRSxPQUFPO1VBQ0xLLE1BQUEsQ0FBT3pCLElBQUEsQ0FBS3VCLEtBQUs7UUFDbkI7UUFDQTtNQUNGO01BRUEsSUFBSWUsR0FBQSxFQUFLO1FBQ1AsTUFBTW9KLE1BQUEsR0FBUyw0QkFBNEJwSixHQUFBLENBQUk0SCxVQUFBLENBQVcsQ0FBQztRQUMzRCxJQUFJLEtBQUt0USxPQUFBLENBQVF5QixNQUFBLEVBQVE7VUFDdkJ1RixPQUFBLENBQVErSyxLQUFBLENBQU1ELE1BQU07VUFDcEI7UUFDRixPQUFPO1VBQ0wsTUFBTSxJQUFJRSxLQUFBLENBQU1GLE1BQU07UUFDeEI7TUFDRjtJQUNGO0lBRUEsS0FBS3JLLEtBQUEsQ0FBTWdDLEdBQUEsR0FBTTtJQUNqQixPQUFPNUIsTUFBQTtFQUNUO0VBRUFxQixPQUFPUixHQUFBLEVBQUtiLE1BQUEsR0FBUyxFQUFDLEVBQUc7SUFDdkIsS0FBSytJLFdBQUEsQ0FBWXhLLElBQUEsQ0FBSztNQUFFc0MsR0FBQTtNQUFLYjtJQUFPLENBQUM7SUFDckMsT0FBT0EsTUFBQTtFQUNUO0VBQUE7QUFBQTtBQUFBO0VBS0FDLGFBQWFZLEdBQUEsRUFBS2IsTUFBQSxHQUFTLEVBQUMsRUFBRztJQUM3QixJQUFJRixLQUFBLEVBQU91SixTQUFBLEVBQVdDLE1BQUE7SUFHdEIsSUFBSWhFLFNBQUEsR0FBWXpFLEdBQUE7SUFDaEIsSUFBSW5ELEtBQUE7SUFDSixJQUFJME0sWUFBQSxFQUFjN0UsUUFBQTtJQUdsQixJQUFJLEtBQUt2RixNQUFBLENBQU9tRixLQUFBLEVBQU87TUFDckIsTUFBTUEsS0FBQSxHQUFRMEQsTUFBQSxDQUFPd0IsSUFBQSxDQUFLLEtBQUtySyxNQUFBLENBQU9tRixLQUFLO01BQzNDLElBQUlBLEtBQUEsQ0FBTS9HLE1BQUEsR0FBUyxHQUFHO1FBQ3BCLFFBQVFWLEtBQUEsR0FBUSxLQUFLNUQsU0FBQSxDQUFVZ0gsS0FBQSxDQUFNTyxNQUFBLENBQU9xRyxhQUFBLENBQWN0SyxJQUFBLENBQUtrSSxTQUFTLE1BQU0sTUFBTTtVQUNsRixJQUFJSCxLQUFBLENBQU1tRixRQUFBLENBQVM1TSxLQUFBLENBQU0sQ0FBQyxFQUFFbUIsS0FBQSxDQUFNbkIsS0FBQSxDQUFNLENBQUMsRUFBRTZNLFdBQUEsQ0FBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRztZQUNyRWpGLFNBQUEsR0FBWUEsU0FBQSxDQUFVekcsS0FBQSxDQUFNLEdBQUduQixLQUFBLENBQU0wSSxLQUFLLElBQUksTUFBTSxJQUFJbkQsTUFBQSxDQUFPdkYsS0FBQSxDQUFNLENBQUMsRUFBRVUsTUFBQSxHQUFTLENBQUMsSUFBSSxNQUFNa0gsU0FBQSxDQUFVekcsS0FBQSxDQUFNLEtBQUsvRSxTQUFBLENBQVVnSCxLQUFBLENBQU1PLE1BQUEsQ0FBT3FHLGFBQUEsQ0FBY3ZCLFNBQVM7VUFDaks7UUFDRjtNQUNGO0lBQ0Y7SUFFQSxRQUFRekksS0FBQSxHQUFRLEtBQUs1RCxTQUFBLENBQVVnSCxLQUFBLENBQU1PLE1BQUEsQ0FBT3VHLFNBQUEsQ0FBVXhLLElBQUEsQ0FBS2tJLFNBQVMsTUFBTSxNQUFNO01BQzlFQSxTQUFBLEdBQVlBLFNBQUEsQ0FBVXpHLEtBQUEsQ0FBTSxHQUFHbkIsS0FBQSxDQUFNMEksS0FBSyxJQUFJLE1BQU0sSUFBSW5ELE1BQUEsQ0FBT3ZGLEtBQUEsQ0FBTSxDQUFDLEVBQUVVLE1BQUEsR0FBUyxDQUFDLElBQUksTUFBTWtILFNBQUEsQ0FBVXpHLEtBQUEsQ0FBTSxLQUFLL0UsU0FBQSxDQUFVZ0gsS0FBQSxDQUFNTyxNQUFBLENBQU91RyxTQUFBLENBQVV6QixTQUFTO0lBQzdKO0lBR0EsUUFBUXpJLEtBQUEsR0FBUSxLQUFLNUQsU0FBQSxDQUFVZ0gsS0FBQSxDQUFNTyxNQUFBLENBQU93RyxjQUFBLENBQWV6SyxJQUFBLENBQUtrSSxTQUFTLE1BQU0sTUFBTTtNQUNuRkEsU0FBQSxHQUFZQSxTQUFBLENBQVV6RyxLQUFBLENBQU0sR0FBR25CLEtBQUEsQ0FBTTBJLEtBQUssSUFBSSxPQUFPZCxTQUFBLENBQVV6RyxLQUFBLENBQU0sS0FBSy9FLFNBQUEsQ0FBVWdILEtBQUEsQ0FBTU8sTUFBQSxDQUFPd0csY0FBQSxDQUFlMUIsU0FBUztJQUMzSDtJQUVBLE9BQU90RixHQUFBLEVBQUs7TUFDVixJQUFJLENBQUN1SixZQUFBLEVBQWM7UUFDakI3RSxRQUFBLEdBQVc7TUFDYjtNQUNBNkUsWUFBQSxHQUFlO01BR2YsSUFBSSxLQUFLalMsT0FBQSxDQUFRYSxVQUFBLElBQ1osS0FBS2IsT0FBQSxDQUFRYSxVQUFBLENBQVdxSSxNQUFBLElBQ3hCLEtBQUtsSixPQUFBLENBQVFhLFVBQUEsQ0FBV3FJLE1BQUEsQ0FBTzJDLElBQUEsQ0FBTXdGLFlBQUEsSUFBaUI7UUFDdkQsSUFBSTFKLEtBQUEsR0FBUTBKLFlBQUEsQ0FBYUMsSUFBQSxDQUFLO1VBQUV4UixLQUFBLEVBQU87UUFBSyxHQUFHNEksR0FBQSxFQUFLYixNQUFNLEdBQUc7VUFDM0RhLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1VBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztVQUNqQixPQUFPO1FBQ1Q7UUFDQSxPQUFPO01BQ1QsQ0FBQyxHQUFHO1FBQ0o7TUFDRjtNQUdBLElBQUlBLEtBQUEsR0FBUSxLQUFLaEcsU0FBQSxDQUFVYSxNQUFBLENBQU9rRyxHQUFHLEdBQUc7UUFDdENBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVVxSyxHQUFBLENBQUl0RCxHQUFHLEdBQUc7UUFDbkNBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDaUwsU0FBQSxHQUFZckosTUFBQSxDQUFPQSxNQUFBLENBQU81QixNQUFBLEdBQVMsQ0FBQztRQUNwQyxJQUFJaUwsU0FBQSxJQUFhdkosS0FBQSxDQUFNQyxJQUFBLEtBQVMsVUFBVXNKLFNBQUEsQ0FBVXRKLElBQUEsS0FBUyxRQUFRO1VBQ25Fc0osU0FBQSxDQUFVN0osR0FBQSxJQUFPTSxLQUFBLENBQU1OLEdBQUE7VUFDdkI2SixTQUFBLENBQVUxSixJQUFBLElBQVFHLEtBQUEsQ0FBTUgsSUFBQTtRQUMxQixPQUFPO1VBQ0xLLE1BQUEsQ0FBT3pCLElBQUEsQ0FBS3VCLEtBQUs7UUFDbkI7UUFDQTtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVV5RixJQUFBLENBQUtzQixHQUFHLEdBQUc7UUFDcENBLEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSUEsS0FBQSxHQUFRLEtBQUtoRyxTQUFBLENBQVVvTCxPQUFBLENBQVFyRSxHQUFBLEVBQUssS0FBS2IsTUFBQSxDQUFPbUYsS0FBSyxHQUFHO1FBQzFEdEUsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcENpTCxTQUFBLEdBQVlySixNQUFBLENBQU9BLE1BQUEsQ0FBTzVCLE1BQUEsR0FBUyxDQUFDO1FBQ3BDLElBQUlpTCxTQUFBLElBQWF2SixLQUFBLENBQU1DLElBQUEsS0FBUyxVQUFVc0osU0FBQSxDQUFVdEosSUFBQSxLQUFTLFFBQVE7VUFDbkVzSixTQUFBLENBQVU3SixHQUFBLElBQU9NLEtBQUEsQ0FBTU4sR0FBQTtVQUN2QjZKLFNBQUEsQ0FBVTFKLElBQUEsSUFBUUcsS0FBQSxDQUFNSCxJQUFBO1FBQzFCLE9BQU87VUFDTEssTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNuQjtRQUNBO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVXVMLFFBQUEsQ0FBU3hFLEdBQUEsRUFBS3lFLFNBQUEsRUFBV0MsUUFBUSxHQUFHO1FBQzdEMUUsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcEM0QixNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ2pCO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVXdNLFFBQUEsQ0FBU3pGLEdBQUcsR0FBRztRQUN4Q0EsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcEM0QixNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ2pCO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVTJNLEVBQUEsQ0FBRzVGLEdBQUcsR0FBRztRQUNsQ0EsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcEM0QixNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ2pCO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVTRNLEdBQUEsQ0FBSTdGLEdBQUcsR0FBRztRQUNuQ0EsR0FBQSxHQUFNQSxHQUFBLENBQUlwRixTQUFBLENBQVVxRSxLQUFBLENBQU1OLEdBQUEsQ0FBSXBCLE1BQU07UUFDcEM0QixNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ2pCO01BQ0Y7TUFHQSxJQUFJQSxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVTZNLFFBQUEsQ0FBUzlGLEdBQUEsRUFBS3RILE1BQU0sR0FBRztRQUNoRHNILEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BR0EsSUFBSSxDQUFDLEtBQUtGLEtBQUEsQ0FBTUMsTUFBQSxLQUFXQyxLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVStNLEdBQUEsQ0FBSWhHLEdBQUEsRUFBS3RILE1BQU0sSUFBSTtRQUNuRXNILEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDNEIsTUFBQSxDQUFPekIsSUFBQSxDQUFLdUIsS0FBSztRQUNqQjtNQUNGO01BSUF3SixNQUFBLEdBQVN6SSxHQUFBO01BQ1QsSUFBSSxLQUFLMUksT0FBQSxDQUFRYSxVQUFBLElBQWMsS0FBS2IsT0FBQSxDQUFRYSxVQUFBLENBQVd3UixXQUFBLEVBQWE7UUFDbEUsSUFBSWIsVUFBQSxHQUFhQyxRQUFBO1FBQ2pCLE1BQU1DLE9BQUEsR0FBVWhKLEdBQUEsQ0FBSWhDLEtBQUEsQ0FBTSxDQUFDO1FBQzNCLElBQUlpTCxTQUFBO1FBQ0osS0FBSzNSLE9BQUEsQ0FBUWEsVUFBQSxDQUFXd1IsV0FBQSxDQUFZVCxPQUFBLENBQVEsVUFBU0MsYUFBQSxFQUFlO1VBQ2xFRixTQUFBLEdBQVlFLGFBQUEsQ0FBY1AsSUFBQSxDQUFLO1lBQUV4UixLQUFBLEVBQU87VUFBSyxHQUFHNFIsT0FBTztVQUN2RCxJQUFJLE9BQU9DLFNBQUEsS0FBYyxZQUFZQSxTQUFBLElBQWEsR0FBRztZQUFFSCxVQUFBLEdBQWF0RyxJQUFBLENBQUtDLEdBQUEsQ0FBSXFHLFVBQUEsRUFBWUcsU0FBUztVQUFHO1FBQ3ZHLENBQUM7UUFDRCxJQUFJSCxVQUFBLEdBQWFDLFFBQUEsSUFBWUQsVUFBQSxJQUFjLEdBQUc7VUFDNUNMLE1BQUEsR0FBU3pJLEdBQUEsQ0FBSXBGLFNBQUEsQ0FBVSxHQUFHa08sVUFBQSxHQUFhLENBQUM7UUFDMUM7TUFDRjtNQUNBLElBQUk3SixLQUFBLEdBQVEsS0FBS2hHLFNBQUEsQ0FBVWtOLFVBQUEsQ0FBV3NDLE1BQUEsRUFBUXpQLFdBQVcsR0FBRztRQUMxRGdILEdBQUEsR0FBTUEsR0FBQSxDQUFJcEYsU0FBQSxDQUFVcUUsS0FBQSxDQUFNTixHQUFBLENBQUlwQixNQUFNO1FBQ3BDLElBQUkwQixLQUFBLENBQU1OLEdBQUEsQ0FBSVgsS0FBQSxDQUFNLEVBQUUsTUFBTSxLQUFLO1VBQy9CMEcsUUFBQSxHQUFXekYsS0FBQSxDQUFNTixHQUFBLENBQUlYLEtBQUEsQ0FBTSxFQUFFO1FBQy9CO1FBQ0F1TCxZQUFBLEdBQWU7UUFDZmYsU0FBQSxHQUFZckosTUFBQSxDQUFPQSxNQUFBLENBQU81QixNQUFBLEdBQVMsQ0FBQztRQUNwQyxJQUFJaUwsU0FBQSxJQUFhQSxTQUFBLENBQVV0SixJQUFBLEtBQVMsUUFBUTtVQUMxQ3NKLFNBQUEsQ0FBVTdKLEdBQUEsSUFBT00sS0FBQSxDQUFNTixHQUFBO1VBQ3ZCNkosU0FBQSxDQUFVMUosSUFBQSxJQUFRRyxLQUFBLENBQU1ILElBQUE7UUFDMUIsT0FBTztVQUNMSyxNQUFBLENBQU96QixJQUFBLENBQUt1QixLQUFLO1FBQ25CO1FBQ0E7TUFDRjtNQUVBLElBQUllLEdBQUEsRUFBSztRQUNQLE1BQU1vSixNQUFBLEdBQVMsNEJBQTRCcEosR0FBQSxDQUFJNEgsVUFBQSxDQUFXLENBQUM7UUFDM0QsSUFBSSxLQUFLdFEsT0FBQSxDQUFReUIsTUFBQSxFQUFRO1VBQ3ZCdUYsT0FBQSxDQUFRK0ssS0FBQSxDQUFNRCxNQUFNO1VBQ3BCO1FBQ0YsT0FBTztVQUNMLE1BQU0sSUFBSUUsS0FBQSxDQUFNRixNQUFNO1FBQ3hCO01BQ0Y7SUFDRjtJQUVBLE9BQU9qSyxNQUFBO0VBQ1Q7QUFDRjtBQUtBLElBQU1ySSxRQUFBLEdBQU4sTUFBZTtFQUNiK0ksWUFBWUMsUUFBQSxFQUFTO0lBQ25CLEtBQUt4SSxPQUFBLEdBQVV3SSxRQUFBLElBQVc1SSxRQUFBO0VBQzVCO0VBRUFrSixLQUFLQSxJQUFBLEVBQU13SixVQUFBLEVBQVk1TSxPQUFBLEVBQVM7SUFDOUIsTUFBTXVELElBQUEsSUFBUXFKLFVBQUEsSUFBYyxJQUFJL00sS0FBQSxDQUFNLEtBQUssRUFBRSxDQUFDO0lBQzlDLElBQUksS0FBS3ZGLE9BQUEsQ0FBUWlCLFNBQUEsRUFBVztNQUMxQixNQUFNb1AsR0FBQSxHQUFNLEtBQUtyUSxPQUFBLENBQVFpQixTQUFBLENBQVU2SCxJQUFBLEVBQU1HLElBQUk7TUFDN0MsSUFBSW9ILEdBQUEsSUFBTyxRQUFRQSxHQUFBLEtBQVF2SCxJQUFBLEVBQU07UUFDL0JwRCxPQUFBLEdBQVU7UUFDVm9ELElBQUEsR0FBT3VILEdBQUE7TUFDVDtJQUNGO0lBRUF2SCxJQUFBLEdBQU9BLElBQUEsQ0FBS2xHLE9BQUEsQ0FBUSxPQUFPLEVBQUUsSUFBSTtJQUVqQyxJQUFJLENBQUNxRyxJQUFBLEVBQU07TUFDVCxPQUFPLGlCQUNGdkQsT0FBQSxHQUFVb0QsSUFBQSxHQUFPdEcsTUFBQSxDQUFPc0csSUFBQSxFQUFNLElBQUksS0FDbkM7SUFDTjtJQUVBLE9BQU8sdUJBQ0gsS0FBSzlJLE9BQUEsQ0FBUW1CLFVBQUEsR0FDYnFCLE1BQUEsQ0FBT3lHLElBQUksSUFDWCxRQUNDdkQsT0FBQSxHQUFVb0QsSUFBQSxHQUFPdEcsTUFBQSxDQUFPc0csSUFBQSxFQUFNLElBQUksS0FDbkM7RUFDTjtFQUFBO0FBQUE7QUFBQTtFQUtBVSxXQUFXK0ksS0FBQSxFQUFPO0lBQ2hCLE9BQU87QUFBQSxFQUFpQkEsS0FBSztBQUFBO0VBQy9CO0VBRUE5UCxLQUFLQSxJQUFBLEVBQU0rUCxNQUFBLEVBQU87SUFDaEIsT0FBTy9QLElBQUE7RUFDVDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVFBMkcsUUFBUTVCLElBQUEsRUFBTVgsS0FBQSxFQUFPUSxHQUFBLEVBQUtvTCxPQUFBLEVBQVM7SUFDakMsSUFBSSxLQUFLelMsT0FBQSxDQUFRZSxTQUFBLEVBQVc7TUFDMUIsTUFBTTJSLEVBQUEsR0FBSyxLQUFLMVMsT0FBQSxDQUFRZ0IsWUFBQSxHQUFleVIsT0FBQSxDQUFRRSxJQUFBLENBQUt0TCxHQUFHO01BQ3ZELE9BQU8sS0FBS1IsS0FBSyxRQUFRNkwsRUFBRSxLQUFLbEwsSUFBSSxNQUFNWCxLQUFLO0FBQUE7SUFDakQ7SUFHQSxPQUFPLEtBQUtBLEtBQUssSUFBSVcsSUFBSSxNQUFNWCxLQUFLO0FBQUE7RUFDdEM7RUFFQTBDLEdBQUEsRUFBSztJQUNILE9BQU8sS0FBS3ZKLE9BQUEsQ0FBUTRCLEtBQUEsR0FBUSxZQUFZO0VBQzFDO0VBRUErSCxLQUFLaUosSUFBQSxFQUFNcEksT0FBQSxFQUFTQyxLQUFBLEVBQU87SUFDekIsTUFBTTdDLElBQUEsR0FBTzRDLE9BQUEsR0FBVSxPQUFPO01BQzVCcUksUUFBQSxHQUFZckksT0FBQSxJQUFXQyxLQUFBLEtBQVUsSUFBTSxhQUFhQSxLQUFBLEdBQVEsTUFBTztJQUNyRSxPQUFPLE1BQU03QyxJQUFBLEdBQU9pTCxRQUFBLEdBQVcsUUFBUUQsSUFBQSxHQUFPLE9BQU9oTCxJQUFBLEdBQU87RUFDOUQ7RUFBQTtBQUFBO0FBQUE7RUFLQWtMLFNBQVN0TCxJQUFBLEVBQU07SUFDYixPQUFPLE9BQU9BLElBQUk7QUFBQTtFQUNwQjtFQUVBdUwsU0FBU3ZILE9BQUEsRUFBUztJQUNoQixPQUFPLGFBQ0ZBLE9BQUEsR0FBVSxnQkFBZ0IsTUFDM0IsaUNBQ0MsS0FBS3hMLE9BQUEsQ0FBUTRCLEtBQUEsR0FBUSxPQUFPLE1BQzdCO0VBQ047RUFBQTtBQUFBO0FBQUE7RUFLQTZLLFVBQVVqRixJQUFBLEVBQU07SUFDZCxPQUFPLE1BQU1BLElBQUk7QUFBQTtFQUNuQjtFQUFBO0FBQUE7QUFBQTtBQUFBO0VBTUF5RSxNQUFNRSxNQUFBLEVBQVF5RyxJQUFBLEVBQU07SUFDbEIsSUFBSUEsSUFBQSxFQUFNQSxJQUFBLEdBQU8sVUFBVUEsSUFBSTtJQUUvQixPQUFPLHVCQUVIekcsTUFBQSxHQUNBLGVBQ0F5RyxJQUFBLEdBQ0E7RUFDTjtFQUFBO0FBQUE7QUFBQTtFQUtBSSxTQUFTQyxPQUFBLEVBQVM7SUFDaEIsT0FBTztBQUFBLEVBQVNBLE9BQU87QUFBQTtFQUN6QjtFQUVBQyxVQUFVRCxPQUFBLEVBQVNFLEtBQUEsRUFBTztJQUN4QixNQUFNdkwsSUFBQSxHQUFPdUwsS0FBQSxDQUFNaEgsTUFBQSxHQUFTLE9BQU87SUFDbkMsTUFBTUgsR0FBQSxHQUFNbUgsS0FBQSxDQUFNL0csS0FBQSxHQUNkLElBQUl4RSxJQUFJLFdBQVd1TCxLQUFBLENBQU0vRyxLQUFLLE9BQzlCLElBQUl4RSxJQUFJO0lBQ1osT0FBT29FLEdBQUEsR0FBTWlILE9BQUEsR0FBVSxLQUFLckwsSUFBSTtBQUFBO0VBQ2xDO0VBQUE7QUFBQTtBQUFBO0FBQUE7RUFNQW1JLE9BQU92SSxJQUFBLEVBQU07SUFDWCxPQUFPLFdBQVdBLElBQUk7RUFDeEI7RUFBQTtBQUFBO0FBQUE7RUFLQTJJLEdBQUczSSxJQUFBLEVBQU07SUFDUCxPQUFPLE9BQU9BLElBQUk7RUFDcEI7RUFBQTtBQUFBO0FBQUE7RUFLQTJHLFNBQVMzRyxJQUFBLEVBQU07SUFDYixPQUFPLFNBQVNBLElBQUk7RUFDdEI7RUFFQThHLEdBQUEsRUFBSztJQUNILE9BQU8sS0FBS3RPLE9BQUEsQ0FBUTRCLEtBQUEsR0FBUSxVQUFVO0VBQ3hDO0VBQUE7QUFBQTtBQUFBO0VBS0EyTSxJQUFJL0csSUFBQSxFQUFNO0lBQ1IsT0FBTyxRQUFRQSxJQUFJO0VBQ3JCO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU9BSixLQUFLakQsSUFBQSxFQUFNb0QsS0FBQSxFQUFPQyxJQUFBLEVBQU07SUFDdEJyRCxJQUFBLEdBQU9GLFFBQUEsQ0FBUyxLQUFLakUsT0FBQSxDQUFRdUIsUUFBQSxFQUFVLEtBQUt2QixPQUFBLENBQVFXLE9BQUEsRUFBU3dELElBQUk7SUFDakUsSUFBSUEsSUFBQSxLQUFTLE1BQU07TUFDakIsT0FBT3FELElBQUE7SUFDVDtJQUNBLElBQUk2SSxHQUFBLEdBQU0sY0FBY2xNLElBQUEsR0FBTztJQUMvQixJQUFJb0QsS0FBQSxFQUFPO01BQ1Q4SSxHQUFBLElBQU8sYUFBYTlJLEtBQUEsR0FBUTtJQUM5QjtJQUNBOEksR0FBQSxJQUFPLE1BQU03SSxJQUFBLEdBQU87SUFDcEIsT0FBTzZJLEdBQUE7RUFDVDtFQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFPQStDLE1BQU1qUCxJQUFBLEVBQU1vRCxLQUFBLEVBQU9DLElBQUEsRUFBTTtJQUN2QnJELElBQUEsR0FBT0YsUUFBQSxDQUFTLEtBQUtqRSxPQUFBLENBQVF1QixRQUFBLEVBQVUsS0FBS3ZCLE9BQUEsQ0FBUVcsT0FBQSxFQUFTd0QsSUFBSTtJQUNqRSxJQUFJQSxJQUFBLEtBQVMsTUFBTTtNQUNqQixPQUFPcUQsSUFBQTtJQUNUO0lBRUEsSUFBSTZJLEdBQUEsR0FBTSxhQUFhbE0sSUFBSSxVQUFVcUQsSUFBSTtJQUN6QyxJQUFJRCxLQUFBLEVBQU87TUFDVDhJLEdBQUEsSUFBTyxXQUFXOUksS0FBSztJQUN6QjtJQUNBOEksR0FBQSxJQUFPLEtBQUtyUSxPQUFBLENBQVE0QixLQUFBLEdBQVEsT0FBTztJQUNuQyxPQUFPeU8sR0FBQTtFQUNUO0VBRUE3SSxLQUFLQSxJQUFBLEVBQU07SUFDVCxPQUFPQSxJQUFBO0VBQ1Q7QUFDRjtBQU1BLElBQU05SCxZQUFBLEdBQU4sTUFBbUI7RUFBQTtFQUVqQnFRLE9BQU92SSxJQUFBLEVBQU07SUFDWCxPQUFPQSxJQUFBO0VBQ1Q7RUFFQTJJLEdBQUczSSxJQUFBLEVBQU07SUFDUCxPQUFPQSxJQUFBO0VBQ1Q7RUFFQTJHLFNBQVMzRyxJQUFBLEVBQU07SUFDYixPQUFPQSxJQUFBO0VBQ1Q7RUFFQStHLElBQUkvRyxJQUFBLEVBQU07SUFDUixPQUFPQSxJQUFBO0VBQ1Q7RUFFQS9FLEtBQUsrRSxJQUFBLEVBQU07SUFDVCxPQUFPQSxJQUFBO0VBQ1Q7RUFFQUEsS0FBS0EsSUFBQSxFQUFNO0lBQ1QsT0FBT0EsSUFBQTtFQUNUO0VBRUFKLEtBQUtqRCxJQUFBLEVBQU1vRCxLQUFBLEVBQU9DLElBQUEsRUFBTTtJQUN0QixPQUFPLEtBQUtBLElBQUE7RUFDZDtFQUVBNEwsTUFBTWpQLElBQUEsRUFBTW9ELEtBQUEsRUFBT0MsSUFBQSxFQUFNO0lBQ3ZCLE9BQU8sS0FBS0EsSUFBQTtFQUNkO0VBRUE4RyxHQUFBLEVBQUs7SUFDSCxPQUFPO0VBQ1Q7QUFDRjtBQUtBLElBQU03TyxPQUFBLEdBQU4sTUFBYztFQUNaOEksWUFBQSxFQUFjO0lBQ1osS0FBSzhLLElBQUEsR0FBTyxDQUFDO0VBQ2Y7RUFBQTtBQUFBO0FBQUE7RUFLQUMsVUFBVUMsS0FBQSxFQUFPO0lBQ2YsT0FBT0EsS0FBQSxDQUNKdFEsV0FBQSxDQUFZLEVBQ1o4QyxJQUFBLENBQUssRUFFTG5ELE9BQUEsQ0FBUSxtQkFBbUIsRUFBRSxFQUU3QkEsT0FBQSxDQUFRLGlFQUFpRSxFQUFFLEVBQzNFQSxPQUFBLENBQVEsT0FBTyxHQUFHO0VBQ3ZCO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQU9BNFEsZ0JBQWdCQyxZQUFBLEVBQWNDLFFBQUEsRUFBVTtJQUN0QyxJQUFJZixJQUFBLEdBQU9jLFlBQUE7SUFDWCxJQUFJRSxvQkFBQSxHQUF1QjtJQUMzQixJQUFJLEtBQUtOLElBQUEsQ0FBS08sY0FBQSxDQUFlakIsSUFBSSxHQUFHO01BQ2xDZ0Isb0JBQUEsR0FBdUIsS0FBS04sSUFBQSxDQUFLSSxZQUFZO01BQzdDLEdBQUc7UUFDREUsb0JBQUE7UUFDQWhCLElBQUEsR0FBT2MsWUFBQSxHQUFlLE1BQU1FLG9CQUFBO01BQzlCLFNBQVMsS0FBS04sSUFBQSxDQUFLTyxjQUFBLENBQWVqQixJQUFJO0lBQ3hDO0lBQ0EsSUFBSSxDQUFDZSxRQUFBLEVBQVU7TUFDYixLQUFLTCxJQUFBLENBQUtJLFlBQVksSUFBSUUsb0JBQUE7TUFDMUIsS0FBS04sSUFBQSxDQUFLVixJQUFJLElBQUk7SUFDcEI7SUFDQSxPQUFPQSxJQUFBO0VBQ1Q7RUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7RUFRQUEsS0FBS1ksS0FBQSxFQUFPL0ssUUFBQSxHQUFVLENBQUMsR0FBRztJQUN4QixNQUFNbUssSUFBQSxHQUFPLEtBQUtXLFNBQUEsQ0FBVUMsS0FBSztJQUNqQyxPQUFPLEtBQUtDLGVBQUEsQ0FBZ0JiLElBQUEsRUFBTW5LLFFBQUEsQ0FBUXFMLE1BQU07RUFDbEQ7QUFDRjtBQUtBLElBQU10VSxNQUFBLEdBQU4sTUFBTXVVLE9BQUEsQ0FBTztFQUNYdkwsWUFBWUMsUUFBQSxFQUFTO0lBQ25CLEtBQUt4SSxPQUFBLEdBQVV3SSxRQUFBLElBQVc1SSxRQUFBO0lBQzFCLEtBQUtJLE9BQUEsQ0FBUXNCLFFBQUEsR0FBVyxLQUFLdEIsT0FBQSxDQUFRc0IsUUFBQSxJQUFZLElBQUk5QixRQUFBLENBQVM7SUFDOUQsS0FBSzhCLFFBQUEsR0FBVyxLQUFLdEIsT0FBQSxDQUFRc0IsUUFBQTtJQUM3QixLQUFLQSxRQUFBLENBQVN0QixPQUFBLEdBQVUsS0FBS0EsT0FBQTtJQUM3QixLQUFLK1QsWUFBQSxHQUFlLElBQUlyVSxZQUFBLENBQWE7SUFDckMsS0FBSytTLE9BQUEsR0FBVSxJQUFJaFQsT0FBQSxDQUFRO0VBQzdCO0VBQUE7QUFBQTtBQUFBO0VBS0EsT0FBT1EsTUFBTTRILE1BQUEsRUFBUVcsUUFBQSxFQUFTO0lBQzVCLE1BQU13TCxPQUFBLEdBQVMsSUFBSUYsT0FBQSxDQUFPdEwsUUFBTztJQUNqQyxPQUFPd0wsT0FBQSxDQUFPL1QsS0FBQSxDQUFNNEgsTUFBTTtFQUM1QjtFQUFBO0FBQUE7QUFBQTtFQUtBLE9BQU8zSCxZQUFZMkgsTUFBQSxFQUFRVyxRQUFBLEVBQVM7SUFDbEMsTUFBTXdMLE9BQUEsR0FBUyxJQUFJRixPQUFBLENBQU90TCxRQUFPO0lBQ2pDLE9BQU93TCxPQUFBLENBQU85VCxXQUFBLENBQVkySCxNQUFNO0VBQ2xDO0VBQUE7QUFBQTtBQUFBO0VBS0E1SCxNQUFNNEgsTUFBQSxFQUFRNEIsR0FBQSxHQUFNLE1BQU07SUFDeEIsSUFBSTRHLEdBQUEsR0FBTTtNQUNSdkssQ0FBQTtNQUNBd0csQ0FBQTtNQUNBQyxDQUFBO01BQ0EwSCxFQUFBO01BQ0FDLEVBQUE7TUFDQTVPLEdBQUE7TUFDQTZPLElBQUE7TUFDQWhJLE1BQUE7TUFDQXlHLElBQUE7TUFDQWpMLEtBQUE7TUFDQTZDLE9BQUE7TUFDQUMsS0FBQTtNQUNBQyxLQUFBO01BQ0EwSixRQUFBO01BQ0FsSSxJQUFBO01BQ0FWLE9BQUE7TUFDQUQsSUFBQTtNQUNBd0gsUUFBQTtNQUNBc0IsR0FBQTtJQUVGLE1BQU05TixDQUFBLEdBQUlzQixNQUFBLENBQU81QixNQUFBO0lBQ2pCLEtBQUtILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBR1QsQ0FBQSxJQUFLO01BQ3RCNkIsS0FBQSxHQUFRRSxNQUFBLENBQU8vQixDQUFDO01BR2hCLElBQUksS0FBSzlGLE9BQUEsQ0FBUWEsVUFBQSxJQUFjLEtBQUtiLE9BQUEsQ0FBUWEsVUFBQSxDQUFXeVQsU0FBQSxJQUFhLEtBQUt0VSxPQUFBLENBQVFhLFVBQUEsQ0FBV3lULFNBQUEsQ0FBVTNNLEtBQUEsQ0FBTUMsSUFBSSxHQUFHO1FBQ2pIeU0sR0FBQSxHQUFNLEtBQUtyVSxPQUFBLENBQVFhLFVBQUEsQ0FBV3lULFNBQUEsQ0FBVTNNLEtBQUEsQ0FBTUMsSUFBSSxFQUFFMEosSUFBQSxDQUFLO1VBQUVuUixNQUFBLEVBQVE7UUFBSyxHQUFHd0gsS0FBSztRQUNoRixJQUFJME0sR0FBQSxLQUFRLFNBQVMsQ0FBQyxDQUFDLFNBQVMsTUFBTSxXQUFXLFFBQVEsU0FBUyxjQUFjLFFBQVEsUUFBUSxhQUFhLE1BQU0sRUFBRWxDLFFBQUEsQ0FBU3hLLEtBQUEsQ0FBTUMsSUFBSSxHQUFHO1VBQ3pJeUksR0FBQSxJQUFPZ0UsR0FBQSxJQUFPO1VBQ2Q7UUFDRjtNQUNGO01BRUEsUUFBUTFNLEtBQUEsQ0FBTUMsSUFBQTtRQUNaLEtBQUs7VUFBUztZQUNaO1VBQ0Y7UUFDQSxLQUFLO1VBQU07WUFDVHlJLEdBQUEsSUFBTyxLQUFLL08sUUFBQSxDQUFTaUksRUFBQSxDQUFHO1lBQ3hCO1VBQ0Y7UUFDQSxLQUFLO1VBQVc7WUFDZDhHLEdBQUEsSUFBTyxLQUFLL08sUUFBQSxDQUFTOEgsT0FBQSxDQUNuQixLQUFLbEosV0FBQSxDQUFZeUgsS0FBQSxDQUFNRSxNQUFNLEdBQzdCRixLQUFBLENBQU0yQixLQUFBLEVBQ054RyxRQUFBLENBQVMsS0FBSzVDLFdBQUEsQ0FBWXlILEtBQUEsQ0FBTUUsTUFBQSxFQUFRLEtBQUtrTSxZQUFZLENBQUMsR0FDMUQsS0FBS3RCLE9BQU87WUFDZDtVQUNGO1FBQ0EsS0FBSztVQUFRO1lBQ1hwQyxHQUFBLElBQU8sS0FBSy9PLFFBQUEsQ0FBU3dILElBQUEsQ0FBS25CLEtBQUEsQ0FBTUgsSUFBQSxFQUM5QkcsS0FBQSxDQUFNc0IsSUFBQSxFQUNOdEIsS0FBQSxDQUFNakMsT0FBTztZQUNmO1VBQ0Y7UUFDQSxLQUFLO1VBQVM7WUFDWnlHLE1BQUEsR0FBUztZQUdUZ0ksSUFBQSxHQUFPO1lBQ1BGLEVBQUEsR0FBS3RNLEtBQUEsQ0FBTXdFLE1BQUEsQ0FBT2xHLE1BQUE7WUFDbEIsS0FBS3FHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkySCxFQUFBLEVBQUkzSCxDQUFBLElBQUs7Y0FDdkI2SCxJQUFBLElBQVEsS0FBSzdTLFFBQUEsQ0FBUzRSLFNBQUEsQ0FDcEIsS0FBS2hULFdBQUEsQ0FBWXlILEtBQUEsQ0FBTXdFLE1BQUEsQ0FBT0csQ0FBQyxFQUFFekUsTUFBTSxHQUN2QztnQkFBRXNFLE1BQUEsRUFBUTtnQkFBTUMsS0FBQSxFQUFPekUsS0FBQSxDQUFNeUUsS0FBQSxDQUFNRSxDQUFDO2NBQUUsQ0FDeEM7WUFDRjtZQUNBSCxNQUFBLElBQVUsS0FBSzdLLFFBQUEsQ0FBUzBSLFFBQUEsQ0FBU21CLElBQUk7WUFFckN2QixJQUFBLEdBQU87WUFDUHFCLEVBQUEsR0FBS3RNLEtBQUEsQ0FBTTBFLElBQUEsQ0FBS3BHLE1BQUE7WUFDaEIsS0FBS3FHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkySCxFQUFBLEVBQUkzSCxDQUFBLElBQUs7Y0FDdkJoSCxHQUFBLEdBQU1xQyxLQUFBLENBQU0wRSxJQUFBLENBQUtDLENBQUM7Y0FFbEI2SCxJQUFBLEdBQU87Y0FDUEQsRUFBQSxHQUFLNU8sR0FBQSxDQUFJVyxNQUFBO2NBQ1QsS0FBS3NHLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUkySCxFQUFBLEVBQUkzSCxDQUFBLElBQUs7Z0JBQ3ZCNEgsSUFBQSxJQUFRLEtBQUs3UyxRQUFBLENBQVM0UixTQUFBLENBQ3BCLEtBQUtoVCxXQUFBLENBQVlvRixHQUFBLENBQUlpSCxDQUFDLEVBQUUxRSxNQUFNLEdBQzlCO2tCQUFFc0UsTUFBQSxFQUFRO2tCQUFPQyxLQUFBLEVBQU96RSxLQUFBLENBQU15RSxLQUFBLENBQU1HLENBQUM7Z0JBQUUsQ0FDekM7Y0FDRjtjQUVBcUcsSUFBQSxJQUFRLEtBQUt0UixRQUFBLENBQVMwUixRQUFBLENBQVNtQixJQUFJO1lBQ3JDO1lBQ0E5RCxHQUFBLElBQU8sS0FBSy9PLFFBQUEsQ0FBUzJLLEtBQUEsQ0FBTUUsTUFBQSxFQUFReUcsSUFBSTtZQUN2QztVQUNGO1FBQ0EsS0FBSztVQUFjO1lBQ2pCQSxJQUFBLEdBQU8sS0FBSzNTLEtBQUEsQ0FBTTBILEtBQUEsQ0FBTUUsTUFBTTtZQUM5QndJLEdBQUEsSUFBTyxLQUFLL08sUUFBQSxDQUFTa0ksVUFBQSxDQUFXb0osSUFBSTtZQUNwQztVQUNGO1FBQ0EsS0FBSztVQUFRO1lBQ1hwSSxPQUFBLEdBQVU3QyxLQUFBLENBQU02QyxPQUFBO1lBQ2hCQyxLQUFBLEdBQVE5QyxLQUFBLENBQU04QyxLQUFBO1lBQ2RDLEtBQUEsR0FBUS9DLEtBQUEsQ0FBTStDLEtBQUE7WUFDZHVKLEVBQUEsR0FBS3RNLEtBQUEsQ0FBTWdELEtBQUEsQ0FBTTFFLE1BQUE7WUFFakIyTSxJQUFBLEdBQU87WUFDUCxLQUFLdEcsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTJILEVBQUEsRUFBSTNILENBQUEsSUFBSztjQUN2QkosSUFBQSxHQUFPdkUsS0FBQSxDQUFNZ0QsS0FBQSxDQUFNMkIsQ0FBQztjQUNwQmQsT0FBQSxHQUFVVSxJQUFBLENBQUtWLE9BQUE7Y0FDZkQsSUFBQSxHQUFPVyxJQUFBLENBQUtYLElBQUE7Y0FFWjZJLFFBQUEsR0FBVztjQUNYLElBQUlsSSxJQUFBLENBQUtYLElBQUEsRUFBTTtnQkFDYndILFFBQUEsR0FBVyxLQUFLelIsUUFBQSxDQUFTeVIsUUFBQSxDQUFTdkgsT0FBTztnQkFDekMsSUFBSWQsS0FBQSxFQUFPO2tCQUNULElBQUl3QixJQUFBLENBQUtyRSxNQUFBLENBQU81QixNQUFBLEdBQVMsS0FBS2lHLElBQUEsQ0FBS3JFLE1BQUEsQ0FBTyxDQUFDLEVBQUVELElBQUEsS0FBUyxhQUFhO29CQUNqRXNFLElBQUEsQ0FBS3JFLE1BQUEsQ0FBTyxDQUFDLEVBQUVMLElBQUEsR0FBT3VMLFFBQUEsR0FBVyxNQUFNN0csSUFBQSxDQUFLckUsTUFBQSxDQUFPLENBQUMsRUFBRUwsSUFBQTtvQkFDdEQsSUFBSTBFLElBQUEsQ0FBS3JFLE1BQUEsQ0FBTyxDQUFDLEVBQUVBLE1BQUEsSUFBVXFFLElBQUEsQ0FBS3JFLE1BQUEsQ0FBTyxDQUFDLEVBQUVBLE1BQUEsQ0FBTzVCLE1BQUEsR0FBUyxLQUFLaUcsSUFBQSxDQUFLckUsTUFBQSxDQUFPLENBQUMsRUFBRUEsTUFBQSxDQUFPLENBQUMsRUFBRUQsSUFBQSxLQUFTLFFBQVE7c0JBQ3pHc0UsSUFBQSxDQUFLckUsTUFBQSxDQUFPLENBQUMsRUFBRUEsTUFBQSxDQUFPLENBQUMsRUFBRUwsSUFBQSxHQUFPdUwsUUFBQSxHQUFXLE1BQU03RyxJQUFBLENBQUtyRSxNQUFBLENBQU8sQ0FBQyxFQUFFQSxNQUFBLENBQU8sQ0FBQyxFQUFFTCxJQUFBO29CQUM1RTtrQkFDRixPQUFPO29CQUNMMEUsSUFBQSxDQUFLckUsTUFBQSxDQUFPME0sT0FBQSxDQUFRO3NCQUNsQjNNLElBQUEsRUFBTTtzQkFDTkosSUFBQSxFQUFNdUw7b0JBQ1IsQ0FBQztrQkFDSDtnQkFDRixPQUFPO2tCQUNMcUIsUUFBQSxJQUFZckIsUUFBQTtnQkFDZDtjQUNGO2NBRUFxQixRQUFBLElBQVksS0FBS25VLEtBQUEsQ0FBTWlNLElBQUEsQ0FBS3JFLE1BQUEsRUFBUTZDLEtBQUs7Y0FDekNrSSxJQUFBLElBQVEsS0FBS3RSLFFBQUEsQ0FBU3dSLFFBQUEsQ0FBU3NCLFFBQUEsRUFBVTdJLElBQUEsRUFBTUMsT0FBTztZQUN4RDtZQUVBNkUsR0FBQSxJQUFPLEtBQUsvTyxRQUFBLENBQVNxSSxJQUFBLENBQUtpSixJQUFBLEVBQU1wSSxPQUFBLEVBQVNDLEtBQUs7WUFDOUM7VUFDRjtRQUNBLEtBQUs7VUFBUTtZQUNYNEYsR0FBQSxJQUFPLEtBQUsvTyxRQUFBLENBQVNtQixJQUFBLENBQUtrRixLQUFBLENBQU1ILElBQUEsRUFBTUcsS0FBQSxDQUFNaUIsS0FBSztZQUNqRDtVQUNGO1FBQ0EsS0FBSztVQUFhO1lBQ2hCeUgsR0FBQSxJQUFPLEtBQUsvTyxRQUFBLENBQVNtTCxTQUFBLENBQVUsS0FBS3ZNLFdBQUEsQ0FBWXlILEtBQUEsQ0FBTUUsTUFBTSxDQUFDO1lBQzdEO1VBQ0Y7UUFDQSxLQUFLO1VBQVE7WUFDWCtLLElBQUEsR0FBT2pMLEtBQUEsQ0FBTUUsTUFBQSxHQUFTLEtBQUszSCxXQUFBLENBQVl5SCxLQUFBLENBQU1FLE1BQU0sSUFBSUYsS0FBQSxDQUFNSCxJQUFBO1lBQzdELE9BQU8xQixDQUFBLEdBQUksSUFBSVMsQ0FBQSxJQUFLc0IsTUFBQSxDQUFPL0IsQ0FBQSxHQUFJLENBQUMsRUFBRThCLElBQUEsS0FBUyxRQUFRO2NBQ2pERCxLQUFBLEdBQVFFLE1BQUEsQ0FBTyxFQUFFL0IsQ0FBQztjQUNsQjhNLElBQUEsSUFBUSxRQUFRakwsS0FBQSxDQUFNRSxNQUFBLEdBQVMsS0FBSzNILFdBQUEsQ0FBWXlILEtBQUEsQ0FBTUUsTUFBTSxJQUFJRixLQUFBLENBQU1ILElBQUE7WUFDeEU7WUFDQTZJLEdBQUEsSUFBTzVHLEdBQUEsR0FBTSxLQUFLbkksUUFBQSxDQUFTbUwsU0FBQSxDQUFVbUcsSUFBSSxJQUFJQSxJQUFBO1lBQzdDO1VBQ0Y7UUFFQTtVQUFTO1lBQ1AsTUFBTWQsTUFBQSxHQUFTLGlCQUFpQm5LLEtBQUEsQ0FBTUMsSUFBQSxHQUFPO1lBQzdDLElBQUksS0FBSzVILE9BQUEsQ0FBUXlCLE1BQUEsRUFBUTtjQUN2QnVGLE9BQUEsQ0FBUStLLEtBQUEsQ0FBTUQsTUFBTTtjQUNwQjtZQUNGLE9BQU87Y0FDTCxNQUFNLElBQUlFLEtBQUEsQ0FBTUYsTUFBTTtZQUN4QjtVQUNGO01BQ0Y7SUFDRjtJQUVBLE9BQU96QixHQUFBO0VBQ1Q7RUFBQTtBQUFBO0FBQUE7RUFLQW5RLFlBQVkySCxNQUFBLEVBQVF2RyxRQUFBLEVBQVU7SUFDNUJBLFFBQUEsR0FBV0EsUUFBQSxJQUFZLEtBQUtBLFFBQUE7SUFDNUIsSUFBSStPLEdBQUEsR0FBTTtNQUNSdkssQ0FBQTtNQUNBNkIsS0FBQTtNQUNBME0sR0FBQTtJQUVGLE1BQU05TixDQUFBLEdBQUlzQixNQUFBLENBQU81QixNQUFBO0lBQ2pCLEtBQUtILENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlTLENBQUEsRUFBR1QsQ0FBQSxJQUFLO01BQ3RCNkIsS0FBQSxHQUFRRSxNQUFBLENBQU8vQixDQUFDO01BR2hCLElBQUksS0FBSzlGLE9BQUEsQ0FBUWEsVUFBQSxJQUFjLEtBQUtiLE9BQUEsQ0FBUWEsVUFBQSxDQUFXeVQsU0FBQSxJQUFhLEtBQUt0VSxPQUFBLENBQVFhLFVBQUEsQ0FBV3lULFNBQUEsQ0FBVTNNLEtBQUEsQ0FBTUMsSUFBSSxHQUFHO1FBQ2pIeU0sR0FBQSxHQUFNLEtBQUtyVSxPQUFBLENBQVFhLFVBQUEsQ0FBV3lULFNBQUEsQ0FBVTNNLEtBQUEsQ0FBTUMsSUFBSSxFQUFFMEosSUFBQSxDQUFLO1VBQUVuUixNQUFBLEVBQVE7UUFBSyxHQUFHd0gsS0FBSztRQUNoRixJQUFJME0sR0FBQSxLQUFRLFNBQVMsQ0FBQyxDQUFDLFVBQVUsUUFBUSxRQUFRLFNBQVMsVUFBVSxNQUFNLFlBQVksTUFBTSxPQUFPLE1BQU0sRUFBRWxDLFFBQUEsQ0FBU3hLLEtBQUEsQ0FBTUMsSUFBSSxHQUFHO1VBQy9IeUksR0FBQSxJQUFPZ0UsR0FBQSxJQUFPO1VBQ2Q7UUFDRjtNQUNGO01BRUEsUUFBUTFNLEtBQUEsQ0FBTUMsSUFBQTtRQUNaLEtBQUs7VUFBVTtZQUNieUksR0FBQSxJQUFPL08sUUFBQSxDQUFTa0csSUFBQSxDQUFLRyxLQUFBLENBQU1ILElBQUk7WUFDL0I7VUFDRjtRQUNBLEtBQUs7VUFBUTtZQUNYNkksR0FBQSxJQUFPL08sUUFBQSxDQUFTbUIsSUFBQSxDQUFLa0YsS0FBQSxDQUFNSCxJQUFJO1lBQy9CO1VBQ0Y7UUFDQSxLQUFLO1VBQVE7WUFDWDZJLEdBQUEsSUFBTy9PLFFBQUEsQ0FBUzhGLElBQUEsQ0FBS08sS0FBQSxDQUFNeEQsSUFBQSxFQUFNd0QsS0FBQSxDQUFNSixLQUFBLEVBQU8sS0FBS3JILFdBQUEsQ0FBWXlILEtBQUEsQ0FBTUUsTUFBQSxFQUFRdkcsUUFBUSxDQUFDO1lBQ3RGO1VBQ0Y7UUFDQSxLQUFLO1VBQVM7WUFDWitPLEdBQUEsSUFBTy9PLFFBQUEsQ0FBUzhSLEtBQUEsQ0FBTXpMLEtBQUEsQ0FBTXhELElBQUEsRUFBTXdELEtBQUEsQ0FBTUosS0FBQSxFQUFPSSxLQUFBLENBQU1ILElBQUk7WUFDekQ7VUFDRjtRQUNBLEtBQUs7VUFBVTtZQUNiNkksR0FBQSxJQUFPL08sUUFBQSxDQUFTeU8sTUFBQSxDQUFPLEtBQUs3UCxXQUFBLENBQVl5SCxLQUFBLENBQU1FLE1BQUEsRUFBUXZHLFFBQVEsQ0FBQztZQUMvRDtVQUNGO1FBQ0EsS0FBSztVQUFNO1lBQ1QrTyxHQUFBLElBQU8vTyxRQUFBLENBQVM2TyxFQUFBLENBQUcsS0FBS2pRLFdBQUEsQ0FBWXlILEtBQUEsQ0FBTUUsTUFBQSxFQUFRdkcsUUFBUSxDQUFDO1lBQzNEO1VBQ0Y7UUFDQSxLQUFLO1VBQVk7WUFDZitPLEdBQUEsSUFBTy9PLFFBQUEsQ0FBUzZNLFFBQUEsQ0FBU3hHLEtBQUEsQ0FBTUgsSUFBSTtZQUNuQztVQUNGO1FBQ0EsS0FBSztVQUFNO1lBQ1Q2SSxHQUFBLElBQU8vTyxRQUFBLENBQVNnTixFQUFBLENBQUc7WUFDbkI7VUFDRjtRQUNBLEtBQUs7VUFBTztZQUNWK0IsR0FBQSxJQUFPL08sUUFBQSxDQUFTaU4sR0FBQSxDQUFJLEtBQUtyTyxXQUFBLENBQVl5SCxLQUFBLENBQU1FLE1BQUEsRUFBUXZHLFFBQVEsQ0FBQztZQUM1RDtVQUNGO1FBQ0EsS0FBSztVQUFRO1lBQ1grTyxHQUFBLElBQU8vTyxRQUFBLENBQVNrRyxJQUFBLENBQUtHLEtBQUEsQ0FBTUgsSUFBSTtZQUMvQjtVQUNGO1FBQ0E7VUFBUztZQUNQLE1BQU1zSyxNQUFBLEdBQVMsaUJBQWlCbkssS0FBQSxDQUFNQyxJQUFBLEdBQU87WUFDN0MsSUFBSSxLQUFLNUgsT0FBQSxDQUFReUIsTUFBQSxFQUFRO2NBQ3ZCdUYsT0FBQSxDQUFRK0ssS0FBQSxDQUFNRCxNQUFNO2NBQ3BCO1lBQ0YsT0FBTztjQUNMLE1BQU0sSUFBSUUsS0FBQSxDQUFNRixNQUFNO1lBQ3hCO1VBQ0Y7TUFDRjtJQUNGO0lBQ0EsT0FBT3pCLEdBQUE7RUFDVDtBQUNGO0FBRUEsSUFBTWpSLEtBQUEsR0FBTixNQUFZO0VBQ1ZtSixZQUFZQyxRQUFBLEVBQVM7SUFDbkIsS0FBS3hJLE9BQUEsR0FBVXdJLFFBQUEsSUFBVzVJLFFBQUE7RUFDNUI7RUFFQSxPQUFPNFUsZ0JBQUEsR0FBbUIsbUJBQUlDLEdBQUEsQ0FBSSxDQUNoQyxjQUNBLGNBQ0Q7RUFBQTtBQUFBO0FBQUE7RUFLREMsV0FBV0MsUUFBQSxFQUFVO0lBQ25CLE9BQU9BLFFBQUE7RUFDVDtFQUFBO0FBQUE7QUFBQTtFQUtBQyxZQUFZblMsSUFBQSxFQUFNO0lBQ2hCLE9BQU9BLElBQUE7RUFDVDtBQUNGO0FBRUEsSUFBTW5ELE1BQUEsR0FBTixNQUFhO0VBQ1hNLFFBQUEsR0FBV0MsV0FBQSxDQUFZO0VBQ3ZCRyxPQUFBLEdBQVUsS0FBS0ksVUFBQTtFQUVmSCxLQUFBLEdBQVEsS0FBSyxDQUFBNFUsYUFBQSxDQUFleFYsS0FBQSxDQUFNd1IsR0FBQSxFQUFLdFIsTUFBQSxDQUFPVSxLQUFLO0VBQ25EQyxXQUFBLEdBQWMsS0FBSyxDQUFBMlUsYUFBQSxDQUFleFYsS0FBQSxDQUFNeVIsU0FBQSxFQUFXdlIsTUFBQSxDQUFPVyxXQUFXO0VBRXJFWCxNQUFBLEdBQVNBLE1BQUE7RUFDVFksTUFBQSxHQUFTWixNQUFBLENBQU9VLEtBQUE7RUFDaEJULFFBQUEsR0FBV0EsUUFBQTtFQUNYRSxZQUFBLEdBQWVBLFlBQUE7RUFDZkwsS0FBQSxHQUFRQSxLQUFBO0VBQ1JTLEtBQUEsR0FBUVQsS0FBQSxDQUFNd1IsR0FBQTtFQUNkbFIsU0FBQSxHQUFZQSxTQUFBO0VBQ1pGLE9BQUEsR0FBVUEsT0FBQTtFQUNWTCxLQUFBLEdBQVFBLEtBQUE7RUFFUm1KLFlBQUEsR0FBZXVNLElBQUEsRUFBTTtJQUNuQixLQUFLelUsR0FBQSxDQUFJLEdBQUd5VSxJQUFJO0VBQ2xCO0VBRUF4VSxXQUFXdUgsTUFBQSxFQUFRZCxRQUFBLEVBQVU7SUFDM0IsSUFBSWdPLE1BQUEsR0FBUyxFQUFDO0lBQ2QsV0FBV3BOLEtBQUEsSUFBU0UsTUFBQSxFQUFRO01BQzFCa04sTUFBQSxHQUFTQSxNQUFBLENBQU9DLE1BQUEsQ0FBT2pPLFFBQUEsQ0FBU3VLLElBQUEsQ0FBSyxNQUFNM0osS0FBSyxDQUFDO01BQ2pELFFBQVFBLEtBQUEsQ0FBTUMsSUFBQTtRQUNaLEtBQUs7VUFBUztZQUNaLFdBQVd1TSxJQUFBLElBQVF4TSxLQUFBLENBQU13RSxNQUFBLEVBQVE7Y0FDL0I0SSxNQUFBLEdBQVNBLE1BQUEsQ0FBT0MsTUFBQSxDQUFPLEtBQUsxVSxVQUFBLENBQVc2VCxJQUFBLENBQUt0TSxNQUFBLEVBQVFkLFFBQVEsQ0FBQztZQUMvRDtZQUNBLFdBQVd6QixHQUFBLElBQU9xQyxLQUFBLENBQU0wRSxJQUFBLEVBQU07Y0FDNUIsV0FBVzhILElBQUEsSUFBUTdPLEdBQUEsRUFBSztnQkFDdEJ5UCxNQUFBLEdBQVNBLE1BQUEsQ0FBT0MsTUFBQSxDQUFPLEtBQUsxVSxVQUFBLENBQVc2VCxJQUFBLENBQUt0TSxNQUFBLEVBQVFkLFFBQVEsQ0FBQztjQUMvRDtZQUNGO1lBQ0E7VUFDRjtRQUNBLEtBQUs7VUFBUTtZQUNYZ08sTUFBQSxHQUFTQSxNQUFBLENBQU9DLE1BQUEsQ0FBTyxLQUFLMVUsVUFBQSxDQUFXcUgsS0FBQSxDQUFNZ0QsS0FBQSxFQUFPNUQsUUFBUSxDQUFDO1lBQzdEO1VBQ0Y7UUFDQTtVQUFTO1lBQ1AsSUFBSSxLQUFLbkgsUUFBQSxDQUFTaUIsVUFBQSxJQUFjLEtBQUtqQixRQUFBLENBQVNpQixVQUFBLENBQVdvVSxXQUFBLElBQWUsS0FBS3JWLFFBQUEsQ0FBU2lCLFVBQUEsQ0FBV29VLFdBQUEsQ0FBWXROLEtBQUEsQ0FBTUMsSUFBSSxHQUFHO2NBQ3hILEtBQUtoSSxRQUFBLENBQVNpQixVQUFBLENBQVdvVSxXQUFBLENBQVl0TixLQUFBLENBQU1DLElBQUksRUFBRWdLLE9BQUEsQ0FBU3FELFdBQUEsSUFBZ0I7Z0JBQ3hFRixNQUFBLEdBQVNBLE1BQUEsQ0FBT0MsTUFBQSxDQUFPLEtBQUsxVSxVQUFBLENBQVdxSCxLQUFBLENBQU1zTixXQUFXLEdBQUdsTyxRQUFRLENBQUM7Y0FDdEUsQ0FBQztZQUNILFdBQVdZLEtBQUEsQ0FBTUUsTUFBQSxFQUFRO2NBQ3ZCa04sTUFBQSxHQUFTQSxNQUFBLENBQU9DLE1BQUEsQ0FBTyxLQUFLMVUsVUFBQSxDQUFXcUgsS0FBQSxDQUFNRSxNQUFBLEVBQVFkLFFBQVEsQ0FBQztZQUNoRTtVQUNGO01BQ0Y7SUFDRjtJQUNBLE9BQU9nTyxNQUFBO0VBQ1Q7RUFFQTFVLElBQUEsR0FBT3lVLElBQUEsRUFBTTtJQUNYLE1BQU1qVSxVQUFBLEdBQWEsS0FBS2pCLFFBQUEsQ0FBU2lCLFVBQUEsSUFBYztNQUFFeVQsU0FBQSxFQUFXLENBQUM7TUFBR1csV0FBQSxFQUFhLENBQUM7SUFBRTtJQUVoRkgsSUFBQSxDQUFLbEQsT0FBQSxDQUFTc0QsSUFBQSxJQUFTO01BRXJCLE1BQU1DLElBQUEsR0FBTztRQUFFLEdBQUdEO01BQUs7TUFHdkJDLElBQUEsQ0FBS3pVLEtBQUEsR0FBUSxLQUFLZCxRQUFBLENBQVNjLEtBQUEsSUFBU3lVLElBQUEsQ0FBS3pVLEtBQUEsSUFBUztNQUdsRCxJQUFJd1UsSUFBQSxDQUFLclUsVUFBQSxFQUFZO1FBQ25CcVUsSUFBQSxDQUFLclUsVUFBQSxDQUFXK1EsT0FBQSxDQUFTd0QsR0FBQSxJQUFRO1VBQy9CLElBQUksQ0FBQ0EsR0FBQSxDQUFJeFIsSUFBQSxFQUFNO1lBQ2IsTUFBTSxJQUFJb08sS0FBQSxDQUFNLHlCQUF5QjtVQUMzQztVQUNBLElBQUlvRCxHQUFBLENBQUk5VCxRQUFBLEVBQVU7WUFDaEIsTUFBTStULFlBQUEsR0FBZXhVLFVBQUEsQ0FBV3lULFNBQUEsQ0FBVWMsR0FBQSxDQUFJeFIsSUFBSTtZQUNsRCxJQUFJeVIsWUFBQSxFQUFjO2NBRWhCeFUsVUFBQSxDQUFXeVQsU0FBQSxDQUFVYyxHQUFBLENBQUl4UixJQUFJLElBQUksYUFBWTBSLEtBQUEsRUFBTTtnQkFDakQsSUFBSWpCLEdBQUEsR0FBTWUsR0FBQSxDQUFJOVQsUUFBQSxDQUFTaVUsS0FBQSxDQUFNLE1BQU1ELEtBQUk7Z0JBQ3ZDLElBQUlqQixHQUFBLEtBQVEsT0FBTztrQkFDakJBLEdBQUEsR0FBTWdCLFlBQUEsQ0FBYUUsS0FBQSxDQUFNLE1BQU1ELEtBQUk7Z0JBQ3JDO2dCQUNBLE9BQU9qQixHQUFBO2NBQ1Q7WUFDRixPQUFPO2NBQ0x4VCxVQUFBLENBQVd5VCxTQUFBLENBQVVjLEdBQUEsQ0FBSXhSLElBQUksSUFBSXdSLEdBQUEsQ0FBSTlULFFBQUE7WUFDdkM7VUFDRjtVQUNBLElBQUk4VCxHQUFBLENBQUl6VCxTQUFBLEVBQVc7WUFDakIsSUFBSSxDQUFDeVQsR0FBQSxDQUFJdk8sS0FBQSxJQUFVdU8sR0FBQSxDQUFJdk8sS0FBQSxLQUFVLFdBQVd1TyxHQUFBLENBQUl2TyxLQUFBLEtBQVUsVUFBVztjQUNuRSxNQUFNLElBQUltTCxLQUFBLENBQU0sNkNBQTZDO1lBQy9EO1lBQ0EsSUFBSW5SLFVBQUEsQ0FBV3VVLEdBQUEsQ0FBSXZPLEtBQUssR0FBRztjQUN6QmhHLFVBQUEsQ0FBV3VVLEdBQUEsQ0FBSXZPLEtBQUssRUFBRTBOLE9BQUEsQ0FBUWEsR0FBQSxDQUFJelQsU0FBUztZQUM3QyxPQUFPO2NBQ0xkLFVBQUEsQ0FBV3VVLEdBQUEsQ0FBSXZPLEtBQUssSUFBSSxDQUFDdU8sR0FBQSxDQUFJelQsU0FBUztZQUN4QztZQUNBLElBQUl5VCxHQUFBLENBQUkzSyxLQUFBLEVBQU87Y0FDYixJQUFJMkssR0FBQSxDQUFJdk8sS0FBQSxLQUFVLFNBQVM7Z0JBQ3pCLElBQUloRyxVQUFBLENBQVcwUSxVQUFBLEVBQVk7a0JBQ3pCMVEsVUFBQSxDQUFXMFEsVUFBQSxDQUFXbkwsSUFBQSxDQUFLZ1AsR0FBQSxDQUFJM0ssS0FBSztnQkFDdEMsT0FBTztrQkFDTDVKLFVBQUEsQ0FBVzBRLFVBQUEsR0FBYSxDQUFDNkQsR0FBQSxDQUFJM0ssS0FBSztnQkFDcEM7Y0FDRixXQUFXMkssR0FBQSxDQUFJdk8sS0FBQSxLQUFVLFVBQVU7Z0JBQ2pDLElBQUloRyxVQUFBLENBQVd3UixXQUFBLEVBQWE7a0JBQzFCeFIsVUFBQSxDQUFXd1IsV0FBQSxDQUFZak0sSUFBQSxDQUFLZ1AsR0FBQSxDQUFJM0ssS0FBSztnQkFDdkMsT0FBTztrQkFDTDVKLFVBQUEsQ0FBV3dSLFdBQUEsR0FBYyxDQUFDK0MsR0FBQSxDQUFJM0ssS0FBSztnQkFDckM7Y0FDRjtZQUNGO1VBQ0Y7VUFDQSxJQUFJMkssR0FBQSxDQUFJSCxXQUFBLEVBQWE7WUFDbkJwVSxVQUFBLENBQVdvVSxXQUFBLENBQVlHLEdBQUEsQ0FBSXhSLElBQUksSUFBSXdSLEdBQUEsQ0FBSUgsV0FBQTtVQUN6QztRQUNGLENBQUM7UUFDREUsSUFBQSxDQUFLdFUsVUFBQSxHQUFhQSxVQUFBO01BQ3BCO01BR0EsSUFBSXFVLElBQUEsQ0FBSzVULFFBQUEsRUFBVTtRQUNqQixNQUFNQSxRQUFBLEdBQVcsS0FBSzFCLFFBQUEsQ0FBUzBCLFFBQUEsSUFBWSxJQUFJOUIsUUFBQSxDQUFTLEtBQUtJLFFBQVE7UUFDckUsV0FBVzRWLElBQUEsSUFBUU4sSUFBQSxDQUFLNVQsUUFBQSxFQUFVO1VBQ2hDLE1BQU0rVCxZQUFBLEdBQWUvVCxRQUFBLENBQVNrVSxJQUFJO1VBRWxDbFUsUUFBQSxDQUFTa1UsSUFBSSxJQUFJLElBQUlGLEtBQUEsS0FBUztZQUM1QixJQUFJakIsR0FBQSxHQUFNYSxJQUFBLENBQUs1VCxRQUFBLENBQVNrVSxJQUFJLEVBQUVELEtBQUEsQ0FBTWpVLFFBQUEsRUFBVWdVLEtBQUk7WUFDbEQsSUFBSWpCLEdBQUEsS0FBUSxPQUFPO2NBQ2pCQSxHQUFBLEdBQU1nQixZQUFBLENBQWFFLEtBQUEsQ0FBTWpVLFFBQUEsRUFBVWdVLEtBQUk7WUFDekM7WUFDQSxPQUFPakIsR0FBQTtVQUNUO1FBQ0Y7UUFDQWMsSUFBQSxDQUFLN1QsUUFBQSxHQUFXQSxRQUFBO01BQ2xCO01BQ0EsSUFBSTRULElBQUEsQ0FBS3ZULFNBQUEsRUFBVztRQUNsQixNQUFNQSxTQUFBLEdBQVksS0FBSy9CLFFBQUEsQ0FBUytCLFNBQUEsSUFBYSxJQUFJaEMsU0FBQSxDQUFVLEtBQUtDLFFBQVE7UUFDeEUsV0FBVzRWLElBQUEsSUFBUU4sSUFBQSxDQUFLdlQsU0FBQSxFQUFXO1VBQ2pDLE1BQU04VCxhQUFBLEdBQWdCOVQsU0FBQSxDQUFVNlQsSUFBSTtVQUVwQzdULFNBQUEsQ0FBVTZULElBQUksSUFBSSxJQUFJRixLQUFBLEtBQVM7WUFDN0IsSUFBSWpCLEdBQUEsR0FBTWEsSUFBQSxDQUFLdlQsU0FBQSxDQUFVNlQsSUFBSSxFQUFFRCxLQUFBLENBQU01VCxTQUFBLEVBQVcyVCxLQUFJO1lBQ3BELElBQUlqQixHQUFBLEtBQVEsT0FBTztjQUNqQkEsR0FBQSxHQUFNb0IsYUFBQSxDQUFjRixLQUFBLENBQU01VCxTQUFBLEVBQVcyVCxLQUFJO1lBQzNDO1lBQ0EsT0FBT2pCLEdBQUE7VUFDVDtRQUNGO1FBQ0FjLElBQUEsQ0FBS3hULFNBQUEsR0FBWUEsU0FBQTtNQUNuQjtNQUdBLElBQUl1VCxJQUFBLENBQUtoVSxLQUFBLEVBQU87UUFDZCxNQUFNQSxLQUFBLEdBQVEsS0FBS3RCLFFBQUEsQ0FBU3NCLEtBQUEsSUFBUyxJQUFJOUIsS0FBQSxDQUFNO1FBQy9DLFdBQVdvVyxJQUFBLElBQVFOLElBQUEsQ0FBS2hVLEtBQUEsRUFBTztVQUM3QixNQUFNd1UsUUFBQSxHQUFXeFUsS0FBQSxDQUFNc1UsSUFBSTtVQUMzQixJQUFJcFcsS0FBQSxDQUFNb1YsZ0JBQUEsQ0FBaUJtQixHQUFBLENBQUlILElBQUksR0FBRztZQUNwQ3RVLEtBQUEsQ0FBTXNVLElBQUksSUFBS0ksR0FBQSxJQUFRO2NBQ3JCLElBQUksS0FBS2hXLFFBQUEsQ0FBU2MsS0FBQSxFQUFPO2dCQUN2QixPQUFPbVYsT0FBQSxDQUFRQyxPQUFBLENBQVFaLElBQUEsQ0FBS2hVLEtBQUEsQ0FBTXNVLElBQUksRUFBRWxFLElBQUEsQ0FBS3BRLEtBQUEsRUFBTzBVLEdBQUcsQ0FBQyxFQUFFRyxJQUFBLENBQUtDLElBQUEsSUFBTztrQkFDcEUsT0FBT04sUUFBQSxDQUFTcEUsSUFBQSxDQUFLcFEsS0FBQSxFQUFPOFUsSUFBRztnQkFDakMsQ0FBQztjQUNIO2NBRUEsTUFBTTNCLEdBQUEsR0FBTWEsSUFBQSxDQUFLaFUsS0FBQSxDQUFNc1UsSUFBSSxFQUFFbEUsSUFBQSxDQUFLcFEsS0FBQSxFQUFPMFUsR0FBRztjQUM1QyxPQUFPRixRQUFBLENBQVNwRSxJQUFBLENBQUtwUSxLQUFBLEVBQU9tVCxHQUFHO1lBQ2pDO1VBQ0YsT0FBTztZQUNMblQsS0FBQSxDQUFNc1UsSUFBSSxJQUFJLElBQUlGLEtBQUEsS0FBUztjQUN6QixJQUFJakIsR0FBQSxHQUFNYSxJQUFBLENBQUtoVSxLQUFBLENBQU1zVSxJQUFJLEVBQUVELEtBQUEsQ0FBTXJVLEtBQUEsRUFBT29VLEtBQUk7Y0FDNUMsSUFBSWpCLEdBQUEsS0FBUSxPQUFPO2dCQUNqQkEsR0FBQSxHQUFNcUIsUUFBQSxDQUFTSCxLQUFBLENBQU1yVSxLQUFBLEVBQU9vVSxLQUFJO2NBQ2xDO2NBQ0EsT0FBT2pCLEdBQUE7WUFDVDtVQUNGO1FBQ0Y7UUFDQWMsSUFBQSxDQUFLalUsS0FBQSxHQUFRQSxLQUFBO01BQ2Y7TUFHQSxJQUFJZ1UsSUFBQSxDQUFLNVUsVUFBQSxFQUFZO1FBQ25CLE1BQU0yVixXQUFBLEdBQWEsS0FBS3JXLFFBQUEsQ0FBU1UsVUFBQTtRQUNqQzZVLElBQUEsQ0FBSzdVLFVBQUEsR0FBYSxVQUFTcUgsS0FBQSxFQUFPO1VBQ2hDLElBQUlvTixNQUFBLEdBQVMsRUFBQztVQUNkQSxNQUFBLENBQU8zTyxJQUFBLENBQUs4TyxJQUFBLENBQUs1VSxVQUFBLENBQVdnUixJQUFBLENBQUssTUFBTTNKLEtBQUssQ0FBQztVQUM3QyxJQUFJc08sV0FBQSxFQUFZO1lBQ2RsQixNQUFBLEdBQVNBLE1BQUEsQ0FBT0MsTUFBQSxDQUFPaUIsV0FBQSxDQUFXM0UsSUFBQSxDQUFLLE1BQU0zSixLQUFLLENBQUM7VUFDckQ7VUFDQSxPQUFPb04sTUFBQTtRQUNUO01BQ0Y7TUFFQSxLQUFLblYsUUFBQSxHQUFXO1FBQUUsR0FBRyxLQUFLQSxRQUFBO1FBQVUsR0FBR3VWO01BQUs7SUFDOUMsQ0FBQztJQUVELE9BQU87RUFDVDtFQUVBL1UsV0FBV3NELEdBQUEsRUFBSztJQUNkLEtBQUs5RCxRQUFBLEdBQVc7TUFBRSxHQUFHLEtBQUtBLFFBQUE7TUFBVSxHQUFHOEQ7SUFBSTtJQUMzQyxPQUFPO0VBQ1Q7RUFFQSxDQUFBbVIsYUFBQXFCLENBQWU1TyxNQUFBLEVBQU8wTSxPQUFBLEVBQVE7SUFDNUIsT0FBTyxDQUFDdEwsR0FBQSxFQUFLaEYsR0FBQSxFQUFLcUQsUUFBQSxLQUFhO01BQzdCLElBQUksT0FBT3JELEdBQUEsS0FBUSxZQUFZO1FBQzdCcUQsUUFBQSxHQUFXckQsR0FBQTtRQUNYQSxHQUFBLEdBQU07TUFDUjtNQUVBLE1BQU15UyxPQUFBLEdBQVU7UUFBRSxHQUFHelM7TUFBSTtNQUN6QkEsR0FBQSxHQUFNO1FBQUUsR0FBRyxLQUFLOUQsUUFBQTtRQUFVLEdBQUd1VztNQUFRO01BQ3JDLE1BQU1DLFVBQUEsR0FBYSxLQUFLLENBQUFDLE9BQUEsQ0FBUzNTLEdBQUEsQ0FBSWpDLE1BQUEsRUFBUWlDLEdBQUEsQ0FBSWhELEtBQUEsRUFBT3FHLFFBQVE7TUFHaEUsSUFBSSxPQUFPMkIsR0FBQSxLQUFRLGVBQWVBLEdBQUEsS0FBUSxNQUFNO1FBQzlDLE9BQU8wTixVQUFBLENBQVcsSUFBSXBFLEtBQUEsQ0FBTSxnREFBZ0QsQ0FBQztNQUMvRTtNQUNBLElBQUksT0FBT3RKLEdBQUEsS0FBUSxVQUFVO1FBQzNCLE9BQU8wTixVQUFBLENBQVcsSUFBSXBFLEtBQUEsQ0FBTSwwQ0FDeEJ0QixNQUFBLENBQU80RixTQUFBLENBQVU5RixRQUFBLENBQVNjLElBQUEsQ0FBSzVJLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQztNQUNoRTtNQUVBNUIsaUJBQUEsQ0FBa0JwRCxHQUFBLEVBQUtxRCxRQUFRO01BRS9CLElBQUlyRCxHQUFBLENBQUl4QyxLQUFBLEVBQU87UUFDYndDLEdBQUEsQ0FBSXhDLEtBQUEsQ0FBTWxCLE9BQUEsR0FBVTBELEdBQUE7TUFDdEI7TUFFQSxJQUFJcUQsUUFBQSxFQUFVO1FBQ1osTUFBTTlGLFNBQUEsR0FBWXlDLEdBQUEsQ0FBSXpDLFNBQUE7UUFDdEIsSUFBSTRHLE1BQUE7UUFFSixJQUFJO1VBQ0YsSUFBSW5FLEdBQUEsQ0FBSXhDLEtBQUEsRUFBTztZQUNid0gsR0FBQSxHQUFNaEYsR0FBQSxDQUFJeEMsS0FBQSxDQUFNd1QsVUFBQSxDQUFXaE0sR0FBRztVQUNoQztVQUNBYixNQUFBLEdBQVNQLE1BQUEsQ0FBTW9CLEdBQUEsRUFBS2hGLEdBQUc7UUFDekIsU0FBU1ksQ0FBQSxFQUFHO1VBQ1YsT0FBTzhSLFVBQUEsQ0FBVzlSLENBQUM7UUFDckI7UUFFQSxNQUFNaVMsSUFBQSxHQUFRQyxHQUFBLElBQVE7VUFDcEIsSUFBSW5HLEdBQUE7VUFFSixJQUFJLENBQUNtRyxHQUFBLEVBQUs7WUFDUixJQUFJO2NBQ0YsSUFBSTlTLEdBQUEsQ0FBSXBELFVBQUEsRUFBWTtnQkFDbEIsS0FBS0EsVUFBQSxDQUFXdUgsTUFBQSxFQUFRbkUsR0FBQSxDQUFJcEQsVUFBVTtjQUN4QztjQUNBK1AsR0FBQSxHQUFNMkQsT0FBQSxDQUFPbk0sTUFBQSxFQUFRbkUsR0FBRztjQUN4QixJQUFJQSxHQUFBLENBQUl4QyxLQUFBLEVBQU87Z0JBQ2JtUCxHQUFBLEdBQU0zTSxHQUFBLENBQUl4QyxLQUFBLENBQU0wVCxXQUFBLENBQVl2RSxHQUFHO2NBQ2pDO1lBQ0YsU0FBUy9MLENBQUEsRUFBRztjQUNWa1MsR0FBQSxHQUFNbFMsQ0FBQTtZQUNSO1VBQ0Y7VUFFQVosR0FBQSxDQUFJekMsU0FBQSxHQUFZQSxTQUFBO1VBRWhCLE9BQU91VixHQUFBLEdBQ0hKLFVBQUEsQ0FBV0ksR0FBRyxJQUNkelAsUUFBQSxDQUFTLE1BQU1zSixHQUFHO1FBQ3hCO1FBRUEsSUFBSSxDQUFDcFAsU0FBQSxJQUFhQSxTQUFBLENBQVVnRixNQUFBLEdBQVMsR0FBRztVQUN0QyxPQUFPc1EsSUFBQSxDQUFLO1FBQ2Q7UUFFQSxPQUFPN1MsR0FBQSxDQUFJekMsU0FBQTtRQUVYLElBQUksQ0FBQzRHLE1BQUEsQ0FBTzVCLE1BQUEsRUFBUSxPQUFPc1EsSUFBQSxDQUFLO1FBRWhDLElBQUlFLE9BQUEsR0FBVTtRQUNkLEtBQUtuVyxVQUFBLENBQVd1SCxNQUFBLEVBQVNGLEtBQUEsSUFBVTtVQUNqQyxJQUFJQSxLQUFBLENBQU1DLElBQUEsS0FBUyxRQUFRO1lBQ3pCNk8sT0FBQTtZQUNBQyxVQUFBLENBQVcsTUFBTTtjQUNmelYsU0FBQSxDQUFVMEcsS0FBQSxDQUFNSCxJQUFBLEVBQU1HLEtBQUEsQ0FBTXNCLElBQUEsRUFBTSxDQUFDdU4sR0FBQSxFQUFLMU4sSUFBQSxLQUFTO2dCQUMvQyxJQUFJME4sR0FBQSxFQUFLO2tCQUNQLE9BQU9ELElBQUEsQ0FBS0MsR0FBRztnQkFDakI7Z0JBQ0EsSUFBSTFOLElBQUEsSUFBUSxRQUFRQSxJQUFBLEtBQVNuQixLQUFBLENBQU1ILElBQUEsRUFBTTtrQkFDdkNHLEtBQUEsQ0FBTUgsSUFBQSxHQUFPc0IsSUFBQTtrQkFDYm5CLEtBQUEsQ0FBTWpDLE9BQUEsR0FBVTtnQkFDbEI7Z0JBRUErUSxPQUFBO2dCQUNBLElBQUlBLE9BQUEsS0FBWSxHQUFHO2tCQUNqQkYsSUFBQSxDQUFLO2dCQUNQO2NBQ0YsQ0FBQztZQUNILEdBQUcsQ0FBQztVQUNOO1FBQ0YsQ0FBQztRQUVELElBQUlFLE9BQUEsS0FBWSxHQUFHO1VBQ2pCRixJQUFBLENBQUs7UUFDUDtRQUVBO01BQ0Y7TUFFQSxJQUFJN1MsR0FBQSxDQUFJaEQsS0FBQSxFQUFPO1FBQ2IsT0FBT21WLE9BQUEsQ0FBUUMsT0FBQSxDQUFRcFMsR0FBQSxDQUFJeEMsS0FBQSxHQUFRd0MsR0FBQSxDQUFJeEMsS0FBQSxDQUFNd1QsVUFBQSxDQUFXaE0sR0FBRyxJQUFJQSxHQUFHLEVBQy9EcU4sSUFBQSxDQUFLWSxJQUFBLElBQU9yUCxNQUFBLENBQU1xUCxJQUFBLEVBQUtqVCxHQUFHLENBQUMsRUFDM0JxUyxJQUFBLENBQUtsTyxNQUFBLElBQVVuRSxHQUFBLENBQUlwRCxVQUFBLEdBQWF1VixPQUFBLENBQVFlLEdBQUEsQ0FBSSxLQUFLdFcsVUFBQSxDQUFXdUgsTUFBQSxFQUFRbkUsR0FBQSxDQUFJcEQsVUFBVSxDQUFDLEVBQUV5VixJQUFBLENBQUssTUFBTWxPLE1BQU0sSUFBSUEsTUFBTSxFQUNoSGtPLElBQUEsQ0FBS2xPLE1BQUEsSUFBVW1NLE9BQUEsQ0FBT25NLE1BQUEsRUFBUW5FLEdBQUcsQ0FBQyxFQUNsQ3FTLElBQUEsQ0FBS3RULElBQUEsSUFBUWlCLEdBQUEsQ0FBSXhDLEtBQUEsR0FBUXdDLEdBQUEsQ0FBSXhDLEtBQUEsQ0FBTTBULFdBQUEsQ0FBWW5TLElBQUksSUFBSUEsSUFBSSxFQUMzRG9VLEtBQUEsQ0FBTVQsVUFBVTtNQUNyQjtNQUVBLElBQUk7UUFDRixJQUFJMVMsR0FBQSxDQUFJeEMsS0FBQSxFQUFPO1VBQ2J3SCxHQUFBLEdBQU1oRixHQUFBLENBQUl4QyxLQUFBLENBQU13VCxVQUFBLENBQVdoTSxHQUFHO1FBQ2hDO1FBQ0EsTUFBTWIsTUFBQSxHQUFTUCxNQUFBLENBQU1vQixHQUFBLEVBQUtoRixHQUFHO1FBQzdCLElBQUlBLEdBQUEsQ0FBSXBELFVBQUEsRUFBWTtVQUNsQixLQUFLQSxVQUFBLENBQVd1SCxNQUFBLEVBQVFuRSxHQUFBLENBQUlwRCxVQUFVO1FBQ3hDO1FBQ0EsSUFBSW1DLElBQUEsR0FBT3VSLE9BQUEsQ0FBT25NLE1BQUEsRUFBUW5FLEdBQUc7UUFDN0IsSUFBSUEsR0FBQSxDQUFJeEMsS0FBQSxFQUFPO1VBQ2J1QixJQUFBLEdBQU9pQixHQUFBLENBQUl4QyxLQUFBLENBQU0wVCxXQUFBLENBQVluUyxJQUFJO1FBQ25DO1FBQ0EsT0FBT0EsSUFBQTtNQUNULFNBQVM2QixDQUFBLEVBQUc7UUFDVixPQUFPOFIsVUFBQSxDQUFXOVIsQ0FBQztNQUNyQjtJQUNGO0VBQ0Y7RUFFQSxDQUFBK1IsT0FBQVMsQ0FBU3JWLE1BQUEsRUFBUWYsS0FBQSxFQUFPcUcsUUFBQSxFQUFVO0lBQ2hDLE9BQVF6QyxDQUFBLElBQU07TUFDWkEsQ0FBQSxDQUFFeVMsT0FBQSxJQUFXO01BRWIsSUFBSXRWLE1BQUEsRUFBUTtRQUNWLE1BQU11VixHQUFBLEdBQU0sbUNBQ1J4VSxNQUFBLENBQU84QixDQUFBLENBQUV5UyxPQUFBLEdBQVUsSUFBSSxJQUFJLElBQzNCO1FBQ0osSUFBSXJXLEtBQUEsRUFBTztVQUNULE9BQU9tVixPQUFBLENBQVFDLE9BQUEsQ0FBUWtCLEdBQUc7UUFDNUI7UUFDQSxJQUFJalEsUUFBQSxFQUFVO1VBQ1pBLFFBQUEsQ0FBUyxNQUFNaVEsR0FBRztVQUNsQjtRQUNGO1FBQ0EsT0FBT0EsR0FBQTtNQUNUO01BRUEsSUFBSXRXLEtBQUEsRUFBTztRQUNULE9BQU9tVixPQUFBLENBQVFvQixNQUFBLENBQU8zUyxDQUFDO01BQ3pCO01BQ0EsSUFBSXlDLFFBQUEsRUFBVTtRQUNaQSxRQUFBLENBQVN6QyxDQUFDO1FBQ1Y7TUFDRjtNQUNBLE1BQU1BLENBQUE7SUFDUjtFQUNGO0FBQ0Y7QUFFQSxJQUFNNFMsY0FBQSxHQUFpQixJQUFJNVgsTUFBQSxDQUFPTSxRQUFRO0FBSzFDLFNBQVNHLE9BQU8ySSxHQUFBLEVBQUtoRixHQUFBLEVBQUtxRCxRQUFBLEVBQVU7RUFDbEMsT0FBT21RLGNBQUEsQ0FBZWpYLEtBQUEsQ0FBTXlJLEdBQUEsRUFBS2hGLEdBQUEsRUFBS3FELFFBQVE7QUFDaEQ7QUFNQWhILE1BQUEsQ0FBT0MsT0FBQSxHQUNQRCxNQUFBLENBQU9LLFVBQUEsR0FBYSxVQUFTc0QsR0FBQSxFQUFLO0VBQ2hDd1QsY0FBQSxDQUFlOVcsVUFBQSxDQUFXc0QsR0FBRztFQUM3QjNELE1BQUEsQ0FBT0gsUUFBQSxHQUFXc1gsY0FBQSxDQUFldFgsUUFBQTtFQUNqQ2lDLGNBQUEsQ0FBZTlCLE1BQUEsQ0FBT0gsUUFBUTtFQUM5QixPQUFPRyxNQUFBO0FBQ1Q7QUFFQUEsTUFBQSxDQUFPRixXQUFBLEdBQWNBLFdBQUE7QUFFckJFLE1BQUEsQ0FBT0gsUUFBQSxHQUFXQSxRQUFBO0FBTWxCRyxNQUFBLENBQU9NLEdBQUEsR0FBTSxhQUFZeVUsSUFBQSxFQUFNO0VBQzdCb0MsY0FBQSxDQUFlN1csR0FBQSxDQUFJLEdBQUd5VSxJQUFJO0VBQzFCL1UsTUFBQSxDQUFPSCxRQUFBLEdBQVdzWCxjQUFBLENBQWV0WCxRQUFBO0VBQ2pDaUMsY0FBQSxDQUFlOUIsTUFBQSxDQUFPSCxRQUFRO0VBQzlCLE9BQU9HLE1BQUE7QUFDVDtBQU1BQSxNQUFBLENBQU9PLFVBQUEsR0FBYSxVQUFTdUgsTUFBQSxFQUFRZCxRQUFBLEVBQVU7RUFDN0MsT0FBT21RLGNBQUEsQ0FBZTVXLFVBQUEsQ0FBV3VILE1BQUEsRUFBUWQsUUFBUTtBQUNuRDtBQU1BaEgsTUFBQSxDQUFPRyxXQUFBLEdBQWNnWCxjQUFBLENBQWVoWCxXQUFBO0FBS3BDSCxNQUFBLENBQU9SLE1BQUEsR0FBU0EsTUFBQTtBQUNoQlEsTUFBQSxDQUFPSSxNQUFBLEdBQVNaLE1BQUEsQ0FBT1UsS0FBQTtBQUN2QkYsTUFBQSxDQUFPUCxRQUFBLEdBQVdBLFFBQUE7QUFDbEJPLE1BQUEsQ0FBT0wsWUFBQSxHQUFlQSxZQUFBO0FBQ3RCSyxNQUFBLENBQU9WLEtBQUEsR0FBUUEsS0FBQTtBQUNmVSxNQUFBLENBQU9ELEtBQUEsR0FBUVQsS0FBQSxDQUFNd1IsR0FBQTtBQUNyQjlRLE1BQUEsQ0FBT0osU0FBQSxHQUFZQSxTQUFBO0FBQ25CSSxNQUFBLENBQU9OLE9BQUEsR0FBVUEsT0FBQTtBQUNqQk0sTUFBQSxDQUFPWCxLQUFBLEdBQVFBLEtBQUE7QUFDZlcsTUFBQSxDQUFPRSxLQUFBLEdBQVFGLE1BQUE7QUFFZixJQUFNQyxPQUFBLEdBQVVELE1BQUEsQ0FBT0MsT0FBQTtBQUN2QixJQUFNSSxVQUFBLEdBQWFMLE1BQUEsQ0FBT0ssVUFBQTtBQUMxQixJQUFNQyxHQUFBLEdBQU1OLE1BQUEsQ0FBT00sR0FBQTtBQUNuQixJQUFNQyxVQUFBLEdBQWFQLE1BQUEsQ0FBT08sVUFBQTtBQUMxQixJQUFNSixXQUFBLEdBQWNILE1BQUEsQ0FBT0csV0FBQTtBQUMzQixJQUFNRCxLQUFBLEdBQVFGLE1BQUE7QUFDZCxJQUFNSSxNQUFBLEdBQVNaLE1BQUEsQ0FBT1UsS0FBQTtBQUN0QixJQUFNSCxLQUFBLEdBQVFULEtBQUEsQ0FBTXdSLEdBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9