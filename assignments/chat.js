System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/chat-sdk@1.5.4/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, ChatControl, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
  _export({
    Chat: void 0,
    ActivityHeader: void 0,
    MarkdownContent: void 0,
    ActivityContent: void 0,
    ChatControl: void 0,
    DesktopChat: void 0,
    FullChatContainer: void 0,
    MainContentLayoutContainer: void 0,
    SplitChatContainer: void 0,
    ChatView: void 0,
    IModuleContext: void 0,
    ModuleContext: void 0,
    useModuleContext: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_2 = _aimpactChatSdk154ChatComponentCode;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_3 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_4 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_10 = _aimpactChatSdk154Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_11 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/chat-sdk/chat-component.code', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/base', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['@aimpact/chat-sdk/wrapper', dependency_10], ['pragmate-ui/tabs', dependency_11], ['@aimpact/ailearn-app/components/hooks', dependency_12], ['pragmate-ui/list', dependency_13]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 620508917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _empty = require("../components/empty");
          var _skeleton = require("./skeleton");
          /*bundle*/
          function Chat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => {
              return setUpdate({});
            }, 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement(_chatComponent.AgentsChatContainer, {
              realtime: store.tracking.realtime,
              language: store.model.language,
              onListenChat: store.onListenChat,
              id: chatId,
              model: store.activity.chatModel,
              skeleton: _skeleton.ChatSkeleton,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat-container"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null), _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./chat/chat/mobile
      **********************************/

      ims.set('./chat/chat/mobile', {
        hash: 3947823223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileChat = MobileChat;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("../components/empty");
          var _context = require("../../context");
          function MobileChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              realtime: store.tracking.realtime,
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat__container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_chatComponent.AgentsChatPanel, null)), _react.default.createElement("div", {
              className: "center-container chat-input__layout-container"
            }, _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/chat/skeleton
      ************************************/

      ims.set('./chat/chat/skeleton', {
        hash: 3917185198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _entranceDiv = require("../components/entrance-div");
          function ChatSkeleton() {
            return _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: "chat-container"
            }, _react.default.createElement("form", {
              className: "chat-input-form "
            }, _react.default.createElement("div", {
              className: "chat-input-container  "
            }, _react.default.createElement("div", null), _react.default.createElement("div", {
              className: "input__wrapper"
            }, _react.default.createElement("textarea", {
              className: "input__textarea"
            })), _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement("button", {
              className: "pui-button btn-default has-icon btn--md ripple",
              type: "button"
            })))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./chat/components/empty
      ***************************************/

      ims.set('./chat/components/empty', {
        hash: 26105930,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useModuleContext)();
            if (!store?.model) return null;
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            const {
              title,
              description
            } = store.hasCredits ? texts.credits : texts.noCredits;
            return _react.default.createElement("div", {
              className: " empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info",
              className: ""
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./chat/components/entrance-div
      **********************************************/

      ims.set('./chat/components/entrance-div', {
        hash: 433044096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntranceDiv = void 0;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          const EntranceDiv = ({
            onClick,
            className,
            children,
            as
          }) => {
            const attrs = className ? {
              className
            } : {};
            const Control = (0, _framerMotion.motion)(as || 'div');
            const [hasAnimated, setHasAnimated] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }, []);
            return _react.default.createElement(Control, {
              onClick: onClick,
              initial: !hasAnimated ? {
                opacity: 0,
                y: 20,
                scale: 0.95
              } : false,
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: !hasAnimated ? {
                duration: 0.3,
                ease: 'easeInOut'
              } : false,
              ...attrs
            }, children);
          };
          exports.EntranceDiv = EntranceDiv;
        }
      });

      /****************************************
      INTERNAL MODULE: ./chat/components/header
      ****************************************/

      ims.set('./chat/components/header', {
        hash: 4137659607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../context");
          var _entranceDiv = require("../components/entrance-div");
          /*bundle*/
          function ActivityHeader({
            children,
            fullContainer
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              model: {
                type,
                title,
                tracking
              }
            } = store;
            const [hasAnimated, setHasAnimated] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }, []);
            const cls = `activity-header activity-header--${type}`;
            const Container = fullContainer ? 'div' : _react.default.Fragment;
            const props = {};
            if (fullContainer) props.className = 'activity-header__container';
            return _react.default.createElement(Container, {
              ...props
            }, fullContainer && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              initial: !hasAnimated ? {
                opacity: 0,
                y: 20,
                scale: 0.95
              } : false,
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: !hasAnimated ? {
                duration: 0.3,
                ease: 'easeInOut'
              } : undefined,
              className: "entity-image-full-cover",
              src: store.model.picture,
              type: store.data.type,
              entity: "activity"
            })), _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: cls,
              as: "header"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: type
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, title), _react.default.createElement("span", {
              className: "header__title"
            }, tracking.module.title)), children));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./chat/components/markdown-content
      **************************************************/

      ims.set('./chat/components/markdown-content', {
        hash: 2538005877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MarkdownContent = MarkdownContent;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          /*bundle*/
          function MarkdownContent({
            name,
            content,
            className
          }) {
            const attrs = className ? {
              className
            } : {};
            const {
              store
            } = (0, _context.useModuleContext)();
            if (!content) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: store.globalTexts.activities.empty[name]
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_markdown.Markdown, {
              content: content,
              ...attrs
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/content/index
      ************************************/

      ims.set('./chat/content/index', {
        hash: 3539493030,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _context = require("../../context");
          var _markdownContent = require("../components/markdown-content");
          var _objectives = require("../objectives");
          /*bundle*/
          function ActivityContent({
            fullContainer
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              article,
              dyslexia,
              audios,
              synthesis
            } = store.model.getMaterials();
            const [mode] = _react.default.useState(_wrapper.AppWrapper.accessibility ?? 'normal');
            let content = mode === 'normal' ? article : dyslexia ?? dyslexia;
            const [control, setControl] = _react.default.useState(content ? 'article' : 'objectives');
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            const tabs = [];
            const onClickTab = event => {
              setControl(event.currentTarget.dataset.tab);
            };
            const Tab = ({
              name
            }) => {
              const cls = `tab ${control === name ? 'active' : ''}`;
              return _react.default.createElement("div", {
                className: cls,
                onClick: onClickTab,
                "data-tab": name
              }, texts[name]);
            };
            store.tabs.forEach(tab => {
              if (tab === 'objectives') return;
              if (tab === 'article' && content) {
                tabs.push(_react.default.createElement(Tab, {
                  name: "article",
                  key: "content-tab"
                }));
                return;
              }
              if (!store.model.getMaterials()[tab]) return;
              if (store.data) {
                tabs.push(_react.default.createElement(Tab, {
                  name: tab,
                  key: tab
                }));
              }
            });
            tabs.push(_react.default.createElement(Tab, {
              name: "objectives",
              key: "objectives"
            }));
            const expand = event => {
              event.preventDefault();
              const parent = event.currentTarget.closest('.content__container');
              parent.classList.add('expanding');
              parent.classList.toggle('expanded');
              globalThis.setTimeout(() => {
                parent.classList.remove('expanding');
              }, 200);
            };
            const Controls = {
              article: _react.default.createElement(_markdownContent.MarkdownContent, {
                name: "content",
                content: content
              }),
              objectives: _react.default.createElement(_objectives.ActivityObjectives, {
                store: store
              }),
              synthesis: _react.default.createElement(_markdownContent.MarkdownContent, {
                name: "synthesis",
                content: synthesis,
                className: "content__synthesis"
              })
            };
            const output = Controls[control];
            return _react.default.createElement(_react.default.Fragment, null, !fullContainer && _react.default.createElement(_ui.EntityImage, {
              initial: {
                opacity: 0,
                y: 20,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeInOut'
              },
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.data.type,
              entity: "activity"
            }), !!totalAudios && _react.default.createElement("div", {
              className: "audios__container"
            }, _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
            })), !fullContainer && _react.default.createElement(_icons.AppIconButton, {
              icon: "expand",
              className: "expand-icon circle",
              onClick: expand
            }), _react.default.createElement("div", null, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, tabs), _react.default.createElement("div", {
              className: "panes__container"
            }, output)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/control
      ******************************/

      ims.set('./chat/control', {
        hash: 2776275213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _desktop = require("./desktop");
          var _context = require("../context");
          var _mobile = require("./mobile");
          /*bundle*/ //@ts-ignore

          //@ts-ignore
          function ChatControl({
            store,
            chatId,
            assignmentId
          }) {
            const [update, setUpdated] = (0, _react.useState)({});
            const [items] = (0, _react.useState)(store.items);
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const screenSize = (0, _hooks.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks2.useBinder)([store], () => setUpdated({}));
            if (store.ready && !store.found) return _react.default.createElement("app-missing-control", null);
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              globalTexts: store.globalTexts,
              items,
              setShowCoinsModal // only the setter we don't need to update the context when it is opened or closed.
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopChat, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/desktop
      ******************************/

      ims.set('./chat/desktop', {
        hash: 1195543414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopChat = DesktopChat;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _fullContainer = require("./layouts/full-container");
          var _splitContainer = require("./layouts/split-container");
          var _mainContentLayout = require("./layouts/main-content-layout");
          /*bundle*/
          function DesktopChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const settings = store.model.settings ? store.model.settings : {
              layout: 'main-chat-layout'
            };
            // const settings = { layout: 'main-content-layout' };
            const fullContainer = ['full-content-layout', 'full-chat-layout'].includes(settings.layout);
            if (settings.layout === 'main-content-layout') {
              return _react.default.createElement(_mainContentLayout.MainContentLayoutContainer, {
                settings: settings
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, fullContainer ? _react.default.createElement(_fullContainer.FullChatContainer, {
              settings: settings
            }) : _react.default.createElement(_splitContainer.SplitChatContainer, {
              settings: settings
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./chat/global
      *****************************/

      ims.set('./chat/global', {
        hash: 3938685076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************************
      INTERNAL MODULE: ./chat/layouts/full-container
      *********************************************/

      ims.set('./chat/layouts/full-container', {
        hash: 1173755600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FullChatContainer = FullChatContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _header = require("../components/header");
          var _chat = require("../chat");
          var _content = require("../content");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function FullChatContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal,
              globalTexts
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const toggleFloating = event => {
              const parent = event.currentTarget.closest('.floating-container');
              parent.classList.toggle('opened');
            };
            const cls = `content-activity--desktop-container ${settings.layout}${store.testing ? ' content-testing' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_header.ActivityHeader, {
              fullContainer: true
            }), _react.default.createElement(_content.ActivityContent, {
              fullContainer: true
            }), _react.default.createElement("div", {
              className: "floating-container"
            }, _react.default.createElement("div", {
              className: "floating-chat-container"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "close",
              className: "circle close-icon",
              onClick: toggleFloating
            }), _react.default.createElement(_chat.Chat, null)), _react.default.createElement("div", {
              className: "floating-toggle-button",
              onClick: toggleFloating
            }, globalTexts.actions.talktoAI, _react.default.createElement(_icons.AppIcon, {
              icon: "chat"
            }))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./chat/layouts/main-content-layout
      **************************************************/

      ims.set('./chat/layouts/main-content-layout', {
        hash: 2137935428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContentLayoutContainer = MainContentLayoutContainer;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _chat = require("../chat");
          var _entranceDiv = require("../components/entrance-div");
          var _content = require("../content");
          /*bundle*/
          function MainContentLayoutContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal,
              globalTexts
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const {
              model: {
                type,
                title,
                tracking
              }
            } = store;
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            const [hasAnimated, setHasAnimated] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }, []);
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const cls = `content-activity__main-content-layout ${settings.layout}${store.testing ? ' content-testing' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement("div", {
              className: "activity-header__container"
            }, _react.default.createElement(_ui.EntityImage, {
              initial: !hasAnimated ? {
                opacity: 0,
                y: 20,
                scale: 0.95
              } : false,
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: !hasAnimated ? {
                duration: 0.3,
                ease: 'easeInOut'
              } : undefined,
              className: "entity-image-full-cover",
              src: store.model.picture,
              type: store.data.type,
              entity: "activity"
            }), _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: `activity-header activity-header--${type}`,
              as: "header"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: type
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, title), _react.default.createElement("span", {
              className: "header__title"
            }, tracking.module.title)))), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-p"
            }, _react.default.createElement(_content.ActivityContent, {
              fullContainer: true
            })), _react.default.createElement("div", {
              className: "scrolleable-child chat__container no-p"
            }, _react.default.createElement(_chat.Chat, null)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./chat/layouts/split-container
      **********************************************/

      ims.set('./chat/layouts/split-container', {
        hash: 110625299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SplitChatContainer = SplitChatContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _chat = require("../chat");
          var _header = require("../components/header");
          var _content = require("../content");
          /*bundle*/
          function SplitChatContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const fullContainer = false;
            const cls = `content-activity--desktop-container ${settings.layout}${store.testing ? ' content-testing' : ''}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_header.ActivityHeader, {
              fullContainer: fullContainer
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_content.ActivityContent, {
              fullContainer: fullContainer
            })), _react.default.createElement("div", {
              className: "scrolleable-child chat__container no-p"
            }, _react.default.createElement(_chat.Chat, null)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./chat/mobile
      *****************************/

      ims.set('./chat/mobile', {
        hash: 4003761478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileContent = MobileContent;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _mobile = require("./chat/mobile");
          var _context = require("../context");
          var _content = require("./content");
          function MobileContent() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              className: "mobile-tabs__menu",
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null))), _react.default.createElement(_tabs.Tabs, {
              className: "mobile-tabs__menu-items"
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./chat/objectives/index
      ***************************************/

      ims.set('./chat/objectives/index', {
        hash: 1145776710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectives = ActivityObjectives;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          function ActivityObjectives({
            store
          }) {
            const {
              data,
              texts
            } = store;
            return _react.default.createElement("div", null, _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.data.description), store.data.task ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.task), _react.default.createElement("p", null, store.data.task)) : null, _react.default.createElement("h4", {
              className: "mb-15"
            }, texts.objectives), _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: store.data?.objectives,
              control: _item.ActivityObjective
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./chat/objectives/item
      **************************************/

      ims.set('./chat/objectives/item', {
        hash: 2457280014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjective = ActivityObjective;
          var _react = require("react");
          function ActivityObjective({
            item
          }) {
            return _react.default.createElement("div", {
              className: "aside__item-list"
            }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.objective));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/view
      ***************************/

      ims.set('./chat/view', {
        hash: 516305712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatView = ChatView;
          var _react = require("react");
          var _control = require("./control");
          /*bundle*/ //@ts-ignore

          //@ts-ignore
          function ChatView({
            store,
            uri
          }) {
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            return _react.default.createElement(_control.ChatControl, {
              store: store,
              chatId: chatId,
              assignmentId: assignmentId
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 460512966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          /*bundle*/
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          /*bundle*/
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chat/chat/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chat/components/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./chat/components/markdown-content",
        "from": "MarkdownContent",
        "name": "MarkdownContent"
      }, {
        "im": "./chat/content/index",
        "from": "ActivityContent",
        "name": "ActivityContent"
      }, {
        "im": "./chat/control",
        "from": "ChatControl",
        "name": "ChatControl"
      }, {
        "im": "./chat/desktop",
        "from": "DesktopChat",
        "name": "DesktopChat"
      }, {
        "im": "./chat/layouts/full-container",
        "from": "FullChatContainer",
        "name": "FullChatContainer"
      }, {
        "im": "./chat/layouts/main-content-layout",
        "from": "MainContentLayoutContainer",
        "name": "MainContentLayoutContainer"
      }, {
        "im": "./chat/layouts/split-container",
        "from": "SplitChatContainer",
        "name": "SplitChatContainer"
      }, {
        "im": "./chat/view",
        "from": "ChatView",
        "name": "ChatView"
      }, {
        "im": "./context",
        "from": "IModuleContext",
        "name": "IModuleContext"
      }, {
        "im": "./context",
        "from": "ModuleContext",
        "name": "ModuleContext"
      }, {
        "im": "./context",
        "from": "useModuleContext",
        "name": "useModuleContext"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/chat/index').Chat : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./chat/components/header').ActivityHeader : value);
        (require || prop === 'MarkdownContent') && _export("MarkdownContent", MarkdownContent = require ? require('./chat/components/markdown-content').MarkdownContent : value);
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./chat/content/index').ActivityContent : value);
        (require || prop === 'ChatControl') && _export("ChatControl", ChatControl = require ? require('./chat/control').ChatControl : value);
        (require || prop === 'DesktopChat') && _export("DesktopChat", DesktopChat = require ? require('./chat/desktop').DesktopChat : value);
        (require || prop === 'FullChatContainer') && _export("FullChatContainer", FullChatContainer = require ? require('./chat/layouts/full-container').FullChatContainer : value);
        (require || prop === 'MainContentLayoutContainer') && _export("MainContentLayoutContainer", MainContentLayoutContainer = require ? require('./chat/layouts/main-content-layout').MainContentLayoutContainer : value);
        (require || prop === 'SplitChatContainer') && _export("SplitChatContainer", SplitChatContainer = require ? require('./chat/layouts/split-container').SplitChatContainer : value);
        (require || prop === 'ChatView') && _export("ChatView", ChatView = require ? require('./chat/view').ChatView : value);
        (require || prop === 'IModuleContext') && _export("IModuleContext", IModuleContext = require ? require('./context').IModuleContext : value);
        (require || prop === 'ModuleContext') && _export("ModuleContext", ModuleContext = require ? require('./context').ModuleContext : value);
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./context').useModuleContext : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiTW9iaWxlQ2hhdCIsIkZyYWdtZW50IiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsInR5cGUiLCJfZW50cmFuY2VEaXYiLCJFbnRyYW5jZURpdiIsInRleHRzIiwiY2hhdCIsInVwZGF0ZSIsImRlc2NyaXB0aW9uIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiX2ZyYW1lck1vdGlvbiIsImNoaWxkcmVuIiwiYXMiLCJhdHRycyIsIkNvbnRyb2wiLCJtb3Rpb24iLCJoYXNBbmltYXRlZCIsInNldEhhc0FuaW1hdGVkIiwidXNlRWZmZWN0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImV4cG9ydHMiLCJfaWNvbnMiLCJmdWxsQ29udGFpbmVyIiwiY2xzIiwiQ29udGFpbmVyIiwicHJvcHMiLCJFbnRpdHlJbWFnZSIsInVuZGVmaW5lZCIsInNyYyIsInBpY3R1cmUiLCJkYXRhIiwiZW50aXR5IiwiQXBwSWNvbiIsIm1vZHVsZSIsIl9tYXJrZG93biIsIk1hcmtkb3duQ29udGVudCIsIm5hbWUiLCJjb250ZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImdsb2JhbFRleHRzIiwiYWN0aXZpdGllcyIsIk1hcmtkb3duIiwiX3dyYXBwZXIiLCJfdGFicyIsIl9tYXJrZG93bkNvbnRlbnQiLCJfb2JqZWN0aXZlcyIsIkFjdGl2aXR5Q29udGVudCIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsImdldE1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRyb2wiLCJzZXRDb250cm9sIiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJ0YWJzIiwib25DbGlja1RhYiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0YWIiLCJUYWIiLCJmb3JFYWNoIiwicHVzaCIsImtleSIsImV4cGFuZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiQ29udHJvbHMiLCJvYmplY3RpdmVzIiwiQWN0aXZpdHlPYmplY3RpdmVzIiwib3V0cHV0IiwiQWN0aXZpdHlBdWRpbyIsIkFwcEljb25CdXR0b24iLCJUYWJzIiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkNoYXRDb250cm9sIiwiYXNzaWdubWVudElkIiwic2V0VXBkYXRlZCIsIml0ZW1zIiwic2hvd0NvaW5zTW9kYWwiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJyZWFkeSIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiTW9kdWxlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsIkRlc2t0b3BDaGF0IiwiTW9iaWxlQ29udGVudCIsIkNvaW5zTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIl9mdWxsQ29udGFpbmVyIiwiX3NwbGl0Q29udGFpbmVyIiwiX21haW5Db250ZW50TGF5b3V0Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJNYWluQ29udGVudExheW91dENvbnRhaW5lciIsIkZ1bGxDaGF0Q29udGFpbmVyIiwiU3BsaXRDaGF0Q29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfaGVhZGVyIiwiX2NoYXQiLCJfY29udGVudCIsInRvZ2dsZUZsb2F0aW5nIiwidGVzdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJfbGlzdCIsIl9pdGVtIiwidGFzayIsIkxpc3QiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfY29udHJvbCIsIkNoYXRWaWV3IiwidXJpIiwidmFycyIsImdldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiL3RzL2NoYXQvY2hhdC9pbmRleC50c3giLCIvdHMvY2hhdC9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbnRyYW5jZS1kaXYudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY29udHJvbC50c3giLCIvdHMvY2hhdC9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9sYXlvdXRzL21haW4tY29udGVudC1sYXlvdXQudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9zcGxpdC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy9jaGF0L3ZpZXcudHN4IiwiL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLGNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUVPO1VBQVUsU0FBVU0sSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBaUIsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sZ0JBQWdCLEdBQUU7WUFDdkQsTUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLE1BQU0sR0FBR0MsU0FBUyxDQUFDLEdBQUdiLE1BQUEsQ0FBQWMsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRXhDLElBQUFaLE1BQUEsQ0FBQWEsU0FBUyxFQUNSLENBQUNSLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLEVBQ2IsTUFBSztjQUNKLE9BQU9K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