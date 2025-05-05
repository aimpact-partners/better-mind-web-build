System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/ripple", "tippy.js@6.3.7"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, IButtonProps, ConditionalContainer, useMediaQuery, HtmlWrapper, Link, ResponsiveContainer, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    IButtonProps: void 0,
    ConditionalContainer: void 0,
    useMediaQuery: void 0,
    HtmlWrapper: void 0,
    Link: void 0,
    ResponsiveContainer: void 0,
    Spinner: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_3 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Spinner) {
      dependency_5 = _pragmateUi100Beta7Spinner;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Ripple) {
      dependency_7 = _pragmateUi100Beta7Ripple;
    }, function (_tippyJs) {
      dependency_8 = _tippyJs;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7], ['tippy.js', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 686490675,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ButtonGroup({
            orientation = 'row',
            children,
            onChange,
            ...props
          }) {
            const [selected, setSelected] = _react.default.useState(props.selected);
            let cls = `pui-button-group`;
            cls += orientation ? ` pui-button-group ${orientation}` : '';
            let disabled = !!props.disabled;
            _react.default.useEffect(() => {
              setSelected(props.selected);
            }, [props.selected]);
            const childrenWithProps = _react.default.Children.map(children, (child, index) => {
              if (_react.default.isValidElement(child)) {
                return _react.default.cloneElement(child, {
                  index,
                  disabled,
                  onClick: onChange
                }); // Passing the index as a prop
              }
            });
            return _react.default.createElement(_context.ButtonGroupContext.Provider, {
              value: {
                selected,
                setSelected
              }
            }, _react.default.createElement("div", {
              className: cls
            }, childrenWithProps));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./button-group/context
      **************************************/

      ims.set('./button-group/context', {
        hash: 2338960457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useButtonGroupContext = exports.ButtonGroupContext = void 0;
          var _react = require("react");
          const ButtonGroupContext = exports.ButtonGroupContext = _react.default.createContext({});
          const useButtonGroupContext = () => _react.default.useContext(ButtonGroupContext);
          exports.useButtonGroupContext = useButtonGroupContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./button-group/type
      ***********************************/

      ims.set('./button-group/type', {
        hash: 3900894228,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./button/button
      *******************************/

      ims.set('./button/button', {
        hash: 28591129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _context = require("../button-group/context");
          var _useRipple = require("../use-ripple");
          const {
            forwardRef
          } = _react.default;
          /*bundle*/
          const Button = exports.Button = forwardRef((props, reference) => {
            const {
              className,
              onClick,
              data,
              label,
              title,
              children,
              icon,
              loading,
              block,
              index,
              fetching = false,
              variant = 'default',
              bordered = false,
              sizing = 'md',
              disabled = false,
              ...otherProps
            } = props;
            const context = _react.default.useContext(_context.ButtonGroupContext);
            const [, setProcessing] = _react.default.useState(fetching || loading);
            const ref = (0, _useRipple.useRipple)(title, reference);
            const usingContext = typeof context?.setSelected === 'function';
            const onClickButton = async event => {
              try {
                if (usingContext) {
                  context.setSelected(index);
                }
                if (onClick && typeof onClick === 'function') {
                  setProcessing(true);
                  //@ts-ignore
                  await onClick(event);
                  setProcessing(false);
                  return;
                }
              } finally {
                setProcessing(false);
              }
            };
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (title) properties['data-tippy-content'] = title;
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pui-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            cls += block ? ' btn--block' : '';
            cls += sizing ? ` btn--${sizing}` : '';
            cls += loading || fetching ? ' btn--loading' : '';
            const clsLoading = `button-label ${loading || fetching ? 'button-label--loading' : ''}`;
            if (usingContext && context.selected === index) cls += ' pui-btn--active';
            if (usingContext) properties['data-index'] = index;
            return _react.default.createElement("button", {
              ref: ref,
              className: cls,
              onClick: onClickButton,
              disabled: loading || fetching || disabled,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), label || children && _react.default.createElement("div", {
              className: clsLoading
            }, label || children), (loading || fetching) && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./button/interface
      **********************************/

      ims.set('./button/interface', {
        hash: 694968353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./conditional-container
      ***************************************/

      ims.set('./conditional-container', {
        hash: 1749837270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConditionalContainer = ConditionalContainer;
          /*bundle*/
          function ConditionalContainer({
            condition,
            options,
            placeholder,
            ternary
          }) {
            const evaluatedValue = typeof condition === 'function' ? condition() : condition;
            let Component;
            if (ternary && typeof evaluatedValue === 'boolean') {
              Component = evaluatedValue ? options.true : options.false;
            } else {
              Component = options[evaluatedValue] || placeholder;
            }
            return Component ? Component : null;
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/use-media-query
      ***************************************/

      ims.set('./hooks/use-media-query', {
        hash: 2034606327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMediaQuery = useMediaQuery;
          var _react = require("react");
          /*bundle*/
          function useMediaQuery() {
            const [size, setSize] = (0, _react.useState)('lg');
            const calculateSize = () => {
              const width = window.innerWidth;
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            };
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                const newSize = calculateSize();
                setSize(newSize);
              };
              // Set initial size
              handleResize();
              // Set up event listener for resizing
              window.addEventListener('resize', handleResize);
              // Clean up function
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
            return size;
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./html-wrapper
      ******************************/

      ims.set('./html-wrapper', {
        hash: 4059971987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlWrapper = HtmlWrapper;
          var _react = require("react");
          /*bundle*/
          function HtmlWrapper({
            className,
            children,
            params = {},
            tag = 'span',
            as = 'span'
          }) {
            const Control = as || tag;
            const keys = Object.keys(params);
            keys.forEach(key => {
              const value = params[key];
              children = children.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            });
            return _react.default.createElement(Control, {
              className: className,
              dangerouslySetInnerHTML: {
                __html: children
              }
            });
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 1413814841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = props.target === '_blank';
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                const result = props.onClick(event);
                if (result === false) return;
              }
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return _react.default.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target
            }, props.children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./responsive-container
      **************************************/

      ims.set('./responsive-container', {
        hash: 285431686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResponsiveContainer = ResponsiveContainer;
          var _react = require("react");
          var _useMediaQuery = require("./hooks/use-media-query");
          /*bundle*/
          function ResponsiveContainer(props) {
            const size = (0, _useMediaQuery.useMediaQuery)();
            // Ordered sizes, from smallest to largest.
            const sizes = ['xs', 'sm', 'md', 'lg'];
            // Function to find the first available component for the current or larger screen size.
            const getComponent = currentSize => {
              const currentIndex = sizes.indexOf(currentSize);
              for (let i = currentIndex; i < sizes.length; i++) {
                const component = props[sizes[i]];
                if (component !== undefined && component !== null) {
                  return component;
                }
              }
              return null;
            };
            const Component = getComponent(size);
            // Return null if no matching component is found.
            if (!Component) {
              return null;
            }
            // Render the component matching the current or closest screen size.
            return _react.default.createElement(Component, null);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./spinner
      *************************/

      ims.set('./spinner', {
        hash: 3026278285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          ;
          const Component = (props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            size = size ? size : 'xs';
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = `${className ? `${className} ` : ''}pragmate-element-spinner spinner--${size}`;
            if (active) cls += ' is-active';
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: '0 0 100 100'
            }, _react.default.createElement("circle", {
              cx: '50',
              cy: '50',
              r: '30',
              style: style
            })));
          };
          /*bundle*/
          const Spinner = exports.Spinner = (0, _react.forwardRef)(Component);
        }
      });

      /****************************
      INTERNAL MODULE: ./use-ripple
      ****************************/

      ims.set('./use-ripple', {
        hash: 3800109915,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRipple = useRipple;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          function useRipple(title, ref) {
            ref = ref ?? _react.default.useRef(null);
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(ref.current);
              if (title) {
                (0, _tippy.default)(ref.current);
              }
            }, [title]);
            return ref;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button-group/button-group",
        "from": "ButtonGroup",
        "name": "ButtonGroup"
      }, {
        "im": "./button/button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./button/interface",
        "from": "IButtonProps",
        "name": "IButtonProps"
      }, {
        "im": "./conditional-container",
        "from": "ConditionalContainer",
        "name": "ConditionalContainer"
      }, {
        "im": "./hooks/use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }, {
        "im": "./html-wrapper",
        "from": "HtmlWrapper",
        "name": "HtmlWrapper"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./responsive-container",
        "from": "ResponsiveContainer",
        "name": "ResponsiveContainer"
      }, {
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./button-group/button-group').ButtonGroup : value);
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button/button').Button : value);
        (require || prop === 'IButtonProps') && _export("IButtonProps", IButtonProps = require ? require('./button/interface').IButtonProps : value);
        (require || prop === 'ConditionalContainer') && _export("ConditionalContainer", ConditionalContainer = require ? require('./conditional-container').ConditionalContainer : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./hooks/use-media-query').useMediaQuery : value);
        (require || prop === 'HtmlWrapper') && _export("HtmlWrapper", HtmlWrapper = require ? require('./html-wrapper').HtmlWrapper : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'ResponsiveContainer') && _export("ResponsiveContainer", ResponsiveContainer = require ? require('./responsive-container').ResponsiveContainer : value);
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImNscyIsImRpc2FibGVkIiwidXNlRWZmZWN0IiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwic2l6aW5nIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJzZXRQcm9jZXNzaW5nIiwicmVmIiwidXNlUmlwcGxlIiwidXNpbmdDb250ZXh0Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzTG9hZGluZyIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJ0ZXJuYXJ5IiwiZXZhbHVhdGVkVmFsdWUiLCJDb21wb25lbnQiLCJ0cnVlIiwiZmFsc2UiLCJ1c2VNZWRpYVF1ZXJ5Iiwic2l6ZSIsInNldFNpemUiLCJjYWxjdWxhdGVTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwibmV3U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJ0YWciLCJhcyIsIkNvbnRyb2wiLCJrZXkiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVzdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJfdXNlTWVkaWFRdWVyeSIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJzaXplcyIsImdldENvbXBvbmVudCIsImN1cnJlbnRTaXplIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsImkiLCJsZW5ndGgiLCJjb21wb25lbnQiLCJ1bmRlZmluZWQiLCJjb2xvciIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJfcmlwcGxlIiwiX3RpcHB5IiwidXNlUmVmIiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkUmlwcGxlRWZmZWN0IiwiY3VycmVudCJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnRzeCIsIi90cy9idXR0b24tZ3JvdXAvY29udGV4dC50c3giLCIvdHlwZS50cyIsIi90cy9idXR0b24vYnV0dG9uLnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvY29uZGl0aW9uYWwtY29udGFpbmVyLnRzeCIsIi90cy9ob29rcy91c2UtbWVkaWEtcXVlcnkudHMiLCIvdHMvaHRtbC13cmFwcGVyLnRzeCIsIi90cy9saW5rLnRzeCIsIi90cy9yZXNwb25zaXZlLWNvbnRhaW5lci50c3giLCIvdHMvc3Bpbm5lci50c3giLCIvdHMvdXNlLXJpcHBsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUN0Q0MsV0FBVyxHQUFHLEtBQUs7WUFDbkJDLFFBQVE7WUFDUkMsUUFBUTtZQUNSLEdBQUdDO1VBQUssQ0FDVztZQUNuQixNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQVNKLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQ3RFLElBQUlJLEdBQUcsR0FBRyxrQkFBa0I7WUFDNUJBLEdBQUcsSUFBSVIsV0FBVyxHQUFHLHFCQUFxQkEsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUM1RCxJQUFJUyxRQUFRLEdBQUcsQ0FBQyxDQUFDTixLQUFLLENBQUNNLFFBQVE7WUFFL0JiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDSSxTQUFTLENBQUMsTUFBSztjQUNwQkwsV0FBVyxDQUFDRixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUM1QixDQUFDLEVBQUUsQ0FBQ0QsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQztZQUVwQixNQUFNTyxpQkFBaUIsR0FBR2YsTUFBQSxDQUFBVSxPQUFLLENBQUNNLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDWixRQUFRLEVBQUUsQ0FBQ2EsS0FBSyxFQUFFQyxLQUFLLEtBQUk7Y0FDdkUsSUFBSW5CLE1BQUEsQ0FBQVUsT0FBSyxDQUFDVSxjQUFjLENBQUNGLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxPQUFPbEIs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