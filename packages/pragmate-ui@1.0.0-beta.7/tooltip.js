System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "tippy.js@6.3.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_tippyJs) {
      dependency_2 = _tippyJs;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/tooltip"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['tippy.js', dependency_2]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./ITippySettings
      ********************************/
      ims.set('./ITippySettings', {
        hash: 3730348027,
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
        hash: 780162422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = Tooltip;
          var _react = require("react");
          var _tippy = require("tippy.js");
          /*bundle*/
          function Tooltip({
            children,
            content,
            placement = 'top',
            settings = {}
          }) {
            const ref = _react.default.useRef(null);
            const placements = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'];
            if (!placements.includes(placement)) placement = 'top';
            const specs = {
              placement,
              content
            };
            _react.default.useEffect(() => {
              (0, _tippy.default)(ref.current, specs);
            }, []);
            return _react.default.createElement("span", {
              ref: ref,
              className: "pui-tooltip"
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Tooltip",
        "name": "Tooltip"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Tooltip') && _export("Tooltip", Tooltip = require ? require('./index').Tooltip : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfdGlwcHkiLCJUb29sdGlwIiwiY2hpbGRyZW4iLCJjb250ZW50IiwicGxhY2VtZW50Iiwic2V0dGluZ3MiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwicGxhY2VtZW50cyIsImluY2x1ZGVzIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi9JVGlwcHlTZXR0aW5ncy50cyIsIi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFRTztVQUFVLFNBQVVFLE9BQU9BLENBQUM7WUFBQ0MsUUFBUTtZQUFFQyxPQUFPO1lBQUVDLFNBQVMsR0FBRyxLQUFLO1lBQUVDLFFBQVEsR0FBRztVQUFFLENBQVM7WUFDL0YsTUFBTUMsR0FBRyxHQUFHUixNQUFBLENBQUFTLE9BQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNQyxVQUFVLEdBQWEsQ0FDNUIsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsT0FBTyxFQUNQLGFBQWEsRUFDYixXQUFXLEVBQ1gsUUFBUSxFQUNSLGNBQWMsRUFDZCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLENBQ1Y7WUFFRCxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDTixTQUFTLENBQUMsRUFBRUEsU0FBUyxHQUFHLEtBQUs7WUFDdEQsTUFBTU8sS0FBSyxHQUFtQjtjQUFDUCxTQUFTO2NBQUVEO1lBQU8sQ0FBQztZQUNsREwsTUFBQSxDQUFBUyxPQUFLLENBQUNLLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUFaLE1BQUEsQ0FBQU8sT0FBSyxFQUFDRCxHQUFHLENBQUNPLE9BQU8sRUFBRUYsS0FBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDYixNQUFBLENBQUFTLE9BQUEsQ0FBQU8sYUFBQTtjQUFNUixHQUFHLEVBQUVBLEdBQUc7Y0FBRVMsU0FBUyxFQUFDO1lBQWEsR0FDckNiLFFBQVEsQ0FDSDtVQUVUIiwiaWdub3JlTGlzdCI6W119