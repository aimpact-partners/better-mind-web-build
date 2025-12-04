System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["linkifyjs","4.3.2"]]);
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

// .beyond/uimport/linkifyjs.4.3.2.js
var linkifyjs_4_3_2_exports = {};
__export(linkifyjs_4_3_2_exports, {
  MultiToken: () => MultiToken,
  Options: () => Options,
  State: () => State,
  createTokenClass: () => createTokenClass,
  find: () => find,
  init: () => init,
  multi: () => multi,
  options: () => options,
  regexp: () => regexp,
  registerCustomProtocol: () => registerCustomProtocol,
  registerPlugin: () => registerPlugin,
  registerTokenPlugin: () => registerTokenPlugin,
  reset: () => reset,
  stringToArray: () => stringToArray,
  test: () => test,
  text: () => multi,
  tokenize: () => tokenize
});
module.exports = __toCommonJS(linkifyjs_4_3_2_exports);

// node_modules/linkifyjs/dist/linkify.mjs
var encodedTlds = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xF6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
var encodedUtlds = "\u03B5\u03BB1\u03C52\u0431\u04331\u0435\u043B3\u0434\u0435\u0442\u04384\u0435\u044E2\u043A\u0430\u0442\u043E\u043B\u0438\u043A6\u043E\u043C3\u043C\u043A\u04342\u043E\u043D1\u0441\u043A\u0432\u04306\u043E\u043D\u043B\u0430\u0439\u043D5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043A\u04403\u049B\u0430\u04373\u0570\u0561\u05753\u05D9\u05E9\u05E8\u05D0\u05DC5\u05E7\u05D5\u05DD3\u0627\u0628\u0648\u0638\u0628\u064A5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062F\u06464\u0628\u062D\u0631\u064A\u06465\u062C\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062F\u064A\u06296\u0639\u0644\u064A\u0627\u06465\u0645\u063A\u0631\u06285\u0645\u0627\u0631\u0627\u062A5\u06CC\u0631\u0627\u06465\u0628\u0627\u0631\u062A2\u0632\u0627\u06314\u064A\u062A\u06433\u06BE\u0627\u0631\u062A5\u062A\u0648\u0646\u06334\u0633\u0648\u062F\u0627\u06463\u0631\u064A\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064A\u06466\u0642\u0637\u06313\u0643\u0627\u062B\u0648\u0644\u064A\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064A\u0633\u064A\u06275\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067E\u0627\u06A9\u0633\u062A\u0627\u06467\u0680\u0627\u0631\u062A4\u0915\u0949\u092E3\u0928\u0947\u091F3\u092D\u093E\u0930\u09240\u092E\u094D3\u094B\u09245\u0938\u0902\u0917\u0920\u09285\u09AC\u09BE\u0982\u09B2\u09BE5\u09AD\u09BE\u09B0\u09A42\u09F0\u09A44\u0A2D\u0A3E\u0A30\u0A244\u0AAD\u0ABE\u0AB0\u0AA44\u0B2D\u0B3E\u0B30\u0B244\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE6\u0BB2\u0B99\u0BCD\u0B95\u0BC86\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD11\u0C2D\u0C3E\u0C30\u0C24\u0C4D5\u0CAD\u0CBE\u0CB0\u0CA44\u0D2D\u0D3E\u0D30\u0D24\u0D025\u0DBD\u0D82\u0D9A\u0DCF4\u0E04\u0E2D\u0E213\u0E44\u0E17\u0E223\u0EA5\u0EB2\u0EA73\u10D2\u10D42\u307F\u3093\u306A3\u30A2\u30DE\u30BE\u30F34\u30AF\u30E9\u30A6\u30C94\u30B0\u30FC\u30B0\u30EB4\u30B3\u30E02\u30B9\u30C8\u30A23\u30BB\u30FC\u30EB3\u30D5\u30A1\u30C3\u30B7\u30E7\u30F36\u30DD\u30A4\u30F3\u30C84\u4E16\u754C2\u4E2D\u4FE11\u56FD1\u570B1\u6587\u7F513\u4E9A\u9A6C\u900A3\u4F01\u4E1A2\u4F5B\u5C712\u4FE1\u606F2\u5065\u5EB72\u516B\u53662\u516C\u53F81\u76CA2\u53F0\u6E7E1\u70632\u5546\u57CE1\u5E971\u68072\u5609\u91CC0\u5927\u9152\u5E975\u5728\u7EBF2\u5927\u62FF2\u5929\u4E3B\u65593\u5A31\u4E502\u5BB6\u96FB2\u5E7F\u4E1C2\u5FAE\u535A2\u6148\u55842\u6211\u7231\u4F603\u624B\u673A2\u62DB\u80582\u653F\u52A11\u5E9C2\u65B0\u52A0\u57612\u95FB2\u65F6\u5C1A2\u66F8\u7C4D2\u673A\u67842\u6DE1\u9A6C\u95213\u6E38\u620F2\u6FB3\u95802\u70B9\u770B2\u79FB\u52A82\u7EC4\u7EC7\u673A\u67844\u7F51\u57401\u5E971\u7AD91\u7EDC2\u8054\u901A2\u8C37\u6B4C2\u8D2D\u72692\u901A\u8CA92\u96C6\u56E22\u96FB\u8A0A\u76C8\u79D14\u98DE\u5229\u6D663\u98DF\u54C12\u9910\u53852\u9999\u683C\u91CC\u62C93\u6E2F2\uB2F7\uB1371\uCEF42\uC0BC\uC1312\uD55C\uAD6D2";
var numeric = "numeric";
var ascii = "ascii";
var alpha = "alpha";
var asciinumeric = "asciinumeric";
var alphanumeric = "alphanumeric";
var domain = "domain";
var emoji = "emoji";
var scheme = "scheme";
var slashscheme = "slashscheme";
var whitespace = "whitespace";
function registerGroup(name, groups) {
  if (!(name in groups)) {
    groups[name] = [];
  }
  return groups[name];
}
function addToGroups(t, flags, groups) {
  if (flags[numeric]) {
    flags[asciinumeric] = true;
    flags[alphanumeric] = true;
  }
  if (flags[ascii]) {
    flags[asciinumeric] = true;
    flags[alpha] = true;
  }
  if (flags[asciinumeric]) {
    flags[alphanumeric] = true;
  }
  if (flags[alpha]) {
    flags[alphanumeric] = true;
  }
  if (flags[alphanumeric]) {
    flags[domain] = true;
  }
  if (flags[emoji]) {
    flags[domain] = true;
  }
  for (const k in flags) {
    const group = registerGroup(k, groups);
    if (group.indexOf(t) < 0) {
      group.push(t);
    }
  }
}
function flagsForToken(t, groups) {
  const result = {};
  for (const c in groups) {
    if (groups[c].indexOf(t) >= 0) {
      result[c] = true;
    }
  }
  return result;
}
function State(token = null) {
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = token;
}
State.groups = {};
State.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(input) {
    const state = this;
    const nextState = state.j[input];
    if (nextState) {
      return nextState;
    }
    for (let i = 0; i < state.jr.length; i++) {
      const regex = state.jr[i][0];
      const nextState2 = state.jr[i][1];
      if (nextState2 && regex.test(input)) {
        return nextState2;
      }
    }
    return state.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(input, exactOnly = false) {
    return exactOnly ? input in this.j : !!this.go(input);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(inputs, next, flags, groups) {
    for (let i = 0; i < inputs.length; i++) {
      this.tt(inputs[i], next, flags, groups);
    }
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(regexp2, next, flags, groups) {
    groups = groups || State.groups;
    let nextState;
    if (next && next.j) {
      nextState = next;
    } else {
      nextState = new State(next);
      if (flags && groups) {
        addToGroups(next, flags, groups);
      }
    }
    this.jr.push([regexp2, nextState]);
    return nextState;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(input, next, flags, groups) {
    let state = this;
    const len = input.length;
    if (!len) {
      return state;
    }
    for (let i = 0; i < len - 1; i++) {
      state = state.tt(input[i]);
    }
    return state.tt(input[len - 1], next, flags, groups);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(input, next, flags, groups) {
    groups = groups || State.groups;
    const state = this;
    if (next && next.j) {
      state.j[input] = next;
      return next;
    }
    const t = next;
    let nextState,
      templateState = state.go(input);
    if (templateState) {
      nextState = new State();
      Object.assign(nextState.j, templateState.j);
      nextState.jr.push.apply(nextState.jr, templateState.jr);
      nextState.jd = templateState.jd;
      nextState.t = templateState.t;
    } else {
      nextState = new State();
    }
    if (t) {
      if (groups) {
        if (nextState.t && typeof nextState.t === "string") {
          const allFlags = Object.assign(flagsForToken(nextState.t, groups), flags);
          addToGroups(t, allFlags, groups);
        } else if (flags) {
          addToGroups(t, flags, groups);
        }
      }
      nextState.t = t;
    }
    state.j[input] = nextState;
    return nextState;
  }
};
var ta = (state, input, next, flags, groups) => state.ta(input, next, flags, groups);
var tr = (state, regexp2, next, flags, groups) => state.tr(regexp2, next, flags, groups);
var ts = (state, input, next, flags, groups) => state.ts(input, next, flags, groups);
var tt = (state, input, next, flags, groups) => state.tt(input, next, flags, groups);
var WORD = "WORD";
var UWORD = "UWORD";
var ASCIINUMERICAL = "ASCIINUMERICAL";
var ALPHANUMERICAL = "ALPHANUMERICAL";
var LOCALHOST = "LOCALHOST";
var TLD = "TLD";
var UTLD = "UTLD";
var SCHEME = "SCHEME";
var SLASH_SCHEME = "SLASH_SCHEME";
var NUM = "NUM";
var WS = "WS";
var NL = "NL";
var OPENBRACE = "OPENBRACE";
var CLOSEBRACE = "CLOSEBRACE";
var OPENBRACKET = "OPENBRACKET";
var CLOSEBRACKET = "CLOSEBRACKET";
var OPENPAREN = "OPENPAREN";
var CLOSEPAREN = "CLOSEPAREN";
var OPENANGLEBRACKET = "OPENANGLEBRACKET";
var CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET";
var FULLWIDTHLEFTPAREN = "FULLWIDTHLEFTPAREN";
var FULLWIDTHRIGHTPAREN = "FULLWIDTHRIGHTPAREN";
var LEFTCORNERBRACKET = "LEFTCORNERBRACKET";
var RIGHTCORNERBRACKET = "RIGHTCORNERBRACKET";
var LEFTWHITECORNERBRACKET = "LEFTWHITECORNERBRACKET";
var RIGHTWHITECORNERBRACKET = "RIGHTWHITECORNERBRACKET";
var FULLWIDTHLESSTHAN = "FULLWIDTHLESSTHAN";
var FULLWIDTHGREATERTHAN = "FULLWIDTHGREATERTHAN";
var AMPERSAND = "AMPERSAND";
var APOSTROPHE = "APOSTROPHE";
var ASTERISK = "ASTERISK";
var AT = "AT";
var BACKSLASH = "BACKSLASH";
var BACKTICK = "BACKTICK";
var CARET = "CARET";
var COLON = "COLON";
var COMMA = "COMMA";
var DOLLAR = "DOLLAR";
var DOT = "DOT";
var EQUALS = "EQUALS";
var EXCLAMATION = "EXCLAMATION";
var HYPHEN = "HYPHEN";
var PERCENT = "PERCENT";
var PIPE = "PIPE";
var PLUS = "PLUS";
var POUND = "POUND";
var QUERY = "QUERY";
var QUOTE = "QUOTE";
var FULLWIDTHMIDDLEDOT = "FULLWIDTHMIDDLEDOT";
var SEMI = "SEMI";
var SLASH = "SLASH";
var TILDE = "TILDE";
var UNDERSCORE = "UNDERSCORE";
var EMOJI$1 = "EMOJI";
var SYM = "SYM";
var tk = /* @__PURE__ */Object.freeze({
  __proto__: null,
  ALPHANUMERICAL,
  AMPERSAND,
  APOSTROPHE,
  ASCIINUMERICAL,
  ASTERISK,
  AT,
  BACKSLASH,
  BACKTICK,
  CARET,
  CLOSEANGLEBRACKET,
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEPAREN,
  COLON,
  COMMA,
  DOLLAR,
  DOT,
  EMOJI: EMOJI$1,
  EQUALS,
  EXCLAMATION,
  FULLWIDTHGREATERTHAN,
  FULLWIDTHLEFTPAREN,
  FULLWIDTHLESSTHAN,
  FULLWIDTHMIDDLEDOT,
  FULLWIDTHRIGHTPAREN,
  HYPHEN,
  LEFTCORNERBRACKET,
  LEFTWHITECORNERBRACKET,
  LOCALHOST,
  NL,
  NUM,
  OPENANGLEBRACKET,
  OPENBRACE,
  OPENBRACKET,
  OPENPAREN,
  PERCENT,
  PIPE,
  PLUS,
  POUND,
  QUERY,
  QUOTE,
  RIGHTCORNERBRACKET,
  RIGHTWHITECORNERBRACKET,
  SCHEME,
  SEMI,
  SLASH,
  SLASH_SCHEME,
  SYM,
  TILDE,
  TLD,
  UNDERSCORE,
  UTLD,
  UWORD,
  WORD,
  WS
});
var ASCII_LETTER = /[a-z]/;
var LETTER = /\p{L}/u;
var EMOJI = /\p{Emoji}/u;
var EMOJI_VARIATION$1 = /\ufe0f/;
var DIGIT = /\d/;
var SPACE = /\s/;
var regexp = /* @__PURE__ */Object.freeze({
  __proto__: null,
  ASCII_LETTER,
  DIGIT,
  EMOJI,
  EMOJI_VARIATION: EMOJI_VARIATION$1,
  LETTER,
  SPACE
});
var CR = "\r";
var LF = "\n";
var EMOJI_VARIATION = "\uFE0F";
var EMOJI_JOINER = "\u200D";
var OBJECT_REPLACEMENT = "\uFFFC";
var tlds = null,
  utlds = null;
function init$2(customSchemes = []) {
  const groups = {};
  State.groups = groups;
  const Start = new State();
  if (tlds == null) {
    tlds = decodeTlds(encodedTlds);
  }
  if (utlds == null) {
    utlds = decodeTlds(encodedUtlds);
  }
  tt(Start, "'", APOSTROPHE);
  tt(Start, "{", OPENBRACE);
  tt(Start, "}", CLOSEBRACE);
  tt(Start, "[", OPENBRACKET);
  tt(Start, "]", CLOSEBRACKET);
  tt(Start, "(", OPENPAREN);
  tt(Start, ")", CLOSEPAREN);
  tt(Start, "<", OPENANGLEBRACKET);
  tt(Start, ">", CLOSEANGLEBRACKET);
  tt(Start, "\uFF08", FULLWIDTHLEFTPAREN);
  tt(Start, "\uFF09", FULLWIDTHRIGHTPAREN);
  tt(Start, "\u300C", LEFTCORNERBRACKET);
  tt(Start, "\u300D", RIGHTCORNERBRACKET);
  tt(Start, "\u300E", LEFTWHITECORNERBRACKET);
  tt(Start, "\u300F", RIGHTWHITECORNERBRACKET);
  tt(Start, "\uFF1C", FULLWIDTHLESSTHAN);
  tt(Start, "\uFF1E", FULLWIDTHGREATERTHAN);
  tt(Start, "&", AMPERSAND);
  tt(Start, "*", ASTERISK);
  tt(Start, "@", AT);
  tt(Start, "`", BACKTICK);
  tt(Start, "^", CARET);
  tt(Start, ":", COLON);
  tt(Start, ",", COMMA);
  tt(Start, "$", DOLLAR);
  tt(Start, ".", DOT);
  tt(Start, "=", EQUALS);
  tt(Start, "!", EXCLAMATION);
  tt(Start, "-", HYPHEN);
  tt(Start, "%", PERCENT);
  tt(Start, "|", PIPE);
  tt(Start, "+", PLUS);
  tt(Start, "#", POUND);
  tt(Start, "?", QUERY);
  tt(Start, '"', QUOTE);
  tt(Start, "/", SLASH);
  tt(Start, ";", SEMI);
  tt(Start, "~", TILDE);
  tt(Start, "_", UNDERSCORE);
  tt(Start, "\\", BACKSLASH);
  tt(Start, "\u30FB", FULLWIDTHMIDDLEDOT);
  const Num = tr(Start, DIGIT, NUM, {
    [numeric]: true
  });
  tr(Num, DIGIT, Num);
  const Asciinumeric = tr(Num, ASCII_LETTER, ASCIINUMERICAL, {
    [asciinumeric]: true
  });
  const Alphanumeric = tr(Num, LETTER, ALPHANUMERICAL, {
    [alphanumeric]: true
  });
  const Word = tr(Start, ASCII_LETTER, WORD, {
    [ascii]: true
  });
  tr(Word, DIGIT, Asciinumeric);
  tr(Word, ASCII_LETTER, Word);
  tr(Asciinumeric, DIGIT, Asciinumeric);
  tr(Asciinumeric, ASCII_LETTER, Asciinumeric);
  const UWord = tr(Start, LETTER, UWORD, {
    [alpha]: true
  });
  tr(UWord, ASCII_LETTER);
  tr(UWord, DIGIT, Alphanumeric);
  tr(UWord, LETTER, UWord);
  tr(Alphanumeric, DIGIT, Alphanumeric);
  tr(Alphanumeric, ASCII_LETTER);
  tr(Alphanumeric, LETTER, Alphanumeric);
  const Nl2 = tt(Start, LF, NL, {
    [whitespace]: true
  });
  const Cr = tt(Start, CR, WS, {
    [whitespace]: true
  });
  const Ws = tr(Start, SPACE, WS, {
    [whitespace]: true
  });
  tt(Start, OBJECT_REPLACEMENT, Ws);
  tt(Cr, LF, Nl2);
  tt(Cr, OBJECT_REPLACEMENT, Ws);
  tr(Cr, SPACE, Ws);
  tt(Ws, CR);
  tt(Ws, LF);
  tr(Ws, SPACE, Ws);
  tt(Ws, OBJECT_REPLACEMENT, Ws);
  const Emoji = tr(Start, EMOJI, EMOJI$1, {
    [emoji]: true
  });
  tt(Emoji, "#");
  tr(Emoji, EMOJI, Emoji);
  tt(Emoji, EMOJI_VARIATION, Emoji);
  const EmojiJoiner = tt(Emoji, EMOJI_JOINER);
  tt(EmojiJoiner, "#");
  tr(EmojiJoiner, EMOJI, Emoji);
  const wordjr = [[ASCII_LETTER, Word], [DIGIT, Asciinumeric]];
  const uwordjr = [[ASCII_LETTER, null], [LETTER, UWord], [DIGIT, Alphanumeric]];
  for (let i = 0; i < tlds.length; i++) {
    fastts(Start, tlds[i], TLD, WORD, wordjr);
  }
  for (let i = 0; i < utlds.length; i++) {
    fastts(Start, utlds[i], UTLD, UWORD, uwordjr);
  }
  addToGroups(TLD, {
    tld: true,
    ascii: true
  }, groups);
  addToGroups(UTLD, {
    utld: true,
    alpha: true
  }, groups);
  fastts(Start, "file", SCHEME, WORD, wordjr);
  fastts(Start, "mailto", SCHEME, WORD, wordjr);
  fastts(Start, "http", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "https", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "ftp", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "ftps", SLASH_SCHEME, WORD, wordjr);
  addToGroups(SCHEME, {
    scheme: true,
    ascii: true
  }, groups);
  addToGroups(SLASH_SCHEME, {
    slashscheme: true,
    ascii: true
  }, groups);
  customSchemes = customSchemes.sort((a, b) => a[0] > b[0] ? 1 : -1);
  for (let i = 0; i < customSchemes.length; i++) {
    const sch = customSchemes[i][0];
    const optionalSlashSlash = customSchemes[i][1];
    const flags = optionalSlashSlash ? {
      [scheme]: true
    } : {
      [slashscheme]: true
    };
    if (sch.indexOf("-") >= 0) {
      flags[domain] = true;
    } else if (!ASCII_LETTER.test(sch)) {
      flags[numeric] = true;
    } else if (DIGIT.test(sch)) {
      flags[asciinumeric] = true;
    } else {
      flags[ascii] = true;
    }
    ts(Start, sch, sch, flags);
  }
  ts(Start, "localhost", LOCALHOST, {
    ascii: true
  });
  Start.jd = new State(SYM);
  return {
    start: Start,
    tokens: Object.assign({
      groups
    }, tk)
  };
}
function run$1(start, str) {
  const iterable = stringToArray(str.replace(/[A-Z]/g, c => c.toLowerCase()));
  const charCount = iterable.length;
  const tokens = [];
  let cursor = 0;
  let charCursor = 0;
  while (charCursor < charCount) {
    let state = start;
    let nextState = null;
    let tokenLength = 0;
    let latestAccepting = null;
    let sinceAccepts = -1;
    let charsSinceAccepts = -1;
    while (charCursor < charCount && (nextState = state.go(iterable[charCursor]))) {
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        charsSinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts += iterable[charCursor].length;
        charsSinceAccepts++;
      }
      tokenLength += iterable[charCursor].length;
      cursor += iterable[charCursor].length;
      charCursor++;
    }
    cursor -= sinceAccepts;
    charCursor -= charsSinceAccepts;
    tokenLength -= sinceAccepts;
    tokens.push({
      t: latestAccepting.t,
      // token type/name
      v: str.slice(cursor - tokenLength, cursor),
      // string value
      s: cursor - tokenLength,
      // start index
      e: cursor
      // end index (excluding)
    });
  }
  return tokens;
}
function stringToArray(str) {
  const result = [];
  const len = str.length;
  let index = 0;
  while (index < len) {
    let first = str.charCodeAt(index);
    let second;
    let char = first < 55296 || first > 56319 || index + 1 === len || (second = str.charCodeAt(index + 1)) < 56320 || second > 57343 ? str[index] : str.slice(index, index + 2);
    result.push(char);
    index += char.length;
  }
  return result;
}
function fastts(state, input, t, defaultt, jr) {
  let next;
  const len = input.length;
  for (let i = 0; i < len - 1; i++) {
    const char = input[i];
    if (state.j[char]) {
      next = state.j[char];
    } else {
      next = new State(defaultt);
      next.jr = jr.slice();
      state.j[char] = next;
    }
    state = next;
  }
  next = new State(t);
  next.jr = jr.slice();
  state.j[input[len - 1]] = next;
  return next;
}
function decodeTlds(encoded) {
  const words = [];
  const stack = [];
  let i = 0;
  let digits = "0123456789";
  while (i < encoded.length) {
    let popDigitCount = 0;
    while (digits.indexOf(encoded[i + popDigitCount]) >= 0) {
      popDigitCount++;
    }
    if (popDigitCount > 0) {
      words.push(stack.join(""));
      for (let popCount = parseInt(encoded.substring(i, i + popDigitCount), 10); popCount > 0; popCount--) {
        stack.pop();
      }
      i += popDigitCount;
    } else {
      stack.push(encoded[i]);
      i++;
    }
  }
  return words;
}
var defaults = {
  defaultProtocol: "http",
  events: null,
  format: noop,
  formatHref: noop,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: Infinity,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Options(opts, defaultRender = null) {
  let o = Object.assign({}, defaults);
  if (opts) {
    o = Object.assign(o, opts instanceof Options ? opts.o : opts);
  }
  const ignoredTags = o.ignoreTags;
  const uppercaseIgnoredTags = [];
  for (let i = 0; i < ignoredTags.length; i++) {
    uppercaseIgnoredTags.push(ignoredTags[i].toUpperCase());
  }
  this.o = o;
  if (defaultRender) {
    this.defaultRender = defaultRender;
  }
  this.ignoreTags = uppercaseIgnoredTags;
}
Options.prototype = {
  o: defaults,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(ir) {
    return ir;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(token) {
    return this.get("validate", token.toString(), token);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(key, operator, token) {
    const isCallable = operator != null;
    let option = this.o[key];
    if (!option) {
      return option;
    }
    if (typeof option === "object") {
      option = token.t in option ? option[token.t] : defaults[key];
      if (typeof option === "function" && isCallable) {
        option = option(operator, token);
      }
    } else if (typeof option === "function" && isCallable) {
      option = option(operator, token.t, token);
    }
    return option;
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(key, operator, token) {
    let obj = this.o[key];
    if (typeof obj === "function" && operator != null) {
      obj = obj(operator, token.t, token);
    }
    return obj;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(token) {
    const ir = token.render(this);
    const renderFn = this.get("render", null, token) || this.defaultRender;
    return renderFn(ir, token.t, token);
  }
};
function noop(val) {
  return val;
}
var options = /* @__PURE__ */Object.freeze({
  __proto__: null,
  Options,
  defaults
});
function MultiToken(value, tokens) {
  this.t = "token";
  this.v = value;
  this.tk = tokens;
}
MultiToken.prototype = {
  isLink: false,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(scheme2) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(options2) {
    const val = this.toString();
    const truncate = options2.get("truncate", val, this);
    const formatted = options2.get("format", val, this);
    return truncate && formatted.length > truncate ? formatted.substring(0, truncate) + "\u2026" : formatted;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(options2) {
    return options2.get("formatHref", this.toHref(options2.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(protocol = defaults.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(protocol),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(options2) {
    return {
      type: this.t,
      value: this.toFormattedString(options2),
      isLink: this.isLink,
      href: this.toFormattedHref(options2),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(options2) {
    return options2.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(options2) {
    const token = this;
    const href = this.toHref(options2.get("defaultProtocol"));
    const formattedHref = options2.get("formatHref", href, this);
    const tagName = options2.get("tagName", href, token);
    const content = this.toFormattedString(options2);
    const attributes = {};
    const className = options2.get("className", href, token);
    const target = options2.get("target", href, token);
    const rel = options2.get("rel", href, token);
    const attrs = options2.getObj("attributes", href, token);
    const eventListeners = options2.getObj("events", href, token);
    attributes.href = formattedHref;
    if (className) {
      attributes.class = className;
    }
    if (target) {
      attributes.target = target;
    }
    if (rel) {
      attributes.rel = rel;
    }
    if (attrs) {
      Object.assign(attributes, attrs);
    }
    return {
      tagName,
      attributes,
      content,
      eventListeners
    };
  }
};
function createTokenClass(type, props) {
  class Token extends MultiToken {
    constructor(value, tokens) {
      super(value, tokens);
      this.t = type;
    }
  }
  for (const p in props) {
    Token.prototype[p] = props[p];
  }
  Token.t = type;
  return Token;
}
var Email = createTokenClass("email", {
  isLink: true,
  toHref() {
    return "mailto:" + this.toString();
  }
});
var Text = createTokenClass("text");
var Nl = createTokenClass("nl");
var Url = createTokenClass("url", {
  isLink: true,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(scheme2 = defaults.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${scheme2}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const tokens = this.tk;
    return tokens.length >= 2 && tokens[0].t !== LOCALHOST && tokens[1].t === COLON;
  }
});
var multi = /* @__PURE__ */Object.freeze({
  __proto__: null,
  Base: MultiToken,
  Email,
  MultiToken,
  Nl,
  Text,
  Url,
  createTokenClass
});
var makeState = arg => new State(arg);
function init$1({
  groups
}) {
  const qsAccepting = groups.domain.concat([AMPERSAND, ASTERISK, AT, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, NUM, PERCENT, PIPE, PLUS, POUND, SLASH, SYM, TILDE, UNDERSCORE]);
  const qsNonAccepting = [APOSTROPHE, COLON, COMMA, DOT, EXCLAMATION, PERCENT, QUERY, QUOTE, SEMI, OPENANGLEBRACKET, CLOSEANGLEBRACKET, OPENBRACE, CLOSEBRACE, CLOSEBRACKET, OPENBRACKET, OPENPAREN, CLOSEPAREN, FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN, LEFTCORNERBRACKET, RIGHTCORNERBRACKET, LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET, FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN];
  const localpartAccepting = [AMPERSAND, APOSTROPHE, ASTERISK, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, OPENBRACE, CLOSEBRACE, PERCENT, PIPE, PLUS, POUND, QUERY, SLASH, SYM, TILDE, UNDERSCORE];
  const Start = makeState();
  const Localpart = tt(Start, TILDE);
  ta(Localpart, localpartAccepting, Localpart);
  ta(Localpart, groups.domain, Localpart);
  const Domain = makeState(),
    Scheme = makeState(),
    SlashScheme = makeState();
  ta(Start, groups.domain, Domain);
  ta(Start, groups.scheme, Scheme);
  ta(Start, groups.slashscheme, SlashScheme);
  ta(Domain, localpartAccepting, Localpart);
  ta(Domain, groups.domain, Domain);
  const LocalpartAt = tt(Domain, AT);
  tt(Localpart, AT, LocalpartAt);
  tt(Scheme, AT, LocalpartAt);
  tt(SlashScheme, AT, LocalpartAt);
  const LocalpartDot = tt(Localpart, DOT);
  ta(LocalpartDot, localpartAccepting, Localpart);
  ta(LocalpartDot, groups.domain, Localpart);
  const EmailDomain = makeState();
  ta(LocalpartAt, groups.domain, EmailDomain);
  ta(EmailDomain, groups.domain, EmailDomain);
  const EmailDomainDot = tt(EmailDomain, DOT);
  ta(EmailDomainDot, groups.domain, EmailDomain);
  const Email$1 = makeState(Email);
  ta(EmailDomainDot, groups.tld, Email$1);
  ta(EmailDomainDot, groups.utld, Email$1);
  tt(LocalpartAt, LOCALHOST, Email$1);
  const EmailDomainHyphen = tt(EmailDomain, HYPHEN);
  tt(EmailDomainHyphen, HYPHEN, EmailDomainHyphen);
  ta(EmailDomainHyphen, groups.domain, EmailDomain);
  ta(Email$1, groups.domain, EmailDomain);
  tt(Email$1, DOT, EmailDomainDot);
  tt(Email$1, HYPHEN, EmailDomainHyphen);
  const EmailColon = tt(Email$1, COLON);
  ta(EmailColon, groups.numeric, Email);
  const DomainHyphen = tt(Domain, HYPHEN);
  const DomainDot = tt(Domain, DOT);
  tt(DomainHyphen, HYPHEN, DomainHyphen);
  ta(DomainHyphen, groups.domain, Domain);
  ta(DomainDot, localpartAccepting, Localpart);
  ta(DomainDot, groups.domain, Domain);
  const DomainDotTld = makeState(Url);
  ta(DomainDot, groups.tld, DomainDotTld);
  ta(DomainDot, groups.utld, DomainDotTld);
  ta(DomainDotTld, groups.domain, Domain);
  ta(DomainDotTld, localpartAccepting, Localpart);
  tt(DomainDotTld, DOT, DomainDot);
  tt(DomainDotTld, HYPHEN, DomainHyphen);
  tt(DomainDotTld, AT, LocalpartAt);
  const DomainDotTldColon = tt(DomainDotTld, COLON);
  const DomainDotTldColonPort = makeState(Url);
  ta(DomainDotTldColon, groups.numeric, DomainDotTldColonPort);
  const Url$1 = makeState(Url);
  const UrlNonaccept = makeState();
  ta(Url$1, qsAccepting, Url$1);
  ta(Url$1, qsNonAccepting, UrlNonaccept);
  ta(UrlNonaccept, qsAccepting, Url$1);
  ta(UrlNonaccept, qsNonAccepting, UrlNonaccept);
  tt(DomainDotTld, SLASH, Url$1);
  tt(DomainDotTldColonPort, SLASH, Url$1);
  const SchemeColon = tt(Scheme, COLON);
  const SlashSchemeColon = tt(SlashScheme, COLON);
  const SlashSchemeColonSlash = tt(SlashSchemeColon, SLASH);
  const UriPrefix = tt(SlashSchemeColonSlash, SLASH);
  ta(Scheme, groups.domain, Domain);
  tt(Scheme, DOT, DomainDot);
  tt(Scheme, HYPHEN, DomainHyphen);
  ta(SlashScheme, groups.domain, Domain);
  tt(SlashScheme, DOT, DomainDot);
  tt(SlashScheme, HYPHEN, DomainHyphen);
  ta(SchemeColon, groups.domain, Url$1);
  tt(SchemeColon, SLASH, Url$1);
  tt(SchemeColon, QUERY, Url$1);
  ta(UriPrefix, groups.domain, Url$1);
  ta(UriPrefix, qsAccepting, Url$1);
  tt(UriPrefix, SLASH, Url$1);
  const bracketPairs = [[OPENBRACE, CLOSEBRACE],
  // {}
  [OPENBRACKET, CLOSEBRACKET],
  // []
  [OPENPAREN, CLOSEPAREN],
  // ()
  [OPENANGLEBRACKET, CLOSEANGLEBRACKET],
  // <>
  [FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN],
  // （）
  [LEFTCORNERBRACKET, RIGHTCORNERBRACKET],
  // 「」
  [LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET],
  // 『』
  [FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN]
  // ＜＞
  ];
  for (let i = 0; i < bracketPairs.length; i++) {
    const [OPEN, CLOSE] = bracketPairs[i];
    const UrlOpen = tt(Url$1, OPEN);
    tt(UrlNonaccept, OPEN, UrlOpen);
    tt(UrlOpen, CLOSE, Url$1);
    const UrlOpenQ = makeState(Url);
    ta(UrlOpen, qsAccepting, UrlOpenQ);
    const UrlOpenSyms = makeState();
    ta(UrlOpen, qsNonAccepting);
    ta(UrlOpenQ, qsAccepting, UrlOpenQ);
    ta(UrlOpenQ, qsNonAccepting, UrlOpenSyms);
    ta(UrlOpenSyms, qsAccepting, UrlOpenQ);
    ta(UrlOpenSyms, qsNonAccepting, UrlOpenSyms);
    tt(UrlOpenQ, CLOSE, Url$1);
    tt(UrlOpenSyms, CLOSE, Url$1);
  }
  tt(Start, LOCALHOST, DomainDotTld);
  tt(Start, NL, Nl);
  return {
    start: Start,
    tokens: tk
  };
}
function run(start, input, tokens) {
  let len = tokens.length;
  let cursor = 0;
  let multis = [];
  let textTokens = [];
  while (cursor < len) {
    let state = start;
    let secondState = null;
    let nextState = null;
    let multiLength = 0;
    let latestAccepting = null;
    let sinceAccepts = -1;
    while (cursor < len && !(secondState = state.go(tokens[cursor].t))) {
      textTokens.push(tokens[cursor++]);
    }
    while (cursor < len && (nextState = secondState || state.go(tokens[cursor].t))) {
      secondState = null;
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts++;
      }
      cursor++;
      multiLength++;
    }
    if (sinceAccepts < 0) {
      cursor -= multiLength;
      if (cursor < len) {
        textTokens.push(tokens[cursor]);
        cursor++;
      }
    } else {
      if (textTokens.length > 0) {
        multis.push(initMultiToken(Text, input, textTokens));
        textTokens = [];
      }
      cursor -= sinceAccepts;
      multiLength -= sinceAccepts;
      const Multi = latestAccepting.t;
      const subtokens = tokens.slice(cursor - multiLength, cursor);
      multis.push(initMultiToken(Multi, input, subtokens));
    }
  }
  if (textTokens.length > 0) {
    multis.push(initMultiToken(Text, input, textTokens));
  }
  return multis;
}
function initMultiToken(Multi, input, tokens) {
  const startIdx = tokens[0].s;
  const endIdx = tokens[tokens.length - 1].e;
  const value = input.slice(startIdx, endIdx);
  return new Multi(value, tokens);
}
var warn = typeof console !== "undefined" && console && console.warn || (() => {});
var warnAdvice = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.";
var INIT = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: false
};
function reset() {
  State.groups = {};
  INIT.scanner = null;
  INIT.parser = null;
  INIT.tokenQueue = [];
  INIT.pluginQueue = [];
  INIT.customSchemes = [];
  INIT.initialized = false;
  return INIT;
}
function registerTokenPlugin(name, plugin) {
  if (typeof plugin !== "function") {
    throw new Error(`linkifyjs: Invalid token plugin ${plugin} (expects function)`);
  }
  for (let i = 0; i < INIT.tokenQueue.length; i++) {
    if (name === INIT.tokenQueue[i][0]) {
      warn(`linkifyjs: token plugin "${name}" already registered - will be overwritten`);
      INIT.tokenQueue[i] = [name, plugin];
      return;
    }
  }
  INIT.tokenQueue.push([name, plugin]);
  if (INIT.initialized) {
    warn(`linkifyjs: already initialized - will not register token plugin "${name}" ${warnAdvice}`);
  }
}
function registerPlugin(name, plugin) {
  if (typeof plugin !== "function") {
    throw new Error(`linkifyjs: Invalid plugin ${plugin} (expects function)`);
  }
  for (let i = 0; i < INIT.pluginQueue.length; i++) {
    if (name === INIT.pluginQueue[i][0]) {
      warn(`linkifyjs: plugin "${name}" already registered - will be overwritten`);
      INIT.pluginQueue[i] = [name, plugin];
      return;
    }
  }
  INIT.pluginQueue.push([name, plugin]);
  if (INIT.initialized) {
    warn(`linkifyjs: already initialized - will not register plugin "${name}" ${warnAdvice}`);
  }
}
function registerCustomProtocol(scheme2, optionalSlashSlash = false) {
  if (INIT.initialized) {
    warn(`linkifyjs: already initialized - will not register custom scheme "${scheme2}" ${warnAdvice}`);
  }
  if (!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(scheme2)) {
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  }
  INIT.customSchemes.push([scheme2, optionalSlashSlash]);
}
function init() {
  INIT.scanner = init$2(INIT.customSchemes);
  for (let i = 0; i < INIT.tokenQueue.length; i++) {
    INIT.tokenQueue[i][1]({
      scanner: INIT.scanner
    });
  }
  INIT.parser = init$1(INIT.scanner.tokens);
  for (let i = 0; i < INIT.pluginQueue.length; i++) {
    INIT.pluginQueue[i][1]({
      scanner: INIT.scanner,
      parser: INIT.parser
    });
  }
  INIT.initialized = true;
  return INIT;
}
function tokenize(str) {
  if (!INIT.initialized) {
    init();
  }
  return run(INIT.parser.start, str, run$1(INIT.scanner.start, str));
}
tokenize.scan = run$1;
function find(str, type = null, opts = null) {
  if (type && typeof type === "object") {
    if (opts) {
      throw Error(`linkifyjs: Invalid link type ${type}; must be a string`);
    }
    opts = type;
    type = null;
  }
  const options2 = new Options(opts);
  const tokens = tokenize(str);
  const filtered = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.isLink && (!type || token.t === type) && options2.check(token)) {
      filtered.push(token.toFormattedObject(options2));
    }
  }
  return filtered;
}
function test(str, type = null) {
  const tokens = tokenize(str);
  return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].t === type);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9saW5raWZ5anMuNC4zLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2Rpc3QvbGlua2lmeS5tanMiXSwibmFtZXMiOlsibGlua2lmeWpzXzRfM18yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIk11bHRpVG9rZW4iLCJPcHRpb25zIiwiU3RhdGUiLCJjcmVhdGVUb2tlbkNsYXNzIiwiZmluZCIsImluaXQiLCJtdWx0aSIsIm9wdGlvbnMiLCJyZWdleHAiLCJyZWdpc3RlckN1c3RvbVByb3RvY29sIiwicmVnaXN0ZXJQbHVnaW4iLCJyZWdpc3RlclRva2VuUGx1Z2luIiwicmVzZXQiLCJzdHJpbmdUb0FycmF5IiwidGVzdCIsInRleHQiLCJ0b2tlbml6ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJlbmNvZGVkVGxkcyIsImVuY29kZWRVdGxkcyIsIm51bWVyaWMiLCJhc2NpaSIsImFscGhhIiwiYXNjaWludW1lcmljIiwiYWxwaGFudW1lcmljIiwiZG9tYWluIiwiZW1vamkiLCJzY2hlbWUiLCJzbGFzaHNjaGVtZSIsIndoaXRlc3BhY2UiLCJyZWdpc3Rlckdyb3VwIiwibmFtZSIsImdyb3VwcyIsImFkZFRvR3JvdXBzIiwidCIsImZsYWdzIiwiayIsImdyb3VwIiwiaW5kZXhPZiIsInB1c2giLCJmbGFnc0ZvclRva2VuIiwicmVzdWx0IiwiYyIsInRva2VuIiwiaiIsImpyIiwiamQiLCJwcm90b3R5cGUiLCJhY2NlcHRzIiwiZ28iLCJpbnB1dCIsInN0YXRlIiwibmV4dFN0YXRlIiwiaSIsImxlbmd0aCIsInJlZ2V4IiwibmV4dFN0YXRlMiIsImhhcyIsImV4YWN0T25seSIsInRhIiwiaW5wdXRzIiwibmV4dCIsInR0IiwidHIiLCJyZWdleHAyIiwidHMiLCJsZW4iLCJ0ZW1wbGF0ZVN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXBwbHkiLCJhbGxGbGFncyIsIldPUkQiLCJVV09SRCIsIkFTQ0lJTlVNRVJJQ0FMIiwiQUxQSEFOVU1FUklDQUwiLCJMT0NBTEhPU1QiLCJUTEQiLCJVVExEIiwiU0NIRU1FIiwiU0xBU0hfU0NIRU1FIiwiTlVNIiwiV1MiLCJOTCIsIk9QRU5CUkFDRSIsIkNMT1NFQlJBQ0UiLCJPUEVOQlJBQ0tFVCIsIkNMT1NFQlJBQ0tFVCIsIk9QRU5QQVJFTiIsIkNMT1NFUEFSRU4iLCJPUEVOQU5HTEVCUkFDS0VUIiwiQ0xPU0VBTkdMRUJSQUNLRVQiLCJGVUxMV0lEVEhMRUZUUEFSRU4iLCJGVUxMV0lEVEhSSUdIVFBBUkVOIiwiTEVGVENPUk5FUkJSQUNLRVQiLCJSSUdIVENPUk5FUkJSQUNLRVQiLCJMRUZUV0hJVEVDT1JORVJCUkFDS0VUIiwiUklHSFRXSElURUNPUk5FUkJSQUNLRVQiLCJGVUxMV0lEVEhMRVNTVEhBTiIsIkZVTExXSURUSEdSRUFURVJUSEFOIiwiQU1QRVJTQU5EIiwiQVBPU1RST1BIRSIsIkFTVEVSSVNLIiwiQVQiLCJCQUNLU0xBU0giLCJCQUNLVElDSyIsIkNBUkVUIiwiQ09MT04iLCJDT01NQSIsIkRPTExBUiIsIkRPVCIsIkVRVUFMUyIsIkVYQ0xBTUFUSU9OIiwiSFlQSEVOIiwiUEVSQ0VOVCIsIlBJUEUiLCJQTFVTIiwiUE9VTkQiLCJRVUVSWSIsIlFVT1RFIiwiRlVMTFdJRFRITUlERExFRE9UIiwiU0VNSSIsIlNMQVNIIiwiVElMREUiLCJVTkRFUlNDT1JFIiwiRU1PSkkkMSIsIlNZTSIsInRrIiwiZnJlZXplIiwiX19wcm90b19fIiwiRU1PSkkiLCJBU0NJSV9MRVRURVIiLCJMRVRURVIiLCJFTU9KSV9WQVJJQVRJT04kMSIsIkRJR0lUIiwiU1BBQ0UiLCJFTU9KSV9WQVJJQVRJT04iLCJDUiIsIkxGIiwiRU1PSklfSk9JTkVSIiwiT0JKRUNUX1JFUExBQ0VNRU5UIiwidGxkcyIsInV0bGRzIiwiaW5pdCQyIiwiY3VzdG9tU2NoZW1lcyIsIlN0YXJ0IiwiZGVjb2RlVGxkcyIsIk51bSIsIkFzY2lpbnVtZXJpYyIsIkFscGhhbnVtZXJpYyIsIldvcmQiLCJVV29yZCIsIk5sMiIsIkNyIiwiV3MiLCJFbW9qaSIsIkVtb2ppSm9pbmVyIiwid29yZGpyIiwidXdvcmRqciIsImZhc3R0cyIsInRsZCIsInV0bGQiLCJzb3J0IiwiYSIsImIiLCJzY2giLCJvcHRpb25hbFNsYXNoU2xhc2giLCJzdGFydCIsInRva2VucyIsInJ1biQxIiwic3RyIiwiaXRlcmFibGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJjaGFyQ291bnQiLCJjdXJzb3IiLCJjaGFyQ3Vyc29yIiwidG9rZW5MZW5ndGgiLCJsYXRlc3RBY2NlcHRpbmciLCJzaW5jZUFjY2VwdHMiLCJjaGFyc1NpbmNlQWNjZXB0cyIsInYiLCJzbGljZSIsInMiLCJlIiwiaW5kZXgiLCJmaXJzdCIsImNoYXJDb2RlQXQiLCJzZWNvbmQiLCJjaGFyIiwiZGVmYXVsdHQiLCJlbmNvZGVkIiwid29yZHMiLCJzdGFjayIsImRpZ2l0cyIsInBvcERpZ2l0Q291bnQiLCJqb2luIiwicG9wQ291bnQiLCJwYXJzZUludCIsInN1YnN0cmluZyIsInBvcCIsImRlZmF1bHRzIiwiZGVmYXVsdFByb3RvY29sIiwiZXZlbnRzIiwiZm9ybWF0Iiwibm9vcCIsImZvcm1hdEhyZWYiLCJubDJiciIsInRhZ05hbWUiLCJ0YXJnZXQiLCJyZWwiLCJ2YWxpZGF0ZSIsInRydW5jYXRlIiwiSW5maW5pdHkiLCJjbGFzc05hbWUiLCJhdHRyaWJ1dGVzIiwiaWdub3JlVGFncyIsInJlbmRlciIsIm9wdHMiLCJkZWZhdWx0UmVuZGVyIiwibyIsImlnbm9yZWRUYWdzIiwidXBwZXJjYXNlSWdub3JlZFRhZ3MiLCJ0b1VwcGVyQ2FzZSIsImlyIiwiY2hlY2siLCJnZXQiLCJ0b1N0cmluZyIsImtleSIsIm9wZXJhdG9yIiwiaXNDYWxsYWJsZSIsIm9wdGlvbiIsImdldE9iaiIsIm9iaiIsInJlbmRlckZuIiwidmFsIiwidmFsdWUiLCJpc0xpbmsiLCJ0b0hyZWYiLCJzY2hlbWUyIiwidG9Gb3JtYXR0ZWRTdHJpbmciLCJvcHRpb25zMiIsImZvcm1hdHRlZCIsInRvRm9ybWF0dGVkSHJlZiIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInRvT2JqZWN0IiwicHJvdG9jb2wiLCJ0eXBlIiwiaHJlZiIsImVuZCIsInRvRm9ybWF0dGVkT2JqZWN0IiwiZm9ybWF0dGVkSHJlZiIsImNvbnRlbnQiLCJhdHRycyIsImV2ZW50TGlzdGVuZXJzIiwiY2xhc3MiLCJwcm9wcyIsIlRva2VuIiwiY29uc3RydWN0b3IiLCJwIiwiRW1haWwiLCJUZXh0IiwiTmwiLCJVcmwiLCJoYXNQcm90b2NvbCIsIkJhc2UiLCJtYWtlU3RhdGUiLCJhcmciLCJpbml0JDEiLCJxc0FjY2VwdGluZyIsImNvbmNhdCIsInFzTm9uQWNjZXB0aW5nIiwibG9jYWxwYXJ0QWNjZXB0aW5nIiwiTG9jYWxwYXJ0IiwiRG9tYWluIiwiU2NoZW1lIiwiU2xhc2hTY2hlbWUiLCJMb2NhbHBhcnRBdCIsIkxvY2FscGFydERvdCIsIkVtYWlsRG9tYWluIiwiRW1haWxEb21haW5Eb3QiLCJFbWFpbCQxIiwiRW1haWxEb21haW5IeXBoZW4iLCJFbWFpbENvbG9uIiwiRG9tYWluSHlwaGVuIiwiRG9tYWluRG90IiwiRG9tYWluRG90VGxkIiwiRG9tYWluRG90VGxkQ29sb24iLCJEb21haW5Eb3RUbGRDb2xvblBvcnQiLCJVcmwkMSIsIlVybE5vbmFjY2VwdCIsIlNjaGVtZUNvbG9uIiwiU2xhc2hTY2hlbWVDb2xvbiIsIlNsYXNoU2NoZW1lQ29sb25TbGFzaCIsIlVyaVByZWZpeCIsImJyYWNrZXRQYWlycyIsIk9QRU4iLCJDTE9TRSIsIlVybE9wZW4iLCJVcmxPcGVuUSIsIlVybE9wZW5TeW1zIiwicnVuIiwibXVsdGlzIiwidGV4dFRva2VucyIsInNlY29uZFN0YXRlIiwibXVsdGlMZW5ndGgiLCJpbml0TXVsdGlUb2tlbiIsIk11bHRpIiwic3VidG9rZW5zIiwic3RhcnRJZHgiLCJlbmRJZHgiLCJ3YXJuIiwiY29uc29sZSIsIndhcm5BZHZpY2UiLCJJTklUIiwic2Nhbm5lciIsInBhcnNlciIsInRva2VuUXVldWUiLCJwbHVnaW5RdWV1ZSIsImluaXRpYWxpemVkIiwicGx1Z2luIiwiRXJyb3IiLCJzY2FuIiwiZmlsdGVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUJBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFULEtBQUE7RUFBQVUsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQXJCLHVCQUFBOzs7QUNHQSxJQUFNc0IsV0FBQSxHQUFjO0FBRXBCLElBQU1DLFlBQUEsR0FBZTtBQWdCckIsSUFBTUMsT0FBQSxHQUFVO0FBQ2hCLElBQU1DLEtBQUEsR0FBUTtBQUNkLElBQU1DLEtBQUEs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Mk4sSUFBSTtFQUNoQyxNQUFNbEQsTUFBQSxHQUFTMUosUUFBQSxDQUFTNEosR0FBRztFQUMzQixNQUFNMEosUUFBQSxHQUFXLEVBQUM7RUFDbEIsU0FBUy9RLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUltSCxNQUFBLENBQU9sSCxNQUFBLEVBQVFELENBQUEsSUFBSztJQUN0QyxNQUFNVixLQUFBLEdBQVE2SCxNQUFBLENBQU9uSCxDQUFDO0lBQ3RCLElBQUlWLEtBQUEsQ0FBTWtNLE1BQUEsS0FBVyxDQUFDVyxJQUFBLElBQVE3TSxLQUFBLENBQU1ULENBQUEsS0FBTXNOLElBQUEsS0FBU1AsUUFBQSxDQUFRaEIsS0FBQSxDQUFNdEwsS0FBSyxHQUFHO01BQ3ZFeVIsUUFBQSxDQUFTN1IsSUFBQSxDQUFLSSxLQUFBLENBQU1nTixpQkFBQSxDQUFrQlYsUUFBTyxDQUFDO0lBQ2hEO0VBQ0Y7RUFDQSxPQUFPbUYsUUFBQTtBQUNUO0FBa0JBLFNBQVN4VCxLQUFLOEosR0FBQSxFQUFLOEUsSUFBQSxHQUFPLE1BQU07RUFDOUIsTUFBTWhGLE1BQUEsR0FBUzFKLFFBQUEsQ0FBUzRKLEdBQUc7RUFDM0IsT0FBT0YsTUFBQSxDQUFPbEgsTUFBQSxLQUFXLEtBQUtrSCxNQUFBLENBQU8sQ0FBQyxFQUFFcUUsTUFBQSxLQUFXLENBQUNXLElBQUEsSUFBUWhGLE1BQUEsQ0FBTyxDQUFDLEVBQUV0SSxDQUFBLEtBQU1zTixJQUFBO0FBQzlFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWlsZWFybi9jbGllbnQvYXBwcy9iZXR0ZXItbWluZC9vdXQifQ==