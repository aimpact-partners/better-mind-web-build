System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.0.4/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive204Model) {
      dependency_2 = _beyondJsReactive204Model;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.4/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 633930748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _jcall = require("./jcall");
          /*bundle*/
          class Api extends _core.Events {
            #url;
            get url() {
              return this.#url ?? '';
            }
            #fetcher;
            get actions() {
              return this.#fetcher.actions;
            }
            get streamResponse() {
              return this.#fetcher.streamResponse;
            }
            get metadata() {
              return this.#fetcher.metadata;
            }
            constructor(url) {
              super();
              if (!url) {
                throw new Error('Api url is required');
              }
              this.#url = url;
              this.#fetcher = new _jcall.JCall();
              this.#fetcher.on('action.received', () => this.trigger('action.received'));
              this.#fetcher.on('stream.response', this.#getResponse);
            }
            #getResponse = () => {
              this.trigger('stream.response');
            };
            async action(method = 'get', route, specs = {}) {
              return this.#fetcher[method](this.getURL(route), specs);
            }
            getURL(route) {
              return `${this.#url}${route}`;
            }
            bearer(bearer) {
              this.#fetcher.bearer(bearer);
              return this;
            }
            get(route, specs) {
              return this.action('get', route, specs);
            }
            post(route, specs) {
              return this.action('post', route, specs);
            }
            put(route, specs) {
              return this.action('put', route, specs);
            }
            delete(route, specs) {
              return this.action('delete', route, specs);
            }
            stream(route, specs = {}) {
              return this.action('stream', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 1881027662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _stream = require("./stream");
          /*bundle*/
          class JCall extends _model.ReactiveModel {
            get actions() {
              return this.#streamer.actions;
            }
            get streamResponse() {
              return this.#streamer.response;
            }
            #bearer;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
            }
            #streamer;
            constructor() {
              super();
              this.#streamer = new _stream.Stream(this);
            }
            getHeaders = (specs, multipart) => {
              let headers = new Headers();
              const bearer = specs.bearer || this.#bearer;
              if (bearer) {
                headers.append('Authorization', `Bearer ${bearer}`);
              }
              if (specs.bearer) delete specs.bearer;
              const keys = Object.keys(specs);
              keys.forEach(key => {
                if (key === 'bearer') return;
                headers.append(key, specs[key]);
              });
              if (multipart) {
                headers.delete('Content-Type');
              }
              return headers;
            };
            #formData;
            formData = specs => {
              this.#formData = new FormData();
              const keys = Object.keys(specs);
              keys.forEach(key => {
                this.#formData.append(key, specs[key]);
              });
              return this.#formData;
            };
            #processGetParams(params) {
              const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
              if (emptyParams) return '';
              const parameters = new URLSearchParams();
              for (const key in params) {
                if (![NaN, undefined, ''].includes(params[key])) {
                  parameters.append(key, params[key]);
                }
              }
              return parameters;
            }
            #processPostParams = (params, multipart) => {
              const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
              if (emptyParams) return;
              if (multipart) {
                const data = this.formData(params);
                return data;
              }
              return JSON.stringify(params);
            };
            execute = async (url, method = 'get', params = {}, headersSpecs, stream, data) => {
              try {
                if (!headersSpecs) {
                  headersSpecs = {};
                }
                const multipart = params.multipart;
                let headers = this.getHeaders({
                  ...headersSpecs,
                  bearer: params.bearer
                }, multipart);
                delete params.multipart;
                delete params.bearer;
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                if (params.bearer) delete params.bearer;
                if (method === 'post') {
                  specs.body = this.#processPostParams(params, multipart);
                } else if (method === 'get') {
                  const queryString = this.#processGetParams(params).toString();
                  if (queryString) url += `?${queryString}`;
                }
                if (stream) return this.#streamer.execute(url, specs);
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error('error jcall', e);
              }
            };
            stream = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers, true);
            get = (url, params, headers) => {
              return this.execute(url, 'get', params);
            };
            post = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'post', params, headers);
            delete = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'DELETE', params, headers);
            put = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.execute(url, 'PUT', params, headers);
          }
          exports.JCall = JCall;
        }
      });

      /************************
      INTERNAL MODULE: ./stream
      ************************/

      ims.set('./stream', {
        hash: 4280835772,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Stream = void 0;
          var _core = require("@beyond-js/kernel/core");
          class Stream {
            #SEPARATORS = {
              METADATA: 'ÿ',
              START: '😸',
              END: '🖋️'
            };
            #metadata = {
              started: false,
              value: '',
              parsed: {
                value: void 0
              }
            };
            get metadata() {
              return this.#metadata.parsed;
            }
            #actions = [];
            get actions() {
              return this.#actions;
            }
            #response = '';
            get response() {
              return this.#response;
            }
            #parent;
            #currentTool = {
              started: false,
              value: '',
              parsed: {
                value: void 0
              }
            };
            constructor(parent) {
              this.#parent = parent;
            }
            #processResponse = promise => {
              const metadata = this.#metadata;
              try {
                this.#metadata.parsed.value = JSON.parse(metadata.value);
              } catch (exc) {
                console.error(exc);
                this.#metadata.parsed.error = 'Error parsing metadata';
              }
              promise.resolve({
                value: this.#response,
                ...metadata.parsed.value
              });
              this.#response = undefined;
            };
            #cleanCurrentTool() {
              this.#currentTool = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
            }
            async #handleMetadata(chunk, response) {
              this.#metadata.started = true;
              const split = chunk.split(this.#SEPARATORS.METADATA);
              this.#metadata.value += split[1];
              return split[0] ? response += split[0] : response;
            }
            handleStart(chunk, response) {
              const splitted = chunk.split(this.#SEPARATORS.START);
              this.#currentTool.started = true;
              chunk = '';
              if (splitted[1].includes(this.#SEPARATORS.END)) {
                const splitted2 = splitted[1].split(this.#SEPARATORS.END);
                this.#currentTool.value = splitted2[0];
                this.#actions.push(splitted2[0]);
                response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
              } else {
                response += splitted[0];
                this.#currentTool.value += splitted[1];
              }
              return response;
            }
            handleEnd(chunk, response) {
              const splitted = chunk.split(this.#SEPARATORS.END);
              this.#currentTool.value += splitted[0];
              this.#currentTool.started = false;
              this.#actions.push(this.#currentTool.value);
              this.#response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
              return splitted[1];
            }
            async #read(response, promise) {
              // create the stream reader
              const reader = response.body?.getReader();
              while (true) {
                const {
                  done,
                  value
                } = await reader.read();
                let chunk = new TextDecoder().decode(value);
                if (done) return this.#processResponse(promise);
                if (chunk.includes(this.#SEPARATORS.METADATA)) {
                  this.#handleMetadata(chunk, this.#response);
                  continue;
                }
                if (this.#metadata.started) {
                  this.#metadata.value += chunk;
                  this.#parent.trigger('stream.response');
                  return;
                }
                if (chunk.includes(this.#SEPARATORS.START)) {
                  this.handleStart(chunk, this.#response);
                } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                  // ends to receive an action tool
                  this.handleEnd(chunk, this.#response);
                  this.#cleanCurrentTool();
                }
                this.#response += chunk;
                this.#parent.triggerEvent('action.received');
                this.#parent.triggerEvent('stream.response');
              }
            }
            async execute(url, specs) {
              try {
                const promise = new _core.PendingPromise();
                this.#response = '';
                const response = await fetch(url, specs);
                if (!response.ok) {
                  throw new Error('error in stream');
                }
                this.#read(response, promise);
                return promise;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Stream = Stream;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }, {
        "im": "./jcall",
        "from": "JCall",
        "name": "JCall"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
        (require || prop === 'JCall') && _export("JCall", JCall = require ? require('./jcall').JCall : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfamNhbGwiLCJBcGkiLCJFdmVudHMiLCJ1cmwiLCJmZXRjaGVyIiwiYWN0aW9ucyIsInN0cmVhbVJlc3BvbnNlIiwibWV0YWRhdGEiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiSkNhbGwiLCJvbiIsInRyaWdnZXIiLCJnZXRSZXNwb25zZSIsIiNnZXRSZXNwb25zZSIsImFjdGlvbiIsIm1ldGhvZCIsInJvdXRlIiwic3BlY3MiLCJnZXRVUkwiLCJiZWFyZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwic3RyZWFtIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9zdHJlYW0iLCJSZWFjdGl2ZU1vZGVsIiwic3RyZWFtZXIiLCJyZXNwb25zZSIsIlN0cmVhbSIsImdldEhlYWRlcnMiLCJtdWx0aXBhcnQiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCIjcHJvY2Vzc0dldFBhcmFtcyIsInBhcmFtcyIsImVtcHR5UGFyYW1zIiwiZW50cmllcyIsImxlbmd0aCIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInByb2Nlc3NQb3N0UGFyYW1zIiwiI3Byb2Nlc3NQb3N0UGFyYW1zIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJleGVjdXRlIiwiaGVhZGVyc1NwZWNzIiwibW9kZSIsImJvZHkiLCJxdWVyeVN0cmluZyIsInRvU3RyaW5nIiwiZmV0Y2giLCJqc29uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIlNFUEFSQVRPUlMiLCJNRVRBREFUQSIsIlNUQVJUIiwiRU5EIiwic3RhcnRlZCIsInZhbHVlIiwicGFyc2VkIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbC50cyIsIi9zdHJlYW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFVLE1BQ1hFLEdBQUksU0FBUUgsS0FBQSxDQUFBSSxNQUFNO1lBQ3ZCLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxJQUFJLEVBQUU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRO1lBRVIsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEsQ0FBQ0MsT0FBTztZQUM3QjtZQUNBLElBQUlDLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsT0FBUSxDQUFDRSxjQUFjO1lBQ3BDO1lBRUEsSUFBSUMsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFILE9BQVEsQ0FBQ0csUUFBUTtZQUM5QjtZQUNBQyxZQUFZTCxHQUFHO2NBQ2QsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQSxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJTSxLQUFLLENBQUMscUJB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RSxPQUFPLENBQUMsaUJBQWlCLENBQUM7a0JBQ3ZDOztnQkFHRCxJQUFJNkUsS0FBSyxDQUFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBaUIsVUFBVyxDQUFDRSxLQUFLLENBQUMsRUFBRTtrQkFDM0MsSUFBSSxDQUFDa0IsV0FBVyxDQUFDRixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUExRCxRQUFTLENBQUM7aUJBQ3ZDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQWdELFdBQVksQ0FBQ0osT0FBTyxJQUFJYyxLQUFLLENBQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUFpQixVQUFXLENBQUNHLEdBQUcsQ0FBQyxFQUFFO2tCQUM3RTtrQkFDQSxJQUFJLENBQUNxQixTQUFTLENBQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTFELFFBQVMsQ0FBQztrQkFDckMsSUFBSSxDQUFDLENBQUFzRCxnQkFBaUIsRUFBRTs7Z0JBR3pCLElBQUksQ0FBQyxDQUFBdEQsUUFBUyxJQUFJMEQsS0FBSztnQkFDdkIsSUFBSSxDQUFDLENBQUFYLE1BQU8sQ0FBQ3lCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLENBQUF6QixNQUFPLENBQUN5QixZQUFZLENBQUMsaUJBQWlCLENBQUM7O1lBRTlDO1lBRUEsTUFBTTNDLE9BQU9BLENBQUN6RCxHQUFHLEVBQUVlLEtBQUs7Y0FDdkIsSUFBSTtnQkFDSCxNQUFNK0QsT0FBTyxHQUFHLElBQUluRixLQUFBLENBQUEwRyxjQUFjLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxDQUFBekUsUUFBUyxHQUFHLEVBQUU7Z0JBQ25CLE1BQU1BLFFBQVEsR0FBYSxNQUFNbUMsS0FBSyxDQUFDL0QsR0FBRyxFQUFFZSxLQUFLLENBQUM7Z0JBRWxELElBQUksQ0FBQ2EsUUFBUSxDQUFDMEUsRUFBRSxFQUFFO2tCQUNqQixNQUFNLElBQUloRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7O2dCQUduQyxJQUFJLENBQUMsQ0FBQXVGLElBQUssQ0FBQ2pFLFFBQVEsRUFBRWtELE9BQU8sQ0FBQztnQkFDN0IsT0FBT0EsT0FBTztlQUNkLENBQUMsT0FBT2IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjs7VUFDQTFDLE9BQUEsQ0FBQU0sTUFBQSxHQUFBQSxNQUFBIiwiaWdub3JlTGlzdCI6W119