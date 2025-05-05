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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/identify",
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
        hash: 4165427006,
        creator: function (require, exports) {
          exports.txt = {
            "errors": {
              "ERROR_PUBLISHING": "Die Anfrage konnte nicht gestellt werden, bitte versuchen Sie es später erneut",
              "INVALID_CODE": "Falscher Code",
              "ALREADY_WAITING": "Sie haben bereits die Anfrage gestellt, der Organisation beizutreten. Warten Sie, bis der Administrator Sie akzeptiert, oder kontaktieren Sie ihn",
              "ALREADY_MEMBER": "Sie sind bereits Mitglied der Organisation",
              "ALREADY_WAITING_CLASSROOM": "Ihre Zugriffsanfrage steht noch aus, kontaktieren Sie den Klassenlehrer",
              "ALREADY_WAITING_ORG": "Sie haben bereits die Anfrage gestellt, der Organisation beizutreten. Warten Sie, bis der Administrator Sie akzeptiert, oder kontaktieren Sie ihn"
            },
            "institution": {
              "form": {
                "title": "Starten Sie eine kostenlose Testversion für Institutionen und erkunden Sie die Bildungstransformation",
                "description": "Greifen Sie auf eine kostenlose Testversion zu, indem Sie das Formular ausfüllen. Wir werden Ihnen die notwendigen Guthaben zuweisen, damit Sie die Unterstützung der künstlichen Intelligenz in Ihrem Bildungsraum erleben und mit Ihren Lehrern teilen können. Überprüfen Sie Ihre E-Mail für weitere Details.",
                "fields": {
                  "name": {
                    "label": "Name der Institution",
                    "errorMessage": "Pflichtfeld"
                  },
                  "type": {
                    "label": "Typ der Institution",
                    "errorMessage": "Pflichtfeld"
                  },
                  "educationalLevel": {
                    "label": "Bildungsniveau",
                    "errorMessage": "Pflichtfeld"
                  },
                  "geographicAddress": {
                    "label": "Geografische Adresse"
                  },
                  "authorizedUser": {
                    "label": "Ich bin ein von der Bildungseinrichtung autorisierter Benutzer"
                  },
                  "submit": {
                    "label": "ANFRAGE SENDEN"
                  }
                }
              },
              "title": "Fordern Sie eine kostenlose Testversion für Institutionen an und beginnen Sie, die Bildungsumwandlung zu erkunden",
              "description": "Fordern Sie den Zugang zu einer kostenlosen Testversion an, indem Sie das Formular ausfüllen. Sobald es eingereicht wurde, werden wir Ihre Anfrage überprüfen. Denken Sie daran, Ihre E-Mails zu überprüfen, in denen wir Sie über die Genehmigung Ihrer Anfrage informieren und die notwendigen Credits zuweisen, damit Ihre Bildungsgemeinschaft die Unterstützung der Künstlichen Intelligenz im Klassenzimmer erleben kann."
            },
            "requested": {
              "teacher": {
                "title": "Herzlichen Glückwunsch! Sie können jetzt Ihre Testphase starten",
                "description": "Wir haben Ihnen <strong>{totalGenerative} Generierungs-Guthaben</strong> zugewiesen, um {totalGenerative} Module mit KI zu erstellen, und <strong>{totalInteraction} interaktive Guthaben</strong> für die KI-Interaktion mit Ihren Schülern."
              },
              "teacherInstitution": {
                "title": "Ihre Anfrage zum Beitritt zur Institution wird geprüft.",
                "description": "Bitte warten Sie auf die Genehmigung des Administrators, um auf den Bildungsraum zuzugreifen. Überprüfen Sie Ihre E-Mail, wo wir Sie benachrichtigen werden, sobald Ihre Anfrage genehmigt wurde."
              },
              "teacherApproved": {
                "title": "Herzlichen Glückwunsch! Ihre Anfrage wurde genehmigt",
                "description": "Sie sind jetzt Teil der Institution {organization}. Beginnen Sie mit der Nutzung von RVD.AI."
              },
              "student": {
                "title": "Ihre Anfrage zum Beitritt zum Klassenraum wird geprüft.",
                "description": "Bitte warten Sie auf die Genehmigung des Lehrers, um auf den Klassenraum zuzugreifen. Überprüfen Sie Ihre E-Mail, wo wir Sie benachrichtigen werden, sobald Ihre Anfrage genehmigt wurde."
              },
              "studentApproved": {
                "title": "Herzlichen Glückwunsch! Ihre Anfrage wurde genehmigt",
                "description": "Sie sind jetzt Teil des Klassenraums. Beginnen Sie mit der Nutzung von RVD.AI."
              },
              "institution": {
                "title": "Herzlichen Glückwunsch! Ihre Institution kann jetzt ihre Testphase starten",
                "description": "Wir haben Ihnen für Ihre Testphase {totalGenerative} Guthaben zugewiesen, um {totalGenerative} Module mit KI zu erstellen, und {totalInteraction} Guthaben für die KI-Interaktion mit Schülern.",
                "start": "Starten"
              }
            },
            "cards": {
              "student": {
                "icon": "student",
                "title": "Ich bin ein Schüler",
                "description": "Greifen Sie auf Inhalte zu, die von Ihren Lehrern zugewiesen wurden, und lernen Sie in Ihrem eigenen Tempo mit KI-Unterstützung."
              },
              "teacher": {
                "icon": "teacher",
                "title": "Ich bin ein Lehrer",
                "description": "Erstellen Sie Bildungsinhalte und überwachen Sie Ihre Schüler mit KI-Unterstützung."
              },
              "institution": {
                "icon": "institution",
                "title": "Ich bin eine Institution",
                "description": "Fügen Sie künstliche Intelligenz zu Ihrem Bildungsangebot hinzu und ermöglichen Sie Ihrer Gemeinschaft, KI-unterstützte Inhalte zu generieren."
              }
            },
            "student": {
              "selection": {
                "title": "Sie sind dabei, den Weg zur Bildungstransformation zu beginnen",
                "description": "Um Ihre Lernerfahrung mit RVD.AI Rivadavia zu beginnen, können Sie den Lehrer nach dem Zugangscode für den Klassenraum fragen und diesen eingeben, um fortzufahren, oder den Zugangslink zu einer Aktivität anfordern. Sobald Sie diese Informationen haben, können Sie das Lernmodul betreten und mit der Erkundung der speziell für Sie entwickelten Inhalte beginnen."
              },
              "form": {
                "title": "Beginnen Sie Ihre Bildungstransformation",
                "description": "Sie sind dabei, dem Bildungsraum Ihrer Institution beizutreten. Um RVD.AI Rivadavia zu betreten, müssen Sie den vom Administrator Ihrer Institution bereitgestellten Zugangscode validieren.",
                "form": {
                  "legend": {
                    "title": "Sie haben keinen Code?",
                    "description": "Fragen Sie Ihren Lehrer nach dem Zugangscode oder Link."
                  },
                  "action": "Code eingeben",
                  "error": {
                    "title": "Falscher Code.",
                    "description": "Bitte überprüfen Sie den Code und versuchen Sie es erneut. Wenn das Problem weiterhin besteht, wenden Sie sich an den Administrator Ihrer Institution, um den richtigen Code zu erhalten."
                  }
                }
              }
            },
            "teacher": {
              "form": {
                "title": "Starten Sie Ihre kostenlose Testversion für Lehrer und erkunden Sie die Bildungstransformation",
                "description": "Greifen Sie auf eine kostenlose Testversion zu, indem Sie das Formular ausfüllen. Wir werden Ihnen die notwendigen Guthaben zuweisen, damit Sie die Unterstützung der künstlichen Intelligenz in Ihrer Lehrtätigkeit erleben können. Überprüfen Sie Ihre E-Mail für weitere Details.",
                "fields": {
                  "role": {
                    "label": "Position",
                    "errorMessage": "Pflichtfeld"
                  },
                  "grade": {
                    "label": "Bildungsniveau",
                    "errorMessage": "Pflichtfeld"
                  },
                  "curricularArea": {
                    "label": "Lehrplanbereich",
                    "errorMessage": "Pflichtfeld"
                  },
                  "name": {
                    "label": "Name der Institution",
                    "errorMessage": "Pflichtfeld"
                  },
                  "type": {
                    "label": "Typ der Institution",
                    "errorMessage": "Pflichtfeld"
                  },
                  "address": {
                    "label": "Geografische Adresse",
                    "errorMessage": "Pflichtfeld"
                  },
                  "submit": {
                    "label": "ANFRAGE SENDEN",
                    "errorMessage": ""
                  }
                }
              },
              "institution": {
                "intro": {
                  "hello": "Hallo {username}",
                  "title": "Verwendet die Institution, in der Sie arbeiten, RVD.AI?",
                  "description": "Meine Institution arbeitet bereits mit <strong>RVD.AI</strong> Rivadavia und ich möchte ihrem Bildungsraum beitreten.",
                  "options": {
                    "yes": {
                      "label": "Ja",
                      "description": "Meine Institution arbeitet bereits mit <strong>RVD.AI Rivadavia</strong> und ich möchte ihrem Bildungsraum beitreten."
                    },
                    "no": {
                      "label": "Nein",
                      "description": "Meine Institution arbeitet nicht mit <strong>RVD.AI Rivadavia</strong>. Ich möchte dem Tool als unabhängiger Lehrer beitreten."
                    }
                  }
                },
                "form": {
                  "title": "Beginnen Sie die Bildungstransformation",
                  "description": "Sie sind dabei, dem Bildungsraum Ihrer Institution beizutreten. Um auf RVD.AI Rivadavia zuzugreifen, müssen Sie den vom Administrator Ihrer Institution bereitgestellten Zugangscode validieren.",
                  "form": {
                    "legend": {
                      "title": "Sie haben Ihren Code nicht?",
                      "description": "Überprüfen Sie Ihre E-Mail oder kontaktieren Sie den Administrator Ihrer Institution, wenn Sie die Einladung noch nicht erhalten haben."
                    },
                    "action": "Code eingeben",
                    "error": {
                      "title": "Falscher Code.",
                      "description": "Bitte überprüfen Sie den Code und versuchen Sie es erneut. Wenn das Problem weiterhin besteht, kontaktieren Sie den Administrator Ihrer Institution, um den richtigen Code zu erhalten."
                    }
                  }
                }
              },
              "actions": {
                "continue": "Fortfahren"
              },
              "welcome": {
                "user": {
                  "hello": "Hallo {username}!",
                  "description": "Willkommen bei RVD.AI Rivadavia"
                }
              },
              "processed": {
                "title": "Sie haben bereits KI-Guthaben für Ihr Profil zugewiesen!",
                "subtitle": "Wir haben für Ihre Testphase zugewiesen:",
                "description": "{totalGenerative} Guthaben zum Erstellen von 5 Modulen mit KI und {totalInteraction} Guthaben für die Interaktion Ihrer Schüler mit KI."
              }
            },
            "title": "Willkommen!",
            "subtitle": "Wählen Sie Ihre Rolle im Bildungsbereich",
            "back": "Zurück",
            "welcome": {
              "hello": "Hallo {username}!",
              "description": "Willkommen bei RVD.AI Rivadavia"
            },
            "actions": {
              "accept": "AKZEPTIEREN",
              "back": "ZURÜCK",
              "continue": "Fortfahren",
              "join": "Anfrage senden",
              "start": "Starten"
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