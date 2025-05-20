System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/components/hooks", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentActionsCard, AssignmentFigcaptionCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
  _export({
    ActivityCard: void 0,
    AssignmentActionsCard: void 0,
    AssignmentFigcaptionCard: void 0,
    AssignmentCard: void 0,
    BaseCard: void 0,
    BaseFooterCard: void 0,
    BaseCardHeader: void 0,
    BaseHoverFooterCard: void 0,
    ClassroomCard: void 0,
    Container: void 0,
    DraftCard: void 0,
    ModuleCardActionsFooter: void 0,
    ModuleCardFooter: void 0,
    ModuleCard: void 0,
    OrganizationCard: void 0,
    ClassroomHeader: void 0,
    CardOwnerSection: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_4 = _aimpactAilearnApp042ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_8 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Base) {
      dependency_10 = _pragmateUi100Beta7Base;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_15 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/base', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 436988623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCard = ActivityCard;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _actions = require("./footer/actions");
          var _activities = require("./sections/activities");
          var _language = require("./sections/language");
          /*bundle*/
          function ActivityCard(props) {
            const {
              item,
              texts,
              entity,
              disabled,
              className,
              href,
              children,
              classroom,
              type
            } = props;
            const attrs = href && !disabled ? {
              href
            } : {};
            const Parent = href && !disabled ? _components.Link : React.Fragment;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card activity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (type) cls += ` activity-card--${type}`;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            const picture = item?.picture;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: picture,
              entity: entity,
              alt: title,
              size: "sm"
            }, React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top-content"
            }, React.createElement(_icons.AppIcon, {
              icon: type
            }), texts?.types?.[type]))), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })), React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children, React.createElement("footer", {
              className: clsFooter
            }, React.createElement("div", {
              className: "normal__footer"
            }, React.createElement("span", {
              className: "footer-detail"
            }, date), React.createElement("div", {
              className: "show-on-normal"
            }, React.createElement(_language.Language, {
              language: item.language
            }))), React.createElement(_actions.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "go",
              title: texts?.actions?.link,
              href: href
            })))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./assignment/actions
      ************************************/

      ims.set('./assignment/actions', {
        hash: 465163902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActionsCard = AssignmentActionsCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _actions = require("../footer/actions");
          /*bundle*/
          function AssignmentActionsCard(props) {
            const {
              texts,
              mode,
              id
            } = props;
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/assignments/${id}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            return React.createElement(_actions.ModuleCardActionsFooter, null, mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "copy",
              title: texts?.actions?.copy,
              onClick: copyToClipboard
            }), React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts?.actions?.link,
              href: `/assignments/${id}`
            }), !props.archived && mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "dashboard",
              title: texts?.actions?.link,
              href: `/dashboard/${id}`
            }), props.archived && React.createElement(_icons.AppIconButton, {
              icon: "restore",
              title: texts?.actions?.restore,
              onClick: props.actions.restore
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./assignment/figcaption
      ***************************************/

      ims.set('./assignment/figcaption', {
        hash: 1965672428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentFigcaptionCard = AssignmentFigcaptionCard;
          var React = require("react");
          var _audience = require("../sections/audience");
          var _classroomHeader = require("../sections/classroom-header");
          /*bundle*/
          function AssignmentFigcaptionCard(props) {
            const {
              href,
              children,
              classroom,
              mode = 'student'
            } = props;
            if (!props.id) {
              console.warn('AssignmentCard: id is required', props);
            }
            const {
              item,
              audience = true
            } = props;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            if (!classroom && !audience) return null;
            return React.createElement("figcaption", null, classroom ? React.createElement(_classroomHeader.ClassroomHeader, {
              classroom: classroom
            }) : null, audience ? React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            })) : null);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignment/index
      **********************************/

      ims.set('./assignment/index', {
        hash: 2825290827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCard = AssignmentCard;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _activities = require("../sections/activities");
          var _language = require("../sections/language");
          var _actions = require("./actions");
          var _figcaption = require("./figcaption");
          /*bundle*/
          function AssignmentCard(props) {
            const {
              href,
              children,
              classroom,
              mode = 'student'
            } = props;
            if (!props.id) {
              console.warn('AssignmentCard: id is required', props);
            }
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            const {
              item,
              audience = true,
              texts,
              entity,
              type,
              disabled,
              className
            } = props;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card assignments-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (props.archived) cls += ' entity-card--archived';
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              "data-id": props.id,
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, React.createElement(_figcaption.AssignmentFigcaptionCard, {
              ...props
            })), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })), React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children, React.createElement("footer", {
              className: clsFooter
            }, React.createElement("div", {
              className: "normal__footer"
            }, React.createElement("span", {
              className: "footer-detail"
            }, date), React.createElement("div", {
              className: "show-on-normal"
            }, React.createElement(_language.Language, {
              language: item.language
            }))), React.createElement(_actions.AssignmentActionsCard, {
              ...props
            }))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./base/card
      ***************************/

      ims.set('./base/card', {
        hash: 1671780138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseCard = BaseCard;
          var React = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function BaseCard(props) {
            const {
              className,
              children,
              prefix,
              href
            } = props;
            const cls = className ? `${prefix}-card ${className}` : `${prefix}-card`;
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : 'div';
            if (href) {
              attrs.className = `card--link ${className}`;
            }
            return React.createElement(_context.CardContext.Provider, {
              value: {
                prefix: props.prefix ? props.prefix : 'base-card'
              }
            }, React.createElement(Parent, {
              ...attrs
            }, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./base/context
      ******************************/

      ims.set('./base/context', {
        hash: 3221221966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCardContext = exports.CardContext = void 0;
          var React = require("react");
          const CardContext = exports.CardContext = React.createContext({});
          const useCardContext = () => React.useContext(CardContext);
          exports.useCardContext = useCardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./base/footer
      *****************************/

      ims.set('./base/footer', {
        hash: 1972849629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFooterCard = BaseFooterCard;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseFooterCard(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            const cls = className ? `${prefix}-card__footer ${className}` : `${prefix}-card__footer`;
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./base/header
      *****************************/

      ims.set('./base/header', {
        hash: 2168355870,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseCardHeader = BaseCardHeader;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseCardHeader(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            const cls = className ? `${prefix}-card__header ${className}` : `${prefix}-card__header`;
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./base/hover-footer
      ***********************************/

      ims.set('./base/hover-footer', {
        hash: 3959746808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseHoverFooterCard = BaseHoverFooterCard;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseHoverFooterCard(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            return React.createElement("div", {
              className: "footer-on-hover"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./classrooms/index
      **********************************/

      ims.set('./classrooms/index', {
        hash: 3829472711,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCard = ClassroomCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _card = require("../base/card");
          var _footer = require("../base/footer");
          var _header = require("../base/header");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function ClassroomCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = className ? `classroom-card ${className}` : 'classroom-card';
            if (isMobile) cls += ' mobile-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "classroom",
              href: `/classrooms/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIconButton, {
              name: "copy",
              title: texts.actions.copy,
              className: "circle"
            }), React.createElement("div", {
              className: "copy-content"
            }, React.createElement("span", null, texts.classrooms?.code), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, props.actions?.delete && React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "trash",
              onClick: props.actions.delete,
              title: texts.actions.delete
            })))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./container
      ***************************/

      ims.set('./container', {
        hash: 3812461961,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = Container;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _audience = require("./sections/audience");
          var _language = require("./sections/language");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function Container({
            item,
            audience = true,
            texts,
            children,
            entity,
            type,
            onClick,
            disabled,
            archived,
            className
          }) {
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const [hasMounted, setHasMounted] = React.useState(false);
            React.useEffect(() => {
              setHasMounted(true);
            }, []);
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (isMobile) cls += ' mobile-card';
            if (archived) cls += ' entity-card--archived';
            return React.createElement(_framerMotion.motion.article, {
              onClick: onClick,
              initial: !hasMounted ? {
                opacity: 0,
                y: 15
              } : false,
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.25,
                ease: 'easeOut'
              },
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, audience ? React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            }), React.createElement(_language.Language, {
              language: item.language
            }))) : null), React.createElement("section", {
              className: "entity-card__content"
            }, types?.length > 0 ? React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              texts: texts,
              types: types
            })) : null, React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 4085276206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _audience = require("./sections/audience");
          var _language = require("./sections/language");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function DraftCard({
            href,
            children,
            ...props
          }) {
            const attrs = href ? {
              href
            } : {};
            const [hasMounted, setHasMounted] = React.useState(false);
            React.useEffect(() => {
              setHasMounted(true);
            }, []);
            if (href) {
              attrs.className = `card--link ${attrs.className}`;
            }
            const {
              item,
              audience = true,
              texts,
              entity,
              type,
              onClick,
              disabled,
              className
            } = props;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (isMobile) cls += ' mobile-card';
            return React.createElement(_components.Link, {
              ...attrs
            }, React.createElement("article", {
              onClick: onClick,
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, audience ? React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            }), React.createElement(_language.Language, {
              language: item.language
            }))) : null), React.createElement("section", {
              className: "entity-card__content"
            }, types?.length > 0 ? React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })) : null, React.createElement("header", null, React.createElement("span", {
              className: "p3 primary-text"
            }, texts.item.draftTitle), React.createElement("h5", {
              className: "card__title"
            }, title)), React.createElement("span", {
              className: "item__description p2"
            }, description)), children));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./footer/actions
      ********************************/

      ims.set('./footer/actions', {
        hash: 4146059452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardActionsFooter = ModuleCardActionsFooter;
          var React = require("react");
          /*bundle*/
          function ModuleCardActionsFooter({
            children
          } = {
            showUser: true
          }) {
            return React.createElement("div", {
              className: "actions-container hover__footer"
            }, React.createElement(React.Fragment, null, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./footer/index
      ******************************/

      ims.set('./footer/index', {
        hash: 3790137842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardFooter = ModuleCardFooter;
          var React = require("react");
          var _dayjs = require("dayjs");
          var _userData = require("../sections/user-data");
          /*bundle*/
          function ModuleCardFooter({
            item,
            className,
            showUser = true,
            children
          } = {
            showUser: true
          }) {
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const cls = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement("footer", {
              className: cls
            }, React.createElement("div", {
              className: "normal__footer"
            }, showUser && React.createElement(_userData.UserData, {
              data: ownerData,
              date: date
            })), React.createElement(React.Fragment, null, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3263317803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCard = ModuleCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _container = require("./container");
          /*bundle*/
          function ModuleCard({
            href,
            children,
            ...props
          }) {
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            if (href) {
              attrs.className = `card--link ${attrs.className}`;
            }
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement(_container.Container, {
              ...props
            }, children));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./organizations/confirm-action
      **********************************************/

      ims.set('./organizations/confirm-action', {
        hash: 152144149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ConfirmAction({
            icon,
            callback,
            title,
            description
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/l18n');
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: onClickButton
            }), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./organizations/index
      *************************************/

      ims.set('./organizations/index', {
        hash: 2742523097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationCard = OrganizationCard;
          var React = require("react");
          var _card = require("../base/card");
          var _header = require("../base/header");
          var _footer = require("../base/footer");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OrganizationCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            const cls = className ? `organization-card ${className}` : 'organization-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "organization",
              href: `/organizations/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIcon, {
              name: "copy"
            }), React.createElement("div", null, React.createElement("span", null, "Codigo del Aula"), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "delete"
            })))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./sections/activities
      *************************************/

      ims.set('./sections/activities', {
        hash: 2568294999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          function ModuleActivities({
            types,
            texts
          }) {
            if (!types) return null;
            const Item = ({
              item
            }) => {
              const cls = `activity-type__icon activity--${item}`;
              return _react.default.createElement("section", {
                className: cls
              }, _react.default.createElement(_icons.AppIcon, {
                icon: item,
                title: item
              }));
            };
            return _react.default.createElement(_list.List, {
              className: "activity-types__list",
              items: types,
              control: Item
            });
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/audience
      ***********************************/

      ims.set('./sections/audience', {
        hash: 2996597710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audience = Audience;
          var React = require("react");
          function Audience({
            audience
          }) {
            if (!audience) return null;
            return React.createElement("span", {
              className: "card__chip card__chip-right"
            }, audience?.level);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./sections/classroom-header
      *******************************************/

      ims.set('./sections/classroom-header', {
        hash: 4096292498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomHeader = ClassroomHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          var React = require("react");
          /*bundle*/
          function ClassroomHeader({
            classroom
          }) {
            if (!classroom) return null;
            const {
              name
            } = classroom;
            return React.createElement("div", {
              className: "classroom-data__section"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement("div", {
              className: "icon__container"
            }, React.createElement(_icons.AppIcon, {
              icon: "classroom"
            }))), React.createElement("span", {
              className: "classroom-data__name p3"
            }, name));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/language
      ***********************************/

      ims.set('./sections/language', {
        hash: 3594550563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Language = Language;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Language({
            language
          }) {
            if (!language) return null;
            return React.createElement("span", {
              className: "card__chip text-upper"
            }, language, " ", React.createElement(_icons.AppIcon, {
              name: `languages-${language}`
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./sections/owner
      ********************************/

      ims.set('./sections/owner', {
        hash: 1694535384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardOwnerSection = CardOwnerSection;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function CardOwnerSection({
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "owner-data__section"
            }, React.createElement("section", {
              className: "owner-data__detail"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "owner-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
              className: "owner-data__name"
            }, name))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./sections/user-data
      ************************************/

      ims.set('./sections/user-data', {
        hash: 869122493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function UserData({
            label,
            date,
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
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
              className: "user-data__name"
            }, name), React.createElement("span", {
              className: "user-data__date"
            }, date))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1920801957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity",
        "from": "ActivityCard",
        "name": "ActivityCard"
      }, {
        "im": "./assignment/actions",
        "from": "AssignmentActionsCard",
        "name": "AssignmentActionsCard"
      }, {
        "im": "./assignment/figcaption",
        "from": "AssignmentFigcaptionCard",
        "name": "AssignmentFigcaptionCard"
      }, {
        "im": "./assignment/index",
        "from": "AssignmentCard",
        "name": "AssignmentCard"
      }, {
        "im": "./base/card",
        "from": "BaseCard",
        "name": "BaseCard"
      }, {
        "im": "./base/footer",
        "from": "BaseFooterCard",
        "name": "BaseFooterCard"
      }, {
        "im": "./base/header",
        "from": "BaseCardHeader",
        "name": "BaseCardHeader"
      }, {
        "im": "./base/hover-footer",
        "from": "BaseHoverFooterCard",
        "name": "BaseHoverFooterCard"
      }, {
        "im": "./classrooms/index",
        "from": "ClassroomCard",
        "name": "ClassroomCard"
      }, {
        "im": "./container",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./draft",
        "from": "DraftCard",
        "name": "DraftCard"
      }, {
        "im": "./footer/actions",
        "from": "ModuleCardActionsFooter",
        "name": "ModuleCardActionsFooter"
      }, {
        "im": "./footer/index",
        "from": "ModuleCardFooter",
        "name": "ModuleCardFooter"
      }, {
        "im": "./index",
        "from": "ModuleCard",
        "name": "ModuleCard"
      }, {
        "im": "./organizations/index",
        "from": "OrganizationCard",
        "name": "OrganizationCard"
      }, {
        "im": "./sections/classroom-header",
        "from": "ClassroomHeader",
        "name": "ClassroomHeader"
      }, {
        "im": "./sections/owner",
        "from": "CardOwnerSection",
        "name": "CardOwnerSection"
      }, {
        "im": "./sections/user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityCard') && _export("ActivityCard", ActivityCard = require ? require('./activity').ActivityCard : value);
        (require || prop === 'AssignmentActionsCard') && _export("AssignmentActionsCard", AssignmentActionsCard = require ? require('./assignment/actions').AssignmentActionsCard : value);
        (require || prop === 'AssignmentFigcaptionCard') && _export("AssignmentFigcaptionCard", AssignmentFigcaptionCard = require ? require('./assignment/figcaption').AssignmentFigcaptionCard : value);
        (require || prop === 'AssignmentCard') && _export("AssignmentCard", AssignmentCard = require ? require('./assignment/index').AssignmentCard : value);
        (require || prop === 'BaseCard') && _export("BaseCard", BaseCard = require ? require('./base/card').BaseCard : value);
        (require || prop === 'BaseFooterCard') && _export("BaseFooterCard", BaseFooterCard = require ? require('./base/footer').BaseFooterCard : value);
        (require || prop === 'BaseCardHeader') && _export("BaseCardHeader", BaseCardHeader = require ? require('./base/header').BaseCardHeader : value);
        (require || prop === 'BaseHoverFooterCard') && _export("BaseHoverFooterCard", BaseHoverFooterCard = require ? require('./base/hover-footer').BaseHoverFooterCard : value);
        (require || prop === 'ClassroomCard') && _export("ClassroomCard", ClassroomCard = require ? require('./classrooms/index').ClassroomCard : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./container').Container : value);
        (require || prop === 'DraftCard') && _export("DraftCard", DraftCard = require ? require('./draft').DraftCard : value);
        (require || prop === 'ModuleCardActionsFooter') && _export("ModuleCardActionsFooter", ModuleCardActionsFooter = require ? require('./footer/actions').ModuleCardActionsFooter : value);
        (require || prop === 'ModuleCardFooter') && _export("ModuleCardFooter", ModuleCardFooter = require ? require('./footer/index').ModuleCardFooter : value);
        (require || prop === 'ModuleCard') && _export("ModuleCard", ModuleCard = require ? require('./index').ModuleCard : value);
        (require || prop === 'OrganizationCard') && _export("OrganizationCard", OrganizationCard = require ? require('./organizations/index').OrganizationCard : value);
        (require || prop === 'ClassroomHeader') && _export("ClassroomHeader", ClassroomHeader = require ? require('./sections/classroom-header').ClassroomHeader : value);
        (require || prop === 'CardOwnerSection') && _export("CardOwnerSection", CardOwnerSection = require ? require('./sections/owner').CardOwnerSection : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./sections/user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl93cmFwcGVyIiwiX3RvYXN0IiwiQXNzaWdubWVudEFjdGlvbnNDYXJkIiwibW9kZSIsImlkIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb3B5RXJyb3IiLCJvbkNsaWNrIiwiYXJjaGl2ZWQiLCJyZXN0b3JlIiwiX2F1ZGllbmNlIiwiX2NsYXNzcm9vbUhlYWRlciIsIkFzc2lnbm1lbnRGaWdjYXB0aW9uQ2FyZCIsIndhcm4iLCJhdWRpZW5jZSIsIkNsYXNzcm9vbUhlYWRlciIsIkF1ZGllbmNlIiwiX2ZpZ2NhcHRpb24iLCJBc3NpZ25tZW50Q2FyZCIsIl9jb250ZXh0IiwiQmFzZUNhcmQiLCJwcmVmaXgiLCJDYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcmRDb250ZXh0IiwidXNlQ29udGV4dCIsIkJhc2VGb290ZXJDYXJkIiwiQmFzZUNhcmRIZWFkZXIiLCJCYXNlSG92ZXJGb290ZXJDYXJkIiwiX2NhcmQiLCJfZm9vdGVyIiwiX2hlYWRlciIsIl9ob3ZlckZvb3RlciIsIl9vd25lciIsIkNsYXNzcm9vbUNhcmQiLCJpc01vYmlsZSIsImluY2x1ZGVzIiwiQWlMZWFybldyYXBwZXIiLCJkZXZpY2UiLCJjb250ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb3BpZWQiLCJuYW1lIiwiQ2FyZE93bmVyU2VjdGlvbiIsImRhdGEiLCJvd25lciIsImNvZGUiLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiX2ZyYW1lck1vdGlvbiIsIkNvbnRhaW5lciIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJhcnRpY2xlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJsZW5ndGgiLCJEcmFmdENhcmQiLCJkcmFmdFRpdGxlIiwic2hvd1VzZXIiLCJfdXNlckRhdGEiLCJNb2R1bGVDYXJkRm9vdGVyIiwib3duZXJEYXRhIiwiY3JlYXRvciIsIlVzZXJEYXRhIiwiX2NvbnRhaW5lciIsIk1vZHVsZUNhcmQiLCJfcmVhY3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsIkNvbmZpcm1Nb2RhbCIsInNob3ciLCJvbkNhbmNlbCIsIk9yZ2FuaXphdGlvbkNhcmQiLCJfbGlzdCIsIkl0ZW0iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwibGV2ZWwiLCJfdG9vbHRpcCIsIlRvb2x0aXAiLCJfaW1hZ2UiLCJwaG90b1VybCIsIkltYWdlIiwibGFiZWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS50c3giLCIvdHMvYXNzaWdubWVudC9hY3Rpb25zLnRzeCIsIi90cy9hc3NpZ25tZW50L2ZpZ2NhcHRpb24udHN4IiwiL3RzL2Fzc2lnbm1lbnQvaW5kZXgudHN4IiwiL3RzL2Jhc2UvY2FyZC50c3giLCIvdHMvYmFzZS9jb250ZXh0LnRzIiwiL3RzL2Jhc2UvZm9vdGVyLnRzeCIsIi90cy9iYXNlL2hlYWRlci50c3giLCIvdHMvYmFzZS9ob3Zlci1mb290ZXIudHN4IiwiL3RzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL2NvbnRhaW5lci50c3giLCIvdHMvZHJhZnQudHN4IiwiL3RzL2Zvb3Rlci9hY3Rpb25zLnRzeCIsIi90cy9mb290ZXIvaW5kZXgudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2luZGV4LnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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