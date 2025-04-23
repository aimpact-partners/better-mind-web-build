System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_3 = _pragmateUi100Beta7Base;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2], ['pragmate-ui/base', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 2033348794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function DraggableList({
            specs,
            control,
            index,
            ...props
          }) {
            const [items, setItems] = _react.default.useState(props.items);
            const onReorder = items => {
              setItems(items);
              if (props.onReorder) props.onReorder(items);
            };
            const output = items.map((item, idx) => _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              key: `${item}`
            }, item));
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              values: items,
              onReorder: onReorder
            }, output);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./html-attributes
      *********************************/

      ims.set('./html-attributes', {
        hash: 1750835586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getAttributes = getAttributes;
          /**
           * A Set containing common HTML attributes that are used to control element behavior and information.
           * This Set is utilized to filter properties from objects to ensure only valid HTML attributes,
           * including accessibility attributes (those starting with 'aria-') and custom data attributes (those starting with 'data-'),
           * are included. These attributes can influence the HTML rendering and are recognized by web browsers.
           */
          const htmlAttributes = new Set(['id', 'class', 'style', 'title', 'data', 'value', 'href', 'src', 'alt', 'onclick', 'onchange', 'onmouseover', 'disabled', 'readonly', 'type', 'placeholder', 'name', 'method', 'action', 'checked', 'selected', 'width', 'height', 'maxlength', 'minlength', 'pattern', 'step', 'required', 'autocomplete', 'autofocus', 'multiple', 'form', 'size', 'srcset', 'for', 'tabindex', 'role', 'aria-label']);
          /**
           * Filters the properties of an object to include only those that are recognized HTML attributes, with the
           * capability to explicitly exclude certain attributes even if they are valid. The function checks for standard
           * attributes defined in the `htmlAttributes` set, and dynamically accepts any properties that begin with 'aria-'
           * or 'data-'. It excludes any properties listed in the `exclusions` array, regardless of their validity as HTML attributes.
           *
           * @param {Record<string, any>} props - The object containing properties that may or may not correspond to valid HTML attributes.
           * @param {string[]} exclusions - Array of property names to be excluded from the returned object, even if they are valid HTML attributes.
           * @returns {Record<string, any>} A new object containing only the properties that are valid HTML attributes and not listed in exclusions.
           */
          function getAttributes(props, exclusions = []) {
            const filtered = {};
            const exclusionSet = new Set(exclusions); // Convert exclusions array to a Set for efficient lookup
            for (const prop in props) {
              // Check for known attributes or attributes starting with 'aria-' or 'data-' and not in the exclusions list
              if ((htmlAttributes.has(prop) || prop.startsWith('aria-') || prop.startsWith('data-')) && !exclusionSet.has(prop)) {
                filtered[prop] = props[prop];
              }
            }
            return filtered;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2732568007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _draggable = require("./draggable");
          var _item = require("./item");
          var _dragable = require("./item/dragable");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function List({
            items,
            children,
            control,
            empty,
            ...props
          }) {
            const {
              className,
              index = 'id',
              specs,
              draggable,
              childrenPosition = 'top',
              as = 'ul',
              // @deprecated
              container = 'ul'
            } = props;
            const Container = _framerMotion.motion[as];
            const onTop = childrenPosition === 'top';
            const ItemControl = draggable ? _dragable.DraggableItem : _item.ItemList;
            if (draggable) return _react.default.createElement(_draggable.DraggableList, {
              items: items,
              ...props
            });
            if (!Array.isArray(items)) {
              console.warn('Invalid "items" prop: Expected an array. Please review the component usage and ensure the "items" prop is correctly passed as an array.');
              return null;
            }
            if (control) {
              // console.warn(
              // 	'The "control" prop is deprecated and will be removed in future versions. Please use children to define the item components.',
              // );
            }
            if (items.length === 0 && empty) {
              const Control = empty;
              return _react.default.createElement(Control, null);
            }
            const renderItems = control ? items.map((item, idx) => {
              return _react.default.createElement(ItemControl, {
                index: index,
                key: idx,
                specs: specs,
                control: control,
                item: item,
                idx: idx
              });
            }) : items.map((item, idx) => _react.Children.map(children, child => (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
              key: idx,
              index,
              specs,
              item,
              idx
            }) : child));
            const top = onTop && children ? children : null;
            const bottom = !onTop && children ? children : null;
            return _react.default.createElement(Container, {
              ...props,
              className: className
            }, top, renderItems, bottom);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/dragable
      *******************************/

      ims.set('./item/dragable', {
        hash: 3472479063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableItem = DraggableItem;
          var _framerMotion = require("framer-motion");
          var _react = require("react");
          var _ = require("./");
          function DraggableItem({
            as,
            ...props
          }) {
            const {
              item,
              idx
            } = props;
            const attrs = {
              as
            };
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              key: idx,
              ...attrs
            }, _react.default.createElement(_.ItemList, {
              ...props,
              item: item,
              idx: idx,
              as: 'span'
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./item/html
      ***************************/

      ims.set('./item/html', {
        hash: 2640674525,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HTMLItem = HTMLItem;
          var _react = require("react");
          var _htmlAttributes = require("../html-attributes");
          function HTMLItem({
            as = 'li',
            children,
            ...props
          }) {
            const Control = as;
            const {
              item
            } = props;
            const attrs = (0, _htmlAttributes.getAttributes)(props, ['item', 'data']);
            return _react.default.createElement(Control, {
              ...attrs
            }, item);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1844515837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemList = ItemList;
          var _react = require("react");
          var _html = require("./html");
          /**
           * Componente que renderiza un elemento de la lista.
           *
           * @template T - El tipo de los elementos en la lista.
           * @template U - Tipo de las propiedades adicionales opcionales (por defecto un objeto genérico).
           *
           * @param props - Las propiedades de `ItemList`.
           * @returns El elemento renderizado.
           */
          function ItemList({
            index,
            item,
            idx,
            as = 'li',
            control,
            specs = {}
          }) {
            const Control = typeof control === 'string' ? _html.HTMLItem : control;
            const elementProps = {
              key: item[index] || idx,
              index: idx,
              item,
              data: item,
              ...specs,
              as: typeof control === 'string' ? control : undefined
            };
            const element = _react.default.createElement(Control, elementProps);
            return element;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2311667739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "List",
        "name": "List"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'List') && _export("List", List = require ? require('./index').List : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJpbmRleCIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uUmVvcmRlciIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJjcmVhdGVFbGVtZW50IiwiUmVvcmRlciIsIkl0ZW0iLCJ2YWx1ZSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2hpbGRyZW4iLCJlbXB0eSIsImNsYXNzTmFtZSIsImRyYWdnYWJsZSIsImNoaWxkcmVuUG9zaXRpb24iLCJhcyIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsIm1vdGlvbiIsIm9uVG9wIiwiSXRlbUNvbnRyb2wiLCJEcmFnZ2FibGVJdGVtIiwiSXRlbUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwid2FybiIsImxlbmd0aCIsIkNvbnRyb2wiLCJyZW5kZXJJdGVtcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInRvcCIsImJvdHRvbSIsIl8iLCJhdHRycyIsIl9odG1sQXR0cmlidXRlcyIsIkhUTUxJdGVtIiwiX2h0bWwiLCJlbGVtZW50UHJvcHMiLCJkYXRhIiwidW5kZWZpbmVkIiwiZWxlbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi90cy9kcmFnZ2FibGUudHN4IiwiL3RzL2h0bWwtYXR0cmlidXRlcy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS9kcmFnYWJsZS50c3giLCIvdHMvaXRlbS9odG1sLnRzeCIsIi90cy9pdGVtL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFHTSxTQUFVRSxhQUFhQSxDQUFnQztZQUM1REMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTCxHQUFHQztVQUFLLENBQ3lCO1lBQ2pDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQ0osS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFFckQsTUFBTUksU0FBUyxHQUFJSixLQUFVLElBQUk7Y0FDaENDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBRWYsSUFBSUQsS0FBSyxDQUFDSyxTQUFTLEVBQUVMLEtBQUssQ0FBQ0ssU0FBUyxDQUFDSixLQUFLLENBQUM7WUFDNUMsQ0FBQztZQUVELE1BQU1LLE1BQU0sR0FBZ0JMLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsR0FBRyxLQUMvQ2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBTyxhQUFBLENBQUNmLGFBQUEsQ0FBQWdCLE9BQU8sQ0FBQ0MsSUFBSTtjQUFDQyxLQUFLLEVBQUVMLElBQUk7Y0FBRU0sR0FBRyxFQUFFLEdBQUdOLElBQXlCO1lBQUUsR0FDNURBLElBQTRCLENBRTlCLENBQUM7WUFFRixPQUNDZixNQUFBLENBQUFVLE9BQUEsQ0FBQU8sYUFBQSxDQUFDZixhQUFBLENBQUFnQixPQUFPLENBQUNJLEtBQUs7Y0FBQ0MsTUFBTSxFQUFFZixLQUFLO2NBQUVJLFNBQVMsRUFBRUE7WUFBUyxHQUNoREMsTUFBTSxDQUNRO1VBRWxCOzs7Ozs7Ozs7Ozs7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