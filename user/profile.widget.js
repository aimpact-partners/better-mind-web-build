System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/wrapper", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/ailearn-app@0.4.1/config", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_beyondJsReact18Widgets114Base) {
      dependency_5 = _beyondJsReact18Widgets114Base;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_beyondJsKernel0112Routing) {
      dependency_7 = _beyondJsKernel0112Routing;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_8 = _aimpactChatSdk154Wrapper;
    }, function (_beyondJsReactive204Model) {
      dependency_9 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_10 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_11 = _beyondJsKernel0112Texts;
    }, function (_aimpactChatSdk154Voice) {
      dependency_12 = _aimpactChatSdk154Voice;
    }, function (_aimpactAilearnApp041Config) {
      dependency_13 = _aimpactAilearnApp041Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_15 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_16 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactChatSdk154Session) {
      dependency_17 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Components) {
      dependency_18 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_19 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_20 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp041ModelGclassroom) {
      dependency_21 = _aimpactAilearnApp041ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_23 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/ailearn-app/model/gclassroom', dependency_21], ['pragmate-ui/image', dependency_22], ['pragmate-ui/modal', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.4.1/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/user/profile.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2877862235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProfileContext = exports.ProfileContext = void 0;
          var _react = require("react");
          const ProfileContext = exports.ProfileContext = _react.default.createContext({});
          const useProfileContext = () => _react.default.useContext(ProfileContext);
          exports.useProfileContext = useProfileContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2173183130,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load();
            }
            hide() {
              _mainLayout.LayoutBroker.overlay = false;
              _mainLayout.LayoutBroker.clearModel();
              _mainLayout.LayoutBroker.backLink = undefined;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 575011769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _render = require("@beyond-js/widgets/render");
          var _beyond_context = require("beyond_context");
          var _voice = require("@aimpact/chat-sdk/voice");
          //@ts-ignore

          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get supportedLanguages() {
              return [..._core.languages.supported.keys()];
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #voices = _voice.voiceManager;
            get voices() {
              return this.#voices;
            }
            selectedVoices = new Map();
            get unpublished() {
              if (super.unpublished) return true;
              // Verificar si alguna voz seleccionada es diferente a la voz por defecto
              for (const language of this.supportedLanguages) {
                const selectedVoice = this.selectedVoices.get(language);
                const defaultVoice = this.voices.getDefault(language)?.name;
                if (selectedVoice && selectedVoice !== defaultVoice) return true;
              }
              return false;
            }
            constructor() {
              super({
                properties: ['language', 'accessibility', 'audioSpeed']
              });
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              const audioSpeed = [null, undefined, 'undefined'].includes(localStorage.getItem('aimpact.audio.speed')) ? 1 : parseFloat(localStorage.getItem('aimpact.audio.speed'));
              const accessibilityMode = ['dyslexia', 'normal'].includes(localStorage.getItem('aimpact.chat.accessibility')) ? localStorage.getItem('aimpact.chat.accessibility') : 'normal';
              this.reactiveProps(['language', 'accessibility', 'audioSpeed']);
              super.ready = true;
              this.set({
                accessibility: accessibilityMode,
                language: _core.languages.current,
                audioSpeed: audioSpeed
              });
              this.saveChanges();
              globalThis.store = this;
            }
            save = () => {
              this.fetching = true;
              _core.languages.current = this.language;
              const container = document.querySelector('html');
              // Guardar las voces seleccionadas si han cambiado
              const defaultVoices = {};
              let hasVoiceChanges = false;
              this.supportedLanguages.forEach(lang => {
                const selectedVoice = this.selectedVoices.get(lang);
                const defaultVoice = this.voices.getDefault(lang)?.name;
                if (selectedVoice && selectedVoice !== defaultVoice) {
                  defaultVoices[lang] = selectedVoice;
                  hasVoiceChanges = true;
                }
              });
              if (hasVoiceChanges) {
                this.voices.setDefaults(defaultVoices);
              }
              _wrapper.AppWrapper.setSettings({
                accessibility: this.accessibility,
                audioSpeed: this.audioSpeed,
                language: this.language
              });
              _wrapper.AppWrapper.accessibility = this.accessibility;
              _wrapper.AppWrapper.audioSpeed = this.audioSpeed;
              _wrapper.AppWrapper.language = this.language;
              container.setAttribute('data-accessibility-mode', this.accessibility);
              localStorage.setItem('aimpact.accessibility.mode', this.accessibility);
              localStorage.setItem('aimpact.audio.speed', String(this.audioSpeed));
              _render.widgets.attributes.add('data-accessibility-mode', this.accessibility);
              window.setTimeout(() => {
                //the layoutBroker logic is only for a while until we have a better solution
                _core.languages.current = this.language;
                _mainLayout.LayoutBroker.overlay = true;
                this.saveChanges();
                this.fetching = false;
              }, 1000);
              return true;
            };
            async isReady() {
              const promise = new _core.PendingPromise();
              if (this.ready) {
                promise.resolve(true);
              } else {
                const onChange = () => {
                  if (this.ready) {
                    this.#texts.off('change', onChange);
                    this.#globalTexts.off('change', onChange);
                    promise.resolve(true);
                  }
                };
                this.#texts.on('change', onChange);
                this.#globalTexts.on('change', onChange);
              }
              return promise;
            }
            async load() {
              await this.isReady();
              await this.#voices.ready();
              // Inicializar las voces por defecto para cada idioma soportado
              this.supportedLanguages.forEach(lang => {
                this.selectedVoices.set(lang, this.voices.getDefault(lang).name);
              });
              _mainLayout.LayoutBroker.set({
                overlay: true,
                language: _core.languages.current,
                breadcrumb: [[this.globalTexts.entities.profile]]
              });
            }
            getSelectedVoice(language) {
              return this.selectedVoices.get(language) || this.voices.getDefault(language).name;
            }
            setSelectedVoice(language, voiceName) {
              this.selectedVoices.set(language, voiceName);
              this.triggerEvent();
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/audio
      *****************************/

      ims.set('./views/audio', {
        hash: 329133774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioSettings = AudioSettings;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function AudioSettings() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [value, setValue] = _react.default.useState(1);
            (0, _hooks.useBinder)([store], () => {
              setValue(store.audioSpeed);
            });
            const onInput = event => {
              store.audioSpeed = event.currentTarget.value;
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", null, texts.audio.title), _react.default.createElement("section", {
              className: "audio__container field__container"
            }, _react.default.createElement("h5", {
              htmlFor: "audioRange"
            }, texts.audio.speed, _react.default.createElement("input", {
              value: store.audioSpeed,
              name: "audioRange",
              onInput: onInput,
              type: "range",
              max: "2",
              min: "0.25",
              step: "0.25"
            })), _react.default.createElement("div", {
              className: "speed__quantity"
            }, _react.default.createElement("span", null, "0.25"), _react.default.createElement("span", null, "0.50"), _react.default.createElement("span", null, "0.75"), _react.default.createElement("span", null, "1"), _react.default.createElement("span", null, "1.25"), _react.default.createElement("span", null, "1.50"), _react.default.createElement("span", null, "1.75"), _react.default.createElement("span", null, "2"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 139036657,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserCoins = UserCoins;
          var _react = require("react");
          var _context = require("../context");
          var _alert = require("pragmate-ui/alert");
          function UserCoins() {
            const {
              store,
              user
            } = (0, _context.useProfileContext)();
            const {
              texts
            } = store;
            if (!user.coins?.assignments?.count && !user.coins?.modules?.count) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "profile-coins__section"
            }, _react.default.createElement("h3", null, texts.coins.label), _react.default.createElement("div", {
              className: "coins-detail__container"
            }, _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.assignments), _react.default.createElement("span", null, user.coins.assignments.count)), _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.modules), _react.default.createElement("span", null, user.coins.modules.count))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3810338301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _session = require("@aimpact/chat-sdk/session");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _audio = require("./audio");
          var _coins = require("./coins");
          var _languageSelector = require("./language-selector");
          var _modeSelection = require("./mode-selection");
          var _ImagePicker = require("./profile-image/ImagePicker");
          var _languages = require("./languages");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [{
              fetching
            }, setStore] = _react.default.useState({
              isUnpublished: store.isUnpublished,
              fetching: store.fetching
            });
            const [accessibility, setAccessibilty] = _react.default.useState(store.accessibility);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setStore({
                isUnpublished: store.isUnpublished,
                fetching: store.fetching
              });
              setAccessibilty(store.dyslexia);
            });
            if (!ready) return null;
            const userProps = _session.sessionWrapper.user.getProperties();
            const {
              displayName,
              email
            } = userProps;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ProfileContext.Provider, {
              value: {
                user: _session.sessionWrapper.user,
                store,
                texts,
                fetching
              }
            }, _react.default.createElement(_ui.PageContainer, {
              className: "profile-container"
            }, _react.default.createElement("main", null, _react.default.createElement("header", {
              className: "profile-header"
            }, _react.default.createElement(_ImagePicker.default, {
              userProps: userProps
            }), _react.default.createElement("h4", {
              className: "h3"
            }, displayName)), _react.default.createElement("div", {
              className: "divider-section"
            }), _react.default.createElement(_coins.UserCoins, null), _react.default.createElement("div", {
              className: "profile__item"
            }, _react.default.createElement("h5", null, texts.email), _react.default.createElement("span", null, email)), _react.default.createElement(_languageSelector.LanguageSelector, null), _react.default.createElement(_modeSelection.ModeSelection, null), _react.default.createElement(_audio.AudioSettings, null), _react.default.createElement(_languages.AudioLanguages, null), store.isUnpublished && _react.default.createElement(_components.Button, {
              variant: "primary",
              fetching: fetching,
              onClick: store.save
            }, texts.save)), _react.default.createElement("footer", {
              className: "app-version"
            }, texts.version, ": ", _config.default.version))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/language-selector/index
      ***********************************************/

      ims.set('./views/language-selector/index', {
        hash: 921351075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageSelector = LanguageSelector;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function LanguageSelector() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [language, setLanguage] = _react.default.useState(store.language);
            (0, _hooks.useBinder)([store], () => setLanguage(store.language));
            const handleChange = event => {
              store.language = event.target.value;
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.language), _react.default.createElement("section", {
              className: "language-selector  field__container"
            }, _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'en',
              name: "language",
              value: "en",
              label: "English"
            }), _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'es',
              name: "language",
              value: "es",
              label: "Espa\u00F1ol"
            }), _react.default.createElement(_form.Radio, {
              onChange: handleChange,
              checked: store.language === 'de',
              name: "language",
              value: "de",
              label: "Deutsch"
            })));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/languages/index
      ***************************************/

      ims.set('./views/languages/index', {
        hash: 979961709,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioLanguages = AudioLanguages;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          function AudioLanguages() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [playing, setPlaying] = _react.default.useState(null);
            const onChange = (language, isActive) => {
              setPlaying(isActive ? language : null);
            };
            const languages = store.supportedLanguages.map(item => {
              const disabled = playing !== null && playing !== item;
              return _react.default.createElement(_item.AudioLanguageItem, {
                key: `language-${item}`,
                language: item,
                disabled: disabled,
                onChange: isActive => onChange(item, isActive)
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts.audio.voices.label), languages);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/languages/item
      **************************************/

      ims.set('./views/languages/item', {
        hash: 1558673445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioLanguageItem = AudioLanguageItem;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          function AudioLanguageItem({
            language,
            disabled,
            onChange
          }) {
            const {
              store,
              texts
            } = (0, _context.useProfileContext)();
            const globalTexts = store.globalTexts;
            const [isPlaying, setIsPlaying] = _react.default.useState(false);
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /iPad|iPhone|iPod/.test(navigator.userAgent);
            const handleVoiceChange = event => {
              store.setSelectedVoice(language, event.target.value);
            };
            const sampleTexts = {
              en: 'Hello! This is RVD.AI, your educational assistant.',
              es: '¡Hola! Soy RVD.AI, tu asistente educativo.'
            };
            const onClick = () => {
              if (isPlaying) {
                globalThis.speechSynthesis.cancel();
                setIsPlaying(false);
                onChange(false);
                return;
              }
              const utterance = new SpeechSynthesisUtterance(sampleTexts[language]);
              const selectedVoice = store.getSelectedVoice(language);
              const voice = store.voices.byLang(language).find(v => v.name === selectedVoice);
              if (voice) {
                utterance.voice = voice;
                utterance.lang = voice.lang;
                utterance.onend = () => {
                  setIsPlaying(false);
                  onChange(false);
                };
                utterance.onstart = () => {
                  setIsPlaying(true);
                  onChange(true);
                };
                window.speechSynthesis.speak(utterance);
              }
            };
            return _react.default.createElement("div", {
              className: "language__container"
            }, _react.default.createElement("div", {
              className: "language-name__container"
            }, _react.default.createElement("h5", null, globalTexts.languages[language].name), _react.default.createElement("div", {
              className: "language-name__field"
            }, _react.default.createElement("select", {
              value: store.getSelectedVoice(language),
              onChange: handleVoiceChange
            }, store.voices.byLang(language).map(voice => _react.default.createElement("option", {
              key: `voice-${voice.voiceURI}`,
              value: voice.name
            }, isSafari ? `${voice.name} (${voice.lang})` : voice.name))), _react.default.createElement(_icons.IconButton, {
              icon: isPlaying ? 'stop' : 'play',
              onClick: onClick,
              disabled: disabled
            }))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/mode-selection
      **************************************/

      ims.set('./views/mode-selection', {
        hash: 253434066,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModeSelection = ModeSelection;
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _form = require("pragmate-ui/form");
          function ModeSelection() {
            const {
              texts,
              store
            } = (0, _context.useProfileContext)();
            const [checked, setChecked] = _react.default.useState(store.accessibility === 'dyslexia');
            (0, _hooks.useBinder)([store], () => setChecked(store.accessibility === 'dyslexia'));
            const onChange = async event => {
              const value = store.accessibility === 'dyslexia' ? 'normal' : 'dyslexia';
              await store.set({
                accessibility: value
              });
              // setChecked(value === 'd	yslexia');
              event.preventDefault();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: " field__container"
            }, _react.default.createElement("h5", null, texts.textMode), _react.default.createElement("section", {
              className: "language-selector"
            }, _react.default.createElement(_form.Checkbox, {
              onChange: onChange,
              checked: checked,
              name: "check",
              label: texts.dyslexia
            }))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/permissions/index
      *****************************************/

      ims.set('./views/permissions/index', {
        hash: 805220452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Permissions = Permissions;
          var _react = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
          function Permissions() {
            const {
              texts
            } = (0, _context.useProfileContext)();
            const connectionValues = [{
              src: '/assets/gclassroom.png',
              alt: 'Google classroom',
              title: texts.permissions.gclassroom.title,
              check: _gclassroom.gclassroom.authorized,
              modal: true
            }];
            return _react.default.createElement("div", {
              className: "permissions__container"
            }, _react.default.createElement("label", null, texts.permissions.title), _react.default.createElement("div", {
              className: "permissions-items__container"
            }, connectionValues.map((connectionValue, index) => _react.default.createElement(_item.PermissionItem, {
              key: index,
              connectionValue: connectionValue,
              texts: texts
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/permissions/interfaces
      **********************************************/

      ims.set('./views/permissions/interfaces', {
        hash: 1464281530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/permissions/item
      ****************************************/

      ims.set('./views/permissions/item', {
        hash: 4207650292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PermissionItem = void 0;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          const PermissionItem = ({
            connectionValue,
            texts
          }) => {
            const [checkedItem, setCheckedItem] = _react.default.useState(connectionValue.check);
            const [show, setShow] = _react.default.useState(false);
            const handleVincularClick = () => {
              setShow(!show);
            };
            const handleModal = () => {
              setShow(!show);
            };
            const addButton = () => {
              return _react.default.createElement("div", {
                className: "permission-menu__item"
              }, _react.default.createElement(_components.Button, {
                icon: "add",
                variant: "primary",
                onClick: handleVincularClick,
                label: connectionValue.title
              }));
            };
            const addLabel = () => {
              const src = connectionValue.src ? connectionValue.src : connectionValue.icon;
              const alt = connectionValue.src ? connectionValue.alt : connectionValue.title;
              return _react.default.createElement("div", {
                className: "permission-menu__item admit"
              }, _react.default.createElement(_image.Image, {
                src: src,
                alt: alt
              }), _react.default.createElement("span", null, connectionValue.title));
            };
            const Control = !checkedItem ? addButton : addLabel;
            return _react.default.createElement("div", {
              className: "permission-item"
            }, _react.default.createElement(Control, null), show && connectionValue?.modal && _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "beauty-modal",
              onClose: handleModal
            }, _react.default.createElement("ailearn-gclassroom-permissions", null)));
          };
          exports.PermissionItem = PermissionItem;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/profile-image/ImagePicker
      *************************************************/

      ims.set('./views/profile-image/ImagePicker', {
        hash: 1499835956,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ImagePicker;
          var _react = require("react");
          var _ = require("./");
          function ImagePicker({
            userProps
          }) {
            const [img, setImg] = _react.default.useState(userProps.photoURL);
            return _react.default.createElement("section", {
              className: "user-image-wrapper"
            }, img && _react.default.createElement(_.UserImage, {
              src: img ?? '',
              alt: userProps.displayName
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/profile-image/index
      *******************************************/

      ims.set('./views/profile-image/index', {
        hash: 2599470037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserImage = UserImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function UserImage({
            src,
            alt
          }) {
            return _react.default.createElement(_image.Image, {
              className: "user-image",
              src: src,
              alt: alt
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwicmVhZHkiLCJnbG9iYWxUZXh0cyIsInZvaWNlcyIsInZvaWNlTWFuYWdlciIsInNlbGVjdGVkVm9pY2VzIiwiTWFwIiwidW5wdWJsaXNoZWQiLCJsYW5ndWFnZSIsInNlbGVjdGVkVm9pY2UiLCJnZXQiLCJkZWZhdWx0Vm9pY2UiLCJnZXREZWZhdWx0IiwibmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJzZXQiLCJhY2Nlc3NpYmlsaXR5IiwiY3VycmVudCIsInNhdmVDaGFuZ2VzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRWb2ljZXMiLCJoYXNWb2ljZUNoYW5nZXMiLCJmb3JFYWNoIiwibGFuZyIsInNldERlZmF1bHRzIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImlzUmVhZHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2UiLCJvZmYiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJwcm9maWxlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsInNldFNlbGVjdGVkVm9pY2UiLCJ2b2ljZU5hbWUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiX2F1ZGlvIiwiX2NvaW5zIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZXMiLCJzZXRSZWFkeSIsInNldFN0b3JlIiwiaXNVbnB1Ymxpc2hlZCIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQXVkaW9MYW5ndWFnZXMiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJjaGVja2VkIiwiX2l0ZW0iLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImlzQWN0aXZlIiwibWFwIiwiaXRlbSIsImRpc2FibGVkIiwiQXVkaW9MYW5ndWFnZUl0ZW0iLCJrZXkiLCJfaWNvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc1NhZmFyaSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYW5kbGVWb2ljZUNoYW5nZSIsInNhbXBsZVRleHRzIiwiZW4iLCJlcyIsInNwZWVjaFN5bnRoZXNpcyIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInZvaWNlIiwiYnlMYW5nIiwiZmluZCIsInYiLCJvbmVuZCIsIm9uc3RhcnQiLCJzcGVhayIsInZvaWNlVVJJIiwiSWNvbkJ1dHRvbiIsImljb24iLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2djbGFzc3Jvb20iLCJQZXJtaXNzaW9ucyIsImNvbm5lY3Rpb25WYWx1ZXMiLCJzcmMiLCJhbHQiLCJwZXJtaXNzaW9ucyIsImdjbGFzc3Jvb20iLCJjaGVjayIsImF1dGhvcml6ZWQiLCJtb2RhbCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiUGVybWlzc2lvbkl0ZW0iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsIl9tb2RhbCIsImNoZWNrZWRJdGVtIiwic2V0Q2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFVTyxNQUFNQyxjQUFjLEdBQUFDLE9BQUEsQ0FBQUQsY0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQXFCLENBQUM7VUFDakUsTUFBTUMsaUJBQWlCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsY0FBYyxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsaUJBQUEsR0FBQUEsaUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWHhFLElBQUFFLEtBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLFdBQUEsR0FBQVYsT0FBQTtVQUVPO1VBQVUsTUFDWFcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBRWhDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksRUFBRTtZQUNuQjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hWLFdBQUEsQ0FBQVcsWUFBWSxDQUFDQyxPQUFPLEdBQUcsS0FBSztjQUM1QlosV0FBQSxDQUFBVyxZQUFZLENBQUNFLFVBQVUsRUFBRTtjQUN6QmIsV0FBQSxDQUFBVyxZQUFZLENBQUNHLFFBQVEsR0FBR0MsU0FBUztZQUNsQzs7VUFDQXZCLE9BQUEsQ0FBQVMsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBRCxXQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLEtBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsTUFBQSxHQUFBN0IsT0FBQTtVQUNBLElBQUE4QixPQUFBLEdBQUE5QixPQUFBO1VBQ0EsSUFBQStCLGVBQUEsR0FBQS9CLE9BQUE7VUFFQSxJQUFBZ0MsTUFBQSxHQUFBaEMsT0FBQTtVQURBOztVQVNNLE1BQU9lLFlBQWEsU0FBUVksTUFBQSxDQUFBTSxhQUFxQjtZQUl0RCxDQUFBQyxLQUFNLEdBQStCLElBQUlMLE1BQUEsQ0FBQU0sWUFBWSxDQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFDQSxJQUFJQyxrQkFBa0JBLENBQUE7Y0FDckIsT0FBTyxDQUFDLEdBQUdYLEtBQUEsQ0FBQVksU0FBUyxDQUFDQyxTQUFTLENBQUNDLElBQUksRUFBRSxDQUFDO1lBQ3ZDO1lBQ0EsSUFBSUMsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ1MsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBQyxXQUFZLENBQUNELEtBQUs7WUFDbkU7WUFFQSxDQUFBQyxXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ04sS0FBSztZQUMvQjtZQUVBLENBQUFPLE1BQU8sR0FBaUJiLE1BQUEsQ0FBQWMsWUFBWTtZQUNwQyxJQUFJRCxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNRRSxjQUFjLEdBQXdCLElBQUlDLEdBQUcsRUFBRTtZQUV2RCxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsSUFBSSxLQUFLLENBQUNBLFdBQVcsRUFBRSxPQUFPLElBQUk7Y0FFbEM7Y0FDQSxLQUFLLE1BQU1DLFFBQVEsSUFBSSxJQUFJLENBQUNYLGtCQUFrQixFQUFFO2dCQUMvQyxNQUFNWSxhQUFhLEdBQUcsSUFBSSxDQUFDSixjQUFjLENBQUNLLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDO2dCQUN2RCxNQUFNRyxZQUFZLEdBQUcsSUFBSSxDQUFDUixNQUFNLENBQUNTLFVBQVUsQ0FBQ0osUUFBUSxDQUFDLEVBQUVLLElBQUk7Z0JBQzNELElBQUlKLGFBQWEsSUFBSUEsYUFBYSxLQUFLRSxZQUFZLEVBQUUsT0FBTyxJQUFJOztjQUVqRSxPQUFPLEtBQUs7WUFDYjtZQUVBRyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUNMQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLFlBQVk7ZUFDdEQsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxDQUFDd0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQWYsV0FBWSxHQUFHLElBQUlmLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBUyxXQUFZLENBQUNjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FFakQsTUFBTUMsVUFBVSxHQUFXLENBQUMsSUFBSSxFQUFFbkMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDb0MsUUFBUSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQzVHLENBQUMsR0FDREMsVUFBVSxDQUFDRixZQUFZLENBQUNDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2NBRTFELE1BQU1FLGlCQUFpQixHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDSixRQUFRLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsR0FDMUdELFlBQVksQ0FBQ0MsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEdBQ2xELFFBQVE7Y0FFWCxJQUFJLENBQUNHLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7Y0FDL0QsS0FBSyxDQUFDdkIsS0FBSyxHQUFHLElBQUk7Y0FFbEIsSUFBSSxDQUFDd0IsR0FBRyxDQUFDO2dCQUNSQyxhQUFhLEVBQUVILGlCQUFpQjtnQkFDaENmLFFBQVEsRUFBRXRCLEtBQUEsQ0FBQVksU0FBUyxDQUFDNkIsT0FBTztnQkFDM0JULFVBQVUsRUFBRUE7ZUFDWixDQUFDO2NBQ0YsSUFBSSxDQUFDVSxXQUFXLEVBQUU7Y0FDbEJDLFVBQVUsQ0FBQzFELEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBRUEyRCxJQUFJLEdBQUdBLENBQUEsS0FBSztjQUNYLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7Y0FDcEI3QyxLQUFBLENBQUFZLFNBQVMsQ0FBQzZCLE9BQU8sR0FBRyxJQUFJLENBQUNuQixRQUFRO2NBRWpDLE1BQU13QixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUVoRDtjQUNBLE1BQU1DLGFBQWEsR0FBRyxFQUFFO2NBQ3hCLElBQUlDLGVBQWUsR0FBRyxLQUFLO2NBRTNCLElBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDd0MsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3RDLE1BQU03QixhQUFhLEdBQUcsSUFBSSxDQUFDSixjQUFjLENBQUNLLEdBQUcsQ0FBQzRCLElBQUksQ0FBQztnQkFDbkQsTUFBTTNCLFlBQVksR0FBRyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsVUFBVSxDQUFDMEIsSUFBSSxDQUFDLEVBQUV6QixJQUFJO2dCQUV2RCxJQUFJSixhQUFhLElBQUlBLGFBQWEsS0FBS0UsWUFBWSxFQUFFO2tCQUNwRHdCLGFBQWEsQ0FBQ0csSUFBSSxDQUFDLEdBQUc3QixhQUFhO2tCQUNuQzJCLGVBQWUsR0FBRyxJQUFJOztjQUV4QixDQUFDLENBQUM7Y0FFRixJQUFJQSxlQUFlLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ29DLFdBQVcsQ0FBQ0osYUFBYSxDQUFDOztjQUd2Q25ELFFBQUEsQ0FBQXdELFVBQVUsQ0FBQ0MsV0FBVyxDQUFDO2dCQUN0QmYsYUFBYSxFQUFFLElBQUksQ0FBQ0EsYUFBYTtnQkFDakNSLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVU7Z0JBQzNCVixRQUFRLEVBQUUsSUFBSSxDQUFDQTtlQUNmLENBQUM7Y0FDRnhCLFFBQUEsQ0FBQXdELFVBQVUsQ0FBQ2QsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYTtjQUM3QzFDLFFBQUEsQ0FBQXdELFVBQVUsQ0FBQ3RCLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVU7Y0FDdkNsQyxRQUFBLENBQUF3RCxVQUFVLENBQUNoQyxRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRO2NBQ25Dd0IsU0FBUyxDQUFDVSxZQUFZLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDaEIsYUFBYSxDQUFDO2NBQ3JFTixZQUFZLENBQUN1QixPQUFPLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDakIsYUFBYSxDQUFDO2NBQ3RFTixZQUFZLENBQUN1QixPQUFPLENBQUMscUJBQXFCLEVBQUVDLE1BQU0sQ0FBQyxJQUFJLENBQUMxQixVQUFVLENBQUMsQ0FBQztjQUNwRTlCLE9BQUEsQ0FBQXlELE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDckIsYUFBYSxDQUFDO2NBRXJFc0IsTUFBTSxDQUFDQyxVQUFVLENBQUMsTUFBSztnQkFDdEI7Z0JBQ0EvRCxLQUFBLENBQUFZLFNBQVMsQ0FBQzZCLE9BQU8sR0FBRyxJQUFJLENBQUNuQixRQUFRO2dCQUNqQ3hDLFdBQUEsQ0FBQVcsWUFBWSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtnQkFFM0IsSUFBSSxDQUFDZ0QsV0FBVyxFQUFFO2dCQUNsQixJQUFJLENBQUNHLFFBQVEsR0FBRyxLQUFLO2NBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDUixPQUFPLElBQUk7WUFDWixDQUFDO1lBRUQsTUFBTW1CLE9BQU9BLENBQUE7Y0FDWixNQUFNQyxPQUFPLEdBQUcsSUFBSWpFLEtBQUEsQ0FBQWtFLGNBQWMsRUFBRTtjQUNwQyxJQUFJLElBQUksQ0FBQ25ELEtBQUssRUFBRTtnQkFDZmtELE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQztlQUNyQixNQUFNO2dCQUNOLE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFLO2tCQUNyQixJQUFJLElBQUksQ0FBQ3JELEtBQUssRUFBRTtvQkFDZixJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDK0QsR0FBRyxDQUFDLFFBQVEsRUFBRUQsUUFBUSxDQUFDO29CQUNuQyxJQUFJLENBQUMsQ0FBQXBELFdBQVksQ0FBQ3FELEdBQUcsQ0FBQyxRQUFRLEVBQUVELFFBQVEsQ0FBQztvQkFDekNILE9BQU8sQ0FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQzs7Z0JBRXZCLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUE3RCxLQUFNLENBQUN3QixFQUFFLENBQUMsUUFBUSxFQUFFc0MsUUFBUSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsQ0FBQXBELFdBQVksQ0FBQ2MsRUFBRSxDQUFDLFFBQVEsRUFBRXNDLFFBQVEsQ0FBQzs7Y0FHekMsT0FBT0gsT0FBTztZQUNmO1lBQ0EsTUFBTTFFLElBQUlBLENBQUE7Y0FDVCxNQUFNLElBQUksQ0FBQ3lFLE9BQU8sRUFBRTtjQUNwQixNQUFNLElBQUksQ0FBQyxDQUFBL0MsTUFBTyxDQUFDRixLQUFLLEVBQUU7Y0FFMUI7Y0FDQSxJQUFJLENBQUNKLGtCQUFrQixDQUFDd0MsT0FBTyxDQUFDQyxJQUFJLElBQUc7Z0JBQ3RDLElBQUksQ0FBQ2pDLGNBQWMsQ0FBQ29CLEdBQUcsQ0FBQ2EsSUFBSSxFQUFFLElBQUksQ0FBQ25DLE1BQU0sQ0FBQ1MsVUFBVSxDQUFDMEIsSUFBSSxDQUFDLENBQUN6QixJQUFJLENBQUM7Y0FDakUsQ0FBQyxDQUFDO2NBRUY3QyxXQUFBLENBQUFXLFlBQVksQ0FBQzhDLEdBQUcsQ0FBQztnQkFDaEI3QyxPQUFPLEVBQUUsSUFBSTtnQkFDYjRCLFFBQVEsRUFBRXRCLEtBQUEsQ0FBQVksU0FBUyxDQUFDNkIsT0FBTztnQkFDM0I2QixVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQ3RELFdBQVcsQ0FBQ3VELFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2VBQ2hELENBQUM7WUFDSDtZQUVBQyxnQkFBZ0JBLENBQUNuRCxRQUFnQjtjQUNoQyxPQUFPLElBQUksQ0FBQ0gsY0FBYyxDQUFDSyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQ0wsTUFBTSxDQUFDUyxVQUFVLENBQUNKLFFBQVEsQ0FBQyxDQUFDSyxJQUFJO1lBQ2xGO1lBRUErQyxnQkFBZ0JBLENBQUNwRCxRQUFnQixFQUFFcUQsU0FBaUI7Y0FDbkQsSUFBSSxDQUFDeEQsY0FBYyxDQUFDb0IsR0FBRyxDQUFDakIsUUFBUSxFQUFFcUQsU0FBUyxDQUFDO2NBQzVDLElBQUksQ0FBQzVDLFlBQVksRUFBRTtZQUNwQjs7VUFDQXpELE9BQUEsQ0FBQWEsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVLRCxJQUFBaEIsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQXdHLFFBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBeUcsTUFBQSxHQUFBekcsT0FBQTtVQUVNLFNBQVUwRyxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRXhFLEtBQUs7Y0FBRXJCO1lBQUssQ0FBRSxHQUFHLElBQUEyRixRQUFBLENBQUFuRyxpQkFBaUIsR0FBRTtZQUM1QyxNQUFNLENBQUNpQyxLQUFLLEVBQUVxRSxRQUFRLENBQUMsR0FBRzVHLE1BQUEsQ0FBQUksT0FBSyxDQUFDeUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFBSCxNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDaEcsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjhGLFFBQVEsQ0FBQzlGLEtBQUssQ0FBQytDLFVBQVUsQ0FBQztZQUMzQixDQUFDLENBQUM7WUFFRixNQUFNa0QsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJsRyxLQUFLLENBQUMrQyxVQUFVLEdBQUdtRCxLQUFLLENBQUNDLGFBQWEsQ0FBQzFFLEtBQUs7WUFDN0MsQ0FBQztZQUVELE9BQ0N2QyxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQWxILE1BQUEsQ0FBQUksT0FBQSxDQUFBK0csUUFBQSxRQUNDbkgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLGdCQUFRL0UsS0FBSyxDQUFDaUYsS0FBSyxDQUFDQyxLQUFLLENBQVMsRUFDbENySCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBU0ksU0FBUyxFQUFDO1lBQW1DLEdBQ3JEdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQUlLLE9BQU8sRUFBQztZQUFZLEdBQ3RCcEYsS0FBSyxDQUFDaUYsS0FBSyxDQUFDSSxLQUFLLEVBRWxCeEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQ0MzRSxLQUFLLEVBQUV6QixLQUFLLENBQUMrQyxVQUFVO2NBQ3ZCTCxJQUFJLEVBQUMsWUFBWTtjQUNqQnVELE9BQU8sRUFBRUEsT0FBTztjQUNoQlUsSUFBSSxFQUFDLE9BQU87Y0FDWkMsR0FBRyxFQUFDLEdBQUc7Y0FDUEMsR0FBRyxFQUFDLE1BQU07Y0FDVkMsSUFBSSxFQUFDO1lBQU0sRUFDVixDQUNFLEVBQ0w1SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEdBQy9CdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLHNCQUFpQixFQUNqQmxILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxzQkFBaUIsRUFDakJsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsc0JBQWlCLEVBQ2pCbEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLG1CQUFjLEVBQ2RsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsc0JBQWlCLEVBQ2pCbEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLHNCQUFpQixFQUNqQmxILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxzQkFBaUIsRUFDakJsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsbUJBQWMsQ0FDVCxDQUNHLENBQ1I7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQWxILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3RyxRQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQTRILE1BQUEsR0FBQTVILE9BQUE7VUFFTSxTQUFVNkgsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVoSCxLQUFLO2NBQUVpSDtZQUFJLENBQUUsR0FBRyxJQUFBdEIsUUFBQSxDQUFBbkcsaUJBQWlCLEdBQUU7WUFDM0MsTUFBTTtjQUFFNkI7WUFBSyxDQUFFLEdBQUdyQixLQUFLO1lBRXZCLElBQUksQ0FBQ2lILElBQUksQ0FBQ0MsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLEtBQUssSUFBSSxDQUFDSCxJQUFJLENBQUNDLEtBQUssRUFBRUcsT0FBTyxFQUFFRCxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQy9FLE9BQ0NsSSxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ1csTUFBQSxDQUFBTyxLQUFLO2NBQUNYLElBQUksRUFBQyxNQUFNO2NBQUNILFNBQVMsRUFBQztZQUF3QixHQUNwRHRILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxhQUFLL0UsS0FBSyxDQUFDNkYsS0FBSyxDQUFDSyxLQUFLLENBQU0sRUFFNUJySSxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUFxQixHQUNuQ3RILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxlQUFPL0UsS0FBSyxDQUFDNkYsS0FBSyxDQUFDQyxXQUFXLENBQVEsRUFDdENqSSxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsZUFBT2EsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSyxDQUFRLENBQ3RDLEVBQ05sSSxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXFCLEdBQ25DdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLGVBQU8vRSxLQUFLLENBQUM2RixLQUFLLENBQUNHLE9BQU8sQ0FBUSxFQUNsQ25JLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxlQUFPYSxJQUFJLENBQUNDLEtBQUssQ0FBQ0csT0FBTyxDQUFDRCxLQUFLLENBQVEsQ0FDbEMsQ0FDRCxDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFJLEdBQUEsR0FBQXJJLE9BQUE7VUFDQSxJQUFBc0ksT0FBQSxHQUFBdEksT0FBQTtVQUNBLElBQUF1SSxRQUFBLEdBQUF2SSxPQUFBO1VBQ0EsSUFBQXlHLE1BQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBd0ksV0FBQSxHQUFBeEksT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3RyxRQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQXlJLE1BQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUNBLElBQUEySSxpQkFBQSxHQUFBM0ksT0FBQTtVQUNBLElBQUE0SSxjQUFBLEdBQUE1SSxPQUFBO1VBQ0EsSUFBQTZJLFlBQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBOEksVUFBQSxHQUFBOUksT0FBQTtVQUVPO1VBQVUsU0FDUmlCLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQ3RCLE1BQU0sQ0FBQzhCLEtBQUssRUFBRW9HLFFBQVEsQ0FBQyxHQUFHaEosTUFBQSxDQUFBSSxPQUFLLENBQUN5RyxRQUFRLENBQUMvRixLQUFLLENBQUM4QixLQUFLLENBQUM7WUFFckQsTUFBTSxDQUFDO2NBQUU4QjtZQUFRLENBQUUsRUFBRXVFLFFBQVEsQ0FBQyxHQUFHakosTUFBQSxDQUFBSSxPQUFLLENBQUN5RyxRQUFRLENBQUM7Y0FDL0NxQyxhQUFhLEVBQUVwSSxLQUFLLENBQUNvSSxhQUFhO2NBQ2xDeEUsUUFBUSxFQUFFNUQsS0FBSyxDQUFDNEQ7YUFDaEIsQ0FBQztZQUNGLE1BQU0sQ0FBQ0wsYUFBYSxFQUFFOEUsZUFBZSxDQUFDLEdBQUduSixNQUFBLENBQUFJLE9BQUssQ0FBQ3lHLFFBQVEsQ0FBQy9GLEtBQUssQ0FBQ3VELGFBQWEsQ0FBQztZQUM1RSxNQUFNO2NBQUVsQztZQUFLLENBQUUsR0FBR3JCLEtBQUs7WUFDdkIsSUFBQTRGLE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUNoRyxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCa0ksUUFBUSxDQUFDbEksS0FBSyxDQUFDOEIsS0FBSyxDQUFDO2NBRXJCcUcsUUFBUSxDQUFDO2dCQUFFQyxhQUFhLEVBQUVwSSxLQUFLLENBQUNvSSxhQUFhO2dCQUFFeEUsUUFBUSxFQUFFNUQsS0FBSyxDQUFDNEQ7Y0FBUSxDQUFFLENBQUM7Y0FDMUV5RSxlQUFlLENBQUNySSxLQUFLLENBQUNzSSxRQUFRLENBQUM7WUFDaEMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDeEcsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixNQUFNeUcsU0FBUyxHQUFHYixRQUFBLENBQUFjLGNBQWMsQ0FBQ3ZCLElBQUksQ0FBQ3dCLGFBQWEsRUFBRTtZQUVyRCxNQUFNO2NBQUVDLFdBQVc7Y0FBRUM7WUFBSyxDQUFFLEdBQUdKLFNBQVM7WUFFeEMsT0FDQ3JKLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFBbEgsTUFBQSxDQUFBSSxPQUFBLENBQUErRyxRQUFBLFFBQ0NuSCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ1QsUUFBQSxDQUFBdkcsY0FBYyxDQUFDd0osUUFBUTtjQUFDbkgsS0FBSyxFQUFFO2dCQUFFd0YsSUFBSSxFQUFFUyxRQUFBLENBQUFjLGNBQWMsQ0FBQ3ZCLElBQUk7Z0JBQUVqSCxLQUFLO2dCQUFFcUIsS0FBSztnQkFBRXVDO2NBQVE7WUFBRSxHQUNwRjFFLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDb0IsR0FBQSxDQUFBcUIsYUFBYTtjQUFDckMsU0FBUyxFQUFDO1lBQW1CLEdBQzNDdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLGVBQ0NsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBUUksU0FBUyxFQUFDO1lBQWdCLEdBQ2pDdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUM0QixZQUFBLENBQUExSSxPQUFXO2NBQUNpSixTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNyQ3JKLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQTtjQUFJSSxTQUFTLEVBQUM7WUFBSSxHQUFFa0MsV0FBVyxDQUFNLENBQzdCLEVBQ1R4SixNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDbkN0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ3lCLE1BQUEsQ0FBQWIsU0FBUyxPQUFHLEVBQ2I5SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWUsR0FDN0J0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsYUFBSy9FLEtBQUssQ0FBQ3NILEtBQUssQ0FBTSxFQUN0QnpKLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxlQUFPdUMsS0FBSyxDQUFRLENBQ2YsRUFDTnpKLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDMEIsaUJBQUEsQ0FBQWdCLGdCQUFnQixPQUFHLEVBQ3BCNUosTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUMyQixjQUFBLENBQUFnQixhQUFhLE9BQUcsRUFDakI3SixNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ3dCLE1BQUEsQ0FBQS9CLGFBQWEsT0FBRyxFQUNqQjNHLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDNkIsVUFBQSxDQUFBZSxjQUFjLE9BQUcsRUFHakJoSixLQUFLLENBQUNvSSxhQUFhLElBQ25CbEosTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUN1QixXQUFBLENBQUFzQixNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUN0RixRQUFRLEVBQUVBLFFBQVE7Y0FBRXVGLE9BQU8sRUFBRW5KLEtBQUssQ0FBQzJEO1lBQUksR0FDL0R0QyxLQUFLLENBQUNzQyxJQUFJLENBRVosQ0FDSyxFQUNQekUsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQVFJLFNBQVMsRUFBQztZQUFhLEdBQzdCbkYsS0FBSyxDQUFDK0gsT0FBTyxFLE1BQUkzQixPQUFBLENBQUFuSSxPQUFNLENBQUM4SixPQUFPLENBQ3hCLENBQ00sQ0FDUyxDQUN4QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFQSxJQUFBbEssTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtLLEtBQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBd0csUUFBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUF5RyxNQUFBLEdBQUF6RyxPQUFBO1VBRU0sU0FBVTJKLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUV6SCxLQUFLO2NBQUVyQjtZQUFLLENBQUUsR0FBRyxJQUFBMkYsUUFBQSxDQUFBbkcsaUJBQWlCLEdBQUU7WUFFNUMsTUFBTSxDQUFDNkMsUUFBUSxFQUFFaUgsV0FBVyxDQUFDLEdBQUdwSyxNQUFBLENBQUFJLE9BQUssQ0FBQ3lHLFFBQVEsQ0FBQy9GLEtBQUssQ0FBQ3FDLFFBQVEsQ0FBQztZQUU5RCxJQUFBdUQsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQ2hHLEtBQUssQ0FBQyxFQUFFLE1BQU1zSixXQUFXLENBQUN0SixLQUFLLENBQUNxQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxNQUFNa0gsWUFBWSxHQUFHckQsS0FBSyxJQUFHO2NBQzVCbEcsS0FBSyxDQUFDcUMsUUFBUSxHQUFHNkQsS0FBSyxDQUFDc0QsTUFBTSxDQUFDL0gsS0FBSztZQUNwQyxDQUFDO1lBQ0QsT0FDQ3ZDLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFBbEgsTUFBQSxDQUFBSSxPQUFBLENBQUErRyxRQUFBLFFBQ0NuSCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsYUFBSy9FLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBTSxFQUN6Qm5ELE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBcUMsR0FDdkR0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ2lELEtBQUEsQ0FBQUksS0FBSztjQUNMdEUsUUFBUSxFQUFFb0UsWUFBWTtjQUN0QkcsT0FBTyxFQUFFMUosS0FBSyxDQUFDcUMsUUFBUSxLQUFLLElBQUk7Y0FDaENLLElBQUksRUFBQyxVQUFVO2NBQ2ZqQixLQUFLLEVBQUMsSUFBSTtjQUNWOEYsS0FBSyxFQUFDO1lBQVMsRUFDZCxFQUNGckksTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUNpRCxLQUFBLENBQUFJLEtBQUs7Y0FDTHRFLFFBQVEsRUFBRW9FLFlBQVk7Y0FDdEJHLE9BQU8sRUFBRTFKLEtBQUssQ0FBQ3FDLFFBQVEsS0FBSyxJQUFJO2NBQ2hDSyxJQUFJLEVBQUMsVUFBVTtjQUNmakIsS0FBSyxFQUFDLElBQUk7Y0FDVjhGLEtBQUssRUFBQztZQUFTLEVBQ2QsRUFDRnJJLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDaUQsS0FBQSxDQUFBSSxLQUFLO2NBQ0x0RSxRQUFRLEVBQUVvRSxZQUFZO2NBQ3RCRyxPQUFPLEVBQUUxSixLQUFLLENBQUNxQyxRQUFRLEtBQUssSUFBSTtjQUNoQ0ssSUFBSSxFQUFDLFVBQVU7Y0FDZmpCLEtBQUssRUFBQyxJQUFJO2NBQ1Y4RixLQUFLLEVBQUM7WUFBUyxFQUNkLENBUU8sQ0FDUjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBckksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdHLFFBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBd0ssS0FBQSxHQUFBeEssT0FBQTtVQUVNLFNBQVU2SixjQUFjQSxDQUFBO1lBQzdCLE1BQU07Y0FBRTNILEtBQUs7Y0FBRXJCO1lBQUssQ0FBRSxHQUFHLElBQUEyRixRQUFBLENBQUFuRyxpQkFBaUIsR0FBRTtZQUM1QyxNQUFNLENBQUNvSyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHM0ssTUFBQSxDQUFBSSxPQUFLLENBQUN5RyxRQUFRLENBQWdCLElBQUksQ0FBQztZQUVqRSxNQUFNWixRQUFRLEdBQUdBLENBQUM5QyxRQUFnQixFQUFFeUgsUUFBaUIsS0FBSTtjQUN4REQsVUFBVSxDQUFDQyxRQUFRLEdBQUd6SCxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxNQUFNVixTQUFTLEdBQUczQixLQUFLLENBQUMwQixrQkFBa0IsQ0FBQ3FJLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2NBQ3JELE1BQU1DLFFBQVEsR0FBR0wsT0FBTyxLQUFLLElBQUksSUFBSUEsT0FBTyxLQUFLSSxJQUFJO2NBRXJELE9BQ0M5SyxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ3VELEtBQUEsQ0FBQU8saUJBQWlCO2dCQUNqQkMsR0FBRyxFQUFFLFlBQVlILElBQUksRUFBRTtnQkFDdkIzSCxRQUFRLEVBQUUySCxJQUFJO2dCQUNkQyxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCOUUsUUFBUSxFQUFFMkUsUUFBUSxJQUFJM0UsUUFBUSxDQUFDNkUsSUFBSSxFQUFFRixRQUFRO2NBQUMsRUFDN0M7WUFFSixDQUFDLENBQUM7WUFFRixPQUNDNUssTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUFsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQStHLFFBQUEsUUFDQ25ILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxhQUFLL0UsS0FBSyxDQUFDaUYsS0FBSyxDQUFDdEUsTUFBTSxDQUFDdUYsS0FBSyxDQUFNLEVBQ2xDNUYsU0FBUyxDQUNSO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUF6QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0csUUFBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUFpTCxNQUFBLEdBQUFqTCxPQUFBO1VBUU0sU0FBVStLLGlCQUFpQkEsQ0FBQztZQUFFN0gsUUFBUTtZQUFFNEgsUUFBUTtZQUFFOUU7VUFBUSxDQUEwQjtZQUN6RixNQUFNO2NBQUVuRixLQUFLO2NBQUVxQjtZQUFLLENBQUUsR0FBRyxJQUFBc0UsUUFBQSxDQUFBbkcsaUJBQWlCLEdBQUU7WUFDNUMsTUFBTXVDLFdBQVcsR0FBRy9CLEtBQUssQ0FBQytCLFdBQVc7WUFDckMsTUFBTSxDQUFDc0ksU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3BMLE1BQUEsQ0FBQUksT0FBSyxDQUFDeUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2RCxNQUFNd0UsUUFBUSxHQUNiLGdDQUFnQyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLElBQUksa0JBQWtCLENBQUNGLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUM7WUFFM0csTUFBTUMsaUJBQWlCLEdBQUl6RSxLQUEyQyxJQUFJO2NBQ3pFbEcsS0FBSyxDQUFDeUYsZ0JBQWdCLENBQUNwRCxRQUFRLEVBQUU2RCxLQUFLLENBQUNzRCxNQUFNLENBQUMvSCxLQUFLLENBQUM7WUFDckQsQ0FBQztZQUVELE1BQU1tSixXQUFXLEdBQUc7Y0FDbkJDLEVBQUUsRUFBRSxvREFBb0Q7Y0FDeERDLEVBQUUsRUFBRTthQUNKO1lBRUQsTUFBTTNCLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCLElBQUlrQixTQUFTLEVBQUU7Z0JBQ2QzRyxVQUFVLENBQUNxSCxlQUFlLENBQUNDLE1BQU0sRUFBRTtnQkFDbkNWLFlBQVksQ0FBQyxLQUFLLENBQUM7Z0JBQ25CbkYsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDZjs7Y0FHRCxNQUFNOEYsU0FBUyxHQUFHLElBQUlDLHdCQUF3QixDQUFDTixXQUFXLENBQUN2SSxRQUFRLENBQUMsQ0FBQztjQUNyRSxNQUFNQyxhQUFhLEdBQUd0QyxLQUFLLENBQUN3RixnQkFBZ0IsQ0FBQ25ELFFBQVEsQ0FBQztjQUN0RCxNQUFNOEksS0FBSyxHQUFHbkwsS0FBSyxDQUFDZ0MsTUFBTSxDQUFDb0osTUFBTSxDQUFDL0ksUUFBUSxDQUFDLENBQUNnSixJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDNUksSUFBSSxLQUFLSixhQUFhLENBQUM7Y0FFL0UsSUFBSTZJLEtBQUssRUFBRTtnQkFDVkYsU0FBUyxDQUFDRSxLQUFLLEdBQUdBLEtBQUs7Z0JBQ3ZCRixTQUFTLENBQUM5RyxJQUFJLEdBQUdnSCxLQUFLLENBQUNoSCxJQUFJO2dCQUMzQjhHLFNBQVMsQ0FBQ00sS0FBSyxHQUFHLE1BQUs7a0JBQ3RCakIsWUFBWSxDQUFDLEtBQUssQ0FBQztrQkFDbkJuRixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNoQixDQUFDO2dCQUNEOEYsU0FBUyxDQUFDTyxPQUFPLEdBQUcsTUFBSztrQkFDeEJsQixZQUFZLENBQUMsSUFBSSxDQUFDO2tCQUNsQm5GLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRE4sTUFBTSxDQUFDa0csZUFBZSxDQUFDVSxLQUFLLENBQUNSLFNBQVMsQ0FBQzs7WUFFekMsQ0FBQztZQUVELE9BQ0MvTCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXFCLEdBQ25DdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUEwQixHQUN4Q3RILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxhQUFLckUsV0FBVyxDQUFDSixTQUFTLENBQUNVLFFBQVEsQ0FBQyxDQUFDSyxJQUFJLENBQU0sRUFDL0N4RCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXNCLEdBQ3BDdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQVEzRSxLQUFLLEVBQUV6QixLQUFLLENBQUN3RixnQkFBZ0IsQ0FBQ25ELFFBQVEsQ0FBQztjQUFFOEMsUUFBUSxFQUFFd0Y7WUFBaUIsR0FDMUUzSyxLQUFLLENBQUNnQyxNQUFNLENBQUNvSixNQUFNLENBQUMvSSxRQUFRLENBQUMsQ0FBQzBILEdBQUcsQ0FBQ29CLEtBQUssSUFDdkNqTSxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBUStELEdBQUcsRUFBRSxTQUFTZ0IsS0FBSyxDQUFDTyxRQUFRLEVBQUU7Y0FBRWpLLEtBQUssRUFBRTBKLEtBQUssQ0FBQ3pJO1lBQUksR0FDdkQ2SCxRQUFRLEdBQUcsR0FBR1ksS0FBSyxDQUFDekksSUFBSSxLQUFLeUksS0FBSyxDQUFDaEgsSUFBSSxHQUFHLEdBQUdnSCxLQUFLLENBQUN6SSxJQUFJLENBRXpELENBQUMsQ0FDTSxFQUNUeEQsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUNnRSxNQUFBLENBQUF1QixVQUFVO2NBQUNDLElBQUksRUFBRXZCLFNBQVMsR0FBRyxNQUFNLEdBQUcsTUFBTTtjQUFFbEIsT0FBTyxFQUFFQSxPQUFPO2NBQUVjLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ2xGLENBQ0QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZFQSxJQUFBL0ssTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdHLFFBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBeUcsTUFBQSxHQUFBekcsT0FBQTtVQUNBLElBQUFrSyxLQUFBLEdBQUFsSyxPQUFBO1VBRU0sU0FBVTRKLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFMUgsS0FBSztjQUFFckI7WUFBSyxDQUFFLEdBQUcsSUFBQTJGLFFBQUEsQ0FBQW5HLGlCQUFpQixHQUFFO1lBRTVDLE1BQU0sQ0FBQ2tLLE9BQU8sRUFBRW1DLFVBQVUsQ0FBQyxHQUFHM00sTUFBQSxDQUFBSSxPQUFLLENBQUN5RyxRQUFRLENBQUMvRixLQUFLLENBQUN1RCxhQUFhLEtBQUssVUFBVSxDQUFDO1lBRWhGLElBQUFxQyxNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDaEcsS0FBSyxDQUFDLEVBQUUsTUFBTTZMLFVBQVUsQ0FBQzdMLEtBQUssQ0FBQ3VELGFBQWEsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUV4RSxNQUFNNEIsUUFBUSxHQUFHLE1BQU1lLEtBQUssSUFBRztjQUM5QixNQUFNekUsS0FBSyxHQUFHekIsS0FBSyxDQUFDdUQsYUFBYSxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsVUFBVTtjQUN4RSxNQUFNdkQsS0FBSyxDQUFDc0QsR0FBRyxDQUFDO2dCQUFFQyxhQUFhLEVBQUU5QjtjQUFLLENBQUUsQ0FBQztjQUN6QztjQUVBeUUsS0FBSyxDQUFDNEYsY0FBYyxFQUFFO1lBQ3ZCLENBQUM7WUFFRCxPQUNDNU0sTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUFsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQStHLFFBQUEsUUFDQ25ILE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBbUIsR0FDakN0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsYUFBSy9FLEtBQUssQ0FBQzBLLFFBQVEsQ0FBTSxFQUN6QjdNLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQTtjQUFTSSxTQUFTLEVBQUM7WUFBbUIsR0FDckN0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ2lELEtBQUEsQ0FBQTJDLFFBQVE7Y0FBQzdHLFFBQVEsRUFBRUEsUUFBUTtjQUFFdUUsT0FBTyxFQUFFQSxPQUFPO2NBQUVoSCxJQUFJLEVBQUMsT0FBTztjQUFDNkUsS0FBSyxFQUFFbEcsS0FBSyxDQUFDaUg7WUFBUSxFQUFJLENBQzdFLENBQ0wsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBcEosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdHLFFBQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBd0ssS0FBQSxHQUFBeEssT0FBQTtVQUNBLElBQUE4TSxXQUFBLEdBQUE5TSxPQUFBO1VBRU0sU0FBVStNLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFN0s7WUFBSyxDQUFFLEdBQUcsSUFBQXNFLFFBQUEsQ0FBQW5HLGlCQUFpQixHQUFFO1lBRXJDLE1BQU0yTSxnQkFBZ0IsR0FBRyxDQUN4QjtjQUNDQyxHQUFHLEVBQUUsd0JBQXdCO2NBQzdCQyxHQUFHLEVBQUUsa0JBQWtCO2NBQ3ZCOUYsS0FBSyxFQUFFbEYsS0FBSyxDQUFDaUwsV0FBVyxDQUFDQyxVQUFVLENBQUNoRyxLQUFLO2NBQ3pDaUcsS0FBSyxFQUFFUCxXQUFBLENBQUFNLFVBQVUsQ0FBQ0UsVUFBVTtjQUM1QkMsS0FBSyxFQUFFO2FBQ1AsQ0FDRDtZQUVELE9BQ0N4TixNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQXdCLEdBQ3RDdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLGdCQUFRL0UsS0FBSyxDQUFDaUwsV0FBVyxDQUFDL0YsS0FBSyxDQUFTLEVBQ3hDckgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQUtJLFNBQVMsRUFBQztZQUE4QixHQUMzQzJGLGdCQUFnQixDQUFDcEMsR0FBRyxDQUFDLENBQUM0QyxlQUFlLEVBQUVDLEtBQUssS0FDNUMxTixNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ3VELEtBQUEsQ0FBQWtELGNBQWM7Y0FBQzFDLEdBQUcsRUFBRXlDLEtBQUs7Y0FBRUQsZUFBZSxFQUFFQSxlQUFlO2NBQUV0TCxLQUFLLEVBQUVBO1lBQUssRUFDMUUsQ0FBQyxDQUNHLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7VUM1QkE7O1VBRUF5TCxNQUFBLENBQUFDLGNBQUEsQ0FBQTFOLE9BQUE7WUFDQW9DLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBdkMsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTZOLE1BQUEsR0FBQTdOLE9BQUE7VUFDQSxJQUFBOE4sTUFBQSxHQUFBOU4sT0FBQTtVQUVBLElBQUF3SSxXQUFBLEdBQUF4SSxPQUFBO1VBRU8sTUFBTTBOLGNBQWMsR0FBbUNBLENBQUM7WUFBRUYsZUFBZTtZQUFFdEw7VUFBSyxDQUFFLEtBQUk7WUFDNUYsTUFBTSxDQUFDNkwsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR2pPLE1BQUEsQ0FBQUksT0FBSyxDQUFDeUcsUUFBUSxDQUFDNEcsZUFBZSxDQUFDSCxLQUFLLENBQUM7WUFDM0UsTUFBTSxDQUFDbk0sSUFBSSxFQUFFK00sT0FBTyxDQUFDLEdBQUdsTyxNQUFBLENBQUFJLE9BQUssQ0FBQ3lHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFN0MsTUFBTXNILG1CQUFtQixHQUFHQSxDQUFBLEtBQVc7Y0FDdENELE9BQU8sQ0FBQyxDQUFDL00sSUFBSSxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU1pTixXQUFXLEdBQUdBLENBQUEsS0FBVztjQUM5QkYsT0FBTyxDQUFDLENBQUMvTSxJQUFJLENBQUM7WUFDZixDQUFDO1lBRUQsTUFBTWtOLFNBQVMsR0FBR0EsQ0FBQSxLQUF3QjtjQUN6QyxPQUNDck8sTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2dCQUFLSSxTQUFTLEVBQUM7Y0FBdUIsR0FDckN0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQ3VCLFdBQUEsQ0FBQXNCLE1BQU07Z0JBQUMyQyxJQUFJLEVBQUMsS0FBSztnQkFBQzFDLE9BQU8sRUFBQyxTQUFTO2dCQUFDQyxPQUFPLEVBQUVrRSxtQkFBbUI7Z0JBQUU5RixLQUFLLEVBQUVvRixlQUFlLENBQUNwRztjQUFLLEVBQUksQ0FDOUY7WUFFUixDQUFDO1lBRUQsTUFBTWlILFFBQVEsR0FBR0EsQ0FBQSxLQUF3QjtjQUN4QyxNQUFNcEIsR0FBRyxHQUFHTyxlQUFlLENBQUNQLEdBQUcsR0FBR08sZUFBZSxDQUFDUCxHQUFHLEdBQUdPLGVBQWUsQ0FBQ2YsSUFBSTtjQUM1RSxNQUFNUyxHQUFHLEdBQUdNLGVBQWUsQ0FBQ1AsR0FBRyxHQUFHTyxlQUFlLENBQUNOLEdBQUcsR0FBR00sZUFBZSxDQUFDcEcsS0FBSztjQUU3RSxPQUNDckgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2dCQUFLSSxTQUFTLEVBQUM7Y0FBNkIsR0FDM0N0SCxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsQ0FBQzRHLE1BQUEsQ0FBQVMsS0FBSztnQkFBQ3JCLEdBQUcsRUFBRUEsR0FBRztnQkFBRUMsR0FBRyxFQUFFQTtjQUFHLEVBQUksRUFDN0JuTixNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUEsZUFBT3VHLGVBQWUsQ0FBQ3BHLEtBQUssQ0FBUSxDQUMvQjtZQUVSLENBQUM7WUFFRCxNQUFNbUgsT0FBTyxHQUFHLENBQUNSLFdBQVcsR0FBR0ssU0FBUyxHQUFHQyxRQUFRO1lBRW5ELE9BQ0N0TyxNQUFBLENBQUFJLE9BQUEsQ0FBQThHLGFBQUE7Y0FBS0ksU0FBUyxFQUFDO1lBQWlCLEdBQy9CdEgsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLENBQUNzSCxPQUFPLE9BQUcsRUFFVnJOLElBQUksSUFBSXNNLGVBQWUsRUFBRUQsS0FBSyxJQUM5QnhOLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDNkcsTUFBQSxDQUFBVSxLQUFLO2NBQUNDLGFBQWEsRUFBRSxLQUFLO2NBQUV2TixJQUFJO2NBQUNtRyxTQUFTLEVBQUMsY0FBYztjQUFDcUgsT0FBTyxFQUFFUDtZQUFXLEdBQzlFcE8sTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBLHdDQUFrQyxDQUVuQyxDQUNJO1VBRVIsQ0FBQztVQUFDL0csT0FBQSxDQUFBd04sY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BERixJQUFBM04sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJPLENBQUEsR0FBQTNPLE9BQUE7VUFFYyxTQUFVNE8sV0FBV0EsQ0FBQztZQUFFeEY7VUFBUyxDQUFFO1lBQ2hELE1BQU0sQ0FBQ3lGLEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUcvTyxNQUFBLENBQUFJLE9BQUssQ0FBQ3lHLFFBQVEsQ0FBU3dDLFNBQVMsQ0FBQzJGLFFBQVEsQ0FBQztZQUVoRSxPQUNDaFAsTUFBQSxDQUFBSSxPQUFBLENBQUE4RyxhQUFBO2NBQVNJLFNBQVMsRUFBQztZQUFvQixHQUNyQ3dILEdBQUcsSUFBSTlPLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDMEgsQ0FBQSxDQUFBSyxTQUFTO2NBQUMvQixHQUFHLEVBQUU0QixHQUFHLElBQUksRUFBRTtjQUFFM0IsR0FBRyxFQUFFOUQsU0FBUyxDQUFDRztZQUFXLEVBQUksQ0FDeEQ7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBeEosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZOLE1BQUEsR0FBQTdOLE9BQUE7VUFDTSxTQUFVZ1AsU0FBU0EsQ0FBQztZQUFFL0IsR0FBRztZQUFFQztVQUFHLENBQUU7WUFDckMsT0FBT25OLE1BQUEsQ0FBQUksT0FBQSxDQUFBOEcsYUFBQSxDQUFDNEcsTUFBQSxDQUFBUyxLQUFLO2NBQUNqSCxTQUFTLEVBQUMsWUFBWTtjQUFDNEYsR0FBRyxFQUFFQSxHQUFHO2NBQUVDLEdBQUcsRUFBRUE7WUFBRyxFQUFJO1VBQzVEIiwiaWdub3JlTGlzdCI6W119