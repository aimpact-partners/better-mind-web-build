System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-app@0.4.2/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.2/components/ui", "pragmate-ui@1.0.0-beta.7/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_5 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_aimpactChatSdk154Session) {
      dependency_7 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_9 = _aimpactAilearnApp042I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_11 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel0112Routing) {
      dependency_12 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Components) {
      dependency_15 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_16 = _aimpactAilearnApp042ComponentsUi;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_17 = _pragmateUi100Beta7FormReactSelect;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/classrooms/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/toast', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/form/react-select', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-management",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/classrooms/management.widget",
        "is": "page",
        "route": "/classrooms/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/classrooms/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 940274451,
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
              this.#store.load(this.uri.qs.get('id'));
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2777709823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.validate();
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            validate = () => {
              if (!_i18n.globalTexts.ready) {
                _i18n.globalTexts.on('change', this.validate);
                return;
              }
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.globalTexts.actions.management]]
              });
            };
            async load(id) {
              try {
                super.ready = false;
                if (id && this.#model && this.#model.id === id) return;
                const listener = () => this.triggerEvent();
                if (this.#model) {
                  this.#model.off('change', listener);
                  this.#model = undefined;
                }
                this.#model = new _classrooms.Classroom({
                  id
                });
                this.#model.on('change', listener);
                if (id) await this.#model.load();
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
              }
            }
            async delete(id) {
              this.#model.classrooms.remove(id);
              this.trigger('change');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 952274567,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const useModuleContext = () => React.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/events
      ******************************/

      ims.set('./views/events', {
        hash: 2413272433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var React = require("react");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function useForm(ready, store, texts) {
            const defaultValues = {
              name: store?.model?.name || '',
              description: store?.model?.description || ''
            };
            const [values, setValues] = React.useState(defaultValues);
            const [fetching, setFetching] = React.useState(false);
            const [error, setError] = React.useState('');
            (0, _hooks.useBinder)([store], () => {
              if (!store.ready) {
                setValues(store.model?.getProperties() || defaultValues);
              }
            });
            if (!ready) return {};
            const {
              model
            } = store;
            const onChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const onSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              setFetching(true);
              try {
                const r = await model.publish(values);
                _toast.toast.success(texts.create.success);
                _routing.routing.replaceState({}, null, `/classrooms/view/${model.id}`);
              } catch (e) {
                console.error(e);
                setError(texts.errors.default);
              } finally {
                setFetching(false);
              }
            };
            return {
              values,
              fetching,
              error,
              setFetching,
              onChange,
              onSubmit,
              setValues
            };
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1322859304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _useModel = require("./use-model");
          var _events = require("./events");
          var _ownership = require("./ownership");
          function View({
            store
          }) {
            const {
              ready,
              texts
            } = (0, _useModel.useModel)(store);
            const {
              fetching,
              values,
              onChange,
              onSubmit,
              setValues,
              error
            } = (0, _events.useForm)(ready, store, texts);
            if (!ready) return null;
            const disabled = {
              disabled: fetching || values.name === ''
            };
            const contextValue = {
              texts,
              store
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, React.createElement(_ui.PageContainer, {
              className: "form-page-container",
              fetching: fetching
            }, React.createElement("header", {
              className: "page__header"
            }, React.createElement("h3", null, texts.create.title)), React.createElement(_ui.ErrorRenderer, {
              error: error,
              texts: texts.errors
            }), React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "form__container"
            }, React.createElement(_ownership.OwnershipField, {
              setValues: setValues,
              values: values
            }), React.createElement(_form.Input, {
              label: texts.create.name.label,
              placeholder: texts.create.name.placeholder,
              value: values.name,
              name: "name",
              type: "text",
              variant: "floating",
              onChange: onChange,
              required: true
            }), React.createElement(_form.Textarea, {
              label: texts.create.description.label,
              name: "description",
              variant: "floating",
              value: values.description,
              placeholder: texts.create.description.placeholder,
              onChange: onChange
            }), React.createElement("div", {
              className: "form__footer"
            }, React.createElement(_components.Button, {
              fetching: fetching,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts.create.actions.save)))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/ownership
      *********************************/

      ims.set('./views/ownership', {
        hash: 724679060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var React = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("./context");
          function OwnershipField({
            setValues,
            values
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            if (!store.user.teacher?.orgs) return null;
            let defaultOption = {
              value: '',
              label: texts.institution.select
            };
            const onChange = ({
              currentTarget
            }) => {
              if (currentTarget.value === store.user.id) {
                setValues(values => {
                  return {
                    ...values,
                    owner: store.user.id
                  };
                });
                return;
              }
              setValues(values => {
                return {
                  ...values,
                  owner: currentTarget.value,
                  organizationId: currentTarget.value
                };
              });
            };
            const options = [...store.user.teacher.orgs.map(item => {
              return {
                value: item.id,
                label: item.name
              };
            }), {
              value: store.user.id,
              label: texts.institution.own
            }];
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.institution.label, " *"), React.createElement(_reactSelect.ReactSelect, {
              value: values.owner,
              defaultOption: defaultOption,
              placeholder: texts.institution.select,
              name: "owner",
              options: options,
              onChange: onChange
            }));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/use-model
      *********************************/

      ims.set('./views/use-model', {
        hash: 347815426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var React = require("react");
          function useModel(store) {
            const [ready, setReady] = React.useState(store.ready);
            React.useEffect(() => {
              const onChange = () => {
                setReady(store.ready);
              };
              store.on('change', onChange);
              const cleanUp = () => store.off('change', onChange);
              return cleanUp;
            });
            return {
              ready,
              store,
              texts: store?.texts
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfbWFpbkxheW91dCIsIl9jbGFzc3Jvb21zIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInZhbGlkYXRlIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJhY3Rpb25zIiwibWFuYWdlbWVudCIsImlkIiwibGlzdGVuZXIiLCJvZmYiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwicmVtb3ZlIiwidHJpZ2dlciIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90b2FzdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwidXNlRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInVzZUJpbmRlciIsImdldFByb3BlcnRpZXMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJyIiwicHVibGlzaCIsInRvYXN0Iiwic3VjY2VzcyIsImNyZWF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJlcnJvcnMiLCJkZWZhdWx0IiwiX2Zvcm0iLCJfY29tcG9uZW50cyIsIl91aSIsIl9jb250ZXh0IiwiX3VzZU1vZGVsIiwiX2V2ZW50cyIsIl9vd25lcnNoaXAiLCJ1c2VNb2RlbCIsImRpc2FibGVkIiwiY29udGV4dFZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImNsYXNzTmFtZSIsInRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJPd25lcnNoaXBGaWVsZCIsIklucHV0IiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YXJpYW50IiwicmVxdWlyZWQiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInNhdmUiLCJfcmVhY3RTZWxlY3QiLCJ0ZWFjaGVyIiwib3JncyIsImRlZmF1bHRPcHRpb24iLCJpbnN0aXR1dGlvbiIsInNlbGVjdCIsIm93bmVyIiwib3JnYW5pemF0aW9uSWQiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsIm93biIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsInNldFJlYWR5IiwidXNlRWZmZWN0IiwiY2xlYW5VcCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZXZlbnRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL3VzZS1tb2RlbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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