System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Menu, __beyond_pkg, hmr;
  _export("Menu", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_4 = _pragmateUi100Beta7Image;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/image', dependency_4], ['@beyond-js/kernel/routing', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/menu');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./content
      *************************/
      ims.set('./content', {
        hash: 2796574182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuContent = void 0;
          var _react = require("react");
          var _list = require("./list");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          const SideMenuContent = ({
            title
          }) => {
            const {
              toggleMenu,
              isOpen
            } = (0, _context.useMenuContext)();
            const cls = isOpen ? "side-menu__content" : "side-menu__content__hide side-menu__content";
            const defaultTitle = title ?? "Title";
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: "side-menu__toggle",
              onClick: toggleMenu
            }), _react.default.createElement("header", null, _react.default.createElement("span", null, defaultTitle)), _react.default.createElement(_list.SideMenuList, null));
          };
          exports.SideMenuContent = SideMenuContent;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4010051245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMenuContext = exports.MenuContext = void 0;
          var _react = require("react");
          const MenuContext = exports.MenuContext = (0, _react.createContext)({});
          const useMenuContext = () => (0, _react.useContext)(MenuContext);
          exports.useMenuContext = useMenuContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3369479835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Menu = void 0;
          var _react = require("react");
          var _content = require("./content");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          const Menu = ({
            items,
            title
          }) => {
            const [isOpen, setIsOpen] = (0, _react.useState)(false);
            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };
            return _react.default.createElement(_context.MenuContext.Provider, {
              value: {
                isOpen,
                items,
                toggleMenu
              }
            }, _react.default.createElement(_icons.IconButton, {
              onClick: toggleMenu,
              icon: "menu"
            }), _react.default.createElement(_content.SideMenuContent, {
              title: title
            }), isOpen && _react.default.createElement("div", {
              onClick: toggleMenu,
              className: "background-black"
            }));
          };
          exports.Menu = Menu;
        }
      });

      /***********************
      INTERNAL MODULE: ./items
      ***********************/

      ims.set('./items', {
        hash: 2650623906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.menuItems = void 0;
          const menuItems = exports.menuItems = [{
            title: "Sub title",
            link: "#",
            icon: "user"
          }, {
            title: "Sub title",
            link: "#",
            icon: "favorite"
          }, {
            title: "Sub title",
            link: "#",
            icon: "star"
          }, {
            title: "Sub title",
            link: "#",
            icon: "off"
          }, {
            title: "Sub title",
            link: "#",
            icon: "bell"
          }];
        }
      });

      /****************************
      INTERNAL MODULE: ./list/index
      ****************************/

      ims.set('./list/index', {
        hash: 1267445682,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuList = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          const SideMenuList = () => {
            const {
              items
            } = (0, _context.useMenuContext)();
            const output = items.map(item => _react.default.createElement(_item.SideMenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: 'side-menu__list'
            }, output);
          };
          exports.SideMenuList = SideMenuList;
        }
      });

      /***************************
      INTERNAL MODULE: ./list/item
      ***************************/

      ims.set('./list/item', {
        hash: 2834511559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SideMenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("../context");
          const SideMenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            const {
              toggleMenu
            } = (0, _context.useMenuContext)();
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              _routing.routing.pushState(link);
              toggleMenu();
            };
            return _react.default.createElement("li", {
              className: "side-menu__item"
            }, _react.default.createElement("a", {
              onClick: onClick
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("span", null, title)));
          };
          exports.SideMenuItem = SideMenuItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Menu",
        "name": "Menu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Menu') && _export("Menu", Menu = require ? require('./index').Menu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2xpc3QiLCJfaWNvbnMiLCJfY29udGV4dCIsIlNpZGVNZW51Q29udGVudCIsInRpdGxlIiwidG9nZ2xlTWVudSIsImlzT3BlbiIsInVzZU1lbnVDb250ZXh0IiwiY2xzIiwiZGVmYXVsdFRpdGxlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJTaWRlTWVudUxpc3QiLCJleHBvcnRzIiwiTWVudUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZW50IiwiTWVudSIsIml0ZW1zIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJQcm92aWRlciIsInZhbHVlIiwibWVudUl0ZW1zIiwibGluayIsIl9pdGVtIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsIlNpZGVNZW51SXRlbSIsImtleSIsIl9yb3V0aW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJJY29uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRlbnQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtcy50cyIsIi90cy9saXN0L2luZGV4LnRzeCIsIi90cy9saXN0L2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPLE1BQU1JLGVBQWUsR0FBR0EsQ0FBQztZQUFFQztVQUFLLENBQUUsS0FBaUI7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