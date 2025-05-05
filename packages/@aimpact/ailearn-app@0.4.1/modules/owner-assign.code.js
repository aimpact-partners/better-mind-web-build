System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, OwnerAssignForm, __beyond_pkg, hmr;
  _export("OwnerAssignForm", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_1 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_2 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_4 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_5 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_7 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7List) {
      dependency_9 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_react) {
      dependency_11 = _react;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/owner-assign",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/modal', dependency_10], ['react', dependency_11]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3268721657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerAssignForm = OwnerAssignForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _item = require("./item");
          /*bundle*/
          function OwnerAssignForm({
            item,
            onClose,
            type = 'module'
          }) {
            const [selected, setSelected] = React.useState();
            const [error, setError] = React.useState();
            const [fetching, setFetching] = React.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return React.createElement(_ui.ProcessContainer, {
              fetching: true
            });
            const clone = async () => {
              try {
                if (!selected) return;
                setFetching(true);
                //@ts-ignore
                const instance = item.constructor.name !== 'LearningModule' ? await _learningModules.LearningModule.get({
                  id: item.id,
                  type
                }) : item;
                const response = await instance.clone({
                  moduleId: item.id,
                  ownerId: selected.id,
                  entity: selected.entity,
                  type
                });
                if (!response.status) {
                  setError(texts.errors.failed);
                }
                _routing.routing.pushState(`/modules/management?id=${response.data.id}`);
              } catch (error) {
                console.error(error);
                setError(texts.errors.failed);
              } finally {
                setFetching(false);
              }
            };
            const onUserClick = event => {
              event.stopPropagation();
              setSelected(_session.sessionWrapper.user);
            };
            return React.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              onClose: onClose,
              className: "modal__assignment"
            }, React.createElement("header", null, React.createElement("h3", null, texts.title), React.createElement("span", null, texts.description)), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement(_form.Form, null, React.createElement("div", {
              className: "user-option",
              onClick: onUserClick
            }, React.createElement(_image.Image, {
              src: _session.sessionWrapper.user.photoURL
            }), React.createElement("div", null, React.createElement("h6", {
              className: "user-data__label"
            }, texts.me.label), React.createElement("span", null, texts.me.description)), React.createElement(_ui.RadioButton, {
              className: "radio-button",
              checked: selected?.id === _session.sessionWrapper.user.id,
              onChange: onUserClick
            }))), _session.sessionWrapper.user.organizations?.items?.length > 0 ? React.createElement(React.Fragment, null, React.createElement("section", {
              className: "organization-section"
            }, React.createElement("h6", null, texts.organization.label), React.createElement("span", null, texts.organization.description)), React.createElement(_list.List, {
              items: _session.sessionWrapper.user.organizations.items,
              control: _item.Item,
              className: "organization-list",
              specs: {
                selected,
                setSelected
              }
            })) : React.createElement(React.Fragment, null), React.createElement("div", {
              className: "actions__container flex-container flex-end"
            }, React.createElement(_components.Button, {
              variant: "primary",
              disabled: !selected,
              fetching: fetching,
              onClick: clone
            }, texts.actions.continue)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 516845635,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const Item = props => {
            const {
              item,
              setSelected,
              selected
            } = props;
            const onClick = event => {
              event.stopPropagation();
              setSelected(item);
            };
            const className = selected?.id === item.id ? 'list__item item__active' : ' list__item';
            return React.createElement("li", {
              "data-id": item.id,
              "data-entity": item.entity,
              className: className,
              onClick: onClick
            }, React.createElement("div", {
              className: "item-body"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "institution",
              alt: item.name
            }), React.createElement("span", null, item.name)), React.createElement(_ui.RadioButton, {
              checked: selected?.id === item.id,
              onChange: onClick,
              label: ""
            }));
          };
          exports.Item = Item;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "OwnerAssignForm",
        "name": "OwnerAssignForm"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'OwnerAssignForm') && _export("OwnerAssignForm", OwnerAssignForm = require ? require('./index').OwnerAssignForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2ltYWdlIiwiX2xpc3QiLCJfbW9kYWwiLCJSZWFjdCIsIl9pdGVtIiwiT3duZXJBc3NpZ25Gb3JtIiwiaXRlbSIsIm9uQ2xvc2UiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNyZWF0ZUVsZW1lbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiY2xvbmUiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkxlYXJuaW5nTW9kdWxlIiwiZ2V0IiwiaWQiLCJyZXNwb25zZSIsIm1vZHVsZUlkIiwib3duZXJJZCIsImVudGl0eSIsInN0YXR1cyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiY29uc29sZSIsIm9uVXNlckNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJzaG93IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwib25DbGljayIsIkltYWdlIiwic3JjIiwicGhvdG9VUkwiLCJtZSIsImxhYmVsIiwiUmFkaW9CdXR0b24iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJGcmFnbWVudCIsIm9yZ2FuaXphdGlvbiIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsInNwZWNzIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwiYWN0aW9ucyIsImNvbnRpbnVlIiwicHJvcHMiLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJhbHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsR0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsZ0JBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLGVBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLFdBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLEtBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE1BQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLEtBQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLEtBQUEsR0FBQVosT0FBQTtVQUVPO1VBQVUsU0FBVWEsZUFBZUEsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLE9BQU87WUFBRUMsSUFBSSxHQUFHO1VBQVEsQ0FBRTtZQUM1RSxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxFQUFPO1lBQ3JELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1YsS0FBSyxDQUFDUSxRQUFRLEVBQUU7WUFFMUMsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHWixLQUFLLENBQUNRLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDSyxVQUFVLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUFyQixNQUFBLENBQUFzQixRQUFRLEVBQUNyQixlQUFBLENBQUFzQixNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxJQUFJLENBQUNKLFVBQVUsRUFBRSxPQUFPYixLQUFBLENBQUFrQixhQUFBLENBQUM5QixHQUFBLENBQUErQixnQkFBZ0I7Y0FBQ1IsUUFBUSxFQUFFO1lBQUksRUFBSTtZQUU1RCxNQUFNUyxLQUFLLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3hCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDZCxRQUFRLEVBQUU7Z0JBQ2ZNLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCO2dCQUVBLE1BQU1TLFFBQVEsR0FDYmxCLElBQUksQ0FBQ21CLFdBQVcsQ0FBQ0MsSUFBSSxLQUFLLGdCQUFnQixHQUFHLE1BQU1qQyxnQkFBQSxDQUFBa0MsY0FBYyxDQUFDQyxHQUFHLENBQUM7a0JBQUVDLEVBQUUsRUFBRXZCLElBQUksQ0FBQ3VCLEVBQUU7a0JBQUVyQjtnQkFBSSxDQUFFLENBQUMsR0FBR0YsSUFBSTtnQkFFcEcsTUFBTXdCLFFBQVEsR0FBRyxNQUFNTixRQUFRLENBQUNELEtBQUssQ0FBQztrQkFDckNRLFFBQVEsRUFBRXpCLElBQUksQ0FBQ3VCLEVBQUU7a0JBQ2pCRyxPQUFPLEVBQUV2QixRQUFRLENBQUNvQixFQUFFO2tCQUNwQkksTUFBTSxFQUFFeEIsUUFBUSxDQUFDd0IsTUFBTTtrQkFDdkJ6QjtpQkFDQSxDQUFDO2dCQUNGLElBQUksQ0FBQ3NCLFFBQVEsQ0FBQ0ksTUFBTSxFQUFFO2tCQUNyQnJCLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDa0IsTUFBTSxDQUFDQyxNQUFNLENBQUM7O2dCQUU5QnpDLFFBQUEsQ0FBQTBDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDBCQUEwQlIsUUFBUSxDQUFDUyxJQUFJLENBQUNWLEVBQUUsRUFBRSxDQUFDO2VBQy9ELENBQUMsT0FBT2pCLEtBQUssRUFBRTtnQkFDZjRCLE9BQU8sQ0FBQzVCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2dCQUNwQkMsUUFBUSxDQUFDSSxLQUFLLENBQUNrQixNQUFNLENBQUNDLE1BQU0sQ0FBQztlQUM3QixTQUFTO2dCQUNUckIsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU0wQixXQUFXLEdBQUlDLEtBQXlDLElBQUk7Y0FDakVBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCakMsV0FBVyxDQUFDaEIsUUFBQSxDQUFBa0QsY0FBYyxDQUFDQyxJQUFJLENBQUM7WUFDakMsQ0FBQztZQUVELE9BQ0MxQyxLQUFBLENBQUFrQixhQUFBLENBQUNuQixNQUFBLENBQUE0QyxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUVDLElBQUk7Y0FBQ3pDLE9BQU8sRUFBRUEsT0FBTztjQUFFMEMsU0FBUyxFQUFDO1lBQW1CLEdBQ2hGOUMsS0FBQSxDQUFBa0IsYUFBQSxpQkFDQ2xCLEtBQUEsQ0FBQWtCLGFBQUEsYUFBS0osS0FBSyxDQUFDaUMsS0FBSyxDQUFNLEVBQ3RCL0MsS0FBQSxDQUFBa0IsYUFBQSxlQUFPSixLQUFLLENBQUNrQyxXQUFXLENBQVEsQ0FDeEIsRUFDVGhELEtBQUEsQ0FBQWtCLGFBQUEsQ0FBQzlCLEdBQUEsQ0FBQTZELGFBQWE7Y0FBQ3hDLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9CVCxLQUFBLENBQUFrQixhQUFBLENBQUN0QixLQUFBLENBQUFzRCxJQUFJLFFBQ0psRCxLQUFBLENBQUFrQixhQUFBO2NBQUs0QixTQUFTLEVBQUMsYUFBYTtjQUFDSyxPQUFPLEVBQUViO1lBQVcsR0FDaER0QyxLQUFBLENBQUFrQixhQUFBLENBQUNyQixNQUFBLENBQUF1RCxLQUFLO2NBQUNDLEdBQUcsRUFBRTlELFFBQUEsQ0FBQWtELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDWTtZQUFRLEVBQUksRUFDNUN0RCxLQUFBLENBQUFrQixhQUFBLGNBQ0NsQixLQUFBLENBQUFrQixhQUFBO2NBQUk0QixTQUFTLEVBQUM7WUFBa0IsR0FBRWhDLEtBQUssQ0FBQ3lDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFNLEVBQ3REeEQsS0FBQSxDQUFBa0IsYUFBQSxlQUFPSixLQUFLLENBQUN5QyxFQUFFLENBQUNQLFdBQVcsQ0FBUSxDQUM5QixFQUVOaEQsS0FBQSxDQUFBa0IsYUFBQSxDQUFDOUIsR0FBQSxDQUFBcUUsV0FBVztjQUNYWCxTQUFTLEVBQUMsY0FBYztjQUN4QlksT0FBTyxFQUFFcEQsUUFBUSxFQUFFb0IsRUFBRSxLQUFLbkMsUUFBQSxDQUFBa0QsY0FBYyxDQUFDQyxJQUFJLENBQUNoQixFQUFFO2NBQ2hEaUMsUUFBUSxFQUFFckI7WUFBVyxFQUNwQixDQUVHLENBQ0EsRUFDTi9DLFFBQUEsQ0FBQWtELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDa0IsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sR0FBRyxDQUFDLEdBQ3BEOUQsS0FBQSxDQUFBa0IsYUFBQSxDQUFBbEIsS0FBQSxDQUFBK0QsUUFBQSxRQUNDL0QsS0FBQSxDQUFBa0IsYUFBQTtjQUFTNEIsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDOUMsS0FBQSxDQUFBa0IsYUFBQSxhQUFLSixLQUFLLENBQUNrRCxZQUFZLENBQUNSLEtBQUssQ0FBTSxFQUNuQ3hELEtBQUEsQ0FBQWtCLGFBQUEsZUFBT0osS0FBSyxDQUFDa0QsWUFBWSxDQUFDaEIsV0FBVyxDQUFRLENBQ3BDLEVBRVZoRCxLQUFBLENBQUFrQixhQUFBLENBQUNwQixLQUFBLENBQUFtRSxJQUFJO2NBQ0pKLEtBQUssRUFBRXRFLFFBQUEsQ0FBQWtELGNBQWMsQ0FBQ0MsSUFBSSxDQUFDa0IsYUFBYSxDQUFDQyxLQUFLO2NBQzlDSyxPQUFPLEVBQUVqRSxLQUFBLENBQUFrRSxJQUFJO2NBQ2JyQixTQUFTLEVBQUMsbUJBQW1CO2NBQzdCc0IsS0FBSyxFQUFFO2dCQUFFOUQsUUFBUTtnQkFBRUM7Y0FBVztZQUFFLEVBQy9CLENBQ0EsR0FFSFAsS0FBQSxDQUFBa0IsYUFBQSxDQUFBbEIsS0FBQSxDQUFBK0QsUUFBQSxPQUNBLEVBRUQvRCxLQUFBLENBQUFrQixhQUFBO2NBQUs0QixTQUFTLEVBQUM7WUFBNEMsR0FDMUQ5QyxLQUFBLENBQUFrQixhQUFBLENBQUN2QixXQUFBLENBQUEwRSxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNDLFFBQVEsRUFBRSxDQUFDakUsUUFBUTtjQUFFSyxRQUFRLEVBQUVBLFFBQVE7Y0FBRXdDLE9BQU8sRUFBRS9CO1lBQUssR0FDL0VOLEtBQUssQ0FBQzBELE9BQU8sQ0FBQ0MsUUFBUSxDQUNmLENBQ0osQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZHQSxJQUFBekUsS0FBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQUQsR0FBQSxHQUFBQyxPQUFBO1VBRU8sTUFBTThFLElBQUksR0FBR08sS0FBSyxJQUFHO1lBQzNCLE1BQU07Y0FBRXZFLElBQUk7Y0FBRUksV0FBVztjQUFFRDtZQUFRLENBQUUsR0FBR29FLEtBQUs7WUFDN0MsTUFBTXZCLE9BQU8sR0FBR1osS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QmpDLFdBQVcsQ0FBQ0osSUFBSSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxNQUFNMkMsU0FBUyxHQUFHeEMsUUFBUSxFQUFFb0IsRUFBRSxLQUFLdkIsSUFBSSxDQUFDdUIsRUFBRSxHQUFHLHlCQUF5QixHQUFHLGFBQWE7WUFDdEYsT0FDQzFCLEtBQUEsQ0FBQWtCLGFBQUE7Y0FBQSxXQUFhZixJQUFJLENBQUN1QixFQUFFO2NBQUEsZUFBZXZCLElBQUksQ0FBQzJCLE1BQU07Y0FBRWdCLFNBQVMsRUFBRUEsU0FBUztjQUFFSyxPQUFPLEVBQUVBO1lBQU8sR0FDckZuRCxLQUFBLENBQUFrQixhQUFBO2NBQUs0QixTQUFTLEVBQUM7WUFBVyxHQUN6QjlDLEtBQUEsQ0FBQWtCLGFBQUEsQ0FBQzlCLEdBQUEsQ0FBQXVGLFdBQVc7Y0FBQ3RCLEdBQUcsRUFBRWxELElBQUksQ0FBQ3lFLE9BQU87Y0FBRTlDLE1BQU0sRUFBQyxhQUFhO2NBQUMrQyxHQUFHLEVBQUUxRSxJQUFJLENBQUNvQjtZQUFJLEVBQUksRUFDdkV2QixLQUFBLENBQUFrQixhQUFBLGVBQU9mLElBQUksQ0FBQ29CLElBQUksQ0FBUSxDQUNuQixFQUNOdkIsS0FBQSxDQUFBa0IsYUFBQSxDQUFDOUIsR0FBQSxDQUFBcUUsV0FBVztjQUFDQyxPQUFPLEVBQUVwRCxRQUFRLEVBQUVvQixFQUFFLEtBQUt2QixJQUFJLENBQUN1QixFQUFFO2NBQUVpQyxRQUFRLEVBQUVSLE9BQU87Y0FBRUssS0FBSyxFQUFDO1lBQUUsRUFBRyxDQUMxRTtVQUVQLENBQUM7VUFBQ3NCLE9BQUEsQ0FBQVgsSUFBQSxHQUFBQSxJQUFBIiwiaWdub3JlTGlzdCI6W119