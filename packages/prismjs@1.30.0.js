System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["prismjs","1.30.0"]]);
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/prismjs/prism.js
var require_prism = __commonJS({
  "node_modules/prismjs/prism.js"(exports, module2) {
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    var Prism = function (_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self2.Prism && _self2.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function (o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function (obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", {
                value: ++uniqueId
              });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return /** @type {any} */clone;
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                /** @type {Array} */
                /** @type {any} */
                o.forEach(function (v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return /** @type {any} */clone;
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function (element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function (element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function () {
            if (typeof document === "undefined") {
              return null;
            }
            if (document.currentScript && document.currentScript.tagName === "SCRIPT" && 1 < 2) {
              return /** @type {any} */document.currentScript;
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function (element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function (id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function (inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function (key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function (async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function (container, async, callback) {
          var env = {
            callback,
            container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
          _.hooks.run("before-all-elements-highlight", env);
          for (var i = 0, element; element = env.elements[i++];) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function (element, async, callback) {
          var language = _.util.getLanguage(element);
          var grammar = _.languages[language];
          _.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _.util.setLanguage(parent, language);
          }
          var code = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _.hooks.run("after-highlight", env);
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_.filename);
            worker.onmessage = function (evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function (text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function (text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function (name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function (name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++];) {
              callback(env);
            }
          }
        },
        Token
      };
      _self2.Prism = _;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function (e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = {
          value: null,
          prev: null,
          next: null
        };
        var tail = {
          value: null,
          prev: head,
          next: null
        };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = {
          value,
          prev: node,
          next
        };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _;
        }
        if (!_.disableWorkerMessageHandler) {
          _self2.addEventListener("message", function (evt) {
            var message = JSON.parse(evt.data);
            var lang2 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
            if (immediateClose) {
              _self2.close();
            }
          }, false);
        }
        return _;
      }
      var script = _.util.currentScript();
      if (script) {
        _.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_.manual) {
          _.highlightAll();
        }
      }
      if (!_.manual) {
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
          document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _;
    }(_self);
    if (typeof module2 !== "undefined" && module2.exports) {
      module2.exports = Prism;
    }
    if (typeof global !== "undefined") {
      global.Prism = Prism;
    }
    Prism.languages.markup = {
      "comment": {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      "prolog": {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      "doctype": {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          "string": {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          "punctuation": /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          "name": /[^\s<>'"]+/
        }
      },
      "cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      "tag": {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          "tag": {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              "punctuation": /^<\/?/,
              "namespace": /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              "punctuation": [{
                pattern: /^=/,
                alias: "attr-equals"
              }, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          "punctuation": /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              "namespace": /^[^\s>\/:]+:/
            }
          }
        }
      },
      "entity": [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      }, /&#x?[\da-f]{1,8};/i]
    };
    Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
    Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
    Prism.hooks.add("wrap", function (env) {
      if (env.type === "entity") {
        env.attributes["title"] = env.content.replace(/&amp;/, "&");
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside["language-" + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside["language-" + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
            return tagName;
          }), "i"),
          lookbehind: true,
          greedy: true,
          inside
        };
        Prism.languages.insertBefore("markup", "cdata", def);
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function (attrName, lang) {
        Prism.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                "value": {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [lang, "language-" + lang],
                  inside: Prism.languages[lang]
                },
                "punctuation": [{
                  pattern: /^=/,
                  alias: "attr-equals"
                }, /"|'/]
              }
            }
          }
        });
      }
    });
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    Prism.languages.xml = Prism.languages.extend("markup", {});
    Prism.languages.ssml = Prism.languages.xml;
    Prism.languages.atom = Prism.languages.xml;
    Prism.languages.rss = Prism.languages.xml;
    (function (Prism2) {
      var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      Prism2.languages.css = {
        "comment": /\/\*[\s\S]*?\*\//,
        "atrule": {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            "rule": /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            "keyword": {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
            // See rest below
          }
        },
        "url": {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: true,
          inside: {
            "function": /^url/i,
            "punctuation": /^\(|\)$/,
            "string": {
              pattern: RegExp("^" + string.source + "$"),
              alias: "url"
            }
          }
        },
        "selector": {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
          lookbehind: true
        },
        "string": {
          pattern: string,
          greedy: true
        },
        "property": {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        "important": /!important\b/i,
        "function": {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        "punctuation": /[(){};:,]/
      };
      Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
      var markup = Prism2.languages.markup;
      if (markup) {
        markup.tag.addInlined("style", "css");
        markup.tag.addAttribute("style", "css");
      }
    })(Prism);
    Prism.languages.clike = {
      "comment": [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      "string": {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          "punctuation": /[.\\]/
        }
      },
      "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      "boolean": /\b(?:false|true)\b/,
      "function": /\b\w+(?=\()/,
      "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      "punctuation": /[{}[\];(),.:]/
    };
    Prism.languages.javascript = Prism.languages.extend("clike", {
      "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }],
      "keyword": [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      "number": {
        pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (
        // constant
        /NaN|Infinity/.source + "|" +
        // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" +
        // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" +
        // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" +
        // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" +
        // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
        lookbehind: true
      },
      "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    });
    Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore("javascript", "keyword", {
      "regex": {
        pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
        // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" +
        // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" +
        // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: Prism.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      "parameter": [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore("javascript", "string", {
      "hashbang": {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          "interpolation": {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: Prism.languages.javascript
            }
          },
          "string": /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    });
    Prism.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    });
    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined("script", "javascript");
      Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
    }
    Prism.languages.js = Prism.languages.javascript;
    (function () {
      if (typeof Prism === "undefined" || typeof document === "undefined") {
        return;
      }
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      var LOADING_MESSAGE = "Loading\u2026";
      var FAILURE_MESSAGE = function (status, message) {
        return "\u2716 Error " + status + " while fetching file: " + message;
      };
      var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
      var EXTENSIONS = {
        "js": "javascript",
        "py": "python",
        "rb": "ruby",
        "ps1": "powershell",
        "psm1": "powershell",
        "sh": "bash",
        "bat": "batch",
        "h": "c",
        "tex": "latex"
      };
      var STATUS_ATTR = "data-src-status";
      var STATUS_LOADING = "loading";
      var STATUS_LOADED = "loaded";
      var STATUS_FAILED = "failed";
      var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
      function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", src, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              success(xhr.responseText);
            } else {
              if (xhr.status >= 400) {
                error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
              } else {
                error(FAILURE_EMPTY_MESSAGE);
              }
            }
          }
        };
        xhr.send(null);
      }
      function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
        if (m) {
          var start = Number(m[1]);
          var comma = m[2];
          var end = m[3];
          if (!comma) {
            return [start, start];
          }
          if (!end) {
            return [start, void 0];
          }
          return [start, Number(end)];
        }
        return void 0;
      }
      Prism.hooks.add("before-highlightall", function (env) {
        env.selector += ", " + SELECTOR;
      });
      Prism.hooks.add("before-sanity-check", function (env) {
        var pre = /** @type {HTMLPreElement} */
        env.element;
        if (pre.matches(SELECTOR)) {
          env.code = "";
          pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
          var code = pre.appendChild(document.createElement("CODE"));
          code.textContent = LOADING_MESSAGE;
          var src = pre.getAttribute("data-src");
          var language = env.language;
          if (language === "none") {
            var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
            language = EXTENSIONS[extension] || extension;
          }
          Prism.util.setLanguage(code, language);
          Prism.util.setLanguage(pre, language);
          var autoloader = Prism.plugins.autoloader;
          if (autoloader) {
            autoloader.loadLanguages(language);
          }
          loadFile(src, function (text) {
            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
            var range = parseRange(pre.getAttribute("data-range"));
            if (range) {
              var lines = text.split(/\r\n?|\n/g);
              var start = range[0];
              var end = range[1] == null ? lines.length : range[1];
              if (start < 0) {
                start += lines.length;
              }
              start = Math.max(0, Math.min(start - 1, lines.length));
              if (end < 0) {
                end += lines.length;
              }
              end = Math.max(0, Math.min(end, lines.length));
              text = lines.slice(start, end).join("\n");
              if (!pre.hasAttribute("data-start")) {
                pre.setAttribute("data-start", String(start + 1));
              }
            }
            code.textContent = text;
            Prism.highlightElement(code);
          }, function (error) {
            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
            code.textContent = error;
          });
        }
      });
      Prism.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function highlight(container) {
          var elements = (container || document).querySelectorAll(SELECTOR);
          for (var i = 0, element; element = elements[i++];) {
            Prism.highlightElement(element);
          }
        }
      };
      var logged = false;
      Prism.fileHighlight = function () {
        if (!logged) {
          console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
          logged = true;
        }
        Prism.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  }
});

// .beyond/uimport/prismjs.1.30.0.js
var prismjs_1_30_0_exports = {};
__export(prismjs_1_30_0_exports, {
  default: () => prismjs_1_30_0_default
});
module.exports = __toCommonJS(prismjs_1_30_0_exports);
__reExport(prismjs_1_30_0_exports, __toESM(require_prism()), module.exports);
var import_prismjs = __toESM(require_prism());
var prismjs_1_30_0_default = import_prismjs.default;
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3ByaXNtanMuMS4zMC4wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfcHJpc20iLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL3ByaXNtanMvcHJpc20uanMiLCJleHBvcnRzIiwibW9kdWxlMiIsIl9zZWxmIiwid2luZG93IiwiV29ya2VyR2xvYmFsU2NvcGUiLCJzZWxmIiwiUHJpc20iLCJfc2VsZjIiLCJsYW5nIiwidW5pcXVlSWQiLCJwbGFpblRleHRHcmFtbWFyIiwiXyIsIm1hbnVhbCIsImRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlciIsInV0aWwiLCJlbmNvZGUiLCJ0b2tlbnMiLCJUb2tlbiIsInR5cGUiLCJjb250ZW50IiwiYWxpYXMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJyZXBsYWNlIiwibyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwib2JqSWQiLCJvYmoiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiY2xvbmUiLCJkZWVwQ2xvbmUiLCJ2aXNpdGVkIiwiaWQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImZvckVhY2giLCJ2IiwiaSIsImdldExhbmd1YWdlIiwiZWxlbWVudCIsIm0iLCJleGVjIiwiY2xhc3NOYW1lIiwidG9Mb3dlckNhc2UiLCJwYXJlbnRFbGVtZW50Iiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsIlJlZ0V4cCIsImNsYXNzTGlzdCIsImFkZCIsImN1cnJlbnRTY3JpcHQiLCJkb2N1bWVudCIsInRhZ05hbWUiLCJFcnJvciIsImVyciIsInNyYyIsInN0YWNrIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaXNBY3RpdmUiLCJkZWZhdWx0QWN0aXZhdGlvbiIsIm5vIiwiY29udGFpbnMiLCJsYW5ndWFnZXMiLCJwbGFpbiIsInBsYWludGV4dCIsInRleHQiLCJ0eHQiLCJleHRlbmQiLCJyZWRlZiIsImxhbmcyIiwiaW5zZXJ0QmVmb3JlIiwiaW5zaWRlIiwiYmVmb3JlIiwiaW5zZXJ0Iiwicm9vdCIsImdyYW1tYXIiLCJyZXQiLCJ0b2tlbiIsIm5ld1Rva2VuIiwib2xkIiwiREZTIiwiY2FsbGJhY2siLCJwcm9wZXJ0eSIsInByb3BlcnR5VHlwZSIsInBsdWdpbnMiLCJoaWdobGlnaHRBbGwiLCJhc3luYyIsImhpZ2hsaWdodEFsbFVuZGVyIiwiY29udGFpbmVyIiwiZW52Iiwic2VsZWN0b3IiLCJob29rcyIsInJ1biIsImVsZW1lbnRzIiwiYXBwbHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGlnaGxpZ2h0RWxlbWVudCIsInBhcmVudCIsIm5vZGVOYW1lIiwiY29kZSIsInRleHRDb250ZW50IiwiaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlIiwiaGlnaGxpZ2h0ZWRDb2RlIiwiaW5uZXJIVE1MIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiV29ya2VyIiwid29ya2VyIiwiZmlsZW5hbWUiLCJvbm1lc3NhZ2UiLCJldnQiLCJkYXRhIiwicG9zdE1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1tZWRpYXRlQ2xvc2UiLCJoaWdobGlnaHQiLCJ0b2tlbml6ZSIsInJlc3QiLCJ0b2tlbkxpc3QiLCJMaW5rZWRMaXN0IiwiYWRkQWZ0ZXIiLCJoZWFkIiwibWF0Y2hHcmFtbWFyIiwidG9BcnJheSIsImFsbCIsIm5hbWUiLCJwdXNoIiwiY2FsbGJhY2tzIiwibGVuZ3RoIiwibWF0Y2hlZFN0ciIsInMiLCJlIiwidGFnIiwiY2xhc3NlcyIsImF0dHJpYnV0ZXMiLCJhbGlhc2VzIiwiam9pbiIsIm1hdGNoUGF0dGVybiIsInBhdHRlcm4iLCJwb3MiLCJsb29rYmVoaW5kIiwibGFzdEluZGV4IiwibWF0Y2giLCJsb29rYmVoaW5kTGVuZ3RoIiwiaW5kZXgiLCJzdGFydE5vZGUiLCJzdGFydFBvcyIsInJlbWF0Y2giLCJwYXR0ZXJucyIsImoiLCJjYXVzZSIsInBhdHRlcm5PYmoiLCJncmVlZHkiLCJnbG9iYWwiLCJmbGFncyIsInNvdXJjZSIsImN1cnJlbnROb2RlIiwibmV4dCIsInRhaWwiLCJyZWFjaCIsInN0ciIsInJlbW92ZUNvdW50IiwiZnJvbSIsInRvIiwicCIsImsiLCJtYXRjaFN0ciIsImFmdGVyIiwicmVtb3ZlRnJvbSIsInByZXYiLCJyZW1vdmVSYW5nZSIsIndyYXBwZWQiLCJuZXN0ZWRSZW1hdGNoIiwibGlzdCIsIm5vZGUiLCJuZXdOb2RlIiwiY291bnQiLCJhcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZXNzYWdlIiwicGFyc2UiLCJjbG9zZSIsInNjcmlwdCIsImhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayIsInJlYWR5U3RhdGUiLCJkZWZlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJtYXJrdXAiLCJhZGRJbmxpbmVkIiwiaW5jbHVkZWRDZGF0YUluc2lkZSIsImRlZiIsImF0dHJOYW1lIiwiaHRtbCIsIm1hdGhtbCIsInN2ZyIsInhtbCIsInNzbWwiLCJhdG9tIiwicnNzIiwiUHJpc20yIiwic3RyaW5nIiwiY3NzIiwiYWRkQXR0cmlidXRlIiwiY2xpa2UiLCJqYXZhc2NyaXB0IiwicmVnZXgiLCJqcyIsIkVsZW1lbnQiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJMT0FESU5HX01FU1NBR0UiLCJGQUlMVVJFX01FU1NBR0UiLCJzdGF0dXMiLCJGQUlMVVJFX0VNUFRZX01FU1NBR0UiLCJFWFRFTlNJT05TIiwiU1RBVFVTX0FUVFIiLCJTVEFUVVNfTE9BRElORyIsIlNUQVRVU19MT0FERUQiLCJTVEFUVVNfRkFJTEVEIiwiU0VMRUNUT1IiLCJsb2FkRmlsZSIsInN1Y2Nlc3MiLCJlcnJvciIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJzZW5kIiwicGFyc2VSYW5nZSIsInJhbmdlIiwic3RhcnQiLCJOdW1iZXIiLCJjb21tYSIsImVuZCIsInByZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImV4dGVuc2lvbiIsImF1dG9sb2FkZXIiLCJsb2FkTGFuZ3VhZ2VzIiwibGluZXMiLCJzcGxpdCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJTdHJpbmciLCJmaWxlSGlnaGxpZ2h0IiwibG9nZ2VkIiwiY29uc29sZSIsIndhcm4iLCJhcmd1bWVudHMiLCJwcmlzbWpzXzFfMzBfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwicHJpc21qc18xXzMwXzBfZGVmYXVsdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiaW1wb3J0X3ByaXNtanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUFBQyxVQUFBO0VBQUEsK0JBQUFDLENBQUFDLE9BQUEsRUFBQUMsT0FBQTtJQU9BLElBQUlDLEtBQUEsR0FBUyxPQUFPQyxNQUFBLEtBQVcsY0FDNUJBLE1BQUEsR0FFQSxPQUFPQyxpQkFBQSxLQUFzQixlQUFlQyxJQUFBLFlBQWdCRCxpQkFBQSxHQUMxREMsSUFBQSxHQUNBLENBQUM7SUFXTixJQUFJQyxLQUFBLEdBQVMsVUFBVUMsTUFBQSxFQUFPO01BRzdCLElBQUlDLElBQUEsR0FBTztNQUNYLElBQUlDLFFBQUEsR0FBVztNQUdmLElBQUlDLGdCQUFBLEdBQW1CLENBQUM7TUFHeEIsSUFBSUMsQ0FBQSxHQUFJO1FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO1FBc0JQQyxNQUFBLEVBQVFMLE1BQUEsQ0FBTUQsS0FB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QVU2QyxnQkFBQSxDQUFpQitILFFBQVE7VUFFaEUsU0FBUzFMLENBQUEsR0FBSSxHQUFHRSxPQUFBLEVBQVVBLE9BQUEsR0FBVXVELFFBQUEsQ0FBU3pELENBQUEsRUFBRyxJQUFLO1lBQ3BEckMsS0FBQSxDQUFNaUcsZ0JBQUEsQ0FBaUIxRCxPQUFPO1VBQy9CO1FBQ0Q7TUFDRDtNQUVBLElBQUl1TixNQUFBLEdBQVM7TUFFYjlQLEtBQUEsQ0FBTTZQLGFBQUEsR0FBZ0IsWUFBWTtRQUNqQyxJQUFJLENBQUNDLE1BQUEsRUFBUTtVQUNaQyxPQUFBLENBQVFDLElBQUEsQ0FBSyx5RkFBeUY7VUFDdEdGLE1BQUEsR0FBUztRQUNWO1FBQ0E5UCxLQUFBLENBQU1xRixPQUFBLENBQVF3SyxhQUFBLENBQWN4SSxTQUFBLENBQVV0QixLQUFBLENBQU0sTUFBTWtLLFNBQVM7TUFDNUQ7SUFFRCxHQUFFO0VBQUE7QUFBQTs7O0FDejVERixJQUFBQyxzQkFBQTtBQUFBQyxRQUFBLENBQUFELHNCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQTVRLE9BQUEsR0FBQTZRLFlBQUEsQ0FBQUwsc0JBQUE7QUFBQU0sVUFBQSxDQUFBTixzQkFBQSxFQUFjTyxPQUFBLENBQUFsUixhQUFBLEtBQWQrUSxNQUFBLENBQUE1USxPQUFBO0FBRUEsSUFBQWdSLGNBQUEsR0FBcUJELE9BQUEsQ0FBQWxSLGFBQUE7QUFDckIsSUFBTzhRLHNCQUFBLEdBQVFLLGNBQUEsQ0FBQU4sT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=