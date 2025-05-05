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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/management/overview",
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
        hash: 3776722223,
        creator: function (require, exports) {
          exports.txt = {
            "actions": {
              "add": "Hinzufügen",
              "analyse": "Verbesserungen vorschlagen",
              "activities": "Aktivitäten generieren",
              "activity": "Aktivitäten",
              "applySuggestions": "Vorschläge anwenden",
              "back": "Zurück",
              "cancel": "Abbrechen",
              "continue": "Fortsetzen",
              "cover": "Titelbild generieren",
              "clean": "Leeren",
              "create": "Erstellen",
              "confirm": "Bestätigen",
              "delete": "Löschen",
              "edit": "Bearbeiten",
              "generate": "Mit KI generieren",
              "next": "Weiter",
              "publish": "Veröffentlichen",
              "removeSuggestions": "Vorschläge ignorieren",
              "refine": "Verfeinern",
              "save": "Speichern",
              "update": "Dokument hochladen",
              "upload": "Bild hochladen",
              "manual": "Manuelles Design"
            },
            "activities": {
              "item": {
                "empty": "Diese Aktivität hat noch keinen definierten Inhalt oder Titel"
              },
              "types": {
                "content-theory": "Inhalt/Theorie",
                "multiple-choice": "Mehrfachauswahl",
                "character-talk": "Gespräch mit einer Figur",
                "debate": "Debatte",
                "spoken": "Mündliche Präsentation"
              },
              "minutes": "Min",
              "description": "Beschreibung",
              "objective": "Ziel",
              "activity": {
                "empty": "Diese Aktivität hat keinen Inhalt"
              },
              "type": "Typ",
              "questions": "Fragen",
              "topics": "Themen",
              "title": "Aktivitäten",
              "empty": {
                "title": "Sie haben noch keine Aktivitäten",
                "text": "Fügen Sie Ihrem Modul eine Aktivität hinzu"
              },
              "createModal": {
                "title": "Wählen Sie den Aktivitätstyp aus",
                "validation": "Sie müssen den Titel und die Beschreibung des Moduls ausfüllen, um eine Aktivität hinzufügen zu können.",
                "validationTitle": "Unvollständiges Modul"
              },
              "delete": {
                "title": "Möchten Sie diese Aktivität wirklich löschen?",
                "subtitle": "Wenn Sie diese Aktivität löschen, kann sie nicht wiederhergestellt werden."
              },
              "descriptionTypes": {
                "content-theory": "Artikel, Anpassungen und Audios zu einem bestimmten Thema, um eine theoretische Grundlage zu schaffen.",
                "multiple-choice": "Multiple-Choice-Fragen zur Überprüfung des Verständnisses",
                "character-talk": "Lernen durch ein Gespräch mit einer fiktiven Figur",
                "debate": "Eins-zu-eins-Gespräch mit einem virtuellen Assistenten, um Themen zu erkunden und zu vertiefen",
                "spoken": "Mündliche Präsentation zu einem zugewiesenen Thema zur Bewertung von Wissen oder anderen Verwendungen wie Kreativität, originelle Präsentationen usw."
              },
              "states": {
                "empty": "Leere Aktivität",
                "completed": "Abgeschlossen",
                "processing": "In Bearbeitung"
              }
            },
            "module": {
              "title": "Fügen Sie hier den Namen des Lernmoduls hinzu",
              "description": {
                "label": "Beschreibung",
                "placeholder": "Beschreibung hier hinzufügen"
              },
              "objective": "Modulziel",
              "owner": "Administrator",
              "actions": {
                "description": "Beschreibung hinzufügen",
                "addActivity": "Aktivität hinzufügen"
              },
              "activities": {
                "title": "Liste der Aktivitäten",
                "empty": {
                  "title": "Modul ohne Aktivitäten",
                  "text": "Fügen Sie Ihrem Modul eine Aktivität hinzu"
                }
              }
            },
            "refine": {
              "title": "KI-Aktivitätsdesign-Assistent",
              "description": "Verwenden Sie den KI-Assistenten, um das Aktivitätsdesign anzupassen und zu verbessern.",
              "description2": "Schreiben Sie einfach, was Sie im Sinn haben, und die KI hilft Ihnen, die Aktivität so zu strukturieren, dass sie Ihren Lernzielen entspricht.",
              "textarea": {
                "label": "Zusätzliche Anweisungen",
                "placeholder": "Teilen Sie spezifische Vorschläge oder Verbesserungsbereiche..."
              },
              "image": {
                "title": "Verbessern Sie die Qualität Ihres Bildes",
                "subtitle": "Ihre Erkenntnisse helfen uns, den Inhalt zu verbessern.",
                "confirm": {
                  "title": "Möchten Sie das aktuelle Bild ersetzen?",
                  "subtitle": "Wenn Sie bestätigen, wird das aktuelle Bild ersetzt."
                }
              },
              "module": {
                "title": "Verbessern Sie die Qualität Ihres Moduls",
                "subtitle": "Ihre Erkenntnisse helfen uns, den Inhalt zu verbessern.",
                "confirm": {
                  "title": "Möchten Sie den aktuellen Inhalt ersetzen?",
                  "subtitle": "Wenn Sie bestätigen, wird der aktuelle Inhalt durch den neuen ersetzt. Wenn Sie den aktuellen Inhalt behalten möchten, klicken Sie auf Abbrechen."
                }
              }
            },
            "modal": {
              "cancel": {
                "title": "Sind Sie sicher?",
                "description": "Ihre Änderungen wurden nicht gespeichert. Wenn Sie fortfahren, gehen sie verloren."
              }
            },
            "delete": {
              "title": "Inhalt löschen",
              "description": "Sind Sie sicher, dass Sie den Inhalt dieser Aktivität löschen möchten?"
            },
            "picture": {
              "title": "Generieren Sie das beste Bild für Ihr Modul",
              "description": "Dieses Tool hilft Ihnen, das beste Bild für Ihr Modul zu generieren. Sie können ein Bild hochladen und wir generieren das beste Bild für Ihr Modul. Sie können auch den Bildeditor verwenden, um das Bild zu bearbeiten und das beste Bild für Ihr Modul zu generieren.",
              "notes": {
                "label": "Notizen",
                "placeholder": "Teilen Sie Ihre Vorschläge, um das beste Bild für Ihr Modul zu erstellen"
              },
              "confirm": {
                "title": "Möchten Sie das aktuelle Bild ersetzen?",
                "subtitle": "Wenn Sie bestätigen, wird das aktuelle Bild ersetzt."
              }
            },
            "errors": {
              "CONTACT_ADMIN": "Bitte wenden Sie sich an den Administrator"
            },
            "toast": {
              "modulePublished": "Modul erfolgreich veröffentlicht",
              "errorPublishingModule": "Fehler beim Veröffentlichen des Moduls"
            },
            "moduleTour": {
              "moduleName": {
                "title": "Modulname hinzufügen",
                "description": "Geben Sie den Namen des Lernmoduls in dieses Feld ein."
              },
              "description": {
                "title": "Beschreibung",
                "description": "Fügen Sie hier eine Beschreibung des Moduls hinzu."
              },
              "image": {
                "title": "Bild generieren",
                "description": "Klicken Sie auf dieses Symbol, um ein Bild des Moduls mit KI zu generieren."
              },
              "activities": {
                "title": "Aktivitäten",
                "description": "Hier können Sie die im Modul hinzugefügten Aktivitäten anzeigen."
              },
              "addActivity": {
                "title": "Aktivität hinzufügen",
                "description": "Klicken Sie auf diese Schaltfläche, um dem Modul eine neue Aktivität hinzuzufügen."
              },
              "publish": {
                "title": "Nach Abschluss",
                "description": "Klicken Sie auf diese Schaltfläche, um das Modul nach Abschluss zu veröffentlichen."
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