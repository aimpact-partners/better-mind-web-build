System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/chat-sdk@1.5.4/startup", "@beyond-js/reactive@2.0.4/entities/item", "@beyond-js/kernel@0.1.12/core", "firebase@11.6.0/auth", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.5.4/config"], function (_export, _context) {
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
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_2 = _beyondJsReactive204EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1160Auth) {
      dependency_4 = _firebase1160Auth;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_5 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk154Config) {
      dependency_6 = _aimpactChatSdk154Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/ailearn-app", "0.4.1"]]);
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
        hash: 4147810957,
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
              console.log('sdkConfig.project', _startup.sdkConfig.project, this.#token, this.firebaseToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9pdGVtIiwiX2NvcmUiLCJfcHJvdmlkZXIiLCJVc2VyIiwiSXRlbSIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwic2RrQ29uZmlnIiwicHJvamVjdCIsImZpcmViYXNlVG9rZW4iLCJ0cmlnZ2VyIiwiZmlyZWJhc2VQcm92aWRlciIsImdldEN1cnJlbnRUb2tlbiIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsInNwZWNzIiwiaWQiLCJ1bmRlZmluZWQiLCJlbnRpdHkiLCJwcm92aWRlciIsIlVzZXJQcm92aWRlciIsInNldCIsImRhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2V0RmlyZWJhc2VQcm92aWRlciIsImluaXRpYWxpemUiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJsb2FkZWQiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1c2VyIiwibG9naW4iLCJnZXRQcm9wZXJ0eSIsInJlc3BvbnNlIiwibG9hZCIsImdldE1vZGVsIiwidXNlck1vZGVsIiwiX2FwaSIsImFwaSIsIkFwaSIsImJlYXJlciIsInN0YXR1cyIsInBvc3QiLCJFcnJvciJdLCJzb3VyY2VzIjpbIi9pbnRlcmZhY2UudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIQSxJQUFBQyxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9B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