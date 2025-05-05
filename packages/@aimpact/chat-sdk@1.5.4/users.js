System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/chat-sdk@1.5.4/startup", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/kernel@0.1.12/core", "firebase@11.6.1/auth", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.5.4/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactChatSdk154Startup) {
      dependency_1 = _aimpactChatSdk154Startup;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_2 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1161Auth) {
      dependency_4 = _firebase1161Auth;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_5 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk154Config) {
      dependency_6 = _aimpactChatSdk154Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.4/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/startup', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./interface
      ***************************/
      ims.set('./interface', {
        hash: 4186078931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2790616603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // AudioItem

          class User extends _item.Item {
            #logged;
            #promiseInit;
            #firebaseUser;
            get logged() {
              return this.#logged;
            }
            #token;
            get token() {
              return _startup.sdkConfig.project === 'rvd' ? this.#token : this.firebaseToken;
            }
            set token(value) {
              if (value === this.#token) return;
              this.#token = value;
              this.trigger('token.changed');
            }
            #firebaseProvider;
            get firebaseToken() {
              return this.#firebaseProvider?.getCurrentToken();
            }
            constructor({
              properties = [],
              ...specs
            } = {
              properties: [],
              id: undefined
            }) {
              //@ts-ignore
              super({
                id: specs.id,
                properties: [...properties, 'displayName', 'id', 'email', 'photoURL', 'phoneNumber'],
                entity: 'User',
                provider: _provider.UserProvider
              });
              // this.initialize(specs);
            }
            set(specs) {
              const data = super.set(specs);
              if (specs.token) this.token = specs.token;
              return {
                ...data,
                token: this.token
              };
            }
            getProperties() {
              const data = super.getProperties();
              return {
                ...data,
                token: this.token
              };
            }
            setFirebaseProvider(provider) {
              this.#firebaseProvider = provider;
            }
            initialize = async specs => {
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              this.set(specs);
              // await this.login(this.firebaseToken);
              this.#promiseInit.resolve();
              this.loaded = true;
              this.trigger('user.initialized');
            };
            setFirebaseUser = async user => {
              this.#firebaseUser = user;
            };
            async login(firebaseToken) {
              if (this.#logged) return;
              const specs = {
                ...this.getProperties(),
                id: this.getProperty('id'),
                firebaseToken
              };
              const response = await this.provider.load(specs);
              this.set(response.data);
              // this.localUpdate(response.data.user);
              this.#logged = true;
              this.trigger('login');
              return true;
            }
            static getModel(specs) {
              if (_startup.sdkConfig.userModel) return new _startup.sdkConfig.userModel(specs);
              return new User(specs);
            }
          }
          exports.User = User;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 2081479864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          class UserProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            async load(specs) {
              this.#api.bearer(specs.firebaseToken);
              const {
                status,
                data
              } = await this.#api.post('/auth/login', specs);
              if (!status) {
                throw new Error('error loading user data');
              }
              return {
                status,
                data
              };
            }
          }
          exports.UserProvider = UserProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./interface",
        "from": "IChatUser",
        "name": "IChatUser"
      }, {
        "im": "./item",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IChatUser') && _export("IChatUser", IChatUser = require ? require('./interface').IChatUser : value);
        (require || prop === 'User') && _export("User", User = require ? require('./item').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9pdGVtIiwiX2NvcmUiLCJfcHJvdmlkZXIiLCJVc2VyIiwiSXRlbSIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwidG9rZW4iLCJzZGtDb25maWciLCJwcm9qZWN0IiwiZmlyZWJhc2VUb2tlbiIsInRyaWdnZXIiLCJmaXJlYmFzZVByb3ZpZGVyIiwiZ2V0Q3VycmVudFRva2VuIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwic3BlY3MiLCJpZCIsInVuZGVmaW5lZCIsImVudGl0eSIsInByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwic2V0IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsImxvYWRlZCIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImdldFByb3BlcnR5IiwicmVzcG9uc2UiLCJsb2FkIiwiZ2V0TW9kZWwiLCJ1c2VyTW9kZWwiLCJfYXBpIiwiYXBpIiwiQXBpIiwiYmVhcmVyIiwic3RhdHVzIiwicG9zdCIsIkVycm9yIl0sInNvdXJjZXMiOlsiL2ludGVyZmFjZS50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFDLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVBLElBQUFHLFNB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S0FBSyxHQUFHO2dCQUFFLEdBQUcsSUFBSSxDQUFDUSxhQUFhLEVBQUU7Z0JBQUVQLEVBQUUsRUFBRSxJQUFJLENBQUNnQixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUFFdkI7Y0FBYSxDQUFlO2NBRWpHLE1BQU13QixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNkLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDbkIsS0FBSyxDQUFDO2NBRWhELElBQUksQ0FBQ00sR0FBRyxDQUFDWSxRQUFRLENBQUNYLElBQUksQ0FBQztjQUV2QjtjQUNBLElBQUksQ0FBQyxDQUFBbkIsTUFBTyxHQUFHLElBQUk7Y0FDbkIsSUFBSSxDQUFDTyxPQUFPLENBQUMsT0FBTyxDQUFDO2NBQ3JCLE9BQU8sSUFBSTtZQUNaO1lBRUEsT0FBT3lCLFFBQVFBLENBQUNwQixLQUFLO2NBQ3BCLElBQUluQixRQUFBLENBQUFXLFNBQVMsQ0FBQzZCLFNBQVMsRUFBRSxPQUFPLElBQUl4QyxRQUFBLENBQUFXLFNBQVMsQ0FBQzZCLFNBQVMsQ0FBQ3JCLEtBQUssQ0FBQztjQUM5RCxPQUFPLElBQUlkLElBQUksQ0FBQ2MsS0FBSyxDQUFDO1lBQ3ZCOztVQUNBckIsT0FBQSxDQUFBTyxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEdELElBQUFvQyxJQUFBLEdBQUF4QyxPQUFBO1VBRUEsSUFBQUQsUUFBQSxHQUFBQyxPQUFBO1VBRU0sTUFBT3VCLFlBQVk7WUFDeEIsQ0FBQWtCLEdBQUk7WUFFSnpCLFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQXlCLEdBQUksR0FBRyxJQUFJRCxJQUFBLENBQUFFLEdBQUcsQ0FBQzNDLFFBQUEsQ0FBQVcsU0FBUyxDQUFDK0IsR0FBRyxDQUFDO1lBQ25DO1lBRUEsTUFBTUosSUFBSUEsQ0FBQ25CLEtBQUs7Y0FDZixJQUFJLENBQUMsQ0FBQXVCLEdBQUksQ0FBQ0UsTUFBTSxDQUFDekIsS0FBSyxDQUFDTixhQUFhLENBQUM7Y0FFckMsTUFBTTtnQkFBRWdDLE1BQU07Z0JBQUVuQjtjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBZ0IsR0FBSSxDQUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFM0IsS0FBSyxDQUFDO2NBRW5FLElBQUksQ0FBQzBCLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlFLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzs7Y0FHM0MsT0FBTztnQkFBRUYsTUFBTTtnQkFBRW5CO2NBQUksQ0FBRTtZQUN4Qjs7VUFDQTVCLE9BQUEsQ0FBQTBCLFlBQUEsR0FBQUEsWUFBQSIsImlnbm9yZUxpc3QiOltdfQ==