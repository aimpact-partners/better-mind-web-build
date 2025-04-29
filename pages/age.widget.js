System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1/jsx-runtime", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/application", "@aimpact/chat-sdk@1.5.4/session", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/form/react-select", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app/start", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, BirthdayForm, View, NavbarHeader, Form, PoliciesView, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Form) {
      dependency_16 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_17 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7List) {
      dependency_18 = _pragmateUi100Beta7List;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/routing', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/image', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/list', dependency_18]]);
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
        hash: 691979238,
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
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsImdsb2JhbFRoaXMiLCJ2YWxpZGF0ZUFnZSIsImJpcnRoZGF0ZSIsInZhbGlkYXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImFjY2VwdCIsImFjY2VwdFRlcm1zIiwiX3JlYWN0IiwiX3JlYWN0U2VsZWN0IiwiX2NvbnRleHQiLCJfdXNlT3B0aW9ucyIsIkRhdGVGaWVsZHMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJvbkNoYW5nZSIsInllYXJzIiwiZGF5cyIsIm1vbnRocyIsInVzZU9wdGlvbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwidmFsdWUiLCJ5ZWFyIiwibmFtZSIsIm9wdGlvbnMiLCJtb250aCIsImRheSIsIkRheXNGaWVsZCIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9kYXRlIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl91aSIsIl9yb3V0aW5nMiIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJwcmV2aW91cyIsIlJvdXRlciIsImdldEFuZENsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwidXJpIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9mb3JtIiwiX25hdmJhciIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJWaWV3cyIsInBvbGljaWVzIiwiUG9saWNpZXNWaWV3IiwiYmlydGhkYXkiLCJDb250cm9sIiwiTmF2YmFySGVhZGVyIiwiUHJvdmlkZXIiLCJfaW1hZ2UiLCJfaWNvbnMiLCJyZWYiLCJ1c2VSZWYiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJwdXNoU3RhdGUiLCJJbWFnZSIsInNyYyIsImFsdCIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiX3RvYXN0IiwiRm9ybSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwidGFyZ2V0IiwidG9hc3QiLCJFUlJPUiIsIkNoZWNrYm94IiwiSHRtbFdyYXBwZXIiLCJjaGVja2JveCIsImJsb2NrIiwidGVybXMiLCJjb25jbHVzaW9uIiwiTGluayIsImhyZWYiLCJsaW5rcyIsInBvc3RDb25jbHVzaW9uIiwicHJpdmFjeSIsIl9saXN0IiwiQXNpZGVNZW51IiwiT2JqZWN0Iiwia2V5cyIsIm1lbnUiLCJrZXkiLCJJdGVtIiwibG9nIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvdmlld3MvcG9saWNpZXMvdmlld3NcXHBvbGljaWVzXFxwb2xpY2llcy5tZHgiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hZ2UvZGF0ZS50c3giLCIvdHMvdmlld3MvYWdlL2RheXMudHN4IiwiL3RzL3ZpZXdzL2FnZS9mb3JtLnRzeCIsIi90cy92aWV3cy9hZ2UvdXNlLW9wdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25hdmJhci50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvZm9ybS50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BvbGljaWVzL21lbnUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVFOzswQkFFQzs7MEJBRUg7OzBCQUtHOzswQkFFSDs7MEJBSUE7OzBCQUVHOzswQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJB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