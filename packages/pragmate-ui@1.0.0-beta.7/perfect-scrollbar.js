System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "perfect-scrollbar@1.5.6", "pragmate-ui@1.0.0-beta.7/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ScrollContainer, __beyond_pkg, hmr;
  _export("ScrollContainer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_perfectScrollbar2) {
      dependency_3 = _perfectScrollbar2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_4 = _pragmateUi100Beta7Base;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/perfect-scrollbar"
        },
        "type": "code",
        "name": "perfect-scrollbar"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['perfect-scrollbar', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/perfect-scrollbar');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 1081224750,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ScrollContainer = ScrollContainer;
          var _react = require("react");
          var _perfectScrollbar = require("perfect-scrollbar");
          /*bundle*/ /**
                      * It's a React component that uses the PerfectScrollbar library to create a scrollbar that can be
                      * customized with CSS.
                      * @param {props} props - TProps
                      * @returns A function that returns a JSX.Element
                      */
          function ScrollContainer(props) {
            const ref = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const control = ref.current;
              const scrollbar = new _perfectScrollbar.default(control, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
              });
              const handleOnScrollY = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const handleOnScrollX = event => {
                props.onScrollY(event, control, scrollbar);
              };
              const {
                onScrollY,
                onScrollX
              } = props;
              if (onScrollY) control.addEventListener("ps-scroll-y", handleOnScrollY);
              if (onScrollX) control.addEventListener("ps-scroll-y", handleOnScrollX);
              return () => {
                scrollbar.destroy();
                if (onScrollY) ref.current.removeEventListener("ps-scroll-y", onScrollY);
                if (onScrollX) ref.current.removeEventListener("ps-scroll-y", handleOnScrollX);
              };
            }, []);
            let cls = props.className ? `beyond-perfect-scrollbar ${props.className}` : "beyond-perfect-scrollbar";
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, props.children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 1532264377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "ScrollContainer",
        "name": "ScrollContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ScrollContainer') && _export("ScrollContainer", ScrollContainer = require ? require('./container').ScrollContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJTY3JvbGxDb250YWluZXIiLCJwcm9wcyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNvbnRyb2wiLCJjdXJyZW50Iiwic2Nyb2xsYmFyIiwiZGVmYXVsdCIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwiaGFuZGxlT25TY3JvbGxZIiwiZXZlbnQiLCJvblNjcm9sbFkiLCJoYW5kbGVPblNjcm9sbFgiLCJvblNjcm9sbFgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbHMiLCJjbGFzc05hbWUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9kZWZpbml0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxpQkFBQSxHQUFBRCxPQUFBO1VBU08sV0FOUDs7Ozs7O1VBTWlCLFNBQ1JFLGVBQWVBLENBQUNDLEtBQWE7WUFDcEMsTUFBTUMsR0FBRyxHQUFxQyxJQUFBTCxNQUFBLENBQUFNLE1BQU0sRUFBQyxJQUFJLENBQUM7WUFFMUQsSUFBQU4sTUFBQSxDQUFBTyxTQUFTLEVBQUMsTUFBbUI7Y0FDM0IsTUFBTUMsT0FBTyxHQUFtQkgsR0FBRyxDQUFDSSxPQUFPO2NBRTNDLE1BQU1DLFNBQVMsR0FBcUIsSUFBSVIsaUJBQUEsQ0FBQVMsT0FBZ0IsQ0FBQ0gsT0FBTyxFQUFFO2dCQUNoRUksVUFBVSxFQUFFLENBQUM7Z0JBQ2JDLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCQyxrQkFBa0IsRUFBRTtlQUNyQixDQUFDO2NBQ0YsTUFBTUMsZUFBZSxHQUFJQyxLQUFLLElBQVU7Z0JBQ3RDWixLQUFLLENBQUNhLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFUixPQUFPLEVBQUVFLFNBQVMsQ0FBQztjQUM1QyxDQUFDO2NBRUQsTUFBTVEsZUFBZSxHQUFJRixLQUFLLElBQVU7Z0JBQ3RDWixLQUFLLENBQUNhLFNBQVMsQ0FBQ0QsS0FBSyxFQUFFUixPQUFPLEVBQUVFLFNBQVMsQ0FBQztjQUM1QyxDQUFDO2NBQ0QsTUFBTTtnQkFBRU8sU0FBUztnQkFBRUU7Y0FBUyxDQUFFLEdBQUdmLEtBQUs7Y0FDdEMsSUFBSWEsU0FBUyxFQUFFVCxPQUFPLENBQUNZLGdCQUFnQixDQUFDLGFBQWEsRUFBRUwsZUFBZSxDQUFDO2NBQ3ZFLElBQUlJLFNBQVMsRUFBRVgsT0FBTyxDQUFDWSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUVGLGVBQWUsQ0FBQztjQUN2RSxPQUFPLE1BQUs7Z0JBQ1ZSLFNBQVMsQ0FBQ1csT0FBTyxFQUFFO2dCQUVuQixJQUFJSixTQUFTLEVBQUVaLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDYSxtQkFBbUIsQ0FBQyxhQUFhLEVBQUVMLFNBQVMsQ0FBQztnQkFDeEUsSUFBSUUsU0FBUyxFQUNYZCxHQUFHLENBQUNJLE9BQU8sQ0FBQ2EsbUJBQW1CLENBQUMsYUFBYSxFQUFFSixlQUFlLENBQUM7Y0FDbkUsQ0FBQztZQUNILENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixJQUFJSyxHQUFHLEdBQVduQixLQUFLLENBQUNvQixTQUFTLEdBQzdCLDRCQUE0QnBCLEtBQUssQ0FBQ29CLFNBQVMsRUFBRSxHQUM3QywwQkFBMEI7WUFDOUIsT0FDRXhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBYyxhQUFBO2NBQUtwQixHQUFHLEVBQUVBLEdBQUc7Y0FBRW1CLFNBQVMsRUFBRUQ7WUFBRyxHQUMxQm5CLEtBQUssQ0FBQ3NCLFFBQVEsQ0FDWDtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7O1VDNUNHIiwiaWdub3JlTGlzdCI6W119