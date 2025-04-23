System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "framer-motion@10.18.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BaseComponent, IPUIProps, __beyond_pkg, hmr;
  _export({
    BaseComponent: void 0,
    IPUIProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2707386817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseComponent = BaseComponent;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/ // Create the base component using a function with a constructor
          function BaseComponent({
            as = 'div',
            motion: useMotion = false,
            children,
            ...restProps
          }) {
            // Create the element dynamically
            const Element = useMotion ? _framerMotion.motion[as] : as;
            return _react.default.createElement(Element, restProps, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 577170094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BaseComponent",
        "name": "BaseComponent"
      }, {
        "im": "./types",
        "from": "IPUIProps",
        "name": "IPUIProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BaseComponent') && _export("BaseComponent", BaseComponent = require ? require('./index').BaseComponent : value);
        (require || prop === 'IPUIProps') && _export("IPUIProps", IPUIProps = require ? require('./types').IPUIProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkJhc2VDb21wb25lbnQiLCJhcyIsIm1vdGlvbiIsInVzZU1vdGlvbiIsImNoaWxkcmVuIiwicmVzdFByb3BzIiwiRWxlbWVudCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQVNPLFdBRFA7VUFDaUIsU0FBVUUsYUFBYUEsQ0FBa0I7WUFDekRDLEVBQUUsR0FBRyxLQUFLO1lBQ1ZDLE1BQU0sRUFBRUMsU0FBUyxHQUFHLEtBQUs7WUFDekJDLFFBQVE7WUFDUixHQUFHQztVQUFTLENBQ1c7WUFDdkI7WUFDQSxNQUFNQyxPQUFPLEdBQUdILFNBQVMsR0FBR0osYUFBQSxDQUFBRyxNQUFNLENBQUNELEVBQUUsQ0FBQyxHQUFHQSxFQUFFO1lBRTNDLE9BQU9KLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxhQUFhLENBQUNGLE9BQU8sRUFBRUQsU0FBUyxFQUFFRCxRQUFRLENBQUM7VUFDekQ7Ozs7Ozs7Ozs7O1VDcEJBOztVQUVBSyxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=