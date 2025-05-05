System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/list",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 4171778809,
        creator: function (require, exports) {
          exports.txt = {
            "assign": {
              "title": {
                "share": "Asignar módulo a aulas",
                "dashboard": "Acceder a dashboard de la asignación"
              },
              "assigned": "Asignado",
              "noAssigned": "No hay aulas asignadas",
              "module": "Módulo",
              "messages": {
                "copied": "Enlace copiado al portapapeles",
                "assigned": "Módulo asignado al aula {classroom}"
              },
              "item": {
                "description": "El item no tiene descripción"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Copiar link",
                "test": "Probar",
                "navigate": "Navegar",
                "createClassroom": "Crear aula",
                "assign": {
                  "button": "Asignar",
                  "label": "El módulo no ha sido asignado a esta Aula"
                }
              },
              "errors": {
                "default": "No se ha podido asignar el módulo a esta Aula, por favor inténtelo de nuevo más tarde o contacte al administador"
              },
              "empty": {
                "share": {
                  "text": "Atención",
                  "description": "Aún no posees aulas creadas, debes crear una para poder asignar esta actividad.",
                  "action": "Crear aula"
                },
                "dashboard": {
                  "description": "Módulo sin asignaciones"
                }
              }
            },
            "delete": {
              "title": "Eliminar módulo",
              "description": "¿Está seguro que desea eliminar este módulo?",
              "errors": {
                "59": "El módulo no puede ser eliminado porque ya posee datos asociados.",
                "default": "Ocurrió un error al eliminar el módulo."
              }
            },
            "archive": {
              "title": "Archivar módulo",
              "description": "¿Está seguro que desea archivar este módulo?",
              "errors": {
                "default": "Ocurrió un error al archivar el módulo."
              }
            },
            "empty": {
              "general": {
                "title": "Crea tu Primer Módulo",
                "description": "Moderniza tu enfoque educativo al dar vida a tu primer módulo. ¡Desata tu creatividad, da forma a tu contenido y disfruta de la experiencia del aprendizaje! "
              },
              "drafts": {
                "title": "Aún no hay Borradores",
                "description": "No tienes borradores en este momento. Comienza a crear y perfeccionar tu contenido antes de publicarlo. "
              },
              "published": {
                "title": "No hay Módulos Publicados",
                "description": "No hay módulos publicados disponibles. Trabaja en cada módulo y publícalos para actualizar este listado de publicaciones. "
              }
            },
            "errors": {
              "default": "No se ha podido realizar la operación. Por favor, inténtelo de nuevo.",
              "ERROR_GETTING_URL": "Error obteniendo url"
            },
            "title": "Mis módulos de aprendizaje",
            "tabs": {
              "drafts": "Borradores",
              "published": "Publicados"
            },
            "actions": {
              "create": "Crear",
              "delete": "Borrar item",
              "use": "Crear una versión nueva"
            },
            "loading": {
              "title": "Cargando Datos",
              "description": "Estamos cargando sus datos. Por favor, espere un momento."
            },
            "item": {
              "description": "El módulo no tiene una descripción aún",
              "draftTitle": "Módulo Borrador"
            }
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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