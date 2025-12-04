System.register(["github-slugger@2.0.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["github-slugger","2.0.0"],["marked-gfm-heading-id","3.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('github-slugger@2.0.0', dep)],
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

// .beyond/uimport/marked-gfm-heading-id.3.2.0.js
var marked_gfm_heading_id_3_2_0_exports = {};
__export(marked_gfm_heading_id_3_2_0_exports, {
  getHeadingList: () => getHeadingList,
  gfmHeadingId: () => gfmHeadingId,
  resetHeadings: () => resetHeadings
});
module.exports = __toCommonJS(marked_gfm_heading_id_3_2_0_exports);

// node_modules/marked-gfm-heading-id/src/index.js
var import_github_slugger = __toESM(require("github-slugger@2.0.0"), 0);
var slugger = new import_github_slugger.default();
var headings = [];
function gfmHeadingId({
  prefix = "",
  globalSlugs = false
} = {}) {
  return {
    headerIds: false,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(src) {
        if (!globalSlugs) {
          resetHeadings();
        }
        return src;
      }
    },
    renderer: {
      heading(text, level, raw) {
        raw = raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const id = `${prefix}${slugger.slug(raw)}`;
        const heading = {
          level,
          text,
          id
        };
        headings.push(heading);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
    }
  };
}
function getHeadingList() {
  return headings;
}
function resetHeadings() {
  headings = [];
  slugger = new import_github_slugger.default();
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtZ2ZtLWhlYWRpbmctaWQuMy4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWdmbS1oZWFkaW5nLWlkL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXJrZWRfZ2ZtX2hlYWRpbmdfaWRfM18yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZ2V0SGVhZGluZ0xpc3QiLCJnZm1IZWFkaW5nSWQiLCJyZXNldEhlYWRpbmdzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9naXRodWJfc2x1Z2dlciIsIl9fdG9FU00iLCJyZXF1aXJlIiwic2x1Z2dlciIsImRlZmF1bHQiLCJoZWFkaW5ncyIsInByZWZpeCIsImdsb2JhbFNsdWdzIiwiaGVhZGVySWRzIiwiaG9va3MiLCJwcmVwcm9jZXNzIiwic3JjIiwicmVuZGVyZXIiLCJoZWFkaW5nIiwidGV4dCIsImxldmVsIiwicmF3IiwidG9Mb3dlckNhc2UiLCJ0cmltIiwicmVwbGFjZSIsImlkIiwic2x1ZyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQ0FBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxtQ0FBQTs7O0FDQUEsSUFBQVEscUJBQUEsR0FBMEJDLE9BQUEsQ0FBQUMsT0FBQTtBQUMxQixJQUFJQyxPQUFBLEdBQVUsSUFBSUgscUJBQUEsQ0FBQUksT0FBQSxDQUFjO0FBRWhDLElBQUlDLFFBQUEsR0FBVyxFQUFDO0FBRVQsU0FBU1YsYUFBYTtFQUFFVyxNQUFBLEdBQVM7RUFBSUMsV0FBQSxHQUFjO0FBQU0sSUFBSSxDQUFDLEdBQUc7RUFDdEUsT0FBTztJQUNMQyxTQUFBLEVBQVc7SUFBQTtJQUNYQyxLQUFBLEVBQU87TUFDTEMsV0FBV0MsR0FBQSxFQUFLO1FBQ2QsSUFBSSxDQUFDSixXQUFBLEVBQWE7VUFDaEJYLGFBQUEsQ0FBYztRQUNoQjtRQUNBLE9BQU9lLEdBQUE7TUFDVDtJQUNGO0lBQ0FDLFFBQUEsRUFBVTtNQUNSQyxRQUFRQyxJQUFBLEVBQU1DLEtBQUEsRUFBT0MsR0FBQSxFQUFLO1FBQ3hCQSxHQUFBLEdBQU1BLEdBQUEsQ0FDSEMsV0FBQSxDQUFZLEVBQ1pDLElBQUEsQ0FBSyxFQUNMQyxPQUFBLENBQVEsbUJBQW1CLEVBQUU7UUFDaEMsTUFBTUMsRUFBQSxHQUFLLEdBQUdkLE1BQU0sR0FBR0gsT0FBQSxDQUFRa0IsSUFBQSxDQUFLTCxHQUFHLENBQUM7UUFDeEMsTUFBTUgsT0FBQSxHQUFVO1VBQUVFLEtBQUE7VUFBT0QsSUFBQTtVQUFNTTtRQUFHO1FBQ2xDZixRQUFBLENBQVNpQixJQUFBLENBQUtULE9BQU87UUFFckIsT0FBTyxLQUFLRSxLQUFLLFFBQVFLLEVBQUUsS0FBS04sSUFBSSxNQUFNQyxLQUFLO0FBQUE7TUFDakQ7SUFDRjtFQUNGO0FBQ0Y7QUFFTyxTQUFTckIsZUFBQSxFQUFpQjtFQUMvQixPQUFPVyxRQUFBO0FBQ1Q7QUFFTyxTQUFTVCxjQUFBLEVBQWdCO0VBQzlCUyxRQUFBLEdBQVcsRUFBQztFQUNaRixPQUFBLEdBQVUsSUFBSUgscUJBQUEsQ0FBQUksT0FBQSxDQUFjO0FBQzlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==