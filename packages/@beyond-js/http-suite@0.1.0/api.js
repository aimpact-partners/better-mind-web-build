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
        hash: 1259019929,
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
              // Expresión regular para encontrar el contenido entre START y END
              const regex = new RegExp(`${START}.*?${END}`, 'gs');
              // Remover el contenido enconsotre los separadores
              const cleanedString = this.#response.replace(regex, '');
              return cleanedString.trim();
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
                console.log(metadata);
                console.error(exc);
                this.#metadata.parsed.error = 'Error parsing metadata';
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
                  const response = await this.#handleMetadata(chunk, this.#response);
                  this.#response += response;
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
                  // ends to receive an action tool
                  this.handleEnd(chunk, this.#response);
                  this.#cleanCurrentTool();
                }
                this.#response += chunk;
                // console.log(44, this.#response);
                this.#parent.triggerEvent('action.received');
                this.#parent.triggerEvent('stream.response');
              }
            }
            async execute(url, specs) {
              this.#executingPromise = new _core.PendingPromise();
              this.#response = '';
              const response = await fetch(url, specs);
              if (!response.ok) {
                throw new Error('error in stream');
              }
              this.#read(response, this.#executingPromise);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsInNwZWNzIiwidHJpZ2dlciIsImdldFJlc3BvbnNlIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJmZXRjaCIsImpzb24iLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJwYXJzZWQiLCJleGVjdXRpbmdQcm9taXNlIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJyZWdleCIsIlJlZ0V4cCIsImNsZWFuZWRTdHJpbmciLCJyZXBsYWNlIiwidHJpbSIsInByb2Nlc3NSZXNwb25zZSIsInByb21pc2UiLCJwYXJzZSIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlc29sdmUiLCJjbGVhbkN1cnJlbnRUb29sIiwiI2NsZWFuQ3VycmVudFRvb2wiLCJoYW5kbGVNZXRhZGF0YSIsIiNoYW5kbGVNZXRhZGF0YSIsImNodW5rIiwic3BsaXQiLCJoYW5kbGVTdGFydCIsInNwbGl0dGVkIiwic3BsaXR0ZWQyIiwicHVzaCIsImhhbmRsZUVuZCIsInJlYWQiLCIjcmVhZCIsInJlYWRlciIsImdldFJlYWRlciIsImRvbmUiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInRyaWdnZXJFdmVudCIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJFcnJvciIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9mZXRjaGVyLnRzIiwiL3N0cmVhbS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxHQUFJLFNBQVFELEtBQUEsQ0FBQUUsTUFBTTtZQUN2QixDQUFBQyxHQUFJO1lBQ0osSUFBSUEsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUksSUFBSSxFQUFFO1lBQ3ZCO1lBQ0EsQ0FBQUMsT0FBUTtZQUVSLElBQUlDLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBRCxPQUFRLENBQUNDLE9BQU87WUFDN0I7WUFDQSxJQUFJQyxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVEsQ0FBQ0UsY0FBYztZQUNwQztZQUVBLElBQUlDLFFB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