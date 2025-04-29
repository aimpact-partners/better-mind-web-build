System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/reactive@2.0.4/model", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/icons", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ContextMenuContainer, ContextMenuManager, ContextMenu, ContextItem, __beyond_pkg, hmr;
  _export({
    ContextMenuContainer: void 0,
    ContextMenuManager: void 0,
    ContextMenu: void 0,
    ContextItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReactive204Model) {
      dependency_2 = _beyondJsReactive204Model;
    }, function (_pragmateUi100Beta7Base) {
      dependency_3 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
    }, function (_beyondJsKernel0112Styles) {
      dependency_5 = _beyondJsKernel0112Styles;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/context-menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/context-menu');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 648905027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenuContainer = ContextMenuContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ContextMenuContainer({
            children
          }) {
            const [showContextMenu, toggleContextMenu] = _react.default.useState();
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              toggleContextMenu({
                x: event.clientX,
                y: event.clientY
              });
            };
            const closeContextMenu = () => toggleContextMenu(null);
            return _react.default.createElement(_context.ContextMenuContext.Provider, {
              value: {
                closeContextMenu,
                opened: !!showContextMenu,
                position: showContextMenu
              }
            }, _react.default.createElement("span", {
              className: 'context-menu__container',
              onClick: onClick
            }, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./context-menu
      ******************************/

      ims.set('./context-menu', {
        hash: 3144112597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenuManager = exports.ContextMenu = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ContextMenu extends _model.ReactiveModel {
            _event;
            constructor() {
              super();
              this._event = null;
              this.init();
            }
            get event() {
              return this._event;
            }
            get currentTarget() {
              return this._event?.currentTarget || null;
            }
            get target() {
              return this._event?.target || null;
            }
            init() {
              globalThis.oncontextmenu = event => {
                this._event = event;
                const target = event.target; // Assuming target is always an HTMLElement
                const parentContext = target.closest('[data-context]');
                if (target.dataset.context || parentContext) {
                  event.preventDefault();
                  event.stopPropagation();
                  const contextEvent = target.dataset.context || parentContext?.dataset.context;
                  this.triggerEvent('closed');
                  if (contextEvent) {
                    this.triggerEvent(`fired.${contextEvent}`);
                  }
                  return;
                }
                if (target.classList.contains('ds-context-menu') || target.closest('.ds-context-menu')) {
                  this.triggerEvent('closed');
                }
              };
            }
          }
          exports.ContextMenu = ContextMenu;
          /*bundle */
          const ContextMenuManager = exports.ContextMenuManager = new ContextMenu();
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 197579782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContextMenuContext = exports.ContextMenuContext = void 0;
          var _react = require("react");
          const ContextMenuContext = exports.ContextMenuContext = _react.default.createContext({});
          const useContextMenuContext = () => _react.default.useContext(ContextMenuContext);
          exports.useContextMenuContext = useContextMenuContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 2944976739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1105731779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenu = ContextMenu;
          var _react = require("react");
          var _context = require("./context");
          var _useContext = require("./use-context");
          /*bundle*/
          function ContextMenu({
            className,
            unmount,
            children
          }) {
            const container = document.createElement('span');
            const ref = (0, _react.useRef)(null);
            const {
              opened,
              position
            } = (0, _context.useContextMenuContext)();
            (0, _useContext.useContextMenu)(container, ref, position, unmount);
            if (!opened) {
              return null;
            }
            const styles = {
              position: 'absolute',
              top: `${position.y}px`,
              left: `${position.x}px`
            };
            const cls = `pui-context-menu ${className || ''}`;
            return _react.default.createElement("div", {
              style: styles,
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2629990627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextItem = ContextItem;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle */
          function ContextItem({
            onClick,
            icon,
            label
          }) {
            const {
              closeContextMenu
            } = (0, _context.useContextMenuContext)();
            const onClickEvent = async event => {
              event.stopPropagation();
              await onClick(event);
              closeContextMenu();
            };
            return _react.default.createElement("li", {
              onClick: onClickEvent
            }, icon ? _react.default.createElement(_icons.Icon, {
              icon: icon
            }) : _react.default.createElement("span", null), label);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./use-context
      *****************************/

      ims.set('./use-context', {
        hash: 3365751087,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContextMenu = useContextMenu;
          var _react = require("react");
          function useContextMenu(container, ref, position, unmount) {
            (0, _react.useEffect)(() => {
              const close = () => {
                document.removeEventListener('click', close);
                unmount(false);
              };
              const body = document.querySelector('body');
              if (!body) return;
              document.addEventListener('click', close);
              body.appendChild(container);
              const refCurrent = ref.current;
              if (!refCurrent) return;
              const {
                offsetWidth,
                offsetHeight
              } = refCurrent;
              const tWidth = offsetWidth + position.x;
              const tHeight = offsetHeight + position.y;
              if (tWidth > globalThis.innerWidth) {
                refCurrent.style.left = `${position.x - offsetWidth}px`;
              }
              if (tHeight > globalThis.innerHeight) {
                refCurrent.style.top = `${position.y - offsetHeight}px`;
              }
              return () => {
                document.removeEventListener('click', close);
                container.remove();
              };
            }, [position.x, position.y, container, ref, unmount]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "ContextMenuContainer",
        "name": "ContextMenuContainer"
      }, {
        "im": "./context-menu",
        "from": "ContextMenuManager",
        "name": "ContextMenuManager"
      }, {
        "im": "./index",
        "from": "ContextMenu",
        "name": "ContextMenu"
      }, {
        "im": "./item",
        "from": "ContextItem",
        "name": "ContextItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ContextMenuContainer') && _export("ContextMenuContainer", ContextMenuContainer = require ? require('./container').ContextMenuContainer : value);
        (require || prop === 'ContextMenuManager') && _export("ContextMenuManager", ContextMenuManager = require ? require('./context-menu').ContextMenuManager : value);
        (require || prop === 'ContextMenu') && _export("ContextMenu", ContextMenu = require ? require('./index').ContextMenu : value);
        (require || prop === 'ContextItem') && _export("ContextItem", ContextItem = require ? require('./item').ContextItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJDb250ZXh0TWVudUNvbnRhaW5lciIsImNoaWxkcmVuIiwic2hvd0NvbnRleHRNZW51IiwidG9nZ2xlQ29udGV4dE1lbnUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJjbG9zZUNvbnRleHRNZW51IiwiY3JlYXRlRWxlbWVudCIsIkNvbnRleHRNZW51Q29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJvcGVuZWQiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsIl9tb2RlbCIsIkNvbnRleHRNZW51IiwiUmVhY3RpdmVNb2RlbCIsIl9ldmVudCIsImNvbnN0cnVjdG9yIiwiaW5pdCIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJnbG9iYWxUaGlzIiwib25jb250ZXh0bWVudSIsInBhcmVudENvbnRleHQiLCJjbG9zZXN0IiwiZGF0YXNldCIsImNvbnRleHQiLCJjb250ZXh0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImV4cG9ydHMiLCJDb250ZXh0TWVudU1hbmFnZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dE1lbnVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3VzZUNvbnRleHQiLCJ1bm1vdW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0TWVudSIsInN0eWxlcyIsInRvcCIsImxlZnQiLCJjbHMiLCJzdHlsZSIsIl9pY29ucyIsIkNvbnRleHRJdGVtIiwiaWNvbiIsImxhYmVsIiwib25DbGlja0V2ZW50IiwiSWNvbiIsInVzZUVmZmVjdCIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwicmVmQ3VycmVudCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInRXaWR0aCIsInRIZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmUiXSwic291cmNlcyI6WyIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9jb250ZXh0LW1lbnUudHMiLCIvdHMvY29udGV4dC50c3giLCIvZGVmaW5pdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4IiwiL3RzL3VzZS1jb250ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ087VUFBVSxTQUNSRSxvQkFBb0JBLENBQUM7WUFBRUM7VUFBUSxDQUFFO1lBQ3pDLE1BQU0sQ0FBQ0MsZUFBZSxFQUFFQyxpQkFBaUIsQ0FBQyxHQUFHTixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxFQUFtQztZQUU5RixNQUFNQyxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFO2NBQ3RCTixpQkFBaUIsQ0FBQztnQkFBRU8sQ0FBQyxFQUFFSCxLQUFLLENBQUNJLE9BQU87Z0JBQUVDLENBQUMsRUFBRUwsS0FBSyxDQUFDTTtjQUFPLENBQUUsQ0FBQztZQUMxRCxDQUFDO1lBRUQsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTVgsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ3RELE9BQ0NOLE1BQUEsQ0FBQU8sT0FBQSxDQUFBVyxhQUFBLENBQUNoQixRQUFBLENBQUFpQixr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