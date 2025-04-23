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
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 2236975175,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Add",
              "analyse": "Suggest Improvements",
              "activities": "Generate activities",
              "activity": "Activities",
              "applySuggestions": "Apply Suggestions",
              "back": "Back",
              "cancel": "Cancel",
              "continue": "Continue",
              "cover": "Generate cover",
              "clean": "Clean",
              "create": "Create",
              "confirm": "Confirm",
              "delete": "Delete",
              "edit": "Edit",
              "generate": "Generate with AI",
              "next": "Next",
              "publish": "Publish",
              "removeSuggestions": "Ignore suggestions",
              "refine": "Refine",
              "save": "Save",
              "update": "Upload Document",
              "upload": "Upload Image",
              "manual": "Manual Design"
            },
            "activities": {
              "item": {
                "empty": "Esta actividad aún no posee contenido o titulo definido"
              },
              "types": {
                "content-theory": "Content/Theory",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Character Talk",
                "debate": "Debate",
                "spoken": "Spoken Presentation"
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
              "title": "Add the Learning Module name here",
              "description": {
                "label": "Description",
                "placeholder": "Add description here"
              },
              "objective": "Module objective",
              "owner": "Owner",
              "actions": {
                "description": "Add descripton",
                "addActivity": "Add activity"
              },
              "activities": {
                "title": "List of activities",
                "empty": {
                  "title": "Module without activities",
                  "text": "Add one activity to your module"
                }
              }
            },
            "refine": {
              "title": "AI Activity Design Assistant",
              "description": "Use the AI assistant to customize and improve the activity design.",
              "description2": "Simply write what you have in mind, and the AI will help structure the activity to fit your learning goals.",
              "textarea": {
                "label": "Additional instructions",
                "placeholder": "Share specific suggestions or areas for improvement..."
              },
              "image": {
                "title": "Refine the quality of your image",
                "subtitle": "Your insights will help us refine the content.",
                "confirm": {
                  "title": "Do you want to replace the current image?",
                  "subtitle": "If you confirm, the current image will be replaced."
                }
              },
              "module": {
                "title": "Refine the quality of your module",
                "subtitle": "Your insights will help us refine the content.",
                "confirm": {
                  "title": "Do you want to replace the current content?",
                  "subtitle": "If you confirm, the genreration process will replace the current content with the new one. If you want to keep the current content, click cancel."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "Are you sure?",
                "description": "Your changes have not been saved. If you continue, you will lose them."
              }
            },
            "delete": {
              "title": "Delete Content",
              "description": "Are you sure you want to delete the content of this activity?"
            },
            "picture": {
              "title": "Generate the best image for your module",
              "description": "This tool will help you generate the best image for your module. You can upload an image and we will generate the best image for your module. You can also use the image editor to edit the image and generate the best image for your module.",
              "notes": {
                "label": "Notes",
                "placeholder": "Share your suggestions to create the best image for your module"
              },
              "confirm": {
                "title": "Do you want to replace the current image?",
                "subtitle": "If you confirm, the current image will be replaced."
              }
            },
            "errors": {
              "CONTACT_ADMIN": "Please contact the administrator"
            },
            "toast": {
              "modulePublished": "'Module published successfully",
              "errorPublishingModule": "Error while publishing module"
            },
            "moduleTour": {
              "moduleName": {
                "title": "Add Module Name",
                "description": "Enter the name of the learning module in this field."
              },
              "description": {
                "title": "Description",
                "description": "Add a description of the module here."
              },
              "image": {
                "title": "Generate Image",
                "description": "Click this icon to generate an image of the module using AI."
              },
              "activities": {
                "title": "Activities",
                "description": "Here you can view the activities added in the module."
              },
              "addActivity": {
                "title": "Add Activity",
                "description": "Click this button to add a new activity to the module."
              },
              "publish": {
                "title": "Once Completed",
                "description": "Click this button to publish the module once completed."
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