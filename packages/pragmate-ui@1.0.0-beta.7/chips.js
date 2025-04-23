System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/ripple", "tippy.js@6.3.7", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Ripple) {
      dependency_3 = _pragmateUi100Beta7Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_5 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Base) {
      dependency_6 = _pragmateUi100Beta7Base;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/base', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/chips');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./chip
      **********************/
      ims.set('./chip', {
        hash: 4064505056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Chip(props) {
            const {
              type,
              title,
              children,
              icon
            } = props;
            const properties = {
              ...props
            };
            const ref = _react.default.useRef(null);
            ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);
            _react.default.useEffect(() => {
              if (properties.onClick) {
                const ripple = new _ripple.RippleEffect();
                ripple.addRippleEffect(ref.current);
              }
              if (title) (0, _tippy.default)(ref.current);
            }, [properties.onClick, title]);
            if (title) properties['data-tippy-content'] = title;
            const variant = props.variant || props.type || 'default';
            let cls = `pui-chip pui-chip--${variant}`;
            if (properties.onClick) {
              cls += ` is-clickable`;
            }
            return _react.default.createElement("span", {
              ref: ref,
              className: cls,
              ...properties
            }, children, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3044580695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chips = Chips;
          var _react = require("react");
          /*bundle*/
          function Chips(props) {
            const {
              children
            } = props;
            const properties = {
              ...props
            };
            ['items', 'type', 'variant'].forEach(key => delete properties[key]);
            // const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
            const variant = props.variant || props.type || 'default';
            const cls = `pui-chip__container pui-chip__container--${variant}`;
            properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;
            return _react.default.createElement("div", {
              ...properties
            }, _react.default.createElement("div", {
              className: 'content-chip'
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 710310839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chip",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./index",
        "from": "Chips",
        "name": "Chips"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
        (require || prop === 'Chips') && _export("Chips", Chips = require ? require('./index').Chips : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl90aXBweSIsIl9pY29ucyIsIkNoaXAiLCJwcm9wcyIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwidmFyaWFudCIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiQ2hpcHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jaGlwLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFLTztVQUFVLFNBQVVJLElBQUlBLENBQUNDLEtBQWdCO1lBQzVDLE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSSxDQUFFLEdBQUdKLEtBQUs7WUFDN0MsTUFBTUssVUFBVSxHQUFHO2NBQUUsR0FBR0w7WUFBSyxDQUFFO1lBQy9CLE1BQU1NLEdBQUcsR0FBR1osTUFBQSxDQUFBYSxPQUFLLENBQUNDLE1BQU0sQ0FBa0IsSUFBSSxDQUFDO1lBRS9DLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxJ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