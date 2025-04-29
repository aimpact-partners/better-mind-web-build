System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.12/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/core", "driver.js@1.3.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
  _export({
    ActivityAudio: void 0,
    ChatPreload: void 0,
    ActivityHeader: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    AnimatedContainer: void 0,
    AudioPlayer: void 0,
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    Chip: void 0,
    ContentEditable: void 0,
    Textarea: void 0,
    CoinsModal: void 0,
    OwnerImage: void 0,
    RequestCreditsForm: void 0,
    EmptyCard: void 0,
    EntityImageType: void 0,
    EntityImage: void 0,
    ErrorRenderer: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    useConfetti: void 0,
    useTextsCallback: void 0,
    AppLoader: void 0,
    PreloadScreen: void 0,
    PageLoader: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
    RadioButton: void 0,
    RadioGroup: void 0,
    SkeletonText: void 0,
    ThemeSwitch: void 0,
    DriverTourContainer: void 0,
    TourStep: void 0,
    useDriverTour: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_4 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_aimpactChatSdk154Session) {
      dependency_12 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_13 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel0112Texts) {
      dependency_16 = _beyondJsKernel0112Texts;
    }, function (_pragmateUi100Beta7Spinner) {
      dependency_17 = _pragmateUi100Beta7Spinner;
    }, function (_beyondJsKernel0112Routing) {
      dependency_18 = _beyondJsKernel0112Routing;
    }, function (_beyondJsWidgets112Render) {
      dependency_19 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Core) {
      dependency_20 = _beyondJsKernel0112Core;
    }, function (_driverJs) {
      dependency_21 = _driverJs;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/form', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/base', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/widgets/render', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['driver.js', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/ui');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/audio
      **********************************/
      ims.set('./activities/audio', {
        hash: 2249841843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAudio = ActivityAudio;
          var _react = require("react");
          /*bundle*/
          function ActivityAudio({
            src
          }) {
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/chat-preload
      *****************************************/

      ims.set('./activities/chat-preload', {
        hash: 2289740302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatPreload = ChatPreload;
          var _react = require("react");
          var _empty = require("../empty");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function ChatPreload({
            onClick
          }) {
            return _react.default.createElement("div", {
              className: "chat__preload-container"
            }, _react.default.createElement(_empty.EmptyCard, {
              className: "empty-section__container"
            }), _react.default.createElement("div", {
              className: "input-container ",
              onClick: onClick
            }, _react.default.createElement("form", {
              className: "chat-input-form"
            }, _react.default.createElement(_form.Textarea, {
              disabled: true,
              className: "input__textarea"
            }), _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "send",
              disabled: true
            })))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./activities/header
      ***********************************/

      ims.set('./activities/header', {
        hash: 2647478853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          /*bundle*/
          function ActivityHeader({
            type,
            title,
            icon,
            children
          }) {
            const cls = `activity-header activity-header--${type}`;
            return _react.default.createElement("div", {
              className: "header-container"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("span", {
              className: "header__title"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title)), children));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 2003207470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./animation-container
      *************************************/

      ims.set('./animation-container', {
        hash: 1181620448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function AnimatedContainer({
            className,
            children,
            as = 'span',
            ...props
          }) {
            const Component = (0, _framerMotion.motion)(as);
            const attrs = {
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              initial: {
                opacity: 0
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              },
              ...props
            };
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              ...attrs
            }, children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./audio-player
      ******************************/

      ims.set('./audio-player', {
        hash: 1039808834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src,
            url
          }) {
            if (!src && !url) {
              console.warn('not audio to process');
              return null;
            }
            src = url ?? URL.createObjectURL(src);
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
              type: "audio/mpeg",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./battery
      *************************/

      ims.set('./battery', {
        hash: 1193312247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Battery = Battery;
          var _react = require("react");
          /*bundle*/
          function Battery({
            percent = 20
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              ref.current.style.width = `${percent}%`;
            }, [percent]);
            const cls = `percentage ${percent < 20 ? 'low' : percent < 60 ? 'medium' : 'high'}`;
            return _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: cls
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./card/content
      ******************************/

      ims.set('./card/content', {
        hash: 822507004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardContent = CardContent;
          var _react = require("react");
          /*bundle */
          function CardContent({
            children,
            className,
            option = 'row',
            simple
          }) {
            const cls = `card__content display-${option} ${className && ` ${className}`} ${simple && ' is-simple'}`;
            return _react.default.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./card/footer
      *****************************/

      ims.set('./card/footer', {
        hash: 1147762825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardFooter = CardFooter;
          var _react = require("react");
          /*bundle */
          function CardFooter({
            children,
            className,
            simple
          }) {
            const cls = `card__footer ${className && ` ${className}`} ${simple && ' is-simple'}`;
            return _react.default.createElement("footer", {
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/image
      ****************************/

      ims.set('./card/image', {
        hash: 3826144859,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardImage = CardImage;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function CardImage({
            src,
            className,
            alt,
            children
          }) {
            const cls = `card__top ${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/index
      ****************************/

      ims.set('./card/index', {
        hash: 1698619199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _entityImage = require("../entity-image");
          /*bundle*/
          function Card({
            link,
            data: item,
            children,
            disabled,
            simple,
            className,
            type
          }) {
            const Container = !disabled && link ? _components.Link : 'span';
            const attrs = disabled || [undefined, null, ''].includes(link) ? {} : {
              href: link,
              className: 'unstyled'
            };
            let clsCard = `card ${className}`;
            if (disabled) clsCard += ' is-disabled';
            if (simple) clsCard += ' is-simple';
            const onClick = () => {
              globalThis?.sessionStorage.setItem('navigation.view', 'true');
            };
            return _react.default.createElement(Container, {
              ...attrs,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsCard
            }, item && _react.default.createElement(_entityImage.EntityImage, {
              className: "card__top",
              src: item.picture,
              alt: item.title,
              type: type
            }), children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./chip
      **********************/

      ims.set('./chip', {
        hash: 3681402713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          /*bundle*/
          function Chip({
            variant,
            className,
            children
          }) {
            const chipBaseClass = 'chip';
            const variantClass = variant ? `chip--${variant}` : '';
            const combinedClass = [chipBaseClass, variantClass, className].filter(Boolean).join(' ');
            return _react.default.createElement("div", {
              className: combinedClass
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 2108788465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = ContentEditable;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useContainer = require("./use-container");
          var _textarea = require("./textarea");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /*bundle*/
          function ContentEditable(props) {
            const {
              onSave,
              selector = 'div',
              as = 'div',
              className,
              content,
              type = 'input',
              placeholder,
              lineBreak = true,
              editable = true,
              name
            } = props;
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const [original, setOriginal] = _react.default.useState(content);
            const Control = as || selector;
            const {
              ref: contentRef,
              value,
              setValue
            } = (0, _useContainer.useClickContainer)(content, placeholder, isEditable);
            if (!editable) {
              return _react.default.createElement(Control, {
                ref: contentRef
              }, value);
            }
            if (isEditable && type === 'textarea') return _react.default.createElement(_textarea.Textarea, {
              original: original,
              setOriginal: setOriginal,
              setEditable: setIsEditable,
              ...props,
              value: value
            });
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              if (!isEditable) {
                setTimeout(() => {
                  const el = contentRef.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? 'pui-editable-selector' : '';
            const attrs = {
              onClick: !isEditable ? toggleEdit : undefined
            };
            const handlePaste = e => {
              e.preventDefault();
              const text = e.clipboardData.getData('text/plain');
              document.execCommand('insertText', false, text);
            };
            const handleKeyDown = e => {
              if (lineBreak && e.key === 'Enter') {
                e.preventDefault();
                // Optionally, trigger save or another action when Enter is pressed
                // handleSave();
              }
            };
            const onBlur = async event => {
              event.stopPropagation();
              const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setIsEditable(false);
              if (content === original) return;
              const data = {
                name,
                value: content
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(content);
              await onSave(specs);
            };
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: controlCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true,
              onPaste: isEditable ? handlePaste : undefined,
              onKeyDown: isEditable ? handleKeyDown : undefined
            }, isEditable ? value : _react.default.createElement(_markdown.Markdown, {
              content: value
            })), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./content-editable/textarea
      *******************************************/

      ims.set('./content-editable/textarea', {
        hash: 1256781792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function Textarea({
            onSave,
            className,
            content,
            name,
            editable,
            original,
            setOriginal,
            setEditable
          }) {
            const ref = _react.default.useRef(null);
            // const { ref: contentRef, value } = useClickContainer(content, placeholder, isEditable);
            const toggleEdit = () => {
              setEditable(!editable);
              if (!editable) {
                setTimeout(() => {
                  const el = ref.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable pui-content-editable--textarea${className ? ` ${className}` : ''}`;
            const [value, setValue] = _react.default.useState(content);
            const attrs = {};
            _react.default.useEffect(() => {
              setTimeout(() => {
                const textarea = ref.current?.querySelector('textarea');
                if (textarea) {
                  textarea.focus();
                  const length = textarea.value.length;
                  textarea.setSelectionRange(length, length); // Coloca el cursor al final del texto
                }
              }, 0);
            }, []);
            const onBlur = async event => {
              event.stopPropagation();
              // const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setEditable(false);
              if (value === original) return;
              const data = {
                name,
                value
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(value);
              await onSave(specs);
            };
            const onChange = e => {
              setValue(e.target.value);
            };
            return _react.default.createElement("div", {
              ref: ref,
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(_form.Textarea, {
              name: name,
              onChange: onChange,
              value: value
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/types
      ****************************************/

      ims.set('./content-editable/types', {
        hash: 2246595003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./content-editable/use-container
      ************************************************/

      ims.set('./content-editable/use-container', {
        hash: 1642257852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer(content, placeholder, isEditable = false) {
            const ref = _react.default.useRef(null);
            const [isOutSide] = _react.default.useState(false);
            const [value, setValue] = _react.default.useState({
              edited: false,
              content: ''
            });
            const contentValue = value?.edited ? value.content : content;
            let toShow = isEditable ? contentValue ? contentValue : '' : contentValue === '' || contentValue === undefined ? placeholder : contentValue || placeholder || '';
            return {
              ref,
              isOutSide,
              value: toShow,
              setValue
            };
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./credits/animations
      ************************************/

      ims.set('./credits/animations', {
        hash: 3779295974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
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
            default: {
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

      /*************************************
      INTERNAL MODULE: ./credits/coins-modal
      *************************************/

      ims.set('./credits/coins-modal', {
        hash: 2076371047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _requestCredits = require("./request-credits");
          /*bundle*/ //the nexts are in the same bundle

          function CoinsModal({
            owner,
            globalTexts,
            show,
            onClose,
            onConsume,
            type = 'generative'
          }) {
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement(_requestCredits.RequestCreditsForm, {
              onSuccess: onClose,
              onClose: onClose,
              onCancel: onClose,
              onConsume: onConsume,
              type: type,
              globalTexts: globalTexts,
              owner: owner
            }));
          }
          0;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/image
      *******************************/

      ims.set('./credits/image', {
        hash: 315420214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerImage = OwnerImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OwnerImage({
            owner
          }) {
            if (!owner?.photoUrl) {
              return _react.default.createElement(_icons.AppIcon, {
                icon: "school",
                className: "pui-image"
              });
            }
            return _react.default.createElement(_image.Image, {
              src: owner.photoUrl,
              className: "circle"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./credits/request-credits
      *****************************************/

      ims.set('./credits/request-credits', {
        hash: 3893472426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsForm = RequestCreditsForm;
          var _react = require("react");
          var _errorRenderer = require("../error-renderer");
          var _aiButton = require("../ai-button");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _processContainer = require("../page/process-container");
          var _image = require("./image");
          var _animations = require("./animations");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function RequestCreditsForm({
            onClose,
            globalTexts,
            owner,
            onConsume,
            onCancel,
            type = 'generative',
            onSuccess
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const actionTexts = globalTexts.actions;
            const texts = globalTexts.requestCredits;
            const errors = globalTexts.errors;
            onCancel = onCancel ?? onClose;
            // texts = texts.coins.modal;
            const onConfirm = async event => {
              try {
                event.stopPropagation();
                setFetching(true);
                const answer = await onConsume();
                if (!answer.status) {
                  if (answer.error.code === 48) {
                    // the user already has the credits
                    onSuccess();
                  }
                  // const code: string = (answer.error.code as number).toString();
                  throw new Error(errors['NO_CREDITS']);
                }
                if (onSuccess) onSuccess();
              } catch (e) {
                setError(texts.alerts.noCredits);
              } finally {
                setFetching(false);
              }
            };
            const textType = _session.sessionWrapper.user.id === owner?.id ? 'user' : 'org';
            const detailText = type === 'interactive' ? texts.detail.interactive : texts.detail[textType];
            const subtitle = type === 'interactive' ? texts.subtitle.interactive : texts.subtitle[textType];
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form request__container text-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                institution: owner?.name
              }
            }, subtitle)), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), owner && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("span", null, owner.name), _react.default.createElement("span", null, texts.ownerDescription)))), _react.default.createElement("section", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actionTexts.cancel), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onConfirm
            }, actionTexts.continue)), _react.default.createElement("div", {
              className: "text-center"
            }, _react.default.createElement("span", {
              className: "small-text"
            }, detailText)), _react.default.createElement(_processContainer.ProcessContainer, {
              fetching: fetching,
              key: "processing"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 716227078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 3926644465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className,
            description,
            children,
            ...props
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls,
              ...props
            }, _react.default.createElement("h3", null, text), _react.default.createElement("p", {
              className: "p1"
            }, description), children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./entity-image
      ******************************/

      ims.set('./entity-image', {
        hash: 2962070075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityImage = EntityImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function EntityImage({
            src,
            ratio,
            alt = '',
            entity = 'activity',
            type,
            children,
            size = 'sm',
            preload,
            className,
            ...props
          }) {
            let cls = `entity-image ${className || ''} ${entity}`;
            if (ratio) cls += ` img--${ratio}`;
            if (!src || src === '') {
              src = `/assets/images/entities/${entity}/${type ? `${type}/` : ''}700.jpg`;
            }
            if (preload) return _react.default.createElement("div", {
              className: `${cls} entity-image--preload`
            });
            return _react.default.createElement(_image.Image, {
              ...props,
              src: `${src}?size=${size}`,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 3647494150,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          /*bundle */
          function ErrorRenderer({
            error,
            variant = 'error'
          }) {
            if (!error) return null;
            return _react.default.createElement(_alert.Alert, {
              type: variant
            }, error);
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./header-card/header-counter
      ********************************************/

      ims.set('./header-card/header-counter', {
        hash: 3049264674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCounter = HeaderCounter;
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          /**
           * TODO: Review this component @carlos
           * @param param0
           * @returns
           */
          const HeaderCounterItem = ({
            item,
            index
          }) => {
            const StatusHeaderContent = ({
              status
            }) => {
              switch (status) {
                case 'done':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-done"
                  }, index);
                case 'waiting':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-waiting"
                  }, index);
                case 'current':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-current"
                  }, index);
                default:
                  return _react.default.createElement(_icons.Icon, {
                    className: "lg",
                    icon: 'refresh'
                  });
              }
            };
            return _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: item.url
            }, _react.default.createElement(StatusHeaderContent, {
              status: item.status
            }));
          };
          /*bundle */
          function HeaderCounter({
            list,
            className
          }) {
            const cls = `header-counter__container ${className ? ` ${className}` : ''}`;
            const renderedItems = list.map((item, index) => _react.default.createElement(HeaderCounterItem, {
              item: item,
              key: index,
              index: index + 1
            }));
            return _react.default.createElement("div", {
              className: cls
            }, renderedItems);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./header-card/header-title
      ******************************************/

      ims.set('./header-card/header-title', {
        hash: 1777028730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          /*bundle*/
          function HeaderTitle({
            title
          }) {
            return _react.default.createElement("section", {
              className: "header-card__title-container"
            }, _react.default.createElement("h3", {
              className: "h1 header-card__title-text"
            }, title));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./header-card/index
      ***********************************/

      ims.set('./header-card/index', {
        hash: 1274014296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCard = HeaderCard;
          var _headerCounter = require("./header-counter");
          var _headerTitle = require("./header-title");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function HeaderCard({
            className,
            children,
            image,
            alt,
            option = 'dark',
            title,
            list
          }) {
            const cls = `header-card__container option-${option}${className ? ` ${className}` : ``}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-card__text"
            }, title && _react.default.createElement(_headerTitle.HeaderTitle, {
              title: title
            }), _react.default.createElement("section", {
              className: "header-card__content"
            }, children)), list && _react.default.createElement(_headerCounter.HeaderCounter, {
              list: list,
              className: "header-card__counter"
            }), image && _react.default.createElement(_image.Image, {
              src: image,
              alt: alt,
              className: "header-card__image"
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./hooks/use-confetti
      ************************************/

      ims.set('./hooks/use-confetti', {
        hash: 679209707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConfetti = useConfetti;
          var _jsConfetti = require("js-confetti");
          var _react = require("react");
          /*bundle*/
          function useConfetti(props) {
            const specs = {
              confettiNumber: 300,
              confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
              emojis: ['🎉', '🎊'],
              emojiSize: 18
            };
            _react.default.useEffect(() => {
              const jsConfetti = new _jsConfetti.default();
              jsConfetti.addConfetti({
                ...specs,
                ...props
              });
            }, []);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./hooks/use-texts-callback
      ******************************************/

      ims.set('./hooks/use-texts-callback', {
        hash: 2445678329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTextsCallback = useTextsCallback;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTextsCallback(specifier, callback) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                setTexts(value);
                setReady(modelTexts.ready);
                if (modelTexts.ready) callback(value);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./loaders/loader
      ********************************/

      ims.set('./loaders/loader', {
        hash: 1998167168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLoader = AppLoader;
          var _react = require("react");
          /*bundle*/
          function AppLoader() {
            return _react.default.createElement("div", {
              className: "process__loader"
            }, _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square "
            }), _react.default.createElement("div", {
              className: "square last"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./loaders/pre-load
      **********************************/

      ims.set('./loaders/pre-load', {
        hash: 2462171743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return _react.default.createElement("div", {
              className: 'preload-screen active'
            }, _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: 'primary'
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page/loader
      *****************************/

      ims.set('./page/loader', {
        hash: 2281835143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageLoader = PageLoader;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function PageLoader({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = `page-loader-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./page/page-container
      *************************************/

      ims.set('./page/page-container', {
        hash: 505372992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageContainer = PageContainer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function PageContainer({
            children,
            className,
            fetching,
            isForm = false,
            size = undefined
          }) {
            const SIZES = {
              sm: 'container-sm',
              default: ''
            };
            const clsSize = SIZES[size] || SIZES.default;
            let cls = `page__container ${clsSize}${className ? ` ${className}` : ''}`;
            if (isForm) cls += ' page__container--form';
            return _react.default.createElement("div", {
              className: cls
            }, children, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./page/process-container
      ****************************************/

      ims.set('./page/process-container', {
        hash: 183968273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function ProcessContainer({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = `process-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./page/title
      ****************************/

      ims.set('./page/title', {
        hash: 1947893331,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSubtitle = PageSubtitle;
          exports.PageTitle = PageTitle;
          var _react = require("react");
          var _skeletonText = require("../skeleton-text");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function PageTitle({
            preload,
            title,
            children,
            href,
            as = 'h1'
          }) {
            const Control = as;
            if (preload) {
              return _react.default.createElement("header", {
                className: "page-title__section"
              }, _react.default.createElement(_skeletonText.SkeletonText, {
                height: "8px",
                width: "100px"
              }), children);
            }
            let attrs = {
              onClick: undefined,
              className: undefined
            };
            if (href) {
              attrs = {
                onClick: () => _routing.routing.pushState(href),
                className: 'is--link'
              };
            }
            return _react.default.createElement("header", {
              className: "page-title__section"
            }, _react.default.createElement(Control, {
              ...attrs
            }, title), children);
          }
          /*bundle*/
          function PageSubtitle({
            children,
            href
          }) {
            let attrs = {
              onClick: undefined
            };
            if (href) {
              attrs = {
                onClick: () => _routing.routing.pushState(href)
              };
            }
            return _react.default.createElement("span", {
              className: "post-title",
              ...attrs
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./process-button
      ********************************/

      ims.set('./process-button', {
        hash: 3041374255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessButton = ProcessButton;
          exports.ProcessIconButton = ProcessIconButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ProcessButton({
            children,
            onClick,
            disabled,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async () => {
              setProcessing(true);
              await onClick();
              setProcessing(false);
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
          /*bundle*/
          function ProcessIconButton({
            children,
            disabled,
            className,
            onClick,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async event => {
              event.stopPropagation();
              setProcessing(true);
              await onClick();
              setTimeout(() => {
                setProcessing(false);
              }, 300);
            };
            if (processing) {
              return _react.default.createElement("button", {
                className: "process-button process-button--fetching"
              }, _react.default.createElement(_components.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const cls = className ? `${className} process-button` : 'process-button';
            return _react.default.createElement(_icons.AppIconButton, {
              className: cls,
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./radio/index
      *****************************/

      ims.set('./radio/index', {
        hash: 2799162414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/ // components/radioButton.tsx

          function RadioButton({
            label,
            onChange,
            ...rest
          }) {
            const inputRef = React.useRef(null);
            const handleLabelChange = event => {
              if (inputRef.current) {
                const changeEvent = new Event('change', {
                  bubbles: true,
                  cancelable: true
                });
                inputRef.current.dispatchEvent(changeEvent);
              }
            };
            return React.createElement("label", {
              className: "radio-button",
              onChange: handleLabelChange
            }, React.createElement("span", null, React.createElement("input", {
              type: "radio",
              ref: inputRef,
              onChange: onChange,
              ...rest
            }), React.createElement(_framerMotion.motion.div, {
              className: "radio-button__custom",
              animate: {
                scale: rest.checked ? 1.1 : 1
              },
              transition: {
                duration: 0.2
              }
            }, rest.checked && React.createElement(_framerMotion.motion.div, {
              className: "radio-button__inner",
              layout: true
            }))), label);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./radio/radio-group
      ***********************************/

      ims.set('./radio/radio-group', {
        hash: 40498085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioGroup = RadioGroup;
          var React = require("react");
          /*bundle*/ // components/radio-group.tsx

          function RadioGroup({
            children,
            value,
            onChange
          }) {
            return React.createElement("div", null, React.Children.map(children, child => {
              // Check if child is a valid element and if it conforms to the RadioButtonWithProps type
              if (React.isValidElement(child) && typeof child.props.value === 'string') {
                // Clone the element with new props
                return React.cloneElement(child, {
                  checked: child.props.value === value,
                  onChange: () => onChange(child.props.value)
                });
              }
              return child;
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./skeleton-text
      *******************************/

      ims.set('./skeleton-text', {
        hash: 1426306877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SkeletonText = SkeletonText;
          var _react = require("react");
          /*bundle*/
          function SkeletonText(props) {
            return _react.default.createElement("span", {
              className: "skeleton-text",
              style: {
                width: props.width || '100%',
                height: props.height || '14px',
                background: props.color || '',
                borderRadius: props.radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: props.stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./theme-switcher
      ********************************/

      ims.set('./theme-switcher', {
        hash: 4092300503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitch = ThemeSwitch;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitch({
            fetching
          }) {
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
            return _react.default.createElement("div", {
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./tour/container
      ********************************/

      ims.set('./tour/container', {
        hash: 3036630611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DriverTourContainer = DriverTourContainer;
          var _react = require("react");
          var _useDriverTour = require("./use-driver-tour");
          var _modal = require("pragmate-ui/modal");
          var _core = require("@beyond-js/kernel/core");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DriverTourContainer({
            name,
            className,
            ready,
            texts,
            children
          }) {
            const [showConfirm, setShowConfirm] = _react.default.useState(false);
            const closeCallback = async () => {
              setShowConfirm(true);
            };
            const {
              ref,
              key
            } = (0, _useDriverTour.useDriverTour)(name, ready, closeCallback, texts);
            const checkbox = _react.default.useRef(null);
            const onClose = () => {
              if (checkbox.current.checked) {
                localStorage.setItem(key, 'done');
              }
              setShowConfirm(false);
            };
            const modalTexts = {
              es: {
                title: 'Te gustaria completar el Tour en otro momento?',
                cancel: 'No volver a ver',
                close: 'Cerrar'
              },
              en: {
                title: 'Would you like to complete the Tour later?',
                cancel: 'Do not show again',
                close: 'Close'
              },
              de: {
                title: 'Möchten Sie den Tour später abschließen?',
                cancel: 'Nicht noch einmal anzeigen',
                close: 'Schließen'
              }
            };
            const currentTexts = _core.languages.current === 'es' ? modalTexts.es : modalTexts.en;
            return _react.default.createElement("div", {
              ref: ref,
              className: className
            }, children, showConfirm && _react.default.createElement(_modal.Modal, {
              show: true,
              title: modalTexts[_core.languages.current].title,
              onClose: onClose
            }, _react.default.createElement("h6", null, currentTexts.title), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement("span", {
              className: "flex-container gap-05"
            }, _react.default.createElement("input", {
              type: "checkbox",
              ref: checkbox
            }), currentTexts.cancel)), _react.default.createElement("footer", {
              className: "modal-actions mt-15 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              onClick: onClose
            }, currentTexts.close))));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./tour/tour-step
      ********************************/

      ims.set('./tour/tour-step', {
        hash: 267651650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TourStep = TourStep;
          var _react = require("react");
          /*bundle*/
          function TourStep({
            className,
            name,
            index,
            texts,
            children,
            as = 'span'
          }) {
            const keys = Object.keys(texts);
            if (!texts.hasOwnProperty(name) || !keys) {
              console.warn(`The text ${name} is not defined in the texts object`, texts);
              return null;
            }
            index = index ?? keys.indexOf(name);
            const Control = as;
            const cls = `tour-step ${className || ''}`;
            return _react.default.createElement(Control, {
              className: cls,
              "data-description": texts[name].description,
              "data-title": texts[name].title,
              "data-tour": index,
              "data-index": index
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./tour/use-driver-tour
      **************************************/

      ims.set('./tour/use-driver-tour', {
        hash: 3966853664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDriverTour = useDriverTour;
          var _react = require("react");
          var _driver = require("driver.js");
          /*bundle*/
          function useDriverTour(name, ready, closeCallback, props = {}) {
            const ref = _react.default.useRef(null);
            const key = `ailearn.${name}.tour`;
            const sessionKey = `ailearn.${name}.tour.session`;
            const saw = localStorage.getItem(key);
            const sessionSaw = sessionStorage.getItem(sessionKey);
            _react.default.useEffect(() => {
              if (!ready || saw || sessionSaw) return;
              const items = ref.current.querySelectorAll('[data-tour]');
              const steps = [];
              items?.forEach(item => {
                const {
                  title,
                  description
                } = item.dataset;
                steps.push({
                  element: item,
                  popover: {
                    title,
                    description
                  }
                });
              });
              const obj = (0, _driver.driver)({
                popoverClass: 'pui-popover-tour',
                steps,
                onNextClick: () => {
                  if (!obj.hasNextStep()) {
                    localStorage.setItem(key, 'done');
                    obj.destroy();
                    return;
                  }
                  obj.moveNext();
                  return true;
                },
                onDestroyStarted: async () => {
                  sessionStorage.setItem(sessionKey, 'seen');
                  closeCallback();
                  obj.destroy();
                },
                ...props
              });
              obj.drive();
            }, [ready]);
            return {
              ref,
              key
            };
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 1107990003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function UserData({
            label,
            type,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, type === 'organization' ? React.createElement(_icons.AppIcon, {
              variant: "on-primary",
              icon: "institution",
              className: "user-data__img"
            }) : React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/audio",
        "from": "ActivityAudio",
        "name": "ActivityAudio"
      }, {
        "im": "./activities/chat-preload",
        "from": "ChatPreload",
        "name": "ChatPreload"
      }, {
        "im": "./activities/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
        "im": "./audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./battery",
        "from": "Battery",
        "name": "Battery"
      }, {
        "im": "./card/content",
        "from": "CardContent",
        "name": "CardContent"
      }, {
        "im": "./card/footer",
        "from": "CardFooter",
        "name": "CardFooter"
      }, {
        "im": "./card/image",
        "from": "CardImage",
        "name": "CardImage"
      }, {
        "im": "./card/index",
        "from": "Card",
        "name": "Card"
      }, {
        "im": "./chip",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./content-editable/index",
        "from": "ContentEditable",
        "name": "ContentEditable"
      }, {
        "im": "./content-editable/textarea",
        "from": "Textarea",
        "name": "Textarea"
      }, {
        "im": "./credits/coins-modal",
        "from": "CoinsModal",
        "name": "CoinsModal"
      }, {
        "im": "./credits/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
      }, {
        "im": "./credits/request-credits",
        "from": "RequestCreditsForm",
        "name": "RequestCreditsForm"
      }, {
        "im": "./empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./entity-image",
        "from": "EntityImageType",
        "name": "EntityImageType"
      }, {
        "im": "./entity-image",
        "from": "EntityImage",
        "name": "EntityImage"
      }, {
        "im": "./error-renderer",
        "from": "ErrorRenderer",
        "name": "ErrorRenderer"
      }, {
        "im": "./header-card/header-counter",
        "from": "HeaderCounter",
        "name": "HeaderCounter"
      }, {
        "im": "./header-card/header-title",
        "from": "HeaderTitle",
        "name": "HeaderTitle"
      }, {
        "im": "./header-card/index",
        "from": "HeaderCard",
        "name": "HeaderCard"
      }, {
        "im": "./hooks/use-confetti",
        "from": "useConfetti",
        "name": "useConfetti"
      }, {
        "im": "./hooks/use-texts-callback",
        "from": "useTextsCallback",
        "name": "useTextsCallback"
      }, {
        "im": "./loaders/loader",
        "from": "AppLoader",
        "name": "AppLoader"
      }, {
        "im": "./loaders/pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./page/loader",
        "from": "PageLoader",
        "name": "PageLoader"
      }, {
        "im": "./page/page-container",
        "from": "PageContainer",
        "name": "PageContainer"
      }, {
        "im": "./page/process-container",
        "from": "ProcessContainer",
        "name": "ProcessContainer"
      }, {
        "im": "./page/title",
        "from": "PageTitle",
        "name": "PageTitle"
      }, {
        "im": "./page/title",
        "from": "PageSubtitle",
        "name": "PageSubtitle"
      }, {
        "im": "./process-button",
        "from": "ProcessButton",
        "name": "ProcessButton"
      }, {
        "im": "./process-button",
        "from": "ProcessIconButton",
        "name": "ProcessIconButton"
      }, {
        "im": "./radio/index",
        "from": "RadioButton",
        "name": "RadioButton"
      }, {
        "im": "./radio/radio-group",
        "from": "RadioGroup",
        "name": "RadioGroup"
      }, {
        "im": "./skeleton-text",
        "from": "SkeletonText",
        "name": "SkeletonText"
      }, {
        "im": "./theme-switcher",
        "from": "ThemeSwitch",
        "name": "ThemeSwitch"
      }, {
        "im": "./tour/container",
        "from": "DriverTourContainer",
        "name": "DriverTourContainer"
      }, {
        "im": "./tour/tour-step",
        "from": "TourStep",
        "name": "TourStep"
      }, {
        "im": "./tour/use-driver-tour",
        "from": "useDriverTour",
        "name": "useDriverTour"
      }, {
        "im": "./user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityAudio') && _export("ActivityAudio", ActivityAudio = require ? require('./activities/audio').ActivityAudio : value);
        (require || prop === 'ChatPreload') && _export("ChatPreload", ChatPreload = require ? require('./activities/chat-preload').ChatPreload : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./activities/header').ActivityHeader : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./animation-container').AnimatedContainer : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./audio-player').AudioPlayer : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./content-editable/textarea').Textarea : value);
        (require || prop === 'CoinsModal') && _export("CoinsModal", CoinsModal = require ? require('./credits/coins-modal').CoinsModal : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./credits/image').OwnerImage : value);
        (require || prop === 'RequestCreditsForm') && _export("RequestCreditsForm", RequestCreditsForm = require ? require('./credits/request-credits').RequestCreditsForm : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'EntityImageType') && _export("EntityImageType", EntityImageType = require ? require('./entity-image').EntityImageType : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./entity-image').EntityImage : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'useConfetti') && _export("useConfetti", useConfetti = require ? require('./hooks/use-confetti').useConfetti : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./hooks/use-texts-callback').useTextsCallback : value);
        (require || prop === 'AppLoader') && _export("AppLoader", AppLoader = require ? require('./loaders/loader').AppLoader : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./loaders/pre-load').PreloadScreen : value);
        (require || prop === 'PageLoader') && _export("PageLoader", PageLoader = require ? require('./page/loader').PageLoader : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/page-container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
        (require || prop === 'RadioButton') && _export("RadioButton", RadioButton = require ? require('./radio/index').RadioButton : value);
        (require || prop === 'RadioGroup') && _export("RadioGroup", RadioGroup = require ? require('./radio/radio-group').RadioGroup : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
        (require || prop === 'ThemeSwitch') && _export("ThemeSwitch", ThemeSwitch = require ? require('./theme-switcher').ThemeSwitch : value);
        (require || prop === 'DriverTourContainer') && _export("DriverTourContainer", DriverTourContainer = require ? require('./tour/container').DriverTourContainer : value);
        (require || prop === 'TourStep') && _export("TourStep", TourStep = require ? require('./tour/tour-step').TourStep : value);
        (require || prop === 'useDriverTour') && _export("useDriverTour", useDriverTour = require ? require('./tour/use-driver-tour').useDriverTour : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2VtcHR5IiwiX2ljb25zIiwiX2Zvcm0iLCJDaGF0UHJlbG9hZCIsIm9uQ2xpY2siLCJFbXB0eUNhcmQiLCJUZXh0YXJlYSIsImRpc2FibGVkIiwiSWNvbkJ1dHRvbiIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xzIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZENvbnRhaW5lciIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiYXR0cnMiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImluaXRpYWwiLCJleGl0Iiwid2lkdGgiLCJsYXlvdXQiLCJBdWRpb1BsYXllciIsInVybCIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsImFsdCIsIkltYWdlIiwiX2VudGl0eUltYWdlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJzZXRFZGl0YWJsZSIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJNYXJrZG93biIsIkljb24iLCJ0ZXh0YXJlYSIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm9uQ2hhbmdlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwiZWRpdGVkIiwiY29udGVudFZhbHVlIiwidG9TaG93IiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsInkiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9tb2RhbCIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJNb2RhbCIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uU3VjY2VzcyIsIm9uQ2FuY2VsIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9hbmltYXRpb25zIiwiX3Nlc3Npb24iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsInRleHRzIiwicmVxdWVzdENyZWRpdHMiLCJlcnJvcnMiLCJvbkNvbmZpcm0iLCJhbnN3ZXIiLCJzdGF0dXMiLCJjb2RlIiwiRXJyb3IiLCJhbGVydHMiLCJub0NyZWRpdHMiLCJ0ZXh0VHlwZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImlkIiwiZGV0YWlsVGV4dCIsImRldGFpbCIsImludGVyYWN0aXZlIiwic3VidGl0bGUiLCJkaXYiLCJIdG1sV3JhcHBlciIsInBhcmFtcyIsImluc3RpdHV0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZyYWdtZW50Iiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsIl9hbGVydCIsIkFsZXJ0IiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2pzQ29uZmV0dGkiLCJ1c2VDb25mZXR0aSIsImNvbmZldHRpTnVtYmVyIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJqc0NvbmZldHRpIiwiYWRkQ29uZmV0dGkiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiaXNGb3JtIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImRlIiwiY3VycmVudFRleHRzIiwibGFuZ3VhZ2VzIiwiYmxvY2siLCJUb3VyU3RlcCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJfZHJpdmVyIiwic2Vzc2lvbktleSIsInNhdyIsInNlc3Npb25TYXciLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImZvckVhY2giLCJkYXRhc2V0IiwicHVzaCIsImVsZW1lbnQiLCJwb3BvdmVyIiwib2JqIiwiZHJpdmVyIiwicG9wb3ZlckNsYXNzIiwib25OZXh0Q2xpY2siLCJoYXNOZXh0U3RlcCIsImRlc3Ryb3kiLCJtb3ZlTmV4dCIsIm9uRGVzdHJveVN0YXJ0ZWQiLCJkcml2ZSIsIlVzZXJEYXRhIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhdC1wcmVsb2FkLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NoaXAudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdGV4dGFyZWEudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2VudGl0eS1pbWFnZS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtY29uZmV0dGkudHN4IiwiL3RzL2hvb2tzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy9sb2FkZXJzL2xvYWRlci50c3giLCIvdHMvbG9hZGVycy9wcmUtbG9hZC50c3giLCIvdHMvcGFnZS9sb2FkZXIudHN4IiwiL3RzL3BhZ2UvcGFnZS1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3Byb2Nlc3MtYnV0dG9uLnRzeCIsIi90cy9yYWRpby9pbmRleC50c3giLCIvdHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3NrZWxldG9uLXRleHQudHN4IiwiL3RzL3RoZW1lLXN3aXRjaGVyLnRzeCIsIi90cy90b3VyL2NvbnRhaW5lci50c3giLCIvdHMvdG91ci90b3VyLXN0ZXAudHN4IiwiL3RzL3RvdXIvdXNlLWRyaXZlci10b3VyLnRzIiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsYUFBYUEsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBQ3JCLE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPRSxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRixHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUViLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9B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