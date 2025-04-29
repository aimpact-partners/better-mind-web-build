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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/marked-gfm-heading-id.3.2.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1nZm0taGVhZGluZy1pZC4zLjIuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQtZ2ZtLWhlYWRpbmctaWQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9nZm1faGVhZGluZ19pZF8zXzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJnZXRIZWFkaW5nTGlzdCIsImdmbUhlYWRpbmdJZCIsInJlc2V0SGVhZGluZ3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2dpdGh1Yl9zbHVnZ2VyIiwiX190b0VTTSIsInJlcXVpcmUiLCJzbHVnZ2VyIiwiZGVmYXVsdCIsImhlYWRpbmdzIiwicHJlZml4IiwiZ2xvYmFsU2x1Z3MiLCJoZWFkZXJJZHMiLCJob29rcyIsInByZXByb2Nlc3MiLCJzcmMiLCJyZW5kZXJlciIsImhlYWRpbmciLCJ0ZXh0IiwibGV2ZWwiLCJyYXciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJyZXBsYWNlIiwiaWQiLCJzbHVnIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQ0FBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxtQ0FBQTs7O0FDQUEsSUFBQVEscUJBQUEsR0FBMEJDLE9BQUEsQ0FBQUMsT0FBQTtBQUMxQixJQUFJQyxPQUFBLEdBQVUsSUFBSUgscUJBQUEsQ0FBQUksT0FBQSxDQUFjO0FBRWhDLElBQUlDLFFBQUEsR0FBVyxFQUFDO0FBRVQsU0FBU1YsYUFBYTtFQUFFVyxNQUFBLEdBQVM7RUFBSUMsV0FBQSxHQUFjO0FBQU0sSUFBSSxDQUFDLEdBQUc7RUFDdEUsT0FBTztJQUNMQyxTQUFBLEVBQVc7SUFDWEMsS0FBQSxFQUFPO01BQ0xDLFdBQVdDLEdBQUEsRUFBSztRQUNkLElBQUksQ0FBQ0osV0FBQSxFQUFhO1VBQ2hCWCxhQUFBLENBQWM7UUFDaEI7UUFDQSxPQUFPZSxHQUFBO01BQ1Q7SUFDRjtJQUNBQyxRQUFBLEVBQVU7TUFDUkMsUUFBUUMsSUFBQSxFQUFNQyxLQUFBLEVBQU9DLEdBQUEsRUFBSztRQUN4QkEsR0FBQSxHQUFNQSxHQUFBLENBQ0hDLFdBQUEsQ0FBWSxFQUNaQyxJQUFBLENBQUssRUFDTEMsT0FBQSxDQUFRLG1CQUFtQixFQUFFO1FBQ2hDLE1BQU1DLEVBQUEsR0FBSyxHQUFHZCxNQUFBLEdBQVNILE9BQUEsQ0FBUWtCLElBQUEsQ0FBS0wsR0FBRztRQUN2QyxNQUFNSCxPQUFBLEdBQVU7VUFBRUUsS0FBQTtVQUFPRCxJQUFBO1VBQU1NO1FBQUc7UUFDbENmLFFBQUEsQ0FBU2lCLElBQUEsQ0FBS1QsT0FBTztRQUVyQixPQUFPLEtBQUtFLEtBQUEsUUFBYUssRUFBQSxLQUFPTixJQUFBLE1BQVVDLEtBQUE7QUFBQTtNQUM1QztJQUNGO0VBQ0Y7QUFDRjtBQUVPLFNBQVNyQixlQUFBLEVBQWlCO0VBQy9CLE9BQU9XLFFBQUE7QUFDVDtBQUVPLFNBQVNULGNBQUEsRUFBZ0I7RUFDOUJTLFFBQUEsR0FBVyxFQUFDO0VBQ1pGLE9BQUEsR0FBVSxJQUFJSCxxQkFBQSxDQUFBSSxPQUFBLENBQWM7QUFDOUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9haWxlYXJuL2NsaWVudC9hcHAvb3V0In0=