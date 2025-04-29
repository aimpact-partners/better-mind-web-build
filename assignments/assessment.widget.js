System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/texts", "@aimpact/ailearn-sdk@1.2.0/tracking", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_2 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Texts) {
      dependency_5 = _beyondJsKernel0112Texts;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_8 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041EntitiesAssignmentsActivitiesBase) {
      dependency_9 = _aimpactAilearnApp041EntitiesAssignmentsActivitiesBase;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_11 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsKernel0112Styles) {
      dependency_15 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/assignments/assessment.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2000637225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            #assignmentId;
            #activityId;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***************************************
      INTERNAL MODULE: ./helpers/get-form-data
      ***************************************/

      ims.set('./helpers/get-form-data', {
        hash: 187723676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getFormData = void 0;
          const getFormData = formElement => {
            const formData = {};
            Array.from(formElement.elements).forEach(element => {
              if (element.name) {
                if (element.type === 'checkbox') {
                  formData[element.name] = element.checked;
                } else if (element.type === 'radio') {
                  if (element.checked) {
                    formData[element.name] = element.value;
                  }
                } else {
                  formData[element.name] = element.value;
                }
              }
            });
            return formData;
          };
          exports.getFormData = getFormData;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2992251597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager extends _model.ReactiveModel {
            #model;
            #activityId;
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #answers = new Map();
            get answers() {
              return this.#answers;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            constructor() {
              super();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId) {
              try {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                _mainLayout.LayoutBroker.backLink = `/assignments/${assignmentId}`;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  id: assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.loadActivity({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                const breadcrumb = [[activity.module.title, `/assignments/${assignmentId}`], [activity.title]];
                const backLink = `/assignments/${assignmentId}`;
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  breadcrumb,
                  backLink
                });
                super.ready = true;
                this.#found = true;
                globalThis.store = this;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            setAnswer(question, value) {
              this.#answers.set(question, value);
              this.trigger('set.answer');
            }
            async save(data) {
              super.ready = false;
              let params = {
                answers: data,
                assignmentId: this.assignmentId,
                activityId: this.#activityId
              };
              await this.model.publish({
                params,
                type: 'assessment'
              });
              super.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 4165182190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAssessmentContext = exports.AssessmentContext = void 0;
          var _react = require("react");
          const AssessmentContext = exports.AssessmentContext = _react.default.createContext({});
          const useAssessmentContext = () => _react.default.useContext(AssessmentContext);
          exports.useAssessmentContext = useAssessmentContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 980942222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _selection = require("./selection");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const {
              model: {
                assessment
              }
            } = store;
            const contextValue = {
              texts,
              fetching: store.fetching,
              store
            };
            return _react.default.createElement(_context.AssessmentContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "multiple-choice",
              type: store.model.type
            }), _react.default.createElement(_selection.Selection, {
              assessments: assessment
            }))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/Input
      ********************************************/

      ims.set('./views/selection/form/Input', {
        hash: 489088116,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          exports.RadioInput = RadioInput;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _answer = require("../interfaces/answer");
          var _icons = require("pragmate-ui/icons");
          var _formContext = require("./controls/form-context");
          function RadioInput({
            selected,
            questionIndex,
            index,
            label,
            name,
            onChange,
            value
          }) {
            const {
              store
            } = (0, _formContext.useFormContext)();
            const cls = `item__option${selected === index ? ' selected' : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              onClick: event => {
                onChange(event);
              }
            }, label, selected === index && _react.default.createElement(_icons.Icon, {
              icon: "circle-check"
            }));
          }
          const InputControl = ({
            questionIndex,
            index,
            done,
            selected,
            value,
            option,
            name,
            isMultiple,
            onChange
          }) => {
            let Control = isMultiple ? _form.CheckBox : RadioInput;
            if (done) Control = _answer.Answer;
            return _react.default.createElement(Control, {
              label: option,
              selected: selected,
              value: value,
              name: name,
              index: index,
              onChange: onChange,
              required: true
            });
          };
          exports.InputControl = InputControl;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/form-context
      ************************************************************/

      ims.set('./views/selection/form/controls/form-context', {
        hash: 1804000310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFormContext = exports.FormContext = void 0;
          var _react = require("react");
          const FormContext = exports.FormContext = _react.default.createContext({});
          const useFormContext = () => _react.default.useContext(FormContext);
          exports.useFormContext = useFormContext;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/selection/form/controls/index
      *****************************************************/

      ims.set('./views/selection/form/controls/index', {
        hash: 1895905073,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              fetching,
              ...restProps
            } = props;
            const [isValid, setIsValid] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const value = {
              isValid,
              totalAnswered: props.store?.answers.size,
              fetching
            };
            const disabled = {
              disabled: !fetching
            };
            return null;
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/is-ready-function
      *****************************************************************/

      ims.set('./views/selection/form/controls/is-ready-function', {
        hash: 3877003488,
        creator: function (require, exports) {
          "use strict";

          const isFormReady = ref => {
            const form = ref.current;
            if (!form) {
              console.error('Form reference is null.');
              return false;
            }
            const checkedRadioGroups = new Set();
            for (const element of Array.from(form.elements)) {
              if (element.required) {
                if (element.type === 'radio') {
                  if (checkedRadioGroups.has(element.name)) {
                    continue;
                  }
                  const radioGroup = form.querySelectorAll(`input[name="${element.name}"]`);
                  if (!Array.from(radioGroup).some(radio => radio.checked)) {
                    return false;
                  }
                  checkedRadioGroups.add(element.name);
                }
                if (element instanceof HTMLInputElement && ['checkbox'].includes(element.type) && !element.checked) {
                  return false;
                } else if (element.value === '') {
                  return false;
                }
              }
            }
            return true;
          };
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/selection/form/controls/submit-button
      *************************************************************/

      ims.set('./views/selection/form/controls/submit-button', {
        hash: 1795831310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubmitButton = SubmitButton;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function SubmitButton(props) {
            const {
              store
            } = props;
            const [disabled, setDisabled] = _react.default.useState(!store.isValid);
            (0, _hooks.useBinder)([store], () => {
              setDisabled(!store.isValid);
            }, 'set.answer');
            const {
              children
            } = props;
            const attrs = {
              ...props
            };
            attrs.disabled = props.disabled;
            delete attrs.children;
            return _react.default.createElement(_components.Button, {
              ...attrs
            }, children);
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/index
      ********************************************/

      ims.set('./views/selection/form/index', {
        hash: 4268464722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionForm = SelectionForm;
          var _formContext = require("./controls/form-context");
          var _question = require("./question");
          var _react = require("react");
          var _submitButton = require("./controls/submit-button");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function SelectionForm({
            assessments
          }) {
            const {
              store,
              texts
            } = (0, _context.useAssessmentContext)();
            const [error, setError] = _react.default.useState('');
            const [totalAnswers, setAnswers] = _react.default.useState(store.answers.size);
            const [fetching, setFetching] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const [isValid, setIsValid] = _react.default.useState(false);
            const disabled = {
              disabled: store.answers.size !== assessments.questions.length
            };
            (0, _hooks.useBinder)([store], () => {
              setAnswers(store.answers.size);
              if (store.answers.size === assessments.questions.length) setIsValid(true);
            }, 'set.answer');
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                event.preventDefault();
                setFetching(true);
                const form = event.target;
                const data = {};
                store.answers.forEach((answer, question) => {
                  data[question] = answer;
                });
                await store.save(data);
              } catch (e) {
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: index,
              question: question,
              store: store
            }));
            const value = {
              isValid,
              totalAnswered: totalAnswers,
              fetching,
              store
            };
            return _react.default.createElement(_formContext.FormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: "assessment__container",
              ref: ref
            }, output, _react.default.createElement("footer", {
              className: "assessment__footer"
            }, _react.default.createElement(_submitButton.SubmitButton, {
              store: store,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts?.finish))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/form/question
      ***********************************************/

      ims.set('./views/selection/form/question', {
        hash: 3269473002,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Question = void 0;
          var _react = require("react");
          var _Input = require("./Input");
          const Question = ({
            question,
            index,
            store
          }) => {
            const [selected, setSelected] = _react.default.useState();
            const onChange = (questionIndex, answerIndex, event) => {
              event.stopPropagation();
              store.setAnswer(questionIndex, answerIndex);
              setSelected(answerIndex);
            };
            const inputs = question.options.map((option, i) => {
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
                value: `${i}`,
                option: option,
                selected: selected,
                name: index,
                index: i,
                questionIndex: index,
                isMultiple: question.isMultiple,
                onChange: e => onChange(index, i, e)
              });
            });
            return _react.default.createElement("div", {
              className: "question__form-container"
            }, _react.default.createElement("h3", {
              className: "question-title"
            }, question.question), inputs);
          };
          exports.Question = Question;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/selection/index
      ***************************************/

      ims.set('./views/selection/index', {
        hash: 209314747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = Selection;
          var _react = require("react");
          var _results = require("./results");
          var _form = require("./form");
          var _beyond_context = require("beyond_context");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function Selection({
            assessments
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              store
            } = (0, _context.useAssessmentContext)();
            const model = store.model;
            const view = model?.data ? 'results' : 'form';
            const views = {
              results: _results.Results,
              form: _form.SelectionForm
            };
            const Control = views[store?.model.getMaterials().assessment.selection || view];
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: !!model.data,
              ternary: true,
              options: {
                true: _react.default.createElement(_results.Results, {
                  assessments: assessments
                }),
                false: _react.default.createElement(_form.SelectionForm, {
                  assessments: assessments
                })
              }
            });
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/selection/interfaces/answer
      ***************************************************/

      ims.set('./views/selection/interfaces/answer', {
        hash: 1239399579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Answer = Answer;
          var _react = require("react");
          function Answer({
            option,
            question
          }) {
            return _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("span", null, option));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/selection/interfaces/questions
      ******************************************************/

      ims.set('./views/selection/interfaces/questions', {
        hash: 4168001512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/selection/interfaces/selection-props
      ************************************************************/

      ims.set('./views/selection/interfaces/selection-props', {
        hash: 3118408654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/results/index
      ***********************************************/

      ims.set('./views/selection/results/index', {
        hash: 2428134971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../../context");
          /*bundle*/
          const Results = ({
            assessments
          }) => {
            const {
              store,
              texts
            } = (0, _context.useAssessmentContext)();
            const {
              model: {
                data: tracking
              }
            } = store;
            const {
              counters
            } = tracking;
            const output = assessments.questions.map((question, index) => {
              let data = tracking?.answers ? tracking.answers : tracking?.responses;
              data = data[index];
              const options = question.options.map((option, i) => {
                let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
                if (data.answer === i) {
                  cls += `option${data.accuracy ? ' option--correct' : ' option--wrong'}`;
                }
                if (question.correctAnswer === i) cls += ' option--correct';
                return _react.default.createElement("div", {
                  key: option,
                  className: cls
                }, _react.default.createElement("span", null, option));
              });
              return _react.default.createElement("div", {
                key: question.question,
                className: "question__container question__container--results"
              }, _react.default.createElement("h3", {
                className: "question-title"
              }, question.question), options);
            });
            return _react.default.createElement("div", {
              key: "",
              className: "assessment__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "info mt-1"
            }, _react.default.createElement("div", {
              className: "flex-container flex-100 flex-space-between"
            }, _react.default.createElement("strong", null, texts.correct, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.correct), "/", _react.default.createElement("span", null, counters.total)))), output);
          };
          exports.Results = Results;
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
      }, {
        "im": "./views/selection/form/controls/index",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./views/selection/form/index",
        "from": "SelectionForm",
        "name": "SelectionForm"
      }, {
        "im": "./views/selection/index",
        "from": "Selection",
        "name": "Selection"
      }, {
        "im": "./views/selection/results/index",
        "from": "Results",
        "name": "Results"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./views/selection/form/controls/index').Form : value);
        (require || prop === 'SelectionForm') && _export("SelectionForm", SelectionForm = require ? require('./views/selection/form/index').SelectionForm : value);
        (require || prop === 'Selection') && _export("Selection", Selection = require ? require('./views/selection/index').Selection : value);
        (require || prop === 'Results') && _export("Results", Results = require ? require('./views/selection/results/index').Results : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJhc3NpZ25tZW50SWQiLCJhY3Rpdml0eUlkIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiZXhwb3J0cyIsImdldEZvcm1EYXRhIiwiZm9ybUVsZW1lbnQiLCJmb3JtRGF0YSIsIkFycmF5IiwiZnJvbSIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJuYW1lIiwidHlwZSIsImNoZWNrZWQiLCJ2YWx1ZSIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl90cmFja2luZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsIml0ZW1zIiwicGFyYW1zVXJpIiwiYW5zd2VycyIsIk1hcCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJmb3VuZCIsImNhbkNvbnN1bWVDcmVkaXRzIiwidHJhY2tpbmciLCJjb25zdHJ1Y3RvciIsInNlc3Npb25JZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwib3ZlcmxheSIsImJhY2tMaW5rIiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImlkIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwibG9hZEFjdGl2aXR5IiwiYnJlYWRjcnVtYiIsInRpdGxlIiwic2V0IiwiZ2xvYmFsVGhpcyIsImUiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2Jhc2UiLCJfaG9va3MiLCJfY29udGV4dCIsIl9zZWxlY3Rpb24iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImFzc2Vzc21lbnQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlBhZ2VDb250YWluZXIiLCJBY3Rpdml0eUhlYWRlciIsImljb24iLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsIl9mb3JtIiwiX2Fuc3dlciIsIl9pY29ucyIsIl9mb3JtQ29udGV4dCIsIlJhZGlvSW5wdXQiLCJzZWxlY3RlZCIsInF1ZXN0aW9uSW5kZXgiLCJpbmRleCIsImxhYmVsIiwib25DaGFuZ2UiLCJ1c2VGb3JtQ29udGV4dCIsImNscyIsIm9uQ2xpY2siLCJldmVudCIsIkljb24iLCJJbnB1dENvbnRyb2wiLCJkb25lIiwib3B0aW9uIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIkFuc3dlciIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIl9jb21wb25lbnRzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiYW5zd2VyIiwibWVzc2FnZSIsIm91dHB1dCIsIm1hcCIsIlF1ZXN0aW9uIiwia2V5IiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsInNldFNlbGVjdGVkIiwiYW5zd2VySW5kZXgiLCJpbnB1dHMiLCJvcHRpb25zIiwiaSIsIl9yZXN1bHRzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwidmlldyIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJnZXRNYXRlcmlhbHMiLCJzZWxlY3Rpb24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJ0cnVlIiwiZmFsc2UiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsImNvdW50ZXJzIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2Zvcm0tY29udGV4dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFVBQVc7WUFDWEMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBUyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNBLElBQUlLLE1BQU1BLENBQUE7Y0FDVCxPQUFPVCxNQUFBLENBQUFVLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFD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