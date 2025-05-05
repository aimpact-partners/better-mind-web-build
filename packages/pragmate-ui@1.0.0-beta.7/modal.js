System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0,
    IModalProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_2 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
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
          "vspecifier": "pragmate-ui@1.0.0-beta.7/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 853535473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var React = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function AlertModal(props) {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              centered,
              button = {}
            } = props;
            const close = async () => {
              setState({
                fetching: true
              });
              if (props.onConfirm) await props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const btnAttrs = {
              className: `btn btn-primary${props.className ? ` ${props.className}` : ''}`,
              disabled: state.fetching,
              label: props.buttonLabel || 'Confirm',
              onClick: close,
              ...button
            };
            let cls = `pui-alert-dialog${centered ? ' pui-alert-dialog-centered' : ''}`;
            if (props.className) cls += ` ${props.className}`;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: props.onClose
            }, React.createElement("div", {
              className: 'alert-dialog-content'
            }, title && React.createElement(_components.HtmlWrapper, null, title), text && React.createElement(_components.HtmlWrapper, null, text), props.children ? props.children : null), React.createElement("div", {
              className: 'pui-modal-actions'
            }, React.createElement(_components.Button, {
              ...btnAttrs
            })));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./children
      **************************/

      ims.set('./children', {
        hash: 1764852864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var React = _react;
          var _icons = require("pragmate-ui/icons");
          const ModalContext = exports.ModalContext = (0, _react.createContext)({});
          const useModalContext = () => (0, _react.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icons.IconButton, {
                className: 'close-icon',
                onClick: close,
                "data-dismiss": 'modal',
                "aria-label": 'Close',
                key: 'dismiss-button',
                icon: 'close'
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, _react.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, _react.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(ModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          };
          exports.Children = Children;
        }
      });

      /*******************************
      INTERNAL MODULE: ./confirm/index
      *******************************/

      ims.set('./confirm/index', {
        hash: 1766706381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("../modal");
          var _useActionProperties = require("./use-action-properties");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              onCancel,
              centered,
              onClose,
              show
            } = properties;
            let cls = `pui-confirm-dialog${centered ? ' pui-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            const [confirmProps, cancelProps] = (0, _useActionProperties.useActionProperties)(properties, setState);
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            const handleClose = onClose ?? onCancel;
            return React.createElement(_modal.Modal, {
              show: show,
              className: cls,
              onClose: handleClose
            }, React.createElement("div", {
              className: 'pui-confirm-dialog-content'
            }, title && React.createElement("h3", null, title), text && React.createElement("div", {
              className: 'pui-confirm-dialog-content__text'
            }, text), properties.children), React.createElement("div", {
              className: 'pui-actions'
            }, React.createElement(_components.Button, {
              ...cancelProps,
              ...disabled
            }), React.createElement(_components.Button, {
              ...disabled,
              ...confirmProps
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./confirm/use-action-properties
      ***********************************************/

      ims.set('./confirm/use-action-properties', {
        hash: 1933355049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActionProperties = useActionProperties;
          /**
           * useActionProperties function
           *
           * This function is designed to process and return action properties for the Button component
           * in the Pragmate UI library. It supports the current API structure of the Button component
           * while maintaining backward compatibility with an older configuration format.
           *
           * The function takes a `properties` object as an argument. If this object contains an `actions` property,
           * it directly returns the `confirm` and `cancel` actions defined within. This is aligned with the current API design.
           *
           * For backward compatibility, the function also handles the scenario where the `actions` property is not present.
           * In this case, it extracts and processes individual properties like `onCancel`, `onConfirm`, `btnConfirm`, and `btnCancel`
           * from the `properties` object. These are then used to construct and return `confirm` and `cancel` action objects
           * with appropriate labels, class names, variants, and onClick handlers.
           *
           * @param {object} properties - The properties object containing either a direct `actions` property
           *                              or individual properties for backward compatibility.
           * @returns An array containing two action objects: confirm and cancel.
           */
          function useActionProperties(properties, setState) {
            const onProcessConfirm = callback => {
              return async event => {
                event.stopPropagation();
                setState({
                  fetching: true
                });
                await callback(event);
                setState({
                  fetching: false
                });
              };
            };
            if (properties.actions) {
              const confirmProps = {
                ...properties.actions.confirm
              };
              const cancelProps = {
                ...properties.actions.cancel
              };
              if (!confirmProps.onClick && !properties.onConfirm) {
                throw new Error('ConfirmModal: No confirm function defined');
              }
              if (!cancelProps.onClick && !properties.onCancel) {
                throw new Error('ConfirmModal: No cancel function defined');
              }
              confirmProps.onClick = onProcessConfirm(confirmProps.onClick ?? properties.onConfirm);
              cancelProps.onClick = cancelProps.onClick ?? properties.onCancel;
              return [confirmProps, cancelProps];
            }
            const {
              onCancel,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            const defaultConfirm = {
              label: 'Confirm',
              variant: 'primary',
              onClick: onProcessConfirm(onConfirm)
            };
            const defaultCancel = {
              label: 'Cancel',
              variant: 'primary',
              onClick: onCancel,
              bordered: true
            };
            const actions = {
              confirm: typeof btnConfirm === 'object' ? {
                ...defaultConfirm,
                ...btnConfirm
              } : defaultConfirm,
              cancel: typeof btnCancel === 'object' ? {
                ...defaultCancel,
                ...btnCancel
              } : defaultCancel
            };
            return [actions.confirm, actions.cancel];
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 346464964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var _react = require("react");
          var React = _react;
          var _children = require("./children");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, _react.useState)({
              show: props?.show ?? false,
              closeClicked: (props.closeClicked || props.closeBackdrop) ?? true,
              container: null
            });
            const modal = (0, _react.useRef)(null);
            React.useEffect(() => {
              setState({
                ...state,
                show: props.show
              });
            }, [props.show]);
            const close = async event => {
              if (event) event.stopPropagation();
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              globalThis.setTimeout(async () => {
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
                const {
                  onClose
                } = props;
                if (!onClose || typeof onClose !== 'function') return;
                onClose(event);
              }, 200);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              if (!state.closeClicked) return;
              close(event);
            };
            const show = state.show;
            let cls = 'pui-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: 'modal-content-wrapper',
                className: 'modal-wrapper'
              }, React.createElement("div", {
                className: 'modal-content',
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: 'children-content'
              }, props.children))));
            }
            return React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/alert
      *****************************/

      ims.set('./types/alert', {
        hash: 3453279328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./types/confirm
      *******************************/

      ims.set('./types/confirm', {
        hash: 3090985645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./types/modal-props
      ***********************************/

      ims.set('./types/modal-props', {
        hash: 1658030921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./confirm/index",
        "from": "ConfirmModal",
        "name": "ConfirmModal"
      }, {
        "im": "./modal",
        "from": "Modal",
        "name": "Modal"
      }, {
        "im": "./types/modal-props",
        "from": "IModalProps",
        "name": "IModalProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./alert').AlertModal : value);
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm/index').ConfirmModal : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./modal').Modal : value);
        (require || prop === 'IModalProps') && _export("IModalProps", IModalProps = require ? require('./types/modal-props').IModalProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIl9pY29ucyIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJJY29uQnV0dG9uIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl91c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsIm9uQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjb25maXJtUHJvcHMiLCJjYW5jZWxQcm9wcyIsInVzZUFjdGlvblByb3BlcnRpZXMiLCJoYW5kbGVDbG9zZSIsIm9uUHJvY2Vzc0NvbmZpcm0iLCJjYWxsYmFjayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJjYW5jZWwiLCJFcnJvciIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInZhcmlhbnQiLCJkZWZhdWx0Q2FuY2VsIiwiYm9yZGVyZWQiLCJfY2hpbGRyZW4iLCJjbG9zZUNsaWNrZWQiLCJjbG9zZUJhY2tkcm9wIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWxlcnQudHN4IiwiL3RzL2NoaWxkcmVuLnRzeCIsIi90cy9jb25maXJtL2luZGV4LnRzeCIsIi90cy9jb25maXJtL3VzZS1hY3Rpb24tcHJvcGVydGllcy50c3giLCIvdHMvbW9kYWwudHN4IiwiL2FsZXJ0LnRzIiwiL2NvbmZpcm0udHMiLCIvbW9kYWwtcHJvcHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUNSRyxVQUFVQSxDQUFDQyxLQUF1QjtZQUMxQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO2NBQUVDLFFBQVEsRUFBRTtZQUFLLENBQUUsQ0FBQztZQUM3RCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDLE1BQU0sR0FBRztZQUFFLENBQUUsR0FBR1IsS0FBSztZQUNwRCxNQUFNUyxLQUFLLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3hCUCxRQUFRLENBQUM7Z0JBQUVFLFFBQVEs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TyxLQUFLLFVBQVUsRUFBRTtnQkFDL0NBLE9BQU8sQ0FBQ2tELEtBQUssQ0FBQztjQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDO1lBRUQsTUFBTTZCLGVBQWUsR0FBSTdCLEtBQXlDLElBQVU7Y0FDM0VBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLElBQUksQ0FBQzdELEtBQUssQ0FBQ3lFLFlBQVksRUFBRTtjQUN6QmpFLEtBQUssQ0FBQ29ELEtBQUssQ0FBQztZQUNiLENBQUM7WUFFRCxNQUFNeEMsSUFBSSxHQUFZcEIsS0FBSyxDQUFDb0IsSUFBSTtZQUVoQyxJQUFJSCxHQUFHLEdBQVcsWUFBWTtZQUM5QkEsR0FBRyxJQUFJbEIsS0FBSyxDQUFDYSxTQUFTLEdBQUdiLEtBQUssQ0FBQ2EsU0FBUyxHQUFHLEVBQUU7WUFFN0MsSUFBSVEsSUFBSSxFQUFFSCxHQUFHLElBQUksYUFBYTtZQUM5QixNQUFNZ0IsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSWIsSUFBSSxFQUFFO2NBQ1RhLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWeEMsS0FBQSxDQUFBd0IsYUFBQTtnQkFBS2tCLEdBQUcsRUFBQyx1QkFBdUI7Z0JBQUN4QixTQUFTLEVBQUM7Y0FBZSxHQUN6RGxCLEtBQUEsQ0FBQXdCLGFBQUE7Z0JBQ0NOLFNBQVMsRUFBQyxlQUFlO2dCQUN6QkksT0FBTyxFQUFFNEMsS0FBSyxJQUFHO2tCQUNoQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3hCO2NBQUMsR0FFRG5FLEtBQUEsQ0FBQXdCLGFBQUEsQ0FBQ3NELFNBQUEsQ0FBQXpDLFFBQVE7Z0JBQUEsR0FBS2hDLEtBQUs7Z0JBQUVTLEtBQUssRUFBRUEsS0FBSztnQkFBRTRCLEdBQUcsRUFBQztjQUFrQixHQUN2RHJDLEtBQUssQ0FBQ3VCLFFBQVEsQ0FDTCxDQUNOLENBQ0QsQ0FDTjs7WUFHRixPQUNDNUIsS0FBQSxDQUFBd0IsYUFBQTtjQUFLd0UsR0FBRyxFQUFFZCxLQUFLO2NBQUU1RCxPQUFPLEVBQUV5RSxlQUFlO2NBQUU3RSxTQUFTLEVBQUVLO1lBQUcsR0FDdkRnQixNQUFNLENBQ0Y7VUFFUjs7Ozs7Ozs7Ozs7VUNwRUE7O1VBRUFpQixNQUFBLENBQUF5QyxjQUFBLENBQUFoRSxPQUFBO1lBQ0FrQixLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFLLE1BQUEsQ0FBQXlDLGNBQUEsQ0FBQWhFLE9BQUE7WUFDQWtCLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUssTUFBQSxDQUFBeUMsY0FBQSxDQUFBaEUsT0FBQTtZQUNBa0IsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119