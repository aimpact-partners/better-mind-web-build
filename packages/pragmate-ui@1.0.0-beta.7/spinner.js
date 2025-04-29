System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Spinner, __beyond_pkg, hmr;
  _export("Spinner", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/spinner');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./spinner
      *************************/
      ims.set('./spinner', {
        hash: 3225295911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          /*bundle*/
          const Spinner = exports.Spinner = (0, _react.forwardRef)((props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = className ? `${className} pragmate-element-spinner` : 'pragmate-element-spinner';
            if (active) cls += ' is-active';
            const sizes = {
              xs: 30,
              md: 40,
              lg: 50,
              xl: 60
            };
            const circleSize = sizes[size] || 30;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: '0 0 100 100'
            }, _react.default.createElement("circle", {
              cx: '50',
              cy: '50',
              r: circleSize,
              style: style
            })));
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3Bpbm5lciIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjb2xvciIsImNsYXNzTmFtZSIsInNpemUiLCJ0eXBlIiwiYWN0aXZlIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsImNscyIsInNpemVzIiwieHMiLCJtZCIsImxnIiwieGwiLCJjaXJjbGVTaXplIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlcyI6WyIvdHMvc3Bpbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBUU87VUFDUCxNQUFNQyxPQUFPLEdBQUFDLE9BQUEsQ0FBQUQsT0FBQSxHQUFrRCxJQUFBRixNQUFBLENBQUFJLFVBQVUsRUFDeEUsQ0FBQ0MsS0FBaUIsRUFBRUMsR0FBOEIsS0FBaUI7WUFDbEUsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFNBQVM7Y0FBRUMsSUFBSTtjQUFFQyxJQUFJO2NBQUVDO1lBQU0sQ0FBRSxHQUFHTixLQUFLO1lBRXBELE1BQU1PLEtBQUssR0FBRyxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUMxRyxNQUFNQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsUUFBUSxDQUFDSixJQUFJLENBQUMsR0FBR0EsSUFBSSxHQUFHLFNBQVM7WUFFdkQsTUFBTUssS0FBSyxHQUF3QixFQUFFO1lBQ3JDLElBQUlSLEtBQUssRUFBRVEsS0FBSyxDQUFDQyxNQUFNLEdBQUdULEtBQUs7WUFDL0JDLFNBQVMsR0FBRyxHQUFHSyxPQUFPLEdBQUdMLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0QsSUFBSVMsR0FBRyxHQUFXVCxTQUFTLEdBQUcsR0FBR0EsU0FBUywyQkFBMkIsR0FBRywwQkFBMEI7WUFDbEcsSUFBSUcsTUFBTSxFQUFFTSxHQUFHLElBQUksWUFBWTtZQUUvQixNQUFNQyxLQUFLLEdBQUc7Y0FDYkMsRUFBRSxFQUFFLEVBQUU7Y0FDTkMsRUFBRSxFQUFFLEVBQUU7Y0FDTkMsRUFBRSxFQUFFLEVBQUU7Y0FDTkMsRUFBRSxFQUFFO2FBQ0o7WUFDRCxNQUFNQyxVQUFVLEdBQUdMLEtBQUssQ0FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRTtZQUVwQyxPQUNDVCxNQUFBLENBQUF3QixPQUFBLENBQUFDLGFBQUE7Y0FBS2pCLFNBQVMsRUFBRVMsR0FBRztjQUFFWCxHQUFHLEVBQUVBO1lBQUcsR0FDNUJOLE1BQUEsQ0FBQXdCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxPQUFPLEVBQUM7WUFBYSxHQUN6QjFCLE1BQUEsQ0FBQXdCLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRSxFQUFFLEVBQUMsSUFBSTtjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxDQUFDLEVBQUVOLFVBQVU7Y0FBRVIsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDbEQsQ0FDRDtVQUVSLENBQUMsQ0FDRCIsImlnbm9yZUxpc3QiOltdfQ==