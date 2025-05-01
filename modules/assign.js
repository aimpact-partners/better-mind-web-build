System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.4.1/components/icons", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@beyond-js/reactive@2.0.4/model", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, ModuleAssignments, __beyond_pkg, hmr;
  _export("ModuleAssignments", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_1 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Components) {
      dependency_2 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7List) {
      dependency_3 = _pragmateUi100Beta7List;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_6 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_8 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_9 = _aimpactAilearnApp041ModelWrapper;
    }, function (_beyondJsReactive204Model) {
      dependency_10 = _beyondJsReactive204Model;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_11 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactChatSdk154Session) {
      dependency_12 = _aimpactChatSdk154Session;
    }, function (_beyondJsKernel0112Styles) {
      dependency_13 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/assign"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/list', dependency_3], ['react', dependency_4], ['pragmate-ui/empty', dependency_5], ['pragmate-ui/modal', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/toast', dependency_8], ['@aimpact/ailearn-app/model/wrapper', dependency_9], ['@beyond-js/reactive/model', dependency_10], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/modules/assign');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./classrooms
      ****************************/
      ims.set('./classrooms', {
        hash: 1003619796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Classrooms = void 0;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _empty = require("./empty");
          var _item = require("./item");
          const Classrooms = ({
            onClose,
            state,
            action,
            module,
            texts
          }) => {
            const [error, setError] = _react.default.useState();
            if (!state.ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (state.model?.items.length === 0) return _react.default.createElement(_empty.EmptyList, {
              texts: texts,
              action: action
            });
            const output = state.items;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title[action]), _react.default.createElement("h5", {
              className: "module-name"
            }, texts.module, ": ", module.title)), _react.default.createElement("div", {
              className: "modal__container"
            }, _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), output.length ? _react.default.createElement(_list.List, {
              className: "classroom__list",
              items: output,
              control: _item.ClassroomItem,
              specs: {
                module,
                texts,
                onClose,
                setError,
                action
              }
            }) : _react.default.createElement(_empty.EmptyList, {
              texts: texts,
              action: action
            })));
          };
          exports.Classrooms = Classrooms;
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 3838194054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          function EmptyList({
            texts,
            action
          }) {
            const attrs = texts.empty[action];
            return _react.default.createElement(_ui.EmptyCard, {
              ...attrs,
              icon: "info"
            }, action === 'share' && _react.default.createElement("div", {
              className: "actions flex-container flex-center"
            }, _react.default.createElement(_components.Link, {
              href: "/classrooms/management",
              className: "grow btn btn-primary"
            }, texts.actions.createClassroom)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1066586211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleAssignments = ModuleAssignments;
          var _react = require("react");
          var _classrooms = require("./classrooms");
          var _modal = require("pragmate-ui/modal");
          var _useStore = require("./use-store");
          /*bundle*/
          function ModuleAssignments({
            onClose,
            item,
            texts,
            action
          }) {
            const [store, state] = (0, _useStore.useStore)({
              module: item,
              action
            });
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose,
              closeBackdrop: false,
              className: "modal--assignment"
            }, _react.default.createElement(_classrooms.Classrooms, {
              onClose: onClose,
              state: state,
              module: item,
              action: action,
              texts: texts
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./item/actions
      ******************************/

      ims.set('./item/actions', {
        hash: 225376334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = void 0;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          const ItemActions = props => {
            const {
              setError,
              texts,
              module,
              item,
              action
            } = props;
            const [fetching, setFetching] = _react.default.useState(false);
            const [assignment, setAssignment] = _react.default.useState(module.assignments.classrooms.get(item.id));
            const onClick = async event => {
              try {
                event.stopPropagation();
                setFetching(true);
                event.preventDefault();
                const assignment = await module.assignments.add(item.id);
                setAssignment(assignment);
                setFetching(false);
                const replace = (str, values) => str.replace(/{(\w+)}/g, (_, key) => values[key] || `{${key}}`);
                _toast.toast.success(replace(texts.messages.assigned, {
                  classroom: module.title
                }));
              } catch (e) {
                console.error(e);
                setError(texts.errors.default);
              }
            };
            if (assignment) {
              const finalLink = `${_wrapper.settings.baseUrl}${assignment.link}`;
              const copy = event => {
                event.stopPropagation();
                navigator.clipboard.writeText(finalLink);
                _toast.toast.success(texts.messages.copied);
              };
              return _react.default.createElement(_components.ConditionalContainer, {
                condition: action,
                options: {
                  dashboard: _react.default.createElement("div", {
                    className: "item__actions"
                  }, _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    href: assignment.dashboard,
                    title: texts.actions.share
                  })),
                  navigate: _react.default.createElement("div", {
                    className: "item__actions "
                  }, _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    title: texts.actions.watchActivity,
                    href: finalLink
                  })),
                  share: _react.default.createElement("div", {
                    className: "item__actions"
                  }, _react.default.createElement("div", {
                    className: "item__actions--link"
                  }, _react.default.createElement("span", {
                    className: "link visiable-xs"
                  }, texts.assigned), _react.default.createElement(_icons.AppIconButton, {
                    className: "circle",
                    icon: "copy",
                    onClick: copy,
                    title: texts.actions.copy
                  })), _react.default.createElement(_icons.AppIconButton, {
                    bordered: true,
                    className: "circle",
                    icon: "frontArrow",
                    title: texts.actions.watchActivity,
                    href: finalLink
                  }))
                }
              });
            }
            return _react.default.createElement("div", {
              className: "item__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              loading: fetching,
              onClick: onClick
            }, texts.actions.assign.button));
          };
          exports.ItemActions = ItemActions;
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 2186876838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomItem = void 0;
          var _react = require("react");
          var _actions = require("./actions");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          const ClassroomItem = ({
            item,
            ...props
          }) => {
            const name = `${item.name}${item.section ? ` - ${item.section}` : ''}`;
            return _react.default.createElement("li", {
              key: item.id
            }, _react.default.createElement("section", {
              className: "list-item__content"
            }, _react.default.createElement("div", {
              className: "item__content"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("h4", null, name)), _react.default.createElement(_actions.ItemActions, {
              item: item,
              ...props
            })));
          };
          exports.ClassroomItem = ClassroomItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 700526550,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #module;
            get module() {
              return this.#module;
            }
            #associated;
            #action;
            get associated() {
              return this.#associated;
            }
            #items;
            get items() {
              return this.#items;
            }
            constructor(specs) {
              super();
              this.#model = new _classrooms.Classrooms();
              this.#model.on('change', this.triggerEvent);
              this.load(specs);
              this.#action = specs.action;
              this.#module = specs.module;
              globalThis.specs = specs;
            }
            async load(specs) {
              this.#module = specs.module;
              this.#associated = specs.associated;
              try {
                const specs = {
                  user: true
                };
                if (this.#module.owner?.id && this.#module.owner?.id !== _session.sessionWrapper.user.id) {
                  specs.organizationId = this.module.owner?.id;
                }
                await this.model.load(specs);
                if (['dashboard'].includes(this.#action)) {
                  this.#items = this.model.items.filter(item => this.#module.assignments.classrooms.get(item.id));
                } else {
                  this.#items = this.model.items;
                }
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            async delete(item) {
              await item.delete();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 727170923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          var _store = require("./store");
          function useStore(specs) {
            const [store, setStore] = _react.default.useState();
            const [state, setState] = _react.default.useState({});
            _react.default.useEffect(() => {
              const instance = new _store.StoreManager(specs);
              setStore(instance);
              const onChange = () => {
                setState(state => ({
                  ...state,
                  model: instance.model,
                  ready: instance.ready,
                  items: instance.items,
                  ...instance.getProperties()
                }));
              };
              instance.on('change', onChange);
              return () => {
                instance.off('change', onChange);
              };
            }, []);
            return [store, state];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ModuleAssignments",
        "name": "ModuleAssignments"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ModuleAssignments') && _export("ModuleAssignments", ModuleAssignments = require ? require('./index').ModuleAssignments : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9yZWFjdCIsIl9lbXB0eSIsIl9pdGVtIiwiQ2xhc3Nyb29tcyIsIm9uQ2xvc2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1vZHVsZSIsInRleHRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlYWR5IiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb2RlbCIsIml0ZW1zIiwibGVuZ3RoIiwiRW1wdHlMaXN0Iiwib3V0cHV0IiwiRnJhZ21lbnQiLCJ0aXRsZSIsImNsYXNzTmFtZSIsIkVycm9yUmVuZGVyZXIiLCJMaXN0IiwiY29udHJvbCIsIkNsYXNzcm9vbUl0ZW0iLCJzcGVjcyIsImV4cG9ydHMiLCJhdHRycyIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsImNyZWF0ZUNsYXNzcm9vbSIsIl9jbGFzc3Jvb21zIiwiX21vZGFsIiwiX3VzZVN0b3JlIiwiTW9kdWxlQXNzaWdubWVudHMiLCJpdGVtIiwic3RvcmUiLCJ1c2VTdG9yZSIsIk1vZGFsIiwic2hvdyIsImNsb3NlQmFja2Ryb3AiLCJfaWNvbnMiLCJfdG9hc3QiLCJfd3JhcHBlciIsIkl0ZW1BY3Rpb25zIiwicHJvcHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiYXNzaWdubWVudCIsInNldEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50cyIsImNsYXNzcm9vbXMiLCJnZXQiLCJpZCIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkIiwicmVwbGFjZSIsInN0ciIsInZhbHVlcyIsIl8iLCJrZXkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFzc2lnbmVkIiwiY2xhc3Nyb29tIiwiZSIsImNvbnNvbGUiLCJlcnJvcnMiLCJmaW5hbExpbmsiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJsaW5rIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcGllZCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsImRhc2hib2FyZCIsIkFwcEljb25CdXR0b24iLCJib3JkZXJlZCIsInNoYXJlIiwibmF2aWdhdGUiLCJ3YXRjaEFjdGl2aXR5IiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJhc3NpZ24iLCJidXR0b24iLCJfYWN0aW9ucyIsIm5hbWUiLCJzZWN0aW9uIiwiQXBwSWNvbiIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImFzc29jaWF0ZWQiLCJjb25zdHJ1Y3RvciIsIm9uIiwidHJpZ2dlckV2ZW50IiwibG9hZCIsImdsb2JhbFRoaXMiLCJ1c2VyIiwib3duZXIiLCJzZXNzaW9uV3JhcHBlciIsIm9yZ2FuaXphdGlvbklkIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJkZWxldGUiLCJfc3RvcmUiLCJzZXRTdG9yZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaW5zdGFuY2UiLCJvbkNoYW5nZSIsImdldFByb3BlcnRpZXMiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY2xhc3Nyb29tcy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS1zdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsR0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFB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O2lCQUMvRixNQUFNO2tCQUNOLElBQUksQ0FBQyxDQUFBM0MsS0FBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxLQUFLOztnQkFHL0IsSUFBSSxDQUFDTCxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9nRSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ3JFLEtBQUssQ0FBQ29FLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNOEMsTUFBTUEsQ0FBQ2hGLElBQUk7Y0FDaEIsTUFBTUEsSUFBSSxDQUFDZ0YsTUFBTSxFQUFFO1lBQ3BCOztVQUNBN0YsT0FBQSxDQUFBK0UsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdERCxJQUFBN0csTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQStILE1BQUEsR0FBQS9ILE9BQUE7VUFFTSxTQUFVZ0QsUUFBUUEsQ0FBQ2hCLEtBQUs7WUFDN0IsTUFBTSxDQUFDZSxLQUFLLEVBQUVpRixRQUFRLENBQUMsR0FBRzdILE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxRQUFRLEVBQWdCO1lBQ3hELE1BQU0sQ0FBQ1AsS0FBSyxFQUFFeUgsUUFBUSxDQUFDLEdBQUc5SCxNQUFBLENBQUFXLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q1osTUFBQSxDQUFBVyxPQUFLLENBQUNvSCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxRQUFRLEdBQUcsSUFBSUosTUFBQSxDQUFBZixZQUFZLENBQUNoRixLQUFLLENBQUM7Y0FDeENnRyxRQUFRLENBQUNHLFFBQVEsQ0FBQztjQUVsQixNQUFNQyxRQUFRLEdBQUdBLENBQUEsS0FBSztnQkFDckJILFFBQVEsQ0FBQ3pILEtBQUssS0FBSztrQkFDbEIsR0FBR0EsS0FBSztrQkFDUlksS0FBSyxFQUFFK0csUUFBUSxDQUFDL0csS0FBSztrQkFDckJKLEtBQUssRUFBRW1ILFFBQVEsQ0FBQ25ILEtBQUs7a0JBQ3JCSyxLQUFLLEVBQUU4RyxRQUFRLENBQUM5RyxLQUFLO2tCQUNyQixHQUFHOEcsUUFBUSxDQUFDRSxhQUFhO2lCQUN6QixDQUFDLENBQUM7Y0FDSixDQUFDO2NBRURGLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDLFFBQVEsRUFBRWdCLFFBQVEsQ0FBQztjQUMvQixPQUFPLE1BQUs7Z0JBQ1hELFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsRUFBRUYsUUFBUSxDQUFDO2NBQ2pDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FBTyxDQUFDckYsS0FBSyxFQUFFdkMsS0FBSyxDQUFDO1VBQ3RCIiwiaWdub3JlTGlzdCI6W119