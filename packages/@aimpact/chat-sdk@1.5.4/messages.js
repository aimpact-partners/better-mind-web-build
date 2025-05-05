System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/chat-sdk@1.5.4/components/icons", "pragmate-ui@1.0.0-beta.7/empty", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/chat-sdk@1.5.4/audio-player", "wavesurfer.js@7.9.4", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.5.4/chat/messages/item", "@aimpact/chat-sdk@1.5.4/widgets/playable", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/collapsible", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk154ChatMessagesItem) {
      dependency_10 = _aimpactChatSdk154ChatMessagesItem;
    }, function (_aimpactChatSdk154WidgetsPlayable) {
      dependency_11 = _aimpactChatSdk154WidgetsPlayable;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_13 = _pragmateUi100Beta7Collapsible;
    }, function (_beyondJsKernel0112Styles) {
      dependency_14 = _beyondJsKernel0112Styles;
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['pragmate-ui/empty', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/toast', dependency_6], ['@aimpact/chat-sdk/audio-player', dependency_7], ['wavesurfer.js', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/chat/messages/item', dependency_10], ['@aimpact/chat-sdk/widgets/playable', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
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
        hash: 2987180134,
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
          /*bundle */
          function Messages({
            chat,
            player,
            showAvatar,
            messages,
            texts,
            current,
            systemIcon,
            setUpdateScroll
          }) {
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            1;
            const totalMessages = messages.length;
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            const output = messages.map((message, i) => {
              return _react.default.createElement(_message.MessageItemContainer, {
                key: `message-${i}`,
                message: message,
                setUpdateScroll: setUpdateScroll
              });
            });
            const value = {
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
              value: value
            }, _react.default.createElement("div", {
              className: "messages__list"
            }, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 3852565568,
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
            const apply = currentMessage?.id === message?.id && processing;
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

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 342157538,
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
          function MessageItemContainer({
            message,
            setUpdateScroll
          }) {
            // const { fetching } = useMessage(message);
            const {
              showAvatar
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
            }), _react.default.createElement(_item.Message, {
              message: message,
              setUpdateScroll: setUpdateScroll
            }), _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement(_actions.MessageActions, {
              play: !message.audio,
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwiY2hhdCIsInBsYXllciIsInNob3dBdmF0YXIiLCJtZXNzYWdlcyIsInRleHRzIiwiY3VycmVudCIsInN5c3RlbUljb24iLCJzZXRVcGRhdGVTY3JvbGwiLCJjdXJyZW50TWVzc2FnZSIsInNldEN1cnJlbnRNZXNzYWdlIiwidXNlU3RhdGUiLCJ0b3RhbE1lc3NhZ2VzIiwibGVuZ3RoIiwiRW1wdHkiLCJ0ZXh0IiwiZW1wdHkiLCJvdXRwdXQiLCJtYXAiLCJtZXNzYWdlIiwiaSIsIk1lc3NhZ2VJdGVtQ29udGFpbmVyIiwia2V5IiwidmFsdWUiLCJQcm92aWRlciIsIl9ob29rcyIsIl90b2FzdCIsIk1lc3NhZ2VBY3Rpb25zIiwibWVzc2FnZVRva2VucyIsInBsYXkiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImFjdGlvbiIsInNldEFjdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwidXNlQmluZGVyIiwic3BlYWtpbmciLCJvbkNoYW5nZSIsInRleHRJZCIsImlkIiwib25QbGF5IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3NpdGlvblRvQ3V0IiwicGFyc2VkVGV4dCIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25QYXVzZSIsImxpc3RlbiIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhcHBseSIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJJY29uQnV0dG9uIiwiUGxheWVyIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXVkaW8iLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHVyYXRpb24iLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiY29udHJvbHMiLCJwcmVsb2FkIiwidHlwZSIsIl9pbWFnZSIsIlByb2ZpbGVJY29uIiwicm9sZSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInVzZXIiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIkltYWdlIiwiYWx0Iiwib25FcnJvciIsIkZyYWdtZW50IiwiX2F1ZGlvUGxheWVyIiwiTWVzc2FnZVRleHQiLCJwbGF5YWJsZSIsImZldGNoaW5nIiwiYXV0b3BsYXkiLCJyZW1vdmVIaWdobGlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZXRUZXh0Iiwib25DbGlja1dvcmQiLCJjYW5CZVBsYXllZCIsImF1dG9wbGF5VmFsdWUiLCJfaXRlbSIsIl9wbGF5YWJsZSIsIl9hY3Rpb25zIiwiX3Byb2ZpbGVJY29uIiwiX3N5c3RlbUFjdGlvbnMiLCJjbHMiLCJ1c2FnZSIsInRvdGFsVG9rZW5zIiwiQUNUSU9OUyIsInBsYXlhYmxlQ29udGVudCIsImFjdGlvbnMiLCJwYXJzZVRleHQiLCJTeXN0ZW1BY3Rpb25zIiwiTWVzc2FnZSIsIl9tYXJrZG93biIsIl9jb2xsYXBzaWJsZSIsIkFjdGlvbiIsImxhc3QiLCJkYXRhIiwibWFyayIsInVzZU1hcmtlZCIsInN5c3RlbUFjdGlvbnMiLCJhY3Rpb25zVGV4dHMiLCJDb250YWluZXIiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYXR0cnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm1hdGNoZXMiLCJpdGVtIiwicGFyYWdyYXBoIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJyZXNwb25zZSIsInRyYW5zY3JpcHRpb24iLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwicGFyYW1zIiwiZnVuY3Rpb25zIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9hY3Rpb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsInVzZU1lc3NhZ2UiLCJzZXRGZXRjaGluZyIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3VzZS1tZXNzYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFB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