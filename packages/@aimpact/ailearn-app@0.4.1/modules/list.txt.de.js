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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/list",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('de');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 1651154067,
        creator: function (require, exports) {
          exports.txt = {
            "assign": {
              "title": {
                "share": "Modul Klassenräumen zuweisen",
                "dashboard": "Auf Zuweisungs-Dashboard zugreifen"
              },
              "assigned": "Zugewiesen",
              "noAssigned": "Keine Klassenräume zugewiesen",
              "module": "Modul",
              "messages": {
                "copied": "Link in die Zwischenablage kopiert",
                "assigned": "Modul dem Klassenraum {classroom} zugewiesen"
              },
              "item": {
                "description": "Das Element hat keine Beschreibung"
              },
              "actions": {
                "dashboard": "Dashboard",
                "copy": "Link kopieren",
                "test": "Testen",
                "navigate": "Navigieren",
                "assign": {
                  "button": "Zuweisen",
                  "label": "Das Modul wurde diesem Klassenraum noch nicht zugewiesen"
                },
                "createClassroom": "Klassenraum erstellen"
              },
              "errors": {
                "default": "Das Modul konnte diesem Klassenraum nicht zugewiesen werden. Bitte versuchen Sie es später erneut oder wenden Sie sich an den Administrator"
              },
              "empty": {
                "share": {
                  "text": "Achtung",
                  "description": "Sie haben noch keine Klassenräume erstellt. Sie müssen einen erstellen, um diese Aktivität zuweisen zu können.",
                  "action": "Klassenraum erstellen"
                },
                "dashboard": {
                  "description": "Modul ohne Zuweisungen"
                }
              }
            },
            "delete": {
              "title": "Modul löschen",
              "description": "Sind Sie sicher, dass Sie dieses Modul löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
              "errors": {
                "59": "Das Modul kann nicht gelöscht werden, da es bereits zugehörige Daten hat.",
                "default": "Beim Löschen des Moduls ist ein Fehler aufgetreten."
              }
            },
            "archive": {
              "title": "Modul archivieren",
              "description": "Sind Sie sicher, dass Sie dieses Modul archivieren möchten?",
              "errors": {
                "default": "Beim Archivieren des Moduls ist ein Fehler aufgetreten."
              }
            },
            "empty": {
              "general": {
                "title": "Erstellen Sie Ihr erstes Modul",
                "description": "Modernisieren Sie Ihren Lehransatz, indem Sie Ihr erstes Modul zum Leben erwecken. Entfesseln Sie Ihre Kreativität, gestalten Sie Ihre Inhalte und genießen Sie die Lernerfahrung!"
              },
              "drafts": {
                "title": "Noch keine Entwürfe",
                "description": "Sie haben derzeit keine Entwürfe. Beginnen Sie, Ihre Inhalte zu erstellen und zu perfektionieren, bevor Sie sie veröffentlichen."
              },
              "published": {
                "title": "Keine veröffentlichten Module",
                "description": "Es sind keine veröffentlichten Module verfügbar. Arbeiten Sie an jedem Modul und veröffentlichen Sie sie, um diese Liste der Veröffentlichungen zu aktualisieren."
              }
            },
            "title": "Meine Lernmodule",
            "tabs": {
              "drafts": "Entwürfe",
              "published": "Veröffentlicht"
            },
            "actions": {
              "create": "Erstellen",
              "delete": "Element löschen",
              "use": "Eine neue Version erstellen"
            },
            "errors": {
              "ERROR_GETTING_URL": "Fehler beim Abrufen der URL"
            },
            "loading": {
              "title": "Daten werden geladen",
              "description": "Wir laden Ihre Daten. Bitte warten Sie einen Moment."
            },
            "item": {
              "description": "Das Modul hat noch keine Beschreibung",
              "draftTitle": "Entwurfsmodul"
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