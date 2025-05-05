System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/stores/base", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_11 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_14 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Core) {
      dependency_15 = _beyondJsKernel0112Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_16 = _pragmateUi100Beta7Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['framer-motion', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@beyond-js/kernel/core', dependency_15], ['pragmate-ui/form', dependency_16]]);
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
        hash: 409555735,
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
        hash: 2210359568,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function Presentation({
            store
          }) {
            const data = store.socialMedia;
            const texts = store.texts.presentation;
            return _react.default.createElement("div", {
              className: "presentation-container"
            }, _react.default.createElement("div", {
              className: "presentation-header__top"
            }, _wrapper.settings.tutorials ? _react.default.createElement("a", {
              href: data.webinar,
              target: "_blank",
              className: "webinar-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/login/webinar.webp",
              alt: "teacher"
            }), _react.default.createElement("section", null, _react.default.createElement("h6", {
              className: "primary-text"
            }, texts.tutorials.webinar?.title), _react.default.createElement("span", null, texts.tutorials.webinar?.description))) : null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title))), _react.default.createElement("section", {
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
            }, texts.experience))), _wrapper.settings.tutorials ? _react.default.createElement("section", {
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
            }), _react.default.createElement("span", null, texts.tutorials.students)))) : null, _react.default.createElement(_rrss.RRss, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzb2NpYWxNZWRpYSIsIndlYmluYXIiLCJ0dXRvcmlhbHMiLCJ0ZWFjaGVyIiwic3R1ZGVudCIsImxpbmtlZGluIiwidGlrdG9rIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhbmltYXRpb25zIiwiZGVmYXVsdCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZmFkZSIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX3dyYXBwZXIiLCJMb2dpbkNvbnRhaW5lciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsImxvZ2luV2l0aCIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsInNldHRpbmdzIiwiQVBQX0xPR08iLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJzdG9yZSIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwidXNlQmluZGVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb3Rpb24iLCJkaXYiLCJQcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJmb290ZXIiLCJpbnRybyIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwidGVybXMiLCJjb25uZWN0b3IiLCJwcml2YWN5IiwidmVyc2lvbiIsIl91aSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJfcnJzcyIsImRhdGEiLCJwcmVzZW50YXRpb24iLCJkZXNjcmlwdGlvbiIsIkh0bWxXcmFwcGVyIiwiYXMiLCJjb250ZW50cyIsImV4cGVyaWVuY2UiLCJ0ZWFjaGVycyIsInN0dWRlbnRzIiwiUlJzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvbG9naW4tZm9ybS50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3Jyc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakRDLFdBQVdBLENBQUNDLFFBQWlCO2NBQzVCLE9BQU8sSUFBSUosTUFBQSxDQUFBSyxZQUFZLEVBQUU7WUFDMUI7WUFDQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIO2NBQ0E7WUFBQTs7VUFFREMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJELElBQUFTLEtBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLGVBQUEsR0FBQWIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUUssS0FBQSxDQUFBRSxnQkFBOEI7WUFDL0QsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLE9BQU87Z0JBQ05DLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BEQyxTQUFTLEVBQUU7a0JBQ1ZDLE9BQU8sRUFDTix5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