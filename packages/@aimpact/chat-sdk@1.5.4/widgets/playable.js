System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "prismjs@1.30.0", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/widgets/markdown"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, PlayerButton, parseText, Playable, __beyond_pkg, hmr;
  _export({
    PlayerButton: void 0,
    parseText: void 0,
    Playable: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_prismjs) {
      dependency_3 = _prismjs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_4 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_5 = _aimpactChatSdk154WidgetsMarkdown;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/widgets/playable"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['prismjs', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/chat-sdk/widgets/markdown', dependency_5]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./button/PlayerButton
      *************************************/
      ims.set('./button/PlayerButton', {
        hash: 2994120359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayerButton = PlayerButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function PlayerButton(props) {
            const {
              player,
              id,
              content
            } = props;
            const [action, setAction] = _react.default.useState('stop');
            const [processing, setProcessing] = _react.default.useState(false);
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              player.positionToCut = 0;
              await player.play(content, id);
            };
            const onPause = async ({
              listen
            }) => {
              await player.stop();
              setAction('stop');
              setProcessing(false);
            };
            const apply = id === player.id;
            const icon = apply || action === 'play' ? 'stop' : 'play';
            const onClick = apply || action === 'play' ? onPause : onPlay;
            return _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": 'api',
              icon: icon,
              className: 'lg'
            });
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./code/clipboard
      ********************************/

      ims.set('./code/clipboard', {
        hash: 235325129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Clipboard({
            text,
            message
          }) {
            const ref = _react.default.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                globalThis.setTimeout(() => {
                  span.classList.add('hide');
                  globalThis.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.error('some error', e);
              }
            };
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'copy'
            }), _react.default.createElement("span", {
              className: 'action-copied'
            }, "Copied")));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./code/code
      ***************************/

      ims.set('./code/code', {
        hash: 700390424,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var _react = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("pre", null, _react.default.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && _react.default.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./parse-text
      ****************************/

      ims.set('./parse-text', {
        hash: 3366124274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.parseText = void 0;
          function validateTools(content) {
            if (typeof content !== 'string') {
              console.warn('Input must be a string.', content);
              return;
            }
            const regex = /😸(.*?)🖋️/g;
            let outputArray = [];
            let previousIndex = 0;
            for (const match of content.matchAll(regex)) {
              const [fullMatch, innerContent] = match;
              // Push preceding text as 'string'
              const precedingText = content.slice(previousIndex, match.index);
              if (precedingText) {
                outputArray.push({
                  type: 'string',
                  value: precedingText
                });
                continue;
              }
              // Push matched text as 'tool'
              try {
                const {
                  type,
                  data
                } = JSON.parse(innerContent);
                outputArray.push({
                  type,
                  data
                });
                previousIndex = match.index + fullMatch.length;
              } catch (e) {
                console.error(e);
              }
            } // end for;
            // Push remaining text as 'string'
            const remainingText = content.slice(previousIndex);
            if (remainingText) {
              outputArray.push({
                type: 'string',
                value: remainingText
              });
            }
            return outputArray;
          }
          const cache = {};
          /**
           *
           * @param key
           * @param content
           * @param ACTIONS
           * @returns
           */
          /*bundle*/
          const parseText = (key, content, ACTIONS) => {
            if (!content) return [[], ''];
            if (typeof content !== 'string') {
              console.warn('Input must be a string.', content);
              return [[], ''];
            }
            if (key in cache && cache[key][1]?.length === content.length) {
              return cache[key];
            }
            if (!content) {
              cache[key] = [[], ''];
              return [[], ''];
            }
            const initial = validateTools(content);
            let elements = [];
            const actions = [];
            initial.forEach(item => {
              if (ACTIONS.includes(item.type)) {
                actions.push(item);
                return;
              }
              const content = item.value;
              const result = content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => ({
                content: block,
                type: block.startsWith('```') || block.startsWith('`') ? 'code' : 'text'
              }));
              elements = [...elements, ...result];
            });
            const playable = elements.filter(item => item.type === 'text').map(item => item.content).join(' ');
            cache[key] = [elements, playable, actions];
            return cache[key];
          };
          exports.parseText = parseText;
        }
      });

      /********************************
      INTERNAL MODULE: ./playable/index
      ********************************/

      ims.set('./playable/index', {
        hash: 1135158210,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playable = void 0;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _useBoundary = require("../use-boundary");
          var _parseText = require("../parse-text");
          var _item = require("./item");
          function PlayableComponent({
            className,
            id,
            playable = true,
            content,
            player,
            onClickWord
          }) {
            let autoplay = false;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [blocks, playableContent] = (0, _parseText.parseText)(id, content, ACTIONS);
            const {
              ref,
              text,
              removeHighlight
            } = (0, _useBoundary.useBoundary)(id, player, playableContent);
            _react.default.useEffect(() => {
              if (!playable) return;
              const playableContent = blocks.filter(item => item.type === 'code');
              if (autoplay) player.play(playableContent.map(item => item.content).join(' '));
            }, [autoplay, playable]);
            if (!player) {
              throw new Error('Player is not defined');
            }
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const finalBlocks = blocks.filter(item => !ACTIONS.includes(item.type));
            const output = (() => {
              const response = finalBlocks.map((block, i) => _react.default.createElement(_item.PlayableItem, {
                key: `content-${i}`,
                onClickWord: onClickWord,
                text: content,
                block: block,
                index: i,
                id: id,
                playable: playable,
                player: player
              }));
              return response;
            })();
            const cls = `playable-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, output);
          }
          /* bundle */
          const Playable = exports.Playable = _react.default.memo(PlayableComponent);
        }
      });

      /****************************************************
      INTERNAL MODULE: ./playable/interfaces/playable-props
      ****************************************************/

      ims.set('./playable/interfaces/playable-props', {
        hash: 4182143472,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./playable/item
      *******************************/

      ims.set('./playable/item', {
        hash: 3959530541,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayableItem = void 0;
          var _react = require("react");
          var _code = require("../code/code");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /**
           * A  text message can contains more than one block of text,
           * the "block" value represents the number of the block, usually the value
           * is 0 at least you have a message with code blocks.
           *
           */
          const PlayableItem = function ({
            block,
            text,
            id,
            index,
            playable,
            player,
            onClickWord
          }) {
            const marked = (0, _markdown.useMarked)(text);
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const word = event.target.dataset.word;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(word).join(' ');
                player.positionToCut = parseInt(word);
                player.textId = id;
                //@ts-ignore
                player.play(textToPlay.replaceAll(/[-\\*_#]+/g, '').trim()); // remove markdown characters to avoid reading them with the text-to-speech engine
                if (onClickWord) onClickWord();
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };
            const attrs = playable ? {
              onClick
            } : {};
            if (block.type === 'code') {
              return _react.default.createElement(_code.Code, {
                key: `code-${index}`
              }, block.content.replaceAll('`', ''));
            }
            const createSpan = (word, i) => `<span data-word="${i}" data-index="${i}${index}" class="word">${word}</span>`;
            function wrapTextWithSpan(htmlString, index) {
              return htmlString.replace(/([^<]+)|(<[^>]+>)/g, (match, text) => {
                // If the match is text (not an HTML tag)
                if (!text) return match;
                // Split the text into words and wrap each word with a span
                return text.split(/\s+/).map(word => {
                  // Ignore special characters or empty strings
                  if (!word.trim() || word.match(/[\.,¿¡!\?;:\-\n\t]/)) return word;
                  return createSpan(word, index++);
                }).join(' ');
              });
            }
            const markedText = marked.output;
            //@ts-ignore
            const content = markedText.split(' ').map(wrapTextWithSpan).join(' ');
            return (
              //@ts-ignore
              _react.default.createElement(_markdown.Markdown, {
                key: `content-${index}`,
                "data-block": index,
                className: "message-text__container",
                ...attrs
              }, content)
            );
          };
          exports.PlayableItem = PlayableItem;
        }
      });

      /******************************
      INTERNAL MODULE: ./use-boundary
      ******************************/

      ims.set('./use-boundary', {
        hash: 1614924153,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBoundary = useBoundary;
          var _react = require("react");
          function useBoundary(id, player, content) {
            const ref = _react.default.useRef(null);
            const [text, setText] = _react.default.useState(content ?? '');
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            _react.default.useEffect(() => {
              /**
               * todo: @jircdev content replacemennt is being done here and in item.tsx
               */
              content = content.replaceAll(/[-\\*_#\n\t]+/g, '').trim();
              const onBoundary = () => {
                if (id !== player.textId) return;
                const currentIndex = player.currentWord;
                const block = ref.current.querySelector('.message-text__container')?.dataset.block;
                let finalPosition = `0`;
                if (player.positionToCut > 0) {
                  const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                  finalPosition = `${player.positionToCut + segmentToCut}${block}`;
                  removeHighlight();
                  if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) {
                    return;
                  }
                  ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                  return;
                }
                const segment = content.slice(0, currentIndex);
                const position = segment.split(' ').length - 1;
                finalPosition = `${position}${block}`;
                removeHighlight();
                ref.current.querySelector(`[data-index="${finalPosition}"]`)?.classList.add('highlight');
              };
              player.on('boundary', onBoundary);
              return () => {
                player.off('boundary', onBoundary);
              };
            }, [content]);
            return {
              ref,
              text: content,
              removeHighlight
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button/PlayerButton",
        "from": "PlayerButton",
        "name": "PlayerButton"
      }, {
        "im": "./parse-text",
        "from": "parseText",
        "name": "parseText"
      }, {
        "im": "./playable/index",
        "from": "Playable",
        "name": "Playable"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PlayerButton') && _export("PlayerButton", PlayerButton = require ? require('./button/PlayerButton').PlayerButton : value);
        (require || prop === 'parseText') && _export("parseText", parseText = require ? require('./parse-text').parseText : value);
        (require || prop === 'Playable') && _export("Playable", Playable = require ? require('./playable/index').Playable : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiUGxheWVyQnV0dG9uIiwicHJvcHMiLCJwbGF5ZXIiLCJpZCIsImNvbnRlbnQiLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJjbGFzc05hbWUiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJQcmlzbSIsIl9jbGlwYm9hcmQiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJqYXZhc2NyaXB0IiwiY2xzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJ2YWxpZGF0ZVRvb2xzIiwid2FybiIsInJlZ2V4Iiwib3V0cHV0QXJyYXkiLCJwcmV2aW91c0luZGV4IiwibWF0Y2giLCJtYXRjaEFsbCIsImZ1bGxNYXRjaCIsImlubmVyQ29udGVudCIsInByZWNlZGluZ1RleHQiLCJzbGljZSIsImluZGV4IiwicHVzaCIsInR5cGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwicmVtYWluaW5nVGV4dCIsImNhY2hlIiwicGFyc2VUZXh0Iiwia2V5IiwiQUNUSU9OUyIsImluaXRpYWwiLCJlbGVtZW50cyIsImFjdGlvbnMiLCJmb3JFYWNoIiwiaXRlbSIsImluY2x1ZGVzIiwicmVzdWx0Iiwic3BsaXQiLCJmaWx0ZXIiLCJibG9jayIsInRyaW0iLCJtYXAiLCJzdGFydHNXaXRoIiwicGxheWFibGUiLCJqb2luIiwiZXhwb3J0cyIsIl9ob29rcyIsIl91c2VCb3VuZGFyeSIsIl9wYXJzZVRleHQiLCJfaXRlbSIsIlBsYXlhYmxlQ29tcG9uZW50Iiwib25DbGlja1dvcmQiLCJhdXRvcGxheSIsImJsb2NrcyIsInBsYXlhYmxlQ29udGVudCIsInJlbW92ZUhpZ2hsaWdodCIsInVzZUJvdW5kYXJ5IiwidXNlRWZmZWN0IiwiRXJyb3IiLCJ1c2VCaW5kZXIiLCJmaW5hbEJsb2NrcyIsIm91dHB1dCIsInJlc3BvbnNlIiwiaSIsIlBsYXlhYmxlSXRlbSIsIlBsYXlhYmxlIiwibWVtbyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NvZGUiLCJfbWFya2Rvd24iLCJtYXJrZWQiLCJ1c2VNYXJrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwid29yZCIsIndvcmRzQXJyYXkiLCJ0ZXh0VG9QbGF5IiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJyZXBsYWNlQWxsIiwiYXR0cnMiLCJjcmVhdGVTcGFuIiwid3JhcFRleHRXaXRoU3BhbiIsImh0bWxTdHJpbmciLCJyZXBsYWNlIiwibWFya2VkVGV4dCIsIk1hcmtkb3duIiwic2V0VGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50Iiwib25Cb3VuZGFyeSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRXb3JkIiwiZmluYWxQb3NpdGlvbiIsInNlZ21lbnRUb0N1dCIsInNlZ21lbnQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsIi90cy9jb2RlL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS9jb2RlLnRzeCIsIi90cy9wYXJzZS10ZXh0LnRzIiwiL3RzL3BsYXlhYmxlL2luZGV4LnRzeCIsIi9wbGF5YWJsZS1wcm9wcy50cyIsIi90cy9wbGF5YWJsZS9pdGVtLnRzeCIsIi90cy91c2UtYm91bmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFXLFNBQVVFLFlBQVlBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLEVBQUU7Y0FBRUM7WUFBTyxDQUFFLEdBQUdILEtBQUs7WUFDckMsTUFBTSxDQUFDSSxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1HLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DTixTQUFTLENBQUMsTUFBTSxDQUFDO2NBQ2pCSixNQUFNLENBQUNXLGFBQWEsR0FBRyxDQUFDO2NBQ3hCLE1BQU1YLE1BQU0sQ0FBQ1ksSUFBSSxDQUFDVixPQUFPLEVBQUVELEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBQ0QsTUFBTVksT0FB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