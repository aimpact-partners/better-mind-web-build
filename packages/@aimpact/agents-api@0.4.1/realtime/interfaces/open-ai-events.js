System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, IConversationItemCreateClientEvent, IConversationItemDeleteClientEvent, IConversationItemTruncateClientEvent, IInputAudioBufferAppendClientEvent, IInputAudioBufferClearClientEvent, IInputAudioBufferCommitClientEvent, IResponseCancelClientEvent, IResponseCreateClientEvent, ISessionUpdateClientEvent, IConversationCreatedServerEvent, IConversationItemCreatedServerEvent, IConversationItemDeletedServerEvent, IConversationInputAudioTranscriptionCompletedServerEvent, IConversationInputAudioTranscriptionFailedServerEvent, IConversationItemTruncatedServerEvent, IServerError, IErrorServerEvent, IInputAudioBufferClearedServerEvent, IInputAudioBufferCommitedServerEvent, IInputAudioBufferSpeechStartedServerEvent, IInputAudioBufferSpeechStoppedServerEvent, IResponseAudioTranscriptDeltaServerEvent, IResponseAudioTranscriptDoneServerEvent, IResponseAudioDeltaServerEvent, IResponseAudioDoneServerEvent, IResponseContentPartAddedServerEvent, IResponseContentPartDoneServerEvent, IPart, IResponseCreatedServerEvent, IResponseDoneStatus, IResponseDoneServerEvent, IResponseFunctionCallArgumentsDeltaServerEvent, IResponseAudioContentPartDoneServerEvent, IResponseOutputItemAddedServerEvent, IResponseOutputItemDoneServerEvent, IResponseRateLimitsUpdatedServerEvent, IRealtimeResponse, IResponseTextDeltaServerEvent, IResponseTextDoneServerEvent, ISessionCreatedServerEvent, ISessionUpdatedServerEvent, AudioFormatType, AudioTranscriptionsType, IInputAudioTranscription, ISessionConfig, ISession, IToolParameterType, ITool, ToolChoiceType, ITurnDetectionServer, VoicesType, __beyond_pkg, hmr;
  _export({
    IConversationItemCreateClientEvent: void 0,
    IConversationItemDeleteClientEvent: void 0,
    IConversationItemTruncateClientEvent: void 0,
    IInputAudioBufferAppendClientEvent: void 0,
    IInputAudioBufferClearClientEvent: void 0,
    IInputAudioBufferCommitClientEvent: void 0,
    IResponseCancelClientEvent: void 0,
    IResponseCreateClientEvent: void 0,
    ISessionUpdateClientEvent: void 0,
    IConversationCreatedServerEvent: void 0,
    IConversationItemCreatedServerEvent: void 0,
    IConversationItemDeletedServerEvent: void 0,
    IConversationInputAudioTranscriptionCompletedServerEvent: void 0,
    IConversationInputAudioTranscriptionFailedServerEvent: void 0,
    IConversationItemTruncatedServerEvent: void 0,
    IServerError: void 0,
    IErrorServerEvent: void 0,
    IInputAudioBufferClearedServerEvent: void 0,
    IInputAudioBufferCommitedServerEvent: void 0,
    IInputAudioBufferSpeechStartedServerEvent: void 0,
    IInputAudioBufferSpeechStoppedServerEvent: void 0,
    IResponseAudioTranscriptDeltaServerEvent: void 0,
    IResponseAudioTranscriptDoneServerEvent: void 0,
    IResponseAudioDeltaServerEvent: void 0,
    IResponseAudioDoneServerEvent: void 0,
    IResponseContentPartAddedServerEvent: void 0,
    IResponseContentPartDoneServerEvent: void 0,
    IPart: void 0,
    IResponseCreatedServerEvent: void 0,
    IResponseDoneStatus: void 0,
    IResponseDoneServerEvent: void 0,
    IResponseFunctionCallArgumentsDeltaServerEvent: void 0,
    IResponseAudioContentPartDoneServerEvent: void 0,
    IResponseOutputItemAddedServerEvent: void 0,
    IResponseOutputItemDoneServerEvent: void 0,
    IResponseRateLimitsUpdatedServerEvent: void 0,
    IRealtimeResponse: void 0,
    IResponseTextDeltaServerEvent: void 0,
    IResponseTextDoneServerEvent: void 0,
    ISessionCreatedServerEvent: void 0,
    ISessionUpdatedServerEvent: void 0,
    AudioFormatType: void 0,
    AudioTranscriptionsType: void 0,
    IInputAudioTranscription: void 0,
    ISessionConfig: void 0,
    ISession: void 0,
    IToolParameterType: void 0,
    ITool: void 0,
    ToolChoiceType: void 0,
    ITurnDetectionServer: void 0,
    VoicesType: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/interfaces/open-ai-events"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*************************************************
      INTERNAL MODULE: ./client/conversation-item/create
      *************************************************/
      ims.set('./client/conversation-item/create', {
        hash: 2819305008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************************
      INTERNAL MODULE: ./client/conversation-item/delete
      *************************************************/

      ims.set('./client/conversation-item/delete', {
        hash: 3948034841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./client/conversation-item/truncate
      ***************************************************/

      ims.set('./client/conversation-item/truncate', {
        hash: 3532888505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./client/input-audio-buffer/append
      **************************************************/

      ims.set('./client/input-audio-buffer/append', {
        hash: 924647667,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*************************************************
      INTERNAL MODULE: ./client/input-audio-buffer/clear
      *************************************************/

      ims.set('./client/input-audio-buffer/clear', {
        hash: 3562144688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./client/input-audio-buffer/commit
      **************************************************/

      ims.set('./client/input-audio-buffer/commit', {
        hash: 1736272133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./client/response/cancel
      ****************************************/

      ims.set('./client/response/cancel', {
        hash: 4126508534,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./client/response/create
      ****************************************/

      ims.set('./client/response/create', {
        hash: 2565392412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./client/session/update
      ***************************************/

      ims.set('./client/session/update', {
        hash: 2203575676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************************
      INTERNAL MODULE: ./server/conversation/created
      *********************************************/

      ims.set('./server/conversation/created', {
        hash: 1904633262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./server/conversation/item/created
      **************************************************/

      ims.set('./server/conversation/item/created', {
        hash: 73436464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./server/conversation/item/deleted
      **************************************************/

      ims.set('./server/conversation/item/deleted', {
        hash: 3448134367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************************************************
      INTERNAL MODULE: ./server/conversation/item/input-audio-transcription/completed
      ******************************************************************************/

      ims.set('./server/conversation/item/input-audio-transcription/completed', {
        hash: 2787499714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************************************
      INTERNAL MODULE: ./server/conversation/item/input-audio-transcription/failed
      ***************************************************************************/

      ims.set('./server/conversation/item/input-audio-transcription/failed', {
        hash: 2954646481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************************
      INTERNAL MODULE: ./server/conversation/item/truncated
      ****************************************************/

      ims.set('./server/conversation/item/truncated', {
        hash: 3534116456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./server/error
      ******************************/

      ims.set('./server/error', {
        hash: 1760196846,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./server/input-audio-buffer/cleared
      ***************************************************/

      ims.set('./server/input-audio-buffer/cleared', {
        hash: 3621838154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************************
      INTERNAL MODULE: ./server/input-audio-buffer/commited
      ****************************************************/

      ims.set('./server/input-audio-buffer/commited', {
        hash: 1780928838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./server/input-audio-buffer/speech-started
      **********************************************************/

      ims.set('./server/input-audio-buffer/speech-started', {
        hash: 3109853039,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./server/input-audio-buffer/speech-stoped
      *********************************************************/

      ims.set('./server/input-audio-buffer/speech-stoped', {
        hash: 305086616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************************
      INTERNAL MODULE: ./server/response/audio-transcript/delta
      ********************************************************/

      ims.set('./server/response/audio-transcript/delta', {
        hash: 368585261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./server/response/audio-transcript/done
      *******************************************************/

      ims.set('./server/response/audio-transcript/done', {
        hash: 2365517316,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************************
      INTERNAL MODULE: ./server/response/audio/delta
      *********************************************/

      ims.set('./server/response/audio/delta', {
        hash: 341216478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./server/response/audio/done
      ********************************************/

      ims.set('./server/response/audio/done', {
        hash: 2151104553,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************************
      INTERNAL MODULE: ./server/response/content-part/added
      ****************************************************/

      ims.set('./server/response/content-part/added', {
        hash: 2138046728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./server/response/content-part/done
      ***************************************************/

      ims.set('./server/response/content-part/done', {
        hash: 3254091391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./server/response/content-part/part
      ***************************************************/

      ims.set('./server/response/content-part/part', {
        hash: 2896321740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./server/response/created
      *****************************************/

      ims.set('./server/response/created', {
        hash: 2746576214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./server/response/done
      **************************************/

      ims.set('./server/response/done', {
        hash: 2985593510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************************
      INTERNAL MODULE: ./server/response/function-call-arguments/delta
      ***************************************************************/

      ims.set('./server/response/function-call-arguments/delta', {
        hash: 307763516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./server/response/function-call-arguments/done
      **************************************************************/

      ims.set('./server/response/function-call-arguments/done', {
        hash: 3467949105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************************
      INTERNAL MODULE: ./server/response/output-item/added
      ***************************************************/

      ims.set('./server/response/output-item/added', {
        hash: 3101929426,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************************
      INTERNAL MODULE: ./server/response/output-item/done
      **************************************************/

      ims.set('./server/response/output-item/done', {
        hash: 1823719638,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./server/response/rate-limits/updated
      *****************************************************/

      ims.set('./server/response/rate-limits/updated', {
        hash: 1650609227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./server/response/response
      ******************************************/

      ims.set('./server/response/response', {
        hash: 3330117283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./server/response/text/delta
      ********************************************/

      ims.set('./server/response/text/delta', {
        hash: 2421401967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************
      INTERNAL MODULE: ./server/response/text/done
      *******************************************/

      ims.set('./server/response/text/done', {
        hash: 3386823616,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./server/session/created
      ****************************************/

      ims.set('./server/session/created', {
        hash: 3604506856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./server/session/updated
      ****************************************/

      ims.set('./server/session/updated', {
        hash: 3872813490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./session/audio-format
      **************************************/

      ims.set('./session/audio-format', {
        hash: 2403435874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************************
      INTERNAL MODULE: ./session/audio-transcription
      *********************************************/

      ims.set('./session/audio-transcription', {
        hash: 763776817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./session/index
      *******************************/

      ims.set('./session/index', {
        hash: 3249782612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./session/tool
      ******************************/

      ims.set('./session/tool', {
        hash: 3811653292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./session/turn-detection
      ****************************************/

      ims.set('./session/turn-detection', {
        hash: 2513273311,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./session/voices
      ********************************/

      ims.set('./session/voices', {
        hash: 2653567110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./client/conversation-item/create",
        "from": "IConversationItemCreateClientEvent",
        "name": "IConversationItemCreateClientEvent"
      }, {
        "im": "./client/conversation-item/delete",
        "from": "IConversationItemDeleteClientEvent",
        "name": "IConversationItemDeleteClientEvent"
      }, {
        "im": "./client/conversation-item/truncate",
        "from": "IConversationItemTruncateClientEvent",
        "name": "IConversationItemTruncateClientEvent"
      }, {
        "im": "./client/input-audio-buffer/append",
        "from": "IInputAudioBufferAppendClientEvent",
        "name": "IInputAudioBufferAppendClientEvent"
      }, {
        "im": "./client/input-audio-buffer/clear",
        "from": "IInputAudioBufferClearClientEvent",
        "name": "IInputAudioBufferClearClientEvent"
      }, {
        "im": "./client/input-audio-buffer/commit",
        "from": "IInputAudioBufferCommitClientEvent",
        "name": "IInputAudioBufferCommitClientEvent"
      }, {
        "im": "./client/response/cancel",
        "from": "IResponseCancelClientEvent",
        "name": "IResponseCancelClientEvent"
      }, {
        "im": "./client/response/create",
        "from": "IResponseCreateClientEvent",
        "name": "IResponseCreateClientEvent"
      }, {
        "im": "./client/session/update",
        "from": "ISessionUpdateClientEvent",
        "name": "ISessionUpdateClientEvent"
      }, {
        "im": "./server/conversation/created",
        "from": "IConversationCreatedServerEvent",
        "name": "IConversationCreatedServerEvent"
      }, {
        "im": "./server/conversation/item/created",
        "from": "IConversationItemCreatedServerEvent",
        "name": "IConversationItemCreatedServerEvent"
      }, {
        "im": "./server/conversation/item/deleted",
        "from": "IConversationItemDeletedServerEvent",
        "name": "IConversationItemDeletedServerEvent"
      }, {
        "im": "./server/conversation/item/input-audio-transcription/completed",
        "from": "IConversationInputAudioTranscriptionCompletedServerEvent",
        "name": "IConversationInputAudioTranscriptionCompletedServerEvent"
      }, {
        "im": "./server/conversation/item/input-audio-transcription/failed",
        "from": "IConversationInputAudioTranscriptionFailedServerEvent",
        "name": "IConversationInputAudioTranscriptionFailedServerEvent"
      }, {
        "im": "./server/conversation/item/truncated",
        "from": "IConversationItemTruncatedServerEvent",
        "name": "IConversationItemTruncatedServerEvent"
      }, {
        "im": "./server/error",
        "from": "IServerError",
        "name": "IServerError"
      }, {
        "im": "./server/error",
        "from": "IErrorServerEvent",
        "name": "IErrorServerEvent"
      }, {
        "im": "./server/input-audio-buffer/cleared",
        "from": "IInputAudioBufferClearedServerEvent",
        "name": "IInputAudioBufferClearedServerEvent"
      }, {
        "im": "./server/input-audio-buffer/commited",
        "from": "IInputAudioBufferCommitedServerEvent",
        "name": "IInputAudioBufferCommitedServerEvent"
      }, {
        "im": "./server/input-audio-buffer/speech-started",
        "from": "IInputAudioBufferSpeechStartedServerEvent",
        "name": "IInputAudioBufferSpeechStartedServerEvent"
      }, {
        "im": "./server/input-audio-buffer/speech-stoped",
        "from": "IInputAudioBufferSpeechStoppedServerEvent",
        "name": "IInputAudioBufferSpeechStoppedServerEvent"
      }, {
        "im": "./server/response/audio-transcript/delta",
        "from": "IResponseAudioTranscriptDeltaServerEvent",
        "name": "IResponseAudioTranscriptDeltaServerEvent"
      }, {
        "im": "./server/response/audio-transcript/done",
        "from": "IResponseAudioTranscriptDoneServerEvent",
        "name": "IResponseAudioTranscriptDoneServerEvent"
      }, {
        "im": "./server/response/audio/delta",
        "from": "IResponseAudioDeltaServerEvent",
        "name": "IResponseAudioDeltaServerEvent"
      }, {
        "im": "./server/response/audio/done",
        "from": "IResponseAudioDoneServerEvent",
        "name": "IResponseAudioDoneServerEvent"
      }, {
        "im": "./server/response/content-part/added",
        "from": "IResponseContentPartAddedServerEvent",
        "name": "IResponseContentPartAddedServerEvent"
      }, {
        "im": "./server/response/content-part/done",
        "from": "IResponseContentPartDoneServerEvent",
        "name": "IResponseContentPartDoneServerEvent"
      }, {
        "im": "./server/response/content-part/part",
        "from": "IPart",
        "name": "IPart"
      }, {
        "im": "./server/response/created",
        "from": "IResponseCreatedServerEvent",
        "name": "IResponseCreatedServerEvent"
      }, {
        "im": "./server/response/done",
        "from": "IResponseDoneStatus",
        "name": "IResponseDoneStatus"
      }, {
        "im": "./server/response/done",
        "from": "IResponseDoneServerEvent",
        "name": "IResponseDoneServerEvent"
      }, {
        "im": "./server/response/function-call-arguments/delta",
        "from": "IResponseFunctionCallArgumentsDeltaServerEvent",
        "name": "IResponseFunctionCallArgumentsDeltaServerEvent"
      }, {
        "im": "./server/response/function-call-arguments/done",
        "from": "IResponseAudioContentPartDoneServerEvent",
        "name": "IResponseAudioContentPartDoneServerEvent"
      }, {
        "im": "./server/response/output-item/added",
        "from": "IResponseOutputItemAddedServerEvent",
        "name": "IResponseOutputItemAddedServerEvent"
      }, {
        "im": "./server/response/output-item/done",
        "from": "IResponseOutputItemDoneServerEvent",
        "name": "IResponseOutputItemDoneServerEvent"
      }, {
        "im": "./server/response/rate-limits/updated",
        "from": "IResponseRateLimitsUpdatedServerEvent",
        "name": "IResponseRateLimitsUpdatedServerEvent"
      }, {
        "im": "./server/response/response",
        "from": "IRealtimeResponse",
        "name": "IRealtimeResponse"
      }, {
        "im": "./server/response/text/delta",
        "from": "IResponseTextDeltaServerEvent",
        "name": "IResponseTextDeltaServerEvent"
      }, {
        "im": "./server/response/text/done",
        "from": "IResponseTextDoneServerEvent",
        "name": "IResponseTextDoneServerEvent"
      }, {
        "im": "./server/session/created",
        "from": "ISessionCreatedServerEvent",
        "name": "ISessionCreatedServerEvent"
      }, {
        "im": "./server/session/updated",
        "from": "ISessionUpdatedServerEvent",
        "name": "ISessionUpdatedServerEvent"
      }, {
        "im": "./session/audio-format",
        "from": "AudioFormatType",
        "name": "AudioFormatType"
      }, {
        "im": "./session/audio-transcription",
        "from": "AudioTranscriptionsType",
        "name": "AudioTranscriptionsType"
      }, {
        "im": "./session/audio-transcription",
        "from": "IInputAudioTranscription",
        "name": "IInputAudioTranscription"
      }, {
        "im": "./session/index",
        "from": "ISessionConfig",
        "name": "ISessionConfig"
      }, {
        "im": "./session/index",
        "from": "ISession",
        "name": "ISession"
      }, {
        "im": "./session/tool",
        "from": "IToolParameterType",
        "name": "IToolParameterType"
      }, {
        "im": "./session/tool",
        "from": "ITool",
        "name": "ITool"
      }, {
        "im": "./session/tool",
        "from": "ToolChoiceType",
        "name": "ToolChoiceType"
      }, {
        "im": "./session/turn-detection",
        "from": "ITurnDetectionServer",
        "name": "ITurnDetectionServer"
      }, {
        "im": "./session/voices",
        "from": "VoicesType",
        "name": "VoicesType"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IConversationItemCreateClientEvent') && _export("IConversationItemCreateClientEvent", IConversationItemCreateClientEvent = require ? require('./client/conversation-item/create').IConversationItemCreateClientEvent : value);
        (require || prop === 'IConversationItemDeleteClientEvent') && _export("IConversationItemDeleteClientEvent", IConversationItemDeleteClientEvent = require ? require('./client/conversation-item/delete').IConversationItemDeleteClientEvent : value);
        (require || prop === 'IConversationItemTruncateClientEvent') && _export("IConversationItemTruncateClientEvent", IConversationItemTruncateClientEvent = require ? require('./client/conversation-item/truncate').IConversationItemTruncateClientEvent : value);
        (require || prop === 'IInputAudioBufferAppendClientEvent') && _export("IInputAudioBufferAppendClientEvent", IInputAudioBufferAppendClientEvent = require ? require('./client/input-audio-buffer/append').IInputAudioBufferAppendClientEvent : value);
        (require || prop === 'IInputAudioBufferClearClientEvent') && _export("IInputAudioBufferClearClientEvent", IInputAudioBufferClearClientEvent = require ? require('./client/input-audio-buffer/clear').IInputAudioBufferClearClientEvent : value);
        (require || prop === 'IInputAudioBufferCommitClientEvent') && _export("IInputAudioBufferCommitClientEvent", IInputAudioBufferCommitClientEvent = require ? require('./client/input-audio-buffer/commit').IInputAudioBufferCommitClientEvent : value);
        (require || prop === 'IResponseCancelClientEvent') && _export("IResponseCancelClientEvent", IResponseCancelClientEvent = require ? require('./client/response/cancel').IResponseCancelClientEvent : value);
        (require || prop === 'IResponseCreateClientEvent') && _export("IResponseCreateClientEvent", IResponseCreateClientEvent = require ? require('./client/response/create').IResponseCreateClientEvent : value);
        (require || prop === 'ISessionUpdateClientEvent') && _export("ISessionUpdateClientEvent", ISessionUpdateClientEvent = require ? require('./client/session/update').ISessionUpdateClientEvent : value);
        (require || prop === 'IConversationCreatedServerEvent') && _export("IConversationCreatedServerEvent", IConversationCreatedServerEvent = require ? require('./server/conversation/created').IConversationCreatedServerEvent : value);
        (require || prop === 'IConversationItemCreatedServerEvent') && _export("IConversationItemCreatedServerEvent", IConversationItemCreatedServerEvent = require ? require('./server/conversation/item/created').IConversationItemCreatedServerEvent : value);
        (require || prop === 'IConversationItemDeletedServerEvent') && _export("IConversationItemDeletedServerEvent", IConversationItemDeletedServerEvent = require ? require('./server/conversation/item/deleted').IConversationItemDeletedServerEvent : value);
        (require || prop === 'IConversationInputAudioTranscriptionCompletedServerEvent') && _export("IConversationInputAudioTranscriptionCompletedServerEvent", IConversationInputAudioTranscriptionCompletedServerEvent = require ? require('./server/conversation/item/input-audio-transcription/completed').IConversationInputAudioTranscriptionCompletedServerEvent : value);
        (require || prop === 'IConversationInputAudioTranscriptionFailedServerEvent') && _export("IConversationInputAudioTranscriptionFailedServerEvent", IConversationInputAudioTranscriptionFailedServerEvent = require ? require('./server/conversation/item/input-audio-transcription/failed').IConversationInputAudioTranscriptionFailedServerEvent : value);
        (require || prop === 'IConversationItemTruncatedServerEvent') && _export("IConversationItemTruncatedServerEvent", IConversationItemTruncatedServerEvent = require ? require('./server/conversation/item/truncated').IConversationItemTruncatedServerEvent : value);
        (require || prop === 'IServerError') && _export("IServerError", IServerError = require ? require('./server/error').IServerError : value);
        (require || prop === 'IErrorServerEvent') && _export("IErrorServerEvent", IErrorServerEvent = require ? require('./server/error').IErrorServerEvent : value);
        (require || prop === 'IInputAudioBufferClearedServerEvent') && _export("IInputAudioBufferClearedServerEvent", IInputAudioBufferClearedServerEvent = require ? require('./server/input-audio-buffer/cleared').IInputAudioBufferClearedServerEvent : value);
        (require || prop === 'IInputAudioBufferCommitedServerEvent') && _export("IInputAudioBufferCommitedServerEvent", IInputAudioBufferCommitedServerEvent = require ? require('./server/input-audio-buffer/commited').IInputAudioBufferCommitedServerEvent : value);
        (require || prop === 'IInputAudioBufferSpeechStartedServerEvent') && _export("IInputAudioBufferSpeechStartedServerEvent", IInputAudioBufferSpeechStartedServerEvent = require ? require('./server/input-audio-buffer/speech-started').IInputAudioBufferSpeechStartedServerEvent : value);
        (require || prop === 'IInputAudioBufferSpeechStoppedServerEvent') && _export("IInputAudioBufferSpeechStoppedServerEvent", IInputAudioBufferSpeechStoppedServerEvent = require ? require('./server/input-audio-buffer/speech-stoped').IInputAudioBufferSpeechStoppedServerEvent : value);
        (require || prop === 'IResponseAudioTranscriptDeltaServerEvent') && _export("IResponseAudioTranscriptDeltaServerEvent", IResponseAudioTranscriptDeltaServerEvent = require ? require('./server/response/audio-transcript/delta').IResponseAudioTranscriptDeltaServerEvent : value);
        (require || prop === 'IResponseAudioTranscriptDoneServerEvent') && _export("IResponseAudioTranscriptDoneServerEvent", IResponseAudioTranscriptDoneServerEvent = require ? require('./server/response/audio-transcript/done').IResponseAudioTranscriptDoneServerEvent : value);
        (require || prop === 'IResponseAudioDeltaServerEvent') && _export("IResponseAudioDeltaServerEvent", IResponseAudioDeltaServerEvent = require ? require('./server/response/audio/delta').IResponseAudioDeltaServerEvent : value);
        (require || prop === 'IResponseAudioDoneServerEvent') && _export("IResponseAudioDoneServerEvent", IResponseAudioDoneServerEvent = require ? require('./server/response/audio/done').IResponseAudioDoneServerEvent : value);
        (require || prop === 'IResponseContentPartAddedServerEvent') && _export("IResponseContentPartAddedServerEvent", IResponseContentPartAddedServerEvent = require ? require('./server/response/content-part/added').IResponseContentPartAddedServerEvent : value);
        (require || prop === 'IResponseContentPartDoneServerEvent') && _export("IResponseContentPartDoneServerEvent", IResponseContentPartDoneServerEvent = require ? require('./server/response/content-part/done').IResponseContentPartDoneServerEvent : value);
        (require || prop === 'IPart') && _export("IPart", IPart = require ? require('./server/response/content-part/part').IPart : value);
        (require || prop === 'IResponseCreatedServerEvent') && _export("IResponseCreatedServerEvent", IResponseCreatedServerEvent = require ? require('./server/response/created').IResponseCreatedServerEvent : value);
        (require || prop === 'IResponseDoneStatus') && _export("IResponseDoneStatus", IResponseDoneStatus = require ? require('./server/response/done').IResponseDoneStatus : value);
        (require || prop === 'IResponseDoneServerEvent') && _export("IResponseDoneServerEvent", IResponseDoneServerEvent = require ? require('./server/response/done').IResponseDoneServerEvent : value);
        (require || prop === 'IResponseFunctionCallArgumentsDeltaServerEvent') && _export("IResponseFunctionCallArgumentsDeltaServerEvent", IResponseFunctionCallArgumentsDeltaServerEvent = require ? require('./server/response/function-call-arguments/delta').IResponseFunctionCallArgumentsDeltaServerEvent : value);
        (require || prop === 'IResponseAudioContentPartDoneServerEvent') && _export("IResponseAudioContentPartDoneServerEvent", IResponseAudioContentPartDoneServerEvent = require ? require('./server/response/function-call-arguments/done').IResponseAudioContentPartDoneServerEvent : value);
        (require || prop === 'IResponseOutputItemAddedServerEvent') && _export("IResponseOutputItemAddedServerEvent", IResponseOutputItemAddedServerEvent = require ? require('./server/response/output-item/added').IResponseOutputItemAddedServerEvent : value);
        (require || prop === 'IResponseOutputItemDoneServerEvent') && _export("IResponseOutputItemDoneServerEvent", IResponseOutputItemDoneServerEvent = require ? require('./server/response/output-item/done').IResponseOutputItemDoneServerEvent : value);
        (require || prop === 'IResponseRateLimitsUpdatedServerEvent') && _export("IResponseRateLimitsUpdatedServerEvent", IResponseRateLimitsUpdatedServerEvent = require ? require('./server/response/rate-limits/updated').IResponseRateLimitsUpdatedServerEvent : value);
        (require || prop === 'IRealtimeResponse') && _export("IRealtimeResponse", IRealtimeResponse = require ? require('./server/response/response').IRealtimeResponse : value);
        (require || prop === 'IResponseTextDeltaServerEvent') && _export("IResponseTextDeltaServerEvent", IResponseTextDeltaServerEvent = require ? require('./server/response/text/delta').IResponseTextDeltaServerEvent : value);
        (require || prop === 'IResponseTextDoneServerEvent') && _export("IResponseTextDoneServerEvent", IResponseTextDoneServerEvent = require ? require('./server/response/text/done').IResponseTextDoneServerEvent : value);
        (require || prop === 'ISessionCreatedServerEvent') && _export("ISessionCreatedServerEvent", ISessionCreatedServerEvent = require ? require('./server/session/created').ISessionCreatedServerEvent : value);
        (require || prop === 'ISessionUpdatedServerEvent') && _export("ISessionUpdatedServerEvent", ISessionUpdatedServerEvent = require ? require('./server/session/updated').ISessionUpdatedServerEvent : value);
        (require || prop === 'AudioFormatType') && _export("AudioFormatType", AudioFormatType = require ? require('./session/audio-format').AudioFormatType : value);
        (require || prop === 'AudioTranscriptionsType') && _export("AudioTranscriptionsType", AudioTranscriptionsType = require ? require('./session/audio-transcription').AudioTranscriptionsType : value);
        (require || prop === 'IInputAudioTranscription') && _export("IInputAudioTranscription", IInputAudioTranscription = require ? require('./session/audio-transcription').IInputAudioTranscription : value);
        (require || prop === 'ISessionConfig') && _export("ISessionConfig", ISessionConfig = require ? require('./session/index').ISessionConfig : value);
        (require || prop === 'ISession') && _export("ISession", ISession = require ? require('./session/index').ISession : value);
        (require || prop === 'IToolParameterType') && _export("IToolParameterType", IToolParameterType = require ? require('./session/tool').IToolParameterType : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./session/tool').ITool : value);
        (require || prop === 'ToolChoiceType') && _export("ToolChoiceType", ToolChoiceType = require ? require('./session/tool').ToolChoiceType : value);
        (require || prop === 'ITurnDetectionServer') && _export("ITurnDetectionServer", ITurnDetectionServer = require ? require('./session/turn-detection').ITurnDetectionServer : value);
        (require || prop === 'VoicesType') && _export("VoicesType", VoicesType = require ? require('./session/voices').VoicesType : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9jcmVhdGUudHMiLCIvZGVsZXRlLnRzIiwiL3RydW5jYXRlLnRzIiwiL2FwcGVuZC50cyIsIi9jbGVhci50cyIsIi9jb21taXQudHMiLCIvY2FuY2VsLnRzIiwiL3VwZGF0ZS50cyIsIi9jcmVhdGVkLnRzIiwiL2RlbGV0ZWQudHMiLCIvY29tcGxldGVkLnRzIiwiL2ZhaWxlZC50cyIsIi90cnVuY2F0ZWQudHMiLCIvZXJyb3IudHMiLCIvY2xlYXJlZC50cyIsIi9jb21taXRlZC50cyIsIi9zcGVlY2gtc3RhcnRlZC50cyIsIi9zcGVlY2gtc3RvcGVkLnRzIiwiL2RlbHRhLnRzIiwiL2RvbmUudHMiLCIvYWRkZWQudHMiLCIvcGFydC50cyIsIi91cGRhdGVkLnRzIiwiL3Jlc3BvbnNlLnRzIiwiL2F1ZGlvLWZvcm1hdC50cyIsIi9hdWRpby10cmFuc2NyaXB0aW9uLnRzIiwiL2luZGV4LnRzIiwiL3Rvb2wudHMiLCIvdHVybi1kZXRlY3Rpb24udHMiLCIvdm9pY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VU5KQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVT0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUFKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VURKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VURKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVRUpBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1ViSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VVdKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVREpBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVREpBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VHSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVTEpBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VVhKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVY0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VFSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7O1VDSkE7O1VBRUFILE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUgsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=