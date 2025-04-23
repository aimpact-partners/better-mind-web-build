System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.3.32/modules/draft/store.code", "@beyond-js/kernel@0.1.12/routing", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.3.32/components/icons", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.32/modules/management/activity.code", "@aimpact/ailearn-app@0.3.32/modules/management/overview.code"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, ConfirmationModal, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ConfirmationModal: void 0,
    SupportingText: void 0,
    OwnerImage: void 0,
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
    }, function (_aimpactAilearnApp0332ModulesDraftStoreCode) {
      dependency_4 = _aimpactAilearnApp0332ModulesDraftStoreCode;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_7 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_9 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_13 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Form) {
      dependency_14 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Base) {
      dependency_15 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0332ModulesManagementActivityCode) {
      dependency_20 = _aimpactAilearnApp0332ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp0332ModulesManagementOverviewCode) {
      dependency_21 = _aimpactAilearnApp0332ModulesManagementOverviewCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/modules/draft/store.code', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['react', dependency_6], ['pragmate-ui/modal', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/alert', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/base', dependency_15], ['pragmate-ui/image', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_20], ['@aimpact/ailearn-app/modules/management/overview.code', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3169454325,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("@aimpact/ailearn-app/modules/draft/store.code");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = _store.store;
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.qs.get('id'), this.uri.qs.get('activityId'));
            }
            hide() {
              this.#store.hide();
            }
          }
          exports.Controller = Controller;
        }
      });

      /**********************
      INTERNAL MODULE: ./trim
      **********************/

      ims.set('./trim', {
        hash: 750512083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.trimText = trimText;
          function trimText(input, charLimit) {
            if (input.length <= charLimit) return input;
            let trimmed = input.slice(0, charLimit);
            // Check if the slice ends in the middle of a word
            if (input[charLimit] && !/\s|[.,!?]/.test(input[charLimit])) {
              const remainder = input.slice(charLimit);
              const endOfWordIndex = remainder.search(/\s|[.,!?]/);
              trimmed += endOfWordIndex !== -1 ? remainder.slice(0, endOfWordIndex) : remainder;
            }
            return `${trimmed}...`;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 209451526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/coins/alert
      ***********************************/

      ims.set('./views/coins/alert', {
        hash: 93663821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CoinsAlert({
            show,
            onClose,
            texts
          }) {
            if (!show) return null;
            const {
              title,
              description,
              action
            } = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              buttonLabel: action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, title), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, description)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/coins/coins-modal
      *****************************************/

      ims.set('./views/coins/coins-modal', {
        hash: 767318504,
        creator: function (require, exports) {
          // import React from 'react';
          // import { ConfirmModal, Modal } from 'pragmate-ui/modal';
          // import { Battery, ErrorRenderer } from '@aimpact/ailearn-app/components/ui';
          // export function CoinsModal({ store, show, onClose, texts }) {
          // 	if (!show) return null;
          // 	const [fetching, setFetching] = React.useState(false);
          // 	const [error, setError] = React.useState();
          // 	texts = texts.coins.modal;
          // 	const onConfirm = async () => {
          // 		try {
          // 			setFetching(true);
          // 			await store.model.getCredits();
          // 			onClose();
          // 		} catch (e) {
          // 			setError(texts.errors.noCredits);
          // 		} finally {
          // 			setFetching(false);
          // 		}
          // 	};
          // 	return (
          // 		<ConfirmModal
          // 			show
          // 			className="modal-sm"
          // 			actions={{
          // 				confirm: { label: texts.actions.confirm, variant: 'primary' },
          // 				cancel: { label: texts.actions.cancel, variant: 'primary', bordered: true }
          // 			}}
          // 			onConfirm={onConfirm}
          // 			onCancel={onClose}
          // 			onClose={onClose}
          // 		>
          // 			<header>
          // 				<h3>{texts.title}</h3>
          // 				<ErrorRenderer error={error} />
          // 				<Battery percent="100" className="lg" />
          // 				<p>{texts.description}</p>
          // 			</header>
          // 		</ConfirmModal>
          // 	);
          // }
          "use strict";
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/FixedAlert
      *********************************************/

      ims.set('./views/components/FixedAlert', {
        hash: 1518437182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          exports.FixedAlert = FixedAlert;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
          function FixedAlert({
            type = 'success',
            message,
            className,
            time = 3000,
            show = true
          }) {
            className = `alert-message alert-message--${type}${className ? ` ${className}` : ``}`;
            const {
              store
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              },
              className: className
            }, message);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/alert
      ****************************************/

      ims.set('./views/components/alert', {
        hash: 2743908413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertRenderer = AlertRenderer;
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
          function AlertRenderer({
            type = 'success',
            message,
            className,
            time = 3000,
            show = true
          }) {
            className = `alert-message alert-message--${type}${className ? ` ${className}` : ``}`;
            const [remove, setRemove] = _react.default.useState(false);
            const [timer, setTimer] = _react.default.useState(null);
            const {
              store
            } = (0, _context.useModuleContext)();
            _react.default.useEffect(() => {
              if (!show) {
                setTimer(undefined);
                setRemove(undefined);
                return;
              }
              const timer = setTimeout(() => {
                if (show) {
                  setRemove(true);
                }
                store.clearAlert();
              }, time);
              setTimer(timer);
              return () => clearTimeout(timer);
            }, [message, show]);
            if (remove || !show) return null;
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              },
              className: className
            }, message);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/radio-button
      ***********************************************/

      ims.set('./views/components/radio-button', {
        hash: 2984847910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RadioButton({
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching
            };
            const data = {
              audience: [],
              duration: [],
              language: []
            };
            const output = data[name]?.map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: name,
              ...disabled,
              "data-index": index,
              onClick: () => onChange(value),
              key: index,
              value: value
            }, label)) || [];
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: selected,
              ...disabled
            }, output));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3988263227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSuggestionsContext = exports.useModuleContext = exports.useDraftManagementContext = exports.SuggestionsContext = exports.ModuleContext = exports.DraftManagementContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
          const DraftManagementContext = exports.DraftManagementContext = _react.default.createContext({});
          const useDraftManagementContext = () => _react.default.useContext(DraftManagementContext);
          exports.useDraftManagementContext = useDraftManagementContext;
          const SuggestionsContext = exports.SuggestionsContext = _react.default.createContext({});
          const useSuggestionsContext = () => _react.default.useContext(SuggestionsContext);
          exports.useSuggestionsContext = useSuggestionsContext;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/animated-div
      *****************************************/

      ims.set('./views/form/animated-div', {
        hash: 4242557512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "draft-setup__container",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/confirmation-modal
      ***********************************************/

      ims.set('./views/form/confirmation-modal', {
        hash: 4171504284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = ConfirmationModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _image = require("./image");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function ConfirmationModal({
            store,
            values,
            show,
            onClose
          }) {
            const {
              owner
            } = values;
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            // const texts = store.texts;
            const onConfirm = async () => {
              try {
                setLoading(true);
                await store.save({
                  ...values,
                  state: 'created'
                });
                _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
                onClose();
                store.setAlert({
                  message: store.texts.setup.messages.save,
                  position: 'objective'
                });
              } catch (e) {
                console.error(e);
                setError(store.globalTexts.errors.DEFAULT_ERROR);
              } finally {
                setLoading(false);
              }
            };
            const {
              globalTexts
            } = store;
            const texts = store.texts.setup.confirmation;
            const actionTexts = globalTexts.actions;
            const name = owner?.displayName ? owner.displayName : owner.name;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement("div", {
              className: "primary-container text-center owner-container"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, texts.ownerDescription, " "))), _react.default.createElement("div", {
              className: "mt-15 text-center"
            }, _react.default.createElement("span", null, texts.description)), _react.default.createElement("section", {
              className: "actions__container mt-1"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose,
              disabled: loading
            }, actionTexts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm,
              disabled: loading
            }, actionTexts.continue))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/audience
      ********************************************/

      ims.set('./views/form/fields/audience', {
        hash: 1675165789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          function AudienceField({
            disabled
          }) {
            const {
              texts: {
                audience: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            const mapOptions = audiences => {
              return audiences.map(audience => ({
                value: audience.id,
                label: audience.name
              }));
            };
            const [options, setOptions] = _react.default.useState(mapOptions(store.audiences));
            let value = undefined;
            if (store.currentAudience) {
              value = store.currentAudience.id;
            }
            (0, _hooks.useBinder)([store], () => {
              const items = mapOptions(store.audiences);
              setOptions([...items]);
            }, ['fetching.data', 'audiences.loaded']);
            const onChange = async event => {
              store.setCurrentAudience(event.target.value);
              setValues(values => {
                return {
                  ...values,
                  audience: {
                    category: event.target.value
                  }
                };
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              placeholder: texts.select,
              value: value,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/language
      ********************************************/

      ims.set('./views/form/fields/language', {
        hash: 1198719362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageFields = LanguageFields;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _audience = require("./audience");
          var _level = require("./level");
          function LanguageFields({
            disabled
          }) {
            const {
              texts,
              store,
              setValues,
              values
            } = (0, _context.useModuleContext)();
            const onChange = async event => {
              await store.loadAudiences(event.target.value);
              setValues(values => ({
                ...values,
                language: event.target.value
              }));
            };
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const isDisabled = {
              isDisabled: store.saved || disabled
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.languages.select.placeholder,
              value: store.model.language,
              name: "language",
              options: options,
              onChange: onChange,
              ...isDisabled
            })), _react.default.createElement(_audience.AudienceField, {
              disabled: disabled
            }), _react.default.createElement(_level.AudienceLevelField, {
              disabled: disabled
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/fields/level
      *****************************************/

      ims.set('./views/form/fields/level', {
        hash: 3078003994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceLevelField = AudienceLevelField;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          function AudienceLevelField({
            disabled
          }) {
            const {
              texts: {
                level: texts
              },
              values,
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues
            } = (0, _context.useModuleContext)();
            const mapLevels = level => ({
              value: level.id,
              label: level.label
            });
            const [options, setOptions] = _react.default.useState(store.audienceLevels.map(mapLevels));
            const value = values.audience?.level;
            (0, _hooks.useBinder)([store], () => setOptions([...store.audienceLevels.map(mapLevels)]), ['audience.changed', 'audiences.loaded']);
            const onChange = event => {
              const audience = {
                category: values.audience.category,
                level: event.target.value
              };
              setValues(values => {
                return {
                  ...values,
                  audience
                };
              });
            };
            const isDisabled = {
              isDisabled: store.saved || disabled || !options.length || !values.audience?.category
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "level",
              placeholder: texts.select,
              value: value,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/objective
      *********************************************/

      ims.set('./views/form/fields/objective', {
        hash: 1094377105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _alert = require("../../components/alert");
          var _context = require("../../context");
          function ObjectiveField() {
            const {
              values,
              texts,
              onChange,
              store
            } = (0, _context.useModuleContext)();
            const formTexts = texts.setup.form;
            const onObjectiveChange = event => {
              store.clearImprovements();
              onChange(event);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "objective-field "
            }, _react.default.createElement(_form.Textarea, {
              onChange: onObjectiveChange,
              value: values.objective,
              name: "objective",
              placeholder: formTexts.objective.textArea,
              counter: true,
              maxLength: 500
            }), _react.default.createElement(_alert.AlertRenderer, {
              show: !!store.alert && store.alert.position === 'objective',
              type: store?.alert?.type,
              className: "alert-message alert-message--success alert-fixed",
              message: store?.alert?.message
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/ownership
      *********************************************/

      ims.set('./views/form/fields/ownership', {
        hash: 9141652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _react = require("react");
          var _context = require("../../context");
          var _supportingText = require("./supporting-text");
          function OwnershipField({
            disabled
          } = {}) {
            const {
              texts: {
                setup: {
                  form: wTexts
                }
              },
              texts: {
                objectiveTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              texts
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const [supportingText, setSupportingText] = _react.default.useState({
              content: '',
              variant: ''
            });
            let defaultOption = {
              value: '',
              label: wTexts.administrator.select
            };
            if (store.model.owner) {
              defaultOption = {
                value: store.model.owner.id,
                label: store.model.owner.name
              };
            }
            const value = store.model.owner?.id;
            const attrs = {
              isDisabled: store.ownerships?.length === 0 || store.saved || disabled
            };
            const onChange = async event => {
              setSupportingText({
                content: '',
                variant: ''
              });
              const owner = await store.getAdministrator(event.target.value);
              if (owner.entity === 'organization') {
                await owner.getCredits();
              }
              setSelected(owner);
              // store.model.set({ owner });
              if (owner.coins?.modules === undefined) {
                setSupportingText({
                  content: texts.alerts.coins.unavailable,
                  variant: 'error'
                });
                console.error('the user does not have credits data loaded, refresh the page and try again.');
                return;
              }
              const {
                count
              } = owner.coins.modules;
              const messages = texts.alerts.coins;
              const message = count ? messages.available : messages.unavailable;
              const type = count ? 'success' : 'error';
              setSupportingText({
                content: message,
                variant: type
              });
              setValues(values => {
                return {
                  ...values,
                  owner: owner.getProperties()
                };
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.TourStep, {
              texts: tour,
              name: "administrator",
              as: "div",
              className: "administrator"
            }, _react.default.createElement("div", {
              className: "field-container"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.administrator.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              placeholder: wTexts.administrator.select,
              name: "owner",
              options: store.ownerships,
              onChange: onChange,
              ...attrs
            }), _react.default.createElement(_supportingText.SupportingText, {
              ...supportingText
            }))));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/fields/supporting-text
      ***************************************************/

      ims.set('./views/form/fields/supporting-text', {
        hash: 3724854723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SupportingText = SupportingText;
          var _react = require("react");
          const variantClassMap = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
            success: 'text-success',
            info: 'text-info',
            error: 'text-error',
            warning: 'text-warning',
            default: 'text-default'
          };
          /*bundle*/
          function SupportingText({
            content,
            variant = 'default',
            className = '',
            ...rest
          }) {
            if (!content) return null;
            const variantClass = variantClassMap[variant] || variantClassMap.default;
            const combinedClassName = `pui-supporting-text ${variantClass} ${className}`.trim();
            return _react.default.createElement("div", {
              className: combinedClassName,
              ...rest
            }, _react.default.createElement("span", null, content));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/image
      **********************************/

      ims.set('./views/form/image', {
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

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 3630730183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _alert = require("../components/alert");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          var _language = require("./fields/language");
          var _objective = require("./fields/objective");
          var _ownership = require("./fields/ownership");
          var _suggestions = require("./suggestions");
          var _action = require("./suggestions/action");
          function DraftForm() {
            const {
              values,
              setValues,
              store,
              texts,
              saved,
              fetching,
              togglePathway,
              toggleConfirmation
            } = (0, _context.useModuleContext)();
            const label = store.model.state && saved ? store.globalTexts.actions.continue : store.globalTexts.actions.save;
            // const { ref: mainRef } = useDriverTour('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = invalidForm || processing || store.processing;
            (0, _hooks.useBinder)([store], () => {
              setProcessing(store.fetchingSuggestions || store.fetching);
            }, ['fetchingSuggestions.changed', 'fetching.data']);
            const onCofirmed = async () => {
              setProcessing(true);
              if (store.model.state && store.model.state === values.state && store.model.objective === values.objective) return;
              await setValues({
                ...values,
                updated: false
              });
              if (store.model.state === 'created') return;
              toggleConfirmation();
              setProcessing(false);
            };
            const onSubmit = async () => {
              try {
                if (processing) return;
                await onCofirmed();
                if (saved && store.model.state === 'created') {
                  togglePathway();
                  return;
                }
              } catch (e) {
                console.error(e);
              } finally {
                setProcessing(false);
              }
            };
            const cls = `draft-setup__container `;
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.items.length,
              isForm: true
            }, React.createElement(_ui.DriverTourContainer, {
              name: "moduleObjective"
            }, React.createElement(_form.Form, {
              className: cls,
              onSubmit: onSubmit
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("section", {
              className: "form-body"
            }, React.createElement("header", {
              className: "setup-form-header"
            }, React.createElement("h1", null, texts.setup.title)), React.createElement(_alert.AlertRenderer, {
              type: store.alert?.type,
              message: store.alert?.message,
              show: !!store.alert && store.alert.position === 'top',
              className: "alert--small"
            }), React.createElement("section", {
              className: "wizard-first-step-container"
            }, React.createElement(_ownership.OwnershipField, {
              disabled: processing
            }), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "parameters",
              as: "div",
              className: "parameters-container"
            }, React.createElement(_language.LanguageFields, {
              disabled: processing
            }))), React.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective",
              className: "objective__container relative-container"
            }, React.createElement(_objective.ObjectiveField, null))), React.createElement(_suggestions.ObjectiveSuggestions, {
              setProcessing: setProcessing,
              processing: processing
            }), React.createElement("footer", null, React.createElement(_action.SuggestionsAction, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "save",
              className: "save-button__container"
            }, React.createElement(_components.Button, {
              type: "submit",
              disabled: isDisabled,
              variant: "primary"
            }, label)))), React.createElement(_ui.ProcessContainer, {
              fetching: fetching || processing
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 3949382729,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function SuggestionsAction({}) {
            const {
              store: {
                globalTexts: {
                  actions: textActions
                }
              },
              store,
              values,
              saved
            } = (0, _context.useModuleContext)();
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const closeModal = () => setShowCoinsModal(false);
            const generateImprovements = async () => {
              try {
                if (!store.hasCredits) {
                  setShowCoinsModal(true);
                  return;
                }
                await store.getObjectiveImprovements({
                  objective: values.objective
                });
              } catch (e) {
                console.error(e);
              }
            };
            const onConsume = async () => {
              const response = await store.model.consumeCoins();
              if (response.error) return response;
              const response2 = await store.getObjectiveImprovements({
                objective: values.objective
              });
              setShowCoinsModal(false);
              return response2;
            };
            if (store.improvements && !store.improvements.irrelevant) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.AIButton, {
              disabled: !saved,
              ensure: false,
              onClick: generateImprovements,
              variant: "primary",
              bordered: true
            }, textActions.analyse), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              owner: store.model?.owner,
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              onConsume: onConsume
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/form/suggestions/index
      **********************************************/

      ims.set('./views/form/suggestions/index', {
        hash: 399583266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _context = require("../../context");
          var _objective = require("./objective");
          var _list = require("./list");
          function ObjectiveSuggestions({
            processing,
            setProcessing
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [improvedObjective, setImprovedObjective] = _react.default.useState(false);
            // if there are no improvements, show the action to generate suggestions
            if (!store.improvements || store.improvements.irrelevant) return null;
            const contextValue = {
              improvedObjective,
              setImprovedObjective,
              processing,
              setProcessing
            };
            return _react.default.createElement(_context.SuggestionsContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_objective.ObjectiveImproved, null), _react.default.createElement(_list.SuggestionsList, {
              block: !improvedObjective
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/index
      ***************************************************/

      ims.set('./views/form/suggestions/list/index', {
        hash: 3395067186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsList = SuggestionsList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../context");
          var _item = require("./item");
          function SuggestionsList({
            block
          }) {
            const {
              texts: {
                suggestions: texts
              },
              store,
              store: {
                globalTexts: {
                  actions: textActions
                }
              },
              values,
              saved,
              setValues
            } = (0, _context.useModuleContext)();
            const {
              setImprovedObjective
            } = (0, _context.useSuggestionsContext)();
            const [selected, setSelected] = _react.default.useState(new Set());
            if (!store.improvements) return null;
            const {
              suggestions
            } = store.improvements;
            const apply = async event => {
              const specs = {
                objective: values.objective,
                improvements: Array.from(selected).map(i => store.improvements.suggestions[i].suggestion)
              };
              await store.generateObjective(specs);
              setImprovedObjective(false);
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const onCancel = () => {
              setSelected(new Set());
              setImprovedObjective(false);
              store.clearImprovements();
            };
            const disabled = {
              disabled: !selected.size || block
            };
            const cls = `objective-suggestions__container${block ? ' is-disabled' : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, _react.default.createElement(_list.List, {
              className: "objective-suggestions__list",
              specs: {
                selected,
                setSelected,
                block
              },
              control: _item.ObjectiveSuggestionsItem,
              items: suggestions
            }), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement("span", null, texts.total, ": ", selected.size), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement(_components.Button, {
              disabled: block,
              onClick: onCancel,
              variant: "primary",
              bordered: true
            }, textActions.removeSuggestions), _react.default.createElement(_components.Button, {
              ...disabled,
              variant: "primary",
              onClick: apply
            }, textActions.applySuggestions))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/item
      **************************************************/

      ims.set('./views/form/suggestions/list/item', {
        hash: 2063911443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestionsItem = ObjectiveSuggestionsItem;
          var _react = require("react");
          var _context = require("../../../context");
          function ObjectiveSuggestionsItem(props = {}) {
            const {
              index,
              item,
              block,
              selected,
              setSelected
            } = props;
            const {
              store,
              texts: {
                suggestions: texts
              }
            } = (0, _context.useModuleContext)();
            const onSelect = event => {
              event.stopPropagation();
              const index = parseInt(event.currentTarget.dataset.index);
              const elements = selected;
              elements.has(index) ? elements.delete(index) : elements.add(index);
              store.improvementsSelected.add(index);
              setSelected(new Set(elements));
            };
            const cls = `suggestion__item${selected.has(index) ? ' selected' : ''}`;
            const attrs = {
              className: cls,
              'data-index': index
            };
            if (!block) attrs.onClick = onSelect;
            return _react.default.createElement("div", {
              className: cls,
              "data-index": index,
              ...attrs
            }, _react.default.createElement("header", null, _react.default.createElement("span", {
              className: "suggestion-label"
            }, texts.origin), _react.default.createElement("span", {
              className: "suggestion-reference"
            }, item.reference)), _react.default.createElement("div", {
              className: "item__content"
            }, _react.default.createElement("header", null, _react.default.createElement("span", {
              className: "suggestion-label"
            }, texts.label)), item.suggestion));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/suggestions/objective
      **************************************************/

      ims.set('./views/form/suggestions/objective', {
        hash: 3759355828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveImproved = ObjectiveImproved;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function ObjectiveImproved() {
            const {
              texts: {
                objectiveTour: tour,
                suggestions: {
                  objective: {
                    actions: texts
                  }
                }
              },
              store,
              setValues,
              values,
              store: {
                improvements
              }
            } = (0, _context.useModuleContext)();
            const {
              improvedObjective,
              setImprovedObjective
            } = (0, _context.useSuggestionsContext)();
            const {
              improved
            } = improvements;
            const [updating, setUpdating] = _react.default.useState(false);
            if (!improvements || improvedObjective) return null;
            const onClick = async event => {
              try {
                setUpdating(true);
                if (event.currentTarget.value === 'true') {
                  await store.save({
                    objective: improved
                  });
                  setValues(values => ({
                    ...values,
                    objective: improved
                  }));
                }
                setImprovedObjective(true);
                setUpdating(false);
              } catch (e) {
                console.error('capturamos error');
              }
            };
            const cls = `objective-suggestion ${updating ? 'is-processing' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("h3", null, improved), _react.default.createElement("div", {
              className: "objective-suggestion__actions"
            }, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.label), _react.default.createElement("div", {
              className: "section__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              value: "false",
              onClick: onClick
            }, texts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              value: "true",
              onClick: onClick
            }, texts.confirm))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 4200118861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 24397246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _overview = require("@aimpact/ailearn-app/modules/management/overview.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("./context");
          var _form = require("./form");
          var _confirmationModal = require("./form/confirmation-modal");
          var _pathway = require("./pathway");
          /*bundle*/
          function View({
            store,
            uri
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [isFetching, setIsFetching] = React.useState(false);
            const [activePanel] = React.useState(0);
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState({
              ...store.model?.getProperties()
            });
            const [error, setError] = React.useState();
            const [showPathway, setShowPathway] = React.useState(false);
            const [showConfirmation, setShowConfirmation] = React.useState(false);
            const togglePathway = () => setShowPathway(!showPathway);
            const toggleConfirmation = () => setShowConfirmation(!showConfirmation);
            (0, _hooks.useBinder)([store], () => {
              let properties = store.model?.getProperties();
              if (!properties) properties = {};
              setValues(values => store.model?.getProperties());
              setFetching(store?.fetching);
            });
            if (!store.ready) return null;
            // TODO: add preload screen (or not
            const onChange = event => {
              store.model.set({
                [event.currentTarget.name]: event.currentTarget.value
              });
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value,
                updated: true
              });
            };
            const value = {
              store,
              onChange,
              texts: store.texts,
              activePanel,
              current,
              setCurrent,
              improvements: store.improvements,
              error,
              setError,
              fetching: fetching || isFetching,
              setIsFetching,
              togglePathway,
              saved: store.saved,
              values,
              setValues,
              toggleConfirmation
            };
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_components.ConditionalContainer, {
              condition: store.view,
              options: {
                setup: React.createElement(_form.DraftForm, null),
                overview: React.createElement(_overview.ModuleOverview, {
                  store: store,
                  uri: uri,
                  fetching: fetching
                }),
                activity: React.createElement(_activity.ModuleActivityForm, {
                  store: store,
                  activity: store.activitySelected
                })
              }
            })), React.createElement(_confirmationModal.ConfirmationModal, {
              store: store,
              values: values,
              show: showConfirmation,
              onClose: toggleConfirmation
            }), React.createElement(_pathway.PathwayGeneration, {
              show: showPathway,
              setValues: setValues,
              store: store,
              values: values,
              onClose: togglePathway
            }));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/pathway/animations
      ******************************************/

      ims.set('./views/pathway/animations', {
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

      /********************************************
      INTERNAL MODULE: ./views/pathway/confirmation
      ********************************************/

      ims.set('./views/pathway/confirmation', {
        hash: 3901616995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationForm = ConfirmationForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          var _animations = require("./animations");
          function ConfirmationForm() {
            const {
              texts,
              setView,
              onClose,
              store
            } = (0, _context.usePathwayContext)();
            const {
              globalTexts
            } = store;
            const onConfirm = async () => setView('selection');
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "centered-container"
            }, _react.default.createElement("header", {
              className: "modal__header"
            }, _react.default.createElement("h3", null, texts.refine.confirm.title)), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, texts.refine.confirm.description)), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, globalTexts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm
            }, globalTexts.actions.confirm)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/pathway/context
      ***************************************/

      ims.set('./views/pathway/context', {
        hash: 991896874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePathwayContext = exports.PathwayContext = void 0;
          var _react = require("react");
          const PathwayContext = exports.PathwayContext = _react.default.createContext({});
          const usePathwayContext = () => _react.default.useContext(PathwayContext);
          exports.usePathwayContext = usePathwayContext;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/pathway/examples
      ****************************************/

      ims.set('./views/pathway/examples', {
        hash: 739492676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionExamples = SuggestionExamples;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("./context");
          var _framerMotion = require("framer-motion");
          var _animations = require("./animations");
          function SuggestionExamples() {
            const {
              texts,
              setView,
              setNotes
            } = (0, _context.usePathwayContext)();
            const onBack = () => setView('selection');
            const Item = ({
              item
            }) => {
              const onClick = () => {
                setNotes(item);
                setView('suggestions');
              };
              return _react.default.createElement("li", {
                className: "list__item"
              }, _react.default.createElement("span", null, item), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
                bordered: true,
                variant: "primary",
                onClick: onClick
              }, texts.refine.examples.actions.select)));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__content--justified"
            }, _react.default.createElement("h3", null, texts.refine.examples.title), _react.default.createElement(_list.List, {
              className: "modal__list--options-selection",
              items: texts.refine.examples.items,
              control: Item
            }), _react.default.createElement("div", {
              className: "flex-container flex-end mt-30"
            }, _react.default.createElement("div", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "default",
              onClick: onBack
            }, texts.refine.examples.actions.back)))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/pathway/forms/ai-form
      *********************************************/

      ims.set('./views/pathway/forms/ai-form', {
        hash: 3919217807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIGenerationForm = AIGenerationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _totalActivities = require("./total-activities");
          var _animations = require("../animations");
          function AIGenerationForm({
            title = true
          }) {
            const {
              store,
              texts,
              values,
              setView,
              notes,
              setNotes,
              onClose
            } = (0, _context.usePathwayContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [totalActivities, setTotalActivities] = _react.default.useState();
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...store.model.getProperties(),
                  notes,
                  totalActivities
                });
                onClose();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: onGenerate,
              setView: () => setView('examples')
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form"
            }, title && _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title)), _react.default.createElement(_form.Form, {
              onSubmit: events.onClick
            }, _react.default.createElement(_totalActivities.TotalActivities, {
              totalActivities: totalActivities,
              setTotalActivities: setTotalActivities
            }), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              variant: "floating",
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: fetching || !totalActivities
            }, store.globalTexts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/pathway/forms/decision-type
      ***************************************************/

      ims.set('./views/pathway/forms/decision-type', {
        hash: 1625183821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _animations = require("../animations");
          var _aiForm = require("./ai-form");
          var _manual = require("./manual");
          function DecistionType({}) {
            const {
              texts,
              store
            } = (0, _context.usePathwayContext)();
            const formTexts = texts.setup.generation;
            const actions = texts.setup.actions;
            const [valueSelected, setValueSelected] = _react.default.useState();
            const {
              setView
            } = (0, _context.usePathwayContext)();
            const [controlType, setControlType] = _react.default.useState();
            const controls = {
              ai: _aiForm.AIGenerationForm,
              manual: _manual.ManualForm
            };
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setValueSelected(value);
              if (value === 'yes' && !store.hasCredits) {
                setView('request');
                return;
              }
              setControlType(value === 'yes' ? 'ai' : 'manual');
            };
            const Control = controlType ? controls[controlType] : null;
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, formTexts.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, formTexts.subtitle))), _react.default.createElement(_ui.RadioButton, {
              checked: valueSelected === 'yes',
              onChange: onChange,
              label: formTexts.options.ai,
              value: "yes",
              name: "generationWay"
            }), _react.default.createElement(_ui.RadioButton, {
              checked: valueSelected === 'manually',
              onChange: onChange,
              label: formTexts.options.manually,
              value: "manually",
              name: "generationWay"
            }), Control && _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(Control, {
              title: false
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/forms/manual
      ********************************************/

      ims.set('./views/pathway/forms/manual', {
        hash: 1959151002,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _framerMotion = require("framer-motion");
          var _animations = require("../animations");
          function ManualForm({}) {
            let {
              texts,
              store,
              values,
              setValues
            } = (0, _context.usePathwayContext)();
            const formTexts = texts.setup.generation;
            const actions = store.globalTexts.actions;
            const {
              setView,
              onClose
            } = (0, _context.usePathwayContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [formValues, setFormValues] = _react.default.useState({
              title: '',
              description: ''
            });
            texts = texts.pathway;
            const onSubmit = async () => {
              try {
                setFetching(true);
                await store.save({
                  ...values,
                  title: formValues.title,
                  description: formValues.description,
                  state: 'confirmed'
                });
                onClose();
                setValues({
                  ...values,
                  title: formValues.title,
                  description: formValues.description
                });
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const onChange = event => {
              const {
                value,
                name
              } = event.currentTarget;
              setFormValues({
                ...formValues,
                [name]: value
              });
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form"
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.manual.title.label,
              onChange: onChange,
              value: formValues.title ?? '',
              name: "title",
              variant: "floating"
            }), _react.default.createElement(_form.Textarea, {
              label: texts.manual.description.label,
              name: "description",
              onChange: onChange,
              variant: "floating",
              value: formValues.description ?? ''
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: !formValues.description || !formValues.title,
              onClick: onSubmit
            }, actions.continue))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/pathway/forms/total-activities
      ******************************************************/

      ims.set('./views/pathway/forms/total-activities', {
        hash: 2393570246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalActivities = TotalActivities;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          /**
           * This field is not required in the draft object, it's only used for suggestions.
           * @returns
           */
          function TotalActivities({
            totalActivities,
            setTotalActivities
          }) {
            let {
              texts,
              values,
              store,
              setValues
            } = (0, _context.usePathwayContext)();
            // access to the texts object from the context
            texts = texts.pathway.ai;
            const disabled = {};
            const {
              brief,
              standard,
              extended
            } = texts.form.size.items;
            const options = [{
              value: 3,
              label: brief,
              totalActivities: 3
            }, {
              value: 5,
              label: standard,
              totalActivities: 5
            }, {
              value: 7,
              label: extended,
              totalActivities: 7
            }];
            const onChange = event => setTotalActivities(event.target.value);
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.totalActivities);
            if (values?.totalActivities?.index) selected = parseInt(values.totalActivities.index);
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.form.size.placeholder), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.form.size.placeholder,
              onChange: onChange,
              name: "totalActivities",
              value: totalActivities,
              ...disabled,
              options: options
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/pathway/index
      *************************************/

      ims.set('./views/pathway/index', {
        hash: 2142566232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PathwayGeneration = PathwayGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _examples = require("./examples");
          var _alert = require("../components/alert");
          var _confirmation = require("./confirmation");
          var _decisionType = require("./forms/decision-type");
          var _framerMotion = require("framer-motion");
          var _manual = require("./forms/manual");
          var _aiForm = require("./forms/ai-form");
          var _requestCredits = require("./request-credits");
          function PathwayGeneration({
            store,
            values,
            show,
            setValues,
            onClose
          }) {
            // const { texts, store, values, improvements } = useModuleContext();
            const {
              texts,
              improvements
            } = store;
            const [fetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState();
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            const controls = {
              confirm: _confirmation.ConfirmationForm,
              selection: _decisionType.DecistionType,
              ai: _aiForm.AIGenerationForm,
              manual: _manual.ManualForm,
              examples: _examples.SuggestionExamples,
              request: _requestCredits.RequestCreditsContainer
            };
            const viewDefined = !!improvements && !view ? 'confirm' : !view ? 'selection' : view;
            const Control = controls[viewDefined];
            const handleCLose = () => {
              setNotes('');
              setView(undefined);
              onClose();
            };
            return _react.default.createElement(_modal.Modal, {
              className: "modal-form",
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_alert.ErrorRenderer, {
              error: error,
              texts: texts.refine.errors
            }), _react.default.createElement(_context.PathwayContext.Provider, {
              value: {
                view,
                texts: store.texts,
                values,
                store,
                setValues,
                onClose: () => {
                  setNotes('');
                  setView(undefined);
                  onClose();
                },
                setView,
                notes,
                setNotes
              }
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, null)), _react.default.createElement(_ui.ProcessContainer, {
              key: "container",
              fetching: fetching
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/pathway/request-credits
      ***********************************************/

      ims.set('./views/pathway/request-credits', {
        hash: 2118929350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          function RequestCreditsContainer() {
            const {
              store,
              onClose,
              setView
            } = (0, _context.usePathwayContext)();
            const texts = {
              ...store.globalTexts
            };
            const onCancel = () => setView('selection');
            const onSuccess = () => setView('ai');
            texts.actions.cancel = store.globalTexts.actions.back;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: store.model.consumeCoins,
              globalTexts: texts,
              owner: store.model.owner,
              onClose: onClose,
              onCancel: onCancel,
              onSuccess: onSuccess
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/form/confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./views/form/fields/supporting-text",
        "from": "SupportingText",
        "name": "SupportingText"
      }, {
        "im": "./views/form/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
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
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./views/form/confirmation-modal').ConfirmationModal : value);
        (require || prop === 'SupportingText') && _export("SupportingText", SupportingText = require ? require('./views/form/fields/supporting-text').SupportingText : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./views/form/image').OwnerImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsInRleHRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsImNvaW5zIiwiYWxlcnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiRXJyb3JSZW5kZXJlciIsImVycm9yIiwiQWxlcnQiLCJ2YXJpYW50IiwiRml4ZWRBbGVydCIsInR5cGUiLCJtZXNzYWdlIiwidGltZSIsInVzZU1vZHVsZUNvbnRleHQiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiQWxlcnRSZW5kZXJlciIsInJlbW92ZSIsInNldFJlbW92ZSIsInVzZVN0YXRlIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUVmZmVjdCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJjbGVhckFsZXJ0IiwiY2xlYXJUaW1lb3V0IiwiX2NvbXBvbmVudHMiLCJSYWRpb0J1dHRvbiIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic2VsZWN0ZWQiLCJkaXNhYmxlZCIsImZldGNoaW5nIiwibW9kZWwiLCJkYXRhIiwiYXVkaWVuY2UiLCJsYW5ndWFnZSIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwiQnV0dG9uIiwib25DbGljayIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIl9pbWFnZSIsIl9yb3V0aW5nIiwiQ29uZmlybWF0aW9uTW9kYWwiLCJ2YWx1ZXMiLCJvd25lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJzYXZlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJzZXRBbGVydCIsInNldHVwIiwibWVzc2FnZXMiLCJwb3NpdGlvbiIsImUiLCJjb25zb2xlIiwiZ2xvYmFsVGV4dHMiLCJlcnJvcnMiLCJERUZBVUxUX0VSUk9SIiwiY29uZmlybWF0aW9uIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwiZGlzcGxheU5hbWUiLCJNb2RhbCIsIk93bmVySW1hZ2UiLCJvd25lckRlc2NyaXB0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIl9ob29rcyIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJzZXRWYWx1ZXMiLCJtYXBPcHRpb25zIiwiYXVkaWVuY2VzIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJjdXJyZW50QXVkaWVuY2UiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImV2ZW50Iiwic2V0Q3VycmVudEF1ZGllbmNlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJpc0Rpc2FibGVkIiwic2F2ZWQiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwic2VsZWN0IiwiX2F1ZGllbmNlIiwiX2xldmVsIiwiTGFuZ3VhZ2VGaWVsZHMiLCJsb2FkQXVkaWVuY2VzIiwiaXRlbSIsImxhbmd1YWdlcyIsIkZyYWdtZW50IiwiQXVkaWVuY2VMZXZlbEZpZWxkIiwibGV2ZWwiLCJtYXBMZXZlbHMiLCJhdWRpZW5jZUxldmVscyIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJmb3JtVGV4dHMiLCJmb3JtIiwib25PYmplY3RpdmVDaGFuZ2UiLCJjbGVhckltcHJvdmVtZW50cyIsIlRleHRhcmVhIiwib2JqZWN0aXZlIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3N1cHBvcnRpbmdUZXh0IiwiT3duZXJzaGlwRmllbGQiLCJ3VGV4dHMiLCJvYmplY3RpdmVUb3VyIiwidG91ciIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwib3duZXJzaGlwcyIsImdldEFkbWluaXN0cmF0b3IiLCJlbnRpdHkiLCJnZXRDcmVkaXRzIiwibW9kdWxlcyIsImFsZXJ0cyIsInVuYXZhaWxhYmxlIiwiY291bnQiLCJhdmFpbGFibGUiLCJnZXRQcm9wZXJ0aWVzIiwiVG91clN0ZXAiLCJhcyIsIlN1cHBvcnRpbmdUZXh0IiwidmFyaWFudENsYXNzTWFwIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5Iiwic3VjY2VzcyIsImluZm8iLCJ3YXJuaW5nIiwicmVzdCIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3NOYW1lIiwidHJpbSIsIl9pY29ucyIsInBob3RvVXJsIiwiQXBwSWNvbiIsImljb24iLCJJbWFnZSIsInNyYyIsIlJlYWN0IiwiX2FuaW1hdGVkRGl2IiwiX2xhbmd1YWdlIiwiX29iamVjdGl2ZSIsIl9vd25lcnNoaXAiLCJfc3VnZ2VzdGlvbnMiLCJfYWN0aW9uIiwiRHJhZnRGb3JtIiwidG9nZ2xlUGF0aHdheSIsInRvZ2dsZUNvbmZpcm1hdGlvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaW52YWxpZEZvcm0iLCJmZXRjaGluZ1N1Z2dlc3Rpb25zIiwib25Db2Zpcm1lZCIsInVwZGF0ZWQiLCJvblN1Ym1pdCIsIlBhZ2VDb250YWluZXIiLCJhY3Rpdml0aWVzIiwiaXNGb3JtIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsIkZvcm0iLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiUHJvY2Vzc0NvbnRhaW5lciIsInRleHRBY3Rpb25zIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImNsb3NlTW9kYWwiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJvbkNvbnN1bWUiLCJyZXNwb25zZSIsImNvbnN1bWVDb2lucyIsInJlc3BvbnNlMiIsImltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImFuYWx5c2UiLCJDb2luc01vZGFsIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsImJsb2NrIiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsIlNldCIsImFwcGx5Iiwic3BlY3MiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsImdlbmVyYXRlT2JqZWN0aXZlIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsImNvbmZpcm0iLCJfYWN0aXZpdHkiLCJfb3ZlcnZpZXciLCJfY29uZmlybWF0aW9uTW9kYWwiLCJfcGF0aHdheSIsInNldEZldGNoaW5nIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJhY3RpdmVQYW5lbCIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2hvd1BhdGh3YXkiLCJzZXRTaG93UGF0aHdheSIsInNob3dDb25maXJtYXRpb24iLCJzZXRTaG93Q29uZmlybWF0aW9uIiwicHJvcGVydGllcyIsInJlYWR5Iiwic2V0IiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ2aWV3Iiwib3ZlcnZpZXciLCJNb2R1bGVPdmVydmlldyIsImFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYWN0aXZpdHlTZWxlY3RlZCIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX2FuaW1hdGlvbnMiLCJDb25maXJtYXRpb25Gb3JtIiwic2V0VmlldyIsInVzZVBhdGh3YXlDb250ZXh0IiwicmVmaW5lIiwiUGF0aHdheUNvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsImJhY2siLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwidG90YWxBY3Rpdml0aWVzIiwic2V0VG90YWxBY3Rpdml0aWVzIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZ2VuZXJhdGUiLCJfYWlGb3JtIiwiX21hbnVhbCIsIkRlY2lzdGlvblR5cGUiLCJnZW5lcmF0aW9uIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJjb250cm9sVHlwZSIsInNldENvbnRyb2xUeXBlIiwiY29udHJvbHMiLCJhaSIsIm1hbnVhbCIsIk1hbnVhbEZvcm0iLCJDb250cm9sIiwic3VidGl0bGUiLCJjaGVja2VkIiwibWFudWFsbHkiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInBhdGh3YXkiLCJJbnB1dCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfcmVxdWVzdENyZWRpdHMiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy90cmltLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9GaXhlZEFsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xldmVsLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2ltYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQUksS0FBSztjQUNuQixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU9MLE1BQUEsQ0FBQU0sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUosS0FBTSxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1MsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkssU0FBVWEsUUFBUUEsQ0FBQ0MsS0FBYSxFQUFF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