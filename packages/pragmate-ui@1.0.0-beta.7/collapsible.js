System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base", "clsx@2.1.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    Item: void 0,
    Container: void 0,
    Accordion: void 0,
    CollapsibleContent: void 0,
    CollapsibleHeader: void 0,
    CollapsibleContainer: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Base) {
      dependency_4 = _pragmateUi100Beta7Base;
    }, function (_clsx2) {
      dependency_5 = _clsx2;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['clsx', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/collapsible');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./accordion
      ***************************/
      ims.set('./accordion', {
        hash: 2388911095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AccordionContext = exports.Accordion = void 0;
          exports.Container = Container;
          exports.Header = Header;
          exports.Item = Item;
          exports.useAccordionContext = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const AccordionContext = exports.AccordionContext = _react.default.createContext({});
          const useAccordionContext = () => _react.default.useContext(AccordionContext);
          exports.useAccordionContext = useAccordionContext;
          /*bundle */
          function Header({
            disabled,
            children,
            index
          }) {
            const {
              setOpened,
              opened
            } = useAccordionContext();
            const onClick = event => {
              event.stopPropagation();
              event.currentTarget.classList.toggle('accordion-item__header-icon--opened');
              setOpened(index === opened ? false : index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            const icon = opened ? 'expandMore' : 'chevronRight';
            return _react.default.createElement("header", {
              ...attrs,
              className: "accordion-item__header"
            }, children, _react.default.createElement("div", {
              className: "accordion-item__header-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: icon,
              className: "accordion-item__icon-button circle"
            })));
          }
          /*bundle */
          function Item({
            disabled,
            children,
            title,
            index
          }) {
            const {
              opened
            } = useAccordionContext();
            let cls = `accordion-item${index === opened ? ` accordion-item--opened` : ``}`;
            if (disabled) cls += ` accordion-item--disabled`;
            return _react.default.createElement("article", {
              className: cls
            }, title && _react.default.createElement(Header, {
              disabled: disabled,
              index: index
            }, title), _react.default.createElement("div", {
              className: "accordion-item__content"
            }, children));
          }
          /*bundle */
          function Container({
            children,
            active = 0
          }) {
            const [opened, setOpened] = _react.default.useState(active);
            const onChange = event => {};
            const value = {
              onChange,
              opened,
              setOpened
            };
            _react.default.useEffect(() => setOpened(active), [active]);
            const output = [];
            _react.default.Children.map(children, (child, index) => {
              if (!child) return null;
              output.push(_react.default.cloneElement(child, {
                index,
                key: `item$.${index}`
              }));
            });
            return _react.default.createElement(AccordionContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "accordion"
            }, output));
          }
          /*bundle */
          const Accordion = exports.Accordion = {
            Header,
            Item,
            Container
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 4052548813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContent({
            className,
            children
          }) {
            const {
              open,
              toggleable
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
            if (!toggleable) return null;
            return _react.default.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4042704803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var _react = require("react");
          const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
          const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 3322904955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _clsx = require("clsx");
          /*bundle */
          function CollapsibleHeader({
            children,
            className,
            toggleTitle = true
          }) {
            const {
              setOpen,
              onToggle,
              open,
              toggleable
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (!onToggle) {
                setOpen(!open);
                return;
              }
              if (await onToggle(!open)) setOpen(!open);
            };
            const cls = (0, _clsx.default)('collapsible__header', className, {
              open
            });
            const clsButton = (0, _clsx.default)('collapsible__button', 'collapsible__button--circle', {
              'collapsible__button--opened': open
            });
            return _react.default.createElement("header", {
              className: cls,
              onClick: onClick,
              "aria-expanded": open
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, children), toggleable && _react.default.createElement(_icons.IconButton, {
              className: clsButton,
              icon: "left",
              "aria-label": open ? 'Collapse section' : 'Expand section',
              "aria-expanded": open
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4233091753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContainer = CollapsibleContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContainer({
            children,
            onToggle,
            open = false,
            className,
            toggleable = true,
            data
          }) {
            open;
            const [opened, setOpen] = _react.default.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle,
              toggleable,
              ...data
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            _react.default.useEffect(() => {
              setOpen(open);
            }, [open]);
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
              className: cls
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1378472229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./accordion",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./accordion",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./accordion",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./accordion",
        "from": "Accordion",
        "name": "Accordion"
      }, {
        "im": "./content",
        "from": "CollapsibleContent",
        "name": "CollapsibleContent"
      }, {
        "im": "./header",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./index",
        "from": "CollapsibleContainer",
        "name": "CollapsibleContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./accordion').Header : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./accordion').Item : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./accordion').Container : value);
        (require || prop === 'Accordion') && _export("Accordion", Accordion = require ? require('./accordion').Accordion : value);
        (require || prop === 'CollapsibleContent') && _export("CollapsibleContent", CollapsibleContent = require ? require('./content').CollapsibleContent : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./header').CollapsibleHeader : value);
        (require || prop === 'CollapsibleContainer') && _export("CollapsibleContainer", CollapsibleContainer = require ? require('./index').CollapsibleContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsInB1c2giLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJQcm92aWRlciIsIkFjY29yZGlvbiIsIl9jb250ZXh0IiwiQ29sbGFwc2libGVDb250ZW50Iiwib3BlbiIsInRvZ2dsZWFibGUiLCJ1c2VDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRleHQiLCJfY2xzeCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidG9nZ2xlVGl0bGUiLCJzZXRPcGVuIiwib25Ub2dnbGUiLCJjbHNCdXR0b24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY2NvcmRpb24udHN4IiwiL3RzL2NvbnRlbnQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6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