System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.2/entities/assignments/activities/base", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@aimpact/ailearn-app@0.4.2/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.4.2/stores/base", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.4.2/assignments/spoken.widget"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp042EntitiesAssignmentsActivitiesBase) {
      dependency_1 = _aimpactAilearnApp042EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_aimpactAilearnApp042WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp042WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp042StoresBase) {
      dependency_5 = _aimpactAilearnApp042StoresBase;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp042AssignmentsSpokenWidget) {
      dependency_8 = _aimpactAilearnApp042AssignmentsSpokenWidget;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/modules/draft/store",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/ailearn-app/assignments/spoken.widget', dependency_8]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./activity-test
      *******************************/
      ims.set('./activity-test', {
        hash: 4218318605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityStoreManager = void 0;
          var _beyond_context = require("beyond_context");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          //@ts-ignore

          class ActivityStoreManager extends _base.BaseStoreManager {
            isStore;
            get tabs() {
              return ['article', 'objectives', 'synthesis'];
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
          exports.ActivityStoreManager = ActivityStoreManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4214748950,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.store = exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _activityTest = require("./activity-test");
          var _spoken = require("@aimpact/ailearn-app/assignments/spoken.widget");
          /*bundle*/ //@ts-ignore

          //@ts-ignore

          class StoreManager extends _base.FormBaseStoreManager {
            #alert;
            get url() {
              return `/modules/management?id=${store.model.id}`;
            }
            get alert() {
              return this.#alert;
            }
            /**
             Used to know if the module was already saved as a draft
             */
            #saved = false;
            get saved() {
              return this.#saved;
            }
            #model;
            get model() {
              return this.#model;
            }
            get broker() {
              return _mainLayout.LayoutBroker;
            }
            #improvements;
            get improvements() {
              return this.#improvements;
            }
            get hasCredits() {
              return this.#model.credits?.total > 0;
            }
            #improvementsSelected = new Set();
            get improvementsSelected() {
              return this.#improvementsSelected;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            #activityStore;
            get activityStore() {
              return this.#activityStore;
            }
            #activityData;
            get activityData() {
              return this.#activityData;
            }
            get breadcrumb() {
              return _breadcrumb.breadcrumbStore.breadcrumb;
            }
            #currentProcess;
            get currentProcess() {
              return this.#currentProcess;
            }
            #fetchingData = false;
            get fetchingData() {
              return this.#fetchingData;
            }
            set fetchingData(value) {
              this.#fetchingData = value;
              this.triggerEvent('fetching.data');
            }
            #view = 'setup'; // default view
            get view() {
              if (this.#view === 'activity') return 'activity';
              return this.#model?.state === 'confirmed' ? 'overview' : 'setup';
            }
            set view(value) {
              if (this.#view === value) return;
              this.#view = value;
              this.triggerEvent();
            }
            get ownerships() {
              const orgs = this.user.organizations.items?.length ? this.user.organizations.items : [];
              return [{
                value: this.user.id,
                label: this.user.displayName
              }, ...orgs.map(item => ({
                value: item.id,
                label: item.name
              }))];
            }
            get moduleOwner() {
              if (this.model.owner) {
                return {
                  value: this.model.owner.id,
                  label: this.model.owner.name
                };
              }
            }
            #activitySelected;
            get activitySelected() {
              return this.#activitySelected;
            }
            get defaultValues() {
              return {
                audience: '',
                duration: 45,
                objective: '',
                totalActivities: 5,
                language: this.#model.language
              };
            }
            get values() {
              return this.#saved ? this.model?.getProperties() : this.defaultValues;
            }
            #audiences = [];
            get audiences() {
              return this.#audiences;
            }
            #currentAudience;
            get currentAudience() {
              return this.#currentAudience;
            }
            get audienceLevels() {
              return this.#currentAudience?.levels ?? [];
            }
            #objectivesGenerated = new Map();
            constructor() {
              super({
                specifier: _beyond_context.module.specifier
              });
              globalThis.store = this;
              this.reactiveProps(['fetchingSuggestions']);
            }
            setCurrentAudience(audienceId) {
              this.#currentAudience = this.#audiences.find(item => item.id === audienceId);
              this.triggerEvent('audience.changed');
            }
            hide() {
              //@ts-ignore
              this.#model = null;
              super.ready = false;
              this.#currentAudience = undefined;
              this.#improvements = undefined;
              this.#view = 'setup';
              this.triggerEvent();
              _mainLayout.LayoutBroker.clear();
            }
            clearImprovements() {
              this.#improvements = undefined;
              this.triggerEvent('change');
            }
            async load(id, activityId) {
              try {
                if (id && this.#model?.id === id) {
                  return;
                }
                this.#model = new _learningModules.Draft({
                  id,
                  type: 'draft'
                });
                await this.textReady;
                if (id) {
                  await this.#model.load();
                }
                if (this.#model.language && this.#model.state === 'created') {
                  await this.loadAudiences(this.#model.language);
                  this.#currentAudience = this.#audiences.find(item => item.id === this.#model.audience.category);
                }
                this.#model.on('change', this.triggerEvent);
                this.#saved = !!id;
                _mainLayout.LayoutBroker.addModel(this.#model, true);
                _mainLayout.LayoutBroker.canConsumeCredits = this.#saved;
                if (activityId && this.#model.activities.has(activityId)) {
                  this.editActivity(this.#model.activities.get(activityId));
                } else {
                  const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                  const breadcrumb = [[title]];
                  _mainLayout.LayoutBroker.set({
                    overlay: true,
                    breadcrumb,
                    backLink: `/modules/list?tab=drafts`
                  });
                }
                super.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            editActivity(activity) {
              this.#activitySelected = activity;
              this.view = activity ? 'activity' : undefined;
              //@ts-ignore
              globalThis.activity = this.#activitySelected;
              if (activity) {
                _routing.routing.pushState(`/modules/management?id=${this.model.id}&activityId=${activity.id}`);
                const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                const activityTitle = activity.title ?? this.globalTexts.activities.types[activity.type];
                const breadcrumb = [[title, () => this.editActivity(undefined)], [activityTitle]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  force: true,
                  backLink: event => {
                    event?.preventDefault();
                    event?.stopPropagation();
                    this.editActivity(undefined);
                  },
                  breadcrumb
                });
              } else {
                const title = this.#model.title ?? this.globalTexts.entities.newDraft;
                _routing.routing.back();
                const breadcrumb = [[title]];
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  backLink: `/modules/list?tab=drafts`,
                  breadcrumb
                });
              }
              this.triggerEvent();
            }
            async update(specs) {
              try {
                const {
                  status
                } = await this.#model.saveDraft({
                  ...specs
                });
                this.view = 'setup';
                return {
                  status
                };
              } catch (e) {
                console.error(e);
              }
            }
            async loadAudiences(language) {
              this.fetchingData = true;
              const response = await this.#model.loadAudience(language);
              this.#audiences = response.items;
              if (this.#currentAudience?.id) {
                this.#currentAudience = this.#audiences.find(item => item.id === this.#currentAudience?.id);
              } else {
                this.#currentAudience = undefined;
              }
              this.fetchingData = false;
              this.trigger('audiences.loaded');
              return response;
            }
            listener() {
              // console.log('cambio');
            }
            async save(specs) {
              this.processing = true;
              _mainLayout.LayoutBroker.addModel(this.#model, true);
              //hardcoded for now
              await this.model.saveDraft(specs);
              this.processing = false;
              this.#saved = true;
              _mainLayout.LayoutBroker.canConsumeCredits = true;
              const title = this.#model.title ?? this.globalTexts.entities.newDraft;
              _mainLayout.LayoutBroker.set({
                breadcrumb: [[title]]
              });
              return this.#model;
            }
            async clean() {
              this.#model.activities.clean();
              this.#saved = undefined;
              this.trigger('change');
            }
            /**
             * This method is used to get the improvements for the objective defined by the user
             *
             * It calls the model to get the improvements generated by the AI
             *
             * @param objective The original objective or idea defined by the user
             */
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.#currentProcess = 'objective';
                this.fetchingSuggestions = true;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                if (data.irrelevant) {
                  this.setAlert({
                    message: this.texts.suggestions.irrelevant,
                    type: 'warning',
                    position: 'objective'
                  });
                }
                this.triggerEvent('change');
                //currently the onConsume function caller is expecting a status property
                return {
                  status: true,
                  ...data
                };
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetchingSuggestions = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.#currentProcess = 'changingObjective';
                this.fetchingSuggestions = true;
                const data = await this.model.generateObjective({
                  objective,
                  improvements
                });
                this.#objectivesGenerated.set(objective, data.objective);
                // this.model.save();
                this.#model.set({
                  objective: data.objective
                });
                this.#improvements = undefined;
                //@todo: review if improvementsSelected is really needed
                this.#improvementsSelected = new Set();
                this.triggerEvent('change');
                return this.#model.objective;
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetchingSuggestions = false;
              }
            }
            async generateModuleSuggestion(specs) {
              this.#currentProcess = 'generatingDraft';
              return this.model.getModuleSuggestion({
                ...specs
              });
            }
            async getAdministrator(id) {
              if (this.user.id === id) {
                return this.user;
              }
              const org = this.user.organizations.items.find(item => item.id === id);
              return org;
            }
            setAlert({
              message,
              type,
              position = 'top'
            }) {
              this.#alert = {
                message,
                type,
                position
              };
              this.trigger('alert.changed');
            }
            clearAlert() {
              this.#alert = undefined;
              this.trigger('alert.changed');
            }
            getActivityDetail(activity) {
              if (!activity) return;
              if (activity.title) return activity.title;
              return activity.objective;
            }
            async testActivity(activityId) {
              this.fetching = true;
              this.#activityData = undefined;
              this.#activityStore = undefined;
              const response = await this.model.provider.testActivity(this.#model.id, activityId);
              const store = new _activityTest.ActivityStoreManager();
              this.#activityStore = store;
              store.load(this.#model.id, response.activity.id, response.activity.chat.id, true).then(() => {
                this.#activityData = {
                  chatId: response.activity.chat.id,
                  activityId: response.activity.id,
                  assignmentId: this.#model.id,
                  testing: true
                };
                this.fetching = false;
                this.trigger('test.activity.changed');
              });
              return {
                response,
                store
              };
            }
            async testSpokenActivity(activityId) {
              this.fetching = true;
              this.#activityData = undefined;
              this.#activityStore = undefined;
              const store = new _spoken.StoreManager();
              this.#activityStore = store;
              store.loadTest(this.#model.id, activityId).then(() => {
                this.fetching = false;
                this.trigger('test.activity.changed');
              });
              return {
                store
              };
            }
          }
          exports.StoreManager = StoreManager;
          /*bundle*/
          const store = exports.store = new StoreManager();
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 209451526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./store",
        "from": "store",
        "name": "store"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'store') && _export("store", store = require ? require('./store').store : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiX3Nwb2tlbiIsIlN0b3JlTWFuYWdlciIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiYWxlcnQiLCJ1cmwiLCJzdG9yZSIsImlkIiwic2F2ZWQiLCJicm9rZXIiLCJMYXlvdXRCcm9rZXIiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlEYXRhIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsImN1cnJlbnRQcm9jZXNzIiwiZmV0Y2hpbmdEYXRhIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJ2aWV3Iiwic3RhdGUiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsImxhYmVsIiwiZGlzcGxheU5hbWUiLCJtYXAiLCJpdGVtIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJhY3Rpdml0eVNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJvYmplY3RpdmUiLCJ0b3RhbEFjdGl2aXRpZXMiLCJsYW5ndWFnZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJhdWRpZW5jZXMiLCJjdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUxldmVscyIsImxldmVscyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJnbG9iYWxUaGlzIiwicmVhY3RpdmVQcm9wcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwiaGlkZSIsInJlYWR5IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImxvYWQiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJ0ZXh0UmVhZHkiLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZWRpdEFjdGl2aXR5IiwiZ2V0IiwidGl0bGUiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwibmV3RHJhZnQiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiYWN0aXZpdHlUaXRsZSIsInR5cGVzIiwiZm9yY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYmFjayIsInVwZGF0ZSIsInN0YXR1cyIsInNhdmVEcmFmdCIsInJlc3BvbnNlIiwibG9hZEF1ZGllbmNlIiwidHJpZ2dlciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImZldGNoaW5nU3VnZ2VzdGlvbnMiLCJpcnJlbGV2YW50Iiwic2V0QWxlcnQiLCJtZXNzYWdlIiwidGV4dHMiLCJzdWdnZXN0aW9ucyIsInBvc2l0aW9uIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImNsZWFyQWxlcnQiLCJnZXRBY3Rpdml0eURldGFpbCIsInRlc3RBY3Rpdml0eSIsImZldGNoaW5nIiwicHJvdmlkZXIiLCJjaGF0IiwidGhlbiIsImNoYXRJZCIsImFzc2lnbm1lbnRJZCIsInRlc3RpbmciLCJ0ZXN0U3Bva2VuQWN0aXZpdHkiLCJsb2FkVGVzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LXRlc3QudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBREE7O1VBSU0sTUFBT0Usb0JBQXFCLFNBQVFELEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ3pEQyxPQUFPO1lBaUJQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDOUM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUU7Y0FDM0MsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Y0FDbkMsT0FBTztnQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxPQUFPO2dCQUN6QkMsSUFBSSxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxJQUFJO2dCQUNyQkMsV0FBVyxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxXQUFXO2dCQUNuQyxHQUFHUixTQUFTO2dCQUNaLEdBQUdHO2VBQ0g7WUFDRjtZQUNBTSxZQUFBO2NBQ0MsS0FBSyxDQUFDakIsZUFBQSxDQUFBa0IsTUFBTSxDQUFDQyxTQUFT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