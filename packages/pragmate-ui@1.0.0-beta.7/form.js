System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CheckboxGroup, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    CheckboxGroup: void 0,
    Checkbox: void 0,
    Form: void 0,
    Error: void 0,
    Label: void 0,
    Input: void 0,
    Radio: void 0,
    Select: void 0,
    OptionSelect: void 0,
    Switch: void 0,
    Textarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_2 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsKernel0112Styles) {
      dependency_4 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/base', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/form');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./checkbox/group
      ********************************/
      ims.set('./checkbox/group', {
        hash: 4232336252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckboxGroup = CheckboxGroup;
          var _react = require("react");
          var _index = require("./index");
          /*bundle*/
          function CheckboxGroup(props) {
            const {
              options
            } = props;
            const output = options.map((option, index) => {
              const key = `${option.name}-${index}`;
              const {
                label,
                ...rest
              } = option;
              return _react.default.createElement(_index.Checkbox, {
                key: key,
                label: label,
                ...rest
              });
            });
            const directions = {
              column: 'column',
              row: 'row'
            };
            const direction = props.direction ?? `row`;
            const cls = `pui-checkbox-group pui-checkbox-group--${directions[direction]}`; // `pui-checkbox-group $;
            return _react.default.createElement("div", {
              className: cls
            }, props.label && _react.default.createElement("span", {
              className: 'pui-label'
            }, props.label), _react.default.createElement("div", {
              className: 'pui-group__items-container'
            }, output));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 599928777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var _react = require("react");
          /*bundle*/
          const Checkbox = exports.Checkbox = (0, _react.forwardRef)(function (props, ref) {
            const {
              checked,
              disabled,
              className,
              onChange,
              label
            } = props;
            const handleChange = event => {
              event.stopPropagation();
              onChange && onChange(event);
            };
            let cls = `pui-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const name = props.name ?? 'pui-checkbox--name';
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleChange
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              className: 'pui-checkbox--input',
              id: id,
              name: name,
              checked: checked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: 'pui-checkbox--label',
              htmlFor: id
            }, _react.default.createElement("span", null, _react.default.createElement("svg", {
              viewBox: '0 0 12 9'
            }, _react.default.createElement("polyline", {
              points: '1 5 4 8 11 1'
            }))), _react.default.createElement("span", null, label)));
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./form
      **********************/

      ims.set('./form', {
        hash: 99719699,
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
              ...restProps
            } = props;
            const handleSubmit = event => {
              event.preventDefault();
              event.stopPropagation();
              props.onSubmit(event);
            };
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              ...restProps
            }, props.children);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/date
      ***************************************/

      ims.set('./input/components/date', {
        hash: 4016619854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Date = Date;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Date() {
            const {
              input,
              props,
              icon,
              isDate
            } = (0, _context.useInputContext)();
            if (!isDate) return null;
            const iconValue = icon ? icon : 'calendar';
            const showPicker = () => {
              if (props.disabled) return;
              input.current.showPicker();
            };
            return _react.default.createElement(_icons.Icon, {
              key: 'icon',
              icon: iconValue,
              className: 'pui-input__icon',
              onClick: showPicker
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/error
      ****************************************/

      ims.set('./input/components/error', {
        hash: 534355326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          /*bundle*/
          function Error({
            show,
            message,
            className,
            children
          }) {
            if (!show) return null;
            const cls = `pui-input-error-label${className ? ` ${className}` : ''}`;
            return _react.default.createElement("span", {
              className: cls
            }, message, " ", children);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./input/components/icon-container
      *************************************************/

      ims.set('./input/components/icon-container', {
        hash: 168038464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconContainer = IconContainer;
          var _react = require("react");
          var _password = require("./password");
          var _context = require("../context");
          var _date = require("./date");
          var _icon = require("./icon");
          function IconContainer() {
            const {
              props
            } = (0, _context.useInputContext)();
            const types = {
              password: _password.Password,
              date: _date.Date,
              default: null,
              month: _date.Date,
              week: _date.Date,
              'datetime-local': _date.Date
            };
            const output = [];
            if (!!types[props.type]) {
              const Control = types[props.type];
              output.push(_react.default.createElement(Control, {
                key: "control"
              }));
            }
            ;
            if (!!props.icon) {
              output.push(_react.default.createElement(_icon.Icon, {
                key: "icon"
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
          ;
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/icon
      ***************************************/

      ims.set('./input/components/icon', {
        hash: 2806631327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icon = Icon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Icon() {
            const {
              props: {
                icon
              },
              isDate
            } = (0, _context.useInputContext)();
            if (!icon || isDate) return null;
            return _react.default.createElement(_icons.Icon, {
              icon: icon,
              className: "input-icon"
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/label
      ****************************************/

      ims.set('./input/components/label', {
        hash: 1837895848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = Label;
          var _react = require("react");
          var _context = require("../context");
          /*bundle */
          function Label({
            required,
            position,
            children
          } = {}) {
            const {
              name,
              id
            } = (0, _context.useInputContext)();
            const variants = {
              floating: 'floating-label',
              right: 'pui-input__label--right',
              bottom: 'pui-input__label--bottom',
              'bottom-right': 'pui-input__label--bottom-right'
            };
            let cls = `pui-input__label ${variants[position] ? ` ${variants[position]}` : ''}`;
            if (required) cls += ' is-required';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
              htmlFor: id ?? name,
              className: cls
            }, _react.default.createElement("span", {
              className: 'label-content'
            }, " ", children)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./input/components/password
      *******************************************/

      ims.set('./input/components/password', {
        hash: 1440208605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Password = Password;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Password() {
            const {
              state,
              setState
            } = (0, _context.useInputContext)();
            const changeType = event => {
              event.stopPropagation();
              setState({
                ...state,
                type: state.type === "password" ? "text" : "password"
              });
            };
            const attrs = {
              className: "icon-eye",
              onClick: changeType,
              icon: state.type === "password" ? "eye" : "eye-slash"
            };
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/context
      *******************************/

      ims.set('./input/context', {
        hash: 902539138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var React = require("react");
          const InputContext = exports.InputContext = React.createContext({});
          const useInputContext = () => React.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/control
      *******************************/

      ims.set('./input/control', {
        hash: 765945223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ControlSelector = ControlSelector;
          var _react = require("react");
          var _context = require("./context");
          var _internalProps = require("./internal-props");
          var _iconContainer = require("./components/icon-container");
          function ControlSelector() {
            const {
              setState,
              state,
              value,
              setValue,
              props: {
                name,
                id,
                placeholder
              },
              props,
              input
            } = (0, _context.useInputContext)();
            let properties = {
              ...props
            };
            _internalProps.internalProps.forEach(prop => delete properties[prop]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              const currentValue = event.currentTarget.value;
              setValue(currentValue);
              setState({
                ...state,
                _hasError: false,
                value: currentValue
              });
            };
            const attrs = {
              id: id ?? name,
              placeholder: placeholder ?? '',
              value: value ?? ''
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
              ref: input,
              ...properties,
              name: name,
              onChange: handleChange,
              type: state.type,
              ...attrs
            }), _react.default.createElement(_iconContainer.IconContainer, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/index
      *****************************/

      ims.set('./input/index', {
        hash: 1920991899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _context = require("./context");
          var _label = require("./components/label");
          var _control = require("./control");
          var _error = require("./components/error");
          /*bundle*/ /**
                      *
                      * @param props
                      *
                      * 1. pattern property + existing error.
                      * 2. Controlled Input where the implementer defines the error.
                      * 3. Automated Input with multiple validations and error management.
                      *
                      * @returns
                      */
          function Input(props) {
            const {
              hasError,
              errorMessage,
              variant,
              className,
              label,
              children,
              icon,
              type
            } = props;
            const [value, setValue] = _react.default.useState(props.value ?? '');
            const [state, setState] = (0, _react.useState)({
              type
            });
            const input = (0, _react.useRef)(null);
            let cls = `pui-input${className ? ` ${className}` : ''}`;
            const dates = ['date', 'week', 'month', 'time', 'datetime-local'];
            const isDate = dates.includes(props.type);
            if (isDate) cls += ' pui-input--date';
            if (!!icon) cls += ' pui-input--icon';
            if (!!icon && variant === 'floating') cls += ' icon__floating';
            if (props.type === 'password') cls += ' pui-input--password';
            const variants = {
              unstyled: 'pui-input--unstyled',
              floating: 'pui-input--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
            const providerValue = {
              props,
              state,
              setState,
              value: props.value ?? value,
              setValue,
              input,
              icon,
              isDate
            };
            const labelSpecs = {
              required: props.required
            };
            const attrs = {};
            /**
             * todo: review it.
             */
            if (variant === 'floating') labelSpecs.position = variant;
            if (variant !== 'unstyled') attrs.className = cls;
            return _react.default.createElement(_context.InputContext.Provider, {
              value: providerValue
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_control.ControlSelector, null), children, label && _react.default.createElement(_label.Label, {
              ...labelSpecs
            }, label), errorMessage && _react.default.createElement(_error.Error, {
              show: !!hasError,
              message: errorMessage
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/interfaces/index
      ****************************************/

      ims.set('./input/interfaces/index', {
        hash: 3145852206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
          ;
          ;
        }
      });

      /**************************************
      INTERNAL MODULE: ./input/internal-props
      **************************************/

      ims.set('./input/internal-props', {
        hash: 240084044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.internalProps = void 0;
          /**
           * Internal props of the input component.
           * This array is used to filter the props passed to the input component.
           */
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'variant', 'type', 'size', 'loading', 'error', 'sources', 'onError'];
          function generateAttributes(attrs, toRemove = []) {
            const propsToRemove = [...internalProps, ...toRemove];
            const properties = {
              ...attrs
            };
            propsToRemove.forEach(prop => delete properties[prop]);
            return properties;
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./model/manager
      *******************************/

      ims.set('./model/manager', {
        hash: 3171752923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectorManager = void 0;
          class SelectorManager {
            static #instance;
            #selector;
            get selector() {
              return this.#selector;
            }
            constructor(selector) {}
            validate() {}
            static get(selector) {
              if (!this.#instance) {
                this.#instance = new SelectorManager(selector);
              }
              return this.#instance;
            }
          }
          exports.SelectorManager = SelectorManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./radio
      ***********************/

      ims.set('./radio', {
        hash: 1700275994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Radio = Radio;
          var _react = require("react");
          /*bundle*/
          function Radio(props) {
            const input = (0, _react.useRef)(null);
            const onClick = event => {
              event.stopPropagation();
              input.current.checked = true;
              if (!!props.onChange) props.onChange(event);
            };
            const properties = {
              ...props
            };
            delete properties.onChange;
            const cls = `pragmate-element-radio ${properties.className ? properties.className : ''}`;
            return _react.default.createElement("label", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: 'radio',
              onChange: onClick
            }), properties.label && _react.default.createElement("span", null, properties.label));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./select/index
      ******************************/

      ims.set('./select/index', {
        hash: 912006739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _option = require("./option");
          /*bundle */
          function Select(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            delete attributes.options;
            const value = ![undefined, null].includes(props.value) ?? '';
            let output = [];
            if (props.options) {
              props.options.forEach((item, key) => {
                output.push(_react.default.createElement(_option.OptionSelect, {
                  ...item,
                  key: key
                }));
              });
            }
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            const cls = `pui-input-select`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", {
              htmlFor: id
            }, props.label), _react.default.createElement("select", {
              className: cls,
              ...attributes
            }, output, children));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./select/option
      *******************************/

      ims.set('./select/option', {
        hash: 2324332836,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionSelect = OptionSelect;
          var _react = require("react");
          /*bundle */
          function OptionSelect(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            return _react.default.createElement("option", {
              ...attributes
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 872227154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = Switch;
          var _react = require("react");
          /* bundle */
          function Switch(props) {
            const {
              checked,
              onChange,
              variant = 'primary',
              disabled,
              sizing = 'md',
              className
            } = props;
            const [isChecked, setIsChecked] = _react.default.useState(!!checked);
            _react.default.useEffect(() => {
              if (isChecked === checked) return;
              setIsChecked(checked);
            }, [checked]);
            const handleChange = event => {
              event.stopPropagation();
              setIsChecked(event.currentTarget.checked);
              onChange && onChange(event);
            };
            let classNameSwitch = `pui-element-switch ${className ? className : ''}`;
            classNameSwitch += disabled ? ' disabled' : '';
            let cls = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
            cls += variant ? ` ${variant}` : '';
            cls += sizing ? ` ${sizing}` : '';
            const properties = {
              ...props
            };
            ['className', 'checked', 'onChange', 'variant', 'sizing', 'id'].forEach(prop => {
              delete properties[prop];
            });
            const id = props.id ?? props.name ?? 'pui-element-switch';
            return _react.default.createElement("div", {
              className: classNameSwitch
            }, _react.default.createElement("input", {
              className: 'pui-element-switch__checkbox',
              id: id,
              type: 'checkbox',
              checked: isChecked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: cls,
              htmlFor: id
            }, _react.default.createElement("span", {
              className: `label__btn--slider`
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./textarea/counter
      **********************************/

      ims.set('./textarea/counter', {
        hash: 1510952168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaCounter = TextareaCounter;
          var _react = require("react");
          function TextareaCounter({
            counter,
            length,
            maxlength
          }) {
            if (!counter) return null;
            let cls = 'pui-textarea-counter';
            if (maxlength && length > maxlength - 15) {
              cls += length > maxlength - 5 ? ' pui-textarea-counter--danger' : ' pui-textarea-counter--warning';
            }
            return _react.default.createElement("span", {
              className: cls
            }, length ?? 0);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/error
      ********************************/

      ims.set('./textarea/error', {
        hash: 2150596302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaError = TextareaError;
          var _react = require("react");
          function TextareaError({
            state,
            hasError,
            errorMessage,
            value
          }) {
            if (!state._hasError && !hasError) return null;
            if (hasError || value !== '') errorMessage = errorMessage ? errorMessage : state.errorMessage;
            return _react.default.createElement("span", {
              className: 'pui-element-input-error'
            }, errorMessage);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/index
      ********************************/

      ims.set('./textarea/index', {
        hash: 1666522646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _error = require("./error");
          var _counter = require("./counter");
          let previousHeight = 0;
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, _react.useRef)();
            const {
              counter,
              errorMessage,
              autoresize = true,
              value = ''
            } = props;
            const [state, setState] = (0, _react.useState)({
              value,
              errorMessage
            });
            _react.default.useEffect(() => {
              const textarea = input.current;
              textarea.style.height = 'auto';
              // Set new height based on scrollHeight
              textarea.style.height = `${textarea.scrollHeight}px`;
            }, [value]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              // const value = cleanExtraNewlines(event.target.value);
              const value = event.target.value;
              setState({
                ...state,
                _hasError: false,
                value
              });
            };
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'counter', 'errorMessage', 'children', 'label', 'floating'].forEach(prop => delete properties[prop]);
            const variants = {
              unstyled: 'pui-textarea--unstyled',
              floating: 'pui-textarea--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
            let clsLabel = '';
            if (props.required) cls += ' is-required';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: value,
              placeholder: props.placeholder ?? ' '
            }), props.children, _react.default.createElement(_error.TextareaError, {
              state: state,
              hasError: props.hasError,
              value: value,
              errorMessage: props.errorMessage
            }), props.label && _react.default.createElement("label", {
              className: clsLabel,
              htmlFor: props.id
            }, props.label), _react.default.createElement(_counter.TextareaCounter, {
              length: input?.current?.value.length,
              maxlength: props.maxLength,
              counter: counter
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/types
      ********************************/

      ims.set('./textarea/types', {
        hash: 1171268489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 4163527322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./checkbox/group",
        "from": "CheckboxGroup",
        "name": "CheckboxGroup"
      }, {
        "im": "./checkbox/index",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./input/components/error",
        "from": "Error",
        "name": "Error"
      }, {
        "im": "./input/components/label",
        "from": "Label",
        "name": "Label"
      }, {
        "im": "./input/index",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./radio",
        "from": "Radio",
        "name": "Radio"
      }, {
        "im": "./select/index",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./select/option",
        "from": "OptionSelect",
        "name": "OptionSelect"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea/index",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CheckboxGroup') && _export("CheckboxGroup", CheckboxGroup = require ? require('./checkbox/group').CheckboxGroup : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox/index').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Error') && _export("Error", Error = require ? require('./input/components/error').Error : value);
        (require || prop === 'Label') && _export("Label", Label = require ? require('./input/components/label').Label : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input/index').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select/index').Select : value);
        (require || prop === 'OptionSelect') && _export("OptionSelect", OptionSelect = require ? require('./select/option').OptionSelect : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea/index').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJkYXRlcyIsImluY2x1ZGVzIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiZ2VuZXJhdGVBdHRyaWJ1dGVzIiwidG9SZW1vdmUiLCJwcm9wc1RvUmVtb3ZlIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaXRlbSIsIk9wdGlvblNlbGVjdCIsIlN3aXRjaCIsInNpemluZyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsInVzZUVmZmVjdCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJwcmV2aW91c0hlaWdodCIsIlRleHRhcmVhIiwiYXV0b3Jlc2l6ZSIsInRleHRhcmVhIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YXJnZXQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NoZWNrYm94L2dyb3VwLnRzeCIsIi90cy9jaGVja2JveC9pbmRleC50c3giLCIvdHMvZm9ybS50c3giLCIvdHMvaW5wdXQvY29tcG9uZW50cy9kYXRlLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi90cy9pbnB1dC9jb21wb25lbnRzL2ljb24udHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvbGFiZWwudHN4IiwiL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiL3RzL2lucHV0L2NvbnRleHQudHMiLCIvdHMvaW5wdXQvY29udHJvbC50c3giLCIvdHMvaW5wdXQvaW5kZXgudHN4IiwiL3RzL2lucHV0L2ludGVyZmFjZXMvaW5kZXgudHMiLCIvdHMvaW5wdXQvaW50ZXJuYWwtcHJvcHMudHMiLCIvdHMvbW9kZWwvbWFuYWdlci50cyIsIi90cy9yYWRpby50c3giLCIvdHMvc2VsZWN0L2luZGV4LnRzeCIsIi90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi90cy9zd2l0Y2gudHN4IiwiL3RzL3RleHRhcmVhL2NvdW50ZXIudHN4IiwiL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi90cy90ZXh0YXJlYS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLFNBQVVFLGFBQWFBLENBQUNDLEtB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