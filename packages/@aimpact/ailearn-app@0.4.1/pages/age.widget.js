System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1/jsx-runtime", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/application", "@aimpact/chat-sdk@1.5.4/session", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/form/react-select", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_12 = _aimpactAilearnApp041ModelWrapper;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react/jsx-runtime', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/ailearn-sdk/application', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/form/react-select', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['pragmate-ui/components', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/image', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/list', dependency_18]]);
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
        hash: 868967430,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          /*bundle*/ // import { View } from './views';
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return View;
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
        hash: 211661893,
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
        hash: 757106122,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const {
            Router
          } = _wrapper.settings;
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
                const previous = Router.getAndCleanPreviousUrl();
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
        hash: 3795037139,
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
        hash: 2106791470,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const {
            Router
          } = _wrapper.settings;
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
                const previous = Router.getAndCleanPreviousUrl();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2FwcGxpY2F0aW9uIiwiX3Nlc3Npb24iLCJhcHBsaWNhdGlvbiIsInNlc3Npb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJhY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWQiLCJhZ2VEZWZpbmVkIiwiYWdlIiwidmFsaWRhdGVkIiwiY29uc3RydWN0b3IiLCJBcHBsaWNhdGlvbiIsInZhbGlkYXRlQWdlIiwiYmlydGhkYXRlIiwidmFsaWRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWNjZXB0IiwiYWNjZXB0VGVybXMiLCJfcmVhY3QiLCJfcmVhY3RTZWxlY3QiLCJfY29udGV4dCIsIl91c2VPcHRpb25zIiwiRGF0ZUZpZWxkcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsIm9uQ2hhbmdlIiwieWVhcnMiLCJkYXlzIiwibW9udGhzIiwidXNlT3B0aW9ucyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJ2YWx1ZSIsInllYXIiLCJuYW1lIiwib3B0aW9ucyIsIm1vbnRoIiwiZGF5IiwiRGF5c0ZpZWxkIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiX2RhdGUiLCJfcm91dGluZyIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3dyYXBwZXIiLCJSb3V0ZXIiLCJzZXR0aW5ncyIsIkJpcnRoZGF5Rm9ybSIsInNldFZpZXciLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJwcmV2aW91cyIsImdldEFuZENsZWFuUHJldmlvdXNVcmwiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwidXJpIiwiY2xzIiwiUGFnZUNvbnRhaW5lciIsInNpemUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImNsYWltIiwiQnV0dG9uIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwic2V0QmlydGhkYXRlIiwidXNlRWZmZWN0IiwicHJldlN0YXRlIiwicGFyc2VJbnQiLCJ1c2VNZW1vIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicmV2ZXJzZSIsImdldFRvdGFsRGF5cyIsImdldERhdGUiLCJ0b3RhbERheXMiLCJjcmVhdGVBcnJheSIsIm51bWJlciIsImkiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9mb3JtIiwiX25hdmJhciIsIl9wb2xpY2llcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZpZXciLCJWaWV3cyIsInBvbGljaWVzIiwiUG9saWNpZXNWaWV3IiwiYmlydGhkYXkiLCJDb250cm9sIiwiTmF2YmFySGVhZGVyIiwiUHJvdmlkZXIiLCJfaW1hZ2UiLCJfaWNvbnMiLCJyZWYiLCJ1c2VSZWYiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJwdXNoU3RhdGUiLCJJbWFnZSIsInNyYyIsIkFQUF9MT0dPIiwiYWx0IiwiQXBwSWNvbkJ1dHRvbiIsImljb24iLCJfdG9hc3QiLCJGb3JtIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ0YXJnZXQiLCJ0b2FzdCIsIkVSUk9SIiwiQ2hlY2tib3giLCJIdG1sV3JhcHBlciIsImNoZWNrYm94IiwiYmxvY2siLCJ0ZXJtcyIsImNvbmNsdXNpb24iLCJMaW5rIiwiaHJlZiIsImxpbmtzIiwicG9zdENvbmNsdXNpb24iLCJwcml2YWN5IiwiX2xpc3QiLCJBc2lkZU1lbnUiLCJPYmplY3QiLCJrZXlzIiwibWVudSIsImtleSIsIkl0ZW0iLCJsb2ciLCJMaXN0IiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy92aWV3cy9wb2xpY2llcy92aWV3c1xccG9saWNpZXNcXHBvbGljaWVzLm1keCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FnZS9kYXRlLnRzeCIsIi90cy92aWV3cy9hZ2UvZGF5cy50c3giLCIvdHMvdmlld3MvYWdlL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2FnZS91c2Utb3B0aW9ucy50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9mb3JtLnRzeCIsIi90cy92aWV3cy9wb2xpY2llcy9pbmRleC50c3giLCIvdHMvdmlld3MvcG9saWNpZXMvbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRUU7OzBCQUVDOzswQkFFSDs7MEJBS0c7OzBCQUVIOzswQkFJQTs7MEJBRUc7OzBCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFJTyxXQUZQO1VBRWlCLE1BQ1hFLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZ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