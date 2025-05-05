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
      }, _context.meta.url).package('de');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 1285895014,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "join": "Join",
              "assign": "Zuweisen",
              "create": "Erstellen",
              "register": "Registrieren",
              "activities": "Aktivitäten generieren",
              "refine": "Verfeinern",
              "imported": "Importiert",
              "generate": "Generieren",
              "save": "Speichern",
              "clean": "Reinigen",
              "activity": "Aktivitäten",
              "update": "Dokument hochladen",
              "edit": "Bearbeiten",
              "delete": "Löschen",
              "cancel": "Abbrechen",
              "next": "Weiter",
              "back": "Zurück",
              "link": "Link",
              "gTooltip": "Klassenzimmer von Google importiert",
              "import": "Importieren"
            },
            "assign": {
              "assigned": "Zugewiesen",
              "title": {
                "share": "Modul an Klassenräume zuweisen",
                "dashboard": "Zuweisungsdashboard aufrufen"
              },
              "noAssigned": "Keine Klassenräume zugewiesen",
              "module": "Modul",
              "messages": {
                "copied": "Link in die Zwischenablage kopiert",
                "assigned": "Modul wurde dem Klassenraum {classroom} zugewiesen"
              },
              "item": {
                "description": "Der Punkt hat keine Beschreibung"
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
                "default": "Das Modul konnte diesem Klassenraum nicht zugewiesen werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie den Administrator"
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
            "tour": {
              "buttons": {
                "nextBtnText": "Weiter",
                "prevBtnText": "Zurück",
                "doneBtnText": "Fertig"
              },
              "teacher": {
                "step0": {
                  "title": "Willkommen in Ihrem Profil",
                  "description": "Hier können Sie Ihre Erfahrung in RVD.AI Rivadavia anpassen. Sie können Ihre persönlichen Informationen aktualisieren, Ihre bevorzugte Sprache angeben, Barrierefreiheitsoptionen konfigurieren und die Audiogeschwindigkeit anpassen."
                },
                "community": {
                  "title": "Gemeinschaft",
                  "description": "Entdecken Sie unsere Sammlung von Lernmodulen, die von Experten erstellt wurden. Finden Sie eine Vielzahl von einsatzbereiten Inhalten für Ihre Klassenräume. Sie können diese Module nach Ihren Kriterien bearbeiten und anpassen, um sie an die Bedürfnisse Ihrer Schüler anzupassen."
                },
                "drafts": {
                  "title": "Modulentwürfe",
                  "description": "Arbeiten Sie an Ihren Lernmodul-Entwürfen, bis sie bereit zur Veröffentlichung und Zuweisung zu einem Klassenraum sind. Sie werden hier gespeichert, damit Sie sie nach Bedarf bearbeiten können. Beginnen Sie mit der Erstellung Ihres ersten Moduls!"
                },
                "classrooms": {
                  "title": "Klassenräume",
                  "description": "In diesem Bereich können Sie Klassenräume erstellen, in denen Sie Ihre Schüler gruppieren und ihnen die von Ihnen veröffentlichten Lernmodule zuweisen können. Organisieren Sie Ihren Unterricht effektiv und personalisieren Sie ihn. Beginnen Sie mit der Erstellung Ihrer Klassenräume und verwandeln Sie das Bildungserlebnis!"
                },
                "step3": {
                  "title": "Brauchen Sie Hilfe?",
                  "description": "Finden Sie alle Informationen in unseren Tutorials, die entwickelt wurden, um Ihnen zu helfen, das Beste aus RVD.AI herauszuholen. Lernen Sie, wie Sie Lernmodule erstellen, Ihre Klassenräume verwalten und alle von uns angebotenen Tools nutzen können. Erkunden Sie unsere Tutorials und navigieren Sie durch die Plattform!"
                },
                "modules": {
                  "title": "Meine Lernmodule",
                  "description": "In diesem Abschnitt werden die Module angezeigt, die der Benutzer erstellt hat."
                },
                "assignments": {
                  "title": "Meine Aufgaben",
                  "description": "Hier können Sie alle Lernmodule sehen, die Ihnen innerhalb Ihrer Klassenräume zugewiesen wurden. Diese Aufgaben enthalten den Inhalt, den Sie abschließen müssen. Erkunden Sie Ihre Aufgaben und setzen Sie Ihren Lernweg fort!"
                }
              },
              "student": {
                "step0": {
                  "title": "Willkommen in Ihrem Profil",
                  "description": "Hier können Sie Ihre Erfahrung in RVD.AI Rivadavia anpassen. Sie können Ihre persönlichen Informationen aktualisieren, Ihre bevorzugte Sprache angeben, Barrierefreiheitsoptionen konfigurieren und die Audiogeschwindigkeit anpassen."
                },
                "classrooms": {
                  "title": "Klassenräume",
                  "description": "Hier können Sie alle Klassenräume sehen, zu denen Sie gehören. Erkunden Sie die zugewiesenen Lernmodule, überprüfen Sie den Inhalt und bleiben Sie auf dem Laufenden mit Ihrem Unterricht. Sie können auch neuen Klassenräumen mit einem Code beitreten. Entdecken Sie alles, was Sie in Ihren Klassenräumen lernen können!"
                },
                "assignments": {
                  "title": "Meine Aufgaben",
                  "description": "Hier können Sie alle Lernmodule sehen, die Ihnen innerhalb Ihrer Klassenräume zugewiesen wurden. Diese Aufgaben enthalten den Inhalt, den Sie abschließen müssen. Erkunden Sie Ihre Aufgaben und setzen Sie Ihren Lernweg fort!"
                }
              }
            },
            "errors": {
              "default": "Der Vorgang ist fehlgeschlagen. Bitte versuchen Sie es erneut."
            },
            "title": "Willkommen!",
            "profile": {
              "edit": "Zu meinem Profil"
            },
            "assignments": {
              "title": "Meine Aufgaben",
              "activities": "Meine Aktivitäten",
              "actions": {
                "link": "Eingang"
              },
              "item": {
                "description": "Diese Aufgabe hat keine Beschreibung oder Ziel"
              }
            },
            "modules": {
              "title": "Meine Lernmodule",
              "empty": "Sie haben noch keine Lernmodule",
              "action": "Modul veröffentlichen",
              "activities": "Meine Aktivitäten",
              "items": {
                "description": "Dieses Modul hat keine Beschreibung oder Ziel",
                "title": "Dieses Modul hat keinen Titel"
              }
            },
            "drafts": {
              "title": "Meine Entwürfe",
              "empty": {
                "title": "Sie haben keine Entwürfe",
                "action": "Erstellen Sie einen neuen!"
              },
              "actions": {
                "create": "Erstellen",
                "join": "Beitreten"
              },
              "items": {
                "description": "Dieses Modul hat keine Beschreibung oder Ziel",
                "title": "Dieser Entwurf hat keinen Titel"
              }
            },
            "community": {
              "title": "Gemeinschaft",
              "actions": {
                "link": "Alle anzeigen",
                "test": "Demo",
                "use": "Erstellen Sie Ihre eigene Version"
              }
            },
            "classrooms": {
              "title": "Meine Klassenräume",
              "empty": {
                "description": "Gruppieren Sie Ihre Schüler in Arbeitsbereichen und weisen Sie personalisierte Lernmodule zu.",
                "action": "Erstellen Sie Ihren ersten Klassenraum",
                "title": "Erstellen Sie Ihren ersten Klassenraum"
              },
              "actions": {
                "create": "Erstellen",
                "join": "Beitreten"
              },
              "items": {
                "description": "Dieser Klassenraum hat keine Beschreibung oder Ziel"
              }
            },
            "students": {
              "title": "Meine Schüler"
            },
            "members": {
              "children": "Meine Kinder"
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