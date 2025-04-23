System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/permissions"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2277821615,
        creator: function (require, exports) {
          "use strict";

          //your code here
          // Initialize media stream
          let mediaStream = null;
          const initMedia = async () => {
            try {
              mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
              });
              // Handle media stream
              // e.g., attach the stream to an HTMLVideoElement or use it in WebRTC
            } catch (error) {
              console.error('Media stream initialization failed:', error);
            }
          };
          // Listen for PermissionStatus changes
          const monitorPermission = async permissionName => {
            const permissionStatus = await navigator.permissions.query({
              name: permissionName
            });
            // Initial status
            console.log(`${permissionName} permission is ${permissionStatus.state}`);
            // Listen for changes
            permissionStatus.onchange = () => {
              console.log(`${permissionName} permission changed to ${permissionStatus.state}`);
              if (permissionStatus.state === 'granted') {
                // Re-initialize media if required
                initMedia();
              }
              // Handle other states: 'denied', 'prompt'
            };
          };
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtZWRpYVN0cmVhbSIsImluaXRNZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJlcnJvciIsImNvbnNvbGUiLCJtb25pdG9yUGVybWlzc2lvbiIsInBlcm1pc3Npb25OYW1lIiwicGVybWlzc2lvblN0YXR1cyIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJuYW1lIiwibG9nIiwic3RhdGUiLCJvbmNoYW5nZSJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBLElBQUlBLFdBQVcsR0FBdUIsSUFBSTtVQUUxQyxNQUFNQyxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO1lBQzVCLElBQUk7Y0FDSEQsV0FBVyxHQUFHLE1BQU1FLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxZQUFZLENBQUM7Z0JBQUNDLEtBQUssRUFBRSxJQUFJO2dCQUFFQyxLQUFLLEVBQUU7Y0FBSSxDQUFDLENBQUM7Y0FFbkY7Y0FDQTthQUNBLENBQUMsT0FBT0MsS0FBSyxFQUFFO2NBQ2ZDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHFDQUFxQyxFQUFFQSxLQUFLLENBQUM7O1VBRTdELENBQUM7VUFFRDtVQUNBLE1BQU1FLGlCQUFpQixHQUFHLE1BQU9DLGNBQThCLElBQUk7WUFDbEUsTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTVQsU0FBUyxDQUFDVSxXQUFXLENBQUNDLEtBQUssQ0FBQztjQUFDQyxJQUFJLEVBQUVKO1lBQWMsQ0FBQyxDQUFDO1lBRWxGO1lBQ0FGLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLEdBQUdMLGNBQWMsa0JBQWtCQyxnQkFBZ0IsQ0FBQ0ssS0FBSyxFQUFFLENBQUM7WUFFeEU7WUFDQUwsZ0JBQWdCLENBQUNNLFFBQVEsR0FBRyxNQUFLO2NBQ2hDVCxPQUFPLENBQUNPLEdBQUcsQ0FBQyxHQUFHTCxjQUFjLDBCQUEwQkMsZ0JBQWdCLENBQUNLLEtBQUssRUFBRSxDQUFDO2NBRWhGLElBQUlMLGdCQUFnQixDQUFDSyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN6QztnQkFDQWYsU0FBUyxFQUFFOztjQUVaO1lBQ0QsQ0FBQztVQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=