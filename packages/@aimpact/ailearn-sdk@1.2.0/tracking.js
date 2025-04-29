System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/reactive@2.0.4/entities/collection", "@aimpact/chat-sdk@1.5.4/core", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, TrackingDashboard, ParticipantProvider, Tracking, IActivityListItem, IActivityBase, TrackingStatusType, IActivityTrackingBase, IDashboard, __beyond_pkg, hmr;
  _export({
    Activity: void 0,
    Assignments: void 0,
    Assignment: void 0,
    Credits: void 0,
    TrackingDashboard: void 0,
    ParticipantProvider: void 0,
    Tracking: void 0,
    IActivityListItem: void 0,
    IActivityBase: void 0,
    TrackingStatusType: void 0,
    IActivityTrackingBase: void 0,
    IDashboard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_1 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_2 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_3 = _aimpactAilearnSdk120Config;
    }, function (_aimpactChatSdk154Session) {
      dependency_4 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_5 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_6 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_7 = _beyondJsReactive204EntitiesCollection;
    }, function (_aimpactChatSdk154Core) {
      dependency_8 = _aimpactChatSdk154Core;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_9 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsReactive204Model) {
      dependency_10 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/startup', dependency_2], ['@aimpact/ailearn-sdk/config', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/media-manager/uploader', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@beyond-js/reactive/entities/collection', dependency_7], ['@aimpact/chat-sdk/core', dependency_8], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_9], ['@beyond-js/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11]]);
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/
      ims.set('./activities/collection-provider', {
        hash: 1463396629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityCollectionProvider {
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
              // if (specs?.progress) await this.#parent.processLoad(data);
              return {
                status,
                data
              };
            };
            list = this.load;
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
            };
            async consumeCoins() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            }
          }
          exports.ActivityCollectionProvider = ActivityCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activities/collection
      ***************************************/

      ims.set('./activities/collection', {
        hash: 74674477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _ = require("./");
          var _provider = require("./provider");
          class Activities extends _collection.Collection {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #loadChat;
            get loadChat() {
              return this.#loadChat;
            }
            #order;
            get order() {
              return this.#order;
            }
            constructor(props) {
              super({
                ...props,
                entity: 'activity',
                item: _.Activity,
                provider: _provider.ActivityProvider
              });
              const {
                parent,
                loadChat = false,
                ...specs
              } = props;
              this.#tracking = parent;
              this.#loadChat = loadChat;
            }
            set = data => {
              if (!data || Object.keys(data).length === 0) {
                return;
              }
              this.#order = data.order;
              let items = Object.values(data.items);
              const module = this.#tracking.module.getProperties();
              items = data.order.map(id => ({
                ...data.items[id],
                module,
                parent: this,
                loadChat: true
              }));
              this.setItems(items);
              this.items.forEach(item => {
                item.setTracking(this.#tracking);
                item.processMaterials();
              });
              return data;
            };
            async loadActivity({
              id
            }) {
              if (this.map.has(id)) return this.map.get(id);
              // const instance = new Activity({ id, assignmentId: this.tracking.assignmentId, tracking: this.tracking });
              const instance = new _.Activity({
                parent: this,
                id,
                loadChat: this.#loadChat,
                assignmentId: this.tracking.modelId,
                testing: this.tracking.testing,
                tracking: this.tracking
              });
              // instance.setTracking(this.#tracking);
              await instance.load();
              instance.trigger('credits.change');
              this.#tracking.trigger('credits.change');
              return instance;
            }
          }
          exports.Activities = Activities;
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 3895407134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          var _credits = require("../credits");
          var _provider = require("./provider");
          /*bundle*/
          class Activity extends _item.Item {
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #feedback;
            get feedback() {
              return this.#feedback;
            }
            #competenciesFeedback;
            get competenciesFeedback() {
              return this.#competenciesFeedback;
            }
            #analysis;
            get analysis() {
              return this.#analysis;
            }
            get objectives() {
              return this.resources?.specs?.objectives;
            }
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            #testing;
            get testing() {
              return this.#testing;
            }
            #loadChat;
            getMaterials() {
              return this.resources?.materials ? this.resources.materials : this.materials;
            }
            getSpecs() {
              return this.resources?.specs ? this.resources.specs : this.specs;
            }
            constructor({
              parent,
              id,
              testing = false,
              ...specs
            }) {
              super({
                id,
                entity: 'Activities',
                ...specs,
                properties: ['id', 'type', 'subtype', 'title', 'description', 'language', 'status', 'picture', 'objectives', 'resources', 'materials', 'settings', 'specs', 'chat', 'module', {
                  name: 'credits',
                  value: _credits.Credits
                }, 'data', 'user'],
                provider: _provider.ActivityProvider
              });
              if (specs.tracking) this.setTracking(specs.tracking);
              this.#testing = testing;
              let {
                assignmentId,
                data,
                loadChat
              } = specs;
              this.#loadChat = loadChat;
              assignmentId = assignmentId ? assignmentId : parent.tracking.assignmentId;
              this.startup(assignmentId, data);
            }
            setTracking(tracking) {
              this.#tracking = tracking;
              this.#tracking.on('credits.change', () => {
                this.set({
                  credits: this.#tracking.credits.getProperties()
                });
                this.trigger('credits.change');
              });
            }
            async startup(assignmentId, data) {
              this.#assignmentId = assignmentId;
              if (this.#loadChat && this.getProperty('chat')) {
                this.loadChat(this.getProperty('chat'));
              }
            }
            async loadChat(data) {
              const chat = new _core.Chat({
                id: data.id,
                language: this.language
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: data.id
              });
              this.triggerEvent('chat.loaded');
            }
            load = async (specs = {}) => {
              if (!specs.id) specs.id = this.getProperty('id');
              specs.assignmentId = this.#assignmentId;
              const data = this.testing ? await this.provider.loadTestingActivity(this.tracking.getProperty('id'), this.getProperty('id')) : await super.load(specs);
              await this.set({
                ...data.activity,
                credits: data.credits,
                module: data.module
              });
              //when the activity is loaded in assignments view, the tracking is not loaded.
              this.#tracking.set(data);
              this.#tracking.trigger('credits.change');
              //todo: this code must be removed when the reactive model is fixed
              this.#process();
              return data;
            };
            #process() {
              if (this.materials?.assessment) {
                this.#assessment = JSON.parse(this.materials.assessment);
              }
              if (this.resources?.materials?.assessment) {
                this.#assessment = JSON.parse(this.resources.materials.assessment);
              }
            }
            processMaterials() {
              return this.#process();
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
                throw new Error('error publishing spoken activity');
              }
            }
            async publishSpoken({
              params,
              type
            }) {
              if (!params.draftId) params.assignmentId = params.assignmentId ?? this.#assignmentId;
              params.activityId = params.activityId ?? this.id;
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
            }
            set = data => {
              const response = super.set(data);
              this.#process();
              this.trigger('change');
              return response;
            };
            consumeCoins = async () => {
              return this.#tracking.consumeCoins();
            };
          }
          exports.Activity = Activity;
        }
      });

      /*************************************
      INTERNAL MODULE: ./activities/provider
      *************************************/

      ims.set('./activities/provider', {
        hash: 4035172479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
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
              return data;
            };
            loadTestingActivity = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
            list = this.load;
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
              return json.data;
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
      INTERNAL MODULE: ./assignments/collection
      ****************************************/

      ims.set('./assignments/collection', {
        hash: 2173799384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignments = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          /*bundle*/
          class Assignments extends _collection.Collection {
            constructor() {
              super({
                entity: 'assignments',
                item: _item.Assignment
              });
            }
          }
          exports.Assignments = Assignments;
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignments/item
      **********************************/

      ims.set('./assignments/item', {
        hash: 1328445365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Assignment = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle */
          class Assignment extends _item.Item {
            constructor(args) {
              super({
                entity: 'assignments',
                properties: ['id', 'title', 'description', 'name'],
                ...args
              });
            }
          }
          exports.Assignment = Assignment;
        }
      });

      /*************************
      INTERNAL MODULE: ./credits
      *************************/

      ims.set('./credits', {
        hash: 2299380065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Credits = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Credits extends _model.ReactiveModel {
            constructor(args) {
              super({
                properties: ['consumed', 'total'],
                ...args
              });
            }
          }
          exports.Credits = Credits;
        }
      });

      /********************************************
      INTERNAL MODULE: ./dashboard/activities/index
      ********************************************/

      ims.set('./dashboard/activities/index', {
        hash: 3676316793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivities = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class DashboardActivities extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardActivities',
                item: _item.DashboardActivity
              });
              this.#parent = parent;
            }
            /**
             * Processes the activities data by sorting the items according to the given order.
             * It then updates the items structure accordingly.
             *
             * @param {IDashboard["activities"]} activities - The activities data containing the order array and items record.
             
             */
            // @ts-ignore
            set(data) {
              const items = data.order.map(id => data.items[id]);
              super.setItems(items);
              //@ts-ignore
              return super.set(items);
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
          }
          exports.DashboardActivities = DashboardActivities;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./dashboard/activities/item
      *******************************************/

      ims.set('./dashboard/activities/item', {
        hash: 1697760133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class DashboardActivity extends _item.Item {
            #parent;
            #dashboard;
            get participants() {
              return this.#dashboard?.participants.items.filter(participant => participant.activities.has(this.id)) ?? [];
            }
            get assessment() {
              return JSON.parse(this.resources?.materials?.assessment ?? '{}');
            }
            constructor({
              parent,
              ...args
            } = {}) {
              super({
                ...args,
                entity: 'DashboardParticipants',
                properties: ['id', 'type', 'language', 'title', 'description', 'picture', 'settings', 'materials', 'specs', 'resources']
              });
              this.#parent = parent;
              this.#dashboard = parent.parent;
            }
          }
          exports.DashboardActivity = DashboardActivity;
        }
      });

      /*********************************
      INTERNAL MODULE: ./dashboard/index
      *********************************/

      ims.set('./dashboard/index', {
        hash: 3873797573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingDashboard = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participants = require("./participants");
          var _dashboard = require("./providers/dashboard");
          /*bundle*/
          class TrackingDashboard extends _item.Item {
            get isUserCreator() {
              return _session.sessionWrapper.user.id === this.module.creator?.id;
            }
            get totalParticipants() {
              return this.participants.items.length;
            }
            constructor({
              id,
              ...specs
            } = {}) {
              super({
                id,
                ...specs,
                entity: 'Dashboard',
                properties: ['id', 'classroom', 'module', 'archived', {
                  name: 'activities',
                  value: _activities.DashboardActivities
                }, {
                  name: 'participants',
                  value: _participants.Participants
                }],
                provider: _dashboard.DashboardProvider
              });
            }
            set(data) {
              const response = super.set(data);
              return response;
            }
            async archive() {
              const data = await this.provider.archive();
              this.set({
                archived: data.archived
              });
              return data;
            }
            async restore() {
              const data = await this.provider.restore();
              this.set({
                archived: data.archived
              });
              return data;
            }
          }
          exports.TrackingDashboard = TrackingDashboard;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/index
      *********************************************************/

      ims.set('./dashboard/participants/activities/index', {
        hash: 225838489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivities = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          class ParticipantActivities extends _model.ReactiveModel {
            #data;
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            get(id) {
              return this.map.get(id);
            }
            has(id) {
              return this.map.has(id);
            }
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            constructor(parent) {
              super();
              if (!parent) console.trace(2, parent);
              this.#parent = parent;
              this.#data = {};
            }
            setData(data) {
              this.#data = data;
            }
            set(data) {
              data.forEach(item => {
                if (this.#map.has(item.id)) {
                  this.#map.get(item.id).set(item);
                  return;
                }
                this.#map.set(item.id, new _item.ParticipantActivity({
                  parent: this,
                  ...item
                }));
              });
              return data;
            }
            /**
             * @deprecated
             * @param activities
             */
            check(activities) {
              const types = {
                spoken: _spoken.ParticipantSpokenActivity,
                detault: _item.ParticipantActivity,
                'multiple-choice': _multipleChoice.ParticipantMultipleChoiceActivity
              };
              const currents = Object.keys(this.#data);
              currents.forEach(id => {
                if (!activities.has(id)) {
                  console.warn('something wrong, this activity is not loaded in dashboard tracking: ', id);
                  return;
                }
                const activity = activities.get(id);
                if (this.has(id)) {
                  this.get(activity.id).set(this.#data[id]?.data ?? this.#data[id]);
                  return this.get(activity.id);
                }
                const Activity = types[activity.type] || types.detault;
                const data = this.#data[id]?.data ?? this.#data[id];
                const instance = new Activity({
                  parent: this,
                  activity,
                  ...data
                });
                this.#map.set(activity.id, instance);
                return instance;
              });
            }
          }
          exports.ParticipantActivities = ParticipantActivities;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/item
      ********************************************************/

      ims.set('./dashboard/participants/activities/item', {
        hash: 1072921300,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantActivity = void 0;
          var _core = require("@aimpact/chat-sdk/core");
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantActivity extends _item.Item {
            #parent;
            get dashboard() {
              return this.#parent.dashboard;
            }
            get activity() {
              return this.dashboard?.activities?.get(this.id);
            }
            #chatModel;
            get chatModel() {
              return this.#chatModel;
            }
            get assessment() {
              const data = this.activity.assessment;
              if (this.activity.type === 'multiple-choice') {
                return {
                  title: data.title,
                  questions: data.questions.map((item, index) => {
                    return {
                      ...item,
                      ...this.responses[index]
                    };
                  })
                };
              }
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              parent,
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['id', 'alerts', 'messages', 'interactions', 'progress', 'synthesis', 'attempts', 'chat', 'data', 'counters', 'responses', ...properties]
              });
              this.#parent = parent;
            }
            async loadChat() {
              if (!this.chat || !this.chat?.id) {
                console.warn('The activity does not have a chat id');
                return;
              }
              const chat = new _core.Chat({
                id: this.chat.id
              });
              this.#chatModel = chat;
              await chat.loadAll({
                id: this.chat.id
              });
              this.triggerEvent('chat.loaded');
            }
          }
          exports.ParticipantActivity = ParticipantActivity;
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/multiple-choice
      *******************************************************************/

      ims.set('./dashboard/participants/activities/multiple-choice', {
        hash: 4142976364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantMultipleChoiceActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantMultipleChoiceActivity extends _item.Item {
            #objectives = [];
            get objectives() {
              return this.#objectives;
            }
            get questions() {
              try {
                return JSON.parse(this?.activity.resources.materials.assessment).questions;
              } catch (e) {
                console.warn(e);
              }
            }
            get participationData() {
              return this.questions?.map((question, index) => {
                return {
                  ...question,
                  answer: this.responses?.[index].answer,
                  accuracy: this.responses?.[index].accuracy
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['alerts', 'activity', 'counters', 'responses', ...properties]
              });
              this.#objectives = properties;
            }
          }
          exports.ParticipantMultipleChoiceActivity = ParticipantMultipleChoiceActivity;
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./dashboard/participants/activities/spoken
      **********************************************************/

      ims.set('./dashboard/participants/activities/spoken', {
        hash: 1641659011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantSpokenActivity = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class ParticipantSpokenActivity extends _item.Item {
            get icons() {
              if (this.assessment) {
                return Object.keys(this.assessment).map(key => this.assessment[key]);
              }
              return [];
            }
            get totalPoints() {
              return this.assessment?.reduce((acc, objective) => acc + this.assessment[objective].points, 0);
            }
            get assessment() {
              return this.attempts?.[0]?.assessment;
            }
            get transcription() {
              return this.attempts?.[0]?.transcription;
            }
            get objectives() {
              if (!this.assessment) return [];
              const objectivesKeys = Object.keys(this.assessment);
              return objectivesKeys.map(key => {
                return {
                  objective: key,
                  ...this.assessment[key]
                };
              });
            }
            constructor({
              properties = [],
              ...data
            }) {
              super({
                ...data,
                entity: 'participant-activity',
                properties: ['activity', 'attempts']
              });
            }
          }
          exports.ParticipantSpokenActivity = ParticipantSpokenActivity;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./dashboard/participants/index
      **********************************************/

      ims.set('./dashboard/participants/index', {
        hash: 3470754433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participants = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          class Participants extends _collection.Collection {
            #parent;
            get parent() {
              return this.#parent;
            }
            get dashboard() {
              return this.#parent;
            }
            constructor({
              parent
            }) {
              super({
                entity: 'DashboardParticipants',
                item: _item.Participant
              });
              this.#parent = parent;
            }
            set(data) {
              const sort = (a, b) => {
                return a.user.name?.localeCompare(b.user.name);
              };
              if (Array.isArray(data)) {
                const items = data.sort((a, b) => a.name?.localeCompare(b.name));
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              } else {
                const ids = Object.keys(data);
                const items = ids.map(id => ({
                  id,
                  ...data[id]
                })).sort(sort);
                super.setItems(items);
                //@ts-ignore
                return super.set(items);
              }
            }
          }
          exports.Participants = Participants;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/item
      *********************************************/

      ims.set('./dashboard/participants/item', {
        hash: 3841754010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Participant = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _activities = require("./activities");
          var _participant = require("../providers/participant");
          var _credits = require("../../credits");
          var _user = require("./user");
          class Participant extends _item.Item {
            #activitiesData;
            get assignmentId() {
              return this.#parent.dashboard.id;
            }
            #parent;
            get dashboard() {
              return this.#parent?.dashboard;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                provider: _participant.ParticipantProvider,
                properties: ['id', {
                  name: 'user',
                  value: _user.UserData
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              // console.log(-1, this?.dashboard);
              this.#parent = parent;
              this.#activities = new _activities.ParticipantActivities(this);
              this.setActivities(args.activities);
            }
            setActivities(elements) {
              if (Array.isArray(elements.order)) {
                const activitiesData = elements.order.filter(id => !!elements.items[id]?.data);
                const activities = activitiesData.map(id => {
                  const item = {
                    ...elements.items[id]
                  };
                  const {
                    data
                  } = item;
                  delete item.data;
                  return {
                    ...item,
                    ...data
                  };
                });
                this.#activities.set(activities);
              } else {
                const ids = Object.keys(elements);
                const activities = ids.map(id => {
                  const data = elements[id]?.data ?? elements[id];
                  return {
                    id,
                    ...data
                  };
                });
                this.#activities.set(activities);
              }
            }
            set(data) {
              this.setActivities(data.activities);
              return super.set({
                ...data
              });
            }
            async load() {
              // console.log(1, 'loading', this.user.id);
              const data = await super.load({
                userId: this.user.id ?? this.user.uid
              });
              super.ready = true;
              return data;
            }
            enableAI = async () => {
              const data = await this.provider.enableAI({
                userId: this.user.id
              });
              this.credits.set(data.credits);
              this.trigger('credits.changed');
              this.trigger('change');
            };
          }
          exports.Participant = Participant;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./dashboard/participants/user
      *********************************************/

      ims.set('./dashboard/participants/user', {
        hash: 3284649687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class UserData extends _item.Item {
            constructor({
              parent,
              ...args
            }) {
              super({
                ...args,
                entity: 'TrackingDashboard',
                properties: ['photoUrl', 'name', 'id']
              });
            }
          }
          exports.UserData = UserData;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./dashboard/providers/dashboard
      ***********************************************/

      ims.set('./dashboard/providers/dashboard', {
        hash: 2563963793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            async load() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/assignments/${this.#parent.id}/dashboard`);
              if (!status) {
                throw new Error('error loading dashboard');
              }
              return data;
            }
            async archive() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
            async restore() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const response = await this.#api.post(`/assignments/${this.#parent.id}/restore`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
          }
          exports.DashboardProvider = DashboardProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./dashboard/providers/participant
      *************************************************/

      ims.set('./dashboard/providers/participant', {
        hash: 2559019558,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${this.#parent.assignmentId}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            enableAI = async props => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              ///assignments/{id}/tracking/{trackingId}/coins/consume
              const {
                data,
                status
              } = await this.#api.post(`/assignments/${this.#parent.assignmentId}/ai/enable`, props);
              if (!status) {
                console.log(data);
                throw new Error('error enabling AI');
              }
              return data;
            };
          }
          exports.ParticipantProvider = ParticipantProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 385040768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor({
              texts,
              code
            }) {
              super(texts); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 891866284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _collection = require("./activities/collection");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _credits = require("./credits");
          var _provider = require("./provider");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class Tracking extends _item.Item {
            #api;
            #modelId;
            modelType = 'tracking';
            get modelId() {
              return this.#modelId;
            }
            get assignmentId() {
              return this.#modelId;
            }
            #order;
            get order() {
              return this.#order;
            }
            static #instances = new Map();
            constructor({
              id,
              chat,
              testing
            }) {
              super({
                id,
                entity: 'Tracking',
                provider: _provider.TrackingProvider,
                properties: ['id', {
                  name: 'module',
                  value: _learningModules.ModuleListItem
                }, 'status', 'user', 'community', 'access', 'accessed', 'assignment', 'realtime', {
                  name: 'classroom',
                  value: _classrooms.Classroom
                }, {
                  name: 'activities',
                  value: _collection.Activities,
                  properties: {
                    loadChat: true
                  }
                }, {
                  name: 'credits',
                  value: _credits.Credits
                }]
              });
              //@ts-ignore;
              this.reactiveProps(['loadChat', 'testing']);
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.loadChat = !!chat;
              this.testing = testing;
              this.#modelId = id;
            }
            async loadTesting({
              id,
              activityId
            }) {
              return this.provider.getActivityTesting(id, activityId);
            }
            async load(specs = {}) {
              if (!specs.id) specs.id = this.getProperty('id');
              const data = this.testing ? await this.loadTesting(specs) : await super.load(specs);
              this.classroom.set(data.assignment.classroom);
              this.getProperty('activities').items.map(item => {
                item.set({
                  credits: data.credits
                });
              });
              if (data.activities) {
                // await this.#activities.setData(data.activities);
                this.#order = data.activities.order;
              }
              this.ready = true;
              // this.#activities = data.activities;
              return data;
            }
            consumeCoins = async () => {
              const response = await this.provider.consumeCoins();
              if (!response.status) return response;
              //await this.credits.set(response.data.credits);
              await this.set(response.data);
              this.trigger('credits.change', 'add');
              return response;
            };
            async accessToAssignment() {
              const specs = {
                id: this.#modelId
              };
              const data = await this.provider.access(specs);
              this.set(data);
            }
            static get({
              id,
              userId,
              chat,
              testing = false
            }) {
              const trackingId = `${id}.${userId}`;
              if (this.#instances.has(trackingId)) {
                return this.#instances.get(trackingId);
              }
              const instance = new Tracking({
                id,
                chat,
                testing
              });
              this.#instances.set(trackingId, instance);
              return instance;
            }
            async setCredits(data) {
              await this.credits.set(data);
              this.trigger('credits.change');
            }
            async requestClassroomAccess() {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/classrooms/${this.classroom.id}/request`, {});
              if (!response.status && response.error?.code === 38) {
                console.error(response.error);
                return response;
              }
              if (response.data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.modelId
                });
              } else {
                await this.set({
                  access: response.data.status
                });
              }
              return response;
            }
          }
          exports.Tracking = Tracking;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 3684142348,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          class TrackingProvider {
            #api;
            #parent;
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            load = async specs => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${specs.id}/tracking`, specs);
              const {
                status,
                data,
                error
              } = response;
              if (error) {
                throw new _error.CustomError(error);
              }
              if (!status) {
                throw new Error('error loading class');
              }
              if (specs?.progress) await this.#parent.processLoad(data);
              return data;
            };
            async access(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
            consumeCoins = async () => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            };
            getActivityTesting = async (draftId, activityId) => {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const {
                status,
                data
              } = await this.#api.get(`/modules/drafts/${draftId}/activities/${activityId}/testing`);
              return data;
            };
          }
          exports.TrackingProvider = TrackingProvider;
        }
      });

      /********************************
      INTERNAL MODULE: ./types/activity
      ********************************/

      ims.set('./types/activity', {
        hash: 3025505518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var ActivityTypeEnum;
          (function (ActivityTypeEnum) {
            ActivityTypeEnum["ContentTheory"] = "content-theory";
            ActivityTypeEnum["CharacterTalk"] = "character-talk";
            ActivityTypeEnum["Debate"] = "debate";
            ActivityTypeEnum["MultipleChoice"] = "multiple-choice";
            ActivityTypeEnum["Spoken"] = "spoken";
          })(ActivityTypeEnum || (ActivityTypeEnum = {}));
        }
      });

      /*********************************
      INTERNAL MODULE: ./types/dashboard
      *********************************/

      ims.set('./types/dashboard', {
        hash: 2151938038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityStatus = void 0;
          /**
           * Represents the possible statuses of an activity.
           */
          var ActivityStatus;
          (function (ActivityStatus) {
            ActivityStatus["PENDING"] = "pending";
            ActivityStatus["IN_PROGRESS"] = "in-progress";
            ActivityStatus["COMPLETED"] = "completed";
            ActivityStatus["OUTSTANDING"] = "outstanding";
          })(ActivityStatus || (exports.ActivityStatus = ActivityStatus = {}));
        }
      });

      /********************************
      INTERNAL MODULE: ./types/response
      ********************************/

      ims.set('./types/response', {
        hash: 1501783281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./types/tracking
      ********************************/

      ims.set('./types/tracking', {
        hash: 3168921732,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/index",
        "from": "Activity",
        "name": "Activity"
      }, {
        "im": "./assignments/collection",
        "from": "Assignments",
        "name": "Assignments"
      }, {
        "im": "./assignments/item",
        "from": "Assignment",
        "name": "Assignment"
      }, {
        "im": "./credits",
        "from": "Credits",
        "name": "Credits"
      }, {
        "im": "./dashboard/index",
        "from": "TrackingDashboard",
        "name": "TrackingDashboard"
      }, {
        "im": "./dashboard/providers/participant",
        "from": "ParticipantProvider",
        "name": "ParticipantProvider"
      }, {
        "im": "./index",
        "from": "Tracking",
        "name": "Tracking"
      }, {
        "im": "./types/activity",
        "from": "IActivityListItem",
        "name": "IActivityListItem"
      }, {
        "im": "./types/activity",
        "from": "IActivityBase",
        "name": "IActivityBase"
      }, {
        "im": "./types/dashboard",
        "from": "TrackingStatusType",
        "name": "TrackingStatusType"
      }, {
        "im": "./types/dashboard",
        "from": "IActivityTrackingBase",
        "name": "IActivityTrackingBase"
      }, {
        "im": "./types/dashboard",
        "from": "IDashboard",
        "name": "IDashboard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Activity') && _export("Activity", Activity = require ? require('./activities/index').Activity : value);
        (require || prop === 'Assignments') && _export("Assignments", Assignments = require ? require('./assignments/collection').Assignments : value);
        (require || prop === 'Assignment') && _export("Assignment", Assignment = require ? require('./assignments/item').Assignment : value);
        (require || prop === 'Credits') && _export("Credits", Credits = require ? require('./credits').Credits : value);
        (require || prop === 'TrackingDashboard') && _export("TrackingDashboard", TrackingDashboard = require ? require('./dashboard/index').TrackingDashboard : value);
        (require || prop === 'ParticipantProvider') && _export("ParticipantProvider", ParticipantProvider = require ? require('./dashboard/providers/participant').ParticipantProvider : value);
        (require || prop === 'Tracking') && _export("Tracking", Tracking = require ? require('./index').Tracking : value);
        (require || prop === 'IActivityListItem') && _export("IActivityListItem", IActivityListItem = require ? require('./types/activity').IActivityListItem : value);
        (require || prop === 'IActivityBase') && _export("IActivityBase", IActivityBase = require ? require('./types/activity').IActivityBase : value);
        (require || prop === 'TrackingStatusType') && _export("TrackingStatusType", TrackingStatusType = require ? require('./types/dashboard').TrackingStatusType : value);
        (require || prop === 'IActivityTrackingBase') && _export("IActivityTrackingBase", IActivityTrackingBase = require ? require('./types/dashboard').IActivityTrackingBase : value);
        (require || prop === 'IDashboard') && _export("IDashboard", IDashboard = require ? require('./types/dashboard').IDashboard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9zdGFydHVwIiwiX3Nlc3Npb24iLCJfdXBsb2FkZXIiLCJBY3Rpdml0eUNvbGxlY3Rpb25Qcm92aWRlciIsImFwaSIsInBhcmVudCIsImNvbnN0cnVjdG9yIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInBhcmFtcyIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImxvYWRUZXN0aW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiZHJhZnRJZCIsImFjdGl2aXR5SWQiLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJEYXNoYm9hcmRBY3Rpdml0aWVzIiwiRGFzaGJvYXJkQWN0aXZpdHkiLCJkYXNoYm9hcmQiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwYXJ0aWNpcGFudCIsImFjdGl2aXRpZXMiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwiY3JlYXRvciIsInRvdGFsUGFydGljaXBhbnRzIiwiUGFydGljaXBhbnRzIiwiRGFzaGJvYXJkUHJvdmlkZXIiLCJhcmNoaXZlIiwiYXJjaGl2ZWQiLCJyZXN0b3JlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsIk1hcCIsImNvbnNvbGUiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJ0eXBlcyIsIlBhcnRpY2lwYW50U3Bva2VuQWN0aXZpdHkiLCJkZXRhdWx0IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiY3VycmVudHMiLCJ3YXJuIiwidGl0bGUiLCJxdWVzdGlvbnMiLCJpbmRleCIsInJlc3BvbnNlcyIsImF0dGVtcHRzIiwidHJhbnNjcmlwdGlvbiIsIm9iamVjdGl2ZXNLZXlzIiwia2V5Iiwib2JqZWN0aXZlIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImFuc3dlciIsImFjY3VyYWN5IiwiaWNvbnMiLCJ0b3RhbFBvaW50cyIsInJlZHVjZSIsImFjYyIsInBvaW50cyIsIlBhcnRpY2lwYW50Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIkFycmF5IiwiaXNBcnJheSIsImlkcyIsIl9wYXJ0aWNpcGFudCIsIl91c2VyIiwiYWN0aXZpdGllc0RhdGEiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVXNlckRhdGEiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJ1c2VySWQiLCJ1aWQiLCJyZWFkeSIsImVuYWJsZUFJIiwidGV4dCIsImxvZyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJ0ZXh0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfY2xhc3Nyb29tcyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiVHJhY2tpbmdQcm92aWRlciIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwicmVhY3RpdmVQcm9wcyIsImxvYWRUZXN0aW5nIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwiY2xhc3Nyb29tIiwiYXNzaWdubWVudCIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiX2Vycm9yIiwiYWNjZXNzZWQiLCJBY3Rpdml0eVR5cGVFbnVtIiwiQWN0aXZpdHlTdGF0dXMiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY3JlZGl0cy50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pbmRleC50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvdXNlci50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL2Rhc2hib2FyZC50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL3BhcnRpY2lwYW50LnRzIiwiL2Vycm9yLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzL2FjdGl2aXR5LnRzIiwiL3R5cGVzL2Rhc2hib2FyZC50cyIsIi9yZXNwb25zZS50cyIsIi90cmFja2luZy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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