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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
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
        hash: 3351363143,
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
          //@ts-ignore

          //@ts-ignore

          console.log(1, _spoken.StoreManager);
          /*bundle*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiX2Jhc2UiLCJBY3Rpdml0eVN0b3JlTWFuYWdlciIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpc1N0b3JlIiwidGFicyIsImRhdGEiLCJtYXRlcmlhbHMiLCJtb2RlbCIsImdldE1hdGVyaWFscyIsInNwZWNzIiwiZ2V0U3BlY3MiLCJpbWFnZSIsInBpY3R1cmUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9icmVhZGNydW1iIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWN0aXZpdHlUZXN0IiwiX3Nwb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJTdG9yZU1hbmFnZXIiLCJGb3JtQmFzZVN0b3JlTWFuYWdlciIsImFsZXJ0IiwidXJsIiwic3RvcmUiLCJpZCIsInNhdmVkIiwiYnJva2VyIiwiTGF5b3V0QnJva2VyIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiYWN0aXZpdHlTdG9yZSIsImFjdGl2aXR5RGF0YSIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsImZldGNoaW5nRGF0YSIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwidmlldyIsInN0YXRlIiwib3duZXJzaGlwcyIsIm9yZ3MiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwiYWN0aXZpdHlTZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwiYXVkaWVuY2VzIiwiY3VycmVudEF1ZGllbmNlIiwiYXVkaWVuY2VMZXZlbHMiLCJsZXZlbHMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZ2xvYmFsVGhpcyIsInJlYWN0aXZlUHJvcHMiLCJzZXRDdXJyZW50QXVkaWVuY2UiLCJhdWRpZW5jZUlkIiwiZmluZCIsImhpZGUiLCJyZWFkeSIsInVuZGVmaW5lZCIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJsb2FkIiwiYWN0aXZpdHlJZCIsIkRyYWZ0IiwidGV4dFJlYWR5IiwibG9hZEF1ZGllbmNlcyIsImNhdGVnb3J5Iiwib24iLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiYWN0aXZpdGllcyIsImhhcyIsImVkaXRBY3Rpdml0eSIsImdldCIsInRpdGxlIiwiZ2xvYmFsVGV4dHMiLCJlbnRpdGllcyIsIm5ld0RyYWZ0Iiwic2V0Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiZSIsImVycm9yIiwiYWN0aXZpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiYWN0aXZpdHlUaXRsZSIsInR5cGVzIiwiZm9yY2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVwbGFjZVN0YXRlIiwidXBkYXRlIiwic3RhdHVzIiwic2F2ZURyYWZ0IiwicmVzcG9uc2UiLCJsb2FkQXVkaWVuY2UiLCJ0cmlnZ2VyIiwibGlzdGVuZXIiLCJzYXZlIiwicHJvY2Vzc2luZyIsImNsZWFuIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImlycmVsZXZhbnQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJ0ZXh0cyIsInN1Z2dlc3Rpb25zIiwicG9zaXRpb24iLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJnZXRBZG1pbmlzdHJhdG9yIiwib3JnIiwiY2xlYXJBbGVydCIsImdldEFjdGl2aXR5RGV0YWlsIiwidGVzdEFjdGl2aXR5IiwiZmV0Y2hpbmciLCJwcm92aWRlciIsImNoYXQiLCJ0aGVuIiwiY2hhdElkIiwiYXNzaWdubWVudElkIiwidGVzdGluZyIsInRlc3RTcG9rZW5BY3Rpdml0eSIsImxvYWRUZXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHktdGVzdC50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFEQTs7VUFJTSxNQUFPRSxvQkFBcUIsU0FBUUQsS0FBQSxDQUFBRSxnQkFBZ0I7WUFDekRDLE9BQU87WUFpQlAsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztZQUM5QztZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxNQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksRUFBRTtjQUMzQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDRixLQUFLLENBQUNHLFFBQVEsRUFBRTtjQUNuQyxPQUFPO2dCQUNOQyxLQUFLLEVBQUUsSUFBSSxDQUFDSixLQUFLLENBQUNLLE9BQU87Z0JBQ3pCQyxJQUFJLEVBQUUsSUFBSSxDQUFDTixLQUFLLENBQUNNLElBQUk7Z0JBQ3JCQyxXQUFXLEVBQUUsSUFBSSxDQUFDUCxLQUFLLENBQUNPLFdBQVc7Z0JBQ25DLEdBQUdSLFNBQVM7Z0JBQ1osR0FBR0c7ZUFDSDtZQUNGO1lBQ0FNLFlBQUE7Y0FDQyxLQUFLLENBQUNqQixlQUFBLENBQUFrQixN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