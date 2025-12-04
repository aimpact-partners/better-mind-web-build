System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@radix-ui/primitive","1.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@radix-ui/primitive.1.1.3.js
var primitive_1_1_3_exports = {};
__export(primitive_1_1_3_exports, {
  canUseDOM: () => canUseDOM,
  composeEventHandlers: () => composeEventHandlers,
  getActiveElement: () => getActiveElement,
  getOwnerDocument: () => getOwnerDocument,
  getOwnerWindow: () => getOwnerWindow,
  isFrame: () => isFrame
});
module.exports = __toCommonJS(primitive_1_1_3_exports);

// node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, {
  checkForDefaultPrevented = true
} = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
function getOwnerWindow(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access window outside of the DOM");
  }
  return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
  if (!canUseDOM) {
    throw new Error("Cannot access document outside of the DOM");
  }
  return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
  const {
    activeElement
  } = getOwnerDocument(node);
  if (!activeElement?.nodeName) {
    return null;
  }
  if (isFrame(activeElement) && activeElement.contentDocument) {
    return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  }
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getOwnerDocument(activeElement).getElementById(id);
      if (element) {
        return element;
      }
    }
  }
  return activeElement;
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcHJpbWl0aXZlLjEuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9wcmltaXRpdmUvc3JjL3ByaW1pdGl2ZS50c3giXSwibmFtZXMiOlsicHJpbWl0aXZlXzFfMV8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNhblVzZURPTSIsImNvbXBvc2VFdmVudEhhbmRsZXJzIiwiZ2V0QWN0aXZlRWxlbWVudCIsImdldE93bmVyRG9jdW1lbnQiLCJnZXRPd25lcldpbmRvdyIsImlzRnJhbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ2luYWxFdmVudEhhbmRsZXIiLCJvdXJFdmVudEhhbmRsZXIiLCJjaGVja0ZvckRlZmF1bHRQcmV2ZW50ZWQiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsImVsZW1lbnQiLCJFcnJvciIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsIm5vZGUiLCJhY3RpdmVEZXNjZW5kYW50IiwiYWN0aXZlRWxlbWVudCIsIm5vZGVOYW1lIiwiY29udGVudERvY3VtZW50IiwiYm9keSIsImlkIiwiZ2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFWLHVCQUFBOzs7QUNHTyxJQUFNRSxTQUFBLEdBQVksQ0FBQyxFQUN4QixPQUFPUyxNQUFBLEtBQVcsZUFDbEJBLE1BQUEsQ0FBT0MsUUFBQSxJQUNQRCxNQUFBLENBQU9DLFFBQUEsQ0FBU0MsYUFBQTtBQUlYLFNBQVNWLHFCQUNkVyxvQkFBQSxFQUNBQyxlQUFBLEVBQ0E7RUFBRUMsd0JBQUEsR0FBMkI7QUFBSyxJQUFJLENBQUMsR0FDdkM7RUFDQSxPQUFPLFNBQVNDLFlBQVlDLEtBQUEsRUFBVTtJQUNwQ0osb0JBQUEsR0FBdUJJLEtBQUs7SUFFNUIsSUFBSUYsd0JBQUEsS0FBNkIsU0FBUyxDQUFDRSxLQUFBLENBQU1DLGdCQUFBLEVBQWtCO01BQ2pFLE9BQU9KLGVBQUEsR0FBa0JHLEtBQUs7SUFDaEM7RUFDRjtBQUNGO0FBRU8sU0FBU1osZUFBZWMsT0FBQSxFQUFrQztFQUMvRCxJQUFJLENBQUNsQixTQUFBLEVBQVc7SUFDZCxNQUFNLElBQUltQixLQUFBLENBQU0seUNBQXlDO0VBQzNEO0VBRUEsT0FBT0QsT0FBQSxFQUFTRSxhQUFBLEVBQWVDLFdBQUEsSUFBZVosTUFBQTtBQUNoRDtBQUVPLFNBQVNOLGlCQUFpQmUsT0FBQSxFQUFrQztFQUNqRSxJQUFJLENBQUNsQixTQUFBLEVBQVc7SUFDZCxNQUFNLElBQUltQixLQUFBLENBQU0sMkNBQTJDO0VBQzdEO0VBRUEsT0FBT0QsT0FBQSxFQUFTRSxhQUFBLElBQWlCVixRQUFBO0FBQ25DO0FBTU8sU0FBU1IsaUJBQ2RvQixJQUFBLEVBQ0FDLGdCQUFBLEdBQW1CLE9BQ0M7RUFDcEIsTUFBTTtJQUFFQztFQUFjLElBQUlyQixnQkFBQSxDQUFpQm1CLElBQUk7RUFDL0MsSUFBSSxDQUFDRSxhQUFBLEVBQWVDLFFBQUEsRUFBVTtJQUc1QixPQUFPO0VBQ1Q7RUFFQSxJQUFJcEIsT0FBQSxDQUFRbUIsYUFBYSxLQUFLQSxhQUFBLENBQWNFLGVBQUEsRUFBaUI7SUFDM0QsT0FBT3hCLGdCQUFBLENBQWlCc0IsYUFBQSxDQUFjRSxlQUFBLENBQWdCQyxJQUFBLEVBQU1KLGdCQUFnQjtFQUM5RTtFQUVBLElBQUlBLGdCQUFBLEVBQWtCO0lBQ3BCLE1BQU1LLEVBQUEsR0FBS0osYUFBQSxDQUFjSyxZQUFBLENBQWEsdUJBQXVCO0lBQzdELElBQUlELEVBQUEsRUFBSTtNQUNOLE1BQU1WLE9BQUEsR0FBVWYsZ0JBQUEsQ0FBaUJxQixhQUFhLEVBQUVNLGNBQUEsQ0FBZUYsRUFBRTtNQUNqRSxJQUFJVixPQUFBLEVBQVM7UUFDWCxPQUFPQSxPQUFBO01BQ1Q7SUFDRjtFQUNGO0VBRUEsT0FBT00sYUFBQTtBQUNUO0FBRU8sU0FBU25CLFFBQVFhLE9BQUEsRUFBZ0Q7RUFDdEUsT0FBT0EsT0FBQSxDQUFRYSxPQUFBLEtBQVk7QUFDN0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9