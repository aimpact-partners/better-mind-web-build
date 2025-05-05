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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/management/activity",
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
        hash: 3362669300,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "test": {
                "warning": "You must fill in all required fields to be able to test the activity"
              },
              "minutes": "Min",
              "sections": {
                "general": "",
                "advanced": {
                  "title": "Advanced Settings",
                  "subtitle": "Additional instructions for the agent and the activity"
                },
                "agent": {
                  "title": "AI Agent Settings",
                  "subtitle": "These are the data that the AI will use to interact with each of the students."
                }
              },
              "description": {
                "label": "What is this activity about?*",
                "placeholder": "Add a description"
              },
              "instructions": {
                "label": "Instructions",
                "placeholder": "Add instructions"
              },
              "objective": {
                "label": "Objective",
                "placeholder": "Add an objective"
              },
              "module": "Module",
              "type": "Type",
              "questions": "Questions",
              "topics": "Topics",
              "form": {
                "description": "Description",
                "title": "Title"
              },
              "actions": {
                "generateAnswers": "Generate answers"
              },
              "refine": {
                "type": {
                  "label": "What do you want to improve?",
                  "answers": "Answers",
                  "questions": "Questions"
                }
              },
              "empty": {
                "title": "Generate content for the activity",
                "description": "You can create this content manually or generate an automatic version using artificial intelligence by clicking 'Generate with AI'"
              },
              "deleteModal": {
                "title": "Delete Content",
                "description": "Are you sure you want to delete the content from this activity?"
              },
              "settings": {
                "layout": {
                  "label": "Layout",
                  "title": "How do you want this activity to look?",
                  "description": "Select the type of visualization you want to give to the activity",
                  "options": {
                    "fullContentLayout": {
                      "title": "Full Content Layout",
                      "description": "I want <strong>the educational content to take up as much space as possible.</strong>"
                    },
                    "mainContentLayout": {
                      "title": "Main Content Layout",
                      "description": "<strong>I want to prioritize educational content</strong>, over the chat with the agent"
                    },
                    "mainChatLayout": {
                      "title": "Main Chat Layout",
                      "description": "<strong>I want to prioritize the chat with the agent</strong>, over the educational content."
                    }
                  }
                }
              }
            },
            "contentTheory": {
              "materials": {
                "empty": "This activity has no attached content",
                "title": "Attach content to the activity",
                "characters": "Available characters:",
                "deleteModal": {
                  "title": "Do you want to delete this content?",
                  "description": "This action cannot be undone."
                },
                "types": {
                  "article": "Content",
                  "synthesis": "Summary",
                  "dyslexia": "Adaptations",
                  "audios": "Audios"
                },
                "article": {
                  "textarea": "Article"
                },
                "dyslexia": {
                  "textarea": "Adaptations"
                },
                "audio": {
                  "noAudio": "This element does not have audio created",
                  "maxLength": "The audio of the element cannot be created because it exceeds the allowed character limit (4000).",
                  "emptyMaterial": "This audio cannot be generated if {type} has not been defined",
                  "content": "The content",
                  "dyslexia": "The adaptations"
                },
                "refinement": {
                  "title": "Generate content",
                  "description": "Content will be generated based on the following objective:"
                },
                "form": {
                  "title": "Educational content articles",
                  "content": {
                    "title": "Redacción del  contenido",
                    "placeholder": "Comience a crear su contenido aquí…."
                  },
                  "article": {
                    "placeholder": "Comience a crear su contenido aquí…."
                  }
                }
              },
              "empty": {
                "title": "This activity has no educational content associated",
                "description": "Add educational content to your module to start.",
                "actions": {
                  "add": "Add content",
                  "upload": "Upload document"
                }
              }
            },
            "multipleChoice": {
              "questions": {
                "placeholder": "Insert a question"
              },
              "modalQuestions": {
                "title": "Generate questions",
                "description": "Add the observations you consider necessary to generate the questions and answers"
              },
              "modalAnswers": {
                "title": "Generate answers",
                "description": "Add the observations you consider necessary to generate the answers"
              },
              "actions": {
                "generateAnswers": "Generate answers",
                "addAnswer": "Add answer",
                "addQuestion": "Add question",
                "generateQuestions": "Generate questions",
                "delete": "Delete",
                "markCorrect": "Mark as correct"
              },
              "cancel": {
                "title": "Do you want to go back?",
                "description": "Any changes made will be lost"
              },
              "answers": {
                "placeholder": "Insert an answer option and mark it as correct or incorrect"
              },
              "related": {
                "label": "Related activity",
                "independent": "Independent"
              },
              "emptyOptions": "Answer options have not been defined"
            },
            "specs": {
              "title": "Activity specifications",
              "titles": {
                "multiplechoice": "Questions and answers"
              },
              "general": {
                "label": "General data"
              },
              "agent": {
                "label": "Data required for the agent"
              },
              "advanced": {
                "label": "Advanced data"
              },
              "assessment": {
                "label": "How will the AI evaluate the student's oral presentation?",
                "placeholder": "Add the assessment of the activity"
              },
              "topic": {
                "title": "What should the agent teach about?",
                "label": "Topic of study*",
                "placeholder": "Add the topic of the activity"
              },
              "task": {
                "label": "Additional information for the student *",
                "placeholder": "Add the task of the activity"
              },
              "objective": {
                "label": "Objectives",
                "placeholder": "Add the objective of the activity",
                "empty": "This activity does not have associated objectives. Add an objective to guide the AI"
              },
              "related": {
                "label": "Related activity",
                "placeholder": "Select the related activity"
              },
              "instructions": {
                "label": "Additional instructions for the agent",
                "placeholder": "Add additional instructions if necessary"
              },
              "subjectDebate": {
                "label": "Debate motion",
                "placeholder": "Add the motion of the debate"
              },
              "subject": {
                "title": "What should the AI agent debate about? *",
                "label": "Subject of the debate",
                "placeholder": "Add the subject of the debate"
              },
              "character": {
                "label": "Character",
                "placeholder": "Add the character of the activity"
              },
              "role": {
                "title": "What role should the agent assume in the debate? *",
                "label": "Agent role",
                "placeholder": "Add the role of the agent"
              },
              "characterRole": {
                "title": "What role should the character assume in the conversation? *",
                "label": "Character role",
                "placeholder": "Add the role of the character"
              },
              "questions": {
                "title": "Questions"
              },
              "objectives": {
                "label": "What objectives should the student achieve? *",
                "name": {
                  "label": "Name",
                  "placeholder": "Add the name of the objective"
                },
                "objective": {
                  "label": "Objective",
                  "placeholder": "Add the objective of the activity"
                }
              },
              "criteria": {
                "label": "Evaluation criteria",
                "placeholder": "Add the criteria of the activity",
                "name": {
                  "label": "Name",
                  "placeholder": "Add the name of the criteria"
                },
                "subject": {
                  "label": "Criteria",
                  "placeholder": "Add the criteria of the activity"
                }
              }
            },
            "spoken": {
              "criteria": {
                "label": "Evaluation Criteria"
              }
            },
            "types": {
              "content-theory": "Content/Theory",
              "debate": "Debate",
              "multiple-choice": "Multiple Choice",
              "character-talk": "Conversation with a Character",
              "spoken": "Oral Presentation",
              "written": "Written"
            },
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
            "errors": {
              "INCOMPLETE_MODULE": "You must complete the module before continuing. Missing fields: ",
              "default": "An error occurred. Please try again.",
              "NO_RELATED_ACTIVITY": " The selected activity does not have an article. You must generate the article first in order to use it",
              "wrongQuestions": "To save, you must have correctly added response options and selected the correct option for each question."
            },
            "form": {
              "title": "Activity title *"
            },
            "languages": {
              "select": {
                "label": "Language",
                "placeholder": "Select Language",
                "tooltip": "The activity language is "
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
            "manual": {
              "cancel": "Are you sure you want to cancel?",
              "article": {
                "textarea": "Add the content of the activity"
              },
              "content": {
                "textarea": "Add the content of the activity"
              },
              "synthesis": {
                "textarea": "Add your summary here"
              },
              "dyslexia": {
                "textarea": "Add your content here"
              }
            },
            "refine": {
              "title": "Generate Activity",
              "description": "We will generate the activity based on the following objective",
              "synthesis": {
                "title": "Generate summary",
                "description": "A summary of the previously generated content will be created."
              },
              "dyslexia": {
                "title": "Generate adaptations",
                "description": "An accessible version of the content will be generated for students with diverse learning styles and needs."
              },
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
              "title": "Generate images for your activity",
              "description": "Describe the image you want to generate in detail so that the artificial intelligence can imagine and generate it.",
              "notes": {
                "label": "Notes",
                "placeholder": "Share your suggestions to create the best image for your module"
              },
              "confirm": {
                "title": "Do you want to replace the current image?",
                "subtitle": "If you confirm, the current image will be replaced."
              }
            },
            "progress": {
              "label": "Edition status",
              "fields": {
                "title": "Title",
                "description": "Description",
                "picture": "Picture",
                "general": "General",
                "agent": "AI Agent",
                "advanced": "Advanced",
                "questions": "Questions"
              },
              "states": {
                "optional": "Optional",
                "completed": "Complete",
                "inprogress": "In progress",
                "pending": "To complete",
                "questions": "Questions"
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