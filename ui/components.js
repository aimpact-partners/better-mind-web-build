System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@beyond-js/reactive@2.0.4/model", "pragmate-ui@1.0.0-beta.7/alert", "react@18.3.1", "@aimpact/ailearn-app@0.4.1/components/module-card", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/components/ui", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/image", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_5 = _pragmateUi100Beta7Alert;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp041ComponentsModuleCard) {
      dependency_7 = _aimpactAilearnApp041ComponentsModuleCard;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_8 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_10 = _aimpactAilearnApp041ComponentsUi;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_11 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }, function (_beyondJsKernel0112Routing) {
      dependency_17 = _beyondJsKernel0112Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/ui/components"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['pragmate-ui/alert', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/components/module-card', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/toast', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/components', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/image', dependency_16], ['@beyond-js/kernel/routing', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-ui-components",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/ui/components",
        "is": "page",
        "route": "/ui/components",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/ui/components');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4202921180,
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
              globalThis.c = this;
              this.#store = new _store.StoreManager(this.uri.qs.get('view'));
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.view = this.uri.qs.get('view');
            }
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
        hash: 4196239097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            isStore;
            constructor(view) {
              super({
                properties: ['view']
              });
              this.view = view || 'classrooms';
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/cards/DATA
      *********************************************/

      ims.set('./views/components/cards/DATA', {
        hash: 218262819,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CARDS_DATA = void 0;
          const CARDS_DATA = exports.CARDS_DATA = {
            assignment: {
              module: {
                classroom: {
                  name: 'Matematicas',
                  id: 'ddc86faf-4e0c-4f22-a406-525d5f9b8947',
                  picture: ''
                },
                owner: {
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                  name: "Henry Test's",
                  id: '650d629a-59ef-4dc2-9b98-28cdaed68f04'
                },
                activities: {
                  count: 3,
                  types: ['content-theory', 'debate', 'spoken']
                },
                audience: {
                  catetory: 'aaa',
                  level: '3er Año'
                },
                language: 'es',
                timeUpdated: 1715290709493,
                timeCreated: 1715290709493,
                description: 'Módulo destinado a comprender y aplicar los principios fundamentales de la trigonometría en situaciones prácticas y analíticas. Los estudiantes aprenderán sobre las razones trigonométricas en triángulos rectángulos, funciones trigonométricas, y el uso de herramientas digitales para su análisis.',
                id: '403932c9-7314-4bb2-b861-e0e077b3a6ee',
                title: 'Título de la tarjeta de módulos publicados puede tener hasta tres líneas...',
                picture: 'https://dev.ailearn.api.aimpact.partners/modules/403932c9-7314-4bb2-b861-e0e077b3a6ee/picture'
              },
              id: '274fa1c9-99cd-4d84-8780-1fe04881b93f'
            },
            community: {
              owner: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                name: "Henry Test's",
                id: '650d629a-59ef-4dc2-9b98-28cdaed68f04'
              },
              audience: {
                catetory: 'aaa',
                level: '3er Año'
              },
              creator: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c',
                name: 'Henry Box',
                id: '9hYZlT9NGYT4bfdPxqRzkit2exa2'
              },
              description: 'Este módulo te invita a explorar el impacto de la Inteligencia Artificial (IA) en la educación. Desde cómo puede personalizar tu aprendizaje hasta su papel como complemento en la enseñanza, buscamos fomentar un debate informado sobre sus beneficios y desafíos.',
              language: 'es',
              title: 'Inteligencia Artificial en el Aula',
              picture: 'https://ailearn-http-v2-j2rcifstnq-uc.a.run.app/modules/cd9a1fa7-280e-415b-951c-459b2248b38d/picture?95154.29999999702',
              objective: 'Analizar y reflexionar sobre el uso de la Inteligencia Artificial en el aula desde diferentes perspectivas, promoviendo debates estructurados para evaluar críticamente sus ventajas y desafíos en la enseñanza. Se abordará el valor de la misma en la personalización del aprendizaje, su rol complementario en la labor docente, y se invitará a la reflexión sobre su influencia en el proceso de aprendizaje de manera individual. Se utilizarán ejemplos cotidianos.',
              duration: 15,
              activities: {
                count: 3,
                types: ['content-theory', 'debate', 'spoken']
              },
              timeUpdated: 1715290709493,
              playground: {
                assignment: '/assignments/2c3b24a8-e7b1-4f8a-86ea-0c0fbd3761ef'
              },
              timeCreated: 1715290709493,
              id: '6f78c411-b383-4d3d-8051-2e34e887af40'
            },
            activity: {
              id: '717d372a-ded8-4239-9d16-6ad668305216',
              objective: 'Demostrar la comprensión de los efectos de las antenas Wi-Fi mediante una presentación oral estructurada.',
              type: 'spoken',
              title: 'Presentación Oral sobre Efectos de Wi-Fi',
              description: 'Prepararás y presentarás un breve informe oral sobre los efectos de la radiación de las antenas Wi-Fi en la salud humana.',
              language: 'es',
              picture: '',
              duration: 30,
              module: {
                id: 'd816e99f-0105-43f2-b5a6-e005fd45e1ed',
                creator: {
                  id: '9hYZlT9NGYT4bfdPxqRzkit2exa2',
                  name: 'Henry Box',
                  photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTteBk-dzWH8dPy8wGf6OUdISFnBiASQbKLgugwXqfDy-PyQ=s96-c'
                },
                objective: 'Analizar el impacto de las antenas Wi-Fi en la salud humana, fomentando la comprensión de los principios básicos de la radiación electromagnética y su relación con el cuerpo humano, así como la capacidad para explicar fenómenos científicos asociados a esta tecnología.',
                title: 'Impacto de las Antenas Wi-Fi en la Salud Humana',
                description: 'Este módulo está diseñado para analizar el efecto de las antenas Wi-Fi en la salud humana, proporcionando una comprensión de la radiación electromagnética y su interacción con el cuerpo humano.',
                language: 'es',
                picture: 'https://dev.ailearn.api.aimpact.partners/modules/d816e99f-0105-43f2-b5a6-e005fd45e1ed/picture?6477436',
                duration: '45',
                audience: '5to año',
                public: true,
                status: 'active',
                type: 'module',
                timeCreated: 1730817517390,
                timeUpdated: 1730817517390,
                ai: true
              },
              resources: {
                materials: {},
                specs: {
                  assessment: 'La tarea consiste en evaluar la presentación oral del estudiante sobre los efectos de las antenas Wi-Fi. Se debe considerar la claridad de la exposición, la comprensión del tema y la estructura del texto entregado. Se evaluarán aspectos como la precisión de la información, la capacidad de argumentación y la calidad del lenguaje utilizado. Al finalizar la actividad, se debe leer atentamente el texto de la presentación y tomar nota de los puntos fuertes y las áreas de mejora.',
                  criteria: [{
                    name: 'Claridad',
                    subject: 'El alumno debe exponer de manera clara y comprensible, evitando tecnicismos innecesarios y facilitando la comprensión del tema a la audiencia.'
                  }, {
                    name: 'Estructura',
                    subject: 'La presentación debe seguir una estructura lógica con introducción, desarrollo y conclusiones claramente definidas, permitiendo un seguimiento fácil por parte del oyente.'
                  }, {
                    name: 'Contenido',
                    subject: 'Se evaluará la precisión y relevancia de la información presentada sobre las antenas Wi-Fi, así como la inclusión de argumentos relacionados con los efectos en la salud y el medio ambiente.'
                  }, {
                    name: 'Lenguaje',
                    subject: 'El uso de un lenguaje apropiado y el cuidado en la pronunciación, ortografía y gramática serán factores clave en la evaluación del texto entregado.'
                  }],
                  task: 'Realiza una presentación oral de hasta tres minutos sobre los efectos de las antenas Wi-Fi. La presentación debe incluir una introducción sobre qué son las antenas Wi-Fi, cómo funcionan y los posibles efectos en la salud y el medio ambiente. Asegúrate de estructurar tu exposición en: introducción, desarrollo y conclusiones. Utiliza un lenguaje claro y conciso, y demuestra tu comprensión del tema. Prepara un texto que puedas entregar después de tu exposición.',
                  objectives: '',
                  instructions: ''
                }
              }
            }
          };
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/cards/alerts
      ***********************************************/

      ims.set('./views/components/cards/alerts', {
        hash: 575573814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Alerts = Alerts;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          function Alerts() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, " Texts states"), _react.default.createElement("span", {
              className: "text-success"
            }, " Success alert"), _react.default.createElement("span", {
              className: "text-error"
            }, " error alert"), _react.default.createElement("span", {
              className: "text-info"
            }, " info alert"), _react.default.createElement("span", {
              className: "text-warning"
            }, " warning alert"), _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Alerts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "success"
            }, " Success alert"), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, " error alert"), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, " info alert"), _react.default.createElement(_alert.Alert, {
              type: "warning"
            }, " warning alert")), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_alert.Alert, {
              type: "error",
              message: "Esto es un error"
            }), _react.default.createElement(_alert.Alert, {
              type: "success",
              message: "Esto es un success"
            }), _react.default.createElement(_alert.Alert, {
              type: "info",
              message: "Esto es un info"
            }), _react.default.createElement(_alert.Alert, {
              type: "warning",
              message: "Esto es un error"
            }), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "success"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("h3", null, "Alert title"), _react.default.createElement("p", null, "Content in de alert")))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/cards/index
      **********************************************/

      ims.set('./views/components/cards/index', {
        hash: 3040713242,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardsTemplate = CardsTemplate;
          var React = require("react");
          var _assignments = require("./types/assignments");
          var _community = require("./types/community");
          var _draft = require("./types/draft");
          var _module = require("./types/module");
          var _homeAssignments = require("./types/home-assignments");
          var _activity = require("./types/activity");
          function CardsTemplate() {
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h1", null, "Cards"), React.createElement("div", {
              className: "tree-columns"
            }, React.createElement(_activity.ActivityCardExample, {
              type: "content-theory"
            }), React.createElement(_activity.ActivityCardExample, {
              type: "character-talk"
            }), React.createElement(_activity.ActivityCardExample, {
              type: "multiple-choice"
            }), React.createElement(_module.ModuleCardExample, null), React.createElement(_community.CommunityCard, null), React.createElement(_draft.DraftCard, null), React.createElement(_assignments.AssignmentCardExample, null), React.createElement(_assignments.AssignmentCardExample, {
              className: "entity-card--xs"
            }), React.createElement(_homeAssignments.AssignmentHomeCardExample, null)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/components/cards/types/activity
      *******************************************************/

      ims.set('./views/components/cards/types/activity', {
        hash: 4179321000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCardExample = ActivityCardExample;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _DATA = require("../DATA");
          function ActivityCardExample({
            className,
            type
          }) {
            const {
              activity: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              },
              types: {
                'content-theory': 'Contenido/Teoría',
                'multiple-choice': 'Selección Múltiple',
                'character-talk': 'Conversación con un Personaje',
                debate: 'Debate',
                assessment: 'Selección Múltiple',
                spoken: 'Exposición Oral'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Activity"), React.createElement(_moduleCard.ActivityCard, {
              type: type,
              className: className,
              item: item,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/components/cards/types/assignments
      **********************************************************/

      ims.set('./views/components/cards/types/assignments', {
        hash: 680018754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCardExample = AssignmentCardExample;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _DATA = require("../DATA");
          function AssignmentCardExample({
            className
          }) {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Assignment mobile"), React.createElement(_moduleCard.AssignmentCard, {
              className: className,
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/components/cards/types/community
      ********************************************************/

      ims.set('./views/components/cards/types/community', {
        hash: 4161253365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CommunityCard = CommunityCard;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function CommunityCard() {
            const {
              community: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                use: 'Usar',
                test: 'Probar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Community"), React.createElement(_moduleCard.ModuleCard, {
              href: item.playground.assignment,
              className: "community-card",
              item: item,
              texts: texts,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, item?.playground?.assignment && React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.test,
              href: item.playground.assignment
            }), React.createElement(_icons.AppIconButton, {
              icon: "clone",
              title: texts.actions.use
            })))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/cards/types/draft
      ****************************************************/

      ims.set('./views/components/cards/types/draft', {
        hash: 1187526347,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var React = require("react");
          var _DATA = require("../DATA");
          // import { useHmr } from '@aimpact/ailearn-app/components/hooks';

          function DraftCard() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            // listen module-card changes and re-render the component
            // useHmr([hmr]);
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title',
                draftTitle: 'Draft Module'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Draft"), React.createElement(_moduleCard.DraftCard, {
              className: "draft--card",
              item: item.module,
              texts: texts,
              audience: false,
              entity: "module"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })))));
          }
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./views/components/cards/types/home-assignments
      ***************************************************************/

      ims.set('./views/components/cards/types/home-assignments', {
        hash: 1131448942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentHomeCardExample = AssignmentHomeCardExample;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function AssignmentHomeCardExample() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Home Assignments"), React.createElement(_moduleCard.AssignmentCard, {
              classroom: item.module.classroom,
              item: item.module,
              texts: {
                texts
              },
              audience: {
                level: '3er año'
              },
              entity: "assignment"
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/cards/types/module
      *****************************************************/

      ims.set('./views/components/cards/types/module', {
        hash: 3747642367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardExample = ModuleCardExample;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _DATA = require("../DATA");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function ModuleCardExample() {
            const {
              assignment: item
            } = _DATA.CARDS_DATA;
            const [hmrUpdated, setHmrUpdated] = React.useState({});
            // listen module-card changes and re-render the component
            (0, _hooks.useBinder)([_moduleCard.hmr], () => setHmrUpdated({}));
            const texts = {
              item: {
                description: 'This is a description',
                title: 'This is a title'
              },
              actions: {
                link: 'Navegar'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h3", null, "Module"), React.createElement(_moduleCard.ModuleCard, {
              item: item.module,
              texts: texts,
              audience: false,
              entity: "assignment"
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module
            }, React.createElement(_moduleCard.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts.actions.link,
              href: `/assignments/${item.id}`
            })))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/chips
      ****************************************/

      ims.set('./views/components/chips', {
        hash: 69787763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChipsTemplate = ChipsTemplate;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ChipsTemplate() {
            return React.createElement("div", {
              className: "chips"
            }, React.createElement("h1", null, "Chips"), React.createElement("div", {
              className: "flex-w-container"
            }, React.createElement(_ui.Chip, null, "Chip"), React.createElement(_ui.Chip, {
              variant: "primary"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "secondary"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "success"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "warning"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "error"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "info"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "light"
            }, "Chip"), React.createElement(_ui.Chip, {
              variant: "dark"
            }, "Chip")));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/components/classrooms/DATA
      **************************************************/

      ims.set('./views/components/classrooms/DATA', {
        hash: 2177842802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DATA = void 0;
          const DATA = exports.DATA = {
            classroom: {
              owner: {
                photoUrl: 'https://lh3.googleusercontent.com/a/AAcHTtdZVHKyHNQutbdqxduIlPEx90m9ufbN-kimmJ7-=s96-c',
                name: 'Julio Rodriguez',
                id: 'tHXKJj7aQsVW9oSvCKRg24dKfds1'
              },
              timeUpdated: 1726753948073,
              description: 'caracas',
              timeCreated: 1726753948073,
              id: '14fe458c-0ef2-41c1-a50d-921442584a06',
              name: 'caracas 2111',
              code: '555112'
            }
          };
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/components/classrooms/index
      ***************************************************/

      ims.set('./views/components/classrooms/index', {
        hash: 2228966926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCardsTemplate = ClassroomCardsTemplate;
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _DATA = require("./DATA");
          function ClassroomCardsTemplate({
            texts
          }) {
            const {
              classroom
            } = _DATA.DATA;
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            texts = {
              ...texts,
              messages: {
                copied: 'Copiado al portapapeles'
              },
              actions: {
                delete: 'Delete',
                copy: 'Copy'
              },
              classrooms: {
                code: 'Code'
              }
            };
            return React.createElement("div", {
              className: "cards"
            }, React.createElement("h1", null, "Classrooms"), React.createElement("div", {
              className: "tree-columns"
            }, React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-debate"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-content-theory"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-conversation"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-spoken"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-character-talk"
            }), React.createElement(_moduleCard.ClassroomCard, {
              item: classroom,
              texts: texts,
              className: "bg-multiple-choice"
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/form/index
      *********************************************/

      ims.set('./views/components/form/index', {
        hash: 1120968173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormTemplate = FormTemplate;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          function FormTemplate() {
            const [value, setValue] = _react.default.useState('');
            const onChange = event => {
              setValue(event.target.value);
            };
            return _react.default.createElement("div", {
              className: "icons-page"
            }, _react.default.createElement("h1", null, "Form"), _react.default.createElement("h3", null, "Textarea"), _react.default.createElement(_form.Textarea, {
              placeholder: "placeholder",
              variant: "floating",
              label: "This is a textarea label",
              value: value,
              onChange: onChange
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/icons/icons
      **********************************************/

      ims.set('./views/components/icons/icons', {
        hash: 3414743747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconsTemplate = IconsTemplate;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function IconsTemplate() {
            const IconItem = ({
              item
            }) => _react.default.createElement(_icons.AppIcon, {
              name: item,
              title: item
            });
            const IconButtonItem = ({
              item,
              ...props
            }) => _react.default.createElement(_icons.AppIconButton, {
              name: item,
              title: item,
              ...props
            });
            const BgIconItem = ({
              item
            }) => _react.default.createElement(_icons.BgIcon, {
              name: item,
              title: item
            });
            return _react.default.createElement("div", {
              className: "icons-page"
            }, _react.default.createElement("h1", null, "Icons"), _react.default.createElement("h3", null, "All icons"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: Object.keys(_icons.ICONS),
              control: IconItem
            }), _react.default.createElement("h2", null, "Background icons"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: ['content-theory', 'debate', 'spoken', 'character-talk', 'multiple-choice'],
              control: BgIconItem
            }), _react.default.createElement("h2", null, "Icon Buttons"), _react.default.createElement("h3", null, "Default"), _react.default.createElement(_list.List, {
              className: "icons-list",
              items: Object.keys(_icons.ICONS),
              control: IconButtonItem
            }), _react.default.createElement("h3", null, "Primary"), _react.default.createElement(_list.List, {
              className: "icons-list",
              specs: {
                variant: 'primary'
              },
              items: Object.keys(_icons.ICONS),
              control: IconButtonItem
            }));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/trash/backgrounds
      ****************************************************/

      ims.set('./views/components/trash/backgrounds', {
        hash: 1161471450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Backgrounds = Backgrounds;
          var _react = require("react");
          function Backgrounds() {
            const backgrounds = ['primary-container', 'secondary-container', 'primary-dark-container', 'secondary-dark-container', 'primary-light-container', 'secondary-light-container', 'background', 'surface', 'surface-variant'];
            return _react.default.createElement("div", null, backgrounds.map(item => {
              return _react.default.createElement("div", {
                key: item
              }, _react.default.createElement("h3", null, item), _react.default.createElement("div", {
                className: `bg-box bg-${item}`
              }));
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/trash/banners
      ************************************************/

      ims.set('./views/components/trash/banners', {
        hash: 3095340695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Banners = Banners;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Banners() {
            const headerList = [{
              url: '',
              status: 'waiting'
            }, {
              url: '',
              status: 'current'
            }, {
              url: '',
              status: 'done'
            }];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Banners"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h4", null, "Default"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default Light"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              option: "light",
              title: "\u00A1Hello <Student Name>!",
              alt: 'card-robot',
              image: "/assets/ai-robot.webp"
            }, _react.default.createElement("p", {
              className: "p2"
            }, "Welcome to your activity space. You can now access the learning modules assigned to you by your teacher. It's easy!"))), _react.default.createElement("h4", null, "Default with Numbers/List"), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.HeaderCard, {
              optional: "light",
              list: headerList,
              title: "Let's keep evolving"
            }, _react.default.createElement("p", {
              className: "p1 mb-20"
            }, "Here you have a space to list multiple pages and follow up with a nice dynamic header.", _react.default.createElement("br", null), _react.default.createElement("br", null), "Showing the different possibilities that have redirections through links and multiple colours such as the following:", ' '), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "current: var(--on-primary)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "waiting: var(--tertiary-20)"), _react.default.createElement("p", {
              className: "p2 mb-10"
            }, "success: var(--success-70)")))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/trash/buttons copy
      *****************************************************/

      ims.set('./views/components/trash/buttons copy', {
        hash: 504127515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              icon: "user"
            }, "Primary button")), _react.default.createElement("div", {
              className: "button-row"
            }, _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "primary",
              icon: "user"
            }, "Primary button"), _react.default.createElement(_components.Button, {
              bordered: true,
              variant: "secondary",
              icon: "user"
            }, "Primary button")));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/trash/buttons
      ************************************************/

      ims.set('./views/components/trash/buttons', {
        hash: 1649869800,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Buttons = Buttons;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Buttons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Buttons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("span", {
              className: "h3"
            }, "Normal state"), _react.default.createElement(_components.Button, null, "Primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary"
            }, "Secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary"
            }, "Tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "Disabled Buttons"), _react.default.createElement(_components.Button, {
              disabled: true
            }, "Primary disabled button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              disabled: true
            }, "Secondary disable button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              disabled: true
            }, "Tertiary disable button"), _react.default.createElement("span", {
              className: "h3"
            }, "Bordered"), _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true
            }, "primary button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true
            }, "secondary button"), _react.default.createElement(_components.Button, {
              variant: "tertiary",
              bordered: true
            }, "tertiary button"), _react.default.createElement("span", {
              className: "h3"
            }, "ButtonGroup"), _react.default.createElement(_components.ButtonGroup, null, _react.default.createElement(_components.Button, null, "btn 1"), _react.default.createElement(_components.Button, null, "btn 2"), _react.default.createElement(_components.Button, null, "btn 3")))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/empty
      **********************************************/

      ims.set('./views/components/trash/empty', {
        hash: 2006490327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Empty() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "EmptyList"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_ui.EmptyCard, {
              text: "This is a text field to explain what data is missing.",
              icon: "generate"
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/forms
      **********************************************/

      ims.set('./views/components/trash/forms', {
        hash: 3020221867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Forms = Forms;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          function Forms() {
            const defaultValues = {
              defaultName: '',
              examplePassword: '',
              exampleEmail: '',
              hoverText: '',
              defaultText: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
            };
            const {
              defaultName,
              examplePassword,
              exampleEmail,
              hoverText,
              defaultText
            } = values;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Forms"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement(_form.Input, {
              label: "Full Name - Default State",
              type: "text",
              name: "defaultName",
              value: defaultName,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: "Full Password - Default State",
              type: "password",
              name: "examplePassword",
              value: examplePassword,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "hoverText",
              value: hoverText,
              onChange: handleChange,
              placeholder: "This is a placeholder example. Complete State"
            }), _react.default.createElement(_form.Input, {
              label: "Full Email - Default State",
              type: "text",
              name: "defaultText",
              value: defaultText,
              onChange: handleChange,
              placeholder: "Input user name and surname. Complete State"
            }), _react.default.createElement(_form.Input, {
              placeholder: "Default Disabled Input State",
              type: "email",
              name: "exampleEmail",
              disabled: true,
              value: exampleEmail,
              onChange: handleChange,
              required: true
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/icons
      **********************************************/

      ims.set('./views/components/trash/icons', {
        hash: 2311052754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icons = Icons;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Icons() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Icons"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
            }, "Default"), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "chat"
            })), _react.default.createElement("div", {
              className: "sub-item__container optional"
            }, _react.default.createElement("span", {
              className: "p2 mb-10"
            }, "Hover"), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "profile"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "refresh"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "drag"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "list-menu"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "mic"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "delete"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "copy"
            }), _react.default.createElement(_icons.Icon, {
              className: "hover md",
              icon: "chat"
            })))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/components/trash/illustrations
      ******************************************************/

      ims.set('./views/components/trash/illustrations', {
        hash: 2599249148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Illustrations = Illustrations;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function Illustrations() {
            return _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Illustrations"), _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("div", {
              className: "images-list__container"
            }, _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/lwkztda1sq08ushwipmi",
              alt: "Happy Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_270/v1/AImpact/f7knfihku0pyr8eo2yqh",
              alt: "Neutral Explorer"
            }), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/etq89fualhdkhkpeofat",
              alt: "Neutral Explorer"
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/trash/lists
      **********************************************/

      ims.set('./views/components/trash/lists', {
        hash: 110724290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Lists = Lists;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          const exampleItems = [{
            text: '3'
          }, {
            text: '2'
          }, {
            text: '1'
          }, {
            text: '...'
          }, {
            text: ''
          }];
          function Lists() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Lists"), _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "item__container optional centered"
            }, _react.default.createElement(_list.List, {
              className: "list__container",
              items: exampleItems,
              control: Item
            }))));
          }
          function Item({
            data
          }) {
            return _react.default.createElement("span", {
              className: "p2"
            }, data.text);
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/components/trash/typography
      ***************************************************/

      ims.set('./views/components/trash/typography', {
        hash: 1604906955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Typography = Typography;
          var _react = require("react");
          function Typography() {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Fonts"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("h1", null, "h1: Title with h1"), _react.default.createElement("h2", null, "h2: Title with h2"), _react.default.createElement("h3", null, "h3: Title with h3"), _react.default.createElement("h4", null, "h4: Title with h4"), _react.default.createElement("h5", null, "h5: Title with h5"))), _react.default.createElement("h3", {
              className: "mb-10 h2"
            }, "Paragraph"), _react.default.createElement("section", {
              className: "elements__container"
            }, _react.default.createElement("div", {
              className: "item__container"
            }, _react.default.createElement("p", {
              className: "p1"
            }, "P1. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p2"
            }, "P2. Paragraph: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sunt alias aut vel, repellat, tenetur fuga ratione soluta, perspiciatis nihil iste sed voluptatibus voluptates nostrum?Consectetur id corporis optio similique."), _react.default.createElement("p", {
              className: "p1 disabled-text"
            }, "P1 Disable text"), _react.default.createElement("p", {
              className: "p2 disabled-text"
            }, "P2 Disable text"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2016320009,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _alerts = require("./components/cards/alerts");
          var _list = require("pragmate-ui/list");
          var _cards = require("./components/cards");
          var _classrooms = require("./components/classrooms");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("./components/icons/icons");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _chips = require("./components/chips");
          var _form = require("./components/form");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = _react.default.useState(store.view ? store.view : 'classrooms');
            (0, _hooks.useBinder)([store], () => setView(store.view));
            const components = {
              alerts: _alerts.Alerts,
              cards: _cards.CardsTemplate,
              // classrooms: CardsTemplate,
              classrooms: _classrooms.ClassroomCardsTemplate,
              icons: _icons.IconsTemplate,
              chips: _chips.ChipsTemplate,
              form: _form.FormTemplate
            };
            const Item = ({
              item
            }) => {
              const onClick = event => {
                _routing.routing.pushState(`/ui/components?view=${item}`);
                setView(item);
              };
              const cls = `components-ui-page__item ${view === item ? 'active' : ''}`;
              return _react.default.createElement("li", {
                onClick: onClick,
                className: cls
              }, item);
            };
            const Main = components[view];
            return _react.default.createElement(_ui.PageContainer, {
              className: "components-ui-page"
            }, _react.default.createElement("aside", null, _react.default.createElement(_list.List, {
              items: Object.keys(components),
              control: Item
            })), _react.default.createElement("main", null, _react.default.createElement(Main, null)));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJnbG9iYWxUaGlzIiwiYyIsIlN0b3JlTWFuYWdlciIsInVyaSIsInFzIiwiZ2V0IiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ2aWV3IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIkNBUkRTX0RBVEEiLCJhc3NpZ25tZW50IiwibW9kdWxlIiwiY2xhc3Nyb29tIiwibmFtZSIsImlkIiwicGljdHVyZSIsIm93bmVyIiwicGhvdG9VcmwiLCJhY3Rpdml0aWVzIiwiY291bnQiLCJ0eXBlcyIsImF1ZGllbmNlIiwiY2F0ZXRvcnkiLCJsZXZlbCIsImxhbmd1YWdlIiwidGltZVVwZGF0ZWQiLCJ0aW1lQ3JlYXRlZCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJjb21tdW5pdHkiLCJjcmVhdG9yIiwib2JqZWN0aXZlIiwiZHVyYXRpb24iLCJwbGF5Z3JvdW5kIiwiYWN0aXZpdHkiLCJ0eXBlIiwicHVibGljIiwic3RhdHVzIiwiYWkiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzcGVjcyIsImFzc2Vzc21lbnQiLCJjcml0ZXJpYSIsInN1YmplY3QiLCJ0YXNrIiwib2JqZWN0aXZlcyIsImluc3RydWN0aW9ucyIsIl9hbGVydCIsIl9yZWFjdCIsIkFsZXJ0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBbGVydCIsIm1lc3NhZ2UiLCJSZWFjdCIsIl9hc3NpZ25tZW50cyIsIl9jb21tdW5pdHkiLCJfZHJhZnQiLCJfbW9kdWxlIiwiX2hvbWVBc3NpZ25tZW50cyIsIl9hY3Rpdml0eSIsIkNhcmRzVGVtcGxhdGUiLCJBY3Rpdml0eUNhcmRFeGFtcGxlIiwiTW9kdWxlQ2FyZEV4YW1wbGUiLCJDb21tdW5pdHlDYXJkIiwiRHJhZnRDYXJkIiwiQXNzaWdubWVudENhcmRFeGFtcGxlIiwiQXNzaWdubWVudEhvbWVDYXJkRXhhbXBsZSIsIl9tb2R1bGVDYXJkIiwiX2hvb2tzIiwiX0RBVEEiLCJpdGVtIiwiaG1yVXBkYXRlZCIsInNldEhtclVwZGF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImhtciIsInRleHRzIiwiYWN0aW9ucyIsImxpbmsiLCJkZWJhdGUiLCJzcG9rZW4iLCJBY3Rpdml0eUNhcmQiLCJlbnRpdHkiLCJBc3NpZ25tZW50Q2FyZCIsIl9pY29ucyIsInVzZSIsInRlc3QiLCJNb2R1bGVDYXJkIiwiaHJlZiIsIk1vZHVsZUNhcmRGb290ZXIiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJpY29uIiwiZHJhZnRUaXRsZSIsIl91aSIsIkNoaXBzVGVtcGxhdGUiLCJDaGlwIiwidmFyaWFudCIsIkRBVEEiLCJjb2RlIiwiX3RvYXN0IiwiQ2xhc3Nyb29tQ2FyZHNUZW1wbGF0ZSIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwiZGVsZXRlIiwiY2xhc3Nyb29tcyIsIkNsYXNzcm9vbUNhcmQiLCJfZm9ybSIsIkZvcm1UZW1wbGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsIl9saXN0IiwiSWNvbnNUZW1wbGF0ZSIsIkljb25JdGVtIiwiQXBwSWNvbiIsIkljb25CdXR0b25JdGVtIiwicHJvcHMiLCJCZ0ljb25JdGVtIiwiQmdJY29uIiwiTGlzdCIsIml0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsIklDT05TIiwiY29udHJvbCIsIkJhY2tncm91bmRzIiwiYmFja2dyb3VuZHMiLCJtYXAiLCJrZXkiLCJCYW5uZXJzIiwiaGVhZGVyTGlzdCIsInVybCIsIkhlYWRlckNhcmQiLCJhbHQiLCJpbWFnZSIsIm9wdGlvbiIsIm9wdGlvbmFsIiwibGlzdCIsIl9jb21wb25lbnRzIiwiQnV0dG9ucyIsIkJ1dHRvbiIsImJvcmRlcmVkIiwiZGlzYWJsZWQiLCJCdXR0b25Hcm91cCIsIkVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIkZvcm1zIiwiZGVmYXVsdFZhbHVlcyIsImRlZmF1bHROYW1lIiwiZXhhbXBsZVBhc3N3b3JkIiwiZXhhbXBsZUVtYWlsIiwiaG92ZXJUZXh0IiwiZGVmYXVsdFRleHQiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VmFsdWUiLCJJbnB1dCIsInJlcXVpcmVkIiwiSWNvbnMiLCJJY29uIiwiX2ltYWdlIiwiSWxsdXN0cmF0aW9ucyIsIkltYWdlIiwic3JjIiwiZXhhbXBsZUl0ZW1zIiwiTGlzdHMiLCJJdGVtIiwiZGF0YSIsIlR5cG9ncmFwaHkiLCJfYWxlcnRzIiwiX2NhcmRzIiwiX2NsYXNzcm9vbXMiLCJfcm91dGluZyIsIl9jaGlwcyIsInNldFZpZXciLCJjb21wb25lbnRzIiwiYWxlcnRzIiwiY2FyZHMiLCJpY29ucyIsImNoaXBzIiwiZm9ybSIsIm9uQ2xpY2siLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwiTWFpbiIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL0RBVEEudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9jYXJkcy9hbGVydHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvYXNzaWdubWVudHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvY29tbXVuaXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2RyYWZ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NhcmRzL3R5cGVzL2hvbWUtYXNzaWdubWVudHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY2FyZHMvdHlwZXMvbW9kdWxlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NoaXBzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NsYXNzcm9vbXMvREFUQS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2NsYXNzcm9vbXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29ucy9pY29ucy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9iYWNrZ3JvdW5kcy50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9iYW5uZXJzLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2J1dHRvbnMgY29weS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy90cmFzaC9idXR0b25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2Zvcm1zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2ljb25zLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RyYXNoL2lsbHVzdHJhdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvbGlzdHMudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdHJhc2gvdHlwb2dyYXBoeS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1ZDLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHLElBQUk7Y0FDbkIsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFRLFlBQVksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Y0FDdkQsT0FBTyxJQUFJLENBQUMsQ0FBQVAsS0FBTTtZQUNuQjtZQUNBLElBQUlRLE1BQU1BLENBQUE7Y0FDVCxPQUFPWCxNQUFBLENBQUFZLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksR0FBRyxJQUFJLENBQUNOLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzNDO1lBRUE7OztZQUdBSyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBZ0IsTUFBQSxHQUFBbkIsT0FBQTtVQUtNLE1BQU9TLFlBQWEsU0FBUVUsTUFBQSxDQUFBQyxhQUFxQjtZ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