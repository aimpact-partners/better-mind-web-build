System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-app@0.4.1/i18n.ts", "@aimpact/ailearn-app@0.4.1/components/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, IModuleContext, ModuleContext, useModuleContext, BaseStoreManager, ActivityHeader, __beyond_pkg, hmr;
  _export({
    IModuleContext: void 0,
    ModuleContext: void 0,
    useModuleContext: void 0,
    BaseStoreManager: void 0,
    ActivityHeader: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnApp041I18nTs) {
      dependency_7 = _aimpactAilearnApp041I18nTs;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp041ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1555775956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          /*bundle*/
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          /*bundle*/
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2613224624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            /**
             * Can be the assignmentId or  a draftId in testing cases.
             */
            #modelId;
            get assignmentId() {
              return this.#modelId;
            }
            #model;
            get model() {
              return this.#model;
            }
            #activityId;
            get activityId() {
              return this.#activityId;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            #items;
            get items() {
              return this.#items;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #answers = new Map();
            get answers() {
              return this.#answers;
            }
            #texts;
            get texts() {
              return this.#texts?.value;
            }
            #testing;
            get testing() {
              return this.#testing;
            }
            set testing(value) {
              if (this.#testing === value) return;
              this.#testing = value;
              this.trigger('change');
            }
            get ready() {
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            get hasCredits() {
              return this.#tracking?.credits?.total > 0;
            }
            get AIAvailable() {
              return this.#tracking?.credits?.total > 0;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #chatId;
            get chatId() {
              return this.#chatId;
            }
            get backLink() {
              if (this.#testing) {
                return `module/management?id=${this.#modelId}&activityId=${this.#activityId}`;
              }
              return `/assignments/${this.#modelId}`;
            }
            get activity() {
              return this.#model;
            }
            constructor(specifier) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              if (!this.assignmentId) this.#modelId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
              _i18n.globalTexts.on('change', this.triggerEvent);
              globalThis.store = this;
            }
            /**
             *
             * @param assignmentId
             * @param activityId
             * @param chatId
             * @returns
             */
            async load(modelId, activityId, chatId, testing = false) {
              try {
                if (!testing) {
                  _mainLayout.LayoutBroker.overlay = true;
                  _mainLayout.LayoutBroker.canConsumeCredits = true;
                }
                this.#chatId = chatId;
                this.#testing = testing;
                this.#modelId = modelId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  id: modelId,
                  testing: this.testing
                });
                this.#tracking = tracking;
                if (!testing) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                }
                tracking.on('credits.change', this.triggerEvent);
                tracking.on('credits.change', () => this.triggerEvent('credits.change'));
                const activity = await tracking.activities.loadActivity({
                  id: activityId
                });
                if (chatId) {
                  // console.log(1, activity)
                  // if (activity.chat.id !== chatId) {
                  // 	throw new Error('404');
                  // }
                  await activity.loadChat({
                    id: chatId
                  });
                  activity.chatModel.on('action.received', data => tracking.setCredits(data.credits));
                }
                this.#model = activity;
                let breadcrumb, backLink;
                if (!testing) {
                  breadcrumb = [[activity.module.title, `/assignments/${modelId}`], [this.#model.title]];
                  backLink = `/assignments/${modelId}`;
                  _mainLayout.LayoutBroker.set({
                    overlay: true,
                    breadcrumb,
                    backLink
                  });
                }
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                //	console.trace(e);
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            async loadTest(modelId, activityId) {
              this.fetching = true;
              this.#testing = true;
              this.#modelId = modelId;
              this.#activityId = activityId;
              const tracking = _tracking.Tracking.get({
                id: modelId,
                testing: this.#testing
              });
              const activity = await tracking.activities.loadActivity({
                id: activityId
              });
              this.#model = activity;
              this.#tracking = tracking;
              super.ready = true;
              this.#found = true;
              this.fetching = false;
              this.triggerEvent();
            }
            updateTracking = async () => {
              this.fetching = true;
              const tracking = _tracking.Tracking.get({
                assignmentId: this.assignmentId
              });
              this.#tracking = tracking;
              const activity = await tracking.activities.load({
                id: this.#activityId
              });
              this.#model = activity;
              this.fetching = false;
            };
            onListenChat = data => {
              if (data?.credits) {
                this.#tracking.set('credits', data.credits);
              }
            };
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/header
      *****************************/

      ims.set('./view/header', {
        hash: 2647478853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          /*bundle*/
          function ActivityHeader({
            type,
            title,
            icon,
            children
          }) {
            const cls = `activity-header activity-header--${type}`;
            return _react.default.createElement("div", {
              className: "header-container"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("span", {
              className: "header__title"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title)), children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "IModuleContext",
        "name": "IModuleContext"
      }, {
        "im": "./context",
        "from": "ModuleContext",
        "name": "ModuleContext"
      }, {
        "im": "./context",
        "from": "useModuleContext",
        "name": "useModuleContext"
      }, {
        "im": "./store",
        "from": "BaseStoreManager",
        "name": "BaseStoreManager"
      }, {
        "im": "./view/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IModuleContext') && _export("IModuleContext", IModuleContext = require ? require('./context').IModuleContext : value);
        (require || prop === 'ModuleContext') && _export("ModuleContext", ModuleContext = require ? require('./context').ModuleContext : value);
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./context').useModuleContext : value);
        (require || prop === 'BaseStoreManager') && _export("BaseStoreManager", BaseStoreManager = require ? require('./store').BaseStoreManager : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./view/header').ActivityHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsIkFJQXZhaWxhYmxlIiwiY2hhdElkIiwiYmFja0xpbmsiLCJhY3Rpdml0eSIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwiQ3VycmVudFRleHRzIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJsb2FkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsIlRyYWNraW5nIiwiZ2V0IiwiaWQiLCJhZGRNb2RlbCIsImFjdGl2aXRpZXMiLCJsb2FkQWN0aXZpdHkiLCJsb2FkQ2hhdCIsImNoYXRNb2RlbCIsImRhdGEiLCJzZXRDcmVkaXRzIiwiYnJlYWRjcnVtYiIsIm1vZHVsZSIsInRpdGxlIiwic2V0IiwiZSIsImxvYWRUZXN0IiwiZmV0Y2hpbmciLCJ1cGRhdGVUcmFja2luZyIsIm9uTGlzdGVuQ2hhdCIsIl9pY29ucyIsIkFjdGl2aXR5SGVhZGVyIiwidHlwZSIsImljb24iLCJjaGlsZHJlbiIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBcHBJY29uIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlldy9oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPO1VBQVcsTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQzFFO1VBQVcsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZGpGLElBQUFFLFdBQUEsR0FBQVAsT0FBQTtVQUVBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFNBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUlPO1VBQVUsTUFBT1ksZ0JBQWlCLFNBQVFKLE1BQUEsQ0FBQUssYUFBcUI7WUFDckVDLE9BQU87WUFFUDs7O1lBR0EsQ0FBQUMsT0FBUTtZQUNSLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU9SLEtBQUEsQ0FBQVEsV0FBVyxD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