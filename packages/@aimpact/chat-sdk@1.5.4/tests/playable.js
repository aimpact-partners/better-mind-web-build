System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/react-18-widgets@1.1.4/page", "react@18.3.1", "@aimpact/chat-sdk@1.5.4/widgets/playable", "@aimpact/chat-sdk@1.5.4/voice"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_2 = _beyondJsReact18Widgets114Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_aimpactChatSdk154WidgetsPlayable) {
      dependency_4 = _aimpactChatSdk154WidgetsPlayable;
    }, function (_aimpactChatSdk154Voice) {
      dependency_5 = _aimpactChatSdk154Voice;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/tests/playable"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['react', dependency_3], ['@aimpact/chat-sdk/widgets/playable', dependency_4], ['@aimpact/chat-sdk/voice', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "chat-sdk-playable",
        "vspecifier": "@aimpact/chat-sdk@1.5.4/tests/playable",
        "is": "page",
        "route": "/chat/sdk/playable"
      }]);
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
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1265480085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _voice = require("@aimpact/chat-sdk/voice");
          const text = `
# Hola como te va ?

## pensamientos

yo pensaba que esto era una prueba pero no lo es`;
          const text2 = 'hola como te a ti? que me cuentas?';
          const markdowntext = `

- **work**: software architech
- hobbie
- rap
`;
          const voice = new _voice.Voice({
            language: 'es',
            rate: 1
          });
          voice.langue = 'es';
          /*bundle*/
          function View() {
            const playable = true;
            const onClickWord = e => {
              console.log('clicked', e);
            };
            return React.createElement("div", null, React.createElement("h1", null, "Playable component"), React.createElement("h2", null, "Content with markdown"), React.createElement(_playable.Playable, {
              content: markdowntext,
              id: "id2",
              player: voice,
              playable: playable,
              onClickWord: onClickWord
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiUmVhY3QiLCJfcGxheWFibGUiLCJfdm9pY2UiLCJ0ZXh0IiwidGV4dDIiLCJtYXJrZG93bnRleHQiLCJ2b2ljZSIsIlZvaWNlIiwibGFuZ3VhZ2UiLCJyYXRlIiwibGFuZ3VlIiwicGxheWFibGUiLCJvbkNsaWNrV29yZCIsImUiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIlBsYXlhYmxlIiwiY29udGVudCIsImlkIiwicGxheWVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJO1lBRVI7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCSyxNQUFPSSxZQUFZO1VBQTJCSyxPQUFBLENBQUFMLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEcEQsSUFBQU0sS0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsU0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsTUFBQSxHQUFBZixPQUFBO1VBQ0EsTUFBTWdCLElBQUksR0FBRzs7Ozs7aURBS29DO1VBRWpELE1BQU1DLEtBQUssR0FBRyxvQ0FBb0M7VUFFbEQsTUFBTUMsWUFBWSxHQUFHOzs7OztDQUtwQjtVQUNELE1BQU1DLEtBQUssR0FBRyxJQUFJSixNQUFBLENBQUFLLEtBQUssQ0FBQztZQUFFQyxRQUFRLEVBQUUsSUFBSTtZQUFFQyxJQUFJLEVBQUU7VUFBQyxDQUFFLENBQUM7VUFDcERILEtBQUssQ0FBQ0ksTUFBTSxHQUFHLElBQUk7VUFDWjtVQUFVLFNBQ1JkLElBQUlBLENBQUE7WUFDWixNQUFNZSxRQUFRLEdBQUcsSUFBSTtZQUNyQixNQUFNQyxXQUFXLEdBQUdDLENBQUMsSUFBRztjQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRixDQUFDLENBQUM7WUFDMUIsQ0FBQztZQUNELE9BQ0NiLEtBQUEsQ0FBQWdCLGFBQUEsY0FDQ2hCLEtBQUEsQ0FBQWdCLGFBQUEsa0NBQTJCLEVBRTNCaEIsS0FBQSxDQUFBZ0IsYUFBQSxxQ0FBOEIsRUFDOUJoQixLQUFBLENBQUFnQixhQUFBLENBQUNmLFNBQUEsQ0FBQWdCLFFBQVE7Y0FBQ0MsT0FBTyxFQUFFYixZQUFZO2NBQUVjLEVBQUUsRUFBQyxLQUFLO2NBQUNDLE1BQU0sRUFBRWQsS0FBSztjQUFFSyxRQUFRLEVBQUVBLFFBQVE7Y0FBRUMsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDcEc7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==