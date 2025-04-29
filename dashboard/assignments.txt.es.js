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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard/assignments",
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
        hash: 2281680320,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "summary": "Resumen",
              "objectives": "Progreso",
              "noSummary": "Esta actividad no posee resumen u objetivos",
              "progress": "Progreso",
              "type": "Tipo de actividad",
              "subtype": "Subtipo",
              "description": "Descripción",
              "empty": "El alumno aún no ha realizado esta actividad",
              "noAnalysis": "El alumno no ha hecho progresos en este objetivo",
              "interactions": "Interacciones",
              "chat": {
                "tab": "Conversación",
                "action": "Ver mensajes"
              },
              "objectivesStatus": {
                "in-progress": "En progreso",
                "completed": "Completado",
                "pending": "Pendiente",
                "outstanding": "Destacado"
              },
              "status": {
                "done": "Hecho",
                "pending": "Pendiente"
              },
              "spoken": {
                "audio": "Audio del estudiante",
                "feedback": "Evaluación y retroalimentación",
                "transcription": "Transcripción"
              },
              "multipleChoice": {
                "participation": {
                  "title": "Participación",
                  "detail": "Respuestas correctas"
                },
                "correct": "Respuestas Correctas",
                "wrong": "Respuestas Incorrectas"
              },
              "types": {
                "content-theory": "Contenido/Teoría",
                "multiple-choice": "Selección Múltiple",
                "character-talk": "Conversación con un Personaje",
                "debate": "Debate",
                "spoken": "Exposición Oral"
              }
            },
            "assignment": {
              "empty": {
                "title": "El alumno no ha participado en esta asignación"
              }
            },
            "messages": "mensajes",
            "chat": {
              "title": "Conversación",
              "empty": {
                "title": "No hay mensajes en esta conversación",
                "description": "El alumno aún no ha enviado mensajes a través del chat."
              },
              "synthesis": "Síntesis de la conversación",
              "systemActions": {
                "kb-response": "Datos obtenidos de la base de conocimientos: ",
                "fetching-tool-data": "Voy a cosultar los documentos de la clase",
                "kb-processed-response": "Análisis sobre contenido finalizado",
                "transcription": "Obteniendo transcripción",
                "functions": {
                  "kb": "Consultando la base de conocimiento acerca de: "
                }
              }
            },
            "list": {
              "students": "Alumnos",
              "participants": "participantes",
              "search": "buscar",
              "generalPanel": "Panel general"
            },
            "finish": "Finalizar",
            "results": "Resultados",
            "total": "Cantidad de preguntas",
            "correct": "Respuestas correctas",
            "wrong": "Respuestas incorrectas",
            "title": "Estado del Aula",
            "owner": "Administrador",
            "creator": "Creador",
            "alerts": "Alertas",
            "archived": "Esta asignación se encuentra archivada",
            "type": "Tipo de actividad",
            "subtype": "Subtipo de actividad",
            "noMessages": "No existe mensaje previo",
            "addCredits": {
              "action": "Habiliar IA",
              "title": "¿Deseas habilitar la ia al alumno?",
              "subtitle": "Los creditos permiten que el alumno interactúe con la IA de la actividad"
            },
            "actions": {
              "wall": "Muro",
              "archive": "Archivar",
              "restore": "Desarchivar"
            },
            "studentHeader": {
              "filter": "Filtrar por actividad"
            },
            "interaction": "Interacción",
            "interactions": "Interacciones",
            "preevaluation": "Pre-evaluación",
            "multiple": "Selección múltiple",
            "enableAI": {
              "action": "Habilitar IA",
              "success": "La IA ha sido habilitada correctamente para el alumno",
              "noEnable": "El alumno aún no ha habilitado la IA"
            },
            "of": "de",
            "spoken": "Evaluación oral",
            "empty": "Aún no existen participaciones en esta asignación",
            "percentil": "Total de participación",
            "participation": {
              "total": "Participación total",
              "pending": "Alumnos sin participar"
            },
            "messageCounter": "Mensajes ",
            "wall": {
              "header": "Muro de ",
              "emptyTitle": "¡Ups! La lista está vacía.",
              "empty": "No hay elementos que mostrar en este momento. ¡Pero no te preocupes, pronto habrá mucho historial para explorar!",
              "description": "¡Bienvenidos al Historial de Conversaciones!  Este espacio es una ventana a las interacciones fascinantes entre nuestros alumnos en cada actividad, enriquecidas con un chat incorporado. Explora la elegancia del aprendizaje en este detallado timeline. 📚 "
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