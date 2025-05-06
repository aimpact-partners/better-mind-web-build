System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.4.1/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.4.1/model/wrapper", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "pragmate-ui@1.0.0-beta.7/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.4.1/dashboard/wall/widget.widget", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityView: void 0,
    ChatActivityParticipant: void 0,
    MultipleChoiceActivityParticipant: void 0,
    SpokenActivityParticipant: void 0,
    EmptyCard: void 0,
    GeneralView: void 0,
    ActivityIcon: void 0,
    DrawerAlert: void 0,
    DrawerAlertItem: void 0,
    IconBox: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_aimpactAilearnApp041DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp041DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive205Model) {
      dependency_7 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_13 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041Config) {
      dependency_14 = _aimpactAilearnApp041Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_17 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Image) {
      dependency_18 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_19 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_20 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_22 = _aimpactChatSdk154ChatComponentCode;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_23 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_24 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_25 = _aimpactAilearnApp041ModelWrapper;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_26 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_27 = _pragmateUi100Beta7Drawer;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_28 = _pragmateUi100Beta7Toast;
    }, function (_lodash) {
      dependency_29 = _lodash;
    }, function (_beyondJsKernel0112Routing) {
      dependency_30 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp041DashboardWallWidgetWidget) {
      dependency_31 = _aimpactAilearnApp041DashboardWallWidgetWidget;
    }, function (_pragmateUi100Beta7Form) {
      dependency_32 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['@aimpact/ailearn-app/model/wrapper', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/drawer', dependency_27], ['pragmate-ui/toast', dependency_28], ['lodash', dependency_29], ['@beyond-js/kernel/routing', dependency_30], ['@aimpact/ailearn-app/dashboard/wall/widget.widget', dependency_31], ['pragmate-ui/form', dependency_32]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/dashboard/assignments.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 239082409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              if (this.uri.vars.get('id')) {
                this.#store.load(this.uri.vars.get('id'));
              }
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 550217179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _wall = require("./wall");
          //@ts-ignore

          class StoreManager extends _model.ReactiveModel {
            isStore;
            #session;
            #assignmentId;
            #tracking;
            #currentTracking;
            #trackings = new Map();
            #model;
            #activitySelected;
            get activitySelected() {
              return this.#activitySelected;
            }
            #filter;
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            #globalTexts;
            #users = new Map();
            #wallStore;
            get session() {
              return this.#session;
            }
            get assignmentId() {
              return this.#assignmentId;
            }
            get assignment() {
              return this.#session;
            }
            get model() {
              return this.#model;
            }
            get texts() {
              return this.#texts?.value;
            }
            get participants() {
              if (!this.#filter) return this.#model.participants.items;
              const response = this.#model.participants.items.filter(item => item.user.name.toLowerCase().includes(this.#filter.toLowerCase()));
              return response;
            }
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            get users() {
              return this.#users;
            }
            get wall() {
              return this.#wallStore;
            }
            filter(filter) {
              this.#filter = filter;
              this.triggerEvent('change');
            }
            get state() {
              return {
                totalParticipants: this.model?.participants?.items?.length ?? 0,
                fetching: this.fetching,
                view: this.view
              };
            }
            constructor() {
              super({
                properties: ['view']
              });
              this.view = 'general';
              _dashboardLayout.LayoutBroker.setModel(this);
              _dashboardLayout.LayoutBroker.overlay = true;
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              globalThis.store = this;
            }
            async load(id) {
              try {
                if (!id) throw new Error('Invalid assignment ID');
                if (this.#model && this.#model.id === id) return;
                this.fetching = true;
                this.#assignmentId = id;
                this.#model = new _tracking.TrackingDashboard({
                  id
                });
                // Initialize wall store
                this.#wallStore = new _wall.WallStore(id);
                await Promise.all([this.#texts.fetch(), this.#model.load(id)]);
                this.setupLayout();
              } catch (error) {
                console.error('Error loading dashboard:', error);
                throw error;
              } finally {
                super.ready = true;
                this.fetching = false;
              }
            }
            setupLayout() {
              _dashboardLayout.LayoutBroker.set({
                refresh: this.refresh,
                backLink: `/classrooms/view/${this.#model.classroom.id}`,
                breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.#model.classroom.name, `/classrooms/view/${this.#model.classroom.id}`], [`Dashboard > ${this.#model.module.title}`]]
              });
            }
            async loadUserTracking(userId) {
              try {
                const participant = this.model.participants.map.get(userId);
                await participant.load();
                this.#currentTracking = participant;
                return this.#currentTracking;
              } catch (e) {
                console.error(e);
              }
            }
            refresh = async () => {
              try {
                this.fetching = true;
                await this.model.load();
                this.trigger('data.updated');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
            refreshDrawer = async ({
              userId,
              activity
            } = {}) => {
              try {
                const promise = new _core.PendingPromise();
                this.fetching = true;
                this.trigger('fetching.drawer');
                await this.model.load(this.#assignmentId);
                if (userId) {
                  const tracking = await this.loadUserTracking(userId);
                  await tracking.load({
                    id: this.#assignmentId,
                    userId
                  });
                }
                if (activity && activity.chatModel) {
                  activity.chatModel.loadAll({
                    id: activity.chatModel.id
                  });
                }
                globalThis.setTimeout(() => {
                  promise.resolve();
                }, 1000);
                return promise;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
                this.trigger('fetching.drawer');
              }
            };
            refreshTracking = async userId => {
              const tracking = this.#trackings.get(userId);
              tracking.load({
                id: this.#assignmentId,
                userId
              });
            };
            clear() {
              _dashboardLayout.LayoutBroker.clear();
              this.#users.clear();
              this.#trackings.clear();
              this.#currentTracking = null;
              this.#model = null;
              super.ready = false;
              this.#activitySelected = null;
              this.#filter = '';
              if (this.#wallStore) {
                this.#wallStore.clear();
                this.#wallStore = null;
              }
              this.triggerEvent('cleared');
            }
            selectActivity(activity) {
              this.#activitySelected = activity;
              this.view = activity ? 'activity' : 'general';
              this.trigger('change');
            }
            async archive() {
              this.fetching = true;
              await this.model.archive();
              this.fetching = false;
            }
            async restore() {
              this.fetching = true;
              await this.model.restore();
              this.fetching = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./store/wall
      ****************************/

      ims.set('./store/wall', {
        hash: 4037091516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallStore = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class WallStore extends _model.ReactiveModel {
            #model;
            #items;
            #id;
            #assignment;
            get model() {
              return this.#model;
            }
            get items() {
              return this.#items;
            }
            get id() {
              return this.#id;
            }
            get assignment() {
              return this.#assignment;
            }
            constructor(id) {
              super();
              this.#id = id;
              this.#model = new _core.DashboardWall();
            }
            refresh = async () => {
              try {
                this.fetching = true;
                const {
                  messages
                } = await this.model.load({
                  id: this.#id
                });
                this.#items = messages;
                this.triggerEvent('items.updated');
              } catch (error) {
                console.error('Error refreshing wall:', error);
              } finally {
                this.fetching = false;
              }
            };
            async load() {
              try {
                const {
                  messages
                } = await this.#model.load({
                  id: this.#id
                });
                this.#items = messages;
                super.ready = true;
                this.triggerEvent();
              } catch (error) {
                console.error('Error loading wall:', error);
                throw error;
              }
            }
            clear() {
              this.#model = null;
              this.#items = [];
              this.#id = null;
              this.#assignment = null;
              this.triggerEvent('cleared');
            }
          }
          exports.WallStore = WallStore;
        }
      });

      /***************************
      INTERNAL MODULE: ./views/404
      ***************************/

      ims.set('./views/404', {
        hash: 1040410774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _react = require("react");
          function NotFound({
            store,
            texts
          }) {
            if (store.model.error?.code === 403) {
              return _react.default.createElement("app-not-allowed", null);
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("app-missing-control", null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/actions
      *******************************/

      ims.set('./views/actions', {
        hash: 235465944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActions = DashboardActions;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DashboardActions({
            disabled
          }) {
            const {
              model,
              store,
              texts,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const [update, setUpdate] = _react.default.useState({});
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = async () => {
              store.wall.load();
              setShowDrawer({
                show: true,
                view: 'wall'
              });
            };
            (0, _hooks.useBinder)([model], () => {
              setUpdate({});
            }, 'archived.changed');
            const archive = async () => {
              setFetching(true);
              await store.archive();
              setFetching(false);
            };
            const restore = async () => {
              setFetching(true);
              await store.restore();
              setFetching(false);
            };
            const actionText = model.archived ? 'restore' : 'archive';
            const action = model.archived ? restore : archive;
            return _react.default.createElement("div", {
              className: "dashboard-actions flex-container flex-vertical-center gap-05"
            }, model.isUserCreator ? _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: action,
              disabled: fetching,
              fetching: fetching
            }, actionText) : null, _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              disabled: disabled,
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: onClick
            }, texts.actions.wall));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/view/empty
      *********************************************/

      ims.set('./views/activities/view/empty', {
        hash: 1827167088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../context");
          function EmptyMaterial({
            message
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            message = message ?? texts.activities.empty;
            return _react.default.createElement(_ui.EmptyCard, {
              icon: "info",
              text: message,
              className: "empty-section__container"
            });
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/view/index
      *********************************************/

      ims.set('./views/activities/view/index', {
        hash: 1562463379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _participant = require("./participant");
          var _empty = require("pragmate-ui/empty");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function ActivityView({}) {
            const {
              store,
              setView
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const [updated, setUpdated] = _react.default.useState({});
            const onClose = () => store.selectActivity(undefined);
            (0, _hooks.useBinder)([store], () => setUpdated(store.activitySelected), 'data.updated');
            if (!activity) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: `activity-header bottom-rounded bg-activity--${activity.type}`
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, activity.title, " ")), _react.default.createElement("div", {
              className: "close-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              title: "Close",
              onClick: onClose,
              className: "circle"
            }))), _react.default.createElement(_components.ConditionalContainer, {
              condition: activity.participants.length > 0,
              ternary: true,
              options: {
                true: _react.default.createElement(_list.List, {
                  className: "activity-users__list",
                  items: activity.participants,
                  control: _participant.ActivityParticipant,
                  specs: {
                    activity
                  }
                }),
                false: _react.default.createElement(_empty.Empty, {
                  text: 'No participants found'
                })
              }
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/chat
      ********************************************************/

      ims.set('./views/activities/view/participant/chat', {
        hash: 2694921453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivityParticipant = ChatActivityParticipant;
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _objectiveIcon = require("../../../components/objective-icon");
          var _objective = require("./objective");
          /*bundle*/
          function ChatActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer,
              texts
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  activity,
                  participant: item
                }
              });
              return false;
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              toggleable: !!data?.progress?.objectives,
              onToggle: onToggle,
              open: isDragging
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "activity-participant__header header--collapsible"
            }, _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement(_components.Link, {
              className: "hidden-md",
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              className: "hidden-xs",
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("h6", null, item.user.name)), _react.default.createElement("span", {
              className: "activity-participant__synthesis"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!data?.progress?.summary,
              ternary: true,
              options: {
                true: _react.default.createElement(_react.default.Fragment, null, data?.progress?.summary),
                false: _react.default.createElement(_react.default.Fragment, null, texts.activities.noSummary)
              }
            })))), _react.default.createElement(_list.List, {
              className: "unstyled-list objectives-header__states",
              items: data?.progress?.objectives,
              control: _objectiveIcon.ActivityObjectiveStatusIcon
            })), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity-participant__collapsible-content"
            }, _react.default.createElement(_list.List, {
              items: data?.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            }))));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/index
      *********************************************************/

      ims.set('./views/activities/view/participant/index', {
        hash: 3716156993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityParticipant = ActivityParticipant;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          function ActivityParticipant({
            item,
            activity,
            ...specs
          }) {
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ChatActivityParticipant, {
                  item: item
                }),
                spoken: _react.default.createElement(_spoken.SpokenActivityParticipant, {
                  item: item
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.MultipleChoiceActivityParticipant, {
                  item: item
                })
              }
            });
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/multiple-choice
      *******************************************************************/

      ims.set('./views/activities/view/participant/multiple-choice', {
        hash: 106740533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivityParticipant = MultipleChoiceActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function MultipleChoiceActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer,
              texts: {
                activities: {
                  multipleChoice: texts
                }
              }
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  tracking,
                  activitySelected: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
            const {
              correct,
              total,
              wrong
            } = participantActivity.counters;
            const cls = `dashboard-chip ${correct > total / 2 ? ' success-label' : ' error-label'} `;
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header"
            }, _react.default.createElement(_components.Link, {
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement("span", {
              className: cls
            }, participantActivity.counters.correct, " / ", participantActivity.counters.total))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/objective
      *************************************************************/

      ims.set('./views/activities/view/participant/objective', {
        hash: 1100387958,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function StudentAssignmentActivityObjective({
            item
          }) {
            if (!item) {
              return null;
            }
            const {
              name,
              analysis
            } = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name)), React.createElement("div", {
              className: `status__container status__container--${status}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
            }))), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/spoken
      **********************************************************/

      ims.set('./views/activities/view/participant/spoken', {
        hash: 1188672967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivityParticipant = SpokenActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function SpokenActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  tracking,
                  activitySelected: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
            const IconState = ({
              item: objective
            }) => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: objective.objective
              }, _react.default.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }));
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header flex-container flex-vertical-center"
            }, _react.default.createElement(_components.Link, {
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              className: "unstyled-list",
              items: participantActivity.objectives,
              control: IconState
            }))));
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/chat-tab
      ****************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/chat-tab', {
        hash: 760192626,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _context = require("../../../../context");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./empty");
          //@ts-ignore

          function StudentAssignmentActivityChatTab({
            item,
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const ref = React.useRef();
            const tActivity = tracking.activities.map.get(item.activity.id);
            const chatId = tActivity?.chatModel?.id;
            if (!tActivity.chatModel.messages.items.length) {
              return React.createElement("div", {
                className: "chat-tab",
                ref: ref
              }, React.createElement(_empty.EmptyChat, null));
            }
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, tActivity.chatModel.messages.items.slice(-2).map(item => {
              React.createElement("div", null, item.text);
            }));
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              chat: tActivity?.chatModel?.id,
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/images/chat/profile.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/empty
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/empty', {
        hash: 2871249374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../../../context");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useDrawerContext)();
            if (!store?.model) return null;
            const {
              title,
              description
            } = texts;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/index
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/index', {
        hash: 3246259798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatBody = StudentAssignmentActivityChatBody;
          var _tabs = require("pragmate-ui/tabs");
          var React = require("react");
          var _drawerAlerts = require("../../../../components/drawer-alerts");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _objectives = require("./objectives");
          //@ts-ignore

          /**
           *
           * @param paramm item: ParticipantActivity
           * @returns
           */
          function StudentAssignmentActivityChatBody(props) {
            const {
              item,
              user,
              tracking,
              activityId,
              participant
            } = props;
            const {
              texts,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const tActivity = participant.activities.get(activityId);
            const chatId = tActivity?.chatModel?.id;
            const [messages, setMessages] = React.useState(tActivity?.chatModel?.messages.items ?? []);
            React.useEffect(() => {
              if (!chatId) return;
              const triggerChange = () => {
                setMessages([...tActivity.chatModel.messages.items]);
              };
              tActivity.chatModel.on('change', triggerChange);
              return () => {
                tActivity.chatModel.off('change', triggerChange);
              };
            }, [chatId]);
            const tabs = [];
            if (item.progress?.objectives) tabs.push(React.createElement(_tabs.Tab, {
              key: "objectives"
            }, texts.activities.objectives));
            const interactions = item.interactions ? item.interactions : item.messages?.count;
            tabs.push(React.createElement(_tabs.Tab, {
              key: "summary"
            }, React.createElement("div", {
              className: "tab__label"
            }, texts.activities.chat.tab, item.messages?.count ? React.createElement("i", {
              className: "drawer__badge"
            }, interactions) : null)));
            if (item?.alerts?.length) tabs.push(React.createElement(_tabs.Tab, {
              key: "alerts",
              className: "alerts-tab"
            }, React.createElement("div", {
              className: "tab__label"
            }, texts.alerts, React.createElement("span", {
              className: "drawer__badge drawer__badge--danger"
            }, item.alerts.length))));
            const openChat = event => {
              item.loadChat();
              setShowDrawer({
                show: true,
                view: 'student-chat',
                data: {
                  tracking,
                  participant,
                  participantActivity: item,
                  chat: tActivity.chatModel
                }
              });
            };
            return React.createElement(_tabs.TabsContainer, {
              active: 0
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, item.progress?.objectives && React.createElement(_objectives.StudentAssignmentActivityObjectives, {
              item: item,
              tracking: tracking
            }), React.createElement("div", null, React.createElement("section", {
              className: "activity-data-section"
            }, React.createElement("h6", null, texts.activities.summary), React.createElement("p", null, item.synthesis), React.createElement(_components.ConditionalContainer, {
              condition: !!interactions,
              ternary: true,
              options: {
                true: React.createElement("footer", {
                  className: "mt-15 flex-container flex-end"
                }, React.createElement(_components.Button, {
                  onClick: openChat,
                  className: "chat__btn",
                  variant: "primary",
                  bordered: true
                }, texts.activities.chat.action)),
                false: null
              }
            }))), React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: item?.alerts,
              user: user
            })));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/objective
      *****************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/objective', {
        hash: 239820204,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function StudentAssignmentActivityObjective({
            item
          }) {
            const {
              name,
              analysis
            } = item;
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis)), React.createElement("div", null, React.createElement("div", {
              className: `status__container status__container--${status}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
            })))));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/objectives
      ******************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/objectives', {
        hash: 693015359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjectives = StudentAssignmentActivityObjectives;
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../../../context");
          var _objective = require("./objective");
          //@ts-ignore
          function StudentAssignmentActivityObjectives({
            item,
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            return React.createElement("div", null, React.createElement("div", {
              className: "objectives__summary"
            }, React.createElement("p", null, item.progress?.summary)), item.progress?.objectives && React.createElement("div", null, React.createElement("h4", {
              className: "mt-15"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list",
              items: item.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/index
      ********************************************************/

      ims.set('./views/assignment/drawer/activity/index', {
        hash: 3082233428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivity = StudentAssignmentActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../../context");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          /**
           *
           * @param param0 activityId is passed when the user clicks on an activity
           * @returns
           */
          function StudentAssignmentActivity({
            item: activity,
            user,
            index,
            tracking,
            activityId,
            activitySelected,
            participant
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const item = participant.activities.get(activity.id);
            const open = !activitySelected && index === 0 || activitySelected === activity.id;
            const [isDragging, setIsDragging] = React.useState(open);
            const ref = React.useRef(null);
            const onToggle = () => setIsDragging(!isDragging);
            const clsDrawer = `ds-drawer__activity-item ${isDragging ? 'is-open' : ''} ${open ? 'is-open' : ''}`;
            if (!activityId) activityId = activity.id;
            React.useEffect(() => {
              if (!open) return;
              ref.current?.classList.toggle('activity-item--opened');
              ref.current.closest('.ds-drawer__content').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
              });
              setTimeout(() => {
                ref.current?.classList.toggle('activity-item--opened');
              }, 1000);
            }, [open]);
            if (!hasParticipated) {
              return React.createElement("article", {
                className: "ds-drawer__activity-item is-disabled",
                ref: ref
              }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
                className: "activity__header"
              }, React.createElement("section", {
                className: "activity-header__container"
              }, React.createElement("picture", {
                className: `activity-type__icon activity--${activity?.type}`
              }, React.createElement(_icons.AppIcon, {
                icon: _icons.ICONS[activity.type]
              })), React.createElement("div", null, React.createElement("h5", null, activity.title), React.createElement("div", null, React.createElement("span", null, texts.activities.types[activity.type]), React.createElement("div", {
                className: "activity-status"
              }, texts.activities.status.pending))))))));
            }
            return React.createElement("article", {
              className: clsDrawer,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              data: item,
              onToggle: onToggle,
              open: isDragging
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
              className: "activity__header"
            }, React.createElement("section", {
              className: "activity-header__container"
            }, React.createElement("picture", {
              className: `activity-type__icon activity--${activity?.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, activity.title), React.createElement("span", null, texts.activities.types[activity.type]))))), React.createElement(_collapsible.CollapsibleContent, {
              className: "ds-drawer__activity-item__collapsible-content"
            }, React.createElement(_components.ConditionalContainer, {
              condition: activity.type,
              options: {
                'content-theory': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                'character-talk': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                debate: React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                'multiple-choice': React.createElement(_multipleChoice.StudentAssignmentActivityMultipleChoiceBody, {
                  item: item,
                  user: user,
                  activityId: activityId
                }),
                spoken: React.createElement(_spoken.StudentAssignmentActivitySpokenBody, {
                  item: item,
                  participant: participant,
                  tracking: tracking,
                  activityId: activityId
                })
              }
            }))));
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/answer
      *************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/answer', {
        hash: 1375693988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceQuestionOptions = StudentAssignmentActivityMultipleChoiceQuestionOptions;
          var React = require("react");
          var _context = require("../../../../context");
          function StudentAssignmentActivityMultipleChoiceQuestionOptions({
            item,
            answer,
            correctAnswer,
            index
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const selected = index === answer;
            let cls = `option-item `;
            if (index === correctAnswer) cls += `option--correct`;
            if (selected) {
              cls += `${selected && index === correctAnswer ? ` option--corrected` : `option--wrong `}`;
            }
            if (index === answer) cls += ` option--selected`;
            // if (index === correctAnswer) cls += ` option--correct`;
            return React.createElement("div", {
              className: cls
            }, item);
          }
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/index
      ************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/index', {
        hash: 2208732284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceBody = StudentAssignmentActivityMultipleChoiceBody;
          var React = require("react");
          var _context = require("../../../../context");
          var _list = require("pragmate-ui/list");
          var _questions = require("./questions");
          function StudentAssignmentActivityMultipleChoiceBody({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const activity = store.model.activities.get(item.id);
            return React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("p", null, activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement("div", {
              className: "multiple-choice__container"
            }, React.createElement("h6", null, texts.activities.multipleChoice.participation.detail, ": ", item.counters.correct, "/", item.counters.total), React.createElement(_list.List, {
              className: "multiple-choice__list questions-list",
              items: item.assessment.questions,
              control: _questions.StudentAssignmentActivityMultipleChoiceQuestions
            })));
          }
        }
      });

      /****************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/questions
      ****************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/questions', {
        hash: 2792998688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceQuestions = StudentAssignmentActivityMultipleChoiceQuestions;
          var React = require("react");
          var _context = require("../../../../context");
          var _list = require("pragmate-ui/list");
          var _answer = require("./answer");
          function StudentAssignmentActivityMultipleChoiceQuestions({
            item,
            user,
            activityId
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const specs = {
              answer: item.answer,
              correctAnswer: item.correctAnswer
            };
            return React.createElement("li", {
              className: "multiple-choice__item"
            }, React.createElement("h6", null, item.question), React.createElement(_list.List, {
              className: "multiple-choice__list options-list",
              items: item.options,
              specs: specs,
              control: _answer.StudentAssignmentActivityMultipleChoiceQuestionOptions
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/spoken
      *********************************************************/

      ims.set('./views/assignment/drawer/activity/spoken', {
        hash: 1115046477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivitySpokenBody = StudentAssignmentActivitySpokenBody;
          var React = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tabs = require("pragmate-ui/tabs");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /**
           *
           * @param param0  item: ParticipantActivity
           * @returns
           */
          function StudentAssignmentActivitySpokenBody({
            item,
            participant
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const userId = participant.user.id ?? participant.user?.uid;
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${store.model.id}/activities/${item.id}/tracking/${userId}/audio`;
            const output = item?.objectives?.map(objective => {
              return React.createElement("div", {
                className: "tab-feedback-section",
                key: `${item.id}-${objective.objective}`
              }, React.createElement("div", null, React.createElement("h6", {
                className: "flex-container flex-vertical-center gap-05"
              }, React.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }), objective.name)), React.createElement("div", null, React.createElement("span", null, objective.feedback)));
            });
            const tabs = [React.createElement(_tabs.Tab, {
              key: "feedback"
            }, texts.activities.spoken.feedback)];
            if (item.transcription) tabs.push(React.createElement(_tabs.Tab, {
              key: "transcription"
            }, texts.activities.spoken.transcription));
            return React.createElement("div", null, React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("h5", null, texts.activities.spoken.audio), React.createElement(_ui.AudioPlayer, {
              url: audioUrl
            })), React.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "drawer-activity__tabs-container"
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, React.createElement("div", {
              className: "activity-data-section-list"
            }, output), React.createElement("div", {
              className: "activity-data__content"
            }, React.createElement("p", null, item.transcription)))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/assignment/drawer/chat-tab
      **************************************************/

      ims.set('./views/assignment/drawer/chat-tab', {
        hash: 1848340768,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./activity/chat/empty");
          //@ts-ignore

          function StudentAssignmentActivityChatTab({
            item: {
              chat,
              participantActivity
            },
            tracking
          }) {
            const ref = React.useRef(null);
            React.useEffect(() => {
              if (!ref.current) return;
              ref.current.addEventListener('scroll', event => {
                event.stopPropagation();
                event.preventDefault();
              });
            }, [ref.current]);
            if (!chat?.messages.items.length) {
              return React.createElement("div", {
                className: "chat-tab",
                ref: ref
              }, React.createElement(_empty.EmptyChat, null));
            }
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              model: chat,
              id: chat?.id,
              empty: _empty.EmptyChat,
              icon: "/assets/images/chat/profile.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/confirm-action
      ********************************************************/

      ims.set('./views/assignment/drawer/confirm-action', {
        hash: 2473476240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function ConfirmAction({
            callback
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              className: "btn-credits",
              variant: "primary",
              onClick: onClickButton
            }, texts.addCredits.action), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/drawer/drawer-chat
      *****************************************************/

      ims.set('./views/assignment/drawer/drawer-chat', {
        hash: 1053962794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerChat = StudentDrawerChat;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          var _chatTab = require("./chat-tab");
          var _header = require("./header");
          var _context = require("../../context");
          function StudentDrawerChat({
            item
          }) {
            const {
              tracking,
              participantActivity,
              chat
            } = item;
            const {
              showDrawer,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const [ready, setReady] = React.useState(participantActivity.chatModel.ready);
            const [fetching, setFetching] = React.useState(false);
            const ref = React.useRef(null);
            (0, _hooks.useBinder)([participantActivity.chatModel], () => {
              setReady(participantActivity.chatModel.ready);
            });
            if (!participantActivity.chatModel.ready) return React.createElement(_headerSkeleton.DrawerSkeleton, {
              item: item
            });
            const onBack = () => {
              setShowDrawer({
                show: true,
                view: 'student',
                data: showDrawer.data
              });
            };
            const onRefresh = async () => {
              try {
                setFetching(true);
                await chat.load();
                const list = ref.current.querySelector('.messages__list');
                if (list) list.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
                setFetching(false);
              } catch (e) {
                console.error(e);
              }
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls,
              ref: ref
            }, React.createElement(_header.StudentDrawerHeader, {
              onRefresh: onRefresh,
              item: item,
              showActivity: true,
              onBack: onBack
            }), React.createElement(_chatTab.StudentAssignmentActivityChatTab, {
              item: item,
              tracking: tracking
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/empty
      ***********************************************/

      ims.set('./views/assignment/drawer/empty', {
        hash: 3745556353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls
            }, _react.default.createElement("p", null, text));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/assignment/drawer/header
      ************************************************/

      ims.set('./views/assignment/drawer/header', {
        hash: 3754759207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerHeader = StudentDrawerHeader;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../../context");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          function StudentDrawerHeader(props) {
            const {
              onRefresh,
              item,
              showCredits = false,
              showActivity = false,
              onBack
            } = props;
            const {
              participant,
              participantActivity
            } = item;
            const [processing, setProcessing] = React.useState(false);
            const activity = participantActivity?.activity;
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            globalThis.p = participant;
            (0, _hooks.useBinder)([participant], () => {
              setCredits(participant.credits.getProperties());
            });
            const onClick = async () => {
              try {
                setProcessing(true);
                await participant.enableAI();
                _toast.toast.success(texts.enableAI.success);
                setProcessing(false);
              } catch (e) {
                console.error(e);
              }
            };
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), showCredits ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, credits.total ? React.createElement(React.Fragment, null, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : React.createElement(React.Fragment, null, texts.enableAI.noEnable)) : null, showActivity && activity ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, activity.title) : null), React.createElement("div", {
              className: "drawer__header-actions"
            }, showCredits && credits.total && credits.total === credits.consumed ? React.createElement(_components.Button, {
              fetching: processing,
              disabled: processing,
              variant: "primary",
              onClick: onClick
            }, texts.enableAI.action) : null, !!onBack && React.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: onBack
            }), React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/index
      ***********************************************/

      ims.set('./views/assignment/drawer/index', {
        hash: 1121075861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          var _empty = require("./empty");
          var _header = require("./header");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          function StudentAssignmentSummary(props) {
            const {
              item
            } = props;
            const {
              participant,
              tracking,
              activity,
              activitySelected
            } = item;
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [items, setItems] = React.useState(participant.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            const [ready, setReady] = React.useState(participant.ready);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const activityId = activity?.id;
            const onRefresh = async () => {
              setFetching(true);
              await item.participant.load();
              setTimeout(() => {
                setItems([...participant.activities.items]);
                setFetching(false);
              }, 1000);
            };
            (0, _hooks.useBinder)([participant], () => {
              setReady(participant.ready);
              setItems([...participant.activities.items]);
              setCredits(participant.credits.getProperties());
            });
            if (!ready) return React.createElement(_headerSkeleton.DrawerSkeleton, {
              item: item
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement(_header.StudentDrawerHeader, {
              item: item,
              showCredits: true,
              onRefresh: onRefresh
            }), React.createElement("section", {
              className: "ds-drawer__content"
            }, items.length ? React.createElement(_list.List, {
              className: "assignment-activity-list",
              items: store.model.activities.items,
              specs: {
                user: student,
                tracking,
                activityId,
                participant,
                activitySelected
              },
              control: _activity.StudentAssignmentActivity
            }) : React.createElement(_empty.EmptyCard, {
              text: texts.assignment.empty.title
            }))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/assignment/general
      ******************************************/

      ims.set('./views/assignment/general', {
        hash: 30264229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralView = GeneralView;
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          /*bundle*/
          function GeneralView() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "dashboard__list"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.participants,
              control: _item.Item
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/chat
      *****************************************************/

      ims.set('./views/assignment/item/activity/chat', {
        hash: 1342881986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityChat = ModuleActivityChat;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          var _status = require("./status");
          function ModuleActivityChat({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const data = participant.activities[activity.id]?.data;
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, activity.data.counters.correct, " /", activity.data.counters.total));
            }
            const onClick = async event => {
              event.stopPropagation();
              event.preventDefault();
              await store.loadUserTracking(participant.user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  participant,
                  activity
                }
              });
            };
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            }), _react.default.createElement(_status.ModuleActivityStatus, {
              item: activity,
              participant: participant
            }))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/details
      ********************************************************/

      ims.set('./views/assignment/item/activity/details', {
        hash: 3912473552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityDetails = ModuleActivityDetails;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _status = require("./status");
          function ModuleActivityDetails({
            item
          }) {
            const {
              activity,
              participant
            } = item;
            const participantActivity = participant.activities.get(activity.id);
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, item.data.counters.correct, " /", item.data.counters.total));
            }
            return _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }, participantActivity?.alerts?.length ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null), _react.default.createElement(_status.ModuleActivityStatus, {
              item: item,
              participant: participant
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/index
      ******************************************************/

      ims.set('./views/assignment/item/activity/index', {
        hash: 3795714024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _spoken = require("./spoken");
          var _multipleChoice = require("./multiple-choice");
          function ModuleActivity({
            item: activity,
            participant
          }) {
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ModuleActivityChat, {
                  activity: activity,
                  participant: participant
                }),
                spoken: _react.default.createElement(_spoken.ModuleActivitySpoken, {
                  activity: activity,
                  participant: participant
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.ModuleActivityMultipleChoice, {
                  activity: activity,
                  participant: participant
                })
              }
            });
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/label
      ******************************************************/

      ims.set('./views/assignment/item/activity/label', {
        hash: 529886888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityMessages = ModuleActivityMessages;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          function ModuleActivityMessages({
            item,
            participant
          }) {
            const activity = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const participantActivity = participant.activities.get(activity.id);
            let type = 'warning';
            let label = texts.activities.status.pending;
            if (hasParticipated) {
              type = 'success';
              label = texts.activities.status.done;
            }
            if (['content-theory', 'debate', 'character-talk'].includes(activity.type)) {
              if (participantActivity?.interactions) {
                label = `${participantActivity?.interactions.count} ${texts.activities.interactions}`;
              } else {
                const totalMessages = participantActivity?.messages?.count ?? 0;
                label = `${totalMessages} ${texts.activities.interactions}`;
              }
            }
            if (activity.type === 'spoken' && item.data) {
              const icons = Object.values(item.data).map(data => data.icon).join('');
              label = icons;
              type = 'default';
            }
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && item.data) {
              const {
                correct,
                total
              } = item.data.counters;
              if (correct < total / 2) type = 'error';
              label = `${correct} / ${total}`;
            }
            if (hasParticipated && participantActivity?.messages) {
              label = `${texts.messageCounter} ${participantActivity?.messages.count}`;
            }
            const hasAlerts = participantActivity?.alerts?.length;
            const cls = `activity-status${hasAlerts ? ' has-alerts' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("span", null, label), hasAlerts ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null);
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/multiple-choice
      ****************************************************************/

      ims.set('./views/assignment/item/activity/multiple-choice', {
        hash: 4236369841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityMultipleChoice = ModuleActivityMultipleChoice;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          function ModuleActivityMultipleChoice({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  participant,
                  activity
                }
              });
            };
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", null, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            })), _react.default.createElement("div", null, participantActivity?.counters ? _react.default.createElement("div", {
              className: "user-activity__information user-activity__information-multiple-choice"
            }, _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.correct), _react.default.createElement("span", {
              className: "activity-item-divider"
            }, "/"), _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.total)) : null))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/spoken
      *******************************************************/

      ims.set('./views/assignment/item/activity/spoken', {
        hash: 604392148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivitySpoken = ModuleActivitySpoken;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          function ModuleActivitySpoken({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  tracking,
                  participant,
                  activity
                }
              });
            };
            const IconItem = ({
              item: icon
            }) => _react.default.createElement(_icons.AppIcon, {
              icon: `points${icon.points}`
            });
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            }), _react.default.createElement("div", {
              className: "spoken-icons"
            }, _react.default.createElement(_list.List, {
              items: participantActivity?.objectives,
              control: IconItem
            })))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/status
      *******************************************************/

      ims.set('./views/assignment/item/activity/status', {
        hash: 2552220279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityStatus = ModuleActivityStatus;
          var _react = require("react");
          var _objectiveIcon = require("../../../components/objective-icon");
          var _context = require("../../../context");
          function ModuleActivityStatus({
            item,
            participant
          }) {
            const activity = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            if (!participantActivity?.progress?.objectives) return null;
            const icons = participantActivity?.progress?.objectives?.map((item, index) => _react.default.createElement(_objectiveIcon.ActivityObjectiveStatusIcon, {
              key: `${item?.text}-${index}-icon`,
              item: item
            }));
            return _react.default.createElement("div", {
              className: "activity-status__container"
            }, icons);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/assignment/item/index
      *********************************************/

      ims.set('./views/assignment/item/index', {
        hash: 469158960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          function Item({
            item
          }) {
            const {
              model,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              user
            } = item;
            const participantUri = `/assignments/${store.assignmentId}/dashboard/participant/${item.user.id}`;
            const openDrawer = event => {
              event.preventDefault();
              event.stopPropagation();
              store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  participant: item
                }
              });
              localStorage.setItem('student.details', JSON.stringify(item.user));
              return false;
            };
            return _react.default.createElement("li", {
              className: "dashboard-card card__user"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              src: user?.photoUrl,
              alt: `${user.name}-avatar`,
              className: "avatar__image"
            }), _react.default.createElement(_components.Link, {
              href: participantUri,
              onClick: openDrawer
            }, _react.default.createElement("h5", null, user.name))), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement(_list.List, {
              className: "user-activity__data",
              specs: {
                participant: item
              },
              items: model.activities.items,
              control: _activity.ModuleActivity
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/activity-icon
      ************************************************/

      ims.set('./views/components/activity-icon', {
        hash: 1185574957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityIcon = ActivityIcon;
          var React = require("react");
          var _iconBox = require("./icon-box");
          /*bundle*/
          function ActivityIcon({
            type,
            className
          }) {
            const cls = `icon-box-container activity--${type} pui-box-icon${className ? ` ${className}` : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_iconBox.IconBox, {
              name: type
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/index
      ******************************************************/

      ims.set('./views/components/drawer-alerts/index', {
        hash: 3059207640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlert = DrawerAlert;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _context = require("../../context");
          /*bundle*/
          function DrawerAlert({
            alerts,
            user
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!alerts?.length) return null;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              as: "div",
              className: "mt-15 ds-drawer__list",
              items: alerts,
              control: _item.DrawerAlertItem,
              specs: {
                user
              }
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/item
      *****************************************************/

      ims.set('./views/components/drawer-alerts/item', {
        hash: 2163827722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlertItem = DrawerAlertItem;
          var React = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function DrawerAlertItem({
            item,
            user
          }) {
            const ref = React.useRef(null);
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const [open, setOpen] = React.useState(false);
            const cls = `ds-drawer__activity-item ${open ? 'is-open' : ''}`;
            const onToggle = () => {
              setOpen(!open);
              return true;
            };
            return React.createElement("article", {
              className: cls,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, _wrapper.settings.APP_NAME), React.createElement(_markdown.Markdown, {
              content: item.iteration.assistant
            })) : React.createElement(React.Fragment, null, texts?.noMessages), React.createElement("h6", null, user.name), React.createElement(_markdown.Markdown, {
              content: item.iteration.student
            })))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/empty
      ****************************************/

      ims.set('./views/components/empty', {
        hash: 3283084933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("pragmate-ui/empty");
          var _actions = require("../actions");
          var _header = require("../header");
          function Empty({
            store,
            setShowDrawer,
            texts
          }) {
            const value = {
              texts,
              model: store.model,
              store,
              setShowDrawer
            };
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_actions.DashboardActions, {
              disabled: true
            }), _react.default.createElement(_header.Header, null), _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: _icons.ICONS.classworks
            }, _react.default.createElement("h3", {
              className: "title"
            }, store.model.module.title), _react.default.createElement("p", null, texts.empty))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/components/icon-box
      *******************************************/

      ims.set('./views/components/icon-box', {
        hash: 2839980169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconBox = IconBox;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function IconBox({
            name,
            className
          }) {
            const cls = `pui-box-icon${className ? ` ${className}` : ''}`;
            return React.createElement(_icons.AppIcon, {
              icon: name,
              className: cls
            });
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/components/objective-icon
      *************************************************/

      ims.set('./views/components/objective-icon', {
        hash: 3125430000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveStatusIcon = ActivityObjectiveStatusIcon;
          var _react = require("react");
          var _tooltip = require("pragmate-ui/tooltip");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function ActivityObjectiveStatusIcon({
            item
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: `${item.name}: ${texts.activities.objectivesStatus[status]}`,
              key: `${item.name}.${status}`
            }, _react.default.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 613289894,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDrawerContext = exports.useDashboardContext = exports.DrawerContext = exports.DashboardContext = void 0;
          var _react = require("react");
          const DashboardContext = exports.DashboardContext = _react.default.createContext({});
          const useDashboardContext = () => _react.default.useContext(DashboardContext);
          exports.useDashboardContext = useDashboardContext;
          const DrawerContext = exports.DrawerContext = _react.default.createContext({});
          const useDrawerContext = () => _react.default.useContext(DrawerContext);
          exports.useDrawerContext = useDrawerContext;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/drawer/content
      **************************************/

      ims.set('./views/drawer/content', {
        hash: 4248281599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          function Wall({
            item
          }) {
            const {
              user: student
            } = item;
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement("div", null, React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/drawer/header-skeleton
      **********************************************/

      ims.set('./views/drawer/header-skeleton', {
        hash: 3380651438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerSkeleton = DrawerSkeleton;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          function DrawerSkeleton({
            item
          }) {
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, item?.participant?.user?.name ? React.createElement(React.Fragment, null, item.participant.user.name) : React.createElement(_ui.SkeletonText, {
              height: "8px",
              width: "100px"
            })), React.createElement("div", {
              className: "drawer__header__subtext"
            }, React.createElement(_ui.SkeletonText, {
              height: "11px",
              width: "100px",
              color: "#fff"
            }))), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              disabled: true
            }), React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/drawer/index
      ************************************/

      ims.set('./views/drawer/index', {
        hash: 3992566147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrawer = AsideDrawer;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _drawer = require("pragmate-ui/drawer");
          var _modal = require("pragmate-ui/modal");
          var _drawer2 = require("../assignment/drawer");
          var _drawerChat = require("../assignment/drawer/drawer-chat");
          var _context = require("../context");
          var _wall = require("./wall");
          function AsideDrawer() {
            const {
              texts,
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const [open, setOpen] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!showDrawer?.view) {
                _routing.routing.replaceState({}, null, `?`);
                return;
              }
              _routing.routing.pushState(`?drawer=${showDrawer.view}`);
            }, [showDrawer.view]);
            _react.default.useEffect(() => {
              if (showDrawer?.show) globalThis.document.querySelector('html').style.overflow = 'hidden';else globalThis.document.querySelector('html').style.overflow = 'auto';
            }, [showDrawer?.show]);
            if (showDrawer.show === false) return;
            const toggleOpen = () => setOpen(!open);
            const addCredits = async () => {
              try {
                // setFetching(true);
                await store.model.addCredits(showDrawer.data.tracking);
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                // setFetching(false);
              }
            };
            const onConfirm = async () => {
              await addCredits();
              toggleOpen();
            };
            const cls = `ds-drawer ${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_drawer.Drawer, {
              className: cls,
              position: "right",
              open: showDrawer.show,
              onClose: () => setShowDrawer({
                show: false
              })
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: showDrawer.view,
              options: {
                wall: _react.default.createElement(_wall.Wall, {
                  item: showDrawer.data
                }),
                'student-activity': _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  item: showDrawer.data
                }),
                'student-chat': _react.default.createElement(_drawerChat.StudentDrawerChat, {
                  item: showDrawer.data
                }),
                student: _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  item: showDrawer.data
                })
              }
            })), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/drawer/wall
      ***********************************/

      ims.set('./views/drawer/wall', {
        hash: 2870889056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _widget = require("@aimpact/ailearn-app/dashboard/wall/widget.widget");
          function Wall({
            item
          }) {
            const {
              store
            } = (0, _context.useDrawerContext)();
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const onRefresh = async event => {
              try {
                setFetching(true);
                event.stopPropagation();
                await store.wall.load();
                setFetching(false);
              } catch (e) {
                console.error(e);
              }
            };
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, "Wall"), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement(_widget.WallView, {
              store: store.wall,
              texts: store.texts.wall
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 185675526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/header/activity-filter
      **********************************************/

      ims.set('./views/header/activity-filter', {
        hash: 4263261696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFilter = ActivityFilter;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          function ActivityFilter({
            item
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const icon = _icons2.ICONS[item.type];
            let cls = `activity-type__icon activity--${item.type}`;
            if (store.activitySelected?.type === item.type) cls += ' active';
            const title = item.title;
            const handleClick = event => store.selectActivity(item);
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title
            }, _react.default.createElement("section", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 645467053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _userData = require("./user-data");
          function Header() {
            const {
              model,
              texts
            } = (0, _context.useDashboardContext)();
            const {
              title,
              description,
              picture,
              creator,
              owner
            } = model.module;
            const onClassroomClick = event => {
              event.stopPropagation();
              event.preventDefault();
              _routing.routing.pushState(`/classrooms/view/${model.classroom.id}`);
            };
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: "page__header-container"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              href: `/assignments/${model.id}`
            }, _react.default.createElement("h1", null, title)), _react.default.createElement("div", {
              className: "dashboard-header__data"
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "dashboard-header__classroom",
              onClick: onClassroomClick
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("span", {
              className: "assignment-classroom"
            }, model.classroom.name)), _react.default.createElement("div", {
              className: "users-data__container"
            }, creator && _react.default.createElement(_userData.UserData, {
              data: creator,
              label: texts.creator
            }), owner && _react.default.createElement(_userData.UserData, {
              data: owner,
              label: texts.owner
            }))))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "dashboard-content"
            }, _react.default.createElement("section", {
              className: "main-content"
            }, _react.default.createElement("p", {
              className: "p1 hidden-xs"
            }, description)), _react.default.createElement("div", {
              className: "actions"
            }))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/header/student-header
      *********************************************/

      ims.set('./views/header/student-header', {
        hash: 2433802419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHeader = StudentsHeader;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _list = require("pragmate-ui/list");
          var _activityFilter = require("./activity-filter");
          function StudentsHeader() {
            const {
              model,
              texts,
              store
            } = (0, _context.useDashboardContext)();
            const listCls = `activity-types__list${store.activitySelected ? ' activity-selected' : ''}`;
            const [refreshing, setRefreshing] = _react.default.useState(false);
            const onFilter = event => {
              store.filter(event.currentTarget.value);
            };
            return _react.default.createElement("header", {
              className: "dashboard-students__header"
            }, _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              onChange: onFilter,
              type: "text",
              className: "header__search",
              placeholder: texts.list.search,
              icon: "search"
            }))), _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("h6", null, texts.studentHeader.filter), _react.default.createElement(_list.List, {
              className: listCls,
              items: model.activities.items,
              control: _activityFilter.ActivityFilter
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/header/user-data
      ****************************************/

      ims.set('./views/header/user-data', {
        hash: 2332352996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          function UserData({
            label,
            data: {
              photoUrl,
              name
            }
          }) {
            return React.createElement("div", {
              className: "user-data__section"
            }, React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: `${photoUrl}`
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3651636727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _ = require("./404");
          var _empty = require("./components/empty");
          var _context = require("./context");
          var _drawer = require("./drawer");
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _actions = require("./actions");
          var _view = require("./activities/view");
          var _general = require("./assignment/general");
          var _studentHeader = require("./header/student-header");
          /*bundle*/
          function View({
            store
          }) {
            const [showDrawer, setShowDrawer] = (0, _react.useState)({
              show: false,
              data: null
            });
            const [state, setState] = (0, _react.useState)(store.getProperties());
            const {
              texts
            } = store;
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => {
              setState(store.state);
            }, ['change', 'data.updated', 'fetching.changed']);
            const value = {
              texts,
              model: store.model,
              store,
              setShowDrawer,
              view: store.view,
              setView: view => store.view = view
            };
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (!store.model.found) return _react.default.createElement(_.NotFound, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts,
              setShowDrawer: setShowDrawer
            });
            const drawerValue = {
              texts,
              model: store.model,
              showDrawer,
              store,
              setShowDrawer
            };
            const cls = `dashboard-container${state.fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement("div", {
              ref: ref
            }, store.model.archived ? _react.default.createElement("div", {
              className: "notifications-bar center-items notifications--info"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "info"
            }), texts.archived) : null, _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_actions.DashboardActions, null), _react.default.createElement(_header.Header, null), _react.default.createElement(_studentHeader.StudentsHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: store.view,
              options: {
                general: _react.default.createElement(_general.GeneralView, null),
                activity: _react.default.createElement(_view.ActivityView, null)
              }
            })), _react.default.createElement(_context.DrawerContext.Provider, {
              value: drawerValue
            }, _react.default.createElement(_drawer.AsideDrawer, null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/activities/view/index",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/activities/view/participant/chat",
        "from": "ChatActivityParticipant",
        "name": "ChatActivityParticipant"
      }, {
        "im": "./views/activities/view/participant/multiple-choice",
        "from": "MultipleChoiceActivityParticipant",
        "name": "MultipleChoiceActivityParticipant"
      }, {
        "im": "./views/activities/view/participant/spoken",
        "from": "SpokenActivityParticipant",
        "name": "SpokenActivityParticipant"
      }, {
        "im": "./views/assignment/drawer/empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./views/assignment/general",
        "from": "GeneralView",
        "name": "GeneralView"
      }, {
        "im": "./views/components/activity-icon",
        "from": "ActivityIcon",
        "name": "ActivityIcon"
      }, {
        "im": "./views/components/drawer-alerts/index",
        "from": "DrawerAlert",
        "name": "DrawerAlert"
      }, {
        "im": "./views/components/drawer-alerts/item",
        "from": "DrawerAlertItem",
        "name": "DrawerAlertItem"
      }, {
        "im": "./views/components/icon-box",
        "from": "IconBox",
        "name": "IconBox"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/activities/view/index').ActivityView : value);
        (require || prop === 'ChatActivityParticipant') && _export("ChatActivityParticipant", ChatActivityParticipant = require ? require('./views/activities/view/participant/chat').ChatActivityParticipant : value);
        (require || prop === 'MultipleChoiceActivityParticipant') && _export("MultipleChoiceActivityParticipant", MultipleChoiceActivityParticipant = require ? require('./views/activities/view/participant/multiple-choice').MultipleChoiceActivityParticipant : value);
        (require || prop === 'SpokenActivityParticipant') && _export("SpokenActivityParticipant", SpokenActivityParticipant = require ? require('./views/activities/view/participant/spoken').SpokenActivityParticipant : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./views/assignment/drawer/empty').EmptyCard : value);
        (require || prop === 'GeneralView') && _export("GeneralView", GeneralView = require ? require('./views/assignment/general').GeneralView : value);
        (require || prop === 'ActivityIcon') && _export("ActivityIcon", ActivityIcon = require ? require('./views/components/activity-icon').ActivityIcon : value);
        (require || prop === 'DrawerAlert') && _export("DrawerAlert", DrawerAlert = require ? require('./views/components/drawer-alerts/index').DrawerAlert : value);
        (require || prop === 'DrawerAlertItem') && _export("DrawerAlertItem", DrawerAlertItem = require ? require('./views/components/drawer-alerts/item').DrawerAlertItem : value);
        (require || prop === 'IconBox') && _export("IconBox", IconBox = require ? require('./views/components/icon-box').IconBox : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImlkIiwiRXJyb3IiLCJUcmFja2luZ0Rhc2hib2FyZCIsIldhbGxTdG9yZSIsIlByb21pc2UiLCJhbGwiLCJzZXR1cExheW91dCIsImVycm9yIiwiY29uc29sZSIsInNldCIsInJlZnJlc2giLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJwYXJ0aWNpcGFudCIsIm1hcCIsImUiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIkRhc2hib2FyZFdhbGwiLCJtZXNzYWdlcyIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsImRpc2FibGVkIiwic2V0U2hvd0RyYXdlciIsInVzZURhc2hib2FyZENvbnRleHQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwib25DbGljayIsInVzZUJpbmRlciIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJhbmFseXNpcyIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsInN0YXR1cyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiSWNvblN0YXRlIiwib2JqZWN0aXZlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwb2ludHMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsImRlc2NyaXB0aW9uIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJwcm9wcyIsImFjdGl2aXR5SWQiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwidGFiIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJfd3JhcHBlciIsInVpZCIsImF1ZGlvVXJsIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsIm91dHB1dCIsImZlZWRiYWNrIiwidHJhbnNjcmlwdGlvbiIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIm9uUmVmcmVzaCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiU3R1ZGVudERyYXdlckhlYWRlciIsInNob3dBY3Rpdml0eSIsIkRyYXdlciIsIl90b2FzdCIsInNob3dDcmVkaXRzIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzdHVkZW50IiwiY3JlZGl0cyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwicCIsImVuYWJsZUFJIiwidG9hc3QiLCJzdWNjZXNzIiwiY29uc3VtZWQiLCJvZiIsIm5vRW5hYmxlIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiQVBQX05BTUUiLCJNYXJrZG93biIsIm5vTWVzc2FnZXMiLCJfYWN0aW9ucyIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJfcm91dGluZyIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwicGljdHVyZSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0U3RhdGUiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJkcmF3ZXJWYWx1ZSIsImdlbmVyYWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS93YWxsLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRCxJQUFB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