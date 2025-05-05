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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
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
        hash: 3496937295,
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
              // console.log('show login page');
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
        hash: 1124057333,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, texts.version, ": ", _wrapper.settings.version)));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/languages
      *********************************/

      ims.set('./views/languages', {
        hash: 1953800846,
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
              src: "/assets/images/languages/english.png",
              alt: "english language",
              title: "english language"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "es",
              src: "/assets/images/languages/spanish.png",
              alt: "spanish language",
              title: "ver en Espa\u00F1ol"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "de",
              src: "/assets/images/languages/german.png",
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
        hash: 3751139484,
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
        hash: 2081365898,
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
              src: "/assets/images/rrss/fb.webp",
              alt: "RVD in Facebook"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.instagram
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/ig.webp",
              alt: "RVD in Instagram"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.linkedin
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/linkedin.webp",
              alt: "RVD in LinkedIn"
            }))), _react.default.createElement("li", null, _react.default.createElement("a", {
              target: "_blank",
              href: data.socialMedia.youtube
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/rrss/yt.webp",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzb2NpYWxNZWRpYSIsIndlYmluYXIiLCJ0dXRvcmlhbHMiLCJ0ZWFjaGVyIiwic3R1ZGVudCIsImxpbmtlZGluIiwidGlrdG9rIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhbmltYXRpb25zIiwiZGVmYXVsdCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZmFkZSIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX3dyYXBwZXIiLCJMb2dpbkNvbnRhaW5lciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsImxvZ2luV2l0aCIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsInNldHRpbmdzIiwiQVBQX0xPR08iLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJzdG9yZSIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwidXNlQmluZGVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb3Rpb24iLCJkaXYiLCJQcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJmb290ZXIiLCJpbnRybyIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwidGVybXMiLCJjb25uZWN0b3IiLCJwcml2YWN5IiwidmVyc2lvbiIsIl91aSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJfcnJzcyIsImRhdGEiLCJwcmVzZW50YXRpb24iLCJkZXNjcmlwdGlvbiIsIkh0bWxXcmFwcGVyIiwiYXMiLCJjb250ZW50cyIsImV4cGVyaWVuY2UiLCJ0ZWFjaGVycyIsInN0dWRlbnRzIiwiUlJzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvbG9naW4tZm9ybS50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3Jyc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqREMsV0FBV0EsQ0FBQ0MsUUFBaUI7Y0FDNUIsT0FBTyxJQUFJSixNQUFBLENBQUFLLFlBQVksRUFBRTtZQUMxQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQTtZQUFBOztVQUVEQyxPQUFBLENBQUFSLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQsSUFBQVMsS0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsZUFBQSxHQUFBYixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRSyxLQUFBLENBQUFFLGdCQUE4QjtZQUMvRCxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsT0FBTztnQkFDTkMsT0FBTyxFQUFFLDJDQUEyQztnQkFDcERDLFNBQVMsRUFBRTtrQkFDVkMsT0FBTyxFQUNO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