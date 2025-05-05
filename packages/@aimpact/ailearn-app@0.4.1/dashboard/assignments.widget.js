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
        hash: 2489938494,
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
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, "RVD AI"), React.createElement(_markdown.Markdown, {
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
        hash: 2894963352,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("pragmate-ui/empty");
          var _actions = require("../actions");
          var _header = require("../header");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImlkIiwiRXJyb3IiLCJUcmFja2luZ0Rhc2hib2FyZCIsIldhbGxTdG9yZSIsIlByb21pc2UiLCJhbGwiLCJzZXR1cExheW91dCIsImVycm9yIiwiY29uc29sZSIsInNldCIsInJlZnJlc2giLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJwYXJ0aWNpcGFudCIsIm1hcCIsImUiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIkRhc2hib2FyZFdhbGwiLCJtZXNzYWdlcyIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsImRpc2FibGVkIiwic2V0U2hvd0RyYXdlciIsInVzZURhc2hib2FyZENvbnRleHQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwib25DbGljayIsInVzZUJpbmRlciIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJhbmFseXNpcyIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsInN0YXR1cyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiSWNvblN0YXRlIiwib2JqZWN0aXZlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwb2ludHMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsImRlc2NyaXB0aW9uIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJwcm9wcyIsImFjdGl2aXR5SWQiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwidGFiIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJfd3JhcHBlciIsInVpZCIsImF1ZGlvVXJsIiwic2V0dGluZ3MiLCJhcGlzIiwiYWlsZWFybiIsIm91dHB1dCIsImZlZWRiYWNrIiwidHJhbnNjcmlwdGlvbiIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIm9uUmVmcmVzaCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiU3R1ZGVudERyYXdlckhlYWRlciIsInNob3dBY3Rpdml0eSIsIkRyYXdlciIsIl90b2FzdCIsInNob3dDcmVkaXRzIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzdHVkZW50IiwiY3JlZGl0cyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwicCIsImVuYWJsZUFJIiwidG9hc3QiLCJzdWNjZXNzIiwiY29uc3VtZWQiLCJvZiIsIm5vRW5hYmxlIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2NvbmZpZyIsIl9hY3Rpb25zIiwiQVBQIiwicGFyYW1zIiwiQVBQX05BTUUiLCJEYXNoYm9hcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyIiwiY2xhc3N3b3JrcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIkFzaWRlRHJhd2VyIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiX3dpZGdldCIsIldhbGxWaWV3IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsInBpY3R1cmUiLCJjcmVhdG9yIiwib3duZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiRW50aXR5SW1hZ2UiLCJlbnRpdHkiLCJVc2VyRGF0YSIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwiU3R1ZGVudHNIZWFkZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiXyIsIl92aWV3IiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsInNldFN0YXRlIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiZHJhd2VyVmFsdWUiLCJnZW5lcmFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvc3RvcmUvd2FsbC50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaGVhZGVyLXNrZWxldG9uLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWUsZ0JBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsU0FBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQUVBLElBQUF1QixlQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLEtBQUEsR0FBQXhCLE9BQUE7VUFSQTs7VUF5Qk0sTUFBT08sWUFBYSxTQUFRYSxNQUFBLENBQUFLLGFBQTJCO1lBQzVEQyxPQUFPO1lBRVAsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLFlBQWE7WUFDYixDQUFBQyxRQUFTO1lBQ1QsQ0FBQUMsZUFBZ0I7WUFDaEIsQ0FBQUMsU0FBVSxHQUEwQixJQUFJQyxHQUFHLEVBQUU7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLGdCQUFpQjtZQUNqQixJQUFJQSxnQkFBZ0JBLENBQUE7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO1lBQzlCO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLENBQUFDLEtBQU0sR0FBK0IsSUFBSWQsTUFBQSxDQUFBZSxZQUFZLENBQUNkLGVBQUEsQ0FBQWUsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdkUsQ0FBQUMsV0FBWTtZQUNaLENBQUFDLEtBQU0sR0FBcUIsSUFBSVQsR0FBRyxFQUFFO1lBQ3BDLENBQUFVLFNBQVU7WUFFVixJQUFJZixPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLElBQUlDLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsSUFBSWUsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFoQixPQUFRO1lBQ3JCO1lBRUEsSUFBSU0sS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJRyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFUSxLQUFLO1lBQzFCO1lBRUEsSUFBSUMsWUFBWUEsQ0FBQTtjQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQVYsTUFBTyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU0sQ0FBQ1ksWUFBWSxDQUFDQyxLQUFLO2NBQ3hELE1BQU1DLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQWQsS0FBTSxDQUFDWSxZQUFZLENBQUNDLEtBQUssQ0FBQ1gsTUFBTSxDQUFDYSxJQUFJLElBQzFEQSxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBakIsTUFBTyxDQUFDZ0IsV0FBVyxFQUFFLENBQUMsQ0FDakU7Y0FFRCxPQUFPSixRQUFRO1lBQ2hCO1lBRUEsSUFBSVAsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ0ksS0FBSztZQUMvQjtZQUVBLElBQUlTLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDaUIsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBYixXQUFZLENBQUNhLEtBQUs7WUFDbkU7WUFFQSxJQUFJWixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlhLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBWixTQUFVO1lBQ3ZCO1lBRUFQLE1BQU1BLENBQUNBLE1BQU07Y0FDWixJQUFJLENBQUMsQ0FBQUEsTUFBTyxHQUFHQSxNQUFNO2NBQ3JCLElBQUksQ0FBQ29CLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTztnQkFDTkMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDeEIsS0FBSyxFQUFFWSxZQUFZLEVBQUVDLEtBQUssRUFBRVksTUFBTSxJQUFJLENBQUM7Z0JBQy9EQyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2dCQUN2QkMsSUFBSSxFQUFFLElBQUksQ0FBQ0E7ZUFDWDtZQUNGO1lBRUFDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQ0xDLFVBQVUsRUFBRSxDQUFDLE1BQU07ZUFDbkIsQ0FBQztjQUNGLElBQUksQ0FBQ0YsSUFBSSxHQUFHLFNBQVM7Y0FDckIxQyxnQkFBQSxDQUFBNkMsWUFBWSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQzNCOUMsZ0JBQUEsQ0FBQTZDLFlBQVksQ0FBQ0UsT0FBTyxHQUFHLElBQUk7Y0FDM0IsSUFBSSxDQUFDLENBQUF6QixXQUFZLEdBQUcsSUFBSWxCLE1BQUEsQ0FBQWUsWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBRyxXQUFZLENBQUMwQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1gsWUFBWSxDQUFDO2NBQ2pELElBQUksQ0FBQyxDQUFBbkIsS0FBTSxDQUFDOEIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNYLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQWYsV0FBWSxDQUFDMkIsS0FBSyxFQUFFO2NBQ3pCQyxVQUFVLENBQUMvRCxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBLE1BQU1TLElBQUlBLENBQUN1RCxFQUFVO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDQSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7Z0JBQ2pELElBQUksSUFBSSxDQUFDLENBQUFyQyxLQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ29DLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUUxQyxJQUFJLENBQUNWLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixJQUFJLENBQUMsQ0FBQS9CLFlBQWEsR0FBR3lDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBcEMsS0FBTSxHQUFHLElBQUlkLFNBQUEsQ0FBQW9ELGlCQUFpQixDQUFDO2tCQUFFRjtnQkFBRSxDQUFFLENBQUM7Z0JBRTNDO2dCQUNBLElBQUksQ0FBQyxDQUFBM0IsU0FBVSxHQUFHLElBQUlsQixLQUFBLENBQUFnRCxTQUFTLENBQUNILEVBQUUsQ0FBQztnQkFFbkMsTUFBTUksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQXRDLEtBQU0sQ0FBQytCLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBbEMsS0FBTSxDQUFDbkIsSUFBSSxDQUFDdUQsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFOUQsSUFBSSxDQUFDTSxXQUFXLEVBQUU7ZUFDbEIsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Z0JBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLDBCQUEwQixFQUFFQSxLQUFLLENBQUM7Z0JBQ2hELE1BQU1BLEtBQUs7ZUFDWCxTQUFTO2dCQUNULEtBQUssQ0FBQ3ZCLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJLENBQUNNLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVRZ0IsV0FBV0EsQ0FBQTtjQUNsQnpELGdCQUFBLENBQUE2QyxZQUFZLENBQUNlLEdBQUcsQ0FBQztnQkFDaEJDLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU87Z0JBQ3JCQyxRQUFRLEVBQUUsb0JBQW9CLElBQUksQ0FBQyxDQUFBL0MsS0FBTSxDQUFDZ0QsU0FBUyxDQUFDWixFQUFFLEVBQUU7Z0JBQ3hEYSxVQUFVLEVBQUUsQ0FDWCxDQUFDLElBQUksQ0FBQzFDLFdBQVcsQ0FBQzJDLFFBQVEsQ0FBQ0MsVUFBVSxFQUFFLGtCQUFrQixDQUFDLEVBQzFELENBQUMsSUFBSSxDQUFDLENBQUFuRCxLQUFNLENBQUNnRCxTQUFTLENBQUMvQixJQUFJLEVBQUUsb0JBQW9CLElBQUksQ0FBQyxDQUFBakIsS0FBTSxDQUFDZ0QsU0FBUyxDQUFDWixFQUFFLEVBQUUsQ0FBQyxFQUM1RSxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUFwQyxLQUFNLENBQUNLLE1BQU0sQ0FBQytDLEtBQUssRUFBRSxDQUFDO2VBRTVDLENBQUM7WUFDSDtZQUVBLE1BQU1DLGdCQUFnQkEsQ0FBQ0MsTUFBTTtjQUM1QixJQUFJO2dCQUNILE1BQU1DLFdBQVcsR0FBRyxJQUFJLENBQUN2RCxLQUFLLENBQUNZLFlBQVksQ0FBQzRDLEdBQUcsQ0FBQzVFLEdBQUcsQ0FBQzBFLE1BQU0sQ0FBQztnQkFDM0QsTUFBTUMsV0FBVyxDQUFDMUUsSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsQ0FBQWdCLGVBQWdCLEdBQUcwRCxXQUFXO2dCQUVuQyxPQUFPLElBQUksQ0FBQyxDQUFBMUQsZUFBZ0I7ZUFDNUIsQ0FBQyxPQUFPNEQsQ0FBQyxFQUFFO2dCQUNYYixPQUFPLENBQUNELEtBQUssQ0FBQ2MsQ0FBQyxDQUFDOztZQUVsQjtZQUVBWCxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDcEIsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDMUIsS0FBSyxDQUFDbkIsSUFBSSxFQUFFO2dCQUV2QixJQUFJLENBQUM2RSxPQUFPLENBQUMsY0FBYyxDQUFDO2VBQzVCLENBQUMsT0FBT0QsQ0FBQyxFQUFFO2dCQUNYYixPQUFPLENBQUNELEtBQUssQ0FBQ2MsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDL0IsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFRGlDLGFBQWEsR0FBRyxNQUFBQSxDQUFPO2NBQUVMLE1BQU07Y0FBRU07WUFBUSxJQUEwQyxFQUFFLEtBQUk7Y0FDeEYsSUFBSTtnQkFDSCxNQUFNQyxPQUFPLEdBQUcsSUFBSXpFLEtBQUEsQ0FBQTBFLGNBQWMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDcEMsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQ2dDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0IsTUFBTSxJQUFJLENBQUMxRCxLQUFLLENBQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFjLFlBQWEsQ0FBQztnQkFFekMsSUFBSTJELE1BQU0sRUFBRTtrQkFDWCxNQUFNMUQsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDeUQsZ0JBQWdCLENBQUNDLE1BQU0sQ0FBQztrQkFDcEQsTUFBTTFELFFBQVEsQ0FBQ2YsSUFBSSxDQUFDO29CQUFFdUQsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBekMsWUFBYTtvQkFBRTJEO2tCQUFNLENBQUUsQ0FBQzs7Z0JBRXhELElBQUlNLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxTQUFTLEVBQUU7a0JBQ25DSCxRQUFRLENBQUNHLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDO29CQUFFNUIsRUFBRSxFQUFFd0IsUUFBUSxDQUFDRyxTQUFTLENBQUMzQjtrQkFBRSxDQUFFLENBQUM7O2dCQUUxREQsVUFBVSxDQUFDOEIsVUFBVSxDQUFDLE1BQUs7a0JBQzFCSixPQUFPLENBQUNLLE9BQU8sRUFBRTtnQkFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDUixPQUFPTCxPQUFPO2VBQ2QsQ0FBQyxPQUFPSixDQUFDLEVBQUU7Z0JBQ1hiLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDYyxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMvQixRQUFRLEdBQUcsS0FBSztnQkFDckIsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDOztZQUVqQyxDQUFDO1lBRURTLGVBQWUsR0FBRyxNQUFNYixNQUFNLElBQUc7Y0FDaEMsTUFBTTFELFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUUsU0FBVSxDQUFDbEIsR0FBRyxDQUFDMEUsTUFBTSxDQUFDO2NBQzVDMUQsUUFBUSxDQUFDZixJQUFJLENBQUM7Z0JBQUV1RCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF6QyxZQUFhO2dCQUFFMkQ7Y0FBTSxDQUFFLENBQUM7WUFDbEQsQ0FBQztZQUVEdkUsS0FBS0EsQ0FBQTtjQUNKRSxnQkFBQSxDQUFBNkMsWUFBWSxDQUFDL0MsS0FBSyxFQUFFO2NBQ3BCLElBQUksQ0FBQyxDQUFBeUIsS0FBTSxDQUFDekIsS0FBSyxFQUFFO2NBQ25CLElBQUksQ0FBQyxDQUFBZSxTQUFVLENBQUNmLEtBQUssRUFBRTtjQUN2QixJQUFJLENBQUMsQ0FBQWMsZUFBZ0IsR0FBRyxJQUFJO2NBQzVCLElBQUksQ0FBQyxDQUFBRyxLQUFNLEdBQUcsSUFBSTtjQUNsQixLQUFLLENBQUNvQixLQUFLLEdBQUcsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQW5CLGdCQUFpQixHQUFHLElBQUk7Y0FDN0IsSUFBSSxDQUFDLENBQUFDLE1BQU8sR0FBRyxFQUFFO2NBQ2pCLElBQUksSUFBSSxDQUFDLENBQUFPLFNBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLENBQUFBLFNBQVUsQ0FBQzFCLEtBQUssRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUEwQixTQUFVLEdBQUcsSUFBSTs7Y0FFdkIsSUFBSSxDQUFDYSxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzdCO1lBRUE4QyxjQUFjQSxDQUFDUixRQUFRO2NBQ3RCLElBQUksQ0FBQyxDQUFBM0QsZ0JBQWlCLEdBQUcyRCxRQUFRO2NBQ2pDLElBQUksQ0FBQ2pDLElBQUksR0FBR2lDLFFBQVEsR0FBRyxVQUFVLEdBQUcsU0FBUztjQUM3QyxJQUFJLENBQUNGLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQSxNQUFNVyxPQUFPQSxDQUFBO2NBQ1osSUFBSSxDQUFDM0MsUUFBUSxHQUFHLElBQUk7Y0FDcEIsTUFBTSxJQUFJLENBQUMxQixLQUFLLENBQUNxRSxPQUFPLEVBQUU7Y0FDMUIsSUFBSSxDQUFDM0MsUUFBUSxHQUFHLEtBQUs7WUFDdEI7WUFFQSxNQUFNNEMsT0FBT0EsQ0FBQTtjQUNaLElBQUksQ0FBQzVDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLE1BQU0sSUFBSSxDQUFDMUIsS0FBSyxDQUFDc0UsT0FBTyxFQUFFO2NBQzFCLElBQUksQ0FBQzVDLFFBQVEsR0FBRyxLQUFLO1lBQ3RCOztVQUNBMUMsT0FBQSxDQUFBVixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDblBELElBQUFjLEtBQUEsR0FBQXJCLE9BQUE7VUFFQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQVdNLE1BQU93RSxTQUFVLFNBQVFwRCxNQUFBLENBQUFLLGFBQXdCO1lBQ3RELENBQUFRLEtBQU07WUFDTixDQUFBYSxLQUFNO1lBQ04sQ0FBQXVCLEVBQUc7WUFDSCxDQUFBMUIsVUFBVztZQUVYLElBQUlWLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSWEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJdUIsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFQSxJQUFJMUIsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQWtCLFlBQVlRLEVBQVU7Y0FDckIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLEVBQUcsR0FBR0EsRUFBRTtjQUNiLElBQUksQ0FBQyxDQUFBcEMsS0FBTSxHQUFHLElBQUlaLEtBQUEsQ0FBQW1GLGFBQWEsRUFBRTtZQUNsQztZQUVBekIsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNwQixJQUFJO2dCQUNILElBQUksQ0FBQ3BCLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNO2tCQUFFOEM7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDeEUsS0FBSyxDQUFDbkIsSUFBSSxDQUFDO2tCQUFFdUQsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBQTtnQkFBRyxDQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQyxDQUFBdkIsS0FBTSxHQUFHMkQsUUFBUTtnQkFDdEIsSUFBSSxDQUFDbEQsWUFBWSxDQUFDLGVBQWUsQ0FBQztlQUNsQyxDQUFDLE9BQU9xQixLQUFLLEVBQUU7Z0JBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHdCQUF3QixFQUFFQSxLQUFLLENBQUM7ZUFDOUMsU0FBUztnQkFDVCxJQUFJLENBQUNqQixRQUFRLEdBQUcsS0FBSzs7WUFFdkIsQ0FBQztZQUVELE1BQU03QyxJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxNQUFNO2tCQUFFMkY7Z0JBQVEsQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUF4RSxLQUFNLENBQUNuQixJQUFJLENBQUM7a0JBQUV1RCxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFBO2dCQUFHLENBQUUsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLENBQUF2QixLQUFNLEdBQUcyRCxRQUFRO2dCQUV0QixLQUFLLENBQUNwRCxLQUFLLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDRSxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPcUIsS0FBSyxFQUFFO2dCQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsS0FBSyxDQUFDO2dCQUMzQyxNQUFNQSxLQUFLOztZQUViO1lBRUE1RCxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUFpQixLQUFNLEdBQUcsSUFBSTtjQUNsQixJQUFJLENBQUMsQ0FBQWEsS0FBTSxHQUFHLEVBQUU7Y0FDaEIsSUFBSSxDQUFDLENBQUF1QixFQUFHLEdBQUcsSUFBSTtjQUNmLElBQUksQ0FBQyxDQUFBMUIsVUFBVyxHQUFHLElBQUk7Y0FDdkIsSUFBSSxDQUFDWSxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzdCOztVQUNBdEMsT0FBQSxDQUFBdUQsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFFRCxJQUFBa0MsTUFBQSxHQUFBMUcsT0FBQTtVQUVNLFNBQVUyRyxRQUFRQSxDQUFDO1lBQUV0RyxLQUFLO1lBQUUrQjtVQUFLLENBQUU7WUFDeEMsSUFBSS9CLEtBQUssQ0FBQzRCLEtBQUssQ0FBQzJDLEtBQUssRUFBRWdDLElBQUksS0FBSyxHQUFHLEVBQUU7Y0FDcEMsT0FBT0YsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEseUJBQW1COztZQUUzQixPQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFBSixNQUFBLENBQUFHLE9BQUEsQ0FBQUUsUUFBQSxRQUNDTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSw2QkFBdUIsQ0FDckI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBRSxXQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFrSCxNQUFBLEdBQUFsSCxPQUFBO1VBRU0sU0FBVW1ILGdCQUFnQkEsQ0FBQztZQUFFQztVQUFRLENBQUU7WUFDNUMsTUFBTTtjQUFFbkYsS0FBSztjQUFFNUIsS0FBSztjQUFFK0IsS0FBSztjQUFFaUY7WUFBYSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUNwRSxNQUFNLENBQUNDLE1BQU0sRUFBRUMsU0FBUyxDQUFDLEdBQUdkLE1BQUEsQ0FBQUcsT0FBSyxDQUFDWSxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU0sQ0FBQzlELFFBQVEsRUFBRStELFdBQVcsQ0FBQyxHQUFHaEIsTUFBQSxDQUFBRyxPQUFLLENBQUNZLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTUUsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQnRILEtBQUssQ0FBQ2lELElBQUksQ0FBQ3hDLElBQUksRUFBRTtjQUNqQnVHLGFBQWEsQ0FBQztnQkFDYjNHLElBQUksRUFBRSxJQUFJO2dCQUNWa0QsSUFBSSxFQUFFO2VBQ04sQ0FBQztZQUNILENBQUM7WUFDRCxJQUFBc0QsTUFBQSxDQUFBVSxTQUFTLEVBQ1IsQ0FBQzNGLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSnVGLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZCxDQUFDLEVBQ0Qsa0JBQWtCLENBQ2xCO1lBQ0QsTUFBTWxCLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDMUJvQixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU1ySCxLQUFLLENBQUNpRyxPQUFPLEVBQUU7Y0FDckJvQixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ25CLENBQUM7WUFDRCxNQUFNbkIsT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQm1CLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakIsTUFBTXJILEtBQUssQ0FBQ2tHLE9BQU8sRUFBRTtjQUNyQm1CLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU1HLFVBQVUsR0FBRzVGLEtBQUssQ0FBQzZGLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUztZQUN6RCxNQUFNQyxNQUFNLEdBQUc5RixLQUFLLENBQUM2RixRQUFRLEdBQUd2QixPQUFPLEdBQUdELE9BQU87WUFFakQsT0FDQ0ksTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUE4RCxHQUMzRS9GLEtBQUssQ0FBQ2dHLGFBQWEsR0FDbkJ2QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxXQUFBLENBQUFrQixNQUFNO2NBQ05DLFFBQVE7Y0FDUkMsSUFBSSxFQUFDLGVBQWU7Y0FDcEJKLFNBQVMsRUFBQyw4Q0FBOEM7Y0FDeERMLE9BQU8sRUFBRUksTUFBTTtjQUNmWCxRQUFRLEVBQUV6RCxRQUFRO2NBQ2xCQSxRQUFRLEVBQUVBO1lBQVEsR0FFakJrRSxVQUFVLENBQ0gsR0FDTixJQUFJLEVBQ1JuQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxXQUFBLENBQUFrQixNQUFNO2NBQ05DLFFBQVE7Y0FDUkMsSUFBSSxFQUFDLGVBQWU7Y0FDcEJoQixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJZLFNBQVMsRUFBQyw4Q0FBOEM7Y0FDeERMLE9BQU8sRUFBRUE7WUFBTyxHQUVmdkYsS0FBSyxDQUFDaUcsT0FBTyxDQUFDL0UsSUFBSSxDQUNYLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REEsSUFBQWdGLEdBQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBMEcsTUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ00sU0FBVXVJLGFBQWFBLENBQUM7WUFBRUM7VUFBTyxDQUF3QjtZQUM5RCxNQUFNO2NBQUVwRztZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN2Q2tCLE9BQU8sR0FBR0EsT0FBTyxJQUFJcEcsS0FBSyxDQUFDcUcsVUFBVSxDQUFDQyxLQUFLO1lBQzNDLE9BQU9oQyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsR0FBQSxDQUFBSyxTQUFTO2NBQUNQLElBQUksRUFBQyxNQUFNO2NBQUNRLElBQUksRUFBRUosT0FBTztjQUFFUixTQUFTLEVBQUM7WUFBMEIsRUFBRztVQUNyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOQSxJQUFBdEIsTUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBOEksS0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUErSSxZQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQWdKLE1BQUEsR0FBQWhKLE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUFnSCxXQUFBLEdBQUFoSCxPQUFBO1VBRU87VUFBVSxTQUNSaUosWUFBWUEsQ0FBQyxFQUFFO1lBQ3ZCLE1BQU07Y0FBRTVJLEtBQUs7Y0FBRTZJO1lBQU8sQ0FBRSxHQUFHLElBQUFqQyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ2hELE1BQU07Y0FBRXBGLGdCQUFnQixFQUFFMkQ7WUFBUSxDQUFFLEdBQUd4RixLQUFLO1lBQzVDLE1BQU0sQ0FBQzhJLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUcxQyxNQUFBLENBQUFHLE9BQUssQ0FBQ1ksUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNoRCxNQUFNNEIsT0FBTyxHQUFHQSxDQUFBLEtBQU1oSixLQUFLLENBQUNnRyxjQUFjLENBQUNpRCxTQUFTLENBQUM7WUFFckQsSUFBQXBDLE1BQUEsQ0FBQVUsU0FBUyxFQUFDLENBQUN2SCxLQUFLLENBQUMsRUFBRSxNQUFNK0ksVUFBVSxDQUFDL0ksS0FBSyxDQUFDNkIsZ0JBQWdCLENBQUMsRUFBRSxjQUFjLENBQUM7WUFDNUUsSUFBSSxDQUFDMkQsUUFBUSxFQUFFLE9BQU8sSUFBSTtZQUMxQixPQUNDYSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFBSixNQUFBLENBQUFHLE9BQUEsQ0FBQUUsUUFBQSxRQUNDTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFTa0IsU0FBUyxFQUFFLCtDQUErQ25DLFFBQVEsQ0FBQzBELElBQUk7WUFBRSxHQUNqRjdDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGNBQ0NKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGFBQUtqQixRQUFRLENBQUNSLEtBQUssRSxJQUFPLENBQ3JCLEVBQ05xQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQVksR0FDMUJ0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0IsTUFBQSxDQUFBVyxVQUFVO2NBQUNwQixJQUFJLEVBQUMsT0FBTztjQUFDL0MsS0FBSyxFQUFDLE9BQU87Y0FBQ3NDLE9BQU8sRUFBRTBCLE9BQU87Y0FBRXJCLFNBQVMsRUFBQztZQUFRLEVBQUcsQ0FDekUsQ0FDRyxFQUNWdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBeUMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUU3RCxRQUFRLENBQUNoRCxZQUFZLENBQUNhLE1BQU0sR0FBRyxDQUFDO2NBQzNDaUcsT0FBTztjQUNQQyxPQUFPLEVBQUU7Z0JBQ1JDLElBQUksRUFDSG5ELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNnQyxLQUFBLENBQUFnQixJQUFJO2tCQUNKOUIsU0FBUyxFQUFDLHNCQUFzQjtrQkFDaENsRixLQUFLLEVBQUUrQyxRQUFRLENBQUNoRCxZQUFZO2tCQUM1QmtILE9BQU8sRUFBRWhCLFlBQUEsQ0FBQWlCLG1CQUFtQjtrQkFDNUJDLEtBQUssRUFBRTtvQkFBRXBFO2tCQUFRO2dCQUFFLEVBRXBCO2dCQUNEcUUsS0FBSyxFQUFFeEQsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLE1BQUEsQ0FBQW1CLEtBQUs7a0JBQUN2QixJQUFJLEVBQUU7Z0JBQXVCOztZQUMzQyxFQUNBLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQTVCLFdBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBb0ssTUFBQSxHQUFBcEssT0FBQTtVQUNBLElBQUE4SSxLQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFxSyxZQUFBLEdBQUFySyxPQUFBO1VBRUEsSUFBQXNLLGNBQUEsR0FBQXRLLE9BQUE7VUFDQSxJQUFBdUssVUFBQSxHQUFBdkssT0FBQTtVQUVPO1VBQVUsU0FDUndLLHVCQUF1QkEsQ0FBQztZQUFFeEg7VUFBSSxDQUFFO1lBQ3hDLE1BQU07Y0FBRTNDLEtBQUs7Y0FBRWdILGFBQWE7Y0FBRWpGO1lBQUssQ0FBRSxHQUFHLElBQUE2RSxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQzdELE1BQU07Y0FBRXBGLGdCQUFnQixFQUFFMkQ7WUFBUSxDQUFFLEdBQUd4RixLQUFLO1lBQzVDLE1BQU1vSyxJQUFJLEdBQUd6SCxJQUFJLENBQUN5RixVQUFVLENBQUM1SCxHQUFHLENBQUNnRixRQUFRLENBQUN4QixFQUFFLENBQUM7WUFDN0MsTUFBTSxDQUFDcUcsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2pFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1tRCxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkQsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztZQUMzQixDQUFDO1lBQ0QsSUFBSSxDQUFDRCxJQUFJLEVBQUU7Y0FDVjVGLE9BQU8sQ0FBQ2dHLElBQUksQ0FBQyxZQUFZN0gsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksa0NBQWtDLEVBQUVGLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTTJFLE9BQU8sR0FBR21ELEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCM0ssS0FBSyxDQUFDaUYsZ0JBQWdCLENBQUN0QyxJQUFJLENBQUNxQixFQUFFLENBQUM7Y0FDL0JnRCxhQUFhLENBQUM7Z0JBQ2IzRyxJQUFJLEVBQUUsSUFBSTtnQkFDVmtELElBQUksRUFBRSxTQUFTO2dCQUNmNkcsSUFBSSxFQUFFO2tCQUNMdkksZ0JBQWdCLEVBQUUyRCxRQUFRLENBQUN4QixFQUFFO2tCQUM3QndCLFFBQVE7a0JBQ1JMLFdBQVcsRUFBRXhDOztlQUVkLENBQUM7Y0FDRixPQUFPLEtBQUs7WUFDYixDQUFDO1lBRUQsT0FDQzBELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBc0IsR0FDcEN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUQsWUFBQSxDQUFBWSxvQkFBb0I7Y0FBQ0MsVUFBVSxFQUFFLENBQUMsQ0FBQ1QsSUFBSSxFQUFFVSxRQUFRLEVBQUVDLFVBQVU7Y0FBRVIsUUFBUSxFQUFFQSxRQUFRO2NBQUVTLElBQUksRUFBRVg7WUFBVSxHQUNuR2hFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxZQUFBLENBQUFpQixpQkFBaUI7Y0FBQ3RELFNBQVMsRUFBQztZQUFrRCxHQUM5RXRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBc0MsR0FDcER0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0osTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NELE1BQUEsQ0FBQW1CLEtBQUs7Y0FBQ3ZELFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ3dELEdBQUcsRUFBRXhJLElBQUksQ0FBQ0MsSUFBSSxDQUFDd0k7WUFBUSxFQUFJLEVBQzdEL0UsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBMEUsSUFBSTtjQUNKMUQsU0FBUyxFQUFDLFdBQVc7Y0FDckIyRCxJQUFJLEVBQUUsY0FBY3RMLEtBQUssQ0FBQ3VCLFlBQVksY0FBY29CLElBQUksQ0FBQ0MsSUFBSSxDQUFDb0IsRUFBRSxFQUFFO2NBQ2xFc0QsT0FBTyxFQUFFQTtZQUFPLEdBRWhCakIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzlELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQU0sQ0FDbkIsQ0FDQyxFQUNUd0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsY0FDQ0osTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBMEUsSUFBSTtjQUNKMUQsU0FBUyxFQUFDLFdBQVc7Y0FDckIyRCxJQUFJLEVBQUUsY0FBY3RMLEtBQUssQ0FBQ3VCLFlBQVksY0FBY29CLElBQUksQ0FBQ0MsSUFBSSxDQUFDb0IsRUFBRSxFQUFFO2NBQ2xFc0QsT0FBTyxFQUFFQTtZQUFPLEdBRWhCakIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzlELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQU0sQ0FDbkIsRUFDUHdELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU1rQixTQUFTLEVBQUM7WUFBaUMsR0FDaER0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxXQUFBLENBQUF5QyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRSxDQUFDLENBQUNlLElBQUksRUFBRVUsUUFBUSxFQUFFUyxPQUFPO2NBQ3BDakMsT0FBTztjQUNQQyxPQUFPLEVBQUU7Z0JBQ1JDLElBQUksRUFBRW5ELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUFKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBRSxRQUFBLFFBQUcwRCxJQUFJLEVBQUVVLFFBQVEsRUFBRVMsT0FBTyxDQUFJO2dCQUNwQzFCLEtBQUssRUFBRXhELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUFKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBRSxRQUFBLFFBQUczRSxLQUFLLENBQUNxRyxVQUFVLENBQUNvRCxTQUFTOztZQUNwQyxFQUNBLENBQ0ksQ0FDRixDQUNELEVBRU5uRixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0MsS0FBQSxDQUFBZ0IsSUFBSTtjQUNKOUIsU0FBUyxFQUFDLHlDQUF5QztjQUNuRGxGLEtBQUssRUFBRTJILElBQUksRUFBRVUsUUFBUSxFQUFFQyxVQUFVO2NBQ2pDckIsT0FBTyxFQUFFTyxjQUFBLENBQUF3QjtZQUEyQixFQUNuQyxDQUNpQixFQUNwQnBGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxZQUFBLENBQUEwQixrQkFBa0I7Y0FBQy9ELFNBQVMsRUFBQztZQUEyQyxHQUN4RXRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNnQyxLQUFBLENBQUFnQixJQUFJO2NBQUNoSCxLQUFLLEVBQUUySCxJQUFJLEVBQUVVLFFBQVEsRUFBRUMsVUFBVTtjQUFFckIsT0FBTyxFQUFFUSxVQUFBLENBQUF5QjtZQUFrQyxFQUFJLENBQ3BFLENBQ0MsQ0FDbEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4RkEsSUFBQXRGLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBZ0gsV0FBQSxHQUFBaEgsT0FBQTtVQUNBLElBQUFpTSxLQUFBLEdBQUFqTSxPQUFBO1VBQ0EsSUFBQWtNLGVBQUEsR0FBQWxNLE9BQUE7VUFDQSxJQUFBbU0sT0FBQSxHQUFBbk0sT0FBQTtVQUVNLFNBQVVnSyxtQkFBbUJBLENBQUM7WUFBRWhILElBQUk7WUFBRTZDLFFBQVE7WUFBRSxHQUFHb0U7VUFBSyxDQUFFO1lBQy9ELE1BQU1WLElBQUksR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDbkcsUUFBUSxDQUFDeUMsUUFBUSxDQUFDMEQsSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHMUQsUUFBUSxDQUFDMEQsSUFBSTtZQUU1RyxPQUNDN0MsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBeUMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVILElBQUk7Y0FDZkssT0FBTyxFQUFFO2dCQUNSd0MsSUFBSSxFQUFFMUYsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21GLEtBQUEsQ0FBQXpCLHVCQUF1QjtrQkFBQ3hILElBQUksRUFBRUE7Z0JBQUksRUFBSTtnQkFDN0NxSixNQUFNLEVBQUUzRixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUYsT0FBQSxDQUFBRyx5QkFBeUI7a0JBQUN0SixJQUFJLEVBQUVBO2dCQUFJLEVBQUk7Z0JBQ2pELGlCQUFpQixFQUFFMEQsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29GLGVBQUEsQ0FBQUssaUNBQWlDO2tCQUFDdkosSUFBSSxFQUFFQTtnQkFBSTs7WUFDaEUsRUFDQTtVQUVKOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBMEQsTUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQW9LLE1BQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBZ0gsV0FBQSxHQUFBaEgsT0FBQTtVQUdPO1VBQVUsU0FDUnVNLGlDQUFpQ0EsQ0FBQztZQUFFdko7VUFBSSxDQUFFO1lBQ2xELE1BQU07Y0FDTDNDLEtBQUs7Y0FDTGdILGFBQWE7Y0FDYmpGLEtBQUssRUFBRTtnQkFDTnFHLFVBQVUsRUFBRTtrQkFBRStELGNBQWMsRUFBRXBLO2dCQUFLO2NBQUU7WUFDckMsQ0FDRCxHQUFHLElBQUE2RSxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3pCLE1BQU07Y0FBRXBGLGdCQUFnQixFQUFFMkQ7WUFBUSxDQUFFLEdBQUd4RixLQUFLO1lBQzVDLE1BQU1vSyxJQUFJLEdBQUd6SCxJQUFJLENBQUN5RixVQUFVLENBQUM1SCxHQUFHLENBQUNnRixRQUFRLENBQUN4QixFQUFFLENBQUM7WUFFN0MsTUFBTSxDQUFDcUcsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2pFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXpELElBQUksQ0FBQ2dELElBQUksRUFBRTtjQUNWNUYsT0FBTyxDQUFDZ0csSUFBSSxDQUFDLFlBQVk3SCxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxrQ0FBa0MsRUFBRUYsSUFBSSxDQUFDO2NBQ2hGLE9BQU8sSUFBSTs7WUFHWixNQUFNMkUsT0FBTyxHQUFHbUQsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkQsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Y0FDdEIsTUFBTW5KLFFBQVEsR0FBR3hCLEtBQUssQ0FBQ2lGLGdCQUFnQixDQUFDdEMsSUFBSSxDQUFDcUIsRUFBRSxDQUFDO2NBQ2hEZ0QsYUFBYSxDQUFDO2dCQUNiM0csSUFBSSxFQUFFLElBQUk7Z0JBQ1ZrRCxJQUFJLEVBQUUsU0FBUztnQkFDZjZHLElBQUksRUFBRTtrQkFDTDVJLFFBQVE7a0JBQ1JLLGdCQUFnQixFQUFFMkQsUUFBUSxDQUFDeEIsRUFBRTtrQkFDN0JtQixXQUFXLEVBQUV4Qzs7ZUFFZCxDQUFDO2NBQ0YsT0FBTyxLQUFLO1lBQ2IsQ0FBQztZQUNELE1BQU15SixtQkFBbUIsR0FBR3pKLElBQUksQ0FBQ3lGLFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ2dGLFFBQVEsQ0FBQ3hCLEVBQUUsQ0FBQztZQUU1RCxNQUFNO2NBQUVxSSxPQUFPO2NBQUVDLEtBQUs7Y0FBRUM7WUFBSyxDQUFFLEdBQUdILG1CQUFtQixDQUFDSSxRQUFRO1lBQzlELE1BQU1DLEdBQUcsR0FBRyxrQkFBa0JKLE9BQU8sR0FBR0MsS0FBSyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxjQUFjLEdBQUc7WUFFeEYsT0FDQ2pHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBc0IsR0FDcEN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQThCLEdBQzVDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBMEUsSUFBSTtjQUFDQyxJQUFJLEVBQUUsY0FBY3RMLEtBQUssQ0FBQ3VCLFlBQVksY0FBY29CLElBQUksQ0FBQ0MsSUFBSSxDQUFDb0IsRUFBRSxFQUFFO2NBQUVzRCxPQUFPLEVBQUVBO1lBQU8sR0FDekZqQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NELE1BQUEsQ0FBQW1CLEtBQUs7Y0FBQ3ZELFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ3dELEdBQUcsRUFBRXhJLElBQUksQ0FBQ0MsSUFBSSxDQUFDd0k7WUFBUSxFQUFJLEVBQzdEL0UsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzlELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQU0sQ0FDcEIsQ0FDQSxFQUNQd0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFzQyxHQUNwRHRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU1rQixTQUFTLEVBQUU4RTtZQUFHLEdBQ2xCTCxtQkFBbUIsQ0FBQ0ksUUFBUSxDQUFDSCxPQUFPLEUsT0FBS0QsbUJBQW1CLENBQUNJLFFBQVEsQ0FBQ0YsS0FBSyxDQUN0RSxDQUNGLENBQ0QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlEQSxJQUFBSSxLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBNkksTUFBQSxHQUFBN0ksT0FBQTtVQUNNLFNBQVVnTSxrQ0FBa0NBLENBQUM7WUFBRWhKO1VBQUksQ0FBRTtZQUMxRCxJQUFJLENBQUNBLElBQUksRUFBRTtjQUNWLE9BQU8sSUFBSTs7WUFFWixNQUFNO2NBQUVFLElBQUk7Y0FBRThKO1lBQVEsQ0FBRSxHQUFHaEssSUFBSTtZQUMvQixNQUFNO2NBQUVaO1lBQUssQ0FBRSxHQUFHLElBQUE2RSxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3ZDLE1BQU0yRixTQUFTLEdBQUc7Y0FDakIsYUFBYSxFQUFFLG9CQUFvQjtjQUNuQ0MsT0FBTyxFQUFFLGlCQUFpQjtjQUMxQkMsU0FBUyxFQUFFLG1CQUFtQjtjQUM5QkMsV0FBVyxFQUFFO2FBQ2I7WUFDRCxNQUFNQyxNQUFNLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUNqSyxRQUFRLENBQUMsT0FBT0osSUFBSSxDQUFDcUssTUFBTSxDQUFDLEdBQUdySyxJQUFJLENBQUNxSyxNQUFNLEdBQUdySyxJQUFJLENBQUNxSyxNQUFNLENBQUN6RSxJQUFJO1lBQ3BHLE9BQ0NtRSxLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBeUMsR0FDdkQrRSxLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBNEIsR0FDMUMrRSxLQUFBLENBQUFqRyxhQUFBLGNBQ0NpRyxLQUFBLENBQUFqRyxhQUFBLGFBQUs1RCxJQUFJLENBQU0sQ0FDVixFQUNONkosS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFFLHdDQUF3Q3FGLE1BQU07WUFBRSxHQUMvRE4sS0FBQSxDQUFBakcsYUFBQSxlQUFPMUUsS0FBSyxDQUFDcUcsVUFBVSxDQUFDNkUsZ0JBQWdCLENBQUNELE1BQU0sQ0FBQyxDQUFRLEVBQ3hETixLQUFBLENBQUFqRyxhQUFBLENBQUMrQixNQUFBLENBQUEwRSxPQUFPO2NBQUNuRixJQUFJLEVBQUU2RSxTQUFTLENBQUNJLE1BQU0sQ0FBQztjQUFFckYsU0FBUyxFQUFFLDhCQUE4QnFGLE1BQU07WUFBRSxFQUFJLENBQ2xGLENBQ0QsRUFDTk4sS0FBQSxDQUFBakcsYUFBQSxZQUFJa0csUUFBUSxHQUFHQSxRQUFRLEdBQUc1SyxLQUFLLENBQUNxRyxVQUFVLENBQUMrRSxVQUFVLENBQUssQ0FDckQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQTlHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFvSyxNQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQWdILFdBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBeU4sUUFBQSxHQUFBek4sT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQThJLEtBQUEsR0FBQTlJLE9BQUE7VUFJTztVQUFVLFNBQ1JzTSx5QkFBeUJBLENBQUM7WUFBRXRKO1VBQUksQ0FBRTtZQUMxQyxNQUFNO2NBQUUzQyxLQUFLO2NBQUVnSDtZQUFhLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3RELE1BQU07Y0FBRXBGLGdCQUFnQixFQUFFMkQ7WUFBUSxDQUFFLEdBQUd4RixLQUFLO1lBQzVDLE1BQU1vSyxJQUFJLEdBQUd6SCxJQUFJLENBQUN5RixVQUFVLENBQUM1SCxHQUFHLENBQUNnRixRQUFRLENBQUN4QixFQUFFLENBQUM7WUFDN0MsTUFBTSxDQUFDcUcsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2pFLE1BQUEsQ0FBQUcsT0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1tRCxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQkQsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztZQUMzQixDQUFDO1lBQ0QsSUFBSSxDQUFDRCxJQUFJLEVBQUU7Y0FDVjVGLE9BQU8sQ0FBQ2dHLElBQUksQ0FBQyxZQUFZN0gsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksa0NBQWtDLEVBQUVGLElBQUksQ0FBQztjQUNoRixPQUFPLElBQUk7O1lBR1osTUFBTTJFLE9BQU8sR0FBR21ELEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCLE1BQU1uSixRQUFRLEdBQUd4QixLQUFLLENBQUNpRixnQkFBZ0IsQ0FBQ3RDLElBQUksQ0FBQ3FCLEVBQUUsQ0FBQztjQUNoRGdELGFBQWEsQ0FBQztnQkFDYjNHLElBQUksRUFBRSxJQUFJO2dCQUNWa0QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2Y2RyxJQUFJLEVBQUU7a0JBQ0w1SSxRQUFRO2tCQUNSSyxnQkFBZ0IsRUFBRTJELFFBQVEsQ0FBQ3hCLEVBQUU7a0JBQzdCbUIsV0FBVyxFQUFFeEM7O2VBRWQsQ0FBQztjQUNGLE9BQU8sS0FBSztZQUNiLENBQUM7WUFDRCxNQUFNeUosbUJBQW1CLEdBQUd6SixJQUFJLENBQUN5RixVQUFVLENBQUM1SCxHQUFHLENBQUNnRixRQUFRLENBQUN4QixFQUFFLENBQUM7WUFDNUQsTUFBTXFKLFNBQVMsR0FBR0EsQ0FBQztjQUFFMUssSUFBSSxFQUFFMks7WUFBUyxDQUFFLEtBQUk7Y0FDekMsT0FDQ2pILE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUMyRyxRQUFBLENBQUFHLE9BQU87Z0JBQUNDLE9BQU8sRUFBRUYsU0FBUyxDQUFDQTtjQUFTLEdBQ3BDakgsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQTBFLE9BQU87Z0JBQUNuRixJQUFJLEVBQUUsU0FBU3VGLFNBQVMsQ0FBQ0csTUFBTTtjQUFFLEVBQUksQ0FDckM7WUFFWixDQUFDO1lBRUQsT0FDQ3BILE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBc0IsR0FDcEN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQWtFLEdBQ2hGdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBMEUsSUFBSTtjQUFDQyxJQUFJLEVBQUUsY0FBY3RMLEtBQUssQ0FBQ3VCLFlBQVksY0FBY29CLElBQUksQ0FBQ0MsSUFBSSxDQUFDb0IsRUFBRSxFQUFFO2NBQUVzRCxPQUFPLEVBQUVBO1lBQU8sR0FDekZqQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NELE1BQUEsQ0FBQW1CLEtBQUs7Y0FBQ3ZELFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ3dELEdBQUcsRUFBRXhJLElBQUksQ0FBQ0MsSUFBSSxDQUFDd0k7WUFBUSxFQUFJLEVBQzdEL0UsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzlELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQU0sQ0FDcEIsQ0FDQSxFQUVQd0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsY0FDQ0osTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dDLEtBQUEsQ0FBQWdCLElBQUk7Y0FBQzlCLFNBQVMsRUFBQyxlQUFlO2NBQUNsRixLQUFLLEVBQUUySixtQkFBbUIsQ0FBQ3JCLFVBQVU7Y0FBRXJCLE9BQU8sRUFBRTJEO1lBQVMsRUFBSSxDQUN4RixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUEsSUFBQVgsS0FBQSxHQUFBL00sT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBRUEsSUFBQStOLGNBQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBZ0osTUFBQSxHQUFBaEosT0FBQTtVQUZBOztVQUtNLFNBQVVnTyxnQ0FBZ0NBLENBQUM7WUFBRWhMLElBQUk7WUFBRW5CO1VBQVEsQ0FBRTtZQUNsRSxNQUFNO2NBQUVPO1lBQUssQ0FBRSxHQUFHLElBQUE2RSxRQUFBLENBQUFnSCxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNQyxHQUFHLEdBQUduQixLQUFLLENBQUNvQixNQUFNLEVBQUU7WUFFMUIsTUFBTUMsU0FBUyxHQUFHdk0sUUFBUSxDQUFDNEcsVUFBVSxDQUFDaEQsR0FBRyxDQUFDNUUsR0FBRyxDQUFDbUMsSUFBSSxDQUFDNkMsUUFBUSxDQUFDeEIsRUFBRSxDQUFDO1lBQy9ELE1BQU1nSyxNQUFNLEdBQUdELFNBQVMsRUFBRXBJLFNBQVMsRUFBRTNCLEVBQUU7WUFFdkMsSUFBSSxDQUFDK0osU0FBUyxDQUFDcEksU0FBUyxDQUFDUyxRQUFRLENBQUMzRCxLQUFLLENBQUNZLE1BQU0sRUFBRTtjQUMvQyxPQUNDcUosS0FBQSxDQUFBakcsYUFBQTtnQkFBS2tCLFNBQVMsRUFBQyxVQUFVO2dCQUFDa0csR0FBRyxFQUFFQTtjQUFHLEdBQ2pDbkIsS0FBQSxDQUFBakcsYUFBQSxDQUFDa0MsTUFBQSxDQUFBc0YsU0FBUyxPQUFHLENBQ1I7O1lBSVIsT0FDQ3ZCLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQyxVQUFVO2NBQUNrRyxHQUFHLEVBQUVBO1lBQUcsR0FDaENFLFNBQVMsQ0FBQ3BJLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDM0QsS0FBSyxDQUFDeUwsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM5SSxHQUFHLENBQUN6QyxJQUFJLElBQUc7Y0FDeEQrSixLQUFBLENBQUFqRyxhQUFBLGNBQU05RCxJQUFJLENBQUM0RixJQUFJLENBQU87WUFDdkIsQ0FBQyxDQUFDLENBQ0c7WUFFUCxPQUNDbUUsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDLFVBQVU7Y0FBQ2tHLEdBQUcsRUFBRUE7WUFBRyxHQUNqQ25CLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ2lILGNBQUEsQ0FBQVMsbUJBQW1CO2NBQ25CcEMsSUFBSSxFQUFFZ0MsU0FBUyxFQUFFcEksU0FBUyxFQUFFM0IsRUFBRTtjQUM5QkEsRUFBRSxFQUFFZ0ssTUFBTTtjQUNWM0YsS0FBSyxFQUFFTSxNQUFBLENBQUFzRixTQUFTO2NBQ2hCbEcsSUFBSSxFQUFDO1lBQWlDLEdBRXRDMkUsS0FBQSxDQUFBakcsYUFBQSxDQUFDaUgsY0FBQSxDQUFBVSxlQUFlLE9BQUcsQ0FDRSxDQUNqQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBekYsTUFBQSxHQUFBaEosT0FBQTtVQUNBLElBQUEwRyxNQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFFTSxTQUFVc08sU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQ0xsTSxLQUFLLEVBQUU7Z0JBQ05nSyxJQUFJLEVBQUU7a0JBQUUxRCxLQUFLLEVBQUV0RztnQkFBSztjQUFFLENBQ3RCO2NBQ0QvQjtZQUFLLENBQ0wsR0FBRyxJQUFBNEcsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFFdEIsSUFBSSxDQUFDNU4sS0FBSyxFQUFFNEIsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUU5QixNQUFNO2NBQUVvRCxLQUFLO2NBQUVxSjtZQUFXLENBQUUsR0FBR3RNLEtBQUs7WUFFcEMsT0FDQ3NFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBWSxHQUMxQnRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxNQUFBLENBQUFtQixLQUFLO2NBQUMvQixJQUFJLEVBQUM7WUFBTSxHQUNqQjFCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGFBQUt6QixLQUFLLENBQU0sRUFDaEJxQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxlQUFPNEgsV0FBVyxDQUFRLENBQ25CLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQUMsS0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUErTSxLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQTRPLGFBQUEsR0FBQTVPLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUVBLElBQUFnSCxXQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQTZPLFdBQUEsR0FBQTdPLE9BQUE7VUFGQTs7VUFZQTs7Ozs7VUFLTSxTQUFVOE8saUNBQWlDQSxDQUFDQyxLQUFhO1lBQzlELE1BQU07Y0FBRS9MLElBQUk7Y0FBRUMsSUFBSTtjQUFFcEIsUUFBUTtjQUFFbU4sVUFBVTtjQUFFeEo7WUFBVyxDQUFFLEdBQUd1SixLQUFLO1lBQy9ELE1BQU07Y0FBRTNNLEtBQUs7Y0FBRWlGO1lBQWEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQWdILGdCQUFnQixHQUFFO1lBQ25ELE1BQU1HLFNBQVMsR0FBRzVJLFdBQVcsQ0FBQ2lELFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ21PLFVBQVUsQ0FBQztZQUN4RCxNQUFNWCxNQUFNLEdBQUdELFNBQVMsRUFBRXBJLFNBQVMsRUFBRTNCLEVBQUU7WUFDdkMsTUFBTSxDQUFDb0MsUUFBUSxFQUFFd0ksV0FBVyxDQUFDLEdBQUdsQyxLQUFLLENBQUN0RixRQUFRLENBQUMyRyxTQUFTLEVBQUVwSSxTQUFTLEVBQUVTLFFBQVEsQ0FBQzNELEtBQUssSUFBSSxFQUFFLENBQUM7WUFDMUZpSyxLQUFLLENBQUNtQyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNiLE1BQU0sRUFBRTtjQUNiLE1BQU1jLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2dCQUMxQkYsV0FBVyxDQUFDLENBQUMsR0FBR2IsU0FBUyxDQUFDcEksU0FBUyxDQUFDUyxRQUFRLENBQUMzRCxLQUFLLENBQUMsQ0FBQztjQUNyRCxDQUFDO2NBQ0RzTCxTQUFTLENBQUNwSSxTQUFTLENBQUM5QixFQUFFLENBQUMsUUFBUSxFQUFFaUwsYUFBYSxDQUFDO2NBQy9DLE9BQU8sTUFBSztnQkFDWGYsU0FBUyxDQUFDcEksU0FBUyxDQUFDb0osR0FBRyxDQUFDLFFBQVEsRUFBRUQsYUFBYSxDQUFDO2NBQ2pELENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQ2QsTUFBTSxDQUFDLENBQUM7WUFFWixNQUFNZ0IsSUFBSSxHQUFHLEVBQUU7WUFFZixJQUFJck0sSUFBSSxDQUFDbUksUUFBUSxFQUFFQyxVQUFVLEVBQUVpRSxJQUFJLENBQUNDLElBQUksQ0FBQ3ZDLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQzZILEtBQUEsQ0FBQVksR0FBRztjQUFDQyxHQUFHLEVBQUM7WUFBWSxHQUFFcE4sS0FBSyxDQUFDcUcsVUFBVSxDQUFDMkMsVUFBVSxDQUFPLENBQUM7WUFFbkcsTUFBTXFFLFlBQVksR0FBR3pNLElBQUksQ0FBQ3lNLFlBQVksR0FBR3pNLElBQUksQ0FBQ3lNLFlBQVksR0FBR3pNLElBQUksQ0FBQ3lELFFBQVEsRUFBRWlKLEtBQUs7WUFDakZMLElBQUksQ0FBQ0MsSUFBSSxDQUNSdkMsS0FBQSxDQUFBakcsYUFBQSxDQUFDNkgsS0FBQSxDQUFBWSxHQUFHO2NBQUNDLEdBQUcsRUFBQztZQUFTLEdBQ2pCekMsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQVksR0FDekI1RixLQUFLLENBQUNxRyxVQUFVLENBQUMyRCxJQUFJLENBQUN1RCxHQUFHLEVBQ3pCM00sSUFBSSxDQUFDeUQsUUFBUSxFQUFFaUosS0FBSyxHQUFHM0MsS0FBQSxDQUFBakcsYUFBQTtjQUFHa0IsU0FBUyxFQUFDO1lBQWUsR0FBRXlILFlBQVksQ0FBSyxHQUFHLElBQUksQ0FDekUsQ0FDRCxDQUNOO1lBRUQsSUFBSXpNLElBQUksRUFBRTRNLE1BQU0sRUFBRWxNLE1BQU0sRUFDdkIyTCxJQUFJLENBQUNDLElBQUksQ0FDUnZDLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQzZILEtBQUEsQ0FBQVksR0FBRztjQUFDQyxHQUFHLEVBQUMsUUFBUTtjQUFDeEgsU0FBUyxFQUFDO1lBQVksR0FDdkMrRSxLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBWSxHQUN6QjVGLEtBQUssQ0FBQ3dOLE1BQU0sRUFDYjdDLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBTWtCLFNBQVMsRUFBQztZQUFxQyxHQUFFaEYsSUFBSSxDQUFDNE0sTUFBTSxDQUFDbE0sTUFBTSxDQUFRLENBQzVFLENBQ0QsQ0FDTjtZQUVGLE1BQU1tTSxRQUFRLEdBQUcvRSxLQUFLLElBQUc7Y0FDeEI5SCxJQUFJLENBQUM4TSxRQUFRLEVBQUU7Y0FFZnpJLGFBQWEsQ0FBQztnQkFDYjNHLElBQUksRUFBRSxJQUFJO2dCQUNWa0QsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCNkcsSUFBSSxFQUFFO2tCQUNMNUksUUFBUTtrQkFDUjJELFdBQVc7a0JBQ1hpSCxtQkFBbUIsRUFBRXpKLElBQUk7a0JBQ3pCb0osSUFBSSxFQUFFZ0MsU0FBUyxDQUFDcEk7O2VBRWpCLENBQUM7WUFDSCxDQUFDO1lBRUQsT0FDQytHLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQzZILEtBQUEsQ0FBQW9CLGFBQWE7Y0FBQ0MsTUFBTSxFQUFFO1lBQUMsR0FDdkJqRCxLQUFBLENBQUFqRyxhQUFBLENBQUM2SCxLQUFBLENBQUFzQixJQUFJO2NBQUNqSSxTQUFTLEVBQUM7WUFBYyxHQUFFcUgsSUFBSSxDQUFRLEVBQzVDdEMsS0FBQSxDQUFBakcsYUFBQSxDQUFDNkgsS0FBQSxDQUFBdUIsS0FBSyxRQUNKbE4sSUFBSSxDQUFDbUksUUFBUSxFQUFFQyxVQUFVLElBQUkyQixLQUFBLENBQUFqRyxhQUFBLENBQUMrSCxXQUFBLENBQUFzQixtQ0FBbUM7Y0FBQ25OLElBQUksRUFBRUEsSUFBSTtjQUFFbkIsUUFBUSxFQUFFQTtZQUFRLEVBQUksRUFDckdrTCxLQUFBLENBQUFqRyxhQUFBLGNBQ0NpRyxLQUFBLENBQUFqRyxhQUFBO2NBQVNrQixTQUFTLEVBQUM7WUFBdUIsR0FDekMrRSxLQUFBLENBQUFqRyxhQUFBLGFBQUsxRSxLQUFLLENBQUNxRyxVQUFVLENBQUNtRCxPQUFPLENBQU0sRUFDbkNtQixLQUFBLENBQUFqRyxhQUFBLFlBQUk5RCxJQUFJLENBQUNvTixTQUFTLENBQUssRUFDdkJyRCxLQUFBLENBQUFqRyxhQUFBLENBQUNFLFdBQUEsQ0FBQXlDLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFLENBQUMsQ0FBQytGLFlBQVk7Y0FDekI5RixPQUFPO2NBQ1BDLE9BQU8sRUFBRTtnQkFDUkMsSUFBSSxFQUNIa0QsS0FBQSxDQUFBakcsYUFBQTtrQkFBUWtCLFNBQVMsRUFBQztnQkFBK0IsR0FDaEQrRSxLQUFBLENBQUFqRyxhQUFBLENBQUNFLFdBQUEsQ0FBQWtCLE1BQU07a0JBQUNQLE9BQU8sRUFBRWtJLFFBQVE7a0JBQUU3SCxTQUFTLEVBQUMsV0FBVztrQkFBQ3FJLE9BQU8sRUFBQyxTQUFTO2tCQUFDbEksUUFBUTtnQkFBQSxHQUN6RS9GLEtBQUssQ0FBQ3FHLFVBQVUsQ0FBQzJELElBQUksQ0FBQ3JFLE1BQU0sQ0FDckIsQ0FFVjtnQkFDRG1DLEtBQUssRUFBRTs7WUFDUCxFQUNBLENBQ08sQ0FDTCxFQUVONkMsS0FBQSxDQUFBakcsYUFBQSxDQUFDOEgsYUFBQSxDQUFBMEIsV0FBVztjQUFDVixNQUFNLEVBQUU1TSxJQUFJLEVBQUU0TSxNQUFNO2NBQUUzTSxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUMxQyxDQUNPO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNHQSxJQUFBOEosS0FBQSxHQUFBL00sT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFFTSxTQUFVZ00sa0NBQWtDQSxDQUFDO1lBQUVoSjtVQUFJLENBQUU7WUFDMUQsTUFBTTtjQUFFRSxJQUFJO2NBQUU4SjtZQUFRLENBQUUsR0FBR2hLLElBQUk7WUFDL0IsTUFBTTtjQUFFWjtZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTWhCLFNBQVMsR0FBRztjQUNqQixhQUFhLEVBQUUsb0JBQW9CO2NBQ25DQyxPQUFPLEVBQUUsaUJBQWlCO2NBQzFCQyxTQUFTLEVBQUUsbUJBQW1CO2NBQzlCQyxXQUFXLEVBQUU7YUFDYjtZQUVELE1BQU1DLE1BQU0sR0FBRyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQ2pLLFFBQVEsQ0FBQyxPQUFPSixJQUFJLENBQUNxSyxNQUFNLENBQUMsR0FBR3JLLElBQUksQ0FBQ3FLLE1BQU0sR0FBR3JLLElBQUksQ0FBQ3FLLE1BQU0sQ0FBQ3pFLElBQUk7WUFDcEcsT0FDQ21FLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUF5QyxHQUN2RCtFLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUE0QixHQUMxQytFLEtBQUEsQ0FBQWpHLGFBQUEsY0FDQ2lHLEtBQUEsQ0FBQWpHLGFBQUEsYUFBSzVELElBQUksQ0FBTSxFQUNmNkosS0FBQSxDQUFBakcsYUFBQSxZQUFJa0csUUFBUSxHQUFHQSxRQUFRLEdBQUc1SyxLQUFLLENBQUNxRyxVQUFVLENBQUMrRSxVQUFVLENBQUssQ0FDckQsRUFDTlQsS0FBQSxDQUFBakcsYUFBQSxjQUNDaUcsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFFLHdDQUF3Q3FGLE1BQU07WUFBRSxHQUMvRE4sS0FBQSxDQUFBakcsYUFBQSxlQUFPMUUsS0FBSyxDQUFDcUcsVUFBVSxDQUFDNkUsZ0JBQWdCLENBQUNELE1BQU0sQ0FBQyxDQUFRLEVBQ3hETixLQUFBLENBQUFqRyxhQUFBLENBQUMrQixNQUFBLENBQUEwRSxPQUFPO2NBQUNuRixJQUFJLEVBQUU2RSxTQUFTLENBQUNJLE1BQU0sQ0FBQztjQUFFckYsU0FBUyxFQUFFLDhCQUE4QnFGLE1BQU07WUFBRSxFQUFJLENBQ2xGLENBQ0QsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUF2RSxLQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQStNLEtBQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUF1SyxVQUFBLEdBQUF2SyxPQUFBO1VBQ0E7VUFFTSxTQUFVbVEsbUNBQW1DQSxDQUFDO1lBQUVuTixJQUFJO1lBQUVuQjtVQUFRLENBQUU7WUFDckUsTUFBTTtjQUFFTztZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ2xCLEtBQUEsQ0FBQWpHLGFBQUEsY0FDQ2lHLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFxQixHQUNuQytFLEtBQUEsQ0FBQWpHLGFBQUEsWUFBSTlELElBQUksQ0FBQ21JLFFBQVEsRUFBRVMsT0FBTyxDQUFLLENBQzFCLEVBQ0w1SSxJQUFJLENBQUNtSSxRQUFRLEVBQUVDLFVBQVUsSUFDekIyQixLQUFBLENBQUFqRyxhQUFBLGNBQ0NpRyxLQUFBLENBQUFqRyxhQUFBO2NBQUlrQixTQUFTLEVBQUM7WUFBTyxHQUFFNUYsS0FBSyxDQUFDcUcsVUFBVSxDQUFDOEgsT0FBTyxDQUFNLEVBQ3JEeEQsS0FBQSxDQUFBakcsYUFBQSxDQUFDZ0MsS0FBQSxDQUFBZ0IsSUFBSTtjQUNKOUIsU0FBUyxFQUFDLGVBQWU7Y0FDekJsRixLQUFLLEVBQUVFLElBQUksQ0FBQ21JLFFBQVEsRUFBRUMsVUFBVTtjQUNoQ3JCLE9BQU8sRUFBRVEsVUFBQSxDQUFBeUI7WUFBa0MsRUFDMUMsQ0FFSCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUFuRCxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQXFLLFlBQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBZ0gsV0FBQSxHQUFBaEgsT0FBQTtVQUNBLElBQUErTSxLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBaU0sS0FBQSxHQUFBak0sT0FBQTtVQUNBLElBQUFrTSxlQUFBLEdBQUFsTSxPQUFBO1VBQ0EsSUFBQW1NLE9BQUEsR0FBQW5NLE9BQUE7VUFFQTs7Ozs7VUFLTSxTQUFVd1EseUJBQXlCQSxDQUFDO1lBQ3pDeE4sSUFBSSxFQUFFNkMsUUFBUTtZQUNkNUMsSUFBSTtZQUNKd04sS0FBSztZQUNMNU8sUUFBUTtZQUNSbU4sVUFBVTtZQUNWOU0sZ0JBQWdCO1lBQ2hCc0Q7VUFBVyxDQUNYO1lBQ0EsTUFBTTtjQUFFcEQ7WUFBSyxDQUFFLEdBQUcsSUFBQTZFLFFBQUEsQ0FBQWdILGdCQUFnQixHQUFFO1lBQ3BDLE1BQU15QyxlQUFlLEdBQUdsTCxXQUFXLENBQUNpRCxVQUFVLENBQUNrSSxHQUFHLENBQUM5SyxRQUFRLENBQUN4QixFQUFFLENBQUM7WUFDL0QsTUFBTXJCLElBQUksR0FBR3dDLFdBQVcsQ0FBQ2lELFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ2dGLFFBQVEsQ0FBQ3hCLEVBQUUsQ0FBQztZQUNwRCxNQUFNZ0gsSUFBSSxHQUFJLENBQUNuSixnQkFBZ0IsSUFBSXVPLEtBQUssS0FBSyxDQUFDLElBQUt2TyxnQkFBZ0IsS0FBSzJELFFBQVEsQ0FBQ3hCLEVBQUU7WUFDbkYsTUFBTSxDQUFDcUcsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR29DLEtBQUssQ0FBQ3RGLFFBQVEsQ0FBQzRELElBQUksQ0FBQztZQUN4RCxNQUFNNkMsR0FBRyxHQUFHbkIsS0FBSyxDQUFDb0IsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNdkQsUUFBUSxHQUFHQSxDQUFBLEtBQU1ELGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDakQsTUFBTWtHLFNBQVMsR0FBRyw0QkFBNEJsRyxVQUFVLEdBQUcsU0FBUyxHQUFHLEVBQUUsSUFBSVcsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDcEcsSUFBSSxDQUFDMkQsVUFBVSxFQUFFQSxVQUFVLEdBQUduSixRQUFRLENBQUN4QixFQUFFO1lBRXpDMEksS0FBSyxDQUFDbUMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDN0QsSUFBSSxFQUFFO2NBQ1g2QyxHQUFHLENBQUMyQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO2NBQ3REN0MsR0FBRyxDQUFDMkMsT0FBTyxDQUFDRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQ0MsY0FBYyxDQUFDO2dCQUFFQyxRQUFRLEVBQUUsUUFBUTtnQkFBRUMsS0FBSyxFQUFFO2NBQUssQ0FBRSxDQUFDO2NBQy9GakwsVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZnSSxHQUFHLENBQUMyQyxPQUFPLEVBQUVDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO2NBQ3ZELENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDLEVBQUUsQ0FBQzFGLElBQUksQ0FBQyxDQUFDO1lBRVYsSUFBSSxDQUFDcUYsZUFBZSxFQUFFO2NBQ3JCLE9BQ0MzRCxLQUFBLENBQUFqRyxhQUFBO2dCQUFTa0IsU0FBUyxFQUFDLHNDQUFzQztnQkFBQ2tHLEdBQUcsRUFBRUE7Y0FBRyxHQUNqRW5CLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ3VELFlBQUEsQ0FBQVksb0JBQW9CLFFBQ3BCOEIsS0FBQSxDQUFBakcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBaUIsaUJBQWlCLFFBQ2pCeUIsS0FBQSxDQUFBakcsYUFBQTtnQkFBUWtCLFNBQVMsRUFBQztjQUFrQixHQUNuQytFLEtBQUEsQ0FBQWpHLGFBQUE7Z0JBQVNrQixTQUFTLEVBQUM7Y0FBNEIsR0FDOUMrRSxLQUFBLENBQUFqRyxhQUFBO2dCQUFTa0IsU0FBUyxFQUFFLGlDQUFpQ25DLFFBQVEsRUFBRTBELElBQUk7Y0FBRSxHQUNwRXdELEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQTBFLE9BQU87Z0JBQUNuRixJQUFJLEVBQUVTLE1BQUEsQ0FBQXVJLEtBQUssQ0FBQ3ZMLFFBQVEsQ0FBQzBELElBQUk7Y0FBQyxFQUFJLENBQzlCLEVBQ1Z3RCxLQUFBLENBQUFqRyxhQUFBLGNBQ0NpRyxLQUFBLENBQUFqRyxhQUFBLGFBQUtqQixRQUFRLENBQUNSLEtBQUssQ0FBTSxFQUN6QjBILEtBQUEsQ0FBQWpHLGFBQUEsY0FDQ2lHLEtBQUEsQ0FBQWpHLGFBQUEsZUFBTzFFLEtBQUssQ0FBQ3FHLFVBQVUsQ0FBQzRJLEtBQUssQ0FBQ3hMLFFBQVEsQ0FBQzBELElBQUksQ0FBQyxDQUFRLEVBQ3BEd0QsS0FBQSxDQUFBakcsYUFBQTtnQkFBS2tCLFNBQVMsRUFBQztjQUFpQixHQUFFNUYsS0FBSyxDQUFDcUcsVUFBVSxDQUFDNEUsTUFBTSxDQUFDSCxPQUFPLENBQU8sQ0FDbkUsQ0FDRCxDQUNHLENBQ0YsQ0FDVSxDQUNFLENBQ2Q7O1lBSVosT0FDQ0gsS0FBQSxDQUFBakcsYUFBQTtjQUFTa0IsU0FBUyxFQUFFNEksU0FBUztjQUFFMUMsR0FBRyxFQUFFQTtZQUFHLEdBQ3RDbkIsS0FBQSxDQUFBakcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBWSxvQkFBb0I7Y0FBQ1IsSUFBSSxFQUFFekgsSUFBSTtjQUFFNEgsUUFBUSxFQUFFQSxRQUFRO2NBQUVTLElBQUksRUFBRVg7WUFBVSxHQUNyRXFDLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ3VELFlBQUEsQ0FBQWlCLGlCQUFpQixRQUNqQnlCLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBUWtCLFNBQVMsRUFBQztZQUFrQixHQUNuQytFLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBU2tCLFNBQVMsRUFBQztZQUE0QixHQUM5QytFLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBU2tCLFNBQVMsRUFBRSxpQ0FBaUNuQyxRQUFRLEVBQUUwRCxJQUFJO1lBQUUsR0FDcEV3RCxLQUFBLENBQUFqRyxhQUFBLENBQUMrQixNQUFBLENBQUEwRSxPQUFPO2NBQUNuRixJQUFJLEVBQUVTLE1BQUEsQ0FBQXVJLEtBQUssQ0FBQ3ZMLFFBQVEsQ0FBQzBELElBQUk7WUFBQyxFQUFJLENBQzlCLEVBQ1Z3RCxLQUFBLENBQUFqRyxhQUFBLGNBQ0NpRyxLQUFBLENBQUFqRyxhQUFBLGFBQUtqQixRQUFRLENBQUNSLEtBQUssQ0FBTSxFQUN6QjBILEtBQUEsQ0FBQWpHLGFBQUEsZUFBTzFFLEtBQUssQ0FBQ3FHLFVBQVUsQ0FBQzRJLEtBQUssQ0FBQ3hMLFFBQVEsQ0FBQzBELElBQUksQ0FBQyxDQUFRLENBQy9DLENBQ0csQ0FDRixDQUNVLEVBQ3BCd0QsS0FBQSxDQUFBakcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBMEIsa0JBQWtCO2NBQUMvRCxTQUFTLEVBQUM7WUFBK0MsR0FDNUUrRSxLQUFBLENBQUFqRyxhQUFBLENBQUNFLFdBQUEsQ0FBQXlDLG9CQUFvQjtjQUNwQkMsU0FBUyxFQUFFN0QsUUFBUSxDQUFDMEQsSUFBSTtjQUN4QkssT0FBTyxFQUFFO2dCQUNSLGdCQUFnQixFQUNmbUQsS0FBQSxDQUFBakcsYUFBQSxDQUFDbUYsS0FBQSxDQUFBNkMsaUNBQWlDO2tCQUNqQ2pOLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJtQixJQUFJLEVBQUVBLElBQUk7a0JBQ1ZDLElBQUksRUFBRUEsSUFBSTtrQkFDVnVDLFdBQVcsRUFBRUEsV0FBVztrQkFDeEJ3SixVQUFVLEVBQUVBO2dCQUFVLEVBRXZCO2dCQUNELGdCQUFnQixFQUNmakMsS0FBQSxDQUFBakcsYUFBQSxDQUFDbUYsS0FBQSxDQUFBNkMsaUNBQWlDO2tCQUNqQ2pOLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJtQixJQUFJLEVBQUVBLElBQUk7a0JBQ1ZDLElBQUksRUFBRUEsSUFBSTtrQkFDVnVDLFdBQVcsRUFBRUEsV0FBVztrQkFDeEJ3SixVQUFVLEVBQUVBO2dCQUFVLEVBRXZCO2dCQUNEc0MsTUFBTSxFQUNMdkUsS0FBQSxDQUFBakcsYUFBQSxDQUFDbUYsS0FBQSxDQUFBNkMsaUNBQWlDO2tCQUNqQ2pOLFFBQVEsRUFBRUEsUUFBUTtrQkFDbEJtQixJQUFJLEVBQUVBLElBQUk7a0JBQ1ZDLElBQUksRUFBRUEsSUFBSTtrQkFDVnVDLFdBQVcsRUFBRUEsV0FBVztrQkFDeEJ3SixVQUFVLEVBQUVBO2dCQUFVLEVBRXZCO2dCQUNELGlCQUFpQixFQUNoQmpDLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ29GLGVBQUEsQ0FBQXFGLDJDQUEyQztrQkFDM0N2TyxJQUFJLEVBQUVBLElBQUk7a0JBQ1ZDLElBQUksRUFBRUEsSUFBSTtrQkFDVitMLFVBQVUsRUFBRUE7Z0JBQVUsRUFFdkI7Z0JBQ0QzQyxNQUFNLEVBQ0xVLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ3FGLE9BQUEsQ0FBQXFGLG1DQUFtQztrQkFDbkN4TyxJQUFJLEVBQUVBLElBQUk7a0JBQ1Z3QyxXQUFXLEVBQUVBLFdBQVc7a0JBQ3hCM0QsUUFBUSxFQUFFQSxRQUFRO2tCQUNsQm1OLFVBQVUsRUFBRUE7Z0JBQVU7O1lBR3hCLEVBQ0EsQ0FDa0IsQ0FDQyxDQUNkO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdklBLElBQUFqQyxLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFJTSxTQUFVeVIsc0RBQXNEQSxDQUFDO1lBQUV6TyxJQUFJO1lBQUUwTyxNQUFNO1lBQUVDLGFBQWE7WUFBRWxCO1VBQUssQ0FBRTtZQUM1RyxNQUFNO2NBQUVyTztZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTTJELFFBQVEsR0FBR25CLEtBQUssS0FBS2lCLE1BQU07WUFDakMsSUFBSTVFLEdBQUcsR0FBRyxjQUFjO1lBQ3hCLElBQUkyRCxLQUFLLEtBQUtrQixhQUFhLEVBQUU3RSxHQUFHLElBQUksaUJBQWlCO1lBQ3JELElBQUk4RSxRQUFRLEVBQUU7Y0FDYjlFLEdBQUcsSUFBSSxHQUFHOEUsUUFBUSxJQUFJbkIsS0FBSyxLQUFLa0IsYUFBYSxHQUFHLG9CQUFvQixHQUFHLGdCQUFnQixFQUFFOztZQUUxRixJQUFJbEIsS0FBSyxLQUFLaUIsTUFBTSxFQUFFNUUsR0FBRyxJQUFJLG1CQUFtQjtZQUNoRDtZQUNBLE9BQU9DLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBRThFO1lBQUcsR0FBRzlKLElBQUksQ0FBTztVQUN6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQStKLEtBQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUVBLElBQUE4SSxLQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQTZSLFVBQUEsR0FBQTdSLE9BQUE7VUFFTSxTQUFVdVIsMkNBQTJDQSxDQUFDO1lBQUV2TztVQUFJLENBQUU7WUFDbkUsTUFBTTtjQUFFWixLQUFLO2NBQUUvQjtZQUFLLENBQUUsR0FBRyxJQUFBNEcsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTXBJLFFBQVEsR0FBR3hGLEtBQUssQ0FBQzRCLEtBQUssQ0FBQ3dHLFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ21DLElBQUksQ0FBQ3FCLEVBQUUsQ0FBQztZQUVwRCxPQUNDMEksS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDK0UsS0FBQSxDQUFBakcsYUFBQSxZQUFJakIsUUFBUSxDQUFDNkksV0FBVyxDQUFLLEVBQzdCM0IsS0FBQSxDQUFBakcsYUFBQSxhQUFLMUUsS0FBSyxDQUFDcUcsVUFBVSxDQUFDK0QsY0FBYyxDQUFDc0YsYUFBYSxDQUFDek0sS0FBSyxDQUFNLEVBQzlEMEgsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQTRCLEdBQzFDK0UsS0FBQSxDQUFBakcsYUFBQSxhQUNFMUUsS0FBSyxDQUFDcUcsVUFBVSxDQUFDK0QsY0FBYyxDQUFDc0YsYUFBYSxDQUFDQyxNQUFNLEUsTUFBSS9PLElBQUksQ0FBQzZKLFFBQVEsQ0FBQ0gsT0FBTyxFLEtBQzdFMUosSUFBSSxDQUFDNkosUUFBUSxDQUFDRixLQUFLLENBQ2hCLEVBRUxJLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ2dDLEtBQUEsQ0FBQWdCLElBQUk7Y0FDSjlCLFNBQVMsRUFBQyxzQ0FBc0M7Y0FDaERsRixLQUFLLEVBQUVFLElBQUksQ0FBQ2dQLFVBQVUsQ0FBQ0MsU0FBUztjQUNoQ2xJLE9BQU8sRUFBRThILFVBQUEsQ0FBQUs7WUFBZ0QsRUFDeEQsQ0FDRyxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFuRixLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFFQSxJQUFBOEksS0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFtUyxPQUFBLEdBQUFuUyxPQUFBO1VBRU0sU0FBVWtTLGdEQUFnREEsQ0FBQztZQUFFbFAsSUFBSTtZQUFFQyxJQUFJO1lBQUUrTDtVQUFVLENBQUU7WUFDMUYsTUFBTTtjQUFFNU07WUFBSyxDQUFFLEdBQUcsSUFBQTZFLFFBQUEsQ0FBQWdILGdCQUFnQixHQUFFO1lBQ3BDLE1BQU1oRSxLQUFLLEdBQUc7Y0FDYnlILE1BQU0sRUFBRTFPLElBQUksQ0FBQzBPLE1BQU07Y0FDbkJDLGFBQWEsRUFBRTNPLElBQUksQ0FBQzJPO2FBQ3BCO1lBRUQsT0FDQzVFLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBSWtCLFNBQVMsRUFBQztZQUF1QixHQUNwQytFLEtBQUEsQ0FBQWpHLGFBQUEsYUFBSzlELElBQUksQ0FBQ29QLFFBQVEsQ0FBTSxFQUN4QnJGLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ2dDLEtBQUEsQ0FBQWdCLElBQUk7Y0FDSjlCLFNBQVMsRUFBQyxvQ0FBb0M7Y0FDOUNsRixLQUFLLEVBQUVFLElBQUksQ0FBQzRHLE9BQU87Y0FDbkJLLEtBQUssRUFBRUEsS0FBSztjQUNaRixPQUFPLEVBQUVvSSxPQUFBLENBQUFWO1lBQXNELEVBQzlELENBQ0U7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQTFFLEtBQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFzSSxHQUFBLEdBQUF0SSxPQUFBO1VBRUEsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBMk8sS0FBQSxHQUFBM08sT0FBQTtVQUNBLElBQUFxUyxRQUFBLEdBQUFyUyxPQUFBO1VBQ0E7Ozs7O1VBS00sU0FBVXdSLG1DQUFtQ0EsQ0FBQztZQUFFeE8sSUFBSTtZQUFFd0M7VUFBVyxDQUFFO1lBQ3hFLE1BQU07Y0FBRXBELEtBQUs7Y0FBRS9CO1lBQUssQ0FBRSxHQUFHLElBQUE0RyxRQUFBLENBQUFnSCxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNMUksTUFBTSxHQUFHQyxXQUFXLENBQUN2QyxJQUFJLENBQUNvQixFQUFFLElBQUltQixXQUFXLENBQUN2QyxJQUFJLEVBQUVxUCxHQUFHO1lBQzNELE1BQU1DLFFBQVEsR0FBRyxHQUFHRixRQUFBLENBQUFHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLGdCQUFnQnJTLEtBQUssQ0FBQzRCLEtBQUssQ0FBQ29DLEVBQUUsZUFBZXJCLElBQUksQ0FBQ3FCLEVBQUUsYUFBYWtCLE1BQU0sUUFBUTtZQUN4SCxNQUFNb04sTUFBTSxHQUFHM1AsSUFBSSxFQUFFb0ksVUFBVSxFQUFFM0YsR0FBRyxDQUFDa0ksU0FBUyxJQUFHO2NBQ2hELE9BQ0NaLEtBQUEsQ0FBQWpHLGFBQUE7Z0JBQUtrQixTQUFTLEVBQUMsc0JBQXNCO2dCQUFDd0gsR0FBRyxFQUFFLEdBQUd4TSxJQUFJLENBQUNxQixFQUFFLElBQUlzSixTQUFTLENBQUNBLFNBQVM7Y0FBRSxHQUM3RVosS0FBQSxDQUFBakcsYUFBQSxjQUNDaUcsS0FBQSxDQUFBakcsYUFBQTtnQkFBSWtCLFNBQVMsRUFBQztjQUE0QyxHQUN6RCtFLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQTBFLE9BQU87Z0JBQUNuRixJQUFJLEVBQUUsU0FBU3VGLFNBQVMsQ0FBQ0csTUFBTTtjQUFFLEVBQUksRUFDN0NILFNBQVMsQ0FBQ3pLLElBQUksQ0FDWCxDQUNBLEVBQ042SixLQUFBLENBQUFqRyxhQUFBLGNBQ0NpRyxLQUFBLENBQUFqRyxhQUFBLGVBQU82RyxTQUFTLENBQUNpRixRQUFRLENBQVEsQ0FDNUIsQ0FDRDtZQUVSLENBQUMsQ0FBQztZQUVGLE1BQU12RCxJQUFJLEdBQUcsQ0FBQ3RDLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQzZILEtBQUEsQ0FBQVksR0FBRztjQUFDQyxHQUFHLEVBQUM7WUFBVSxHQUFFcE4sS0FBSyxDQUFDcUcsVUFBVSxDQUFDNEQsTUFBTSxDQUFDdUcsUUFBUSxDQUFPLENBQUM7WUFDM0UsSUFBSTVQLElBQUksQ0FBQzZQLGFBQWEsRUFBRXhELElBQUksQ0FBQ0MsSUFBSSxDQUFDdkMsS0FBQSxDQUFBakcsYUFBQSxDQUFDNkgsS0FBQSxDQUFBWSxHQUFHO2NBQUNDLEdBQUcsRUFBQztZQUFlLEdBQUVwTixLQUFLLENBQUNxRyxVQUFVLENBQUM0RCxNQUFNLENBQUN3RyxhQUFhLENBQU8sQ0FBQztZQUV6RyxPQUNDOUYsS0FBQSxDQUFBakcsYUFBQSxjQUNDaUcsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDK0UsS0FBQSxDQUFBakcsYUFBQSxhQUFLMUUsS0FBSyxDQUFDcUcsVUFBVSxDQUFDNEQsTUFBTSxDQUFDeUcsS0FBSyxDQUFNLEVBQ3hDL0YsS0FBQSxDQUFBakcsYUFBQSxDQUFDd0IsR0FBQSxDQUFBeUssV0FBVztjQUFDQyxHQUFHLEVBQUVUO1lBQVEsRUFBSSxDQUN6QixFQUNOeEYsS0FBQSxDQUFBakcsYUFBQSxDQUFDNkgsS0FBQSxDQUFBb0IsYUFBYTtjQUFDQyxNQUFNLEVBQUUsQ0FBQztjQUFFaEksU0FBUyxFQUFDO1lBQWlDLEdBQ3BFK0UsS0FBQSxDQUFBakcsYUFBQSxDQUFDNkgsS0FBQSxDQUFBc0IsSUFBSTtjQUFDakksU0FBUyxFQUFDO1lBQWMsR0FBRXFILElBQUksQ0FBUSxFQUM1Q3RDLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQzZILEtBQUEsQ0FBQXVCLEtBQUssUUFDTG5ELEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUE0QixHQUFFMkssTUFBTSxDQUFPLEVBRTFENUYsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDK0UsS0FBQSxDQUFBakcsYUFBQSxZQUFJOUQsSUFBSSxDQUFDNlAsYUFBYSxDQUFLLENBQ3RCLENBQ0MsQ0FDTyxDQUNYO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUE5RixLQUFBLEdBQUEvTSxPQUFBO1VBRUEsSUFBQStOLGNBQUEsR0FBQS9OLE9BQUE7VUFDQSxJQUFBZ0osTUFBQSxHQUFBaEosT0FBQTtVQUZBOztVQUlNLFNBQVVnTyxnQ0FBZ0NBLENBQUM7WUFBRWhMLElBQUksRUFBRTtjQUFFb0osSUFBSTtjQUFFSztZQUFtQixDQUFFO1lBQUU1SztVQUFRLENBQUU7WUFDakcsTUFBTXFNLEdBQUcsR0FBR25CLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUJwQixLQUFLLENBQUNtQyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNoQixHQUFHLENBQUMyQyxPQUFPLEVBQUU7Y0FDbEIzQyxHQUFHLENBQUMyQyxPQUFPLENBQUNvQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVuSSxLQUFLLElBQUc7Z0JBQzlDQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtnQkFDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3ZCLENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDa0QsR0FBRyxDQUFDMkMsT0FBTyxDQUFDLENBQUM7WUFFakIsSUFBSSxDQUFDekUsSUFBSSxFQUFFM0YsUUFBUSxDQUFDM0QsS0FBSyxDQUFDWSxNQUFNLEVBQUU7Y0FDakMsT0FDQ3FKLEtBQUEsQ0FBQWpHLGFBQUE7Z0JBQUtrQixTQUFTLEVBQUMsVUFBVTtnQkFBQ2tHLEdBQUcsRUFBRUE7Y0FBRyxHQUNqQ25CLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ2tDLE1BQUEsQ0FBQXNGLFNBQVMsT0FBRyxDQUNSOztZQUlSLE9BQ0N2QixLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUMsVUFBVTtjQUFDa0csR0FBRyxFQUFFQTtZQUFHLEdBQ2pDbkIsS0FBQSxDQUFBakcsYUFBQSxDQUFDaUgsY0FBQSxDQUFBUyxtQkFBbUI7Y0FBQ3ZNLEtBQUssRUFBRW1LLElBQUk7Y0FBRS9ILEVBQUUsRUFBRStILElBQUksRUFBRS9ILEVBQUU7Y0FBRXFFLEtBQUssRUFBRU0sTUFBQSxDQUFBc0YsU0FBUztjQUFFbEcsSUFBSSxFQUFDO1lBQWlDLEdBQ3ZHMkUsS0FBQSxDQUFBakcsYUFBQSxDQUFDaUgsY0FBQSxDQUFBVSxlQUFlLE9BQUcsQ0FDRSxDQUNqQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBL0gsTUFBQSxHQUFBMUcsT0FBQTtVQUVBLElBQUFrVCxNQUFBLEdBQUFsVCxPQUFBO1VBRUEsSUFBQWdILFdBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUlNLFNBQVVtVCxhQUFhQSxDQUFDO1lBQUVDO1VBQVEsQ0FBdUI7WUFDOUQsTUFBTSxDQUFDL0gsSUFBSSxFQUFFZ0ksT0FBTyxDQUFDLEdBQUczTSxNQUFBLENBQUFHLE9BQUssQ0FBQ1ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxNQUFNO2NBQUVyRjtZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTXFGLFVBQVUsR0FBR0EsQ0FBQSxLQUFNRCxPQUFPLENBQUMsQ0FBQ2hJLElBQUksQ0FBQztZQUN2QyxNQUFNa0ksYUFBYSxHQUFHekksS0FBSyxJQUFHO2NBQzdCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QnVJLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxNQUFNRSxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLE1BQU1KLFFBQVEsRUFBRTtjQUNoQkUsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVELE9BQ0M1TSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFBSixNQUFBLENBQUFHLE9BQUEsQ0FBQUUsUUFBQSxRQUNDTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxXQUFBLENBQUFrQixNQUFNO2NBQUNGLFNBQVMsRUFBQyxhQUFhO2NBQUNxSSxPQUFPLEVBQUMsU0FBUztjQUFDMUksT0FBTyxFQUFFNEw7WUFBYSxHQUN0RW5SLEtBQUssQ0FBQ3FSLFVBQVUsQ0FBQzFMLE1BQU0sQ0FDaEIsRUFDUnNELElBQUksSUFDSjNFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNvTSxNQUFBLENBQUFRLFlBQVk7Y0FBQ2hULElBQUk7Y0FBQzhTLFNBQVMsRUFBRUEsU0FBUztjQUFFRyxRQUFRLEVBQUVMO1lBQVUsR0FDNUQ1TSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDLGVBQWU7Y0FBQ0wsT0FBTyxFQUFFMkw7WUFBVSxFQUFJLEVBQ3RENU0sTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFlLEdBQzdCdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzFFLEtBQUssQ0FBQ3FSLFVBQVUsQ0FBQ3BPLEtBQUssQ0FBTSxFQUNqQ3FCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLFlBQUkxRSxLQUFLLENBQUNxUixVQUFVLENBQUMvRSxXQUFXLENBQUssQ0FDaEMsQ0FFUCxDQUNDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUF4SCxNQUFBLEdBQUFsSCxPQUFBO1VBQ0EsSUFBQStNLEtBQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBNFQsZUFBQSxHQUFBNVQsT0FBQTtVQUNBLElBQUE2VCxRQUFBLEdBQUE3VCxPQUFBO1VBQ0EsSUFBQThULE9BQUEsR0FBQTlULE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUVNLFNBQVUrVCxpQkFBaUJBLENBQUM7WUFBRS9RO1VBQUksQ0FBRTtZQUN6QyxNQUFNO2NBQUVuQixRQUFRO2NBQUU0SyxtQkFBbUI7Y0FBRUw7WUFBSSxDQUFFLEdBQUdwSixJQUFJO1lBQ3BELE1BQU07Y0FBRWdSLFVBQVU7Y0FBRTNNO1lBQWEsQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQWdILGdCQUFnQixHQUFFO1lBQ3hELE1BQU0sQ0FBQzVLLEtBQUssRUFBRTRRLFFBQVEsQ0FBQyxHQUFHbEgsS0FBSyxDQUFDdEYsUUFBUSxDQUFDZ0YsbUJBQW1CLENBQUN6RyxTQUFTLENBQUMzQyxLQUFLLENBQUM7WUFDN0UsTUFBTSxDQUFDTSxRQUFRLEVBQUUrRCxXQUFXLENBQUMsR0FBR3FGLEtBQUssQ0FBQ3RGLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTXlHLEdBQUcsR0FBR25CLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsSUFBQWpILE1BQUEsQ0FBQVUsU0FBUyxFQUFDLENBQUM2RSxtQkFBbUIsQ0FBQ3pHLFNBQVMsQ0FBQyxFQUFFLE1BQUs7Y0FDL0NpTyxRQUFRLENBQUN4SCxtQkFBbUIsQ0FBQ3pHLFNBQVMsQ0FBQzNDLEtBQUssQ0FBQztZQUM5QyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNvSixtQkFBbUIsQ0FBQ3pHLFNBQVMsQ0FBQzNDLEtBQUssRUFBRSxPQUFPMEosS0FBQSxDQUFBakcsYUFBQSxDQUFDOE0sZUFBQSxDQUFBTSxjQUFjO2NBQUNsUixJQUFJLEVBQUVBO1lBQUksRUFBSTtZQUMvRSxNQUFNbVIsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkI5TSxhQUFhLENBQUM7Z0JBQ2IzRyxJQUFJLEVBQUUsSUFBSTtnQkFDVmtELElBQUksRUFBRSxTQUFTO2dCQUNmNkcsSUFBSSxFQUFFdUosVUFBVSxDQUFDdko7ZUFDakIsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNMkosU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixJQUFJO2dCQUNIMU0sV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTBFLElBQUksQ0FBQ3RMLElBQUksRUFBRTtnQkFDakIsTUFBTXVULElBQUksR0FBR25HLEdBQUcsQ0FBQzJDLE9BQU8sQ0FBQ3lELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFFekQsSUFBSUQsSUFBSSxFQUFFQSxJQUFJLENBQUNwRCxjQUFjLENBQUM7a0JBQUVDLFFBQVEsRUFBRSxRQUFRO2tCQUFFQyxLQUFLLEVBQUU7Z0JBQUssQ0FBRSxDQUFDO2dCQUNuRXpKLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPaEMsQ0FBQyxFQUFFO2dCQUNYYixPQUFPLENBQUNELEtBQUssQ0FBQ2MsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBQ0QsTUFBTW9ILEdBQUcsR0FBRyxzQkFBc0JuSixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUNsRSxPQUNDb0osS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFFOEUsR0FBRztjQUFFb0IsR0FBRyxFQUFFQTtZQUFHLEdBQzVCbkIsS0FBQSxDQUFBakcsYUFBQSxDQUFDZ04sT0FBQSxDQUFBUyxtQkFBbUI7Y0FBQ0gsU0FBUyxFQUFFQSxTQUFTO2NBQUVwUixJQUFJLEVBQUVBLElBQUk7Y0FBRXdSLFlBQVk7Y0FBQ0wsTUFBTSxFQUFFQTtZQUFNLEVBQUksRUFDdEZwSCxLQUFBLENBQUFqRyxhQUFBLENBQUMrTSxRQUFBLENBQUE3RixnQ0FBZ0M7Y0FBQ2hMLElBQUksRUFBRUEsSUFBSTtjQUFFbkIsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDL0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTZFLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBZ0osTUFBQSxHQUFBaEosT0FBQTtVQVVPO1VBQVcsU0FBVTJJLFNBQVNBLENBQUM7WUFDckNDLElBQUk7WUFFSlo7VUFBUyxDQUNJO1lBQ2IsTUFBTThFLEdBQUcsR0FBRywyQkFBMkI5RSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXpFLE9BQ0N0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0MsTUFBQSxDQUFBbUIsS0FBSztjQUFDbkMsU0FBUyxFQUFFOEU7WUFBRyxHQUNwQnBHLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLFlBQUk4QixJQUFJLENBQUssQ0FDTjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBMUIsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUF5VSxNQUFBLEdBQUF6VSxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBK00sS0FBQSxHQUFBL00sT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQTBVLE1BQUEsR0FBQTFVLE9BQUE7VUFDQSxJQUFBZ0gsV0FBQSxHQUFBaEgsT0FBQTtVQW9CTSxTQUFVdVUsbUJBQW1CQSxDQUFDeEYsS0FBZ0M7WUFDbkUsTUFBTTtjQUFFcUYsU0FBUztjQUFFcFIsSUFBSTtjQUFFMlIsV0FBVyxHQUFHLEtBQUs7Y0FBRUgsWUFBWSxHQUFHLEtBQUs7Y0FBRUw7WUFBTSxDQUFFLEdBQUdwRixLQUFLO1lBQ3BGLE1BQU07Y0FBRXZKLFdBQVc7Y0FBRWlIO1lBQW1CLENBQUUsR0FBR3pKLElBQUk7WUFDakQsTUFBTSxDQUFDNFIsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlILEtBQUssQ0FBQ3RGLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTVCLFFBQVEsR0FBRzRHLG1CQUFtQixFQUFFNUcsUUFBUTtZQUM5QyxNQUFNO2NBQUV6RDtZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTtjQUFFaEwsSUFBSSxFQUFFNlI7WUFBTyxDQUFFLEdBQUd0UCxXQUFXO1lBQ3JDLE1BQU0sQ0FBQ3VQLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdqSSxLQUFLLENBQUN0RixRQUFRLENBQUNqQyxXQUFXLENBQUN1UCxPQUFPLENBQUNFLGFBQWEsRUFBRSxDQUFDO1lBQ2pGN1EsVUFBVSxDQUFDOFEsQ0FBQyxHQUFHMVAsV0FBVztZQUMxQixJQUFBMEIsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ3BDLFdBQVcsQ0FBQyxFQUFFLE1BQUs7Y0FDN0J3UCxVQUFVLENBQUN4UCxXQUFXLENBQUN1UCxPQUFPLENBQUNFLGFBQWEsRUFBRSxDQUFDO1lBQ2hELENBQUMsQ0FBQztZQUVGLE1BQU10TixPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCLElBQUk7Z0JBQ0hrTixhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUNuQixNQUFNclAsV0FBVyxDQUFDMlAsUUFBUSxFQUFFO2dCQUM1QlQsTUFBQSxDQUFBVSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2pULEtBQUssQ0FBQytTLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO2dCQUNyQ1IsYUFBYSxDQUFDLEtBQUssQ0FBQztlQUNwQixDQUFDLE9BQU9uUCxDQUFDLEVBQUU7Z0JBQ1hiLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDYyxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxPQUNDcUgsS0FBQSxDQUFBakcsYUFBQSxDQUFBaUcsS0FBQSxDQUFBaEcsUUFBQSxRQUNDZ0csS0FBQSxDQUFBakcsYUFBQTtjQUFRa0IsU0FBUyxFQUFDO1lBQTBCLEdBQzNDK0UsS0FBQSxDQUFBakcsYUFBQTtjQUFTa0IsU0FBUyxFQUFDO1lBQStDLEdBQ2pFK0UsS0FBQSxDQUFBakcsYUFBQSxjQUNDaUcsS0FBQSxDQUFBakcsYUFBQSxhQUFLZ08sT0FBTyxDQUFDNVIsSUFBSSxDQUFNLEVBQ3RCeVIsV0FBVyxHQUNYNUgsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXlCLEdBQ3RDK00sT0FBTyxDQUFDcEksS0FBSyxHQUNiSSxLQUFBLENBQUFqRyxhQUFBLENBQUFpRyxLQUFBLENBQUFoRyxRQUFBLFFBQ0UzRSxLQUFLLENBQUNxTixZQUFZLEUsTUFBSXNGLE9BQU8sQ0FBQ08sUUFBUSxFLEtBQUdsVCxLQUFLLENBQUNtVCxFQUFFLEUsS0FBR1IsT0FBTyxDQUFDcEksS0FBSyxDQUNoRSxHQUVISSxLQUFBLENBQUFqRyxhQUFBLENBQUFpRyxLQUFBLENBQUFoRyxRQUFBLFFBQUczRSxLQUFLLENBQUMrUyxRQUFRLENBQUNLLFFBQVEsQ0FDMUIsQ0FDSSxHQUNILElBQUksRUFDUGhCLFlBQVksSUFBSTNPLFFBQVEsR0FDeEJrSCxLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBeUIsR0FBRW5DLFFBQVEsQ0FBQ1IsS0FBSyxDQUFPLEdBQzVELElBQUksQ0FDSCxFQUVOMEgsS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXdCLEdBQ3JDMk0sV0FBVyxJQUFJSSxPQUFPLENBQUNwSSxLQUFLLElBQUlvSSxPQUFPLENBQUNwSSxLQUFLLEtBQUtvSSxPQUFPLENBQUNPLFFBQVEsR0FDbEV2SSxLQUFBLENBQUFqRyxhQUFBLENBQUNFLFdBQUEsQ0FBQWtCLE1BQU07Y0FBQ3ZFLFFBQVEsRUFBRWlSLFVBQVU7Y0FBRXhOLFFBQVEsRUFBRXdOLFVBQVU7Y0FBRXZFLE9BQU8sRUFBQyxTQUFTO2NBQUMxSSxPQUFPLEVBQUVBO1lBQU8sR0FDcEZ2RixLQUFLLENBQUMrUyxRQUFRLENBQUNwTixNQUFNLENBQ2QsR0FDTixJQUFJLEVBQ1AsQ0FBQyxDQUFDb00sTUFBTSxJQUFJcEgsS0FBQSxDQUFBakcsYUFBQSxDQUFDK0IsTUFBQSxDQUFBVyxVQUFVO2NBQUNwQixJQUFJLEVBQUMsV0FBVztjQUFDVCxPQUFPLEVBQUV3TTtZQUFNLEVBQUksRUFDN0RwSCxLQUFBLENBQUFqRyxhQUFBLENBQUMrQixNQUFBLENBQUFXLFVBQVU7Y0FBQ3BCLElBQUksRUFBQyxTQUFTO2NBQUNKLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQ0wsT0FBTyxFQUFFeU07WUFBUyxFQUFJLEVBQ2pGckgsS0FBQSxDQUFBakcsYUFBQSxDQUFDMk4sTUFBTSxDQUFDZ0IsV0FBVyxPQUFHLENBQ2pCLENBQ0csQ0FDRixDQUNQO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEZBLElBQUF2TyxNQUFBLEdBQUFsSCxPQUFBO1VBR0EsSUFBQThJLEtBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBK00sS0FBQSxHQUFBL00sT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQTBWLFNBQUEsR0FBQTFWLE9BQUE7VUFDQSxJQUFBZ0osTUFBQSxHQUFBaEosT0FBQTtVQUVBLElBQUE4VCxPQUFBLEdBQUE5VCxPQUFBO1VBQ0EsSUFBQTRULGVBQUEsR0FBQTVULE9BQUE7VUFnQk0sU0FBVTJWLHdCQUF3QkEsQ0FBQzVHLEtBQTBCO1lBQ2xFLE1BQU07Y0FBRS9MO1lBQUksQ0FBRSxHQUFHK0wsS0FBSztZQUV0QixNQUFNO2NBQUV2SixXQUFXO2NBQUUzRCxRQUFRO2NBQUVnRSxRQUFRO2NBQUUzRDtZQUFnQixDQUFFLEdBQUdjLElBQUk7WUFDbEUsTUFBTTtjQUFFWixLQUFLO2NBQUUvQjtZQUFLLENBQUUsR0FBRyxJQUFBNEcsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFaEwsSUFBSSxFQUFFNlI7WUFBTyxDQUFFLEdBQUd0UCxXQUFXO1lBQ3JDLE1BQU0sQ0FBQzFDLEtBQUssRUFBRThTLFFBQVEsQ0FBQyxHQUFHN0ksS0FBSyxDQUFDdEYsUUFBUSxDQUFDakMsV0FBVyxDQUFDaUQsVUFBVSxDQUFDM0YsS0FBSyxDQUFDO1lBQ3RFLE1BQU0sQ0FBQ2EsUUFBUSxFQUFFK0QsV0FBVyxDQUFDLEdBQUdxRixLQUFLLENBQUN0RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3NOLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdqSSxLQUFLLENBQUN0RixRQUFRLENBQUNqQyxXQUFXLENBQUN1UCxPQUFPLENBQUNFLGFBQWEsRUFBRSxDQUFDO1lBQ2pGLE1BQU0sQ0FBQzVSLEtBQUssRUFBRTRRLFFBQVEsQ0FBQyxHQUFHbEgsS0FBSyxDQUFDdEYsUUFBUSxDQUFDakMsV0FBVyxDQUFDbkMsS0FBSyxDQUFDO1lBQzNELE1BQU15SixHQUFHLEdBQUcsc0JBQXNCbkosUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsTUFBTXFMLFVBQVUsR0FBR25KLFFBQVEsRUFBRXhCLEVBQUU7WUFFL0IsTUFBTStQLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIxTSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU0xRSxJQUFJLENBQUN3QyxXQUFXLENBQUMxRSxJQUFJLEVBQUU7Y0FDN0JvRixVQUFVLENBQUMsTUFBSztnQkFDZjBQLFFBQVEsQ0FBQyxDQUFDLEdBQUdwUSxXQUFXLENBQUNpRCxVQUFVLENBQUMzRixLQUFLLENBQUMsQ0FBQztnQkFDM0M0RSxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBQVIsTUFBQSxDQUFBVSxTQUFTLEVBQUMsQ0FBQ3BDLFdBQVcsQ0FBQyxFQUFFLE1BQUs7Y0FDN0J5TyxRQUFRLENBQUN6TyxXQUFXLENBQUNuQyxLQUFLLENBQUM7Y0FDM0J1UyxRQUFRLENBQUMsQ0FBQyxHQUFHcFEsV0FBVyxDQUFDaUQsVUFBVSxDQUFDM0YsS0FBSyxDQUFDLENBQUM7Y0FDM0NrUyxVQUFVLENBQUN4UCxXQUFXLENBQUN1UCxPQUFPLENBQUNFLGFBQWEsRUFBRSxDQUFDO1lBQ2hELENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQzVSLEtBQUssRUFBRSxPQUFPMEosS0FBQSxDQUFBakcsYUFBQSxDQUFDOE0sZUFBQSxDQUFBTSxjQUFjO2NBQUNsUixJQUFJLEVBQUVBO1lBQUksRUFBSTtZQUVqRCxPQUNDK0osS0FBQSxDQUFBakcsYUFBQSxDQUFBaUcsS0FBQSxDQUFBaEcsUUFBQSxRQUNDZ0csS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFFOEU7WUFBRyxHQUNsQkMsS0FBQSxDQUFBakcsYUFBQSxDQUFDZ04sT0FBQSxDQUFBUyxtQkFBbUI7Y0FBQ3ZSLElBQUksRUFBRUEsSUFBSTtjQUFFMlIsV0FBVztjQUFDUCxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNyRXJILEtBQUEsQ0FBQWpHLGFBQUE7Y0FBU2tCLFNBQVMsRUFBQztZQUFvQixHQUNyQ2xGLEtBQUssQ0FBQ1ksTUFBTSxHQUNacUosS0FBQSxDQUFBakcsYUFBQSxDQUFDZ0MsS0FBQSxDQUFBZ0IsSUFBSTtjQUNKOUIsU0FBUyxFQUFDLDBCQUEwQjtjQUNwQ2xGLEtBQUssRUFBRXpDLEtBQUssQ0FBQzRCLEtBQUssQ0FBQ3dHLFVBQVUsQ0FBQzNGLEtBQUs7Y0FDbkNtSCxLQUFLLEVBQUU7Z0JBQUVoSCxJQUFJLEVBQUU2UixPQUFPO2dCQUFFalQsUUFBUTtnQkFBRW1OLFVBQVU7Z0JBQUV4SixXQUFXO2dCQUFFdEQ7Y0FBZ0IsQ0FBRTtjQUM3RTZILE9BQU8sRUFBRTJMLFNBQUEsQ0FBQWxGO1lBQXlCLEVBQ2pDLEdBRUZ6RCxLQUFBLENBQUFqRyxhQUFBLENBQUNrQyxNQUFBLENBQUFMLFNBQVM7Y0FBQ0MsSUFBSSxFQUFFeEcsS0FBSyxDQUFDTyxVQUFVLENBQUMrRixLQUFLLENBQUNyRDtZQUFLLEVBQzdDLENBQ1EsQ0FDTCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVBLElBQUF5RCxLQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUE2VixLQUFBLEdBQUE3VixPQUFBO1VBRU87VUFBVSxTQUNSOFYsV0FBV0EsQ0FBQTtZQUNuQixNQUFNO2NBQUV6VjtZQUFLLENBQUUsR0FBRyxJQUFBNEcsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV2QyxPQUNDWixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFBSixNQUFBLENBQUFHLE9BQUEsQ0FBQUUsUUFBQSxRQUNDTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQWlCLEdBQy9CdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dDLEtBQUEsQ0FBQWdCLElBQUk7Y0FBQzlCLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ2xGLEtBQUssRUFBRXpDLEtBQUssQ0FBQ3dDLFlBQVk7Y0FBRWtILE9BQU8sRUFBRThMLEtBQUEsQ0FBQUU7WUFBSSxFQUFJLENBQ25GLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXJQLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFnVyxNQUFBLEdBQUFoVyxPQUFBO1VBQ0EsSUFBQWlXLGFBQUEsR0FBQWpXLE9BQUE7VUFFQSxJQUFBa1csT0FBQSxHQUFBbFcsT0FBQTtVQUVNLFNBQVVtVyxrQkFBa0JBLENBQUM7WUFBRXRRLFFBQVE7WUFBRUw7VUFBVyxDQUFFO1lBQzNELE1BQU07Y0FBRXZDO1lBQUksQ0FBRSxHQUFHdUMsV0FBVztZQUM1QixNQUFNO2NBQUU2QixhQUFhO2NBQUVoSDtZQUFLLENBQUUsR0FBRyxJQUFBNEcsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN0RCxNQUFNbUQsSUFBSSxHQUFHakYsV0FBVyxDQUFDaUQsVUFBVSxDQUFDNUMsUUFBUSxDQUFDeEIsRUFBRSxDQUFDLEVBQUVvRyxJQUFJO1lBQ3RELE1BQU1rSSxNQUFNLEdBQUcsRUFBRTtZQUVqQixJQUFJOU0sUUFBUSxDQUFDMEQsSUFBSSxLQUFLLFlBQVksSUFBSTFELFFBQVEsQ0FBQ3VRLE9BQU8sS0FBSyxpQkFBaUIsSUFBSTNMLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQzFGa0ksTUFBTSxDQUFDckQsSUFBSSxDQUNWNUksTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsZUFDRWpCLFFBQVEsQ0FBQzRFLElBQUksQ0FBQ29DLFFBQVEsQ0FBQ0gsT0FBTyxFLE1BQUk3RyxRQUFRLENBQUM0RSxJQUFJLENBQUNvQyxRQUFRLENBQUNGLEtBQUssQ0FDekQsQ0FDUDs7WUFHRixNQUFNaEYsT0FBTyxHQUFHLE1BQU1tRCxLQUFLLElBQUc7Y0FDN0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUV0QixNQUFNM0ssS0FBSyxDQUFDaUYsZ0JBQWdCLENBQUNFLFdBQVcsQ0FBQ3ZDLElBQUksQ0FBQ29CLEVBQUUsQ0FBQztjQUVqRGdELGFBQWEsQ0FBQztnQkFDYjNHLElBQUksRUFBRSxJQUFJO2dCQUNWa0QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2Y2RyxJQUFJLEVBQUU7a0JBQ0x2SSxnQkFBZ0IsRUFBRTJELFFBQVEsQ0FBQ3hCLEVBQUU7a0JBQzdCbUIsV0FBVztrQkFDWEs7O2VBRUQsQ0FBQztZQUNILENBQUM7WUFFRCxPQUNDYSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFJYSxPQUFPLEVBQUVBLE9BQU87Y0FBRTZILEdBQUcsRUFBRSxHQUFHdk0sSUFBSSxDQUFDb0IsRUFBRSxJQUFJd0IsUUFBUSxDQUFDeEIsRUFBRSxFQUFFO2NBQUUyRCxTQUFTLEVBQUM7WUFBbUIsR0FFcEZ0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVAsYUFBQSxDQUFBSSxZQUFZO2NBQUM5TSxJQUFJLEVBQUUxRCxRQUFRLENBQUMwRDtZQUFJLEVBQUksQ0FDaEMsRUFDTjdDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBbUMsR0FDakR0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNa0IsU0FBUyxFQUFDO1lBQWdCLEdBQUVuQyxRQUFRLENBQUNSLEtBQUssQ0FBUSxFQUN4RHFCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBNEIsR0FDMUN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa1AsTUFBQSxDQUFBTSxzQkFBc0I7Y0FBQ3RULElBQUksRUFBRTZDLFFBQVE7Y0FBRUwsV0FBVyxFQUFFQTtZQUFXLEVBQUksRUFDcEVrQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1AsT0FBQSxDQUFBSyxvQkFBb0I7Y0FBQ3ZULElBQUksRUFBRTZDLFFBQVE7Y0FBRUwsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDN0QsQ0FDRCxDQUNGO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUFrQixNQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBa1csT0FBQSxHQUFBbFcsT0FBQTtVQUVNLFNBQVV3VyxxQkFBcUJBLENBQUM7WUFBRXhUO1VBQUksQ0FBRTtZQUM3QyxNQUFNO2NBQUU2QyxRQUFRO2NBQUVMO1lBQVcsQ0FBRSxHQUFHeEMsSUFBSTtZQUN0QyxNQUFNeUosbUJBQW1CLEdBQUdqSCxXQUFXLENBQUNpRCxVQUFVLENBQUM1SCxHQUFHLENBQUNnRixRQUFRLENBQUN4QixFQUFFLENBQUM7WUFDbkUsTUFBTXNPLE1BQU0sR0FBRyxFQUFFO1lBRWpCLElBQUk5TSxRQUFRLENBQUMwRCxJQUFJLEtBQUssWUFBWSxJQUFJMUQsUUFBUSxDQUFDdVEsT0FBTyxLQUFLLGlCQUFpQixJQUFJM0wsSUFBSSxDQUFDQSxJQUFJLEVBQUU7Y0FDMUZrSSxNQUFNLENBQUNyRCxJQUFJLENBQ1Y1SSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxlQUNFOUQsSUFBSSxDQUFDeUgsSUFBSSxDQUFDb0MsUUFBUSxDQUFDSCxPQUFPLEUsTUFBSTFKLElBQUksQ0FBQ3lILElBQUksQ0FBQ29DLFFBQVEsQ0FBQ0YsS0FBSyxDQUNqRCxDQUNQOztZQUdGLE9BQ0NqRyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQTRCLEdBQzFDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUE0QyxHQUN6RHlFLG1CQUFtQixFQUFFbUQsTUFBTSxFQUFFbE0sTUFBTSxHQUFHZ0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQTROLElBQUk7Y0FBQ3JPLElBQUksRUFBQyxPQUFPO2NBQUNKLFNBQVMsRUFBQztZQUFZLEVBQUcsR0FBRyxJQUFJLENBQ3JGLEVBQ050QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1AsT0FBQSxDQUFBSyxvQkFBb0I7Y0FBQ3ZULElBQUksRUFBRUEsSUFBSTtjQUFFd0MsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDekQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkEsSUFBQWtCLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBZ0gsV0FBQSxHQUFBaEgsT0FBQTtVQUNBLElBQUFpTSxLQUFBLEdBQUFqTSxPQUFBO1VBQ0EsSUFBQW1NLE9BQUEsR0FBQW5NLE9BQUE7VUFDQSxJQUFBa00sZUFBQSxHQUFBbE0sT0FBQTtVQUVNLFNBQVUwVyxjQUFjQSxDQUFDO1lBQUUxVCxJQUFJLEVBQUU2QyxRQUFRO1lBQUVMO1VBQVcsQ0FBRTtZQUM3RCxNQUFNK0QsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUNuRyxRQUFRLENBQUN5QyxRQUFRLENBQUMwRCxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcxRCxRQUFRLENBQUMwRCxJQUFJO1lBRTVHLE9BQ0M3QyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxXQUFBLENBQUF5QyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRUgsSUFBSTtjQUNmSyxPQUFPLEVBQUU7Z0JBQ1J3QyxJQUFJLEVBQUUxRixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUYsS0FBQSxDQUFBa0ssa0JBQWtCO2tCQUFDdFEsUUFBUSxFQUFFQSxRQUFRO2tCQUFFTCxXQUFXLEVBQUVBO2dCQUFXLEVBQUk7Z0JBQzFFNkcsTUFBTSxFQUFFM0YsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FGLE9BQUEsQ0FBQXdLLG9CQUFvQjtrQkFBQzlRLFFBQVEsRUFBRUEsUUFBUTtrQkFBRUwsV0FBVyxFQUFFQTtnQkFBVyxFQUFJO2dCQUM5RSxpQkFBaUIsRUFBRWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNvRixlQUFBLENBQUEwSyw0QkFBNEI7a0JBQUMvUSxRQUFRLEVBQUVBLFFBQVE7a0JBQUVMLFdBQVcsRUFBRUE7Z0JBQVc7O1lBQzdGLEVBQ0E7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQWtCLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBRU0sU0FBVXNXLHNCQUFzQkEsQ0FBQztZQUFFdFQsSUFBSTtZQUFFd0M7VUFBVyxDQUFFO1lBQzNELE1BQU1LLFFBQVEsR0FBRzdDLElBQUk7WUFDckIsTUFBTTtjQUFFWjtZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNb0osZUFBZSxHQUFHbEwsV0FBVyxDQUFDaUQsVUFBVSxDQUFDa0ksR0FBRyxDQUFDOUssUUFBUSxDQUFDeEIsRUFBRSxDQUFDO1lBQy9ELE1BQU1vSSxtQkFBbUIsR0FBR2pILFdBQVcsQ0FBQ2lELFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ2dGLFFBQVEsQ0FBQ3hCLEVBQUUsQ0FBQztZQUVuRSxJQUFJa0YsSUFBSSxHQUFHLFNBQVM7WUFDcEIsSUFBSXNOLEtBQUssR0FBR3pVLEtBQUssQ0FBQ3FHLFVBQVUsQ0FBQzRFLE1BQU0sQ0FBQ0gsT0FBTztZQUUzQyxJQUFJd0QsZUFBZSxFQUFFO2NBQ3BCbkgsSUFBSSxHQUFHLFNBQVM7Y0FDaEJzTixLQUFLLEdBQUd6VSxLQUFLLENBQUNxRyxVQUFVLENBQUM0RSxNQUFNLENBQUN5SixJQUFJOztZQUdyQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMxVCxRQUFRLENBQUN5QyxRQUFRLENBQUMwRCxJQUFJLENBQUMsRUFBRTtjQUMzRSxJQUFJa0QsbUJBQW1CLEVBQUVnRCxZQUFZLEVBQUU7Z0JBQ3RDb0gsS0FBSyxHQUFHLEdBQUdwSyxtQkFBbUIsRUFBRWdELFlBQVksQ0FBQ0MsS0FBSyxJQUFJdE4sS0FBSyxDQUFDcUcsVUFBVSxDQUFDZ0gsWUFBWSxFQUFFO2VBQ3JGLE1BQU07Z0JBQ04sTUFBTXNILGFBQWEsR0FBR3RLLG1CQUFtQixFQUFFaEcsUUFBUSxFQUFFaUosS0FBSyxJQUFJLENBQUM7Z0JBQy9EbUgsS0FBSyxHQUFHLEdBQUdFLGFBQWEsSUFBSTNVLEtBQUssQ0FBQ3FHLFVBQVUsQ0FBQ2dILFlBQVksRUFBRTs7O1lBSTdELElBQUk1SixRQUFRLENBQUMwRCxJQUFJLEtBQUssUUFBUSxJQUFJdkcsSUFBSSxDQUFDeUgsSUFBSSxFQUFFO2NBQzVDLE1BQU11TSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDbFUsSUFBSSxDQUFDeUgsSUFBSSxDQUFDLENBQ3BDaEYsR0FBRyxDQUFDZ0YsSUFBSSxJQUFLQSxJQUFZLENBQUNyQyxJQUFJLENBQUMsQ0FDL0IrTyxJQUFJLENBQUMsRUFBRSxDQUFDO2NBQ1ZOLEtBQUssR0FBR0csS0FBSztjQUNiek4sSUFBSSxHQUFHLFNBQVM7O1lBR2pCLElBQUkxRCxRQUFRLENBQUMwRCxJQUFJLEtBQUssWUFBWSxJQUFJMUQsUUFBUSxDQUFDdVEsT0FBTyxLQUFLLGlCQUFpQixJQUFJcFQsSUFBSSxDQUFDeUgsSUFBSSxFQUFFO2NBQzFGLE1BQU07Z0JBQUVpQyxPQUFPO2dCQUFFQztjQUFLLENBQUUsR0FBRzNKLElBQUksQ0FBQ3lILElBQUksQ0FBQ29DLFFBQVE7Y0FDN0MsSUFBSUgsT0FBTyxHQUFHQyxLQUFLLEdBQUcsQ0FBQyxFQUFFcEQsSUFBSSxHQUFHLE9BQU87Y0FDdkNzTixLQUFLLEdBQUcsR0FBR25LLE9BQU8sTUFBTUMsS0FBSyxFQUFFOztZQUdoQyxJQUFJK0QsZUFBZSxJQUFJakUsbUJBQW1CLEVBQUVoRyxRQUFRLEVBQUU7Y0FDckRvUSxLQUFLLEdBQUcsR0FBR3pVLEtBQUssQ0FBQ2dWLGNBQWMsSUFBSTNLLG1CQUFtQixFQUFFaEcsUUFBUSxDQUFDaUosS0FBSyxFQUFFOztZQUd6RSxNQUFNMkgsU0FBUyxHQUFHNUssbUJBQW1CLEVBQUVtRCxNQUFNLEVBQUVsTSxNQUFNO1lBQ3JELE1BQU1vSixHQUFHLEdBQUcsa0JBQWtCdUssU0FBUyxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFDOUQsT0FDQzNRLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUU4RTtZQUFHLEdBQ2xCcEcsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsZUFBTytQLEtBQUssQ0FBUSxFQUNuQlEsU0FBUyxHQUFHM1EsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQTROLElBQUk7Y0FBQ3JPLElBQUksRUFBQyxPQUFPO2NBQUNKLFNBQVMsRUFBQztZQUFZLEVBQUcsR0FBRyxJQUFJLENBQzNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckRBLElBQUF0QixNQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBZ1csTUFBQSxHQUFBaFcsT0FBQTtVQUNBLElBQUFpVyxhQUFBLEdBQUFqVyxPQUFBO1VBRU0sU0FBVTRXLDRCQUE0QkEsQ0FBQztZQUFFL1EsUUFBUTtZQUFFTDtVQUFXLENBQUU7WUFDckUsTUFBTTtjQUFFdkM7WUFBSSxDQUFFLEdBQUd1QyxXQUFXO1lBQzVCLE1BQU07Y0FBRTZCLGFBQWE7Y0FBRWhIO1lBQUssQ0FBRSxHQUFHLElBQUE0RyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3RELE1BQU1tRixtQkFBbUIsR0FBR2pILFdBQVcsQ0FBQ2lELFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ2dGLFFBQVEsQ0FBQ3hCLEVBQUUsQ0FBQztZQUVuRSxNQUFNc0QsT0FBTyxHQUFHbUQsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkQsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Y0FDdEIzSyxLQUFLLENBQUNpRixnQkFBZ0IsQ0FBQ3JDLElBQUksQ0FBQ29CLEVBQUUsQ0FBQztjQUUvQmdELGFBQWEsQ0FBQztnQkFDYjNHLElBQUksRUFBRSxJQUFJO2dCQUNWa0QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2Y2RyxJQUFJLEVBQUU7a0JBQ0x2SSxnQkFBZ0IsRUFBRTJELFFBQVEsQ0FBQ3hCLEVBQUU7a0JBQzdCbUIsV0FBVztrQkFDWEs7O2VBRUQsQ0FBQztZQUNILENBQUM7WUFFRCxPQUNDYSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFJYSxPQUFPLEVBQUVBLE9BQU87Y0FBRTZILEdBQUcsRUFBRSxHQUFHdk0sSUFBSSxDQUFDb0IsRUFBRSxJQUFJd0IsUUFBUSxDQUFDeEIsRUFBRSxFQUFFO2NBQUUyRCxTQUFTLEVBQUM7WUFBbUIsR0FDcEZ0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbVAsYUFBQSxDQUFBSSxZQUFZO2NBQUM5TSxJQUFJLEVBQUUxRCxRQUFRLENBQUMwRDtZQUFJLEVBQUksQ0FDaEMsRUFDTjdDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBbUMsR0FDakR0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNa0IsU0FBUyxFQUFDO1lBQWdCLEdBQUVuQyxRQUFRLENBQUNSLEtBQUssQ0FBUSxFQUN4RHFCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBNEIsR0FDMUN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa1AsTUFBQSxDQUFBTSxzQkFBc0I7Y0FBQ3RULElBQUksRUFBRTZDLFFBQVE7Y0FBRUwsV0FBVyxFQUFFQTtZQUFXLEVBQUksQ0FDL0QsRUFDTmtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGNBQ0UyRixtQkFBbUIsRUFBRUksUUFBUSxHQUM3Qm5HLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBdUUsR0FDckZ0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNa0IsU0FBUyxFQUFDO1lBQXVCLEdBQUV5RSxtQkFBbUIsQ0FBQ0ksUUFBUSxDQUFDSCxPQUFPLENBQVEsRUFDckZoRyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNa0IsU0FBUyxFQUFDO1lBQXVCLE9BQVMsRUFDaER0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNa0IsU0FBUyxFQUFDO1lBQXVCLEdBQUV5RSxtQkFBbUIsQ0FBQ0ksUUFBUSxDQUFDRixLQUFLLENBQVEsQ0FDOUUsR0FDSCxJQUFJLENBQ0gsQ0FDRCxDQUNELENBQ0Y7VUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREEsSUFBQWpHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFnVyxNQUFBLEdBQUFoVyxPQUFBO1VBQ0EsSUFBQWlXLGFBQUEsR0FBQWpXLE9BQUE7VUFFQSxJQUFBNkksTUFBQSxHQUFBN0ksT0FBQTtVQUNBLElBQUE4SSxLQUFBLEdBQUE5SSxPQUFBO1VBQ00sU0FBVTJXLG9CQUFvQkEsQ0FBQztZQUFFOVEsUUFBUTtZQUFFTDtVQUFXLENBQUU7WUFDN0QsTUFBTTtjQUFFdkM7WUFBSSxDQUFFLEdBQUd1QyxXQUFXO1lBRTVCLE1BQU07Y0FBRTZCLGFBQWE7Y0FBRWhIO1lBQUssQ0FBRSxHQUFHLElBQUE0RyxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3RELE1BQU1tRixtQkFBbUIsR0FBR2pILFdBQVcsQ0FBQ2lELFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ2dGLFFBQVEsQ0FBQ3hCLEVBQUUsQ0FBQztZQUVuRSxNQUFNc0QsT0FBTyxHQUFHbUQsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkQsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Y0FDdEIsTUFBTW5KLFFBQVEsR0FBR3hCLEtBQUssQ0FBQ2lGLGdCQUFnQixDQUFDckMsSUFBSSxDQUFDb0IsRUFBRSxDQUFDO2NBRWhEZ0QsYUFBYSxDQUFDO2dCQUNiM0csSUFBSSxFQUFFLElBQUk7Z0JBQ1ZrRCxJQUFJLEVBQUUsU0FBUztnQkFDZjZHLElBQUksRUFBRTtrQkFDTHZJLGdCQUFnQixFQUFFMkQsUUFBUSxDQUFDeEIsRUFBRTtrQkFDN0J4QyxRQUFRO2tCQUNSMkQsV0FBVztrQkFDWEs7O2VBRUQsQ0FBQztZQUNILENBQUM7WUFFRCxNQUFNeVIsUUFBUSxHQUFHQSxDQUFDO2NBQUV0VSxJQUFJLEVBQUVvRjtZQUFJLENBQUUsS0FBSzFCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUMrQixNQUFBLENBQUEwRSxPQUFPO2NBQUNuRixJQUFJLEVBQUUsU0FBU0EsSUFBSSxDQUFDMEYsTUFBTTtZQUFFLEVBQUk7WUFDOUUsT0FDQ3BILE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUlhLE9BQU8sRUFBRUEsT0FBTztjQUFFNkgsR0FBRyxFQUFFLEdBQUd2TSxJQUFJLENBQUNvQixFQUFFLElBQUl3QixRQUFRLENBQUN4QixFQUFFLEVBQUU7Y0FBRTJELFNBQVMsRUFBQztZQUFtQixHQUNwRnRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGNBQ0NKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNtUCxhQUFBLENBQUFJLFlBQVk7Y0FBQzlNLElBQUksRUFBRTFELFFBQVEsQ0FBQzBEO1lBQUksRUFBSSxDQUNoQyxFQUNON0MsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFtQyxHQUNqRHRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU1rQixTQUFTLEVBQUM7WUFBZ0IsR0FBRW5DLFFBQVEsQ0FBQ1IsS0FBSyxDQUFRLEVBQ3hEcUIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUE0QixHQUMxQ3RCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNrUCxNQUFBLENBQUFNLHNCQUFzQjtjQUFDdFQsSUFBSSxFQUFFNkMsUUFBUTtjQUFFTCxXQUFXLEVBQUVBO1lBQVcsRUFBSSxFQUNwRWtCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBYyxHQUM1QnRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNnQyxLQUFBLENBQUFnQixJQUFJO2NBQUNoSCxLQUFLLEVBQUUySixtQkFBbUIsRUFBRXJCLFVBQVU7Y0FBRXJCLE9BQU8sRUFBRXVOO1lBQVEsRUFBSSxDQUM5RCxDQUNELENBQ0QsQ0FDRjtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBNVEsTUFBQSxHQUFBMUcsT0FBQTtVQUVBLElBQUFzSyxjQUFBLEdBQUF0SyxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFFTSxTQUFVdVcsb0JBQW9CQSxDQUFDO1lBQUV2VCxJQUFJO1lBQUV3QztVQUFXLENBQUU7WUFDekQsTUFBTUssUUFBUSxHQUFHN0MsSUFBSTtZQUNyQixNQUFNO2NBQUVaO1lBQUssQ0FBRSxHQUFHLElBQUE2RSxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQ3ZDLE1BQU1tRixtQkFBbUIsR0FBR2pILFdBQVcsQ0FBQ2lELFVBQVUsQ0FBQzVILEdBQUcsQ0FBQ2dGLFFBQVEsQ0FBQ3hCLEVBQUUsQ0FBQztZQUVuRSxJQUFJLENBQUNvSSxtQkFBbUIsRUFBRXRCLFFBQVEsRUFBRUMsVUFBVSxFQUFFLE9BQU8sSUFBSTtZQUMzRCxNQUFNNEwsS0FBSyxHQUFHdkssbUJBQW1CLEVBQUV0QixRQUFRLEVBQUVDLFVBQVUsRUFBRTNGLEdBQUcsQ0FBQyxDQUFDekMsSUFBSSxFQUFFeU4sS0FBSyxLQUN4RS9KLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN3RCxjQUFBLENBQUF3QiwyQkFBMkI7Y0FBQzBELEdBQUcsRUFBRSxHQUFHeE0sSUFBSSxFQUFFNEYsSUFBSSxJQUFJNkgsS0FBSyxPQUFPO2NBQUV6TixJQUFJLEVBQUVBO1lBQUksRUFDM0UsQ0FBQztZQUVGLE9BQU8wRCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQTRCLEdBQUVnUCxLQUFLLENBQU87VUFDakU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFoUSxXQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQW9LLE1BQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBOEksS0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUEwRyxNQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFDQSxJQUFBMFYsU0FBQSxHQUFBMVYsT0FBQTtVQUVNLFNBQVUrVixJQUFJQSxDQUFDO1lBQUUvUztVQUFJLENBQUU7WUFDNUIsTUFBTTtjQUFFZixLQUFLO2NBQUU1QixLQUFLO2NBQUVnSDtZQUFhLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQzdELE1BQU07Y0FBRXJFO1lBQUksQ0FBRSxHQUFHRCxJQUFJO1lBRXJCLE1BQU11VSxjQUFjLEdBQUcsZ0JBQWdCbFgsS0FBSyxDQUFDdUIsWUFBWSwwQkFBMEJvQixJQUFJLENBQUNDLElBQUksQ0FBQ29CLEVBQUUsRUFBRTtZQUNqRyxNQUFNbVQsVUFBVSxHQUFHMU0sS0FBSyxJQUFHO2NBQzFCQSxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0QkYsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIxSyxLQUFLLENBQUNpRixnQkFBZ0IsQ0FBQ3JDLElBQUksQ0FBQ29CLEVBQUUsQ0FBQztjQUMvQmdELGFBQWEsQ0FBQztnQkFDYjNHLElBQUksRUFBRSxJQUFJO2dCQUNWa0QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2Y2RyxJQUFJLEVBQUU7a0JBQ0xqRixXQUFXLEVBQUV4Qzs7ZUFFZCxDQUFDO2NBQ0Z5VSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM1VSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO2NBRWxFLE9BQU8sS0FBSztZQUNiLENBQUM7WUFFRCxPQUNDeUQsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBSWtCLFNBQVMsRUFBQztZQUEyQixHQUN4Q3RCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGlCQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0QsTUFBQSxDQUFBbUIsS0FBSztjQUFDQyxHQUFHLEVBQUV2SSxJQUFJLEVBQUV3SSxRQUFRO2NBQUVvTSxHQUFHLEVBQUUsR0FBRzVVLElBQUksQ0FBQ0MsSUFBSSxTQUFTO2NBQUU4RSxTQUFTLEVBQUM7WUFBZSxFQUFHLEVBQ3BGdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBMEUsSUFBSTtjQUFDQyxJQUFJLEVBQUU0TCxjQUFjO2NBQUU1UCxPQUFPLEVBQUU2UDtZQUFVLEdBQzlDOVEsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzdELElBQUksQ0FBQ0MsSUFBSSxDQUFNLENBQ2QsQ0FDQyxFQUNUd0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFjLEdBQzVCdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dDLEtBQUEsQ0FBQWdCLElBQUk7Y0FDSjlCLFNBQVMsRUFBQyxxQkFBcUI7Y0FDL0JpQyxLQUFLLEVBQUU7Z0JBQUV6RSxXQUFXLEVBQUV4QztjQUFJLENBQUU7Y0FDNUJGLEtBQUssRUFBRWIsS0FBSyxDQUFDd0csVUFBVSxDQUFDM0YsS0FBSztjQUM3QmlILE9BQU8sRUFBRTJMLFNBQUEsQ0FBQWdCO1lBQWMsRUFDdEIsQ0FDRyxDQUNGO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUEzSixLQUFBLEdBQUEvTSxPQUFBO1VBRUEsSUFBQThYLFFBQUEsR0FBQTlYLE9BQUE7VUFFTztVQUFVLFNBQVVxVyxZQUFZQSxDQUFDO1lBQUU5TSxJQUFJO1lBQUV2QjtVQUFTLENBQXdDO1lBQ2hHLE1BQU04RSxHQUFHLEdBQUcsZ0NBQWdDdkQsSUFBSSxnQkFBZ0J2QixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xHLE9BQ0MrRSxLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUU4RTtZQUFHLEdBQ2xCQyxLQUFBLENBQUFqRyxhQUFBLENBQUNnUixRQUFBLENBQUFDLE9BQU87Y0FBQzdVLElBQUksRUFBRXFHO1lBQUksRUFBSSxDQUNsQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUF3RCxLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQThJLEtBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBNlYsS0FBQSxHQUFBN1YsT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBRU87VUFBVSxTQUFVc1EsV0FBV0EsQ0FBQztZQUFFVixNQUFNO1lBQUUzTTtVQUFJLENBQUU7WUFDdEQsTUFBTTtjQUFFYjtZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUV2QyxJQUFJLENBQUNzSSxNQUFNLEVBQUVsTSxNQUFNLEVBQUUsT0FBTyxJQUFJO1lBRWhDLE9BQ0NxSixLQUFBLENBQUFqRyxhQUFBLENBQUFpRyxLQUFBLENBQUFoRyxRQUFBLFFBQ0NnRyxLQUFBLENBQUFqRyxhQUFBLENBQUNnQyxLQUFBLENBQUFnQixJQUFJO2NBQ0prTyxFQUFFLEVBQUMsS0FBSztjQUNSaFEsU0FBUyxFQUFDLHVCQUF1QjtjQUNqQ2xGLEtBQUssRUFBRThNLE1BQU07Y0FDYjdGLE9BQU8sRUFBRThMLEtBQUEsQ0FBQW9DLGVBQWU7Y0FDeEJoTyxLQUFLLEVBQUU7Z0JBQUVoSDtjQUFJO1lBQUUsRUFDZCxDQUNBO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUE4SixLQUFBLEdBQUEvTSxPQUFBO1VBQ0EsSUFBQWtZLFNBQUEsR0FBQWxZLE9BQUE7VUFFQSxJQUFBcUssWUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBRU87VUFBVSxTQUFVaVksZUFBZUEsQ0FBQztZQUFFalYsSUFBSTtZQUFFQztVQUFJLENBQUU7WUFDeEQsTUFBTWlMLEdBQUcsR0FBR25CLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTTtjQUFFL0w7WUFBSyxDQUFFLEdBQUcsSUFBQTZFLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDdkMsTUFBTSxDQUFDK0QsSUFBSSxFQUFFZ0ksT0FBTyxDQUFDLEdBQUd0RyxLQUFLLENBQUN0RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU1xRixHQUFHLEdBQUcsNEJBQTRCekIsSUFBSSxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFDL0QsTUFBTVQsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJ5SSxPQUFPLENBQUMsQ0FBQ2hJLElBQUksQ0FBQztjQUNkLE9BQU8sSUFBSTtZQUNaLENBQUM7WUFFRCxPQUNDMEIsS0FBQSxDQUFBakcsYUFBQTtjQUFTa0IsU0FBUyxFQUFFOEUsR0FBRztjQUFFb0IsR0FBRyxFQUFFQTtZQUFHLEdBQ2hDbkIsS0FBQSxDQUFBakcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBWSxvQkFBb0I7Y0FBQ0wsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZDbUMsS0FBQSxDQUFBakcsYUFBQSxDQUFDdUQsWUFBQSxDQUFBaUIsaUJBQWlCLFFBQ2pCeUIsS0FBQSxDQUFBakcsYUFBQSxlQUFPOUQsSUFBSSxDQUFDNEYsSUFBSSxDQUFRLENBQ0wsRUFDcEJtRSxLQUFBLENBQUFqRyxhQUFBLENBQUN1RCxZQUFBLENBQUEwQixrQkFBa0IsUUFDbEJnQixLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBWSxHQUN6QmhGLElBQUksQ0FBQ21WLFNBQVMsQ0FBQ0MsU0FBUyxHQUN4QnJMLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQWlHLEtBQUEsQ0FBQWhHLFFBQUEsUUFDQ2dHLEtBQUEsQ0FBQWpHLGFBQUEsc0JBQWUsRUFDZmlHLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ29SLFNBQUEsQ0FBQUcsUUFBUTtjQUFDeEssT0FBTyxFQUFFN0ssSUFBSSxDQUFDbVYsU0FBUyxDQUFDQztZQUFTLEVBQUksQ0FDN0MsR0FFSHJMLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQWlHLEtBQUEsQ0FBQWhHLFFBQUEsUUFBRzNFLEtBQUssRUFBRWtXLFVBQVUsQ0FDcEIsRUFFRHZMLEtBQUEsQ0FBQWpHLGFBQUEsYUFBSzdELElBQUksQ0FBQ0MsSUFBSSxDQUFNLEVBQ3BCNkosS0FBQSxDQUFBakcsYUFBQSxDQUFDb1IsU0FBQSxDQUFBRyxRQUFRO2NBQUN4SyxPQUFPLEVBQUU3SyxJQUFJLENBQUNtVixTQUFTLENBQUNyRDtZQUFPLEVBQUksQ0FDeEMsQ0FDYyxDQUNDLENBQ2Q7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQWpNLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBc0ksR0FBQSxHQUFBdEksT0FBQTtVQUNBLElBQUF1WSxPQUFBLEdBQUF2WSxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFnSixNQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQXdZLFFBQUEsR0FBQXhZLE9BQUE7VUFDQSxJQUFBOFQsT0FBQSxHQUFBOVQsT0FBQTtVQUVBLE1BQU15WSxHQUFHLEdBQUdGLE9BQUEsQ0FBQTFSLE9BQU0sRUFBRTZSLE1BQU0sRUFBRUMsUUFBUSxJQUFJLFFBQVE7VUFDMUMsU0FBVXhPLEtBQUtBLENBQUM7WUFBRTlKLEtBQUs7WUFBRWdILGFBQWE7WUFBRWpGO1VBQUssQ0FBRTtZQUNwRCxNQUFNUSxLQUFLLEdBQUc7Y0FBRVIsS0FBSztjQUFFSCxLQUFLLEVBQUU1QixLQUFLLENBQUM0QixLQUFLO2NBQUU1QixLQUFLO2NBQUVnSDtZQUFhLENBQUU7WUFDakUsT0FDQ1gsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csUUFBQSxDQUFBMlIsZ0JBQWdCLENBQUNDLFFBQVE7Y0FBQ2pXLEtBQUssRUFBRUE7WUFBSyxHQUN0QzhELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QixHQUFBLENBQUF3USxhQUFhLFFBQ2JwUyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMFIsUUFBQSxDQUFBclIsZ0JBQWdCO2NBQUNDLFFBQVEsRUFBRTtZQUFJLEVBQUksRUFDcENWLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNnTixPQUFBLENBQUFpRixNQUFNLE9BQUcsRUFDVnJTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxNQUFBLENBQUFtQixLQUFjO2NBQUNuQyxTQUFTLEVBQUMsMEJBQTBCO2NBQUNJLElBQUksRUFBRVMsTUFBQSxDQUFBdUksS0FBSyxDQUFDNEg7WUFBVSxHQUMxRXRTLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUlrQixTQUFTLEVBQUM7WUFBTyxHQUFFM0gsS0FBSyxDQUFDNEIsS0FBSyxDQUFDSyxNQUFNLENBQUMrQyxLQUFLLENBQU0sRUFDckRxQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxZQUFJMUUsS0FBSyxDQUFDc0csS0FBSyxDQUFLLENBQ0osQ0FDRixDQUNXO1VBRTlCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBcUUsS0FBQSxHQUFBL00sT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBRU87VUFBVSxTQUFVK1gsT0FBT0EsQ0FBQztZQUFFN1UsSUFBSTtZQUFFOEU7VUFBUyxDQUF3QztZQUMzRixNQUFNOEUsR0FBRyxHQUFHLGVBQWU5RSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzdELE9BQU8rRSxLQUFBLENBQUFqRyxhQUFBLENBQUMrQixNQUFBLENBQUEwRSxPQUFPO2NBQUNuRixJQUFJLEVBQUVsRixJQUFJO2NBQUU4RSxTQUFTLEVBQUU4RTtZQUFHLEVBQUk7VUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTkEsSUFBQXBHLE1BQUEsR0FBQTFHLE9BQUE7VUFFQSxJQUFBeU4sUUFBQSxHQUFBek4sT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQWlILFFBQUEsR0FBQWpILE9BQUE7VUFFTSxTQUFVOEwsMkJBQTJCQSxDQUFDO1lBQUU5STtVQUFJLENBQUU7WUFDbkQsTUFBTTtjQUFFWjtZQUFLLENBQUUsR0FBRyxJQUFBNkUsUUFBQSxDQUFBSyxtQkFBbUIsR0FBRTtZQUN2QyxNQUFNMkYsU0FBUyxHQUFHO2NBQ2pCLGFBQWEsRUFBRSxvQkFBb0I7Y0FDbkNDLE9BQU8sRUFBRSxpQkFBaUI7Y0FDMUJDLFNBQVMsRUFBRSxtQkFBbUI7Y0FDOUJDLFdBQVcsRUFBRTthQUNiO1lBRUQsTUFBTUMsTUFBTSxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDakssUUFBUSxDQUFDLE9BQU9KLElBQUksQ0FBQ3FLLE1BQU0sQ0FBQyxHQUFHckssSUFBSSxDQUFDcUssTUFBTSxHQUFHckssSUFBSSxDQUFDcUssTUFBTSxDQUFDekUsSUFBSTtZQUVwRyxPQUNDbEMsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJHLFFBQUEsQ0FBQUcsT0FBTztjQUFDQyxPQUFPLEVBQUUsR0FBRzdLLElBQUksQ0FBQ0UsSUFBSSxLQUFLZCxLQUFLLENBQUNxRyxVQUFVLENBQUM2RSxnQkFBZ0IsQ0FBQ0QsTUFBTSxDQUFDLEVBQUU7Y0FBRW1DLEdBQUcsRUFBRSxHQUFHeE0sSUFBSSxDQUFDRSxJQUFJLElBQUltSyxNQUFNO1lBQUUsR0FDNUczRyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0IsTUFBQSxDQUFBMEUsT0FBTztjQUFDbkYsSUFBSSxFQUFFNkUsU0FBUyxDQUFDSSxNQUFNLENBQUM7Y0FBRXJGLFNBQVMsRUFBRSw4QkFBOEJxRixNQUFNO1lBQUUsRUFBSSxDQUM5RTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBM0csTUFBQSxHQUFBMUcsT0FBQTtVQWdDTyxNQUFNNFksZ0JBQWdCLEdBQUEzWCxPQUFBLENBQUEyWCxnQkFBQSxHQUFHbFMsTUFBQSxDQUFBRyxPQUFLLENBQUNvUyxhQUFhLENBQUMsRUFBb0MsQ0FBQztVQUNsRixNQUFNM1IsbUJBQW1CLEdBQUdBLENBQUEsS0FBTVosTUFBQSxDQUFBRyxPQUFLLENBQUNxUyxVQUFVLENBQUNOLGdCQUFnQixDQUFDO1VBQUMzWCxPQUFBLENBQUFxRyxtQkFBQSxHQUFBQSxtQkFBQTtVQUVyRSxNQUFNNlIsYUFBYSxHQUFBbFksT0FBQSxDQUFBa1ksYUFBQSxHQUFHelMsTUFBQSxDQUFBRyxPQUFLLENBQUNvUyxhQUFhLENBQUMsRUFBb0MsQ0FBQztVQUMvRSxNQUFNaEwsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTXZILE1BQUEsQ0FBQUcsT0FBSyxDQUFDcVMsVUFBVSxDQUFDQyxhQUFhLENBQUM7VUFBQ2xZLE9BQUEsQ0FBQWdOLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDdEUsSUFBQWxCLEtBQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBeVUsTUFBQSxHQUFBelUsT0FBQTtVQUlNLFNBQVVvWixJQUFJQSxDQUFDO1lBQUVwVztVQUFJLENBQUU7WUFDNUIsTUFBTTtjQUFFQyxJQUFJLEVBQUU2UjtZQUFPLENBQUUsR0FBRzlSLElBQUk7WUFDOUIsTUFBTSxDQUFDVyxRQUFRLEVBQUUrRCxXQUFXLENBQUMsR0FBR3FGLEtBQUssQ0FBQ3RGLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTXFGLEdBQUcsR0FBRyxzQkFBc0JuSixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUVsRSxPQUNDb0osS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFFOEU7WUFBRyxHQUNsQkMsS0FBQSxDQUFBakcsYUFBQTtjQUFRa0IsU0FBUyxFQUFDO1lBQTBCLEdBQzNDK0UsS0FBQSxDQUFBakcsYUFBQTtjQUFTa0IsU0FBUyxFQUFDO1lBQStDLEdBQ2pFK0UsS0FBQSxDQUFBakcsYUFBQSxhQUFLZ08sT0FBTyxDQUFDNVIsSUFBSSxDQUFNLEVBQ3ZCNkosS0FBQSxDQUFBakcsYUFBQSxjQUNDaUcsS0FBQSxDQUFBakcsYUFBQSxDQUFDMk4sTUFBTSxDQUFDZ0IsV0FBVyxPQUFHLENBQ2pCLENBQ0csQ0FDRixDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFuTixHQUFBLEdBQUF0SSxPQUFBO1VBQ0EsSUFBQXlVLE1BQUEsR0FBQXpVLE9BQUE7VUFDQSxJQUFBNkksTUFBQSxHQUFBN0ksT0FBQTtVQUNBLElBQUErTSxLQUFBLEdBQUEvTSxPQUFBO1VBR00sU0FBVWtVLGNBQWNBLENBQUM7WUFBRWxSO1VBQUksQ0FBRTtZQUN0QyxPQUNDK0osS0FBQSxDQUFBakcsYUFBQSxDQUFBaUcsS0FBQSxDQUFBaEcsUUFBQSxRQUNDZ0csS0FBQSxDQUFBakcsYUFBQTtjQUFRa0IsU0FBUyxFQUFDO1lBQTBCLEdBQzNDK0UsS0FBQSxDQUFBakcsYUFBQTtjQUFTa0IsU0FBUyxFQUFDO1lBQStDLEdBQ2pFK0UsS0FBQSxDQUFBakcsYUFBQSxjQUNDaUcsS0FBQSxDQUFBakcsYUFBQSxhQUNFOUQsSUFBSSxFQUFFd0MsV0FBVyxFQUFFdkMsSUFBSSxFQUFFQyxJQUFJLEdBQzdCNkosS0FBQSxDQUFBakcsYUFBQSxDQUFBaUcsS0FBQSxDQUFBaEcsUUFBQSxRQUFHL0QsSUFBSSxDQUFDd0MsV0FBVyxDQUFDdkMsSUFBSSxDQUFDQyxJQUFJLENBQUksR0FFakM2SixLQUFBLENBQUFqRyxhQUFBLENBQUN3QixHQUFBLENBQUErUSxZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUNDLEtBQUssRUFBQztZQUFPLEVBQ3hDLENBQ0csRUFDTHhNLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUF5QixHQUN2QytFLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQ3dCLEdBQUEsQ0FBQStRLFlBQVk7Y0FBQ0MsTUFBTSxFQUFDLE1BQU07Y0FBQ0MsS0FBSyxFQUFDLE9BQU87Y0FBQ0MsS0FBSyxFQUFDO1lBQU0sRUFBRyxDQUNwRCxDQUNELEVBRU56TSxLQUFBLENBQUFqRyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBd0IsR0FDdEMrRSxLQUFBLENBQUFqRyxhQUFBLENBQUMrQixNQUFBLENBQUFXLFVBQVU7Y0FBQ3BCLElBQUksRUFBQyxTQUFTO2NBQUNKLFNBQVMsRUFBQyxxQkFBcUI7Y0FBQ1osUUFBUTtZQUFBLEVBQUcsRUFDdEUyRixLQUFBLENBQUFqRyxhQUFBLENBQUMyTixNQUFNLENBQUNnQixXQUFXLE9BQUcsQ0FDakIsQ0FDRyxDQUNGLENBQ1A7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQS9PLE1BQUEsR0FBQTFHLE9BQUE7VUFFQSxJQUFBeVosUUFBQSxHQUFBelosT0FBQTtVQUNBLElBQUFnSCxXQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQTBaLE9BQUEsR0FBQTFaLE9BQUE7VUFDQSxJQUFBa1QsTUFBQSxHQUFBbFQsT0FBQTtVQUNBLElBQUEyWixRQUFBLEdBQUEzWixPQUFBO1VBQ0EsSUFBQTRaLFdBQUEsR0FBQTVaLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUF3QixLQUFBLEdBQUF4QixPQUFBO1VBRU0sU0FBVTZaLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFelgsS0FBSztjQUFFNFIsVUFBVTtjQUFFM1QsS0FBSztjQUFFZ0g7WUFBYSxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFDdEUsTUFBTSxDQUFDNUMsSUFBSSxFQUFFZ0ksT0FBTyxDQUFDLEdBQUczTSxNQUFBLENBQUFHLE9BQUssQ0FBQ1ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUM5RCxRQUFRLEVBQUUrRCxXQUFXLENBQUMsR0FBR2hCLE1BQUEsQ0FBQUcsT0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJEZixNQUFBLENBQUFHLE9BQUssQ0FBQ3FJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQzhFLFVBQVUsRUFBRXBRLElBQUksRUFBRTtnQkFDdEI2VixRQUFBLENBQUFLLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNuQzs7Y0FFRE4sUUFBQSxDQUFBSyxPQUFPLENBQUNFLFNBQVMsQ0FBQyxXQUFXaEcsVUFBVSxDQUFDcFEsSUFBSSxFQUFFLENBQUM7WUFDaEQsQ0FBQyxFQUFFLENBQUNvUSxVQUFVLENBQUNwUSxJQUFJLENBQUMsQ0FBQztZQUVyQjhDLE1BQUEsQ0FBQUcsT0FBSyxDQUFDcUksU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSThFLFVBQVUsRUFBRXRULElBQUksRUFBRTBELFVBQVUsQ0FBQzZWLFFBQVEsQ0FBQzNGLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzRGLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUNyRi9WLFVBQVUsQ0FBQzZWLFFBQVEsQ0FBQzNGLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzRGLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE1BQU07WUFDdkUsQ0FBQyxFQUFFLENBQUNuRyxVQUFVLEVBQUV0VCxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJc1QsVUFBVSxDQUFDdFQsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUMvQixNQUFNNFMsVUFBVSxHQUFHQSxDQUFBLEtBQU1ELE9BQU8sQ0FBQyxDQUFDaEksSUFBSSxDQUFDO1lBQ3ZDLE1BQU1vSSxVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0g7Z0JBQ0EsTUFBTXBULEtBQUssQ0FBQzRCLEtBQUssQ0FBQ3dSLFVBQVUsQ0FBQ08sVUFBVSxDQUFDdkosSUFBSSxDQUFDNUksUUFBUSxDQUFDO2dCQUN0RDZGLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPaEMsQ0FBQyxFQUFFO2dCQUNYYixPQUFPLENBQUNELEtBQUssQ0FBQ2MsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1Q7Y0FBQTtZQUVGLENBQUM7WUFDRCxNQUFNOE4sU0FBUyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM1QixNQUFNQyxVQUFVLEVBQUU7Y0FDbEJILFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxNQUFNeEcsR0FBRyxHQUFHLGFBQWFuSixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUV6RCxPQUNDK0MsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQUosTUFBQSxDQUFBRyxPQUFBLENBQUFFLFFBQUEsUUFDQ0wsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRTLE9BQUEsQ0FBQWpGLE1BQU07Y0FDTnpNLFNBQVMsRUFBRThFLEdBQUc7Y0FDZHNOLFFBQVEsRUFBQyxPQUFPO2NBQ2hCL08sSUFBSSxFQUFFMkksVUFBVSxDQUFDdFQsSUFBSTtjQUNyQjJJLE9BQU8sRUFBRUEsQ0FBQSxLQUFNaEMsYUFBYSxDQUFDO2dCQUFFM0csSUFBSSxFQUFFO2NBQUssQ0FBRTtZQUFDLEdBRTdDZ0csTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBeUMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVzSyxVQUFVLENBQUNwUSxJQUFJO2NBQzFCZ0csT0FBTyxFQUFFO2dCQUNSdEcsSUFBSSxFQUFFb0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3RGLEtBQUEsQ0FBQTRYLElBQUk7a0JBQUNwVyxJQUFJLEVBQUVnUixVQUFVLENBQUN2SjtnQkFBSSxFQUFJO2dCQUNyQyxrQkFBa0IsRUFBRS9ELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUM2UyxRQUFBLENBQUFoRSx3QkFBd0I7a0JBQUMzUyxJQUFJLEVBQUVnUixVQUFVLENBQUN2SjtnQkFBSSxFQUFJO2dCQUN2RSxjQUFjLEVBQUUvRCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOFMsV0FBQSxDQUFBN0YsaUJBQWlCO2tCQUFDL1EsSUFBSSxFQUFFZ1IsVUFBVSxDQUFDdko7Z0JBQUksRUFBSTtnQkFDNURxSyxPQUFPLEVBQUVwTyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNlMsUUFBQSxDQUFBaEUsd0JBQXdCO2tCQUFDM1MsSUFBSSxFQUFFZ1IsVUFBVSxDQUFDdko7Z0JBQUk7O1lBQ3hELEVBQ0EsQ0FDTSxFQUNSWSxJQUFJLElBQ0ozRSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb00sTUFBQSxDQUFBUSxZQUFZO2NBQUNoVCxJQUFJO2NBQUM4UyxTQUFTLEVBQUVBLFNBQVM7Y0FBRUcsUUFBUSxFQUFFTDtZQUFVLEdBQzVENU0sTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQyxlQUFlO2NBQUNMLE9BQU8sRUFBRTJMO1lBQVUsRUFBSSxFQUN0RDVNLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBZSxHQUM3QnRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGFBQUsxRSxLQUFLLENBQUNxUixVQUFVLENBQUNwTyxLQUFLLENBQU0sRUFDakNxQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxZQUFJMUUsS0FBSyxDQUFDcVIsVUFBVSxDQUFDL0UsV0FBVyxDQUFLLENBQ2hDLENBRVAsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdFQSxJQUFBM0IsS0FBQSxHQUFBL00sT0FBQTtVQUNBLElBQUF5VSxNQUFBLEdBQUF6VSxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFxYSxPQUFBLEdBQUFyYSxPQUFBO1VBQ00sU0FBVW9aLElBQUlBLENBQUM7WUFBRXBXO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUUzQztZQUFLLENBQUUsR0FBRyxJQUFBNEcsUUFBQSxDQUFBZ0gsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTSxDQUFDdEssUUFBUSxFQUFFK0QsV0FBVyxDQUFDLEdBQUdxRixLQUFLLENBQUN0RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1xRixHQUFHLEdBQUcsc0JBQXNCbkosUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDbEUsTUFBTXlRLFNBQVMsR0FBRyxNQUFNdEosS0FBSyxJQUFHO2NBQy9CLElBQUk7Z0JBQ0hwRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQm9ELEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QixNQUFNMUssS0FBSyxDQUFDaUQsSUFBSSxDQUFDeEMsSUFBSSxFQUFFO2dCQUN2QjRHLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPaEMsQ0FBQyxFQUFFO2dCQUNYYixPQUFPLENBQUNELEtBQUssQ0FBQ2MsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBQ0QsT0FDQ3FILEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBRThFO1lBQUcsR0FDbEJDLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBUWtCLFNBQVMsRUFBQztZQUEwQixHQUMzQytFLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBU2tCLFNBQVMsRUFBQztZQUErQyxHQUNqRStFLEtBQUEsQ0FBQWpHLGFBQUEsb0JBQWEsRUFDYmlHLEtBQUEsQ0FBQWpHLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUF3QixHQUN0QytFLEtBQUEsQ0FBQWpHLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQVcsVUFBVTtjQUFDcEIsSUFBSSxFQUFDLFNBQVM7Y0FBQ0osU0FBUyxFQUFDLHFCQUFxQjtjQUFDTCxPQUFPLEVBQUV5TTtZQUFTLEVBQUksRUFDakZySCxLQUFBLENBQUFqRyxhQUFBLENBQUMyTixNQUFNLENBQUNnQixXQUFXLE9BQUcsQ0FDakIsQ0FDRyxDQUNGLEVBQ1QxSSxLQUFBLENBQUFqRyxhQUFBO2NBQVNrQixTQUFTLEVBQUM7WUFBb0IsR0FDdEMrRSxLQUFBLENBQUFqRyxhQUFBLENBQUN1VCxPQUFBLENBQUFDLFFBQVE7Y0FBQ2phLEtBQUssRUFBRUEsS0FBSyxDQUFDaUQsSUFBSTtjQUFFbEIsS0FBSyxFQUFFL0IsS0FBSyxDQUFDK0IsS0FBSyxDQUFDa0I7WUFBSSxFQUFJLENBQy9DLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7VUNwQ0E7O1VBRUEyVCxNQUFBLENBQUFzRCxjQUFBLENBQUF0WixPQUFBO1lBQ0EyQixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQThELE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUE2SSxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQXdhLE9BQUEsR0FBQXhhLE9BQUE7VUFDQSxJQUFBeU4sUUFBQSxHQUFBek4sT0FBQTtVQUNNLFNBQVV5YSxjQUFjQSxDQUFDO1lBQUV6WDtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFM0M7WUFBSyxDQUFFLEdBQUcsSUFBQTRHLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDdkMsTUFBTWMsSUFBSSxHQUFHb1MsT0FBQSxDQUFBcEosS0FBSyxDQUFDcE8sSUFBSSxDQUFDdUcsSUFBSSxDQUFDO1lBQzdCLElBQUl1RCxHQUFHLEdBQUcsaUNBQWlDOUosSUFBSSxDQUFDdUcsSUFBSSxFQUFFO1lBRXRELElBQUlsSixLQUFLLENBQUM2QixnQkFBZ0IsRUFBRXFILElBQUksS0FBS3ZHLElBQUksQ0FBQ3VHLElBQUksRUFBRXVELEdBQUcsSUFBSSxTQUFTO1lBRWhFLE1BQU16SCxLQUFLLEdBQUdyQyxJQUFJLENBQUNxQyxLQUFLO1lBQ3hCLE1BQU1xVixXQUFXLEdBQUc1UCxLQUFLLElBQUl6SyxLQUFLLENBQUNnRyxjQUFjLENBQUNyRCxJQUFJLENBQUM7WUFFdkQsT0FDQzBELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUMyRyxRQUFBLENBQUFHLE9BQU87Y0FBQ0MsT0FBTyxFQUFFeEk7WUFBSyxHQUN0QnFCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVNrQixTQUFTLEVBQUU4RSxHQUFHO2NBQUVuRixPQUFPLEVBQUUrUztZQUFXLEdBQzVDaFUsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQytCLE1BQUEsQ0FBQTROLElBQUk7Y0FBQ3JPLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ1gsQ0FDRDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBUyxNQUFBLEdBQUE3SSxPQUFBO1VBQ0EsSUFBQXNJLEdBQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBeVosUUFBQSxHQUFBelosT0FBQTtVQUNBLElBQUFxSyxZQUFBLEdBQUFySyxPQUFBO1VBQ0EsSUFBQWdILFdBQUEsR0FBQWhILE9BQUE7VUFDQSxJQUFBMEcsTUFBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQTJhLFNBQUEsR0FBQTNhLE9BQUE7VUFFTSxTQUFVK1ksTUFBTUEsQ0FBQTtZQUNyQixNQUFNO2NBQUU5VyxLQUFLO2NBQUVHO1lBQUssQ0FBRSxHQUFHLElBQUE2RSxRQUFBLENBQUFLLG1CQUFtQixHQUFFO1lBQzlDLE1BQU07Y0FBRWpDLEtBQUs7Y0FBRXFKLFdBQVc7Y0FBRWtNLE9BQU87Y0FBRUMsT0FBTztjQUFFQztZQUFLLENBQUUsR0FBRzdZLEtBQUssQ0FBQ0ssTUFBTTtZQUVwRSxNQUFNeVksZ0JBQWdCLEdBQUdqUSxLQUFLLElBQUc7Y0FDaENBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0QnlPLFFBQUEsQ0FBQUssT0FBTyxDQUFDRSxTQUFTLENBQUMsb0JBQW9CL1gsS0FBSyxDQUFDZ0QsU0FBUyxDQUFDWixFQUFFLEVBQUUsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsT0FDQ3FDLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxZQUFBLENBQUFZLG9CQUFvQjtjQUFDakQsU0FBUyxFQUFDO1lBQXdCLEdBQ3ZEdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VELFlBQUEsQ0FBQWlCLGlCQUFpQixRQUNqQjVFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQVFrQixTQUFTLEVBQUM7WUFBa0IsR0FDbkN0QixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsR0FBQSxDQUFBMFMsV0FBVztjQUFDQyxNQUFNLEVBQUMsUUFBUTtjQUFDelAsR0FBRyxFQUFFb1AsT0FBTztjQUFFL0MsR0FBRyxFQUFFeFM7WUFBSyxFQUFJLEVBQ3pEcUIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsY0FDQ0osTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBMEUsSUFBSTtjQUFDQyxJQUFJLEVBQUUsZ0JBQWdCMUosS0FBSyxDQUFDb0MsRUFBRTtZQUFFLEdBQ3JDcUMsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBS3pCLEtBQUssQ0FBTSxDQUNWLEVBQ1BxQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsY0FDQ0osTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQyw2QkFBNkI7Y0FBQ0wsT0FBTyxFQUFFb1Q7WUFBZ0IsR0FDckVyVSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0IsTUFBQSxDQUFBMEUsT0FBTztjQUFDbkYsSUFBSSxFQUFDO1lBQVcsRUFBRyxFQUM1QjFCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU1rQixTQUFTLEVBQUM7WUFBc0IsR0FBRS9GLEtBQUssQ0FBQ2dELFNBQVMsQ0FBQy9CLElBQUksQ0FBUSxDQUMvRCxFQUNOd0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUF1QixHQUNwQzZTLE9BQU8sSUFBSW5VLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUM2VCxTQUFBLENBQUFPLFFBQVE7Y0FBQ3pRLElBQUksRUFBRW9RLE9BQU87Y0FBRWhFLEtBQUssRUFBRXpVLEtBQUssQ0FBQ3lZO1lBQU8sRUFBSSxFQUM1REMsS0FBSyxJQUFJcFUsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQzZULFNBQUEsQ0FBQU8sUUFBUTtjQUFDelEsSUFBSSxFQUFFcVEsS0FBSztjQUFFakUsS0FBSyxFQUFFelUsS0FBSyxDQUFDMFk7WUFBSyxFQUFJLENBQ2xELENBQ0QsQ0FDRCxDQUNELENBQ0UsQ0FDVSxFQUNwQnBVLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN1RCxZQUFBLENBQUEwQixrQkFBa0IsUUFDbEJyRixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBU2tCLFNBQVMsRUFBQztZQUFjLEdBQ2hDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBR2tCLFNBQVMsRUFBQztZQUFjLEdBQUUwRyxXQUFXLENBQUssQ0FDcEMsRUFDVmhJLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtrQixTQUFTLEVBQUM7WUFBUyxFQUFPLENBQzFCLENBQ2MsQ0FDQztVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQXRCLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBaUgsUUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFtYixLQUFBLEdBQUFuYixPQUFBO1VBQ0EsSUFBQThJLEtBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBb2IsZUFBQSxHQUFBcGIsT0FBQTtVQUdNLFNBQVVxYixjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRXBaLEtBQUs7Y0FBRUcsS0FBSztjQUFFL0I7WUFBSyxDQUFFLEdBQUcsSUFBQTRHLFFBQUEsQ0FBQUssbUJBQW1CLEdBQUU7WUFDckQsTUFBTWdVLE9BQU8sR0FBRyx1QkFBdUJqYixLQUFLLENBQUM2QixnQkFBZ0IsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7WUFDM0YsTUFBTSxDQUFDcVosVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlVLE1BQUEsQ0FBQUcsT0FBSyxDQUFDWSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXpELE1BQU1nVSxRQUFRLEdBQUczUSxLQUFLLElBQUc7Y0FDeEJ6SyxLQUFLLENBQUM4QixNQUFNLENBQUMySSxLQUFLLENBQUM0USxhQUFhLENBQUM5WSxLQUFLLENBQUM7WUFDeEMsQ0FBQztZQUNELE9BQ0M4RCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFRa0IsU0FBUyxFQUFDO1lBQTRCLEdBQzdDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUF5QixHQU92Q3RCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGtCQUNDSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcVUsS0FBQSxDQUFBUSxLQUFLO2NBQ0xDLFFBQVEsRUFBRUgsUUFBUTtjQUNsQmxTLElBQUksRUFBQyxNQUFNO2NBQ1h2QixTQUFTLEVBQUMsZ0JBQWdCO2NBQzFCNlQsV0FBVyxFQUFFelosS0FBSyxDQUFDaVMsSUFBSSxDQUFDeUgsTUFBTTtjQUM5QjFULElBQUksRUFBQztZQUFRLEVBQ1osQ0FDTyxDQUNMLEVBQ04xQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsYUFBSzFFLEtBQUssQ0FBQzJaLGFBQWEsQ0FBQzVaLE1BQU0sQ0FBTSxFQUNyQ3VFLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNnQyxLQUFBLENBQUFnQixJQUFJO2NBQUM5QixTQUFTLEVBQUVzVCxPQUFPO2NBQUV4WSxLQUFLLEVBQUViLEtBQUssQ0FBQ3dHLFVBQVUsQ0FBQzNGLEtBQUs7Y0FBRWlILE9BQU8sRUFBRXFSLGVBQUEsQ0FBQVg7WUFBYyxFQUFJLENBQy9FLENBQ0U7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQTFOLEtBQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBb0ssTUFBQSxHQUFBcEssT0FBQTtVQUdNLFNBQVVrYixRQUFRQSxDQUFDO1lBQUVyRSxLQUFLO1lBQUVwTSxJQUFJLEVBQUU7Y0FBRWdCLFFBQVE7Y0FBRXZJO1lBQUk7VUFBRSxDQUFtQztZQUM1RixPQUNDNkosS0FBQSxDQUFBakcsYUFBQTtjQUFLa0IsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDK0UsS0FBQSxDQUFBakcsYUFBQTtjQUFJa0IsU0FBUyxFQUFDO1lBQWtCLEdBQUU2TyxLQUFLLENBQU0sRUFDN0M5SixLQUFBLENBQUFqRyxhQUFBO2NBQVNrQixTQUFTLEVBQUM7WUFBbUIsR0FDckMrRSxLQUFBLENBQUFqRyxhQUFBLENBQUNzRCxNQUFBLENBQUFtQixLQUFLO2NBQUN2RCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUN3RCxHQUFHLEVBQUUsR0FBR0MsUUFBUTtZQUFFLEVBQUksRUFDeERzQixLQUFBLENBQUFqRyxhQUFBO2NBQU1rQixTQUFTLEVBQUM7WUFBaUIsR0FBRTlFLElBQUksQ0FBUSxDQUN0QyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQW9GLEdBQUEsR0FBQXRJLE9BQUE7VUFDQSxJQUFBa0gsTUFBQSxHQUFBbEgsT0FBQTtVQUNBLElBQUEwRyxNQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQWdjLENBQUEsR0FBQWhjLE9BQUE7VUFDQSxJQUFBZ0osTUFBQSxHQUFBaEosT0FBQTtVQUNBLElBQUFpSCxRQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQTBaLE9BQUEsR0FBQTFaLE9BQUE7VUFDQSxJQUFBOFQsT0FBQSxHQUFBOVQsT0FBQTtVQUNBLElBQUFnSCxXQUFBLEdBQUFoSCxPQUFBO1VBQ0EsSUFBQTZJLE1BQUEsR0FBQTdJLE9BQUE7VUFFQSxJQUFBd1ksUUFBQSxHQUFBeFksT0FBQTtVQUNBLElBQUFpYyxLQUFBLEdBQUFqYyxPQUFBO1VBQ0EsSUFBQWtjLFFBQUEsR0FBQWxjLE9BQUE7VUFDQSxJQUFBbWMsY0FBQSxHQUFBbmMsT0FBQTtVQUVPO1VBQVUsU0FBVVMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQ2pFLE1BQU0sQ0FBQzJULFVBQVUsRUFBRTNNLGFBQWEsQ0FBQyxHQUFHLElBQUFYLE1BQUEsQ0FBQWUsUUFBUSxFQUFzQjtjQUFFL0csSUFBSSxFQUFFLEtBQUs7Y0FBRStKLElBQUksRUFBRTtZQUFJLENBQUUsQ0FBQztZQUM5RixNQUFNLENBQUNqSCxLQUFLLEVBQUU0WSxRQUFRLENBQUMsR0FBRyxJQUFBMVYsTUFBQSxDQUFBZSxRQUFRLEVBQUNwSCxLQUFLLENBQUM0VSxhQUFhLEVBQUUsQ0FBQztZQUV6RCxNQUFNO2NBQUU3UztZQUFLLENBQUUsR0FBRy9CLEtBQUs7WUFDdkIsTUFBTTZOLEdBQUcsR0FBR3hILE1BQUEsQ0FBQUcsT0FBSyxDQUFDc0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QixJQUFBakgsTUFBQSxDQUFBVSxTQUFTLEVBQ1IsQ0FBQ3ZILEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSitiLFFBQVEsQ0FBQy9iLEtBQUssQ0FBQ21ELEtBQUssQ0FBQztZQUN0QixDQUFDLEVBQ0QsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQzlDO1lBRUQsTUFBTVosS0FBSyxHQUFHO2NBQ2JSLEtBQUs7Y0FDTEgsS0FBSyxFQUFFNUIsS0FBSyxDQUFDNEIsS0FBSztjQUNsQjVCLEtBQUs7Y0FDTGdILGFBQWE7Y0FDYnpELElBQUksRUFBRXZELEtBQUssQ0FBQ3VELElBQUk7Y0FDaEJzRixPQUFPLEVBQUV0RixJQUFJLElBQUt2RCxLQUFLLENBQUN1RCxJQUFJLEdBQUdBO2FBQy9CO1lBRUQsSUFBSSxDQUFDdkQsS0FBSyxDQUFDZ0QsS0FBSyxFQUFFLE9BQU9xRCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsR0FBQSxDQUFBK1QsVUFBVTtjQUFDMVksUUFBUSxFQUFFO1lBQUksRUFBSTtZQUV2RCxJQUFJLENBQUN0RCxLQUFLLENBQUM0QixLQUFLLENBQUNxYSxLQUFLLEVBQUUsT0FBTzVWLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNrVixDQUFBLENBQUFyVixRQUFRO2NBQUN0RyxLQUFLLEVBQUVBLEtBQUs7Y0FBRStCLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBQ3ZFLElBQUkvQixLQUFLLENBQUM0QixLQUFLLENBQUN3QixpQkFBaUIsS0FBSyxDQUFDLEVBQUUsT0FBT2lELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNrQyxNQUFBLENBQUFtQixLQUFLO2NBQUM5SixLQUFLLEVBQUVBLEtBQUs7Y0FBRStCLEtBQUssRUFBRUEsS0FBSztjQUFFaUYsYUFBYSxFQUFFQTtZQUFhLEVBQUk7WUFFbkgsTUFBTWtWLFdBQVcsR0FBRztjQUFFbmEsS0FBSztjQUFFSCxLQUFLLEVBQUU1QixLQUFLLENBQUM0QixLQUFLO2NBQUUrUixVQUFVO2NBQUUzVCxLQUFLO2NBQUVnSDtZQUFhLENBQUU7WUFDbkYsTUFBTXlGLEdBQUcsR0FBRyxzQkFBc0J0SixLQUFLLENBQUNHLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRXhFLE9BQ0MrQyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLb0gsR0FBRyxFQUFFQTtZQUFHLEdBQ1g3TixLQUFLLENBQUM0QixLQUFLLENBQUM2RixRQUFRLEdBQ3BCcEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS2tCLFNBQVMsRUFBQztZQUFvRCxHQUNsRXRCLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUMrQixNQUFBLENBQUEwRSxPQUFPO2NBQUNuRixJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ3RCaEcsS0FBSyxDQUFDMEYsUUFBUSxDQUNWLEdBQ0gsSUFBSSxFQUNScEIsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dCLEdBQUEsQ0FBQXdRLGFBQWE7Y0FBQzlRLFNBQVMsRUFBRThFO1lBQUcsR0FDNUJwRyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxRQUFBLENBQUEyUixnQkFBZ0IsQ0FBQ0MsUUFBUTtjQUFDalcsS0FBSyxFQUFFQTtZQUFLLEdBQ3RDOEQsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBSLFFBQUEsQ0FBQXJSLGdCQUFnQixPQUFHLEVBQ3BCVCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ04sT0FBQSxDQUFBaUYsTUFBTSxPQUFHLEVBQ1ZyUyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcVYsY0FBQSxDQUFBZCxjQUFjLE9BQUcsRUFDbEIzVSxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRSxXQUFBLENBQUF5QyxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRXJKLEtBQUssQ0FBQ3VELElBQUk7Y0FDckJnRyxPQUFPLEVBQUU7Z0JBQ1I0UyxPQUFPLEVBQUU5VixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1YsUUFBQSxDQUFBcEcsV0FBVyxPQUFHO2dCQUN4QmpRLFFBQVEsRUFBRWEsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21WLEtBQUEsQ0FBQWhULFlBQVk7O1lBQ3ZCLEVBQ0EsQ0FDeUIsRUFDNUJ2QyxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxRQUFBLENBQUFrUyxhQUFhLENBQUNOLFFBQVE7Y0FBQ2pXLEtBQUssRUFBRTJaO1lBQVcsR0FDekM3VixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNFMsT0FBQSxDQUFBRyxXQUFXLE9BQUcsQ0FDUyxDQUNWLENBQ1g7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==