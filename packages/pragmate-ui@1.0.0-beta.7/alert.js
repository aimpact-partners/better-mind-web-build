System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Alert, ITypes, IAlertTypes, __beyond_pkg, hmr;
  _export({
    Alert: void 0,
    ITypes: void 0,
    IAlertTypes: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Base) {
      dependency_3 = _pragmateUi100Beta7Base;
    }, function (_beyondJsKernel0112Styles) {
      dependency_4 = _beyondJsKernel0112Styles;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/alert"
        },
        "type": "code",
        "name": "alert"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/base', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/alert');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 2270589349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alert = Alert;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _content = require("./content");
          /*bundle*/
          function Alert({
            message,
            className,
            type,
            title,
            children,
            closable,
            onClose,
            icon
          }) {
            const [show, setShow] = _react.default.useState(true);
            if (!show || !message && !children) return null;
            const onClick = async event => {
              event.stopPropagation();
              if (onClose) await onClose();
              setShow(false);
            };
            let cls = `${className ? `${className} ` : ''} alert${type ? ` alert--${type}` : ''}`;
            cls = icon ? `${cls} alert--icon` : cls;
            const icons = {
              error: 'error',
              warning: 'circle-exclamation',
              success: 'circle-check',
              info: 'info'
            };
            const defaultIcon = icons[type ?? 'success'];
            const hasIcon = !!icon;
            const attributes = {
              className: cls
            };
            if (closable) attributes.onClick = onClick;
            return _react.default.createElement("div", {
              ...attributes
            }, icon && _react.default.createElement("section", null, _react.default.createElement(_icons.Icon, {
              icon: defaultIcon
            })), _react.default.createElement(_content.Content, {
              message: message,
              title: title,
              icon: hasIcon
            }, children), closable && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              onClick: onClick
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 413242283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = Content;
          var _react = require("react");
          function Content({
            message,
            children,
            title,
            icon
          }) {
            let output = [];
            if (title) {
              output.push(_react.default.createElement("header", {
                key: "title",
                className: "alert__title"
              }, _react.default.createElement("h3", {
                className: "alert__title-span",
                dangerouslySetInnerHTML: {
                  __html: title
                }
              })));
            }
            if (message) {
              output.push(_react.default.createElement("span", {
                key: "message",
                dangerouslySetInnerHTML: {
                  __html: message
                }
              }));
            }
            const Control = icon ? 'section' : _react.default.Fragment;
            return _react.default.createElement(Control, null, output, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 886766178,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ITypes = exports.IAlertTypes = void 0;
          /*bundle*/
          var ITypes;
          (function (ITypes) {
            ITypes["Error"] = "error";
            ITypes["Warning"] = "warning";
            ITypes["Success"] = "success";
            ITypes["Info"] = "info";
          })(ITypes || (exports.ITypes = ITypes = {}));
          /*bundle*/
          const IAlertTypes = exports.IAlertTypes = ITypes;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "Alert",
        "name": "Alert"
      }, {
        "im": "./types",
        "from": "ITypes",
        "name": "ITypes"
      }, {
        "im": "./types",
        "from": "IAlertTypes",
        "name": "IAlertTypes"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Alert') && _export("Alert", Alert = require ? require('./alert').Alert : value);
        (require || prop === 'ITypes') && _export("ITypes", ITypes = require ? require('./types').ITypes : value);
        (require || prop === 'IAlertTypes') && _export("IAlertTypes", IAlertTypes = require ? require('./types').IAlertTypes : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2NvbnRlbnQiLCJBbGVydCIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJ0eXBlIiwidGl0bGUiLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsImljb24iLCJzaG93Iiwic2V0U2hvdyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsImljb25zIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImluZm8iLCJkZWZhdWx0SWNvbiIsImhhc0ljb24iLCJhdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJDb250ZW50IiwiSWNvbkJ1dHRvbiIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIklUeXBlcyIsImV4cG9ydHMiLCJJQWxlcnRUeXBlcyJdLCJzb3VyY2VzIjpbIi90cy9hbGVydC50c3giLCIvdHMvY29udGVudC50c3giLCIvdHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUNSRyxLQUFLQSxDQUFDO1lBQUVDLE9BQU87WUFBRUMsU0FBUztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRUM7VUFBSSxDQUFVO1lBQzVGLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR2QsTUFBQSxDQUFBZSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJ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