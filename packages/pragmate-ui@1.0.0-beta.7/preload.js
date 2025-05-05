System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Preload, __beyond_pkg, hmr;
  _export("Preload", void 0);
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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/preload"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/preload');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 384493270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          /*bundle */
          function Preload(props) {
            const {
              width,
              height,
              color,
              stopAnimation,
              radio
            } = props;
            return _react.default.createElement("span", {
              className: 'pui-preload',
              style: {
                width: width || '100%',
                height: height || '14px',
                background: color || '',
                borderRadius: radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Preload",
        "name": "Preload"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Preload') && _export("Preload", Preload = require ? require('./index').Preload : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJlbG9hZCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInN0b3BBbmltYXRpb24iLCJyYWRpbyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFVTztVQUFXLFNBQVVDLE9BQU9BLENBQUNDLEtBQXFCO1lBQ3hELE1BQU07Y0FBRUMsS0FBSztjQUFFQyxNQUFNO2NBQUVDLEtBQUs7Y0FBRUMsYUFBYTtjQUFFQztZQUFLLENBQUUsR0FBR0wsS0FBSztZQUU1RCxPQUNDSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUNDQyxTQUFTLEVBQUMsYUFBYTtjQUN2QkMsS0FBSyxFQUFFO2dCQUNOUixLQUFLLEVBQUVBLEtBQUssSUFBSSxNQUFNO2dCQUN0QkMsTUFBTSxFQUFFQSxNQUFNLElBQUksTUFBTTtnQkFDeEJRLFVBQVUsRUFBRVAsS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZCUSxZQUFZLEVBQUVOLEtBQUssSUFBSTs7WUFDdkIsR0FFRFIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTUUsS0FBSyxFQUFFO2dCQUFFRyxPQUFPLEVBQUVSLGFBQWEsR0FBRyxNQUFNLEdBQUc7Y0FBTztZQUFFLEVBQUksQ0FDeEQ7VUFFVCIsImlnbm9yZUxpc3QiOltdfQ==