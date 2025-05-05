System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ProgressBar, __beyond_pkg, hmr;
  _export("ProgressBar", void 0);
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/progress-bar"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/progress-bar');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 2062575629,
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
        hash: 851346157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressBar = ProgressBar;
          var _react = require("react");
          /* bundle */
          function ProgressBar(props) {
            const {
              value,
              maxValue = 100,
              variant = 'primary'
            } = props;
            const percentage = value / maxValue * 100;
            const cls = variant ? `progress-bar__progress ${variant}` : 'progress-bar__progress';
            return _react.default.createElement("div", {
              className: "pui-progress-bar"
            }, _react.default.createElement("span", {
              className: cls,
              style: {
                width: `${percentage}%`
              }
            }, value, "%"));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ProgressBar",
        "name": "ProgressBar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ProgressBar') && _export("ProgressBar", ProgressBar = require ? require('./index').ProgressBar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJQcm9ncmVzc0JhciIsInByb3BzIiwibWF4VmFsdWUiLCJ2YXJpYW50IiwicGVyY2VudGFnZSIsImNscyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCJdLCJzb3VyY2VzIjpbIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBWSxTQUFVQyxXQUFXQSxDQUFDQyxLQUFhO1lBQ3JELE1BQU07Y0FBRUosS0FBSztjQUFFSyxRQUFRLEdBQUcsR0FBRztjQUFFQyxPQUFPLEdBQUc7WUFBUyxDQUFFLEdBQUdGLEtBQUs7WUFFNUQsTUFBTUcsVUFBVSxHQUFJUCxLQUFLLEdBQUdLLFFBQVEsR0FBSSxHQUFHO1lBRTNDLE1BQU1HLEdBQUcsR0FBR0YsT0FBTyxHQUFHLDBCQUEwQkEsT0FBTyxFQUFFLEdBQUcsd0JBQXdCO1lBQ3BGLE9BQ0NMLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFrQixHQUNoQ1YsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFFSCxHQUFHO2NBQUVJLEtBQUssRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEdBQUdOLFVBQVU7Y0FBRztZQUFFLEdBQ3REUCxLQUFLLEUsSUFDQSxDQUNGO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=