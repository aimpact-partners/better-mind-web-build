System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.4/entities/collection", "@beyond-js/reactive@2.0.4/model", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/reactive@2.0.4/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_5 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }, function (_beyondJsReactive204EntitiesItem) {
      dependency_7 = _beyondJsReactive204EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-sdk@1.2.0/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@aimpact/ailearn-sdk/config', dependency_5], ['@aimpact/ailearn-sdk/startup', dependency_6], ['@beyond-js/reactive/entities/item', dependency_7]]);
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
        hash: 802671764,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          /*bundle */ /**
                       
                        
                       */
          class DataProvider {
            #api;
            #model;
            #entity;
            constructor(model) {
              this.#api = new _api.Api(_startup.sdkConfig.apis.ailearn);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9lcnJvciIsIl9zdGFydHVwIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsImVuZHBvaW50IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsInBlcnNvbklkIiwiY3VycmVudFJvbGUiLCJpbnZpdGVkIiwicHVzaCIsInNldCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3MiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9kYXRhLXByb3ZpZGVyLnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFFBQVEsRUFBRU4sYUFBQSxDQUFBTztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVEsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsSUFBQSxHQUFBWCxPQUFBO1VBSUEsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsUUFBQSxHQUFBYixPQUFBO1VBT08sWUFMUDs7OztVQUtrQixNQUFPUSxZQUFZO1lBQ3BDLENBQUFNLEdBQUk7WUFDSixDQUFBQyxLQUFNO1lBRU4sQ0FBQVYsTUFBTztZQUVQRCxZQUFZVyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNILFFBQUEsQ0FBQUksU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJLENB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