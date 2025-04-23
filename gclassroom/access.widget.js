System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-app@0.3.32/model/gclassroom", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnApp0332ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp0332ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_7 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_9 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/gclassroom/access",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/image', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/gclassroom/access.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1069450016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              if (this.uri.qs.get('state') && this.uri.qs.get('code')) {
                this.#store.validate(this.uri.qs.get('state'), this.uri.qs.get('code'));
              } else this.#store.ready = true;
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 774891343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
            }
            get error() {
              return _gclassroom.gclassroom.error;
            }
            get gclassroom() {
              return _gclassroom.gclassroom;
            }
            async validate(state, code) {
              try {
                this.fetching = true;
                await _gclassroom.gclassroom.callback(state, code);
                this.fetching = false;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 835630587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alert = require("pragmate-ui/alert");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              gclassroom: {
                code,
                state,
                error,
                fetching
              }
            } = store;
            const [isFetching, setFetching] = _react.default.useState(store.fetching || fetching);
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching));
            if (!textsReady || isFetching) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            return _react.default.createElement("div", {
              className: "page__container place-center"
            }, _react.default.createElement("div", {
              className: "card"
            }, _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("h1", null, texts.title), _react.default.createElement(_image.Image, {
              src: "/assets/gclassroom.png",
              alt: "Google classroom"
            }), error && _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error?.text), _react.default.createElement("h4", null, texts.subtitle))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInFzIiwiZ2V0IiwidmFsaWRhdGUiLCJyZWFkeSIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX2djbGFzc3Jvb20iLCJSZWFjdGl2ZU1vZGVsIiwiY29uc3RydWN0b3IiLCJnY2xhc3Nyb29tIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJlcnJvciIsInN0YXRlIiwiY29kZSIsImZldGNoaW5nIiwiY2FsbGJhY2siLCJlIiwiY29uc29sZSIsIl9yZWFjdCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl91aSIsIl9hbGVydCIsIl9pbWFnZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiaXNGZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VMb2FkZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiQWxlcnQiLCJ0eXBlIiwidGV4dCIsInN1YnRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtV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