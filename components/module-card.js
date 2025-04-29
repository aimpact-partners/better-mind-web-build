System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.1/components/hooks", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/config", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.4.1/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentActionsCard, AssignmentFigcaptionCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_4 = _aimpactAilearnApp041ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp041Config) {
      dependency_8 = _aimpactAilearnApp041Config;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Base) {
      dependency_10 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_11 = _aimpactAilearnApp041ModelWrapper;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_13 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_16 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_17 = _pragmateUi100Beta7Image;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/config', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/base', dependency_10], ['@aimpact/ailearn-app/model/wrapper', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/modal', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tooltip', dependency_16], ['pragmate-ui/image', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/module-card');
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
        hash: 2604558899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActionsCard = AssignmentActionsCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var React = require("react");
          var _actions = require("../footer/actions");
          var _config = require("@aimpact/ailearn-app/config");
          var _toast = require("pragmate-ui/toast");
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
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/assignments/${id}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9jb25maWciLCJfdG9hc3QiLCJBc3NpZ25tZW50QWN0aW9uc0NhcmQiLCJtb2RlIiwiaWQiLCJjb3B5VG9DbGlwYm9hcmQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInBhcmFtcyIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb3B5RXJyb3IiLCJvbkNsaWNrIiwiYXJjaGl2ZWQiLCJyZXN0b3JlIiwiX2F1ZGllbmNlIiwiX2NsYXNzcm9vbUhlYWRlciIsIkFzc2lnbm1lbnRGaWdjYXB0aW9uQ2FyZCIsIndhcm4iLCJhdWRpZW5jZSIsIkNsYXNzcm9vbUhlYWRlciIsIkF1ZGllbmNlIiwiX2ZpZ2NhcHRpb24iLCJBc3NpZ25tZW50Q2FyZCIsIl9jb250ZXh0IiwiQmFzZUNhcmQiLCJwcmVmaXgiLCJDYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcmRDb250ZXh0IiwidXNlQ29udGV4dCIsIkJhc2VGb290ZXJDYXJkIiwiQmFzZUNhcmRIZWFkZXIiLCJCYXNlSG92ZXJGb290ZXJDYXJkIiwiX2NhcmQiLCJfZm9vdGVyIiwiX2hlYWRlciIsIl9ob3ZlckZvb3RlciIsIl9vd25lciIsIl93cmFwcGVyIiwiQ2xhc3Nyb29tQ2FyZCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvcGllZCIsIm5hbWUiLCJDYXJkT3duZXJTZWN0aW9uIiwiZGF0YSIsIm93bmVyIiwiY29kZSIsImNsYXNzcm9vbXMiLCJkZWxldGUiLCJfZnJhbWVyTW90aW9uIiwiQ29udGFpbmVyIiwiaGFzTW91bnRlZCIsInNldEhhc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsImFydGljbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImxlbmd0aCIsIkRyYWZ0Q2FyZCIsImRyYWZ0VGl0bGUiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwic2hvdyIsIm9uQ2FuY2VsIiwiT3JnYW5pemF0aW9uQ2FyZCIsIl9saXN0IiwiSXRlbSIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJsZXZlbCIsIl90b29sdGlwIiwiVG9vbHRpcCIsIl9pbWFnZSIsInBob3RvVXJsIiwiSW1hZ2UiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LnRzeCIsIi90cy9hc3NpZ25tZW50L2FjdGlvbnMudHN4IiwiL3RzL2Fzc2lnbm1lbnQvZmlnY2FwdGlvbi50c3giLCIvdHMvYXNzaWdubWVudC9pbmRleC50c3giLCIvdHMvYmFzZS9jYXJkLnRzeCIsIi90cy9iYXNlL2NvbnRleHQudHMiLCIvdHMvYmFzZS9mb290ZXIudHN4IiwiL3RzL2Jhc2UvaGVhZGVyLnRzeCIsIi90cy9iYXNlL2hvdmVyLWZvb3Rlci50c3giLCIvdHMvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9kcmFmdC50c3giLCIvdHMvZm9vdGVyL2FjdGlvbnMudHN4IiwiL3RzL2Zvb3Rlci9pbmRleC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL29yZ2FuaXphdGlvbnMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL29yZ2FuaXphdGlvbnMvaW5kZXgudHN4IiwiL3RzL3NlY3Rpb25zL2FjdGl2aXRpZXMudHN4IiwiL3RzL3NlY3Rpb25zL2F1ZGllbmNlLnRzeCIsIi90cy9zZWN0aW9ucy9jbGFzc3Jvb20taGVhZGVyLnRzeCIsIi90cy9zZWN0aW9ucy9sYW5ndWFnZS50c3giLCIvdHMvc2VjdGlvbnMvb3duZXIudHN4IiwiL3RzL3NlY3Rpb25zL3VzZXItZGF0YS50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEdBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLEtBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLFFBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFdBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFNBQUEsR0FBQVIsT0FBQTtVQUdPO1VBQVUsU0FBVVMsWUFBWUEsQ0FBQ0MsS0FBdUI7WUFDOUQsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLEtBQUs7Y0FBRUMsTUFBTTtjQUFFQyxRQUFRO2NBQUVDLFNBQVM7Y0FBRUMsSUFBSTtjQUFFQyxRQUFRO2NBQUVDLFNBQVM7Y0FBRUM7WUFBSSxDQUFFLEdBQUdULEtBQUs7WUFDM0YsTUFBTVUsS0FBSyxHQUFHSixJQUFJLElBQUksQ0FBQ0YsUUFBUSxHQUFHO2NBQUVFO1lBQUksQ0FBRSxHQUFHLEVBQUU7WUFDL0MsTUFBTUssTUFBTSxHQUFHTCxJQUFJLElBQUksQ0FBQ0YsUUFBUSxHQUFHVixXQUFBLENBQUFrQixJQUFJLEdBQUdqQixLQUFLLENBQUNrQixRQUFRO1lBQ3hELE1BQU1DLEtBQUssR0FBR2IsSUFBSSxDQUFDYSxLQUFLLElBQUliLElBQUksQ0FBQ2MsU0FBUztZQUMxQyxNQUFNQyxXQUFXLEdBQUdmLElBQUksQ0FBQ2UsV0FBVyxJQUFJZCxLQUFLLENBQUNELElBQUksQ0FBQ2UsV0FBVztZQUM5RCxNQUFNQyxLQUFLLEdBQUdoQixJQUFJLEVBQUVpQixVQUFVLEVBQUVELEtBQUssSUFBSSxFQUFFO1lBQzNDLE1BQU1FLFVBQVUsR0FBRyxJQUFBOUIsTUFBQSxDQUFBK0IsYUFBYSxHQUFFO1lBRWxDLElBQUksQ0FBQ25CLElBQUksRUFBRWlCLFVBQVUsRUFBRUQsS0FBSyxJQUFJaEIsSUFBSSxDQUFDUSxJQUFJLEVBQUU7Y0FDMUM7Y0FDQVEsS0FBSyxDQUFDSSxJQUFJLENBQUNwQixJQUFJLENBQUNRLElBQUksQ0FBQzs7WUFHdEIsSUFBSWEsR0FBRyxHQUFHLDZCQUE2QmxCLFFBQVEsR0FBRyx1QkFBdUIsR0FBRyxFQUFFLEVBQUU7WUFDaEYsSUFBSUMsU0FBUyxFQUFFaUIsR0FBRyxJQUFJLElBQUlqQixTQUFTLEVBQUU7WUFDckMsSUFBSUcsU0FBUyxFQUFFYyxHQUFHLElBQUksZ0JBQWdCO1lBQ3RDLElBQUlILFVBQVUsS0FBSyxJQUFJLEVBQUVHLEdBQUcsSUFBSSxrQkFBa0I7WUFDbEQsSUFBSWIsSUFBSSxFQUFFYSxHQUFHLElBQUksbUJBQW1CYixJQUFJLEVBQUU7WUFFMUMsTUFBTWMsSUFBSSxHQUFHLElBQUE5QixNQUFBLENBQUErQixPQUFLLEVBQUN2QixJQUFJLENBQUN3QixXQUFXLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN6RCxNQUFNQyxTQUFTLEdBQUcsc0JBQXNCdEIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMxRSxNQUFNdUIsT0FBTyxHQUFHM0IsSUFBSSxFQUFFMkIsT0FBTztZQUU3QixPQUNDakMsS0FBQSxDQUFBa0MsYUFBQSxDQUFDbEIsTUFBTTtjQUFBLEdBQUtEO1lBQUssR0FDaEJmLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU3hCLFNBQVMsRUFBRWlCO1lBQUcsR0FDdEIzQixLQUFBLENBQUFrQyxhQUFBLENBQUNyQyxHQUFBLENBQUFzQyxXQUFXO2NBQUNDLEdBQUcsRUFBRUgsT0FBTztjQUFFekIsTUFBTSxFQUFFQSxNQUFNO2NBQUU2QixHQUFHLEVBQUVsQixLQUFLO2NBQUVtQixJQUFJLEVBQUM7WUFBSSxHQUMvRHRDLEtBQUEsQ0FBQWtDLGFBQUEscUJBQ0NsQyxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBeUIsR0FDdkNWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ0MsSUFBSSxFQUFFMUI7WUFBSSxFQUFJLEVBQ3RCUCxLQUFLLEVBQUVlLEtBQUssR0FBR1IsSUFBSSxDQUFDLENBQ2hCLENBQ00sQ0FDQSxFQUVkZCxLQUFBLENBQUFrQyxhQUFBO2NBQVN4QixTQUFTLEVBQUM7WUFBc0IsR0FDeENWLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFrQixHQUNoQ1YsS0FBQSxDQUFBa0MsYUFBQSxDQUFDaEMsV0FBQSxDQUFBdUMsZ0JBQWdCO2NBQUNuQixLQUFLLEVBQUVBLEtBQUs7Y0FBRWYsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDM0MsRUFFTlAsS0FBQSxDQUFBa0MsYUFBQTtjQUFJeEIsU0FBUyxFQUFDO1lBQWEsR0FBRVMsS0FBSyxDQUFNLEVBQ3hDbkIsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQXNCLEdBQUVXLFdBQVcsQ0FBUSxDQUNsRCxFQUNUVCxRQUFRLEVBQ1RaLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBUXhCLFNBQVMsRUFBRXNCO1lBQVMsR0FDM0JoQyxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBZ0IsR0FDOUJWLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUFlLEdBQUVrQixJQUFJLENBQVEsRUFDN0M1QixLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBZ0IsR0FDOUJWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQy9CLFNBQUEsQ0FBQXVDLFFBQVE7Y0FBQ0MsUUFBUSxFQUFFckMsSUFBSSxDQUFDcUM7WUFBUSxFQUFJLENBQ2hDLENBQ0QsRUFFTjNDLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2pDLFFBQUEsQ0FBQTJDLHVCQUF1QixRQUN2QjVDLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQWlELGFBQWE7Y0FBQ0wsSUFBSSxFQUFDLElBQUk7Y0FBQ3JCLEtBQUssRUFBRVosS0FBSyxFQUFFdUMsT0FBTyxFQUFFQyxJQUFJO2NBQUVwQyxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUMzQyxDQUNsQixDQUNBLENBQ0Y7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUEsSUFBQWYsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sUUFBQSxHQUFBTixPQUFBO1VBRUEsSUFBQXFELE9BQUEsR0FBQXJELE9BQUE7VUFDQSxJQUFBc0QsTUFBQSxHQUFBdEQsT0FBQTtVQUVPO1VBQVUsU0FBVXVELHFCQUFxQkEsQ0FBQzdDLEtBQXVCO1lBQ3ZFLE1BQU07Y0FBRUUsS0FBSztjQUFFNEMsSUFBSTtjQUFFQztZQUFFLENBQUUsR0FBRy9DLEtBQUs7WUFDakMsTUFBTWdELGVBQWUsR0FBRyxNQUFNQyxLQUFLLElBQUc7Y0FDckMsSUFBSTtnQkFDSEEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCLE1BQU1DLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMsR0FBR1YsT0FBQSxDQUFBbkIsT0FBTSxDQUFDOEIsTUFBTSxDQUFDQyxPQUFPLGdCQUFnQlIsRUFBRSxFQUFFLENBQUM7Z0JBQ2pGSCxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdkQsS0FBSyxDQUFDd0QsUUFBUSxDQUFDQyxJQUFJLENBQUM7ZUFDbEMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7Z0JBQ2JDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDNUQsS0FBSyxDQUFDNkQsU0FBUyxFQUFFSCxHQUFHLENBQUM7O1lBRXJDLENBQUM7WUFFRCxPQUNDakUsS0FBQSxDQUFBa0MsYUFBQSxDQUFDakMsUUFBQSxDQUFBMkMsdUJBQXVCLFFBQ3RCTyxJQUFJLEtBQUssU0FBUyxJQUFJbkQsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdEMsTUFBQSxDQUFBaUQsYUFBYTtjQUFDTCxJQUFJLEVBQUMsTUFBTTtjQUFDckIsS0FBSyxFQUFFWixLQUFLLEVBQUV1QyxPQUFPLEVBQUVrQixJQUFJO2NBQUVLLE9BQU8sRUFBRWhCO1lBQWUsRUFBSSxFQUMzR3JELEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQWlELGFBQWE7Y0FBQ0wsSUFBSSxFQUFDLE9BQU87Y0FBQ3JCLEtBQUssRUFBRVosS0FBSyxFQUFFdUMsT0FBTyxFQUFFQyxJQUFJO2NBQUVwQyxJQUFJLEVBQUUsZ0JBQWdCeUMsRUFBRTtZQUFFLEVBQUksRUFDdEYsQ0FBQy9DLEtBQUssQ0FBQ2lFLFFBQVEsSUFBSW5CLElBQUksS0FBSyxTQUFTLElBQ3JDbkQsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdEMsTUFBQSxDQUFBaUQsYUFBYTtjQUFDTCxJQUFJLEVBQUMsV0FBVztjQUFDckIsS0FBSyxFQUFFWixLQUFLLEVBQUV1QyxPQUFPLEVBQUVDLElBQUk7Y0FBRXBDLElBQUksRUFBRSxjQUFjeUMsRUFBRTtZQUFFLEVBQ3JGLEVBRUEvQyxLQUFLLENBQUNpRSxRQUFRLElBQ2R0RSxLQUFBLENBQUFrQyxhQUFBLENBQUN0QyxNQUFBLENBQUFpRCxhQUFhO2NBQUNMLElBQUksRUFBQyxTQUFTO2NBQUNyQixLQUFLLEVBQUVaLEtBQUssRUFBRXVDLE9BQU8sRUFBRXlCLE9BQU87Y0FBRUYsT0FBTyxFQUFFaEUsS0FBSyxDQUFDeUMsT0FBTyxDQUFDeUI7WUFBTyxFQUM1RixDQUN3QjtVQUU1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQXZFLEtBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUE2RSxTQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQThFLGdCQUFBLEdBQUE5RSxPQUFBO1VBR087VUFBVSxTQUFVK0Usd0JBQXdCQSxDQUFDckUsS0FBdUI7WUFDMUUsTUFBTTtjQUFFTSxJQUFJO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFc0MsSUFBSSxHQUFHO1lBQVMsQ0FBRSxHQUFHOUMsS0FBSztZQUU3RCxJQUFJLENBQUNBLEtBQUssQ0FBQytDLEVBQUUsRUFBRTtjQUNkYyxPQUFPLENBQUNTLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRXRFLEtBQUssQ0FBQzs7WUFHdEQsTUFBTTtjQUFFQyxJQUFJO2NBQUVzRSxRQUFRLEdBQUc7WUFBSSxDQUFFLEdBQUd2RSxLQUFLO1lBRXZDLE1BQU1pQixLQUFLLEdBQUdoQixJQUFJLEVBQUVpQixVQUFVLEVBQUVELEtBQUssSUFBSSxFQUFFO1lBRTNDLElBQUksQ0FBQ2hCLElBQUksRUFBRWlCLFVBQVUsRUFBRUQsS0FBSyxJQUFJaEIsSUFBSSxDQUFDUSxJQUFJLEVBQUU7Y0FDMUM7Y0FDQVEsS0FBSyxDQUFDSSxJQUFJLENBQUNwQixJQUFJLENBQUNRLElBQUksQ0FBQzs7WUFHdEIsSUFBSSxDQUFDRCxTQUFTLElBQUksQ0FBQytELFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDeEMsT0FDQzVFLEtBQUEsQ0FBQWtDLGFBQUEscUJBQ0VyQixTQUFTLEdBQUdiLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3VDLGdCQUFBLENBQUFJLGVBQWU7Y0FBQ2hFLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEdBQUcsSUFBSSxFQUM1RCtELFFBQVEsR0FDUjVFLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFpQixHQUMvQlYsS0FBQSxDQUFBa0MsYUFBQSxDQUFDc0MsU0FBQSxDQUFBTSxRQUFRO2NBQUNGLFFBQVEsRUFBRXRFLElBQUksQ0FBQ3NFO1lBQVEsRUFBSSxDQUVoQyxHQUNILElBQUksQ0FDSTtVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBbEYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU8sV0FBQSxHQUFBUCxPQUFBO1VBR0EsSUFBQVEsU0FBQSxHQUFBUixPQUFBO1VBRUEsSUFBQU0sUUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQW9GLFdBQUEsR0FBQXBGLE9BQUE7VUFFTztVQUFVLFNBQVVxRixjQUFjQSxDQUFDM0UsS0FBdUI7WUFDaEUsTUFBTTtjQUFFTSxJQUFJO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFc0MsSUFBSSxHQUFHO1lBQVMsQ0FBRSxHQUFHOUMsS0FBSztZQUU3RCxJQUFJLENBQUNBLEtBQUssQ0FBQytDLEVBQUUsRUFBRTtjQUNkYyxPQUFPLENBQUNTLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRXRFLEtBQUssQ0FBQzs7WUFHdEQsTUFBTVUsS0FBSyxHQUFHSixJQUFJLEdBQUc7Y0FBRUE7WUFBSSxDQUFFLEdBQUcsRUFBRTtZQUNsQyxNQUFNSyxNQUFNLEdBQUdMLElBQUksR0FBR1osV0FBQSxDQUFBa0IsSUFBSSxHQUFHakIsS0FBSyxDQUFDa0IsUUFBUTtZQUMzQyxNQUFNO2NBQUVaLElBQUk7Y0FBRXNFLFFBQVEsR0FBRyxJQUFJO2NBQUVyRSxLQUFLO2NBQUVDLE1BQU07Y0FBRU0sSUFBSTtjQUFFTCxRQUFRO2NBQUVDO1lBQVMsQ0FBRSxHQUFHTCxLQUFLO1lBQ2pGLE1BQU1jLEtBQUssR0FBR2IsSUFBSSxDQUFDYSxLQUFLLElBQUliLElBQUksQ0FBQ2MsU0FBUztZQUMxQyxNQUFNQyxXQUFXLEdBQUdmLElBQUksQ0FBQ2UsV0FBVyxJQUFJZCxLQUFLLENBQUNELElBQUksQ0FBQ2UsV0FBVztZQUM5RCxNQUFNQyxLQUFLLEdBQUdoQixJQUFJLEVBQUVpQixVQUFVLEVBQUVELEtBQUssSUFBSSxFQUFFO1lBQzNDLE1BQU1FLFVBQVUsR0FBRyxJQUFBOUIsTUFBQSxDQUFBK0IsYUFBYSxHQUFFO1lBQ2xDLElBQUksQ0FBQ25CLElBQUksRUFBRWlCLFVBQVUsRUFBRUQsS0FBSyxJQUFJaEIsSUFBSSxDQUFDUSxJQUFJLEVBQUU7Y0FDMUM7Y0FDQVEsS0FBSyxDQUFDSSxJQUFJLENBQUNwQixJQUFJLENBQUNRLElBQUksQ0FBQzs7WUFHdEIsSUFBSWEsR0FBRyxHQUFHLGdDQUFnQ2xCLFFBQVEsR0FBRyx1QkFBdUIsR0FBRyxFQUFFLEVBQUU7WUFDbkYsSUFBSUMsU0FBUyxFQUFFaUIsR0FBRyxJQUFJLElBQUlqQixTQUFTLEVBQUU7WUFDckMsSUFBSUcsU0FBUyxFQUFFYyxHQUFHLElBQUksZ0JBQWdCO1lBQ3RDLElBQUlILFVBQVUsS0FBSyxJQUFJLEVBQUVHLEdBQUcsSUFBSSxrQkFBa0I7WUFDbEQsSUFBSXRCLEtBQUssQ0FBQ2lFLFFBQVEsRUFBRTNDLEdBQUcsSUFBSSx3QkFBd0I7WUFFbkQsTUFBTUMsSUFBSSxHQUFHLElBQUE5QixNQUFBLENBQUErQixPQUFLLEVBQUN2QixJQUFJLENBQUN3QixXQUFXLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN6RCxNQUFNQyxTQUFTLEdBQUcsc0JBQXNCdEIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUxRSxPQUNDVixLQUFBLENBQUFrQyxhQUFBLENBQUNsQixNQUFNO2NBQUEsR0FBS0Q7WUFBSyxHQUNoQmYsS0FBQSxDQUFBa0MsYUFBQTtjQUFBLFdBQWtCN0IsS0FBSyxDQUFDK0MsRUFBRTtjQUFFMUMsU0FBUyxFQUFFaUI7WUFBRyxHQUN6QzNCLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3JDLEdBQUEsQ0FBQXNDLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFOUIsSUFBSSxDQUFDMkIsT0FBTztjQUFFekIsTUFBTSxFQUFFQSxNQUFNO2NBQUU2QixHQUFHLEVBQUVsQixLQUFLO2NBQUVtQixJQUFJLEVBQUMsSUFBSTtjQUFDeEIsSUFBSSxFQUFFQTtZQUFJLEdBQy9FZCxLQUFBLENBQUFrQyxhQUFBLENBQUM2QyxXQUFBLENBQUFMLHdCQUF3QjtjQUFBLEdBQUtyRTtZQUFLLEVBQUksQ0FDMUIsRUFFZEwsS0FBQSxDQUFBa0MsYUFBQTtjQUFTeEIsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDVixLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBa0IsR0FDaENWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQXVDLGdCQUFnQjtjQUFDbkIsS0FBSyxFQUFFQSxLQUFLO2NBQUVmLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQzNDLEVBRU5QLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBSXhCLFNBQVMsRUFBQztZQUFhLEdBQUVTLEtBQUssQ0FBTSxFQUN4Q25CLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUFzQixHQUFFVyxXQUFXLENBQVEsQ0FDbEQsRUFDVFQsUUFBUSxFQUNUWixLQUFBLENBQUFrQyxhQUFBO2NBQVF4QixTQUFTLEVBQUVzQjtZQUFTLEdBQzNCaEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFLeEIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVixLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBZSxHQUFFa0IsSUFBSSxDQUFRLEVBQzdDNUIsS0FBQSxDQUFBa0MsYUFBQTtjQUFLeEIsU0FBUyxFQUFDO1lBQWdCLEdBQzlCVixLQUFBLENBQUFrQyxhQUFBLENBQUMvQixTQUFBLENBQUF1QyxRQUFRO2NBQUNDLFFBQVEsRUFBRXJDLElBQUksQ0FBQ3FDO1lBQVEsRUFBSSxDQUNoQyxDQUNELEVBQ04zQyxLQUFBLENBQUFrQyxhQUFBLENBQUNqQyxRQUFBLENBQUFpRCxxQkFBcUI7Y0FBQSxHQUFLN0M7WUFBSyxFQUFJLENBQzVCLENBQ0EsQ0FDRjtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BFQSxJQUFBTCxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBc0YsUUFBQSxHQUFBdEYsT0FBQTtVQUVBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUVPO1VBQVUsU0FBVXVGLFFBQVFBLENBQUM3RSxLQUEwQjtZQUM3RCxNQUFNO2NBQUVLLFNBQVM7Y0FBRUUsUUFBUTtjQUFFdUUsTUFBTTtjQUFFeEU7WUFBSSxDQUFFLEdBQUdOLEtBQUs7WUFDbkQsTUFBTXNCLEdBQUcsR0FBR2pCLFNBQVMsR0FBRyxHQUFHeUUsTUFBTSxTQUFTekUsU0FBUyxFQUFFLEdBQUcsR0FBR3lFLE1BQU0sT0FBTztZQUN4RSxNQUFNcEUsS0FBSyxHQUF3QkosSUFBSSxHQUFHO2NBQUVBO1lBQUksQ0FBRSxHQUFHLEVBQUU7WUFDdkQsTUFBTUssTUFBTSxHQUFHTCxJQUFJLEdBQUdaLFdBQUEsQ0FBQWtCLElBQUksR0FBRyxLQUFLO1lBQ2xDLElBQUlOLElBQUksRUFBRTtjQUNUSSxLQUFLLENBQUNMLFNBQVMsR0FBRyxjQUFjQSxTQUFTLEVBQUU7O1lBRzVDLE9BQ0NWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQytDLFFBQUEsQ0FBQUcsV0FBVyxDQUFDQyxRQUFRO2NBQ3BCQyxLQUFLLEVBQUU7Z0JBQ05ILE1BQU0sRUFBRTlFLEtBQUssQ0FBQzhFLE1BQU0sR0FBRzlFLEtBQUssQ0FBQzhFLE1BQU0sR0FBRzs7WUFDdEMsR0FFRG5GLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2xCLE1BQU07Y0FBQSxHQUFLRDtZQUFLLEdBQUdILFFBQVEsQ0FBVSxDQUNoQjtVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQVosS0FBQSxHQUFBTCxPQUFBO1VBT08sTUFBTXlGLFdBQVcsR0FBQUcsT0FBQSxDQUFBSCxXQUFBLEdBQUdwRixLQUFLLENBQUN3RixhQUFhLENBQUMsRUFBc0IsQ0FBQztVQUMvRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTXpGLEtBQUssQ0FBQzBGLFVBQVUsQ0FBQ04sV0FBVyxDQUFDO1VBQUNHLE9BQUEsQ0FBQUUsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JsRSxJQUFBekYsS0FBQSxHQUFBTCxPQUFBO1VBRUEsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFFTztVQUFVLFNBQVVnRyxjQUFjQSxDQUFDdEYsS0FBZ0I7WUFDekQsTUFBTTtjQUFFSyxTQUFTO2NBQUVFO1lBQVEsQ0FBRSxHQUFHUCxLQUFLO1lBQ3JDLE1BQU07Y0FBRThFO1lBQU0sQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ25DLE1BQU05RCxHQUFHLEdBQUdqQixTQUFTLEdBQUcsR0FBR3lFLE1BQU0saUJBQWlCekUsU0FBUyxFQUFFLEdBQUcsR0FBR3lFLE1BQU0sZUFBZTtZQUV4RixPQUFPbkYsS0FBQSxDQUFBa0MsYUFBQTtjQUFLeEIsU0FBUyxFQUFFaUI7WUFBRyxHQUFHZixRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQVosS0FBQSxHQUFBTCxPQUFBO1VBRUEsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFFTztVQUFVLFNBQVVpRyxjQUFjQSxDQUFDdkYsS0FBZ0I7WUFDekQsTUFBTTtjQUFFSyxTQUFTO2NBQUVFO1lBQVEsQ0FBRSxHQUFHUCxLQUFLO1lBQ3JDLE1BQU07Y0FBRThFO1lBQU0sQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQVEsY0FBYyxHQUFFO1lBQ25DLE1BQU05RCxHQUFHLEdBQUdqQixTQUFTLEdBQUcsR0FBR3lFLE1BQU0saUJBQWlCekUsU0FBUyxFQUFFLEdBQUcsR0FBR3lFLE1BQU0sZUFBZTtZQUN4RixPQUFPbkYsS0FBQSxDQUFBa0MsYUFBQTtjQUFLeEIsU0FBUyxFQUFFaUI7WUFBRyxHQUFHZixRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQVosS0FBQSxHQUFBTCxPQUFBO1VBRUEsSUFBQXNGLFFBQUEsR0FBQXRGLE9BQUE7VUFFTztVQUFVLFNBQVVrRyxtQkFBbUJBLENBQUN4RixLQUFnQjtZQUM5RCxNQUFNO2NBQUVLLFNBQVM7Y0FBRUU7WUFBUSxDQUFFLEdBQUdQLEtBQUs7WUFDckMsTUFBTTtjQUFFOEU7WUFBTSxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBUSxjQUFjLEdBQUU7WUFFbkMsT0FBT3pGLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFpQixHQUFFRSxRQUFRLENBQU87VUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQWhCLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUFzRCxNQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQW1HLEtBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBb0csT0FBQSxHQUFBcEcsT0FBQTtVQUNBLElBQUFxRyxPQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQXNHLFlBQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBdUcsTUFBQSxHQUFBdkcsT0FBQTtVQUNBLElBQUF3RyxRQUFBLEdBQUF4RyxPQUFBO1VBT087VUFBVSxTQUFVeUcsYUFBYUEsQ0FBQy9GLEtBQXNCO1lBQzlELE1BQU07Y0FBRUssU0FBUztjQUFFSCxLQUFLO2NBQUVEO1lBQUksQ0FBRSxHQUFHRCxLQUFLO1lBQ3hDLElBQUlnRyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0gsUUFBQSxDQUFBSSxjQUFjLENBQUNDLE1BQU0sQ0FBQztZQUMzRCxJQUFJN0UsR0FBRyxHQUFHakIsU0FBUyxHQUFHLGtCQUFrQkEsU0FBUyxFQUFFLEdBQUcsZ0JBQWdCO1lBQ3RFLElBQUkyRixRQUFRLEVBQUUxRSxHQUFHLElBQUksY0FBYztZQUNuQyxNQUFNcUMsSUFBSSxHQUFHVixLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1rRCxPQUFPLEdBQUduRCxLQUFLLENBQUNvRCxhQUFhLENBQUNDLE9BQU8sQ0FBQzNDLElBQUk7Y0FDaERSLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMrQyxPQUFPLENBQUM7Y0FDdEN4RCxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdkQsS0FBSyxDQUFDd0QsUUFBUSxDQUFDNkMsTUFBTSxDQUFDO1lBQ3JDLENBQUM7WUFFRCxPQUNDNUcsS0FBQSxDQUFBa0MsYUFBQSxDQUFDNEQsS0FBQSxDQUFBWixRQUFRO2NBQUN4RSxTQUFTLEVBQUVpQixHQUFHO2NBQUV3RCxNQUFNLEVBQUMsV0FBVztjQUFDeEUsSUFBSSxFQUFFLG9CQUFvQkwsSUFBSSxDQUFDOEMsRUFBRTtZQUFFLEdBQy9FcEQsS0FBQSxDQUFBa0MsYUFBQSxDQUFDOEQsT0FBQSxDQUFBSixjQUFjLFFBQ2Q1RixLQUFBLENBQUFrQyxhQUFBO2NBQUl4QixTQUFTLEVBQUM7WUFBYSxHQUFFSixJQUFJLENBQUN1RyxJQUFJLENBQU0sQ0FDNUIsRUFDakI3RyxLQUFBLENBQUFrQyxhQUFBLENBQUM2RCxPQUFBLENBQUFKLGNBQWMsUUFDZDNGLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2dFLE1BQUEsQ0FBQVksZ0JBQWdCO2NBQUNDLElBQUksRUFBRXpHLElBQUksQ0FBQzBHO1lBQUssRUFBSSxFQUN0Q2hILEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQytELFlBQUEsQ0FBQUosbUJBQW1CLFFBQ2xCdkYsSUFBSSxDQUFDMkcsSUFBSSxHQUNUakgsS0FBQSxDQUFBa0MsYUFBQTtjQUNDbUMsT0FBTyxFQUFFTCxJQUFJO2NBQUEsYUFDRjFELElBQUksQ0FBQzJHLElBQUk7Y0FDcEJ2RyxTQUFTLEVBQUM7WUFBK0MsR0FFekRWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQWlELGFBQWE7Y0FBQ2dFLElBQUksRUFBQyxNQUFNO2NBQUMxRixLQUFLLEVBQUVaLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQ2tCLElBQUk7Y0FBRXRELFNBQVMsRUFBQztZQUFRLEVBQUcsRUFDM0VWLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFjLEdBQzVCVixLQUFBLENBQUFrQyxhQUFBLGVBQU8zQixLQUFLLENBQUMyRyxVQUFVLEVBQUVELElBQUksQ0FBUSxFQUNyQ2pILEtBQUEsQ0FBQWtDLGFBQUEsY0FBTTVCLElBQUksQ0FBQzJHLElBQUksQ0FBTyxDQUNqQixDQUNELEdBRU5qSCxLQUFBLENBQUFrQyxhQUFBLGFBQ0EsRUFDRGxDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFpQixHQUM5QkwsS0FBSyxDQUFDeUMsT0FBTyxFQUFFcUUsTUFBTSxJQUNyQm5ILEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQWlELGFBQWE7Y0FDYm5DLFNBQVMsRUFBQyxRQUFRO2NBQ2xCOEIsSUFBSSxFQUFDLE9BQU87Y0FDWjZCLE9BQU8sRUFBRWhFLEtBQUssQ0FBQ3lDLE9BQU8sQ0FBQ3FFLE1BQU07Y0FDN0JoRyxLQUFLLEVBQUVaLEtBQUssQ0FBQ3VDLE9BQU8sQ0FBQ3FFO1lBQU0sRUFFNUIsQ0FDSSxDQUNlLENBQ04sQ0FDUDtVQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQSxJQUFBbkgsS0FBQSxHQUFBTCxPQUFBO1VBRUEsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQU8sV0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQTZFLFNBQUEsR0FBQTdFLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9BQUE7VUFFQSxJQUFBd0csUUFBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUF5SCxhQUFBLEdBQUF6SCxPQUFBO1VBRU87VUFBVSxTQUFVMEgsU0FBU0EsQ0FBQztZQUNwQy9HLElBQUk7WUFDSnNFLFFBQVEsR0FBRyxJQUFJO1lBQ2ZyRSxLQUFLO1lBQ0xLLFFBQVE7WUFDUkosTUFBTTtZQUNOTSxJQUFJO1lBQ0p1RCxPQUFPO1lBQ1A1RCxRQUFRO1lBQ1I2RCxRQUFRO1lBQ1I1RDtVQUFTLENBQ0c7WUFDWixNQUFNUyxLQUFLLEdBQUdiLElBQUksQ0FBQ2EsS0FBSyxJQUFJYixJQUFJLENBQUNjLFNBQVM7WUFDMUMsTUFBTUMsV0FBVyxHQUFHZixJQUFJLENBQUNlLFdBQVcsSUFBSWQsS0FBSyxDQUFDRCxJQUFJLENBQUNlLFdBQVc7WUFDOUQsTUFBTUMsS0FBSyxHQUFHaEIsSUFBSSxFQUFFaUIsVUFBVSxFQUFFRCxLQUFLLElBQUksRUFBRTtZQUMzQyxNQUFNLENBQUNnRyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHdkgsS0FBSyxDQUFDd0gsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV6RHhILEtBQUssQ0FBQ3lILFNBQVMsQ0FBQyxNQUFLO2NBQ3BCRixhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixJQUFJLENBQUNqSCxJQUFJLEVBQUVpQixVQUFVLEVBQUVELEtBQUssSUFBSWhCLElBQUksQ0FBQ1EsSUFBSSxFQUFFO2NBQzFDO2NBQ0FRLEtBQUssQ0FBQ0ksSUFBSSxDQUFDcEIsSUFBSSxDQUFDUSxJQUFJLENBQUM7O1lBR3RCLElBQUl1RixRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0gsUUFBQSxDQUFBSSxjQUFjLENBQUNDLE1BQU0sQ0FBQztZQUUzRCxJQUFJN0UsR0FBRyxHQUFHLGVBQWVsQixRQUFRLEdBQUcsdUJBQXVCLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLElBQUlDLFNBQVMsRUFBRWlCLEdBQUcsSUFBSSxJQUFJakIsU0FBUyxFQUFFO1lBQ3JDLElBQUkyRixRQUFRLEVBQUUxRSxHQUFHLElBQUksY0FBYztZQUNuQyxJQUFJMkMsUUFBUSxFQUFFM0MsR0FBRyxJQUFJLHdCQUF3QjtZQUU3QyxPQUNDM0IsS0FBQSxDQUFBa0MsYUFBQSxDQUFDa0YsYUFBQSxDQUFBTSxNQUFNLENBQUNDLE9BQU87Y0FDZHRELE9BQU8sRUFBRUEsT0FBTztjQUNoQnVELE9BQU8sRUFBRSxDQUFDTixVQUFVLEdBQUc7Z0JBQUVPLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxDQUFDLEVBQUU7Y0FBRSxDQUFFLEdBQUcsS0FBSztjQUNwREMsT0FBTyxFQUFFO2dCQUFFRixPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFO2NBQUMsQ0FBRTtjQUM3QkUsVUFBVSxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsSUFBSTtnQkFBRUMsSUFBSSxFQUFFO2NBQVMsQ0FBRTtjQUMvQ3hILFNBQVMsRUFBRWlCO1lBQUcsR0FFZDNCLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3JDLEdBQUEsQ0FBQXNDLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFOUIsSUFBSSxDQUFDMkIsT0FBTztjQUFFekIsTUFBTSxFQUFFQSxNQUFNO2NBQUU2QixHQUFHLEVBQUVsQixLQUFLO2NBQUVtQixJQUFJLEVBQUMsSUFBSTtjQUFDeEIsSUFBSSxFQUFFQTtZQUFJLEdBQzlFOEQsUUFBUSxHQUNSNUUsS0FBQSxDQUFBa0MsYUFBQSxxQkFDQ2xDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFpQixHQUMvQlYsS0FBQSxDQUFBa0MsYUFBQSxDQUFDc0MsU0FBQSxDQUFBTSxRQUFRO2NBQUNGLFFBQVEsRUFBRXRFLElBQUksQ0FBQ3NFO1lBQVEsRUFBSSxFQUNyQzVFLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQy9CLFNBQUEsQ0FBQXVDLFFBQVE7Y0FBQ0MsUUFBUSxFQUFFckMsSUFBSSxDQUFDcUM7WUFBUSxFQUFJLENBQ2hDLENBQ00sR0FDVixJQUFJLENBQ0ssRUFFZDNDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU3hCLFNBQVMsRUFBQztZQUFzQixHQUN2Q1ksS0FBSyxFQUFFNkcsTUFBTSxHQUFHLENBQUMsR0FDakJuSSxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBa0IsR0FDaENWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQXVDLGdCQUFnQjtjQUFDbEMsS0FBSyxFQUFFQSxLQUFLO2NBQUVlLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQzNDLEdBQ0gsSUFBSSxFQUVSdEIsS0FBQSxDQUFBa0MsYUFBQTtjQUFJeEIsU0FBUyxFQUFDO1lBQWEsR0FBRVMsS0FBSyxDQUFNLEVBQ3hDbkIsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQXNCLEdBQUVXLFdBQVcsQ0FBUSxDQUNsRCxFQUNUVCxRQUFRLENBQ087VUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUVBLElBQUFaLEtBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUVBLElBQUFFLEdBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFPLFdBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUE2RSxTQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQVEsU0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQXdHLFFBQUEsR0FBQXhHLE9BQUE7VUFFTztVQUFVLFNBQVV5SSxTQUFTQSxDQUFDO1lBQUV6SCxJQUFJO1lBQUVDLFFBQVE7WUFBRSxHQUFHUDtVQUFLLENBQWM7WUFDNUUsTUFBTVUsS0FBSyxHQUF3QkosSUFBSSxHQUFHO2NBQUVBO1lBQUksQ0FBRSxHQUFHLEVBQUU7WUFDdkQsTUFBTSxDQUFDMkcsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3ZILEtBQUssQ0FBQ3dILFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekR4SCxLQUFLLENBQUN5SCxTQUFTLENBQUMsTUFBSztjQUNwQkYsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sSUFBSTVHLElBQUksRUFBRTtjQUNUSSxLQUFLLENBQUNMLFNBQVMsR0FBRyxjQUFjSyxLQUFLLENBQUNMLFNBQVMsRUFBRTs7WUFHbEQsTUFBTTtjQUFFSixJQUFJO2NBQUVzRSxRQUFRLEdBQUcsSUFBSTtjQUFFckUsS0FBSztjQUFFQyxNQUFNO2NBQUVNLElBQUk7Y0FBRXVELE9BQU87Y0FBRTVELFFBQVE7Y0FBRUM7WUFBUyxDQUFFLEdBQUdMLEtBQUs7WUFDMUYsTUFBTWMsS0FBSyxHQUFHYixJQUFJLENBQUNhLEtBQUssSUFBSWIsSUFBSSxDQUFDYyxTQUFTO1lBQzFDLE1BQU1DLFdBQVcsR0FBR2YsSUFBSSxDQUFDZSxXQUFXLElBQUlkLEtBQUssQ0FBQ0QsSUFBSSxDQUFDZSxXQUFXO1lBQzlELE1BQU1DLEtBQUssR0FBR2hCLElBQUksRUFBRWlCLFVBQVUsRUFBRUQsS0FBSyxJQUFJLEVBQUU7WUFDM0MsSUFBSSxDQUFDaEIsSUFBSSxFQUFFaUIsVUFBVSxFQUFFRCxLQUFLLElBQUloQixJQUFJLENBQUNRLElBQUksRUFBRTtjQUMxQztjQUNBUSxLQUFLLENBQUNJLElBQUksQ0FBQ3BCLElBQUksQ0FBQ1EsSUFBSSxDQUFDOztZQUd0QixJQUFJdUYsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNILFFBQUEsQ0FBQUksY0FBYyxDQUFDQyxNQUFNLENBQUM7WUFFM0QsSUFBSTdFLEdBQUcsR0FBRyxlQUFlbEIsUUFBUSxHQUFHLHVCQUF1QixHQUFHLEVBQUUsRUFBRTtZQUVsRSxJQUFJQyxTQUFTLEVBQUVpQixHQUFHLElBQUksSUFBSWpCLFNBQVMsRUFBRTtZQUNyQyxJQUFJMkYsUUFBUSxFQUFFMUUsR0FBRyxJQUFJLGNBQWM7WUFFbkMsT0FDQzNCLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ25DLFdBQUEsQ0FBQWtCLElBQUk7Y0FBQSxHQUFLRjtZQUFLLEdBQ2RmLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU21DLE9BQU8sRUFBRUEsT0FBTztjQUFFM0QsU0FBUyxFQUFFaUI7WUFBRyxHQUN4QzNCLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3JDLEdBQUEsQ0FBQXNDLFdBQVc7Y0FBQ0MsR0FBRyxFQUFFOUIsSUFBSSxDQUFDMkIsT0FBTztjQUFFekIsTUFBTSxFQUFFQSxNQUFNO2NBQUU2QixHQUFHLEVBQUVsQixLQUFLO2NBQUVtQixJQUFJLEVBQUMsSUFBSTtjQUFDeEIsSUFBSSxFQUFFQTtZQUFJLEdBQzlFOEQsUUFBUSxHQUNSNUUsS0FBQSxDQUFBa0MsYUFBQSxxQkFDQ2xDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFpQixHQUMvQlYsS0FBQSxDQUFBa0MsYUFBQSxDQUFDc0MsU0FBQSxDQUFBTSxRQUFRO2NBQUNGLFFBQVEsRUFBRXRFLElBQUksQ0FBQ3NFO1lBQVEsRUFBSSxFQUNyQzVFLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQy9CLFNBQUEsQ0FBQXVDLFFBQVE7Y0FBQ0MsUUFBUSxFQUFFckMsSUFBSSxDQUFDcUM7WUFBUSxFQUFJLENBQ2hDLENBQ00sR0FDVixJQUFJLENBQ0ssRUFFZDNDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU3hCLFNBQVMsRUFBQztZQUFzQixHQUN2Q1ksS0FBSyxFQUFFNkcsTUFBTSxHQUFHLENBQUMsR0FDakJuSSxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBa0IsR0FDaENWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2hDLFdBQUEsQ0FBQXVDLGdCQUFnQjtjQUFDbkIsS0FBSyxFQUFFQSxLQUFLO2NBQUVmLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQzNDLEdBQ0gsSUFBSSxFQUVSUCxLQUFBLENBQUFrQyxhQUFBLGlCQUNDbEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQWlCLEdBQUVILEtBQUssQ0FBQ0QsSUFBSSxDQUFDK0gsVUFBVSxDQUFRLEVBQ2hFckksS0FBQSxDQUFBa0MsYUFBQTtjQUFJeEIsU0FBUyxFQUFDO1lBQWEsR0FBRVMsS0FBSyxDQUFNLENBQ2hDLEVBQ1RuQixLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBc0IsR0FBRVcsV0FBVyxDQUFRLENBQ2xELEVBQ1RULFFBQVEsQ0FDQSxDQUNKO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVBLElBQUFaLEtBQUEsR0FBQUwsT0FBQTtVQVdPO1VBQVUsU0FBVWlELHVCQUF1QkEsQ0FBQztZQUFFaEM7VUFBUSxJQUFhO1lBQUUwSCxRQUFRLEVBQUU7VUFBSSxDQUFFO1lBQzNGLE9BQ0N0SSxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBaUMsR0FDL0NWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQWxDLEtBQUEsQ0FBQWtCLFFBQUEsUUFBR04sUUFBUSxDQUFJLENBQ1Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQVosS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQTRJLFNBQUEsR0FBQTVJLE9BQUE7VUFTTztVQUFVLFNBQVU2SSxnQkFBZ0JBLENBQzFDO1lBQUVsSSxJQUFJO1lBQUVJLFNBQVM7WUFBRTRILFFBQVEsR0FBRyxJQUFJO1lBQUUxSDtVQUFRLElBQWE7WUFBRTBILFFBQVEsRUFBRTtVQUFJLENBQUU7WUFFM0UsTUFBTUcsU0FBUyxHQUFHbkksSUFBSSxDQUFDMEcsS0FBSyxJQUFJMUcsSUFBSSxDQUFDb0ksT0FBTztZQUM1QyxNQUFNOUcsSUFBSSxHQUFHLElBQUE5QixNQUFBLENBQUErQixPQUFLLEVBQUN2QixJQUFJLENBQUN3QixXQUFXLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUN6RCxNQUFNSixHQUFHLEdBQUcsc0JBQXNCakIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUVwRSxPQUNDVixLQUFBLENBQUFrQyxhQUFBO2NBQVF4QixTQUFTLEVBQUVpQjtZQUFHLEdBQ3JCM0IsS0FBQSxDQUFBa0MsYUFBQTtjQUFLeEIsU0FBUyxFQUFDO1lBQWdCLEdBQUU0SCxRQUFRLElBQUl0SSxLQUFBLENBQUFrQyxhQUFBLENBQUNxRyxTQUFBLENBQUFJLFFBQVE7Y0FBQzVCLElBQUksRUFBRTBCLFNBQVM7Y0FBRTdHLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQU8sRUFDN0Y1QixLQUFBLENBQUFrQyxhQUFBLENBQUFsQyxLQUFBLENBQUFrQixRQUFBLFFBQUdOLFFBQVEsQ0FBSSxDQUNQO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUFaLEtBQUEsR0FBQUwsT0FBQTtVQUVBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFpSixVQUFBLEdBQUFqSixPQUFBO1VBR087VUFBVSxTQUFVa0osVUFBVUEsQ0FBQztZQUFFbEksSUFBSTtZQUFFQyxRQUFRO1lBQUUsR0FBR1A7VUFBSyxDQUFjO1lBQzdFLE1BQU1VLEtBQUssR0FBd0JKLElBQUksR0FBRztjQUFFQTtZQUFJLENBQUUsR0FBRyxFQUFFO1lBQ3ZELE1BQU1LLE1BQU0sR0FBR0wsSUFBSSxHQUFHWixXQUFBLENBQUFrQixJQUFJLEdBQUdqQixLQUFLLENBQUNrQixRQUFRO1lBQzNDLElBQUlQLElBQUksRUFBRTtjQUNUSSxLQUFLLENBQUNMLFNBQVMsR0FBRyxjQUFjSyxLQUFLLENBQUNMLFNBQVMsRUFBRTs7WUFJbEQsT0FDQ1YsS0FBQSxDQUFBa0MsYUFBQSxDQUFDbEIsTUFBTTtjQUFBLEdBQUtEO1lBQUssR0FDaEJmLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQzBHLFVBQUEsQ0FBQXZCLFNBQVM7Y0FBQSxHQUFLaEg7WUFBSyxHQUFHTyxRQUFRLENBQWEsQ0FDcEM7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQWtJLE1BQUEsR0FBQW5KLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBb0osTUFBQSxHQUFBcEosT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQU9NLFNBQVVxSixhQUFhQSxDQUFDO1lBQUV4RyxJQUFJO1lBQUV5RyxRQUFRO1lBQUU5SCxLQUFLO1lBQUVFO1VBQVcsQ0FBdUI7WUFDeEYsTUFBTSxDQUFDNkgsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR0wsTUFBQSxDQUFBakgsT0FBSyxDQUFDMkYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUU3QyxNQUFNLENBQUM0QixLQUFLLEVBQUU3SSxLQUFLLENBQUMsR0FBRyxJQUFBYixNQUFBLENBQUEySixRQUFRLEVBQUMsMkJBQTJCLENBQUM7WUFFNUQsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU1ILE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFDdkMsTUFBTUssYUFBYSxHQUFHakcsS0FBSyxJQUFHO2NBQzdCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QitGLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFFRCxNQUFNRSxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLE1BQU1QLFFBQVEsRUFBRTtjQUNoQkssVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUVELE9BQ0NSLE1BQUEsQ0FBQWpILE9BQUEsQ0FBQUssYUFBQSxDQUFBNEcsTUFBQSxDQUFBakgsT0FBQSxDQUFBWCxRQUFBLFFBQ0M0SCxNQUFBLENBQUFqSCxPQUFBLENBQUFLLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQWlELGFBQWE7Y0FBQ0wsSUFBSSxFQUFFQSxJQUFJO2NBQUU2QixPQUFPLEVBQUVrRjtZQUFhLEVBQUksRUFDcERMLElBQUksSUFDSkosTUFBQSxDQUFBakgsT0FBQSxDQUFBSyxhQUFBLENBQUM2RyxNQUFBLENBQUFVLFlBQVk7Y0FBQ0MsSUFBSTtjQUFDRixTQUFTLEVBQUVBLFNBQVM7Y0FBRUcsUUFBUSxFQUFFTDtZQUFVLEdBQzVEUixNQUFBLENBQUFqSCxPQUFBLENBQUFLLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQyxlQUFlO2NBQUMyRCxPQUFPLEVBQUVpRjtZQUFVLEVBQUksRUFDdERSLE1BQUEsQ0FBQWpILE9BQUEsQ0FBQUssYUFBQTtjQUFLeEIsU0FBUyxFQUFDO1lBQWUsR0FDN0JvSSxNQUFBLENBQUFqSCxPQUFBLENBQUFLLGFBQUEsYUFBS2YsS0FBSyxDQUFNLEVBQ2hCMkgsTUFBQSxDQUFBakgsT0FBQSxDQUFBSyxhQUFBLFlBQUliLFdBQVcsQ0FBSyxDQUNmLENBRVAsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBckIsS0FBQSxHQUFBTCxPQUFBO1VBRUEsSUFBQW1HLEtBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBcUcsT0FBQSxHQUFBckcsT0FBQTtVQUNBLElBQUFvRyxPQUFBLEdBQUFwRyxPQUFBO1VBQ0EsSUFBQXNHLFlBQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBdUcsTUFBQSxHQUFBdkcsT0FBQTtVQUNBLElBQUFzRCxNQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBS087VUFBVSxTQUFVaUssZ0JBQWdCQSxDQUFDdkosS0FBeUI7WUFDcEUsTUFBTTtjQUFFSyxTQUFTO2NBQUVILEtBQUs7Y0FBRUQ7WUFBSSxDQUFFLEdBQUdELEtBQUs7WUFDeEMsTUFBTXNCLEdBQUcsR0FBR2pCLFNBQVMsR0FBRyxxQkFBcUJBLFNBQVMsRUFBRSxHQUFHLG1CQUFtQjtZQUM5RSxNQUFNc0QsSUFBSSxHQUFHVixLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1rRCxPQUFPLEdBQUduRCxLQUFLLENBQUNvRCxhQUFhLENBQUNDLE9BQU8sQ0FBQzNDLElBQUk7Y0FDaERSLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMrQyxPQUFPLENBQUM7Y0FDdEN4RCxNQUFBLENBQUFZLEtBQUssQ0FBQ0MsT0FBTyxDQUFDdkQsS0FBSyxDQUFDd0QsUUFBUSxDQUFDNkMsTUFBTSxDQUFDO1lBQ3JDLENBQUM7WUFDRCxPQUNDNUcsS0FBQSxDQUFBa0MsYUFBQSxDQUFDNEQsS0FBQSxDQUFBWixRQUFRO2NBQUN4RSxTQUFTLEVBQUVpQixHQUFHO2NBQUV3RCxNQUFNLEVBQUMsY0FBYztjQUFDeEUsSUFBSSxFQUFFLHVCQUF1QkwsSUFBSSxDQUFDOEMsRUFBRTtZQUFFLEdBQ3JGcEQsS0FBQSxDQUFBa0MsYUFBQSxDQUFDOEQsT0FBQSxDQUFBSixjQUFjLFFBQ2Q1RixLQUFBLENBQUFrQyxhQUFBO2NBQUl4QixTQUFTLEVBQUM7WUFBYSxHQUFFSixJQUFJLENBQUN1RyxJQUFJLENBQU0sQ0FDNUIsRUFDakI3RyxLQUFBLENBQUFrQyxhQUFBLENBQUM2RCxPQUFBLENBQUFKLGNBQWMsUUFDZDNGLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2dFLE1BQUEsQ0FBQVksZ0JBQWdCO2NBQUNDLElBQUksRUFBRXpHLElBQUksQ0FBQzBHO1lBQUssRUFBSSxFQUN0Q2hILEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQytELFlBQUEsQ0FBQUosbUJBQW1CLFFBQ2xCdkYsSUFBSSxDQUFDMkcsSUFBSSxHQUNUakgsS0FBQSxDQUFBa0MsYUFBQTtjQUNDbUMsT0FBTyxFQUFFTCxJQUFJO2NBQUEsYUFDRjFELElBQUksQ0FBQzJHLElBQUk7Y0FDcEJ2RyxTQUFTLEVBQUM7WUFBK0MsR0FFekRWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQTJDLE9BQU87Y0FBQ3NFLElBQUksRUFBQztZQUFNLEVBQUcsRUFDdkI3RyxLQUFBLENBQUFrQyxhQUFBLGNBQ0NsQyxLQUFBLENBQUFrQyxhQUFBLGlDQUE0QixFQUM1QmxDLEtBQUEsQ0FBQWtDLGFBQUEsY0FBTTVCLElBQUksQ0FBQzJHLElBQUksQ0FBTyxDQUNqQixDQUNELEdBRU5qSCxLQUFBLENBQUFrQyxhQUFBLGFBQ0EsRUFDRGxDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFpQixHQUMvQlYsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdEMsTUFBQSxDQUFBaUQsYUFBYTtjQUFDbkMsU0FBUyxFQUFDLFFBQVE7Y0FBQzhCLElBQUksRUFBQztZQUFRLEVBQUcsQ0FDN0MsQ0FDZSxDQUNOLENBQ1A7VUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREEsSUFBQTVDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrSyxLQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQW1KLE1BQUEsR0FBQW5KLE9BQUE7VUFFTSxTQUFVOEMsZ0JBQWdCQSxDQUFDO1lBQUVuQixLQUFLO1lBQUVmO1VBQUssQ0FBRTtZQUNoRCxJQUFJLENBQUNlLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsTUFBTXdJLElBQUksR0FBR0EsQ0FBQztjQUFFeEo7WUFBSSxDQUFFLEtBQUk7Y0FDekIsTUFBTXFCLEdBQUcsR0FBRyxpQ0FBaUNyQixJQUFJLEVBQUU7Y0FFbkQsT0FDQ3dJLE1BQUEsQ0FBQWpILE9BQUEsQ0FBQUssYUFBQTtnQkFBU3hCLFNBQVMsRUFBRWlCO2NBQUcsR0FDdEJtSCxNQUFBLENBQUFqSCxPQUFBLENBQUFLLGFBQUEsQ0FBQ3RDLE1BQUEsQ0FBQTJDLE9BQU87Z0JBQUNDLElBQUksRUFBRWxDLElBQUk7Z0JBQUVhLEtBQUssRUFBRWI7Y0FBSSxFQUFJLENBQzNCO1lBRVosQ0FBQztZQUVELE9BQU93SSxNQUFBLENBQUFqSCxPQUFBLENBQUFLLGFBQUEsQ0FBQzJILEtBQUEsQ0FBQUUsSUFBSTtjQUFDckosU0FBUyxFQUFDLHNCQUFzQjtjQUFDc0osS0FBSyxFQUFFMUksS0FBSztjQUFFMkksT0FBTyxFQUFFSDtZQUFJLEVBQUk7VUFDOUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUE5SixLQUFBLEdBQUFMLE9BQUE7VUFFTSxTQUFVbUYsUUFBUUEsQ0FBQztZQUFFRjtVQUFRLENBQUU7WUFDcEMsSUFBSSxDQUFDQSxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBRTFCLE9BQU81RSxLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBNkIsR0FBRWtFLFFBQVEsRUFBRXNGLEtBQUssQ0FBUTtVQUM5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOQSxJQUFBdEssTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXdLLFFBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBSyxLQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVrRixlQUFlQSxDQUFDO1lBQUVoRTtVQUFTLENBQUU7WUFDdkQsSUFBSSxDQUFDQSxTQUFTLEVBQUUsT0FBTyxJQUFJO1lBQzNCLE1BQU07Y0FBRWdHO1lBQUksQ0FBRSxHQUFHaEcsU0FBUztZQUUxQixPQUNDYixLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBeUIsR0FDdkNWLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ2lJLFFBQUEsQ0FBQUMsT0FBTztjQUFDM0QsT0FBTyxFQUFFSTtZQUFJLEdBQ3JCN0csS0FBQSxDQUFBa0MsYUFBQTtjQUFLeEIsU0FBUyxFQUFDO1lBQWlCLEdBQy9CVixLQUFBLENBQUFrQyxhQUFBLENBQUN0QyxNQUFBLENBQUEyQyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFXLEVBQUcsQ0FDdkIsQ0FDRyxFQUVWeEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQXlCLEdBQUVtRyxJQUFJLENBQVEsQ0FDbEQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTdHLEtBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVNLFNBQVUrQyxRQUFRQSxDQUFDO1lBQUVDO1VBQVEsQ0FBRTtZQUNwQyxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsT0FDQzNDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUF1QixHQUNyQ2lDLFFBQVEsRSxLQUFFM0MsS0FBQSxDQUFBa0MsYUFBQSxDQUFDdEMsTUFBQSxDQUFBMkMsT0FBTztjQUFDc0UsSUFBSSxFQUFFLGFBQWFsRSxRQUFRO1lBQUUsRUFBWSxDQUN2RDtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUEzQyxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBMEssTUFBQSxHQUFBMUssT0FBQTtVQUNBLElBQUF3SyxRQUFBLEdBQUF4SyxPQUFBO1VBV087VUFBVSxTQUFVbUgsZ0JBQWdCQSxDQUFDO1lBQUVDO1VBQUksQ0FBb0M7WUFDckYsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXVELFFBQVE7Y0FBRXpEO1lBQUksQ0FBRSxHQUFHRSxJQUFJO1lBRS9CLE9BQ0MvRyxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBcUIsR0FDbkNWLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU3hCLFNBQVMsRUFBQztZQUFvQixHQUN0Q1YsS0FBQSxDQUFBa0MsYUFBQSxDQUFDaUksUUFBQSxDQUFBQyxPQUFPO2NBQUMzRCxPQUFPLEVBQUVJO1lBQUksR0FDckI3RyxLQUFBLENBQUFrQyxhQUFBLENBQUNtSSxNQUFBLENBQUFFLEtBQUs7Y0FBQzdKLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQzBCLEdBQUcsRUFBRWtJO1lBQVEsRUFBSSxDQUMzQyxFQUVWdEssS0FBQSxDQUFBa0MsYUFBQSxjQUNDbEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQWtCLEdBQUVtRyxJQUFJLENBQVEsQ0FDM0MsQ0FDRyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUE3RyxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBMEssTUFBQSxHQUFBMUssT0FBQTtVQUNBLElBQUF3SyxRQUFBLEdBQUF4SyxPQUFBO1VBY087VUFBVSxTQUFVZ0osUUFBUUEsQ0FBQztZQUFFNkIsS0FBSztZQUFFNUksSUFBSTtZQUFFbUY7VUFBSSxDQUFrRDtZQUN4RyxJQUFJLENBQUNBLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTtjQUFFdUQsUUFBUTtjQUFFekQ7WUFBSSxDQUFFLEdBQUdFLElBQUk7WUFFL0IsT0FDQy9HLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFvQixHQUNqQzhKLEtBQUssSUFBSXhLLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBSXhCLFNBQVMsRUFBQztZQUFrQixHQUFFOEosS0FBSyxDQUFNLEVBQ3ZEeEssS0FBQSxDQUFBa0MsYUFBQTtjQUFTeEIsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDVixLQUFBLENBQUFrQyxhQUFBLENBQUNpSSxRQUFBLENBQUFDLE9BQU87Y0FBQzNELE9BQU8sRUFBRUk7WUFBSSxHQUNyQjdHLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQ21JLE1BQUEsQ0FBQUUsS0FBSztjQUFDN0osU0FBUyxFQUFDLGdCQUFnQjtjQUFDMEIsR0FBRyxFQUFFa0k7WUFBUSxFQUFJLENBQzFDLEVBRVZ0SyxLQUFBLENBQUFrQyxhQUFBLGNBQ0NsQyxLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBaUIsR0FBRW1HLElBQUksQ0FBUSxFQUMvQzdHLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUFpQixHQUFFa0IsSUFBSSxDQUFRLENBQzFDLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7OztVQ25DQTs7VUFFQTZJLE1BQUEsQ0FBQUMsY0FBQSxDQUFBbkYsT0FBQTtZQUNBRCxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=