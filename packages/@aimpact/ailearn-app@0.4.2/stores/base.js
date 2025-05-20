System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/widgets@1.1.2/controller", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.0.5/entities/collection", "@aimpact/chat-sdk@1.5.4/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, BaseStoreManager, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    BaseStoreManager: void 0,
    FormBaseStoreManager: void 0,
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_1 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_3 = _beyondJsKernel0112Texts;
    }, function (_beyondJsWidgets112Controller) {
      dependency_4 = _beyondJsWidgets112Controller;
    }, function (_beyondJsKernel0112Core) {
      dependency_5 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_6 = _beyondJsReactive205EntitiesCollection;
    }, function (_aimpactChatSdk154Session) {
      dependency_7 = _aimpactChatSdk154Session;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/stores/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/kernel/texts', dependency_3], ['@beyond-js/widgets/controller', dependency_4], ['@beyond-js/kernel/core', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/session', dependency_7]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 2809951561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            #texts;
            get texts() {
              return this.#texts.value;
            }
            #model;
            get model() {
              return this.#model;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              if (super.ready === value) return;
              super.ready = value;
              this.trigger('change');
            }
            constructor(specifier) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.on('change', this.triggerEvent);
              this.#texts.fetch();
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              globalThis.store = this;
              this.#globalTexts.on('change', this.triggerEvent);
            }
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/form
      *************************/

      ims.set('./ts/form', {
        hash: 2717797500,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormBaseStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/ //your code here

          class FormBaseStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            get texts() {
              return this.#texts.value;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              super.ready = value;
            }
            #promise;
            get textReady() {
              if (this.#promise) return this.#promise;
              const promise = new _core.PendingPromise();
              this.#promise = promise;
              if (this.#texts.ready && this.#globalTexts.ready) return promise.resolve(true);
              const listener = () => {
                if (this.#texts.ready && this.#globalTexts.ready) promise.resolve(true);
              };
              this.#texts.on('change', listener);
              this.#globalTexts.on('change', listener);
              return promise;
            }
            constructor({
              specifier
            }) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.fetch();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
            }
          }
          exports.FormBaseStoreManager = FormBaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/list
      *************************/

      ims.set('./ts/list', {
        hash: 370438530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class ListStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            #texts;
            get texts() {
              return this.#texts.value;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              if (value === super.ready) return;
              super.ready = value;
            }
            get items() {
              return this.model?.items?.length ? this.model.items : [];
            }
            get isTeacher() {
              return this.user?.roles.includes('teacher');
            }
            #model;
            get model() {
              return this.#model;
            }
            get state() {
              return {
                ready: this.ready,
                fetching: this.fetching,
                items: this.items,
                totalItems: this.items?.length ?? 0
              };
            }
            constructor(specifier, model) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              if (model) {
                this.#model = new model();
              }
            }
            async load() {
              try {
                this.fetching = true;
                await this.model?.load();
                globalThis.store = this;
                super.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ListStoreManager = ListStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/view
      *************************/

      ims.set('./ts/view', {
        hash: 2961404767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ViewStoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          class ViewStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            #Model;
            get texts() {
              return this.#texts.value;
            }
            #model;
            get model() {
              return this.#model;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            constructor(specifier, model) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              globalThis.store = this;
              this.#Model = model;
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                super.ready = super.ready;
                this.fetching = true;
                if (!!this.#model && this.#model?.id !== id && this.#model.joinSpecs?.code !== id) {
                  this.#model.off('change', this.triggerEvent);
                  this.#model = undefined;
                }
                if (!this.#model) {
                  const specs = {
                    id
                  };
                  this.#model = new this.#Model(specs);
                }
                if (id) {
                  await this.#model.load(id);
                }
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
                this.fetching = false;
              }
            }
          }
          exports.ViewStoreManager = ViewStoreManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ts/base",
        "from": "BaseStoreManager",
        "name": "BaseStoreManager"
      }, {
        "im": "./ts/form",
        "from": "FormBaseStoreManager",
        "name": "FormBaseStoreManager"
      }, {
        "im": "./ts/list",
        "from": "ListStoreManager",
        "name": "ListStoreManager"
      }, {
        "im": "./ts/view",
        "from": "ViewStoreManager",
        "name": "ViewStoreManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BaseStoreManager') && _export("BaseStoreManager", BaseStoreManager = require ? require('./ts/base').BaseStoreManager : value);
        (require || prop === 'FormBaseStoreManager') && _export("FormBaseStoreManager", FormBaseStoreManager = require ? require('./ts/form').FormBaseStoreManager : value);
        (require || prop === 'ListStoreManager') && _export("ListStoreManager", ListStoreManager = require ? require('./ts/list').ListStoreManager : value);
        (require || prop === 'ViewStoreManager') && _export("ViewStoreManager", ViewStoreManager = require ? require('./ts/view').ViewStoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3RleHRzIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsIm1vZGVsIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsIkN1cnJlbnRUZXh0cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJleHBvcnRzIiwiX2NvcmUiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJwcm9taXNlIiwidGV4dFJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwibGlzdGVuZXIiLCJfc2Vzc2lvbiIsIkxpc3RTdG9yZU1hbmFnZXIiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpdGVtcyIsImxlbmd0aCIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsImZldGNoaW5nIiwidG90YWxJdGVtcyIsImxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiVmlld1N0b3JlTWFuYWdlciIsIk1vZGVsIiwiaWQiLCJqb2luU3BlY3MiLCJjb2RlIiwib2ZmIiwidW5kZWZpbmVkIiwic3BlY3MiXSwic291cmNlcyI6WyIvdHMvYmFzZS50cyIsIi90cy9mb3JtLnRzIiwiL3RzL2xpc3QudHMiLCIvdHMvdmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBS087VUFBVSxNQUFPRSxnQkFDdkIsU0FBUUgsTUFBQSxDQUFBSSxhQUFrQztZQUcxQ0MsT0FBTztZQUVQLENB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