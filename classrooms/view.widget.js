System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@aimpact/ailearn-app@0.3.32/stores/base", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "react@18.3.1", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.32/components/module-card", "@aimpact/ailearn-app@0.3.32/i18n.ts", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.32/components/icons", "@aimpact/ailearn-app@0.3.32/config", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/chat-sdk@1.4.4/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/alert"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, RequestAccess, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_aimpactAilearnApp0332StoresBase) {
      dependency_5 = _aimpactAilearnApp0332StoresBase;
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_9 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0332ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp0332ComponentsModuleCard;
    }, function (_aimpactAilearnApp0332I18nTs) {
      dependency_11 = _aimpactAilearnApp0332I18nTs;
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
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_19 = _aimpactAilearnApp0332Config;
    }, function (_beyondJsKernel0112Routing) {
      dependency_20 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_21 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_22 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactChatSdk144Session) {
      dependency_23 = _aimpactChatSdk144Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_24 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_25 = _framerMotion2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_26 = _pragmateUi100Beta7Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25], ['pragmate-ui/alert', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/classrooms/view.widget');
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
        hash: 862961761,
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
          var _config = require("@aimpact/ailearn-app/config");
          var _modal = require("pragmate-ui/modal");
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
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/classrooms/join?code=${code}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsIm92ZXJsYXkiLCJpZCIsInNldCIsImJyZWFkY3J1bWIiLCJnbG9iYWxUZXh0cyIsImVudGl0aWVzIiwiY2xhc3Nyb29tcyIsIm5hbWUiLCJhcHByb3ZlIiwidWlkIiwicm9sZSIsImZldGNoaW5nIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVqZWN0IiwiY2FuY2VsSW52aXRhdGlvbiIsImVtYWlsIiwidXBkYXRlUm9sZSIsInZhbHVlcyIsInJlbW92ZU1lbWJlciIsInJlcXVlc3RBY2Nlc3MiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJsZW5ndGgiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJocmVmIiwiRnJhZ21lbnQiLCJBc3NpZ25tZW50Q2FyZCIsInR5cGUiLCJhdWRpZW5jZSIsImVudGl0eSIsIm1vZGUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwib25DbG9zZSIsImFjdGlvbiIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXBwcm92YWwiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInJvbGVzIiwibWVtYmVyIiwibWFuYWdlciIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImFjdGlvbnMiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInN5c3RlbSIsImludml0ZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsImlzRGlzYWJsZWQiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwib3BlbiIsInNldE9wZW4iLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9uV2F0Y2giLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJ3YXRjaCIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm93bmVyIiwib3JnYW5pemF0aW9uIiwidGVhY2hlciIsIkFwcEljb24iLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJfcmVxdWVzdEFjY2VzcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJSZXF1ZXN0QWNjZXNzIiwiY2xzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsInRhYnMiLCJ0cmFja1VybCIsIlRhYnMiLCJUYWIiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicHVzaCIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiQXBwQnV0dG9uIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiQ2hpcCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIkNvbmZpcm1QZW5kaW5nIiwiX2NvbmZpcm0iLCJfcmVqZWN0IiwiUmVqZWN0UGVuZGluZyIsIl9hbGVydCIsImFjY2VzcyIsInRvTG93ZXJDYXNlIiwic3VidGl0bGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25SZXF1ZXN0IiwiQWxlcnQiLCJwaWN0dXJlIiwiYWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvcmVqZWN0LnRzeCIsIi90cy92aWV3cy9yZXF1ZXN0LWFjY2Vzcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsV0FBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FB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