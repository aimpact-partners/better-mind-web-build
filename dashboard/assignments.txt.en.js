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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/dashboard/assignments",
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
        hash: 1423384607,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "summary": "Summary",
              "objectives": "Progress",
              "noSummary": "This activity has no summary or objectives",
              "progress": "Progress",
              "type": "Activity type",
              "subtype": "Subtype",
              "description": "Description",
              "empty": "The student has not yet completed this activity",
              "noAnalysis": "The student has not made any progress on this objective",
              "interactions": "Interactions",
              "chat": {
                "tab": "Conversation",
                "action": "View messages"
              },
              "status": {
                "done": "Done",
                "pending": "Pending"
              },
              "objectivesStatus": {
                "in-progress": "In progress",
                "completed": "Completed",
                "pending": "Pending",
                "outstanding": "Outstanding"
              },
              "spoken": {
                "audio": "Student's audio",
                "feedback": "Evaluation and Feedback",
                "transcription": "Transcription"
              },
              "multipleChoice": {
                "participation": {
                  "title": "Participation",
                  "detail": "Correct answers"
                },
                "correct": "Correct Answers",
                "wrong": "Incorrect Answers"
              },
              "types": {
                "content-theory": "Content/Theory",
                "debate": "Debate",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Conversation with a Character",
                "spoken": "Oral Presentation"
              }
            },
            "assignment": {
              "empty": {
                "title": "The student has not participated in this assignment"
              },
              "messages": "messages"
            },
            "chat": {
              "title": "Student",
              "empty": {
                "title": "There are no messages in this conversation",
                "description": "The student has not sent messages through the chat yet."
              },
              "synthesis": "Conversation summary",
              "systemActions": {
                "kb-response": "Data obtained from the knowledge base: ",
                "fetching-tool-data": "I will query the documents of the class",
                "kb-processed-response": "Analysis on content finished",
                "transcription": "Getting transcription",
                "functions": {
                  "kb": "Querying the knowledge base about: "
                }
              }
            },
            "list": {
              "students": "Students",
              "participants": "participants",
              "search": "search",
              "generalPanel": "General panel"
            },
            "finish": "Finish",
            "results": "Results",
            "total": "Total questions",
            "correct": "Correct answers",
            "wrong": "Wrong answers",
            "title": "Classroom Status",
            "alerts": "Alerts",
            "type": "Activity type",
            "subtype": "Activity subtype",
            "archived": "This assignment is archived",
            "owner": "Administrator",
            "creator": "Creator",
            "noMessages": "There is no previous message",
            "addCredits": {
              "action": "Request credits",
              "title": "Do you want to request credits to the student?",
              "subtitle": "Credits allow the student to interact with the activity's AI"
            },
            "actions": {
              "wall": "Wall",
              "archive": "Archive",
              "restore": "restore"
            },
            "studentHeader": {
              "filter": "Filter by activity"
            },
            "interaction": "Interaction",
            "interactions": "Interactions",
            "percentil": "Total participation",
            "preevaluation": "Pre-evaluation",
            "multiple": "Multiple choice",
            "enableAI": {
              "action": "Enable AI",
              "success": "The AI has been enabled correctly for the student",
              "noEnable": "The student has not enabled the AI yet"
            },
            "of": "of",
            "spoken": "Oral evaluation",
            "empty": "There are no participations in this assignment yet",
            "participation": {
              "total": "Total participation",
              "pending": "Students without participation"
            },
            "messageCounter": "Messages ",
            "wall": {
              "header": "Wall of ",
              "emptyTitle": "Oops! The list is empty.",
              "empty": "There are no items to display at this time. But don't worry, there will soon be plenty of history to explore!",
              "description": "Welcome to the Conversation History! This space is a window into the fascinating interactions among our students in each activity, enriched with an integrated chat. Explore the elegance of learning in this detailed timeline. 📚"
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