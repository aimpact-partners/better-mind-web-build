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
          "vspecifier": "@aimpact/ailearn-app@0.3.32/modules/draft",
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
        hash: 847980285,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "types": {
                "content-theory": "Content/Theory",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Character Talk",
                "debate": "Debate",
                "spoken": "Spoken Presentation"
              }
            },
            "alerts": {
              "coins": {
                "available": "Owner has AI credits available",
                "unavailable": "Owner has no AI credits available"
              }
            },
            "coins": {
              "alert": {
                "title": "You need AI credits",
                "description": "You need to get AI credits to enable all the features with artificial intelligence.",
                "action": "Accept"
              },
              "modal": {
                "title": "Request AI credits to continue with this feature",
                "description": "You need to get AI credits to enable all the features with artificial intelligence.",
                "actions": {
                  "cancel": "No, not now, thanks",
                  "confirm": "Request now"
                },
                "errors": {
                  "noCredits": "The assignment could not be processed, please contact the institution's administrator"
                }
              },
              "header": {
                "actions": {
                  "require": "Enable AI",
                  "available": "Available credits"
                },
                "messages": {
                  "add": "You acquired request to use the AI functions",
                  "middle": "You consumed 50% of the Available credits",
                  "finishing": "You are running out of available AI request"
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
              "origin": "Educational guidelines",
              "label": "Recommended Adjustments",
              "irrelevant": "The objective of the provided module seems not to be suitable for the defined audience. Please, check this and try again."
            },
            "title": "Create a Learning Module",
            "postTitle": "Select the aspects that the content to be generated in the following form should have",
            "module": "Learning Module Objective",
            "empty": "Here you can view the personalized content, adapted by our assistant based on your form inputs",
            "duration": {
              "brief": "Brief (3 activities)",
              "standard": "Standard (5 activities)",
              "extended": "Extended (7 activities)"
            },
            "form": {
              "module": "What is the objective of this module?",
              "target": "Average age of students",
              "duration": "Module duration",
              "languages": "Languages"
            },
            "labels": {
              "title": "Title",
              "description": "Description"
            },
            "confirm": {
              "title": "You are about to confirm the objective of your module",
              "messages": "You have not selected any of the generated suggestions. Do you want to continue without implementing them?"
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