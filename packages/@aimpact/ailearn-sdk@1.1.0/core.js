System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/reactive@2.0.4/entities/item", "@aimpact/chat-sdk@1.4.4/core", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/http-suite@0.1.0/api", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@beyond-js/reactive@2.0.4/entities/collection", "@aimpact/chat-sdk@1.4.4/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AssignmentActivity, Assessment, DashboardWall, Assignment, GClass, ArchiveCollection, ArchiveItem, ICoinsCreditData, ICoinModuleConsumptionData, ICoinAssignmentConsumptionData, ICreditsConsumptionsData, RoleType, IPeopleData, IInviteData, IAILearnUserData, Metadata, CreditsData, Credits, StudentsHome, User, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk144Core) {
      dependency_3 = _aimpactChatSdk144Core;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_4 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk144Session) {
      dependency_5 = _aimpactChatSdk144Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_6 = _beyondJsHttpSuite010Api;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_7 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_9 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_10 = _beyondJsReactive204EntitiesCollection;
    }, function (_aimpactChatSdk144Users) {
      dependency_11 = _aimpactChatSdk144Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@aimpact/chat-sdk/core', dependency_3], ['@aimpact/ailearn-sdk/config', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/http-suite/api', dependency_6], ['@aimpact/media-manager/uploader', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_9], ['@beyond-js/reactive/entities/collection', dependency_10], ['@aimpact/chat-sdk/users', dependency_11]]);
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
        hash: 3642001480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
                const response = await xhr.upload(form, `${_config.default.params.apis[_config.default.params.project].ailearn}/activities/spoken/completion`);
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
        hash: 2481994500,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assessment = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@aimpact/chat-sdk/core");
          var _uploader = require("@aimpact/media-manager/uploader");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
                const response = await xhr.upload(form, `${_config.default.params.apis[_config.default.params.project].ailearn}/assessments/spoken`);
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
        hash: 4114132575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardWall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class DashboardWall extends _model.ReactiveModel {
            #api;
            properties = ['id', 'messages'];
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 167915426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          class Dashboard extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 277776599,
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
        hash: 3168791762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class AssignmentProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2916173952,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class OrganizationProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2381772208,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArchiveProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          class ArchiveProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2197110563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Metadata = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          /*bundle*/
          class Metadata extends _model.ReactiveModel {
            properties = ['freeTrial', 'requests', 'notify'];
            #api;
            #schools = new Map();
            #logged = false;
            constructor(specs) {
              super({
                ...specs
              });
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            set(data) {}
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
        hash: 4155812583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organizations = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _item = require("./item");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 3442225670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Organization = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _credits = require("./credits");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 2710941194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHomeProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class StudentsHomeProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 576195247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _organizations = require("./organizations");
          var _credits = require("./organizations/credits");
          var _collection = require("./archive/collection");
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
                }, 'token', 'roles']
              });
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2l0ZW0iLCJBY3Rpdml0aWVzIiwiUmVhY3RpdmVNb2RlbCIsImVsZW1lbnRzIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJzZXREYXRhIiwiYWN0aXZpdGllcyIsIm9yZGVyIiwiZm9yRWFjaCIsImlkIiwiaGFzIiwiaW5zdGFuY2UiLCJBc3NpZ25tZW50QWN0aXZpdHkiLCJzZXQiLCJpbnN0YW5jZVByb21pc2VzIiwiaW5kZXgiLCJnZXQiLCJQcm9taXNlIiwiYWxsIiwiZXhwb3J0cyIsIl9wcm92aWRlciIsIl9pdGVtMiIsIkl0ZW0iLCJhc3NpZ25tZW50SWQiLCJ1c2VyIiwibW9kdWxlIiwidHJhY2tpbmciLCJtYXRlcmlhbHMiLCJyZXNvdXJjZXMiLCJhbmFseXNpcyIsImZlZWRiYWNrIiwiY2hhdE1vZGVsIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhc3Nlc3NtZW50IiwiYXNzaWdtZW50IiwiYXNzaWdubWVudCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImVudGl0eSIsInByb3BlcnRpZXMiLCJwcm92aWRlciIsIkFjdGl2aXR5UHJvdmlkZXIiLCJzdGFydHVwIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwibG9hZCIsInNwZWNzIiwiQXNzaWdubWVudCIsInN0YXR1cyIsImFjdGl2aXR5IiwiY3JlZGl0cyIsIkVycm9yIiwicHJvY2VzcyIsIiNwcm9jZXNzIiwiSlNPTiIsInBhcnNlIiwicHVibGlzaCIsInBhcmFtcyIsInR5cGUiLCJyZXNwb25zZSIsInNlbGVjdGlvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJwdWJsaXNoU3Bva2VuIiwidHJpZ2dlciIsImNvbnN1bWVDb2lucyIsImdldFByb3BlcnRpZXMiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJfYXBpIiwiX3VwbG9hZGVyIiwiYXBpIiwicGFyZW50IiwiQXBpIiwiZGVmYXVsdCIsImFwaXMiLCJwcm9qZWN0IiwiYWlsZWFybiIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidG9rZW4iLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwic3Bva2VuIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsInByb3AiLCJhcHBlbmQiLCJ4aHIiLCJYSFJMb2FkZXIiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiX2NvcmUiLCJfY29yZTIiLCJBc3Nlc3NtZW50IiwiaW50ZXJhY3Rpb24iLCJjaGF0IiwiY2hhdExvYWRlZCIsInVzZXJJZCIsImxvYWRJbnRlcmFjdGlvbiIsImxvYWRlZCIsIlBlbmRpbmdQcm9taXNlIiwiQ2hhdCIsImxvYWRBbGwiLCJyZXNvbHZlIiwic2F2ZVNlbGVjdGlvbiIsIkRhc2hib2FyZFdhbGwiLCJEYXNoYm9hcmQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaW5zdGFuY2VzIiwidXJsIiwiYmFzZVVybCIsImFjY2Vzc2VkIiwibG9hZENoYXQiLCJ1bmRlZmluZWQiLCJBc3NpZ25tZW50UHJvdmlkZXIiLCJzZXRNb2R1bGUiLCJhY2Nlc3MiLCJHQ2xhc3MiLCJPcmdhbml6YXRpb25Qcm92aWRlciIsImxpc3QiLCJkZWxldGUiLCJyZXMiLCJpbnZpdGUiLCJqb2luIiwiY29kZSIsImFwcHJvdmUiLCJyZWplY3QiLCJmcmVlVHJpYWwiLCJfY29sbGVjdGlvbiIsIkFyY2hpdmVDb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJBcmNoaXZlSXRlbSIsIkFyY2hpdmVQcm92aWRlciIsImtleXMiLCJsZW5ndGgiLCJzZXRJdGVtcyIsInJlc3RvcmUiLCJhcmNoaXZlIiwidGV4dCIsIk1ldGFkYXRhIiwic2Nob29scyIsImxvZ2dlZCIsIkNyZWRpdHNEYXRhIiwiYXJncyIsIkNyZWRpdHMiLCJkZWZhdWx0VmFsdWUiLCJjb25zdW1lZCIsImNvdW50Iiwic3VzY3JpcHRpb24iLCJhc3NpZ25tZW50cyIsInJlbmV3YWwiLCJtb2R1bGVzIiwiT3JnYW5pemF0aW9ucyIsImVsZW1lbnQiLCJPcmdhbml6YXRpb24iLCJfY3JlZGl0cyIsImNvaW5zIiwiZ2V0Q3JlZGl0cyIsIlN0dWRlbnRzSG9tZSIsInN0dWRlbnQiLCJTdHVkZW50c0hvbWVQcm92aWRlciIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIl91c2VycyIsIl9vcmdhbml6YXRpb25zIiwiVXNlciIsIm9yZ2FuaXphdGlvbnMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZldGNoaW5nIiwidGVhY2hlciIsIm9yZ3MiLCJsb2dpbiIsImZpcmViYXNlVG9rZW4iLCJhbnN3ZXIiLCJhY2NlcHRUZXJtcyIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZ2V0QWNjZXNzIiwidmFsaWQiLCJzZXRJdGVtIiwiZ2V0SG9tZSIsImdldE9yZ2FuaXphdGlvbkNyZWRpdHMiXSwic291cmNlcyI6WyIvYXNzaWdubWVudHMvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9hY3Rpdml0aWVzL3Byb3ZpZGVyLnRzIiwiL2Fzc2lnbm1lbnRzL2Fzc2Vzc21lbnQudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2Rhc2JvYXJkLXdhbGwudHMiLCIvYXNzaWdubWVudHMvZGFzaGJvYXJkL2luZGV4LnRzIiwiL0lFdmFsdWF0aW9uLnRzIiwiL2Fzc2lnbm1lbnQudHMiLCIvYXNzaWdubWVudHMvaXRlbS50cyIsIi9hc3NpZ25tZW50cy9wcm92aWRlci50cyIsIi9nY2xhc2Vzcy9pdGVtLnRzIiwiL29yZ2FuaXphdGlvbnMvcHJvdmlkZXIudHMiLCIvdXNlcnMvYXJjaGl2ZS9jb2xsZWN0aW9uLnRzIiwiL3VzZXJzL2FyY2hpdmUvaXRlbS50cyIsIi91c2Vycy9hcmNoaXZlL3Byb3ZpZGVyLnRzIiwiL2NvaW5zLnRzIiwiL3Blb3BsZS50cyIsIi91c2VyLnRzIiwiL3VzZXJzL21ldGFkYXRhLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvY3JlZGl0LWRhdGEudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9jcmVkaXRzLnRzIiwiL3VzZXJzL29yZ2FuaXphdGlvbnMvaW5kZXgudHMiLCIvdXNlcnMvb3JnYW5pemF0aW9ucy9pdGVtLnRzIiwiL3VzZXJzL3N0dWRlbnRzL2l0ZW0udHMiLCIvdXNlcnMvc3R1ZGVudHMvcHJvdmlkZXIudHMiLCIvdXNlcnMvdXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTSxNQUFPRSxVQUFXLFNBQVFILE1BQUEsQ0FBQUksYUFBeUI7WUFDeEQsQ0FBQUMsUUFBUyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNyQixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQUYsUUFBUyxDQUFDRyxNQUFNLEVBQUUsQ0FBQztZQUNwQztZQUNBLE1BQU1DLE9BQU9BLENBQUNDLFVBQVU7Y0FDdkJBLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUVDLEVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJ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