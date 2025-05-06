System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/stores/base", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_2 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_3 = _aimpactAilearnApp041StoresBase;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_7 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_10 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_13 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Core) {
      dependency_14 = _beyondJsKernel0112Core;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/stores/base', dependency_3], ['react', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['framer-motion', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form', dependency_15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJzb2NpYWxNZWRpYSIsIndlYmluYXIiLCJ0dXRvcmlhbHMiLCJ0ZWFjaGVyIiwic3R1ZGVudCIsImxpbmtlZGluIiwidGlrdG9rIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhbmltYXRpb25zIiwiZGVmYXVsdCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZmFkZSIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwiX3JvdXRpbmciLCJfc2Vzc2lvbiIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX3dyYXBwZXIiLCJMb2dpbkNvbnRhaW5lciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uR29vZ2xlIiwiZXZlbnQiLCJyZXNwb25zZSIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsImxvZ2luV2l0aCIsIkVycm9yIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsInNldHRpbmdzIiwiQVBQX0xPR08iLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsIl9wcmVzZW50YXRpb24iLCJzdG9yZSIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwidXNlQmluZGVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb3Rpb24iLCJkaXYiLCJQcmVzZW50YXRpb24iLCJMYW5ndWFnZXMiLCJmb290ZXIiLCJpbnRybyIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwidGVybXMiLCJjb25uZWN0b3IiLCJwcml2YWN5IiwidmVyc2lvbiIsIl91aSIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJhbHQiLCJ0aXRsZSIsIlRoZW1lU3dpdGNoIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iLCJfcnJzcyIsImRhdGEiLCJwcmVzZW50YXRpb24iLCJkZXNjcmlwdGlvbiIsIkh0bWxXcmFwcGVyIiwiYXMiLCJjb250ZW50cyIsImV4cGVyaWVuY2UiLCJ0ZWFjaGVycyIsInN0dWRlbnRzIiwiUlJzcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvbG9naW4tZm9ybS50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi50c3giLCIvdHMvdmlld3MvcHJlc2VudGF0aW9uL3Jyc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pEQyxXQUFXQSxDQUFDQyxRQUFpQjtjQUM1QixPQUFPLElBQUlKLE1BQUEsQ0FBQUssWUFBWSxFQUFFO1lBQzFCO1lBQ0EsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSDtjQUNBO1lBQUE7O1VBRURDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBUyxLQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxlQUFBLEdBQUFiLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFLLEtBQUEsQ0FBQUUsZ0JBQThCO1lBQy9ELElBQUlDLFdBQVdBLENBQUE7Y0FDZCxPQUFPO2dCQUNOQyxPQUFPLEVBQUUsMkNBQTJDO2dCQUNwREMsU0FBUyxFQUFFO2tCQUNWQyxPQUFPLEVBQ04seUtB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