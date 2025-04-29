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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/draft/store",
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
        hash: 649217943,
        creator: function (require, exports) {
          exports.txt = {
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
            "synthesis": "Synthesis",
            "article": "Content",
            "description": "Description",
            "objectives": "Objectives",
            "task": "Your task",
            "chat": {
              "empty": {
                "credits": {
                  "title": "Ready to learn?",
                  "description": "Start by making the query you want"
                },
                "noCredits": {
                  "title": "You need AI credits to start",
                  "description": "Request credits to start learning with the AI Agent"
                }
              }
            },
            "tabs": {
              "chat": "Chat",
              "content": "Content"
            },
            "languages": {
              "select": {
                "label": "Language",
                "placeholder": "Select Language"
              },
              "selectLabel": "Select Language",
              "label": "Languages",
              "en": "English",
              "es": "Spanish",
              "pt": "Portuguese",
              "fr": "French",
              "de": "German",
              "it": "Italian"
            },
            "alerts": {
              "coins": {
                "available": "Owner has AI credits available",
                "unavailable": "Owner has no AI credits available"
              }
            },
            "audience": {
              "label": "Training type",
              "error": "Please select the training type",
              "select": "Select trining type"
            },
            "level": {
              "label": "Grade or Level",
              "error": "Please select a grade level",
              "select": "Select the Grade"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Next",
                "prevBtnText": "Previous",
                "doneBtnText": "Done"
              },
              "administrator": {
                "title": "Select an Administrator",
                "description": "Choose the administrator responsible for the learning module. They must have credits assigned to create modules with AI assistance."
              },
              "parameters": {
                "title": "Select the parameters of the learning module",
                "description": "Select the language of the learning module, the school year of your students, and the number of activities. You can find more information on our YouTube channel @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Write the main objective of the learning module",
                "description": "This objective will be central to guide the rest of the content and activities of the module."
              },
              "save": {
                "title": "Save the objective of the learning module",
                "description": "Once saved, you can request credits to improve the objective and start working with AI."
              }
            },
            "pathway": {
              "manual": {
                "title": {
                  "label": "Module Title",
                  "placeholder": "Enter the module title"
                },
                "description": {
                  "label": "Module Description",
                  "placeholder": "Enter the module description"
                }
              },
              "ai": {
                "title": "Let's continue with AI",
                "form": {
                  "size": {
                    "placeholder": "Amount of activities in the module",
                    "items": {
                      "brief": "Brief (3 activities)",
                      "standard": "Standard (5 activities)",
                      "extended": "Extended (7 activities)"
                    },
                    "notes": {
                      "placeholder": "Enter the instructions to guide the AI in creating your activities"
                    }
                  }
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Define the instructions for the AI",
                "description": "Guide the Artificial Intelligence to generate content based on your pedagogical principles by indicating, for example, the types of activities and their tone (informal, inspiring, etc.)."
              },
              "textarea": {
                "label": "Additional information",
                "placeholder": "Share specific suggestions or areas for improvement..."
              },
              "errors": {
                "default": "An error occurred, please try again."
              },
              "confirm": {
                "title": "You are about to confirm the objective of your module",
                "description": "You have not selected any of the generated suggestions. Do you want to proceed without implementing them?"
              }
            },
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "Would you like to use this enhanced version of your objective?",
                  "cancel": "No, thanks",
                  "confirm": "Yes, update my objective"
                }
              },
              "total": "Selected suggestions",
              "origin": "Educational entity",
              "label": "Suggestion",
              "irrelevant": "The objective of the provided module seems not to be suitable for the defined audience. Please, check this and try again."
            },
            "setup": {
              "actions": {
                "cancel": "Cancel",
                "continue": "Continue"
              },
              "messages": {
                "save": "Objective saved successfully"
              },
              "title": "Create a New Learning Module",
              "subtitle": "Set up the features of your module to get started.",
              "generation": {
                "title": "Let's shape the module",
                "subtitle": "Indicate how you want to continue",
                "options": {
                  "ai": "I want to generate the activities with the help of AI",
                  "manually": "I want to generate the activities manually"
                }
              },
              "form": {
                "administrator": {
                  "label": "Administrator",
                  "select": "Select administrator",
                  "account": "Current account",
                  "error": "You need to specify the administrator of the learning module"
                },
                "title": {
                  "label": "Module title"
                },
                "description": {
                  "label": "Module description"
                },
                "activities": {
                  "label": "Number of module activities"
                },
                "notes": {
                  "placeholder": "Enter the instructions to guide the AI in creating your activities"
                },
                "objective": {
                  "textArea": "Enter the module objective"
                }
              },
              "sugestions": {
                "title": "Instruction suggestions"
              },
              "confirmation": {
                "title": "⚠️ Review & Confirm",
                "ownerDescription": "Owner of the learning module",
                "description": "Once this information is saved, it cannot be changed."
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