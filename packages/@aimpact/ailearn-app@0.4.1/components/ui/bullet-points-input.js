System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BulletPointsInputContext, useBulletPointsInputContext, Control, useBulletPoints, BulletPointsInput, ActionsContainer, BulletPointsInputItem, __beyond_pkg, hmr;
  _export({
    BulletPointsInputContext: void 0,
    useBulletPointsInputContext: void 0,
    Control: void 0,
    useBulletPoints: void 0,
    BulletPointsInput: void 0,
    ActionsContainer: void 0,
    BulletPointsInputItem: void 0
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
    }, function (_pragmateUi100Beta7List) {
      dependency_4 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_5 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/ui/bullet-points-input"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/list', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/ui/bullet-points-input');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 323603441,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPointsInputContext = exports.BulletPointsInputContext = void 0;
          var _react = require("react");
          /*bundle */
          const BulletPointsInputContext = exports.BulletPointsInputContext = _react.default.createContext({});
          /*bundle */
          const useBulletPointsInputContext = () => _react.default.useContext(BulletPointsInputContext);
          exports.useBulletPointsInputContext = useBulletPointsInputContext;
        }
      });

      /*************************
      INTERNAL MODULE: ./control
      *************************/

      ims.set('./control', {
        hash: 1043499290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Control = void 0;
          /*bundle*/
          class Control {
            constructor() {}
          }
          exports.Control = Control;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-bullet-points
      *****************************************/

      ims.set('./hooks/use-bullet-points', {
        hash: 273495920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPoints = useBulletPoints;
          var _react = require("react");
          /*bundle */
          function useBulletPoints(handleChange, name, {
            minBulletPoints,
            maxBulletPoints,
            values = ['']
          }) {
            const bulletPoints = !!values.length ? values : [''];
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => {
              handleChange({
                currentTarget: {
                  name,
                  value: updatedBulletPoints
                }
              });
            };
            const handleDragStart = (_, index) => {
              setDraggedIndex(index);
            };
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) setDroppedIndex(droppedPosition);
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              handleBulletPointsChange(updatedBulletPoints);
            };
            const handleKeyDown = (index, event) => {
              const isLastBulletPoint = index === bulletPoints.length - 1;
              const isNotEmpty = bulletPoints[index].trim() !== '';
              if (event.key === 'Tab') {
                event.preventDefault();
                if (isLastBulletPoint && isNotEmpty) {
                  addBulletPoint();
                } else if (!event.shiftKey && event.key === 'Tab') {
                  focusBulletPoint(index + 1);
                } else if (event.key === 'Tab' && event.shiftKey) {
                  focusBulletPoint(index - 1);
                }
              } else if (event.key === 'Backspace' && bulletPoints[index] === '' && bulletPoints.length > 1) {
                event.preventDefault();
                removeBulletPoint(index);
              }
            };
            const addBulletPoint = () => {
              if (bulletPoints.length < maxBulletPoints) {
                handleBulletPointsChange([...bulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                const updatedBulletPoints = [...bulletPoints];
                updatedBulletPoints.splice(index, 1);
                focusBulletPoint(updatedBulletPoints.length - 1);
                handleBulletPointsChange(updatedBulletPoints);
              }
            };
            const focusBulletPoint = index => {
              const inputElement = bulletPointRefs.current[index];
              if (inputElement) {
                inputElement.focus();
                inputElement.setSelectionRange(0, inputElement.value.length);
              }
            };
            const registerBulletPointRef = (index, element) => {
              bulletPointRefs.current[index] = element;
            };
            const canRemoveBulletPoint = bulletPoints.length > minBulletPoints;
            return {
              bulletPoints,
              handleInputChange,
              handleKeyDown,
              addBulletPoint,
              removeBulletPoint,
              registerBulletPointRef,
              canRemoveBulletPoint,
              handleDragOver,
              handleDragEnd,
              handleDragStart
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 112770758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsInput = void 0;
          var _react = require("react");
          var _useBulletPoints = require("./hooks/use-bullet-points");
          var _context = require("./context");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          /* bundle */
          const BulletPointsInput = ({
            children,
            values = [],
            actions,
            className,
            specs,
            // aditional specs to use in Items
            handleChange,
            Item = _item.BulletPointsInputItem,
            disabled = false,
            minBulletPoints = 1,
            maxBulletPoints = 10,
            fieldName
          }) => {
            const hook = (0, _useBulletPoints.useBulletPoints)(handleChange, fieldName, {
              maxBulletPoints,
              minBulletPoints,
              values
            });
            const {
              bulletPoints,
              addBulletPoint
            } = hook;
            const value = {
              hook,
              disabled,
              actions,
              addBulletPoint,
              specs
            };
            const cls = `bullet-points-form${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.BulletPointsInputContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
              className: cls
            }, children, _react.default.createElement(_list.List, {
              className: "bullet-point-items__list list-unstyled",
              items: bulletPoints,
              control: Item,
              container: "div"
            })));
          };
          exports.BulletPointsInput = BulletPointsInput;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 1562726509,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 718966097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionsContainer = ActionsContainer;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function ActionsContainer({
            index,
            fetching,
            setFetching,
            data
          }) {
            const {
              hook,
              actions
            } = (0, _context.useBulletPointsInputContext)();
            const {
              removeBulletPoint,
              canRemoveBulletPoint
            } = hook;
            const items = [];
            if (actions) {
              const keys = Object.keys(actions);
              keys.forEach(key => {
                const attrs = {
                  ...actions[key]
                };
                attrs.disabled = fetching || attrs.requireValue && !data;
                delete attrs.requireValue;
                delete attrs.onClick;
                //@ts-ignore
                const onClick = async event => {
                  try {
                    event.preventDefault();
                    setFetching(true);
                    //@ts-ignore
                    await actions[key].onClick(event, index, data);
                    setFetching(false);
                  } catch (e) {
                    console.error(e);
                  }
                };
                //@ts-ignore
                items.push(_react.default.createElement(_icons.IconButton, {
                  className: "circle",
                  key: `action.${index}.${key}`,
                  ...attrs,
                  onClick: onClick
                }));
              });
            }
            return _react.default.createElement("section", {
              className: "bullet-point__actions flex-container flex-center"
            }, items, canRemoveBulletPoint && _react.default.createElement(_icons.IconButton, {
              icon: "delete",
              title: "Delete",
              className: "delete-bullet-point circle",
              onClick: () => removeBulletPoint(index)
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1969141284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointsInputItem = BulletPointsInputItem;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _actions = require("./actions");
          /*bundle */
          function BulletPointsInputItem({
            data,
            index
          }) {
            const {
              hook,
              disabled
            } = (0, _context.useBulletPointsInputContext)();
            const {
              handleInputChange,
              handleKeyDown,
              registerBulletPointRef,
              handleDragEnd,
              handleDragOver,
              handleDragStart
            } = hook;
            const [fetching, setFetching] = _react.default.useState(false);
            const cls = `bullet-points-item${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement("div", {
              key: index,
              className: cls,
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            }), _react.default.createElement("label", {
              className: "bullet-point-item__content"
            }, _react.default.createElement("span", null, index + 1, "."), _react.default.createElement("input", {
              className: "bullet-points-input",
              type: "text",
              value: data ?? '',
              disabled: disabled,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            })), _react.default.createElement(_actions.ActionsContainer, {
              index: index,
              fetching: fetching,
              setFetching: setFetching,
              data: data
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "BulletPointsInputContext",
        "name": "BulletPointsInputContext"
      }, {
        "im": "./context",
        "from": "useBulletPointsInputContext",
        "name": "useBulletPointsInputContext"
      }, {
        "im": "./control",
        "from": "Control",
        "name": "Control"
      }, {
        "im": "./hooks/use-bullet-points",
        "from": "useBulletPoints",
        "name": "useBulletPoints"
      }, {
        "im": "./index",
        "from": "BulletPointsInput",
        "name": "BulletPointsInput"
      }, {
        "im": "./item/actions",
        "from": "ActionsContainer",
        "name": "ActionsContainer"
      }, {
        "im": "./item/index",
        "from": "BulletPointsInputItem",
        "name": "BulletPointsInputItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BulletPointsInputContext') && _export("BulletPointsInputContext", BulletPointsInputContext = require ? require('./context').BulletPointsInputContext : value);
        (require || prop === 'useBulletPointsInputContext') && _export("useBulletPointsInputContext", useBulletPointsInputContext = require ? require('./context').useBulletPointsInputContext : value);
        (require || prop === 'Control') && _export("Control", Control = require ? require('./control').Control : value);
        (require || prop === 'useBulletPoints') && _export("useBulletPoints", useBulletPoints = require ? require('./hooks/use-bullet-points').useBulletPoints : value);
        (require || prop === 'BulletPointsInput') && _export("BulletPointsInput", BulletPointsInput = require ? require('./index').BulletPointsInput : value);
        (require || prop === 'ActionsContainer') && _export("ActionsContainer", ActionsContainer = require ? require('./item/actions').ActionsContainer : value);
        (require || prop === 'BulletPointsInputItem') && _export("BulletPointsInputItem", BulletPointsInputItem = require ? require('./item/index').BulletPointsInputItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQnVsbGV0UG9pbnRzSW5wdXRDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbnRyb2wiLCJjb25zdHJ1Y3RvciIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJsZW5ndGgiLCJidWxsZXRQb2ludFJlZnMiLCJ1c2VSZWYiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJ1c2VTdGF0ZSIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJ0cmltIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50Iiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIl91c2VCdWxsZXRQb2ludHMiLCJfY29udGV4dCIsIl9saXN0IiwiX2l0ZW0iLCJCdWxsZXRQb2ludHNJbnB1dCIsImNoaWxkcmVuIiwiYWN0aW9ucyIsImNsYXNzTmFtZSIsInNwZWNzIiwiSXRlbSIsIkJ1bGxldFBvaW50c0lucHV0SXRlbSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiaG9vayIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJjb250YWluZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29ucyIsIkFjdGlvbnNDb250YWluZXIiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZGF0YSIsImtleXMiLCJmb3JFYWNoIiwiYXR0cnMiLCJyZXF1aXJlVmFsdWUiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInB1c2giLCJJY29uQnV0dG9uIiwiaWNvbiIsInRpdGxlIiwiX2FjdGlvbnMiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvY29udHJvbC50cyIsIi90cy9ob29rcy91c2UtYnVsbGV0LXBvaW50cy50cyIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFZTztVQUFZLE1BQU1DLHdCQUF3QixHQUFBQyxPQUFBLENBQUFELHdCQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FB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