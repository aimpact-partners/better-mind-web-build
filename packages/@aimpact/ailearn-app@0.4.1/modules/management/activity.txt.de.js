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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/modules/management/activity",
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
        hash: 3573795123,
        creator: function (require, exports) {
          exports.txt = {
            "activities": {
              "test": {
                "warning": "Sie müssen alle Pflichtfelder ausfüllen, um die Aktivität testen zu können"
              },
              "minutes": "Min",
              "sections": {
                "general": "",
                "advanced": {
                  "title": "Erweiterte Einstellungen",
                  "subtitle": "Zusätzliche Anweisungen für den Agenten und die Aktivität"
                },
                "agent": {
                  "title": "KI-Agent Einstellungen",
                  "subtitle": "Dies sind die Daten, die die KI verwenden wird, um mit jedem der Schüler zu interagieren."
                }
              },
              "description": {
                "label": "Worum geht es bei dieser Aktivität?*",
                "placeholder": "Beschreibung hinzufügen"
              },
              "instructions": {
                "label": "Anweisungen",
                "placeholder": "Anweisungen hinzufügen"
              },
              "objective": {
                "label": "Ziel",
                "placeholder": "Fügen Sie ein Ziel hinzu"
              },
              "module": "Modul",
              "type": "Typ",
              "questions": "Fragen",
              "topics": "Themen",
              "form": {
                "description": "Beschreibung",
                "title": "Titel"
              },
              "actions": {
                "generateAnswers": "Antworten generieren"
              },
              "refine": {
                "type": {
                  "label": "Was möchten Sie verbessern?",
                  "answers": "Antworten",
                  "questions": "Fragen"
                }
              },
              "empty": {
                "title": "Inhalt für die Aktivität generieren",
                "description": "Sie können diesen Inhalt manuell erstellen oder eine automatische Version mit künstlicher Intelligenz generieren, indem Sie auf 'Mit KI generieren' klicken"
              },
              "deleteModal": {
                "title": "Inhalt löschen",
                "description": "Sind Sie sicher, dass Sie den Inhalt dieser Aktivität löschen möchten?"
              },
              "settings": {
                "layout": {
                  "label": "Layout",
                  "title": "Wie soll diese Aktivität aussehen?",
                  "description": "Wählen Sie die Art der Visualisierung, die Sie der Aktivität geben möchten",
                  "options": {
                    "fullContentLayout": {
                      "title": "Vollständiges Inhaltslayout",
                      "description": "Ich möchte, dass <strong>der Bildungsinhalt so viel Platz wie möglich einnimmt.</strong>"
                    },
                    "mainContentLayout": {
                      "title": "Hauptinhaltslayout",
                      "description": "<strong>Ich möchte den Bildungsinhalt priorisieren</strong>, vor dem Chat mit dem Agenten"
                    },
                    "mainChatLayout": {
                      "title": "Haupt-Chat-Layout",
                      "description": "<strong>Ich möchte den Chat mit dem Agenten priorisieren</strong>, vor dem Bildungsinhalt."
                    }
                  }
                }
              }
            },
            "contentTheory": {
              "materials": {
                "empty": "Diese Aktivität hat keinen angehängten Inhalt",
                "title": "Fügen Sie der Aktivität Inhalte hinzu",
                "characters": "Verfügbare Zeichen:",
                "deleteModal": {
                  "title": "Möchten Sie diesen Inhalt löschen?",
                  "description": "Diese Aktion kann nicht rückgängig gemacht werden."
                },
                "types": {
                  "article": "Inhalt",
                  "synthesis": "Zusammenfassung",
                  "dyslexia": "Anpassungen",
                  "audios": "Audios"
                },
                "article": {
                  "textarea": "Artikel"
                },
                "dyslexia": {
                  "textarea": "Anpassungen"
                },
                "audio": {
                  "noAudio": "Dieses Element hat kein erstelltes Audio",
                  "maxLength": "Das Audio des Elements kann nicht erstellt werden, da es das erlaubte Zeichenlimit (4000) überschreitet.",
                  "emptyMaterial": "Dieses Audio kann nicht generiert werden, wenn {type} nicht definiert wurde",
                  "content": "Der Inhalt",
                  "dyslexia": "Die Anpassungen"
                },
                "refinement": {
                  "title": "Inhalt generieren",
                  "description": "Der Inhalt wird basierend auf folgendem Ziel generiert:"
                },
                "form": {
                  "title": "Artikel mit Bildungsinhalten",
                  "content": {
                    "title": "Inhaltsverfassung",
                    "placeholder": "Beginnen Sie hier mit der Erstellung Ihres Inhalts…."
                  },
                  "article": {
                    "placeholder": "Beginnen Sie hier mit der Erstellung Ihres Inhalts…."
                  }
                }
              },
              "empty": {
                "title": "Diese Aktivität hat keinen zugeordneten Bildungsinhalt",
                "description": "Fügen Sie Ihrem Modul Bildungsinhalte hinzu, um zu beginnen.",
                "actions": {
                  "add": "Inhalt hinzufügen",
                  "upload": "Dokument hochladen"
                }
              }
            },
            "multipleChoice": {
              "questions": {
                "placeholder": "Frage eingeben"
              },
              "modalQuestions": {
                "title": "Fragen generieren",
                "description": "Fügen Sie die Beobachtungen hinzu, die Sie für die Generierung der Fragen und Antworten für notwendig halten"
              },
              "modalAnswers": {
                "title": "Antworten generieren",
                "description": "Fügen Sie die Beobachtungen hinzu, die Sie für die Generierung der Antworten für notwendig halten"
              },
              "actions": {
                "generateAnswers": "Antworten generieren",
                "addAnswer": "Antwort hinzufügen",
                "addQuestion": "Frage hinzufügen",
                "generateQuestions": "Fragen generieren",
                "delete": "Löschen",
                "markCorrect": "Als korrekt markieren"
              },
              "cancel": {
                "title": "Möchten Sie zurückgehen?",
                "description": "Alle vorgenommenen Änderungen gehen verloren"
              },
              "answers": {
                "placeholder": "Geben Sie eine Antwortoption ein und markieren Sie sie als richtig oder falsch"
              },
              "related": {
                "label": "Verwandte Aktivität",
                "independent": "Unabhängig"
              },
              "emptyOptions": "Antwortoptionen wurden nicht definiert"
            },
            "specs": {
              "title": "Aktivitätsspezifikationen",
              "titles": {
                "multiplechoice": "Fragen und Antworten"
              },
              "general": {
                "label": "Allgemeine Daten"
              },
              "agent": {
                "label": "Für den Agenten erforderliche Daten"
              },
              "advanced": {
                "label": "Erweiterte Daten"
              },
              "assessment": {
                "label": "Wie bewertet die KI die mündliche Präsentation des Schülers?",
                "placeholder": "Fügen Sie die Bewertung der Aktivität hinzu"
              },
              "topic": {
                "title": "Worüber soll der Agent unterrichten?",
                "label": "Studienthema*",
                "placeholder": "Fügen Sie das Thema der Aktivität hinzu"
              },
              "task": {
                "label": "Zusätzliche Informationen für den Schüler *",
                "placeholder": "Fügen Sie die Aufgabe der Aktivität hinzu"
              },
              "objective": {
                "label": "Ziele",
                "placeholder": "Fügen Sie das Ziel der Aktivität hinzu",
                "empty": "Diese Aktivität hat keine zugeordneten Ziele. Fügen Sie ein Ziel hinzu, um die KI zu leiten"
              },
              "related": {
                "label": "Verwandte Aktivität",
                "placeholder": "Wählen Sie die verwandte Aktivität aus"
              },
              "instructions": {
                "label": "Zusätzliche Anweisungen für den Agenten",
                "placeholder": "Fügen Sie bei Bedarf zusätzliche Anweisungen hinzu"
              },
              "subjectDebate": {
                "label": "Debattenthema",
                "placeholder": "Fügen Sie das Thema der Debatte hinzu"
              },
              "subject": {
                "title": "Worüber soll der KI-Agent debattieren? *",
                "label": "Thema der Debatte",
                "placeholder": "Fügen Sie das Thema der Debatte hinzu"
              },
              "character": {
                "label": "Charakter",
                "placeholder": "Fügen Sie den Charakter der Aktivität hinzu"
              },
              "role": {
                "title": "Welche Rolle soll der Agent in der Debatte übernehmen? *",
                "label": "Agentenrolle",
                "placeholder": "Fügen Sie die Rolle des Agenten hinzu"
              },
              "characterRole": {
                "title": "Welche Rolle soll der Charakter im Gespräch übernehmen? *",
                "label": "Charakterrolle",
                "placeholder": "Fügen Sie die Rolle des Charakters hinzu"
              },
              "questions": {
                "title": "Fragen"
              },
              "objectives": {
                "label": "Welche Ziele soll der Schüler erreichen? *",
                "name": {
                  "label": "Name",
                  "placeholder": "Fügen Sie den Namen des Ziels hinzu"
                },
                "objective": {
                  "label": "Ziel",
                  "placeholder": "Fügen Sie das Ziel der Aktivität hinzu"
                }
              },
              "criteria": {
                "label": "Bewertungskriterien",
                "placeholder": "Fügen Sie die Kriterien der Aktivität hinzu",
                "name": {
                  "label": "Name",
                  "placeholder": "Fügen Sie den Namen des Kriteriums hinzu"
                },
                "subject": {
                  "label": "Kriterium",
                  "placeholder": "Fügen Sie die Kriterien der Aktivität hinzu"
                }
              }
            },
            "spoken": {
              "criteria": {
                "label": "Bewertungskriterien"
              }
            },
            "types": {
              "content-theory": "Inhalt/Theorie",
              "debate": "Debatte",
              "multiple-choice": "Mehrfachauswahl",
              "character-talk": "Gespräch mit einer Figur",
              "spoken": "Mündliche Präsentation",
              "written": "Schriftlich"
            },
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
            "errors": {
              "INCOMPLETE_MODULE": "Sie müssen das Modul abschließen, bevor Sie fortfahren. Fehlende Felder: ",
              "default": "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
              "NO_RELATED_ACTIVITY": "Die ausgewählte Aktivität hat keinen Artikel. Sie müssen zuerst den Artikel generieren, um ihn verwenden zu können",
              "wrongQuestions": "Um zu speichern, müssen Sie die Antwortoptionen korrekt hinzugefügt und die richtige Option für jede Frage ausgewählt haben."
            },
            "form": {
              "title": "Aktivitätstitel *"
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
            "manual": {
              "cancel": "Sind Sie sicher, dass Sie abbrechen möchten?",
              "article": {
                "textarea": "Fügen Sie den Inhalt der Aktivität hinzu"
              },
              "content": {
                "textarea": "Fügen Sie den Inhalt der Aktivität hinzu"
              },
              "synthesis": {
                "textarea": "Fügen Sie hier Ihre Zusammenfassung hinzu"
              },
              "dyslexia": {
                "textarea": "Fügen Sie hier Ihren Inhalt hinzu"
              }
            },
            "refine": {
              "title": "Aktivität generieren",
              "description": "Wir werden die Aktivität basierend auf dem folgenden Ziel generieren",
              "synthesis": {
                "title": "Zusammenfassung generieren",
                "description": "Eine Zusammenfassung des zuvor generierten Inhalts wird erstellt."
              },
              "dyslexia": {
                "title": "Anpassungen generieren",
                "description": "Eine barrierefreie Version des Inhalts wird für Schüler mit unterschiedlichen Lernstilen und Bedürfnissen generiert."
              },
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
              "title": "Bilder für Ihre Aktivität generieren",
              "description": "Beschreiben Sie das Bild, das Sie generieren möchten, so detailliert wie möglich, damit die künstliche Intelligenz es sich vorstellen und generieren kann.",
              "notes": {
                "label": "Notizen",
                "placeholder": "Teilen Sie Ihre Vorschläge, um das beste Bild für Ihr Modul zu erstellen"
              },
              "confirm": {
                "title": "Möchten Sie das aktuelle Bild ersetzen?",
                "subtitle": "Wenn Sie bestätigen, wird das aktuelle Bild ersetzt."
              }
            },
            "progress": {
              "label": "Bearbeitungsstatus",
              "fields": {
                "title": "Titel",
                "description": "Beschreibung",
                "picture": "Bild",
                "general": "Allgemein",
                "agent": "KI-Agent",
                "advanced": "Erweitert",
                "questions": "Fragen"
              },
              "states": {
                "optional": "Optional",
                "completed": "Abgeschlossen",
                "inprogress": "In Bearbeitung",
                "pending": "Zu erledigen"
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