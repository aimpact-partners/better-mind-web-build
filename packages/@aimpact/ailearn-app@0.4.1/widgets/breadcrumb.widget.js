System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "@beyond-js/widgets@1.1.2/controller", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/breadcrumb", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, breadcrumbStore, BreacrumbStore, ROUTES, BredcrumbApp, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    breadcrumbStore: void 0,
    BreacrumbStore: void 0,
    ROUTES: void 0,
    BredcrumbApp: void 0
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
    }, function (_beyondJsWidgets112Controller) {
      dependency_4 = _beyondJsWidgets112Controller;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_6 = _beyondJsKernel0112Texts;
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_8 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Breadcrumb) {
      dependency_10 = _pragmateUi100Beta7Breadcrumb;
    }, function (_pragmateUi100Beta7Base) {
      dependency_11 = _pragmateUi100Beta7Base;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/widgets/controller', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['react', dependency_9], ['pragmate-ui/breadcrumb', dependency_10], ['pragmate-ui/base', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/widgets/breadcrumb.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/widgets/breadcrumb.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1279797166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = _store.breadcrumbStore;
              return this.#store;
            }
            get Widget() {
              return _views.BredcrumbApp;
            }
            manageWidget() {
              this.widget.update = this.#store.update;
              globalThis.a = this.widget;
            }
            update() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 492887047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.breadcrumbStore = exports.Store = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          class Store extends _model.ReactiveModel {
            isStore;
            constructor() {
              super({
                properties: ['items']
              });
              super.ready = true;
              globalThis.draft = new _learningModules.Draft();
            }
            triggerBreadcrumbChange = () => {
              this.trigger('breadcrumb.changed');
            };
          }
          exports.Store = Store;
          /*bundle*/
          const breadcrumbStore = exports.breadcrumbStore = new Store();
          globalThis.bc = breadcrumbStore;
        }
      });

      /******************************
      INTERNAL MODULE: ./store/routes
      ******************************/

      ims.set('./store/routes', {
        hash: 1891376527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ROUTES = void 0;
          /*bundle*/
          const ROUTES = exports.ROUTES = {
            '/': [['home']],
            '/users/me': [['profile']],
            '/community': [['community']],
            '/modules/management': [['modules', '/modules/list'], ['management']],
            '/assignments/${id}': [['assignments']],
            '/modules/${id}': [['assignments']],
            '/modules/list': [['modules']],
            '/classrooms/list': [['classrooms']],
            '/classrooms/join': [['classrooms', '/classrooms/list'], ['joinClassroom']],
            '/classrooms/management': [['classrooms', '/classrooms/list'], ['createClassroom']],
            '/classrooms/view/${id}': [['classrooms', '/classrooms/list'], ['view']],
            '/organizations/list': [['organizations']],
            '/organizations/join': [['organizations', '/organizations/list'], ['joinOrganization']],
            '/organizations/view/${id}': [['organizations', '/organizations/list'], ['view']],
            '/organizations/management': [['organizations', '/organizations/list'], ['createOrganization']],
            '/dashboard/${id}': [['classrooms', '/classrooms/list'], ['dashboard']]
          };
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/types
      *****************************/

      ims.set('./store/types', {
        hash: 3005261894,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2225757465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BredcrumbApp = BredcrumbApp;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function BredcrumbApp({
            store,
            className
          }) {
            const cls = `desktop-breadcrumb${className ? ` ${className}` : ''}`;
            const [, setUpdated] = _react.default.useState({});
            const [, setReady] = _react.default.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setUpdated({}), 'items.changed');
            if (!store.ready || !store.items) return null;
            return _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: cls,
              items: store.items,
              separator: ":"
            });
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/use-breadcrumb
      **************************************/

      ims.set('./views/use-breadcrumb', {
        hash: 3197939643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBreadcrumb = useBreadcrumb;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _beyond_context = require("beyond_context");
          var _render = require("@beyond-js/widgets/render");
          var _routes = require("../store/routes");
          const pages = [..._render.widgets.values()].filter(item => item.is === 'page');
          function useBreadcrumb() {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState([['Home', '/']]);
            (0, _react.useEffect)(() => {
              function validate(pattern, url) {
                // const regexp = /\/:[\wáéíóúÁÉÍÓÚñÑ]+/g;
                const regexp = /\$\{[\wáéíóúÁÉÍÓÚñÑ]+\}/g;
                const finalPattern = pattern.replace(regexp, '/\\w+');
                const obj = new RegExp(`^${finalPattern}$`, 'g');
                // Tes0ea la URL contra el patrón generado
                return obj.test(url);
              }
              if (!ready) return;
              const widget = pages.find(item => validate(item.route, _routing.routing.uri.pathname));
              const getTexts = items => {
                return items.map(item => {
                  return [texts[item[0]], item[1]];
                });
              };
              if (_routes.ROUTES.hasOwnProperty(widget.route)) {
                setItems(getTexts(_routes.ROUTES[widget.route]));
              }
            }, [ready]);
            return {
              ready,
              texts,
              items
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store/index",
        "from": "breadcrumbStore",
        "name": "breadcrumbStore"
      }, {
        "im": "./store/index",
        "from": "BreacrumbStore",
        "name": "BreacrumbStore"
      }, {
        "im": "./store/routes",
        "from": "ROUTES",
        "name": "ROUTES"
      }, {
        "im": "./views/index",
        "from": "BredcrumbApp",
        "name": "BredcrumbApp"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'breadcrumbStore') && _export("breadcrumbStore", breadcrumbStore = require ? require('./store/index').breadcrumbStore : value);
        (require || prop === 'BreacrumbStore') && _export("BreacrumbStore", BreacrumbStore = require ? require('./store/index').BreacrumbStore : value);
        (require || prop === 'ROUTES') && _export("ROUTES", ROUTES = require ? require('./store/routes').ROUTES : value);
        (require || prop === 'BredcrumbApp') && _export("BredcrumbApp", BredcrumbApp = require ? require('./views/index').BredcrumbApp : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImdsb2JhbFRoaXMiLCJhIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJTdG9yZSIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwicmVhZHkiLCJkcmFmdCIsIkRyYWZ0IiwidHJpZ2dlckJyZWFkY3J1bWJDaGFuZ2UiLCJ0cmlnZ2VyIiwiYmMiLCJST1VURVMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JlYWN0IiwiX2JyZWFkY3J1bWIiLCJfaG9va3MiLCJjbGFzc05hbWUiLCJjbHMiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImNyZWF0ZUVsZW1lbnQiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiX3JvdXRpbmciLCJfYmV5b25kX2NvbnRleHQiLCJfcmVuZGVyIiwiX3JvdXRlcyIsInBhZ2VzIiwid2lkZ2V0cyIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJpcyIsInVzZUJyZWFkY3J1bWIiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VFZmZlY3QiLCJ2YWxpZGF0ZSIsInBhdHRlcm4iLCJ1cmwiLCJyZWdleHAiLCJmaW5hbFBhdHRlcm4iLCJyZXBsYWNlIiwib2JqIiwiUmVnRXhwIiwidGVzdCIsImZpbmQiLCJyb3V0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImdldFRleHRzIiwibWFwIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yb3V0ZXMudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1icmVhZGNydW1iLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQU0sZUFBZTtjQUM3QixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sWUFBWTtZQUNwQjtZQUVBQyxZQUFZQSxDQUFBO2NBQ1YsSUFBSSxDQUFDQyxNQUEyQixDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ08sTUFBTTtjQUM3REMsVUFBVSxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDSCxNQUFNO1lBQzNCO1lBRUFDLE1BQU1BLENBQUEsR0FBSTs7VUFDVkcsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFhLE1BQUEsR0FBQWhCLE9BQUE7VUFPQSxJQUFBaUIsZ0JBQUEsR0FBQWpCLE9BQUE7VUFRTSxNQUFPa0IsS0FBTSxTQUFRRixNQUFBLENBQUFHLGFBQStCO1lBQ3pEQyxP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LE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ2pELE1BQU0sQ0FBQ2xCLEtBQUssRUFBRW1CLFFBQVEsQ0FBQyxHQUFHN0IsTUFBQSxDQUFBTSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFekQsSUFBQVAsTUFBQSxDQUFBOEIsU0FBUyxFQUFDLE1BQUs7Y0FDZCxTQUFTQyxRQUFRQSxDQUFDQyxPQUFPLEVBQUVDLEdBQUc7Z0JBQzdCO2dCQUNBLE1BQU1DLE1BQU0sR0FBRywwQkFBMEI7Z0JBQ3pDLE1BQU1DLFlBQVksR0FBR0gsT0FBTyxDQUFDSSxPQUFPLENBQUNGLE1BQU0sRUFBRSxPQUFPLENBQUM7Z0JBQ3JELE1BQU1HLEdBQUcsR0FBRyxJQUFJQyxNQUFNLENBQUMsSUFBSUgsWUFBWSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUVoRDtnQkFDQSxPQUFPRSxHQUFHLENBQUNFLElBQUksQ0FBQ04sR0FBRyxDQUFDO2NBQ3JCO2NBQ0EsSUFBSSxDQUFDM0MsS0FBSyxFQUFFO2NBQ1osTUFBTVosTUFBTSxHQUFHd0MsS0FBSyxDQUFDc0IsSUFBSSxDQUFDbEIsSUFBSSxJQUFJUyxRQUFRLENBQUNULElBQUksQ0FBQ21CLEtBQUssRUFBRTNCLFFBQUEsQ0FBQTRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQztjQUM3RSxNQUFNQyxRQUFRLEdBQUduQyxLQUFLLElBQUc7Z0JBQ3hCLE9BQU9BLEtBQUssQ0FBQ29DLEdBQUcsQ0FBQ3hCLElBQUksSUFBRztrQkFDdkIsT0FBTyxDQUFDRyxLQUFLLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztjQUNILENBQUM7Y0FDRCxJQUFJTCxPQUFBLENBQUFyQixNQUFNLENBQUNtRCxjQUFjLENBQUNyRSxNQUFNLENBQUMrRCxLQUFLLENBQUMsRUFBRTtnQkFDeENaLFFBQVEsQ0FBQ2dCLFFBQVEsQ0FBQzVCLE9BQUEsQ0FBQXJCLE1BQU0sQ0FBQ2xCLE1BQU0sQ0FBQytELEtBQUssQ0FBQyxDQUFDLENBQUM7O1lBRTFDLENBQUMsRUFBRSxDQUFDbkQsS0FBSyxDQUFDLENBQUM7WUFFWCxPQUFPO2NBQUVBLEtBQUs7Y0FBRW1DLEtBQUs7Y0FBRWY7WUFBSyxDQUFFO1VBQy9CIiwiaWdub3JlTGlzdCI6W119