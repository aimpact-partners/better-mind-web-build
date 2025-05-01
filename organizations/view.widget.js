System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@aimpact/ailearn-app@0.4.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@aimpact/ailearn-app@0.4.1/components/icons", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/badge", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
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
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_5 = _aimpactAilearnApp041StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_9 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_10 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_11 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_13 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_14 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_16 = _aimpactAilearnApp041ModelWrapper;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_18 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_19 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Badge) {
      dependency_21 = _pragmateUi100Beta7Badge;
    }, function (_aimpactChatSdk154Session) {
      dependency_22 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_23 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_24 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/badge', dependency_21], ['@aimpact/chat-sdk/session', dependency_22], ['pragmate-ui/image', dependency_23], ['framer-motion', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/organizations/view.widget');
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
        hash: 2128826852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _organizations.Organization);
              this.defineReactiveProps(['fetching']);
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
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 4243089792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityCoins = EntityCoins;
          var _react = require("react");
          var _context = require("./context");
          var _alert = require("pragmate-ui/alert");
          function EntityCoins() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              model
            } = store;
            if (!model.coins || !store.isAdmin) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "profile-coins__section"
            }, _react.default.createElement("h3", null, texts.coins.label), _react.default.createElement("div", {
              className: "coins-detail__container"
            }, _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.assignments), _react.default.createElement("span", null, model.coins.assignments.count)), _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.modules), _react.default.createElement("span", null, model.coins.modules.count))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 631431152,
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

      /*******************************************
      INTERNAL MODULE: ./views/forms/approve-field
      *******************************************/

      ims.set('./views/forms/approve-field', {
        hash: 2384418648,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 289435250,
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
                _toast.toast.success(texts.system.invite.success);
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 2229487128,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 633720687,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 3826441221,
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
              texts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: ''
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
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, texts.form.title)), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "role",
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
              variant: "primary",
              loading: loading,
              label: texts.actions.invite
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
        hash: 552765122,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function CodeSection() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/organizations/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            return _react.default.createElement("div", {
              className: "group-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: texts.actions.copy,
              className: "copy__button",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 1119146497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
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
            const onClick = () => _routing.routing.pushState(`/organizations/management?id=${store.model.id}`);
            return _react.default.createElement("header", {
              className: "page-container__header"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement("div", {
              className: "group-entity__icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            })), _react.default.createElement("span", null, _react.default.createElement("h1", null, store.model.name))), _react.default.createElement(_icons.AppIconButton, {
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
        hash: 543715112,
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
          var _coins = require("./coins");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [update, setUpdate] = _react.default.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setUpdate({}));
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement("app-not-allowed", null);
            }
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
            const value = {
              store,
              fetching: store.fetching,
              texts
            };
            const cls = `app-organization-creation-page ${store.fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: cls,
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_coins.EntityCoins, null), _react.default.createElement(_list.Members, null)));
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
        hash: 223006703,
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
        hash: 3730289000,
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
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _invite = require("../forms/invite");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _filters = require("./filters");
          function Members() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('people');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "filters__container"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " "), store.isAdmin && _react.default.createElement(_components.Button, {
              variant: "primary",
              label: texts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), list.length === 0 ? _react.default.createElement(_empty.EmptyList, {
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
        hash: 1778947666,
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
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || (item.id || item.uid) === _session.sessionWrapper.user.id) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: texts.actions.delete,
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
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 4221515755,
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
            }, item.email))), _react.default.createElement("span", {
              className: "role"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 1840860296,
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
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.model.cancelInvitation({
                id: store.model.id,
                email: item.email
              });
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
            }, texts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/list/item/pending/RejectPending
      *******************************************************/

      ims.set('./views/list/item/pending/RejectPending', {
        hash: 2392877374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RejectPending = RejectPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          // import { ItemActions } from './actions';

          function RejectPending({
            item
          }) {
            const {
              texts,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, texts.actions.reject), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
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
        hash: 1858777722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmPending = ConfirmPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _approve = require("../../../forms/approve");
          // import { ItemActions } from './actions';

          function ConfirmPending({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, texts.actions.approve), isOpen && _react.default.createElement(_approve.ApproveModal, {
              item: item,
              show: isOpen,
              onClose: toggleModal
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/list/item/pending/index
      ***********************************************/

      ims.set('./views/list/item/pending/index', {
        hash: 210108212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingItem = PendingItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _RejectPending = require("./RejectPending");
          var _confirm = require("./confirm");
          // import { ItemActions } from './actions';

          function PendingItem({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
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
            }, _react.default.createElement(_RejectPending.RejectPending, {
              item: item
            }), _react.default.createElement(_confirm.ConfirmPending, {
              item: item
            })), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9vcmdhbml6YXRpb25zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiT3JnYW5pemF0aW9uIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFwcHJvdmFsIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwib3B0aW9ucyIsInZhbHVlIiwibGlzdCIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJzeXN0ZW0iLCJpbnZpdGUiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZW1haWwiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsInJvbGVzIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3dyYXBwZXIiLCJDb2RlU2VjdGlvbiIsImpvaW5TcGVjcyIsImNvcHlUb0NsaXBib2FyZCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNldHRpbmdzIiwiYmFzZVVybCIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkFwcEljb24iLCJBcHBJY29uQnV0dG9uIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb2lucyIsIl9saXN0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwicmVhZHkiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJjbHMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNZW1iZXJzIiwiRW1wdHlMaXN0IiwiZW1wdHkiLCJwZW5kaW5nIiwicm9sIiwiRW1wdHlDYXJkIiwidGV4dCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiZm9yRWFjaCIsInB1c2giLCJpZGVudGlmaWVyIiwiZW50aXR5IiwidG90YWwiLCJwZW5kaW5ncyIsImxlbmd0aCIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaXRlbSIsIl9lbXB0eSIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiX2VkaXRpb24iLCJfc2Vzc2lvbiIsIkl0ZW1BY3Rpb25zIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidG9nZ2xlRGVsZXRlTW9kYWwiLCJvbkRlbGV0ZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNhbmNlbEludml0YXRpb24iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUtZmllbGQudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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