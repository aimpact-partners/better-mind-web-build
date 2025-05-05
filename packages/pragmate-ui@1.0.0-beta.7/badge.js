System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Badge, __beyond_pkg, hmr;
  _export("Badge", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_3 = _pragmateUi100Beta7Base;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/badge"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/badge');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3109853727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Badge = Badge;
          var _react = require("react");
          /*bundle*/
          function Badge({
            children,
            value,
            visible = false,
            variant = 'default',
            dot
          }) {
            const classes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'default'];
            let cls = `pui-badge${classes.includes(variant) ? ` pui-badge--${variant}` : ''}`;
            if (visible) cls += ' pui-badge--visible';
            if (value) cls += ' pui-badge--has-value';
            if (dot) cls += ' dot';
            return _react.default.createElement("div", {
              className: "pui-badge__container"
            }, _react.default.createElement("div", {
              className: "content-children"
            }, children), _react.default.createElement("span", {
              className: cls
            }, value));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Badge",
        "name": "Badge"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Badge') && _export("Badge", Badge = require ? require('./index').Badge : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQmFkZ2UiLCJjaGlsZHJlbiIsInZhbHVlIiwidmlzaWJsZSIsInZhcmlhbnQiLCJkb3QiLCJjbGFzc2VzIiwiY2xzIiwiaW5jbHVkZXMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVVPO1VBQVUsU0FBVUMsS0FBS0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLEtBQUs7WUFBRUMsT0FBTyxHQUFHLEtBQUs7WUFBRUMsT0FBTyxHQUFHLFNBQVM7WUFBRUM7VUFBRyxDQUFVO1lBQ3RHLE1BQU1DLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUMzRixJQUFJQyxHQUFHLEdBQUcsWUFBWUQsT0FBTyxDQUFDRSxRQUFRLENBQUNKLE9BQU8sQ0FBQyxHQUFHLGVBQWVBLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNqRixJQUFJRCxPQUFPLEVBQUVJLEdBQUcsSUFBSSxxQkFBcUI7WUFDekMsSUFBSUwsS0FBSyxFQUFFSyxHQUFHLElBQUksdUJBQXVCO1lBQ3pDLElBQUlGLEdBQUcsRUFBRUUsR0FBRyxJQUFJLE1BQU07WUFFdEIsT0FDQ1QsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDYixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FBRVYsUUFBUSxDQUFPLEVBQ2xESCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUVKO1lBQUcsR0FBR0wsS0FBSyxDQUFRLENBQy9CO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=