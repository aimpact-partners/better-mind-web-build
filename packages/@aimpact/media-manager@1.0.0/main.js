System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204Model) {
      dependency_1 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_2 = _beyondJsKernel0112Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["socket.io-client", "4.8.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/main"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 1222938740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = 'DESKTOP';
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            #promise;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              if (!MediaDevice.instance) {
                MediaDevice.instance = new MediaDevice();
              }
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                console.log(1, collection.entries);
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                console.log(1, this.#files.entries);
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = exports.DesktopMediaDevice = MediaDevice.getInstance();
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 1266923743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : 'any';
            }
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed'],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac' // FLAC files
              ]
            });
            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('load', this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('onloadend', this.#onloadend);
              }
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              this._items.set(name, file);
            }
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ''));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, '');
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ''), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3083892194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice,
              0: _mobile.MobileMediaDevice
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = exports.mediaDevice = getMedia();
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2249157670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement('input');
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.log('error');
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };
            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener('click', this.openDialog);
                this.#input.addEventListener('change', this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 3878263831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = 'MOBILE';
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error('Failed because: ' + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              if (!MediaCameraDevice.instance) {
                MediaCameraDevice.instance = new MediaCameraDevice();
              }
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = exports.MobileMediaDevice = MediaCameraDevice.getInstance();
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 3466930214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent('change');
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent('change');
            }
            async upload(data, url) {
              try {
                const specs = {
                  method: 'post',
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZpbGVzIiwiX2lucHV0IiwiX3hociIsIk1lZGlhRGV2aWNlIiwiUmVhY3RpdmVNb2RlbCIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJQTEFURk9STSIsInN0cmVhbSIsImNvbnN0cmFpbnRzIiwiaW5wdXRGaWxlIiwiZmlsZXMiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiTWVkaWFGaWxlcyIsImdldFVzZXJNZWRpYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJhY3RpdmF0ZUNhbWVyYSIsInNyY09iamVjdCIsImdldEluc3RhbmNlIiwiZGVzYWN0aXZhdGVDYW1lcmEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVtb3ZlVHJhY2siLCJ1bmRlZmluZWQiLCJnZXRQaWN0dXJlIiwidmlkZW8iLCJhdWRpbyIsImltYWdlQ2FwdHVyZSIsImdsb2JhbFRoaXMiLCJJbWFnZUNhcHR1cmUiLCJnZXRWaWRlb1RyYWNrcyIsImJsb2IiLCJ0YWtlUGhvdG8iLCJjbGVhbiIsImdldFZpZGVvU3RyZWFtIiwidGFrZVBpY3R1cmUiLCJvcHRpb25zIiwib3BlbkdhbGxlcnkiLCJzcGVjcyIsInVwbG9hZCIsInVybCIsImZvcm0iLCJGb3JtRGF0YSIsInNldElucHV0RmlsZSIsImlucHV0IiwiSW5wdXRGaWxlIiwicHVibGlzaCIsInBhcmFtcyIsImNvbGxlY3Rpb24iLCJuYW1lIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJEZXNrdG9wTWVkaWFEZXZpY2UiLCJleHBvcnRzIiwiX2NvcmUiLCJnZXRVcmwiLCJkYXRhIiwiUGVuZGluZ1Byb21pc2UiLCJwcm9jZXNzIiwicHJvY2Vzc0ZpbGUiLCJlbnRyeSIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYSIsInJlc29sdmUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImxvYWRlZCIsInR5cGUiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwicGFyZW50IiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsInppcCIsIm9ubG9hZCIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiNvbmxvYWRlbmQiLCJzcmMiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwiI3Byb2Nlc3NGaWxlIiwicmVwbGFjZSIsImdldCIsInNldCIsIm9uZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwicHVzaCIsInJlYWRGaWxlIiwidmFsaWRhdGVMb2FkIiwiI3ZhbGlkYXRlTG9hZCIsInJlYWRMb2NhbCIsImZpbGVMaXN0IiwicHJvbWlzZXMiLCJpIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsImdldE1vYmlsZVVybCIsImUiLCJpbWdCbG9iIiwiQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJtZWRpYSIsImdldE1lZGlhIiwidHlwZXMiLCJNT0JJTEUiLCJERVNLVE9QIiwiZGV2aWNlVHlwZSIsImNvcmRvdmEiLCJtb2RlbHMiLCJNb2JpbGVNZWRpYURldmljZSIsIm1lZGlhRGV2aWNlIiwiY3JlYXRlRWxlbWVudCIsIm9uIiwiZ2V0RXJyb3JzIiwiZmlsZXNMb2FkZWQiLCJzZXRBdHRyaWJ1dGVzIiwiY3JlYXRlIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwib3BlbkRpYWxvZyIsImNsaWNrIiwiYXR0cnMiLCJzdHlsZSIsInByb3AiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUlucHV0IiwiY3VycmVudFRhcmdldCIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZnRlciIsIk1lZGlhQ2FtZXJhRGV2aWNlIiwic291cmNlIiwiREVGQVVMVF9PUFRJT05TIiwicXVhbGl0eSIsImRlc3RpbmF0aW9uVHlwZSIsIkNhbWVyYSIsIkRlc3RpbmF0aW9uVHlwZSIsIkZJTEVfVVJJIiwic291cmNlVHlwZSIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiYWxsb3dFZGl0IiwiY29ycmVjdE9yaWVudGF0aW9uIiwib25TdWNjZXNzIiwic3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsIiwibWVzc2FnZSIsInJlamVjdCIsInNldE9wdGlvbnMiLCJvdmVyd3JpdGVzIiwiY2FtZXJhIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJvbkFib3J0IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiYWJvcnQiXSwic291cmNlcyI6WyIvY29kZS90cy9kZXNrdG9wLnRzIiwiL2NvZGUvdHMvZmlsZS1tYW5hZ2VyLnRzIiwiL2NvZGUvdHMvZmlsZXMvaW5kZXgudHMiLCIvaS1jYW1lcmEudHMiLCIvY29kZS90cy9pbmRleC50cyIsIi9jb2RlL3RzL2lucHV0LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvY29kZS90cy9tb2JpbGUudHMiLCIvY29kZS90cy94aHIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVs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