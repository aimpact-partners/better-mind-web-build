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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/home",
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
        hash: 525133978,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Join",
              "assign": "Assign",
              "create": "Create",
              "register": "Register",
              "activities": "Generate activities",
              "refine": "Refine",
              "generate": "Generate",
              "save": "Save",
              "imported": "Imported",
              "edit": "Edit",
              "delete": "Delete",
              "clean": "Clean",
              "activity": "Activities",
              "update": "Upload Document",
              "next": "Next",
              "back": "Back",
              "continue": "Continue",
              "cancel": "Cancel",
              "link": "Link",
              "gTooltip": "Classroom imported from Google",
              "import": "Import"
            },
            "assign": {
              "assigned": "Assigned",
              "title": {
                "share": "Assign module to classrooms",
                "dashboard": "Access assignment dashboard"
              },
              "noAssigned": "No classrooms assigned",
              "module": "Module",
              "messages": {
                "copied": "Link copied to clipboard",
                "assigned": "Module assigned to classroom {classroom}"
              },
              "item": {
                "description": "The item has no description"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Copy link",
                "test": "Test",
                "navigate": "Navigate",
                "assign": {
                  "button": "Assign",
                  "label": "The module has not been assigned to this Classroom"
                },
                "createClassroom": "Create classroom"
              },
              "errors": {
                "default": "The module could not be assigned to this Classroom, please try again later or contact the administrator"
              },
              "empty": {
                "share": {
                  "text": "Attention",
                  "description": "You do not have any classrooms created yet, you must create one to be able to assign this activity.",
                  "action": "Create classroom"
                },
                "dashboard": {
                  "description": "Module without assignments"
                }
              }
            },
            "tour": {
              "buttons": {
                "nextBtnText": "Next",
                "prevBtnText": "Previous",
                "doneBtnText": "Done"
              },
              "teacher": {
                "step0": {
                  "title": "Welcome to your profile",
                  "description": "Here you can customize your experience in RVD.AI Rivadavia. You can update your personal information, indicate your preferred language, configure accessibility options, and adjust the audio speed."
                },
                "community": {
                  "title": "Community",
                  "description": "Explore our collection of learning modules created by experts. Find a variety of ready-to-use content for your classrooms. You can edit and customize these modules according to your criteria to adapt them to the needs of your students."
                },
                "drafts": {
                  "title": "Draft Modules",
                  "description": "Work on your draft learning modules until they are ready to be published and assigned to a classroom. They will be saved here so you can edit them as needed. Start creating your first module!"
                },
                "classrooms": {
                  "title": "Classrooms",
                  "description": "In this space, you can create classrooms where you can group your students and assign them the learning modules you publish. Organize your classes effectively and personalize them. Start creating your classrooms and transform the educational experience!"
                },
                "step3": {
                  "title": "Need Help?",
                  "description": "Find all the information in our tutorials designed to help you get the most out of RVD.AI. Learn how to create learning modules, manage your classrooms, and use all the tools we offer. Explore our tutorials and navigate the platform!"
                },
                "modules": {
                  "title": "My Learning Modules",
                  "description": "This section will show the modules that the user has created."
                },
                "assignments": {
                  "title": "My Assignments",
                  "description": "Here you can see all the learning modules assigned to you within your classrooms. These assignments contain the content you need to complete. Explore your assignments and keep moving forward in your learning journey!"
                }
              },
              "student": {
                "step0": {
                  "title": "Welcome to your profile",
                  "description": "Here you can customize your experience in RVD.AI Rivadavia. You can update your personal information, indicate your preferred language, configure accessibility options, and adjust the audio speed."
                },
                "classrooms": {
                  "title": "Classrooms",
                  "description": "Here you can see all the classrooms you belong to. Explore the assigned learning modules, review the content, and stay up to date with your classes. You can also join new classrooms using a code. Discover everything you can learn in your classrooms!"
                },
                "assignments": {
                  "title": "My Assignments",
                  "description": "Here you can see all the learning modules assigned to you within your classrooms. These assignments contain the content you need to complete. Explore your assignments and keep moving forward in your learning journey!"
                }
              }
            },
            "errors": {
              "default": "Operation failed. Please try again."
            },
            "title": "Welcome!",
            "profile": {
              "edit": "Go to my profile"
            },
            "assignments": {
              "title": "My Assignments",
              "activities": "My Activities",
              "actions": {
                "link": "Entry"
              },
              "item": {
                "description": "This assignment has no description or objective"
              }
            },
            "modules": {
              "title": "My Learning Modules",
              "empty": "You don't have learning modules yet",
              "action": "Publish a module",
              "activities": "My Activities",
              "items": {
                "description": "This module has no description or objective",
                "title": "This module has no title"
              }
            },
            "drafts": {
              "title": "My Drafts",
              "empty": {
                "title": "You have no drafts",
                "action": "Create a new one!"
              },
              "actions": {
                "create": "Crear",
                "join": "Unirme"
              },
              "items": {
                "description": "This module has no description or objective",
                "title": "This draft has no title"
              }
            },
            "community": {
              "title": "Community",
              "actions": {
                "link": "See all",
                "test": "Demo",
                "use": "Create your own version"
              }
            },
            "classrooms": {
              "title": "My Classrooms",
              "empty": {
                "description": "Group your students in workspaces and assign personalized learning modules.",
                "action": "Create your first classroom",
                "title": "Create your first classroom"
              },
              "actions": {
                "create": "Create",
                "join": "Join"
              },
              "items": {
                "description": "This classroom has no description or objective"
              }
            },
            "students": {
              "title": "My Students"
            },
            "members": {
              "children": "My Children"
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