System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["aria-hidden","1.2.6"]]);
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

// .beyond/uimport/temp/aria-hidden.1.2.6.js
var aria_hidden_1_2_6_exports = {};
__export(aria_hidden_1_2_6_exports, {
  hideOthers: () => hideOthers,
  inertOthers: () => inertOthers,
  supportsInert: () => supportsInert,
  suppressOthers: () => suppressOthers
});
module.exports = __toCommonJS(aria_hidden_1_2_6_exports);

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function (originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */new WeakMap();
var uncontrolledNodes = /* @__PURE__ */new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function (node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function (parent, targets) {
  return targets.map(function (target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function (x) {
    return Boolean(x);
  });
};
var applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */new Set();
  var elementsToStop = new Set(targets);
  var keep = function (el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function (parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function (node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function () {
    hiddenNodes.forEach(function (node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */new WeakMap();
      counterMap = /* @__PURE__ */new WeakMap();
      uncontrolledNodes = /* @__PURE__ */new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function (originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function () {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};
var inertOthers = function (originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-inert-ed";
  }
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function () {
      return null;
    };
  }
  return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
};
var supportsInert = function () {
  return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
};
var suppressOthers = function (originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-suppressed";
  }
  return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2FyaWEtaGlkZGVuLjEuMi42LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2FyaWEtaGlkZGVuL2Rpc3QvZXMyMDE1L2luZGV4LmpzIl0sIm5hbWVzIjpbImFyaWFfaGlkZGVuXzFfMl82X2V4cG9ydHMiLCJfX2V4cG9ydCIsImhpZGVPdGhlcnMiLCJpbmVydE90aGVycyIsInN1cHBvcnRzSW5lcnQiLCJzdXBwcmVzc090aGVycyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJnZXREZWZhdWx0UGFyZW50Iiwib3JpZ2luYWxUYXJnZXQiLCJkb2N1bWVudCIsInNhbXBsZVRhcmdldCIsIkFycmF5IiwiaXNBcnJheSIsIm93bmVyRG9jdW1lbnQiLCJib2R5IiwiY291bnRlck1hcCIsIldlYWtNYXAiLCJ1bmNvbnRyb2xsZWROb2RlcyIsIm1hcmtlck1hcCIsImxvY2tDb3VudCIsInVud3JhcEhvc3QiLCJub2RlIiwiaG9zdCIsInBhcmVudE5vZGUiLCJjb3JyZWN0VGFyZ2V0cyIsInBhcmVudCIsInRhcmdldHMiLCJtYXAiLCJ0YXJnZXQiLCJjb250YWlucyIsImNvcnJlY3RlZFRhcmdldCIsImNvbnNvbGUiLCJlcnJvciIsImZpbHRlciIsIngiLCJCb29sZWFuIiwiYXBwbHlBdHRyaWJ1dGVUb090aGVycyIsIm1hcmtlck5hbWUiLCJjb250cm9sQXR0cmlidXRlIiwibWFya2VyQ291bnRlciIsImhpZGRlbk5vZGVzIiwiZWxlbWVudHNUb0tlZXAiLCJTZXQiLCJlbGVtZW50c1RvU3RvcCIsImtlZXAiLCJlbCIsImhhcyIsImFkZCIsImZvckVhY2giLCJkZWVwIiwicHJvdG90eXBlIiwiY2FsbCIsImNoaWxkcmVuIiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsImFscmVhZHlIaWRkZW4iLCJjb3VudGVyVmFsdWUiLCJnZXQiLCJtYXJrZXJWYWx1ZSIsInNldCIsInB1c2giLCJzZXRBdHRyaWJ1dGUiLCJlIiwiY2xlYXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkZWxldGUiLCJmcm9tIiwiYWN0aXZlUGFyZW50Tm9kZSIsImFwcGx5IiwicXVlcnlTZWxlY3RvckFsbCIsIkhUTUxFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlCQUFBO0FBQUFDLFFBQUEsQ0FBQUQseUJBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIseUJBQUE7OztBQ0FBLElBQUlTLGdCQUFBLEdBQW1CLFNBQUFBLENBQVVDLGNBQUEsRUFBZ0I7RUFDN0MsSUFBSSxPQUFPQyxRQUFBLEtBQWEsYUFBYTtJQUNqQyxPQUFPO0VBQ1g7RUFDQSxJQUFJQyxZQUFBLEdBQWVDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRSixjQUFjLElBQUlBLGNBQUEsQ0FBZSxDQUFDLElBQUlBLGNBQUE7RUFDdkUsT0FBT0UsWUFBQSxDQUFhRyxhQUFBLENBQWNDLElBQUE7QUFDdEM7QUFDQSxJQUFJQyxVQUFBLEdBQWEsbUJBQUlDLE9BQUEsQ0FBUTtBQUM3QixJQUFJQyxpQkFBQSxHQUFvQixtQkFBSUQsT0FBQSxDQUFRO0FBQ3BDLElBQUlFLFNBQUEsR0FBWSxDQUFDO0FBQ2pCLElBQUlDLFNBQUEsR0FBWTtBQUNoQixJQUFJQyxVQUFBLEdBQWEsU0FBQUEsQ0FBVUMsSUFBQSxFQUFNO0VBQzdCLE9BQU9BLElBQUEsS0FBU0EsSUFBQSxDQUFLQyxJQUFBLElBQVFGLFVBQUEsQ0FBV0MsSUFBQSxDQUFLRSxVQUFVO0FBQzNEO0FBQ0EsSUFBSUMsY0FBQSxHQUFpQixTQUFBQSxDQUFVQyxNQUFB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QSxFQUFrQjtJQUNuQixPQUFPLFlBQVk7TUFBRSxPQUFPO0lBQU07RUFDdEM7RUFDQSxPQUFPL0Isc0JBQUEsQ0FBdUI1QixjQUFBLEVBQWdCMkQsZ0JBQUEsRUFBa0I5QixVQUFBLEVBQVksT0FBTztBQUN2RjtBQUlPLElBQUluQyxhQUFBLEdBQWdCLFNBQUFBLENBQUEsRUFBWTtFQUNuQyxPQUFPLE9BQU9vRSxXQUFBLEtBQWdCLGVBQWVBLFdBQUEsQ0FBWXBCLFNBQUEsQ0FBVXFCLGNBQUEsQ0FBZSxPQUFPO0FBQzdGO0FBUU8sSUFBSXBFLGNBQUEsR0FBaUIsU0FBQUEsQ0FBVUssY0FBQSxFQUFnQmUsVUFBQSxFQUFZYyxVQUFBLEVBQVk7RUFDMUUsSUFBSUEsVUFBQSxLQUFlLFFBQVE7SUFBRUEsVUFBQSxHQUFhO0VBQW1CO0VBQzdELFFBQVFuQyxhQUFBLENBQWMsSUFBSUQsV0FBQSxHQUFjRCxVQUFBLEVBQVlRLGNBQUEsRUFBZ0JlLFVBQUEsRUFBWWMsVUFBVTtBQUM5RiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvYmV0dGVyLW1pbmQvb3V0In0=