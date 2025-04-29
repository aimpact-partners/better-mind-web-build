System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["socket.io-client", "4.8.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/audio-player"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@1.0.0/audio-player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 711415198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useComponentAudioContext = exports.ComponentAudioContext = void 0;
          var _react = require("react");
          const ComponentAudioContext = exports.ComponentAudioContext = (0, _react.createContext)({});
          const useComponentAudioContext = () => (0, _react.useContext)(ComponentAudioContext);
          exports.useComponentAudioContext = useComponentAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 473490887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAudio = useAudio;
          var _react = require("react");
          function useAudio(src, convert) {
            const audioRef = _react.default.useRef(null);
            const [audio, setAudio] = _react.default.useState(null);
            const [buffer, setBuffer] = _react.default.useState();
            const [ready, setReady] = _react.default.useState();
            const [data, setData] = _react.default.useState({
              src
            });
            const [error, setError] = _react.default.useState(false);
            const ref = audioRef.current;
            const getAudioContext = element => {
              return new Promise((resolve, reject) => {
                const audioContext = new AudioContext();
                const reader = new FileReader();
                reader.onload = () => {
                  const buffer = reader.result;
                  audioContext.decodeAudioData(buffer).then(buffer => {
                    resolve(audioContext);
                    setData({
                      ...data,
                      duration: parseFloat(buffer.duration.toFixed(2))
                    });
                    setBuffer(buffer);
                  }).catch(error => {
                    reject(error);
                  });
                };
                reader.readAsArrayBuffer(element);
              });
            };
            _react.default.useEffect(() => {
              try {
                const isBlob = src instanceof Blob;
                if (isBlob) {
                  const audio = new Audio();
                  audio.addEventListener('loadedmetadata', () => {
                    data.duration = parseFloat(audio.duration.toFixed(2));
                    data.fileName = src.name;
                    setData(data);
                    setAudio(audio);
                    getAudioContext(src).then(() => {
                      setReady(true);
                    });
                  });
                  audio.addEventListener('error', error => {
                    console.warn('error', error);
                    setError(true);
                  });
                  audio.src = URL.createObjectURL(src);
                  audio.load();
                  return;
                }
                fetch(src).then(async response => {
                  const processAudio = async response => {
                    const data = {
                      src
                    };
                    data.blob = await response.clone().blob();
                    try {
                      const audioContext = new AudioContext();
                      response.arrayBuffer().then(buffer => {
                        audioContext.decodeAudioData(buffer).then(audioBuffer => {
                          setBuffer(audioBuffer);
                        }).catch(error => console.error('error decoding audio', error));
                      });
                    } catch (e) {
                      console.error('error getting audio', e);
                    }
                    data.url = URL.createObjectURL(data.blob);
                    const audio = new Audio();
                    audio.addEventListener('loadedmetadata', () => {
                      data.duration = parseFloat(audio.duration.toFixed(2));
                      data.fileName = src.split('/').pop();
                      setData(data);
                      setAudio(audio);
                    });
                    audio.addEventListener('error', error => {
                      setError(true);
                    });
                    audio.src = src;
                    audio.load();
                    setAudio(audio);
                    setReady(true);
                  };
                  if (!response.ok) throw new Error(response.statusText);
                  const responseClone = response.clone();
                  await responseClone.json().then(data => {
                    if (!data.status) {
                      console.error('error', data.error);
                      return;
                    }
                    processAudio(response);
                  }).catch(error => console.error(error?.message));
                });
              } catch (e) {
                console.error('capturado', e.message);
                setError(true);
              }
            }, [src]);
            return {
              ready,
              audioRef: ref,
              buffer,
              audio,
              data,
              error
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2977058227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          var _useAudio = require("./hooks/use-audio");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _progressbar = require("./progressbar");
          var _timer = require("./timer");
          var _visualizer = require("./visualizer");
          var _preload = require("./preload");
          /*bundle*/
          function AudioPlayer({
            src,
            convert
          }) {
            const {
              ready,
              audioRef,
              error,
              audio,
              data,
              buffer
            } = (0, _useAudio.useAudio)(src, convert);
            const [playing, setPlaying] = _react.default.useState(false);
            const [currentTime, setCurrentTime] = _react.default.useState(0);
            if (!ready || error) return _react.default.createElement(_preload.Preload, null);
            const actions = {
              play: event => {
                event.stopPropagation();
                audio.play();
                setPlaying(true);
              },
              pause: event => {
                event.stopPropagation();
                audio.pause();
                setPlaying(false);
              },
              restart: event => {
                event.stopPropagation();
              }
            };
            const onClick = event => {
              const action = event.currentTarget.dataset.action;
              actions[action](event);
            };
            const action = playing ? 'pause' : 'play';
            const value = {
              audio,
              data,
              playing,
              buffer,
              setPlaying,
              currentTime,
              setCurrentTime
            };
            return _react.default.createElement(_context.ComponentAudioContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "player__container"
            }, _react.default.createElement(_icons.IconButton, {
              icon: action,
              "data-action": action,
              onClick: onClick
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement(_progressbar.ProgressBar, null), _react.default.createElement(_visualizer.Visualizer, null)), _react.default.createElement(_timer.Timer, null))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 258477212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Preload({}) {
            return _react.default.createElement("div", {
              className: "player__container player__container--preload"
            }, _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "play"
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement("div", {
              className: "range__preload"
            })), _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", {
              className: "timer__numbers"
            }, "00"), _react.default.createElement("div", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", {
              className: "timer__numbers"
            }, "00"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./progressbar
      *****************************/

      ims.set('./progressbar', {
        hash: 2627428846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressBar = ProgressBar;
          var _react = require("react");
          var _context = require("./context");
          function ProgressBar() {
            const ref = (0, _react.useRef)(null);
            const {
              audio,
              setCurrentTime,
              setPlaying,
              data: {
                duration
              }
            } = (0, _context.useComponentAudioContext)();
            const [value, setValue] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const timeUpdateListener = () => {
                const currentTime = audio.currentTime;
                setValue(currentTime);
              };
              const onEnded = event => {
                setPlaying(false);
                setValue(0.1);
                setCurrentTime(0.1);
              };
              audio.addEventListener('timeupdate', timeUpdateListener);
              audio.addEventListener('ended', onEnded);
              return () => {
                audio.removeEventListener('timeupdate', timeUpdateListener);
              };
            }, [audio, duration]);
            const onChange = event => {
              event.stopPropagation();
              const desiredTime = parseFloat(event.currentTarget.value);
              for (let i = 0; i < audio.buffered.length; i++) {
                if (audio.buffered.start(i) <= desiredTime && audio.buffered.end(i) >= desiredTime) {
                  audio.currentTime = desiredTime;
                  setValue(desiredTime);
                  return;
                }
              }
              console.warn('Desired time not in buffered range', audio.buffered.length);
            };
            return _react.default.createElement("input", {
              type: "range",
              name: "rang",
              onClick: onChange,
              onChange: onChange,
              title: "audio duration",
              value: value,
              ref: ref,
              max: duration
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./timer
      ***********************/

      ims.set('./timer', {
        hash: 2388829827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _context = require("./context");
          function Timer() {
            const {
              data: {
                duration: time
              },
              audio
            } = (0, _context.useComponentAudioContext)();
            if ([Infinity, undefined].includes(time)) return null;
            const [timeToShow, setTimeToShow] = _react.default.useState(time);
            _react.default.useEffect(() => {
              audio.addEventListener('play', () => {
                setTimeToShow(audio.currentTime);
              });
              audio.addEventListener('pause', () => {
                setTimeToShow(time);
              });
              audio.addEventListener('stop', () => {
                setTimeToShow(time);
              });
              audio.addEventListener('timeupdate', () => {
                setTimeToShow(audio.currentTime);
              });
            }, []);
            let hours = Math.floor(timeToShow / 3600);
            let minutes = Math.floor(timeToShow % 3600 / 60);
            let seconds = Math.round(timeToShow % 60);
            const output = [];
            if (hours > 0) {
              output.push(_react.default.createElement("span", {
                key: "hours",
                className: "timer__numbers timer__numbers--hours"
              }, hours));
            }
            if (minutes < 10) minutes = '0' + minutes;
            output.push(_react.default.createElement(_react.default.Fragment, {
              key: "minutes"
            }, _react.default.createElement("span", {
              className: "timer__numbers timer__number--minutes"
            }, minutes ?? '00'), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":")));
            if (seconds < 10) seconds = '0' + seconds;
            output.push(_react.default.createElement("span", {
              key: "seconds",
              className: "timer__numbers timer__number--seconds"
            }, seconds ?? '00'));
            return _react.default.createElement("section", {
              className: "timer__container"
            }, output);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./types/IAudioInterface
      ***************************************/

      ims.set('./types/IAudioInterface', {
        hash: 377341658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./visualizer
      ****************************/

      ims.set('./visualizer', {
        hash: 3138334151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Visualizer = Visualizer;
          var _react = require("react");
          var _context = require("./context");
          const normalizeData = filteredData => {
            const multiplier = Math.pow(Math.max(...filteredData), -1);
            return filteredData.map(n => n * multiplier);
          };
          const drawLineSegment = (ctx, x, y, barWidth) => {
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#fff';
            // Draw line upwards
            ctx.beginPath();
            ctx.moveTo(x + barWidth / 2, 0);
            ctx.lineTo(x + barWidth / 2, -y);
            ctx.stroke();
            // Draw line downwards
            ctx.beginPath();
            ctx.moveTo(x + barWidth / 2, 0);
            ctx.lineTo(x + barWidth / 2, y);
            ctx.stroke();
          };
          const draw = (canvas, normalizedData) => {
            const dpr = window.devicePixelRatio || 1.5;
            const padding = 20;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
            const ctx = canvas.getContext('2d');
            ctx.scale(dpr, dpr);
            ctx.translate(0, canvas.offsetHeight / 2 + padding);
            // Draw X-axis
            ctx.strokeStyle = '#cc0000'; // Set the color of the X-axis
            ctx.lineWidth = 1; // Set the line width of the X-axis
            ctx.beginPath();
            ctx.moveTo(0, 0); // Start point of the X-axis
            ctx.lineTo(canvas.offsetWidth, 0); // End point of the X-axis
            ctx.stroke();
            const totalWidth = canvas.offsetWidth;
            const barWidth = 3; // Width of individual bars, can be more than 1
            const separation = 1; // Spacing between bars
            const segmentWidth = barWidth + separation; // Combined width of a bar and the space after it
            const numBars = Math.floor(totalWidth / segmentWidth); // Total number of bars that will fit on the canvas
            for (let i = 0; i < numBars; i++) {
              const dataIndex = Math.floor(i / numBars * normalizedData.length);
              const x = segmentWidth * i;
              let height = normalizedData[dataIndex] * canvas.offsetHeight - padding;
              if (height < 0) height = 0;else if (height > canvas.offsetHeight / 2) height = canvas.offsetHeight / 2;
              drawLineSegment(ctx, x, height, segmentWidth);
            }
          };
          const filterData = audioBuffer => {
            if (!audioBuffer) return [];
            const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
            const samples = 70; // Number of samples we want to have in our final data set
            const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
            const filteredData = [];
            for (let i = 0; i < samples; i++) {
              let blockStart = blockSize * i; // the location of the first sample in the block
              let sum = 0;
              for (let j = 0; j < blockSize; j++) {
                sum = sum + Math.abs(rawData[blockStart + j]); // find the sum of all the samples in the block
              }
              filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
            }
            return filteredData;
          };
          const visualize = (audioBuffer, selector) => {
            return draw(selector, normalizeData(filterData(audioBuffer)));
          };
          function Visualizer() {
            const {
              buffer
            } = (0, _context.useComponentAudioContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              visualize(buffer, ref.current);
            }, []);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("canvas", {
              ref: ref
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./index').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwiYnVmZmVyIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlZiIsImN1cnJlbnQiLCJnZXRBdWRpb0NvbnRleHQiLCJlbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0IiwiZGVjb2RlQXVkaW9EYXRhIiwidGhlbiIsImR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjYXRjaCIsInJlYWRBc0FycmF5QnVmZmVyIiwidXNlRWZmZWN0IiwiaXNCbG9iIiwiQmxvYiIsIkF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVOYW1lIiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsImZldGNoIiwicmVzcG9uc2UiLCJwcm9jZXNzQXVkaW8iLCJibG9iIiwiY2xvbmUiLCJhcnJheUJ1ZmZlciIsImF1ZGlvQnVmZmVyIiwiZSIsInVybCIsInNwbGl0IiwicG9wIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJyZXNwb25zZUNsb25lIiwianNvbiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJfdXNlQXVkaW8iLCJfaWNvbnMiLCJfY29udGV4dCIsIl9wcm9ncmVzc2JhciIsIl90aW1lciIsIl92aXN1YWxpemVyIiwiX3ByZWxvYWQiLCJBdWRpb1BsYXllciIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsImNyZWF0ZUVsZW1lbnQiLCJQcmVsb2FkIiwiYWN0aW9ucyIsInBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhdXNlIiwicmVzdGFydCIsIm9uQ2xpY2siLCJhY3Rpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlByb2dyZXNzQmFyIiwiVmlzdWFsaXplciIsIlRpbWVyIiwiZGlzYWJsZWQiLCJzZXRWYWx1ZSIsInRpbWVVcGRhdGVMaXN0ZW5lciIsIm9uRW5kZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DaGFuZ2UiLCJkZXNpcmVkVGltZSIsImkiLCJidWZmZXJlZCIsImxlbmd0aCIsInN0YXJ0IiwiZW5kIiwidHlwZSIsInRpdGxlIiwibWF4IiwidGltZSIsIkluZmluaXR5IiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJ0aW1lVG9TaG93Iiwic2V0VGltZVRvU2hvdyIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJyb3VuZCIsIm91dHB1dCIsInB1c2giLCJrZXkiLCJGcmFnbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwibm9ybWFsaXplRGF0YSIsImZpbHRlcmVkRGF0YSIsIm11bHRpcGxpZXIiLCJwb3ciLCJtYXAiLCJuIiwiZHJhd0xpbmVTZWdtZW50IiwiY3R4IiwieCIsInkiLCJiYXJXaWR0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhdyIsImNhbnZhcyIsIm5vcm1hbGl6ZWREYXRhIiwiZHByIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInBhZGRpbmciLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0Q29udGV4dCIsInNjYWxlIiwidHJhbnNsYXRlIiwidG90YWxXaWR0aCIsInNlcGFyYXRpb24iLCJzZWdtZW50V2lkdGgiLCJudW1CYXJzIiwiZGF0YUluZGV4IiwiZmlsdGVyRGF0YSIsInJhd0RhdGEiLCJnZXRDaGFubmVsRGF0YSIsInNhbXBsZXMiLCJibG9ja1NpemUiLCJibG9ja1N0YXJ0Iiwic3VtIiwiaiIsImFicyIsInZpc3VhbGl6ZSIsInNlbGVjdG9yIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hvb2tzL3VzZS1hdWRpby50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3Byb2dyZXNzYmFyLnRzeCIsIi90cy90aW1lci50c3giLCIvSUF1ZGlvSW50ZXJmYWNlLnRzIiwiL3RzL3Zpc3VhbGl6ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBU08sTUFBTUMscUJBQXFCLEdBQUFDLE9BQUEsQ0FBQUQscUJBQUEsR0FBRyxJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBQyxFQUFtQixDQUFDO1VBQ2hFLE1BQU1DLHdCQUF3QixHQUFHQSxDQUFBLEtBQU0sSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLHFCQUFxQixDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVmhGLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQVlNLFNBQVVNLFFBQVFBLENBQUNDLEdBQUcsRUFBRUMsT0FBTztZQUNwQyxNQUFNQyxRQUFRLEdBQUdWLE1BQUEsQ0FBQVcsT0FBSyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2QsTUFBQSxDQUFBVyxPQUFLLENBQUNJLFFBQVEsQ0FBb0IsSUFBSSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2pCLE1BQUEsQ0FBQVcsT0FBSyxDQUFDSSxRQUFRLEVBQWU7WUFDekQsTUFBTSxDQUFDRyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHbkIsTUFBQSxDQUFBVyxPQUFLLENBQUNJLFFBQVEsRUFBVztZQUNuRCxNQUFNLENBQUNLLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdyQixNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFBUSxDQUFrQjtjQUFDUDtZQUFHLENBQUMsQ0FBQztZQUM5RCxNQUFNLENBQUNjLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd2QixNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFBUSxDQUFRLEtBQUssQ0FBQztZQUN0RCxNQUFNUyxHQUFHLEdBQUdkLFFBQVEsQ0FBQ2UsT0FBTztZQUU1QixNQUFNQyxlQUFlLEdBQUdDLE9BQU8sSUFBRztjQUNqQyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sS0FBSTtnQkFDdEMsTUFBTUMsWUFBWSxHQUFHLElBQUlDLFlBQVksRUFBRTtnQkFDdkMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtnQkFDL0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLE1BQUs7a0JBQ3BCLE1BQU1uQixNQUFNLEdBQUdpQixNQUFNLENBQUNHLE1BQXFCO2tCQUMzQ0wsWUFBWSxDQUNWTSxlQUFlLENBQUNyQixNQUFNLENBQUMsQ0FDdkJzQixJQUFJLENBQUN0QixNQUFNLElBQUc7b0JBQ2RhLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDO29CQUNyQlYsT0FBTyxDQUFDO3NCQUFDLEdBQUdELElBQUk7c0JBQUVtQixRQUFRLEVBQUVDLFVBQVUsQ0FBQ3hCLE1BQU0sQ0FBQ3VCLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFBQyxDQUFDLENBQUM7b0JBQ3BFeEIsU0FBUyxDQUFDRCxNQUFNLENBQUM7a0JBQ2xCLENBQUMsQ0FBQyxDQUNEMEIsS0FBSyxDQUFDcEIsS0FBSyxJQUFHO29CQUNkUSxNQUFNLENBQUNSLEtBQUssQ0FBQztrQkFDZCxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFDRFcsTUFBTSxDQUFDVSxpQkFBaUIsQ0FBQ2hCLE9BQU8sQ0FBQztjQUNsQyxDQUFDLENBQUM7WUFDSCxDQUFDO1lBQ0QzQixNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUk7Z0JBQ0gsTUFBTUMsTUFBTSxHQUFHckMsR0FBRyxZQUFZc0MsSUFBSTtnQkFDbEMsSUFBSUQsTUFBTSxFQUFFO2tCQUNYLE1BQU1oQyxLQUFLLEdBQUcsSUFBSWtDLEtBQUssRUFBRTtrQkFFekJsQyxLQUFLLENBQUNtQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO29CQUM3QzVCLElBQUksQ0FBQ21CLFFBQVEsR0FBR0MsVUFBVSxDQUFDM0IsS0FBSyxDQUFDMEIsUUFBUSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JEckIsSUFBSSxDQUFDNkIsUUFBUSxHQUFHekMsR0FBRyxDQUFDMEMsSUFBSTtvQkFDeEI3QixPQUFPLENBQUNELElBQUksQ0FBQztvQkFDYk4sUUFBUSxDQUFDRCxLQUFLLENBQUM7b0JBQ2ZhLGVBQWUsQ0FBQ2xCLEdBQUcsQ0FBQyxDQUFDOEIsSUFBSSxDQUFDLE1BQUs7c0JBQzlCbkIsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDZixDQUFDLENBQUM7a0JBQ0gsQ0FBQyxDQUFDO2tCQUVGTixLQUFLLENBQUNtQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUxQixLQUFLLElBQUc7b0JBQ3ZDNkIsT0FBTyxDQUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFOUIsS0FBSyxDQUFDO29CQUM1QkMsUUFBUSxDQUFDLElBQUksQ0FBQztrQkFDZixDQUFDLENBQUM7a0JBQ0ZWLEtBQUssQ0FBQ0wsR0FBRyxHQUFHNkMsR0FBRyxDQUFDQyxlQUFlLENBQUM5QyxHQUFHLENBQUM7a0JBQ3BDSyxLQUFLLENBQUMwQyxJQUFJLEVBQUU7a0JBQ1o7O2dCQUdEQyxLQUFLLENBQUNoRCxHQUFHLENBQUMsQ0FBQzhCLElBQUksQ0FBQyxNQUFNbUIsUUFBUSxJQUFHO2tCQUNoQyxNQUFNQyxZQUFZLEdBQUcsTUFBTUQsUUFBUSxJQUFHO29CQUNyQyxNQUFNckMsSUFBSSxHQUFvQjtzQkFBQ1o7b0JBQUcsQ0FBQztvQkFDbkNZLElBQUksQ0FBQ3VDLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLEtBQUssRUFBRSxDQUFDRCxJQUFJLEVBQUU7b0JBQ3pDLElBQUk7c0JBQ0gsTUFBTTVCLFlBQVksR0FBRyxJQUFJQyxZQUFZLEVBQUU7c0JBRXZDeUIsUUFBUSxDQUFDSSxXQUFXLEVBQUUsQ0FBQ3ZCLElBQUksQ0FBQ3RCLE1BQU0sSUFBRzt3QkFDcENlLFlBQVksQ0FDVk0sZUFBZSxDQUFDckIsTUFBTSxDQUFDLENBQ3ZCc0IsSUFBSSxDQUFDd0IsV0FBVyxJQUFHOzBCQUNuQjdDLFNBQVMsQ0FBQzZDLFdBQVcsQ0FBQzt3QkFDdkIsQ0FBQyxDQUFDLENBQ0RwQixLQUFLLENBQUNwQixLQUFLLElBQUk2QixPQUFPLENBQUM3QixLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO3NCQUMvRCxDQUFDLENBQUM7cUJBQ0YsQ0FBQyxPQUFPeUMsQ0FBQyxFQUFFO3NCQUNYWixPQUFPLENBQUM3QixLQUFLLENBQUMscUJBQXFCLEVBQUV5QyxDQUFDLENBQUM7O29CQUV4QzNDLElBQUksQ0FBQzRDLEdBQUcsR0FBR1gsR0FBRyxDQUFDQyxlQUFlLENBQUNsQyxJQUFJLENBQUN1QyxJQUFJLENBQUM7b0JBQ3pDLE1BQU05QyxLQUFLLEdBQUcsSUFBSWtDLEtBQUssRUFBRTtvQkFFekJsQyxLQUFLLENBQUNtQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO3NCQUM3QzVCLElBQUksQ0FBQ21CLFFBQVEsR0FBR0MsVUFBVSxDQUFDM0IsS0FBSyxDQUFDMEIsUUFBUSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7c0JBQ3JEckIsSUFBSSxDQUFDNkIsUUFBUSxHQUFHekMsR0FBRyxDQUFDeUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7c0JBRXBDN0MsT0FBTyxDQUFDRCxJQUFJLENBQUM7c0JBQ2JOLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO29CQUNoQixDQUFDLENBQUM7b0JBRUZBLEtBQUssQ0FBQ21DLGdCQUFnQixDQUFDLE9BQU8sRUFBRTFCLEtBQUssSUFBRztzQkFDdkNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsQ0FBQyxDQUFDO29CQUNGVixLQUFLLENBQUNMLEdBQUcsR0FBR0EsR0FBRztvQkFDZkssS0FBSyxDQUFDMEMsSUFBSSxFQUFFO29CQUNaekMsUUFBUSxDQUFDRCxLQUFLLENBQUM7b0JBQ2ZNLFFBQVEsQ0FBQyxJQUFJLENBQUM7a0JBQ2YsQ0FBQztrQkFDRCxJQUFJLENBQUNzQyxRQUFRLENBQUNVLEVBQUUsRUFBRSxNQUFNLElBQUlDLEtBQUssQ0FBQ1gsUUFBUSxDQUFDWSxVQUFVLENBQUM7a0JBRXRELE1BQU1DLGFBQWEsR0FBR2IsUUFBUSxDQUFDRyxLQUFLLEVBQUU7a0JBQ3RDLE1BQU1VLGFBQWEsQ0FDakJDLElBQUksRUFBRSxDQUNOakMsSUFBSSxDQUFDbEIsSUFBSSxJQUFHO29CQUNaLElBQUksQ0FBQ0EsSUFBSSxDQUFDb0QsTUFBTSxFQUFFO3NCQUNqQnJCLE9BQU8sQ0FBQzdCLEtBQUssQ0FBQyxPQUFPLEVBQUVGLElBQUksQ0FBQ0UsS0FBSyxDQUFDO3NCQUNsQzs7b0JBRURvQyxZQUFZLENBQUNELFFBQVEsQ0FBQztrQkFDdkIsQ0FBQyxDQUFDLENBQ0RmLEtBQUssQ0FBQ3BCLEtBQUssSUFBSTZCLE9BQU8sQ0FBQzdCLEtBQUssQ0FBQ0EsS0FBSyxFQUFFbUQsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQztlQUNGLENBQUMsT0FBT1YsQ0FBQyxFQUFFO2dCQUNYWixPQUFPLENBQUM3QixLQUFLLENBQUMsV0FBVyxFQUFFeUMsQ0FBQyxDQUFDVSxPQUFPLENBQUM7Z0JBQ3JDbEQsUUFBUSxDQUFDLElBQUksQ0FBQzs7WUFFaEIsQ0FBQyxFQUFFLENBQUNmLEdBQUcsQ0FBQyxDQUFDO1lBRVQsT0FBTztjQUNOVSxLQUFLO2NBQ0xSLFFBQVEsRUFBRWMsR0FBRztjQUNiUixNQUFNO2NBQ05ILEtBQUs7Y0FDTE8sSUFBSTtjQUNKRTthQUNBO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbklBLElBQUF0QixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBeUUsU0FBQSxHQUFBekUsT0FBQTtVQUNBLElBQUEwRSxNQUFBLEdBQUExRSxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFDQSxJQUFBNEUsWUFBQSxHQUFBNUUsT0FBQTtVQUNBLElBQUE2RSxNQUFBLEdBQUE3RSxPQUFBO1VBQ0EsSUFBQThFLFdBQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUVPO1VBQVUsU0FBVWdGLFdBQVdBLENBQUM7WUFBQ3pFLEdBQUc7WUFBRUM7VUFBTyxDQUFDO1lBQ3BELE1BQU07Y0FBQ1MsS0FBSztjQUFFUixRQUFRO2NBQUVZLEtBQUs7Y0FBRVQsS0FBSztjQUFFTyxJQUFJO2NBQUVKO1lBQU0sQ0FBQyxHQUFHLElBQUEwRCxTQUFBLENBQUFuRSxRQUFRLEVBQUNDLEdBQUcsRUFBRUMsT0FBTyxDQUFDO1lBQzVFLE1BQU0sQ0FBQ3lFLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUduRixNQUFBLENBQUFXLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUNxRSxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHckYsTUFBQSxDQUFBVyxPQUFLLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFdkQsSUFBSSxDQUFDRyxLQUFLLElBQUlJLEtBQUssRUFBRSxPQUFPdEIsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBLENBQUNOLFFBQUEsQ0FBQU8sT0FBTyxPQUFHO1lBQ3ZDLE1BQU1DLE9BQU8sR0FBRztjQUNmQyxJQUFJLEVBQUVDLEtBQUssSUFBRztnQkFDYkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCOUUsS0FBSyxDQUFDNEUsSUFBSSxFQUFFO2dCQUNaTixVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2pCLENBQUM7Y0FDRFMsS0FBSyxFQUFFRixLQUFLLElBQUc7Z0JBQ2RBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QjlFLEtBQUssQ0FBQytFLEtBQUssRUFBRTtnQkFDYlQsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNsQixDQUFDO2NBQ0RVLE9BQU8sRUFBRUgsS0FBSyxJQUFHO2dCQUNoQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDeEI7YUFDQTtZQUVELE1BQU1HLE9BQU8sR0FBR0osS0FBSyxJQUFHO2NBQ3ZCLE1BQU1LLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTTtjQUNqRFAsT0FBTyxDQUFDTyxNQUFNLENBQUMsQ0FBQ0wsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNSyxNQUFNLEdBQUdiLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTTtZQUN6QyxNQUFNZ0IsS0FBSyxHQUFHO2NBQ2JyRixLQUFLO2NBQ0xPLElBQUk7Y0FDSjhELE9BQU87Y0FDUGxFLE1BQU07Y0FDTm1FLFVBQVU7Y0FDVkMsV0FBVztjQUNYQzthQUNBO1lBQ0QsT0FDQ3JGLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQSxDQUFDVixRQUFBLENBQUExRSxxQkFBcUIsQ0FBQ2lHLFFBQVE7Y0FBQ0QsS0FBSyxFQUFFQTtZQUFLLEdBQzNDbEcsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFtQixHQUNqQ3BHLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQSxDQUFDWCxNQUFBLENBQUEwQixVQUFVO2NBQUNDLElBQUksRUFBRVAsTUFBTTtjQUFBLGVBQWVBLE1BQU07Y0FBRUQsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDbkU5RixNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDcEcsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFjLEdBQzVCcEcsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBLENBQUNULFlBQUEsQ0FBQTBCLFdBQVcsT0FBRyxFQUNmdkcsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBLENBQUNQLFdBQUEsQ0FBQXlCLFVBQVUsT0FBRyxDQUNULEVBQ054RyxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUEsQ0FBQ1IsTUFBQSxDQUFBMkIsS0FBSyxPQUFHLENBQ0osQ0FDRCxDQUMwQjtVQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQXpHLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwRSxNQUFBLEdBQUExRSxPQUFBO1VBRU0sU0FBVXNGLE9BQU9BLENBQUMsRUFBRTtZQUN6QixPQUNDdkYsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUE4QyxHQUM1RHBHLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQSxDQUFDWCxNQUFBLENBQUEwQixVQUFVO2NBQUNLLFFBQVE7Y0FBQ0osSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQ3RHLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBa0IsR0FDaENwRyxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWMsR0FDNUJwRyxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWdCLEVBQUcsQ0FDN0IsRUFDTnBHLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBa0IsR0FDaENwRyxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQWdCLFFBQVUsRUFDMUNwRyxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLE9BQVEsRUFDekNwRyxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQWdCLFFBQVUsQ0FDckMsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFwRyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMkUsUUFBQSxHQUFBM0UsT0FBQTtVQUVNLFNBQVVzRyxXQUFXQSxDQUFBO1lBQzFCLE1BQU0vRSxHQUFHLEdBQUcsSUFBQXhCLE1BQUEsQ0FBQVksTUFBTSxFQUFtQixJQUFJLENBQUM7WUFDMUMsTUFBTTtjQUNMQyxLQUFLO2NBQ0x3RSxjQUFjO2NBQ2RGLFVBQVU7Y0FDVi9ELElBQUksRUFBRTtnQkFBQ21CO2NBQVE7WUFBQyxDQUNoQixHQUFHLElBQUFxQyxRQUFBLENBQUF2RSx3QkFBd0IsR0FBRTtZQUM5QixNQUFNLENBQUM2RixLQUFLLEVBQUVTLFFBQVEsQ0FBQyxHQUFHLElBQUEzRyxNQUFBLENBQUFlLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFFckMsSUFBQWYsTUFBQSxDQUFBNEMsU0FBUyxFQUFDLE1BQUs7Y0FDZCxNQUFNZ0Usa0JBQWtCLEdBQUdBLENBQUEsS0FBSztnQkFDL0IsTUFBTXhCLFdBQVcsR0FBR3ZFLEtBQUssQ0FBQ3VFLFdBQVc7Z0JBQ3JDdUIsUUFBUSxDQUFDdkIsV0FBVyxDQUFDO2NBQ3RCLENBQUM7Y0FDRCxNQUFNeUIsT0FBTyxHQUFHbkIsS0FBSyxJQUFHO2dCQUN2QlAsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDakJ3QixRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUNidEIsY0FBYyxDQUFDLEdBQUcsQ0FBQztjQUNwQixDQUFDO2NBQ0R4RSxLQUFLLENBQUNtQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU0RCxrQkFBa0IsQ0FBQztjQUN4RC9GLEtBQUssQ0FBQ21DLGdCQUFnQixDQUFDLE9BQU8sRUFBRTZELE9BQU8sQ0FBQztjQUV4QyxPQUFPLE1BQUs7Z0JBQ1hoRyxLQUFLLENBQUNpRyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUVGLGtCQUFrQixDQUFDO2NBQzVELENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQy9GLEtBQUssRUFBRTBCLFFBQVEsQ0FBQyxDQUFDO1lBRXJCLE1BQU13RSxRQUFRLEdBQUlyQixLQUEwQyxJQUFJO2NBQy9EQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixNQUFNcUIsV0FBVyxHQUFHeEUsVUFBVSxDQUFDa0QsS0FBSyxDQUFDTSxhQUFhLENBQUNFLEtBQUssQ0FBQztjQUV6RCxLQUFLLElBQUllLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3BHLEtBQUssQ0FBQ3FHLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSXBHLEtBQUssQ0FBQ3FHLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDSCxDQUFDLENBQUMsSUFBSUQsV0FBVyxJQUFJbkcsS0FBSyxDQUFDcUcsUUFBUSxDQUFDRyxHQUFHLENBQUNKLENBQUMsQ0FBQyxJQUFJRCxXQUFXLEVBQUU7a0JBQ25GbkcsS0FBSyxDQUFDdUUsV0FBVyxHQUFHNEIsV0FBVztrQkFFL0JMLFFBQVEsQ0FBQ0ssV0FBVyxDQUFDO2tCQUNyQjs7O2NBR0Y3RCxPQUFPLENBQUNDLElBQUksQ0FBQyxvQ0FBb0MsRUFBRXZDLEtBQUssQ0FBQ3FHLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQzFFLENBQUM7WUFFRCxPQUNDbkgsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBO2NBQ0NnQyxJQUFJLEVBQUMsT0FBTztjQUNacEUsSUFBSSxFQUFDLE1BQU07Y0FDWDRDLE9BQU8sRUFBRWlCLFFBQVE7Y0FDakJBLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFDLGdCQUFnQjtjQUN0QnJCLEtBQUssRUFBRUEsS0FBSztjQUNaMUUsR0FBRyxFQUFFQSxHQUFHO2NBQ1JnRyxHQUFHLEVBQUVqRjtZQUFRLEVBQ1o7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQXZDLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUEyRSxRQUFBLEdBQUEzRSxPQUFBO1VBRU0sU0FBVXdHLEtBQUtBLENBQUE7WUFDcEIsTUFBTTtjQUNMckYsSUFBSSxFQUFFO2dCQUFDbUIsUUFBUSxFQUFFa0Y7Y0FBSSxDQUFDO2NBQ3RCNUc7WUFBSyxDQUNMLEdBQUcsSUFBQStELFFBQUEsQ0FBQXZFLHdCQUF3QixHQUFFO1lBRTlCLElBQUksQ0FBQ3FILFFBQVEsRUFBRUMsU0FBUyxDQUFDLENBQUNDLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBQ3JELE1BQU0sQ0FBQ0ksVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzlILE1BQUEsQ0FBQVcsT0FBSyxDQUFDSSxRQUFRLENBQUMwRyxJQUFJLENBQUM7WUFFeER6SCxNQUFBLENBQUFXLE9BQUssQ0FBQ2lDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCL0IsS0FBSyxDQUFDbUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQUs7Z0JBQ25DOEUsYUFBYSxDQUFDakgsS0FBSyxDQUFDdUUsV0FBVyxDQUFDO2NBQ2pDLENBQUMsQ0FBQztjQUNGdkUsS0FBSyxDQUFDbUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUs7Z0JBQ3BDOEUsYUFBYSxDQUFDTCxJQUFJLENBQUM7Y0FDcEIsQ0FBQyxDQUFDO2NBQ0Y1RyxLQUFLLENBQUNtQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBSztnQkFDbkM4RSxhQUFhLENBQUNMLElBQUksQ0FBQztjQUNwQixDQUFDLENBQUM7Y0FDRjVHLEtBQUssQ0FBQ21DLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFLO2dCQUN6QzhFLGFBQWEsQ0FBQ2pILEtBQUssQ0FBQ3VFLFdBQVcsQ0FBQztjQUNqQyxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sSUFBSTJDLEtBQUssR0FBVUMsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSUssT0FBTyxHQUFVRixJQUFJLENBQUNDLEtBQUssQ0FBRUosVUFBVSxHQUFHLElBQUksR0FBSSxFQUFFLENBQUM7WUFDekQsSUFBSU0sT0FBTyxHQUFVSCxJQUFJLENBQUNJLEtBQUssQ0FBQ1AsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUVoRCxNQUFNUSxNQUFNLEdBQUcsRUFBRTtZQUNqQixJQUFJTixLQUFLLEdBQUcsQ0FBQyxFQUFFO2NBQ2RNLE1BQU0sQ0FBQ0MsSUFBSSxDQUNWdEksTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBO2dCQUFNaUQsR0FBRyxFQUFDLE9BQU87Z0JBQUNuQyxTQUFTLEVBQUM7Y0FBc0MsR0FDaEUyQixLQUFLLENBQ0EsQ0FDUDs7WUFFRixJQUFJRyxPQUFPLEdBQUcsRUFBRSxFQUFFQSxPQUFPLEdBQUcsR0FBRyxHQUFHQSxPQUFPO1lBQ3pDRyxNQUFNLENBQUNDLElBQUksQ0FDVnRJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQSxDQUFDdEYsTUFBQSxDQUFBVyxPQUFLLENBQUM2SCxRQUFRO2NBQUNELEdBQUcsRUFBQztZQUFTLEdBQzVCdkksTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBO2NBQU1jLFNBQVMsRUFBQztZQUF1QyxHQUFFOEIsT0FBTyxJQUFJLElBQUksQ0FBUSxFQUNoRmxJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBa0IsT0FBUyxDQUMzQixDQUNqQjtZQUNELElBQUkrQixPQUFPLEdBQUcsRUFBRSxFQUFFQSxPQUFPLEdBQUcsR0FBRyxHQUFHQSxPQUFPO1lBQ3pDRSxNQUFNLENBQUNDLElBQUksQ0FDVnRJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQTtjQUFNaUQsR0FBRyxFQUFDLFNBQVM7Y0FBQ25DLFNBQVMsRUFBQztZQUF1QyxHQUNuRStCLE9BQU8sSUFBSSxJQUFJLENBQ1YsQ0FDUDtZQUNELE9BQU9uSSxNQUFBLENBQUFXLE9BQUEsQ0FBQTJFLGFBQUE7Y0FBU2MsU0FBUyxFQUFDO1lBQWtCLEdBQUVpQyxNQUFNLENBQVc7VUFDaEU7Ozs7Ozs7Ozs7O1VDckRBOztVQUVBSSxNQUFBLENBQUFDLGNBQUEsQ0FBQXZJLE9BQUE7WUFDQStGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBbEcsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJFLFFBQUEsR0FBQTNFLE9BQUE7VUFFQSxNQUFNMEksYUFBYSxHQUFHQyxZQUFZLElBQUc7WUFDcEMsTUFBTUMsVUFBVSxHQUFHYixJQUFJLENBQUNjLEdBQUcsQ0FBQ2QsSUFBSSxDQUFDUixHQUFHLENBQUMsR0FBR29CLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFELE9BQU9BLFlBQVksQ0FBQ0csR0FBRyxDQUFDQyxDQUFDLElBQUlBLENBQUMsR0FBR0gsVUFBVSxDQUFDO1VBQzdDLENBQUM7VUFFRCxNQUFNSSxlQUFlLEdBQUdBLENBQUNDLEdBQTZCLEVBQUVDLENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxRQUFnQixLQUFVO1lBQ3ZHSCxHQUFHLENBQUNJLFNBQVMsR0FBRyxDQUFDO1lBQ2pCSixHQUFHLENBQUNLLFdBQVcsR0FBRyxNQUFNO1lBRXhCO1lBQ0FMLEdBQUcsQ0FBQ00sU0FBUyxFQUFFO1lBQ2ZOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDTixDQUFDLEdBQUdFLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CSCxHQUFHLENBQUNRLE1BQU0sQ0FBQ1AsQ0FBQyxHQUFHRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUNELENBQUMsQ0FBQztZQUNoQ0YsR0FBRyxDQUFDUyxNQUFNLEVBQUU7WUFFWjtZQUNBVCxHQUFHLENBQUNNLFNBQVMsRUFBRTtZQUNmTixHQUFHLENBQUNPLE1BQU0sQ0FBQ04sQ0FBQyxHQUFHRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQkgsR0FBRyxDQUFDUSxNQUFNLENBQUNQLENBQUMsR0FBR0UsUUFBUSxHQUFHLENBQUMsRUFBRUQsQ0FBQyxDQUFDO1lBQy9CRixHQUFHLENBQUNTLE1BQU0sRUFBRTtVQUNiLENBQUM7VUFFRCxNQUFNQyxJQUFJLEdBQUdBLENBQUNDLE1BQXlCLEVBQUVDLGNBQXdCLEtBQVU7WUFDMUUsTUFBTUMsR0FBRyxHQUFHQyxNQUFNLENBQUNDLGdCQUFnQixJQUFJLEdBQUc7WUFDMUMsTUFBTUMsT0FBTyxHQUFHLEVBQUU7WUFDbEJMLE1BQU0sQ0FBQ00sS0FBSyxHQUFHTixNQUFNLENBQUNPLFdBQVcsR0FBR0wsR0FBRztZQUN2Q0YsTUFBTSxDQUFDUSxNQUFNLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDUyxZQUFZLEdBQUdKLE9BQU8sR0FBRyxDQUFDLElBQUlILEdBQUc7WUFDekQsTUFBTWIsR0FBRyxHQUFHVyxNQUFNLENBQUNVLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkNyQixHQUFHLENBQUNzQixLQUFLLENBQUNULEdBQUcsRUFBRUEsR0FBRyxDQUFDO1lBQ25CYixHQUFHLENBQUN1QixTQUFTLENBQUMsQ0FBQyxFQUFFWixNQUFNLENBQUNTLFlBQVksR0FBRyxDQUFDLEdBQUdKLE9BQU8sQ0FBQztZQUVuRDtZQUNBaEIsR0FBRyxDQUFDSyxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDN0JMLEdBQUcsQ0FBQ0ksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25CSixHQUFHLENBQUNNLFNBQVMsRUFBRTtZQUNmTixHQUFHLENBQUNPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQlAsR0FBRyxDQUFDUSxNQUFNLENBQUNHLE1BQU0sQ0FBQ08sV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkNsQixHQUFHLENBQUNTLE1BQU0sRUFBRTtZQUVaLE1BQU1lLFVBQVUsR0FBR2IsTUFBTSxDQUFDTyxXQUFXO1lBQ3JDLE1BQU1mLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNc0IsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU1DLFlBQVksR0FBR3ZCLFFBQVEsR0FBR3NCLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE1BQU1FLE9BQU8sR0FBRzdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDeUMsVUFBVSxHQUFHRSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBRXZELEtBQUssSUFBSTNELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzRELE9BQU8sRUFBRTVELENBQUMsRUFBRSxFQUFFO2NBQ2pDLE1BQU02RCxTQUFTLEdBQUc5QyxJQUFJLENBQUNDLEtBQUssQ0FBRWhCLENBQUMsR0FBRzRELE9BQU8sR0FBSWYsY0FBYyxDQUFDM0MsTUFBTSxDQUFDO2NBQ25FLE1BQU1nQyxDQUFDLEdBQUd5QixZQUFZLEdBQUczRCxDQUFDO2NBQzFCLElBQUlvRCxNQUFNLEdBQUdQLGNBQWMsQ0FBQ2dCLFNBQVMsQ0FBQyxHQUFHakIsTUFBTSxDQUFDUyxZQUFZLEdBQUdKLE9BQU87Y0FFdEUsSUFBSUcsTUFBTSxHQUFHLENBQUMsRUFBRUEsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUN0QixJQUFJQSxNQUFNLEdBQUdSLE1BQU0sQ0FBQ1MsWUFBWSxHQUFHLENBQUMsRUFBRUQsTUFBTSxHQUFHUixNQUFNLENBQUNTLFlBQVksR0FBRyxDQUFDO2NBRTNFckIsZUFBZSxDQUFDQyxHQUFHLEVBQUVDLENBQUMsRUFBRWtCLE1BQU0sRUFBRU8sWUFBWSxDQUFDOztVQUUvQyxDQUFDO1VBRUQsTUFBTUcsVUFBVSxHQUFHakgsV0FBVyxJQUFHO1lBQ2hDLElBQUksQ0FBQ0EsV0FBVyxFQUFFLE9BQU8sRUFBRTtZQUMzQixNQUFNa0gsT0FBTyxHQUFHbEgsV0FBVyxDQUFDbUgsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLE1BQU1DLFNBQVMsR0FBR25ELElBQUksQ0FBQ0MsS0FBSyxDQUFDK0MsT0FBTyxDQUFDN0QsTUFBTSxHQUFHK0QsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4RCxNQUFNdEMsWUFBWSxHQUFHLEVBQUU7WUFDdkIsS0FBSyxJQUFJM0IsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaUUsT0FBTyxFQUFFakUsQ0FBQyxFQUFFLEVBQUU7Y0FDakMsSUFBSW1FLFVBQVUsR0FBR0QsU0FBUyxHQUFHbEUsQ0FBQyxDQUFDLENBQUM7Y0FDaEMsSUFBSW9FLEdBQUcsR0FBRyxDQUFDO2NBQ1gsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILFNBQVMsRUFBRUcsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DRCxHQUFHLEdBQUdBLEdBQUcsR0FBR3JELElBQUksQ0FBQ3VELEdBQUcsQ0FBQ1AsT0FBTyxDQUFDSSxVQUFVLEdBQUdFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFaEQxQyxZQUFZLENBQUNOLElBQUksQ0FBQytDLEdBQUcsR0FBR0YsU0FBUyxDQUFDLENBQUMsQ0FBQzs7WUFFckMsT0FBT3ZDLFlBQVk7VUFDcEIsQ0FBQztVQUVELE1BQU00QyxTQUFTLEdBQUdBLENBQUMxSCxXQUFXLEVBQUUySCxRQUFRLEtBQUk7WUFDM0MsT0FBTzdCLElBQUksQ0FBQzZCLFFBQVEsRUFBRTlDLGFBQWEsQ0FBQ29DLFVBQVUsQ0FBQ2pILFdBQVcsQ0FBQyxDQUFDLENBQUM7VUFDOUQsQ0FBQztVQUVLLFNBQVUwQyxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBQ3hGO1lBQU0sQ0FBQyxHQUFHLElBQUE0RCxRQUFBLENBQUF2RSx3QkFBd0IsR0FBRTtZQUMzQyxNQUFNbUIsR0FBRyxHQUFHeEIsTUFBQSxDQUFBVyxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUJaLE1BQUEsQ0FBQVcsT0FBSyxDQUFDaUMsU0FBUyxDQUFDLE1BQUs7Y0FDcEI0SSxTQUFTLENBQUN4SyxNQUFNLEVBQUVRLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDO1lBQy9CLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDekIsTUFBQSxDQUFBVyxPQUFBLENBQUEyRSxhQUFBLENBQUF0RixNQUFBLENBQUFXLE9BQUEsQ0FBQTZILFFBQUEsUUFDQ3hJLE1BQUEsQ0FBQVcsT0FBQSxDQUFBMkUsYUFBQTtjQUFROUQsR0FBRyxFQUFFQTtZQUFHLEVBQUksQ0FDbEI7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==