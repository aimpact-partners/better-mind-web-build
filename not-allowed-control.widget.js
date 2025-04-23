System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "react@18.3.1", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/react-18-widgets@1.1.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_5 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7Image) {
      dependency_6 = _pragmateUi100Beta7Image;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_7 = _beyondJsReact18Widgets114Hooks;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/not-allowed-control",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/image', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-not-allowed",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/not-allowed-control.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/not-allowed-control.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 253853004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2109291050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function View({}) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const {
              title,
              conclusion,
              description
            } = texts;
            return _react.default.createElement(_ui.PageContainer, {
              className: "container__error place-center"
            }, _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("h1", null, "403"), _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description), _react.default.createElement("p", null, conclusion)), _react.default.createElement(_image.Image, {
              src: "/assets/errors/404.png",
              alt: "Page not allowed in RVD.AI"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdWkiLCJfaW1hZ2UiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwidGl0bGUiLCJjb25jbHVzaW9uIiwiZGVzY3JpcHRpb24iLCJQYWdlQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHFCQUFxQjtZQUM3QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLEdBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE1BQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLGVBQUEsR0FBQVgsT0FBQTtVQUdPO1VBQVUsU0FDUkssSUFBSUEsQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDTyxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFtQyxJQUFBSCxNQUFBLENBQUFJLFFBQVEsRUFBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RixJQUFJLENBQUNKLFVBQVUsRUFBRSxPQUFPTCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUFXLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUV0RCxNQUFNO2NBQUVDLEtBQUs7Y0FBRUMsVUFBVTtjQUFFQztZQUFXLENBQUUsR0FBR1YsS0FBSztZQUVoRCxPQUNDTixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixHQUFBLENBQUFnQixhQUFhO2NBQUNDLFNBQVMsRUFBQztZQUErQixHQUN2RGxCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtPLFNBQVMsRUFBQztZQUFTLEdBQ3ZCbEIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsbUJBQVksRUFDWlgsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsYUFBS0csS0FBSyxDQUFNLEVBQ2hCZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSyxXQUFXLENBQUssRUFDcEJoQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxZQUFJSSxVQUFVLENBQUssQ0FDZCxFQUNOZixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVCxNQUFBLENBQUFpQixLQUFLO2NBQUNDLEdBQUcsRUFBQyx3QkFBd0I7Y0FBQ0MsR0FBRyxFQUFDO1lBQTRCLEVBQUcsQ0FDeEQ7VUFFbEIiLCJpZ25vcmVMaXN0IjpbXX0=