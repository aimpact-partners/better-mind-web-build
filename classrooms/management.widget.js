System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.1.0/entities/classrooms", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/toast", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk110EntitiesClassrooms) {
      dependency_4 = _aimpactAilearnSdk110EntitiesClassrooms;
    }, function (_beyondJsReactive204Model) {
      dependency_5 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk144Session) {
      dependency_6 = _aimpactChatSdk144Session;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_react) {
      dependency_8 = _react;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_beyondJsKernel0112Routing) {
      dependency_10 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_15 = _pragmateUi100Beta7FormReactSelect;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/toast', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/form/react-select', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/management.widget",
        "is": "page",
        "route": "/classrooms/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/classrooms/management.widget');
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
        hash: 2075719461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            clear() {
              this.#model = undefined;
              super.ready = false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfY2xhc3Nyb29tcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInVuZGVmaW5lZCIsImlkIiwibGlzdGVuZXIiLCJvZmYiLCJDbGFzc3Jvb20iLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsInJlbW92ZSIsInRyaWdnZXIiLCJSZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdG9hc3QiLCJfcm91dGluZyIsIl9ob29rcyIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJ1c2VCaW5kZXIiLCJnZXRQcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiciIsInB1Ymxpc2giLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjcmVhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JzIiwiZGVmYXVsdCIsIl9mb3JtIiwiX2NvbXBvbmVudHMiLCJfdWkiLCJfY29udGV4dCIsIl91c2VNb2RlbCIsIl9ldmVudHMiLCJfb3duZXJzaGlwIiwidXNlTW9kZWwiLCJkaXNhYmxlZCIsImNvbnRleHRWYWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwiT3duZXJzaGlwRmllbGQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFyaWFudCIsInJlcXVpcmVkIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJhY3Rpb25zIiwic2F2ZSIsIl9yZWFjdFNlbGVjdCIsInRlYWNoZXIiLCJvcmdzIiwiZGVmYXVsdE9wdGlvbiIsImluc3RpdHV0aW9uIiwic2VsZWN0Iiwib3duZXIiLCJvcmdhbml6YXRpb25JZCIsIm9wdGlvbnMiLCJtYXAiLCJpdGVtIiwib3duIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0Iiwic2V0UmVhZHkiLCJ1c2VFZmZlY3QiLCJjbGVhblVwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9ldmVudHMudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvdXNlLW1vZGVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdB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