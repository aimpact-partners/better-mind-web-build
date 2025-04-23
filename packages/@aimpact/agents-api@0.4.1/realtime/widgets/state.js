System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Observer, State, __beyond_pkg, hmr;
  _export({
    Observer: void 0,
    State: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/widgets/state"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./observer
      **************************/
      ims.set('./observer', {
        hash: 2129659437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Observer = void 0;
          var _react = require("react");
          /*bundle*/
          class Observer {
            #objects;
            #invalidate;
            constructor() {
              const [id, invalidate] = (0, _react.useState)(0);
              this.#invalidate = () => invalidate(id + 1);
            }
            static get instance() {
              const ref = (0, _react.useRef)(null);
              if (ref.current) return ref.current;
              const instance = ref.current = new Observer();
              (0, _react.useEffect)(() => {
                return () => {
                  instance.#clean();
                };
              }, []);
            }
            static set(object, event) {
              this.instance.#set(object, event);
            }
            #set(object, event) {
              // Observer alrady set
              if (this.#objects.get(object)?.get(event)) return;
              const listeners = (() => {
                if (this.#objects.has(object)) return this.#objects.get(object);
                const listeners = new Map();
                this.#objects.set(object, listeners);
                return listeners;
              })();
              const listener = () => this.#invalidate();
              listeners.set(event, listener);
              object.on(event, listener);
            }
            #clean() {
              this.#objects.forEach((listeners, object) => {
                listeners.forEach((listener, event) => {
                  object.off(event, listener);
                });
              });
            }
          }
          exports.Observer = Observer;
        }
      });

      /***********************
      INTERNAL MODULE: ./state
      ***********************/

      ims.set('./state', {
        hash: 2227409122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.State = void 0;
          var _react = require("react");
          /*bundle*/
          class State {
            #values = {};
            get values() {
              return this.#values;
            }
            /**
             * Define a property or an array of properties of the state object
             *
             * @param p1 Can be the name of the property or an object with the values of the properties
             * @param p2 The initial value if the value of p1 is the name of the property to be defined
             */
            define(p1, p2) {
              // Normalize as an array of properties regardless wether a property or a properties object is being defined
              const properties = typeof p1 === 'string' ? [p1, p2] : Object.entries(p1);
              properties.forEach(([name, initial]) => {
                if (this.#values.hasOwnProperty(name)) return;
                let [value, update] = (0, _react.useState)(initial);
                Object.defineProperty(this.#values, name, {
                  get: () => value,
                  set: updated => {
                    update(updated);
                    value = updated;
                  }
                });
              });
            }
          }
          exports.State = State;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./observer",
        "from": "Observer",
        "name": "Observer"
      }, {
        "im": "./state",
        "from": "State",
        "name": "State"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Observer') && _export("Observer", Observer = require ? require('./observer').Observer : value);
        (require || prop === 'State') && _export("State", State = require ? require('./state').State : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiT2JzZXJ2ZXIiLCJvYmplY3RzIiwiaW52YWxpZGF0ZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1c2VTdGF0ZSIsImluc3RhbmNlIiwicmVmIiwidXNlUmVmIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImNsZWFuIiwic2V0Iiwib2JqZWN0IiwiZXZlbnQiLCIjc2V0IiwiZ2V0IiwibGlzdGVuZXJzIiwiaGFzIiwiTWFwIiwibGlzdGVuZXIiLCJvbiIsIiNjbGVhbiIsImZvckVhY2giLCJvZmYiLCJleHBvcnRzIiwiU3RhdGUiLCJ2YWx1ZXMiLCJkZWZpbmUiLCJwMSIsInAyIiwicHJvcGVydGllcyIsIk9iamVjdCIsImVudHJpZXMiLCJuYW1lIiwiaW5pdGlhbCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJ1cGRhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInVwZGF0ZWQiXSwic291cmNlcyI6WyIvb2JzZXJ2ZXIudHMiLCIvc3RhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxRQUFRO1lBQy9CLENBQUFDLE9BQVE7WUFDUixDQUFBQyxVQUFXO1lBRVhDLFlBQUE7Y0FDQyxNQUFNLENBQUNDLEVBQUUsRUFBRUYsVUFBVSxDQUFDLEdBQUcsSUFBQUosTUFBQSxDQUFBTyxRQUFRLEVBQUMsQ0FBQyxDQUFDO2NBQ3BDLElBQUksQ0FBQyxDQUFBSCxVQUFXLEdBQUcsTUFBTUEsVUFBVSxDQUFDRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDO1lBRUEsV0FBV0UsUUFBUUEsQ0FBQTtjQUNsQixNQUFNQyxHQUFHLEdBQUcsSUFBQVQsTUFBQSxDQUFBVSxNQUFNLEVBQVcsSUFBSSxDQUFDO2NBQ2xDLElBQUlELEdBQUcsQ0FBQ0UsT0FBTyxFQUFFLE9BQU9GLEdBQUcsQ0FBQ0UsT0FBTztjQUVuQyxNQUFNSCxRQUFRLEdBQUlDLEdBQUcsQ0FBQ0UsT0FBTyxHQUFHLElBQUlULFFBQVEsRUFBRztjQUMvQyxJQUFBRixNQUFBLENBQUFZLFNBQVMsRUFBQyxNQUFLO2dCQUNkLE9BQU8sTUFBSztrQkFDWEosUUFBUSxDQUFDLENBQUFLLEtBQU0sRUFBRTtnQkFDbEIsQ0FBQztjQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDUDtZQUVBLE9BQU9DLEdBQUdBLENBQUNDLE1BQWMsRUFBRUMsS0FBYTtjQUN2QyxJQUFJLENBQUNSLFFBQVEsQ0FBQyxDQUFBTSxHQUFJLENBQUNDLE1BQU0sRUFBRUMsS0FBSyxDQUFDO1lBQ2xDO1lBRUEsQ0FBQUYsR0FBSUcsQ0FBQ0YsTUFBYyxFQUFFQyxLQUFhO2NBQ2pDO2NBQ0EsSUFBSSxJQUFJLENBQUMsQ0FBQWIsT0FBUSxDQUFDZSxHQUFHLENBQUNILE1BQU0sQ0FBQyxFQUFFRyxHQUFHLENBQUNGLEtBQUssQ0FBQyxFQUFFO2NBRTNDLE1BQU1HLFNBQVMsR0FBRyxDQUFDLE1BQUs7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLENBQUFoQixPQUFRLENBQUNpQixHQUFHLENBQUNMLE1BQU0sQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFaLE9BQVEsQ0FBQ2UsR0FBRyxDQUFDSCxNQUFNLENBQUM7Z0JBRS9ELE1BQU1JLFNBQVMsR0FBRyxJQUFJRSxHQUFHLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxDQUFBbEIsT0FBUSxDQUFDVyxHQUFHLENBQUNDLE1BQU0sRUFBRUksU0FBUyxDQUFDO2dCQUNwQyxPQUFPQSxTQUFTO2NBQ2pCLENBQUMsRUFBQyxDQUFFO2NBRUosTUFBTUcsUUFBUSxHQUFHQSxDQUFBLEtBQU0sSUFBSSxDQUFDLENBQUFsQixVQUFXLEVBQUU7Y0FFekNlLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDRSxLQUFLLEVBQUVNLFFBQVEsQ0FBQztjQUM5QlAsTUFBTSxDQUFDUSxFQUFFLENBQUNQLEtBQUssRUFBRU0sUUFBUSxDQUFDO1lBQzNCO1lBRUEsQ0FBQVQsS0FBTVcsQ0FBQTtjQUNMLElBQUksQ0FBQyxDQUFBckIsT0FBUSxDQUFDc0IsT0FBTyxDQUFDLENBQUNOLFNBQVMsRUFBRUosTUFBTSxLQUFJO2dCQUMzQ0ksU0FBUyxDQUFDTSxPQUFPLENBQUMsQ0FBQ0gsUUFBUSxFQUFFTixLQUFLLEtBQUk7a0JBQ3JDRCxNQUFNLENBQUNXLEdBQUcsQ0FBQ1YsS0FBSyxFQUFFTSxRQUFRLENBQUM7Z0JBQzVCLENBQUMsQ0FBQztjQUNILENBQUMsQ0FBQztZQUNIOztVQUNBSyxPQUFBLENBQUF6QixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeERELElBQUFGLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsTUFBTzJCLEtBQUs7WUFDNUIsQ0FBQUMsTUFBTyxHQUFHLEVBQUU7WUFDWixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBbUIsSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDaEM7WUFFQTs7Ozs7O1lBTUFDLE1BQU1BLENBQUNDLEVBQXVCLEVBQUVDLEVBQVE7Y0FDdkM7Y0FDQSxNQUFNQyxVQUFVLEdBQW9CLE9BQU9GLEVBQUUsS0FBSyxRQUFRLEdBQUcsQ0FBQ0EsRUFBRSxFQUFFQyxFQUFFLENBQUMsR0FBR0UsTUFBTSxDQUFDQyxPQUFPLENBQUNKLEVBQUUsQ0FBQztjQUUxRkUsVUFBVSxDQUFDUixPQUFPLENBQUMsQ0FBQyxDQUFDVyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxLQUFJO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUNTLGNBQWMsQ0FBQ0YsSUFBSSxDQUFDLEVBQUU7Z0JBRXZDLElBQUksQ0FBQ0csS0FBSyxFQUFFQyxNQUFNLENBQUMsR0FBRyxJQUFBeEMsTUFBQSxDQUFBTyxRQUFRLEVBQUM4QixPQUFPLENBQUM7Z0JBRXZDSCxNQUFNLENBQUNPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQVosTUFBTyxFQUFFTyxJQUFJLEVBQUU7a0JBQ3pDbEIsR0FBRyxFQUFFQSxDQUFBLEtBQU1xQixLQUFLO2tCQUNoQnpCLEdBQUcsRUFBRzRCLE9BQVksSUFBSTtvQkFDckJGLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDO29CQUNmSCxLQUFLLEdBQUdHLE9BQU87a0JBQ2hCO2lCQUNBLENBQUM7Y0FDSCxDQUFDLENBQUM7WUFDSDs7VUFDQWYsT0FBQSxDQUFBQyxLQUFBLEdBQUFBLEtBQUEiLCJpZ25vcmVMaXN0IjpbXX0=