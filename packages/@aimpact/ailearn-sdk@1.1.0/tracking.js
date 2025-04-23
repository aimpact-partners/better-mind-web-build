System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.1.0/config", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/media-manager@1.0.0/uploader", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/reactive@2.0.4/entities/collection", "@aimpact/chat-sdk@1.4.4/core", "@aimpact/ailearn-sdk@1.1.0/entities/learning-modules", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Activity, Assignments, Assignment, Credits, TrackingDashboard, ParticipantProvider, Tracking, IActivityListItem, IActivityBase, TrackingStatusType, IActivityTrackingBase, IDashboard, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk110Config) {
      dependency_2 = _aimpactAilearnSdk110Config;
    }, function (_aimpactChatSdk144Session) {
      dependency_3 = _aimpactChatSdk144Session;
    }, function (_aimpactMediaManager100Uploader) {
      dependency_4 = _aimpactMediaManager100Uploader;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_5 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_6 = _beyondJsReactive204EntitiesCollection;
    }, function (_aimpactChatSdk144Core) {
      dependency_7 = _aimpactChatSdk144Core;
    }, function (_aimpactAilearnSdk110EntitiesLearningModules) {
      dependency_8 = _aimpactAilearnSdk110EntitiesLearningModules;
    }, function (_beyondJsReactive204Model) {
      dependency_9 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_10 = _aimpactAilearnSdk110EntitiesClassrooms;
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
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/tracking"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/http-suite/api', dependency_1], ['@aimpact/ailearn-sdk/config', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/media-manager/uploader', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@beyond-js/reactive/entities/collection', dependency_6], ['@aimpact/chat-sdk/core', dependency_7], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_10]]);
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/collection-provider
      ************************************************/
      ims.set('./activities/collection-provider', {
        hash: 3857548212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _uploader = require("@aimpact/media-manager/uploader");
          class ActivityCollectionProvider {
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
              const response = await xhr.upload(form, `${_config.default.params.apis[_config.default.params.project].ailearn}/activities/spoken/completion`);
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
        hash: 1985366736,
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
              params.assignmentId = params.assignmentId ?? this.#assignmentId;
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
        hash: 3414194117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
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
              const response = await xhr.upload(form, `${_config.default.params.apis[_config.default.params.project].ailearn}/activities/spoken/completion`);
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
        hash: 3061938277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/ailearn-sdk/config");
          //@ts-ignore

          class DashboardProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 3292571397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipantProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          /*bundle*/ /**
                      * Represents the Tracking of an assignment.
                      *
                      *
                      */
          class ParticipantProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 3262316440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tracking = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
        hash: 1928810318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TrackingProvider = void 0;
          var _config = require("@aimpact/ailearn-sdk/config");
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
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYXBpIiwicmVxdWlyZSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl91cGxvYWRlciIsIkFjdGl2aXR5Q29sbGVjdGlvblByb3ZpZGVyIiwiYXBpIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsInByb2plY3QiLCJhaWxlYXJuIiwibG9hZCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJzdGF0dXMiLCJkYXRhIiwiZ2V0IiwiYXNzaWdubWVudElkIiwiaWQiLCJFcnJvciIsImxpc3QiLCJwdWJsaXNoIiwidHlwZSIsImFzc2Vzc21lbnQiLCJzcG9rZW4iLCJlcnJvciIsInBvc3QiLCJwcm9wcyIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJmb3JtIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcCIsImFwcGVuZCIsInhociIsIlhIUkxvYWRlciIsInJlc3BvbnNlIiwidXBsb2FkIiwianNvbiIsInRyaWdnZXJFdmVudCIsImNvbnN1bWVDb2lucyIsImV4cG9ydHMiLCJfY29sbGVjdGlvbiIsIl8iLCJfcHJvdmlkZXIiLCJBY3Rpdml0aWVzIiwiQ29sbGVjdGlvbiIsInRyYWNraW5nIiwibG9hZENoYXQiLCJvcmRlciIsImVudGl0eSIsIml0ZW0iLCJBY3Rpdml0eSIsInByb3ZpZGVyIiwiQWN0aXZpdHlQcm92aWRlciIsInNldCIsImtleXMiLCJsZW5ndGgiLCJpdGVtcyIsInZhbHVlcyIsIm1vZHVsZSIsImdldFByb3BlcnRpZXMiLCJtYXAiLCJzZXRJdGVtcyIsInNldFRyYWNraW5nIiwicHJvY2Vzc01hdGVyaWFscyIsImxvYWRBY3Rpdml0eSIsImhhcyIsImluc3RhbmNlIiwibW9kZWxJZCIsInRlc3RpbmciLCJ0cmlnZ2VyIiwiX2NvcmUiLCJfaXRlbSIsIl9jcmVkaXRzIiwiSXRlbSIsImZlZWRiYWNrIiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJhbmFseXNpcyIsIm9iamVjdGl2ZXMiLCJyZXNvdXJjZXMiLCJjaGF0TW9kZWwiLCJnZXRNYXRlcmlhbHMiLCJtYXRlcmlhbHMiLCJnZXRTcGVjcyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDcmVkaXRzIiwic3RhcnR1cCIsIm9uIiwiY3JlZGl0cyIsImdldFByb3BlcnR5IiwiY2hhdCIsIkNoYXQiLCJsYW5ndWFnZSIsImxvYWRBbGwiLCJsb2FkVGVzdGluZ0FjdGl2aXR5IiwiYWN0aXZpdHkiLCJwcm9jZXNzIiwiI3Byb2Nlc3MiLCJKU09OIiwicGFyc2UiLCJzZWxlY3Rpb24iLCJlIiwicHVibGlzaFNwb2tlbiIsImFjdGl2aXR5SWQiLCJwcm9ncmVzcyIsInByb2Nlc3NMb2FkIiwiZHJhZnRJZCIsIkFzc2lnbm1lbnRzIiwiQXNzaWdubWVudCIsImFyZ3MiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiRGFzaGJvYXJkQWN0aXZpdGllcyIsIkRhc2hib2FyZEFjdGl2aXR5IiwiZGFzaGJvYXJkIiwicGFydGljaXBhbnRzIiwiZmlsdGVyIiwicGFydGljaXBhbnQiLCJhY3Rpdml0aWVzIiwiX2FjdGl2aXRpZXMiLCJfcGFydGljaXBhbnRzIiwiX2Rhc2hib2FyZCIsIlRyYWNraW5nRGFzaGJvYXJkIiwiaXNVc2VyQ3JlYXRvciIsImNyZWF0b3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIlBhcnRpY2lwYW50cyIsIkRhc2hib2FyZFByb3ZpZGVyIiwiYXJjaGl2ZSIsImFyY2hpdmVkIiwicmVzdG9yZSIsIl9tdWx0aXBsZUNob2ljZSIsIl9zcG9rZW4iLCJQYXJ0aWNpcGFudEFjdGl2aXRpZXMiLCJNYXAiLCJjb25zb2xlIiwidHJhY2UiLCJzZXREYXRhIiwiUGFydGljaXBhbnRBY3Rpdml0eSIsImNoZWNrIiwidHlwZXMiLCJQYXJ0aWNpcGFudFNwb2tlbkFjdGl2aXR5IiwiZGV0YXVsdCIsIlBhcnRpY2lwYW50TXVsdGlwbGVDaG9pY2VBY3Rpdml0eSIsImN1cnJlbnRzIiwid2FybiIsInRpdGxlIiwicXVlc3Rpb25zIiwiaW5kZXgiLCJyZXNwb25zZXMiLCJhdHRlbXB0cyIsInRyYW5zY3JpcHRpb24iLCJvYmplY3RpdmVzS2V5cyIsImtleSIsIm9iamVjdGl2ZSIsInBhcnRpY2lwYXRpb25EYXRhIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImljb25zIiwidG90YWxQb2ludHMiLCJyZWR1Y2UiLCJhY2MiLCJwb2ludHMiLCJQYXJ0aWNpcGFudCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJBcnJheSIsImlzQXJyYXkiLCJpZHMiLCJfcGFydGljaXBhbnQiLCJfdXNlciIsImFjdGl2aXRpZXNEYXRhIiwiUGFydGljaXBhbnRQcm92aWRlciIsIlVzZXJEYXRhIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlcklkIiwidWlkIiwicmVhZHkiLCJlbmFibGVBSSIsInRleHQiLCJsb2ciLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwidGV4dHMiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX2NsYXNzcm9vbXMiLCJUcmFja2luZyIsIm1vZGVsVHlwZSIsImluc3RhbmNlcyIsIlRyYWNraW5nUHJvdmlkZXIiLCJNb2R1bGVMaXN0SXRlbSIsIkNsYXNzcm9vbSIsInJlYWN0aXZlUHJvcHMiLCJsb2FkVGVzdGluZyIsImdldEFjdGl2aXR5VGVzdGluZyIsImNsYXNzcm9vbSIsImFzc2lnbm1lbnQiLCJhY2Nlc3NUb0Fzc2lnbm1lbnQiLCJhY2Nlc3MiLCJ0cmFja2luZ0lkIiwic2V0Q3JlZGl0cyIsInJlcXVlc3RDbGFzc3Jvb21BY2Nlc3MiLCJ0b0xvd2VyQ2FzZSIsIl9lcnJvciIsImFjY2Vzc2VkIiwiQWN0aXZpdHlUeXBlRW51bSIsIkFjdGl2aXR5U3RhdHVzIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYWN0aXZpdGllcy9jb2xsZWN0aW9uLXByb3ZpZGVyLnRzIiwiL2FjdGl2aXRpZXMvY29sbGVjdGlvbi50cyIsIi9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2FjdGl2aXRpZXMvcHJvdmlkZXIudHMiLCIvYXNzaWdubWVudHMvY29sbGVjdGlvbi50cyIsIi9hc3NpZ25tZW50cy9pdGVtLnRzIiwiL2NyZWRpdHMudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaW5kZXgudHMiLCIvZGFzaGJvYXJkL2FjdGl2aXRpZXMvaXRlbS50cyIsIi9kYXNoYm9hcmQvaW5kZXgudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9pdGVtLnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UudHMiLCIvZGFzaGJvYXJkL3BhcnRpY2lwYW50cy9hY3Rpdml0aWVzL3Nwb2tlbi50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL2luZGV4LnRzIiwiL2Rhc2hib2FyZC9wYXJ0aWNpcGFudHMvaXRlbS50cyIsIi9kYXNoYm9hcmQvcGFydGljaXBhbnRzL3VzZXIudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9kYXNoYm9hcmQudHMiLCIvZGFzaGJvYXJkL3Byb3ZpZGVycy9wYXJ0aWNpcGFudC50cyIsIi9lcnJvci50cyIsIi9pbmRleC50cyIsIi9wcm92aWRlci50cyIsIi90eXBlcy9hY3Rpdml0eS50cyIsIi90eXBlcy9kYXNoYm9hcmQudHMiLCIvcmVzcG9uc2UudHMiLCIvdHJhY2tpbmcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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