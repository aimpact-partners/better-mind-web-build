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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/stores/base"
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
        hash: 786760713,
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
                if (!!this.#model && this.#model?.id !== id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3RleHRzIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsIm1vZGVsIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsIkN1cnJlbnRUZXh0cyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJleHBvcnRzIiwiX2NvcmUiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJwcm9taXNlIiwidGV4dFJlYWR5IiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwibGlzdGVuZXIiLCJfc2Vzc2lvbiIsIkxpc3RTdG9yZU1hbmFnZXIiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpdGVtcyIsImxlbmd0aCIsImlzVGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJzdGF0ZSIsImZldGNoaW5nIiwidG90YWxJdGVtcyIsImxvYWQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiVmlld1N0b3JlTWFuYWdlciIsIk1vZGVsIiwiaWQiLCJvZmYiLCJ1bmRlZmluZWQiLCJzcGVjcyJdLCJzb3VyY2VzIjpbIi90cy9iYXNlLnRzIiwiL3RzL2Zvcm0udHMiLCIvdHMvbGlzdC50cyIsIi90cy92aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFLTztVQUFVLE1BQU9FLGdCQUN2QixTQUFRSCxNQUFBLENBQUFJLGFBQWtDO1lBRzFDQyxPQUFPO1lBRVAsQ0FBQUMsS0FBTTtZQUNOLElBQUlB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