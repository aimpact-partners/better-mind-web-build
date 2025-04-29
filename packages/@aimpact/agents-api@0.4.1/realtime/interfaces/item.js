System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, ItemContentType, IItemInputTextContent, IItemInputAudioContent, IItemTextContent, IItemAudioContent, IItemContentType, ItemStatusType, ItemType, MessageSenderType, IItemBase, ISystemItem, IUserItem, IAssistantItem, IFunctionCallItem, IFunctionCallOutputItem, IResponseItem, IItem, __beyond_pkg, hmr;
  _export({
    ItemContentType: void 0,
    IItemInputTextContent: void 0,
    IItemInputAudioContent: void 0,
    IItemTextContent: void 0,
    IItemAudioContent: void 0,
    IItemContentType: void 0,
    ItemStatusType: void 0,
    ItemType: void 0,
    MessageSenderType: void 0,
    IItemBase: void 0,
    ISystemItem: void 0,
    IUserItem: void 0,
    IAssistantItem: void 0,
    IFunctionCallItem: void 0,
    IFunctionCallOutputItem: void 0,
    IResponseItem: void 0,
    IItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/interfaces/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./content-type
      ******************************/
      ims.set('./content-type', {
        hash: 2549321810,
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
        hash: 3176005419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./content-type",
        "from": "ItemContentType",
        "name": "ItemContentType"
      }, {
        "im": "./content-type",
        "from": "IItemInputTextContent",
        "name": "IItemInputTextContent"
      }, {
        "im": "./content-type",
        "from": "IItemInputAudioContent",
        "name": "IItemInputAudioContent"
      }, {
        "im": "./content-type",
        "from": "IItemTextContent",
        "name": "IItemTextContent"
      }, {
        "im": "./content-type",
        "from": "IItemAudioContent",
        "name": "IItemAudioContent"
      }, {
        "im": "./content-type",
        "from": "IItemContentType",
        "name": "IItemContentType"
      }, {
        "im": "./index",
        "from": "ItemStatusType",
        "name": "ItemStatusType"
      }, {
        "im": "./index",
        "from": "ItemType",
        "name": "ItemType"
      }, {
        "im": "./index",
        "from": "MessageSenderType",
        "name": "MessageSenderType"
      }, {
        "im": "./index",
        "from": "IItemBase",
        "name": "IItemBase"
      }, {
        "im": "./index",
        "from": "ISystemItem",
        "name": "ISystemItem"
      }, {
        "im": "./index",
        "from": "IUserItem",
        "name": "IUserItem"
      }, {
        "im": "./index",
        "from": "IAssistantItem",
        "name": "IAssistantItem"
      }, {
        "im": "./index",
        "from": "IFunctionCallItem",
        "name": "IFunctionCallItem"
      }, {
        "im": "./index",
        "from": "IFunctionCallOutputItem",
        "name": "IFunctionCallOutputItem"
      }, {
        "im": "./index",
        "from": "IResponseItem",
        "name": "IResponseItem"
      }, {
        "im": "./index",
        "from": "IItem",
        "name": "IItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ItemContentType') && _export("ItemContentType", ItemContentType = require ? require('./content-type').ItemContentType : value);
        (require || prop === 'IItemInputTextContent') && _export("IItemInputTextContent", IItemInputTextContent = require ? require('./content-type').IItemInputTextContent : value);
        (require || prop === 'IItemInputAudioContent') && _export("IItemInputAudioContent", IItemInputAudioContent = require ? require('./content-type').IItemInputAudioContent : value);
        (require || prop === 'IItemTextContent') && _export("IItemTextContent", IItemTextContent = require ? require('./content-type').IItemTextContent : value);
        (require || prop === 'IItemAudioContent') && _export("IItemAudioContent", IItemAudioContent = require ? require('./content-type').IItemAudioContent : value);
        (require || prop === 'IItemContentType') && _export("IItemContentType", IItemContentType = require ? require('./content-type').IItemContentType : value);
        (require || prop === 'ItemStatusType') && _export("ItemStatusType", ItemStatusType = require ? require('./index').ItemStatusType : value);
        (require || prop === 'ItemType') && _export("ItemType", ItemType = require ? require('./index').ItemType : value);
        (require || prop === 'MessageSenderType') && _export("MessageSenderType", MessageSenderType = require ? require('./index').MessageSenderType : value);
        (require || prop === 'IItemBase') && _export("IItemBase", IItemBase = require ? require('./index').IItemBase : value);
        (require || prop === 'ISystemItem') && _export("ISystemItem", ISystemItem = require ? require('./index').ISystemItem : value);
        (require || prop === 'IUserItem') && _export("IUserItem", IUserItem = require ? require('./index').IUserItem : value);
        (require || prop === 'IAssistantItem') && _export("IAssistantItem", IAssistantItem = require ? require('./index').IAssistantItem : value);
        (require || prop === 'IFunctionCallItem') && _export("IFunctionCallItem", IFunctionCallItem = require ? require('./index').IFunctionCallItem : value);
        (require || prop === 'IFunctionCallOutputItem') && _export("IFunctionCallOutputItem", IFunctionCallOutputItem = require ? require('./index').IFunctionCallOutputItem : value);
        (require || prop === 'IResponseItem') && _export("IResponseItem", IResponseItem = require ? require('./index').IResponseItem : value);
        (require || prop === 'IItem') && _export("IItem", IItem = require ? require('./index').IItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9jb250ZW50LXR5cGUudHMiLCIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVQ0pBOztVQUVBSCxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=