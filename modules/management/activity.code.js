System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.3.32/components/icons", "pragmate-ui@1.0.0-beta.7/collapsible", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.32/modules/management/refinament.code", "@aimpact/chat-sdk@1.4.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/perfect-scrollbar", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dynamic-list", "@beyond-js/kernel@0.1.12/core", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.32/components/dynamic-field", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.32/components/cover-image.code", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.32/assignments/chat"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, ActivityHeader, ModuleActivityForm, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    ActivityHeader: void 0,
    ModuleActivityForm: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_3 = _pragmateUi100Beta7Collapsible;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_5 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_6 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_7 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_9 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp0332ModulesManagementRefinamentCode) {
      dependency_11 = _aimpactAilearnApp0332ModulesManagementRefinamentCode;
    }, function (_aimpactChatSdk144WidgetsMarkdown) {
      dependency_12 = _aimpactChatSdk144WidgetsMarkdown;
    }, function (_pragmateUi100Beta7PerfectScrollbar) {
      dependency_13 = _pragmateUi100Beta7PerfectScrollbar;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_16 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7DynamicList) {
      dependency_18 = _pragmateUi100Beta7DynamicList;
    }, function (_beyondJsKernel0112Core) {
      dependency_19 = _beyondJsKernel0112Core;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_aimpactAilearnApp0332ComponentsDynamicField) {
      dependency_21 = _aimpactAilearnApp0332ComponentsDynamicField;
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_22 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_beyondJsKernel0112Routing) {
      dependency_23 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_24 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp0332ComponentsCoverImageCode) {
      dependency_25 = _aimpactAilearnApp0332ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta7Image) {
      dependency_26 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp0332AssignmentsChat) {
      dependency_27 = _aimpactAilearnApp0332AssignmentsChat;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/management/activity",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/collapsible', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/form', dependency_6], ['pragmate-ui/empty', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form/react-select', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_11], ['@aimpact/chat-sdk/widgets/markdown', dependency_12], ['pragmate-ui/perfect-scrollbar', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/tabs', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/dynamic-list', dependency_18], ['@beyond-js/kernel/core', dependency_19], ['framer-motion', dependency_20], ['@aimpact/ailearn-app/components/dynamic-field', dependency_21], ['@aimpact/ailearn-app/main-layout.widget', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/toast', dependency_24], ['@aimpact/ailearn-app/components/cover-image.code', dependency_25], ['pragmate-ui/image', dependency_26], ['@aimpact/ailearn-app/assignments/chat', dependency_27]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/modules/management/activity.code');
      ims = new Map();
      /***********************************************************
      INTERNAL MODULE: ./activities/character-talk/advanced-fields
      ***********************************************************/
      ims.set('./activities/character-talk/advanced-fields', {
        hash: 802138123,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "4. ", texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/character-talk/index
      *************************************************/

      ims.set('./activities/character-talk/index', {
        hash: 4224088490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CharacterTalkActivity = CharacterTalkActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
          function CharacterTalkActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
              type: "general",
              titles: false
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h5", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/content-theory/activity-content
      ************************************************************/

      ims.set('./activities/content-theory/activity-content', {
        hash: 21954670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _react = require("react");
          var _specs = require("../specs/specs");
          function ActivityContent({
            toggleView
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_specs.Specs, null));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/advanced-fields
      ***********************************************************/

      ims.set('./activities/content-theory/advanced-fields', {
        hash: 3060157737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          var _materials = require("./materials");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _layouts = require("./layouts");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onChange = event => {
              const selected = event.currentTarget.closest('.layout-types-container').querySelector('.selected')?.classList.remove('selected');
              event.currentTarget.classList.add('selected');
              activity.setLayout(event.currentTarget.value);
            };
            const Icon = ({
              value,
              icon
            }) => {
              const attrs = {
                value,
                icon,
                title: texts.activities.settings.layout.options[icon]
              };
              if (value === activity.settings?.layout) attrs.className = 'selected';
              return _react.default.createElement(_icons.AppIconButton, {
                ...attrs,
                onClick: onChange
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_materials.MaterialsView, null), _react.default.createElement(_layouts.LayoutChatSelection, null), _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "6. ", texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/confirm-action
      **********************************************************/

      ims.set('./activities/content-theory/confirm-action', {
        hash: 3576600209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmButton = ConfirmButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          function ConfirmButton({
            className,
            disabled = false,
            variant = 'primary',
            icon,
            tooltip,
            callback,
            as = 'button',
            bordered,
            title,
            description,
            action = 'delete',
            children
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/i18n');
            if (!ready) return;
            title = title || texts.modal[action].title;
            description = description || texts.modal[action].description;
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            const Control = as === 'icon' ? _icons.AppIconButton : _components.Button;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Control, {
              className: className,
              bordered: bordered,
              disabled: disabled,
              variant: variant,
              icon: icon,
              title: tooltip,
              onClick: onClickButton
            }, children), open && _react.default.createElement(_modal.ConfirmModal, {
              btnConfirm: {
                label: texts.actions.confirm,
                variant: 'primary'
              },
              btnCancel: {
                label: texts.actions.cancel,
                variant: 'primary',
                bordered: true
              },
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/content-theory/index
      *************************************************/

      ims.set('./activities/content-theory/index', {
        hash: 743749101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryActivity = ContentTheoryActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
          function ContentTheoryActivity({}) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([activity], () => setUpdated({}));
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
              type: "general",
              titles: false
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h3", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./activities/content-theory/layouts/icon
      ********************************************************/

      ims.set('./activities/content-theory/layouts/icon', {
        hash: 1625558547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutIcon = LayoutIcon;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          function LayoutIcon({
            value,
            icon
          }) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onChange = event => {
              event.currentTarget.closest('.layout-types-container').querySelector('.selected')?.classList.remove('selected');
              event.currentTarget.classList.add('selected');
              activity.setLayout(event.currentTarget.dataset.value);
            };
            const attrs = {
              value,
              icon,
              title: texts.activities.settings.layout.options[icon].title
            };
            let containerCls = `layout-icon__item${value === activity.settings?.layout ? ' selected' : ''}`;
            if (value === activity.settings?.layout) attrs.className = 'active';
            return _react.default.createElement("div", {
              className: containerCls,
              onClick: onChange,
              "data-value": value
            }, _react.default.createElement(_icons.AppIconButton, {
              ...attrs
            }), _react.default.createElement(_components.HtmlWrapper, {
              className: "p3"
            }, texts.activities.settings.layout.options[icon].description));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./activities/content-theory/layouts/index
      *********************************************************/

      ims.set('./activities/content-theory/layouts/index', {
        hash: 3109636246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutChatSelection = LayoutChatSelection;
          var _react = require("react");
          var _context = require("../../../context");
          var _icon = require("./icon");
          function LayoutChatSelection() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "layout__selection"
            }, _react.default.createElement("div", {
              className: "activity__section-subheader"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, "5. ", texts.activities.settings.layout.title), _react.default.createElement("span", null, texts.activities.settings.layout.description))), _react.default.createElement("div", {
              className: "layout-types-container"
            }, _react.default.createElement(_icon.LayoutIcon, {
              value: "full-content-layout",
              icon: "fullContentLayout"
            }), _react.default.createElement(_icon.LayoutIcon, {
              value: "main-content-layout",
              icon: "mainContentLayout"
            }), _react.default.createElement(_icon.LayoutIcon, {
              value: "main-chat-layout",
              icon: "mainChatLayout"
            }))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/article
      *************************************************************/

      ims.set('./activities/content-theory/materials/article', {
        hash: 909898923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ArticleTab = ArticleTab;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _emptyArticle = require("./empty-article");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _confirmAction = require("../confirm-action");
          function ArticleTab({
            onClose
          }) {
            const {
              texts,
              store,
              values,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            const [content, setContent] = _react.default.useState(values.materials?.article ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
            const [manual, setManual] = _react.default.useState(false);
            const toggleManual = () => setManual(!manual);
            const onChange = event => {
              setContent(event.target.value);
            };
            (0, _hooks.useBinder)([activity.materials], () => {
              setContent(activity.materials.article);
            }, 'article.changed');
            const onDelete = async () => {
              activity.materials.clear();
              activity.save();
            };
            const onClickCancel = () => {
              toggleManual();
            };
            const onSave = async () => {
              setFetching(true);
              activity.materials.set({
                article: content
              });
              await activity.save();
              setFetching(false);
              toggleManual();
            };
            if (!manual && !activity.materials.article) {
              return _react.default.createElement(_emptyArticle.EmptyArticleMaterial, {
                name: "article",
                onManual: toggleManual
              });
            }
            if (!manual && activity.materials.article) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
                className: "material-content"
              }, _react.default.createElement(_markdown.Markdown, {
                content: activity.materials.article
              })), _react.default.createElement("footer", {
                className: " activity-modal__form-footer"
              }, _react.default.createElement(_components.Button, {
                icon: "edit",
                onClick: toggleManual,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.edit), _react.default.createElement(_confirmAction.ConfirmButton, {
                icon: "delete",
                callback: onDelete,
                variant: "primary",
                bordered: true
              }, globalTexts.actions.delete)));
            }
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              autoresize: false,
              name: "content",
              disabled: fetching,
              value: content,
              placeholder: materialTexts.form.article.placeholder
            })), _react.default.createElement("div", {
              className: clsCharacters
            }, texts.contentTheory.materials.characters, " ", 4000 - content.length)), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true,
              disabled: fetching
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: fetching
            }, globalTexts.actions.save)));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/empty
      ******************************************************************/

      ims.set('./activities/content-theory/materials/audios/empty', {
        hash: 3579229221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryEmptyAudio = ContentTheoryEmptyAudio;
          var _react = require("react");
          var _context = require("../../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _useMaterials = require("../use-materials");
          function ContentTheoryEmptyAudio({}) {
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const {
              generateAudio
            } = (0, _useMaterials.useMaterialActions)();
            const onGenerate = generateAudio;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "activity__actions"
            }, _react.default.createElement(_ui.AIButton, {
              onClick: onGenerate,
              variant: "primary"
            }, globalTexts.actions.generate))));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/index
      ******************************************************************/

      ims.set('./activities/content-theory/materials/audios/index', {
        hash: 1282810147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudio = ContentTheoryAudio;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../../../context");
          var _item = require("./item");
          function ContentTheoryAudio() {
            const {
              activity,
              texts,
              store
            } = (0, _context.useActivityContext)();
            const [audios, setAudios] = React.useState(activity.materials.audios);
            (0, _hooks.useBinder)([activity.materials], () => {
              setAudios({
                ...activity.materials.audios
              });
            }, 'audios.changed');
            return React.createElement("div", {
              className: "material-content"
            }, React.createElement(_item.ContentTheoryAudioItem, {
              type: "article"
            }), React.createElement(_item.ContentTheoryAudioItem, {
              type: "dyslexia"
            }));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/item
      *****************************************************************/

      ims.set('./activities/content-theory/materials/audios/item', {
        hash: 3975699874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudioItem = void 0;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../../../context");
          var _confirmAction = require("../../confirm-action");
          var _useMaterials = require("../use-materials");
          var _components = require("pragmate-ui/components");
          const ContentTheoryAudioItem = ({
            type
          }) => {
            const {
              store,
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const {
              audios
            } = activity.materials;
            const {
              generateAudio,
              fetching,
              deleteAudio
            } = (0, _useMaterials.useMaterialActions)();
            const has = !!activity.materials.audios?.[type];
            const onGenerateItem = event => {
              generateAudio([event.currentTarget.value]);
            };
            const onDelete = () => {
              return deleteAudio([type]);
            };
            const size = activity.materials[type]?.length;
            const canBeCreated = size > 0 && size <= 4000;
            const emptyText = size === 0 ? texts.contentTheory.materials.audio.emptyMaterial : texts.contentTheory.materials.audio.maxLength;
            return _react.default.createElement("div", {
              className: "activity__audio"
            }, _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.contentTheory.materials.types[type]), !has ? _react.default.createElement(_react.default.Fragment, null, canBeCreated ? _react.default.createElement("span", {
              className: "audio-label text-muted"
            }, texts.contentTheory.materials.audio.noAudio) : _react.default.createElement("span", {
              className: "audio-label  error-text"
            }, _react.default.createElement(_components.HtmlWrapper, {
              params: {
                type: texts.contentTheory.materials.audio[type]
              }
            }, emptyText))) : null), _react.default.createElement("div", {
              className: "audio__container"
            }, has ? _react.default.createElement("div", {
              className: "flex-container gap-1 flex-vertical-center"
            }, _react.default.createElement(_ui.AudioPlayer, {
              url: audios[type].url
            }), _react.default.createElement(_confirmAction.ConfirmButton, {
              className: "circle",
              tooltip: globalTexts.actions.delete,
              icon: "delete",
              as: "icon",
              callback: onDelete,
              disabled: fetching,
              variant: "primary"
            })) : _react.default.createElement(_ui.AIButton, {
              disabled: !canBeCreated,
              fetching: fetching,
              value: type,
              onClick: onGenerateItem,
              variant: "primary"
            }, globalTexts.actions.generate)));
          };
          exports.ContentTheoryAudioItem = ContentTheoryAudioItem;
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/audios/view
      *****************************************************************/

      ims.set('./activities/content-theory/materials/audios/view', {
        hash: 4109247576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentTheoryAudioView = ContentTheoryAudioView;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../../context");
          var _item = require("./item");
          var _components = require("pragmate-ui/components");
          function ContentTheoryAudioView() {
            const {
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [manual, setManual] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const {
              audios
            } = activity.materials;
            (0, _hooks.useBinder)([activity.materials], () => {
              setManual(false);
              setFetching(activity.materials.fetching);
            });
            const items = !!audios ? Object.keys(audios) : [];
            const onDelete = async () => {
              setFetching(true);
              await activity.materials.deleteAudios();
              setFetching(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "material-content"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: items,
              control: _item.ContentTheoryAudioItem,
              as: "div"
            }), ","), _react.default.createElement("footer", {
              className: " activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              icon: "delete",
              onClick: onDelete,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.delete)));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/empty-article
      *******************************************************************/

      ims.set('./activities/content-theory/materials/empty-article', {
        hash: 1985059227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyArticleMaterial = EmptyArticleMaterial;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../../context");
          var _useMaterials = require("./use-materials");
          function EmptyArticleMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const materialTexts = texts.contentTheory.materials;
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [, setData] = _react.default.useState(activity.materials[name]);
            const {
              setFetching,
              generateArticle
            } = (0, _useMaterials.useMaterialActions)();
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            const disabled = {
              disabled: !activity.title
            };
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "activity__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              onConsume: store.model.consumeCoins,
              title: materialTexts.refinement.title,
              objective: activity.objective,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onGenerate: generateArticle
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/empty
      ***********************************************************/

      ims.set('./activities/content-theory/materials/empty', {
        hash: 2463039133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _materials = require("../../../components/generation-modal/materials");
          function EmptyMaterial({
            name,
            onManual
          }) {
            const {
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(activity.materials.fetching);
            const [, setData] = _react.default.useState(activity.materials[name]);
            const toggleModal = () => setShowSuggestions(!showSuggestions);
            (0, _hooks.useBinder)([activity.materials], () => {
              setFetching(activity.materials.fetching);
              setData(activity.materials[name]);
            });
            const disabled = {
              disabled: !activity.title || !activity.materials?.article
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EmptyCard, {
              className: "activity--empty",
              text: texts.activities.empty.title,
              description: texts.activities.empty.description
            }, _react.default.createElement("div", {
              className: "activity__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual), _react.default.createElement(_ui.AIButton, {
              onClick: toggleModal,
              variant: "primary",
              ...disabled
            }, globalTexts.actions.generate))), showSuggestions && _react.default.createElement(_materials.MaterialsSuggestionsModal, {
              type: name,
              onClose: toggleModal
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/form
      **********************************************************/

      ims.set('./activities/content-theory/materials/form', {
        hash: 1575153102,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsForm = MaterialsForm;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _tabs = require("pragmate-ui/tabs");
          var _article = require("./article");
          var _pane = require("./pane");
          var _audios = require("./audios");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _header = require("./header");
          var _useMaterials = require("./use-materials");
          function MaterialsForm({
            show,
            onClose
          }) {
            const {
              texts,
              store,
              values,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const materialTexts = texts.contentTheory.materials;
            const [, setContent] = _react.default.useState(values.materials?.article ?? '');
            const [showModal, setShowModal] = _react.default.useState(false);
            const [updated, setUpdated] = _react.default.useState({});
            const [currentTab, setCurrentTab] = _react.default.useState('article');
            const toggleModal = () => setShowModal(!showModal);
            const {
              generator
            } = (0, _useMaterials.useMaterialActions)();
            (0, _hooks.useBinder)([activity.materials], () => {
              setContent(activity.materials.article);
              setUpdated({});
            });
            if (!show) return null;
            const onConsume = () => {};
            const tabs = [];
            const onChange = event => {
              setCurrentTab(event.currentTarget.dataset.name);
            };
            tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "article-attachment",
              name: "article"
            }, materialTexts.types.article));
            if (activity.materials.article) {
              Object.keys(materialTexts.types).forEach(type => {
                if (type === 'article') return;
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  name: type,
                  key: type
                }, materialTexts.types[type]));
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "activity-modal__form",
              onClose: onClose
            }, _react.default.createElement(_header.MaterialsHeaderModal, {
              currentTab: currentTab,
              toggleModal: toggleModal
            }), _react.default.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "content-theory__tabs ",
              onChange: onChange
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_article.ArticleTab, {
              onClose: onClose
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "synthesis"
            }), _react.default.createElement(_pane.MaterialPane, {
              name: "dyslexia"
            }), _react.default.createElement(_audios.ContentTheoryAudio, null))), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              title: materialTexts.refinement.title,
              description: materialTexts.refinement.description,
              onClose: toggleModal,
              onConsume: onConsume,
              onGenerate: generator[currentTab]
            })));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/header
      ************************************************************/

      ims.set('./activities/content-theory/materials/header', {
        hash: 1951469989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsHeaderModal = MaterialsHeaderModal;
          var _react = require("react");
          var _context = require("../../../context");
          function MaterialsHeaderModal({
            currentTab,
            toggleModal
          }) {
            const {
              texts
            } = (0, _context.useActivityContext)();
            const materialTexts = texts.contentTheory.materials;
            return _react.default.createElement("header", {
              className: "activity-modal__form-header"
            }, _react.default.createElement("h5", null, materialTexts.title));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/index
      ***********************************************************/

      ims.set('./activities/content-theory/materials/index', {
        hash: 156145576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsView = MaterialsView;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../../context");
          var _form = require("./form");
          var _list = require("./list");
          function MaterialsView({}) {
            const {
              texts
            } = (0, _context.useActivityContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const onCreate = () => {
              setShowModal(true);
              globalThis.document.querySelector('html').style.overflow = 'hidden';
            };
            const onClose = () => {
              setShowModal(false);
              globalThis.document.querySelector('html').style.overflow = 'auto';
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", null, _react.default.createElement("header", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, "4. ", texts.contentTheory.materials.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              onClick: onCreate,
              variant: "link"
            }, texts.contentTheory.empty.actions.add))), _react.default.createElement(_list.MaterialList, {
              onCreate: onCreate
            })), showModal && _react.default.createElement(_form.MaterialsForm, {
              show: showModal,
              onClose: onClose
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/list
      **********************************************************/

      ims.set('./activities/content-theory/materials/list', {
        hash: 4227632733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialList = MaterialList;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          function truncateText(text, maxLength) {
            return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
          }
          function MaterialList({
            onCreate
          }) {
            const {
              store,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [open, setOpen] = _react.default.useState(false);
            const toggleOpen = () => setOpen(!open);
            const onConfirm = event => {
              event.stopPropagation();
              activity.materials.clear();
              activity.save();
              toggleOpen();
            };
            const onClick = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const {
              title,
              description
            } = texts.contentTheory.materials.deleteModal;
            return _react.default.createElement(_react.default.Fragment, null, activity.materials.article ? _react.default.createElement("div", {
              className: "attachments__container"
            }, _react.default.createElement("div", {
              className: "attachment__card card--article",
              onClick: onCreate
            }, truncateText(activity.materials.article, 80), _react.default.createElement(_icons.IconButton, {
              className: "circle",
              icon: "delete",
              onClick: onClick
            }))) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__empty-section"
            }, _react.default.createElement("span", null, texts.contentTheory.materials.empty))), open && _react.default.createElement(_modal.ConfirmModal, {
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

      /**************************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/manual-material-form
      **************************************************************************/

      ims.set('./activities/content-theory/materials/manual-material-form', {
        hash: 223410630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          function ManualMaterialForm({
            name,
            onCancel,
            onClose
          }) {
            const {
              values,
              activity,
              texts,
              store
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(values.materials?.[name] ?? '');
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = event => {
              setContent(event.target.value);
            };
            const onClickCancel = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              onCancel();
            };
            const onConfirm = async () => {};
            const onModalCancel = () => setShowCanceLModal(false);
            const onSave = async () => {
              setFetching(true);
              activity.materials.set({
                [name]: content
              });
              await activity.save({
                [name]: content
              });
              setFetching(false);
              onClose();
            };
            const clsCharacters = `characters__container${content.length > 3900 ? content.length > 3950 ? ' error-text' : ' warning-text' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "activity-modal__form-content",
              onSubmit: onSave
            }, _react.default.createElement("div", {
              className: "textarea__container"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              name: name,
              value: content,
              placeholder: texts.manual[name].textarea
            })), _react.default.createElement("div", {
              className: clsCharacters
            }, texts.contentTheory.materials.characters, " ", 4000 - content.length)), _react.default.createElement("footer", {
              className: "activity-modal__form-footer"
            }, _react.default.createElement(_components.Button, {
              onClick: onClickCancel,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !content || fetching
            }, globalTexts.actions.save)), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, globalTexts.actions.cancel)));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/pane
      **********************************************************/

      ims.set('./activities/content-theory/materials/pane', {
        hash: 127478258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialPane = MaterialPane;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _manualMaterialForm = require("./manual-material-form");
          var _context = require("../../../context");
          var _confirmAction = require("../confirm-action");
          function MaterialPane({
            name
          }) {
            const {
              store,
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              globalTexts
            } = store;
            const [manual, setManual] = _react.default.useState(false);
            const [material, setMaterial] = _react.default.useState(activity.materials[name]);
            const openManualForm = () => setManual(true);
            const toggleManual = () => setManual(!manual);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([activity.materials], () => {
              setMaterial(activity.materials[name]);
            });
            if (manual) return _react.default.createElement(_manualMaterialForm.ManualMaterialForm, {
              name: name,
              onClose: toggleManual,
              onCancel: toggleManual
            });
            if (!material) return _react.default.createElement(_empty.EmptyMaterial, {
              name: name,
              onManual: toggleManual
            });
            const onDelete = () => {
              setFetching(true);
              activity.materials.set({
                [name]: ''
              });
              activity.save({
                [name]: ''
              });
              setFetching(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "material__content"
            }, _react.default.createElement(_markdown.Markdown, {
              content: material
            })), _react.default.createElement("footer", {
              className: "activity-modal__form-footer material__actions"
            }, _react.default.createElement(_components.Button, {
              icon: "edit",
              onClick: openManualForm,
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.edit), _react.default.createElement(_confirmAction.ConfirmButton, {
              callback: onDelete,
              icon: "delete",
              disabled: fetching,
              variant: "primary",
              bordered: true
            }, globalTexts.actions.delete)));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/content-theory/materials/use-materials
      *******************************************************************/

      ims.set('./activities/content-theory/materials/use-materials', {
        hash: 2675687743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMaterialActions = useMaterialActions;
          var _react = require("react");
          var _context = require("../../../context");
          function useMaterialActions() {
            const {
              activity
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const generateAudio = async (items = undefined) => {
              try {
                setFetching(true);
                await activity.materials.generateAudio(items);
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
            const deleteAudio = async (items = undefined) => {
              try {
                setFetching(true);
                await activity.materials.deleteAudio(items);
              } catch (e) {
                console.log(e);
              } finally {
                setFetching(false);
              }
            };
            const generateArticle = async ({
              notes,
              objective
            }) => {
              try {
                const data = await activity.materials.generate('article', notes, objective);
              } catch (e) {
                console.log(e);
              }
            };
            const generateMaterial = async (type, notes) => {
              setFetching(true);
              await activity.materials.generate(type, notes);
              setTimeout(() => {
                setFetching(false);
              }, 2000);
            };
            return {
              generateAudio,
              generateArticle,
              generateMaterial,
              fetching,
              setFetching,
              deleteAudio,
              generator: {
                audios: generateAudio,
                article: generateArticle,
                material: generateMaterial,
                dyslexia: generateMaterial,
                synthesis: generateMaterial
              }
            };
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/debate/advanced-fields
      ***************************************************/

      ims.set('./activities/debate/advanced-fields', {
        hash: 674171479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AdvancedFields = AdvancedFields;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("../specs/manual/form");
          function AdvancedFields() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity__section-subheader mb-0"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement("h5", null, texts.activities.sections.advanced.title), _react.default.createElement("span", null, texts.activities.sections.advanced.subtitle))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement(_form.SpecsForm, {
              type: "advanced",
              titles: false
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/debate/index
      *****************************************/

      ims.set('./activities/debate/index', {
        hash: 3370878882,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DebateActivity = DebateActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _advancedFields = require("./advanced-fields");
          var _field = require("../field");
          function DebateActivity() {
            const {
              texts,
              activity,
              saveActivity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = () => activity.save();
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
              type: "general",
              titles: false
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: `page-container`
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h5", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.SpecsForm, null)), React.createElement(_advancedFields.AdvancedFields, null))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/delete-modal
      *****************************************/

      ims.set('./activities/delete-modal', {
        hash: 3238128405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteActivityData = DeleteActivityData;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../context");
          function DeleteActivityData({
            show,
            onClose
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              activity,
              texts: {
                activities: texts
              },
              store: {
                globalTexts: {
                  actions
                }
              }
            } = (0, _context.useActivityContext)();
            if (!show) return null;
            const onConfirm = async () => {
              try {
                setFetching(true);
                await activity.clearContent();
                onClose();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onClose: onClose,
              onConfirm: onConfirm,
              btnConfirm: {
                label: actions.confirm
              },
              btnCancel: {
                label: actions.cancel
              },
              onCancel: onClose
            }, _react.default.createElement("h3", null, texts.deleteModal.title), _react.default.createElement("p", null, texts.deleteModal.description)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/field
      **********************************/

      ims.set('./activities/field', {
        hash: 3424251951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityField = ActivityField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _dynamic = require("./specs/manual/dynamic");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ActivityField(props) {
            const {
              texts,
              activity,
              saveActivity
            } = (0, _context.useActivityContext)();
            const {
              name,
              type,
              index,
              titles,
              value
            } = props;
            const [updates, setUpdates] = _react.default.useState({});
            const {
              label,
              placeholder,
              title
            } = texts.activities[name];
            const [internalValue, setInternalValue] = _react.default.useState(activity[name]);
            (0, _hooks.useBinder)([activity], () => {
              setInternalValue(activity[name]);
            });
            const onBlur = () => activity.save();
            const onChange = event => {
              setInternalValue(event.currentTarget.value);
              const {
                name,
                value
              } = event.currentTarget;
              activity.set({
                [name]: value
              });
            };
            if (!texts.activities[name]) {
              console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              return null;
            }
            const attrs = {
              label,
              placeholder,
              value: internalValue
            };
            //the structure has and advance settings defining if is required or not, for example.
            const Field = fieldTypes[type];
            return _react.default.createElement("div", null, titles ? _react.default.createElement("h5", null, title) : null, _react.default.createElement(Field, {
              key: `${name}-activity-field`,
              variant: "floating",
              label: label,
              name: name,
              ...attrs,
              onChange: onChange,
              onBlur: onBlur
            }));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./activities/multiple-choice/context
      ****************************************************/

      ims.set('./activities/multiple-choice/context', {
        hash: 1928575685,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMultipleChoiceContext = exports.MultipleChoiceContext = void 0;
          var _react = require("react");
          const MultipleChoiceContext = exports.MultipleChoiceContext = _react.default.createContext({});
          const useMultipleChoiceContext = () => _react.default.useContext(MultipleChoiceContext);
          exports.useMultipleChoiceContext = useMultipleChoiceContext;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/empty
      **************************************************/

      ims.set('./activities/multiple-choice/empty', {
        hash: 578953830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceEmptySpecs = MultipleChoiceEmptySpecs;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../context");
          function MultipleChoiceEmptySpecs({
            name,
            toggleView,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const onManual = () => toggleView('form');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, texts.multipleChoice.actions.addQuestion))), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("span", null, texts.activities.empty.description)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/index
      *******************************************************/

      ims.set('./activities/multiple-choice/form/index', {
        hash: 363144000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceManualForm = MultipleChoiceManualForm;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../../context");
          var _header = require("../../specs/header");
          var _context2 = require("../context");
          var _questions = require("./questions");
          function MultipleChoiceManualForm({
            onCancel,
            changeView
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              values,
              texts,
              store,
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [errors, setErrors] = _react.default.useState([]);
            const ref = _react.default.useRef(null);
            const [confirm, setConfirm] = _react.default.useState(false);
            const onSave = async () => {
              setFetching(true);
              const {
                questions
              } = values.specs;
              const wrongs = [];
              questions.forEach((question, index) => {
                if (!question?.question || !question?.options.length || isNaN(question?.correctAnswer)) {
                  wrongs.push(index);
                  return;
                }
                const empties = question.options.filter(item => item.value === '');
                if (empties.length > 0) {
                  wrongs.push(index);
                }
              });
              if (wrongs.length) {
                setErrors(wrongs);
                setFetching(false);
                return;
              }
              await activity.save();
              setFetching(false);
              changeView();
            };
            _react.default.useEffect(() => {
              if (!errors.length) return;
              const container = ref.current;
              container.querySelectorAll('.dynamic-question-item__container').forEach((item, index) => {
                if (!errors.includes(index)) return;
                item.classList.add('question--error');
                item.addEventListener('focusin', () => {
                  item.classList.remove('question--error');
                });
                globalThis.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
                // globalThis.setTimeout(() => item.classList.remove('question--error'), 2000);
              });
            }, [errors]);
            const contextValue = {
              errors,
              setErrors
            };
            const toggleOpen = () => setConfirm(!confirm);
            const cancelChanges = () => {
              if (!activity.unpublished) {
                onCancel();
                return;
              }
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context2.MultipleChoiceContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_header.SpecsHeader, null), _react.default.createElement("section", {
              ref: ref,
              className: "activity__form activity__materials-form"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: errors.length ? texts.errors.wrongQuestions : ''
            }), _react.default.createElement(_questions.DynamicQuestionsForm, {
              errors: errors,
              setErrors: setErrors
            }), _react.default.createElement("footer", {
              className: "section-actions__container border-top actions-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: cancelChanges
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: !!errors.length || fetching
            }, globalTexts.actions.save)))), confirm && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onCancel,
              onCancel: toggleOpen
            }, _react.default.createElement("h3", null, texts.multipleChoice.cancel.title), _react.default.createElement("p", null, texts.multipleChoice.cancel.description)));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/actions
      *******************************************************************/

      ims.set('./activities/multiple-choice/form/questions/actions', {
        hash: 3330609136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicActions = DynamicActions;
          var _react = require("react");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../context");
          function DynamicActions() {
            const {
              texts
            } = (0, _context.useActivityContext)();
            let {
              actions
            } = texts.multipleChoice;
            const {
              addItem
            } = (0, _dynamicList.useDynamicListContext)();
            return _react.default.createElement("section", {
              className: "section-actions__container actions-end no-m no-p stretch"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: addItem
            }, actions.addQuestion));
          }
        }
      });

      /**************************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/answers/footer
      **************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/answers/footer', {
        hash: 4144017881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersFooter = DynamicAnswersFooter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../../context");
          function DynamicAnswersFooter({
            disabled,
            onAdd,
            showed
          }) {
            const {
              texts: {
                multipleChoice: texts
              }
            } = (0, _context.useActivityContext)();
            const {
              addItem
            } = (0, _dynamicList.useDynamicListContext)();
            const onClick = event => {
              if (!showed) {
                return onAdd(true);
              }
              addItem();
            };
            return _react.default.createElement("section", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              title: texts.actions.addAnswer,
              onClick: onClick,
              disabled: disabled
            }, texts.actions.addAnswer));
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/answers/index
      *************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/answers/index', {
        hash: 4190891243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicAnswersForm = DynamicAnswersForm;
          var _react = require("react");
          var Dynamic = require("pragmate-ui/dynamic-list");
          var _item = require("./item");
          var _footer = require("./footer");
          var _components = require("pragmate-ui/components");
          function DynamicAnswersForm({
            fetching,
            show,
            answers,
            onChange,
            disabled
          }) {
            const [added, setAdded] = _react.default.useState(false);
            if (fetching) {
              return _react.default.createElement("div", null, _react.default.createElement(_components.Spinner, {
                active: true,
                variant: "primary"
              }));
            }
            return _react.default.createElement(Dynamic.Provider, {
              name: "question-answers",
              className: "answer-questions-form__container",
              value: answers,
              Item: _item.DynamicQuestionAnswerItem,
              onChange: onChange
            }, (show || added) && _react.default.createElement(Dynamic.List, {
              className: "dynamic-form"
            }), _react.default.createElement(_footer.DynamicAnswersFooter, {
              showed: show || added,
              disabled: disabled,
              onAdd: setAdded
            }));
          }
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/answers/item
      ************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/answers/item', {
        hash: 1640077995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionAnswerItem = DynamicQuestionAnswerItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _useInput = require("../hooks/use-input");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../../context");
          var _context2 = require("../../../context");
          function DynamicQuestionAnswerItem(props) {
            const {
              onKeyDown
            } = (0, _useInput.useInput)(props.index);
            const {
              correct,
              value = ''
            } = props.value;
            const {
              values,
              setValues,
              removeItem
            } = (0, _dynamicList.useDynamicListContext)();
            const {
              setErrors
            } = (0, _context2.useMultipleChoiceContext)();
            const {
              texts: {
                multipleChoice: texts
              },
              activity
            } = (0, _context.useActivityContext)();
            const cls = `dynamic__icon selectable circle${correct ? ' dynamic__icon--correct' : ''}`;
            const onChange = event => {
              props.setValue({
                value: event.target.value,
                correct: !!correct
              });
            };
            const deleteItem = () => removeItem(props.index);
            const onMarkCorrect = event => {
              const check = (item, index) => {
                return index === props.index ? {
                  ...item,
                  correct: !correct
                } : {
                  ...item,
                  correct: false
                };
              };
              const data = values.map(check);
              setValues(data);
              // we need to reset the errors when we change the correct answer
              // to be able to active the save button again.
              setErrors([]);
            };
            return _react.default.createElement("div", {
              className: "dynamic-field__item dynamic-field__item--answer"
            }, _react.default.createElement("div", {
              className: "drag-icon"
            }, props.index + 1, "."), _react.default.createElement(_form.Input, {
              type: "text",
              value: value,
              onKeyDown: onKeyDown,
              onChange: onChange,
              placeholder: texts.answers.placeholder
            }), _react.default.createElement("section", {
              className: "item__actions"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "circle-check",
              className: cls,
              title: texts.actions.markCorrect,
              onClick: onMarkCorrect
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "drag-bullet-point circle",
              title: texts.actions.delete,
              onClick: deleteItem
            })));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/header
      ******************************************************************/

      ims.set('./activities/multiple-choice/form/questions/header', {
        hash: 955337108,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicHeader = DynamicHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _context = require("../../../../context");
          function DynamicHeader() {
            const {
              activity,
              texts,
              values,
              store
            } = (0, _context.useActivityContext)();
            const {
              specs
            } = (0, _dynamicList.useDynamicListContext)();
            let {
              actions
            } = texts.multipleChoice;
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const onGenerate = async ({
              notes
            }) => {
              try {
                const response = await activity.specs.generate(notes, {
                  related: values.specs.related
                });
                const questions = response.questions.map(({
                  question,
                  options,
                  correct_answer
                }) => ({
                  question,
                  options,
                  correctAnswer: correct_answer
                }));
                specs.setFetching(true);
                globalThis.setTimeout(() => {
                  specs.setFetching(false);
                  activity.specs.set({
                    questions: [...values.specs.questions, ...questions]
                  });
                }, 100);
              } catch (error) {
                console.log(error);
              }
            };
            return _react.default.createElement("section", {
              className: "section-actions__container actions-end border-bottom"
            }, _react.default.createElement(_ui.AIButton, {
              variant: "link",
              onClick: toggleModal
            }, actions.generateQuestions), _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              owner: store.model.owner,
              credits: store.model.credits,
              onConsume: store.model.consumeCoins,
              onClose: toggleModal,
              globalTexts: store.globalTexts,
              title: texts.multipleChoice.modalQuestions.title,
              descripction: texts.multipleChoice.modalQuestions.description,
              onGenerate: onGenerate
            }));
          }
        }
      });

      /***************************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/hooks/use-input
      ***************************************************************************/

      ims.set('./activities/multiple-choice/form/questions/hooks/use-input', {
        hash: 4293506373,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInput = useInput;
          var _dynamicList = require("pragmate-ui/dynamic-list");
          function useInput(index) {
            const {
              addItem,
              refs,
              removeItem,
              items
            } = (0, _dynamicList.useDynamicListContext)();
            const focus = index => {
              globalThis.setTimeout(() => refs.current[index]?.querySelector('input').focus(), 0);
            };
            const onKeyDown = event => {
              const value = event.currentTarget.value.trim();
              if (event.key === 'Tab') {
                //pressing shift + tab
                if (event.shiftKey && index > 0) {
                  if (!value) {
                    removeItem(index);
                  }
                  focus(index - 1);
                  event.preventDefault();
                  return;
                }
                //has more items
                if (index < items.length - 1) {
                  focus(index + 1);
                  return;
                }
                event.preventDefault();
                if (!value) return;
                addItem();
                globalThis.setTimeout(() => {
                  focus(index + 1);
                }, 0);
              }
              if (event.key === 'Backspace' && !value) {
                event.preventDefault();
                if (event.shiftKey && index > 0) {
                  if (!value) {
                    removeItem(index);
                    focus(index - 2);
                  }
                  event.preventDefault();
                  return;
                }
                if (index > 0) removeItem(index);
              }
            };
            return {
              onKeyDown
            };
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/index
      *****************************************************************/

      ims.set('./activities/multiple-choice/form/questions/index', {
        hash: 1430472930,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionsForm = DynamicQuestionsForm;
          var _react = require("react");
          var Dynamic = require("pragmate-ui/dynamic-list");
          var _question = require("./question");
          var _actions = require("./actions");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../../context");
          function DynamicQuestionsForm({
            errors,
            setErrors
          }) {
            const {
              values,
              activity
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = ({
              currentTarget: target
            }) => {
              const questions = target.value.map(item => ({
                question: item.question,
                options: item.options,
                correctAnswer: item.correctAnswer
              }));
              activity.specs.set({
                questions: [...questions]
              });
            };
            if (fetching) return _react.default.createElement("div", null, _react.default.createElement(_components.Spinner, {
              active: true,
              variant: "primary"
            }));
            return _react.default.createElement(Dynamic.Provider, {
              name: "questions",
              defaultValue: {
                question: ''
              },
              draggable: true,
              Item: _question.DynamicQuestionItem,
              value: values.specs.questions,
              onChange: onChange
            }, _react.default.createElement(Dynamic.List, {
              className: "dynamic-form dynamic-questions-form"
            }), _react.default.createElement(_actions.DynamicActions, null));
          }
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/questions/question
      ********************************************************************/

      ims.set('./activities/multiple-choice/form/questions/question', {
        hash: 3531890085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicQuestionItem = DynamicQuestionItem;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _useInput = require("./hooks/use-input");
          var _answers = require("./answers");
          var _dynamicList = require("pragmate-ui/dynamic-list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _core = require("@beyond-js/kernel/core");
          var _context = require("../../../../context");
          //@ts-ignore

          function DynamicQuestionItem(props) {
            const {
              onKeyDown
            } = (0, _useInput.useInput)(props.index);
            const {
              texts: {
                multipleChoice: texts
              },
              activity,
              values,
              store
            } = (0, _context.useActivityContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(!showModal);
            const processOptions = (options, correctAnswer) => {
              const correctIndex = correctAnswer ?? props.value.correctAnswer;
              return options.map((option, index) => ({
                value: option,
                correct: index === correctIndex
              }));
            };
            const data = props.value?.options ? processOptions(props.value.options) : [];
            const [answers, setAnswers] = _react.default.useState(data); // [ { value: 'answer', correct: true }
            const {
              removeItem
            } = (0, _dynamicList.useDynamicListContext)();
            const onChange = event => {
              props.setValue({
                correctAnswer: props.value.correctAnswer,
                question: event.target.value,
                options: answers.map(item => item.value)
              });
            };
            const getAnswer = ({
              currentTarget: {
                value: answers
              }
            }) => {
              const correctAnswerIndex = answers.findIndex(answer => answer.correct);
              const correctAnswer = correctAnswerIndex === -1 ? undefined : correctAnswerIndex;
              const newValue = {
                question: value,
                options: answers.map(item => item.value),
                correctAnswer
              };
              props.setValue(newValue);
            };
            const value = props.value?.question ?? '';
            const deleteItem = event => {
              event.stopPropagation();
              const items = removeItem(props.index);
              activity.specs.set({
                questions: items
              });
            };
            const [fetching, setFetching] = _react.default.useState(false);
            const generateAnswers = async () => {
              const promise = new _core.PendingPromise();
              toggleModal();
              setTimeout(() => {
                promise.resolve();
              }, 1000);
              return promise;
            };
            const onGenerateAnswers = async ({
              notes
            }) => {
              const question = await activity.specs.generateAnswers({
                notes,
                question: value,
                index: props.index
              });
              setFetching(true);
              globalThis.setTimeout(() => {
                // activity.specs.set({ questions });
                setAnswers(processOptions(question.options, question.correctAnswer));
                setFetching(false);
              }, 1000);
            };
            const {
              owner,
              credits,
              consumeCoins
            } = store.model;
            return _react.default.createElement("section", {
              className: "dynamic-question-item__container"
            }, _react.default.createElement("div", {
              className: "dynamic-field__item dynamic-question-item"
            }, _react.default.createElement("div", {
              className: "drag-icon"
            }, props.index + 1, "."), _react.default.createElement(_form.Input, {
              placeholder: texts.questions.placeholder,
              name: "question",
              value: value ?? '',
              onChange: onChange,
              onKeyDown: onKeyDown
            }), _react.default.createElement("section", {
              className: "item__actions"
            }, _react.default.createElement(_ui.ProcessIconButton, {
              icon: "aiStars",
              className: "circle",
              disabled: !value || value === '',
              onClick: generateAnswers,
              title: texts.actions.generateAnswers
            }), _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              className: "circle",
              onClick: deleteItem,
              title: texts.actions.delete
            }))), _react.default.createElement(_answers.DynamicAnswersForm, {
              fetching: fetching,
              disabled: !props.value,
              show: answers?.length,
              answers: answers,
              onChange: getAnswer
            }), _react.default.createElement(_refinament.RefinementModal, {
              owner: owner,
              credits: credits,
              onConsume: consumeCoins,
              globalTexts: store.globalTexts,
              show: showModal,
              onClose: toggleModal,
              title: texts.modalAnswers.title,
              descripction: texts.modalAnswers.description,
              onGenerate: onGenerateAnswers
            }));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/form/related-activity
      ******************************************************************/

      ims.set('./activities/multiple-choice/form/related-activity', {
        hash: 1842988910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../../context");
          function RelatedActivityField({
            related,
            updateErrors
          }) {
            const {
              store,
              texts: {
                multipleChoice: texts,
                errors
              },
              activity
            } = (0, _context.useActivityContext)();
            const filter = item => item.type === 'content-theory';
            const map = item => ({
              value: item.id,
              label: item.title
            });
            const options = store.model.activities.items.filter(filter).map(map);
            let defaultValue = {
              value: '',
              label: texts.related.independent
            };
            const onChange = event => {
              activity.specs.set({
                related: event.target.value
              });
              if (event.target.value !== '') {
                const related = store.model.activities.get(event.target.value);
                if (!related.materials.article) {
                  updateErrors([errors.NO_RELATED_ACTIVITY]);
                  return;
                }
              }
              updateErrors([]);
              activity.specs.set({
                related: event.target.value
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: related,
              options: [defaultValue, ...options],
              onChange: onChange
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/multiple-choice/index
      **************************************************/

      ims.set('./activities/multiple-choice/index', {
        hash: 769504278,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivity = MultipleChoiceActivity;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _empty = require("./empty");
          var _form2 = require("./form");
          var _specs = require("./specs");
          function MultipleChoiceActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const toggleView = view => setView(view);
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = () => activity.save();
            const onCancel = () => {
              activity.specs.revert();
              setView('specs');
            };
            const changeView = () => setView('specs');
            const finalView = activity.specs.empty() && view !== 'form' ? 'empty' : view === 'empty' ? 'specs' : view;
            const listenChanges = () => {
              setView(activity.specs.empty() ? 'empty' : view === 'empty' ? 'specs' : view);
            };
            (0, _hooks.useBinder)([activity.specs], listenChanges, ['specs.cleaned', 'activity.generated', 'activity.saved']);
            (0, _hooks.useBinder)([activity], listenChanges, 'activity.generated');
            return React.createElement(React.Fragment, null, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement("div", {
              className: `page-container pt-0`
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement("div", {
              className: "specs-label"
            }, React.createElement(_form.Textarea, {
              label: texts.activities.description.label,
              variant: "floating",
              name: "description",
              onChange: onChange,
              onBlur: onBlur,
              placeholder: texts.activities.description.placeholder,
              value: activity.description
            }))), React.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                specs: React.createElement(_specs.MultipleChoiceSpecs, {
                  setView: setView
                }),
                form: React.createElement(_form2.MultipleChoiceManualForm, {
                  onCancel: onCancel,
                  changeView: changeView
                })
              },
              placeholder: React.createElement(_empty.MultipleChoiceEmptySpecs, {
                name: activity.type,
                toggleView: toggleView
              })
            }))));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/answers
      **********************************************************/

      ims.set('./activities/multiple-choice/specs/answers', {
        hash: 1788779777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionAnswer = void 0;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          const QuestionAnswer = ({
            item: answer,
            correctAnswer,
            index
          }) => {
            const icon = index === correctAnswer ? 'check' : 'close';
            const cls = `item-list--answer section-container ${icon === 'check' ? 'success-container' : 'incorrect-answer'}`;
            return _react.default.createElement("li", {
              className: cls
            }, _react.default.createElement("span", {
              className: "item-list-icon"
            }, icon === 'check' && _react.default.createElement(_icons.Icon, {
              icon: icon,
              className: "icon-xs"
            })), _react.default.createElement("span", {
              className: "item-list__content"
            }, answer));
          };
          exports.QuestionAnswer = QuestionAnswer;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/header
      *********************************************************/

      ims.set('./activities/multiple-choice/specs/header', {
        hash: 4229975323,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsHeader = SpecsHeader;
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../../context");
          function SpecsHeader({
            children,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity,
              store,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const attrs = {
              disabled: !activity.prepared || disabled
            };
            const toggleShow = () => setShowSuggestions(!showSuggestions);
            const onGenerate = notes => {
              return activity.specs.generate(notes, {
                ...suggestionSpecs
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_ui.AIButton, {
              ...attrs,
              onClick: toggleShow,
              variant: "link",
              ensure: false
            }, globalTexts.actions.generate))), children, showSuggestions && _react.default.createElement(_refinament.RefinementModal, {
              show: showSuggestions,
              owner: store.model.owner,
              onConsume: store.model.consumeCoins,
              onClose: toggleShow,
              title: texts.refine.title,
              descripction: texts.refine.description,
              onGenerate: onGenerate
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/index
      ********************************************************/

      ims.set('./activities/multiple-choice/specs/index', {
        hash: 2075130467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceSpecs = MultipleChoiceSpecs;
          var _react = require("react");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _deleteModal = require("../../delete-modal");
          var _components = require("pragmate-ui/components");
          var _list = require("./list");
          function MultipleChoiceSpecs({
            setView
          }) {
            const {
              values,
              activity,
              editData,
              store,
              texts
            } = (0, _context.useActivityContext)();
            const actionTexts = store.globalTexts.actions;
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const [redordering, setReorder] = _react.default.useState(false);
            const [order, setOrder] = _react.default.useState(values.specs.questions);
            const toggleReorder = () => setReorder(!redordering);
            const [processing, setProcessing] = _react.default.useState(false);
            const onBinder = () => {
              const specs = activity.specs.getData();
              editData({
                specs
              });
            };
            (0, _hooks.useBinder)([activity.specs], onBinder, 'specs.generated');
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty && activity.materials.empty
            };
            const onEdit = event => setView('form');
            const onReorder = event => setReorder(!redordering);
            const orderLabel = !redordering ? actionTexts.order : actionTexts.save;
            const saveReordering = async () => {
              setProcessing(true);
              await activity.specs.set({
                questions: order
              });
              await activity.save();
              setProcessing(false);
              toggleReorder();
            };
            const reorderAttrs = {
              onClick: redordering ? saveReordering : onReorder,
              disabled: activity.specs.empty && activity.materials.empty || processing
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "form__multiple-field"
            }, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.titles.multiplechoice), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, !redordering && _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: onEdit,
              icon: "pencil"
            }, actionTexts.edit), _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), !redordering && _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, actionTexts.delete))), _react.default.createElement(_list.MultipleChoiceList, {
              order: order,
              setOrder: setOrder,
              reordering: redordering,
              toggle: toggleReorder
            })), _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/list
      *******************************************************/

      ims.set('./activities/multiple-choice/specs/list', {
        hash: 4142711631,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceList = MultipleChoiceList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _framerMotion = require("framer-motion");
          var _context = require("../../../context");
          var _questionItemList = require("./question-item-list");
          function MultipleChoiceList({
            order,
            setOrder,
            reordering,
            toggle
          }) {
            const {
              values,
              activity,
              editData,
              texts,
              store
            } = (0, _context.useActivityContext)();
            const onReorder = values => {
              setOrder(values);
              const specs = {
                ...values.specs
              };
              specs.questions = [...order];
              activity.specs.set(specs);
            };
            if (reordering) {
              return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.Reorder.Group, {
                values: order,
                onReorder: onReorder,
                className: "activity-list"
              }, order.map(question => {
                return _react.default.createElement(_framerMotion.Reorder.Item, {
                  key: question.question,
                  value: question
                }, _react.default.createElement(_questionItemList.QuestionItemList, {
                  data: question,
                  as: "div",
                  draggable: true
                }));
              })));
            }
            return _react.default.createElement(_list.List, {
              className: "activity-list",
              items: values.specs.questions,
              control: _questionItemList.QuestionItemList
            });
          }
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./activities/multiple-choice/specs/question-item-list
      *********************************************************************/

      ims.set('./activities/multiple-choice/specs/question-item-list', {
        hash: 2044658730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionItemList = QuestionItemList;
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _answers = require("./answers");
          var _components = require("pragmate-ui/components");
          function QuestionItemList({
            data,
            as = 'li',
            draggable = false
          }) {
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useActivityContext)();
            const Control = as;
            const onToggle = () => !isDragging;
            return _react.default.createElement(Control, {
              className: "subform__items"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, _react.default.createElement(_components.ConditionalContainer, {
              condition: draggable,
              ternary: true,
              options: {
                true: _react.default.createElement(_icons.Icon, {
                  className: "item-list-icon",
                  icon: "drag"
                }),
                false: _react.default.createElement(_icons.Icon, {
                  className: "item-list-icon",
                  icon: "circle-check"
                })
              }
            }), _react.default.createElement("span", {
              className: "item-list__content"
            }, data.question))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!data.options?.length,
              options: {
                true: _react.default.createElement(_list.List, {
                  items: data.options,
                  specs: {
                    correctAnswer: data.correctAnswer
                  },
                  control: _answers.QuestionAnswer
                }),
                false: _react.default.createElement("div", {
                  className: "text-end text-danger"
                }, texts.multipleChoice.emptyOptions)
              }
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/objective-field
      ********************************************/

      ims.set('./activities/objective-field', {
        hash: 3117135016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "specs-label"
            }, React.createElement("label", null, texts.specs.objective.label), React.createElement(_form.Textarea, {
              name: "objective",
              placeholder: texts.specs.objective.placeholder,
              value: values.specs?.objective
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/specs/base-spec
      ********************************************/

      ims.set('./activities/specs/base-spec', {
        hash: 3031721988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBaseSpec = ActivityBaseSpec;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../context");
          function ActivityBaseSpec({
            name
          }) {
            const {
              values,
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const onChange = async ({
              currentTarget: {
                name,
                value
              }
            }) => {
              activity.set({
                [name]: value
              });
            };
            const onBlur = () => activity.save();
            const value = activity.specs[name] ?? texts.specs[name].placeholder;
            return _react.default.createElement("div", {
              className: "specs-label"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.specs[name].label), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              onBlur: onBlur,
              type: "textarea",
              name: name,
              value: value
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/specs/base-subspec
      ***********************************************/

      ims.set('./activities/specs/base-subspec', {
        hash: 1868760248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseSubspec = BaseSubspec;
          var _react = require("react");
          function BaseSubspec({
            item
          }) {
            return _react.default.createElement("div", {
              className: "subform__items"
            }, _react.default.createElement("strong", {
              className: "capitalize"
            }, item.name, ": "), " ", _react.default.createElement("span", null, item.value));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/specs/dynamic-label
      ************************************************/

      ims.set('./activities/specs/dynamic-label', {
        hash: 4152479464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicLabelContainer = DynamicLabelContainer;
          var _react = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _baseSubspec = require("./base-subspec");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _dynamicSpec = require("./manual/dynamic-spec");
          function DynamicLabelContainer({
            name,
            data
          }) {
            const {
              activity: {
                specs
              },
              texts
            } = (0, _context.useActivityContext)();
            const [toggle, setToggle] = _react.default.useState(false);
            const onToggle = () => setToggle(!toggle);
            const items = specs[name]?.map((item, index) => {
              const [fieldName, value] = Object.keys(specs.structure[name].fields);
              return {
                name: item[fieldName],
                value: item[value]
              };
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h6", null, texts.specs[name].label), _react.default.createElement(_icons.Icon, {
              icon: "edit",
              className: "icon-clickable",
              onClick: onToggle
            })), _react.default.createElement(_components.ConditionalContainer, {
              condition: toggle,
              ternary: true,
              options: {
                true: _react.default.createElement(_dynamicSpec.DynamicItemSpec, {
                  onCancel: onToggle,
                  name: name,
                  item: specs[name]
                }),
                false: _react.default.createElement(_list.List, {
                  className: "criteria__items-list",
                  items: items,
                  control: _baseSubspec.BaseSubspec
                })
              }
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./activities/specs/empty
      ****************************************/

      ims.set('./activities/specs/empty', {
        hash: 2491807003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptySpecs = EmptySpecs;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../context");
          function EmptySpecs({
            name,
            toggleView,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const onManual = () => toggleView('manual');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-header"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              bordered: true,
              onClick: onManual
            }, globalTexts.actions.manual))), _react.default.createElement("div", {
              className: "activity__empty-container"
            }, _react.default.createElement("span", {
              className: "activity--empty__description"
            }, texts.activities.empty.description)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/specs/header
      *****************************************/

      ims.set('./activities/specs/header', {
        hash: 2215289490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsHeader = SpecsHeader;
          var _react = require("react");
          var _context = require("../../context");
          function SpecsHeader({
            children,
            disabled,
            suggestionSpecs = {}
          }) {
            const {
              texts
            } = (0, _context.useActivityContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, texts.specs.title)), children);
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic-spec
      ******************************************************/

      ims.set('./activities/specs/manual/dynamic-spec', {
        hash: 4290850893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicItemSpec = DynamicItemSpec;
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          var _footer = require("./footer");
          var _useForm = require("./use-form");
          function DynamicItemSpec({
            onCancel,
            name,
            item
          }) {
            const {
              activity: {
                specs
              }
            } = (0, _context.useActivityContext)();
            const {
              processing,
              actions
            } = (0, _useForm.useForm)(onCancel);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dynamic.DynamicContainer, {
              name: name,
              data: specs.structure[name]
            }), _react.default.createElement(_footer.ManualFormFooter, {
              onSave: actions.onSave,
              onCancel: actions.onCancel,
              processing: processing
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/empty
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/empty', {
        hash: 917111638,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyDynamicContent = EmptyDynamicContent;
          var _react = require("react");
          var _context = require("../../../../context");
          function EmptyDynamicContent() {
            const {
              texts
            } = (0, _context.useActivityContext)();
            return _react.default.createElement("div", {
              className: "form__empty-section"
            }, _react.default.createElement("span", null, texts.specs.objective.empty));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/field
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/field', {
        hash: 1005986422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomDynamicField = CustomDynamicField;
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../../../context");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select
          };
          function CustomDynamicField({
            name,
            data,
            index,
            onChange
          }) {
            const {
              activity: {
                specs
              },
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const {
              value
            } = (0, _dynamicField.useDynamicFieldContext)();
            const [updated, setUpdated] = _react.default.useState({});
            const fields = Object.keys(data.fields);
            (0, _hooks.useBinder)([activity], () => setUpdated({}));
            const values = specs[name] ? specs[name] : [];
            const defaultValues = {};
            const fieldTexts = texts.specs[name];
            const onBlur = () => {
              activity.save({
                specs: {
                  name: value
                }
              });
            };
            const output = fields.map((name, i) => {
              if (name === 'attachments') return null;
              const Field = fieldTypes[data.fields[name]];
              const attrs = {
                label: fieldTexts[name].label,
                placeholder: fieldTexts[name].placeholder,
                name,
                data: name,
                value: values[index]?.[name] ?? ''
              };
              defaultValues[name] = '';
              return _react.default.createElement(Field, {
                ...attrs,
                disabled: activity.fetching,
                onChange: onChange,
                key: `${name}-${i}`,
                className: "with-placeholder",
                variant: "floating",
                onBlur: onBlur
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, _react.default.createElement("footer", {
              className: "flex-container flex-space-between flex-end"
            }, _react.default.createElement(_dynamicField.DynamicIconButton, {
              className: "circle",
              action: "remove",
              icon: "delete",
              index: index
            })));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/specs/manual/dynamic/index
      *******************************************************/

      ims.set('./activities/specs/manual/dynamic/index', {
        hash: 2891573058,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicContainer = DynamicContainer;
          var _dynamicField = require("@aimpact/ailearn-app/components/dynamic-field");
          var _react = require("react");
          var _context = require("../../../../context");
          var _empty = require("./empty");
          var _field = require("./field");
          function DynamicContainer({
            name,
            data,
            position
          }) {
            const {
              activity: {
                specs
              },
              activity,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            if (!data.hasOwnProperty('fields')) {
              console.warn(`DynamicContainer: no fields found on ${name}`);
              return null;
            }
            const values = specs[name] ? specs[name] : [];
            const fieldTexts = texts.specs[name];
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              specs.set({
                [name]: value
              });
              if (event.name !== 'change') {
                activity.save();
              }
            };
            const onBlur = event => activity.save();
            // if (!values.length) values.push(defaultValues);
            return _react.default.createElement("div", {
              className: "dynamic-form-field-container"
            }, _react.default.createElement(_dynamicField.DynamicFieldContainer, {
              lazyInit: true,
              value: values,
              name: name,
              onBlur: onBlur,
              onChange: onChange,
              empty: _empty.EmptyDynamicContent
            }, _react.default.createElement("section", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, position ? _react.default.createElement("span", null, position, ". ") : null, fieldTexts.label), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_dynamicField.DynamicButton, {
              variant: "link",
              action: "add",
              icon: "add"
            }, globalTexts.actions.add))), _react.default.createElement("div", null, _react.default.createElement(_dynamicField.DynamicField, null, _react.default.createElement(_field.CustomDynamicField, {
              name: name,
              data: data
            })))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/field
      ***********************************************/

      ims.set('./activities/specs/manual/field', {
        hash: 627428843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsField = SpecsField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function SpecsField(props) {
            const {
              texts,
              activity,
              saveActivity
            } = (0, _context.useActivityContext)();
            const {
              name,
              type,
              index,
              titles,
              value,
              position,
              structure
            } = props;
            const {
              specs
            } = activity;
            const {
              label,
              placeholder,
              title
            } = texts.specs[structure[name]?.label ? structure[name]?.label : name];
            const [internalValue, setInternalValue] = _react.default.useState(specs[name]);
            (0, _hooks.useBinder)([specs], () => {
              setInternalValue(specs[name]);
            });
            const onChange = event => {
              setInternalValue(event.currentTarget.value);
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            if (!texts.specs[name]) {
              console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              return null;
            }
            const attrs = {
              label,
              placeholder,
              value: internalValue
            };
            //the structure has and advance settings defining if is required or not, for example.
            const Field = fieldTypes[type];
            return _react.default.createElement("div", null, titles ? _react.default.createElement("h5", null, position ? _react.default.createElement("span", null, position, ". ") : null, title) : null, _react.default.createElement(Field, {
              variant: "floating",
              name: name,
              ...attrs,
              onChange: onChange,
              onBlur: saveActivity
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./activities/specs/manual/footer
      ************************************************/

      ims.set('./activities/specs/manual/footer', {
        hash: 2408792289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualFormFooter = ManualFormFooter;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          function ManualFormFooter({
            processing,
            onCancel,
            onSave
          }) {
            const {
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            return _react.default.createElement("footer", {
              className: "flex-container flex-end mt-30 gap-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel,
              disabled: processing
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: processing
            }, globalTexts.actions.save));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./activities/specs/manual/form
      **********************************************/

      ims.set('./activities/specs/manual/form', {
        hash: 3123132512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsForm = SpecsForm;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          var _field = require("./field");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function SpecsForm({
            type = 'agent',
            titles = true
          }) {
            const {
              texts,
              activity,
              saveActivity
            } = (0, _context.useActivityContext)();
            const {
              specs
            } = activity;
            const structure = specs.structure[type];
            const fields = Object.keys(structure);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            const toMap = fields.filter(name => !['optional', 'attachments'].includes(name));
            const output = toMap.map((name, index) => {
              if (!texts.specs[name]) {
                console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              }
              //the structure has and advance settings defining if is required or not, for example.
              if (typeof structure[name] === 'string' || typeof structure[name] === 'object' && structure[name].type !== 'array') {
                return _react.default.createElement(_field.SpecsField, {
                  structure: structure,
                  position: structure[name].position,
                  key: `${name}.${index}`,
                  titles: titles,
                  index: index,
                  type: structure[name].type,
                  name: name
                });
              }
              const Field = fieldTypes[structure[name].type];
              const {
                label,
                placeholder
              } = texts.specs[name];
              const attrs = {
                label,
                placeholder,
                value: specs[name] ?? ''
              };
              return _react.default.createElement(Field, {
                onChange: onChange,
                variant: "floating",
                position: structure[name].position,
                key: `${name}-${index}`,
                name: name,
                data: structure[name],
                onBlur: saveActivity,
                ...attrs
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/specs/manual/index
      ***********************************************/

      ims.set('./activities/specs/manual/index', {
        hash: 3711330155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualMaterialForm = ManualMaterialForm;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../../../context");
          var _dynamic = require("./dynamic");
          const fieldTypes = {
            input: _form.Input,
            textarea: _form.Textarea,
            radio: _form.Radio,
            checkbox: _form.Checkbox,
            select: _form.Select,
            array: _dynamic.DynamicContainer
          };
          function ManualMaterialForm({}) {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const {
              specs
            } = activity;
            const fields = Object.keys(specs.structure);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              activity.specs.set({
                [name]: value
              });
            };
            const output = fields.map((name, index) => {
              if (!texts.specs[name]) {
                console.warn(`ManualMaterialForm: no field texts found for ${name}`);
              }
              const {
                label,
                placeholder
              } = texts.specs[name];
              const attrs = {
                label,
                placeholder,
                value: specs[name] ?? ''
              };
              if (typeof specs.structure[name] === 'object' && specs.structure[name].type !== 'array') {
                const Field = fieldTypes[specs.structure[name].type];
                return _react.default.createElement(Field, {
                  className: "with-placeholder",
                  key: `${name}-${index}`,
                  name: name,
                  ...attrs,
                  onChange: onChange
                });
              }
              //strings
              const Field = fieldTypes[specs.structure[name]];
              return _react.default.createElement(Field, {
                className: "with-placeholder",
                key: `${name}-${index}`,
                name: name,
                ...attrs,
                onChange: onChange
              });
            });
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, texts.specs.title)), _react.default.createElement("div", {
              className: "activity__form"
            }, _react.default.createElement("div", null, output)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/specs/manual/use-form
      **************************************************/

      ims.set('./activities/specs/manual/use-form', {
        hash: 1109786597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = useForm;
          var _react = require("react");
          var _context = require("../../../context");
          /**
           *
           * @param onCancel Function to toggle the form, it could be a field or the full manual form
           * @returns
           */
          function useForm(toggleView) {
            const [processing, setProcessing] = _react.default.useState(false);
            const {
              texts,
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const onSave = async () => {
              try {
                setProcessing(true);
                await activity.save();
                setProcessing(false);
                toggleView('specs');
              } catch (e) {
                console.error(e);
              }
            };
            const handleCancel = () => {
              const objective = activity.specs.objective;
              activity.specs.revert();
              activity.set({
                objective
              });
              toggleView('specs');
            };
            return {
              processing,
              setProcessing,
              actions: {
                onSave,
                onCancel: handleCancel
              }
            };
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./activities/specs/specs
      ****************************************/

      ims.set('./activities/specs/specs', {
        hash: 2058428127,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Specs = Specs;
          var _react = require("react");
          var _context = require("../../context");
          var _dynamicLabel = require("./dynamic-label");
          var _baseSpec = require("./base-spec");
          var _components = require("pragmate-ui/components");
          var _deleteModal = require("../../components/delete-modal");
          function Specs() {
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const {
              activity,
              activity: {
                specs
              },
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const toggleModal = () => setShowDeleteModal(!showDeleteModal);
            const data = specs.getProperties();
            const fields = Object.keys(specs.structure);
            const attrs = {
              onClick: toggleModal,
              disabled: activity.specs.empty()
            };
            const output = fields.map((name, index) => {
              if (typeof specs.structure[name] === 'string' || specs.structure[name].type !== 'array') {
                return _react.default.createElement(_baseSpec.ActivityBaseSpec, {
                  key: `${name}-${index}`,
                  name: name
                });
              }
              return _react.default.createElement(_dynamicLabel.DynamicLabelContainer, {
                key: `${name}-${index}`,
                name: name,
                data: data
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "activity__section-subheader"
            }, _react.default.createElement("h5", null, texts.specs.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...attrs,
              icon: "delete"
            }, globalTexts.actions.delete))), output, _react.default.createElement(_deleteModal.DeleteActivityData, {
              show: showDeleteModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activities/spoken/index
      *****************************************/

      ims.set('./activities/spoken/index', {
        hash: 4174602183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivity = SpokenActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _header = require("../../header");
          var _form = require("../specs/manual/form");
          var _field = require("../field");
          function SpokenActivity() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const [view, setView] = React.useState(activity.specs.empty() ? 'empty' : 'specs');
            const onListen = () => {
              const view = activity.specs.empty() ? 'empty' : 'specs';
              setView(view);
            };
            (0, _hooks.useBinder)([activity], onListen, 'activity.saved');
            (0, _hooks.useBinder)([activity.specs], onListen, 'specs.cleaned');
            const finalView = view === 'specs' && activity.specs.empty() ? 'empty' : view;
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "page-container"
            }, React.createElement("section", {
              className: "activity-general__container"
            }, React.createElement(_header.ActivityHeader, null), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_field.ActivityField, {
              type: "textarea",
              name: "description"
            }), React.createElement(_form.SpecsForm, {
              type: "general",
              titles: false
            })))), React.createElement("section", {
              className: "activity-agent__container"
            }, React.createElement("div", {
              className: "page-container"
            }, React.createElement("header", {
              className: "activity__section-header"
            }, React.createElement("div", {
              className: "grid-container"
            }, React.createElement("h5", null, texts.activities.sections.agent.title), React.createElement("span", {
              className: "subtitle"
            }, texts.activities.sections.agent.subtitle, React.createElement(_icons.AppIcon, {
              className: "activiy-icon",
              icon: "ai"
            })))), React.createElement("div", {
              className: "activity__form"
            }, React.createElement(_form.SpecsForm, null)))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./components/ai-button
      **************************************/

      ims.set('./components/ai-button', {
        hash: 2396306767,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ensure = true,
            ...props
          }) {
            const handleClick = ensure ? () => _mainLayout.LayoutBroker.ensureCredits(onClick) : onClick;
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
            ensure = true,
            ...props
          }) {
            const handleClick = ensure ? () => _mainLayout.LayoutBroker.ensureCredits(onClick) : onClick;
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/cancel-modal
      *****************************************/

      ims.set('./components/cancel-modal', {
        hash: 2305831071,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CancelChangesModal = CancelChangesModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../context");
          function CancelChangesModal({
            show,
            onClose
          }) {
            const {
              store,
              texts,
              clearData,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            if (!show) return false;
            const onConfirm = () => {
              clearData();
              store.editActivity(undefined);
              onClose();
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              title: texts.modal.cancel.title,
              text: texts.modal.cancel.description,
              onClose: onClose,
              onCancel: onClose,
              btnConfirm: {
                label: globalTexts.actions.confirm
              },
              btnCancel: {
                label: globalTexts.actions.cancel
              },
              onConfirm: () => {
                onConfirm();
              }
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/delete-modal
      *****************************************/

      ims.set('./components/delete-modal', {
        hash: 3566858788,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteActivityData = DeleteActivityData;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../context");
          function DeleteActivityData({
            show,
            onClose
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              texts: {
                activities: texts
              },
              activity,
              store: {
                globalTexts: {
                  actions
                }
              }
            } = (0, _context.useActivityContext)();
            if (!show) return null;
            const onConfirm = async () => {
              try {
                setFetching(true);
                onClose();
                activity.specs.clear();
                await activity.save();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onClose: onClose,
              onConfirm: onConfirm,
              btnConfirm: {
                label: actions.confirm
              },
              btnCancel: {
                label: actions.cancel
              },
              onCancel: onClose
            }, _react.default.createElement("h3", null, texts.deleteModal.title), _react.default.createElement("p", null, texts.deleteModal.description)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./components/generation-modal/breadcrumb
      ********************************************************/

      ims.set('./components/generation-modal/breadcrumb', {
        hash: 354493598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _context = require("../../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts,
              values,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const onBack = () => {
              if (values.updated) {
                setShowCanceLModal(true);
                return;
              }
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const onGnerate = specs => {
              // console.log('generate', specs);
            };
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            return _react.default.createElement("div", {
              className: "internal-breadcrumb "
            }, _react.default.createElement(_icons.IconButton, {
              onClick: onBack,
              title: globalTexts.actions.back,
              icon: "backArrow",
              className: "circle",
              variant: "default"
            }), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: toggleSuggestions
            }, globalTexts.actions.generate), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, texts.manual.cancel)), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              objective: activity.objective,
              onClose: toggleSuggestions,
              onGenerate: onGnerate
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./components/generation-modal/materials
      *******************************************************/

      ims.set('./components/generation-modal/materials', {
        hash: 2776097170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialsSuggestionsModal = MaterialsSuggestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("../ai-button");
          var _context = require("../../context");
          var _useMaterials = require("../../activities/content-theory/materials/use-materials");
          function MaterialsSuggestionsModal({
            type,
            onClose
          }) {
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [notes, setNotes] = _react.default.useState('');
            const {
              generateMaterial,
              fetching
            } = (0, _useMaterials.useMaterialActions)();
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                await generateMaterial(type, notes);
                onClose();
              }
            };
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "refine-modal modal-centered",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine[type].title), _react.default.createElement("span", null, texts.refine[type].description)), _react.default.createElement(_form.Form, null, _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "notes",
              variant: "floating",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            }), _react.default.createElement("footer", {
              className: "modal__actions"
            }, _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: events.onClick
            }, globalTexts.actions.generate))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./components/generation-modal/specs-modal
      *********************************************************/

      ims.set('./components/generation-modal/specs-modal', {
        hash: 3747141589,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsSuggestionsModal = SpecsSuggestionsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("../ai-button");
          var _context = require("../../context");
          function SpecsSuggestionsModal({
            onClose,
            suggestionSpecs = {}
          }) {
            const {
              texts,
              activity,
              values,
              editData,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [error, setError] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                try {
                  setFetching(true);
                  const response = await activity.specs.generate(notes, {
                    ...suggestionSpecs
                  });
                  //controlled error
                  if (response.error) {
                    const getError = (error, fields = []) => {
                      const key = texts.errors?.[error] ? error : 'default';
                      if (!!fields.length) {
                        return texts.errors[key] + ` ${fields}`;
                      }
                      return texts.errors[key];
                    };
                    setError(getError(response.error, response.fields));
                    setFetching(false);
                    return;
                  }
                  const specs = activity.specs.getData();
                  // await activity.set({ specs });
                  editData({
                    specs
                  });
                  // onClose();
                  setTimeout(() => {
                    setFetching(false);
                  }, 1000);
                } catch (e) {
                  console.error(99, e, e.message);
                  setError('default');
                }
              }
            };
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Form, null, _react.default.createElement(_ui.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "notes",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: events.onClick
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./components/generation-modal/suggestions-modal
      ***************************************************************/

      ims.set('./components/generation-modal/suggestions-modal', {
        hash: 2815882905,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionModal = SuggestionModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("../ai-button");
          var _context = require("../../context");
          function SuggestionModal({
            type,
            onClose
          }) {
            const {
              texts,
              activity,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({
              observations: '',
              removeItems: false,
              type
            });
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                setFetching(true);
                await activity.specs.generate(values.observations);
                onClose();
                setTimeout(() => {
                  setFetching(false);
                }, 2000);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("span", null, texts.refine.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: events.onClick
            }, globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./components/language-field
      *******************************************/

      ims.set('./components/language-field', {
        hash: 4219818305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageField = LanguageField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function LanguageField() {
            const {
              texts,
              store,
              setValues,
              activity
            } = (0, _context.useActivityContext)();
            const selected = {
              value: '',
              label: texts.languages.select.placeholder
            };
            const [language, setLanguage] = _react.default.useState(activity.language);
            const onChange = async event => {
              setLanguage(event.currentTarget.value);
              await activity.set({
                language: event.currentTarget.value
              });
              await store.save();
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: activity.language,
              name: "audience",
              options: options,
              onChange: onChange,
              ...disabled
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./components/select-activity
      ********************************************/

      ims.set('./components/select-activity', {
        hash: 3390676443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectActivity = SelectActivity;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function SelectActivity({
            values,
            setValues
          }) {
            const {
              activity,
              store
            } = (0, _context.useActivityContext)();
            let defaultValue = {
              value: '',
              label: 'Select'
            };
            const options = [];
            store.model.activities.items.forEach(i => {
              if (i.id === activity.id) return;
              if (i.id === values.specs.activityId) defaultValue = {
                value: i.id,
                label: i.title
              };
              options.push({
                value: i.id,
                label: i.title
              });
            });
            const selectChange = data => {
              setValues(values => ({
                ...values,
                specs: {
                  ...values.specs,
                  activityId: data.target.value
                }
              }));
            };
            return _react.default.createElement("label", {
              htmlFor: "",
              className: "help-info"
            }, "Is this activity based on another?", _react.default.createElement(_reactSelect.ReactSelect, {
              onChange: selectChange,
              defaultValue: defaultValue,
              options: [defaultValue, ...options]
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3983226997,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActivityContext = exports.ActivityContext = void 0;
          var _react = require("react");
          const ActivityContext = exports.ActivityContext = _react.default.createContext({});
          const useActivityContext = () => _react.default.useContext(ActivityContext);
          exports.useActivityContext = useActivityContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./header/breadcrumb
      ***********************************/

      ims.set('./header/breadcrumb', {
        hash: 3656739082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumbHeader = BreadCrumbHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _routing = require("@beyond-js/kernel/routing");
          var _modal = require("pragmate-ui/modal");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../context");
          var _progress = require("./progress");
          var _preview = require("./preview");
          function BreadCrumbHeader() {
            const {
              activity,
              store,
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useActivityContext)();
            const [showCancelModal, setShowCanceLModal] = _react.default.useState(false);
            const [showSuggestions, setShowSuggestions] = _react.default.useState(false);
            const [showTestModal, setShowTestModal] = _react.default.useState(false);
            const [processing, setProcessing] = _react.default.useState(false);
            const onGenerate = specs => activity.generate(specs);
            const onConfirm = () => {
              setShowCanceLModal(false);
              store.editActivity(undefined);
              _routing.routing.back();
            };
            const toggleSuggestions = () => setShowSuggestions(!showSuggestions);
            const onModalCancel = () => setShowCanceLModal(false);
            const test = async () => {
              try {
                setShowTestModal(true);
                setProcessing(true);
                if (!activity.readyToTest) {
                  _toast.toast.warning(texts.activities.test.warning);
                  return;
                }
                await store.testActivity(activity.id);
                globalThis.document.querySelector('html').style.overflow = 'hidden';
                setProcessing(false);
              } catch (e) {
                _toast.toast.error(store.globalTexts.errors.DEFAULT_ERROR);
              }
            };
            const closeTest = () => {
              globalThis.document.querySelector('html').style.overflow = 'auto';
              setShowTestModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "internal-breadcrumb"
            }, _react.default.createElement("div", {
              className: "page-container flex-container"
            }, _react.default.createElement("div", {
              className: "internal-breadcrumb__content"
            }, _react.default.createElement(_progress.ActivityProgress, null), _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }, !['multiple-choice', 'spoken', 'assessment'].includes(activity.type) && _react.default.createElement(_icons.AppButton, {
              disabled: processing || !activity.readyToTest || !store.hasCredits,
              icon: "outlinedPlay",
              variant: "secondary",
              className: "circle test-action-button",
              onClick: test
            }, store.globalTexts.actions.testActivity), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: toggleSuggestions
            }, globalTexts.actions.generate))))), showTestModal && _react.default.createElement(_preview.ActivityPreview, {
              onClose: closeTest
            }), showCancelModal && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onModalCancel
            }, _react.default.createElement("div", null, globalTexts.actions.cancel)), showSuggestions && _react.default.createElement(_refinament.RefinementActivityModal, {
              show: showSuggestions,
              required: true,
              title: texts.refine.title,
              description: texts.refine.description,
              texts: texts.refine,
              objective: activity.objective,
              activity: activity,
              showRelated: activity.type === 'multiple-choice',
              activities: store.model.activities,
              onClose: toggleSuggestions,
              onConsume: store.model.consumeCoins,
              onGenerate: onGenerate
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./header/index
      ******************************/

      ims.set('./header/index', {
        hash: 1516798972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _language = require("./language");
          /*bundle*/
          function ActivityHeader({}) {
            const {
              activity,
              texts,
              saveActivity
            } = (0, _context.useActivityContext)();
            const [picture, setPicture] = _react.default.useState({
              src: activity.picture,
              date: Date.now()
            });
            const cls = `header-activity__container header-activity__container--${activity.type}`;
            const [updated, setUpdated] = _react.default.useState({});
            const onGenerate = args => activity.generatePicture(args);
            (0, _hooks.useBinder)([activity], () => setUpdated({}), 'pictureSuggestions.changed');
            (0, _hooks.useBinder)([activity], () => setPicture({
              src: activity.picture,
              date: Date.now()
            }), 'image.generated');
            const pictureSrc = picture.src ? `${picture.src}?size=sm&${Date.now()}` : undefined;
            const onChange = event => {
              activity.set({
                title: event.currentTarget.value
              });
            };
            return _react.default.createElement("section", {
              className: "page-edition-section-header"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: activity.pictureSuggestions,
              entity: "activity",
              picture: pictureSrc,
              onGenerate: onGenerate
            }), _react.default.createElement("div", {
              className: "header__title-container"
            }, _react.default.createElement("div", null, _react.default.createElement(_form.Input, {
              className: "input__activity-header",
              name: "title",
              value: activity.title ? activity.title : '',
              onChange: onChange,
              placeholder: texts.form.title,
              onBlur: saveActivity
            })), _react.default.createElement("div", {
              className: "activity-type"
            }, _react.default.createElement(_icons.AppIcon, {
              name: activity.type
            }), " ", texts.types[activity.type])), _react.default.createElement("div", {
              className: "flex-container header__icons"
            }, _react.default.createElement(_language.ActivityLanguage, null))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./header/language
      *********************************/

      ims.set('./header/language', {
        hash: 3386563106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityLanguage = ActivityLanguage;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          function ActivityLanguage() {
            const {
              texts,
              store,
              setValues,
              activity
            } = (0, _context.useActivityContext)();
            const selected = {
              value: '',
              label: texts.languages.select.placeholder
            };
            const [language, setLanguage] = _react.default.useState(activity.language);
            const [show, setShow] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const onChange = async event => {
              setLanguage(event.currentTarget.value);
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const languages = {
              en: '/assets/english.png',
              es: '/assets/spanish.png'
            };
            const onSave = async event => {
              setFetching(true);
              activity.save({
                language
              });
              setFetching(false);
              setShow(false);
            };
            const toggleShow = () => setShow(!show);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_image.Image, {
              className: "activity__language",
              src: languages[activity.language],
              alt: "language",
              onClick: toggleShow
            }), show && _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: toggleShow
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSave
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: language,
              name: "language",
              options: options,
              onChange: onChange
            }), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: fetching
            }, store.globalTexts.actions.save)))));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./header/preview
      ********************************/

      ims.set('./header/preview', {
        hash: 1501015105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityPreview = ActivityPreview;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chat = require("@aimpact/ailearn-app/assignments/chat");
          var _context = require("../context");
          function ActivityPreview({
            onClose
          }) {
            const {
              store
            } = (0, _context.useActivityContext)();
            const [fetching, setFetching] = React.useState(store.fetching && !store?.activityStore?.ready);
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching && !store?.activityStore?.ready);
            }, 'test.activity.changed');
            return React.createElement(_modal.Modal, {
              show: true,
              className: "activity-modal__form activity-preview-modal",
              onClose: onClose
            }, !fetching ? React.createElement(_chat.ChatControl, {
              store: store.activityStore,
              ...store.activityData
            }) : React.createElement(_ui.ProcessContainer, {
              key: "container",
              fetching: fetching
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./header/progress-item
      **************************************/

      ims.set('./header/progress-item', {
        hash: 2182598468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressItem = ProgressItem;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ProgressItem({
            name,
            optional = false,
            spec = false
          }) {
            const {
              activity,
              texts
            } = (0, _context.useActivityContext)();
            const obj = spec ? activity.specs : activity;
            const ref = _react.default.useRef(null);
            const value = activity.validateData(name);
            const [current, setCurrent] = _react.default.useState(value);
            const cls = `progress__item${value ? ' progress__item--completed' : ''}`;
            let state = value ? 'completed' : 'pending';
            if (optional && !value) state = 'optional';
            (0, _hooks.useBinder)([obj], () => {
              const value = spec ? activity.specs.validateData(name) : !!activity[name];
              if (value) ref.current.classList.add('progress__item--completed');else ref.current.classList.remove('progress__item--completed');
              setCurrent(value);
            }, `${name}.changed`);
            if (spec && !activity.specs.structure[name]) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
              className: cls,
              ref: ref
            }, _react.default.createElement("span", {
              className: "label"
            }, texts.progress.fields[name]), _react.default.createElement("span", {
              className: "state"
            }, texts.progress.states[state])));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./header/progress
      *********************************/

      ims.set('./header/progress', {
        hash: 1618109175,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityProgress = ActivityProgress;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../context");
          var _progressItem = require("./progress-item");
          function ActivityProgress() {
            const {
              texts,
              activity
            } = (0, _context.useActivityContext)();
            const total = activity.progressData;
            const [updated, setUpdated] = _react.default.useState({});
            const valid = total.filter(item => !!item);
            (0, _hooks.useBinder)([activity, activity.specs], () => {
              setUpdated({});
            }, 'change');
            const progressItems = activity.progressFields.map(({
              name,
              optional
            }) => _react.default.createElement(_progressItem.ProgressItem, {
              key: name,
              name: name,
              optional: optional
            }));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "activity-progress__container"
            }, _react.default.createElement("div", {
              className: "progress-label"
            }, _react.default.createElement("span", {
              className: "state-label"
            }, texts.progress.label), _react.default.createElement("span", {
              className: "state-result"
            }, valid.length, "/", total.length)), _react.default.createElement("ul", {
              className: "activity__progress"
            }, progressItems)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 86721099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityForm = ModuleActivityForm;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _characterTalk = require("./activities/character-talk");
          var _contentTheory = require("./activities/content-theory");
          var _debate = require("./activities/debate");
          var _multipleChoice = require("./activities/multiple-choice");
          var _spoken = require("./activities/spoken");
          var _context = require("./context");
          var _breadcrumb = require("./header/breadcrumb");
          /* bundle */
          function ModuleActivityForm({
            store,
            activity
          }) {
            const [values, setValues] = _react.default.useState(activity.getProperties());
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              type
            } = activity;
            (0, _hooks.useBinder)([activity], () => {
              setValues({
                ...activity.getProperties()
              });
            }, 'change');
            if (!textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const saveActivity = () => {
              activity.save();
            };
            const value = {
              store,
              activity,
              texts,
              values,
              setValues,
              saveActivity
            };
            return _react.default.createElement(_context.ActivityContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "activity-container"
            }, _react.default.createElement(_breadcrumb.BreadCrumbHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                'multiple-choice': _react.default.createElement(_multipleChoice.MultipleChoiceActivity, null),
                debate: _react.default.createElement(_debate.DebateActivity, null),
                'character-talk': _react.default.createElement(_characterTalk.CharacterTalkActivity, null),
                spoken: _react.default.createElement(_spoken.SpokenActivity, null),
                'content-theory': _react.default.createElement(_contentTheory.ContentTheoryActivity, null)
              },
              placeholder: _react.default.createElement(_react.default.Fragment, null, "Nada que renderizar")
            })));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 792411869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./save-button
      *****************************/

      ims.set('./save-button', {
        hash: 520994083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SaveButton = SaveButton;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          function SaveButton({
            saved = false,
            disabled,
            callback
          }) {
            const {
              values,
              editData,
              texts,
              store,
              activity
            } = (0, _context.useActivityContext)();
            const onSave = async event => {
              event.stopPropagation();
              /**
               * activity object is a copy and does not update the model items list.
               * We need to update the model item to reflect the changes
               * @todo: validate how to update the model item directly.
               */
              if (!saved) {
                await store.model.activities.map.get(activity.id).set(values);
                await activity.set(values);
                store.save();
                editData({
                  updated: false
                });
              }
              if (callback) callback();
            };
            const attrs = {
              disabled: !values.updated || disabled,
              onClick: onSave
            };
            return _react.default.createElement(_components.Button, {
              variant: "primary",
              ...attrs
            }, store.globalTexts.actions.save);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./components/ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./header/index",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./index",
        "from": "ModuleActivityForm",
        "name": "ModuleActivityForm"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./components/ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./components/ai-button').AIIconButton : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./header/index').ActivityHeader : value);
        (require || prop === 'ModuleActivityForm') && _export("ModuleActivityForm", ModuleActivityForm = require ? require('./index').ModuleActivityForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfZm9ybSIsIkFkdmFuY2VkRmllbGRzIiwidGV4dHMiLCJhY3Rpdml0eSIsInVzZUFjdGl2aXR5Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJhY3Rpdml0aWVzIiwic2VjdGlvbnMiLCJhZHZhbmNlZCIsInRpdGxlIiwic3VidGl0bGUiLCJTcGVjc0Zvcm0iLCJ0eXBlIiwidGl0bGVzIiwiX2ljb25zIiwiX2hvb2tzIiwiUmVhY3QiLCJfaGVhZGVyIiwiX2FkdmFuY2VkRmllbGRzIiwiX2ZpZWxkIiwiQ2hhcmFjdGVyVGFsa0FjdGl2aXR5IiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsInNwZWNzIiwiZW1wdHkiLCJvbkxpc3RlbiIsInVzZUJpbmRlciIsIkFjdGl2aXR5SGVhZGVyIiwiQWN0aXZpdHlGaWVsZCIsIm5hbWUiLCJhZ2VudCIsIkFwcEljb24iLCJpY29uIiwiX3NwZWNzIiwiQWN0aXZpdHlDb250ZW50IiwidG9nZ2xlVmlldyIsIlNwZWNzIiwiX21hdGVyaWFscyIsIl9sYXlvdXRzIiwib25DaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwic2V0TGF5b3V0IiwidmFsdWUiLCJJY29uIiwiYXR0cnMiLCJzZXR0aW5ncyIsImxheW91dCIsIm9wdGlvbnMiLCJBcHBJY29uQnV0dG9uIiwib25DbGljayIsIk1hdGVyaWFsc1ZpZXciLCJMYXlvdXRDaGF0U2VsZWN0aW9uIiwiX21vZGFsIiwiX2NvbXBvbmVudHMiLCJDb25maXJtQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50IiwidG9vbHRpcCIsImNhbGxiYWNrIiwiYXMiLCJib3JkZXJlZCIsImRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiY2hpbGRyZW4iLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJtb2RhbCIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwib25Db25maXJtIiwiQ29udHJvbCIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImJ0bkNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJjb25maXJtIiwiYnRuQ2FuY2VsIiwiY2FuY2VsIiwic2hvdyIsIm9uQ2FuY2VsIiwiQ29udGVudFRoZW9yeUFjdGl2aXR5Iiwic2V0VXBkYXRlZCIsIkxheW91dEljb24iLCJkYXRhc2V0IiwiY29udGFpbmVyQ2xzIiwiSHRtbFdyYXBwZXIiLCJfaWNvbiIsIl9tYXJrZG93biIsIl9lbXB0eUFydGljbGUiLCJfY29uZmlybUFjdGlvbiIsIkFydGljbGVUYWIiLCJvbkNsb3NlIiwic3RvcmUiLCJ2YWx1ZXMiLCJnbG9iYWxUZXh0cyIsIm1hdGVyaWFsVGV4dHMiLCJjb250ZW50VGhlb3J5IiwibWF0ZXJpYWxzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhcnRpY2xlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm1hbnVhbCIsInNldE1hbnVhbCIsInRvZ2dsZU1hbnVhbCIsInRhcmdldCIsIm9uRGVsZXRlIiwiY2xlYXIiLCJzYXZlIiwib25DbGlja0NhbmNlbCIsIm9uU2F2ZSIsInNldCIsIkVtcHR5QXJ0aWNsZU1hdGVyaWFsIiwib25NYW51YWwiLCJNYXJrZG93biIsImVkaXQiLCJkZWxldGUiLCJjbHNDaGFyYWN0ZXJzIiwibGVuZ3RoIiwiRm9ybSIsIm9uU3VibWl0IiwiVGV4dGFyZWEiLCJhdXRvcmVzaXplIiwicGxhY2Vob2xkZXIiLCJmb3JtIiwiY2hhcmFjdGVycyIsIl91aSIsIl91c2VNYXRlcmlhbHMiLCJDb250ZW50VGhlb3J5RW1wdHlBdWRpbyIsImdlbmVyYXRlQXVkaW8iLCJ1c2VNYXRlcmlhbEFjdGlvbnMiLCJvbkdlbmVyYXRlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfaXRlbSIsIkNvbnRlbnRUaGVvcnlBdWRpbyIsImF1ZGlvcyIsInNldEF1ZGlvcyIsIkNvbnRlbnRUaGVvcnlBdWRpb0l0ZW0iLCJkZWxldGVBdWRpbyIsImhhcyIsIm9uR2VuZXJhdGVJdGVtIiwic2l6ZSIsImNhbkJlQ3JlYXRlZCIsImVtcHR5VGV4dCIsImF1ZGlvIiwiZW1wdHlNYXRlcmlhbCIsIm1heExlbmd0aCIsInR5cGVzIiwibm9BdWRpbyIsInBhcmFtcyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiZXhwb3J0cyIsIl9saXN0IiwiQ29udGVudFRoZW9yeUF1ZGlvVmlldyIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImRlbGV0ZUF1ZGlvcyIsIkxpc3QiLCJjb250cm9sIiwiX3JlZmluYW1lbnQiLCJzaG93U3VnZ2VzdGlvbnMiLCJzZXRTaG93U3VnZ2VzdGlvbnMiLCJzZXREYXRhIiwiZ2VuZXJhdGVBcnRpY2xlIiwidG9nZ2xlTW9kYWwiLCJSZWZpbmVtZW50QWN0aXZpdHlNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwibW9kZWwiLCJjb25zdW1lQ29pbnMiLCJyZWZpbmVtZW50Iiwib2JqZWN0aXZlIiwiRW1wdHlNYXRlcmlhbCIsIk1hdGVyaWFsc1N1Z2dlc3Rpb25zTW9kYWwiLCJfdGFicyIsIl9hcnRpY2xlIiwiX3BhbmUiLCJfYXVkaW9zIiwiTWF0ZXJpYWxzRm9ybSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVwZGF0ZWQiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsImdlbmVyYXRvciIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZm9yRWFjaCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIk1hdGVyaWFsc0hlYWRlck1vZGFsIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIk1hdGVyaWFsUGFuZSIsIlJlZmluZW1lbnRNb2RhbCIsIm9uQ3JlYXRlIiwiZ2xvYmFsVGhpcyIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIk1hdGVyaWFsTGlzdCIsInRydW5jYXRlVGV4dCIsInN1YnN0cmluZyIsImRlbGV0ZU1vZGFsIiwiSWNvbkJ1dHRvbiIsIk1hbnVhbE1hdGVyaWFsRm9ybSIsInNob3dDYW5jZWxNb2RhbCIsInNldFNob3dDYW5jZUxNb2RhbCIsIm9uTW9kYWxDYW5jZWwiLCJ0ZXh0YXJlYSIsIl9lbXB0eSIsIl9tYW51YWxNYXRlcmlhbEZvcm0iLCJtYXRlcmlhbCIsInNldE1hdGVyaWFsIiwib3Blbk1hbnVhbEZvcm0iLCJ1bmRlZmluZWQiLCJlIiwiY29uc29sZSIsImxvZyIsIm5vdGVzIiwiZGF0YSIsImdlbmVyYXRlTWF0ZXJpYWwiLCJzZXRUaW1lb3V0IiwiZHlzbGV4aWEiLCJzeW50aGVzaXMiLCJEZWJhdGVBY3Rpdml0eSIsInNhdmVBY3Rpdml0eSIsIm9uQmx1ciIsIkRlbGV0ZUFjdGl2aXR5RGF0YSIsImNsZWFyQ29udGVudCIsImVycm9yIiwiX2R5bmFtaWMiLCJmaWVsZFR5cGVzIiwiaW5wdXQiLCJJbnB1dCIsInJhZGlvIiwiUmFkaW8iLCJjaGVja2JveCIsIkNoZWNrYm94Iiwic2VsZWN0IiwiU2VsZWN0IiwiYXJyYXkiLCJEeW5hbWljQ29udGFpbmVyIiwicHJvcHMiLCJpbmRleCIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJ3YXJuIiwiRmllbGQiLCJNdWx0aXBsZUNob2ljZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTXVsdGlwbGVDaG9pY2VDb250ZXh0IiwidXNlQ29udGV4dCIsIk11bHRpcGxlQ2hvaWNlRW1wdHlTcGVjcyIsInN1Z2dlc3Rpb25TcGVjcyIsIm11bHRpcGxlQ2hvaWNlIiwiYWRkUXVlc3Rpb24iLCJfY29udGV4dDIiLCJfcXVlc3Rpb25zIiwiTXVsdGlwbGVDaG9pY2VNYW51YWxGb3JtIiwiY2hhbmdlVmlldyIsImVycm9ycyIsInNldEVycm9ycyIsInJlZiIsInVzZVJlZiIsInNldENvbmZpcm0iLCJxdWVzdGlvbnMiLCJ3cm9uZ3MiLCJxdWVzdGlvbiIsImlzTmFOIiwiY29ycmVjdEFuc3dlciIsImVtcHRpZXMiLCJmaWx0ZXIiLCJpdGVtIiwidXNlRWZmZWN0IiwiY29udGFpbmVyIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmNsdWRlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY29udGV4dFZhbHVlIiwiY2FuY2VsQ2hhbmdlcyIsInVucHVibGlzaGVkIiwiUHJvdmlkZXIiLCJTcGVjc0hlYWRlciIsIkVycm9yUmVuZGVyZXIiLCJ3cm9uZ1F1ZXN0aW9ucyIsIkR5bmFtaWNRdWVzdGlvbnNGb3JtIiwiX2R5bmFtaWNMaXN0IiwiRHluYW1pY0FjdGlvbnMiLCJhZGRJdGVtIiwidXNlRHluYW1pY0xpc3RDb250ZXh0IiwiRHluYW1pY0Fuc3dlcnNGb290ZXIiLCJvbkFkZCIsInNob3dlZCIsImFkZEFuc3dlciIsIkR5bmFtaWMiLCJfZm9vdGVyIiwiRHluYW1pY0Fuc3dlcnNGb3JtIiwiYW5zd2VycyIsImFkZGVkIiwic2V0QWRkZWQiLCJTcGlubmVyIiwiSXRlbSIsIkR5bmFtaWNRdWVzdGlvbkFuc3dlckl0ZW0iLCJfdXNlSW5wdXQiLCJvbktleURvd24iLCJ1c2VJbnB1dCIsImNvcnJlY3QiLCJzZXRWYWx1ZXMiLCJyZW1vdmVJdGVtIiwiY2xzIiwic2V0VmFsdWUiLCJkZWxldGVJdGVtIiwib25NYXJrQ29ycmVjdCIsImNoZWNrIiwibWFwIiwibWFya0NvcnJlY3QiLCJEeW5hbWljSGVhZGVyIiwicmVzcG9uc2UiLCJyZWxhdGVkIiwiY29ycmVjdF9hbnN3ZXIiLCJnZW5lcmF0ZVF1ZXN0aW9ucyIsIm93bmVyIiwiY3JlZGl0cyIsIm1vZGFsUXVlc3Rpb25zIiwiZGVzY3JpcGN0aW9uIiwicmVmcyIsImZvY3VzIiwidHJpbSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfcXVlc3Rpb24iLCJfYWN0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImRyYWdnYWJsZSIsIkR5bmFtaWNRdWVzdGlvbkl0ZW0iLCJfYW5zd2VycyIsIl9jb3JlIiwicHJvY2Vzc09wdGlvbnMiLCJjb3JyZWN0SW5kZXgiLCJvcHRpb24iLCJzZXRBbnN3ZXJzIiwiZ2V0QW5zd2VyIiwiY29ycmVjdEFuc3dlckluZGV4IiwiZmluZEluZGV4IiwiYW5zd2VyIiwibmV3VmFsdWUiLCJnZW5lcmF0ZUFuc3dlcnMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25HZW5lcmF0ZUFuc3dlcnMiLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIm1vZGFsQW5zd2VycyIsIl9yZWFjdFNlbGVjdCIsIlJlbGF0ZWRBY3Rpdml0eUZpZWxkIiwidXBkYXRlRXJyb3JzIiwiaWQiLCJpbmRlcGVuZGVudCIsImdldCIsIk5PX1JFTEFURURfQUNUSVZJVFkiLCJSZWFjdFNlbGVjdCIsIl9mb3JtMiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHkiLCJyZXZlcnQiLCJmaW5hbFZpZXciLCJsaXN0ZW5DaGFuZ2VzIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJNdWx0aXBsZUNob2ljZVNwZWNzIiwiUXVlc3Rpb25BbnN3ZXIiLCJwcmVwYXJlZCIsInRvZ2dsZVNob3ciLCJlbnN1cmUiLCJyZWZpbmUiLCJfZGVsZXRlTW9kYWwiLCJlZGl0RGF0YSIsImFjdGlvblRleHRzIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwicmVkb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwib3JkZXIiLCJzZXRPcmRlciIsInRvZ2dsZVJlb3JkZXIiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uQmluZGVyIiwiZ2V0RGF0YSIsIm9uRWRpdCIsIm9uUmVvcmRlciIsIm9yZGVyTGFiZWwiLCJzYXZlUmVvcmRlcmluZyIsInJlb3JkZXJBdHRycyIsIm11bHRpcGxlY2hvaWNlIiwiTXVsdGlwbGVDaG9pY2VMaXN0IiwicmVvcmRlcmluZyIsInRvZ2dsZSIsIl9mcmFtZXJNb3Rpb24iLCJfcXVlc3Rpb25JdGVtTGlzdCIsIlJlb3JkZXIiLCJHcm91cCIsIlF1ZXN0aW9uSXRlbUxpc3QiLCJfY29sbGFwc2libGUiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJlbXB0eU9wdGlvbnMiLCJPYmplY3RpdmVGaWVsZCIsIkFjdGl2aXR5QmFzZVNwZWMiLCJodG1sRm9yIiwiQmFzZVN1YnNwZWMiLCJfYmFzZVN1YnNwZWMiLCJfZHluYW1pY1NwZWMiLCJEeW5hbWljTGFiZWxDb250YWluZXIiLCJzZXRUb2dnbGUiLCJmaWVsZE5hbWUiLCJzdHJ1Y3R1cmUiLCJmaWVsZHMiLCJEeW5hbWljSXRlbVNwZWMiLCJFbXB0eVNwZWNzIiwiX3VzZUZvcm0iLCJ1c2VGb3JtIiwiTWFudWFsRm9ybUZvb3RlciIsIkVtcHR5RHluYW1pY0NvbnRlbnQiLCJfZHluYW1pY0ZpZWxkIiwiQ3VzdG9tRHluYW1pY0ZpZWxkIiwidXNlRHluYW1pY0ZpZWxkQ29udGV4dCIsImRlZmF1bHRWYWx1ZXMiLCJmaWVsZFRleHRzIiwib3V0cHV0IiwiaSIsIkR5bmFtaWNJY29uQnV0dG9uIiwicG9zaXRpb24iLCJoYXNPd25Qcm9wZXJ0eSIsIkR5bmFtaWNGaWVsZENvbnRhaW5lciIsImxhenlJbml0IiwiRHluYW1pY0J1dHRvbiIsIkR5bmFtaWNGaWVsZCIsIlNwZWNzRmllbGQiLCJ0b01hcCIsImhhbmRsZUNhbmNlbCIsIl9keW5hbWljTGFiZWwiLCJfYmFzZVNwZWMiLCJnZXRQcm9wZXJ0aWVzIiwiU3Bva2VuQWN0aXZpdHkiLCJfaWNvbnMyIiwiX21haW5MYXlvdXQiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJDYW5jZWxDaGFuZ2VzTW9kYWwiLCJjbGVhckRhdGEiLCJlZGl0QWN0aXZpdHkiLCJfcm91dGluZyIsIkJyZWFkQ3J1bWJIZWFkZXIiLCJvbkJhY2siLCJyb3V0aW5nIiwiYmFjayIsIm9uR25lcmF0ZSIsInRvZ2dsZVN1Z2dlc3Rpb25zIiwiX2FpQnV0dG9uIiwic2V0Tm90ZXMiLCJldmVudHMiLCJQcm9jZXNzQ29udGFpbmVyIiwiU3BlY3NTdWdnZXN0aW9uc01vZGFsIiwic2V0RXJyb3IiLCJnZXRFcnJvciIsIm1lc3NhZ2UiLCJTdWdnZXN0aW9uTW9kYWwiLCJvYnNlcnZhdGlvbnMiLCJyZW1vdmVJdGVtcyIsIkxhbmd1YWdlRmllbGQiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaXNEaXNhYmxlZCIsInNhdmVkIiwiU2VsZWN0QWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwic2VsZWN0Q2hhbmdlIiwiQWN0aXZpdHlDb250ZXh0IiwiX3RvYXN0IiwiX3Byb2dyZXNzIiwiX3ByZXZpZXciLCJzaG93VGVzdE1vZGFsIiwic2V0U2hvd1Rlc3RNb2RhbCIsInRlc3QiLCJyZWFkeVRvVGVzdCIsInRvYXN0Iiwid2FybmluZyIsInRlc3RBY3Rpdml0eSIsIkRFRkFVTFRfRVJST1IiLCJjbG9zZVRlc3QiLCJBY3Rpdml0eVByb2dyZXNzIiwiQXBwQnV0dG9uIiwiaGFzQ3JlZGl0cyIsIkFjdGl2aXR5UHJldmlldyIsInNob3dSZWxhdGVkIiwiX2NvdmVySW1hZ2UiLCJfbGFuZ3VhZ2UiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsInNyYyIsImRhdGUiLCJEYXRlIiwibm93IiwiYXJncyIsImdlbmVyYXRlUGljdHVyZSIsInBpY3R1cmVTcmMiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJlbnRpdHkiLCJBY3Rpdml0eUxhbmd1YWdlIiwiX2ltYWdlIiwic2V0U2hvdyIsImVuIiwiZXMiLCJJbWFnZSIsImFsdCIsIl9jaGF0IiwiYWN0aXZpdHlTdG9yZSIsIkNoYXRDb250cm9sIiwiYWN0aXZpdHlEYXRhIiwiUHJvZ3Jlc3NJdGVtIiwib3B0aW9uYWwiLCJzcGVjIiwib2JqIiwidmFsaWRhdGVEYXRhIiwic2V0Q3VycmVudCIsInN0YXRlIiwicHJvZ3Jlc3MiLCJzdGF0ZXMiLCJfcHJvZ3Jlc3NJdGVtIiwidG90YWwiLCJwcm9ncmVzc0RhdGEiLCJ2YWxpZCIsInByb2dyZXNzSXRlbXMiLCJwcm9ncmVzc0ZpZWxkcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jaGFyYWN0ZXJUYWxrIiwiX2NvbnRlbnRUaGVvcnkiLCJfZGViYXRlIiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsIl9icmVhZGNydW1iIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsImRlYmF0ZSIsInNwb2tlbiIsImRlZmluZVByb3BlcnR5IiwiU2F2ZUJ1dHRvbiJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2NoYXJhY3Rlci10YWxrL2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jaGFyYWN0ZXItdGFsay9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9hY3Rpdml0eS1jb250ZW50LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L2FkdmFuY2VkLWZpZWxkcy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9sYXlvdXRzL2ljb24udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbGF5b3V0cy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvYXVkaW9zL2VtcHR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3MvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2F1ZGlvcy9pdGVtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9hdWRpb3Mvdmlldy50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHktYXJ0aWNsZS50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2hlYWRlci50c3giLCIvdHMvYWN0aXZpdGllcy9jb250ZW50LXRoZW9yeS9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL2xpc3QudHN4IiwiL3RzL2FjdGl2aXRpZXMvY29udGVudC10aGVvcnkvbWF0ZXJpYWxzL21hbnVhbC1tYXRlcmlhbC1mb3JtLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy9wYW5lLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NvbnRlbnQtdGhlb3J5L21hdGVyaWFscy91c2UtbWF0ZXJpYWxzLnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlYmF0ZS9hZHZhbmNlZC1maWVsZHMudHN4IiwiL3RzL2FjdGl2aXRpZXMvZGViYXRlL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvY29udGV4dC50cyIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9lbXB0eS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYWN0aW9ucy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvYW5zd2Vycy9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2Fuc3dlcnMvaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9xdWVzdGlvbnMvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9ob29rcy91c2UtaW5wdXQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbXVsdGlwbGUtY2hvaWNlL2Zvcm0vcXVlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9mb3JtL3F1ZXN0aW9ucy9xdWVzdGlvbi50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2UvZm9ybS9yZWxhdGVkLWFjdGl2aXR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvYW5zd2Vycy50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL211bHRpcGxlLWNob2ljZS9zcGVjcy9pbmRleC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvbGlzdC50c3giLCIvdHMvYWN0aXZpdGllcy9tdWx0aXBsZS1jaG9pY2Uvc3BlY3MvcXVlc3Rpb24taXRlbS1saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL29iamVjdGl2ZS1maWVsZC50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9iYXNlLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvYmFzZS1zdWJzcGVjLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL2R5bmFtaWMtbGFiZWwudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvaGVhZGVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9keW5hbWljLXNwZWMudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvZmllbGQudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2R5bmFtaWMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2ZpZWxkLnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC9mb290ZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2Zvcm0udHN4IiwiL3RzL2FjdGl2aXRpZXMvc3BlY3MvbWFudWFsL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL3NwZWNzL21hbnVhbC91c2UtZm9ybS50c3giLCIvdHMvYWN0aXZpdGllcy9zcGVjcy9zcGVjcy50c3giLCIvdHMvYWN0aXZpdGllcy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy9jb21wb25lbnRzL2NhbmNlbC1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9kZWxldGUtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9icmVhZGNydW1iLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvbWF0ZXJpYWxzLnRzeCIsIi90cy9jb21wb25lbnRzL2dlbmVyYXRpb24tbW9kYWwvc3BlY3MtbW9kYWwudHN4IiwiL3RzL2NvbXBvbmVudHMvZ2VuZXJhdGlvbi1tb2RhbC9zdWdnZXN0aW9ucy1tb2RhbC50c3giLCIvdHMvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC50c3giLCIvdHMvY29tcG9uZW50cy9zZWxlY3QtYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaGVhZGVyL2JyZWFkY3J1bWIudHN4IiwiL3RzL2hlYWRlci9pbmRleC50c3giLCIvdHMvaGVhZGVyL2xhbmd1YWdlLnRzeCIsIi90cy9oZWFkZXIvcHJldmlldy50c3giLCIvdHMvaGVhZGVyL3Byb2dyZXNzLWl0ZW0udHN4IiwiL3RzL2hlYWRlci9wcm9ncmVzcy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZS50cyIsIi90cy9zYXZlLWJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7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