System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "react@18.3.1", "@aimpact/agents-api@0.4.1/realtime/widgets/state", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_4 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_6 = _aimpactAgentsApi041RealtimeWidgetsState;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_7 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_8 = _aimpactAgentsApi041RealtimeClientConversation;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/agents-api/realtime/audio/recorder', dependency_4], ['react', dependency_5], ['@aimpact/agents-api/realtime/widgets/state', dependency_6], ['@aimpact/agents-api/realtime/client', dependency_7], ['@aimpact/agents-api/realtime/client/conversation', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyondjs-agents-realtime-console",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console",
        "is": "page",
        "route": "/console"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/agents-api@0.4.1/realtime/console');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1264794352,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _widget = require("./widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _widget.default;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************
      INTERNAL MODULE: ./devices
      *************************/

      ims.set('./devices', {
        hash: 112979781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectDevice = void 0;
          var _recorder = require("@aimpact/agents-api/realtime/audio/recorder");
          var _react = require("react");
          var _state = require("@aimpact/agents-api/realtime/widgets/state");
          const SelectDevice = ({
            client
          }) => {
            const state = new _state.State();
            state.define({
              available: [],
              selected: '',
              fetched: false,
              error: void 0
            });
            const {
              values
            } = state;
            (0, _react.useEffect)(() => {
              _recorder.devices.prepare().then(() => {
                values.available = [..._recorder.devices.values()];
                values.fetched = true;
                select(_recorder.devices.default?.id || '');
              }).catch(exc => {
                console.error(exc);
                values.error = `Error caught looking for devices`;
              });
            }, []);
            const select = id => {
              values.selected = id;
              const device = values.available.find(device => device.id === id);
              client.recorder.device = device;
            };
            const onchange = event => {
              select(event.target.value);
            };
            if (!values.fetched) return null;
            return _react.default.createElement("div", {
              className: "device-selection"
            }, _react.default.createElement("label", {
              htmlFor: "device-select"
            }, "Select Device:"), _react.default.createElement("select", {
              id: "device-select",
              value: values.selected,
              onChange: onchange
            }, values.available.map(device => _react.default.createElement("option", {
              key: device.id,
              value: device.id
            }, device.label))));
          };
          exports.SelectDevice = SelectDevice;
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 3363004562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpeakerIcon = exports.PhoneIcon = exports.MicIcon = void 0;
          var _react = require("react");
          const PhoneIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          }), isOff && _react.default.createElement("line", {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
            stroke: "currentColor",
            strokeWidth: "2"
          }));
          exports.PhoneIcon = PhoneIcon;
          const MicIcon = ({
            isMuted
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
          }), _react.default.createElement("path", {
            d: "M19 10v2a7 7 0 01-14 0v-2"
          }), _react.default.createElement("line", {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23"
          }), _react.default.createElement("line", {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23"
          }), isMuted && _react.default.createElement("line", {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            strokeLinecap: "round"
          }));
          exports.MicIcon = MicIcon;
          const SpeakerIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
          }), _react.default.createElement("path", {
            d: isOff ? '' : 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
          }), isOff && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("line", {
            x1: "23",
            y1: "9",
            x2: "17",
            y2: "15",
            strokeLinecap: "round"
          }), _react.default.createElement("line", {
            x1: "17",
            y1: "9",
            x2: "23",
            y2: "15",
            strokeLinecap: "round"
          })));
          exports.SpeakerIcon = SpeakerIcon;
        }
      });

      /************************
      INTERNAL MODULE: ./widget
      ************************/

      ims.set('./widget', {
        hash: 4207929179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Widget;
          var _react = require("react");
          var _client = require("@aimpact/agents-api/realtime/client");
          var _conversation = require("@aimpact/agents-api/realtime/client/conversation");
          var _state = require("@aimpact/agents-api/realtime/widgets/state");
          var _icons = require("./icons");
          var _devices = require("./devices");
          function Widget() {
            const refs = {
              conversation: (0, _react.useRef)(new _conversation.Conversation('123')),
              client: (0, _react.useRef)(new _client.ClientSession({
                vad: null
              }))
            };
            const state = new _state.State();
            state.define({
              muted: true,
              speaker: false,
              duration: 0
            });
            const {
              values
            } = state;
            const invalidate = (() => {
              const [id, invalidate] = (0, _react.useState)(0);
              return () => invalidate(id + 1);
            })();
            // Set current conversation
            const conversation = refs.conversation.current;
            const client = refs.client.current;
            client.conversation.set(conversation);
            (0, _react.useEffect)(() => {
              console.log('window.client:', client);
              window.client = client;
              client.on('session.open', invalidate);
              client.on('session.created', invalidate);
              client.on('session.ready', invalidate);
              client.on('session.close', invalidate);
              return () => {
                client.off('session.open', invalidate);
                client.off('session.created', invalidate);
                client.off('session.ready', invalidate);
                client.off('session.close', invalidate);
              };
            }, []);
            (0, _react.useEffect)(() => {
              let interval;
              const ready = () => {
                console.warn('ready');
                interval = setInterval(() => values.duration++, 1000);
              };
              const initiate = () => {
                const chatId = `221caa6f-3486-4f27-b554-36ddb4869ca1`;
                console.log('client.update... send: conversation and firebaseToken', chatId);
                const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IjBjYmJiZDI2NjNhY2U4OTU4YTFhOTY4ZmZjNDQxN2U4MDEyYmVmYmUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRsOpbGl4IFRvdmFyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tFR0hwZVJFOGJYT055dXhTQjByUnlNOXJGZnhJZ2xGUVcwdUZOa3lNej1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9haW1wYWN0LXBhcnRuZXJzLXByb2QiLCJhdWQiOiJhaW1wYWN0LXBhcnRuZXJzLXByb2QiLCJhdXRoX3RpbWUiOjE3MzY4ODExNzcsInVzZXJfaWQiOiJZR29PYVN2VTloTzhndHlxVHJaSUZXRGRaTGIyIiwic3ViIjoiWUdvT2FTdlU5aE84Z3R5cVRyWklGV0RkWkxiMiIsImlhdCI6MTc0MDQyNDMyOCwiZXhwIjoxNzQwNDI3OTI4LCJlbWFpbCI6ImZlbGl4QGJleW9uZGpzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTEwNDcxNTE1MzE1OTYzOTg4NjA5Il0sImVtYWlsIjpbImZlbGl4QGJleW9uZGpzLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.Wbmx3NaLyeDFt1W1td5zUC0iSlAYX3lru0eYRlJ0Z_V5UWrMwuyv6JZq_lBt1JmRmJan-PGVEUMWfRqhK2a-C6fdA3y5wpI0xkKkuR4EbsRw3xbR2kvZl4UZkdY4Qki2jpuzvCYJs9qerKhATcSCT1sr6JjBE0ak9O2hCw6Ok3uNTvAF65Lr4lZbQvuYrmAtQf9FZNKF05BCBuFEBF7KN4LGCjuhPACZiwy24zhZVn9LEUEUD6fk-ApGQV2GHQoCaQnvaIprWpsr1spuUKwt-hr0n0ucoZkpB9U9QcVCiDvTps1V3gkPNVwshdEzW8mjnf663moZG-dE7Ap-epgAEQ`;
                // Add error handling
                client.update({
                  conversation: {
                    id: chatId
                  },
                  token
                });
                interval = setInterval(() => values.duration++, 1000);
              };
              const end = () => {
                clearInterval(interval);
                values.duration = 0;
              };
              client.on('session.created', initiate);
              client.on('session.ready', ready);
              client.on('session.close', end);
              return () => {
                end();
                client.off('session.created', initiate);
                client.off('session.ready', ready);
                client.off('session.close', end);
              };
            }, []);
            const mins = Math.floor(values.duration / 60);
            const secs = values.duration % 60;
            const timer = `${mins}:${secs.toString().padStart(2, '0')}`;
            const handlers = {
              call: () => {
                if (client.status === 'closed') {
                  client.connect();
                  invalidate(); // To update calling state to 'connecting'
                }
                if (['open', 'created'].includes(client.status)) {
                  client.close();
                  invalidate(); // To update calling state to 'closing'
                }
              },
              onmic: () => {
                const muted = !values.muted;
                values.muted = muted;
                muted ? client.recorder.stop() : client.recorder.record();
              }
            };
            const {
              status,
              valid
            } = client;
            const active = ['connecting', 'open', 'created'].includes(status);
            if (!valid) {
              const {
                recorder,
                player
              } = client;
              const errors = [];
              if (recorder?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "recorder-error"
                }, "\u2022 Recorder is invalid: ", recorder.error.message));
              }
              if (player?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "player-error"
                }, "\u2022 Audio player is invalid: ", player.error.message));
              }
              return _react.default.createElement("div", {
                className: "phone flex items-center justify-center min-h-screen bg-gray-100"
              }, _react.default.createElement("div", null, "Errors found:"), errors);
            }
            return _react.default.createElement("div", {
              className: "phone flex items-center justify-center min-h-screen bg-gray-100"
            }, _react.default.createElement("div", {
              className: "w-80 bg-white rounded-lg shadow-xl p-6"
            }, _react.default.createElement("div", {
              className: "text-center mb-8"
            }, _react.default.createElement("p", {
              className: "text-gray-500"
            }, status === 'closed' && 'Ready to call', status === 'connecting' && 'Calling.', status === 'open' && 'Calling...', status === 'closing' && 'Hunging up', status === 'created' && timer)), _react.default.createElement("div", {
              className: "grid grid-cols-3 gap-4 mb-6"
            }, _react.default.createElement("button", {
              type: "button",
              "aria-label": "Set mic on/off",
              onClick: handlers.onmic,
              disabled: !active,
              className: `p-4 rounded-full flex items-center justify-center transition-colors ${!active ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : values.muted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            }, _react.default.createElement(_icons.MicIcon, {
              isMuted: values.muted
            })), _react.default.createElement("button", {
              type: "button",
              "aria-label": "Call button",
              onClick: handlers.call,
              className: `p-4 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'}`
            }, _react.default.createElement(_icons.PhoneIcon, {
              isOff: active
            })), _react.default.createElement("button", {
              type: "button",
              "aria-label": "Set speaker on/off",
              onClick: () => values.speaker = !values.speaker,
              disabled: !active,
              className: `p-4 rounded-full flex items-center justify-center transition-colors ${!active ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : values.speaker ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            }, _react.default.createElement(_icons.SpeakerIcon, {
              isOff: !values.speaker
            }))), _react.default.createElement(_devices.SelectDevice, {
              client: client
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfd2lkZ2V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJkZWZhdWx0IiwiZXhwb3J0cyIsIl9yZWNvcmRlciIsIl9yZWFjdCIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsImNsaWVudCIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJhdmFpbGFibGUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJlcnJvciIsInZhbHVlcyIsInVzZUVmZmVjdCIsImRldmljZXMiLCJwcmVwYXJlIiwidGhlbiIsInNlbGVjdCIsImlkIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZGV2aWNlIiwiZmluZCIsInJlY29yZGVyIiwib25jaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJvbkNoYW5nZSIsIm1hcCIsImtleSIsImxhYmVsIiwiUGhvbmVJY29uIiwiaXNPZmYiLCJ2aWV3Qm94Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJNaWNJY29uIiwiaXNNdXRlZCIsInN0cm9rZUxpbmVjYXAiLCJTcGVha2VySWNvbiIsInBvaW50cyIsIkZyYWdtZW50IiwiX2NsaWVudCIsIl9jb252ZXJzYXRpb24iLCJfaWNvbnMiLCJfZGV2aWNlcyIsInJlZnMiLCJjb252ZXJzYXRpb24iLCJ1c2VSZWYiLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJzcGVha2VyIiwiZHVyYXRpb24iLCJpbnZhbGlkYXRlIiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic2V0IiwibG9nIiwid2luZG93Iiwib24iLCJvZmYiLCJpbnRlcnZhbCIsInJlYWR5Iiwid2FybiIsInNldEludGVydmFsIiwiaW5pdGlhdGUiLCJjaGF0SWQiLCJ0b2tlbiIsInVwZGF0ZSIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwic2VjcyIsInRpbWVyIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhhbmRsZXJzIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJpbmNsdWRlcyIsImNsb3NlIiwib25taWMiLCJzdG9wIiwicmVjb3JkIiwidmFsaWQiLCJhY3RpdmUiLCJwbGF5ZXIiLCJlcnJvcnMiLCJwdXNoIiwibWVzc2FnZSIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlcyI6WyIvY29udHJvbGxlci50cyIsIi9kZXZpY2VzLnRzeCIsIi9pY29ucy50c3giLCIvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsT0FBQSxDQUFBSSxPQUFNO1lBQ2Q7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUFLLFNBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQVNPLE1BQU1VLFlBQVksR0FBR0EsQ0FBQztZQUFFQztVQUFNLENBQWlDLEtBQUk7WUFDekUsTUFBTUMsS0FBSyxHQUFrQixJQUFJSCxNQUFBLENBQUFJLEtBQUssRUFBRTtZQUN4Q0QsS0FBSyxDQUFDRSxNQUFNLENBQUM7Y0FBRUMsU0FBUyxFQUFFLEVBQUU7Y0FBRUMsUUFBUSxFQUFFLEVBQUU7Y0FBRUMs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O2NBQ0MrRSxJQUFJLEVBQUMsUUFBUTtjQUFBLGNBQ0YsZ0JBQWdCO2NBQzNCQyxPQUFPLEVBQUVoQixRQUFRLENBQUNNLEtBQUs7Y0FDdkJXLFFBQVEsRUFBRSxDQUFDUCxNQUFNO2NBQ2pCekUsU0FBUyxFQUFFLHVFQUNWLENBQUN5RSxNQUFNLEdBQ0osOENBQThDLEdBQzlDM0YsTUFBTSxDQUFDcUQsS0FBSyxHQUNaLHlCQUF5QixHQUN6Qiw2Q0FDSjtZQUFFLEdBRUZoRSxNQUFBLENBQUFILE9BQUEsQ0FBQStCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQVIsT0FBTztjQUFDQyxPQUFPLEVBQUV0QyxNQUFNLENBQUNxRDtZQUFLLEVBQUksQ0FDMUIsRUFDVGhFLE1BQUEsQ0FBQUgsT0FBQSxDQUFBK0IsYUFBQTtjQUNDK0UsSUFBSSxFQUFDLFFBQVE7Y0FBQSxjQUNGLGFBQWE7Y0FDeEJDLE9BQU8sRUFBRWhCLFFBQVEsQ0FBQ0MsSUFBSTtjQUN0QmhFLFNBQVMsRUFBRSx1RUFDVnlFLE1BQU0sR0FDSCx3Q0FBd0MsR0FDeEMsNENBQ0o7WUFBRSxHQUVGdEcsTUFBQSxDQUFBSCxPQUFBLENBQUErQixhQUFBLENBQUM0QixNQUFBLENBQUFyQixTQUFTO2NBQUNDLEtBQUssRUFBRWtFO1lBQU0sRUFBSSxDQUNwQixFQUNUdEcsTUFBQSxDQUFBSCxPQUFBLENBQUErQixhQUFBO2NBQ0MrRSxJQUFJLEVBQUMsUUFBUTtjQUFBLGNBQ0Ysb0JBQW9CO2NBQy9CQyxPQUFPLEVBQUVBLENBQUEsS0FBT2pHLE1BQU0sQ0FBQ3NELE9BQU8sR0FBRyxDQUFDdEQsTUFBTSxDQUFDc0QsT0FBUTtjQUNqRDRDLFFBQVEsRUFBRSxDQUFDUCxNQUFNO2NBQ2pCekUsU0FBUyxFQUFFLHVFQUNWLENBQUN5RSxNQUFNLEdBQ0osOENBQThDLEdBQzlDM0YsTUFBTSxDQUFDc0QsT0FBTyxHQUNkLDJCQUEyQixHQUMzQiw2Q0FDSjtZQUFFLEdBRUZqRSxNQUFBLENBQUFILE9BQUEsQ0FBQStCLGFBQUEsQ0FBQzRCLE1BQUEsQ0FBQUwsV0FBVztjQUFDZixLQUFLLEVBQUUsQ0FBQ3pCLE1BQU0sQ0FBQ3NEO1lBQU8sRUFBSSxDQUMvQixDQUNKLEVBRU5qRSxNQUFBLENBQUFILE9BQUEsQ0FBQStCLGFBQUEsQ0FBQzZCLFFBQUEsQ0FBQXZELFlBQVk7Y0FBQ0MsTUFBTSxFQUFFQTtZQUFNLEVBQWlCLENBQ3hDLENBQ0Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==