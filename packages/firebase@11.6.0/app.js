System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1","@firebase/app@0.11.4"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.4"],["firebase","11.6.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep), dep => dependencies.set('@firebase/component@0.6.13', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.11.4', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/firebase/app.11.6.0.js
var app_11_6_0_exports = {};
module.exports = __toCommonJS(app_11_6_0_exports);

// node_modules/firebase/app/dist/esm/index.esm.js
var index_esm_exports = {};
var import_app = require("@firebase/app@0.11.4");
__reExport(index_esm_exports, require("@firebase/app@0.11.4"));
var name = "firebase";
var version = "11.6.0";
(0, import_app.registerVersion)(name, version, "app");

// .beyond/uimport/firebase/app.11.6.0.js
__reExport(app_11_6_0_exports, index_esm_exports, module.exports);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9maXJlYmFzZS9hcHAuMTEuNi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlL2FwcC9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHBfMTFfNl8wX2V4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2FwcCIsInJlZ2lzdGVyVmVyc2lvbiIsIm5hbWUiLCJ2ZXJzaW9uIiwiX19yZUV4cG9ydCIsImluZGV4X2VzbV9leHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUgsa0JBQUE7Ozs7Ozs7O0lDbUJBSSxVQUFBLENBQUFDLGVBQUEsRUFBZ0JDLElBQUEsRUFBTUMsT0FBQSxFQUFTLEtBQUs7OztBRG5CcENDLFVBQUEsQ0FBQVIsa0JBQUEsRUFBY1MsaUJBQUEsRUFBZFIsTUFBQSxDQUFBQyxPQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwL291dCJ9