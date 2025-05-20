System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "@beyond-js/reactive@2.0.5/model", "@beyond-js/widgets@1.1.2/controller", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/breadcrumb", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/react-18-widgets@1.1.4/hooks", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, breadcrumbStore, BreacrumbStore, ROUTES, BredcrumbApp, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_beyondJsWidgets112Controller) {
      dependency_5 = _beyondJsWidgets112Controller;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Breadcrumb) {
      dependency_7 = _pragmateUi100Beta7Breadcrumb;
    }, function (_pragmateUi100Beta7Base) {
      dependency_8 = _pragmateUi100Beta7Base;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_9 = _beyondJsReact18Widgets114Hooks;
    }, function (_beyondJsKernel0112Routing) {
      dependency_10 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['react', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['pragmate-ui/base', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@beyond-js/kernel/routing', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/widgets/breadcrumb.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/widgets/breadcrumb.widget');
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
        hash: 320368247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.breadcrumbStore = exports.Store = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Store extends _model.ReactiveModel {
            isStore;
            constructor() {
              super({
                properties: ['items']
              });
              super.ready = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImdsb2JhbFRoaXMiLCJhIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlN0b3JlIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJyZWFkeSIsInRyaWdnZXJCcmVhZGNydW1iQ2hhbmdlIiwidHJpZ2dlciIsImJjIiwiUk9VVEVTIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9icmVhZGNydW1iIiwiX2hvb2tzIiwiY2xhc3NOYW1lIiwiY2xzIiwic2V0VXBkYXRlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiaXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiQnJlYWRDcnVtYiIsInNlcGFyYXRvciIsIl9yb3V0aW5nIiwiX2JleW9uZF9jb250ZXh0IiwiX3JlbmRlciIsIl9yb3V0ZXMiLCJwYWdlcyIsIndpZGdldHMiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaXMiLCJ1c2VCcmVhZGNydW1iIiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwidXNlRWZmZWN0IiwidmFsaWRhdGUiLCJwYXR0ZXJuIiwidXJsIiwicmVnZXhwIiwiZmluYWxQYXR0ZXJuIiwicmVwbGFjZSIsIm9iaiIsIlJlZ0V4cCIsInRlc3QiLCJmaW5kIiwicm91dGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJnZXRUZXh0cyIsIm1hcCIsImhhc093blByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvc3RvcmUvcm91dGVzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy91c2UtYnJlYWRjcnVtYi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQU0sZUFBZTtjQUM3QixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sWUFBWTtZQUNwQjtZQUVBQyxZQUFZQSxDQUFBO2NBQ1YsSUFBSSxDQUFDQyxNQUEyQixDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ08sTUFBTTtjQUM3REMsVUFBVSxDQUFDQyxDQUFDLEdBQUcsSUFBSSxDQUFDSCxNQUFNO1lBQzNCO1lBRUFDLE1BQU1BLENBQUEsR0FBSTs7VUFDVkcsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFhLE1BQUEsR0FBQWhCLE9BQUE7VUFTTSxNQUFPaUIsS0FBTSxTQUFRRCxNQUFBLENBQUFFLGFBQStCO1lBQ3pEQyxPQUFPO1lBRVBDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLE9BQU87Y0FBQyxDQUFFLENB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