System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/kernel@0.1.12/core", "@aimpact/chat-sdk@1.5.4/config", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/better-mind", "0.0.1"]]);
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
        hash: 3403873465,
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
                rate
              });
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
              const rate = localStorage.getItem('aimpact.audio.speed') ? parseFloat(localStorage.getItem('aimpact.audio.speed')) : this.rate;
              // Wait for voiceManager to load voices
              await _manager.voiceManager.ready();
              // Get the selected or default voice
              const voice = _manager.voiceManager.getVoice(this.lang);
              const chunks = this._splitText(text, 150);
              this.#speaking = true;
              this.trigger('change');
              for (const chunk of chunks) {
                await new Promise(resolve => {
                  const utterance = new SpeechSynthesisUtterance(chunk);
                  utterance.rate = isNaN(rate) ? this.rate : rate;
                  utterance.lang = this.lang;
                  if (voice) utterance.voice = voice;
                  utterance.onstart = () => this.trigger('change');
                  utterance.onboundary = e => {
                    this.#currentWord = e.charIndex === 0 ? 0 : e.charIndex;
                    this.trigger('change');
                    this.trigger('boundary');
                  };
                  utterance.onend = () => resolve();
                  speechSynthesis.speak(utterance);
                });
              }
              this.#speaking = false;
              this.#currentWord = -1;
              this.trigger('on.finish');
            }
            _splitText(text, maxLength) {
              const chunks = [];
              let remaining = text;
              while (remaining.length > 0) {
                if (remaining.length <= maxLength) {
                  chunks.push(remaining);
                  break;
                }
                let chunk = remaining.slice(0, maxLength + 1);
                const splitPoint = chunk.lastIndexOf(' ');
                if (splitPoint !== -1) {
                  chunks.push(remaining.slice(0, splitPoint));
                  remaining = remaining.slice(splitPoint + 1);
                } else {
                  chunks.push(remaining.slice(0, maxLength));
                  remaining = remaining.slice(maxLength);
                }
              }
              return chunks;
            }
            play(text, id) {
              if (text) this.#text = text;
              this.#id = id;
              this._web();
            }
            stop() {
              speechSynthesis.cancel();
              setTimeout(() => {
                if (this.#speaking) {
                  this.#speaking = false;
                  this.#currentWord = -1;
                  this.trigger('on.finish');
                }
              }, 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJWb2ljZU1hbmFnZXIiLCJsaXN0IiwibG9hZGVkIiwib25SZWFkeSIsImRlZmF1bHRzIiwiTWFwIiwiY29uc3RydWN0b3IiLCJpbml0IiwibG9hZERlZmF1bHRzIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJsYW5nIiwibmFtZSIsInNldCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlRGVmYXVsdHMiLCJmcm9tRW50cmllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXREZWZhdWx0Iiwic2V0RGVmYXVsdHMiLCJsb2FkIiwiYXZhaWxhYmxlIiwic3BlZWNoU3ludGhlc2lzIiwiZ2V0Vm9pY2VzIiwibGVuZ3RoIiwiY2IiLCJvbnZvaWNlc2NoYW5nZWQiLCJnbG9iYWxUaGlzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib25CYWNrIiwiYmluZCIsIm9uQmFja0NhbGxiYWNrIiwiY2FsbGJhY2siLCJyb3V0aW5nIiwiYmFjayIsInJlYWR5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJwdXNoIiwiYWxsIiwiYnlMYW5nIiwiZmlsdGVyIiwidiIsInN0YXJ0c1dpdGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiYnlOYW1lIiwiZmluZCIsImdldFZvaWNlIiwiY3VzdG9tTmFtZSIsImdldCIsImN1c3RvbSIsInByaW9yaXRpZXMiLCJ2b2ljZSIsImluY2x1ZGVzIiwiXyIsImNyaXRlcmlvbiIsInVuZGVmaW5lZCIsImdldERlZmF1bHQiLCJleHBvcnRzIiwidm9pY2VNYW5hZ2VyIiwiX2NvcmUiLCJfY29uZmlnIiwiVm9pY2VMYWIiLCJFdmVudHMiLCJhcGlLZXkiLCJkZWZhdWx0IiwicGFyYW1zIiwiZWxldmVubGFicyIsImtleSIsInZvaWNlSWQiLCJpZCIsInVybCIsImhlYWRlcnMiLCJhdWRpbyIsInN0b3AiLCJwYXVzZSIsImJsb2IiLCJwbGF5IiwidGV4dCIsIndhcm4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInZvaWNlX2lkIiwidm9pY2Vfc2V0dGluZ3MiLCJzdGFiaWxpdHkiLCJzaW1pbGFyaXR5X2Jvb3N0IiwibWVkaWFTb3VyY2UiLCJNZWRpYVNvdXJjZSIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQXVkaW8iLCJzb3VyY2VCdWZmZXIiLCJhZGRTb3VyY2VCdWZmZXIiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJwdW1wIiwidmFsdWUiLCJkb25lIiwicmVhZCIsImVuZE9mU3RyZWFtIiwiYXBwZW5kQnVmZmVyIiwiX21vZGVsIiwiX21hbmFnZXIiLCJWb2ljZSIsIlJlYWN0aXZlTW9kZWwiLCJzcGVha2luZyIsImN1cnJlbnRXb3JkIiwicGF1c2VkIiwidHJpZ2dlciIsImluc3RhbmNlIiwicmF0ZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwciIsImxhbmd1YWdlIiwicmVhY3RpdmVQcm9wcyIsInBvc2l0aW9uVG9DdXQiLCJfdm9pY2UiLCJzZWxlY3RlZFZvaWNlIiwiX3dlYiIsImNhbmNlbCIsInBhcnNlRmxvYXQiLCJjaHVua3MiLCJfc3BsaXRUZXh0IiwiY2h1bmsiLCJ1dHRlcmFuY2UiLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJpc05hTiIsIm9uc3RhcnQiLCJvbmJvdW5kYXJ5IiwiY2hhckluZGV4Iiwib25lbmQiLCJzcGVhayIsIm1heExlbmd0aCIsInJlbWFpbmluZyIsInNsaWNlIiwic3BsaXRQb2ludCIsImxhc3RJbmRleE9mIiwic2V0VGltZW91dCJdLCJzb3VyY2VzIjpbIi9tYW5hZ2VyLnRzIiwiL3ZvaWNlLWxhYi50cyIsIi92b2ljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFTLEdBQUc1RCxJQUFJO2NBRXBCLE9BQU80RCxTQUFTLENBQUN0SCxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFJc0gsU0FBUyxDQUFDdEgsTUFBTSxJQUFJcUgsU0FBUyxFQUFFO2tCQUNsQ1gsTUFBTSxDQUFDM0YsSUFBSSxDQUFDdUcsU0FBUyxDQUFDO2tCQUN0Qjs7Z0JBR0QsSUFBSVYsS0FBSyxHQUFHVSxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVGLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE1BQU1HLFVBQVUsR0FBR1osS0FBSyxDQUFDYSxXQUFXLENBQUMsR0FBRyxDQUFDO2dCQUN6QyxJQUFJRCxVQUFVLEtBQUssQ0FBQyxDQUFDLEVBQUU7a0JBQ3RCZCxNQUFNLENBQUMzRixJQUFJLENBQUN1RyxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxDQUFDO2tCQUMzQ0YsU0FBUyxHQUFHQSxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztpQkFDM0MsTUFBTTtrQkFDTmQsTUFBTSxDQUFDM0YsSUFBSSxDQUFDdUcsU0FBUyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFRixTQUFTLENBQUMsQ0FBQztrQkFDMUNDLFNBQVMsR0FBR0EsU0FBUyxDQUFDQyxLQUFLLENBQUNGLFNBQVMsQ0FBQzs7O2NBSXhDLE9BQU9YLE1BQU07WUFDZDtZQUVBakQsSUFBSUEsQ0FBQ0MsSUFBYSxFQUFFUixFQUFXO2NBQzlCLElBQUlRLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQUEsSUFBSyxHQUFHQSxJQUFJO2NBQzNCLElBQUksQ0FBQyxDQUFBUixFQUFHLEdBQUdBLEVBQUU7Y0FDYixJQUFJLENBQUNxRCxJQUFJLEVBQUU7WUFDWjtZQUVBakQsSUFBSUEsQ0FBQTtjQUNIeEQsZUFBZSxDQUFDMEcsTUFBTSxFQUFFO2NBQ3hCa0IsVUFBVSxDQUFDLE1BQUs7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsQ0FBQWxDLFFBQVMsRUFBRTtrQkFDbkIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxLQUFLO2tCQUN0QixJQUFJLENBQUMsQ0FBQUMsV0FBWSxHQUFHLENBQUMsQ0FBQztrQkFDdEIsSUFBSSxDQUFDRSxPQUFPLENBQUMsV0FBVyxDQUFDOztjQUUzQixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1I7O1VBQ0FyRCxPQUFBLENBQUFnRCxLQUFBLEdBQUFBLEtBQUEiLCJpZ25vcmVMaXN0IjpbXX0=