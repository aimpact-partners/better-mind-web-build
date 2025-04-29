System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/kernel@0.1.12/core", "@aimpact/chat-sdk@1.5.4/config", "@beyond-js/reactive@2.0.4/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, VoiceManager, voiceManager, VoiceLab, Voice, __beyond_pkg, hmr;
  _export({
    VoiceManager: void 0,
    voiceManager: void 0,
    VoiceLab: void 0,
    Voice: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Routing) {
      dependency_1 = _beyondJsKernel0112Routing;
    }, function (_beyondJsKernel0112Core) {
      dependency_2 = _beyondJsKernel0112Core;
    }, function (_aimpactChatSdk154Config) {
      dependency_3 = _aimpactChatSdk154Config;
    }, function (_beyondJsReactive204Model) {
      dependency_4 = _beyondJsReactive204Model;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/voice"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/routing', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@aimpact/chat-sdk/config', dependency_3], ['@beyond-js/reactive/model', dependency_4]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./manager
      *************************/
      ims.set('./manager', {
        hash: 2156639225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.voiceManager = exports.VoiceManager = void 0;
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          class VoiceManager {
            list = [];
            loaded = false;
            onReady = [];
            defaults = new Map();
            constructor() {
              this.init();
              this.loadDefaults();
            }
            loadDefaults() {
              const saved = localStorage.getItem('voice.defaults');
              if (saved) {
                try {
                  const defaults = JSON.parse(saved);
                  Object.entries(defaults).forEach(([lang, name]) => {
                    this.defaults.set(lang, name);
                  });
                } catch (e) {
                  console.error('Error loading defaults:', e);
                }
              }
            }
            saveDefaults() {
              const defaults = Object.fromEntries(this.defaults);
              localStorage.setItem('voice.defaults', JSON.stringify(defaults));
            }
            setDefault(lang, name) {
              this.defaults.set(lang, name);
              this.saveDefaults();
            }
            setDefaults(defaults) {
              Object.entries(defaults).forEach(([lang, name]) => {
                this.defaults.set(lang, name);
              });
              this.saveDefaults();
            }
            init() {
              const load = () => {
                const available = speechSynthesis.getVoices();
                if (available.length) {
                  this.list = available;
                  this.loaded = true;
                  this.onReady.forEach(cb => cb());
                  this.onReady = [];
                }
              };
              speechSynthesis.onvoiceschanged = load;
              load();
              globalThis.document.addEventListener('onBack', this.onBack.bind(this));
            }
            #onBackCallback;
            get onBackCallback() {
              return this.#onBackCallback;
            }
            set onBackCallback(callback) {
              this.#onBackCallback = callback;
            }
            onBack() {
              if (!this.onBackCallback) {
                _routing.routing.back();
                return;
              }
            }
            async ready() {
              if (this.loaded) return;
              return new Promise(resolve => this.onReady.push(resolve));
            }
            get all() {
              return this.list;
            }
            byLang(lang) {
              return this.list.filter(v => v.lang.startsWith(lang)).sort((a, b) => a.name.localeCompare(b.name));
            }
            byName(name) {
              return this.list.find(v => v.name === name);
            }
            getVoice(lang) {
              // Check if there's a custom default for this language
              const customName = this.defaults.get(lang);
              if (customName) {
                const custom = this.byName(customName);
                if (custom) return custom;
              }
              // If no custom or it doesn't exist anymore, fall back to default logic
              const available = this.byLang(lang);
              // Prioridades por calidad
              const priorities = [voice => voice.name.includes('Google'), voice => voice.name.includes('Microsoft'), _ => true // fallback
              ];
              for (const criterion of priorities) {
                const voice = available.find(criterion);
                if (voice) return voice;
              }
              return undefined;
            }
            // Alias for backward compatibility
            getDefault(lang) {
              return this.getVoice(lang);
            }
          }
          // Export singleton instance
          exports.VoiceManager = VoiceManager;
          /*bundle*/
          const voiceManager = exports.voiceManager = new VoiceManager();
        }
      });

      /***************************
      INTERNAL MODULE: ./voice-lab
      ***************************/

      ims.set('./voice-lab', {
        hash: 3598784126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceLab = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/chat-sdk/config");
          /*bundle*/
          class VoiceLab extends _core.Events {
            #apiKey = _config.default.params.elevenlabs.key;
            #voiceId = _config.default.params.elevenlabs.id;
            #url = `https://api.elevenlabs.io/v1/text-to-speech/${this.#voiceId}/stream`;
            #headers = {
              'Content-Type': 'application/json',
              'xi-api-key': this.#apiKey
            };
            #audio;
            get audio() {
              return this.#audio;
            }
            stop() {
              if (!this.#audio) return;
              this.#audio.pause();
            }
            #blob;
            get blob() {
              return this.#blob;
            }
            async play(text) {
              if (!text) {
                console.warn('No hay texto para interpretar');
                return;
              }
              console.warn('call API');
              const response = await fetch(this.#url, {
                method: 'POST',
                headers: this.#headers,
                body: JSON.stringify({
                  text,
                  voice_id: this.#voiceId,
                  voice_settings: {
                    stability: 0,
                    similarity_boost: 0
                  }
                })
              });
              const mediaSource = new MediaSource();
              const audioURL = URL.createObjectURL(mediaSource);
              this.#audio = new Audio(audioURL);
              mediaSource.addEventListener('sourceopen', async () => {
                const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
                const reader = response.body.getReader();
                const pump = async () => {
                  const {
                    value,
                    done
                  } = await reader.read();
                  if (done) return mediaSource.endOfStream();
                  sourceBuffer.appendBuffer(value);
                  pump();
                };
                pump();
              });
              this.#audio.play();
            }
          }
          exports.VoiceLab = VoiceLab;
        }
      });

      /***********************
      INTERNAL MODULE: ./voice
      ***********************/

      ims.set('./voice', {
        hash: 1597896833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Voice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _manager = require("./manager");
          /*bundle*/
          class Voice extends _model.ReactiveModel {
            #speaking = false;
            get speaking() {
              return this.#speaking;
            }
            #id;
            #text;
            get text() {
              return this.#text;
            }
            set text(value) {
              this.#text = value;
            }
            #currentWord = -1;
            get currentWord() {
              return this.#currentWord;
            }
            get paused() {
              return speechSynthesis.paused;
            }
            #lang;
            get lang() {
              return this.#lang;
            }
            set lang(value) {
              if (value === this.#lang) return;
              this.#lang = value;
              this.trigger('change');
            }
            #instance;
            get instance() {
              return this.#instance;
            }
            #rate = 1.2;
            get rate() {
              return this.#rate;
            }
            set rate(value) {
              if (value === this.#rate) return;
              this.#rate = value;
              this.trigger('change');
            }
            #languages = {
              en: 'en-EN',
              es: 'es-MX',
              pr: 'pt-BR'
            };
            get languages() {
              return this.#languages;
            }
            constructor({
              language,
              rate
            } = {
              rate: 1.25
            }) {
              super({
                lang: language,
                rate: rate
              });
              const LANGS = {
                en: 'en-US',
                es: 'es-MX'
              };
              // if (!language) language = LANGS[languages.current];
              this.reactiveProps(['positionToCut', 'textId', 'playing']);
              this.positionToCut = 0;
              globalThis._voice = this;
              this.lang = language;
              this.rate = rate;
            }
            #selectedVoice;
            async _web() {
              if (this.#speaking) {
                speechSynthesis.cancel();
                this.trigger('on.finish');
              }
              const text = this.#text;
              const utterance = new SpeechSynthesisUtterance(text);
              const rate = localStorage.getItem('aimpact.audio.speed') ? parseFloat(localStorage.getItem('aimpact.audio.speed')) : this.rate;
              utterance.rate = isNaN(rate) ? this.rate : rate;
              utterance.lang = this.lang;
              // Esperar a que el voiceManager esté listo
              await _manager.voiceManager.ready();
              // Obtener la voz seleccionada o por defecto
              const selectedVoice = _manager.voiceManager.getVoice(this.lang);
              if (selectedVoice) {
                utterance.voice = selectedVoice;
                utterance.lang = selectedVoice.lang;
              } else {
                utterance.lang = this.#languages[this.lang];
              }
              utterance.onstart = () => {
                this.#speaking = true;
                this.trigger('change');
              };
              globalThis.addEventListener('beforeunload', () => {
                speechSynthesis.cancel();
              });
              utterance.onpause = () => {
                this.trigger('change');
              };
              utterance.onresume = () => this.trigger('change');
              utterance.onboundary = event => {
                this.#currentWord = event.charIndex === 0 ? 0 : event.charIndex;
                this.trigger('change');
                this.trigger('boundary');
              };
              utterance.onend = () => {
                this.#speaking = false;
                this.#currentWord = -1;
                this.trigger('on.finish');
              };
              speechSynthesis.speak(utterance);
            }
            play(text, id) {
              if (text) this.#text = text;
              this.#id = id;
              this._web();
            }
            stop() {
              speechSynthesis.cancel();
              // Simular el evento 'onend' manualmente
              setTimeout(() => {
                if (this.#speaking) {
                  this.#speaking = false;
                  this.#currentWord = -1;
                  this.trigger('on.finish'); // Disparar el evento manualmente
                }
              }, 100); // Pequeña demora para asegurarse de que la cancelación se ha procesado
            }
          }
          exports.Voice = Voice;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./manager",
        "from": "VoiceManager",
        "name": "VoiceManager"
      }, {
        "im": "./manager",
        "from": "voiceManager",
        "name": "voiceManager"
      }, {
        "im": "./voice-lab",
        "from": "VoiceLab",
        "name": "VoiceLab"
      }, {
        "im": "./voice",
        "from": "Voice",
        "name": "Voice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'VoiceManager') && _export("VoiceManager", VoiceManager = require ? require('./manager').VoiceManager : value);
        (require || prop === 'voiceManager') && _export("voiceManager", voiceManager = require ? require('./manager').voiceManager : value);
        (require || prop === 'VoiceLab') && _export("VoiceLab", VoiceLab = require ? require('./voice-lab').VoiceLab : value);
        (require || prop === 'Voice') && _export("Voice", Voice = require ? require('./voice').Voice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJWb2ljZU1hbmFnZXIiLCJsaXN0IiwibG9hZGVkIiwib25SZWFkeSIsImRlZmF1bHRzIiwiTWFwIiwiY29uc3RydWN0b3IiLCJpbml0IiwibG9hZERlZmF1bHRzIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJsYW5nIiwibmFtZSIsInNldCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlRGVmYXVsdHMiLCJmcm9tRW50cmllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXREZWZhdWx0Iiwic2V0RGVmYXVsdHMiLCJsb2FkIiwiYXZhaWxhYmxlIiwic3BlZWNoU3ludGhlc2lzIiwiZ2V0Vm9pY2VzIiwibGVuZ3RoIiwiY2IiLCJvbnZvaWNlc2NoYW5nZWQiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25CYWNrIiwiYmluZCIsIm9uQmFja0NhbGxiYWNrIiwiY2FsbGJhY2siLCJyb3V0aW5nIiwiYmFjayIsInJlYWR5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJwdXNoIiwiYWxsIiwiYnlMYW5nIiwiZmlsdGVyIiwidiIsInN0YXJ0c1dpdGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiYnlOYW1lIiwiZmluZCIsImdldFZvaWNlIiwiY3VzdG9tTmFtZSIsImdldCIsImN1c3RvbSIsInByaW9yaXRpZXMiLCJ2b2ljZSIsImluY2x1ZGVzIiwiXyIsImNyaXRlcmlvbiIsInVuZGVmaW5lZCIsImdldERlZmF1bHQiLCJleHBvcnRzIiwidm9pY2VNYW5hZ2VyIiwiX2NvcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsIndhcm4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInZvaWNlX2lkIiwidm9pY2Vfc2V0dGluZ3MiLCJzdGFiaWxpdHkiLCJzaW1pbGFyaXR5X2Jvb3N0IiwibWVkaWFTb3VyY2UiLCJNZWRpYVNvdXJjZSIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQXVkaW8iLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiX21vZGVsIiwiX21hbmFnZXIiLCJWb2ljZSIsIlJlYWN0aXZlTW9kZWwiLCJzcGVha2luZyIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImxhbmd1YWdlIiwiTEFOR1MiLCJyZWFjdGl2ZVByb3BzIiwicG9zaXRpb25Ub0N1dCIsIl92b2ljZSIsInNlbGVjdGVkVm9pY2UiLCJfd2ViIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwicGFyc2VGbG9hdCIsImlzTmFOIiwib25zdGFydCIsIm9ucGF1c2UiLCJvbnJlc3VtZSIsIm9uYm91bmRhcnkiLCJldmVudCIsImNoYXJJbmRleCIsIm9uZW5kIiwic3BlYWsiLCJzZXRUaW1lb3V0Il0sInNvdXJjZXMiOlsiL21hbmFnZXIudHMiLCIvdm9pY2UtbGFiLnRzIiwiL3ZvaWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ087VUFBVSxNQUFPQyxZQUFZ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