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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/draft",
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
        hash: 595775270,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "types": {
                "content-theory": "Inhalt/Theorie",
                "multiple-choice": "Mehrfachauswahl",
                "character-talk": "Gespräch mit einer Figur",
                "debate": "Debatte",
                "spoken": "Mündliche Präsentation"
              }
            },
            "alerts": {
              "coins": {
                "available": "Der Eigentümer hat KI-Credits verfügbar",
                "unavailable": "Der Eigentümer hat keine KI-Credits verfügbar"
              }
            },
            "coins": {
              "alert": {
                "title": "Sie benötigen KI-Credits",
                "description": "Sie müssen KI-Credits erwerben, um alle Funktionen mit künstlicher Intelligenz zu aktivieren.",
                "action": "Akzeptieren"
              },
              "modal": {
                "title": "Fordern Sie KI-Credits an, um mit dieser Funktion fortzufahren",
                "description": "Sie müssen KI-Credits erwerben, um alle Funktionen mit künstlicher Intelligenz zu aktivieren.",
                "actions": {
                  "cancel": "Nein, nicht jetzt, danke",
                  "confirm": "Jetzt anfordern"
                },
                "errors": {
                  "noCredits": "Die Zuweisung konnte nicht verarbeitet werden, bitte wenden Sie sich an den Administrator der Institution"
                }
              },
              "header": {
                "actions": {
                  "require": "KI aktivieren",
                  "available": "Verfügbare Credits"
                },
                "messages": {
                  "add": "Sie haben Credits erworben, um die KI-Funktionen zu nutzen",
                  "middle": "Sie haben 50% der verfügbaren Credits verbraucht",
                  "finishing": "Sie haben fast keine verfügbaren KI-Credits mehr"
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Definieren Sie die Anweisungen für die KI",
                "description": "Leiten Sie die Künstliche Intelligenz an, Inhalte basierend auf Ihren pädagogischen Prinzipien zu generieren, indem Sie z. B. die Arten von Aktivitäten und deren Ton (informell, inspirierend usw.) angeben."
              },
              "textarea": {
                "label": "Zusätzliche Informationen",
                "placeholder": "Teilen Sie spezifische Vorschläge oder Verbesserungsbereiche..."
              },
              "errors": {
                "default": "Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut."
              },
              "confirm": {
                "title": "Sie sind dabei, das Ziel Ihres Moduls zu bestätigen",
                "description": "Sie haben keine der generierten Vorschläge ausgewählt. Möchten Sie ohne deren Umsetzung fortfahren?"
              }
            },
            "suggestions": {
              "objective": {
                "actions": {
                  "label": "Möchten Sie diese verbesserte Version Ihres Ziels verwenden?",
                  "cancel": "Nein, danke",
                  "confirm": "Ja, mein Ziel aktualisieren"
                }
              },
              "total": "Ausgewählte Vorschläge",
              "origin": "Bildungsrichtlinien",
              "label": "Empfohlene Anpassung",
              "irrelevant": "Das Ziel des bereitgestellten Moduls scheint für die definierte Zielgruppe nicht geeignet zu sein. Bitte überprüfen Sie dies und versuchen Sie es erneut."
            },
            "title": "Erstellen Sie ein Lernmodul",
            "postTitle": "Wählen Sie die Aspekte aus, die der zu generierende Inhalt im folgenden Formular haben soll",
            "module": "Lernmodul-Ziel",
            "empty": "Hier können Sie die personalisierten Inhalte anzeigen, die von unserem Assistenten basierend auf Ihren Formulareingaben angepasst wurden",
            "duration": {
              "brief": "Kurz (3 Aktivitäten)",
              "standard": "Standard (5 Aktivitäten)",
              "extended": "Erweitert (7 Aktivitäten)"
            },
            "form": {
              "module": "Was ist das Ziel dieses Moduls?",
              "target": "Durchschnittsalter der Schüler",
              "duration": "Moduldauer",
              "languages": "Sprachen"
            },
            "labels": {
              "title": "Titel",
              "description": "Beschreibung"
            },
            "confirm": {
              "title": "Sie sind dabei, das Ziel Ihres Moduls zu bestätigen",
              "messages": "Sie haben keine der generierten Vorschläge ausgewählt. Möchten Sie ohne deren Umsetzung fortfahren?"
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