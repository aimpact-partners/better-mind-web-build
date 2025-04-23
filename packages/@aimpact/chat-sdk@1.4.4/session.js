System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.4.4/users", "@beyond-js/kernel@0.1.12/core", "firebase@11.6.0/auth", "firebase@11.6.0/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk144Users) {
      dependency_2 = _aimpactChatSdk144Users;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1160Auth) {
      dependency_4 = _firebase1160Auth;
    }, function (_firebase1160App) {
      dependency_5 = _firebase1160App;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/session"
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

      /*********************************
      INTERNAL MODULE: ./firebase/config
      *********************************/

      ims.set('./firebase/config', {
        hash: 378245058,
        creator: function (require, exports) {
          // // Import the functions you need from the SDKs you need
          // import config from '@aimpact/chat-sdk/config';
          // import { getAnalytics } from 'firebase/analytics';
          // import { initializeApp } from 'firebase/app';
          // import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
          // // TODO: Add SDKs for Firebase products that you want to use
          // // https://firebase.google.com/docs/web/setup#available-libraries
          // // Your web app's Firebase configuration
          // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          // const DEV = {
          // 	apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
          // 	authDomain: 'aimpact-partners-dev.firebaseapp.com',
          // 	databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
          // 	projectId: 'aimpact-partners-dev',
          // 	storageBucket: 'aimpact-partners-dev.appspot.com',
          // 	messagingSenderId: '1081434267674',
          // 	appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
          // 	measurementId: 'G-QLL5WFH89Y'
          // };
          // const BETA = {
          // 	apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
          // 	authDomain: 'aimpact-partners-prod.firebaseapp.com',
          // 	projectId: 'aimpact-partners-prod',
          // 	storageBucket: 'aimpact-partners-prod.appspot.com',
          // 	messagingSenderId: '741854278426',
          // 	appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
          // };
          // const CONFIG = {
          // 	local: DEV,
          // 	development: DEV,
          // 	testing: {
          // 		apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
          // 		authDomain: 'chat-api-test-393820.firebaseapp.com',
          // 		projectId: 'chat-api-test-393820',
          // 		storageBucket: 'chat-api-test-393820.appspot.com',
          // 		messagingSenderId: '1083395329827',
          // 		appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
          // 	},
          // 	quality: BETA,
          // 	production: BETA
          // };
          // const firebaseConfig = {
          // 	apiKey: 'AIzaSyCID7Abuob1R86qIAMyQ-zY0O0DXUtCRYs',
          // 	authDomain: 'agents-api-dev.firebaseapp.com',
          // 	projectId: 'agents-api-dev',
          // 	storageBucket: 'agents-api-dev.firebasestorage.app',
          // 	messagingSenderId: '883367315651',
          // 	appId: '1:883367315651:web:c683b5effb3c3f96e5fa76',
          // 	measurementId: 'G-8VBFZXEBQZ'
          // };
          // // Initialize Firebase
          // const app = initializeApp(firebaseConfig);
          // export const auth = getAuth(app);
          // export const analytics = getAnalytics(app);
          // export const googleProvider = new GoogleAuthProvider();
          // export const facebookProvider = new FacebookAuthProvider();
          "use strict";
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
        hash: 4012780420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
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
              return _config.auth.currentUser ? _config.auth.currentUser.uid : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3VzZXJzIiwiX2NvcmUiLCJfYXV0aCIsIl9lcnJvciIsIl9wcm92aWRlciIsIkF1dGgiLCJSZWFjdGl2ZU1vZGVsIiwicGVuZGluZ0xvZ2luIiwidXNlciIsInNlc3Npb24iLCJwcm92aWRlciIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJGaXJlYmFzZVByb3ZpZGVyIiwiZmlyZWJhc2UiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJiaW5kIiwic2V0UmVhZHkiLCIjc2V0UmVhZHkiLCJyZWFkeSIsInRyaWdnZXIiLCJhcHBMb2dpbiIsImRhdGEiLCJ1aWQiLCJjb25zb2xlIiwidHJhY2UiLCJDdXN0b21FcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZ2V0Q3VycmVudFRva2VuIiwidGhlbiIsImZpcmViYXNlVG9rZW4iLCJzcGVjcyIsIm1vZGVsIiwiZ2V0VXNlck1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJ1bmRlZmluZWQiLCJzaWduT3V0IiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwiY2F0Y2giLCJlIiwiRXJyb3IiLCJsb2dpbldpdGgiLCJsb2ciLCJ1c2VyRGF0YSIsInNpZ25JbldpdGhHb29nbGUiLCJlcnJvciIsImVycm9yTWFwcGluZ3MiLCJjb2RlIiwibWVzc2FnZSIsImlkIiwic2V0IiwiVXNlciIsImdldE1vZGVsIiwic2V0RmlyZWJhc2VQcm92aWRlciIsImluaXRpYWxpemUiLCJzZXRVc2VyIiwic2V0RmlyZWJhc2VVc2VyIiwidHJpZ2dlckV2ZW50IiwiYXV0aCIsImxvZ291dCIsImV4cG9ydHMiLCJuYW1lIiwiX2FwcCIsImV4ZWN1dGlvbnMiLCJhcHAiLCJnb29nbGVQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImNvbmZpZyIsImNhbGxiYWNrIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXREYXRhIiwicmVzcG9uc2UiLCJzaWduSW5XaXRoUG9wdXAiLCJmb3JjZVJlZnJlc2giLCJjdXJyZW50VXNlciIsImdldElkVG9rZW4iLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJwaG9uZU51bWJlciIsInByb3ZpZGVyRGF0YSIsInByb3ZpZGVySWQiLCJfY29uZmlnIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJsb2dnZWQiLCJpbml0aWFsaXplZCIsInByb21pc2UiLCJpc1JlYWR5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwib24iLCJsaXN0ZW5SZWFkeSIsImNsZWFyIiwia2VlcEtleXMiLCJrZXlzVG9LZWVwIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9lcnJvci50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvZmlyZWJhc2UvcHJvdmlkZXIudHMiLCIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFFQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFHTSxNQUFPTSxJQUFLLFNBQVFQLE1BQUEsQ0FBQVEsYUFBbUI7WUFDNUMsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFFTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJ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