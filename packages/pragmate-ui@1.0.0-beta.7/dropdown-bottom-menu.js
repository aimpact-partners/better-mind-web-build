System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DropdownBottomMenu, __beyond_pkg, hmr;
  _export("DropdownBottomMenu", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_3 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/dropdown-bottom-menu"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/dropdown-bottom-menu');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 3481600907,
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
        hash: 1436471338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownBottomMenu = DropdownBottomMenu;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _list = require("./list");
          /*bundle*/
          function DropdownBottomMenu({
            handleClick,
            show,
            items,
            children,
            isImage,
            title
          }) {
            const cls = show ? "pull-down-menu" : "pull-down-menu pull-down-menu__hide";
            const isItems = !!items && Array.isArray(items);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: cls
            }, (title || isImage) && _react.default.createElement("header", null, isImage && _react.default.createElement("div", {
              className: "image-menu"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/dummy.svg`,
              alt: " "
            })), title && _react.default.createElement("span", null, title)), isItems && _react.default.createElement(_list.MenuList, {
              items: items
            }), children), show && _react.default.createElement("div", {
              onClick: handleClick,
              className: "background-black"
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 4263323519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const MenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            return _react.default.createElement("li", {
              className: "pull-down-menu__item"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("a", {
              href: link
            }, title));
          };
          exports.MenuItem = MenuItem;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 3770438484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuList = void 0;
          var _react = require("react");
          var _item = require("./item");
          const MenuList = ({
            items
          }) => {
            const output = items.map(item => _react.default.createElement(_item.MenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: "pull-down-menu__list"
            }, output);
          };
          exports.MenuList = MenuList;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DropdownBottomMenu",
        "name": "DropdownBottomMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownBottomMenu') && _export("DropdownBottomMenu", DropdownBottomMenu = require ? require('./index').DropdownBottomMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaW1hZ2UiLCJfbGlzdCIsIkRyb3Bkb3duQm90dG9tTWVudSIsImhhbmRsZUNsaWNrIiwic2hvdyIsIml0ZW1zIiwiY2hpbGRyZW4iLCJpc0ltYWdlIiwidGl0bGUiLCJjbHMiLCJpc0l0ZW1zIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJNZW51TGlzdCIsIm9uQ2xpY2siLCJfaWNvbnMiLCJNZW51SXRlbSIsIml0ZW0iLCJsaW5rIiwiaWNvbiIsIkljb24iLCJocmVmIiwiX2l0ZW0iLCJvdXRwdXQiLCJtYXAiLCJrZXkiXSwic291cmNlcyI6WyIvZGVmaW5pdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUFVRyxrQkFBa0JBLENBQUM7WUFDNUNDLFdBQVc7WUFDWEMsSUFBSTtZQUNKQyxLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsT0FBTztZQUNQQztVQUFLLENBQ1U7WUFDZixNQUFNQyxHQUFHLEdBQVdMLElBQUksR0FDcEIsZ0JBQWdCLEdBQ2hCLHFDQUFxQztZQUN6QyxNQUFNTSxP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