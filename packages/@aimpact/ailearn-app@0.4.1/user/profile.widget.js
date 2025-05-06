System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/wrapper", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/ailearn-app@0.4.1/config", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@aimpact/ailearn-app@0.4.1/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive205Model) {
      dependency_9 = _beyondJsReactive205Model;
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
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_21 = _aimpactAilearnApp041ModelWrapper;
    }, function (_aimpactAilearnApp041ModelGclassroom) {
      dependency_22 = _aimpactAilearnApp041ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_23 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.1/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/chat-sdk/session', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/form', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/ailearn-app/model/wrapper', dependency_21], ['@aimpact/ailearn-app/model/gclassroom', dependency_22], ['pragmate-ui/image', dependency_23], ['pragmate-ui/modal', dependency_24]]);
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
        hash: 1533422215,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioLanguageItem = AudioLanguageItem;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
              en: `Hello! This is ${_wrapper.settings.APP_NAME}, your educational assistant.`,
              es: `¡Hola! Soy ${_wrapper.settings.APP_NAME}, tu asistente educativo.`,
              de: `Hallo! Ich bin ${_wrapper.settings.APP_NAME}, dein Bildungsassistent.`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwicmVhZHkiLCJnbG9iYWxUZXh0cyIsInZvaWNlcyIsInZvaWNlTWFuYWdlciIsInNlbGVjdGVkVm9pY2VzIiwiTWFwIiwidW5wdWJsaXNoZWQiLCJsYW5ndWFnZSIsInNlbGVjdGVkVm9pY2UiLCJnZXQiLCJkZWZhdWx0Vm9pY2UiLCJnZXREZWZhdWx0IiwibmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJzZXQiLCJhY2Nlc3NpYmlsaXR5IiwiY3VycmVudCIsInNhdmVDaGFuZ2VzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRWb2ljZXMiLCJoYXNWb2ljZUNoYW5nZXMiLCJmb3JFYWNoIiwibGFuZyIsInNldERlZmF1bHRzIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImlzUmVhZHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2UiLCJvZmYiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJwcm9maWxlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsInNldFNlbGVjdGVkVm9pY2UiLCJ2b2ljZU5hbWUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiX2F1ZGlvIiwiX2NvaW5zIiwiX2xhbmd1YWdlU2VsZWN0b3IiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsIl9sYW5ndWFnZXMiLCJzZXRSZWFkeSIsInNldFN0b3JlIiwiaXNVbnB1Ymxpc2hlZCIsInNldEFjY2Vzc2liaWx0eSIsImR5c2xleGlhIiwidXNlclByb3BzIiwic2Vzc2lvbldyYXBwZXIiLCJnZXRQcm9wZXJ0aWVzIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkxhbmd1YWdlU2VsZWN0b3IiLCJNb2RlU2VsZWN0aW9uIiwiQXVkaW9MYW5ndWFnZXMiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsInZlcnNpb24iLCJfZm9ybSIsInNldExhbmd1YWdlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiUmFkaW8iLCJjaGVja2VkIiwiX2l0ZW0iLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImlzQWN0aXZlIiwibWFwIiwiaXRlbSIsImRpc2FibGVkIiwiQXVkaW9MYW5ndWFnZUl0ZW0iLCJrZXkiLCJfaWNvbnMiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc1NhZmFyaSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoYW5kbGVWb2ljZUNoYW5nZSIsInNhbXBsZVRleHRzIiwiZW4iLCJzZXR0aW5ncyIsIkFQUF9OQU1FIiwiZXMiLCJkZSIsInNwZWVjaFN5bnRoZXNpcyIsImNhbmNlbCIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInZvaWNlIiwiYnlMYW5nIiwiZmluZCIsInYiLCJvbmVuZCIsIm9uc3RhcnQiLCJzcGVhayIsInZvaWNlVVJJIiwiSWNvbkJ1dHRvbiIsImljb24iLCJzZXRDaGVja2VkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0TW9kZSIsIkNoZWNrYm94IiwiX2djbGFzc3Jvb20iLCJQZXJtaXNzaW9ucyIsImNvbm5lY3Rpb25WYWx1ZXMiLCJzcmMiLCJhbHQiLCJwZXJtaXNzaW9ucyIsImdjbGFzc3Jvb20iLCJjaGVjayIsImF1dGhvcml6ZWQiLCJtb2RhbCIsImNvbm5lY3Rpb25WYWx1ZSIsImluZGV4IiwiUGVybWlzc2lvbkl0ZW0iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbWFnZSIsIl9tb2RhbCIsImNoZWNrZWRJdGVtIiwic2V0Q2hlY2tlZEl0ZW0iLCJzZXRTaG93IiwiaGFuZGxlVmluY3VsYXJDbGljayIsImhhbmRsZU1vZGFsIiwiYWRkQnV0dG9uIiwiYWRkTGFiZWwiLCJJbWFnZSIsIkNvbnRyb2wiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvbkNsb3NlIiwiXyIsIkltYWdlUGlja2VyIiwiaW1nIiwic2V0SW1nIiwicGhvdG9VUkwiLCJVc2VySW1hZ2UiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2F1ZGlvLnRzeCIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlLXNlbGVjdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy9pdGVtLnRzeCIsIi90cy92aWV3cy9tb2RlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcGVybWlzc2lvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9JbWFnZVBpY2tlci50c3giLCIvdHMvdmlld3MvcHJvZmlsZS1pbWFnZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVVPLE1BQU1DLGNBQWMsR0FBQUMsT0FBQSxDQUFBRCxjQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNq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