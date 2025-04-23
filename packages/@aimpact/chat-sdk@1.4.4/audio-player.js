System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "wavesurfer.js@7.9.4"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_wavesurferJs) {
      dependency_4 = _wavesurferJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/audio-player"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['wavesurfer.js', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.4/audio-player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1420102872,
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

      /*******************************************
      INTERNAL MODULE: ./hooks/get-element-context
      *******************************************/

      ims.set('./hooks/get-element-context', {
        hash: 2925913507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getAudioContext = void 0;
          const getAudioContext = element => {
            return new Promise((resolve, reject) => {
              const audioContext = new AudioContext();
              const reader = new FileReader();
              reader.onload = () => {
                const buffer = reader.result;
                audioContext.decodeAudioData(buffer).then(() => {
                  resolve(); // Resolve when decoding is successful
                }).catch(error => {
                  reject(error); // Reject on decoding error
                });
              };
              reader.onerror = error => {
                reject(error); // Reject on file reading error
              };
              reader.readAsArrayBuffer(element); // Start reading the Blob
            });
          };
          exports.getAudioContext = getAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 1792914286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAudio = useAudio;
          var _react = require("react");
          var _getElementContext = require("./get-element-context");
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
            _react.default.useEffect(() => {
              try {
                const isBlob = src instanceof Blob;
                if (!isBlob) {
                  return;
                }
                const audio = new Audio();
                const onLoadMetadata = () => {
                  data.duration = parseFloat(audio.duration.toFixed(2));
                  //@ts-ignore
                  data.fileName = src.name;
                  setData(data);
                  setAudio(audio);
                  (0, _getElementContext.getAudioContext)(src).then(() => {
                    setReady(true);
                  });
                };
                const onError = error => {
                  console.warn('error', error);
                  setError(true);
                };
                audio.addEventListener('loadedmetadata', onLoadMetadata);
                audio.addEventListener('error', onError);
                audio.src = URL.createObjectURL(src);
                audio.load();
                return;
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
        hash: 1486404008,
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
              className: "audio-player__container"
            }, _react.default.createElement(_icons.IconButton, {
              icon: action,
              "data-action": action,
              onClick: onClick
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement(_visualizer.Visualizer, null)), _react.default.createElement(_timer.Timer, null))));
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
        hash: 2365172175,
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
        hash: 2343976179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Visualizer = Visualizer;
          var _react = require("react");
          var _context = require("./context");
          var _wavesurfer = require("wavesurfer.js");
          function Visualizer() {
            const {
              buffer,
              audio
            } = (0, _context.useComponentAudioContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              // const blobUrl = URL.createObjectURL(message.audio);
              const wavesurfer = _wavesurfer.default.create({
                container: ref.current,
                waveColor: '#f0f0f0',
                progressColor: '#007bff',
                barWidth: 2,
                barHeight: 1,
                cursorWidth: 0,
                height: 20,
                normalize: true,
                hideScrollbar: true,
                backend: 'MediaElement',
                // media: blobUrl,
                // Set a bar width
                // Optionally, specify the spacing between bars
                barGap: 1,
                // And the bar radius
                barRadius: 2
                // plugins: [WaveSurfer.cursor.create({ showTime: true })]
              });
              wavesurfer.load(audio.src);
              return () => {
                wavesurfer.destroy();
              };
            }, [{}]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "element",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiZ2V0QXVkaW9Db250ZXh0IiwiZWxlbWVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImJ1ZmZlciIsInJlc3VsdCIsImRlY29kZUF1ZGlvRGF0YSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwiX2dldEVsZW1lbnRDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwic2V0RXJyb3IiLCJyZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiaXNCbG9iIiwiQmxvYiIsIkF1ZGlvIiwib25Mb2FkTWV0YWRhdGEiLCJkdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZmlsZU5hbWUiLCJuYW1lIiwib25FcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvYWQiLCJlIiwibWVzc2FnZSIsIl91c2VBdWRpbyIsIl9pY29ucyIsIl9jb250ZXh0IiwiX3RpbWVyIiwiX3Zpc3VhbGl6ZXIiLCJfcHJlbG9hZCIsIkF1ZGlvUGxheWVyIiwicGxheWluZyIsInNldFBsYXlpbmciLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWQiLCJhY3Rpb25zIiwicGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicGF1c2UiLCJyZXN0YXJ0Iiwib25DbGljayIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmFsdWUiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwiVmlzdWFsaXplciIsIlRpbWVyIiwiZGlzYWJsZWQiLCJQcm9ncmVzc0JhciIsInNldFZhbHVlIiwidGltZVVwZGF0ZUxpc3RlbmVyIiwib25FbmRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNoYW5nZSIsImRlc2lyZWRUaW1lIiwiaSIsImJ1ZmZlcmVkIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJ0eXBlIiwidGl0bGUiLCJtYXgiLCJ0aW1lIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInRpbWVUb1Nob3ciLCJzZXRUaW1lVG9TaG93IiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInJvdW5kIiwib3V0cHV0IiwicHVzaCIsImtleSIsIkZyYWdtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfd2F2ZXN1cmZlciIsIndhdmVzdXJmZXIiLCJjcmVhdGUiLCJjb250YWluZXIiLCJ3YXZlQ29sb3IiLCJwcm9ncmVzc0NvbG9yIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJjdXJzb3JXaWR0aCIsImhlaWdodCIsIm5vcm1hbGl6ZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZW5kIiwiYmFyR2FwIiwiYmFyUmFkaXVzIiwiZGVzdHJveSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9ob29rcy9nZXQtZWxlbWVudC1jb250ZXh0LnRzIiwiL3RzL2hvb2tzL3VzZS1hdWRpby50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3Byb2dyZXNzYmFyLnRzeCIsIi90cy90aW1lci50c3giLCIvSUF1ZGlvSW50ZXJmYWNlLnRzIiwiL3RzL3Zpc3VhbGl6ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFZTyxNQUFNQyxxQkFBcUIsR0FBQUMsT0FBQSxDQUFBRCxxQkFBQSxHQUFHLElBQUFGLE1BQUEsQ0FBQUksYUFBYSxFQUFDLEVBQW1CLENBQUM7VUFDaEUsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTSxJQUFBTCxNQUFBLENBQUFNLFVBQVUsRUFBQ0oscUJBQXFCLENBQUM7VUFBQ0MsT0FBQSxDQUFBRSx3QkFBQSxHQUFBQSx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiekUsTUFBTUUsZUFBZSxHQUFJQyxPQUFhLElBQW1CO1lBQy9ELE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFJO2NBQ3RDLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxZQUFZLEVBQUU7Y0FDdkMsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtjQUUvQkQsTUFBTSxDQUFDRSxNQUFNLEdBQUcsTUFBSztnQkFDcEIsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE1BQXFCO2dCQUMzQ04sWUFBWSxDQUNWTyxlQUFlLENBQUNGLE1BQU0sQ0FBQyxDQUN2QkcsSUFBSSxDQUFDLE1BQUs7a0JBQ1ZWLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ1osQ0FBQyxDQUFDLENBQ0RXLEtBQUssQ0FBQ0MsS0FBSyxJQUFHO2tCQUNkWCxNQUFNLENBQUNXLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQztjQUNKLENBQUM7Y0FFRFIsTUFBTSxDQUFDUyxPQUFPLEdBQUdELEtBQUssSUFBRztnQkFDeEJYLE1BQU0sQ0FBQ1csS0FBSyxDQUFDLENBQUMsQ0FBQztjQUNoQixDQUFDO2NBRURSLE1BQU0s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