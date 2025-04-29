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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/draft/store",
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
        hash: 1212957718,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "item": {
                "empty": "Diese Aktivität hat noch keinen definierten Inhalt oder Titel"
              },
              "types": {
                "content-theory": "Inhalt/Theorie",
                "multiple-choice": "Multiple Choice",
                "character-talk": "Charaktergespräch",
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
                "title": "Wählen Sie den Aktivitätstyp",
                "validation": "Sie müssen den Titel und die Beschreibung des Moduls vervollständigen, um eine Aktivität hinzufügen zu können.",
                "validationTitle": "Unvollständiges Modul"
              },
              "delete": {
                "title": "Möchten Sie diese Aktivität wirklich löschen?",
                "subtitle": "Wenn Sie diese Aktivität löschen, können Sie sie nicht wiederherstellen."
              },
              "descriptionTypes": {
                "content-theory": "Artikel, Anpassungen und Audios zu einem bestimmten Thema zum Aufbau einer theoretischen Grundlage.",
                "multiple-choice": "Multiple-Choice-Fragen zur Überprüfung des Verständnisses",
                "character-talk": "Lernen durch ein Gespräch mit einer fiktiven Figur",
                "debate": "Eins-zu-eins-Gespräch mit einem virtuellen Assistenten zum Erforschen und Vertiefen von Themen",
                "spoken": "Mündliche Präsentation zu einem zugewiesenen Thema zur Bewertung von Wissen oder anderen Verwendungen wie Kreativität, originelle Präsentationen, etc"
              },
              "states": {
                "empty": "Leere Aktivität",
                "completed": "Abgeschlossen",
                "processing": "In Bearbeitung"
              }
            },
            "synthesis": "Synthese",
            "article": "Inhalt",
            "description": "Beschreibung",
            "objectives": "Ziele",
            "task": "Ihre Aufgabe",
            "chat": {
              "empty": {
                "credits": {
                  "title": "Bereit zu lernen?",
                  "description": "Beginnen Sie mit der gewünschten Anfrage"
                },
                "noCredits": {
                  "title": "Sie benötigen KI-Credits, um zu starten",
                  "description": "Fordern Sie Credits an, um mit dem KI-Agenten zu lernen"
                }
              }
            },
            "tabs": {
              "chat": "Chat",
              "content": "Inhalt"
            },
            "languages": {
              "select": {
                "label": "Sprache",
                "placeholder": "Sprache auswählen"
              },
              "label": "Sprachen",
              "en": "Englisch",
              "es": "Spanisch",
              "pt": "Portugiesisch",
              "fr": "Französisch",
              "de": "Deutsch",
              "it": "Italienisch"
            },
            "alerts": {
              "coins": {
                "available": "Eigentümer hat KI-Credits verfügbar",
                "unavailable": "Eigentümer hat keine KI-Credits verfügbar"
              }
            },
            "audience": {
              "label": "Ausbildungstyp",
              "error": "Bitte wählen Sie den Ausbildungstyp",
              "select": "Ausbildungstyp auswählen"
            },
            "level": {
              "label": "Klasse oder Niveau",
              "error": "Bitte wählen Sie eine Klassenstufe",
              "select": "Klasse auswählen"
            },
            "objectiveTour": {
              "buttons": {
                "nextBtnText": "Weiter",
                "prevBtnText": "Zurück",
                "doneBtnText": "Fertig"
              },
              "administrator": {
                "title": "Administrator auswählen",
                "description": "Wählen Sie den Administrator, der für das Lernmodul verantwortlich ist. Er muss über zugewiesene Credits verfügen, um Module mit KI-Unterstützung zu erstellen."
              },
              "parameters": {
                "title": "Wählen Sie die Parameter des Lernmoduls",
                "description": "Wählen Sie die Sprache des Lernmoduls, das Schuljahr Ihrer Schüler und die Anzahl der Aktivitäten. Weitere Informationen finden Sie auf unserem YouTube-Kanal @RVDAIRIVADAVIA24."
              },
              "objective": {
                "title": "Schreiben Sie das Hauptziel des Lernmoduls",
                "description": "Dieses Ziel wird zentral sein, um den Rest des Inhalts und der Aktivitäten des Moduls zu leiten."
              },
              "save": {
                "title": "Speichern Sie das Ziel des Lernmoduls",
                "description": "Nach dem Speichern können Sie Credits anfordern, um das Ziel zu verbessern und mit KI zu arbeiten."
              }
            },
            "pathway": {
              "manual": {
                "title": {
                  "label": "Modultitel",
                  "placeholder": "Geben Sie den Modultitel ein"
                },
                "description": {
                  "label": "Modulbeschreibung",
                  "placeholder": "Geben Sie die Modulbeschreibung ein"
                }
              },
              "ai": {
                "title": "Lassen Sie uns mit KI fortfahren",
                "form": {
                  "size": {
                    "placeholder": "Anzahl der Aktivitäten im Modul",
                    "items": {
                      "brief": "Kurz (3 Aktivitäten)",
                      "standard": "Standard (5 Aktivitäten)",
                      "extended": "Erweitert (7 Aktivitäten)"
                    }
                  },
                  "notes": {
                    "placeholder": "Geben Sie Anweisungen ein, um die KI bei der Erstellung Ihrer Aktivitäten zu leiten"
                  }
                }
              }
            },
            "refine": {
              "activities": {
                "title": "Definieren Sie die Anweisungen für die KI",
                "description": "Leiten Sie die Künstliche Intelligenz an, Inhalte basierend auf Ihren pädagogischen Prinzipien zu generieren, indem Sie zum Beispiel die Arten der Aktivitäten und deren Ton (informell, inspirierend, etc.) angeben."
              },
              "textarea": {
                "label": "Zusätzliche Informationen",
                "placeholder": "Teilen Sie spezifische Vorschläge oder Verbesserungsbereiche mit..."
              },
              "errors": {
                "default": "Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut."
              },
              "confirm": {
                "title": "Sie sind dabei, das Ziel Ihres Moduls zu bestätigen",
                "description": "Sie haben keine der generierten Vorschläge ausgewählt. Möchten Sie ohne deren Implementierung fortfahren?"
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
              "origin": "Bildungseinrichtung",
              "label": "Vorschlag",
              "irrelevant": "Das Ziel des bereitgestellten Moduls scheint nicht für die definierte Zielgruppe geeignet zu sein. Bitte überprüfen Sie dies und versuchen Sie es erneut."
            },
            "setup": {
              "actions": {
                "cancel": "Abbrechen",
                "continue": "Weiter"
              },
              "messages": {
                "save": "Ziel erfolgreich gespeichert"
              },
              "title": "Neues Lernmodul erstellen",
              "subtitle": "Konfigurieren Sie die Eigenschaften Ihres Moduls, um zu beginnen.",
              "generation": {
                "title": "Lassen Sie uns das Modul gestalten",
                "subtitle": "Geben Sie an, wie Sie fortfahren möchten",
                "options": {
                  "ai": "Ich möchte die Aktivitäten mit KI-Unterstützung generieren",
                  "manually": "Ich möchte die Aktivitäten manuell generieren"
                }
              },
              "form": {
                "administrator": {
                  "label": "Administrator",
                  "select": "Administrator auswählen",
                  "account": "Aktuelles Konto",
                  "error": "Sie müssen den Administrator des Lernmoduls angeben"
                },
                "title": {
                  "label": "Modultitel"
                },
                "description": {
                  "label": "Modulbeschreibung"
                },
                "activities": {
                  "label": "Anzahl der Modulaktivitäten"
                },
                "notes": {
                  "placeholder": "Geben Sie Anweisungen ein, um die KI bei der Erstellung Ihrer Aktivitäten zu leiten"
                },
                "objective": {
                  "textArea": "Geben Sie das Modulziel ein"
                }
              },
              "sugestions": {
                "title": "Anweisungsvorschläge"
              },
              "confirmation": {
                "title": "⚠️ Überprüfen & Bestätigen",
                "ownerDescription": "Eigentümer des Lernmoduls",
                "description": "Sobald diese Informationen gespeichert sind, können sie nicht mehr geändert werden."
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