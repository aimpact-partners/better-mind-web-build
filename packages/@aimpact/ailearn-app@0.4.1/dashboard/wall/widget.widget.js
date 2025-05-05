System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.1/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/image", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/components/navbar-header.code", "@aimpact/ailearn-app@0.4.1/config", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1/jsx-runtime"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Content, Header, WallView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Content: void 0,
    Header: void 0,
    WallView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_3 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactAilearnApp041DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_5 = _aimpactAilearnSdk120Core;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive205Model) {
      dependency_7 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_8 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_pragmateUi100Beta7List) {
      dependency_12 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_15 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041ComponentsNavbarHeaderCode) {
      dependency_16 = _aimpactAilearnApp041ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp041Config) {
      dependency_17 = _aimpactAilearnApp041Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_18 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_19 = _pragmateUi100Beta7Components;
    }, function (_react1831JsxRuntime) {
      dependency_20 = _react1831JsxRuntime;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard/wall/widget",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['pragmate-ui/image', dependency_10], ['react', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_16], ['@aimpact/ailearn-app/config', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/components', dependency_19], ['react/jsx-runtime', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-dashboard-wall",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard/wall/widget.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/dashboard/wall/widget.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1485994025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager(this.attributes);
              return this.#store;
            }
            get Widget() {
              return _views.WallView;
            }
            constructor(a) {
              super(a);
            }
            /**
             * this method is executed when the widget is show
             */
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hola() {
              console.log('hola');
            }
          }
          exports.Controller = Controller;
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 3506573663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1423826803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _model.ReactiveModel {
            isStore = true;
            #model;
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #id;
            get id() {
              return this.#id;
            }
            #assignment;
            get assignment() {
              return this.#assignment;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor(attributes) {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.load(attributes.get('id'));
            }
            refresh = async () => {
              try {
                this.fetching = true;
                const {
                  messages
                } = await this.model.load({
                  id: this.#id
                });
                this.#items = messages;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
            async load(id) {
              try {
                this.#model = new _core.DashboardWall();
                this.#id = id;
                const {
                  messages
                } = await this.#model.load({
                  id
                });
                this.#items = messages;
                super.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/profile-icon
      ***********************************************/

      ims.set('./views/components/profile-icon', {
        hash: 77011776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          function ProfileIcon({
            role,
            photoUrl
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            // the local storage is used to store the user's default profile icon while is defined a better way to handle this.
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? photoUrl : globalThis.localStorage.getItem('chat.app.user.default.profile');
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, photoUrl && !loadError || role !== 'user' ? _react.default.createElement(_image.Image, {
              src: src,
              alt: "user image profile",
              onError: handleLoadError
            }) : _react.default.createElement(_icons.AppIcon, {
              className: "lg",
              icon: "user"
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/content/index
      *************************************/

      ims.set('./views/content/index', {
        hash: 2680141398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Content = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          const Content = () => {
            const {
              items
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_list.List, {
              className: "wall__container",
              items: items,
              control: _item.Item
            });
          };
          exports.Content = Content;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/content/item
      ************************************/

      ims.set('./views/content/item', {
        hash: 1300636804,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _message = require("./message");
          function Item({
            data
          }) {
            const {
              texts
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement("div", {
              className: "wall-container",
              id: data.time
            }, _react.default.createElement("p", {
              className: "title-activity h3"
            }, data.activity.title), _react.default.createElement(_message.Message, {
              role: "user",
              text: data.prompt.content,
              user: data.user
            }), _react.default.createElement(_message.Message, {
              role: "system",
              text: data.answer.content,
              user: undefined
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/content/message
      ***************************************/

      ims.set('./views/content/message', {
        hash: 681577480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _react = require("react");
          var _profileIcon = require("../components/profile-icon");
          var _icons = require("pragmate-ui/icons");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          function Message({
            role,
            text,
            user
          }) {
            const [isExpanded, setIsExpand] = (0, _react.useState)(false);
            const cls = `wall ${role}`;
            function toggleText() {
              setIsExpand(!isExpanded);
            }
            function applyEllipsis(text, maxLength) {
              return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
            }
            const output = applyEllipsis(text, isExpanded ? 5000 : 280);
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "picture__container"
            }, _react.default.createElement(_profileIcon.ProfileIcon, {
              role: role,
              photoUrl: user?.photoUrl
            })), _react.default.createElement("section", {
              className: "wall-message__container"
            }, _react.default.createElement("div", {
              className: `message-text__container expand-${isExpanded}`
            }, user && _react.default.createElement("p", {
              className: "message-user__label-text p2"
            }, user.name), _react.default.createElement(_markdown.Markdown, {
              className: `message__label-text p2 expand-${isExpanded}`,
              content: output
            }))), _react.default.createElement("section", {
              className: "wall-actions__container"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: toggleText,
              className: "md",
              icon: !isExpanded ? 'arrowDropDown' : 'arrowDropUp'
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1059998280,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWallDashboardContext = exports.WallDashboardContext = void 0;
          var _react = require("react");
          const WallDashboardContext = exports.WallDashboardContext = _react.default.createContext({});
          const useWallDashboardContext = () => _react.default.useContext(WallDashboardContext);
          exports.useWallDashboardContext = useWallDashboardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 3693986805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.emptyTitle,
              description: texts.empty,
              icon: "info"
            });
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 3262600120,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Header() {
            const {
              store
            } = (0, _context.useWallDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [['Assignment', `/dashboard/${store.id}`], ['Wall', '']]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1027115624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallView = WallView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _content = require("./content");
          var _empty = require("./empty");
          /*bundle */
          function WallView({
            store,
            texts
          }) {
            const [state, setState] = _react.default.useState({});
            (0, _hooks.useBinder)([store], () => {
              setState({
                ready: store.ready,
                fetching: store.fetching,
                items: store.items
              });
            });
            if (!state.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: state.fetching
            });
            const totalItems = store.items.length;
            const contextValue = {
              texts,
              store,
              items: store.items,
              fetching: store.fetching,
              totalItems
            };
            return _react.default.createElement(_context.WallDashboardContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!store.items.length,
              ternary: true,
              options: {
                false: _react.default.createElement(_empty.EmptyList, null),
                true: _react.default.createElement(_content.Content, null)
              }
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/content/index",
        "from": "Content",
        "name": "Content"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "WallView",
        "name": "WallView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Content') && _export("Content", Content = require ? require('./views/content/index').Content : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'WallView') && _export("WallView", WallView = require ? require('./views/index').WallView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJXYWxsVmlldyIsImNvbnN0cnVjdG9yIiwiYSIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhvbGEiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfY29yZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwibW9kZWwiLCJpdGVtcyIsImlkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZnJlc2giLCJmZXRjaGluZyIsIm1lc3NhZ2VzIiwiZSIsImVycm9yIiwiRGFzaGJvYXJkV2FsbCIsIl9pY29ucyIsIl9pbWFnZSIsIl9yZWFjdCIsIlByb2ZpbGVJY29uIiwicm9sZSIsInBob3RvVXJsIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlU3RhdGUiLCJoYW5kbGVMb2FkRXJyb3IiLCJzcmMiLCJnbG9iYWxUaGlzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSW1hZ2UiLCJhbHQiLCJvbkVycm9yIiwiQXBwSWNvbiIsImljb24iLCJfY29udGV4dCIsIl9pdGVtIiwiX2xpc3QiLCJDb250ZW50IiwidXNlV2FsbERhc2hib2FyZENvbnRleHQiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfbWVzc2FnZSIsImRhdGEiLCJ0aW1lIiwiYWN0aXZpdHkiLCJ0aXRsZSIsIk1lc3NhZ2UiLCJ0ZXh0IiwicHJvbXB0IiwiY29udGVudCIsInVzZXIiLCJhbnN3ZXIiLCJ1bmRlZmluZWQiLCJfcHJvZmlsZUljb24iLCJfbWFya2Rvd24iLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmQiLCJjbHMiLCJ0b2dnbGVUZXh0IiwiYXBwbHlFbGxpcHNpcyIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwib3V0cHV0IiwibmFtZSIsIk1hcmtkb3duIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJXYWxsRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiRW1wdHlMaXN0IiwiRW1wdHlDYXJkIiwiZW1wdHlUaXRsZSIsImRlc2NyaXB0aW9uIiwiZW1wdHkiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGVudCIsIl9lbXB0eSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwidG90YWxJdGVtcyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsImZhbHNlIiwidHJ1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL2ludGVyZmFjZS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGVudC9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZW50L21lc3NhZ2UudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50Ijpb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