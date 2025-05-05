System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.4.1/components/icons", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.4.1/main-layout.widget", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/alert", "@aimpact/ailearn-app@0.4.1/components/ui", "@aimpact/ailearn-app@0.4.1/modules/management/refinament.code", "@beyond-js/react-18-widgets@1.1.4/hooks", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AIButton, AIIconButton, CoverImage, __beyond_pkg, hmr;
  _export({
    AIButton: void 0,
    AIIconButton: void 0,
    CoverImage: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_1 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_3 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp041MainLayoutWidget) {
      dependency_5 = _aimpactAilearnApp041MainLayoutWidget;
    }, function (_pragmateUi100Beta7Image) {
      dependency_6 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_7 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_9 = _aimpactAilearnApp041ComponentsUi;
    }, function (_aimpactAilearnApp041ModulesManagementRefinamentCode) {
      dependency_10 = _aimpactAilearnApp041ModulesManagementRefinamentCode;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_11 = _beyondJsReact18Widgets114Hooks;
    }, function (_beyondJsKernel0112Styles) {
      dependency_12 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/better-mind", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/cover-image",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/icons', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/ailearn-app/main-layout.widget', dependency_5], ['pragmate-ui/image', dependency_6], ['pragmate-ui/modal', dependency_7], ['pragmate-ui/alert', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/modules/management/refinament.code', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/styles', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/cover-image.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./actions
      *************************/
      ims.set('./actions', {
        hash: 2679961408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("./context");
          function CoverImageActions({}) {
            const {
              openRefinement
            } = (0, _context.useModuleContext)();
            const toggleModal = () => {
              openRefinement();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("figcaption", {
              className: "actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              variant: "primary",
              className: "circle",
              onClick: toggleModal,
              icon: "edit"
            })));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 86064447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4281481501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*************************
      INTERNAL MODULE: ./display
      *************************/

      ims.set('./display', {
        hash: 3702223538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DisplayPicture = DisplayPicture;
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("./context");
          var _actions = require("./actions");
          function DisplayPicture({
            show,
            onClose
          }) {
            const {
              picture
            } = (0, _context.useModuleContext)();
            if (!show) return false;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "refine-modal refine-modal--visualization",
              onClose: onClose
            }, _react.default.createElement(_image.Image, {
              className: "portrait-view",
              src: picture
            }), _react.default.createElement(_actions.CoverImageActions, null));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 4166111875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            if (!error) return null;
            let message = texts[error] ? texts[error] : texts.default;
            return _react.default.createElement(_alert.Alert, {
              type: "error"
            }, message);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 211440641,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _refinament = require("@aimpact/ailearn-app/modules/management/refinament.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _actions = require("./actions");
          var _context = require("./context");
          var _display = require("./display");
          /*bundle*/ /**
                      * useBinder([store.model], () => setImage(picture), 'image.generated');
                      * @param param0
                      * @returns
                      */
          function CoverImage({
            title,
            description,
            picture,
            entity,
            type,
            suggestions,
            onGenerate
          }) {
            const [image, setImage] = _react.default.useState(picture);
            const [fetching, setFetching] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [showDisplayPicture, setShowDisplayPicture] = _react.default.useState(false);
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const toggleDisplayPicture = event => {
              event?.stopPropagation();
              setShowDisplayPicture(!showDisplayPicture);
            };
            const toggleModal = () => {
              if (showDisplayPicture) setShowDisplayPicture(false);
              setShowRefiningModal(!showModal);
            };
            let owner = null;
            let credits = null;
            let consumeCoins = null;
            if (_mainLayout.LayoutBroker.model) {
              owner = _mainLayout.LayoutBroker.model.owner;
              credits = _mainLayout.LayoutBroker.model.credits;
              consumeCoins = _mainLayout.LayoutBroker.model.consumeCoins;
            }
            const titleLabel = title || texts.title;
            const descriptionLabel = description || texts.subtitle;
            _react.default.useEffect(() => setImage(picture), [picture]);
            const value = {
              picture: image,
              setImage,
              openRefinement: toggleModal,
              title,
              description,
              fetching,
              suggestions,
              type,
              entity,
              setFetching,
              onGenerate,
              texts: texts
            };
            if (!textsReady) return _react.default.createElement("div", {
              className: "cover-image-skeleton"
            });
            const cls = `cover-image__container${picture ? ' has-image' : ''}`;
            const onClick = picture ? toggleDisplayPicture : toggleModal;
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement(_ui.EntityImage, {
              type: type,
              src: picture,
              entity: entity,
              className: "rounded circle"
            }), !picture && _react.default.createElement(_actions.CoverImageActions, null), _react.default.createElement(_display.DisplayPicture, {
              show: showDisplayPicture,
              onClose: toggleDisplayPicture
            })), _mainLayout.LayoutBroker.model && _react.default.createElement(_refinament.RefinementModal, {
              show: showModal,
              required: true,
              owner: owner,
              value: suggestions,
              credits: credits,
              onConsume: consumeCoins,
              globalTexts: _mainLayout.LayoutBroker.globalTexts,
              onClose: toggleModal,
              confirm: !!picture,
              title: titleLabel,
              textarea: texts.textarea,
              onGenerate: ({
                notes
              }) => onGenerate(notes),
              description: descriptionLabel
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1701412056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./index",
        "from": "CoverImage",
        "name": "CoverImage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'CoverImage') && _export("CoverImage", CoverImage = require ? require('./index').CoverImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJDb3ZlckltYWdlQWN0aW9ucyIsIm9wZW5SZWZpbmVtZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInRvZ2dsZU1vZGFsIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImljb24iLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJfbWFpbkxheW91dCIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiTGF5b3V0QnJva2VyIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ltYWdlIiwiX21vZGFsIiwiX2FjdGlvbnMiLCJEaXNwbGF5UGljdHVyZSIsInNob3ciLCJvbkNsb3NlIiwicGljdHVyZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkltYWdlIiwic3JjIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZXJyb3IiLCJtZXNzYWdlIiwiQWxlcnQiLCJ0eXBlIiwiX3VpIiwiX3JlZmluYW1lbnQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZGlzcGxheSIsIkNvdmVySW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZW50aXR5Iiwic3VnZ2VzdGlvbnMiLCJvbkdlbmVyYXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNob3dEaXNwbGF5UGljdHVyZSIsInNldFNob3dEaXNwbGF5UGljdHVyZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwidG9nZ2xlRGlzcGxheVBpY3R1cmUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm93bmVyIiwiY3JlZGl0cyIsImNvbnN1bWVDb2lucyIsIm1vZGVsIiwidGl0bGVMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJzdWJ0aXRsZSIsInVzZUVmZmVjdCIsInZhbHVlIiwiY2xzIiwiUHJvdmlkZXIiLCJFbnRpdHlJbWFnZSIsIlJlZmluZW1lbnRNb2RhbCIsInJlcXVpcmVkIiwib25Db25zdW1lIiwiZ2xvYmFsVGV4dHMiLCJjb25maXJtIiwidGV4dGFyZWEiLCJub3RlcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGlvbnMudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvZGlzcGxheS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFFTSxTQUFVRyxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQUVDO1lBQWMsQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFN0MsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJGLGNBQWMsRUFBRTtZQUNqQixDQUFDO1lBRUQsT0FDQ0gsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQVAsTUFBQSxDQUFBTSxPQUFBLENBQUFFLFFB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