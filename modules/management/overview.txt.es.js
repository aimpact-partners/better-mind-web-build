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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/management/overview",
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
        hash: 4234251891,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Agregar",
              "analyse": "Sugerir mejoras",
              "activities": "Generar actividades",
              "activity": "Actividades",
              "applySuggestions": "Aplicar sugerencias",
              "back": "Atrás",
              "cancel": "Cancelar",
              "continue": "Continuar",
              "cover": "Generar portada",
              "clean": "Limpiar",
              "create": "Crear",
              "confirm": "Confirmar",
              "delete": "Eliminar",
              "edit": "Editar",
              "generate": "Generar con IA",
              "next": "Siguiente",
              "publish": "Publicar",
              "removeSuggestions": "Ignorar sugerencias",
              "refine": "Refinar",
              "save": "Guardar",
              "update": "Subir documento",
              "upload": "Subir imagen",
              "manual": "Diseño manual"
            },
            "activities": {
              "item": {
                "empty": "Esta actividad aún no posee contenido o titulo definido"
              },
              "types": {
                "content-theory": "Contenido/Teoría",
                "multiple-choice": "Selección Múltiple",
                "character-talk": "Conversación con un Personaje",
                "debate": "Debate",
                "spoken": "Exposición Oral"
              },
              "minutes": "Min",
              "description": "Descripción",
              "objective": "Objetivo",
              "activity": {
                "empty": "Esta actividad no tiene contenido"
              },
              "type": "Tipo",
              "questions": "Preguntas",
              "topics": "Temas",
              "title": "Actividades",
              "empty": {
                "title": "Aún no posees actividades",
                "text": "Agrega una actividad a tu módulo"
              },
              "createModal": {
                "title": "Selecciona el tipo de actividad",
                "validation": "Debes completar el titulo y la descripción del módulo para poder agregar una actividad.",
                "validationTitle": "Módulo incompleto"
              },
              "delete": {
                "title": "¿Realmente desea eliminar esta actividad?",
                "subtitle": "Al eliminar esta actividad, no podrá recuperarla."
              },
              "descriptionTypes": {
                "content-theory": "Artículo, adaptaciones y audios sobre un tema específico para construir una base teórica.",
                "multiple-choice": "Preguntas de selección múltiple para evaluar comprensión",
                "character-talk": "Aprender a través de una conversación con un personaje de ficción",
                "debate": " Conversación uno-a-uno con un asistente virtual para explorar y profundizar temas",
                "spoken": "Presentación oral sobre un tema asignado para evaluar conocimientos u otros usos como creatividad, presentaciones originales, etc"
              },
              "states": {
                "empty": "Actividad vacia",
                "completed": "Completada",
                "processing": "En edición"
              }
            },
            "module": {
              "title": "Agrega el nombre del módulo de aprendizaje",
              "description": {
                "label": "Descripción",
                "placeholder": "Agrega descripción aquí"
              },
              "objective": "Objetivo del módulo",
              "owner": "Administrador",
              "actions": {
                "description": "Agrega una descripción",
                "addActivity": "Agrega actividad"
              },
              "activities": {
                "title": "Lista de actividades",
                "empty": {
                  "title": "Módulo sin actividades",
                  "text": "Agrega una actividad a tu módulo"
                }
              }
            },
            "refine": {
              "title": "Asistente de Diseño de Actividad con IA",
              "description": "Utiliza el asistente de IA para personalizar y mejorar el diseño de la actividad.",
              "description2": "Simplemente escribe lo que tienes en mente, y la IA ayudará a estructurar la actividad para que se ajuste a tus objetivos de aprendizaje.",
              "textarea": {
                "label": "Instrucciones adicionales",
                "placeholder": "Comparte sugerencias específicas o áreas de mejora..."
              },
              "image": {
                "title": "Refina la calidad de tu imagen",
                "subtitle": "Tus aportes nos ayudarán a mejorar el contenido.",
                "confirm": {
                  "title": "¿Deseas reemplazar la imagen actual?",
                  "subtitle": "Si confirmas, la imagen actual será reemplazada."
                }
              },
              "module": {
                "title": "Refina la calidad de tu módulo",
                "subtitle": "Tus aportes nos ayudarán a mejorar el contenido.",
                "confirm": {
                  "title": "¿Deseas reemplazar el contenido actual?",
                  "subtitle": "Si confirmas, el proceso de generación reemplazará el contenido actual con el nuevo. Si deseas conservar el contenido actual, haz clic en cancelar."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "¿Estás seguro?",
                "description": "Tus cambios no han sido guardados. Si continúas, los perderás."
              }
            },
            "delete": {
              "title": "Eliminar contenido",
              "description": "¿Estás seguro de que quieres eliminar el contenido de esta actividad?"
            },
            "picture": {
              "title": "Genera la mejor imagen para tu módulo",
              "description": "Esta herramienta te ayudará a generar la mejor imagen para tu módulo. Puedes subir una imagen y nosotros generaremos la mejor imagen para tu módulo. También puedes usar el editor de imágenes para editar la imagen y generar la mejor imagen para tu módulo.",
              "notes": {
                "label": "Notas",
                "placeholder": "Comparte tus sugerencias para crear la mejor imagen para tu módulo"
              },
              "confirm": {
                "title": "¿Quieres reemplazar la imagen actual?",
                "subtitle": "Si confirmas, la imagen actual será reemplazada."
              }
            },
            "errors": {
              "CONTACT_ADMIN": "Por favor, contacte con el administrador"
            },
            "toast": {
              "modulePublished": "Módulo publicado correctamente",
              "errorPublishingModule": "Error al publicar el módulo"
            },
            "moduleTour": {
              "moduleName": {
                "title": "Agrega el nombre del módulo de aprendizaje",
                "description": "Ingresa el nombre del módulo de aprendizaje en este campo."
              },
              "description": {
                "title": "Descripción",
                "description": "Agrega una descripción del módulo aquí."
              },
              "image": {
                "title": "Generar Imagen",
                "description": "Haz clic en este ícono para generar una imagen del módulo usando AI."
              },
              "activities": {
                "title": "Actividades",
                "description": "Acá podrás visualizar las actividades agregadas en el módulo"
              },
              "addActivity": {
                "title": "Agrega Actividad",
                "description": "Haz clic en este botón para agregar una nueva actividad al módulo."
              },
              "publish": {
                "title": "Una vez completado",
                "description": "Haz clic en este botón para publicar el módulo una vez completado."
              }
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