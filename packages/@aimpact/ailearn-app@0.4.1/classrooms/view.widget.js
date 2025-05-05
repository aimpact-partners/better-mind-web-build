System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-app@0.4.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.4.1/components/module-card", "@aimpact/ailearn-app@0.4.1/i18n.ts", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/config", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, RequestAccess, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0,
    RequestAccess: void 0
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
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_5 = _aimpactAilearnApp041StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_8 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_9 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp041ComponentsModuleCard;
    }, function (_aimpactAilearnApp041I18nTs) {
      dependency_11 = _aimpactAilearnApp041I18nTs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_13 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_14 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_16 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041Config) {
      dependency_19 = _aimpactAilearnApp041Config;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_20 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsKernel0112Routing) {
      dependency_21 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_22 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_23 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactChatSdk154Session) {
      dependency_24 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_25 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_26 = _framerMotion2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_27 = _pragmateUi100Beta7Alert;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/model/wrapper', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/tabs', dependency_23], ['@aimpact/chat-sdk/session', dependency_24], ['pragmate-ui/image', dependency_25], ['framer-motion', dependency_26], ['pragmate-ui/alert', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/classrooms/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2137039665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              this.#store.load(this.uri.vars.get('id'));
              _mainLayout.LayoutBroker.refresh = () => this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              _mainLayout.LayoutBroker.refresh = null;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3698429660,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _classrooms.Classroom);
              this.defineReactiveProps(['fetching']);
              _mainLayout.LayoutBroker.overlay = false;
            }
            async load(id) {
              await super.load(id);
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.classrooms, `/classrooms/list`], [this.model.name]]
              });
            }
            async approve({
              uid,
              role
            }) {
              try {
                this.fetching = true;
                const res = await this.model.approve({
                  id: this.model.id,
                  uid,
                  role
                });
                if (!res.status) {
                  throw new Error('Error inviting user');
                }
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async reject(uid) {
              try {
                this.fetching = true;
                const res = await this.model.reject({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async cancelInvitation(email) {
              try {
                this.fetching = true;
                const res = await this.model.cancelInvitation({
                  id: this.model.id,
                  email
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async updateRole(values) {
              try {
                this.fetching = true;
                const res = await this.model.updateRole(values);
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async removeMember(uid) {
              try {
                this.fetching = true;
                const res = await this.model.removeMember({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            requestAccess() {
              return this.model.requestAccess();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/empty
      *****************************************/

      ims.set('./views/assignments/empty', {
        hash: 1224010999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList() {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.empty.assignments;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/index
      *****************************************/

      ims.set('./views/assignments/index', {
        hash: 2249723609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Asssignments = Asssignments;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          var _item = require("./item");
          var _empty = require("./empty");
          function Asssignments() {
            const {
              store
            } = (0, _context.useModuleContext)();
            if (!store.model?.assignments?.length) {
              return React.createElement(_empty.EmptyList, null);
            }
            return React.createElement("div", null, React.createElement(_list.List, {
              className: "entity__list",
              items: store.model.assignments,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assignments/item
      ****************************************/

      ims.set('./views/assignments/item', {
        hash: 472745606,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var React = require("react");
          var _context = require("../context");
          function AssignmentItem({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const href = store.isAdmin ? `/dashboard/${item.id}` : `/assignments/${item.id}`;
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.AssignmentCard, {
              href: href,
              type: item.type,
              id: item.id,
              item: item.module,
              audience: item.module.audience,
              texts: texts,
              entity: "assignment",
              mode: store.isAdmin ? 'teacher' : 'student'
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2074456393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 3854165243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApproveModal = ApproveModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          function ApproveModal({
            item,
            show,
            onClose,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(null);
            const [error, setError] = _react.default.useState(null);
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.model.approve({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.messages.approval.success);
                onClose();
              } catch (e) {
                setError(texts.errors[e.code.toString()]);
                console.error(e.code);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'member',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.forms.approve.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.forms.approve.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              placeholder: texts.form.role.placeholder,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 3805124601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = ConfirmModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function ConfirmModal({
            item,
            show,
            onClose
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selectRole, setSelectRole] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: selectRole,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            const disabled = selectRole === item.role || loading || !selectRole;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 800445425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoleModal = RoleModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function RoleModal({
            item,
            show,
            onClose,
            role,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = roleSelected === item.role || loading || !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              value: role,
              options: options,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 2612404720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitationForm = InvitationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function InvitationForm({
            show,
            onClose,
            role
          }) {
            const {
              store,
              texts,
              globalTexts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: '',
              role: role === 'manager' ? role : 'member'
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleClose = () => {
              setValues(defaultValues);
              setError('');
              setLoading(false);
              onClose();
            };
            const onSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.model.invite({
                ...values
              });
              if (!response.status) {
                // setError(response.error);
                _toast.toast.success(error);
              }
              _toast.toast.success(texts.system.invite.success);
              handleClose();
            };
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            if (!show) return null;
            const options = ['manager', 'member'].map(item => ({
              value: item,
              label: texts.roles[item].title
            }));
            const {
              name,
              email
            } = values;
            const isDisabled = !name || !email || !role || loading;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, texts.form.title)), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "role",
              value: values?.role,
              placeholder: texts.form.role.placeholder,
              options: options,
              onChange: handleChange
            }), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.form.name.label,
              type: "text",
              name: "name",
              value: name,
              variant: "floating",
              onChange: handleChange,
              placeholder: texts.form.name.placeholder,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.form.email.placeholder,
              label: texts.form.email.label,
              type: "email",
              variant: "floating",
              name: "email",
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              disabled: isDisabled,
              variant: "primary",
              loading: loading,
              label: globalTexts.actions.invite
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 2142904461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 2893920516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeSection = CodeSection;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function CodeSection() {
            const {
              store,
              globalTexts,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const [open, setOpen] = _react.default.useState(false);
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/classrooms/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            const onWatch = event => setOpen(!open);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "group-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement("div", {
              className: "group-code__actions"
            }, _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: globalTexts.actions.copy,
              className: "copy__button circle",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }), _react.default.createElement(_icons2.AppIconButton, {
              className: "circle",
              title: globalTexts.actions.watch,
              icon: "watch",
              onClick: onWatch
            }))), open && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "code-modal",
              onClose: onWatch
            }, _react.default.createElement("h2", null, code, " ")));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 3054091816,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _codeSection = require("./code-section");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _routing = require("@beyond-js/kernel/routing");
          //@ts-ignore

          //@ts-ignore

          function HeaderContainer() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const onClick = () => _routing.routing.pushState(`/classrooms/management?id=${store.model.id}`);
            const owner = store.model.owner?.organization ?? store.model.owner.teacher;
            return _react.default.createElement("header", {
              className: "page-container__header mb-1"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, store.model.name), _react.default.createElement(_ui.UserData, {
              data: owner,
              type: store.model.owner.organization ? 'organization' : 'teacher'
            }))), _react.default.createElement(_icons.AppIconButton, {
              className: "btn-header__edit-action",
              icon: "edit",
              onClick: onClick
            }), _react.default.createElement(_codeSection.CodeSection, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1829203393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _header = require("./header/header");
          var _tabs = require("pragmate-ui/tabs");
          var _list = require("./list");
          var _assignments = require("./assignments");
          var _requestAccess = require("./request-access");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [update, setUpdate] = _react.default.useState({});
            const {
              texts,
              globalTexts
            } = store;
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement(_requestAccess.RequestAccess, {
                store: store
              });
            }
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
            const value = {
              store,
              fetching: store.fetching,
              texts,
              globalTexts
            };
            const cls = `app-classroom-creation-page ${store.fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_tabs.TabsContainer, {
              tabs: ['assignments', 'people'],
              className: "pui-page-tabs-container",
              trackUrl: true
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, store.globalTexts.entities.assignments), _react.default.createElement(_tabs.Tab, null, store.texts.people)), _react.default.createElement(_tabs.Panes, {
              items: [_assignments.Asssignments, _list.Members]
            }))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1165083918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList(role) {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = role === 'pending' ? texts.empty.pending : texts.empty.rol;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/list/filters
      ************************************/

      ims.set('./views/list/filters', {
        hash: 3247522206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = Filters;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function Filters({
            selected,
            setSelected
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setSelected(value === 'all' ? 'people' : value);
            };
            const size = (0, _components.useMediaQuery)();
            if (size === 'xs') {
              const options = [];
              Object.keys(texts.roles).forEach(item => {
                options.push({
                  value: texts.roles[item].identifier,
                  label: texts.roles[item].entity
                });
              });
              return _react.default.createElement(_reactSelect.ReactSelect, {
                value: selected,
                name: "owner",
                options: options,
                onChange: onChange
              });
            }
            const options = [];
            Object.keys(texts.roles).forEach(item => {
              const total = store.model.pendings.length;
              if (item === 'pending' && !store.isAdmin) return;
              options.push(_react.default.createElement(_components.Button, {
                variant: "default",
                key: item,
                value: texts.roles[item].identifier
              }, _react.default.createElement("div", null, texts.roles[item].entity, item === 'pending' && total > 0 && _react.default.createElement("i", {
                className: "button-group__badge"
              }, store.model.pendings.length))));
            });
            return _react.default.createElement(_components.ButtonGroup, {
              onChange: onChange,
              selected: 0,
              orientation: "column",
              size: "tall",
              variant: "default"
            }, options);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 1613331218,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Members = Members;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _empty = require("./empty");
          var _invite = require("../forms/invite");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _filters = require("./filters");
          function Members() {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('people');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "members__container"
            }, _react.default.createElement("div", {
              className: "filters__container"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " "), store.isAdmin && _react.default.createElement(_icons.AppButton, {
              icon: "add",
              variant: "primary",
              title: globalTexts.actions.invite,
              className: "mobile-icon-button",
              onClick: toggleModal
            }, globalTexts.actions.invite)), list.length === 0 ? _react.default.createElement(_empty.EmptyList, {
              role: selected
            }) : _react.default.createElement(_list.List, {
              className: "people-list__container",
              items: list,
              control: _item.Item
            }), _react.default.createElement(_invite.InvitationForm, {
              show: show,
              onClose: toggleModal,
              role: selected
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/actions
      *****************************************/

      ims.set('./views/list/item/actions', {
        hash: 3779792852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _edition = require("../../forms/edition");
          var _modal = require("pragmate-ui/modal");
          var _session = require("@aimpact/chat-sdk/session");
          function ItemActions({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || (item.id || item.uid) === _session.sessionWrapper.user.id) {
              return _react.default.createElement("div", {
                style: {
                  width: '30px'
                }
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: globalTexts.actions.delete,
              onClick: toggleDeleteModal,
              icon: "delete",
              variant: "default",
              sizing: "sm",
              className: "circle"
            })), show && _react.default.createElement(_edition.RoleModal, {
              item: item,
              show: show,
              onClose: toggleModal,
              role: item.role
            }), showDeleteModal && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.delete.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/item/confirm-action
      ************************************************/

      ims.set('./views/list/item/confirm-action', {
        hash: 1946251026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          function ConfirmAction({
            item
          }) {
            const [open, setOpen] = _react.default.useState(false);
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 2290841202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _invited = require("./invited");
          var _pending = require("./pending");
          var _actions = require("./actions");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          // import { ItemActions } from './actions';
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            if (item.invited) return _react.default.createElement(_invited.InvitedItem, {
              item: item
            });
            if (item.authorized === false) return _react.default.createElement(_pending.PendingItem, {
              item: item
            });
            const role = item.role ?? 'member';
            return _react.default.createElement("li", {
              className: "person-item__container group-member-item"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "role__container actions-container"
            }, _react.default.createElement(_ui.Chip, {
              variant: "success"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 2256157460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitedItem = InvitedItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          // import { ItemActions } from './actions';

          function InvitedItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_framerMotion.motion.li, {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/list/item/pending/confirm
      *************************************************/

      ims.set('./views/list/item/pending/confirm', {
        hash: 1856001357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmPending = ConfirmPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ConfirmPending({
            item,
            loading,
            onConfirm
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: "check",
              disabled: loading,
              title: globalTexts.actions.approve,
              onClick: onConfirm
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/list/item/pending/index
      ***********************************************/

      ims.set('./views/list/item/pending/index', {
        hash: 229906948,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingItem = PendingItem;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _confirm = require("./confirm");
          var _reject = require("./reject");
          // import { ItemActions } from './actions';

          function PendingItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const [error, setError] = _react.default.useState(null);
            const [loading, setLoading] = _react.default.useState(false);
            const [roleSelected, setRoleSelected] = _react.default.useState('member');
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.model.approve({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.messages.approval.success);
              } catch (e) {
                setError(texts.errors[e.code.toString()]);
                console.error(e.code);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'member',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            return _react.default.createElement("li", {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_reactSelect.ReactSelect, {
              value: roleSelected,
              options: options,
              placeholder: texts.form.role.placeholder,
              onChange: handleRoleChange
            }), _react.default.createElement(_reject.RejectPending, {
              item: item
            }), _react.default.createElement(_confirm.ConfirmPending, {
              loading: loading,
              item: item,
              onConfirm: onSubmit
            })), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/item/pending/reject
      ************************************************/

      ims.set('./views/list/item/pending/reject', {
        hash: 569725161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RejectPending = RejectPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          // import { ItemActions } from './actions';

          function RejectPending({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              if (item.invited) {
                await store.model.cancelInvitation({
                  email: item.email
                });
              } else {
                await store.model.reject({
                  uid: item.id
                });
              }
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              title: globalTexts.actions.reject,
              icon: "trash",
              onClick: toggleModal
            }), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/request-access
      **************************************/

      ims.set('./views/request-access', {
        hash: 4056493601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestAccess = RequestAccess;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          /*bundle*/
          function RequestAccess({
            store
          }) {
            const {
              texts
            } = store;
            const status = store.model?.access?.toLowerCase();
            const {
              title,
              action,
              description,
              subtitle
            } = texts[status] ?? 'not_allowed';
            const [error, setError] = _react.default.useState();
            const [message, setMessage] = _react.default.useState();
            const [processing, setProcessing] = _react.default.useState(false);
            const onRequest = async () => {
              try {
                setProcessing(true);
                if (status === 'pending') {
                  await store.load(store.model.id);
                  return;
                }
                const response = await store.requestAccess();
                setMessage(response.message);
              } catch (e) {
                console.error(e);
              } finally {
                setProcessing(false);
              }
            };
            const disabled = {
              disabled: processing
            };
            return _react.default.createElement(_ui.PageContainer, {
              className: "request-access__container place-center"
            }, error && _react.default.createElement(_alert.Alert, {
              type: "danger"
            }, error), message && _react.default.createElement(_alert.Alert, {
              type: "success"
            }, message), _react.default.createElement("div", {
              className: "content"
            }, _react.default.createElement("header", null, _react.default.createElement("h1", null, title), _react.default.createElement("h5", null, subtitle)), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", {
              className: "access-classroom__container"
            }, _react.default.createElement("section", null, _react.default.createElement(_image.Image, {
              src: store.model.picture,
              alt: store.model.name
            })), _react.default.createElement("section", null, _react.default.createElement("h3", null, store.model?.name)))), _react.default.createElement("p", null, description), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onRequest,
              fetching: processing,
              ...disabled
            }, action))), _react.default.createElement("div", null, _react.default.createElement(_image.Image, {
              src: "/assets/images/students/not-allowed.webp",
              alt: "Student does not have access",
              className: "img-100 img-move-animation"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/request-access",
        "from": "RequestAccess",
        "name": "RequestAccess"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'RequestAccess') && _export("RequestAccess", RequestAccess = require ? require('./views/request-access').RequestAccess : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm92ZXJsYXkiLCJpZCIsInNldCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsIm5hbWUiLCJhcHByb3ZlIiwidWlkIiwicm9sZSIsImZldGNoaW5nIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiY2FuY2VsSW52aXRhdGlvbiIsImVtYWlsIiwidXBkYXRlUm9sZSIsInZhbHVlcyIsInJlbW92ZU1lbWJlciIsInJlcXVlc3RBY2Nlc3MiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJsZW5ndGgiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJocmVmIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsInR5cGUiLCJhdWRpZW5jZSIsImVudGl0eSIsIm1vZGUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwib25DbG9zZSIsImFjdGlvbiIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXBwcm92YWwiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInJvbGVzIiwibWVtYmVyIiwibWFuYWdlciIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFjdGlvbnMiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInN5c3RlbSIsImludml0ZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsImlzRGlzYWJsZWQiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3dyYXBwZXIiLCJDb2RlU2VjdGlvbiIsImpvaW5TcGVjcyIsIm9wZW4iLCJzZXRPcGVuIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0dGluZ3MiLCJiYXNlVXJsIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9uV2F0Y2giLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJ3YXRjaCIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm93bmVyIiwib3JnYW5pemF0aW9uIiwidGVhY2hlciIsIkFwcEljb24iLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJfcmVxdWVzdEFjY2VzcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJSZXF1ZXN0QWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsInRhYnMiLCJ0cmFja1VybCIsIlRhYnMiLCJUYWIiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicHVzaCIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiQXBwQnV0dG9uIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiQ2hpcCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIkNvbmZpcm1QZW5kaW5nIiwiX2NvbmZpcm0iLCJfcmVqZWN0IiwiUmVqZWN0UGVuZGluZyIsIl9hbGVydCIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwic3VidGl0bGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiQWxlcnQiLCJwaWN0dXJlIiwiYWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvcmVqZWN0LnRzeCIsIi90cy92aWV3cy9yZXF1ZXN0LWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FB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