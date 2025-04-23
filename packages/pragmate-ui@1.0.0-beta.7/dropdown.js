System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, DropdownContainer, DropdownItem, DropdownMenu, DropdownToggle, useDropdownContext, Dropdown, IDropdownProps, IDropdownItemProps, __beyond_pkg, hmr;
  _export({
    DropdownContainer: void 0,
    DropdownItem: void 0,
    DropdownMenu: void 0,
    DropdownToggle: void 0,
    useDropdownContext: void 0,
    Dropdown: void 0,
    IDropdownProps: void 0,
    IDropdownItemProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Base) {
      dependency_5 = _pragmateUi100Beta7Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/dropdown');
      ims = new Map();
      /*****************************************
      INTERNAL MODULE: ./components/animated-div
      *****************************************/
      ims.set('./components/animated-div', {
        hash: 744696097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            className
          } = {
            children: null,
            className: ''
          }) {
            return React.createElement(_framerMotion.motion.div, {
              className: className,
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.1
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./components/container
      **************************************/

      ims.set('./components/container', {
        hash: 4207993415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownContainer = DropdownContainer;
          var _react = require("react");
          var _context = require("../context");
          var _useClickContainer = require("../hooks/use-click-container");
          /*bundle*/
          function DropdownContainer({
            children,
            className
          }) {
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              ref
            } = (0, _useClickContainer.useClickContainer)({
              toggleMenu,
              setToggleMenu
            });
            const cls = `pui-dropdown-container${className ? ` ${className}` : ''}${toggleMenu ? ' pui-dropdown-container--opened' : ''}`;
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/item
      *********************************/

      ims.set('./components/item', {
        hash: 2807941339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownItem = DropdownItem;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DropdownItem(props) {
            const {
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              children,
              className,
              onClick,
              as = _components.Link,
              tag = _components.Link
            } = props;
            const handleClick = async event => {
              event.stopPropagation();
              if (!!onClick && typeof onClick === 'function') await onClick(event);
              setToggleMenu(false);
            };
            const Control = tag ?? 'div';
            const cls = `pui-dropdown-menu__item${className ? ` ${className}` : ''}`;
            const properties = Object.assign({}, props);
            const toDelete = ['children', 'className', 'onClick', 'tag', 'id'];
            toDelete.forEach(key => delete properties[key]);
            return _react.default.createElement("li", null, _react.default.createElement(Control, {
              className: cls,
              onClick: handleClick,
              ...properties
            }, children));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/menu
      *********************************/

      ims.set('./components/menu', {
        hash: 1155104003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownMenu = DropdownMenu;
          var _react = require("react");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          /*bundle*/
          function DropdownMenu(props) {
            const {
              toggleMenu
            } = (0, _context.useDropdownContext)();
            if (!toggleMenu) return null;
            let cls = `pui-dropdown-menu  pui-dropdown-menu--opened`;
            return _react.default.createElement(_animatedDiv.AnimatedDiv, {
              className: cls
            }, _react.default.createElement("ul", {
              className: 'pui-dropdown-menu__list'
            }, props.children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/toggle
      ***********************************/

      ims.set('./components/toggle', {
        hash: 2994452618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownToggle = DropdownToggle;
          var React = require("react");
          var _context = require("../context");
          /*bundle*/
          function DropdownToggle({
            children,
            className
          }) {
            const cls = `pui-dropdown__toggle${className ? ` ${className}` : ''}`;
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const onClick = event => {
              event.stopPropagation();
              setToggleMenu(!toggleMenu);
            };
            return React.createElement("div", {
              onClick: onClick,
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3840324528,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDropdownContext = exports.DropdownContext = void 0;
          var _react = require("react");
          const DropdownContext = exports.DropdownContext = _react.default.createContext(null);
          /*bundle */
          const useDropdownContext = () => (0, _react.useContext)(DropdownContext);
          exports.useDropdownContext = useDropdownContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./hooks/use-click-container
      *******************************************/

      ims.set('./hooks/use-click-container', {
        hash: 2744155022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer({
            toggleMenu,
            setToggleMenu
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const onClick = event => {
                const {
                  current
                } = ref;
                const {
                  target,
                  currentTarget
                } = event;
                const path = event.composedPath ? event.composedPath() : [];
                const pathTarget = path.length > 0 ? path[0] : null;
                const isSameNode = current === target || current === currentTarget || pathTarget === current;
                const isAChildren = current?.contains(pathTarget);
                if (toggleMenu && !isSameNode && !isAChildren) setToggleMenu(false);
              };
              globalThis.document.addEventListener('click', onClick);
              return () => globalThis.document.removeEventListener('click', onClick);
            }, [toggleMenu]);
            return {
              ref
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2450413676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dropdown = Dropdown;
          var _react = require("react");
          var _context = require("./context");
          var _container = require("./components/container");
          /*bundle*/
          function Dropdown({
            children,
            className
          }) {
            const [toggleMenu, setToggleMenu] = _react.default.useState(false);
            const value = {
              toggleMenu,
              setToggleMenu
            };
            return _react.default.createElement(_context.DropdownContext.Provider, {
              value: value
            }, _react.default.createElement(_container.DropdownContainer, {
              className: className
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 382438008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/container",
        "from": "DropdownContainer",
        "name": "DropdownContainer"
      }, {
        "im": "./components/item",
        "from": "DropdownItem",
        "name": "DropdownItem"
      }, {
        "im": "./components/menu",
        "from": "DropdownMenu",
        "name": "DropdownMenu"
      }, {
        "im": "./components/toggle",
        "from": "DropdownToggle",
        "name": "DropdownToggle"
      }, {
        "im": "./context",
        "from": "useDropdownContext",
        "name": "useDropdownContext"
      }, {
        "im": "./index",
        "from": "Dropdown",
        "name": "Dropdown"
      }, {
        "im": "./types",
        "from": "IDropdownProps",
        "name": "IDropdownProps"
      }, {
        "im": "./types",
        "from": "IDropdownItemProps",
        "name": "IDropdownItemProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownContainer') && _export("DropdownContainer", DropdownContainer = require ? require('./components/container').DropdownContainer : value);
        (require || prop === 'DropdownItem') && _export("DropdownItem", DropdownItem = require ? require('./components/item').DropdownItem : value);
        (require || prop === 'DropdownMenu') && _export("DropdownMenu", DropdownMenu = require ? require('./components/menu').DropdownMenu : value);
        (require || prop === 'DropdownToggle') && _export("DropdownToggle", DropdownToggle = require ? require('./components/toggle').DropdownToggle : value);
        (require || prop === 'useDropdownContext') && _export("useDropdownContext", useDropdownContext = require ? require('./context').useDropdownContext : value);
        (require || prop === 'Dropdown') && _export("Dropdown", Dropdown = require ? require('./index').Dropdown : value);
        (require || prop === 'IDropdownProps') && _export("IDropdownProps", IDropdownProps = require ? require('./types').IDropdownProps : value);
        (require || prop === 'IDropdownItemProps') && _export("IDropdownItemProps", IDropdownItemProps = require ? require('./types').IDropdownItemProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInkiLCJleGl0IiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdXNlQ2xpY2tDb250YWluZXIiLCJEcm9wZG93bkNvbnRhaW5lciIsInRvZ2dsZU1lbnUiLCJzZXRUb2dnbGVNZW51IiwidXNlRHJvcGRvd25Db250ZXh0IiwicmVmIiwidXNlQ2xpY2tDb250YWluZXIiLCJjbHMiLCJkZWZhdWx0IiwiX2NvbXBvbmVudHMiLCJEcm9wZG93bkl0ZW0iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcyIsIkxpbmsiLCJ0YWciLCJoYW5kbGVDbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiQ29udHJvbCIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b0RlbGV0ZSIsImZvckVhY2giLCJrZXkiLCJfYW5pbWF0ZWREaXYiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93blRvZ2dsZSIsIkRyb3Bkb3duQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInBhdGhUYXJnZXQiLCJsZW5ndGgiLCJpc1NhbWVOb2RlIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2NvbnRhaW5lciIsIkRyb3Bkb3duIiwidXNlU3RhdGUiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9hbmltYXRlZC1kaXYudHN4IiwiL3RzL2NvbXBvbmVudHMvY29udGFpbmVyLnRzeCIsIi90cy9jb21wb25lbnRzL2l0ZW0udHN4IiwiL3RzL2NvbXBvbmVudHMvbWVudS50c3giLCIvdHMvY29tcG9uZW50cy90b2dnbGUudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hvb2tzL3VzZS1jbGljay1jb250YWluZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTSxTQUFVRSxXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUyxJQUErQjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxTQUFTLEVBQUU7VUFBRSxDQUFFO1lBQ2hILE9BQ0NMLEtBQUEsQ0FBQU0sYUFBQSxDQUFDSixhQUFBLENBQUFLLE1BQU0sQ0FBQ0MsR0FBRztjQUNWSCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJJLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFO2lCQUNWO2dCQUNERixPQUFPLEVBQUU7O1lBQ1QsR0FFQU4sUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFXLE1BQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLFFBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixrQkFBQSxHQUFBaEIsT0FBQTtVQUdPO1VB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