System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/http-suite@0.1.0/api", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/reactive@2.0.5/entities/collection", "@aimpact/chat-sdk@1.5.4/core", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms"], function (_export, _context) {
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
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_1 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactChatSdk154Session) {
      dependency_2 = _aimpactChatSdk154Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_3 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_5 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_6 = _beyondJsReactive205EntitiesCollection;
    }, function (_aimpactChatSdk154Core) {
      dependency_7 = _aimpactChatSdk154Core;
    }, function (_beyondJsReactive205Model) {
      dependency_8 = _beyondJsReactive205Model;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_9 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_10 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-sdk/startup', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@aimpact/media-manager/uploader', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/ailearn-sdk/config', dependency_9], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11]]);
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/
      ims.set('./activities/collection-provider', {
        hash: 3089474622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          var _api = require("@beyond-js/http-suite/api");
          class ActivityCollectionProvider {
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 2059445287,
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
        hash: 2933913951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
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
              return data;
            };
            loadTestingActivity = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const props = Object.getOwnPropertyNames(specs);
              const form = new FormData();
              props.forEach(prop => {
                form.append(prop, specs[prop]);
              });
              const xhr = new _uploader.XHRLoader();
              xhr.bearer(await _session.sessionWrapper.user.token);
              const response = await xhr.upload(form, `${_startup.sdkConfig.apis.ailearn}/activities/spoken/completion`);
              const json = await response.json();
              if (!json.status) {
                throw new Error('error publishing assessment');
              }
              return json.data;
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
        hash: 3196296927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
              this.#parent = parent;
            }
            async load() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${this.#parent.id}/archive`, {});
              if (!response.status) {
                throw new Error(response.error.text);
              }
              return response.data;
            }
            async restore() {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 2354565700,
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 729068713,
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
        hash: 3707881259,
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/assignments/${specs.id}/access`, specs);
              if (!response.status) {
                throw new Error(`Error accessing assignment: ${response.error}`);
              }
              return response.data;
            }
            consumeCoins = async () => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              return this.#api.post(`/assignments/${this.#parent.assignmentId}/coins/consume`, {});
            };
            getActivityTesting = async (draftId, activityId) => {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc3RhcnR1cCIsInJlcXVpcmUiLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIl9hcGkiLCJBY3Rpdml0eUNvbGxlY3Rpb25Qcm92aWRlciIsImFwaSIsInBhcmVudCIsImNvbnN0cnVjdG9yIiwiQXBpIiwic2RrQ29uZmlnIiwiYXBpcyIsImFpbGVhcm4iLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJhc3NpZ25tZW50SWQiLCJpZCIsIkVycm9yIiwibGlzdCIsInB1Ymxpc2giLCJ0eXBlIiwiYXNzZXNzbWVudCIsInBhcmFtcyIsInNwb2tlbiIsImVycm9yIiwicG9zdCIsInByb3BzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImZvcm0iLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wIiwiYXBwZW5kIiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJ1cGxvYWQiLCJqc29uIiwidHJpZ2dlckV2ZW50IiwiY29uc3VtZUNvaW5zIiwiZXhwb3J0cyIsIl9jb2xsZWN0aW9uIiwiXyIsIl9wcm92aWRlciIsIkFjdGl2aXRpZXMiLCJDb2xsZWN0aW9uIiwidHJhY2tpbmciLCJsb2FkQ2hhdCIsIm9yZGVyIiwiZW50aXR5IiwiaXRlbSIsIkFjdGl2aXR5IiwicHJvdmlkZXIiLCJBY3Rpdml0eVByb3ZpZGVyIiwic2V0Iiwia2V5cyIsImxlbmd0aCIsIml0ZW1zIiwidmFsdWVzIiwibW9kdWxlIiwiZ2V0UHJvcGVydGllcyIsIm1hcCIsInNldEl0ZW1zIiwic2V0VHJhY2tpbmciLCJwcm9jZXNzTWF0ZXJpYWxzIiwibG9hZEFjdGl2aXR5IiwiaGFzIiwiaW5zdGFuY2UiLCJtb2RlbElkIiwidGVzdGluZyIsInRyaWdnZXIiLCJfY29yZSIsIl9pdGVtIiwiX2NyZWRpdHMiLCJJdGVtIiwiZmVlZGJhY2siLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsImFuYWx5c2lzIiwib2JqZWN0aXZlcyIsInJlc291cmNlcyIsImNoYXRNb2RlbCIsImdldE1hdGVyaWFscyIsIm1hdGVyaWFscyIsImdldFNwZWNzIiwicHJvcGVydGllcyIsIm5hbWUiLCJ2YWx1ZSIsIkNyZWRpdHMiLCJzdGFydHVwIiwib24iLCJjcmVkaXRzIiwiZ2V0UHJvcGVydHkiLCJjaGF0IiwiQ2hhdCIsImxhbmd1YWdlIiwibG9hZEFsbCIsImxvYWRUZXN0aW5nQWN0aXZpdHkiLCJhY3Rpdml0eSIsInByb2Nlc3MiLCIjcHJvY2VzcyIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGlvbiIsImUiLCJwdWJsaXNoU3Bva2VuIiwiZHJhZnRJZCIsImFjdGl2aXR5SWQiLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwiQXNzaWdubWVudHMiLCJBc3NpZ25tZW50IiwiYXJncyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJEYXNoYm9hcmRBY3Rpdml0aWVzIiwiRGFzaGJvYXJkQWN0aXZpdHkiLCJkYXNoYm9hcmQiLCJwYXJ0aWNpcGFudHMiLCJmaWx0ZXIiLCJwYXJ0aWNpcGFudCIsImFjdGl2aXRpZXMiLCJfYWN0aXZpdGllcyIsIl9wYXJ0aWNpcGFudHMiLCJfZGFzaGJvYXJkIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJpc1VzZXJDcmVhdG9yIiwiY3JlYXRvciIsInRvdGFsUGFydGljaXBhbnRzIiwiUGFydGljaXBhbnRzIiwiRGFzaGJvYXJkUHJvdmlkZXIiLCJhcmNoaXZlIiwiYXJjaGl2ZWQiLCJyZXN0b3JlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIlBhcnRpY2lwYW50QWN0aXZpdGllcyIsIk1hcCIsImNvbnNvbGUiLCJ0cmFjZSIsInNldERhdGEiLCJQYXJ0aWNpcGFudEFjdGl2aXR5IiwiY2hlY2siLCJ0eXBlcyIsIlBhcnRpY2lwYW50U3Bva2VuQWN0aXZpdHkiLCJkZXRhdWx0IiwiUGFydGljaXBhbnRNdWx0aXBsZUNob2ljZUFjdGl2aXR5IiwiY3VycmVudHMiLCJ3YXJuIiwidGl0bGUiLCJxdWVzdGlvbnMiLCJpbmRleCIsInJlc3BvbnNlcyIsImF0dGVtcHRzIiwidHJhbnNjcmlwdGlvbiIsIm9iamVjdGl2ZXNLZXlzIiwia2V5Iiwib2JqZWN0aXZlIiwicGFydGljaXBhdGlvbkRhdGEiLCJxdWVzdGlvbiIsImFuc3dlciIsImFjY3VyYWN5IiwiaWNvbnMiLCJ0b3RhbFBvaW50cyIsInJlZHVjZSIsImFjYyIsInBvaW50cyIsIlBhcnRpY2lwYW50Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIkFycmF5IiwiaXNBcnJheSIsImlkcyIsIl9wYXJ0aWNpcGFudCIsIl91c2VyIiwiYWN0aXZpdGllc0RhdGEiLCJQYXJ0aWNpcGFudFByb3ZpZGVyIiwiVXNlckRhdGEiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJ1c2VySWQiLCJ1aWQiLCJyZWFkeSIsImVuYWJsZUFJIiwidGV4dCIsImxvZyIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJ0ZXh0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfY2xhc3Nyb29tcyIsIlRyYWNraW5nIiwibW9kZWxUeXBlIiwiaW5zdGFuY2VzIiwiVHJhY2tpbmdQcm92aWRlciIsIk1vZHVsZUxpc3RJdGVtIiwiQ2xhc3Nyb29tIiwicmVhY3RpdmVQcm9wcyIsImxvYWRUZXN0aW5nIiwiZ2V0QWN0aXZpdHlUZXN0aW5nIiwiY2xhc3Nyb29tIiwiYXNzaWdubWVudCIsImFjY2Vzc1RvQXNzaWdubWVudCIsImFjY2VzcyIsInRyYWNraW5nSWQiLCJzZXRDcmVkaXRzIiwicmVxdWVzdENsYXNzcm9vbUFjY2VzcyIsInRvTG93ZXJDYXNlIiwiX2Vycm9yIiwiYWNjZXNzZWQiLCJBY3Rpdml0eVR5cGVFbnVtIiwiQWN0aXZpdHlTdGF0dXMiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9hY3Rpdml0aWVzL2NvbGxlY3Rpb24tcHJvdmlkZXIudHMiLCIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLnRzIiwiL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvYWN0aXZpdGllcy9wcm92aWRlci50cyIsIi9hc3NpZ25tZW50cy9jb2xsZWN0aW9uLnRzIiwiL2Fzc2lnbm1lbnRzL2l0ZW0udHMiLCIvY3JlZGl0cy50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pbmRleC50cyIsIi9kYXNoYm9hcmQvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9pbmRleC50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2l0ZW0udHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2FjdGl2aXRpZXMvc3Bva2VuLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvdXNlci50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL2Rhc2hib2FyZC50cyIsIi9kYXNoYm9hcmQvcHJvdmlkZXJzL3BhcnRpY2lwYW50LnRzIiwiL2Vycm9yLnRzIiwiL2luZGV4LnRzIiwiL3Byb3ZpZGVyLnRzIiwiL3R5cGVzL2FjdGl2aXR5LnRzIiwiL3R5cGVzL2Rhc2hib2FyZC50cyIsIi9yZXNwb25zZS50cyIsIi90cmFja2luZy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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