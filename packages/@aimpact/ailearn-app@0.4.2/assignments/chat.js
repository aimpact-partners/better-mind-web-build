System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/chat-sdk@1.5.4/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, ChatControl, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_4 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_5 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_8 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_11 = _aimpactChatSdk154Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_12 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/chat-sdk/chat-component.code', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/tabs', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['pragmate-ui/list', dependency_14]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 2545590679,
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
              icon: "/assets/images/chat/profile.png"
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
        hash: 1861714842,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
              language: store.model.language,
              empty: _empty.EmptyChat,
              icon: _wrapper.settings.appIcon
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwidXBkYXRlIiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VFZmZlY3QiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJzY2FsZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZXhwb3J0cyIsIl9pY29ucyIsImZ1bGxDb250YWluZXIiLCJjbHMiLCJDb250YWluZXIiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwidW5kZWZpbmVkIiwic3JjIiwicGljdHVyZSIsImRhdGEiLCJlbnRpdHkiLCJBcHBJY29uIiwibW9kdWxlIiwiX21hcmtkb3duIiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsImNvbnRlbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZ2xvYmFsVGV4dHMiLCJhY3Rpdml0aWVzIiwiTWFya2Rvd24iLCJfdGFicyIsIl9tYXJrZG93bkNvbnRlbnQiLCJfb2JqZWN0aXZlcyIsIkFjdGl2aXR5Q29udGVudCIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsImdldE1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRyb2wiLCJzZXRDb250cm9sIiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJ0YWJzIiwib25DbGlja1RhYiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0YWIiLCJUYWIiLCJmb3JFYWNoIiwicHVzaCIsImtleSIsImV4cGFuZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiQ29udHJvbHMiLCJvYmplY3RpdmVzIiwiQWN0aXZpdHlPYmplY3RpdmVzIiwib3V0cHV0IiwiQWN0aXZpdHlBdWRpbyIsIkFwcEljb25CdXR0b24iLCJUYWJzIiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkNoYXRDb250cm9sIiwiYXNzaWdubWVudElkIiwic2V0VXBkYXRlZCIsIml0ZW1zIiwic2hvd0NvaW5zTW9kYWwiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJyZWFkeSIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiTW9kdWxlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsIkRlc2t0b3BDaGF0IiwiTW9iaWxlQ29udGVudCIsIkNvaW5zTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIl9mdWxsQ29udGFpbmVyIiwiX3NwbGl0Q29udGFpbmVyIiwiX21haW5Db250ZW50TGF5b3V0IiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiX2xpc3QiLCJfaXRlbSIsInRhc2siLCJMaXN0IiwiQWN0aXZpdHlPYmplY3RpdmUiLCJpdGVtIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvbWFya2Rvd24tY29udGVudC50c3giLCIvdHMvY2hhdC9jb250ZW50L2luZGV4LnRzeCIsIi90cy9jaGF0L2NvbnRyb2wudHN4IiwiL3RzL2NoYXQvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLGNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUVPO1VBQVUsU0FBVU0sSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBaUIsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sZ0JBQWdCLEdBQUU7WUFDdkQsTUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLE1BQU0sR0FBR0MsU0FBUyxDQUFDLEdBQUdiLE1BQUEsQ0FBQWMsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRXhDLElBQUFaLE1BQUEsQ0FBQWEsU0FBUyxFQUNSLENBQUNSLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLEVBQ2IsTUFB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Q0FBQzJFLElBQUksRUFBRXNELFVBQVU7Y0FBRTdCLE9BQU8sRUFBRWtGLEtBQUEsQ0FBQUc7WUFBaUIsRUFBSSxDQUN4RjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBak0sTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVWdNLGlCQUFpQkEsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDekMsT0FDQ2xNLE1BQUEsQ0FBQWMsT0FBQSxDQUFBTyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFrQixHQUNoQ25DLE1BQUEsQ0FBQWMsT0FBQSxDQUFBTyxhQUFBLGFBQUs2SyxJQUFJLENBQUN6RyxJQUFJLENBQU0sRUFDcEJ6RixNQUFBLENBQUFjLE9BQUEsQ0FBQU8sYUFBQSxlQUFPNkssSUFBSSxDQUFDQyxTQUFTLENBQVEsQ0FDeEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBbk0sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQW1NLFFBQUEsR0FBQW5NLE9BQUE7VUFHTyxXQUpQOztVQUVBO1VBRWlCLFNBQ1JvTSxRQUFRQSxDQUFDO1lBQUU3TCxLQUFLO1lBQUU4TDtVQUFHLENBQTRCO1lBQ3pELE1BQU1uRCxZQUFZLEdBQUdtRCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUNqRCxNQUFNN0wsTUFBTSxHQUFHMkwsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFFckMsT0FBT3hNLE1BQUEsQ0FBQWMsT0FBQSxDQUFBTyxhQUFBLENBQUMrSyxRQUFBLENBQUFsRCxXQUFXO2NBQUMxSSxLQUFLLEVBQUVBLEtBQUs7Y0FBRUcsTUFBTSxFQUFFQSxNQUFNO2NBQUV3SSxZQUFZLEVBQUVBO1lBQVksRUFBSTtVQUNqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBbkosTUFBQSxHQUFBQyxPQUFBO1VBY087VUFBVyxNQUFNOEosYUFBYSxHQUFBdEYsT0FBQSxDQUFBc0YsYUFBQSxHQUFHL0osTUFBQSxDQUFBYyxPQUFLLENBQUMyTCxhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMxRTtVQUFXLE1BQU0vTCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNVixNQUFBLENBQUFjLE9BQUssQ0FBQzRMLFVBQVUsQ0FBQzNDLGFBQWEsQ0FBQztVQUFDdEYsT0FBQSxDQUFBL0QsZ0JBQUEsR0FBQUEsZ0JBQUEiLCJpZ25vcmVMaXN0IjpbXX0=