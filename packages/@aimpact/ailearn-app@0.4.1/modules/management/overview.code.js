System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.4.1/components/ui", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/ailearn-app@0.4.1/components/icons", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/chips", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/cover-image.code", "@aimpact/ailearn-app@0.4.1/main-layout.widget"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Header, ModuleOverview, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    ModuleOverview: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_3 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_5 = _aimpactAilearnApp041ComponentsUi;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_7 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7List) {
      dependency_8 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_9 = _pragmateUi100Beta7Modal;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_11 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_13 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_14 = _pragmateUi100Beta7Chips;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_15 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsCoverImageCode) {
      dependency_16 = _aimpactAilearnApp041ComponentsCoverImageCode;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_17 = _aimpactAilearnApp041MainLayoutWidget;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/management/overview",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/empty', dependency_3], ['pragmate-ui/components', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/chips', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/ailearn-app/components/cover-image.code', dependency_16], ['@aimpact/ailearn-app/main-layout.widget', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/modules/management/overview.code');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/empty
      **********************************/
      ims.set('./activities/empty', {
        hash: 404134800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyActivityList = EmptyActivityList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyActivityList() {
            const {
              texts,
              toggleModal
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "module-activities__list"
            }, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.module.activities.title), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "addActivity"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.module.actions.addActivity))), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, _react.default.createElement(_empty.Empty, {
              className: "empty-section__container mt-1"
            }, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/index
      **********************************/

      ims.set('./activities/index', {
        hash: 2739799850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("./empty");
          var _item = require("./list/item");
          var _reorderItem = require("./list/item/reorder-item");
          function ModuleActivities() {
            const {
              texts,
              activities,
              onSubmit,
              store,
              toggleModal
            } = (0, _context.useModuleContext)();
            const actionTexts = store.globalTexts.actions;
            const [items, setItems] = _react.default.useState(activities);
            const [reordering, setReorder] = _react.default.useState(false);
            const [processing, setProcessing] = _react.default.useState(false);
            const [orderUpdated, setOrderUpdated] = _react.default.useState(false);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            const onReorder = items => {
              if (!orderUpdated) setOrderUpdated(true);
              setItems(items);
            };
            const saveReordering = async () => {
              setProcessing(true);
              await store.model.activities.reorder(items);
              setProcessing(false);
              togleReorder();
            };
            const togleReorder = () => setReorder(!reordering);
            const reorderAttrs = reordering ? {
              onClick: saveReordering
            } : {
              onClick: togleReorder
            };
            const orderLabel = !reordering ? actionTexts.order : actionTexts.close;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h5", null, texts.activities.title), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              ...reorderAttrs,
              icon: "list"
            }, orderLabel), !reordering && _react.default.createElement(_ui.TourStep, {
              index: 10,
              texts: texts.moduleTour,
              name: "addActivity",
              as: "div"
            }, _react.default.createElement(_components.Button, {
              icon: "add-circle",
              variant: "link",
              onClick: toggleModal
            }, texts.actions.add)))), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, reordering ? _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_framerMotion.Reorder.Group, {
              className: "draft-activity-list mobile-column-list",
              as: "div",
              values: items,
              onReorder: onReorder
            }, items.map(item => {
              return _react.default.createElement(_reorderItem.ReorderModuleActivity, {
                key: item.id,
                item: item
              });
            }))) : _react.default.createElement(_list.List, {
              className: "draft-activity-list mobile-column-list",
              items: items,
              control: _item.ModuleActivity
            })));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/list/item/delete-modal
      ***************************************************/

      ims.set('./activities/list/item/delete-modal', {
        hash: 1701603921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteModal = DeleteModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          function DeleteModal({
            onClose,
            onConfirm
          }) {
            const {
              texts,
              store: {
                globalTexts: {
                  actions: textActions
                }
              }
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = async () => {
              try {
                setFetching(true);
                await onConfirm();
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                onClose();
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onClick,
              centered: true,
              onCancel: onClose,
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.activities.delete.title,
              text: texts.activities.delete.subtitle
            });
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./activities/list/item/index
      ********************************************/

      ims.set('./activities/list/item/index', {
        hash: 1789241161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _framerMotion = require("framer-motion");
          var _icons2 = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../../../context");
          var _deleteModal = require("./delete-modal");
          function ModuleActivity({
            item
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const controls = (0, _framerMotion.useDragControls)();
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const activity = item;
            const deleteItem = event => {
              try {
                ref.current.classList.add('fade-out');
                store.model.activities.remove(item.id);
              } catch (e) {
                console.error(e);
                _toast.toast.error(e.message);
              }
            };
            const toggleDelete = () => setShowDelete(!showDelete);
            const edit = event => {
              if (event.target.classList.contains('drag-bullet-point')) return;
              event.stopPropagation();
              store.editActivity(activity);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity(current);
            };
            const iRef = _react.default.useRef(null);
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              toggleDelete();
            };
            const onDrag = event => {
              event.stopPropagation();
              event.preventDefault();
              controls.start(event);
            };
            const description = store.getActivityDetail(activity) ?? texts.item.empty;
            return _react.default.createElement("div", {
              className: "item-list__reorder-container"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "draft-activity-list__item mobile-column-list",
              onClick: edit
            }, _react.default.createElement("section", {
              className: "list-item__column header__main-content "
            }, _react.default.createElement("div", {
              className: "column-icons"
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.BgIcon, {
              name: activity.type
            }))), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("h6", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("span", null, description)))), _react.default.createElement("div", {
              className: "list-item__column list-item__actions"
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_icons2.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons2.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            })))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./activities/list/item/property
      ***********************************************/

      ims.set('./activities/list/item/property', {
        hash: 2437299253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Property = Property;
          var _react = require("react");
          function Property({
            name,
            value
          }) {
            if (!value) return null;
            return _react.default.createElement("div", null, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, value));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./activities/list/item/reorder-item
      ***************************************************/

      ims.set('./activities/list/item/reorder-item', {
        hash: 3763198779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReorderModuleActivity = ReorderModuleActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _framerMotion = require("framer-motion");
          var _icons2 = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../../../context");
          var _deleteModal = require("./delete-modal");
          function ReorderModuleActivity({
            item
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const controls = (0, _framerMotion.useDragControls)();
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const activity = item;
            const deleteItem = event => {
              try {
                ref.current.classList.add('fade-out');
                store.model.activities.remove(item.id);
              } catch (e) {
                console.error(e);
                _toast.toast.error(e.message);
              }
            };
            const toggleDelete = () => setShowDelete(!showDelete);
            const edit = event => {
              if (event.target.classList.contains('drag-bullet-point')) return;
              event.stopPropagation();
              store.editActivity(activity);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity(current);
            };
            const iRef = _react.default.useRef(null);
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              toggleDelete();
            };
            const onDrag = event => {
              event.stopPropagation();
              event.preventDefault();
              controls.start(event);
            };
            const description = store.getActivityDetail(activity) ?? texts.item.empty;
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "item-list__reorder-container",
              as: "div"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "draft-activity-list__item mobile-column-list"
            }, _react.default.createElement("section", {
              className: "list-item__column header__main-content "
            }, _react.default.createElement("div", {
              className: "column-icons animated-icons"
            }, _react.default.createElement(_framerMotion.motion.div, {
              ref: iRef,
              className: "drag-icon__container",
              initial: {
                position: 'absolute',
                left: '-100%',
                opacity: 0
              },
              animate: {
                left: 0,
                opacity: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeOut'
              },
              style: {
                position: 'absolute'
              }
            }, _react.default.createElement(_icons2.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            })), _react.default.createElement("div", null, _react.default.createElement(_icons.BgIcon, {
              name: activity.type
            }))), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("h6", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("span", null, description)))), _react.default.createElement("div", {
              className: "list-item__column list-item__actions"
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement(_framerMotion.motion.div, {
              className: "actions"
            }, _react.default.createElement(_icons2.IconButton, {
              disabled: true,
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons2.IconButton, {
              disabled: true,
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            })))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activities/list/item/specs/index
      **************************************************/

      ims.set('./activities/list/item/specs/index', {
        hash: 3192841847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _list = require("./list");
          function ActivitySpecs({
            specs,
            type
          }) {
            return _react.default.createElement(_react.default.Fragment, null, specs.kind && _react.default.createElement(_chips.Chip, {
              variant: "primary"
            }, specs.kind), _react.default.createElement(_list.SpecsList, {
              specs: specs,
              type: type
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./activities/list/item/specs/list
      *************************************************/

      ims.set('./activities/list/item/specs/list', {
        hash: 3707831496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsList = SpecsList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../../context");
          const Item = ({
            data
          }) => _react.default.createElement("li", null, data);
          const QuestionItem = ({
            data,
            index
          }) => {
            const {
              question
            } = data;
            return _react.default.createElement("li", null, question);
          };
          function SpecsList({
            type,
            specs
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const types = {
              'content-theory': ['topics', Item],
              'multiple-choice': ['questions', QuestionItem],
              spoken: ['criterias', Item]
            };
            if (!types[type]) return null;
            const [itemsType, ItemControl] = types[type];
            const itemsList = type === 'content-theory' ? specs.hasOwnProperty('keyConcepts') ? specs.keyConcepts : specs[itemsType] : specs[itemsType];
            if (!itemsList || Array.isArray(itemsList) && !itemsList.length) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h6", null, texts[itemsType]), _react.default.createElement(_list.List, {
              className: "questions-list",
              items: itemsList,
              control: ItemControl
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/context
      *********************************************************/

      ims.set('./activities/list/modal-selection/context', {
        hash: 1482088572,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCreateActivityContext = exports.CreateActivityContext = void 0;
          var _react = require("react");
          const CreateActivityContext = exports.CreateActivityContext = _react.default.createContext({});
          const useCreateActivityContext = () => _react.default.useContext(CreateActivityContext);
          exports.useCreateActivityContext = useCreateActivityContext;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/index
      *******************************************************/

      ims.set('./activities/list/modal-selection/index', {
        hash: 1768562555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          var _context2 = require("./context");
          var _list = require("./list");
          var _validation = require("./validation");
          function ModalSelection({
            show,
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [activity, setActivity] = _react.default.useState(null);
            const [selected, setSelected] = _react.default.useState(null);
            const [view, setView] = _react.default.useState('list');
            if (!show) return null;
            const handleOnClose = () => {
              setView('list');
              onClose();
            };
            if (!store.model.valid) return _react.default.createElement(_validation.ModalValidation, {
              onClose: handleOnClose
            });
            const contextValue = {
              onClose,
              activity,
              setActivity,
              setView,
              selected,
              setSelected
            };
            return _react.default.createElement(_context2.CreateActivityContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              onClose: handleOnClose
            }, _react.default.createElement(_list.ModalActivityList, {
              onClose: handleOnClose
            })));
          }
          0;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/item
      ******************************************************/

      ims.set('./activities/list/modal-selection/item', {
        hash: 1837744184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionActivityItem = void 0;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../../../context");
          const SelectionActivityItem = ({
            item,
            selected,
            setSelected
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const onClick = event => setSelected(item);
            const cls = `draft-activity-list__item activity--${item}${item === selected ? ' selected' : ''}`;
            return _react.default.createElement("li", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement(_icons.BgIcon, {
              name: item
            }), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.activities.types[item]), _react.default.createElement("span", null, texts.activities.descriptionTypes[item])));
          };
          exports.SelectionActivityItem = SelectionActivityItem;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/list
      ******************************************************/

      ims.set('./activities/list/modal-selection/list', {
        hash: 712982921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivityList = ModalActivityList;
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          var _context2 = require("./context");
          var _item = require("./item");
          function ModalActivityList({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              selected,
              setSelected
            } = (0, _context2.useCreateActivityContext)();
            const onSubmit = async event => {
              event;
              const activity = await store.model.activities.add(selected, true);
              store.editActivity(activity);
              _routing.routing.pushState(`${store.url}&activityId=${activity.instanceId}`);
              onClose();
            };
            return _react.default.createElement("div", {
              className: "modal-container"
            }, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
              className: "draft-activity-list",
              specs: {
                selected,
                setSelected
              },
              items: store.model.activities.availableTypes,
              control: _item.SelectionActivityItem
            }), _react.default.createElement("footer", {
              className: "actions flex-container gap-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              onClick: onSubmit,
              disabled: !selected
            }, store.globalTexts.actions.continue)));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./activities/list/modal-selection/validation
      ************************************************************/

      ims.set('./activities/list/modal-selection/validation', {
        hash: 4222962394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalValidation = ModalValidation;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          function ModalValidation({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.validationTitle), _react.default.createElement("p", null, texts.activities.createModal.validation)));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./body/description
      **********************************/

      ims.set('./body/description', {
        hash: 685892777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleDescription = ModuleDescription;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          function ModuleDescription({}) {
            const {
              texts: {
                module: moduleTexts,
                moduleTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const [content, setContent] = _react.default.useState(store.model.description);
            const onEdit = async event => {
              const {
                target
              } = event;
              store.model.set({
                [target.name]: target.value
              });
              setContent(target.value);
            };
            const onBlur = () => store.save();
            return _react.default.createElement(_ui.TourStep, {
              name: "description",
              texts: tour,
              className: "module-property"
            }, _react.default.createElement(_form.Textarea, {
              name: "description",
              variant: "floating",
              label: moduleTexts.description.label,
              placeholder: moduleTexts.description.placeholder,
              onChange: onEdit,
              onBlur: onBlur,
              value: content
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./body/index
      ****************************/

      ims.set('./body/index', {
        hash: 1662668743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleData = ModuleData;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _description = require("./description");
          var _form = require("pragmate-ui/form");
          function ModuleData() {
            const {
              store,
              texts: {
                module: moduleTexts
              }
            } = (0, _context.useModuleContext)();
            (0, _hooks.useBinder)([store.model], () => {}, ['activities.updated', 'objective.changed']);
            const onBlur = () => store.save();
            const onChange = event => store.model.set({
              objective: event.currentTarget.value
            });
            return _react.default.createElement("section", null, _react.default.createElement(_form.Textarea, {
              label: moduleTexts.objective,
              variant: "floating",
              onChange: onChange,
              value: store.model.objective,
              onBlur: onBlur
            }), _react.default.createElement(_description.ModuleDescription, null));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2525156511,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 668456881,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("./context");
          var _publish = require("./publish");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const [title, setTitle] = _react.default.useState(store.model.title ?? '');
            const onGenerate = notes => _mainLayout.LayoutBroker.ensureCredits(notes => store.model.generatePicture(notes), notes);
            const onChange = event => {
              setTitle(event.target.value);
              store.model.set({
                title: event.target.value
              });
            };
            const onBlur = event => {
              store.save();
            };
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "section-actions__container actions-end pt-0 m-0"
            }, _react.default.createElement(_publish.PublishModule, null)), _react.default.createElement("header", {
              className: "header-module__container "
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: store.model.pictureSuggestions,
              picture: picture,
              onGenerate: onGenerate
            }), _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_form.Input, {
              onBlur: onBlur,
              name: "title",
              onChange: onChange,
              className: "input__header",
              value: title,
              placeholder: texts.module.title,
              icon: "edit"
            })), store.model.owner && _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 970839485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleOverview = ModuleOverview;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _activities = require("./activities");
          var _modalSelection = require("./activities/list/modal-selection");
          var _body = require("./body");
          var _context = require("./context");
          var _header = require("./header");
          /*bundle*/ //@ts-check

          function ModuleOverview(props) {
            const {
              store,
              fetching
            } = props;
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showModal, setShowModal] = React.useState(false);
            if (!ready) return;
            const toggleModal = () => setShowModal(!showModal);
            const value = {
              store,
              texts,
              showModal,
              toggleModal,
              activities: [...store.model.activities.items]
            };
            const cls = `${fetching ? 'is-fetching' : ''}`;
            return React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length,
              isForm: true
            }, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(_body.ModuleData, null), React.createElement(_activities.ModuleActivities, null)), React.createElement(_modalSelection.ModalSelection, {
              show: showModal,
              onClose: toggleModal
            })));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 3382098941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "section-actions__container actions-end border-top"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            })), _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement("div", {
              className: "image-preload"
            }), _react.default.createElement("div", null, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              as: "h3"
            }, _react.default.createElement(_ui.SkeletonText, {
              height: "10px",
              width: "100px"
            })), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "60px"
            }))))))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./publish
      *************************/

      ims.set('./publish', {
        hash: 3937827622,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PublishModule = PublishModule;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function PublishModule() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const attrs = {
              disabled: !store.model.completed || !store.model.activities.items.length
            };
            const onSubmit = async () => {
              try {
                const activities = store.model.activities.getItems();
                const response = await store.model.publish({
                  activities,
                  type: 'module'
                });
                if (!response.status) {
                  _mainLayout.LayoutBroker.showMessage('error', texts.errors.CONTACT_ADMIN);
                  return;
                }
                _toast.toast.success(texts.toast.modulePublished);
                _routing.routing.replaceState({}, null, `/modules/list?tab=published`);
              } catch (e) {
                console.log(e);
                _toast.toast.error(texts.toast.errorPublishingModule);
              }
            };
            return _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "publish",
              index: 10
            }, _react.default.createElement("div", {
              className: "publish-action__container"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              onClick: onSubmit,
              variant: "primary",
              ...attrs
            }, texts.actions.publish)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./index",
        "from": "ModuleOverview",
        "name": "ModuleOverview"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./header').Header : value);
        (require || prop === 'ModuleOverview') && _export("ModuleOverview", ModuleOverview = require ? require('./index').ModuleOverview : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ0b2dnbGVNb2RhbCIsInVzZU1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImFjdGl2aXRpZXMiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJhcyIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9mb3JtIiwiX2xpc3QiLCJfaXRlbSIsIl9yZW9yZGVySXRlbSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInN0b3JlIiwiYWN0aW9uVGV4dHMiLCJnbG9iYWxUZXh0cyIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInJlb3JkZXJpbmciLCJzZXRSZW9yZGVyIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvcmRlclVwZGF0ZWQiLCJzZXRPcmRlclVwZGF0ZWQiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJzYXZlUmVvcmRlcmluZyIsIm1vZGVsIiwicmVvcmRlciIsInRvZ2xlUmVvcmRlciIsInJlb3JkZXJBdHRycyIsIm9yZGVyTGFiZWwiLCJvcmRlciIsImNsb3NlIiwiRnJhZ21lbnQiLCJpbmRleCIsImFkZCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwiUmVvcmRlck1vZHVsZUFjdGl2aXR5Iiwia2V5IiwiaWQiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiX21vZGFsIiwiRGVsZXRlTW9kYWwiLCJvbkNsb3NlIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJyZWYiLCJ1c2VSZWYiLCJjb250cm9scyIsInVzZURyYWdDb250cm9scyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiYWN0aXZpdHkiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwiZWRpdCIsInRhcmdldCIsImNvbnRhaW5zIiwic3RvcFByb3BhZ2F0aW9uIiwiZWRpdEFjdGl2aXR5IiwiZmluZCIsImlSZWYiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0IiwiZGVzY3JpcHRpb24iLCJnZXRBY3Rpdml0eURldGFpbCIsIkJnSWNvbiIsInR5cGUiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJQcm9wZXJ0eSIsInZhbHVlIiwiSXRlbSIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJwb3NpdGlvbiIsImxlZnQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJzdHlsZSIsIkljb24iLCJkaXNhYmxlZCIsIl9jaGlwcyIsIkFjdGl2aXR5U3BlY3MiLCJzcGVjcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQyIiwiX3ZhbGlkYXRpb24iLCJNb2RhbFNlbGVjdGlvbiIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlT25DbG9zZSIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJNb2RhbEFjdGl2aXR5TGlzdCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsImNscyIsImRlc2NyaXB0aW9uVHlwZXMiLCJfcm91dGluZyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ1cmwiLCJpbnN0YW5jZUlkIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImJsb2NrIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJzZXQiLCJvbkJsdXIiLCJzYXZlIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiX2hvb2tzIiwiX2Rlc2NyaXB0aW9uIiwiTW9kdWxlRGF0YSIsInVzZUJpbmRlciIsIm9iamVjdGl2ZSIsImN1cnJlbnRUYXJnZXQiLCJNb2R1bGVDb250ZXh0IiwiX2NvdmVySW1hZ2UiLCJfbWFpbkxheW91dCIsIl9wdWJsaXNoIiwiSGVhZGVyIiwic2V0VGl0bGUiLCJvbkdlbmVyYXRlIiwibm90ZXMiLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiSW5wdXQiLCJvd25lciIsIlJlYWN0IiwiX2JleW9uZF9jb250ZXh0IiwiX2FjdGl2aXRpZXMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfYm9keSIsIl9oZWFkZXIiLCJNb2R1bGVPdmVydmlldyIsInByb3BzIiwicmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIlBhZ2VDb250YWluZXIiLCJpc0Zvcm0iLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImF0dHJzIiwiY29tcGxldGVkIiwiZ2V0SXRlbXMiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9yZW9yZGVyLWl0ZW0udHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL2JvZHkvZGVzY3JpcHRpb24udHN4IiwiL3RzL2JvZHkvaW5kZXgudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3B1Ymxpc2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksR0FBQSxHQUFBSixPQUFBO1VBQ00sU0FBVUssaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFXLENBQUUsR0FBRyxJQUFBSixRQUFBLENBQUFLLGdCQUFnQixHQUFFO1lBRWpELE9BQ0NULE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q1osTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxhQUFLSixLQUFLLENBQUNNLE1BQU0sQ0FBQ0Ms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