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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/chat-component",
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
        hash: 449343729,
        creator: function (require, exports) {
          exports.txt = {
            "permissions": {
              "intro": "Zugriffsberechtigungen",
              "title": "Sprachaktivierung",
              "description": "Aktivieren Sie das Mikrofon, um Ihr Erlebnis durch Interaktion mit Sprachbefehlen zu verbessern.",
              "concedded": {
                "title": "Fertig!",
                "description": "Jetzt können Sie die Sprachaktivierung genießen."
              },
              "error": {
                "title": "Wir haben keinen Zugriff auf das Mikrofon",
                "description": "Um die Sprachfunktion zu aktivieren, benötigen wir Zugriff auf Ihr Mikrofon. Bitte aktivieren Sie es in Ihren Browsereinstellungen und aktualisieren Sie die Seite."
              }
            },
            "systemActions": {
              "kb-response": "Daten aus der Wissensdatenbank erhalten: ",
              "fetching-tool-data": "Ich werde die Dokumente der Klasse abfragen",
              "kb-processed-response": "Analyse des Inhalts abgeschlossen",
              "transcription": "Transkription wird abgerufen",
              "functions": {
                "kb": "Abfrage der Wissensdatenbank über: "
              }
            },
            "system": {
              "success": "System erfolgreich aktualisiert"
            },
            "assistant": {
              "title": "Assistenten-Mission",
              "message": "Die Mission, die der Agent haben wird, um im Chat zu interagieren"
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