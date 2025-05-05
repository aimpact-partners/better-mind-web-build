System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/reactive@2.0.5/model", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.0.5/entities/collection", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/components/module-card", "@aimpact/ailearn-app@0.4.1/modules/owner-assign.code", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_6 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_beyondJsKernel0112Texts) {
      dependency_7 = _beyondJsKernel0112Texts;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_9 = _beyondJsReactive205EntitiesCollection;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_12 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_14 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_15 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_17 = _aimpactAilearnApp041ComponentsModuleCard;
    }, function (_aimpactAilearnApp041ModulesOwnerAssignCode) {
      dependency_18 = _aimpactAilearnApp041ModulesOwnerAssignCode;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_20 = _pragmateUi100Beta7Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/community",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/reactive/entities/collection', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/module-card', dependency_17], ['@aimpact/ailearn-app/modules/owner-assign.code', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/empty', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-community-modules",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/community.widget",
        "is": "page",
        "route": "/community",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/community.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2233299519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              const tab = this.uri.qs.get('tab');
              this.#store.init();
              this.#store.load(tab);
            }
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4152547803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _core = require("@beyond-js/kernel/core");
          class StoreManager extends _model.ReactiveModel {
            #drafts;
            #community;
            get community() {
              return this.#community;
            }
            #tab;
            get tab() {
              return this.#tab;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #audiences;
            get audiences() {
              return this.#audiences;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #audience;
            get audience() {
              return this.#audience;
            }
            set audience(value) {
              if (value === this.#audience?.id) return;
              this.#audience = this.#audiences.find(item => item.id === value);
              this.trigger('audience.changed');
              this.trigger('change');
            }
            constructor() {
              super({
                properties: ['language', 'level', 'fetchingFilter']
              });
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#community = new _learningModules.LearningModules({
                type: 'community'
              });
              globalThis.store = this;
              // this.language = languages.current;
            }
            init() {
              this.#texts.on('change', this.listenTexts);
              this.listenTexts();
            }
            listenTexts = () => {
              if (!this.#texts.ready) return;
              this.triggerEvent();
            };
            clear() {
              super.ready = false;
              this.level = undefined;
              this.audience = undefined;
              this.#texts.off('change', this.listenTexts);
            }
            async load(type = 'published') {
              _mainLayout.LayoutBroker.set({
                model: undefined
              });
              await this.#community.load({
                type: 'community',
                route: 'community'
              });
              const audiences = await this.#community.loadAudience(_core.languages.current);
              _mainLayout.LayoutBroker.set({
                overlay: false,
                breadcrumb: [[this.globalTexts.entities.community]]
              });
              this.#audiences = audiences.items;
              super.ready = true;
            }
            loadAudience = async language => {
              const audiences = await this.#community.loadAudience(language);
              this.#audiences = audiences.items;
            };
            getFilters = async ({
              language,
              audience,
              level
            }) => {
              this.fetching = true;
              this.language = language;
              this.audience = audience;
              this.level = level;
              const specs = {
                type: 'community',
                route: 'community',
                language: this.language,
                audience,
                level
              };
              await this.#community.load(specs);
              this.fetching = false;
            };
            getAudience(audience) {
              return this.#audiences.find(item => item.id === audience);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 817106939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useListContext = exports.ListContext = void 0;
          var _react = require("react");
          const ListContext = exports.ListContext = _react.default.createContext({});
          const useListContext = () => _react.default.useContext(ListContext);
          exports.useListContext = useListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 1830535700,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyList() {
            const {
              texts
            } = (0, _context.useListContext)();
            return React.createElement(_ui.EmptyCard, {
              text: texts.empty.general.title,
              description: texts.empty.general.description,
              icon: "edit"
            }, React.createElement("div", {
              className: "actions flex-container flex-center"
            }, React.createElement(_components.Link, {
              href: "/modules/management",
              className: "grow btn btn-primary"
            }, texts.actions.create)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/filters/audience
      ****************************************/

      ims.set('./views/filters/audience', {
        hash: 15484137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function AudienceField({
            disabled
          }) {
            const {
              texts: {
                filters: {
                  audience: texts
                }
              },
              store
            } = (0, _context.useListContext)();
            const items = store.audiences.map(audience => ({
              value: audience.id,
              label: audience.name
            }));
            const [options, setOptions] = React.useState(items);
            const onChange = async event => {
              store.audience = event.target.value;
              store.set({
                level: undefined
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length
            };
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.select,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/index
      *************************************/

      ims.set('./views/filters/index', {
        hash: 2390616515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FiltersForm = FiltersForm;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _context = require("../context");
          var _level = require("./level");
          function FiltersForm({
            onClose,
            disabled = false
          }) {
            const {
              texts,
              store
            } = (0, _context.useListContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
            const [values, setValues] = React.useState({
              language: store.language,
              audience: store.audience?.id,
              level: store.level
            });
            const [levels, setLevels] = React.useState(store.audience?.levels ?? []); // [1
            const onChange = async event => {
              store.set({
                language: event.target.value,
                audience: undefined,
                level: undefined
              });
              store.loadAudience(event.target.value);
            };
            (0, _hooks.useBinder)([store], () => {
              setFetching(store.fetching);
              setValues({
                ...values,
                language: store.language
              });
            }, ['fetching.changed', 'change']);
            const isDisabled = {
              isDisabled: disabled
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.filters.languages[item]
            }));
            const onSearch = async () => {
              store.getFilters(values);
              onClose();
            };
            const onAudienceChange = async event => {
              setValues({
                ...values,
                audience: event.target.value
              });
              const audience = store.getAudience(event.target.value);
              setLevels(audience.levels);
              store.set({
                level: undefined
              });
            };
            const audienceItems = store.audiences.map(audience => ({
              value: audience.id,
              label: audience.name
            }));
            return React.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, React.createElement("div", {
              className: "filters__container"
            }, React.createElement("header", null, React.createElement("h3", null, texts.filter.title), React.createElement("span", null, texts.filter.description)), React.createElement("form", {
              action: "",
              onSubmit: onSearch
            }, React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.languages.select.label), React.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.filters.languages.select.placeholder,
              // value={store.model.language}
              value: store.language,
              name: "language",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.filters.audience.label), React.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.filters.audience.select,
              options: audienceItems,
              value: values.audience,
              onChange: onAudienceChange,
              ...isDisabled
            })), React.createElement(_level.AudienceLevelField, {
              value: values.level,
              options: levels,
              disabled: disabled,
              setValues: setValues
            }), React.createElement("div", {
              className: "modal__actions"
            }, React.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, store.globalTexts.actions.cancel), React.createElement(_components.Button, {
              variant: "primary",
              type: "submit"
            }, store.globalTexts.actions.search)))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/filters/labels
      **************************************/

      ims.set('./views/filters/labels', {
        hash: 990421364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilterLabels = FilterLabels;
          var React = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function FilterLabels({
            toggleModal
          }) {
            const {
              store
            } = (0, _context.useListContext)();
            const [update, setUpdate] = React.useState({});
            (0, _hooks.useBinder)([store], () => {
              setUpdate({});
            });
            const Tag = ({
              children,
              property
            }) => {
              const onRemove = event => {
                event.stopPropagation();
                store[property] = undefined;
                store.getFilters({
                  language: store.language,
                  audience: store.audience?.id,
                  level: !!store.audience ? store.level : undefined
                });
              };
              return React.createElement("span", {
                className: "filter-tag"
              }, React.createElement("span", {
                className: "label",
                onClick: toggleModal
              }, children, ' '), React.createElement("button", {
                onClick: onRemove
              }, "x"));
            };
            let level;
            const hasLevel = store.level && store.audience?.levels;
            if (hasLevel) {
              level = store.audience.levels.find(level => level.id === store.level);
            }
            return React.createElement("div", {
              className: "filters-selected__container"
            }, store.language ? React.createElement(Tag, {
              property: "language"
            }, store.language) : null, store.audience ? React.createElement(Tag, {
              property: "audience"
            }, store.audience?.name) : null, hasLevel ? React.createElement(Tag, {
              property: "level"
            }, level.label) : null);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/filters/level
      *************************************/

      ims.set('./views/filters/level', {
        hash: 3810936293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceLevelField = AudienceLevelField;
          var _reactSelect = require("pragmate-ui/form/react-select");
          var React = require("react");
          var _context = require("../context");
          function AudienceLevelField({
            disabled,
            options = [],
            value,
            setValues
          }) {
            const {
              texts: {
                filters: {
                  level: texts
                }
              },
              values,
              store
            } = (0, _context.useListContext)();
            const onChange = event => {
              setValues(values => ({
                ...values,
                level: event.target.value
              }));
            };
            const isDisabled = {
              isDisabled: disabled || !options.length
            };
            return React.createElement("div", null, React.createElement("label", {
              htmlFor: ""
            }, texts.label), React.createElement(_reactSelect.ReactSelect, {
              name: "level",
              placeholder: texts.select,
              value: value,
              options: options.map(item => ({
                value: item.id,
                label: item.label
              })),
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2440236138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("./context");
          var _filters = require("./filters");
          var _list = require("./list");
          var _components = require("pragmate-ui/components");
          var _labels = require("./filters/labels");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = React.useState(store.ready);
            const [fetching] = React.useState(store.fetching);
            const {
              texts
            } = store;
            const [showModal, setShowModal] = React.useState(false);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return React.createElement(_ui.PageLoader, null);
            const value = {
              texts,
              store,
              fetching
            };
            const onToggle = () => setShowModal(!showModal);
            return React.createElement(_context.ListContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, null, React.createElement(_ui.PageTitle, {
              title: store.texts.title
            }, React.createElement(_components.Button, {
              variant: "primary",
              onClick: onToggle
            }, store.globalTexts.actions.filters)), React.createElement(_labels.FilterLabels, {
              toggleModal: onToggle
            }), showModal && React.createElement(_filters.FiltersForm, {
              onClose: onToggle
            }), React.createElement(_list.List, null)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 3849354313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 3272651874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityItem = CommunityItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _ownerAssign = require("@aimpact/ailearn-app/modules/owner-assign.code");
          var React = require("react");
          var _context = require("./context");
          function CommunityItem({
            item
          }) {
            const {
              texts
            } = (0, _context.useListContext)();
            const [openModal, setOpenModal] = React.useState({
              open: false,
              item
            });
            const toggleModal = () => setOpenModal({
              item,
              open: !openModal.open
            });
            const onUse = event => {
              event.stopPropagation();
              setOpenModal({
                open: true,
                item
              });
            };
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              item: item,
              className: "community-card",
              texts: texts,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement("div", {
              className: "flex-container gap-05 flex-end"
            }, item?.playground?.assignment && React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), React.createElement(_icons.AppIconButton, {
              onClick: onUse,
              icon: "clone",
              title: texts.actions.use
            }))))), openModal.open && React.createElement(_ownerAssign.OwnerAssignForm, {
              item: item,
              onClose: toggleModal,
              texts: texts,
              type: "community"
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 733536379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _context = require("./context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          function List({}) {
            const {
              store,
              texts
            } = (0, _context.useListContext)();
            const preventMessage = texts.empty.community;
            const collection = store.community;
            const [data, setData] = React.useState({
              items: collection.items,
              fetching: collection.fetching,
              total: collection.items?.length
            }); // [1
            (0, _hooks.useBinder)([collection], () => {
              setData({
                ...data,
                items: collection.items,
                fetching: collection.fetching,
                total: collection.items?.length
              });
            });
            (0, _hooks.useBinder)([store], () => {
              setData({
                ...data,
                items: collection.items,
                fetching: collection.fetching,
                total: collection.items?.length
              });
            }, 'fetching.changed');
            if (data.fetching && !data.total) {
              return React.createElement(_empty.Empty, {
                className: "loading-list-page"
              }, React.createElement(_components.Spinner, {
                active: true
              }));
            }
            if (!collection.items?.length && !collection.fetching) {
              return React.createElement(_ui.EmptyCard, {
                text: preventMessage.title,
                description: preventMessage.description,
                icon: "info"
              });
            }
            const isFetching = collection.fetching || store.fetchingData || store.fetching;
            const cls = `entity__list ${isFetching ? ' is-fetching' : ''}`;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              className: cls,
              items: collection.items,
              control: _item.CommunityItem
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0IiwiaW5pdCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfbGVhcm5pbmdNb2R1bGVzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwiZHJhZnRzIiwiY29tbXVuaXR5IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiYXVkaWVuY2VzIiwiZ2xvYmFsVGV4dHMiLCJhdWRpZW5jZSIsImlkIiwiZmluZCIsIml0ZW0iLCJ0cmlnZ2VyIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiZmV0Y2giLCJMZWFybmluZ01vZHVsZXMiLCJ0eXBlIiwiZ2xvYmFsVGhpcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJsZXZlbCIsInVuZGVmaW5lZCIsIm9mZiIsIkxheW91dEJyb2tlciIsInNldCIsIm1vZGVsIiwicm91dGUiLCJsb2FkQXVkaWVuY2UiLCJsYW5ndWFnZXMiLCJjdXJyZW50Iiwib3ZlcmxheSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsIml0ZW1zIiwibGFuZ3VhZ2UiLCJnZXRGaWx0ZXJzIiwiZmV0Y2hpbmciLCJzcGVjcyIsImdldEF1ZGllbmNlIiwiX3JlYWN0IiwiTGlzdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxpc3RDb250ZXh0IiwidXNlQ29udGV4dCIsIlJlYWN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5TGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZW1wdHkiLCJnZW5lcmFsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImFjdGlvbnMiLCJjcmVhdGUiLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiZGlzYWJsZWQiLCJmaWx0ZXJzIiwibWFwIiwibGFiZWwiLCJuYW1lIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJ1c2VTdGF0ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJsZW5ndGgiLCJodG1sRm9yIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIl9ob29rcyIsIl9tb2RhbCIsIl9sZXZlbCIsIkZpbHRlcnNGb3JtIiwib25DbG9zZSIsInNldEZldGNoaW5nIiwidmFsdWVzIiwic2V0VmFsdWVzIiwibGV2ZWxzIiwic2V0TGV2ZWxzIiwidXNlQmluZGVyIiwib25TZWFyY2giLCJvbkF1ZGllbmNlQ2hhbmdlIiwiYXVkaWVuY2VJdGVtcyIsIk1vZGFsIiwiZmlsdGVyIiwiYWN0aW9uIiwib25TdWJtaXQiLCJBdWRpZW5jZUxldmVsRmllbGQiLCJCdXR0b24iLCJ2YXJpYW50IiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiY2FuY2VsIiwic2VhcmNoIiwiRmlsdGVyTGFiZWxzIiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJUYWciLCJjaGlsZHJlbiIsInByb3BlcnR5Iiwib25SZW1vdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNMZXZlbCIsIl9maWx0ZXJzIiwiX2xpc3QiLCJfbGFiZWxzIiwic2V0UmVhZHkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJQYWdlTG9hZGVyIiwib25Ub2dnbGUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJQYWdlVGl0bGUiLCJMaXN0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfbW9kdWxlQ2FyZCIsIl9vd25lckFzc2lnbiIsIkNvbW11bml0eUl0ZW0iLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJvcGVuIiwib25Vc2UiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJlbnRpdHkiLCJNb2R1bGVDYXJkRm9vdGVyIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJwbGF5Z3JvdW5kIiwiYXNzaWdubWVudCIsIkFwcEljb25CdXR0b24iLCJ0ZXN0IiwidXNlIiwiT3duZXJBc3NpZ25Gb3JtIiwiX2l0ZW0iLCJfZW1wdHkiLCJwcmV2ZW50TWVzc2FnZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwic2V0RGF0YSIsInRvdGFsIiwiRW1wdHkiLCJTcGlubmVyIiwiYWN0aXZlIiwiaXNGZXRjaGluZyIsImZldGNoaW5nRGF0YSIsImNscyIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2luZGV4LnRzeCIsIi90cy92aWV3cy9maWx0ZXJzL2xhYmVscy50c3giLCIvdHMvdmlld3MvZmlsdGVycy9sZXZlbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvaXRlbS50c3giLCIvdHMvdmlld3MvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJ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W119