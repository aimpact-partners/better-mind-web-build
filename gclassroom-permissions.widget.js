System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-app@0.4.1/model/gclassroom", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_3 = _beyondJsReact18Widgets114Base;
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnApp041ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp041ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_7 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_9 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/gclassroom-permissions",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/alert', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/image', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/gclassroom-permissions.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/gclassroom-permissions.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2254236919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _view = require("./view");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _view.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 652728289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          class StoreManager extends _model.ReactiveModel {
            get authorized() {
              return _gclassroom.gclassroom.authorized;
            }
            #gclassrooms = [];
            get gclassrooms() {
              return this.#gclassrooms;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 1709527010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState(null);
            if (!textsReady) return null;
            const onClick = async event => {
              try {
                setFetching(true);
                const url = await _gclassroom.gclassroom.getUrl();
                if (!url) {
                  throw new Error('ERROR_GETTING_URL');
                }
                setFetching(false);
                window.location.href = url;
              } catch (e) {
                console.error(3, texts.ERROR_GETTING_URL, e);
                setError(texts.ERROR_GETTING_URL);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("div", {
              className: "gclassroom__container"
            }, _react.default.createElement("div", {
              className: "card"
            }, _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("span", {
              className: "h5"
            }, texts.preTitle), _react.default.createElement("h3", {
              className: "h3"
            }, texts.title), _react.default.createElement(_image.Image, {
              src: "/assets/gclassroom.png",
              alt: "Google classroom"
            }), error && _react.default.createElement(_alert.Alert, {
              type: "error"
            }, error), _react.default.createElement("span", {
              className: "instructions_text"
            }, texts.instructions), _react.default.createElement("section", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              loading: fetching,
              className: "btn btn-primary"
            }, texts.action)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./view",
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
        (require || prop === 'View') && _export("View", View = require ? require('./view').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlldyIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfbW9kZWwiLCJfZ2NsYXNzcm9vbSIsIlJlYWN0aXZlTW9kZWwiLCJhdXRob3JpemVkIiwiZ2NsYXNzcm9vbSIsImdjbGFzc3Jvb21zIiwiX3JlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfYWxlcnQiLCJfaG9va3MiLCJfaW1hZ2UiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25DbGljayIsImV2ZW50IiwidXJsIiwiZ2V0VXJsIiwiRXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlIiwiY29uc29sZSIsIkVSUk9SX0dFVFRJTkdfVVJMIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInByZVRpdGxlIiwidGl0bGUiLCJJbWFnZSIsInNyYyIsImFsdCIsIkFsZXJ0IiwidHlwZSIsImluc3RydWN0aW9ucyIsIkJ1dHRvbiIsImxvYWRpbmciLCJhY3Rpb24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFG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