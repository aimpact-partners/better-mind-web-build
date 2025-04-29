System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1/jsx-runtime", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/application", "@aimpact/chat-sdk@1.5.4/session", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/form/react-select", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app/start", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/model/wrapper", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, NavbarHeader, Form, PoliciesView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    BirthdayForm: void 0,
    View: void 0,
    NavbarHeader: void 0,
    Form: void 0,
    PoliciesView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_react1831JsxRuntime) {
      dependency_3 = _react1831JsxRuntime;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_4 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk120Application) {
      dependency_5 = _aimpactAilearnSdk120Application;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_8 = _pragmateUi100Beta7FormReactSelect;
    }, function (_beyondJsKernel0112Routing) {
      dependency_9 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_11 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnAppStart) {
      dependency_12 = _aimpactAilearnAppStart;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_14 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_16 = _aimpactAilearnApp041ModelWrapper;
    }, function (_pragmateUi100Beta7Form) {
      dependency_17 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_18 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/pages/age",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/image', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['@aimpact/ailearn-app/model/wrapper', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/toast', dependency_18], ['pragmate-ui/list', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/pages/age.widget');
      ims = new Map();
      /*********************************************
      INTERNAL MODULE: ./views/policies/policies.mdx
      *********************************************/
      ims.set('./views/policies/policies.mdx', {
        hash: 3258189032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              h2: "h2",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)("main", {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Términos y condiciones de uso"
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Políticas de privacidad"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estas condiciones han sido actualizadas el 09/09/2022. Estas son las Condiciones Generales para que los usuarios de\r\nInternet accedan a los contenidos y servicios que RVD.AI (en adelante, \"RVD.AI\") pone a su disposición a través de los\r\nsitios, en adelante los “Sitios”. El usuario al dar al botón \"Leí y acepto los términos y condiciones\" en el proceso de\r\nacceso a los contenidos de los Sitios, admite haber leído las presentes"
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Condiciones Generales"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Expresa su adhesión plena y sin reservas a todas y cada una de ellas. Asimismo, debido a que ciertos servicios y\r\ncontenidos ofrecidos través de los Sitios pueden contener se recomienda a los usuarios tomar conocimiento específico de\r\nellas. Además de las presentes"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Condiciones Generales y las normas que los complementan, existen unas condiciones de uso los sitios detalladas."
              }), (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Verificación de mayoría de edad"
              }), (0, _jsxRuntime.jsx)(_components.p, {
                children: "Condiciones detalladas y las normas que los complementan, existen unas condiciones de uso los sitios detalladas en el\r\nReglamento general de lanacion.com.ar que todo usuario debe respetar y que se entenderá conocido por todos los usuarios\r\nde los Sitios."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = exports.default = MDXContent;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 990578470,
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
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2770161993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _application = require("@aimpact/ailearn-sdk/application");
          var _session = require("@aimpact/chat-sdk/session");
          //@ts-ignore
          class StoreManager {
            application;
            get session() {
              return _session.sessionWrapper;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get accepted() {
              return _session.sessionWrapper.user.termsAccepted;
            }
            get ageDefined() {
              return _session.sessionWrapper.user.age > 0;
            }
            get validated() {
              return this.accepted && this.ageDefined;
            }
            constructor() {
              this.application = new _application.Application();
              globalThis.store = this;
            }
            async validateAge(birthdate) {
              try {
                return _session.sessionWrapper.user.validate(birthdate);
              } catch (e) {
                console.error(e);
              }
            }
            async accept(birthdate) {
              try {
                return await _session.sessionWrapper.user.acceptTerms(birthdate);
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/date
      ********************************/

      ims.set('./views/age/date', {
        hash: 3672129423,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DateFields = DateFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _useOptions = require("./use-options");
          function DateFields({
            values,
            setValues
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              onChange,
              years,
              days,
              months
            } = (0, _useOptions.useOptions)(values, setValues);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.years.label,
              value: values.year,
              name: "year",
              options: years,
              onChange: onChange
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.months.label,
              value: values.month,
              name: "month",
              onChange: onChange,
              options: months
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.days.label,
              value: values.day,
              onChange: onChange,
              name: "day",
              options: days
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/days
      ********************************/

      ims.set('./views/age/days', {
        hash: 253935214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DaysField = DaysField;
          var _react = require("react");
          var _context = require("../context");
          function DaysField() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.currentTarget.value);
            };
            const options = texts.days.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/age/form
      ********************************/

      ims.set('./views/age/form', {
        hash: 3346736959,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BirthdayForm = BirthdayForm;
          var _react = require("react");
          var _context = require("../context");
          var _date = require("./date");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing2 = require("@aimpact/ailearn-app/routing");
          /*bundle*/
          function BirthdayForm() {
            const {
              texts,
              birthdate,
              store,
              setView
            } = (0, _context.useModuleContext)();
            const [values, setValues] = _react.default.useState({
              year: 2024,
              month: 1,
              day: ''
            });
            const [fetching, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !birthdate
            };
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const valid = await store.validateAge(birthdate);
                if (valid) {
                  setView('policies');
                  return;
                }
                const previous = _routing2.Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const cls = `form-age__container${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, {
              size: "sm",
              className: cls
            }, _react.default.createElement("div", {
              className: "form-age__container"
            }, _react.default.createElement("h1", null, texts.age.title), _react.default.createElement("form", {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "age-fields__container"
            }, _react.default.createElement(_date.DateFields, {
              values: values,
              setValues: setValues
            })), _react.default.createElement("span", null, texts.claim), _react.default.createElement("section", null, _react.default.createElement(_components.Button, {
              type: "submit",
              fetching: fetching,
              variant: "primary",
              ...disabled,
              onClick: onSubmit
            }, texts.button))))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/age/use-options
      ***************************************/

      ims.set('./views/age/use-options', {
        hash: 3946564185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOptions = useOptions;
          var _react = require("react");
          var _context = require("../context");
          function useOptions(values, setValues) {
            const {
              texts,
              setBirthdate
            } = (0, _context.useModuleContext)();
            _react.default.useEffect(() => {
              if (values.year && values.month && values.day) {
                setBirthdate(`${values.year}-${values.month}-${values.day}`);
              }
            }, [values]);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues(prevState => ({
                ...prevState,
                [name]: parseInt(value)
              }));
            };
            const years = _react.default.useMemo(() => {
              const currentYear = new Date().getFullYear() - 13;
              return Array.from({
                length: currentYear - 1926 + 1
              }, (_, index) => ({
                value: 1930 + index,
                label: `${1930 + index}`
              })).reverse();
            }, []); // Dependency array is empty, so this runs once
            function getTotalDays(month, year) {
              // Months in JavaScript are 0-indexed: 0 for January, 11 for December
              // Adjust the month number down by 1
              month--;
              // Create a date object for the following month, day 0 will give us the last day of the requested month
              return new Date(year, month + 1, 0).getDate();
            }
            const totalDays = getTotalDays(values.month, values.year); // 2 is for February
            const createArray = number => Array.from({
              length: number
            }, (_, i) => i + 1);
            const days = createArray(totalDays).map((item, index) => ({
              value: index + 1,
              label: item
            }));
            const months = texts.months.items.map((item, index) => ({
              value: index + 1,
              label: item
            }));
            return {
              onChange,
              years,
              months,
              days
            };
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2862825259,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 324992543,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var React = require("react");
          var _form = require("./age/form");
          var _context = require("./context");
          var _navbar = require("./navbar");
          var _policies = require("./policies");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [view, setView] = React.useState(store.accepted ? 'policies' : 'birthday');
            const [birthdate, setBirthdate] = React.useState(store.user?.birthdate);
            if (!textsReady) return null;
            const Views = {
              policies: _policies.PoliciesView,
              birthday: _form.BirthdayForm
            };
            const value = {
              texts,
              setView,
              birthdate,
              setBirthdate,
              store
            };
            const Control = Views[view];
            return React.createElement("div", {
              className: "logo-layout-page"
            }, React.createElement(_navbar.NavbarHeader, {
              texts: texts
            }), React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(Control, null)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/navbar
      ******************************/

      ims.set('./views/navbar', {
        hash: 346490583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function NavbarHeader({
            texts
          }) {
            const cls = `navbar-header`;
            const ref = _react.default.useRef();
            // const Control = BirthdayForm;
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/');
            };
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_image.Image, {
              src: _wrapper.settings.APP_LOGO,
              alt: "RVD.AI",
              className: "navbar-logo"
            })), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "exit",
              className: "circle",
              onClick: logout
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/form
      *************************************/

      ims.set('./views/policies/form', {
        hash: 3518411638,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _routing2 = require("@aimpact/ailearn-app/routing");
          /*bundle*/
          function Form() {
            const {
              texts,
              store,
              birthdate
            } = (0, _context.useModuleContext)();
            const [checked, setChecked] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const disabled = {
              disabled: !checked || fetching
            };
            const onClick = event => setChecked(event.target.checked);
            // if (store.validated) return null;
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const valid = await store.user.acceptTerms(birthdate);
                if (!valid) {
                  _toast.toast.error(texts.ERROR);
                  return;
                }
                const previous = _routing2.Router.getAndCleanPreviousUrl();
                _routing.routing.replaceState({}, null, previous?.uri ?? '/');
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("form", {
              className: "form--in-content",
              onSubmit: onSubmit
            }, _react.default.createElement("label", {
              className: "italic flex-container flex-center flex-vertical-center"
            }, _react.default.createElement(_form.Checkbox, {
              name: "accept",
              onClick: onClick
            }), _react.default.createElement(_components.HtmlWrapper, null, texts.checkbox)), _react.default.createElement("section", {
              className: "flex-container flex-vertical-center  mt-30"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              block: true,
              ...disabled
            }, texts.button)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/policies/index
      **************************************/

      ims.set('./views/policies/index', {
        hash: 1702874835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PoliciesView = PoliciesView;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("./form");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          /*bundle*/
          function PoliciesView() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return React.createElement(React.Fragment, null, React.createElement(_ui.PageContainer, {
              size: "sm",
              className: "page-article-container"
            }, React.createElement("main", null, React.createElement("h1", null, texts.terms.title), React.createElement("p", null, React.createElement(_components.HtmlWrapper, null, texts.terms.claim)), React.createElement("p", null, texts.terms.conclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/terms-and-conditions"
            }, texts.terms.links.terms), ' ', texts.terms.postConclusion, ' ', React.createElement(_components.Link, {
              target: "_blank",
              href: "/privacy"
            }, texts.terms.links.privacy)), React.createElement(_form.Form, null))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/policies/menu
      *************************************/

      ims.set('./views/policies/menu', {
        hash: 1571562254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          function AsideMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const items = Object.keys(texts.menu).map(key => texts.menu[key]);
            const Item = ({
              item
            }) => _react.default.createElement("li", null, item);
            console.log(items, texts);
            return _react.default.createElement("aside", null, _react.default.createElement(_list.List, {
              items: items,
              control: Item
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/age/form",
        "from": "BirthdayForm",
        "name": "BirthdayForm"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/navbar",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./views/policies/form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/policies/index",
        "from": "PoliciesView",
        "name": "PoliciesView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'BirthdayForm') && _export("BirthdayForm", BirthdayForm = require ? require('./views/age/form').BirthdayForm : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./views/navbar').NavbarHeader : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/policies/form').Form : value);
        (require || prop === 'PoliciesView') && _export("PoliciesView", PoliciesView = require ? require('./views/policies/index').PoliciesView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsImdsb2JhbFRoaXMiLCJ2YWxpZGF0ZUFnZSIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VwdCIsImFjY2VwdFRlcm1zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwiX2NvbnRleHQiLCJfdXNlT3B0aW9ucyIsIkRhdGVGaWVsZHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJvbkNoYW5nZSIsInllYXJzIiwiZGF5cyIsIm1vbnRocyIsInVzZU9wdGlvbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwidmFsdWUiLCJ5ZWFyIiwibmFtZSIsIm9wdGlvbnMiLCJtb250aCIsImRheSIsIkRheXNGaWVsZCIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9kYXRlIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl91aSIsIl9yb3V0aW5nMiIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJwcmV2aW91cyIsIlJvdXRlciIsImdldEFuZENsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwidXJpIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9mb3JtIiwiX25hdmJhciIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJWaWV3cyIsInBvbGljaWVzIiwiUG9saWNpZXNWaWV3IiwiYmlydGhkYXkiLCJDb250cm9sIiwiTmF2YmFySGVhZGVyIiwiUHJvdmlkZXIiLCJfaW1hZ2UiLCJfaWNvbnMiLCJfd3JhcHBlciIsInJlZiIsInVzZVJlZiIsImxvZ291dCIsInN0b3BQcm9wYWdhdGlvbiIsInB1c2hTdGF0ZSIsIkltYWdlIiwic3JjIiwic2V0dGluZ3MiLCJBUFBfTE9HTyIsImFsdCIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiX3RvYXN0IiwiRm9ybSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidG9hc3QiLCJFUlJPUiIsIkNoZWNrYm94IiwiSHRtbFdyYXBwZXIiLCJjaGVja2JveCIsImJsb2NrIiwidGVybXMiLCJjb25jbHVzaW9uIiwiTGluayIsImhyZWYiLCJsaW5rcyIsInBvc3RDb25jbHVzaW9uIiwicHJpdmFjeSIsIl9saXN0IiwiQXNpZGVNZW51IiwiT2JqZWN0Iiwia2V5cyIsIm1lbnUiLCJrZXkiLCJJdGVtIiwibG9nIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvdmlld3MvcG9saWNpZXMvdmlld3NcXHBvbGljaWVzXFxwb2xpY2llcy5tZHgiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hZ2UvZGF0ZS50c3giLCIvdHMvdmlld3MvYWdlL2RheXMudHN4IiwiL3RzL3ZpZXdzL2FnZS9mb3JtLnRzeCIsIi90cy92aWV3cy9hZ2UvdXNlLW9wdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25hdmJhci50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvZm9ybS50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL21lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRUU7OzBCQUVDOzswQkFFSDs7MEJBS0c7OzBCQUVIOzswQkFJQTs7MEJBRUc7OzBCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztV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