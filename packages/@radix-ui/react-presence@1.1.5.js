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

// .beyond/uimport/temp/@radix-ui/react-presence.1.1.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1wcmVzZW5jZS4xLjEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2Uvc3JjL3ByZXNlbmNlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2Uvc3JjL3VzZS1zdGF0ZS1tYWNoaW5lLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9wcmVzZW5jZV8xXzFfNV9leHBvcnRzIiwiX19leHBvcnQiLCJQcmVzZW5jZSIsIlJvb3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QyIiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3RfY29tcG9zZV9yZWZzIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZU1hY2hpbmUiLCJpbml0aWFsU3RhdGUiLCJtYWNoaW5lIiwidXNlUmVkdWNlciIsInN0YXRlIiwiZXZlbnQiLCJuZXh0U3RhdGUiLCJwcm9wcyIsInByZXNlbnQiLCJjaGlsZHJlbiIsInByZXNlbmNlIiwidXNlUHJlc2VuY2UiLCJjaGlsZCIsImlzUHJlc2VudCIsIkNoaWxkcmVuIiwib25seSIsInJlZiIsInVzZUNvbXBvc2VkUmVmcyIsImdldEVsZW1lbnRSZWYiLCJmb3JjZU1vdW50IiwiY2xvbmVFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJub2RlIiwic2V0Tm9kZSIsInVzZVN0YXRlIiwic3R5bGVzUmVmIiwidXNlUmVmIiwicHJldlByZXNlbnRSZWYiLCJwcmV2QW5pbWF0aW9uTmFtZVJlZiIsInNlbmQiLCJtb3VudGVkIiwiVU5NT1VOVCIsIkFOSU1BVElPTl9PVVQiLCJ1bm1vdW50U3VzcGVuZGVkIiwiTU9VTlQiLCJBTklNQVRJT05fRU5EIiwidW5tb3VudGVkIiwidXNlRWZmZWN0IiwiY3VycmVudEFuaW1hdGlvbk5hbWUiLCJnZXRBbmltYXRpb25OYW1lIiwiY3VycmVudCIsInVzZUxheW91dEVmZmVjdCIsInN0eWxlcyIsIndhc1ByZXNlbnQiLCJoYXNQcmVzZW50Q2hhbmdlZCIsInByZXZBbmltYXRpb25OYW1lIiwiZGlzcGxheSIsImlzQW5pbWF0aW5nIiwidGltZW91dElkIiwib3duZXJXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ3aW5kb3ciLCJoYW5kbGVBbmltYXRpb25FbmQiLCJpc0N1cnJlbnRBbmltYXRpb24iLCJpbmNsdWRlcyIsIkNTUyIsImVzY2FwZSIsImFuaW1hdGlvbk5hbWUiLCJ0YXJnZXQiLCJjdXJyZW50RmlsbE1vZGUiLCJzdHlsZSIsImFuaW1hdGlvbkZpbGxNb2RlIiwic2V0VGltZW91dCIsImhhbmRsZUFuaW1hdGlvblN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VDYWxsYmFjayIsIm5vZGUyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsZW1lbnQiLCJnZXR0ZXIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJtYXlXYXJuIiwiaXNSZWFjdFdhcm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiw0QkFBQTs7O0FDQUEsSUFBQU8sTUFBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLHlCQUFBLEdBQWdDRCxPQUFBO0FBQ2hDLElBQUFFLDhCQUFBLEdBQWdDRixPQUFBO0FDRmhDLElBQUFHLEtBQUEsR0FBdUJKLE9BQUEs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QkFBaUJHLE1BQUEsRUFBb0M7RUFDNUQsT0FBT0EsTUFBQSxFQUFRZ0IsYUFBQSxJQUFpQjtBQUNsQztBQU9BLFNBQVN4QyxjQUFjcUQsT0FBQSxFQUEyRDtFQUVoRixJQUFJQyxNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsQ0FBUWhFLEtBQUEsRUFBTyxLQUFLLEdBQUdvRSxHQUFBO0VBQ3BFLElBQUlDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDN0QsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBUUwsT0FBQSxDQUFnQnZELEdBQUE7RUFDMUI7RUFHQXdELE1BQUEsR0FBU0MsTUFBQSxDQUFPQyx3QkFBQSxDQUF5QkgsT0FBQSxFQUFTLEtBQUssR0FBR0ksR0FBQTtFQUMxREMsT0FBQSxHQUFVSixNQUFBLElBQVUsb0JBQW9CQSxNQUFBLElBQVVBLE1BQUEsQ0FBT0ssY0FBQTtFQUN6RCxJQUFJRCxPQUFBLEVBQVM7SUFDWCxPQUFPTCxPQUFBLENBQVFoRSxLQUFBLENBQU1TLEdBQUE7RUFDdkI7RUFHQSxPQUFPdUQsT0FBQSxDQUFRaEUsS0FBQSxDQUFNUyxHQUFBLElBQVF1RCxPQUFBLENBQWdCdkQsR0FBQTtBQUMvQztBQUVBLElBQU0xQixJQUFBLEdBQU9ELFFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHBzL2JldHRlci1taW5kL291dCJ9