System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, AddButton, RemoveButton, useDynamicFieldContext, DynamicField, __beyond_pkg, hmr;
  _export({
    AddButton: void 0,
    RemoveButton: void 0,
    useDynamicFieldContext: void 0,
    DynamicField: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/form/dynamic-field"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
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

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 1596836847,
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

      /***************************
      INTERNAL MODULE: ./field-row
      ***************************/

      ims.set('./field-row', {
        hash: 2138550831,
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
            onUpdate
          }) => {
            const renderChild = child => {
              if (!_react.default.isValidElement(child)) return child;
              const onChange = e => onUpdate(index, child.props.name, e.target.value);
              return _react.default.cloneElement(child, {
                value: field[child.props.name] || '',
                onChange
              });
            };
            const renderChildren = () => _react.default.Children.map(children, renderChild);
            return _react.default.createElement("div", {
              "data-index": index
            }, renderChildren());
          };
          exports.FieldRow = FieldRow;
        }
      });

      /***********************
      INTERNAL MODULE: ./field
      ***********************/

      ims.set('./field', {
        hash: 2126622883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicField = DynamicField;
          var _react = require("react");
          var _useFieldManager = require("./use-field-manager");
          var _fieldRow = require("./field-row");
          var _context = require("./context");
          // DynamicField.tsx

          const defaultFieldTemplate = children => {
            return _react.default.Children.toArray(children).reduce((acc, child) => {
              if (_react.default.isValidElement(child) && child.props.name) {
                acc[child.props.name] = '';
              }
              return acc;
            }, {});
          };
          /*bundle*/
          function DynamicField({
            children,
            value,
            onChange
          }) {
            const {
              fields,
              add,
              remove,
              update
            } = (0, _useFieldManager.useFieldManager)(value);
            const fieldTemplate = (0, _react.useMemo)(() => defaultFieldTemplate(children), [children]);
            const onAdd = () => {
              const newFields = add(fieldTemplate);
              if (onChange) onChange(newFields);
            };
            const onRemove = index => {
              const newFields = remove(index);
              if (onChange) onChange(newFields);
            };
            const onUpdate = (index, name, value) => {
              const newFields = update(index, name, value);
              if (onChange) onChange(newFields);
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                fields,
                onAdd,
                onRemove,
                onUpdate
              }
            }, _react.default.createElement("div", null, _react.default.createElement("button", {
              type: 'button',
              onClick: onAdd
            }, "Add"), fields.map((field, index) => _react.default.createElement(_fieldRow.FieldRow, {
              key: index,
              field: field,
              index: index,
              children: children,
              onRemove: onRemove,
              onUpdate: onUpdate
            }))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1363213942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./use-field-manager
      ***********************************/

      ims.set('./use-field-manager', {
        hash: 3544156289,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFieldManager = useFieldManager;
          var _react = require("react");
          // use-field-manager.ts

          function useFieldManager(initialFields) {
            const [fields, setFields] = (0, _react.useState)(initialFields);
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
              if (fields.length > 1) {
                const newFields = fields.filter((_, i) => i !== index);
                setFields(newFields);
                return newFields;
              }
              return fields;
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
      __pkg.exports.descriptor = [{
        "im": "./actions/add",
        "from": "AddButton",
        "name": "AddButton"
      }, {
        "im": "./actions/remove",
        "from": "RemoveButton",
        "name": "RemoveButton"
      }, {
        "im": "./context",
        "from": "useDynamicFieldContext",
        "name": "useDynamicFieldContext"
      }, {
        "im": "./field",
        "from": "DynamicField",
        "name": "DynamicField"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddButton') && _export("AddButton", AddButton = require ? require('./actions/add').AddButton : value);
        (require || prop === 'RemoveButton') && _export("RemoveButton", RemoveButton = require ? require('./actions/remove').RemoveButton : value);
        (require || prop === 'useDynamicFieldContext') && _export("useDynamicFieldContext", useDynamicFieldContext = require ? require('./context').useDynamicFieldContext : value);
        (require || prop === 'DynamicField') && _export("DynamicField", DynamicField = require ? require('./field').DynamicField : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIkFkZEJ1dHRvbiIsInRlbXBsYXRlIiwiY2hpbGRyZW4iLCJvbkFkZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbldyYXBwZXIiLCJvbkNsaWNrIiwiZXhwb3J0cyIsIlJlbW92ZUJ1dHRvbiIsImluZGV4Iiwib25SZW1vdmUiLCJpc1ZhbGlkRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lRWxlbWVudCIsIlJlYWN0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRmllbGRSb3ciLCJmaWVsZCIsIm9uVXBkYXRlIiwicmVuZGVyQ2hpbGQiLCJjaGlsZCIsIm9uQ2hhbmdlIiwiZSIsInByb3BzIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyQ2hpbGRyZW4iLCJDaGlsZHJlbiIsIm1hcCIsIl91c2VGaWVsZE1hbmFnZXIiLCJfZmllbGRSb3ciLCJkZWZhdWx0RmllbGRUZW1wbGF0ZSIsInRvQXJyYXkiLCJyZWR1Y2UiLCJhY2MiLCJEeW5hbWljRmllbGQiLCJmaWVsZHMiLCJhZGQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJ1c2VGaWVsZE1hbmFnZXIiLCJmaWVsZFRlbXBsYXRlIiwidXNlTWVtbyIsIm5ld0ZpZWxkcyIsIlByb3ZpZGVyIiwidHlwZSIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaW5pdGlhbEZpZWxkcyIsInNldEZpZWxkcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZmlsdGVyIiwiXyIsImkiLCJuZXdWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zL2FkZC50c3giLCIvdHMvYWN0aW9ucy9yZW1vdmUudHN4IiwiL3RzL2FjdGlvbnMvd3JhcHBlci50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9maWVsZC1yb3cudHN4IiwiL3RzL2ZpZWxkLnRzeCIsIi90eXBlcy50c3giLCIvdHMvdXNlLWZpZWxkLW1hbmFnZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQU9PLFdBVlA7O1VBVWtCLE1BQU1HLFNBQVMsR0FBR0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDO1VBQVEsQ0FBa0IsS0FBSTtZQUM5RSxNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sc0JBQXNCLEdBQUU7WUFFMUMsT0FBT1IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1AsUUFBQSxDQUFBUSxhQUFhO2NBQUNDLE9BQU8sRUFBRUw7WUFBSyxHQUFHRCxRQUFRLENBQWlCO1VBQ2pFLENBQUM7VUFBQ08sT0FBQSxDQUFBVCxTQUFBLEdBQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkYsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBT08sV0FWUDs7VUFVa0IsTUFBTWEsWUFBWSxHQUFHQSxDQUFDO1lBQUVDLEtBQUs7WUFBRVQ7VUFBUSxDQUFxQixLQUFJO1lBQ2pGLE1BQU07Y0FBRVU7WUFBUSxDQUFFLEdBQUcsSUFBQWQsUUFBQSxDQUFBTSxzQkFBc0IsR0FBRTtZQUM3QyxPQUFPUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxRQUFBLENBQUFRLGFBQWE7Y0FBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1JLFFBQVEsQ0FBQ0QsS0FBSztZQUFDLEdBQUdULFFBQVEsQ0FBaUI7VUFDakYs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