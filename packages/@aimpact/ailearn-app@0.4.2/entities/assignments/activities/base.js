System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "@aimpact/ailearn-app@0.4.2/i18n.ts", "@aimpact/ailearn-app@0.4.2/components/icons"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_7 = _aimpactAilearnApp042I18nTs;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp042ComponentsIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/ailearn-app/i18n.ts', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base');
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
        hash: 1099423941,
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
              return this.#tracking?.credits?.total > 0 && this.#tracking?.credits?.total > this.#tracking?.credits?.consumed;
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
                  await activity.loadChat({
                    id: chatId
                  });
                  activity.chatModel.on('action.received', data => tracking.setCredits(data.credits));
                }
                this.#model = activity;
                let breadcrumb, backLink;
                if (!testing) {
                  if (tracking.classroom?.name) {
                    const community = [this.globalTexts.entities.community, `/community`];
                    const first = tracking.community ? community : [tracking.classroom.name, `/classrooms/view/${tracking.classroom.id}`];
                    breadcrumb = [first, [activity.module.title, `/assignments/${modelId}`], [this.#model.title]];
                  } else {
                    breadcrumb = [[activity.module.title, `/assignments/${modelId}`], [this.#model.title]];
                  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfdHJhY2tpbmciLCJfaTE4biIsIkJhc2VTdG9yZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsIm1vZGVsSWQiLCJhc3NpZ25tZW50SWQiLCJtb2RlbCIsImFjdGl2aXR5SWQiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidmFsdWUiLCJ0ZXN0aW5nIiwidHJpZ2dlciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImhhc0NyZWRpdHMiLCJ0cmFja2luZyIsImNyZWRpdHMiLCJ0b3RhbCIsImNvbnN1bWVkIiwiQUlBdmFpbGFibGUiLCJjaGF0SWQiLCJiYWNrTGluayIsImFjdGl2aXR5IiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJDdXJyZW50VGV4dHMiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImxvYWQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiVHJhY2tpbmciLCJnZXQiLCJpZCIsImFkZE1vZGVsIiwiYWN0aXZpdGllcyIsImxvYWRBY3Rpdml0eSIsImxvYWRDaGF0IiwiY2hhdE1vZGVsIiwiZGF0YSIsInNldENyZWRpdHMiLCJicmVhZGNydW1iIiwiY2xhc3Nyb29tIiwibmFtZSIsImNvbW11bml0eSIsImVudGl0aWVzIiwiZmlyc3QiLCJtb2R1bGUiLCJ0aXRsZSIsInNldCIsImUiLCJsb2FkVGVzdCIsImZldGNoaW5nIiwidXBkYXRlVHJhY2tpbmciLCJvbkxpc3RlbkNoYXQiLCJfaWNvbnMiLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQXBwSWNvbiJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXcvaGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFhTztVQUFXLE1BQU1DLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMxRTtVQUFXLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLGFBQWEsQ0FBQztVQUFDQyxPQUFBLENBQUFHLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RqRixJQUFBRSxXQUFBLEdBQUFQLE9BQUE7VUFFQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxTQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxLQUFBLEdBQUFYLE9BQUE7VUFJTztVQUFVLE1BQU9ZLGdCQUFpQixTQUFRSixNQUFBLENBQUFLLGFBQXFCO1lBQ3JFQyxPQUFPO1lBRVA7OztZQUdBLENBQUFDLE9BQVE7WUFDUixJQUFJQyxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUTtZQUNyQjtZQUVBLENBQUFFLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEs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