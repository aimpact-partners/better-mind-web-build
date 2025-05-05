System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Recorder, __beyond_pkg, hmr;
  _export("Recorder", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["socket.io-client", "4.8.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/recorder"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2533696947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
          class Recorder extends _model.ReactiveModel {
            #initialised = false;
            #source;
            #stream;
            #startTime;
            #initPromise;
            #stopPromise;
            #audioContext;
            #recordingPromise;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #status;
            get status() {
              return this.#status;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #analyser;
            get analyser() {
              return this.#analyser;
            }
            #speechRecognition;
            #transcription = '';
            get transcription() {
              return this.#transcription;
            }
            #promiseSpeech;
            #permissions;
            #permissionObserver;
            #permissionState;
            constructor() {
              super();
              this.init();
            }
            async hasPermissions() {
              try {
                await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                return true;
              } catch (e) {
                console.log('aja');
                this.#error = e;
                return false;
              }
            }
            async init() {
              try {
                const permissions = await navigator.permissions.query({
                  name: 'microphone'
                });
                this.#permissions = permissions.state === 'granted';
                this.#permissionObserver = permissions;
                this.#permissionState = permissions.state;
                permissions.onchange = this.#onChangeStatus.bind(this);
              } catch (e) {
                // the permissions.query microphone validation is not supported in safari and firefox
                // this.#permissions = await this.getPermissions();
              } finally {
                this.ready = true;
              }
            }
            #onChangeStatus() {
              this.#permissionState = this.#permissionObserver.state;
              this.trigger('change');
            }
            getSpeechRecognition() {
              //@ts-ignore
              this.#speechRecognition = new webkitSpeechRecognition();
              this.#speechRecognition.lang = 'es-ES';
              this.#speechRecognition.continuous = true;
              this.#speechRecognition.interimResults = true;
              // this.#speechRecognition.lang = 'en-US'; // Change this to the desired language
              this.#promiseSpeech = new _core.PendingPromise();
              this.#speechRecognition.onresult = event => {
                let interimTranscript = '';
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                  if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                    this.#transcription = finalTranscript;
                    this.#promiseSpeech.resolve(this.#transcription);
                  } else {
                    interimTranscript += event.results[i][0].transcript;
                  }
                }
              };
              this.#speechRecognition.onerror = event => console.error('error in transcription');
              this.#speechRecognition.start();
            }
            #onDataAvailable = event => {
              if (event.data.size === 0) return;
              this.#chunks.push(event.data);
              this.trigger('dataavailable');
            };
            #startRecording = (stream, specs) => {
              this.#mediaRecorder = new MediaRecorder(stream);
              this.#stream = stream;
              // Create an AudioContext
              this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
              // Create an AnalyserNode
              this.#analyser = this.#audioContext.createAnalyser();
              // Create a source from the stream and connect it to the analyser
              this.#source = this.#audioContext.createMediaStreamSource(stream);
              if (specs.analyser) this.#source.connect(this.#analyser);
              //@ts-ignore
              if (specs.speechRecognition && 'webkitSpeechRecognition' in globalThis) {
                this.getSpeechRecognition();
              }
              this.#mediaRecorder.addEventListener('dataavailable', this.#onDataAvailable);
            };
            async initialise(specs = {}) {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              globalThis?.navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => this.#startRecording(stream, specs)).catch(error => {
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record(specs = {
              analyser: true
            }) {
              try {
                if (this.#recordingPromise) return this.#recordingPromise;
                this.#recordingPromise = new _core.PendingPromise();
                if (this.#recording) {
                  throw new Error('Wait for recorder to be stopped and transcription ready');
                }
                this.#status = 'started';
                this.#recording = true;
                this.trigger('change');
                globalThis?.navigator.mediaDevices.getUserMedia({
                  audio: true
                }).then(async stream => {
                  this.#startRecording(stream, specs);
                  this.#recordingPromise.resolve();
                  this.#initialised = true;
                  this.#mediaRecorder?.start();
                }).catch(error => {
                  console.error(error);
                  this.#error = error.message;
                  this.#recordingPromise.reject();
                });
                return this.#recordingPromise;
              } catch (e) {} finally {}
            }
            stopStream = () => {
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => track.stop()); //stop each one
            };
            stop() {
              if (!this.#mediaRecorder) {
                console.warn('this.#mediaRecorder no initialize');
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error('Recorder is not currently recording');
              this.#status = 'stopped';
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                this.#mediaRecorder.addEventListener('stop', async () => {
                  const audio = new Blob(this.#chunks, {
                    type: this.#mediaRecorder.mimeType
                  });
                  //@ts-ignore
                  this.#audio = audio;
                  const onFinish = () => {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
                  };
                  if (this.#promiseSpeech) {
                    this.#promiseSpeech.then(onFinish);
                  } else {
                    if (this.#stopPromise) {
                      onFinish();
                    }
                  }
                  if (this.#recordingPromise) {
                    this.#recordingPromise.resolve(audio);
                    this.#recordingPromise = undefined;
                  }
                  this.stopStream();
                  this.#mediaRecorder = undefined;
                  this.#stream = undefined;
                  this.#initPromise = undefined;
                });
                this.#mediaRecorder?.stop();
                this.#speechRecognition?.stop();
                this.trigger('change');
              };
              this.#initialised ? stop() : this.record().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 939057662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Recorder",
        "name": "Recorder"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./index').Recorder : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJSZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJpbml0aWFsaXNlZCIsInNvdXJjZSIsInN0cmVhbSIsInN0YXJ0VGltZSIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJhdWRpb0NvbnRleHQiLCJyZWNvcmRpbmdQcm9taXNlIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwicHJvbWlzZVNwZWVjaCIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbk9ic2VydmVyIiwicGVybWlzc2lvblN0YXRlIiwiY29uc3RydWN0b3IiLCJpbml0IiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJlIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwibmFtZSIsInN0YXRlIiwib25jaGFuZ2UiLCJvbkNoYW5nZVN0YXR1cyIsImJpbmQiLCJyZWFkeSIsIiNvbkNoYW5nZVN0YXR1cyIsInRyaWdnZXIiLCJnZXRTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIlBlbmRpbmdQcm9taXNlIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwiaSIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0IiwicmVzb2x2ZSIsIm9uZXJyb3IiLCJzdGFydCIsIm9uRGF0YUF2YWlsYWJsZSIsImRhdGEiLCJzaXplIiwicHVzaCIsInN0YXJ0UmVjb3JkaW5nIiwiI3N0YXJ0UmVjb3JkaW5nIiwic3BlY3MiLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpc2UiLCJ0aGVuIiwiY2F0Y2giLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlY29yZCIsIkVycm9yIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvaW50ZXJmYWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUdPO1VBQVcsTUFFWkUsUUFBUyxTQUFRRCxNQUFBLENBQUFFLGFBQXVCO1lBQzdDLENBQUFDLFdBQVksR0FBRyxLQUFLO1lBQ3BCLENBQUFDLE1BQU87WUFDUCxDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsU0FBVTtZQUNWLENBQUFDLFdBQVk7WUFDWixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLENBQUFDLGdCQUFpQjtZQUNqQixDQUFBQyxhQUFjO1lBRWQsQ0FBQUMsTUFBTyxHQUFXLEVBQUU7WUFDcEIsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxTQUFVLEdBQUcsS0FBSztZQUNsQixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUFELEtBQU07WUFDcEI7WUFFQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFDQSxDQUFBQyxpQkFBa0I7WUFDbEIsQ0FBQUMsYUFBYyxHQUFHLEVBQUU7WUFDbkIsSUFBSUEsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUEsQ0FBQUMsYUFBYztZQUVkLENBQUFDLFdBQVk7WUFDWixDQUFBQyxrQkFBbUI7WUFDbkIsQ0FBQUMsZUFBZ0I7WUFDaEJDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBQ0EsTUFBTUMsY0FBY0EsQ0FBQTtjQUNuQixJQUFJO2dCQUNILE1BQU1DLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxZQUFZLENBQUM7a0JBQUNiLEtBQUssRUFBRTtnQkFBSSxDQUFDLENBQUM7Z0JBRXhELE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT2MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxDQUFBbEIsS0FBTSxHQUFHZ0IsQ0FBQztnQkFDZixPQUFPLEtBQUs7O1lBRWQ7WUFDQSxNQUFNTCxJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxNQUFNSixXQUFXLEdBQUcsTUFBTU0sU0FBUyxDQUFDTixXQUFXLENBQUNZLEtBQUssQ0FBQztrQkFBQ0MsSUFBSSxFQUFFO2dCQUFZLENBQVEsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLENBQUFiLFdBQVksR0FBR0EsV0FBVyxDQUFDYyxLQUFLLEtBQUssU0FBUztnQkFDbkQsSUFBSSxDQUFDLENBQUFiLGtCQUFtQixHQUFHRCxXQUFXO2dCQUN0QyxJQUFJLENBQUMsQ0FBQUUsZUFBZ0IsR0FBR0YsV0FBVyxDQUFDYyxLQUFLO2dCQUN6Q2QsV0FBVyxDQUFDZSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFDLGNBQWUsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztlQUN0RCxDQUFDLE9BQU9SLENBQUMsRUFBRTtnQkFDWDtnQkFDQTtjQUFBLENBQ0EsU0FBUztnQkFDVCxJQUFJLENBQUNTLEtBQUssR0FBRyxJQUFJOztZQUVuQjtZQUVBLENBQUFGLGNBQWVHLENBQUE7Y0FDZCxJQUFJLENBQUMsQ0FBQWpCLGVBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUFELGtCQUFtQixDQUFDYSxLQUFLO2NBQ3RELElBQUksQ0FBQ00sT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBQyxvQkFBb0JBLENBQUE7Y0FDbkI7Y0FDQSxJQUFJLENBQUMsQ0FBQXhCLGlCQUFrQixHQUFHLElBQUl5Qix1QkFBdUIsRUFBRTtjQUN2RCxJQUFJLENBQUMsQ0FBQXpCLGlCQUFrQixDQUFDMEIsSUFBSSxHQUFHLE9BQU87Y0FDdEMsSUFBSSxDQUFDLENBQUExQixpQkFBa0IsQ0FBQzJCLFVBQVUsR0FBRyxJQUFJO2NBQ3pDLElBQUksQ0FBQyxDQUFBM0IsaUJBQWtCLENBQUM0QixjQUFjLEdBQUcsSUFBSTtjQUM3QztjQUNBLElBQUksQ0FBQyxDQUFBMUIsYUFBYyxHQUFHLElBQUl2QixLQUFBLENBQUFrRCxjQUFjLEVBQVU7Y0FDbEQsSUFBSSxDQUFDLENBQUE3QixpQkFBa0IsQ0FBQzhCLFFBQVEsR0FBR0MsS0FBSyxJQUFHO2dCQUMxQyxJQUFJQyxpQkFBaUIsR0FBRyxFQUFFO2dCQUMxQixJQUFJQyxlQUFlLEdBQUcsRUFBRTtnQkFDeEIsS0FBSyxJQUFJQyxDQUFDLEdBQUdILEtBQUssQ0FBQ0ksV0FBVyxFQUFFRCxDQUFDLEdBQUdILEtBQUssQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLEVBQUUsRUFBRUgsQ0FBQyxFQUFFO2tCQUM5RCxJQUFJSCxLQUFLLENBQUNLLE9BQU8sQ0FBQ0YsQ0FBQyxDQUFDLENBQUNJLE9BQU8sRUFBRTtvQkFDN0JMLGVBQWUsSUFBSUYsS0FBSyxDQUFDSyxPQUFPLENBQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxVQUFVO29CQUNqRCxJQUFJLENBQUMsQ0FBQXRDLGFBQWMsR0FBR2dDLGVBQWU7b0JBQ3JDLElBQUksQ0FBQyxDQUFBL0IsYUFBYyxDQUFDc0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBdkMsYUFBYyxDQUFDO21CQUNoRCxNQUFNO29CQUNOK0IsaUJBQWlCLElBQUlELEtBQUssQ0FBQ0ssT0FBTyxDQUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ssVUFBVTs7O2NBR3RELENBQUM7Y0FDRCxJQUFJLENBQUMsQ0FBQXZDLGlCQUFrQixDQUFDeUMsT0FBTyxHQUFHVixLQUFLLElBQUlsQixPQUFPLENBQUNqQixLQUFLLENBQUMsd0JBQXdCLENBQUM7Y0FFbEYsSUFBSSxDQUFDLENBQUFJLGlCQUFrQixDQUFDMEMsS0FBSyxFQUFFO1lBQ2hDO1lBRUEsQ0FBQUMsZUFBZ0IsR0FBR1osS0FBSyxJQUFHO2NBQzFCLElBQUlBLEtBQUssQ0FBQ2EsSUFBSSxDQUFDQyxJQUFJLEtBQUssQ0FBQyxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBcEQsTUFBTyxDQUFDcUQsSUFBSSxDQUFDZixLQUFLLENBQUNhLElBQUksQ0FBQztjQUU3QixJQUFJLENBQUNyQixPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzlCLENBQUM7WUFFRCxDQUFBd0IsY0FBZSxHQUFHQyxDQUFDOUQsTUFBTSxFQUFFK0QsS0FBSyxLQUFJO2NBQ25DLElBQUksQ0FBQyxDQUFBekQsYUFBYyxHQUFHLElBQUkwRCxhQUFhLENBQUNoRSxNQUFNLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQjtjQUNBLElBQUksQ0FBQyxDQUFBSSxZQUFhLEdBQUcsS0FBSzZELFVBQVUsQ0FBQ0MsWUFBWSxJQUFJRCxVQUFVLENBQUNFLGtCQUFrQixFQUFDLENBQUU7Y0FDckY7Y0FDQSxJQUFJLENBQUMsQ0FBQXRELFFBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQVQsWUFBYSxDQUFDZ0UsY0FBYyxFQUFFO2NBQ3BEO2NBQ0EsSUFBSSxDQUFDLENBQUFyRSxNQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFLLFlBQWEsQ0FBQ2lFLHVCQUF1QixDQUFDckUsTUFBTSxDQUFDO2NBRWpFLElBQUkrRCxLQUFLLENBQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFkLE1BQU8sQ0FBQ3VFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXpELFFBQVMsQ0FBQztjQUN4RDtjQUVBLElBQUlrRCxLQUFLLENBQUNqRCxpQkFBaUIsSUFBSSx5QkFBeUIsSUFBSW1ELFVBQVUsRUFBRTtnQkFDdkUsSUFBSSxDQUFDM0Isb0JBQW9CLEVBQUU7O2NBRzVCLElBQUksQ0FBQyxDQUFBaEMsYUFBYyxDQUFDaUUsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBZCxlQUFnQixDQUFDO1lBQzdFLENBQUM7WUFDRCxNQUFNZSxVQUFVQSxDQUFDVCxLQUFLLEdBQUcsRUFBRTtjQUMxQixJQUFJLElBQUksQ0FBQyxDQUFBN0QsV0FBWSxFQUFFLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQUEsV0FBWTtjQUNyRCxJQUFJLENBQUMsQ0FBQUEsV0FBWSxHQUFHLElBQUlULEtBQUEsQ0FBQWtELGNBQWMsRUFBUTtjQUU5Q3NCLFVBQVUsRUFBRTFDLFNBQVMsQ0FBQ0MsWUFBWSxDQUNoQ0MsWUFBWSxDQUFDO2dCQUFDYixLQUFLLEVBQUU7Y0FBSSxDQUFDLENBQUMsQ0FDM0I2RCxJQUFJLENBQUN6RSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUE2RCxjQUFlLENBQUM3RCxNQUFNLEVBQUUrRCxLQUFLLENBQUMsQ0FBQyxDQUNuRFcsS0FBSyxDQUFDaEUsS0FBSyxJQUFHO2dCQUNkLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUssQ0FBQ2lFLE9BQU87Z0JBQzNCLElBQUksQ0FBQyxDQUFBekUsV0FBWSxDQUFDMEUsTUFBTSxFQUFFO2NBQzNCLENBQUMsQ0FBQyxDQUNEQyxPQUFPLENBQUMsTUFBSztnQkFDYixJQUFJLENBQUMsQ0FBQS9FLFdBQVksR0FBRyxJQUFJO2dCQUN4QixJQUFJLENBQUMsQ0FBQUksV0FBWSxDQUFDb0QsT0FBTyxFQUFFO2NBQzVCLENBQUMsQ0FBQztjQUVILE9BQU8sSUFBSSxDQUFDLENBQUFwRCxXQUFZO1lBQ3pCO1lBQ0E0RSxNQUFNQSxDQUFDZixLQUFBLEdBQXdCO2NBQUNsRCxRQUFRLEVBQUU7WUFBSSxDQUFDO2NBQzlDLElBQUk7Z0JBQ0gsSUFBSSxJQUFJLENBQUMsQ0FBQVIsZ0JBQWlCLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCO2dCQUN6RCxJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCLEdBQUcsSUFBSVosS0FBQSxDQUFBa0QsY0FBYyxFQUFRO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxDQUFBbEMsU0FBVSxFQUFFO2tCQUNwQixNQUFNLElBQUlzRSxLQUFLLENBQUMseURBQXlELENBQUM7O2dCQUUzRSxJQUFJLENBQUMsQ0FBQXZFLE1BQU8sR0FBRyxTQUFTO2dCQUN4QixJQUFJLENBQUMsQ0FBQUMsU0FBVSxHQUFHLElBQUk7Z0JBQ3RCLElBQUksQ0FBQzRCLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBRXRCNEIsVUFBVSxFQUFFMUMsU0FBUyxDQUFDQyxZQUFZLENBQ2hDQyxZQUFZLENBQUM7a0JBQUNiLEtBQUssRUFBRTtnQkFBSSxDQUFDLENBQUMsQ0FDM0I2RCxJQUFJLENBQUMsTUFBTXpFLE1BQU0sSUFBRztrQkFDcEIsSUFBSSxDQUFDLENBQUE2RCxjQUFlLENBQUM3RCxNQUFNLEVBQUUrRCxLQUFLLENBQUM7a0JBQ25DLElBQUksQ0FBQyxDQUFBMUQsZ0JBQWlCLENBQUNpRCxPQUFPLEVBQUU7a0JBQ2hDLElBQUksQ0FBQyxDQUFBeEQsV0FBWSxHQUFHLElBQUk7a0JBQ3hCLElBQUksQ0FBQyxDQUFBUSxhQUFjLEVBQUVrRCxLQUFLLEVBQUU7Z0JBQzdCLENBQUMsQ0FBQyxDQUNEa0IsS0FBSyxDQUFDaEUsS0FBSyxJQUFHO2tCQUNkaUIsT0FBTyxDQUFDakIsS0FBSyxDQUFDQSxLQUFLLENBQUM7a0JBQ3BCLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdBLEtBQUssQ0FBQ2lFLE9BQU87a0JBQzNCLElBQUksQ0FBQyxDQUFBdEUsZ0JBQWlCLENBQUN1RSxNQUFNLEVBQUU7Z0JBQ2hDLENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUksQ0FBQyxDQUFBdkUsZ0JBQWlCO2VBQzdCLENBQUMsT0FBT3FCLENBQUMsRUFBRSxDLENBQ1gsU0FBUyxDO1lBRVg7WUFDQXNELFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ2pCO2NBQ0EsSUFBSSxDQUFDLENBQUFoRixNQUFPLENBQ1ZpRixTQUFTLEVBQUUsQ0FBQztjQUFBLENBQ1pDLE9BQU8sQ0FBRUMsS0FBSyxJQUFrQ0EsS0FBSyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUVEQSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBOUUsYUFBYyxFQUFFO2dCQUN6QnFCLE9BQU8sQ0FBQzBELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDakQ7O2NBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQWxGLFdBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO2NBQy9DLElBQUksQ0FBQyxDQUFBQSxXQUFZLEdBQUcsSUFBSVYsS0FBQSxDQUFBa0QsY0FBYyxFQUFPO2NBRTdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQWxDLFNBQVUsRUFBRSxNQUFNLElBQUlzRSxLQUFLLENBQUMscUNBQXFDLENBQUM7Y0FDNUUsSUFBSSxDQUFDLENBQUF2RSxNQUFPLEdBQUcsU0FBUztjQUN4QixNQUFNNEUsSUFBSSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ2pCLElBQUksQ0FBQyxDQUFBN0UsTUFBTyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxDQUFBRSxTQUFVLEdBQUcsS0FBSztnQkFFdkIsSUFBSSxDQUFDLENBQUFILGFBQWMsQ0FBQ2lFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFXO2tCQUN2RCxNQUFNM0QsS0FBSyxHQUFHLElBQUkwRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEvRSxNQUFPLEVBQUU7b0JBQUNnRixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUFqRixhQUFjLENBQUNrRjtrQkFBUSxDQUFDLENBQUM7a0JBRTFFO2tCQUNBLElBQUksQ0FBQyxDQUFBNUUsS0FBTSxHQUFHQSxLQUFLO2tCQUVuQixNQUFNNkUsUUFBUSxHQUFHQSxDQUFBLEtBQUs7b0JBQ3JCLElBQUksQ0FBQyxDQUFBdEYsV0FBWSxDQUFDbUQsT0FBTyxDQUFDMUMsS0FBSyxDQUFDO29CQUNoQyxJQUFJLENBQUMsQ0FBQVQsV0FBWSxHQUFHdUYsU0FBUztrQkFDOUIsQ0FBQztrQkFDRCxJQUFJLElBQUksQ0FBQyxDQUFBMUUsYUFBYyxFQUFFO29CQUN4QixJQUFJLENBQUMsQ0FBQUEsYUFBYyxDQUFDeUQsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDO21CQUNsQyxNQUFNO29CQUNOLElBQUksSUFBSSxDQUFDLENBQUF0RixXQUFZLEVBQUU7c0JBQ3RCc0YsUUFBUSxFQUFFOzs7a0JBSVosSUFBSSxJQUFJLENBQUMsQ0FBQXBGLGdCQUFpQixFQUFFO29CQUMzQixJQUFJLENBQUMsQ0FBQUEsZ0JBQWlCLENBQUNpRCxPQUFPLENBQUMxQyxLQUFLLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxDQUFBUCxnQkFBaUIsR0FBR3FGLFNBQVM7O2tCQUVuQyxJQUFJLENBQUNWLFVBQVUsRUFBRTtrQkFDakIsSUFBSSxDQUFDLENBQUExRSxhQUFjLEdBQUdvRixTQUFTO2tCQUMvQixJQUFJLENBQUMsQ0FBQTFGLE1BQU8sR0FBRzBGLFNBQVM7a0JBQ3hCLElBQUksQ0FBQyxDQUFBeEYsV0FBWSxHQUFHd0YsU0FBUztnQkFDOUIsQ0FBQyxDQUFDO2dCQUVGLElBQUksQ0FBQyxDQUFBcEYsYUFBYyxFQUFFOEUsSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsQ0FBQXRFLGlCQUFrQixFQUFFc0UsSUFBSSxFQUFFO2dCQUUvQixJQUFJLENBQUMvQyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3ZCLENBQUM7Y0FFRCxJQUFJLENBQUMsQ0FBQXZDLFdBQVksR0FBR3NGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQ04sTUFBTSxFQUFFLENBQUNMLElBQUksQ0FBQ1csSUFBSSxDQUFDO2NBQ3JELE9BQU8sSUFBSSxDQUFDLENBQUFqRixXQUFZO1lBQ3pCOztVQUNBd0YsT0FBQSxDQUFBL0YsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7OztVQzdQRDs7VUFFQWdHLE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FHLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==