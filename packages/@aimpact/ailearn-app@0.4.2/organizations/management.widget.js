System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-app@0.4.2/i18n.ts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.2/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_4 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_7 = _aimpactAilearnApp042MainLayoutWidget;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnApp042I18nTs) {
      dependency_9 = _aimpactAilearnApp042I18nTs;
    }, function (_react) {
      dependency_10 = _react;
    }, function (_pragmateUi100Beta7Form) {
      dependency_11 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_13 = _aimpactAilearnApp042ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_15 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel0112Routing) {
      dependency_16 = _beyondJsKernel0112Routing;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/organizations/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/entities/organizations', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/main-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-app/i18n.ts', dependency_9], ['react', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/toast', dependency_15], ['@beyond-js/kernel/routing', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-management",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/organizations/management.widget",
        "is": "page",
        "route": "/organizations/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/organizations/management.widget');
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
        hash: 1964075700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
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
              this.#texts.on('change', this.validate);
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
            validate = () => {
              if (!this.ready) return;
              _mainLayout.LayoutBroker.set({
                overlay: true,
                breadcrumb: [[this.globalTexts.entities.organizations, '/organizations/list'], [this.globalTexts.actions.management]]
              });
            };
            async load(id) {
              try {
                if (id && this.#model && this.#model.id === id) return;
                if (this.#model) {
                  this.#model.off('change', this.triggerEvent);
                  this.#model = undefined;
                }
                this.#model = new _organizations.Organization({
                  id
                });
                this.#model.on('change', this.triggerEvent);
                if (id) {
                  await this.#model.load(id);
                  console.log(this.#model.getProperties());
                }
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
              }
            }
            async save(values) {
              try {
                this.fetching = true;
                const {
                  status,
                  data
                } = await this.model.save({
                  ...values
                });
                _session.sessionWrapper.user.load();
                if (!status) throw new Error('error publishing classroom');
                return data;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async publish(values) {
              this.fetching = true;
              const response = await this.model.publish(values);
              await _session.sessionWrapper.user.load();
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1365031836,
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
          var _useForm = require("./use-form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const {
              texts
            } = store;
            const {
              fetching,
              values,
              onChange,
              onSubmit
            } = (0, _useForm.useForm)(ready, store, texts);
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
            }, React.createElement("h3", null, texts.create.title)), React.createElement("div", {
              className: "mt-1"
            }), React.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: "form__container"
            }, React.createElement(_form.Input, {
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

      /********************************
      INTERNAL MODULE: ./views/use-form
      ********************************/

      ims.set('./views/use-form', {
        hash: 3582432434,
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
                //@ts-expect-error
                setValues(store.model?.getProperties() ?? defaultValues);
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
                await store.publish(values);
                _toast.toast.success(texts.create.success);
                _routing.routing.replaceState({}, null, `/organizations/view/${model.id}`);
              } catch (e) {
                setError(e.message);
                _toast.toast.error(texts.create.error);
              } finally {
                setFetching(false);
              }
            };
            return {
              values,
              fetching,
              setFetching,
              onChange,
              onSubmit
            };
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/use-model
      *********************************/

      ims.set('./views/use-model', {
        hash: 1182693627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModel = useModel;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _beyond_context = require("beyond_context");
          function useModel(store) {
            const [ready, setReady] = React.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            React.useEffect(() => {
              const onChange = () => {};
              store.on('change', onChange);
              const cleanUp = () => store.off('change', onChange);
              return cleanUp;
            });
            return {
              ready: ready && textsReady,
              store,
              texts
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfb3JnYW5pemF0aW9ucyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaTE4biIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInZhbGlkYXRlIiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwic2V0Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIm9yZ2FuaXphdGlvbnMiLCJhY3Rpb25zIiwibWFuYWdlbWVudCIsImlkIiwib2ZmIiwiT3JnYW5pemF0aW9uIiwiY29uc29sZSIsImxvZyIsImdldFByb3BlcnRpZXMiLCJlIiwiZXJyb3IiLCJzYXZlIiwidmFsdWVzIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJkYXRhIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiRXJyb3IiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZm9ybSIsIl9jb21wb25lbnRzIiwiX3VpIiwiX2NvbnRleHQiLCJfdXNlRm9ybSIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJvbkNoYW5nZSIsIm9uU3VibWl0IiwidXNlRm9ybSIsImRpc2FibGVkIiwibmFtZSIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJjcmVhdGUiLCJ0aXRsZSIsIkZvcm0iLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFyaWFudCIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsIl90b2FzdCIsIl9yb3V0aW5nIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJtZXNzYWdlIiwidXNlTW9kZWwiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ1c2VFZmZlY3QiLCJjbGVhblVwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLWZvcm0udHMiLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FB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