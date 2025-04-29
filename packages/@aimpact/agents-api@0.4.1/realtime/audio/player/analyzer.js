System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, AudioAnalyzer, __beyond_pkg, hmr;
  _export("AudioAnalyzer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/player/analyzer"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./constants
      ***************************/
      ims.set('./constants', {
        hash: 2912939915,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.voiceFrequencyLabels = exports.voiceFrequencies = exports.noteFrequencyLabels = exports.noteFrequencies = void 0;
          /**
           * Constants for help with visualization
           * Helps map frequency ranges from Fast Fourier Transform
           * to human-interpretable ranges, notably music ranges and
           * human vocal ranges.
           */
          // Eighth octave frequencies
          const octave8Frequencies = [4186.01, 4434.92, 4698.63, 4978.03, 5274.04, 5587.65, 5919.91, 6271.93, 6644.88, 7040.0, 7458.62, 7902.13];
          // Labels for each of the above frequencies
          const octave8FrequencyLabels = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
          /**
           * All note frequencies from 1st to 8th octave
           * in format "A#8" (A#, 8th octave)
           */
          const noteFrequencies = exports.noteFrequencies = [];
          const noteFrequencyLabels = exports.noteFrequencyLabels = [];
          for (let i = 1; i <= 8; i++) {
            for (let f = 0; f < octave8Frequencies.length; f++) {
              const freq = octave8Frequencies[f];
              noteFrequencies.push(freq / Math.pow(2, 8 - i));
              noteFrequencyLabels.push(octave8FrequencyLabels[f] + i);
            }
          }
          /**
           * Subset of the note frequencies between 32 and 2000 Hz
           * 6 octave range: C1 to B6
           */
          const voiceFrequencyRange = [32.0, 2000.0];
          const voiceFrequencies = exports.voiceFrequencies = noteFrequencies.filter(freq => freq > voiceFrequencyRange[0] && freq < voiceFrequencyRange[1]);
          const voiceFrequencyLabels = exports.voiceFrequencyLabels = noteFrequencyLabels.filter((_, i) => noteFrequencies[i] > voiceFrequencyRange[0] && noteFrequencies[i] < voiceFrequencyRange[1]);
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3643216025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioAnalyzer = void 0;
          var _constants = require("./constants");
          /*bundle*/ /**
                      * Analyzes audio for visual output
                      */
          class AudioAnalyzer {
            fftResults;
            audio;
            context;
            analyser;
            sampleRate;
            audioBuffer;
            constructor(audioElement, audioBuffer = null) {
              this.fftResults = [];
              this.audio = audioElement;
              this.audioBuffer = audioBuffer;
              if (audioBuffer) {
                const {
                  length,
                  sampleRate
                } = audioBuffer;
                const offlineAudioContext = new OfflineAudioContext({
                  length,
                  sampleRate
                });
                const source = offlineAudioContext.createBufferSource();
                source.buffer = audioBuffer;
                const analyser = offlineAudioContext.createAnalyser();
                analyser.fftSize = 8192;
                analyser.smoothingTimeConstant = 0.1;
                source.connect(analyser);
                const renderQuantumInSeconds = 1 / 60;
                const durationInSeconds = length / sampleRate;
                const analyze = index => {
                  const suspendTime = renderQuantumInSeconds * index;
                  if (suspendTime < durationInSeconds) {
                    offlineAudioContext.suspend(suspendTime).then(() => {
                      const fftResult = new Float32Array(analyser.frequencyBinCount);
                      analyser.getFloatFrequencyData(fftResult);
                      this.fftResults.push(fftResult);
                      analyze(index + 1);
                    });
                  }
                  if (index === 1) {
                    offlineAudioContext.startRendering();
                  } else {
                    offlineAudioContext.resume();
                  }
                };
                source.start(0);
                analyze(1);
                this.context = offlineAudioContext;
                this.analyser = analyser;
                this.sampleRate = sampleRate;
              } else {
                const audioContext = new AudioContext();
                const track = audioContext.createMediaElementSource(audioElement);
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 8192;
                analyser.smoothingTimeConstant = 0.1;
                track.connect(analyser);
                analyser.connect(audioContext.destination);
                this.context = audioContext;
                this.analyser = analyser;
                this.sampleRate = this.context.sampleRate;
              }
            }
            /**
             * Retrieves frequency domain data from an AnalyserNode adjusted to a decibel range
             * returns human-readable formatting and labels
             */
            static getFrequencies(analyser, sampleRate, fftResult = null, analysisType = 'frequency', minDecibels = -100, maxDecibels = -30) {
              if (!fftResult) {
                fftResult = new Float32Array(analyser.frequencyBinCount);
                analyser.getFloatFrequencyData(fftResult);
              }
              const nyquistFrequency = sampleRate / 2;
              const frequencyStep = 1 / fftResult.length * nyquistFrequency;
              let outputValues;
              let frequencies;
              let labels;
              if (analysisType === 'music' || analysisType === 'voice') {
                const useFrequencies = analysisType === 'voice' ? _constants.voiceFrequencies : _constants.noteFrequencies;
                const aggregateOutput = Array(useFrequencies.length).fill(minDecibels);
                for (let i = 0; i < fftResult.length; i++) {
                  const frequency = i * frequencyStep;
                  const amplitude = fftResult[i];
                  for (let n = useFrequencies.length - 1; n >= 0; n--) {
                    if (frequency > useFrequencies[n]) {
                      aggregateOutput[n] = Math.max(aggregateOutput[n], amplitude);
                      break;
                    }
                  }
                }
                outputValues = aggregateOutput;
                frequencies = useFrequencies;
                labels = analysisType === 'voice' ? _constants.voiceFrequencyLabels : _constants.noteFrequencyLabels;
              } else {
                outputValues = Array.from(fftResult);
                frequencies = outputValues.map((_, i) => frequencyStep * i);
                labels = frequencies.map(f => `${f.toFixed(2)} Hz`);
              }
              const normalizedOutput = outputValues.map(v => {
                return Math.max(0, Math.min((v - minDecibels) / (maxDecibels - minDecibels), 1));
              });
              const values = new Float32Array(normalizedOutput);
              return {
                values,
                frequencies,
                labels
              };
            }
            /**
             * Gets the current frequency domain data from the playing audio track
             */
            getFrequencies(analysisType = 'frequency', minDecibels = -100, maxDecibels = -30) {
              let fftResult = null;
              if (this.audioBuffer && this.fftResults.length) {
                const pct = this.audio.currentTime / this.audio.duration;
                const index = Math.min(pct * this.fftResults.length | 0, this.fftResults.length - 1);
                fftResult = this.fftResults[index];
              }
              return AudioAnalyzer.getFrequencies(this.analyser, this.sampleRate, fftResult, analysisType, minDecibels, maxDecibels);
            }
            /**
             * Resume the internal AudioContext if it was suspended due to the lack of
             * user interaction when the AudioAnalyzer was instantiated.
             */
            async resumeIfSuspended() {
              if (this.context.state === 'suspended') {
                await this.context.resume();
              }
              return true;
            }
          }
          exports.AudioAnalyzer = AudioAnalyzer;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioAnalyzer",
        "name": "AudioAnalyzer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioAnalyzer') && _export("AudioAnalyzer", AudioAnalyzer = require ? require('./index').AudioAnalyzer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvY3RhdmU4RnJlcXVlbmNpZXMiLCJvY3RhdmU4RnJlcXVlbmN5TGFiZWxzIiwibm90ZUZyZXF1ZW5jaWVzIiwiZXhwb3J0cyIsIm5vdGVGcmVxdWVuY3lMYWJlbHMiLCJpIiwiZiIsImxlbmd0aCIsImZyZXEiLCJwdXNoIiwiTWF0aCIsInBvdyIsInZvaWNlRnJlcXVlbmN5UmFuZ2UiLCJ2b2ljZUZyZXF1ZW5jaWVzIiwiZmlsdGVyIiwidm9pY2VGcmVxdWVuY3lMYWJlbHMiLCJfIiwiX2NvbnN0YW50cyIsInJlcXVpcmUiLCJBdWRpb0FuYWx5emVyIiwiZmZ0UmVzdWx0cyIsImF1ZGlvIiwiY29udGV4dCIsImFuYWx5c2VyIiwic2FtcGxlUmF0ZSIsImF1ZGlvQnVmZmVyIiwiY29uc3RydWN0b3IiLCJhdWRpb0VsZW1lbnQiLCJvZmZsaW5lQXVkaW9Db250ZXh0IiwiT2ZmbGluZUF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImJ1ZmZlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsInNtb290aGluZ1RpbWVDb25zdGFudCIsImNvbm5lY3QiLCJyZW5kZXJRdWFudHVtSW5TZWNvbmRzIiwiZHVyYXRpb25JblNlY29uZHMiLCJhbmFseXplIiwiaW5kZXgiLCJzdXNwZW5kVGltZSIsInN1c3BlbmQiLCJ0aGVuIiwiZmZ0UmVzdWx0IiwiRmxvYXQzMkFycmF5IiwiZnJlcXVlbmN5QmluQ291bnQiLCJnZXRGbG9hdEZyZXF1ZW5jeURhdGEiLCJzdGFydFJlbmRlcmluZyIsInJlc3VtZSIsInN0YXJ0IiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwidHJhY2siLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJkZXN0aW5hdGlvbiIsImdldEZyZXF1ZW5jaWVzIiwiYW5hbHlzaXNUeXBlIiwibWluRGVjaWJlbHMiLCJtYXhEZWNpYmVscyIsIm55cXVpc3RGcmVxdWVuY3kiLCJmcmVxdWVuY3lTdGVwIiwib3V0cHV0VmFsdWVzIiwiZnJlcXVlbmNpZXMiLCJsYWJlbHMiLCJ1c2VGcmVxdWVuY2llcyIsImFnZ3JlZ2F0ZU91dHB1dCIsIkFycmF5IiwiZmlsbCIsImZyZXF1ZW5jeSIsImFtcGxpdHVkZSIsIm4iLCJtYXgiLCJmcm9tIiwibWFwIiwidG9GaXhlZCIsIm5vcm1hbGl6ZWRPdXRwdXQiLCJ2IiwibWluIiwidmFsdWVzIiwicGN0IiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInJlc3VtZUlmU3VzcGVuZGVkIiwic3RhdGUiXSwic291cmNlcyI6WyIvY29uc3RhbnRzLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7Ozs7OztVQU9BO1VBQ0EsTUFBTUEsa0JBQWtCLEdBQWEsQ0FDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQ3pHO1VBRUQ7VUFDQSxNQUFNQyxzQkFBc0IsR0FBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO1VBRTFHOzs7O1VBSU8sTUFBTUMsZUFBZSxHQUFBQyxPQUFBLENBQUFELGVBQUEsR0FBYSxFQUFFO1VBQ3BDLE1BQU1FLG1CQUFtQixHQUFBRCxPQUFBLENBQUFDLG1CQUFBLEdBQWEsRUFBRTtVQUMvQyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO1lBQzVCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTixrQkFBa0IsQ0FBQ08sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtjQUNuRCxNQUFNRSxJQUFJLEdBQUdSLGtCQUFrQixDQUFDTSxDQUFDLENBQUM7Y0FDbENKLGVBQWUsQ0FBQ08sSUFBSSxDQUFDRCxJQUFJLEdBQUdFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUdOLENBQUMsQ0FBQyxDQUFDO2NBQy9DRCxtQkFBbUIsQ0FBQ0ssSUFBSSxDQUFDUixzQkFBc0IsQ0FBQ0ssQ0FBQyxDQUFDLEdBQUdELENBQUMsQ0FBQzs7O1VBSXpEOzs7O1VBSUEsTUFBTU8sbUJBQW1CLEdBQXFCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztVQUNyRCxNQUFNQyxnQkFBZ0IsR0FBQVYsT0FBQSxDQUFBVSxnQkFBQSxHQUFhWCxlQUFlLENBQUNZLE1BQU0sQ0FDL0ROLElBQUksSUFBSUEsSUFBSSxHQUFHSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSUosSUFBSSxHQUFHSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FDdEU7VUFDTSxNQUFNRyxvQkFBb0IsR0FBQVosT0FBQSxDQUFBWSxvQkFBQSxHQUFhWCxtQkFBbUIsQ0FBQ1UsTUFBTSxDQUN2RSxDQUFDRSxDQUFDLEVBQUVYLENBQUMsS0FBS0gsZUFBZSxDQUFDRyxDQUFDLENBQUMsR0FBR08sbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUlWLGVBQWUsQ0FBQ0csQ0FBQyxDQUFDLEdBQUdPLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUNwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0QsSUFBQUssVUFBQSxHQUFBQyxPQUFBO1VBZ0JPLFdBSFA7OztVQUdpQixNQUFPQyxhQUFhO1lBQzVCQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFVBQVU7WUFDVkMsV0FBVztZQUVuQkMsWUFBWUMsWUFBOEIsRUFBRUYsV0FBQSxHQUFrQyxJQUFJO2NBQ2pGLElBQUksQ0FBQ0wsVUFBVSxHQUFHLEVBQUU7Y0FDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdNLFlBQVk7Y0FDekIsSUFBSSxDQUFDRixXQUFXLEdBQUdBLFdBQVc7Y0FFOUIsSUFBSUEsV0FBVyxFQUFFO2dCQUNoQixNQUFNO2tCQUFFbEIsTUFBTTtrQkFBRWlCO2dCQUFVLENBQUUsR0FBR0MsV0FBVztnQkFDMUMsTUFBTUcsbUJBQW1CLEdBQUcsSUFBSUMsbUJBQW1CLENBQUM7a0JBQUV0QixNQUFNO2tCQUFFaUI7Z0JBQVUsQ0FBRSxDQUFDO2dCQUMzRSxNQUFNTSxNQUFNLEdBQUdGLG1CQUFtQixDQUFDRyxrQkFBa0IsRUFBRTtnQkFDdkRELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHUCxXQUFXO2dCQUMzQixNQUFNRixRQUFRLEdBQUdLLG1CQUFtQixDQUFDSyxjQUFjLEVBQUU7Z0JBQ3JEVixRQUFRLENBQUNXLE9BQU8sR0FBRyxJQUFJO2dCQUN2QlgsUUFBUSxDQUFDWSxxQkFBcUIsR0FBRyxHQUFHO2dCQUNwQ0wsTUFBTSxDQUFDTSxPQUFPLENBQUNiLFFBQVEsQ0FBQztnQkFDeEIsTUFBTWMsc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JDLE1BQU1DLGlCQUFpQixHQUFHL0IsTUFBTSxHQUFHaUIsVUFBVTtnQkFFN0MsTUFBTWUsT0FBTyxHQUFJQyxLQUFhLElBQUk7a0JBQ2pDLE1BQU1DLFdBQVcsR0FBR0osc0JBQXNCLEdBQUdHLEtBQUs7a0JBQ2xELElBQUlDLFdBQVcsR0FBR0gsaUJBQWlCLEVBQUU7b0JBQ3BDVixtQkFBbUIsQ0FBQ2MsT0FBTyxDQUFDRCxXQUFXLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLE1BQUs7c0JBQ2xELE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxZQUFZLENBQUN0QixRQUFRLENBQUN1QixpQkFBaUIsQ0FBQztzQkFDOUR2QixRQUFRLENBQUN3QixxQkFBcUIsQ0FBQ0gsU0FBUyxDQUFDO3NCQUN6QyxJQUFJLENBQUN4QixVQUFVLENBQUNYLElBQUksQ0FBQ21DLFNBQVMsQ0FBQztzQkFDL0JMLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDOztrQkFFSCxJQUFJQSxLQUFLLEtBQUssQ0FBQyxFQUFFO29CQUNoQlosbUJBQW1CLENBQUNvQixjQUFjLEVBQUU7bUJBQ3BDLE1BQU07b0JBQ05wQixtQkFBbUIsQ0FBQ3FCLE1BQU0sRUFBRTs7Z0JBRTlCLENBQUM7Z0JBRURuQixNQUFNLENBQUNvQixLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNmWCxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQ2pCLE9BQU8sR0FBR00sbUJBQW1CO2dCQUNsQyxJQUFJLENBQUNMLFFBQVEsR0FBR0EsUUFBUTtnQkFDeEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7ZUFDNUIsTUFBTTtnQkFDTixNQUFNMkIsWUFBWSxHQUFHLElBQUlDLFlBQVksRUFBRTtnQkFDdkMsTUFBTUMsS0FBSyxHQUFHRixZQUFZLENBQUNHLHdCQUF3QixDQUFDM0IsWUFBWSxDQUFDO2dCQUNqRSxNQUFNSixRQUFRLEdBQUc0QixZQUFZLENBQUNsQixjQUFjLEVBQUU7Z0JBQzlDVixRQUFRLENBQUNXLE9BQU8sR0FBRyxJQUFJO2dCQUN2QlgsUUFBUSxDQUFDWSxxQkFBcUIsR0FBRyxHQUFHO2dCQUNwQ2tCLEtBQUssQ0FBQ2pCLE9BQU8sQ0FBQ2IsUUFBUSxDQUFDO2dCQUN2QkEsUUFBUSxDQUFDYSxPQUFPLENBQUNlLFlBQVksQ0FBQ0ksV0FBVyxDQUFDO2dCQUMxQyxJQUFJLENBQUNqQyxPQUFPLEdBQUc2QixZQUFZO2dCQUMzQixJQUFJLENBQUM1QixRQUFRLEdBQUdBLFFBQVE7Z0JBQ3hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0YsT0FBTyxDQUFDRSxVQUFVOztZQUUzQztZQUVBOzs7O1lBSUEsT0FBT2dDLGNBQWNBLENBQ3BCakMsUUFBc0IsRUFDdEJDLFVBQWtCLEVBQ2xCb0IsU0FBQSxHQUFpQyxJQUFJLEVBQ3JDYSxZQUFBLEdBQTZCLFdBQVcsRUFDeENDLFdBQUEsR0FBc0IsQ0FBQyxHQUFHLEVBQzFCQyxXQUFBLEdBQXNCLENBQUMsRUFBRTtjQUV6QixJQUFJLENBQUNmLFNBQVMsRUFBRTtnQkFDZkEsU0FBUyxHQUFHLElBQUlDLFlBQVksQ0FBQ3RCLFFBQVEsQ0FBQ3VCLGlCQUFpQixDQUFDO2dCQUN4RHZCLFFBQVEsQ0FBQ3dCLHFCQUFxQixDQUFDSCxTQUFTLENBQUM7O2NBRTFDLE1BQU1nQixnQkFBZ0IsR0FBR3BDLFVBQVUsR0FBRyxDQUFDO2NBQ3ZDLE1BQU1xQyxhQUFhLEdBQUksQ0FBQyxHQUFHakIsU0FBUyxDQUFDckMsTUFBTSxHQUFJcUQsZ0JBQWdCO2NBQy9ELElBQUlFLFlBQXNCO2NBQzFCLElBQUlDLFdBQXFCO2NBQ3pCLElBQUlDLE1BQWdCO2NBRXBCLElBQUlQLFlBQVksS0FBSyxPQUFPLElBQUlBLFlBQVksS0FBSyxPQUFPLEVBQUU7Z0JBQ3pELE1BQU1RLGNBQWMsR0FBR1IsWUFBWSxLQUFLLE9BQU8sR0FBR3hDLFVBQUEsQ0FBQUosZ0JBQWdCLEdBQUdJLFVBQUEsQ0FBQWYsZUFBZTtnQkFDcEYsTUFBTWdFLGVBQWUsR0FBR0MsS0FBSyxDQUFDRixjQUFjLENBQUMxRCxNQUFNLENBQUMsQ0FBQzZELElBQUksQ0FBQ1YsV0FBVyxDQUFDO2dCQUN0RSxLQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd1QyxTQUFTLENBQUNyQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO2tCQUMxQyxNQUFNZ0UsU0FBUyxHQUFHaEUsQ0FBQyxHQUFHd0QsYUFBYTtrQkFDbkMsTUFBTVMsU0FBUyxHQUFHMUIsU0FBUyxDQUFDdkMsQ0FBQyxDQUFDO2tCQUM5QixLQUFLLElBQUlrRSxDQUFDLEdBQUdOLGNBQWMsQ0FBQzFELE1BQU0sR0FBRyxDQUFDLEVBQUVnRSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtvQkFDcEQsSUFBSUYsU0FBUyxHQUFHSixjQUFjLENBQUNNLENBQUMsQ0FBQyxFQUFFO3NCQUNsQ0wsZUFBZSxDQUFDSyxDQUFDLENBQUMsR0FBRzdELElBQUksQ0FBQzhELEdBQUcsQ0FBQ04sZUFBZSxDQUFDSyxDQUFDLENBQUMsRUFBRUQsU0FBUyxDQUFDO3NCQUM1RDs7OztnQkFJSFIsWUFBWSxHQUFHSSxlQUFlO2dCQUM5QkgsV0FBVyxHQUFHRSxjQUFjO2dCQUM1QkQsTUFBTSxHQUFHUCxZQUFZLEtBQUssT0FBTyxHQUFHeEMsVUFBQSxDQUFBRixvQkFBb0IsR0FBR0UsVUFBQSxDQUFBYixtQkFBbUI7ZUFDOUUsTUFBTTtnQkFDTjBELFlBQVksR0FBR0ssS0FBSyxDQUFDTSxJQUFJLENBQUM3QixTQUFTLENBQUM7Z0JBQ3BDbUIsV0FBVyxHQUFHRCxZQUFZLENBQUNZLEdBQUcsQ0FBQyxDQUFDMUQsQ0FBQyxFQUFFWCxDQUFDLEtBQUt3RCxhQUFhLEdBQUd4RCxDQUFDLENBQUM7Z0JBQzNEMkQsTUFBTSxHQUFHRCxXQUFXLENBQUNXLEdBQUcsQ0FBQ3BFLENBQUMsSUFBSSxHQUFHQSxDQUFDLENBQUNxRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7Y0FHcEQsTUFBTUMsZ0JBQWdCLEdBQUdkLFlBQVksQ0FBQ1ksR0FBRyxDQUFDRyxDQUFDLElBQUc7Z0JBQzdDLE9BQU9uRSxJQUFJLENBQUM4RCxHQUFHLENBQUMsQ0FBQyxFQUFFOUQsSUFBSSxDQUFDb0UsR0FBRyxDQUFDLENBQUNELENBQUMsR0FBR25CLFdBQVcsS0FBS0MsV0FBVyxHQUFHRCxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUNqRixDQUFDLENBQUM7Y0FDRixNQUFNcUIsTUFBTSxHQUFHLElBQUlsQyxZQUFZLENBQUMrQixnQkFBZ0IsQ0FBQztjQUNqRCxPQUFPO2dCQUFFRyxNQUFNO2dCQUFFaEIsV0FBVztnQkFBRUM7Y0FBTSxDQUFFO1lBQ3ZDO1lBRUE7OztZQUdBUixjQUFjQSxDQUNiQyxZQUFBLEdBQTZCLFdBQVcsRUFDeENDLFdBQUEsR0FBc0IsQ0FBQyxHQUFHLEVBQzFCQyxXQUFBLEdBQXNCLENBQUMsRUFBRTtjQUV6QixJQUFJZixTQUFTLEdBQXdCLElBQUk7Y0FDekMsSUFBSSxJQUFJLENBQUNuQixXQUFXLElBQUksSUFBSSxDQUFDTCxVQUFVLENBQUNiLE1BQU0sRUFBRTtnQkFDL0MsTUFBTXlFLEdBQUcsR0FBRyxJQUFJLENBQUMzRCxLQUFLLENBQUM0RCxXQUFXLEdBQUcsSUFBSSxDQUFDNUQsS0FBSyxDQUFDNkQsUUFBUTtnQkFDeEQsTUFBTTFDLEtBQUssR0FBRzlCLElBQUksQ0FBQ29FLEdBQUcsQ0FBRUUsR0FBRyxHQUFHLElBQUksQ0FBQzVELFVBQVUsQ0FBQ2IsTUFBTSxHQUFJLENBQUMsRUFBRSxJQUFJLENBQUNhLFVBQVUsQ0FBQ2IsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEZxQyxTQUFTLEdBQUcsSUFBSSxDQUFDeEIsVUFBVSxDQUFDb0IsS0FBSyxDQUFDOztjQUVuQyxPQUFPckIsYUFBYSxDQUFDcUMsY0FBYyxDQUNsQyxJQUFJLENBQUNqQyxRQUFRLEVBQ2IsSUFBSSxDQUFDQyxVQUFVLEVBQ2ZvQixTQUFTLEVBQ1RhLFlBQVksRUFDWkMsV0FBVyxFQUNYQyxXQUFXLENBQ1g7WUFDRjtZQUVBOzs7O1lBSUEsTUFBTXdCLGlCQUFpQkEsQ0FBQTtjQUN0QixJQUFJLElBQUksQ0FBQzdELE9BQU8sQ0FBQzhELEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZDLE1BQU0sSUFBSSxDQUFDOUQsT0FBTyxDQUFDMkIsTUFBTSxFQUFFOztjQUU1QixPQUFPLElBQUk7WUFDWjs7VUFDQTlDLE9BQUEsQ0FBQWdCLGFBQUEsR0FBQUEsYUFBQSIsImlnbm9yZUxpc3QiOltdfQ==