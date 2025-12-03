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

// .beyond/uimport/temp/prismjs.1.30.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3ByaXNtLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvcHJpc21qcy4xLjMwLjAuanMiXSwibmFtZXMiOlsicmVxdWlyZV9wcmlzbSIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvcHJpc21qcy9wcmlzbS5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwiX3NlbGYiLCJ3aW5kb3ciLCJXb3JrZXJHbG9iYWxTY29wZSIsInNlbGYiLCJQcmlzbSIsIl9zZWxmMiIsImxhbmciLCJ1bmlxdWVJZCIsInBsYWluVGV4dEdyYW1tYXIiLCJfIiwibWFudWFsIiwiZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyIiwidXRpbCIsImVuY29kZSIsInRva2VucyIsIlRva2VuIiwidHlwZSIsImNvbnRlbnQiLCJhbGlhcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInJlcGxhY2UiLCJvIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJvYmpJZCIsIm9iaiIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJjbG9uZSIsImRlZXBDbG9uZSIsInZpc2l0ZWQiLCJpZCIsImtleSIsImhhc093blByb3BlcnR5IiwiZm9yRWFjaCIsInYiLCJpIiwiZ2V0TGFuZ3VhZ2UiLCJlbGVtZW50IiwibSIsImV4ZWMiLCJjbGFzc05hbWUiLCJ0b0xvd2VyQ2FzZSIsInBhcmVudEVsZW1lbnQiLCJzZXRMYW5ndWFnZSIsImxhbmd1YWdlIiwiUmVnRXhwIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3VycmVudFNjcmlwdCIsImRvY3VtZW50IiwidGFnTmFtZSIsIkVycm9yIiwiZXJyIiwic3JjIiwic3RhY2siLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpc0FjdGl2ZSIsImRlZmF1bHRBY3RpdmF0aW9uIiwibm8iLCJjb250YWlucyIsImxhbmd1YWdlcyIsInBsYWluIiwicGxhaW50ZXh0IiwidGV4dCIsInR4dCIsImV4dGVuZCIsInJlZGVmIiwibGFuZzIiLCJpbnNlcnRCZWZvcmUiLCJpbnNpZGUiLCJiZWZvcmUiLCJpbnNlcnQiLCJyb290IiwiZ3JhbW1hciIsInJldCIsInRva2VuIiwibmV3VG9rZW4iLCJvbGQiLCJERlMiLCJjYWxsYmFjayIsInByb3BlcnR5IiwicHJvcGVydHlUeXBlIiwicGx1Z2lucyIsImhpZ2hsaWdodEFsbCIsImFzeW5jIiwiaGlnaGxpZ2h0QWxsVW5kZXIiLCJjb250YWluZXIiLCJlbnYiLCJzZWxlY3RvciIsImhvb2tzIiwicnVuIiwiZWxlbWVudHMiLCJhcHBseSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaWdobGlnaHRFbGVtZW50IiwicGFyZW50Iiwibm9kZU5hbWUiLCJjb2RlIiwidGV4dENvbnRlbnQiLCJpbnNlcnRIaWdobGlnaHRlZENvZGUiLCJoaWdobGlnaHRlZENvZGUiLCJpbm5lckhUTUwiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJXb3JrZXIiLCJ3b3JrZXIiLCJmaWxlbmFtZSIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJwb3N0TWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbW1lZGlhdGVDbG9zZSIsImhpZ2hsaWdodCIsInRva2VuaXplIiwicmVzdCIsInRva2VuTGlzdCIsIkxpbmtlZExpc3QiLCJhZGRBZnRlciIsImhlYWQiLCJtYXRjaEdyYW1tYXIiLCJ0b0FycmF5IiwiYWxsIiwibmFtZSIsInB1c2giLCJjYWxsYmFja3MiLCJsZW5ndGgiLCJtYXRjaGVkU3RyIiwicyIsImUiLCJ0YWciLCJjbGFzc2VzIiwiYXR0cmlidXRlcyIsImFsaWFzZXMiLCJqb2luIiwibWF0Y2hQYXR0ZXJuIiwicGF0dGVybiIsInBvcyIsImxvb2tiZWhpbmQiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImxvb2tiZWhpbmRMZW5ndGgiLCJpbmRleCIsInN0YXJ0Tm9kZSIsInN0YXJ0UG9zIiwicmVtYXRjaCIsInBhdHRlcm5zIiwiaiIsImNhdXNlIiwicGF0dGVybk9iaiIsImdyZWVkeSIsImdsb2JhbCIsImZsYWdzIiwic291cmNlIiwiY3VycmVudE5vZGUiLCJuZXh0IiwidGFpbCIsInJlYWNoIiwic3RyIiwicmVtb3ZlQ291bnQiLCJmcm9tIiwidG8iLCJwIiwiayIsIm1hdGNoU3RyIiwiYWZ0ZXIiLCJyZW1vdmVGcm9tIiwicHJldiIsInJlbW92ZVJhbmdlIiwid3JhcHBlZCIsIm5lc3RlZFJlbWF0Y2giLCJsaXN0Iiwibm9kZSIsIm5ld05vZGUiLCJjb3VudCIsImFycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJwYXJzZSIsImNsb3NlIiwic2NyaXB0IiwiaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImRlZmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm1hcmt1cCIsImFkZElubGluZWQiLCJpbmNsdWRlZENkYXRhSW5zaWRlIiwiZGVmIiwiYXR0ck5hbWUiLCJodG1sIiwibWF0aG1sIiwic3ZnIiwieG1sIiwic3NtbCIsImF0b20iLCJyc3MiLCJQcmlzbTIiLCJzdHJpbmciLCJjc3MiLCJhZGRBdHRyaWJ1dGUiLCJjbGlrZSIsImphdmFzY3JpcHQiLCJyZWdleCIsImpzIiwiRWxlbWVudCIsIm1hdGNoZXMiLCJtc01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIkxPQURJTkdfTUVTU0FHRSIsIkZBSUxVUkVfTUVTU0FHRSIsInN0YXR1cyIsIkZBSUxVUkVfRU1QVFlfTUVTU0FHRSIsIkVYVEVOU0lPTlMiLCJTVEFUVVNfQVRUUiIsIlNUQVRVU19MT0FESU5HIiwiU1RBVFVTX0xPQURFRCIsIlNUQVRVU19GQUlMRUQiLCJTRUxFQ1RPUiIsImxvYWRGaWxlIiwic3VjY2VzcyIsImVycm9yIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsInNlbmQiLCJwYXJzZVJhbmdlIiwicmFuZ2UiLCJzdGFydCIsIk51bWJlciIsImNvbW1hIiwiZW5kIiwicHJlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiZXh0ZW5zaW9uIiwiYXV0b2xvYWRlciIsImxvYWRMYW5ndWFnZXMiLCJsaW5lcyIsInNwbGl0IiwiTWF0aCIsIm1heCIsIm1pbiIsIlN0cmluZyIsImZpbGVIaWdobGlnaHQiLCJsb2dnZWQiLCJjb25zb2xlIiwid2FybiIsImFyZ3VtZW50cyIsInByaXNtanNfMV8zMF8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJwcmlzbWpzXzFfMzBfMF9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfcHJpc21qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLFVBQUE7RUFBQSwrQkFBQUMsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBO0lBT0EsSUFBSUMsS0FBQSxHQUFTLE9BQU9DLE1BQUEsS0FBVyxjQUM1QkEsTUFBQSxHQUVBLE9BQU9DLGlCQUFBLEtBQXNCLGVBQWVDLElBQUEsWUFBZ0JELGlCQUFBLEdBQzFEQyxJQUFBLEdBQ0EsQ0FBQztJQVdOLElBQUlDLEtBQUEsR0FBUyxVQUFVQyxNQUFBLEVBQU87TUFHN0IsSUFBSUMsSUFBQSxHQUFPO01BQ1gsSUFBSUMsUUFBQSxHQUFXO01BR2YsSUFBSUMsZ0JBQUEsR0FBbUIsQ0FBQztNQUd4QixJQUFJQyxDQUFBLEdBQUk7UUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7UUFzQlBDLE1BQUEsRUFBUUwsTUFBQSxDQUFN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QUEsRUFBVTZDLGdCQUFBLENBQWlCK0gsUUFBUTtVQUVoRSxTQUFTMUwsQ0FBQSxHQUFJLEdBQUdFLE9BQUEsRUFBVUEsT0FBQSxHQUFVdUQsUUFBQSxDQUFTekQsQ0FBQSxFQUFHLElBQUs7WUFDcERyQyxLQUFBLENBQU1pRyxnQkFBQSxDQUFpQjFELE9BQU87VUFDL0I7UUFDRDtNQUNEO01BRUEsSUFBSXVOLE1BQUEsR0FBUztNQUViOVAsS0FBQSxDQUFNNlAsYUFBQSxHQUFnQixZQUFZO1FBQ2pDLElBQUksQ0FBQ0MsTUFBQSxFQUFRO1VBQ1pDLE9BQUEsQ0FBUUMsSUFBQSxDQUFLLHlGQUF5RjtVQUN0R0YsTUFBQSxHQUFTO1FBQ1Y7UUFDQTlQLEtBQUEsQ0FBTXFGLE9BQUEsQ0FBUXdLLGFBQUEsQ0FBY3hJLFNBQUEsQ0FBVXRCLEtBQUEsQ0FBTSxNQUFNa0ssU0FBUztNQUM1RDtJQUVELEdBQUU7RUFBQTtBQUFBOzs7QUN6NURGLElBQUFDLHNCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBNVEsT0FBQSxHQUFBNlEsWUFBQSxDQUFBTCxzQkFBQTtBQUFBTSxVQUFBLENBQUFOLHNCQUFBLEVBQWNPLE9BQUEsQ0FBQWxSLGFBQUEsS0FBZCtRLE1BQUEsQ0FBQTVRLE9BQUE7QUFFQSxJQUFBZ1IsY0FBQSxHQUFxQkQsT0FBQSxDQUFBbFIsYUFBQTtBQUNyQixJQUFPOFEsc0JBQUEsR0FBUUssY0FBQSxDQUFBTixPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==