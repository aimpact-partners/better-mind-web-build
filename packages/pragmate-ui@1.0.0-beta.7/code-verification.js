System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, InputCode, __beyond_pkg, hmr;
  _export("InputCode", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./code-input
      ****************************/
      ims.set('./code-input', {
        hash: 3163548358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputCode = InputCode;
          var _react = require("react");
          var _input = require("./input");
          const defaultOnCodeFull = () => null;
          /**
           * It's a React component that takes a length prop and an onCodeFull prop. It renders an array of
           * inputs, each of which is limited to one character. When the user enters a character, the component
           * updates the state with the character and focuses the next input. When the user presses backspace,
           * the component removes the last character from the state and focuses the previous input. When the
           * user enters the last character, the component calls the onCodeFull prop with the code as a string.
           * @param {props}  - props
           */
          let copied = false;
          /*bundle*/
          function InputCode({
            length,
            onCodeFull,
            className,
            onlyNumber,
            reset,
            value = ''
          }) {
            // Initializes the code state only once based on the value and length props.
            // This operation will be carried out when the component mounts and will not react to prop changes afterward.
            const initializeCode = (value, length) => {
              const codeArray = new Array(length).fill('');
              for (let i = 0; i < length && i < value.length; i++) {
                codeArray[i] = value[i];
              }
              return codeArray;
            };
            const [code, setCode] = (0, _react.useState)(initializeCode(value, length));
            const [finalValue, setFinalValue] = _react.default.useState(value ?? '');
            const [isFull, setIsFull] = (0, _react.useState)(false);
            const [position, setPosition] = (0, _react.useState)();
            const refs = (0, _react.useRef)(Array(length));
            const onClean = event => {
              const {
                index
              } = event.currentTarget.dataset;
              globalThis.setTimeout(() => {
                if (event.which === 8 || event.key?.toLowerCase() === 'backspace') {
                  const current = [...code];
                  current[index] = '';
                  setCode(current);
                  setPosition(Number(index) - 1);
                }
              }, 0);
            };
            const preventDefault = event => {
              const {
                index
              } = event.currentTarget.dataset;
              const newValue = event.currentTarget.value;
              const current = [...code];
              if (newValue !== '') {
                setPosition(Number(index) + 1);
              }
              current[index] = event.currentTarget.value;
              setCode(value => {
                const i = [...value];
                i[index] = newValue;
                setFinalValue(i.join(''));
                return i;
              });
              const ready = current.every(item => item !== '');
              setIsFull(ready);
              /**
               * If the code is full, and then the user presses backspace, the code will be cleared.
               * so we call when the code is full and the user presses backspace to let the parent component know that the code is not full anymore.
               */
              if (ready || !ready && isFull) onCodeFull(current.join(''));
            };
            (0, _react.useEffect)(() => {
              if (finalValue.length === length) {
                setIsFull(true);
                onCodeFull(finalValue);
                return;
              }
              if (isFull && finalValue.length < length) {
                setIsFull(false);
                onCodeFull('');
              }
            }, [finalValue]);
            (0, _react.useEffect)(() => {
              setTimeout(() => refs.current[position]?.focus(), 100);
            }, [position]);
            const setFocus = () => {
              let empty = code.findIndex(item => item === '');
              if (empty === -1) empty = code.length - 1;
              refs.current[empty]?.focus();
            };
            const cls = className ? `${className} code-inputs` : 'code-inputs';
            (0, _react.useEffect)(() => {
              const onCopy = event => {
                event.stopPropagation();
                const pastedData = event.clipboardData.getData('text');
                const value = pastedData.substring(0, length).split('');
                setFinalValue(value.join(''));
                setCode(value);
              };
              refs.current[0]?.addEventListener('paste', onCopy);
              return () => {
                refs.current[0]?.removeEventListener('paste', onCopy);
              };
            }, []);
            const getItem = (_, i) => {
              const getRef = el => {
                refs.current[i] = el;
              };
              return _react.default.createElement(_input.default, {
                value: code[i] ?? '',
                index: i,
                key: i.toString(),
                ref: getRef,
                onKeyDown: onClean,
                onChange: preventDefault
              });
            };
            const output = [...Array(length)].map(getItem);
            return _react.default.createElement("div", {
              className: cls
            }, output);
          }
          InputCode.defaultPros = {
            onCodeFull: defaultOnCodeFull,
            length: 6
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 3296864983,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _default = exports.default = _react.default.forwardRef(function Input(props, ref) {
            const className = _react.default.useMemo(() => {
              const propsClassName = props.className ?? '';
              const filledClassName = Boolean(String(props.value ?? '').length) ? 'filled' : '';
              return `box ${propsClassName} ${filledClassName}`;
            }, [props.value, props.className]);
            return _react.default.createElement("input", {
              ...props,
              maxLength: 1,
              "data-index": props.index,
              type: 'text',
              // inputMode='numeric'
              className: className,
              ref: ref
            });
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-input",
        "from": "InputCode",
        "name": "InputCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'InputCode') && _export("InputCode", InputCode = require ? require('./code-input').InputCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0IiwiZGVmYXVsdE9uQ29kZUZ1bGwiLCJjb3BpZWQiLCJJbnB1dENvZGUiLCJsZW5ndGgiLCJvbkNvZGVGdWxsIiwiY2xhc3NOYW1lIiwib25seU51bWJlciIsInJlc2V0IiwidmFsdWUiLCJpbml0aWFsaXplQ29kZSIsImNvZGVBcnJheSIsIkFycmF5IiwiZmlsbCIsImkiLCJjb2RlIiwic2V0Q29kZSIsInVzZVN0YXRlIiwiZmluYWxWYWx1ZSIsInNldEZpbmFsVmFsdWUiLCJkZWZhdWx0IiwiaXNGdWxsIiwic2V0SXNGdWxsIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInJlZnMiLCJ1c2VSZWYiLCJvbkNsZWFuIiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwiY3VycmVudCIsIk51bWJlciIsInByZXZlbnREZWZhdWx0IiwibmV3VmFsdWUiLCJqb2luIiwicmVhZHkiLCJldmVyeSIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJmb2N1cyIsInNldEZvY3VzIiwiZW1wdHkiLCJmaW5kSW5kZXgiLCJjbHMiLCJvbkNvcHkiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXN0ZWREYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzdWJzdHJpbmciLCJzcGxpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0SXRlbSIsIl8iLCJnZXRSZWYiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0b1N0cmluZyIsInJlZiIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwib3V0cHV0IiwibWFwIiwiZGVmYXVsdFByb3MiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJwcm9wcyIsInVzZU1lbW8iLCJwcm9wc0NsYXNzTmFtZSIsImZpbGxlZENsYXNzTmFtZSIsIkJvb2xlYW4iLCJTdHJpbmciLCJtYXhMZW5ndGgiLCJ0eXBlIl0sInNvdXJjZXMiOlsiL3RzL2NvZGUtaW5wdXQudHN4IiwiL3RzL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQVNBLE1BQU1FLGlCQUFpQixHQUFtQkEsQ0FBQSxLQUFNLElBQUk7VUFFcEQ7Ozs7Ozs7O1VBU0EsSUFBSUMsTUFBTSxHQUFHLEtBQUs7VUFDWDtVQUFVLFNBQVVDLFNBQVNBLENBQUM7WUFDcENDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxLQUFLLEdBQUc7VUFBRSxDQUNGO1lBRVI7WUFDQTtZQUNBLE1BQU1DLGNBQWMsR0FBR0EsQ0FBQ0QsS0FBYSxFQUFFTCxNQUFjLEtBQWM7Y0FDbEUsTUFBTU8sU0FBUyxHQUFHLElBQUlDLEtBQUssQ0FBQ1IsTUFBTSxDQUFDLENBQUNTLElBQUksQ0FBQyxFQUFFLENBQUM7Y0FDNUMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdWLE1BQU0sSUFBSVUsQ0FBQyxHQUFHTCxLQUFLLENBQUNMLE1BQU0sRUFBRVUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BESCxTQUFTLENBQUNHLENBQUMsQ0FBQyxHQUFHTCxLQUFLLENBQUNLLENBQUMsQ0FBQzs7Y0FFeEIsT0FBT0gsU0FBUztZQUNqQixDQUFDO1lBRUQsTUFBTSxDQUFDSSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHLElBQUFsQixNQUFBLENBQUFtQixRQUFRLEVBQVdQLGNBQWMsQ0FBQ0QsS0FBSyxFQUFFTCxNQUFNLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUNjLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdy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