System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, NavbarHeader, CloasableNavbar, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    CloasableNavbar: void 0,
    DefaultNavbar: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsKernel0112Routing) {
      dependency_2 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_5 = _pragmateUi100Beta7Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_7 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_9 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154Session) {
      dependency_11 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_13 = _aimpactAilearnApp041ModelWrapper;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_15 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_16 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['@aimpact/ailearn-app/model/wrapper', dependency_13], ['framer-motion', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@beyond-js/widgets/render', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/navbar-header.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/closable
      *************************************/
      ims.set('./components/closable', {
        hash: 1683162156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClosableIcon = ClosableIcon;
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          /**
           * Renders an icon button that conditionally handles navigation based on the user's history state and provided backlink.
           * This component determines if the user can navigate back in their browsing history safely (i.e., the user did not land directly via URL).
           * If navigating back is deemed unsafe or if the history is inadequate, it redirects to a provided backlink URL, thus avoiding potential navigation errors.
           *
           * @param {object} props - The properties passed to the ClosableIcon component.
           * @param {Function} props.apply - A flag to determine if the IconButton should be rendered. If falsy, the component renders nothing.
           * @param {string} props.backlink - A URL string to redirect to if there is no adequate history to go back to. This is used to replace the current state in history, ensuring the user does not navigate back to an erroneous or unintended page.
           * @returns {JSX.Element|null} A clickable icon that conditionally manipulates the navigation history based on the session's state, or null if `apply` is falsy.
           *
           * Usage Example:
           * <ClosableIcon apply={true} backlink="/home" />
           *
           * In this scenario, if sessionStorage indicates that the user did not start their session from the current view, and if there is a sufficient history, it will trigger a back navigation. Otherwise, it will redirect to the `/home` URL provided in `backlink`.
           */
          function ClosableIcon({
            broker,
            apply,
            backlink,
            force
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              if (backlink && broker.force || _routing.routing.history.records.entries.length === 1) {
                //back button is not working, so, we always replace the state here.
                if (typeof backlink === 'function') return backlink();
                _routing.routing.replaceState({}, null, backlink);
              }
              return _routing.routing.back();
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              className: "circle",
              onClick: onClick
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/notification
      *****************************************/

      ims.set('./components/notification', {
        hash: 3113318078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationBar = NotificationBar;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dayjs = require("dayjs");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /**
           * Checks if the current date is at most 7 days after the given date.
           * @param {string | Date} date - The input date to compare.
           * @returns {boolean} - Returns true if the current date is at most 7 days after the input date, otherwise false.
           */
          function isWithinSevenDays(date) {
            const inputDate = (0, _dayjs.default)(date);
            const maxDate = inputDate.add(7, 'day');
            return !(0, _dayjs.default)().isAfter(maxDate);
          }
          function NotificationBar({
            texts
          }) {
            const isVisible = !localStorage.getItem('app.version.notification');
            const canBeShowed = isWithinSevenDays('2024-12-01');
            const [mostBeShowed, setMostBeShowed] = _react.default.useState(isVisible && canBeShowed);
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!mostBeShowed) return null;
            const onClose = event => {
              event.stopPropagation();
              localStorage.setItem('app.version.notification', 'true');
              setMostBeShowed(false);
            };
            return _react.default.createElement("div", {
              className: "notification__bar--container"
            }, _react.default.createElement("div", {
              className: "notification__bar--content"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize === 'xs',
              ternary: true,
              options: {
                true: _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, _react.default.createElement("div", {
                  className: "notification__message"
                }, texts.newVersion.xs)),
                false: _react.default.createElement("div", {
                  className: "notification__message"
                }, _react.default.createElement("h6", null, texts.newVersion.desktop.title), _react.default.createElement("span", null, texts.newVersion.desktop.label), _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, texts.newVersion.desktop.link))
              }
            }), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./components/preload
      ************************************/

      ims.set('./components/preload', {
        hash: 3972098412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("header", {
              className: "navbar-header preload"
            }, _react.default.createElement("div", {
              className: "left-section"
            }), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_image.Image, {
              className: "profile-img preload"
            }))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1377720157,
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

      /************************
      INTERNAL MODULE: ./global
      ************************/

      ims.set('./global', {
        hash: 3098530438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2621145671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _closable = require("./navbars/closable");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_react.default.Fragment, null, props.closable ? _react.default.createElement(_closable.CloasableNavbar, {
              ...props
            }) : _react.default.createElement(DefaultNavbar, {
              ...props
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/context
      ******************************/

      ims.set('./menu/context', {
        hash: 617749427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOffCanvasMenuContext = exports.OffCanvasMenuContext = void 0;
          var _react = require("react");
          const OffCanvasMenuContext = exports.OffCanvasMenuContext = _react.default.createContext({});
          const useOffCanvasMenuContext = () => _react.default.useContext(OffCanvasMenuContext);
          exports.useOffCanvasMenuContext = useOffCanvasMenuContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 375223156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _teacher = require("./teacher");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _student = require("./student");
          var _context2 = require("./context");
          function AsideMenu() {
            const {
              toggleMenu,
              menuOpened,
              texts
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const {
              user
            } = _session.sessionWrapper;
            const [isTeacher, setTeacher] = _react.default.useState(!!user?.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user?.teacher || !!user?.roles.includes('teacher'));
            }, ['user.loaded', 'login']);
            if (!user) return null;
            const cls = `off-canvas-menu${menuOpened ? ' open' : ''}`;
            const clsContainer = `off-canvas-menu-container${menuOpened ? ' opened' : ''}`;
            const Menu = isTeacher ? _teacher.TeacherMenu : _student.StudentMenu;
            const clickOnBackdrop = event => {
              if (ref.current.isSameNode(event.target)) toggleMenu(!menuOpened);
            };
            return _react.default.createElement(_context2.OffCanvasMenuContext.Provider, {
              value: {
                texts,
                menuOpened,
                toggleMenu
              }
            }, _react.default.createElement("div", {
              className: clsContainer,
              onClick: clickOnBackdrop,
              ref: ref
            }, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("header", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "menu__header"
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars",
              onClick: toggleMenu
            }), "RVD.AI Rivadavia"), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement(Menu, null))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./menu/item
      ***************************/

      ims.set('./menu/item', {
        hash: 2183568391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("./context");
          function MenuItem({
            icon,
            href,
            children,
            ...props
          }) {
            const Control = href ? _components.Link : 'div';
            const {
              toggleMenu,
              menuOpened
            } = (0, _context.useOffCanvasMenuContext)();
            const attrs = {
              className: 'container__item'
            };
            if (href) {
              attrs['href'] = href;
            }
            const onClick = () => toggleMenu(!menuOpened);
            return _react.default.createElement("li", {
              ...props
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick
            }, icon && _react.default.createElement(_icons.AppIcon, {
              name: icon
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 3943653979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentMenu = StudentMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function StudentMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 1130199880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function TeacherMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "community",
              href: "/community"
            }, texts.community), _react.default.createElement(_item.MenuItem, {
              icon: "entities/module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "entities/school",
              href: "/organizations/list"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/classrooms/list"
            }, texts.classrooms), _react.default.createElement(_item.MenuItem, {
              icon: "archive",
              href: "/archive"
            }, texts.archive));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./menu/use-session
      **********************************/

      ims.set('./menu/use-session', {
        hash: 4175025227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSession = useSession;
          function useSession() {}
        }
      });

      /**********************************
      INTERNAL MODULE: ./navbars/closable
      **********************************/

      ims.set('./navbars/closable', {
        hash: 2264871333,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloasableNavbar = CloasableNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("../components/closable");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function CloasableNavbar({
            children,
            detail,
            className,
            closable = false,
            store,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 351955497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultNavbar = DefaultNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function DefaultNavbar({
            children,
            className,
            store
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 1953972172,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _dropdown = require("pragmate-ui/dropdown");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _image = require("pragmate-ui/image");
          var _profile = require("./profile");
          function UserMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "user-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "content-user"
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement("section", {
              className: "user-menu__user-data"
            }, _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: _session.sessionWrapper.user.photoURL
            }), _react.default.createElement("span", null, _session.sessionWrapper.user.displayName), _react.default.createElement("span", null, _session.sessionWrapper.user.email)), _react.default.createElement(_item.UserMenuItem, {
              href: "/users/me",
              icon: "user"
            }, texts.userMenu.preferences), _react.default.createElement(_item.UserMenuItem, {
              onClick: logout,
              icon: "exit"
            }, texts.userMenu.logout)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./user-menu/item
      ********************************/

      ims.set('./user-menu/item', {
        hash: 1471099294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenuItem = UserMenuItem;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _icons = require("pragmate-ui/icons");
          function UserMenuItem({
            icon,
            children,
            ...props
          }) {
            return _react.default.createElement(_dropdown.DropdownItem, {
              ...props
            }, _react.default.createElement("div", {
              className: "container__item"
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./user-menu/profile
      ***********************************/

      ims.set('./user-menu/profile', {
        hash: 4170625474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const [userProps, setProps] = _react.default.useState(_session.sessionWrapper.user?.getProperties() ?? {});
            const handleLoadError = () => setLoadError(true);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
            return _react.default.createElement("div", {
              className: "dropdown-menu__user-icon"
            }, !loadError ? _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.AppIcon, {
              icon: "user"
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /****************************************
      INTERNAL MODULE: ./user-menu/theme-button
      ****************************************/

      ims.set('./user-menu/theme-button', {
        hash: 1023347963,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          var _item = require("./item");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement(_item.UserMenuItem, {
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }), _react.default.createElement("span", null, "Theme"));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./user-menu/user-item
      *************************************/

      ims.set('./user-menu/user-item', {
        hash: 1679571895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = UserItem;
          var _react = require("react");
          function UserItem() {
            return _react.default.createElement("div", null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./navbars/closable",
        "from": "CloasableNavbar",
        "name": "CloasableNavbar"
      }, {
        "im": "./navbars/default",
        "from": "DefaultNavbar",
        "name": "DefaultNavbar"
      }, {
        "im": "./user-menu/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./user-menu/theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./index').NavbarHeader : value);
        (require || prop === 'CloasableNavbar') && _export("CloasableNavbar", CloasableNavbar = require ? require('./navbars/closable').CloasableNavbar : value);
        (require || prop === 'DefaultNavbar') && _export("DefaultNavbar", DefaultNavbar = require ? require('./navbars/default').DefaultNavbar : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./user-menu/profile').ProfileIcon : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./user-menu/theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jbG9zYWJsZSIsIk5hdmJhckhlYWRlciIsInByb3BzIiwiRnJhZ21lbnQiLCJjbG9zYWJsZSIsIkNsb2FzYWJsZU5hdmJhciIsIkRlZmF1bHROYXZiYXIiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX2NvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJBc2lkZU1lbnUiLCJ0b2dnbGVNZW51IiwibWVudU9wZW5lZCIsInJlZiIsInVzZVJlZiIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZUJpbmRlciIsImNscyIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJQcm92aWRlciIsIkljb24iLCJNZW51SXRlbSIsImNoaWxkcmVuIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsIm1lbnUiLCJob21lIiwiY2xhc3Nyb29tcyIsImNvbW11bml0eSIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwiYXJjaGl2ZSIsInVzZVNlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9ub3RpZmljYXRpb24iLCJfcHJlbG9hZCIsIl93cmFwcGVyIiwiX2ZyYW1lck1vdGlvbiIsImRldGFpbCIsInN0b3JlIiwidW5kZWZpbmVkIiwic2V0T3Blbk1lbnUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsImdvSG9tZSIsInB1c2hTdGF0ZSIsIm1vdGlvbiIsImhlYWRlciIsInNyYyIsInNldHRpbmdzIiwiQVBQX0xPR08iLCJhbHQiLCJVc2VyTWVudSIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsIm9uRXJyb3IiLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9jbG9zYWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9ub3RpZmljYXRpb24udHN4IiwiL3RzL2NvbXBvbmVudHMvcHJlbG9hZC50c3giLCIvdHMvY29udGV4dC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy9uYXZiYXJzL2Nsb3NhYmxlLnRzeCIsIi90cy9uYXZiYXJzL2RlZmF1bHQudHN4IiwiL3RzL3VzZXItbWVudS9pbmRleC50c3giLCIvdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi90cy91c2VyLW1lbnUvdGhlbWUtYnV0dG9uLnRzeCIsIi90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztVQWdCTSxTQUFVRyxZQUFZQSxDQUFDO1lBQUVDLE1BQU07WUFBRUMsS0FBSztZQUFFQyxRQUFRO1lBQUVDO1VBQUssQ0FBRTtZQUM5RCxJQUFJLENBQUNGLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsTUFBTUcsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUtKLFFBQVEsSUFBSUYsTUFBTSxDQUFDRyxLQUFLLElBQUtSLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMvRTtnQkFDQSxJQUFJLE9BQU9ULFFBQVEsS0FBSyxVQUFVLEVBQUUsT0FBT0EsUUFBUSxFQUFFO2dCQUNyRFAsUUFBQSxDQUFBWSxPQUFPLENBQUNLLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFVixRQUFRLENBQUM7O2NBR3pDLE9BQU9QLFFBQUEsQ0FBQVksT0FBTyxDQUFDTSxJQUFJLEVBQUU7WUFDdEIsQ0FBQztZQUNELE9BQU9mLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBbUIsVUFBVTtjQUFDQyxJQUFJLEVBQUMsV0FBVztjQUFDQyxTQUFTLEVBQUMsUUFBUTtjQUFDZCxPQUFPLEVBQUVBO1lBQU8sRUFBSTtVQUM1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQVAsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXVCLFdBQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUVBLElBQUF5QixNQUFBLEdBQUF6QixPQUFBO1VBQ0E7Ozs7O1VBS0EsU0FBUzBCLGlCQUFpQkEsQ0FBQ0MsSUFBSTtZQUM5QixNQUFNQyxTQUFTLEdBQUcsSUFBQUosTUFBQSxDQUFBTixPQUFLLEVBQUNTLElBQUksQ0FBQztZQUM3QixNQUFNRSxPQUFPLEdBQUdELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDdkMsT0FBTyxDQUFDLElBQUFOLE1BQUEsQ0FBQU4sT0FBSyxHQUFFLENBQUNhLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDO1VBQ2pDO1VBRU0sU0FBVUcsZUFBZUEsQ0FBQztZQUFFQztVQUFLLENBQUU7WUFDeEMsTUFBTUMsU0FBUyxHQUFHLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLDBCQUEwQixDQUFDO1lBQ25FLE1BQU1DLFdBQVcsR0FBR1gsaUJBQWlCLENBQUMsWUFBWSxDQUFDO1lBQ25ELE1BQU0sQ0FBQ1ksWUFBWSxFQUFFQyxlQUFlLENBQUMsR0FBR3JDLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQ04sU0FBUyxJQUFJRyxXQUFXLENBQUM7WUFDaEYsTUFBTUksVUFBVSxHQUFHLElBQUFoQixNQUFBLENBQUFpQixhQUFhLEdBQUU7WUFDbEMsSUFBSSxDQUFDSixZQUFZLEVBQUUsT0FBTyxJQUFJO1lBRTlCLE1BQU1LLE9BQU8sR0FBR2xDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJ5QixZQUFZLENBQUNTLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUM7Y0FDeERMLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsQ0FBQztZQUNELE9BQ0NyQyxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQThCLEdBQzVDcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUE0QixHQUMxQ3BCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxXQUFBLENBQUFzQixvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRUwsVUFBVSxLQUFLLElBQUk7Y0FDOUJNLE9BQU87Y0FDUEMsT0FBTyxFQUFFO2dCQUNSQyxJQUFJLEVBQ0gvQyxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksV0FBQSxDQUFBMkIsSUFBSTtrQkFBQ0MsSUFBSSxFQUFDLDBEQUEwRDtrQkFBQ0MsTUFBTSxFQUFDO2dCQUFRLEdBQ3BGbEQsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2tCQUFLRyxTQUFTLEVBQUM7Z0JBQXVCLEdBQUVXLEtBQUssQ0FBQ29CLFVBQVUsQ0FBQ0MsRUFBRSxDQUFPLENBRW5FO2dCQUVEQyxLQUFLLEVBQ0pyRCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7a0JBQUtHLFNBQVMsRUFBQztnQkFBdUIsR0FDckNwQixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsYUFBS2MsS0FBSyxDQUFDb0IsVUFBVSxDQUFDRyxPQUFPLENBQUNDLEtBQUssQ0FBTSxFQUN6Q3ZELE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPYyxLQUFLLENBQUNvQixVQUFVLENBQUNHLE9BQU8sQ0FBQ0UsS0FBSyxDQUFRLEVBQzdDeEQsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNJLFdBQUEsQ0FBQTJCLElBQUk7a0JBQUNDLElBQUksRUFBQywwREFBMEQ7a0JBQUNDLE1BQU0sRUFBQztnQkFBUSxHQUNuRm5CLEtBQUssQ0FBQ29CLFVBQVUsQ0FBQ0csT0FBTyxDQUFDRyxJQUFJLENBQ3hCOztZQUdULEVBQ0EsRUFFRnpELE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBbUIsVUFBVTtjQUFDQyxJQUFJLEVBQUMsT0FBTztjQUFDYixPQUFPLEVBQUVtQztZQUFPLEVBQUksQ0FDeEMsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBekMsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQTRELE1BQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBNkQsR0FBQSxHQUFBN0QsT0FBQTtVQUNNLFNBQVU4RCxPQUFPQSxDQUFBO1lBQ3RCLE9BQ0M1RCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQzBDLEdBQUEsQ0FBQUUsaUJBQWlCLFFBQ2pCN0QsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUF1QixHQUN4Q3BCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYyxFQUFPLEVBQ3BDcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFlLEdBQzdCcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFBLENBQUFJLEtBQUs7Y0FBQzFDLFNBQVMsRUFBQztZQUFxQixFQUFHLENBQ3BDLENBQ0UsQ0FDVTtVQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBcEIsTUFBQSxHQUFBRixPQUFBO1VBT08sTUFBTWlFLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUcvRCxNQUFBLENBQUFnQixPQUFLLENBQUNpRCxhQUFhLENBQVcsRUFBYyxDQUFDO1VBQ25FLE1BQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1sRSxNQUFBLENBQUFnQixPQUFLLENBQUNtRCxVQUFVLENBQUNKLGFBQWEsQ0FBQztVQUFDQyxPQUFBLENBQUFFLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7OztVQ1J0RTs7VUFFQUUsTUFBQSxDQUFBQyxjQUFBLENBQUFMLE9BQUE7WUFDQU0sS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBLElBQUF0RSxNQUFBLEdBQUFGLE9BQUE7VUFRQSxJQUFBeUUsU0FBQSxHQUFBekUsT0FBQTtVQWNPO1VBQVUsU0FBVTBFLFlBQVlBLENBQUNDLEtBQXlCO1lBQ2hFLE9BQU96RSxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQWpCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQTBELFFBQUEsUUFBR0QsS0FBSyxDQUFDRSxRQUFRLEdBQUczRSxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3NELFNBQUEsQ0FBQUssZUFBZTtjQUFBLEdBQUtIO1lBQUssRUFBSSxHQUFHekUsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUM0RCxhQUFhO2NBQUEsR0FBS0o7WUFBSyxFQUFJLENBQUk7VUFDN0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUF6RSxNQUFBLEdBQUFGLE9BQUE7VUFPTyxNQUFNZ0Ysb0JBQW9CLEdBQUFkLE9BQUEsQ0FBQWMsb0JBQUEsR0FBRzlFLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ2lELGFBQWEsQ0FBZSxFQUFrQixDQUFDO1VBQ2xGLE1BQU1jLHVCQUF1QixHQUFHQSxDQUFBLEtBQU0vRSxNQUFBLENBQUFnQixPQUFLLENBQUNtRCxVQUFVLENBQUNXLG9CQUFvQixDQUFDO1VBQUNkLE9BQUEsQ0FBQWUsdUJBQUEsR0FBQUEsdUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUnBGLElBQUEvRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa0YsUUFBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQXlCLE1BQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBb0YsUUFBQSxHQUFBcEYsT0FBQTtVQUNBLElBQUFxRixRQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLFNBQUEsR0FBQXRGLE9BQUE7VUFFTSxTQUFVdUYsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVDLFVBQVU7Y0FBRUMsVUFBVTtjQUFFeEQ7WUFBSyxDQUFFLEdBQUcsSUFBQWlELFFBQUEsQ0FBQWQsZ0JBQWdCLEdBQUU7WUFDNUQsTUFBTXNCLEdBQUcsR0FBRyxJQUFBeEYsTUFBQSxDQUFBeUYsTUFBTSxFQUFpQixJQUFJLENBQUM7WUFDeEMsTUFBTTtjQUFFQztZQUFJLENBQUUsR0FBR1IsUUFBQSxDQUFBUyxjQUFjO1lBQy9CLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxVQUFVLENBQUMsR0FBRzdGLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxDQUFDLENBQUNvRCxJQUFJLEVBQUVJLE9BQU8sSUFBSSxDQUFDLENBQUNKLElBQUksRUFBRUssS0FBSyxFQUFFQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFckcsSUFBQXpFLE1BQUEsQ0FBQTBFLFNBQVMsRUFDUixDQUFDUCxJQUFJLENBQUMsRUFDTixNQUFLO2NBQ0pHLFVBQVUsQ0FBQyxDQUFDLENBQUNILElBQUksRUFBRUksT0FBTyxJQUFJLENBQUMsQ0FBQ0osSUFBSSxFQUFFSyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQ0QsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQ3hCO1lBQ0QsSUFBSSxDQUFDTixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU1RLEdBQUcsR0FBRyxrQkFBa0JYLFVBQVUsR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFO1lBQ3pELE1BQU1ZLFlBQVksR0FBRyw0QkFBNEJaLFVBQVUsR0FBRyxTQUFTLEdBQUcsRUFBRSxFQUFFO1lBQzlFLE1BQU1hLElBQUksR0FBR1IsU0FBUyxHQUFHWCxRQUFBLENBQUFvQixXQUFXLEdBQUdsQixRQUFBLENBQUFtQixXQUFXO1lBQ2xELE1BQU1DLGVBQWUsR0FBR2hHLEtBQUssSUFBRztjQUMvQixJQUFJaUYsR0FBRyxDQUFDZ0IsT0FBTyxDQUFDQyxVQUFVLENBQUNsRyxLQUFLLENBQUMyQyxNQUFNLENBQUMsRUFBRW9DLFVBQVUsQ0FBQyxDQUFDQyxVQUFVLENBQUM7WUFDbEUsQ0FBQztZQUNELE9BQ0N2RixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ21FLFNBQUEsQ0FBQU4sb0JBQW9CLENBQUM0QixRQUFRO2NBQUNwQyxLQUFLLEVBQUU7Z0JBQUV2QyxLQUFLO2dCQUFFd0QsVUFBVTtnQkFBRUQ7Y0FBVTtZQUFFLEdBQ3RFdEYsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBRStFLFlBQVk7Y0FBRTdGLE9BQU8sRUFBRWlHLGVBQWU7Y0FBRWYsR0FBRyxFQUFFQTtZQUFHLEdBQy9EeEYsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQU9HLFNBQVMsRUFBRThFO1lBQUcsR0FDcEJsRyxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQXdDLEdBQ3pEcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFjLEdBQzVCcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixNQUFBLENBQUE0RyxJQUFJO2NBQUN4RixJQUFJLEVBQUMsTUFBTTtjQUFDYixPQUFPLEVBQUVnRjtZQUFVLEVBQUksRSxtQkFFcEMsRUFDTnRGLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBNEcsSUFBSTtjQUFDeEYsSUFBSSxFQUFDLE9BQU87Y0FBQ2IsT0FBTyxFQUFFZ0Y7WUFBVSxFQUFJLENBQ2xDLEVBQ1R0RixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ21GLElBQUksT0FBRyxDQUNELENBQ0gsQ0FDeUI7VUFFbEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUFwRyxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUIsV0FBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFrRixRQUFBLEdBQUFsRixPQUFBO1VBTU0sU0FBVThHLFFBQVFBLENBQUM7WUFBRXpGLElBQUk7WUFBRThCLElBQUk7WUFBRTRELFFBQVE7WUFBRSxHQUFHcEM7VUFBSyxDQUFjO1lBQ3RFLE1BQU1xQyxPQUFPLEdBQUc3RCxJQUFJLEdBQUc1QixXQUFBLENBQUEyQixJQUFJLEdBQUcsS0FBSztZQUNuQyxNQUFNO2NBQUVzQyxVQUFVO2NBQUVDO1lBQVUsQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQUQsdUJBQXVCLEdBQUU7WUFDNUQsTUFBTWdDLEtBQUssR0FBRztjQUFFM0YsU0FBUyxFQUFFO1lBQWlCLENBQUU7WUFDOUMsSUFBSTZCLElBQUksRUFBRTtjQUNUOEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHOUQsSUFBSTs7WUFHckIsTUFBTTNDLE9BQU8sR0FBR0EsQ0FBQSxLQUFNZ0YsVUFBVSxDQUFDLENBQUNDLFVBQVUsQ0FBQztZQUU3QyxPQUNDdkYsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUEsR0FBUXdEO1lBQUssR0FDWnpFLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkYsT0FBTztjQUFBLEdBQUtDLEtBQUs7Y0FBRXpHLE9BQU8sRUFBRUE7WUFBTyxHQUNsQ2EsSUFBSSxJQUFJbkIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixNQUFBLENBQUFpSCxPQUFJO2NBQUNDLElBQUksRUFBRTlGO1lBQUksRUFBSSxFQUM1QjBGLFFBQVEsQ0FDQSxDQUNOO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUE3RyxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa0YsUUFBQSxHQUFBbEYsT0FBQTtVQUVBLElBQUFvSCxLQUFBLEdBQUFwSCxPQUFBO1VBRU0sU0FBVXdHLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUNMdkUsS0FBSyxFQUFFO2dCQUFFb0YsSUFBSSxFQUFFcEY7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQWlELFFBQUEsQ0FBQWQsZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ2xFLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxjQUNDakIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUFOLFFBQVE7Y0FBQ3pGLElBQUksRUFBQyxNQUFNO2NBQUM4QixJQUFJLEVBQUM7WUFBRyxHQUM1QmxCLEtBQUssQ0FBQ3FGLElBQUksQ0FDRCxFQUNYcEgsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUFOLFFBQVE7Y0FBQ3pGLElBQUksRUFBQyxvQkFBb0I7Y0FBQzhCLElBQUksRUFBQztZQUFrQixHQUN6RGxCLEtBQUssQ0FBQ3NGLFVBQVUsQ0FDUCxDQUNOO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJBLElBQUFySCxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa0YsUUFBQSxHQUFBbEYsT0FBQTtVQUVBLElBQUFvSCxLQUFBLEdBQUFwSCxPQUFBO1VBRU0sU0FBVXVHLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUNMdEUsS0FBSyxFQUFFO2dCQUFFb0YsSUFBSSxFQUFFcEY7Y0FBSztZQUFFLENBQ3RCLEdBQUcsSUFBQWlELFFBQUEsQ0FBQWQsZ0JBQWdCLEdBQUU7WUFFdEIsT0FDQ2xFLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxjQUNDakIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUFOLFFBQVE7Y0FBQ3pGLElBQUksRUFBQyxNQUFNO2NBQUM4QixJQUFJLEVBQUM7WUFBRyxHQUM1QmxCLEtBQUssQ0FBQ3FGLElBQUksQ0FDRCxFQUNYcEgsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUFOLFFBQVE7Y0FBQ3pGLElBQUksRUFBQyxXQUFXO2NBQUM4QixJQUFJLEVBQUM7WUFBWSxHQUMxQ2xCLEtBQUssQ0FBQ3VGLFNBQVMsQ0FDTixFQUNYdEgsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUFOLFFBQVE7Y0FBQ3pGLElBQUksRUFBQyxpQkFBaUI7Y0FBQzhCLElBQUksRUFBQztZQUFlLEdBQ25EbEIsS0FBSyxDQUFDd0YsT0FBTyxDQUNKLEVBQ1h2SCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lHLEtBQUEsQ0FBQU4sUUFBUTtjQUFDekYsSUFBSSxFQUFDLGlCQUFpQjtjQUFDOEIsSUFBSSxFQUFDO1lBQXFCLEdBQ3pEbEIsS0FBSyxDQUFDeUYsYUFBYSxDQUNWLEVBQ1h4SCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lHLEtBQUEsQ0FBQU4sUUFBUTtjQUFDekYsSUFBSSxFQUFDLG9CQUFvQjtjQUFDOEIsSUFBSSxFQUFDO1lBQWtCLEdBQ3pEbEIsS0FBSyxDQUFDc0YsVUFBVSxDQUNQLEVBQ1hySCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lHLEtBQUEsQ0FBQU4sUUFBUTtjQUFDekYsSUFBSSxFQUFDLFNBQVM7Y0FBQzhCLElBQUksRUFBQztZQUFVLEdBQ3RDbEIsS0FBSyxDQUFDMEYsT0FBTyxDQUNKLENBQ047VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Qk0sU0FBVUMsVUFBVUEsQ0FBQSxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0Y5QixJQUFBbkcsTUFBQSxHQUFBekIsT0FBQTtVQUNBLElBQUE2SCxlQUFBLEdBQUE3SCxPQUFBO1VBRUEsSUFBQTRELE1BQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa0YsUUFBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUE4SCxLQUFBLEdBQUE5SCxPQUFBO1VBQ0EsSUFBQStILFNBQUEsR0FBQS9ILE9BQUE7VUFDQSxJQUFBRCxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUUsU0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUFnSSxhQUFBLEdBQUFoSSxPQUFBO1VBQ0EsSUFBQWlJLFFBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBa0ksUUFBQSxHQUFBbEksT0FBQTtVQUVBLElBQUFtSSxhQUFBLEdBQUFuSSxPQUFBO1VBYU87VUFBVSxTQUFVOEUsZUFBZUEsQ0FBQztZQUMxQ2lDLFFBQVE7WUFDUnFCLE1BQU07WUFDTjlHLFNBQVM7WUFDVHVELFFBQVEsR0FBRyxLQUFLO1lBQ2hCd0QsS0FBSztZQUNML0gsUUFBUSxHQUFHZ0k7VUFBUyxDQUNBO1lBQ3BCLE1BQU1sQyxHQUFHLEdBQUcsZ0JBQWdCOUUsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM5RCxNQUFNb0UsR0FBRyxHQUFHeEYsTUFBQSxDQUFBZ0IsT0FBSyxDQUFDeUUsTUFBTSxFQUFFO1lBQzFCLE1BQU0sQ0FBQ0YsVUFBVSxFQUFFOEMsV0FBVyxDQUFDLEdBQUdySSxNQUFBLENBQUFnQixPQUFLLENBQUNzQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQ2dHLFVBQVUsRUFBRXZHLEtBQUssQ0FBQyxHQUFHLElBQUFSLE1BQUEsQ0FBQWdILFFBQVEsRUFBQ1osZUFBQSxDQUFBYSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUczSSxNQUFBLENBQUFnQixPQUFLLENBQUNzQixRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2hELElBQUFmLE1BQUEsQ0FBQTBFLFNBQVMsRUFDUixDQUFDa0MsS0FBSyxDQUFDakksTUFBTSxDQUFDLEVBQ2QsTUFBSztjQUNKeUksVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsRUFDRCxlQUFlLENBQ2Y7WUFDRCxJQUFJLENBQUNMLFVBQVUsRUFBRSxPQUFPdEksTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUM4RyxRQUFBLENBQUFuRSxPQUFPLE9BQUc7WUFFbkMsTUFBTTBCLFVBQVUsR0FBR0EsQ0FBQSxLQUFNK0MsV0FBVyxDQUFDLENBQUM5QyxVQUFVLENBQUM7WUFDakQsTUFBTWpCLEtBQUssR0FBRztjQUFFdkMsS0FBSztjQUFFd0QsVUFBVTtjQUFFRDtZQUFVLENBQUU7WUFDL0MsTUFBTXNELE1BQU0sR0FBR0EsQ0FBQSxLQUFNL0ksUUFBQSxDQUFBWSxPQUFPLENBQUNvSSxTQUFTLENBQUMsR0FBRyxDQUFDO1lBRTNDLE9BQ0M3SSxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQytELFFBQUEsQ0FBQWpCLGFBQWEsQ0FBQzJDLFFBQVE7Y0FBQ3BDLEtBQUssRUFBRUE7WUFBSyxHQUNuQ3RFLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0gsYUFBQSxDQUFBYSxNQUFNLENBQUNDLE1BQU07Y0FBQzNILFNBQVMsRUFBRThFLEdBQUc7Y0FBRVYsR0FBRyxFQUFFQTtZQUFHLEdBQ3RDeEYsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFtQixHQUNqQ3BCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBYyxHQUNoQ3BCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0QsU0FBQSxDQUFBdEUsWUFBWTtjQUFDQyxNQUFNLEVBQUVpSSxLQUFLLENBQUNqSSxNQUFNO2NBQUVDLEtBQUssRUFBRXdFLFFBQVE7Y0FBRXZFLFFBQVEsRUFBRUE7WUFBUSxFQUFJLEVBQzNFSixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3lDLE1BQUEsQ0FBQUksS0FBSztjQUNMeEQsT0FBTyxFQUFFc0ksTUFBTTtjQUNmSSxHQUFHLEVBQUVoQixRQUFBLENBQUFpQixRQUFRLENBQUNDLFFBQVE7Y0FDdEI7Y0FDQUMsR0FBRyxFQUFDLFFBQVE7Y0FDWi9ILFNBQVMsRUFBQztZQUFhLEVBQ3RCLEVBQ0R1RCxRQUFRLElBQUl1RCxNQUFNLElBQUlsSSxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQVEsR0FBRThHLE1BQU0sQ0FBUSxFQUMvRGxJLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSx3QkFBa0IsRUFDakJrSCxLQUFLLEVBQUVqSSxNQUFNLEVBQUVxRCxLQUFLLElBQUl2RCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsZUFBT2tILEtBQUssQ0FBQ2pJLE1BQU0sQ0FBQ3FELEtBQUssQ0FBUSxDQUNqRCxFQUNWdkQsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFlLEdBQ2hDeUYsUUFBUSxFQUNUN0csTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUM0RyxTQUFBLENBQUF1QixRQUFRLE9BQUcsQ0FDSCxDQUNMLENBQ1MsRUFDaEJwSixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQzZHLGFBQUEsQ0FBQWhHLGVBQWU7Y0FBQ0MsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDakMvQixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQzJHLEtBQUEsQ0FBQXZDLFNBQVMsT0FBRyxDQUNXO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGQSxJQUFBOUQsTUFBQSxHQUFBekIsT0FBQTtVQUNBLElBQUE2SCxlQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQTRELE1BQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBa0YsUUFBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUE4SCxLQUFBLEdBQUE5SCxPQUFBO1VBQ0EsSUFBQStILFNBQUEsR0FBQS9ILE9BQUE7VUFDQSxJQUFBRCxRQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBZ0ksYUFBQSxHQUFBaEksT0FBQTtVQUNBLElBQUFpSSxRQUFBLEdBQUFqSSxPQUFBO1VBQ0EsSUFBQWtJLFFBQUEsR0FBQWxJLE9BQUE7VUFDQSxJQUFBbUksYUFBQSxHQUFBbkksT0FBQTtVQWFPO1VBQVUsU0FBVStFLGFBQWFBLENBQUM7WUFBRWdDLFFBQVE7WUFBRXpGLFNBQVM7WUFBRStHO1VBQUssQ0FBc0I7WUFDMUYsTUFBTWpDLEdBQUcsR0FBRyxnQkFBZ0I5RSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzlELE1BQU1vRSxHQUFHLEdBQUd4RixNQUFBLENBQUFnQixPQUFLLENBQUN5RSxNQUFNLEVBQUU7WUFDMUIsTUFBTSxDQUFDRixVQUFVLEVBQUU4QyxXQUFXLENBQUMsR0FBR3JJLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDZ0csVUFBVSxFQUFFdkcsS0FBSyxDQUFDLEdBQUcsSUFBQVIsTUFBQSxDQUFBZ0gsUUFBUSxFQUFDWixlQUFBLENBQUFhLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzNJLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDaEQsSUFBQWYsTUFBQSxDQUFBMEUsU0FBUyxFQUNSLENBQUNrQyxLQUFLLENBQUNqSSxNQUFNLENBQUMsRUFDZCxNQUFLO2NBQ0p5SSxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxFQUNELGVBQWUsQ0FDZjtZQUNELElBQUksQ0FBQ0wsVUFBVSxFQUFFLE9BQU90SSxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQzhHLFFBQUEsQ0FBQW5FLE9BQU8sT0FBRztZQUVuQyxNQUFNMEIsVUFBVSxHQUFHQSxDQUFBLEtBQU0rQyxXQUFXLENBQUMsQ0FBQzlDLFVBQVUsQ0FBQztZQUNqRCxNQUFNakIsS0FBSyxHQUFHO2NBQUV2QyxLQUFLO2NBQUV3RCxVQUFVO2NBQUVEO1lBQVUsQ0FBRTtZQUMvQyxNQUFNc0QsTUFBTSxHQUFHQSxDQUFBLEtBQU0vSSxRQUFBLENBQUFZLE9BQU8sQ0FBQ29JLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFFM0MsT0FDQzdJLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0QsUUFBQSxDQUFBakIsYUFBYSxDQUFDMkMsUUFBUTtjQUFDcEMsS0FBSyxFQUFFQTtZQUFLLEdBQ25DdEUsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNnSCxhQUFBLENBQUFhLE1BQU0sQ0FBQ0MsTUFBTTtjQUFDM0gsU0FBUyxFQUFFOEUsR0FBRztjQUFFVixHQUFHLEVBQUVBO1lBQUcsR0FDdEN4RixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW1CLEdBQ2pDcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFjLEdBQ2hDcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixNQUFBLENBQUFtQixVQUFVO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNiLE9BQU8sRUFBRWdGLFVBQVU7Y0FBRWxFLFNBQVMsRUFBQztZQUF1QixFQUFHLEVBQ2pGcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUN5QyxNQUFBLENBQUFJLEtBQUs7Y0FBQ3hELE9BQU8sRUFBRXNJLE1BQU07Y0FBRUksR0FBRyxFQUFFaEIsUUFBQSxDQUFBaUIsUUFBUSxDQUFDQyxRQUFRO2NBQUVDLEdBQUcsRUFBQyxRQUFRO2NBQUMvSCxTQUFTLEVBQUM7WUFBYSxFQUFHLEVBQ3ZGcEIsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLHdCQUFrQixFQUNqQmtILEtBQUssRUFBRWpJLE1BQU0sRUFBRXFELEtBQUssSUFBSXZELE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPa0gsS0FBSyxDQUFDakksTUFBTSxDQUFDcUQsS0FBSyxDQUFRLENBQ2pELEVBQ1Z2RCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQWUsR0FDaEN5RixRQUFRLEVBQ1Q3RyxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQzRHLFNBQUEsQ0FBQXVCLFFBQVEsT0FBRyxDQUNILENBQ0wsQ0FDUyxFQUVoQnBKLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkcsYUFBQSxDQUFBaEcsZUFBZTtjQUFDQyxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUNqQy9CLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkcsS0FBQSxDQUFBdkMsU0FBUyxPQUFHLENBQ1c7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVBLElBQUFILFFBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBRCxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUosU0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFrRixRQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQW9ILEtBQUEsR0FBQXBILE9BQUE7VUFDQSxJQUFBNEQsTUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUF3SixRQUFBLEdBQUF4SixPQUFBO1VBRU0sU0FBVXNKLFFBQVFBLENBQUE7WUFDdkIsTUFBTTtjQUFFckg7WUFBSyxDQUFFLEdBQUcsSUFBQWlELFFBQUEsQ0FBQWQsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTXFGLE1BQU0sR0FBRyxNQUFNaEosS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixNQUFNMEUsUUFBQSxDQUFBUyxjQUFjLENBQUM0RCxNQUFNLEVBQUU7Y0FDN0IxSixRQUFBLENBQUFZLE9BQU8sQ0FBQ29JLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDakMsQ0FBQztZQUVELE9BQ0M3SSxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ29JLFNBQUEsQ0FBQUcsUUFBUTtjQUFDcEksU0FBUyxFQUFDO1lBQVcsR0FDOUJwQixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ29JLFNBQUEsQ0FBQUksY0FBYztjQUFDckksU0FBUyxFQUFDO1lBQWMsR0FDdkNwQixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3FJLFFBQUEsQ0FBQUksV0FBVyxPQUFHLENBQ0MsRUFDakIxSixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ29JLFNBQUEsQ0FBQU0sWUFBWSxRQUNaM0osTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFzQixHQUN4Q3BCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBQSxDQUFBSSxLQUFLO2NBQUNxRixHQUFHLEVBQUMsb0JBQW9CO2NBQUNILEdBQUcsRUFBRTlELFFBQUEsQ0FBQVMsY0FBYyxDQUFDRCxJQUFJLENBQUNrRTtZQUFRLEVBQUksRUFDckU1SixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsZUFBT2lFLFFBQUEsQ0FBQVMsY0FBYyxDQUFDRCxJQUFJLENBQUNtRSxXQUFXLENBQVEsRUFDOUM3SixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsZUFBT2lFLFFBQUEsQ0FBQVMsY0FBYyxDQUFDRCxJQUFJLENBQUNvRSxLQUFLLENBQVEsQ0FDL0IsRUFFVjlKLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUcsS0FBQSxDQUFBNkMsWUFBWTtjQUFDOUcsSUFBSSxFQUFDLFdBQVc7Y0FBQzlCLElBQUksRUFBQztZQUFNLEdBQ3hDWSxLQUFLLENBQUNpSSxRQUFRLENBQUNDLFdBQVcsQ0FDYixFQUVmakssTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUE2QyxZQUFZO2NBQUN6SixPQUFPLEVBQUVpSixNQUFNO2NBQUVwSSxJQUFJLEVBQUM7WUFBTSxHQUN4Q1ksS0FBSyxDQUFDaUksUUFBUSxDQUFDVCxNQUFNLENBQ1IsQ0FDRCxDQUNMO1VBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUF2SixNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBdUosU0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNNLFNBQVVpSyxZQUFZQSxDQUFDO1lBQUU1SSxJQUFJO1lBQUUwRixRQUFRO1lBQUUsR0FBR3BDO1VBQUssQ0FBRTtZQUN4RCxPQUNDekUsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNvSSxTQUFBLENBQUFhLFlBQVk7Y0FBQSxHQUFLekY7WUFBSyxHQUN0QnpFLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBaUIsR0FDOUJELElBQUksSUFBSW5CLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBNEcsSUFBSTtjQUFDeEYsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDNUIwRixRQUFRLENBQ0osQ0FDUTtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBN0csTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQW9GLFFBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBNEQsTUFBQSxHQUFBNUQsT0FBQTtVQUNBLElBQUF5QixNQUFBLEdBQUF6QixPQUFBO1VBRU87VUFBYSxNQUFNNEosV0FBVyxHQUFHQSxDQUFBLEtBQUs7WUFDNUMsTUFBTSxDQUFDUyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHcEssTUFBQSxDQUFBZ0IsT0FBSyxDQUFDc0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUMrSCxTQUFTLEVBQUVDLFFBQVEsQ0FBQyxHQUFHdEssTUFBQSxDQUFBZ0IsT0FBSyxDQUFDc0IsUUFBUSxDQUFDNEMsUUFBQSxDQUFBUyxjQUFjLENBQUNELElBQUksRUFBRTZFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN4RixNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTUosWUFBWSxDQUFDLElBQUksQ0FBQztZQUVoRCxJQUFBN0ksTUFBQSxDQUFBMEUsU0FBUyxFQUFDLENBQUNmLFFBQUEsQ0FBQVMsY0FBYyxDQUFDLEVBQUUsTUFBTTJFLFFBQVEsQ0FBQ3BGLFFBQUEsQ0FBQVMsY0FBYyxDQUFDRCxJQUFJLENBQUM2RSxhQUFhLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztZQUV6RixJQUFJLENBQUNyRixRQUFBLENBQUFTLGNBQWMsQ0FBQ0QsSUFBSSxFQUFFO1lBRTFCLE9BQ0MxRixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTBCLEdBQ3ZDLENBQUMrSSxTQUFTLEdBQ1ZuSyxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3lDLE1BQUEsQ0FBQUksS0FBSztjQUFDcUYsR0FBRyxFQUFDLG9CQUFvQjtjQUFDSCxHQUFHLEVBQUVxQixTQUFTLENBQUNULFFBQVE7Y0FBRWEsT0FBTyxFQUFFRDtZQUFlLEVBQUksR0FFckZ4SyxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQWlILE9BQU87Y0FBQzdGLElBQUksRUFBQztZQUFNLEVBQ3BCLENBQ0k7VUFFUixDQUFDO1VBQUM2QyxPQUFBLENBQUEwRixXQUFBLEdBQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJGLElBQUExSixNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNEssT0FBQSxHQUFBNUssT0FBQTtVQUVBLElBQUFvSCxLQUFBLEdBQUFwSCxPQUFBO1VBRU87VUFBVSxTQUFVNkssYUFBYUEsQ0FBQTtZQUN2QyxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHL0ksWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xELE1BQU0rSSxZQUFZLEdBQVdMLEtBQUssR0FBRyxNQUFNLEdBQUcsT0FBTztZQUNyRCxNQUFNTSxTQUFTLEdBQVdGLFlBQVksSUFBSUMsWUFBWTtZQUN0RCxNQUFNLENBQUM5SixJQUFJLEVBQUVnSyxPQUFPLENBQUMsR0FBR25MLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ3NCLFFBQVEsQ0FBUzRJLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUVyRixTQUFTRSxZQUFZQSxDQUFDQyxDQUFDO2NBQ3RCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtjQUVsQixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRCxNQUFNYixLQUFLLEdBQUd6SixJQUFJLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNO2NBQy9Db0ssU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVkLEtBQUssQ0FBQztjQUNqRDNJLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLE9BQU8sRUFBRWtJLEtBQUssQ0FBQztjQUNwQ0YsT0FBQSxDQUFBaUIsT0FBTyxDQUFDQyxVQUFVLENBQUNoSyxHQUFHLENBQUMsa0JBQWtCLEVBQUVnSixLQUFLLENBQUM7Y0FFakRPLE9BQU8sQ0FBQ1AsS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzNDO1lBRUE1SyxNQUFBLENBQUFnQixPQUFLLENBQUM2SyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNiLFlBQVksRUFBRTtjQUNuQixNQUFNTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoREYsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVWLFlBQVksQ0FBQztZQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ2hMLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUcsS0FBQSxDQUFBNkMsWUFBWTtjQUFDekosT0FBTyxFQUFFOEs7WUFBWSxHQUNsQ3BMLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsTUFBQSxDQUFBNEcsSUFBSTtjQUFDeEYsSUFBSSxFQUFFQSxJQUFJO2NBQUViLE9BQU8sRUFBRThLO1lBQVksRUFBSSxFQUMzQ3BMLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSx1QkFBa0IsQ0FDSjtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQWpCLE1BQUEsR0FBQUYsT0FBQTtVQUNNLFNBQVVnTSxRQUFRQSxDQUFBO1lBQ3ZCLE9BQU85TCxNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsYUFBVztVQUNuQiIsImlnbm9yZUxpc3QiOltdfQ==