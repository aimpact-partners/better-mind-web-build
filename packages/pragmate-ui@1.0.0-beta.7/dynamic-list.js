System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AddDynamicItem, DraggableList, Header, DynamicItem, List, useDynamicListContext, Provider, __beyond_pkg, hmr;
  _export({
    AddDynamicItem: void 0,
    DraggableList: void 0,
    Header: void 0,
    DynamicItem: void 0,
    List: void 0,
    useDynamicListContext: void 0,
    Provider: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_3 = _pragmateUi100Beta7Components;
    }, function (_framerMotion2) {
      dependency_4 = _framerMotion2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_5 = _pragmateUi100Beta7Icons;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/dynamic-list"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['framer-motion', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/dynamic-list');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/add-item
      *************************************/
      ims.set('./components/add-item', {
        hash: 3769438584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddDynamicItem = AddDynamicItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          /*bundle */
          function AddDynamicItem() {
            const {
              addItem
            } = (0, _context.useDynamicListContext)();
            return _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: addItem
            }, "Add");
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./components/dragabble-list
      *******************************************/

      ims.set('./components/dragabble-list', {
        hash: 3835674000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          /* bundle */
          function DraggableList({
            children,
            className = ''
          }) {
            const {
              values,
              setValues
            } = (0, _context.useDynamicListContext)();
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              className: className,
              values: values,
              onReorder: values => {
                setValues(values);
              }
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/header
      ***********************************/

      ims.set('./components/header', {
        hash: 3832436420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function Header({
            children
          }) {
            const {
              addItem
            } = (0, _context.useDynamicListContext)();
            return _react.default.createElement("header", {
              className: 'pui-dynamic-list__header'
            }, _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: addItem
            }, "Add"), children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/item
      *********************************/

      ims.set('./components/item', {
        hash: 639523093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicItem = DynamicItem;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function DynamicItem(props) {
            const {
              children,
              index,
              identifier
            } = props;
            const {
              removeItem,
              draggable,
              Item,
              registerRef
            } = (0, _context.useDynamicListContext)();
            const onRemove = () => removeItem(identifier.id);
            const attrs = {
              className: 'pui-dynamic-list__item',
              ...(draggable ? {
                value: props.identifier
              } : {})
            };
            const body = _react.default.createElement(Item, {
              ...props
            }, _react.default.createElement("div", {
              className: 'item__content'
            }, children), _react.default.createElement("section", {
              className: 'item__actions'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'delete',
              onClick: onRemove
            })));
            const register = element => registerRef(index, element);
            return _react.default.createElement("div", {
              ...attrs,
              key: index,
              ref: register
            }, body);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/list
      *********************************/

      ims.set('./components/list', {
        hash: 2727787293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          /*bundle*/
          function List({
            className
          }) {
            const {
              name,
              values,
              setValues
            } = (0, _context.useDynamicListContext)();
            const attrs = {
              className: `pui-dynamic-list ${className}`
            };
            const handleChange = (index, value) => {
              const newValue = [...values];
              newValue[index] = value;
              setValues(newValue);
            };
            const output = values.map((item, index) => {
              const setValue = value => handleChange(index, value);
              return _react.default.createElement(_item.DynamicItem, {
                value: item,
                key: `${name}.${index}`,
                index: index,
                identifier: item,
                setValue: setValue
              }, item);
            });
            const Container = 'div';
            return _react.default.createElement(Container, {
              ...attrs
            }, output);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2545632455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDynamicListContext = exports.DynamicListContext = void 0;
          var _react = require("react");
          const DynamicListContext = exports.DynamicListContext = _react.default.createContext({});
          /*bundle*/
          const useDynamicListContext = () => _react.default.useContext(DynamicListContext);
          exports.useDynamicListContext = useDynamicListContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 733921901,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 811037713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Provider = Provider;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function Provider({
            name,
            onChange,
            draggable,
            children,
            value,
            Item,
            specs,
            className
          }) {
            if (value && !Array.isArray(value)) {
              console.warn('Warning: value prop must be an array or undefined. Received', value);
            }
            const getDefaultValue = () => '';
            if (!value?.length) value = [getDefaultValue()];
            const [items, setItems] = _react.default.useState([...value]);
            const [isDraggable, setIsDraggable] = _react.default.useState(draggable);
            const refs = (0, _react.useRef)([]);
            _react.default.useEffect(() => {
              setItems(value);
            }, [value.length]);
            const providerData = {
              addItem: () => {
                const newValue = [...items, getDefaultValue()];
                setItems(newValue);
              },
              draggable: isDraggable,
              refs,
              specs: specs ?? {},
              toggleDraggable: () => setIsDraggable(!isDraggable),
              removeItem: index => {
                const newItems = items.filter((_, i) => i !== index);
                setItems(newItems);
                const target = {
                  name,
                  value: newItems
                };
                onChange?.({
                  target,
                  currentTarget: target
                });
                return newItems;
              },
              name,
              setItems,
              values: items,
              registerRef: (index, ref) => {
                refs.current[index] = ref;
              },
              setValue: (index, value) => {
                const newItems = [...items];
                newItems[index] = value;
                setItems(newItems);
              },
              setValues: value => {
                setItems(value);
                const target = {
                  name,
                  value
                };
                onChange?.({
                  target,
                  currentTarget: target
                });
              },
              getDefaultValue,
              items: items,
              Item
            };
            return _react.default.createElement(_context.DynamicListContext.Provider, {
              value: providerData
            }, _react.default.createElement("div", {
              className: className
            }, children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/add-item",
        "from": "AddDynamicItem",
        "name": "AddDynamicItem"
      }, {
        "im": "./components/dragabble-list",
        "from": "DraggableList",
        "name": "DraggableList"
      }, {
        "im": "./components/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./components/item",
        "from": "DynamicItem",
        "name": "DynamicItem"
      }, {
        "im": "./components/list",
        "from": "List",
        "name": "List"
      }, {
        "im": "./context",
        "from": "useDynamicListContext",
        "name": "useDynamicListContext"
      }, {
        "im": "./provider",
        "from": "Provider",
        "name": "Provider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddDynamicItem') && _export("AddDynamicItem", AddDynamicItem = require ? require('./components/add-item').AddDynamicItem : value);
        (require || prop === 'DraggableList') && _export("DraggableList", DraggableList = require ? require('./components/dragabble-list').DraggableList : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./components/header').Header : value);
        (require || prop === 'DynamicItem') && _export("DynamicItem", DynamicItem = require ? require('./components/item').DynamicItem : value);
        (require || prop === 'List') && _export("List", List = require ? require('./components/list').List : value);
        (require || prop === 'useDynamicListContext') && _export("useDynamicListContext", useDynamicListContext = require ? require('./context').useDynamicListContext : value);
        (require || prop === 'Provider') && _export("Provider", Provider = require ? require('./provider').Provider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkFkZER5bmFtaWNJdGVtIiwiYWRkSXRlbSIsInVzZUR5bmFtaWNMaXN0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJfZnJhbWVyTW90aW9uIiwiRHJhZ2dhYmxlTGlzdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiUmVvcmRlciIsIkdyb3VwIiwib25SZW9yZGVyIiwiSGVhZGVyIiwiX2ljb25zIiwiRHluYW1pY0l0ZW0iLCJwcm9wcyIsImluZGV4IiwiaWRlbnRpZmllciIsInJlbW92ZUl0ZW0iLCJkcmFnZ2FibGUiLCJJdGVtIiwicmVnaXN0ZXJSZWYiLCJvblJlbW92ZSIsImlkIiwiYXR0cnMiLCJ2YWx1ZSIsImJvZHkiLCJJY29uQnV0dG9uIiwiaWNvbiIsInJlZ2lzdGVyIiwiZWxlbWVudCIsImtleSIsInJlZiIsIl9pdGVtIiwiTGlzdCIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJzZXRWYWx1ZSIsIkNvbnRhaW5lciIsIkR5bmFtaWNMaXN0Q29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiUHJvdmlkZXIiLCJvbkNoYW5nZSIsInNwZWNzIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsIndhcm4iLCJnZXREZWZhdWx0VmFsdWUiLCJsZW5ndGgiLCJpdGVtcyIsInNldEl0ZW1zIiwidXNlU3RhdGUiLCJpc0RyYWdnYWJsZSIsInNldElzRHJhZ2dhYmxlIiwicmVmcyIsInVzZVJlZiIsInVzZUVmZmVjdCIsInByb3ZpZGVyRGF0YSIsInRvZ2dsZURyYWdnYWJsZSIsIm5ld0l0ZW1zIiwiZmlsdGVyIiwiXyIsImkiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudCJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2FkZC1pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2RyYWdhYmJsZS1saXN0LnRzeCIsIi90cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvY29tcG9uZW50cy9pdGVtLnRzeCIsIi90cy9jb21wb25lbnRzL2xpc3QudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL2RlZmluaXRpb25zLnRzIiwiL3RzL3Byb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFXLFNBQVVHLGNBQWNBLENBQUE7WUFDekMsTUFBTTtjQUFFQztZQUFPLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBQzNDLE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLFdBQUEsQ0FBQU8sTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVOO1lBQU8sU0FFakM7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBVyxhQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFZLFNBQVVZLGFBQWFBLENBQUM7WUFBRUMsUUFBUTtZQUFFQyxTQUFTLEdBQUc7VUFBRSxDQUFFO1lBQ3RFLE1BQU07Y0FBRUMsTUFBTTtjQUFFQztZQUFTLENBQUUsR0FBRyxJQUFBZCxRQUFBLENBQUFHLHFCQUFxQixHQUFFO1lBRXJELE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNJLGFBQUEsQ0FBQU0sT0FBTyxDQUFDQyxLQUFLO2NBQ2JKLFNBQVMsRUFBRUEsU0FBUztjQUNwQkMsTUFBTSxFQUFFQSxNQUFNO2NBQ2RJLFNBQVMsRUFBRUosTUFBTSxJQUFHO2dCQUNuQkMsU0FBUyxDQUFDRCxNQUFNLENBQUM7Y0FDbEI7WUFBQyxHQUVBRixRQUFRLENBQ007VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUFkLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUNPO1VBQVcsU0FBVW9CLE1BQU1BLENBQUM7WUFBRVA7VUFBUSxDQUFFO1lBQzlDLE1BQU07Y0FBRVQ7WUFBTyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUUzQyxPQUNDTixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTyxTQUFTLEVBQUM7WUFBMEIsR0FDM0NmLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLFdBQUEsQ0FBQU8sTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVOO1lBQU8sU0FFakMsRUFDUlMsUUFBUSxDQUNEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFFTztVQUFXLFNBQVVzQixXQUFXQSxDQUFDQyxLQUFLO1lBQzVDLE1BQU07Y0FBRVYsUUFBUTtjQUFFVyxLQUFLO2NBQUVDO1lBQVUsQ0FBRSxHQUFHRixLQUFLO1lBQzdDLE1BQU07Y0FBRUcsVUFBVTtjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUM7WUFBVyxDQUFFLEdBQUcsSUFBQTNCLFFBQUEsQ0FBQUcscUJBQXFCLEdBQUU7WUFFNUUsTUFBTXlCLFFBQVEsR0FBR0EsQ0FBQSxLQUFNSixVQUFVLENBQUNELFVBQVUsQ0FBQ00sRUFBRSxDQUFDO1lBQ2hELE1BQU1DLEtBQUssR0FBRztjQUFFbEIsU0FBUyxFQUFFLHdCQUF3QjtjQUFFLElBQUlhLFNBQVMsR0FBRztnQkFBRU0sS0FBSyxFQUFFVixLQUFLLENBQUNFO2NBQVUsQ0FBRSxHQUFHLEVBQUU7WUFBQyxDQUFFO1lBRXhHLE1BQU1TLElBQUksR0FDVG5DLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNxQixJQUFJO2NBQUEsR0FBS0w7WUFBSyxHQUNkeEIsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFDO1lBQWUsR0FBRUQsUUFBUSxDQUFPLEVBQy9DZCxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTyxTQUFTLEVBQUM7WUFBZSxHQUNqQ2YsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBYyxVQUFVO2NBQUNDLElBQUksRUFBQyxRQUFRO2NBQUMxQixPQUFPLEVBQUVvQjtZQUFRLEVBQUksQ0FDdEMsQ0FFWDtZQUVELE1BQU1PLFFBQVEsR0FBR0MsT0FBTyxJQUFJVCxXQUFXLENBQUNMLEtBQUssRUFBRWMsT0FBTyxDQUFDO1lBRXZELE9BQ0N2QyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFBLEdBQVN5QixLQUFLO2NBQUVPLEdBQUcsRUFBRWYsS0FBSztjQUFFZ0IsR0FBRyxFQUFFSDtZQUFRLEdBQ3ZDSCxJQUFJLENBQ0E7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQW5DLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUF5QyxLQUFBLEdBQUF6QyxPQUFBO1VBR087VUFBVSxTQUFVMEMsSUFBSUEsQ0FBQztZQUFFNUI7VUFBUyxDQUFhO1lBQ3ZELE1BQU07Y0FBRTZCLElBQUk7Y0FBRTVCLE1BQU07Y0FBRUM7WUFBUyxDQUFFLEdBQUcsSUFBQWQsUUFBQSxDQUFBRyxxQkFBcUIsR0FBRTtZQUMzRCxNQUFNMkIsS0FBSyxHQUFnQztjQUFFbEIsU0FBUyxFQUFFLG9CQUFvQkEsU0FBUztZQUFFLENBQUU7WUFFekYsTUFBTThCLFlBQVksR0FBR0EsQ0FBQ3BCLEtBQUssRUFBRVMsS0FBSyxLQUFJO2NBQ3JDLE1BQU1ZLFFBQVEsR0FBRyxDQUFDLEdBQUc5QixNQUFNLENBQUM7Y0FDNUI4QixRQUFRLENBQUNyQixLQUFLLENBQUMsR0FBR1MsS0FBSztjQUN2QmpCLFNBQVMsQ0FBQzZCLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBRUQsTUFBTUMsTUFBTSxHQUFHL0IsTUFBTSxDQUFDZ0MsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRXhCLEtBQUssS0FBSTtjQUN6QyxNQUFNeUIsUUFBUSxHQUFHaEIsS0FBSyxJQUFJVyxZQUFZLENBQUNwQixLQUFLLEVBQUVTLEtBQUssQ0FBQztjQUNwRCxPQUNDbEMsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tDLEtBQUEsQ0FBQW5CLFdBQVc7Z0JBQUNXLEtBQUssRUFBRWUsSUFBSTtnQkFBRVQsR0FBRyxFQUFFLEdBQUdJLElBQUksSUFBSW5CLEtBQUssRUFBRTtnQkFBRUEsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxVQUFVLEVBQUV1QixJQUFJO2dCQUFFQyxRQUFRLEVBQUVBO2NBQVEsR0FDbkdELElBQUksQ0FDUTtZQUVoQixDQUFDLENBQUM7WUFFRixNQUFNRSxTQUFTLEdBQUcsS0FBSztZQUN2QixPQUFPbkQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJDLFNBQVM7Y0FBQSxHQUFLbEI7WUFBSyxHQUFHYyxNQUFNLENBQWE7VUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUEvQyxNQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNbUQsa0JBQWtCLEdBQUFDLE9BQUEsQ0FBQUQsa0JBQUEsR0FBR3BELE1BQUEsQ0FBQU8sT0FBSyxDQUFDK0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDckU7VUFBVyxNQUFNaEQscUJBQXFCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBTyxPQUFLLENBQUNnRCxVQUFVLENBQUNILGtCQUFrQixDQUFDO1VBQUNDLE9BQUEsQ0FBQS9DLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7OztVQ0ozRjs7VUFFQWtELE1BQUEsQ0FBQUMsY0FBQSxDQUFBSixPQUFBO1lBQ0FuQixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkMsSUFBQWxDLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVcsU0FBVXlELFFBQVFBLENBQUM7WUFDcENkLElBQUk7WUFDSmUsUUFBUTtZQUNSL0IsU0FBUztZQUNUZCxRQUFRO1lBQ1JvQixLQUFLO1lBQ0xMLElBQUk7WUFDSitCLEtBQUs7WUFDTDdDO1VBQVMsQ0FDUztZQUNsQixJQUFJbUIsS0FBSyxJQUFJLENBQUMyQixLQUFLLENBQUNDLE9BQU8sQ0FBQzVCLEtBQUssQ0FBQyxFQUFFO2NBQ25DNkIsT0FBTyxDQUFDQyxJQUFJLENBQUMsNkRBQTZELEVBQUU5QixLQUFLLENBQUM7O1lBR25GLE1BQU0rQixlQUFlLEdBQUdBLENBQUEsS0FBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQy9CLEtBQUssRUFBRWdDLE1BQU0sRUFBRWhDLEtBQUssR0FBRyxDQUFDK0IsZUFBZSxFQUFFLENBQUM7WUFFL0MsTUFBTSxDQUFDRSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHcEUsTUFBQSxDQUFBTyxPQUFLLENBQUM4RCxRQUFRLENBQUMsQ0FBQyxHQUFHbkMsS0FBSyxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDb0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3ZFLE1BQUEsQ0FBQU8sT0FBSyxDQUFDOEQsUUFBUSxDQUFDekMsU0FBUyxDQUFDO1lBQy9ELE1BQU00QyxJQUFJLEdBQUcsSUFBQXhFLE1BQUEsQ0FBQXlFLE1BQU0sRUFBQyxFQUFFLENBQUM7WUFDdkJ6RSxNQUFBLENBQUFPLE9BQUssQ0FBQ21FLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCTixRQUFRLENBQUNsQyxLQUFLLENBQUM7WUFDaEIsQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQ2dDLE1BQU0sQ0FBQyxDQUFDO1lBRWxCLE1BQU1TLFlBQVksR0FBRztjQUNwQnRFLE9BQU8sRUFBRUEsQ0FBQSxLQUFLO2dCQUNiLE1BQU15QyxRQUFRLEdBQUcsQ0FBQyxHQUFHcUIsS0FBSyxFQUFFRixlQUFlLEVBQUUsQ0FBQztnQkFDOUNHLFFBQVEsQ0FBQ3RCLFFBQVEsQ0FBQztjQUNuQixDQUFDO2NBQ0RsQixTQUFTLEVBQUUwQyxXQUFXO2NBQ3RCRSxJQUFJO2NBQ0paLEtBQUssRUFBRUEsS0FBSyxJQUFJLEVBQUU7Y0FDbEJnQixlQUFlLEVBQUVBLENBQUEsS0FBTUwsY0FBYyxDQUFDLENBQUNELFdBQVcsQ0FBQztjQUNuRDNDLFVBQVUsRUFBRUYsS0FBSyxJQUFHO2dCQUNuQixNQUFNb0QsUUFBUSxHQUFHVixLQUFLLENBQUNXLE1BQU0sQ0FBQyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBS0EsQ0FBQyxLQUFLdkQsS0FBSyxDQUFDO2dCQUNwRDJDLFFBQVEsQ0FBQ1MsUUFBUSxDQUFDO2dCQUNsQixNQUFNSSxNQUFNLEdBQUc7a0JBQUVyQyxJQUFJO2tCQUFFVixLQUFLLEVBQUUyQztnQkFBUSxDQUFFO2dCQUN4Q2xCLFFBQVEsR0FBRztrQkFBRXNCLE1BQU07a0JBQUVDLGFBQWEsRUFBRUQ7Z0JBQU0sQ0FBRSxDQUFDO2dCQUU3QyxPQUFPSixRQUFRO2NBQ2hCLENBQUM7Y0FDRGpDLElBQUk7Y0FDSndCLFFBQVE7Y0FDUnBELE1BQU0sRUFBRW1ELEtBQUs7Y0FDYnJDLFdBQVcsRUFBRUEsQ0FBQ0wsS0FBSyxFQUFFZ0IsR0FBRyxLQUFJO2dCQUMzQitCLElBQUksQ0FBQ1csT0FBTyxDQUFDMUQsS0FBSyxDQUFDLEdBQUdnQixHQUFHO2NBQzFCLENBQUM7Y0FDRFMsUUFBUSxFQUFFQSxDQUFDekIsS0FBSyxFQUFFUyxLQUFLLEtBQUk7Z0JBQzFCLE1BQU0yQyxRQUFRLEdBQUcsQ0FBQyxHQUFHVixLQUFLLENBQUM7Z0JBQzNCVSxRQUFRLENBQUNwRCxLQUFLLENBQUMsR0FBR1MsS0FBSztnQkFDdkJrQyxRQUFRLENBQUNTLFFBQVEsQ0FBQztjQUNuQixDQUFDO2NBQ0Q1RCxTQUFTLEVBQUVpQixLQUFLLElBQUc7Z0JBQ2xCa0MsUUFBUSxDQUFDbEMsS0FBSyxDQUFDO2dCQUNmLE1BQU0rQyxNQUFNLEdBQUc7a0JBQUVyQyxJQUFJO2tCQUFFVjtnQkFBSyxDQUFFO2dCQUM5QnlCLFFBQVEsR0FBRztrQkFBRXNCLE1BQU07a0JBQUVDLGFBQWEsRUFBRUQ7Z0JBQU0sQ0FBRSxDQUFDO2NBQzlDLENBQUM7Y0FDRGhCLGVBQWU7Y0FDZkUsS0FBSyxFQUFFQSxLQUFLO2NBQ1p0QzthQUNBO1lBRUQsT0FDQzdCLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNMLFFBQUEsQ0FBQWlELGtCQUFrQixDQUFDTSxRQUFRO2NBQUN4QixLQUFLLEVBQUV5QztZQUFZLEdBQy9DM0UsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUE7Y0FBS08sU0FBUyxFQUFFQTtZQUFTLEdBQUdELFFBQVEsQ0FBTyxDQUNkO1VBRWhDIiwiaWdub3JlTGlzdCI6W119