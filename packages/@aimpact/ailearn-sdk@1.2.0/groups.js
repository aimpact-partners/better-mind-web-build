System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/entities/collection", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.5.4/session", "@beyond-js/http-suite@0.1.0/api", "@aimpact/ailearn-sdk@1.2.0/config", "@aimpact/ailearn-sdk@1.2.0/startup", "@beyond-js/reactive@2.0.5/entities/item"], function (_export, _context) {
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
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_1 = _beyondJsReactive205EntitiesCollection;
    }, function (_beyondJsReactive205Model) {
      dependency_2 = _beyondJsReactive205Model;
    }, function (_aimpactChatSdk154Session) {
      dependency_3 = _aimpactChatSdk154Session;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_4 = _beyondJsHttpSuite010Api;
    }, function (_aimpactAilearnSdk120Config) {
      dependency_5 = _aimpactAilearnSdk120Config;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_6 = _aimpactAilearnSdk120Startup;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_7 = _beyondJsReactive205EntitiesItem;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/media-manager", "1.0.0"], ["@beyond-js/http-suite", "0.1.0"], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/chat-app", null], ["@beyond-js/reactive", "2.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@types/node", "22.13.16"], ["dexie", "4.0.11"], ["firebase", "10.14.1"], ["pragmate-ui", "0.0.6"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["zod", "3.24.2"], ["jest", "29.7.0"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/better-mind", "0.0.1"]]);
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
        hash: 3243413377,
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const id = specs.id || specs.code;
              const response = await this.#api.get(`/${this.#entity}/${id}`);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
              }
              return response.data;
            }
            async publish(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
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
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/${this.#entity}/${this.#model.id}/approve`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async delete(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async removeMember(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}/user/${specs.uid}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async reject(specs) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2FwaSIsIl9lcnJvciIsIl9zdGFydHVwIiwiYXBpIiwibW9kZWwiLCJBcGkiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInNldE1vZGVsIiwibG9hZCIsInNwZWNzIiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJiZWFyZXIiLCJpZCIsImNvZGUiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwiZXJyb3IiLCJ0ZXh0IiwiZGF0YSIsInB1Ymxpc2giLCJwb3N0IiwibGlzdCIsImVuZHBvaW50IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJlIiwiY29uc29sZSIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiX2l0ZW0iLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsInBlcnNvbklkIiwiY3VycmVudFJvbGUiLCJpbnZpdGVkIiwicHVzaCIsInNldCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3MiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9kYXRhLXByb3ZpZGVyLnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUFPRSxNQUFPLFNBQVFILFdBQUEsQ0FBQUksVUFBbUM7WUFDekVDLFlBQVlDLE1BQU0sRUFBRUMsSUFBSTtjQUN2QixLQUFLLENBQUM7Z0JBQ0xELE1BQU07Z0JBQ05DLElBQUk7Z0JBQ0pDLFFBQVEsRUFBRU4sYUFBQSxDQUFBTztlQUNWLENBQUM7WUFDSDs7VUFDQUMsT0FBQSxDQUFBUCxNQUFBLEdBQUFBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVEsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsSUFBQSxHQUFBWCxPQUFBO1VBSUEsSUFBQVksTUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsUUFBQSxHQUFBYixPQUFBO1VBT08sWUFMUDs7OztVQUtrQixNQUFPUSxZQUFZO1lBQ3BDLENBQUFNLEdBQUk7WUFDSixDQUFBQyxLQUFNO1lBRU4sQ0FBQVYsTUFBTztZQUVQRCxZQUFZVyxLQUFLO2NBQ2hCLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUgsSUFBQSxDQUFBSyxHQUFHLENBQUNILFFBQUEsQ0FBQUksU0FBUyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMzQyxJQUFJLENB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