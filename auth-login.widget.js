System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/stores/base", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/config", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactAilearnApp041Config) {
      dependency_13 = _aimpactAilearnApp041Config;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_14 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Core) {
      dependency_15 = _beyondJsKernel0112Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_16 = _pragmateUi100Beta7Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/image', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['framer-motion', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@beyond-js/kernel/core', dependency_15], ['pragmate-ui/form', dependency_16]]);
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
        hash: 743666097,
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
              className: 'login-logo',
              src: '/assets/rvd/logo.png'
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: 'form__title '
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_alert.Alert, {
              message: error,
              type: 'error'
            }), _react.default.createElement("div", {
              className: 'buttons__container'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              variant: 'primary',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwic29jaWFsTWVkaWEiLCJ3ZWJpbmFyIiwidHV0b3JpYWxzIiwidGVhY2hlciIsInN0dWRlbnQiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX3Nlc3Npb24iLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJhdXRoIiwibG9naW5XaXRoIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ1bmtub3duIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSW1hZ2UiLCJjbGFzc05hbWUiLCJzcmMiLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJfY29uZmlnIiwic3RvcmUiLCJ1cGRhdGVzIiwic2V0VXBkYXRlcyIsInVzZUJpbmRlciIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhZHkiLCJTcGlubmVyIiwiYWN0aXZlIiwibW90aW9uIiwiZGl2IiwiUHJlc2VudGF0aW9uIiwiTGFuZ3VhZ2VzIiwiZm9vdGVyIiwiaW50cm8iLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsInRlcm1zIiwiY29ubmVjdG9yIiwicHJpdmFjeSIsInZlcnNpb24iLCJfdWkiLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYWx0IiwidGl0bGUiLCJUaGVtZVN3aXRjaCIsIl9mb3JtIiwiTG9naW5Gb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFZhbHVlIiwibmFtZSIsInZhbHVlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZ2luIiwic3RhdHVzIiwiZXJyb3JMb2dpbiIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiZW1haWxMYWJlbCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwYXNzd29yZExhYmVsIiwic2lnbkluQnV0dG9uIiwiX3Jyc3MiLCJkYXRhIiwicHJlc2VudGF0aW9uIiwiZGVzY3JpcHRpb24iLCJIdG1sV3JhcHBlciIsImFzIiwiY29udGVudHMiLCJleHBlcmllbmNlIiwidGVhY2hlcnMiLCJzdHVkZW50cyIsIlJSc3MiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24udHN4IiwiL3RzL3ZpZXdzL3ByZXNlbnRhdGlvbi9ycnNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pEQyxXQUFXQSxDQUFDQyxRQUFpQjtjQUM1QixPQUFPLElBQUlKLE1BQUEsQ0FBQUssWUFBWSxFQUFFO1lBQzFCO1lBQ0EsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7Y0FDOUI7WUFDRDs7VUFDQUMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFXLEtBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLGVBQUEsR0FBQWYsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUU8sS0FBQSxDQUFBRSxnQkFBOEI7WUFDL0QsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU87Z0JBQ05DLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BEQyxTQUFTLEVBQUU7a0JBQ1ZD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