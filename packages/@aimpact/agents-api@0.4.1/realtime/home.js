System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/agents-api@0.4.1/realtime/channel"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_4 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAgentsApi041RealtimeChannel) {
      dependency_5 = _aimpactAgentsApi041RealtimeChannel;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/agents-api/realtime/channel', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "realtime-home-page",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/home",
        "is": "page",
        "route": "/realtime-home"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/agents-api@0.4.1/realtime/home');
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./actions-panel
      *******************************/
      ims.set('./actions-panel', {
        hash: 434956266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionsPanel = ActionsPanel;
          var React = require("react");
          function ActionsPanel({
            isConnected,
            canPushToTalk,
            isRecording,
            connectConversation,
            disconnectConversation,
            startRecording,
            stopRecording
          }) {
            return React.createElement("div", {
              className: "content-actions"
            }, isConnected && canPushToTalk && React.createElement("button", {
              onMouseDown: startRecording,
              onMouseUp: stopRecording,
              className: isRecording ? 'alert' : 'regular'
            }, isRecording ? 'release to send' : 'push to talk'), React.createElement("div", {
              className: "spacer"
            }), React.createElement("button", {
              onClick: isConnected ? disconnectConversation : connectConversation,
              className: isConnected ? 'regular' : 'action'
            }, isConnected ? 'disconnect' : 'connect'));
          }
        }
      });

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

      /**********************************
      INTERNAL MODULE: ./conversation-log
      **********************************/

      ims.set('./conversation-log', {
        hash: 451772902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationLog = ConversationLog;
          var React = require("react");
          function ConversationLog({
            items,
            deleteItem
          }) {
            return React.createElement("div", {
              className: "content-block conversation"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "conversation"), React.createElement("div", {
              className: "content-block-body",
              "data-conversation-content": true
            }, !items.length && `awaiting connection...`, items.map(conversationItem => React.createElement("div", {
              className: "conversation-item",
              key: conversationItem.id
            }, React.createElement("div", {
              className: `speaker ${conversationItem.role || ''}`
            }, React.createElement("div", null, (conversationItem.role || conversationItem.type).replaceAll('_', ' ')), React.createElement("div", {
              className: "close",
              onClick: () => deleteItem(conversationItem.id)
            }, "X")), React.createElement("div", {
              className: `speaker-content`
            }, conversationItem.formatted.output && React.createElement("div", null, conversationItem.formatted.output), conversationItem.formatted.tool && React.createElement("div", null, conversationItem.formatted.tool.name, "(", conversationItem.formatted.tool.arguments, ")"), conversationItem.formatted.transcript && React.createElement("div", null, conversationItem.formatted.transcript), conversationItem.formatted.file && React.createElement("audio", {
              src: conversationItem.formatted.file.url,
              controls: true
            }))))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./events-log
      ****************************/

      ims.set('./events-log', {
        hash: 4150742591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EventsLog = EventsLog;
          var React = require("react");
          function EventsLog({
            events,
            expandedEvents,
            setExpandedEvents
          }) {
            return React.createElement("div", {
              className: "content-block events"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "events"), React.createElement("div", {
              className: "content-block-body"
            }, !events.length && `awaiting connection...`, events.map(event => {
              const isExpanded = !!expandedEvents[event.event_id];
              return React.createElement("div", {
                className: "event",
                key: event.event_id
              }, React.createElement("div", {
                className: "event-summary",
                onClick: () => {
                  setExpandedEvents(expanded => ({
                    ...expanded,
                    [event.event_id]: !isExpanded
                  }));
                }
              }, React.createElement("span", null, event.source, " - ", event.type)), isExpanded && React.createElement("div", {
                className: "event-details"
              }, JSON.stringify(event, null, 2)));
            })));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1313151065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          function Header({
            apiKey,
            resetAPIKey
          }) {
            return React.createElement("div", {
              className: "content-top"
            }, React.createElement("div", {
              className: "content-title"
            }, React.createElement("img", {
              src: "/openai-logomark.svg",
              alt: "OpenAI Logo"
            }), React.createElement("span", null, "Realtime Console")), React.createElement("div", {
              className: "content-api-key"
            }, React.createElement("button", {
              onClick: resetAPIKey
            }, "API Key: ", apiKey.slice(0, 3), "...")));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./memory-panel
      ******************************/

      ims.set('./memory-panel', {
        hash: 2416437136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MemoryPanel = MemoryPanel;
          var React = require("react");
          function MemoryPanel({
            memoryKv
          }) {
            return React.createElement("div", {
              className: "content-block kv"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "set_memory()"), React.createElement("div", {
              className: "content-block-body content-kv"
            }, JSON.stringify(memoryKv, null, 2)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./weather-panel
      *******************************/

      ims.set('./weather-panel', {
        hash: 1557191404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WeatherPanel = WeatherPanel;
          var React = require("react");
          function WeatherPanel({
            coords,
            marker
          }) {
            return React.createElement("div", {
              className: "content-block map"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "get_weather()"), React.createElement("div", {
              className: "content-block-body"
            }, React.createElement("p", null, "Latitude: ", coords.lat), React.createElement("p", null, "Longitude: ", coords.lng), marker && React.createElement("div", null, React.createElement("p", null, "Location: ", marker.location || 'N/A'), marker.temperature && React.createElement("p", null, "Temperature: ", marker.temperature.value, " ", marker.temperature.units), marker.wind_speed && React.createElement("p", null, "Wind Speed: ", marker.wind_speed.value, " ", marker.wind_speed.units))));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./widget
      ************************/

      ims.set('./widget', {
        hash: 2315923907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _index = require("../lib/wavtools/index.js");
          var _header = require("./header");
          var _eventsLog = require("./events-log");
          var _conversationLog = require("./conversation-log");
          var _actionsPanel = require("./actions-panel");
          var _weatherPanel = require("./weather-panel");
          var _memoryPanel = require("./memory-panel");
          const {
            useRef,
            useState,
            useEffect,
            useCallback
          } = React;
          const apiKey = localStorage.getItem('openai-key');
          const channel = new _channel.Channel({
            apiKey,
            dangerouslyAllowAPIKeyInBrowser: true
          });
          channel.connect();
          const Widget = () => {
            const LOCAL_RELAY_SERVER_URL = process.env.REACT_APP_LOCAL_RELAY_SERVER_URL || '';
            const [apiKey, setApiKey] = useState(LOCAL_RELAY_SERVER_URL ? '' : localStorage.getItem('tmp::voice_api_key') || prompt('OpenAI API Key') || '');
            const wavRecorderRef = useRef(new _index.WavRecorder({
              sampleRate: 24000
            }));
            const wavStreamPlayerRef = useRef(new _index.WavStreamPlayer({
              sampleRate: 24000
            }));
            const clientRef = useRef(new RealtimeClient(LOCAL_RELAY_SERVER_URL ? {
              url: LOCAL_RELAY_SERVER_URL
            } : {
              apiKey: apiKey,
              dangerouslyAllowAPIKeyInBrowser: true
            }));
            const [items, setItems] = useState([]);
            const [realtimeEvents, setRealtimeEvents] = useState([]);
            const [expandedEvents, setExpandedEvents] = useState({});
            const [isConnected, setIsConnected] = useState(false);
            const [canPushToTalk, setCanPushToTalk] = useState(true);
            const [isRecording, setIsRecording] = useState(false);
            const [memoryKv, setMemoryKv] = useState({});
            const [coords, setCoords] = useState({
              lat: 37.775593,
              lng: -122.418137
            });
            const [marker, setMarker] = useState(null);
            useEffect(() => {
              if (apiKey) {
                localStorage.setItem('tmp::voice_api_key', apiKey);
              }
            }, [apiKey]);
            const connectConversation = useCallback(async () => {
              const client = clientRef.current;
              const wavRecorder = wavRecorderRef.current;
              const wavStreamPlayer = wavStreamPlayerRef.current;
              setIsConnected(true);
              setRealtimeEvents([]);
              setItems(client.conversation.getItems());
              await wavRecorder.begin();
              await wavStreamPlayer.connect();
              await client.connect();
              client.sendUserMessageContent([{
                type: `input_text`,
                text: `Hello!`
              }]);
            }, []);
            const disconnectConversation = useCallback(async () => {
              setIsConnected(false);
              setRealtimeEvents([]);
              setItems([]);
              setMemoryKv({});
              setCoords({
                lat: 37.775593,
                lng: -122.418137
              });
              setMarker(null);
              const client = clientRef.current;
              client.disconnect();
              const wavRecorder = wavRecorderRef.current;
              await wavRecorder.end();
              const wavStreamPlayer = wavStreamPlayerRef.current;
              await wavStreamPlayer.interrupt();
            }, []);
            const resetAPIKey = useCallback(() => {
              const newApiKey = prompt('OpenAI API Key');
              if (newApiKey !== null) {
                localStorage.clear();
                setApiKey(newApiKey);
                window.location.reload();
              }
            }, []);
            return React.createElement("div", {
              "data-component": "ConsolePage"
            }, React.createElement(_header.Header, {
              apiKey: apiKey,
              resetAPIKey: resetAPIKey
            }), React.createElement("div", {
              className: "content-main"
            }, React.createElement("div", {
              className: "content-logs"
            }, React.createElement(_eventsLog.EventsLog, {
              events: realtimeEvents,
              expandedEvents: expandedEvents,
              setExpandedEvents: setExpandedEvents
            }), React.createElement(_conversationLog.ConversationLog, {
              items: items,
              deleteItem: id => clientRef.current.deleteItem(id)
            }), React.createElement(_actionsPanel.ActionsPanel, {
              isConnected: isConnected,
              canPushToTalk: canPushToTalk,
              isRecording: isRecording,
              connectConversation: connectConversation,
              disconnectConversation: disconnectConversation,
              startRecording: () => setIsRecording(true),
              stopRecording: () => setIsRecording(false)
            })), React.createElement("div", {
              className: "content-right"
            }, React.createElement(_weatherPanel.WeatherPanel, {
              coords: coords,
              marker: marker
            }), React.createElement(_memoryPanel.MemoryPanel, {
              memoryKv: memoryKv
            }))));
          };
          var _default = exports.default = Widget;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBY3Rpb25zUGFuZWwiLCJpc0Nvbm5lY3RlZCIsImNhblB1c2hUb1RhbGsiLCJpc1JlY29yZGluZyIsImNvbm5lY3RDb252ZXJzYXRpb24iLCJkaXNjb25uZWN0Q29udmVyc2F0aW9uIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25DbGljayIsIl9wYWdlIiwiX3dpZGdldCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiZGVmYXVsdCIsImV4cG9ydHMiLCJDb252ZXJzYXRpb25Mb2ciLCJpdGVtcyIsImRlbGV0ZUl0ZW0iLCJsZW5ndGgiLCJtYXAiLCJjb252ZXJzYXRpb25JdGVtIiwia2V5IiwiaWQiLCJyb2xlIiwidHlwZSIsInJlcGxhY2VBbGwiLCJmb3JtYXR0ZWQiLCJvdXRwdXQiLCJ0b29sIiwibmFtZSIsImFyZ3VtZW50cyIsInRyYW5zY3JpcHQiLCJmaWxlIiwic3JjIiwidXJsIiwiY29udHJvbHMiLCJFdmVudHNMb2ciLCJldmVudHMiLCJleHBhbmRlZEV2ZW50cyIsInNldEV4cGFuZGVkRXZlbnRzIiwiZXZlbnQiLCJpc0V4cGFuZGVkIiwiZXZlbnRfaWQiLCJleHBhbmRlZCIsInNvdXJjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJIZWFkZXIiLCJhcGlLZXkiLCJyZXNldEFQSUtleSIsImFsdCIsInNsaWNlIiwiTWVtb3J5UGFuZWwiLCJtZW1vcnlLdiIsIldlYXRoZXJQYW5lbCIsImNvb3JkcyIsIm1hcmtlciIsImxhdCIsImxuZyIsImxvY2F0aW9uIiwidGVtcGVyYXR1cmUiLCJ2YWx1ZSIsInVuaXRzIiwid2luZF9zcGVlZCIsIl9jaGFubmVsIiwiX2luZGV4IiwiX2hlYWRlciIsIl9ldmVudHNMb2ciLCJfY29udmVyc2F0aW9uTG9nIiwiX2FjdGlvbnNQYW5lbCIsIl93ZWF0aGVyUGFuZWwiLCJfbWVtb3J5UGFuZWwiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5uZWwiLCJDaGFubmVsIiwiZGFuZ2Vyb3VzbHlBbGxvd0FQSUtleUluQnJvd3NlciIsImNvbm5lY3QiLCJMT0NBTF9SRUxBWV9TRVJWRVJfVVJMIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9MT0NBTF9SRUxBWV9TRVJWRVJfVVJMIiwic2V0QXBpS2V5IiwicHJvbXB0Iiwid2F2UmVjb3JkZXJSZWYiLCJXYXZSZWNvcmRlciIsInNhbXBsZVJhdGUiLCJ3YXZTdHJlYW1QbGF5ZXJSZWYiLCJXYXZTdHJlYW1QbGF5ZXIiLCJjbGllbnRSZWYiLCJSZWFsdGltZUNsaWVudCIsInNldEl0ZW1zIiwicmVhbHRpbWVFdmVudHMiLCJzZXRSZWFsdGltZUV2ZW50cyIsInNldElzQ29ubmVjdGVkIiwic2V0Q2FuUHVzaFRvVGFsayIsInNldElzUmVjb3JkaW5nIiwic2V0TWVtb3J5S3YiLCJzZXRDb29yZHMiLCJzZXRNYXJrZXIiLCJzZXRJdGVtIiwiY2xpZW50IiwiY3VycmVudCIsIndhdlJlY29yZGVyIiwid2F2U3RyZWFtUGxheWVyIiwiY29udmVyc2F0aW9uIiwiZ2V0SXRlbXMiLCJiZWdpbiIsInNlbmRVc2VyTWVzc2FnZUNvbnRlbnQiLCJ0ZXh0IiwiZGlzY29ubmVjdCIsImVuZCIsImludGVycnVwdCIsIm5ld0FwaUtleSIsImNsZWFyIiwid2luZG93IiwicmVsb2FkIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIvYWN0aW9ucy1wYW5lbC50c3giLCIvY29udHJvbGxlci50cyIsIi9jb252ZXJzYXRpb24tbG9nLnRzeCIsIi9ldmVudHMtbG9nLnRzeCIsIi9oZWFkZXIudHN4IiwiL21lbW9yeS1wYW5lbC50c3giLCIvd2VhdGhlci1wYW5lbC50c3giLCIvd2lkZ2V0LnRzeCJdLCJzb3VyY2Vz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