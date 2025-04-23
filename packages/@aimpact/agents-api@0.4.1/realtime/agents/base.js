System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/utils", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.1/realtime/interfaces/item", "@aimpact/agents-api@0.4.1/realtime/interfaces/agent-events", "@aimpact/agents-api@0.4.1/realtime/channel", "ws@8.17.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IVoiceAudioDetection, BaseRealtimeAgent, ISessionSettings, AgentStatusType, __beyond_pkg, hmr;
  _export({
    IVoiceAudioDetection: void 0,
    BaseRealtimeAgent: void 0,
    ISessionSettings: void 0,
    AgentStatusType: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_1 = _aimpactAgentsApi041RealtimeUtils;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi041RealtimeInterfacesItem) {
      dependency_3 = _aimpactAgentsApi041RealtimeInterfacesItem;
    }, function (_aimpactAgentsApi041RealtimeInterfacesAgentEvents) {
      dependency_4 = _aimpactAgentsApi041RealtimeInterfacesAgentEvents;
    }, function (_aimpactAgentsApi041RealtimeChannel) {
      dependency_5 = _aimpactAgentsApi041RealtimeChannel;
    }, function (_ws) {
      dependency_6 = _ws;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/agents/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/utils', dependency_1], ['@beyond-js/events/events', dependency_2], ['@aimpact/agents-api/realtime/interfaces/item', dependency_3], ['@aimpact/agents-api/realtime/interfaces/agent-events', dependency_4], ['@aimpact/agents-api/realtime/channel', dependency_5], ['ws', dependency_6]]);
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./conversation/index
      ************************************/
      ims.set('./conversation/index', {
        hash: 177308811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _items = require("./items");
          var _responses = require("./responses");
          var _speech = require("./speech");
          const LOG = false;
          class Conversation {
            #id;
            get id() {
              return this.#id;
            }
            #agent;
            get agent() {
              return this.#agent;
            }
            #speech;
            get speech() {
              return this.#speech;
            }
            #items;
            get items() {
              return this.#items;
            }
            #responses;
            get responses() {
              return this.#responses;
            }
            constructor(agent) {
              this.#agent = agent;
              this.#items = new _items.Items(this);
              this.#responses = new _responses.ConversationResponses(this);
              this.#speech = new _speech.Speech(this);
              const {
                session
              } = agent;
              session.on('conversation.created', this.onCreated.bind(this));
              session.on('input_audio_buffer.speech_started', this.onSpeechStarted.bind(this));
              session.on('input_audio_buffer.speech_stopped', this.onSpeechStopped.bind(this));
            }
            listen(chunk) {
              this.#speech.append(chunk);
            }
            log(...args) {
              LOG && console.log(...args);
            }
            onCreated(event) {
              this.log('[IMPLEMENTED] on[Conversation]Created event received:', event);
              this.#id = event.conversation.id;
            }
            onSpeechStarted(event) {
              this.log('[IMPLEMENTED] onSpeechStarted event received:', event);
              this.#speech.onStarted(event);
              this.#items.speechStarted(event);
            }
            onSpeechStopped(event, audio) {
              this.log('onSpeechStopped event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	this.trigger('error', { error: `input_audio_buffer.speech_stopped: Item "${event.item_id}" not found` });
              // 	return;
              // }
              // const item = this.#lookup.get(event.item_id);
              // item.speechStopped(event, audio);
            }
          }
          exports.Conversation = Conversation;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./conversation/item/audio
      *****************************************/

      ims.set('./conversation/item/audio', {
        hash: 1554683414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemAudio = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          var _events = require("@beyond-js/events/events");
          class ConversationItemAudio extends _events.Events {
            #frequency;
            get frequency() {
              return this.#frequency;
            }
            #value = new Int16Array(0);
            get value() {
              return this.#value;
            }
            constructor(frequency) {
              super();
              this.#frequency = frequency;
            }
            truncated(event) {
              const {
                audio_end_ms
              } = event;
              // Calculate the end index for truncating the audio based on the frequency
              const endIndex = Math.floor(audio_end_ms * this.#frequency / 1000);
              this.#value = this.#value.slice(0, endIndex); // Truncate the audio
            }
            #merge(audio) {
              const buffer = _utils.RealtimeUtils.base64ToArrayBuffer(audio);
              const append = new Int16Array(buffer);
              this.#value = _utils.RealtimeUtils.mergeInt16Arrays(this.#value, append);
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Populate formatted text if it comes out on creation
              if (event.item.type === 'message' && event.item.content) {
                event.item.content.forEach(content => {
                  if (content.type !== 'audio' && content.type !== 'input_audio') return;
                  content.audio && this.#merge(content.audio);
                });
              }
            }
            /**
             * When a new content part is added to an assistant message item during response generation.
             * @param event
             */
            contentPartAdded(event) {
              if (!event.part.audio) return;
              this.#merge(event.part.audio);
              this.trigger('audio.delta', {
                audio: event.part.audio
              });
            }
            audioDelta(event) {
              this.#merge(event.delta);
              this.trigger('audio.delta', {
                audio: event.delta
              });
            }
          }
          exports.ConversationItemAudio = ConversationItemAudio;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./conversation/item/content
      *******************************************/

      ims.set('./conversation/item/content', {
        hash: 4142015351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemContent = void 0;
          var _transcript = require("./transcript");
          var _audio = require("./audio");
          var _text = require("./text");
          var _events = require("@beyond-js/events/events");
          class ConversationItemContent extends _events.Events {
            #status = 'empty';
            get status() {
              return this.#status;
            }
            #text = new _text.ConversationItemText();
            get text() {
              return this.#text;
            }
            #audio = new _audio.ConversationItemAudio();
            get audio() {
              return this.#audio;
            }
            #transcript = new _transcript.ConversationItemTranscript();
            get transcript() {
              return this.#transcript;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Set the item status based on the type and role
              if (event.item.type !== 'message') return;
              this.#text.created(event);
              this.#audio.created(event);
              this.#status = event.item.role === 'user' ? 'completed' : 'in_progress';
            }
            /**
             * When a new content part is added to an assistant message item during response generation.
             * @param event
             */
            contentPartAdded(event) {
              this.#transcript.contentPartAdded(event);
              this.#text.contentPartAdded(event);
              this.#audio.contentPartAdded(event);
            }
            audioDelta(event) {
              this.#audio.audioDelta(event);
            }
            textDelta(event) {
              this.#text.textDelta(event);
            }
            audioTranscriptDelta(event) {
              this.#transcript.audioTranscriptDelta(event);
            }
            transcriptionCompleted(event) {
              this.#transcript.completed(event);
            }
            done(event) {
              this.#status = event.item.status;
            }
          }
          exports.ConversationItemContent = ConversationItemContent;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./conversation/item/index
      *****************************************/

      ims.set('./conversation/item/index', {
        hash: 1179085037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItem = void 0;
          var _tool = require("./tool");
          var _speech = require("./speech");
          var _content = require("./content");
          var _events = require("@beyond-js/events/events");
          class ConversationItem extends _events.Events {
            #id;
            get id() {
              return this.#id;
            }
            #type;
            get type() {
              return this.#type;
            }
            #role;
            get role() {
              return this.#role;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #content = new _content.ConversationItemContent();
            get content() {
              return this.#content;
            }
            #transcript;
            get transcript() {
              return this.#transcript;
            }
            #tool;
            get tool() {
              return this.#tool;
            }
            #output;
            get output() {
              return this.#output;
            }
            #status;
            get status() {
              return this.#status;
            }
            #speech;
            #response;
            get response() {
              return this.#response;
            }
            constructor(id) {
              super();
              this.#id = id;
            }
            /**
             * When a new Item is created during Response generation.
             *
             * @param response
             * @param event
             */
            added(response, event) {
              this.#response = response;
              this.#status = event.item.status;
              this.#type = event.item.type;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Set the item status based on the type and role
              if (event.item.type === 'message') {
                if (event.item.role === 'user') {
                  this.#status = 'completed'; // Mark user message as completed
                } else {
                  this.#status = 'in_progress'; // Set status as in progress for other types
                }
              } else if (event.item.type === 'function_call') {
                this.#tool = new _tool.ConversationItemTool({
                  name: event.item.name,
                  caller: event.item.call_id,
                  arguments: ''
                });
                this.#status = 'in_progress';
              } else if (event.item.type === 'function_call_output') {
                this.#status = 'completed';
                this.#output = event.item.output;
              }
              this.#content.created(event);
            }
            contentPartAdded(event) {
              this.#content.contentPartAdded(event);
            }
            audioTranscriptDelta(event) {
              this.#content.audioTranscriptDelta(event);
            }
            done(event) {
              this.#status = event.item.status;
              this.#content.done(event);
            }
            truncated(event) {
              // Clear the transcript
              this.#transcript.clear();
              if (!this.#audio) {
                this.trigger('error', {
                  error: `item.truncated: Audio of item "${event.item_id}" not found`
                });
                return;
              }
              this.#audio.truncated(event);
            }
            speechStarted(event) {
              if (this.#speech) {
                this.trigger('error', {
                  error: `input_audio_buffer.speech_started: Item speech "${event.item_id}" already created`
                });
                return;
              }
              this.#speech = new _speech.ConversationItemSpeech(this.#audio, event.audio_start_ms);
            }
            speechStopped(event, audio) {
              if (!this.#audio) {
                this.trigger('error', {
                  error: `input_audio_buffer.speech_stopped: Audio of item "${event.item_id}" not found`
                });
                return;
              }
              // If there's no queued speech item, initialize it with the end time
              !this.#speech && (this.#speech = new _speech.ConversationItemSpeech(this.#audio, event.audio_end_ms));
              this.#speech.stopped(event, audio);
            }
            transcriptionCompleted(event) {
              // Assign transcript to the item
              this.#content.transcriptionCompleted(event);
              this.#transcript.completed(event);
            }
            audioDelta(event) {
              this.#content.audioDelta(event);
            }
            textDelta(event) {
              this.#content.textDelta(event);
            }
            functionCallArgumentsDelta(event) {
              if (!this.#tool) {
                this.trigger('error', {
                  error: `response.function_call_arguments.delta: Tool of item "${event.item_id}" not found`
                });
                return;
              }
              this.#tool.functionCallArgumentsDelta(event);
            }
          }
          exports.ConversationItem = ConversationItem;
        }
      });

      /******************************************
      INTERNAL MODULE: ./conversation/item/speech
      ******************************************/

      ims.set('./conversation/item/speech', {
        hash: 2299714669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemSpeech = void 0;
          class ConversationItemSpeech {
            #input;
            #start;
            get start() {
              return this.#start;
            }
            #end;
            get end() {
              return this.#end;
            }
            #value;
            get value() {
              return this.#value;
            }
            constructor(input, start) {
              this.#input = input;
              this.#start = start;
            }
            stopped(event, audio) {
              this.#end = event.audio_end_ms;
              if (audio) {
                // Calculate start and end indices for slicing the audio buffer
                const start = Math.floor(this.#start * this.#input.frequency / 1000);
                const end = Math.floor(this.#end * this.#input.frequency / 1000);
                // Extract the audio segment and assign it to the speech item
                this.#value = this.#input.value.slice(start, end);
              }
            }
          }
          exports.ConversationItemSpeech = ConversationItemSpeech;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversation/item/text
      ****************************************/

      ims.set('./conversation/item/text', {
        hash: 3546706845,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemText = void 0;
          var _events = require("@beyond-js/events/events");
          class ConversationItemText extends _events.Events {
            #frequency;
            get frequency() {
              return this.#frequency;
            }
            #value = '';
            get value() {
              return this.#value;
            }
            constructor(frequency) {
              super();
              this.#frequency = frequency;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Populate formatted text if it comes out on creation
              if (event.item.type === 'message' && event.item.content) {
                event.item.content.forEach(content => {
                  if (content.type !== 'text' && content.type !== 'input_text') return;
                  this.#value += content.text;
                });
              }
            }
            /**
             * When a new content part is added to an assistant message item during response generation.
             * @param event
             */
            contentPartAdded(event) {
              if (event.part.type !== 'text') return;
              this.#value += event.part.text;
            }
            /**
             * Returned when the text value of a "text" content part is updated.
             * @param event
             */
            textDelta(event) {
              this.#value += event.delta;
              this.trigger('text.delta', {
                audio: event.delta
              });
            }
          }
          exports.ConversationItemText = ConversationItemText;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversation/item/tool
      ****************************************/

      ims.set('./conversation/item/tool', {
        hash: 2306001597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemTool = void 0;
          class ConversationItemTool {
            #status;
            get status() {
              return this.#status;
            }
            #caller;
            get caller() {
              return this.#caller;
            }
            #name;
            get name() {
              return this.#name;
            }
            #arguments;
            get arguments() {
              return this.#arguments;
            }
            #output;
            get output() {
              return this.#output;
            }
            constructor(data) {
              this.#caller = data.caller;
              this.#name = data.name;
              this.#arguments = data.arguments;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Set the item status based on the type and role
              if (event.item.type === 'function_call') {
                this.#status = 'in_progress';
              } else if (event.item.type === 'function_call_output') {
                this.#status = 'completed';
                this.#output = event.item.output;
              }
            }
            functionCallArgumentsDelta(event) {
              this.#arguments += event.delta;
            }
          }
          exports.ConversationItemTool = ConversationItemTool;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./conversation/item/transcript
      **********************************************/

      ims.set('./conversation/item/transcript', {
        hash: 3006183769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemTranscript = void 0;
          var _events = require("@beyond-js/events/events");
          class ConversationItemTranscript extends _events.Events {
            #value = '';
            get value() {
              return this.#value;
            }
            #status = 'empty';
            get status() {
              return this.#status;
            }
            clear() {
              this.#value = '';
              this.#status = 'empty';
            }
            contentPartAdded(event) {
              if (event.part.type !== 'audio' || !event.part.transcript) return;
              this.#value += event.part.transcript;
            }
            completed(event) {
              this.#value = event.transcript ? event.transcript : ' ';
              this.#status = 'completed';
            }
            audioTranscriptDelta(event) {
              this.#value += event.delta;
            }
          }
          exports.ConversationItemTranscript = ConversationItemTranscript;
        }
      });

      /************************************
      INTERNAL MODULE: ./conversation/items
      ************************************/

      ims.set('./conversation/items', {
        hash: 609281227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = void 0;
          var _item = require("./item");
          var _events = require("@beyond-js/events/events");
          const LOG = false;
          class Items extends _events.Events {
            #conversation;
            get #session() {
              return this.#conversation.agent.session;
            }
            #items = [];
            get items() {
              return this.#items;
            }
            #lookup = new Map();
            get lookup() {
              return this.#lookup;
            }
            has(id) {
              return this.#lookup.has(id);
            }
            get(id) {
              return this.#lookup.get(id);
            }
            delete(id) {
              if (!this.#lookup.has(id)) return false;
              const item = this.#lookup.get(id);
              this.#lookup.delete(id);
              this.#items.splice(this.#items.indexOf(item), 1);
            }
            #errors = [];
            get errors() {
              return this.#errors;
            }
            /**
             * Transcription runs asynchronously with Response creation,
             * so this event may come before or after the Response events.
             *
             * Realtime API models accept audio natively, and thus input transcription is a separate process
             * run on a separate ASR (Automatic Speech Recognition) model, currently always whisper-1.
             * Thus the transcript may diverge somewhat from the model's interpretation,
             * and should be treated as a rough guide.
             *
             * https://platform.openai.com/docs/api-reference/realtime-server-events/conversation/item/input_audio_transcription/completed
             */
            #orphans;
            log(...args) {
              LOG && console.log(...args);
            }
            constructor(conversation) {
              super();
              this.#conversation = conversation;
              const session = this.#session;
              session.on('conversation.item.created', this.onItemCreated.bind(this));
              session.on('conversation.item.truncated', this.onItemTruncated.bind(this));
              session.on('conversation.item.deleted', this.onItemDeleted.bind(this));
              session.on('conversation.item.input_audio_transcription.completed', this.onTranscriptionCompleted.bind(this));
              session.on('response.output_item.added', this.onResponseItemAdded.bind(this));
              session.on('response.content_part.added', this.onResponseContentPartAdded.bind(this));
              session.on('response.audio_transcript.delta', this.onResponseAudioTranscriptDelta.bind(this));
              session.on('response.audio.delta', this.onResponseAudioDelta.bind(this));
              session.on('response.text.delta', this.onResponseTextDelta.bind(this));
              session.on('response.function_call_arguments.delta', this.onResponseFunctionCallArgumentsDelta.bind(this));
              session.on('response.output_item.done', this.onResponseItemDone.bind(this));
            }
            create(item, previous, eventId) {
              const data = {
                type: 'conversation.item.create',
                event_id: eventId,
                previous_item_id: previous,
                item
              };
              this.#session.send('conversation.item.create', data);
            }
            send(message) {
              if (!message?.text && !message.audio) {
                throw new Error(`Invalid parameters. Message audio or text must be provided`);
              }
              const item = {
                id: null,
                type: 'message',
                role: 'user',
                // Has no effect on the conversation, here for consistency with the conversation.item.created
                status: 'completed',
                content: []
              };
              const content = message.text ? {
                type: 'input_text',
                text: message.text
              } : {
                type: 'input_audio',
                audio: message.audio
              };
              item.content.push(content);
              this.create(item);
              this.#conversation.responses.create();
            }
            speechStarted(event) {
              if (!this.#lookup.has(event.item_id)) {
                const error = `input_audio_buffer.speech_started: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.speechStarted(event);
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * 1. The server is generating a Response, which if successful will produce either one or two Items,
             *    which will be of type message (role assistant) or type function_call.
             *
             * 2. The input audio buffer has been committed, either by the client or the server (in server_vad mode).
             *    The server will take the content of the input audio buffer and add it to a new user message Item.
             *
             * 3. The client has sent a conversation.item.create event to add a new Item to the Conversation.
             *
             * @param event
             */
            onItemCreated(event) {
              this.log('[IMPLEMENTED] onItemCreated event received:', event);
              const item = (() => {
                // If the item is being created as a result of a response creation, then the
                // item is already in the items collections. Otherwise, it is required to create
                // an instance of the item
                if (this.#lookup.has(event.item.id)) return this.#lookup.get(event.item.id);
                const item = new _item.ConversationItem(event.item.id);
                this.#items.push(item);
                this.#lookup.set(item.id, item);
                return item;
              })();
              item.created(event);
              /**
               * Trigger event to notify the item creation
               */
              (() => {
                const {
                  agent
                } = this.#conversation;
                const id = item.id;
                const type = item.type;
                const role = item.role;
                const data = {
                  item: {
                    id,
                    type,
                    role
                  }
                };
                agent.trigger('conversation.item.created', data);
              })();
            }
            onItemTruncated(event) {
              this.log('onItemTruncated event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	this.trigger('error', { error: `item.truncated: Item "${event.item_id}" not found` });
              // 	return;
              // }
              // const item = this.#lookup.get(event.item_id);
              // item.truncated(event);
            }
            onItemDeleted(event) {
              this.log('onItemDeleted event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	this.trigger('error', { error: `item.deleted: Item "${event.item_id}" not found` });
              // 	return;
              // }
              // // Remove item from lookup table
              // this.delete(event.item_id);
            }
            onTranscriptionCompleted(event) {
              this.log('onTranscriptionCompleted event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	// If the item doesn't exist yet, queue the transcript for later
              // 	const transcript = event.transcript || ' '; // Use a single space if transcript is empty
              // 	this.#orphans.transcripts.set(event.item_id, transcript);
              // 	return;
              // } else {
              // 	const item = this.#lookup.get(event.item_id);
              // 	item.transcriptionCompleted(event);
              // }
            }
            /**
             * When a new Item is created during Response generation.
             *
             * @param event
             * @returns
             */
            onResponseItemAdded(event) {
              this.log('[IMPLEMENTED] onItemAdded event received:', event);
              const {
                responses
              } = this.#conversation;
              if (!responses.has(event.response_id)) {
                const error = `response.output_item.added: Response "${event.response_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = new _item.ConversationItem(event.item.id);
              this.#lookup.set(item.id, item);
              this.#items.push(item);
              const response = responses.get(event.response_id);
              item.added(response, event);
            }
            onResponseContentPartAdded(event) {
              // this.log('[IMPLEMENTED] onContentPartAdded event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.content_part.added: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.contentPartAdded(event);
            }
            onResponseAudioTranscriptDelta(event) {
              // this.log('[IMPLEMENTED] onAudioTranscriptDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.audio_transcript.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.audioTranscriptDelta(event);
            }
            onResponseAudioDelta(event) {
              // this.log('[IMPLEMENTED] onAudioDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.audio.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.audioDelta(event);
              /**
               * Trigger event to notify the item creation
               */
              (() => {
                const {
                  agent
                } = this.#conversation;
                const id = item.id;
                const data = {
                  item: {
                    id
                  },
                  delta: event.delta
                };
                agent.trigger('conversation.item.audio.delta', data);
              })();
            }
            onResponseTextDelta(event) {
              this.log('[IMPLEMENTED] onTextDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.text.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.textDelta(event);
            }
            onResponseFunctionCallArgumentsDelta(event) {
              this.log('[IMPLEMENTED] onFunctionCallArgumentsDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.function_call_arguments.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.functionCallArgumentsDelta(event);
            }
            onResponseItemDone(event) {
              this.log('[IMPLEMENTED] onItemDone event received:', event);
              if (!event.item) {
                const error = `response.output_item.done: Missing "item"`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item.id);
              if (!this.#lookup.has(event.item.id)) {
                const error = `response.output_item.done: Item "${event.item.id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              item.done(event);
            }
          }
          exports.Items = Items;
        }
      });

      /***************************************
      INTERNAL MODULE: ./conversation/progress
      ***************************************/

      ims.set('./conversation/progress', {
        hash: 805281290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentManagerConversationProgress = void 0;
          class AgentManagerConversationProgress {}
          exports.AgentManagerConversationProgress = AgentManagerConversationProgress;
        }
      });

      /***************************************
      INTERNAL MODULE: ./conversation/response
      ***************************************/

      ims.set('./conversation/response', {
        hash: 3649468987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationResponse = void 0;
          var _events = require("@beyond-js/events/events");
          class ConversationResponse extends _events.Events {
            #conversation;
            #id;
            get id() {
              return this.#id;
            }
            #status;
            get status() {
              return this.#status;
            }
            #usage = {
              inputTokens: 0,
              outputTokens: 0
            };
            get usage() {
              return this.#usage;
            }
            constructor(conversation) {
              super();
              this.#conversation = conversation;
            }
            created(event) {
              const {
                id,
                usage
              } = event.response;
              this.#id = id;
              this.#usage.inputTokens = usage?.input_tokens ? usage.input_tokens : 0;
              this.#usage.outputTokens = usage?.output_tokens ? usage.input_tokens : 0;
            }
          }
          exports.ConversationResponse = ConversationResponse;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversation/responses
      ****************************************/

      ims.set('./conversation/responses', {
        hash: 1467945702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationResponses = void 0;
          var _response = require("./response");
          var _events = require("@beyond-js/events/events");
          class ConversationResponses extends _events.Events {
            #conversation;
            #lookup = new Map();
            get lookup() {
              return this.#lookup;
            }
            has(id) {
              return this.#lookup.has(id);
            }
            get(id) {
              return this.#lookup.get(id);
            }
            delete(id) {
              if (!this.#lookup.has(id)) return false;
              this.#lookup.delete(id);
            }
            constructor(conversation) {
              super();
              this.#conversation = conversation;
              const {
                session
              } = conversation.agent;
              session.on('response.created', this.created.bind(this));
            }
            // Create a response from the server
            create() {
              this.#conversation.speech.commit();
              const {
                agent
              } = this.#conversation;
              agent.session.send('response.create');
              return true;
            }
            created(event) {
              if (this.#lookup.has(event.response.id)) return;
              const response = new _response.ConversationResponse(this.#conversation);
              this.#lookup.set(event.response.id, response);
              response.created(event);
            }
          }
          exports.ConversationResponses = ConversationResponses;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./conversation/speech/current
      *********************************************/

      ims.set('./conversation/speech/current', {
        hash: 3376561255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CurrentUserSpeech = void 0;
          class CurrentUserSpeech {
            #conversation;
            #length = 0;
            constructor(conversation) {
              this.#conversation = conversation;
            }
            commit() {
              const {
                agent
              } = this.#conversation;
              const {
                vad
              } = agent; // Voice audio detection
              vad && this.#length > 0 && agent.session.send('input_audio_buffer.commit');
              this.#length = 0;
            }
            append(chunk) {
              this.#length += chunk.byteLength;
            }
          }
          exports.CurrentUserSpeech = CurrentUserSpeech;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./conversation/speech/index
      *******************************************/

      ims.set('./conversation/speech/index', {
        hash: 4139490776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Speech = void 0;
          var _storage = require("./storage");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          var _current = require("./current");
          class Speech {
            #conversation;
            #storage;
            #current;
            constructor(conversation) {
              this.#conversation = conversation;
              this.#storage = new _storage.SpeechStorage(conversation);
              this.#current = new _current.CurrentUserSpeech(conversation);
            }
            append(chunk) {
              if (chunk.byteLength === 0) return;
              const {
                session
              } = this.#conversation.agent;
              session.send('input_audio_buffer.append', {
                audio: _utils.RealtimeUtils.arrayBufferToBase64(chunk)
              });
              this.#current.append(chunk);
              this.#storage.append(chunk);
            }
            flush() {
              this.#storage.flush();
            }
            commit() {
              this.#current.commit();
            }
            onStarted(event) {
              /**
               * Trigger event to notify speech started detected
               */
              const {
                agent
              } = this.#conversation;
              const data = {
                item: {
                  id: event.item_id
                }
              };
              agent.trigger('user.speech.started', data);
            }
          }
          exports.Speech = Speech;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./conversation/speech/storage
      *********************************************/

      ims.set('./conversation/speech/storage', {
        hash: 442958824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpeechStorage = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          // Recommended buffer size for PCM audio in real-time applications, around 5MB.
          const BUFFER_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB in bytes
          class SpeechStorage {
            #conversation;
            #buffer = new Int16Array(0);
            #stream;
            #browser;
            #prepared = false;
            constructor(conversation) {
              this.#conversation = conversation;
              // Determine if running in the browser or Node.js
              this.#browser = !globalThis.process?.versions?.node;
              !this.#browser && this.#ready().catch(exc => console.log(exc));
            }
            async #ready() {
              const {
                Storage
              } = await bimport('@google-cloud/storage');
              const storage = new Storage();
              const bucket = storage.bucket('conversations-audios');
              const file = bucket.file(`conversation/${this.#conversation.id}.pcm`);
              // Initialize a writable stream to GCS
              this.#stream = file.createWriteStream({
                resumable: false,
                contentType: 'audio/L16' // PCM 16-bit audio format
              });
              this.#stream.on('error', this.#onerror);
              this.#stream.on('finish', this.#onfinish);
              this.#prepared = true;
            }
            #onerror = error => {
              // @TODO: Handle this error
              console.error('Error uploading audio to Google Cloud Storage:', error);
            };
            #onfinish = () => {
              this.#stream.off('error', this.#onerror);
              this.#stream.off('finish', this.#onfinish);
              this.#stream = void 0;
            };
            append(chunk) {
              if (this.#browser) return;
              this.#buffer = _utils.RealtimeUtils.mergeInt16Arrays(this.#buffer, chunk);
              // Check if the buffer has reached the size limit
              if (this.#buffer.byteLength >= BUFFER_SIZE_LIMIT) {
                this.flush();
              }
            }
            flush() {
              if (this.#browser) return;
              if (this.#buffer.byteLength === 0) return;
              if (!this.#prepared) {
                // Reset the buffer, some audio is going to be lost
                // This should never happen, it is related with the `ready` method
                this.#buffer = new Int16Array(0);
                console.warn(`Speech storage is not prepared`);
                return;
              }
              // Write the current buffer to the GCS file stream
              this.#stream.write(Buffer.from(this.#buffer.buffer), error => {
                if (error) {
                  // @TODO: Handle this error
                  console.error('Error writing buffer to stream:', error);
                }
              });
              // Reset the buffer
              this.#buffer = new Int16Array(0);
            }
            close() {
              if (this.#browser) return;
              // Flush any remaining buffer data before closing
              this.flush();
              // End the writable stream to Cloud Storage
              this.#stream.end();
            }
          }
          exports.SpeechStorage = SpeechStorage;
        }
      });

      /*************************************
      INTERNAL MODULE: ./conversation/system
      *************************************/

      ims.set('./conversation/system', {
        hash: 2033797971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentSystem = void 0;
          class AgentSystem {}
          exports.AgentSystem = AgentSystem;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2589585034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseRealtimeAgent = void 0;
          var _session = require("./session");
          var _conversation = require("./conversation");
          var _events = require("@beyond-js/events/events");
          /*bundle*/
          class BaseRealtimeAgent extends _events.Events {
            /**
             * Voice Audio Detection
             */
            #vad;
            get vad() {
              return this.#vad;
            }
            set vad(value) {
              this.#vad = value;
            }
            #session;
            get session() {
              return this.#session;
            }
            #manager;
            get manager() {
              return this.#manager;
            }
            get status() {
              return this.#session.status;
            }
            constructor(settings) {
              super();
              this.#session = new _session.AgentSession(this, settings);
              this.#manager = new _conversation.Conversation(this);
            }
            triger(event, ...data) {
              return super.trigger(event, ...data);
            }
            async connect() {
              return await this.#session.connect();
            }
            async close() {
              return await this.#session.close();
            }
          }
          exports.BaseRealtimeAgent = BaseRealtimeAgent;
        }
      });

      /*************************
      INTERNAL MODULE: ./session
      *************************/

      ims.set('./session', {
        hash: 1479595166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentSession = void 0;
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          var _events = require("@beyond-js/events/events");
          const defaults = {
            url: 'wss://api.openai.com/v1/realtime',
            model: 'gpt-4o-mini-realtime-preview'
          };
          class AgentSession extends _events.Events {
            #agent;
            #channel;
            get channel() {
              return this.#channel;
            }
            #id;
            #config;
            #sessionProps = ['modalities', 'instructions', 'voice', 'output_audio_format', 'tools', 'tool_choice', 'temperature', 'max_output_tokens', 'input_audio_format', 'input_audio_transcription', 'turn_detection'];
            get error() {
              return this.#channel.error;
            }
            #created = false;
            get created() {
              return this.#created;
            }
            get status() {
              const {
                status
              } = this.#channel;
              return status === 'open' && this.#created ? 'created' : status;
            }
            constructor(agent, settings) {
              super();
              if (!settings?.key) throw new Error('OpenAI API key must be specified');
              this.#agent = agent;
              const headers = (() => {
                const {
                  key
                } = settings;
                if (_channel.Channel.browser) {
                  return ['realtime', `openai-insecure-api-key.${key}`, 'openai-beta.realtime-v1'];
                } else {
                  return {
                    Authorization: `Bearer ${key}`,
                    'OpenAI-Beta': 'realtime=v1'
                  };
                }
              })();
              this.#channel = new _channel.Channel({
                url: `${defaults.url}?model=${defaults.model}`,
                headers
              });
              this.#channel.on('open', this.#onopen);
              this.#channel.on('close', this.#onclose);
              this.#channel.on('message', this.#onmessage);
            }
            /**
             * Connect with the server
             *
             * Take care that the session status is 'connected' after the 'session.created' event is received,
             * not when the socket is connected.
             */
            connect() {
              if (this.status !== 'closed') throw new Error(`Session status must be 'closed' before trying to connect it`);
              return new Promise(resolve => {
                let timer;
                const oncreated = event => {
                  clearTimeout(timer);
                  this.#created = true;
                  this.#config = this.#sessionConfig(event.session, this.#sessionProps);
                  this.off('session.created', oncreated);
                  // console.log('agent trigger: session.created');
                  this.#agent.trigger('session.created');
                  // @TODO: Session created. @TODO: handle session data (id, settings)
                  resolve(true);
                };
                this.on('session.created', oncreated);
                const ontimeout = () => {
                  // @TODO: Log that the session hasn't been created
                  this.#channel.close();
                  resolve(false);
                };
                // Wait some seconds to the session to be created
                timer = setTimeout(ontimeout, 4000);
                this.#channel.connect();
              });
            }
            #onopen = () => this.trigger('open');
            #onclose = () => {
              // @TODO: Add a logic to log and/or reconnect the channel when it unexpectedly closed
              this.#created = false;
              this.trigger('close');
            };
            #onmessage = data => {
              let message;
              try {
                message = JSON.parse(data);
              } catch (exc) {
                // @TODO: Log error messages
                console.warn(`Open AI message cannot be parsed: ${exc.message}`, exc);
                return;
              }
              if (!message.type) {
                // @TODO: Log error
                console.warn('Open AI message type is not defined:', message);
                return;
              }
              if (message.error) {
                console.error('message', message);
              }
              // console.log('server trigger', message.type);
              this.trigger(message.type, message);
              if (message.type === 'session.updated') {
                console.log('server trigger session.ready');
                this.trigger('session.ready', message);
                this.#agent.trigger('session.ready');
              }
            };
            send(event, data) {
              if (this.status !== 'created') throw new Error(`Session is not created`);
              data = data || {};
              if (typeof data !== 'object') throw new Error(`data must be an object`);
              const id = data.event_id ? data.event_id : _utils.RealtimeUtils.generateId('evt_');
              data = Object.assign({
                event_id: id,
                type: event
              }, data);
              this.#channel.send(JSON.stringify(data));
              return true;
            }
            destroy() {
              this.#channel.off('open', this.#onopen);
              this.#channel.off('close', this.#onclose);
              this.#channel.off('message', this.#onmessage);
              if (['open', 'connecting'].includes(this.#channel.status)) this.#channel.close();
            }
            update(value) {
              this.#config = Object.assign({}, this.#config, value);
              const event = {
                type: 'session.update',
                event_id: _utils.RealtimeUtils.generateId('evt_'),
                session: this.#config
              };
              // Be sure that the session is created before updating it
              const update = () => this.send('session.update', event);
              this.status === 'created' ? update() : this.#agent.on('session.created', update);
            }
            async close() {
              return await this.#channel.close();
            }
            #sessionConfig(obj, keys) {
              const props = {};
              keys.forEach(key => props[key] = obj[key]);
              return props;
            }
          }
          exports.AgentSession = AgentSession;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IVoiceAudioDetection",
        "name": "IVoiceAudioDetection"
      }, {
        "im": "./index",
        "from": "BaseRealtimeAgent",
        "name": "BaseRealtimeAgent"
      }, {
        "im": "./session",
        "from": "ISessionSettings",
        "name": "ISessionSettings"
      }, {
        "im": "./session",
        "from": "AgentStatusType",
        "name": "AgentStatusType"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IVoiceAudioDetection') && _export("IVoiceAudioDetection", IVoiceAudioDetection = require ? require('./index').IVoiceAudioDetection : value);
        (require || prop === 'BaseRealtimeAgent') && _export("BaseRealtimeAgent", BaseRealtimeAgent = require ? require('./index').BaseRealtimeAgent : value);
        (require || prop === 'ISessionSettings') && _export("ISessionSettings", ISessionSettings = require ? require('./session').ISessionSettings : value);
        (require || prop === 'AgentStatusType') && _export("AgentStatusType", AgentStatusType = require ? require('./session').AgentStatusType : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbXMiLCJyZXF1aXJlIiwiX3Jlc3BvbnNlcyIsIl9zcGVlY2giLCJMT0ciLCJDb252ZXJzYXRpb24iLCJpZCIsImFnZW50Iiwic3BlZWNoIiwiaXRlbXMiLCJyZXNwb25zZXMiLCJjb25zdHJ1Y3RvciIsIkl0ZW1zIiwiQ29udmVyc2F0aW9uUmVzcG9uc2VzIiwiU3BlZWNoIiwic2Vzc2lvbiIsIm9uIiwib25DcmVhdGVkIiwiYmluZCIsIm9uU3BlZWNoU3RhcnRlZCIsIm9uU3BlZWNoU3RvcHBlZCIsImxpc3RlbiIsImNodW5rIiwiYXBwZW5kIiwibG9nIiwiYXJncyIsImNvbnNvbGUiLCJldmVudCIsImNvbnZlcnNhdGlvbiIsIm9uU3RhcnRlZCIsInNwZWVjaFN0YXJ0ZWQiLCJhdWRpbyIsImV4cG9ydHMiLCJfdXRpbHMiLCJfZXZlbnRzIiwiQ29udmVyc2F0aW9uSXRlbUF1ZGlvIiwiRXZlbnRzIiwiZnJlcXVlbmN5IiwidmFsdWUiLCJJbnQxNkFycmF5IiwidHJ1bmNhdGVkIiwiYXVkaW9fZW5kX21zIiwiZW5kSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJzbGljZSIsIm1lcmdlIiwiI21lcmdlIiwiYnVmZmVyIiwiUmVhbHRpbWVVdGlscyIsImJhc2U2NFRvQXJyYXlCdWZmZXIiLCJtZXJnZUludDE2QXJyYXlzIiwiY3JlYXRlZCIsIml0ZW0iLCJ0eXBlIiwiY29udGVudCIsImZvckVhY2giLCJjb250ZW50UGFydEFkZGVkIiwicGFydCIsInRyaWdnZXIiLCJhdWRpb0RlbHRhIiwiZGVsdGEiLCJfdHJhbnNjcmlwdCIsIl9hdWRpbyIsIl90ZXh0IiwiQ29udmVyc2F0aW9uSXRlbUNvbnRlbnQiLCJzdGF0dXMiLCJ0ZXh0IiwiQ29udmVyc2F0aW9uSXRlbVRleHQiLCJ0cmFuc2NyaXB0IiwiQ29udmVyc2F0aW9uSXRlbVRyYW5zY3JpcHQiLCJyb2xlIiwidGV4dERlbHRhIiwiYXVkaW9UcmFuc2NyaXB0RGVsdGEiLCJ0cmFuc2NyaXB0aW9uQ29tcGxldGVkIiwiY29tcGxldGVkIiwiZG9uZSIsIl90b29sIiwiX2NvbnRlbnQiLCJDb252ZXJzYXRpb25JdGVtIiwidG9vbCIsIm91dHB1dCIsInJlc3BvbnNlIiwiYWRkZWQiLCJDb252ZXJzYXRpb25JdGVtVG9vbCIsIm5hbWUiLCJjYWxsZXIiLCJjYWxsX2lkIiwiYXJndW1lbnRzIiwiY2xlYXIiLCJlcnJvciIsIml0ZW1faWQiLCJDb252ZXJzYXRpb25JdGVtU3BlZWNoIiwiYXVkaW9fc3RhcnRfbXMiLCJzcGVlY2hTdG9wcGVkIiwic3RvcHBlZCIsImZ1bmN0aW9uQ2FsbEFyZ3VtZW50c0RlbHRhIiwiaW5wdXQiLCJzdGFydCIsImVuZCIsImRhdGEiLCJfaXRlbSIsIiNzZXNzaW9uIiwibG9va3VwIiwiTWFwIiwiaGFzIiwiZ2V0IiwiZGVsZXRlIiwic3BsaWNlIiwiaW5kZXhPZiIsImVycm9ycyIsIm9ycGhhbnMiLCJvbkl0ZW1DcmVhdGVkIiwib25JdGVtVHJ1bmNhdGVkIiwib25JdGVtRGVsZXRlZCIsIm9uVHJhbnNjcmlwdGlvbkNvbXBsZXRlZCIsIm9uUmVzcG9uc2VJdGVtQWRkZWQiLCJvblJlc3BvbnNlQ29udGVudFBhcnRBZGRlZCIsIm9uUmVzcG9uc2VBdWRpb1RyYW5zY3JpcHREZWx0YSIsIm9uUmVzcG9uc2VBdWRpb0RlbHRhIiwib25SZXNwb25zZVRleHREZWx0YSIsIm9uUmVzcG9uc2VGdW5jdGlvbkNhbGxBcmd1bWVudHNEZWx0YSIsIm9uUmVzcG9uc2VJdGVtRG9uZSIsImNyZWF0ZSIsInByZXZpb3VzIiwiZXZlbnRJZCIsImV2ZW50X2lkIiwicHJldmlvdXNfaXRlbV9pZCIsInNlbmQiLCJtZXNzYWdlIiwiRXJyb3IiLCJwdXNoIiwic2V0IiwicmVzcG9uc2VfaWQiLCJBZ2VudE1hbmFnZXJDb252ZXJzYXRpb25Qcm9ncmVzcyIsIkNvbnZlcnNhdGlvblJlc3BvbnNlIiwidXNhZ2UiLCJpbnB1dFRva2VucyIsIm91dHB1dFRva2VucyIsImlucHV0X3Rva2VucyIsIm91dHB1dF90b2tlbnMiLCJfcmVzcG9uc2UiLCJjb21taXQiLCJDdXJyZW50VXNlclNwZWVjaCIsImxlbmd0aCIsInZhZCIsImJ5dGVMZW5ndGgiLCJfc3RvcmFnZSIsIl9jdXJyZW50Iiwic3RvcmFnZSIsImN1cnJlbnQiLCJTcGVlY2hTdG9yYWdlIiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsImZsdXNoIiwiQlVGRkVSX1NJWkVfTElNSVQiLCJzdHJlYW0iLCJicm93c2VyIiwicHJlcGFyZWQiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyIsInZlcnNpb25zIiwibm9kZSIsInJlYWR5IiwiY2F0Y2giLCJleGMiLCIjcmVhZHkiLCJTdG9yYWdlIiwiYmltcG9ydCIsImJ1Y2tldCIsImZpbGUiLCJjcmVhdGVXcml0ZVN0cmVhbSIsInJlc3VtYWJsZSIsImNvbnRlbnRUeXBlIiwib25lcnJvciIsIm9uZmluaXNoIiwiI29uZmluaXNoIiwib2ZmIiwid2FybiIsIndyaXRlIiwiQnVmZmVyIiwiZnJvbSIsImNsb3NlIiwiQWdlbnRTeXN0ZW0iLCJfc2Vzc2lvbiIsIl9jb252ZXJzYXRpb24iLCJCYXNlUmVhbHRpbWVBZ2VudCIsIm1hbmFnZXIiLCJzZXR0aW5ncyIsIkFnZW50U2Vzc2lvbiIsInRyaWdlciIsImNvbm5lY3QiLCJfY2hhbm5lbCIsImRlZmF1bHRzIiwidXJsIiwibW9kZWwiLCJjaGFubmVsIiwiY29uZmlnIiwic2Vzc2lvblByb3BzIiwia2V5IiwiaGVhZGVycyIsIkNoYW5uZWwiLCJBdXRob3JpemF0aW9uIiwib25vcGVuIiwib25jbG9zZSIsIm9ubWVzc2FnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZXIiLCJvbmNyZWF0ZWQiLCJjbGVhclRpbWVvdXQiLCJzZXNzaW9uQ29uZmlnIiwib250aW1lb3V0Iiwic2V0VGltZW91dCIsIiNvbm9wZW4iLCIjb25jbG9zZSIsIkpTT04iLCJwYXJzZSIsImdlbmVyYXRlSWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHJpbmdpZnkiLCJkZXN0cm95IiwiaW5jbHVkZXMiLCJ1cGRhdGUiLCIjc2Vzc2lvbkNvbmZpZyIsIm9iaiIsImtleXMiLCJwcm9wcyJdLCJzb3VyY2VzIjpbIi9jb252ZXJzYXRpb24vaW5kZXgudHMiLCIvY29udmVyc2F0aW9uL2l0ZW0vYXVkaW8udHMiLCIvY29udmVyc2F0aW9uL2l0ZW0vY29udGVudC50cyIsIi9jb252ZXJzYXRpb24vaXRlbS9pbmRleC50cyIsIi9jb252ZXJzYXRpb24vaXRlbS9zcGVlY2gudHMiLCIvY29udmVyc2F0aW9uL2l0ZW0vdGV4dC50cyIsIi9jb252ZXJzYXRpb24vaXRlbS90b29sLnRzIiwiL2NvbnZlcnNhdGlvbi9pdGVtL3RyYW5zY3JpcHQudHMiLCIvY29udmVyc2F0aW9uL2l0ZW1zLnRzIiwiL2NvbnZlcnNhdGlvbi9wcm9ncmVzcy50cyIsIi9jb252ZXJzYXRpb24vcmVzcG9uc2UudHMiLCIvY29udmVyc2F0aW9uL3Jlc3BvbnNlcy50cyIsIi9jb252ZXJzYXRpb24vc3BlZWNoL2N1cnJlbnQudHMiLCIvY29udmVyc2F0aW9uL3NwZWVjaC9pbmRleC50cyIsIi9jb252ZXJzYXRpb24vc3BlZWNoL3N0b3JhZ2UudHMiLCIvY29udmVyc2F0aW9uL3N5c3RlbS50cyIsIi9pbmRleC50cyIsIi9zZXNzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQU1BLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFVBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE9BQUEsR0FBQUYsT0FBQTtVQUVBLE1BQU1HLEdBQUcsR0FBRyxLQUFLO1VBRVgsTUFBT0MsWUFBWTtZQUN4QixDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FB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QUMsQ0FBQVAsT0FBUSxDQUFDbkIsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTJCLE9BQVEsQ0FBQztjQUN6QyxJQUFJLENBQUMsQ0FBQVIsT0FBUSxDQUFDbkIsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTRCLFNBQVUsQ0FBQztjQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDa0IsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBM0IsT0FBUSxDQUFDakksTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUFpSSxPQUFRLENBQUNkLEtBQUssRUFBRTtZQUNqRjtZQUVBMEMsTUFBTUEsQ0FBQ3pMLEtBQThCO2NBQ3BDLElBQUksQ0FBQyxDQUFBOEosTUFBTyxHQUFHc0IsTUFBTSxDQUFDQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBdkIsTUFBTyxFQUFFOUosS0FBSyxDQUFDO2NBQ3JELE1BQU1YLEtBQUssR0FBOEI7Z0JBQ3hDMkIsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEJ3RSxRQUFRLEVBQUU3RixNQUFBLENBQUFnQixhQUFhLENBQUN3SyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUMxQzFNLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQXFMO2VBQ2Q7Y0FFRDtjQUNBLE1BQU0yQixNQUFNLEdBQUdBLENBQUEsS0FBTSxJQUFJLENBQUMvRixJQUFJLENBQUMsZ0JBQWdCLEVBQUVyRyxLQUFLLENBQUM7Y0FDdkQsSUFBSSxDQUFDdUMsTUFBTSxLQUFLLFNBQVMsR0FBRzZKLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBeE4sS0FBTSxDQUFDUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUrTSxNQUFNLENBQUM7WUFDakY7WUFFQSxNQUFNMUMsS0FBS0EsQ0FBQTtjQUNWLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQWMsT0FBUSxDQUFDZCxLQUFLLEVBQUU7WUFDbkM7WUFFQSxDQUFBNkIsYUFBY2MsQ0FBdUJDLEdBQU0sRUFBRUMsSUFBUztjQUNyRCxNQUFNQyxLQUFLLEdBQUcsRUFBZ0I7Y0FDOUJELElBQUksQ0FBQzFLLE9BQU8sQ0FBQzhJLEdBQUcsSUFBSzZCLEtBQUssQ0FBQzdCLEdBQUcsQ0FBQyxHQUFHMkIsR0FBRyxDQUFDM0IsR0FBRyxDQUFFLENBQUM7Y0FDNUMsT0FBTzZCLEtBQUs7WUFDYjs7VUFDQW5NLE9BQUEsQ0FBQTRKLFlBQUEsR0FBQUEsWUFBQSIsImlnbm9yZUxpc3QiOltdfQ==