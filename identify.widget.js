System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.4.1/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/components/ui", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, VerificationCodeInput, InstitutionFlow, TeacherForm, NavbarHeader, UserData, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    VerificationCodeInput: void 0,
    InstitutionFlow: void 0,
    TeacherForm: void 0,
    NavbarHeader: void 0,
    UserData: void 0
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
    }, function (_aimpactAilearnApp041StoresBase) {
      dependency_4 = _aimpactAilearnApp041StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_5 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_aimpactChatSdk154Session) {
      dependency_7 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_8 = _aimpactAilearnApp041ComponentsUi;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Image) {
      dependency_14 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_16 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_18 = _pragmateUi100Beta7Swiper;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/swiper', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/identify.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2747464748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2954821453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            get user() {
              return _session.sessionWrapper.user;
            }
            get isMinor() {
              return this.user.age < 18;
            }
            #organization = new _organizations.Organization({});
            #classroom = new _classrooms.Classroom({});
            get classroom() {
              return this.#classroom;
            }
            get organization() {
              return this.#organization;
            }
            #requested;
            get requested() {
              if (this.user.metadata?.requests?.organizations) return 'teacherInstitution';
              return undefined;
              return this.user.metadata?.requests;
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
            load() {
              super.ready = true;
            }
            async registerTeacher(values) {
              return _session.sessionWrapper.user.freeTrial(values);
            }
            async registerInstitution(values) {
              try {
                await this.#organization.publish(values);
                await _session.sessionWrapper.user.load();
                return await this.#organization.freeTrial();
              } catch (e) {
                console.error(e);
                throw new Error('ERROR_PUBLISHING_ORGANIZATION');
              }
            }
            async join(code) {
              this.organization.set({
                code
              });
              const response = await this.organization.join({
                code
              });
              await this.organization.set(response.data.organization);
              return response;
            }
            async joinClassroom(code) {
              this.#classroom.set({
                code
              });
              const response = await this.#classroom.provider.join({
                code
              });
              await this.#classroom.set(response.data.classroom);
              return response;
            }
            async refreshClassroom() {
              if (!this.#classroom.code) {
                console.warn('No classroom code');
                return;
              }
              await this.#classroom.load({
                code: this.#classroom.code
              });
              return this.#classroom;
            }
            async refreshOrg() {
              await this.#organization.load({
                code: this.#organization.code
              });
              return this.#organization;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 665868096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/animations
      **********************************/

      ims.set('./views/animations', {
        hash: 265809797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            default: {
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
            fade: {
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

      /**********************************
      INTERNAL MODULE: ./views/card/index
      **********************************/

      ims.set('./views/card/index', {
        hash: 3821102415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _react = require("react");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          // Card.tsx

          function Card(props) {
            const {
              type,
              index
            } = props;
            const {
              onCardAction,
              texts,
              setRoleSelected
            } = (0, _context.useModuleContext)();
            if (!texts.cards[type]) return null;
            const {
              title,
              description,
              icon
            } = texts.cards[type];
            const attributes = {
              variant: 'primary',
              onClick: () => {
                onCardAction(() => setRoleSelected(type));
              }
            };
            let animate = {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: index * 0.1
              }
            };
            let exit = {
              opacity: 0,
              x: 125,
              transition: {
                duration: 0.3,
                delay: index * 0.1
              }
            };
            return _react.default.createElement(_framerMotion.motion.article, {
              className: "card__container",
              initial: {
                opacity: 0,
                y: 25
              },
              animate: animate,
              exit: exit
            }, _react.default.createElement("header", {
              className: "card__header"
            }, _react.default.createElement("div", {
              className: "icon__container"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("div", {
              className: "card__background-squares"
            })), _react.default.createElement("h2", null, title)), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("p", null, description)), _react.default.createElement("footer", {
              className: "card__actions"
            }, _react.default.createElement(_components.Button, {
              ...attributes
            }, texts.actions.accept)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/code-input
      *********************************************/

      ims.set('./views/components/code-input', {
        hash: 2145715583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerificationCodeInput = VerificationCodeInput;
          var _react = require("react");
          /*bundle*/
          function VerificationCodeInput({
            length,
            onChange
          }) {
            const [values, setValues] = _react.default.useState(Array(length).fill(''));
            const inputsRef = _react.default.useRef([]);
            _react.default.useEffect(() => {
              const event = {
                target: {
                  value: values.join('')
                },
                currentTarget: {
                  value: values.join('')
                },
                type: 'change'
              };
              onChange(event);
            }, [values, onChange]);
            const handleChange = (value, index) => {
              const newValues = [...values];
              newValues[index] = value.slice(-1);
              setValues(newValues);
              const event = {
                target: {
                  value: newValues.join('')
                },
                currentTarget: {
                  value: values.join('')
                },
                type: 'change'
              };
              onChange(event);
              if (value && index < length - 1) {
                inputsRef.current[index + 1]?.focus();
              }
            };
            const handleKeyDown = (e, index) => {
              if (e.key === 'Backspace' && !values[index] && index > 0) {
                setValues(prev => {
                  const newValues = [...prev];
                  newValues[index - 1] = '';
                  return newValues;
                });
                inputsRef.current[index - 1]?.focus();
              }
            };
            const handlePaste = e => {
              const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
              setValues(pasteData);
              pasteData.forEach((value, index) => {
                if (inputsRef.current[index]) {
                  inputsRef.current[index].value = value;
                }
              });
              inputsRef.current[pasteData.length - 1]?.focus();
              e.preventDefault();
            };
            return _react.default.createElement("div", {
              className: "verification-code-input"
            }, values.map((value, index) => _react.default.createElement("input", {
              key: index,
              type: "text",
              value: value,
              maxLength: 1,
              ref: el => inputsRef.current[index] = el,
              onChange: e => handleChange(e.target.value, index),
              onKeyDown: e => handleKeyDown(e, index),
              onPaste: handlePaste
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/input
      ****************************************/

      ims.set('./views/components/input', {
        hash: 176008505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputComponent = InputComponent;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function InputComponent({
            label,
            ...props
          }) {
            const labelVariants = {
              floating: {
                y: -20,
                scale: 0.8
              },
              resting: {
                y: 0,
                scale: 1
              }
            };
            return _react.default.createElement("div", {
              className: "input-container"
            }, _react.default.createElement(_framerMotion.motion.label, {
              animate: "resting",
              whileFocus: "floating",
              variants: labelVariants,
              className: "input-label"
            }, label), _react.default.createElement("input", {
              ...props,
              className: "text-input"
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/radio/index
      **********************************************/

      ims.set('./views/components/radio/index', {
        hash: 2514436339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          // components/radioButton.tsx

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
            }, React.createElement("input", {
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
            })), label);
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/radio/radio-group
      ****************************************************/

      ims.set('./views/components/radio/radio-group', {
        hash: 97078276,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioGroup = RadioGroup;
          var React = require("react");
          // components/radio-group.tsx

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

      /*****************************************
      INTERNAL MODULE: ./views/confirmed-request
      *****************************************/

      ims.set('./views/confirmed-request', {
        hash: 2133498535,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmedRequest = ConfirmedRequest;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _animations = require("./animations");
          var _context = require("./context");
          var _user = require("./user");
          function ConfirmedRequest() {
            let {
              store,
              requested,
              texts,
              metadata,
              store: {
                globalTexts
              },
              texts: {
                actions: textsActions,
                errors
              }
            } = (0, _context.useModuleContext)();
            texts = texts.requested[requested];
            const [error, setError] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(false);
            const showNavigation = ['studentApproved', 'institution', 'teacher', 'teacherApproved'].includes(requested);
            // const showNavigation = requested === 'institution' || requested === 'teacher' || requested === 'teacherApproved';
            const showRefresh = ['teacherInstitution', 'student'].includes(requested);
            let description = texts.description;
            if (requested === 'teacherApproved') {
              description = description.replace('{organization}', store.organization.name);
            }
            const onRefresh = async () => {
              try {
                const methods = {
                  student: store.refreshClassroom.bind(store),
                  teacherInstitution: store.refreshOrg.bind(store)
                };
                setFetching(true);
                const entity = await methods[requested]();
                await _session.sessionWrapper.user.load();
                if (requested === 'teacherInstitution') {
                  _routing.routing.pushState(`/organizations/view/${entity.code}`);
                } else {
                  _routing.routing.pushState(`/classrooms/view/${entity.code}`);
                }
              } catch (e) {
                if (e.code === 105) {
                  const error = requested === 'teacherInstitution' ? errors['ALREADY_WAITING_ORG'] : errors['ALREADY_WAITING_CLASSROOM'];
                  setError(error);
                  return;
                }
              } finally {
                setFetching(false);
              }
            };
            const cls = `center--container${fetching ? ' is-fetching' : ''}`;
            const link = requested === 'studentApproved' ? `/classrooms/view/${store.classroom.code}` : '/';
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "processed__container"
            }, _react.default.createElement("div", {
              className: "left-column grid-center-container"
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement(_components.HtmlWrapper, {
              as: "h2",
              params: {}
            }, texts.title), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), texts.subtitle && _react.default.createElement(_components.HtmlWrapper, {
              as: "h6",
              params: {}
            }, texts.subtitle), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties(),
                totalGenerative: metadata?.coins?.modules,
                totalInteraction: metadata?.coins?.assignments
              },
              className: "welcome-description"
            }, description), showNavigation && _react.default.createElement("footer", {
              className: "actions__container"
            }, _react.default.createElement(_components.Link, {
              className: "btn btn-primary btn-middle",
              href: link
            }, textsActions.start)), showRefresh && _react.default.createElement("div", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              disabled: fetching,
              onClick: onRefresh,
              variant: "primary",
              className: "btn-middle"
            }, globalTexts.actions.refresh)))), _react.default.createElement("div", {
              className: "right-column grid-center-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/welcome/01.webp",
              alt: texts.welcome
            }))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2475874023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/flow
      ****************************/

      ims.set('./views/flow', {
        hash: 191516053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionFlow = SelectionFlow;
          var _react = require("react");
          var _context = require("./context");
          var _institution = require("./flows/institution");
          var _student = require("./flows/student");
          var _teacher = require("./flows/teacher");
          function SelectionFlow() {
            const {
              roleSelected
            } = (0, _context.useModuleContext)();
            const Controls = {
              student: _student.StudentFlow,
              teacher: _teacher.TeacherFlow,
              institution: _institution.InstitutionFlow
            };
            const Control = Controls[roleSelected];
            if (!Control) return null;
            return _react.default.createElement("div", {
              className: "general-container general-container--light"
            }, _react.default.createElement(Control, {
              key: "roleSelected"
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/flows/institution/index
      ***********************************************/

      ims.set('./views/flows/institution/index', {
        hash: 2489988039,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstitutionFlow = InstitutionFlow;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _leftColumn = require("./left-column");
          var _navbar = require("../../navbar");
          var _animations = require("../../animations");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function InstitutionFlow() {
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({});
            const [error, setError] = _react.default.useState(null);
            const {
              store,
              setRequested,
              setRoleSelected,
              setMetadata,
              texts: {
                institution: {
                  form: texts
                }
              }
            } = (0, _context.useModuleContext)();
            const {
              fields
            } = texts;
            const disabled = {
              disabled: fetching
            };
            const requiredFields = ['name', 'type', 'educationalLevel', 'address'];
            const formCompleted = requiredFields.every(field => values[field]);
            const disabledBtn = {
              disabled: fetching || !formCompleted
            };
            const onChange = e => {
              setValues(prevValues => ({
                ...prevValues,
                [e.target.name]: e.target.value
              }));
            };
            const onSubmit = async event => {
              event.preventDefault();
              setFetching(true);
              setError(null);
              try {
                const response = await store.registerInstitution(values);
                if (!response.status) {
                  throw new Error('An error occurred while submitting the form.');
                }
                setMetadata(response.data);
                setRequested('institution');
              } catch (err) {
                console.error(err);
                setError('An error occurred while submitting the form.');
              } finally {
                setFetching(false);
              }
            };
            const onBack = () => setRoleSelected('');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default
            }, _react.default.createElement(_navbar.NavbarHeader, {
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.InstitutionFormLeftColumn, null), _react.default.createElement(_framerMotion.motion.section, null, _react.default.createElement(_form.Form, {
              className: "floating-form",
              onSubmit: onSubmit
            }, error && _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "error"
            }, error), _react.default.createElement(_form.Input, {
              name: "name",
              label: fields.name.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "type",
              label: fields.type.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "educationalLevel",
              label: fields.educationalLevel.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "address",
              label: fields.geographicAddress.label,
              variant: "floating",
              required: true,
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Checkbox, {
              name: "authorizedUser",
              label: fields.authorizedUser.label,
              type: "checkbox",
              required: true,
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit",
              label: fields.submit.label,
              ...disabledBtn
            }))))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/flows/institution/left-column
      *****************************************************/

      ims.set('./views/flows/institution/left-column', {
        hash: 2480786852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstitutionFormLeftColumn = InstitutionFormLeftColumn;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          function InstitutionFormLeftColumn() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.institution;
            const {
              user
            } = store;
            const {
              welcome
            } = texts;
            return _react.default.createElement("div", {
              className: "left-column"
            }, _react.default.createElement("div", {
              className: "user-welcome"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: user.photoURL
            }), _react.default.createElement("section", {
              className: "user-data__detail"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "user-data__name"
            }, welcome.description))), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement("h2", null, formTexts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {},
              className: "welcome-description"
            }, formTexts.description)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/flows/student/index
      *******************************************/

      ims.set('./views/flows/student/index', {
        hash: 271930546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentFlow = StudentFlow;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _codeInput = require("../../components/code-input");
          var _context = require("../../context");
          var _routing = require("@beyond-js/kernel/routing");
          var _leftColumn = require("./left-column");
          var _navbar = require("../../navbar");
          function StudentFlow({}) {
            const [error, setError] = _react.default.useState('');
            const entranceVariants = {
              hidden: {
                y: '-50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            const [styleAlert, setStyleAlert] = _react.default.useState('error');
            const {
              texts,
              store,
              setRoleSelected,
              setRequested
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const TOKEN_SIZE = 7;
            const [token, setToken] = _react.default.useState('');
            const formTexts = texts.student.form;
            const disabled = token.length !== TOKEN_SIZE || fetching;
            const onSubmit = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const response = await store.joinClassroom(token);
                if (response.data.status.toLowerCase() === 'pending') {
                  setRequested('student');
                  return;
                }
                await _session.sessionWrapper.user.load();
                setRequested('studentApproved');
              } catch (e) {
                console.error(e.message);
                if (e.message === 'ALREADY_WAITING') {
                  setRequested('student');
                  return;
                }
                if (e.message === 'ALREADY_MEMBER') {
                  await _session.sessionWrapper.user.load();
                  _routing.routing.pushState(`/classrooms/view/${token}`);
                  return;
                }
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                // setStyleAlert(style);
                const message = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? `${e?.message}_CLASSROOM` : e?.message.toString();
                setError(texts.errors[message] ?? texts.errors.ERROR_PUBLISHING);
              } finally {
                setFetching(false);
              }
            };
            const onTokenChange = event => setToken(event.currentTarget?.value);
            //
            const onBack = () => setRoleSelected('');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.NavbarHeader, {
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.StudentLeftColumn, null), _react.default.createElement(_framerMotion.motion.form, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible",
              className: "right-column center-container access__form",
              onSubmit: onSubmit
            }, _react.default.createElement(_codeInput.VerificationCodeInput, {
              length: TOKEN_SIZE,
              onChange: onTokenChange
            }), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: styleAlert
            }), _react.default.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, formTexts.form.action), _react.default.createElement("div", {
              className: "legend"
            }, _react.default.createElement("h6", null, formTexts.form.legend.title), _react.default.createElement("span", {
              className: "p2"
            }, formTexts.form.legend.description)))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/student/left-column
      *************************************************/

      ims.set('./views/flows/student/left-column', {
        hash: 3621052399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentLeftColumn = StudentLeftColumn;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../context");
          var _user = require("../../user");
          function StudentLeftColumn() {
            let {
              store,
              setRoleSelected,
              requested,
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.student.selection;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "left-column grid-center-container "
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement(_components.HtmlWrapper, {
              as: "h2",
              params: {}
            }, texts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties()
              },
              className: "welcome-description"
            }, texts.description))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/flows/student/old
      *****************************************/

      ims.set('./views/flows/student/old', {
        hash: 4196241678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OldStudentFlow = OldStudentFlow;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _user = require("../../user");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbar = require("../../navbar");
          function OldStudentFlow() {
            const entranceVariants = {
              hidden: {
                y: '50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            let {
              store,
              setRoleSelected,
              requested,
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.student.selection;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.Navbar, {
              onClick: () => setRoleSelected(undefined)
            }), _react.default.createElement(_framerMotion.motion.div, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center processed__container"
            }, _react.default.createElement("div", {
              className: "left-column grid-center-container "
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement(_components.HtmlWrapper, {
              as: "h2",
              params: {}
            }, texts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties()
              },
              className: "welcome-description"
            }, texts.description))), _react.default.createElement("div", {
              className: "right-column grid-center-container"
            }, _react.default.createElement(_image.Image, {
              className: "img-move-animation",
              src: "/assets/welcome/01.webp",
              alt: texts.welcome
            })))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/context
      ****************************************************/

      ims.set('./views/flows/teacher/access/context', {
        hash: 2069280480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTeacherAccessContext = exports.TeacherAccessContext = void 0;
          var _react = require("react");
          const TeacherAccessContext = exports.TeacherAccessContext = _react.default.createContext({});
          const useTeacherAccessContext = () => _react.default.useContext(TeacherAccessContext);
          exports.useTeacherAccessContext = useTeacherAccessContext;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/error-renderer
      ***********************************************************/

      ims.set('./views/flows/teacher/access/error-renderer', {
        hash: 2250220245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          function ErrorRenderer({
            error
          }) {
            if (!error) return null;
            if (typeof error === 'object') {
              return _react.default.createElement("div", {
                className: "error-text"
              }, _react.default.createElement("strong", {
                className: "flex-container text-center"
              }, error.title), _react.default.createElement("span", null, error.description));
            }
            return _react.default.createElement("span", {
              className: "error-text"
            }, error);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/form
      *************************************************/

      ims.set('./views/flows/teacher/access/form', {
        hash: 2440159112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherAccessForm = TeacherAccessForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _codeInput = require("../../../components/code-input");
          var _components = require("pragmate-ui/components");
          var _session = require("@aimpact/chat-sdk/session");
          var _framerMotion = require("framer-motion");
          var _errorRenderer = require("./error-renderer");
          function TeacherAccessForm({}) {
            const [error, setError] = _react.default.useState('');
            const entranceVariants = {
              hidden: {
                y: '-50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            const [, setStyleAlert] = _react.default.useState('error');
            const {
              texts,
              store,
              setRequested
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const TOKEN_SIZE = 7;
            const [token, setToken] = _react.default.useState('');
            const {
              form: formTexts
            } = texts.teacher.institution;
            const disabled = token.length !== TOKEN_SIZE || fetching;
            const onSubmit = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const response = await store.join(token);
                if (response.data.status.toLowerCase() === 'pending') {
                  setRequested('teacherInstitution');
                  return;
                }
                setRequested('teacherApproved');
                await _session.sessionWrapper.user.load();
              } catch (e) {
                console.error(e);
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                // setStyleAlert(style);
                setError(texts.errors[e?.message?.toString()] ?? texts.errors.ERROR_PUBLISHING);
              } finally {
                setFetching(false);
              }
            };
            const onTokenChange = event => setToken(event.currentTarget?.value);
            //
            return _react.default.createElement(_framerMotion.motion.form, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible",
              className: "right-column center-container access__form",
              onSubmit: onSubmit
            }, _react.default.createElement(_codeInput.VerificationCodeInput, {
              length: TOKEN_SIZE,
              onChange: onTokenChange
            }), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, formTexts.form.action), _react.default.createElement("div", {
              className: "legend"
            }, _react.default.createElement("h6", null, formTexts.form.legend.title), _react.default.createElement("span", {
              className: "p2"
            }, formTexts.form.legend.description)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/index
      **************************************************/

      ims.set('./views/flows/teacher/access/index', {
        hash: 1996698633,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherAccess = TeacherAccess;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          var _leftColumn = require("./left-column");
          var _form = require("./form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbar = require("../../../navbar");
          function TeacherAccess({
            setData,
            onBack
          }) {
            const variants = {
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                  duration: 0.5 // parent's own transition duration
                }
              }
            };
            const [token, setToken] = _react.default.useState('');
            const value = {
              token,
              setToken,
              setData
            };
            return _react.default.createElement(_context.TeacherAccessContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.div, {
              variants: variants,
              initial: "hidden",
              animate: "visible"
            }, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.TeacherLeftColumn, null), _react.default.createElement(_form.TeacherAccessForm, null))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/left-column
      ********************************************************/

      ims.set('./views/flows/teacher/access/left-column', {
        hash: 111722249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherLeftColumn = TeacherLeftColumn;
          var _react = require("react");
          var _context = require("../../../context");
          var _user = require("../../../user");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          function TeacherLeftColumn() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.teacher.institution;
            const entranceVariants = {
              hidden: {
                y: '-50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible",
              className: "left-column"
            }, _react.default.createElement("div", {
              className: "user-data-container"
            }, _react.default.createElement(_user.UserData, null)), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement("h2", null, formTexts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {},
              className: "welcome-description"
            }, formTexts.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/flows/teacher/form/index
      ************************************************/

      ims.set('./views/flows/teacher/form/index', {
        hash: 1284418277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherForm = TeacherForm;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _leftColumn = require("./left-column");
          var _animations = require("../../../animations");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbar = require("../../../navbar");
          /*bundle*/
          function TeacherForm({
            data,
            setData,
            onBack
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({});
            const [error, setError] = _react.default.useState(null);
            const {
              store,
              setRequested,
              setMetadata,
              texts: {
                teacher: {
                  form: texts
                }
              }
            } = (0, _context.useModuleContext)();
            const {
              fields
            } = texts;
            const disabled = {
              disabled: fetching
            };
            const requiredFields = ['role', 'grade', 'curricularArea', 'name', 'type', 'address'];
            const formCompleted = requiredFields.every(field => values[field]);
            const disabledBtn = {
              disabled: fetching || !formCompleted
            };
            const onChange = e => {
              setValues(prevValues => ({
                ...prevValues,
                [e.target.name]: e.target.value
              }));
            };
            const onSubmit = async event => {
              event.preventDefault();
              setFetching(true);
              setError(null);
              try {
                const response = await store.registerTeacher(values);
                if (!response.status) {
                  throw new Error('FAILED');
                }
                setMetadata(response.data);
                setRequested('teacher');
              } catch (err) {
                if (err.error.code === 55) {
                  setError(texts.errors.ALREADY_WAITING);
                  return;
                }
                setError('An error occurred while submitting the form.');
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "full-width",
              ..._animations.animations.default
            }, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.TeacherFormLeftColumn, null), _react.default.createElement(_form.Form, {
              className: "floating-form vertical--center",
              onSubmit: onSubmit
            }, error && _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "form-error__message"
            }, error), _react.default.createElement("div", {
              className: "form-two-columns"
            }, _react.default.createElement(_form.Input, {
              name: "role",
              label: fields.role.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "grade",
              label: fields.grade.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            })), _react.default.createElement(_form.Input, {
              name: "curricularArea",
              label: fields.curricularArea.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "name",
              required: true,
              label: fields.name.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "type",
              required: true,
              label: fields.type.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "address",
              required: true,
              label: fields.address.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit",
              label: fields.submit.label,
              ...disabledBtn
            }))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/flows/teacher/form/left-column
      ******************************************************/

      ims.set('./views/flows/teacher/form/left-column', {
        hash: 1144960128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFormLeftColumn = TeacherFormLeftColumn;
          var _react = require("react");
          var _context = require("../../../context");
          var _user = require("../../../user");
          var _components = require("pragmate-ui/components");
          function TeacherFormLeftColumn() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.teacher;
            return _react.default.createElement("div", {
              className: "left-column"
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement("h2", null, formTexts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {},
              className: "welcome-description"
            }, formTexts.description)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/flows/teacher/index
      *******************************************/

      ims.set('./views/flows/teacher/index', {
        hash: 3924717883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFlow = TeacherFlow;
          var _framerMotion = require("framer-motion");
          var _react = require("react");
          var _confirmedRequest = require("../../confirmed-request");
          var _context = require("../../context");
          var _access = require("./access");
          var _form = require("./form");
          var _institution = require("./institution");
          function TeacherFlow() {
            const {
              texts,
              store,
              setRoleSelected
            } = (0, _context.useModuleContext)();
            const hasFreeTrial = store.user.metadata?.requests?.freeTrial;
            const freeTrialAsTeacher = store.user.teacher?.metadata?.role;
            const state = {};
            const [values, setValues] = _react.default.useState(state);
            const editValues = newValues => setValues({
              ...values,
              ...newValues
            });
            if (hasFreeTrial) {
              state.requested = freeTrialAsTeacher ? 'teacher' : 'institution';
            }
            const Controls = {
              form: _form.TeacherForm,
              institution: _institution.TeacherInstitution,
              access: _access.TeacherAccess // component for request access to an institution
            };
            if (values.requested) return _react.default.createElement(_confirmedRequest.ConfirmedRequest, null);
            const hasInstitution = values.hasInstitution;
            const controlKey = hasInstitution === undefined ? 'institution' : hasInstitution ? 'access' : 'form';
            const Control = Controls[controlKey];
            const onBack = () => {
              if (values.hasInstitution === undefined) {
                setRoleSelected('');
                return;
              }
              setValues({
                ...values,
                hasInstitution: undefined
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              onBack: onBack,
              key: controlKey,
              data: values,
              setData: editValues
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/institution
      *************************************************/

      ims.set('./views/flows/teacher/institution', {
        hash: 2534798209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherInstitution = TeacherInstitution;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _radio = require("../../components/radio");
          var _animations = require("../../animations");
          var _navbar = require("../../navbar");
          // components/TeacherInstitution.tsx

          //@ts-ignore

          function TeacherInstitution({
            data,
            setData,
            onBack
          }) {
            const [valueSelected, setValueSelected] = _react.default.useState('');
            const {
              texts,
              store: {
                user
              }
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setValueSelected(value);
            };
            const {
              hello,
              title,
              options,
              description
            } = texts.teacher.institution.intro;
            const onSubmit = event => {
              event.preventDefault();
              setData({
                hasInstitution: valueSelected === 'yes'
              });
            };
            const disabled = {
              disabled: valueSelected === undefined
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "full-width",
              ..._animations.animations.default
            }, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "form__container container "
            }, _react.default.createElement("div", {
              className: "form-role-selection"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img img--3x",
              src: user.photoURL
            }), _react.default.createElement("header", {
              className: "text-center role-selection__title"
            }, _react.default.createElement(_components.HtmlWrapper, {
              params: {
                username: user.displayName
              }
            }, hello), _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
              className: "radio-buttons-container "
            }, _react.default.createElement(_radio.RadioButton, {
              checked: valueSelected === 'yes',
              onChange: onChange,
              label: options.yes.label,
              value: "yes",
              name: "hasInstitution"
            }), _react.default.createElement(_radio.RadioButton, {
              checked: valueSelected === 'no',
              onChange: onChange,
              label: options.no.label,
              value: "no",
              name: "hasInstitution"
            }))), _react.default.createElement("div", {
              className: "box"
            }, valueSelected && _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "form-description"
            }, _react.default.createElement(_components.HtmlWrapper, null, options[valueSelected].description)), _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              ...disabled,
              onClick: onSubmit
            }, texts.actions.continue)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3125932810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _framerMotion = require("framer-motion");
          var _react = require("react");
          var _confirmedRequest = require("./confirmed-request");
          var _context = require("./context");
          var _flow = require("./flow");
          var _roleSelection = require("./role-selection");
          // App.tsx

          function View({
            store
          }) {
            const {
              texts
            } = store;
            const [ready, setReady] = _react.default.useState(store.ready);
            const [roleSelected, setRoleSelected] = _react.default.useState();
            const controls = (0, _framerMotion.useAnimation)();
            const [action, setAction] = _react.default.useState(null);
            const [requested, setRequested] = _react.default.useState(store.requested);
            const [metadata, setMetadata] = _react.default.useState(store.user.metadata);
            const onCardAction = action => {
              setAction(action);
              controls.start({
                x: '-100%',
                opacity: 0
              });
            };
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const onAnimationComplete = () => {
              if (action) {
                action();
                setAction(null);
              }
            };
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              setRoleSelected,
              requested,
              setRequested,
              onAnimationComplete,
              roleSelected,
              store,
              metadata,
              setMetadata,
              onCardAction,
              controls
            };
            const Controls = {
              flow: _flow.SelectionFlow,
              role: _roleSelection.RoleSelection,
              requested: _confirmedRequest.ConfirmedRequest
            };
            let Control = requested ? Controls.requested : roleSelected ? Controls.flow : Controls.role;
            const key = requested ? 'requested' : roleSelected ? 'flow' : 'role';
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              key: key
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/navbar
      ******************************/

      ims.set('./views/navbar', {
        hash: 223812404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons2 = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function NavbarHeader({
            onClick
          }) {
            const cls = `navbar-header`;
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            // const Control = BirthdayForm;
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/');
            };
            const attrs = {};
            if (onClick) attrs.onClick = onClick;
            return _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement("div", {
              className: "link",
              onClick: onClick
            }, _react.default.createElement(_icons2.Icon, {
              icon: "backArrow"
            }), " ", globalTexts.actions.back)), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "exit",
              className: "circle",
              onClick: logout
            })));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/role-selection
      **************************************/

      ims.set('./views/role-selection', {
        hash: 3897738493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoleSelection = RoleSelection;
          var _react = require("react");
          var _context = require("./context");
          var _card = require("./card");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _image = require("pragmate-ui/image");
          var _swiper = require("pragmate-ui/swiper");
          // App.tsx

          function RoleSelection() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const title = texts.title;
            const items = [_react.default.createElement(_card.Card, {
              type: "student",
              index: 0,
              key: "student"
            })];
            if (!store.isMinor) {
              items.push(_react.default.createElement(_card.Card, {
                type: "teacher",
                key: "teacher",
                index: 1
              }));
              items.push(_react.default.createElement(_card.Card, {
                type: "institution",
                key: "institution",
                index: 2
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "general-container no-p vertical-center"
            }, _react.default.createElement("div", null), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--container"
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: "role-selection__header"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/rvd/rvd.png"
            }), _react.default.createElement("span", {
              className: "text-center"
            }, _react.default.createElement("h1", null, title), _react.default.createElement("span", null, texts.subtitle))), _react.default.createElement(_swiper.SwiperSlider, {
              slidesPerView: 'auto',
              spaceBetween: 20
            }, items), _react.default.createElement(_framerMotion.motion.div, {
              className: "circle-overlay",
              initial: {
                opacity: 0
              },
              exit: {
                width: '200vh',
                height: '200vh',
                opacity: 1,
                borderRadius: 0,
                zIndex: 9000,
                transition: {
                  duration: 0.3
                }
              }
            }))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/user
      ****************************/

      ims.set('./views/user', {
        hash: 2957325365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function UserData({
            showWelcome,
            className
          } = {
            showWelcome: true
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              user
            } = store;
            const {
              welcome
            } = texts;
            const cls = `user-welcome${className ? ` ${className}` : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: user.photoURL
            }), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement("h6", null, React.createElement(_components.HtmlWrapper, {
              params: {
                username: user.displayName
              }
            }, welcome.hello)), showWelcome && React.createElement("span", {
              className: "user-data__name"
            }, welcome.description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/components/code-input",
        "from": "VerificationCodeInput",
        "name": "VerificationCodeInput"
      }, {
        "im": "./views/flows/institution/index",
        "from": "InstitutionFlow",
        "name": "InstitutionFlow"
      }, {
        "im": "./views/flows/teacher/form/index",
        "from": "TeacherForm",
        "name": "TeacherForm"
      }, {
        "im": "./views/navbar",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./views/user",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'VerificationCodeInput') && _export("VerificationCodeInput", VerificationCodeInput = require ? require('./views/components/code-input').VerificationCodeInput : value);
        (require || prop === 'InstitutionFlow') && _export("InstitutionFlow", InstitutionFlow = require ? require('./views/flows/institution/index').InstitutionFlow : value);
        (require || prop === 'TeacherForm') && _export("TeacherForm", TeacherForm = require ? require('./views/flows/teacher/form/index').TeacherForm : value);
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./views/navbar').NavbarHeader : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./views/user').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2NsYXNzcm9vbXMiLCJfb3JnYW5pemF0aW9ucyIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiQmFzZVN0b3JlTWFuYWdlciIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJyZWdpc3RlclRlYWNoZXIiLCJ2YWx1ZXMiLCJmcmVlVHJpYWwiLCJyZWdpc3Rlckluc3RpdHV0aW9uIiwicHVibGlzaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImpvaW4iLCJjb2RlIiwic2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiam9pbkNsYXNzcm9vbSIsInByb3ZpZGVyIiwicmVmcmVzaENsYXNzcm9vbSIsIndhcm4iLCJyZWZyZXNoT3JnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInRleHRzIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsImNhcmRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJhdHRyaWJ1dGVzIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWxheSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsIkJ1dHRvbiIsImFjdGlvbnMiLCJhY2NlcHQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiaW5wdXRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWVzIiwic2xpY2UiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHJldiIsImhhbmRsZVBhc3RlIiwicGFzdGVEYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzcGxpdCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1heExlbmd0aCIsInJlZiIsImVsIiwib25LZXlEb3duIiwib25QYXN0ZSIsIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJsYWJlbFZhcmlhbnRzIiwiZmxvYXRpbmciLCJzY2FsZSIsInJlc3RpbmciLCJ3aGlsZUZvY3VzIiwidmFyaWFudHMiLCJSZWFjdCIsIlJhZGlvQnV0dG9uIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiZGl2IiwiY2hlY2tlZCIsImxheW91dCIsIlJhZGlvR3JvdXAiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIl91aSIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2FuaW1hdGlvbnMiLCJfdXNlciIsIkNvbmZpcm1lZFJlcXVlc3QiLCJnbG9iYWxUZXh0cyIsInRleHRzQWN0aW9ucyIsImVycm9ycyIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNob3dOYXZpZ2F0aW9uIiwiaW5jbHVkZXMiLCJzaG93UmVmcmVzaCIsInJlcGxhY2UiLCJuYW1lIiwib25SZWZyZXNoIiwibWV0aG9kcyIsInN0dWRlbnQiLCJiaW5kIiwidGVhY2hlckluc3RpdHV0aW9uIiwiZW50aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNscyIsImxpbmsiLCJQYWdlQ29udGFpbmVyIiwiVXNlckRhdGEiLCJIdG1sV3JhcHBlciIsImFzIiwicGFyYW1zIiwiRXJyb3JSZW5kZXJlciIsInN1YnRpdGxlIiwiZ2V0UHJvcGVydGllcyIsInRvdGFsR2VuZXJhdGl2ZSIsImNvaW5zIiwibW9kdWxlcyIsInRvdGFsSW50ZXJhY3Rpb24iLCJhc3NpZ25tZW50cyIsIkxpbmsiLCJocmVmIiwic3RhcnQiLCJkaXNhYmxlZCIsInJlZnJlc2giLCJJbWFnZSIsInNyYyIsImFsdCIsIndlbGNvbWUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW5zdGl0dXRpb24iLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwiU2VsZWN0aW9uRmxvdyIsInJvbGVTZWxlY3RlZCIsIkNvbnRyb2xzIiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsInNldFJlcXVlc3RlZCIsInNldE1ldGFkYXRhIiwiZm9ybSIsImZpZWxkcyIsInJlcXVpcmVkRmllbGRzIiwiZm9ybUNvbXBsZXRlZCIsImV2ZXJ5IiwiZmllbGQiLCJkaXNhYmxlZEJ0biIsInByZXZWYWx1ZXMiLCJvblN1Ym1pdCIsInN0YXR1cyIsImVyciIsIm9uQmFjayIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiSW5zdGl0dXRpb25Gb3JtTGVmdENvbHVtbiIsInNlY3Rpb24iLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsImVkdWNhdGlvbmFsTGV2ZWwiLCJnZW9ncmFwaGljQWRkcmVzcyIsIkNoZWNrYm94IiwiYXV0aG9yaXplZFVzZXIiLCJzdWJtaXQiLCJmb3JtVGV4dHMiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiX2NvZGVJbnB1dCIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwibWVzc2FnZSIsInN0eWxlIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsIlN0dWRlbnRMZWZ0Q29sdW1uIiwiYWN0aW9uIiwibGVnZW5kIiwic2VsZWN0aW9uIiwiT2xkU3R1ZGVudEZsb3ciLCJOYXZiYXIiLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsIlRlYWNoZXJBY2Nlc3MiLCJzZXREYXRhIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9jb25maXJtZWRSZXF1ZXN0IiwiX2FjY2VzcyIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImhlbGxvIiwib3B0aW9ucyIsImludHJvIiwidXNlcm5hbWUiLCJ5ZXMiLCJubyIsImJsb2NrIiwiY29udGludWUiLCJfaG9va3MiLCJfZmxvdyIsIl9yb2xlU2VsZWN0aW9uIiwic2V0UmVhZHkiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInNldEFjdGlvbiIsInVzZUJpbmRlciIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJQYWdlTG9hZGVyIiwiZmxvdyIsIlJvbGVTZWxlY3Rpb24iLCJfaWNvbnMyIiwibG9nb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYXR0cnMiLCJJY29uIiwiYmFjayIsIkFwcEljb25CdXR0b24iLCJfY2FyZCIsIl9zd2lwZXIiLCJpdGVtcyIsInB1c2giLCJoZWFkZXIiLCJTd2lwZXJTbGlkZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJzaG93V2VsY29tZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NhcmQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY29kZS1pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9yYWRpby1ncm91cC50c3giLCIvdHMvdmlld3MvY29uZmlybWVkLXJlcXVlc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3cudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9vbGQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLEVBQUU7WUFDbkI7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFXLEtBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLFdBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixjQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBa0IsZUFBQSxHQUFBbEIsT0FBQTtVQUlNLE1BQU9PLFlBQWEsU0FBUU8sS0FBQSxDQUFBSyxnQkFBZ0I7WUFDakQsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU9ILFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJO1lBQzNCO1lBRUEsSUFBSUUsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUNHLEdBQUcsR0FBRyxFQUFFO1lBQzFCO1lBRUEsQ0FBQUMsWUFBYSxHQUFHLElBQUlSLGNBQUEsQ0FBQVMsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUNwQyxDQUFBQyxTQUFVLEdBQUcsSUFBSVgsV0FBQSxDQUFBWSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzlCLElBQUlELFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsSUFBSUYsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBSSxTQUFVO1lBRVYsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLElBQUksSUFBSSxDQUFDUixJQUFJLENBQUNTLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUUsT0FBTyxvQkFBb0I7Y0FDNUUsT0FBT0MsU0FBUztjQUNoQixPQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDUyxRQUFRLEVBQUVDLFFBQVE7WUFDcEM7WUFDQUcsWUFBQTtjQUNDLEtBQUssQ0FBQ2YsZUFBQSxDQUFBZ0IsTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDeEI7WUFFQXhCLElBQUlBLENBQUE7Y0FDSCxLQUFLLENBQUN5QixLQUFLLEdBQUcsSUFBSTtZQUNuQjtZQUNBLE1BQU1DLGVBQWVBLENBQUNDLE1BQU07Y0FDM0IsT0FBT3JCLFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJLENBQUNtQixTQUFTLENBQUNELE1BQU0sQ0FBQztZQUM3QztZQUVBLE1BQU1FLG1CQUFtQkEsQ0FBQ0YsTUFBTTtjQUMvQixJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUFkLFlBQWEsQ0FBQ2lCLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDO2dCQUV4QyxNQUFNckIsUUFBQSxDQUFBSSxjQUFjLENBQUNELElBQUksQ0FBQ1QsSUFBSSxFQUFFO2dCQUNoQyxPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUFhLFlBQWEsQ0FBQ2UsU0FBUyxFQUFFO2VBQzNDLENBQUMsT0FBT0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2dCQUNoQixNQUFNLElBQUlHLEtBQUssQ0FBQywrQkFBK0IsQ0FBQzs7WUFFbEQ7WUFFQSxNQUFNQyxJQUFJQSxDQUFDQyxJQUFJO2NBQ2QsSUFBSSxDQUFDdkIsWUFBWSxDQUFDd0IsR0FBRyxDQUFDO2dCQUFFRDtjQUFJLENBQUUsQ0FBQztjQUMvQixNQUFNRSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN6QixZQUFZLENBQUNzQixJQUFJLENBQUM7Z0JBQUVDO2NBQUksQ0FBRSxDQUFDO2NBRXZELE1BQU0sSUFBSSxDQUFDdkIsWUFBWSxDQUFDd0IsR0FBRyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQzFCLFlBQVksQ0FBQztjQUN2RCxPQUFPeUIsUUFBUTtZQUNoQjtZQUVBLE1BQU1FLGFBQWFBLENBQUNKLElBQUk7Y0FDdkIsSUFBSSxDQUFDLENBQUFyQixTQUFVLENBQUNzQixHQUFHLENBQUM7Z0JBQUVEO2NBQUksQ0FBRSxDQUFDO2NBQzdCLE1BQU1FLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBdkIsU0FBVSxDQUFDMEIsUUFBUSxDQUFDTixJQUFJLENBQUM7Z0JBQUVDO2NBQUksQ0FBRSxDQUFDO2NBRTlELE1BQU0sSUFBSSxDQUFDLENBQUFyQixTQUFVLENBQUNzQixHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDeEIsU0FBUyxDQUFDO2NBQ2xELE9BQU91QixRQUFRO1lBQ2hCO1lBRUEsTUFBTUksZ0JBQWdCQSxDQUFBO2NBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTNCLFNBQVUsQ0FBQ3FCLElBQUksRUFBRTtnQkFDMUJKLE9BQU8sQ0FBQ1csSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUNqQzs7Y0FHRCxNQUFNLElBQUksQ0FBQyxDQUFBNUIsU0FBVSxDQUFDZixJQUFJLENBQUM7Z0JBQUVvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFyQixTQUFVLENBQUNxQjtjQUFJLENBQUUsQ0FBQztjQUMxRCxPQUFPLElBQUksQ0FBQyxDQUFBckIsU0FBVTtZQUN2QjtZQUVBLE1BQU02QixVQUFVQSxDQUFBO2NBQ2YsTUFBTSxJQUFJLENBQUMsQ0FBQS9CLFlBQWEsQ0FBQ2IsSUFBSSxDQUFDO2dCQUFFb0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBdkIsWUFBYSxDQUFDdUI7Y0FBSSxDQUFFLENBQUM7Y0FDaEUsT0FBTyxJQUFJLENBQUMsQ0FBQXZCLFlBQWE7WUFDMUI7O1VBQ0FYLE9BQUEsQ0FBQU4sWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7OztVQ3RGRDs7VUFFQWlELE1BQUEsQ0FBQUMsY0FBQSxDQUFBNUMsT0FBQTtZQUNBNkMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pPLE1BQU1DLFVBQVUsR0FBQTlDLE9BQUEsQ0FBQThDLFVBQUEsR0FBRztZQUN6QkMsT0FBTyxFQUFFO2NBQ1JDLE9BQU8sRUFBRTtnQkFBRUMsQ0FBQyxFQUFFLE1BQU07Z0JBQUVDLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDbENDLE9BQU8sRUFBRTtnQkFBRUYsQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNURDLElBQUksRUFBRTtnQkFBRUwsQ0FBQyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBQ0RFLElBQUksRUFBRTtjQUNMUCxPQUFPLEVBQUU7Z0JBQUVFLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDdkJDLE9BQU8sRUFBRTtnQkFBRUYsQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNURDLElBQUksRUFBRTtnQkFBRUwsQ0FBQyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBQ0RHLG1CQUFtQixFQUFFO2NBQ3BCUixPQUFPLEVBQUU7Z0JBQUVDLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVHLENBQUMsRUFBRSxLQUFLO2dCQUFFUCxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTs7V0FFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkQsSUFBQUssTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQXlFLGFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMEUsTUFBQSxHQUFBMUUsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBTkE7O1VBUU0sU0FBVTRFLElBQUlBLENBQUNDLEtBQWlCO1lBQ3JDLE1BQU07Y0FBRUMsSUFBSTtjQUFFQztZQUFLLENBQUUsR0FBR0YsS0FBSztZQUU3QixNQUFNO2NBQUVHLFlBQVk7Y0FBRUMsS0FBSztjQUFFQztZQUFlLENBQUUsR0FBRyxJQUFBVixRQUFBLENBQUFXLGdCQUFnQixHQUFFO1lBRW5FLElBQUksQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLENBQUNOLElBQUksQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUNuQyxNQUFNO2NBQUVPLEtBQUs7Y0FBRUMsV0FBVztjQUFFQztZQUFJLENBQUUsR0FBR04sS0FBSyxDQUFDRyxLQUFLLENBQUNOLElBQUksQ0FBQztZQUN0RCxNQUFNVSxVQUFVLEdBQUc7Y0FDbEJDLE9BQU8sRUFBRSxTQUFTO2NBQ2xCQyxPQUFPLEVBQUVBLENBQUEsS0FBSztnQkFDYlYsWUFBWSxDQUFDLE1BQU1FLGVBQWUsQ0FBQ0osSUFBSSxDQUFDLENBQUM7Y0FDMUM7YUFDQTtZQUVELElBQUlkLE9BQU8sR0FBd0I7Y0FDbENELE9BQU8sRUFBRSxDQUFDO2NBQ1ZELENBQUMsRUFBRSxDQUFDO2NBQ0pHLFVBQVUsRUFBRTtnQkFDWEMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2J5QixLQUFLLEVBQUVaLEtBQUssR0FBRzs7YUFFaEI7WUFFRCxJQUFJWixJQUFJLEdBQXdCO2NBQy9CSixPQUFPLEVBQUUsQ0FBQztjQUNWTyxDQUFDLEVBQUUsR0FBRztjQUNOTCxVQUFVLEVBQUU7Z0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2dCQUNieUIsS0FBSyxFQUFFWixLQUFLLEdBQUc7O2FBRWhCO1lBRUQsT0FDQ1IsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNuQixhQUFBLENBQUFvQixNQUFNLENBQUNDLE9BQU87Y0FDZEMsU0FBUyxFQUFDLGlCQUFpQjtjQUMzQmxDLE9BQU8sRUFBRTtnQkFDUkUsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZELENBQUMsRUFBRTtlQUNIO2NBQ0RFLE9BQU8sRUFBRUEsT0FBTztjQUNoQkcsSUFBSSxFQUFFQTtZQUFJLEdBRVZJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFRRyxTQUFTLEVBQUM7WUFBYyxHQUMvQnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBaUIsR0FDL0J4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQXNCLE9BQU87Y0FBQ1QsSUFBSSxFQUFFQSxJQUFJO2NBQUVRLFNBQVMsRUFBQztZQUFZLEVBQUcsRUFDOUN4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTBCLEVBQUcsQ0FDdkMsRUFDTnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxhQUFLUCxLQUFLLENBQU0sQ0FDUixFQUNUZCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWUsR0FDN0J4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsWUFBSU4sV0FBVyxDQUFLLENBQ2YsRUFDTmYsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFlLEdBQ2hDeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFzQixNQUFNO2NBQUEsR0FBS1Q7WUFBVSxHQUFHUCxLQUFLLENBQUNpQixPQUFPLENBQUNDLE1BQU0sQ0FBVSxDQUMvQyxDQUNPO1VBRW5COzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQSxJQUFBNUIsTUFBQSxHQUFBdkUsT0FBQTtVQU9PO1VBQVUsU0FBVW9HLHFCQUFxQkEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDO1VBQVEsQ0FBK0I7WUFDakcsTUFBTSxDQUFDaEUsTUFBTSxFQUFFaUUsU0FBUyxDQUFDLEdBQUdoQyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBV0MsS0FBSyxDQUFDSixNQUFNLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLE1BQU1DLFNBQVMsR0FBR3BDLE1BQUEsQ0FBQVgsT0FBSyxDQUFDZ0QsTUFBTSxDQUE4QixFQUFFLENBQUM7WUFFL0RyQyxNQUFBLENBQUFYLE9BQUssQ0FBQ2lELFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1DLEtBQUssR0FBd0M7Z0JBQ2xEQyxNQUFNLEVBQUU7a0JBQUVyRCxLQUFLLEVBQUVwQixNQUFNLENBQUNRLElBQUksQ0FBQyxFQUFFO2dCQUFDLENBQXNCO2dCQUN0RGtFLGFBQWEsRUFBRTtrQkFBRXRELEtBQUssRUFBRXBCLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDLEVBQUU7Z0JBQUMsQ0FBc0I7Z0JBQzdEZ0MsSUFBSSxFQUFFO2VBQ2lDO2NBRXhDd0IsUUFBUSxDQUFDUSxLQUFLLENBQUM7WUFDaEIsQ0FBQyxFQUFFLENBQUN4RSxNQUFNLEVBQUVnRSxRQUFRLENBQUMsQ0FBQztZQUV0QixNQUFNVyxZQUFZLEdBQUdBLENBQUN2RCxLQUFhLEVBQUVxQixLQUFhLEtBQUk7Y0FDckQsTUFBTW1DLFNBQVMsR0FBRyxDQUFDLEdBQUc1RSxNQUFNLENBQUM7Y0FDN0I0RSxTQUFTLENBQUNuQyxLQUFLLENBQUMsR0FBR3JCLEtBQUssQ0FBQ3lELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNsQ1osU0FBUyxDQUFDVyxTQUFTLENBQUM7Y0FFcEIsTUFBTUosS0FBSyxHQUF3QztnQkFDbERDLE1BQU0sRUFBRTtrQkFBRXJELEtBQUssRUFBRXdELFNBQVMsQ0FBQ3BFLElBQUksQ0FBQyxFQUFFO2dCQUFDLENBQXNCO2dCQUN6RGtFLGFBQWEsRUFBRTtrQkFBRXRELEtBQUssRUFBRXBCLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDLEVBQUU7Z0JBQUMsQ0FBc0I7Z0JBQzdEZ0MsSUFBSSxFQUFFO2VBQ2lDO2NBQ3hDd0IsUUFBUSxDQUFDUSxLQUFLLENBQUM7Y0FFZixJQUFJcEQsS0FBSyxJQUFJcUIsS0FBSyxHQUFHc0IsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaENNLFNBQVMsQ0FBQ1MsT0FBTyxDQUFDckMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFc0MsS0FBSyxFQUFFOztZQUV2QyxDQUFDO1lBRUQsTUFBTUMsYUFBYSxHQUFHQSxDQUFDNUUsQ0FBd0MsRUFBRXFDLEtBQWEsS0FBSTtjQUNqRixJQUFJckMsQ0FBQyxDQUFDNkUsR0FBRyxLQUFLLFdBQVcsSUFBSSxDQUFDakYsTUFBTSxDQUFDeUMsS0FBSyxDQUFDLElBQUlBLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ3pEd0IsU0FBUyxDQUFDaUIsSUFBSSxJQUFHO2tCQUNoQixNQUFNTixTQUFTLEdBQUcsQ0FBQyxHQUFHTSxJQUFJLENBQUM7a0JBQzNCTixTQUFTLENBQUNuQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtrQkFDekIsT0FBT21DLFNBQVM7Z0JBQ2pCLENBQUMsQ0FBQztnQkFDRlAsU0FBUyxDQUFDUyxPQUFPLENBQUNyQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUVzQyxLQUFLLEVBQUU7O1lBRXZDLENBQUM7WUFFRCxNQUFNSSxXQUFXLEdBQUkvRSxDQUF5QyxJQUFJO2NBQ2pFLE1BQU1nRixTQUFTLEdBQUdoRixDQUFDLENBQUNpRixhQUFhLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQ1QsS0FBSyxDQUFDLENBQUMsRUFBRWQsTUFBTSxDQUFDLENBQUN3QixLQUFLLENBQUMsRUFBRSxDQUFDO2NBQzVFdEIsU0FBUyxDQUFDbUIsU0FBUyxDQUFDO2NBQ3BCQSxTQUFTLENBQUNJLE9BQU8sQ0FBQyxDQUFDcEUsS0FBSyxFQUFFcUIsS0FBSyxLQUFJO2dCQUNsQyxJQUFJNEIsU0FBUyxDQUFDUyxPQUFPLENBQUNyQyxLQUFLLENBQUMsRUFBRTtrQkFDN0I0QixTQUFTLENBQUNTLE9BQU8sQ0FBQ3JDLEtBQUssQ0FBRSxDQUFDckIsS0FBSyxHQUFHQSxLQUFLOztjQUV6QyxDQUFDLENBQUM7Y0FDRmlELFNBQVMsQ0FBQ1MsT0FBTyxDQUFDTSxTQUFTLENBQUNyQixNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUVnQixLQUFLLEVBQUU7Y0FDaEQzRSxDQUFDLENBQUNxRixjQUFjLEVBQUU7WUFDbkIsQ0FBQztZQUVELE9BQ0N4RCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXlCLEdBQ3RDekQsTUFBTSxDQUFDMEYsR0FBRyxDQUFDLENBQUN0RSxLQUFLLEVBQUVxQixLQUFLLEtBQ3hCUixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FDQzJCLEdBQUcsRUFBRXhDLEtBQUs7Y0FDVkQsSUFBSSxFQUFDLE1BQU07Y0FDWHBCLEtBQUssRUFBRUEsS0FBSztjQUNadUUsU0FBUyxFQUFFLENBQUM7Y0FDWkMsR0FBRyxFQUFFQyxFQUFFLElBQUt4QixTQUFTLENBQUNTLE9BQU8sQ0FBQ3JDLEtBQUssQ0FBQyxHQUFHb0QsRUFBRztjQUMxQzdCLFFBQVEsRUFBRTVELENBQUMsSUFBSXVFLFlBQVksQ0FBQ3ZFLENBQUMsQ0FBQ3FFLE1BQU0sQ0FBQ3JELEtBQUssRUFBRXFCLEtBQUssQ0FBQztjQUNsRHFELFNBQVMsRUFBRTFGLENBQUMsSUFBSTRFLGFBQWEsQ0FBQzVFLENBQUMsRUFBRXFDLEtBQUssQ0FBQztjQUN2Q3NELE9BQU8sRUFBRVo7WUFBVyxFQUVyQixDQUFDLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RUEsSUFBQWxELE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBeUUsYUFBQSxHQUFBekUsT0FBQTtVQU1NLFNBQVVzSSxjQUFjQSxDQUFDO1lBQUVDLEtBQUs7WUFBRSxHQUFHMUQ7VUFBSyxDQUFjO1lBQzdELE1BQU0yRCxhQUFhLEdBQUc7Y0FDckJDLFFBQVEsRUFBRTtnQkFDVDNFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ040RSxLQUFLLEVBQUU7ZUFDUDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1I3RSxDQUFDLEVBQUUsQ0FBQztnQkFDSjRFLEtBQUssRUFBRTs7YUFFUjtZQUVELE9BQ0NuRSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWlCLEdBQy9CeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNuQixhQUFBLENBQUFvQixNQUFNLENBQUMwQyxLQUFLO2NBQUN2RSxPQUFPLEVBQUMsU0FBUztjQUFDNEUsVUFBVSxFQUFDLFVBQVU7Y0FBQ0MsUUFBUSxFQUFFTCxhQUFhO2NBQUV6QyxTQUFTLEVBQUM7WUFBYSxHQUNwR3dDLEtBQUssQ0FDUSxFQUNmaEUsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUEsR0FBV2YsS0FBSztjQUFFa0IsU0FBUyxFQUFDO1lBQVksRUFBRyxDQUN0QztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQSxJQUFBK0MsS0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUF5RSxhQUFBLEdBQUF6RSxPQUFBO1VBRkE7O1VBU00sU0FBVStJLFdBQVdBLENBQUM7WUFBRVIsS0FBSztZQUFFakMsUUFBUTtZQUFFLEdBQUcwQztVQUFJLENBQXFCO1lBQzFFLE1BQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDbEMsTUFBTSxDQUFtQixJQUFJLENBQUM7WUFFckQsTUFBTXNDLGlCQUFpQixHQUFJcEMsS0FBMEMsSUFBSTtjQUN4RSxJQUFJbUMsUUFBUSxDQUFDN0IsT0FBTyxFQUFFO2dCQUNyQixNQUFNK0IsV0FBVyxHQUFHLElBQUlDLEtBQUssQ0FBQyxRQUFRLEVBQUU7a0JBQ3ZDQyxPQUFPLEVBQUUsSUFBSTtrQkFDYkMsVUFBVSxFQUFFO2lCQUNaLENBQUM7Z0JBQ0ZMLFFBQVEsQ0FBQzdCLE9BQU8sQ0FBQ21DLGFBQWEsQ0FBQ0osV0FBVyxDQUFDOztZQUU3QyxDQUFDO1lBRUQsT0FDQ0wsS0FBQSxDQUFBbEQsYUFBQTtjQUFPRyxTQUFTLEVBQUMsY0FBYztjQUFDTyxRQUFRLEVBQUU0QztZQUFpQixHQUMxREosS0FBQSxDQUFBbEQsYUFBQTtjQUFPZCxJQUFJLEVBQUMsT0FBTztjQUFDb0QsR0FBRyxFQUFFZSxRQUFRO2NBQUUzQyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNMEM7WUFBSSxFQUFJLEVBQ25FRixLQUFBLENBQUFsRCxhQUFBLENBQUNuQixhQUFBLENBQUFvQixNQUFNLENBQUMyRCxHQUFHO2NBQ1Z6RCxTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDL0IsT0FBTyxFQUFFO2dCQUFFMEUsS0FBSyxFQUFFTSxJQUFJLENBQUNTLE9BQU8sR0FBRyxHQUFHLEdBQUc7Y0FBQyxDQUFFO2NBQzFDeEYsVUFBVSxFQUFFO2dCQUFFQyxRQUFRLEVBQUU7Y0FBRztZQUFFLEdBRTVCOEUsSUFBSSxDQUFDUyxPQUFPLElBQUlYLEtBQUEsQ0FBQWxELGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQW9CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQ3pELFNBQVMsRUFBQyxxQkFBcUI7Y0FBQzJELE1BQU07WUFBQSxFQUFHLENBQzFELEVBQ1puQixLQUFLLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQU8sS0FBQSxHQUFBOUksT0FBQTtVQURBOztVQWNNLFNBQVUySixVQUFVQSxDQUFDO1lBQUVDLFFBQVE7WUFBRWxHLEtBQUs7WUFBRTRDO1VBQVEsQ0FBb0I7WUFDekUsT0FDQ3dDLEtBQUEsQ0FBQWxELGFBQUEsY0FDRWtELEtBQUssQ0FBQ2UsUUFBUSxDQUFDN0IsR0FBRyxDQUFDNEIsUUFBUSxFQUFFRSxLQUFLLElBQUc7Y0FDckM7Y0FDQSxJQUFJaEIsS0FBSyxDQUFDaUIsY0FBYyxDQUFvQkQsS0FBSyxDQUFDLElBQUksT0FBT0EsS0FBSyxDQUFDakYsS0FBSyxDQUFDbkIsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDNUY7Z0JBQ0EsT0FBT29GLEtBQUssQ0FBQ2tCLFlBQVksQ0FBQ0YsS0FBSyxFQUFFO2tCQUNoQ0wsT0FBTyxFQUFFSyxLQUFLLENBQUNqRixLQUFLLENBQUNuQixLQUFLLEtBQUtBLEtBQUs7a0JBQ3BDNEMsUUFBUSxFQUFFQSxDQUFBLEtBQU1BLFFBQVEsQ0FBQ3dELEtBQUssQ0FBQ2pGLEtBQUssQ0FBQ25CLEtBQUs7aUJBQzFDLENBQUM7O2NBRUgsT0FBT29HLEtBQUs7WUFDYixDQUFDLENBQUMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBRyxHQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0ssUUFBQSxHQUFBbEssT0FBQTtVQUNBLElBQUF5RSxhQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQW9LLFdBQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFxSyxLQUFBLEdBQUFySyxPQUFBO1VBR00sU0FBVXNLLGdCQUFnQkEsQ0FBQTtZQUMvQixJQUFJO2NBQ0hqSyxLQUFLO2NBQ0x1QixTQUFTO2NBQ1RxRCxLQUFLO2NBQ0xwRCxRQUFRO2NBQ1J4QixLQUFLLEVBQUU7Z0JBQUVrSztjQUFXLENBQUU7Y0FDdEJ0RixLQUFLLEVBQUU7Z0JBQUVpQixPQUFPLEVBQUVzRSxZQUFZO2dCQUFFQztjQUFNO1lBQUUsQ0FDeEMsR0FBRyxJQUFBakcsUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUV0QkYsS0FBSyxHQUFHQSxLQUFLLENBQUNyRCxTQUFTLENBQUNBLFNBQVMsQ0FBQztZQUVsQyxNQUFNLENBQUNnQixLQUFLLEVBQUU4SCxRQUFRLENBQUMsR0FBR25HLE1BQUEsQ0FBQVgsT0FBSyxDQUFDNEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUNtRSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckcsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1xRSxjQUFjLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUNDLFFBQVEsQ0FBQ2xKLFNBQVMsQ0FBQztZQUMzRztZQUNBLE1BQU1tSixXQUFXLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQ0QsUUFBUSxDQUFDbEosU0FBUyxDQUFDO1lBQ3pFLElBQUkwRCxXQUFXLEdBQUdMLEtBQUssQ0FBQ0ssV0FBVztZQUVuQyxJQUFLMUQsU0FBb0IsS0FBSyxpQkFBaUIsRUFBRTtjQUNoRDBELFdBQVcsR0FBR0EsV0FBVyxDQUFDMEYsT0FBTyxDQUFDLGdCQUFnQixFQUFFM0ssS0FBSyxDQUFDbUIsWUFBWSxDQUFDeUosSUFBSSxDQUFDOztZQUc3RSxNQUFNQyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0gsTUFBTUMsT0FBTyxHQUFHO2tCQUNmQyxPQUFPLEVBQUUvSyxLQUFLLENBQUNnRCxnQkFBZ0IsQ0FBQ2dJLElBQUksQ0FBQ2hMLEtBQUssQ0FBQztrQkFDM0NpTCxrQkFBa0IsRUFBRWpMLEtBQUssQ0FBQ2tELFVBQVUsQ0FBQzhILElBQUksQ0FBQ2hMLEtBQUs7aUJBQy9DO2dCQUNEdUssV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTVcsTUFBTSxHQUFHLE1BQU1KLE9BQU8sQ0FBQ3ZKLFNBQVMsQ0FBQyxFQUFFO2dCQUN6QyxNQUFNWCxRQUFBLENBQUFJLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDVCxJQUFJLEVBQUU7Z0JBQ2hDLElBQUlpQixTQUFTLEtBQUssb0JBQW9CLEVBQUU7a0JBQ3ZDc0ksUUFBQSxDQUFBc0IsT0FBTyxDQUFDQyxTQUFTLENBQUMsdUJBQXVCRixNQUFNLENBQUN4SSxJQUFJLEVBQUUsQ0FBQztpQkFDdkQsTUFBTTtrQkFDTm1ILFFBQUEsQ0FBQXNCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLG9CQUFvQkYsTUFBTSxDQUFDeEksSUFBSSxFQUFFLENBQUM7O2VBRXJELENBQUMsT0FBT0wsQ0FBQyxFQUFFO2dCQUNYLElBQUlBLENBQUMsQ0FBQ0ssSUFBSSxLQUFLLEdBQUcsRUFBRTtrQkFDbkIsTUFBTUgsS0FBSyxHQUNWaEIsU0FBUyxLQUFLLG9CQUFvQixHQUMvQjZJLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUM3QkEsTUFBTSxDQUFDLDJCQUEyQixDQUFDO2tCQUN2Q0MsUUFBUSxDQUFDOUgsS0FBSyxDQUFDO2tCQUNmOztlQUVELFNBQVM7Z0JBQ1RnSSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTWMsR0FBRyxHQUFHLG9CQUFvQmYsUUFBUSxHQUFHLGNBQWMsR0FBRyxFQUFFLEVBQUU7WUFDaEUsTUFBTWdCLElBQUksR0FBSS9KLFNBQW9CLEtBQUssaUJBQWlCLEdBQUcsb0JBQW9CdkIsS0FBSyxDQUFDcUIsU0FBUyxDQUFDcUIsSUFBSSxFQUFFLEdBQUcsR0FBRztZQUMzRyxPQUNDd0IsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxRSxHQUFBLENBQUEyQixhQUFhO2NBQUM3RixTQUFTLEVBQUUyRjtZQUFHLEdBQzVCbkgsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNuQixhQUFBLENBQUFvQixNQUFNLENBQUMyRCxHQUFHO2NBQUEsR0FBS1ksV0FBQSxDQUFBekcsVUFBVSxDQUFDQyxPQUFPO2NBQUVtQyxTQUFTLEVBQUM7WUFBc0IsR0FDbkV4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW1DLEdBQ2pEeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUN5RSxLQUFBLENBQUF3QixRQUFRLE9BQUcsRUFDWnRILE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQW1ILFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFO1lBQUUsR0FDN0IvRyxLQUFLLENBQUNJLEtBQUssQ0FDQyxFQUNkZCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQWdDLGFBQWE7Y0FBQ3JKLEtBQUssRUFBRUEsS0FBSztjQUFFNkMsT0FBTyxFQUFDO1lBQVMsRUFBRyxFQUNoRFIsS0FBSyxDQUFDaUgsUUFBUSxJQUNkM0gsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLE1BQU0sRUFBRTtZQUFFLEdBQzdCL0csS0FBSyxDQUFDaUgsUUFBUSxDQUVoQixFQUNEM0gsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXO2NBQ1hFLE1BQU0sRUFBRTtnQkFDUCxHQUFHM0wsS0FBSyxDQUFDZSxJQUFJLENBQUMrSyxhQUFhLEVBQUU7Z0JBQzdCQyxlQUFlLEVBQUV2SyxRQUFRLEVBQUV3SyxLQUFLLEVBQUVDLE9BQU87Z0JBQ3pDQyxnQkFBZ0IsRUFBRTFLLFFBQVEsRUFBRXdLLEtBQUssRUFBRUc7ZUFDbkM7Y0FDRHpHLFNBQVMsRUFBQztZQUFxQixHQUU5QlQsV0FBVyxDQUNDLEVBQ2J1RixjQUFjLElBQ2R0RyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUE4SCxJQUFJO2NBQUMxRyxTQUFTLEVBQUMsNEJBQTRCO2NBQUMyRyxJQUFJLEVBQUVmO1lBQUksR0FDckRuQixZQUFZLENBQUNtQyxLQUFLLENBQ2IsQ0FFUixFQUNBNUIsV0FBVyxJQUNYeEcsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQixHQUNsQ3hCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBc0IsTUFBTTtjQUNOMkcsUUFBUSxFQUFFakMsUUFBUTtjQUNsQmpGLE9BQU8sRUFBRXdGLFNBQVM7Y0FDbEJ6RixPQUFPLEVBQUMsU0FBUztjQUNqQk0sU0FBUyxFQUFDO1lBQVksR0FFckJ3RSxXQUFXLENBQUNyRSxPQUFPLENBQUMyRyxPQUFPLENBQ3BCLENBRVYsQ0FDUSxDQUNMLEVBQ050SSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9DLEdBQ2xEeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUN1RSxNQUFBLENBQUEyQyxLQUFLO2NBQUNDLEdBQUcsRUFBQyx5QkFBeUI7Y0FBQ0MsR0FBRyxFQUFFL0gsS0FBSyxDQUFDZ0k7WUFBTyxFQUFJLENBQ3RELENBQ00sQ0FDRTtVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SEEsSUFBQTFJLE1BQUEsR0FBQXZFLE9BQUE7VUFpQk8sTUFBTWtOLGFBQWEsR0FBQXJNLE9BQUEsQ0FBQXFNLGFBQUEsR0FBRzNJLE1BQUEsQ0FBQVgsT0FBSyxDQUFDdUosYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDL0QsTUFBTWhJLGdCQUFnQixHQUFHQSxDQUFBLEtBQU1aLE1BQUEsQ0FBQVgsT0FBSyxDQUFDd0osVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQ3JNLE9BQUEsQ0FBQXNFLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCdEUsSUFBQVosTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXFOLFlBQUEsR0FBQXJOLE9BQUE7VUFDQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUNBLElBQUF1TixRQUFBLEdBQUF2TixPQUFBO1VBRU0sU0FBVXdOLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFQztZQUFZLENBQUUsR0FBRyxJQUFBakosUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNdUksUUFBUSxHQUFHO2NBQ2hCdEMsT0FBTyxFQUFFa0MsUUFBQSxDQUFBSyxXQUFXO2NBQ3BCQyxPQUFPLEVBQUVMLFFBQUEsQ0FBQU0sV0FBVztjQUNwQkMsV0FBVyxFQUFFVCxZQUFBLENBQUFVO2FBQ2I7WUFFRCxNQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0QsWUFBWSxDQUFDO1lBQ3RDLElBQUksQ0FBQ08sT0FBTyxFQUFFLE9BQU8sSUFBSTtZQUN6QixPQUNDekosTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUE0QyxHQUMxRHhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDb0ksT0FBTztjQUFDekcsR0FBRyxFQUFDO1lBQWMsRUFBRyxDQUN6QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBaEQsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF5RSxhQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQWlPLEtBQUEsR0FBQWpPLE9BQUE7VUFDQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQWtPLFdBQUEsR0FBQWxPLE9BQUE7VUFDQSxJQUFBbU8sT0FBQSxHQUFBbk8sT0FBQTtVQUNBLElBQUFvSyxXQUFBLEdBQUFwSyxPQUFBO1VBQ0EsSUFBQWlLLEdBQUEsR0FBQWpLLE9BQUE7VUFFTztVQUFVLFNBQVUrTixlQUFlQSxDQUFBO1lBQ3pDLE1BQU0sQ0FBQ3BELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdyRyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDbEUsTUFBTSxFQUFFaUUsU0FBUyxDQUFDLEdBQUdoQyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBQyxFQUFTLENBQUM7WUFDckQsTUFBTSxDQUFDNUQsS0FBSyxFQUFFOEgsUUFBUSxDQUFDLEdBQUduRyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBZ0IsSUFBSSxDQUFDO1lBRTdELE1BQU07Y0FDTG5HLEtBQUs7Y0FDTCtOLFlBQVk7Y0FDWmxKLGVBQWU7Y0FDZm1KLFdBQVc7Y0FDWHBKLEtBQUssRUFBRTtnQkFDTjZJLFdBQVcsRUFBRTtrQkFBRVEsSUFBSSxFQUFFcko7Z0JBQUs7Y0FBRTtZQUM1QixDQUNELEdBQUcsSUFBQVQsUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNO2NBQUVvSjtZQUFNLENBQUUsR0FBR3RKLEtBQUs7WUFDeEIsTUFBTTJILFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUVqQztZQUFRLENBQUU7WUFFdkMsTUFBTTZELGNBQWMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDO1lBRXRFLE1BQU1DLGFBQWEsR0FBR0QsY0FBYyxDQUFDRSxLQUFLLENBQUNDLEtBQUssSUFBSXJNLE1BQU0sQ0FBQ3FNLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLE1BQU1DLFdBQVcsR0FBRztjQUFFaEMsUUFBUSxFQUFFakMsUUFBUSxJQUFJLENBQUM4RDtZQUFhLENBQUU7WUFFNUQsTUFBTW5JLFFBQVEsR0FBSTVELENBQXNDLElBQUk7Y0FDM0Q2RCxTQUFTLENBQUNzSSxVQUFVLEtBQUs7Z0JBQ3hCLEdBQUdBLFVBQVU7Z0JBQ2IsQ0FBQ25NLENBQUMsQ0FBQ3FFLE1BQU0sQ0FBQ2tFLElBQUksR0FBR3ZJLENBQUMsQ0FBQ3FFLE1BQU0sQ0FBQ3JEO2VBQzFCLENBQUMsQ0FBQztZQUNKLENBQUM7WUFFRCxNQUFNb0wsUUFBUSxHQUFHLE1BQU9oSSxLQUF1QyxJQUFJO2NBQ2xFQSxLQUFLLENBQUNpQixjQUFjLEVBQUU7Y0FDdEI2QyxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCRixRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ2QsSUFBSTtnQkFDSCxNQUFNekgsUUFBUSxHQUFHLE1BQU01QyxLQUFLLENBQUNtQyxtQkFBbUIsQ0FBQ0YsTUFBTSxDQUFDO2dCQUN4RCxJQUFJLENBQUNXLFFBQVEsQ0FBQzhMLE1BQU0sRUFBRTtrQkFDckIsTUFBTSxJQUFJbE0sS0FBSyxDQUFDLDhDQUE4QyxDQUFDOztnQkFFaEV3TCxXQUFXLENBQUNwTCxRQUFRLENBQUNDLElBQUksQ0FBQztnQkFDMUJrTCxZQUFZLENBQUMsYUFBYSxDQUFDO2VBQzNCLENBQUMsT0FBT1ksR0FBRyxFQUFFO2dCQUNick0sT0FBTyxDQUFDQyxLQUFLLENBQUNvTSxHQUFHLENBQUM7Z0JBQ2xCdEUsUUFBUSxDQUFDLDhDQUE4QyxDQUFDO2VBQ3hELFNBQVM7Z0JBQ1RFLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNcUUsTUFBTSxHQUFHQSxDQUFBLEtBQU0vSixlQUFlLENBQUMsRUFBRSxDQUFDO1lBQ3hDLE9BQ0NYLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFBckIsTUFBQSxDQUFBWCxPQUFBLENBQUFzTCxRQUFBLFFBQ0MzSyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQW9CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQSxHQUFLWSxXQUFBLENBQUF6RyxVQUFVLENBQUNDO1lBQU8sR0FDakNXLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDdUksT0FBQSxDQUFBZ0IsWUFBWTtjQUFDekosT0FBTyxFQUFFdUo7WUFBTSxFQUFJLEVBRWpDMUssTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxRSxHQUFBLENBQUEyQixhQUFhO2NBQUM3RixTQUFTLEVBQUM7WUFBK0QsR0FDdkZ4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3NJLFdBQUEsQ0FBQWtCLHlCQUF5QixPQUFHLEVBQzdCN0ssTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNuQixhQUFBLENBQUFvQixNQUFNLENBQUN3SixPQUFPLFFBQ2Q5SyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXFCLElBQUk7Y0FBQ3ZKLFNBQVMsRUFBQyxlQUFlO2NBQUMrSSxRQUFRLEVBQUVBO1lBQVEsR0FDaERsTSxLQUFLLElBQ0wyQixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQW9CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQSxHQUFLWSxXQUFBLENBQUF6RyxVQUFVLENBQUNTLElBQUk7Y0FBRTJCLFNBQVMsRUFBQztZQUFPLEdBQ2hEbkQsS0FBSyxDQUVQLEVBRUQyQixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxNQUFNO2NBQ1gxQyxLQUFLLEVBQUVnRyxNQUFNLENBQUN0RCxJQUFJLENBQUMxQyxLQUFLO2NBQ3hCaUgsUUFBUSxFQUFFLElBQUk7Y0FDZC9KLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0c7WUFBUSxFQUNYLEVBQ0ZySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxNQUFNO2NBQ1gxQyxLQUFLLEVBQUVnRyxNQUFNLENBQUN6SixJQUFJLENBQUN5RCxLQUFLO2NBQ3hCaUgsUUFBUSxFQUFFLElBQUk7Y0FDZC9KLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0c7WUFBUSxFQUNYLEVBQ0ZySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxrQkFBa0I7Y0FDdkIxQyxLQUFLLEVBQUVnRyxNQUFNLENBQUNrQixnQkFBZ0IsQ0FBQ2xILEtBQUs7Y0FDcENpSCxRQUFRLEVBQUUsSUFBSTtjQUNkL0osT0FBTyxFQUFDLFVBQVU7Y0FDbEJhLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RzRztZQUFRLEVBQ1gsRUFDRnJJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcUksS0FBQSxDQUFBc0IsS0FBSztjQUNMdEUsSUFBSSxFQUFDLFNBQVM7Y0FDZDFDLEtBQUssRUFBRWdHLE1BQU0sQ0FBQ21CLGlCQUFpQixDQUFDbkgsS0FBSztjQUNyQzlDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCK0osUUFBUSxFQUFFLElBQUk7Y0FDZGxKLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RzRztZQUFRLEVBQ1gsRUFDRnJJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcUksS0FBQSxDQUFBMEIsUUFBUTtjQUNSMUUsSUFBSSxFQUFDLGdCQUFnQjtjQUNyQjFDLEtBQUssRUFBRWdHLE1BQU0sQ0FBQ3FCLGNBQWMsQ0FBQ3JILEtBQUs7Y0FDbEN6RCxJQUFJLEVBQUMsVUFBVTtjQUNmMEssUUFBUSxFQUFFLElBQUk7Y0FDZGxKLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2RzRztZQUFRLEVBQ1gsRUFFRnJJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBc0IsTUFBTTtjQUFDUixPQUFPLEVBQUMsU0FBUztjQUFDWCxJQUFJLEVBQUMsUUFBUTtjQUFDeUQsS0FBSyxFQUFFZ0csTUFBTSxDQUFDc0IsTUFBTSxDQUFDdEgsS0FBSztjQUFBLEdBQU1xRztZQUFXLEVBQUksQ0FDakYsQ0FDUyxDQUNGLENBQ0osQ0FDWDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFIQSxJQUFBckssTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUVNLFNBQVVvUCx5QkFBeUJBLENBQUE7WUFDeEMsTUFBTTtjQUFFbkssS0FBSztjQUFFNUU7WUFBSyxDQUFFLEdBQUcsSUFBQW1FLFFBQUEsQ0FBQVcsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFbUosSUFBSSxFQUFFd0I7WUFBUyxDQUFFLEdBQUc3SyxLQUFLLENBQUM2SSxXQUFXO1lBQzdDLE1BQU07Y0FBRTFNO1lBQUksQ0FBRSxHQUFHZixLQUFLO1lBQ3RCLE1BQU07Y0FBRTRNO1lBQU8sQ0FBRSxHQUFHaEksS0FBSztZQUN6QixPQUNDVixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWEsR0FDM0J4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWMsR0FDNUJ4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3VFLE1BQUEsQ0FBQTJDLEtBQUs7Y0FBQy9HLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ2dILEdBQUcsRUFBRTNMLElBQUksQ0FBQzJPO1lBQVEsRUFBSSxFQUN4RHhMLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBbUIsR0FDckN4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsYUFBS3hFLElBQUksQ0FBQzRPLFdBQVcsQ0FBTSxFQUMzQnpMLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBaUIsR0FBRWtILE9BQU8sQ0FBQzNILFdBQVcsQ0FBUSxDQUNyRCxDQUNMLEVBQ05mLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsYUFBS2tLLFNBQVMsQ0FBQ3pLLEtBQUssQ0FBTSxFQUMxQmQsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXO2NBQUNFLE1BQU0sRUFBRSxFQUFFO2NBQUVqRyxTQUFTLEVBQUM7WUFBcUIsR0FDdEQrSixTQUFTLENBQUN4SyxXQUFXLENBQ1QsQ0FDTCxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUEyRSxHQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBeUUsYUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBaVEsVUFBQSxHQUFBalEsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQWtLLFFBQUEsR0FBQWxLLE9BQUE7VUFFQSxJQUFBa08sV0FBQSxHQUFBbE8sT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBRU0sU0FBVTJOLFdBQVdBLENBQUMsRUFBRTtZQUM3QixNQUFNLENBQUMvSyxLQUFLLEVBQUU4SCxRQUFRLENBQUMsR0FBR25HLE1BQUEsQ0FBQVgsT0FBSyxDQUFDNEMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNMEosZ0JBQWdCLEdBQUc7Y0FDeEJDLE1BQU0sRUFBRTtnQkFBRXJNLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2pDcU0sT0FBTyxFQUFFO2dCQUFFdE0sQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzFEO1lBRUQsTUFBTSxDQUFDbU0sVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRy9MLE1BQUEsQ0FBQVgsT0FBSyxDQUFDNEMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUUzRCxNQUFNO2NBQUV2QixLQUFLO2NBQUU1RSxLQUFLO2NBQUU2RSxlQUFlO2NBQUVrSjtZQUFZLENBQUUsR0FBRyxJQUFBNUosUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUMxRSxNQUFNLENBQUN3RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckcsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0rSixVQUFVLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdsTSxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDcEQsTUFBTXNKLFNBQVMsR0FBRzdLLEtBQUssQ0FBQ21HLE9BQU8sQ0FBQ2tELElBQUk7WUFFcEMsTUFBTTFCLFFBQVEsR0FBRzRELEtBQUssQ0FBQ25LLE1BQU0sS0FBS2tLLFVBQVUsSUFBSTVGLFFBQVE7WUFDeEQsTUFBTW1FLFFBQVEsR0FBRyxNQUFPaEksS0FBSyxJQUFtQjtjQUMvQyxJQUFJO2dCQUNIQSxLQUFLLENBQUNpQixjQUFjLEVBQUU7Z0JBQ3RCNkMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTNILFFBQVEsR0FBRyxNQUFNNUMsS0FBSyxDQUFDOEMsYUFBYSxDQUFDcU4sS0FBSyxDQUFDO2dCQUVqRCxJQUFJdk4sUUFBUSxDQUFDQyxJQUFJLENBQUM2TCxNQUFNLENBQUMyQixXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7a0JBQ3JEdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQztrQkFDdkI7O2dCQUdELE1BQU1uTixRQUFBLENBQUFJLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDVCxJQUFJLEVBQUU7Z0JBQ2hDeU4sWUFBWSxDQUFDLGlCQUFpQixDQUFDO2VBQy9CLENBQUMsT0FBTzFMLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQ2lPLE9BQU8sQ0FBQztnQkFFeEIsSUFBSWpPLENBQUMsQ0FBQ2lPLE9BQU8sS0FBSyxpQkFBaUIsRUFBRTtrQkFDcEN2QyxZQUFZLENBQUMsU0FBUyxDQUFDO2tCQUN2Qjs7Z0JBRUQsSUFBSTFMLENBQUMsQ0FBQ2lPLE9BQU8sS0FBSyxnQkFBZ0IsRUFBRTtrQkFDbkMsTUFBTTFQLFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJLENBQUNULElBQUksRUFBRTtrQkFDaEN1SixRQUFBLENBQUFzQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxvQkFBb0IrRSxLQUFLLEVBQUUsQ0FBQztrQkFDOUM7O2dCQUVELE1BQU1JLEtBQUssR0FBRyxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDLENBQUM5RixRQUFRLENBQUNwSSxDQUFDLEVBQUVpTyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUTtnQkFDL0ZMLGFBQWEsQ0FBQ00sS0FBSyxDQUFDO2dCQUNwQjtnQkFFQSxNQUFNRCxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDN0YsUUFBUSxDQUFDcEksQ0FBQyxFQUFFaU8sT0FBTyxDQUFDLEdBQ3ZFLEdBQUdqTyxDQUFDLEVBQUVpTyxPQUFPLFlBQVksR0FDekJqTyxDQUFDLEVBQUVpTyxPQUFPLENBQUNFLFFBQVEsRUFBRTtnQkFDeEJuRyxRQUFRLENBQUN6RixLQUFLLENBQUN3RixNQUFNLENBQUNrRyxPQUFPLENBQUMsSUFBSTFMLEtBQUssQ0FBQ3dGLE1BQU0sQ0FBQ3FHLGdCQUFnQixDQUFDO2VBQ2hFLFNBQVM7Z0JBQ1RsRyxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTW1HLGFBQWEsR0FBR2pLLEtBQUssSUFBSTJKLFFBQVEsQ0FBQzNKLEtBQUssQ0FBQ0UsYUFBYSxFQUFFdEQsS0FBSyxDQUFDO1lBQ25FO1lBQ0EsTUFBTXVMLE1BQU0sR0FBR0EsQ0FBQSxLQUFNL0osZUFBZSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxPQUNDWCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQXJCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBc0wsUUFBQSxRQUNDM0ssTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUN1SSxPQUFBLENBQUFnQixZQUFZO2NBQUN6SixPQUFPLEVBQUV1SjtZQUFNLEVBQUksRUFDakMxSyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQTJCLGFBQWE7Y0FBQzdGLFNBQVMsRUFBQztZQUErRCxHQUN2RnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDc0ksV0FBQSxDQUFBOEMsaUJBQWlCLE9BQUcsRUFDckJ6TSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQW9CLE1BQU0sQ0FBQ3lJLElBQUk7Y0FDWHpGLFFBQVEsRUFBRXFILGdCQUFnQjtjQUMxQnJNLE9BQU8sRUFBQyxRQUFRO2NBQ2hCRyxPQUFPLEVBQUMsU0FBUztjQUNqQitCLFNBQVMsRUFBQyw0Q0FBNEM7Y0FDdEQrSSxRQUFRLEVBQUVBO1lBQVEsR0FFbEJ2SyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FLLFVBQUEsQ0FBQTdKLHFCQUFxQjtjQUFDQyxNQUFNLEVBQUVrSyxVQUFVO2NBQUVqSyxRQUFRLEVBQUV5SztZQUFhLEVBQUksRUFDdEV4TSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQWdDLGFBQWE7Y0FBQ3JKLEtBQUssRUFBRUEsS0FBSztjQUFFNkMsT0FBTyxFQUFFNEs7WUFBVSxFQUFJLEVBQ3BEOUwsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFzQixNQUFNO2NBQUMyRyxRQUFRLEVBQUVBLFFBQVE7Y0FBRW5ILE9BQU8sRUFBQyxTQUFTO2NBQUNYLElBQUksRUFBQztZQUFRLEdBQ3pEZ0wsU0FBUyxDQUFDeEIsSUFBSSxDQUFDMkMsTUFBTSxDQUNkLEVBQ1QxTSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQVEsR0FDdEJ4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsYUFBS2tLLFNBQVMsQ0FBQ3hCLElBQUksQ0FBQzRDLE1BQU0sQ0FBQzdMLEtBQUssQ0FBTSxFQUN0Q2QsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFJLEdBQUUrSixTQUFTLENBQUN4QixJQUFJLENBQUM0QyxNQUFNLENBQUM1TCxXQUFXLENBQVEsQ0FDMUQsQ0FDTyxDQUNDLENBQ2Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RkEsSUFBQVgsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUF1RSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBcUssS0FBQSxHQUFBckssT0FBQTtVQUVNLFNBQVVnUixpQkFBaUJBLENBQUE7WUFDaEMsSUFBSTtjQUFFM1EsS0FBSztjQUFFNkUsZUFBZTtjQUFFdEQsU0FBUztjQUFFcUQ7WUFBSyxDQUFFLEdBQUcsSUFBQVQsUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUNyRUYsS0FBSyxHQUFHQSxLQUFLLENBQUNtRyxPQUFPLENBQUMrRixTQUFTO1lBRS9CLE9BQ0M1TSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQXJCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBc0wsUUFBQSxRQUNDM0ssTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQyxHQUNsRHhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDeUUsS0FBQSxDQUFBd0IsUUFBUSxPQUFHLEVBQ1p0SCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQXFCLEdBQ3ZDeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXO2NBQUNDLEVBQUUsRUFBQyxJQUFJO2NBQUNDLE1BQU0sRUFBRTtZQUFFLEdBQzdCL0csS0FBSyxDQUFDSSxLQUFLLENBQ0MsRUFDZGQsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXO2NBQ1hFLE1BQU0sRUFBRTtnQkFDUCxHQUFHM0wsS0FBSyxDQUFDZSxJQUFJLENBQUMrSyxhQUFhO2VBQzNCO2NBQ0RwRyxTQUFTLEVBQUM7WUFBcUIsR0FFOUJkLEtBQUssQ0FBQ0ssV0FBVyxDQUNMLENBQ0wsQ0FDTCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFmLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBQ0EsSUFBQXlFLGFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBcUssS0FBQSxHQUFBckssT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQWlLLEdBQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBbU8sT0FBQSxHQUFBbk8sT0FBQTtVQUVNLFNBQVVvUixjQUFjQSxDQUFBO1lBQzdCLE1BQU1sQixnQkFBZ0IsR0FBRztjQUN4QkMsTUFBTSxFQUFFO2dCQUFFck0sQ0FBQyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDaENxTSxPQUFPLEVBQUU7Z0JBQUV0TSxDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDMUQ7WUFDRCxJQUFJO2NBQUU3RCxLQUFLO2NBQUU2RSxlQUFlO2NBQUV0RCxTQUFTO2NBQUVxRDtZQUFLLENBQUUsR0FBRyxJQUFBVCxRQUFBLENBQUFXLGdCQUFnQixHQUFFO1lBQ3JFRixLQUFLLEdBQUdBLEtBQUssQ0FBQ21HLE9BQU8sQ0FBQytGLFNBQVM7WUFFL0IsT0FDQzVNLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFBckIsTUFBQSxDQUFBWCxPQUFBLENBQUFzTCxRQUFBLFFBQ0MzSyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3VJLE9BQUEsQ0FBQWtELE1BQU07Y0FBQzNMLE9BQU8sRUFBRUEsQ0FBQSxLQUFNUixlQUFlLENBQUNsRCxTQUFTO1lBQUMsRUFBSSxFQUNyRHVDLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDMkQsR0FBRztjQUFDWCxRQUFRLEVBQUVxSCxnQkFBZ0I7Y0FBRXJNLE9BQU8sRUFBQyxRQUFRO2NBQUNHLE9BQU8sRUFBQztZQUFTLEdBQ3pFTyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQTJCLGFBQWE7Y0FBQzdGLFNBQVMsRUFBQztZQUF1QyxHQUMvRHhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBb0MsR0FDbER4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3lFLEtBQUEsQ0FBQXdCLFFBQVEsT0FBRyxFQUNadEgsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFxQixHQUN2Q3hCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBbUgsV0FBVztjQUFDQyxFQUFFLEVBQUMsSUFBSTtjQUFDQyxNQUFNLEVBQUU7WUFBRSxHQUM3Qi9HLEtBQUssQ0FBQ0ksS0FBSyxDQUNDLEVBQ2RkLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBbUgsV0FBVztjQUNYRSxNQUFNLEVBQUU7Z0JBQ1AsR0FBRzNMLEtBQUssQ0FBQ2UsSUFBSSxDQUFDK0ssYUFBYTtlQUMzQjtjQUNEcEcsU0FBUyxFQUFDO1lBQXFCLEdBRTlCZCxLQUFLLENBQUNLLFdBQVcsQ0FDTCxDQUNMLENBQ0wsRUFDTmYsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQyxHQUNsRHhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDdUUsTUFBQSxDQUFBMkMsS0FBSztjQUFDL0csU0FBUyxFQUFDLG9CQUFvQjtjQUFDZ0gsR0FBRyxFQUFDLHlCQUF5QjtjQUFDQyxHQUFHLEVBQUUvSCxLQUFLLENBQUNnSTtZQUFPLEVBQUksQ0FDckYsQ0FDUyxDQUNKLENBQ1g7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQTFJLE1BQUEsR0FBQXZFLE9BQUE7VUFRTyxNQUFNc1Isb0JBQW9CLEdBQUF6USxPQUFBLENBQUF5USxvQkFBQSxHQUFHL00sTUFBQSxDQUFBWCxPQUFLLENBQUN1SixhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUN2RSxNQUFNb0UsdUJBQXVCLEdBQUdBLENBQUEsS0FBTWhOLE1BQUEsQ0FBQVgsT0FBSyxDQUFDd0osVUFBVSxDQUFDa0Usb0JBQW9CLENBQUM7VUFBQ3pRLE9BQUEsQ0FBQTBRLHVCQUFBLEdBQUFBLHVCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RwRixJQUFBaE4sTUFBQSxHQUFBdkUsT0FBQTtVQUNNLFNBQVVpTSxhQUFhQSxDQUFDO1lBQUVySjtVQUFLLENBQUU7WUFDdEMsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLElBQUksT0FBT0EsS0FBSyxLQUFLLFFBQVEsRUFBRTtjQUM5QixPQUNDMkIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2dCQUFLRyxTQUFTLEVBQUM7Y0FBWSxHQUMxQnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtnQkFBUUcsU0FBUyxFQUFDO2NBQTRCLEdBQUVuRCxLQUFLLENBQUN5QyxLQUFLLENBQVUsRUFDckVkLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxlQUFPaEQsS0FBSyxDQUFDMEMsV0FBVyxDQUFRLENBQzNCOztZQUdSLE9BQU9mLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBWSxHQUFFbkQsS0FBSyxDQUFRO1VBQ25EOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUEyQixNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBaVEsVUFBQSxHQUFBalEsT0FBQTtVQUNBLElBQUEyRSxXQUFBLEdBQUEzRSxPQUFBO1VBR0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBeUUsYUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUF3UixjQUFBLEdBQUF4UixPQUFBO1VBQ00sU0FBVXlSLGlCQUFpQkEsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sQ0FBQzdPLEtBQUssRUFBRThILFFBQVEsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVDLE1BQU0wSixnQkFBZ0IsR0FBRztjQUN4QkMsTUFBTSxFQUFFO2dCQUFFck0sQ0FBQyxFQUFFLE1BQU07Z0JBQUVDLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDakNxTSxPQUFPLEVBQUU7Z0JBQUV0TSxDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDMUQ7WUFFRCxNQUFNLEdBQUdvTSxhQUFhLENBQUMsR0FBRy9MLE1BQUEsQ0FBQVgsT0FBSyxDQUFDNEMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxNQUFNO2NBQUV2QixLQUFLO2NBQUU1RSxLQUFLO2NBQUUrTjtZQUFZLENBQUUsR0FBRyxJQUFBNUosUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUN6RCxNQUFNLENBQUN3RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHckcsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0rSixVQUFVLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdsTSxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDcEQsTUFBTTtjQUFFOEgsSUFBSSxFQUFFd0I7WUFBUyxDQUFFLEdBQUc3SyxLQUFLLENBQUMySSxPQUFPLENBQUNFLFdBQVc7WUFFckQsTUFBTWxCLFFBQVEsR0FBRzRELEtBQUssQ0FBQ25LLE1BQU0sS0FBS2tLLFVBQVUsSUFBSTVGLFFBQVE7WUFDeEQsTUFBTW1FLFFBQVEsR0FBRyxNQUFPaEksS0FBSyxJQUFtQjtjQUMvQyxJQUFJO2dCQUNIQSxLQUFLLENBQUNpQixjQUFjLEVBQUU7Z0JBQ3RCNkMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTTNILFFBQVEsR0FBRyxNQUFNNUMsS0FBSyxDQUFDeUMsSUFBSSxDQUFDME4sS0FBSyxDQUFDO2dCQUV4QyxJQUFJdk4sUUFBUSxDQUFDQyxJQUFJLENBQUM2TCxNQUFNLENBQUMyQixXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7a0JBQ3JEdEMsWUFBWSxDQUFDLG9CQUFvQixDQUFDO2tCQUNsQzs7Z0JBR0RBLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0IsTUFBTW5OLFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJLENBQUNULElBQUksRUFBRTtlQUNoQyxDQUFDLE9BQU8rQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7Z0JBQ2hCLE1BQU1rTyxLQUFLLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOUYsUUFBUSxDQUFDcEksQ0FBQyxFQUFFaU8sT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVE7Z0JBQy9GTCxhQUFhLENBQUNNLEtBQUssQ0FBQztnQkFDcEI7Z0JBRUFsRyxRQUFRLENBQUN6RixLQUFLLENBQUN3RixNQUFNLENBQUMvSCxDQUFDLEVBQUVpTyxPQUFPLEVBQUVFLFFBQVEsRUFBRSxDQUFDLElBQUk1TCxLQUFLLENBQUN3RixNQUFNLENBQUNxRyxnQkFBZ0IsQ0FBQztlQUMvRSxTQUFTO2dCQUNUbEcsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU1tRyxhQUFhLEdBQUdqSyxLQUFLLElBQUkySixRQUFRLENBQUMzSixLQUFLLENBQUNFLGFBQWEsRUFBRXRELEtBQUssQ0FBQztZQUNuRTtZQUNBLE9BQ0NhLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDeUksSUFBSTtjQUNYekYsUUFBUSxFQUFFcUgsZ0JBQWdCO2NBQzFCck0sT0FBTyxFQUFDLFFBQVE7Y0FDaEJHLE9BQU8sRUFBQyxTQUFTO2NBQ2pCK0IsU0FBUyxFQUFDLDRDQUE0QztjQUN0RCtJLFFBQVEsRUFBRUE7WUFBUSxHQUVsQnZLLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcUssVUFBQSxDQUFBN0oscUJBQXFCO2NBQUNDLE1BQU0sRUFBRWtLLFVBQVU7Y0FBRWpLLFFBQVEsRUFBRXlLO1lBQWEsRUFBSSxFQUN0RXhNLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDNEwsY0FBQSxDQUFBdkYsYUFBYTtjQUFDckosS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0IyQixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQXNCLE1BQU07Y0FBQzJHLFFBQVEsRUFBRUEsUUFBUTtjQUFFbkgsT0FBTyxFQUFDLFNBQVM7Y0FBQ1gsSUFBSSxFQUFDO1lBQVEsR0FDekRnTCxTQUFTLENBQUN4QixJQUFJLENBQUMyQyxNQUFNLENBQ2QsRUFDVDFNLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBUSxHQUN0QnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxhQUFLa0ssU0FBUyxDQUFDeEIsSUFBSSxDQUFDNEMsTUFBTSxDQUFDN0wsS0FBSyxDQUFNLEVBQ3RDZCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQUksR0FBRStKLFNBQVMsQ0FBQ3hCLElBQUksQ0FBQzRDLE1BQU0sQ0FBQzVMLFdBQVcsQ0FBUSxDQUMxRCxDQUNPO1VBRWhCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFQSxJQUFBZixNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXlFLGFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFrTyxXQUFBLEdBQUFsTyxPQUFBO1VBQ0EsSUFBQWlPLEtBQUEsR0FBQWpPLE9BQUE7VUFDQSxJQUFBaUssR0FBQSxHQUFBakssT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBRU0sU0FBVTBSLGFBQWFBLENBQUM7WUFBRUMsT0FBTztZQUFFMUM7VUFBTSxDQUFFO1lBQ2hELE1BQU1wRyxRQUFRLEdBQUc7Y0FDaEJzSCxNQUFNLEVBQUU7Z0JBQUVwTSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3RCcU0sT0FBTyxFQUFFO2dCQUNSck0sT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWDJOLElBQUksRUFBRSxnQkFBZ0I7a0JBQ3RCQyxlQUFlLEVBQUUsR0FBRztrQkFDcEIzTixRQUFRLEVBQUUsR0FBRyxDQUFDOzs7YUFHaEI7WUFFRCxNQUFNLENBQUNzTSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbE0sTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3BELE1BQU05QyxLQUFLLEdBQUc7Y0FDYjhNLEtBQUs7Y0FDTEMsUUFBUTtjQUNSa0I7YUFDQTtZQUVELE9BQ0NwTixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3BCLFFBQUEsQ0FBQThNLG9CQUFvQixDQUFDUSxRQUFRO2NBQUNwTyxLQUFLLEVBQUVBO1lBQUssR0FDMUNhLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDMkQsR0FBRztjQUFDWCxRQUFRLEVBQUVBLFFBQVE7Y0FBRWhGLE9BQU8sRUFBQyxRQUFRO2NBQUNHLE9BQU8sRUFBQztZQUFTLEdBQ2pFTyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3VJLE9BQUEsQ0FBQWdCLFlBQVk7Y0FBQzVILEdBQUcsRUFBQyxRQUFRO2NBQUM3QixPQUFPLEVBQUV1SjtZQUFNLEVBQUksRUFDOUMxSyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQTJCLGFBQWE7Y0FBQzdGLFNBQVMsRUFBQztZQUErRCxHQUN2RnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDc0ksV0FBQSxDQUFBNkQsaUJBQWlCLE9BQUcsRUFDckJ4TixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXdELGlCQUFpQixPQUFHLENBQ04sQ0FDSixDQUNrQjtVQUVsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0EsSUFBQWxOLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFxSyxLQUFBLEdBQUFySyxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBeUUsYUFBQSxHQUFBekUsT0FBQTtVQUVNLFNBQVUrUixpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFOU07WUFBSyxDQUFFLEdBQUcsSUFBQVQsUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUVtSixJQUFJLEVBQUV3QjtZQUFTLENBQUUsR0FBRzdLLEtBQUssQ0FBQzJJLE9BQU8sQ0FBQ0UsV0FBVztZQUNyRCxNQUFNb0MsZ0JBQWdCLEdBQUc7Y0FDeEJDLE1BQU0sRUFBRTtnQkFBRXJNLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2pDcU0sT0FBTyxFQUFFO2dCQUFFdE0sQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzFEO1lBRUQsT0FDQ0ssTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNuQixhQUFBLENBQUFvQixNQUFNLENBQUMyRCxHQUFHO2NBQUNYLFFBQVEsRUFBRXFILGdCQUFnQjtjQUFFck0sT0FBTyxFQUFDLFFBQVE7Y0FBQ0csT0FBTyxFQUFDLFNBQVM7Y0FBQytCLFNBQVMsRUFBQztZQUFhLEdBQ2pHeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFxQixHQUNuQ3hCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDeUUsS0FBQSxDQUFBd0IsUUFBUSxPQUFHLENBQ1AsRUFDTnRILE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsYUFBS2tLLFNBQVMsQ0FBQ3pLLEtBQUssQ0FBTSxFQUMxQmQsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXO2NBQUNFLE1BQU0sRUFBRSxFQUFFO2NBQUVqRyxTQUFTLEVBQUM7WUFBcUIsR0FDdEQrSixTQUFTLENBQUN4SyxXQUFXLENBQ1QsQ0FDTCxDQUNFO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFmLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBeUUsYUFBQSxHQUFBekUsT0FBQTtVQUNBLElBQUFpTyxLQUFBLEdBQUFqTyxPQUFBO1VBQ0EsSUFBQTJFLFdBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUFrTyxXQUFBLEdBQUFsTyxPQUFBO1VBQ0EsSUFBQW9LLFdBQUEsR0FBQXBLLE9BQUE7VUFDQSxJQUFBaUssR0FBQSxHQUFBakssT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBRU87VUFBVSxTQUFVZ1MsV0FBV0EsQ0FBQztZQUFFOU8sSUFBSTtZQUFFeU8sT0FBTztZQUFFMUM7VUFBTSxDQUFFO1lBQy9ELE1BQU0sQ0FBQ3RFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdyRyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDbEUsTUFBTSxFQUFFaUUsU0FBUyxDQUFDLEdBQUdoQyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBQyxFQUFTLENBQUM7WUFDckQsTUFBTSxDQUFDNUQsS0FBSyxFQUFFOEgsUUFBUSxDQUFDLEdBQUduRyxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBZ0IsSUFBSSxDQUFDO1lBQzdELE1BQU07Y0FDTG5HLEtBQUs7Y0FDTCtOLFlBQVk7Y0FDWkMsV0FBVztjQUNYcEosS0FBSyxFQUFFO2dCQUNOMkksT0FBTyxFQUFFO2tCQUFFVSxJQUFJLEVBQUVySjtnQkFBSztjQUFFO1lBQ3hCLENBQ0QsR0FBRyxJQUFBVCxRQUFBLENBQUFXLGdCQUFnQixHQUFFO1lBRXRCLE1BQU07Y0FBRW9KO1lBQU0sQ0FBRSxHQUFHdEosS0FBSztZQUN4QixNQUFNMkgsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRWpDO1lBQVEsQ0FBRTtZQUN2QyxNQUFNNkQsY0FBYyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUNyRixNQUFNQyxhQUFhLEdBQUdELGNBQWMsQ0FBQ0UsS0FBSyxDQUFDQyxLQUFLLElBQUlyTSxNQUFNLENBQUNxTSxLQUFLLENBQUMsQ0FBQztZQUVsRSxNQUFNQyxXQUFXLEdBQUc7Y0FBRWhDLFFBQVEsRUFBRWpDLFFBQVEsSUFBSSxDQUFDOEQ7WUFBYSxDQUFFO1lBQzVELE1BQU1uSSxRQUFRLEdBQUk1RCxDQUFzQyxJQUFJO2NBQzNENkQsU0FBUyxDQUFDc0ksVUFBVSxLQUFLO2dCQUN4QixHQUFHQSxVQUFVO2dCQUNiLENBQUNuTSxDQUFDLENBQUNxRSxNQUFNLENBQUNrRSxJQUFJLEdBQUd2SSxDQUFDLENBQUNxRSxNQUFNLENBQUNyRDtlQUMxQixDQUFDLENBQUM7WUFDSixDQUFDO1lBRUQsTUFBTW9MLFFBQVEsR0FBRyxNQUFPaEksS0FBdUMsSUFBSTtjQUNsRUEsS0FBSyxDQUFDaUIsY0FBYyxFQUFFO2NBQ3RCNkMsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQkYsUUFBUSxDQUFDLElBQUksQ0FBQztjQUVkLElBQUk7Z0JBQ0gsTUFBTXpILFFBQVEsR0FBUSxNQUFNNUMsS0FBSyxDQUFDZ0MsZUFBZSxDQUFDQyxNQUFNLENBQUM7Z0JBRXpELElBQUksQ0FBQ1csUUFBUSxDQUFDOEwsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlsTSxLQUFLLENBQUMsUUFBUSxDQUFDOztnQkFFMUJ3TCxXQUFXLENBQUNwTCxRQUFRLENBQUNDLElBQUksQ0FBQztnQkFDMUJrTCxZQUFZLENBQUMsU0FBUyxDQUFDO2VBQ3ZCLENBQUMsT0FBT1ksR0FBRyxFQUFFO2dCQUNiLElBQUlBLEdBQUcsQ0FBQ3BNLEtBQUssQ0FBQ0csSUFBSSxLQUFLLEVBQUUsRUFBRTtrQkFDMUIySCxRQUFRLENBQUN6RixLQUFLLENBQUN3RixNQUFNLENBQUN3SCxlQUFlLENBQUM7a0JBQ3RDOztnQkFFRHZILFFBQVEsQ0FBQyw4Q0FBOEMsQ0FBQztlQUN4RCxTQUFTO2dCQUNURSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQ3JHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDMkQsR0FBRztjQUFDekQsU0FBUyxFQUFDLFlBQVk7Y0FBQSxHQUFLcUUsV0FBQSxDQUFBekcsVUFBVSxDQUFDQztZQUFPLEdBQ3hEVyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3VJLE9BQUEsQ0FBQWdCLFlBQVk7Y0FBQzVILEdBQUcsRUFBQyxRQUFRO2NBQUM3QixPQUFPLEVBQUV1SjtZQUFNLEVBQUksRUFDOUMxSyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQTJCLGFBQWE7Y0FBQzdGLFNBQVMsRUFBQztZQUErRCxHQUN2RnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDc0ksV0FBQSxDQUFBZ0UscUJBQXFCLE9BQUcsRUFDekIzTixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXFCLElBQUk7Y0FBQ3ZKLFNBQVMsRUFBQyxnQ0FBZ0M7Y0FBQytJLFFBQVEsRUFBRUE7WUFBUSxHQUNqRWxNLEtBQUssSUFDTDJCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDMkQsR0FBRztjQUFBLEdBQUtZLFdBQUEsQ0FBQXpHLFVBQVUsQ0FBQ1MsSUFBSTtjQUFFMkIsU0FBUyxFQUFDO1lBQXFCLEdBQzlEbkQsS0FBSyxDQUVQLEVBQ0QyQixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWtCLEdBQ2hDeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxSSxLQUFBLENBQUFzQixLQUFLO2NBQ0x0RSxJQUFJLEVBQUMsTUFBTTtjQUNYMUMsS0FBSyxFQUFFZ0csTUFBTSxDQUFDNEQsSUFBSSxDQUFDNUosS0FBSztjQUN4QmlILFFBQVEsRUFBRSxJQUFJO2NBQ2QvSixPQUFPLEVBQUMsVUFBVTtjQUNsQmEsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZHNHO1lBQVEsRUFDWCxFQUNGckksTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxSSxLQUFBLENBQUFzQixLQUFLO2NBQ0x0RSxJQUFJLEVBQUMsT0FBTztjQUNaMUMsS0FBSyxFQUFFZ0csTUFBTSxDQUFDNkQsS0FBSyxDQUFDN0osS0FBSztjQUN6QmlILFFBQVEsRUFBRSxJQUFJO2NBQ2QvSixPQUFPLEVBQUMsVUFBVTtjQUNsQmEsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZHNHO1lBQVEsRUFDWCxDQUNHLEVBQ05ySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxnQkFBZ0I7Y0FDckIxQyxLQUFLLEVBQUVnRyxNQUFNLENBQUM4RCxjQUFjLENBQUM5SixLQUFLO2NBQ2xDaUgsUUFBUSxFQUFFLElBQUk7Y0FDZC9KLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0c7WUFBUSxFQUNYLEVBQ0ZySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxNQUFNO2NBQ1h1RSxRQUFRLEVBQUUsSUFBSTtjQUNkakgsS0FBSyxFQUFFZ0csTUFBTSxDQUFDdEQsSUFBSSxDQUFDMUMsS0FBSztjQUN4QjlDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0c7WUFBUSxFQUNYLEVBQ0ZySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxNQUFNO2NBQ1h1RSxRQUFRLEVBQUUsSUFBSTtjQUNkakgsS0FBSyxFQUFFZ0csTUFBTSxDQUFDekosSUFBSSxDQUFDeUQsS0FBSztjQUN4QjlDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0c7WUFBUSxFQUNYLEVBQ0ZySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FJLEtBQUEsQ0FBQXNCLEtBQUs7Y0FDTHRFLElBQUksRUFBQyxTQUFTO2NBQ2R1RSxRQUFRLEVBQUUsSUFBSTtjQUNkakgsS0FBSyxFQUFFZ0csTUFBTSxDQUFDK0QsT0FBTyxDQUFDL0osS0FBSztjQUMzQjlDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkc0c7WUFBUSxFQUNYLEVBQ0ZySSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ2pCLFdBQUEsQ0FBQXNCLE1BQU07Y0FBQ1IsT0FBTyxFQUFDLFNBQVM7Y0FBQ1gsSUFBSSxFQUFDLFFBQVE7Y0FBQ3lELEtBQUssRUFBRWdHLE1BQU0sQ0FBQ3NCLE1BQU0sQ0FBQ3RILEtBQUs7Y0FBQSxHQUFNcUc7WUFBVyxFQUFJLENBQ2pGLENBQ1EsQ0FDSjtVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlIQSxJQUFBckssTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxRQUFBLEdBQUF4RSxPQUFBO1VBQ0EsSUFBQXFLLEtBQUEsR0FBQXJLLE9BQUE7VUFDQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUVNLFNBQVVrUyxxQkFBcUJBLENBQUE7WUFDcEMsTUFBTTtjQUFFak47WUFBSyxDQUFFLEdBQUcsSUFBQVQsUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUVtSixJQUFJLEVBQUV3QjtZQUFTLENBQUUsR0FBRzdLLEtBQUssQ0FBQzJJLE9BQU87WUFDekMsT0FDQ3JKLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYSxHQUMzQnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDeUUsS0FBQSxDQUFBd0IsUUFBUSxPQUFHLEVBQ1p0SCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQXFCLEdBQ3ZDeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLGFBQUtrSyxTQUFTLENBQUN6SyxLQUFLLENBQU0sRUFDMUJkLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBbUgsV0FBVztjQUFDRSxNQUFNLEVBQUUsRUFBRTtjQUFFakcsU0FBUyxFQUFDO1lBQXFCLEdBQ3REK0osU0FBUyxDQUFDeEssV0FBVyxDQUNULENBQ0wsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBYixhQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFFQSxJQUFBdVMsaUJBQUEsR0FBQXZTLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF3UyxPQUFBLEdBQUF4UyxPQUFBO1VBQ0EsSUFBQWlPLEtBQUEsR0FBQWpPLE9BQUE7VUFDQSxJQUFBcU4sWUFBQSxHQUFBck4sT0FBQTtVQUVNLFNBQVU2TixXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRTVJLEtBQUs7Y0FBRTVFLEtBQUs7Y0FBRTZFO1lBQWUsQ0FBRSxHQUFHLElBQUFWLFFBQUEsQ0FBQVcsZ0JBQWdCLEdBQUU7WUFDNUQsTUFBTXNOLFlBQVksR0FBR3BTLEtBQUssQ0FBQ2UsSUFBSSxDQUFDUyxRQUFRLEVBQUVDLFFBQVEsRUFBRVMsU0FBUztZQUM3RCxNQUFNbVEsa0JBQWtCLEdBQUdyUyxLQUFLLENBQUNlLElBQUksQ0FBQ3dNLE9BQU8sRUFBRS9MLFFBQVEsRUFBRXNRLElBQUk7WUFDN0QsTUFBTVEsS0FBSyxHQUFHLEVBQWtCO1lBQ2hDLE1BQU0sQ0FBQ3JRLE1BQU0sRUFBRWlFLFNBQVMsQ0FBQyxHQUFHaEMsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQXdCbU0sS0FBSyxDQUFDO1lBQ3hFLE1BQU1DLFVBQVUsR0FBSTFMLFNBQWdDLElBQUtYLFNBQVMsQ0FBQztjQUFFLEdBQUdqRSxNQUFNO2NBQUUsR0FBRzRFO1lBQVMsQ0FBRSxDQUFDO1lBRS9GLElBQUl1TCxZQUFZLEVBQUU7Y0FDakJFLEtBQUssQ0FBQy9RLFNBQVMsR0FBRzhRLGtCQUFrQixHQUFHLFNBQVMsR0FBRyxhQUFhOztZQUdqRSxNQUFNaEYsUUFBUSxHQUFHO2NBQ2hCWSxJQUFJLEVBQUVMLEtBQUEsQ0FBQStELFdBQVc7Y0FDakJsRSxXQUFXLEVBQUVULFlBQUEsQ0FBQXdGLGtCQUFrQjtjQUMvQkMsTUFBTSxFQUFFTixPQUFBLENBQUFkLGFBQWEsQ0FBQzthQUN0QjtZQUVELElBQUlwUCxNQUFNLENBQUNWLFNBQVMsRUFBRSxPQUFPMkMsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUMyTSxpQkFBQSxDQUFBakksZ0JBQWdCLE9BQUc7WUFFakQsTUFBTXlJLGNBQWMsR0FBR3pRLE1BQU0sQ0FBQ3lRLGNBQWM7WUFDNUMsTUFBTUMsVUFBVSxHQUFHRCxjQUFjLEtBQUsvUSxTQUFTLEdBQUcsYUFBYSxHQUFHK1EsY0FBYyxHQUFHLFFBQVEsR0FBRyxNQUFNO1lBQ3BHLE1BQU0vRSxPQUFPLEdBQUdOLFFBQVEsQ0FBQ3NGLFVBQVUsQ0FBQztZQUNwQyxNQUFNL0QsTUFBTSxHQUFHQSxDQUFBLEtBQUs7Y0FDbkIsSUFBSTNNLE1BQU0sQ0FBQ3lRLGNBQWMsS0FBSy9RLFNBQVMsRUFBRTtnQkFDeENrRCxlQUFlLENBQUMsRUFBRSxDQUFDO2dCQUNuQjs7Y0FFRHFCLFNBQVMsQ0FBQztnQkFBRSxHQUFHakUsTUFBTTtnQkFBRXlRLGNBQWMsRUFBRS9RO2NBQVMsQ0FBRSxDQUFDO1lBQ3BELENBQUM7WUFDRCxPQUNDdUMsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUFyQixNQUFBLENBQUFYLE9BQUEsQ0FBQXNMLFFBQUEsUUFDQzNLLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBd08sZUFBZTtjQUFDQyxJQUFJLEVBQUM7WUFBTSxHQUMzQjNPLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDb0ksT0FBTztjQUFDaUIsTUFBTSxFQUFFQSxNQUFNO2NBQUUxSCxHQUFHLEVBQUV5TCxVQUFVO2NBQUU5UCxJQUFJLEVBQUVaLE1BQU07Y0FBRXFQLE9BQU8sRUFBRWlCO1lBQVUsRUFBSSxDQUM5RCxDQUNoQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBck8sTUFBQSxHQUFBdkUsT0FBQTtVQUVBLElBQUFpSyxHQUFBLEdBQUFqSyxPQUFBO1VBRUEsSUFBQXlFLGFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUNBLElBQUFtSyxNQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBbVQsTUFBQSxHQUFBblQsT0FBQTtVQUNBLElBQUFvSyxXQUFBLEdBQUFwSyxPQUFBO1VBRUEsSUFBQW1PLE9BQUEsR0FBQW5PLE9BQUE7VUFaQTs7VUFFQTs7VUFZTSxTQUFVNlMsa0JBQWtCQSxDQUFDO1lBQUUzUCxJQUFJO1lBQUV5TyxPQUFPO1lBQUUxQztVQUFNLENBQUU7WUFDM0QsTUFBTSxDQUFDbUUsYUFBYSxFQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHOU8sTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVELE1BQU07Y0FDTHZCLEtBQUs7Y0FDTDVFLEtBQUssRUFBRTtnQkFBRWU7Y0FBSTtZQUFFLENBQ2YsR0FBRyxJQUFBb0QsUUFBQSxDQUFBVyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNbUIsUUFBUSxHQUFHUSxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRXBEO2NBQUssQ0FBRSxHQUFHb0QsS0FBSyxDQUFDRSxhQUFhO2NBQ3JDcU0sZ0JBQWdCLENBQUMzUCxLQUFLLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU07Y0FBRTRQLEtBQUs7Y0FBRWpPLEtBQUs7Y0FBRWtPLE9BQU87Y0FBRWpPO1lBQVcsQ0FBRSxHQUFRTCxLQUFLLENBQUMySSxPQUFPLENBQUNFLFdBQVcsQ0FBQzBGLEtBQUs7WUFDbkYsTUFBTTFFLFFBQVEsR0FBR2hJLEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDaUIsY0FBYyxFQUFFO2NBQ3RCNEosT0FBTyxDQUFDO2dCQUFFb0IsY0FBYyxFQUFFSyxhQUFhLEtBQUs7Y0FBSyxDQUFFLENBQUM7WUFDckQsQ0FBQztZQUVELE1BQU14RyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFd0csYUFBYSxLQUFLcFI7WUFBUyxDQUFFO1lBRTFELE9BQ0N1QyxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQW9CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQ3pELFNBQVMsRUFBQyxZQUFZO2NBQUEsR0FBS3FFLFdBQUEsQ0FBQXpHLFVBQVUsQ0FBQ0M7WUFBTyxHQUN4RFcsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUN1SSxPQUFBLENBQUFnQixZQUFZO2NBQUM1SCxHQUFHLEVBQUMsUUFBUTtjQUFDN0IsT0FBTyxFQUFFdUo7WUFBTSxFQUFJLEVBQzlDMUssTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxRSxHQUFBLENBQUEyQixhQUFhO2NBQUM3RixTQUFTLEVBQUM7WUFBNEIsR0FDcER4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXFCLEdBQ25DeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFnQixHQUM5QnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDdUUsTUFBQSxDQUFBMkMsS0FBSztjQUFDL0csU0FBUyxFQUFDLHdCQUF3QjtjQUFDZ0gsR0FBRyxFQUFFM0wsSUFBSSxDQUFDMk87WUFBUSxFQUFJLEVBRWhFeEwsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFtQyxHQUNwRHhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBbUgsV0FBVztjQUFDRSxNQUFNLEVBQUU7Z0JBQUV5SCxRQUFRLEVBQUVyUyxJQUFJLENBQUM0TztjQUFXO1lBQUUsR0FBR3NELEtBQUssQ0FBZSxFQUMxRS9PLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxhQUFLUCxLQUFLLENBQU0sQ0FDUixFQUVUZCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTBCLEdBQ3hDeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUN1TixNQUFBLENBQUFwSyxXQUFXO2NBQ1hVLE9BQU8sRUFBRTJKLGFBQWEsS0FBSyxLQUFLO2NBQ2hDOU0sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaUMsS0FBSyxFQUFFZ0wsT0FBTyxDQUFDRyxHQUFHLENBQUNuTCxLQUFLO2NBQ3hCN0UsS0FBSyxFQUFDLEtBQUs7Y0FDWHVILElBQUksRUFBQztZQUFnQixFQUNwQixFQUNGMUcsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUN1TixNQUFBLENBQUFwSyxXQUFXO2NBQ1hVLE9BQU8sRUFBRTJKLGFBQWEsS0FBSyxJQUFJO2NBQy9COU0sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaUMsS0FBSyxFQUFFZ0wsT0FBTyxDQUFDSSxFQUFFLENBQUNwTCxLQUFLO2NBQ3ZCN0UsS0FBSyxFQUFDLElBQUk7Y0FDVnVILElBQUksRUFBQztZQUFnQixFQUNwQixDQUNHLENBQ0QsRUFDTjFHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBSyxHQUNsQnFOLGFBQWEsSUFDYjdPLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDMkQsR0FBRztjQUFBLEdBQUtZLFdBQUEsQ0FBQXpHLFVBQVUsQ0FBQ1MsSUFBSTtjQUFFMkIsU0FBUyxFQUFDO1lBQWtCLEdBQzVEeEIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNqQixXQUFBLENBQUFtSCxXQUFXLFFBQUV5SCxPQUFPLENBQUNILGFBQWEsQ0FBQyxDQUFDOU4sV0FBVyxDQUFlLENBRWhFLEVBRURmLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDakIsV0FBQSxDQUFBc0IsTUFBTTtjQUFDUixPQUFPLEVBQUMsU0FBUztjQUFDbU8sS0FBSztjQUFBLEdBQUtoSCxRQUFRO2NBQUVsSCxPQUFPLEVBQUVvSjtZQUFRLEdBQzdEN0osS0FBSyxDQUFDaUIsT0FBTyxDQUFDMk4sUUFBUSxDQUNmLENBQ0osQ0FDRCxDQUNTLENBQ0o7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RUEsSUFBQTVKLEdBQUEsR0FBQWpLLE9BQUE7VUFDQSxJQUFBOFQsTUFBQSxHQUFBOVQsT0FBQTtVQUNBLElBQUF5RSxhQUFBLEdBQUF6RSxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFFQSxJQUFBdVMsaUJBQUEsR0FBQXZTLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUErVCxLQUFBLEdBQUEvVCxPQUFBO1VBQ0EsSUFBQWdVLGNBQUEsR0FBQWhVLE9BQUE7VUFUQTs7VUFXTSxTQUFVUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUM3QixNQUFNO2NBQUU0RTtZQUFLLENBQUUsR0FBRzVFLEtBQUs7WUFDdkIsTUFBTSxDQUFDK0IsS0FBSyxFQUFFNlIsUUFBUSxDQUFDLEdBQUcxUCxNQUFBLENBQUFYLE9BQUssQ0FBQzRDLFFBQVEsQ0FBQ25HLEtBQUssQ0FBQytCLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNxTCxZQUFZLEVBQUV2SSxlQUFlLENBQUMsR0FBR1gsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLEVBQVU7WUFDaEUsTUFBTTBOLFFBQVEsR0FBRyxJQUFBelAsYUFBQSxDQUFBMFAsWUFBWSxHQUFFO1lBQy9CLE1BQU0sQ0FBQ2xELE1BQU0sRUFBRW1ELFNBQVMsQ0FBQyxHQUFHN1AsTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQXNCLElBQUksQ0FBQztZQUNyRSxNQUFNLENBQUM1RSxTQUFTLEVBQUV3TSxZQUFZLENBQUMsR0FBRzdKLE1BQUEsQ0FBQVgsT0FBSyxDQUFDNEMsUUFBUSxDQUFnQm5HLEtBQUssQ0FBQ3VCLFNBQVMsQ0FBQztZQUNoRixNQUFNLENBQUNDLFFBQVEsRUFBRXdNLFdBQVcsQ0FBQyxHQUFHOUosTUFBQSxDQUFBWCxPQUFLLENBQUM0QyxRQUFRLENBQUNuRyxLQUFLLENBQUNlLElBQUksQ0FBQ1MsUUFBUSxDQUFDO1lBRW5FLE1BQU1tRCxZQUFZLEdBQUlpTSxNQUFrQixJQUFJO2NBQzNDbUQsU0FBUyxDQUFDbkQsTUFBTSxDQUFDO2NBQ2pCaUQsUUFBUSxDQUFDdkgsS0FBSyxDQUFDO2dCQUFFckksQ0FBQyxFQUFFLE9BQU87Z0JBQUVQLE9BQU8sRUFBRTtjQUFDLENBQUUsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsSUFBQStQLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUNoVSxLQUFLLENBQUMsRUFBRSxNQUFNNFQsUUFBUSxDQUFDNVQsS0FBSyxDQUFDK0IsS0FBSyxDQUFDLENBQUM7WUFFL0MsTUFBTWtTLG1CQUFtQixHQUFHQSxDQUFBLEtBQUs7Y0FDaEMsSUFBSXJELE1BQU0sRUFBRTtnQkFDWEEsTUFBTSxFQUFFO2dCQUNSbUQsU0FBUyxDQUFDLElBQUksQ0FBQzs7WUFFakIsQ0FBQztZQUVELElBQUksQ0FBQ2hTLEtBQUssRUFBRSxPQUFPbUMsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxRSxHQUFBLENBQUFzSyxVQUFVO2NBQUM1SixRQUFRLEVBQUU7WUFBSSxFQUFJO1lBQ2pELE1BQU1qSCxLQUFLLEdBQUc7Y0FDYnVCLEtBQUs7Y0FDTEMsZUFBZTtjQUNmdEQsU0FBUztjQUNUd00sWUFBWTtjQUNaa0csbUJBQW1CO2NBQ25CN0csWUFBWTtjQUNacE4sS0FBSztjQUNMd0IsUUFBUTtjQUNSd00sV0FBVztjQUNYckosWUFBWTtjQUNaa1A7YUFDQTtZQUVELE1BQU14RyxRQUFRLEdBQUc7Y0FDaEI4RyxJQUFJLEVBQUVULEtBQUEsQ0FBQXZHLGFBQWE7Y0FDbkIyRSxJQUFJLEVBQUU2QixjQUFBLENBQUFTLGFBQWE7Y0FDbkI3UyxTQUFTLEVBQUUyUSxpQkFBQSxDQUFBakk7YUFDWDtZQUNELElBQUkwRCxPQUFPLEdBQUdwTSxTQUFTLEdBQUc4TCxRQUFRLENBQUM5TCxTQUFTLEdBQUc2TCxZQUFZLEdBQUdDLFFBQVEsQ0FBQzhHLElBQUksR0FBRzlHLFFBQVEsQ0FBQ3lFLElBQUk7WUFFM0YsTUFBTTVLLEdBQUcsR0FBRzNGLFNBQVMsR0FBRyxXQUFXLEdBQUc2TCxZQUFZLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFFcEUsT0FDQ2xKLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcEIsUUFBQSxDQUFBMEksYUFBYSxDQUFDNEUsUUFBUTtjQUFDcE8sS0FBSyxFQUFFQTtZQUFLLEdBQ25DYSxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQXdPLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FBRTNPLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDb0ksT0FBTztjQUFDekcsR0FBRyxFQUFFQTtZQUFHLEVBQUksQ0FBbUIsQ0FDOUM7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOURBLElBQUE3QyxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQWlCLFFBQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0ssUUFBQSxHQUFBbEssT0FBQTtVQUNBLElBQUEwVSxPQUFBLEdBQUExVSxPQUFBO1VBQ0EsSUFBQXVFLE1BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsUUFBQSxHQUFBeEUsT0FBQTtVQVFPO1VBQVUsU0FBVW1QLFlBQVlBLENBQUM7WUFBRXpKO1VBQU8sQ0FBRTtZQUNsRCxNQUFNZ0csR0FBRyxHQUFHLGVBQWU7WUFFM0IsTUFBTTtjQUNMekcsS0FBSztjQUNMNUUsS0FBSyxFQUFFO2dCQUFFa0s7Y0FBVztZQUFFLENBQ3RCLEdBQUcsSUFBQS9GLFFBQUEsQ0FBQVcsZ0JBQWdCLEdBQUU7WUFDdEI7WUFDQSxNQUFNd1AsTUFBTSxHQUFHLE1BQU03TixLQUFLLElBQUc7Y0FDNUJBLEtBQUssQ0FBQzhOLGVBQWUsRUFBRTtjQUN2QixNQUFNM1QsUUFBQSxDQUFBSSxjQUFjLENBQUNzVCxNQUFNLEVBQUU7Y0FDN0J6SyxRQUFBLENBQUFzQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQztZQUVELE1BQU1vSixLQUFLLEdBQXNCLEVBQUU7WUFDbkMsSUFBSW5QLE9BQU8sRUFBRW1QLEtBQUssQ0FBQ25QLE9BQU8sR0FBR0EsT0FBTztZQUNwQyxPQUNDbkIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBO2NBQVFHLFNBQVMsRUFBRTJGO1lBQUcsR0FDckJuSCxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQWMsR0FDaEN4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDLE1BQU07Y0FBQ0wsT0FBTyxFQUFFQTtZQUFPLEdBQ3JDbkIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUM4TyxPQUFBLENBQUFJLElBQUk7Y0FBQ3ZQLElBQUksRUFBQztZQUFXLEVBQUcsRSxLQUFFZ0YsV0FBVyxDQUFDckUsT0FBTyxDQUFDNk8sSUFBSSxDQUM5QyxDQU9HLEVBQ1Z4USxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWUsR0FDN0J4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ2xCLE1BQUEsQ0FBQXNRLGFBQWE7Y0FBQ3pQLElBQUksRUFBQyxNQUFNO2NBQUNRLFNBQVMsRUFBQyxRQUFRO2NBQUNMLE9BQU8sRUFBRWlQO1lBQU0sRUFBSSxDQUM1RCxDQUNFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFwUSxNQUFBLEdBQUF2RSxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBaVYsS0FBQSxHQUFBalYsT0FBQTtVQUNBLElBQUFpSyxHQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQXlFLGFBQUEsR0FBQXpFLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFrVixPQUFBLEdBQUFsVixPQUFBO1VBUEE7O1VBU00sU0FBVXlVLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFeFAsS0FBSztjQUFFNUU7WUFBSyxDQUFFLEdBQUcsSUFBQW1FLFFBQUEsQ0FBQVcsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUUsS0FBSyxHQUFHSixLQUFLLENBQUNJLEtBQUs7WUFFekIsTUFBTThQLEtBQUssR0FBRyxDQUFDNVEsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxUCxLQUFBLENBQUFyUSxJQUFJO2NBQUNFLElBQUksRUFBQyxTQUFTO2NBQUNDLEtBQUssRUFBRSxDQUFDO2NBQUV3QyxHQUFHLEVBQUM7WUFBUyxFQUFHLENBQUM7WUFFL0QsSUFBSSxDQUFDbEgsS0FBSyxDQUFDaUIsT0FBTyxFQUFFO2NBQ25CNlQsS0FBSyxDQUFDQyxJQUFJLENBQUM3USxNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ3FQLEtBQUEsQ0FBQXJRLElBQUk7Z0JBQUNFLElBQUksRUFBQyxTQUFTO2dCQUFDeUMsR0FBRyxFQUFDLFNBQVM7Z0JBQUN4QyxLQUFLLEVBQUU7Y0FBQyxFQUFJLENBQUM7Y0FDM0RvUSxLQUFLLENBQUNDLElBQUksQ0FBQzdRLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDcVAsS0FBQSxDQUFBclEsSUFBSTtnQkFBQ0UsSUFBSSxFQUFDLGFBQWE7Z0JBQUN5QyxHQUFHLEVBQUMsYUFBYTtnQkFBQ3hDLEtBQUssRUFBRTtjQUFDLEVBQUksQ0FBQzs7WUFHcEUsT0FDQ1IsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUFyQixNQUFBLENBQUFYLE9BQUEsQ0FBQXNMLFFBQUEsUUFDQzNLLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBd0MsR0FDdER4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsYUFBTyxFQUNQckIsTUFBQSxDQUFBWCxPQUFBLENBQUFnQyxhQUFBLENBQUNxRSxHQUFBLENBQUEyQixhQUFhO2NBQUM3RixTQUFTLEVBQUM7WUFBcUIsR0FDN0N4QixNQUFBLENBQUFYLE9BQUEsQ0FBQWdDLGFBQUEsQ0FBQ25CLGFBQUEsQ0FBQW9CLE1BQU0sQ0FBQ3dQLE1BQU07Y0FBQ3RQLFNBQVMsRUFBQztZQUF3QixHQUNoRHhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDdUUsTUFBQSxDQUFBMkMsS0FBSztjQUFDQyxHQUFHLEVBQUM7WUFBcUIsRUFBRyxFQUNuQ3hJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBYSxHQUM1QnhCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxhQUFLUCxLQUFLLENBQU0sRUFDaEJkLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxlQUFPWCxLQUFLLENBQUNpSCxRQUFRLENBQVEsQ0FDdkIsQ0FDUSxFQUNoQjNILE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDc1AsT0FBQSxDQUFBSSxZQUFZO2NBQUNDLGFBQWEsRUFBRSxNQUFNO2NBQUVDLFlBQVksRUFBRTtZQUFFLEdBQ25ETCxLQUFLLENBQ1EsRUFFZjVRLE1BQUEsQ0FBQVgsT0FBQSxDQUFBZ0MsYUFBQSxDQUFDbkIsYUFBQSxDQUFBb0IsTUFBTSxDQUFDMkQsR0FBRztjQUNWekQsU0FBUyxFQUFDLGdCQUFnQjtjQUMxQmxDLE9BQU8sRUFBRTtnQkFDUkUsT0FBTyxFQUFFO2VBQ1Q7Y0FDREksSUFBSSxFQUFFO2dCQUNMc1IsS0FBSyxFQUFFLE9BQU87Z0JBQ2RDLE1BQU0sRUFBRSxPQUFPO2dCQUNmM1IsT0FBTyxFQUFFLENBQUM7Z0JBQ1Y0UixZQUFZLEVBQUUsQ0FBQztnQkFDZkMsTUFBTSxFQUFFLElBQUk7Z0JBQ1ozUixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7O1lBRVgsRUFDQSxDQUVhLENBQ1gsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEQSxJQUFBNEUsS0FBQSxHQUFBOUksT0FBQTtVQUNBLElBQUFtSyxNQUFBLEdBQUFuSyxPQUFBO1VBQ0EsSUFBQXdFLFFBQUEsR0FBQXhFLE9BQUE7VUFDQSxJQUFBMkUsV0FBQSxHQUFBM0UsT0FBQTtVQUVPO1VBQVUsU0FBVTZMLFFBQVFBLENBQ2xDO1lBQUVnSyxXQUFXO1lBQUU5UDtVQUFTLElBQW9EO1lBQUU4UCxXQUFXLEVBQUU7VUFBSSxDQUFFO1lBRWpHLE1BQU07Y0FBRXhWLEtBQUs7Y0FBRTRFO1lBQUssQ0FBRSxHQUFHLElBQUFULFFBQUEsQ0FBQVcsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFL0Q7WUFBSSxDQUFFLEdBQUdmLEtBQUs7WUFDdEIsTUFBTTtjQUFFNE07WUFBTyxDQUFFLEdBQUdoSSxLQUFLO1lBRXpCLE1BQU15RyxHQUFHLEdBQUcsZUFBZTNGLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDN0QsT0FDQytDLEtBQUEsQ0FBQWxELGFBQUE7Y0FBS0csU0FBUyxFQUFFMkY7WUFBRyxHQUNsQjVDLEtBQUEsQ0FBQWxELGFBQUEsQ0FBQ3VFLE1BQUEsQ0FBQTJDLEtBQUs7Y0FBQy9HLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ2dILEdBQUcsRUFBRTNMLElBQUksQ0FBQzJPO1lBQVEsRUFBSSxFQUN4RGpILEtBQUEsQ0FBQWxELGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQW1CLEdBQ3JDK0MsS0FBQSxDQUFBbEQsYUFBQSxhQUNDa0QsS0FBQSxDQUFBbEQsYUFBQSxDQUFDakIsV0FBQSxDQUFBbUgsV0FBVztjQUNYRSxNQUFNLEVBQUU7Z0JBQ1B5SCxRQUFRLEVBQUVyUyxJQUFJLENBQUM0Tzs7WUFDZixHQUVBL0MsT0FBTyxDQUFDcUcsS0FBSyxDQUNELENBQ1YsRUFFSnVDLFdBQVcsSUFBSS9NLEtBQUEsQ0FBQWxELGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQWlCLEdBQUVrSCxPQUFPLENBQUMzSCxXQUFXLENBQVEsQ0FDckUsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119