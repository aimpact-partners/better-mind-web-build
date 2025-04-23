System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.4/entities/collection", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.1.0/tracking", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_4 = _beyondJsReactive204EntitiesCollection;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_5 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsReactive204Model) {
      dependency_6 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_8 = _aimpactAilearnSdk110Tracking;
    }, function (_react) {
      dependency_9 = _react;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/test"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/entities/collection', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/ailearn-sdk/tracking', dependency_8], ['react', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-test-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/test",
        "is": "page",
        "route": "/dev/test",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/test');
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

      /**********************************
      INTERNAL MODULE: ./model/collection
      **********************************/

      ims.set('./model/collection', {
        hash: 3327551805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TestCollection = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          class TestCollection extends _collection.Collection {
            constructor() {
              super({
                entity: 'User',
                item: _item.User,
                provider: _provider.CollectionProvider
              });
            }
            async load() {
              const data = await super.load();
              return data;
            }
          }
          exports.TestCollection = TestCollection;
          globalThis.Collection = TestCollection;
          console.log(`Collection is being exposed as TestCollection in globaThis`);
        }
      });

      /****************************
      INTERNAL MODULE: ./model/item
      ****************************/

      ims.set('./model/item', {
        hash: 3960757210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class User extends _item.Item {
            constructor(specs = {}) {
              super({
                entity: 'User',
                properties: ['id', 'name'],
                ...specs
              });
            }
          }
          exports.User = User;
          globalThis.Item = User;
          console.log(`Item is being exposed as User in globaThis`);
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/model
      *****************************/

      ims.set('./model/model', {
        hash: 1000608760,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _model = require("@beyond-js/reactive/model");
          class User extends _model.ReactiveModel {
            constructor() {
              super({
                properties: ['id', 'name', {
                  name: 'data'
                }]
              });
            }
          }
          exports.User = User;
          globalThis.Model = User;
          console.log(`Model is being exposed as User in globaThis`);
        }
      });

      /********************************
      INTERNAL MODULE: ./model/provider
      ********************************/

      ims.set('./model/provider', {
        hash: 2831555185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionProvider = void 0;
          var _core = require("@beyond-js/kernel/core");
          class CollectionProvider {
            async list() {
              const promise = new _core.PendingPromise();
              setTimeout(() => {
                promise.resolve([{
                  id: 1,
                  name: 'Julio'
                }, {
                  id: 2,
                  name: 'Julia'
                }]);
              }, 1000);
              return promise;
            }
          }
          exports.CollectionProvider = CollectionProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2339039230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager {
            constructor() {
              const dashboard = new _tracking.TrackingDashboard({
                id: '7470db91-c4ed-49a2-98dd-9759fcf377ae'
              });
              globalThis.dashboard = dashboard;
              console.log(`TrackingDashboard is being exposed to the global scope as 'dashboard'`);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2049386435,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          /*bundle*/
          function View() {
            return React.createElement("div", {
              className: "grid-container"
            }, React.createElement("div", {
              className: "header"
            }, "Header fijo"), React.createElement("div", {
              className: "child-2"
            }, "Contenido de Child 2 (scrollable)", React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo")), React.createElement("div", {
              className: "child-3"
            }, "Contenido de Child 3 (scrollable)", React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo"), React.createElement("p", null, "hola mundo")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2NvbGxlY3Rpb24iLCJfaXRlbSIsIl9wcm92aWRlciIsIlRlc3RDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsIlVzZXIiLCJwcm92aWRlciIsIkNvbGxlY3Rpb25Qcm92aWRlciIsImxvYWQiLCJkYXRhIiwiZ2xvYmFsVGhpcyIsImNvbnNvbGUiLCJsb2ciLCJJdGVtIiwic3BlY3MiLCJwcm9wZXJ0aWVzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsIm5hbWUiLCJNb2RlbCIsIl9jb3JlIiwibGlzdCIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwiaWQiLCJfdHJhY2tpbmciLCJkYXNoYm9hcmQiLCJUcmFja2luZ0Rhc2hib2FyZCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2NvbGxlY3Rpb24udHMiLCIvdHMvbW9kZWwvaXRlbS50cyIsIi90cy9tb2RlbC9tb2RlbC50cyIsIi90cy9tb2RlbC9wcm92aWRlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFB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