System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, useLoader, Image, __beyond_pkg, hmr;
  _export({
    useLoader: void 0,
    Image: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_4 = _pragmateUi100Beta7Base;
    }, function (_beyondJsKernel0112Styles) {
      dependency_5 = _beyondJsKernel0112Styles;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/image"
        },
        "type": "code",
        "name": "image"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/image');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 818759056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useImageContext = exports.ImageContext = void 0;
          var React = require("react");
          const ImageContext = exports.ImageContext = React.createContext({});
          const useImageContext = () => React.useContext(ImageContext);
          exports.useImageContext = useImageContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./error/index
      *****************************/

      ims.set('./error/index', {
        hash: 2315952625,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Error() {
            const {
              src,
              onError
            } = (0, _context.useImageContext)();
            const onClickError = event => {
              event.stopPropagation();
              if (onError && typeof onError === 'function') onError(event);
            };
            return _react.default.createElement("div", {
              "data-src": src,
              className: "pui_image__error-container pui-image-error"
            }, onError && _react.default.createElement(_icons.IconButton, {
              onClick: onClickError,
              icon: "refresh"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./hooks/use-loader
      **********************************/

      ims.set('./hooks/use-loader', {
        hash: 4035482128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLoader = useLoader;
          var _react = require("react");
          /*bundle*/
          function useLoader(src, onErrorCallback) {
            const [status, setStatus] = _react.default.useState('loading');
            _react.default.useEffect(() => {
              if (!src) {
                // setStatus('error');
                return;
              }
              const img = new globalThis.Image();
              const onLoad = () => {
                setStatus('ready');
              };
              const onError = e => {
                setStatus('error');
                if (onErrorCallback) onErrorCallback(e);
              };
              img.addEventListener('load', onLoad);
              img.addEventListener('error', onError);
              img.src = src;
              return () => {
                img.removeEventListener('load', onLoad);
                img.removeEventListener('error', onError);
              };
            }, [src]);
            return {
              status
            };
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./img
      *********************/

      ims.set('./img', {
        hash: 3412446156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Img = Img;
          var _react = require("react");
          var _context = require("./context");
          function Img() {
            const {
              src,
              setState,
              state,
              alt,
              status
            } = (0, _context.useImageContext)();
            if (status === 'loading') return _react.default.createElement("div", {
              className: "pui-image-loading"
            });
            if (status === 'error') return _react.default.createElement("div", {
              className: "pui-image-error"
            }, alt);
            return _react.default.createElement("img", {
              src: src
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2150622644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Image = Image;
          var _react = require("react");
          var _context = require("./context");
          var _error = require("./error");
          var _useLoader = require("./hooks/use-loader");
          var _img = require("./img");
          var _sources = require("./sources");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function Image(props = {}) {
            const {
              className,
              onClick,
              children,
              sizeLoading
            } = props;
            const {
              status
            } = (0, _useLoader.useLoader)(props.src, props.onError);
            let cls = `pui-image ${className ? ` ${className}` : ''}`;
            if (status === 'loading') cls += ' pui-image-preload';
            if (status === 'error') cls += ' pui-image-error';
            const properties = {
              ...props,
              className: cls,
              onClick
            };
            ['src', 'alt', 'onError', 'children', 'size', 'loading', 'error', 'sources', 'sizeLoading'].forEach(prop => delete properties[prop]);
            const value = {
              ...props,
              src: props.src,
              status
            };
            const styles = {};
            if (status !== 'ready' && !!sizeLoading && typeof sizeLoading === 'object' && sizeLoading.height && sizeLoading.width) {
              styles.height = sizeLoading.height;
              styles.width = sizeLoading.width;
            }
            const Content = status === 'error' ? _error.Error : _img.Img;
            return _react.default.createElement(_context.ImageContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.picture, {
              ...properties,
              style: styles,
              "data-src": props.src
            }, _react.default.createElement(_sources.Sources, null), _react.default.createElement(Content, {
              ...properties
            }), children));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./interfaces/index
      **********************************/

      ims.set('./interfaces/index', {
        hash: 769792670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./sources/index
      *******************************/

      ims.set('./sources/index', {
        hash: 1995365142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sources = Sources;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function Sources() {
            const {
              sources
            } = (0, _context.useImageContext)();
            if (!sources || !Array.isArray(sources) || !sources.length) return null;
            const output = sources.map(item => _react.default.createElement(_item.Item, {
              key: item.srcSet,
              ...item
            }));
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./sources/item
      ******************************/

      ims.set('./sources/item', {
        hash: 377065182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          function Item(props) {
            if (!props.srcSet) return null;
            let media = "";
            const {
              maxWidth,
              minWidth
            } = props;
            if (!maxWidth && !!minWidth) media = `(min-width: ${minWidth}px)`;
            if (!!maxWidth && !minWidth) media = `(max-width: ${maxWidth}px)`;
            if (!!maxWidth && !!minWidth) media = `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
            const properties = {
              ...props
            };
            ["maxWidth", "minWidth"].forEach(item => delete properties[item]);
            return _react.default.createElement("source", {
              media: media,
              ...properties
            });
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./hooks/use-loader",
        "from": "useLoader",
        "name": "useLoader"
      }, {
        "im": "./index",
        "from": "Image",
        "name": "Image"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useLoader') && _export("useLoader", useLoader = require ? require('./hooks/use-loader').useLoader : value);
        (require || prop === 'Image') && _export("Image", Image = require ? require('./index').Image : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJbWFnZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUltYWdlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9pY29ucyIsIkVycm9yIiwic3JjIiwib25FcnJvciIsIm9uQ2xpY2tFcnJvciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJ1c2VMb2FkZXIiLCJvbkVycm9yQ2FsbGJhY2siLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImltZyIsImdsb2JhbFRoaXMiLCJJbWFnZSIsIm9uTG9hZCIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkltZyIsInNldFN0YXRlIiwic3RhdGUiLCJhbHQiLCJfZXJyb3IiLCJfdXNlTG9hZGVyIiwiX2ltZyIsIl9zb3VyY2VzIiwiX2ZyYW1lck1vdGlvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplTG9hZGluZyIsImNscyIsInByb3BlcnRpZXMiLCJmb3JFYWNoIiwicHJvcCIsInZhbHVlIiwic3R5bGVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJDb250ZW50IiwiUHJvdmlkZXIiLCJtb3Rpb24iLCJwaWN0dXJlIiwic3R5bGUiLCJTb3VyY2VzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaXRlbSIsInNvdXJjZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImtleSIsInNyY1NldCIsIkZyYWdtZW50IiwibWVkaWEiLCJtYXhXaWR0aCIsIm1pbldpZHRoIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHMiLCIvdHMvZXJyb3IvaW5kZXgudHN4IiwiL3RzL2hvb2tzL3VzZS1sb2FkZXIudHN4IiwiL3RzL2ltZy50c3giLCIvdHMvaW5kZXgudHN4IiwiL2luZGV4LnRzIiwiL3RzL3NvdXJjZXMvaW5kZXgudHN4IiwiL3RzL3NvdXJjZXMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFHTyxNQUFNQyxZQUFZLEdBQUFDLE9BQUEsQ0FBQUQsWUFBQSxHQUE0QkYsS0FBSyxDQUFDSSxhQUFhLENBQUMsRUFBYyxDQUFDO1VBQ2pGLE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFnQkwsS0FBSyxDQUFDTSxVQUFVLENBQUNKLFlBQVksQ0FBQztVQUFDQyxPQUFBLENBQUFFLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKOUUsSUFBQUUsTUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sUUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBRU0sU0FBVVMsS0FBS0EsQ0FBQTtZQUNwQixNQUFNO2NBQUVDLEdBQUc7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSCxlQUFlLEdBQUU7WUFFMUMsTUFBTVEsWUFBWSxHQUFJQyxLQUFxQyxJQUFVO2NBQ3BFQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFJSCxPQUFPLElBQUksT0FBT0EsT0FBTyxLQUFLLFVBQVUsRUFBRUEsT0FBTyxDQUFDRSxLQUFLLENBQUM7WUFDN0QsQ0FBQztZQUNELE9BQ0NQLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUEsWUFBZU4sR0FBRztjQUFFTyxTQUFTLEVBQUM7WUFBNEMsR0FDeEVOLE9BQU8sSUFBSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBVSxV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