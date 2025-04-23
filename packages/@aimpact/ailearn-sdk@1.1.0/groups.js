System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/entities/collection", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.1.0/config", "@beyond-js/reactive@2.0.4/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive204EntitiesCollection) {
      dependency_1 = _beyondJsReactive204EntitiesCollection;
    }, function (_beyondJsReactive204Model) {
      dependency_2 = _beyondJsReactive204Model;
    }, function (_aimpactChatSdk144Session) {
      dependency_3 = _aimpactChatSdk144Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk110Config) {
      dependency_5 = _aimpactAilearnSdk110Config;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_6 = _beyondJsReactive204EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.1.0/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 270024252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Groups = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _dataProvider = require("./data-provider");
          /*bundle*/
          class Groups extends _collection.Collection {
            constructor(entity, item) {
              super({
                entity,
                item,
                provider: _dataProvider.DataProvider
              });
            }
          }
          exports.Groups = Groups;
        }
      });

      /*******************************
      INTERNAL MODULE: ./data-provider
      *******************************/

      ims.set('./data-provider', {
        hash: 1447095248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _error = require("./error");
          /*bundle */ /**
                       
                        
                       */
          class DataProvider {
            #api;
            #model;
            #entity;
            constructor(model) {
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project].ailearn);
              this.#model = model;
              this.#entity = model.entity;
            }
            setModel(model) {
              this.#model = model;
            }
            async load(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const id = specs.id || specs.code;
              const response = await this.#api.get(`/${this.#entity}/${id}`);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
              }
              return response.data;
            }
            async publish(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/${this.#entity}`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async list(specs = {
              endpoint: undefined
            }) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const endpoint = specs.endpoint ? specs.endpoint : `/${this.#entity}`;
                delete specs.endpoint;
                const response = await this.#api.get(endpoint, specs);
                return response.data.items;
              } catch (e) {
                console.error(e);
              }
            }
            test() {
              //code
            }
            async invite(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.post(`/${this.#entity}/${this.#model.id}/invite`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async cancelInvitation(specs = {}) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.delete(`/${this.#entity}/${this.#model.id}/invite/user/${specs.email}`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.post(`/${this.#entity}/join`, specs);
              if (!res.status) {
                if (res.error.code === 104) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 101) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 100) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.post(`/${this.#entity}/${this.#model.id}/approve`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async delete(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async removeMember(specs) {
              this.#api.bearer(_session.sessionWrapper.user.token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}/user/${specs.uid}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async reject(specs) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const res = await this.#api.delete(`/${this.#entity}/${specs.id}/join/user/${specs.uid}`, {});
                if (!res.status) {
                  throw new Error(`Error rejecting the user from the ${this.#entity}`);
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async requestAccess() {
              const response = await this.#api.post(`/classrooms/${this.#model.id}/request`);
              return response.data;
            }
          }
          exports.DataProvider = DataProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 2905388780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2706289502,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GroupItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _dataProvider = require("./data-provider");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class GroupItem extends _item.Item {
            #hasAccess = false;
            get hasAccess() {
              return this.#hasAccess;
            }
            #members = [];
            get members() {
              return this.#members;
            }
            #managers = [];
            get managers() {
              return this.#managers;
            }
            #pendings = [];
            get pendings() {
              return this.#pendings;
            }
            #registered = new Map();
            #isAdmin;
            get isAdmin() {
              return this.#isAdmin;
            }
            get authorizedPeople() {
              return this.people.filter(i => i.authorized);
            }
            #ready = false;
            get ready() {
              return this.#ready;
            }
            constructor(entity, {
              properties,
              ...data
            }) {
              super({
                entity,
                ...data,
                provider: _dataProvider.DataProvider,
                properties: ['timeCreated', 'timeUpdated', 'name', 'access', 'address', 'description', 'people', 'joinSpecs', 'id', 'status', 'joined', ...properties]
              });
              this.provider.setModel(this);
            }
            async load(specs) {
              specs = typeof specs === 'number' || typeof specs === 'string' ? {
                id: specs
              } : specs;
              if (!specs || Object.keys(specs).length === 0) specs = {
                id: this.id
              };
              const data = await super.load(specs);
              if (!this.people) return;
              this.#hasAccess = true;
              // Sort people alphabetically by name (assuming each person has a 'name' property)
              this.people.sort((a, b) => a.name.localeCompare(b.name));
              const {
                people
              } = this;
              const isAdmin = people.some(i => i.role === 'manager' && i.uid === _session.sessionWrapper.user.id);
              this.#isAdmin = isAdmin;
              const checkMember = person => {
                // Use both uid and id for identification
                const personId = person.uid || person.id;
                const currentRole = this.#registered.get(person.email);
                // Guard clause: If the role hasn't changed, do nothing
                if (!person.invited && person.role && currentRole === person.role) {
                  this.#pendings = this.#pendings.filter(i => i.email !== person.email);
                  return;
                }
                // If the person is already registered, remove them from their current role array
                if (!person.invited && currentRole) {
                  if (currentRole === 'manager') {
                    this.#managers = this.#managers.filter(i => i.email !== person.email);
                  } else {
                    this.#members = this.#members.filter(i => i.email !== person.email);
                  }
                }
                // Add the person to the appropriate role array
                this.#pendings = this.#pendings.filter(i => i.email !== person.email);
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                } else if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                }
                // Update the registered map with the current role
                // this.#registered.set(personId, person.role);
                if (!person.invited) this.#registered.set(person.email, person.role);
              };
              this.#ready = true;
              people.forEach(checkMember);
              return data;
            }
            async approve(specs) {
              // Validate input
              if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
              const response = await this.provider.approve(specs);
              if (!response.status) {}
              const {
                uid
              } = specs;
              const id = uid || specs.id;
              // Find and remove the pending member with the specified id
              const pendingIndex = this.#pendings.findIndex(p => p.uid === id || p.id === id);
              if (pendingIndex >= 0) {
                const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
                pendingMember.authorized = true;
                // Add the pending member to the members list
                specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
              }
              this.triggerEvent();
            }
            async removeMember(args) {
              const response = await this.provider.removeMember(args);
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== args.uid);
                this.#managers = this.#managers.filter(i => i.uid !== args.uid);
                this.#members = this.#members.filter(i => i.uid !== args.uid);
                this.triggerEvent();
              }
            }
            async reject(specs) {
              const response = await this.provider.reject({
                id: this.id,
                ...specs
              });
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== specs.uid);
                this.#pendings = this.#pendings.filter(i => i.uid !== specs.uid);
                this.triggerEvent();
              }
            }
            async invite(specs) {
              const response = await this.provider.invite(specs);
              const member = {
                ...specs,
                invited: true
              };
              // this.#pendings.push(member);
              this.people.push(member);
              this.#pendings.push(member);
              this.trigger('change');
              return response;
            }
            async cancelInvitation(specs) {
              const response = await this.provider.cancelInvitation(specs);
              if (response.status) {
                this.people = this.people.filter(i => i.email !== specs.email);
                this.#pendings = this.#pendings.filter(i => i.email !== specs.email);
                this.triggerEvent();
              }
            }
            async delete() {
              const response = await this.provider.delete({
                id: this.id
              });
              if (response.status) {
                this.triggerEvent();
              }
              return response;
            }
            async join({
              code
            }) {
              const data = await this.provider.join({
                code
              });
              this.set({
                code
              });
              return data;
            }
            async requestAccess() {
              const data = await this.provider.requestAccess();
              if (data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.id
                });
              } else {
                await this.set({
                  access: data.status
                });
              }
              this.set(data);
              return data;
            }
          }
          exports.GroupItem = GroupItem;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Groups",
        "name": "Groups"
      }, {
        "im": "./data-provider",
        "from": "DataProvider",
        "name": "DataProvider"
      }, {
        "im": "./item",
        "from": "GroupItem",
        "name": "GroupItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Groups') && _export("Groups", Groups = require ? require('./collection').Groups : value);
        (require || prop === 'DataProvider') && _export("DataProvider", DataProvider = require ? require('./data-provider').DataProvider : value);
        (require || prop === 'GroupItem') && _export("GroupItem", GroupItem = require ? require('./item').GroupItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9jb25maWciLCJfZXJyb3IiLCJhcGkiLCJtb2RlbCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwicHJvamVjdCIsImFpbGVhcm4iLCJzZXRNb2RlbCIsImxvYWQiLCJzcGVjcyIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwiaWQiLCJjb2RlIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJDdXN0b21FcnJvciIsImVycm9yIiwidGV4dCIsImRhdGEiLCJwdWJsaXNoIiwicG9zdCIsImxpc3QiLCJlbmRwb2ludCIsInVuZGVmaW5lZCIsIml0ZW1zIiwiZSIsImNvbnNvbGUiLCJ0ZXN0IiwiaW52aXRlIiwicmVzIiwiRXJyb3IiLCJjYW5jZWxJbnZpdGF0aW9uIiwiZGVsZXRlIiwiZW1haWwiLCJqb2luIiwiYXBwcm92ZSIsInJlbW92ZU1lbWJlciIsInVpZCIsInJlamVjdCIsInJlcXVlc3RBY2Nlc3MiLCJtZXNzYWdlIiwibmFtZSIsIl9pdGVtIiwiR3JvdXBJdGVtIiwiSXRlbSIsImhhc0FjY2VzcyIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwicmVnaXN0ZXJlZCIsIk1hcCIsImlzQWRtaW4iLCJhdXRob3JpemVkUGVvcGxlIiwicGVvcGxlIiwiZmlsdGVyIiwiaSIsImF1dGhvcml6ZWQiLCJyZWFkeSIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInNvbWUiLCJyb2xlIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJwZXJzb25JZCIsImN1cnJlbnRSb2xlIiwiaW52aXRlZCIsInB1c2giLCJzZXQiLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciIsInRvTG93ZXJDYXNlIiwiYWNjZXNzIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvZGF0YS1wcm92aWRlci50cyIsIi9lcnJvci50cyIsIi9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLE1BQU8sU0FBUUgsV0FBQSxDQUFBSSxVQUFtQztZQUN6RUMsWUFBWUMsTUFBTSxFQUFFQyxJQUFJO2NBQ3ZCLEtBQUssQ0FBQztnQkFDTEQsTUFBTTtnQkFDTkMsSUFBSTtnQkFDSkMsUUFBUSxFQUFFTixhQUFBLENBQUFPO2VBQ1YsQ0FBQztZQUNIOztVQUNBQyxPQUFBLENBQUFQLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWRCxJQUFBUSxRQUFBLEdBQUFWLE9BQUE7VUFFQSxJQUFBVyxJQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxPQUFBLEdBQUFaLE9BQUE7VUFHQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFPTyxZQUxQOzs7O1VBS2tCLE1BQU9RLFlBQVk7WUFDcEMsQ0FBQU0sR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTixDQUFBVixNQUFPO1lBRVBELFlBQVlXLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFLLEdBQUcsQ0FBQ0osT0FBQSxDQUFBSyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxPQUFBLENBQUFLLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO2NBQ3RFLElBQUksQ0FBQyxDQUFBTixLQUFNLEdBQUdBLEtBQUs7Y0FDbkIsSUFBSSxDQUFDLENBQUFWLE1BQU8sR0FBR1UsS0FBSyxDQUFDVixNQUFNO1lBQzVCO1lBRUFpQixRQUFRQSxDQUFDUCxLQUFLO2NBQ2IsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBR0EsS0FBSztZQUNwQjtZQUNBLE1BQU1RLElBQUlBLENBQUNDLEtBQW1DO2NBQzdDLElBQUksQ0FBQyxDQUFBVixHQUFJLENBQUNXLE1BQU0sQ0FBQ2YsUUFBQSxDQUFBZ0IsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztjQUMzQyxNQUFNQyxFQUFFLEdBQUdMLEtBQUssQ0FBQ0ssRUFBRSxJQUFJTCxLQUFLLENBQUNNLElBQUk7Y0FDakMsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFqQixHQUFJLENBQUNrQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTNCLE1BQU8sSUFBSXdCLEVBQUUsRUFBRSxDQUFDO2NBRTlELElBQUksQ0FBQ0UsUUFBUSxDQUFDRSxNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSXBCLE1BQUEsQ0FBQXFCLFdBQVcsQ0FBQ0gsUUFBUSxDQUFDSSxLQUFLLENBQUNDLElBQUksRUFBRUwsUUFBUSxDQUFDSSxLQUFLLENBQUNMLElBQUksQ0FBQzs7Y0FFaEUsT0FBT0MsUUFBUSxDQUFDTSxJQUFJO1lBQ3JCO1lBQ0EsTUFBTUMsT0FBT0EsQ0FBQ2QsS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUFWLEdBQUksQ0FBQ1csTUFBTSxDQUFDZixRQUFBLENBQUFnQixjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU1HLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDeUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFsQyxNQUFPLEVBQUUsRUFBRW1CLEtBQUssQ0FBQztjQUNoRSxJQUFJLENBQUNPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNyQixNQUFNLElBQUlwQixNQUFBLENBQUFxQixXQUFXLENBQUNILFFBQVEsQ0FBQ0ksS0FBSyxDQUFDQyxJQUFJLEVBQUVMLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDTCxJQUFJLENBQUM7Z0JBQy9EOztjQUVELE9BQU9DLFFBQVE7WUFDaEI7WUFDQSxNQUFNUyxJQUFJQSxDQUFDaEIsS0FBSyxHQUFHO2NBQUVpQixRQUFRLEVBQUVDO1lBQVMsQ0FBRTtjQUN6QyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBNUIsR0FBSSxDQUFDVyxNQUFNLENBQUNmLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBRTNDLE1BQU1hLFFBQVEsR0FBR2pCLEtBQUssQ0FBQ2lCLFFBQVEsR0FBR2pCLEtBQUssQ0FBQ2lCLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBcEMsTUFBTyxFQUFFO2dCQUNyRSxPQUFPbUIsS0FBSyxDQUFDaUIsUUFBUTtnQkFDckIsTUFBTVYsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFqQixHQUFJLENBQUNrQixHQUFHLENBQUNTLFFBQVEsRUFBRWpCLEtBQUssQ0FBQztnQkFDckQsT0FBT08sUUFBUSxDQUFDTSxJQUFJLENBQUNNLEtBQUs7ZUFDMUIsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1YsS0FBSyxDQUFDUyxDQUFDLENBQUM7O1lBRWxCO1lBRUFFLElBQUlBLENBQUE7Y0FDSDtZQUFBO1lBR0QsTUFBTUMsTUFBTUEsQ0FBQ3ZCLEtBQUssR0FBRyxFQUFFO2NBQ3RCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFWLEdBQUksQ0FBQ1csTUFBTSxDQUFDZixRQUFBLENBQUFnQixjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUMzQyxNQUFNb0IsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFsQyxHQUFJLENBQUN5QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQWxDLE1BQU8sSUFBSyxJQUFJLENBQUMsQ0FBQVUsS0FBb0IsQ0FBQ2MsRUFBRSxTQUFTLEVBQUVMLEtBQUssQ0FBQztnQkFFbkcsSUFBSSxDQUFDd0IsR0FBRyxDQUFDZixNQUFNLEVBQUU7a0JBQ2hCLE1BQU0sSUFBSWdCLEtBQUssQ0FBQywrQkFBK0IsQ0FBQzs7Z0JBRWpELE9BQU9ELEdBQUc7ZUFDVixDQUFDLE9BQU9KLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDVixLQUFLLENBQUNTLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNTSxnQkFBZ0JBLENBQUMxQixLQUFBLEdBQTRCLEVBQUU7Y0FDcEQsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVYsR0FBSSxDQUFDVyxNQUFNLENBQUNmLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Z0JBQzNDLE1BQU1vQixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQ3FDLE1BQU0sQ0FDakMsSUFBSSxJQUFJLENBQUMsQ0FBQTlDLE1BQU8sSUFBSyxJQUFJLENBQUMsQ0FBQVUsS0FBb0IsQ0FBQ2MsRUFBRSxnQkFBZ0JMLEtBQUssQ0FBQzRCLEtBQUssRUFBRSxFQUM5RTVCLEtBQUssQ0FDTDtnQkFFRCxJQUFJLENBQUN3QixHQUFHLENBQUNmLE1BQU0sRUFBRTtrQkFDaEIsTUFBTSxJQUFJZ0IsS0FBSyxDQUFDLCtCQUErQixDQUFDOztnQkFFakQsT0FBT0QsR0FBRztlQUNWLENBQUMsT0FBT0osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNWLEtBQUssQ0FBQ1MsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1TLElBQUlBLENBQUM3QixLQUFLLEdBQUcsRUFBRTtjQUNwQixJQUFJLENBQUMsQ0FBQVYsR0FBSSxDQUFDVyxNQUFNLENBQUNmLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFM0MsTUFBTW9CLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDeUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFsQyxNQUFPLE9BQU8sRUFBRW1CLEtBQUssQ0FBQztjQUVoRSxJQUFJLENBQUN3QixHQUFHLENBQUNmLE1BQU0sRUFBRTtnQkFDaEIsSUFBSWUsR0FBRyxDQUFDYixLQUFLLENBQUNMLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQzNCLE1BQU0sSUFBSW1CLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7Z0JBRWxDLElBQUlELEdBQUcsQ0FBQ2IsS0FBSyxDQUFDTCxJQUFJLEtBQUssR0FBRyxFQUFFO2tCQUMzQixNQUFNLElBQUltQixLQUFLLENBQUMsaUJBQWlCLENBQUM7O2dCQUVuQyxJQUFJRCxHQUFHLENBQUNiLEtBQUssQ0FBQ0wsSUFBSSxLQUFLLEdBQUcsRUFBRTtrQkFDM0IsTUFBTSxJQUFJbUIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7Z0JBRWhDLE1BQU0sSUFBSUEsS0FBSyxDQUFDLGtCQUFrQixDQUFDOztjQUVwQyxPQUFPRCxHQUFHO1lBQ1g7WUFFQSxNQUFNTSxPQUFPQSxDQUFDOUIsS0FBSyxHQUFHLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUFWLEdBQUksQ0FBQ1csTUFBTSxDQUFDZixRQUFBLENBQUFnQixjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU1HLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDeUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFsQyxNQUFPLElBQUssSUFBSSxDQUFDLENBQUFVLEtBQW9CLENBQUNjLEVBQUUsVUFBVSxFQUFFTCxLQUFLLENBQUM7Y0FDekcsSUFBSSxDQUFDTyxRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDckIsTUFBTSxJQUFJcEIsTUFBQSxDQUFBcUIsV0FBVyxDQUFDSCxRQUFRLENBQUNJLEtBQUssQ0FBQ0MsSUFBSSxFQUFFTCxRQUFRLENBQUNJLEtBQUssQ0FBQ0wsSUFBSSxDQUFDO2dCQUMvRDs7Y0FFRCxPQUFPQyxRQUFRO1lBQ2hCO1lBRUEsTUFBTW9CLE1BQU1BLENBQUMzQixLQUE4QjtjQUMxQyxJQUFJLENBQUMsQ0FBQVYsR0FBSSxDQUFDVyxNQUFNLENBQUNmLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FDM0MsTUFBTW9CLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDcUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUE5QyxNQUFPLElBQUltQixLQUFLLENBQUNLLEVBQUUsRUFBRSxDQUFDO2NBQ2xFLElBQUksQ0FBQ21CLEdBQUcsQ0FBQ2YsTUFBTSxFQUFFO2dCQUNoQixNQUFNLElBQUlwQixNQUFBLENBQUFxQixXQUFXLENBQUNjLEdBQUcsQ0FBQ2IsS0FBSyxDQUFDQyxJQUFJLEVBQUVZLEdBQUcsQ0FBQ2IsS0FBSyxDQUFDTCxJQUFJLENBQUM7O2NBRXRELE9BQU9rQixHQUFHO1lBQ1g7WUFFQSxNQUFNTyxZQUFZQSxDQUFDL0IsS0FBa0M7Y0FDcEQsSUFBSSxDQUFDLENBQUFWLEdBQUksQ0FBQ1csTUFBTSxDQUFDZixRQUFBLENBQUFnQixjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBQzNDLE1BQU1vQixHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQ3FDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBOUMsTUFBTyxJQUFJbUIsS0FBSyxDQUFDSyxFQUFFLFNBQVNMLEtBQUssQ0FBQ2dDLEdBQUcsRUFBRSxDQUFDO2NBQ3BGLElBQUksQ0FBQ1IsR0FBRyxDQUFDZixNQUFNLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSXBCLE1BQUEsQ0FBQXFCLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDYixLQUFLLENBQUNDLElBQUksRUFBRVksR0FBRyxDQUFDYixLQUFLLENBQUNMLElBQUksQ0FBQzs7Y0FFdEQsT0FBT2tCLEdBQUc7WUFDWDtZQUVBLE1BQU1TLE1BQU1BLENBQUNqQyxLQUFrQztjQUM5QyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBVixHQUFJLENBQUNXLE1BQU0sQ0FBQ2YsUUFBQSxDQUFBZ0IsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFDM0MsTUFBTW9CLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBbEMsR0FBSSxDQUFDcUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUE5QyxNQUFPLElBQUltQixLQUFLLENBQUNLLEVBQUUsY0FBY0wsS0FBSyxDQUFDZ0MsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUU3RixJQUFJLENBQUNSLEdBQUcsQ0FBQ2YsTUFBTSxFQUFFO2tCQUNoQixNQUFNLElBQUlnQixLQUFLLENBQUMscUNBQXFDLElBQUksQ0FBQyxDQUFBNUMsTUFBTyxFQUFFLENBQUM7O2dCQUVyRSxPQUFPMkMsR0FBRztlQUNWLENBQUMsT0FBT0osQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNWLEtBQUssQ0FBQ1MsQ0FBQyxDQUFDOztZQUVsQjtZQUVBLE1BQU1jLGFBQWFBLENBQUE7Y0FDbEIsTUFBTTNCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsR0FBSSxDQUFDeUIsSUFBSSxDQUFDLGVBQWdCLElBQUksQ0FBQyxDQUFBeEIsS0FBb0IsQ0FBQ2MsRUFBRSxVQUFVLENBQUM7Y0FDN0YsT0FBT0UsUUFBUSxDQUFDTSxJQUFJO1lBQ3JCOztVQUNBNUIsT0FBQSxDQUFBRCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEtLLE1BQU8wQixXQUFZLFNBQVFlLEtBQUs7WUFDckNVLE9BQU87WUFDUDdCLElBQUk7WUFDSjFCLFlBQVl1RCxPQUFPLEVBQUU3QixJQUFJO2NBQ3hCLEtBQUssQ0FBQzZCLE9BQU8sQ0FBQyxDQUFDLENBQUM7Y0FDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUM7Y0FDM0IsSUFBSSxDQUFDOUIsSUFBSSxHQUFHQSxJQUFJLENBQUMsQ0FBQztZQUNuQjs7VUFDQXJCLE9BQUEsQ0FBQXlCLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRCxJQUFBMkIsS0FBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQWFPO1VBQVUsTUFBTzhELFNBQVUsU0FBUUQsS0FBQSxDQUFBRSxJQUE2QjtZQU90RSxDQUFBQyxTQUFVLEdBQVksS0FBSztZQUUzQixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUFDLE9BQVEsR0FBYSxFQUFFO1lBQ3ZCLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsUUFBUyxHQUFhLEVBQUU7WUFDeEIsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxDQUFBQyxRQUFTLEdBQWEsRUFBRTtZQUN4QixJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLFVBQVcsR0FBd0IsSUFBSUMsR0FBRyxFQUFFO1lBRTVDLENBQUFDLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLElBQUlDLGdCQUFnQkEsQ0FBQTtjQUNuQixPQUFPLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxVQUFVLENBQUM7WUFDN0M7WUFFQSxDQUFBQyxLQUFNLEdBQVksS0FBSztZQUN2QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBeEUsWUFBWUMsTUFBTSxFQUFFO2NBQUV3RSxVQUFVO2NBQUUsR0FBR3hDO1lBQUksQ0FBRTtjQUMxQyxLQUFLLENBQUM7Z0JBQ0xoQyxNQUFNO2dCQUNOLEdBQUdnQyxJQUFJO2dCQUNQOUIsUUFBUSxFQUFFTixhQUFBLENBQUFPLFlBQVk7Z0JBQ3RCcUUsVUFBVSxFQUFFLENBQ1gsYUFBYSxFQUNiLGFBQWEsRUFDYixNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxhQUFhLEVBQ2IsUUFBUSxFQUNSLFdBQVcsRUFDWCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixHQUFHQSxVQUFVO2VBRWQsQ0FBQztjQUVGLElBQUksQ0FBQ3RFLFFBQVEsQ0FBQ2UsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM3QjtZQUVBLE1BQU1DLElBQUlBLENBQUNDLEtBQU07Y0FDaEJBLEtBQUssR0FBRyxPQUFPQSxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEdBQUc7Z0JBQUVLLEVBQUUsRUFBRUw7Y0FBSyxDQUFFLEdBQUdBLEtBQUs7Y0FDdEYsSUFBSSxDQUFDQSxLQUFLLElBQUlzRCxNQUFNLENBQUNDLElBQUksQ0FBQ3ZELEtBQUssQ0FBQyxDQUFDd0QsTUFBTSxLQUFLLENBQUMsRUFBRXhELEtBQUssR0FBRztnQkFBRUssRUFBRSxFQUFFLElBQUksQ0FBQ0E7Y0FBRSxDQUFFO2NBQ3RFLE1BQU1RLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQ2QsSUFBSSxDQUFDQyxLQUFLLENBQUM7Y0FFcEMsSUFBSSxDQUFDLElBQUksQ0FBQ2dELE1BQU0sRUFBRTtjQUNsQixJQUFJLENBQUMsQ0FBQVIsU0FBVSxHQUFHLElBQUk7Y0FFdEI7Y0FDQSxJQUFJLENBQUNRLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLRCxDQUFDLENBQUN0QixJQUFJLENBQUN3QixhQUFhLENBQUNELENBQUMsQ0FBQ3ZCLElBQUksQ0FBQyxDQUFDO2NBRXhELE1BQU07Z0JBQUVZO2NBQU0sQ0FBRSxHQUFHLElBQUk7Y0FDdkIsTUFBTUYsT0FBTyxHQUFHRSxNQUFNLENBQUNhLElBQUksQ0FBQ1gsQ0FBQyxJQUFJQSxDQUFDLENBQUNZLElBQUksS0FBSyxTQUFTLElBQUlaLENBQUMsQ0FBQ2xCLEdBQUcsS0FBSzlDLFFBQUEsQ0FBQWdCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRSxFQUFFLENBQUM7Y0FDMUYsSUFBSSxDQUFDLENBQUF5QyxPQUFRLEdBQUdBLE9BQU87Y0FFdkIsTUFBTWlCLFdBQVcsR0FBR0MsTUFBTSxJQUFHO2dCQUM1QjtnQkFDQSxNQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQ2hDLEdBQUcsSUFBSWdDLE1BQU0sQ0FBQzNELEVBQUU7Z0JBQ3hDLE1BQU02RCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUF0QixVQUFXLENBQUNwQyxHQUFHLENBQUN3RCxNQUFNLENBQUNwQyxLQUFLLENBQUM7Z0JBRXREO2dCQUVBLElBQUksQ0FBQ29DLE1BQU0sQ0FBQ0csT0FBTyxJQUFJSCxNQUFNLENBQUNGLElBQUksSUFBSUksV0FBVyxLQUFLRixNQUFNLENBQUNGLElBQUksRUFBRTtrQkFDbEUsSUFBSSxDQUFDLENBQUFuQixRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3RCLEtBQUssS0FBS29DLE1BQU0sQ0FBQ3BDLEtBQUssQ0FBQztrQkFDckU7O2dCQUdEO2dCQUNBLElBQUksQ0FBQ29DLE1BQU0sQ0FBQ0csT0FBTyxJQUFJRCxXQUFXLEVBQUU7a0JBQ25DLElBQUlBLFdBQVcsS0FBSyxTQUFTLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxDQUFBeEIsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNPLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN0QixLQUFLLEtBQUtvQyxNQUFNLENBQUNwQyxLQUFLLENBQUM7bUJBQ3JFLE1BQU07b0JBQ04sSUFBSSxDQUFDLENBQUFhLE9BQVEsR0FBRyxJQUFJLENBQUMsQ0FBQUEsT0FBUSxDQUFDUSxNQUFNLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDdEIsS0FBSyxLQUFLb0MsTUFBTSxDQUFDcEMsS0FBSyxDQUFDOzs7Z0JBSXJFO2dCQUVBLElBQUksQ0FBQyxDQUFBZSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3RCLEtBQUssS0FBS29DLE1BQU0sQ0FBQ3BDLEtBQUssQ0FBQztnQkFFckUsSUFBSWtCLE9BQU8sS0FBSyxDQUFDa0IsTUFBTSxDQUFDYixVQUFVLElBQUlhLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLEVBQUU7a0JBQ3RELElBQUksQ0FBQyxDQUFBeEIsUUFBUyxDQUFDeUIsSUFBSSxDQUFDSixNQUFNLENBQUM7aUJBQzNCLE1BQU0sSUFBSUEsTUFBTSxDQUFDRixJQUFJLEVBQUU7a0JBQ3ZCRSxNQUFNLENBQUNGLElBQUksS0FBSyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFwQixRQUFTLENBQUMwQixJQUFJLENBQUNKLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBdkIsT0FBUSxDQUFDMkIsSUFBSSxDQUFDSixNQUFNLENBQUM7O2dCQUdyRjtnQkFDQTtnQkFDQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0csT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBdkIsVUFBVyxDQUFDeUIsR0FBRyxDQUFDTCxNQUFNLENBQUNwQyxLQUFLLEVBQUVvQyxNQUFNLENBQUNGLElBQUksQ0FBQztjQUNyRSxDQUFDO2NBRUQsSUFBSSxDQUFDLENBQUFWLEtBQU0sR0FBRyxJQUFJO2NBQ2xCSixNQUFNLENBQUNzQixPQUFPLENBQUNQLFdBQVcsQ0FBQztjQUMzQixPQUFPbEQsSUFBSTtZQUNaO1lBRUEsTUFBTWlCLE9BQU9BLENBQUM5QixLQUFLO2NBQ2xCO2NBQ0EsSUFBSSxDQUFDQSxLQUFLLElBQUksQ0FBQ0EsS0FBSyxDQUFDZ0MsR0FBRyxFQUFFLE1BQU0sSUFBSVAsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO2NBQzdFLE1BQU1sQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN4QixRQUFRLENBQUMrQyxPQUFPLENBQUM5QixLQUFLLENBQUM7Y0FDbkQsSUFBSSxDQUFDTyxRQUFRLENBQUNFLE1BQU0sRUFBRSxDO2NBR3RCLE1BQU07Z0JBQUV1QjtjQUFHLENBQUUsR0FBR2hDLEtBQUs7Y0FDckIsTUFBTUssRUFBRSxHQUFHMkIsR0FBRyxJQUFJaEMsS0FBSyxDQUFDSyxFQUFFO2NBRTFCO2NBQ0EsTUFBTWtFLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQTVCLFFBQVMsQ0FBQzZCLFNBQVMsQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN6QyxHQUFHLEtBQUszQixFQUFFLElBQUlvRSxDQUFDLENBQUNwRSxFQUFFLEtBQUtBLEVBQUUsQ0FBQztjQUUvRSxJQUFJa0UsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDdEIsTUFBTSxDQUFDRyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQS9CLFFBQVMsQ0FBQ2dDLE1BQU0sQ0FBQ0osWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDOURHLGFBQWEsQ0FBQ3ZCLFVBQVUsR0FBRyxJQUFJO2dCQUMvQjtnQkFDQW5ELEtBQUssQ0FBQzhELElBQUksS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFyQixPQUFRLENBQUMyQixJQUFJLENBQUNNLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBaEMsUUFBUyxDQUFDMEIsSUFBSSxDQUFDTSxhQUFhLENBQUM7O2NBR2pHLElBQUksQ0FBQ0UsWUFBWSxFQUFFO1lBQ3BCO1lBRUEsTUFBTTdDLFlBQVlBLENBQUM4QyxJQUFJO2NBQ3RCLE1BQU10RSxRQUFRLEdBQXdCLE1BQU0sSUFBSSxDQUFDeEIsUUFBUSxDQUFDZ0QsWUFBWSxDQUFDOEMsSUFBSSxDQUFDO2NBQzVFLElBQUl0RSxRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDcEIsSUFBSSxDQUFDdUMsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxNQUFNLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDbEIsR0FBRyxLQUFLNkMsSUFBSSxDQUFDN0MsR0FBRyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsQ0FBQVUsUUFBUyxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNPLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNsQixHQUFHLEtBQUs2QyxJQUFJLENBQUM3QyxHQUFHLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxDQUFBUyxPQUFRLEdBQUcsSUFBSSxDQUFDLENBQUFBLE9BQVEsQ0FBQ1EsTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ2xCLEdBQUcsS0FBSzZDLElBQUksQ0FBQzdDLEdBQUcsQ0FBQztnQkFDN0QsSUFBSSxDQUFDNEMsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU0zQyxNQUFNQSxDQUFDakMsS0FBSztjQUNqQixNQUFNTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN4QixRQUFRLENBQUNrRCxNQUFNLENBQUM7Z0JBQUU1QixFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFO2dCQUFFLEdBQUdMO2NBQUssQ0FBRSxDQUFDO2NBQ3RFLElBQUlPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUN1QyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNsQixHQUFHLEtBQUtoQyxLQUFLLENBQUNnQyxHQUFHLENBQUM7Z0JBQzFELElBQUksQ0FBQyxDQUFBVyxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ2xCLEdBQUcsS0FBS2hDLEtBQUssQ0FBQ2dDLEdBQUcsQ0FBQztnQkFDaEUsSUFBSSxDQUFDNEMsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1yRCxNQUFNQSxDQUFDdkIsS0FBSztjQUNqQixNQUFNTyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN4QixRQUFRLENBQUN3QyxNQUFNLENBQUN2QixLQUFLLENBQUM7Y0FDbEQsTUFBTThFLE1BQU0sR0FBRztnQkFDZCxHQUFHOUUsS0FBSztnQkFDUm1FLE9BQU8sRUFBRTtlQUNUO2NBQ0Q7Y0FDQSxJQUFJLENBQUNuQixNQUFNLENBQUNvQixJQUFJLENBQUNVLE1BQU0sQ0FBQztjQUN4QixJQUFJLENBQUMsQ0FBQW5DLFFBQVMsQ0FBQ3lCLElBQUksQ0FBQ1UsTUFBTSxDQUFDO2NBQzNCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixPQUFPeEUsUUFBUTtZQUNoQjtZQUVBLE1BQU1tQixnQkFBZ0JBLENBQUMxQixLQUFLO2NBQzNCLE1BQU1PLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQzJDLGdCQUFnQixDQUFDMUIsS0FBSyxDQUFDO2NBQzVELElBQUlPLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUN1QyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN0QixLQUFLLEtBQUs1QixLQUFLLENBQUM0QixLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBZSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3RCLEtBQUssS0FBSzVCLEtBQUssQ0FBQzRCLEtBQUssQ0FBQztnQkFDcEUsSUFBSSxDQUFDZ0QsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1qRCxNQUFNQSxDQUFBO2NBQ1gsTUFBTXBCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQzRDLE1BQU0sQ0FBQztnQkFBRXRCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRSxDQUFDO2NBQzVELElBQUlFLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUNtRSxZQUFZLEVBQUU7O2NBRXBCLE9BQU9yRSxRQUFRO1lBQ2hCO1lBRUEsTUFBTXNCLElBQUlBLENBQUM7Y0FBRXZCO1lBQUksQ0FBRTtjQUNsQixNQUFNTyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM5QixRQUFRLENBQUM4QyxJQUFJLENBQUM7Z0JBQUV2QjtjQUFJLENBQUUsQ0FBQztjQUMvQyxJQUFJLENBQUMrRCxHQUFHLENBQUM7Z0JBQUUvRDtjQUFJLENBQUUsQ0FBQztjQUNsQixPQUFPTyxJQUFJO1lBQ1o7WUFFQSxNQUFNcUIsYUFBYUEsQ0FBQTtjQUNsQixNQUFNckIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDOUIsUUFBUSxDQUFDbUQsYUFBYSxFQUFFO2NBRWhELElBQUlyQixJQUFJLENBQUNKLE1BQU0sQ0FBQ3VFLFdBQVcsRUFBRSxLQUFLLFlBQVksRUFBRTtnQkFDL0MsTUFBTSxJQUFJLENBQUNqRixJQUFJLENBQUM7a0JBQUVNLEVBQUUsRUFBRSxJQUFJLENBQUNBO2dCQUFFLENBQUUsQ0FBQztlQUNoQyxNQUFNO2dCQUNOLE1BQU0sSUFBSSxDQUFDZ0UsR0FBRyxDQUFDO2tCQUFFWSxNQUFNLEVBQUVwRSxJQUFJLENBQUNKO2dCQUFNLENBQUUsQ0FBQzs7Y0FFeEMsSUFBSSxDQUFDNEQsR0FBRyxDQUFDeEQsSUFBSSxDQUFDO2NBQ2QsT0FBT0EsSUFBSTtZQUNaOztVQUNBNUIsT0FBQSxDQUFBcUQsU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119