System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model", "@beyond-js/reactive@2.0.5/entities/item", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/config", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/reactive@2.0.5/entities/collection", "@aimpact/chat-sdk@1.5.4/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, GClass, ArchiveCollection, ArchiveItem, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
  _export({
    AssignmentActivity: void 0,
    Assessment: void 0,
    DashboardWall: void 0,
    Assignment: void 0,
    GClass: void 0,
    ArchiveCollection: void 0,
    ArchiveItem: void 0,
    ICoinsCreditData: void 0,
    ICoinModuleConsumptionData: void 0,
    ICoinAssignmentConsumptionData: void 0,
    ICreditsConsumptionsData: void 0,
    RoleType: void 0,
    IPeopleData: void 0,
    IInviteData: void 0,
    IAILearnUserData: void 0,
    Metadata: void 0,
    CreditsData: void 0,
    Credits: void 0,
    StudentsHome: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_2 = _beyondJsReactive205EntitiesItem;
    }, function (_aimpactChatSdk154Core) {
      dependency_3 = _aimpactChatSdk154Core;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_4 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_6 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_7 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_8 = _aimpactAilearnSdk120Config;
    }, function (_beyondJsKernel0112Core) {
      dependency_9 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_11 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_12 = _beyondJsReactive205EntitiesCollection;
    }, function (_aimpactChatSdk154Users) {
      dependency_13 = _aimpactChatSdk154Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/media-manager/uploader', dependency_6], ['@beyond-js/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['@beyond-js/reactive/entities/collection', dependency_12], ['@aimpact/chat-sdk/users', dependency_13]]);
      ims = new Map();
      /***************************************************
      INTERNAL MODULE: ./assignments/activities/collection
      ***************************************************/
      ims.set('./assignments/activities/collection', {
        hash: 871013365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          class Activities extends _model.ReactiveModel {
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            get items() {
              return [...this.#elements.values()];
            }
            async setData(activities) {
              activities.order.forEach(id => {
                if (this.#elements.has(id)) return;
                let instance = new _item.AssignmentActivity({
                  id
                });
                this.#elements.set(id, instance);
              });
              const instancePromises = [];
              activities.order.forEach((id, index) => {
                const instance = this.#elements.get(id);
                instance.set(activities.items[id]);
                this.#elements.set(id, instance);
              });
              return Promise.all(instancePromises);
            }
          }
          exports.Activities = Activities;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./assignments/activities/item
      *********************************************/

      ims.set('./assignments/activities/item', {
        hash: 3252979891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActivity = void 0;
          var _provider = require("./provider");
          var _item = require("@beyond-js/reactive/entities/item");
          var _item2 = require("../item");
          /*bundle*/
          class AssignmentActivity extends _item.Item {
            #assignmentId;
            #user;
            get user() {
              return this.#user;
            }
            #module;
            get module() {
              return this.#module;
            }
            get assignmentId() {
              return this.#assignmentId;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            materials() {
              return this.resources?.materials;
            }
            #analysis;
            get analysis() {
              return this.#analysis;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #assigment;
            get assignment() {
              return this.#assigment;
            }
            constructor({
              id,
              assignmentId,
              data
            } = {}) {
              super({
                id,
                entity: 'Activities',
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'resources', 'chat', 'credits', 'data' // represents the tracking data
                ],
                //@ts-igonore
                provider: _provider.ActivityProvider
              });
              this.startup(assignmentId, data);
              globalThis.model = this;
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.id;
              specs.assignmentId = this.#assignmentId;
              this.#assigment = await _item2.Assignment.get({
                id: this.#assignmentId
              });
              await this.#assigment.load();
              const {
                status,
                data
              } = await super.load(specs);
              await this.set(data.activity);
              //todo: this code must be removed when the reactive model is fixed
              await this.set({
                credits: data.credits
              });
              this.#user = data.user;
              this.#module = data.module;
              if (!status) {
                throw new Error(`Error loading assignment:`);
              }
              this.#process();
              return data;
            }
            #process() {
              if (this.materials?.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.data) {
                this.#tracking = this.data;
              }
            }
            async publish({
              params,
              type
            }) {
              try {
                const response = await this.provider.publish({
                  params,
                  type
                });
                this.#tracking = response.data.tracking;
                this.#assessment.selection = 'results';
                this.data = response.data.tracking;
              } catch (e) {
                console.error(e);
              }
            }
            async publishSpoken({
              params,
              type
            }) {
              try {
                const data = await this.provider.publish({
                  data: params,
                  type
                });
                this.set({
                  data
                });
                this.#analysis = data.analysis;
                this.#feedback = data.feedback;
                this.#competenciesFeedback = data.competenciesFeedback;
              } catch (e) {
                console.error(e);
              }
            }
            async set(data) {
              await super.set(data);
              this.#process();
              this.trigger('change');
            }
            async consumeCoins() {
              await this.#tracking.consumeCoins();
              this.set({
                credits: this.#tracking.credits
              });
              this.trigger('credits.change');
              return this.getProperties();
            }
          }
          exports.AssignmentActivity = AssignmentActivity;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./assignments/activities/provider
      *************************************************/

      ims.set('./assignments/activities/provider', {
        hash: 4231772858,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${specs.assignmentId}/activities/${specs.id}`);
              if (!status) {
                throw new Error('error loading activity');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            publish = async specs => {
              if (specs.type == 'assessment') {
                delete specs.type;
                return this.assessment(specs.params);
              }
              return this.spoken(specs.data);
            };
            assessment = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data,
                error
              } = await this.#api.post('/activities/assessments/completion', specs);
              if (error) {
                throw new Error('error processing assessment');
              }
              return {
                status,
                data
              };
            };
            spoken = async specs => {
              try {
                const props = Object.getOwnPropertyNames(specs);
                const form = new FormData();
                props.forEach(prop => {
                  form.append(prop, specs[prop]);
                });
                const xhr = new _uploader.XHRLoader();
                xhr.bearer(_session.sessionWrapper.user.token);
                const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
                const json = await response.json();
                if (!json.status) {
                  throw new Error('error publishing assessment');
                }
                this.triggerEvent();
                return json.data;
              } catch (e) {
                console.error(e);
              }
            };
            async consumeCoins() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityProvider = ActivityProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./assignments/assessment
      ****************************************/

      ims.set('./assignments/assessment', {
        hash: 761594104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@aimpact/chat-sdk/core");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _core2 = require("@beyond-js/kernel/core");
          /*bundle*/
          class Assessment extends _model.ReactiveModel {
            #api;
            #parent;
            #id;
            get id() {
              return this.#id;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #analysis = [];
            get analysis() {
              return this.#analysis;
            }
            #selection;
            get selection() {
              return this.#selection;
            }
            #interaction;
            get interaction() {
              return this.#interaction;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            #assignmentId;
            #chatLoaded;
            constructor({
              assignmentId
            }) {
              super();
              this.#assignmentId = assignmentId;
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            load = async (id, userId) => {
              try {
                const {
                  status,
                  data
                } = await this.#api.bearer(_session.sessionWrapper.user.token).get(`/assessments/${this.#assignmentId}.${id}/report`, {
                  userId
                });
                if (!status) throw new Error('error loading assessment');
                this.#analysis = data.analysis ?? [];
                this.#feedback = data.feedback;
                this.#selection = data.selection;
                this.#competenciesFeedback = data.competenciesFeedback;
                this.#interaction = data.interaction;
                this.loadInteraction();
                this.loaded = true;
              } catch (e) {
                console.error(e);
              }
            };
            async loadInteraction() {
              if (this.#chatLoaded) return this.#chatLoaded;
              this.#chatLoaded = new _core2.PendingPromise();
              const chat = new _core.Chat({
                id: this.#interaction.chat.id
              });
              await chat.loadAll();
              this.#chat = chat;
              this.#chatLoaded.resolve();
              this.triggerEvent('chat.loaded');
            }
            publish = async specs => {
              try {
                const props = Object.getOwnPropertyNames(specs);
                const form = new FormData();
                props.forEach(prop => {
                  form.append(prop, specs[prop]);
                });
                form.append('assignmentId', this.#assignmentId);
                const xhr = new _uploader.XHRLoader();
                xhr.bearer(_session.sessionWrapper.user.token);
                const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/assessments/spoken`);
                const json = await response.json();
                if (!json.status) {
                  throw new Error('error publishing assessment');
                }
                this.#analysis = json.data.analysis;
                this.#feedback = json.data.feedback;
                this.#competenciesFeedback = json.data.competenciesFeedback;
                this.triggerEvent();
                return json.data;
              } catch (e) {
                console.error(e);
              }
            };
            saveSelection = async specs => {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const response = await this.#api.post('/assessments/selection', {
                  ...specs,
                  assignmentId: this.#assignmentId
                });
                if (!response.status) throw new Error('error saving selection');
                this.#selection = response.data.selection;
                this.trigger('change');
              } catch (e) {
                console.error(e);
              }
            };
          }
          exports.Assessment = Assessment;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./assignments/dashboard/dasboard-wall
      *****************************************************/

      ims.set('./assignments/dashboard/dasboard-wall', {
        hash: 632583417,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/
          class DashboardWall extends _model.ReactiveModel {
            #api;
            properties = ['id', 'messages'];
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                error,
                data
              } = await this.#api.get(`/assignments/${specs.id}/wall`);
              if (!status) {
                throw new Error(`Error loading session: ${error}`);
              }
              return data;
            }
          }
          exports.DashboardWall = DashboardWall;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./assignments/dashboard/index
      *********************************************/

      ims.set('./assignments/dashboard/index', {
        hash: 538356217,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Dashboard extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
          }
          exports.Dashboard = Dashboard;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./assignments/interfaces/IEvaluation
      ****************************************************/

      ims.set('./assignments/interfaces/IEvaluation', {
        hash: 2105227437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./assignments/interfaces/assignment
      ***************************************************/

      ims.set('./assignments/interfaces/assignment', {
        hash: 2029198843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 3852925263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          class Assignment extends _item.Item {
            static instances = new Map();
            #order;
            get order() {
              return this.#order;
            }
            #assessment;
            get url() {
              return `${_wrapper.settings.baseUrl}/assignments/access/${this.id}`;
            }
            #module;
            get module() {
              return this.#module;
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            constructor({
              id = undefined,
              data
            } = {
              data: {}
            }) {
              super({
                id,
                entity: 'Assignments',
                properties: ['id', 'lesson', 'classRoomId', 'users'],
                provider: _provider.AssignmentProvider
              });
            }
            setModule(parent) {
              this.#module = parent;
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.id;
              const response = await super.load(specs);
              const {
                status,
                data
              } = response;
              if (!status) {
                throw new Error(`Error loading assignment:`);
              }
              this.#accessed = data.accessed;
              this.#module = data.module;
              this.#activities = new Activities();
              await this.#activities.setData(data.activities);
              this.#order = data.activities.order;
              // this.#activities = data.activities;
              return data;
            };
            async access() {
              const specs = {
                id: this.id
              };
              const data = await this.provider.access(specs);
              this.#accessed = data.accessed;
              this.#activities.setData(data.activities);
              return this.#accessed;
            }
            static async get(specs) {
              if (specs?.id && this.instances.has(specs.id)) {
                return this.instances.get(specs.id);
              }
              const model = new Assignment(specs);
              if (specs.id) {
                await model.load();
              }
              this.instances.set(specs.id, model);
              return model;
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /**************************************
      INTERNAL MODULE: ./assignments/provider
      **************************************/

      ims.set('./assignments/provider', {
        hash: 3875673142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class AssignmentProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/assignments/${specs.id}/tracking`, specs);
              const {
                status,
                data
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            async access(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
          }
          exports.AssignmentProvider = AssignmentProvider;
        }
      });

      /*******************************
      INTERNAL MODULE: ./gclasess/item
      *******************************/

      ims.set('./gclasess/item', {
        hash: 1733562129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GClass = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle*/
          class GClass extends _item.Item {
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'GClasses',
                properties: ['id', 'session']
              });
            }
            async load(specs) {
              const {
                status,
                data
              } = await super.load(specs);
              if (!status) {
                throw new Error(`Error loading session: `);
              }
              return data;
            }
          }
          exports.GClass = GClass;
        }
      });

      /****************************************
      INTERNAL MODULE: ./organizations/provider
      ****************************************/

      ims.set('./organizations/provider', {
        hash: 2392155578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class OrganizationProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/organizations`);
              return {
                status,
                data
              };
            };
            load = async specs => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/organizations/${specs.id}`);
              return response;
            };
            async delete() {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const data = await this.#api.delete(`/organizations/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.post('/organizations', specs);
              return res;
            }
            async invite(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const res = await this.#api.post(`/organizations/${this.#parent.id}/invite`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.post('/organizations/join', specs);
              if (!res.status) {
                if (res.error.code === 42 || res.error.code === 41) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 39) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 44) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const res = await this.#api.post(`/organizations/${this.#parent.id}/approve`, specs);
                if (!res.status) {
                  throw new Error('Error approving someone in the organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async reject(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                //const res = await this.#api.post(`/organizations/${this.#parent.id}/reject`, specs);
                // if (!res.status) {
                // 	throw new Error('Error rejecting someone in the organization');
                // }
                // return res;
                return specs;
              } catch (e) {
                console.error(e);
              }
            }
            async freeTrial(data = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/organizations/${this.#parent.id}/free-trial`, data);
            }
          }
          exports.OrganizationProvider = OrganizationProvider;
        }
      });

      /******************************************
      INTERNAL MODULE: ./users/archive/collection
      ******************************************/

      ims.set('./users/archive/collection', {
        hash: 1847499507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveCollection = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class ArchiveCollection extends _collection.Collection {
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'archive',
                item: _item.ArchiveItem,
                provider: _provider.ArchiveProvider
              });
              const {
                parent,
                ...specs
              } = props;
              this.#order = [];
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              this.setItems(Object.values(data.items));
              return data;
            };
          }
          exports.ArchiveCollection = ArchiveCollection;
        }
      });

      /************************************
      INTERNAL MODULE: ./users/archive/item
      ************************************/

      ims.set('./users/archive/item', {
        hash: 3473577115,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class ArchiveItem extends _item.Item {
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'archive',
                provider: _provider.ArchiveProvider,
                properties: ['code', 'module', 'classroom', 'id', 'payer']
              });
              const {
                parent,
                ...specs
              } = props;
              this.#order = [];
            }
            restore() {
              this.provider.restore();
            }
          }
          exports.ArchiveItem = ArchiveItem;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/archive/provider
      ****************************************/

      ims.set('./users/archive/provider', {
        hash: 3703227965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ArchiveProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
              return data.items;
            };
            async archive() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
          }
          exports.ArchiveProvider = ArchiveProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./users/interfaces/coins
      ****************************************/

      ims.set('./users/interfaces/coins', {
        hash: 1796557223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./users/interfaces/common/coins
      ***********************************************/

      ims.set('./users/interfaces/common/coins', {
        hash: 2316480134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./users/interfaces/common/people
      ************************************************/

      ims.set('./users/interfaces/common/people', {
        hash: 2362724122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./users/interfaces/user
      ***************************************/

      ims.set('./users/interfaces/user', {
        hash: 2483430249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./users/metadata
      ********************************/

      ims.set('./users/metadata', {
        hash: 473764545,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Metadata = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/
          class Metadata extends _model.ReactiveModel {
            #api;
            #schools = new Map();
            #logged = false;
            constructor(specs) {
              super({
                properties: ['freeTrial', 'requests', 'notify'],
                ...specs
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
          }
          exports.Metadata = Metadata;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./users/organizations/credit-data
      *************************************************/

      ims.set('./users/organizations/credit-data', {
        hash: 735895709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CreditsData = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class CreditsData extends _model.ReactiveModel {
            constructor(...args) {
              super({
                properties: ['credits', 'count'],
                ...args
              });
            }
          }
          exports.CreditsData = CreditsData;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./users/organizations/credits
      *********************************************/

      ims.set('./users/organizations/credits', {
        hash: 4086905048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args = {}) {
              super({
                properties: ['suscription', 'modules', 'assignments'],
                ...args
              });
              const defaultValue = {
                consumed: 0,
                count: 0
              };
              if (!this.suscription) this.suscription = {
                assignments: 0,
                renewal: 0,
                modules: 0
              };
              if (!this.modules) this.modules = defaultValue;
              if (!this.assignments) this.assignments = defaultValue;
            }
          }
          exports.Credits = Credits;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./users/organizations/index
      *******************************************/

      ims.set('./users/organizations/index', {
        hash: 3301400281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("./item");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Organizations extends _model.ReactiveModel {
            #api;
            #elements = new Map();
            get items() {
              return [...this.#elements.values()];
            }
            constructor({
              data
            }) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              if (data) {
                data.forEach(element => {
                  this.#elements.set(element.id, new _item.Organization(element));
                });
              }
            }
          }
          exports.Organizations = Organizations;
        }
      });

      /******************************************
      INTERNAL MODULE: ./users/organizations/item
      ******************************************/

      ims.set('./users/organizations/item', {
        hash: 1557308332,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _credits = require("./credits");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class Organization extends _model.ReactiveModel {
            #api;
            entity = 'organization';
            #credits;
            get credits() {
              return this.#credits;
            }
            get coins() {
              return this.#credits;
            }
            constructor(args) {
              super({
                properties: ['id', 'name', 'entities'],
                ...args
              });
              this.#credits = new _credits.Credits();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
            }
            async getCredits() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.get(`/organizations/${this.id}/coins`);
              if (!response.status) {
                throw new Error(response.error);
              }
              await this.#credits.set(response.data);
              return this.#credits;
            }
          }
          exports.Organization = Organization;
        }
      });

      /*************************************
      INTERNAL MODULE: ./users/students/item
      *************************************/

      ims.set('./users/students/item', {
        hash: 1529057499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHome = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class StudentsHome extends _item.Item {
            #assignments;
            #student;
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'StudentsHome',
                properties: ['assignments', 'student'],
                provider: _provider.StudentsHomeProvider
              });
            }
            async load() {
              //@ts-ignore
              const {
                status,
                error,
                data
              } = await super.load();
              if (!status) {
                throw new Error(`Error loading assignment: ${error}`);
              }
              this.#assignments = data.assignments;
              this.#student = data.student;
              return data;
            }
          }
          exports.StudentsHome = StudentsHome;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./users/students/provider
      *****************************************/

      ims.set('./users/students/provider', {
        hash: 158253164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class StudentsHomeProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                error,
                data
              } = await this.#api.get(`/students/home`);
              /**
               * The student does not have assignment records, return an empty list
               */
              if (!status) {
                return {
                  status: true,
                  data: {
                    assignments: [],
                    student: {
                      id: _session.sessionWrapper.user.id,
                      name: _session.sessionWrapper.user.displayName
                    }
                  }
                };
              }
              return {
                status,
                data
              };
            };
            archive = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
              return {
                status,
                data
              };
            };
          }
          exports.StudentsHomeProvider = StudentsHomeProvider;
        }
      });

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 3642099447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _users = require("@aimpact/chat-sdk/users");
          var _api = require("@beyond-js/http-suite/api");
          var _collection = require("./archive/collection");
          var _organizations = require("./organizations");
          var _credits = require("./organizations/credits");
          /*bundle*/
          class User extends _users.User {
            #api;
            #organizations;
            #logged = false;
            get logged() {
              return this.#logged;
            }
            get schools() {
              return {
                // items: [...this.#organizations.values()]
              };
            }
            #data;
            get underage() {
              return this.age < 18;
            }
            get termsAccepted() {
              return this.terms?.accepted;
            }
            #hasAccess = false;
            get data() {
              return this.#data;
            }
            get organizations() {
              return this.#organizations ?? [];
            }
            get accessibilityMode() {
              return !!globalThis.localStorage.getItem('aimpact.accessibility.mode');
            }
            get coins() {
              return this.credits;
            }
            #outdated = false;
            get outdated() {
              return this.#outdated;
            }
            #archive = new _collection.ArchiveCollection({
              parent: this
            });
            get archive() {
              return this.#archive;
            }
            constructor(specs) {
              super({
                ...specs,
                entity: 'User',
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'coins', 'email', 'photoURL', 'phoneNumber', {
                  name: 'coins',
                  value: _credits.Credits
                }, 'roles']
              });
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            async load({
              debug = false
            } = {}) {
              try {
                this.fetching = true;
                const token = await this.token;
                if (!token) throw new Error('No token');
                this.#api.bearer(token);
                const specs = {};
                if (debug) specs.debug = true;
                const response = await this.#api.get('/users/me', specs);
                if (response.error && response.error?.code === 503) {
                  this.#outdated = true;
                  return response;
                }
                this.#outdated = false;
                this.#data = response.data;
                if (this.#data.teacher) {
                  this.#organizations = new _organizations.Organizations({
                    data: this.#data.teacher.orgs
                  });
                }
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
                this.trigger('user.loaded');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async login(firebaseToken) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/login', {
                  firebaseToken,
                  ...this.getProperties()
                });
                if (!response.status) throw new Error('Error fetching user data');
                const answer = this.set(response.data);
                if (this.token) {
                  await this.load();
                }
                this.#data = response.data;
                this.#logged = true;
                return true;
              } catch (e) {
                console.error(e);
                return false;
              } finally {
                this.fetching = false;
              }
            }
            async getToken() {
              const token = await this.token;
              if (!token) throw new Error('No token');
              return token;
            }
            async acceptTerms(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(await this.getToken());
                const response = await this.#api.post('/users/terms', {
                  birthdate
                });
                this.#data = response.data;
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
                return true;
              } catch (e) {
                throw new Error('ERROR_ACCEPTING_TERMS');
              } finally {
                this.fetching = false;
              }
            }
            async validate(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(await this.getToken());
                const response = await this.#api.post('/users/validate', {
                  birthdate
                });
                if (!response.status) throw new Error('Error fetching terms');
                this.#data = response.data;
                await this.set(response.data);
                return response.data.age >= 18;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async getAccess(code) {
              try {
                if (this.#hasAccess) return true;
                this.fetching = true;
                this.#api.bearer(await this.getToken());
                const response = await this.#api.get(`/codes/${code}`);
                if (!response.status) throw new Error('Error fetching terms');
                if (response.data.valid) {
                  globalThis.localStorage.setItem('rvd.access.code', code);
                  this.#hasAccess = true;
                }
                return response.data.valid;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async freeTrial(data) {
              this.#api.bearer(await this.getToken());
              const response = await this.#api.post(`/users/free-trial`, data);
              await this.load();
              return response;
            }
            hasAccess = () => {
              const code = globalThis.localStorage.getItem('rvd.access.code');
              if (!code) return false;
              return this.getAccess(code);
            };
            async getHome() {
              if (this.#hasAccess) return true;
              this.fetching = true;
              this.#api.bearer(await this.getToken());
              return await this.#api.get(`/users/home`);
            }
            async getOrganizationCredits(id) {
              this.#api.bearer(await this.getToken());
              return await this.#api.get(`/organizations/${id}/coins`);
            }
          }
          exports.User = User;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./assignments/activities/item",
        "from": "AssignmentActivity",
        "name": "AssignmentActivity"
      }, {
        "im": "./assignments/assessment",
        "from": "Assessment",
        "name": "Assessment"
      }, {
        "im": "./assignments/dashboard/dasboard-wall",
        "from": "DashboardWall",
        "name": "DashboardWall"
      }, {
        "im": "./assignments/item",
        "from": "Assignment",
        "name": "Assignment"
      }, {
        "im": "./gclasess/item",
        "from": "GClass",
        "name": "GClass"
      }, {
        "im": "./users/archive/collection",
        "from": "ArchiveCollection",
        "name": "ArchiveCollection"
      }, {
        "im": "./users/archive/item",
        "from": "ArchiveItem",
        "name": "ArchiveItem"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICoinsCreditData",
        "name": "ICoinsCreditData"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICoinModuleConsumptionData",
        "name": "ICoinModuleConsumptionData"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICoinAssignmentConsumptionData",
        "name": "ICoinAssignmentConsumptionData"
      }, {
        "im": "./users/interfaces/common/coins",
        "from": "ICreditsConsumptionsData",
        "name": "ICreditsConsumptionsData"
      }, {
        "im": "./users/interfaces/common/people",
        "from": "RoleType",
        "name": "RoleType"
      }, {
        "im": "./users/interfaces/common/people",
        "from": "IPeopleData",
        "name": "IPeopleData"
      }, {
        "im": "./users/interfaces/common/people",
        "from": "IInviteData",
        "name": "IInviteData"
      }, {
        "im": "./users/interfaces/user",
        "from": "IAILearnUserData",
        "name": "IAILearnUserData"
      }, {
        "im": "./users/metadata",
        "from": "Metadata",
        "name": "Metadata"
      }, {
        "im": "./users/organizations/credit-data",
        "from": "CreditsData",
        "name": "CreditsData"
      }, {
        "im": "./users/organizations/credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./users/students/item",
        "from": "StudentsHome",
        "name": "StudentsHome"
      }, {
        "im": "./users/user",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AssignmentActivity') && _export("AssignmentActivity", AssignmentActivity = require ? require('./assignments/activities/item').AssignmentActivity : value);
        (require || prop === 'Assessment') && _export("Assessment", Assessment = require ? require('./assignments/assessment').Assessment : value);
        (require || prop === 'DashboardWall') && _export("DashboardWall", DashboardWall = require ? require('./assignments/dashboard/dasboard-wall').DashboardWall : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'GClass') && _export("GClass", GClass = require ? require('./gclasess/item').GClass : value);
        (require || prop === 'ArchiveCollection') && _export("ArchiveCollection", ArchiveCollection = require ? require('./users/archive/collection').ArchiveCollection : value);
        (require || prop === 'ArchiveItem') && _export("ArchiveItem", ArchiveItem = require ? require('./users/archive/item').ArchiveItem : value);
        (require || prop === 'ICoinsCreditData') && _export("ICoinsCreditData", ICoinsCreditData = require ? require('./users/interfaces/common/coins').ICoinsCreditData : value);
        (require || prop === 'ICoinModuleConsumptionData') && _export("ICoinModuleConsumptionData", ICoinModuleConsumptionData = require ? require('./users/interfaces/common/coins').ICoinModuleConsumptionData : value);
        (require || prop === 'ICoinAssignmentConsumptionData') && _export("ICoinAssignmentConsumptionData", ICoinAssignmentConsumptionData = require ? require('./users/interfaces/common/coins').ICoinAssignmentConsumptionData : value);
        (require || prop === 'ICreditsConsumptionsData') && _export("ICreditsConsumptionsData", ICreditsConsumptionsData = require ? require('./users/interfaces/common/coins').ICreditsConsumptionsData : value);
        (require || prop === 'RoleType') && _export("RoleType", RoleType = require ? require('./users/interfaces/common/people').RoleType : value);
        (require || prop === 'IPeopleData') && _export("IPeopleData", IPeopleData = require ? require('./users/interfaces/common/people').IPeopleData : value);
        (require || prop === 'IInviteData') && _export("IInviteData", IInviteData = require ? require('./users/interfaces/common/people').IInviteData : value);
        (require || prop === 'IAILearnUserData') && _export("IAILearnUserData", IAILearnUserData = require ? require('./users/interfaces/user').IAILearnUserData : value);
        (require || prop === 'Metadata') && _export("Metadata", Metadata = require ? require('./users/metadata').Metadata : value);
        (require || prop === 'CreditsData') && _export("CreditsData", CreditsData = require ? require('./users/organizations/credit-data').CreditsData : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./users/organizations/credits').Credits : value);
        (require || prop === 'StudentsHome') && _export("StudentsHome", StudentsHome = require ? require('./users/students/item').StudentsHome : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/user').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwidHJpZ2dlciIsImNvbnN1bWVDb2lucyIsImdldFByb3BlcnRpZXMiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0cmlnZ2VyRXZlbnQiLCJfY29yZSIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsImNoYXQiLCJjaGF0TG9hZGVkIiwidXNlcklkIiwibG9hZEludGVyYWN0aW9uIiwibG9hZGVkIiwiUGVuZGluZ1Byb21pc2UiLCJDaGF0IiwibG9hZEFsbCIsInJlc29sdmUiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfd3JhcHBlciIsImluc3RhbmNlcyIsInVybCIsInNldHRpbmdzIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJfY29sbGVjdGlvbiIsIkFyY2hpdmVDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBcmNoaXZlSXRlbSIsIkFyY2hpdmVQcm92aWRlciIsImtleXMiLCJsZW5ndGgiLCJzZXRJdGVtcyIsInJlc3RvcmUiLCJhcmNoaXZlIiwidGV4dCIsIk1ldGFkYXRhIiwic2Nob29scyIsImxvZ2dlZCIsIkNyZWRpdHNEYXRhIiwiYXJncyIsIkNyZWRpdHMiLCJkZWZhdWx0VmFsdWUiLCJjb25zdW1lZCIsImNvdW50Iiwic3VzY3JpcHRpb24iLCJhc3NpZ25tZW50cyIsInJlbmV3YWwiLCJtb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsImVsZW1lbnQiLCJPcmdhbml6YXRpb24iLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZldGNoaW5nIiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJhbnN3ZXIiLCJnZXRUb2tlbiIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJnZXRBY2Nlc3MiLCJ2YWxpZCIsInNldEl0ZW0iLCJnZXRIb21lIiwiZ2V0T3JnYW5pemF0aW9uQ3JlZGl0cyJdLCJzb3VyY2VzIjpbIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2NvbGxlY3Rpb24udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvYXNzZXNzbWVudC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvZGFzYm9hcmQtd2FsbC50cyIsIi9hc3NpZ25tZW50cy9kYXNoYm9hcmQvaW5kZXgudHMiLCIvSUV2YWx1YXRpb24udHMiLCIvYXNzaWdubWVudC50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2Fzc2lnbm1lbnRzL3Byb3ZpZGVyLnRzIiwiL2djbGFzZXNzL2l0ZW0udHMiLCIvb3JnYW5pemF0aW9ucy9wcm92aWRlci50cyIsIi91c2Vycy9hcmNoaXZlL2NvbGxlY3Rpb24udHMiLCIvdXNlcnMvYXJjaGl2ZS9pdGVtLnRzIiwiL3VzZXJzL2FyY2hpdmUvcHJvdmlkZXIudHMiLCIvY29pbnMudHMiLCIvcGVvcGxlLnRzIiwiL3VzZXIudHMiLCIvdXNlcnMvbWV0YWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXQtZGF0YS50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2NyZWRpdHMudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pbmRleC50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9wcm92aWRlci50cyIsIi91c2Vycy91c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkJBLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENB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