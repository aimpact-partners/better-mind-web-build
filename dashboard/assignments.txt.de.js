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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/dashboard/assignments",
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
        hash: 706721012,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "summary": "Zusammenfassung",
              "objectives": "Fortschritt",
              "noSummary": "Diese Aktivität hat keine Zusammenfassung oder Ziele",
              "progress": "Fortschritt",
              "type": "Aktivitätstyp",
              "subtype": "Untertyp",
              "description": "Beschreibung",
              "empty": "Der Schüler hat diese Aktivität noch nicht abgeschlossen",
              "noAnalysis": "Der Schüler hat bei diesem Ziel keinen Fortschritt gemacht",
              "interactions": "Interaktionen",
              "chat": {
                "tab": "Konversation",
                "action": "Nachrichten anzeigen"
              },
              "objectivesStatus": {
                "in-progress": "In Bearbeitung",
                "completed": "Abgeschlossen",
                "pending": "Ausstehend",
                "outstanding": "Hervorragend"
              },
              "status": {
                "done": "Erledigt",
                "pending": "Ausstehend"
              },
              "spoken": {
                "audio": "Audio des Schülers",
                "feedback": "Bewertung und Feedback",
                "transcription": "Transkription"
              },
              "multipleChoice": {
                "participation": {
                  "title": "Teilnahme",
                  "detail": "Richtige Antworten"
                },
                "correct": "Richtige Antworten",
                "wrong": "Falsche Antworten"
              },
              "types": {
                "content-theory": "Inhalt/Theorie",
                "debate": "Debatte",
                "multiple-choice": "Mehrfachauswahl",
                "character-talk": "Gespräch mit einer Figur",
                "spoken": "Mündliche Präsentation"
              }
            },
            "assignment": {
              "empty": {
                "title": "Der Schüler hat an dieser Aufgabe nicht teilgenommen"
              },
              "messages": "Nachrichten"
            },
            "chat": {
              "title": "Konversation",
              "empty": {
                "title": "Es gibt keine Nachrichten in dieser Konversation",
                "description": "Der Schüler hat noch keine Nachrichten über den Chat gesendet."
              },
              "synthesis": "Konversationszusammenfassung",
              "systemActions": {
                "kb-response": "Daten aus der Wissensdatenbank: ",
                "fetching-tool-data": "Ich werde die Dokumente der Klasse abfragen",
                "kb-processed-response": "Analyse über den fertigen Inhalt",
                "transcription": "Transkription wird abgerufen",
                "functions": {
                  "kb": "Abfrage der Wissensdatenbank über: "
                }
              }
            },
            "list": {
              "students": "Schüler",
              "participants": "Teilnehmer",
              "search": "suchen",
              "generalPanel": "Allgemeines Panel"
            },
            "finish": "Beenden",
            "results": "Ergebnisse",
            "total": "Gesamtfragen",
            "correct": "Richtige Antworten",
            "wrong": "Falsche Antworten",
            "title": "Klassenstatus",
            "alerts": "Benachrichtigungen",
            "type": "Aktivitätstyp",
            "subtype": "Aktivitätsuntertyp",
            "archived": "Diese Aufgabe ist archiviert",
            "owner": "Administrator",
            "creator": "Ersteller",
            "noMessages": "Es gibt keine vorherige Nachricht",
            "addCredits": {
              "action": "Credits anfordern",
              "title": "Möchten Sie dem Schüler Credits anfordern?",
              "subtitle": "Credits ermöglichen es dem Schüler, mit der KI der Aktivität zu interagieren"
            },
            "actions": {
              "wall": "Pinnwand",
              "archive": "Archivieren",
              "restore": "Wiederherstellen"
            },
            "studentHeader": {
              "filter": "Nach Aktivität filtern"
            },
            "interaction": "Interaktion",
            "interactions": "Interaktionen",
            "percentil": "Gesamtbeteiligung",
            "preevaluation": "Vorbewertung",
            "multiple": "Mehrfachauswahl",
            "enableAI": {
              "action": "KI aktivieren",
              "success": "Die KI wurde für den Schüler erfolgreich aktiviert",
              "noEnable": "Der Schüler hat die KI noch nicht aktiviert"
            },
            "of": "von",
            "spoken": "Mündliche Bewertung",
            "empty": "Es gibt noch keine Teilnahmen an dieser Aufgabe",
            "participation": {
              "total": "Gesamtbeteiligung",
              "pending": "Schüler ohne Teilnahme"
            },
            "messageCounter": "Nachrichten ",
            "wall": {
              "header": "Pinnwand von ",
              "emptyTitle": "Ups! Die Liste ist leer.",
              "empty": "Derzeit gibt es keine Elemente anzuzeigen. Aber keine Sorge, bald wird es viel Geschichte zu entdecken geben!",
              "description": "Willkommen im Gesprächsverlauf! Dieser Bereich ist ein Fenster zu den faszinierenden Interaktionen unserer Schüler in jeder Aktivität, bereichert durch einen integrierten Chat. Entdecken Sie die Eleganz des Lernens in dieser detaillierten Zeitleiste. 📚"
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