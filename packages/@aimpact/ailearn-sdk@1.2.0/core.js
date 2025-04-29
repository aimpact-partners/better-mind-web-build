System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/reactive@2.0.4/entities/item", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/config", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/reactive@2.0.4/entities/collection", "@aimpact/chat-sdk@1.5.4/users"], function (_export, _context) {
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/startup', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/media-manager/uploader', dependency_6], ['@beyond-js/http-suite/api', dependency_7], ['@aimpact/ailearn-sdk/config', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@beyond-js/reactive/entities/collection', dependency_11], ['@aimpact/chat-sdk/users', dependency_12]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwidHJpZ2dlciIsImNvbnN1bWVDb2lucyIsImdldFByb3BlcnRpZXMiLCJfc3RhcnR1cCIsIl9zZXNzaW9uIiwiX3VwbG9hZGVyIiwiX2FwaSIsImFwaSIsInBhcmVudCIsIkFwaSIsInNka0NvbmZpZyIsImFwaXMiLCJhaWxlYXJuIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsImJlYXJlciIsInByb2dyZXNzIiwicHJvY2Vzc0xvYWQiLCJzcG9rZW4iLCJwb3N0IiwicHJvcHMiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZm9ybSIsIkZvcm1EYXRhIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInVwbG9hZCIsImpzb24iLCJ0cmlnZ2VyRXZlbnQiLCJfY29yZSIsIl9jb3JlMiIsIkFzc2Vzc21lbnQiLCJpbnRlcmFjdGlvbiIsImNoYXQiLCJjaGF0TG9hZGVkIiwidXNlcklkIiwibG9hZEludGVyYWN0aW9uIiwibG9hZGVkIiwiUGVuZGluZ1Byb21pc2UiLCJDaGF0IiwibG9hZEFsbCIsInJlc29sdmUiLCJzYXZlU2VsZWN0aW9uIiwiRGFzaGJvYXJkV2FsbCIsIkRhc2hib2FyZCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29uZmlnIiwiaW5zdGFuY2VzIiwidXJsIiwiZGVmYXVsdCIsImJhc2VVcmwiLCJhY2Nlc3NlZCIsImxvYWRDaGF0IiwidW5kZWZpbmVkIiwiQXNzaWdubWVudFByb3ZpZGVyIiwic2V0TW9kdWxlIiwiYWNjZXNzIiwiR0NsYXNzIiwiT3JnYW5pemF0aW9uUHJvdmlkZXIiLCJsaXN0IiwiZGVsZXRlIiwicmVzIiwiaW52aXRlIiwiam9pbiIsImNvZGUiLCJhcHByb3ZlIiwicmVqZWN0IiwiZnJlZVRyaWFsIiwiX2NvbGxlY3Rpb24iLCJBcmNoaXZlQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb24iLCJpdGVtIiwiQXJjaGl2ZUl0ZW0iLCJBcmNoaXZlUHJvdmlkZXIiLCJrZXlzIiwibGVuZ3RoIiwic2V0SXRlbXMiLCJyZXN0b3JlIiwiYXJjaGl2ZSIsInRleHQiLCJNZXRhZGF0YSIsInNjaG9vbHMiLCJsb2dnZWQiLCJDcmVkaXRzRGF0YSIsImFyZ3MiLCJDcmVkaXRzIiwiZGVmYXVsdFZhbHVlIiwiY29uc3VtZWQiLCJjb3VudCIsInN1c2NyaXB0aW9uIiwiYXNzaWdubWVudHMiLCJyZW5ld2FsIiwibW9kdWxlcyIsIk9yZ2FuaXphdGlvbnMiLCJlbGVtZW50IiwiT3JnYW5pemF0aW9uIiwiX2NyZWRpdHMiLCJjb2lucyIsImdldENyZWRpdHMiLCJTdHVkZW50c0hvbWUiLCJzdHVkZW50IiwiU3R1ZGVudHNIb21lUHJvdmlkZXIiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJfdXNlcnMiLCJfb3JnYW5pemF0aW9ucyIsIlVzZXIiLCJvcmdhbml6YXRpb25zIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsImhhc0FjY2VzcyIsImFjY2Vzc2liaWxpdHlNb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm91dGRhdGVkIiwiZGVidWciLCJmZXRjaGluZyIsInRlYWNoZXIiLCJvcmdzIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiYW5zd2VyIiwiZ2V0VG9rZW4iLCJhY2NlcHRUZXJtcyIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZ2V0QWNjZXNzIiwidmFsaWQiLCJzZXRJdGVtIiwiZ2V0SG9tZSIsImdldE9yZ2FuaXphdGlvbkNyZWRpdHMiXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnQudHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9wcm92aWRlci50cyIsIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL29yZ2FuaXphdGlvbnMvcHJvdmlkZXIudHMiLCIvdXNlcnMvYXJjaGl2ZS9jb2xsZWN0aW9uLnRzIiwiL3VzZXJzL2FyY2hpdmUvaXRlbS50cyIsIi91c2Vycy9hcmNoaXZlL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL21ldGFkYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0LWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXRzLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaW5kZXgudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVNLE1BQU9FLFVBQVcsU0FBUUgsTUFBQSxDQUFBSSxhQUF5QjtZQUN4RCxDQUFBQyxRQUFTLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ3JCLElBQUlELFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQ3BDO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ0MsVUFBVTtjQUN2QkEsVUFBVSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBRUMs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