System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useHmr, useMediaQuery, useStore, __beyond_pkg, hmr;
  _export({
    useHmr: void 0,
    useMediaQuery: void 0,
    useStore: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_2 = _beyondJsReact18Widgets114Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/components/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./use-hmr
      *************************/
      ims.set('./use-hmr', {
        hash: 2839122136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useHmr = useHmr;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function useHmr(hmr) {
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([hmr], () => {
              setUpdate({});
            });
            return [update, setUpdate];
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./use-media-query
      *********************************/

      ims.set('./use-media-query', {
        hash: 2034606327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMediaQuery = useMediaQuery;
          var _react = require("react");
          /*bundle*/
          function useMediaQuery() {
            const [size, setSize] = (0, _react.useState)('lg');
            const calculateSize = () => {
              const width = window.innerWidth;
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            };
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                const newSize = calculateSize();
                setSize(newSize);
              };
              // Set initial size
              handleResize();
              // Set up event listener for resizing
              window.addEventListener('resize', handleResize);
              // Clean up function
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
            return size;
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 1365951797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          /*bundle*/ /**
                      * A generic React hook that subscribes to a reactive store.
                      * The store must implement `.on(event, handler)` and `.off(event, handler)`
                      * to manage subscriptions, and emit events to trigger re-renders.
                      * @param store The reactive store to subscribe to
                      * @param events Array of event names to subscribe to. Defaults to ['change']
                      */
          function useStore(store, events = ['change']) {
            if (!Array.isArray(events)) {
              throw new Error('The events parameter must be an array of strings');
            }
            // We use a local counter to force re-render whenever the store emits any of the subscribed events.
            const [, setVersion] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const handler = () => setVersion(v => v + 1);
              // Subscribe to all specified events
              events.forEach(event => {
                store.on(event, handler);
              });
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => {
                  store.off(event, handler);
                });
              };
            }, [store, events]);
            // Return the store directly so components can read from it.
            return store;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-hmr",
        "from": "useHmr",
        "name": "useHmr"
      }, {
        "im": "./use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }, {
        "im": "./use-store",
        "from": "useStore",
        "name": "useStore"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useHmr') && _export("useHmr", useHmr = require ? require('./use-hmr').useHmr : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./use-media-query').useMediaQuery : value);
        (require || prop === 'useStore') && _export("useStore", useStore = require ? require('./use-store').useStore : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwidXNlSG1yIiwiaG1yIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwidXNlTWVkaWFRdWVyeSIsInNpemUiLCJzZXRTaXplIiwiY2FsY3VsYXRlU2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIm5ld1NpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVN0b3JlIiwic3RvcmUiLCJldmVudHMiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInNldFZlcnNpb24iLCJoYW5kbGVyIiwidiIsImZvckVhY2giLCJldmVudCIsIm9uIiwib2ZmIl0sInNvdXJjZXMiOlsiL3VzZS1obXIudHN4IiwiL3VzZS1tZWRpYS1xdWVyeS50cyIsIi91c2Utc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVSxTQUFVRSxNQUFNQSxDQUFDQyxHQUFHO1lBQ3BDLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR04sTUFBQSxDQUFBTyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFOUMsSUFBQU4sTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ0wsR0FBRyxDQUFDLEVBQUUsTUFBSztjQUNyQkUsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQztZQUNGLE9BQU8sQ0FBQ0QsTUFBTSxFQUFFQyxTQUFTLENBQUM7VUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQU4sTUFBQSxHQUFBQyxP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