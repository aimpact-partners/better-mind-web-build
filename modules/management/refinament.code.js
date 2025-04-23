System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.3.32/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/modal", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.32/components/ui", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, RefinementActivityModal, RefinementModal, __beyond_pkg, hmr;
  _export({
    RefinementActivityModal: void 0,
    RefinementModal: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp0332MainLayoutWidget) {
      dependency_1 = _aimpactAilearnApp0332MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_2 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_5 = _pragmateUi100Beta7Modal;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7List) {
      dependency_7 = _pragmateUi100Beta7List;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_pragmateUi100Beta7Form) {
      dependency_9 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_10 = _pragmateUi100Beta7FormReactSelect;
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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/management/refinament",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/main-layout.widget', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/modal', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/form/react-select', dependency_10]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 4141550327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementActivityModal = RefinementActivityModal;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          var _examples = require("./examples");
          var _activity = require("./form/activity");
          var _requestCredits = require("./request-credits");
          /*bundle */
          function RefinementActivityModal(props) {
            const {
              owner,
              title,
              description,
              value,
              onConsume,
              activities,
              activity,
              showRelated,
              required,
              objective,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState(value ?? '');
            const [objectiveValue, setObjectiveValue] = _react.default.useState(objective ?? '');
            const [view, setView] = _react.default.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'suggestions' : 'credits');
            const [error, setError] = _react.default.useState();
            const globalTexts = _mainLayout.LayoutBroker.globalTexts;
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits'), 'credits.change');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!show || !textsReady) return null;
            const onGenerate = async specs => {
              try {
                setFetching(true);
                if (!callback) {
                  throw Error('No callback provided');
                }
                specs = specs ? specs : {
                  notes,
                  objective: objectiveValue
                };
                const response = await callback(specs);
                if (response?.error) {
                  let error = texts.errors[response.error] ?? texts.errors.default;
                  if (response.error?.code && texts.error[response.error.code.toString()]) {
                    error = texts.error[response.error.code.toString()];
                  }
                  setError(error);
                  return;
                }
                onClose();
              } catch (e) {
                setError(texts.errors[e.text] ?? texts.errors.default);
              } finally {
                setFetching(false);
              }
            };
            const handleCLose = () => {
              setNotes('');
              setView('suggestions');
              onClose();
            };
            const contextValue = {
              view,
              owner,
              onConsume,
              error,
              setError,
              onClose,
              activity,
              objectiveValue,
              setObjectiveValue,
              activities,
              required,
              showRelated,
              texts: {
                ...texts,
                title,
                description
              },
              onGenerate,
              setView,
              globalTexts,
              notes,
              fetching,
              setNotes
            };
            const finalView = _mainLayout.LayoutBroker.model?.credits?.available > 0 ? view : 'credits';
            return _react.default.createElement(_context.ModalContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                credits: _react.default.createElement(_requestCredits.RequestCreditsContainer, null),
                suggestions: _react.default.createElement(_activity.SuggestionsActivityForm, null),
                examples: _react.default.createElement(_examples.SuggestionExamples, null)
              },
              placeholder: _react.default.createElement(_requestCredits.RequestCreditsContainer, null)
            }))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3800463767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = void 0;
          var _react = require("react");
          const ModalContext = exports.ModalContext = _react.default.createContext({});
          const useModalContext = () => _react.default.useContext(ModalContext);
          exports.useModalContext = useModalContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./examples
      **************************/

      ims.set('./examples', {
        hash: 986637339,
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
          function SuggestionExamples() {
            const {
              texts,
              setView,
              setNotes,
              examples
            } = (0, _context.useModalContext)();
            const [selected, setSelected] = _react.default.useState(null);
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
              }, texts.actions.select)));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "modal__content--justified"
            }, _react.default.createElement("h3", null, texts.examples.title), _react.default.createElement(_list.List, {
              className: "modal__list--options-selection",
              items: examples.items,
              control: Item
            }), _react.default.createElement("div", {
              className: "flex-container flex-end mt-30"
            }, _react.default.createElement("div", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "default",
              onClick: onBack
            }, texts.actions.back)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./form/activity
      *******************************/

      ims.set('./form/activity', {
        hash: 4185683808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsActivityForm = SuggestionsActivityForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _relatedActivity = require("./related-activity");
          function SuggestionsActivityForm() {
            const {
              fetching,
              setView,
              notes,
              required,
              setNotes,
              objectiveValue,
              setObjectiveValue,
              onGenerate,
              texts,
              activities,
              error
            } = (0, _context.useModalContext)();
            const [relatedValue, setRelatedValue] = _react.default.useState('');
            const events = {
              onChange: event => {
                const {
                  name,
                  value
                } = event.currentTarget;
                const callback = name === 'objective' ? setObjectiveValue : setNotes;
                callback(value);
              },
              onClick: () => {
                onGenerate({
                  notes,
                  objective: objectiveValue,
                  related: relatedValue
                });
              },
              setView: () => setView('examples'),
              onBack: () => setView('suggestions')
            };
            let activitySelected;
            if (relatedValue) {
              activitySelected = activities.get(relatedValue);
            }
            const isDisabled = fetching || required && !objectiveValue && !relatedValue || activitySelected && !activitySelected.materials.article;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "error"
            }), _react.default.createElement(_relatedActivity.RelatedActivityField, {
              value: relatedValue,
              setValue: setRelatedValue
            }), !relatedValue && _react.default.createElement(_form.Textarea, {
              label: texts.objective.label,
              name: "objective",
              variant: "floating",
              value: objectiveValue,
              disabled: !!relatedValue,
              onChange: events.onChange,
              placeholder: texts.objective.placeholder
            }), _react.default.createElement(_form.Textarea, {
              label: texts.textarea.label,
              name: "observations",
              value: notes,
              variant: "floating",
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: isDisabled
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./form/index
      ****************************/

      ims.set('./form/index', {
        hash: 2136171755,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsForm = SuggestionsForm;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _relatedActivity = require("./related-activity");
          var _context = require("../context");
          function SuggestionsForm() {
            const {
              fetching,
              setView,
              notes,
              setNotes,
              onGenerate,
              texts,
              error,
              required
            } = (0, _context.useModalContext)();
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: onGenerate,
              setView: () => setView('examples'),
              onBack: () => setView('suggestions')
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("p", null, texts.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_relatedActivity.RelatedActivityField, null), _react.default.createElement(_form.Textarea, {
              variant: "floating",
              label: texts.textarea.label,
              name: "observations",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick,
              disabled: fetching || required && !notes
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./form/related-activity
      ***************************************/

      ims.set('./form/related-activity', {
        hash: 91905791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RelatedActivityField = RelatedActivityField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          function RelatedActivityField({
            value,
            setValue
          }) {
            const {
              texts,
              texts: {
                errors
              },
              activity,
              activities,
              setError,
              showRelated
            } = (0, _context.useModalContext)();
            if (!showRelated) return null;
            const filter = item => item.type === 'content-theory' && item.title;
            const map = item => ({
              value: item.id,
              label: item.title
            });
            const options = activities.items.filter(filter).map(map);
            let defaultValue = {
              value: '',
              label: texts.related.independent
            };
            const onChange = event => {
              activity.specs.set({
                related: event.target.value
              });
              setValue(event.target.value);
              if (event.target.value !== '') {
                const related = activities.get(event.target.value);
                if (!related.materials.article) {
                  setError(errors.NO_RELATED_ACTIVITY);
                  return;
                }
              }
              setError('');
              // activity.specs.set({ related: event.target.value });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.related.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              options: [defaultValue, ...options],
              onChange: onChange
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4152872104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          var _examples = require("./examples");
          var _form = require("./form");
          var _requestCredits = require("./request-credits");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _components = require("pragmate-ui/components");
          /*bundle */ //@ts-ignore

          function RefinementModal(props) {
            const {
              owner,
              title,
              value = '',
              onConsume,
              activities,
              activity,
              showRelated,
              description,
              required,
              textarea,
              show,
              onClose,
              onGenerate: callback
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState(value ?? '');
            const [view, setView] = _react.default.useState(_mainLayout.LayoutBroker.model.credits?.available > 0 ? 'suggestions' : 'credits');
            const [error, setError] = _react.default.useState();
            const globalTexts = _mainLayout.LayoutBroker.globalTexts;
            (0, _hooks.useBinder)([_mainLayout.LayoutBroker.model], () => setView(_mainLayout.LayoutBroker.model?.credits?.available > 0 ? 'suggestions' : 'credits'), 'credits.change');
            _react.default.useEffect(() => {
              setNotes(value ?? '');
            }, [value]);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!show || !textsReady) return null;
            const onGenerate = async () => {
              try {
                setFetching(true);
                if (!callback) {
                  throw Error('No callback provided');
                }
                const response = await callback({
                  notes
                });
                if (response?.error) {
                  setError(texts.errors[response.error] ?? texts.errors.default);
                  return;
                }
                onClose();
              } catch (e) {
                setError(texts.errors[e.text] ?? texts.errors.default);
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const handleCLose = () => {
              setNotes(value ?? '');
              setView('suggestions');
              onClose();
            };
            const contextValue = {
              view,
              owner,
              onConsume,
              error,
              setError,
              onClose,
              activity,
              activities,
              showRelated,
              texts: {
                ...texts,
                title,
                description,
                textarea: textarea ? textarea : texts.textarea
              },
              onGenerate,
              setView,
              globalTexts,
              notes,
              fetching,
              required,
              setNotes
            };
            const finalView = _mainLayout.LayoutBroker.model?.credits?.available > 0 ? view : 'credits';
            return _react.default.createElement(_context.ModalContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: finalView,
              options: {
                credits: _react.default.createElement(_requestCredits.RequestCreditsContainer, null),
                suggestions: _react.default.createElement(_form.SuggestionsForm, null),
                examples: _react.default.createElement(_examples.SuggestionExamples, null)
              },
              placeholder: _react.default.createElement(_requestCredits.RequestCreditsContainer, null)
            }))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./request-credits
      *********************************/

      ims.set('./request-credits', {
        hash: 3994175140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function RequestCreditsContainer() {
            const {
              onClose,
              owner,
              onConsume,
              globalTexts
            } = (0, _context.useModalContext)();
            const onSuccess = () => '';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: onConsume,
              owner: owner,
              onClose: onClose,
              onCancel: onClose,
              globalTexts: globalTexts,
              onSuccess: onSuccess
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity",
        "from": "RefinementActivityModal",
        "name": "RefinementActivityModal"
      }, {
        "im": "./index",
        "from": "RefinementModal",
        "name": "RefinementModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RefinementActivityModal') && _export("RefinementActivityModal", RefinementActivityModal = require ? require('./activity').RefinementActivityModal : value);
        (require || prop === 'RefinementModal') && _export("RefinementModal", RefinementModal = require ? require('./index').RefinementModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbkxheW91dCIsInJlcXVpcmUiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9leGFtcGxlcyIsIl9hY3Rpdml0eSIsIl9yZXF1ZXN0Q3JlZGl0cyIsIlJlZmluZW1lbnRBY3Rpdml0eU1vZGFsIiwicHJvcHMiLCJvd25lciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsIm9uQ29uc3VtZSIsImFjdGl2aXRpZXMiLCJhY3Rpdml0eSIsInNob3dSZWxhdGVkIiwicmVxdWlyZWQiLCJvYmplY3RpdmUiLCJzaG93Iiwib25DbG9zZSIsIm9uR2VuZXJhdGUiLCJjYWxsYmFjayIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJub3RlcyIsInNldE5vdGVzIiwib2JqZWN0aXZlVmFsdWUiLCJzZXRPYmplY3RpdmVWYWx1ZSIsInZpZXciLCJzZXRWaWV3IiwiTGF5b3V0QnJva2VyIiwibW9kZWwiLCJjcmVkaXRzIiwiYXZhaWxhYmxlIiwiZXJyb3IiLCJzZXRFcnJvciIsImdsb2JhbFRleHRzIiwidXNlQmluZGVyIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzcGVjcyIsIkVycm9yIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJlIiwidGV4dCIsImhhbmRsZUNMb3NlIiwiY29udGV4dFZhbHVlIiwiZmluYWxWaWV3IiwiY3JlYXRlRWxlbWVudCIsIk1vZGFsQ29udGV4dCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJzdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aXZpdHlGb3JtIiwiZXhhbXBsZXMiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJwbGFjZWhvbGRlciIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIl9saXN0Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm9uQmFjayIsIkl0ZW0iLCJpdGVtIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwidmFyaWFudCIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJiYWNrIiwiX3VpIiwiX2Zvcm0iLCJfcmVsYXRlZEFjdGl2aXR5IiwicmVsYXRlZFZhbHVlIiwic2V0UmVsYXRlZFZhbHVlIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJjdXJyZW50VGFyZ2V0IiwicmVsYXRlZCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJnZXQiLCJpc0Rpc2FibGVkIiwibWF0ZXJpYWxzIiwiYXJ0aWNsZSIsIkZvcm0iLCJFcnJvclJlbmRlcmVyIiwiUmVsYXRlZEFjdGl2aXR5RmllbGQiLCJzZXRWYWx1ZSIsIlRleHRhcmVhIiwibGFiZWwiLCJkaXNhYmxlZCIsInRleHRhcmVhIiwiZ2VuZXJhdGUiLCJQcm9jZXNzQ29udGFpbmVyIiwiU3VnZ2VzdGlvbnNGb3JtIiwiX3JlYWN0U2VsZWN0IiwiZmlsdGVyIiwidHlwZSIsIm1hcCIsImlkIiwiZGVmYXVsdFZhbHVlIiwiaW5kZXBlbmRlbnQiLCJzZXQiLCJ0YXJnZXQiLCJOT19SRUxBVEVEX0FDVElWSVRZIiwiUmVhY3RTZWxlY3QiLCJSZWZpbmVtZW50TW9kYWwiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwib25TdWNjZXNzIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25DYW5jZWwiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2V4YW1wbGVzLnRzeCIsIi90cy9mb3JtL2FjdGl2aXR5LnRzeCIsIi90cy9mb3JtL2luZGV4LnRzeCIsIi90cy9mb3JtL3JlbGF0ZWQtYWN0aXZpdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsZUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsYUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssTUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsU0FBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsU0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsZUFBQSxHQUFBVixPQUFBO1VBRU87VUFBVyxTQUFVVyx1QkFBdUJBLENBQUNDLEtBQUs7WUFDeEQsTUFBTTtjQUNMQyxLQUFLO2NBQ0xDLEtBQUs7Y0FDTEMsV0FBVztjQUVYQyxLQUFLO2NBQ0xDLFNBQVM7Y0FDVEMsVUFBVTtjQUNWQyxRQUFRO2NBQ1JDLFdBQVc7Y0FDWEMsUUFBUTtjQUNSQyxTQUFTO2NBQ1RDLElBQUk7Y0FDSkMsT0FBTztjQUNQQyxVQUFVLEVBQUVDO1lBQVEsQ0FDcEIsR0FBR2QsS0FBSztZQUNULE1BQU0sQ0FBQ2UsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3RCLE1BQUEsQ0FBQXVCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcxQixNQUFBLENBQUF1QixPQUFLLENBQUNDLFFBQVEsQ0FBU2QsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUM3RCxNQUFNLENBQUNpQixjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUc1QixNQUFBLENBQUF1QixPQUFLLENBQUNDLFFBQVEsQ0FBU1IsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUNuRixNQUFNLENBQUNhLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUc5QixNQUFBLENBQUF1QixPQUFLLENBQUNDLFFBQVEsQ0FBQy9CLFdBQUEsQ0FBQXNDLFlBQVksQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEVBQUVDLFNBQVMsR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUM3RyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdwQyxNQUFBLENBQUF1QixPQUFLLENBQUNDLFFBQVEsRUFBVTtZQUNsRCxNQUFNYSxXQUFXLEdBQUc1QyxXQUFBLENBQUFzQyxZQUFZLENBQUNNLFdBQVc7WUFFNUMsSUFBQTFDLE1BQUEsQ0FBQTJDLFNBQVMsRUFDUixDQUFDN0MsV0FBQSxDQUFBc0MsWUFBWSxDQUFDQyxLQUFLLENBQUMsRUFDcEIsTUFBTUYsT0FBTyxDQUFDckMsV0FBQSxDQUFBc0MsWUFBWSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQ3JGLGdCQUFnQixDQUNoQjtZQUNELE1BQU0sQ0FBQ0ssVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBRyxJQUFBN0MsTUFBQSxDQUFBOEMsUUFBUSxFQUFDN0MsZUFBQSxDQUFBOEMsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsSUFBSSxDQUFDMUIsSUFBSSxJQUFJLENBQUNzQixVQUFVLEVBQUUsT0FBTyxJQUFJO1lBRXJDLE1BQU1wQixVQUFVLEdBQUcsTUFBTXlCLEtBQUssSUFBRztjQUNoQyxJQUFJO2dCQUNIdEIsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsSUFBSSxDQUFDRixRQUFRLEVBQUU7a0JBQ2QsTUFBTXlCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7Z0JBR3BDRCxLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxHQUFHO2tCQUFFbkIsS0FBSztrQkFBRVQsU0FBUyxFQUFFVztnQkFBYyxDQUFFO2dCQUM1RCxNQUFNbUIsUUFBUSxHQUFHLE1BQU0xQixRQUFRLENBQUN3QixLQUFLLENBQUM7Z0JBRXRDLElBQUlFLFFBQVEsRUFBRVgsS0FBSyxFQUFFO2tCQUNwQixJQUFJQSxLQUFLLEdBQUdLLEtBQUssQ0FBQ08sTUFBTSxDQUFDRCxRQUFRLENBQUNYLEtBQUssQ0FBQyxJQUFJSyxLQUFLLENBQUNPLE1BQU0sQ0FBQ3hCLE9BQU87a0JBQ2hFLElBQUl1QixRQUFRLENBQUNYLEtBQUssRUFBRWEsSUFBSSxJQUFJUixLQUFLLENBQUNMLEtBQUssQ0FBQ1csUUFBUSxDQUFDWCxLQUFLLENBQUNhLElBQUksQ0FBQ0MsUUFBUSxFQUFFLENBQUMsRUFBRTtvQkFDeEVkLEtBQUssR0FBR0ssS0FBSyxDQUFDTCxLQUFLLENBQUNXLFFBQVEsQ0FBQ1gsS0FBSyxDQUFDYSxJQUFJLENBQUNDLFFBQVEsRUFBRSxDQUFDOztrQkFHcERiLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2tCQUNmOztnQkFHRGpCLE9BQU8sRUFBRTtlQUNULENBQUMsT0FBT2dDLENBQUMsRUFBRTtnQkFDWGQsUUFBUSxDQUFDSSxLQUFLLENBQUNPLE1BQU0sQ0FBQ0csQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSVgsS0FBSyxDQUFDTyxNQUFNLENBQUN4QixPQUFPLENBQUM7ZUFDdEQsU0FBUztnQkFDVEQsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU04QixXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QjFCLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FDWkksT0FBTyxDQUFDLGFBQWEsQ0FBQztjQUN0QlosT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUNELE1BQU1tQyxZQUFZLEdBQUc7Y0FDcEJ4QixJQUFJO2NBQ0p0QixLQUFLO2NBQ0xJLFNBQVM7Y0FDVHdCLEtBQUs7Y0FDTEMsUUFBUTtjQUNSbEIsT0FBTztjQUNQTCxRQUFRO2NBQ1JjLGNBQWM7Y0FDZEMsaUJBQWlCO2NBQ2pCaEIsVUFBVTtjQUNWRyxRQUFRO2NBQ1JELFdBQVc7Y0FDWDBCLEtBQUssRUFBRTtnQkFBRSxHQUFHQSxLQUFLO2dCQUFFaEMsS0FBSztnQkFBRUM7Y0FBVyxDQUFFO2NBQ3ZDVSxVQUFVO2NBQ1ZXLE9BQU87Y0FDUE8sV0FBVztjQUNYWixLQUFLO2NBQ0xKLFFBQVE7Y0FDUks7YUFDQTtZQUVELE1BQU00QixTQUFTLEdBQUc3RCxXQUFBLENBQUFzQyxZQUFZLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEdBQUcsQ0FBQyxHQUFHTCxJQUFJLEdBQUcsU0FBUztZQUUvRSxPQUNDN0IsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDdEQsUUFBQSxDQUFBdUQsWUFBWSxDQUFDQyxRQUFRO2NBQUMvQyxLQUFLLEVBQUUyQztZQUFZLEdBQ3pDckQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDeEQsTUFBQSxDQUFBMkQsS0FBSztjQUFDekMsSUFBSTtjQUFDQyxPQUFPLEVBQUVrQyxXQUFXO2NBQUVPLGFBQWEsRUFBRTtZQUFLLEdBQ3JEM0QsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDMUQsYUFBQSxDQUFBK0QsZUFBZSxRQUNmNUQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDekQsV0FBQSxDQUFBK0Qsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUVSLFNBQVM7Y0FDcEJTLE9BQU8sRUFBRTtnQkFDUjlCLE9BQU8sRUFBRWpDLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25ELGVBQUEsQ0FBQTRELHVCQUF1QixPQUFHO2dCQUNwQ0MsV0FBVyxFQUFFakUsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcEQsU0FBQSxDQUFBK0QsdUJBQXVCLE9BQUc7Z0JBQ3hDQyxRQUFRLEVBQUVuRSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNyRCxTQUFBLENBQUFrRSxrQkFBa0I7ZUFDN0I7Y0FDREMsV0FBVyxFQUFFckUsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkQsZUFBQSxDQUFBNEQsdUJBQXVCO1lBQUcsRUFDdkMsQ0FDZSxDQUNYLENBQ2U7VUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEhBLElBQUFoRSxNQUFBLEdBQUFOLE9BQUE7VUFnQ08sTUFBTThELFlBQVksR0FBQWMsT0FBQSxDQUFBZCxZQUFBLEdBQUd4RCxNQUFBLENBQUF1QixPQUFLLENBQUNnRCxhQUFhLENBQUMsRUFBaUMsQ0FBQztVQUMzRSxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTXhFLE1BQUEsQ0FBQXVCLE9BQUssQ0FBQ2tELFVBQVUsQ0FBQ2pCLFlBQVksQ0FBQztVQUFDYyxPQUFBLENBQUFFLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ3BFLElBQUF4RSxNQUFBLEdBQUFOLE9BQUE7VUFFQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFFQSxJQUFBZ0YsS0FBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUVNLFNBQVUwRSxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFNUIsS0FBSztjQUFFVixPQUFPO2NBQUVKLFFBQVE7Y0FBRXlDO1lBQVEsQ0FBRSxHQUFHLElBQUFsRSxRQUFBLENBQUF1RSxlQUFlLEdBQUU7WUFDaEUsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHNUUsTUFBQSxDQUFBdUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXBELE1BQU1xRCxNQUFNLEdBQUdBLENBQUEsS0FBTS9DLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDekMsTUFBTWdELElBQUksR0FBR0EsQ0FBQztjQUFFQztZQUFJLENBQUUsS0FBSTtjQUN6QixNQUFNQyxPQUFPLEdBQUdBLENBQUEsS0FBSztnQkFDcEJ0RCxRQUFRLENBQUNxRCxJQUFJLENBQUM7Z0JBQ2RqRCxPQUFPLENBQUMsYUFBYSxDQUFDO2NBQ3ZCLENBQUM7Y0FDRCxPQUNDOUIsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQTtnQkFBSTBCLFNBQVMsRUFBQztjQUFZLEdBQ3pCakYsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxlQUFPd0IsSUFBSSxDQUFRLEVBQ25CL0UsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxjQUNDdkQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDekQsV0FBQSxDQUFBb0YsTUFBTTtnQkFBQ0MsUUFBUTtnQkFBQ0MsT0FBTyxFQUFDLFNBQVM7Z0JBQUNKLE9BQU8sRUFBRUE7Y0FBTyxHQUNqRHhDLEtBQUssQ0FBQzZDLE9BQU8sQ0FBQ0MsTUFBTSxDQUNiLENBQ0osQ0FDRjtZQUVQLENBQUM7WUFDRCxPQUNDdEYsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFBdkQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0UsUUFBQSxRQUNDdkYsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLMEIsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDakYsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxhQUFLZixLQUFLLENBQUMyQixRQUFRLENBQUMzRCxLQUFLLENBQU0sRUFDL0JSLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ21CLEtBQUEsQ0FBQWMsSUFBSTtjQUFDUCxTQUFTLEVBQUMsZ0NBQWdDO2NBQUNRLEtBQUssRUFBRXRCLFFBQVEsQ0FBQ3NCLEtBQUs7Y0FBRUMsT0FBTyxFQUFFWjtZQUFJLEVBQUksRUFFekY5RSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBO2NBQUswQixTQUFTLEVBQUM7WUFBK0IsR0FDN0NqRixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBO2NBQUswQixTQUFTLEVBQUM7WUFBZ0IsR0FDOUJqRixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUN6RCxXQUFBLENBQUFvRixNQUFNO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNKLE9BQU8sRUFBRUg7WUFBTSxHQUN2Q3JDLEtBQUssQ0FBQzZDLE9BQU8sQ0FBQ00sSUFBSSxDQUNYLENBQ0osQ0FDRCxDQUNELENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTNGLE1BQUEsR0FBQU4sT0FBQTtVQUVBLElBQUFrRyxHQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQW1HLEtBQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBb0csZ0JBQUEsR0FBQXBHLE9BQUE7VUFFTSxTQUFVd0UsdUJBQXVCQSxDQUFBO1lBQ3RDLE1BQU07Y0FDTDdDLFFBQVE7Y0FDUlMsT0FBTztjQUNQTCxLQUFLO2NBQ0xWLFFBQVE7Y0FDUlcsUUFBUTtjQUNSQyxjQUFjO2NBQ2RDLGlCQUFpQjtjQUNqQlQsVUFBVTtjQUNWcUIsS0FBSztjQUVMNUIsVUFBVTtjQUNWdUI7WUFBSyxDQUNMLEdBQUcsSUFBQWxDLFFBQUEsQ0FBQXVFLGVBQWUsR0FBRTtZQUVyQixNQUFNLENBQUN1QixZQUFZLEVBQUVDLGVBQWUsQ0FBQyxHQUFHaEcsTUFBQSxDQUFBdUIsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFELE1BQU15RSxNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFQyxLQUFLLElBQUc7Z0JBQ2pCLE1BQU07a0JBQUVDLElBQUk7a0JBQUUxRjtnQkFBSyxDQUFFLEdBQUd5RixLQUFLLENBQUNFLGFBQWE7Z0JBQzNDLE1BQU1qRixRQUFRLEdBQUdnRixJQUFJLEtBQUssV0FBVyxHQUFHeEUsaUJBQWlCLEdBQUdGLFFBQVE7Z0JBQ3BFTixRQUFRLENBQUNWLEtBQUssQ0FBQztjQUNoQixDQUFDO2NBQ0RzRSxPQUFPLEVBQUVBLENBQUEsS0FBSztnQkFDYjdELFVBQVUsQ0FBQztrQkFBRU0sS0FBSztrQkFBRVQsU0FBUyxFQUFFVyxjQUFjO2tCQUFFMkUsT0FBTyxFQUFFUDtnQkFBWSxDQUFFLENBQUM7Y0FDeEUsQ0FBQztjQUNEakUsT0FBTyxFQUFFQSxDQUFBLEtBQU1BLE9BQU8sQ0FBQyxVQUFVLENBQUM7Y0FDbEMrQyxNQUFNLEVBQUVBLENBQUEsS0FBTS9DLE9BQU8sQ0FBQyxhQUFhO2FBQ25DO1lBRUQsSUFBSXlFLGdCQUFnQjtZQUNwQixJQUFJUixZQUFZLEVBQUU7Y0FDakJRLGdCQUFnQixHQUFHM0YsVUFBVSxDQUFDNEYsR0FBRyxDQUFDVCxZQUFZLENBQUM7O1lBRWhELE1BQU1VLFVBQVUsR0FDZnBGLFFBQVEsSUFDUE4sUUFBUSxJQUFJLENBQUNZLGNBQWMsSUFBSSxDQUFDb0UsWUFBYSxJQUM3Q1EsZ0JBQWdCLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUNHLFNBQVMsQ0FBQ0MsT0FBUTtZQUUxRCxPQUNDM0csTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFBdkQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0UsUUFBQSxRQUNDdkYsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDc0MsS0FBQSxDQUFBZSxJQUFJO2NBQUMzQixTQUFTLEVBQUM7WUFBMkIsR0FDMUNqRixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLGlCQUNDdkQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxhQUFLZixLQUFLLENBQUNoQyxLQUFLLENBQU0sRUFDdEJSLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsWUFBSWYsS0FBSyxDQUFDL0IsV0FBVyxDQUFLLENBQ2xCLEVBQ1RULE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FDLEdBQUEsQ0FBQWlCLGFBQWE7Y0FBQzFFLEtBQUssRUFBRUEsS0FBSztjQUFFaUQsT0FBTyxFQUFDO1lBQU8sRUFBRyxFQUMvQ3BGLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3VDLGdCQUFBLENBQUFnQixvQkFBb0I7Y0FBQ3BHLEtBQUssRUFBRXFGLFlBQVk7Y0FBRWdCLFFBQVEsRUFBRWY7WUFBZSxFQUFJLEVBQ3ZFLENBQUNELFlBQVksSUFDYi9GLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3NDLEtBQUEsQ0FBQW1CLFFBQVE7Y0FDUkMsS0FBSyxFQUFFekUsS0FBSyxDQUFDeEIsU0FBUyxDQUFDaUcsS0FBSztjQUM1QmIsSUFBSSxFQUFDLFdBQVc7Y0FDaEJoQixPQUFPLEVBQUMsVUFBVTtjQUNsQjFFLEtBQUssRUFBRWlCLGNBQWM7Y0FDckJ1RixRQUFRLEVBQUUsQ0FBQyxDQUFDbkIsWUFBWTtjQUN4QkcsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekI3QixXQUFXLEVBQUU3QixLQUFLLENBQUN4QixTQUFTLENBQUNxRDtZQUFXLEVBRXpDLEVBRURyRSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNzQyxLQUFBLENBQUFtQixRQUFRO2NBQ1JDLEtBQUssRUFBRXpFLEtBQUssQ0FBQzJFLFFBQVEsQ0FBQ0YsS0FBSztjQUMzQmIsSUFBSSxFQUFDLGNBQWM7Y0FDbkIxRixLQUFLLEVBQUVlLEtBQUs7Y0FDWjJELE9BQU8sRUFBQyxVQUFVO2NBQ2xCYyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6QjdCLFdBQVcsRUFBRTdCLEtBQUssQ0FBQzJFLFFBQVEsQ0FBQzlDO1lBQVcsRUFDdEMsQ0FDSSxFQUNQckUsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQTtjQUFRMEIsU0FBUyxFQUFDO1lBQVMsR0FDMUJqRixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUN6RCxXQUFBLENBQUFvRixNQUFNO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNKLE9BQU8sRUFBRWlCLE1BQU0sQ0FBQ2pCLE9BQU87Y0FBRWtDLFFBQVEsRUFBRVQ7WUFBVSxHQUNyRWpFLEtBQUssQ0FBQzZDLE9BQU8sQ0FBQytCLFFBQVEsQ0FDZixDQUNELEVBRVRwSCxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNxQyxHQUFBLENBQUF5QixnQkFBZ0I7Y0FBQ2hHLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ3RDO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEZBLElBQUFyQixNQUFBLEdBQUFOLE9BQUE7VUFFQSxJQUFBa0csR0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUFJLFdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFtRyxLQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQW9HLGdCQUFBLEdBQUFwRyxPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBRU0sU0FBVTRILGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFakcsUUFBUTtjQUFFUyxPQUFPO2NBQUVMLEtBQUs7Y0FBRUMsUUFBUTtjQUFFUCxVQUFVO2NBQUVxQixLQUFLO2NBQUVMLEtBQUs7Y0FBRXBCO1lBQVEsQ0FBRSxHQUFHLElBQUFkLFFBQUEsQ0FBQXVFLGVBQWUsR0FBRTtZQUVwRyxNQUFNeUIsTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQnpFLFFBQVEsQ0FBQ3lFLEtBQUssQ0FBQ0UsYUFBYSxDQUFDM0YsS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRHNFLE9BQU8sRUFBRTdELFVBQVU7Y0FDbkJXLE9BQU8sRUFBRUEsQ0FBQSxLQUFNQSxPQUFPLENBQUMsVUFBVSxDQUFDO2NBQ2xDK0MsTUFBTSxFQUFFQSxDQUFBLEtBQU0vQyxPQUFPLENBQUMsYUFBYTthQUNuQztZQUVELE9BQ0M5QixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUF2RCxNQUFBLENBQUF1QixPQUFBLENBQUFnRSxRQUFBLFFBQ0N2RixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNzQyxLQUFBLENBQUFlLElBQUk7Y0FBQzNCLFNBQVMsRUFBQztZQUEyQixHQUMxQ2pGLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsaUJBQ0N2RCxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLGFBQUtmLEtBQUssQ0FBQ2hDLEtBQUssQ0FBTSxFQUN0QlIsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxZQUFJZixLQUFLLENBQUMvQixXQUFXLENBQUssQ0FDbEIsRUFDVFQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcUMsR0FBQSxDQUFBaUIsYUFBYTtjQUFDMUUsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0JuQyxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUN1QyxnQkFBQSxDQUFBZ0Isb0JBQW9CLE9BQUcsRUFDeEI5RyxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNzQyxLQUFBLENBQUFtQixRQUFRO2NBQ1I1QixPQUFPLEVBQUMsVUFBVTtjQUNsQjZCLEtBQUssRUFBRXpFLEtBQUssQ0FBQzJFLFFBQVEsQ0FBQ0YsS0FBSztjQUMzQmIsSUFBSSxFQUFDLGNBQWM7Y0FDbkIxRixLQUFLLEVBQUVlLEtBQUs7Y0FDWnlFLFFBQVEsRUFBRUQsTUFBTSxDQUFDQyxRQUFRO2NBQ3pCN0IsV0FBVyxFQUFFN0IsS0FBSyxDQUFDMkUsUUFBUSxDQUFDOUM7WUFBVyxFQUN0QyxDQUNJLEVBQ1ByRSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBO2NBQVEwQixTQUFTLEVBQUM7WUFBUyxHQUMxQmpGLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3pELFdBQUEsQ0FBQW9GLE1BQU07Y0FBQ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ0osT0FBTyxFQUFFaUIsTUFBTSxDQUFDakIsT0FBTztjQUFFa0MsUUFBUSxFQUFFN0YsUUFBUSxJQUFLTixRQUFRLElBQUksQ0FBQ1U7WUFBTSxHQUMzRmUsS0FBSyxDQUFDNkMsT0FBTyxDQUFDK0IsUUFBUSxDQUNmLENBQ0QsRUFFVHBILE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FDLEdBQUEsQ0FBQXlCLGdCQUFnQjtjQUFDaEcsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDdEM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0EsSUFBQXJCLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUE2SCxZQUFBLEdBQUE3SCxPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBRU0sU0FBVW9ILG9CQUFvQkEsQ0FBQztZQUFFcEcsS0FBSztZQUFFcUc7VUFBUSxDQUFFO1lBQ3ZELE1BQU07Y0FDTHZFLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFTztjQUFNLENBQUU7Y0FDakJsQyxRQUFRO2NBQ1JELFVBQVU7Y0FDVndCLFFBQVE7Y0FDUnRCO1lBQVcsQ0FDWCxHQUFHLElBQUFiLFFBQUEsQ0FBQXVFLGVBQWUsR0FBRTtZQUVyQixJQUFJLENBQUMxRCxXQUFXLEVBQUUsT0FBTyxJQUFJO1lBQzdCLE1BQU0wRyxNQUFNLEdBQUd6QyxJQUFJLElBQUlBLElBQUksQ0FBQzBDLElBQUksS0FBSyxnQkFBZ0IsSUFBSTFDLElBQUksQ0FBQ3ZFLEtBQUs7WUFDbkUsTUFBTWtILEdBQUcsR0FBRzNDLElBQUksS0FBSztjQUFFckUsS0FBSyxFQUFFcUUsSUFBSSxDQUFDNEMsRUFBRTtjQUFFVixLQUFLLEVBQUVsQyxJQUFJLENBQUN2RTtZQUFLLENBQUUsQ0FBQztZQUMzRCxNQUFNdUQsT0FBTyxHQUFHbkQsVUFBVSxDQUFDNkUsS0FBSyxDQUFDK0IsTUFBTSxDQUFDQSxNQUFNLENBQUMsQ0FBQ0UsR0FBRyxDQUFDQSxHQUFHLENBQUM7WUFDeEQsSUFBSUUsWUFBWSxHQUFHO2NBQUVsSCxLQUFLLEVBQUUsRUFBRTtjQUFFdUcsS0FBSyxFQUFFekUsS0FBSyxDQUFDOEQsT0FBTyxDQUFDdUI7WUFBVyxDQUFFO1lBQ2xFLE1BQU0zQixRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4QnRGLFFBQVEsQ0FBQytCLEtBQUssQ0FBQ2tGLEdBQUcsQ0FBQztnQkFBRXhCLE9BQU8sRUFBRUgsS0FBSyxDQUFDNEIsTUFBTSxDQUFDckg7Y0FBSyxDQUFFLENBQUM7Y0FDbkRxRyxRQUFRLENBQUNaLEtBQUssQ0FBQzRCLE1BQU0sQ0FBQ3JILEtBQUssQ0FBQztjQUM1QixJQUFJeUYsS0FBSyxDQUFDNEIsTUFBTSxDQUFDckgsS0FBSyxLQUFLLEVBQUUsRUFBRTtnQkFDOUIsTUFBTTRGLE9BQU8sR0FBRzFGLFVBQVUsQ0FBQzRGLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDNEIsTUFBTSxDQUFDckgsS0FBSyxDQUFDO2dCQUNsRCxJQUFJLENBQUM0RixPQUFPLENBQUNJLFNBQVMsQ0FBQ0MsT0FBTyxFQUFFO2tCQUMvQnZFLFFBQVEsQ0FBQ1csTUFBTSxDQUFDaUYsbUJBQW1CLENBQUM7a0JBQ3BDOzs7Y0FHRjVGLFFBQVEsQ0FBQyxFQUFFLENBQUM7Y0FFWjtZQUNELENBQUM7WUFFRCxPQUNDcEMsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFBdkQsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0UsUUFBQSxRQUNDdkYsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxnQkFBUWYsS0FBSyxDQUFDOEQsT0FBTyxDQUFDVyxLQUFLLENBQVMsRUFDcENqSCxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNnRSxZQUFBLENBQUFVLFdBQVc7Y0FBQ3ZILEtBQUssRUFBRUEsS0FBSztjQUFFcUQsT0FBTyxFQUFFLENBQUM2RCxZQUFZLEVBQUUsR0FBRzdELE9BQU8sQ0FBQztjQUFFbUMsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDcEY7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQXZHLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGVBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFLLE1BQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLFFBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFNBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFtRyxLQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQVUsZUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQUQsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBRU8sWUFKUDs7VUFJa0IsU0FBVXdJLGVBQWVBLENBQUM1SCxLQUFLO1lBQ2hELE1BQU07Y0FDTEMsS0FBSztjQUNMQyxLQUFLO2NBQ0xFLEtBQUssR0FBRyxFQUFFO2NBQ1ZDLFNBQVM7Y0FDVEMsVUFBVTtjQUNWQyxRQUFRO2NBQ1JDLFdBQVc7Y0FDWEwsV0FBVztjQUNYTSxRQUFRO2NBQ1JvRyxRQUFRO2NBQ1JsRyxJQUFJO2NBQ0pDLE9BQU87Y0FDUEMsVUFBVSxFQUFFQztZQUFRLENBQ3BCLEdBQUdkLEtBQUs7WUFDVCxNQUFNLENBQUNlLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0QixNQUFBLENBQUF1QixPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMUIsTUFBQSxDQUFBdUIsT0FBSyxDQUFDQyxRQUFRLENBQVNkLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDN0QsTUFBTSxDQUFDbUIsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRzlCLE1BQUEsQ0FBQXVCLE9BQUssQ0FBQ0MsUUFBUSxDQUFDL0IsV0FBQSxDQUFBc0MsWUFBWSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sRUFBRUMsU0FBUyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzdHLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3BDLE1BQUEsQ0FBQXVCLE9BQUssQ0FBQ0MsUUFBUSxFQUFVO1lBQ2xELE1BQU1hLFdBQVcsR0FBRzVDLFdBQUEsQ0FBQXNDLFlBQVksQ0FBQ00sV0FBVztZQUM1QyxJQUFBMUMsTUFBQSxDQUFBMkMsU0FBUyxFQUNSLENBQUM3QyxXQUFBLENBQUFzQyxZQUFZLENBQUNDLEtBQUssQ0FBQyxFQUNwQixNQUFNRixPQUFPLENBQUNyQyxXQUFBLENBQUFzQyxZQUFZLENBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFDckYsZ0JBQWdCLENBQ2hCO1lBQ0RsQyxNQUFBLENBQUF1QixPQUFLLENBQUM0RyxTQUFTLENBQUMsTUFBSztjQUNwQnpHLFFBQVEsQ0FBQ2hCLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDNkIsVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBRyxJQUFBN0MsTUFBQSxDQUFBOEMsUUFBUSxFQUFDN0MsZUFBQSxDQUFBOEMsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsSUFBSSxDQUFDMUIsSUFBSSxJQUFJLENBQUNzQixVQUFVLEVBQUUsT0FBTyxJQUFJO1lBRXJDLE1BQU1wQixVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0hHLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBRWpCLElBQUksQ0FBQ0YsUUFBUSxFQUFFO2tCQUNkLE1BQU15QixLQUFLLENBQUMsc0JBQXNCLENBQUM7O2dCQUdwQyxNQUFNQyxRQUFRLEdBQUcsTUFBTTFCLFFBQVEsQ0FBQztrQkFBRUs7Z0JBQUssQ0FBRSxDQUFDO2dCQUUxQyxJQUFJcUIsUUFBUSxFQUFFWCxLQUFLLEVBQUU7a0JBQ3BCQyxRQUFRLENBQUNJLEtBQUssQ0FBQ08sTUFBTSxDQUFDRCxRQUFRLENBQUNYLEtBQUssQ0FBQyxJQUFJSyxLQUFLLENBQUNPLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQztrQkFDOUQ7O2dCQUdETCxPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU9nQyxDQUFDLEVBQUU7Z0JBQ1hkLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDTyxNQUFNLENBQUNHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUlYLEtBQUssQ0FBQ08sTUFBTSxDQUFDeEIsT0FBTyxDQUFDO2dCQUN0RDZHLE9BQU8sQ0FBQ2pHLEtBQUssQ0FBQ2UsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1Q1QixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTThCLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ3hCMUIsUUFBUSxDQUFDaEIsS0FBSyxJQUFJLEVBQUUsQ0FBQztjQUNyQm9CLE9BQU8sQ0FBQyxhQUFhLENBQUM7Y0FDdEJaLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxNQUFNbUMsWUFBWSxHQUFHO2NBQ3BCeEIsSUFBSTtjQUNKdEIsS0FBSztjQUNMSSxTQUFTO2NBQ1R3QixLQUFLO2NBQ0xDLFFBQVE7Y0FDUmxCLE9BQU87Y0FDUEwsUUFBUTtjQUNSRCxVQUFVO2NBQ1ZFLFdBQVc7Y0FDWDBCLEtBQUssRUFBRTtnQkFBRSxHQUFHQSxLQUFLO2dCQUFFaEMsS0FBSztnQkFBRUMsV0FBVztnQkFBRTBHLFFBQVEsRUFBRUEsUUFBUSxHQUFHQSxRQUFRLEdBQUczRSxLQUFLLENBQUMyRTtjQUFRLENBQUU7Y0FDdkZoRyxVQUFVO2NBQ1ZXLE9BQU87Y0FDUE8sV0FBVztjQUNYWixLQUFLO2NBQ0xKLFFBQVE7Y0FDUk4sUUFBUTtjQUNSVzthQUNBO1lBQ0QsTUFBTTRCLFNBQVMsR0FBRzdELFdBQUEsQ0FBQXNDLFlBQVksQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsR0FBRyxDQUFDLEdBQUdMLElBQUksR0FBRyxTQUFTO1lBRS9FLE9BQ0M3QixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUN0RCxRQUFBLENBQUF1RCxZQUFZLENBQUNDLFFBQVE7Y0FBQy9DLEtBQUssRUFBRTJDO1lBQVksR0FDekNyRCxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUN4RCxNQUFBLENBQUEyRCxLQUFLO2NBQUN6QyxJQUFJO2NBQUNDLE9BQU8sRUFBRWtDLFdBQVc7Y0FBRU8sYUFBYSxFQUFFO1lBQUssR0FDckQzRCxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUMxRCxhQUFBLENBQUErRCxlQUFlLFFBQ2Y1RCxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUN6RCxXQUFBLENBQUErRCxvQkFBb0I7Y0FDcEJDLFNBQVMsRUFBRVIsU0FBUztjQUNwQlMsT0FBTyxFQUFFO2dCQUNSOUIsT0FBTyxFQUFFakMsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkQsZUFBQSxDQUFBNEQsdUJBQXVCLE9BQUc7Z0JBQ3BDQyxXQUFXLEVBQUVqRSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNzQyxLQUFBLENBQUF5QixlQUFlLE9BQUc7Z0JBQ2hDbkQsUUFBUSxFQUFFbkUsTUFBQSxDQUFBdUIsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDckQsU0FBQSxDQUFBa0Usa0JBQWtCO2VBQzdCO2NBQ0RDLFdBQVcsRUFBRXJFLE1BQUEsQ0FBQXVCLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25ELGVBQUEsQ0FBQTRELHVCQUF1QjtZQUFHLEVBQ3ZDLENBQ2UsQ0FDWCxDQUNlO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pIQSxJQUFBaEUsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQWtHLEdBQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBTyxRQUFBLEdBQUFQLE9BQUE7VUFFTSxTQUFVc0UsdUJBQXVCQSxDQUFBO1lBQ3RDLE1BQU07Y0FBRTlDLE9BQU87Y0FBRVgsS0FBSztjQUFFSSxTQUFTO2NBQUUwQjtZQUFXLENBQUUsR0FBRyxJQUFBcEMsUUFBQSxDQUFBdUUsZUFBZSxHQUFFO1lBRXBFLE1BQU02RCxTQUFTLEdBQUdBLENBQUEsS0FBTSxFQUFFO1lBRTFCLE9BQ0NySSxNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUF2RCxNQUFBLENBQUF1QixPQUFBLENBQUFnRSxRQUFBLFFBQ0N2RixNQUFBLENBQUF1QixPQUFBLENBQUFnQyxhQUFBLENBQUNxQyxHQUFBLENBQUEwQyxrQkFBa0I7Y0FDbEIzSCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJKLEtBQUssRUFBRUEsS0FBSztjQUNaVyxPQUFPLEVBQUVBLE9BQU87Y0FDaEJxSCxRQUFRLEVBQUVySCxPQUFPO2NBQ2pCbUIsV0FBVyxFQUFFQSxXQUFXO2NBQ3hCZ0csU0FBUyxFQUFFQTtZQUFTLEVBQ25CLENBQ0E7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==