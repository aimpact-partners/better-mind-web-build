System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_react) {
      dependency_6 = _react;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_7 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_8 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_9 = _pragmateUi100Beta7Components;
    }, function (_aimpactChatSdk154Session) {
      dependency_10 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_11 = _pragmateUi100Beta7Image;
    }, function (_beyondJsKernel0112Routing) {
      dependency_12 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/pages/updating",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['pragmate-ui/image', dependency_11], ['@beyond-js/kernel/routing', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-updating-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/pages/updating.widget",
        "is": "page",
        "route": "/updating"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/pages/updating.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
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
            show() {}
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
        hash: 11353178,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              super.ready = true;
              this.#texts.on('change', this.triggerEvent);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2503475440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [text, setText] = React.useState(store.texts?.text);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return null;
            const {
              texts
            } = store;
            const onClick = async event => {
              event.stopPropagation();
              setFetching(true);
              try {
                const data = await _session.sessionWrapper.user.load();
                if (data?.error?.code === 503) {
                  setText(texts.updating);
                  return;
                }
                _routing.routing.replaceState({}, null, '/');
              } catch (e) {
                console.error(e);
                setText(texts.updating);
              } finally {
                setFetching(false);
              }
            };
            const cls = `updating__container${fetching ? ' is-fetching' : ''}`;
            return React.createElement(_ui.PageContainer, null, React.createElement("div", {
              className: cls
            }, React.createElement(_image.Image, {
              src: "/assets/rvd/RVD.AI.Branding.png",
              alt: "RVD.AI"
            }), React.createElement("h1", null, texts.title), React.createElement("p", null, text ?? texts.text), React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClick,
              loading: fetching,
              disabled: fetching
            }, texts.action)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJSZWFjdCIsIl91aSIsIl9ob29rcyIsIl9jb21wb25lbnRzIiwiX3Nlc3Npb24iLCJfaW1hZ2UiLCJfcm91dGluZyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidGV4dCIsInNldFRleHQiLCJ1c2VCaW5kZXIiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwibG9hZCIsImVycm9yIiwiY29kZSIsInVwZGF0aW5nIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImUiLCJjb25zb2xlIiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJJbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImJvcmRlcmVkIiwibG9hZGluZyIsImRpc2FibGVkIiwiYWN0aW9uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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