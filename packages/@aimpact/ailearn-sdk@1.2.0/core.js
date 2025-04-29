System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/reactive@2.0.4/entities/item", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.0/api", "@aimpact/media-manager@1.0.0/uploader", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/reactive@2.0.4/entities/collection", "@aimpact/chat-sdk@1.5.4/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, GClass, ArchiveCollection, ArchiveItem, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_2 = _beyondJsReactive204EntitiesItem;
    }, function (_aimpactChatSdk154Core) {
      dependency_3 = _aimpactChatSdk154Core;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_4 = _aimpactAilearnSdk120Config;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_6 = _beyondJsHttpSuite010Api;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_8 = _aimpactAilearnSdk120Startup;
    }, function (_beyondJsKernel0112Core) {
      dependency_9 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_11 = _beyondJsReactive204EntitiesCollection;
    }, function (_aimpactChatSdk154Users) {
      dependency_12 = _aimpactChatSdk154Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-app", "0.4.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/http-suite/api', dependency_6], ['@aimpact/media-manager/uploader', dependency_7], ['@aimpact/ailearn-sdk/startup', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@beyond-js/reactive/entities/collection', dependency_11], ['@aimpact/chat-sdk/users', dependency_12]]);
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
        hash: 1592919907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 703913870,
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
                this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 1624760593,
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 3555346626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class Assignment extends _item.Item {
            static instances = new Map();
            #order;
            get order() {
              return this.#order;
            }
            #assessment;
            get url() {
              return `${_config.default.params.baseUrl}/assignments/access/${this.id}`;
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
        hash: 63018308,
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 2812578061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class OrganizationProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            list = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/organizations/${specs.id}`);
              return response;
            };
            async delete() {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const data = await this.#api.delete(`/organizations/${this.#parent.id}`);
                return data;
              } catch (e) {
                console.error(e);
              }
            }
            async publish(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.post('/organizations', specs);
              return res;
            }
            async invite(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
                this.#api.bearer(_session.sessionWrapper.user.token);
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
                this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 2020605615,
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/users/assignments/archived`);
              return data.items;
            };
            async archive() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              this.set(response.data);
              return response;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 3339629499,
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 2522710194,
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
              this.#api.bearer(_session.sessionWrapper.user.token);
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
        hash: 534839116,
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
                this.#api.bearer(this.token);
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
            async acceptTerms(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
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
                this.#api.bearer(this.token);
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
                this.#api.bearer(this.token);
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
              this.#api.bearer(this.token);
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
              this.#api.bearer(this.token);
              return await this.#api.get(`/users/home`);
            }
            async getOrganizationCredits(id) {
              this.#api.bearer(this.token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwidHJpZ2dlciIsImNvbnN1bWVDb2lucyIsImdldFByb3BlcnRpZXMiLCJfc2Vzc2lvbiIsIl9hcGkiLCJfdXBsb2FkZXIiLCJfc3RhcnR1cCIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ0b2tlbiIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0cmlnZ2VyRXZlbnQiLCJfY29yZSIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsImNoYXQiLCJjaGF0TG9hZGVkIiwidXNlcklkIiwibG9hZEludGVyYWN0aW9uIiwibG9hZGVkIiwiUGVuZGluZ1Byb21pc2UiLCJDaGF0IiwibG9hZEFsbCIsInJlc29sdmUiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29uZmlnIiwiaW5zdGFuY2VzIiwidXJsIiwiZGVmYXVsdCIsImJhc2VVcmwiLCJhY2Nlc3NlZCIsImxvYWRDaGF0IiwidW5kZWZpbmVkIiwiQXNzaWdubWVudFByb3ZpZGVyIiwic2V0TW9kdWxlIiwiYWNjZXNzIiwiR0NsYXNzIiwiT3JnYW5pemF0aW9uUHJvdmlkZXIiLCJsaXN0IiwiZGVsZXRlIiwicmVzIiwiaW52aXRlIiwiam9pbiIsImNvZGUiLCJhcHByb3ZlIiwicmVqZWN0IiwiZnJlZVRyaWFsIiwiX2NvbGxlY3Rpb24iLCJBcmNoaXZlQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJpdGVtIiwiQXJjaGl2ZUl0ZW0iLCJBcmNoaXZlUHJvdmlkZXIiLCJrZXlzIiwibGVuZ3RoIiwic2V0SXRlbXMiLCJyZXN0b3JlIiwiYXJjaGl2ZSIsInRleHQiLCJNZXRhZGF0YSIsInNjaG9vbHMiLCJsb2dnZWQiLCJDcmVkaXRzRGF0YSIsImFyZ3MiLCJDcmVkaXRzIiwiZGVmYXVsdFZhbHVlIiwiY29uc3VtZWQiLCJjb3VudCIsInN1c2NyaXB0aW9uIiwiYXNzaWdubWVudHMiLCJyZW5ld2FsIiwibW9kdWxlcyIsIk9yZ2FuaXphdGlvbnMiLCJlbGVtZW50IiwiT3JnYW5pemF0aW9uIiwiX2NyZWRpdHMiLCJjb2lucyIsImdldENyZWRpdHMiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJfdXNlcnMiLCJfb3JnYW5pemF0aW9ucyIsIlVzZXIiLCJvcmdhbml6YXRpb25zIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsImhhc0FjY2VzcyIsImFjY2Vzc2liaWxpdHlNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm91dGRhdGVkIiwiZGVidWciLCJmZXRjaGluZyIsInRlYWNoZXIiLCJvcmdzIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiYW5zd2VyIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJ2YWxpZGF0ZSIsImdldEFjY2VzcyIsInZhbGlkIiwic2V0SXRlbSIsImdldEhvbWUiLCJnZXRPcmdhbml6YXRpb25DcmVkaXRzIl0sInNvdXJjZXMiOlsiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9hc3Nlc3NtZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9kYXNib2FyZC13YWxsLnRzIiwiL2Fzc2lnbm1lbnRzL2Rhc2hib2FyZC9pbmRleC50cyIsIi9JRXZhbHVhdGlvbi50cyIsIi9hc3NpZ25tZW50LnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvYXNzaWdubWVudHMvcHJvdmlkZXIudHMiLCIvZ2NsYXNlc3MvaXRlbS50cyIsIi9vcmdhbml6YXRpb25zL3Byb3ZpZGVyLnRzIiwiL3VzZXJzL2FyY2hpdmUvY29sbGVjdGlvbi50cyIsIi91c2Vycy9hcmNoaXZlL2l0ZW0udHMiLCIvdXNlcnMvYXJjaGl2ZS9wcm92aWRlci50cyIsIi9jb2lucy50cyIsIi9wZW9wbGUudHMiLCIvdXNlci50cyIsIi91c2Vycy9tZXRhZGF0YS50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2NyZWRpdC1kYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0cy50cyIsIi91c2Vycy9vcmdhbml6YXRpb25zL2luZGV4LnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaXRlbS50cyIsIi91c2Vycy9zdHVkZW50cy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL3Byb3ZpZGVyLnRzIiwiL3VzZXJzL3VzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkJBLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtn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