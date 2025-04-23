System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "marked-mangle@1.1.10", "marked@5.1.2", "marked-gfm-heading-id@3.2.0", "katex@0.16.21", "highlight.js@11.11.1", "marked-highlight@2.2.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Markdown, useMarked, __beyond_pkg, hmr;
  _export({
    Markdown: void 0,
    useMarked: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_markedMangle2) {
      dependency_3 = _markedMangle2;
    }, function (_marked2) {
      dependency_4 = _marked2;
    }, function (_markedGfmHeadingId2) {
      dependency_5 = _markedGfmHeadingId2;
    }, function (_katex2) {
      dependency_6 = _katex2;
    }, function (_highlightJs) {
      dependency_7 = _highlightJs;
    }, function (_markedHighlight2) {
      dependency_8 = _markedHighlight2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/widgets/markdown"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['marked-mangle', dependency_3], ['marked', dependency_4], ['marked-gfm-heading-id', dependency_5], ['katex', dependency_6], ['highlight.js', dependency_7], ['marked-highlight', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.4/widgets/markdown');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 858985932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Markdown = Markdown;
          var _react = require("react");
          var _useMarked = require("./use-marked");
          /*bundle */
          function Markdown(props) {
            const {
              ready,
              output
            } = (0, _useMarked.useMarked)(props.content ?? props.children);
            const attrs = {
              ...props
            };
            if (output === '') return null;
            return _react.default.createElement("div", {
              ...attrs,
              dangerouslySetInnerHTML: {
                __html: output
              }
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/

      ims.set('./use-marked', {
        hash: 2651167765,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var _react = require("react");
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedGfmHeadingId = require("marked-gfm-heading-id");
          var _katex = require("katex");
          var _highlight = require("highlight.js");
          var _markedHighlight = require("marked-highlight");
          // Import highlight.js
          // Import marked-highlight
          _marked.marked.use((0, _markedMangle.mangle)());
          const options = {
            prefix: 'my-prefix-'
          };
          _marked.marked.use((0, _markedGfmHeadingId.gfmHeadingId)(options));
          /*bundle*/
          function useMarked(content) {
            const [output, setOutput] = _react.default.useState('');
            async function render(content) {
              const options = {
                breaks: false // Disable line breaks for Markdown
              };
              _marked.marked.setOptions(options);
              _marked.marked.use((0, _markedHighlight.markedHighlight)({
                async: true,
                langPrefix: 'language-',
                highlight(code, lang) {
                  const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                  return _highlight.default.highlight(code, {
                    language
                  }).value;
                }
              }));
              // 1. Temporarily replace inline and block math expressions with placeholders
              let placeholderCounter = 0;
              const mathPlaceholders = {};
              const placeholderPrefix = 'MATH_PLACEHOLDER_';
              content = content.replace(/\\\((.*?)\\\)/g, (match, mathContent) => {
                const placeholder = `${placeholderPrefix}${placeholderCounter++}`;
                mathPlaceholders[placeholder] = _katex.default.renderToString(mathContent, {
                  displayMode: false
                });
                return placeholder;
              });
              content = content.replace(/\\\[(.*?)\\\]/gs, (match, mathContent) => {
                const placeholder = `${placeholderPrefix}${placeholderCounter++}`;
                mathPlaceholders[placeholder] = _katex.default.renderToString(mathContent, {
                  displayMode: true
                });
                return placeholder;
              });
              // 2. Pass the content through marked
              let output = await (0, _marked.marked)(content, {
                breaks: false
              });
              // 3. Replace placeholders with actual rendered KaTeX
              Object.keys(mathPlaceholders).forEach(placeholder => {
                output = output.replace(new RegExp(placeholder, 'g'), mathPlaceholders[placeholder]);
              });
              setOutput(output);
            }
            _react.default.useEffect(() => {
              render(content ?? '');
            }, [content]);
            return {
              ready: !!output,
              output
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./markdown",
        "from": "Markdown",
        "name": "Markdown"
      }, {
        "im": "./use-marked",
        "from": "useMarked",
        "name": "useMarked"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Markdown') && _export("Markdown", Markdown = require ? require('./markdown').Markdown : value);
        (require || prop === 'useMarked') && _export("useMarked", useMarked = require ? require('./use-marked').useMarked : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwicHJvcHMiLCJyZWFkeSIsIm91dHB1dCIsInVzZU1hcmtlZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImF0dHJzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9tYXJrZWRNYW5nbGUiLCJfbWFya2VkIiwiX21hcmtlZEdmbUhlYWRpbmdJZCIsIl9rYXRleCIsIl9oaWdobGlnaHQiLCJfbWFya2VkSGlnaGxpZ2h0IiwibWFya2VkIiwidXNlIiwibWFuZ2xlIiwib3B0aW9ucyIsInByZWZpeCIsImdmbUhlYWRpbmdJZCIsInNldE91dHB1dCIsInVzZVN0YXRlIiwicmVuZGVyIiwiYnJlYWtzIiwic2V0T3B0aW9ucyIsIm1hcmtlZEhpZ2hsaWdodCIsImFzeW5jIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwicGxhY2Vob2xkZXJDb3VudGVyIiwibWF0aFBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyUHJlZml4IiwicmVwbGFjZSIsIm1hdGNoIiwibWF0aENvbnRlbnQiLCJwbGFjZWhvbGRlciIsInJlbmRlclRvU3RyaW5nIiwiZGlzcGxheU1vZGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIlJlZ0V4cCIsInVzZUVmZmVjdCJdLCJzb3VyY2VzIjpbIi90cy9tYXJrZG93bi50c3giLCIvdHMvdXNlLW1hcmtlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsVUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxTQUFVRSxRQUFR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