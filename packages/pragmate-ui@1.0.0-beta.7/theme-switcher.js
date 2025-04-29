System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ThemeSwitcher, __beyond_pkg, hmr;
  _export("ThemeSwitcher", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_3 = _pragmateUi100Beta7Form;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/theme-switcher"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/theme-switcher');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1174528906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ? themeStorage === 'dark' : defaultTheme === 'dark';
            const [isDark, setIsDark] = _react.default.useState(userTheme);
            function handleChange({
              target
            }) {
              const container = document.querySelector('html');
              const theme = isDark ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              setIsDark(target.checked);
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            const icon = isDark ? 'moon' : 'sun';
            return _react.default.createElement("div", {
              className: "theme"
            }, _react.default.createElement("div", {
              className: "container-theme"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement(_form.Switch, {
              className: "checkbox",
              checked: isDark,
              onChange: handleChange
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./index').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zvcm0iLCJfaWNvbnMiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsImNoZWNrZWQiLCJ1c2VFZmZlY3QiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb24iLCJTd2l0Y2giLCJvbkNoYW5nZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxTQUFVRyxhQUFhQSxDQUFBO1lBQ3ZDLE1BQU1DLEtBQUssR0FBR0MsVUFBVSxFQUFFQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTztZQUM1RSxNQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNsRCxNQUFNQyxZQUFZLEdBQVdQLEtBQUssR0FBRyxNQUFNLEdBQUcsT0FBTztZQUNyRCxNQUFNUSxTQUFTLEdBQVlKLFlBQVksR0FBR0EsWUFBWSxLQUFLLE1BQU0sR0FBR0csWUFBWSxLQUFLLE1BQU07WUFDM0YsTUFBTSxDQUFDRSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHZixNQUFBLENBQUFnQixPQUFLLENBQUNDLFFBQVEsQ0FBVUosU0FBUyxDQUFDO1lBRTlELFNBQVNLLFlBQVlBLENBQUM7Y0FBQ0M7WUFBTSxDQUFDO2NBQzdCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU1qQixLQUFLLEdBQUdTLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtjQUN2Q00sU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVsQixLQUFLLENBQUM7Y0FDakRLLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLE9BQU8sRUFBRW5CLEtBQUssQ0FBQztjQUNwQ1UsU0FBUyxDQUFDSSxNQUFNLENBQUNNLE9BQU8sQ0FBQztZQUMxQjtZQUVBekIsTUFBQSxDQUFBZ0IsT0FBSyxDQUFDVSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNqQixZQUFZLEVBQUU7Y0FDbkIsTUFBTVcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaERGLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFZCxZQUFZLENBQUM7WUFDekQsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVOLE1BQU1rQixJQUFJLEdBQVdiLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSztZQUM1QyxPQUNDZCxNQUFBLENBQUFnQixPQUFBLENBQUFZLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQU8sR0FDckI3QixNQUFBLENBQUFnQixPQUFBLENBQUFZLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CN0IsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBWSxhQUFBLENBQUN6QixNQUFBLENBQUEyQixJQUFJO2NBQUNILElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3BCM0IsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBWSxhQUFBLENBQUMxQixLQUFBLENBQUE2QixNQUFNO2NBQUNGLFNBQVMsRUFBQyxVQUFVO2NBQUNKLE9BQU8sRUFBRVgsTUFBTTtjQUFFa0IsUUFBUSxFQUFFZDtZQUFZLEVBQUksQ0FDbkUsQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119