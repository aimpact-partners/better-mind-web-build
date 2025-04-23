System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.3.32/entities/assignments/activities/base", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@aimpact/ailearn-app@0.3.32/widgets/breadcrumb.widget", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@aimpact/ailearn-app@0.3.32/stores/base", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, StoreManager, store, __beyond_pkg, hmr;
  _export({
    StoreManager: void 0,
    store: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp0332EntitiesAssignmentsActivitiesBase) {
      dependency_1 = _aimpactAilearnApp0332EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_2 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_aimpactAilearnApp0332WidgetsBreadcrumbWidget) {
      dependency_3 = _aimpactAilearnApp0332WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_4 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_aimpactAilearnApp0332StoresBase) {
      dependency_5 = _aimpactAilearnApp0332StoresBase;
    }, function (_aimpactChatSdk144Session) {
      dependency_6 = _aimpactChatSdk144Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/draft/store",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_1], ['@aimpact/ailearn-app/main-layout.widget', dependency_2], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_3], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
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
        hash: 4290576611,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiU3RvcmVNYW5hZ2VyIiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJhbGVydCIsInVybCIsInN0b3JlIiwiaWQiLCJzYXZlZCIsImJyb2tlciIsIkxheW91dEJyb2tlciIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImFjdGl2aXR5U3RvcmUiLCJhY3Rpdml0eURhdGEiLCJicmVhZGNydW1iIiwiYnJlYWRjcnVtYlN0b3JlIiwiY3VycmVudFByb2Nlc3MiLCJmZXRjaGluZ0RhdGEiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsInZpZXciLCJzdGF0ZSIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwibGVuZ3RoIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIml0ZW0iLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsImFjdGl2aXR5U2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsImF1ZGllbmNlcyIsImN1cnJlbnRBdWRpZW5jZSIsImF1ZGllbmNlTGV2ZWxzIiwibGV2ZWxzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImdsb2JhbFRoaXMiLCJyZWFjdGl2ZVByb3BzIiwic2V0Q3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VJZCIsImZpbmQiLCJoaWRlIiwicmVhZHkiLCJ1bmRlZmluZWQiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwibG9hZCIsImFjdGl2aXR5SWQiLCJEcmFmdCIsInRleHRSZWFkeSIsImxvYWRBdWRpZW5jZXMiLCJjYXRlZ29yeSIsIm9uIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImFjdGl2aXRpZXMiLCJoYXMiLCJlZGl0QWN0aXZpdHkiLCJnZXQiLCJ0aXRsZSIsImdsb2JhbFRleHRzIiwiZW50aXRpZXMiLCJuZXdEcmFmdCIsInNldCIsIm92ZXJsYXkiLCJiYWNrTGluayIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhY3Rpdml0eSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJhY3Rpdml0eVRpdGxlIiwidHlwZXMiLCJmb3JjZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyZXBsYWNlU3RhdGUiLCJ1cGRhdGUiLCJzdGF0dXMiLCJzYXZlRHJhZnQiLCJyZXNwb25zZSIsImxvYWRBdWRpZW5jZSIsInRyaWdnZXIiLCJsaXN0ZW5lciIsInNhdmUiLCJwcm9jZXNzaW5nIiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwiaXJyZWxldmFudCIsInNldEFsZXJ0IiwibWVzc2FnZSIsInRleHRzIiwic3VnZ2VzdGlvbnMiLCJwb3NpdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsImdldEFkbWluaXN0cmF0b3IiLCJvcmciLCJjbGVhckFsZXJ0IiwiZ2V0QWN0aXZpdHlEZXRhaWwiLCJ0ZXN0QWN0aXZpdHkiLCJmZXRjaGluZyIsInByb3ZpZGVyIiwiY2hhdCIsInRoZW4iLCJjaGF0SWQiLCJhc3NpZ25tZW50SWQiLCJ0ZXN0aW5nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsZUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBREE7O1VBSU0sTUFBT0Usb0JBQXFCLFNBQVFELEtBQUEsQ0FBQUUsZ0JBQWdCO1lBQ3pEQyxPQUFPO1lBaUJQLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7WUFDOUM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLEVBQUU7Y0FDM0MsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxRQUFRLEVBQUU7Y0FDbkMsT0FBTztnQkFDTkMsS0FBSyxFQUFFLElBQUksQ0FBQ0osS0FBSyxDQUFDSyxPQUFPO2dCQUN6QkMsSUFBSSxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDTSxJQUFJO2dCQUNyQkMsV0FBVyxFQUFFLElBQUksQ0FBQ1AsS0FBSyxDQUFDTyxXQUFXO2dCQUNuQyxHQUFHUixTQUFTO2dCQUNaLEdBQUdHO2VBQ0g7WUFDRjtZQUNBTSxZQUFBO2NBQ0MsS0FBSyxDQUFDakIsZUFBQSxDQUFBa0IsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDeEI7O1VBQ0FDLE9BQUEsQ0FBQWpCLG9CQUFB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