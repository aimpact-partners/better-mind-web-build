System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/application", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1/jsx-runtime"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk120Application) {
      dependency_4 = _aimpactAilearnSdk120Application;
    }, function (_aimpactChatSdk154Session) {
      dependency_5 = _aimpactChatSdk154Session;
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_9 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_react1831JsxRuntime) {
      dependency_11 = _react1831JsxRuntime;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/pages/privacy"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/application', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['react/jsx-runtime', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "privacy-page",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/pages/privacy",
        "is": "page",
        "route": "/privacy"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/pages/privacy');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 308745009,
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
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('page'));
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
        hash: 1722649233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _application = require("@aimpact/ailearn-sdk/application");
          var _model = require("@beyond-js/reactive/model");
          //@ts-ignore
          class StoreManager extends _model.ReactiveModel {
            application;
            #content;
            get content() {
              return this.#content;
            }
            constructor() {
              super();
              this.reactiveProps(['page']);
              this.application = new _application.Application();
              globalThis.store = this;
            }
            async load(page) {
              // const data = await this.application.policies();
              // this.#content = data.policy;
              this.page = page;
              this.ready = true;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3251310977,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3245278203,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _privacy = require("./privacy.mdx");
          /*bundle*/
          function View({
            store
          }) {
            return React.createElement("div", {
              className: "container-page-content"
            }, React.createElement(_privacy.default, null));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/privacy.mdx
      ***********************************/

      ims.set('./views/privacy.mdx', {
        hash: 2568567038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Política de Privacidad RVD.AI"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Fecha de última actualización: 4 de marzo de 2024"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Esta Política de Privacidad forma parte integrante de los Términos y Condiciones de Uso de RVD.AI (los “Términos y\r\nCondiciones de Uso”). Todos los términos empleados en el presente documento que no se encuentran definidos especialmente\r\nen éste, tendrán el significado atribuidos a los mismos en los Términos y Condiciones de Uso. Esta Política de\r\nPrivacidad describe cómo el Prestador (en adelante, “El Prestador”) recopila, utiliza y protege la información personal\r\nque el Usuario proporciona al utilizar el Servicio."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Al aceptar los Términos y Condiciones de Uso, el Usuario presta su consentimiento libre, expreso e informado a todas las\r\nprevisiones de la presente Política de Privacidad."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "1. Información que se Recopila:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cuando el Usuario utiliza los Servicios, podría recopilarse la siguiente Información:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Información de Registro: Al registrarse el Usuario en nuestro servicio, podemos solicitar información como su nombre,\r\ndirección de correo electrónico, fecha de nacimiento y otra información necesaria para crear su cuenta."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Interacción con la IA: Podemos recopilar información sobre la interacción del Usuario con la IA incluidas las consultas\r\nrealizadas y las respuestas proporcionadas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Información de Uso: Podemos recopilar información sobre cómo utiliza el Servicio, como los recursos a los que el Usuario\r\naccede y el tiempo que pasa en el Sitio web (y aplicaciones). También podrán ser recopiladas la dirección IP del\r\nUsuario, cookies, y datos que permitirán identificar el navegador o cuenta del Usuario."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Todo ello, la “información”."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "2. Uso de la Información:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador utiliza la Información recopilada para los siguientes propósitos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Proporcionar y mantener el Servicio."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Mejorar y personalizar la experiencia del Usuario."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Comprender cómo se utiliza el Servicio y realizar análisis para mejorar productos y servicios."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Enviar comunicaciones promocionales y actualizaciones relacionadas con el Servicio, siempre que el Usuario no haya\r\nrechazado esta opción."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La Información objeto de Tratamiento no será utilizada para finalidades distintas o incompatibles con aquellas que\r\nmotivaron su obtención y será destruida cuando haya dejado de ser necesaria o pertinente a los fines para los cuales\r\nhubiese sido recolectada."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "3. Como podría compartirse la Información del Usuario:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador no vende ni alquila su Información personal a terceros. Sin embargo, podemos compartir su Información en\r\nlas siguientes circunstancias:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Con proveedores de servicios que ayudan al Prestador a operar el Servicio y brindar otros productos y servicios."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Cuando sea requerido por la ley o en respuesta a una solicitud legal válida, como una orden judicial."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Con el consentimiento del Usuario o de acuerdo con sus instrucciones."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "4. Seguridad de la Información:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Usuario se compromete a proteger la seguridad de su Información personal y a utilizar medidas de seguridad razonables\r\npara protegerla contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Se destaca que la\r\nInformación que se recopila puede ser transferida, almacenada y/o tratada en Estados Unidos u otros países fuera de\r\nArgentina, y al proporcionar su Información, el Usuario consiente dicha transferencia, almacenamiento y/o Tratamiento."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Se entenderá por “Tratamiento” a todas las operaciones y procedimientos sistemáticos, electrónicos o no, que permitan la\r\nrecolección, conservación, ordenación, almacenamiento, modificación, relacionamiento, evaluación, bloqueo, destrucción,\r\ny en general el procesamiento de datos personales, así como también su cesión a terceros a través de comunicaciones,\r\nconsultas, interconexiones o transferencias."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La transferencia de Información se realizará en todo caso, exclusivamente a países cuyas legislaciones proporcionen\r\nniveles de protección adecuados y conformes con esta Política de Privacidad."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "5. Cambios en la Política de Privacidad:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El Prestador se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento para cumplir con las\r\nleyes y regulaciones aplicables. Le notificaremos cualquier cambio publicando la Política de Privacidad actualizada en\r\nnuestro sitio web y actualizando la fecha de “Última Actualización” al principio de la Política de Privacidad, todo ello\r\nde acuerdo a lo indicado en los Términos y Condiciones de Uso."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "6. Sus Derechos y Opciones:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "De acuerdo con la Ley de Protección de Datos Personales en Argentina (Ley 25.326), usted tiene derecho a acceder,\r\nrectificar y suprimir su Información, así como a oponerse al Tratamiento de los mismos. También tiene derecho a revocar\r\nsu consentimiento en cualquier momento. Para ejercer estos derechos o para hacer cualquier pregunta sobre la Política de\r\nPrivacidad deberá contactar al servicio de Soporte del Prestador mediante los siguientes medios:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Email:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Teléfono:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ángel Estrada y Compañía S.A., con domicilio en la calle Maipú 116, Piso 8 (C1084ABD) de la Ciudad Autónoma de Buenos\r\nAires, Argentina, es titular y responsable del tratamiento y de la protección de datos (Información). Los Usuarios\r\npueden enviar solicitudes para ejercer sus derechos con respecto a su Información en el marco de la Ley 25.326."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La Agencia de Acceso a la Información Pública, como órgano regulador de la ley 25.326, es responsable de recibir los\r\nreclamos e informes presentados por interesados que consideren que sus datos se han visto afectados por una infracción\r\nde la Ley de Protección de Datos Personales."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = exports.default = MDXContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfYXBwbGljYXRpb24iLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiYXBwbGljYXRpb24iLCJjb250ZW50IiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiQXBwbGljYXRpb24iLCJnbG9iYWxUaGlzIiwicGFnZSIsInJlYWR5IiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9wcml2YWN5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzXFxwcml2YWN5Lm1keCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxL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