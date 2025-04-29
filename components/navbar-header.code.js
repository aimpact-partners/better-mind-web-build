System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/components/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, NavbarHeader, CloasableNavbar, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_14 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_15 = _beyondJsWidgets112Render;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/dropdown', dependency_14], ['@beyond-js/widgets/render', dependency_15]]);
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
        hash: 3482866284,
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
              src: "/assets/rvd/logo.png",
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
        hash: 3075896655,
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
              src: "/assets/rvd/logo.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jbG9zYWJsZSIsIk5hdmJhckhlYWRlciIsInByb3BzIiwiRnJhZ21lbnQiLCJjbG9zYWJsZSIsIkNsb2FzYWJsZU5hdmJhciIsIkRlZmF1bHROYXZiYXIiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX2NvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJBc2lkZU1lbnUiLCJ0b2dnbGVNZW51IiwibWVudU9wZW5lZCIsInJlZiIsInVzZVJlZiIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZUJpbmRlciIsImNscyIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJQcm92aWRlciIsIkljb24iLCJNZW51SXRlbSIsImNoaWxkcmVuIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsIm1lbnUiLCJob21lIiwiY2xhc3Nyb29tcyIsImNvbW11bml0eSIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwiYXJjaGl2ZSIsInVzZVNlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9ub3RpZmljYXRpb24iLCJfcHJlbG9hZCIsIl9mcmFtZXJNb3Rpb24iLCJkZXRhaWwiLCJzdG9yZSIsInVuZGVmaW5lZCIsInNldE9wZW5NZW51IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJhbHQiLCJVc2VyTWVudSIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsIm9uRXJyb3IiLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9jbG9zYWJsZS50c3giLCIvdHMvY29tcG9uZW50cy9ub3RpZmljYXRpb24udHN4IiwiL3RzL2NvbXBvbmVudHMvcHJlbG9hZC50c3giLCIvdHMvY29udGV4dC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy9uYXZiYXJzL2Nsb3NhYmxlLnRzeCIsIi90cy9uYXZiYXJzL2RlZmF1bHQudHN4IiwiL3RzL3VzZXItbWVudS9pbmRleC50c3giLCIvdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi90cy91c2VyLW1lbnUvdGhlbWUtYnV0dG9uLnRzeCIsIi90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUFnQk0sU0FBVUcsWUFBWUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQztVQUFLLENBQUU7WUFDOUQsSUFBSSxDQUFDRixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFLSixRQUFRLElBQUlGLE1BQU0sQ0FBQ0csS0FBSyxJQUFLUixRQUFBLENBQUFZLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0U7Z0JBQ0EsSUFBSSxPQUFPVCxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU9BLFFBQVEsRUFBRTtnQkFDckRQLFFBQUEsQ0FBQVksT0FBTyxDQUFDSyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRVYsUUFBUSxDQUFDOztjQUd6QyxPQUFPUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUFPZixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQW1CLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFdBQVc7Y0FBQ0MsU0FBUyxF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