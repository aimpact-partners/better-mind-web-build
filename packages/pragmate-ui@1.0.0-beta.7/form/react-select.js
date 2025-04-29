System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
  _export("ReactSelect", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 936975778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _mobileSelect = require("./mobile-select");
          /*bundle*/ /**
                      * The component is deprecated is 'select' component instead.
                      * @deprecated
                      * @param props
                      * @returns
                      */
          function ReactSelect(props) {
            let properties = {
              ...props
            };
            delete properties.onChange;
            return _react.default.createElement(_mobileSelect.MobileSelect, {
              ...props
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./mobile-select
      *******************************/

      ims.set('./mobile-select', {
        hash: 2912224505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileSelect = MobileSelect;
          var _react = require("react");
          function MobileSelect({
            options,
            ...props
          }) {
            const output = options.map(({
              value,
              label
            }, index) => _react.default.createElement("option", {
              title: label,
              key: `${value}-${index}`,
              value: value
            }, label));
            const attrs = {
              ...props
            };
            if (props.isDisabled) attrs.disabled = true;
            ['isDisabled', 'defaultOption', 'key'].forEach(item => delete attrs[item]);
            return _react.default.createElement("div", {
              className: "pui-mobile-select__container"
            }, _react.default.createElement("select", {
              title: "select",
              ...attrs,
              className: "pui-mobile-select"
            }, props.placeholder && _react.default.createElement("option", {
              value: ""
            }, props.placeholder), output));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./observer
      **************************/

      ims.set('./observer', {
        hash: 3933443758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            constructor({
              callback
            }) {
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  callback(mutation.addedNodes);
                });
              });
            }
            startObserving(targetNode) {
              if (!targetNode) return;
              const config = {
                childList: true
              };
              this.observer.observe(targetNode, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-styles
      ****************************/

      ims.set('./use-styles', {
        hash: 2902897892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStyles = useStyles;
          var _react = require("react");
          var _observer = require("./observer");
          function useStyles() {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!ref.current) return;
              const host = ref.current.getRootNode()?.host;
              if (!host) console.warn('is not inside a web component');
              if (!host.shadowRoot.insertedStyles) host.shadowRoot.insertedStyles = new Set();
              const headStyles = document.head.querySelectorAll('style[data-emotion]');
              // the callback name is used because it is the property parameter of the StyleObserver class
              const callback = nodes => {
                const insertedStyles = new Set();
                nodes.forEach(node => {
                  const styleContent = node?.textContent;
                  if (!(node instanceof HTMLStyleElement) || insertedStyles.has(styleContent)) return;
                  const clonedStyle = node.cloneNode(true);
                  host.shadowRoot.appendChild(clonedStyle);
                  insertedStyles.add(styleContent);
                });
              };
              const styleObserver = new _observer.StyleObserver({
                callback
              });
              const targetNode = document.head;
              styleObserver.startObserving(targetNode);
              callback(headStyles);
              return () => styleObserver.stopObserving();
            }, [ref.current]);
            return {
              ref
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactSelect",
        "name": "ReactSelect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactSelect') && _export("ReactSelect", ReactSelect = require ? require('./index').ReactSelect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vYmlsZVNlbGVjdCIsIlJlYWN0U2VsZWN0IiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk1vYmlsZVNlbGVjdCIsIm9wdGlvbnMiLCJvdXRwdXQiLCJtYXAiLCJ2YWx1ZSIsImxhYmVsIiwiaW5kZXgiLCJ0aXRsZSIsImtleSIsImF0dHJzIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIlN0eWxlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImNvbnN0cnVjdG9yIiwiY2FsbGJhY2siLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJ0eXBlIiwiYWRkZWROb2RlcyIsInN0YXJ0T2JzZXJ2aW5nIiwidGFyZ2V0Tm9kZSIsImNvbmZpZyIsImNoaWxkTGlzdCIsIm9ic2VydmUiLCJzdG9wT2JzZXJ2aW5nIiwiZGlzY29ubmVjdCIsImV4cG9ydHMiLCJfb2JzZXJ2ZXIiLCJ1c2VTdHlsZXMiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiaG9zdCIsImdldFJvb3ROb2RlIiwiY29uc29sZSIsIndhcm4iLCJzaGFkb3dSb290IiwiaW5zZXJ0ZWRTdHlsZXMiLCJTZXQiLCJoZWFkU3R5bGVzIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvckFsbCIsIm5vZGVzIiwibm9kZSIsInN0eWxlQ29udGVudCIsInRleHRDb250ZW50IiwiSFRNTFN0eWxlRWxlbWVudCIsImhhcyIsImNsb25lZFN0eWxlIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJhZGQiLCJzdHlsZU9ic2VydmVyIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90cy9tb2JpbGUtc2VsZWN0LnRzeCIsIi90cy9vYnNlcnZlci50cyIsIi90cy91c2Utc3R5bGVzLnRz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