System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/events@0.0.7/events", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
  _export({
    Toasts: void 0,
    ToastTypes: void 0,
    IToast: void 0,
    toast: void 0,
    Toast: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsEvents007Events) {
      dependency_3 = _beyondJsEvents007Events;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/toast"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/events/events', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/toast');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 3587947160,
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
        hash: 135744299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toasts = Toasts;
          var _react = require("react");
          var _model = require("./model");
          var _toast = require("./toast");
          /*bundle*/
          function Toasts({
            position = {
              bottom: '1rem',
              right: '1rem'
            },
            className,
            ...props
          }) {
            const [items, setItems] = _react.default.useState([]);
            _react.default.useEffect(() => {
              const listener = () => setItems(_model.toast.current);
              _model.toast.on('current.toast.changed', listener);
              () => {
                _model.toast.off('current.toast.changed', listener);
              };
            }, []);
            const elements = items.map(item => _react.default.createElement(_toast.Toast, {
              key: item.id,
              ...item,
              className: className,
              position: position
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `pui-toast__container ${className}`,
              ...props
            }, elements);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1944552155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toast = void 0;
          var _events = require("@beyond-js/events/events");
          class Toast extends _events.Events {
            #current;
            get current() {
              return this.#current;
            }
            set current(newValue) {
              this.#current = newValue;
              this.trigger('current.toast.changed');
            }
            constructor() {
              super();
              this.#current = [];
            }
            #generateUniqueId() {
              return crypto.getRandomValues(new Uint8Array(16)).toString();
            }
            #add(type, message, duration) {
              const newToast = {
                id: this.#generateUniqueId(),
                message,
                type,
                duration
              };
              this.#current = [...this.#current, newToast];
              this.trigger('current.toast.changed');
              return newToast.id;
            }
            remove(toastId) {
              this.#current = this.#current.filter(toast => toast.id !== toastId);
              this.trigger('current.toast.changed');
            }
            success(message, duration) {
              return this.#add('success', message, duration);
            }
            error(message, duration) {
              return this.#add('error', message, duration);
            }
            warning(message, duration) {
              return this.#add('warning', message, duration);
            }
            info(message, duration) {
              return this.#add('info', message, duration);
            }
            loading(message, duration) {
              return this.#add('loading', message, duration);
            }
          }
          /*bundle*/
          const toast = exports.toast = new Toast();
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 655369133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = Toast;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useToast = require("./use-toast");
          const DEFAULT_DURATION = 3000;
          /*bundle*/
          function Toast({
            type,
            message,
            duration,
            id
          }) {
            const toastRef = _react.default.useRef(null);
            duration = duration ?? DEFAULT_DURATION;
            (0, _useToast.useToastAnimation)(toastRef, duration, id);
            const icons = {
              error: 'triangle-exclamation',
              success: 'tickCircle',
              info: 'infoCircle',
              loading: 'refreshCircle',
              warning: 'warning'
            };
            return _react.default.createElement("article", {
              ref: toastRef,
              className: `toast ${type}`
            }, _react.default.createElement(_icons.Icon, {
              icon: icons[type],
              className: 'icon'
            }), _react.default.createElement("p", {
              className: 'message'
            }, message));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-toast
      ***************************/

      ims.set('./use-toast', {
        hash: 3446030186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useToastAnimation = useToastAnimation;
          var _react = require("react");
          var _model = require("./model");
          const ANIMATION_MARGIN = 300;
          function useToastAnimation(ref, duration, id) {
            _react.default.useEffect(() => {
              if (ref.current) {
                ref.current.classList.add('enter');
              }
              return () => {
                if (ref.current) ref.current.classList.remove('enter');
              };
            }, [ref]);
            _react.default.useEffect(() => {
              const enterTimeout = setTimeout(() => {
                if (ref.current) {
                  ref.current.classList.remove('enter');
                  ref.current.classList.add('exit');
                }
              }, duration);
              const exitTimeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => {
                clearTimeout(enterTimeout);
                clearTimeout(exitTimeout);
              };
            }, [duration, id, ref]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Toasts",
        "name": "Toasts"
      }, {
        "im": "./model",
        "from": "ToastTypes",
        "name": "ToastTypes"
      }, {
        "im": "./model",
        "from": "IToast",
        "name": "IToast"
      }, {
        "im": "./model",
        "from": "toast",
        "name": "toast"
      }, {
        "im": "./toast",
        "from": "Toast",
        "name": "Toast"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Toasts') && _export("Toasts", Toasts = require ? require('./index').Toasts : value);
        (require || prop === 'ToastTypes') && _export("ToastTypes", ToastTypes = require ? require('./model').ToastTypes : value);
        (require || prop === 'IToast') && _export("IToast", IToast = require ? require('./model').IToast : value);
        (require || prop === 'toast') && _export("toast", toast = require ? require('./model').toast : value);
        (require || prop === 'Toast') && _export("Toast", Toast = require ? require('./toast').Toast : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfbW9kZWwiLCJfdG9hc3QiLCJUb2FzdHMiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJ0b2FzdCIsImN1cnJlbnQiLCJvbiIsIm9mZiIsImVsZW1lbnRzIiwibWFwIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJUb2FzdCIsImtleSIsImlkIiwic3R5bGUiLCJfZXZlbnRzIiwiRXZlbnRzIiwibmV3VmFsdWUiLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJnZW5lcmF0ZVVuaXF1ZUlkIiwiI2dlbmVyYXRlVW5pcXVlSWQiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwidG9TdHJpbmciLCJhZGQiLCIjYWRkIiwidHlwZSIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsIm5ld1RvYXN0IiwicmVtb3ZlIiwidG9hc3RJZCIsImZpbHRlciIsInN1Y2Nlc3MiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwibG9hZGluZyIsIl9pY29ucyIsIl91c2VUb2FzdCIsIkRFRkFVTFRfRFVSQVRJT04iLCJ0b2FzdFJlZiIsInVzZVJlZiIsInVzZVRvYXN0QW5pbWF0aW9uIiwiaWNvbnMiLCJyZWYiLCJJY29uIiwiaWNvbiIsIkFOSU1BVElPTl9NQVJHSU4iLCJjbGFzc0xpc3QiLCJlbnRlclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZXhpdFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlcyI6WyIvZGVmaW5pdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21vZGVsLnRzIiwiL3RzL3RvYXN0LnRzeCIsIi90cy91c2UtdG9hc3QudHN4Il0sInNvdXJjZXNDb250ZW50Ijpb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