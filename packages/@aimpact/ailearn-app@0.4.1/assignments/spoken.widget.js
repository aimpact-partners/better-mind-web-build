System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "dexie@3.2.7", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/entities/assignments/activities/base", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/media-manager@1.0.0/recorder", "pragmate-ui@1.0.0-beta.7/components", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/ailearn-app@0.4.1/config", "@aimpact/ailearn-app@0.4.1/components/icons", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, StoreManager, Aside, AudioPlayer, ContentInformation, DesktopView, SpokenActivityView, MobileView, RecordingButton, PermissionsErrorModal, RecordingControl, PermissionsModal, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    Aside: void 0,
    AudioPlayer: void 0,
    ContentInformation: void 0,
    DesktopView: void 0,
    SpokenActivityView: void 0,
    MobileView: void 0,
    RecordingButton: void 0,
    PermissionsErrorModal: void 0,
    RecordingControl: void 0,
    PermissionsModal: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_dexie2) {
      dependency_3 = _dexie2;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_5 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactChatSdk154Session) {
      dependency_6 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041EntitiesAssignmentsActivitiesBase) {
      dependency_7 = _aimpactAilearnApp041EntitiesAssignmentsActivitiesBase;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_8 = _aimpactChatSdk154ChatComponentCode;
    }, function (_aimpactChatSdk154Voice) {
      dependency_9 = _aimpactChatSdk154Voice;
    }, function (_aimpactMediaManager100Recorder) {
      dependency_10 = _aimpactMediaManager100Recorder;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_12 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_14 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactAilearnApp041Config) {
      dependency_15 = _aimpactAilearnApp041Config;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_17 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_18 = _aimpactAilearnApp041ModelWrapper;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_19 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_20 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_21 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_22 = _pragmateUi100Beta7Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_23 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_24 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_25 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/spoken",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['dexie', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['@aimpact/chat-sdk/voice', dependency_9], ['@aimpact/media-manager/recorder', dependency_10], ['pragmate-ui/components', dependency_11], ['react', dependency_12], ['pragmate-ui/alert', dependency_13], ['@aimpact/chat-sdk/widgets/markdown', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/model/wrapper', dependency_18], ['@aimpact/ailearn-app/components/hooks', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/icons', dependency_24], ['pragmate-ui/modal', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-spoken",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/assignments/spoken.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/spoken/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/assignments/spoken.widget');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./audio-database
      ********************************/
      ims.set('./audio-database', {
        hash: 322848769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.deleteAudioBlob = deleteAudioBlob;
          exports.getAudioBlob = getAudioBlob;
          exports.saveAudioBlob = saveAudioBlob;
          var _dexie = require("dexie");
          // Create the database and table for audio storage
          class AudioDatabase extends _dexie.default {
            audioFiles;
            constructor() {
              super('AudioDatabase');
              this.version(1).stores({
                audioFiles: '++id, name, size, type' // Auto-incrementing ID, name, size, and type fields
              });
              this.audioFiles = this.table('audioFiles');
            }
          }
          // Initialize the database
          const db = new AudioDatabase();
          // Function to save an audio Blob
          async function saveAudioBlob(name, blob) {
            // Check if an audio file with the same name exists
            const existingAudio = await db.audioFiles.where('name').equals(name).first();
            if (existingAudio) {
              // Update the existing audio record
              await db.audioFiles.update(existingAudio.id, {
                size: blob.size,
                type: blob.type,
                blob
              });
              console.log(`Audio with name "${name}" updated (ID: ${existingAudio.id})`);
              return existingAudio.id;
            } else {
              // Add a new audio record
              const id = await db.audioFiles.add({
                name,
                size: blob.size,
                type: blob.type,
                blob
              });
              return id;
            }
          }
          // Function to retrieve an audio Blob by name
          async function getAudioBlob(name) {
            const audio = await db.audioFiles.where('name').equals(name).first();
            if (audio) {
              return audio;
            }
            return undefined;
          }
          // Function to delete an audio Blob by name
          async function deleteAudioBlob(name) {
            try {
              // Retrieve the audio Blob by name
              const audio = await getAudioBlob(name);
              if (!audio) {
                return false; // Return false if the audio is not found
              }
              // Delete the audio Blob from the database
              await db.audioFiles.where('name').equals(name).delete();
              return true; // Return true if the deletion is successful
            } catch (error) {
              console.error(`Failed to delete audio file with name "${name}".`, error);
              return false; // Return false if there was an error
            }
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3527387062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.SpokenActivityView;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.testing = this.uri.qs.get('type') === 'draft';
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {
              _mainLayout.LayoutBroker.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1290593143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _recorder = require("@aimpact/media-manager/recorder");
          var _beyond_context = require("beyond_context");
          var _audioDatabase = require("./audio-database");
          /*bundle*/ //@ts-ignore

          class StoreManager extends _base.BaseStoreManager {
            #introduction;
            get introduction() {
              return this.#introduction;
            }
            #activityId;
            #audioManager = new _chatComponent.AudioManager(this);
            get audioManager() {
              return this.#audioManager;
            }
            #voice;
            get voice() {
              return this.#voice;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #ready;
            get ready() {
              return this.#ready && super.ready;
            }
            #modelId;
            get modelId() {
              return this.#modelId;
            }
            constructor() {
              super(_beyond_context.module.specifier);
              this.#voice = new _voice.Voice();
              this.#recorder = new _recorder.Recorder();
            }
            cleanAudio() {
              this.deleteAudio();
            }
            async load(assigmentId, activityId) {
              super.load(assigmentId, activityId);
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              const audio = await (0, _audioDatabase.getAudioBlob)(name);
              this.#audio = audio?.blob;
              this.#ready = true;
              this.triggerEvent();
            }
            async loadTest(draftId, activityId) {
              super.loadTest(draftId, activityId);
              this.#modelId = draftId;
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              const audio = await (0, _audioDatabase.getAudioBlob)(name);
              this.#audio = audio?.blob;
              this.#ready = true;
              this.triggerEvent();
            }
            sendSpoken = async audio => {
              const params = {
                audio,
                activityId: this.activityId
              };
              if (this.testing) params.draftId = this.#modelId;else params.assignmentId = this.assignmentId;
              const response = await this.model.publishSpoken({
                params,
                type: 'spoken'
              });
              //@ts-ignore
              await this.model.load();
              //await this.tracking.activities.load({ id: this.activityId });
              this.deleteAudio();
              return response;
            };
            async record() {
              return this.#recorder.record();
            }
            async stop() {
              await this.#recorder.stop();
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              this.#audio = this.#recorder.audio;
              this.triggerEvent();
              await (0, _audioDatabase.saveAudioBlob)(name, this.#recorder.audio);
            }
            deleteAudio() {
              const name = `${_session.sessionWrapper.user.id}-${this.assignmentId}-${this.activityId}`;
              this.#audio = undefined;
              this.triggerEvent();
              (0, _audioDatabase.deleteAudioBlob)(name);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/analysis/desktop
      ****************************************/

      ims.set('./views/analysis/desktop', {
        hash: 2879778301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopAnalysis = DesktopAnalysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          function DesktopAnalysis() {
            const {
              store,
              screenSize
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize,
              options: {
                md: _react.default.createElement(_feedback.Feedback, null),
                lg: _react.default.createElement(_feedback.Feedback, null)
              }
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/analysis/feedback
      *****************************************/

      ims.set('./views/analysis/feedback', {
        hash: 173252563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Feedback = Feedback;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _transcription = require("./transcription");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          function Feedback() {
            const {
              store,
              texts,
              audio
            } = (0, _context.useSpokenContext)();
            const {
              id
            } = store.model;
            const {
              id: userId
            } = _session.sessionWrapper.user;
            const feedback = store.model.data.attempts[0];
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${store.assignmentId}/activities/${id}/tracking/${userId}/audio?date=${feedback.date}`;
            const keys = Object.keys(feedback.assessment);
            return _react.default.createElement("section", {
              className: "analysis__container"
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.audio), _react.default.createElement(_ui.AudioPlayer, {
              url: audioUrl
            }), _react.default.createElement(_transcription.Transcription, null)), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.analysis.report), _react.default.createElement("div", {
              className: "feedback__container"
            }, keys.map((property, index) => {
              const item = feedback.assessment[property];
              const icon = `points${item.points}`;
              return _react.default.createElement("article", {
                key: item.name.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container hidden-xs"
              }, _react.default.createElement(_icons.AppIcon, {
                className: "assessment__analysis-icon",
                icon: icon
              })), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement(_icons.AppIcon, {
                className: "visible-xs assessment__analysis-icon",
                icon: icon
              }), _react.default.createElement("h6", null, item.name)), _react.default.createElement("p", null, item.feedback)));
            }))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/analysis/index
      **************************************/

      ims.set('./views/analysis/index', {
        hash: 2862672246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Analysis = Analysis;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          function Analysis() {
            const {
              store
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const screenSize = (0, _hooks.useMediaQuery)();
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopAnalysis, null) : _react.default.createElement(_mobile.MobileAnalysis, null));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/analysis/mobile
      ***************************************/

      ims.set('./views/analysis/mobile', {
        hash: 308185010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileAnalysis = MobileAnalysis;
          var _react = require("react");
          var _feedback = require("./feedback");
          function MobileAnalysis() {
            return _react.default.createElement("div", {
              className: "assessment-analysis__container mt-15"
            }, _react.default.createElement(_feedback.Feedback, null));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/analysis/transcription
      **********************************************/

      ims.set('./views/analysis/transcription', {
        hash: 692852811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Transcription = Transcription;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _collapsible = require("pragmate-ui/collapsible");
          function Transcription() {
            const {
              store,
              screenSize,
              texts
            } = (0, _context.useSpokenContext)();
            const feedback = store.model.data.attempts[0];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: ['xs', 'sm', 'md'].includes(screenSize),
              ternary: true,
              options: {
                true: _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, feedback.transcription)),
                false: _react.default.createElement(_collapsible.CollapsibleContainer, {
                  open: true
                }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h6", null, texts.analysis.transcript)), _react.default.createElement(_collapsible.CollapsibleContent, null, feedback.transcription))
              }
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/aside
      ****************************************/

      ims.set('./views/components/aside', {
        hash: 2385574452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _information = require("./information");
          /*bundle*/
          function Aside() {
            return _react.default.createElement("aside", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/audio-player
      ***********************************************/

      ims.set('./views/components/audio-player', {
        hash: 1190578037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              const onLoadedMetadata = () => {
                if (target.duration !== Infinity) return;
                target.currentTime = 1e101;
                target.ontimeupdate = () => {
                  target.ontimeupdate = null;
                  target.currentTime = 0;
                };
              };
              target.addEventListener('loadedmetadata', onloadeddata);
              return () => target.removeEventListener('loadedmetadata', onLoadedMetadata);
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/information
      **********************************************/

      ims.set('./views/components/information', {
        hash: 513427005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentInformation = ContentInformation;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _session = require("@aimpact/chat-sdk/session");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          /*bundle*/
          function ContentInformation() {
            const {
              store,
              texts
            } = (0, _context.useSpokenContext)();
            const userName = _session.sessionWrapper.user.displayName;
            const alertContent = store.model.getSpecs().task?.replace('%1', userName);
            const Item = ({
              item
            }) => {
              return _react.default.createElement("div", {
                className: "aside__item-list"
              }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.subject));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover activity",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("div", {
              className: "main__content"
            }, _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, texts.activity), _react.default.createElement(_tabs.Tab, null, texts.criteria)), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, _react.default.createElement(_markdown.Markdown, {
              content: alertContent
            }), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              as: "div",
              className: "list-unstyled",
              items: store.model.getSpecs().criteria,
              control: Item
            }))))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1825610531,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSpokenContext = exports.SpokenContext = void 0;
          var _react = require("react");
          const SpokenContext = exports.SpokenContext = _react.default.createContext({});
          const useSpokenContext = () => _react.default.useContext(SpokenContext);
          exports.useSpokenContext = useSpokenContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/desktop
      *******************************/

      ims.set('./views/desktop', {
        hash: 2620558913,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _desktop = require("./analysis/desktop");
          var _aside = require("./components/aside");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs = require("./tabs");
          /*bundle*/
          function DesktopView({
            store
          }) {
            const {
              view,
              setView
            } = (0, _context.useSpokenContext)();
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const [audio, setAudio] = _react.default.useState(store.audio);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setAudio(store.audio);
            });
            return _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container   main-chat-layout spoken-activity"
            }, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "spoken",
              type: store.model.type
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_tabs.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_aside.Aside, null)), _react.default.createElement("div", {
              className: "scrolleable-child no-p"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_desktop.DesktopAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 1802278743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2504108101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivityView = SpokenActivityView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
          function SpokenActivityView({
            store
          }) {
            const [view, setView] = _react.default.useState(!!store.model?.data ? 'analysis' : 'recording');
            const [error, setError] = _react.default.useState(undefined);
            const [recording, setRecording] = _react.default.useState(false);
            const [sending, setSending] = _react.default.useState(false);
            const {
              items,
              ready,
              audio
            } = store;
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            (0, _hooks.useStore)(store, ['change']);
            _react.default.useEffect(() => {
              setView(!!store.model?.data ? 'analysis' : 'recording');
            }, [ready]);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              store,
              recorder: store.recorder,
              recording,
              setRecording,
              texts,
              fetching: store.fetching,
              items,
              audio: store.audio,
              setView,
              sending,
              view,
              error,
              setError,
              setSending,
              screenSize,
              onSubmit: event => {
                event.preventDefault();
                return;
              }
            };
            const props = {
              store
            };
            return _react.default.createElement("div", null, _react.default.createElement(_context.SpokenContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopView, {
              ...props
            }) : _react.default.createElement(_mobile.MobileView, {
              ...props
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/mobile
      ******************************/

      ims.set('./views/mobile', {
        hash: 2771334083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("pragmate-ui/components");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _mobile = require("./analysis/mobile");
          var _information = require("./components/information");
          var _context = require("./context");
          var _recording = require("./recording");
          var _tabs2 = require("./tabs");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function MobileView({
            store
          }) {
            const [items] = (0, _react.useState)(store.items);
            const {
              view,
              texts
            } = (0, _context.useSpokenContext)();
            const {
              displayName: userName,
              id: userId
            } = _session.sessionWrapper.user;
            const {
              assignmentId,
              id
            } = store.model;
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${assignmentId}/activities/${id}/tracking/${userId}/audio`;
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              className: "activity-tabs",
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_tabs2.ButtonTabs, {
              selected: view === 'analysis' ? 0 : 1,
              available: !!store.model.data
            }), _react.default.createElement(_components.ConditionalContainer, {
              condition: view === 'analysis',
              ternary: true,
              options: {
                true: _react.default.createElement(_mobile.MobileAnalysis, null),
                false: _react.default.createElement(_recording.RecordingControl, null)
              }
            })), _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement(_information.ContentInformation, null))), _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.tabs.analysis), _react.default.createElement(_tabs.Tab, null, texts.tabs.activity))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/button
      ****************************************/

      ims.set('./views/recording/button', {
        hash: 2903183929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("./modal");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _errorModal = require("./error-modal");
          /*bundle*/ //@ts-ignore

          const RecordingButton = ({
            disabled,
            action,
            setAction
          }) => {
            const {
              texts,
              recorder,
              recording,
              setRecording,
              audio,
              store
            } = (0, _context.useSpokenContext)();
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)(false);
            const icon = recording ? 'stop' : 'mic';
            const showSend = !recording && audio;
            const message = !recording ? showSend ? 'redo' : 'record' : 'stop';
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [hasPermission, setHasPermission] = (0, _react.useState)(globalThis?.localStorage.getItem('aimpact.recording.permission'));
            const onRecord = async () => {
              try {
                await store.record();
                setRecording(!recording);
                setAction('start');
              } catch (e) {
                setError(true);
              }
            };
            const checkMicrophonePermission = async () => {
              try {
                if (!navigator.permissions) {
                  console.warn('Permissions API is not supported in this browser.');
                  return false; // Default to no permission if API is unavailable
                }
                const permissionStatus = await navigator.permissions.query({
                  name: 'microphone'
                });
                return permissionStatus.state === 'granted';
              } catch (error) {
                console.error(`Error checking microphone permission: ${error}`);
                return false; // Default to no permission in case of an error
              }
            };
            const playAction = async () => {
              try {
                setFetching(true);
                const hasPermission = await checkMicrophonePermission();
                if (!hasPermission) {
                  setShowModal(true);
                  return;
                }
                onRecord();
              } catch (e) {
                console.error(e);
                setError(true);
              } finally {
                setFetching(false);
              }
            };
            const onStop = async event => {
              await store.stop();
              setRecording(false);
              setAction('reset');
            };
            const getUserMedia = () => {
              recorder.hasPermissions().then(() => {
                globalThis?.localStorage.setItem('aimpact.recording.permission', 'true');
                setHasPermission('true');
              }).catch(error => {
                setError(true);
              });
            };
            const ensurePlay = event => {
              event.preventDefault();
              if (!store.hasCredits) {
                setShowCoinsModal(true);
                return;
              }
              playAction();
            };
            const closeModal = () => setShowCoinsModal(false);
            const onAction = action === 'start' ? onStop : ensurePlay;
            const onClose = event => {
              setFetching(false);
              setShowModal(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: icon,
              fetching: fetching,
              onClick: onAction,
              disabled: disabled || fetching
            }, texts[message]), _react.default.createElement(_modal.PermissionsModal, {
              show: showModal,
              onClose: onClose,
              onConfirm: getUserMedia
            }), _react.default.createElement(_errorModal.PermissionsErrorModal, {
              show: error,
              onClose: () => setError(false)
            }), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins
            }));
          };
          exports.RecordingButton = RecordingButton;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/recording/error-modal
      *********************************************/

      ims.set('./views/recording/error-modal', {
        hash: 1218241359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsErrorModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsErrorModal = ({
            show,
            onClose
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const {
              title,
              description
            } = texts.permissions.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("h3", null, title)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsErrorModal = PermissionsErrorModal;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/index
      ***************************************/

      ims.set('./views/recording/index', {
        hash: 2813178619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingControl = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../context");
          var _timer = require("../timer");
          var _button = require("./button");
          var _result = require("./result");
          /*bundle*/
          const RecordingControl = ({
            disabled = false
          }) => {
            const {
              texts,
              recording,
              sending,
              audio,
              store,
              error
            } = (0, _context.useSpokenContext)();
            const ref = _react.default.useRef(null);
            const showSend = !recording && audio;
            const cls = `recording-player__container${sending ? ' is-sending' : ''}`;
            const [action, setAction] = _react.default.useState('');
            const buttonSpecs = {
              disabled,
              action,
              setAction
            };
            return _react.default.createElement(_react.default.Fragment, null, error && _react.default.createElement(_alert.Alert, {
              type: "error",
              variant: "error"
            }, error), audio ? _react.default.createElement(_react.default.Fragment, null, action === 'reset' ? _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.review) : _react.default.createElement(_alert.Alert, {
              type: "info",
              variant: "info"
            }, texts.assessments.existingAudio)) : null, _react.default.createElement("div", {
              className: "spoken__container"
            }, _react.default.createElement("div", {
              className: "recording__container flex-container flex-center"
            }, _react.default.createElement("section", {
              ref: ref,
              className: cls
            }, _react.default.createElement("div", {
              className: "recording-player__content"
            }, !audio ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_timer.Timer, {
              action: action
            }), _react.default.createElement(_button.RecordingButton, {
              ...buttonSpecs
            })) : null, _react.default.createElement(_result.RecordingResult, {
              show: showSend
            })), sending && _react.default.createElement("div", {
              className: "sending__data"
            }, _react.default.createElement("h3", {
              className: "sending-message"
            }, texts.assessments.processingAudio))))));
          };
          exports.RecordingControl = RecordingControl;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/recording/modal
      ***************************************/

      ims.set('./views/recording/modal', {
        hash: 957625054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionsModal = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          /*bundle*/
          const PermissionsModal = ({
            show,
            onClose,
            onConfirm
          }) => {
            if (!show) return null;
            const {
              texts
            } = (0, _context.useSpokenContext)();
            const subtitle = texts.permissions.title;
            const description = texts.permissions.description;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.AlertModal, {
              className: "modal--centered",
              open: true,
              show: true,
              onClose: onClose,
              centered: true,
              onConfirm: onConfirm
            }, _react.default.createElement("div", {
              className: "permissions__modal-container"
            }, _react.default.createElement("div", {
              className: "title-intro__modal-container"
            }, _react.default.createElement("span", {
              className: "intro__modal-text p2"
            }, texts.permissions.intro), _react.default.createElement("h3", null, subtitle)), _react.default.createElement(_icons.Icon, {
              className: "mic__modal-icon lg my-10",
              icon: "mic"
            }), _react.default.createElement("p", {
              className: "description__modal-text"
            }, description))));
          };
          exports.PermissionsModal = PermissionsModal;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/recording/result
      ****************************************/

      ims.set('./views/recording/result', {
        hash: 3044781854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecordingResult = RecordingResult;
          var _react = require("react");
          var _audioPlayer = require("../components/audio-player");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function RecordingResult({
            show
          }) {
            const {
              texts,
              audio,
              setView,
              store,
              setSending,
              sending,
              error,
              setError
            } = (0, _context.useSpokenContext)();
            if (!show) return;
            const onSend = async event => {
              event.preventDefault();
              setSending(true);
              try {
                await store.sendSpoken(audio);
                setView('analysis');
                setSending(false);
              } catch (e) {
                console.error(e);
                setError(texts.assessments.audioError);
              } finally {
                setSending(false);
              }
            };
            const onClean = () => {
              store.cleanAudio();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "recording__result-container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audio
            }), _react.default.createElement("footer", {
              className: "form__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClean
            }, store.globalTexts.actions.recordAgain), _react.default.createElement(_components.Button, {
              icon: "send",
              onClick: onSend,
              variant: "primary"
            }, store.globalTexts.actions.send))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/recording/use-recording
      ***********************************************/

      ims.set('./views/recording/use-recording', {
        hash: 2475814657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRecording = useRecording;
          var _react = require("react");
          var _context = require("../context");
          function useRecording() {
            const {
              recorder,
              recording,
              setRecording
            } = (0, _context.useSpokenContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            // const onPlay = async () => {
            // 	try {
            // 		const recordingState = !recording;
            // 		const permission = await recorder.hasPermissions();
            // 		if (permission.state !== 'granted') setShowModal(true);
            // 		await recorder.record();
            // 		setRecording(recordingState);
            // 		setAction('start');
            // 	} catch (e) {
            // 		console.error('error in on play', e);
            // 	}
            // };
            return {
              showModal,
              setShowModal
            };
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/tabs
      ****************************/

      ims.set('./views/tabs', {
        hash: 2980108176,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonTabs = ButtonTabs;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function ButtonTabs({
            selected,
            available
          }) {
            const {
              texts,
              setView
            } = (0, _context.useSpokenContext)();
            const changeView = event => {
              setView(event.currentTarget.dataset.view);
            };
            if (!available) return null;
            return React.createElement("div", {
              className: "flex-container space-between mt-15"
            }, React.createElement(_components.ButtonGroup, {
              selected: selected,
              variant: "primary",
              onChange: changeView
            }, React.createElement(_components.Button, {
              "data-view": "analysis"
            }, texts.assessments.analysis, " "), React.createElement(_components.Button, {
              "data-view": "record"
            }, texts.assessments.redo, " ")));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/timer/index
      ***********************************/

      ims.set('./views/timer/index', {
        hash: 3970133054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _useTimer = require("./use-timer");
          // Timer.tsx

          function Timer({
            action
          }) {
            const isRunning = ['restart', 'start'].includes(action);
            const restart = ['restart', 'reset'].includes(action);
            const [hours, minutes, seconds, milliseconds] = (0, _useTimer.useTimer)(isRunning, restart, action === 'reset');
            const secRendered = seconds.toString().padStart(2, '0');
            const minutesRendered = minutes.toString().padStart(2, '0');
            return _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", null, `${minutesRendered}`), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", null, `${secRendered}`));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/timer/use-timer
      ***************************************/

      ims.set('./views/timer/use-timer', {
        hash: 1583638382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTimer = useTimer;
          var _react = require("react");
          // useTimer.ts

          const {
            useState,
            useEffect
          } = _react.default;
          function useTimer(isRunning, restart, reset = true) {
            const [time, setTime] = useState(0);
            useEffect(() => {
              let intervalId;
              if (reset) setTime(0);
              if (isRunning) {
                intervalId = setInterval(() => {
                  setTime(prevTime => {
                    return prevTime + 1;
                  });
                }, 10); // 10 ms interval for tracking milliseconds
              }
              return () => {
                clearInterval(intervalId);
              };
            }, [isRunning]);
            useEffect(() => {
              if (restart) {
                setTime(0);
              }
            }, [restart]);
            const milliseconds = time % 100; // 1000 ms in a second, but we're updating every 10 ms
            const seconds = Math.floor(time / 100 % 60); // Converted to seconds
            const minutes = Math.floor(time / 6000 % 60); // Converted to minutes
            const hours = Math.floor(time / 360000); // Converted to hours
            return [hours, minutes, seconds, milliseconds];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/components/aside",
        "from": "Aside",
        "name": "Aside"
      }, {
        "im": "./views/components/audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./views/components/information",
        "from": "ContentInformation",
        "name": "ContentInformation"
      }, {
        "im": "./views/desktop",
        "from": "DesktopView",
        "name": "DesktopView"
      }, {
        "im": "./views/index",
        "from": "SpokenActivityView",
        "name": "SpokenActivityView"
      }, {
        "im": "./views/mobile",
        "from": "MobileView",
        "name": "MobileView"
      }, {
        "im": "./views/recording/button",
        "from": "RecordingButton",
        "name": "RecordingButton"
      }, {
        "im": "./views/recording/error-modal",
        "from": "PermissionsErrorModal",
        "name": "PermissionsErrorModal"
      }, {
        "im": "./views/recording/index",
        "from": "RecordingControl",
        "name": "RecordingControl"
      }, {
        "im": "./views/recording/modal",
        "from": "PermissionsModal",
        "name": "PermissionsModal"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'Aside') && _export("Aside", Aside = require ? require('./views/components/aside').Aside : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./views/components/audio-player').AudioPlayer : value);
        (require || prop === 'ContentInformation') && _export("ContentInformation", ContentInformation = require ? require('./views/components/information').ContentInformation : value);
        (require || prop === 'DesktopView') && _export("DesktopView", DesktopView = require ? require('./views/desktop').DesktopView : value);
        (require || prop === 'SpokenActivityView') && _export("SpokenActivityView", SpokenActivityView = require ? require('./views/index').SpokenActivityView : value);
        (require || prop === 'MobileView') && _export("MobileView", MobileView = require ? require('./views/mobile').MobileView : value);
        (require || prop === 'RecordingButton') && _export("RecordingButton", RecordingButton = require ? require('./views/recording/button').RecordingButton : value);
        (require || prop === 'PermissionsErrorModal') && _export("PermissionsErrorModal", PermissionsErrorModal = require ? require('./views/recording/error-modal').PermissionsErrorModal : value);
        (require || prop === 'RecordingControl') && _export("RecordingControl", RecordingControl = require ? require('./views/recording/index').RecordingControl : value);
        (require || prop === 'PermissionsModal') && _export("PermissionsModal", PermissionsModal = require ? require('./views/recording/modal').PermissionsModal : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGV4aWUiLCJyZXF1aXJlIiwiQXVkaW9EYXRhYmFzZSIsImRlZmF1bHQiLCJhdWRpb0ZpbGVzIiwiY29uc3RydWN0b3IiLCJ2ZXJzaW9uIiwic3RvcmVzIiwidGFibGUiLCJkYiIsInNhdmVBdWRpb0Jsb2IiLCJuYW1lIiwiYmxvYiIsImV4aXN0aW5nQXVkaW8iLCJ3aGVyZSIsImVxdWFscyIsImZpcnN0IiwidXBkYXRlIiwiaWQiLCJzaXplIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJnZXRBdWRpb0Jsb2IiLCJhdWRpbyIsInVuZGVmaW5lZCIsImRlbGV0ZUF1ZGlvQmxvYiIsImRlbGV0ZSIsImVycm9yIiwiX21haW5MYXlvdXQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlNwb2tlbkFjdGl2aXR5VmlldyIsInNob3ciLCJ0ZXN0aW5nIiwidXJpIiwicXMiLCJnZXQiLCJsb2FkIiwidmFycyIsImhpZGUiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImV4cG9ydHMiLCJfc2Vzc2lvbiIsIl9iYXNlIiwiX2NoYXRDb21wb25lbnQiLCJfdm9pY2UiLCJfcmVjb3JkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfYXVkaW9EYXRhYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJpbnRyb2R1Y3Rpb24iLCJhY3Rpdml0eUlkIiwiYXVkaW9NYW5hZ2VyIiwiQXVkaW9NYW5hZ2VyIiwidm9pY2UiLCJyZWNvcmRlciIsInBhcmFtc1VyaSIsInJlYWR5IiwibW9kZWxJZCIsIm1vZHVsZSIsInNwZWNpZmllciIsIlZvaWNlIiwiUmVjb3JkZXIiLCJjbGVhbkF1ZGlvIiwiZGVsZXRlQXVkaW8iLCJhc3NpZ21lbnRJZCIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImFzc2lnbm1lbnRJZCIsInRyaWdnZXJFdmVudCIsImxvYWRUZXN0IiwiZHJhZnRJZCIsInNlbmRTcG9rZW4iLCJwYXJhbXMiLCJyZXNwb25zZSIsIm1vZGVsIiwicHVibGlzaFNwb2tlbiIsInJlY29yZCIsInN0b3AiLCJfcmVhY3QiLCJfZmVlZGJhY2siLCJfY29udGV4dCIsIl9jb21wb25lbnRzIiwiRGVza3RvcEFuYWx5c2lzIiwic2NyZWVuU2l6ZSIsInVzZVNwb2tlbkNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZXJOYW1lIiwidXNlcklkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIm1kIiwiRmVlZGJhY2siLCJsZyIsIl9pY29ucyIsIl91aSIsIl90cmFuc2NyaXB0aW9uIiwiX3dyYXBwZXIiLCJ0ZXh0cyIsImZlZWRiYWNrIiwiZGF0YSIsImF0dGVtcHRzIiwiYXVkaW9VcmwiLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwiZGF0ZSIsImtleXMiLCJPYmplY3QiLCJhc3Nlc3NtZW50IiwiYW5hbHlzaXMiLCJBdWRpb1BsYXllciIsInVybCIsIlRyYW5zY3JpcHRpb24iLCJyZXBvcnQiLCJtYXAiLCJwcm9wZXJ0eSIsImluZGV4IiwiaXRlbSIsImljb24iLCJwb2ludHMiLCJrZXkiLCJyZXBsYWNlIiwiQXBwSWNvbiIsIl9ob29rcyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkFuYWx5c2lzIiwiYWxlcnRDb250ZW50IiwiZ2V0U3BlY3MiLCJ0YXNrIiwidXNlTWVkaWFRdWVyeSIsImluY2x1ZGVzIiwiTW9iaWxlQW5hbHlzaXMiLCJfY29sbGFwc2libGUiLCJGcmFnbWVudCIsInRlcm5hcnkiLCJ0cnVlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRyYW5zY3JpcHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiZmFsc2UiLCJvcGVuIiwiX2luZm9ybWF0aW9uIiwiQXNpZGUiLCJDb250ZW50SW5mb3JtYXRpb24iLCJzcmMiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJkdXJhdGlvbiIsIkluZmluaXR5IiwiY3VycmVudFRpbWUiLCJvbnRpbWV1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25sb2FkZWRkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9tYXJrZG93biIsIl9saXN0IiwiX3RhYnMiLCJJdGVtIiwic3ViamVjdCIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImVudGl0eSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiVGFiIiwiYWN0aXZpdHkiLCJjcml0ZXJpYSIsIlBhbmVzIiwiTWFya2Rvd24iLCJjb250ZW50IiwiTGlzdCIsImFzIiwiaXRlbXMiLCJjb250cm9sIiwiU3Bva2VuQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FzaWRlIiwiX3JlY29yZGluZyIsIkRlc2t0b3BWaWV3IiwidmlldyIsInNldFZpZXciLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0QXVkaW8iLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsIkJ1dHRvblRhYnMiLCJzZWxlY3RlZCIsImF2YWlsYWJsZSIsIlJlY29yZGluZ0NvbnRyb2wiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwic2V0RXJyb3IiLCJyZWNvcmRpbmciLCJzZXRSZWNvcmRpbmciLCJzZW5kaW5nIiwic2V0U2VuZGluZyIsInVzZVN0b3JlIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJQcm92aWRlciIsIk1vYmlsZVZpZXciLCJfdGFiczIiLCJ0YWJzIiwiX21vZGFsIiwiX2Vycm9yTW9kYWwiLCJSZWNvcmRpbmdCdXR0b24iLCJkaXNhYmxlZCIsImFjdGlvbiIsInNldEFjdGlvbiIsInNldEZldGNoaW5nIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwic2hvd1NlbmQiLCJtZXNzYWdlIiwic2hvd0NvaW5zTW9kYWwiLCJzZXRTaG93Q29pbnNNb2RhbCIsImhhc1Blcm1pc3Npb24iLCJzZXRIYXNQZXJtaXNzaW9uIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvblJlY29yZCIsImUiLCJjaGVja01pY3JvcGhvbmVQZXJtaXNzaW9uIiwibmF2aWdhdG9yIiwicGVybWlzc2lvbnMiLCJwZXJtaXNzaW9uU3RhdHVzIiwicXVlcnkiLCJzdGF0ZSIsInBsYXlBY3Rpb24iLCJvblN0b3AiLCJnZXRVc2VyTWVkaWEiLCJoYXNQZXJtaXNzaW9ucyIsInRoZW4iLCJzZXRJdGVtIiwiY2F0Y2giLCJlbnN1cmVQbGF5IiwiaGFzQ3JlZGl0cyIsImNsb3NlTW9kYWwiLCJvbkFjdGlvbiIsIm9uQ2xvc2UiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsIlBlcm1pc3Npb25zTW9kYWwiLCJvbkNvbmZpcm0iLCJQZXJtaXNzaW9uc0Vycm9yTW9kYWwiLCJDb2luc01vZGFsIiwiZ2xvYmFsVGV4dHMiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJkZXNjcmlwdGlvbiIsIkFsZXJ0TW9kYWwiLCJjZW50ZXJlZCIsIkljb24iLCJfYWxlcnQiLCJfdGltZXIiLCJfYnV0dG9uIiwiX3Jlc3VsdCIsImNscyIsImJ1dHRvblNwZWNzIiwiQWxlcnQiLCJhc3Nlc3NtZW50cyIsInJldmlldyIsIlRpbWVyIiwiUmVjb3JkaW5nUmVzdWx0IiwicHJvY2Vzc2luZ0F1ZGlvIiwic3VidGl0bGUiLCJpbnRybyIsIl9hdWRpb1BsYXllciIsIm9uU2VuZCIsImF1ZGlvRXJyb3IiLCJvbkNsZWFuIiwiYm9yZGVyZWQiLCJhY3Rpb25zIiwicmVjb3JkQWdhaW4iLCJzZW5kIiwidXNlUmVjb3JkaW5nIiwiUmVhY3QiLCJjaGFuZ2VWaWV3IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJCdXR0b25Hcm91cCIsIm9uQ2hhbmdlIiwicmVkbyIsIl91c2VUaW1lciIsImlzUnVubmluZyIsInJlc3RhcnQiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwidXNlVGltZXIiLCJzZWNSZW5kZXJlZCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzUmVuZGVyZWQiLCJyZXNldCIsInRpbWUiLCJzZXRUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZXMiOlsiL3RzL2F1ZGlvLWRhdGFiYXNlLnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYW5hbHlzaXMvZGVza3RvcC50c3giLCIvdHMvdmlld3MvYW5hbHlzaXMvZmVlZGJhY2sudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hbmFseXNpcy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL2FuYWx5c2lzL3RyYW5zY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXNpZGUudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2luZm9ybWF0aW9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2J1dHRvbi50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL2Vycm9yLW1vZGFsLnRzeCIsIi90cy92aWV3cy9yZWNvcmRpbmcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3JlY29yZGluZy9tb2RhbC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3Jlc3VsdC50c3giLCIvdHMvdmlld3MvcmVjb3JkaW5nL3VzZS1yZWNvcmRpbmcudHN4IiwiL3RzL3ZpZXdzL3RhYnMudHN4IiwiL3RzL3ZpZXdzL3RpbWVyL2luZGV4LnRzeCIsIi90cy92aWV3cy90aW1lci91c2UtdGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUE7VUFDQSxNQUFNQyxhQUFjLFNBQVFGLE1BQUEsQ0FBQUcsT0FBSztZQUNoQ0MsVUFBVTtZQUVWQyxZQUFBO2NBQ0MsS0FBSyxDQUFDLGVBQWUsQ0FBQztjQUN0QixJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUN0QkgsVUFBVSxFQUFFLHdCQUF3QixDQUFDO2VBQ3JDLENBQUM7Y0FDRixJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDM0M7O1VBWUQ7VUFDQSxNQUFNQyxFQUFFLEdBQUcsSUFBSVAsYUFBYSxFQUFFO1VBRTlCO1VBQ08sZUFBZVEsYUFBYUEsQ0FBQ0MsSUFBWSxFQUFFQyxJQUFVO1lBQzNEO1lBQ0EsTUFBTUMsYUFBYSxHQUFHLE1BQU1KLEVBQUUsQ0FBQ0wsVUFBVSxDQUFDVSxLQUFLLENBQUMsTUFBTSxD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