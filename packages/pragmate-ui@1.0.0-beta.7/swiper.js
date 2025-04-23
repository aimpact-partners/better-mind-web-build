System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "swiper@10.3.1", "swiper@10.3.1/modules", "@beyond-js/reactive@2.0.4/model", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_2 = _pragmateUi100Beta7Icons;
    }, function (_swiper) {
      dependency_3 = _swiper;
    }, function (_swiper1031Modules) {
      dependency_4 = _swiper1031Modules;
    }, function (_beyondJsReactive204Model) {
      dependency_5 = _beyondJsReactive204Model;
    }, function (_beyondJsKernel0112Styles) {
      dependency_6 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/reactive", "2.0.1"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/swiper"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['swiper', dependency_3], ['swiper/modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/swiper');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./components/footer
      ***********************************/
      ims.set('./components/footer', {
        hash: 4152585320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperFooter = SwiperFooter;
          var _react = require("react");
          function SwiperFooter(props) {
            const {
              footer,
              controller,
              refs
            } = props;
            if (!footer) return null;
            return _react.default.createElement(_react.default.Fragment, null, !controller?.swiper.isEnd && _react.default.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), _react.default.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/navigation
      ***************************************/

      ims.set('./components/navigation', {
        hash: 1445369557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function SwiperNavigation() {
            const {
              controller,
              navigation,
              refs: {
                prev,
                next
              }
            } = (0, _context.useSwiperContext)();
            if (!navigation) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              ref: prev,
              icon: 'left',
              variant: 'primary',
              className: 'swiper__navigation-btn swiper-button-prev',
              onClick: controller?.prevSlide
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'right',
              ref: next,
              variant: 'primary',
              onClick: controller?.nextSlide,
              className: 'swiper__navigation-btn  swiper-button-next'
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/pagination
      ***************************************/

      ims.set('./components/pagination', {
        hash: 1487697459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pagination = Pagination;
          var _react = require("react");
          var _context = require("../context");
          function Pagination() {
            const {
              pagination,
              refs
            } = (0, _context.useSwiperContext)();
            if (!pagination) return null;
            return _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 522084440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var _react = require("react");
          const SwiperContext = exports.SwiperContext = _react.default.createContext({});
          const useSwiperContext = () => _react.default.useContext(SwiperContext);
          exports.useSwiperContext = useSwiperContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4094575603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperSlider = SwiperSlider;
          var _react = require("react");
          var _footer = require("./components/footer");
          var _navigation = require("./components/navigation");
          var _slide = require("./slide");
          var _useSwiper = require("./use-swiper");
          var _context = require("./context");
          var _pagination = require("./components/pagination");
          /*bundle*/
          function SwiperSlider(props) {
            const {
              pagination,
              footer,
              navigation,
              children
            } = props;
            const {
              refs,
              state
            } = (0, _useSwiper.useSwiperSlider)(props);
            const {
              controller
            } = state;
            const contextValue = {
              footer,
              pagination,
              controller,
              navigation,
              refs
            };
            const cls = `swiper-container swiper ${props.className ? `${props.className} pui-swiper-slider` : 'pui-swiper-slider'};`;
            return _react.default.createElement(_context.SwiperContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              ref: refs.container,
              className: cls
            }, _react.default.createElement(_slide.SlideItems, {
              items: children
            }), _react.default.createElement(_pagination.Pagination, null), _react.default.createElement(_footer.SwiperFooter, null), _react.default.createElement(_navigation.SwiperNavigation, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./interfaces/options
      ************************************/

      ims.set('./interfaces/options', {
        hash: 1670442219,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          class Swiper {
            constructor(container, options) {
              // Swiper initialization code
            }
            // Swiper methods
            slideNext(speed, runCallbacks) {}
            slidePrev(speed, runCallbacks) {}
            slideTo(index, speed, runCallbacks) {}
            update() {}
            destroy(deleteInstance, cleanStyles) {}
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./interfaces/swiper-props
      *****************************************/

      ims.set('./interfaces/swiper-props', {
        hash: 3138111793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/index
      *****************************/

      ims.set('./slide/index', {
        hash: 721733334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var _react = require("react");
          var _slide = require("./slide");
          function SlideItems({
            items
          }) {
            const slides = items.map((slide, index) => _react.default.createElement(_slide.Slide, {
              key: index
            }, slide));
            return _react.default.createElement("div", {
              className: "swiper-wrapper"
            }, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 2855517027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var _react = require("react");
          function Slide({
            children
          }) {
            return _react.default.createElement("div", {
              className: "swiper-slide"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./state/controller
      **********************************/

      ims.set('./state/controller', {
        hash: 2664852209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
          var _modules = require("swiper/modules");
          var _model = require("@beyond-js/reactive/model");
          const SwiperCasted = Swiper.Swiper;
          class Controller extends _model.ReactiveModel {
            #swiper;
            get swiper() {
              return this.#swiper;
            }
            #onEnd;
            #props;
            setSwiper = (element, props, ref) => {
              this.#props = props;
              let specs = {
                // slidesPerView: props.slidesPerView ?? 3,
                spaceBetween: props.spaceBetween ?? 10,
                modules: [_modules.Navigation, _modules.Pagination],
                ...props
              };
              Object.keys(specs).forEach(key => {
                if (['children'].includes(key)) delete specs[key];
              });
              if (!Swiper) {
                console.warn('Swiper keeps without been loaded');
                return;
              }
              if (props.pagination || props.footer) {
                specs.pagination = {
                  el: ref.pagination.current,
                  clickable: true,
                  type: props.typePagination ?? 'bullets',
                  dynamicBullets: props.dynamicBullets ?? false
                };
              }
              if (props.navigation) {
                specs.navigation = {
                  nextEl: ref.next.current,
                  prevEl: ref.prev.current
                };
              }
              this.#swiper = new SwiperCasted(element, specs);
              if (props.activeSlide) this.#swiper.slideTo(parseInt(props.activeSlide));
              const nextSlide = () => {
                if (this.#swiper) this.#swiper.slideNext();
              };
              const prevSlide = () => {
                if (this.#swiper) this.#swiper.slidePrev();
              };
              const slideTo = index => {
                if (this.#swiper) this.#swiper.slideTo(parseInt(index));
              };
              if (props.nextSlide && typeof props.nextSlide === 'function') props.nextSlide(nextSlide);
              if (props.prevSlide && typeof props.prevSlide === 'function') props.prevSlide(prevSlide);
              if (props.slideTo && typeof props.slideTo === 'function') props.slideTo(slideTo);
              this.#swiper.on('slideChange', () => {
                if (this.#swiper?.isEnd) {
                  this.#onEnd = true;
                  this.triggerEvent();
                } else {
                  this.#onEnd = false;
                  this.triggerEvent();
                }
              });
            };
            nextSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.onNext) this.#props.onNext();else this.#swiper?.slideNext(500, false);
            };
            prevSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slidePrev(500, false);
                return;
              }
              if (this.#props.onPrev) this.#props.onPrev();else this.#swiper?.slidePrev(500, false);
            };
            next = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              this.#props.functionNext();
            };
          }
          exports.Controller = Controller;
        }
      });

      /*********************************
      INTERNAL MODULE: ./state/interface
      *********************************/

      ims.set('./state/interface', {
        hash: 3704574833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./use-swiper
      ****************************/

      ims.set('./use-swiper', {
        hash: 2195260495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var _react = require("react");
          var _controller = require("./state/controller");
          const useSwiperSlider = props => {
            /* const { props } = useSwiperContext(); */
            const refs = {
              next: _react.default.useRef(),
              container: _react.default.useRef(),
              pagination: _react.default.useRef(),
              prev: _react.default.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              container,
              prev
            } = refs;
            const [state, setState] = _react.default.useState({});
            _react.default.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.on('change', onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.off('change', onChange);
            }, []);
            _react.default.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            return {
              refs,
              state,
              prev,
              container
            };
          };
          exports.useSwiperSlider = useSwiperSlider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SwiperSlider",
        "name": "SwiperSlider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SwiperSlider') && _export("SwiperSlider", SwiperSlider = require ? require('./index').SwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3dpcGVyRm9vdGVyIiwicHJvcHMiLCJmb290ZXIiLCJjb250cm9sbGVyIiwicmVmcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJzd2lwZXIiLCJpc0VuZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmdW5jdGlvbk5leHQiLCJyZWYiLCJwYWdpbmF0aW9uIiwibmV4dCIsIl9pY29ucyIsIl9jb250ZXh0IiwiU3dpcGVyTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwcmV2IiwidXNlU3dpcGVyQ29udGV4dCIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsIlBhZ2luYXRpb24iLCJTd2lwZXJDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvb3RlciIsIl9uYXZpZ2F0aW9uIiwiX3NsaWRlIiwiX3VzZVN3aXBlciIsIl9wYWdpbmF0aW9uIiwiU3dpcGVyU2xpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZVN3aXBlclNsaWRlciIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb250YWluZXIiLCJTbGlkZUl0ZW1zIiwiaXRlbXMiLCJTd2lwZXIiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJzbGlkZU5leHQiLCJzcGVlZCIsInJ1bkNhbGxiYWNrcyIsInNsaWRlUHJldiIsInNsaWRlVG8iLCJpbmRleCIsInVwZGF0ZSIsImRlc3Ryb3kiLCJkZWxldGVJbnN0YW5jZSIsImNsZWFuU3R5bGVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzbGlkZXMiLCJtYXAiLCJzbGlkZSIsIlNsaWRlIiwia2V5IiwiX21vZHVsZXMiLCJfbW9kZWwiLCJTd2lwZXJDYXN0ZWQiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsIm9uRW5kIiwic2V0U3dpcGVyIiwiZWxlbWVudCIsInNwZWNzIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsIk5hdmlnYXRpb24iLCJrZXlzIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwiY29uc29sZSIsIndhcm4iLCJlbCIsImN1cnJlbnQiLCJjbGlja2FibGUiLCJ0eXBlIiwidHlwZVBhZ2luYXRpb24iLCJkeW5hbWljQnVsbGV0cyIsIm5leHRFbCIsInByZXZFbCIsImFjdGl2ZVNsaWRlIiwicGFyc2VJbnQiLCJvbiIsInRyaWdnZXJFdmVudCIsIm9uTmV4dCIsIm9uUHJldiIsIl9jb250cm9sbGVyIiwidXNlUmVmIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwicmVhZHkiLCJsYXN0SW5kZXgiLCJkZXN0cm95ZWQiLCJvZmYiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCIvdHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvaW50ZXJmYWNlcy9vcHRpb25zLnRzIiwiL3N3aXBlci1wcm9wcy50cyIsIi90cy9zbGlkZS9pbmRleC50c3giLCIvdHMvc2xpZGUvc2xpZGUudHN4IiwiL3RzL3N0YXRlL2NvbnRyb2xsZXIudHMiLCIvaW50ZXJmYWNlLnRzIiwiL3RzL3VzZS1zd2lwZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ00sU0FBVUMsWUFBWUEsQ0FBQ0MsS0FBSztZQUNqQyxNQUFNO2NBQUNDLE1BQU07Y0FBRUMsVUFBVTtjQUFFQztZQUFJLENBQUMsR0FBR0gsS0FBSztZQUN4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