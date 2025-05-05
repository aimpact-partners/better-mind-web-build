System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CloseButton, useDrawerContext, Drawer, __beyond_pkg, hmr;
  _export({
    CloseButton: void 0,
    useDrawerContext: void 0,
    Drawer: void 0
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
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/drawer"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['framer-motion', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/drawer');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./animations
      ****************************/
      ims.set('./animations', {
        hash: 114192017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
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
            default: {
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

      /******************************
      INTERNAL MODULE: ./close-button
      ******************************/

      ims.set('./close-button', {
        hash: 1994997619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloseButton = CloseButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          function CloseButton({
            className,
            onClick
          }) {
            const {
              onClose
            } = (0, _context.useDrawerContext)();
            const listener = event => {
              if (onClick) return onClick();
              onClose();
            };
            const cls = `pui-drawer-close-button circle${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_icons.IconButton, {
              className: cls,
              icon: 'close',
              onClick: listener
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3738712239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDrawerContext = exports.DrawerContext = void 0;
          var _react = require("react");
          const DrawerContext = exports.DrawerContext = _react.default.createContext({
            open: false,
            onClose: () => {}
          });
          /*bundle*/
          const useDrawerContext = () => {
            const context = _react.default.useContext(DrawerContext);
            if (!context) {
              throw new Error('useDrawerContext must be used within a DrawerProvider');
            }
            return context;
          };
          exports.useDrawerContext = useDrawerContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2417431811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Drawer = Drawer;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          const positionClasses = {
            left: 'pui-drawer-left',
            right: 'pui-drawer-right',
            top: 'pui-drawer-top',
            bottom: 'pui-drawer-bottom'
          };
          /*bundle*/
          function Drawer({
            className,
            position = 'left',
            open,
            onClose,
            children
          }) {
            let drawerClass = open ? `pui-drawer ${positionClasses[position]}` : 'pui-drawer hidden';
            if (className) drawerClass += ' ' + className;
            if (open) drawerClass += ` pui-drawer-open-${position}`;
            if (!open) return;
            const cls = `pui-drawer-container${className ? ` ${className}` : ''}`;
            const onClickContent = e => {
              e.stopPropagation();
            };
            return React.createElement(_context.DrawerContext.Provider, {
              value: {
                open,
                onClose
              }
            }, React.createElement(_framerMotion.motion.div, {
              className: cls,
              onClick: onClose
            }, React.createElement(_framerMotion.motion.div, {
              onClick: onClickContent,
              initial: {
                x: '+100vh',
                opacity: 0
              },
              animate: {
                x: 0,
                opacity: 1
              },
              exit: {
                x: '100vh',
                opacity: 0
              },
              transition: {
                duration: 0.3,
                ease: 'linear'
              },
              className: drawerClass
            }, React.createElement("div", {
              className: 'pui-drawer-content'
            }, children))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./close-button",
        "from": "CloseButton",
        "name": "CloseButton"
      }, {
        "im": "./context",
        "from": "useDrawerContext",
        "name": "useDrawerContext"
      }, {
        "im": "./index",
        "from": "Drawer",
        "name": "Drawer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CloseButton') && _export("CloseButton", CloseButton = require ? require('./close-button').CloseButton : value);
        (require || prop === 'useDrawerContext') && _export("useDrawerContext", useDrawerContext = require ? require('./context').useDrawerContext : value);
        (require || prop === 'Drawer') && _export("Drawer", Drawer = require ? require('./index').Drawer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25zIiwiZXhwb3J0cyIsInNsaWRlRG93biIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZGVmYXVsdCIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwicmVxdWlyZSIsIl9pY29ucyIsIl9jb250ZXh0IiwiQ2xvc2VCdXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwib25DbG9zZSIsInVzZURyYXdlckNvbnRleHQiLCJsaXN0ZW5lciIsImV2ZW50IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJpY29uIiwiRHJhd2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcGVuIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsInBvc2l0aW9uQ2xhc3NlcyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIkRyYXdlciIsInBvc2l0aW9uIiwiY2hpbGRyZW4iLCJkcmF3ZXJDbGFzcyIsIm9uQ2xpY2tDb250ZW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJtb3Rpb24iLCJkaXYiLCJlYXNlIl0sInNvdXJjZXMiOlsiL3RzL2FuaW1hdGlvbnMudHN4IiwiL3RzL2Nsb3NlLWJ1dHRvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPLE1BQU1BLFVBQVUsR0FBQUMsT0FBQSxDQUFBRCxVQUFBLEdBQUc7WUFDekJFLFNBQVMsRUFBRTtjQUNWQyxPQUFPLEVBQUU7Z0JBQUVDLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7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