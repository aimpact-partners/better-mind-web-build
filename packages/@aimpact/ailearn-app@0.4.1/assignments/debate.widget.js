System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.1/assignments/chat", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/widgets@1.1.2/controller", "@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp041AssignmentsChat) {
      dependency_2 = _aimpactAilearnApp041AssignmentsChat;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsWidgets112Controller) {
      dependency_5 = _beyondJsWidgets112Controller;
    }, function (_aimpactAilearnApp041EntitiesAssignmentsActivitiesBase) {
      dependency_6 = _aimpactAilearnApp041EntitiesAssignmentsActivitiesBase;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/debate",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@aimpact/ailearn-app/assignments/chat', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2758603960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _chat.ChatView;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('activityId'), this.uri.vars.get('chatId'), this.#store.testing);
            }
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 712855861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _beyond_context = require("beyond_context");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          class StoreManager extends _base.BaseStoreManager {
            isStore;
            get tabs() {
              return ['objectives'];
            }
            get data() {
              const materials = this.model.getMaterials();
              const specs = this.model.getSpecs();
              return {
                image: this.model.picture,
                type: this.model.type,
                description: this.model.description,
                ...materials,
                ...specs
              };
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2hhdCIsInJlcXVpcmUiLCJfcGFnZSIsIl9zdG9yZSIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiQ2hhdFZpZXciLCJzaG93IiwidGVzdGluZyIsInVyaSIsInFzIiwiZ2V0IiwibG9hZCIsInZhcnMiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwiY2xlYXIiLCJleHBvcnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2Jhc2UiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiaXNTdG9yZSIsInRhYnMiLCJkYXRhIiwibWF0ZXJpYWxzIiwibW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJzcGVjcyIsImdldFNwZWNzIiwiaW1hZ2UiLCJwaWN0dXJlIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPVixLQUFBLENBQUFXLFFBQVE7WUFDaEI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLE9BQU87Y0FFekQsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1UsSUFBSSxDQUNmLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFDakMsSUFBSSxDQUFDRixHQUFHLENBQUNJLElBQUksQ0FBQ0YsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUMvQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDRixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQzNCLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNNLE9BQU8sQ0FDbkI7WUFDRjtZQUVBTSxJQUFJQSxDQUFBO2NBQ0hmLFdBQUEsQ0FBQWdCLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO1lBQ3JCOztVQUNBQyxPQUFBLENBQUFqQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUFrQixlQUFBLEdBQUF0QixPQUFBO1VBQ0EsSUFBQXVCLEtBQUEsR0FBQXZCLE9BQUE7VUFHTSxNQUFPUSxZQUFhLFNBQVFlLEtBQUEsQ0FBQUMsZ0JBQWdCO1lBQ2pEQyxPQUFPO1lBZ0JQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ3RCO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE1BQU1DLFNBQVMsR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxFQUFFO2NBQzNDLE1BQU1DLEtBQUssR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csUUFBUSxFQUFFO2NBQ25DLE9BQU87Z0JBQ05DLEtBQUssRUFBRSxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssT0FBTztnQkFDekJDLElBQUksRUFBRSxJQUFJLENBQUNOLEtBQUssQ0FBQ00sSUFBSTtnQkFDckJDLFdBQVcsRUFBRSxJQUFJLENBQUNQLEtBQUssQ0FBQ08sV0FBVztnQkFDbkMsR0FBR1IsU0FBUztnQkFDWixHQUFHRztlQUNIO1lBQ0Y7WUFFQU0sWUFBQTtjQUNDLEtBQUssQ0FBQ2YsZUFBQSxDQUFBZ0IsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDeEI7O1VBQ0FsQixPQUFBLENBQUFiLFlBQUEsR0FBQUEsWUFBQSIsImlnbm9yZUxpc3QiOltdfQ==