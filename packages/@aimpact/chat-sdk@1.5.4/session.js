System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.5.4/users", "@beyond-js/kernel@0.1.12/core", "firebase@11.6.0/auth", "firebase@11.6.0/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk154Users) {
      dependency_2 = _aimpactChatSdk154Users;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1160Auth) {
      dependency_4 = _firebase1160Auth;
    }, function (_firebase1160App) {
      dependency_5 = _firebase1160App;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['firebase/app', dependency_5]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 2490137603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _users = require("@aimpact/chat-sdk/users");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("firebase/auth");
          var _error = require("./error");
          var _provider = require("./firebase/provider");
          class Auth extends _model.ReactiveModel {
            #pendingLogin;
            #user;
            get user() {
              return this.#user;
            }
            #session;
            #provider;
            get session() {
              return this.#session;
            }
            constructor(session, settings) {
              super();
              this.#session = session;
              this.#provider = new _provider.FirebaseProvider(settings.firebase, {
                onAuthStateChanged: this.onAuthStateChanged.bind(this)
              });
            }
            #setReady() {
              this.ready = true;
              this.trigger('ready');
            }
            onAuthStateChanged(user) {
              if (!user) {
                this.#setReady();
                return;
              }
              /**
               * this code only must be executed when the page is laoded
               */
              if (!this.ready) {
                this.appLogin(user);
              }
            }
            appLogin = data => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!data?.uid) {
                console.trace('INVALID_USER', 'No user id found in response', data);
                throw new _error.CustomError(1001, 'INVALID_USER');
              }
              // this.#provider.getCurrentToken().then(token=>{})
              this.#pendingLogin = new _core.PendingPromise();
              // const firebaseToken = await this.#provider.getCurrentToken();
              this.#provider.getCurrentToken().then(firebaseToken => {
                const specs = {
                  ...data,
                  firebaseToken
                };
                const model = this.getUserModel(specs);
                this.#user = model;
                const logInValidation = couldLog => {
                  if (!couldLog) {
                    // this.#user as undefined does not log in.
                    this.#user = undefined;
                    this.signOut();
                    this.trigger('ready');
                    this.ready = true;
                    return;
                  }
                  this.ready = true;
                  this.trigger('ready');
                  this.trigger('login');
                  this.#pendingLogin.resolve({
                    status: true,
                    model
                  });
                };
                model.login(firebaseToken).then(logInValidation).catch(e => {
                  this.#user = undefined;
                  this.signOut();
                  this.ready = true;
                  throw new Error('e');
                });
              });
              return this.#pendingLogin;
            };
            async loginWith(provider) {
              try {
                if (provider !== 'google') {
                  console.log('Provider not supported');
                  return;
                }
                const userData = await this.#provider.signInWithGoogle();
                return this.appLogin(userData);
              } catch (error) {
                const errorMappings = {
                  'auth/account-exists-with-different-credential': 'ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL',
                  'auth/popup-closed-by-user': 'POPUP_CLOSED_BY_USER'
                };
                // Known error, throw a custom exception
                if (error.code in errorMappings) {
                  throw new _error.CustomError(1003, errorMappings[error.code]);
                }
                // Unexpected error, rethrow for logging/debugging
                throw new Error(`Unexpected error during Google sign-in: ${error.message}`);
              }
            }
            getUserModel(specs) {
              if (this.#user && this.#user.id === specs.id) {
                this.#user.set(specs);
                return this.#user;
              }
              if (this.#user) this.#user = undefined;
              //@ts-ignore
              this.#user = _users.User.getModel(specs);
              this.#user.setFirebaseProvider(this.#provider);
              this.#user.initialize(specs);
              return this.#user;
            }
            async setUser(data) {
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
              }
              if (data) {
                if (!data) return;
                if (this.#user && this.#user.id === data.uid) return;
                // const user = new SDKSettings.userModel({ id: data.uid });
                const user = await this.getUserModel({
                  id: data.uid
                });
                user.setFirebaseUser(data);
                /* TODO Review */
                await user.set(data);
                this.#user = user;
              }
              this.ready = true;
              this.triggerEvent('change');
            }
            signOut = async () => {
              this.#pendingLogin = undefined;
              this.#user = undefined;
              await (0, _auth.signOut)(this.#provider.auth);
            };
            logout = this.signOut;
          }
          exports.Auth = Auth;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 3466124835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            code;
            constructor(code, message) {
              super(message);
              this.code = code;
              this.name = 'CustomError';
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /***********************************
      INTERNAL MODULE: ./firebase/provider
      ***********************************/

      ims.set('./firebase/provider', {
        hash: 1876297142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FirebaseProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          class FirebaseProvider extends _model.ReactiveModel {
            #executions = 0;
            #auth;
            get auth() {
              return this.#auth;
            }
            #app;
            get app() {
              return this.#app;
            }
            #googleProvider = new _auth.GoogleAuthProvider();
            #onAuthStateChanged;
            constructor(config, {
              onAuthStateChanged: callback
            }) {
              super();
              // Inicializa Firebase App y Auth internamente
              this.#app = (0, _app.initializeApp)(config);
              this.#auth = (0, _auth.getAuth)(this.#app);
              this.#onAuthStateChanged = callback;
              // Observador de sesión
              (0, _auth.onAuthStateChanged)(this.#auth, this.onAuthStateChanged.bind(this));
            }
            onAuthStateChanged(user) {
              if (!this.#executions) {
                this.trigger('ready');
                this.#executions++;
              }
              const data = user ? this.getData(user) : null;
              this.#onAuthStateChanged?.(data);
            }
            async signInWithGoogle() {
              const response = await (0, _auth.signInWithPopup)(this.#auth, this.#googleProvider);
              return this.getData(response.user);
            }
            async getCurrentToken(forceRefresh = false) {
              const user = this.#auth.currentUser;
              if (!user) return null;
              try {
                return await user.getIdToken(forceRefresh);
              } catch (error) {
                console.error('Error retrieving token:', error);
                return null;
              }
            }
            logout() {
              return (0, _auth.signOut)(this.#auth);
            }
            getData(user) {
              return {
                id: user.uid,
                uid: user.uid,
                email: user.email ?? '',
                name: user.displayName ?? '',
                displayName: user.displayName ?? '',
                photoURL: user.photoURL ?? '',
                phoneNumber: user.phoneNumber ?? '',
                provider: user.providerData[0]?.providerId ?? 'unknown'
              };
            }
          }
          exports.FirebaseProvider = FirebaseProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3903209151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("./auth");
          class SessionManager extends _model.ReactiveModel {
            #id;
            get id() {
              return this.#id;
            }
            get user() {
              return this.#auth.user;
            }
            get userId() {
              return auth.currentUser ? auth.currentUser.uid : null;
            }
            get logged() {
              return !!this.#auth?.user;
            }
            #initialized = false;
            #promise;
            get isReady() {
              return this.#promise;
            }
            #auth;
            get auth() {
              return this.#auth;
            }
            constructor() {
              super();
              this.#id = Math.random().toString(36).substring(2, 15);
              this.#promise = new _core.PendingPromise();
            }
            settings(settings) {
              this.#initialized = true;
              this.#auth = new _auth.Auth(this, settings);
              this.#auth.on('ready', this.listenReady.bind(this));
            }
            listenReady() {
              this.ready = true;
              this.#promise.resolve(this.ready);
              this.triggerEvent('change');
            }
            async logout() {
              try {
                await this.#auth.signOut();
                function clear(keepKeys) {
                  const keysToKeep = new Set(keepKeys);
                  Object.keys(localStorage).forEach(key => {
                    if (!keysToKeep.has(key)) {
                      localStorage.removeItem(key);
                    }
                  });
                }
                clear(['ailearn.home.tour']);
                this.triggerEvent('logout');
                return true;
              } catch (e) {
                console.error(e);
                return false;
              }
            }
          }
          /*bundle*/
          const sessionWrapper = exports.sessionWrapper = new SessionManager();
          globalThis.s = sessionWrapper;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2395231135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sessionWrapper",
        "name": "sessionWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sessionWrapper') && _export("sessionWrapper", sessionWrapper = require ? require('./index').sessionWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3VzZXJzIiwiX2NvcmUiLCJfYXV0aCIsIl9lcnJvciIsIl9wcm92aWRlciIsIkF1dGgiLCJSZWFjdGl2ZU1vZGVsIiwicGVuZGluZ0xvZ2luIiwidXNlciIsInNlc3Npb24iLCJwcm92aWRlciIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJGaXJlYmFzZVByb3ZpZGVyIiwiZmlyZWJhc2UiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJiaW5kIiwic2V0UmVhZHkiLCIjc2V0UmVhZHkiLCJyZWFkeSIsInRyaWdnZXIiLCJhcHBMb2dpbiIsImRhdGEiLCJ1aWQiLCJjb25zb2xlIiwidHJhY2UiLCJDdXN0b21FcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZ2V0Q3VycmVudFRva2VuIiwidGhlbiIsImZpcmViYXNlVG9rZW4iLCJzcGVjcyIsIm1vZGVsIiwiZ2V0VXNlck1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwiY2F0Y2giLCJlIiwiRXJyb3IiLCJsb2dpbldpdGgiLCJsb2ciLCJ1c2VyRGF0YSIsInNpZ25JbldpdGhHb29nbGUiLCJlcnJvciIsImVycm9yTWFwcGluZ3MiLCJjb2RlIiwibWVzc2FnZSIsImlkIiwic2V0IiwiVXNlciIsImdldE1vZGVsIiwic2V0RmlyZWJhc2VQcm92aWRlciIsImluaXRpYWxpemUiLCJzZXRVc2VyIiwic2V0RmlyZWJhc2VVc2VyIiwidHJpZ2dlckV2ZW50IiwiYXV0aCIsImxvZ291dCIsImV4cG9ydHMiLCJuYW1lIiwiX2FwcCIsImV4ZWN1dGlvbnMiLCJhcHAiLCJnb29nbGVQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImNvbmZpZyIsImNhbGxiYWNrIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXREYXRhIiwicmVzcG9uc2UiLCJzaWduSW5XaXRoUG9wdXAiLCJmb3JjZVJlZnJlc2giLCJjdXJyZW50VXNlciIsImdldElkVG9rZW4iLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG9uZU51bWJlciIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJTZXNzaW9uTWFuYWdlciIsInVzZXJJZCIsImxvZ2dlZCIsImluaXRpYWxpemVkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJvbiIsImxpc3RlblJlYWR5IiwiY2xlYXIiLCJrZWVwS2V5cyIsImtleXNUb0tlZXAiLCJTZXQiLCJPYmplY3QiLCJrZXlzIiwibG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsImtleSIsImhhcyIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2Vycm9yLnRzIiwiL2ZpcmViYXNlL3Byb3ZpZGVyLnRzIiwiL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLEtBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUVBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUdNLE1BQU9NLElBQUssU0FBUVAsTUFBQSxDQUFBUSxhQUFtQjtZQUM1QyxDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsSUFBSztZQUVMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBRUEsQ0FBQUMsT0FB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