System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/chat-sdk@1.5.4/widgets/markdown"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
  _export("Message", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_3 = _aimpactChatSdk154WidgetsMarkdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/widgets/markdown', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.4/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2710085213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /*bundle*/
          function Message({
            message,
            setUpdateScroll
          }) {
            const [content, setContent] = React.useState(message.content ?? '');
            const [streaming, setStreaming] = React.useState(!!message?.streaming);
            const previousContentRef = React.useRef(message.content ?? '');
            React.useEffect(() => {
              const handleChange = () => {
                const newContent = message.content ?? '';
                previousContentRef.current = content;
                setContent(newContent);
                setStreaming(!!message?.streaming);
                setUpdateScroll(performance.now());
              };
              message.on('change', handleChange);
              return () => message.off('change', handleChange);
            }, [message, setUpdateScroll, content]);
            const renderContent = () => {
              if (!content) return null;
              if (!streaming) {
                return React.createElement(_markdown.Markdown, {
                  content: content
                });
              }
              const previousContent = previousContentRef.current;
              const previousLength = previousContent.length;
              const newContent = content.slice(previousLength);
              // Inject span directly into Markdown string as raw HTML
              let combinedContent = `${previousContent}`;
              if (newContent !== '' && newContent !== ' ') {
                combinedContent = `${previousContent}<span class="streaming-content">${newContent}</span>`;
              }
              return React.createElement(React.Fragment, null, React.createElement("div", {
                className: "message__data"
              }, React.createElement(_markdown.Markdown, {
                content: combinedContent
              })));
            };
            return React.createElement("div", {
              className: "message__content"
            }, renderContent());
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3592763005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Message') && _export("Message", Message = require ? require('./index').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbWFya2Rvd24iLCJNZXNzYWdlIiwibWVzc2FnZSIsInNldFVwZGF0ZVNjcm9sbCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzdHJlYW1pbmciLCJzZXRTdHJlYW1pbmciLCJwcmV2aW91c0NvbnRlbnRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJuZXdDb250ZW50IiwiY3VycmVudCIsInBlcmZvcm1hbmNlIiwibm93Iiwib24iLCJvZmYiLCJyZW5kZXJDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsIk1hcmtkb3duIiwicHJldmlvdXNDb250ZW50IiwicHJldmlvdXNMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsImNvbWJpbmVkQ29udGVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsT0FBT0EsQ0FBQztZQUFFQyxPQUFPO1lBQUVDO1VBQWUsQ0FBMEM7WUFDdEcsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLFFBQVEsQ0FBQ0osT0FBTyxDQUFDRSxPQUFPLElBQUksRUFBRSxDQUFDO1lBQ25FLE1BQU0sQ0FBQ0csU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR1YsS0FBSyxDQUFDUSxRQUFRLENBQUMsQ0FBQyxDQUFDSixPQUFPLEVBQUVLLFNBQVMsQ0FBQztZQUV0RSxNQUFNRSxrQkFBa0IsR0FBR1gsS0FBSyxDQUFDWSxNQUFNLENBQVNSLE9BQU8sQ0FBQ0UsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUV0RU4sS0FBSyxDQUFDYSxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsTUFBTUMsVUFBVSxHQUFHWCxPQUFPLENBQUNFLE9BQU8sSUFBSSxFQUFFO2dCQUN4Q0ssa0JBQWtCLENBQUNLLE9BQU8sR0FBR1YsT0FBTztnQkFDcENDLFVBQVUsQ0FBQ1EsVUFBVSxDQUFDO2dCQUN0QkwsWUFBWSxDQUFDLENBQUMsQ0FBQ04sT0FBTyxFQUFFSyxTQUFTLENBQUM7Z0JBQ2xDSixlQUFlLENBQUNZLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7Y0FDbkMsQ0FBQztjQUVEZCxPQUFPLENBQUNlLEVBQUUsQ0FBQyxRQUFRLEVBQUVMLFlBQVksQ0FBQztjQUNsQyxPQUFPLE1BQU1WLE9BQU8sQ0FBQ2dCLEdBQUcsQ0FBQyxRQUFRLEVBQUVOLFlBQVksQ0FBQztZQUNqRCxDQUFDLEVBQUUsQ0FBQ1YsT0FBTyxFQUFFQyxlQUFlLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO1lBRXZDLE1BQU1lLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCLElBQUksQ0FBQ2YsT0FBTyxFQUFFLE9BQU8sSUFBSTtjQUV6QixJQUFJLENBQUNHLFNBQVMsRUFBRTtnQkFDZixPQUFPVCxLQUFBLENBQUFzQixhQUFBLENBQUNwQixTQUFBLENBQUFxQixRQUFRO2tCQUFDakIsT0FBTyxFQUFFQTtnQkFBTyxFQUFJOztjQUd0QyxNQUFNa0IsZUFBZSxHQUFHYixrQkFBa0IsQ0FBQ0ssT0FBTztjQUNsRCxNQUFNUyxjQUFjLEdBQUdELGVBQWUsQ0FBQ0UsTUFBTTtjQUM3QyxNQUFNWCxVQUFVLEdBQUdULE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQ0YsY0FBYyxDQUFDO2NBRWhEO2NBRUEsSUFBSUcsZUFBZSxHQUFHLEdBQUdKLGVBQWUsRUFBRTtjQUMxQyxJQUFJVCxVQUFVLEtBQUssRUFBRSxJQUFJQSxVQUFVLEtBQUssR0FBRyxFQUFFO2dCQUM1Q2EsZUFBZSxHQUFHLEdBQUdKLGVBQWUsbUNBQW1DVCxVQUFVLFNBQVM7O2NBRzNGLE9BQ0NmLEtBQUEsQ0FBQXNCLGFBQUEsQ0FBQXRCLEtBQUEsQ0FBQTZCLFFBQUEsUUFDQzdCLEtBQUEsQ0FBQXNCLGFBQUE7Z0JBQUtRLFNBQVMsRUFBQztjQUFlLEdBQzdCOUIsS0FBQSxDQUFBc0IsYUFBQSxDQUFDcEIsU0FBQSxDQUFBcUIsUUFBUTtnQkFBQ2pCLE9BQU8sRUFBRXNCO2NBQWUsRUFBSSxDQUNqQyxDQUVKO1lBRUwsQ0FBQztZQUVELE9BQU81QixLQUFBLENBQUFzQixhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFrQixHQUFFVCxhQUFhLEVBQUUsQ0FBTztVQUNqRTs7Ozs7Ozs7Ozs7VUNuREE7O1VBRUFVLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==