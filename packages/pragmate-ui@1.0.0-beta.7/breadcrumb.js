System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "uuid@11.1.0", "pragmate-ui@1.0.0-beta.7/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_uuid2) {
      dependency_3 = _uuid2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['uuid', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1498626072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var _react = require("react");
          var _uuid = require("uuid");
          var _item = require("./item");
          /* bundle */
          function BreadCrumb({
            items,
            separator = '/',
            className,
            children,
            ...props
          }) {
            const total = items.length;
            const breadcrumbOutput = items.map(([label, link], index) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              total: total,
              index: index,
              separator: separator,
              link: link,
              label: label,
              last: total === index + 1
            }));
            let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: "pui-breadcrumb"
            }, breadcrumbOutput), children && _react.default.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 4022200267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Item({
            link,
            label,
            last,
            index,
            total,
            separator = '>'
          }) {
            const isChecked = last ? 'breadcrumb__item--current' : 'breadcrumb__item';
            const isFunction = typeof link === 'function';
            const attrs = {};
            if (isFunction) {
              attrs.onClick = link;
            } else {
              attrs.href = link;
            }
            return _react.default.createElement("li", {
              key: `${link} ${label}`,
              className: "pui-breadcrumb-item__container"
            }, _react.default.createElement(_components.Link, {
              className: isChecked,
              ...attrs
            }, label, total > index + 1 && _react.default.createElement("span", {
              className: "pui-breadcrumb__separator"
            }, separator)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2303835339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BreadCrumb",
        "name": "BreadCrumb"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BreadCrumb') && _export("BreadCrumb", BreadCrumb = require ? require('./index').BreadCrumb : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3V1aWQiLCJfaXRlbSIsIkJyZWFkQ3J1bWIiLCJpdGVtcyIsInNlcGFyYXRvciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJpbmRleCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSXRlbSIsImtleSIsInY0IiwibGFzdCIsImNscyIsIl9jb21wb25lbnRzIiwiaXNDaGVja2VkIiwiaXNGdW5jdGlvbiIsImF0dHJzIiwib25DbGljayIsImhyZWYiLCJMaW5rIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFZLFNBQVVHLFVBQVVBLENBQUM7WUFBRUMsS0FBSztZQUFFQyxTQUFTLEdBQUcsR0FBRztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDeEcsTUFBTUMsS0FBSyxHQUFHTCxLQUFLLENBQUNNLE1BQU07WUFDMUIsTUFBTUMsZ0JBQWdCLEdBQUdQLEtBQUssQ0FBQ1EsR0FBRyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxFQUFFQyxJQUFJLENBQUMsRUFBRUMsS0FBSyxLQUN2RGhCLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZixLQUFBLENBQUFnQixJQUFJO2NBQ0pDLEdBQUcsRUFBRSxJQUFBbEIsS0FBQSxDQUFBbUIsRUFBSSxHQUFFO2NBQ1hYLEtBQUssRUFBRUEsS0FBSztjQUNaTSxLQUFLLEVBQUVBLEtBQUs7Y0FDWlYsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUyxJQUFJLEVBQUVBLElBQUk7Y0FDVkQsS0FBSyxFQUFFQSxLQUFLO2NBQ1pRLElBQUksRUFBRVosS0FBSyxLQUFLTSxLQUFLLEdBQUc7WUFBQyxFQUUxQixDQUFDO1lBRUYsSUFBSU8sR0FBRyxHQUFHLDRCQUE0QmhCLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFeEUsT0FDQ1AsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtYLFNBQVMsRUFBRWdCLEdBQUc7Y0FBQSxHQUFNZDtZQUFLLEdBQzVCRyxnQkFBZ0IsQ0FBQ0QsTUFBTSxHQUFHLENBQUMsSUFBSVgsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBO2NBQUlYLFNBQVMsRUFBQztZQUFnQixHQUFFSyxnQkFBZ0IsQ0FBTSxFQUNyRkosUUFBUSxJQUFJUixNQUFBLENBQUFpQixPQUFBLENBQUFDLGFBQUEsY0FBTVYsUUFBUSxDQUFPLENBQzdCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFSLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixXQUFBLEdBQUF2QixPQUFBO1VBR00sU0FBVWtCLElBQUlBLENBQUM7WUFBRUosSUFBSTtZQUFFRCxLQUFLO1lBQUVRLElBQUk7WUFBRU4sS0FBSztZQUFFTixLQUFLO1lBQUVKLFNBQVMsR0FBRztVQUFHLENBQVM7WUFDL0UsTUFBTW1CLFNBQVMsR0FBR0gsSUFBSSxHQUFHLDJCQUEyQixHQUFHLGtCQUFrQjtZQUN6RSxNQUFNSSxVQUFVLEdBQUcsT0FBT1gsSUFBSSxLQUFLLFVBQVU7WUFDN0MsTUFBTVksS0FBSyxHQUFHLEVBQXlEO1lBQ3ZFLElBQUlELFVBQVUsRUFBRTtjQUNmQyxLQUFLLENBQUNDLE9BQU8sR0FBR2IsSUFBSTthQUNwQixNQUFNO2NBQ05ZLEtBQUssQ0FBQ0UsSUFBSSxHQUFHZCxJQUFJOztZQUdsQixPQUNDZixNQUFBLENBQUFpQixPQUFBLENBQUFDLGFBQUE7Y0FBSUUsR0FBRyxFQUFFLEdBQUdMLElBQUksSUFBSUQsS0FBSyxFQUFFO2NBQUVQLFNBQVMsRUFBQztZQUFnQyxHQUN0RVAsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBLENBQUNNLFdBQUEsQ0FBQU0sSUFBSTtjQUFDdkIsU0FBUyxFQUFFa0IsU0FBUztjQUFBLEdBQU1FO1lBQUssR0FDbkNiLEtBQUssRUFDTEosS0FBSyxHQUFHTSxLQUFLLEdBQUcsQ0FBQyxJQUFJaEIsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBO2NBQU1YLFNBQVMsRUFBQztZQUEyQixHQUFFRCxTQUFTLENBQVEsQ0FDOUUsQ0FDSDtVQUVQOzs7Ozs7Ozs7OztVQ3RCQTs7VUFFQXlCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==