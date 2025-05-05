System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/data/models", "@beyond-js/reactive@2.0.5/model", "pragmate-ui@1.0.0-beta.7/form", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk120DataModels) {
      dependency_4 = _aimpactAilearnSdk120DataModels;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_pragmateUi100Beta7Form) {
      dependency_6 = _pragmateUi100Beta7Form;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_9 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsKernel0112Routing) {
      dependency_10 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_14 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments-activity-closing"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/data/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['pragmate-ui/form', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/image', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignments-activity-closing-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments-activity-closing",
        "is": "page",
        "route": "/assignments/${id}/activity/${activityId}/closing",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/assignments-activity-closing');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1262728966,
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
            show() {
              const id = this.uri.vars.get('id');
              const activityId = this.uri.vars.get('activityId');
              this.#store.load(id, activityId);
            }
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4082462416,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/ailearn-sdk/data/models");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #activity;
            get activity() {
              return this.#activity;
            }
            #classroom;
            get classroom() {
              return this.#classroom;
            }
            #participants;
            get participants() {
              return this.#participants;
            }
            async load(id, activityId) {
              const model = new _models.ActivityClosing();
              const {
                activity,
                classroom,
                participants
              } = await model.load({
                id,
                activityId
              });
              this.#activity = activity;
              this.#classroom = classroom;
              this.#participants = participants;
              super.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/filters
      *******************************/

      ims.set('./views/filters', {
        hash: 2662240677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = void 0;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          const Filters = ({
            searchTerm,
            selectedFilter,
            onSearchChange,
            onFilterChange
          }) => {
            return _react.default.createElement("section", {
              className: "search-form__container"
            }, _react.default.createElement("div", {
              className: "search-filters"
            }, _react.default.createElement(_form.Input, {
              type: "text",
              placeholder: "Buscar usuario...",
              value: searchTerm,
              onChange: onSearchChange,
              className: "search-input"
            }), _react.default.createElement(_form.Select, {
              value: selectedFilter,
              onChange: onFilterChange,
              className: "filter-select"
            }, _react.default.createElement("option", {
              value: "all"
            }, "Todos los campos"), _react.default.createElement("option", {
              value: "objective_achievement"
            }, "Logro del objetivo"), _react.default.createElement("option", {
              value: "actual_performance"
            }, "Rendimiento"), _react.default.createElement("option", {
              value: "expected_interactions"
            }, "Interacciones esperadas"), _react.default.createElement("option", {
              value: "feedback"
            }, "Feedback"))));
          };
          exports.Filters = Filters;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2815040707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = void 0;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          const Header = ({
            activity,
            classroom
          }) => {
            const onClassroomClick = event => {
              event.stopPropagation();
              event.preventDefault();
              _routing.routing.pushState(`/classrooms/view/${classroom.id}`);
            };
            const creator = activity.module.creator;
            const owner = activity.module.owner ?? creator;
            return _react.default.createElement("div", {
              className: "page__header-container"
            }, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "activity",
              src: activity.picture,
              alt: activity.title
            }), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              href: `/assignments/${activity.id}`
            }, _react.default.createElement("h1", null, activity.title)), _react.default.createElement("div", {
              className: "dashboard-header__data"
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "dashboard-header__classroom",
              onClick: onClassroomClick
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("span", {
              className: "assignment-classroom"
            }, classroom.name)), _react.default.createElement("div", {
              className: "dashboard-header__module"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "module"
            }), _react.default.createElement("span", null, activity.module.title))), _react.default.createElement("div", {
              className: "users-data__container"
            }, creator && _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement("h6", {
              className: "user-data__label"
            }, "Creador"), _react.default.createElement("div", {
              className: "user-data__detail"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "user",
              src: creator.photoUrl,
              alt: creator.name
            }), _react.default.createElement("span", null, creator.name))), owner && _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement("h6", {
              className: "user-data__label"
            }, "Administrador"), _react.default.createElement("div", {
              className: "user-data__detail"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "user",
              src: owner.photoUrl,
              alt: owner.name
            }), _react.default.createElement("span", null, owner.name))))))));
          };
          exports.Header = Header;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2682762670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _filters = require("./filters");
          var _header = require("./header");
          var _item = require("./item");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const [expandedUser, setExpandedUser] = (0, _react.useState)(null);
            const [searchTerm, setSearchTerm] = (0, _react.useState)('');
            const [selectedFilter, setSelectedFilter] = (0, _react.useState)('all');
            const toggleExpand = userId => setExpandedUser(expandedUser === userId ? null : userId);
            const handleSearch = event => setSearchTerm(event.target.value.toLowerCase());
            const handleFilterChange = event => {
              const filter = event.target.value;
              setSelectedFilter(filter);
              filter !== 'all' ? setExpandedUser('all') : setExpandedUser(null);
            };
            if (!ready) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const users = Object.entries(store.participants).filter(([_, item]) => item.user.name.toLowerCase().includes(searchTerm));
            const userList = users.map(([uid, item]) => _react.default.createElement(_item.UserItem, {
              key: uid,
              uid: uid,
              item: item,
              expandedUser: expandedUser,
              onToggleExpand: toggleExpand,
              selectedFilter: selectedFilter
            }));
            return _react.default.createElement(_ui.PageContainer, {
              className: "user-list-page"
            }, _react.default.createElement(_header.Header, {
              activity: store.activity,
              classroom: store.classroom
            }), _react.default.createElement(_filters.Filters, {
              searchTerm: searchTerm,
              selectedFilter: selectedFilter,
              onSearchChange: handleSearch,
              onFilterChange: handleFilterChange
            }), !users.length ? _react.default.createElement("p", null, "No se encontraron usuarios.") : userList);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 4076367341,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = void 0;
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          const UserItem = ({
            uid,
            item,
            expandedUser,
            onToggleExpand,
            selectedFilter
          }) => {
            const isExpanded = expandedUser === 'all' || expandedUser === uid;
            const objectiveAchievement = _react.default.createElement("p", null, _react.default.createElement("strong", null, "Logro del objetivo:"), " ", item.objective_achievement);
            const actualPerformance = _react.default.createElement("p", null, _react.default.createElement("strong", null, "Rendimiento:"), " ", item.actual_performance);
            const expectedInteractions = _react.default.createElement("p", null, _react.default.createElement("strong", null, "Interacciones esperadas:"), " ", item.expected_interactions);
            const feedback = _react.default.createElement("p", null, _react.default.createElement("strong", null, "Feedback:"), " ", item.feedback);
            const renderFilteredContent = () => {
              if (selectedFilter === 'all') {
                return _react.default.createElement(_react.default.Fragment, null, objectiveAchievement, actualPerformance, expectedInteractions, feedback);
              }
              switch (selectedFilter) {
                case 'objective_achievement':
                  return objectiveAchievement;
                case 'actual_performance':
                  return actualPerformance;
                case 'expected_interactions':
                  return expectedInteractions;
                case 'feedback':
                  return feedback;
                default:
                  return null;
              }
            };
            return _react.default.createElement("div", {
              key: uid,
              className: "user-card"
            }, _react.default.createElement("div", {
              className: "user-header",
              onClick: () => onToggleExpand(uid)
            }, _react.default.createElement("div", {
              className: "user-header__main"
            }, _react.default.createElement(_image.Image, {
              src: item.user.photoUrl,
              alt: item.user.name,
              className: "user-photo"
            }), _react.default.createElement("strong", null, item.user.name)), _react.default.createElement("div", {
              className: "user-header__stats"
            }, _react.default.createElement("div", {
              className: "stat-item"
            }, "Interacciones", _react.default.createElement("span", null, item.interactions)), _react.default.createElement("div", {
              className: "stat-item"
            }, _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }), _react.default.createElement("span", null, item.alerts.length)))), isExpanded && _react.default.createElement("div", {
              className: "user-details"
            }, renderFilteredContent()));
          };
          exports.UserItem = UserItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImlkIiwidXJpIiwidmFycyIsImdldCIsImFjdGl2aXR5SWQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsImFjdGl2aXR5IiwiY2xhc3Nyb29tIiwicGFydGljaXBhbnRzIiwibW9kZWwiLCJBY3Rpdml0eUNsb3NpbmciLCJyZWFkeSIsIl9mb3JtIiwiX3JlYWN0IiwiRmlsdGVycyIsInNlYXJjaFRlcm0iLCJzZWxlY3RlZEZpbHRlciIsIm9uU2VhcmNoQ2hhbmdlIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsIlNlbGVjdCIsIl9pY29ucyIsIl91aSIsIl9yb3V0aW5nIiwiX2NvbXBvbmVudHMiLCJIZWFkZXIiLCJvbkNsYXNzcm9vbUNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjcmVhdG9yIiwibW9kdWxlIiwib3duZXIiLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInNyYyIsInBpY3R1cmUiLCJhbHQiLCJ0aXRsZSIsIkxpbmsiLCJocmVmIiwib25DbGljayIsIkFwcEljb24iLCJpY29uIiwibmFtZSIsInBob3RvVXJsIiwiX2hvb2tzIiwiX2ZpbHRlcnMiLCJfaGVhZGVyIiwiX2l0ZW0iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiZXhwYW5kZWRVc2VyIiwic2V0RXhwYW5kZWRVc2VyIiwic2V0U2VhcmNoVGVybSIsInNldFNlbGVjdGVkRmlsdGVyIiwidG9nZ2xlRXhwYW5kIiwidXNlcklkIiwiaGFuZGxlU2VhcmNoIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJmaWx0ZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwidXNlcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwiXyIsIml0ZW0iLCJ1c2VyIiwiaW5jbHVkZXMiLCJ1c2VyTGlzdCIsIm1hcCIsInVpZCIsIlVzZXJJdGVtIiwia2V5Iiwib25Ub2dnbGVFeHBhbmQiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiX2ltYWdlIiwiaXNFeHBhbmRlZCIsIm9iamVjdGl2ZUFjaGlldmVtZW50Iiwib2JqZWN0aXZlX2FjaGlldmVtZW50IiwiYWN0dWFsUGVyZm9ybWFuY2UiLCJhY3R1YWxfcGVyZm9ybWFuY2UiLCJleHBlY3RlZEludGVyYWN0aW9ucyIsImV4cGVjdGVkX2ludGVyYWN0aW9ucyIsImZlZWRiYWNrIiwicmVuZGVyRmlsdGVyZWRDb250ZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImludGVyYWN0aW9ucyIsIkljb24iLCJhbGVydHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFK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