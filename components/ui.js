System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.32/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/chat-sdk@1.4.4/session", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.12/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/core", "driver.js@1.3.5"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk144WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk144WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_aimpactChatSdk144Session) {
      dependency_12 = _aimpactChatSdk144Session;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/form', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/base', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/widgets/render', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['driver.js', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/components/ui');
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
        hash: 7392085,
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
            }, _react.default.createElement("h6", null, currentTexts.title, " 11"), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2VtcHR5IiwiX2ljb25zIiwiX2Zvcm0iLCJDaGF0UHJlbG9hZCIsIm9uQ2xpY2siLCJFbXB0eUNhcmQiLCJUZXh0YXJlYSIsImRpc2FibGVkIiwiSWNvbkJ1dHRvbiIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xzIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZENvbnRhaW5lciIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiYXR0cnMiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImluaXRpYWwiLCJleGl0Iiwid2lkdGgiLCJsYXlvdXQiLCJBdWRpb1BsYXllciIsInVybCIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsImFsdCIsIkltYWdlIiwiX2VudGl0eUltYWdlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJzZXRFZGl0YWJsZSIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJNYXJrZG93biIsIkljb24iLCJ0ZXh0YXJlYSIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm9uQ2hhbmdlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwiZWRpdGVkIiwiY29udGVudFZhbHVlIiwidG9TaG93IiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsInkiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9tb2RhbCIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJNb2RhbCIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uU3VjY2VzcyIsIm9uQ2FuY2VsIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9hbmltYXRpb25zIiwiX3Nlc3Npb24iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsInRleHRzIiwicmVxdWVzdENyZWRpdHMiLCJlcnJvcnMiLCJvbkNvbmZpcm0iLCJhbnN3ZXIiLCJzdGF0dXMiLCJjb2RlIiwiRXJyb3IiLCJhbGVydHMiLCJub0NyZWRpdHMiLCJ0ZXh0VHlwZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImlkIiwiZGV0YWlsVGV4dCIsImRldGFpbCIsImludGVyYWN0aXZlIiwic3VidGl0bGUiLCJkaXYiLCJIdG1sV3JhcHBlciIsInBhcmFtcyIsImluc3RpdHV0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZyYWdtZW50Iiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsIl9hbGVydCIsIkFsZXJ0IiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2pzQ29uZmV0dGkiLCJ1c2VDb25mZXR0aSIsImNvbmZldHRpTnVtYmVyIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJqc0NvbmZldHRpIiwiYWRkQ29uZmV0dGkiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiaXNGb3JtIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImN1cnJlbnRUZXh0cyIsImxhbmd1YWdlcyIsImJsb2NrIiwiVG91clN0ZXAiLCJrZXlzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiX2RyaXZlciIsInNlc3Npb25LZXkiLCJzYXciLCJzZXNzaW9uU2F3IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9jaGlwLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL3RleHRhcmVhLnRzeCIsIi90eXBlcy50cyIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2NyZWRpdHMvYW5pbWF0aW9ucy50c3giLCIvdHMvY3JlZGl0cy9jb2lucy1tb2RhbC50c3giLCIvdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvdHMvY3JlZGl0cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90aGVtZS1zd2l0Y2hlci50c3giLCIvdHMvdG91ci9jb250YWluZXIudHN4IiwiL3RzL3RvdXIvdG91ci1zdGVwLnRzeCIsIi90cy90b3VyL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVDLGFBQWFBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUNyQixPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1Qk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT0UsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUUYsR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFYixDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkEsSUFBQUgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VB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