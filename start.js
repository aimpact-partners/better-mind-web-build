System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/transversals", "@beyond-js/widgets@1.1.2/render", "@aimpact/ailearn-app@0.3.32/model/wrapper", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/routing", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.32/config", "@aimpact/chat-sdk@1.4.4/startup", "@aimpact/agents-api@0.4.1/ws-config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Transversals) {
      dependency_1 = _beyondJsKernel0112Transversals;
    }, function (_beyondJsWidgets112Render) {
      dependency_2 = _beyondJsWidgets112Render;
    }, function (_aimpactAilearnApp0332ModelWrapper) {
      dependency_3 = _aimpactAilearnApp0332ModelWrapper;
    }, function (_aimpactChatSdk144Session) {
      dependency_4 = _aimpactChatSdk144Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_7 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_beyondJsReactive204Model) {
      dependency_9 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_10 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_11 = _aimpactAilearnApp0332Config;
    }, function (_aimpactChatSdk144Startup) {
      dependency_12 = _aimpactChatSdk144Startup;
    }, function (_aimpactAgentsApi041WsConfig) {
      dependency_13 = _aimpactAgentsApi041WsConfig;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/ailearn-app/model/wrapper', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/icons', dependency_7], ['pragmate-ui/image', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['@aimpact/chat-sdk/startup', dependency_12], ['@aimpact/agents-api/ws-config', dependency_13]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "realtime-home-page",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/home",
        "is": "page",
        "route": "/realtime-home"
      }, {
        "name": "beyondjs-agents-realtime-console-original",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console-original",
        "is": "page",
        "route": "/console/henry"
      }, {
        "name": "beyondjs-agents-realtime-console",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console",
        "is": "page",
        "route": "/console"
      }, {
        "name": "beyondjs-agents-realtime-conversation",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/conversation",
        "is": "page",
        "route": "/conversation"
      }, {
        "name": "beyondjs-agents-realtime-recorder",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/recorder",
        "is": "page",
        "route": "/recorder"
      }, {
        "name": "chat-sdk-markdown-page",
        "vspecifier": "@aimpact/chat-sdk@1.4.4/tests/markdown",
        "is": "page",
        "route": "/chat/sdk/markdown",
        "layout": "general-layout"
      }, {
        "name": "chat-sdk-playable",
        "vspecifier": "@aimpact/chat-sdk@1.4.4/tests/playable",
        "is": "page",
        "route": "/chat/sdk/playable"
      }, {
        "name": "app-ailearn-components-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/components/ui/page",
        "is": "page",
        "route": "/ui/components/test"
      }, {
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }, {
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.3.32/dashboard/wall/widget.widget"
      }, {
        "name": "ailearn-sessions-access",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/sessions/access.widget",
        "is": "page",
        "route": "/sessions/access/${id}",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-character-talk",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/character-talk.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/character-talk/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }, {
        "name": "assignments-activity-closing-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments-activity-closing",
        "is": "page",
        "route": "/assignments/${id}/activity/${activityId}/closing",
        "layout": "main-layout"
      }, {
        "name": "ailearn-content-theory-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/content-theory.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/content-theory/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-debate-activity-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/debate.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/debate/${activityId}/chat/${chatId}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-gclassroom-permissions",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/gclassroom-permissions.widget"
      }, {
        "name": "ailearn-assignment-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/assignment/view.widget",
        "is": "page",
        "route": "/assignments/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-gclassrooms-access",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/gclassroom/access.widget",
        "is": "page",
        "route": "/gclassroom/access",
        "layout": "chat-layout"
      }, {
        "name": "ailearn-gclassroom-explorer",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/gclassroom-explorer.widget"
      }, {
        "name": "ailearn-classroom-join",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/join.widget",
        "is": "page",
        "route": "/classrooms/join",
        "layout": "main-layout"
      }, {
        "name": "ailearn-classrooms-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/list.widget",
        "is": "page",
        "route": "/classrooms/list",
        "layout": "main-layout"
      }, {
        "name": "app-classrooms-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/management.widget",
        "is": "page",
        "route": "/classrooms/management",
        "layout": "main-layout"
      }, {
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }, {
        "name": "ailearn-modules-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/list.widget",
        "is": "page",
        "route": "/modules/list",
        "layout": "main-layout"
      }, {
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }, {
        "name": "app-organizations-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/organizations/management.widget",
        "is": "page",
        "route": "/organizations/management",
        "layout": "main-layout"
      }, {
        "name": "ailearn-organization-join",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/organizations/join.widget",
        "is": "page",
        "route": "/organizations/join",
        "layout": "main-layout"
      }, {
        "name": "ailearn-organizations-list",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/organizations/list.widget",
        "is": "page",
        "route": "/organizations/list",
        "layout": "main-layout"
      }, {
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }, {
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/auth-layout",
        "is": "layout"
      }, {
        "name": "dashboard-layout",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/dashboard-layout.widget",
        "is": "layout"
      }, {
        "name": "main-layout",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/main-layout.widget",
        "is": "layout"
      }, {
        "name": "ailearn-archive-app",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/archive.widget",
        "is": "page",
        "route": "/archive",
        "layout": "main-layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "app-not-allowed",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/not-allowed-control.widget"
      }, {
        "name": "app-not-allowed-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/not-allowed-page.widget"
      }, {
        "name": "app-missing-control",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/missing.widget"
      }, {
        "name": "app-missing-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/missing-page.widget",
        "is": "page",
        "route": "/error-404",
        "layout": "main-layout"
      }, {
        "name": "app-system-error-control",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/system-error-widget.widget"
      }, {
        "name": "app-system-error-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/system-error.widget",
        "is": "page",
        "route": "/error-500",
        "layout": "main-layout"
      }, {
        "name": "student-home",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/home.widget",
        "is": "page",
        "route": "/",
        "layout": "main-layout"
      }, {
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }, {
        "name": "privacy-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/pages/privacy",
        "is": "page",
        "route": "/privacy"
      }, {
        "name": "ailearn-terms-and-conditions-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/pages/terms",
        "is": "page",
        "route": "/terms-and-conditions"
      }, {
        "name": "app-template-bottom-bar",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/template/bottom-bar",
        "is": "page",
        "route": "/template/bottom-bar"
      }, {
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "main-layout"
      }, {
        "name": "app-updating-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/pages/updating.widget",
        "is": "page",
        "route": "/updating"
      }, {
        "name": "app-policies-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/pages/age.widget",
        "is": "page",
        "route": "/user-validation"
      }, {
        "name": "ailearn-test-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/test",
        "is": "page",
        "route": "/dev/test",
        "layout": "main-layout"
      }, {
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/widgets/breadcrumb.widget"
      }]);
      bundles = [];
      /***********************************
      MODULE: @aimpact/ailearn-app/routing
      ***********************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /************************************
        INTERNAL MODULE: ./handlers/dashboard
        ************************************/

        ims.set('./handlers/dashboard', {
          hash: 3727431712,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkDashboard = checkDashboard;
            function checkDashboard(uri, router, next) {
              const match = /^\/?assignments\/([^/]+)\/dashboard\/classroom$/.exec(uri.pathname);
              if (match) {
                const id = match[1]; // Extraemos el id del grupo capturado en la regex
                return {
                  pathname: `/dashboard/${id}`
                };
              }
              return next(uri);
            }
          }
        });

        /*******************************
        INTERNAL MODULE: ./handlers/home
        *******************************/

        ims.set('./handlers/home', {
          hash: 3464692361,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkHome = checkHome;
            async function checkHome({
              pathname
            }, router, next) {
              return next();
            }
          }
        });

        /***********************************
        INTERNAL MODULE: ./handlers/policies
        ***********************************/

        ims.set('./handlers/policies', {
          hash: 779423052,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkPolicies = checkPolicies;
            var _session = require("@aimpact/chat-sdk/session");
            var _publicRoutes = require("../public-routes");
            async function checkPolicies(uriObject, router, next) {
              await _session.sessionWrapper.isReady;
              await _session.sessionWrapper?.user?.isReady;
              const {
                pathname,
                uri
              } = uriObject;
              const {
                termsAccepted,
                age
              } = _session.sessionWrapper.user;
              if (_publicRoutes.PUBLIC_ROUTES.includes(pathname)) return uri;
              if (!termsAccepted && age > 17 || !age) {
                if (pathname && pathname !== '/user-validation') router.previous = uriObject;
                return {
                  pathname: '/user-validation'
                };
              }
              if (pathname === '/user-validation' && termsAccepted && age > 17) {
                return {
                  pathname: '/'
                };
              }
              return next();
            }
          }
        });

        /********************************
        INTERNAL MODULE: ./handlers/roles
        ********************************/

        ims.set('./handlers/roles', {
          hash: 2541798624,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkRoles = checkRoles;
            var _session = require("@aimpact/chat-sdk/session");
            async function checkRoles(uri, router, next) {
              const {
                pathname
              } = uri;
              await _session.sessionWrapper.isReady;
              const regex = /^\/assignments\/.+$/;
              const isAssigment = regex.test(pathname);
              if (isAssigment) return next();
              const validRoutes = ['/users/me', '/organizations/create', '/organizations/join', 'classrooms/join'];
              function containsPath(paths, url) {
                for (const path of paths) {
                  if (url.includes(path)) {
                    return true;
                  }
                }
                return false;
              }
              if (pathname === '/next-steps' && _session.sessionWrapper.user?.roles.length) return {
                pathname: '/'
              };
              if (!_session.sessionWrapper.user.roles.length && !containsPath(validRoutes, uri.uri)) {
                return {
                  pathname: '/next-steps'
                };
              }
              return next();
            }
          }
        });

        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 2054232100,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            var _publicRoutes = require("../public-routes");
            var _router = require("../router");
            const DEFAULT_ROUTE = '/auth/login';
            async function checkSession(uri, router, next) {
              const {
                pathname
              } = uri;
              await _session.sessionWrapper.isReady;
              if (!_session.sessionWrapper.logged && _publicRoutes.PUBLIC_ROUTES.includes(pathname)) {
                return {
                  pathname
                };
              }
              if (!_session.sessionWrapper.logged && !_publicRoutes.PUBLIC_ROUTES.includes(pathname)) {
                router.previous = uri;
                return {
                  pathname: DEFAULT_ROUTE
                };
              }
              if (_session.sessionWrapper.logged && _session.sessionWrapper.user?.outdated) {
                return {
                  pathname: '/updating'
                };
              }
              if (_session.sessionWrapper.logged && _publicRoutes.AUTH_ROUTES.includes(pathname)) {
                return {
                  pathname: '/'
                };
              }
              if (!_publicRoutes.AUTH_ROUTES.includes(pathname) && _publicRoutes.PUBLIC_ROUTES.includes(pathname) || _session.sessionWrapper.logged) {
                const route = _router.Router.getPreviousUrl();
                return next(route);
              }
              if (pathname !== '/') {
                router.previous = uri;
              }
              return {
                pathname: DEFAULT_ROUTE
              };
            }
          }
        });

        /*******************************
        INTERNAL MODULE: ./public-routes
        *******************************/

        ims.set('./public-routes', {
          hash: 2866617319,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PUBLIC_ROUTES = exports.AUTH_ROUTES = void 0;
            const PUBLIC_ROUTES = exports.PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password', '/documents/access', '/privacy', '/terms-and-conditions', '/reactive/testing'];
            const AUTH_ROUTES = exports.AUTH_ROUTES = ['/auth/login', '/auth/register', '/auth/recovery', '/auth/recover-password'];
          }
        });

        /************************
        INTERNAL MODULE: ./router
        ************************/

        ims.set('./router', {
          hash: 3382285475,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            let previousURL;
            /*bundle*/
            class Router {
              #isDefault;
              get isDefault() {
                return this.#pathname === '/';
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #data;
              get data() {
                return this.#data;
              }
              #previous;
              get previous() {
                return previousURL;
              }
              set previous(uri) {
                if (uri?.pathname === '/') return;
                if (uri?.uri === this.#previous?.uri) return;
                this.#previous = uri;
                previousURL = uri;
              }
              #index;
              #handlers;
              constructor(handlers) {
                if (!Array.isArray(handlers)) {
                  throw new Error('handlers must be an array');
                }
                handlers.forEach(handler => {
                  if (typeof handler !== 'function') throw new Error('handlers must be an array of functions');
                });
                this.#handlers = handlers;
              }
              async process(index, uri) {
                const next = async newUri => {
                  newUri = newUri || uri;
                  if (index < this.#handlers.length - 1) {
                    return await this.process(index + 1, newUri);
                  }
                  // If there are no more handlers, just return the current URI.
                  return newUri;
                };
                if (!this.#handlers.length) return uri.uri;
                const response = await this.#handlers[index](uri, this, next);
                return response;
              }
              async validate(uri) {
                if (!this.#handlers.length) return uri;
                return this.process(0, uri);
                // return uri.uri;
              }
              static getPreviousUrl() {
                return previousURL;
              }
              static getAndCleanPreviousUrl() {
                const url = previousURL;
                previousURL = undefined;
                return url;
              }
              static cleanPreviousUrl() {
                previousURL = undefined;
              }
            }
            exports.Router = Router;
            globalThis.Router = Router;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 2781683819,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _policies = require("./handlers/policies");
            var _roles = require("./handlers/roles");
            var _session = require("./handlers/session");
            var _router = require("./router");
            var _dashboard = require("./handlers/dashboard");
            const handlers = [_session.checkSession, _policies.checkPolicies, _roles.checkRoles, _dashboard.checkDashboard];
            const /*bundle*/router = new _router.Router(handlers);
            /**
             * The redirect function must returns
             * @param uri
             * @returns
             */
            _routing.routing.redirect = async function redirect(uri) {
              try {
                const response = await router.validate(uri);
                return response.uri ?? response.pathname;
              } catch (e) {
                console.error(e);
                return '/error-500';
              }
            };
            _routing.routing.missing = async function redirect() {
              return 'app-missing-page';
            };
          }
        });
        exports.descriptor = [{
          "im": "./router",
          "from": "Router",
          "name": "Router"
        }];
        return {
          dependencies: ['@aimpact/ailearn-app/model/wrapper', '@aimpact/chat-sdk/session', '@beyond-js/kernel/routing']
        };
      }]);

      /******************************************
      MODULE: @aimpact/ailearn-app/initialize-app
      ******************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/initialize-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /*******************************
        INTERNAL MODULE: ./icons/profile
        *******************************/

        ims.set('./icons/profile', {
          hash: 2038903291,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.ProfileIcon = void 0;
            var _react = require("react");
            var _icons = require("pragmate-ui/icons");
            var _session = require("@aimpact/chat-sdk/session");
            var _image = require("pragmate-ui/image");
            /* bundle */
            const ProfileIcon = ({
              onClick
            }) => {
              const [loadError, setLoadError] = _react.default.useState(false);
              if (!_session.sessionWrapper.user) return;
              const userProps = _session.sessionWrapper.user.getProperties();
              const handleLoadError = () => setLoadError(true);
              return _react.default.createElement("div", {
                className: "aside-item",
                onClick: onClick
              }, !loadError ? _react.default.createElement(_image.Image, {
                alt: "user image profile",
                src: userProps.photoURL,
                onError: handleLoadError
              }) : _react.default.createElement(_icons.Icon, {
                className: "lg",
                icon: 'user'
              }));
            };
            exports.ProfileIcon = ProfileIcon;
          }
        });

        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 2120717246,
          creator: function (require, exports) {
            "use strict";

            var _startup = require("./startup");
            _startup.Startup.setup();
          }
        });

        /*************************
        INTERNAL MODULE: ./startup
        *************************/

        ims.set('./startup', {
          hash: 1998640091,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Startup = void 0;
            var _model = require("@beyond-js/reactive/model");
            var _render = require("@beyond-js/widgets/render");
            var _session = require("@aimpact/chat-sdk/session");
            var _core = require("@aimpact/ailearn-sdk/core");
            var _config = require("@aimpact/ailearn-app/config");
            var _startup = require("@aimpact/chat-sdk/startup");
            var _wsConfig = require("@aimpact/agents-api/ws-config");
            // import { gclassroom } from '@aimpact/ailearn-app/model/gclassroom';

            //@ts-ignore

            class Startup extends _model.ReactiveModel {
              constructor() {
                super();
                this.#start();
                // SDKSettings.userModel = User;
              }
              #initSDK = async () => {
                //@ts-ignore
                const {
                  environment
                } = _config.default;
                console.log(_config.default.params);
                _session.sessionWrapper.settings({
                  firebase: _config.default.params.apps[_config.default.params.project]
                });
                await _startup.sdkConfig.initialize({
                  environment,
                  userModel: _core.User
                });
              };
              #start = async () => {
                const {
                  environment
                } = _config.default;
                (0, _wsConfig.setEnv)({
                  environment
                });
                await this.#initSDK();
                const promises = [_session.sessionWrapper.isReady];
                await Promise.all(promises);
                this.checkMode();
                // registerExtensions();
              };
              checkMode() {
                const dyslexiaMode = localStorage.getItem('aimpact.accessibility.mode') ? localStorage.getItem('aimpact.accessibility.mode') : 'normal';
                const container = document.querySelector('html');
                if (container) {
                  container.setAttribute('data-accessibility-mode', dyslexiaMode);
                  _render.widgets.attributes.add('data-accessibility-mode', dyslexiaMode);
                }
              }
              static setup() {
                const instance = new Startup();
              }
            }
            exports.Startup = Startup;
          }
        });
        exports.descriptor = [{
          "im": "./icons/profile",
          "from": "ProfileIcon",
          "name": "ProfileIcon"
        }];
        return {
          dependencies: ['react', 'pragmate-ui/icons', '@aimpact/chat-sdk/session', 'pragmate-ui/image', '@beyond-js/reactive/model', '@beyond-js/widgets/render', '@aimpact/ailearn-sdk/core', '@aimpact/ailearn-app/config', '@aimpact/chat-sdk/startup', '@aimpact/agents-api/ws-config']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});