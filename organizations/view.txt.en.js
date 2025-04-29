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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/organizations/view",
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
        hash: 2896208790,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Add",
              "approve": "Approve",
              "reject": "Reject",
              "invite": "Invite",
              "copy": "Copy to clipboard",
              "create": "Create",
              "activities": "Generate activities",
              "refine": "Refine",
              "generate": "Generate",
              "save": "Save",
              "edit": "Edit",
              "delete": "Delete",
              "clean": "Clean",
              "activity": "Activities",
              "upload": "Upload",
              "next": "Next",
              "back": "Back",
              "cancel": "Cancel",
              "confirm": "Confirm"
            },
            "coins": {
              "label": "Available credits",
              "assignments": "Interactives",
              "modules": "Generatives"
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
                "description": "Remember that approving the user's request also modifies their role and access within the organization."
              },
              "delete": {
                "title": "Do you want to delete the user?",
                "description": "Remember that deleting a user also deletes their access and actions within the organization."
              },
              "cancel": {
                "title": "Do you want to cancel the user invitation?",
                "description": "Remember that canceling the user's invitation also cancels their access and actions within the organization."
              },
              "reject": {
                "title": "Do you want to reject the user request?",
                "description": "Remember that rejecting the user's request also cancels their access and actions within the organization."
              },
              "edit": {
                "title": "Do you want to change the user role?",
                "info": "Remember that changing the role also modifies the user's access and actions inside the organization."
              }
            },
            "editForm": {
              "title": "Do you want to change the user role?",
              "info": "Remember that changing the role also modifies the user's access and actions inside the organization."
            },
            "roles": {
              "all": {
                "identifier": "all",
                "title": "All",
                "entity": "All"
              },
              "manager": {
                "identifier": "managers",
                "title": "Administrator",
                "entity": "Administrators"
              },
              "member": {
                "title": "Teacher",
                "identifier": "members",
                "entity": "Teachers"
              },
              "pending": {
                "identifier": "pendings",
                "title": "Pending",
                "entity": "Pending"
              }
            },
            "list": {
              "managers": {
                "title": "Administrators",
                "role": "Admin",
                "single": "Manager"
              },
              "members": {
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
            "orgCode": "Organization Code",
            "title": "Add a name",
            "description": "Add a description",
            "empty": {
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