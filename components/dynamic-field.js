System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, AddButton, RemoveButton, DynamicButton, DynamicIconButton, useDynamicFieldContext, DynamicField, DynamicFieldContainer, TotalElements, __beyond_pkg, hmr;
  _export({
    AddButton: void 0,
    RemoveButton: void 0,
    DynamicButton: void 0,
    DynamicIconButton: void 0,
    useDynamicFieldContext: void 0,
    DynamicField: void 0,
    DynamicFieldContainer: void 0,
    TotalElements: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_2 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Base) {
      dependency_4 = _pragmateUi100Beta7Base;
    }, function (_lodash) {
      dependency_5 = _lodash;
    }, function (_beyondJsKernel0112Styles) {
      dependency_6 = _beyondJsKernel0112Styles;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/dynamic-field"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['lodash', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/dynamic-field');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./actions/add
      *****************************/
      ims.set('./actions/add', {
        hash: 4126504715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddButton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _wrapper = require("./wrapper");
          /*bundle*/ // AddButton.tsx

          const AddButton = ({
            template,
            children
          }) => {
            const {
              onAdd
            } = (0, _context.useDynamicFieldContext)();
            return _react.default.createElement(_wrapper.ActionWrapper, {
              onClick: onAdd
            }, children);
          };
          exports.AddButton = AddButton;
        }
      });

      /********************************
      INTERNAL MODULE: ./actions/remove
      ********************************/

      ims.set('./actions/remove', {
        hash: 1978015170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RemoveButton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _wrapper = require("./wrapper");
          /*bundle*/ // RemoveButton.tsx

          const RemoveButton = ({
            index,
            children
          }) => {
            const {
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            return _react.default.createElement(_wrapper.ActionWrapper, {
              onClick: () => onRemove(index)
            }, children);
          };
          exports.RemoveButton = RemoveButton;
        }
      });

      /*********************************
      INTERNAL MODULE: ./actions/wrapper
      *********************************/

      ims.set('./actions/wrapper', {
        hash: 3526438104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionWrapper = void 0;
          var _react = require("react");
          const ActionWrapper = ({
            children,
            onClick
          }) => {
            if (!_react.default.isValidElement(children)) {
              console.error('ActionWrapper: The child must be a valid React element.');
              return null;
            }
            return _react.default.cloneElement(children, {
              onClick
            });
          };
          exports.ActionWrapper = ActionWrapper;
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/button
      ***********************************/

      ims.set('./components/button', {
        hash: 4291481084,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicButton = DynamicButton;
          exports.DynamicIconButton = DynamicIconButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          /*bundle*/
          function DynamicButton({
            children,
            action,
            index,
            onClick,
            ...props
          }) {
            const {
              onAdd,
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            const actions = {
              add: onAdd,
              remove: onRemove
            };
            const handleClick = () => {
              if (onClick) onClick();
              if (action && actions[action]) actions[action](index);
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function DynamicIconButton({
            children,
            index,
            action,
            onClick,
            ...props
          }) {
            const {
              onAdd,
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            const actions = {
              add: onAdd,
              remove: onRemove
            };
            const handleClick = () => {
              if (onClick) onClick();
              if (action && actions[action]) actions[action](index);
            };
            return _react.default.createElement(_icons.IconButton, {
              ...props,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./components/template
      *************************************/

      ims.set('./components/template', {
        hash: 1394527578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultFieldTemplate = void 0;
          var React = require("react");
          const defaultFieldTemplate = children => {
            return React.Children.toArray(children).reduce((acc, child) => {
              if (React.isValidElement(child) && child.props.name) {
                acc[child.props.name] = '';
              }
              return acc;
            }, {});
          };
          exports.defaultFieldTemplate = defaultFieldTemplate;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3988890539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDynamicFieldContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const /*bundle*/useDynamicFieldContext = () => React.useContext(ModuleContext);
          exports.useDynamicFieldContext = useDynamicFieldContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./field/field
      *****************************/

      ims.set('./field/field', {
        hash: 1156756761,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicField = DynamicField;
          var _react = require("react");
          var _context = require("../context");
          var _row = require("../field/row");
          /*bundle*/ // DynamicField.tsx

          function DynamicField({
            children,
            index
          }) {
            const {
              onBlur,
              fields,
              onRemove,
              onUpdate,
              name,
              Empty
            } = (0, _context.useDynamicFieldContext)();
            const handleOnBlur = event => {
              if (!onBlur) return;
              const target = {
                name,
                value: fields
              };
              onBlur({
                target,
                currentTarget: target
              });
            };
            if (!fields.length) return _react.default.createElement(Empty, null);
            return _react.default.createElement("div", {
              className: "dynamic-form__container"
            }, fields.map((field, index) => _react.default.createElement(_row.FieldRow, {
              key: index,
              field: field,
              index: index,
              children: children,
              onRemove: onRemove,
              onBlur: handleOnBlur,
              onUpdate: onUpdate
            })));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./field/row
      ***************************/

      ims.set('./field/row', {
        hash: 1132438387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldRow = void 0;
          var _react = require("react");
          // field-row.tsx

          const FieldRow = ({
            field,
            index,
            children,
            onRemove,
            onBlur,
            onUpdate
          }) => {
            const renderChild = child => {
              if (!_react.default.isValidElement(child)) return child;
              const onChange = e => onUpdate(index, e.currentTarget.name, e.currentTarget.value);
              return _react.default.cloneElement(child, {
                value: field[child.props.name] || '',
                onChange,
                onBlur,
                index
              });
            };
            const renderChildren = () => _react.default.Children.map(children, renderChild);
            return _react.default.createElement("div", {
              className: "dynamic-form__field",
              "data-index": index
            }, renderChildren());
          };
          exports.FieldRow = FieldRow;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-field-manager
      *****************************************/

      ims.set('./hooks/use-field-manager', {
        hash: 1699253795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFieldManager = useFieldManager;
          var _react = require("react");
          // use-field-manager.ts

          function useFieldManager(lazyInit, initialFields = []) {
            const initialValue = initialFields.length ? initialFields : lazyInit ? [{}] : [];
            const [fields, setFields] = (0, _react.useState)(initialValue);
            (0, _react.useEffect)(() => {
              setFields(initialFields);
            }, [initialFields]);
            const add = template => {
              const newFields = [...fields, {
                ...template
              }];
              setFields(newFields);
              return newFields;
            };
            const remove = index => {
              const newFields = fields.filter((_, i) => i !== index);
              setFields([...newFields]);
              return newFields;
            };
            const update = (index, name, newValue) => {
              const newFields = fields.map((field, i) => i === index ? {
                ...field,
                [name]: newValue
              } : field);
              setFields(newFields);
              return newFields;
            };
            return {
              fields,
              add,
              remove,
              update
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1897305872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicFieldContainer = DynamicFieldContainer;
          var _react = require("react");
          var _context = require("./context");
          var _useFieldManager = require("./hooks/use-field-manager");
          var _template = require("./components/template");
          /*bundle*/ // DynamicField.tsx

          function DynamicFieldContainer({
            texts = {
              add: 'Add',
              remove: 'Remove'
            },
            children,
            value,
            name,
            lazyInit = false,
            onChange,
            empty,
            onBlur
          }) {
            const {
              fields,
              add,
              remove,
              update
            } = (0, _useFieldManager.useFieldManager)(lazyInit, value);
            const fieldTemplate = (0, _react.useMemo)(() => (0, _template.defaultFieldTemplate)(children), [children]);
            const executeOnChange = (newFields, name) => {
              if (!onChange) return;
              const target = {
                name,
                value: newFields
              };
              onChange({
                target,
                currentTarget: target,
                name
              });
            };
            const onAdd = () => {
              const newFields = add(fieldTemplate);
              executeOnChange(newFields, 'add');
            };
            const onRemove = index => {
              const newFields = remove(index);
              executeOnChange(newFields, 'remove');
            };
            const onUpdate = (index, name, value) => {
              const newFields = update(index, name, value);
              executeOnChange(newFields, 'change');
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                Empty: empty,
                onBlur,
                texts,
                fields,
                onAdd,
                onRemove,
                onUpdate,
                value: fields,
                name
              }
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./total-elements
      ********************************/

      ims.set('./total-elements', {
        hash: 2002400230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalElements = TotalElements;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TotalElements() {
            const {
              fields
            } = (0, _context.useDynamicFieldContext)();
            return React.createElement("span", {
              className: "pui-dynamic-field__total-elements"
            }, fields.length);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1566740805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./actions/add",
        "from": "AddButton",
        "name": "AddButton"
      }, {
        "im": "./actions/remove",
        "from": "RemoveButton",
        "name": "RemoveButton"
      }, {
        "im": "./components/button",
        "from": "DynamicButton",
        "name": "DynamicButton"
      }, {
        "im": "./components/button",
        "from": "DynamicIconButton",
        "name": "DynamicIconButton"
      }, {
        "im": "./context",
        "from": "useDynamicFieldContext",
        "name": "useDynamicFieldContext"
      }, {
        "im": "./field/field",
        "from": "DynamicField",
        "name": "DynamicField"
      }, {
        "im": "./index",
        "from": "DynamicFieldContainer",
        "name": "DynamicFieldContainer"
      }, {
        "im": "./total-elements",
        "from": "TotalElements",
        "name": "TotalElements"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddButton') && _export("AddButton", AddButton = require ? require('./actions/add').AddButton : value);
        (require || prop === 'RemoveButton') && _export("RemoveButton", RemoveButton = require ? require('./actions/remove').RemoveButton : value);
        (require || prop === 'DynamicButton') && _export("DynamicButton", DynamicButton = require ? require('./components/button').DynamicButton : value);
        (require || prop === 'DynamicIconButton') && _export("DynamicIconButton", DynamicIconButton = require ? require('./components/button').DynamicIconButton : value);
        (require || prop === 'useDynamicFieldContext') && _export("useDynamicFieldContext", useDynamicFieldContext = require ? require('./context').useDynamicFieldContext : value);
        (require || prop === 'DynamicField') && _export("DynamicField", DynamicField = require ? require('./field/field').DynamicField : value);
        (require || prop === 'DynamicFieldContainer') && _export("DynamicFieldContainer", DynamicFieldContainer = require ? require('./index').DynamicFieldContainer : value);
        (require || prop === 'TotalElements') && _export("TotalElements", TotalElements = require ? require('./total-elements').TotalElements : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIkFkZEJ1dHRvbiIsInRlbXBsYXRlIiwiY2hpbGRyZW4iLCJvbkFkZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbldyYXBwZXIiLCJvbkNsaWNrIiwiZXhwb3J0cyIsIlJlbW92ZUJ1dHRvbiIsImluZGV4Iiwib25SZW1vdmUiLCJpc1ZhbGlkRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lRWxlbWVudCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiRHluYW1pY0J1dHRvbiIsImFjdGlvbiIsInByb3BzIiwiYWN0aW9ucyIsImFkZCIsInJlbW92ZSIsImhhbmRsZUNsaWNrIiwiQnV0dG9uIiwiRHluYW1pY0ljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJkZWZhdWx0RmllbGRUZW1wbGF0ZSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInJlZHVjZSIsImFjYyIsImNoaWxkIiwibmFtZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yb3ciLCJEeW5hbWljRmllbGQiLCJvbkJsdXIiLCJmaWVsZHMiLCJvblVwZGF0ZSIsIkVtcHR5IiwiaGFuZGxlT25CbHVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWVsZCIsIkZpZWxkUm93Iiwia2V5IiwicmVuZGVyQ2hpbGQiLCJvbkNoYW5nZSIsImUiLCJyZW5kZXJDaGlsZHJlbiIsInVzZUZpZWxkTWFuYWdlciIsImxhenlJbml0IiwiaW5pdGlhbEZpZWxkcyIsImluaXRpYWxWYWx1ZSIsInNldEZpZWxkcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmV3RmllbGRzIiwiZmlsdGVyIiwiXyIsImkiLCJ1cGRhdGUiLCJuZXdWYWx1ZSIsIl91c2VGaWVsZE1hbmFnZXIiLCJfdGVtcGxhdGUiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJ0ZXh0cyIsImVtcHR5IiwiZmllbGRUZW1wbGF0ZSIsInVzZU1lbW8iLCJleGVjdXRlT25DaGFuZ2UiLCJQcm92aWRlciIsIlRvdGFsRWxlbWVudHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zL2FkZC50c3giLCIvdHMvYWN0aW9ucy9yZW1vdmUudHN4IiwiL3RzL2FjdGlvbnMvd3JhcHBlci50c3giLCIvdHMvY29tcG9uZW50cy9idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvdGVtcGxhdGUudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZmllbGQvZmllbGQudHN4IiwiL3RzL2ZpZWxkL3Jvdy50c3giLCIvdHMvaG9va3MvdXNlLWZpZWxkLW1hbmFnZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy90b3RhbC1lbGVtZW50cy50c3giLCIvdHlwZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBT08sV0FWUDs7VUFVa0IsTUFBTUcsU0FBUyxHQUFHQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUSxDQUFrQixLQUFJO1lBQzlFLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxzQkFBc0IsR0FBRTtZQUUxQyxPQUFPUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxRQUFBLENBQUFRLGFBQWE7Y0FBQ0MsT0FBTyxFQUFFTDtZ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