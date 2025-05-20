System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-sdk@1.2.0/core", "@beyond-js/react-18-widgets@1.1.4/base", "@aimpact/ailearn-app@0.4.2/main-layout.widget", "@beyond-js/kernel@0.1.12/routing", "@aimpact/chat-sdk@1.5.4/wrapper", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "@aimpact/chat-sdk@1.5.4/voice", "@aimpact/ailearn-app@0.4.2/config", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.2/model/gclassroom", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp042MainLayoutWidget) {
      dependency_6 = _aimpactAilearnApp042MainLayoutWidget;
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
    }, function (_aimpactAilearnApp042Config) {
      dependency_13 = _aimpactAilearnApp042Config;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_15 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_16 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_17 = _aimpactAilearnApp042ModelWrapper;
    }, function (_aimpactChatSdk154Session) {
      dependency_18 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Components) {
      dependency_19 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_20 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_21 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp042ModelGclassroom) {
      dependency_22 = _aimpactAilearnApp042ModelGclassroom;
    }, function (_pragmateUi100Beta7Image) {
      dependency_23 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/user/profile",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-app/main-layout.widget', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@aimpact/chat-sdk/wrapper', dependency_8], ['@beyond-js/reactive/model', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/chat-sdk/voice', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/ailearn-app/model/wrapper', dependency_17], ['@aimpact/chat-sdk/session', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/form', dependency_20], ['pragmate-ui/icons', dependency_21], ['@aimpact/ailearn-app/model/gclassroom', dependency_22], ['pragmate-ui/image', dependency_23], ['pragmate-ui/modal', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-user-profile",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/user/profile.widget",
        "is": "page",
        "route": "/users/me",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/user/profile.widget');
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
        hash: 3234935986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _audio = require("./audio");
          var _coins = require("./coins");
          var _languageSelector = require("./language-selector");
          var _languages = require("./languages");
          var _modeSelection = require("./mode-selection");
          var _ImagePicker = require("./profile-image/ImagePicker");
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
            }, texts.version, ": ", _wrapper.settings.version))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJvZmlsZUNvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9maWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmFzZSIsIl9zdG9yZSIsIl92aWV3cyIsIl9tYWluTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImNsZWFyTW9kZWwiLCJiYWNrTGluayIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfcmVuZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX3ZvaWNlIiwiUmVhY3RpdmVNb2RlbCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJsYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwicmVhZHkiLCJnbG9iYWxUZXh0cyIsInZvaWNlcyIsInZvaWNlTWFuYWdlciIsInNlbGVjdGVkVm9pY2VzIiwiTWFwIiwidW5wdWJsaXNoZWQiLCJsYW5ndWFnZSIsInNlbGVjdGVkVm9pY2UiLCJnZXQiLCJkZWZhdWx0Vm9pY2UiLCJnZXREZWZhdWx0IiwibmFtZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwiYXVkaW9TcGVlZCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlRmxvYXQiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsInJlYWN0aXZlUHJvcHMiLCJzZXQiLCJhY2Nlc3NpYmlsaXR5IiwiY3VycmVudCIsInNhdmVDaGFuZ2VzIiwiZ2xvYmFsVGhpcyIsInNhdmUiLCJmZXRjaGluZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRlZmF1bHRWb2ljZXMiLCJoYXNWb2ljZUNoYW5nZXMiLCJmb3JFYWNoIiwibGFuZyIsInNldERlZmF1bHRzIiwiQXBwV3JhcHBlciIsInNldFNldHRpbmdzIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIlN0cmluZyIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImlzUmVhZHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwib25DaGFuZ2UiLCJvZmYiLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJwcm9maWxlIiwiZ2V0U2VsZWN0ZWRWb2ljZSIsInNldFNlbGVjdGVkVm9pY2UiLCJ2b2ljZU5hbWUiLCJfY29udGV4dCIsIl9ob29rcyIsIkF1ZGlvU2V0dGluZ3MiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwib25JbnB1dCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImF1ZGlvIiwidGl0bGUiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwic3BlZWQiLCJ0eXBlIiwibWF4IiwibWluIiwic3RlcCIsIl9hbGVydCIsIlVzZXJDb2lucyIsInVzZXIiLCJjb2lucyIsImFzc2lnbm1lbnRzIiwiY291bnQiLCJtb2R1bGVzIiwiQWxlcnQiLCJsYWJlbCIsIl91aSIsIl9zZXNzaW9uIiwiX2NvbXBvbmVudHMiLCJfYXVkaW8iLCJfY29pbnMiLCJfbGFuZ3VhZ2VTZWxlY3RvciIsIl9sYW5ndWFnZXMiLCJfbW9kZVNlbGVjdGlvbiIsIl9JbWFnZVBpY2tlciIsInNldFJlYWR5Iiwic2V0U3RvcmUiLCJpc1VucHVibGlzaGVkIiwic2V0QWNjZXNzaWJpbHR5IiwiZHlzbGV4aWEiLCJ1c2VyUHJvcHMiLCJzZXNzaW9uV3JhcHBlciIsImdldFByb3BlcnRpZXMiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTGFuZ3VhZ2VTZWxlY3RvciIsIk1vZGVTZWxlY3Rpb24iLCJBdWRpb0xhbmd1YWdlcyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwidmVyc2lvbiIsInNldHRpbmdzIiwiX2Zvcm0iLCJzZXRMYW5ndWFnZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsIlJhZGlvIiwiY2hlY2tlZCIsIl9pdGVtIiwicGxheWluZyIsInNldFBsYXlpbmciLCJpc0FjdGl2ZSIsIm1hcCIsIml0ZW0iLCJkaXNhYmxlZCIsIkF1ZGlvTGFuZ3VhZ2VJdGVtIiwia2V5IiwiX2ljb25zIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNTYWZhcmkiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaGFuZGxlVm9pY2VDaGFuZ2UiLCJzYW1wbGVUZXh0cyIsImVuIiwiQVBQX05BTUUiLCJlcyIsImRlIiwic3BlZWNoU3ludGhlc2lzIiwiY2FuY2VsIiwidXR0ZXJhbmNlIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwidm9pY2UiLCJieUxhbmciLCJmaW5kIiwidiIsIm9uZW5kIiwib25zdGFydCIsInNwZWFrIiwidm9pY2VVUkkiLCJJY29uQnV0dG9uIiwiaWNvbiIsInNldENoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHRNb2RlIiwiQ2hlY2tib3giLCJfZ2NsYXNzcm9vbSIsIlBlcm1pc3Npb25zIiwiY29ubmVjdGlvblZhbHVlcyIsInNyYyIsImFsdCIsInBlcm1pc3Npb25zIiwiZ2NsYXNzcm9vbSIsImNoZWNrIiwiYXV0aG9yaXplZCIsIm1vZGFsIiwiY29ubmVjdGlvblZhbHVlIiwiaW5kZXgiLCJQZXJtaXNzaW9uSXRlbSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ltYWdlIiwiX21vZGFsIiwiY2hlY2tlZEl0ZW0iLCJzZXRDaGVja2VkSXRlbSIsInNldFNob3ciLCJoYW5kbGVWaW5jdWxhckNsaWNrIiwiaGFuZGxlTW9kYWwiLCJhZGRCdXR0b24iLCJhZGRMYWJlbCIsIkltYWdlIiwiQ29udHJvbCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uQ2xvc2UiLCJfIiwiSW1hZ2VQaWNrZXIiLCJpbWciLCJzZXRJbWciLCJwaG90b1VSTCIsIlVzZXJJbWFnZSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzIiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXVkaW8udHN4IiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2Utc2VsZWN0b3IvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2VzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL21vZGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wZXJtaXNzaW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL0ltYWdlUGlja2VyLnRzeCIsIi90cy92aWV3cy9wcm9maWxlLWltYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBVU8sTUFBTUMsY0FBYyxHQUFBQyxPQUFBLENBQUFELGNBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ2pFLE1BQU1DLGlC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