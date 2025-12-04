System.register(["react@18.3.1","@radix-ui/react-compose-refs@1.1.2","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-presence","1.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@radix-ui/react-presence.1.1.5.js
var react_presence_1_1_5_exports = {};
__export(react_presence_1_1_5_exports, {
  Presence: () => Presence,
  Root: () => Root
});
module.exports = __toCommonJS(react_presence_1_1_5_exports);

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React2 = __toESM(require("react@18.3.1"), 0);
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var React = __toESM(require("react@18.3.1"), 0);
function useStateMachine(initialState, machine) {
  return React.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = props => {
  const {
    present,
    children
  } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : React2.Children.only(children);
  const ref = (0, import_react_compose_refs.useComposedRefs)(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React2.cloneElement(child, {
    ref
  }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React2.useState();
  const stylesRef = React2.useRef(null);
  const prevPresentRef = React2.useRef(present);
  const prevAnimationNameRef = React2.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React2.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = event => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = event => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React2.useCallback(node2 => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root = Presence;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2UuMS4xLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL3NyYy9wcmVzZW5jZS50c3giLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL3NyYy91c2Utc3RhdGUtbWFjaGluZS50c3giXSwibmFtZXMiOlsicmVhY3RfcHJlc2VuY2VfMV8xXzVfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUHJlc2VuY2UiLCJSb290IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0MiIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X2NvbXBvc2VfcmVmcyIsImltcG9ydF9yZWFjdF91c2VfbGF5b3V0X2VmZmVjdCIsIlJlYWN0IiwidXNlU3RhdGVNYWNoaW5lIiwiaW5pdGlhbFN0YXRlIiwibWFjaGluZSIsInVzZVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwibmV4dFN0YXRlIiwicHJvcHMiLCJwcmVzZW50IiwiY2hpbGRyZW4iLCJwcmVzZW5jZSIsInVzZVByZXNlbmNlIiwiY2hpbGQiLCJpc1ByZXNlbnQiLCJDaGlsZHJlbiIsIm9ubHkiLCJyZWYiLCJ1c2VDb21wb3NlZFJlZnMiLCJnZXRFbGVtZW50UmVmIiwiZm9yY2VNb3VudCIsImNsb25lRWxlbWVudCIsImRpc3BsYXlOYW1lIiwibm9kZSIsInNldE5vZGUiLCJ1c2VTdGF0ZSIsInN0eWxlc1JlZiIsInVzZVJlZiIsInByZXZQcmVzZW50UmVmIiwicHJldkFuaW1hdGlvbk5hbWVSZWYiLCJzZW5kIiwibW91bnRlZCIsIlVOTU9VTlQiLCJBTklNQVRJT05fT1VUIiwidW5tb3VudFN1c3BlbmRlZCIsIk1PVU5UIiwiQU5JTUFUSU9OX0VORCIsInVubW91bnRlZCIsInVzZUVmZmVjdCIsImN1cnJlbnRBbmltYXRpb25OYW1lIiwiZ2V0QW5pbWF0aW9uTmFtZSIsImN1cnJlbnQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJzdHlsZXMiLCJ3YXNQcmVzZW50IiwiaGFzUHJlc2VudENoYW5nZWQiLCJwcmV2QW5pbWF0aW9uTmFtZSIsImRpc3BsYXkiLCJpc0FuaW1hdGluZyIsInRpbWVvdXRJZCIsIm93bmVyV2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwid2luZG93IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiaXNDdXJyZW50QW5pbWF0aW9uIiwiaW5jbHVkZXMiLCJDU1MiLCJlc2NhcGUiLCJhbmltYXRpb25OYW1lIiwidGFyZ2V0IiwiY3VycmVudEZpbGxNb2RlIiwic3R5bGUiLCJhbmltYXRpb25GaWxsTW9kZSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25TdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlQ2FsbGJhY2siLCJub2RlMiIsImdldENvbXB1dGVkU3R5bGUiLCJlbGVtZW50IiwiZ2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwibWF5V2FybiIsImlzUmVhY3RXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sNEJBQUE7OztBQ0FBLElBQUFPLE1BQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyx5QkFBQSxHQUFnQ0QsT0FBQTtBQUNoQyxJQUFBRSw4QkFBQSxHQUFnQ0YsT0FBQTtBQ0ZoQyxJQUFBRyxLQUFBLEdBQXVCSixPQUFBLENBQUFDLE9BQUE7QUFXaEIsU0FBU0ksZ0JBQ2RDLFlBQUEsRUFDQUMsT0FBQSxFQUNBO0VBQ0EsT0FBYUgsS0FBQSxDQUFBSSxVQUFBLENBQVcsQ0FBQ0MsS0FBQSxFQUF3QkMsS0FBQSxLQUE0QztJQUMzRixNQUFNQyxTQUFBLEdBQWFKLE9BQUEsQ0FBUUUsS0FBSyxFQUFVQyxLQUFLO0lBQy9DLE9BQU9DLFNBQUEsSUFBYUYsS0FBQTtFQUN0QixHQUFHSCxZQUFZO0FBQ2pCO0FEVEEsSUFBTVosUUFBQSxHQUFxQ2tCLEtBQUEsSUFBVTtFQUNuRCxNQUFNO0lBQUVDLE9BQUE7SUFBU0M7RUFBUyxJQUFJRixLQUFBO0VBQzlCLE1BQU1HLFFBQUEsR0FBV0MsV0FBQSxDQUFZSCxPQUFPO0VBRXBDLE1BQU1JLEtBQUEsR0FDSixPQUFPSCxRQUFBLEtBQWEsYUFDaEJBLFFBQUEsQ0FBUztJQUFFRCxPQUFBLEVBQVNFLFFBQUEsQ0FBU0c7RUFBVSxDQUFDLElBQ2xDbkIsTUFBQSxDQUFBb0IsUUFBQSxDQUFTQyxJQUFBLENBQUtOLFFBQVE7RUFHbEMsTUFBTU8sR0FBQSxPQUFNbkIseUJBQUEsQ0FBQW9CLGVBQUEsRUFBZ0JQLFFBQUEsQ0FBU00sR0FBQSxFQUFLRSxhQUFBLENBQWNOLEtBQUssQ0FBQztFQUM5RCxNQUFNTyxVQUFBLEdBQWEsT0FBT1YsUUFBQSxLQUFhO0VBQ3ZDLE9BQU9VLFVBQUEsSUFBY1QsUUFBQSxDQUFTRyxTQUFBLEdBQWtCbkIsTUFBQSxDQUFBMEIsWUFBQSxDQUFhUixLQUFBLEVBQU87SUFBRUk7RUFBSSxDQUFDLElBQUk7QUFDakY7QUFFQTNCLFFBQUEsQ0FBU2dDLFdBQUEsR0FBYztBQU12QixTQUFTVixZQUFZSCxPQUFBLEVBQWtCO0VBQ3JDLE1BQU0sQ0FBQ2MsSUFBQSxFQUFNQyxPQUFPLElBQVU3QixNQUFBLENBQUE4QixRQUFBLENBQXNCO0VBQ3BELE1BQU1DLFNBQUEsR0FBa0IvQixNQUFBLENBQUFnQyxNQUFBLENBQW1DLElBQUk7RUFDL0QsTUFBTUMsY0FBQSxHQUF1QmpDLE1BQUEsQ0FBQWdDLE1BQUEsQ0FBT2xCLE9BQU87RUFDM0MsTUFBTW9CLG9CQUFBLEdBQTZCbEMsTUFBQSxDQUFBZ0MsTUFBQSxDQUFlLE1BQU07RUFDeEQsTUFBTXpCLFlBQUEsR0FBZU8sT0FBQSxHQUFVLFlBQVk7RUFDM0MsTUFBTSxDQUFDSixLQUFBLEVBQU95QixJQUFJLElBQUk3QixlQUFBLENBQWdCQyxZQUFBLEVBQWM7SUFDbEQ2QixPQUFBLEVBQVM7TUFDUEMsT0FBQSxFQUFTO01BQ1RDLGFBQUEsRUFBZTtJQUNqQjtJQUNBQyxnQkFBQSxFQUFrQjtNQUNoQkMsS0FBQSxFQUFPO01BQ1BDLGFBQUEsRUFBZTtJQUNqQjtJQUNBQyxTQUFBLEVBQVc7TUFDVEYsS0FBQSxFQUFPO0lBQ1Q7RUFDRixDQUFDO0VBRUt4QyxNQUFBLENBQUEyQyxTQUFBLENBQVUsTUFBTTtJQUNwQixNQUFNQyxvQkFBQSxHQUF1QkMsZ0JBQUEsQ0FBaUJkLFNBQUEsQ0FBVWUsT0FBTztJQUMvRFosb0JBQUEsQ0FBcUJZLE9BQUEsR0FBVXBDLEtBQUEsS0FBVSxZQUFZa0Msb0JBQUEsR0FBdUI7RUFDOUUsR0FBRyxDQUFDbEMsS0FBSyxDQUFDO0VBRVYsSUFBQU4sOEJBQUEsQ0FBQTJDLGVBQUEsRUFBZ0IsTUFBTTtJQUNwQixNQUFNQyxNQUFBLEdBQVNqQixTQUFBLENBQVVlLE9BQUE7SUFDekIsTUFBTUcsVUFBQSxHQUFhaEIsY0FBQSxDQUFlYSxPQUFBO0lBQ2xDLE1BQU1JLGlCQUFBLEdBQW9CRCxVQUFBLEtBQWVuQyxPQUFBO0lBRXpDLElBQUlvQyxpQkFBQSxFQUFtQjtNQUNyQixNQUFNQyxpQkFBQSxHQUFvQmpCLG9CQUFBLENBQXFCWSxPQUFBO01BQy9DLE1BQU1GLG9CQUFBLEdBQXVCQyxnQkFBQSxDQUFpQkcsTUFBTTtNQUVwRCxJQUFJbEMsT0FBQSxFQUFTO1FBQ1hxQixJQUFBLENBQUssT0FBTztNQUNkLFdBQVdTLG9CQUFBLEtBQXlCLFVBQVVJLE1BQUEsRUFBUUksT0FBQSxLQUFZLFFBQVE7UUFHeEVqQixJQUFBLENBQUssU0FBUztNQUNoQixPQUFPO1FBT0wsTUFBTWtCLFdBQUEsR0FBY0YsaUJBQUEsS0FBc0JQLG9CQUFBO1FBRTFDLElBQUlLLFVBQUEsSUFBY0ksV0FBQSxFQUFhO1VBQzdCbEIsSUFBQSxDQUFLLGVBQWU7UUFDdEIsT0FBTztVQUNMQSxJQUFBLENBQUssU0FBUztRQUNoQjtNQUNGO01BRUFGLGNBQUEsQ0FBZWEsT0FBQSxHQUFVaEMsT0FBQTtJQUMzQjtFQUNGLEdBQUcsQ0FBQ0EsT0FBQSxFQUFTcUIsSUFBSSxDQUFDO0VBRWxCLElBQUEvQiw4QkFBQSxDQUFBMkMsZUFBQSxFQUFnQixNQUFNO0lBQ3BCLElBQUluQixJQUFBLEVBQU07TUFDUixJQUFJMEIsU0FBQTtNQUNKLE1BQU1DLFdBQUEsR0FBYzNCLElBQUEsQ0FBSzRCLGFBQUEsQ0FBY0MsV0FBQSxJQUFlQyxNQUFBO01BTXRELE1BQU1DLGtCQUFBLEdBQXNCaEQsS0FBQSxJQUEwQjtRQUNwRCxNQUFNaUMsb0JBQUEsR0FBdUJDLGdCQUFBLENBQWlCZCxTQUFBLENBQVVlLE9BQU87UUFHL0QsTUFBTWMsa0JBQUEsR0FBcUJoQixvQkFBQSxDQUFxQmlCLFFBQUEsQ0FBU0MsR0FBQSxDQUFJQyxNQUFBLENBQU9wRCxLQUFBLENBQU1xRCxhQUFhLENBQUM7UUFDeEYsSUFBSXJELEtBQUEsQ0FBTXNELE1BQUEsS0FBV3JDLElBQUEsSUFBUWdDLGtCQUFBLEVBQW9CO1VBVy9DekIsSUFBQSxDQUFLLGVBQWU7VUFDcEIsSUFBSSxDQUFDRixjQUFBLENBQWVhLE9BQUEsRUFBUztZQUMzQixNQUFNb0IsZUFBQSxHQUFrQnRDLElBQUEsQ0FBS3VDLEtBQUEsQ0FBTUMsaUJBQUE7WUFDbkN4QyxJQUFBLENBQUt1QyxLQUFBLENBQU1DLGlCQUFBLEdBQW9CO1lBSy9CZCxTQUFBLEdBQVlDLFdBQUEsQ0FBWWMsVUFBQSxDQUFXLE1BQU07Y0FDdkMsSUFBSXpDLElBQUEsQ0FBS3VDLEtBQUEsQ0FBTUMsaUJBQUEsS0FBc0IsWUFBWTtnQkFDL0N4QyxJQUFBLENBQUt1QyxLQUFBLENBQU1DLGlCQUFBLEdBQW9CRixlQUFBO2NBQ2pDO1lBQ0YsQ0FBQztVQUNIO1FBQ0Y7TUFDRjtNQUNBLE1BQU1JLG9CQUFBLEdBQXdCM0QsS0FBQSxJQUEwQjtRQUN0RCxJQUFJQSxLQUFBLENBQU1zRCxNQUFBLEtBQVdyQyxJQUFBLEVBQU07VUFFekJNLG9CQUFBLENBQXFCWSxPQUFBLEdBQVVELGdCQUFBLENBQWlCZCxTQUFBLENBQVVlLE9BQU87UUFDbkU7TUFDRjtNQUNBbEIsSUFBQSxDQUFLMkMsZ0JBQUEsQ0FBaUIsa0JBQWtCRCxvQkFBb0I7TUFDNUQxQyxJQUFBLENBQUsyQyxnQkFBQSxDQUFpQixtQkFBbUJaLGtCQUFrQjtNQUMzRC9CLElBQUEsQ0FBSzJDLGdCQUFBLENBQWlCLGdCQUFnQlosa0JBQWtCO01BQ3hELE9BQU8sTUFBTTtRQUNYSixXQUFBLENBQVlpQixZQUFBLENBQWFsQixTQUFTO1FBQ2xDMUIsSUFBQSxDQUFLNkMsbUJBQUEsQ0FBb0Isa0JBQWtCSCxvQkFBb0I7UUFDL0QxQyxJQUFBLENBQUs2QyxtQkFBQSxDQUFvQixtQkFBbUJkLGtCQUFrQjtRQUM5RC9CLElBQUEsQ0FBSzZDLG1CQUFBLENBQW9CLGdCQUFnQmQsa0JBQWtCO01BQzdEO0lBQ0YsT0FBTztNQUdMeEIsSUFBQSxDQUFLLGVBQWU7SUFDdEI7RUFDRixHQUFHLENBQUNQLElBQUEsRUFBTU8sSUFBSSxDQUFDO0VBRWYsT0FBTztJQUNMaEIsU0FBQSxFQUFXLENBQUMsV0FBVyxrQkFBa0IsRUFBRTBDLFFBQUEsQ0FBU25ELEtBQUs7SUFDekRZLEdBQUEsRUFBV3RCLE1BQUEsQ0FBQTBFLFdBQUEsQ0FBYUMsS0FBQSxJQUFzQjtNQUM1QzVDLFNBQUEsQ0FBVWUsT0FBQSxHQUFVNkIsS0FBQSxHQUFPQyxnQkFBQSxDQUFpQkQsS0FBSSxJQUFJO01BQ3BEOUMsT0FBQSxDQUFROEMsS0FBSTtJQUNkLEdBQUcsRUFBRTtFQUNQO0FBQ0Y7QUFJQSxTQUFTOUIsaUJBQWlCRyxNQUFBLEVBQW9DO0VBQzVELE9BQU9BLE1BQUEsRUFBUWdCLGFBQUEsSUFBaUI7QUFDbEM7QUFPQSxTQUFTeEMsY0FBY3FELE9BQUEsRUFBMkQ7RUFFaEYsSUFBSUMsTUFBQSxHQUFTQyxNQUFBLENBQU9DLHdCQUFBLENBQXlCSCxPQUFBLENBQVFoRSxLQUFBLEVBQU8sS0FBSyxHQUFHb0UsR0FBQTtFQUNwRSxJQUFJQyxPQUFBLEdBQVVKLE1BQUEsSUFBVSxvQkFBb0JBLE1BQUEsSUFBVUEsTUFBQSxDQUFPSyxjQUFBO0VBQzdELElBQUlELE9BQUEsRUFBUztJQUNYLE9BQVFMLE9BQUEsQ0FBZ0J2RCxHQUFBO0VBQzFCO0VBR0F3RCxNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsRUFBUyxLQUFLLEdBQUdJLEdBQUE7RUFDMURDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDekQsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBT0wsT0FBQSxDQUFRaEUsS0FBQSxDQUFNUyxHQUFBO0VBQ3ZCO0VBR0EsT0FBT3VELE9BQUEsQ0FBUWhFLEtBQUEsQ0FBTVMsR0FBQSxJQUFRdUQsT0FBQSxDQUFnQnZELEdBQUE7QUFDL0M7QUFFQSxJQUFNMUIsSUFBQSxHQUFPRCxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==