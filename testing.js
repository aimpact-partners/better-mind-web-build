System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.4/page", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, AnimatedContainer, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AnimatedContainer: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_4 = _beyondJsReact18Widgets114Page;
    }, function (_react2) {
      dependency_5 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.1"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.5"], ["driver.js", "1.3.5"], ["firebase", "11.6.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/better-mind", "0.0.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/better-mind@0.0.1/testing"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['framer-motion', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['react', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-testing-page",
        "vspecifier": "@aimpact/better-mind@0.0.1/testing",
        "is": "page",
        "route": "/testing"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/better-mind@0.0.1/testing');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./animations/framer
      ***********************************/
      ims.set('./animations/framer', {
        hash: 359108455,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.framerAnimations = void 0;
          var _presets = require("./presets");
          const framerAnimations = exports.framerAnimations = Object.entries(_presets.animationPresets).reduce((acc, [key, preset]) => {
            acc[key] = {
              states: {
                ...preset.states
              },
              transition: preset.transition
            };
            return acc;
          }, {});
        }
      });

      /************************************
      INTERNAL MODULE: ./animations/presets
      ************************************/

      ims.set('./animations/presets', {
        hash: 2895674458,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animationPresets = void 0;
          const animationPresets = exports.animationPresets = {
            fadeIn: {
              states: {
                hidden: {
                  opacity: 0
                },
                visible: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                }
              },
              transition: {
                type: 'tween',
                duration: 0.5
              }
            },
            fadeInTop: {
              states: {
                hidden: {
                  opacity: 0,
                  y: -20
                },
                visible: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  y: -20
                }
              },
              transition: {
                type: 'tween',
                duration: 0.5
              }
            },
            fadeInBottom: {
              states: {
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  y: 20
                }
              },
              transition: {
                type: 'tween',
                duration: 0.5
              }
            },
            slideYFade: {
              states: {
                hidden: {
                  opacity: 0,
                  y: '-100%'
                },
                visible: {
                  opacity: 1,
                  y: '0%'
                },
                exit: {
                  opacity: 0,
                  y: '100%'
                } // sale hacia abajo
              },
              transition: {
                type: 'tween',
                duration: 0.5,
                ease: 'easeInOut'
              }
            },
            fadeInUpOut: {
              states: {
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0
                },
                exit: {
                  opacity: 0,
                  y: -20
                }
              },
              transition: {
                type: 'tween',
                duration: 0.5,
                ease: 'easeInOut'
              }
            },
            fadeInLeft: {
              states: {
                hidden: {
                  opacity: 0,
                  x: -20
                },
                visible: {
                  opacity: 1,
                  x: 0
                },
                exit: {
                  opacity: 0,
                  x: -20
                }
              },
              transition: {
                type: 'tween',
                duration: 0.5
              }
            },
            fadeInRight: {
              states: {
                hidden: {
                  opacity: 0,
                  x: 20
                },
                visible: {
                  opacity: 1,
                  x: 0
                },
                exit: {
                  opacity: 0,
                  x: 20
                }
              },
              transition: {
                type: 'tween',
                duration: 0.5
              }
            },
            slideInTop: {
              states: {
                hidden: {
                  y: -100
                },
                visible: {
                  y: 0
                },
                exit: {
                  y: -100
                }
              },
              transition: {
                type: 'tween',
                duration: 0.6
              }
            },
            slideInBottom: {
              states: {
                hidden: {
                  y: 100
                },
                visible: {
                  y: 0
                },
                exit: {
                  y: 100
                }
              },
              transition: {
                type: 'tween',
                duration: 0.6
              }
            },
            slideInLeft: {
              states: {
                hidden: {
                  x: -100
                },
                visible: {
                  x: 0
                },
                exit: {
                  x: -100
                }
              },
              transition: {
                type: 'tween',
                duration: 0.6
              }
            },
            slideInRight: {
              states: {
                hidden: {
                  x: 100
                },
                visible: {
                  x: 0
                },
                exit: {
                  x: 100
                }
              },
              transition: {
                type: 'tween',
                duration: 0.6
              }
            },
            zoomIn: {
              states: {
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1
                },
                exit: {
                  scale: 0.8,
                  opacity: 0
                }
              },
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
              }
            },
            rotateIn: {
              states: {
                hidden: {
                  rotate: -90,
                  opacity: 0
                },
                visible: {
                  rotate: 0,
                  opacity: 1
                },
                exit: {
                  rotate: 90,
                  opacity: 0
                }
              },
              transition: {
                type: 'tween',
                duration: 0.7
              }
            },
            bounceIn: {
              states: {
                hidden: {
                  scale: 0.3,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1
                },
                exit: {
                  scale: 0.3,
                  opacity: 0
                }
              },
              transition: {
                type: 'spring',
                stiffness: 500,
                damping: 30
              }
            },
            flipInX: {
              states: {
                hidden: {
                  rotateX: -90,
                  opacity: 0
                },
                visible: {
                  rotateX: 0,
                  opacity: 1
                },
                exit: {
                  rotateX: 90,
                  opacity: 0
                }
              },
              transition: {
                type: 'tween',
                duration: 0.8
              }
            },
            flipInY: {
              states: {
                hidden: {
                  rotateY: -90,
                  opacity: 0
                },
                visible: {
                  rotateY: 0,
                  opacity: 1
                },
                exit: {
                  rotateY: 90,
                  opacity: 0
                }
              },
              transition: {
                type: 'tween',
                duration: 0.8
              }
            },
            collapse: {
              states: {
                hidden: {
                  height: 0,
                  opacity: 0
                },
                visible: {
                  height: 'auto',
                  opacity: 1
                },
                exit: {
                  height: 0,
                  opacity: 0
                }
              },
              transition: {
                type: 'tween',
                duration: 0.4
              }
            }
          };
        }
      });

      /**********************************
      INTERNAL MODULE: ./animations/types
      **********************************/

      ims.set('./animations/types', {
        hash: 1175860136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 1927493790,
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
            show() {}
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
        hash: 1793251939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          class StoreManager {}
          exports.StoreManager = StoreManager;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 293436292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function AnimatedContainer({
            className,
            children,
            as = 'span',
            ...props
          }) {
            const Component = (0, _framerMotion.motion)(as);
            const attrs = {
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.5
                }
              },
              initial: {
                opacity: 0
              },
              exit: {
                transition: {
                  duration: 0.5,
                  width: 0
                },
                opacity: 0
              },
              ...props
            };
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              ...attrs
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1142349699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          var _container = require("./container");
          /*bundle*/
          function View() {
            const [isVisible, setIsVisible] = React.useState(false);
            const onClick = () => setIsVisible(!isVisible);
            return React.createElement(React.Fragment, null, React.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, isVisible ? React.createElement(_container.AnimatedContainer, {
              as: "div",
              className: "page-container",
              onClick: onClick
            }, React.createElement(_framerMotion.motion.h2, null, "Hello i'm a page 2")) : React.createElement(_container.AnimatedContainer, {
              as: "div",
              className: "page-container-2",
              onClick: onClick
            }, React.createElement(_framerMotion.motion.h2, null, "Hello i'm a page 2"))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./views/container').AnimatedContainer : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcHJlc2V0cyIsInJlcXVpcmUiLCJmcmFtZXJBbmltYXRpb25zIiwiZXhwb3J0cyIsIk9iamVjdCIsImVudHJpZXMiLCJhbmltYXRpb25QcmVzZXRzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwicHJlc2V0Iiwic3RhdGVzIiwidHJhbnNpdGlvbiIsImZhZGVJbiIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwiZXhpdCIsInR5cGUiLCJkdXJhdGlvbiIsImZhZGVJblRvcCIsInkiLCJmYWRlSW5Cb3R0b20iLCJzbGlkZVlGYWRlIiwiZWFzZSIsImZhZGVJblVwT3V0IiwiZmFkZUluTGVmdCIsIngiLCJmYWRlSW5SaWdodCIsInNsaWRlSW5Ub3AiLCJzbGlkZUluQm90dG9tIiwic2xpZGVJbkxlZnQiLCJzbGlkZUluUmlnaHQiLCJ6b29tSW4iLCJzY2FsZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJyb3RhdGVJbiIsInJvdGF0ZSIsImJvdW5jZUluIiwiZmxpcEluWCIsInJvdGF0ZVgiLCJmbGlwSW5ZIiwicm90YXRlWSIsImNvbGxhcHNlIiwiaGVpZ2h0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9wYWdlIiwiX3N0b3JlIiwiX3ZpZXdzIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiX3JlYWN0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsInByb3BzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiYXR0cnMiLCJhbmltYXRlIiwiaW5pdGlhbCIsIndpZHRoIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJsYXlvdXQiLCJSZWFjdCIsIl9jb250YWluZXIiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJGcmFnbWVudCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJoMiJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb25zL2ZyYW1lci50cyIsIi90cy9hbmltYXRpb25zL3ByZXNldHMudHMiLCIvdHlwZXMudHMiLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNQyxnQkFBZ0IsR0FBQUMsT0FBQSxDQUFBRCxnQkFBQSxHQUFzQkUsTUFBTSxDQUFDQyxPQUFPLENBQUNMLFFBQUEsQ0FBQU0sZ0JBQWdCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxLQUFJO1lBQ2pIRixHQUFHLENBQUNDLEdBQUcsQ0FBQyxHQUFHO2NBQ1ZFLE1BQU0sRUFBRTtnQkFBRSxHQUFHRCxNQUFNLENBQUNDO2NBQU0sQ0FBRTtjQUM1QkMsVUFBVSxFQUFFRixNQUFNLENBQUNFO2FBQ25CO1lBQ0QsT0FBT0osR0FBRztVQUNYLENBQUMsRUFBRSxFQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BwQixNQUFNRixnQkFBZ0IsR0FBQUgsT0FBQSxDQUFBRyxnQkFBQSxHQUFzQjtZQUNsRE8sTUFBTSxFQUFFO2NBQ1BGLE1BQU0sRUFBRTtnQkFDUEcsTUFBTSxFQUFFO2tCQUFFQyxPQUFPLEVBQUU7Z0JBQUMsQ0FBRTtnQkFDdEJDLE9BQU8sRUFBRTtrQkFBRUQsT0FBTyxFQUFFO2dCQUFDLENBQUU7Z0JBQ3ZCRSxJQUFJLEVBQUU7a0JBQUVGLE9BQU8s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