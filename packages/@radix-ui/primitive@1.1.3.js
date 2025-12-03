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

// .beyond/uimport/temp/@radix-ui/primitive.1.1.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9wcmltaXRpdmUuMS4xLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3ByaW1pdGl2ZS9zcmMvcHJpbWl0aXZlLnRzeCJdLCJuYW1lcyI6WyJwcmltaXRpdmVfMV8xXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY2FuVXNlRE9NIiwiY29tcG9zZUV2ZW50SGFuZGxlcnMiLCJnZXRBY3RpdmVFbGVtZW50IiwiZ2V0T3duZXJEb2N1bWVudCIsImdldE93bmVyV2luZG93IiwiaXNGcmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnaW5hbEV2ZW50SGFuZGxlciIsIm91ckV2ZW50SGFuZGxlciIsImNoZWNrRm9yRGVmYXVsdFByZXZlbnRlZCIsImhhbmRsZUV2ZW50IiwiZXZlbnQiLCJkZWZhdWx0UHJldmVudGVkIiwiZWxlbWVudCIsIkVycm9yIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwibm9kZSIsImFjdGl2ZURlc2NlbmRhbnQiLCJhY3RpdmVFbGVtZW50Iiwibm9kZU5hbWUiLCJjb250ZW50RG9jdW1lbnQiLCJib2R5IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50QnlJZCIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUJBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVYsdUJBQUE7OztBQ0dPLElBQU1FLFNBQUEsR0FBWSxDQUFDLEVBQ3hCLE9BQU9TLE1BQUEsS0FBVyxlQUNsQkEsTUFBQSxDQUFPQyxRQUFBLElBQ1BELE1BQUEsQ0FBT0MsUUFBQSxDQUFTQyxhQUFBO0FBSVgsU0FBU1YscUJBQ2RXLG9CQUFBLEVBQ0FDLGVBQUEsRUFDQTtFQUFFQyx3QkFBQSxHQUEyQjtBQUFLLElBQUksQ0FBQyxHQUN2QztFQUNBLE9BQU8sU0FBU0MsWUFBWUMsS0FBQSxFQUFVO0lBQ3BDSixvQkFBQSxHQUF1QkksS0FBSztJQUU1QixJQUFJRix3QkFBQSxLQUE2QixTQUFTLENBQUNFLEtBQUEsQ0FBTUMsZ0JBQUEsRUFBa0I7TUFDakUsT0FBT0osZUFBQSxHQUFrQkcsS0FBSztJQUNoQztFQUNGO0FBQ0Y7QUFFTyxTQUFTWixlQUFlYyxPQUFBLEVBQWtDO0VBQy9ELElBQUksQ0FBQ2xCLFNBQUEsRUFBVztJQUNkLE1BQU0sSUFBSW1CLEtBQUEsQ0FBTSx5Q0FBeUM7RUFDM0Q7RUFFQSxPQUFPRCxPQUFBLEVBQVNFLGFBQUEsRUFBZUMsV0FBQSxJQUFlWixNQUFBO0FBQ2hEO0FBRU8sU0FBU04saUJBQWlCZSxPQUFBLEVBQWtDO0VBQ2pFLElBQUksQ0FBQ2xCLFNBQUEsRUFBVztJQUNkLE1BQU0sSUFBSW1CLEtBQUEsQ0FBTSwyQ0FBMkM7RUFDN0Q7RUFFQSxPQUFPRCxPQUFBLEVBQVNFLGFBQUEsSUFBaUJWLFFBQUE7QUFDbkM7QUFNTyxTQUFTUixpQkFDZG9CLElBQUEsRUFDQUMsZ0JBQUEsR0FBbUIsT0FDQztFQUNwQixNQUFNO0lBQUVDO0VBQWMsSUFBSXJCLGdCQUFBLENBQWlCbUIsSUFBSTtFQUMvQyxJQUFJLENBQUNFLGFBQUEsRUFBZUMsUUFBQSxFQUFVO0lBRzVCLE9BQU87RUFDVDtFQUVBLElBQUlwQixPQUFBLENBQVFtQixhQUFhLEtBQUtBLGFBQUEsQ0FBY0UsZUFBQSxFQUFpQjtJQUMzRCxPQUFPeEIsZ0JBQUEsQ0FBaUJzQixhQUFBLENBQWNFLGVBQUEsQ0FBZ0JDLElBQUEsRUFBTUosZ0JBQWdCO0VBQzlFO0VBRUEsSUFBSUEsZ0JBQUEsRUFBa0I7SUFDcEIsTUFBTUssRUFBQSxHQUFLSixhQUFBLENBQWNLLFlBQUEsQ0FBYSx1QkFBdUI7SUFDN0QsSUFBSUQsRUFBQSxFQUFJO01BQ04sTUFBTVYsT0FBQSxHQUFVZixnQkFBQSxDQUFpQnFCLGFBQWEsRUFBRU0sY0FBQSxDQUFlRixFQUFFO01BQ2pFLElBQUlWLE9BQUEsRUFBUztRQUNYLE9BQU9BLE9BQUE7TUFDVDtJQUNGO0VBQ0Y7RUFFQSxPQUFPTSxhQUFBO0FBQ1Q7QUFFTyxTQUFTbkIsUUFBUWEsT0FBQSxFQUFnRDtFQUN0RSxPQUFPQSxPQUFBLENBQVFhLE9BQUEsS0FBWTtBQUM3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=