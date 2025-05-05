System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, TabsContainer, Panes, Tab, Tabs, __beyond_pkg, hmr;
  _export({
    TabsContainer: void 0,
    Panes: void 0,
    Tab: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel0112Routing) {
      dependency_3 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3884495398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTabsContext = exports.TabsContext = void 0;
          var _react = require("react");
          const TabsContext = exports.TabsContext = _react.default.createContext({});
          const useTabsContext = () => _react.default.useContext(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 849862324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3689818568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = TabsContainer;
          var _routing = require("@beyond-js/kernel/routing");
          var _react = require("react");
          var _context = require("./context");
          /* bundle  */
          function TabsContainer({
            active = 0,
            onChange,
            className,
            current,
            children,
            tabs = [],
            panes,
            trackUrl
          }) {
            // Extract tab names from children
            if (trackUrl) {
              const tab = _routing.routing.uri.qs.get('tab');
              current = current ?? tab;
            }
            const activeIndex = tabs.includes(current) ? tabs.indexOf(current) : active;
            const [activeTab, setActiveTab] = _react.default.useState(activeIndex);
            const [currentTabName, setCurrentTabName] = _react.default.useState(current);
            // Update active tab if `current` prop changes
            const value = {
              panes,
              activeTab,
              setActiveTab,
              onChange,
              trackUrl,
              current: currentTabName,
              setCurrentTabName,
              names: tabs
            };
            const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.TabsContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
              className: cls
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./panes
      ***********************/

      ims.set('./panes', {
        hash: 1726352262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Panes = Panes;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Panes({
            children,
            className,
            items
          }) {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            if (items) {
              const Control = items[activeTab];
              return _react.default.createElement("section", {
                className: `tab-content ${className ? ` ${className}` : ''}`
              }, _react.default.createElement(Control, null));
            }
            const childrenArray = _react.default.Children.toArray(children);
            const Control = childrenArray[activeTab];
            const cls = `tab-content ${className ? ` ${className}` : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, Control);
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 588532965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = Tab;
          var _react = require("react");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle */
          function Tab(props) {
            const {
              children,
              index,
              disabled,
              className,
              name
            } = props;
            const {
              activeTab,
              setActiveTab,
              onChange,
              trackUrl
            } = (0, _context.useTabsContext)();
            let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
            if (className) cls += ' ' + className;
            const onClick = event => {
              // todo: this event must be removed
              if (trackUrl) {
                // Convert `routing.uri.qs.entries` to an object
                const queryParams = Object.fromEntries(_routing.routing.uri.qs.entries());
                // Update the `tab` parameter
                queryParams.tab = name;
                // Build the new query string
                const queryString = new URLSearchParams(queryParams).toString();
                // Update the URL without reloading the page
                _routing.routing.replaceState({}, '', `${_routing.routing.uri.pathname}?${queryString}`);
              }
              if (onChange) onChange(event, index);
              setActiveTab(index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              "data-name": name,
              "data-index": index
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 1755048068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _useScroll = require("./use-scroll");
          var _tab = require("./tab");
          /*bundle*/
          const Tabs = ({
            children,
            className
          }) => {
            const {
              activeTab,
              names
            } = (0, _context.useTabsContext)();
            const ref = _react.default.useRef(null);
            const cls = `pui-tabs-menu tabs${className ? ` ${className}` : ''}`;
            const clone = (item, index) => {
              if (!_react.default.isValidElement(item) || item.type !== _tab.Tab) return item;
              const props = {
                ...item.props,
                index,
                key: index,
                name: names[index]
              };
              const tabChild = item;
              return _react.default.cloneElement(tabChild, props);
            };
            const output = _react.default.Children.map(children, clone);
            (0, _useScroll.useScroll)(ref, activeTab);
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, output);
          };
          exports.Tabs = Tabs;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-scroll
      ****************************/

      ims.set('./use-scroll', {
        hash: 1668718188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useScroll = useScroll;
          var _react = require("react");
          function useScroll(tabRef, activeTab) {
            _react.default.useEffect(() => {
              const scrollToTab = index => {
                const tabElement = tabRef.current?.querySelectorAll('.tab')[index];
                if (tabElement) {
                  const container = tabRef.current;
                  const containerRect = container.getBoundingClientRect();
                  const tabRect = tabElement.getBoundingClientRect();
                  const scrollLeft = container.scrollLeft;
                  if (tabRect.left < containerRect.left) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.left - containerRect.left,
                      behavior: 'smooth'
                    });
                  } else if (tabRect.right > containerRect.right) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.right - containerRect.right,
                      behavior: 'smooth'
                    });
                  }
                }
              };
              scrollToTab(activeTab);
            }, [activeTab]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "TabsContainer",
        "name": "TabsContainer"
      }, {
        "im": "./panes",
        "from": "Panes",
        "name": "Panes"
      }, {
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
      }, {
        "im": "./tabs",
        "from": "Tabs",
        "name": "Tabs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TabsContainer') && _export("TabsContainer", TabsContainer = require ? require('./index').TabsContainer : value);
        (require || prop === 'Panes') && _export("Panes", Panes = require ? require('./panes').Panes : value);
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
        (require || prop === 'Tabs') && _export("Tabs", Tabs = require ? require('./tabs').Tabs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JvdXRpbmciLCJfY29udGV4dCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInRhYnMiLCJwYW5lcyIsInRyYWNrVXJsIiwidGFiIiwicm91dGluZyIsInVyaSIsInFzIiwiZ2V0IiwiYWN0aXZlSW5kZXgiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRUYWJOYW1lIiwic2V0Q3VycmVudFRhYk5hbWUiLCJuYW1lcyIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiaXRlbXMiLCJDb250cm9sIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIlRhYiIsInByb3BzIiwiaW5kZXgiLCJkaXNhYmxlZCIsIm5hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJxdWVyeVBhcmFtcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsInF1ZXJ5U3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsImF0dHJzIiwiX3VzZVNjcm9sbCIsIl90YWIiLCJUYWJzIiwicmVmIiwidXNlUmVmIiwiY2xvbmUiLCJpdGVtIiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvdXRwdXQiLCJtYXAiLCJ1c2VTY3JvbGwiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9sbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBYU8sTUFBTUMsV0FBVyxHQUFBQyxPQUFBLENBQUFELFdBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQzNELE1BQU1DLGNBQWMsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxXQUFXLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7O1VDZGxFOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQU4sT0FBQTtZQUNBTyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsUUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBRU87VUFBYSxTQUFVWSxhQUFhQSxDQUFDO1lBQzNDQyxNQUFNLEdBQUcsQ0FBQztZQUNWQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLElBQUksR0FBRyxFQUFFO1lBQ1RDLEtBQUs7WUFDTEM7VUFBUSxDQUNhO1lBQ3JCO1lBRUEsSUFB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