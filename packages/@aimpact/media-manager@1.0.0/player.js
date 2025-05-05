System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/player"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@1.0.0/player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3146932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /*bundle*/
          function AudioPlayer({
            src
          }) {
            const canPlayType = new Audio().canPlayType(src.type);
            const [data, setData] = React.useState({
              uri: undefined,
              type: undefined
            });
            const ref = React.useRef(null);
            const updateState = async () => {
              const audioElement = ref.current;
              try {
                audioElement.load(); // Load the audio file
                audioElement.play(); // Play the audio
              } catch (e) {}
            };
            React.useEffect(() => {
              let reader = new FileReader();
              reader.onload = e => {
                let base64URL = e.target.result;
                let BlobType = src.type.includes(';') ? src.type.substr(0, src.type.indexOf(';')) : src.type;
                setData({
                  uri: base64URL,
                  type: BlobType
                });
                setTimeout(() => {
                  updateState();
                }, 1000);
              };
              reader.readAsDataURL(src);
            }, []);
            const {
              uri,
              type
            } = data;
            return React.createElement("div", {
              className: "audio-player"
            }, React.createElement("audio", {
              controls: true,
              preload: "metadata",
              ref: ref
            }, React.createElement("source", {
              src: uri,
              type: type
            }), "Your browser does not support the audio element."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./control').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBdWRpb1BsYXllciIsInNyYyIsImNhblBsYXlUeXBlIiwiQXVkaW8iLCJ0eXBlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVyaSIsInVuZGVmaW5lZCIsInJlZiIsInVzZVJlZiIsInVwZGF0ZVN0YXRlIiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsImxvYWQiLCJwbGF5IiwiZSIsInVzZUVmZmVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJiYXNlNjRVUkwiLCJ0YXJnZXQiLCJyZXN1bHQiLCJCbG9iVHlwZSIsImluY2x1ZGVzIiwic3Vic3RyIiwiaW5kZXhPZiIsInNldFRpbWVvdXQiLCJyZWFkQXNEYXRhVVJMIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRyb2xzIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsV0FBV0EsQ0FBQztZQUFDQztVQUFHLENBQUM7WUFDM0MsTUFBTUMsV0FBVyxHQUFHLElBQUlDLEtBQUssRUFBRSxDQUFDRCxXQUFXLENBQUNELEdBQUcsQ0FBQ0csSUFBSSxDQUFDO1lBRXJELE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLENBQUM7Y0FBQ0MsR0FBRyxFQUFFQyxTQUFTO2NBQUVMLElBQUksRUFBRUs7WUFBUyxDQUFDLENBQUM7WUFFekUsTUFBTUMsR0FBRyxHQUFHWixLQUFLLENBQUNhLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIsTUFBTUMsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM5QixNQUFNQyxZQUFZLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUNoQyxJQUFJO2dCQUNIRCxZQUFZLENBQUNFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3JCRixZQUFZLENBQUNHLElBQUksRUFBRSxDQUFDLENBQUM7ZUFDckIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7WUFDYixDQUFDO1lBRURuQixLQUFLLENBQUNvQixTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBVSxFQUFFO2NBQzdCRCxNQUFNLENBQUNFLE1BQU0sR0FBR0osQ0FBQyxJQUFHO2dCQUNuQixJQUFJSyxTQUFTLEdBQUdMLENBQUMsQ0FBQ00sTUFBTSxDQUFDQyxNQUFNO2dCQUMvQixJQUFJQyxRQUFRLEdBQUd4QixHQUFHLENBQUNHLElBQUksQ0FBQ3NCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBR3pCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDdUIsTUFBTSxDQUFDLENBQUMsRUFBRTFCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDd0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUczQixHQUFHLENBQUNHLElBQUk7Z0JBQzVGRSxPQUFPLENBQUM7a0JBQUNFLEdBQUcsRUFBRWMsU0FBUztrQkFBRWxCLElBQUksRUFBRXFCO2dCQUFRLENBQUMsQ0FBQztnQkFDekNJLFVBQVUsQ0FBQyxNQUFLO2tCQUNmakIsV0FBVyxFQUFFO2dCQUNkLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDVCxDQUFDO2NBRURPLE1BQU0sQ0FBQ1csYUFBYSxDQUFDN0IsR0FBRyxDQUFDO1lBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNO2NBQUNPLEdBQUc7Y0FBRUo7WUFBSSxDQUFDLEdBQUdDLElBQUk7WUFFeEIsT0FDQ1AsS0FBQSxDQUFBaUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QmxDLEtBQUEsQ0FBQWlDLGFBQUE7Y0FBT0UsUUFBUTtjQUFDQyxPQUFPLEVBQUMsVUFBVTtjQUFDeEIsR0FBRyxFQUFFQTtZQUFHLEdBQzFDWixLQUFBLENBQUFpQyxhQUFBO2NBQVE5QixHQUFHLEVBQUVPLEdBQUc7Y0FBRUosSUFBSSxFQUFFQTtZQUFJLEVBQUksRSxtREFFekIsQ0FDSDtVQUVSIiwiaWdub3JlTGlzdCI6W119