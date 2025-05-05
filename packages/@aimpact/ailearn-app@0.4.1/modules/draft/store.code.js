System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-app@0.4.1/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.4.1/stores/base", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.4.1/assignments/spoken.widget"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp041EntitiesAssignmentsActivitiesBase) {
      dependency_1 = _aimpactAilearnApp041EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_aimpactAilearnApp041WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp041WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_5 = _aimpactAilearnApp041StoresBase;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp041AssignmentsSpokenWidget) {
      dependency_8 = _aimpactAilearnApp041AssignmentsSpokenWidget;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/draft/store",
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
        hash: 3576088055,
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
                _routing.routing.replaceState({}, 'module-management', '/modules/management?id=' + this.model.id);
                //routing.back();
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
              console.log(400);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiX3Nwb2tlbiIsIlN0b3JlTWFuYWdlciIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiYWxlcnQiLCJ1cmwiLCJzdG9yZSIsImlkIiwic2F2ZWQiLCJicm9rZXIiLCJMYXlvdXRCcm9rZXIiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJhY3Rpdml0eVN0b3JlIiwiYWN0aXZpdHlEYXRhIiwiYnJlYWRjcnVtYiIsImJyZWFkY3J1bWJTdG9yZSIsImN1cnJlbnRQcm9jZXNzIiwiZmV0Y2hpbmdEYXRhIiwidmFsdWUiLCJ0cmlnZ2VyRXZlbnQiLCJ2aWV3Iiwic3RhdGUiLCJvd25lcnNoaXBzIiwib3JncyIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsImxhYmVsIiwiZGlzcGxheU5hbWUiLCJtYXAiLCJpdGVtIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJhY3Rpdml0eVNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJvYmplY3RpdmUiLCJ0b3RhbEFjdGl2aXRpZXMiLCJsYW5ndWFnZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJhdWRpZW5jZXMiLCJjdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUxldmVscyIsImxldmVscyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJnbG9iYWxUaGlzIiwicmVhY3RpdmVQcm9wcyIsInNldEN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlSWQiLCJmaW5kIiwiaGlkZSIsInJlYWR5IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsImxvYWQiLCJhY3Rpdml0eUlkIiwiRHJhZnQiLCJ0ZXh0UmVhZHkiLCJsb2FkQXVkaWVuY2VzIiwiY2F0ZWdvcnkiLCJvbiIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJhY3Rpdml0aWVzIiwiaGFzIiwiZWRpdEFjdGl2aXR5IiwiZ2V0IiwidGl0bGUiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwibmV3RHJhZnQiLCJzZXQiLCJvdmVybGF5IiwiYmFja0xpbmsiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiYWN0aXZpdHlUaXRsZSIsInR5cGVzIiwiZm9yY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZVN0YXRlIiwidXBkYXRlIiwic3RhdHVzIiwic2F2ZURyYWZ0IiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJ0cmlnZ2VyIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImlycmVsZXZhbnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0ZXh0cyIsInN1Z2dlc3Rpb25zIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImNoYXQiLCJ0aGVuIiwiY2hhdElkIiwiYXNzaWdubWVudElkIiwidGVzdGluZyIsInRlc3RTcG9rZW5BY3Rpdml0eSIsImxvZyIsImxvYWRUZXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFEQTs7VUFJTSxNQUFPRSxvQkFBcUIsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDekRDLE9BQU87WUFpQlAsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztZQUM5QztZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxNQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBRTtjQUMzQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRTtjQUNuQyxPQUFPO2dCQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDSixLQUFLLENBQUNLLE9BQU87Z0JBQ3pCQyxJQUFJLEVBQUUsSUFBSSxDQUFDTixLQUFLLENBQUNNLElBQUk7Z0JBQ3JCQyxXQUFXLEVBQUUsSUFBSSxDQUFDUCxLQUFLLENBQUNPLFdBQVc7Z0JBQ25DLEdBQUdSLFNBQVM7Z0JBQ1osR0FBR0c7ZUFDSDtZQUNGO1lBQ0FNLFlBQUE7Y0FDQyxLQUFLLENBQUNqQixlQUFBLENBQUFrQixN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