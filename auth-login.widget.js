System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/stores/base", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/config", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Languages: void 0
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
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_4 = _aimpactAilearnApp041StoresBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_aimpactChatSdk154Session) {
      dependency_7 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Components) {
      dependency_9 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_11 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_aimpactAilearnApp041Config) {
      dependency_14 = _aimpactAilearnApp041Config;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_15 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Core) {
      dependency_16 = _beyondJsKernel0112Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_17 = _pragmateUi100Beta7Form;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['framer-motion', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@beyond-js/kernel/core', dependency_16], ['pragmate-ui/form', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/auth-login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4218677241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            createStore(language) {
              return new _store.StoreManager();
            }
            get Widget() {
              return _views.View;
            }
            show() {
              console.log('show login page');
              // console.log('show login page');
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2348684177,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            get socialMedia() {
              return {
                webinar: 'https://www.youtube.com/@RVDAIRIVADAVIA24',
                tutorials: {
                  teacher: 'https://docs.google.com/presentation/d/e/2PACX-1vTOSXwuswJIIASahbfwxTPkP8XqxwkncfwYGAh0UBwc43olV5x_XIV8itDODn_V4jGZ_A9OLfP8zADF/pub?start=false&loop=false&delayms=3000',
                  student: 'https://docs.google.com/presentation/d/e/2PACX-1vT22YxUehxwR7OiGG-gBBcD1cDb6IxjG9RhveRAXTmQ1D2dH140-WWFRyq9w1P83Du-2jtWi8L-YNJ8/pub?start=false&loop=false&delayms=3000'
                },
                socialMedia: {
                  linkedin: 'https://www.linkedin.com/company/rvd-ai/',
                  tiktok: 'https://www.tiktok.com/@rvd.ai?_t=8fR9cDVO7M5&_r=1',
                  instagram: 'https://www.instagram.com/rvd.ai_ok/',
                  facebook: 'https://www.facebook.com/profile.php?id=61551072234638',
                  youtube: 'https://www.youtube.com/@RVDAIRIVADAVIA24'
                }
              };
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/animations
      **********************************/

      ims.set('./views/animations', {
        hash: 265809797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            default: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fade: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 4088708372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginContainer = LoginContainer;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function LoginContainer({
            texts
          }) {
            const [fetching, setFetching] = (0, _react.useState)('');
            const [error, setError] = (0, _react.useState)('');
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.auth.loginWith('google');
                if (!response) {
                  throw new Error();
                }
                _routing.routing.pushState('/');
              } catch (e) {
                console.log(e);
                if (e.message === 'POPUP_CLOSED_BY_USER') {
                  return;
                }
                setError(texts.errors.unknown);
                console.error(e.message);
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_image.Image, {
              className: "login-logo",
              src: _wrapper.settings.APP_LOGO
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: "form__title "
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_alert.Alert, {
              message: error,
              type: "error"
            }), _react.default.createElement("div", {
              className: "buttons__container"
            }, _react.default.createElement(_components.Button, {
              icon: "google",
              variant: "primary",
              onClick: onGoogle,
              loading: fetching == 'google',
              label: texts.googleSignInButton
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 243037871,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animations = require("./animations");
          var _container = require("./container");
          var _languages = require("./languages");
          var _presentation = require("./presentation/presentation");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function View({
            store
          }) {
            const [updates, setUpdates] = (0, _react.useState)(0);
            (0, _hooks.useBinder)([store], () => {
              setUpdates(performance.now());
            });
            if (!store.ready) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const texts = store.texts;
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "login-page-container"
            }, _react.default.createElement(_presentation.Presentation, {
              store: store
            }), _react.default.createElement("section", {
              className: "second-panel"
            }, _react.default.createElement("div", {
              className: "login-container"
            }, _react.default.createElement("div", {
              className: "login__header"
            }, _react.default.createElement(_languages.Languages, {
              texts: texts
            })), _react.default.createElement("div", {
              className: "login__content"
            }, _react.default.createElement("div", {
              className: "login-form__container"
            }, _react.default.createElement(_container.LoginContainer, {
              texts: texts
            })))), _react.default.createElement("footer", {
              className: "terms__footer"
            }, _react.default.createElement("span", null, texts.footer.intro), _react.default.createElement(_components.Link, {
              href: "/terms-and-conditions",
              target: "_blank"
            }, texts.footer.terms), ' ', texts.footer.connector, ' ', _react.default.createElement(_components.Link, {
              href: "/privacy",
              target: "_blank"
            }, texts.footer.privacy)), _react.default.createElement("div", {
              className: "app__version"
            }, texts.version, ": ", _config.default.version)));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/languages
      *********************************/

      ims.set('./views/languages', {
        hash: 628134240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _core = require("@beyond-js/kernel/core");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function Languages({
            texts
          }) {
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            return _react.default.createElement("ul", {
              className: "language-selection"
            }, _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "en",
              src: "/assets/english.png",
              alt: "english language",
              title: "english language"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "es",
              src: "/assets/spanish.png",
              alt: "spanish language",
              title: "ver en Espa\u00F1ol"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "de",
              src: "/assets/germany.png",
              alt: "german language",
              title: "auf Deutsch anzeigen"
            })), _react.default.createElement("li", null, _react.default.createElement(_ui.ThemeSwitch, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/login-form
      **********************************/

      ims.set('./views/login-form', {
        hash: 1749363032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginForm = LoginForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          function LoginForm({
            texts,
            error,
            setError
          }) {
            const [values, setValues] = (0, _react.useState)({
              email: '',
              password: ''
            });
            const [fetching, setFetching] = (0, _react.useState)('');
            const formDisabled = {};
            const {
              email,
              password
            } = values;
            if (!email || !password) formDisabled.disabled = true;
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
            const onSubmit = async event => {
              setFetching('default');
              const {
                email,
                password
              } = values;
              try {
                event.preventDefault();
                const response = await _session.sessionWrapper.auth.login(email, password);
                if (!response.status) {
                  return setError(response.error);
                }
                setValues({
                  email: '',
                  password: ''
                });
                _routing.routing.pushState('/');
                return;
              } catch (e) {
                setError(texts.errorLogin);
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: 'login-form-general__container'
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              type: 'error'
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.emailLabel,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.passwordLabel,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Button, {
              type: 'submit',
              variant: 'primary',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/presentation/presentation
      *************************************************/

      ims.set('./views/presentation/presentation', {
        hash: 2508906742,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Presentation = Presentation;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _rrss = require("./rrss");
          function Presentation({
            store
          }) {
            const data = store.socialMedia;
            const texts = store.texts.presentation;
            return _react.default.createElement("div", {
              className: "presentation-container"
            }, _react.default.createElement("div", {
              className: "presentation-header__top"
            }, _react.default.createElement("a", {
              href: data.webinar,
              target: "_blank",
              className: "webinar-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/webinar.webp",
              alt: "teacher"
            }), _react.default.createElement("section", null, _react.default.createElement("h6", {
              className: "primary-text"
            }, texts.tutorials.webinar?.title), _react.default.createElement("span", null, texts.tutorials.webinar?.description))), _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title))), _react.default.createElement("section", {
              className: "under__panel"
            }, _react.default.createElement("section", {
              className: "app-feature"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/book.webp",
              alt: "login"
            }), _react.default.createElement(_components.HtmlWrapper, {
              as: "p"
            }, texts.contents)), _react.default.createElement("section", {
              className: "app-feature"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/control.webp",
              alt: "login"
            }), _react.default.createElement(_components.HtmlWrapper, {
              as: "p"
            }, texts.experience))), _react.default.createElement("section", {
              className: "tutorials-container"
            }, _react.default.createElement("a", {
              href: data.tutorials.teacher,
              target: "_blank"
            }, _react.default.createElement("div", {
              className: "tutorial tutorial--left-image"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/teacher.webp",
              alt: "teacher"
            }), _react.default.createElement("span", null, texts.tutorials.teachers))), _react.default.createElement("a", {
              href: data.tutorials.student,
              target: "_blank"
            }, _react.default.createElement("div", {
              className: "tutorial tutorial--right-image"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/student.webp",
              alt: "teacher"
            }), _react.default.createElement("span", null, texts.tutorials.students)))), _react.default.createElement(_rrss.RRss, {
              store: store
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/presentation/rrss
      *****************************************/

      ims.set('./views/presentation/rrss', {
        hash: 3026233155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RRss = RRss;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function RRss({
            store
          }) {
            const data = store.socialMedia;
            const texts = store.texts.presentation;
            return _react.default.createElement("section", {
              className: "social-media__container"
            }, _react.default.createElement("span", {
              className: "p3"
            }, texts.socialMedia), _react.default.createElement("ul", {
              className: "social-media-list"
            }, _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.facebook
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/fb.png",
              alt: "RVD in Facebook"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.instagram
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/ig.png",
              alt: "RVD in Instagram"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.linkedin
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/linkedin.png",
              alt: "RVD in LinkedIn"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.youtube
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/yt.png",
              alt: "RVD in Youtube"
            })))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/languages",
        "from": "Languages",
        "name": "Languages"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Languages') && _export("Languages", Languages = require ? require('./views/languages').Languages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwic29jaWFsTWVkaWEiLCJ3ZWJpbmFyIiwidHV0b3JpYWxzIiwidGVhY2hlciIsInN0dWRlbnQiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIl93cmFwcGVyIiwiTG9naW5Db250YWluZXIiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJvbkdvb2dsZSIsImV2ZW50IiwicmVzcG9uc2UiLCJzZXNzaW9uV3JhcHBlciIsImF1dGgiLCJsb2dpbldpdGgiLCJFcnJvciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsInNldHRpbmdzIiwiQVBQX0xPR08iLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJfY29uZmlnIiwic3RvcmUiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsInVzZUJpbmRlciIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsInZlcnNpb24iLCJfdWkiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYWx0IiwidGl0bGUiLCJUaGVtZVN3aXRjaCIsIl9mb3JtIiwiTG9naW5Gb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ2luIiwic3RhdHVzIiwiZXJyb3JMb2dpbiIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiX3Jyc3MiLCJkYXRhIiwicHJlc2VudGF0aW9uIiwiZGVzY3JpcHRpb24iLCJIdG1sV3JhcHBlciIsImFzIiwiY29udGVudHMiLCJleHBlcmllbmNlIiwidGVhY2hlcnMiLCJzdHVkZW50cyIsIlJSc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi9ycnNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakRDLFdBQVdBLENBQUNDLFFBQWlCO2NBQzVCLE9BQU8sSUFBSUosTUFBQSxDQUFBSyxZQUFZLEVBQUU7WUFDMUI7WUFDQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztjQUM5QjtZQUNEOztVQUNBQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQsSUFBQVcsS0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsZUFBQSxHQUFBZixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRTyxLQUFBLENBQUFFLGdCQUE4QjtZQUMvRCxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBTztnQkFDTkMsT0FBTyxF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