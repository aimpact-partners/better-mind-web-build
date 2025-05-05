System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.1/model/gclassroom", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/core", "dayjs@1.11.13", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Explorer, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Explorer: void 0
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
    }, function (_aimpactAilearnApp041ModelGclassroom) {
      dependency_4 = _aimpactAilearnApp041ModelGclassroom;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_aimpactChatSdk154Core) {
      dependency_6 = _aimpactChatSdk154Core;
    }, function (_dayjs2) {
      dependency_7 = _dayjs2;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_9 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_12 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/gclassroom-explorer",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/model/gclassroom', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/core', dependency_6], ['dayjs', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@beyond-js/kernel/routing', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/gclassroom-explorer.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/gclassroom-explorer.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4293631984,
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
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Explorer;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 699880654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _dayjs = require("dayjs");
          class StoreManager extends _model.ReactiveModel {
            get isReady() {
              return _gclassroom.gclassroom.isReady;
            }
            #items = new Map();
            get items() {
              return [..._gclassroom.gclassroom.classes.values()];
            }
            #lastTime;
            constructor() {
              super();
              _gclassroom.gclassroom.on('change', this.triggerEvent);
              this.#init();
            }
            loadClasses = async () => {
              this.fetching = true;
              await _gclassroom.gclassroom.courses();
              this.fetching = false;
            };
            async #init() {
              const currentTime = (0, _dayjs.default)();
              if (_gclassroom.gclassroom.lastClassesQueryTime && _gclassroom.gclassroom.classes.size) {
                this.ready = true;
                if (currentTime.diff(_gclassroom.gclassroom.lastClassesQueryTime, 'minutes') > 5) {
                  this.loadClasses();
                }
                return;
              }
              await this.loadClasses();
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 825742320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useExplorerContext = exports.ExplorerContext = void 0;
          var _react = require("react");
          const ExplorerContext = exports.ExplorerContext = _react.default.createContext({});
          const useExplorerContext = () => _react.default.useContext(ExplorerContext);
          exports.useExplorerContext = useExplorerContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 2813385547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyExplorer = EmptyExplorer;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function EmptyExplorer({}) {
            return _react.default.createElement("div", {
              className: "sidebar__empty"
            }, _react.default.createElement(_icons.Icon, {
              icon: "circle-exclamation"
            }), _react.default.createElement("h4", null, "There are no items to show"));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1285394067,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Explorer = Explorer;
          var _empty = require("./empty");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _list = require("./list");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function Explorer({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            const isReady = textsReady && _gclassroom.gclassroom.ready && ready;
            if (!isReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const Control = !store.items.length ? _empty.EmptyExplorer : _list.List;
            return _react.default.createElement(_context.ExplorerContext.Provider, {
              value: {
                store,
                texts
              }
            }, _react.default.createElement("article", null, _react.default.createElement("header", {
              className: "aside__top"
            }, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_icons.IconButton, {
              onClick: store.loadClasses,
              variant: "default",
              className: "circle",
              icon: "refresh"
            })), _react.default.createElement(Control, null)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/items/actions
      *************************************/

      ims.set('./views/items/actions', {
        hash: 4062573251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          function ItemActions({
            item,
            chatId,
            isCurrent
          }) {
            return null;
            //todo: define actions
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/items/index
      ***********************************/

      ims.set('./views/items/index', {
        hash: 3797049068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _actions = require("./actions");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          const Item = ({
            item
          }) => {
            const {
              pathname
            } = _routing.routing.uri;
            //const chatId = pathname.split('/')[2];
            let chatId = 'any';
            const isCurrent = chatId === item.id;
            const onClick = event => {
              _wrapper.AilearnWrapper.setClassroom(item);
            };
            return _react.default.createElement("li", {
              key: item.id,
              className: `sidebar-item ${isCurrent ? 'current' : ''}`
            }, _react.default.createElement(_components.Link, {
              href: `/assignments/${item.id}/student/list`
            }, item.name), _react.default.createElement(_actions.ItemActions, {
              item: item,
              chatId: chatId,
              isCurrent: isCurrent
            }));
          };
          exports.Item = Item;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 2807483691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _items = require("./items");
          function List({}) {
            const {
              store
            } = (0, _context.useExplorerContext)();
            const [items, setItems] = _react.default.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems(store.items));
            const output = store.items.map(item => {
              return _react.default.createElement(_items.Item, {
                item: item,
                key: item.id
              });
            });
            return _react.default.createElement("ul", {
              className: "sidebar__list"
            }, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Explorer",
        "name": "Explorer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Explorer') && _export("Explorer", Explorer = require ? require('./views/index').Explorer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIkV4cGxvcmVyIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9nY2xhc3Nyb29tIiwiX2RheWpzIiwiUmVhY3RpdmVNb2RlbCIsImlzUmVhZHkiLCJnY2xhc3Nyb29tIiwiaXRlbXMiLCJNYXAiLCJjbGFzc2VzIiwidmFsdWVzIiwibGFzdFRpbWUiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaW5pdCIsImxvYWRDbGFzc2VzIiwiZmV0Y2hpbmciLCJjb3Vyc2VzIiwiI2luaXQiLCJjdXJyZW50VGltZSIsImRlZmF1bHQiLCJsYXN0Q2xhc3Nlc1F1ZXJ5VGltZSIsInNpemUiLCJyZWFkeSIsImRpZmYiLCJfcmVhY3QiLCJFeHBsb3JlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRXhwbG9yZXJDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkVtcHR5RXhwbG9yZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJfZW1wdHkiLCJfY29udGV4dCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsImxlbmd0aCIsIkxpc3QiLCJQcm92aWRlciIsInZhbHVlIiwidGl0bGUiLCJJY29uQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJJdGVtQWN0aW9ucyIsIml0ZW0iLCJjaGF0SWQiLCJpc0N1cnJlbnQiLCJfd3JhcHBlciIsIl9hY3Rpb25zIiwiX3JvdXRpbmciLCJJdGVtIiwicGF0aG5hbWUiLCJyb3V0aW5nIiwidXJpIiwiaWQiLCJldmVudCIsIkFpbGVhcm5XcmFwcGVyIiwic2V0Q2xhc3Nyb29tIiwia2V5IiwiTGluayIsImhyZWYiLCJuYW1lIiwiX2l0ZW1zIiwic2V0SXRlbXMiLCJvdXRwdXQiLCJtYXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbXMvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvaXRlbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sUUFBUTtZQUNoQjs7VUFDQUMsT0FBQSxDQUFBUCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVEsTUFBQSxHQUFBWCxPQUFBO1VB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