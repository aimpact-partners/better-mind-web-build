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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/classrooms/view",
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
        hash: 2366832043,
        creator: function (require, exports) {
          exports.txt = {
            "coins": {
              "label": "Available credits",
              "assignments": "Assignments",
              "modules": "Modules"
            },
            "errors": {
              "10003": "The user could not be approved, try again later and if the problem persists contact support."
            },
            "form": {
              "title": "Invite user",
              "role": {
                "label": "Role",
                "placeholder": "Select role"
              },
              "name": {
                "label": "Name",
                "placeholder": "Input user name"
              },
              "email": {
                "label": "Email",
                "placeholder": "Input user email"
              },
              "button": "Submit"
            },
            "forms": {
              "approve": {
                "title": "Do you want to approve the user request?",
                "description": "Remember that approving the user's request also modifies their role and access within the classroom."
              },
              "delete": {
                "title": "Do you want to delete the user?",
                "description": "Remember that deleting a user also deletes their access and actions within the classroom."
              },
              "cancel": {
                "title": "Do you want to cancel the user invitation?",
                "description": "Remember that canceling the user's invitation also cancels their access and actions within the classroom."
              },
              "reject": {
                "title": "Do you want to reject the user request?",
                "description": "Remember that rejecting the user's request also cancels their access and actions within the classroom."
              },
              "edit": {
                "title": "Do you want to change the user role?",
                "info": "Remember that changing the role also modifies the user's access and actions inside the classroom."
              }
            },
            "editForm": {
              "title": "Do you want to change the user role?",
              "info": "Remember that changing the role also modifies the user's access and actions inside the classroom."
            },
            "item": {
              "description": "The module does not have a description yet"
            },
            "roles": {
              "all": {
                "identifier": "all",
                "title": "All",
                "entity": "All"
              },
              "manager": {
                "title": "Teachers",
                "role": "Teacher",
                "single": "Teacher",
                "entity": "Teachers",
                "identifier": "managers"
              },
              "member": {
                "title": "Student",
                "identifier": "members",
                "entity": "Students"
              },
              "pending": {
                "identifier": "pendings",
                "title": "Pending",
                "entity": "Pending"
              }
            },
            "list": {
              "manager": {
                "title": "Teachers",
                "role": "Teacher",
                "single": "Teacher",
                "entity": "Teachers"
              },
              "member": {
                "title": "Teachers",
                "role": "Teacher",
                "single": "Teacher"
              },
              "pendings": {
                "title": "Pending",
                "invited": "Invited"
              }
            },
            "messages": {
              "approval": {
                "success": "Successfully approve user",
                "error": "Error approving user"
              },
              "copy": "Text copied successfully ",
              "copyError": "Error when copying to clipboard"
            },
            "ERR_GENERATING_ACTIVITIES": "Error generating classes",
            "not_member": {
              "title": "Hello",
              "subtitle": "It seems you do not have access to",
              "description": "You do not have access to the classroom, you must request it from the teacher and wait for him to confirm",
              "action": "Request access",
              "request": {
                "error": "Error requesting access, try again",
                "success": "Your access request has been sent, wait for the teacher to confirm"
              }
            },
            "invited": {
              "title": "Hello",
              "subtitle": "You have an invitation to join",
              "description": "Start your AI-assisted learning experience, explore content designed especially for you by participating in interactive activities at your own pace and according to your learning style.",
              "action": "Access"
            },
            "pending": {
              "title": "Hello",
              "subtitle": "Your request is being processed ",
              "description": "Please check your email to verify the approval of your request. If you are working with your teacher at this time, you can refresh the page to see if you have already been granted access.",
              "action": "Refresh"
            },
            "orgCode": "Classroom Code",
            "title": "Add a name",
            "description": "Add a description",
            "people": "People",
            "viewAssignment": "View Assignment",
            "empty": {
              "assignments": {
                "title": "No assignments available"
              },
              "rol": {
                "title": "No members registered with this profile"
              },
              "pending": {
                "title": "No members pending review"
              }
            },
            "system": {
              "invite": {
                "success": "Invitation sent"
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