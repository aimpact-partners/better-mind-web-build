System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Empty, __beyond_pkg, hmr;
  _export("Empty", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Base) {
      dependency_4 = _pragmateUi100Beta7Base;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/empty"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 2550635151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Empty(props) {
            const cls = `${props.className ?? ''} pui-empty-section`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "content"
            }, props.icon && _react.default.createElement(_icons.Icon, {
              className: "pui-empty__icon",
              icon: props.icon
            }), props.text && _react.default.createElement("h3", null, props.text), props.children && props.children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./empty",
        "from": "Empty",
        "name": "Empty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Empty') && _export("Empty", Empty = require ? require('./empty').Empty : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiRW1wdHkiLCJwcm9wcyIsImNscyIsImNsYXNzTmFtZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiaWNvbiIsIkljb24iLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvdHMvZW1wdHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQVFPO1VBQVUsU0FDUkUsS0FBS0EsQ0FBQ0MsS0FBa0I7WUFDaEMsTUFBTUMsR0FBRyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsb0JBQW9CO1lBRXhELE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtGLFNBQVMsRUFBRUQ7WUFBRyxHQUNsQkwsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS0YsU0FBUyxFQUFDO1lBQVMsR0FDdEJGLEtBQUssQ0FBQ0ssSUFBSSxJQUFJVCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixNQUFBLENBQUFRLElBQUk7Y0FBQ0osU0FBUyxFQUFDLGlCQUFpQjtjQUFDRyxJQUFJLEVBQUVMLEtBQUssQ0FBQ0s7WUFBSSxFQUFJLEVBQ3BFTCxLQUFLLENBQUNPLElBQUksSUFBSVgsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsYUFBS0osS0FBSyxDQUFDTyxJQUFJLENBQU0sRUFDbkNQLEtBQUssQ0FBQ1EsUUFBUSxJQUFJUixLQUFLLENBQUNRLFFBQVEsQ0FDNUIsQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119