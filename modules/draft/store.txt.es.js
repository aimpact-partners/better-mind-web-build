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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/draft/store",
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
        hash: 2738234910,
        creator: function (require, exports) {
          exports.txt = {
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
            "synthesis": "Síntesis",
            "article": "Contenido",
            "description": "Descripción",
            "objectives": "Objetivos",
            "task": "Tu tarea",
            "chat": {
              "empty": {
                "credits": {
                  "title": "¿Listo para aprender?",
                  "description": "Empieza haciendo la consulta que desees"
                },
                "noCredits": {
                  "title": "Necesitas creditos de AI para empezar",
                  "description": "Solicita creditos para empezar a aprender con el Agente de AI"
                }
              }
            },
            "tabs": {
              "chat": "Chat",
              "content": "Contenido"
            },
            "languages": {
              "select": {
                "label": "Idioma",
                "placeholder": "Seleccionar Idioma"
              },
              "label": "Idiomas",
              "en": "Inglés",
              "es": "Español",
              "pt": "Portugués",
              "fr": "Francés",
              "de": "Alemán",
              "it": "Italiano"
            },
            "alerts": {
              "coins": {
                "available": "El propietario dispone de créditos IA",
                "unavailable": "El propietario no dispone de créditos IA"
              }
            },
            "audience": {
              "label": "Tipo de formación",
              "error": "Por favor seleccione el tipo de formación",
              "select": "Seleccionar tipo de formación"
            },
            "level": {
              "label": "Grado o Nivel",
              "error": "Por favor seleccione un nivel de grado",
              "select": "Seleccionar grado"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Siguiente",
                "prevBtnText": "Anterior",
                "doneBtnText": "Listo"
              },
              "administrator": {
                "title": "Selecciona el propietario",
                "description": "Elige el propietario responsable del módulo de aprendizaje. Debe tener créditos asignados para la creación de módulos con asistencia de IA."
              },
              "parameters": {
                "title": "Selecciona los parámetros del módulo de aprendizaje",
                "description": "Selecciona el idioma del módulo de aprendizaje, el año escolar de tus alumnos y el número de actividades. Podrás encontrar más información en nuestro canal de YouTube @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Redacta el objetivo principal del módulo de aprendizaje",
                "description": "Este objetivo será central para guiar el resto del contenido y las actividades del módulo."
              },
              "save": {
                "title": "Guarda el objetivo del módulo de aprendizaje",
                "description": "Una vez guardado, podrás solicitar créditos para mejorar el objetivo y comenzar a trabajar con IA."
              }
            },
            "pathway": {
              "manual": {
                "title": {
                  "label": "Titulo del módulo",
                  "placeholder": "Ingresa el título del módulo"
                },
                "description": {
                  "label": "Descripción del módulo",
                  "placeholder": "Ingresa la descripción del módulo"
                }
              },
              "ai": {
                "title": "Continuemos de forma asistida",
                "form": {
                  "size": {
                    "placeholder": "Cantidad de actividades del módulo",
                    "items": {
                      "brief": "Breve (3 actividades)",
                      "standard": "Estándar (5 actividades)",
                      "extended": "Extendido (7 actividades)"
                    }
                  },
                  "notes": {
                    "placeholder": "Ingrese las instrucciones para guiar a la IA en la creación de tus actividades"
                  }
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Define las instrucciones para la IA",
                "description": "Guía a la Inteligencia Artificial para generar contenido basados en tus principios pedagógicos indicando, por ejemplo, los tipos de actividades y el tono de las mismas (informal, inspirador, etc.)."
              },
              "textarea": {
                "label": "Información adicional",
                "placeholder": "Comparte sugerencias específicas o áreas de mejora..."
              },
              "errors": {
                "default": "Ha ocurrido un error, por favor intenta nuevamente."
              },
              "confirm": {
                "title": "Estas por confirmar el objetivo de tu modulo",
                "description": " No has seleccionado ninguna de las sugerencias generadas ¿Deseas avanzar sin implementarlas?"
              }
            },
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "¿Desea utilizar esta versión mejorada de tu objetivo?",
                  "cancel": "No, gracias",
                  "confirm": "Sí, actualizar mi objetivo"
                }
              },
              "total": "Sugerencias seleccionadas",
              "origin": "Entidad educativa",
              "label": "Sugerencia",
              "irrelevant": "El objetivo del módulo proporcionado parece no ser adecuado para la audiencia definida. Por favor, verifica esto y vuelve a intentarlo."
            },
            "setup": {
              "actions": {
                "cancel": "Cancelar",
                "continue": "Continuar"
              },
              "messages": {
                "save": "Objetivo guardado con éxito"
              },
              "title": "Crea un Nuevo Módulo de Aprendizaje",
              "subtitle": "Configura las características de tu módulo para comenzar.",
              "generation": {
                "title": "Comencemos a dar forma al módulo",
                "subtitle": "Indica de qué manera deseas continuar",
                "options": {
                  "ai": "Quiero generar las actividades con ayuda de la IA",
                  "manually": "Quiero generar las actividades de forma manual"
                }
              },
              "form": {
                "administrator": {
                  "label": "Propietario",
                  "select": "Seleccionar propietario",
                  "account": "Cuenta actual",
                  "error": "Necesita especificar el propietario del módulo de aprendizaje"
                },
                "title": {
                  "label": "Titulo del módulo"
                },
                "description": {
                  "label": "Descripción del módulo"
                },
                "activities": {
                  "label": "Cantidad de actividades del módulo"
                },
                "notes": {
                  "placeholder": "Ingrese las instrucciones para guiar a la IA en la creación de tus actividades"
                },
                "objective": {
                  "textArea": "Ingresa el objetivo del módulo"
                }
              },
              "sugestions": {
                "title": "Sugerencias de instrucción"
              },
              "confirmation": {
                "title": "⚠️ Revisa y confirma",
                "ownerDescription": "Propietario del módulo de aprendizaje",
                "label": "Propietario del módulo de aprendizaje",
                "description": "Una vez guardada esta información, no podrá ser modificada."
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