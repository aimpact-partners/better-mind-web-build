System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.0-beta.7/empty", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/chat-sdk@1.5.4/audio-player", "wavesurfer.js@7.9.4", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/shared/hooks", "@aimpact/chat-sdk@1.5.4/chat/messages/item", "@aimpact/chat-sdk@1.5.4/widgets/playable", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/collapsible", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_aimpactChatSdk154ComponentsIcons) {
      dependency_3 = _aimpactChatSdk154ComponentsIcons;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_4 = _pragmateUi100Beta7Empty;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_5 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_6 = _pragmateUi100Beta7Toast;
    }, function (_aimpactChatSdk154AudioPlayer) {
      dependency_7 = _aimpactChatSdk154AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_8 = _wavesurferJs;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_10 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk154SharedHooks) {
      dependency_11 = _aimpactChatSdk154SharedHooks;
    }, function (_aimpactChatSdk154ChatMessagesItem) {
      dependency_12 = _aimpactChatSdk154ChatMessagesItem;
    }, function (_aimpactChatSdk154WidgetsPlayable) {
      dependency_13 = _aimpactChatSdk154WidgetsPlayable;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_15 = _pragmateUi100Beta7Collapsible;
    }, function (_beyondJsKernel0112Styles) {
      dependency_16 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/audio-player', dependency_7], ['wavesurfer.js', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/alert', dependency_10], ['@aimpact/chat-sdk/shared/hooks', dependency_11], ['@aimpact/chat-sdk/chat/messages/item', dependency_12], ['@aimpact/chat-sdk/widgets/playable', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.4/messages');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 373385579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat-sdk/components/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: "message answering"
            }, _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: ""
            }, _react.default.createElement("span", {
              className: "dot"
            }), _react.default.createElement("span", {
              className: "dot"
            }), _react.default.createElement("span", {
              className: "dot"
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1715462227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessagesContext = exports.ChatMessagesContext = void 0;
          var _react = require("react");
          const ChatMessagesContext = exports.ChatMessagesContext = _react.default.createContext({});
          const useChatMessagesContext = () => _react.default.useContext(ChatMessagesContext);
          exports.useChatMessagesContext = useChatMessagesContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3659049754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _message = require("./message");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          /*bundle*/
          function Messages(props) {
            const {
              chat,
              player,
              showAvatar,
              messages,
              texts,
              current,
              systemIcon,
              setUpdateScroll
            } = props;
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            const totalMessages = messages.length;
            // Show empty state if there are no messages
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            // Render each message item
            const messageItems = messages.map((message, i) => _react.default.createElement(_message.MessageItemContainer, {
              key: `message-${i}`,
              message: message,
              setUpdateScroll: setUpdateScroll
            }));
            // Context value for child components
            const contextValue = {
              chat,
              player,
              showAvatar,
              messages,
              texts,
              currentMessage,
              setCurrentMessage,
              systemIcon,
              setUpdateScroll
            };
            return _react.default.createElement(_context.ChatMessagesContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "messages__list"
            }, messageItems));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 113083620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          function MessageActions({
            text,
            message,
            messageTokens,
            play = true
          }) {
            const {
              player,
              currentMessage,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const [content, setContent] = _react.default.useState(message.content ?? '');
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            (0, _hooks.useBinder)([player], () => setProcessing(player.speaking));
            (0, _hooks.useBinder)([message], () => {
              setContent(message.content ?? '');
            });
            const onChange = () => {
              if (player.textId !== message.id) return;
              setProcessing(false);
              setAction('stop');
            };
            (0, _hooks.useBinder)([player], onChange, 'on.finish');
            const onPlay = async event => {
              event.stopPropagation();
              setAction('play');
              setCurrentMessage(content);
              player.positionToCut = 0;
              player.textId = message.id;
              const parsedText = content.replaceAll(/[-\\*_#]+/g, '').trim();
              await player.play(parsedText, message.id);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const copyMessage = async () => {
              await globalThis?.navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const icon = action === 'play' ? 'stop' : 'play';
            const onClick = action === 'play' ? onPause : onPlay;
            if (message.streaming) return null;
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "audio__actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: "copy"
            }), play && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": "api",
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
              className: "tokens overline"
            }, messageTokens, " TOKENS"));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/audio-player
      *************************************************/

      ims.set('./message/components/audio-player', {
        hash: 1138068273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = Player;
          var _react = require("react");
          function Player({
            message
          }) {
            const src = URL.createObjectURL(message.audio);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/profile-icon
      *************************************************/

      ims.set('./message/components/profile-icon', {
        hash: 2429896100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const {
              systemIcon,
              chat
            } = (0, _context.useChatMessagesContext)();
            const userProps = chat.user;
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? userProps.photoURL : systemIcon;
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement(_image.Image, {
              alt: "agent",
              src: src,
              onError: handleLoadError
            }) : _react.default.createElement(_react.default.Fragment, null, role === 'user' ? _react.default.createElement(_icons.Icon, {
              icon: "user"
            }) : _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: systemIcon,
              onError: handleLoadError
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/components/text
      *****************************************/

      ims.set('./message/components/text', {
        hash: 1130764016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../../context");
          var _audioPlayer = require("./audio-player");
          function MessageText({
            message,
            playable,
            fetching,
            autoplay = false
          }) {
            const ref = _react.default.useRef(null);
            const {
              texts,
              player,
              currentMessage,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            const [text, setText] = _react.default.useState(message.content ?? '');
            (0, _hooks.useBinder)([message], () => {
              setText(message.content ?? '');
            }, 'change');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => setCurrentMessage(message);
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: "message-text__container p2",
              ref: ref
            }, _react.default.createElement("div", null, text), message.audio && _react.default.createElement(_audioPlayer.Player, {
              message: message
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/errors-renderer
      *****************************************/

      ims.set('./message/errors-renderer', {
        hash: 795451856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _context = require("../context");
          const ErrorsRenderer = ({
            message
          }) => {
            (0, _hooks.useStore)(message, ['error.changed']);
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            if (!message.error) return null;
            const error = message.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.Alert, {
              type: "error"
            }, texts.errors.default));
          };
          exports.ErrorsRenderer = ErrorsRenderer;
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 2496720538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageItemContainer = MessageItemContainer;
          var _item = require("@aimpact/chat-sdk/chat/messages/item");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _react = require("react");
          var _context = require("../context");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _systemActions = require("./system-actions");
          var _errorsRenderer = require("./errors-renderer");
          function MessageItemContainer({
            message,
            setUpdateScroll
          }) {
            // const { fetching } = useMessage(message);
            const {
              showAvatar,
              texts
            } = (0, _context.useChatMessagesContext)();
            const cls = `message__container message__container--${message.role}${showAvatar ? `has-avatar` : ''}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, showAvatar && _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            }), _react.default.createElement("section", {
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions
            }), !message.error && _react.default.createElement(_item.Message, {
              message: message,
              setUpdateScroll: setUpdateScroll,
              texts: texts.message
            }), _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement(_actions.MessageActions, {
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })), _react.default.createElement(_errorsRenderer.ErrorsRenderer, {
              message: message
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./message/system-actions/action
      ***********************************************/

      ims.set('./message/system-actions/action', {
        hash: 3020040988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Action = Action;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          function Action({
            last = false,
            texts,
            data: {
              type,
              data
            }
          }) {
            const mark = _markdown.useMarked;
            const {
              systemActions: actionsTexts
            } = texts;
            const Container = ({
              title,
              children
            }) => {
              const attrs = {
                className: `message-action ${type}${last ? ' last-action' : ''}`
              };
              const Container = last ? _collapsible.CollapsibleHeader : _react.default.Fragment;
              return _react.default.createElement("div", {
                ...attrs
              }, _react.default.createElement(Container, null, _react.default.createElement("header", null, _react.default.createElement("h4", null, title)), _react.default.createElement("section", {
                className: "detail__content"
              }, children)));
            };
            if (type === 'fetching-tool-data') {
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              });
            }
            if (type === 'kb-response') {
              const output = data.matches.map(item => _react.default.createElement("li", {
                key: item.id
              }, item.paragraph));
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              }, _react.default.createElement("ul", null, output));
            }
            if (type === 'kb-processed-response') {
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              }, _react.default.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: mark(data.response)
                }
              }));
            }
            if (type === 'transcription') {
              return _react.default.createElement(Container, {
                title: actionsTexts.transcription
              }, _react.default.createElement("p", null, data.transcription));
            }
            if (type === 'function' && data.name === 'kb') {
              try {
                const {
                  text
                } = JSON.parse(data.params);
                return _react.default.createElement(Container, {
                  title: actionsTexts.functions[data.name]
                }, _react.default.createElement("p", null, text));
              } catch (e) {
                console.error(e);
              }
            }
            return _react.default.createElement("div", {
              className: `message-action ${type}`
            }, type);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./message/system-actions/index
      **********************************************/

      ims.set('./message/system-actions/index', {
        hash: 1485603025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemActions = SystemActions;
          var _react = require("react");
          var _action = require("./action");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          function SystemActions({
            actions
          }) {
            if (!actions?.length) return null;
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: "message-actions__container"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true,
              texts: texts
            }), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: "actions__log"
            }, actions.map((action, i) => _react.default.createElement(_action.Action, {
              texts: texts,
              key: `action-${i}`,
              data: action
            }))))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./message/use-message
      *************************************/

      ims.set('./message/use-message', {
        hash: 4237060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMessage = useMessage;
          var _react = require("react");
          var _context = require("../context");
          function useMessage(message) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            const {
              chat
            } = (0, _context.useChatMessagesContext)();
            _react.default.useEffect(() => {
              const onUpdate = () => {
                setFetching(true);
                setContent(message.content);
              };
              const onEnd = () => {
                setContent(message.content);
                setFetching(false);
              };
              chat.on(`message.${message.id}.updated`, onUpdate);
              chat.on(`message.${message.id}.ended`, onEnd);
              return () => {
                chat.off(`message.${message.id}.updated`, onUpdate);
                chat.off(`message.${message.id}.ended`, onEnd);
              };
            }, []);
            return {
              fetching,
              setFetching,
              content,
              setContent
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Messages",
        "name": "Messages"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./index').Messages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJ1c2VCaW5kZXIiLCJzcGVha2luZyIsIm9uQ2hhbmdlIiwidGV4dElkIiwiaWQiLCJvblBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJJY29uQnV0dG9uIiwiUGxheWVyIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXVkaW8iLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwidHlwZSIsIl9pbWFnZSIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInVzZXIiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIkltYWdlIiwiYWx0Iiwib25FcnJvciIsIkZyYWdtZW50IiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImZldGNoaW5nIiwiYXV0b3BsYXkiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRUZXh0Iiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJfYWxlcnQiLCJFcnJvcnNSZW5kZXJlciIsInVzZVN0b3JlIiwiZXJyb3IiLCJBbGVydCIsImVycm9ycyIsIl9pdGVtIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIl9lcnJvcnNSZW5kZXJlciIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwiYWN0aW9ucyIsInBhcnNlVGV4dCIsIlN5c3RlbUFjdGlvbnMiLCJNZXNzYWdlIiwiX21hcmtkb3duIiwiX2NvbGxhcHNpYmxlIiwiQWN0aW9uIiwibGFzdCIsImRhdGEiLCJtYXJrIiwidXNlTWFya2VkIiwic3lzdGVtQWN0aW9ucyIsImFjdGlvbnNUZXh0cyIsIkNvbnRhaW5lciIsInRpdGxlIiwiY2hpbGRyZW4iLCJhdHRycyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib3V0cHV0IiwibWF0Y2hlcyIsIml0ZW0iLCJwYXJhZ3JhcGgiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInJlc3BvbnNlIiwidHJhbnNjcmlwdGlvbiIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJwYXJhbXMiLCJmdW5jdGlvbnMiLCJlIiwiY29uc29sZSIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsInVzZU1lc3NhZ2UiLCJzZXRGZXRjaGluZyIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFB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