System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, __beyond_pkg, hmr;
  _export("Api", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "2.0.4"], ["socket.io-client", "4.7.2"], ["zod", "3.24.2"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/http-suite@0.1.0/api"
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
        hash: 1219348070,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _fetcher = require("./fetcher");
          var _core = require("@beyond-js/kernel/core");
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
            get stringContent() {
              return this.#fetcher.stringContent;
            }
            constructor(url) {
              super();
              this.#url = url;
              this.#fetcher = new _fetcher.Fetcher();
              this.#fetcher.on('action.received', specs => this.trigger('action.received', specs));
              this.#fetcher.on('stream.response', this.#getResponse);
            }
            #getResponse = () => {
              this.trigger('stream.response');
            };
            async action(method = 'get', route, specs = {}) {
              this.#fetcher.clean();
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
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 2554591198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApiError = void 0;
          class ApiError extends Error {
            cause;
            constructor(message, cause) {
              super(message);
              this.cause = cause;
              this.name = 'ApiError';
            }
          }
          exports.ApiError = ApiError;
        }
      });

      /*************************
      INTERNAL MODULE: ./fetcher
      *************************/

      ims.set('./fetcher', {
        hash: 1619673536,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Fetcher = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _stream = require("./stream");
          class Fetcher extends _model.ReactiveModel {
            #bearer;
            streamer;
            formDataInstance;
            customHeaders = {
              'Content-Type': 'application/json'
            };
            defaultHeaders = {
              'Content-Type': 'application/json'
            };
            constructor() {
              super();
              this.streamer = new _stream.Stream(this);
            }
            get actions() {
              return this.streamer.actions;
            }
            get streamResponse() {
              return this.streamer.response;
            }
            get stringContent() {
              return this.streamer.stringContent;
            }
            get metadata() {
              return this.streamer.metadata;
            }
            bearer(token) {
              if (token) this.#bearer = token;
              return this;
            }
            setHeaders(headers) {
              this.customHeaders = {
                ...this.defaultHeaders,
                ...headers
              };
              return this;
            }
            getHeaders(specs = {}, multipart = false) {
              const mergedHeaders = {
                ...this.customHeaders,
                ...specs
              };
              const headers = new Headers();
              const token = mergedHeaders.Authorization || this.#bearer;
              if (token) headers.append('Authorization', `Bearer ${token}`);
              for (const [key, value] of Object.entries(mergedHeaders)) {
                if (key !== 'Authorization' && key !== 'bearer') {
                  headers.append(key, value);
                }
              }
              if (multipart) {
                headers.delete('Content-Type');
              }
              return headers;
            }
            createFormData(specs = {}) {
              this.formDataInstance = new FormData();
              for (const [key, value] of Object.entries(specs)) {
                this.formDataInstance.append(key, value);
              }
              return this.formDataInstance;
            }
            processGetParams(params = {}) {
              if (Object.entries(params).length === 0) return '';
              const parameters = new URLSearchParams();
              for (const [key, value] of Object.entries(params)) {
                if (![NaN, undefined, ''].includes(value)) {
                  parameters.append(key, value);
                }
              }
              return parameters;
            }
            processParams(params = {}, multipart = false, method) {
              if (method === 'get') {
                return this.processGetParams(params).toString();
              }
              if (Object.entries(params).length === 0) return;
              return multipart ? this.createFormData(params) : JSON.stringify(params);
            }
            async execute(url, method = 'get', params = {}, stream = false) {
              const multipart = params.multipart;
              const headers = this.getHeaders({
                bearer: params.bearer
              }, multipart);
              delete params.multipart;
              delete params.bearer;
              const specs = {
                method,
                headers,
                mode: 'cors'
              };
              if (['post', 'put', 'DELETE'].includes(method)) {
                specs.body = this.processParams(params, multipart, method);
              } else if (method === 'get') {
                const queryString = this.processParams(params, multipart, method);
                if (queryString) url += `?${queryString}`;
              }
              if (stream) return this.streamer.execute(url, specs);
              const response = await fetch(url, specs);
              return await response.json();
            }
            stream(url, params = {}) {
              return this.execute(url, 'post', params, true);
            }
            get(url, params = {}) {
              return this.execute(url, 'get', params);
            }
            post(url, params = {}) {
              return this.execute(url, 'post', params);
            }
            delete(url, params = {}) {
              return this.execute(url, 'DELETE', params);
            }
            put(url, params = {}) {
              return this.execute(url, 'put', params);
            }
            clean() {
              this.streamer.clean();
            }
          }
          exports.Fetcher = Fetcher;
        }
      });

      /************************
      INTERNAL MODULE: ./stream
      ************************/

      ims.set('./stream', {
        hash: 1519673351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Stream = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _error = require("./error");
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
            #executingPromise;
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
            get stringContent() {
              const {
                START,
                END
              } = this.#SEPARATORS;
              if (!this.#response) return;
              const regex = new RegExp(`${START}.*?${END}`, 'gs');
              return this.#response.replace(regex, '').trim();
            }
            clean() {
              this.#metadata = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              this.#actions = [];
              this.#response = '';
              this.#executingPromise = undefined;
            }
            #processResponse = promise => {
              const metadata = this.#metadata;
              try {
                this.#metadata.parsed.value = JSON.parse(metadata.value);
              } catch (exc) {
                this.#metadata.parsed.error = 'Error parsing metadata';
                promise?.reject(new _error.ApiError('Failed to parse metadata', exc));
                return;
              }
              promise?.resolve({
                value: this.#response,
                ...metadata.parsed.value
              });
              this.#metadata = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              this.#response = undefined;
              this.#executingPromise = undefined;
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
              return split[0] ? split[0] : '';
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
              const reader = response.body?.getReader();
              if (!reader) {
                promise.reject(new _error.ApiError('Response body is not readable'));
                return;
              }
              try {
                // throw new Error('test 2');
                while (true) {
                  const {
                    done,
                    value
                  } = await reader.read();
                  if (done) {
                    this.#processResponse(promise);
                    return;
                  }
                  if (!value) continue;
                  let chunk = new TextDecoder().decode(value);
                  if (chunk.includes(this.#SEPARATORS.METADATA)) {
                    const cleaned = await this.#handleMetadata(chunk, this.#response);
                    this.#response += cleaned;
                    this.#parent.triggerEvent('stream.response');
                    continue;
                  }
                  if (this.#metadata.started) {
                    this.#metadata.value += chunk;
                    this.#parent.trigger('stream.response');
                    this.#parent.trigger('action.received', this.#metadata.value);
                    continue;
                  }
                  if (chunk.includes(this.#SEPARATORS.START)) {
                    this.handleStart(chunk, this.#response);
                  } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                    this.handleEnd(chunk, this.#response);
                    this.#cleanCurrentTool();
                  }
                  this.#response += chunk;
                  this.#parent.triggerEvent('action.received');
                  this.#parent.triggerEvent('stream.response');
                }
              } catch (e) {
                promise.reject(new _error.ApiError('Stream reading failed', e));
              }
            }
            async execute(url, specs) {
              this.#executingPromise = new _core.PendingPromise();
              this.#response = '';
              let response;
              try {
                response = await fetch(url, specs);
                if (!response.ok) {
                  throw new _error.ApiError(`Stream request failed with status ${response.status}`);
                }
                await this.#read(response, this.#executingPromise);
              } catch (e) {
                console.error('Stream execution failed', e);
                this.#executingPromise.reject(new _error.ApiError('Stream execution failed', e));
              }
              return this.#executingPromise;
            }
          }
          exports.Stream = Stream;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 573802250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsInNwZWNzIiwidHJpZ2dlciIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiQXBpRXJyb3IiLCJFcnJvciIsImNhdXNlIiwibWVzc2FnZSIsIm5hbWUiLCJfbW9kZWwiLCJfc3RyZWFtIiwiUmVhY3RpdmVNb2RlbCIsInN0cmVhbWVyIiwiZm9ybURhdGFJbnN0YW5jZSIsImN1c3RvbUhlYWRlcnMiLCJkZWZhdWx0SGVhZGVycyIsIlN0cmVhbSIsInJlc3BvbnNlIiwidG9rZW4iLCJzZXRIZWFkZXJzIiwiaGVhZGVycyIsImdldEhlYWRlcnMiLCJtdWx0aXBhcnQiLCJtZXJnZWRIZWFkZXJzIiwiSGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJhcHBlbmQiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJjcmVhdGVGb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvY2Vzc0dldFBhcmFtcyIsInBhcmFtcyIsImxlbmd0aCIsInBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJOYU4iLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInByb2Nlc3NQYXJhbXMiLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJleGVjdXRlIiwibW9kZSIsImJvZHkiLCJxdWVyeVN0cmluZyIsImZldGNoIiwianNvbiIsIl9lcnJvciIsIlNFUEFSQVRPUlMiLCJNRVRBREFUQSIsIlNUQVJUIiwiRU5EIiwic3RhcnRlZCIsInBhcnNlZCIsImV4ZWN1dGluZ1Byb21pc2UiLCJwYXJlbnQiLCJjdXJyZW50VG9vbCIsInJlZ2V4IiwiUmVnRXhwIiwicmVwbGFjZSIsInRyaW0iLCJwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJlcnJvciIsInJlamVjdCIsInJlc29sdmUiLCJjbGVhbkN1cnJlbnRUb29sIiwiI2NsZWFuQ3VycmVudFRvb2wiLCJoYW5kbGVNZXRhZGF0YSIsIiNoYW5kbGVNZXRhZGF0YSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsImNsZWFuZWQiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiUGVuZGluZ1Byb21pc2UiLCJvayIsInN0YXR1cyIsImNvbnNvbGUiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi9hcGkudHMiLCIvZXJyb3IudHMiLCIvZmV0Y2hlci50cyIsIi9zdHJlYW0udHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxHQUFJLFNBQVFELEtBQUEsQ0FBQUUsTUFBTTtZQUN2QixDQUFBQyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksSUFBSSxFQUFFO1lBQ3ZCO1lBQ0EsQ0FBQUMsT0FBUTtZQUVSLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUNDLE9BQU87WUFDN0I7WUFDQSxJQUFJQyxj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